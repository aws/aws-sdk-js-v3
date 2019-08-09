import { _UnmarshalledLifecyclePolicy } from "./_LifecyclePolicy";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutLifecycleConfigurationOutput shape
 */
export interface PutLifecycleConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of lifecycle management policies. Currently, EFS supports a maximum of one policy per file system.</p>
   */
  LifecyclePolicies?: Array<_UnmarshalledLifecyclePolicy>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
