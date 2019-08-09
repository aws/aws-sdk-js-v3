import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutLifecycleEventHookExecutionStatusOutput shape
 */
export interface PutLifecycleEventHookExecutionStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The execution ID of the lifecycle event hook. A hook is specified in the <code>hooks</code> section of the deployment's AppSpec file.</p>
   */
  lifecycleEventHookExecutionId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
