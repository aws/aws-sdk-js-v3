import { _UnmarshalledCommand } from "./_Command";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>DescribeCommands</code> request.</p>
 */
export interface DescribeCommandsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>Command</code> objects that describe each of the specified commands.</p>
   */
  Commands?: Array<_UnmarshalledCommand>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
