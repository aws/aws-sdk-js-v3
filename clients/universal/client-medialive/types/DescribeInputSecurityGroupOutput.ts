import { _UnmarshalledInputWhitelistRule } from "./_InputWhitelistRule";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * Placeholder documentation for DescribeInputSecurityGroupResponse
 */
export interface DescribeInputSecurityGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * Unique ARN of Input Security Group
   */
  Arn?: string;

  /**
   * The Id of the Input Security Group
   */
  Id?: string;

  /**
   * The list of inputs currently using this Input Security Group.
   */
  Inputs?: Array<string>;

  /**
   * The current state of the Input Security Group.
   */
  State?: "IDLE" | "IN_USE" | "UPDATING" | "DELETED" | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * Whitelist rules and their sync status
   */
  WhitelistRules?: Array<_UnmarshalledInputWhitelistRule>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
