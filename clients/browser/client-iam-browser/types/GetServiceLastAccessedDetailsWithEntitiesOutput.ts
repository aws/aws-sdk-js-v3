import { _UnmarshalledEntityDetails } from "./_EntityDetails";
import { _UnmarshalledErrorDetails } from "./_ErrorDetails";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetServiceLastAccessedDetailsWithEntitiesOutput shape
 */
export interface GetServiceLastAccessedDetailsWithEntitiesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status of the job.</p>
   */
  JobStatus: "IN_PROGRESS" | "COMPLETED" | "FAILED" | string;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the report job was created.</p>
   */
  JobCreationDate: Date;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the generated report job was completed or failed.</p> <p>This field is null if the job is still in progress, as indicated by a job status value of <code>IN_PROGRESS</code>.</p>
   */
  JobCompletionDate: Date;

  /**
   * <p>An <code>EntityDetailsList</code> object that contains details about when an IAM entity (user or role) used group or policy permissions in an attempt to access the specified AWS service.</p>
   */
  EntityDetailsList: Array<_UnmarshalledEntityDetails>;

  /**
   * <p>A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the <code>Marker</code> request parameter to retrieve more items. Note that IAM might return fewer than the <code>MaxItems</code> number of results even when there are more results available. We recommend that you check <code>IsTruncated</code> after every call to ensure that you receive all your results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element is present and contains the value to use for the <code>Marker</code> parameter in a subsequent pagination request.</p>
   */
  Marker?: string;

  /**
   * <p>An object that contains details about the reason the operation failed.</p>
   */
  Error?: _UnmarshalledErrorDetails;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
