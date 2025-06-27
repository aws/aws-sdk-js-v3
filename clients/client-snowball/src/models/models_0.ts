// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { SnowballServiceException as __BaseException } from "./SnowballServiceException";

/**
 * @public
 * @enum
 */
export const AddressType = {
  AWS_SHIP: "AWS_SHIP",
  CUST_PICKUP: "CUST_PICKUP",
} as const;

/**
 * @public
 */
export type AddressType = (typeof AddressType)[keyof typeof AddressType];

/**
 * <p>The address that you want the Snow device(s) associated with a specific job to be
 *       shipped to. Addresses are validated at the time of creation. The address you provide must be
 *       located within the serviceable area of your region. Although no individual elements of the
 *         <code>Address</code> are required, if the address is invalid or unsupported, then an
 *       exception is thrown.</p>
 * @public
 */
export interface Address {
  /**
   * <p>The unique ID for an address.</p>
   * @public
   */
  AddressId?: string | undefined;

  /**
   * <p>The name of a person to receive a Snow device at an address.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The name of the company to receive a Snow device at an address.</p>
   * @public
   */
  Company?: string | undefined;

  /**
   * <p>The first line in a street address that a Snow device is to be delivered
   *       to.</p>
   * @public
   */
  Street1?: string | undefined;

  /**
   * <p>The second line in a street address that a Snow device is to be delivered
   *       to.</p>
   * @public
   */
  Street2?: string | undefined;

  /**
   * <p>The third line in a street address that a Snow device is to be delivered
   *       to.</p>
   * @public
   */
  Street3?: string | undefined;

  /**
   * <p>The city in an address that a Snow device is to be delivered to.</p>
   * @public
   */
  City?: string | undefined;

  /**
   * <p>The state or province in an address that a Snow device is to be delivered to.</p>
   * @public
   */
  StateOrProvince?: string | undefined;

  /**
   * <p>This field is no longer used and the value is ignored.</p>
   * @public
   */
  PrefectureOrDistrict?: string | undefined;

  /**
   * <p>This field is no longer used and the value is ignored.</p>
   * @public
   */
  Landmark?: string | undefined;

  /**
   * <p>The country in an address that a Snow device is to be delivered to.</p>
   * @public
   */
  Country?: string | undefined;

  /**
   * <p>The postal code in an address that a Snow device is to be delivered to.</p>
   * @public
   */
  PostalCode?: string | undefined;

  /**
   * <p>The phone number associated with an address that a Snow device is to be delivered
   *       to.</p>
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * <p>If the address you are creating is a primary address, then set this option to
   *       true. This field is not supported in most regions.</p>
   * @public
   */
  IsRestricted?: boolean | undefined;

  /**
   * <p>Differentiates between delivery address and pickup address in the customer account. Provided at job creation.</p>
   * @public
   */
  Type?: AddressType | undefined;
}

/**
 * @public
 */
export interface CancelClusterRequest {
  /**
   * <p>The 39-character ID for the cluster that you want to cancel, for example
   *         <code>CID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   * @public
   */
  ClusterId: string | undefined;
}

/**
 * @public
 */
export interface CancelClusterResult {}

/**
 * <p>The action can't be performed because the job's current state doesn't allow that action
 *       to be performed.</p>
 * @public
 */
export class InvalidJobStateException extends __BaseException {
  readonly name: "InvalidJobStateException" = "InvalidJobStateException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidJobStateException, __BaseException>) {
    super({
      name: "InvalidJobStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidJobStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 * @public
 */
export class InvalidResourceException extends __BaseException {
  readonly name: "InvalidResourceException" = "InvalidResourceException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The provided resource value is invalid.</p>
   * @public
   */
  ResourceType?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceException, __BaseException>) {
    super({
      name: "InvalidResourceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>The provided Key Management Service key lacks the permissions to perform the specified
 *         <a>CreateJob</a> or <a>UpdateJob</a> action.</p>
 * @public
 */
export class KMSRequestFailedException extends __BaseException {
  readonly name: "KMSRequestFailedException" = "KMSRequestFailedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSRequestFailedException, __BaseException>) {
    super({
      name: "KMSRequestFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSRequestFailedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CancelJobRequest {
  /**
   * <p>The 39-character job ID for the job that you want to cancel, for example
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
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
   * <p>The address that you want the Snow device shipped to.</p>
   * @public
   */
  Address: Address | undefined;
}

/**
 * @public
 */
export interface CreateAddressResult {
  /**
   * <p>The automatically generated ID for a specific address. You'll use this ID when you
   *       create a job to specify which address you want the Snow device for that job shipped
   *       to.</p>
   * @public
   */
  AddressId?: string | undefined;
}

/**
 * <p>The address provided was invalid. Check the address with your region's carrier, and try
 *       again.</p>
 * @public
 */
export class InvalidAddressException extends __BaseException {
  readonly name: "InvalidAddressException" = "InvalidAddressException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAddressException, __BaseException>) {
    super({
      name: "InvalidAddressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAddressException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The address is either outside the serviceable area for your region, or an error
 *       occurred. Check the address with your region's carrier and try again. If the issue persists,
 *       contact Amazon Web Services Support.</p>
 * @public
 */
export class UnsupportedAddressException extends __BaseException {
  readonly name: "UnsupportedAddressException" = "UnsupportedAddressException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedAddressException, __BaseException>) {
    super({
      name: "UnsupportedAddressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedAddressException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const JobType = {
  EXPORT: "EXPORT",
  IMPORT: "IMPORT",
  LOCAL_USE: "LOCAL_USE",
} as const;

/**
 * @public
 */
export type JobType = (typeof JobType)[keyof typeof JobType];

/**
 * @public
 * @enum
 */
export const JobState = {
  CANCELLED: "Cancelled",
  COMPLETE: "Complete",
  IN_PROGRESS: "InProgress",
  IN_TRANSIT_TO_AWS: "InTransitToAWS",
  IN_TRANSIT_TO_CUSTOMER: "InTransitToCustomer",
  LISTING: "Listing",
  NEW: "New",
  PENDING: "Pending",
  PREPARING_APPLIANCE: "PreparingAppliance",
  PREPARING_SHIPMENT: "PreparingShipment",
  WITH_AWS: "WithAWS",
  WITH_AWS_SORTING_FACILITY: "WithAWSSortingFacility",
  WITH_CUSTOMER: "WithCustomer",
} as const;

/**
 * @public
 */
export type JobState = (typeof JobState)[keyof typeof JobState];

/**
 * <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated
 *       with a specific job. The <code>Notification</code> object is returned as a part of the
 *       response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data
 *       type.</p>
 *          <p>When the notification settings are defined during job creation, you can choose to
 *       notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of
 *       strings, or you can specify that you want to have Amazon SNS notifications sent out for all
 *       job states with <code>NotifyAll</code> set to true.</p>
 * @public
 */
export interface Notification {
  /**
   * <p>The new SNS <code>TopicArn</code> that you want to associate with this job. You can
   *       create Amazon Resource Names (ARNs) for topics by using the <a href="https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html">CreateTopic</a> Amazon SNS API
   *       action.</p>
   *          <p>You can subscribe email addresses to an Amazon SNS topic through the Amazon Web Services Management Console, or by using the <a href="https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html">Subscribe</a> Amazon Simple Notification
   *       Service (Amazon SNS) API action.</p>
   * @public
   */
  SnsTopicARN?: string | undefined;

  /**
   * <p>The list of job states that will trigger a notification for this job.</p>
   * @public
   */
  JobStatesToNotify?: JobState[] | undefined;

  /**
   * <p>Any change in job state will trigger a notification for this job.</p>
   * @public
   */
  NotifyAll?: boolean | undefined;

  /**
   * <p>Used to send SNS notifications for the person picking up the device (identified during job creation).</p>
   * @public
   */
  DevicePickupSnsTopicARN?: string | undefined;
}

/**
 * <p>An object representing the metadata and configuration settings of EKS Anywhere on the Snow Family device.</p>
 * @public
 */
export interface EKSOnDeviceServiceConfiguration {
  /**
   * <p>The Kubernetes version for EKS Anywhere on the Snow Family device.</p>
   * @public
   */
  KubernetesVersion?: string | undefined;

  /**
   * <p>The optional version of EKS Anywhere on the Snow Family device.</p>
   * @public
   */
  EKSAnywhereVersion?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StorageUnit = {
  TB: "TB",
} as const;

/**
 * @public
 */
export type StorageUnit = (typeof StorageUnit)[keyof typeof StorageUnit];

/**
 * <p>An object that represents the metadata and configuration settings for the NFS (Network
 *       File System) service on an Amazon Web Services Snow Family device.</p>
 * @public
 */
export interface NFSOnDeviceServiceConfiguration {
  /**
   * <p>The maximum NFS storage for one Snow Family device.</p>
   * @public
   */
  StorageLimit?: number | undefined;

  /**
   * <p>The scale unit of the NFS storage on the device.</p>
   *          <p>Valid values: TB.</p>
   * @public
   */
  StorageUnit?: StorageUnit | undefined;
}

/**
 * <p>Amazon S3 compatible storage on Snow family devices configuration items.</p>
 * @public
 */
export interface S3OnDeviceServiceConfiguration {
  /**
   * <p>If the specified storage limit value matches storage limit of one of the defined configurations, that configuration will be used.
   *       If the specified storage limit value does not match any defined configuration, the request will fail. If more than one configuration has
   *       the same storage limit as specified, the other input need to be provided.</p>
   * @public
   */
  StorageLimit?: number | undefined;

  /**
   * <p>Storage unit. Currently the only supported unit is TB.</p>
   * @public
   */
  StorageUnit?: StorageUnit | undefined;

  /**
   * <p>Applicable when creating a cluster. Specifies how many nodes are needed for Amazon S3 compatible storage on Snow family devices. If specified, the other input can be omitted.</p>
   * @public
   */
  ServiceSize?: number | undefined;

  /**
   * <p>>Fault tolerance level of the cluster. This indicates the number of nodes that can go down without degrading the performance of the cluster. This additional input helps when the specified <code>StorageLimit</code> matches more than one Amazon S3 compatible storage on Snow family devices service configuration.</p>
   * @public
   */
  FaultTolerance?: number | undefined;
}

/**
 * <p>An object that represents the metadata and configuration settings for the Storage Gateway
 *       service Tape Gateway type on an Amazon Web Services Snow Family device.</p>
 * @public
 */
export interface TGWOnDeviceServiceConfiguration {
  /**
   * <p>The maximum number of virtual tapes to store on one Snow Family device. Due to physical
   *       resource limitations, this value must be set to 80 for Snowball Edge.</p>
   * @public
   */
  StorageLimit?: number | undefined;

  /**
   * <p>The scale unit of the virtual tapes on the device.</p>
   * @public
   */
  StorageUnit?: StorageUnit | undefined;
}

/**
 * <p>An object that represents the metadata and configuration settings for services on an Amazon Web Services
 *       Snow Family device.</p>
 * @public
 */
export interface OnDeviceServiceConfiguration {
  /**
   * <p>Represents the NFS (Network File System) service on a Snow Family device.</p>
   * @public
   */
  NFSOnDeviceService?: NFSOnDeviceServiceConfiguration | undefined;

  /**
   * <p>Represents the Storage Gateway service Tape Gateway type on a Snow Family device.</p>
   * @public
   */
  TGWOnDeviceService?: TGWOnDeviceServiceConfiguration | undefined;

  /**
   * <p>The configuration of EKS Anywhere on the Snow Family device.</p>
   * @public
   */
  EKSOnDeviceService?: EKSOnDeviceServiceConfiguration | undefined;

  /**
   * <p>Configuration for Amazon S3 compatible storage on Snow family devices.</p>
   * @public
   */
  S3OnDeviceService?: S3OnDeviceServiceConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const RemoteManagement = {
  INSTALLED_AUTOSTART: "INSTALLED_AUTOSTART",
  INSTALLED_ONLY: "INSTALLED_ONLY",
  NOT_INSTALLED: "NOT_INSTALLED",
} as const;

/**
 * @public
 */
export type RemoteManagement = (typeof RemoteManagement)[keyof typeof RemoteManagement];

/**
 * <p>A JSON-formatted object that contains the IDs for an Amazon Machine Image (AMI),
 *       including the Amazon EC2-compatible AMI ID and the Snow device AMI ID. Each AMI has these two IDs to
 *       simplify identifying the AMI in both the Amazon Web Services Cloud and on the device.</p>
 * @public
 */
export interface Ec2AmiResource {
  /**
   * <p>The ID of the AMI in Amazon EC2.</p>
   * @public
   */
  AmiId: string | undefined;

  /**
   * <p>The ID of the AMI on the Snow device.</p>
   * @public
   */
  SnowballAmiId?: string | undefined;
}

/**
 * <p>The container for the <a>EventTriggerDefinition$EventResourceARN</a>.</p>
 * @public
 */
export interface EventTriggerDefinition {
  /**
   * <p>The Amazon Resource Name (ARN) for any local Amazon S3 resource that is an Lambda function's event trigger associated with this job.</p>
   * @public
   */
  EventResourceARN?: string | undefined;
}

/**
 * <p>Identifies </p>
 * @public
 */
export interface LambdaResource {
  /**
   * <p>An Amazon Resource Name (ARN) that represents an Lambda function to be
   *       triggered by PUT object actions on the associated local Amazon S3 resource.</p>
   * @public
   */
  LambdaArn?: string | undefined;

  /**
   * <p>The array of ARNs for <a>S3Resource</a> objects to trigger the <a>LambdaResource</a> objects associated with this job.</p>
   * @public
   */
  EventTriggers?: EventTriggerDefinition[] | undefined;
}

/**
 * <p>Contains a key range. For export jobs, a <code>S3Resource</code> object can have an
 *       optional <code>KeyRange</code> value. The length of the range is defined at job creation, and
 *       has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or
 *       both. Ranges are UTF-8 binary sorted.</p>
 * @public
 */
export interface KeyRange {
  /**
   * <p>The key that starts an optional key range for an export job. Ranges are inclusive and
   *       UTF-8 binary sorted.</p>
   * @public
   */
  BeginMarker?: string | undefined;

  /**
   * <p>The key that ends an optional key range for an export job. Ranges are inclusive and
   *       UTF-8 binary sorted.</p>
   * @public
   */
  EndMarker?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DeviceServiceName = {
  NFS_ON_DEVICE_SERVICE: "NFS_ON_DEVICE_SERVICE",
  S3_ON_DEVICE_SERVICE: "S3_ON_DEVICE_SERVICE",
} as const;

/**
 * @public
 */
export type DeviceServiceName = (typeof DeviceServiceName)[keyof typeof DeviceServiceName];

/**
 * @public
 * @enum
 */
export const TransferOption = {
  EXPORT: "EXPORT",
  IMPORT: "IMPORT",
  LOCAL_USE: "LOCAL_USE",
} as const;

/**
 * @public
 */
export type TransferOption = (typeof TransferOption)[keyof typeof TransferOption];

/**
 * <p>An object that represents the service or services on the Snow Family device that your
 *       transferred data will be exported from or imported into. Amazon Web Services Snow Family supports Amazon S3 and
 *       NFS (Network File System).</p>
 * @public
 */
export interface TargetOnDeviceService {
  /**
   * <p>Specifies the name of the service on the Snow Family device that your transferred data
   *       will be exported from or imported into.</p>
   * @public
   */
  ServiceName?: DeviceServiceName | undefined;

  /**
   * <p>Specifies whether the data is being imported or exported. You can import or export the
   *       data, or use it locally on the device.</p>
   * @public
   */
  TransferOption?: TransferOption | undefined;
}

/**
 * <p>Each <code>S3Resource</code> object represents an Amazon S3 bucket that your
 *       transferred data will be exported from or imported into. For export jobs, this object can have
 *       an optional <code>KeyRange</code> value. The length of the range is defined at job creation,
 *       and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or
 *       both. Ranges are UTF-8 binary sorted.</p>
 * @public
 */
export interface S3Resource {
  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon S3 bucket.</p>
   * @public
   */
  BucketArn?: string | undefined;

  /**
   * <p>For export jobs, you can provide an optional <code>KeyRange</code> within a specific
   *       Amazon S3 bucket. The length of the range is defined at job creation, and has either an
   *       inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are
   *       UTF-8 binary sorted.</p>
   * @public
   */
  KeyRange?: KeyRange | undefined;

  /**
   * <p>Specifies the service or services on the Snow Family device that your transferred data
   *       will be exported from or imported into. Amazon Web Services Snow Family supports Amazon S3 and NFS (Network File
   *       System).</p>
   * @public
   */
  TargetOnDeviceServices?: TargetOnDeviceService[] | undefined;
}

/**
 * <p>Contains an array of Amazon Web Services resource objects. Each object represents an
 *       Amazon S3 bucket, an Lambda function, or an Amazon Machine Image (AMI) based
 *       on Amazon EC2 that is associated with a particular job.</p>
 * @public
 */
export interface JobResource {
  /**
   * <p>An array of <code>S3Resource</code> objects.</p>
   * @public
   */
  S3Resources?: S3Resource[] | undefined;

  /**
   * <p>The Python-language Lambda functions for this job.</p>
   * @public
   */
  LambdaResources?: LambdaResource[] | undefined;

  /**
   * <p>The Amazon Machine Images (AMIs) associated with this job.</p>
   * @public
   */
  Ec2AmiResources?: Ec2AmiResource[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ShippingOption = {
  EXPRESS: "EXPRESS",
  NEXT_DAY: "NEXT_DAY",
  SECOND_DAY: "SECOND_DAY",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type ShippingOption = (typeof ShippingOption)[keyof typeof ShippingOption];

/**
 * @public
 * @enum
 */
export const SnowballCapacity = {
  NO_PREFERENCE: "NoPreference",
  T100: "T100",
  T13: "T13",
  T14: "T14",
  T240: "T240",
  T32: "T32",
  T42: "T42",
  T50: "T50",
  T8: "T8",
  T80: "T80",
  T98: "T98",
} as const;

/**
 * @public
 */
export type SnowballCapacity = (typeof SnowballCapacity)[keyof typeof SnowballCapacity];

/**
 * @public
 * @enum
 */
export const SnowballType = {
  EDGE: "EDGE",
  EDGE_C: "EDGE_C",
  EDGE_CG: "EDGE_CG",
  EDGE_S: "EDGE_S",
  RACK_5U_C: "RACK_5U_C",
  SNC1_HDD: "SNC1_HDD",
  SNC1_SSD: "SNC1_SSD",
  STANDARD: "STANDARD",
  V3_5C: "V3_5C",
  V3_5S: "V3_5S",
} as const;

/**
 * @public
 */
export type SnowballType = (typeof SnowballType)[keyof typeof SnowballType];

/**
 * <p>The tax documents required in Amazon Web Services Region in India.</p>
 * @public
 */
export interface INDTaxDocuments {
  /**
   * <p>The Goods and Services Tax (GST) documents required in Amazon Web Services Region in
   *       India.</p>
   * @public
   */
  GSTIN?: string | undefined;
}

/**
 * <p>The tax documents required in your Amazon Web Services Region.</p>
 * @public
 */
export interface TaxDocuments {
  /**
   * <p>The tax documents required in Amazon Web Services Region in India.</p>
   * @public
   */
  IND?: INDTaxDocuments | undefined;
}

/**
 * @public
 */
export interface CreateClusterRequest {
  /**
   * <p>The type of job for this cluster. Currently, the only job type supported for clusters
   *       is <code>LOCAL_USE</code>.</p>
   *          <p>For more information, see
   *       "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow
   *       Family Devices and Capacity) in the <i>Snowcone User Guide</i> or
   *       "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow
   *       Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>
   * @public
   */
  JobType: JobType | undefined;

  /**
   * <p>The resources associated with the cluster job. These resources include Amazon S3
   *       buckets and optional Lambda functions written in the Python language.
   *     </p>
   * @public
   */
  Resources?: JobResource | undefined;

  /**
   * <p>Specifies the service or services on the Snow Family device that your transferred data
   *       will be exported from or imported into. Amazon Web Services Snow Family device clusters support Amazon S3 and NFS
   *       (Network File System).</p>
   * @public
   */
  OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration | undefined;

  /**
   * <p>An optional description of this specific cluster, for example <code>Environmental Data
   *         Cluster-01</code>.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID for the address that you want the cluster shipped to.</p>
   * @public
   */
  AddressId: string | undefined;

  /**
   * <p>The <code>KmsKeyARN</code> value that you want to associate with this cluster.
   *         <code>KmsKeyARN</code> values are created by using the <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html">CreateKey</a> API action in Key Management Service (KMS). </p>
   * @public
   */
  KmsKeyARN?: string | undefined;

  /**
   * <p>The <code>RoleARN</code> that you want to associate with this cluster.
   *         <code>RoleArn</code> values are created by using the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a> API action in Identity and Access Management (IAM).</p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>The type of Snow Family devices to use for this cluster. </p>
   *          <note>
   *             <p>For cluster jobs, Amazon Web Services Snow Family currently supports only the
   *           <code>EDGE</code> device type.</p>
   *          </note>
   *          <p>For more information, see
   *       "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow
   *       Family Devices and Capacity) in the <i>Snowcone User Guide</i> or
   *       "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow
   *       Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>
   * @public
   */
  SnowballType: SnowballType | undefined;

  /**
   * <p>The shipping speed for each node in this cluster. This speed doesn't dictate how soon
   *       you'll get each Snowball Edge device, rather it represents how quickly each device moves to
   *       its destination while in transit. Regional shipping speeds are as follows: </p>
   *          <ul>
   *             <li>
   *                <p>In Australia, you have access to express shipping. Typically, Snow devices shipped
   *           express are delivered in about a day.</p>
   *             </li>
   *             <li>
   *                <p>In the European Union (EU), you have access to express shipping. Typically, Snow
   *           devices shipped express are delivered in about a day. In addition, most countries in the
   *           EU have access to standard shipping, which typically takes less than a week, one
   *           way.</p>
   *             </li>
   *             <li>
   *                <p>In India, Snow devices are delivered in one to seven days.</p>
   *             </li>
   *             <li>
   *                <p>In the United States of America (US), you have access to one-day shipping and
   *           two-day shipping.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>In Australia, you have access to express shipping. Typically, devices shipped
   *           express are delivered in about a day.</p>
   *             </li>
   *             <li>
   *                <p>In the European Union (EU), you have access to express shipping. Typically, Snow
   *           devices shipped express are delivered in about a day. In addition, most countries in the
   *           EU have access to standard shipping, which typically takes less than a week, one
   *           way.</p>
   *             </li>
   *             <li>
   *                <p>In India, Snow devices are delivered in one to seven days.</p>
   *             </li>
   *             <li>
   *                <p>In the US, you have access to one-day shipping and two-day shipping.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ShippingOption: ShippingOption | undefined;

  /**
   * <p>The Amazon Simple Notification Service (Amazon SNS) notification settings for this
   *       cluster.</p>
   * @public
   */
  Notification?: Notification | undefined;

  /**
   * <p>The forwarding address ID for a cluster. This field is not supported in most
   *       regions.</p>
   * @public
   */
  ForwardingAddressId?: string | undefined;

  /**
   * <p>The tax documents required in your Amazon Web Services Region.</p>
   * @public
   */
  TaxDocuments?: TaxDocuments | undefined;

  /**
   * <p>Allows you to securely operate and manage Snow devices in a cluster remotely from outside
   *       of your internal network. When set to <code>INSTALLED_AUTOSTART</code>, remote management will
   *       automatically be available when the device arrives at your location. Otherwise, you need to
   *       use the Snowball Client to manage the device.</p>
   * @public
   */
  RemoteManagement?: RemoteManagement | undefined;

  /**
   * <p>If provided, each job will be automatically created and associated with the new cluster. If not provided, will be treated as 0.</p>
   * @public
   */
  InitialClusterSize?: number | undefined;

  /**
   * <p>Force to create cluster when user attempts to overprovision or underprovision a cluster. A cluster is overprovisioned or underprovisioned if the initial size of the cluster is more (overprovisioned) or less (underprovisioned) than what
   *       needed to meet capacity requirement specified with <code>OnDeviceServiceConfiguration</code>.</p>
   * @public
   */
  ForceCreateJobs?: boolean | undefined;

  /**
   * <p>Lists long-term pricing id that will be used to associate with jobs automatically created for the new cluster.</p>
   * @public
   */
  LongTermPricingIds?: string[] | undefined;

  /**
   * <p>If your job is being created in one of the US regions, you have the option of
   *       specifying what size Snow device you'd like for this job. In all other regions, Snowballs come
   *       with 80 TB in storage capacity.</p>
   *          <p>For more information, see
   *       "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow
   *       Family Devices and Capacity) in the <i>Snowcone User Guide</i> or
   *       "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow
   *       Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>
   * @public
   */
  SnowballCapacityPreference?: SnowballCapacity | undefined;
}

/**
 * <p>Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value
 *       that indicates whether the job is a job part, in the case of an export job.</p>
 * @public
 */
export interface JobListEntry {
  /**
   * <p>The automatically generated ID for a job, for example
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The current state of this job.</p>
   * @public
   */
  JobState?: JobState | undefined;

  /**
   * <p>A value that indicates that this job is a main job. A main job represents a successful
   *       request to create an export job. Main jobs aren't associated with any Snowballs. Instead, each
   *       main job will have at least one job part, and each job part is associated with a Snowball. It
   *       might take some time before the job parts associated with a particular main job are listed,
   *       because they are created after the main job is created.</p>
   * @public
   */
  IsMaster?: boolean | undefined;

  /**
   * <p>The type of job.</p>
   * @public
   */
  JobType?: JobType | undefined;

  /**
   * <p>The type of device used with this job.</p>
   * @public
   */
  SnowballType?: SnowballType | undefined;

  /**
   * <p>The creation date for this job.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The optional description of this specific job, for example <code>Important Photos
   *         2016-08-11</code>.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface CreateClusterResult {
  /**
   * <p>The automatically generated ID for a cluster.</p>
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * <p>List of jobs created for this cluster. For syntax, see <a href="http://amazonaws.com/snowball/latest/api-reference/API_ListJobs.html#API_ListJobs_ResponseSyntax">ListJobsResult$JobListEntries</a> in this guide.</p>
   * @public
   */
  JobListEntries?: JobListEntry[] | undefined;
}

/**
 * <p>Your user lacks the necessary Amazon EC2 permissions to perform the attempted
 *       action.</p>
 * @public
 */
export class Ec2RequestFailedException extends __BaseException {
  readonly name: "Ec2RequestFailedException" = "Ec2RequestFailedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<Ec2RequestFailedException, __BaseException>) {
    super({
      name: "Ec2RequestFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, Ec2RequestFailedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Job or cluster creation failed. One or more inputs were invalid. Confirm that the <a>CreateClusterRequest$SnowballType</a> value supports your <a>CreateJobRequest$JobType</a>, and try again.</p>
 * @public
 */
export class InvalidInputCombinationException extends __BaseException {
  readonly name: "InvalidInputCombinationException" = "InvalidInputCombinationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInputCombinationException, __BaseException>) {
    super({
      name: "InvalidInputCombinationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInputCombinationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Job creation failed. Currently, clusters support five nodes. If you have fewer than
 *       five nodes for your cluster and you have more nodes to create for this cluster, try again and
 *       create jobs until your cluster has exactly five nodes.</p>
 * @public
 */
export class ClusterLimitExceededException extends __BaseException {
  readonly name: "ClusterLimitExceededException" = "ClusterLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterLimitExceededException, __BaseException>) {
    super({
      name: "ClusterLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Configures the wireless connection on an Snowcone device.</p>
 * @public
 */
export interface WirelessConnection {
  /**
   * <p>Enables the Wi-Fi adapter on an Snowcone device.</p>
   * @public
   */
  IsWifiEnabled?: boolean | undefined;
}

/**
 * <p>Specifies the device configuration for an Snowcone job.</p>
 * @public
 */
export interface SnowconeDeviceConfiguration {
  /**
   * <p>Configures the wireless connection for the Snowcone device.</p>
   * @public
   */
  WirelessConnection?: WirelessConnection | undefined;
}

/**
 * <p>The container for <code>SnowconeDeviceConfiguration</code>. </p>
 * @public
 */
export interface DeviceConfiguration {
  /**
   * <p>Returns information about the device configuration for an Snowcone
   *       job.</p>
   * @public
   */
  SnowconeDeviceConfiguration?: SnowconeDeviceConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const ImpactLevel = {
  IL2: "IL2",
  IL4: "IL4",
  IL5: "IL5",
  IL6: "IL6",
  IL99: "IL99",
} as const;

/**
 * @public
 */
export type ImpactLevel = (typeof ImpactLevel)[keyof typeof ImpactLevel];

/**
 * <p>Information identifying the person picking up the device.</p>
 * @public
 */
export interface PickupDetails {
  /**
   * <p>The name of the person picking up the device.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The phone number of the person picking up the device.</p>
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * <p>The email address of the person picking up the device.</p>
   * @public
   */
  Email?: string | undefined;

  /**
   * <p>The number on the credential identifying the person picking up the device.</p>
   * @public
   */
  IdentificationNumber?: string | undefined;

  /**
   * <p>Expiration date of the credential identifying the person picking up the device.</p>
   * @public
   */
  IdentificationExpirationDate?: Date | undefined;

  /**
   * <p>Organization that issued the credential identifying the person picking up the device.</p>
   * @public
   */
  IdentificationIssuingOrg?: string | undefined;

  /**
   * <p>The unique ID for a device that will be picked up.</p>
   * @public
   */
  DevicePickupId?: string | undefined;
}

/**
 * @public
 */
export interface CreateJobRequest {
  /**
   * <p>Defines the type of job that you're creating.
   *       </p>
   * @public
   */
  JobType?: JobType | undefined;

  /**
   * <p>Defines the Amazon S3 buckets associated with this job.</p>
   *          <p>With <code>IMPORT</code> jobs, you specify the bucket or buckets that your transferred
   *       data will be imported into.</p>
   *          <p>With <code>EXPORT</code> jobs, you specify the bucket or buckets that your transferred
   *       data will be exported from. Optionally, you can also specify a <code>KeyRange</code> value. If
   *       you choose to export a range, you define the length of the range by providing either an
   *       inclusive <code>BeginMarker</code> value, an inclusive <code>EndMarker</code> value, or both.
   *       Ranges are UTF-8 binary sorted.</p>
   * @public
   */
  Resources?: JobResource | undefined;

  /**
   * <p>Specifies the service or services on the Snow Family device that your transferred data
   *       will be exported from or imported into. Amazon Web Services Snow Family supports Amazon S3 and NFS (Network File
   *       System) and the Amazon Web Services Storage Gateway service Tape Gateway type.</p>
   * @public
   */
  OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration | undefined;

  /**
   * <p>Defines an optional description of this specific job, for example <code>Important
   *         Photos 2016-08-11</code>.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID for the address that you want the Snow device shipped to.</p>
   * @public
   */
  AddressId?: string | undefined;

  /**
   * <p>The <code>KmsKeyARN</code> that you want to associate with this job.
   *         <code>KmsKeyARN</code>s are created using the <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html">CreateKey</a>
   *       Key Management Service (KMS) API action.</p>
   * @public
   */
  KmsKeyARN?: string | undefined;

  /**
   * <p>The <code>RoleARN</code> that you want to associate with this job.
   *       <code>RoleArn</code>s are created using the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a>
   *       Identity and Access Management (IAM) API action.</p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>If your job is being created in one of the US regions, you have the option of
   *       specifying what size Snow device you'd like for this job. In all other regions, Snowballs come
   *       with 80 TB in storage capacity.</p>
   *          <p>For more information, see
   *       "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow
   *       Family Devices and Capacity) in the <i>Snowcone User Guide</i> or
   *       "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow
   *       Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>
   * @public
   */
  SnowballCapacityPreference?: SnowballCapacity | undefined;

  /**
   * <p>The shipping speed for this job. This speed doesn't dictate how soon you'll get the
   *       Snow device, rather it represents how quickly the Snow device moves to its destination while
   *       in transit. Regional shipping speeds are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>In Australia, you have access to express shipping. Typically, Snow devices shipped
   *           express are delivered in about a day.</p>
   *             </li>
   *             <li>
   *                <p>In the European Union (EU), you have access to express shipping. Typically, Snow
   *           devices shipped express are delivered in about a day. In addition, most countries in the
   *           EU have access to standard shipping, which typically takes less than a week, one
   *           way.</p>
   *             </li>
   *             <li>
   *                <p>In India, Snow devices are delivered in one to seven days.</p>
   *             </li>
   *             <li>
   *                <p>In the US, you have access to one-day shipping and two-day shipping.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ShippingOption?: ShippingOption | undefined;

  /**
   * <p>Defines the Amazon Simple Notification Service (Amazon SNS) notification settings for
   *       this job.</p>
   * @public
   */
  Notification?: Notification | undefined;

  /**
   * <p>The ID of a cluster. If you're creating a job for a node in a cluster, you need to
   *       provide only this <code>clusterId</code> value. The other job attributes are inherited from
   *       the cluster.</p>
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * <p>The type of Snow Family devices to use for this job.
   *       </p>
   *          <note>
   *             <p>For cluster jobs, Amazon Web Services Snow Family currently supports only the
   *           <code>EDGE</code> device type.</p>
   *          </note>
   *          <p>The type of Amazon Web Services Snow device to use for this job. Currently, the only
   *       supported device type for cluster jobs is <code>EDGE</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/snowball/latest/developer-guide/device-differences.html">Snowball Edge Device
   *         Options</a> in the Snowball Edge Developer Guide.</p>
   *          <p>For more information, see
   *       "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow
   *       Family Devices and Capacity) in the <i>Snowcone User Guide</i> or
   *       "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow
   *       Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>
   * @public
   */
  SnowballType?: SnowballType | undefined;

  /**
   * <p>The forwarding address ID for a job. This field is not supported in most
   *       Regions.</p>
   * @public
   */
  ForwardingAddressId?: string | undefined;

  /**
   * <p>The tax documents required in your Amazon Web Services Region.</p>
   * @public
   */
  TaxDocuments?: TaxDocuments | undefined;

  /**
   * <p>Defines the device configuration for an Snowcone job.</p>
   *          <p>For more information, see
   *       "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow
   *       Family Devices and Capacity) in the <i>Snowcone User Guide</i> or
   *       "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow
   *       Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>
   * @public
   */
  DeviceConfiguration?: DeviceConfiguration | undefined;

  /**
   * <p>Allows you to securely operate and manage Snowcone devices remotely from outside of your
   *       internal network. When set to <code>INSTALLED_AUTOSTART</code>, remote management will
   *       automatically be available when the device arrives at your location. Otherwise, you need to
   *       use the Snowball Edge client to manage the device. When set to <code>NOT_INSTALLED</code>, remote management will not be available on the device. </p>
   * @public
   */
  RemoteManagement?: RemoteManagement | undefined;

  /**
   * <p>The ID of the long-term pricing type for the device.</p>
   * @public
   */
  LongTermPricingId?: string | undefined;

  /**
   * <p>The highest impact level of data that will be stored or processed on the device, provided at job creation.</p>
   * @public
   */
  ImpactLevel?: ImpactLevel | undefined;

  /**
   * <p>Information identifying the person picking up the device.</p>
   * @public
   */
  PickupDetails?: PickupDetails | undefined;
}

/**
 * @public
 */
export interface CreateJobResult {
  /**
   * <p>The automatically generated ID for a job, for example
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LongTermPricingType = {
  ONE_MONTH: "OneMonth",
  ONE_YEAR: "OneYear",
  THREE_YEAR: "ThreeYear",
} as const;

/**
 * @public
 */
export type LongTermPricingType = (typeof LongTermPricingType)[keyof typeof LongTermPricingType];

/**
 * @public
 */
export interface CreateLongTermPricingRequest {
  /**
   * <p>The type of long-term pricing option you want for the device, either 1-year or 3-year
   *       long-term pricing.</p>
   * @public
   */
  LongTermPricingType: LongTermPricingType | undefined;

  /**
   * <p>Specifies whether the current long-term pricing type for the device should be
   *       renewed.</p>
   * @public
   */
  IsLongTermPricingAutoRenew?: boolean | undefined;

  /**
   * <p>The type of Snow Family devices to use for the long-term pricing job.</p>
   * @public
   */
  SnowballType: SnowballType | undefined;
}

/**
 * @public
 */
export interface CreateLongTermPricingResult {
  /**
   * <p>The ID of the long-term pricing type for the device.</p>
   * @public
   */
  LongTermPricingId?: string | undefined;
}

/**
 * <p>You get this exception when you call <code>CreateReturnShippingLabel</code> more than once
 *       when other requests are not completed.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>You get this resource when you call <code>CreateReturnShippingLabel</code> more than once when other requests are not completed. .</p>
   * @public
   */
  ConflictResource?: string | undefined;

  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.ConflictResource = opts.ConflictResource;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateReturnShippingLabelRequest {
  /**
   * <p>The ID for a job that you want to create the return shipping label for; for example,
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The shipping speed for a particular job. This speed doesn't dictate how soon the device
   *       is returned to Amazon Web Services. This speed represents how quickly it moves to its
   *       destination while in transit. Regional shipping speeds are as follows:</p>
   * @public
   */
  ShippingOption?: ShippingOption | undefined;
}

/**
 * @public
 * @enum
 */
export const ShippingLabelStatus = {
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  SUCCEEDED: "Succeeded",
  TIMED_OUT: "TimedOut",
} as const;

/**
 * @public
 */
export type ShippingLabelStatus = (typeof ShippingLabelStatus)[keyof typeof ShippingLabelStatus];

/**
 * @public
 */
export interface CreateReturnShippingLabelResult {
  /**
   * <p>The status information of the task on a Snow device that is being returned to Amazon Web Services.</p>
   * @public
   */
  Status?: ShippingLabelStatus | undefined;
}

/**
 * <p>You get this exception if you call <code>CreateReturnShippingLabel</code> and a valid
 *       return shipping label already exists. In this case, use
 *         <code>DescribeReturnShippingLabel</code> to get the URL.</p>
 * @public
 */
export class ReturnShippingLabelAlreadyExistsException extends __BaseException {
  readonly name: "ReturnShippingLabelAlreadyExistsException" = "ReturnShippingLabelAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReturnShippingLabelAlreadyExistsException, __BaseException>) {
    super({
      name: "ReturnShippingLabelAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReturnShippingLabelAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DescribeAddressRequest {
  /**
   * <p>The automatically generated ID for a specific address.</p>
   * @public
   */
  AddressId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAddressResult {
  /**
   * <p>The address that you want the Snow device(s) associated with a specific job to be
   *       shipped to.</p>
   * @public
   */
  Address?: Address | undefined;
}

/**
 * @public
 */
export interface DescribeAddressesRequest {
  /**
   * <p>The number of <code>ADDRESS</code> objects to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>HTTP requests are stateless. To identify what object comes "next" in the list of
   *         <code>ADDRESS</code> objects, you have the option of specifying a value for
   *         <code>NextToken</code> as the starting point for your list of returned addresses.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAddressesResult {
  /**
   * <p>The Snow device shipping addresses that were created for this account.</p>
   * @public
   */
  Addresses?: Address[] | undefined;

  /**
   * <p>HTTP requests are stateless. If you use the automatically generated
   *         <code>NextToken</code> value in your next <code>DescribeAddresses</code> call, your list of
   *       returned addresses will start from this point in the array.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The <code>NextToken</code> string was altered unexpectedly, and the operation has
 *       stopped. Run the operation without changing the <code>NextToken</code> string, and try
 *       again.</p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DescribeClusterRequest {
  /**
   * <p>The automatically generated ID for a cluster.</p>
   * @public
   */
  ClusterId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ClusterState = {
  AWAITING_QUORUM: "AwaitingQuorum",
  CANCELLED: "Cancelled",
  COMPLETE: "Complete",
  IN_USE: "InUse",
  PENDING: "Pending",
} as const;

/**
 * @public
 */
export type ClusterState = (typeof ClusterState)[keyof typeof ClusterState];

/**
 * <p>Contains metadata about a specific cluster.</p>
 * @public
 */
export interface ClusterMetadata {
  /**
   * <p>The automatically generated ID for a cluster.</p>
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * <p>The optional description of the cluster.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The <code>KmsKeyARN</code> Amazon Resource Name (ARN) associated with this cluster.
   *       This ARN was created using the <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html">CreateKey</a> API action in Key Management Service (KMS.</p>
   * @public
   */
  KmsKeyARN?: string | undefined;

  /**
   * <p>The role ARN associated with this cluster. This ARN was created using the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a>
   *       API action in Identity and Access Management (IAM).</p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>The current status of the cluster.</p>
   * @public
   */
  ClusterState?: ClusterState | undefined;

  /**
   * <p>The type of job for this cluster. Currently, the only job type supported for clusters
   *       is <code>LOCAL_USE</code>.</p>
   * @public
   */
  JobType?: JobType | undefined;

  /**
   * <p>The type of Snowcone device to use for this cluster.
   *       </p>
   *          <note>
   *             <p>For cluster jobs, Amazon Web Services Snow Family currently supports only the
   *           <code>EDGE</code> device type.</p>
   *          </note>
   * @public
   */
  SnowballType?: SnowballType | undefined;

  /**
   * <p>The creation date for this cluster.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The arrays of <a>JobResource</a> objects that can include updated <a>S3Resource</a> objects or <a>LambdaResource</a> objects.</p>
   * @public
   */
  Resources?: JobResource | undefined;

  /**
   * <p>The automatically generated ID for a specific address.</p>
   * @public
   */
  AddressId?: string | undefined;

  /**
   * <p>The shipping speed for each node in this cluster. This speed doesn't dictate how soon
   *       you'll get each device, rather it represents how quickly each device moves to its destination
   *       while in transit. Regional shipping speeds are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>In Australia, you have access to express shipping. Typically, devices shipped
   *           express are delivered in about a day.</p>
   *             </li>
   *             <li>
   *                <p>In the European Union (EU), you have access to express shipping. Typically, Snow
   *           devices shipped express are delivered in about a day. In addition, most countries in the
   *           EU have access to standard shipping, which typically takes less than a week, one
   *           way.</p>
   *             </li>
   *             <li>
   *                <p>In India, Snow devices are delivered in one to seven days.</p>
   *             </li>
   *             <li>
   *                <p>In the US, you have access to one-day shipping and two-day shipping.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ShippingOption?: ShippingOption | undefined;

  /**
   * <p>The Amazon Simple Notification Service (Amazon SNS) notification settings for this
   *       cluster.</p>
   * @public
   */
  Notification?: Notification | undefined;

  /**
   * <p>The ID of the address that you want a cluster shipped to, after it will be
   *       shipped to its primary address. This field is not supported in most regions.</p>
   * @public
   */
  ForwardingAddressId?: string | undefined;

  /**
   * <p>The tax documents required in your Amazon Web Services Region.</p>
   * @public
   */
  TaxDocuments?: TaxDocuments | undefined;

  /**
   * <p>Represents metadata and configuration settings for services on an Amazon Web Services Snow Family
   *       device.</p>
   * @public
   */
  OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeClusterResult {
  /**
   * <p>Information about a specific cluster, including shipping information, cluster status,
   *       and other important metadata.</p>
   * @public
   */
  ClusterMetadata?: ClusterMetadata | undefined;
}

/**
 * @public
 */
export interface DescribeJobRequest {
  /**
   * <p>The automatically generated ID for a job, for example
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * <p>Defines the real-time status of a Snow device's data transfer while the device is at
 *         Amazon Web Services. This data is only available while a job has a <code>JobState</code>
 *       value of <code>InProgress</code>, for both import and export jobs.</p>
 * @public
 */
export interface DataTransfer {
  /**
   * <p>The number of bytes transferred between a Snow device and Amazon S3.</p>
   * @public
   */
  BytesTransferred?: number | undefined;

  /**
   * <p>The number of objects transferred between a Snow device and Amazon S3.</p>
   * @public
   */
  ObjectsTransferred?: number | undefined;

  /**
   * <p>The total bytes of data for a transfer between a Snow device and Amazon S3. This value
   *       is set to 0 (zero) until all the keys that will be transferred have been listed.</p>
   * @public
   */
  TotalBytes?: number | undefined;

  /**
   * <p>The total number of objects for a transfer between a Snow device and Amazon S3. This
   *       value is set to 0 (zero) until all the keys that will be transferred have been
   *       listed.</p>
   * @public
   */
  TotalObjects?: number | undefined;
}

/**
 * <p>Contains job logs. Whenever a Snow device is used to import data into or export data
 *       out of Amazon S3, you'll have the option of downloading a PDF job report. Job logs are
 *       returned as a part of the response syntax of the <code>DescribeJob</code> action in the
 *         <code>JobMetadata</code> data type. The job logs can be accessed for up to 60 minutes after
 *       this request has been made. To access any of the job logs after 60 minutes have passed, you'll
 *       have to make another call to the <code>DescribeJob</code> action.</p>
 *          <p>For import jobs, the PDF job report becomes available at the end of the import process.
 *       For export jobs, your job report typically becomes available while the Snow device for your
 *       job part is being delivered to you.</p>
 *          <p>The job report provides you insight into the state of your Amazon S3 data transfer. The
 *       report includes details about your job or job part for your records.</p>
 *          <p>For deeper visibility into the status of your transferred objects, you can look at the
 *       two associated logs: a success log and a failure log. The logs are saved in comma-separated
 *       value (CSV) format, and the name of each log includes the ID of the job or job part that the
 *       log describes.</p>
 * @public
 */
export interface JobLogs {
  /**
   * <p>A link to an Amazon S3 presigned URL where the job completion report is
   *       located.</p>
   * @public
   */
  JobCompletionReportURI?: string | undefined;

  /**
   * <p>A link to an Amazon S3 presigned URL where the job success log is located.</p>
   * @public
   */
  JobSuccessLogURI?: string | undefined;

  /**
   * <p>A link to an Amazon S3 presigned URL where the job failure log is located.</p>
   * @public
   */
  JobFailureLogURI?: string | undefined;
}

/**
 * <p>The <code>Status</code> and <code>TrackingNumber</code> information for an inbound or
 *       outbound shipment.</p>
 * @public
 */
export interface Shipment {
  /**
   * <p>Status information for a shipment.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The tracking number for this job. Using this tracking number with your region's
   *       carrier's website, you can track a Snow device as the carrier transports it.</p>
   *          <p>For India, the carrier is Amazon Logistics. For all other regions, UPS is the
   *       carrier.</p>
   * @public
   */
  TrackingNumber?: string | undefined;
}

/**
 * <p>A job's shipping information, including inbound and outbound tracking numbers and
 *       shipping speed options.</p>
 * @public
 */
export interface ShippingDetails {
  /**
   * <p>The shipping speed for a particular job. This speed doesn't dictate how soon you'll get
   *       the Snow device from the job's creation date. This speed represents how quickly it moves to
   *       its destination while in transit. Regional shipping speeds are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>In Australia, you have access to express shipping. Typically, Snow devices shipped
   *           express are delivered in about a day.</p>
   *             </li>
   *             <li>
   *                <p>In the European Union (EU), you have access to express shipping. Typically, Snow
   *           devices shipped express are delivered in about a day. In addition, most countries in the
   *           EU have access to standard shipping, which typically takes less than a week, one
   *           way.</p>
   *             </li>
   *             <li>
   *                <p>In India, Snow devices are delivered in one to seven days.</p>
   *             </li>
   *             <li>
   *                <p>In the United States of America (US), you have access to one-day shipping and
   *           two-day shipping.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ShippingOption?: ShippingOption | undefined;

  /**
   * <p>The <code>Status</code> and <code>TrackingNumber</code> values for a Snow device being
   *       returned to Amazon Web Services for a particular job.</p>
   * @public
   */
  InboundShipment?: Shipment | undefined;

  /**
   * <p>The <code>Status</code> and <code>TrackingNumber</code> values for a Snow device being
   *       delivered to the address that you specified for a particular job.</p>
   * @public
   */
  OutboundShipment?: Shipment | undefined;
}

/**
 * <p>Contains information about a specific job including shipping information, job status,
 *       and other important metadata. This information is returned as a part of the response syntax of
 *       the <code>DescribeJob</code> action.</p>
 * @public
 */
export interface JobMetadata {
  /**
   * <p>The automatically generated ID for a job, for example
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The current status of the jobs.</p>
   * @public
   */
  JobState?: JobState | undefined;

  /**
   * <p>The type of job.</p>
   * @public
   */
  JobType?: JobType | undefined;

  /**
   * <p>The type of device used with this job.</p>
   * @public
   */
  SnowballType?: SnowballType | undefined;

  /**
   * <p>The creation date for this job.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>An array of <code>S3Resource</code> objects. Each <code>S3Resource</code> object
   *       represents an Amazon S3 bucket that your transferred data will be exported from or imported
   *       into.</p>
   * @public
   */
  Resources?: JobResource | undefined;

  /**
   * <p>The description of the job, provided at job creation.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the Key Management Service (KMS) key
   *       associated with this job. This ARN was created using the <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html">CreateKey</a> API action in KMS.</p>
   * @public
   */
  KmsKeyARN?: string | undefined;

  /**
   * <p>The role ARN associated with this job. This ARN was created using the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a>
   *       API action in Identity and Access Management.</p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>The ID for the address that you want the Snow device shipped to.</p>
   * @public
   */
  AddressId?: string | undefined;

  /**
   * <p>A job's shipping information, including inbound and outbound tracking numbers and
   *       shipping speed options.</p>
   * @public
   */
  ShippingDetails?: ShippingDetails | undefined;

  /**
   * <p>The Snow device capacity preference for this job, specified at job creation. In US
   *       regions, you can choose between 50 TB and 80 TB Snowballs. All other regions use 80 TB
   *       capacity Snowballs.</p>
   *          <p>For more information, see
   *       "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow
   *       Family Devices and Capacity) in the <i>Snowcone User Guide</i> or
   *       "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow
   *       Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>
   * @public
   */
  SnowballCapacityPreference?: SnowballCapacity | undefined;

  /**
   * <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated
   *       with a specific job. The <code>Notification</code> object is returned as a part of the
   *       response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data
   *       type.</p>
   * @public
   */
  Notification?: Notification | undefined;

  /**
   * <p>A value that defines the real-time status of a Snow device's data transfer while the
   *       device is at Amazon Web Services. This data is only available while a job has a
   *         <code>JobState</code> value of <code>InProgress</code>, for both import and export
   *       jobs.</p>
   * @public
   */
  DataTransferProgress?: DataTransfer | undefined;

  /**
   * <p>Links to Amazon S3 presigned URLs for the job report and logs. For import jobs, the PDF
   *       job report becomes available at the end of the import process. For export jobs, your job
   *       report typically becomes available while the Snow device for your job part is being delivered
   *       to you.</p>
   * @public
   */
  JobLogInfo?: JobLogs | undefined;

  /**
   * <p>The 39-character ID for the cluster, for example
   *         <code>CID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * <p>The ID of the address that you want a job shipped to, after it will be
   *       shipped to its primary address. This field is not supported in most regions.</p>
   * @public
   */
  ForwardingAddressId?: string | undefined;

  /**
   * <p>The metadata associated with the tax documents required in your Amazon Web Services Region.</p>
   * @public
   */
  TaxDocuments?: TaxDocuments | undefined;

  /**
   * <p>The container for <code>SnowconeDeviceConfiguration</code>. </p>
   * @public
   */
  DeviceConfiguration?: DeviceConfiguration | undefined;

  /**
   * <p>Allows you to securely operate and manage Snowcone devices remotely from outside of your
   *       internal network. When set to <code>INSTALLED_AUTOSTART</code>, remote management will
   *       automatically be available when the device arrives at your location. Otherwise, you need to
   *       use the Snowball Client to manage the device.</p>
   * @public
   */
  RemoteManagement?: RemoteManagement | undefined;

  /**
   * <p>The ID of the long-term pricing type for the device.</p>
   * @public
   */
  LongTermPricingId?: string | undefined;

  /**
   * <p>Represents metadata and configuration settings for services on an Amazon Web Services Snow Family
   *       device.</p>
   * @public
   */
  OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration | undefined;

  /**
   * <p>The highest impact level of data that will be stored or processed on the device, provided at job creation.</p>
   * @public
   */
  ImpactLevel?: ImpactLevel | undefined;

  /**
   * <p>Information identifying the person picking up the device.</p>
   * @public
   */
  PickupDetails?: PickupDetails | undefined;

  /**
   * <p>Unique ID associated with a device.</p>
   * @public
   */
  SnowballId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobResult {
  /**
   * <p>Information about a specific job, including shipping information, job status, and other
   *       important metadata.</p>
   * @public
   */
  JobMetadata?: JobMetadata | undefined;

  /**
   * <p>Information about a specific job part (in the case of an export job), including
   *       shipping information, job status, and other important metadata.</p>
   * @public
   */
  SubJobMetadata?: JobMetadata[] | undefined;
}

/**
 * @public
 */
export interface DescribeReturnShippingLabelRequest {
  /**
   * <p>The automatically generated ID for a job, for example
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeReturnShippingLabelResult {
  /**
   * <p>The status information of the task on a Snow device that is being returned to Amazon Web Services.</p>
   * @public
   */
  Status?: ShippingLabelStatus | undefined;

  /**
   * <p>The expiration date of the current return shipping label.</p>
   * @public
   */
  ExpirationDate?: Date | undefined;

  /**
   * <p>The pre-signed Amazon S3 URI used to download the return shipping label.</p>
   * @public
   */
  ReturnShippingLabelURI?: string | undefined;
}

/**
 * @public
 */
export interface GetJobManifestRequest {
  /**
   * <p>The ID for a job that you want to get the manifest file for, for example
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface GetJobManifestResult {
  /**
   * <p>The Amazon S3 presigned URL for the manifest file associated with the specified
   *         <code>JobId</code> value.</p>
   * @public
   */
  ManifestURI?: string | undefined;
}

/**
 * @public
 */
export interface GetJobUnlockCodeRequest {
  /**
   * <p>The ID for the job that you want to get the <code>UnlockCode</code> value for, for
   *       example <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface GetJobUnlockCodeResult {
  /**
   * <p>The <code>UnlockCode</code> value for the specified job. The <code>UnlockCode</code>
   *       value can be accessed for up to 360 days after the job has been created.</p>
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
   * <p>The service limit for number of Snow devices this account can have at once. The default
   *       service limit is 1 (one).</p>
   * @public
   */
  SnowballLimit?: number | undefined;

  /**
   * <p>The number of Snow devices that this account is currently using.</p>
   * @public
   */
  SnowballsInUse?: number | undefined;
}

/**
 * @public
 */
export interface GetSoftwareUpdatesRequest {
  /**
   * <p>The ID for a job that you want to get the software update file for, for example
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface GetSoftwareUpdatesResult {
  /**
   * <p>The Amazon S3 presigned URL for the update file associated with the specified
   *         <code>JobId</code> value. The software update will be available for 2 days after this
   *       request is made. To access an update after the 2 days have passed, you'll have to make another
   *       call to <code>GetSoftwareUpdates</code>.</p>
   * @public
   */
  UpdatesURI?: string | undefined;
}

/**
 * @public
 */
export interface ListClusterJobsRequest {
  /**
   * <p>The 39-character ID for the cluster that you want to list, for example
   *         <code>CID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   * @public
   */
  ClusterId: string | undefined;

  /**
   * <p>The number of <code>JobListEntry</code> objects to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>HTTP requests are stateless. To identify what object comes "next" in the list of
   *         <code>JobListEntry</code> objects, you have the option of specifying <code>NextToken</code>
   *       as the starting point for your returned list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClusterJobsResult {
  /**
   * <p>Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value
   *       that indicates whether the job is a job part, in the case of export jobs. </p>
   * @public
   */
  JobListEntries?: JobListEntry[] | undefined;

  /**
   * <p>HTTP requests are stateless. If you use the automatically generated
   *         <code>NextToken</code> value in your next <code>ListClusterJobsResult</code> call, your list
   *       of returned jobs will start from this point in the array.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClustersRequest {
  /**
   * <p>The number of <code>ClusterListEntry</code> objects to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>HTTP requests are stateless. To identify what object comes "next" in the list of
   *         <code>ClusterListEntry</code> objects, you have the option of specifying
   *         <code>NextToken</code> as the starting point for your returned list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains a cluster's state, a cluster's ID, and other important information.</p>
 * @public
 */
export interface ClusterListEntry {
  /**
   * <p>The 39-character ID for the cluster that you want to list, for example
   *         <code>CID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * <p>The current state of this cluster. For information about the state of a specific node,
   *       see <a>JobListEntry$JobState</a>.</p>
   * @public
   */
  ClusterState?: ClusterState | undefined;

  /**
   * <p>The creation date for this cluster.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>Defines an optional description of the cluster, for example <code>Environmental Data
   *         Cluster-01</code>.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface ListClustersResult {
  /**
   * <p>Each <code>ClusterListEntry</code> object contains a cluster's state, a cluster's ID,
   *       and other important status information.</p>
   * @public
   */
  ClusterListEntries?: ClusterListEntry[] | undefined;

  /**
   * <p>HTTP requests are stateless. If you use the automatically generated
   *         <code>NextToken</code> value in your next <code>ClusterListEntry</code> call, your list of
   *       returned clusters will start from this point in the array.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCompatibleImagesRequest {
  /**
   * <p>The maximum number of results for the list of compatible images. Currently, a Snowball
   *       Edge device can store 10 AMIs.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>HTTP requests are stateless. To identify what object comes "next" in the list of
   *       compatible images, you can specify a value for <code>NextToken</code> as the starting point
   *       for your list of returned images.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A JSON-formatted object that describes a compatible Amazon Machine Image (AMI),
 *       including the ID and name for a Snow device AMI. This AMI is compatible with the device's
 *       physical hardware requirements, and it should be able to be run in an SBE1 instance on the
 *       device.</p>
 * @public
 */
export interface CompatibleImage {
  /**
   * <p>The unique identifier for an individual Snow device AMI.</p>
   * @public
   */
  AmiId?: string | undefined;

  /**
   * <p>The optional name of a compatible image.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface ListCompatibleImagesResult {
  /**
   * <p>A JSON-formatted object that describes a compatible AMI, including the ID and name for
   *       a Snow device AMI.</p>
   * @public
   */
  CompatibleImages?: CompatibleImage[] | undefined;

  /**
   * <p>Because HTTP requests are stateless, this is the starting point for your next list of
   *       returned images.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobsRequest {
  /**
   * <p>The number of <code>JobListEntry</code> objects to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>HTTP requests are stateless. To identify what object comes "next" in the list of
   *         <code>JobListEntry</code> objects, you have the option of specifying <code>NextToken</code>
   *       as the starting point for your returned list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobsResult {
  /**
   * <p>Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value
   *       that indicates whether the job is a job part, in the case of export jobs. </p>
   * @public
   */
  JobListEntries?: JobListEntry[] | undefined;

  /**
   * <p>HTTP requests are stateless. If you use this automatically generated
   *         <code>NextToken</code> value in your next <code>ListJobs</code> call, your returned
   *         <code>JobListEntry</code> objects will start from this point in the array.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLongTermPricingRequest {
  /**
   * <p>The maximum number of <code>ListLongTermPricing</code> objects to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Because HTTP requests are stateless, this is the starting point for your next list of
   *         <code>ListLongTermPricing</code> to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Each <code>LongTermPricingListEntry</code> object contains information about a long-term
 *       pricing type.</p>
 * @public
 */
export interface LongTermPricingListEntry {
  /**
   * <p>The ID of the long-term pricing type for the device.</p>
   * @public
   */
  LongTermPricingId?: string | undefined;

  /**
   * <p>The end date the long-term pricing contract.</p>
   * @public
   */
  LongTermPricingEndDate?: Date | undefined;

  /**
   * <p>The start date of the long-term pricing contract.</p>
   * @public
   */
  LongTermPricingStartDate?: Date | undefined;

  /**
   * <p>The type of long-term pricing that was selected for the device.</p>
   * @public
   */
  LongTermPricingType?: LongTermPricingType | undefined;

  /**
   * <p>The current active jobs on the device the long-term pricing type.</p>
   * @public
   */
  CurrentActiveJob?: string | undefined;

  /**
   * <p>A new device that replaces a device that is ordered with long-term pricing.</p>
   * @public
   */
  ReplacementJob?: string | undefined;

  /**
   * <p>If set to <code>true</code>, specifies that the current long-term pricing type for the
   *       device should be automatically renewed before the long-term pricing contract expires.</p>
   * @public
   */
  IsLongTermPricingAutoRenew?: boolean | undefined;

  /**
   * <p>The status of the long-term pricing type.</p>
   * @public
   */
  LongTermPricingStatus?: string | undefined;

  /**
   * <p>The type of Snow Family devices associated with this long-term pricing job.</p>
   * @public
   */
  SnowballType?: SnowballType | undefined;

  /**
   * <p>The IDs of the jobs that are associated with a long-term pricing type.</p>
   * @public
   */
  JobIds?: string[] | undefined;
}

/**
 * @public
 */
export interface ListLongTermPricingResult {
  /**
   * <p>Each <code>LongTermPricingEntry</code> object contains a status, ID, and other information
   *       about the <code>LongTermPricing</code> type. </p>
   * @public
   */
  LongTermPricingEntries?: LongTermPricingListEntry[] | undefined;

  /**
   * <p>Because HTTP requests are stateless, this is the starting point for your next list of
   *       returned <code>ListLongTermPricing</code> list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPickupLocationsRequest {
  /**
   * <p>The maximum number of locations to list per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>HTTP requests are stateless. To identify what object comes "next" in the list of <code>ListPickupLocationsRequest</code> objects, you have the option of specifying <code>NextToken</code> as the starting point for your returned list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPickupLocationsResult {
  /**
   * <p>Information about the address of pickup locations.</p>
   * @public
   */
  Addresses?: Address[] | undefined;

  /**
   * <p>HTTP requests are stateless. To identify what object comes "next" in the list of <code>ListPickupLocationsResult</code> objects, you have the option of specifying <code>NextToken</code> as the starting point for your returned list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ServiceName = {
  EKS_ANYWHERE: "EKS_ANYWHERE",
  KUBERNETES: "KUBERNETES",
} as const;

/**
 * @public
 */
export type ServiceName = (typeof ServiceName)[keyof typeof ServiceName];

/**
 * <p>The version of the requested service.</p>
 * @public
 */
export interface ServiceVersion {
  /**
   * <p>The version number of the requested service.</p>
   * @public
   */
  Version?: string | undefined;
}

/**
 * <p>The name and version of the service dependant on the requested service.</p>
 * @public
 */
export interface DependentService {
  /**
   * <p>The name of the dependent service.</p>
   * @public
   */
  ServiceName?: ServiceName | undefined;

  /**
   * <p>The version of the dependent service.</p>
   * @public
   */
  ServiceVersion?: ServiceVersion | undefined;
}

/**
 * @public
 */
export interface ListServiceVersionsRequest {
  /**
   * <p>The name of the service for which you're requesting supported versions.</p>
   * @public
   */
  ServiceName: ServiceName | undefined;

  /**
   * <p>A list of names and versions of dependant services of the requested service.</p>
   * @public
   */
  DependentServices?: DependentService[] | undefined;

  /**
   * <p>The maximum number of <code>ListServiceVersions</code> objects to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Because HTTP requests are stateless, this is the starting point for the next list of returned
   *       <code>ListServiceVersionsRequest</code> versions.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceVersionsResult {
  /**
   * <p>A list of supported versions.</p>
   * @public
   */
  ServiceVersions: ServiceVersion[] | undefined;

  /**
   * <p>The name of the service for which the system provided supported versions.</p>
   * @public
   */
  ServiceName: ServiceName | undefined;

  /**
   * <p>A list of names and versions of dependant services of the service for which the system provided supported versions.</p>
   * @public
   */
  DependentServices?: DependentService[] | undefined;

  /**
   * <p>Because HTTP requests are stateless, this is the starting point of the next list of returned
   *       <code>ListServiceVersionsResult</code> results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateClusterRequest {
  /**
   * <p>The cluster ID of the cluster that you want to update, for example
   *         <code>CID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   * @public
   */
  ClusterId: string | undefined;

  /**
   * <p>The new role Amazon Resource Name (ARN) that you want to associate with this cluster.
   *       To create a role ARN, use the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a> API action in Identity and Access Management (IAM).</p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>The updated description of this cluster.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The updated arrays of <a>JobResource</a> objects that can include updated
   *         <a>S3Resource</a> objects or <a>LambdaResource</a> objects.</p>
   * @public
   */
  Resources?: JobResource | undefined;

  /**
   * <p>Specifies the service or services on the Snow Family device that your transferred data
   *       will be exported from or imported into. Amazon Web Services Snow Family device clusters support Amazon S3 and NFS
   *       (Network File System).</p>
   * @public
   */
  OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration | undefined;

  /**
   * <p>The ID of the updated <a>Address</a> object.</p>
   * @public
   */
  AddressId?: string | undefined;

  /**
   * <p>The updated shipping option value of this cluster's <a>ShippingDetails</a>
   *       object.</p>
   * @public
   */
  ShippingOption?: ShippingOption | undefined;

  /**
   * <p>The new or updated <a>Notification</a> object.</p>
   * @public
   */
  Notification?: Notification | undefined;

  /**
   * <p>The updated ID for the forwarding address for a cluster. This field is not
   *       supported in most regions.</p>
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
   * <p>The job ID of the job that you want to update, for example
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The new role Amazon Resource Name (ARN) that you want to associate with this job. To
   *       create a role ARN, use the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a>Identity and Access Management
   *       (IAM) API action.</p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>The new or updated <a>Notification</a> object.</p>
   * @public
   */
  Notification?: Notification | undefined;

  /**
   * <p>The updated <code>JobResource</code> object, or the updated <a>JobResource</a> object. </p>
   * @public
   */
  Resources?: JobResource | undefined;

  /**
   * <p>Specifies the service or services on the Snow Family device that your transferred data
   *       will be exported from or imported into. Amazon Web Services Snow Family supports Amazon S3 and NFS (Network File
   *       System) and the Amazon Web Services Storage Gateway service Tape Gateway type.</p>
   * @public
   */
  OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration | undefined;

  /**
   * <p>The ID of the updated <a>Address</a> object.</p>
   * @public
   */
  AddressId?: string | undefined;

  /**
   * <p>The updated shipping option value of this job's <a>ShippingDetails</a>
   *       object.</p>
   * @public
   */
  ShippingOption?: ShippingOption | undefined;

  /**
   * <p>The updated description of this job's <a>JobMetadata</a> object.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The updated <code>SnowballCapacityPreference</code> of this job's <a>JobMetadata</a> object. The 50 TB Snowballs are only available in the US
   *       regions.</p>
   *          <p>For more information, see
   *       "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow
   *       Family Devices and Capacity) in the <i>Snowcone User Guide</i> or
   *       "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow
   *       Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>
   * @public
   */
  SnowballCapacityPreference?: SnowballCapacity | undefined;

  /**
   * <p>The updated ID for the forwarding address for a job. This field is not
   *       supported in most regions.</p>
   * @public
   */
  ForwardingAddressId?: string | undefined;

  /**
   * <p>Information identifying the person picking up the device.</p>
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
 * @enum
 */
export const ShipmentState = {
  RECEIVED: "RECEIVED",
  RETURNED: "RETURNED",
} as const;

/**
 * @public
 */
export type ShipmentState = (typeof ShipmentState)[keyof typeof ShipmentState];

/**
 * @public
 */
export interface UpdateJobShipmentStateRequest {
  /**
   * <p>The job ID of the job whose shipment date you want to update, for example
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The state of a device when it is being shipped. </p>
   *          <p>Set to <code>RECEIVED</code> when the device arrives at your location.</p>
   *          <p>Set to <code>RETURNED</code> when you have returned the device to Amazon Web Services.</p>
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
   * <p>The ID of the long-term pricing type for the device.</p>
   * @public
   */
  LongTermPricingId: string | undefined;

  /**
   * <p>Specifies that a device that is ordered with long-term pricing should be replaced with a
   *       new device.</p>
   * @public
   */
  ReplacementJob?: string | undefined;

  /**
   * <p>If set to <code>true</code>, specifies that the current long-term pricing type for the
   *       device should be automatically renewed before the long-term pricing contract expires.</p>
   * @public
   */
  IsLongTermPricingAutoRenew?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateLongTermPricingResult {}

/**
 * @internal
 */
export const PickupDetailsFilterSensitiveLog = (obj: PickupDetails): any => ({
  ...obj,
  ...(obj.PhoneNumber && { PhoneNumber: SENSITIVE_STRING }),
  ...(obj.Email && { Email: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateJobRequestFilterSensitiveLog = (obj: CreateJobRequest): any => ({
  ...obj,
  ...(obj.PickupDetails && { PickupDetails: PickupDetailsFilterSensitiveLog(obj.PickupDetails) }),
});

/**
 * @internal
 */
export const JobMetadataFilterSensitiveLog = (obj: JobMetadata): any => ({
  ...obj,
  ...(obj.PickupDetails && { PickupDetails: PickupDetailsFilterSensitiveLog(obj.PickupDetails) }),
});

/**
 * @internal
 */
export const DescribeJobResultFilterSensitiveLog = (obj: DescribeJobResult): any => ({
  ...obj,
  ...(obj.JobMetadata && { JobMetadata: JobMetadataFilterSensitiveLog(obj.JobMetadata) }),
  ...(obj.SubJobMetadata && { SubJobMetadata: obj.SubJobMetadata.map((item) => JobMetadataFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateJobRequestFilterSensitiveLog = (obj: UpdateJobRequest): any => ({
  ...obj,
  ...(obj.PickupDetails && { PickupDetails: PickupDetailsFilterSensitiveLog(obj.PickupDetails) }),
});
