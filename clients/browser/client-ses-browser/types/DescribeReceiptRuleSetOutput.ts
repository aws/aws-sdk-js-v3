import { _UnmarshalledReceiptRuleSetMetadata } from "./_ReceiptRuleSetMetadata";
import { _UnmarshalledReceiptRule } from "./_ReceiptRule";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the details of the specified receipt rule set.</p>
 */
export interface DescribeReceiptRuleSetOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The metadata for the receipt rule set, which consists of the rule set name and the timestamp of when the rule set was created.</p>
   */
  Metadata?: _UnmarshalledReceiptRuleSetMetadata;

  /**
   * <p>A list of the receipt rules that belong to the specified receipt rule set.</p>
   */
  Rules?: Array<_UnmarshalledReceiptRule>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
