import { XMLParser } from "fast-xml-parser";
import { describe, expect, test as it } from "vitest";

import { parseXML } from "./xml-parser";
import { parseXML as parseXMLBrowser } from "./xml-parser.browser";

const parser = new XMLParser({
  attributeNamePrefix: "",
  processEntities: {
    enabled: true,
    maxTotalExpansions: Infinity,
  },
  htmlEntities: true,
  ignoreAttributes: false,
  ignoreDeclaration: true,
  parseTagValue: false,
  trimValues: false,
  tagValueProcessor: (_: any, val: any) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
  maxNestedTags: Infinity,
});
parser.addEntity("#xD", "\r");
parser.addEntity("#10", "\n");

/**
 * Reference implementation that was used in the AWS SDK from 2020-2026.
 * We need to match its behavior for AWS service responses in XML format.
 * @internal
 */
function fxp(xmlString: string): any {
  return parser.parse(xmlString, true);
}

describe("xml parsing", () => {
  for (const { name, parse } of [
    { name: "fast-xml-parser", parse: fxp },
    { name: "@aws-sdk::AwsXmlParser", parse: parseXML },
    { name: "DOMParser", parse: parseXMLBrowser },
  ]) {
    describe(name, () => {
      it("should parse a valid xml string without xml header", () => {
        const xml = `<AssumeRoleResponse xmlns="https://sts.amazonaws.com/doc/2011-06-15/">
<AssumeRoleResult>
  <Credentials>
    <AccessKeyId>STS_AR_ACCESS_KEY_ID</AccessKeyId>
    <SecretAccessKey>STS_AR_SECRET_ACCESS_KEY</SecretAccessKey>
    <SessionToken>STS_AR_SESSION_TOKEN_us-west-2</SessionToken>
    <Expiration>3000-01-01T00:00:00.000Z</Expiration>
  </Credentials>
</AssumeRoleResult>
<ResponseMetadata>
  <RequestId>01234567-89ab-cdef-0123-456789abcdef</RequestId>
</ResponseMetadata>
</AssumeRoleResponse>`;
        const object = parse(xml);
        expect(object).toEqual({
          AssumeRoleResponse: {
            AssumeRoleResult: {
              Credentials: {
                AccessKeyId: "STS_AR_ACCESS_KEY_ID",
                Expiration: "3000-01-01T00:00:00.000Z",
                SecretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
                SessionToken: "STS_AR_SESSION_TOKEN_us-west-2",
              },
            },
            ResponseMetadata: {
              RequestId: "01234567-89ab-cdef-0123-456789abcdef",
            },
            xmlns: "https://sts.amazonaws.com/doc/2011-06-15/",
          },
        });
      });

      it("should parse ListBuckets response XML with xml header", () => {
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<ListAllMyBucketsResult>
   <Buckets>
      <Bucket>
         <BucketArn>string</BucketArn>
         <BucketRegion>string</BucketRegion>
         <CreationDate>timestamp</CreationDate>
         <Name>string</Name>
      </Bucket>
   </Buckets>
   <Owner>
      <DisplayName>string</DisplayName>
      <ID>string</ID>
   </Owner>
   <ContinuationToken>string</ContinuationToken>
   <Prefix>string</Prefix>
</ListAllMyBucketsResult>`;
        const object = parse(xml);
        expect(object).toEqual({
          ListAllMyBucketsResult: {
            Buckets: {
              Bucket: {
                BucketArn: "string",
                BucketRegion: "string",
                CreationDate: "timestamp",
                Name: "string",
              },
            },
            ContinuationToken: "string",
            Owner: {
              DisplayName: "string",
              ID: "string",
            },
            Prefix: "string",
          },
        });
      });

      it("should create empty objects", () => {
        const xml = `<XmlEmptyMapsResponse xmlns="https://example.com/">
          <XmlEmptyMapsResult>
              <myMap>
              </myMap>
          </XmlEmptyMapsResult>
      </XmlEmptyMapsResponse>`;
        const object = parse(xml);
        expect(object).toMatchObject({
          XmlEmptyMapsResponse: {
            xmlns: "https://example.com/",
            XmlEmptyMapsResult: {
              myMap: /\s*/,
            },
          },
        });
      });

      it("should understand collections of empty objects", () => {
        const xml = `<XmlEmptyMapsResponse xmlns="https://example.com/">
          <XmlEmptyMapsResult>
              <myMap />
              <myMap></myMap>
              <myMap />
              <myMap></myMap>
              <myMap />
          </XmlEmptyMapsResult>
      </XmlEmptyMapsResponse>`;
        const object = parse(xml);
        expect(object).toMatchObject({
          XmlEmptyMapsResponse: {
            xmlns: "https://example.com/",
            XmlEmptyMapsResult: {
              myMap: ["", "", "", "", ""],
            },
          },
        });
      });

      it("should parse xml (custom)", () => {
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<struct>
  <empty></empty>
  <text>abcdefg</text>
  <duplicate>dup1</duplicate>
  <duplicate>dup2</duplicate>
  <duplicate>dup3</duplicate>
  <spaced>\u0020s p a c e d\u0020</spaced>
  <nested>
    <empty></empty>
    <text>abcdefg</text>
    <duplicate>dup1</duplicate>
    <duplicate>dup2</duplicate>
    <duplicate>dup3</duplicate>
    <spaced>\u0020s p a c e d\u0020</spaced>
  </nested>
</struct>`;
        const object = parse(xml);
        expect(object).toEqual({
          struct: {
            empty: "",
            text: "abcdefg",
            duplicate: ["dup1", "dup2", "dup3"],
            spaced: " s p a c e d ",
            nested: {
              empty: "",
              text: "abcdefg",
              duplicate: ["dup1", "dup2", "dup3"],
              spaced: " s p a c e d ",
            },
          },
        });
      });
    });
  }

  const xmlSamples = [
    `<?xml version="1.0" encoding="UTF-8"?>
<struct>
  <duplicate>dup1</duplicate>
  <duplicate attr="2">dup2</duplicate>
  <duplicate attr="3">
      <spaced>\u0020s p a c e d\u0020</spaced>
      <symbol-chars>!@#$%^*()</symbol-chars>
      <number>1000000000000000000000000000000000000000000000000</number>
      <nested>
        <empty></empty>
        <duplicate>dup1</duplicate>
        <duplicate>dup2</duplicate>
      </nested>
  </duplicate>
</struct>
    `,
    `<?xml version="1.0" encoding="UTF-8"?>
    <x></x>`,
    `<x>   </x>`,
    `<?xml version="1.0" encoding="UTF-8"?><struct><duplicate>dup1</duplicate><duplicate attr="2">dup2</duplicate><duplicate attr="3"><spaced>\u0020s p a c e d\u0020</spaced><symbol-chars>!@#$%^*()</symbol-chars><number>1000000000000000000000000000000000000000000000000</number><nested><empty></empty><duplicate>dup1</duplicate><duplicate>dup2</duplicate></nested></duplicate></struct>`,
    `<x><y>z</y></x>`,
    `<x><y>  </y></x>`,
    `<x><y>  </y><y>  </y></x>`,
    `<ListGeoLocationsResponse xmlns="https://placeholder.amazonaws.com">
    <GeoLocationDetailsList>
        <GeoLocationDetails/>
        <GeoLocationDetails/>
        <GeoLocationDetails/>
    </GeoLocationDetailsList>
    <IsTruncated>
        false
    </IsTruncated>
    <MaxItems>
        0
    </MaxItems>
    <NextContinentCode>
        __NextContinentCode__
    </NextContinentCode>
    <NextCountryCode>
        __NextCountryCode__
    </NextCountryCode>
    <NextSubdivisionCode>
        __NextSubdivisionCode__
    </NextSubdivisionCode>
</ListGeoLocationsResponse>`,
  ];
  let i = 0;

  for (const xml of xmlSamples) {
    it(`should behave identically to fast-xml-parser as far as the SDK is concerned, case ${++i}`, () => {
      expect(parseXML(xml)).toEqual(fxp(xml));
      expect(parseXMLBrowser(xml)).toEqual(fxp(xml));
    });
  }

  it("should throw on incomplete xml (1 missing closing tag)", async () => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<ListAllMyBucketsResult>
   <Buckets>
      <Bucket>
         <CreationDate>timestamp</CreationDate>
         <Name>string</Name>
      </Bucket>
   </Buckets>
   <Owner>
      <DisplayName>string</DisplayName>
      <ID>string</ID>
   </Owner>
`;
    expect(() => parseXML(xml)).toThrowError();
  });

  it("should throw on incomplete xml (truncated mid-tag)", async () => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<ListAllMyBucketsResult>
   <Buckets>
      <Bucket>
         <CreationDate>timestamp</Creatio
`;
    expect(() => parseXML(xml)).toThrowError();
  });

  it("can parse a large amount of XML including entities", { timeout: 10_000 }, () => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<ListBucketResult>
   <IsTruncated>boolean</IsTruncated>
   <Marker>string</Marker>
   <NextMarker>string</NextMarker>
   <Contents>
      ${`<Object>
<ChecksumAlgorithm>string</ChecksumAlgorithm>
      <ChecksumType>string</ChecksumType>
      <ETag>&quot;098f6bcd4621d373cade4e832627b4f6&quot;</ETag>
      <Key>string</Key>
      <LastModified>timestamp</LastModified>
      <Owner>
         <DisplayName>string</DisplayName>
         <ID>string</ID>
      </Owner>
      <RestoreStatus>
         <IsRestoreInProgress>boolean</IsRestoreInProgress>
         <RestoreExpiryDate>timestamp</RestoreExpiryDate>
      </RestoreStatus>
      <Size>long</Size>
      <StorageClass>string</StorageClass>
</Object>`.repeat(2000)}
   </Contents>
   <Name>string</Name>
   <Prefix>string</Prefix>
   <Delimiter>string</Delimiter>
   <MaxKeys>integer</MaxKeys>
   <CommonPrefixes>
      <Prefix>string</Prefix>
   </CommonPrefixes>
   <EncodingType>string</EncodingType>
</ListBucketResult>`;

    expect(parseXML(xml)).toEqual(fxp(xml));
    expect(parseXMLBrowser(xml)).toEqual(fxp(xml));
  });

  it("can parse special characters", () => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<special>
  <a>&#xD;&#10;xyz</a>
  <b>&#xD;xyz</b>
  <c>&#10;xyz</c>
  <d>&amp;</d>
  <e>&lt;</e>
  <f>&gt;</f>
  <g>&quot;</g>
  <h>&apos;</h>
  <i>!@#$%^&amp;*()</i>
  <g>αβγδεζηθικλμνξοπρστυφχψω</g>
  <c>АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ</c>
  <h>🐪 גמל לא רואה את הדבשת שלו</h>
  <a>🤷 اللي ما يعرف الصقر 🦅 يشويه 🍗</a>
  <u>🦔Їжак з'їв яблуко🍎☀️</u>
  <u>🐺Вовків боятися😨 — в ліс🌲 не ходити</u>
  <hd>🏃💨 नौ दो ग्यारह होना</hd>
  <te>🌊🏊 నీళ్ళలో దిగితే గానీ ఈత రాదు</te>
  <tl>🐘🍌 யானைக்கும் அடி சறுக்கும்</tl>
  <bg>💃🤷 নাচতে না জানলে উঠোন বাঁকা</bg>
  <gr>🐒🫚 વાંદરાને શું ખબર અદરકનો સ્વાદ</gr>
  <c>我靠</c>
  <j>ぎゃふん</j>
  <k>하늘의 별 따기✨</k>
</special>`;

    expect(parseXML(xml)).toEqual(fxp(xml));
    expect(parseXMLBrowser(xml)).toEqual(fxp(xml));
  });

  it("throws on parsing error", () => {
    const xmlSamples = [`<unclosed`, `<unmatched></matched>`];

    for (const xml of xmlSamples) {
      expect(() => parseXMLBrowser(xml)).toThrowError();
      expect(() => parseXML(xml)).toThrowError();
      expect(() => fxp(xml)).toThrowError();
    }
  });

  describe("XML with mal intent", () => {
    it("ignores entity expansion attacks", () => {
      const xml = `<?xml version="1.0"?>
<!DOCTYPE lolz [
  <!ENTITY lol "lol">
  <!ENTITY lol2 "&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;">
  <!ENTITY lol3 "&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;">
]>
<root><data>&lol3;</data></root>`;

      const result = parseXML(xml);
      expect(result).toEqual({
        root: {
          data: "",
        },
      });
    });

    it("ignores quadratic blowup entity attacks", () => {
      const repeatedEntity = "A".repeat(50000);
      const xml = `<?xml version="1.0"?>
<!DOCTYPE foo [
  <!ENTITY big "${repeatedEntity}">
]>
<root>${"&big;".repeat(100)}</root>`;

      const result = parseXML(xml);
      expect(result).toEqual({
        root: "",
      });
    });

    it("does not process external entity (XXE) declarations", () => {
      const xml = `<?xml version="1.0"?>
<!DOCTYPE foo [
  <!ENTITY xxe SYSTEM "file:///etc/passwd">
]>
<root><data>&xxe;</data></root>`;

      const result = parseXML(xml);
      expect(result).toEqual({
        root: {
          data: "",
        },
      });
    });

    it("does not process parameter entity (XXE) declarations", () => {
      const xml = `<?xml version="1.0"?>
<!dOcTyPe foo [
  <!ENTITY % xxe SYSTEM "http://loooooooooooooocalhost/payload.dtd">
  %xxe;
]>
<root><data>safe</data></root>`;

      const result = parseXML(xml);
      expect(result).toEqual({
        root: {
          data: "safe",
        },
      });
    });

    it("ignores regex DoS attempts in entity-like patterns", () => {
      const malicious = "&" + "a".repeat(31) + ";";
      const xml = `<root><data>${malicious.repeat(10000)}</data></root>`;

      const start = Date.now();
      const result = parseXML(xml);
      const elapsed = Date.now() - start;

      expect(elapsed).toBeLessThan(5000);
      expect(result).toEqual({
        root: {
          data: "",
        },
      });
    });

    it("handles deeply nested entity-like references without hanging", () => {
      const payload = Array.from({ length: 10000 }, (_, i) => `&#x${i.toString(16)};`).join("");
      const xml = `<root><data>${payload}</data></root>`;

      const start = Date.now();
      const result = parseXML(xml);
      const elapsed = Date.now() - start;

      expect(elapsed).toBeLessThan(5000);
      expect(result).toEqual({
        root: {
          data: expect.any(String),
        },
      });
      expect(result.root.data).toMatch(/⛫⛬⛭⛮⛯⛰⛱/);
    });

    it("handles malformed entity patterns without catastrophic backtracking", () => {
      const xml = `<root><data>${"&amp".repeat(10000)}</data></root>`;

      const start = Date.now();
      const result = parseXML(xml);
      const elapsed = Date.now() - start;

      expect(elapsed).toBeLessThan(5000);
      expect(result).toEqual({
        root: {
          data: "&amp".repeat(10000),
        },
      });
    });
  });
});
