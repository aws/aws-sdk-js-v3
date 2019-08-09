import { _UnmarshalledObjectLockConfiguration } from "./_ObjectLockConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetObjectLockConfigurationOutput shape
 */
export interface GetObjectLockConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The specified bucket's object lock configuration.</p>
   */
  ObjectLockConfiguration?: _UnmarshalledObjectLockConfiguration;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
