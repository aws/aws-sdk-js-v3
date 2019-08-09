import {
  _ResourceLocation,
  _UnmarshalledResourceLocation
} from "./_ResourceLocation";
import {
  _ExportSnapshotRecordSourceInfo,
  _UnmarshalledExportSnapshotRecordSourceInfo
} from "./_ExportSnapshotRecordSourceInfo";
import {
  _DestinationInfo,
  _UnmarshalledDestinationInfo
} from "./_DestinationInfo";

/**
 * <p>Describes an export snapshot record.</p>
 */
export interface _ExportSnapshotRecord {
  /**
   * <p>The export snapshot record name.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the export snapshot record.</p>
   */
  arn?: string;

  /**
   * <p>The date when the export snapshot record was created.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The AWS Region and Availability Zone where the export snapshot record is located.</p>
   */
  location?: _ResourceLocation;

  /**
   * <p>The Lightsail resource type (e.g., <code>ExportSnapshotRecord</code>).</p>
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
   * <p>The state of the export snapshot record.</p>
   */
  state?: "Started" | "Succeeded" | "Failed" | string;

  /**
   * <p>A list of objects describing the source of the export snapshot record.</p>
   */
  sourceInfo?: _ExportSnapshotRecordSourceInfo;

  /**
   * <p>A list of objects describing the destination of the export snapshot record.</p>
   */
  destinationInfo?: _DestinationInfo;
}

export interface _UnmarshalledExportSnapshotRecord
  extends _ExportSnapshotRecord {
  /**
   * <p>The date when the export snapshot record was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The AWS Region and Availability Zone where the export snapshot record is located.</p>
   */
  location?: _UnmarshalledResourceLocation;

  /**
   * <p>A list of objects describing the source of the export snapshot record.</p>
   */
  sourceInfo?: _UnmarshalledExportSnapshotRecordSourceInfo;

  /**
   * <p>A list of objects describing the destination of the export snapshot record.</p>
   */
  destinationInfo?: _UnmarshalledDestinationInfo;
}
