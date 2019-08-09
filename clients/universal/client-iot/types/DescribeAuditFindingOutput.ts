import { _UnmarshalledAuditFinding } from "./_AuditFinding";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAuditFindingOutput shape
 */
export interface DescribeAuditFindingOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The findings (results) of the audit.</p>
   */
  finding?: _UnmarshalledAuditFinding;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
