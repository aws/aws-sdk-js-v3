// CBOR
export { AwsSmithyRpcV2CborProtocol } from "./cbor/AwsSmithyRpcV2CborProtocol";

// JSON
export { AwsJson1_0Protocol } from "./json/AwsJson1_0Protocol";
export { AwsJson1_1Protocol } from "./json/AwsJson1_1Protocol";
export { AwsJsonRpcProtocol } from "./json/AwsJsonRpcProtocol";
export { AwsRestJsonProtocol } from "./json/AwsRestJsonProtocol";

// The JSON codec (v1 and v2) and JSON body helpers now live in @smithy/core.
// Re-export them so this package's public surface is unchanged while the
// implementation is shared instead of duplicated.
export {
  JsonCodec,
  JsonCodec2,
  JsonShapeDeserializer,
  JsonShapeDeserializer2,
  JsonShapeSerializer,
  JsonShapeSerializer2,
  loadJsonRpcErrorCode,
  loadRestJsonErrorCode,
  parseJsonBody,
  parseJsonErrorBody,
} from "@smithy/core/protocols";
export type { JsonSettings } from "@smithy/core/protocols";

// Query
export { AwsEc2QueryProtocol } from "./query/AwsEc2QueryProtocol";
export { AwsQueryProtocol } from "./query/AwsQueryProtocol";
export type { QuerySerializerSettings } from "./query/QuerySerializerSettings";
export { QueryShapeSerializer } from "./query/QueryShapeSerializer";

// XML
export { AwsRestXmlProtocol } from "./xml/AwsRestXmlProtocol";
export { XmlCodec } from "./xml/XmlCodec";
export type { XmlSettings } from "./xml/XmlCodec";
export { XmlShapeDeserializer } from "./xml/XmlShapeDeserializer";
export { XmlShapeSerializer } from "./xml/XmlShapeSerializer";

export { parseXmlBody, parseXmlErrorBody, loadRestXmlErrorCode } from "./xml/parseXmlBody";

// utilities
export { awsExpectUnion } from "./json/awsExpectUnion";
export { _toStr, _toBool, _toNum } from "./coercing-serializers";
