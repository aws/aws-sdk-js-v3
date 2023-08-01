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
 * @public
 * <p>The address that you want the Snow device(s) associated with a specific job to be
 *       shipped to. Addresses are validated at the time of creation. The address you provide must be
 *       located within the serviceable area of your region. Although no individual elements of the
 *         <code>Address</code> are required, if the address is invalid or unsupported, then an
 *       exception is thrown.</p>
 */
export interface Address {
  /**
   * @public
   * <p>The unique ID for an address.</p>
   */
  AddressId?: string;

  /**
   * @public
   * <p>The name of a person to receive a Snow device at an address.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The name of the company to receive a Snow device at an address.</p>
   */
  Company?: string;

  /**
   * @public
   * <p>The first line in a street address that a Snow device is to be delivered
   *       to.</p>
   */
  Street1?: string;

  /**
   * @public
   * <p>The second line in a street address that a Snow device is to be delivered
   *       to.</p>
   */
  Street2?: string;

  /**
   * @public
   * <p>The third line in a street address that a Snow device is to be delivered
   *       to.</p>
   */
  Street3?: string;

  /**
   * @public
   * <p>The city in an address that a Snow device is to be delivered to.</p>
   */
  City?: string;

  /**
   * @public
   * <p>The state or province in an address that a Snow device is to be delivered to.</p>
   */
  StateOrProvince?: string;

  /**
   * @public
   * <p>This field is no longer used and the value is ignored.</p>
   */
  PrefectureOrDistrict?: string;

  /**
   * @public
   * <p>This field is no longer used and the value is ignored.</p>
   */
  Landmark?: string;

  /**
   * @public
   * <p>The country in an address that a Snow device is to be delivered to.</p>
   */
  Country?: string;

  /**
   * @public
   * <p>The postal code in an address that a Snow device is to be delivered to.</p>
   */
  PostalCode?: string;

  /**
   * @public
   * <p>The phone number associated with an address that a Snow device is to be delivered
   *       to.</p>
   */
  PhoneNumber?: string;

  /**
   * @public
   * <p>If the address you are creating is a primary address, then set this option to
   *       true. This field is not supported in most regions.</p>
   */
  IsRestricted?: boolean;

  /**
   * @public
   * <p>Differentiates between delivery address and pickup address in the customer account. Provided at job creation.</p>
   */
  Type?: AddressType | string;
}

/**
 * @public
 */
export interface CancelClusterRequest {
  /**
   * @public
   * <p>The 39-character ID for the cluster that you want to cancel, for example
   *         <code>CID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  ClusterId: string | undefined;
}

/**
 * @public
 */
export interface CancelClusterResult {}

/**
 * @public
 * <p>The action can't be performed because the job's current state doesn't allow that action
 *       to be performed.</p>
 */
export class InvalidJobStateException extends __BaseException {
  readonly name: "InvalidJobStateException" = "InvalidJobStateException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 */
export class InvalidResourceException extends __BaseException {
  readonly name: "InvalidResourceException" = "InvalidResourceException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The provided resource value is invalid.</p>
   */
  ResourceType?: string;
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
 * @public
 * <p>The provided Key Management Service key lacks the permissions to perform the specified
 *         <a>CreateJob</a> or <a>UpdateJob</a> action.</p>
 */
export class KMSRequestFailedException extends __BaseException {
  readonly name: "KMSRequestFailedException" = "KMSRequestFailedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
   * @public
   * <p>The 39-character job ID for the job that you want to cancel, for example
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
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
   * @public
   * <p>The address that you want the Snow device shipped to.</p>
   */
  Address: Address | undefined;
}

/**
 * @public
 */
export interface CreateAddressResult {
  /**
   * @public
   * <p>The automatically generated ID for a specific address. You'll use this ID when you
   *       create a job to specify which address you want the Snow device for that job shipped
   *       to.</p>
   */
  AddressId?: string;
}

/**
 * @public
 * <p>The address provided was invalid. Check the address with your region's carrier, and try
 *       again.</p>
 */
export class InvalidAddressException extends __BaseException {
  readonly name: "InvalidAddressException" = "InvalidAddressException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The address is either outside the serviceable area for your region, or an error
 *       occurred. Check the address with your region's carrier and try again. If the issue persists,
 *       contact Amazon Web Services Support.</p>
 */
export class UnsupportedAddressException extends __BaseException {
  readonly name: "UnsupportedAddressException" = "UnsupportedAddressException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated
 *       with a specific job. The <code>Notification</code> object is returned as a part of the
 *       response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data
 *       type.</p>
 *          <p>When the notification settings are defined during job creation, you can choose to
 *       notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of
 *       strings, or you can specify that you want to have Amazon SNS notifications sent out for all
 *       job states with <code>NotifyAll</code> set to true.</p>
 */
export interface Notification {
  /**
   * @public
   * <p>The new SNS <code>TopicArn</code> that you want to associate with this job. You can
   *       create Amazon Resource Names (ARNs) for topics by using the <a href="https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html">CreateTopic</a> Amazon SNS API
   *       action.</p>
   *          <p>You can subscribe email addresses to an Amazon SNS topic through the Amazon Web Services Management Console, or by using the <a href="https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html">Subscribe</a> Amazon Simple Notification
   *       Service (Amazon SNS) API action.</p>
   */
  SnsTopicARN?: string;

  /**
   * @public
   * <p>The list of job states that will trigger a notification for this job.</p>
   */
  JobStatesToNotify?: (JobState | string)[];

  /**
   * @public
   * <p>Any change in job state will trigger a notification for this job.</p>
   */
  NotifyAll?: boolean;

  /**
   * @public
   * <p>Used to send SNS notifications for the person picking up the device (identified during job creation).</p>
   */
  DevicePickupSnsTopicARN?: string;
}

/**
 * @public
 * <p>An object representing the metadata and configuration settings of EKS Anywhere on the Snow Family device.</p>
 */
export interface EKSOnDeviceServiceConfiguration {
  /**
   * @public
   * <p>The Kubernetes version for EKS Anywhere on the Snow Family device.</p>
   */
  KubernetesVersion?: string;

  /**
   * @public
   * <p>The version of EKS Anywhere on the Snow Family device.</p>
   */
  EKSAnywhereVersion?: string;
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
 * @public
 * <p>An object that represents the metadata and configuration settings for the NFS (Network
 *       File System) service on an Amazon Web Services Snow Family device.</p>
 */
export interface NFSOnDeviceServiceConfiguration {
  /**
   * @public
   * <p>The maximum NFS storage for one Snow Family device.</p>
   */
  StorageLimit?: number;

  /**
   * @public
   * <p>The scale unit of the NFS storage on the device.</p>
   *          <p>Valid values: TB.</p>
   */
  StorageUnit?: StorageUnit | string;
}

/**
 * @public
 * <p>Amazon S3 compatible storage on Snow family devices configuration items.</p>
 */
export interface S3OnDeviceServiceConfiguration {
  /**
   * @public
   * <p>If the specified storage limit value matches storage limit of one of the defined configurations, that configuration will be used.
   *       If the specified storage limit value does not match any defined configuration, the request will fail. If more than one configuration has
   *       the same storage limit as specified, the other input need to be provided.</p>
   */
  StorageLimit?: number;

  /**
   * @public
   * <p>Storage unit. Currently the only supported unit is TB.</p>
   */
  StorageUnit?: StorageUnit | string;

  /**
   * @public
   * <p>Applicable when creating a cluster. Specifies how many nodes are needed for Amazon S3 compatible storage on Snow family devices. If specified, the other input can be omitted.</p>
   */
  ServiceSize?: number;

  /**
   * @public
   * <p>>Fault tolerance level of the cluster. This indicates the number of nodes that can go down without degrading the performance of the cluster. This additional input helps when the specified <code>StorageLimit</code> matches more than one Amazon S3 compatible storage on Snow family devices service configuration.</p>
   */
  FaultTolerance?: number;
}

/**
 * @public
 * <p>An object that represents the metadata and configuration settings for the Storage Gateway
 *       service Tape Gateway type on an Amazon Web Services Snow Family device.</p>
 */
export interface TGWOnDeviceServiceConfiguration {
  /**
   * @public
   * <p>The maximum number of virtual tapes to store on one Snow Family device. Due to physical
   *       resource limitations, this value must be set to 80 for Snowball Edge.</p>
   */
  StorageLimit?: number;

  /**
   * @public
   * <p>The scale unit of the virtual tapes on the device.</p>
   */
  StorageUnit?: StorageUnit | string;
}

/**
 * @public
 * <p>An object that represents the metadata and configuration settings for services on an Amazon Web Services
 *       Snow Family device.</p>
 */
export interface OnDeviceServiceConfiguration {
  /**
   * @public
   * <p>Represents the NFS (Network File System) service on a Snow Family device.</p>
   */
  NFSOnDeviceService?: NFSOnDeviceServiceConfiguration;

  /**
   * @public
   * <p>Represents the Storage Gateway service Tape Gateway type on a Snow Family device.</p>
   */
  TGWOnDeviceService?: TGWOnDeviceServiceConfiguration;

  /**
   * @public
   * <p>The configuration of EKS Anywhere on the Snow Family device.</p>
   */
  EKSOnDeviceService?: EKSOnDeviceServiceConfiguration;

  /**
   * @public
   * <p>Configuration for Amazon S3 compatible storage on Snow family devices.</p>
   */
  S3OnDeviceService?: S3OnDeviceServiceConfiguration;
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
 * @public
 * <p>A JSON-formatted object that contains the IDs for an Amazon Machine Image (AMI),
 *       including the Amazon EC2-compatible AMI ID and the Snow device AMI ID. Each AMI has these two IDs to
 *       simplify identifying the AMI in both the Amazon Web Services Cloud and on the device.</p>
 */
export interface Ec2AmiResource {
  /**
   * @public
   * <p>The ID of the AMI in Amazon EC2.</p>
   */
  AmiId: string | undefined;

  /**
   * @public
   * <p>The ID of the AMI on the Snow device.</p>
   */
  SnowballAmiId?: string;
}

/**
 * @public
 * <p>The container for the <a>EventTriggerDefinition$EventResourceARN</a>.</p>
 */
export interface EventTriggerDefinition {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for any local Amazon S3 resource that is an Lambda function's event trigger associated with this job.</p>
   */
  EventResourceARN?: string;
}

/**
 * @public
 * <p>Identifies </p>
 */
export interface LambdaResource {
  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that represents an Lambda function to be
   *       triggered by PUT object actions on the associated local Amazon S3 resource.</p>
   */
  LambdaArn?: string;

  /**
   * @public
   * <p>The array of ARNs for <a>S3Resource</a> objects to trigger the <a>LambdaResource</a> objects associated with this job.</p>
   */
  EventTriggers?: EventTriggerDefinition[];
}

/**
 * @public
 * <p>Contains a key range. For export jobs, a <code>S3Resource</code> object can have an
 *       optional <code>KeyRange</code> value. The length of the range is defined at job creation, and
 *       has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or
 *       both. Ranges are UTF-8 binary sorted.</p>
 */
export interface KeyRange {
  /**
   * @public
   * <p>The key that starts an optional key range for an export job. Ranges are inclusive and
   *       UTF-8 binary sorted.</p>
   */
  BeginMarker?: string;

  /**
   * @public
   * <p>The key that ends an optional key range for an export job. Ranges are inclusive and
   *       UTF-8 binary sorted.</p>
   */
  EndMarker?: string;
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
 * @public
 * <p>An object that represents the service or services on the Snow Family device that your
 *       transferred data will be exported from or imported into. Amazon Web Services Snow Family supports Amazon S3 and
 *       NFS (Network File System).</p>
 */
export interface TargetOnDeviceService {
  /**
   * @public
   * <p>Specifies the name of the service on the Snow Family device that your transferred data
   *       will be exported from or imported into.</p>
   */
  ServiceName?: DeviceServiceName | string;

  /**
   * @public
   * <p>Specifies whether the data is being imported or exported. You can import or export the
   *       data, or use it locally on the device.</p>
   */
  TransferOption?: TransferOption | string;
}

/**
 * @public
 * <p>Each <code>S3Resource</code> object represents an Amazon S3 bucket that your
 *       transferred data will be exported from or imported into. For export jobs, this object can have
 *       an optional <code>KeyRange</code> value. The length of the range is defined at job creation,
 *       and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or
 *       both. Ranges are UTF-8 binary sorted.</p>
 */
export interface S3Resource {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Amazon S3 bucket.</p>
   */
  BucketArn?: string;

  /**
   * @public
   * <p>For export jobs, you can provide an optional <code>KeyRange</code> within a specific
   *       Amazon S3 bucket. The length of the range is defined at job creation, and has either an
   *       inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are
   *       UTF-8 binary sorted.</p>
   */
  KeyRange?: KeyRange;

  /**
   * @public
   * <p>Specifies the service or services on the Snow Family device that your transferred data
   *       will be exported from or imported into. Amazon Web Services Snow Family supports Amazon S3 and NFS (Network File
   *       System).</p>
   */
  TargetOnDeviceServices?: TargetOnDeviceService[];
}

/**
 * @public
 * <p>Contains an array of Amazon Web Services resource objects. Each object represents an
 *       Amazon S3 bucket, an Lambda function, or an Amazon Machine Image (AMI) based
 *       on Amazon EC2 that is associated with a particular job.</p>
 */
export interface JobResource {
  /**
   * @public
   * <p>An array of <code>S3Resource</code> objects.</p>
   */
  S3Resources?: S3Resource[];

  /**
   * @public
   * <p>The Python-language Lambda functions for this job.</p>
   */
  LambdaResources?: LambdaResource[];

  /**
   * @public
   * <p>The Amazon Machine Images (AMIs) associated with this job.</p>
   */
  Ec2AmiResources?: Ec2AmiResource[];
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
 * @public
 * <p>The tax documents required in Amazon Web Services Region in India.</p>
 */
export interface INDTaxDocuments {
  /**
   * @public
   * <p>The Goods and Services Tax (GST) documents required in Amazon Web Services Region in
   *       India.</p>
   */
  GSTIN?: string;
}

/**
 * @public
 * <p>The tax documents required in your Amazon Web Services Region.</p>
 */
export interface TaxDocuments {
  /**
   * @public
   * <p>The tax documents required in Amazon Web Services Region in India.</p>
   */
  IND?: INDTaxDocuments;
}

/**
 * @public
 */
export interface CreateClusterRequest {
  /**
   * @public
   * <p>The type of job for this cluster. Currently, the only job type supported for clusters
   *       is <code>LOCAL_USE</code>.</p>
   *          <p>For more information, see
   *       "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow
   *       Family Devices and Capacity) in the <i>Snowcone User Guide</i> or
   *       "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow
   *       Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>
   */
  JobType: JobType | string | undefined;

  /**
   * @public
   * <p>The resources associated with the cluster job. These resources include Amazon S3
   *       buckets and optional Lambda functions written in the Python language.
   *     </p>
   */
  Resources?: JobResource;

  /**
   * @public
   * <p>Specifies the service or services on the Snow Family device that your transferred data
   *       will be exported from or imported into. Amazon Web Services Snow Family device clusters support Amazon S3 and NFS
   *       (Network File System).</p>
   */
  OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration;

  /**
   * @public
   * <p>An optional description of this specific cluster, for example <code>Environmental Data
   *         Cluster-01</code>.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ID for the address that you want the cluster shipped to.</p>
   */
  AddressId: string | undefined;

  /**
   * @public
   * <p>The <code>KmsKeyARN</code> value that you want to associate with this cluster.
   *         <code>KmsKeyARN</code> values are created by using the <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html">CreateKey</a> API action in Key Management Service (KMS). </p>
   */
  KmsKeyARN?: string;

  /**
   * @public
   * <p>The <code>RoleARN</code> that you want to associate with this cluster.
   *         <code>RoleArn</code> values are created by using the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a> API action in Identity and Access Management (IAM).</p>
   */
  RoleARN?: string;

  /**
   * @public
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
   */
  SnowballType: SnowballType | string | undefined;

  /**
   * @public
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
   */
  ShippingOption: ShippingOption | string | undefined;

  /**
   * @public
   * <p>The Amazon Simple Notification Service (Amazon SNS) notification settings for this
   *       cluster.</p>
   */
  Notification?: Notification;

  /**
   * @public
   * <p>The forwarding address ID for a cluster. This field is not supported in most
   *       regions.</p>
   */
  ForwardingAddressId?: string;

  /**
   * @public
   * <p>The tax documents required in your Amazon Web Services Region.</p>
   */
  TaxDocuments?: TaxDocuments;

  /**
   * @public
   * <p>Allows you to securely operate and manage Snow devices in a cluster remotely from outside
   *       of your internal network. When set to <code>INSTALLED_AUTOSTART</code>, remote management will
   *       automatically be available when the device arrives at your location. Otherwise, you need to
   *       use the Snowball Client to manage the device.</p>
   */
  RemoteManagement?: RemoteManagement | string;

  /**
   * @public
   * <p>If provided, each job will be automatically created and associated with the new cluster. If not provided, will be treated as 0.</p>
   */
  InitialClusterSize?: number;

  /**
   * @public
   * <p>Force to create cluster when user attempts to overprovision or underprovision a cluster. A cluster is overprovisioned or underprovisioned if the initial size of the cluster is more (overprovisioned) or less (underprovisioned) than what
   *       needed to meet capacity requirement specified with <code>OnDeviceServiceConfiguration</code>.</p>
   */
  ForceCreateJobs?: boolean;

  /**
   * @public
   * <p>Lists long-term pricing id that will be used to associate with jobs automatically created for the new cluster.</p>
   */
  LongTermPricingIds?: string[];

  /**
   * @public
   * <p>If your job is being created in one of the US regions, you have the option of
   *       specifying what size Snow device you'd like for this job. In all other regions, Snowballs come
   *       with 80 TB in storage capacity.</p>
   *          <p>For more information, see
   *       "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow
   *       Family Devices and Capacity) in the <i>Snowcone User Guide</i> or
   *       "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow
   *       Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>
   */
  SnowballCapacityPreference?: SnowballCapacity | string;
}

/**
 * @public
 * <p>Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value
 *       that indicates whether the job is a job part, in the case of an export job.</p>
 */
export interface JobListEntry {
  /**
   * @public
   * <p>The automatically generated ID for a job, for example
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The current state of this job.</p>
   */
  JobState?: JobState | string;

  /**
   * @public
   * <p>A value that indicates that this job is a main job. A main job represents a successful
   *       request to create an export job. Main jobs aren't associated with any Snowballs. Instead, each
   *       main job will have at least one job part, and each job part is associated with a Snowball. It
   *       might take some time before the job parts associated with a particular main job are listed,
   *       because they are created after the main job is created.</p>
   */
  IsMaster?: boolean;

  /**
   * @public
   * <p>The type of job.</p>
   */
  JobType?: JobType | string;

  /**
   * @public
   * <p>The type of device used with this job.</p>
   */
  SnowballType?: SnowballType | string;

  /**
   * @public
   * <p>The creation date for this job.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>The optional description of this specific job, for example <code>Important Photos
   *         2016-08-11</code>.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface CreateClusterResult {
  /**
   * @public
   * <p>The automatically generated ID for a cluster.</p>
   */
  ClusterId?: string;

  /**
   * @public
   * <p>List of jobs created for this cluster. For syntax, see <a href="http://amazonaws.com/snowball/latest/api-reference/API_ListJobs.html#API_ListJobs_ResponseSyntax">ListJobsResult$JobListEntries</a> in this guide.</p>
   */
  JobListEntries?: JobListEntry[];
}

/**
 * @public
 * <p>Your user lacks the necessary Amazon EC2 permissions to perform the attempted
 *       action.</p>
 */
export class Ec2RequestFailedException extends __BaseException {
  readonly name: "Ec2RequestFailedException" = "Ec2RequestFailedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>Job or cluster creation failed. One or more inputs were invalid. Confirm that the <a>CreateClusterRequest$SnowballType</a> value supports your <a>CreateJobRequest$JobType</a>, and try again.</p>
 */
export class InvalidInputCombinationException extends __BaseException {
  readonly name: "InvalidInputCombinationException" = "InvalidInputCombinationException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>Job creation failed. Currently, clusters support five nodes. If you have fewer than
 *       five nodes for your cluster and you have more nodes to create for this cluster, try again and
 *       create jobs until your cluster has exactly five nodes.</p>
 */
export class ClusterLimitExceededException extends __BaseException {
  readonly name: "ClusterLimitExceededException" = "ClusterLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>Configures the wireless connection on an Snowcone device.</p>
 */
export interface WirelessConnection {
  /**
   * @public
   * <p>Enables the Wi-Fi adapter on an Snowcone device.</p>
   */
  IsWifiEnabled?: boolean;
}

/**
 * @public
 * <p>Specifies the device configuration for an Snowcone job.</p>
 */
export interface SnowconeDeviceConfiguration {
  /**
   * @public
   * <p>Configures the wireless connection for the Snowcone device.</p>
   */
  WirelessConnection?: WirelessConnection;
}

/**
 * @public
 * <p>The container for <code>SnowconeDeviceConfiguration</code>. </p>
 */
export interface DeviceConfiguration {
  /**
   * @public
   * <p>Returns information about the device configuration for an Snowcone
   *       job.</p>
   */
  SnowconeDeviceConfiguration?: SnowconeDeviceConfiguration;
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
 * @public
 * <p>Information identifying the person picking up the device.</p>
 */
export interface PickupDetails {
  /**
   * @public
   * <p>The name of the person picking up the device.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The phone number of the person picking up the device.</p>
   */
  PhoneNumber?: string;

  /**
   * @public
   * <p>The email address of the person picking up the device.</p>
   */
  Email?: string;

  /**
   * @public
   * <p>The number on the credential identifying the person picking up the device.</p>
   */
  IdentificationNumber?: string;

  /**
   * @public
   * <p>Expiration date of the credential identifying the person picking up the device.</p>
   */
  IdentificationExpirationDate?: Date;

  /**
   * @public
   * <p>Organization that issued the credential identifying the person picking up the device.</p>
   */
  IdentificationIssuingOrg?: string;

  /**
   * @public
   * <p>The unique ID for a device that will be picked up.</p>
   */
  DevicePickupId?: string;
}

/**
 * @public
 */
export interface CreateJobRequest {
  /**
   * @public
   * <p>Defines the type of job that you're creating.
   *       </p>
   */
  JobType?: JobType | string;

  /**
   * @public
   * <p>Defines the Amazon S3 buckets associated with this job.</p>
   *          <p>With <code>IMPORT</code> jobs, you specify the bucket or buckets that your transferred
   *       data will be imported into.</p>
   *          <p>With <code>EXPORT</code> jobs, you specify the bucket or buckets that your transferred
   *       data will be exported from. Optionally, you can also specify a <code>KeyRange</code> value. If
   *       you choose to export a range, you define the length of the range by providing either an
   *       inclusive <code>BeginMarker</code> value, an inclusive <code>EndMarker</code> value, or both.
   *       Ranges are UTF-8 binary sorted.</p>
   */
  Resources?: JobResource;

  /**
   * @public
   * <p>Specifies the service or services on the Snow Family device that your transferred data
   *       will be exported from or imported into. Amazon Web Services Snow Family supports Amazon S3 and NFS (Network File
   *       System) and the Amazon Web Services Storage Gateway service Tape Gateway type.</p>
   */
  OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration;

  /**
   * @public
   * <p>Defines an optional description of this specific job, for example <code>Important
   *         Photos 2016-08-11</code>.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ID for the address that you want the Snow device shipped to.</p>
   */
  AddressId?: string;

  /**
   * @public
   * <p>The <code>KmsKeyARN</code> that you want to associate with this job.
   *         <code>KmsKeyARN</code>s are created using the <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html">CreateKey</a>
   *       Key Management Service (KMS) API action.</p>
   */
  KmsKeyARN?: string;

  /**
   * @public
   * <p>The <code>RoleARN</code> that you want to associate with this job.
   *       <code>RoleArn</code>s are created using the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a>
   *       Identity and Access Management (IAM) API action.</p>
   */
  RoleARN?: string;

  /**
   * @public
   * <p>If your job is being created in one of the US regions, you have the option of
   *       specifying what size Snow device you'd like for this job. In all other regions, Snowballs come
   *       with 80 TB in storage capacity.</p>
   *          <p>For more information, see
   *       "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow
   *       Family Devices and Capacity) in the <i>Snowcone User Guide</i> or
   *       "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow
   *       Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>
   */
  SnowballCapacityPreference?: SnowballCapacity | string;

  /**
   * @public
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
   */
  ShippingOption?: ShippingOption | string;

  /**
   * @public
   * <p>Defines the Amazon Simple Notification Service (Amazon SNS) notification settings for
   *       this job.</p>
   */
  Notification?: Notification;

  /**
   * @public
   * <p>The ID of a cluster. If you're creating a job for a node in a cluster, you need to
   *       provide only this <code>clusterId</code> value. The other job attributes are inherited from
   *       the cluster.</p>
   */
  ClusterId?: string;

  /**
   * @public
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
   */
  SnowballType?: SnowballType | string;

  /**
   * @public
   * <p>The forwarding address ID for a job. This field is not supported in most
   *       Regions.</p>
   */
  ForwardingAddressId?: string;

  /**
   * @public
   * <p>The tax documents required in your Amazon Web Services Region.</p>
   */
  TaxDocuments?: TaxDocuments;

  /**
   * @public
   * <p>Defines the device configuration for an Snowcone job.</p>
   *          <p>For more information, see
   *       "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow
   *       Family Devices and Capacity) in the <i>Snowcone User Guide</i> or
   *       "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow
   *       Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>
   */
  DeviceConfiguration?: DeviceConfiguration;

  /**
   * @public
   * <p>Allows you to securely operate and manage Snowcone devices remotely from outside of your
   *       internal network. When set to <code>INSTALLED_AUTOSTART</code>, remote management will
   *       automatically be available when the device arrives at your location. Otherwise, you need to
   *       use the Snowball Edge client to manage the device. When set to <code>NOT_INSTALLED</code>, remote management will not be available on the device. </p>
   */
  RemoteManagement?: RemoteManagement | string;

  /**
   * @public
   * <p>The ID of the long-term pricing type for the device.</p>
   */
  LongTermPricingId?: string;

  /**
   * @public
   * <p>The highest impact level of data that will be stored or processed on the device, provided at job creation.</p>
   */
  ImpactLevel?: ImpactLevel | string;

  /**
   * @public
   * <p>Information identifying the person picking up the device.</p>
   */
  PickupDetails?: PickupDetails;
}

/**
 * @public
 */
export interface CreateJobResult {
  /**
   * @public
   * <p>The automatically generated ID for a job, for example
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  JobId?: string;
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
   * @public
   * <p>The type of long-term pricing option you want for the device, either 1-year or 3-year
   *       long-term pricing.</p>
   */
  LongTermPricingType: LongTermPricingType | string | undefined;

  /**
   * @public
   * <p>Specifies whether the current long-term pricing type for the device should be
   *       renewed.</p>
   */
  IsLongTermPricingAutoRenew?: boolean;

  /**
   * @public
   * <p>The type of Snow Family devices to use for the long-term pricing job.</p>
   */
  SnowballType: SnowballType | string | undefined;
}

/**
 * @public
 */
export interface CreateLongTermPricingResult {
  /**
   * @public
   * <p>The ID of the long-term pricing type for the device.</p>
   */
  LongTermPricingId?: string;
}

/**
 * @public
 * <p>You get this exception when you call <code>CreateReturnShippingLabel</code> more than once
 *       when other requests are not completed.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>You get this resource when you call <code>CreateReturnShippingLabel</code> more than once when other requests are not completed. .</p>
   */
  ConflictResource?: string;

  Message?: string;
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
   * @public
   * <p>The ID for a job that you want to create the return shipping label for; for example,
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  JobId: string | undefined;

  /**
   * @public
   * <p>The shipping speed for a particular job. This speed doesn't dictate how soon the device
   *       is returned to Amazon Web Services. This speed represents how quickly it moves to its
   *       destination while in transit. Regional shipping speeds are as follows:</p>
   */
  ShippingOption?: ShippingOption | string;
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
   * @public
   * <p>The status information of the task on a Snow device that is being returned to Amazon Web Services.</p>
   */
  Status?: ShippingLabelStatus | string;
}

/**
 * @public
 * <p>You get this exception if you call <code>CreateReturnShippingLabel</code> and a valid
 *       return shipping label already exists. In this case, use
 *         <code>DescribeReturnShippingLabel</code> to get the URL.</p>
 */
export class ReturnShippingLabelAlreadyExistsException extends __BaseException {
  readonly name: "ReturnShippingLabelAlreadyExistsException" = "ReturnShippingLabelAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
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
   * @public
   * <p>The automatically generated ID for a specific address.</p>
   */
  AddressId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAddressResult {
  /**
   * @public
   * <p>The address that you want the Snow device(s) associated with a specific job to be
   *       shipped to.</p>
   */
  Address?: Address;
}

/**
 * @public
 */
export interface DescribeAddressesRequest {
  /**
   * @public
   * <p>The number of <code>ADDRESS</code> objects to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>HTTP requests are stateless. To identify what object comes "next" in the list of
   *         <code>ADDRESS</code> objects, you have the option of specifying a value for
   *         <code>NextToken</code> as the starting point for your list of returned addresses.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeAddressesResult {
  /**
   * @public
   * <p>The Snow device shipping addresses that were created for this account.</p>
   */
  Addresses?: Address[];

  /**
   * @public
   * <p>HTTP requests are stateless. If you use the automatically generated
   *         <code>NextToken</code> value in your next <code>DescribeAddresses</code> call, your list of
   *       returned addresses will start from this point in the array.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The <code>NextToken</code> string was altered unexpectedly, and the operation has
 *       stopped. Run the operation without changing the <code>NextToken</code> string, and try
 *       again.</p>
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  Message?: string;
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
   * @public
   * <p>The automatically generated ID for a cluster.</p>
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
 * @public
 * <p>Contains metadata about a specific cluster.</p>
 */
export interface ClusterMetadata {
  /**
   * @public
   * <p>The automatically generated ID for a cluster.</p>
   */
  ClusterId?: string;

  /**
   * @public
   * <p>The optional description of the cluster.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The <code>KmsKeyARN</code> Amazon Resource Name (ARN) associated with this cluster.
   *       This ARN was created using the <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html">CreateKey</a> API action in Key Management Service (KMS.</p>
   */
  KmsKeyARN?: string;

  /**
   * @public
   * <p>The role ARN associated with this cluster. This ARN was created using the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a>
   *       API action in Identity and Access Management (IAM).</p>
   */
  RoleARN?: string;

  /**
   * @public
   * <p>The current status of the cluster.</p>
   */
  ClusterState?: ClusterState | string;

  /**
   * @public
   * <p>The type of job for this cluster. Currently, the only job type supported for clusters
   *       is <code>LOCAL_USE</code>.</p>
   */
  JobType?: JobType | string;

  /**
   * @public
   * <p>The type of Snowcone device to use for this cluster.
   *       </p>
   *          <note>
   *             <p>For cluster jobs, Amazon Web Services Snow Family currently supports only the
   *           <code>EDGE</code> device type.</p>
   *          </note>
   */
  SnowballType?: SnowballType | string;

  /**
   * @public
   * <p>The creation date for this cluster.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>The arrays of <a>JobResource</a> objects that can include updated <a>S3Resource</a> objects or <a>LambdaResource</a> objects.</p>
   */
  Resources?: JobResource;

  /**
   * @public
   * <p>The automatically generated ID for a specific address.</p>
   */
  AddressId?: string;

  /**
   * @public
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
   */
  ShippingOption?: ShippingOption | string;

  /**
   * @public
   * <p>The Amazon Simple Notification Service (Amazon SNS) notification settings for this
   *       cluster.</p>
   */
  Notification?: Notification;

  /**
   * @public
   * <p>The ID of the address that you want a cluster shipped to, after it will be
   *       shipped to its primary address. This field is not supported in most regions.</p>
   */
  ForwardingAddressId?: string;

  /**
   * @public
   * <p>The tax documents required in your Amazon Web Services Region.</p>
   */
  TaxDocuments?: TaxDocuments;

  /**
   * @public
   * <p>Represents metadata and configuration settings for services on an Amazon Web Services Snow Family
   *       device.</p>
   */
  OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration;
}

/**
 * @public
 */
export interface DescribeClusterResult {
  /**
   * @public
   * <p>Information about a specific cluster, including shipping information, cluster status,
   *       and other important metadata.</p>
   */
  ClusterMetadata?: ClusterMetadata;
}

/**
 * @public
 */
export interface DescribeJobRequest {
  /**
   * @public
   * <p>The automatically generated ID for a job, for example
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 * <p>Defines the real-time status of a Snow device's data transfer while the device is at
 *         Amazon Web Services. This data is only available while a job has a <code>JobState</code>
 *       value of <code>InProgress</code>, for both import and export jobs.</p>
 */
export interface DataTransfer {
  /**
   * @public
   * <p>The number of bytes transferred between a Snow device and Amazon S3.</p>
   */
  BytesTransferred?: number;

  /**
   * @public
   * <p>The number of objects transferred between a Snow device and Amazon S3.</p>
   */
  ObjectsTransferred?: number;

  /**
   * @public
   * <p>The total bytes of data for a transfer between a Snow device and Amazon S3. This value
   *       is set to 0 (zero) until all the keys that will be transferred have been listed.</p>
   */
  TotalBytes?: number;

  /**
   * @public
   * <p>The total number of objects for a transfer between a Snow device and Amazon S3. This
   *       value is set to 0 (zero) until all the keys that will be transferred have been
   *       listed.</p>
   */
  TotalObjects?: number;
}

/**
 * @public
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
 */
export interface JobLogs {
  /**
   * @public
   * <p>A link to an Amazon S3 presigned URL where the job completion report is
   *       located.</p>
   */
  JobCompletionReportURI?: string;

  /**
   * @public
   * <p>A link to an Amazon S3 presigned URL where the job success log is located.</p>
   */
  JobSuccessLogURI?: string;

  /**
   * @public
   * <p>A link to an Amazon S3 presigned URL where the job failure log is located.</p>
   */
  JobFailureLogURI?: string;
}

/**
 * @public
 * <p>The <code>Status</code> and <code>TrackingNumber</code> information for an inbound or
 *       outbound shipment.</p>
 */
export interface Shipment {
  /**
   * @public
   * <p>Status information for a shipment.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The tracking number for this job. Using this tracking number with your region's
   *       carrier's website, you can track a Snow device as the carrier transports it.</p>
   *          <p>For India, the carrier is Amazon Logistics. For all other regions, UPS is the
   *       carrier.</p>
   */
  TrackingNumber?: string;
}

/**
 * @public
 * <p>A job's shipping information, including inbound and outbound tracking numbers and
 *       shipping speed options.</p>
 */
export interface ShippingDetails {
  /**
   * @public
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
   */
  ShippingOption?: ShippingOption | string;

  /**
   * @public
   * <p>The <code>Status</code> and <code>TrackingNumber</code> values for a Snow device being
   *       returned to Amazon Web Services for a particular job.</p>
   */
  InboundShipment?: Shipment;

  /**
   * @public
   * <p>The <code>Status</code> and <code>TrackingNumber</code> values for a Snow device being
   *       delivered to the address that you specified for a particular job.</p>
   */
  OutboundShipment?: Shipment;
}

/**
 * @public
 * <p>Contains information about a specific job including shipping information, job status,
 *       and other important metadata. This information is returned as a part of the response syntax of
 *       the <code>DescribeJob</code> action.</p>
 */
export interface JobMetadata {
  /**
   * @public
   * <p>The automatically generated ID for a job, for example
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The current status of the jobs.</p>
   */
  JobState?: JobState | string;

  /**
   * @public
   * <p>The type of job.</p>
   */
  JobType?: JobType | string;

  /**
   * @public
   * <p>The type of device used with this job.</p>
   */
  SnowballType?: SnowballType | string;

  /**
   * @public
   * <p>The creation date for this job.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>An array of <code>S3Resource</code> objects. Each <code>S3Resource</code> object
   *       represents an Amazon S3 bucket that your transferred data will be exported from or imported
   *       into.</p>
   */
  Resources?: JobResource;

  /**
   * @public
   * <p>The description of the job, provided at job creation.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the Key Management Service (KMS) key
   *       associated with this job. This ARN was created using the <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html">CreateKey</a> API action in KMS.</p>
   */
  KmsKeyARN?: string;

  /**
   * @public
   * <p>The role ARN associated with this job. This ARN was created using the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a>
   *       API action in Identity and Access Management.</p>
   */
  RoleARN?: string;

  /**
   * @public
   * <p>The ID for the address that you want the Snow device shipped to.</p>
   */
  AddressId?: string;

  /**
   * @public
   * <p>A job's shipping information, including inbound and outbound tracking numbers and
   *       shipping speed options.</p>
   */
  ShippingDetails?: ShippingDetails;

  /**
   * @public
   * <p>The Snow device capacity preference for this job, specified at job creation. In US
   *       regions, you can choose between 50 TB and 80 TB Snowballs. All other regions use 80 TB
   *       capacity Snowballs.</p>
   *          <p>For more information, see
   *       "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow
   *       Family Devices and Capacity) in the <i>Snowcone User Guide</i> or
   *       "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow
   *       Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>
   */
  SnowballCapacityPreference?: SnowballCapacity | string;

  /**
   * @public
   * <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated
   *       with a specific job. The <code>Notification</code> object is returned as a part of the
   *       response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data
   *       type.</p>
   */
  Notification?: Notification;

  /**
   * @public
   * <p>A value that defines the real-time status of a Snow device's data transfer while the
   *       device is at Amazon Web Services. This data is only available while a job has a
   *         <code>JobState</code> value of <code>InProgress</code>, for both import and export
   *       jobs.</p>
   */
  DataTransferProgress?: DataTransfer;

  /**
   * @public
   * <p>Links to Amazon S3 presigned URLs for the job report and logs. For import jobs, the PDF
   *       job report becomes available at the end of the import process. For export jobs, your job
   *       report typically becomes available while the Snow device for your job part is being delivered
   *       to you.</p>
   */
  JobLogInfo?: JobLogs;

  /**
   * @public
   * <p>The 39-character ID for the cluster, for example
   *         <code>CID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  ClusterId?: string;

  /**
   * @public
   * <p>The ID of the address that you want a job shipped to, after it will be
   *       shipped to its primary address. This field is not supported in most regions.</p>
   */
  ForwardingAddressId?: string;

  /**
   * @public
   * <p>The metadata associated with the tax documents required in your Amazon Web Services Region.</p>
   */
  TaxDocuments?: TaxDocuments;

  /**
   * @public
   * <p>The container for <code>SnowconeDeviceConfiguration</code>. </p>
   */
  DeviceConfiguration?: DeviceConfiguration;

  /**
   * @public
   * <p>Allows you to securely operate and manage Snowcone devices remotely from outside of your
   *       internal network. When set to <code>INSTALLED_AUTOSTART</code>, remote management will
   *       automatically be available when the device arrives at your location. Otherwise, you need to
   *       use the Snowball Client to manage the device.</p>
   */
  RemoteManagement?: RemoteManagement | string;

  /**
   * @public
   * <p>The ID of the long-term pricing type for the device.</p>
   */
  LongTermPricingId?: string;

  /**
   * @public
   * <p>Represents metadata and configuration settings for services on an Amazon Web Services Snow Family
   *       device.</p>
   */
  OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration;

  /**
   * @public
   * <p>The highest impact level of data that will be stored or processed on the device, provided at job creation.</p>
   */
  ImpactLevel?: ImpactLevel | string;

  /**
   * @public
   * <p>Information identifying the person picking up the device.</p>
   */
  PickupDetails?: PickupDetails;

  /**
   * @public
   * <p>Unique ID associated with a device.</p>
   */
  SnowballId?: string;
}

/**
 * @public
 */
export interface DescribeJobResult {
  /**
   * @public
   * <p>Information about a specific job, including shipping information, job status, and other
   *       important metadata.</p>
   */
  JobMetadata?: JobMetadata;

  /**
   * @public
   * <p>Information about a specific job part (in the case of an export job), including
   *       shipping information, job status, and other important metadata.</p>
   */
  SubJobMetadata?: JobMetadata[];
}

/**
 * @public
 */
export interface DescribeReturnShippingLabelRequest {
  /**
   * @public
   * <p>The automatically generated ID for a job, for example
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeReturnShippingLabelResult {
  /**
   * @public
   * <p>The status information of the task on a Snow device that is being returned to Amazon Web Services.</p>
   */
  Status?: ShippingLabelStatus | string;

  /**
   * @public
   * <p>The expiration date of the current return shipping label.</p>
   */
  ExpirationDate?: Date;

  /**
   * @public
   * <p>The pre-signed Amazon S3 URI used to download the return shipping label.</p>
   */
  ReturnShippingLabelURI?: string;
}

/**
 * @public
 */
export interface GetJobManifestRequest {
  /**
   * @public
   * <p>The ID for a job that you want to get the manifest file for, for example
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface GetJobManifestResult {
  /**
   * @public
   * <p>The Amazon S3 presigned URL for the manifest file associated with the specified
   *         <code>JobId</code> value.</p>
   */
  ManifestURI?: string;
}

/**
 * @public
 */
export interface GetJobUnlockCodeRequest {
  /**
   * @public
   * <p>The ID for the job that you want to get the <code>UnlockCode</code> value for, for
   *       example <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface GetJobUnlockCodeResult {
  /**
   * @public
   * <p>The <code>UnlockCode</code> value for the specified job. The <code>UnlockCode</code>
   *       value can be accessed for up to 360 days after the job has been created.</p>
   */
  UnlockCode?: string;
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
   * @public
   * <p>The service limit for number of Snow devices this account can have at once. The default
   *       service limit is 1 (one).</p>
   */
  SnowballLimit?: number;

  /**
   * @public
   * <p>The number of Snow devices that this account is currently using.</p>
   */
  SnowballsInUse?: number;
}

/**
 * @public
 */
export interface GetSoftwareUpdatesRequest {
  /**
   * @public
   * <p>The ID for a job that you want to get the software update file for, for example
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface GetSoftwareUpdatesResult {
  /**
   * @public
   * <p>The Amazon S3 presigned URL for the update file associated with the specified
   *         <code>JobId</code> value. The software update will be available for 2 days after this
   *       request is made. To access an update after the 2 days have passed, you'll have to make another
   *       call to <code>GetSoftwareUpdates</code>.</p>
   */
  UpdatesURI?: string;
}

/**
 * @public
 */
export interface ListClusterJobsRequest {
  /**
   * @public
   * <p>The 39-character ID for the cluster that you want to list, for example
   *         <code>CID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  ClusterId: string | undefined;

  /**
   * @public
   * <p>The number of <code>JobListEntry</code> objects to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>HTTP requests are stateless. To identify what object comes "next" in the list of
   *         <code>JobListEntry</code> objects, you have the option of specifying <code>NextToken</code>
   *       as the starting point for your returned list.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListClusterJobsResult {
  /**
   * @public
   * <p>Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value
   *       that indicates whether the job is a job part, in the case of export jobs. </p>
   */
  JobListEntries?: JobListEntry[];

  /**
   * @public
   * <p>HTTP requests are stateless. If you use the automatically generated
   *         <code>NextToken</code> value in your next <code>ListClusterJobsResult</code> call, your list
   *       of returned jobs will start from this point in the array.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListClustersRequest {
  /**
   * @public
   * <p>The number of <code>ClusterListEntry</code> objects to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>HTTP requests are stateless. To identify what object comes "next" in the list of
   *         <code>ClusterListEntry</code> objects, you have the option of specifying
   *         <code>NextToken</code> as the starting point for your returned list.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains a cluster's state, a cluster's ID, and other important information.</p>
 */
export interface ClusterListEntry {
  /**
   * @public
   * <p>The 39-character ID for the cluster that you want to list, for example
   *         <code>CID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  ClusterId?: string;

  /**
   * @public
   * <p>The current state of this cluster. For information about the state of a specific node,
   *       see <a>JobListEntry$JobState</a>.</p>
   */
  ClusterState?: ClusterState | string;

  /**
   * @public
   * <p>The creation date for this cluster.</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>Defines an optional description of the cluster, for example <code>Environmental Data
   *         Cluster-01</code>.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface ListClustersResult {
  /**
   * @public
   * <p>Each <code>ClusterListEntry</code> object contains a cluster's state, a cluster's ID,
   *       and other important status information.</p>
   */
  ClusterListEntries?: ClusterListEntry[];

  /**
   * @public
   * <p>HTTP requests are stateless. If you use the automatically generated
   *         <code>NextToken</code> value in your next <code>ClusterListEntry</code> call, your list of
   *       returned clusters will start from this point in the array.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCompatibleImagesRequest {
  /**
   * @public
   * <p>The maximum number of results for the list of compatible images. Currently, a Snowball
   *       Edge device can store 10 AMIs.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>HTTP requests are stateless. To identify what object comes "next" in the list of
   *       compatible images, you can specify a value for <code>NextToken</code> as the starting point
   *       for your list of returned images.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A JSON-formatted object that describes a compatible Amazon Machine Image (AMI),
 *       including the ID and name for a Snow device AMI. This AMI is compatible with the device's
 *       physical hardware requirements, and it should be able to be run in an SBE1 instance on the
 *       device.</p>
 */
export interface CompatibleImage {
  /**
   * @public
   * <p>The unique identifier for an individual Snow device AMI.</p>
   */
  AmiId?: string;

  /**
   * @public
   * <p>The optional name of a compatible image.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface ListCompatibleImagesResult {
  /**
   * @public
   * <p>A JSON-formatted object that describes a compatible AMI, including the ID and name for
   *       a Snow device AMI.</p>
   */
  CompatibleImages?: CompatibleImage[];

  /**
   * @public
   * <p>Because HTTP requests are stateless, this is the starting point for your next list of
   *       returned images.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListJobsRequest {
  /**
   * @public
   * <p>The number of <code>JobListEntry</code> objects to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>HTTP requests are stateless. To identify what object comes "next" in the list of
   *         <code>JobListEntry</code> objects, you have the option of specifying <code>NextToken</code>
   *       as the starting point for your returned list.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListJobsResult {
  /**
   * @public
   * <p>Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value
   *       that indicates whether the job is a job part, in the case of export jobs. </p>
   */
  JobListEntries?: JobListEntry[];

  /**
   * @public
   * <p>HTTP requests are stateless. If you use this automatically generated
   *         <code>NextToken</code> value in your next <code>ListJobs</code> call, your returned
   *         <code>JobListEntry</code> objects will start from this point in the array.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLongTermPricingRequest {
  /**
   * @public
   * <p>The maximum number of <code>ListLongTermPricing</code> objects to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Because HTTP requests are stateless, this is the starting point for your next list of
   *         <code>ListLongTermPricing</code> to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Each <code>LongTermPricingListEntry</code> object contains information about a long-term
 *       pricing type.</p>
 */
export interface LongTermPricingListEntry {
  /**
   * @public
   * <p>The ID of the long-term pricing type for the device.</p>
   */
  LongTermPricingId?: string;

  /**
   * @public
   * <p>The end date the long-term pricing contract.</p>
   */
  LongTermPricingEndDate?: Date;

  /**
   * @public
   * <p>The start date of the long-term pricing contract.</p>
   */
  LongTermPricingStartDate?: Date;

  /**
   * @public
   * <p>The type of long-term pricing that was selected for the device.</p>
   */
  LongTermPricingType?: LongTermPricingType | string;

  /**
   * @public
   * <p>The current active jobs on the device the long-term pricing type.</p>
   */
  CurrentActiveJob?: string;

  /**
   * @public
   * <p>A new device that replaces a device that is ordered with long-term pricing.</p>
   */
  ReplacementJob?: string;

  /**
   * @public
   * <p>If set to <code>true</code>, specifies that the current long-term pricing type for the
   *       device should be automatically renewed before the long-term pricing contract expires.</p>
   */
  IsLongTermPricingAutoRenew?: boolean;

  /**
   * @public
   * <p>The status of the long-term pricing type.</p>
   */
  LongTermPricingStatus?: string;

  /**
   * @public
   * <p>The type of Snow Family devices associated with this long-term pricing job.</p>
   */
  SnowballType?: SnowballType | string;

  /**
   * @public
   * <p>The IDs of the jobs that are associated with a long-term pricing type.</p>
   */
  JobIds?: string[];
}

/**
 * @public
 */
export interface ListLongTermPricingResult {
  /**
   * @public
   * <p>Each <code>LongTermPricingEntry</code> object contains a status, ID, and other information
   *       about the <code>LongTermPricing</code> type. </p>
   */
  LongTermPricingEntries?: LongTermPricingListEntry[];

  /**
   * @public
   * <p>Because HTTP requests are stateless, this is the starting point for your next list of
   *       returned <code>ListLongTermPricing</code> list.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPickupLocationsRequest {
  /**
   * @public
   * <p>The maximum number of locations to list per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>HTTP requests are stateless. To identify what object comes "next" in the list of <code>ListPickupLocationsRequest</code> objects, you have the option of specifying <code>NextToken</code> as the starting point for your returned list.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPickupLocationsResult {
  /**
   * @public
   * <p>Information about the address of pickup locations.</p>
   */
  Addresses?: Address[];

  /**
   * @public
   * <p>HTTP requests are stateless. To identify what object comes "next" in the list of <code>ListPickupLocationsResult</code> objects, you have the option of specifying <code>NextToken</code> as the starting point for your returned list.</p>
   */
  NextToken?: string;
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
 * @public
 * <p>The version of the requested service.</p>
 */
export interface ServiceVersion {
  /**
   * @public
   * <p>The version number of the requested service.</p>
   */
  Version?: string;
}

/**
 * @public
 * <p>The name and version of the service dependant on the requested service.</p>
 */
export interface DependentService {
  /**
   * @public
   * <p>The name of the dependent service.</p>
   */
  ServiceName?: ServiceName | string;

  /**
   * @public
   * <p>The version of the dependent service.</p>
   */
  ServiceVersion?: ServiceVersion;
}

/**
 * @public
 */
export interface ListServiceVersionsRequest {
  /**
   * @public
   * <p>The name of the service for which you're requesting supported versions.</p>
   */
  ServiceName: ServiceName | string | undefined;

  /**
   * @public
   * <p>A list of names and versions of dependant services of the requested service.</p>
   */
  DependentServices?: DependentService[];

  /**
   * @public
   * <p>The maximum number of <code>ListServiceVersions</code> objects to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Because HTTP requests are stateless, this is the starting point for the next list of returned
   *       <code>ListServiceVersionsRequest</code> versions.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListServiceVersionsResult {
  /**
   * @public
   * <p>A list of supported versions.</p>
   */
  ServiceVersions: ServiceVersion[] | undefined;

  /**
   * @public
   * <p>The name of the service for which the system provided supported versions.</p>
   */
  ServiceName: ServiceName | string | undefined;

  /**
   * @public
   * <p>A list of names and versions of dependant services of the service for which the system provided supported versions.</p>
   */
  DependentServices?: DependentService[];

  /**
   * @public
   * <p>Because HTTP requests are stateless, this is the starting point of the next list of returned
   *       <code>ListServiceVersionsResult</code> results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface UpdateClusterRequest {
  /**
   * @public
   * <p>The cluster ID of the cluster that you want to update, for example
   *         <code>CID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  ClusterId: string | undefined;

  /**
   * @public
   * <p>The new role Amazon Resource Name (ARN) that you want to associate with this cluster.
   *       To create a role ARN, use the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a> API action in Identity and Access Management (IAM).</p>
   */
  RoleARN?: string;

  /**
   * @public
   * <p>The updated description of this cluster.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The updated arrays of <a>JobResource</a> objects that can include updated
   *         <a>S3Resource</a> objects or <a>LambdaResource</a> objects.</p>
   */
  Resources?: JobResource;

  /**
   * @public
   * <p>Specifies the service or services on the Snow Family device that your transferred data
   *       will be exported from or imported into. Amazon Web Services Snow Family device clusters support Amazon S3 and NFS
   *       (Network File System).</p>
   */
  OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration;

  /**
   * @public
   * <p>The ID of the updated <a>Address</a> object.</p>
   */
  AddressId?: string;

  /**
   * @public
   * <p>The updated shipping option value of this cluster's <a>ShippingDetails</a>
   *       object.</p>
   */
  ShippingOption?: ShippingOption | string;

  /**
   * @public
   * <p>The new or updated <a>Notification</a> object.</p>
   */
  Notification?: Notification;

  /**
   * @public
   * <p>The updated ID for the forwarding address for a cluster. This field is not
   *       supported in most regions.</p>
   */
  ForwardingAddressId?: string;
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
   * @public
   * <p>The job ID of the job that you want to update, for example
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  JobId: string | undefined;

  /**
   * @public
   * <p>The new role Amazon Resource Name (ARN) that you want to associate with this job. To
   *       create a role ARN, use the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a>Identity and Access Management
   *       (IAM) API action.</p>
   */
  RoleARN?: string;

  /**
   * @public
   * <p>The new or updated <a>Notification</a> object.</p>
   */
  Notification?: Notification;

  /**
   * @public
   * <p>The updated <code>JobResource</code> object, or the updated <a>JobResource</a> object. </p>
   */
  Resources?: JobResource;

  /**
   * @public
   * <p>Specifies the service or services on the Snow Family device that your transferred data
   *       will be exported from or imported into. Amazon Web Services Snow Family supports Amazon S3 and NFS (Network File
   *       System) and the Amazon Web Services Storage Gateway service Tape Gateway type.</p>
   */
  OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration;

  /**
   * @public
   * <p>The ID of the updated <a>Address</a> object.</p>
   */
  AddressId?: string;

  /**
   * @public
   * <p>The updated shipping option value of this job's <a>ShippingDetails</a>
   *       object.</p>
   */
  ShippingOption?: ShippingOption | string;

  /**
   * @public
   * <p>The updated description of this job's <a>JobMetadata</a> object.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The updated <code>SnowballCapacityPreference</code> of this job's <a>JobMetadata</a> object. The 50 TB Snowballs are only available in the US
   *       regions.</p>
   *          <p>For more information, see
   *       "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow
   *       Family Devices and Capacity) in the <i>Snowcone User Guide</i> or
   *       "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow
   *       Family Devices and Capacity) in the <i>Snowcone User Guide</i>.</p>
   */
  SnowballCapacityPreference?: SnowballCapacity | string;

  /**
   * @public
   * <p>The updated ID for the forwarding address for a job. This field is not
   *       supported in most regions.</p>
   */
  ForwardingAddressId?: string;

  /**
   * @public
   * <p>Information identifying the person picking up the device.</p>
   */
  PickupDetails?: PickupDetails;
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
   * @public
   * <p>The job ID of the job whose shipment date you want to update, for example
   *         <code>JID123e4567-e89b-12d3-a456-426655440000</code>.</p>
   */
  JobId: string | undefined;

  /**
   * @public
   * <p>The state of a device when it is being shipped. </p>
   *          <p>Set to <code>RECEIVED</code> when the device arrives at your location.</p>
   *          <p>Set to <code>RETURNED</code> when you have returned the device to Amazon Web Services.</p>
   */
  ShipmentState: ShipmentState | string | undefined;
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
   * @public
   * <p>The ID of the long-term pricing type for the device.</p>
   */
  LongTermPricingId: string | undefined;

  /**
   * @public
   * <p>Specifies that a device that is ordered with long-term pricing should be replaced with a
   *       new device.</p>
   */
  ReplacementJob?: string;

  /**
   * @public
   * <p>If set to <code>true</code>, specifies that the current long-term pricing type for the
   *       device should be automatically renewed before the long-term pricing contract expires.</p>
   */
  IsLongTermPricingAutoRenew?: boolean;
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
