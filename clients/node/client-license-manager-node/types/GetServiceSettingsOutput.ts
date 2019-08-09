import { _UnmarshalledOrganizationConfiguration } from "./_OrganizationConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetServiceSettingsOutput shape
 */
export interface GetServiceSettingsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Regional S3 bucket path for storing reports, license trail event data, discovery data, etc.</p>
   */
  S3BucketArn?: string;

  /**
   * <p>SNS topic configured to receive notifications from License Manager.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>Indicates whether AWS Organizations has been integrated with License Manager for cross-account discovery.</p>
   */
  OrganizationConfiguration?: _UnmarshalledOrganizationConfiguration;

  /**
   * <p>Indicates whether cross-account discovery has been enabled.</p>
   */
  EnableCrossAccountsDiscovery?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
