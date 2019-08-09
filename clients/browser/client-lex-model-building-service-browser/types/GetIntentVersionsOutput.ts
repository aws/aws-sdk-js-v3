import { _UnmarshalledIntentMetadata } from "./_IntentMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetIntentVersionsOutput shape
 */
export interface GetIntentVersionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>IntentMetadata</code> objects, one for each numbered version of the intent plus one for the <code>$LATEST</code> version.</p>
   */
  intents?: Array<_UnmarshalledIntentMetadata>;

  /**
   * <p>A pagination token for fetching the next page of intent versions. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in the next request. </p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
