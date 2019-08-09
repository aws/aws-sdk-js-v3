import { _JobResource, _UnmarshalledJobResource } from "./_JobResource";
import {
  _ShippingDetails,
  _UnmarshalledShippingDetails
} from "./_ShippingDetails";
import { _Notification, _UnmarshalledNotification } from "./_Notification";
import { _DataTransfer, _UnmarshalledDataTransfer } from "./_DataTransfer";
import { _JobLogs, _UnmarshalledJobLogs } from "./_JobLogs";

/**
 * <p>Contains information about a specific job including shipping information, job status, and other important metadata. This information is returned as a part of the response syntax of the <code>DescribeJob</code> action.</p>
 */
export interface _JobMetadata {
  /**
   * <p>The automatically generated ID for a job, for example <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  JobId?: string;

  /**
   * <p>The current status of the jobs.</p>
   */
  JobState?:
    | "New"
    | "PreparingAppliance"
    | "PreparingShipment"
    | "InTransitToCustomer"
    | "WithCustomer"
    | "InTransitToAWS"
    | "WithAWSSortingFacility"
    | "WithAWS"
    | "InProgress"
    | "Complete"
    | "Cancelled"
    | "Listing"
    | "Pending"
    | string;

  /**
   * <p>The type of job.</p>
   */
  JobType?: "IMPORT" | "EXPORT" | "LOCAL_USE" | string;

  /**
   * <p>The type of device used with this job.</p>
   */
  SnowballType?: "STANDARD" | "EDGE" | "EDGE_C" | "EDGE_CG" | string;

  /**
   * <p>The creation date for this job.</p>
   */
  CreationDate?: Date | string | number;

  /**
   * <p>An array of <code>S3Resource</code> objects. Each <code>S3Resource</code> object represents an Amazon S3 bucket that your transferred data will be exported from or imported into.</p>
   */
  Resources?: _JobResource;

  /**
   * <p>The description of the job, provided at job creation.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the AWS Key Management Service (AWS KMS) key associated with this job. This ARN was created using the <a href="http://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html">CreateKey</a> API action in AWS KMS.</p>
   */
  KmsKeyARN?: string;

  /**
   * <p>The role ARN associated with this job. This ARN was created using the <a href="http://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a> API action in AWS Identity and Access Management (IAM).</p>
   */
  RoleARN?: string;

  /**
   * <p>The ID for the address that you want the Snowball shipped to.</p>
   */
  AddressId?: string;

  /**
   * <p>A job's shipping information, including inbound and outbound tracking numbers and shipping speed options.</p>
   */
  ShippingDetails?: _ShippingDetails;

  /**
   * <p>The Snowball capacity preference for this job, specified at job creation. In US regions, you can choose between 50 TB and 80 TB Snowballs. All other regions use 80 TB capacity Snowballs.</p>
   */
  SnowballCapacityPreference?:
    | "T50"
    | "T80"
    | "T100"
    | "T42"
    | "NoPreference"
    | string;

  /**
   * <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p>
   */
  Notification?: _Notification;

  /**
   * <p>A value that defines the real-time status of a Snowball's data transfer while the device is at AWS. This data is only available while a job has a <code>JobState</code> value of <code>InProgress</code>, for both import and export jobs.</p>
   */
  DataTransferProgress?: _DataTransfer;

  /**
   * <p>Links to Amazon S3 presigned URLs for the job report and logs. For import jobs, the PDF job report becomes available at the end of the import process. For export jobs, your job report typically becomes available while the Snowball for your job part is being delivered to you.</p>
   */
  JobLogInfo?: _JobLogs;

  /**
   * <p>The 39-character ID for the cluster, for example <code>CID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  ClusterId?: string;

  /**
   * <p>The ID of the address that you want a job shipped to, after it will be shipped to its primary address. This field is not supported in most regions.</p>
   */
  ForwardingAddressId?: string;
}

export interface _UnmarshalledJobMetadata extends _JobMetadata {
  /**
   * <p>The creation date for this job.</p>
   */
  CreationDate?: Date;

  /**
   * <p>An array of <code>S3Resource</code> objects. Each <code>S3Resource</code> object represents an Amazon S3 bucket that your transferred data will be exported from or imported into.</p>
   */
  Resources?: _UnmarshalledJobResource;

  /**
   * <p>A job's shipping information, including inbound and outbound tracking numbers and shipping speed options.</p>
   */
  ShippingDetails?: _UnmarshalledShippingDetails;

  /**
   * <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p>
   */
  Notification?: _UnmarshalledNotification;

  /**
   * <p>A value that defines the real-time status of a Snowball's data transfer while the device is at AWS. This data is only available while a job has a <code>JobState</code> value of <code>InProgress</code>, for both import and export jobs.</p>
   */
  DataTransferProgress?: _UnmarshalledDataTransfer;

  /**
   * <p>Links to Amazon S3 presigned URLs for the job report and logs. For import jobs, the PDF job report becomes available at the end of the import process. For export jobs, your job report typically becomes available while the Snowball for your job part is being delivered to you.</p>
   */
  JobLogInfo?: _UnmarshalledJobLogs;
}
