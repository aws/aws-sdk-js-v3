import { _UnmarshalledRetentionConfiguration } from "./_RetentionConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutRetentionConfigurationOutput shape
 */
export interface PutRetentionConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns a retention configuration object.</p>
   */
  RetentionConfiguration?: _UnmarshalledRetentionConfiguration;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
