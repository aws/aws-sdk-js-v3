// smithy-typescript generated code
import type {
  AddressType,
  ClusterState,
  DeviceServiceName,
  ImpactLevel,
  JobState,
  JobType,
  LongTermPricingType,
  RemoteManagement,
  ServiceName,
  ShipmentState,
  ShippingLabelStatus,
  ShippingOption,
  SnowballCapacity,
  SnowballType,
  StorageUnit,
  TransferOption,
} from "./enums";

/**
 * The address that you want the Snow device(s) associated with a specific job to be shipped to. Addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. Although no individual elements of the `Address` are required, if the address is invalid or unsupported, then an exception is thrown.
 *
 * @public
 */
export interface Address {
  /**
   * The unique ID for an address.
   *
   * @public
   */
  AddressId?: string | undefined;

  /**
   * The name of a person to receive a Snow device at an address.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The name of the company to receive a Snow device at an address.
   *
   * @public
   */
  Company?: string | undefined;

  /**
   * The first line in a street address that a Snow device is to be delivered to.
   *
   * @public
   */
  Street1?: string | undefined;

  /**
   * The second line in a street address that a Snow device is to be delivered to.
   *
   * @public
   */
  Street2?: string | undefined;

  /**
   * The third line in a street address that a Snow device is to be delivered to.
   *
   * @public
   */
  Street3?: string | undefined;

  /**
   * The city in an address that a Snow device is to be delivered to.
   *
   * @public
   */
  City?: string | undefined;

  /**
   * The state or province in an address that a Snow device is to be delivered to.
   *
   * @public
   */
  StateOrProvince?: string | undefined;

  /**
   * This field is no longer used and the value is ignored.
   *
   * @public
   */
  PrefectureOrDistrict?: string | undefined;

  /**
   * This field is no longer used and the value is ignored.
   *
   * @public
   */
  Landmark?: string | undefined;

  /**
   * The country in an address that a Snow device is to be delivered to.
   *
   * @public
   */
  Country?: string | undefined;

  /**
   * The postal code in an address that a Snow device is to be delivered to.
   *
   * @public
   */
  PostalCode?: string | undefined;

  /**
   * The phone number associated with an address that a Snow device is to be delivered to.
   *
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * If the address you are creating is a primary address, then set this option to true. This field is not supported in most regions.
   *
   * @public
   */
  IsRestricted?: boolean | undefined;

  /**
   * Differentiates between delivery address and pickup address in the customer account. Provided at job creation.
   *
   * @public
   */
  Type?: AddressType | undefined;
}

/**
 * @public
 */
export interface CancelClusterRequest {
  /**
   * The 39-character ID for the cluster that you want to cancel, for example `CID123e4567-e89b-12d3-a456-426655440000`.
   *
   * @public
   */
  ClusterId: string | undefined;
}

/**
 * @public
 */
export interface CancelClusterResult {}

/**
 * @public
 */
export interface CancelJobRequest {
  /**
   * The 39-character job ID for the job that you want to cancel, for example `JID123e4567-e89b-12d3-a456-426655440000`.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface CancelJobResult {}

/**
 * @public
 */
export interface CreateAddressRequest {
  /**
   * The address that you want the Snow device shipped to.
   *
   * @public
   */
  Address: Address | undefined;
}

/**
 * @public
 */
export interface CreateAddressResult {
  /**
   * The automatically generated ID for a specific address. You'll use this ID when you create a job to specify which address you want the Snow device for that job shipped to.
   *
   * @public
   */
  AddressId?: string | undefined;
}

/**
 * The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The `Notification` object is returned as a part of the response syntax of the `DescribeJob` action in the `JobMetadata` data type.
 *
 * When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the `JobStatesToNotify` array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with `NotifyAll` set to true.
 *
 * @public
 */
export interface Notification {
  /**
   * The new SNS `TopicArn` that you want to associate with this job. You can create Amazon Resource Names (ARNs) for topics by using the [CreateTopic](https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html) Amazon SNS API action.
   *
   * You can subscribe email addresses to an Amazon SNS topic through the Amazon Web Services Management Console, or by using the [Subscribe](https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html) Amazon Simple Notification Service (Amazon SNS) API action.
   *
   * @public
   */
  SnsTopicARN?: string | undefined;

  /**
   * The list of job states that will trigger a notification for this job.
   *
   * @public
   */
  JobStatesToNotify?: JobState[] | undefined;

  /**
   * Any change in job state will trigger a notification for this job.
   *
   * @public
   */
  NotifyAll?: boolean | undefined;

  /**
   * Used to send SNS notifications for the person picking up the device (identified during job creation).
   *
   * @public
   */
  DevicePickupSnsTopicARN?: string | undefined;
}

/**
 * An object representing the metadata and configuration settings of EKS Anywhere on the Snow Family device.
 *
 * @public
 */
export interface EKSOnDeviceServiceConfiguration {
  /**
   * The Kubernetes version for EKS Anywhere on the Snow Family device.
   *
   * @public
   */
  KubernetesVersion?: string | undefined;

  /**
   * The optional version of EKS Anywhere on the Snow Family device.
   *
   * @public
   */
  EKSAnywhereVersion?: string | undefined;
}

/**
 * An object that represents the metadata and configuration settings for the NFS (Network File System) service on an Amazon Web Services Snow Family device.
 *
 * @public
 */
export interface NFSOnDeviceServiceConfiguration {
  /**
   * The maximum NFS storage for one Snow Family device.
   *
   * @public
   */
  StorageLimit?: number | undefined;

  /**
   * The scale unit of the NFS storage on the device.
   *
   * Valid values: TB.
   *
   * @public
   */
  StorageUnit?: StorageUnit | undefined;
}

/**
 * Amazon S3 compatible storage on Snow family devices configuration items.
 *
 * @public
 */
export interface S3OnDeviceServiceConfiguration {
  /**
   * If the specified storage limit value matches storage limit of one of the defined configurations, that configuration will be used. If the specified storage limit value does not match any defined configuration, the request will fail. If more than one configuration has the same storage limit as specified, the other input need to be provided.
   *
   * @public
   */
  StorageLimit?: number | undefined;

  /**
   * Storage unit. Currently the only supported unit is TB.
   *
   * @public
   */
  StorageUnit?: StorageUnit | undefined;

  /**
   * Applicable when creating a cluster. Specifies how many nodes are needed for Amazon S3 compatible storage on Snow family devices. If specified, the other input can be omitted.
   *
   * @public
   */
  ServiceSize?: number | undefined;

  /**
   * >Fault tolerance level of the cluster. This indicates the number of nodes that can go down without degrading the performance of the cluster. This additional input helps when the specified `StorageLimit` matches more than one Amazon S3 compatible storage on Snow family devices service configuration.
   *
   * @public
   */
  FaultTolerance?: number | undefined;
}

/**
 * An object that represents the metadata and configuration settings for the Storage Gateway service Tape Gateway type on an Amazon Web Services Snow Family device.
 *
 * @public
 */
export interface TGWOnDeviceServiceConfiguration {
  /**
   * The maximum number of virtual tapes to store on one Snow Family device. Due to physical resource limitations, this value must be set to 80 for Snowball Edge.
   *
   * @public
   */
  StorageLimit?: number | undefined;

  /**
   * The scale unit of the virtual tapes on the device.
   *
   * @public
   */
  StorageUnit?: StorageUnit | undefined;
}

/**
 * An object that represents the metadata and configuration settings for services on an Amazon Web Services Snow Family device.
 *
 * @public
 */
export interface OnDeviceServiceConfiguration {
  /**
   * Represents the NFS (Network File System) service on a Snow Family device.
   *
   * @public
   */
  NFSOnDeviceService?: NFSOnDeviceServiceConfiguration | undefined;

  /**
   * Represents the Storage Gateway service Tape Gateway type on a Snow Family device.
   *
   * @public
   */
  TGWOnDeviceService?: TGWOnDeviceServiceConfiguration | undefined;

  /**
   * The configuration of EKS Anywhere on the Snow Family device.
   *
   * @public
   */
  EKSOnDeviceService?: EKSOnDeviceServiceConfiguration | undefined;

  /**
   * Configuration for Amazon S3 compatible storage on Snow family devices.
   *
   * @public
   */
  S3OnDeviceService?: S3OnDeviceServiceConfiguration | undefined;
}

/**
 * A JSON-formatted object that contains the IDs for an Amazon Machine Image (AMI), including the Amazon EC2-compatible AMI ID and the Snow device AMI ID. Each AMI has these two IDs to simplify identifying the AMI in both the Amazon Web Services Cloud and on the device.
 *
 * @public
 */
export interface Ec2AmiResource {
  /**
   * The ID of the AMI in Amazon EC2.
   *
   * @public
   */
  AmiId: string | undefined;

  /**
   * The ID of the AMI on the Snow device.
   *
   * @public
   */
  SnowballAmiId?: string | undefined;
}

/**
 * The container for the EventTriggerDefinition$EventResourceARN.
 *
 * @public
 */
export interface EventTriggerDefinition {
  /**
   * The Amazon Resource Name (ARN) for any local Amazon S3 resource that is an Lambda function's event trigger associated with this job.
   *
   * @public
   */
  EventResourceARN?: string | undefined;
}

/**
 * Identifies
 *
 * @public
 */
export interface LambdaResource {
  /**
   * An Amazon Resource Name (ARN) that represents an Lambda function to be triggered by PUT object actions on the associated local Amazon S3 resource.
   *
   * @public
   */
  LambdaArn?: string | undefined;

  /**
   * The array of ARNs for S3Resource objects to trigger the LambdaResource objects associated with this job.
   *
   * @public
   */
  EventTriggers?: EventTriggerDefinition[] | undefined;
}

/**
 * Contains a key range. For export jobs, a `S3Resource` object can have an optional `KeyRange` value. The length of the range is defined at job creation, and has either an inclusive `BeginMarker`, an inclusive `EndMarker`, or both. Ranges are UTF-8 binary sorted.
 *
 * @public
 */
export interface KeyRange {
  /**
   * The key that starts an optional key range for an export job. Ranges are inclusive and UTF-8 binary sorted.
   *
   * @public
   */
  BeginMarker?: string | undefined;

  /**
   * The key that ends an optional key range for an export job. Ranges are inclusive and UTF-8 binary sorted.
   *
   * @public
   */
  EndMarker?: string | undefined;
}

/**
 * An object that represents the service or services on the Snow Family device that your transferred data will be exported from or imported into. Amazon Web Services Snow Family supports Amazon S3 and NFS (Network File System).
 *
 * @public
 */
export interface TargetOnDeviceService {
  /**
   * Specifies the name of the service on the Snow Family device that your transferred data will be exported from or imported into.
   *
   * @public
   */
  ServiceName?: DeviceServiceName | undefined;

  /**
   * Specifies whether the data is being imported or exported. You can import or export the data, or use it locally on the device.
   *
   * @public
   */
  TransferOption?: TransferOption | undefined;
}

/**
 * Each `S3Resource` object represents an Amazon S3 bucket that your transferred data will be exported from or imported into. For export jobs, this object can have an optional `KeyRange` value. The length of the range is defined at job creation, and has either an inclusive `BeginMarker`, an inclusive `EndMarker`, or both. Ranges are UTF-8 binary sorted.
 *
 * @public
 */
export interface S3Resource {
  /**
   * The Amazon Resource Name (ARN) of an Amazon S3 bucket.
   *
   * @public
   */
  BucketArn?: string | undefined;

  /**
   * For export jobs, you can provide an optional `KeyRange` within a specific Amazon S3 bucket. The length of the range is defined at job creation, and has either an inclusive `BeginMarker`, an inclusive `EndMarker`, or both. Ranges are UTF-8 binary sorted.
   *
   * @public
   */
  KeyRange?: KeyRange | undefined;

  /**
   * Specifies the service or services on the Snow Family device that your transferred data will be exported from or imported into. Amazon Web Services Snow Family supports Amazon S3 and NFS (Network File System).
   *
   * @public
   */
  TargetOnDeviceServices?: TargetOnDeviceService[] | undefined;
}

/**
 * Contains an array of Amazon Web Services resource objects. Each object represents an Amazon S3 bucket, an Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job.
 *
 * @public
 */
export interface JobResource {
  /**
   * An array of `S3Resource` objects.
   *
   * @public
   */
  S3Resources?: S3Resource[] | undefined;

  /**
   * The Python-language Lambda functions for this job.
   *
   * @public
   */
  LambdaResources?: LambdaResource[] | undefined;

  /**
   * The Amazon Machine Images (AMIs) associated with this job.
   *
   * @public
   */
  Ec2AmiResources?: Ec2AmiResource[] | undefined;
}

/**
 * The tax documents required in Amazon Web Services Region in India.
 *
 * @public
 */
export interface INDTaxDocuments {
  /**
   * The Goods and Services Tax (GST) documents required in Amazon Web Services Region in India.
   *
   * @public
   */
  GSTIN?: string | undefined;
}

/**
 * The tax documents required in your Amazon Web Services Region.
 *
 * @public
 */
export interface TaxDocuments {
  /**
   * The tax documents required in Amazon Web Services Region in India.
   *
   * @public
   */
  IND?: INDTaxDocuments | undefined;
}

/**
 * @public
 */
export interface CreateClusterRequest {
  /**
   * The type of job for this cluster. Currently, the only job type supported for clusters is `LOCAL_USE`.
   *
   * For more information, see "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the *Snowcone User Guide* or "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the *Snowcone User Guide*.
   *
   * @public
   */
  JobType: JobType | undefined;

  /**
   * The resources associated with the cluster job. These resources include Amazon S3 buckets and optional Lambda functions written in the Python language.
   *
   * @public
   */
  Resources?: JobResource | undefined;

  /**
   * Specifies the service or services on the Snow Family device that your transferred data will be exported from or imported into. Amazon Web Services Snow Family device clusters support Amazon S3 and NFS (Network File System).
   *
   * @public
   */
  OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration | undefined;

  /**
   * An optional description of this specific cluster, for example `Environmental Data Cluster-01`.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID for the address that you want the cluster shipped to.
   *
   * @public
   */
  AddressId: string | undefined;

  /**
   * The `KmsKeyARN` value that you want to associate with this cluster. `KmsKeyARN` values are created by using the [CreateKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html) API action in Key Management Service (KMS).
   *
   * @public
   */
  KmsKeyARN?: string | undefined;

  /**
   * The `RoleARN` that you want to associate with this cluster. `RoleArn` values are created by using the [CreateRole](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html) API action in Identity and Access Management (IAM).
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * The type of Snow Family devices to use for this cluster.
   *
   * > **Note:** For cluster jobs, Amazon Web Services Snow Family currently supports only the `EDGE` device type.
   *
   * For more information, see "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the *Snowcone User Guide* or "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the *Snowcone User Guide*.
   *
   * @public
   */
  SnowballType: SnowballType | undefined;

  /**
   * The shipping speed for each node in this cluster. This speed doesn't dictate how soon you'll get each Snowball Edge device, rather it represents how quickly each device moves to its destination while in transit. Regional shipping speeds are as follows:
   *
   * - In Australia, you have access to express shipping. Typically, Snow devices shipped express are delivered in about a day.
   * - In the European Union (EU), you have access to express shipping. Typically, Snow devices shipped express are delivered in about a day. In addition, most countries in the EU have access to standard shipping, which typically takes less than a week, one way.
   * - In India, Snow devices are delivered in one to seven days.
   * - In the United States of America (US), you have access to one-day shipping and two-day shipping.
   *
   * - In Australia, you have access to express shipping. Typically, devices shipped express are delivered in about a day.
   * - In the European Union (EU), you have access to express shipping. Typically, Snow devices shipped express are delivered in about a day. In addition, most countries in the EU have access to standard shipping, which typically takes less than a week, one way.
   * - In India, Snow devices are delivered in one to seven days.
   * - In the US, you have access to one-day shipping and two-day shipping.
   *
   * @public
   */
  ShippingOption: ShippingOption | undefined;

  /**
   * The Amazon Simple Notification Service (Amazon SNS) notification settings for this cluster.
   *
   * @public
   */
  Notification?: Notification | undefined;

  /**
   * The forwarding address ID for a cluster. This field is not supported in most regions.
   *
   * @public
   */
  ForwardingAddressId?: string | undefined;

  /**
   * The tax documents required in your Amazon Web Services Region.
   *
   * @public
   */
  TaxDocuments?: TaxDocuments | undefined;

  /**
   * Allows you to securely operate and manage Snow devices in a cluster remotely from outside of your internal network. When set to `INSTALLED_AUTOSTART`, remote management will automatically be available when the device arrives at your location. Otherwise, you need to use the Snowball Client to manage the device.
   *
   * @public
   */
  RemoteManagement?: RemoteManagement | undefined;

  /**
   * If provided, each job will be automatically created and associated with the new cluster. If not provided, will be treated as 0.
   *
   * @public
   */
  InitialClusterSize?: number | undefined;

  /**
   * Force to create cluster when user attempts to overprovision or underprovision a cluster. A cluster is overprovisioned or underprovisioned if the initial size of the cluster is more (overprovisioned) or less (underprovisioned) than what needed to meet capacity requirement specified with `OnDeviceServiceConfiguration`.
   *
   * @public
   */
  ForceCreateJobs?: boolean | undefined;

  /**
   * Lists long-term pricing id that will be used to associate with jobs automatically created for the new cluster.
   *
   * @public
   */
  LongTermPricingIds?: string[] | undefined;

  /**
   * If your job is being created in one of the US regions, you have the option of specifying what size Snow device you'd like for this job. In all other regions, Snowballs come with 80 TB in storage capacity.
   *
   * For more information, see "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the *Snowcone User Guide* or "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the *Snowcone User Guide*.
   *
   * @public
   */
  SnowballCapacityPreference?: SnowballCapacity | undefined;
}

/**
 * Each `JobListEntry` object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of an export job.
 *
 * @public
 */
export interface JobListEntry {
  /**
   * The automatically generated ID for a job, for example `JID123e4567-e89b-12d3-a456-426655440000`.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The current state of this job.
   *
   * @public
   */
  JobState?: JobState | undefined;

  /**
   * A value that indicates that this job is a main job. A main job represents a successful request to create an export job. Main jobs aren't associated with any Snowballs. Instead, each main job will have at least one job part, and each job part is associated with a Snowball. It might take some time before the job parts associated with a particular main job are listed, because they are created after the main job is created.
   *
   * @public
   */
  IsMaster?: boolean | undefined;

  /**
   * The type of job.
   *
   * @public
   */
  JobType?: JobType | undefined;

  /**
   * The type of device used with this job.
   *
   * @public
   */
  SnowballType?: SnowballType | undefined;

  /**
   * The creation date for this job.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The optional description of this specific job, for example `Important Photos 2016-08-11`.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface CreateClusterResult {
  /**
   * The automatically generated ID for a cluster.
   *
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * List of jobs created for this cluster. For syntax, see [ListJobsResult$JobListEntries](http://amazonaws.com/snowball/latest/api-reference/API_ListJobs.html#API_ListJobs_ResponseSyntax) in this guide.
   *
   * @public
   */
  JobListEntries?: JobListEntry[] | undefined;
}

/**
 * Configures the wireless connection on an Snowball Edge device.
 *
 * @public
 */
export interface WirelessConnection {
  /**
   * Enables the Wi-Fi adapter on an Snowball Edge device.
   *
   * @public
   */
  IsWifiEnabled?: boolean | undefined;
}

/**
 * Specifies the device configuration for an Snowball Edge job.
 *
 * @public
 */
export interface SnowconeDeviceConfiguration {
  /**
   * Configures the wireless connection for the Snowball Edge device.
   *
   * @public
   */
  WirelessConnection?: WirelessConnection | undefined;
}

/**
 * The container for `SnowconeDeviceConfiguration`.
 *
 * @public
 */
export interface DeviceConfiguration {
  /**
   * Returns information about the device configuration for an Snowball Edge job.
   *
   * @public
   */
  SnowconeDeviceConfiguration?: SnowconeDeviceConfiguration | undefined;
}

/**
 * Information identifying the person picking up the device.
 *
 * @public
 */
export interface PickupDetails {
  /**
   * The name of the person picking up the device.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The phone number of the person picking up the device.
   *
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * The email address of the person picking up the device.
   *
   * @public
   */
  Email?: string | undefined;

  /**
   * The number on the credential identifying the person picking up the device.
   *
   * @public
   */
  IdentificationNumber?: string | undefined;

  /**
   * Expiration date of the credential identifying the person picking up the device.
   *
   * @public
   */
  IdentificationExpirationDate?: Date | undefined;

  /**
   * Organization that issued the credential identifying the person picking up the device.
   *
   * @public
   */
  IdentificationIssuingOrg?: string | undefined;

  /**
   * The unique ID for a device that will be picked up.
   *
   * @public
   */
  DevicePickupId?: string | undefined;
}

/**
 * @public
 */
export interface CreateJobRequest {
  /**
   * Defines the type of job that you're creating.
   *
   * @public
   */
  JobType?: JobType | undefined;

  /**
   * Defines the Amazon S3 buckets associated with this job.
   *
   * With `IMPORT` jobs, you specify the bucket or buckets that your transferred data will be imported into.
   *
   * With `EXPORT` jobs, you specify the bucket or buckets that your transferred data will be exported from. Optionally, you can also specify a `KeyRange` value. If you choose to export a range, you define the length of the range by providing either an inclusive `BeginMarker` value, an inclusive `EndMarker` value, or both. Ranges are UTF-8 binary sorted.
   *
   * @public
   */
  Resources?: JobResource | undefined;

  /**
   * Specifies the service or services on the Snow Family device that your transferred data will be exported from or imported into. Amazon Web Services Snow Family supports Amazon S3 and NFS (Network File System) and the Amazon Web Services Storage Gateway service Tape Gateway type.
   *
   * @public
   */
  OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration | undefined;

  /**
   * Defines an optional description of this specific job, for example `Important Photos 2016-08-11`.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID for the address that you want the Snow device shipped to.
   *
   * @public
   */
  AddressId?: string | undefined;

  /**
   * The `KmsKeyARN` that you want to associate with this job. `KmsKeyARN`s are created using the [CreateKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html) Key Management Service (KMS) API action.
   *
   * @public
   */
  KmsKeyARN?: string | undefined;

  /**
   * The `RoleARN` that you want to associate with this job. `RoleArn`s are created using the [CreateRole](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html) Identity and Access Management (IAM) API action.
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * If your job is being created in one of the US regions, you have the option of specifying what size Snow device you'd like for this job. In all other regions, Snowballs come with 80 TB in storage capacity.
   *
   * For more information, see "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the *Snowcone User Guide* or "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the *Snowcone User Guide*.
   *
   * @public
   */
  SnowballCapacityPreference?: SnowballCapacity | undefined;

  /**
   * The shipping speed for this job. This speed doesn't dictate how soon you'll get the Snow device, rather it represents how quickly the Snow device moves to its destination while in transit. Regional shipping speeds are as follows:
   *
   * - In Australia, you have access to express shipping. Typically, Snow devices shipped express are delivered in about a day.
   * - In the European Union (EU), you have access to express shipping. Typically, Snow devices shipped express are delivered in about a day. In addition, most countries in the EU have access to standard shipping, which typically takes less than a week, one way.
   * - In India, Snow devices are delivered in one to seven days.
   * - In the US, you have access to one-day shipping and two-day shipping.
   *
   * @public
   */
  ShippingOption?: ShippingOption | undefined;

  /**
   * Defines the Amazon Simple Notification Service (Amazon SNS) notification settings for this job.
   *
   * @public
   */
  Notification?: Notification | undefined;

  /**
   * The ID of a cluster. If you're creating a job for a node in a cluster, you need to provide only this `clusterId` value. The other job attributes are inherited from the cluster.
   *
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * The type of Snow Family devices to use for this job.
   *
   * > **Note:** For cluster jobs, Amazon Web Services Snow Family currently supports only the `EDGE` device type.
   *
   * The type of Amazon Web Services Snow device to use for this job. Currently, the only supported device type for cluster jobs is `EDGE`.
   *
   * For more information, see [Snowball Edge Device Options](https://docs.aws.amazon.com/snowball/latest/developer-guide/device-differences.html) in the Snowball Edge Developer Guide.
   *
   * For more information, see "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the *Snowcone User Guide* or "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the *Snowcone User Guide*.
   *
   * @public
   */
  SnowballType?: SnowballType | undefined;

  /**
   * The forwarding address ID for a job. This field is not supported in most Regions.
   *
   * @public
   */
  ForwardingAddressId?: string | undefined;

  /**
   * The tax documents required in your Amazon Web Services Region.
   *
   * @public
   */
  TaxDocuments?: TaxDocuments | undefined;

  /**
   * Defines the device configuration for an Snowball Edge job.
   *
   * For more information, see "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the *Snowcone User Guide* or "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the *Snowcone User Guide*.
   *
   * @public
   */
  DeviceConfiguration?: DeviceConfiguration | undefined;

  /**
   * Allows you to securely operate and manage Snowcone devices remotely from outside of your internal network. When set to `INSTALLED_AUTOSTART`, remote management will automatically be available when the device arrives at your location. Otherwise, you need to use the Snowball Edge client to manage the device. When set to `NOT_INSTALLED`, remote management will not be available on the device.
   *
   * @public
   */
  RemoteManagement?: RemoteManagement | undefined;

  /**
   * The ID of the long-term pricing type for the device.
   *
   * @public
   */
  LongTermPricingId?: string | undefined;

  /**
   * The highest impact level of data that will be stored or processed on the device, provided at job creation.
   *
   * @public
   */
  ImpactLevel?: ImpactLevel | undefined;

  /**
   * Information identifying the person picking up the device.
   *
   * @public
   */
  PickupDetails?: PickupDetails | undefined;
}

/**
 * @public
 */
export interface CreateJobResult {
  /**
   * The automatically generated ID for a job, for example `JID123e4567-e89b-12d3-a456-426655440000`.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface CreateLongTermPricingRequest {
  /**
   * The type of long-term pricing option you want for the device, either 1-year or 3-year long-term pricing.
   *
   * @public
   */
  LongTermPricingType: LongTermPricingType | undefined;

  /**
   * Specifies whether the current long-term pricing type for the device should be renewed.
   *
   * @public
   */
  IsLongTermPricingAutoRenew?: boolean | undefined;

  /**
   * The type of Snow Family devices to use for the long-term pricing job.
   *
   * @public
   */
  SnowballType: SnowballType | undefined;
}

/**
 * @public
 */
export interface CreateLongTermPricingResult {
  /**
   * The ID of the long-term pricing type for the device.
   *
   * @public
   */
  LongTermPricingId?: string | undefined;
}

/**
 * @public
 */
export interface CreateReturnShippingLabelRequest {
  /**
   * The ID for a job that you want to create the return shipping label for; for example, `JID123e4567-e89b-12d3-a456-426655440000`.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * The shipping speed for a particular job. This speed doesn't dictate how soon the device is returned to Amazon Web Services. This speed represents how quickly it moves to its destination while in transit. Regional shipping speeds are as follows:
   *
   * @public
   */
  ShippingOption?: ShippingOption | undefined;
}

/**
 * @public
 */
export interface CreateReturnShippingLabelResult {
  /**
   * The status information of the task on a Snow device that is being returned to Amazon Web Services.
   *
   * @public
   */
  Status?: ShippingLabelStatus | undefined;
}

/**
 * @public
 */
export interface DescribeAddressRequest {
  /**
   * The automatically generated ID for a specific address.
   *
   * @public
   */
  AddressId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAddressResult {
  /**
   * The address that you want the Snow device(s) associated with a specific job to be shipped to.
   *
   * @public
   */
  Address?: Address | undefined;
}

/**
 * @public
 */
export interface DescribeAddressesRequest {
  /**
   * The number of `ADDRESS` objects to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * HTTP requests are stateless. To identify what object comes "next" in the list of `ADDRESS` objects, you have the option of specifying a value for `NextToken` as the starting point for your list of returned addresses.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAddressesResult {
  /**
   * The Snow device shipping addresses that were created for this account.
   *
   * @public
   */
  Addresses?: Address[] | undefined;

  /**
   * HTTP requests are stateless. If you use the automatically generated `NextToken` value in your next `DescribeAddresses` call, your list of returned addresses will start from this point in the array.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClusterRequest {
  /**
   * The automatically generated ID for a cluster.
   *
   * @public
   */
  ClusterId: string | undefined;
}

/**
 * Contains metadata about a specific cluster.
 *
 * @public
 */
export interface ClusterMetadata {
  /**
   * The automatically generated ID for a cluster.
   *
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * The optional description of the cluster.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The `KmsKeyARN` Amazon Resource Name (ARN) associated with this cluster. This ARN was created using the [CreateKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html) API action in Key Management Service (KMS.
   *
   * @public
   */
  KmsKeyARN?: string | undefined;

  /**
   * The role ARN associated with this cluster. This ARN was created using the [CreateRole](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html) API action in Identity and Access Management (IAM).
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * The current status of the cluster.
   *
   * @public
   */
  ClusterState?: ClusterState | undefined;

  /**
   * The type of job for this cluster. Currently, the only job type supported for clusters is `LOCAL_USE`.
   *
   * @public
   */
  JobType?: JobType | undefined;

  /**
   * The type of Snowball Edge device to use for this cluster.
   *
   * > **Note:** For cluster jobs, Amazon Web Services Snow Family currently supports only the `EDGE` device type.
   *
   * @public
   */
  SnowballType?: SnowballType | undefined;

  /**
   * The creation date for this cluster.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The arrays of JobResource objects that can include updated S3Resource objects or LambdaResource objects.
   *
   * @public
   */
  Resources?: JobResource | undefined;

  /**
   * The automatically generated ID for a specific address.
   *
   * @public
   */
  AddressId?: string | undefined;

  /**
   * The shipping speed for each node in this cluster. This speed doesn't dictate how soon you'll get each device, rather it represents how quickly each device moves to its destination while in transit. Regional shipping speeds are as follows:
   *
   * - In Australia, you have access to express shipping. Typically, devices shipped express are delivered in about a day.
   * - In the European Union (EU), you have access to express shipping. Typically, Snow devices shipped express are delivered in about a day. In addition, most countries in the EU have access to standard shipping, which typically takes less than a week, one way.
   * - In India, Snow devices are delivered in one to seven days.
   * - In the US, you have access to one-day shipping and two-day shipping.
   *
   * @public
   */
  ShippingOption?: ShippingOption | undefined;

  /**
   * The Amazon Simple Notification Service (Amazon SNS) notification settings for this cluster.
   *
   * @public
   */
  Notification?: Notification | undefined;

  /**
   * The ID of the address that you want a cluster shipped to, after it will be shipped to its primary address. This field is not supported in most regions.
   *
   * @public
   */
  ForwardingAddressId?: string | undefined;

  /**
   * The tax documents required in your Amazon Web Services Region.
   *
   * @public
   */
  TaxDocuments?: TaxDocuments | undefined;

  /**
   * Represents metadata and configuration settings for services on an Amazon Web Services Snow Family device.
   *
   * @public
   */
  OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeClusterResult {
  /**
   * Information about a specific cluster, including shipping information, cluster status, and other important metadata.
   *
   * @public
   */
  ClusterMetadata?: ClusterMetadata | undefined;
}

/**
 * @public
 */
export interface DescribeJobRequest {
  /**
   * The automatically generated ID for a job, for example `JID123e4567-e89b-12d3-a456-426655440000`.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * Defines the real-time status of a Snow device's data transfer while the device is at Amazon Web Services. This data is only available while a job has a `JobState` value of `InProgress`, for both import and export jobs.
 *
 * @public
 */
export interface DataTransfer {
  /**
   * The number of bytes transferred between a Snow device and Amazon S3.
   *
   * @public
   */
  BytesTransferred?: number | undefined;

  /**
   * The number of objects transferred between a Snow device and Amazon S3.
   *
   * @public
   */
  ObjectsTransferred?: number | undefined;

  /**
   * The total bytes of data for a transfer between a Snow device and Amazon S3. This value is set to 0 (zero) until all the keys that will be transferred have been listed.
   *
   * @public
   */
  TotalBytes?: number | undefined;

  /**
   * The total number of objects for a transfer between a Snow device and Amazon S3. This value is set to 0 (zero) until all the keys that will be transferred have been listed.
   *
   * @public
   */
  TotalObjects?: number | undefined;
}

/**
 * Contains job logs. Whenever a Snow device is used to import data into or export data out of Amazon S3, you'll have the option of downloading a PDF job report. Job logs are returned as a part of the response syntax of the `DescribeJob` action in the `JobMetadata` data type. The job logs can be accessed for up to 60 minutes after this request has been made. To access any of the job logs after 60 minutes have passed, you'll have to make another call to the `DescribeJob` action.
 *
 * For import jobs, the PDF job report becomes available at the end of the import process. For export jobs, your job report typically becomes available while the Snow device for your job part is being delivered to you.
 *
 * The job report provides you insight into the state of your Amazon S3 data transfer. The report includes details about your job or job part for your records.
 *
 * For deeper visibility into the status of your transferred objects, you can look at the two associated logs: a success log and a failure log. The logs are saved in comma-separated value (CSV) format, and the name of each log includes the ID of the job or job part that the log describes.
 *
 * @public
 */
export interface JobLogs {
  /**
   * A link to an Amazon S3 presigned URL where the job completion report is located.
   *
   * @public
   */
  JobCompletionReportURI?: string | undefined;

  /**
   * A link to an Amazon S3 presigned URL where the job success log is located.
   *
   * @public
   */
  JobSuccessLogURI?: string | undefined;

  /**
   * A link to an Amazon S3 presigned URL where the job failure log is located.
   *
   * @public
   */
  JobFailureLogURI?: string | undefined;
}

/**
 * The `Status` and `TrackingNumber` information for an inbound or outbound shipment.
 *
 * @public
 */
export interface Shipment {
  /**
   * Status information for a shipment.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The tracking number for this job. Using this tracking number with your region's carrier's website, you can track a Snow device as the carrier transports it.
   *
   * For India, the carrier is Amazon Logistics. For all other regions, UPS is the carrier.
   *
   * @public
   */
  TrackingNumber?: string | undefined;
}

/**
 * A job's shipping information, including inbound and outbound tracking numbers and shipping speed options.
 *
 * @public
 */
export interface ShippingDetails {
  /**
   * The shipping speed for a particular job. This speed doesn't dictate how soon you'll get the Snow device from the job's creation date. This speed represents how quickly it moves to its destination while in transit. Regional shipping speeds are as follows:
   *
   * - In Australia, you have access to express shipping. Typically, Snow devices shipped express are delivered in about a day.
   * - In the European Union (EU), you have access to express shipping. Typically, Snow devices shipped express are delivered in about a day. In addition, most countries in the EU have access to standard shipping, which typically takes less than a week, one way.
   * - In India, Snow devices are delivered in one to seven days.
   * - In the United States of America (US), you have access to one-day shipping and two-day shipping.
   *
   * @public
   */
  ShippingOption?: ShippingOption | undefined;

  /**
   * The `Status` and `TrackingNumber` values for a Snow device being returned to Amazon Web Services for a particular job.
   *
   * @public
   */
  InboundShipment?: Shipment | undefined;

  /**
   * The `Status` and `TrackingNumber` values for a Snow device being delivered to the address that you specified for a particular job.
   *
   * @public
   */
  OutboundShipment?: Shipment | undefined;
}

/**
 * Contains information about a specific job including shipping information, job status, and other important metadata. This information is returned as a part of the response syntax of the `DescribeJob` action.
 *
 * @public
 */
export interface JobMetadata {
  /**
   * The automatically generated ID for a job, for example `JID123e4567-e89b-12d3-a456-426655440000`.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The current status of the jobs.
   *
   * @public
   */
  JobState?: JobState | undefined;

  /**
   * The type of job.
   *
   * @public
   */
  JobType?: JobType | undefined;

  /**
   * The type of device used with this job.
   *
   * @public
   */
  SnowballType?: SnowballType | undefined;

  /**
   * The creation date for this job.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * An array of `S3Resource` objects. Each `S3Resource` object represents an Amazon S3 bucket that your transferred data will be exported from or imported into.
   *
   * @public
   */
  Resources?: JobResource | undefined;

  /**
   * The description of the job, provided at job creation.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the Key Management Service (KMS) key associated with this job. This ARN was created using the [CreateKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html) API action in KMS.
   *
   * @public
   */
  KmsKeyARN?: string | undefined;

  /**
   * The role ARN associated with this job. This ARN was created using the [CreateRole](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html) API action in Identity and Access Management.
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * The ID for the address that you want the Snow device shipped to.
   *
   * @public
   */
  AddressId?: string | undefined;

  /**
   * A job's shipping information, including inbound and outbound tracking numbers and shipping speed options.
   *
   * @public
   */
  ShippingDetails?: ShippingDetails | undefined;

  /**
   * The Snow device capacity preference for this job, specified at job creation. In US regions, you can choose between 50 TB and 80 TB Snowballs. All other regions use 80 TB capacity Snowballs.
   *
   * For more information, see "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the *Snowcone User Guide* or "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the *Snowcone User Guide*.
   *
   * @public
   */
  SnowballCapacityPreference?: SnowballCapacity | undefined;

  /**
   * The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The `Notification` object is returned as a part of the response syntax of the `DescribeJob` action in the `JobMetadata` data type.
   *
   * @public
   */
  Notification?: Notification | undefined;

  /**
   * A value that defines the real-time status of a Snow device's data transfer while the device is at Amazon Web Services. This data is only available while a job has a `JobState` value of `InProgress`, for both import and export jobs.
   *
   * @public
   */
  DataTransferProgress?: DataTransfer | undefined;

  /**
   * Links to Amazon S3 presigned URLs for the job report and logs. For import jobs, the PDF job report becomes available at the end of the import process. For export jobs, your job report typically becomes available while the Snow device for your job part is being delivered to you.
   *
   * @public
   */
  JobLogInfo?: JobLogs | undefined;

  /**
   * The 39-character ID for the cluster, for example `CID123e4567-e89b-12d3-a456-426655440000`.
   *
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * The ID of the address that you want a job shipped to, after it will be shipped to its primary address. This field is not supported in most regions.
   *
   * @public
   */
  ForwardingAddressId?: string | undefined;

  /**
   * The metadata associated with the tax documents required in your Amazon Web Services Region.
   *
   * @public
   */
  TaxDocuments?: TaxDocuments | undefined;

  /**
   * The container for `SnowconeDeviceConfiguration`.
   *
   * @public
   */
  DeviceConfiguration?: DeviceConfiguration | undefined;

  /**
   * Allows you to securely operate and manage Snowcone devices remotely from outside of your internal network. When set to `INSTALLED_AUTOSTART`, remote management will automatically be available when the device arrives at your location. Otherwise, you need to use the Snowball Client to manage the device.
   *
   * @public
   */
  RemoteManagement?: RemoteManagement | undefined;

  /**
   * The ID of the long-term pricing type for the device.
   *
   * @public
   */
  LongTermPricingId?: string | undefined;

  /**
   * Represents metadata and configuration settings for services on an Amazon Web Services Snow Family device.
   *
   * @public
   */
  OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration | undefined;

  /**
   * The highest impact level of data that will be stored or processed on the device, provided at job creation.
   *
   * @public
   */
  ImpactLevel?: ImpactLevel | undefined;

  /**
   * Information identifying the person picking up the device.
   *
   * @public
   */
  PickupDetails?: PickupDetails | undefined;

  /**
   * Unique ID associated with a device.
   *
   * @public
   */
  SnowballId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobResult {
  /**
   * Information about a specific job, including shipping information, job status, and other important metadata.
   *
   * @public
   */
  JobMetadata?: JobMetadata | undefined;

  /**
   * Information about a specific job part (in the case of an export job), including shipping information, job status, and other important metadata.
   *
   * @public
   */
  SubJobMetadata?: JobMetadata[] | undefined;
}

/**
 * @public
 */
export interface DescribeReturnShippingLabelRequest {
  /**
   * The automatically generated ID for a job, for example `JID123e4567-e89b-12d3-a456-426655440000`.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeReturnShippingLabelResult {
  /**
   * The status information of the task on a Snow device that is being returned to Amazon Web Services.
   *
   * @public
   */
  Status?: ShippingLabelStatus | undefined;

  /**
   * The expiration date of the current return shipping label.
   *
   * @public
   */
  ExpirationDate?: Date | undefined;

  /**
   * The pre-signed Amazon S3 URI used to download the return shipping label.
   *
   * @public
   */
  ReturnShippingLabelURI?: string | undefined;
}

/**
 * @public
 */
export interface GetJobManifestRequest {
  /**
   * The ID for a job that you want to get the manifest file for, for example `JID123e4567-e89b-12d3-a456-426655440000`.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface GetJobManifestResult {
  /**
   * The Amazon S3 presigned URL for the manifest file associated with the specified `JobId` value.
   *
   * @public
   */
  ManifestURI?: string | undefined;
}

/**
 * @public
 */
export interface GetJobUnlockCodeRequest {
  /**
   * The ID for the job that you want to get the `UnlockCode` value for, for example `JID123e4567-e89b-12d3-a456-426655440000`.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface GetJobUnlockCodeResult {
  /**
   * The `UnlockCode` value for the specified job. The `UnlockCode` value can be accessed for up to 360 days after the job has been created.
   *
   * @public
   */
  UnlockCode?: string | undefined;
}

/**
 * @public
 */
export interface GetSnowballUsageRequest {}

/**
 * @public
 */
export interface GetSnowballUsageResult {
  /**
   * The service limit for number of Snow devices this account can have at once. The default service limit is 1 (one).
   *
   * @public
   */
  SnowballLimit?: number | undefined;

  /**
   * The number of Snow devices that this account is currently using.
   *
   * @public
   */
  SnowballsInUse?: number | undefined;
}

/**
 * @public
 */
export interface GetSoftwareUpdatesRequest {
  /**
   * The ID for a job that you want to get the software update file for, for example `JID123e4567-e89b-12d3-a456-426655440000`.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface GetSoftwareUpdatesResult {
  /**
   * The Amazon S3 presigned URL for the update file associated with the specified `JobId` value. The software update will be available for 2 days after this request is made. To access an update after the 2 days have passed, you'll have to make another call to `GetSoftwareUpdates`.
   *
   * @public
   */
  UpdatesURI?: string | undefined;
}

/**
 * @public
 */
export interface ListClusterJobsRequest {
  /**
   * The 39-character ID for the cluster that you want to list, for example `CID123e4567-e89b-12d3-a456-426655440000`.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The number of `JobListEntry` objects to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * HTTP requests are stateless. To identify what object comes "next" in the list of `JobListEntry` objects, you have the option of specifying `NextToken` as the starting point for your returned list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClusterJobsResult {
  /**
   * Each `JobListEntry` object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of export jobs.
   *
   * @public
   */
  JobListEntries?: JobListEntry[] | undefined;

  /**
   * HTTP requests are stateless. If you use the automatically generated `NextToken` value in your next `ListClusterJobsResult` call, your list of returned jobs will start from this point in the array.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClustersRequest {
  /**
   * The number of `ClusterListEntry` objects to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * HTTP requests are stateless. To identify what object comes "next" in the list of `ClusterListEntry` objects, you have the option of specifying `NextToken` as the starting point for your returned list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains a cluster's state, a cluster's ID, and other important information.
 *
 * @public
 */
export interface ClusterListEntry {
  /**
   * The 39-character ID for the cluster that you want to list, for example `CID123e4567-e89b-12d3-a456-426655440000`.
   *
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * The current state of this cluster. For information about the state of a specific node, see JobListEntry$JobState.
   *
   * @public
   */
  ClusterState?: ClusterState | undefined;

  /**
   * The creation date for this cluster.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * Defines an optional description of the cluster, for example `Environmental Data Cluster-01`.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface ListClustersResult {
  /**
   * Each `ClusterListEntry` object contains a cluster's state, a cluster's ID, and other important status information.
   *
   * @public
   */
  ClusterListEntries?: ClusterListEntry[] | undefined;

  /**
   * HTTP requests are stateless. If you use the automatically generated `NextToken` value in your next `ClusterListEntry` call, your list of returned clusters will start from this point in the array.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCompatibleImagesRequest {
  /**
   * The maximum number of results for the list of compatible images. Currently, a Snowball Edge device can store 10 AMIs.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * HTTP requests are stateless. To identify what object comes "next" in the list of compatible images, you can specify a value for `NextToken` as the starting point for your list of returned images.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A JSON-formatted object that describes a compatible Amazon Machine Image (AMI), including the ID and name for a Snow device AMI. This AMI is compatible with the device's physical hardware requirements, and it should be able to be run in an SBE1 instance on the device.
 *
 * @public
 */
export interface CompatibleImage {
  /**
   * The unique identifier for an individual Snow device AMI.
   *
   * @public
   */
  AmiId?: string | undefined;

  /**
   * The optional name of a compatible image.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface ListCompatibleImagesResult {
  /**
   * A JSON-formatted object that describes a compatible AMI, including the ID and name for a Snow device AMI.
   *
   * @public
   */
  CompatibleImages?: CompatibleImage[] | undefined;

  /**
   * Because HTTP requests are stateless, this is the starting point for your next list of returned images.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobsRequest {
  /**
   * The number of `JobListEntry` objects to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * HTTP requests are stateless. To identify what object comes "next" in the list of `JobListEntry` objects, you have the option of specifying `NextToken` as the starting point for your returned list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobsResult {
  /**
   * Each `JobListEntry` object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of export jobs.
   *
   * @public
   */
  JobListEntries?: JobListEntry[] | undefined;

  /**
   * HTTP requests are stateless. If you use this automatically generated `NextToken` value in your next `ListJobs` call, your returned `JobListEntry` objects will start from this point in the array.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLongTermPricingRequest {
  /**
   * The maximum number of `ListLongTermPricing` objects to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Because HTTP requests are stateless, this is the starting point for your next list of `ListLongTermPricing` to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Each `LongTermPricingListEntry` object contains information about a long-term pricing type.
 *
 * @public
 */
export interface LongTermPricingListEntry {
  /**
   * The ID of the long-term pricing type for the device.
   *
   * @public
   */
  LongTermPricingId?: string | undefined;

  /**
   * The end date the long-term pricing contract.
   *
   * @public
   */
  LongTermPricingEndDate?: Date | undefined;

  /**
   * The start date of the long-term pricing contract.
   *
   * @public
   */
  LongTermPricingStartDate?: Date | undefined;

  /**
   * The type of long-term pricing that was selected for the device.
   *
   * @public
   */
  LongTermPricingType?: LongTermPricingType | undefined;

  /**
   * The current active jobs on the device the long-term pricing type.
   *
   * @public
   */
  CurrentActiveJob?: string | undefined;

  /**
   * A new device that replaces a device that is ordered with long-term pricing.
   *
   * @public
   */
  ReplacementJob?: string | undefined;

  /**
   * If set to `true`, specifies that the current long-term pricing type for the device should be automatically renewed before the long-term pricing contract expires.
   *
   * @public
   */
  IsLongTermPricingAutoRenew?: boolean | undefined;

  /**
   * The status of the long-term pricing type.
   *
   * @public
   */
  LongTermPricingStatus?: string | undefined;

  /**
   * The type of Snow Family devices associated with this long-term pricing job.
   *
   * @public
   */
  SnowballType?: SnowballType | undefined;

  /**
   * The IDs of the jobs that are associated with a long-term pricing type.
   *
   * @public
   */
  JobIds?: string[] | undefined;
}

/**
 * @public
 */
export interface ListLongTermPricingResult {
  /**
   * Each `LongTermPricingEntry` object contains a status, ID, and other information about the `LongTermPricing` type.
   *
   * @public
   */
  LongTermPricingEntries?: LongTermPricingListEntry[] | undefined;

  /**
   * Because HTTP requests are stateless, this is the starting point for your next list of returned `ListLongTermPricing` list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPickupLocationsRequest {
  /**
   * The maximum number of locations to list per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * HTTP requests are stateless. To identify what object comes "next" in the list of `ListPickupLocationsRequest` objects, you have the option of specifying `NextToken` as the starting point for your returned list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPickupLocationsResult {
  /**
   * Information about the address of pickup locations.
   *
   * @public
   */
  Addresses?: Address[] | undefined;

  /**
   * HTTP requests are stateless. To identify what object comes "next" in the list of `ListPickupLocationsResult` objects, you have the option of specifying `NextToken` as the starting point for your returned list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The version of the requested service.
 *
 * @public
 */
export interface ServiceVersion {
  /**
   * The version number of the requested service.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * The name and version of the service dependant on the requested service.
 *
 * @public
 */
export interface DependentService {
  /**
   * The name of the dependent service.
   *
   * @public
   */
  ServiceName?: ServiceName | undefined;

  /**
   * The version of the dependent service.
   *
   * @public
   */
  ServiceVersion?: ServiceVersion | undefined;
}

/**
 * @public
 */
export interface ListServiceVersionsRequest {
  /**
   * The name of the service for which you're requesting supported versions.
   *
   * @public
   */
  ServiceName: ServiceName | undefined;

  /**
   * A list of names and versions of dependant services of the requested service.
   *
   * @public
   */
  DependentServices?: DependentService[] | undefined;

  /**
   * The maximum number of `ListServiceVersions` objects to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Because HTTP requests are stateless, this is the starting point for the next list of returned `ListServiceVersionsRequest` versions.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceVersionsResult {
  /**
   * A list of supported versions.
   *
   * @public
   */
  ServiceVersions: ServiceVersion[] | undefined;

  /**
   * The name of the service for which the system provided supported versions.
   *
   * @public
   */
  ServiceName: ServiceName | undefined;

  /**
   * A list of names and versions of dependant services of the service for which the system provided supported versions.
   *
   * @public
   */
  DependentServices?: DependentService[] | undefined;

  /**
   * Because HTTP requests are stateless, this is the starting point of the next list of returned `ListServiceVersionsResult` results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateClusterRequest {
  /**
   * The cluster ID of the cluster that you want to update, for example `CID123e4567-e89b-12d3-a456-426655440000`.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The new role Amazon Resource Name (ARN) that you want to associate with this cluster. To create a role ARN, use the [CreateRole](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html) API action in Identity and Access Management (IAM).
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * The updated description of this cluster.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The updated arrays of JobResource objects that can include updated S3Resource objects or LambdaResource objects.
   *
   * @public
   */
  Resources?: JobResource | undefined;

  /**
   * Specifies the service or services on the Snow Family device that your transferred data will be exported from or imported into. Amazon Web Services Snow Family device clusters support Amazon S3 and NFS (Network File System).
   *
   * @public
   */
  OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration | undefined;

  /**
   * The ID of the updated Address object.
   *
   * @public
   */
  AddressId?: string | undefined;

  /**
   * The updated shipping option value of this cluster's ShippingDetails object.
   *
   * @public
   */
  ShippingOption?: ShippingOption | undefined;

  /**
   * The new or updated Notification object.
   *
   * @public
   */
  Notification?: Notification | undefined;

  /**
   * The updated ID for the forwarding address for a cluster. This field is not supported in most regions.
   *
   * @public
   */
  ForwardingAddressId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateClusterResult {}

/**
 * @public
 */
export interface UpdateJobRequest {
  /**
   * The job ID of the job that you want to update, for example `JID123e4567-e89b-12d3-a456-426655440000`.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * The new role Amazon Resource Name (ARN) that you want to associate with this job. To create a role ARN, use the [CreateRole](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html)Identity and Access Management (IAM) API action.
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * The new or updated Notification object.
   *
   * @public
   */
  Notification?: Notification | undefined;

  /**
   * The updated `JobResource` object, or the updated JobResource object.
   *
   * @public
   */
  Resources?: JobResource | undefined;

  /**
   * Specifies the service or services on the Snow Family device that your transferred data will be exported from or imported into. Amazon Web Services Snow Family supports Amazon S3 and NFS (Network File System) and the Amazon Web Services Storage Gateway service Tape Gateway type.
   *
   * @public
   */
  OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration | undefined;

  /**
   * The ID of the updated Address object.
   *
   * @public
   */
  AddressId?: string | undefined;

  /**
   * The updated shipping option value of this job's ShippingDetails object.
   *
   * @public
   */
  ShippingOption?: ShippingOption | undefined;

  /**
   * The updated description of this job's JobMetadata object.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The updated `SnowballCapacityPreference` of this job's JobMetadata object. The 50 TB Snowballs are only available in the US regions.
   *
   * For more information, see "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the *Snowcone User Guide* or "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the *Snowcone User Guide*.
   *
   * @public
   */
  SnowballCapacityPreference?: SnowballCapacity | undefined;

  /**
   * The updated ID for the forwarding address for a job. This field is not supported in most regions.
   *
   * @public
   */
  ForwardingAddressId?: string | undefined;

  /**
   * Information identifying the person picking up the device.
   *
   * @public
   */
  PickupDetails?: PickupDetails | undefined;
}

/**
 * @public
 */
export interface UpdateJobResult {}

/**
 * @public
 */
export interface UpdateJobShipmentStateRequest {
  /**
   * The job ID of the job whose shipment date you want to update, for example `JID123e4567-e89b-12d3-a456-426655440000`.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * The state of a device when it is being shipped.
   *
   * Set to `RECEIVED` when the device arrives at your location.
   *
   * Set to `RETURNED` when you have returned the device to Amazon Web Services.
   *
   * @public
   */
  ShipmentState: ShipmentState | undefined;
}

/**
 * @public
 */
export interface UpdateJobShipmentStateResult {}

/**
 * @public
 */
export interface UpdateLongTermPricingRequest {
  /**
   * The ID of the long-term pricing type for the device.
   *
   * @public
   */
  LongTermPricingId: string | undefined;

  /**
   * Specifies that a device that is ordered with long-term pricing should be replaced with a new device.
   *
   * @public
   */
  ReplacementJob?: string | undefined;

  /**
   * If set to `true`, specifies that the current long-term pricing type for the device should be automatically renewed before the long-term pricing contract expires.
   *
   * @public
   */
  IsLongTermPricingAutoRenew?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateLongTermPricingResult {}
