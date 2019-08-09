import { _UnmarshalledOrganizationConfigRuleStatus } from "./_OrganizationConfigRuleStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeOrganizationConfigRuleStatusesOutput shape
 */
export interface DescribeOrganizationConfigRuleStatusesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * _OrganizationConfigRuleStatuses shape
   */
  OrganizationConfigRuleStatuses?: Array<
    _UnmarshalledOrganizationConfigRuleStatus
  >;

  /**
   * _String shape
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
