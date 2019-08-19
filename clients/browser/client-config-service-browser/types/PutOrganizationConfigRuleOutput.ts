import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutOrganizationConfigRuleOutput shape
 */
export interface PutOrganizationConfigRuleOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * _StringWithCharLimit256 shape
   */
  OrganizationConfigRuleArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
