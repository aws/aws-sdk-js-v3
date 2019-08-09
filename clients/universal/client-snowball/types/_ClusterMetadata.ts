import { _JobResource, _UnmarshalledJobResource } from "./_JobResource";
import { _Notification, _UnmarshalledNotification } from "./_Notification";

/**
 * <p>Contains metadata about a specific cluster.</p>
 */
export interface _ClusterMetadata {
  /**
   * <p>The automatically generated ID for a cluster.</p>
   */
  ClusterId?: string;

  /**
   * <p>The optional description of the cluster.</p>
   */
  Description?: string;

  /**
   * <p>The <code>KmsKeyARN</code> Amazon Resource Name (ARN) associated with this cluster. This ARN was created using the <a href="http://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html">CreateKey</a> API action in AWS Key Management Service (AWS KMS).</p>
   */
  KmsKeyARN?: string;

  /**
   * <p>The role ARN associated with this cluster. This ARN was created using the <a href="http://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a> API action in AWS Identity and Access Management (IAM).</p>
   */
  RoleARN?: string;

  /**
   * <p>The current status of the cluster.</p>
   */
  ClusterState?:
    | "AwaitingQuorum"
    | "Pending"
    | "InUse"
    | "Complete"
    | "Cancelled"
    | string;

  /**
   * <p>The type of job for this cluster. Currently, the only job type supported for clusters is <code>LOCAL_USE</code>.</p>
   */
  JobType?: "IMPORT" | "EXPORT" | "LOCAL_USE" | string;

  /**
   * <p>The type of AWS Snowball device to use for this cluster. The only supported device types for cluster jobs are <code>EDGE</code>, <code>EDGE_C</code>, and <code>EDGE_CG</code>.</p>
   */
  SnowballType?: "STANDARD" | "EDGE" | "EDGE_C" | "EDGE_CG" | string;

  /**
   * <p>The creation date for this cluster.</p>
   */
  CreationDate?: Date | string | number;

  /**
   * <p>The arrays of <a>JobResource</a> objects that can include updated <a>S3Resource</a> objects or <a>LambdaResource</a> objects.</p>
   */
  Resources?: _JobResource;

  /**
   * <p>The automatically generated ID for a specific address.</p>
   */
  AddressId?: string;

  /**
   * <p>The shipping speed for each node in this cluster. This speed doesn't dictate how soon you'll get each device, rather it represents how quickly each device moves to its destination while in transit. Regional shipping speeds are as follows:</p> <ul> <li> <p>In Australia, you have access to express shipping. Typically, devices shipped express are delivered in about a day.</p> </li> <li> <p>In the European Union (EU), you have access to express shipping. Typically, devices shipped express are delivered in about a day. In addition, most countries in the EU have access to standard shipping, which typically takes less than a week, one way.</p> </li> <li> <p>In India, devices are delivered in one to seven days.</p> </li> <li> <p>In the US, you have access to one-day shipping and two-day shipping.</p> </li> </ul>
   */
  ShippingOption?: "SECOND_DAY" | "NEXT_DAY" | "EXPRESS" | "STANDARD" | string;

  /**
   * <p>The Amazon Simple Notification Service (Amazon SNS) notification settings for this cluster.</p>
   */
  Notification?: _Notification;

  /**
   * <p>The ID of the address that you want a cluster shipped to, after it will be shipped to its primary address. This field is not supported in most regions.</p>
   */
  ForwardingAddressId?: string;
}

export interface _UnmarshalledClusterMetadata extends _ClusterMetadata {
  /**
   * <p>The creation date for this cluster.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The arrays of <a>JobResource</a> objects that can include updated <a>S3Resource</a> objects or <a>LambdaResource</a> objects.</p>
   */
  Resources?: _UnmarshalledJobResource;

  /**
   * <p>The Amazon Simple Notification Service (Amazon SNS) notification settings for this cluster.</p>
   */
  Notification?: _UnmarshalledNotification;
}
