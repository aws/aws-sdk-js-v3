import { _UnmarshalledComplianceSummary } from "./_ComplianceSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface GetComplianceSummaryByConfigRuleOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The number of AWS Config rules that are compliant and the number that are noncompliant, up to a maximum of 25 for each.</p>
   */
  ComplianceSummary?: _UnmarshalledComplianceSummary;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
