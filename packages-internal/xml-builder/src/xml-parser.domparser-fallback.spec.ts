import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { parseXML as parseXMLWithoutDOMParser } from "./xml-parser";

type ParseXML = (xml: string) => any;

const STS_GET_CALLER_IDENTITY = `<GetCallerIdentityResponse xmlns="https://sts.amazonaws.com/doc/2011-06-15/">
  <GetCallerIdentityResult>
    <Arn>arn:aws:sts::123456789012:assumed-role/Admin&amp;Ops/session&lt;1&gt;</Arn>
    <UserId>AROAEXAMPLE:session</UserId>
    <Account>123456789012</Account>
  </GetCallerIdentityResult>
  <ResponseMetadata>
    <RequestId>01234567-89ab-cdef-0123-456789abcdef</RequestId>
  </ResponseMetadata>
</GetCallerIdentityResponse>`;

const S3_LIST_BUCKETS = `<?xml version="1.0" encoding="UTF-8"?>
<ListAllMyBucketsResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
  <Owner><ID>abc123</ID><DisplayName>owner&apos;s &quot;name&quot;</DisplayName></Owner>
  <Buckets>
    <Bucket><Name>bucket-one</Name><CreationDate>2026-01-01T00:00:00.000Z</CreationDate></Bucket>
    <Bucket><Name>bucket-two</Name><CreationDate>2026-02-01T00:00:00.000Z</CreationDate></Bucket>
  </Buckets>
</ListAllMyBucketsResult>`;

const S3_LIST_OBJECTS_V2 = `<?xml version="1.0" encoding="UTF-8"?>
<ListBucketResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
  <Name>bucket-one</Name>
  <Prefix></Prefix>
  <KeyCount>2</KeyCount>
  <MaxKeys>1000</MaxKeys>
  <IsTruncated>false</IsTruncated>
  <Contents><Key>caf&#xE9;-&#233;.txt</Key><Size>5</Size><ETag>&quot;d41d8cd98f00b204e9800998ecf8427e&quot;</ETag></Contents>
  <Contents><Key>dir/a&amp;b&lt;c&gt;.txt</Key><Size>0</Size><StorageClass>STANDARD</StorageClass></Contents>
</ListBucketResult>`;

const ERROR_RESPONSE = `<ErrorResponse xmlns="https://sts.amazonaws.com/doc/2011-06-15/">
  <Error><Type>Sender</Type><Code>InvalidClientTokenId</Code><Message>The security token included in the request is invalid.</Message></Error>
  <RequestId>req-1</RequestId>
</ErrorResponse>`;

const ATTRIBUTES_AND_EMPTY = `<Root a="1" b="x&amp;y"><Empty/><EmptyWithAttr k="v"/><List><Item>1</Item><Item>2</Item></List></Root>`;

const CORPUS = {
  STS_GET_CALLER_IDENTITY,
  S3_LIST_BUCKETS,
  S3_LIST_OBJECTS_V2,
  ERROR_RESPONSE,
  ATTRIBUTES_AND_EMPTY,
};

const MALFORMED = [`<Root><Unclosed></Root>`, `<Root><A>text</A`, `not xml at all`];

async function loadBrowserParser(): Promise<ParseXML> {
  vi.resetModules();
  return (await import("./parse-xml.browser")).parseXML;
}

describe("parse-xml.browser", () => {
  const RealDOMParser = globalThis.DOMParser;

  it("has DOMParser in the test environment", () => {
    expect(typeof RealDOMParser).toBe("function");
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  describe("with DOMParser", () => {
    let constructed = 0;

    beforeEach(() => {
      constructed = 0;
      vi.stubGlobal(
        "DOMParser",
        class CountingDOMParser extends RealDOMParser {
          public constructor() {
            super();
            ++constructed;
          }
        }
      );
    });

    it("creates DOMParser once, lazily", async () => {
      const parseXML = await loadBrowserParser();
      expect(constructed).toBe(0);
      parseXML(STS_GET_CALLER_IDENTITY);
      parseXML(S3_LIST_BUCKETS);
      expect(constructed).toBe(1);
    });

    it.each(MALFORMED)("throws on malformed XML: %s", async (xml) => {
      const parseXML = await loadBrowserParser();
      expect(() => parseXML(xml)).toThrowError("DOMParser XML parsing error.");
    });
  });

  describe("without DOMParser", () => {
    beforeEach(() => {
      vi.stubGlobal("DOMParser", undefined);
      vi.stubGlobal("Node", undefined);
    });

    it("does not throw a ReferenceError", async () => {
      const parseXML = await loadBrowserParser();
      expect(typeof DOMParser).toBe("undefined");
      expect(() => parseXML(STS_GET_CALLER_IDENTITY)).not.toThrow();
    });

    it("parses STS GetCallerIdentity", async () => {
      const parseXML = await loadBrowserParser();
      expect(parseXML(STS_GET_CALLER_IDENTITY)).toEqual({
        GetCallerIdentityResponse: {
          xmlns: "https://sts.amazonaws.com/doc/2011-06-15/",
          GetCallerIdentityResult: {
            Arn: "arn:aws:sts::123456789012:assumed-role/Admin&Ops/session<1>",
            UserId: "AROAEXAMPLE:session",
            Account: "123456789012",
          },
          ResponseMetadata: { RequestId: "01234567-89ab-cdef-0123-456789abcdef" },
        },
      });
    });

    it("parses S3 ListObjectsV2 with references", async () => {
      const parseXML = await loadBrowserParser();
      const { ListBucketResult } = parseXML(S3_LIST_OBJECTS_V2);
      expect(ListBucketResult.Prefix).toBe("");
      expect(ListBucketResult.Contents.map((c: any) => c.Key)).toEqual(["café-é.txt", "dir/a&b<c>.txt"]);
      expect(ListBucketResult.Contents[0].ETag).toBe('"d41d8cd98f00b204e9800998ecf8427e"');
    });

    it("parses CDATA", async () => {
      const parseXML = await loadBrowserParser();
      expect(parseXML(`<R><Key><![CDATA[cdata <key> & more]]></Key></R>`)).toEqual({
        R: { Key: "cdata <key> & more" },
      });
    });

    it.each(MALFORMED)("throws on malformed XML: %s", async (xml) => {
      const parseXML = await loadBrowserParser();
      expect(() => parseXML(xml)).toThrowError(/@aws-sdk XML parse error/);
    });
  });

  describe("matches with and without DOMParser", () => {
    it.each(Object.entries(CORPUS))("%s", async (_, xml) => {
      const withDOMParser = (await loadBrowserParser())(xml);

      vi.stubGlobal("DOMParser", undefined);
      const withoutDOMParser = (await loadBrowserParser())(xml);

      expect(withoutDOMParser).toEqual(withDOMParser);
      expect(withoutDOMParser).toEqual(parseXMLWithoutDOMParser(xml));
    });
  });
});
