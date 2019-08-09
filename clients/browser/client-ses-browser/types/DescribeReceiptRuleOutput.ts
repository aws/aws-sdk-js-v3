import { _UnmarshalledReceiptRule } from "./_ReceiptRule";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the details of a receipt rule.</p>
 */
export interface DescribeReceiptRuleOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A data structure that contains the specified receipt rule's name, actions, recipients, domains, enabled status, scan status, and Transport Layer Security (TLS) policy.</p>
   */
  Rule?: _UnmarshalledReceiptRule;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
