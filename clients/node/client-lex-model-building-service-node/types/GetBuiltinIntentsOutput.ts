import { _UnmarshalledBuiltinIntentMetadata } from "./_BuiltinIntentMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBuiltinIntentsOutput shape
 */
export interface GetBuiltinIntentsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>builtinIntentMetadata</code> objects, one for each intent in the response.</p>
   */
  intents?: Array<_UnmarshalledBuiltinIntentMetadata>;

  /**
   * <p>A pagination token that fetches the next page of intents. If the response to this API call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of intents, specify the pagination token in the next request.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
