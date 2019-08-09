import { _UnmarshalledAgentVersion } from "./_AgentVersion";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>DescribeAgentVersions</code> request.</p>
 */
export interface DescribeAgentVersionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The agent versions for the specified stack or configuration manager. Note that this value is the complete version number, not the abbreviated number used by the console.</p>
   */
  AgentVersions?: Array<_UnmarshalledAgentVersion>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
