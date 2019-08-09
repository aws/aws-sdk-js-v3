import { _UnmarshalledMemberAccountStatus } from "./_MemberAccountStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetOrganizationConfigRuleDetailedStatusOutput shape
 */
export interface GetOrganizationConfigRuleDetailedStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * _OrganizationConfigRuleDetailedStatus shape
   */
  OrganizationConfigRuleDetailedStatus?: Array<
    _UnmarshalledMemberAccountStatus
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
