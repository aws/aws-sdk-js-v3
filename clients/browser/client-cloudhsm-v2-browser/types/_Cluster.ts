import { _Hsm, _UnmarshalledHsm } from "./_Hsm";
import { _Certificates, _UnmarshalledCertificates } from "./_Certificates";

/**
 * <p>Contains information about an AWS CloudHSM cluster.</p>
 */
export interface _Cluster {
  /**
   * <p>The cluster's backup policy.</p>
   */
  BackupPolicy?: "DEFAULT" | string;

  /**
   * <p>The cluster's identifier (ID).</p>
   */
  ClusterId?: string;

  /**
   * <p>The date and time when the cluster was created.</p>
   */
  CreateTimestamp?: Date | string | number;

  /**
   * <p>Contains information about the HSMs in the cluster.</p>
   */
  Hsms?: Array<_Hsm> | Iterable<_Hsm>;

  /**
   * <p>The type of HSM that the cluster contains.</p>
   */
  HsmType?: string;

  /**
   * <p>The default password for the cluster's Pre-Crypto Officer (PRECO) user.</p>
   */
  PreCoPassword?: string;

  /**
   * <p>The identifier (ID) of the cluster's security group.</p>
   */
  SecurityGroup?: string;

  /**
   * <p>The identifier (ID) of the backup used to create the cluster. This value exists only when the cluster was created from a backup.</p>
   */
  SourceBackupId?: string;

  /**
   * <p>The cluster's state.</p>
   */
  State?:
    | "CREATE_IN_PROGRESS"
    | "UNINITIALIZED"
    | "INITIALIZE_IN_PROGRESS"
    | "INITIALIZED"
    | "ACTIVE"
    | "UPDATE_IN_PROGRESS"
    | "DELETE_IN_PROGRESS"
    | "DELETED"
    | "DEGRADED"
    | string;

  /**
   * <p>A description of the cluster's state.</p>
   */
  StateMessage?: string;

  /**
   * <p>A map of the cluster's subnets and their corresponding Availability Zones.</p>
   */
  SubnetMapping?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The identifier (ID) of the virtual private cloud (VPC) that contains the cluster.</p>
   */
  VpcId?: string;

  /**
   * <p>Contains one or more certificates or a certificate signing request (CSR).</p>
   */
  Certificates?: _Certificates;
}

export interface _UnmarshalledCluster extends _Cluster {
  /**
   * <p>The date and time when the cluster was created.</p>
   */
  CreateTimestamp?: Date;

  /**
   * <p>Contains information about the HSMs in the cluster.</p>
   */
  Hsms?: Array<_UnmarshalledHsm>;

  /**
   * <p>A map of the cluster's subnets and their corresponding Availability Zones.</p>
   */
  SubnetMapping?: { [key: string]: string };

  /**
   * <p>Contains one or more certificates or a certificate signing request (CSR).</p>
   */
  Certificates?: _UnmarshalledCertificates;
}
