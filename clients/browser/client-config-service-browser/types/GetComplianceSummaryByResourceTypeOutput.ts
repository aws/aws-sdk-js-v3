import { _UnmarshalledComplianceSummaryByResourceType } from "./_ComplianceSummaryByResourceType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface GetComplianceSummaryByResourceTypeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The number of resources that are compliant and the number that are noncompliant. If one or more resource types were provided with the request, the numbers are returned for each resource type. The maximum number returned is 100.</p>
   */
  ComplianceSummariesByResourceType?: Array<
    _UnmarshalledComplianceSummaryByResourceType
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
