import { _UnmarshalledReceiptRuleSetMetadata } from "./_ReceiptRuleSetMetadata";
import { _UnmarshalledReceiptRule } from "./_ReceiptRule";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the metadata and receipt rules for the receipt rule set that is currently active.</p>
 */
export interface DescribeActiveReceiptRuleSetOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The metadata for the currently active receipt rule set. The metadata consists of the rule set name and a timestamp of when the rule set was created.</p>
   */
  Metadata?: _UnmarshalledReceiptRuleSetMetadata;

  /**
   * <p>The receipt rules that belong to the active rule set.</p>
   */
  Rules?: Array<_UnmarshalledReceiptRule>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
