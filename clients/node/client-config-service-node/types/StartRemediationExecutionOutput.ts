import { _UnmarshalledResourceKey } from "./_ResourceKey";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartRemediationExecutionOutput shape
 */
export interface StartRemediationExecutionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns a failure message. For example, the resource is already compliant.</p>
   */
  FailureMessage?: string;

  /**
   * <p>For resources that have failed to start execution, the API returns a resource key object.</p>
   */
  FailedItems?: Array<_UnmarshalledResourceKey>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
