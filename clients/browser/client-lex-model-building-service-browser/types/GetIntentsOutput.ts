import { _UnmarshalledIntentMetadata } from "./_IntentMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetIntentsOutput shape
 */
export interface GetIntentsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>Intent</code> objects. For more information, see <a>PutBot</a>.</p>
   */
  intents?: Array<_UnmarshalledIntentMetadata>;

  /**
   * <p>If the response is truncated, the response includes a pagination token that you can specify in your next request to fetch the next page of intents. </p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
