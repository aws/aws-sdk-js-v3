// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { EvsServiceException as __BaseException } from "./EvsServiceException";

/**
 * <p>The connectivity configuration for the environment. Amazon EVS requires that you specify two route server peer IDs. During environment creation, the route server endpoints peer with the NSX uplink VLAN for connectivity to the NSX overlay network.</p>
 * @public
 */
export interface ConnectivityInfo {
  /**
   * <p>The unique IDs for private route server peers.</p>
   * @public
   */
  privateRouteServerPeerings: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const _InstanceType = {
  I4I_METAL: "i4i.metal",
} as const;

/**
 * @public
 */
export type _InstanceType = (typeof _InstanceType)[keyof typeof _InstanceType];

/**
 * <p>An object that represents a host.</p> <note> <p>You cannot use <code>dedicatedHostId</code> and <code>placementGroupId</code> together in the same <code>HostInfoForCreate</code>object. This results in a <code>ValidationException</code> response.</p> </note>
 * @public
 */
export interface HostInfoForCreate {
  /**
   * <p>The DNS hostname of the host. DNS hostnames for hosts must be unique across Amazon EVS environments and within VCF.</p>
   * @public
   */
  hostName: string | undefined;

  /**
   * <p>The name of the SSH key that is used to access the host.</p>
   * @public
   */
  keyName: string | undefined;

  /**
   * <p>The EC2 instance type that represents the host.</p>
   * @public
   */
  instanceType: _InstanceType | undefined;

  /**
   * <p>The unique ID of the placement group where the host is placed.</p>
   * @public
   */
  placementGroupId?: string | undefined;

  /**
   * <p>The unique ID of the Amazon EC2 Dedicated Host.</p>
   * @public
   */
  dedicatedHostId?: string | undefined;
}

/**
 * <p>An object that represents an initial VLAN subnet for the Amazon EVS environment. Amazon EVS creates initial VLAN subnets when you first create the environment. Amazon EVS creates the following 10 VLAN subnets: host management VLAN, vMotion VLAN, vSAN VLAN, VTEP VLAN, Edge VTEP VLAN, Management VM VLAN, HCX uplink VLAN, NSX uplink VLAN, expansion VLAN 1, expansion VLAN 2.</p> <note> <p>For each Amazon EVS VLAN subnet, you must specify a non-overlapping CIDR block. Amazon EVS VLAN subnets have a minimum CIDR block size of /28 and a maximum size of /24.</p> </note>
 * @public
 */
export interface InitialVlanInfo {
  /**
   * <p> The CIDR block that you provide to create an Amazon EVS VLAN subnet. Amazon EVS VLAN subnets have a minimum CIDR block size of /28 and a maximum size of /24. Amazon EVS VLAN subnet CIDR blocks must not overlap with other subnets in the VPC.</p>
   * @public
   */
  cidr: string | undefined;
}

/**
 * <p>The initial VLAN subnets for the environment. Amazon EVS VLAN subnets have a minimum CIDR block size of /28 and a maximum size of /24. Amazon EVS VLAN subnet CIDR blocks must not overlap with other subnets in the VPC.</p>
 * @public
 */
export interface InitialVlans {
  /**
   * <p> The host VMkernel management VLAN subnet. This VLAN subnet carries traffic for managing ESXi hosts and communicating with VMware vCenter Server.</p>
   * @public
   */
  vmkManagement: InitialVlanInfo | undefined;

  /**
   * <p>The VM management VLAN subnet. This VLAN subnet carries traffic for vSphere virtual machines.</p>
   * @public
   */
  vmManagement: InitialVlanInfo | undefined;

  /**
   * <p> The vMotion VLAN subnet. This VLAN subnet carries traffic for vSphere vMotion.</p>
   * @public
   */
  vMotion: InitialVlanInfo | undefined;

  /**
   * <p> The vSAN VLAN subnet. This VLAN subnet carries the communication between ESXi hosts to implement a vSAN shared storage pool.</p>
   * @public
   */
  vSan: InitialVlanInfo | undefined;

  /**
   * <p> The VTEP VLAN subnet. This VLAN subnet handles internal network traffic between virtual machines within a VCF instance.</p>
   * @public
   */
  vTep: InitialVlanInfo | undefined;

  /**
   * <p>The edge VTEP VLAN subnet. This VLAN subnet manages traffic flowing between the internal network and external networks, including internet access and other site connections.</p>
   * @public
   */
  edgeVTep: InitialVlanInfo | undefined;

  /**
   * <p> The NSX uplink VLAN subnet. This VLAN subnet allows connectivity to the NSX overlay network.</p>
   * @public
   */
  nsxUplink: InitialVlanInfo | undefined;

  /**
   * <p>The HCX VLAN subnet. This VLAN subnet allows the HCX Interconnnect (IX) and HCX Network Extension (NE) to reach their peers and enable HCX Service Mesh creation.</p>
   * @public
   */
  hcx: InitialVlanInfo | undefined;

  /**
   * <p>An additional VLAN subnet that can be used to extend VCF capabilities once configured. For example, you can configure an expansion VLAN subnet to use NSX Federation for centralized management and synchronization of multiple NSX deployments across different locations.</p>
   * @public
   */
  expansionVlan1: InitialVlanInfo | undefined;

  /**
   * <p>An additional VLAN subnet that can be used to extend VCF capabilities once configured. For example, you can configure an expansion VLAN subnet to use NSX Federation for centralized management and synchronization of multiple NSX deployments across different locations.</p>
   * @public
   */
  expansionVlan2: InitialVlanInfo | undefined;
}

/**
 * <p> The license information that Amazon EVS requires to create an environment. Amazon EVS requires two license keys: a VCF solution key and a vSAN license key.</p>
 * @public
 */
export interface LicenseInfo {
  /**
   * <p> The VCF solution key. This license unlocks VMware VCF product features, including vSphere, NSX, SDDC Manager, and vCenter Server. The VCF solution key must cover a minimum of 256 cores.</p>
   * @public
   */
  solutionKey: string | undefined;

  /**
   * <p> The VSAN license key. This license unlocks vSAN features. The vSAN license key must provide at least 110 TiB of vSAN capacity.</p>
   * @public
   */
  vsanKey: string | undefined;
}

/**
 * <p>The security groups that allow traffic between the Amazon EVS control plane and your VPC for Amazon EVS service access. If a security group is not specified, Amazon EVS uses the default security group in your account for service access.</p>
 * @public
 */
export interface ServiceAccessSecurityGroups {
  /**
   * <p>The security groups that allow service access.</p>
   * @public
   */
  securityGroups?: string[] | undefined;
}

/**
 * <p>The DNS hostnames that Amazon EVS uses to install VMware vCenter Server, NSX, SDDC Manager, and Cloud Builder. Each hostname must be unique, and resolve to a domain name that you've registered in your DNS service of choice. Hostnames cannot be changed.</p> <p>VMware VCF requires the deployment of two NSX Edge nodes, and three NSX Manager virtual machines.</p>
 * @public
 */
export interface VcfHostnames {
  /**
   * <p>The VMware vCenter hostname.</p>
   * @public
   */
  vCenter: string | undefined;

  /**
   * <p>The VMware NSX hostname.</p>
   * @public
   */
  nsx: string | undefined;

  /**
   * <p>The hostname for the first VMware NSX Manager virtual machine (VM).</p>
   * @public
   */
  nsxManager1: string | undefined;

  /**
   * <p>The hostname for the second VMware NSX Manager virtual machine (VM).</p>
   * @public
   */
  nsxManager2: string | undefined;

  /**
   * <p>The hostname for the third VMware NSX Manager virtual machine (VM).</p>
   * @public
   */
  nsxManager3: string | undefined;

  /**
   * <p>The hostname for the first NSX Edge node.</p>
   * @public
   */
  nsxEdge1: string | undefined;

  /**
   * <p>The hostname for the second NSX Edge node.</p>
   * @public
   */
  nsxEdge2: string | undefined;

  /**
   * <p>The hostname for SDDC Manager.</p>
   * @public
   */
  sddcManager: string | undefined;

  /**
   * <p>The hostname for VMware Cloud Builder.</p>
   * @public
   */
  cloudBuilder: string | undefined;
}

/**
 * @public
 * @enum
 */
export const VcfVersion = {
  VCF_5_2_1: "VCF-5.2.1",
} as const;

/**
 * @public
 */
export type VcfVersion = (typeof VcfVersion)[keyof typeof VcfVersion];

/**
 * @public
 */
export interface CreateEnvironmentRequest {
  /**
   * <note> <p>This parameter is not used in Amazon EVS currently. If you supply input for this parameter, it will have no effect.</p> </note> <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the environment creation request. If you do not specify a client token, a randomly generated token is used for the request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The name to give to your environment. The name can contain only alphanumeric characters (case-sensitive), hyphens, and underscores. It must start with an alphanumeric character, and can't be longer than 100 characters. The name must be unique within the Amazon Web Services Region and Amazon Web Services account that you're creating the environment in.</p>
   * @public
   */
  environmentName?: string | undefined;

  /**
   * <p>A unique ID for the customer-managed KMS key that is used to encrypt the VCF credential pairs for SDDC Manager, NSX Manager, and vCenter appliances. These credentials are stored in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The security group that controls communication between the Amazon EVS control plane and VPC. The default security group is used if a custom security group isn't specified.</p> <p>The security group should allow access to the following.</p> <ul> <li> <p>TCP/UDP access to the DNS servers</p> </li> <li> <p>HTTPS/SSH access to the host management VLAN subnet</p> </li> <li> <p>HTTPS/SSH access to the Management VM VLAN subnet</p> </li> </ul> <p>You should avoid modifying the security group rules after deployment, as this can break the persistent connection between the Amazon EVS control plane and VPC. This can cause future environment actions like adding or removing hosts to fail.</p>
   * @public
   */
  serviceAccessSecurityGroups?: ServiceAccessSecurityGroups | undefined;

  /**
   * <p>A unique ID for the VPC that the environment is deployed inside.</p> <p>Amazon EVS requires that all VPC subnets exist in a single Availability Zone in a Region where the service is available.</p> <p>The VPC that you specify must have a valid DHCP option set with domain name, at least two DNS servers, and an NTP server. These settings are used to configure your VCF appliances and hosts. The VPC cannot be used with any other deployed Amazon EVS environment. Amazon EVS does not provide multi-VPC support for environments at this time.</p> <p>Amazon EVS does not support the following Amazon Web Services networking options for NSX overlay connectivity: cross-Region VPC peering, Amazon S3 gateway endpoints, or Amazon Web Services Direct Connect virtual private gateway associations.</p> <note> <p>Ensure that you specify a VPC that is adequately sized to accommodate the \{evws\} subnets.</p> </note>
   * @public
   */
  vpcId: string | undefined;

  /**
   * <p>The subnet that is used to establish connectivity between the Amazon EVS control plane and VPC. Amazon EVS uses this subnet to validate mandatory DNS records for your VCF appliances and hosts and create the environment.</p>
   * @public
   */
  serviceAccessSubnetId: string | undefined;

  /**
   * <p> The VCF version to use for the environment. Amazon EVS only supports VCF version 5.2.1 at this time.</p>
   * @public
   */
  vcfVersion: VcfVersion | undefined;

  /**
   * <p>Customer confirmation that the customer has purchased and will continue to maintain the required number of VCF software licenses to cover all physical processor cores in the Amazon EVS environment. Information about your VCF software in Amazon EVS will be shared with Broadcom to verify license compliance. Amazon EVS does not validate license keys. To validate license keys, visit the Broadcom support portal.</p>
   * @public
   */
  termsAccepted: boolean | undefined;

  /**
   * <p>The license information that Amazon EVS requires to create an environment. Amazon EVS requires two license keys: a VCF solution key and a vSAN license key. The VCF solution key must cover a minimum of 256 cores. The vSAN license key must provide at least 110 TiB of vSAN capacity.</p> <p>VCF licenses can be used for only one Amazon EVS environment. Amazon EVS does not support reuse of VCF licenses for multiple environments.</p> <p>VCF license information can be retrieved from the Broadcom portal.</p>
   * @public
   */
  licenseInfo: LicenseInfo[] | undefined;

  /**
   * <p>The initial VLAN subnets for the Amazon EVS environment.</p> <note> <p>For each Amazon EVS VLAN subnet, you must specify a non-overlapping CIDR block. Amazon EVS VLAN subnets have a minimum CIDR block size of /28 and a maximum size of /24.</p> </note>
   * @public
   */
  initialVlans: InitialVlans | undefined;

  /**
   * <p>The ESXi hosts to add to the environment. Amazon EVS requires that you provide details for a minimum of 4 hosts during environment creation.</p> <p>For each host, you must provide the desired hostname, EC2 SSH keypair name, and EC2 instance type. Optionally, you can also provide a partition or cluster placement group to use, or use Amazon EC2 Dedicated Hosts.</p>
   * @public
   */
  hosts: HostInfoForCreate[] | undefined;

  /**
   * <p> The connectivity configuration for the environment. Amazon EVS requires that you specify two route server peer IDs. During environment creation, the route server endpoints peer with the NSX edges over the NSX uplink subnet, providing BGP-based dynamic routing for overlay networks.</p>
   * @public
   */
  connectivityInfo: ConnectivityInfo | undefined;

  /**
   * <p>The DNS hostnames for the virtual machines that host the VCF management appliances. Amazon EVS requires that you provide DNS hostnames for the following appliances: vCenter, NSX Manager, SDDC Manager, and Cloud Builder.</p>
   * @public
   */
  vcfHostnames: VcfHostnames | undefined;

  /**
   * <p>The Broadcom Site ID that is allocated to you as part of your electronic software delivery. This ID allows customer access to the Broadcom portal, and is provided to you by Broadcom at the close of your software contract or contract renewal. Amazon EVS uses the Broadcom Site ID that you provide to meet Broadcom VCF license usage reporting requirements for Amazon EVS.</p>
   * @public
   */
  siteId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CheckResult = {
  FAILED: "FAILED",
  PASSED: "PASSED",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type CheckResult = (typeof CheckResult)[keyof typeof CheckResult];

/**
 * @public
 * @enum
 */
export const CheckType = {
  HOST_COUNT: "HOST_COUNT",
  KEY_COVERAGE: "KEY_COVERAGE",
  KEY_REUSE: "KEY_REUSE",
  REACHABILITY: "REACHABILITY",
} as const;

/**
 * @public
 */
export type CheckType = (typeof CheckType)[keyof typeof CheckType];

/**
 * <p>A check on the environment to identify environment health and validate VMware VCF licensing compliance.</p>
 * @public
 */
export interface Check {
  /**
   * <p>The check type. Amazon EVS performs the following checks.</p> <ul> <li> <p> <code>KEY_REUSE</code>: checks that the VCF license key is not used by another Amazon EVS environment. This check fails if a used license is added to the environment.</p> </li> <li> <p> <code>KEY_COVERAGE</code>: checks that your VCF license key allocates sufficient vCPU cores for all deployed hosts. The check fails when any assigned hosts in the EVS environment are not covered by license keys, or when any unassigned hosts cannot be covered by available vCPU cores in keys.</p> </li> <li> <p> <code>REACHABILITY</code>: checks that the Amazon EVS control plane has a persistent connection to SDDC Manager. If Amazon EVS cannot reach the environment, this check fails.</p> </li> <li> <p> <code>HOST_COUNT</code>: Checks that your environment has a minimum of 4 hosts, which is a requirement for VCF 5.2.1.</p> <p>If this check fails, you will need to add hosts so that your environment meets this minimum requirement. Amazon EVS only supports environments with 4-16 hosts.</p> </li> </ul>
   * @public
   */
  type?: CheckType | undefined;

  /**
   * <p> The check result.</p>
   * @public
   */
  result?: CheckResult | undefined;

  /**
   * <p>The time when environment health began to be impaired.</p>
   * @public
   */
  impairedSince?: Date | undefined;
}

/**
 * <p>A managed secret that contains the credentials for installing vCenter Server, NSX, and SDDC Manager. During environment creation, the Amazon EVS control plane uses Amazon Web Services Secrets Manager to create, encrypt, validate, and store secrets. If you choose to delete your environment, Amazon EVS also deletes the secrets that are associated with your environment. Amazon EVS does not provide managed rotation of secrets. We recommend that you rotate secrets regularly to ensure that secrets are not long-lived.</p>
 * @public
 */
export interface Secret {
  /**
   * <p> The Amazon Resource Name (ARN) of the secret.</p>
   * @public
   */
  secretArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EnvironmentState = {
  CREATED: "CREATED",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type EnvironmentState = (typeof EnvironmentState)[keyof typeof EnvironmentState];

/**
 * <p>An object that represents an Amazon EVS environment.</p>
 * @public
 */
export interface Environment {
  /**
   * <p>The unique ID for the environment.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The state of an environment.</p>
   * @public
   */
  environmentState?: EnvironmentState | undefined;

  /**
   * <p>A detailed description of the <code>environmentState</code> of an environment.</p>
   * @public
   */
  stateDetails?: string | undefined;

  /**
   * <p>The date and time that the environment was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p> The date and time that the environment was modified.</p>
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the environment.</p>
   * @public
   */
  environmentArn?: string | undefined;

  /**
   * <p>The name of the environment.</p>
   * @public
   */
  environmentName?: string | undefined;

  /**
   * <p>The VPC associated with the environment.</p>
   * @public
   */
  vpcId?: string | undefined;

  /**
   * <p> The subnet that is used to establish connectivity between the Amazon EVS control plane and VPC. Amazon EVS uses this subnet to perform validations and create the environment.</p>
   * @public
   */
  serviceAccessSubnetId?: string | undefined;

  /**
   * <p>The VCF version of the environment.</p>
   * @public
   */
  vcfVersion?: VcfVersion | undefined;

  /**
   * <p>Customer confirmation that the customer has purchased and will continue to maintain the required number of VCF software licenses to cover all physical processor cores in the Amazon EVS environment. Information about your VCF software in Amazon EVS will be shared with Broadcom to verify license compliance. Amazon EVS does not validate license keys. To validate license keys, visit the Broadcom support portal. </p>
   * @public
   */
  termsAccepted?: boolean | undefined;

  /**
   * <p> The license information that Amazon EVS requires to create an environment. Amazon EVS requires two license keys: a VCF solution key and a vSAN license key. The VCF solution key must cover a minimum of 256 cores. The vSAN license key must provide at least 110 TiB of vSAN capacity.</p>
   * @public
   */
  licenseInfo?: LicenseInfo[] | undefined;

  /**
   * <p>The Broadcom Site ID that is associated with your Amazon EVS environment. Amazon EVS uses the Broadcom Site ID that you provide to meet Broadcom VCF license usage reporting requirements for Amazon EVS.</p>
   * @public
   */
  siteId?: string | undefined;

  /**
   * <p>Reports impaired functionality that stems from issues internal to the environment, such as impaired reachability.</p>
   * @public
   */
  environmentStatus?: CheckResult | undefined;

  /**
   * <p>A check on the environment to identify instance health and VMware VCF licensing issues.</p>
   * @public
   */
  checks?: Check[] | undefined;

  /**
   * <p>The connectivity configuration for the environment. Amazon EVS requires that you specify two route server peer IDs. During environment creation, the route server endpoints peer with the NSX uplink VLAN for connectivity to the NSX overlay network.</p>
   * @public
   */
  connectivityInfo?: ConnectivityInfo | undefined;

  /**
   * <p>The DNS hostnames to be used by the VCF management appliances in your environment.</p> <p>For environment creation to be successful, each hostname entry must resolve to a domain name that you've registered in your DNS service of choice and configured in the DHCP option set of your VPC. DNS hostnames cannot be changed after environment creation has started.</p>
   * @public
   */
  vcfHostnames?: VcfHostnames | undefined;

  /**
   * <p>The Amazon Web Services KMS key ID that Amazon Web Services Secrets Manager uses to encrypt secrets that are associated with the environment. These secrets contain the VCF credentials that are needed to install vCenter Server, NSX, and SDDC Manager.</p> <p>By default, Amazon EVS use the Amazon Web Services Secrets Manager managed key <code>aws/secretsmanager</code>. You can also specify a customer managed key.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The security groups that allow traffic between the Amazon EVS control plane and your VPC for service access. If a security group is not specified, Amazon EVS uses the default security group in your account for service access.</p>
   * @public
   */
  serviceAccessSecurityGroups?: ServiceAccessSecurityGroups | undefined;

  /**
   * <p>The VCF credentials that are stored as Amazon EVS managed secrets in Amazon Web Services Secrets Manager.</p> <p>Amazon EVS stores credentials that are needed to install vCenter Server, NSX, and SDDC Manager.</p>
   * @public
   */
  credentials?: Secret[] | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentResponse {
  /**
   * <p>A description of the created environment.</p>
   * @public
   */
  environment?: Environment | undefined;
}

/**
 * <p>Stores information about a field passed inside a request that resulted in an exception.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p> The field name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> A message describing why the field failed validation.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The input fails to satisfy the specified constraints. You will see this exception if invalid inputs are provided for any of the Amazon EVS environment operations, or if a list operation is performed on an environment resource that is still initializing.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The reason for the exception.</p>
   * @public
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * <p>A list of fields that didn't validate.</p>
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * @public
 */
export interface CreateEnvironmentHostRequest {
  /**
   * <note> <p>This parameter is not used in Amazon EVS currently. If you supply input for this parameter, it will have no effect.</p> </note> <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the host creation request. If you do not specify a client token, a randomly generated token is used for the request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A unique ID for the environment that the host is added to.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The host that is created and added to the environment.</p>
   * @public
   */
  host: HostInfoForCreate | undefined;
}

/**
 * <p>A list of environments with summarized environment details.</p>
 * @public
 */
export interface EnvironmentSummary {
  /**
   * <p>A unique ID for the environment.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p> The name of the environment.</p>
   * @public
   */
  environmentName?: string | undefined;

  /**
   * <p>The VCF version of the environment.</p>
   * @public
   */
  vcfVersion?: VcfVersion | undefined;

  /**
   * <p>Reports impaired functionality that stems from issues internal to the environment, such as impaired reachability.</p>
   * @public
   */
  environmentStatus?: CheckResult | undefined;

  /**
   * <p>The state of an environment.</p>
   * @public
   */
  environmentState?: EnvironmentState | undefined;

  /**
   * <p> The date and time that the environment was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p> The date and time that the environment was modified.</p>
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the environment.</p>
   * @public
   */
  environmentArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const HostState = {
  CREATED: "CREATED",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type HostState = (typeof HostState)[keyof typeof HostState];

/**
 * <p>An elastic network interface (ENI) that connects hosts to the VLAN subnets. Amazon EVS provisions two identically configured ENIs in the VMkernel management subnet during host creation. One ENI is active, and the other is in standby mode for automatic switchover during a failure scenario.</p>
 * @public
 */
export interface NetworkInterface {
  /**
   * <p>The unique ID of the elastic network interface.</p>
   * @public
   */
  networkInterfaceId?: string | undefined;
}

/**
 * <p>An ESXi host that runs on an Amazon EC2 bare metal instance. Four hosts are created in an Amazon EVS environment during environment creation. You can add hosts to an environment using the <code>CreateEnvironmentHost</code> operation. Amazon EVS supports 4-16 hosts per environment.</p>
 * @public
 */
export interface Host {
  /**
   * <p>The DNS hostname of the host. DNS hostnames for hosts must be unique across Amazon EVS environments and within VCF.</p>
   * @public
   */
  hostName?: string | undefined;

  /**
   * <p>The IP address of the host.</p>
   * @public
   */
  ipAddress?: string | undefined;

  /**
   * <p>The name of the SSH key that is used to access the host.</p>
   * @public
   */
  keyName?: string | undefined;

  /**
   * <p>The EC2 instance type of the host.</p> <note> <p>EC2 instances created through Amazon EVS do not support associating an IAM instance profile.</p> </note>
   * @public
   */
  instanceType?: _InstanceType | undefined;

  /**
   * <p>The unique ID of the placement group where the host is placed.</p>
   * @public
   */
  placementGroupId?: string | undefined;

  /**
   * <p>The unique ID of the Amazon EC2 Dedicated Host.</p>
   * @public
   */
  dedicatedHostId?: string | undefined;

  /**
   * <p> The date and time that the host was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p> The date and time that the host was modified.</p>
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * <p> The state of the host.</p>
   * @public
   */
  hostState?: HostState | undefined;

  /**
   * <p> A detailed description of the <code>hostState</code> of a host.</p>
   * @public
   */
  stateDetails?: string | undefined;

  /**
   * <p>The unique ID of the EC2 instance that represents the host.</p>
   * @public
   */
  ec2InstanceId?: string | undefined;

  /**
   * <p>The elastic network interfaces that are attached to the host.</p>
   * @public
   */
  networkInterfaces?: NetworkInterface[] | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentHostResponse {
  /**
   * <p>A summary of the environment that the host is created in.</p>
   * @public
   */
  environmentSummary?: EnvironmentSummary | undefined;

  /**
   * <p>A description of the created host.</p>
   * @public
   */
  host?: Host | undefined;
}

/**
 * <p>The <code>CreateEnvironmentHost</code> operation couldn't be performed because the service is throttling requests. This exception is thrown when the <code>CreateEnvironmentHost</code> request exceeds concurrency of 1 transaction per second (TPS).</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * <p>The seconds to wait to retry.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 */
export interface DeleteEnvironmentRequest {
  /**
   * <note> <p>This parameter is not used in Amazon EVS currently. If you supply input for this parameter, it will have no effect.</p> </note> <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the environment deletion request. If you do not specify a client token, a randomly generated token is used for the request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A unique ID associated with the environment to be deleted.</p>
   * @public
   */
  environmentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentResponse {
  /**
   * <p>A description of the deleted environment.</p>
   * @public
   */
  environment?: Environment | undefined;
}

/**
 * <p>A service resource associated with the request could not be found. The resource might not be specified correctly, or it may have a <code>state</code> of <code>DELETED</code>.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource that could not be found.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource that is associated with the error.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 */
export interface DeleteEnvironmentHostRequest {
  /**
   * <note> <p>This parameter is not used in Amazon EVS currently. If you supply input for this parameter, it will have no effect.</p> </note> <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the host deletion request. If you do not specify a client token, a randomly generated token is used for the request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A unique ID for the host's environment.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The DNS hostname associated with the host to be deleted.</p>
   * @public
   */
  hostName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentHostResponse {
  /**
   * <p>A summary of the environment that the host was deleted from.</p>
   * @public
   */
  environmentSummary?: EnvironmentSummary | undefined;

  /**
   * <p>A description of the deleted host.</p>
   * @public
   */
  host?: Host | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentRequest {
  /**
   * <p>A unique ID for the environment.</p>
   * @public
   */
  environmentId: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentResponse {
  /**
   * <p>A description of the requested environment.</p>
   * @public
   */
  environment?: Environment | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentHostsRequest {
  /**
   * <p>A unique pagination token for each page. If <code>nextToken</code> is returned, there are more results available. Make the call again using the returned token with all other arguments unchanged to retrieve the next page. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return. If you specify <code>MaxResults</code> in the request, the response includes information up to the limit specified.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A unique ID for the environment.</p>
   * @public
   */
  environmentId: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentHostsResponse {
  /**
   * <p>A unique pagination token for next page results. Make the call again using this token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of hosts in the environment.</p>
   * @public
   */
  environmentHosts?: Host[] | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsRequest {
  /**
   * <p>A unique pagination token for each page. If <code>nextToken</code> is returned, there are more results available. Make the call again using the returned token with all other arguments unchanged to retrieve the next page. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return. If you specify <code>MaxResults</code> in the request, the response includes information up to the limit specified.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The state of an environment. Used to filter response results to return only environments with the specified <code>environmentState</code>.</p>
   * @public
   */
  state?: EnvironmentState[] | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsResponse {
  /**
   * <p>A unique pagination token for next page results. Make the call again using this token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of environments with summarized environment details.</p>
   * @public
   */
  environmentSummaries?: EnvironmentSummary[] | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentVlansRequest {
  /**
   * <p>A unique pagination token for each page. If <code>nextToken</code> is returned, there are more results available. Make the call again using the returned token with all other arguments unchanged to retrieve the next page. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return. If you specify <code>MaxResults</code> in the request, the response includes information up to the limit specified.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A unique ID for the environment.</p>
   * @public
   */
  environmentId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const VlanState = {
  CREATED: "CREATED",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type VlanState = (typeof VlanState)[keyof typeof VlanState];

/**
 * <p>The VLANs that Amazon EVS creates during environment creation.</p>
 * @public
 */
export interface Vlan {
  /**
   * <p>The unique ID of the VLAN.</p>
   * @public
   */
  vlanId?: number | undefined;

  /**
   * <p>The CIDR block of the VLAN. Amazon EVS VLAN subnets have a minimum CIDR block size of /28 and a maximum size of /24.</p>
   * @public
   */
  cidr?: string | undefined;

  /**
   * <p>The availability zone of the VLAN.</p>
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * <p>The VMware VCF traffic type that is carried over the VLAN. For example, a VLAN with a <code>functionName</code> of <code>hcx</code> is being used to carry VMware HCX traffic.</p>
   * @public
   */
  functionName?: string | undefined;

  /**
   * <p> The unique ID of the VLAN subnet.</p>
   * @public
   */
  subnetId?: string | undefined;

  /**
   * <p>The date and time that the VLAN was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p> The date and time that the VLAN was modified.</p>
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * <p> The state of the VLAN.</p>
   * @public
   */
  vlanState?: VlanState | undefined;

  /**
   * <p>The state details of the VLAN.</p>
   * @public
   */
  stateDetails?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentVlansResponse {
  /**
   * <p>A unique pagination token for next page results. Make the call again using this token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of VLANs that are associated with the specified environment.</p>
   * @public
   */
  environmentVlans?: Vlan[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource to list tags for.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The number of one or more Amazon EVS resources exceeds the maximum allowed. For a list of Amazon EVS quotas, see <a href="https://docs.aws.amazon.com/evs/latest/userguide/service-quotas-evs.html">Amazon EVS endpoints and quotas</a> in the <i>Amazon EVS User Guide</i>. Delete some resources or request an increase in your service quota. To request an increase, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">Amazon Web Services Service Quotas</a> in the <i>Amazon Web Services General Reference Guide</i>. </p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * <note> <p> <code>TagPolicyException</code> is deprecated. See <a href="https://docs.aws.amazon.com/evs/latest/APIReference/API_ValidationException.html"> <code>ValidationException</code> </a> instead.</p> </note> <p>The request doesn't comply with IAM tag policy. Correct your request and then retry it.</p>
 * @public
 */
export class TagPolicyException extends __BaseException {
  readonly name: "TagPolicyException" = "TagPolicyException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagPolicyException, __BaseException>) {
    super({
      name: "TagPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagPolicyException.prototype);
  }
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to add tags to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other environment or Amazon Web Services resources.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * <note> <p> <code>TooManyTagsException</code> is deprecated. See <a href="https://docs.aws.amazon.com/evs/latest/APIReference/API_ServiceQuotaExceededException.html"> <code>ServiceQuotaExceededException</code> </a> instead.</p> </note> <p>A service resource associated with the request has more than 200 tags.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
  }
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to delete tags from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to delete.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
