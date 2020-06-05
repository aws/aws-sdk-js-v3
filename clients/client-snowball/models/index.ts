import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>The address that you want the Snowball or Snowballs associated with a specific job to
 *       be shipped to. Addresses are validated at the time of creation. The address you provide must
 *       be located within the serviceable area of your region. Although no individual elements of the
 *         <code>Address</code> are required, if the address is invalid or unsupported, then an
 *       exception is thrown.</p>
 */
export interface Address {
  __type?: "Address";
  /**
   * <p>The unique ID for an address.</p>
   */
  AddressId?: string;

  /**
   * <p>The city in an address that a Snowball is to be delivered to.</p>
   */
  City?: string;

  /**
   * <p>The name of the company to receive a Snowball at an address.</p>
   */
  Company?: string;

  /**
   * <p>The country in an address that a Snowball is to be delivered to.</p>
   */
  Country?: string;

  /**
   * <p>If the address you are creating is a primary address, then set this option to
   *       true. This field is not supported in most regions.</p>
   */
  IsRestricted?: boolean;

  /**
   * <p>This field is no longer used and the value is ignored.</p>
   */
  Landmark?: string;

  /**
   * <p>The name of a person to receive a Snowball at an address.</p>
   */
  Name?: string;

  /**
   * <p>The phone number associated with an address that a Snowball is to be delivered
   *       to.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>The postal code in an address that a Snowball is to be delivered to.</p>
   */
  PostalCode?: string;

  /**
   * <p>This field is no longer used and the value is ignored.</p>
   */
  PrefectureOrDistrict?: string;

  /**
   * <p>The state or province in an address that a Snowball is to be delivered to.</p>
   */
  StateOrProvince?: string;

  /**
   * <p>The first line in a street address that a Snowball is to be delivered
   *       to.</p>
   */
  Street1?: string;

  /**
   * <p>The second line in a street address that a Snowball is to be delivered
   *       to.</p>
   */
  Street2?: string;

  /**
   * <p>The third line in a street address that a Snowball is to be delivered
   *       to.</p>
   */
  Street3?: string;
}

export namespace Address {
  export const filterSensitiveLog = (obj: Address): any => ({
    ...obj
  });
  export const isa = (o: any): o is Address => __isa(o, "Address");
}

export interface CancelClusterRequest {
  __type?: "CancelClusterRequest";
  /**
   * <p>The 39-character ID for the cluster that you want to cancel, for example
   *         <code>CID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  ClusterId: string | undefined;
}

export namespace CancelClusterRequest {
  export const filterSensitiveLog = (obj: CancelClusterRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelClusterRequest =>
    __isa(o, "CancelClusterRequest");
}

export interface CancelClusterResult {
  __type?: "CancelClusterResult";
}

export namespace CancelClusterResult {
  export const filterSensitiveLog = (obj: CancelClusterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelClusterResult =>
    __isa(o, "CancelClusterResult");
}

export interface CancelJobRequest {
  __type?: "CancelJobRequest";
  /**
   * <p>The 39-character job ID for the job that you want to cancel, for example
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  JobId: string | undefined;
}

export namespace CancelJobRequest {
  export const filterSensitiveLog = (obj: CancelJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelJobRequest =>
    __isa(o, "CancelJobRequest");
}

export interface CancelJobResult {
  __type?: "CancelJobResult";
}

export namespace CancelJobResult {
  export const filterSensitiveLog = (obj: CancelJobResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelJobResult =>
    __isa(o, "CancelJobResult");
}

/**
 * <p>Job creation failed. Currently, clusters support five nodes. If you have less than five
 *       nodes for your cluster and you have more nodes to create for this cluster, try again and
 *       create jobs until your cluster has exactly five notes.</p>
 */
export interface ClusterLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ClusterLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ClusterLimitExceededException {
  export const filterSensitiveLog = (
    obj: ClusterLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterLimitExceededException =>
    __isa(o, "ClusterLimitExceededException");
}

/**
 * <p>Contains a cluster's state, a cluster's ID, and other important information.</p>
 */
export interface ClusterListEntry {
  __type?: "ClusterListEntry";
  /**
   * <p>The 39-character ID for the cluster that you want to list, for example
   *         <code>CID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  ClusterId?: string;

  /**
   * <p>The current state of this cluster. For information about the state of a specific node,
   *       see <a>JobListEntry$JobState</a>.</p>
   */
  ClusterState?: ClusterState | string;

  /**
   * <p>The creation date for this cluster.</p>
   */
  CreationDate?: Date;

  /**
   * <p>Defines an optional description of the cluster, for example <code>Environmental Data
   *         Cluster-01</code>.</p>
   */
  Description?: string;
}

export namespace ClusterListEntry {
  export const filterSensitiveLog = (obj: ClusterListEntry): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterListEntry =>
    __isa(o, "ClusterListEntry");
}

/**
 * <p>Contains metadata about a specific cluster.</p>
 */
export interface ClusterMetadata {
  __type?: "ClusterMetadata";
  /**
   * <p>The automatically generated ID for a specific address.</p>
   */
  AddressId?: string;

  /**
   * <p>The automatically generated ID for a cluster.</p>
   */
  ClusterId?: string;

  /**
   * <p>The current status of the cluster.</p>
   */
  ClusterState?: ClusterState | string;

  /**
   * <p>The creation date for this cluster.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The optional description of the cluster.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the address that you want a cluster shipped to, after it will be
   *       shipped to its primary address. This field is not supported in most regions.</p>
   */
  ForwardingAddressId?: string;

  /**
   * <p>The type of job for this cluster. Currently, the only job type supported for clusters
   *       is <code>LOCAL_USE</code>.</p>
   */
  JobType?: JobType | string;

  /**
   * <p>The <code>KmsKeyARN</code> Amazon Resource Name (ARN) associated with this cluster.
   *       This ARN was created using the <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html">CreateKey</a> API action in AWS Key
   *       Management Service (AWS KMS).</p>
   */
  KmsKeyARN?: string;

  /**
   * <p>The Amazon Simple Notification Service (Amazon SNS) notification settings for this
   *       cluster.</p>
   */
  Notification?: Notification;

  /**
   * <p>The arrays of <a>JobResource</a> objects that can include updated <a>S3Resource</a> objects or <a>LambdaResource</a> objects.</p>
   */
  Resources?: JobResource;

  /**
   * <p>The role ARN associated with this cluster. This ARN was created using the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a>
   *       API action in AWS Identity and Access Management (IAM).</p>
   */
  RoleARN?: string;

  /**
   * <p>The shipping speed for each node in this cluster. This speed doesn't dictate how soon
   *       you'll get each Snowball Edge device, rather it represents how quickly each device moves to
   *       its destination while in transit. Regional shipping speeds are as follows:</p>
   *
   *          <ul>
   *             <li>
   *                <p>In Australia, you have access to express shipping. Typically, devices shipped
   *           express are delivered in about a day.</p>
   *             </li>
   *             <li>
   *                <p>In the European Union (EU), you have access to express shipping. Typically,
   *           Snowball Edges shipped express are delivered in about a day. In addition, most countries
   *           in the EU have access to standard shipping, which typically takes less than a week, one
   *           way.</p>
   *             </li>
   *             <li>
   *                <p>In India, Snowball Edges are delivered in one to seven days.</p>
   *             </li>
   *             <li>
   *                <p>In the US, you have access to one-day shipping and two-day shipping.</p>
   *             </li>
   *          </ul>
   */
  ShippingOption?: ShippingOption | string;

  /**
   * <p>The type of AWS Snowball device to use for this cluster. Currently, the only supported
   *       device type for cluster jobs is <code>EDGE</code>.</p>
   */
  SnowballType?: SnowballType | string;
}

export namespace ClusterMetadata {
  export const filterSensitiveLog = (obj: ClusterMetadata): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterMetadata =>
    __isa(o, "ClusterMetadata");
}

export enum ClusterState {
  AWAITING_QUORUM = "AwaitingQuorum",
  CANCELLED = "Cancelled",
  COMPLETE = "Complete",
  IN_USE = "InUse",
  PENDING = "Pending"
}

/**
 * <p>A JSON-formatted object that describes a compatible Amazon Machine Image (AMI),
 *       including the ID and name for a Snowball Edge AMI. This AMI is compatible with the device's
 *       physical hardware requirements, and it should be able to be run in an SBE1 instance on the
 *       device.</p>
 */
export interface CompatibleImage {
  __type?: "CompatibleImage";
  /**
   * <p>The unique identifier for an individual Snowball Edge AMI.</p>
   */
  AmiId?: string;

  /**
   * <p>The optional name of a compatible image.</p>
   */
  Name?: string;
}

export namespace CompatibleImage {
  export const filterSensitiveLog = (obj: CompatibleImage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CompatibleImage =>
    __isa(o, "CompatibleImage");
}

export interface CreateAddressRequest {
  __type?: "CreateAddressRequest";
  /**
   * <p>The address that you want the Snowball shipped to.</p>
   */
  Address: Address | undefined;
}

export namespace CreateAddressRequest {
  export const filterSensitiveLog = (obj: CreateAddressRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateAddressRequest =>
    __isa(o, "CreateAddressRequest");
}

export interface CreateAddressResult {
  __type?: "CreateAddressResult";
  /**
   * <p>The automatically generated ID for a specific address. You'll use this ID when you
   *       create a job to specify which address you want the Snowball for that job shipped to.</p>
   */
  AddressId?: string;
}

export namespace CreateAddressResult {
  export const filterSensitiveLog = (obj: CreateAddressResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateAddressResult =>
    __isa(o, "CreateAddressResult");
}

export interface CreateClusterRequest {
  __type?: "CreateClusterRequest";
  /**
   * <p>The ID for the address that you want the cluster shipped to.</p>
   */
  AddressId: string | undefined;

  /**
   * <p>An optional description of this specific cluster, for example <code>Environmental Data
   *         Cluster-01</code>.</p>
   */
  Description?: string;

  /**
   * <p>The forwarding address ID for a cluster. This field is not supported in most
   *       regions.</p>
   */
  ForwardingAddressId?: string;

  /**
   * <p>The type of job for this cluster. Currently, the only job type supported for clusters
   *       is <code>LOCAL_USE</code>.</p>
   */
  JobType: JobType | string | undefined;

  /**
   * <p>The <code>KmsKeyARN</code> value that you want to associate with this cluster.
   *         <code>KmsKeyARN</code> values are created by using the <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html">CreateKey</a> API action in AWS Key
   *       Management Service (AWS KMS). </p>
   */
  KmsKeyARN?: string;

  /**
   * <p>The Amazon Simple Notification Service (Amazon SNS) notification settings for this
   *       cluster.</p>
   */
  Notification?: Notification;

  /**
   * <p>The resources associated with the cluster job. These resources include Amazon S3
   *       buckets and optional AWS Lambda functions written in the Python language. </p>
   */
  Resources: JobResource | undefined;

  /**
   * <p>The <code>RoleARN</code> that you want to associate with this cluster.
   *         <code>RoleArn</code> values are created by using the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a> API action in AWS
   *       Identity and Access Management (IAM).</p>
   */
  RoleARN: string | undefined;

  /**
   * <p>The shipping speed for each node in this cluster. This speed doesn't dictate how soon
   *       you'll get each Snowball Edge device, rather it represents how quickly each device moves to
   *       its destination while in transit. Regional shipping speeds are as follows:</p>
   *
   *          <ul>
   *             <li>
   *                <p>In Australia, you have access to express shipping. Typically, devices shipped
   *           express are delivered in about a day.</p>
   *             </li>
   *             <li>
   *                <p>In the European Union (EU), you have access to express shipping. Typically,
   *           Snowball Edges shipped express are delivered in about a day. In addition, most countries
   *           in the EU have access to standard shipping, which typically takes less than a week, one
   *           way.</p>
   *             </li>
   *             <li>
   *                <p>In India, Snowball Edges are delivered in one to seven days.</p>
   *             </li>
   *             <li>
   *                <p>In the US, you have access to one-day shipping and two-day shipping.</p>
   *             </li>
   *          </ul>
   */
  ShippingOption: ShippingOption | string | undefined;

  /**
   * <p>The type of AWS Snowball device to use for this cluster. Currently, the only supported
   *       device type for cluster jobs is <code>EDGE</code>.</p>
   */
  SnowballType?: SnowballType | string;
}

export namespace CreateClusterRequest {
  export const filterSensitiveLog = (obj: CreateClusterRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateClusterRequest =>
    __isa(o, "CreateClusterRequest");
}

export interface CreateClusterResult {
  __type?: "CreateClusterResult";
  /**
   * <p>The automatically generated ID for a cluster.</p>
   */
  ClusterId?: string;
}

export namespace CreateClusterResult {
  export const filterSensitiveLog = (obj: CreateClusterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateClusterResult =>
    __isa(o, "CreateClusterResult");
}

export interface CreateJobRequest {
  __type?: "CreateJobRequest";
  /**
   * <p>The ID for the address that you want the Snowball shipped to.</p>
   */
  AddressId?: string;

  /**
   * <p>The ID of a cluster. If you're creating a job for a node in a cluster, you need to
   *       provide only this <code>clusterId</code> value. The other job attributes are inherited from
   *       the cluster.</p>
   */
  ClusterId?: string;

  /**
   * <p>Defines an optional description of this specific job, for example <code>Important
   *         Photos 2016-08-11</code>.</p>
   */
  Description?: string;

  /**
   * <p>The forwarding address ID for a job. This field is not supported in most
   *       regions.</p>
   */
  ForwardingAddressId?: string;

  /**
   * <p>Defines the type of job that you're creating.
   *       </p>
   */
  JobType?: JobType | string;

  /**
   * <p>The <code>KmsKeyARN</code> that you want to associate with this job.
   *         <code>KmsKeyARN</code>s are created using the <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html">CreateKey</a> AWS Key Management
   *       Service (KMS) API action.</p>
   */
  KmsKeyARN?: string;

  /**
   * <p>Defines the Amazon Simple Notification Service (Amazon SNS) notification settings for
   *       this job.</p>
   */
  Notification?: Notification;

  /**
   * <p>Defines the Amazon S3 buckets associated with this job.</p>
   *
   *          <p>With <code>IMPORT</code> jobs, you specify the bucket or buckets that your transferred
   *       data will be imported into.</p>
   *
   *          <p>With <code>EXPORT</code> jobs, you specify the bucket or buckets that your transferred
   *       data will be exported from. Optionally, you can also specify a <code>KeyRange</code> value. If
   *       you choose to export a range, you define the length of the range by providing either an
   *       inclusive <code>BeginMarker</code> value, an inclusive <code>EndMarker</code> value, or both.
   *       Ranges are UTF-8 binary sorted.</p>
   */
  Resources?: JobResource;

  /**
   * <p>The <code>RoleARN</code> that you want to associate with this job.
   *       <code>RoleArn</code>s are created using the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a> AWS Identity and
   *       Access Management (IAM) API action.</p>
   */
  RoleARN?: string;

  /**
   * <p>The shipping speed for this job. This speed doesn't dictate how soon you'll get the
   *       Snowball, rather it represents how quickly the Snowball moves to its destination while in
   *       transit. Regional shipping speeds are as follows:</p>
   *
   *          <ul>
   *             <li>
   *                <p>In Australia, you have access to express shipping. Typically, Snowballs shipped
   *           express are delivered in about a day.</p>
   *             </li>
   *             <li>
   *                <p>In the European Union (EU), you have access to express shipping. Typically,
   *           Snowballs shipped express are delivered in about a day. In addition, most countries in the
   *           EU have access to standard shipping, which typically takes less than a week, one
   *           way.</p>
   *             </li>
   *             <li>
   *                <p>In India, Snowballs are delivered in one to seven days.</p>
   *             </li>
   *             <li>
   *                <p>In the US, you have access to one-day shipping and two-day shipping.</p>
   *             </li>
   *          </ul>
   */
  ShippingOption?: ShippingOption | string;

  /**
   * <p>If your job is being created in one of the US regions, you have the option of
   *       specifying what size Snowball you'd like for this job. In all other regions, Snowballs come
   *       with 80 TB in storage capacity.</p>
   */
  SnowballCapacityPreference?: SnowballCapacity | string;

  /**
   * <p>The type of AWS Snowball device to use for this job. Currently, the only supported
   *       device type for cluster jobs is <code>EDGE</code>.</p>
   */
  SnowballType?: SnowballType | string;
}

export namespace CreateJobRequest {
  export const filterSensitiveLog = (obj: CreateJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateJobRequest =>
    __isa(o, "CreateJobRequest");
}

export interface CreateJobResult {
  __type?: "CreateJobResult";
  /**
   * <p>The automatically generated ID for a job, for example
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  JobId?: string;
}

export namespace CreateJobResult {
  export const filterSensitiveLog = (obj: CreateJobResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateJobResult =>
    __isa(o, "CreateJobResult");
}

/**
 * <p>Defines the real-time status of a Snowball's data transfer while the device is at AWS.
 *       This data is only available while a job has a <code>JobState</code> value of
 *         <code>InProgress</code>, for both import and export jobs.</p>
 */
export interface DataTransfer {
  __type?: "DataTransfer";
  /**
   * <p>The number of bytes transferred between a Snowball and Amazon S3.</p>
   */
  BytesTransferred?: number;

  /**
   * <p>The number of objects transferred between a Snowball and Amazon S3.</p>
   */
  ObjectsTransferred?: number;

  /**
   * <p>The total bytes of data for a transfer between a Snowball and Amazon S3. This value is
   *       set to 0 (zero) until all the keys that will be transferred have been listed.</p>
   */
  TotalBytes?: number;

  /**
   * <p>The total number of objects for a transfer between a Snowball and Amazon S3. This value
   *       is set to 0 (zero) until all the keys that will be transferred have been listed.</p>
   */
  TotalObjects?: number;
}

export namespace DataTransfer {
  export const filterSensitiveLog = (obj: DataTransfer): any => ({
    ...obj
  });
  export const isa = (o: any): o is DataTransfer => __isa(o, "DataTransfer");
}

export interface DescribeAddressesRequest {
  __type?: "DescribeAddressesRequest";
  /**
   * <p>The number of <code>ADDRESS</code> objects to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>HTTP requests are stateless. To identify what object comes "next" in the list of
   *         <code>ADDRESS</code> objects, you have the option of specifying a value for
   *         <code>NextToken</code> as the starting point for your list of returned addresses.</p>
   */
  NextToken?: string;
}

export namespace DescribeAddressesRequest {
  export const filterSensitiveLog = (obj: DescribeAddressesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAddressesRequest =>
    __isa(o, "DescribeAddressesRequest");
}

export interface DescribeAddressesResult {
  __type?: "DescribeAddressesResult";
  /**
   * <p>The Snowball shipping addresses that were created for this account.</p>
   */
  Addresses?: Address[];

  /**
   * <p>HTTP requests are stateless. If you use the automatically generated
   *         <code>NextToken</code> value in your next <code>DescribeAddresses</code> call, your list of
   *       returned addresses will start from this point in the array.</p>
   */
  NextToken?: string;
}

export namespace DescribeAddressesResult {
  export const filterSensitiveLog = (obj: DescribeAddressesResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAddressesResult =>
    __isa(o, "DescribeAddressesResult");
}

export interface DescribeAddressRequest {
  __type?: "DescribeAddressRequest";
  /**
   * <p>The automatically generated ID for a specific address.</p>
   */
  AddressId: string | undefined;
}

export namespace DescribeAddressRequest {
  export const filterSensitiveLog = (obj: DescribeAddressRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAddressRequest =>
    __isa(o, "DescribeAddressRequest");
}

export interface DescribeAddressResult {
  __type?: "DescribeAddressResult";
  /**
   * <p>The address that you want the Snowball or Snowballs associated with a specific job to
   *       be shipped to.</p>
   */
  Address?: Address;
}

export namespace DescribeAddressResult {
  export const filterSensitiveLog = (obj: DescribeAddressResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAddressResult =>
    __isa(o, "DescribeAddressResult");
}

export interface DescribeClusterRequest {
  __type?: "DescribeClusterRequest";
  /**
   * <p>The automatically generated ID for a cluster.</p>
   */
  ClusterId: string | undefined;
}

export namespace DescribeClusterRequest {
  export const filterSensitiveLog = (obj: DescribeClusterRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeClusterRequest =>
    __isa(o, "DescribeClusterRequest");
}

export interface DescribeClusterResult {
  __type?: "DescribeClusterResult";
  /**
   * <p>Information about a specific cluster, including shipping information, cluster status,
   *       and other important metadata.</p>
   */
  ClusterMetadata?: ClusterMetadata;
}

export namespace DescribeClusterResult {
  export const filterSensitiveLog = (obj: DescribeClusterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeClusterResult =>
    __isa(o, "DescribeClusterResult");
}

export interface DescribeJobRequest {
  __type?: "DescribeJobRequest";
  /**
   * <p>The automatically generated ID for a job, for example
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  JobId: string | undefined;
}

export namespace DescribeJobRequest {
  export const filterSensitiveLog = (obj: DescribeJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeJobRequest =>
    __isa(o, "DescribeJobRequest");
}

export interface DescribeJobResult {
  __type?: "DescribeJobResult";
  /**
   * <p>Information about a specific job, including shipping information, job status, and other
   *       important metadata.</p>
   */
  JobMetadata?: JobMetadata;

  /**
   * <p>Information about a specific job part (in the case of an export job), including
   *       shipping information, job status, and other important metadata.</p>
   */
  SubJobMetadata?: JobMetadata[];
}

export namespace DescribeJobResult {
  export const filterSensitiveLog = (obj: DescribeJobResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeJobResult =>
    __isa(o, "DescribeJobResult");
}

/**
 * <p>A JSON-formatted object that contains the IDs for an Amazon Machine Image (AMI),
 *       including the Amazon EC2 AMI ID and the Snowball Edge AMI ID. Each AMI has these two IDs to
 *       simplify identifying the AMI in both the AWS Cloud and on the device.</p>
 */
export interface Ec2AmiResource {
  __type?: "Ec2AmiResource";
  /**
   * <p>The ID of the AMI in Amazon EC2.</p>
   */
  AmiId: string | undefined;

  /**
   * <p>The ID of the AMI on the Snowball Edge device.</p>
   */
  SnowballAmiId?: string;
}

export namespace Ec2AmiResource {
  export const filterSensitiveLog = (obj: Ec2AmiResource): any => ({
    ...obj
  });
  export const isa = (o: any): o is Ec2AmiResource =>
    __isa(o, "Ec2AmiResource");
}

/**
 * <p>Your IAM user lacks the necessary Amazon EC2 permissions to perform the attempted
 *       action.</p>
 */
export interface Ec2RequestFailedException
  extends __SmithyException,
    $MetadataBearer {
  name: "Ec2RequestFailedException";
  $fault: "client";
  Message?: string;
}

export namespace Ec2RequestFailedException {
  export const filterSensitiveLog = (obj: Ec2RequestFailedException): any => ({
    ...obj
  });
  export const isa = (o: any): o is Ec2RequestFailedException =>
    __isa(o, "Ec2RequestFailedException");
}

/**
 * <p>The container for the <a>EventTriggerDefinition$EventResourceARN</a>.</p>
 */
export interface EventTriggerDefinition {
  __type?: "EventTriggerDefinition";
  /**
   * <p>The Amazon Resource Name (ARN) for any local Amazon S3 resource that is an AWS Lambda
   *       function's event trigger associated with this job.</p>
   */
  EventResourceARN?: string;
}

export namespace EventTriggerDefinition {
  export const filterSensitiveLog = (obj: EventTriggerDefinition): any => ({
    ...obj
  });
  export const isa = (o: any): o is EventTriggerDefinition =>
    __isa(o, "EventTriggerDefinition");
}

export interface GetJobManifestRequest {
  __type?: "GetJobManifestRequest";
  /**
   * <p>The ID for a job that you want to get the manifest file for, for example
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  JobId: string | undefined;
}

export namespace GetJobManifestRequest {
  export const filterSensitiveLog = (obj: GetJobManifestRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetJobManifestRequest =>
    __isa(o, "GetJobManifestRequest");
}

export interface GetJobManifestResult {
  __type?: "GetJobManifestResult";
  /**
   * <p>The Amazon S3 presigned URL for the manifest file associated with the specified
   *         <code>JobId</code> value.</p>
   */
  ManifestURI?: string;
}

export namespace GetJobManifestResult {
  export const filterSensitiveLog = (obj: GetJobManifestResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetJobManifestResult =>
    __isa(o, "GetJobManifestResult");
}

export interface GetJobUnlockCodeRequest {
  __type?: "GetJobUnlockCodeRequest";
  /**
   * <p>The ID for the job that you want to get the <code>UnlockCode</code> value for, for
   *       example <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  JobId: string | undefined;
}

export namespace GetJobUnlockCodeRequest {
  export const filterSensitiveLog = (obj: GetJobUnlockCodeRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetJobUnlockCodeRequest =>
    __isa(o, "GetJobUnlockCodeRequest");
}

export interface GetJobUnlockCodeResult {
  __type?: "GetJobUnlockCodeResult";
  /**
   * <p>The <code>UnlockCode</code> value for the specified job. The <code>UnlockCode</code>
   *       value can be accessed for up to 90 days after the job has been created.</p>
   */
  UnlockCode?: string;
}

export namespace GetJobUnlockCodeResult {
  export const filterSensitiveLog = (obj: GetJobUnlockCodeResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetJobUnlockCodeResult =>
    __isa(o, "GetJobUnlockCodeResult");
}

export interface GetSnowballUsageRequest {
  __type?: "GetSnowballUsageRequest";
}

export namespace GetSnowballUsageRequest {
  export const filterSensitiveLog = (obj: GetSnowballUsageRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSnowballUsageRequest =>
    __isa(o, "GetSnowballUsageRequest");
}

export interface GetSnowballUsageResult {
  __type?: "GetSnowballUsageResult";
  /**
   * <p>The service limit for number of Snowballs this account can have at once. The default
   *       service limit is 1 (one).</p>
   */
  SnowballLimit?: number;

  /**
   * <p>The number of Snowballs that this account is currently using.</p>
   */
  SnowballsInUse?: number;
}

export namespace GetSnowballUsageResult {
  export const filterSensitiveLog = (obj: GetSnowballUsageResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSnowballUsageResult =>
    __isa(o, "GetSnowballUsageResult");
}

export interface GetSoftwareUpdatesRequest {
  __type?: "GetSoftwareUpdatesRequest";
  /**
   * <p>The ID for a job that you want to get the software update file for, for example
   *       <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  JobId: string | undefined;
}

export namespace GetSoftwareUpdatesRequest {
  export const filterSensitiveLog = (obj: GetSoftwareUpdatesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSoftwareUpdatesRequest =>
    __isa(o, "GetSoftwareUpdatesRequest");
}

export interface GetSoftwareUpdatesResult {
  __type?: "GetSoftwareUpdatesResult";
  /**
   * <p>The Amazon S3 presigned URL for the update file associated with the specified
   *       <code>JobId</code> value. The software update will be available for 2 days after this request is made.
   *       To access an update after the 2 days have passed, you'll have to make another call to <code>GetSoftwareUpdates</code>.</p>
   */
  UpdatesURI?: string;
}

export namespace GetSoftwareUpdatesResult {
  export const filterSensitiveLog = (obj: GetSoftwareUpdatesResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSoftwareUpdatesResult =>
    __isa(o, "GetSoftwareUpdatesResult");
}

/**
 * <p>The address provided was invalid. Check the address with your region's carrier, and try
 *       again.</p>
 */
export interface InvalidAddressException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidAddressException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidAddressException {
  export const filterSensitiveLog = (obj: InvalidAddressException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidAddressException =>
    __isa(o, "InvalidAddressException");
}

/**
 * <p>Job or cluster creation failed. One ore more inputs were invalid. Confirm that the
 *         <a>CreateClusterRequest$SnowballType</a> value supports your <a>CreateJobRequest$JobType</a>, and try again.</p>
 */
export interface InvalidInputCombinationException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidInputCombinationException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidInputCombinationException {
  export const filterSensitiveLog = (
    obj: InvalidInputCombinationException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidInputCombinationException =>
    __isa(o, "InvalidInputCombinationException");
}

/**
 * <p>The action can't be performed because the job's current state doesn't allow that action
 *       to be performed.</p>
 */
export interface InvalidJobStateException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidJobStateException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidJobStateException {
  export const filterSensitiveLog = (obj: InvalidJobStateException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidJobStateException =>
    __isa(o, "InvalidJobStateException");
}

/**
 * <p>The <code>NextToken</code> string was altered unexpectedly, and the operation has
 *       stopped. Run the operation without changing the <code>NextToken</code> string, and try
 *       again.</p>
 */
export interface InvalidNextTokenException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidNextTokenException {
  export const filterSensitiveLog = (obj: InvalidNextTokenException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidNextTokenException =>
    __isa(o, "InvalidNextTokenException");
}

/**
 * <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 */
export interface InvalidResourceException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidResourceException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The provided resource value is invalid.</p>
   */
  ResourceType?: string;
}

export namespace InvalidResourceException {
  export const filterSensitiveLog = (obj: InvalidResourceException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidResourceException =>
    __isa(o, "InvalidResourceException");
}

/**
 * <p>Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value
 *       that indicates whether the job is a job part, in the case of an export job.</p>
 */
export interface JobListEntry {
  __type?: "JobListEntry";
  /**
   * <p>The creation date for this job.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The optional description of this specific job, for example <code>Important Photos
   *         2016-08-11</code>.</p>
   */
  Description?: string;

  /**
   * <p>A value that indicates that this job is a master job. A master job represents a
   *       successful request to create an export job. Master jobs aren't associated with any Snowballs.
   *       Instead, each master job will have at least one job part, and each job part is associated with
   *       a Snowball. It might take some time before the job parts associated with a particular master
   *       job are listed, because they are created after the master job is created.</p>
   */
  IsMaster?: boolean;

  /**
   * <p>The automatically generated ID for a job, for example
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  JobId?: string;

  /**
   * <p>The current state of this job.</p>
   */
  JobState?: JobState | string;

  /**
   * <p>The type of job.</p>
   */
  JobType?: JobType | string;

  /**
   * <p>The type of device used with this job.</p>
   */
  SnowballType?: SnowballType | string;
}

export namespace JobListEntry {
  export const filterSensitiveLog = (obj: JobListEntry): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobListEntry => __isa(o, "JobListEntry");
}

/**
 * <p>Contains job logs. Whenever Snowball is used to import data into or export data out of
 *       Amazon S3, you'll have the option of downloading a PDF job report. Job logs are returned as a
 *       part of the response syntax of the <code>DescribeJob</code> action in the
 *         <code>JobMetadata</code> data type. The job logs can be accessed for up to 60 minutes after
 *       this request has been made. To access any of the job logs after 60 minutes have passed, you'll
 *       have to make another call to the <code>DescribeJob</code> action.</p>
 *
 *          <p>For import jobs, the PDF job report becomes available at the end of the import process.
 *       For export jobs, your job report typically becomes available while the Snowball for your job
 *       part is being delivered to you.</p>
 *
 *          <p>The job report provides you insight into the state of your Amazon S3 data transfer. The
 *       report includes details about your job or job part for your records.</p>
 *
 *          <p>For deeper visibility into the status of your transferred objects, you can look at the
 *       two associated logs: a success log and a failure log. The logs are saved in comma-separated
 *       value (CSV) format, and the name of each log includes the ID of the job or job part that the
 *       log describes.</p>
 */
export interface JobLogs {
  __type?: "JobLogs";
  /**
   * <p>A link to an Amazon S3 presigned URL where the job completion report is
   *       located.</p>
   */
  JobCompletionReportURI?: string;

  /**
   * <p>A link to an Amazon S3 presigned URL where the job failure log is located.</p>
   */
  JobFailureLogURI?: string;

  /**
   * <p>A link to an Amazon S3 presigned URL where the job success log is located.</p>
   */
  JobSuccessLogURI?: string;
}

export namespace JobLogs {
  export const filterSensitiveLog = (obj: JobLogs): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobLogs => __isa(o, "JobLogs");
}

/**
 * <p>Contains information about a specific job including shipping information, job status,
 *       and other important metadata. This information is returned as a part of the response syntax of
 *       the <code>DescribeJob</code> action.</p>
 */
export interface JobMetadata {
  __type?: "JobMetadata";
  /**
   * <p>The ID for the address that you want the Snowball shipped to.</p>
   */
  AddressId?: string;

  /**
   * <p>The 39-character ID for the cluster, for example
   *         <code>CID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  ClusterId?: string;

  /**
   * <p>The creation date for this job.</p>
   */
  CreationDate?: Date;

  /**
   * <p>A value that defines the real-time status of a Snowball's data transfer while the
   *       device is at AWS. This data is only available while a job has a <code>JobState</code> value of
   *         <code>InProgress</code>, for both import and export jobs.</p>
   */
  DataTransferProgress?: DataTransfer;

  /**
   * <p>The description of the job, provided at job creation.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the address that you want a job shipped to, after it will be
   *       shipped to its primary address. This field is not supported in most regions.</p>
   */
  ForwardingAddressId?: string;

  /**
   * <p>The automatically generated ID for a job, for example
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  JobId?: string;

  /**
   * <p>Links to Amazon S3 presigned URLs for the job report and logs. For import jobs, the PDF
   *       job report becomes available at the end of the import process. For export jobs, your job
   *       report typically becomes available while the Snowball for your job part is being delivered to
   *       you.</p>
   */
  JobLogInfo?: JobLogs;

  /**
   * <p>The current status of the jobs.</p>
   */
  JobState?: JobState | string;

  /**
   * <p>The type of job.</p>
   */
  JobType?: JobType | string;

  /**
   * <p>The Amazon Resource Name (ARN) for the AWS Key Management Service (AWS KMS) key
   *       associated with this job. This ARN was created using the <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html">CreateKey</a> API action in AWS
   *       KMS.</p>
   */
  KmsKeyARN?: string;

  /**
   * <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated
   *       with a specific job. The <code>Notification</code> object is returned as a part of the
   *       response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data
   *       type.</p>
   */
  Notification?: Notification;

  /**
   * <p>An array of <code>S3Resource</code> objects. Each <code>S3Resource</code> object
   *       represents an Amazon S3 bucket that your transferred data will be exported from or imported
   *       into.</p>
   */
  Resources?: JobResource;

  /**
   * <p>The role ARN associated with this job. This ARN was created using the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a>
   *       API action in AWS Identity and Access Management (IAM).</p>
   */
  RoleARN?: string;

  /**
   * <p>A job's shipping information, including inbound and outbound tracking numbers and
   *       shipping speed options.</p>
   */
  ShippingDetails?: ShippingDetails;

  /**
   * <p>The Snowball capacity preference for this job, specified at job creation. In US
   *       regions, you can choose between 50 TB and 80 TB Snowballs. All other regions use 80 TB
   *       capacity Snowballs.</p>
   */
  SnowballCapacityPreference?: SnowballCapacity | string;

  /**
   * <p>The type of device used with this job.</p>
   */
  SnowballType?: SnowballType | string;
}

export namespace JobMetadata {
  export const filterSensitiveLog = (obj: JobMetadata): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobMetadata => __isa(o, "JobMetadata");
}

/**
 * <p>Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket,
 *       an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is
 *       associated with a particular job.</p>
 */
export interface JobResource {
  __type?: "JobResource";
  /**
   * <p>The Amazon Machine Images (AMIs) associated with this job.</p>
   */
  Ec2AmiResources?: Ec2AmiResource[];

  /**
   * <p>The Python-language Lambda functions for this job.</p>
   */
  LambdaResources?: LambdaResource[];

  /**
   * <p>An array of <code>S3Resource</code> objects.</p>
   */
  S3Resources?: S3Resource[];
}

export namespace JobResource {
  export const filterSensitiveLog = (obj: JobResource): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobResource => __isa(o, "JobResource");
}

export enum JobState {
  CANCELLED = "Cancelled",
  COMPLETE = "Complete",
  IN_PROGRESS = "InProgress",
  IN_TRANSIT_TO_AWS = "InTransitToAWS",
  IN_TRANSIT_TO_CUSTOMER = "InTransitToCustomer",
  LISTING = "Listing",
  NEW = "New",
  PENDING = "Pending",
  PREPARING_APPLIANCE = "PreparingAppliance",
  PREPARING_SHIPMENT = "PreparingShipment",
  WITH_AWS = "WithAWS",
  WITH_AWS_SORTING_FACILITY = "WithAWSSortingFacility",
  WITH_CUSTOMER = "WithCustomer"
}

export enum JobType {
  EXPORT = "EXPORT",
  IMPORT = "IMPORT",
  LOCAL_USE = "LOCAL_USE"
}

/**
 * <p>Contains a key range. For export jobs, a <code>S3Resource</code> object can have an
 *       optional <code>KeyRange</code> value. The length of the range is defined at job creation, and
 *       has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or
 *       both. Ranges are UTF-8 binary sorted.</p>
 */
export interface KeyRange {
  __type?: "KeyRange";
  /**
   * <p>The key that starts an optional key range for an export job. Ranges are inclusive and
   *       UTF-8 binary sorted.</p>
   */
  BeginMarker?: string;

  /**
   * <p>The key that ends an optional key range for an export job. Ranges are inclusive and
   *       UTF-8 binary sorted.</p>
   */
  EndMarker?: string;
}

export namespace KeyRange {
  export const filterSensitiveLog = (obj: KeyRange): any => ({
    ...obj
  });
  export const isa = (o: any): o is KeyRange => __isa(o, "KeyRange");
}

/**
 * <p>The provided AWS Key Management Service key lacks the permissions to perform the
 *       specified <a>CreateJob</a> or <a>UpdateJob</a> action.</p>
 */
export interface KMSRequestFailedException
  extends __SmithyException,
    $MetadataBearer {
  name: "KMSRequestFailedException";
  $fault: "client";
  Message?: string;
}

export namespace KMSRequestFailedException {
  export const filterSensitiveLog = (obj: KMSRequestFailedException): any => ({
    ...obj
  });
  export const isa = (o: any): o is KMSRequestFailedException =>
    __isa(o, "KMSRequestFailedException");
}

/**
 * <p>Identifies </p>
 */
export interface LambdaResource {
  __type?: "LambdaResource";
  /**
   * <p>The array of ARNs for <a>S3Resource</a> objects to trigger the <a>LambdaResource</a> objects associated with this job.</p>
   */
  EventTriggers?: EventTriggerDefinition[];

  /**
   * <p>An Amazon Resource Name (ARN) that represents an AWS Lambda function to be triggered by
   *       PUT object actions on the associated local Amazon S3 resource.</p>
   */
  LambdaArn?: string;
}

export namespace LambdaResource {
  export const filterSensitiveLog = (obj: LambdaResource): any => ({
    ...obj
  });
  export const isa = (o: any): o is LambdaResource =>
    __isa(o, "LambdaResource");
}

export interface ListClusterJobsRequest {
  __type?: "ListClusterJobsRequest";
  /**
   * <p>The 39-character ID for the cluster that you want to list, for example
   *         <code>CID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>The number of <code>JobListEntry</code> objects to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>HTTP requests are stateless. To identify what object comes "next" in the list of
   *         <code>JobListEntry</code> objects, you have the option of specifying <code>NextToken</code>
   *       as the starting point for your returned list.</p>
   */
  NextToken?: string;
}

export namespace ListClusterJobsRequest {
  export const filterSensitiveLog = (obj: ListClusterJobsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListClusterJobsRequest =>
    __isa(o, "ListClusterJobsRequest");
}

export interface ListClusterJobsResult {
  __type?: "ListClusterJobsResult";
  /**
   * <p>Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value
   *       that indicates whether the job is a job part, in the case of export jobs. </p>
   */
  JobListEntries?: JobListEntry[];

  /**
   * <p>HTTP requests are stateless. If you use the automatically generated
   *         <code>NextToken</code> value in your next <code>ListClusterJobsResult</code> call, your list
   *       of returned jobs will start from this point in the array.</p>
   */
  NextToken?: string;
}

export namespace ListClusterJobsResult {
  export const filterSensitiveLog = (obj: ListClusterJobsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListClusterJobsResult =>
    __isa(o, "ListClusterJobsResult");
}

export interface ListClustersRequest {
  __type?: "ListClustersRequest";
  /**
   * <p>The number of <code>ClusterListEntry</code> objects to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>HTTP requests are stateless. To identify what object comes "next" in the list of
   *         <code>ClusterListEntry</code> objects, you have the option of specifying
   *         <code>NextToken</code> as the starting point for your returned list.</p>
   */
  NextToken?: string;
}

export namespace ListClustersRequest {
  export const filterSensitiveLog = (obj: ListClustersRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListClustersRequest =>
    __isa(o, "ListClustersRequest");
}

export interface ListClustersResult {
  __type?: "ListClustersResult";
  /**
   * <p>Each <code>ClusterListEntry</code> object contains a cluster's state, a cluster's ID,
   *       and other important status information.</p>
   */
  ClusterListEntries?: ClusterListEntry[];

  /**
   * <p>HTTP requests are stateless. If you use the automatically generated
   *         <code>NextToken</code> value in your next <code>ClusterListEntry</code> call, your list of
   *       returned clusters will start from this point in the array.</p>
   */
  NextToken?: string;
}

export namespace ListClustersResult {
  export const filterSensitiveLog = (obj: ListClustersResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListClustersResult =>
    __isa(o, "ListClustersResult");
}

export interface ListCompatibleImagesRequest {
  __type?: "ListCompatibleImagesRequest";
  /**
   * <p>The maximum number of results for the list of compatible images. Currently, a Snowball
   *       Edge device can store 10 AMIs.</p>
   */
  MaxResults?: number;

  /**
   * <p>HTTP requests are stateless. To identify what object comes "next" in the list of
   *       compatible images, you can specify a value for <code>NextToken</code> as the starting point
   *       for your list of returned images.</p>
   */
  NextToken?: string;
}

export namespace ListCompatibleImagesRequest {
  export const filterSensitiveLog = (
    obj: ListCompatibleImagesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCompatibleImagesRequest =>
    __isa(o, "ListCompatibleImagesRequest");
}

export interface ListCompatibleImagesResult {
  __type?: "ListCompatibleImagesResult";
  /**
   * <p>A JSON-formatted object that describes a compatible AMI, including the ID and name for
   *       a Snowball Edge AMI.</p>
   */
  CompatibleImages?: CompatibleImage[];

  /**
   * <p>Because HTTP requests are stateless, this is the starting point for your next list of
   *       returned images.</p>
   */
  NextToken?: string;
}

export namespace ListCompatibleImagesResult {
  export const filterSensitiveLog = (obj: ListCompatibleImagesResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCompatibleImagesResult =>
    __isa(o, "ListCompatibleImagesResult");
}

export interface ListJobsRequest {
  __type?: "ListJobsRequest";
  /**
   * <p>The number of <code>JobListEntry</code> objects to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>HTTP requests are stateless. To identify what object comes "next" in the list of
   *         <code>JobListEntry</code> objects, you have the option of specifying <code>NextToken</code>
   *       as the starting point for your returned list.</p>
   */
  NextToken?: string;
}

export namespace ListJobsRequest {
  export const filterSensitiveLog = (obj: ListJobsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListJobsRequest =>
    __isa(o, "ListJobsRequest");
}

export interface ListJobsResult {
  __type?: "ListJobsResult";
  /**
   * <p>Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value
   *       that indicates whether the job is a job part, in the case of export jobs. </p>
   */
  JobListEntries?: JobListEntry[];

  /**
   * <p>HTTP requests are stateless. If you use this automatically generated
   *         <code>NextToken</code> value in your next <code>ListJobs</code> call, your returned
   *         <code>JobListEntry</code> objects will start from this point in the array.</p>
   */
  NextToken?: string;
}

export namespace ListJobsResult {
  export const filterSensitiveLog = (obj: ListJobsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListJobsResult =>
    __isa(o, "ListJobsResult");
}

/**
 * <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated
 *       with a specific job. The <code>Notification</code> object is returned as a part of the
 *       response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data
 *       type.</p>
 *
 *          <p>When the notification settings are defined during job creation, you can choose to
 *       notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of
 *       strings, or you can specify that you want to have Amazon SNS notifications sent out for all
 *       job states with <code>NotifyAll</code> set to true.</p>
 */
export interface Notification {
  __type?: "Notification";
  /**
   * <p>The list of job states that will trigger a notification for this job.</p>
   */
  JobStatesToNotify?: (JobState | string)[];

  /**
   * <p>Any change in job state will trigger a notification for this job.</p>
   */
  NotifyAll?: boolean;

  /**
   * <p>The new SNS <code>TopicArn</code> that you want to associate with this job. You can
   *       create Amazon Resource Names (ARNs) for topics by using the <a href="https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html">CreateTopic</a> Amazon SNS API
   *       action.</p>
   *
   *          <p>You can subscribe email addresses to an Amazon SNS topic through the AWS Management
   *       Console, or by using the <a href="https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html">Subscribe</a> AWS Simple Notification Service (SNS) API action.</p>
   */
  SnsTopicARN?: string;
}

export namespace Notification {
  export const filterSensitiveLog = (obj: Notification): any => ({
    ...obj
  });
  export const isa = (o: any): o is Notification => __isa(o, "Notification");
}

/**
 * <p>Each <code>S3Resource</code> object represents an Amazon S3 bucket that your
 *       transferred data will be exported from or imported into. For export jobs, this object can have
 *       an optional <code>KeyRange</code> value. The length of the range is defined at job creation,
 *       and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or
 *       both. Ranges are UTF-8 binary sorted.</p>
 */
export interface S3Resource {
  __type?: "S3Resource";
  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon S3 bucket.</p>
   */
  BucketArn?: string;

  /**
   * <p>For export jobs, you can provide an optional <code>KeyRange</code> within a specific
   *       Amazon S3 bucket. The length of the range is defined at job creation, and has either an
   *       inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are
   *       UTF-8 binary sorted.</p>
   */
  KeyRange?: KeyRange;
}

export namespace S3Resource {
  export const filterSensitiveLog = (obj: S3Resource): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3Resource => __isa(o, "S3Resource");
}

/**
 * <p>The <code>Status</code> and <code>TrackingNumber</code> information for an inbound or
 *       outbound shipment.</p>
 */
export interface Shipment {
  __type?: "Shipment";
  /**
   * <p>Status information for a shipment.</p>
   */
  Status?: string;

  /**
   * <p>The tracking number for this job. Using this tracking number with your region's
   *       carrier's website, you can track a Snowball as the carrier transports it.</p>
   *          <p>For India, the carrier is Amazon Logistics. For all other regions, UPS is the
   *       carrier.</p>
   */
  TrackingNumber?: string;
}

export namespace Shipment {
  export const filterSensitiveLog = (obj: Shipment): any => ({
    ...obj
  });
  export const isa = (o: any): o is Shipment => __isa(o, "Shipment");
}

/**
 * <p>A job's shipping information, including inbound and outbound tracking numbers and
 *       shipping speed options.</p>
 */
export interface ShippingDetails {
  __type?: "ShippingDetails";
  /**
   * <p>The <code>Status</code> and <code>TrackingNumber</code> values for a Snowball being
   *       returned to AWS for a particular job.</p>
   */
  InboundShipment?: Shipment;

  /**
   * <p>The <code>Status</code> and <code>TrackingNumber</code> values for a Snowball being
   *       delivered to the address that you specified for a particular job.</p>
   */
  OutboundShipment?: Shipment;

  /**
   * <p>The shipping speed for a particular job. This speed doesn't dictate how soon you'll get
   *       the Snowball from the job's creation date. This speed represents how quickly it moves to its
   *       destination while in transit. Regional shipping speeds are as follows:</p>
   *
   *          <ul>
   *             <li>
   *                <p>In Australia, you have access to express shipping. Typically, Snowballs shipped
   *           express are delivered in about a day.</p>
   *             </li>
   *             <li>
   *                <p>In the European Union (EU), you have access to express shipping. Typically,
   *           Snowballs shipped express are delivered in about a day. In addition, most countries in the
   *           EU have access to standard shipping, which typically takes less than a week, one
   *           way.</p>
   *             </li>
   *             <li>
   *                <p>In India, Snowballs are delivered in one to seven days.</p>
   *             </li>
   *             <li>
   *                <p>In the United States of America (US), you have access to one-day shipping and
   *           two-day shipping.</p>
   *             </li>
   *          </ul>
   */
  ShippingOption?: ShippingOption | string;
}

export namespace ShippingDetails {
  export const filterSensitiveLog = (obj: ShippingDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is ShippingDetails =>
    __isa(o, "ShippingDetails");
}

export enum ShippingOption {
  EXPRESS = "EXPRESS",
  NEXT_DAY = "NEXT_DAY",
  SECOND_DAY = "SECOND_DAY",
  STANDARD = "STANDARD"
}

export enum SnowballCapacity {
  NO_PREFERENCE = "NoPreference",
  T100 = "T100",
  T42 = "T42",
  T50 = "T50",
  T80 = "T80"
}

export enum SnowballType {
  EDGE = "EDGE",
  EDGE_C = "EDGE_C",
  EDGE_CG = "EDGE_CG",
  STANDARD = "STANDARD"
}

/**
 * <p>The address is either outside the serviceable area for your region, or an error
 *       occurred. Check the address with your region's carrier and try again. If the issue persists,
 *       contact AWS Support.</p>
 */
export interface UnsupportedAddressException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnsupportedAddressException";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedAddressException {
  export const filterSensitiveLog = (
    obj: UnsupportedAddressException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnsupportedAddressException =>
    __isa(o, "UnsupportedAddressException");
}

export interface UpdateClusterRequest {
  __type?: "UpdateClusterRequest";
  /**
   * <p>The ID of the updated <a>Address</a> object.</p>
   */
  AddressId?: string;

  /**
   * <p>The cluster ID of the cluster that you want to update, for example
   *         <code>CID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>The updated description of this cluster.</p>
   */
  Description?: string;

  /**
   * <p>The updated ID for the forwarding address for a cluster. This field is not
   *       supported in most regions.</p>
   */
  ForwardingAddressId?: string;

  /**
   * <p>The new or updated <a>Notification</a> object.</p>
   */
  Notification?: Notification;

  /**
   * <p>The updated arrays of <a>JobResource</a> objects that can include updated
   *         <a>S3Resource</a> objects or <a>LambdaResource</a> objects.</p>
   */
  Resources?: JobResource;

  /**
   * <p>The new role Amazon Resource Name (ARN) that you want to associate with this cluster.
   *       To create a role ARN, use the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a> API action in AWS
   *       Identity and Access Management (IAM).</p>
   */
  RoleARN?: string;

  /**
   * <p>The updated shipping option value of this cluster's <a>ShippingDetails</a>
   *       object.</p>
   */
  ShippingOption?: ShippingOption | string;
}

export namespace UpdateClusterRequest {
  export const filterSensitiveLog = (obj: UpdateClusterRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateClusterRequest =>
    __isa(o, "UpdateClusterRequest");
}

export interface UpdateClusterResult {
  __type?: "UpdateClusterResult";
}

export namespace UpdateClusterResult {
  export const filterSensitiveLog = (obj: UpdateClusterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateClusterResult =>
    __isa(o, "UpdateClusterResult");
}

export interface UpdateJobRequest {
  __type?: "UpdateJobRequest";
  /**
   * <p>The ID of the updated <a>Address</a> object.</p>
   */
  AddressId?: string;

  /**
   * <p>The updated description of this job's <a>JobMetadata</a> object.</p>
   */
  Description?: string;

  /**
   * <p>The updated ID for the forwarding address for a job. This field is not
   *       supported in most regions.</p>
   */
  ForwardingAddressId?: string;

  /**
   * <p>The job ID of the job that you want to update, for example
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  JobId: string | undefined;

  /**
   * <p>The new or updated <a>Notification</a> object.</p>
   */
  Notification?: Notification;

  /**
   * <p>The updated <code>JobResource</code> object, or the updated <a>JobResource</a> object. </p>
   */
  Resources?: JobResource;

  /**
   * <p>The new role Amazon Resource Name (ARN) that you want to associate with this job. To
   *       create a role ARN, use the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a>AWS Identity and Access
   *       Management (IAM) API action.</p>
   */
  RoleARN?: string;

  /**
   * <p>The updated shipping option value of this job's <a>ShippingDetails</a>
   *       object.</p>
   */
  ShippingOption?: ShippingOption | string;

  /**
   * <p>The updated <code>SnowballCapacityPreference</code> of this job's <a>JobMetadata</a> object. The 50 TB Snowballs are only available in the US
   *       regions.</p>
   */
  SnowballCapacityPreference?: SnowballCapacity | string;
}

export namespace UpdateJobRequest {
  export const filterSensitiveLog = (obj: UpdateJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateJobRequest =>
    __isa(o, "UpdateJobRequest");
}

export interface UpdateJobResult {
  __type?: "UpdateJobResult";
}

export namespace UpdateJobResult {
  export const filterSensitiveLog = (obj: UpdateJobResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateJobResult =>
    __isa(o, "UpdateJobResult");
}
