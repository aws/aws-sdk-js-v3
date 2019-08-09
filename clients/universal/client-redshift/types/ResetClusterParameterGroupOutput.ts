import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface ResetClusterParameterGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the cluster parameter group.</p>
   */
  ParameterGroupName?: string;

  /**
   * <p>The status of the parameter group. For example, if you made a change to a parameter group name-value pair, then the change could be pending a reboot of an associated cluster.</p>
   */
  ParameterGroupStatus?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
