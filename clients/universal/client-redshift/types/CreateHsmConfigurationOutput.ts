import { _UnmarshalledHsmConfiguration } from "./_HsmConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateHsmConfigurationOutput shape
 */
export interface CreateHsmConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns information about an HSM configuration, which is an object that describes to Amazon Redshift clusters the information they require to connect to an HSM where they can store database encryption keys.</p>
   */
  HsmConfiguration?: _UnmarshalledHsmConfiguration;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
