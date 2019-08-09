import { _UnmarshalledCommand } from "./_Command";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListCommandsOutput shape
 */
export interface ListCommandsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>(Optional) The list of commands requested by the user. </p>
   */
  Commands?: Array<_UnmarshalledCommand>;

  /**
   * <p>(Optional) The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
