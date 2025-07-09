// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultEC2HttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AcceptAddressTransferCommandInput,
  AcceptAddressTransferCommandOutput,
} from "./commands/AcceptAddressTransferCommand";
import {
  AcceptCapacityReservationBillingOwnershipCommandInput,
  AcceptCapacityReservationBillingOwnershipCommandOutput,
} from "./commands/AcceptCapacityReservationBillingOwnershipCommand";
import {
  AcceptReservedInstancesExchangeQuoteCommandInput,
  AcceptReservedInstancesExchangeQuoteCommandOutput,
} from "./commands/AcceptReservedInstancesExchangeQuoteCommand";
import {
  AcceptTransitGatewayMulticastDomainAssociationsCommandInput,
  AcceptTransitGatewayMulticastDomainAssociationsCommandOutput,
} from "./commands/AcceptTransitGatewayMulticastDomainAssociationsCommand";
import {
  AcceptTransitGatewayPeeringAttachmentCommandInput,
  AcceptTransitGatewayPeeringAttachmentCommandOutput,
} from "./commands/AcceptTransitGatewayPeeringAttachmentCommand";
import {
  AcceptTransitGatewayVpcAttachmentCommandInput,
  AcceptTransitGatewayVpcAttachmentCommandOutput,
} from "./commands/AcceptTransitGatewayVpcAttachmentCommand";
import {
  AcceptVpcEndpointConnectionsCommandInput,
  AcceptVpcEndpointConnectionsCommandOutput,
} from "./commands/AcceptVpcEndpointConnectionsCommand";
import {
  AcceptVpcPeeringConnectionCommandInput,
  AcceptVpcPeeringConnectionCommandOutput,
} from "./commands/AcceptVpcPeeringConnectionCommand";
import { AdvertiseByoipCidrCommandInput, AdvertiseByoipCidrCommandOutput } from "./commands/AdvertiseByoipCidrCommand";
import { AllocateAddressCommandInput, AllocateAddressCommandOutput } from "./commands/AllocateAddressCommand";
import { AllocateHostsCommandInput, AllocateHostsCommandOutput } from "./commands/AllocateHostsCommand";
import {
  AllocateIpamPoolCidrCommandInput,
  AllocateIpamPoolCidrCommandOutput,
} from "./commands/AllocateIpamPoolCidrCommand";
import {
  ApplySecurityGroupsToClientVpnTargetNetworkCommandInput,
  ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput,
} from "./commands/ApplySecurityGroupsToClientVpnTargetNetworkCommand";
import {
  AssignIpv6AddressesCommandInput,
  AssignIpv6AddressesCommandOutput,
} from "./commands/AssignIpv6AddressesCommand";
import {
  AssignPrivateIpAddressesCommandInput,
  AssignPrivateIpAddressesCommandOutput,
} from "./commands/AssignPrivateIpAddressesCommand";
import {
  AssignPrivateNatGatewayAddressCommandInput,
  AssignPrivateNatGatewayAddressCommandOutput,
} from "./commands/AssignPrivateNatGatewayAddressCommand";
import { AssociateAddressCommandInput, AssociateAddressCommandOutput } from "./commands/AssociateAddressCommand";
import {
  AssociateCapacityReservationBillingOwnerCommandInput,
  AssociateCapacityReservationBillingOwnerCommandOutput,
} from "./commands/AssociateCapacityReservationBillingOwnerCommand";
import {
  AssociateClientVpnTargetNetworkCommandInput,
  AssociateClientVpnTargetNetworkCommandOutput,
} from "./commands/AssociateClientVpnTargetNetworkCommand";
import {
  AssociateDhcpOptionsCommandInput,
  AssociateDhcpOptionsCommandOutput,
} from "./commands/AssociateDhcpOptionsCommand";
import {
  AssociateEnclaveCertificateIamRoleCommandInput,
  AssociateEnclaveCertificateIamRoleCommandOutput,
} from "./commands/AssociateEnclaveCertificateIamRoleCommand";
import {
  AssociateIamInstanceProfileCommandInput,
  AssociateIamInstanceProfileCommandOutput,
} from "./commands/AssociateIamInstanceProfileCommand";
import {
  AssociateInstanceEventWindowCommandInput,
  AssociateInstanceEventWindowCommandOutput,
} from "./commands/AssociateInstanceEventWindowCommand";
import {
  AssociateIpamByoasnCommandInput,
  AssociateIpamByoasnCommandOutput,
} from "./commands/AssociateIpamByoasnCommand";
import {
  AssociateIpamResourceDiscoveryCommandInput,
  AssociateIpamResourceDiscoveryCommandOutput,
} from "./commands/AssociateIpamResourceDiscoveryCommand";
import {
  AssociateNatGatewayAddressCommandInput,
  AssociateNatGatewayAddressCommandOutput,
} from "./commands/AssociateNatGatewayAddressCommand";
import {
  AssociateRouteServerCommandInput,
  AssociateRouteServerCommandOutput,
} from "./commands/AssociateRouteServerCommand";
import {
  AssociateRouteTableCommandInput,
  AssociateRouteTableCommandOutput,
} from "./commands/AssociateRouteTableCommand";
import {
  AssociateSecurityGroupVpcCommandInput,
  AssociateSecurityGroupVpcCommandOutput,
} from "./commands/AssociateSecurityGroupVpcCommand";
import {
  AssociateSubnetCidrBlockCommandInput,
  AssociateSubnetCidrBlockCommandOutput,
} from "./commands/AssociateSubnetCidrBlockCommand";
import {
  AssociateTransitGatewayMulticastDomainCommandInput,
  AssociateTransitGatewayMulticastDomainCommandOutput,
} from "./commands/AssociateTransitGatewayMulticastDomainCommand";
import {
  AssociateTransitGatewayPolicyTableCommandInput,
  AssociateTransitGatewayPolicyTableCommandOutput,
} from "./commands/AssociateTransitGatewayPolicyTableCommand";
import {
  AssociateTransitGatewayRouteTableCommandInput,
  AssociateTransitGatewayRouteTableCommandOutput,
} from "./commands/AssociateTransitGatewayRouteTableCommand";
import {
  AssociateTrunkInterfaceCommandInput,
  AssociateTrunkInterfaceCommandOutput,
} from "./commands/AssociateTrunkInterfaceCommand";
import {
  AssociateVpcCidrBlockCommandInput,
  AssociateVpcCidrBlockCommandOutput,
} from "./commands/AssociateVpcCidrBlockCommand";
import {
  AttachClassicLinkVpcCommandInput,
  AttachClassicLinkVpcCommandOutput,
} from "./commands/AttachClassicLinkVpcCommand";
import {
  AttachInternetGatewayCommandInput,
  AttachInternetGatewayCommandOutput,
} from "./commands/AttachInternetGatewayCommand";
import {
  AttachNetworkInterfaceCommandInput,
  AttachNetworkInterfaceCommandOutput,
} from "./commands/AttachNetworkInterfaceCommand";
import {
  AttachVerifiedAccessTrustProviderCommandInput,
  AttachVerifiedAccessTrustProviderCommandOutput,
} from "./commands/AttachVerifiedAccessTrustProviderCommand";
import { AttachVolumeCommandInput, AttachVolumeCommandOutput } from "./commands/AttachVolumeCommand";
import { AttachVpnGatewayCommandInput, AttachVpnGatewayCommandOutput } from "./commands/AttachVpnGatewayCommand";
import {
  AuthorizeClientVpnIngressCommandInput,
  AuthorizeClientVpnIngressCommandOutput,
} from "./commands/AuthorizeClientVpnIngressCommand";
import {
  AuthorizeSecurityGroupEgressCommandInput,
  AuthorizeSecurityGroupEgressCommandOutput,
} from "./commands/AuthorizeSecurityGroupEgressCommand";
import {
  AuthorizeSecurityGroupIngressCommandInput,
  AuthorizeSecurityGroupIngressCommandOutput,
} from "./commands/AuthorizeSecurityGroupIngressCommand";
import { BundleInstanceCommandInput, BundleInstanceCommandOutput } from "./commands/BundleInstanceCommand";
import { CancelBundleTaskCommandInput, CancelBundleTaskCommandOutput } from "./commands/CancelBundleTaskCommand";
import {
  CancelCapacityReservationCommandInput,
  CancelCapacityReservationCommandOutput,
} from "./commands/CancelCapacityReservationCommand";
import {
  CancelCapacityReservationFleetsCommandInput,
  CancelCapacityReservationFleetsCommandOutput,
} from "./commands/CancelCapacityReservationFleetsCommand";
import {
  CancelConversionTaskCommandInput,
  CancelConversionTaskCommandOutput,
} from "./commands/CancelConversionTaskCommand";
import {
  CancelDeclarativePoliciesReportCommandInput,
  CancelDeclarativePoliciesReportCommandOutput,
} from "./commands/CancelDeclarativePoliciesReportCommand";
import { CancelExportTaskCommandInput, CancelExportTaskCommandOutput } from "./commands/CancelExportTaskCommand";
import {
  CancelImageLaunchPermissionCommandInput,
  CancelImageLaunchPermissionCommandOutput,
} from "./commands/CancelImageLaunchPermissionCommand";
import { CancelImportTaskCommandInput, CancelImportTaskCommandOutput } from "./commands/CancelImportTaskCommand";
import {
  CancelReservedInstancesListingCommandInput,
  CancelReservedInstancesListingCommandOutput,
} from "./commands/CancelReservedInstancesListingCommand";
import {
  CancelSpotFleetRequestsCommandInput,
  CancelSpotFleetRequestsCommandOutput,
} from "./commands/CancelSpotFleetRequestsCommand";
import {
  CancelSpotInstanceRequestsCommandInput,
  CancelSpotInstanceRequestsCommandOutput,
} from "./commands/CancelSpotInstanceRequestsCommand";
import {
  ConfirmProductInstanceCommandInput,
  ConfirmProductInstanceCommandOutput,
} from "./commands/ConfirmProductInstanceCommand";
import { CopyFpgaImageCommandInput, CopyFpgaImageCommandOutput } from "./commands/CopyFpgaImageCommand";
import { CopyImageCommandInput, CopyImageCommandOutput } from "./commands/CopyImageCommand";
import { CopySnapshotCommandInput, CopySnapshotCommandOutput } from "./commands/CopySnapshotCommand";
import {
  CreateCapacityReservationBySplittingCommandInput,
  CreateCapacityReservationBySplittingCommandOutput,
} from "./commands/CreateCapacityReservationBySplittingCommand";
import {
  CreateCapacityReservationCommandInput,
  CreateCapacityReservationCommandOutput,
} from "./commands/CreateCapacityReservationCommand";
import {
  CreateCapacityReservationFleetCommandInput,
  CreateCapacityReservationFleetCommandOutput,
} from "./commands/CreateCapacityReservationFleetCommand";
import {
  CreateCarrierGatewayCommandInput,
  CreateCarrierGatewayCommandOutput,
} from "./commands/CreateCarrierGatewayCommand";
import {
  CreateClientVpnEndpointCommandInput,
  CreateClientVpnEndpointCommandOutput,
} from "./commands/CreateClientVpnEndpointCommand";
import {
  CreateClientVpnRouteCommandInput,
  CreateClientVpnRouteCommandOutput,
} from "./commands/CreateClientVpnRouteCommand";
import { CreateCoipCidrCommandInput, CreateCoipCidrCommandOutput } from "./commands/CreateCoipCidrCommand";
import { CreateCoipPoolCommandInput, CreateCoipPoolCommandOutput } from "./commands/CreateCoipPoolCommand";
import {
  CreateCustomerGatewayCommandInput,
  CreateCustomerGatewayCommandOutput,
} from "./commands/CreateCustomerGatewayCommand";
import {
  CreateDefaultSubnetCommandInput,
  CreateDefaultSubnetCommandOutput,
} from "./commands/CreateDefaultSubnetCommand";
import { CreateDefaultVpcCommandInput, CreateDefaultVpcCommandOutput } from "./commands/CreateDefaultVpcCommand";
import {
  CreateDelegateMacVolumeOwnershipTaskCommandInput,
  CreateDelegateMacVolumeOwnershipTaskCommandOutput,
} from "./commands/CreateDelegateMacVolumeOwnershipTaskCommand";
import { CreateDhcpOptionsCommandInput, CreateDhcpOptionsCommandOutput } from "./commands/CreateDhcpOptionsCommand";
import {
  CreateEgressOnlyInternetGatewayCommandInput,
  CreateEgressOnlyInternetGatewayCommandOutput,
} from "./commands/CreateEgressOnlyInternetGatewayCommand";
import { CreateFleetCommandInput, CreateFleetCommandOutput } from "./commands/CreateFleetCommand";
import { CreateFlowLogsCommandInput, CreateFlowLogsCommandOutput } from "./commands/CreateFlowLogsCommand";
import { CreateFpgaImageCommandInput, CreateFpgaImageCommandOutput } from "./commands/CreateFpgaImageCommand";
import { CreateImageCommandInput, CreateImageCommandOutput } from "./commands/CreateImageCommand";
import {
  CreateInstanceConnectEndpointCommandInput,
  CreateInstanceConnectEndpointCommandOutput,
} from "./commands/CreateInstanceConnectEndpointCommand";
import {
  CreateInstanceEventWindowCommandInput,
  CreateInstanceEventWindowCommandOutput,
} from "./commands/CreateInstanceEventWindowCommand";
import {
  CreateInstanceExportTaskCommandInput,
  CreateInstanceExportTaskCommandOutput,
} from "./commands/CreateInstanceExportTaskCommand";
import {
  CreateInternetGatewayCommandInput,
  CreateInternetGatewayCommandOutput,
} from "./commands/CreateInternetGatewayCommand";
import { CreateIpamCommandInput, CreateIpamCommandOutput } from "./commands/CreateIpamCommand";
import {
  CreateIpamExternalResourceVerificationTokenCommandInput,
  CreateIpamExternalResourceVerificationTokenCommandOutput,
} from "./commands/CreateIpamExternalResourceVerificationTokenCommand";
import { CreateIpamPoolCommandInput, CreateIpamPoolCommandOutput } from "./commands/CreateIpamPoolCommand";
import {
  CreateIpamResourceDiscoveryCommandInput,
  CreateIpamResourceDiscoveryCommandOutput,
} from "./commands/CreateIpamResourceDiscoveryCommand";
import { CreateIpamScopeCommandInput, CreateIpamScopeCommandOutput } from "./commands/CreateIpamScopeCommand";
import { CreateKeyPairCommandInput, CreateKeyPairCommandOutput } from "./commands/CreateKeyPairCommand";
import {
  CreateLaunchTemplateCommandInput,
  CreateLaunchTemplateCommandOutput,
} from "./commands/CreateLaunchTemplateCommand";
import {
  CreateLaunchTemplateVersionCommandInput,
  CreateLaunchTemplateVersionCommandOutput,
} from "./commands/CreateLaunchTemplateVersionCommand";
import {
  CreateLocalGatewayRouteCommandInput,
  CreateLocalGatewayRouteCommandOutput,
} from "./commands/CreateLocalGatewayRouteCommand";
import {
  CreateLocalGatewayRouteTableCommandInput,
  CreateLocalGatewayRouteTableCommandOutput,
} from "./commands/CreateLocalGatewayRouteTableCommand";
import {
  CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput,
  CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput,
} from "./commands/CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand";
import {
  CreateLocalGatewayRouteTableVpcAssociationCommandInput,
  CreateLocalGatewayRouteTableVpcAssociationCommandOutput,
} from "./commands/CreateLocalGatewayRouteTableVpcAssociationCommand";
import {
  CreateLocalGatewayVirtualInterfaceCommandInput,
  CreateLocalGatewayVirtualInterfaceCommandOutput,
} from "./commands/CreateLocalGatewayVirtualInterfaceCommand";
import {
  CreateLocalGatewayVirtualInterfaceGroupCommandInput,
  CreateLocalGatewayVirtualInterfaceGroupCommandOutput,
} from "./commands/CreateLocalGatewayVirtualInterfaceGroupCommand";
import {
  CreateMacSystemIntegrityProtectionModificationTaskCommandInput,
  CreateMacSystemIntegrityProtectionModificationTaskCommandOutput,
} from "./commands/CreateMacSystemIntegrityProtectionModificationTaskCommand";
import {
  CreateManagedPrefixListCommandInput,
  CreateManagedPrefixListCommandOutput,
} from "./commands/CreateManagedPrefixListCommand";
import { CreateNatGatewayCommandInput, CreateNatGatewayCommandOutput } from "./commands/CreateNatGatewayCommand";
import { CreateNetworkAclCommandInput, CreateNetworkAclCommandOutput } from "./commands/CreateNetworkAclCommand";
import {
  CreateNetworkAclEntryCommandInput,
  CreateNetworkAclEntryCommandOutput,
} from "./commands/CreateNetworkAclEntryCommand";
import {
  CreateNetworkInsightsAccessScopeCommandInput,
  CreateNetworkInsightsAccessScopeCommandOutput,
} from "./commands/CreateNetworkInsightsAccessScopeCommand";
import {
  CreateNetworkInsightsPathCommandInput,
  CreateNetworkInsightsPathCommandOutput,
} from "./commands/CreateNetworkInsightsPathCommand";
import {
  CreateNetworkInterfaceCommandInput,
  CreateNetworkInterfaceCommandOutput,
} from "./commands/CreateNetworkInterfaceCommand";
import {
  CreateNetworkInterfacePermissionCommandInput,
  CreateNetworkInterfacePermissionCommandOutput,
} from "./commands/CreateNetworkInterfacePermissionCommand";
import {
  CreatePlacementGroupCommandInput,
  CreatePlacementGroupCommandOutput,
} from "./commands/CreatePlacementGroupCommand";
import {
  CreatePublicIpv4PoolCommandInput,
  CreatePublicIpv4PoolCommandOutput,
} from "./commands/CreatePublicIpv4PoolCommand";
import {
  CreateReplaceRootVolumeTaskCommandInput,
  CreateReplaceRootVolumeTaskCommandOutput,
} from "./commands/CreateReplaceRootVolumeTaskCommand";
import {
  CreateReservedInstancesListingCommandInput,
  CreateReservedInstancesListingCommandOutput,
} from "./commands/CreateReservedInstancesListingCommand";
import {
  CreateRestoreImageTaskCommandInput,
  CreateRestoreImageTaskCommandOutput,
} from "./commands/CreateRestoreImageTaskCommand";
import { CreateRouteCommandInput, CreateRouteCommandOutput } from "./commands/CreateRouteCommand";
import { CreateRouteServerCommandInput, CreateRouteServerCommandOutput } from "./commands/CreateRouteServerCommand";
import {
  CreateRouteServerEndpointCommandInput,
  CreateRouteServerEndpointCommandOutput,
} from "./commands/CreateRouteServerEndpointCommand";
import {
  CreateRouteServerPeerCommandInput,
  CreateRouteServerPeerCommandOutput,
} from "./commands/CreateRouteServerPeerCommand";
import { CreateRouteTableCommandInput, CreateRouteTableCommandOutput } from "./commands/CreateRouteTableCommand";
import {
  CreateSecurityGroupCommandInput,
  CreateSecurityGroupCommandOutput,
} from "./commands/CreateSecurityGroupCommand";
import { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "./commands/CreateSnapshotCommand";
import { CreateSnapshotsCommandInput, CreateSnapshotsCommandOutput } from "./commands/CreateSnapshotsCommand";
import {
  CreateSpotDatafeedSubscriptionCommandInput,
  CreateSpotDatafeedSubscriptionCommandOutput,
} from "./commands/CreateSpotDatafeedSubscriptionCommand";
import {
  CreateStoreImageTaskCommandInput,
  CreateStoreImageTaskCommandOutput,
} from "./commands/CreateStoreImageTaskCommand";
import {
  CreateSubnetCidrReservationCommandInput,
  CreateSubnetCidrReservationCommandOutput,
} from "./commands/CreateSubnetCidrReservationCommand";
import { CreateSubnetCommandInput, CreateSubnetCommandOutput } from "./commands/CreateSubnetCommand";
import { CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand";
import {
  CreateTrafficMirrorFilterCommandInput,
  CreateTrafficMirrorFilterCommandOutput,
} from "./commands/CreateTrafficMirrorFilterCommand";
import {
  CreateTrafficMirrorFilterRuleCommandInput,
  CreateTrafficMirrorFilterRuleCommandOutput,
} from "./commands/CreateTrafficMirrorFilterRuleCommand";
import {
  CreateTrafficMirrorSessionCommandInput,
  CreateTrafficMirrorSessionCommandOutput,
} from "./commands/CreateTrafficMirrorSessionCommand";
import {
  CreateTrafficMirrorTargetCommandInput,
  CreateTrafficMirrorTargetCommandOutput,
} from "./commands/CreateTrafficMirrorTargetCommand";
import {
  CreateTransitGatewayCommandInput,
  CreateTransitGatewayCommandOutput,
} from "./commands/CreateTransitGatewayCommand";
import {
  CreateTransitGatewayConnectCommandInput,
  CreateTransitGatewayConnectCommandOutput,
} from "./commands/CreateTransitGatewayConnectCommand";
import {
  CreateTransitGatewayConnectPeerCommandInput,
  CreateTransitGatewayConnectPeerCommandOutput,
} from "./commands/CreateTransitGatewayConnectPeerCommand";
import {
  CreateTransitGatewayMulticastDomainCommandInput,
  CreateTransitGatewayMulticastDomainCommandOutput,
} from "./commands/CreateTransitGatewayMulticastDomainCommand";
import {
  CreateTransitGatewayPeeringAttachmentCommandInput,
  CreateTransitGatewayPeeringAttachmentCommandOutput,
} from "./commands/CreateTransitGatewayPeeringAttachmentCommand";
import {
  CreateTransitGatewayPolicyTableCommandInput,
  CreateTransitGatewayPolicyTableCommandOutput,
} from "./commands/CreateTransitGatewayPolicyTableCommand";
import {
  CreateTransitGatewayPrefixListReferenceCommandInput,
  CreateTransitGatewayPrefixListReferenceCommandOutput,
} from "./commands/CreateTransitGatewayPrefixListReferenceCommand";
import {
  CreateTransitGatewayRouteCommandInput,
  CreateTransitGatewayRouteCommandOutput,
} from "./commands/CreateTransitGatewayRouteCommand";
import {
  CreateTransitGatewayRouteTableAnnouncementCommandInput,
  CreateTransitGatewayRouteTableAnnouncementCommandOutput,
} from "./commands/CreateTransitGatewayRouteTableAnnouncementCommand";
import {
  CreateTransitGatewayRouteTableCommandInput,
  CreateTransitGatewayRouteTableCommandOutput,
} from "./commands/CreateTransitGatewayRouteTableCommand";
import {
  CreateTransitGatewayVpcAttachmentCommandInput,
  CreateTransitGatewayVpcAttachmentCommandOutput,
} from "./commands/CreateTransitGatewayVpcAttachmentCommand";
import {
  CreateVerifiedAccessEndpointCommandInput,
  CreateVerifiedAccessEndpointCommandOutput,
} from "./commands/CreateVerifiedAccessEndpointCommand";
import {
  CreateVerifiedAccessGroupCommandInput,
  CreateVerifiedAccessGroupCommandOutput,
} from "./commands/CreateVerifiedAccessGroupCommand";
import {
  CreateVerifiedAccessInstanceCommandInput,
  CreateVerifiedAccessInstanceCommandOutput,
} from "./commands/CreateVerifiedAccessInstanceCommand";
import {
  CreateVerifiedAccessTrustProviderCommandInput,
  CreateVerifiedAccessTrustProviderCommandOutput,
} from "./commands/CreateVerifiedAccessTrustProviderCommand";
import { CreateVolumeCommandInput, CreateVolumeCommandOutput } from "./commands/CreateVolumeCommand";
import {
  CreateVpcBlockPublicAccessExclusionCommandInput,
  CreateVpcBlockPublicAccessExclusionCommandOutput,
} from "./commands/CreateVpcBlockPublicAccessExclusionCommand";
import { CreateVpcCommandInput, CreateVpcCommandOutput } from "./commands/CreateVpcCommand";
import { CreateVpcEndpointCommandInput, CreateVpcEndpointCommandOutput } from "./commands/CreateVpcEndpointCommand";
import {
  CreateVpcEndpointConnectionNotificationCommandInput,
  CreateVpcEndpointConnectionNotificationCommandOutput,
} from "./commands/CreateVpcEndpointConnectionNotificationCommand";
import {
  CreateVpcEndpointServiceConfigurationCommandInput,
  CreateVpcEndpointServiceConfigurationCommandOutput,
} from "./commands/CreateVpcEndpointServiceConfigurationCommand";
import {
  CreateVpcPeeringConnectionCommandInput,
  CreateVpcPeeringConnectionCommandOutput,
} from "./commands/CreateVpcPeeringConnectionCommand";
import {
  CreateVpnConnectionCommandInput,
  CreateVpnConnectionCommandOutput,
} from "./commands/CreateVpnConnectionCommand";
import {
  CreateVpnConnectionRouteCommandInput,
  CreateVpnConnectionRouteCommandOutput,
} from "./commands/CreateVpnConnectionRouteCommand";
import { CreateVpnGatewayCommandInput, CreateVpnGatewayCommandOutput } from "./commands/CreateVpnGatewayCommand";
import {
  DeleteCarrierGatewayCommandInput,
  DeleteCarrierGatewayCommandOutput,
} from "./commands/DeleteCarrierGatewayCommand";
import {
  DeleteClientVpnEndpointCommandInput,
  DeleteClientVpnEndpointCommandOutput,
} from "./commands/DeleteClientVpnEndpointCommand";
import {
  DeleteClientVpnRouteCommandInput,
  DeleteClientVpnRouteCommandOutput,
} from "./commands/DeleteClientVpnRouteCommand";
import { DeleteCoipCidrCommandInput, DeleteCoipCidrCommandOutput } from "./commands/DeleteCoipCidrCommand";
import { DeleteCoipPoolCommandInput, DeleteCoipPoolCommandOutput } from "./commands/DeleteCoipPoolCommand";
import {
  DeleteCustomerGatewayCommandInput,
  DeleteCustomerGatewayCommandOutput,
} from "./commands/DeleteCustomerGatewayCommand";
import { DeleteDhcpOptionsCommandInput, DeleteDhcpOptionsCommandOutput } from "./commands/DeleteDhcpOptionsCommand";
import {
  DeleteEgressOnlyInternetGatewayCommandInput,
  DeleteEgressOnlyInternetGatewayCommandOutput,
} from "./commands/DeleteEgressOnlyInternetGatewayCommand";
import { DeleteFleetsCommandInput, DeleteFleetsCommandOutput } from "./commands/DeleteFleetsCommand";
import { DeleteFlowLogsCommandInput, DeleteFlowLogsCommandOutput } from "./commands/DeleteFlowLogsCommand";
import { DeleteFpgaImageCommandInput, DeleteFpgaImageCommandOutput } from "./commands/DeleteFpgaImageCommand";
import {
  DeleteInstanceConnectEndpointCommandInput,
  DeleteInstanceConnectEndpointCommandOutput,
} from "./commands/DeleteInstanceConnectEndpointCommand";
import {
  DeleteInstanceEventWindowCommandInput,
  DeleteInstanceEventWindowCommandOutput,
} from "./commands/DeleteInstanceEventWindowCommand";
import {
  DeleteInternetGatewayCommandInput,
  DeleteInternetGatewayCommandOutput,
} from "./commands/DeleteInternetGatewayCommand";
import { DeleteIpamCommandInput, DeleteIpamCommandOutput } from "./commands/DeleteIpamCommand";
import {
  DeleteIpamExternalResourceVerificationTokenCommandInput,
  DeleteIpamExternalResourceVerificationTokenCommandOutput,
} from "./commands/DeleteIpamExternalResourceVerificationTokenCommand";
import { DeleteIpamPoolCommandInput, DeleteIpamPoolCommandOutput } from "./commands/DeleteIpamPoolCommand";
import {
  DeleteIpamResourceDiscoveryCommandInput,
  DeleteIpamResourceDiscoveryCommandOutput,
} from "./commands/DeleteIpamResourceDiscoveryCommand";
import { DeleteIpamScopeCommandInput, DeleteIpamScopeCommandOutput } from "./commands/DeleteIpamScopeCommand";
import { DeleteKeyPairCommandInput, DeleteKeyPairCommandOutput } from "./commands/DeleteKeyPairCommand";
import {
  DeleteLaunchTemplateCommandInput,
  DeleteLaunchTemplateCommandOutput,
} from "./commands/DeleteLaunchTemplateCommand";
import {
  DeleteLaunchTemplateVersionsCommandInput,
  DeleteLaunchTemplateVersionsCommandOutput,
} from "./commands/DeleteLaunchTemplateVersionsCommand";
import {
  DeleteLocalGatewayRouteCommandInput,
  DeleteLocalGatewayRouteCommandOutput,
} from "./commands/DeleteLocalGatewayRouteCommand";
import {
  DeleteLocalGatewayRouteTableCommandInput,
  DeleteLocalGatewayRouteTableCommandOutput,
} from "./commands/DeleteLocalGatewayRouteTableCommand";
import {
  DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput,
  DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput,
} from "./commands/DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand";
import {
  DeleteLocalGatewayRouteTableVpcAssociationCommandInput,
  DeleteLocalGatewayRouteTableVpcAssociationCommandOutput,
} from "./commands/DeleteLocalGatewayRouteTableVpcAssociationCommand";
import {
  DeleteLocalGatewayVirtualInterfaceCommandInput,
  DeleteLocalGatewayVirtualInterfaceCommandOutput,
} from "./commands/DeleteLocalGatewayVirtualInterfaceCommand";
import {
  DeleteLocalGatewayVirtualInterfaceGroupCommandInput,
  DeleteLocalGatewayVirtualInterfaceGroupCommandOutput,
} from "./commands/DeleteLocalGatewayVirtualInterfaceGroupCommand";
import {
  DeleteManagedPrefixListCommandInput,
  DeleteManagedPrefixListCommandOutput,
} from "./commands/DeleteManagedPrefixListCommand";
import { DeleteNatGatewayCommandInput, DeleteNatGatewayCommandOutput } from "./commands/DeleteNatGatewayCommand";
import { DeleteNetworkAclCommandInput, DeleteNetworkAclCommandOutput } from "./commands/DeleteNetworkAclCommand";
import {
  DeleteNetworkAclEntryCommandInput,
  DeleteNetworkAclEntryCommandOutput,
} from "./commands/DeleteNetworkAclEntryCommand";
import {
  DeleteNetworkInsightsAccessScopeAnalysisCommandInput,
  DeleteNetworkInsightsAccessScopeAnalysisCommandOutput,
} from "./commands/DeleteNetworkInsightsAccessScopeAnalysisCommand";
import {
  DeleteNetworkInsightsAccessScopeCommandInput,
  DeleteNetworkInsightsAccessScopeCommandOutput,
} from "./commands/DeleteNetworkInsightsAccessScopeCommand";
import {
  DeleteNetworkInsightsAnalysisCommandInput,
  DeleteNetworkInsightsAnalysisCommandOutput,
} from "./commands/DeleteNetworkInsightsAnalysisCommand";
import {
  DeleteNetworkInsightsPathCommandInput,
  DeleteNetworkInsightsPathCommandOutput,
} from "./commands/DeleteNetworkInsightsPathCommand";
import {
  DeleteNetworkInterfaceCommandInput,
  DeleteNetworkInterfaceCommandOutput,
} from "./commands/DeleteNetworkInterfaceCommand";
import {
  DeleteNetworkInterfacePermissionCommandInput,
  DeleteNetworkInterfacePermissionCommandOutput,
} from "./commands/DeleteNetworkInterfacePermissionCommand";
import {
  DeletePlacementGroupCommandInput,
  DeletePlacementGroupCommandOutput,
} from "./commands/DeletePlacementGroupCommand";
import {
  DeletePublicIpv4PoolCommandInput,
  DeletePublicIpv4PoolCommandOutput,
} from "./commands/DeletePublicIpv4PoolCommand";
import {
  DeleteQueuedReservedInstancesCommandInput,
  DeleteQueuedReservedInstancesCommandOutput,
} from "./commands/DeleteQueuedReservedInstancesCommand";
import { DeleteRouteCommandInput, DeleteRouteCommandOutput } from "./commands/DeleteRouteCommand";
import { DeleteRouteServerCommandInput, DeleteRouteServerCommandOutput } from "./commands/DeleteRouteServerCommand";
import {
  DeleteRouteServerEndpointCommandInput,
  DeleteRouteServerEndpointCommandOutput,
} from "./commands/DeleteRouteServerEndpointCommand";
import {
  DeleteRouteServerPeerCommandInput,
  DeleteRouteServerPeerCommandOutput,
} from "./commands/DeleteRouteServerPeerCommand";
import { DeleteRouteTableCommandInput, DeleteRouteTableCommandOutput } from "./commands/DeleteRouteTableCommand";
import {
  DeleteSecurityGroupCommandInput,
  DeleteSecurityGroupCommandOutput,
} from "./commands/DeleteSecurityGroupCommand";
import { DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput } from "./commands/DeleteSnapshotCommand";
import {
  DeleteSpotDatafeedSubscriptionCommandInput,
  DeleteSpotDatafeedSubscriptionCommandOutput,
} from "./commands/DeleteSpotDatafeedSubscriptionCommand";
import {
  DeleteSubnetCidrReservationCommandInput,
  DeleteSubnetCidrReservationCommandOutput,
} from "./commands/DeleteSubnetCidrReservationCommand";
import { DeleteSubnetCommandInput, DeleteSubnetCommandOutput } from "./commands/DeleteSubnetCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import {
  DeleteTrafficMirrorFilterCommandInput,
  DeleteTrafficMirrorFilterCommandOutput,
} from "./commands/DeleteTrafficMirrorFilterCommand";
import {
  DeleteTrafficMirrorFilterRuleCommandInput,
  DeleteTrafficMirrorFilterRuleCommandOutput,
} from "./commands/DeleteTrafficMirrorFilterRuleCommand";
import {
  DeleteTrafficMirrorSessionCommandInput,
  DeleteTrafficMirrorSessionCommandOutput,
} from "./commands/DeleteTrafficMirrorSessionCommand";
import {
  DeleteTrafficMirrorTargetCommandInput,
  DeleteTrafficMirrorTargetCommandOutput,
} from "./commands/DeleteTrafficMirrorTargetCommand";
import {
  DeleteTransitGatewayCommandInput,
  DeleteTransitGatewayCommandOutput,
} from "./commands/DeleteTransitGatewayCommand";
import {
  DeleteTransitGatewayConnectCommandInput,
  DeleteTransitGatewayConnectCommandOutput,
} from "./commands/DeleteTransitGatewayConnectCommand";
import {
  DeleteTransitGatewayConnectPeerCommandInput,
  DeleteTransitGatewayConnectPeerCommandOutput,
} from "./commands/DeleteTransitGatewayConnectPeerCommand";
import {
  DeleteTransitGatewayMulticastDomainCommandInput,
  DeleteTransitGatewayMulticastDomainCommandOutput,
} from "./commands/DeleteTransitGatewayMulticastDomainCommand";
import {
  DeleteTransitGatewayPeeringAttachmentCommandInput,
  DeleteTransitGatewayPeeringAttachmentCommandOutput,
} from "./commands/DeleteTransitGatewayPeeringAttachmentCommand";
import {
  DeleteTransitGatewayPolicyTableCommandInput,
  DeleteTransitGatewayPolicyTableCommandOutput,
} from "./commands/DeleteTransitGatewayPolicyTableCommand";
import {
  DeleteTransitGatewayPrefixListReferenceCommandInput,
  DeleteTransitGatewayPrefixListReferenceCommandOutput,
} from "./commands/DeleteTransitGatewayPrefixListReferenceCommand";
import {
  DeleteTransitGatewayRouteCommandInput,
  DeleteTransitGatewayRouteCommandOutput,
} from "./commands/DeleteTransitGatewayRouteCommand";
import {
  DeleteTransitGatewayRouteTableAnnouncementCommandInput,
  DeleteTransitGatewayRouteTableAnnouncementCommandOutput,
} from "./commands/DeleteTransitGatewayRouteTableAnnouncementCommand";
import {
  DeleteTransitGatewayRouteTableCommandInput,
  DeleteTransitGatewayRouteTableCommandOutput,
} from "./commands/DeleteTransitGatewayRouteTableCommand";
import {
  DeleteTransitGatewayVpcAttachmentCommandInput,
  DeleteTransitGatewayVpcAttachmentCommandOutput,
} from "./commands/DeleteTransitGatewayVpcAttachmentCommand";
import {
  DeleteVerifiedAccessEndpointCommandInput,
  DeleteVerifiedAccessEndpointCommandOutput,
} from "./commands/DeleteVerifiedAccessEndpointCommand";
import {
  DeleteVerifiedAccessGroupCommandInput,
  DeleteVerifiedAccessGroupCommandOutput,
} from "./commands/DeleteVerifiedAccessGroupCommand";
import {
  DeleteVerifiedAccessInstanceCommandInput,
  DeleteVerifiedAccessInstanceCommandOutput,
} from "./commands/DeleteVerifiedAccessInstanceCommand";
import {
  DeleteVerifiedAccessTrustProviderCommandInput,
  DeleteVerifiedAccessTrustProviderCommandOutput,
} from "./commands/DeleteVerifiedAccessTrustProviderCommand";
import { DeleteVolumeCommandInput, DeleteVolumeCommandOutput } from "./commands/DeleteVolumeCommand";
import {
  DeleteVpcBlockPublicAccessExclusionCommandInput,
  DeleteVpcBlockPublicAccessExclusionCommandOutput,
} from "./commands/DeleteVpcBlockPublicAccessExclusionCommand";
import { DeleteVpcCommandInput, DeleteVpcCommandOutput } from "./commands/DeleteVpcCommand";
import {
  DeleteVpcEndpointConnectionNotificationsCommandInput,
  DeleteVpcEndpointConnectionNotificationsCommandOutput,
} from "./commands/DeleteVpcEndpointConnectionNotificationsCommand";
import { DeleteVpcEndpointsCommandInput, DeleteVpcEndpointsCommandOutput } from "./commands/DeleteVpcEndpointsCommand";
import {
  DeleteVpcEndpointServiceConfigurationsCommandInput,
  DeleteVpcEndpointServiceConfigurationsCommandOutput,
} from "./commands/DeleteVpcEndpointServiceConfigurationsCommand";
import {
  DeleteVpcPeeringConnectionCommandInput,
  DeleteVpcPeeringConnectionCommandOutput,
} from "./commands/DeleteVpcPeeringConnectionCommand";
import {
  DeleteVpnConnectionCommandInput,
  DeleteVpnConnectionCommandOutput,
} from "./commands/DeleteVpnConnectionCommand";
import {
  DeleteVpnConnectionRouteCommandInput,
  DeleteVpnConnectionRouteCommandOutput,
} from "./commands/DeleteVpnConnectionRouteCommand";
import { DeleteVpnGatewayCommandInput, DeleteVpnGatewayCommandOutput } from "./commands/DeleteVpnGatewayCommand";
import {
  DeprovisionByoipCidrCommandInput,
  DeprovisionByoipCidrCommandOutput,
} from "./commands/DeprovisionByoipCidrCommand";
import {
  DeprovisionIpamByoasnCommandInput,
  DeprovisionIpamByoasnCommandOutput,
} from "./commands/DeprovisionIpamByoasnCommand";
import {
  DeprovisionIpamPoolCidrCommandInput,
  DeprovisionIpamPoolCidrCommandOutput,
} from "./commands/DeprovisionIpamPoolCidrCommand";
import {
  DeprovisionPublicIpv4PoolCidrCommandInput,
  DeprovisionPublicIpv4PoolCidrCommandOutput,
} from "./commands/DeprovisionPublicIpv4PoolCidrCommand";
import { DeregisterImageCommandInput, DeregisterImageCommandOutput } from "./commands/DeregisterImageCommand";
import {
  DeregisterInstanceEventNotificationAttributesCommandInput,
  DeregisterInstanceEventNotificationAttributesCommandOutput,
} from "./commands/DeregisterInstanceEventNotificationAttributesCommand";
import {
  DeregisterTransitGatewayMulticastGroupMembersCommandInput,
  DeregisterTransitGatewayMulticastGroupMembersCommandOutput,
} from "./commands/DeregisterTransitGatewayMulticastGroupMembersCommand";
import {
  DeregisterTransitGatewayMulticastGroupSourcesCommandInput,
  DeregisterTransitGatewayMulticastGroupSourcesCommandOutput,
} from "./commands/DeregisterTransitGatewayMulticastGroupSourcesCommand";
import {
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "./commands/DescribeAccountAttributesCommand";
import {
  DescribeAddressesAttributeCommandInput,
  DescribeAddressesAttributeCommandOutput,
} from "./commands/DescribeAddressesAttributeCommand";
import { DescribeAddressesCommandInput, DescribeAddressesCommandOutput } from "./commands/DescribeAddressesCommand";
import {
  DescribeAddressTransfersCommandInput,
  DescribeAddressTransfersCommandOutput,
} from "./commands/DescribeAddressTransfersCommand";
import {
  DescribeAggregateIdFormatCommandInput,
  DescribeAggregateIdFormatCommandOutput,
} from "./commands/DescribeAggregateIdFormatCommand";
import {
  DescribeAvailabilityZonesCommandInput,
  DescribeAvailabilityZonesCommandOutput,
} from "./commands/DescribeAvailabilityZonesCommand";
import {
  DescribeAwsNetworkPerformanceMetricSubscriptionsCommandInput,
  DescribeAwsNetworkPerformanceMetricSubscriptionsCommandOutput,
} from "./commands/DescribeAwsNetworkPerformanceMetricSubscriptionsCommand";
import {
  DescribeBundleTasksCommandInput,
  DescribeBundleTasksCommandOutput,
} from "./commands/DescribeBundleTasksCommand";
import { DescribeByoipCidrsCommandInput, DescribeByoipCidrsCommandOutput } from "./commands/DescribeByoipCidrsCommand";
import {
  DescribeCapacityBlockExtensionHistoryCommandInput,
  DescribeCapacityBlockExtensionHistoryCommandOutput,
} from "./commands/DescribeCapacityBlockExtensionHistoryCommand";
import {
  DescribeCapacityBlockExtensionOfferingsCommandInput,
  DescribeCapacityBlockExtensionOfferingsCommandOutput,
} from "./commands/DescribeCapacityBlockExtensionOfferingsCommand";
import {
  DescribeCapacityBlockOfferingsCommandInput,
  DescribeCapacityBlockOfferingsCommandOutput,
} from "./commands/DescribeCapacityBlockOfferingsCommand";
import {
  DescribeCapacityBlocksCommandInput,
  DescribeCapacityBlocksCommandOutput,
} from "./commands/DescribeCapacityBlocksCommand";
import {
  DescribeCapacityBlockStatusCommandInput,
  DescribeCapacityBlockStatusCommandOutput,
} from "./commands/DescribeCapacityBlockStatusCommand";
import {
  DescribeCapacityReservationBillingRequestsCommandInput,
  DescribeCapacityReservationBillingRequestsCommandOutput,
} from "./commands/DescribeCapacityReservationBillingRequestsCommand";
import {
  DescribeCapacityReservationFleetsCommandInput,
  DescribeCapacityReservationFleetsCommandOutput,
} from "./commands/DescribeCapacityReservationFleetsCommand";
import {
  DescribeCapacityReservationsCommandInput,
  DescribeCapacityReservationsCommandOutput,
} from "./commands/DescribeCapacityReservationsCommand";
import {
  DescribeCarrierGatewaysCommandInput,
  DescribeCarrierGatewaysCommandOutput,
} from "./commands/DescribeCarrierGatewaysCommand";
import {
  DescribeClassicLinkInstancesCommandInput,
  DescribeClassicLinkInstancesCommandOutput,
} from "./commands/DescribeClassicLinkInstancesCommand";
import {
  DescribeClientVpnAuthorizationRulesCommandInput,
  DescribeClientVpnAuthorizationRulesCommandOutput,
} from "./commands/DescribeClientVpnAuthorizationRulesCommand";
import {
  DescribeClientVpnConnectionsCommandInput,
  DescribeClientVpnConnectionsCommandOutput,
} from "./commands/DescribeClientVpnConnectionsCommand";
import {
  DescribeClientVpnEndpointsCommandInput,
  DescribeClientVpnEndpointsCommandOutput,
} from "./commands/DescribeClientVpnEndpointsCommand";
import {
  DescribeClientVpnRoutesCommandInput,
  DescribeClientVpnRoutesCommandOutput,
} from "./commands/DescribeClientVpnRoutesCommand";
import {
  DescribeClientVpnTargetNetworksCommandInput,
  DescribeClientVpnTargetNetworksCommandOutput,
} from "./commands/DescribeClientVpnTargetNetworksCommand";
import { DescribeCoipPoolsCommandInput, DescribeCoipPoolsCommandOutput } from "./commands/DescribeCoipPoolsCommand";
import {
  DescribeConversionTasksCommandInput,
  DescribeConversionTasksCommandOutput,
} from "./commands/DescribeConversionTasksCommand";
import {
  DescribeCustomerGatewaysCommandInput,
  DescribeCustomerGatewaysCommandOutput,
} from "./commands/DescribeCustomerGatewaysCommand";
import {
  DescribeDeclarativePoliciesReportsCommandInput,
  DescribeDeclarativePoliciesReportsCommandOutput,
} from "./commands/DescribeDeclarativePoliciesReportsCommand";
import {
  DescribeDhcpOptionsCommandInput,
  DescribeDhcpOptionsCommandOutput,
} from "./commands/DescribeDhcpOptionsCommand";
import {
  DescribeEgressOnlyInternetGatewaysCommandInput,
  DescribeEgressOnlyInternetGatewaysCommandOutput,
} from "./commands/DescribeEgressOnlyInternetGatewaysCommand";
import {
  DescribeElasticGpusCommandInput,
  DescribeElasticGpusCommandOutput,
} from "./commands/DescribeElasticGpusCommand";
import {
  DescribeExportImageTasksCommandInput,
  DescribeExportImageTasksCommandOutput,
} from "./commands/DescribeExportImageTasksCommand";
import {
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput,
} from "./commands/DescribeExportTasksCommand";
import {
  DescribeFastLaunchImagesCommandInput,
  DescribeFastLaunchImagesCommandOutput,
} from "./commands/DescribeFastLaunchImagesCommand";
import {
  DescribeFastSnapshotRestoresCommandInput,
  DescribeFastSnapshotRestoresCommandOutput,
} from "./commands/DescribeFastSnapshotRestoresCommand";
import {
  DescribeFleetHistoryCommandInput,
  DescribeFleetHistoryCommandOutput,
} from "./commands/DescribeFleetHistoryCommand";
import {
  DescribeFleetInstancesCommandInput,
  DescribeFleetInstancesCommandOutput,
} from "./commands/DescribeFleetInstancesCommand";
import { DescribeFleetsCommandInput, DescribeFleetsCommandOutput } from "./commands/DescribeFleetsCommand";
import { DescribeFlowLogsCommandInput, DescribeFlowLogsCommandOutput } from "./commands/DescribeFlowLogsCommand";
import {
  DescribeFpgaImageAttributeCommandInput,
  DescribeFpgaImageAttributeCommandOutput,
} from "./commands/DescribeFpgaImageAttributeCommand";
import { DescribeFpgaImagesCommandInput, DescribeFpgaImagesCommandOutput } from "./commands/DescribeFpgaImagesCommand";
import {
  DescribeHostReservationOfferingsCommandInput,
  DescribeHostReservationOfferingsCommandOutput,
} from "./commands/DescribeHostReservationOfferingsCommand";
import {
  DescribeHostReservationsCommandInput,
  DescribeHostReservationsCommandOutput,
} from "./commands/DescribeHostReservationsCommand";
import { DescribeHostsCommandInput, DescribeHostsCommandOutput } from "./commands/DescribeHostsCommand";
import {
  DescribeIamInstanceProfileAssociationsCommandInput,
  DescribeIamInstanceProfileAssociationsCommandOutput,
} from "./commands/DescribeIamInstanceProfileAssociationsCommand";
import {
  DescribeIdentityIdFormatCommandInput,
  DescribeIdentityIdFormatCommandOutput,
} from "./commands/DescribeIdentityIdFormatCommand";
import { DescribeIdFormatCommandInput, DescribeIdFormatCommandOutput } from "./commands/DescribeIdFormatCommand";
import {
  DescribeImageAttributeCommandInput,
  DescribeImageAttributeCommandOutput,
} from "./commands/DescribeImageAttributeCommand";
import { DescribeImagesCommandInput, DescribeImagesCommandOutput } from "./commands/DescribeImagesCommand";
import {
  DescribeImportImageTasksCommandInput,
  DescribeImportImageTasksCommandOutput,
} from "./commands/DescribeImportImageTasksCommand";
import {
  DescribeImportSnapshotTasksCommandInput,
  DescribeImportSnapshotTasksCommandOutput,
} from "./commands/DescribeImportSnapshotTasksCommand";
import {
  DescribeInstanceAttributeCommandInput,
  DescribeInstanceAttributeCommandOutput,
} from "./commands/DescribeInstanceAttributeCommand";
import {
  DescribeInstanceConnectEndpointsCommandInput,
  DescribeInstanceConnectEndpointsCommandOutput,
} from "./commands/DescribeInstanceConnectEndpointsCommand";
import {
  DescribeInstanceCreditSpecificationsCommandInput,
  DescribeInstanceCreditSpecificationsCommandOutput,
} from "./commands/DescribeInstanceCreditSpecificationsCommand";
import {
  DescribeInstanceEventNotificationAttributesCommandInput,
  DescribeInstanceEventNotificationAttributesCommandOutput,
} from "./commands/DescribeInstanceEventNotificationAttributesCommand";
import {
  DescribeInstanceEventWindowsCommandInput,
  DescribeInstanceEventWindowsCommandOutput,
} from "./commands/DescribeInstanceEventWindowsCommand";
import {
  DescribeInstanceImageMetadataCommandInput,
  DescribeInstanceImageMetadataCommandOutput,
} from "./commands/DescribeInstanceImageMetadataCommand";
import { DescribeInstancesCommandInput, DescribeInstancesCommandOutput } from "./commands/DescribeInstancesCommand";
import {
  DescribeInstanceStatusCommandInput,
  DescribeInstanceStatusCommandOutput,
} from "./commands/DescribeInstanceStatusCommand";
import {
  DescribeInstanceTopologyCommandInput,
  DescribeInstanceTopologyCommandOutput,
} from "./commands/DescribeInstanceTopologyCommand";
import {
  DescribeInstanceTypeOfferingsCommandInput,
  DescribeInstanceTypeOfferingsCommandOutput,
} from "./commands/DescribeInstanceTypeOfferingsCommand";
import {
  DescribeInstanceTypesCommandInput,
  DescribeInstanceTypesCommandOutput,
} from "./commands/DescribeInstanceTypesCommand";
import {
  DescribeInternetGatewaysCommandInput,
  DescribeInternetGatewaysCommandOutput,
} from "./commands/DescribeInternetGatewaysCommand";
import { DescribeIpamByoasnCommandInput, DescribeIpamByoasnCommandOutput } from "./commands/DescribeIpamByoasnCommand";
import {
  DescribeIpamExternalResourceVerificationTokensCommandInput,
  DescribeIpamExternalResourceVerificationTokensCommandOutput,
} from "./commands/DescribeIpamExternalResourceVerificationTokensCommand";
import { DescribeIpamPoolsCommandInput, DescribeIpamPoolsCommandOutput } from "./commands/DescribeIpamPoolsCommand";
import {
  DescribeIpamResourceDiscoveriesCommandInput,
  DescribeIpamResourceDiscoveriesCommandOutput,
} from "./commands/DescribeIpamResourceDiscoveriesCommand";
import {
  DescribeIpamResourceDiscoveryAssociationsCommandInput,
  DescribeIpamResourceDiscoveryAssociationsCommandOutput,
} from "./commands/DescribeIpamResourceDiscoveryAssociationsCommand";
import { DescribeIpamsCommandInput, DescribeIpamsCommandOutput } from "./commands/DescribeIpamsCommand";
import { DescribeIpamScopesCommandInput, DescribeIpamScopesCommandOutput } from "./commands/DescribeIpamScopesCommand";
import { DescribeIpv6PoolsCommandInput, DescribeIpv6PoolsCommandOutput } from "./commands/DescribeIpv6PoolsCommand";
import { DescribeKeyPairsCommandInput, DescribeKeyPairsCommandOutput } from "./commands/DescribeKeyPairsCommand";
import {
  DescribeLaunchTemplatesCommandInput,
  DescribeLaunchTemplatesCommandOutput,
} from "./commands/DescribeLaunchTemplatesCommand";
import {
  DescribeLaunchTemplateVersionsCommandInput,
  DescribeLaunchTemplateVersionsCommandOutput,
} from "./commands/DescribeLaunchTemplateVersionsCommand";
import {
  DescribeLocalGatewayRouteTablesCommandInput,
  DescribeLocalGatewayRouteTablesCommandOutput,
} from "./commands/DescribeLocalGatewayRouteTablesCommand";
import {
  DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput,
  DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput,
} from "./commands/DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand";
import {
  DescribeLocalGatewayRouteTableVpcAssociationsCommandInput,
  DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput,
} from "./commands/DescribeLocalGatewayRouteTableVpcAssociationsCommand";
import {
  DescribeLocalGatewaysCommandInput,
  DescribeLocalGatewaysCommandOutput,
} from "./commands/DescribeLocalGatewaysCommand";
import {
  DescribeLocalGatewayVirtualInterfaceGroupsCommandInput,
  DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput,
} from "./commands/DescribeLocalGatewayVirtualInterfaceGroupsCommand";
import {
  DescribeLocalGatewayVirtualInterfacesCommandInput,
  DescribeLocalGatewayVirtualInterfacesCommandOutput,
} from "./commands/DescribeLocalGatewayVirtualInterfacesCommand";
import {
  DescribeLockedSnapshotsCommandInput,
  DescribeLockedSnapshotsCommandOutput,
} from "./commands/DescribeLockedSnapshotsCommand";
import { DescribeMacHostsCommandInput, DescribeMacHostsCommandOutput } from "./commands/DescribeMacHostsCommand";
import {
  DescribeMacModificationTasksCommandInput,
  DescribeMacModificationTasksCommandOutput,
} from "./commands/DescribeMacModificationTasksCommand";
import {
  DescribeManagedPrefixListsCommandInput,
  DescribeManagedPrefixListsCommandOutput,
} from "./commands/DescribeManagedPrefixListsCommand";
import {
  DescribeMovingAddressesCommandInput,
  DescribeMovingAddressesCommandOutput,
} from "./commands/DescribeMovingAddressesCommand";
import {
  DescribeNatGatewaysCommandInput,
  DescribeNatGatewaysCommandOutput,
} from "./commands/DescribeNatGatewaysCommand";
import {
  DescribeNetworkAclsCommandInput,
  DescribeNetworkAclsCommandOutput,
} from "./commands/DescribeNetworkAclsCommand";
import {
  DescribeNetworkInsightsAccessScopeAnalysesCommandInput,
  DescribeNetworkInsightsAccessScopeAnalysesCommandOutput,
} from "./commands/DescribeNetworkInsightsAccessScopeAnalysesCommand";
import {
  DescribeNetworkInsightsAccessScopesCommandInput,
  DescribeNetworkInsightsAccessScopesCommandOutput,
} from "./commands/DescribeNetworkInsightsAccessScopesCommand";
import {
  DescribeNetworkInsightsAnalysesCommandInput,
  DescribeNetworkInsightsAnalysesCommandOutput,
} from "./commands/DescribeNetworkInsightsAnalysesCommand";
import {
  DescribeNetworkInsightsPathsCommandInput,
  DescribeNetworkInsightsPathsCommandOutput,
} from "./commands/DescribeNetworkInsightsPathsCommand";
import {
  DescribeNetworkInterfaceAttributeCommandInput,
  DescribeNetworkInterfaceAttributeCommandOutput,
} from "./commands/DescribeNetworkInterfaceAttributeCommand";
import {
  DescribeNetworkInterfacePermissionsCommandInput,
  DescribeNetworkInterfacePermissionsCommandOutput,
} from "./commands/DescribeNetworkInterfacePermissionsCommand";
import {
  DescribeNetworkInterfacesCommandInput,
  DescribeNetworkInterfacesCommandOutput,
} from "./commands/DescribeNetworkInterfacesCommand";
import {
  DescribeOutpostLagsCommandInput,
  DescribeOutpostLagsCommandOutput,
} from "./commands/DescribeOutpostLagsCommand";
import {
  DescribePlacementGroupsCommandInput,
  DescribePlacementGroupsCommandOutput,
} from "./commands/DescribePlacementGroupsCommand";
import {
  DescribePrefixListsCommandInput,
  DescribePrefixListsCommandOutput,
} from "./commands/DescribePrefixListsCommand";
import {
  DescribePrincipalIdFormatCommandInput,
  DescribePrincipalIdFormatCommandOutput,
} from "./commands/DescribePrincipalIdFormatCommand";
import {
  DescribePublicIpv4PoolsCommandInput,
  DescribePublicIpv4PoolsCommandOutput,
} from "./commands/DescribePublicIpv4PoolsCommand";
import { DescribeRegionsCommandInput, DescribeRegionsCommandOutput } from "./commands/DescribeRegionsCommand";
import {
  DescribeReplaceRootVolumeTasksCommandInput,
  DescribeReplaceRootVolumeTasksCommandOutput,
} from "./commands/DescribeReplaceRootVolumeTasksCommand";
import {
  DescribeReservedInstancesCommandInput,
  DescribeReservedInstancesCommandOutput,
} from "./commands/DescribeReservedInstancesCommand";
import {
  DescribeReservedInstancesListingsCommandInput,
  DescribeReservedInstancesListingsCommandOutput,
} from "./commands/DescribeReservedInstancesListingsCommand";
import {
  DescribeReservedInstancesModificationsCommandInput,
  DescribeReservedInstancesModificationsCommandOutput,
} from "./commands/DescribeReservedInstancesModificationsCommand";
import {
  DescribeReservedInstancesOfferingsCommandInput,
  DescribeReservedInstancesOfferingsCommandOutput,
} from "./commands/DescribeReservedInstancesOfferingsCommand";
import {
  DescribeRouteServerEndpointsCommandInput,
  DescribeRouteServerEndpointsCommandOutput,
} from "./commands/DescribeRouteServerEndpointsCommand";
import {
  DescribeRouteServerPeersCommandInput,
  DescribeRouteServerPeersCommandOutput,
} from "./commands/DescribeRouteServerPeersCommand";
import {
  DescribeRouteServersCommandInput,
  DescribeRouteServersCommandOutput,
} from "./commands/DescribeRouteServersCommand";
import {
  DescribeRouteTablesCommandInput,
  DescribeRouteTablesCommandOutput,
} from "./commands/DescribeRouteTablesCommand";
import {
  DescribeScheduledInstanceAvailabilityCommandInput,
  DescribeScheduledInstanceAvailabilityCommandOutput,
} from "./commands/DescribeScheduledInstanceAvailabilityCommand";
import {
  DescribeScheduledInstancesCommandInput,
  DescribeScheduledInstancesCommandOutput,
} from "./commands/DescribeScheduledInstancesCommand";
import {
  DescribeSecurityGroupReferencesCommandInput,
  DescribeSecurityGroupReferencesCommandOutput,
} from "./commands/DescribeSecurityGroupReferencesCommand";
import {
  DescribeSecurityGroupRulesCommandInput,
  DescribeSecurityGroupRulesCommandOutput,
} from "./commands/DescribeSecurityGroupRulesCommand";
import {
  DescribeSecurityGroupsCommandInput,
  DescribeSecurityGroupsCommandOutput,
} from "./commands/DescribeSecurityGroupsCommand";
import {
  DescribeSecurityGroupVpcAssociationsCommandInput,
  DescribeSecurityGroupVpcAssociationsCommandOutput,
} from "./commands/DescribeSecurityGroupVpcAssociationsCommand";
import {
  DescribeServiceLinkVirtualInterfacesCommandInput,
  DescribeServiceLinkVirtualInterfacesCommandOutput,
} from "./commands/DescribeServiceLinkVirtualInterfacesCommand";
import {
  DescribeSnapshotAttributeCommandInput,
  DescribeSnapshotAttributeCommandOutput,
} from "./commands/DescribeSnapshotAttributeCommand";
import { DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput } from "./commands/DescribeSnapshotsCommand";
import {
  DescribeSnapshotTierStatusCommandInput,
  DescribeSnapshotTierStatusCommandOutput,
} from "./commands/DescribeSnapshotTierStatusCommand";
import {
  DescribeSpotDatafeedSubscriptionCommandInput,
  DescribeSpotDatafeedSubscriptionCommandOutput,
} from "./commands/DescribeSpotDatafeedSubscriptionCommand";
import {
  DescribeSpotFleetInstancesCommandInput,
  DescribeSpotFleetInstancesCommandOutput,
} from "./commands/DescribeSpotFleetInstancesCommand";
import {
  DescribeSpotFleetRequestHistoryCommandInput,
  DescribeSpotFleetRequestHistoryCommandOutput,
} from "./commands/DescribeSpotFleetRequestHistoryCommand";
import {
  DescribeSpotFleetRequestsCommandInput,
  DescribeSpotFleetRequestsCommandOutput,
} from "./commands/DescribeSpotFleetRequestsCommand";
import {
  DescribeSpotInstanceRequestsCommandInput,
  DescribeSpotInstanceRequestsCommandOutput,
} from "./commands/DescribeSpotInstanceRequestsCommand";
import {
  DescribeSpotPriceHistoryCommandInput,
  DescribeSpotPriceHistoryCommandOutput,
} from "./commands/DescribeSpotPriceHistoryCommand";
import {
  DescribeStaleSecurityGroupsCommandInput,
  DescribeStaleSecurityGroupsCommandOutput,
} from "./commands/DescribeStaleSecurityGroupsCommand";
import {
  DescribeStoreImageTasksCommandInput,
  DescribeStoreImageTasksCommandOutput,
} from "./commands/DescribeStoreImageTasksCommand";
import { DescribeSubnetsCommandInput, DescribeSubnetsCommandOutput } from "./commands/DescribeSubnetsCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "./commands/DescribeTagsCommand";
import {
  DescribeTrafficMirrorFilterRulesCommandInput,
  DescribeTrafficMirrorFilterRulesCommandOutput,
} from "./commands/DescribeTrafficMirrorFilterRulesCommand";
import {
  DescribeTrafficMirrorFiltersCommandInput,
  DescribeTrafficMirrorFiltersCommandOutput,
} from "./commands/DescribeTrafficMirrorFiltersCommand";
import {
  DescribeTrafficMirrorSessionsCommandInput,
  DescribeTrafficMirrorSessionsCommandOutput,
} from "./commands/DescribeTrafficMirrorSessionsCommand";
import {
  DescribeTrafficMirrorTargetsCommandInput,
  DescribeTrafficMirrorTargetsCommandOutput,
} from "./commands/DescribeTrafficMirrorTargetsCommand";
import {
  DescribeTransitGatewayAttachmentsCommandInput,
  DescribeTransitGatewayAttachmentsCommandOutput,
} from "./commands/DescribeTransitGatewayAttachmentsCommand";
import {
  DescribeTransitGatewayConnectPeersCommandInput,
  DescribeTransitGatewayConnectPeersCommandOutput,
} from "./commands/DescribeTransitGatewayConnectPeersCommand";
import {
  DescribeTransitGatewayConnectsCommandInput,
  DescribeTransitGatewayConnectsCommandOutput,
} from "./commands/DescribeTransitGatewayConnectsCommand";
import {
  DescribeTransitGatewayMulticastDomainsCommandInput,
  DescribeTransitGatewayMulticastDomainsCommandOutput,
} from "./commands/DescribeTransitGatewayMulticastDomainsCommand";
import {
  DescribeTransitGatewayPeeringAttachmentsCommandInput,
  DescribeTransitGatewayPeeringAttachmentsCommandOutput,
} from "./commands/DescribeTransitGatewayPeeringAttachmentsCommand";
import {
  DescribeTransitGatewayPolicyTablesCommandInput,
  DescribeTransitGatewayPolicyTablesCommandOutput,
} from "./commands/DescribeTransitGatewayPolicyTablesCommand";
import {
  DescribeTransitGatewayRouteTableAnnouncementsCommandInput,
  DescribeTransitGatewayRouteTableAnnouncementsCommandOutput,
} from "./commands/DescribeTransitGatewayRouteTableAnnouncementsCommand";
import {
  DescribeTransitGatewayRouteTablesCommandInput,
  DescribeTransitGatewayRouteTablesCommandOutput,
} from "./commands/DescribeTransitGatewayRouteTablesCommand";
import {
  DescribeTransitGatewaysCommandInput,
  DescribeTransitGatewaysCommandOutput,
} from "./commands/DescribeTransitGatewaysCommand";
import {
  DescribeTransitGatewayVpcAttachmentsCommandInput,
  DescribeTransitGatewayVpcAttachmentsCommandOutput,
} from "./commands/DescribeTransitGatewayVpcAttachmentsCommand";
import {
  DescribeTrunkInterfaceAssociationsCommandInput,
  DescribeTrunkInterfaceAssociationsCommandOutput,
} from "./commands/DescribeTrunkInterfaceAssociationsCommand";
import {
  DescribeVerifiedAccessEndpointsCommandInput,
  DescribeVerifiedAccessEndpointsCommandOutput,
} from "./commands/DescribeVerifiedAccessEndpointsCommand";
import {
  DescribeVerifiedAccessGroupsCommandInput,
  DescribeVerifiedAccessGroupsCommandOutput,
} from "./commands/DescribeVerifiedAccessGroupsCommand";
import {
  DescribeVerifiedAccessInstanceLoggingConfigurationsCommandInput,
  DescribeVerifiedAccessInstanceLoggingConfigurationsCommandOutput,
} from "./commands/DescribeVerifiedAccessInstanceLoggingConfigurationsCommand";
import {
  DescribeVerifiedAccessInstancesCommandInput,
  DescribeVerifiedAccessInstancesCommandOutput,
} from "./commands/DescribeVerifiedAccessInstancesCommand";
import {
  DescribeVerifiedAccessTrustProvidersCommandInput,
  DescribeVerifiedAccessTrustProvidersCommandOutput,
} from "./commands/DescribeVerifiedAccessTrustProvidersCommand";
import {
  DescribeVolumeAttributeCommandInput,
  DescribeVolumeAttributeCommandOutput,
} from "./commands/DescribeVolumeAttributeCommand";
import { DescribeVolumesCommandInput, DescribeVolumesCommandOutput } from "./commands/DescribeVolumesCommand";
import {
  DescribeVolumesModificationsCommandInput,
  DescribeVolumesModificationsCommandOutput,
} from "./commands/DescribeVolumesModificationsCommand";
import {
  DescribeVolumeStatusCommandInput,
  DescribeVolumeStatusCommandOutput,
} from "./commands/DescribeVolumeStatusCommand";
import {
  DescribeVpcAttributeCommandInput,
  DescribeVpcAttributeCommandOutput,
} from "./commands/DescribeVpcAttributeCommand";
import {
  DescribeVpcBlockPublicAccessExclusionsCommandInput,
  DescribeVpcBlockPublicAccessExclusionsCommandOutput,
} from "./commands/DescribeVpcBlockPublicAccessExclusionsCommand";
import {
  DescribeVpcBlockPublicAccessOptionsCommandInput,
  DescribeVpcBlockPublicAccessOptionsCommandOutput,
} from "./commands/DescribeVpcBlockPublicAccessOptionsCommand";
import {
  DescribeVpcClassicLinkCommandInput,
  DescribeVpcClassicLinkCommandOutput,
} from "./commands/DescribeVpcClassicLinkCommand";
import {
  DescribeVpcClassicLinkDnsSupportCommandInput,
  DescribeVpcClassicLinkDnsSupportCommandOutput,
} from "./commands/DescribeVpcClassicLinkDnsSupportCommand";
import {
  DescribeVpcEndpointAssociationsCommandInput,
  DescribeVpcEndpointAssociationsCommandOutput,
} from "./commands/DescribeVpcEndpointAssociationsCommand";
import {
  DescribeVpcEndpointConnectionNotificationsCommandInput,
  DescribeVpcEndpointConnectionNotificationsCommandOutput,
} from "./commands/DescribeVpcEndpointConnectionNotificationsCommand";
import {
  DescribeVpcEndpointConnectionsCommandInput,
  DescribeVpcEndpointConnectionsCommandOutput,
} from "./commands/DescribeVpcEndpointConnectionsCommand";
import {
  DescribeVpcEndpointsCommandInput,
  DescribeVpcEndpointsCommandOutput,
} from "./commands/DescribeVpcEndpointsCommand";
import {
  DescribeVpcEndpointServiceConfigurationsCommandInput,
  DescribeVpcEndpointServiceConfigurationsCommandOutput,
} from "./commands/DescribeVpcEndpointServiceConfigurationsCommand";
import {
  DescribeVpcEndpointServicePermissionsCommandInput,
  DescribeVpcEndpointServicePermissionsCommandOutput,
} from "./commands/DescribeVpcEndpointServicePermissionsCommand";
import {
  DescribeVpcEndpointServicesCommandInput,
  DescribeVpcEndpointServicesCommandOutput,
} from "./commands/DescribeVpcEndpointServicesCommand";
import {
  DescribeVpcPeeringConnectionsCommandInput,
  DescribeVpcPeeringConnectionsCommandOutput,
} from "./commands/DescribeVpcPeeringConnectionsCommand";
import { DescribeVpcsCommandInput, DescribeVpcsCommandOutput } from "./commands/DescribeVpcsCommand";
import {
  DescribeVpnConnectionsCommandInput,
  DescribeVpnConnectionsCommandOutput,
} from "./commands/DescribeVpnConnectionsCommand";
import {
  DescribeVpnGatewaysCommandInput,
  DescribeVpnGatewaysCommandOutput,
} from "./commands/DescribeVpnGatewaysCommand";
import {
  DetachClassicLinkVpcCommandInput,
  DetachClassicLinkVpcCommandOutput,
} from "./commands/DetachClassicLinkVpcCommand";
import {
  DetachInternetGatewayCommandInput,
  DetachInternetGatewayCommandOutput,
} from "./commands/DetachInternetGatewayCommand";
import {
  DetachNetworkInterfaceCommandInput,
  DetachNetworkInterfaceCommandOutput,
} from "./commands/DetachNetworkInterfaceCommand";
import {
  DetachVerifiedAccessTrustProviderCommandInput,
  DetachVerifiedAccessTrustProviderCommandOutput,
} from "./commands/DetachVerifiedAccessTrustProviderCommand";
import { DetachVolumeCommandInput, DetachVolumeCommandOutput } from "./commands/DetachVolumeCommand";
import { DetachVpnGatewayCommandInput, DetachVpnGatewayCommandOutput } from "./commands/DetachVpnGatewayCommand";
import {
  DisableAddressTransferCommandInput,
  DisableAddressTransferCommandOutput,
} from "./commands/DisableAddressTransferCommand";
import {
  DisableAllowedImagesSettingsCommandInput,
  DisableAllowedImagesSettingsCommandOutput,
} from "./commands/DisableAllowedImagesSettingsCommand";
import {
  DisableAwsNetworkPerformanceMetricSubscriptionCommandInput,
  DisableAwsNetworkPerformanceMetricSubscriptionCommandOutput,
} from "./commands/DisableAwsNetworkPerformanceMetricSubscriptionCommand";
import {
  DisableEbsEncryptionByDefaultCommandInput,
  DisableEbsEncryptionByDefaultCommandOutput,
} from "./commands/DisableEbsEncryptionByDefaultCommand";
import { DisableFastLaunchCommandInput, DisableFastLaunchCommandOutput } from "./commands/DisableFastLaunchCommand";
import {
  DisableFastSnapshotRestoresCommandInput,
  DisableFastSnapshotRestoresCommandOutput,
} from "./commands/DisableFastSnapshotRestoresCommand";
import {
  DisableImageBlockPublicAccessCommandInput,
  DisableImageBlockPublicAccessCommandOutput,
} from "./commands/DisableImageBlockPublicAccessCommand";
import { DisableImageCommandInput, DisableImageCommandOutput } from "./commands/DisableImageCommand";
import {
  DisableImageDeprecationCommandInput,
  DisableImageDeprecationCommandOutput,
} from "./commands/DisableImageDeprecationCommand";
import {
  DisableImageDeregistrationProtectionCommandInput,
  DisableImageDeregistrationProtectionCommandOutput,
} from "./commands/DisableImageDeregistrationProtectionCommand";
import {
  DisableIpamOrganizationAdminAccountCommandInput,
  DisableIpamOrganizationAdminAccountCommandOutput,
} from "./commands/DisableIpamOrganizationAdminAccountCommand";
import {
  DisableRouteServerPropagationCommandInput,
  DisableRouteServerPropagationCommandOutput,
} from "./commands/DisableRouteServerPropagationCommand";
import {
  DisableSerialConsoleAccessCommandInput,
  DisableSerialConsoleAccessCommandOutput,
} from "./commands/DisableSerialConsoleAccessCommand";
import {
  DisableSnapshotBlockPublicAccessCommandInput,
  DisableSnapshotBlockPublicAccessCommandOutput,
} from "./commands/DisableSnapshotBlockPublicAccessCommand";
import {
  DisableTransitGatewayRouteTablePropagationCommandInput,
  DisableTransitGatewayRouteTablePropagationCommandOutput,
} from "./commands/DisableTransitGatewayRouteTablePropagationCommand";
import {
  DisableVgwRoutePropagationCommandInput,
  DisableVgwRoutePropagationCommandOutput,
} from "./commands/DisableVgwRoutePropagationCommand";
import {
  DisableVpcClassicLinkCommandInput,
  DisableVpcClassicLinkCommandOutput,
} from "./commands/DisableVpcClassicLinkCommand";
import {
  DisableVpcClassicLinkDnsSupportCommandInput,
  DisableVpcClassicLinkDnsSupportCommandOutput,
} from "./commands/DisableVpcClassicLinkDnsSupportCommand";
import {
  DisassociateAddressCommandInput,
  DisassociateAddressCommandOutput,
} from "./commands/DisassociateAddressCommand";
import {
  DisassociateCapacityReservationBillingOwnerCommandInput,
  DisassociateCapacityReservationBillingOwnerCommandOutput,
} from "./commands/DisassociateCapacityReservationBillingOwnerCommand";
import {
  DisassociateClientVpnTargetNetworkCommandInput,
  DisassociateClientVpnTargetNetworkCommandOutput,
} from "./commands/DisassociateClientVpnTargetNetworkCommand";
import {
  DisassociateEnclaveCertificateIamRoleCommandInput,
  DisassociateEnclaveCertificateIamRoleCommandOutput,
} from "./commands/DisassociateEnclaveCertificateIamRoleCommand";
import {
  DisassociateIamInstanceProfileCommandInput,
  DisassociateIamInstanceProfileCommandOutput,
} from "./commands/DisassociateIamInstanceProfileCommand";
import {
  DisassociateInstanceEventWindowCommandInput,
  DisassociateInstanceEventWindowCommandOutput,
} from "./commands/DisassociateInstanceEventWindowCommand";
import {
  DisassociateIpamByoasnCommandInput,
  DisassociateIpamByoasnCommandOutput,
} from "./commands/DisassociateIpamByoasnCommand";
import {
  DisassociateIpamResourceDiscoveryCommandInput,
  DisassociateIpamResourceDiscoveryCommandOutput,
} from "./commands/DisassociateIpamResourceDiscoveryCommand";
import {
  DisassociateNatGatewayAddressCommandInput,
  DisassociateNatGatewayAddressCommandOutput,
} from "./commands/DisassociateNatGatewayAddressCommand";
import {
  DisassociateRouteServerCommandInput,
  DisassociateRouteServerCommandOutput,
} from "./commands/DisassociateRouteServerCommand";
import {
  DisassociateRouteTableCommandInput,
  DisassociateRouteTableCommandOutput,
} from "./commands/DisassociateRouteTableCommand";
import {
  DisassociateSecurityGroupVpcCommandInput,
  DisassociateSecurityGroupVpcCommandOutput,
} from "./commands/DisassociateSecurityGroupVpcCommand";
import {
  DisassociateSubnetCidrBlockCommandInput,
  DisassociateSubnetCidrBlockCommandOutput,
} from "./commands/DisassociateSubnetCidrBlockCommand";
import {
  DisassociateTransitGatewayMulticastDomainCommandInput,
  DisassociateTransitGatewayMulticastDomainCommandOutput,
} from "./commands/DisassociateTransitGatewayMulticastDomainCommand";
import {
  DisassociateTransitGatewayPolicyTableCommandInput,
  DisassociateTransitGatewayPolicyTableCommandOutput,
} from "./commands/DisassociateTransitGatewayPolicyTableCommand";
import {
  DisassociateTransitGatewayRouteTableCommandInput,
  DisassociateTransitGatewayRouteTableCommandOutput,
} from "./commands/DisassociateTransitGatewayRouteTableCommand";
import {
  DisassociateTrunkInterfaceCommandInput,
  DisassociateTrunkInterfaceCommandOutput,
} from "./commands/DisassociateTrunkInterfaceCommand";
import {
  DisassociateVpcCidrBlockCommandInput,
  DisassociateVpcCidrBlockCommandOutput,
} from "./commands/DisassociateVpcCidrBlockCommand";
import {
  EnableAddressTransferCommandInput,
  EnableAddressTransferCommandOutput,
} from "./commands/EnableAddressTransferCommand";
import {
  EnableAllowedImagesSettingsCommandInput,
  EnableAllowedImagesSettingsCommandOutput,
} from "./commands/EnableAllowedImagesSettingsCommand";
import {
  EnableAwsNetworkPerformanceMetricSubscriptionCommandInput,
  EnableAwsNetworkPerformanceMetricSubscriptionCommandOutput,
} from "./commands/EnableAwsNetworkPerformanceMetricSubscriptionCommand";
import {
  EnableEbsEncryptionByDefaultCommandInput,
  EnableEbsEncryptionByDefaultCommandOutput,
} from "./commands/EnableEbsEncryptionByDefaultCommand";
import { EnableFastLaunchCommandInput, EnableFastLaunchCommandOutput } from "./commands/EnableFastLaunchCommand";
import {
  EnableFastSnapshotRestoresCommandInput,
  EnableFastSnapshotRestoresCommandOutput,
} from "./commands/EnableFastSnapshotRestoresCommand";
import {
  EnableImageBlockPublicAccessCommandInput,
  EnableImageBlockPublicAccessCommandOutput,
} from "./commands/EnableImageBlockPublicAccessCommand";
import { EnableImageCommandInput, EnableImageCommandOutput } from "./commands/EnableImageCommand";
import {
  EnableImageDeprecationCommandInput,
  EnableImageDeprecationCommandOutput,
} from "./commands/EnableImageDeprecationCommand";
import {
  EnableImageDeregistrationProtectionCommandInput,
  EnableImageDeregistrationProtectionCommandOutput,
} from "./commands/EnableImageDeregistrationProtectionCommand";
import {
  EnableIpamOrganizationAdminAccountCommandInput,
  EnableIpamOrganizationAdminAccountCommandOutput,
} from "./commands/EnableIpamOrganizationAdminAccountCommand";
import {
  EnableReachabilityAnalyzerOrganizationSharingCommandInput,
  EnableReachabilityAnalyzerOrganizationSharingCommandOutput,
} from "./commands/EnableReachabilityAnalyzerOrganizationSharingCommand";
import {
  EnableRouteServerPropagationCommandInput,
  EnableRouteServerPropagationCommandOutput,
} from "./commands/EnableRouteServerPropagationCommand";
import {
  EnableSerialConsoleAccessCommandInput,
  EnableSerialConsoleAccessCommandOutput,
} from "./commands/EnableSerialConsoleAccessCommand";
import {
  EnableSnapshotBlockPublicAccessCommandInput,
  EnableSnapshotBlockPublicAccessCommandOutput,
} from "./commands/EnableSnapshotBlockPublicAccessCommand";
import {
  EnableTransitGatewayRouteTablePropagationCommandInput,
  EnableTransitGatewayRouteTablePropagationCommandOutput,
} from "./commands/EnableTransitGatewayRouteTablePropagationCommand";
import {
  EnableVgwRoutePropagationCommandInput,
  EnableVgwRoutePropagationCommandOutput,
} from "./commands/EnableVgwRoutePropagationCommand";
import { EnableVolumeIOCommandInput, EnableVolumeIOCommandOutput } from "./commands/EnableVolumeIOCommand";
import {
  EnableVpcClassicLinkCommandInput,
  EnableVpcClassicLinkCommandOutput,
} from "./commands/EnableVpcClassicLinkCommand";
import {
  EnableVpcClassicLinkDnsSupportCommandInput,
  EnableVpcClassicLinkDnsSupportCommandOutput,
} from "./commands/EnableVpcClassicLinkDnsSupportCommand";
import {
  ExportClientVpnClientCertificateRevocationListCommandInput,
  ExportClientVpnClientCertificateRevocationListCommandOutput,
} from "./commands/ExportClientVpnClientCertificateRevocationListCommand";
import {
  ExportClientVpnClientConfigurationCommandInput,
  ExportClientVpnClientConfigurationCommandOutput,
} from "./commands/ExportClientVpnClientConfigurationCommand";
import { ExportImageCommandInput, ExportImageCommandOutput } from "./commands/ExportImageCommand";
import {
  ExportTransitGatewayRoutesCommandInput,
  ExportTransitGatewayRoutesCommandOutput,
} from "./commands/ExportTransitGatewayRoutesCommand";
import {
  ExportVerifiedAccessInstanceClientConfigurationCommandInput,
  ExportVerifiedAccessInstanceClientConfigurationCommandOutput,
} from "./commands/ExportVerifiedAccessInstanceClientConfigurationCommand";
import {
  GetActiveVpnTunnelStatusCommandInput,
  GetActiveVpnTunnelStatusCommandOutput,
} from "./commands/GetActiveVpnTunnelStatusCommand";
import {
  GetAllowedImagesSettingsCommandInput,
  GetAllowedImagesSettingsCommandOutput,
} from "./commands/GetAllowedImagesSettingsCommand";
import {
  GetAssociatedEnclaveCertificateIamRolesCommandInput,
  GetAssociatedEnclaveCertificateIamRolesCommandOutput,
} from "./commands/GetAssociatedEnclaveCertificateIamRolesCommand";
import {
  GetAssociatedIpv6PoolCidrsCommandInput,
  GetAssociatedIpv6PoolCidrsCommandOutput,
} from "./commands/GetAssociatedIpv6PoolCidrsCommand";
import {
  GetAwsNetworkPerformanceDataCommandInput,
  GetAwsNetworkPerformanceDataCommandOutput,
} from "./commands/GetAwsNetworkPerformanceDataCommand";
import {
  GetCapacityReservationUsageCommandInput,
  GetCapacityReservationUsageCommandOutput,
} from "./commands/GetCapacityReservationUsageCommand";
import { GetCoipPoolUsageCommandInput, GetCoipPoolUsageCommandOutput } from "./commands/GetCoipPoolUsageCommand";
import { GetConsoleOutputCommandInput, GetConsoleOutputCommandOutput } from "./commands/GetConsoleOutputCommand";
import {
  GetConsoleScreenshotCommandInput,
  GetConsoleScreenshotCommandOutput,
} from "./commands/GetConsoleScreenshotCommand";
import {
  GetDeclarativePoliciesReportSummaryCommandInput,
  GetDeclarativePoliciesReportSummaryCommandOutput,
} from "./commands/GetDeclarativePoliciesReportSummaryCommand";
import {
  GetDefaultCreditSpecificationCommandInput,
  GetDefaultCreditSpecificationCommandOutput,
} from "./commands/GetDefaultCreditSpecificationCommand";
import {
  GetEbsDefaultKmsKeyIdCommandInput,
  GetEbsDefaultKmsKeyIdCommandOutput,
} from "./commands/GetEbsDefaultKmsKeyIdCommand";
import {
  GetEbsEncryptionByDefaultCommandInput,
  GetEbsEncryptionByDefaultCommandOutput,
} from "./commands/GetEbsEncryptionByDefaultCommand";
import {
  GetFlowLogsIntegrationTemplateCommandInput,
  GetFlowLogsIntegrationTemplateCommandOutput,
} from "./commands/GetFlowLogsIntegrationTemplateCommand";
import {
  GetGroupsForCapacityReservationCommandInput,
  GetGroupsForCapacityReservationCommandOutput,
} from "./commands/GetGroupsForCapacityReservationCommand";
import {
  GetHostReservationPurchasePreviewCommandInput,
  GetHostReservationPurchasePreviewCommandOutput,
} from "./commands/GetHostReservationPurchasePreviewCommand";
import {
  GetImageBlockPublicAccessStateCommandInput,
  GetImageBlockPublicAccessStateCommandOutput,
} from "./commands/GetImageBlockPublicAccessStateCommand";
import {
  GetInstanceMetadataDefaultsCommandInput,
  GetInstanceMetadataDefaultsCommandOutput,
} from "./commands/GetInstanceMetadataDefaultsCommand";
import {
  GetInstanceTpmEkPubCommandInput,
  GetInstanceTpmEkPubCommandOutput,
} from "./commands/GetInstanceTpmEkPubCommand";
import {
  GetInstanceTypesFromInstanceRequirementsCommandInput,
  GetInstanceTypesFromInstanceRequirementsCommandOutput,
} from "./commands/GetInstanceTypesFromInstanceRequirementsCommand";
import {
  GetInstanceUefiDataCommandInput,
  GetInstanceUefiDataCommandOutput,
} from "./commands/GetInstanceUefiDataCommand";
import {
  GetIpamAddressHistoryCommandInput,
  GetIpamAddressHistoryCommandOutput,
} from "./commands/GetIpamAddressHistoryCommand";
import {
  GetIpamDiscoveredAccountsCommandInput,
  GetIpamDiscoveredAccountsCommandOutput,
} from "./commands/GetIpamDiscoveredAccountsCommand";
import {
  GetIpamDiscoveredPublicAddressesCommandInput,
  GetIpamDiscoveredPublicAddressesCommandOutput,
} from "./commands/GetIpamDiscoveredPublicAddressesCommand";
import {
  GetIpamDiscoveredResourceCidrsCommandInput,
  GetIpamDiscoveredResourceCidrsCommandOutput,
} from "./commands/GetIpamDiscoveredResourceCidrsCommand";
import {
  GetIpamPoolAllocationsCommandInput,
  GetIpamPoolAllocationsCommandOutput,
} from "./commands/GetIpamPoolAllocationsCommand";
import { GetIpamPoolCidrsCommandInput, GetIpamPoolCidrsCommandOutput } from "./commands/GetIpamPoolCidrsCommand";
import {
  GetIpamResourceCidrsCommandInput,
  GetIpamResourceCidrsCommandOutput,
} from "./commands/GetIpamResourceCidrsCommand";
import {
  GetLaunchTemplateDataCommandInput,
  GetLaunchTemplateDataCommandOutput,
} from "./commands/GetLaunchTemplateDataCommand";
import {
  GetManagedPrefixListAssociationsCommandInput,
  GetManagedPrefixListAssociationsCommandOutput,
} from "./commands/GetManagedPrefixListAssociationsCommand";
import {
  GetManagedPrefixListEntriesCommandInput,
  GetManagedPrefixListEntriesCommandOutput,
} from "./commands/GetManagedPrefixListEntriesCommand";
import {
  GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput,
  GetNetworkInsightsAccessScopeAnalysisFindingsCommandOutput,
} from "./commands/GetNetworkInsightsAccessScopeAnalysisFindingsCommand";
import {
  GetNetworkInsightsAccessScopeContentCommandInput,
  GetNetworkInsightsAccessScopeContentCommandOutput,
} from "./commands/GetNetworkInsightsAccessScopeContentCommand";
import { GetPasswordDataCommandInput, GetPasswordDataCommandOutput } from "./commands/GetPasswordDataCommand";
import {
  GetReservedInstancesExchangeQuoteCommandInput,
  GetReservedInstancesExchangeQuoteCommandOutput,
} from "./commands/GetReservedInstancesExchangeQuoteCommand";
import {
  GetRouteServerAssociationsCommandInput,
  GetRouteServerAssociationsCommandOutput,
} from "./commands/GetRouteServerAssociationsCommand";
import {
  GetRouteServerPropagationsCommandInput,
  GetRouteServerPropagationsCommandOutput,
} from "./commands/GetRouteServerPropagationsCommand";
import {
  GetRouteServerRoutingDatabaseCommandInput,
  GetRouteServerRoutingDatabaseCommandOutput,
} from "./commands/GetRouteServerRoutingDatabaseCommand";
import {
  GetSecurityGroupsForVpcCommandInput,
  GetSecurityGroupsForVpcCommandOutput,
} from "./commands/GetSecurityGroupsForVpcCommand";
import {
  GetSerialConsoleAccessStatusCommandInput,
  GetSerialConsoleAccessStatusCommandOutput,
} from "./commands/GetSerialConsoleAccessStatusCommand";
import {
  GetSnapshotBlockPublicAccessStateCommandInput,
  GetSnapshotBlockPublicAccessStateCommandOutput,
} from "./commands/GetSnapshotBlockPublicAccessStateCommand";
import {
  GetSpotPlacementScoresCommandInput,
  GetSpotPlacementScoresCommandOutput,
} from "./commands/GetSpotPlacementScoresCommand";
import {
  GetSubnetCidrReservationsCommandInput,
  GetSubnetCidrReservationsCommandOutput,
} from "./commands/GetSubnetCidrReservationsCommand";
import {
  GetTransitGatewayAttachmentPropagationsCommandInput,
  GetTransitGatewayAttachmentPropagationsCommandOutput,
} from "./commands/GetTransitGatewayAttachmentPropagationsCommand";
import {
  GetTransitGatewayMulticastDomainAssociationsCommandInput,
  GetTransitGatewayMulticastDomainAssociationsCommandOutput,
} from "./commands/GetTransitGatewayMulticastDomainAssociationsCommand";
import {
  GetTransitGatewayPolicyTableAssociationsCommandInput,
  GetTransitGatewayPolicyTableAssociationsCommandOutput,
} from "./commands/GetTransitGatewayPolicyTableAssociationsCommand";
import {
  GetTransitGatewayPolicyTableEntriesCommandInput,
  GetTransitGatewayPolicyTableEntriesCommandOutput,
} from "./commands/GetTransitGatewayPolicyTableEntriesCommand";
import {
  GetTransitGatewayPrefixListReferencesCommandInput,
  GetTransitGatewayPrefixListReferencesCommandOutput,
} from "./commands/GetTransitGatewayPrefixListReferencesCommand";
import {
  GetTransitGatewayRouteTableAssociationsCommandInput,
  GetTransitGatewayRouteTableAssociationsCommandOutput,
} from "./commands/GetTransitGatewayRouteTableAssociationsCommand";
import {
  GetTransitGatewayRouteTablePropagationsCommandInput,
  GetTransitGatewayRouteTablePropagationsCommandOutput,
} from "./commands/GetTransitGatewayRouteTablePropagationsCommand";
import {
  GetVerifiedAccessEndpointPolicyCommandInput,
  GetVerifiedAccessEndpointPolicyCommandOutput,
} from "./commands/GetVerifiedAccessEndpointPolicyCommand";
import {
  GetVerifiedAccessEndpointTargetsCommandInput,
  GetVerifiedAccessEndpointTargetsCommandOutput,
} from "./commands/GetVerifiedAccessEndpointTargetsCommand";
import {
  GetVerifiedAccessGroupPolicyCommandInput,
  GetVerifiedAccessGroupPolicyCommandOutput,
} from "./commands/GetVerifiedAccessGroupPolicyCommand";
import {
  GetVpnConnectionDeviceSampleConfigurationCommandInput,
  GetVpnConnectionDeviceSampleConfigurationCommandOutput,
} from "./commands/GetVpnConnectionDeviceSampleConfigurationCommand";
import {
  GetVpnConnectionDeviceTypesCommandInput,
  GetVpnConnectionDeviceTypesCommandOutput,
} from "./commands/GetVpnConnectionDeviceTypesCommand";
import {
  GetVpnTunnelReplacementStatusCommandInput,
  GetVpnTunnelReplacementStatusCommandOutput,
} from "./commands/GetVpnTunnelReplacementStatusCommand";
import {
  ImportClientVpnClientCertificateRevocationListCommandInput,
  ImportClientVpnClientCertificateRevocationListCommandOutput,
} from "./commands/ImportClientVpnClientCertificateRevocationListCommand";
import { ImportImageCommandInput, ImportImageCommandOutput } from "./commands/ImportImageCommand";
import { ImportInstanceCommandInput, ImportInstanceCommandOutput } from "./commands/ImportInstanceCommand";
import { ImportKeyPairCommandInput, ImportKeyPairCommandOutput } from "./commands/ImportKeyPairCommand";
import { ImportSnapshotCommandInput, ImportSnapshotCommandOutput } from "./commands/ImportSnapshotCommand";
import { ImportVolumeCommandInput, ImportVolumeCommandOutput } from "./commands/ImportVolumeCommand";
import {
  ListImagesInRecycleBinCommandInput,
  ListImagesInRecycleBinCommandOutput,
} from "./commands/ListImagesInRecycleBinCommand";
import {
  ListSnapshotsInRecycleBinCommandInput,
  ListSnapshotsInRecycleBinCommandOutput,
} from "./commands/ListSnapshotsInRecycleBinCommand";
import { LockSnapshotCommandInput, LockSnapshotCommandOutput } from "./commands/LockSnapshotCommand";
import {
  ModifyAddressAttributeCommandInput,
  ModifyAddressAttributeCommandOutput,
} from "./commands/ModifyAddressAttributeCommand";
import {
  ModifyAvailabilityZoneGroupCommandInput,
  ModifyAvailabilityZoneGroupCommandOutput,
} from "./commands/ModifyAvailabilityZoneGroupCommand";
import {
  ModifyCapacityReservationCommandInput,
  ModifyCapacityReservationCommandOutput,
} from "./commands/ModifyCapacityReservationCommand";
import {
  ModifyCapacityReservationFleetCommandInput,
  ModifyCapacityReservationFleetCommandOutput,
} from "./commands/ModifyCapacityReservationFleetCommand";
import {
  ModifyClientVpnEndpointCommandInput,
  ModifyClientVpnEndpointCommandOutput,
} from "./commands/ModifyClientVpnEndpointCommand";
import {
  ModifyDefaultCreditSpecificationCommandInput,
  ModifyDefaultCreditSpecificationCommandOutput,
} from "./commands/ModifyDefaultCreditSpecificationCommand";
import {
  ModifyEbsDefaultKmsKeyIdCommandInput,
  ModifyEbsDefaultKmsKeyIdCommandOutput,
} from "./commands/ModifyEbsDefaultKmsKeyIdCommand";
import { ModifyFleetCommandInput, ModifyFleetCommandOutput } from "./commands/ModifyFleetCommand";
import {
  ModifyFpgaImageAttributeCommandInput,
  ModifyFpgaImageAttributeCommandOutput,
} from "./commands/ModifyFpgaImageAttributeCommand";
import { ModifyHostsCommandInput, ModifyHostsCommandOutput } from "./commands/ModifyHostsCommand";
import {
  ModifyIdentityIdFormatCommandInput,
  ModifyIdentityIdFormatCommandOutput,
} from "./commands/ModifyIdentityIdFormatCommand";
import { ModifyIdFormatCommandInput, ModifyIdFormatCommandOutput } from "./commands/ModifyIdFormatCommand";
import {
  ModifyImageAttributeCommandInput,
  ModifyImageAttributeCommandOutput,
} from "./commands/ModifyImageAttributeCommand";
import {
  ModifyInstanceAttributeCommandInput,
  ModifyInstanceAttributeCommandOutput,
} from "./commands/ModifyInstanceAttributeCommand";
import {
  ModifyInstanceCapacityReservationAttributesCommandInput,
  ModifyInstanceCapacityReservationAttributesCommandOutput,
} from "./commands/ModifyInstanceCapacityReservationAttributesCommand";
import {
  ModifyInstanceCpuOptionsCommandInput,
  ModifyInstanceCpuOptionsCommandOutput,
} from "./commands/ModifyInstanceCpuOptionsCommand";
import {
  ModifyInstanceCreditSpecificationCommandInput,
  ModifyInstanceCreditSpecificationCommandOutput,
} from "./commands/ModifyInstanceCreditSpecificationCommand";
import {
  ModifyInstanceEventStartTimeCommandInput,
  ModifyInstanceEventStartTimeCommandOutput,
} from "./commands/ModifyInstanceEventStartTimeCommand";
import {
  ModifyInstanceEventWindowCommandInput,
  ModifyInstanceEventWindowCommandOutput,
} from "./commands/ModifyInstanceEventWindowCommand";
import {
  ModifyInstanceMaintenanceOptionsCommandInput,
  ModifyInstanceMaintenanceOptionsCommandOutput,
} from "./commands/ModifyInstanceMaintenanceOptionsCommand";
import {
  ModifyInstanceMetadataDefaultsCommandInput,
  ModifyInstanceMetadataDefaultsCommandOutput,
} from "./commands/ModifyInstanceMetadataDefaultsCommand";
import {
  ModifyInstanceMetadataOptionsCommandInput,
  ModifyInstanceMetadataOptionsCommandOutput,
} from "./commands/ModifyInstanceMetadataOptionsCommand";
import {
  ModifyInstanceNetworkPerformanceOptionsCommandInput,
  ModifyInstanceNetworkPerformanceOptionsCommandOutput,
} from "./commands/ModifyInstanceNetworkPerformanceOptionsCommand";
import {
  ModifyInstancePlacementCommandInput,
  ModifyInstancePlacementCommandOutput,
} from "./commands/ModifyInstancePlacementCommand";
import { ModifyIpamCommandInput, ModifyIpamCommandOutput } from "./commands/ModifyIpamCommand";
import { ModifyIpamPoolCommandInput, ModifyIpamPoolCommandOutput } from "./commands/ModifyIpamPoolCommand";
import {
  ModifyIpamResourceCidrCommandInput,
  ModifyIpamResourceCidrCommandOutput,
} from "./commands/ModifyIpamResourceCidrCommand";
import {
  ModifyIpamResourceDiscoveryCommandInput,
  ModifyIpamResourceDiscoveryCommandOutput,
} from "./commands/ModifyIpamResourceDiscoveryCommand";
import { ModifyIpamScopeCommandInput, ModifyIpamScopeCommandOutput } from "./commands/ModifyIpamScopeCommand";
import {
  ModifyLaunchTemplateCommandInput,
  ModifyLaunchTemplateCommandOutput,
} from "./commands/ModifyLaunchTemplateCommand";
import {
  ModifyLocalGatewayRouteCommandInput,
  ModifyLocalGatewayRouteCommandOutput,
} from "./commands/ModifyLocalGatewayRouteCommand";
import {
  ModifyManagedPrefixListCommandInput,
  ModifyManagedPrefixListCommandOutput,
} from "./commands/ModifyManagedPrefixListCommand";
import {
  ModifyNetworkInterfaceAttributeCommandInput,
  ModifyNetworkInterfaceAttributeCommandOutput,
} from "./commands/ModifyNetworkInterfaceAttributeCommand";
import {
  ModifyPrivateDnsNameOptionsCommandInput,
  ModifyPrivateDnsNameOptionsCommandOutput,
} from "./commands/ModifyPrivateDnsNameOptionsCommand";
import {
  ModifyPublicIpDnsNameOptionsCommandInput,
  ModifyPublicIpDnsNameOptionsCommandOutput,
} from "./commands/ModifyPublicIpDnsNameOptionsCommand";
import {
  ModifyReservedInstancesCommandInput,
  ModifyReservedInstancesCommandOutput,
} from "./commands/ModifyReservedInstancesCommand";
import { ModifyRouteServerCommandInput, ModifyRouteServerCommandOutput } from "./commands/ModifyRouteServerCommand";
import {
  ModifySecurityGroupRulesCommandInput,
  ModifySecurityGroupRulesCommandOutput,
} from "./commands/ModifySecurityGroupRulesCommand";
import {
  ModifySnapshotAttributeCommandInput,
  ModifySnapshotAttributeCommandOutput,
} from "./commands/ModifySnapshotAttributeCommand";
import { ModifySnapshotTierCommandInput, ModifySnapshotTierCommandOutput } from "./commands/ModifySnapshotTierCommand";
import {
  ModifySpotFleetRequestCommandInput,
  ModifySpotFleetRequestCommandOutput,
} from "./commands/ModifySpotFleetRequestCommand";
import {
  ModifySubnetAttributeCommandInput,
  ModifySubnetAttributeCommandOutput,
} from "./commands/ModifySubnetAttributeCommand";
import {
  ModifyTrafficMirrorFilterNetworkServicesCommandInput,
  ModifyTrafficMirrorFilterNetworkServicesCommandOutput,
} from "./commands/ModifyTrafficMirrorFilterNetworkServicesCommand";
import {
  ModifyTrafficMirrorFilterRuleCommandInput,
  ModifyTrafficMirrorFilterRuleCommandOutput,
} from "./commands/ModifyTrafficMirrorFilterRuleCommand";
import {
  ModifyTrafficMirrorSessionCommandInput,
  ModifyTrafficMirrorSessionCommandOutput,
} from "./commands/ModifyTrafficMirrorSessionCommand";
import {
  ModifyTransitGatewayCommandInput,
  ModifyTransitGatewayCommandOutput,
} from "./commands/ModifyTransitGatewayCommand";
import {
  ModifyTransitGatewayPrefixListReferenceCommandInput,
  ModifyTransitGatewayPrefixListReferenceCommandOutput,
} from "./commands/ModifyTransitGatewayPrefixListReferenceCommand";
import {
  ModifyTransitGatewayVpcAttachmentCommandInput,
  ModifyTransitGatewayVpcAttachmentCommandOutput,
} from "./commands/ModifyTransitGatewayVpcAttachmentCommand";
import {
  ModifyVerifiedAccessEndpointCommandInput,
  ModifyVerifiedAccessEndpointCommandOutput,
} from "./commands/ModifyVerifiedAccessEndpointCommand";
import {
  ModifyVerifiedAccessEndpointPolicyCommandInput,
  ModifyVerifiedAccessEndpointPolicyCommandOutput,
} from "./commands/ModifyVerifiedAccessEndpointPolicyCommand";
import {
  ModifyVerifiedAccessGroupCommandInput,
  ModifyVerifiedAccessGroupCommandOutput,
} from "./commands/ModifyVerifiedAccessGroupCommand";
import {
  ModifyVerifiedAccessGroupPolicyCommandInput,
  ModifyVerifiedAccessGroupPolicyCommandOutput,
} from "./commands/ModifyVerifiedAccessGroupPolicyCommand";
import {
  ModifyVerifiedAccessInstanceCommandInput,
  ModifyVerifiedAccessInstanceCommandOutput,
} from "./commands/ModifyVerifiedAccessInstanceCommand";
import {
  ModifyVerifiedAccessInstanceLoggingConfigurationCommandInput,
  ModifyVerifiedAccessInstanceLoggingConfigurationCommandOutput,
} from "./commands/ModifyVerifiedAccessInstanceLoggingConfigurationCommand";
import {
  ModifyVerifiedAccessTrustProviderCommandInput,
  ModifyVerifiedAccessTrustProviderCommandOutput,
} from "./commands/ModifyVerifiedAccessTrustProviderCommand";
import {
  ModifyVolumeAttributeCommandInput,
  ModifyVolumeAttributeCommandOutput,
} from "./commands/ModifyVolumeAttributeCommand";
import { ModifyVolumeCommandInput, ModifyVolumeCommandOutput } from "./commands/ModifyVolumeCommand";
import { ModifyVpcAttributeCommandInput, ModifyVpcAttributeCommandOutput } from "./commands/ModifyVpcAttributeCommand";
import {
  ModifyVpcBlockPublicAccessExclusionCommandInput,
  ModifyVpcBlockPublicAccessExclusionCommandOutput,
} from "./commands/ModifyVpcBlockPublicAccessExclusionCommand";
import {
  ModifyVpcBlockPublicAccessOptionsCommandInput,
  ModifyVpcBlockPublicAccessOptionsCommandOutput,
} from "./commands/ModifyVpcBlockPublicAccessOptionsCommand";
import { ModifyVpcEndpointCommandInput, ModifyVpcEndpointCommandOutput } from "./commands/ModifyVpcEndpointCommand";
import {
  ModifyVpcEndpointConnectionNotificationCommandInput,
  ModifyVpcEndpointConnectionNotificationCommandOutput,
} from "./commands/ModifyVpcEndpointConnectionNotificationCommand";
import {
  ModifyVpcEndpointServiceConfigurationCommandInput,
  ModifyVpcEndpointServiceConfigurationCommandOutput,
} from "./commands/ModifyVpcEndpointServiceConfigurationCommand";
import {
  ModifyVpcEndpointServicePayerResponsibilityCommandInput,
  ModifyVpcEndpointServicePayerResponsibilityCommandOutput,
} from "./commands/ModifyVpcEndpointServicePayerResponsibilityCommand";
import {
  ModifyVpcEndpointServicePermissionsCommandInput,
  ModifyVpcEndpointServicePermissionsCommandOutput,
} from "./commands/ModifyVpcEndpointServicePermissionsCommand";
import {
  ModifyVpcPeeringConnectionOptionsCommandInput,
  ModifyVpcPeeringConnectionOptionsCommandOutput,
} from "./commands/ModifyVpcPeeringConnectionOptionsCommand";
import { ModifyVpcTenancyCommandInput, ModifyVpcTenancyCommandOutput } from "./commands/ModifyVpcTenancyCommand";
import {
  ModifyVpnConnectionCommandInput,
  ModifyVpnConnectionCommandOutput,
} from "./commands/ModifyVpnConnectionCommand";
import {
  ModifyVpnConnectionOptionsCommandInput,
  ModifyVpnConnectionOptionsCommandOutput,
} from "./commands/ModifyVpnConnectionOptionsCommand";
import {
  ModifyVpnTunnelCertificateCommandInput,
  ModifyVpnTunnelCertificateCommandOutput,
} from "./commands/ModifyVpnTunnelCertificateCommand";
import {
  ModifyVpnTunnelOptionsCommandInput,
  ModifyVpnTunnelOptionsCommandOutput,
} from "./commands/ModifyVpnTunnelOptionsCommand";
import { MonitorInstancesCommandInput, MonitorInstancesCommandOutput } from "./commands/MonitorInstancesCommand";
import { MoveAddressToVpcCommandInput, MoveAddressToVpcCommandOutput } from "./commands/MoveAddressToVpcCommand";
import {
  MoveByoipCidrToIpamCommandInput,
  MoveByoipCidrToIpamCommandOutput,
} from "./commands/MoveByoipCidrToIpamCommand";
import {
  MoveCapacityReservationInstancesCommandInput,
  MoveCapacityReservationInstancesCommandOutput,
} from "./commands/MoveCapacityReservationInstancesCommand";
import { ProvisionByoipCidrCommandInput, ProvisionByoipCidrCommandOutput } from "./commands/ProvisionByoipCidrCommand";
import {
  ProvisionIpamByoasnCommandInput,
  ProvisionIpamByoasnCommandOutput,
} from "./commands/ProvisionIpamByoasnCommand";
import {
  ProvisionIpamPoolCidrCommandInput,
  ProvisionIpamPoolCidrCommandOutput,
} from "./commands/ProvisionIpamPoolCidrCommand";
import {
  ProvisionPublicIpv4PoolCidrCommandInput,
  ProvisionPublicIpv4PoolCidrCommandOutput,
} from "./commands/ProvisionPublicIpv4PoolCidrCommand";
import {
  PurchaseCapacityBlockCommandInput,
  PurchaseCapacityBlockCommandOutput,
} from "./commands/PurchaseCapacityBlockCommand";
import {
  PurchaseCapacityBlockExtensionCommandInput,
  PurchaseCapacityBlockExtensionCommandOutput,
} from "./commands/PurchaseCapacityBlockExtensionCommand";
import {
  PurchaseHostReservationCommandInput,
  PurchaseHostReservationCommandOutput,
} from "./commands/PurchaseHostReservationCommand";
import {
  PurchaseReservedInstancesOfferingCommandInput,
  PurchaseReservedInstancesOfferingCommandOutput,
} from "./commands/PurchaseReservedInstancesOfferingCommand";
import {
  PurchaseScheduledInstancesCommandInput,
  PurchaseScheduledInstancesCommandOutput,
} from "./commands/PurchaseScheduledInstancesCommand";
import { RebootInstancesCommandInput, RebootInstancesCommandOutput } from "./commands/RebootInstancesCommand";
import { RegisterImageCommandInput, RegisterImageCommandOutput } from "./commands/RegisterImageCommand";
import {
  RegisterInstanceEventNotificationAttributesCommandInput,
  RegisterInstanceEventNotificationAttributesCommandOutput,
} from "./commands/RegisterInstanceEventNotificationAttributesCommand";
import {
  RegisterTransitGatewayMulticastGroupMembersCommandInput,
  RegisterTransitGatewayMulticastGroupMembersCommandOutput,
} from "./commands/RegisterTransitGatewayMulticastGroupMembersCommand";
import {
  RegisterTransitGatewayMulticastGroupSourcesCommandInput,
  RegisterTransitGatewayMulticastGroupSourcesCommandOutput,
} from "./commands/RegisterTransitGatewayMulticastGroupSourcesCommand";
import {
  RejectCapacityReservationBillingOwnershipCommandInput,
  RejectCapacityReservationBillingOwnershipCommandOutput,
} from "./commands/RejectCapacityReservationBillingOwnershipCommand";
import {
  RejectTransitGatewayMulticastDomainAssociationsCommandInput,
  RejectTransitGatewayMulticastDomainAssociationsCommandOutput,
} from "./commands/RejectTransitGatewayMulticastDomainAssociationsCommand";
import {
  RejectTransitGatewayPeeringAttachmentCommandInput,
  RejectTransitGatewayPeeringAttachmentCommandOutput,
} from "./commands/RejectTransitGatewayPeeringAttachmentCommand";
import {
  RejectTransitGatewayVpcAttachmentCommandInput,
  RejectTransitGatewayVpcAttachmentCommandOutput,
} from "./commands/RejectTransitGatewayVpcAttachmentCommand";
import {
  RejectVpcEndpointConnectionsCommandInput,
  RejectVpcEndpointConnectionsCommandOutput,
} from "./commands/RejectVpcEndpointConnectionsCommand";
import {
  RejectVpcPeeringConnectionCommandInput,
  RejectVpcPeeringConnectionCommandOutput,
} from "./commands/RejectVpcPeeringConnectionCommand";
import { ReleaseAddressCommandInput, ReleaseAddressCommandOutput } from "./commands/ReleaseAddressCommand";
import { ReleaseHostsCommandInput, ReleaseHostsCommandOutput } from "./commands/ReleaseHostsCommand";
import {
  ReleaseIpamPoolAllocationCommandInput,
  ReleaseIpamPoolAllocationCommandOutput,
} from "./commands/ReleaseIpamPoolAllocationCommand";
import {
  ReplaceIamInstanceProfileAssociationCommandInput,
  ReplaceIamInstanceProfileAssociationCommandOutput,
} from "./commands/ReplaceIamInstanceProfileAssociationCommand";
import {
  ReplaceImageCriteriaInAllowedImagesSettingsCommandInput,
  ReplaceImageCriteriaInAllowedImagesSettingsCommandOutput,
} from "./commands/ReplaceImageCriteriaInAllowedImagesSettingsCommand";
import {
  ReplaceNetworkAclAssociationCommandInput,
  ReplaceNetworkAclAssociationCommandOutput,
} from "./commands/ReplaceNetworkAclAssociationCommand";
import {
  ReplaceNetworkAclEntryCommandInput,
  ReplaceNetworkAclEntryCommandOutput,
} from "./commands/ReplaceNetworkAclEntryCommand";
import { ReplaceRouteCommandInput, ReplaceRouteCommandOutput } from "./commands/ReplaceRouteCommand";
import {
  ReplaceRouteTableAssociationCommandInput,
  ReplaceRouteTableAssociationCommandOutput,
} from "./commands/ReplaceRouteTableAssociationCommand";
import {
  ReplaceTransitGatewayRouteCommandInput,
  ReplaceTransitGatewayRouteCommandOutput,
} from "./commands/ReplaceTransitGatewayRouteCommand";
import { ReplaceVpnTunnelCommandInput, ReplaceVpnTunnelCommandOutput } from "./commands/ReplaceVpnTunnelCommand";
import {
  ReportInstanceStatusCommandInput,
  ReportInstanceStatusCommandOutput,
} from "./commands/ReportInstanceStatusCommand";
import { RequestSpotFleetCommandInput, RequestSpotFleetCommandOutput } from "./commands/RequestSpotFleetCommand";
import {
  RequestSpotInstancesCommandInput,
  RequestSpotInstancesCommandOutput,
} from "./commands/RequestSpotInstancesCommand";
import {
  ResetAddressAttributeCommandInput,
  ResetAddressAttributeCommandOutput,
} from "./commands/ResetAddressAttributeCommand";
import {
  ResetEbsDefaultKmsKeyIdCommandInput,
  ResetEbsDefaultKmsKeyIdCommandOutput,
} from "./commands/ResetEbsDefaultKmsKeyIdCommand";
import {
  ResetFpgaImageAttributeCommandInput,
  ResetFpgaImageAttributeCommandOutput,
} from "./commands/ResetFpgaImageAttributeCommand";
import {
  ResetImageAttributeCommandInput,
  ResetImageAttributeCommandOutput,
} from "./commands/ResetImageAttributeCommand";
import {
  ResetInstanceAttributeCommandInput,
  ResetInstanceAttributeCommandOutput,
} from "./commands/ResetInstanceAttributeCommand";
import {
  ResetNetworkInterfaceAttributeCommandInput,
  ResetNetworkInterfaceAttributeCommandOutput,
} from "./commands/ResetNetworkInterfaceAttributeCommand";
import {
  ResetSnapshotAttributeCommandInput,
  ResetSnapshotAttributeCommandOutput,
} from "./commands/ResetSnapshotAttributeCommand";
import {
  RestoreAddressToClassicCommandInput,
  RestoreAddressToClassicCommandOutput,
} from "./commands/RestoreAddressToClassicCommand";
import {
  RestoreImageFromRecycleBinCommandInput,
  RestoreImageFromRecycleBinCommandOutput,
} from "./commands/RestoreImageFromRecycleBinCommand";
import {
  RestoreManagedPrefixListVersionCommandInput,
  RestoreManagedPrefixListVersionCommandOutput,
} from "./commands/RestoreManagedPrefixListVersionCommand";
import {
  RestoreSnapshotFromRecycleBinCommandInput,
  RestoreSnapshotFromRecycleBinCommandOutput,
} from "./commands/RestoreSnapshotFromRecycleBinCommand";
import {
  RestoreSnapshotTierCommandInput,
  RestoreSnapshotTierCommandOutput,
} from "./commands/RestoreSnapshotTierCommand";
import {
  RevokeClientVpnIngressCommandInput,
  RevokeClientVpnIngressCommandOutput,
} from "./commands/RevokeClientVpnIngressCommand";
import {
  RevokeSecurityGroupEgressCommandInput,
  RevokeSecurityGroupEgressCommandOutput,
} from "./commands/RevokeSecurityGroupEgressCommand";
import {
  RevokeSecurityGroupIngressCommandInput,
  RevokeSecurityGroupIngressCommandOutput,
} from "./commands/RevokeSecurityGroupIngressCommand";
import { RunInstancesCommandInput, RunInstancesCommandOutput } from "./commands/RunInstancesCommand";
import {
  RunScheduledInstancesCommandInput,
  RunScheduledInstancesCommandOutput,
} from "./commands/RunScheduledInstancesCommand";
import {
  SearchLocalGatewayRoutesCommandInput,
  SearchLocalGatewayRoutesCommandOutput,
} from "./commands/SearchLocalGatewayRoutesCommand";
import {
  SearchTransitGatewayMulticastGroupsCommandInput,
  SearchTransitGatewayMulticastGroupsCommandOutput,
} from "./commands/SearchTransitGatewayMulticastGroupsCommand";
import {
  SearchTransitGatewayRoutesCommandInput,
  SearchTransitGatewayRoutesCommandOutput,
} from "./commands/SearchTransitGatewayRoutesCommand";
import {
  SendDiagnosticInterruptCommandInput,
  SendDiagnosticInterruptCommandOutput,
} from "./commands/SendDiagnosticInterruptCommand";
import {
  StartDeclarativePoliciesReportCommandInput,
  StartDeclarativePoliciesReportCommandOutput,
} from "./commands/StartDeclarativePoliciesReportCommand";
import { StartInstancesCommandInput, StartInstancesCommandOutput } from "./commands/StartInstancesCommand";
import {
  StartNetworkInsightsAccessScopeAnalysisCommandInput,
  StartNetworkInsightsAccessScopeAnalysisCommandOutput,
} from "./commands/StartNetworkInsightsAccessScopeAnalysisCommand";
import {
  StartNetworkInsightsAnalysisCommandInput,
  StartNetworkInsightsAnalysisCommandOutput,
} from "./commands/StartNetworkInsightsAnalysisCommand";
import {
  StartVpcEndpointServicePrivateDnsVerificationCommandInput,
  StartVpcEndpointServicePrivateDnsVerificationCommandOutput,
} from "./commands/StartVpcEndpointServicePrivateDnsVerificationCommand";
import { StopInstancesCommandInput, StopInstancesCommandOutput } from "./commands/StopInstancesCommand";
import {
  TerminateClientVpnConnectionsCommandInput,
  TerminateClientVpnConnectionsCommandOutput,
} from "./commands/TerminateClientVpnConnectionsCommand";
import { TerminateInstancesCommandInput, TerminateInstancesCommandOutput } from "./commands/TerminateInstancesCommand";
import {
  UnassignIpv6AddressesCommandInput,
  UnassignIpv6AddressesCommandOutput,
} from "./commands/UnassignIpv6AddressesCommand";
import {
  UnassignPrivateIpAddressesCommandInput,
  UnassignPrivateIpAddressesCommandOutput,
} from "./commands/UnassignPrivateIpAddressesCommand";
import {
  UnassignPrivateNatGatewayAddressCommandInput,
  UnassignPrivateNatGatewayAddressCommandOutput,
} from "./commands/UnassignPrivateNatGatewayAddressCommand";
import { UnlockSnapshotCommandInput, UnlockSnapshotCommandOutput } from "./commands/UnlockSnapshotCommand";
import { UnmonitorInstancesCommandInput, UnmonitorInstancesCommandOutput } from "./commands/UnmonitorInstancesCommand";
import {
  UpdateSecurityGroupRuleDescriptionsEgressCommandInput,
  UpdateSecurityGroupRuleDescriptionsEgressCommandOutput,
} from "./commands/UpdateSecurityGroupRuleDescriptionsEgressCommand";
import {
  UpdateSecurityGroupRuleDescriptionsIngressCommandInput,
  UpdateSecurityGroupRuleDescriptionsIngressCommandOutput,
} from "./commands/UpdateSecurityGroupRuleDescriptionsIngressCommand";
import { WithdrawByoipCidrCommandInput, WithdrawByoipCidrCommandOutput } from "./commands/WithdrawByoipCidrCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

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
  | CreateInstanceConnectEndpointCommandInput
  | CreateInstanceEventWindowCommandInput
  | CreateInstanceExportTaskCommandInput
  | CreateInternetGatewayCommandInput
  | CreateIpamCommandInput
  | CreateIpamExternalResourceVerificationTokenCommandInput
  | CreateIpamPoolCommandInput
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
  | CreateVpcEndpointCommandInput
  | CreateVpcEndpointConnectionNotificationCommandInput
  | CreateVpcEndpointServiceConfigurationCommandInput
  | CreateVpcPeeringConnectionCommandInput
  | CreateVpnConnectionCommandInput
  | CreateVpnConnectionRouteCommandInput
  | CreateVpnGatewayCommandInput
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
  | DeleteInstanceConnectEndpointCommandInput
  | DeleteInstanceEventWindowCommandInput
  | DeleteInternetGatewayCommandInput
  | DeleteIpamCommandInput
  | DeleteIpamExternalResourceVerificationTokenCommandInput
  | DeleteIpamPoolCommandInput
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
  | DeleteVpcEndpointConnectionNotificationsCommandInput
  | DeleteVpcEndpointServiceConfigurationsCommandInput
  | DeleteVpcEndpointsCommandInput
  | DeleteVpcPeeringConnectionCommandInput
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
  | DescribeCapacityReservationBillingRequestsCommandInput
  | DescribeCapacityReservationFleetsCommandInput
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
  | DescribeImagesCommandInput
  | DescribeImportImageTasksCommandInput
  | DescribeImportSnapshotTasksCommandInput
  | DescribeInstanceAttributeCommandInput
  | DescribeInstanceConnectEndpointsCommandInput
  | DescribeInstanceCreditSpecificationsCommandInput
  | DescribeInstanceEventNotificationAttributesCommandInput
  | DescribeInstanceEventWindowsCommandInput
  | DescribeInstanceImageMetadataCommandInput
  | DescribeInstanceStatusCommandInput
  | DescribeInstanceTopologyCommandInput
  | DescribeInstanceTypeOfferingsCommandInput
  | DescribeInstanceTypesCommandInput
  | DescribeInstancesCommandInput
  | DescribeInternetGatewaysCommandInput
  | DescribeIpamByoasnCommandInput
  | DescribeIpamExternalResourceVerificationTokensCommandInput
  | DescribeIpamPoolsCommandInput
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
  | DescribeVpcEndpointAssociationsCommandInput
  | DescribeVpcEndpointConnectionNotificationsCommandInput
  | DescribeVpcEndpointConnectionsCommandInput
  | DescribeVpcEndpointServiceConfigurationsCommandInput
  | DescribeVpcEndpointServicePermissionsCommandInput
  | DescribeVpcEndpointServicesCommandInput
  | DescribeVpcEndpointsCommandInput
  | DescribeVpcPeeringConnectionsCommandInput
  | DescribeVpcsCommandInput
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
  | DisableEbsEncryptionByDefaultCommandInput
  | DisableFastLaunchCommandInput
  | DisableFastSnapshotRestoresCommandInput
  | DisableImageBlockPublicAccessCommandInput
  | DisableImageCommandInput
  | DisableImageDeprecationCommandInput
  | DisableImageDeregistrationProtectionCommandInput
  | DisableIpamOrganizationAdminAccountCommandInput
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
  | EnableEbsEncryptionByDefaultCommandInput
  | EnableFastLaunchCommandInput
  | EnableFastSnapshotRestoresCommandInput
  | EnableImageBlockPublicAccessCommandInput
  | EnableImageCommandInput
  | EnableImageDeprecationCommandInput
  | EnableImageDeregistrationProtectionCommandInput
  | EnableIpamOrganizationAdminAccountCommandInput
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
  | GetCapacityReservationUsageCommandInput
  | GetCoipPoolUsageCommandInput
  | GetConsoleOutputCommandInput
  | GetConsoleScreenshotCommandInput
  | GetDeclarativePoliciesReportSummaryCommandInput
  | GetDefaultCreditSpecificationCommandInput
  | GetEbsDefaultKmsKeyIdCommandInput
  | GetEbsEncryptionByDefaultCommandInput
  | GetFlowLogsIntegrationTemplateCommandInput
  | GetGroupsForCapacityReservationCommandInput
  | GetHostReservationPurchasePreviewCommandInput
  | GetImageBlockPublicAccessStateCommandInput
  | GetInstanceMetadataDefaultsCommandInput
  | GetInstanceTpmEkPubCommandInput
  | GetInstanceTypesFromInstanceRequirementsCommandInput
  | GetInstanceUefiDataCommandInput
  | GetIpamAddressHistoryCommandInput
  | GetIpamDiscoveredAccountsCommandInput
  | GetIpamDiscoveredPublicAddressesCommandInput
  | GetIpamDiscoveredResourceCidrsCommandInput
  | GetIpamPoolAllocationsCommandInput
  | GetIpamPoolCidrsCommandInput
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
  | GetTransitGatewayMulticastDomainAssociationsCommandInput
  | GetTransitGatewayPolicyTableAssociationsCommandInput
  | GetTransitGatewayPolicyTableEntriesCommandInput
  | GetTransitGatewayPrefixListReferencesCommandInput
  | GetTransitGatewayRouteTableAssociationsCommandInput
  | GetTransitGatewayRouteTablePropagationsCommandInput
  | GetVerifiedAccessEndpointPolicyCommandInput
  | GetVerifiedAccessEndpointTargetsCommandInput
  | GetVerifiedAccessGroupPolicyCommandInput
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
  | ModifyIpamPoolCommandInput
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
  | CreateInstanceConnectEndpointCommandOutput
  | CreateInstanceEventWindowCommandOutput
  | CreateInstanceExportTaskCommandOutput
  | CreateInternetGatewayCommandOutput
  | CreateIpamCommandOutput
  | CreateIpamExternalResourceVerificationTokenCommandOutput
  | CreateIpamPoolCommandOutput
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
  | CreateVpcEndpointCommandOutput
  | CreateVpcEndpointConnectionNotificationCommandOutput
  | CreateVpcEndpointServiceConfigurationCommandOutput
  | CreateVpcPeeringConnectionCommandOutput
  | CreateVpnConnectionCommandOutput
  | CreateVpnConnectionRouteCommandOutput
  | CreateVpnGatewayCommandOutput
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
  | DeleteInstanceConnectEndpointCommandOutput
  | DeleteInstanceEventWindowCommandOutput
  | DeleteInternetGatewayCommandOutput
  | DeleteIpamCommandOutput
  | DeleteIpamExternalResourceVerificationTokenCommandOutput
  | DeleteIpamPoolCommandOutput
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
  | DeleteVpcEndpointConnectionNotificationsCommandOutput
  | DeleteVpcEndpointServiceConfigurationsCommandOutput
  | DeleteVpcEndpointsCommandOutput
  | DeleteVpcPeeringConnectionCommandOutput
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
  | DescribeCapacityReservationBillingRequestsCommandOutput
  | DescribeCapacityReservationFleetsCommandOutput
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
  | DescribeImagesCommandOutput
  | DescribeImportImageTasksCommandOutput
  | DescribeImportSnapshotTasksCommandOutput
  | DescribeInstanceAttributeCommandOutput
  | DescribeInstanceConnectEndpointsCommandOutput
  | DescribeInstanceCreditSpecificationsCommandOutput
  | DescribeInstanceEventNotificationAttributesCommandOutput
  | DescribeInstanceEventWindowsCommandOutput
  | DescribeInstanceImageMetadataCommandOutput
  | DescribeInstanceStatusCommandOutput
  | DescribeInstanceTopologyCommandOutput
  | DescribeInstanceTypeOfferingsCommandOutput
  | DescribeInstanceTypesCommandOutput
  | DescribeInstancesCommandOutput
  | DescribeInternetGatewaysCommandOutput
  | DescribeIpamByoasnCommandOutput
  | DescribeIpamExternalResourceVerificationTokensCommandOutput
  | DescribeIpamPoolsCommandOutput
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
  | DescribeVpcEndpointAssociationsCommandOutput
  | DescribeVpcEndpointConnectionNotificationsCommandOutput
  | DescribeVpcEndpointConnectionsCommandOutput
  | DescribeVpcEndpointServiceConfigurationsCommandOutput
  | DescribeVpcEndpointServicePermissionsCommandOutput
  | DescribeVpcEndpointServicesCommandOutput
  | DescribeVpcEndpointsCommandOutput
  | DescribeVpcPeeringConnectionsCommandOutput
  | DescribeVpcsCommandOutput
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
  | DisableEbsEncryptionByDefaultCommandOutput
  | DisableFastLaunchCommandOutput
  | DisableFastSnapshotRestoresCommandOutput
  | DisableImageBlockPublicAccessCommandOutput
  | DisableImageCommandOutput
  | DisableImageDeprecationCommandOutput
  | DisableImageDeregistrationProtectionCommandOutput
  | DisableIpamOrganizationAdminAccountCommandOutput
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
  | EnableEbsEncryptionByDefaultCommandOutput
  | EnableFastLaunchCommandOutput
  | EnableFastSnapshotRestoresCommandOutput
  | EnableImageBlockPublicAccessCommandOutput
  | EnableImageCommandOutput
  | EnableImageDeprecationCommandOutput
  | EnableImageDeregistrationProtectionCommandOutput
  | EnableIpamOrganizationAdminAccountCommandOutput
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
  | GetCapacityReservationUsageCommandOutput
  | GetCoipPoolUsageCommandOutput
  | GetConsoleOutputCommandOutput
  | GetConsoleScreenshotCommandOutput
  | GetDeclarativePoliciesReportSummaryCommandOutput
  | GetDefaultCreditSpecificationCommandOutput
  | GetEbsDefaultKmsKeyIdCommandOutput
  | GetEbsEncryptionByDefaultCommandOutput
  | GetFlowLogsIntegrationTemplateCommandOutput
  | GetGroupsForCapacityReservationCommandOutput
  | GetHostReservationPurchasePreviewCommandOutput
  | GetImageBlockPublicAccessStateCommandOutput
  | GetInstanceMetadataDefaultsCommandOutput
  | GetInstanceTpmEkPubCommandOutput
  | GetInstanceTypesFromInstanceRequirementsCommandOutput
  | GetInstanceUefiDataCommandOutput
  | GetIpamAddressHistoryCommandOutput
  | GetIpamDiscoveredAccountsCommandOutput
  | GetIpamDiscoveredPublicAddressesCommandOutput
  | GetIpamDiscoveredResourceCidrsCommandOutput
  | GetIpamPoolAllocationsCommandOutput
  | GetIpamPoolCidrsCommandOutput
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
  | GetTransitGatewayMulticastDomainAssociationsCommandOutput
  | GetTransitGatewayPolicyTableAssociationsCommandOutput
  | GetTransitGatewayPolicyTableEntriesCommandOutput
  | GetTransitGatewayPrefixListReferencesCommandOutput
  | GetTransitGatewayRouteTableAssociationsCommandOutput
  | GetTransitGatewayRouteTablePropagationsCommandOutput
  | GetVerifiedAccessEndpointPolicyCommandOutput
  | GetVerifiedAccessEndpointTargetsCommandOutput
  | GetVerifiedAccessGroupPolicyCommandOutput
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
  | ModifyIpamPoolCommandOutput
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
  defaultUserAgentProvider?: Provider<__UserAgent>;

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
