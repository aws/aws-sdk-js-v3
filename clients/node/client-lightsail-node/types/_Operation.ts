import {
  _ResourceLocation,
  _UnmarshalledResourceLocation
} from "./_ResourceLocation";

/**
 * <p>Describes the API operation.</p>
 */
export interface _Operation {
  /**
   * <p>The ID of the operation.</p>
   */
  id?: string;

  /**
   * <p>The resource name.</p>
   */
  resourceName?: string;

  /**
   * <p>The resource type. </p>
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
   * <p>The timestamp when the operation was initialized (e.g., <code>1479816991.349</code>).</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The region and Availability Zone.</p>
   */
  location?: _ResourceLocation;

  /**
   * <p>A Boolean value indicating whether the operation is terminal.</p>
   */
  isTerminal?: boolean;

  /**
   * <p>Details about the operation (e.g., <code>Debian-1GB-Ohio-1</code>).</p>
   */
  operationDetails?: string;

  /**
   * <p>The type of operation. </p>
   */
  operationType?:
    | "DeleteKnownHostKeys"
    | "DeleteInstance"
    | "CreateInstance"
    | "StopInstance"
    | "StartInstance"
    | "RebootInstance"
    | "OpenInstancePublicPorts"
    | "PutInstancePublicPorts"
    | "CloseInstancePublicPorts"
    | "AllocateStaticIp"
    | "ReleaseStaticIp"
    | "AttachStaticIp"
    | "DetachStaticIp"
    | "UpdateDomainEntry"
    | "DeleteDomainEntry"
    | "CreateDomain"
    | "DeleteDomain"
    | "CreateInstanceSnapshot"
    | "DeleteInstanceSnapshot"
    | "CreateInstancesFromSnapshot"
    | "CreateLoadBalancer"
    | "DeleteLoadBalancer"
    | "AttachInstancesToLoadBalancer"
    | "DetachInstancesFromLoadBalancer"
    | "UpdateLoadBalancerAttribute"
    | "CreateLoadBalancerTlsCertificate"
    | "DeleteLoadBalancerTlsCertificate"
    | "AttachLoadBalancerTlsCertificate"
    | "CreateDisk"
    | "DeleteDisk"
    | "AttachDisk"
    | "DetachDisk"
    | "CreateDiskSnapshot"
    | "DeleteDiskSnapshot"
    | "CreateDiskFromSnapshot"
    | "CreateRelationalDatabase"
    | "UpdateRelationalDatabase"
    | "DeleteRelationalDatabase"
    | "CreateRelationalDatabaseFromSnapshot"
    | "CreateRelationalDatabaseSnapshot"
    | "DeleteRelationalDatabaseSnapshot"
    | "UpdateRelationalDatabaseParameters"
    | "StartRelationalDatabase"
    | "RebootRelationalDatabase"
    | "StopRelationalDatabase"
    | string;

  /**
   * <p>The status of the operation. </p>
   */
  status?:
    | "NotStarted"
    | "Started"
    | "Failed"
    | "Completed"
    | "Succeeded"
    | string;

  /**
   * <p>The timestamp when the status was changed (e.g., <code>1479816991.349</code>).</p>
   */
  statusChangedAt?: Date | string | number;

  /**
   * <p>The error code.</p>
   */
  errorCode?: string;

  /**
   * <p>The error details.</p>
   */
  errorDetails?: string;
}

export interface _UnmarshalledOperation extends _Operation {
  /**
   * <p>The timestamp when the operation was initialized (e.g., <code>1479816991.349</code>).</p>
   */
  createdAt?: Date;

  /**
   * <p>The region and Availability Zone.</p>
   */
  location?: _UnmarshalledResourceLocation;

  /**
   * <p>The timestamp when the status was changed (e.g., <code>1479816991.349</code>).</p>
   */
  statusChangedAt?: Date;
}
