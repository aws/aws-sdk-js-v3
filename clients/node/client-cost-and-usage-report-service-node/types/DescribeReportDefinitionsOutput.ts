import { _UnmarshalledReportDefinition } from "./_ReportDefinition";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>If the action is successful, the service sends back an HTTP 200 response.</p>
 */
export interface DescribeReportDefinitionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of AWS Cost and Usage reports owned by the account.</p>
   */
  ReportDefinitions?: Array<_UnmarshalledReportDefinition>;

  /**
   * <p>A generic string.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
