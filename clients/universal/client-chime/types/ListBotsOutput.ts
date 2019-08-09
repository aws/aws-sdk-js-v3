import { _UnmarshalledBot } from "./_Bot";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListBotsOutput shape
 */
export interface ListBotsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>List of bots and bot details.</p>
   */
  Bots?: Array<_UnmarshalledBot>;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
