import { _UnmarshalledSecurityConfiguration } from "./_SecurityConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetSecurityConfigurationsOutput shape
 */
export interface GetSecurityConfigurationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of security configurations.</p>
   */
  SecurityConfigurations?: Array<_UnmarshalledSecurityConfiguration>;

  /**
   * <p>A continuation token, if there are more security configurations to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
