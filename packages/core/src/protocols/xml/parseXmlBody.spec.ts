import type { SerdeContext } from "@smithy/types";
import { toUtf8 } from "@smithy/util-utf8";

import { parseXmlBody } from "./parseXmlBody";

describe(parseXmlBody.name, () => {
  const context = {
    utf8Encoder: toUtf8,
  };
  it("should parse xml", async () => {
    const xml = Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
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
</ListAllMyBucketsResult>
`);
    const parsed = await parseXmlBody(xml, context as any as SerdeContext);
    expect(parsed).toEqual({
      Buckets: { Bucket: { CreationDate: "timestamp", Name: "string" } },
      Owner: { DisplayName: "string", ID: "string" },
    });
  });

  it("should throw on incomplete xml", async () => {
    const xml = Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
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
`);
    const parsed = await parseXmlBody(xml, context as any as SerdeContext).catch((_) => _);
    expect(parsed.toString()).toEqual(`Error: Unclosed tag 'ListAllMyBucketsResult'.:2:1`);
  });

  it("should throw on incomplete xml", async () => {
    const xml = Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<ListAllMyBucketsResult>
   <Buckets>
      <Bucket>
         <CreationDate>timestamp</Creatio
`);
    const parsed = await parseXmlBody(xml, context as any as SerdeContext).catch((_) => _);
    expect(parsed.toString()).toEqual(`Error: Closing tag 'Creatio' doesn't have proper closing.:6:1`);
  });
});
