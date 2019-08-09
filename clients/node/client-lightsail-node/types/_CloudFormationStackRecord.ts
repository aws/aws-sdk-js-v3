import {
  _ResourceLocation,
  _UnmarshalledResourceLocation
} from "./_ResourceLocation";
import {
  _CloudFormationStackRecordSourceInfo,
  _UnmarshalledCloudFormationStackRecordSourceInfo
} from "./_CloudFormationStackRecordSourceInfo";
import {
  _DestinationInfo,
  _UnmarshalledDestinationInfo
} from "./_DestinationInfo";

/**
 * <p>Describes a CloudFormation stack record created as a result of the <code>create cloud formation stack</code> operation.</p> <p>A CloudFormation stack record provides information about the AWS CloudFormation stack used to create a new Amazon Elastic Compute Cloud instance from an exported Lightsail instance snapshot.</p>
 */
export interface _CloudFormationStackRecord {
  /**
   * <p>The name of the CloudFormation stack record. It starts with <code>CloudFormationStackRecord</code> followed by a GUID.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudFormation stack record.</p>
   */
  arn?: string;

  /**
   * <p>The date when the CloudFormation stack record was created.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>A list of objects describing the Availability Zone and AWS Region of the CloudFormation stack record.</p>
   */
  location?: _ResourceLocation;

  /**
   * <p>The Lightsail resource type (e.g., <code>CloudFormationStackRecord</code>).</p>
   */
  resourceType?:
    | "Instance"
    | "StaticIp"
    | "KeyPair"
    | "InstanceSnapshot"
    | "Domain"
    | "PeeredVpc"
    | "LoadBalancer"
    | "LoadBalancerTlsCertificate"
    | "Disk"
    | "DiskSnapshot"
    | "RelationalDatabase"
    | "RelationalDatabaseSnapshot"
    | "ExportSnapshotRecord"
    | "CloudFormationStackRecord"
    | string;

  /**
   * <p>The current state of the CloudFormation stack record.</p>
   */
  state?: "Started" | "Succeeded" | "Failed" | string;

  /**
   * <p>A list of objects describing the source of the CloudFormation stack record.</p>
   */
  sourceInfo?:
    | Array<_CloudFormationStackRecordSourceInfo>
    | Iterable<_CloudFormationStackRecordSourceInfo>;

  /**
   * <p>A list of objects describing the destination service, which is AWS CloudFormation, and the Amazon Resource Name (ARN) of the AWS CloudFormation stack.</p>
   */
  destinationInfo?: _DestinationInfo;
}

export interface _UnmarshalledCloudFormationStackRecord
  extends _CloudFormationStackRecord {
  /**
   * <p>The date when the CloudFormation stack record was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>A list of objects describing the Availability Zone and AWS Region of the CloudFormation stack record.</p>
   */
  location?: _UnmarshalledResourceLocation;

  /**
   * <p>A list of objects describing the source of the CloudFormation stack record.</p>
   */
  sourceInfo?: Array<_UnmarshalledCloudFormationStackRecordSourceInfo>;

  /**
   * <p>A list of objects describing the destination service, which is AWS CloudFormation, and the Amazon Resource Name (ARN) of the AWS CloudFormation stack.</p>
   */
  destinationInfo?: _UnmarshalledDestinationInfo;
}
