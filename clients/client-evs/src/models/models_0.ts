// smithy-typescript generated code
import type {
  _InstanceType,
  CheckResult,
  CheckType,
  ConnectorState,
  ConnectorType,
  EntitlementStatus,
  EntitlementType,
  EnvironmentState,
  HostState,
  VcfVersion,
  VlanState,
} from "./enums";

/**
 * A regional account-level EVS setting, represented as a name and value pair.
 *
 * @public
 */
export interface AccountSetting {
  /**
   * The name of the EVS setting. Valid values are:
   *
   * - `vcfPortedCoreCount` (type: numeric string) - The total number of VCF license cores ported to Amazon EVS for the account in that Region. The maximum value is 1,000,000 cores. This setting value is shared with Broadcom for record-keeping.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The value of the EVS setting.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface AssociateEipToVlanRequest {
  /**
   * > **Note:** This parameter is not used in Amazon EVS currently. If you supply input for this parameter, it will have no effect.
   *
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the environment creation request. If you do not specify a client token, a randomly generated token is used for the request to ensure idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A unique ID for the environment containing the VLAN that the Elastic IP address associates with.
   *
   * @public
   */
  environmentId: string | undefined;

  /**
   * The name of the VLAN. `hcx` is the only accepted VLAN name at this time.
   *
   * @public
   */
  vlanName: string | undefined;

  /**
   * The Elastic IP address allocation ID.
   *
   * @public
   */
  allocationId: string | undefined;
}

/**
 * An Elastic IP address association with the elastic network interface in the VLAN subnet.
 *
 * @public
 */
export interface EipAssociation {
  /**
   * A unique ID for the elastic IP address association with the VLAN subnet.
   *
   * @public
   */
  associationId?: string | undefined;

  /**
   * The Elastic IP address allocation ID.
   *
   * @public
   */
  allocationId?: string | undefined;

  /**
   * The Elastic IP address.
   *
   * @public
   */
  ipAddress?: string | undefined;
}

/**
 * The VLANs that Amazon EVS creates during environment creation.
 *
 * @public
 */
export interface Vlan {
  /**
   * The unique ID of the VLAN.
   *
   * @public
   */
  vlanId?: number | undefined;

  /**
   * The CIDR block of the VLAN. Amazon EVS VLAN subnets have a minimum CIDR block size of /28 and a maximum size of /24.
   *
   * @public
   */
  cidr?: string | undefined;

  /**
   * The availability zone of the VLAN.
   *
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * The VMware VCF traffic type that is carried over the VLAN. For example, a VLAN with a `functionName` of `hcx` is being used to carry VMware HCX traffic.
   *
   * @public
   */
  functionName?: string | undefined;

  /**
   * The unique ID of the VLAN subnet.
   *
   * @public
   */
  subnetId?: string | undefined;

  /**
   * The date and time that the VLAN was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time that the VLAN was modified.
   *
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * The state of the VLAN.
   *
   * @public
   */
  vlanState?: VlanState | undefined;

  /**
   * The state details of the VLAN.
   *
   * @public
   */
  stateDetails?: string | undefined;

  /**
   * An array of Elastic IP address associations.
   *
   * @public
   */
  eipAssociations?: EipAssociation[] | undefined;

  /**
   * Determines if the VLAN that Amazon EVS provisions is public or private.
   *
   * @public
   */
  isPublic?: boolean | undefined;

  /**
   * A unique ID for a network access control list.
   *
   * @public
   */
  networkAclId?: string | undefined;
}

/**
 * @public
 */
export interface AssociateEipToVlanResponse {
  /**
   * The VLANs that Amazon EVS creates during environment creation.
   *
   * @public
   */
  vlan?: Vlan | undefined;
}

/**
 * Stores information about a field passed inside a request that resulted in an exception.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The field name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A message describing why the field failed validation.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface CreateEntitlementRequest {
  /**
   * > **Note:** This parameter is not used in Amazon EVS currently. If you supply input for this parameter, it will have no effect.
   *
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the entitlement creation request. If you do not specify a client token, a randomly generated token is used for the request to ensure idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A unique ID for the environment to create the entitlement in.
   *
   * @public
   */
  environmentId: string | undefined;

  /**
   * A unique ID for the connector associated with the entitlement.
   *
   * @public
   */
  connectorId: string | undefined;

  /**
   * The type of entitlement to create.
   *
   * @public
   */
  entitlementType: EntitlementType | undefined;

  /**
   * The list of VMware vSphere virtual machine managed object IDs to create entitlements for.
   *
   * @public
   */
  vmIds: string[] | undefined;
}

/**
 * An object that contains error details for an entitlement.
 *
 * @public
 */
export interface ErrorDetail {
  /**
   * The error code.
   *
   * @public
   */
  errorCode: string | undefined;

  /**
   * The error message.
   *
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * An object that represents a Windows Server License entitlement for a virtual machine in an Amazon EVS environment.
 *
 * @public
 */
export interface VmEntitlement {
  /**
   * The unique ID of the virtual machine.
   *
   * @public
   */
  vmId?: string | undefined;

  /**
   * The unique ID of the environment.
   *
   * @public
   */
  environmentId?: string | undefined;

  /**
   * The unique ID of the connector associated with the entitlement.
   *
   * @public
   */
  connectorId?: string | undefined;

  /**
   * The name of the virtual machine.
   *
   * @public
   */
  vmName?: string | undefined;

  /**
   * The type of entitlement.
   *
   * @public
   */
  type?: EntitlementType | undefined;

  /**
   * The status of the entitlement.
   *
   * @public
   */
  status?: EntitlementStatus | undefined;

  /**
   * The date and time that the entitlement was last synced.
   *
   * @public
   */
  lastSyncedAt?: Date | undefined;

  /**
   * The date and time that the entitlement started.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The date and time that the entitlement stopped.
   *
   * @public
   */
  stoppedAt?: Date | undefined;

  /**
   * The error details associated with the entitlement, if applicable.
   *
   * @public
   */
  errorDetail?: ErrorDetail | undefined;
}

/**
 * @public
 */
export interface CreateEntitlementResponse {
  /**
   * A list of the created entitlements.
   *
   * @public
   */
  entitlements?: VmEntitlement[] | undefined;
}

/**
 * The connectivity configuration for the environment. Amazon EVS requires that you specify two route server peer IDs. During environment creation, the route server endpoints peer with the NSX uplink VLAN for connectivity to the NSX overlay network.
 *
 * > **Note:** Not supported when `vcfVersion` is `SELF_DEPLOYED`.
 *
 * @public
 */
export interface ConnectivityInfo {
  /**
   * The unique IDs for private route server peers.
   *
   * @public
   */
  privateRouteServerPeerings: string[] | undefined;
}

/**
 * An object that represents a host.
 *
 * > **Note:** You cannot use `dedicatedHostId` and `placementGroupId` together in the same `HostInfoForCreate`object. This results in a `ValidationException` response.
 *
 * @public
 */
export interface HostInfoForCreate {
  /**
   * The DNS hostname of the host. DNS hostnames for hosts must be unique across Amazon EVS environments and within VCF.
   *
   * @public
   */
  hostName: string | undefined;

  /**
   * The name of the SSH key that is used to access the host.
   *
   * @public
   */
  keyName: string | undefined;

  /**
   * The EC2 instance type that represents the host.
   *
   * @public
   */
  instanceType: _InstanceType | undefined;

  /**
   * The unique ID of the placement group where the host is placed.
   *
   * @public
   */
  placementGroupId?: string | undefined;

  /**
   * The unique ID of the Amazon EC2 Dedicated Host.
   *
   * @public
   */
  dedicatedHostId?: string | undefined;
}

/**
 * An object that represents an initial VLAN subnet for the Amazon EVS environment. Amazon EVS creates initial VLAN subnets when you first create the environment. Amazon EVS creates the following 10 VLAN subnets: host management VLAN, vMotion VLAN, vSAN VLAN, VTEP VLAN, Edge VTEP VLAN, Management VM VLAN, HCX uplink VLAN, NSX uplink VLAN, expansion VLAN 1, expansion VLAN 2.
 *
 * > **Note:** For each Amazon EVS VLAN subnet, you must specify a non-overlapping CIDR block. Amazon EVS VLAN subnets have a minimum CIDR block size of /28 and a maximum size of /24.
 *
 * @public
 */
export interface InitialVlanInfo {
  /**
   * The CIDR block that you provide to create an Amazon EVS VLAN subnet. Amazon EVS VLAN subnets have a minimum CIDR block size of /28 and a maximum size of /24. Amazon EVS VLAN subnet CIDR blocks must not overlap with other subnets in the VPC.
   *
   * @public
   */
  cidr: string | undefined;
}

/**
 * The initial VLAN subnets for the environment. Amazon EVS VLAN subnets have a minimum CIDR block size of /28 and a maximum size of /24. Amazon EVS VLAN subnet CIDR blocks must not overlap with other subnets in the VPC.
 *
 * @public
 */
export interface InitialVlans {
  /**
   * The host VMkernel management VLAN subnet. This VLAN subnet carries traffic for managing ESX hosts and communicating with VMware vCenter Server.
   *
   * @public
   */
  vmkManagement: InitialVlanInfo | undefined;

  /**
   * The VM management VLAN subnet. This VLAN subnet carries traffic for vSphere virtual machines.
   *
   * @public
   */
  vmManagement: InitialVlanInfo | undefined;

  /**
   * The vMotion VLAN subnet. This VLAN subnet carries traffic for vSphere vMotion.
   *
   * @public
   */
  vMotion: InitialVlanInfo | undefined;

  /**
   * The vSAN VLAN subnet. This VLAN subnet carries the communication between ESX hosts to implement a vSAN shared storage pool.
   *
   * @public
   */
  vSan: InitialVlanInfo | undefined;

  /**
   * The VTEP VLAN subnet. This VLAN subnet handles internal network traffic between virtual machines within a VCF instance.
   *
   * @public
   */
  vTep: InitialVlanInfo | undefined;

  /**
   * The edge VTEP VLAN subnet. This VLAN subnet manages traffic flowing between the internal network and external networks, including internet access and other site connections.
   *
   * @public
   */
  edgeVTep: InitialVlanInfo | undefined;

  /**
   * The NSX uplink VLAN subnet. This VLAN subnet allows connectivity to the NSX overlay network.
   *
   * @public
   */
  nsxUplink: InitialVlanInfo | undefined;

  /**
   * The HCX VLAN subnet. This VLAN subnet allows the HCX Interconnnect (IX) and HCX Network Extension (NE) to reach their peers and enable HCX Service Mesh creation.
   *
   * If you plan to use a public HCX VLAN subnet, the following requirements must be met:
   *
   * - Must have a /28 netmask and be allocated from the IPAM public pool. Required for HCX internet access configuration.
   * - The HCX public VLAN CIDR block must be added to the VPC as a secondary CIDR block.
   * - Must have at least two Elastic IP addresses to be allocated from the public IPAM pool for HCX components.
   *
   * @public
   */
  hcx: InitialVlanInfo | undefined;

  /**
   * An additional VLAN subnet that can be used to extend VCF capabilities once configured. For example, you can configure an expansion VLAN subnet to use NSX Federation for centralized management and synchronization of multiple NSX deployments across different locations.
   *
   * @public
   */
  expansionVlan1: InitialVlanInfo | undefined;

  /**
   * An additional VLAN subnet that can be used to extend VCF capabilities once configured. For example, you can configure an expansion VLAN subnet to use NSX Federation for centralized management and synchronization of multiple NSX deployments across different locations.
   *
   * @public
   */
  expansionVlan2: InitialVlanInfo | undefined;

  /**
   * Determines if the HCX VLAN that Amazon EVS provisions is public or private.
   *
   * @public
   */
  isHcxPublic?: boolean | undefined;

  /**
   * A unique ID for a network access control list that the HCX VLAN uses. Required when `isHcxPublic` is set to `true`.
   *
   * @public
   */
  hcxNetworkAclId?: string | undefined;
}

/**
 * The license information that Amazon EVS requires to create an environment. Amazon EVS requires two license keys: a VCF solution key and a vSAN license key.
 *
 * @public
 */
export interface LicenseInfo {
  /**
   * The VCF solution key. This license unlocks VMware VCF product features, including vSphere, NSX, SDDC Manager, and vCenter Server. The VCF solution key must meet the instance-type-specific minimum core requirements.
   *
   * @public
   */
  solutionKey: string | undefined;

  /**
   * The VSAN license key. This license unlocks vSAN features. The vSAN license key must meet the instance-type-specific minimum capacity requirements.
   *
   * @public
   */
  vsanKey: string | undefined;
}

/**
 * The security groups that allow traffic between the Amazon EVS control plane and your VPC for Amazon EVS service access. If a security group is not specified, Amazon EVS uses the default security group in your account for service access.
 *
 * @public
 */
export interface ServiceAccessSecurityGroups {
  /**
   * The security groups that allow service access.
   *
   * @public
   */
  securityGroups?: string[] | undefined;
}

/**
 * The DNS hostnames that Amazon EVS uses to install VMware vCenter Server, NSX, SDDC Manager, and Cloud Builder. Each hostname must be unique, and resolve to a domain name that you've registered in your DNS service of choice. Hostnames cannot be changed.
 *
 * VMware VCF requires the deployment of two NSX Edge nodes, and three NSX Manager virtual machines.
 *
 * > **Note:** Not supported when `vcfVersion` is `SELF_DEPLOYED`.
 *
 * @public
 */
export interface VcfHostnames {
  /**
   * The VMware vCenter hostname.
   *
   * @public
   */
  vCenter: string | undefined;

  /**
   * The VMware NSX Virtual IP (VIP) hostname.
   *
   * @public
   */
  nsx: string | undefined;

  /**
   * The hostname for the first VMware NSX Manager virtual machine (VM).
   *
   * @public
   */
  nsxManager1: string | undefined;

  /**
   * The hostname for the second VMware NSX Manager virtual machine (VM).
   *
   * @public
   */
  nsxManager2: string | undefined;

  /**
   * The hostname for the third VMware NSX Manager virtual machine (VM).
   *
   * @public
   */
  nsxManager3: string | undefined;

  /**
   * The hostname for the first NSX Edge node.
   *
   * @public
   */
  nsxEdge1: string | undefined;

  /**
   * The hostname for the second NSX Edge node.
   *
   * @public
   */
  nsxEdge2: string | undefined;

  /**
   * The hostname for SDDC Manager.
   *
   * @public
   */
  sddcManager: string | undefined;

  /**
   * The hostname for VMware Cloud Builder.
   *
   * @public
   */
  cloudBuilder: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentRequest {
  /**
   * > **Note:** This parameter is not used in Amazon EVS currently. If you supply input for this parameter, it will have no effect.
   *
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the environment creation request. If you do not specify a client token, a randomly generated token is used for the request to ensure idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The name to give to your environment. The name can contain only alphanumeric characters (case-sensitive), hyphens, and underscores. It must start with an alphanumeric character, and can't be longer than 100 characters. The name must be unique within the Amazon Web Services Region and Amazon Web Services account that you're creating the environment in.
   *
   * @public
   */
  environmentName?: string | undefined;

  /**
   * A unique ID for the customer-managed KMS key that is used to encrypt the VCF credential pairs for SDDC Manager, NSX Manager, and vCenter appliances. These credentials are stored in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The security group that controls communication between the Amazon EVS control plane and VPC. The default security group is used if a custom security group isn't specified.
   *
   * The security group should allow access to the following.
   *
   * - TCP/UDP access to the DNS servers
   * - HTTPS/SSH access to the host management VLAN subnet
   * - HTTPS/SSH access to the Management VM VLAN subnet
   *
   * You should avoid modifying the security group rules after deployment, as this can break the persistent connection between the Amazon EVS control plane and VPC. This can cause future environment actions like adding or removing hosts to fail.
   *
   * @public
   */
  serviceAccessSecurityGroups?: ServiceAccessSecurityGroups | undefined;

  /**
   * A unique ID for the VPC that the environment is deployed inside.
   *
   * Amazon EVS requires that all VPC subnets exist in a single Availability Zone in a Region where the service is available.
   *
   * The VPC that you specify must have a valid DHCP option set with domain name, at least two DNS servers, and an NTP server. These settings are used to configure your VCF appliances and hosts. The VPC cannot be used with any other deployed Amazon EVS environment. Amazon EVS does not provide multi-VPC support for environments at this time.
   *
   * Amazon EVS does not support the following Amazon Web Services networking options for NSX overlay connectivity: cross-Region VPC peering, Amazon S3 gateway endpoints, or Amazon Web Services Direct Connect virtual private gateway associations.
   *
   * > **Note:** Ensure that you specify a VPC that is adequately sized to accommodate the Amazon EVS subnets.
   *
   * @public
   */
  vpcId: string | undefined;

  /**
   * The subnet that is used to establish connectivity between the Amazon EVS control plane and VPC. The Amazon EVS control plane uses this subnet to interface with your environment. This includes validating DNS records and enabling Amazon EVS Connectors.
   *
   * @public
   */
  serviceAccessSubnetId: string | undefined;

  /**
   * The VCF version to use for the environment.
   *
   * - `SELF_DEPLOYED`: You install VCF yourself. The `licenseInfo`, `hosts`, `vcfHostnames`, `siteId`, and `connectivityInfo` parameters are not supported.
   * - Any other valid value: Amazon EVS installs and configures VCF for you in the version you specify.
   *
   * @public
   */
  vcfVersion: VcfVersion | undefined;

  /**
   * Confirmation that the customer has purchased and will continue to maintain the required number of VCF software licenses to cover all physical processor cores in the Amazon EVS environment. Information about your VCF software in Amazon EVS will be shared with Broadcom to verify license compliance. Amazon EVS does not validate license keys. To validate license keys, visit the Broadcom support portal.
   *
   * @public
   */
  termsAccepted: boolean | undefined;

  /**
   * The initial VLAN subnets for the Amazon EVS environment.
   *
   * > **Note:** For each Amazon EVS VLAN subnet, you must specify a non-overlapping CIDR block. Amazon EVS VLAN subnets have a minimum CIDR block size of /28 and a maximum size of /24.
   *
   * @public
   */
  initialVlans: InitialVlans | undefined;

  /**
   * The connectivity configuration for the environment. Amazon EVS requires that you specify two route server peer IDs. During environment creation, the route server endpoints peer with the NSX edges over the NSX uplink subnet, providing BGP-based dynamic routing for overlay networks.
   *
   * > **Note:** Not supported when `vcfVersion` is `SELF_DEPLOYED`.
   *
   * @public
   */
  connectivityInfo?: ConnectivityInfo | undefined;

  /**
   * The license information that Amazon EVS requires to create an environment. Amazon EVS requires two license keys: a VCF solution key and a vSAN license key. The VCF solution key must meet minimum core requirements, and the vSAN license key must meet minimum capacity requirements for your selected instance type.
   *
   * For information about minimum license requirements, see [the VCF subscriptions section](https://docs.aws.amazon.com/evs/latest/userguide/vcf-license-mgmt.html) in the *Amazon EVS User Guide*.
   *
   * VCF licenses can be used for only one Amazon EVS environment. Amazon EVS does not support reuse of VCF licenses for multiple environments.
   *
   * VCF license information can be retrieved from the Broadcom portal.
   *
   * > **Note:** Not supported when `vcfVersion` is `SELF_DEPLOYED`.
   *
   * @public
   */
  licenseInfo?: LicenseInfo[] | undefined;

  /**
   * The ESX hosts to add to the environment. For each host, provide the desired hostname, EC2 SSH keypair name, and EC2 instance type. Optionally, provide a partition or cluster placement group, or use Amazon EC2 Dedicated Hosts.
   *
   * > **Note:** Not supported when `vcfVersion` is `SELF_DEPLOYED`. In that case, you can add hosts using `CreateEnvironmentHost` after the environment is created.
   *
   * @public
   */
  hosts?: HostInfoForCreate[] | undefined;

  /**
   * The DNS hostnames for the virtual machines that host the VCF management appliances. Provide hostnames for vCenter, NSX Manager, SDDC Manager, and Cloud Builder.
   *
   * > **Note:** Not supported when `vcfVersion` is `SELF_DEPLOYED`.
   *
   * @public
   */
  vcfHostnames?: VcfHostnames | undefined;

  /**
   * The Broadcom Site ID that is allocated to you as part of your electronic software delivery. This ID allows customer access to the Broadcom portal, and is provided to you by Broadcom at the close of your software contract or contract renewal. Amazon EVS uses the Broadcom Site ID that you provide to meet Broadcom VCF license usage reporting requirements for Amazon EVS.
   *
   * > **Note:** Not supported when `vcfVersion` is `SELF_DEPLOYED`.
   *
   * @public
   */
  siteId?: string | undefined;
}

/**
 * A check on the environment to identify environment health and validate VMware VCF licensing compliance.
 *
 * @public
 */
export interface Check {
  /**
   * The check type. Amazon EVS performs the following checks:
   *
   * - `KEY_REUSE`: Verifies that the VCF license key is not used by another Amazon EVS environment.
   * - `KEY_COVERAGE`: Verifies that the VCF license key allocates sufficient vCPU cores for all deployed hosts.
   * - `REACHABILITY`: Verifies that the Amazon EVS control plane has a persistent connection to SDDC Manager.
   * - `HOST_COUNT`: Verifies that the environment meets the minimum host count.
   * - `VCENTER_REACHABILITY`: Verifies vCenter Server reachability through the vCenter connector.
   * - `VCENTER_VM_SYNC`: Verifies that the vCenter connector can synchronize VM inventory from vCenter Server.
   * - `VCENTER_VM_EVENT`: Verifies that the vCenter connector can receive VM lifecycle events from vCenter Server.
   * - `OPERATIONS_MANAGER_REACHABILITY`: Verifies Operations Manager reachability through the Operations Manager connector.
   * - `SDDC_MANAGER_REACHABILITY`: Verifies SDDC Manager reachability through the SDDC Manager connector.
   * - `SDDC_MANAGER_HOST_COUNT`: Verifies that the host count reported by SDDC Manager meets Amazon EVS minimum requirements.
   * - `SDDC_MANAGER_KEY_COVERAGE`: Verifies that the VCF license key configured in SDDC Manager covers all deployed hosts.
   * - `SDDC_MANAGER_KEY_REUSE`: Verifies that the VCF license key configured in SDDC Manager is not used by another Amazon EVS environment.
   * - `CONNECTOR_HEALTH`: Aggregate health across all connectors in the environment.
   *
   * @public
   */
  type?: CheckType | undefined;

  /**
   * A unique ID for the check.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The check result.
   *
   * @public
   */
  result?: CheckResult | undefined;

  /**
   * The time when environment health began to be impaired.
   *
   * @public
   */
  impairedSince?: Date | undefined;
}

/**
 * A managed secret that contains the credentials for installing vCenter Server, NSX, and SDDC Manager. During environment creation, the Amazon EVS control plane uses Amazon Web Services Secrets Manager to create, encrypt, validate, and store secrets. If you choose to delete your environment, Amazon EVS also deletes the secrets that are associated with your environment. Amazon EVS does not provide managed rotation of secrets. We recommend that you rotate secrets regularly to ensure that secrets are not long-lived.
 *
 * @public
 */
export interface Secret {
  /**
   * The Amazon Resource Name (ARN) of the secret.
   *
   * @public
   */
  secretArn?: string | undefined;
}

/**
 * An object that represents an Amazon EVS environment.
 *
 * @public
 */
export interface Environment {
  /**
   * The unique ID for the environment.
   *
   * @public
   */
  environmentId?: string | undefined;

  /**
   * The state of an environment.
   *
   * @public
   */
  environmentState?: EnvironmentState | undefined;

  /**
   * A detailed description of the `environmentState` of an environment.
   *
   * @public
   */
  stateDetails?: string | undefined;

  /**
   * The date and time that the environment was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time that the environment was modified.
   *
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) that is associated with the environment.
   *
   * @public
   */
  environmentArn?: string | undefined;

  /**
   * The name of the environment.
   *
   * @public
   */
  environmentName?: string | undefined;

  /**
   * The VPC associated with the environment.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The subnet that is used to establish connectivity between the Amazon EVS control plane and VPC. Amazon EVS uses this subnet to perform validations and create the environment.
   *
   * @public
   */
  serviceAccessSubnetId?: string | undefined;

  /**
   * The VCF version of the environment.
   *
   * @public
   */
  vcfVersion?: VcfVersion | undefined;

  /**
   * Customer confirmation that the customer has purchased and will continue to maintain the required number of VCF software licenses to cover all physical processor cores in the Amazon EVS environment. Information about your VCF software in Amazon EVS will be shared with Broadcom to verify license compliance. Amazon EVS does not validate license keys. To validate license keys, visit the Broadcom support portal.
   *
   * @public
   */
  termsAccepted?: boolean | undefined;

  /**
   * The license information that Amazon EVS requires to create an environment. Amazon EVS requires two license keys: a VCF solution key and a vSAN license key. The VCF solution key must meet minimum core requirements, and the vSAN license key must meet minimum capacity requirements for your selected instance type.
   *
   * For information about minimum license requirements, see [the VCF subscriptions section](https://docs.aws.amazon.com/evs/latest/userguide/vcf-license-mgmt.html) in the *Amazon EVS User Guide*.
   *
   * @public
   */
  licenseInfo?: LicenseInfo[] | undefined;

  /**
   * The Broadcom Site ID that is associated with your Amazon EVS environment. Amazon EVS uses the Broadcom Site ID that you provide to meet Broadcom VCF license usage reporting requirements for Amazon EVS.
   *
   * @public
   */
  siteId?: string | undefined;

  /**
   * Reports impaired functionality that stems from issues internal to the environment, such as impaired reachability.
   *
   * @public
   */
  environmentStatus?: CheckResult | undefined;

  /**
   * A check on the environment to identify connector health.
   *
   * @public
   */
  checks?: Check[] | undefined;

  /**
   * The connectivity configuration for the environment. Amazon EVS requires that you specify two route server peer IDs. During environment creation, the route server endpoints peer with the NSX uplink VLAN for connectivity to the NSX overlay network.
   *
   * @public
   */
  connectivityInfo?: ConnectivityInfo | undefined;

  /**
   * The DNS hostnames to be used by the VCF management appliances in your environment.
   *
   * For environment creation to be successful, each hostname entry must resolve to a domain name that you've registered in your DNS service of choice and configured in the DHCP option set of your VPC. DNS hostnames cannot be changed after environment creation has started.
   *
   * @public
   */
  vcfHostnames?: VcfHostnames | undefined;

  /**
   * The Amazon Web Services KMS key ID that Amazon Web Services Secrets Manager uses to encrypt secrets that are associated with the environment. These secrets contain the VCF credentials that are needed to install vCenter Server, NSX, and SDDC Manager.
   *
   * By default, Amazon EVS use the Amazon Web Services Secrets Manager managed key `aws/secretsmanager`. You can also specify a customer managed key.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The security groups that allow traffic between the Amazon EVS control plane and your VPC for service access. If a security group is not specified, Amazon EVS uses the default security group in your account for service access.
   *
   * @public
   */
  serviceAccessSecurityGroups?: ServiceAccessSecurityGroups | undefined;

  /**
   * The VCF credentials that are stored as Amazon EVS managed secrets in Amazon Web Services Secrets Manager.
   *
   * Amazon EVS stores credentials that are needed to install vCenter Server, NSX, and SDDC Manager.
   *
   * @public
   */
  credentials?: Secret[] | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentResponse {
  /**
   * A description of the created environment.
   *
   * @public
   */
  environment?: Environment | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentConnectorRequest {
  /**
   * > **Note:** This parameter is not used in Amazon EVS currently. If you supply input for this parameter, it will have no effect.
   *
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the connector creation request. If you do not specify a client token, a randomly generated token is used for the request to ensure idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A unique ID for the environment to create the connector in.
   *
   * @public
   */
  environmentId: string | undefined;

  /**
   * The type of connector to create.
   *
   * - `OPERATIONS_MANAGER`: Connector to an Operations Manager appliance. Required for VCF 9x environments.
   * - `SDDC_MANAGER`: Connector to an SDDC Manager appliance. Required for VCF 5.x environments.
   * - `VCENTER`: Connector to a vCenter Server appliance. Required for features that depend on vCenter, such as Windows Server license-included.
   *
   * @public
   */
  type: ConnectorType | undefined;

  /**
   * The fully qualified domain name (FQDN) of the VCF appliance that the connector targets.
   *
   * @public
   */
  applianceFqdn: string | undefined;

  /**
   * The ARN or name of the Amazon Web Services Secrets Manager secret that stores the credentials for the VCF appliance. `SDDC_MANAGER` requires an `apiKey` field; `OPERATIONS_MANAGER` and `VCENTER` require `username` and `password` fields.
   *
   * > **Important:** Do not use credentials with Administrator privileges. We recommend using a service account with read-only permissions.
   *
   * @public
   */
  secretIdentifier: string | undefined;
}

/**
 * A check on a connector to identify connectivity health.
 *
 * @public
 */
export interface ConnectorCheck {
  /**
   * The check type.
   *
   * @public
   */
  type?: CheckType | undefined;

  /**
   * The check result.
   *
   * @public
   */
  result?: CheckResult | undefined;

  /**
   * The date and time of the last check attempt.
   *
   * @public
   */
  lastCheckAttempt?: Date | undefined;

  /**
   * The time when connector health began to be impaired.
   *
   * @public
   */
  impairedSince?: Date | undefined;
}

/**
 * An object that represents a connector for an Amazon EVS environment. A connector establishes a connection to the given appliance type using the credentials stored in Amazon Web Services Secrets Manager.
 *
 * @public
 */
export interface Connector {
  /**
   * The unique ID of the environment that the connector belongs to.
   *
   * @public
   */
  environmentId?: string | undefined;

  /**
   * The unique ID of the connector.
   *
   * @public
   */
  connectorId?: string | undefined;

  /**
   * The type of the connector.
   *
   * @public
   */
  type?: ConnectorType | undefined;

  /**
   * The fully qualified domain name (FQDN) of the VCF appliance that the connector connects to.
   *
   * @public
   */
  applianceFqdn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that stores the credentials for the VCF appliance.
   *
   * @public
   */
  secretArn?: string | undefined;

  /**
   * The state of the connector.
   *
   * @public
   */
  state?: ConnectorState | undefined;

  /**
   * A detailed description of the connector state.
   *
   * @public
   */
  stateDetails?: string | undefined;

  /**
   * The status of the connector.
   *
   * @public
   */
  status?: CheckResult | undefined;

  /**
   * A list of checks that are run on the connector.
   *
   * @public
   */
  checks?: ConnectorCheck[] | undefined;

  /**
   * The date and time that the connector was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time that the connector was modified.
   *
   * @public
   */
  modifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentConnectorResponse {
  /**
   * A description of the created connector.
   *
   * @public
   */
  connector?: Connector | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentHostRequest {
  /**
   * > **Note:** This parameter is not used in Amazon EVS currently. If you supply input for this parameter, it will have no effect.
   *
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the host creation request. If you do not specify a client token, a randomly generated token is used for the request to ensure idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A unique ID for the environment that the host is added to.
   *
   * @public
   */
  environmentId: string | undefined;

  /**
   * The host that is created and added to the environment.
   *
   * @public
   */
  host: HostInfoForCreate | undefined;

  /**
   * The ESX version to use for the host.
   *
   * @public
   */
  esxVersion?: string | undefined;
}

/**
 * A list of environments with summarized environment details.
 *
 * @public
 */
export interface EnvironmentSummary {
  /**
   * A unique ID for the environment.
   *
   * @public
   */
  environmentId?: string | undefined;

  /**
   * The name of the environment.
   *
   * @public
   */
  environmentName?: string | undefined;

  /**
   * The VCF version of the environment.
   *
   * @public
   */
  vcfVersion?: VcfVersion | undefined;

  /**
   * Reports impaired functionality that stems from issues internal to the environment, such as impaired reachability.
   *
   * @public
   */
  environmentStatus?: CheckResult | undefined;

  /**
   * The state of an environment.
   *
   * @public
   */
  environmentState?: EnvironmentState | undefined;

  /**
   * The date and time that the environment was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time that the environment was modified.
   *
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) that is associated with the environment.
   *
   * @public
   */
  environmentArn?: string | undefined;
}

/**
 * An elastic network interface (ENI) that connects hosts to the VLAN subnets. Amazon EVS provisions two identically configured ENIs in the VMkernel management subnet during host creation. One ENI is active, and the other is in standby mode for automatic switchover during a failure scenario.
 *
 * @public
 */
export interface NetworkInterface {
  /**
   * The unique ID of the elastic network interface.
   *
   * @public
   */
  networkInterfaceId?: string | undefined;
}

/**
 * An ESX host that runs on an Amazon EC2 bare metal instance.
 *
 * @public
 */
export interface Host {
  /**
   * The DNS hostname of the host. DNS hostnames for hosts must be unique across Amazon EVS environments and within VCF.
   *
   * @public
   */
  hostName?: string | undefined;

  /**
   * The IP address of the host.
   *
   * @public
   */
  ipAddress?: string | undefined;

  /**
   * The name of the SSH key that is used to access the host.
   *
   * @public
   */
  keyName?: string | undefined;

  /**
   * The EC2 instance type of the host.
   *
   * > **Note:** EC2 instances created through Amazon EVS do not support associating an IAM instance profile.
   *
   * @public
   */
  instanceType?: _InstanceType | undefined;

  /**
   * The unique ID of the placement group where the host is placed.
   *
   * @public
   */
  placementGroupId?: string | undefined;

  /**
   * The unique ID of the Amazon EC2 Dedicated Host.
   *
   * @public
   */
  dedicatedHostId?: string | undefined;

  /**
   * The date and time that the host was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time that the host was modified.
   *
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * The state of the host.
   *
   * @public
   */
  hostState?: HostState | undefined;

  /**
   * A detailed description of the `hostState` of a host.
   *
   * @public
   */
  stateDetails?: string | undefined;

  /**
   * The unique ID of the EC2 instance that represents the host.
   *
   * @public
   */
  ec2InstanceId?: string | undefined;

  /**
   * The elastic network interfaces that are attached to the host.
   *
   * @public
   */
  networkInterfaces?: NetworkInterface[] | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentHostResponse {
  /**
   * A summary of the environment that the host is created in.
   *
   * @public
   */
  environmentSummary?: EnvironmentSummary | undefined;

  /**
   * A description of the created host.
   *
   * @public
   */
  host?: Host | undefined;
}

/**
 * @public
 */
export interface DeleteEntitlementRequest {
  /**
   * > **Note:** This parameter is not used in Amazon EVS currently. If you supply input for this parameter, it will have no effect.
   *
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the entitlement deletion request. If you do not specify a client token, a randomly generated token is used for the request to ensure idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A unique ID for the environment that the entitlement belongs to.
   *
   * @public
   */
  environmentId: string | undefined;

  /**
   * A unique ID for the connector associated with the entitlement.
   *
   * @public
   */
  connectorId: string | undefined;

  /**
   * The type of entitlement to delete.
   *
   * @public
   */
  entitlementType: EntitlementType | undefined;

  /**
   * The list of VMware vSphere virtual machine managed object IDs to delete entitlements for.
   *
   * @public
   */
  vmIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteEntitlementResponse {
  /**
   * A list of the deleted entitlements.
   *
   * @public
   */
  entitlements?: VmEntitlement[] | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentRequest {
  /**
   * > **Note:** This parameter is not used in Amazon EVS currently. If you supply input for this parameter, it will have no effect.
   *
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the environment deletion request. If you do not specify a client token, a randomly generated token is used for the request to ensure idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A unique ID associated with the environment to be deleted.
   *
   * @public
   */
  environmentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentResponse {
  /**
   * A description of the deleted environment.
   *
   * @public
   */
  environment?: Environment | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentConnectorRequest {
  /**
   * > **Note:** This parameter is not used in Amazon EVS currently. If you supply input for this parameter, it will have no effect.
   *
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the connector deletion request. If you do not specify a client token, a randomly generated token is used for the request to ensure idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A unique ID for the environment that the connector belongs to.
   *
   * @public
   */
  environmentId: string | undefined;

  /**
   * A unique ID for the connector to be deleted.
   *
   * @public
   */
  connectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentConnectorResponse {
  /**
   * A description of the deleted connector.
   *
   * @public
   */
  connector?: Connector | undefined;

  /**
   * A summary of the environment that the connector was deleted from.
   *
   * @public
   */
  environmentSummary?: EnvironmentSummary | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentHostRequest {
  /**
   * > **Note:** This parameter is not used in Amazon EVS currently. If you supply input for this parameter, it will have no effect.
   *
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the host deletion request. If you do not specify a client token, a randomly generated token is used for the request to ensure idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A unique ID for the host's environment.
   *
   * @public
   */
  environmentId: string | undefined;

  /**
   * The DNS hostname associated with the host to be deleted.
   *
   * @public
   */
  hostName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentHostResponse {
  /**
   * A summary of the environment that the host was deleted from.
   *
   * @public
   */
  environmentSummary?: EnvironmentSummary | undefined;

  /**
   * A description of the deleted host.
   *
   * @public
   */
  host?: Host | undefined;
}

/**
 * @public
 */
export interface DisassociateEipFromVlanRequest {
  /**
   * > **Note:** This parameter is not used in Amazon EVS currently. If you supply input for this parameter, it will have no effect.
   *
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the environment creation request. If you do not specify a client token, a randomly generated token is used for the request to ensure idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A unique ID for the environment containing the VLAN that the Elastic IP address disassociates from.
   *
   * @public
   */
  environmentId: string | undefined;

  /**
   * The name of the VLAN. `hcx` is the only accepted VLAN name at this time.
   *
   * @public
   */
  vlanName: string | undefined;

  /**
   * A unique ID for the Elastic IP address association.
   *
   * @public
   */
  associationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateEipFromVlanResponse {
  /**
   * The VLANs that Amazon EVS creates during environment creation.
   *
   * @public
   */
  vlan?: Vlan | undefined;
}

/**
 * @public
 */
export interface GetDepotUrlRequest {
  /**
   * The unique ID of the Amazon EVS environment to get the depot URL for.
   *
   * @public
   */
  environmentId: string | undefined;

  /**
   * Revokes the current authentication token and returns a new depot URL with a new token. Previously issued depot URLs will stop working within 5 minutes of rotation.
   *
   * @public
   */
  rotate?: boolean | undefined;
}

/**
 * @public
 */
export interface GetDepotUrlResponse {
  /**
   * The URL for accessing the Amazon EVS Custom Addon depot. This URL includes the authentication token as a path component.
   *
   * @public
   */
  depotUrl: string | undefined;

  /**
   * The authentication token for depot access. This token is included in the depot URL and is used to authenticate requests.
   *
   * @public
   */
  token: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentRequest {
  /**
   * A unique ID for the environment.
   *
   * @public
   */
  environmentId: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentResponse {
  /**
   * A description of the requested environment.
   *
   * @public
   */
  environment?: Environment | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentConnectorsRequest {
  /**
   * A unique pagination token for each page. If `nextToken` is returned, there are more results available. Make the call again using the returned token with all other arguments unchanged to retrieve the next page. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken* error.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. If you specify `MaxResults` in the request, the response includes information up to the limit specified.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A unique ID for the environment.
   *
   * @public
   */
  environmentId: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentConnectorsResponse {
  /**
   * A unique pagination token for next page results. Make the call again using this token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of connectors in the environment.
   *
   * @public
   */
  connectors?: Connector[] | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentHostsRequest {
  /**
   * A unique pagination token for each page. If `nextToken` is returned, there are more results available. Make the call again using the returned token with all other arguments unchanged to retrieve the next page. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken* error.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. If you specify `MaxResults` in the request, the response includes information up to the limit specified.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A unique ID for the environment.
   *
   * @public
   */
  environmentId: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentHostsResponse {
  /**
   * A unique pagination token for next page results. Make the call again using this token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of hosts in the environment.
   *
   * @public
   */
  environmentHosts?: Host[] | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsRequest {
  /**
   * A unique pagination token for each page. If `nextToken` is returned, there are more results available. Make the call again using the returned token with all other arguments unchanged to retrieve the next page. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken* error.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. If you specify `MaxResults` in the request, the response includes information up to the limit specified.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The state of an environment. Used to filter response results to return only environments with the specified `environmentState`.
   *
   * @public
   */
  state?: EnvironmentState[] | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsResponse {
  /**
   * A unique pagination token for next page results. Make the call again using this token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of environments with summarized environment details.
   *
   * @public
   */
  environmentSummaries?: EnvironmentSummary[] | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentVlansRequest {
  /**
   * A unique pagination token for each page. If `nextToken` is returned, there are more results available. Make the call again using the returned token with all other arguments unchanged to retrieve the next page. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken* error.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. If you specify `MaxResults` in the request, the response includes information up to the limit specified.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A unique ID for the environment.
   *
   * @public
   */
  environmentId: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentVlansResponse {
  /**
   * A unique pagination token for next page results. Make the call again using this token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of VLANs that are associated with the specified environment.
   *
   * @public
   */
  environmentVlans?: Vlan[] | undefined;
}

/**
 * @public
 */
export interface ListVmEntitlementsRequest {
  /**
   * A unique pagination token for each page. If `nextToken` is returned, there are more results available. Make the call again using the returned token with all other arguments unchanged to retrieve the next page. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken* error.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. If you specify `MaxResults` in the request, the response includes information up to the limit specified.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A unique ID for the environment.
   *
   * @public
   */
  environmentId: string | undefined;

  /**
   * A unique ID for the connector.
   *
   * @public
   */
  connectorId: string | undefined;

  /**
   * The type of entitlement to list.
   *
   * @public
   */
  entitlementType: EntitlementType | undefined;
}

/**
 * @public
 */
export interface ListVmEntitlementsResponse {
  /**
   * A unique pagination token for next page results. Make the call again using this token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of entitlements for virtual machines in the environment.
   *
   * @public
   */
  entitlements?: VmEntitlement[] | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentConnectorRequest {
  /**
   * > **Note:** This parameter is not used in Amazon EVS currently. If you supply input for this parameter, it will have no effect.
   *
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the connector update request. If you do not specify a client token, a randomly generated token is used for the request to ensure idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A unique ID for the environment that the connector belongs to.
   *
   * @public
   */
  environmentId: string | undefined;

  /**
   * A unique ID for the connector to update.
   *
   * @public
   */
  connectorId: string | undefined;

  /**
   * The new fully qualified domain name (FQDN) of the VCF appliance that the connector connects to.
   *
   * @public
   */
  applianceFqdn?: string | undefined;

  /**
   * The new ARN or name of the Amazon Web Services Secrets Manager secret that stores the credentials for the VCF appliance.
   *
   * @public
   */
  secretIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentConnectorResponse {
  /**
   * A description of the updated connector.
   *
   * @public
   */
  connector?: Connector | undefined;
}

/**
 * The request for the GetAccountSettings operation.
 *
 * @public
 */
export interface GetAccountSettingsRequest {}

/**
 * The response for the GetAccountSettings operation.
 *
 * @public
 */
export interface GetAccountSettingsResponse {
  /**
   * A list of regional account-level EVS settings for the account. EVS settings that have never been explicitly set are omitted from the response.
   *
   * @public
   */
  settings?: AccountSetting[] | undefined;
}

/**
 * @public
 */
export interface GetVersionsRequest {}

/**
 * Information about ESX versions offered for each EC2 instance type.
 *
 * @public
 */
export interface InstanceTypeEsxVersionsInfo {
  /**
   * The EC2 instance type.
   *
   * @public
   */
  instanceType: _InstanceType | undefined;

  /**
   * The list of ESX versions offered for this instance type.
   *
   * @public
   */
  esxVersions: string[] | undefined;
}

/**
 * Information about a VCF versions provided by Amazon EVS, including its status, default ESX version, and EC2 instance types.
 *
 * @public
 */
export interface VcfVersionInfo {
  /**
   * The VCF version number.
   *
   * @public
   */
  vcfVersion: VcfVersion | undefined;

  /**
   * The status for this VCF version. Valid values are:
   *
   * - `AVAILABLE` - This VCF version is available to you.
   * - `RESTRICTED` - This VCF version has limited availability.
   *
   * > **Note:** If the version you need shows RESTRICTED, and you require, check out [VCF versions and EC2 instance types provided by Amazon EVS](https://docs.aws.amazon.com/evs/latest/userguide/versions-provided.html) for more information.
   *
   * @public
   */
  status: string | undefined;

  /**
   * The default ESX version for this VCF version. It is based on Broadcom's Bill Of Materials (BOM).
   *
   * @public
   */
  defaultEsxVersion: string | undefined;

  /**
   * EC2 instance types provided by Amazon EVS for this VCF version for creating environments.
   *
   * @public
   */
  instanceTypes: _InstanceType[] | undefined;
}

/**
 * @public
 */
export interface GetVersionsResponse {
  /**
   * A list of VCF versions with their availability status, default ESX version, and instance types.
   *
   * @public
   */
  vcfVersions: VcfVersionInfo[] | undefined;

  /**
   * A list of EC2 instance types and their available ESX versions.
   *
   * @public
   */
  instanceTypeEsxVersions: InstanceTypeEsxVersionsInfo[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the resource to list tags for.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags for the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The request for the PutAccountSettings operation.
 *
 * @public
 */
export interface PutAccountSettingsRequest {
  /**
   * A list of regional account-level EVS settings to create or update. Only the settings included in this list are modified.
   *
   * @public
   */
  settings: AccountSetting[] | undefined;
}

/**
 * The response for the PutAccountSettings operation.
 *
 * @public
 */
export interface PutAccountSettingsResponse {
  /**
   * A list of regional account-level EVS settings, and their values, that were modified in this request.
   *
   * @public
   */
  settings?: AccountSetting[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to add tags to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other environment or Amazon Web Services resources.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to delete tags from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The keys of the tags to delete.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
