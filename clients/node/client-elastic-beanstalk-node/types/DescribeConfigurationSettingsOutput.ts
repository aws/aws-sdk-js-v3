import { _UnmarshalledConfigurationSettingsDescription } from "./_ConfigurationSettingsDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The results from a request to change the configuration settings of an environment.</p>
 */
export interface DescribeConfigurationSettingsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> A list of <a>ConfigurationSettingsDescription</a>. </p>
   */
  ConfigurationSettings?: Array<_UnmarshalledConfigurationSettingsDescription>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
