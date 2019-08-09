import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Contains the result of a successful invocation of the <code>ModifyDBParameterGroup</code> or <code>ResetDBParameterGroup</code> action. </p>
 */
export interface ResetDBParameterGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides the name of the DB parameter group.</p>
   */
  DBParameterGroupName?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
