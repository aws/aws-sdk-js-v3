// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultEC2HttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AcceptAddressTransferCommandInput,
  AcceptAddressTransferCommandOutput,
} from "./commands/AcceptAddressTransferCommand";
import type {
  AcceptCapacityReservationBillingOwnershipCommandInput,
  AcceptCapacityReservationBillingOwnershipCommandOutput,
} from "./commands/AcceptCapacityReservationBillingOwnershipCommand";
import type {
  AcceptReservedInstancesExchangeQuoteCommandInput,
  AcceptReservedInstancesExchangeQuoteCommandOutput,
} from "./commands/AcceptReservedInstancesExchangeQuoteCommand";
import type {
  AcceptTransitGatewayMulticastDomainAssociationsCommandInput,
  AcceptTransitGatewayMulticastDomainAssociationsCommandOutput,
} from "./commands/AcceptTransitGatewayMulticastDomainAssociationsCommand";
import type {
  AcceptTransitGatewayPeeringAttachmentCommandInput,
  AcceptTransitGatewayPeeringAttachmentCommandOutput,
} from "./commands/AcceptTransitGatewayPeeringAttachmentCommand";
import type {
  AcceptTransitGatewayVpcAttachmentCommandInput,
  AcceptTransitGatewayVpcAttachmentCommandOutput,
} from "./commands/AcceptTransitGatewayVpcAttachmentCommand";
import type {
  AcceptVpcEndpointConnectionsCommandInput,
  AcceptVpcEndpointConnectionsCommandOutput,
} from "./commands/AcceptVpcEndpointConnectionsCommand";
import type {
  AcceptVpcPeeringConnectionCommandInput,
  AcceptVpcPeeringConnectionCommandOutput,
} from "./commands/AcceptVpcPeeringConnectionCommand";
import type {
  AdvertiseByoipCidrCommandInput,
  AdvertiseByoipCidrCommandOutput,
} from "./commands/AdvertiseByoipCidrCommand";
import type { AllocateAddressCommandInput, AllocateAddressCommandOutput } from "./commands/AllocateAddressCommand";
import type { AllocateHostsCommandInput, AllocateHostsCommandOutput } from "./commands/AllocateHostsCommand";
import type {
  AllocateIpamPoolCidrCommandInput,
  AllocateIpamPoolCidrCommandOutput,
} from "./commands/AllocateIpamPoolCidrCommand";
import type {
  ApplySecurityGroupsToClientVpnTargetNetworkCommandInput,
  ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput,
} from "./commands/ApplySecurityGroupsToClientVpnTargetNetworkCommand";
import type {
  AssignIpv6AddressesCommandInput,
  AssignIpv6AddressesCommandOutput,
} from "./commands/AssignIpv6AddressesCommand";
import type {
  AssignPrivateIpAddressesCommandInput,
  AssignPrivateIpAddressesCommandOutput,
} from "./commands/AssignPrivateIpAddressesCommand";
import type {
  AssignPrivateNatGatewayAddressCommandInput,
  AssignPrivateNatGatewayAddressCommandOutput,
} from "./commands/AssignPrivateNatGatewayAddressCommand";
import type { AssociateAddressCommandInput, AssociateAddressCommandOutput } from "./commands/AssociateAddressCommand";
import type {
  AssociateCapacityReservationBillingOwnerCommandInput,
  AssociateCapacityReservationBillingOwnerCommandOutput,
} from "./commands/AssociateCapacityReservationBillingOwnerCommand";
import type {
  AssociateClientVpnTargetNetworkCommandInput,
  AssociateClientVpnTargetNetworkCommandOutput,
} from "./commands/AssociateClientVpnTargetNetworkCommand";
import type {
  AssociateDhcpOptionsCommandInput,
  AssociateDhcpOptionsCommandOutput,
} from "./commands/AssociateDhcpOptionsCommand";
import type {
  AssociateEnclaveCertificateIamRoleCommandInput,
  AssociateEnclaveCertificateIamRoleCommandOutput,
} from "./commands/AssociateEnclaveCertificateIamRoleCommand";
import type {
  AssociateIamInstanceProfileCommandInput,
  AssociateIamInstanceProfileCommandOutput,
} from "./commands/AssociateIamInstanceProfileCommand";
import type {
  AssociateInstanceEventWindowCommandInput,
  AssociateInstanceEventWindowCommandOutput,
} from "./commands/AssociateInstanceEventWindowCommand";
import type {
  AssociateIpamByoasnCommandInput,
  AssociateIpamByoasnCommandOutput,
} from "./commands/AssociateIpamByoasnCommand";
import type {
  AssociateIpamResourceDiscoveryCommandInput,
  AssociateIpamResourceDiscoveryCommandOutput,
} from "./commands/AssociateIpamResourceDiscoveryCommand";
import type {
  AssociateNatGatewayAddressCommandInput,
  AssociateNatGatewayAddressCommandOutput,
} from "./commands/AssociateNatGatewayAddressCommand";
import type {
  AssociateRouteServerCommandInput,
  AssociateRouteServerCommandOutput,
} from "./commands/AssociateRouteServerCommand";
import type {
  AssociateRouteTableCommandInput,
  AssociateRouteTableCommandOutput,
} from "./commands/AssociateRouteTableCommand";
import type {
  AssociateSecurityGroupVpcCommandInput,
  AssociateSecurityGroupVpcCommandOutput,
} from "./commands/AssociateSecurityGroupVpcCommand";
import type {
  AssociateSubnetCidrBlockCommandInput,
  AssociateSubnetCidrBlockCommandOutput,
} from "./commands/AssociateSubnetCidrBlockCommand";
import type {
  AssociateTransitGatewayMulticastDomainCommandInput,
  AssociateTransitGatewayMulticastDomainCommandOutput,
} from "./commands/AssociateTransitGatewayMulticastDomainCommand";
import type {
  AssociateTransitGatewayPolicyTableCommandInput,
  AssociateTransitGatewayPolicyTableCommandOutput,
} from "./commands/AssociateTransitGatewayPolicyTableCommand";
import type {
  AssociateTransitGatewayRouteTableCommandInput,
  AssociateTransitGatewayRouteTableCommandOutput,
} from "./commands/AssociateTransitGatewayRouteTableCommand";
import type {
  AssociateTrunkInterfaceCommandInput,
  AssociateTrunkInterfaceCommandOutput,
} from "./commands/AssociateTrunkInterfaceCommand";
import type {
  AssociateVpcCidrBlockCommandInput,
  AssociateVpcCidrBlockCommandOutput,
} from "./commands/AssociateVpcCidrBlockCommand";
import type {
  AttachClassicLinkVpcCommandInput,
  AttachClassicLinkVpcCommandOutput,
} from "./commands/AttachClassicLinkVpcCommand";
import type {
  AttachInternetGatewayCommandInput,
  AttachInternetGatewayCommandOutput,
} from "./commands/AttachInternetGatewayCommand";
import type {
  AttachNetworkInterfaceCommandInput,
  AttachNetworkInterfaceCommandOutput,
} from "./commands/AttachNetworkInterfaceCommand";
import type {
  AttachVerifiedAccessTrustProviderCommandInput,
  AttachVerifiedAccessTrustProviderCommandOutput,
} from "./commands/AttachVerifiedAccessTrustProviderCommand";
import type { AttachVolumeCommandInput, AttachVolumeCommandOutput } from "./commands/AttachVolumeCommand";
import type { AttachVpnGatewayCommandInput, AttachVpnGatewayCommandOutput } from "./commands/AttachVpnGatewayCommand";
import type {
  AuthorizeClientVpnIngressCommandInput,
  AuthorizeClientVpnIngressCommandOutput,
} from "./commands/AuthorizeClientVpnIngressCommand";
import type {
  AuthorizeSecurityGroupEgressCommandInput,
  AuthorizeSecurityGroupEgressCommandOutput,
} from "./commands/AuthorizeSecurityGroupEgressCommand";
import type {
  AuthorizeSecurityGroupIngressCommandInput,
  AuthorizeSecurityGroupIngressCommandOutput,
} from "./commands/AuthorizeSecurityGroupIngressCommand";
import type { BundleInstanceCommandInput, BundleInstanceCommandOutput } from "./commands/BundleInstanceCommand";
import type { CancelBundleTaskCommandInput, CancelBundleTaskCommandOutput } from "./commands/CancelBundleTaskCommand";
import type {
  CancelCapacityReservationCommandInput,
  CancelCapacityReservationCommandOutput,
} from "./commands/CancelCapacityReservationCommand";
import type {
  CancelCapacityReservationFleetsCommandInput,
  CancelCapacityReservationFleetsCommandOutput,
} from "./commands/CancelCapacityReservationFleetsCommand";
import type {
  CancelConversionTaskCommandInput,
  CancelConversionTaskCommandOutput,
} from "./commands/CancelConversionTaskCommand";
import type {
  CancelDeclarativePoliciesReportCommandInput,
  CancelDeclarativePoliciesReportCommandOutput,
} from "./commands/CancelDeclarativePoliciesReportCommand";
import type { CancelExportTaskCommandInput, CancelExportTaskCommandOutput } from "./commands/CancelExportTaskCommand";
import type {
  CancelImageLaunchPermissionCommandInput,
  CancelImageLaunchPermissionCommandOutput,
} from "./commands/CancelImageLaunchPermissionCommand";
import type { CancelImportTaskCommandInput, CancelImportTaskCommandOutput } from "./commands/CancelImportTaskCommand";
import type {
  CancelReservedInstancesListingCommandInput,
  CancelReservedInstancesListingCommandOutput,
} from "./commands/CancelReservedInstancesListingCommand";
import type {
  CancelSpotFleetRequestsCommandInput,
  CancelSpotFleetRequestsCommandOutput,
} from "./commands/CancelSpotFleetRequestsCommand";
import type {
  CancelSpotInstanceRequestsCommandInput,
  CancelSpotInstanceRequestsCommandOutput,
} from "./commands/CancelSpotInstanceRequestsCommand";
import type {
  ConfirmProductInstanceCommandInput,
  ConfirmProductInstanceCommandOutput,
} from "./commands/ConfirmProductInstanceCommand";
import type { CopyFpgaImageCommandInput, CopyFpgaImageCommandOutput } from "./commands/CopyFpgaImageCommand";
import type { CopyImageCommandInput, CopyImageCommandOutput } from "./commands/CopyImageCommand";
import type { CopySnapshotCommandInput, CopySnapshotCommandOutput } from "./commands/CopySnapshotCommand";
import type { CopyVolumesCommandInput, CopyVolumesCommandOutput } from "./commands/CopyVolumesCommand";
import type {
  CreateCapacityManagerDataExportCommandInput,
  CreateCapacityManagerDataExportCommandOutput,
} from "./commands/CreateCapacityManagerDataExportCommand";
import type {
  CreateCapacityReservationBySplittingCommandInput,
  CreateCapacityReservationBySplittingCommandOutput,
} from "./commands/CreateCapacityReservationBySplittingCommand";
import type {
  CreateCapacityReservationCommandInput,
  CreateCapacityReservationCommandOutput,
} from "./commands/CreateCapacityReservationCommand";
import type {
  CreateCapacityReservationFleetCommandInput,
  CreateCapacityReservationFleetCommandOutput,
} from "./commands/CreateCapacityReservationFleetCommand";
import type {
  CreateCarrierGatewayCommandInput,
  CreateCarrierGatewayCommandOutput,
} from "./commands/CreateCarrierGatewayCommand";
import type {
  CreateClientVpnEndpointCommandInput,
  CreateClientVpnEndpointCommandOutput,
} from "./commands/CreateClientVpnEndpointCommand";
import type {
  CreateClientVpnRouteCommandInput,
  CreateClientVpnRouteCommandOutput,
} from "./commands/CreateClientVpnRouteCommand";
import type { CreateCoipCidrCommandInput, CreateCoipCidrCommandOutput } from "./commands/CreateCoipCidrCommand";
import type { CreateCoipPoolCommandInput, CreateCoipPoolCommandOutput } from "./commands/CreateCoipPoolCommand";
import type {
  CreateCustomerGatewayCommandInput,
  CreateCustomerGatewayCommandOutput,
} from "./commands/CreateCustomerGatewayCommand";
import type {
  CreateDefaultSubnetCommandInput,
  CreateDefaultSubnetCommandOutput,
} from "./commands/CreateDefaultSubnetCommand";
import type { CreateDefaultVpcCommandInput, CreateDefaultVpcCommandOutput } from "./commands/CreateDefaultVpcCommand";
import type {
  CreateDelegateMacVolumeOwnershipTaskCommandInput,
  CreateDelegateMacVolumeOwnershipTaskCommandOutput,
} from "./commands/CreateDelegateMacVolumeOwnershipTaskCommand";
import type {
  CreateDhcpOptionsCommandInput,
  CreateDhcpOptionsCommandOutput,
} from "./commands/CreateDhcpOptionsCommand";
import type {
  CreateEgressOnlyInternetGatewayCommandInput,
  CreateEgressOnlyInternetGatewayCommandOutput,
} from "./commands/CreateEgressOnlyInternetGatewayCommand";
import type { CreateFleetCommandInput, CreateFleetCommandOutput } from "./commands/CreateFleetCommand";
import type { CreateFlowLogsCommandInput, CreateFlowLogsCommandOutput } from "./commands/CreateFlowLogsCommand";
import type { CreateFpgaImageCommandInput, CreateFpgaImageCommandOutput } from "./commands/CreateFpgaImageCommand";
import type { CreateImageCommandInput, CreateImageCommandOutput } from "./commands/CreateImageCommand";
import type {
  CreateImageUsageReportCommandInput,
  CreateImageUsageReportCommandOutput,
} from "./commands/CreateImageUsageReportCommand";
import type {
  CreateInstanceConnectEndpointCommandInput,
  CreateInstanceConnectEndpointCommandOutput,
} from "./commands/CreateInstanceConnectEndpointCommand";
import type {
  CreateInstanceEventWindowCommandInput,
  CreateInstanceEventWindowCommandOutput,
} from "./commands/CreateInstanceEventWindowCommand";
import type {
  CreateInstanceExportTaskCommandInput,
  CreateInstanceExportTaskCommandOutput,
} from "./commands/CreateInstanceExportTaskCommand";
import type {
  CreateInternetGatewayCommandInput,
  CreateInternetGatewayCommandOutput,
} from "./commands/CreateInternetGatewayCommand";
import type {
  CreateInterruptibleCapacityReservationAllocationCommandInput,
  CreateInterruptibleCapacityReservationAllocationCommandOutput,
} from "./commands/CreateInterruptibleCapacityReservationAllocationCommand";
import type { CreateIpamCommandInput, CreateIpamCommandOutput } from "./commands/CreateIpamCommand";
import type {
  CreateIpamExternalResourceVerificationTokenCommandInput,
  CreateIpamExternalResourceVerificationTokenCommandOutput,
} from "./commands/CreateIpamExternalResourceVerificationTokenCommand";
import type { CreateIpamPolicyCommandInput, CreateIpamPolicyCommandOutput } from "./commands/CreateIpamPolicyCommand";
import type { CreateIpamPoolCommandInput, CreateIpamPoolCommandOutput } from "./commands/CreateIpamPoolCommand";
import type {
  CreateIpamPrefixListResolverCommandInput,
  CreateIpamPrefixListResolverCommandOutput,
} from "./commands/CreateIpamPrefixListResolverCommand";
import type {
  CreateIpamPrefixListResolverTargetCommandInput,
  CreateIpamPrefixListResolverTargetCommandOutput,
} from "./commands/CreateIpamPrefixListResolverTargetCommand";
import type {
  CreateIpamResourceDiscoveryCommandInput,
  CreateIpamResourceDiscoveryCommandOutput,
} from "./commands/CreateIpamResourceDiscoveryCommand";
import type { CreateIpamScopeCommandInput, CreateIpamScopeCommandOutput } from "./commands/CreateIpamScopeCommand";
import type { CreateKeyPairCommandInput, CreateKeyPairCommandOutput } from "./commands/CreateKeyPairCommand";
import type {
  CreateLaunchTemplateCommandInput,
  CreateLaunchTemplateCommandOutput,
} from "./commands/CreateLaunchTemplateCommand";
import type {
  CreateLaunchTemplateVersionCommandInput,
  CreateLaunchTemplateVersionCommandOutput,
} from "./commands/CreateLaunchTemplateVersionCommand";
import type {
  CreateLocalGatewayRouteCommandInput,
  CreateLocalGatewayRouteCommandOutput,
} from "./commands/CreateLocalGatewayRouteCommand";
import type {
  CreateLocalGatewayRouteTableCommandInput,
  CreateLocalGatewayRouteTableCommandOutput,
} from "./commands/CreateLocalGatewayRouteTableCommand";
import type {
  CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput,
  CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput,
} from "./commands/CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand";
import type {
  CreateLocalGatewayRouteTableVpcAssociationCommandInput,
  CreateLocalGatewayRouteTableVpcAssociationCommandOutput,
} from "./commands/CreateLocalGatewayRouteTableVpcAssociationCommand";
import type {
  CreateLocalGatewayVirtualInterfaceCommandInput,
  CreateLocalGatewayVirtualInterfaceCommandOutput,
} from "./commands/CreateLocalGatewayVirtualInterfaceCommand";
import type {
  CreateLocalGatewayVirtualInterfaceGroupCommandInput,
  CreateLocalGatewayVirtualInterfaceGroupCommandOutput,
} from "./commands/CreateLocalGatewayVirtualInterfaceGroupCommand";
import type {
  CreateMacSystemIntegrityProtectionModificationTaskCommandInput,
  CreateMacSystemIntegrityProtectionModificationTaskCommandOutput,
} from "./commands/CreateMacSystemIntegrityProtectionModificationTaskCommand";
import type {
  CreateManagedPrefixListCommandInput,
  CreateManagedPrefixListCommandOutput,
} from "./commands/CreateManagedPrefixListCommand";
import type { CreateNatGatewayCommandInput, CreateNatGatewayCommandOutput } from "./commands/CreateNatGatewayCommand";
import type { CreateNetworkAclCommandInput, CreateNetworkAclCommandOutput } from "./commands/CreateNetworkAclCommand";
import type {
  CreateNetworkAclEntryCommandInput,
  CreateNetworkAclEntryCommandOutput,
} from "./commands/CreateNetworkAclEntryCommand";
import type {
  CreateNetworkInsightsAccessScopeCommandInput,
  CreateNetworkInsightsAccessScopeCommandOutput,
} from "./commands/CreateNetworkInsightsAccessScopeCommand";
import type {
  CreateNetworkInsightsPathCommandInput,
  CreateNetworkInsightsPathCommandOutput,
} from "./commands/CreateNetworkInsightsPathCommand";
import type {
  CreateNetworkInterfaceCommandInput,
  CreateNetworkInterfaceCommandOutput,
} from "./commands/CreateNetworkInterfaceCommand";
import type {
  CreateNetworkInterfacePermissionCommandInput,
  CreateNetworkInterfacePermissionCommandOutput,
} from "./commands/CreateNetworkInterfacePermissionCommand";
import type {
  CreatePlacementGroupCommandInput,
  CreatePlacementGroupCommandOutput,
} from "./commands/CreatePlacementGroupCommand";
import type {
  CreatePublicIpv4PoolCommandInput,
  CreatePublicIpv4PoolCommandOutput,
} from "./commands/CreatePublicIpv4PoolCommand";
import type {
  CreateReplaceRootVolumeTaskCommandInput,
  CreateReplaceRootVolumeTaskCommandOutput,
} from "./commands/CreateReplaceRootVolumeTaskCommand";
import type {
  CreateReservedInstancesListingCommandInput,
  CreateReservedInstancesListingCommandOutput,
} from "./commands/CreateReservedInstancesListingCommand";
import type {
  CreateRestoreImageTaskCommandInput,
  CreateRestoreImageTaskCommandOutput,
} from "./commands/CreateRestoreImageTaskCommand";
import type { CreateRouteCommandInput, CreateRouteCommandOutput } from "./commands/CreateRouteCommand";
import type {
  CreateRouteServerCommandInput,
  CreateRouteServerCommandOutput,
} from "./commands/CreateRouteServerCommand";
import type {
  CreateRouteServerEndpointCommandInput,
  CreateRouteServerEndpointCommandOutput,
} from "./commands/CreateRouteServerEndpointCommand";
import type {
  CreateRouteServerPeerCommandInput,
  CreateRouteServerPeerCommandOutput,
} from "./commands/CreateRouteServerPeerCommand";
import type { CreateRouteTableCommandInput, CreateRouteTableCommandOutput } from "./commands/CreateRouteTableCommand";
import type {
  CreateSecondaryNetworkCommandInput,
  CreateSecondaryNetworkCommandOutput,
} from "./commands/CreateSecondaryNetworkCommand";
import type {
  CreateSecondarySubnetCommandInput,
  CreateSecondarySubnetCommandOutput,
} from "./commands/CreateSecondarySubnetCommand";
import type {
  CreateSecurityGroupCommandInput,
  CreateSecurityGroupCommandOutput,
} from "./commands/CreateSecurityGroupCommand";
import type { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "./commands/CreateSnapshotCommand";
import type { CreateSnapshotsCommandInput, CreateSnapshotsCommandOutput } from "./commands/CreateSnapshotsCommand";
import type {
  CreateSpotDatafeedSubscriptionCommandInput,
  CreateSpotDatafeedSubscriptionCommandOutput,
} from "./commands/CreateSpotDatafeedSubscriptionCommand";
import type {
  CreateStoreImageTaskCommandInput,
  CreateStoreImageTaskCommandOutput,
} from "./commands/CreateStoreImageTaskCommand";
import type {
  CreateSubnetCidrReservationCommandInput,
  CreateSubnetCidrReservationCommandOutput,
} from "./commands/CreateSubnetCidrReservationCommand";
import type { CreateSubnetCommandInput, CreateSubnetCommandOutput } from "./commands/CreateSubnetCommand";
import type { CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand";
import type {
  CreateTrafficMirrorFilterCommandInput,
  CreateTrafficMirrorFilterCommandOutput,
} from "./commands/CreateTrafficMirrorFilterCommand";
import type {
  CreateTrafficMirrorFilterRuleCommandInput,
  CreateTrafficMirrorFilterRuleCommandOutput,
} from "./commands/CreateTrafficMirrorFilterRuleCommand";
import type {
  CreateTrafficMirrorSessionCommandInput,
  CreateTrafficMirrorSessionCommandOutput,
} from "./commands/CreateTrafficMirrorSessionCommand";
import type {
  CreateTrafficMirrorTargetCommandInput,
  CreateTrafficMirrorTargetCommandOutput,
} from "./commands/CreateTrafficMirrorTargetCommand";
import type {
  CreateTransitGatewayCommandInput,
  CreateTransitGatewayCommandOutput,
} from "./commands/CreateTransitGatewayCommand";
import type {
  CreateTransitGatewayConnectCommandInput,
  CreateTransitGatewayConnectCommandOutput,
} from "./commands/CreateTransitGatewayConnectCommand";
import type {
  CreateTransitGatewayConnectPeerCommandInput,
  CreateTransitGatewayConnectPeerCommandOutput,
} from "./commands/CreateTransitGatewayConnectPeerCommand";
import type {
  CreateTransitGatewayMeteringPolicyCommandInput,
  CreateTransitGatewayMeteringPolicyCommandOutput,
} from "./commands/CreateTransitGatewayMeteringPolicyCommand";
import type {
  CreateTransitGatewayMeteringPolicyEntryCommandInput,
  CreateTransitGatewayMeteringPolicyEntryCommandOutput,
} from "./commands/CreateTransitGatewayMeteringPolicyEntryCommand";
import type {
  CreateTransitGatewayMulticastDomainCommandInput,
  CreateTransitGatewayMulticastDomainCommandOutput,
} from "./commands/CreateTransitGatewayMulticastDomainCommand";
import type {
  CreateTransitGatewayPeeringAttachmentCommandInput,
  CreateTransitGatewayPeeringAttachmentCommandOutput,
} from "./commands/CreateTransitGatewayPeeringAttachmentCommand";
import type {
  CreateTransitGatewayPolicyTableCommandInput,
  CreateTransitGatewayPolicyTableCommandOutput,
} from "./commands/CreateTransitGatewayPolicyTableCommand";
import type {
  CreateTransitGatewayPrefixListReferenceCommandInput,
  CreateTransitGatewayPrefixListReferenceCommandOutput,
} from "./commands/CreateTransitGatewayPrefixListReferenceCommand";
import type {
  CreateTransitGatewayRouteCommandInput,
  CreateTransitGatewayRouteCommandOutput,
} from "./commands/CreateTransitGatewayRouteCommand";
import type {
  CreateTransitGatewayRouteTableAnnouncementCommandInput,
  CreateTransitGatewayRouteTableAnnouncementCommandOutput,
} from "./commands/CreateTransitGatewayRouteTableAnnouncementCommand";
import type {
  CreateTransitGatewayRouteTableCommandInput,
  CreateTransitGatewayRouteTableCommandOutput,
} from "./commands/CreateTransitGatewayRouteTableCommand";
import type {
  CreateTransitGatewayVpcAttachmentCommandInput,
  CreateTransitGatewayVpcAttachmentCommandOutput,
} from "./commands/CreateTransitGatewayVpcAttachmentCommand";
import type {
  CreateVerifiedAccessEndpointCommandInput,
  CreateVerifiedAccessEndpointCommandOutput,
} from "./commands/CreateVerifiedAccessEndpointCommand";
import type {
  CreateVerifiedAccessGroupCommandInput,
  CreateVerifiedAccessGroupCommandOutput,
} from "./commands/CreateVerifiedAccessGroupCommand";
import type {
  CreateVerifiedAccessInstanceCommandInput,
  CreateVerifiedAccessInstanceCommandOutput,
} from "./commands/CreateVerifiedAccessInstanceCommand";
import type {
  CreateVerifiedAccessTrustProviderCommandInput,
  CreateVerifiedAccessTrustProviderCommandOutput,
} from "./commands/CreateVerifiedAccessTrustProviderCommand";
import type { CreateVolumeCommandInput, CreateVolumeCommandOutput } from "./commands/CreateVolumeCommand";
import type {
  CreateVpcBlockPublicAccessExclusionCommandInput,
  CreateVpcBlockPublicAccessExclusionCommandOutput,
} from "./commands/CreateVpcBlockPublicAccessExclusionCommand";
import type { CreateVpcCommandInput, CreateVpcCommandOutput } from "./commands/CreateVpcCommand";
import type {
  CreateVpcEncryptionControlCommandInput,
  CreateVpcEncryptionControlCommandOutput,
} from "./commands/CreateVpcEncryptionControlCommand";
import type {
  CreateVpcEndpointCommandInput,
  CreateVpcEndpointCommandOutput,
} from "./commands/CreateVpcEndpointCommand";
import type {
  CreateVpcEndpointConnectionNotificationCommandInput,
  CreateVpcEndpointConnectionNotificationCommandOutput,
} from "./commands/CreateVpcEndpointConnectionNotificationCommand";
import type {
  CreateVpcEndpointServiceConfigurationCommandInput,
  CreateVpcEndpointServiceConfigurationCommandOutput,
} from "./commands/CreateVpcEndpointServiceConfigurationCommand";
import type {
  CreateVpcPeeringConnectionCommandInput,
  CreateVpcPeeringConnectionCommandOutput,
} from "./commands/CreateVpcPeeringConnectionCommand";
import type {
  CreateVpnConcentratorCommandInput,
  CreateVpnConcentratorCommandOutput,
} from "./commands/CreateVpnConcentratorCommand";
import type {
  CreateVpnConnectionCommandInput,
  CreateVpnConnectionCommandOutput,
} from "./commands/CreateVpnConnectionCommand";
import type {
  CreateVpnConnectionRouteCommandInput,
  CreateVpnConnectionRouteCommandOutput,
} from "./commands/CreateVpnConnectionRouteCommand";
import type { CreateVpnGatewayCommandInput, CreateVpnGatewayCommandOutput } from "./commands/CreateVpnGatewayCommand";
import type {
  DeleteCapacityManagerDataExportCommandInput,
  DeleteCapacityManagerDataExportCommandOutput,
} from "./commands/DeleteCapacityManagerDataExportCommand";
import type {
  DeleteCarrierGatewayCommandInput,
  DeleteCarrierGatewayCommandOutput,
} from "./commands/DeleteCarrierGatewayCommand";
import type {
  DeleteClientVpnEndpointCommandInput,
  DeleteClientVpnEndpointCommandOutput,
} from "./commands/DeleteClientVpnEndpointCommand";
import type {
  DeleteClientVpnRouteCommandInput,
  DeleteClientVpnRouteCommandOutput,
} from "./commands/DeleteClientVpnRouteCommand";
import type { DeleteCoipCidrCommandInput, DeleteCoipCidrCommandOutput } from "./commands/DeleteCoipCidrCommand";
import type { DeleteCoipPoolCommandInput, DeleteCoipPoolCommandOutput } from "./commands/DeleteCoipPoolCommand";
import type {
  DeleteCustomerGatewayCommandInput,
  DeleteCustomerGatewayCommandOutput,
} from "./commands/DeleteCustomerGatewayCommand";
import type {
  DeleteDhcpOptionsCommandInput,
  DeleteDhcpOptionsCommandOutput,
} from "./commands/DeleteDhcpOptionsCommand";
import type {
  DeleteEgressOnlyInternetGatewayCommandInput,
  DeleteEgressOnlyInternetGatewayCommandOutput,
} from "./commands/DeleteEgressOnlyInternetGatewayCommand";
import type { DeleteFleetsCommandInput, DeleteFleetsCommandOutput } from "./commands/DeleteFleetsCommand";
import type { DeleteFlowLogsCommandInput, DeleteFlowLogsCommandOutput } from "./commands/DeleteFlowLogsCommand";
import type { DeleteFpgaImageCommandInput, DeleteFpgaImageCommandOutput } from "./commands/DeleteFpgaImageCommand";
import type {
  DeleteImageUsageReportCommandInput,
  DeleteImageUsageReportCommandOutput,
} from "./commands/DeleteImageUsageReportCommand";
import type {
  DeleteInstanceConnectEndpointCommandInput,
  DeleteInstanceConnectEndpointCommandOutput,
} from "./commands/DeleteInstanceConnectEndpointCommand";
import type {
  DeleteInstanceEventWindowCommandInput,
  DeleteInstanceEventWindowCommandOutput,
} from "./commands/DeleteInstanceEventWindowCommand";
import type {
  DeleteInternetGatewayCommandInput,
  DeleteInternetGatewayCommandOutput,
} from "./commands/DeleteInternetGatewayCommand";
import type { DeleteIpamCommandInput, DeleteIpamCommandOutput } from "./commands/DeleteIpamCommand";
import type {
  DeleteIpamExternalResourceVerificationTokenCommandInput,
  DeleteIpamExternalResourceVerificationTokenCommandOutput,
} from "./commands/DeleteIpamExternalResourceVerificationTokenCommand";
import type { DeleteIpamPolicyCommandInput, DeleteIpamPolicyCommandOutput } from "./commands/DeleteIpamPolicyCommand";
import type { DeleteIpamPoolCommandInput, DeleteIpamPoolCommandOutput } from "./commands/DeleteIpamPoolCommand";
import type {
  DeleteIpamPrefixListResolverCommandInput,
  DeleteIpamPrefixListResolverCommandOutput,
} from "./commands/DeleteIpamPrefixListResolverCommand";
import type {
  DeleteIpamPrefixListResolverTargetCommandInput,
  DeleteIpamPrefixListResolverTargetCommandOutput,
} from "./commands/DeleteIpamPrefixListResolverTargetCommand";
import type {
  DeleteIpamResourceDiscoveryCommandInput,
  DeleteIpamResourceDiscoveryCommandOutput,
} from "./commands/DeleteIpamResourceDiscoveryCommand";
import type { DeleteIpamScopeCommandInput, DeleteIpamScopeCommandOutput } from "./commands/DeleteIpamScopeCommand";
import type { DeleteKeyPairCommandInput, DeleteKeyPairCommandOutput } from "./commands/DeleteKeyPairCommand";
import type {
  DeleteLaunchTemplateCommandInput,
  DeleteLaunchTemplateCommandOutput,
} from "./commands/DeleteLaunchTemplateCommand";
import type {
  DeleteLaunchTemplateVersionsCommandInput,
  DeleteLaunchTemplateVersionsCommandOutput,
} from "./commands/DeleteLaunchTemplateVersionsCommand";
import type {
  DeleteLocalGatewayRouteCommandInput,
  DeleteLocalGatewayRouteCommandOutput,
} from "./commands/DeleteLocalGatewayRouteCommand";
import type {
  DeleteLocalGatewayRouteTableCommandInput,
  DeleteLocalGatewayRouteTableCommandOutput,
} from "./commands/DeleteLocalGatewayRouteTableCommand";
import type {
  DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput,
  DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput,
} from "./commands/DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand";
import type {
  DeleteLocalGatewayRouteTableVpcAssociationCommandInput,
  DeleteLocalGatewayRouteTableVpcAssociationCommandOutput,
} from "./commands/DeleteLocalGatewayRouteTableVpcAssociationCommand";
import type {
  DeleteLocalGatewayVirtualInterfaceCommandInput,
  DeleteLocalGatewayVirtualInterfaceCommandOutput,
} from "./commands/DeleteLocalGatewayVirtualInterfaceCommand";
import type {
  DeleteLocalGatewayVirtualInterfaceGroupCommandInput,
  DeleteLocalGatewayVirtualInterfaceGroupCommandOutput,
} from "./commands/DeleteLocalGatewayVirtualInterfaceGroupCommand";
import type {
  DeleteManagedPrefixListCommandInput,
  DeleteManagedPrefixListCommandOutput,
} from "./commands/DeleteManagedPrefixListCommand";
import type { DeleteNatGatewayCommandInput, DeleteNatGatewayCommandOutput } from "./commands/DeleteNatGatewayCommand";
import type { DeleteNetworkAclCommandInput, DeleteNetworkAclCommandOutput } from "./commands/DeleteNetworkAclCommand";
import type {
  DeleteNetworkAclEntryCommandInput,
  DeleteNetworkAclEntryCommandOutput,
} from "./commands/DeleteNetworkAclEntryCommand";
import type {
  DeleteNetworkInsightsAccessScopeAnalysisCommandInput,
  DeleteNetworkInsightsAccessScopeAnalysisCommandOutput,
} from "./commands/DeleteNetworkInsightsAccessScopeAnalysisCommand";
import type {
  DeleteNetworkInsightsAccessScopeCommandInput,
  DeleteNetworkInsightsAccessScopeCommandOutput,
} from "./commands/DeleteNetworkInsightsAccessScopeCommand";
import type {
  DeleteNetworkInsightsAnalysisCommandInput,
  DeleteNetworkInsightsAnalysisCommandOutput,
} from "./commands/DeleteNetworkInsightsAnalysisCommand";
import type {
  DeleteNetworkInsightsPathCommandInput,
  DeleteNetworkInsightsPathCommandOutput,
} from "./commands/DeleteNetworkInsightsPathCommand";
import type {
  DeleteNetworkInterfaceCommandInput,
  DeleteNetworkInterfaceCommandOutput,
} from "./commands/DeleteNetworkInterfaceCommand";
import type {
  DeleteNetworkInterfacePermissionCommandInput,
  DeleteNetworkInterfacePermissionCommandOutput,
} from "./commands/DeleteNetworkInterfacePermissionCommand";
import type {
  DeletePlacementGroupCommandInput,
  DeletePlacementGroupCommandOutput,
} from "./commands/DeletePlacementGroupCommand";
import type {
  DeletePublicIpv4PoolCommandInput,
  DeletePublicIpv4PoolCommandOutput,
} from "./commands/DeletePublicIpv4PoolCommand";
import type {
  DeleteQueuedReservedInstancesCommandInput,
  DeleteQueuedReservedInstancesCommandOutput,
} from "./commands/DeleteQueuedReservedInstancesCommand";
import type { DeleteRouteCommandInput, DeleteRouteCommandOutput } from "./commands/DeleteRouteCommand";
import type {
  DeleteRouteServerCommandInput,
  DeleteRouteServerCommandOutput,
} from "./commands/DeleteRouteServerCommand";
import type {
  DeleteRouteServerEndpointCommandInput,
  DeleteRouteServerEndpointCommandOutput,
} from "./commands/DeleteRouteServerEndpointCommand";
import type {
  DeleteRouteServerPeerCommandInput,
  DeleteRouteServerPeerCommandOutput,
} from "./commands/DeleteRouteServerPeerCommand";
import type { DeleteRouteTableCommandInput, DeleteRouteTableCommandOutput } from "./commands/DeleteRouteTableCommand";
import type {
  DeleteSecondaryNetworkCommandInput,
  DeleteSecondaryNetworkCommandOutput,
} from "./commands/DeleteSecondaryNetworkCommand";
import type {
  DeleteSecondarySubnetCommandInput,
  DeleteSecondarySubnetCommandOutput,
} from "./commands/DeleteSecondarySubnetCommand";
import type {
  DeleteSecurityGroupCommandInput,
  DeleteSecurityGroupCommandOutput,
} from "./commands/DeleteSecurityGroupCommand";
import type { DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput } from "./commands/DeleteSnapshotCommand";
import type {
  DeleteSpotDatafeedSubscriptionCommandInput,
  DeleteSpotDatafeedSubscriptionCommandOutput,
} from "./commands/DeleteSpotDatafeedSubscriptionCommand";
import type {
  DeleteSubnetCidrReservationCommandInput,
  DeleteSubnetCidrReservationCommandOutput,
} from "./commands/DeleteSubnetCidrReservationCommand";
import type { DeleteSubnetCommandInput, DeleteSubnetCommandOutput } from "./commands/DeleteSubnetCommand";
import type { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import type {
  DeleteTrafficMirrorFilterCommandInput,
  DeleteTrafficMirrorFilterCommandOutput,
} from "./commands/DeleteTrafficMirrorFilterCommand";
import type {
  DeleteTrafficMirrorFilterRuleCommandInput,
  DeleteTrafficMirrorFilterRuleCommandOutput,
} from "./commands/DeleteTrafficMirrorFilterRuleCommand";
import type {
  DeleteTrafficMirrorSessionCommandInput,
  DeleteTrafficMirrorSessionCommandOutput,
} from "./commands/DeleteTrafficMirrorSessionCommand";
import type {
  DeleteTrafficMirrorTargetCommandInput,
  DeleteTrafficMirrorTargetCommandOutput,
} from "./commands/DeleteTrafficMirrorTargetCommand";
import type {
  DeleteTransitGatewayCommandInput,
  DeleteTransitGatewayCommandOutput,
} from "./commands/DeleteTransitGatewayCommand";
import type {
  DeleteTransitGatewayConnectCommandInput,
  DeleteTransitGatewayConnectCommandOutput,
} from "./commands/DeleteTransitGatewayConnectCommand";
import type {
  DeleteTransitGatewayConnectPeerCommandInput,
  DeleteTransitGatewayConnectPeerCommandOutput,
} from "./commands/DeleteTransitGatewayConnectPeerCommand";
import type {
  DeleteTransitGatewayMeteringPolicyCommandInput,
  DeleteTransitGatewayMeteringPolicyCommandOutput,
} from "./commands/DeleteTransitGatewayMeteringPolicyCommand";
import type {
  DeleteTransitGatewayMeteringPolicyEntryCommandInput,
  DeleteTransitGatewayMeteringPolicyEntryCommandOutput,
} from "./commands/DeleteTransitGatewayMeteringPolicyEntryCommand";
import type {
  DeleteTransitGatewayMulticastDomainCommandInput,
  DeleteTransitGatewayMulticastDomainCommandOutput,
} from "./commands/DeleteTransitGatewayMulticastDomainCommand";
import type {
  DeleteTransitGatewayPeeringAttachmentCommandInput,
  DeleteTransitGatewayPeeringAttachmentCommandOutput,
} from "./commands/DeleteTransitGatewayPeeringAttachmentCommand";
import type {
  DeleteTransitGatewayPolicyTableCommandInput,
  DeleteTransitGatewayPolicyTableCommandOutput,
} from "./commands/DeleteTransitGatewayPolicyTableCommand";
import type {
  DeleteTransitGatewayPrefixListReferenceCommandInput,
  DeleteTransitGatewayPrefixListReferenceCommandOutput,
} from "./commands/DeleteTransitGatewayPrefixListReferenceCommand";
import type {
  DeleteTransitGatewayRouteCommandInput,
  DeleteTransitGatewayRouteCommandOutput,
} from "./commands/DeleteTransitGatewayRouteCommand";
import type {
  DeleteTransitGatewayRouteTableAnnouncementCommandInput,
  DeleteTransitGatewayRouteTableAnnouncementCommandOutput,
} from "./commands/DeleteTransitGatewayRouteTableAnnouncementCommand";
import type {
  DeleteTransitGatewayRouteTableCommandInput,
  DeleteTransitGatewayRouteTableCommandOutput,
} from "./commands/DeleteTransitGatewayRouteTableCommand";
import type {
  DeleteTransitGatewayVpcAttachmentCommandInput,
  DeleteTransitGatewayVpcAttachmentCommandOutput,
} from "./commands/DeleteTransitGatewayVpcAttachmentCommand";
import type {
  DeleteVerifiedAccessEndpointCommandInput,
  DeleteVerifiedAccessEndpointCommandOutput,
} from "./commands/DeleteVerifiedAccessEndpointCommand";
import type {
  DeleteVerifiedAccessGroupCommandInput,
  DeleteVerifiedAccessGroupCommandOutput,
} from "./commands/DeleteVerifiedAccessGroupCommand";
import type {
  DeleteVerifiedAccessInstanceCommandInput,
  DeleteVerifiedAccessInstanceCommandOutput,
} from "./commands/DeleteVerifiedAccessInstanceCommand";
import type {
  DeleteVerifiedAccessTrustProviderCommandInput,
  DeleteVerifiedAccessTrustProviderCommandOutput,
} from "./commands/DeleteVerifiedAccessTrustProviderCommand";
import type { DeleteVolumeCommandInput, DeleteVolumeCommandOutput } from "./commands/DeleteVolumeCommand";
import type {
  DeleteVpcBlockPublicAccessExclusionCommandInput,
  DeleteVpcBlockPublicAccessExclusionCommandOutput,
} from "./commands/DeleteVpcBlockPublicAccessExclusionCommand";
import type { DeleteVpcCommandInput, DeleteVpcCommandOutput } from "./commands/DeleteVpcCommand";
import type {
  DeleteVpcEncryptionControlCommandInput,
  DeleteVpcEncryptionControlCommandOutput,
} from "./commands/DeleteVpcEncryptionControlCommand";
import type {
  DeleteVpcEndpointConnectionNotificationsCommandInput,
  DeleteVpcEndpointConnectionNotificationsCommandOutput,
} from "./commands/DeleteVpcEndpointConnectionNotificationsCommand";
import type {
  DeleteVpcEndpointsCommandInput,
  DeleteVpcEndpointsCommandOutput,
} from "./commands/DeleteVpcEndpointsCommand";
import type {
  DeleteVpcEndpointServiceConfigurationsCommandInput,
  DeleteVpcEndpointServiceConfigurationsCommandOutput,
} from "./commands/DeleteVpcEndpointServiceConfigurationsCommand";
import type {
  DeleteVpcPeeringConnectionCommandInput,
  DeleteVpcPeeringConnectionCommandOutput,
} from "./commands/DeleteVpcPeeringConnectionCommand";
import type {
  DeleteVpnConcentratorCommandInput,
  DeleteVpnConcentratorCommandOutput,
} from "./commands/DeleteVpnConcentratorCommand";
import type {
  DeleteVpnConnectionCommandInput,
  DeleteVpnConnectionCommandOutput,
} from "./commands/DeleteVpnConnectionCommand";
import type {
  DeleteVpnConnectionRouteCommandInput,
  DeleteVpnConnectionRouteCommandOutput,
} from "./commands/DeleteVpnConnectionRouteCommand";
import type { DeleteVpnGatewayCommandInput, DeleteVpnGatewayCommandOutput } from "./commands/DeleteVpnGatewayCommand";
import type {
  DeprovisionByoipCidrCommandInput,
  DeprovisionByoipCidrCommandOutput,
} from "./commands/DeprovisionByoipCidrCommand";
import type {
  DeprovisionIpamByoasnCommandInput,
  DeprovisionIpamByoasnCommandOutput,
} from "./commands/DeprovisionIpamByoasnCommand";
import type {
  DeprovisionIpamPoolCidrCommandInput,
  DeprovisionIpamPoolCidrCommandOutput,
} from "./commands/DeprovisionIpamPoolCidrCommand";
import type {
  DeprovisionPublicIpv4PoolCidrCommandInput,
  DeprovisionPublicIpv4PoolCidrCommandOutput,
} from "./commands/DeprovisionPublicIpv4PoolCidrCommand";
import type { DeregisterImageCommandInput, DeregisterImageCommandOutput } from "./commands/DeregisterImageCommand";
import type {
  DeregisterInstanceEventNotificationAttributesCommandInput,
  DeregisterInstanceEventNotificationAttributesCommandOutput,
} from "./commands/DeregisterInstanceEventNotificationAttributesCommand";
import type {
  DeregisterTransitGatewayMulticastGroupMembersCommandInput,
  DeregisterTransitGatewayMulticastGroupMembersCommandOutput,
} from "./commands/DeregisterTransitGatewayMulticastGroupMembersCommand";
import type {
  DeregisterTransitGatewayMulticastGroupSourcesCommandInput,
  DeregisterTransitGatewayMulticastGroupSourcesCommandOutput,
} from "./commands/DeregisterTransitGatewayMulticastGroupSourcesCommand";
import type {
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "./commands/DescribeAccountAttributesCommand";
import type {
  DescribeAddressesAttributeCommandInput,
  DescribeAddressesAttributeCommandOutput,
} from "./commands/DescribeAddressesAttributeCommand";
import type {
  DescribeAddressesCommandInput,
  DescribeAddressesCommandOutput,
} from "./commands/DescribeAddressesCommand";
import type {
  DescribeAddressTransfersCommandInput,
  DescribeAddressTransfersCommandOutput,
} from "./commands/DescribeAddressTransfersCommand";
import type {
  DescribeAggregateIdFormatCommandInput,
  DescribeAggregateIdFormatCommandOutput,
} from "./commands/DescribeAggregateIdFormatCommand";
import type {
  DescribeAvailabilityZonesCommandInput,
  DescribeAvailabilityZonesCommandOutput,
} from "./commands/DescribeAvailabilityZonesCommand";
import type {
  DescribeAwsNetworkPerformanceMetricSubscriptionsCommandInput,
  DescribeAwsNetworkPerformanceMetricSubscriptionsCommandOutput,
} from "./commands/DescribeAwsNetworkPerformanceMetricSubscriptionsCommand";
import type {
  DescribeBundleTasksCommandInput,
  DescribeBundleTasksCommandOutput,
} from "./commands/DescribeBundleTasksCommand";
import type {
  DescribeByoipCidrsCommandInput,
  DescribeByoipCidrsCommandOutput,
} from "./commands/DescribeByoipCidrsCommand";
import type {
  DescribeCapacityBlockExtensionHistoryCommandInput,
  DescribeCapacityBlockExtensionHistoryCommandOutput,
} from "./commands/DescribeCapacityBlockExtensionHistoryCommand";
import type {
  DescribeCapacityBlockExtensionOfferingsCommandInput,
  DescribeCapacityBlockExtensionOfferingsCommandOutput,
} from "./commands/DescribeCapacityBlockExtensionOfferingsCommand";
import type {
  DescribeCapacityBlockOfferingsCommandInput,
  DescribeCapacityBlockOfferingsCommandOutput,
} from "./commands/DescribeCapacityBlockOfferingsCommand";
import type {
  DescribeCapacityBlocksCommandInput,
  DescribeCapacityBlocksCommandOutput,
} from "./commands/DescribeCapacityBlocksCommand";
import type {
  DescribeCapacityBlockStatusCommandInput,
  DescribeCapacityBlockStatusCommandOutput,
} from "./commands/DescribeCapacityBlockStatusCommand";
import type {
  DescribeCapacityManagerDataExportsCommandInput,
  DescribeCapacityManagerDataExportsCommandOutput,
} from "./commands/DescribeCapacityManagerDataExportsCommand";
import type {
  DescribeCapacityReservationBillingRequestsCommandInput,
  DescribeCapacityReservationBillingRequestsCommandOutput,
} from "./commands/DescribeCapacityReservationBillingRequestsCommand";
import type {
  DescribeCapacityReservationFleetsCommandInput,
  DescribeCapacityReservationFleetsCommandOutput,
} from "./commands/DescribeCapacityReservationFleetsCommand";
import type {
  DescribeCapacityReservationsCommandInput,
  DescribeCapacityReservationsCommandOutput,
} from "./commands/DescribeCapacityReservationsCommand";
import type {
  DescribeCapacityReservationTopologyCommandInput,
  DescribeCapacityReservationTopologyCommandOutput,
} from "./commands/DescribeCapacityReservationTopologyCommand";
import type {
  DescribeCarrierGatewaysCommandInput,
  DescribeCarrierGatewaysCommandOutput,
} from "./commands/DescribeCarrierGatewaysCommand";
import type {
  DescribeClassicLinkInstancesCommandInput,
  DescribeClassicLinkInstancesCommandOutput,
} from "./commands/DescribeClassicLinkInstancesCommand";
import type {
  DescribeClientVpnAuthorizationRulesCommandInput,
  DescribeClientVpnAuthorizationRulesCommandOutput,
} from "./commands/DescribeClientVpnAuthorizationRulesCommand";
import type {
  DescribeClientVpnConnectionsCommandInput,
  DescribeClientVpnConnectionsCommandOutput,
} from "./commands/DescribeClientVpnConnectionsCommand";
import type {
  DescribeClientVpnEndpointsCommandInput,
  DescribeClientVpnEndpointsCommandOutput,
} from "./commands/DescribeClientVpnEndpointsCommand";
import type {
  DescribeClientVpnRoutesCommandInput,
  DescribeClientVpnRoutesCommandOutput,
} from "./commands/DescribeClientVpnRoutesCommand";
import type {
  DescribeClientVpnTargetNetworksCommandInput,
  DescribeClientVpnTargetNetworksCommandOutput,
} from "./commands/DescribeClientVpnTargetNetworksCommand";
import type {
  DescribeCoipPoolsCommandInput,
  DescribeCoipPoolsCommandOutput,
} from "./commands/DescribeCoipPoolsCommand";
import type {
  DescribeConversionTasksCommandInput,
  DescribeConversionTasksCommandOutput,
} from "./commands/DescribeConversionTasksCommand";
import type {
  DescribeCustomerGatewaysCommandInput,
  DescribeCustomerGatewaysCommandOutput,
} from "./commands/DescribeCustomerGatewaysCommand";
import type {
  DescribeDeclarativePoliciesReportsCommandInput,
  DescribeDeclarativePoliciesReportsCommandOutput,
} from "./commands/DescribeDeclarativePoliciesReportsCommand";
import type {
  DescribeDhcpOptionsCommandInput,
  DescribeDhcpOptionsCommandOutput,
} from "./commands/DescribeDhcpOptionsCommand";
import type {
  DescribeEgressOnlyInternetGatewaysCommandInput,
  DescribeEgressOnlyInternetGatewaysCommandOutput,
} from "./commands/DescribeEgressOnlyInternetGatewaysCommand";
import type {
  DescribeElasticGpusCommandInput,
  DescribeElasticGpusCommandOutput,
} from "./commands/DescribeElasticGpusCommand";
import type {
  DescribeExportImageTasksCommandInput,
  DescribeExportImageTasksCommandOutput,
} from "./commands/DescribeExportImageTasksCommand";
import type {
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput,
} from "./commands/DescribeExportTasksCommand";
import type {
  DescribeFastLaunchImagesCommandInput,
  DescribeFastLaunchImagesCommandOutput,
} from "./commands/DescribeFastLaunchImagesCommand";
import type {
  DescribeFastSnapshotRestoresCommandInput,
  DescribeFastSnapshotRestoresCommandOutput,
} from "./commands/DescribeFastSnapshotRestoresCommand";
import type {
  DescribeFleetHistoryCommandInput,
  DescribeFleetHistoryCommandOutput,
} from "./commands/DescribeFleetHistoryCommand";
import type {
  DescribeFleetInstancesCommandInput,
  DescribeFleetInstancesCommandOutput,
} from "./commands/DescribeFleetInstancesCommand";
import type { DescribeFleetsCommandInput, DescribeFleetsCommandOutput } from "./commands/DescribeFleetsCommand";
import type { DescribeFlowLogsCommandInput, DescribeFlowLogsCommandOutput } from "./commands/DescribeFlowLogsCommand";
import type {
  DescribeFpgaImageAttributeCommandInput,
  DescribeFpgaImageAttributeCommandOutput,
} from "./commands/DescribeFpgaImageAttributeCommand";
import type {
  DescribeFpgaImagesCommandInput,
  DescribeFpgaImagesCommandOutput,
} from "./commands/DescribeFpgaImagesCommand";
import type {
  DescribeHostReservationOfferingsCommandInput,
  DescribeHostReservationOfferingsCommandOutput,
} from "./commands/DescribeHostReservationOfferingsCommand";
import type {
  DescribeHostReservationsCommandInput,
  DescribeHostReservationsCommandOutput,
} from "./commands/DescribeHostReservationsCommand";
import type { DescribeHostsCommandInput, DescribeHostsCommandOutput } from "./commands/DescribeHostsCommand";
import type {
  DescribeIamInstanceProfileAssociationsCommandInput,
  DescribeIamInstanceProfileAssociationsCommandOutput,
} from "./commands/DescribeIamInstanceProfileAssociationsCommand";
import type {
  DescribeIdentityIdFormatCommandInput,
  DescribeIdentityIdFormatCommandOutput,
} from "./commands/DescribeIdentityIdFormatCommand";
import type { DescribeIdFormatCommandInput, DescribeIdFormatCommandOutput } from "./commands/DescribeIdFormatCommand";
import type {
  DescribeImageAttributeCommandInput,
  DescribeImageAttributeCommandOutput,
} from "./commands/DescribeImageAttributeCommand";
import type {
  DescribeImageReferencesCommandInput,
  DescribeImageReferencesCommandOutput,
} from "./commands/DescribeImageReferencesCommand";
import type { DescribeImagesCommandInput, DescribeImagesCommandOutput } from "./commands/DescribeImagesCommand";
import type {
  DescribeImageUsageReportEntriesCommandInput,
  DescribeImageUsageReportEntriesCommandOutput,
} from "./commands/DescribeImageUsageReportEntriesCommand";
import type {
  DescribeImageUsageReportsCommandInput,
  DescribeImageUsageReportsCommandOutput,
} from "./commands/DescribeImageUsageReportsCommand";
import type {
  DescribeImportImageTasksCommandInput,
  DescribeImportImageTasksCommandOutput,
} from "./commands/DescribeImportImageTasksCommand";
import type {
  DescribeImportSnapshotTasksCommandInput,
  DescribeImportSnapshotTasksCommandOutput,
} from "./commands/DescribeImportSnapshotTasksCommand";
import type {
  DescribeInstanceAttributeCommandInput,
  DescribeInstanceAttributeCommandOutput,
} from "./commands/DescribeInstanceAttributeCommand";
import type {
  DescribeInstanceConnectEndpointsCommandInput,
  DescribeInstanceConnectEndpointsCommandOutput,
} from "./commands/DescribeInstanceConnectEndpointsCommand";
import type {
  DescribeInstanceCreditSpecificationsCommandInput,
  DescribeInstanceCreditSpecificationsCommandOutput,
} from "./commands/DescribeInstanceCreditSpecificationsCommand";
import type {
  DescribeInstanceEventNotificationAttributesCommandInput,
  DescribeInstanceEventNotificationAttributesCommandOutput,
} from "./commands/DescribeInstanceEventNotificationAttributesCommand";
import type {
  DescribeInstanceEventWindowsCommandInput,
  DescribeInstanceEventWindowsCommandOutput,
} from "./commands/DescribeInstanceEventWindowsCommand";
import type {
  DescribeInstanceImageMetadataCommandInput,
  DescribeInstanceImageMetadataCommandOutput,
} from "./commands/DescribeInstanceImageMetadataCommand";
import type {
  DescribeInstancesCommandInput,
  DescribeInstancesCommandOutput,
} from "./commands/DescribeInstancesCommand";
import type {
  DescribeInstanceSqlHaHistoryStatesCommandInput,
  DescribeInstanceSqlHaHistoryStatesCommandOutput,
} from "./commands/DescribeInstanceSqlHaHistoryStatesCommand";
import type {
  DescribeInstanceSqlHaStatesCommandInput,
  DescribeInstanceSqlHaStatesCommandOutput,
} from "./commands/DescribeInstanceSqlHaStatesCommand";
import type {
  DescribeInstanceStatusCommandInput,
  DescribeInstanceStatusCommandOutput,
} from "./commands/DescribeInstanceStatusCommand";
import type {
  DescribeInstanceTopologyCommandInput,
  DescribeInstanceTopologyCommandOutput,
} from "./commands/DescribeInstanceTopologyCommand";
import type {
  DescribeInstanceTypeOfferingsCommandInput,
  DescribeInstanceTypeOfferingsCommandOutput,
} from "./commands/DescribeInstanceTypeOfferingsCommand";
import type {
  DescribeInstanceTypesCommandInput,
  DescribeInstanceTypesCommandOutput,
} from "./commands/DescribeInstanceTypesCommand";
import type {
  DescribeInternetGatewaysCommandInput,
  DescribeInternetGatewaysCommandOutput,
} from "./commands/DescribeInternetGatewaysCommand";
import type {
  DescribeIpamByoasnCommandInput,
  DescribeIpamByoasnCommandOutput,
} from "./commands/DescribeIpamByoasnCommand";
import type {
  DescribeIpamExternalResourceVerificationTokensCommandInput,
  DescribeIpamExternalResourceVerificationTokensCommandOutput,
} from "./commands/DescribeIpamExternalResourceVerificationTokensCommand";
import type {
  DescribeIpamPoliciesCommandInput,
  DescribeIpamPoliciesCommandOutput,
} from "./commands/DescribeIpamPoliciesCommand";
import type {
  DescribeIpamPoolsCommandInput,
  DescribeIpamPoolsCommandOutput,
} from "./commands/DescribeIpamPoolsCommand";
import type {
  DescribeIpamPrefixListResolversCommandInput,
  DescribeIpamPrefixListResolversCommandOutput,
} from "./commands/DescribeIpamPrefixListResolversCommand";
import type {
  DescribeIpamPrefixListResolverTargetsCommandInput,
  DescribeIpamPrefixListResolverTargetsCommandOutput,
} from "./commands/DescribeIpamPrefixListResolverTargetsCommand";
import type {
  DescribeIpamResourceDiscoveriesCommandInput,
  DescribeIpamResourceDiscoveriesCommandOutput,
} from "./commands/DescribeIpamResourceDiscoveriesCommand";
import type {
  DescribeIpamResourceDiscoveryAssociationsCommandInput,
  DescribeIpamResourceDiscoveryAssociationsCommandOutput,
} from "./commands/DescribeIpamResourceDiscoveryAssociationsCommand";
import type { DescribeIpamsCommandInput, DescribeIpamsCommandOutput } from "./commands/DescribeIpamsCommand";
import type {
  DescribeIpamScopesCommandInput,
  DescribeIpamScopesCommandOutput,
} from "./commands/DescribeIpamScopesCommand";
import type {
  DescribeIpv6PoolsCommandInput,
  DescribeIpv6PoolsCommandOutput,
} from "./commands/DescribeIpv6PoolsCommand";
import type { DescribeKeyPairsCommandInput, DescribeKeyPairsCommandOutput } from "./commands/DescribeKeyPairsCommand";
import type {
  DescribeLaunchTemplatesCommandInput,
  DescribeLaunchTemplatesCommandOutput,
} from "./commands/DescribeLaunchTemplatesCommand";
import type {
  DescribeLaunchTemplateVersionsCommandInput,
  DescribeLaunchTemplateVersionsCommandOutput,
} from "./commands/DescribeLaunchTemplateVersionsCommand";
import type {
  DescribeLocalGatewayRouteTablesCommandInput,
  DescribeLocalGatewayRouteTablesCommandOutput,
} from "./commands/DescribeLocalGatewayRouteTablesCommand";
import type {
  DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput,
  DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput,
} from "./commands/DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand";
import type {
  DescribeLocalGatewayRouteTableVpcAssociationsCommandInput,
  DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput,
} from "./commands/DescribeLocalGatewayRouteTableVpcAssociationsCommand";
import type {
  DescribeLocalGatewaysCommandInput,
  DescribeLocalGatewaysCommandOutput,
} from "./commands/DescribeLocalGatewaysCommand";
import type {
  DescribeLocalGatewayVirtualInterfaceGroupsCommandInput,
  DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput,
} from "./commands/DescribeLocalGatewayVirtualInterfaceGroupsCommand";
import type {
  DescribeLocalGatewayVirtualInterfacesCommandInput,
  DescribeLocalGatewayVirtualInterfacesCommandOutput,
} from "./commands/DescribeLocalGatewayVirtualInterfacesCommand";
import type {
  DescribeLockedSnapshotsCommandInput,
  DescribeLockedSnapshotsCommandOutput,
} from "./commands/DescribeLockedSnapshotsCommand";
import type { DescribeMacHostsCommandInput, DescribeMacHostsCommandOutput } from "./commands/DescribeMacHostsCommand";
import type {
  DescribeMacModificationTasksCommandInput,
  DescribeMacModificationTasksCommandOutput,
} from "./commands/DescribeMacModificationTasksCommand";
import type {
  DescribeManagedPrefixListsCommandInput,
  DescribeManagedPrefixListsCommandOutput,
} from "./commands/DescribeManagedPrefixListsCommand";
import type {
  DescribeMovingAddressesCommandInput,
  DescribeMovingAddressesCommandOutput,
} from "./commands/DescribeMovingAddressesCommand";
import type {
  DescribeNatGatewaysCommandInput,
  DescribeNatGatewaysCommandOutput,
} from "./commands/DescribeNatGatewaysCommand";
import type {
  DescribeNetworkAclsCommandInput,
  DescribeNetworkAclsCommandOutput,
} from "./commands/DescribeNetworkAclsCommand";
import type {
  DescribeNetworkInsightsAccessScopeAnalysesCommandInput,
  DescribeNetworkInsightsAccessScopeAnalysesCommandOutput,
} from "./commands/DescribeNetworkInsightsAccessScopeAnalysesCommand";
import type {
  DescribeNetworkInsightsAccessScopesCommandInput,
  DescribeNetworkInsightsAccessScopesCommandOutput,
} from "./commands/DescribeNetworkInsightsAccessScopesCommand";
import type {
  DescribeNetworkInsightsAnalysesCommandInput,
  DescribeNetworkInsightsAnalysesCommandOutput,
} from "./commands/DescribeNetworkInsightsAnalysesCommand";
import type {
  DescribeNetworkInsightsPathsCommandInput,
  DescribeNetworkInsightsPathsCommandOutput,
} from "./commands/DescribeNetworkInsightsPathsCommand";
import type {
  DescribeNetworkInterfaceAttributeCommandInput,
  DescribeNetworkInterfaceAttributeCommandOutput,
} from "./commands/DescribeNetworkInterfaceAttributeCommand";
import type {
  DescribeNetworkInterfacePermissionsCommandInput,
  DescribeNetworkInterfacePermissionsCommandOutput,
} from "./commands/DescribeNetworkInterfacePermissionsCommand";
import type {
  DescribeNetworkInterfacesCommandInput,
  DescribeNetworkInterfacesCommandOutput,
} from "./commands/DescribeNetworkInterfacesCommand";
import type {
  DescribeOutpostLagsCommandInput,
  DescribeOutpostLagsCommandOutput,
} from "./commands/DescribeOutpostLagsCommand";
import type {
  DescribePlacementGroupsCommandInput,
  DescribePlacementGroupsCommandOutput,
} from "./commands/DescribePlacementGroupsCommand";
import type {
  DescribePrefixListsCommandInput,
  DescribePrefixListsCommandOutput,
} from "./commands/DescribePrefixListsCommand";
import type {
  DescribePrincipalIdFormatCommandInput,
  DescribePrincipalIdFormatCommandOutput,
} from "./commands/DescribePrincipalIdFormatCommand";
import type {
  DescribePublicIpv4PoolsCommandInput,
  DescribePublicIpv4PoolsCommandOutput,
} from "./commands/DescribePublicIpv4PoolsCommand";
import type { DescribeRegionsCommandInput, DescribeRegionsCommandOutput } from "./commands/DescribeRegionsCommand";
import type {
  DescribeReplaceRootVolumeTasksCommandInput,
  DescribeReplaceRootVolumeTasksCommandOutput,
} from "./commands/DescribeReplaceRootVolumeTasksCommand";
import type {
  DescribeReservedInstancesCommandInput,
  DescribeReservedInstancesCommandOutput,
} from "./commands/DescribeReservedInstancesCommand";
import type {
  DescribeReservedInstancesListingsCommandInput,
  DescribeReservedInstancesListingsCommandOutput,
} from "./commands/DescribeReservedInstancesListingsCommand";
import type {
  DescribeReservedInstancesModificationsCommandInput,
  DescribeReservedInstancesModificationsCommandOutput,
} from "./commands/DescribeReservedInstancesModificationsCommand";
import type {
  DescribeReservedInstancesOfferingsCommandInput,
  DescribeReservedInstancesOfferingsCommandOutput,
} from "./commands/DescribeReservedInstancesOfferingsCommand";
import type {
  DescribeRouteServerEndpointsCommandInput,
  DescribeRouteServerEndpointsCommandOutput,
} from "./commands/DescribeRouteServerEndpointsCommand";
import type {
  DescribeRouteServerPeersCommandInput,
  DescribeRouteServerPeersCommandOutput,
} from "./commands/DescribeRouteServerPeersCommand";
import type {
  DescribeRouteServersCommandInput,
  DescribeRouteServersCommandOutput,
} from "./commands/DescribeRouteServersCommand";
import type {
  DescribeRouteTablesCommandInput,
  DescribeRouteTablesCommandOutput,
} from "./commands/DescribeRouteTablesCommand";
import type {
  DescribeScheduledInstanceAvailabilityCommandInput,
  DescribeScheduledInstanceAvailabilityCommandOutput,
} from "./commands/DescribeScheduledInstanceAvailabilityCommand";
import type {
  DescribeScheduledInstancesCommandInput,
  DescribeScheduledInstancesCommandOutput,
} from "./commands/DescribeScheduledInstancesCommand";
import type {
  DescribeSecondaryInterfacesCommandInput,
  DescribeSecondaryInterfacesCommandOutput,
} from "./commands/DescribeSecondaryInterfacesCommand";
import type {
  DescribeSecondaryNetworksCommandInput,
  DescribeSecondaryNetworksCommandOutput,
} from "./commands/DescribeSecondaryNetworksCommand";
import type {
  DescribeSecondarySubnetsCommandInput,
  DescribeSecondarySubnetsCommandOutput,
} from "./commands/DescribeSecondarySubnetsCommand";
import type {
  DescribeSecurityGroupReferencesCommandInput,
  DescribeSecurityGroupReferencesCommandOutput,
} from "./commands/DescribeSecurityGroupReferencesCommand";
import type {
  DescribeSecurityGroupRulesCommandInput,
  DescribeSecurityGroupRulesCommandOutput,
} from "./commands/DescribeSecurityGroupRulesCommand";
import type {
  DescribeSecurityGroupsCommandInput,
  DescribeSecurityGroupsCommandOutput,
} from "./commands/DescribeSecurityGroupsCommand";
import type {
  DescribeSecurityGroupVpcAssociationsCommandInput,
  DescribeSecurityGroupVpcAssociationsCommandOutput,
} from "./commands/DescribeSecurityGroupVpcAssociationsCommand";
import type {
  DescribeServiceLinkVirtualInterfacesCommandInput,
  DescribeServiceLinkVirtualInterfacesCommandOutput,
} from "./commands/DescribeServiceLinkVirtualInterfacesCommand";
import type {
  DescribeSnapshotAttributeCommandInput,
  DescribeSnapshotAttributeCommandOutput,
} from "./commands/DescribeSnapshotAttributeCommand";
import type {
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput,
} from "./commands/DescribeSnapshotsCommand";
import type {
  DescribeSnapshotTierStatusCommandInput,
  DescribeSnapshotTierStatusCommandOutput,
} from "./commands/DescribeSnapshotTierStatusCommand";
import type {
  DescribeSpotDatafeedSubscriptionCommandInput,
  DescribeSpotDatafeedSubscriptionCommandOutput,
} from "./commands/DescribeSpotDatafeedSubscriptionCommand";
import type {
  DescribeSpotFleetInstancesCommandInput,
  DescribeSpotFleetInstancesCommandOutput,
} from "./commands/DescribeSpotFleetInstancesCommand";
import type {
  DescribeSpotFleetRequestHistoryCommandInput,
  DescribeSpotFleetRequestHistoryCommandOutput,
} from "./commands/DescribeSpotFleetRequestHistoryCommand";
import type {
  DescribeSpotFleetRequestsCommandInput,
  DescribeSpotFleetRequestsCommandOutput,
} from "./commands/DescribeSpotFleetRequestsCommand";
import type {
  DescribeSpotInstanceRequestsCommandInput,
  DescribeSpotInstanceRequestsCommandOutput,
} from "./commands/DescribeSpotInstanceRequestsCommand";
import type {
  DescribeSpotPriceHistoryCommandInput,
  DescribeSpotPriceHistoryCommandOutput,
} from "./commands/DescribeSpotPriceHistoryCommand";
import type {
  DescribeStaleSecurityGroupsCommandInput,
  DescribeStaleSecurityGroupsCommandOutput,
} from "./commands/DescribeStaleSecurityGroupsCommand";
import type {
  DescribeStoreImageTasksCommandInput,
  DescribeStoreImageTasksCommandOutput,
} from "./commands/DescribeStoreImageTasksCommand";
import type { DescribeSubnetsCommandInput, DescribeSubnetsCommandOutput } from "./commands/DescribeSubnetsCommand";
import type { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "./commands/DescribeTagsCommand";
import type {
  DescribeTrafficMirrorFilterRulesCommandInput,
  DescribeTrafficMirrorFilterRulesCommandOutput,
} from "./commands/DescribeTrafficMirrorFilterRulesCommand";
import type {
  DescribeTrafficMirrorFiltersCommandInput,
  DescribeTrafficMirrorFiltersCommandOutput,
} from "./commands/DescribeTrafficMirrorFiltersCommand";
import type {
  DescribeTrafficMirrorSessionsCommandInput,
  DescribeTrafficMirrorSessionsCommandOutput,
} from "./commands/DescribeTrafficMirrorSessionsCommand";
import type {
  DescribeTrafficMirrorTargetsCommandInput,
  DescribeTrafficMirrorTargetsCommandOutput,
} from "./commands/DescribeTrafficMirrorTargetsCommand";
import type {
  DescribeTransitGatewayAttachmentsCommandInput,
  DescribeTransitGatewayAttachmentsCommandOutput,
} from "./commands/DescribeTransitGatewayAttachmentsCommand";
import type {
  DescribeTransitGatewayConnectPeersCommandInput,
  DescribeTransitGatewayConnectPeersCommandOutput,
} from "./commands/DescribeTransitGatewayConnectPeersCommand";
import type {
  DescribeTransitGatewayConnectsCommandInput,
  DescribeTransitGatewayConnectsCommandOutput,
} from "./commands/DescribeTransitGatewayConnectsCommand";
import type {
  DescribeTransitGatewayMeteringPoliciesCommandInput,
  DescribeTransitGatewayMeteringPoliciesCommandOutput,
} from "./commands/DescribeTransitGatewayMeteringPoliciesCommand";
import type {
  DescribeTransitGatewayMulticastDomainsCommandInput,
  DescribeTransitGatewayMulticastDomainsCommandOutput,
} from "./commands/DescribeTransitGatewayMulticastDomainsCommand";
import type {
  DescribeTransitGatewayPeeringAttachmentsCommandInput,
  DescribeTransitGatewayPeeringAttachmentsCommandOutput,
} from "./commands/DescribeTransitGatewayPeeringAttachmentsCommand";
import type {
  DescribeTransitGatewayPolicyTablesCommandInput,
  DescribeTransitGatewayPolicyTablesCommandOutput,
} from "./commands/DescribeTransitGatewayPolicyTablesCommand";
import type {
  DescribeTransitGatewayRouteTableAnnouncementsCommandInput,
  DescribeTransitGatewayRouteTableAnnouncementsCommandOutput,
} from "./commands/DescribeTransitGatewayRouteTableAnnouncementsCommand";
import type {
  DescribeTransitGatewayRouteTablesCommandInput,
  DescribeTransitGatewayRouteTablesCommandOutput,
} from "./commands/DescribeTransitGatewayRouteTablesCommand";
import type {
  DescribeTransitGatewaysCommandInput,
  DescribeTransitGatewaysCommandOutput,
} from "./commands/DescribeTransitGatewaysCommand";
import type {
  DescribeTransitGatewayVpcAttachmentsCommandInput,
  DescribeTransitGatewayVpcAttachmentsCommandOutput,
} from "./commands/DescribeTransitGatewayVpcAttachmentsCommand";
import type {
  DescribeTrunkInterfaceAssociationsCommandInput,
  DescribeTrunkInterfaceAssociationsCommandOutput,
} from "./commands/DescribeTrunkInterfaceAssociationsCommand";
import type {
  DescribeVerifiedAccessEndpointsCommandInput,
  DescribeVerifiedAccessEndpointsCommandOutput,
} from "./commands/DescribeVerifiedAccessEndpointsCommand";
import type {
  DescribeVerifiedAccessGroupsCommandInput,
  DescribeVerifiedAccessGroupsCommandOutput,
} from "./commands/DescribeVerifiedAccessGroupsCommand";
import type {
  DescribeVerifiedAccessInstanceLoggingConfigurationsCommandInput,
  DescribeVerifiedAccessInstanceLoggingConfigurationsCommandOutput,
} from "./commands/DescribeVerifiedAccessInstanceLoggingConfigurationsCommand";
import type {
  DescribeVerifiedAccessInstancesCommandInput,
  DescribeVerifiedAccessInstancesCommandOutput,
} from "./commands/DescribeVerifiedAccessInstancesCommand";
import type {
  DescribeVerifiedAccessTrustProvidersCommandInput,
  DescribeVerifiedAccessTrustProvidersCommandOutput,
} from "./commands/DescribeVerifiedAccessTrustProvidersCommand";
import type {
  DescribeVolumeAttributeCommandInput,
  DescribeVolumeAttributeCommandOutput,
} from "./commands/DescribeVolumeAttributeCommand";
import type { DescribeVolumesCommandInput, DescribeVolumesCommandOutput } from "./commands/DescribeVolumesCommand";
import type {
  DescribeVolumesModificationsCommandInput,
  DescribeVolumesModificationsCommandOutput,
} from "./commands/DescribeVolumesModificationsCommand";
import type {
  DescribeVolumeStatusCommandInput,
  DescribeVolumeStatusCommandOutput,
} from "./commands/DescribeVolumeStatusCommand";
import type {
  DescribeVpcAttributeCommandInput,
  DescribeVpcAttributeCommandOutput,
} from "./commands/DescribeVpcAttributeCommand";
import type {
  DescribeVpcBlockPublicAccessExclusionsCommandInput,
  DescribeVpcBlockPublicAccessExclusionsCommandOutput,
} from "./commands/DescribeVpcBlockPublicAccessExclusionsCommand";
import type {
  DescribeVpcBlockPublicAccessOptionsCommandInput,
  DescribeVpcBlockPublicAccessOptionsCommandOutput,
} from "./commands/DescribeVpcBlockPublicAccessOptionsCommand";
import type {
  DescribeVpcClassicLinkCommandInput,
  DescribeVpcClassicLinkCommandOutput,
} from "./commands/DescribeVpcClassicLinkCommand";
import type {
  DescribeVpcClassicLinkDnsSupportCommandInput,
  DescribeVpcClassicLinkDnsSupportCommandOutput,
} from "./commands/DescribeVpcClassicLinkDnsSupportCommand";
import type {
  DescribeVpcEncryptionControlsCommandInput,
  DescribeVpcEncryptionControlsCommandOutput,
} from "./commands/DescribeVpcEncryptionControlsCommand";
import type {
  DescribeVpcEndpointAssociationsCommandInput,
  DescribeVpcEndpointAssociationsCommandOutput,
} from "./commands/DescribeVpcEndpointAssociationsCommand";
import type {
  DescribeVpcEndpointConnectionNotificationsCommandInput,
  DescribeVpcEndpointConnectionNotificationsCommandOutput,
} from "./commands/DescribeVpcEndpointConnectionNotificationsCommand";
import type {
  DescribeVpcEndpointConnectionsCommandInput,
  DescribeVpcEndpointConnectionsCommandOutput,
} from "./commands/DescribeVpcEndpointConnectionsCommand";
import type {
  DescribeVpcEndpointsCommandInput,
  DescribeVpcEndpointsCommandOutput,
} from "./commands/DescribeVpcEndpointsCommand";
import type {
  DescribeVpcEndpointServiceConfigurationsCommandInput,
  DescribeVpcEndpointServiceConfigurationsCommandOutput,
} from "./commands/DescribeVpcEndpointServiceConfigurationsCommand";
import type {
  DescribeVpcEndpointServicePermissionsCommandInput,
  DescribeVpcEndpointServicePermissionsCommandOutput,
} from "./commands/DescribeVpcEndpointServicePermissionsCommand";
import type {
  DescribeVpcEndpointServicesCommandInput,
  DescribeVpcEndpointServicesCommandOutput,
} from "./commands/DescribeVpcEndpointServicesCommand";
import type {
  DescribeVpcPeeringConnectionsCommandInput,
  DescribeVpcPeeringConnectionsCommandOutput,
} from "./commands/DescribeVpcPeeringConnectionsCommand";
import type { DescribeVpcsCommandInput, DescribeVpcsCommandOutput } from "./commands/DescribeVpcsCommand";
import type {
  DescribeVpnConcentratorsCommandInput,
  DescribeVpnConcentratorsCommandOutput,
} from "./commands/DescribeVpnConcentratorsCommand";
import type {
  DescribeVpnConnectionsCommandInput,
  DescribeVpnConnectionsCommandOutput,
} from "./commands/DescribeVpnConnectionsCommand";
import type {
  DescribeVpnGatewaysCommandInput,
  DescribeVpnGatewaysCommandOutput,
} from "./commands/DescribeVpnGatewaysCommand";
import type {
  DetachClassicLinkVpcCommandInput,
  DetachClassicLinkVpcCommandOutput,
} from "./commands/DetachClassicLinkVpcCommand";
import type {
  DetachInternetGatewayCommandInput,
  DetachInternetGatewayCommandOutput,
} from "./commands/DetachInternetGatewayCommand";
import type {
  DetachNetworkInterfaceCommandInput,
  DetachNetworkInterfaceCommandOutput,
} from "./commands/DetachNetworkInterfaceCommand";
import type {
  DetachVerifiedAccessTrustProviderCommandInput,
  DetachVerifiedAccessTrustProviderCommandOutput,
} from "./commands/DetachVerifiedAccessTrustProviderCommand";
import type { DetachVolumeCommandInput, DetachVolumeCommandOutput } from "./commands/DetachVolumeCommand";
import type { DetachVpnGatewayCommandInput, DetachVpnGatewayCommandOutput } from "./commands/DetachVpnGatewayCommand";
import type {
  DisableAddressTransferCommandInput,
  DisableAddressTransferCommandOutput,
} from "./commands/DisableAddressTransferCommand";
import type {
  DisableAllowedImagesSettingsCommandInput,
  DisableAllowedImagesSettingsCommandOutput,
} from "./commands/DisableAllowedImagesSettingsCommand";
import type {
  DisableAwsNetworkPerformanceMetricSubscriptionCommandInput,
  DisableAwsNetworkPerformanceMetricSubscriptionCommandOutput,
} from "./commands/DisableAwsNetworkPerformanceMetricSubscriptionCommand";
import type {
  DisableCapacityManagerCommandInput,
  DisableCapacityManagerCommandOutput,
} from "./commands/DisableCapacityManagerCommand";
import type {
  DisableEbsEncryptionByDefaultCommandInput,
  DisableEbsEncryptionByDefaultCommandOutput,
} from "./commands/DisableEbsEncryptionByDefaultCommand";
import type {
  DisableFastLaunchCommandInput,
  DisableFastLaunchCommandOutput,
} from "./commands/DisableFastLaunchCommand";
import type {
  DisableFastSnapshotRestoresCommandInput,
  DisableFastSnapshotRestoresCommandOutput,
} from "./commands/DisableFastSnapshotRestoresCommand";
import type {
  DisableImageBlockPublicAccessCommandInput,
  DisableImageBlockPublicAccessCommandOutput,
} from "./commands/DisableImageBlockPublicAccessCommand";
import type { DisableImageCommandInput, DisableImageCommandOutput } from "./commands/DisableImageCommand";
import type {
  DisableImageDeprecationCommandInput,
  DisableImageDeprecationCommandOutput,
} from "./commands/DisableImageDeprecationCommand";
import type {
  DisableImageDeregistrationProtectionCommandInput,
  DisableImageDeregistrationProtectionCommandOutput,
} from "./commands/DisableImageDeregistrationProtectionCommand";
import type {
  DisableInstanceSqlHaStandbyDetectionsCommandInput,
  DisableInstanceSqlHaStandbyDetectionsCommandOutput,
} from "./commands/DisableInstanceSqlHaStandbyDetectionsCommand";
import type {
  DisableIpamOrganizationAdminAccountCommandInput,
  DisableIpamOrganizationAdminAccountCommandOutput,
} from "./commands/DisableIpamOrganizationAdminAccountCommand";
import type {
  DisableIpamPolicyCommandInput,
  DisableIpamPolicyCommandOutput,
} from "./commands/DisableIpamPolicyCommand";
import type {
  DisableRouteServerPropagationCommandInput,
  DisableRouteServerPropagationCommandOutput,
} from "./commands/DisableRouteServerPropagationCommand";
import type {
  DisableSerialConsoleAccessCommandInput,
  DisableSerialConsoleAccessCommandOutput,
} from "./commands/DisableSerialConsoleAccessCommand";
import type {
  DisableSnapshotBlockPublicAccessCommandInput,
  DisableSnapshotBlockPublicAccessCommandOutput,
} from "./commands/DisableSnapshotBlockPublicAccessCommand";
import type {
  DisableTransitGatewayRouteTablePropagationCommandInput,
  DisableTransitGatewayRouteTablePropagationCommandOutput,
} from "./commands/DisableTransitGatewayRouteTablePropagationCommand";
import type {
  DisableVgwRoutePropagationCommandInput,
  DisableVgwRoutePropagationCommandOutput,
} from "./commands/DisableVgwRoutePropagationCommand";
import type {
  DisableVpcClassicLinkCommandInput,
  DisableVpcClassicLinkCommandOutput,
} from "./commands/DisableVpcClassicLinkCommand";
import type {
  DisableVpcClassicLinkDnsSupportCommandInput,
  DisableVpcClassicLinkDnsSupportCommandOutput,
} from "./commands/DisableVpcClassicLinkDnsSupportCommand";
import type {
  DisassociateAddressCommandInput,
  DisassociateAddressCommandOutput,
} from "./commands/DisassociateAddressCommand";
import type {
  DisassociateCapacityReservationBillingOwnerCommandInput,
  DisassociateCapacityReservationBillingOwnerCommandOutput,
} from "./commands/DisassociateCapacityReservationBillingOwnerCommand";
import type {
  DisassociateClientVpnTargetNetworkCommandInput,
  DisassociateClientVpnTargetNetworkCommandOutput,
} from "./commands/DisassociateClientVpnTargetNetworkCommand";
import type {
  DisassociateEnclaveCertificateIamRoleCommandInput,
  DisassociateEnclaveCertificateIamRoleCommandOutput,
} from "./commands/DisassociateEnclaveCertificateIamRoleCommand";
import type {
  DisassociateIamInstanceProfileCommandInput,
  DisassociateIamInstanceProfileCommandOutput,
} from "./commands/DisassociateIamInstanceProfileCommand";
import type {
  DisassociateInstanceEventWindowCommandInput,
  DisassociateInstanceEventWindowCommandOutput,
} from "./commands/DisassociateInstanceEventWindowCommand";
import type {
  DisassociateIpamByoasnCommandInput,
  DisassociateIpamByoasnCommandOutput,
} from "./commands/DisassociateIpamByoasnCommand";
import type {
  DisassociateIpamResourceDiscoveryCommandInput,
  DisassociateIpamResourceDiscoveryCommandOutput,
} from "./commands/DisassociateIpamResourceDiscoveryCommand";
import type {
  DisassociateNatGatewayAddressCommandInput,
  DisassociateNatGatewayAddressCommandOutput,
} from "./commands/DisassociateNatGatewayAddressCommand";
import type {
  DisassociateRouteServerCommandInput,
  DisassociateRouteServerCommandOutput,
} from "./commands/DisassociateRouteServerCommand";
import type {
  DisassociateRouteTableCommandInput,
  DisassociateRouteTableCommandOutput,
} from "./commands/DisassociateRouteTableCommand";
import type {
  DisassociateSecurityGroupVpcCommandInput,
  DisassociateSecurityGroupVpcCommandOutput,
} from "./commands/DisassociateSecurityGroupVpcCommand";
import type {
  DisassociateSubnetCidrBlockCommandInput,
  DisassociateSubnetCidrBlockCommandOutput,
} from "./commands/DisassociateSubnetCidrBlockCommand";
import type {
  DisassociateTransitGatewayMulticastDomainCommandInput,
  DisassociateTransitGatewayMulticastDomainCommandOutput,
} from "./commands/DisassociateTransitGatewayMulticastDomainCommand";
import type {
  DisassociateTransitGatewayPolicyTableCommandInput,
  DisassociateTransitGatewayPolicyTableCommandOutput,
} from "./commands/DisassociateTransitGatewayPolicyTableCommand";
import type {
  DisassociateTransitGatewayRouteTableCommandInput,
  DisassociateTransitGatewayRouteTableCommandOutput,
} from "./commands/DisassociateTransitGatewayRouteTableCommand";
import type {
  DisassociateTrunkInterfaceCommandInput,
  DisassociateTrunkInterfaceCommandOutput,
} from "./commands/DisassociateTrunkInterfaceCommand";
import type {
  DisassociateVpcCidrBlockCommandInput,
  DisassociateVpcCidrBlockCommandOutput,
} from "./commands/DisassociateVpcCidrBlockCommand";
import type {
  EnableAddressTransferCommandInput,
  EnableAddressTransferCommandOutput,
} from "./commands/EnableAddressTransferCommand";
import type {
  EnableAllowedImagesSettingsCommandInput,
  EnableAllowedImagesSettingsCommandOutput,
} from "./commands/EnableAllowedImagesSettingsCommand";
import type {
  EnableAwsNetworkPerformanceMetricSubscriptionCommandInput,
  EnableAwsNetworkPerformanceMetricSubscriptionCommandOutput,
} from "./commands/EnableAwsNetworkPerformanceMetricSubscriptionCommand";
import type {
  EnableCapacityManagerCommandInput,
  EnableCapacityManagerCommandOutput,
} from "./commands/EnableCapacityManagerCommand";
import type {
  EnableEbsEncryptionByDefaultCommandInput,
  EnableEbsEncryptionByDefaultCommandOutput,
} from "./commands/EnableEbsEncryptionByDefaultCommand";
import type { EnableFastLaunchCommandInput, EnableFastLaunchCommandOutput } from "./commands/EnableFastLaunchCommand";
import type {
  EnableFastSnapshotRestoresCommandInput,
  EnableFastSnapshotRestoresCommandOutput,
} from "./commands/EnableFastSnapshotRestoresCommand";
import type {
  EnableImageBlockPublicAccessCommandInput,
  EnableImageBlockPublicAccessCommandOutput,
} from "./commands/EnableImageBlockPublicAccessCommand";
import type { EnableImageCommandInput, EnableImageCommandOutput } from "./commands/EnableImageCommand";
import type {
  EnableImageDeprecationCommandInput,
  EnableImageDeprecationCommandOutput,
} from "./commands/EnableImageDeprecationCommand";
import type {
  EnableImageDeregistrationProtectionCommandInput,
  EnableImageDeregistrationProtectionCommandOutput,
} from "./commands/EnableImageDeregistrationProtectionCommand";
import type {
  EnableInstanceSqlHaStandbyDetectionsCommandInput,
  EnableInstanceSqlHaStandbyDetectionsCommandOutput,
} from "./commands/EnableInstanceSqlHaStandbyDetectionsCommand";
import type {
  EnableIpamOrganizationAdminAccountCommandInput,
  EnableIpamOrganizationAdminAccountCommandOutput,
} from "./commands/EnableIpamOrganizationAdminAccountCommand";
import type { EnableIpamPolicyCommandInput, EnableIpamPolicyCommandOutput } from "./commands/EnableIpamPolicyCommand";
import type {
  EnableReachabilityAnalyzerOrganizationSharingCommandInput,
  EnableReachabilityAnalyzerOrganizationSharingCommandOutput,
} from "./commands/EnableReachabilityAnalyzerOrganizationSharingCommand";
import type {
  EnableRouteServerPropagationCommandInput,
  EnableRouteServerPropagationCommandOutput,
} from "./commands/EnableRouteServerPropagationCommand";
import type {
  EnableSerialConsoleAccessCommandInput,
  EnableSerialConsoleAccessCommandOutput,
} from "./commands/EnableSerialConsoleAccessCommand";
import type {
  EnableSnapshotBlockPublicAccessCommandInput,
  EnableSnapshotBlockPublicAccessCommandOutput,
} from "./commands/EnableSnapshotBlockPublicAccessCommand";
import type {
  EnableTransitGatewayRouteTablePropagationCommandInput,
  EnableTransitGatewayRouteTablePropagationCommandOutput,
} from "./commands/EnableTransitGatewayRouteTablePropagationCommand";
import type {
  EnableVgwRoutePropagationCommandInput,
  EnableVgwRoutePropagationCommandOutput,
} from "./commands/EnableVgwRoutePropagationCommand";
import type { EnableVolumeIOCommandInput, EnableVolumeIOCommandOutput } from "./commands/EnableVolumeIOCommand";
import type {
  EnableVpcClassicLinkCommandInput,
  EnableVpcClassicLinkCommandOutput,
} from "./commands/EnableVpcClassicLinkCommand";
import type {
  EnableVpcClassicLinkDnsSupportCommandInput,
  EnableVpcClassicLinkDnsSupportCommandOutput,
} from "./commands/EnableVpcClassicLinkDnsSupportCommand";
import type {
  ExportClientVpnClientCertificateRevocationListCommandInput,
  ExportClientVpnClientCertificateRevocationListCommandOutput,
} from "./commands/ExportClientVpnClientCertificateRevocationListCommand";
import type {
  ExportClientVpnClientConfigurationCommandInput,
  ExportClientVpnClientConfigurationCommandOutput,
} from "./commands/ExportClientVpnClientConfigurationCommand";
import type { ExportImageCommandInput, ExportImageCommandOutput } from "./commands/ExportImageCommand";
import type {
  ExportTransitGatewayRoutesCommandInput,
  ExportTransitGatewayRoutesCommandOutput,
} from "./commands/ExportTransitGatewayRoutesCommand";
import type {
  ExportVerifiedAccessInstanceClientConfigurationCommandInput,
  ExportVerifiedAccessInstanceClientConfigurationCommandOutput,
} from "./commands/ExportVerifiedAccessInstanceClientConfigurationCommand";
import type {
  GetActiveVpnTunnelStatusCommandInput,
  GetActiveVpnTunnelStatusCommandOutput,
} from "./commands/GetActiveVpnTunnelStatusCommand";
import type {
  GetAllowedImagesSettingsCommandInput,
  GetAllowedImagesSettingsCommandOutput,
} from "./commands/GetAllowedImagesSettingsCommand";
import type {
  GetAssociatedEnclaveCertificateIamRolesCommandInput,
  GetAssociatedEnclaveCertificateIamRolesCommandOutput,
} from "./commands/GetAssociatedEnclaveCertificateIamRolesCommand";
import type {
  GetAssociatedIpv6PoolCidrsCommandInput,
  GetAssociatedIpv6PoolCidrsCommandOutput,
} from "./commands/GetAssociatedIpv6PoolCidrsCommand";
import type {
  GetAwsNetworkPerformanceDataCommandInput,
  GetAwsNetworkPerformanceDataCommandOutput,
} from "./commands/GetAwsNetworkPerformanceDataCommand";
import type {
  GetCapacityManagerAttributesCommandInput,
  GetCapacityManagerAttributesCommandOutput,
} from "./commands/GetCapacityManagerAttributesCommand";
import type {
  GetCapacityManagerMetricDataCommandInput,
  GetCapacityManagerMetricDataCommandOutput,
} from "./commands/GetCapacityManagerMetricDataCommand";
import type {
  GetCapacityManagerMetricDimensionsCommandInput,
  GetCapacityManagerMetricDimensionsCommandOutput,
} from "./commands/GetCapacityManagerMetricDimensionsCommand";
import type {
  GetCapacityReservationUsageCommandInput,
  GetCapacityReservationUsageCommandOutput,
} from "./commands/GetCapacityReservationUsageCommand";
import type { GetCoipPoolUsageCommandInput, GetCoipPoolUsageCommandOutput } from "./commands/GetCoipPoolUsageCommand";
import type { GetConsoleOutputCommandInput, GetConsoleOutputCommandOutput } from "./commands/GetConsoleOutputCommand";
import type {
  GetConsoleScreenshotCommandInput,
  GetConsoleScreenshotCommandOutput,
} from "./commands/GetConsoleScreenshotCommand";
import type {
  GetDeclarativePoliciesReportSummaryCommandInput,
  GetDeclarativePoliciesReportSummaryCommandOutput,
} from "./commands/GetDeclarativePoliciesReportSummaryCommand";
import type {
  GetDefaultCreditSpecificationCommandInput,
  GetDefaultCreditSpecificationCommandOutput,
} from "./commands/GetDefaultCreditSpecificationCommand";
import type {
  GetEbsDefaultKmsKeyIdCommandInput,
  GetEbsDefaultKmsKeyIdCommandOutput,
} from "./commands/GetEbsDefaultKmsKeyIdCommand";
import type {
  GetEbsEncryptionByDefaultCommandInput,
  GetEbsEncryptionByDefaultCommandOutput,
} from "./commands/GetEbsEncryptionByDefaultCommand";
import type {
  GetEnabledIpamPolicyCommandInput,
  GetEnabledIpamPolicyCommandOutput,
} from "./commands/GetEnabledIpamPolicyCommand";
import type {
  GetFlowLogsIntegrationTemplateCommandInput,
  GetFlowLogsIntegrationTemplateCommandOutput,
} from "./commands/GetFlowLogsIntegrationTemplateCommand";
import type {
  GetGroupsForCapacityReservationCommandInput,
  GetGroupsForCapacityReservationCommandOutput,
} from "./commands/GetGroupsForCapacityReservationCommand";
import type {
  GetHostReservationPurchasePreviewCommandInput,
  GetHostReservationPurchasePreviewCommandOutput,
} from "./commands/GetHostReservationPurchasePreviewCommand";
import type { GetImageAncestryCommandInput, GetImageAncestryCommandOutput } from "./commands/GetImageAncestryCommand";
import type {
  GetImageBlockPublicAccessStateCommandInput,
  GetImageBlockPublicAccessStateCommandOutput,
} from "./commands/GetImageBlockPublicAccessStateCommand";
import type {
  GetInstanceMetadataDefaultsCommandInput,
  GetInstanceMetadataDefaultsCommandOutput,
} from "./commands/GetInstanceMetadataDefaultsCommand";
import type {
  GetInstanceTpmEkPubCommandInput,
  GetInstanceTpmEkPubCommandOutput,
} from "./commands/GetInstanceTpmEkPubCommand";
import type {
  GetInstanceTypesFromInstanceRequirementsCommandInput,
  GetInstanceTypesFromInstanceRequirementsCommandOutput,
} from "./commands/GetInstanceTypesFromInstanceRequirementsCommand";
import type {
  GetInstanceUefiDataCommandInput,
  GetInstanceUefiDataCommandOutput,
} from "./commands/GetInstanceUefiDataCommand";
import type {
  GetIpamAddressHistoryCommandInput,
  GetIpamAddressHistoryCommandOutput,
} from "./commands/GetIpamAddressHistoryCommand";
import type {
  GetIpamDiscoveredAccountsCommandInput,
  GetIpamDiscoveredAccountsCommandOutput,
} from "./commands/GetIpamDiscoveredAccountsCommand";
import type {
  GetIpamDiscoveredPublicAddressesCommandInput,
  GetIpamDiscoveredPublicAddressesCommandOutput,
} from "./commands/GetIpamDiscoveredPublicAddressesCommand";
import type {
  GetIpamDiscoveredResourceCidrsCommandInput,
  GetIpamDiscoveredResourceCidrsCommandOutput,
} from "./commands/GetIpamDiscoveredResourceCidrsCommand";
import type {
  GetIpamPolicyAllocationRulesCommandInput,
  GetIpamPolicyAllocationRulesCommandOutput,
} from "./commands/GetIpamPolicyAllocationRulesCommand";
import type {
  GetIpamPolicyOrganizationTargetsCommandInput,
  GetIpamPolicyOrganizationTargetsCommandOutput,
} from "./commands/GetIpamPolicyOrganizationTargetsCommand";
import type {
  GetIpamPoolAllocationsCommandInput,
  GetIpamPoolAllocationsCommandOutput,
} from "./commands/GetIpamPoolAllocationsCommand";
import type { GetIpamPoolCidrsCommandInput, GetIpamPoolCidrsCommandOutput } from "./commands/GetIpamPoolCidrsCommand";
import type {
  GetIpamPrefixListResolverRulesCommandInput,
  GetIpamPrefixListResolverRulesCommandOutput,
} from "./commands/GetIpamPrefixListResolverRulesCommand";
import type {
  GetIpamPrefixListResolverVersionEntriesCommandInput,
  GetIpamPrefixListResolverVersionEntriesCommandOutput,
} from "./commands/GetIpamPrefixListResolverVersionEntriesCommand";
import type {
  GetIpamPrefixListResolverVersionsCommandInput,
  GetIpamPrefixListResolverVersionsCommandOutput,
} from "./commands/GetIpamPrefixListResolverVersionsCommand";
import type {
  GetIpamResourceCidrsCommandInput,
  GetIpamResourceCidrsCommandOutput,
} from "./commands/GetIpamResourceCidrsCommand";
import type {
  GetLaunchTemplateDataCommandInput,
  GetLaunchTemplateDataCommandOutput,
} from "./commands/GetLaunchTemplateDataCommand";
import type {
  GetManagedPrefixListAssociationsCommandInput,
  GetManagedPrefixListAssociationsCommandOutput,
} from "./commands/GetManagedPrefixListAssociationsCommand";
import type {
  GetManagedPrefixListEntriesCommandInput,
  GetManagedPrefixListEntriesCommandOutput,
} from "./commands/GetManagedPrefixListEntriesCommand";
import type {
  GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput,
  GetNetworkInsightsAccessScopeAnalysisFindingsCommandOutput,
} from "./commands/GetNetworkInsightsAccessScopeAnalysisFindingsCommand";
import type {
  GetNetworkInsightsAccessScopeContentCommandInput,
  GetNetworkInsightsAccessScopeContentCommandOutput,
} from "./commands/GetNetworkInsightsAccessScopeContentCommand";
import type { GetPasswordDataCommandInput, GetPasswordDataCommandOutput } from "./commands/GetPasswordDataCommand";
import type {
  GetReservedInstancesExchangeQuoteCommandInput,
  GetReservedInstancesExchangeQuoteCommandOutput,
} from "./commands/GetReservedInstancesExchangeQuoteCommand";
import type {
  GetRouteServerAssociationsCommandInput,
  GetRouteServerAssociationsCommandOutput,
} from "./commands/GetRouteServerAssociationsCommand";
import type {
  GetRouteServerPropagationsCommandInput,
  GetRouteServerPropagationsCommandOutput,
} from "./commands/GetRouteServerPropagationsCommand";
import type {
  GetRouteServerRoutingDatabaseCommandInput,
  GetRouteServerRoutingDatabaseCommandOutput,
} from "./commands/GetRouteServerRoutingDatabaseCommand";
import type {
  GetSecurityGroupsForVpcCommandInput,
  GetSecurityGroupsForVpcCommandOutput,
} from "./commands/GetSecurityGroupsForVpcCommand";
import type {
  GetSerialConsoleAccessStatusCommandInput,
  GetSerialConsoleAccessStatusCommandOutput,
} from "./commands/GetSerialConsoleAccessStatusCommand";
import type {
  GetSnapshotBlockPublicAccessStateCommandInput,
  GetSnapshotBlockPublicAccessStateCommandOutput,
} from "./commands/GetSnapshotBlockPublicAccessStateCommand";
import type {
  GetSpotPlacementScoresCommandInput,
  GetSpotPlacementScoresCommandOutput,
} from "./commands/GetSpotPlacementScoresCommand";
import type {
  GetSubnetCidrReservationsCommandInput,
  GetSubnetCidrReservationsCommandOutput,
} from "./commands/GetSubnetCidrReservationsCommand";
import type {
  GetTransitGatewayAttachmentPropagationsCommandInput,
  GetTransitGatewayAttachmentPropagationsCommandOutput,
} from "./commands/GetTransitGatewayAttachmentPropagationsCommand";
import type {
  GetTransitGatewayMeteringPolicyEntriesCommandInput,
  GetTransitGatewayMeteringPolicyEntriesCommandOutput,
} from "./commands/GetTransitGatewayMeteringPolicyEntriesCommand";
import type {
  GetTransitGatewayMulticastDomainAssociationsCommandInput,
  GetTransitGatewayMulticastDomainAssociationsCommandOutput,
} from "./commands/GetTransitGatewayMulticastDomainAssociationsCommand";
import type {
  GetTransitGatewayPolicyTableAssociationsCommandInput,
  GetTransitGatewayPolicyTableAssociationsCommandOutput,
} from "./commands/GetTransitGatewayPolicyTableAssociationsCommand";
import type {
  GetTransitGatewayPolicyTableEntriesCommandInput,
  GetTransitGatewayPolicyTableEntriesCommandOutput,
} from "./commands/GetTransitGatewayPolicyTableEntriesCommand";
import type {
  GetTransitGatewayPrefixListReferencesCommandInput,
  GetTransitGatewayPrefixListReferencesCommandOutput,
} from "./commands/GetTransitGatewayPrefixListReferencesCommand";
import type {
  GetTransitGatewayRouteTableAssociationsCommandInput,
  GetTransitGatewayRouteTableAssociationsCommandOutput,
} from "./commands/GetTransitGatewayRouteTableAssociationsCommand";
import type {
  GetTransitGatewayRouteTablePropagationsCommandInput,
  GetTransitGatewayRouteTablePropagationsCommandOutput,
} from "./commands/GetTransitGatewayRouteTablePropagationsCommand";
import type {
  GetVerifiedAccessEndpointPolicyCommandInput,
  GetVerifiedAccessEndpointPolicyCommandOutput,
} from "./commands/GetVerifiedAccessEndpointPolicyCommand";
import type {
  GetVerifiedAccessEndpointTargetsCommandInput,
  GetVerifiedAccessEndpointTargetsCommandOutput,
} from "./commands/GetVerifiedAccessEndpointTargetsCommand";
import type {
  GetVerifiedAccessGroupPolicyCommandInput,
  GetVerifiedAccessGroupPolicyCommandOutput,
} from "./commands/GetVerifiedAccessGroupPolicyCommand";
import type {
  GetVpcResourcesBlockingEncryptionEnforcementCommandInput,
  GetVpcResourcesBlockingEncryptionEnforcementCommandOutput,
} from "./commands/GetVpcResourcesBlockingEncryptionEnforcementCommand";
import type {
  GetVpnConnectionDeviceSampleConfigurationCommandInput,
  GetVpnConnectionDeviceSampleConfigurationCommandOutput,
} from "./commands/GetVpnConnectionDeviceSampleConfigurationCommand";
import type {
  GetVpnConnectionDeviceTypesCommandInput,
  GetVpnConnectionDeviceTypesCommandOutput,
} from "./commands/GetVpnConnectionDeviceTypesCommand";
import type {
  GetVpnTunnelReplacementStatusCommandInput,
  GetVpnTunnelReplacementStatusCommandOutput,
} from "./commands/GetVpnTunnelReplacementStatusCommand";
import type {
  ImportClientVpnClientCertificateRevocationListCommandInput,
  ImportClientVpnClientCertificateRevocationListCommandOutput,
} from "./commands/ImportClientVpnClientCertificateRevocationListCommand";
import type { ImportImageCommandInput, ImportImageCommandOutput } from "./commands/ImportImageCommand";
import type { ImportInstanceCommandInput, ImportInstanceCommandOutput } from "./commands/ImportInstanceCommand";
import type { ImportKeyPairCommandInput, ImportKeyPairCommandOutput } from "./commands/ImportKeyPairCommand";
import type { ImportSnapshotCommandInput, ImportSnapshotCommandOutput } from "./commands/ImportSnapshotCommand";
import type { ImportVolumeCommandInput, ImportVolumeCommandOutput } from "./commands/ImportVolumeCommand";
import type {
  ListImagesInRecycleBinCommandInput,
  ListImagesInRecycleBinCommandOutput,
} from "./commands/ListImagesInRecycleBinCommand";
import type {
  ListSnapshotsInRecycleBinCommandInput,
  ListSnapshotsInRecycleBinCommandOutput,
} from "./commands/ListSnapshotsInRecycleBinCommand";
import type {
  ListVolumesInRecycleBinCommandInput,
  ListVolumesInRecycleBinCommandOutput,
} from "./commands/ListVolumesInRecycleBinCommand";
import type { LockSnapshotCommandInput, LockSnapshotCommandOutput } from "./commands/LockSnapshotCommand";
import type {
  ModifyAddressAttributeCommandInput,
  ModifyAddressAttributeCommandOutput,
} from "./commands/ModifyAddressAttributeCommand";
import type {
  ModifyAvailabilityZoneGroupCommandInput,
  ModifyAvailabilityZoneGroupCommandOutput,
} from "./commands/ModifyAvailabilityZoneGroupCommand";
import type {
  ModifyCapacityReservationCommandInput,
  ModifyCapacityReservationCommandOutput,
} from "./commands/ModifyCapacityReservationCommand";
import type {
  ModifyCapacityReservationFleetCommandInput,
  ModifyCapacityReservationFleetCommandOutput,
} from "./commands/ModifyCapacityReservationFleetCommand";
import type {
  ModifyClientVpnEndpointCommandInput,
  ModifyClientVpnEndpointCommandOutput,
} from "./commands/ModifyClientVpnEndpointCommand";
import type {
  ModifyDefaultCreditSpecificationCommandInput,
  ModifyDefaultCreditSpecificationCommandOutput,
} from "./commands/ModifyDefaultCreditSpecificationCommand";
import type {
  ModifyEbsDefaultKmsKeyIdCommandInput,
  ModifyEbsDefaultKmsKeyIdCommandOutput,
} from "./commands/ModifyEbsDefaultKmsKeyIdCommand";
import type { ModifyFleetCommandInput, ModifyFleetCommandOutput } from "./commands/ModifyFleetCommand";
import type {
  ModifyFpgaImageAttributeCommandInput,
  ModifyFpgaImageAttributeCommandOutput,
} from "./commands/ModifyFpgaImageAttributeCommand";
import type { ModifyHostsCommandInput, ModifyHostsCommandOutput } from "./commands/ModifyHostsCommand";
import type {
  ModifyIdentityIdFormatCommandInput,
  ModifyIdentityIdFormatCommandOutput,
} from "./commands/ModifyIdentityIdFormatCommand";
import type { ModifyIdFormatCommandInput, ModifyIdFormatCommandOutput } from "./commands/ModifyIdFormatCommand";
import type {
  ModifyImageAttributeCommandInput,
  ModifyImageAttributeCommandOutput,
} from "./commands/ModifyImageAttributeCommand";
import type {
  ModifyInstanceAttributeCommandInput,
  ModifyInstanceAttributeCommandOutput,
} from "./commands/ModifyInstanceAttributeCommand";
import type {
  ModifyInstanceCapacityReservationAttributesCommandInput,
  ModifyInstanceCapacityReservationAttributesCommandOutput,
} from "./commands/ModifyInstanceCapacityReservationAttributesCommand";
import type {
  ModifyInstanceConnectEndpointCommandInput,
  ModifyInstanceConnectEndpointCommandOutput,
} from "./commands/ModifyInstanceConnectEndpointCommand";
import type {
  ModifyInstanceCpuOptionsCommandInput,
  ModifyInstanceCpuOptionsCommandOutput,
} from "./commands/ModifyInstanceCpuOptionsCommand";
import type {
  ModifyInstanceCreditSpecificationCommandInput,
  ModifyInstanceCreditSpecificationCommandOutput,
} from "./commands/ModifyInstanceCreditSpecificationCommand";
import type {
  ModifyInstanceEventStartTimeCommandInput,
  ModifyInstanceEventStartTimeCommandOutput,
} from "./commands/ModifyInstanceEventStartTimeCommand";
import type {
  ModifyInstanceEventWindowCommandInput,
  ModifyInstanceEventWindowCommandOutput,
} from "./commands/ModifyInstanceEventWindowCommand";
import type {
  ModifyInstanceMaintenanceOptionsCommandInput,
  ModifyInstanceMaintenanceOptionsCommandOutput,
} from "./commands/ModifyInstanceMaintenanceOptionsCommand";
import type {
  ModifyInstanceMetadataDefaultsCommandInput,
  ModifyInstanceMetadataDefaultsCommandOutput,
} from "./commands/ModifyInstanceMetadataDefaultsCommand";
import type {
  ModifyInstanceMetadataOptionsCommandInput,
  ModifyInstanceMetadataOptionsCommandOutput,
} from "./commands/ModifyInstanceMetadataOptionsCommand";
import type {
  ModifyInstanceNetworkPerformanceOptionsCommandInput,
  ModifyInstanceNetworkPerformanceOptionsCommandOutput,
} from "./commands/ModifyInstanceNetworkPerformanceOptionsCommand";
import type {
  ModifyInstancePlacementCommandInput,
  ModifyInstancePlacementCommandOutput,
} from "./commands/ModifyInstancePlacementCommand";
import type { ModifyIpamCommandInput, ModifyIpamCommandOutput } from "./commands/ModifyIpamCommand";
import type {
  ModifyIpamPolicyAllocationRulesCommandInput,
  ModifyIpamPolicyAllocationRulesCommandOutput,
} from "./commands/ModifyIpamPolicyAllocationRulesCommand";
import type { ModifyIpamPoolCommandInput, ModifyIpamPoolCommandOutput } from "./commands/ModifyIpamPoolCommand";
import type {
  ModifyIpamPrefixListResolverCommandInput,
  ModifyIpamPrefixListResolverCommandOutput,
} from "./commands/ModifyIpamPrefixListResolverCommand";
import type {
  ModifyIpamPrefixListResolverTargetCommandInput,
  ModifyIpamPrefixListResolverTargetCommandOutput,
} from "./commands/ModifyIpamPrefixListResolverTargetCommand";
import type {
  ModifyIpamResourceCidrCommandInput,
  ModifyIpamResourceCidrCommandOutput,
} from "./commands/ModifyIpamResourceCidrCommand";
import type {
  ModifyIpamResourceDiscoveryCommandInput,
  ModifyIpamResourceDiscoveryCommandOutput,
} from "./commands/ModifyIpamResourceDiscoveryCommand";
import type { ModifyIpamScopeCommandInput, ModifyIpamScopeCommandOutput } from "./commands/ModifyIpamScopeCommand";
import type {
  ModifyLaunchTemplateCommandInput,
  ModifyLaunchTemplateCommandOutput,
} from "./commands/ModifyLaunchTemplateCommand";
import type {
  ModifyLocalGatewayRouteCommandInput,
  ModifyLocalGatewayRouteCommandOutput,
} from "./commands/ModifyLocalGatewayRouteCommand";
import type {
  ModifyManagedPrefixListCommandInput,
  ModifyManagedPrefixListCommandOutput,
} from "./commands/ModifyManagedPrefixListCommand";
import type {
  ModifyNetworkInterfaceAttributeCommandInput,
  ModifyNetworkInterfaceAttributeCommandOutput,
} from "./commands/ModifyNetworkInterfaceAttributeCommand";
import type {
  ModifyPrivateDnsNameOptionsCommandInput,
  ModifyPrivateDnsNameOptionsCommandOutput,
} from "./commands/ModifyPrivateDnsNameOptionsCommand";
import type {
  ModifyPublicIpDnsNameOptionsCommandInput,
  ModifyPublicIpDnsNameOptionsCommandOutput,
} from "./commands/ModifyPublicIpDnsNameOptionsCommand";
import type {
  ModifyReservedInstancesCommandInput,
  ModifyReservedInstancesCommandOutput,
} from "./commands/ModifyReservedInstancesCommand";
import type {
  ModifyRouteServerCommandInput,
  ModifyRouteServerCommandOutput,
} from "./commands/ModifyRouteServerCommand";
import type {
  ModifySecurityGroupRulesCommandInput,
  ModifySecurityGroupRulesCommandOutput,
} from "./commands/ModifySecurityGroupRulesCommand";
import type {
  ModifySnapshotAttributeCommandInput,
  ModifySnapshotAttributeCommandOutput,
} from "./commands/ModifySnapshotAttributeCommand";
import type {
  ModifySnapshotTierCommandInput,
  ModifySnapshotTierCommandOutput,
} from "./commands/ModifySnapshotTierCommand";
import type {
  ModifySpotFleetRequestCommandInput,
  ModifySpotFleetRequestCommandOutput,
} from "./commands/ModifySpotFleetRequestCommand";
import type {
  ModifySubnetAttributeCommandInput,
  ModifySubnetAttributeCommandOutput,
} from "./commands/ModifySubnetAttributeCommand";
import type {
  ModifyTrafficMirrorFilterNetworkServicesCommandInput,
  ModifyTrafficMirrorFilterNetworkServicesCommandOutput,
} from "./commands/ModifyTrafficMirrorFilterNetworkServicesCommand";
import type {
  ModifyTrafficMirrorFilterRuleCommandInput,
  ModifyTrafficMirrorFilterRuleCommandOutput,
} from "./commands/ModifyTrafficMirrorFilterRuleCommand";
import type {
  ModifyTrafficMirrorSessionCommandInput,
  ModifyTrafficMirrorSessionCommandOutput,
} from "./commands/ModifyTrafficMirrorSessionCommand";
import type {
  ModifyTransitGatewayCommandInput,
  ModifyTransitGatewayCommandOutput,
} from "./commands/ModifyTransitGatewayCommand";
import type {
  ModifyTransitGatewayMeteringPolicyCommandInput,
  ModifyTransitGatewayMeteringPolicyCommandOutput,
} from "./commands/ModifyTransitGatewayMeteringPolicyCommand";
import type {
  ModifyTransitGatewayPrefixListReferenceCommandInput,
  ModifyTransitGatewayPrefixListReferenceCommandOutput,
} from "./commands/ModifyTransitGatewayPrefixListReferenceCommand";
import type {
  ModifyTransitGatewayVpcAttachmentCommandInput,
  ModifyTransitGatewayVpcAttachmentCommandOutput,
} from "./commands/ModifyTransitGatewayVpcAttachmentCommand";
import type {
  ModifyVerifiedAccessEndpointCommandInput,
  ModifyVerifiedAccessEndpointCommandOutput,
} from "./commands/ModifyVerifiedAccessEndpointCommand";
import type {
  ModifyVerifiedAccessEndpointPolicyCommandInput,
  ModifyVerifiedAccessEndpointPolicyCommandOutput,
} from "./commands/ModifyVerifiedAccessEndpointPolicyCommand";
import type {
  ModifyVerifiedAccessGroupCommandInput,
  ModifyVerifiedAccessGroupCommandOutput,
} from "./commands/ModifyVerifiedAccessGroupCommand";
import type {
  ModifyVerifiedAccessGroupPolicyCommandInput,
  ModifyVerifiedAccessGroupPolicyCommandOutput,
} from "./commands/ModifyVerifiedAccessGroupPolicyCommand";
import type {
  ModifyVerifiedAccessInstanceCommandInput,
  ModifyVerifiedAccessInstanceCommandOutput,
} from "./commands/ModifyVerifiedAccessInstanceCommand";
import type {
  ModifyVerifiedAccessInstanceLoggingConfigurationCommandInput,
  ModifyVerifiedAccessInstanceLoggingConfigurationCommandOutput,
} from "./commands/ModifyVerifiedAccessInstanceLoggingConfigurationCommand";
import type {
  ModifyVerifiedAccessTrustProviderCommandInput,
  ModifyVerifiedAccessTrustProviderCommandOutput,
} from "./commands/ModifyVerifiedAccessTrustProviderCommand";
import type {
  ModifyVolumeAttributeCommandInput,
  ModifyVolumeAttributeCommandOutput,
} from "./commands/ModifyVolumeAttributeCommand";
import type { ModifyVolumeCommandInput, ModifyVolumeCommandOutput } from "./commands/ModifyVolumeCommand";
import type {
  ModifyVpcAttributeCommandInput,
  ModifyVpcAttributeCommandOutput,
} from "./commands/ModifyVpcAttributeCommand";
import type {
  ModifyVpcBlockPublicAccessExclusionCommandInput,
  ModifyVpcBlockPublicAccessExclusionCommandOutput,
} from "./commands/ModifyVpcBlockPublicAccessExclusionCommand";
import type {
  ModifyVpcBlockPublicAccessOptionsCommandInput,
  ModifyVpcBlockPublicAccessOptionsCommandOutput,
} from "./commands/ModifyVpcBlockPublicAccessOptionsCommand";
import type {
  ModifyVpcEncryptionControlCommandInput,
  ModifyVpcEncryptionControlCommandOutput,
} from "./commands/ModifyVpcEncryptionControlCommand";
import type {
  ModifyVpcEndpointCommandInput,
  ModifyVpcEndpointCommandOutput,
} from "./commands/ModifyVpcEndpointCommand";
import type {
  ModifyVpcEndpointConnectionNotificationCommandInput,
  ModifyVpcEndpointConnectionNotificationCommandOutput,
} from "./commands/ModifyVpcEndpointConnectionNotificationCommand";
import type {
  ModifyVpcEndpointServiceConfigurationCommandInput,
  ModifyVpcEndpointServiceConfigurationCommandOutput,
} from "./commands/ModifyVpcEndpointServiceConfigurationCommand";
import type {
  ModifyVpcEndpointServicePayerResponsibilityCommandInput,
  ModifyVpcEndpointServicePayerResponsibilityCommandOutput,
} from "./commands/ModifyVpcEndpointServicePayerResponsibilityCommand";
import type {
  ModifyVpcEndpointServicePermissionsCommandInput,
  ModifyVpcEndpointServicePermissionsCommandOutput,
} from "./commands/ModifyVpcEndpointServicePermissionsCommand";
import type {
  ModifyVpcPeeringConnectionOptionsCommandInput,
  ModifyVpcPeeringConnectionOptionsCommandOutput,
} from "./commands/ModifyVpcPeeringConnectionOptionsCommand";
import type { ModifyVpcTenancyCommandInput, ModifyVpcTenancyCommandOutput } from "./commands/ModifyVpcTenancyCommand";
import type {
  ModifyVpnConnectionCommandInput,
  ModifyVpnConnectionCommandOutput,
} from "./commands/ModifyVpnConnectionCommand";
import type {
  ModifyVpnConnectionOptionsCommandInput,
  ModifyVpnConnectionOptionsCommandOutput,
} from "./commands/ModifyVpnConnectionOptionsCommand";
import type {
  ModifyVpnTunnelCertificateCommandInput,
  ModifyVpnTunnelCertificateCommandOutput,
} from "./commands/ModifyVpnTunnelCertificateCommand";
import type {
  ModifyVpnTunnelOptionsCommandInput,
  ModifyVpnTunnelOptionsCommandOutput,
} from "./commands/ModifyVpnTunnelOptionsCommand";
import type { MonitorInstancesCommandInput, MonitorInstancesCommandOutput } from "./commands/MonitorInstancesCommand";
import type { MoveAddressToVpcCommandInput, MoveAddressToVpcCommandOutput } from "./commands/MoveAddressToVpcCommand";
import type {
  MoveByoipCidrToIpamCommandInput,
  MoveByoipCidrToIpamCommandOutput,
} from "./commands/MoveByoipCidrToIpamCommand";
import type {
  MoveCapacityReservationInstancesCommandInput,
  MoveCapacityReservationInstancesCommandOutput,
} from "./commands/MoveCapacityReservationInstancesCommand";
import type {
  ProvisionByoipCidrCommandInput,
  ProvisionByoipCidrCommandOutput,
} from "./commands/ProvisionByoipCidrCommand";
import type {
  ProvisionIpamByoasnCommandInput,
  ProvisionIpamByoasnCommandOutput,
} from "./commands/ProvisionIpamByoasnCommand";
import type {
  ProvisionIpamPoolCidrCommandInput,
  ProvisionIpamPoolCidrCommandOutput,
} from "./commands/ProvisionIpamPoolCidrCommand";
import type {
  ProvisionPublicIpv4PoolCidrCommandInput,
  ProvisionPublicIpv4PoolCidrCommandOutput,
} from "./commands/ProvisionPublicIpv4PoolCidrCommand";
import type {
  PurchaseCapacityBlockCommandInput,
  PurchaseCapacityBlockCommandOutput,
} from "./commands/PurchaseCapacityBlockCommand";
import type {
  PurchaseCapacityBlockExtensionCommandInput,
  PurchaseCapacityBlockExtensionCommandOutput,
} from "./commands/PurchaseCapacityBlockExtensionCommand";
import type {
  PurchaseHostReservationCommandInput,
  PurchaseHostReservationCommandOutput,
} from "./commands/PurchaseHostReservationCommand";
import type {
  PurchaseReservedInstancesOfferingCommandInput,
  PurchaseReservedInstancesOfferingCommandOutput,
} from "./commands/PurchaseReservedInstancesOfferingCommand";
import type {
  PurchaseScheduledInstancesCommandInput,
  PurchaseScheduledInstancesCommandOutput,
} from "./commands/PurchaseScheduledInstancesCommand";
import type { RebootInstancesCommandInput, RebootInstancesCommandOutput } from "./commands/RebootInstancesCommand";
import type { RegisterImageCommandInput, RegisterImageCommandOutput } from "./commands/RegisterImageCommand";
import type {
  RegisterInstanceEventNotificationAttributesCommandInput,
  RegisterInstanceEventNotificationAttributesCommandOutput,
} from "./commands/RegisterInstanceEventNotificationAttributesCommand";
import type {
  RegisterTransitGatewayMulticastGroupMembersCommandInput,
  RegisterTransitGatewayMulticastGroupMembersCommandOutput,
} from "./commands/RegisterTransitGatewayMulticastGroupMembersCommand";
import type {
  RegisterTransitGatewayMulticastGroupSourcesCommandInput,
  RegisterTransitGatewayMulticastGroupSourcesCommandOutput,
} from "./commands/RegisterTransitGatewayMulticastGroupSourcesCommand";
import type {
  RejectCapacityReservationBillingOwnershipCommandInput,
  RejectCapacityReservationBillingOwnershipCommandOutput,
} from "./commands/RejectCapacityReservationBillingOwnershipCommand";
import type {
  RejectTransitGatewayMulticastDomainAssociationsCommandInput,
  RejectTransitGatewayMulticastDomainAssociationsCommandOutput,
} from "./commands/RejectTransitGatewayMulticastDomainAssociationsCommand";
import type {
  RejectTransitGatewayPeeringAttachmentCommandInput,
  RejectTransitGatewayPeeringAttachmentCommandOutput,
} from "./commands/RejectTransitGatewayPeeringAttachmentCommand";
import type {
  RejectTransitGatewayVpcAttachmentCommandInput,
  RejectTransitGatewayVpcAttachmentCommandOutput,
} from "./commands/RejectTransitGatewayVpcAttachmentCommand";
import type {
  RejectVpcEndpointConnectionsCommandInput,
  RejectVpcEndpointConnectionsCommandOutput,
} from "./commands/RejectVpcEndpointConnectionsCommand";
import type {
  RejectVpcPeeringConnectionCommandInput,
  RejectVpcPeeringConnectionCommandOutput,
} from "./commands/RejectVpcPeeringConnectionCommand";
import type { ReleaseAddressCommandInput, ReleaseAddressCommandOutput } from "./commands/ReleaseAddressCommand";
import type { ReleaseHostsCommandInput, ReleaseHostsCommandOutput } from "./commands/ReleaseHostsCommand";
import type {
  ReleaseIpamPoolAllocationCommandInput,
  ReleaseIpamPoolAllocationCommandOutput,
} from "./commands/ReleaseIpamPoolAllocationCommand";
import type {
  ReplaceIamInstanceProfileAssociationCommandInput,
  ReplaceIamInstanceProfileAssociationCommandOutput,
} from "./commands/ReplaceIamInstanceProfileAssociationCommand";
import type {
  ReplaceImageCriteriaInAllowedImagesSettingsCommandInput,
  ReplaceImageCriteriaInAllowedImagesSettingsCommandOutput,
} from "./commands/ReplaceImageCriteriaInAllowedImagesSettingsCommand";
import type {
  ReplaceNetworkAclAssociationCommandInput,
  ReplaceNetworkAclAssociationCommandOutput,
} from "./commands/ReplaceNetworkAclAssociationCommand";
import type {
  ReplaceNetworkAclEntryCommandInput,
  ReplaceNetworkAclEntryCommandOutput,
} from "./commands/ReplaceNetworkAclEntryCommand";
import type { ReplaceRouteCommandInput, ReplaceRouteCommandOutput } from "./commands/ReplaceRouteCommand";
import type {
  ReplaceRouteTableAssociationCommandInput,
  ReplaceRouteTableAssociationCommandOutput,
} from "./commands/ReplaceRouteTableAssociationCommand";
import type {
  ReplaceTransitGatewayRouteCommandInput,
  ReplaceTransitGatewayRouteCommandOutput,
} from "./commands/ReplaceTransitGatewayRouteCommand";
import type { ReplaceVpnTunnelCommandInput, ReplaceVpnTunnelCommandOutput } from "./commands/ReplaceVpnTunnelCommand";
import type {
  ReportInstanceStatusCommandInput,
  ReportInstanceStatusCommandOutput,
} from "./commands/ReportInstanceStatusCommand";
import type { RequestSpotFleetCommandInput, RequestSpotFleetCommandOutput } from "./commands/RequestSpotFleetCommand";
import type {
  RequestSpotInstancesCommandInput,
  RequestSpotInstancesCommandOutput,
} from "./commands/RequestSpotInstancesCommand";
import type {
  ResetAddressAttributeCommandInput,
  ResetAddressAttributeCommandOutput,
} from "./commands/ResetAddressAttributeCommand";
import type {
  ResetEbsDefaultKmsKeyIdCommandInput,
  ResetEbsDefaultKmsKeyIdCommandOutput,
} from "./commands/ResetEbsDefaultKmsKeyIdCommand";
import type {
  ResetFpgaImageAttributeCommandInput,
  ResetFpgaImageAttributeCommandOutput,
} from "./commands/ResetFpgaImageAttributeCommand";
import type {
  ResetImageAttributeCommandInput,
  ResetImageAttributeCommandOutput,
} from "./commands/ResetImageAttributeCommand";
import type {
  ResetInstanceAttributeCommandInput,
  ResetInstanceAttributeCommandOutput,
} from "./commands/ResetInstanceAttributeCommand";
import type {
  ResetNetworkInterfaceAttributeCommandInput,
  ResetNetworkInterfaceAttributeCommandOutput,
} from "./commands/ResetNetworkInterfaceAttributeCommand";
import type {
  ResetSnapshotAttributeCommandInput,
  ResetSnapshotAttributeCommandOutput,
} from "./commands/ResetSnapshotAttributeCommand";
import type {
  RestoreAddressToClassicCommandInput,
  RestoreAddressToClassicCommandOutput,
} from "./commands/RestoreAddressToClassicCommand";
import type {
  RestoreImageFromRecycleBinCommandInput,
  RestoreImageFromRecycleBinCommandOutput,
} from "./commands/RestoreImageFromRecycleBinCommand";
import type {
  RestoreManagedPrefixListVersionCommandInput,
  RestoreManagedPrefixListVersionCommandOutput,
} from "./commands/RestoreManagedPrefixListVersionCommand";
import type {
  RestoreSnapshotFromRecycleBinCommandInput,
  RestoreSnapshotFromRecycleBinCommandOutput,
} from "./commands/RestoreSnapshotFromRecycleBinCommand";
import type {
  RestoreSnapshotTierCommandInput,
  RestoreSnapshotTierCommandOutput,
} from "./commands/RestoreSnapshotTierCommand";
import type {
  RestoreVolumeFromRecycleBinCommandInput,
  RestoreVolumeFromRecycleBinCommandOutput,
} from "./commands/RestoreVolumeFromRecycleBinCommand";
import type {
  RevokeClientVpnIngressCommandInput,
  RevokeClientVpnIngressCommandOutput,
} from "./commands/RevokeClientVpnIngressCommand";
import type {
  RevokeSecurityGroupEgressCommandInput,
  RevokeSecurityGroupEgressCommandOutput,
} from "./commands/RevokeSecurityGroupEgressCommand";
import type {
  RevokeSecurityGroupIngressCommandInput,
  RevokeSecurityGroupIngressCommandOutput,
} from "./commands/RevokeSecurityGroupIngressCommand";
import type { RunInstancesCommandInput, RunInstancesCommandOutput } from "./commands/RunInstancesCommand";
import type {
  RunScheduledInstancesCommandInput,
  RunScheduledInstancesCommandOutput,
} from "./commands/RunScheduledInstancesCommand";
import type {
  SearchLocalGatewayRoutesCommandInput,
  SearchLocalGatewayRoutesCommandOutput,
} from "./commands/SearchLocalGatewayRoutesCommand";
import type {
  SearchTransitGatewayMulticastGroupsCommandInput,
  SearchTransitGatewayMulticastGroupsCommandOutput,
} from "./commands/SearchTransitGatewayMulticastGroupsCommand";
import type {
  SearchTransitGatewayRoutesCommandInput,
  SearchTransitGatewayRoutesCommandOutput,
} from "./commands/SearchTransitGatewayRoutesCommand";
import type {
  SendDiagnosticInterruptCommandInput,
  SendDiagnosticInterruptCommandOutput,
} from "./commands/SendDiagnosticInterruptCommand";
import type {
  StartDeclarativePoliciesReportCommandInput,
  StartDeclarativePoliciesReportCommandOutput,
} from "./commands/StartDeclarativePoliciesReportCommand";
import type { StartInstancesCommandInput, StartInstancesCommandOutput } from "./commands/StartInstancesCommand";
import type {
  StartNetworkInsightsAccessScopeAnalysisCommandInput,
  StartNetworkInsightsAccessScopeAnalysisCommandOutput,
} from "./commands/StartNetworkInsightsAccessScopeAnalysisCommand";
import type {
  StartNetworkInsightsAnalysisCommandInput,
  StartNetworkInsightsAnalysisCommandOutput,
} from "./commands/StartNetworkInsightsAnalysisCommand";
import type {
  StartVpcEndpointServicePrivateDnsVerificationCommandInput,
  StartVpcEndpointServicePrivateDnsVerificationCommandOutput,
} from "./commands/StartVpcEndpointServicePrivateDnsVerificationCommand";
import type { StopInstancesCommandInput, StopInstancesCommandOutput } from "./commands/StopInstancesCommand";
import type {
  TerminateClientVpnConnectionsCommandInput,
  TerminateClientVpnConnectionsCommandOutput,
} from "./commands/TerminateClientVpnConnectionsCommand";
import type {
  TerminateInstancesCommandInput,
  TerminateInstancesCommandOutput,
} from "./commands/TerminateInstancesCommand";
import type {
  UnassignIpv6AddressesCommandInput,
  UnassignIpv6AddressesCommandOutput,
} from "./commands/UnassignIpv6AddressesCommand";
import type {
  UnassignPrivateIpAddressesCommandInput,
  UnassignPrivateIpAddressesCommandOutput,
} from "./commands/UnassignPrivateIpAddressesCommand";
import type {
  UnassignPrivateNatGatewayAddressCommandInput,
  UnassignPrivateNatGatewayAddressCommandOutput,
} from "./commands/UnassignPrivateNatGatewayAddressCommand";
import type { UnlockSnapshotCommandInput, UnlockSnapshotCommandOutput } from "./commands/UnlockSnapshotCommand";
import type {
  UnmonitorInstancesCommandInput,
  UnmonitorInstancesCommandOutput,
} from "./commands/UnmonitorInstancesCommand";
import type {
  UpdateCapacityManagerOrganizationsAccessCommandInput,
  UpdateCapacityManagerOrganizationsAccessCommandOutput,
} from "./commands/UpdateCapacityManagerOrganizationsAccessCommand";
import type {
  UpdateInterruptibleCapacityReservationAllocationCommandInput,
  UpdateInterruptibleCapacityReservationAllocationCommandOutput,
} from "./commands/UpdateInterruptibleCapacityReservationAllocationCommand";
import type {
  UpdateSecurityGroupRuleDescriptionsEgressCommandInput,
  UpdateSecurityGroupRuleDescriptionsEgressCommandOutput,
} from "./commands/UpdateSecurityGroupRuleDescriptionsEgressCommand";
import type {
  UpdateSecurityGroupRuleDescriptionsIngressCommandInput,
  UpdateSecurityGroupRuleDescriptionsIngressCommandOutput,
} from "./commands/UpdateSecurityGroupRuleDescriptionsIngressCommand";
import type {
  WithdrawByoipCidrCommandInput,
  WithdrawByoipCidrCommandOutput,
} from "./commands/WithdrawByoipCidrCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AcceptAddressTransferCommandInput
  | AcceptCapacityReservationBillingOwnershipCommandInput
  | AcceptReservedInstancesExchangeQuoteCommandInput
  | AcceptTransitGatewayMulticastDomainAssociationsCommandInput
  | AcceptTransitGatewayPeeringAttachmentCommandInput
  | AcceptTransitGatewayVpcAttachmentCommandInput
  | AcceptVpcEndpointConnectionsCommandInput
  | AcceptVpcPeeringConnectionCommandInput
  | AdvertiseByoipCidrCommandInput
  | AllocateAddressCommandInput
  | AllocateHostsCommandInput
  | AllocateIpamPoolCidrCommandInput
  | ApplySecurityGroupsToClientVpnTargetNetworkCommandInput
  | AssignIpv6AddressesCommandInput
  | AssignPrivateIpAddressesCommandInput
  | AssignPrivateNatGatewayAddressCommandInput
  | AssociateAddressCommandInput
  | AssociateCapacityReservationBillingOwnerCommandInput
  | AssociateClientVpnTargetNetworkCommandInput
  | AssociateDhcpOptionsCommandInput
  | AssociateEnclaveCertificateIamRoleCommandInput
  | AssociateIamInstanceProfileCommandInput
  | AssociateInstanceEventWindowCommandInput
  | AssociateIpamByoasnCommandInput
  | AssociateIpamResourceDiscoveryCommandInput
  | AssociateNatGatewayAddressCommandInput
  | AssociateRouteServerCommandInput
  | AssociateRouteTableCommandInput
  | AssociateSecurityGroupVpcCommandInput
  | AssociateSubnetCidrBlockCommandInput
  | AssociateTransitGatewayMulticastDomainCommandInput
  | AssociateTransitGatewayPolicyTableCommandInput
  | AssociateTransitGatewayRouteTableCommandInput
  | AssociateTrunkInterfaceCommandInput
  | AssociateVpcCidrBlockCommandInput
  | AttachClassicLinkVpcCommandInput
  | AttachInternetGatewayCommandInput
  | AttachNetworkInterfaceCommandInput
  | AttachVerifiedAccessTrustProviderCommandInput
  | AttachVolumeCommandInput
  | AttachVpnGatewayCommandInput
  | AuthorizeClientVpnIngressCommandInput
  | AuthorizeSecurityGroupEgressCommandInput
  | AuthorizeSecurityGroupIngressCommandInput
  | BundleInstanceCommandInput
  | CancelBundleTaskCommandInput
  | CancelCapacityReservationCommandInput
  | CancelCapacityReservationFleetsCommandInput
  | CancelConversionTaskCommandInput
  | CancelDeclarativePoliciesReportCommandInput
  | CancelExportTaskCommandInput
  | CancelImageLaunchPermissionCommandInput
  | CancelImportTaskCommandInput
  | CancelReservedInstancesListingCommandInput
  | CancelSpotFleetRequestsCommandInput
  | CancelSpotInstanceRequestsCommandInput
  | ConfirmProductInstanceCommandInput
  | CopyFpgaImageCommandInput
  | CopyImageCommandInput
  | CopySnapshotCommandInput
  | CopyVolumesCommandInput
  | CreateCapacityManagerDataExportCommandInput
  | CreateCapacityReservationBySplittingCommandInput
  | CreateCapacityReservationCommandInput
  | CreateCapacityReservationFleetCommandInput
  | CreateCarrierGatewayCommandInput
  | CreateClientVpnEndpointCommandInput
  | CreateClientVpnRouteCommandInput
  | CreateCoipCidrCommandInput
  | CreateCoipPoolCommandInput
  | CreateCustomerGatewayCommandInput
  | CreateDefaultSubnetCommandInput
  | CreateDefaultVpcCommandInput
  | CreateDelegateMacVolumeOwnershipTaskCommandInput
  | CreateDhcpOptionsCommandInput
  | CreateEgressOnlyInternetGatewayCommandInput
  | CreateFleetCommandInput
  | CreateFlowLogsCommandInput
  | CreateFpgaImageCommandInput
  | CreateImageCommandInput
  | CreateImageUsageReportCommandInput
  | CreateInstanceConnectEndpointCommandInput
  | CreateInstanceEventWindowCommandInput
  | CreateInstanceExportTaskCommandInput
  | CreateInternetGatewayCommandInput
  | CreateInterruptibleCapacityReservationAllocationCommandInput
  | CreateIpamCommandInput
  | CreateIpamExternalResourceVerificationTokenCommandInput
  | CreateIpamPolicyCommandInput
  | CreateIpamPoolCommandInput
  | CreateIpamPrefixListResolverCommandInput
  | CreateIpamPrefixListResolverTargetCommandInput
  | CreateIpamResourceDiscoveryCommandInput
  | CreateIpamScopeCommandInput
  | CreateKeyPairCommandInput
  | CreateLaunchTemplateCommandInput
  | CreateLaunchTemplateVersionCommandInput
  | CreateLocalGatewayRouteCommandInput
  | CreateLocalGatewayRouteTableCommandInput
  | CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput
  | CreateLocalGatewayRouteTableVpcAssociationCommandInput
  | CreateLocalGatewayVirtualInterfaceCommandInput
  | CreateLocalGatewayVirtualInterfaceGroupCommandInput
  | CreateMacSystemIntegrityProtectionModificationTaskCommandInput
  | CreateManagedPrefixListCommandInput
  | CreateNatGatewayCommandInput
  | CreateNetworkAclCommandInput
  | CreateNetworkAclEntryCommandInput
  | CreateNetworkInsightsAccessScopeCommandInput
  | CreateNetworkInsightsPathCommandInput
  | CreateNetworkInterfaceCommandInput
  | CreateNetworkInterfacePermissionCommandInput
  | CreatePlacementGroupCommandInput
  | CreatePublicIpv4PoolCommandInput
  | CreateReplaceRootVolumeTaskCommandInput
  | CreateReservedInstancesListingCommandInput
  | CreateRestoreImageTaskCommandInput
  | CreateRouteCommandInput
  | CreateRouteServerCommandInput
  | CreateRouteServerEndpointCommandInput
  | CreateRouteServerPeerCommandInput
  | CreateRouteTableCommandInput
  | CreateSecondaryNetworkCommandInput
  | CreateSecondarySubnetCommandInput
  | CreateSecurityGroupCommandInput
  | CreateSnapshotCommandInput
  | CreateSnapshotsCommandInput
  | CreateSpotDatafeedSubscriptionCommandInput
  | CreateStoreImageTaskCommandInput
  | CreateSubnetCidrReservationCommandInput
  | CreateSubnetCommandInput
  | CreateTagsCommandInput
  | CreateTrafficMirrorFilterCommandInput
  | CreateTrafficMirrorFilterRuleCommandInput
  | CreateTrafficMirrorSessionCommandInput
  | CreateTrafficMirrorTargetCommandInput
  | CreateTransitGatewayCommandInput
  | CreateTransitGatewayConnectCommandInput
  | CreateTransitGatewayConnectPeerCommandInput
  | CreateTransitGatewayMeteringPolicyCommandInput
  | CreateTransitGatewayMeteringPolicyEntryCommandInput
  | CreateTransitGatewayMulticastDomainCommandInput
  | CreateTransitGatewayPeeringAttachmentCommandInput
  | CreateTransitGatewayPolicyTableCommandInput
  | CreateTransitGatewayPrefixListReferenceCommandInput
  | CreateTransitGatewayRouteCommandInput
  | CreateTransitGatewayRouteTableAnnouncementCommandInput
  | CreateTransitGatewayRouteTableCommandInput
  | CreateTransitGatewayVpcAttachmentCommandInput
  | CreateVerifiedAccessEndpointCommandInput
  | CreateVerifiedAccessGroupCommandInput
  | CreateVerifiedAccessInstanceCommandInput
  | CreateVerifiedAccessTrustProviderCommandInput
  | CreateVolumeCommandInput
  | CreateVpcBlockPublicAccessExclusionCommandInput
  | CreateVpcCommandInput
  | CreateVpcEncryptionControlCommandInput
  | CreateVpcEndpointCommandInput
  | CreateVpcEndpointConnectionNotificationCommandInput
  | CreateVpcEndpointServiceConfigurationCommandInput
  | CreateVpcPeeringConnectionCommandInput
  | CreateVpnConcentratorCommandInput
  | CreateVpnConnectionCommandInput
  | CreateVpnConnectionRouteCommandInput
  | CreateVpnGatewayCommandInput
  | DeleteCapacityManagerDataExportCommandInput
  | DeleteCarrierGatewayCommandInput
  | DeleteClientVpnEndpointCommandInput
  | DeleteClientVpnRouteCommandInput
  | DeleteCoipCidrCommandInput
  | DeleteCoipPoolCommandInput
  | DeleteCustomerGatewayCommandInput
  | DeleteDhcpOptionsCommandInput
  | DeleteEgressOnlyInternetGatewayCommandInput
  | DeleteFleetsCommandInput
  | DeleteFlowLogsCommandInput
  | DeleteFpgaImageCommandInput
  | DeleteImageUsageReportCommandInput
  | DeleteInstanceConnectEndpointCommandInput
  | DeleteInstanceEventWindowCommandInput
  | DeleteInternetGatewayCommandInput
  | DeleteIpamCommandInput
  | DeleteIpamExternalResourceVerificationTokenCommandInput
  | DeleteIpamPolicyCommandInput
  | DeleteIpamPoolCommandInput
  | DeleteIpamPrefixListResolverCommandInput
  | DeleteIpamPrefixListResolverTargetCommandInput
  | DeleteIpamResourceDiscoveryCommandInput
  | DeleteIpamScopeCommandInput
  | DeleteKeyPairCommandInput
  | DeleteLaunchTemplateCommandInput
  | DeleteLaunchTemplateVersionsCommandInput
  | DeleteLocalGatewayRouteCommandInput
  | DeleteLocalGatewayRouteTableCommandInput
  | DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput
  | DeleteLocalGatewayRouteTableVpcAssociationCommandInput
  | DeleteLocalGatewayVirtualInterfaceCommandInput
  | DeleteLocalGatewayVirtualInterfaceGroupCommandInput
  | DeleteManagedPrefixListCommandInput
  | DeleteNatGatewayCommandInput
  | DeleteNetworkAclCommandInput
  | DeleteNetworkAclEntryCommandInput
  | DeleteNetworkInsightsAccessScopeAnalysisCommandInput
  | DeleteNetworkInsightsAccessScopeCommandInput
  | DeleteNetworkInsightsAnalysisCommandInput
  | DeleteNetworkInsightsPathCommandInput
  | DeleteNetworkInterfaceCommandInput
  | DeleteNetworkInterfacePermissionCommandInput
  | DeletePlacementGroupCommandInput
  | DeletePublicIpv4PoolCommandInput
  | DeleteQueuedReservedInstancesCommandInput
  | DeleteRouteCommandInput
  | DeleteRouteServerCommandInput
  | DeleteRouteServerEndpointCommandInput
  | DeleteRouteServerPeerCommandInput
  | DeleteRouteTableCommandInput
  | DeleteSecondaryNetworkCommandInput
  | DeleteSecondarySubnetCommandInput
  | DeleteSecurityGroupCommandInput
  | DeleteSnapshotCommandInput
  | DeleteSpotDatafeedSubscriptionCommandInput
  | DeleteSubnetCidrReservationCommandInput
  | DeleteSubnetCommandInput
  | DeleteTagsCommandInput
  | DeleteTrafficMirrorFilterCommandInput
  | DeleteTrafficMirrorFilterRuleCommandInput
  | DeleteTrafficMirrorSessionCommandInput
  | DeleteTrafficMirrorTargetCommandInput
  | DeleteTransitGatewayCommandInput
  | DeleteTransitGatewayConnectCommandInput
  | DeleteTransitGatewayConnectPeerCommandInput
  | DeleteTransitGatewayMeteringPolicyCommandInput
  | DeleteTransitGatewayMeteringPolicyEntryCommandInput
  | DeleteTransitGatewayMulticastDomainCommandInput
  | DeleteTransitGatewayPeeringAttachmentCommandInput
  | DeleteTransitGatewayPolicyTableCommandInput
  | DeleteTransitGatewayPrefixListReferenceCommandInput
  | DeleteTransitGatewayRouteCommandInput
  | DeleteTransitGatewayRouteTableAnnouncementCommandInput
  | DeleteTransitGatewayRouteTableCommandInput
  | DeleteTransitGatewayVpcAttachmentCommandInput
  | DeleteVerifiedAccessEndpointCommandInput
  | DeleteVerifiedAccessGroupCommandInput
  | DeleteVerifiedAccessInstanceCommandInput
  | DeleteVerifiedAccessTrustProviderCommandInput
  | DeleteVolumeCommandInput
  | DeleteVpcBlockPublicAccessExclusionCommandInput
  | DeleteVpcCommandInput
  | DeleteVpcEncryptionControlCommandInput
  | DeleteVpcEndpointConnectionNotificationsCommandInput
  | DeleteVpcEndpointServiceConfigurationsCommandInput
  | DeleteVpcEndpointsCommandInput
  | DeleteVpcPeeringConnectionCommandInput
  | DeleteVpnConcentratorCommandInput
  | DeleteVpnConnectionCommandInput
  | DeleteVpnConnectionRouteCommandInput
  | DeleteVpnGatewayCommandInput
  | DeprovisionByoipCidrCommandInput
  | DeprovisionIpamByoasnCommandInput
  | DeprovisionIpamPoolCidrCommandInput
  | DeprovisionPublicIpv4PoolCidrCommandInput
  | DeregisterImageCommandInput
  | DeregisterInstanceEventNotificationAttributesCommandInput
  | DeregisterTransitGatewayMulticastGroupMembersCommandInput
  | DeregisterTransitGatewayMulticastGroupSourcesCommandInput
  | DescribeAccountAttributesCommandInput
  | DescribeAddressTransfersCommandInput
  | DescribeAddressesAttributeCommandInput
  | DescribeAddressesCommandInput
  | DescribeAggregateIdFormatCommandInput
  | DescribeAvailabilityZonesCommandInput
  | DescribeAwsNetworkPerformanceMetricSubscriptionsCommandInput
  | DescribeBundleTasksCommandInput
  | DescribeByoipCidrsCommandInput
  | DescribeCapacityBlockExtensionHistoryCommandInput
  | DescribeCapacityBlockExtensionOfferingsCommandInput
  | DescribeCapacityBlockOfferingsCommandInput
  | DescribeCapacityBlockStatusCommandInput
  | DescribeCapacityBlocksCommandInput
  | DescribeCapacityManagerDataExportsCommandInput
  | DescribeCapacityReservationBillingRequestsCommandInput
  | DescribeCapacityReservationFleetsCommandInput
  | DescribeCapacityReservationTopologyCommandInput
  | DescribeCapacityReservationsCommandInput
  | DescribeCarrierGatewaysCommandInput
  | DescribeClassicLinkInstancesCommandInput
  | DescribeClientVpnAuthorizationRulesCommandInput
  | DescribeClientVpnConnectionsCommandInput
  | DescribeClientVpnEndpointsCommandInput
  | DescribeClientVpnRoutesCommandInput
  | DescribeClientVpnTargetNetworksCommandInput
  | DescribeCoipPoolsCommandInput
  | DescribeConversionTasksCommandInput
  | DescribeCustomerGatewaysCommandInput
  | DescribeDeclarativePoliciesReportsCommandInput
  | DescribeDhcpOptionsCommandInput
  | DescribeEgressOnlyInternetGatewaysCommandInput
  | DescribeElasticGpusCommandInput
  | DescribeExportImageTasksCommandInput
  | DescribeExportTasksCommandInput
  | DescribeFastLaunchImagesCommandInput
  | DescribeFastSnapshotRestoresCommandInput
  | DescribeFleetHistoryCommandInput
  | DescribeFleetInstancesCommandInput
  | DescribeFleetsCommandInput
  | DescribeFlowLogsCommandInput
  | DescribeFpgaImageAttributeCommandInput
  | DescribeFpgaImagesCommandInput
  | DescribeHostReservationOfferingsCommandInput
  | DescribeHostReservationsCommandInput
  | DescribeHostsCommandInput
  | DescribeIamInstanceProfileAssociationsCommandInput
  | DescribeIdFormatCommandInput
  | DescribeIdentityIdFormatCommandInput
  | DescribeImageAttributeCommandInput
  | DescribeImageReferencesCommandInput
  | DescribeImageUsageReportEntriesCommandInput
  | DescribeImageUsageReportsCommandInput
  | DescribeImagesCommandInput
  | DescribeImportImageTasksCommandInput
  | DescribeImportSnapshotTasksCommandInput
  | DescribeInstanceAttributeCommandInput
  | DescribeInstanceConnectEndpointsCommandInput
  | DescribeInstanceCreditSpecificationsCommandInput
  | DescribeInstanceEventNotificationAttributesCommandInput
  | DescribeInstanceEventWindowsCommandInput
  | DescribeInstanceImageMetadataCommandInput
  | DescribeInstanceSqlHaHistoryStatesCommandInput
  | DescribeInstanceSqlHaStatesCommandInput
  | DescribeInstanceStatusCommandInput
  | DescribeInstanceTopologyCommandInput
  | DescribeInstanceTypeOfferingsCommandInput
  | DescribeInstanceTypesCommandInput
  | DescribeInstancesCommandInput
  | DescribeInternetGatewaysCommandInput
  | DescribeIpamByoasnCommandInput
  | DescribeIpamExternalResourceVerificationTokensCommandInput
  | DescribeIpamPoliciesCommandInput
  | DescribeIpamPoolsCommandInput
  | DescribeIpamPrefixListResolverTargetsCommandInput
  | DescribeIpamPrefixListResolversCommandInput
  | DescribeIpamResourceDiscoveriesCommandInput
  | DescribeIpamResourceDiscoveryAssociationsCommandInput
  | DescribeIpamScopesCommandInput
  | DescribeIpamsCommandInput
  | DescribeIpv6PoolsCommandInput
  | DescribeKeyPairsCommandInput
  | DescribeLaunchTemplateVersionsCommandInput
  | DescribeLaunchTemplatesCommandInput
  | DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput
  | DescribeLocalGatewayRouteTableVpcAssociationsCommandInput
  | DescribeLocalGatewayRouteTablesCommandInput
  | DescribeLocalGatewayVirtualInterfaceGroupsCommandInput
  | DescribeLocalGatewayVirtualInterfacesCommandInput
  | DescribeLocalGatewaysCommandInput
  | DescribeLockedSnapshotsCommandInput
  | DescribeMacHostsCommandInput
  | DescribeMacModificationTasksCommandInput
  | DescribeManagedPrefixListsCommandInput
  | DescribeMovingAddressesCommandInput
  | DescribeNatGatewaysCommandInput
  | DescribeNetworkAclsCommandInput
  | DescribeNetworkInsightsAccessScopeAnalysesCommandInput
  | DescribeNetworkInsightsAccessScopesCommandInput
  | DescribeNetworkInsightsAnalysesCommandInput
  | DescribeNetworkInsightsPathsCommandInput
  | DescribeNetworkInterfaceAttributeCommandInput
  | DescribeNetworkInterfacePermissionsCommandInput
  | DescribeNetworkInterfacesCommandInput
  | DescribeOutpostLagsCommandInput
  | DescribePlacementGroupsCommandInput
  | DescribePrefixListsCommandInput
  | DescribePrincipalIdFormatCommandInput
  | DescribePublicIpv4PoolsCommandInput
  | DescribeRegionsCommandInput
  | DescribeReplaceRootVolumeTasksCommandInput
  | DescribeReservedInstancesCommandInput
  | DescribeReservedInstancesListingsCommandInput
  | DescribeReservedInstancesModificationsCommandInput
  | DescribeReservedInstancesOfferingsCommandInput
  | DescribeRouteServerEndpointsCommandInput
  | DescribeRouteServerPeersCommandInput
  | DescribeRouteServersCommandInput
  | DescribeRouteTablesCommandInput
  | DescribeScheduledInstanceAvailabilityCommandInput
  | DescribeScheduledInstancesCommandInput
  | DescribeSecondaryInterfacesCommandInput
  | DescribeSecondaryNetworksCommandInput
  | DescribeSecondarySubnetsCommandInput
  | DescribeSecurityGroupReferencesCommandInput
  | DescribeSecurityGroupRulesCommandInput
  | DescribeSecurityGroupVpcAssociationsCommandInput
  | DescribeSecurityGroupsCommandInput
  | DescribeServiceLinkVirtualInterfacesCommandInput
  | DescribeSnapshotAttributeCommandInput
  | DescribeSnapshotTierStatusCommandInput
  | DescribeSnapshotsCommandInput
  | DescribeSpotDatafeedSubscriptionCommandInput
  | DescribeSpotFleetInstancesCommandInput
  | DescribeSpotFleetRequestHistoryCommandInput
  | DescribeSpotFleetRequestsCommandInput
  | DescribeSpotInstanceRequestsCommandInput
  | DescribeSpotPriceHistoryCommandInput
  | DescribeStaleSecurityGroupsCommandInput
  | DescribeStoreImageTasksCommandInput
  | DescribeSubnetsCommandInput
  | DescribeTagsCommandInput
  | DescribeTrafficMirrorFilterRulesCommandInput
  | DescribeTrafficMirrorFiltersCommandInput
  | DescribeTrafficMirrorSessionsCommandInput
  | DescribeTrafficMirrorTargetsCommandInput
  | DescribeTransitGatewayAttachmentsCommandInput
  | DescribeTransitGatewayConnectPeersCommandInput
  | DescribeTransitGatewayConnectsCommandInput
  | DescribeTransitGatewayMeteringPoliciesCommandInput
  | DescribeTransitGatewayMulticastDomainsCommandInput
  | DescribeTransitGatewayPeeringAttachmentsCommandInput
  | DescribeTransitGatewayPolicyTablesCommandInput
  | DescribeTransitGatewayRouteTableAnnouncementsCommandInput
  | DescribeTransitGatewayRouteTablesCommandInput
  | DescribeTransitGatewayVpcAttachmentsCommandInput
  | DescribeTransitGatewaysCommandInput
  | DescribeTrunkInterfaceAssociationsCommandInput
  | DescribeVerifiedAccessEndpointsCommandInput
  | DescribeVerifiedAccessGroupsCommandInput
  | DescribeVerifiedAccessInstanceLoggingConfigurationsCommandInput
  | DescribeVerifiedAccessInstancesCommandInput
  | DescribeVerifiedAccessTrustProvidersCommandInput
  | DescribeVolumeAttributeCommandInput
  | DescribeVolumeStatusCommandInput
  | DescribeVolumesCommandInput
  | DescribeVolumesModificationsCommandInput
  | DescribeVpcAttributeCommandInput
  | DescribeVpcBlockPublicAccessExclusionsCommandInput
  | DescribeVpcBlockPublicAccessOptionsCommandInput
  | DescribeVpcClassicLinkCommandInput
  | DescribeVpcClassicLinkDnsSupportCommandInput
  | DescribeVpcEncryptionControlsCommandInput
  | DescribeVpcEndpointAssociationsCommandInput
  | DescribeVpcEndpointConnectionNotificationsCommandInput
  | DescribeVpcEndpointConnectionsCommandInput
  | DescribeVpcEndpointServiceConfigurationsCommandInput
  | DescribeVpcEndpointServicePermissionsCommandInput
  | DescribeVpcEndpointServicesCommandInput
  | DescribeVpcEndpointsCommandInput
  | DescribeVpcPeeringConnectionsCommandInput
  | DescribeVpcsCommandInput
  | DescribeVpnConcentratorsCommandInput
  | DescribeVpnConnectionsCommandInput
  | DescribeVpnGatewaysCommandInput
  | DetachClassicLinkVpcCommandInput
  | DetachInternetGatewayCommandInput
  | DetachNetworkInterfaceCommandInput
  | DetachVerifiedAccessTrustProviderCommandInput
  | DetachVolumeCommandInput
  | DetachVpnGatewayCommandInput
  | DisableAddressTransferCommandInput
  | DisableAllowedImagesSettingsCommandInput
  | DisableAwsNetworkPerformanceMetricSubscriptionCommandInput
  | DisableCapacityManagerCommandInput
  | DisableEbsEncryptionByDefaultCommandInput
  | DisableFastLaunchCommandInput
  | DisableFastSnapshotRestoresCommandInput
  | DisableImageBlockPublicAccessCommandInput
  | DisableImageCommandInput
  | DisableImageDeprecationCommandInput
  | DisableImageDeregistrationProtectionCommandInput
  | DisableInstanceSqlHaStandbyDetectionsCommandInput
  | DisableIpamOrganizationAdminAccountCommandInput
  | DisableIpamPolicyCommandInput
  | DisableRouteServerPropagationCommandInput
  | DisableSerialConsoleAccessCommandInput
  | DisableSnapshotBlockPublicAccessCommandInput
  | DisableTransitGatewayRouteTablePropagationCommandInput
  | DisableVgwRoutePropagationCommandInput
  | DisableVpcClassicLinkCommandInput
  | DisableVpcClassicLinkDnsSupportCommandInput
  | DisassociateAddressCommandInput
  | DisassociateCapacityReservationBillingOwnerCommandInput
  | DisassociateClientVpnTargetNetworkCommandInput
  | DisassociateEnclaveCertificateIamRoleCommandInput
  | DisassociateIamInstanceProfileCommandInput
  | DisassociateInstanceEventWindowCommandInput
  | DisassociateIpamByoasnCommandInput
  | DisassociateIpamResourceDiscoveryCommandInput
  | DisassociateNatGatewayAddressCommandInput
  | DisassociateRouteServerCommandInput
  | DisassociateRouteTableCommandInput
  | DisassociateSecurityGroupVpcCommandInput
  | DisassociateSubnetCidrBlockCommandInput
  | DisassociateTransitGatewayMulticastDomainCommandInput
  | DisassociateTransitGatewayPolicyTableCommandInput
  | DisassociateTransitGatewayRouteTableCommandInput
  | DisassociateTrunkInterfaceCommandInput
  | DisassociateVpcCidrBlockCommandInput
  | EnableAddressTransferCommandInput
  | EnableAllowedImagesSettingsCommandInput
  | EnableAwsNetworkPerformanceMetricSubscriptionCommandInput
  | EnableCapacityManagerCommandInput
  | EnableEbsEncryptionByDefaultCommandInput
  | EnableFastLaunchCommandInput
  | EnableFastSnapshotRestoresCommandInput
  | EnableImageBlockPublicAccessCommandInput
  | EnableImageCommandInput
  | EnableImageDeprecationCommandInput
  | EnableImageDeregistrationProtectionCommandInput
  | EnableInstanceSqlHaStandbyDetectionsCommandInput
  | EnableIpamOrganizationAdminAccountCommandInput
  | EnableIpamPolicyCommandInput
  | EnableReachabilityAnalyzerOrganizationSharingCommandInput
  | EnableRouteServerPropagationCommandInput
  | EnableSerialConsoleAccessCommandInput
  | EnableSnapshotBlockPublicAccessCommandInput
  | EnableTransitGatewayRouteTablePropagationCommandInput
  | EnableVgwRoutePropagationCommandInput
  | EnableVolumeIOCommandInput
  | EnableVpcClassicLinkCommandInput
  | EnableVpcClassicLinkDnsSupportCommandInput
  | ExportClientVpnClientCertificateRevocationListCommandInput
  | ExportClientVpnClientConfigurationCommandInput
  | ExportImageCommandInput
  | ExportTransitGatewayRoutesCommandInput
  | ExportVerifiedAccessInstanceClientConfigurationCommandInput
  | GetActiveVpnTunnelStatusCommandInput
  | GetAllowedImagesSettingsCommandInput
  | GetAssociatedEnclaveCertificateIamRolesCommandInput
  | GetAssociatedIpv6PoolCidrsCommandInput
  | GetAwsNetworkPerformanceDataCommandInput
  | GetCapacityManagerAttributesCommandInput
  | GetCapacityManagerMetricDataCommandInput
  | GetCapacityManagerMetricDimensionsCommandInput
  | GetCapacityReservationUsageCommandInput
  | GetCoipPoolUsageCommandInput
  | GetConsoleOutputCommandInput
  | GetConsoleScreenshotCommandInput
  | GetDeclarativePoliciesReportSummaryCommandInput
  | GetDefaultCreditSpecificationCommandInput
  | GetEbsDefaultKmsKeyIdCommandInput
  | GetEbsEncryptionByDefaultCommandInput
  | GetEnabledIpamPolicyCommandInput
  | GetFlowLogsIntegrationTemplateCommandInput
  | GetGroupsForCapacityReservationCommandInput
  | GetHostReservationPurchasePreviewCommandInput
  | GetImageAncestryCommandInput
  | GetImageBlockPublicAccessStateCommandInput
  | GetInstanceMetadataDefaultsCommandInput
  | GetInstanceTpmEkPubCommandInput
  | GetInstanceTypesFromInstanceRequirementsCommandInput
  | GetInstanceUefiDataCommandInput
  | GetIpamAddressHistoryCommandInput
  | GetIpamDiscoveredAccountsCommandInput
  | GetIpamDiscoveredPublicAddressesCommandInput
  | GetIpamDiscoveredResourceCidrsCommandInput
  | GetIpamPolicyAllocationRulesCommandInput
  | GetIpamPolicyOrganizationTargetsCommandInput
  | GetIpamPoolAllocationsCommandInput
  | GetIpamPoolCidrsCommandInput
  | GetIpamPrefixListResolverRulesCommandInput
  | GetIpamPrefixListResolverVersionEntriesCommandInput
  | GetIpamPrefixListResolverVersionsCommandInput
  | GetIpamResourceCidrsCommandInput
  | GetLaunchTemplateDataCommandInput
  | GetManagedPrefixListAssociationsCommandInput
  | GetManagedPrefixListEntriesCommandInput
  | GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput
  | GetNetworkInsightsAccessScopeContentCommandInput
  | GetPasswordDataCommandInput
  | GetReservedInstancesExchangeQuoteCommandInput
  | GetRouteServerAssociationsCommandInput
  | GetRouteServerPropagationsCommandInput
  | GetRouteServerRoutingDatabaseCommandInput
  | GetSecurityGroupsForVpcCommandInput
  | GetSerialConsoleAccessStatusCommandInput
  | GetSnapshotBlockPublicAccessStateCommandInput
  | GetSpotPlacementScoresCommandInput
  | GetSubnetCidrReservationsCommandInput
  | GetTransitGatewayAttachmentPropagationsCommandInput
  | GetTransitGatewayMeteringPolicyEntriesCommandInput
  | GetTransitGatewayMulticastDomainAssociationsCommandInput
  | GetTransitGatewayPolicyTableAssociationsCommandInput
  | GetTransitGatewayPolicyTableEntriesCommandInput
  | GetTransitGatewayPrefixListReferencesCommandInput
  | GetTransitGatewayRouteTableAssociationsCommandInput
  | GetTransitGatewayRouteTablePropagationsCommandInput
  | GetVerifiedAccessEndpointPolicyCommandInput
  | GetVerifiedAccessEndpointTargetsCommandInput
  | GetVerifiedAccessGroupPolicyCommandInput
  | GetVpcResourcesBlockingEncryptionEnforcementCommandInput
  | GetVpnConnectionDeviceSampleConfigurationCommandInput
  | GetVpnConnectionDeviceTypesCommandInput
  | GetVpnTunnelReplacementStatusCommandInput
  | ImportClientVpnClientCertificateRevocationListCommandInput
  | ImportImageCommandInput
  | ImportInstanceCommandInput
  | ImportKeyPairCommandInput
  | ImportSnapshotCommandInput
  | ImportVolumeCommandInput
  | ListImagesInRecycleBinCommandInput
  | ListSnapshotsInRecycleBinCommandInput
  | ListVolumesInRecycleBinCommandInput
  | LockSnapshotCommandInput
  | ModifyAddressAttributeCommandInput
  | ModifyAvailabilityZoneGroupCommandInput
  | ModifyCapacityReservationCommandInput
  | ModifyCapacityReservationFleetCommandInput
  | ModifyClientVpnEndpointCommandInput
  | ModifyDefaultCreditSpecificationCommandInput
  | ModifyEbsDefaultKmsKeyIdCommandInput
  | ModifyFleetCommandInput
  | ModifyFpgaImageAttributeCommandInput
  | ModifyHostsCommandInput
  | ModifyIdFormatCommandInput
  | ModifyIdentityIdFormatCommandInput
  | ModifyImageAttributeCommandInput
  | ModifyInstanceAttributeCommandInput
  | ModifyInstanceCapacityReservationAttributesCommandInput
  | ModifyInstanceConnectEndpointCommandInput
  | ModifyInstanceCpuOptionsCommandInput
  | ModifyInstanceCreditSpecificationCommandInput
  | ModifyInstanceEventStartTimeCommandInput
  | ModifyInstanceEventWindowCommandInput
  | ModifyInstanceMaintenanceOptionsCommandInput
  | ModifyInstanceMetadataDefaultsCommandInput
  | ModifyInstanceMetadataOptionsCommandInput
  | ModifyInstanceNetworkPerformanceOptionsCommandInput
  | ModifyInstancePlacementCommandInput
  | ModifyIpamCommandInput
  | ModifyIpamPolicyAllocationRulesCommandInput
  | ModifyIpamPoolCommandInput
  | ModifyIpamPrefixListResolverCommandInput
  | ModifyIpamPrefixListResolverTargetCommandInput
  | ModifyIpamResourceCidrCommandInput
  | ModifyIpamResourceDiscoveryCommandInput
  | ModifyIpamScopeCommandInput
  | ModifyLaunchTemplateCommandInput
  | ModifyLocalGatewayRouteCommandInput
  | ModifyManagedPrefixListCommandInput
  | ModifyNetworkInterfaceAttributeCommandInput
  | ModifyPrivateDnsNameOptionsCommandInput
  | ModifyPublicIpDnsNameOptionsCommandInput
  | ModifyReservedInstancesCommandInput
  | ModifyRouteServerCommandInput
  | ModifySecurityGroupRulesCommandInput
  | ModifySnapshotAttributeCommandInput
  | ModifySnapshotTierCommandInput
  | ModifySpotFleetRequestCommandInput
  | ModifySubnetAttributeCommandInput
  | ModifyTrafficMirrorFilterNetworkServicesCommandInput
  | ModifyTrafficMirrorFilterRuleCommandInput
  | ModifyTrafficMirrorSessionCommandInput
  | ModifyTransitGatewayCommandInput
  | ModifyTransitGatewayMeteringPolicyCommandInput
  | ModifyTransitGatewayPrefixListReferenceCommandInput
  | ModifyTransitGatewayVpcAttachmentCommandInput
  | ModifyVerifiedAccessEndpointCommandInput
  | ModifyVerifiedAccessEndpointPolicyCommandInput
  | ModifyVerifiedAccessGroupCommandInput
  | ModifyVerifiedAccessGroupPolicyCommandInput
  | ModifyVerifiedAccessInstanceCommandInput
  | ModifyVerifiedAccessInstanceLoggingConfigurationCommandInput
  | ModifyVerifiedAccessTrustProviderCommandInput
  | ModifyVolumeAttributeCommandInput
  | ModifyVolumeCommandInput
  | ModifyVpcAttributeCommandInput
  | ModifyVpcBlockPublicAccessExclusionCommandInput
  | ModifyVpcBlockPublicAccessOptionsCommandInput
  | ModifyVpcEncryptionControlCommandInput
  | ModifyVpcEndpointCommandInput
  | ModifyVpcEndpointConnectionNotificationCommandInput
  | ModifyVpcEndpointServiceConfigurationCommandInput
  | ModifyVpcEndpointServicePayerResponsibilityCommandInput
  | ModifyVpcEndpointServicePermissionsCommandInput
  | ModifyVpcPeeringConnectionOptionsCommandInput
  | ModifyVpcTenancyCommandInput
  | ModifyVpnConnectionCommandInput
  | ModifyVpnConnectionOptionsCommandInput
  | ModifyVpnTunnelCertificateCommandInput
  | ModifyVpnTunnelOptionsCommandInput
  | MonitorInstancesCommandInput
  | MoveAddressToVpcCommandInput
  | MoveByoipCidrToIpamCommandInput
  | MoveCapacityReservationInstancesCommandInput
  | ProvisionByoipCidrCommandInput
  | ProvisionIpamByoasnCommandInput
  | ProvisionIpamPoolCidrCommandInput
  | ProvisionPublicIpv4PoolCidrCommandInput
  | PurchaseCapacityBlockCommandInput
  | PurchaseCapacityBlockExtensionCommandInput
  | PurchaseHostReservationCommandInput
  | PurchaseReservedInstancesOfferingCommandInput
  | PurchaseScheduledInstancesCommandInput
  | RebootInstancesCommandInput
  | RegisterImageCommandInput
  | RegisterInstanceEventNotificationAttributesCommandInput
  | RegisterTransitGatewayMulticastGroupMembersCommandInput
  | RegisterTransitGatewayMulticastGroupSourcesCommandInput
  | RejectCapacityReservationBillingOwnershipCommandInput
  | RejectTransitGatewayMulticastDomainAssociationsCommandInput
  | RejectTransitGatewayPeeringAttachmentCommandInput
  | RejectTransitGatewayVpcAttachmentCommandInput
  | RejectVpcEndpointConnectionsCommandInput
  | RejectVpcPeeringConnectionCommandInput
  | ReleaseAddressCommandInput
  | ReleaseHostsCommandInput
  | ReleaseIpamPoolAllocationCommandInput
  | ReplaceIamInstanceProfileAssociationCommandInput
  | ReplaceImageCriteriaInAllowedImagesSettingsCommandInput
  | ReplaceNetworkAclAssociationCommandInput
  | ReplaceNetworkAclEntryCommandInput
  | ReplaceRouteCommandInput
  | ReplaceRouteTableAssociationCommandInput
  | ReplaceTransitGatewayRouteCommandInput
  | ReplaceVpnTunnelCommandInput
  | ReportInstanceStatusCommandInput
  | RequestSpotFleetCommandInput
  | RequestSpotInstancesCommandInput
  | ResetAddressAttributeCommandInput
  | ResetEbsDefaultKmsKeyIdCommandInput
  | ResetFpgaImageAttributeCommandInput
  | ResetImageAttributeCommandInput
  | ResetInstanceAttributeCommandInput
  | ResetNetworkInterfaceAttributeCommandInput
  | ResetSnapshotAttributeCommandInput
  | RestoreAddressToClassicCommandInput
  | RestoreImageFromRecycleBinCommandInput
  | RestoreManagedPrefixListVersionCommandInput
  | RestoreSnapshotFromRecycleBinCommandInput
  | RestoreSnapshotTierCommandInput
  | RestoreVolumeFromRecycleBinCommandInput
  | RevokeClientVpnIngressCommandInput
  | RevokeSecurityGroupEgressCommandInput
  | RevokeSecurityGroupIngressCommandInput
  | RunInstancesCommandInput
  | RunScheduledInstancesCommandInput
  | SearchLocalGatewayRoutesCommandInput
  | SearchTransitGatewayMulticastGroupsCommandInput
  | SearchTransitGatewayRoutesCommandInput
  | SendDiagnosticInterruptCommandInput
  | StartDeclarativePoliciesReportCommandInput
  | StartInstancesCommandInput
  | StartNetworkInsightsAccessScopeAnalysisCommandInput
  | StartNetworkInsightsAnalysisCommandInput
  | StartVpcEndpointServicePrivateDnsVerificationCommandInput
  | StopInstancesCommandInput
  | TerminateClientVpnConnectionsCommandInput
  | TerminateInstancesCommandInput
  | UnassignIpv6AddressesCommandInput
  | UnassignPrivateIpAddressesCommandInput
  | UnassignPrivateNatGatewayAddressCommandInput
  | UnlockSnapshotCommandInput
  | UnmonitorInstancesCommandInput
  | UpdateCapacityManagerOrganizationsAccessCommandInput
  | UpdateInterruptibleCapacityReservationAllocationCommandInput
  | UpdateSecurityGroupRuleDescriptionsEgressCommandInput
  | UpdateSecurityGroupRuleDescriptionsIngressCommandInput
  | WithdrawByoipCidrCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptAddressTransferCommandOutput
  | AcceptCapacityReservationBillingOwnershipCommandOutput
  | AcceptReservedInstancesExchangeQuoteCommandOutput
  | AcceptTransitGatewayMulticastDomainAssociationsCommandOutput
  | AcceptTransitGatewayPeeringAttachmentCommandOutput
  | AcceptTransitGatewayVpcAttachmentCommandOutput
  | AcceptVpcEndpointConnectionsCommandOutput
  | AcceptVpcPeeringConnectionCommandOutput
  | AdvertiseByoipCidrCommandOutput
  | AllocateAddressCommandOutput
  | AllocateHostsCommandOutput
  | AllocateIpamPoolCidrCommandOutput
  | ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput
  | AssignIpv6AddressesCommandOutput
  | AssignPrivateIpAddressesCommandOutput
  | AssignPrivateNatGatewayAddressCommandOutput
  | AssociateAddressCommandOutput
  | AssociateCapacityReservationBillingOwnerCommandOutput
  | AssociateClientVpnTargetNetworkCommandOutput
  | AssociateDhcpOptionsCommandOutput
  | AssociateEnclaveCertificateIamRoleCommandOutput
  | AssociateIamInstanceProfileCommandOutput
  | AssociateInstanceEventWindowCommandOutput
  | AssociateIpamByoasnCommandOutput
  | AssociateIpamResourceDiscoveryCommandOutput
  | AssociateNatGatewayAddressCommandOutput
  | AssociateRouteServerCommandOutput
  | AssociateRouteTableCommandOutput
  | AssociateSecurityGroupVpcCommandOutput
  | AssociateSubnetCidrBlockCommandOutput
  | AssociateTransitGatewayMulticastDomainCommandOutput
  | AssociateTransitGatewayPolicyTableCommandOutput
  | AssociateTransitGatewayRouteTableCommandOutput
  | AssociateTrunkInterfaceCommandOutput
  | AssociateVpcCidrBlockCommandOutput
  | AttachClassicLinkVpcCommandOutput
  | AttachInternetGatewayCommandOutput
  | AttachNetworkInterfaceCommandOutput
  | AttachVerifiedAccessTrustProviderCommandOutput
  | AttachVolumeCommandOutput
  | AttachVpnGatewayCommandOutput
  | AuthorizeClientVpnIngressCommandOutput
  | AuthorizeSecurityGroupEgressCommandOutput
  | AuthorizeSecurityGroupIngressCommandOutput
  | BundleInstanceCommandOutput
  | CancelBundleTaskCommandOutput
  | CancelCapacityReservationCommandOutput
  | CancelCapacityReservationFleetsCommandOutput
  | CancelConversionTaskCommandOutput
  | CancelDeclarativePoliciesReportCommandOutput
  | CancelExportTaskCommandOutput
  | CancelImageLaunchPermissionCommandOutput
  | CancelImportTaskCommandOutput
  | CancelReservedInstancesListingCommandOutput
  | CancelSpotFleetRequestsCommandOutput
  | CancelSpotInstanceRequestsCommandOutput
  | ConfirmProductInstanceCommandOutput
  | CopyFpgaImageCommandOutput
  | CopyImageCommandOutput
  | CopySnapshotCommandOutput
  | CopyVolumesCommandOutput
  | CreateCapacityManagerDataExportCommandOutput
  | CreateCapacityReservationBySplittingCommandOutput
  | CreateCapacityReservationCommandOutput
  | CreateCapacityReservationFleetCommandOutput
  | CreateCarrierGatewayCommandOutput
  | CreateClientVpnEndpointCommandOutput
  | CreateClientVpnRouteCommandOutput
  | CreateCoipCidrCommandOutput
  | CreateCoipPoolCommandOutput
  | CreateCustomerGatewayCommandOutput
  | CreateDefaultSubnetCommandOutput
  | CreateDefaultVpcCommandOutput
  | CreateDelegateMacVolumeOwnershipTaskCommandOutput
  | CreateDhcpOptionsCommandOutput
  | CreateEgressOnlyInternetGatewayCommandOutput
  | CreateFleetCommandOutput
  | CreateFlowLogsCommandOutput
  | CreateFpgaImageCommandOutput
  | CreateImageCommandOutput
  | CreateImageUsageReportCommandOutput
  | CreateInstanceConnectEndpointCommandOutput
  | CreateInstanceEventWindowCommandOutput
  | CreateInstanceExportTaskCommandOutput
  | CreateInternetGatewayCommandOutput
  | CreateInterruptibleCapacityReservationAllocationCommandOutput
  | CreateIpamCommandOutput
  | CreateIpamExternalResourceVerificationTokenCommandOutput
  | CreateIpamPolicyCommandOutput
  | CreateIpamPoolCommandOutput
  | CreateIpamPrefixListResolverCommandOutput
  | CreateIpamPrefixListResolverTargetCommandOutput
  | CreateIpamResourceDiscoveryCommandOutput
  | CreateIpamScopeCommandOutput
  | CreateKeyPairCommandOutput
  | CreateLaunchTemplateCommandOutput
  | CreateLaunchTemplateVersionCommandOutput
  | CreateLocalGatewayRouteCommandOutput
  | CreateLocalGatewayRouteTableCommandOutput
  | CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput
  | CreateLocalGatewayRouteTableVpcAssociationCommandOutput
  | CreateLocalGatewayVirtualInterfaceCommandOutput
  | CreateLocalGatewayVirtualInterfaceGroupCommandOutput
  | CreateMacSystemIntegrityProtectionModificationTaskCommandOutput
  | CreateManagedPrefixListCommandOutput
  | CreateNatGatewayCommandOutput
  | CreateNetworkAclCommandOutput
  | CreateNetworkAclEntryCommandOutput
  | CreateNetworkInsightsAccessScopeCommandOutput
  | CreateNetworkInsightsPathCommandOutput
  | CreateNetworkInterfaceCommandOutput
  | CreateNetworkInterfacePermissionCommandOutput
  | CreatePlacementGroupCommandOutput
  | CreatePublicIpv4PoolCommandOutput
  | CreateReplaceRootVolumeTaskCommandOutput
  | CreateReservedInstancesListingCommandOutput
  | CreateRestoreImageTaskCommandOutput
  | CreateRouteCommandOutput
  | CreateRouteServerCommandOutput
  | CreateRouteServerEndpointCommandOutput
  | CreateRouteServerPeerCommandOutput
  | CreateRouteTableCommandOutput
  | CreateSecondaryNetworkCommandOutput
  | CreateSecondarySubnetCommandOutput
  | CreateSecurityGroupCommandOutput
  | CreateSnapshotCommandOutput
  | CreateSnapshotsCommandOutput
  | CreateSpotDatafeedSubscriptionCommandOutput
  | CreateStoreImageTaskCommandOutput
  | CreateSubnetCidrReservationCommandOutput
  | CreateSubnetCommandOutput
  | CreateTagsCommandOutput
  | CreateTrafficMirrorFilterCommandOutput
  | CreateTrafficMirrorFilterRuleCommandOutput
  | CreateTrafficMirrorSessionCommandOutput
  | CreateTrafficMirrorTargetCommandOutput
  | CreateTransitGatewayCommandOutput
  | CreateTransitGatewayConnectCommandOutput
  | CreateTransitGatewayConnectPeerCommandOutput
  | CreateTransitGatewayMeteringPolicyCommandOutput
  | CreateTransitGatewayMeteringPolicyEntryCommandOutput
  | CreateTransitGatewayMulticastDomainCommandOutput
  | CreateTransitGatewayPeeringAttachmentCommandOutput
  | CreateTransitGatewayPolicyTableCommandOutput
  | CreateTransitGatewayPrefixListReferenceCommandOutput
  | CreateTransitGatewayRouteCommandOutput
  | CreateTransitGatewayRouteTableAnnouncementCommandOutput
  | CreateTransitGatewayRouteTableCommandOutput
  | CreateTransitGatewayVpcAttachmentCommandOutput
  | CreateVerifiedAccessEndpointCommandOutput
  | CreateVerifiedAccessGroupCommandOutput
  | CreateVerifiedAccessInstanceCommandOutput
  | CreateVerifiedAccessTrustProviderCommandOutput
  | CreateVolumeCommandOutput
  | CreateVpcBlockPublicAccessExclusionCommandOutput
  | CreateVpcCommandOutput
  | CreateVpcEncryptionControlCommandOutput
  | CreateVpcEndpointCommandOutput
  | CreateVpcEndpointConnectionNotificationCommandOutput
  | CreateVpcEndpointServiceConfigurationCommandOutput
  | CreateVpcPeeringConnectionCommandOutput
  | CreateVpnConcentratorCommandOutput
  | CreateVpnConnectionCommandOutput
  | CreateVpnConnectionRouteCommandOutput
  | CreateVpnGatewayCommandOutput
  | DeleteCapacityManagerDataExportCommandOutput
  | DeleteCarrierGatewayCommandOutput
  | DeleteClientVpnEndpointCommandOutput
  | DeleteClientVpnRouteCommandOutput
  | DeleteCoipCidrCommandOutput
  | DeleteCoipPoolCommandOutput
  | DeleteCustomerGatewayCommandOutput
  | DeleteDhcpOptionsCommandOutput
  | DeleteEgressOnlyInternetGatewayCommandOutput
  | DeleteFleetsCommandOutput
  | DeleteFlowLogsCommandOutput
  | DeleteFpgaImageCommandOutput
  | DeleteImageUsageReportCommandOutput
  | DeleteInstanceConnectEndpointCommandOutput
  | DeleteInstanceEventWindowCommandOutput
  | DeleteInternetGatewayCommandOutput
  | DeleteIpamCommandOutput
  | DeleteIpamExternalResourceVerificationTokenCommandOutput
  | DeleteIpamPolicyCommandOutput
  | DeleteIpamPoolCommandOutput
  | DeleteIpamPrefixListResolverCommandOutput
  | DeleteIpamPrefixListResolverTargetCommandOutput
  | DeleteIpamResourceDiscoveryCommandOutput
  | DeleteIpamScopeCommandOutput
  | DeleteKeyPairCommandOutput
  | DeleteLaunchTemplateCommandOutput
  | DeleteLaunchTemplateVersionsCommandOutput
  | DeleteLocalGatewayRouteCommandOutput
  | DeleteLocalGatewayRouteTableCommandOutput
  | DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput
  | DeleteLocalGatewayRouteTableVpcAssociationCommandOutput
  | DeleteLocalGatewayVirtualInterfaceCommandOutput
  | DeleteLocalGatewayVirtualInterfaceGroupCommandOutput
  | DeleteManagedPrefixListCommandOutput
  | DeleteNatGatewayCommandOutput
  | DeleteNetworkAclCommandOutput
  | DeleteNetworkAclEntryCommandOutput
  | DeleteNetworkInsightsAccessScopeAnalysisCommandOutput
  | DeleteNetworkInsightsAccessScopeCommandOutput
  | DeleteNetworkInsightsAnalysisCommandOutput
  | DeleteNetworkInsightsPathCommandOutput
  | DeleteNetworkInterfaceCommandOutput
  | DeleteNetworkInterfacePermissionCommandOutput
  | DeletePlacementGroupCommandOutput
  | DeletePublicIpv4PoolCommandOutput
  | DeleteQueuedReservedInstancesCommandOutput
  | DeleteRouteCommandOutput
  | DeleteRouteServerCommandOutput
  | DeleteRouteServerEndpointCommandOutput
  | DeleteRouteServerPeerCommandOutput
  | DeleteRouteTableCommandOutput
  | DeleteSecondaryNetworkCommandOutput
  | DeleteSecondarySubnetCommandOutput
  | DeleteSecurityGroupCommandOutput
  | DeleteSnapshotCommandOutput
  | DeleteSpotDatafeedSubscriptionCommandOutput
  | DeleteSubnetCidrReservationCommandOutput
  | DeleteSubnetCommandOutput
  | DeleteTagsCommandOutput
  | DeleteTrafficMirrorFilterCommandOutput
  | DeleteTrafficMirrorFilterRuleCommandOutput
  | DeleteTrafficMirrorSessionCommandOutput
  | DeleteTrafficMirrorTargetCommandOutput
  | DeleteTransitGatewayCommandOutput
  | DeleteTransitGatewayConnectCommandOutput
  | DeleteTransitGatewayConnectPeerCommandOutput
  | DeleteTransitGatewayMeteringPolicyCommandOutput
  | DeleteTransitGatewayMeteringPolicyEntryCommandOutput
  | DeleteTransitGatewayMulticastDomainCommandOutput
  | DeleteTransitGatewayPeeringAttachmentCommandOutput
  | DeleteTransitGatewayPolicyTableCommandOutput
  | DeleteTransitGatewayPrefixListReferenceCommandOutput
  | DeleteTransitGatewayRouteCommandOutput
  | DeleteTransitGatewayRouteTableAnnouncementCommandOutput
  | DeleteTransitGatewayRouteTableCommandOutput
  | DeleteTransitGatewayVpcAttachmentCommandOutput
  | DeleteVerifiedAccessEndpointCommandOutput
  | DeleteVerifiedAccessGroupCommandOutput
  | DeleteVerifiedAccessInstanceCommandOutput
  | DeleteVerifiedAccessTrustProviderCommandOutput
  | DeleteVolumeCommandOutput
  | DeleteVpcBlockPublicAccessExclusionCommandOutput
  | DeleteVpcCommandOutput
  | DeleteVpcEncryptionControlCommandOutput
  | DeleteVpcEndpointConnectionNotificationsCommandOutput
  | DeleteVpcEndpointServiceConfigurationsCommandOutput
  | DeleteVpcEndpointsCommandOutput
  | DeleteVpcPeeringConnectionCommandOutput
  | DeleteVpnConcentratorCommandOutput
  | DeleteVpnConnectionCommandOutput
  | DeleteVpnConnectionRouteCommandOutput
  | DeleteVpnGatewayCommandOutput
  | DeprovisionByoipCidrCommandOutput
  | DeprovisionIpamByoasnCommandOutput
  | DeprovisionIpamPoolCidrCommandOutput
  | DeprovisionPublicIpv4PoolCidrCommandOutput
  | DeregisterImageCommandOutput
  | DeregisterInstanceEventNotificationAttributesCommandOutput
  | DeregisterTransitGatewayMulticastGroupMembersCommandOutput
  | DeregisterTransitGatewayMulticastGroupSourcesCommandOutput
  | DescribeAccountAttributesCommandOutput
  | DescribeAddressTransfersCommandOutput
  | DescribeAddressesAttributeCommandOutput
  | DescribeAddressesCommandOutput
  | DescribeAggregateIdFormatCommandOutput
  | DescribeAvailabilityZonesCommandOutput
  | DescribeAwsNetworkPerformanceMetricSubscriptionsCommandOutput
  | DescribeBundleTasksCommandOutput
  | DescribeByoipCidrsCommandOutput
  | DescribeCapacityBlockExtensionHistoryCommandOutput
  | DescribeCapacityBlockExtensionOfferingsCommandOutput
  | DescribeCapacityBlockOfferingsCommandOutput
  | DescribeCapacityBlockStatusCommandOutput
  | DescribeCapacityBlocksCommandOutput
  | DescribeCapacityManagerDataExportsCommandOutput
  | DescribeCapacityReservationBillingRequestsCommandOutput
  | DescribeCapacityReservationFleetsCommandOutput
  | DescribeCapacityReservationTopologyCommandOutput
  | DescribeCapacityReservationsCommandOutput
  | DescribeCarrierGatewaysCommandOutput
  | DescribeClassicLinkInstancesCommandOutput
  | DescribeClientVpnAuthorizationRulesCommandOutput
  | DescribeClientVpnConnectionsCommandOutput
  | DescribeClientVpnEndpointsCommandOutput
  | DescribeClientVpnRoutesCommandOutput
  | DescribeClientVpnTargetNetworksCommandOutput
  | DescribeCoipPoolsCommandOutput
  | DescribeConversionTasksCommandOutput
  | DescribeCustomerGatewaysCommandOutput
  | DescribeDeclarativePoliciesReportsCommandOutput
  | DescribeDhcpOptionsCommandOutput
  | DescribeEgressOnlyInternetGatewaysCommandOutput
  | DescribeElasticGpusCommandOutput
  | DescribeExportImageTasksCommandOutput
  | DescribeExportTasksCommandOutput
  | DescribeFastLaunchImagesCommandOutput
  | DescribeFastSnapshotRestoresCommandOutput
  | DescribeFleetHistoryCommandOutput
  | DescribeFleetInstancesCommandOutput
  | DescribeFleetsCommandOutput
  | DescribeFlowLogsCommandOutput
  | DescribeFpgaImageAttributeCommandOutput
  | DescribeFpgaImagesCommandOutput
  | DescribeHostReservationOfferingsCommandOutput
  | DescribeHostReservationsCommandOutput
  | DescribeHostsCommandOutput
  | DescribeIamInstanceProfileAssociationsCommandOutput
  | DescribeIdFormatCommandOutput
  | DescribeIdentityIdFormatCommandOutput
  | DescribeImageAttributeCommandOutput
  | DescribeImageReferencesCommandOutput
  | DescribeImageUsageReportEntriesCommandOutput
  | DescribeImageUsageReportsCommandOutput
  | DescribeImagesCommandOutput
  | DescribeImportImageTasksCommandOutput
  | DescribeImportSnapshotTasksCommandOutput
  | DescribeInstanceAttributeCommandOutput
  | DescribeInstanceConnectEndpointsCommandOutput
  | DescribeInstanceCreditSpecificationsCommandOutput
  | DescribeInstanceEventNotificationAttributesCommandOutput
  | DescribeInstanceEventWindowsCommandOutput
  | DescribeInstanceImageMetadataCommandOutput
  | DescribeInstanceSqlHaHistoryStatesCommandOutput
  | DescribeInstanceSqlHaStatesCommandOutput
  | DescribeInstanceStatusCommandOutput
  | DescribeInstanceTopologyCommandOutput
  | DescribeInstanceTypeOfferingsCommandOutput
  | DescribeInstanceTypesCommandOutput
  | DescribeInstancesCommandOutput
  | DescribeInternetGatewaysCommandOutput
  | DescribeIpamByoasnCommandOutput
  | DescribeIpamExternalResourceVerificationTokensCommandOutput
  | DescribeIpamPoliciesCommandOutput
  | DescribeIpamPoolsCommandOutput
  | DescribeIpamPrefixListResolverTargetsCommandOutput
  | DescribeIpamPrefixListResolversCommandOutput
  | DescribeIpamResourceDiscoveriesCommandOutput
  | DescribeIpamResourceDiscoveryAssociationsCommandOutput
  | DescribeIpamScopesCommandOutput
  | DescribeIpamsCommandOutput
  | DescribeIpv6PoolsCommandOutput
  | DescribeKeyPairsCommandOutput
  | DescribeLaunchTemplateVersionsCommandOutput
  | DescribeLaunchTemplatesCommandOutput
  | DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput
  | DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput
  | DescribeLocalGatewayRouteTablesCommandOutput
  | DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput
  | DescribeLocalGatewayVirtualInterfacesCommandOutput
  | DescribeLocalGatewaysCommandOutput
  | DescribeLockedSnapshotsCommandOutput
  | DescribeMacHostsCommandOutput
  | DescribeMacModificationTasksCommandOutput
  | DescribeManagedPrefixListsCommandOutput
  | DescribeMovingAddressesCommandOutput
  | DescribeNatGatewaysCommandOutput
  | DescribeNetworkAclsCommandOutput
  | DescribeNetworkInsightsAccessScopeAnalysesCommandOutput
  | DescribeNetworkInsightsAccessScopesCommandOutput
  | DescribeNetworkInsightsAnalysesCommandOutput
  | DescribeNetworkInsightsPathsCommandOutput
  | DescribeNetworkInterfaceAttributeCommandOutput
  | DescribeNetworkInterfacePermissionsCommandOutput
  | DescribeNetworkInterfacesCommandOutput
  | DescribeOutpostLagsCommandOutput
  | DescribePlacementGroupsCommandOutput
  | DescribePrefixListsCommandOutput
  | DescribePrincipalIdFormatCommandOutput
  | DescribePublicIpv4PoolsCommandOutput
  | DescribeRegionsCommandOutput
  | DescribeReplaceRootVolumeTasksCommandOutput
  | DescribeReservedInstancesCommandOutput
  | DescribeReservedInstancesListingsCommandOutput
  | DescribeReservedInstancesModificationsCommandOutput
  | DescribeReservedInstancesOfferingsCommandOutput
  | DescribeRouteServerEndpointsCommandOutput
  | DescribeRouteServerPeersCommandOutput
  | DescribeRouteServersCommandOutput
  | DescribeRouteTablesCommandOutput
  | DescribeScheduledInstanceAvailabilityCommandOutput
  | DescribeScheduledInstancesCommandOutput
  | DescribeSecondaryInterfacesCommandOutput
  | DescribeSecondaryNetworksCommandOutput
  | DescribeSecondarySubnetsCommandOutput
  | DescribeSecurityGroupReferencesCommandOutput
  | DescribeSecurityGroupRulesCommandOutput
  | DescribeSecurityGroupVpcAssociationsCommandOutput
  | DescribeSecurityGroupsCommandOutput
  | DescribeServiceLinkVirtualInterfacesCommandOutput
  | DescribeSnapshotAttributeCommandOutput
  | DescribeSnapshotTierStatusCommandOutput
  | DescribeSnapshotsCommandOutput
  | DescribeSpotDatafeedSubscriptionCommandOutput
  | DescribeSpotFleetInstancesCommandOutput
  | DescribeSpotFleetRequestHistoryCommandOutput
  | DescribeSpotFleetRequestsCommandOutput
  | DescribeSpotInstanceRequestsCommandOutput
  | DescribeSpotPriceHistoryCommandOutput
  | DescribeStaleSecurityGroupsCommandOutput
  | DescribeStoreImageTasksCommandOutput
  | DescribeSubnetsCommandOutput
  | DescribeTagsCommandOutput
  | DescribeTrafficMirrorFilterRulesCommandOutput
  | DescribeTrafficMirrorFiltersCommandOutput
  | DescribeTrafficMirrorSessionsCommandOutput
  | DescribeTrafficMirrorTargetsCommandOutput
  | DescribeTransitGatewayAttachmentsCommandOutput
  | DescribeTransitGatewayConnectPeersCommandOutput
  | DescribeTransitGatewayConnectsCommandOutput
  | DescribeTransitGatewayMeteringPoliciesCommandOutput
  | DescribeTransitGatewayMulticastDomainsCommandOutput
  | DescribeTransitGatewayPeeringAttachmentsCommandOutput
  | DescribeTransitGatewayPolicyTablesCommandOutput
  | DescribeTransitGatewayRouteTableAnnouncementsCommandOutput
  | DescribeTransitGatewayRouteTablesCommandOutput
  | DescribeTransitGatewayVpcAttachmentsCommandOutput
  | DescribeTransitGatewaysCommandOutput
  | DescribeTrunkInterfaceAssociationsCommandOutput
  | DescribeVerifiedAccessEndpointsCommandOutput
  | DescribeVerifiedAccessGroupsCommandOutput
  | DescribeVerifiedAccessInstanceLoggingConfigurationsCommandOutput
  | DescribeVerifiedAccessInstancesCommandOutput
  | DescribeVerifiedAccessTrustProvidersCommandOutput
  | DescribeVolumeAttributeCommandOutput
  | DescribeVolumeStatusCommandOutput
  | DescribeVolumesCommandOutput
  | DescribeVolumesModificationsCommandOutput
  | DescribeVpcAttributeCommandOutput
  | DescribeVpcBlockPublicAccessExclusionsCommandOutput
  | DescribeVpcBlockPublicAccessOptionsCommandOutput
  | DescribeVpcClassicLinkCommandOutput
  | DescribeVpcClassicLinkDnsSupportCommandOutput
  | DescribeVpcEncryptionControlsCommandOutput
  | DescribeVpcEndpointAssociationsCommandOutput
  | DescribeVpcEndpointConnectionNotificationsCommandOutput
  | DescribeVpcEndpointConnectionsCommandOutput
  | DescribeVpcEndpointServiceConfigurationsCommandOutput
  | DescribeVpcEndpointServicePermissionsCommandOutput
  | DescribeVpcEndpointServicesCommandOutput
  | DescribeVpcEndpointsCommandOutput
  | DescribeVpcPeeringConnectionsCommandOutput
  | DescribeVpcsCommandOutput
  | DescribeVpnConcentratorsCommandOutput
  | DescribeVpnConnectionsCommandOutput
  | DescribeVpnGatewaysCommandOutput
  | DetachClassicLinkVpcCommandOutput
  | DetachInternetGatewayCommandOutput
  | DetachNetworkInterfaceCommandOutput
  | DetachVerifiedAccessTrustProviderCommandOutput
  | DetachVolumeCommandOutput
  | DetachVpnGatewayCommandOutput
  | DisableAddressTransferCommandOutput
  | DisableAllowedImagesSettingsCommandOutput
  | DisableAwsNetworkPerformanceMetricSubscriptionCommandOutput
  | DisableCapacityManagerCommandOutput
  | DisableEbsEncryptionByDefaultCommandOutput
  | DisableFastLaunchCommandOutput
  | DisableFastSnapshotRestoresCommandOutput
  | DisableImageBlockPublicAccessCommandOutput
  | DisableImageCommandOutput
  | DisableImageDeprecationCommandOutput
  | DisableImageDeregistrationProtectionCommandOutput
  | DisableInstanceSqlHaStandbyDetectionsCommandOutput
  | DisableIpamOrganizationAdminAccountCommandOutput
  | DisableIpamPolicyCommandOutput
  | DisableRouteServerPropagationCommandOutput
  | DisableSerialConsoleAccessCommandOutput
  | DisableSnapshotBlockPublicAccessCommandOutput
  | DisableTransitGatewayRouteTablePropagationCommandOutput
  | DisableVgwRoutePropagationCommandOutput
  | DisableVpcClassicLinkCommandOutput
  | DisableVpcClassicLinkDnsSupportCommandOutput
  | DisassociateAddressCommandOutput
  | DisassociateCapacityReservationBillingOwnerCommandOutput
  | DisassociateClientVpnTargetNetworkCommandOutput
  | DisassociateEnclaveCertificateIamRoleCommandOutput
  | DisassociateIamInstanceProfileCommandOutput
  | DisassociateInstanceEventWindowCommandOutput
  | DisassociateIpamByoasnCommandOutput
  | DisassociateIpamResourceDiscoveryCommandOutput
  | DisassociateNatGatewayAddressCommandOutput
  | DisassociateRouteServerCommandOutput
  | DisassociateRouteTableCommandOutput
  | DisassociateSecurityGroupVpcCommandOutput
  | DisassociateSubnetCidrBlockCommandOutput
  | DisassociateTransitGatewayMulticastDomainCommandOutput
  | DisassociateTransitGatewayPolicyTableCommandOutput
  | DisassociateTransitGatewayRouteTableCommandOutput
  | DisassociateTrunkInterfaceCommandOutput
  | DisassociateVpcCidrBlockCommandOutput
  | EnableAddressTransferCommandOutput
  | EnableAllowedImagesSettingsCommandOutput
  | EnableAwsNetworkPerformanceMetricSubscriptionCommandOutput
  | EnableCapacityManagerCommandOutput
  | EnableEbsEncryptionByDefaultCommandOutput
  | EnableFastLaunchCommandOutput
  | EnableFastSnapshotRestoresCommandOutput
  | EnableImageBlockPublicAccessCommandOutput
  | EnableImageCommandOutput
  | EnableImageDeprecationCommandOutput
  | EnableImageDeregistrationProtectionCommandOutput
  | EnableInstanceSqlHaStandbyDetectionsCommandOutput
  | EnableIpamOrganizationAdminAccountCommandOutput
  | EnableIpamPolicyCommandOutput
  | EnableReachabilityAnalyzerOrganizationSharingCommandOutput
  | EnableRouteServerPropagationCommandOutput
  | EnableSerialConsoleAccessCommandOutput
  | EnableSnapshotBlockPublicAccessCommandOutput
  | EnableTransitGatewayRouteTablePropagationCommandOutput
  | EnableVgwRoutePropagationCommandOutput
  | EnableVolumeIOCommandOutput
  | EnableVpcClassicLinkCommandOutput
  | EnableVpcClassicLinkDnsSupportCommandOutput
  | ExportClientVpnClientCertificateRevocationListCommandOutput
  | ExportClientVpnClientConfigurationCommandOutput
  | ExportImageCommandOutput
  | ExportTransitGatewayRoutesCommandOutput
  | ExportVerifiedAccessInstanceClientConfigurationCommandOutput
  | GetActiveVpnTunnelStatusCommandOutput
  | GetAllowedImagesSettingsCommandOutput
  | GetAssociatedEnclaveCertificateIamRolesCommandOutput
  | GetAssociatedIpv6PoolCidrsCommandOutput
  | GetAwsNetworkPerformanceDataCommandOutput
  | GetCapacityManagerAttributesCommandOutput
  | GetCapacityManagerMetricDataCommandOutput
  | GetCapacityManagerMetricDimensionsCommandOutput
  | GetCapacityReservationUsageCommandOutput
  | GetCoipPoolUsageCommandOutput
  | GetConsoleOutputCommandOutput
  | GetConsoleScreenshotCommandOutput
  | GetDeclarativePoliciesReportSummaryCommandOutput
  | GetDefaultCreditSpecificationCommandOutput
  | GetEbsDefaultKmsKeyIdCommandOutput
  | GetEbsEncryptionByDefaultCommandOutput
  | GetEnabledIpamPolicyCommandOutput
  | GetFlowLogsIntegrationTemplateCommandOutput
  | GetGroupsForCapacityReservationCommandOutput
  | GetHostReservationPurchasePreviewCommandOutput
  | GetImageAncestryCommandOutput
  | GetImageBlockPublicAccessStateCommandOutput
  | GetInstanceMetadataDefaultsCommandOutput
  | GetInstanceTpmEkPubCommandOutput
  | GetInstanceTypesFromInstanceRequirementsCommandOutput
  | GetInstanceUefiDataCommandOutput
  | GetIpamAddressHistoryCommandOutput
  | GetIpamDiscoveredAccountsCommandOutput
  | GetIpamDiscoveredPublicAddressesCommandOutput
  | GetIpamDiscoveredResourceCidrsCommandOutput
  | GetIpamPolicyAllocationRulesCommandOutput
  | GetIpamPolicyOrganizationTargetsCommandOutput
  | GetIpamPoolAllocationsCommandOutput
  | GetIpamPoolCidrsCommandOutput
  | GetIpamPrefixListResolverRulesCommandOutput
  | GetIpamPrefixListResolverVersionEntriesCommandOutput
  | GetIpamPrefixListResolverVersionsCommandOutput
  | GetIpamResourceCidrsCommandOutput
  | GetLaunchTemplateDataCommandOutput
  | GetManagedPrefixListAssociationsCommandOutput
  | GetManagedPrefixListEntriesCommandOutput
  | GetNetworkInsightsAccessScopeAnalysisFindingsCommandOutput
  | GetNetworkInsightsAccessScopeContentCommandOutput
  | GetPasswordDataCommandOutput
  | GetReservedInstancesExchangeQuoteCommandOutput
  | GetRouteServerAssociationsCommandOutput
  | GetRouteServerPropagationsCommandOutput
  | GetRouteServerRoutingDatabaseCommandOutput
  | GetSecurityGroupsForVpcCommandOutput
  | GetSerialConsoleAccessStatusCommandOutput
  | GetSnapshotBlockPublicAccessStateCommandOutput
  | GetSpotPlacementScoresCommandOutput
  | GetSubnetCidrReservationsCommandOutput
  | GetTransitGatewayAttachmentPropagationsCommandOutput
  | GetTransitGatewayMeteringPolicyEntriesCommandOutput
  | GetTransitGatewayMulticastDomainAssociationsCommandOutput
  | GetTransitGatewayPolicyTableAssociationsCommandOutput
  | GetTransitGatewayPolicyTableEntriesCommandOutput
  | GetTransitGatewayPrefixListReferencesCommandOutput
  | GetTransitGatewayRouteTableAssociationsCommandOutput
  | GetTransitGatewayRouteTablePropagationsCommandOutput
  | GetVerifiedAccessEndpointPolicyCommandOutput
  | GetVerifiedAccessEndpointTargetsCommandOutput
  | GetVerifiedAccessGroupPolicyCommandOutput
  | GetVpcResourcesBlockingEncryptionEnforcementCommandOutput
  | GetVpnConnectionDeviceSampleConfigurationCommandOutput
  | GetVpnConnectionDeviceTypesCommandOutput
  | GetVpnTunnelReplacementStatusCommandOutput
  | ImportClientVpnClientCertificateRevocationListCommandOutput
  | ImportImageCommandOutput
  | ImportInstanceCommandOutput
  | ImportKeyPairCommandOutput
  | ImportSnapshotCommandOutput
  | ImportVolumeCommandOutput
  | ListImagesInRecycleBinCommandOutput
  | ListSnapshotsInRecycleBinCommandOutput
  | ListVolumesInRecycleBinCommandOutput
  | LockSnapshotCommandOutput
  | ModifyAddressAttributeCommandOutput
  | ModifyAvailabilityZoneGroupCommandOutput
  | ModifyCapacityReservationCommandOutput
  | ModifyCapacityReservationFleetCommandOutput
  | ModifyClientVpnEndpointCommandOutput
  | ModifyDefaultCreditSpecificationCommandOutput
  | ModifyEbsDefaultKmsKeyIdCommandOutput
  | ModifyFleetCommandOutput
  | ModifyFpgaImageAttributeCommandOutput
  | ModifyHostsCommandOutput
  | ModifyIdFormatCommandOutput
  | ModifyIdentityIdFormatCommandOutput
  | ModifyImageAttributeCommandOutput
  | ModifyInstanceAttributeCommandOutput
  | ModifyInstanceCapacityReservationAttributesCommandOutput
  | ModifyInstanceConnectEndpointCommandOutput
  | ModifyInstanceCpuOptionsCommandOutput
  | ModifyInstanceCreditSpecificationCommandOutput
  | ModifyInstanceEventStartTimeCommandOutput
  | ModifyInstanceEventWindowCommandOutput
  | ModifyInstanceMaintenanceOptionsCommandOutput
  | ModifyInstanceMetadataDefaultsCommandOutput
  | ModifyInstanceMetadataOptionsCommandOutput
  | ModifyInstanceNetworkPerformanceOptionsCommandOutput
  | ModifyInstancePlacementCommandOutput
  | ModifyIpamCommandOutput
  | ModifyIpamPolicyAllocationRulesCommandOutput
  | ModifyIpamPoolCommandOutput
  | ModifyIpamPrefixListResolverCommandOutput
  | ModifyIpamPrefixListResolverTargetCommandOutput
  | ModifyIpamResourceCidrCommandOutput
  | ModifyIpamResourceDiscoveryCommandOutput
  | ModifyIpamScopeCommandOutput
  | ModifyLaunchTemplateCommandOutput
  | ModifyLocalGatewayRouteCommandOutput
  | ModifyManagedPrefixListCommandOutput
  | ModifyNetworkInterfaceAttributeCommandOutput
  | ModifyPrivateDnsNameOptionsCommandOutput
  | ModifyPublicIpDnsNameOptionsCommandOutput
  | ModifyReservedInstancesCommandOutput
  | ModifyRouteServerCommandOutput
  | ModifySecurityGroupRulesCommandOutput
  | ModifySnapshotAttributeCommandOutput
  | ModifySnapshotTierCommandOutput
  | ModifySpotFleetRequestCommandOutput
  | ModifySubnetAttributeCommandOutput
  | ModifyTrafficMirrorFilterNetworkServicesCommandOutput
  | ModifyTrafficMirrorFilterRuleCommandOutput
  | ModifyTrafficMirrorSessionCommandOutput
  | ModifyTransitGatewayCommandOutput
  | ModifyTransitGatewayMeteringPolicyCommandOutput
  | ModifyTransitGatewayPrefixListReferenceCommandOutput
  | ModifyTransitGatewayVpcAttachmentCommandOutput
  | ModifyVerifiedAccessEndpointCommandOutput
  | ModifyVerifiedAccessEndpointPolicyCommandOutput
  | ModifyVerifiedAccessGroupCommandOutput
  | ModifyVerifiedAccessGroupPolicyCommandOutput
  | ModifyVerifiedAccessInstanceCommandOutput
  | ModifyVerifiedAccessInstanceLoggingConfigurationCommandOutput
  | ModifyVerifiedAccessTrustProviderCommandOutput
  | ModifyVolumeAttributeCommandOutput
  | ModifyVolumeCommandOutput
  | ModifyVpcAttributeCommandOutput
  | ModifyVpcBlockPublicAccessExclusionCommandOutput
  | ModifyVpcBlockPublicAccessOptionsCommandOutput
  | ModifyVpcEncryptionControlCommandOutput
  | ModifyVpcEndpointCommandOutput
  | ModifyVpcEndpointConnectionNotificationCommandOutput
  | ModifyVpcEndpointServiceConfigurationCommandOutput
  | ModifyVpcEndpointServicePayerResponsibilityCommandOutput
  | ModifyVpcEndpointServicePermissionsCommandOutput
  | ModifyVpcPeeringConnectionOptionsCommandOutput
  | ModifyVpcTenancyCommandOutput
  | ModifyVpnConnectionCommandOutput
  | ModifyVpnConnectionOptionsCommandOutput
  | ModifyVpnTunnelCertificateCommandOutput
  | ModifyVpnTunnelOptionsCommandOutput
  | MonitorInstancesCommandOutput
  | MoveAddressToVpcCommandOutput
  | MoveByoipCidrToIpamCommandOutput
  | MoveCapacityReservationInstancesCommandOutput
  | ProvisionByoipCidrCommandOutput
  | ProvisionIpamByoasnCommandOutput
  | ProvisionIpamPoolCidrCommandOutput
  | ProvisionPublicIpv4PoolCidrCommandOutput
  | PurchaseCapacityBlockCommandOutput
  | PurchaseCapacityBlockExtensionCommandOutput
  | PurchaseHostReservationCommandOutput
  | PurchaseReservedInstancesOfferingCommandOutput
  | PurchaseScheduledInstancesCommandOutput
  | RebootInstancesCommandOutput
  | RegisterImageCommandOutput
  | RegisterInstanceEventNotificationAttributesCommandOutput
  | RegisterTransitGatewayMulticastGroupMembersCommandOutput
  | RegisterTransitGatewayMulticastGroupSourcesCommandOutput
  | RejectCapacityReservationBillingOwnershipCommandOutput
  | RejectTransitGatewayMulticastDomainAssociationsCommandOutput
  | RejectTransitGatewayPeeringAttachmentCommandOutput
  | RejectTransitGatewayVpcAttachmentCommandOutput
  | RejectVpcEndpointConnectionsCommandOutput
  | RejectVpcPeeringConnectionCommandOutput
  | ReleaseAddressCommandOutput
  | ReleaseHostsCommandOutput
  | ReleaseIpamPoolAllocationCommandOutput
  | ReplaceIamInstanceProfileAssociationCommandOutput
  | ReplaceImageCriteriaInAllowedImagesSettingsCommandOutput
  | ReplaceNetworkAclAssociationCommandOutput
  | ReplaceNetworkAclEntryCommandOutput
  | ReplaceRouteCommandOutput
  | ReplaceRouteTableAssociationCommandOutput
  | ReplaceTransitGatewayRouteCommandOutput
  | ReplaceVpnTunnelCommandOutput
  | ReportInstanceStatusCommandOutput
  | RequestSpotFleetCommandOutput
  | RequestSpotInstancesCommandOutput
  | ResetAddressAttributeCommandOutput
  | ResetEbsDefaultKmsKeyIdCommandOutput
  | ResetFpgaImageAttributeCommandOutput
  | ResetImageAttributeCommandOutput
  | ResetInstanceAttributeCommandOutput
  | ResetNetworkInterfaceAttributeCommandOutput
  | ResetSnapshotAttributeCommandOutput
  | RestoreAddressToClassicCommandOutput
  | RestoreImageFromRecycleBinCommandOutput
  | RestoreManagedPrefixListVersionCommandOutput
  | RestoreSnapshotFromRecycleBinCommandOutput
  | RestoreSnapshotTierCommandOutput
  | RestoreVolumeFromRecycleBinCommandOutput
  | RevokeClientVpnIngressCommandOutput
  | RevokeSecurityGroupEgressCommandOutput
  | RevokeSecurityGroupIngressCommandOutput
  | RunInstancesCommandOutput
  | RunScheduledInstancesCommandOutput
  | SearchLocalGatewayRoutesCommandOutput
  | SearchTransitGatewayMulticastGroupsCommandOutput
  | SearchTransitGatewayRoutesCommandOutput
  | SendDiagnosticInterruptCommandOutput
  | StartDeclarativePoliciesReportCommandOutput
  | StartInstancesCommandOutput
  | StartNetworkInsightsAccessScopeAnalysisCommandOutput
  | StartNetworkInsightsAnalysisCommandOutput
  | StartVpcEndpointServicePrivateDnsVerificationCommandOutput
  | StopInstancesCommandOutput
  | TerminateClientVpnConnectionsCommandOutput
  | TerminateInstancesCommandOutput
  | UnassignIpv6AddressesCommandOutput
  | UnassignPrivateIpAddressesCommandOutput
  | UnassignPrivateNatGatewayAddressCommandOutput
  | UnlockSnapshotCommandOutput
  | UnmonitorInstancesCommandOutput
  | UpdateCapacityManagerOrganizationsAccessCommandOutput
  | UpdateInterruptibleCapacityReservationAllocationCommandOutput
  | UpdateSecurityGroupRuleDescriptionsEgressCommandOutput
  | UpdateSecurityGroupRuleDescriptionsIngressCommandOutput
  | WithdrawByoipCidrCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: __Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type EC2ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of EC2Client class constructor that set the region, credentials and other options.
 */
export interface EC2ClientConfig extends EC2ClientConfigType {}

/**
 * @public
 */
export type EC2ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of EC2Client class. This is resolved and normalized from the {@link EC2ClientConfig | constructor configuration interface}.
 */
export interface EC2ClientResolvedConfig extends EC2ClientResolvedConfigType {}

/**
 * <fullname>Amazon Elastic Compute Cloud</fullname>
 *          <p>You can access the features of Amazon Elastic Compute Cloud (Amazon EC2) programmatically. For more information,
 *         see the <a href="https://docs.aws.amazon.com/ec2/latest/devguide">Amazon EC2 Developer Guide</a>.</p>
 * @public
 */
export class EC2Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  EC2ClientResolvedConfig
> {
  /**
   * The resolved configuration of EC2Client class. This is resolved and normalized from the {@link EC2ClientConfig | constructor configuration interface}.
   */
  readonly config: EC2ClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<EC2ClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultEC2HttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: EC2ClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
