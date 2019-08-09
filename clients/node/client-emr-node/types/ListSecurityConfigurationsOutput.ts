import { _UnmarshalledSecurityConfigurationSummary } from "./_SecurityConfigurationSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListSecurityConfigurationsOutput shape
 */
export interface ListSecurityConfigurationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The creation date and time, and name, of each security configuration.</p>
   */
  SecurityConfigurations?: Array<_UnmarshalledSecurityConfigurationSummary>;

  /**
   * <p>A pagination token that indicates the next set of results to retrieve. Include the marker in the next ListSecurityConfiguration call to retrieve the next page of results, if required.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
