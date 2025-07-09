// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AcceptAddressTransferCommand,
  AcceptAddressTransferCommandInput,
  AcceptAddressTransferCommandOutput,
} from "./commands/AcceptAddressTransferCommand";
import {
  AcceptCapacityReservationBillingOwnershipCommand,
  AcceptCapacityReservationBillingOwnershipCommandInput,
  AcceptCapacityReservationBillingOwnershipCommandOutput,
} from "./commands/AcceptCapacityReservationBillingOwnershipCommand";
import {
  AcceptReservedInstancesExchangeQuoteCommand,
  AcceptReservedInstancesExchangeQuoteCommandInput,
  AcceptReservedInstancesExchangeQuoteCommandOutput,
} from "./commands/AcceptReservedInstancesExchangeQuoteCommand";
import {
  AcceptTransitGatewayMulticastDomainAssociationsCommand,
  AcceptTransitGatewayMulticastDomainAssociationsCommandInput,
  AcceptTransitGatewayMulticastDomainAssociationsCommandOutput,
} from "./commands/AcceptTransitGatewayMulticastDomainAssociationsCommand";
import {
  AcceptTransitGatewayPeeringAttachmentCommand,
  AcceptTransitGatewayPeeringAttachmentCommandInput,
  AcceptTransitGatewayPeeringAttachmentCommandOutput,
} from "./commands/AcceptTransitGatewayPeeringAttachmentCommand";
import {
  AcceptTransitGatewayVpcAttachmentCommand,
  AcceptTransitGatewayVpcAttachmentCommandInput,
  AcceptTransitGatewayVpcAttachmentCommandOutput,
} from "./commands/AcceptTransitGatewayVpcAttachmentCommand";
import {
  AcceptVpcEndpointConnectionsCommand,
  AcceptVpcEndpointConnectionsCommandInput,
  AcceptVpcEndpointConnectionsCommandOutput,
} from "./commands/AcceptVpcEndpointConnectionsCommand";
import {
  AcceptVpcPeeringConnectionCommand,
  AcceptVpcPeeringConnectionCommandInput,
  AcceptVpcPeeringConnectionCommandOutput,
} from "./commands/AcceptVpcPeeringConnectionCommand";
import {
  AdvertiseByoipCidrCommand,
  AdvertiseByoipCidrCommandInput,
  AdvertiseByoipCidrCommandOutput,
} from "./commands/AdvertiseByoipCidrCommand";
import {
  AllocateAddressCommand,
  AllocateAddressCommandInput,
  AllocateAddressCommandOutput,
} from "./commands/AllocateAddressCommand";
import {
  AllocateHostsCommand,
  AllocateHostsCommandInput,
  AllocateHostsCommandOutput,
} from "./commands/AllocateHostsCommand";
import {
  AllocateIpamPoolCidrCommand,
  AllocateIpamPoolCidrCommandInput,
  AllocateIpamPoolCidrCommandOutput,
} from "./commands/AllocateIpamPoolCidrCommand";
import {
  ApplySecurityGroupsToClientVpnTargetNetworkCommand,
  ApplySecurityGroupsToClientVpnTargetNetworkCommandInput,
  ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput,
} from "./commands/ApplySecurityGroupsToClientVpnTargetNetworkCommand";
import {
  AssignIpv6AddressesCommand,
  AssignIpv6AddressesCommandInput,
  AssignIpv6AddressesCommandOutput,
} from "./commands/AssignIpv6AddressesCommand";
import {
  AssignPrivateIpAddressesCommand,
  AssignPrivateIpAddressesCommandInput,
  AssignPrivateIpAddressesCommandOutput,
} from "./commands/AssignPrivateIpAddressesCommand";
import {
  AssignPrivateNatGatewayAddressCommand,
  AssignPrivateNatGatewayAddressCommandInput,
  AssignPrivateNatGatewayAddressCommandOutput,
} from "./commands/AssignPrivateNatGatewayAddressCommand";
import {
  AssociateAddressCommand,
  AssociateAddressCommandInput,
  AssociateAddressCommandOutput,
} from "./commands/AssociateAddressCommand";
import {
  AssociateCapacityReservationBillingOwnerCommand,
  AssociateCapacityReservationBillingOwnerCommandInput,
  AssociateCapacityReservationBillingOwnerCommandOutput,
} from "./commands/AssociateCapacityReservationBillingOwnerCommand";
import {
  AssociateClientVpnTargetNetworkCommand,
  AssociateClientVpnTargetNetworkCommandInput,
  AssociateClientVpnTargetNetworkCommandOutput,
} from "./commands/AssociateClientVpnTargetNetworkCommand";
import {
  AssociateDhcpOptionsCommand,
  AssociateDhcpOptionsCommandInput,
  AssociateDhcpOptionsCommandOutput,
} from "./commands/AssociateDhcpOptionsCommand";
import {
  AssociateEnclaveCertificateIamRoleCommand,
  AssociateEnclaveCertificateIamRoleCommandInput,
  AssociateEnclaveCertificateIamRoleCommandOutput,
} from "./commands/AssociateEnclaveCertificateIamRoleCommand";
import {
  AssociateIamInstanceProfileCommand,
  AssociateIamInstanceProfileCommandInput,
  AssociateIamInstanceProfileCommandOutput,
} from "./commands/AssociateIamInstanceProfileCommand";
import {
  AssociateInstanceEventWindowCommand,
  AssociateInstanceEventWindowCommandInput,
  AssociateInstanceEventWindowCommandOutput,
} from "./commands/AssociateInstanceEventWindowCommand";
import {
  AssociateIpamByoasnCommand,
  AssociateIpamByoasnCommandInput,
  AssociateIpamByoasnCommandOutput,
} from "./commands/AssociateIpamByoasnCommand";
import {
  AssociateIpamResourceDiscoveryCommand,
  AssociateIpamResourceDiscoveryCommandInput,
  AssociateIpamResourceDiscoveryCommandOutput,
} from "./commands/AssociateIpamResourceDiscoveryCommand";
import {
  AssociateNatGatewayAddressCommand,
  AssociateNatGatewayAddressCommandInput,
  AssociateNatGatewayAddressCommandOutput,
} from "./commands/AssociateNatGatewayAddressCommand";
import {
  AssociateRouteServerCommand,
  AssociateRouteServerCommandInput,
  AssociateRouteServerCommandOutput,
} from "./commands/AssociateRouteServerCommand";
import {
  AssociateRouteTableCommand,
  AssociateRouteTableCommandInput,
  AssociateRouteTableCommandOutput,
} from "./commands/AssociateRouteTableCommand";
import {
  AssociateSecurityGroupVpcCommand,
  AssociateSecurityGroupVpcCommandInput,
  AssociateSecurityGroupVpcCommandOutput,
} from "./commands/AssociateSecurityGroupVpcCommand";
import {
  AssociateSubnetCidrBlockCommand,
  AssociateSubnetCidrBlockCommandInput,
  AssociateSubnetCidrBlockCommandOutput,
} from "./commands/AssociateSubnetCidrBlockCommand";
import {
  AssociateTransitGatewayMulticastDomainCommand,
  AssociateTransitGatewayMulticastDomainCommandInput,
  AssociateTransitGatewayMulticastDomainCommandOutput,
} from "./commands/AssociateTransitGatewayMulticastDomainCommand";
import {
  AssociateTransitGatewayPolicyTableCommand,
  AssociateTransitGatewayPolicyTableCommandInput,
  AssociateTransitGatewayPolicyTableCommandOutput,
} from "./commands/AssociateTransitGatewayPolicyTableCommand";
import {
  AssociateTransitGatewayRouteTableCommand,
  AssociateTransitGatewayRouteTableCommandInput,
  AssociateTransitGatewayRouteTableCommandOutput,
} from "./commands/AssociateTransitGatewayRouteTableCommand";
import {
  AssociateTrunkInterfaceCommand,
  AssociateTrunkInterfaceCommandInput,
  AssociateTrunkInterfaceCommandOutput,
} from "./commands/AssociateTrunkInterfaceCommand";
import {
  AssociateVpcCidrBlockCommand,
  AssociateVpcCidrBlockCommandInput,
  AssociateVpcCidrBlockCommandOutput,
} from "./commands/AssociateVpcCidrBlockCommand";
import {
  AttachClassicLinkVpcCommand,
  AttachClassicLinkVpcCommandInput,
  AttachClassicLinkVpcCommandOutput,
} from "./commands/AttachClassicLinkVpcCommand";
import {
  AttachInternetGatewayCommand,
  AttachInternetGatewayCommandInput,
  AttachInternetGatewayCommandOutput,
} from "./commands/AttachInternetGatewayCommand";
import {
  AttachNetworkInterfaceCommand,
  AttachNetworkInterfaceCommandInput,
  AttachNetworkInterfaceCommandOutput,
} from "./commands/AttachNetworkInterfaceCommand";
import {
  AttachVerifiedAccessTrustProviderCommand,
  AttachVerifiedAccessTrustProviderCommandInput,
  AttachVerifiedAccessTrustProviderCommandOutput,
} from "./commands/AttachVerifiedAccessTrustProviderCommand";
import {
  AttachVolumeCommand,
  AttachVolumeCommandInput,
  AttachVolumeCommandOutput,
} from "./commands/AttachVolumeCommand";
import {
  AttachVpnGatewayCommand,
  AttachVpnGatewayCommandInput,
  AttachVpnGatewayCommandOutput,
} from "./commands/AttachVpnGatewayCommand";
import {
  AuthorizeClientVpnIngressCommand,
  AuthorizeClientVpnIngressCommandInput,
  AuthorizeClientVpnIngressCommandOutput,
} from "./commands/AuthorizeClientVpnIngressCommand";
import {
  AuthorizeSecurityGroupEgressCommand,
  AuthorizeSecurityGroupEgressCommandInput,
  AuthorizeSecurityGroupEgressCommandOutput,
} from "./commands/AuthorizeSecurityGroupEgressCommand";
import {
  AuthorizeSecurityGroupIngressCommand,
  AuthorizeSecurityGroupIngressCommandInput,
  AuthorizeSecurityGroupIngressCommandOutput,
} from "./commands/AuthorizeSecurityGroupIngressCommand";
import {
  BundleInstanceCommand,
  BundleInstanceCommandInput,
  BundleInstanceCommandOutput,
} from "./commands/BundleInstanceCommand";
import {
  CancelBundleTaskCommand,
  CancelBundleTaskCommandInput,
  CancelBundleTaskCommandOutput,
} from "./commands/CancelBundleTaskCommand";
import {
  CancelCapacityReservationCommand,
  CancelCapacityReservationCommandInput,
  CancelCapacityReservationCommandOutput,
} from "./commands/CancelCapacityReservationCommand";
import {
  CancelCapacityReservationFleetsCommand,
  CancelCapacityReservationFleetsCommandInput,
  CancelCapacityReservationFleetsCommandOutput,
} from "./commands/CancelCapacityReservationFleetsCommand";
import {
  CancelConversionTaskCommand,
  CancelConversionTaskCommandInput,
  CancelConversionTaskCommandOutput,
} from "./commands/CancelConversionTaskCommand";
import {
  CancelDeclarativePoliciesReportCommand,
  CancelDeclarativePoliciesReportCommandInput,
  CancelDeclarativePoliciesReportCommandOutput,
} from "./commands/CancelDeclarativePoliciesReportCommand";
import {
  CancelExportTaskCommand,
  CancelExportTaskCommandInput,
  CancelExportTaskCommandOutput,
} from "./commands/CancelExportTaskCommand";
import {
  CancelImageLaunchPermissionCommand,
  CancelImageLaunchPermissionCommandInput,
  CancelImageLaunchPermissionCommandOutput,
} from "./commands/CancelImageLaunchPermissionCommand";
import {
  CancelImportTaskCommand,
  CancelImportTaskCommandInput,
  CancelImportTaskCommandOutput,
} from "./commands/CancelImportTaskCommand";
import {
  CancelReservedInstancesListingCommand,
  CancelReservedInstancesListingCommandInput,
  CancelReservedInstancesListingCommandOutput,
} from "./commands/CancelReservedInstancesListingCommand";
import {
  CancelSpotFleetRequestsCommand,
  CancelSpotFleetRequestsCommandInput,
  CancelSpotFleetRequestsCommandOutput,
} from "./commands/CancelSpotFleetRequestsCommand";
import {
  CancelSpotInstanceRequestsCommand,
  CancelSpotInstanceRequestsCommandInput,
  CancelSpotInstanceRequestsCommandOutput,
} from "./commands/CancelSpotInstanceRequestsCommand";
import {
  ConfirmProductInstanceCommand,
  ConfirmProductInstanceCommandInput,
  ConfirmProductInstanceCommandOutput,
} from "./commands/ConfirmProductInstanceCommand";
import {
  CopyFpgaImageCommand,
  CopyFpgaImageCommandInput,
  CopyFpgaImageCommandOutput,
} from "./commands/CopyFpgaImageCommand";
import { CopyImageCommand, CopyImageCommandInput, CopyImageCommandOutput } from "./commands/CopyImageCommand";
import {
  CopySnapshotCommand,
  CopySnapshotCommandInput,
  CopySnapshotCommandOutput,
} from "./commands/CopySnapshotCommand";
import {
  CreateCapacityReservationBySplittingCommand,
  CreateCapacityReservationBySplittingCommandInput,
  CreateCapacityReservationBySplittingCommandOutput,
} from "./commands/CreateCapacityReservationBySplittingCommand";
import {
  CreateCapacityReservationCommand,
  CreateCapacityReservationCommandInput,
  CreateCapacityReservationCommandOutput,
} from "./commands/CreateCapacityReservationCommand";
import {
  CreateCapacityReservationFleetCommand,
  CreateCapacityReservationFleetCommandInput,
  CreateCapacityReservationFleetCommandOutput,
} from "./commands/CreateCapacityReservationFleetCommand";
import {
  CreateCarrierGatewayCommand,
  CreateCarrierGatewayCommandInput,
  CreateCarrierGatewayCommandOutput,
} from "./commands/CreateCarrierGatewayCommand";
import {
  CreateClientVpnEndpointCommand,
  CreateClientVpnEndpointCommandInput,
  CreateClientVpnEndpointCommandOutput,
} from "./commands/CreateClientVpnEndpointCommand";
import {
  CreateClientVpnRouteCommand,
  CreateClientVpnRouteCommandInput,
  CreateClientVpnRouteCommandOutput,
} from "./commands/CreateClientVpnRouteCommand";
import {
  CreateCoipCidrCommand,
  CreateCoipCidrCommandInput,
  CreateCoipCidrCommandOutput,
} from "./commands/CreateCoipCidrCommand";
import {
  CreateCoipPoolCommand,
  CreateCoipPoolCommandInput,
  CreateCoipPoolCommandOutput,
} from "./commands/CreateCoipPoolCommand";
import {
  CreateCustomerGatewayCommand,
  CreateCustomerGatewayCommandInput,
  CreateCustomerGatewayCommandOutput,
} from "./commands/CreateCustomerGatewayCommand";
import {
  CreateDefaultSubnetCommand,
  CreateDefaultSubnetCommandInput,
  CreateDefaultSubnetCommandOutput,
} from "./commands/CreateDefaultSubnetCommand";
import {
  CreateDefaultVpcCommand,
  CreateDefaultVpcCommandInput,
  CreateDefaultVpcCommandOutput,
} from "./commands/CreateDefaultVpcCommand";
import {
  CreateDelegateMacVolumeOwnershipTaskCommand,
  CreateDelegateMacVolumeOwnershipTaskCommandInput,
  CreateDelegateMacVolumeOwnershipTaskCommandOutput,
} from "./commands/CreateDelegateMacVolumeOwnershipTaskCommand";
import {
  CreateDhcpOptionsCommand,
  CreateDhcpOptionsCommandInput,
  CreateDhcpOptionsCommandOutput,
} from "./commands/CreateDhcpOptionsCommand";
import {
  CreateEgressOnlyInternetGatewayCommand,
  CreateEgressOnlyInternetGatewayCommandInput,
  CreateEgressOnlyInternetGatewayCommandOutput,
} from "./commands/CreateEgressOnlyInternetGatewayCommand";
import { CreateFleetCommand, CreateFleetCommandInput, CreateFleetCommandOutput } from "./commands/CreateFleetCommand";
import {
  CreateFlowLogsCommand,
  CreateFlowLogsCommandInput,
  CreateFlowLogsCommandOutput,
} from "./commands/CreateFlowLogsCommand";
import {
  CreateFpgaImageCommand,
  CreateFpgaImageCommandInput,
  CreateFpgaImageCommandOutput,
} from "./commands/CreateFpgaImageCommand";
import { CreateImageCommand, CreateImageCommandInput, CreateImageCommandOutput } from "./commands/CreateImageCommand";
import {
  CreateInstanceConnectEndpointCommand,
  CreateInstanceConnectEndpointCommandInput,
  CreateInstanceConnectEndpointCommandOutput,
} from "./commands/CreateInstanceConnectEndpointCommand";
import {
  CreateInstanceEventWindowCommand,
  CreateInstanceEventWindowCommandInput,
  CreateInstanceEventWindowCommandOutput,
} from "./commands/CreateInstanceEventWindowCommand";
import {
  CreateInstanceExportTaskCommand,
  CreateInstanceExportTaskCommandInput,
  CreateInstanceExportTaskCommandOutput,
} from "./commands/CreateInstanceExportTaskCommand";
import {
  CreateInternetGatewayCommand,
  CreateInternetGatewayCommandInput,
  CreateInternetGatewayCommandOutput,
} from "./commands/CreateInternetGatewayCommand";
import { CreateIpamCommand, CreateIpamCommandInput, CreateIpamCommandOutput } from "./commands/CreateIpamCommand";
import {
  CreateIpamExternalResourceVerificationTokenCommand,
  CreateIpamExternalResourceVerificationTokenCommandInput,
  CreateIpamExternalResourceVerificationTokenCommandOutput,
} from "./commands/CreateIpamExternalResourceVerificationTokenCommand";
import {
  CreateIpamPoolCommand,
  CreateIpamPoolCommandInput,
  CreateIpamPoolCommandOutput,
} from "./commands/CreateIpamPoolCommand";
import {
  CreateIpamResourceDiscoveryCommand,
  CreateIpamResourceDiscoveryCommandInput,
  CreateIpamResourceDiscoveryCommandOutput,
} from "./commands/CreateIpamResourceDiscoveryCommand";
import {
  CreateIpamScopeCommand,
  CreateIpamScopeCommandInput,
  CreateIpamScopeCommandOutput,
} from "./commands/CreateIpamScopeCommand";
import {
  CreateKeyPairCommand,
  CreateKeyPairCommandInput,
  CreateKeyPairCommandOutput,
} from "./commands/CreateKeyPairCommand";
import {
  CreateLaunchTemplateCommand,
  CreateLaunchTemplateCommandInput,
  CreateLaunchTemplateCommandOutput,
} from "./commands/CreateLaunchTemplateCommand";
import {
  CreateLaunchTemplateVersionCommand,
  CreateLaunchTemplateVersionCommandInput,
  CreateLaunchTemplateVersionCommandOutput,
} from "./commands/CreateLaunchTemplateVersionCommand";
import {
  CreateLocalGatewayRouteCommand,
  CreateLocalGatewayRouteCommandInput,
  CreateLocalGatewayRouteCommandOutput,
} from "./commands/CreateLocalGatewayRouteCommand";
import {
  CreateLocalGatewayRouteTableCommand,
  CreateLocalGatewayRouteTableCommandInput,
  CreateLocalGatewayRouteTableCommandOutput,
} from "./commands/CreateLocalGatewayRouteTableCommand";
import {
  CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand,
  CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput,
  CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput,
} from "./commands/CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand";
import {
  CreateLocalGatewayRouteTableVpcAssociationCommand,
  CreateLocalGatewayRouteTableVpcAssociationCommandInput,
  CreateLocalGatewayRouteTableVpcAssociationCommandOutput,
} from "./commands/CreateLocalGatewayRouteTableVpcAssociationCommand";
import {
  CreateLocalGatewayVirtualInterfaceCommand,
  CreateLocalGatewayVirtualInterfaceCommandInput,
  CreateLocalGatewayVirtualInterfaceCommandOutput,
} from "./commands/CreateLocalGatewayVirtualInterfaceCommand";
import {
  CreateLocalGatewayVirtualInterfaceGroupCommand,
  CreateLocalGatewayVirtualInterfaceGroupCommandInput,
  CreateLocalGatewayVirtualInterfaceGroupCommandOutput,
} from "./commands/CreateLocalGatewayVirtualInterfaceGroupCommand";
import {
  CreateMacSystemIntegrityProtectionModificationTaskCommand,
  CreateMacSystemIntegrityProtectionModificationTaskCommandInput,
  CreateMacSystemIntegrityProtectionModificationTaskCommandOutput,
} from "./commands/CreateMacSystemIntegrityProtectionModificationTaskCommand";
import {
  CreateManagedPrefixListCommand,
  CreateManagedPrefixListCommandInput,
  CreateManagedPrefixListCommandOutput,
} from "./commands/CreateManagedPrefixListCommand";
import {
  CreateNatGatewayCommand,
  CreateNatGatewayCommandInput,
  CreateNatGatewayCommandOutput,
} from "./commands/CreateNatGatewayCommand";
import {
  CreateNetworkAclCommand,
  CreateNetworkAclCommandInput,
  CreateNetworkAclCommandOutput,
} from "./commands/CreateNetworkAclCommand";
import {
  CreateNetworkAclEntryCommand,
  CreateNetworkAclEntryCommandInput,
  CreateNetworkAclEntryCommandOutput,
} from "./commands/CreateNetworkAclEntryCommand";
import {
  CreateNetworkInsightsAccessScopeCommand,
  CreateNetworkInsightsAccessScopeCommandInput,
  CreateNetworkInsightsAccessScopeCommandOutput,
} from "./commands/CreateNetworkInsightsAccessScopeCommand";
import {
  CreateNetworkInsightsPathCommand,
  CreateNetworkInsightsPathCommandInput,
  CreateNetworkInsightsPathCommandOutput,
} from "./commands/CreateNetworkInsightsPathCommand";
import {
  CreateNetworkInterfaceCommand,
  CreateNetworkInterfaceCommandInput,
  CreateNetworkInterfaceCommandOutput,
} from "./commands/CreateNetworkInterfaceCommand";
import {
  CreateNetworkInterfacePermissionCommand,
  CreateNetworkInterfacePermissionCommandInput,
  CreateNetworkInterfacePermissionCommandOutput,
} from "./commands/CreateNetworkInterfacePermissionCommand";
import {
  CreatePlacementGroupCommand,
  CreatePlacementGroupCommandInput,
  CreatePlacementGroupCommandOutput,
} from "./commands/CreatePlacementGroupCommand";
import {
  CreatePublicIpv4PoolCommand,
  CreatePublicIpv4PoolCommandInput,
  CreatePublicIpv4PoolCommandOutput,
} from "./commands/CreatePublicIpv4PoolCommand";
import {
  CreateReplaceRootVolumeTaskCommand,
  CreateReplaceRootVolumeTaskCommandInput,
  CreateReplaceRootVolumeTaskCommandOutput,
} from "./commands/CreateReplaceRootVolumeTaskCommand";
import {
  CreateReservedInstancesListingCommand,
  CreateReservedInstancesListingCommandInput,
  CreateReservedInstancesListingCommandOutput,
} from "./commands/CreateReservedInstancesListingCommand";
import {
  CreateRestoreImageTaskCommand,
  CreateRestoreImageTaskCommandInput,
  CreateRestoreImageTaskCommandOutput,
} from "./commands/CreateRestoreImageTaskCommand";
import { CreateRouteCommand, CreateRouteCommandInput, CreateRouteCommandOutput } from "./commands/CreateRouteCommand";
import {
  CreateRouteServerCommand,
  CreateRouteServerCommandInput,
  CreateRouteServerCommandOutput,
} from "./commands/CreateRouteServerCommand";
import {
  CreateRouteServerEndpointCommand,
  CreateRouteServerEndpointCommandInput,
  CreateRouteServerEndpointCommandOutput,
} from "./commands/CreateRouteServerEndpointCommand";
import {
  CreateRouteServerPeerCommand,
  CreateRouteServerPeerCommandInput,
  CreateRouteServerPeerCommandOutput,
} from "./commands/CreateRouteServerPeerCommand";
import {
  CreateRouteTableCommand,
  CreateRouteTableCommandInput,
  CreateRouteTableCommandOutput,
} from "./commands/CreateRouteTableCommand";
import {
  CreateSecurityGroupCommand,
  CreateSecurityGroupCommandInput,
  CreateSecurityGroupCommandOutput,
} from "./commands/CreateSecurityGroupCommand";
import {
  CreateSnapshotCommand,
  CreateSnapshotCommandInput,
  CreateSnapshotCommandOutput,
} from "./commands/CreateSnapshotCommand";
import {
  CreateSnapshotsCommand,
  CreateSnapshotsCommandInput,
  CreateSnapshotsCommandOutput,
} from "./commands/CreateSnapshotsCommand";
import {
  CreateSpotDatafeedSubscriptionCommand,
  CreateSpotDatafeedSubscriptionCommandInput,
  CreateSpotDatafeedSubscriptionCommandOutput,
} from "./commands/CreateSpotDatafeedSubscriptionCommand";
import {
  CreateStoreImageTaskCommand,
  CreateStoreImageTaskCommandInput,
  CreateStoreImageTaskCommandOutput,
} from "./commands/CreateStoreImageTaskCommand";
import {
  CreateSubnetCidrReservationCommand,
  CreateSubnetCidrReservationCommandInput,
  CreateSubnetCidrReservationCommandOutput,
} from "./commands/CreateSubnetCidrReservationCommand";
import {
  CreateSubnetCommand,
  CreateSubnetCommandInput,
  CreateSubnetCommandOutput,
} from "./commands/CreateSubnetCommand";
import { CreateTagsCommand, CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand";
import {
  CreateTrafficMirrorFilterCommand,
  CreateTrafficMirrorFilterCommandInput,
  CreateTrafficMirrorFilterCommandOutput,
} from "./commands/CreateTrafficMirrorFilterCommand";
import {
  CreateTrafficMirrorFilterRuleCommand,
  CreateTrafficMirrorFilterRuleCommandInput,
  CreateTrafficMirrorFilterRuleCommandOutput,
} from "./commands/CreateTrafficMirrorFilterRuleCommand";
import {
  CreateTrafficMirrorSessionCommand,
  CreateTrafficMirrorSessionCommandInput,
  CreateTrafficMirrorSessionCommandOutput,
} from "./commands/CreateTrafficMirrorSessionCommand";
import {
  CreateTrafficMirrorTargetCommand,
  CreateTrafficMirrorTargetCommandInput,
  CreateTrafficMirrorTargetCommandOutput,
} from "./commands/CreateTrafficMirrorTargetCommand";
import {
  CreateTransitGatewayCommand,
  CreateTransitGatewayCommandInput,
  CreateTransitGatewayCommandOutput,
} from "./commands/CreateTransitGatewayCommand";
import {
  CreateTransitGatewayConnectCommand,
  CreateTransitGatewayConnectCommandInput,
  CreateTransitGatewayConnectCommandOutput,
} from "./commands/CreateTransitGatewayConnectCommand";
import {
  CreateTransitGatewayConnectPeerCommand,
  CreateTransitGatewayConnectPeerCommandInput,
  CreateTransitGatewayConnectPeerCommandOutput,
} from "./commands/CreateTransitGatewayConnectPeerCommand";
import {
  CreateTransitGatewayMulticastDomainCommand,
  CreateTransitGatewayMulticastDomainCommandInput,
  CreateTransitGatewayMulticastDomainCommandOutput,
} from "./commands/CreateTransitGatewayMulticastDomainCommand";
import {
  CreateTransitGatewayPeeringAttachmentCommand,
  CreateTransitGatewayPeeringAttachmentCommandInput,
  CreateTransitGatewayPeeringAttachmentCommandOutput,
} from "./commands/CreateTransitGatewayPeeringAttachmentCommand";
import {
  CreateTransitGatewayPolicyTableCommand,
  CreateTransitGatewayPolicyTableCommandInput,
  CreateTransitGatewayPolicyTableCommandOutput,
} from "./commands/CreateTransitGatewayPolicyTableCommand";
import {
  CreateTransitGatewayPrefixListReferenceCommand,
  CreateTransitGatewayPrefixListReferenceCommandInput,
  CreateTransitGatewayPrefixListReferenceCommandOutput,
} from "./commands/CreateTransitGatewayPrefixListReferenceCommand";
import {
  CreateTransitGatewayRouteCommand,
  CreateTransitGatewayRouteCommandInput,
  CreateTransitGatewayRouteCommandOutput,
} from "./commands/CreateTransitGatewayRouteCommand";
import {
  CreateTransitGatewayRouteTableAnnouncementCommand,
  CreateTransitGatewayRouteTableAnnouncementCommandInput,
  CreateTransitGatewayRouteTableAnnouncementCommandOutput,
} from "./commands/CreateTransitGatewayRouteTableAnnouncementCommand";
import {
  CreateTransitGatewayRouteTableCommand,
  CreateTransitGatewayRouteTableCommandInput,
  CreateTransitGatewayRouteTableCommandOutput,
} from "./commands/CreateTransitGatewayRouteTableCommand";
import {
  CreateTransitGatewayVpcAttachmentCommand,
  CreateTransitGatewayVpcAttachmentCommandInput,
  CreateTransitGatewayVpcAttachmentCommandOutput,
} from "./commands/CreateTransitGatewayVpcAttachmentCommand";
import {
  CreateVerifiedAccessEndpointCommand,
  CreateVerifiedAccessEndpointCommandInput,
  CreateVerifiedAccessEndpointCommandOutput,
} from "./commands/CreateVerifiedAccessEndpointCommand";
import {
  CreateVerifiedAccessGroupCommand,
  CreateVerifiedAccessGroupCommandInput,
  CreateVerifiedAccessGroupCommandOutput,
} from "./commands/CreateVerifiedAccessGroupCommand";
import {
  CreateVerifiedAccessInstanceCommand,
  CreateVerifiedAccessInstanceCommandInput,
  CreateVerifiedAccessInstanceCommandOutput,
} from "./commands/CreateVerifiedAccessInstanceCommand";
import {
  CreateVerifiedAccessTrustProviderCommand,
  CreateVerifiedAccessTrustProviderCommandInput,
  CreateVerifiedAccessTrustProviderCommandOutput,
} from "./commands/CreateVerifiedAccessTrustProviderCommand";
import {
  CreateVolumeCommand,
  CreateVolumeCommandInput,
  CreateVolumeCommandOutput,
} from "./commands/CreateVolumeCommand";
import {
  CreateVpcBlockPublicAccessExclusionCommand,
  CreateVpcBlockPublicAccessExclusionCommandInput,
  CreateVpcBlockPublicAccessExclusionCommandOutput,
} from "./commands/CreateVpcBlockPublicAccessExclusionCommand";
import { CreateVpcCommand, CreateVpcCommandInput, CreateVpcCommandOutput } from "./commands/CreateVpcCommand";
import {
  CreateVpcEndpointCommand,
  CreateVpcEndpointCommandInput,
  CreateVpcEndpointCommandOutput,
} from "./commands/CreateVpcEndpointCommand";
import {
  CreateVpcEndpointConnectionNotificationCommand,
  CreateVpcEndpointConnectionNotificationCommandInput,
  CreateVpcEndpointConnectionNotificationCommandOutput,
} from "./commands/CreateVpcEndpointConnectionNotificationCommand";
import {
  CreateVpcEndpointServiceConfigurationCommand,
  CreateVpcEndpointServiceConfigurationCommandInput,
  CreateVpcEndpointServiceConfigurationCommandOutput,
} from "./commands/CreateVpcEndpointServiceConfigurationCommand";
import {
  CreateVpcPeeringConnectionCommand,
  CreateVpcPeeringConnectionCommandInput,
  CreateVpcPeeringConnectionCommandOutput,
} from "./commands/CreateVpcPeeringConnectionCommand";
import {
  CreateVpnConnectionCommand,
  CreateVpnConnectionCommandInput,
  CreateVpnConnectionCommandOutput,
} from "./commands/CreateVpnConnectionCommand";
import {
  CreateVpnConnectionRouteCommand,
  CreateVpnConnectionRouteCommandInput,
  CreateVpnConnectionRouteCommandOutput,
} from "./commands/CreateVpnConnectionRouteCommand";
import {
  CreateVpnGatewayCommand,
  CreateVpnGatewayCommandInput,
  CreateVpnGatewayCommandOutput,
} from "./commands/CreateVpnGatewayCommand";
import {
  DeleteCarrierGatewayCommand,
  DeleteCarrierGatewayCommandInput,
  DeleteCarrierGatewayCommandOutput,
} from "./commands/DeleteCarrierGatewayCommand";
import {
  DeleteClientVpnEndpointCommand,
  DeleteClientVpnEndpointCommandInput,
  DeleteClientVpnEndpointCommandOutput,
} from "./commands/DeleteClientVpnEndpointCommand";
import {
  DeleteClientVpnRouteCommand,
  DeleteClientVpnRouteCommandInput,
  DeleteClientVpnRouteCommandOutput,
} from "./commands/DeleteClientVpnRouteCommand";
import {
  DeleteCoipCidrCommand,
  DeleteCoipCidrCommandInput,
  DeleteCoipCidrCommandOutput,
} from "./commands/DeleteCoipCidrCommand";
import {
  DeleteCoipPoolCommand,
  DeleteCoipPoolCommandInput,
  DeleteCoipPoolCommandOutput,
} from "./commands/DeleteCoipPoolCommand";
import {
  DeleteCustomerGatewayCommand,
  DeleteCustomerGatewayCommandInput,
  DeleteCustomerGatewayCommandOutput,
} from "./commands/DeleteCustomerGatewayCommand";
import {
  DeleteDhcpOptionsCommand,
  DeleteDhcpOptionsCommandInput,
  DeleteDhcpOptionsCommandOutput,
} from "./commands/DeleteDhcpOptionsCommand";
import {
  DeleteEgressOnlyInternetGatewayCommand,
  DeleteEgressOnlyInternetGatewayCommandInput,
  DeleteEgressOnlyInternetGatewayCommandOutput,
} from "./commands/DeleteEgressOnlyInternetGatewayCommand";
import {
  DeleteFleetsCommand,
  DeleteFleetsCommandInput,
  DeleteFleetsCommandOutput,
} from "./commands/DeleteFleetsCommand";
import {
  DeleteFlowLogsCommand,
  DeleteFlowLogsCommandInput,
  DeleteFlowLogsCommandOutput,
} from "./commands/DeleteFlowLogsCommand";
import {
  DeleteFpgaImageCommand,
  DeleteFpgaImageCommandInput,
  DeleteFpgaImageCommandOutput,
} from "./commands/DeleteFpgaImageCommand";
import {
  DeleteInstanceConnectEndpointCommand,
  DeleteInstanceConnectEndpointCommandInput,
  DeleteInstanceConnectEndpointCommandOutput,
} from "./commands/DeleteInstanceConnectEndpointCommand";
import {
  DeleteInstanceEventWindowCommand,
  DeleteInstanceEventWindowCommandInput,
  DeleteInstanceEventWindowCommandOutput,
} from "./commands/DeleteInstanceEventWindowCommand";
import {
  DeleteInternetGatewayCommand,
  DeleteInternetGatewayCommandInput,
  DeleteInternetGatewayCommandOutput,
} from "./commands/DeleteInternetGatewayCommand";
import { DeleteIpamCommand, DeleteIpamCommandInput, DeleteIpamCommandOutput } from "./commands/DeleteIpamCommand";
import {
  DeleteIpamExternalResourceVerificationTokenCommand,
  DeleteIpamExternalResourceVerificationTokenCommandInput,
  DeleteIpamExternalResourceVerificationTokenCommandOutput,
} from "./commands/DeleteIpamExternalResourceVerificationTokenCommand";
import {
  DeleteIpamPoolCommand,
  DeleteIpamPoolCommandInput,
  DeleteIpamPoolCommandOutput,
} from "./commands/DeleteIpamPoolCommand";
import {
  DeleteIpamResourceDiscoveryCommand,
  DeleteIpamResourceDiscoveryCommandInput,
  DeleteIpamResourceDiscoveryCommandOutput,
} from "./commands/DeleteIpamResourceDiscoveryCommand";
import {
  DeleteIpamScopeCommand,
  DeleteIpamScopeCommandInput,
  DeleteIpamScopeCommandOutput,
} from "./commands/DeleteIpamScopeCommand";
import {
  DeleteKeyPairCommand,
  DeleteKeyPairCommandInput,
  DeleteKeyPairCommandOutput,
} from "./commands/DeleteKeyPairCommand";
import {
  DeleteLaunchTemplateCommand,
  DeleteLaunchTemplateCommandInput,
  DeleteLaunchTemplateCommandOutput,
} from "./commands/DeleteLaunchTemplateCommand";
import {
  DeleteLaunchTemplateVersionsCommand,
  DeleteLaunchTemplateVersionsCommandInput,
  DeleteLaunchTemplateVersionsCommandOutput,
} from "./commands/DeleteLaunchTemplateVersionsCommand";
import {
  DeleteLocalGatewayRouteCommand,
  DeleteLocalGatewayRouteCommandInput,
  DeleteLocalGatewayRouteCommandOutput,
} from "./commands/DeleteLocalGatewayRouteCommand";
import {
  DeleteLocalGatewayRouteTableCommand,
  DeleteLocalGatewayRouteTableCommandInput,
  DeleteLocalGatewayRouteTableCommandOutput,
} from "./commands/DeleteLocalGatewayRouteTableCommand";
import {
  DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand,
  DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput,
  DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput,
} from "./commands/DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand";
import {
  DeleteLocalGatewayRouteTableVpcAssociationCommand,
  DeleteLocalGatewayRouteTableVpcAssociationCommandInput,
  DeleteLocalGatewayRouteTableVpcAssociationCommandOutput,
} from "./commands/DeleteLocalGatewayRouteTableVpcAssociationCommand";
import {
  DeleteLocalGatewayVirtualInterfaceCommand,
  DeleteLocalGatewayVirtualInterfaceCommandInput,
  DeleteLocalGatewayVirtualInterfaceCommandOutput,
} from "./commands/DeleteLocalGatewayVirtualInterfaceCommand";
import {
  DeleteLocalGatewayVirtualInterfaceGroupCommand,
  DeleteLocalGatewayVirtualInterfaceGroupCommandInput,
  DeleteLocalGatewayVirtualInterfaceGroupCommandOutput,
} from "./commands/DeleteLocalGatewayVirtualInterfaceGroupCommand";
import {
  DeleteManagedPrefixListCommand,
  DeleteManagedPrefixListCommandInput,
  DeleteManagedPrefixListCommandOutput,
} from "./commands/DeleteManagedPrefixListCommand";
import {
  DeleteNatGatewayCommand,
  DeleteNatGatewayCommandInput,
  DeleteNatGatewayCommandOutput,
} from "./commands/DeleteNatGatewayCommand";
import {
  DeleteNetworkAclCommand,
  DeleteNetworkAclCommandInput,
  DeleteNetworkAclCommandOutput,
} from "./commands/DeleteNetworkAclCommand";
import {
  DeleteNetworkAclEntryCommand,
  DeleteNetworkAclEntryCommandInput,
  DeleteNetworkAclEntryCommandOutput,
} from "./commands/DeleteNetworkAclEntryCommand";
import {
  DeleteNetworkInsightsAccessScopeAnalysisCommand,
  DeleteNetworkInsightsAccessScopeAnalysisCommandInput,
  DeleteNetworkInsightsAccessScopeAnalysisCommandOutput,
} from "./commands/DeleteNetworkInsightsAccessScopeAnalysisCommand";
import {
  DeleteNetworkInsightsAccessScopeCommand,
  DeleteNetworkInsightsAccessScopeCommandInput,
  DeleteNetworkInsightsAccessScopeCommandOutput,
} from "./commands/DeleteNetworkInsightsAccessScopeCommand";
import {
  DeleteNetworkInsightsAnalysisCommand,
  DeleteNetworkInsightsAnalysisCommandInput,
  DeleteNetworkInsightsAnalysisCommandOutput,
} from "./commands/DeleteNetworkInsightsAnalysisCommand";
import {
  DeleteNetworkInsightsPathCommand,
  DeleteNetworkInsightsPathCommandInput,
  DeleteNetworkInsightsPathCommandOutput,
} from "./commands/DeleteNetworkInsightsPathCommand";
import {
  DeleteNetworkInterfaceCommand,
  DeleteNetworkInterfaceCommandInput,
  DeleteNetworkInterfaceCommandOutput,
} from "./commands/DeleteNetworkInterfaceCommand";
import {
  DeleteNetworkInterfacePermissionCommand,
  DeleteNetworkInterfacePermissionCommandInput,
  DeleteNetworkInterfacePermissionCommandOutput,
} from "./commands/DeleteNetworkInterfacePermissionCommand";
import {
  DeletePlacementGroupCommand,
  DeletePlacementGroupCommandInput,
  DeletePlacementGroupCommandOutput,
} from "./commands/DeletePlacementGroupCommand";
import {
  DeletePublicIpv4PoolCommand,
  DeletePublicIpv4PoolCommandInput,
  DeletePublicIpv4PoolCommandOutput,
} from "./commands/DeletePublicIpv4PoolCommand";
import {
  DeleteQueuedReservedInstancesCommand,
  DeleteQueuedReservedInstancesCommandInput,
  DeleteQueuedReservedInstancesCommandOutput,
} from "./commands/DeleteQueuedReservedInstancesCommand";
import { DeleteRouteCommand, DeleteRouteCommandInput, DeleteRouteCommandOutput } from "./commands/DeleteRouteCommand";
import {
  DeleteRouteServerCommand,
  DeleteRouteServerCommandInput,
  DeleteRouteServerCommandOutput,
} from "./commands/DeleteRouteServerCommand";
import {
  DeleteRouteServerEndpointCommand,
  DeleteRouteServerEndpointCommandInput,
  DeleteRouteServerEndpointCommandOutput,
} from "./commands/DeleteRouteServerEndpointCommand";
import {
  DeleteRouteServerPeerCommand,
  DeleteRouteServerPeerCommandInput,
  DeleteRouteServerPeerCommandOutput,
} from "./commands/DeleteRouteServerPeerCommand";
import {
  DeleteRouteTableCommand,
  DeleteRouteTableCommandInput,
  DeleteRouteTableCommandOutput,
} from "./commands/DeleteRouteTableCommand";
import {
  DeleteSecurityGroupCommand,
  DeleteSecurityGroupCommandInput,
  DeleteSecurityGroupCommandOutput,
} from "./commands/DeleteSecurityGroupCommand";
import {
  DeleteSnapshotCommand,
  DeleteSnapshotCommandInput,
  DeleteSnapshotCommandOutput,
} from "./commands/DeleteSnapshotCommand";
import {
  DeleteSpotDatafeedSubscriptionCommand,
  DeleteSpotDatafeedSubscriptionCommandInput,
  DeleteSpotDatafeedSubscriptionCommandOutput,
} from "./commands/DeleteSpotDatafeedSubscriptionCommand";
import {
  DeleteSubnetCidrReservationCommand,
  DeleteSubnetCidrReservationCommandInput,
  DeleteSubnetCidrReservationCommandOutput,
} from "./commands/DeleteSubnetCidrReservationCommand";
import {
  DeleteSubnetCommand,
  DeleteSubnetCommandInput,
  DeleteSubnetCommandOutput,
} from "./commands/DeleteSubnetCommand";
import { DeleteTagsCommand, DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import {
  DeleteTrafficMirrorFilterCommand,
  DeleteTrafficMirrorFilterCommandInput,
  DeleteTrafficMirrorFilterCommandOutput,
} from "./commands/DeleteTrafficMirrorFilterCommand";
import {
  DeleteTrafficMirrorFilterRuleCommand,
  DeleteTrafficMirrorFilterRuleCommandInput,
  DeleteTrafficMirrorFilterRuleCommandOutput,
} from "./commands/DeleteTrafficMirrorFilterRuleCommand";
import {
  DeleteTrafficMirrorSessionCommand,
  DeleteTrafficMirrorSessionCommandInput,
  DeleteTrafficMirrorSessionCommandOutput,
} from "./commands/DeleteTrafficMirrorSessionCommand";
import {
  DeleteTrafficMirrorTargetCommand,
  DeleteTrafficMirrorTargetCommandInput,
  DeleteTrafficMirrorTargetCommandOutput,
} from "./commands/DeleteTrafficMirrorTargetCommand";
import {
  DeleteTransitGatewayCommand,
  DeleteTransitGatewayCommandInput,
  DeleteTransitGatewayCommandOutput,
} from "./commands/DeleteTransitGatewayCommand";
import {
  DeleteTransitGatewayConnectCommand,
  DeleteTransitGatewayConnectCommandInput,
  DeleteTransitGatewayConnectCommandOutput,
} from "./commands/DeleteTransitGatewayConnectCommand";
import {
  DeleteTransitGatewayConnectPeerCommand,
  DeleteTransitGatewayConnectPeerCommandInput,
  DeleteTransitGatewayConnectPeerCommandOutput,
} from "./commands/DeleteTransitGatewayConnectPeerCommand";
import {
  DeleteTransitGatewayMulticastDomainCommand,
  DeleteTransitGatewayMulticastDomainCommandInput,
  DeleteTransitGatewayMulticastDomainCommandOutput,
} from "./commands/DeleteTransitGatewayMulticastDomainCommand";
import {
  DeleteTransitGatewayPeeringAttachmentCommand,
  DeleteTransitGatewayPeeringAttachmentCommandInput,
  DeleteTransitGatewayPeeringAttachmentCommandOutput,
} from "./commands/DeleteTransitGatewayPeeringAttachmentCommand";
import {
  DeleteTransitGatewayPolicyTableCommand,
  DeleteTransitGatewayPolicyTableCommandInput,
  DeleteTransitGatewayPolicyTableCommandOutput,
} from "./commands/DeleteTransitGatewayPolicyTableCommand";
import {
  DeleteTransitGatewayPrefixListReferenceCommand,
  DeleteTransitGatewayPrefixListReferenceCommandInput,
  DeleteTransitGatewayPrefixListReferenceCommandOutput,
} from "./commands/DeleteTransitGatewayPrefixListReferenceCommand";
import {
  DeleteTransitGatewayRouteCommand,
  DeleteTransitGatewayRouteCommandInput,
  DeleteTransitGatewayRouteCommandOutput,
} from "./commands/DeleteTransitGatewayRouteCommand";
import {
  DeleteTransitGatewayRouteTableAnnouncementCommand,
  DeleteTransitGatewayRouteTableAnnouncementCommandInput,
  DeleteTransitGatewayRouteTableAnnouncementCommandOutput,
} from "./commands/DeleteTransitGatewayRouteTableAnnouncementCommand";
import {
  DeleteTransitGatewayRouteTableCommand,
  DeleteTransitGatewayRouteTableCommandInput,
  DeleteTransitGatewayRouteTableCommandOutput,
} from "./commands/DeleteTransitGatewayRouteTableCommand";
import {
  DeleteTransitGatewayVpcAttachmentCommand,
  DeleteTransitGatewayVpcAttachmentCommandInput,
  DeleteTransitGatewayVpcAttachmentCommandOutput,
} from "./commands/DeleteTransitGatewayVpcAttachmentCommand";
import {
  DeleteVerifiedAccessEndpointCommand,
  DeleteVerifiedAccessEndpointCommandInput,
  DeleteVerifiedAccessEndpointCommandOutput,
} from "./commands/DeleteVerifiedAccessEndpointCommand";
import {
  DeleteVerifiedAccessGroupCommand,
  DeleteVerifiedAccessGroupCommandInput,
  DeleteVerifiedAccessGroupCommandOutput,
} from "./commands/DeleteVerifiedAccessGroupCommand";
import {
  DeleteVerifiedAccessInstanceCommand,
  DeleteVerifiedAccessInstanceCommandInput,
  DeleteVerifiedAccessInstanceCommandOutput,
} from "./commands/DeleteVerifiedAccessInstanceCommand";
import {
  DeleteVerifiedAccessTrustProviderCommand,
  DeleteVerifiedAccessTrustProviderCommandInput,
  DeleteVerifiedAccessTrustProviderCommandOutput,
} from "./commands/DeleteVerifiedAccessTrustProviderCommand";
import {
  DeleteVolumeCommand,
  DeleteVolumeCommandInput,
  DeleteVolumeCommandOutput,
} from "./commands/DeleteVolumeCommand";
import {
  DeleteVpcBlockPublicAccessExclusionCommand,
  DeleteVpcBlockPublicAccessExclusionCommandInput,
  DeleteVpcBlockPublicAccessExclusionCommandOutput,
} from "./commands/DeleteVpcBlockPublicAccessExclusionCommand";
import { DeleteVpcCommand, DeleteVpcCommandInput, DeleteVpcCommandOutput } from "./commands/DeleteVpcCommand";
import {
  DeleteVpcEndpointConnectionNotificationsCommand,
  DeleteVpcEndpointConnectionNotificationsCommandInput,
  DeleteVpcEndpointConnectionNotificationsCommandOutput,
} from "./commands/DeleteVpcEndpointConnectionNotificationsCommand";
import {
  DeleteVpcEndpointsCommand,
  DeleteVpcEndpointsCommandInput,
  DeleteVpcEndpointsCommandOutput,
} from "./commands/DeleteVpcEndpointsCommand";
import {
  DeleteVpcEndpointServiceConfigurationsCommand,
  DeleteVpcEndpointServiceConfigurationsCommandInput,
  DeleteVpcEndpointServiceConfigurationsCommandOutput,
} from "./commands/DeleteVpcEndpointServiceConfigurationsCommand";
import {
  DeleteVpcPeeringConnectionCommand,
  DeleteVpcPeeringConnectionCommandInput,
  DeleteVpcPeeringConnectionCommandOutput,
} from "./commands/DeleteVpcPeeringConnectionCommand";
import {
  DeleteVpnConnectionCommand,
  DeleteVpnConnectionCommandInput,
  DeleteVpnConnectionCommandOutput,
} from "./commands/DeleteVpnConnectionCommand";
import {
  DeleteVpnConnectionRouteCommand,
  DeleteVpnConnectionRouteCommandInput,
  DeleteVpnConnectionRouteCommandOutput,
} from "./commands/DeleteVpnConnectionRouteCommand";
import {
  DeleteVpnGatewayCommand,
  DeleteVpnGatewayCommandInput,
  DeleteVpnGatewayCommandOutput,
} from "./commands/DeleteVpnGatewayCommand";
import {
  DeprovisionByoipCidrCommand,
  DeprovisionByoipCidrCommandInput,
  DeprovisionByoipCidrCommandOutput,
} from "./commands/DeprovisionByoipCidrCommand";
import {
  DeprovisionIpamByoasnCommand,
  DeprovisionIpamByoasnCommandInput,
  DeprovisionIpamByoasnCommandOutput,
} from "./commands/DeprovisionIpamByoasnCommand";
import {
  DeprovisionIpamPoolCidrCommand,
  DeprovisionIpamPoolCidrCommandInput,
  DeprovisionIpamPoolCidrCommandOutput,
} from "./commands/DeprovisionIpamPoolCidrCommand";
import {
  DeprovisionPublicIpv4PoolCidrCommand,
  DeprovisionPublicIpv4PoolCidrCommandInput,
  DeprovisionPublicIpv4PoolCidrCommandOutput,
} from "./commands/DeprovisionPublicIpv4PoolCidrCommand";
import {
  DeregisterImageCommand,
  DeregisterImageCommandInput,
  DeregisterImageCommandOutput,
} from "./commands/DeregisterImageCommand";
import {
  DeregisterInstanceEventNotificationAttributesCommand,
  DeregisterInstanceEventNotificationAttributesCommandInput,
  DeregisterInstanceEventNotificationAttributesCommandOutput,
} from "./commands/DeregisterInstanceEventNotificationAttributesCommand";
import {
  DeregisterTransitGatewayMulticastGroupMembersCommand,
  DeregisterTransitGatewayMulticastGroupMembersCommandInput,
  DeregisterTransitGatewayMulticastGroupMembersCommandOutput,
} from "./commands/DeregisterTransitGatewayMulticastGroupMembersCommand";
import {
  DeregisterTransitGatewayMulticastGroupSourcesCommand,
  DeregisterTransitGatewayMulticastGroupSourcesCommandInput,
  DeregisterTransitGatewayMulticastGroupSourcesCommandOutput,
} from "./commands/DeregisterTransitGatewayMulticastGroupSourcesCommand";
import {
  DescribeAccountAttributesCommand,
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "./commands/DescribeAccountAttributesCommand";
import {
  DescribeAddressesAttributeCommand,
  DescribeAddressesAttributeCommandInput,
  DescribeAddressesAttributeCommandOutput,
} from "./commands/DescribeAddressesAttributeCommand";
import {
  DescribeAddressesCommand,
  DescribeAddressesCommandInput,
  DescribeAddressesCommandOutput,
} from "./commands/DescribeAddressesCommand";
import {
  DescribeAddressTransfersCommand,
  DescribeAddressTransfersCommandInput,
  DescribeAddressTransfersCommandOutput,
} from "./commands/DescribeAddressTransfersCommand";
import {
  DescribeAggregateIdFormatCommand,
  DescribeAggregateIdFormatCommandInput,
  DescribeAggregateIdFormatCommandOutput,
} from "./commands/DescribeAggregateIdFormatCommand";
import {
  DescribeAvailabilityZonesCommand,
  DescribeAvailabilityZonesCommandInput,
  DescribeAvailabilityZonesCommandOutput,
} from "./commands/DescribeAvailabilityZonesCommand";
import {
  DescribeAwsNetworkPerformanceMetricSubscriptionsCommand,
  DescribeAwsNetworkPerformanceMetricSubscriptionsCommandInput,
  DescribeAwsNetworkPerformanceMetricSubscriptionsCommandOutput,
} from "./commands/DescribeAwsNetworkPerformanceMetricSubscriptionsCommand";
import {
  DescribeBundleTasksCommand,
  DescribeBundleTasksCommandInput,
  DescribeBundleTasksCommandOutput,
} from "./commands/DescribeBundleTasksCommand";
import {
  DescribeByoipCidrsCommand,
  DescribeByoipCidrsCommandInput,
  DescribeByoipCidrsCommandOutput,
} from "./commands/DescribeByoipCidrsCommand";
import {
  DescribeCapacityBlockExtensionHistoryCommand,
  DescribeCapacityBlockExtensionHistoryCommandInput,
  DescribeCapacityBlockExtensionHistoryCommandOutput,
} from "./commands/DescribeCapacityBlockExtensionHistoryCommand";
import {
  DescribeCapacityBlockExtensionOfferingsCommand,
  DescribeCapacityBlockExtensionOfferingsCommandInput,
  DescribeCapacityBlockExtensionOfferingsCommandOutput,
} from "./commands/DescribeCapacityBlockExtensionOfferingsCommand";
import {
  DescribeCapacityBlockOfferingsCommand,
  DescribeCapacityBlockOfferingsCommandInput,
  DescribeCapacityBlockOfferingsCommandOutput,
} from "./commands/DescribeCapacityBlockOfferingsCommand";
import {
  DescribeCapacityBlocksCommand,
  DescribeCapacityBlocksCommandInput,
  DescribeCapacityBlocksCommandOutput,
} from "./commands/DescribeCapacityBlocksCommand";
import {
  DescribeCapacityBlockStatusCommand,
  DescribeCapacityBlockStatusCommandInput,
  DescribeCapacityBlockStatusCommandOutput,
} from "./commands/DescribeCapacityBlockStatusCommand";
import {
  DescribeCapacityReservationBillingRequestsCommand,
  DescribeCapacityReservationBillingRequestsCommandInput,
  DescribeCapacityReservationBillingRequestsCommandOutput,
} from "./commands/DescribeCapacityReservationBillingRequestsCommand";
import {
  DescribeCapacityReservationFleetsCommand,
  DescribeCapacityReservationFleetsCommandInput,
  DescribeCapacityReservationFleetsCommandOutput,
} from "./commands/DescribeCapacityReservationFleetsCommand";
import {
  DescribeCapacityReservationsCommand,
  DescribeCapacityReservationsCommandInput,
  DescribeCapacityReservationsCommandOutput,
} from "./commands/DescribeCapacityReservationsCommand";
import {
  DescribeCarrierGatewaysCommand,
  DescribeCarrierGatewaysCommandInput,
  DescribeCarrierGatewaysCommandOutput,
} from "./commands/DescribeCarrierGatewaysCommand";
import {
  DescribeClassicLinkInstancesCommand,
  DescribeClassicLinkInstancesCommandInput,
  DescribeClassicLinkInstancesCommandOutput,
} from "./commands/DescribeClassicLinkInstancesCommand";
import {
  DescribeClientVpnAuthorizationRulesCommand,
  DescribeClientVpnAuthorizationRulesCommandInput,
  DescribeClientVpnAuthorizationRulesCommandOutput,
} from "./commands/DescribeClientVpnAuthorizationRulesCommand";
import {
  DescribeClientVpnConnectionsCommand,
  DescribeClientVpnConnectionsCommandInput,
  DescribeClientVpnConnectionsCommandOutput,
} from "./commands/DescribeClientVpnConnectionsCommand";
import {
  DescribeClientVpnEndpointsCommand,
  DescribeClientVpnEndpointsCommandInput,
  DescribeClientVpnEndpointsCommandOutput,
} from "./commands/DescribeClientVpnEndpointsCommand";
import {
  DescribeClientVpnRoutesCommand,
  DescribeClientVpnRoutesCommandInput,
  DescribeClientVpnRoutesCommandOutput,
} from "./commands/DescribeClientVpnRoutesCommand";
import {
  DescribeClientVpnTargetNetworksCommand,
  DescribeClientVpnTargetNetworksCommandInput,
  DescribeClientVpnTargetNetworksCommandOutput,
} from "./commands/DescribeClientVpnTargetNetworksCommand";
import {
  DescribeCoipPoolsCommand,
  DescribeCoipPoolsCommandInput,
  DescribeCoipPoolsCommandOutput,
} from "./commands/DescribeCoipPoolsCommand";
import {
  DescribeConversionTasksCommand,
  DescribeConversionTasksCommandInput,
  DescribeConversionTasksCommandOutput,
} from "./commands/DescribeConversionTasksCommand";
import {
  DescribeCustomerGatewaysCommand,
  DescribeCustomerGatewaysCommandInput,
  DescribeCustomerGatewaysCommandOutput,
} from "./commands/DescribeCustomerGatewaysCommand";
import {
  DescribeDeclarativePoliciesReportsCommand,
  DescribeDeclarativePoliciesReportsCommandInput,
  DescribeDeclarativePoliciesReportsCommandOutput,
} from "./commands/DescribeDeclarativePoliciesReportsCommand";
import {
  DescribeDhcpOptionsCommand,
  DescribeDhcpOptionsCommandInput,
  DescribeDhcpOptionsCommandOutput,
} from "./commands/DescribeDhcpOptionsCommand";
import {
  DescribeEgressOnlyInternetGatewaysCommand,
  DescribeEgressOnlyInternetGatewaysCommandInput,
  DescribeEgressOnlyInternetGatewaysCommandOutput,
} from "./commands/DescribeEgressOnlyInternetGatewaysCommand";
import {
  DescribeElasticGpusCommand,
  DescribeElasticGpusCommandInput,
  DescribeElasticGpusCommandOutput,
} from "./commands/DescribeElasticGpusCommand";
import {
  DescribeExportImageTasksCommand,
  DescribeExportImageTasksCommandInput,
  DescribeExportImageTasksCommandOutput,
} from "./commands/DescribeExportImageTasksCommand";
import {
  DescribeExportTasksCommand,
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput,
} from "./commands/DescribeExportTasksCommand";
import {
  DescribeFastLaunchImagesCommand,
  DescribeFastLaunchImagesCommandInput,
  DescribeFastLaunchImagesCommandOutput,
} from "./commands/DescribeFastLaunchImagesCommand";
import {
  DescribeFastSnapshotRestoresCommand,
  DescribeFastSnapshotRestoresCommandInput,
  DescribeFastSnapshotRestoresCommandOutput,
} from "./commands/DescribeFastSnapshotRestoresCommand";
import {
  DescribeFleetHistoryCommand,
  DescribeFleetHistoryCommandInput,
  DescribeFleetHistoryCommandOutput,
} from "./commands/DescribeFleetHistoryCommand";
import {
  DescribeFleetInstancesCommand,
  DescribeFleetInstancesCommandInput,
  DescribeFleetInstancesCommandOutput,
} from "./commands/DescribeFleetInstancesCommand";
import {
  DescribeFleetsCommand,
  DescribeFleetsCommandInput,
  DescribeFleetsCommandOutput,
} from "./commands/DescribeFleetsCommand";
import {
  DescribeFlowLogsCommand,
  DescribeFlowLogsCommandInput,
  DescribeFlowLogsCommandOutput,
} from "./commands/DescribeFlowLogsCommand";
import {
  DescribeFpgaImageAttributeCommand,
  DescribeFpgaImageAttributeCommandInput,
  DescribeFpgaImageAttributeCommandOutput,
} from "./commands/DescribeFpgaImageAttributeCommand";
import {
  DescribeFpgaImagesCommand,
  DescribeFpgaImagesCommandInput,
  DescribeFpgaImagesCommandOutput,
} from "./commands/DescribeFpgaImagesCommand";
import {
  DescribeHostReservationOfferingsCommand,
  DescribeHostReservationOfferingsCommandInput,
  DescribeHostReservationOfferingsCommandOutput,
} from "./commands/DescribeHostReservationOfferingsCommand";
import {
  DescribeHostReservationsCommand,
  DescribeHostReservationsCommandInput,
  DescribeHostReservationsCommandOutput,
} from "./commands/DescribeHostReservationsCommand";
import {
  DescribeHostsCommand,
  DescribeHostsCommandInput,
  DescribeHostsCommandOutput,
} from "./commands/DescribeHostsCommand";
import {
  DescribeIamInstanceProfileAssociationsCommand,
  DescribeIamInstanceProfileAssociationsCommandInput,
  DescribeIamInstanceProfileAssociationsCommandOutput,
} from "./commands/DescribeIamInstanceProfileAssociationsCommand";
import {
  DescribeIdentityIdFormatCommand,
  DescribeIdentityIdFormatCommandInput,
  DescribeIdentityIdFormatCommandOutput,
} from "./commands/DescribeIdentityIdFormatCommand";
import {
  DescribeIdFormatCommand,
  DescribeIdFormatCommandInput,
  DescribeIdFormatCommandOutput,
} from "./commands/DescribeIdFormatCommand";
import {
  DescribeImageAttributeCommand,
  DescribeImageAttributeCommandInput,
  DescribeImageAttributeCommandOutput,
} from "./commands/DescribeImageAttributeCommand";
import {
  DescribeImagesCommand,
  DescribeImagesCommandInput,
  DescribeImagesCommandOutput,
} from "./commands/DescribeImagesCommand";
import {
  DescribeImportImageTasksCommand,
  DescribeImportImageTasksCommandInput,
  DescribeImportImageTasksCommandOutput,
} from "./commands/DescribeImportImageTasksCommand";
import {
  DescribeImportSnapshotTasksCommand,
  DescribeImportSnapshotTasksCommandInput,
  DescribeImportSnapshotTasksCommandOutput,
} from "./commands/DescribeImportSnapshotTasksCommand";
import {
  DescribeInstanceAttributeCommand,
  DescribeInstanceAttributeCommandInput,
  DescribeInstanceAttributeCommandOutput,
} from "./commands/DescribeInstanceAttributeCommand";
import {
  DescribeInstanceConnectEndpointsCommand,
  DescribeInstanceConnectEndpointsCommandInput,
  DescribeInstanceConnectEndpointsCommandOutput,
} from "./commands/DescribeInstanceConnectEndpointsCommand";
import {
  DescribeInstanceCreditSpecificationsCommand,
  DescribeInstanceCreditSpecificationsCommandInput,
  DescribeInstanceCreditSpecificationsCommandOutput,
} from "./commands/DescribeInstanceCreditSpecificationsCommand";
import {
  DescribeInstanceEventNotificationAttributesCommand,
  DescribeInstanceEventNotificationAttributesCommandInput,
  DescribeInstanceEventNotificationAttributesCommandOutput,
} from "./commands/DescribeInstanceEventNotificationAttributesCommand";
import {
  DescribeInstanceEventWindowsCommand,
  DescribeInstanceEventWindowsCommandInput,
  DescribeInstanceEventWindowsCommandOutput,
} from "./commands/DescribeInstanceEventWindowsCommand";
import {
  DescribeInstanceImageMetadataCommand,
  DescribeInstanceImageMetadataCommandInput,
  DescribeInstanceImageMetadataCommandOutput,
} from "./commands/DescribeInstanceImageMetadataCommand";
import {
  DescribeInstancesCommand,
  DescribeInstancesCommandInput,
  DescribeInstancesCommandOutput,
} from "./commands/DescribeInstancesCommand";
import {
  DescribeInstanceStatusCommand,
  DescribeInstanceStatusCommandInput,
  DescribeInstanceStatusCommandOutput,
} from "./commands/DescribeInstanceStatusCommand";
import {
  DescribeInstanceTopologyCommand,
  DescribeInstanceTopologyCommandInput,
  DescribeInstanceTopologyCommandOutput,
} from "./commands/DescribeInstanceTopologyCommand";
import {
  DescribeInstanceTypeOfferingsCommand,
  DescribeInstanceTypeOfferingsCommandInput,
  DescribeInstanceTypeOfferingsCommandOutput,
} from "./commands/DescribeInstanceTypeOfferingsCommand";
import {
  DescribeInstanceTypesCommand,
  DescribeInstanceTypesCommandInput,
  DescribeInstanceTypesCommandOutput,
} from "./commands/DescribeInstanceTypesCommand";
import {
  DescribeInternetGatewaysCommand,
  DescribeInternetGatewaysCommandInput,
  DescribeInternetGatewaysCommandOutput,
} from "./commands/DescribeInternetGatewaysCommand";
import {
  DescribeIpamByoasnCommand,
  DescribeIpamByoasnCommandInput,
  DescribeIpamByoasnCommandOutput,
} from "./commands/DescribeIpamByoasnCommand";
import {
  DescribeIpamExternalResourceVerificationTokensCommand,
  DescribeIpamExternalResourceVerificationTokensCommandInput,
  DescribeIpamExternalResourceVerificationTokensCommandOutput,
} from "./commands/DescribeIpamExternalResourceVerificationTokensCommand";
import {
  DescribeIpamPoolsCommand,
  DescribeIpamPoolsCommandInput,
  DescribeIpamPoolsCommandOutput,
} from "./commands/DescribeIpamPoolsCommand";
import {
  DescribeIpamResourceDiscoveriesCommand,
  DescribeIpamResourceDiscoveriesCommandInput,
  DescribeIpamResourceDiscoveriesCommandOutput,
} from "./commands/DescribeIpamResourceDiscoveriesCommand";
import {
  DescribeIpamResourceDiscoveryAssociationsCommand,
  DescribeIpamResourceDiscoveryAssociationsCommandInput,
  DescribeIpamResourceDiscoveryAssociationsCommandOutput,
} from "./commands/DescribeIpamResourceDiscoveryAssociationsCommand";
import {
  DescribeIpamsCommand,
  DescribeIpamsCommandInput,
  DescribeIpamsCommandOutput,
} from "./commands/DescribeIpamsCommand";
import {
  DescribeIpamScopesCommand,
  DescribeIpamScopesCommandInput,
  DescribeIpamScopesCommandOutput,
} from "./commands/DescribeIpamScopesCommand";
import {
  DescribeIpv6PoolsCommand,
  DescribeIpv6PoolsCommandInput,
  DescribeIpv6PoolsCommandOutput,
} from "./commands/DescribeIpv6PoolsCommand";
import {
  DescribeKeyPairsCommand,
  DescribeKeyPairsCommandInput,
  DescribeKeyPairsCommandOutput,
} from "./commands/DescribeKeyPairsCommand";
import {
  DescribeLaunchTemplatesCommand,
  DescribeLaunchTemplatesCommandInput,
  DescribeLaunchTemplatesCommandOutput,
} from "./commands/DescribeLaunchTemplatesCommand";
import {
  DescribeLaunchTemplateVersionsCommand,
  DescribeLaunchTemplateVersionsCommandInput,
  DescribeLaunchTemplateVersionsCommandOutput,
} from "./commands/DescribeLaunchTemplateVersionsCommand";
import {
  DescribeLocalGatewayRouteTablesCommand,
  DescribeLocalGatewayRouteTablesCommandInput,
  DescribeLocalGatewayRouteTablesCommandOutput,
} from "./commands/DescribeLocalGatewayRouteTablesCommand";
import {
  DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand,
  DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput,
  DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput,
} from "./commands/DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand";
import {
  DescribeLocalGatewayRouteTableVpcAssociationsCommand,
  DescribeLocalGatewayRouteTableVpcAssociationsCommandInput,
  DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput,
} from "./commands/DescribeLocalGatewayRouteTableVpcAssociationsCommand";
import {
  DescribeLocalGatewaysCommand,
  DescribeLocalGatewaysCommandInput,
  DescribeLocalGatewaysCommandOutput,
} from "./commands/DescribeLocalGatewaysCommand";
import {
  DescribeLocalGatewayVirtualInterfaceGroupsCommand,
  DescribeLocalGatewayVirtualInterfaceGroupsCommandInput,
  DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput,
} from "./commands/DescribeLocalGatewayVirtualInterfaceGroupsCommand";
import {
  DescribeLocalGatewayVirtualInterfacesCommand,
  DescribeLocalGatewayVirtualInterfacesCommandInput,
  DescribeLocalGatewayVirtualInterfacesCommandOutput,
} from "./commands/DescribeLocalGatewayVirtualInterfacesCommand";
import {
  DescribeLockedSnapshotsCommand,
  DescribeLockedSnapshotsCommandInput,
  DescribeLockedSnapshotsCommandOutput,
} from "./commands/DescribeLockedSnapshotsCommand";
import {
  DescribeMacHostsCommand,
  DescribeMacHostsCommandInput,
  DescribeMacHostsCommandOutput,
} from "./commands/DescribeMacHostsCommand";
import {
  DescribeMacModificationTasksCommand,
  DescribeMacModificationTasksCommandInput,
  DescribeMacModificationTasksCommandOutput,
} from "./commands/DescribeMacModificationTasksCommand";
import {
  DescribeManagedPrefixListsCommand,
  DescribeManagedPrefixListsCommandInput,
  DescribeManagedPrefixListsCommandOutput,
} from "./commands/DescribeManagedPrefixListsCommand";
import {
  DescribeMovingAddressesCommand,
  DescribeMovingAddressesCommandInput,
  DescribeMovingAddressesCommandOutput,
} from "./commands/DescribeMovingAddressesCommand";
import {
  DescribeNatGatewaysCommand,
  DescribeNatGatewaysCommandInput,
  DescribeNatGatewaysCommandOutput,
} from "./commands/DescribeNatGatewaysCommand";
import {
  DescribeNetworkAclsCommand,
  DescribeNetworkAclsCommandInput,
  DescribeNetworkAclsCommandOutput,
} from "./commands/DescribeNetworkAclsCommand";
import {
  DescribeNetworkInsightsAccessScopeAnalysesCommand,
  DescribeNetworkInsightsAccessScopeAnalysesCommandInput,
  DescribeNetworkInsightsAccessScopeAnalysesCommandOutput,
} from "./commands/DescribeNetworkInsightsAccessScopeAnalysesCommand";
import {
  DescribeNetworkInsightsAccessScopesCommand,
  DescribeNetworkInsightsAccessScopesCommandInput,
  DescribeNetworkInsightsAccessScopesCommandOutput,
} from "./commands/DescribeNetworkInsightsAccessScopesCommand";
import {
  DescribeNetworkInsightsAnalysesCommand,
  DescribeNetworkInsightsAnalysesCommandInput,
  DescribeNetworkInsightsAnalysesCommandOutput,
} from "./commands/DescribeNetworkInsightsAnalysesCommand";
import {
  DescribeNetworkInsightsPathsCommand,
  DescribeNetworkInsightsPathsCommandInput,
  DescribeNetworkInsightsPathsCommandOutput,
} from "./commands/DescribeNetworkInsightsPathsCommand";
import {
  DescribeNetworkInterfaceAttributeCommand,
  DescribeNetworkInterfaceAttributeCommandInput,
  DescribeNetworkInterfaceAttributeCommandOutput,
} from "./commands/DescribeNetworkInterfaceAttributeCommand";
import {
  DescribeNetworkInterfacePermissionsCommand,
  DescribeNetworkInterfacePermissionsCommandInput,
  DescribeNetworkInterfacePermissionsCommandOutput,
} from "./commands/DescribeNetworkInterfacePermissionsCommand";
import {
  DescribeNetworkInterfacesCommand,
  DescribeNetworkInterfacesCommandInput,
  DescribeNetworkInterfacesCommandOutput,
} from "./commands/DescribeNetworkInterfacesCommand";
import {
  DescribeOutpostLagsCommand,
  DescribeOutpostLagsCommandInput,
  DescribeOutpostLagsCommandOutput,
} from "./commands/DescribeOutpostLagsCommand";
import {
  DescribePlacementGroupsCommand,
  DescribePlacementGroupsCommandInput,
  DescribePlacementGroupsCommandOutput,
} from "./commands/DescribePlacementGroupsCommand";
import {
  DescribePrefixListsCommand,
  DescribePrefixListsCommandInput,
  DescribePrefixListsCommandOutput,
} from "./commands/DescribePrefixListsCommand";
import {
  DescribePrincipalIdFormatCommand,
  DescribePrincipalIdFormatCommandInput,
  DescribePrincipalIdFormatCommandOutput,
} from "./commands/DescribePrincipalIdFormatCommand";
import {
  DescribePublicIpv4PoolsCommand,
  DescribePublicIpv4PoolsCommandInput,
  DescribePublicIpv4PoolsCommandOutput,
} from "./commands/DescribePublicIpv4PoolsCommand";
import {
  DescribeRegionsCommand,
  DescribeRegionsCommandInput,
  DescribeRegionsCommandOutput,
} from "./commands/DescribeRegionsCommand";
import {
  DescribeReplaceRootVolumeTasksCommand,
  DescribeReplaceRootVolumeTasksCommandInput,
  DescribeReplaceRootVolumeTasksCommandOutput,
} from "./commands/DescribeReplaceRootVolumeTasksCommand";
import {
  DescribeReservedInstancesCommand,
  DescribeReservedInstancesCommandInput,
  DescribeReservedInstancesCommandOutput,
} from "./commands/DescribeReservedInstancesCommand";
import {
  DescribeReservedInstancesListingsCommand,
  DescribeReservedInstancesListingsCommandInput,
  DescribeReservedInstancesListingsCommandOutput,
} from "./commands/DescribeReservedInstancesListingsCommand";
import {
  DescribeReservedInstancesModificationsCommand,
  DescribeReservedInstancesModificationsCommandInput,
  DescribeReservedInstancesModificationsCommandOutput,
} from "./commands/DescribeReservedInstancesModificationsCommand";
import {
  DescribeReservedInstancesOfferingsCommand,
  DescribeReservedInstancesOfferingsCommandInput,
  DescribeReservedInstancesOfferingsCommandOutput,
} from "./commands/DescribeReservedInstancesOfferingsCommand";
import {
  DescribeRouteServerEndpointsCommand,
  DescribeRouteServerEndpointsCommandInput,
  DescribeRouteServerEndpointsCommandOutput,
} from "./commands/DescribeRouteServerEndpointsCommand";
import {
  DescribeRouteServerPeersCommand,
  DescribeRouteServerPeersCommandInput,
  DescribeRouteServerPeersCommandOutput,
} from "./commands/DescribeRouteServerPeersCommand";
import {
  DescribeRouteServersCommand,
  DescribeRouteServersCommandInput,
  DescribeRouteServersCommandOutput,
} from "./commands/DescribeRouteServersCommand";
import {
  DescribeRouteTablesCommand,
  DescribeRouteTablesCommandInput,
  DescribeRouteTablesCommandOutput,
} from "./commands/DescribeRouteTablesCommand";
import {
  DescribeScheduledInstanceAvailabilityCommand,
  DescribeScheduledInstanceAvailabilityCommandInput,
  DescribeScheduledInstanceAvailabilityCommandOutput,
} from "./commands/DescribeScheduledInstanceAvailabilityCommand";
import {
  DescribeScheduledInstancesCommand,
  DescribeScheduledInstancesCommandInput,
  DescribeScheduledInstancesCommandOutput,
} from "./commands/DescribeScheduledInstancesCommand";
import {
  DescribeSecurityGroupReferencesCommand,
  DescribeSecurityGroupReferencesCommandInput,
  DescribeSecurityGroupReferencesCommandOutput,
} from "./commands/DescribeSecurityGroupReferencesCommand";
import {
  DescribeSecurityGroupRulesCommand,
  DescribeSecurityGroupRulesCommandInput,
  DescribeSecurityGroupRulesCommandOutput,
} from "./commands/DescribeSecurityGroupRulesCommand";
import {
  DescribeSecurityGroupsCommand,
  DescribeSecurityGroupsCommandInput,
  DescribeSecurityGroupsCommandOutput,
} from "./commands/DescribeSecurityGroupsCommand";
import {
  DescribeSecurityGroupVpcAssociationsCommand,
  DescribeSecurityGroupVpcAssociationsCommandInput,
  DescribeSecurityGroupVpcAssociationsCommandOutput,
} from "./commands/DescribeSecurityGroupVpcAssociationsCommand";
import {
  DescribeServiceLinkVirtualInterfacesCommand,
  DescribeServiceLinkVirtualInterfacesCommandInput,
  DescribeServiceLinkVirtualInterfacesCommandOutput,
} from "./commands/DescribeServiceLinkVirtualInterfacesCommand";
import {
  DescribeSnapshotAttributeCommand,
  DescribeSnapshotAttributeCommandInput,
  DescribeSnapshotAttributeCommandOutput,
} from "./commands/DescribeSnapshotAttributeCommand";
import {
  DescribeSnapshotsCommand,
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput,
} from "./commands/DescribeSnapshotsCommand";
import {
  DescribeSnapshotTierStatusCommand,
  DescribeSnapshotTierStatusCommandInput,
  DescribeSnapshotTierStatusCommandOutput,
} from "./commands/DescribeSnapshotTierStatusCommand";
import {
  DescribeSpotDatafeedSubscriptionCommand,
  DescribeSpotDatafeedSubscriptionCommandInput,
  DescribeSpotDatafeedSubscriptionCommandOutput,
} from "./commands/DescribeSpotDatafeedSubscriptionCommand";
import {
  DescribeSpotFleetInstancesCommand,
  DescribeSpotFleetInstancesCommandInput,
  DescribeSpotFleetInstancesCommandOutput,
} from "./commands/DescribeSpotFleetInstancesCommand";
import {
  DescribeSpotFleetRequestHistoryCommand,
  DescribeSpotFleetRequestHistoryCommandInput,
  DescribeSpotFleetRequestHistoryCommandOutput,
} from "./commands/DescribeSpotFleetRequestHistoryCommand";
import {
  DescribeSpotFleetRequestsCommand,
  DescribeSpotFleetRequestsCommandInput,
  DescribeSpotFleetRequestsCommandOutput,
} from "./commands/DescribeSpotFleetRequestsCommand";
import {
  DescribeSpotInstanceRequestsCommand,
  DescribeSpotInstanceRequestsCommandInput,
  DescribeSpotInstanceRequestsCommandOutput,
} from "./commands/DescribeSpotInstanceRequestsCommand";
import {
  DescribeSpotPriceHistoryCommand,
  DescribeSpotPriceHistoryCommandInput,
  DescribeSpotPriceHistoryCommandOutput,
} from "./commands/DescribeSpotPriceHistoryCommand";
import {
  DescribeStaleSecurityGroupsCommand,
  DescribeStaleSecurityGroupsCommandInput,
  DescribeStaleSecurityGroupsCommandOutput,
} from "./commands/DescribeStaleSecurityGroupsCommand";
import {
  DescribeStoreImageTasksCommand,
  DescribeStoreImageTasksCommandInput,
  DescribeStoreImageTasksCommandOutput,
} from "./commands/DescribeStoreImageTasksCommand";
import {
  DescribeSubnetsCommand,
  DescribeSubnetsCommandInput,
  DescribeSubnetsCommandOutput,
} from "./commands/DescribeSubnetsCommand";
import {
  DescribeTagsCommand,
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
} from "./commands/DescribeTagsCommand";
import {
  DescribeTrafficMirrorFilterRulesCommand,
  DescribeTrafficMirrorFilterRulesCommandInput,
  DescribeTrafficMirrorFilterRulesCommandOutput,
} from "./commands/DescribeTrafficMirrorFilterRulesCommand";
import {
  DescribeTrafficMirrorFiltersCommand,
  DescribeTrafficMirrorFiltersCommandInput,
  DescribeTrafficMirrorFiltersCommandOutput,
} from "./commands/DescribeTrafficMirrorFiltersCommand";
import {
  DescribeTrafficMirrorSessionsCommand,
  DescribeTrafficMirrorSessionsCommandInput,
  DescribeTrafficMirrorSessionsCommandOutput,
} from "./commands/DescribeTrafficMirrorSessionsCommand";
import {
  DescribeTrafficMirrorTargetsCommand,
  DescribeTrafficMirrorTargetsCommandInput,
  DescribeTrafficMirrorTargetsCommandOutput,
} from "./commands/DescribeTrafficMirrorTargetsCommand";
import {
  DescribeTransitGatewayAttachmentsCommand,
  DescribeTransitGatewayAttachmentsCommandInput,
  DescribeTransitGatewayAttachmentsCommandOutput,
} from "./commands/DescribeTransitGatewayAttachmentsCommand";
import {
  DescribeTransitGatewayConnectPeersCommand,
  DescribeTransitGatewayConnectPeersCommandInput,
  DescribeTransitGatewayConnectPeersCommandOutput,
} from "./commands/DescribeTransitGatewayConnectPeersCommand";
import {
  DescribeTransitGatewayConnectsCommand,
  DescribeTransitGatewayConnectsCommandInput,
  DescribeTransitGatewayConnectsCommandOutput,
} from "./commands/DescribeTransitGatewayConnectsCommand";
import {
  DescribeTransitGatewayMulticastDomainsCommand,
  DescribeTransitGatewayMulticastDomainsCommandInput,
  DescribeTransitGatewayMulticastDomainsCommandOutput,
} from "./commands/DescribeTransitGatewayMulticastDomainsCommand";
import {
  DescribeTransitGatewayPeeringAttachmentsCommand,
  DescribeTransitGatewayPeeringAttachmentsCommandInput,
  DescribeTransitGatewayPeeringAttachmentsCommandOutput,
} from "./commands/DescribeTransitGatewayPeeringAttachmentsCommand";
import {
  DescribeTransitGatewayPolicyTablesCommand,
  DescribeTransitGatewayPolicyTablesCommandInput,
  DescribeTransitGatewayPolicyTablesCommandOutput,
} from "./commands/DescribeTransitGatewayPolicyTablesCommand";
import {
  DescribeTransitGatewayRouteTableAnnouncementsCommand,
  DescribeTransitGatewayRouteTableAnnouncementsCommandInput,
  DescribeTransitGatewayRouteTableAnnouncementsCommandOutput,
} from "./commands/DescribeTransitGatewayRouteTableAnnouncementsCommand";
import {
  DescribeTransitGatewayRouteTablesCommand,
  DescribeTransitGatewayRouteTablesCommandInput,
  DescribeTransitGatewayRouteTablesCommandOutput,
} from "./commands/DescribeTransitGatewayRouteTablesCommand";
import {
  DescribeTransitGatewaysCommand,
  DescribeTransitGatewaysCommandInput,
  DescribeTransitGatewaysCommandOutput,
} from "./commands/DescribeTransitGatewaysCommand";
import {
  DescribeTransitGatewayVpcAttachmentsCommand,
  DescribeTransitGatewayVpcAttachmentsCommandInput,
  DescribeTransitGatewayVpcAttachmentsCommandOutput,
} from "./commands/DescribeTransitGatewayVpcAttachmentsCommand";
import {
  DescribeTrunkInterfaceAssociationsCommand,
  DescribeTrunkInterfaceAssociationsCommandInput,
  DescribeTrunkInterfaceAssociationsCommandOutput,
} from "./commands/DescribeTrunkInterfaceAssociationsCommand";
import {
  DescribeVerifiedAccessEndpointsCommand,
  DescribeVerifiedAccessEndpointsCommandInput,
  DescribeVerifiedAccessEndpointsCommandOutput,
} from "./commands/DescribeVerifiedAccessEndpointsCommand";
import {
  DescribeVerifiedAccessGroupsCommand,
  DescribeVerifiedAccessGroupsCommandInput,
  DescribeVerifiedAccessGroupsCommandOutput,
} from "./commands/DescribeVerifiedAccessGroupsCommand";
import {
  DescribeVerifiedAccessInstanceLoggingConfigurationsCommand,
  DescribeVerifiedAccessInstanceLoggingConfigurationsCommandInput,
  DescribeVerifiedAccessInstanceLoggingConfigurationsCommandOutput,
} from "./commands/DescribeVerifiedAccessInstanceLoggingConfigurationsCommand";
import {
  DescribeVerifiedAccessInstancesCommand,
  DescribeVerifiedAccessInstancesCommandInput,
  DescribeVerifiedAccessInstancesCommandOutput,
} from "./commands/DescribeVerifiedAccessInstancesCommand";
import {
  DescribeVerifiedAccessTrustProvidersCommand,
  DescribeVerifiedAccessTrustProvidersCommandInput,
  DescribeVerifiedAccessTrustProvidersCommandOutput,
} from "./commands/DescribeVerifiedAccessTrustProvidersCommand";
import {
  DescribeVolumeAttributeCommand,
  DescribeVolumeAttributeCommandInput,
  DescribeVolumeAttributeCommandOutput,
} from "./commands/DescribeVolumeAttributeCommand";
import {
  DescribeVolumesCommand,
  DescribeVolumesCommandInput,
  DescribeVolumesCommandOutput,
} from "./commands/DescribeVolumesCommand";
import {
  DescribeVolumesModificationsCommand,
  DescribeVolumesModificationsCommandInput,
  DescribeVolumesModificationsCommandOutput,
} from "./commands/DescribeVolumesModificationsCommand";
import {
  DescribeVolumeStatusCommand,
  DescribeVolumeStatusCommandInput,
  DescribeVolumeStatusCommandOutput,
} from "./commands/DescribeVolumeStatusCommand";
import {
  DescribeVpcAttributeCommand,
  DescribeVpcAttributeCommandInput,
  DescribeVpcAttributeCommandOutput,
} from "./commands/DescribeVpcAttributeCommand";
import {
  DescribeVpcBlockPublicAccessExclusionsCommand,
  DescribeVpcBlockPublicAccessExclusionsCommandInput,
  DescribeVpcBlockPublicAccessExclusionsCommandOutput,
} from "./commands/DescribeVpcBlockPublicAccessExclusionsCommand";
import {
  DescribeVpcBlockPublicAccessOptionsCommand,
  DescribeVpcBlockPublicAccessOptionsCommandInput,
  DescribeVpcBlockPublicAccessOptionsCommandOutput,
} from "./commands/DescribeVpcBlockPublicAccessOptionsCommand";
import {
  DescribeVpcClassicLinkCommand,
  DescribeVpcClassicLinkCommandInput,
  DescribeVpcClassicLinkCommandOutput,
} from "./commands/DescribeVpcClassicLinkCommand";
import {
  DescribeVpcClassicLinkDnsSupportCommand,
  DescribeVpcClassicLinkDnsSupportCommandInput,
  DescribeVpcClassicLinkDnsSupportCommandOutput,
} from "./commands/DescribeVpcClassicLinkDnsSupportCommand";
import {
  DescribeVpcEndpointAssociationsCommand,
  DescribeVpcEndpointAssociationsCommandInput,
  DescribeVpcEndpointAssociationsCommandOutput,
} from "./commands/DescribeVpcEndpointAssociationsCommand";
import {
  DescribeVpcEndpointConnectionNotificationsCommand,
  DescribeVpcEndpointConnectionNotificationsCommandInput,
  DescribeVpcEndpointConnectionNotificationsCommandOutput,
} from "./commands/DescribeVpcEndpointConnectionNotificationsCommand";
import {
  DescribeVpcEndpointConnectionsCommand,
  DescribeVpcEndpointConnectionsCommandInput,
  DescribeVpcEndpointConnectionsCommandOutput,
} from "./commands/DescribeVpcEndpointConnectionsCommand";
import {
  DescribeVpcEndpointsCommand,
  DescribeVpcEndpointsCommandInput,
  DescribeVpcEndpointsCommandOutput,
} from "./commands/DescribeVpcEndpointsCommand";
import {
  DescribeVpcEndpointServiceConfigurationsCommand,
  DescribeVpcEndpointServiceConfigurationsCommandInput,
  DescribeVpcEndpointServiceConfigurationsCommandOutput,
} from "./commands/DescribeVpcEndpointServiceConfigurationsCommand";
import {
  DescribeVpcEndpointServicePermissionsCommand,
  DescribeVpcEndpointServicePermissionsCommandInput,
  DescribeVpcEndpointServicePermissionsCommandOutput,
} from "./commands/DescribeVpcEndpointServicePermissionsCommand";
import {
  DescribeVpcEndpointServicesCommand,
  DescribeVpcEndpointServicesCommandInput,
  DescribeVpcEndpointServicesCommandOutput,
} from "./commands/DescribeVpcEndpointServicesCommand";
import {
  DescribeVpcPeeringConnectionsCommand,
  DescribeVpcPeeringConnectionsCommandInput,
  DescribeVpcPeeringConnectionsCommandOutput,
} from "./commands/DescribeVpcPeeringConnectionsCommand";
import {
  DescribeVpcsCommand,
  DescribeVpcsCommandInput,
  DescribeVpcsCommandOutput,
} from "./commands/DescribeVpcsCommand";
import {
  DescribeVpnConnectionsCommand,
  DescribeVpnConnectionsCommandInput,
  DescribeVpnConnectionsCommandOutput,
} from "./commands/DescribeVpnConnectionsCommand";
import {
  DescribeVpnGatewaysCommand,
  DescribeVpnGatewaysCommandInput,
  DescribeVpnGatewaysCommandOutput,
} from "./commands/DescribeVpnGatewaysCommand";
import {
  DetachClassicLinkVpcCommand,
  DetachClassicLinkVpcCommandInput,
  DetachClassicLinkVpcCommandOutput,
} from "./commands/DetachClassicLinkVpcCommand";
import {
  DetachInternetGatewayCommand,
  DetachInternetGatewayCommandInput,
  DetachInternetGatewayCommandOutput,
} from "./commands/DetachInternetGatewayCommand";
import {
  DetachNetworkInterfaceCommand,
  DetachNetworkInterfaceCommandInput,
  DetachNetworkInterfaceCommandOutput,
} from "./commands/DetachNetworkInterfaceCommand";
import {
  DetachVerifiedAccessTrustProviderCommand,
  DetachVerifiedAccessTrustProviderCommandInput,
  DetachVerifiedAccessTrustProviderCommandOutput,
} from "./commands/DetachVerifiedAccessTrustProviderCommand";
import {
  DetachVolumeCommand,
  DetachVolumeCommandInput,
  DetachVolumeCommandOutput,
} from "./commands/DetachVolumeCommand";
import {
  DetachVpnGatewayCommand,
  DetachVpnGatewayCommandInput,
  DetachVpnGatewayCommandOutput,
} from "./commands/DetachVpnGatewayCommand";
import {
  DisableAddressTransferCommand,
  DisableAddressTransferCommandInput,
  DisableAddressTransferCommandOutput,
} from "./commands/DisableAddressTransferCommand";
import {
  DisableAllowedImagesSettingsCommand,
  DisableAllowedImagesSettingsCommandInput,
  DisableAllowedImagesSettingsCommandOutput,
} from "./commands/DisableAllowedImagesSettingsCommand";
import {
  DisableAwsNetworkPerformanceMetricSubscriptionCommand,
  DisableAwsNetworkPerformanceMetricSubscriptionCommandInput,
  DisableAwsNetworkPerformanceMetricSubscriptionCommandOutput,
} from "./commands/DisableAwsNetworkPerformanceMetricSubscriptionCommand";
import {
  DisableEbsEncryptionByDefaultCommand,
  DisableEbsEncryptionByDefaultCommandInput,
  DisableEbsEncryptionByDefaultCommandOutput,
} from "./commands/DisableEbsEncryptionByDefaultCommand";
import {
  DisableFastLaunchCommand,
  DisableFastLaunchCommandInput,
  DisableFastLaunchCommandOutput,
} from "./commands/DisableFastLaunchCommand";
import {
  DisableFastSnapshotRestoresCommand,
  DisableFastSnapshotRestoresCommandInput,
  DisableFastSnapshotRestoresCommandOutput,
} from "./commands/DisableFastSnapshotRestoresCommand";
import {
  DisableImageBlockPublicAccessCommand,
  DisableImageBlockPublicAccessCommandInput,
  DisableImageBlockPublicAccessCommandOutput,
} from "./commands/DisableImageBlockPublicAccessCommand";
import {
  DisableImageCommand,
  DisableImageCommandInput,
  DisableImageCommandOutput,
} from "./commands/DisableImageCommand";
import {
  DisableImageDeprecationCommand,
  DisableImageDeprecationCommandInput,
  DisableImageDeprecationCommandOutput,
} from "./commands/DisableImageDeprecationCommand";
import {
  DisableImageDeregistrationProtectionCommand,
  DisableImageDeregistrationProtectionCommandInput,
  DisableImageDeregistrationProtectionCommandOutput,
} from "./commands/DisableImageDeregistrationProtectionCommand";
import {
  DisableIpamOrganizationAdminAccountCommand,
  DisableIpamOrganizationAdminAccountCommandInput,
  DisableIpamOrganizationAdminAccountCommandOutput,
} from "./commands/DisableIpamOrganizationAdminAccountCommand";
import {
  DisableRouteServerPropagationCommand,
  DisableRouteServerPropagationCommandInput,
  DisableRouteServerPropagationCommandOutput,
} from "./commands/DisableRouteServerPropagationCommand";
import {
  DisableSerialConsoleAccessCommand,
  DisableSerialConsoleAccessCommandInput,
  DisableSerialConsoleAccessCommandOutput,
} from "./commands/DisableSerialConsoleAccessCommand";
import {
  DisableSnapshotBlockPublicAccessCommand,
  DisableSnapshotBlockPublicAccessCommandInput,
  DisableSnapshotBlockPublicAccessCommandOutput,
} from "./commands/DisableSnapshotBlockPublicAccessCommand";
import {
  DisableTransitGatewayRouteTablePropagationCommand,
  DisableTransitGatewayRouteTablePropagationCommandInput,
  DisableTransitGatewayRouteTablePropagationCommandOutput,
} from "./commands/DisableTransitGatewayRouteTablePropagationCommand";
import {
  DisableVgwRoutePropagationCommand,
  DisableVgwRoutePropagationCommandInput,
  DisableVgwRoutePropagationCommandOutput,
} from "./commands/DisableVgwRoutePropagationCommand";
import {
  DisableVpcClassicLinkCommand,
  DisableVpcClassicLinkCommandInput,
  DisableVpcClassicLinkCommandOutput,
} from "./commands/DisableVpcClassicLinkCommand";
import {
  DisableVpcClassicLinkDnsSupportCommand,
  DisableVpcClassicLinkDnsSupportCommandInput,
  DisableVpcClassicLinkDnsSupportCommandOutput,
} from "./commands/DisableVpcClassicLinkDnsSupportCommand";
import {
  DisassociateAddressCommand,
  DisassociateAddressCommandInput,
  DisassociateAddressCommandOutput,
} from "./commands/DisassociateAddressCommand";
import {
  DisassociateCapacityReservationBillingOwnerCommand,
  DisassociateCapacityReservationBillingOwnerCommandInput,
  DisassociateCapacityReservationBillingOwnerCommandOutput,
} from "./commands/DisassociateCapacityReservationBillingOwnerCommand";
import {
  DisassociateClientVpnTargetNetworkCommand,
  DisassociateClientVpnTargetNetworkCommandInput,
  DisassociateClientVpnTargetNetworkCommandOutput,
} from "./commands/DisassociateClientVpnTargetNetworkCommand";
import {
  DisassociateEnclaveCertificateIamRoleCommand,
  DisassociateEnclaveCertificateIamRoleCommandInput,
  DisassociateEnclaveCertificateIamRoleCommandOutput,
} from "./commands/DisassociateEnclaveCertificateIamRoleCommand";
import {
  DisassociateIamInstanceProfileCommand,
  DisassociateIamInstanceProfileCommandInput,
  DisassociateIamInstanceProfileCommandOutput,
} from "./commands/DisassociateIamInstanceProfileCommand";
import {
  DisassociateInstanceEventWindowCommand,
  DisassociateInstanceEventWindowCommandInput,
  DisassociateInstanceEventWindowCommandOutput,
} from "./commands/DisassociateInstanceEventWindowCommand";
import {
  DisassociateIpamByoasnCommand,
  DisassociateIpamByoasnCommandInput,
  DisassociateIpamByoasnCommandOutput,
} from "./commands/DisassociateIpamByoasnCommand";
import {
  DisassociateIpamResourceDiscoveryCommand,
  DisassociateIpamResourceDiscoveryCommandInput,
  DisassociateIpamResourceDiscoveryCommandOutput,
} from "./commands/DisassociateIpamResourceDiscoveryCommand";
import {
  DisassociateNatGatewayAddressCommand,
  DisassociateNatGatewayAddressCommandInput,
  DisassociateNatGatewayAddressCommandOutput,
} from "./commands/DisassociateNatGatewayAddressCommand";
import {
  DisassociateRouteServerCommand,
  DisassociateRouteServerCommandInput,
  DisassociateRouteServerCommandOutput,
} from "./commands/DisassociateRouteServerCommand";
import {
  DisassociateRouteTableCommand,
  DisassociateRouteTableCommandInput,
  DisassociateRouteTableCommandOutput,
} from "./commands/DisassociateRouteTableCommand";
import {
  DisassociateSecurityGroupVpcCommand,
  DisassociateSecurityGroupVpcCommandInput,
  DisassociateSecurityGroupVpcCommandOutput,
} from "./commands/DisassociateSecurityGroupVpcCommand";
import {
  DisassociateSubnetCidrBlockCommand,
  DisassociateSubnetCidrBlockCommandInput,
  DisassociateSubnetCidrBlockCommandOutput,
} from "./commands/DisassociateSubnetCidrBlockCommand";
import {
  DisassociateTransitGatewayMulticastDomainCommand,
  DisassociateTransitGatewayMulticastDomainCommandInput,
  DisassociateTransitGatewayMulticastDomainCommandOutput,
} from "./commands/DisassociateTransitGatewayMulticastDomainCommand";
import {
  DisassociateTransitGatewayPolicyTableCommand,
  DisassociateTransitGatewayPolicyTableCommandInput,
  DisassociateTransitGatewayPolicyTableCommandOutput,
} from "./commands/DisassociateTransitGatewayPolicyTableCommand";
import {
  DisassociateTransitGatewayRouteTableCommand,
  DisassociateTransitGatewayRouteTableCommandInput,
  DisassociateTransitGatewayRouteTableCommandOutput,
} from "./commands/DisassociateTransitGatewayRouteTableCommand";
import {
  DisassociateTrunkInterfaceCommand,
  DisassociateTrunkInterfaceCommandInput,
  DisassociateTrunkInterfaceCommandOutput,
} from "./commands/DisassociateTrunkInterfaceCommand";
import {
  DisassociateVpcCidrBlockCommand,
  DisassociateVpcCidrBlockCommandInput,
  DisassociateVpcCidrBlockCommandOutput,
} from "./commands/DisassociateVpcCidrBlockCommand";
import {
  EnableAddressTransferCommand,
  EnableAddressTransferCommandInput,
  EnableAddressTransferCommandOutput,
} from "./commands/EnableAddressTransferCommand";
import {
  EnableAllowedImagesSettingsCommand,
  EnableAllowedImagesSettingsCommandInput,
  EnableAllowedImagesSettingsCommandOutput,
} from "./commands/EnableAllowedImagesSettingsCommand";
import {
  EnableAwsNetworkPerformanceMetricSubscriptionCommand,
  EnableAwsNetworkPerformanceMetricSubscriptionCommandInput,
  EnableAwsNetworkPerformanceMetricSubscriptionCommandOutput,
} from "./commands/EnableAwsNetworkPerformanceMetricSubscriptionCommand";
import {
  EnableEbsEncryptionByDefaultCommand,
  EnableEbsEncryptionByDefaultCommandInput,
  EnableEbsEncryptionByDefaultCommandOutput,
} from "./commands/EnableEbsEncryptionByDefaultCommand";
import {
  EnableFastLaunchCommand,
  EnableFastLaunchCommandInput,
  EnableFastLaunchCommandOutput,
} from "./commands/EnableFastLaunchCommand";
import {
  EnableFastSnapshotRestoresCommand,
  EnableFastSnapshotRestoresCommandInput,
  EnableFastSnapshotRestoresCommandOutput,
} from "./commands/EnableFastSnapshotRestoresCommand";
import {
  EnableImageBlockPublicAccessCommand,
  EnableImageBlockPublicAccessCommandInput,
  EnableImageBlockPublicAccessCommandOutput,
} from "./commands/EnableImageBlockPublicAccessCommand";
import { EnableImageCommand, EnableImageCommandInput, EnableImageCommandOutput } from "./commands/EnableImageCommand";
import {
  EnableImageDeprecationCommand,
  EnableImageDeprecationCommandInput,
  EnableImageDeprecationCommandOutput,
} from "./commands/EnableImageDeprecationCommand";
import {
  EnableImageDeregistrationProtectionCommand,
  EnableImageDeregistrationProtectionCommandInput,
  EnableImageDeregistrationProtectionCommandOutput,
} from "./commands/EnableImageDeregistrationProtectionCommand";
import {
  EnableIpamOrganizationAdminAccountCommand,
  EnableIpamOrganizationAdminAccountCommandInput,
  EnableIpamOrganizationAdminAccountCommandOutput,
} from "./commands/EnableIpamOrganizationAdminAccountCommand";
import {
  EnableReachabilityAnalyzerOrganizationSharingCommand,
  EnableReachabilityAnalyzerOrganizationSharingCommandInput,
  EnableReachabilityAnalyzerOrganizationSharingCommandOutput,
} from "./commands/EnableReachabilityAnalyzerOrganizationSharingCommand";
import {
  EnableRouteServerPropagationCommand,
  EnableRouteServerPropagationCommandInput,
  EnableRouteServerPropagationCommandOutput,
} from "./commands/EnableRouteServerPropagationCommand";
import {
  EnableSerialConsoleAccessCommand,
  EnableSerialConsoleAccessCommandInput,
  EnableSerialConsoleAccessCommandOutput,
} from "./commands/EnableSerialConsoleAccessCommand";
import {
  EnableSnapshotBlockPublicAccessCommand,
  EnableSnapshotBlockPublicAccessCommandInput,
  EnableSnapshotBlockPublicAccessCommandOutput,
} from "./commands/EnableSnapshotBlockPublicAccessCommand";
import {
  EnableTransitGatewayRouteTablePropagationCommand,
  EnableTransitGatewayRouteTablePropagationCommandInput,
  EnableTransitGatewayRouteTablePropagationCommandOutput,
} from "./commands/EnableTransitGatewayRouteTablePropagationCommand";
import {
  EnableVgwRoutePropagationCommand,
  EnableVgwRoutePropagationCommandInput,
  EnableVgwRoutePropagationCommandOutput,
} from "./commands/EnableVgwRoutePropagationCommand";
import {
  EnableVolumeIOCommand,
  EnableVolumeIOCommandInput,
  EnableVolumeIOCommandOutput,
} from "./commands/EnableVolumeIOCommand";
import {
  EnableVpcClassicLinkCommand,
  EnableVpcClassicLinkCommandInput,
  EnableVpcClassicLinkCommandOutput,
} from "./commands/EnableVpcClassicLinkCommand";
import {
  EnableVpcClassicLinkDnsSupportCommand,
  EnableVpcClassicLinkDnsSupportCommandInput,
  EnableVpcClassicLinkDnsSupportCommandOutput,
} from "./commands/EnableVpcClassicLinkDnsSupportCommand";
import {
  ExportClientVpnClientCertificateRevocationListCommand,
  ExportClientVpnClientCertificateRevocationListCommandInput,
  ExportClientVpnClientCertificateRevocationListCommandOutput,
} from "./commands/ExportClientVpnClientCertificateRevocationListCommand";
import {
  ExportClientVpnClientConfigurationCommand,
  ExportClientVpnClientConfigurationCommandInput,
  ExportClientVpnClientConfigurationCommandOutput,
} from "./commands/ExportClientVpnClientConfigurationCommand";
import { ExportImageCommand, ExportImageCommandInput, ExportImageCommandOutput } from "./commands/ExportImageCommand";
import {
  ExportTransitGatewayRoutesCommand,
  ExportTransitGatewayRoutesCommandInput,
  ExportTransitGatewayRoutesCommandOutput,
} from "./commands/ExportTransitGatewayRoutesCommand";
import {
  ExportVerifiedAccessInstanceClientConfigurationCommand,
  ExportVerifiedAccessInstanceClientConfigurationCommandInput,
  ExportVerifiedAccessInstanceClientConfigurationCommandOutput,
} from "./commands/ExportVerifiedAccessInstanceClientConfigurationCommand";
import {
  GetActiveVpnTunnelStatusCommand,
  GetActiveVpnTunnelStatusCommandInput,
  GetActiveVpnTunnelStatusCommandOutput,
} from "./commands/GetActiveVpnTunnelStatusCommand";
import {
  GetAllowedImagesSettingsCommand,
  GetAllowedImagesSettingsCommandInput,
  GetAllowedImagesSettingsCommandOutput,
} from "./commands/GetAllowedImagesSettingsCommand";
import {
  GetAssociatedEnclaveCertificateIamRolesCommand,
  GetAssociatedEnclaveCertificateIamRolesCommandInput,
  GetAssociatedEnclaveCertificateIamRolesCommandOutput,
} from "./commands/GetAssociatedEnclaveCertificateIamRolesCommand";
import {
  GetAssociatedIpv6PoolCidrsCommand,
  GetAssociatedIpv6PoolCidrsCommandInput,
  GetAssociatedIpv6PoolCidrsCommandOutput,
} from "./commands/GetAssociatedIpv6PoolCidrsCommand";
import {
  GetAwsNetworkPerformanceDataCommand,
  GetAwsNetworkPerformanceDataCommandInput,
  GetAwsNetworkPerformanceDataCommandOutput,
} from "./commands/GetAwsNetworkPerformanceDataCommand";
import {
  GetCapacityReservationUsageCommand,
  GetCapacityReservationUsageCommandInput,
  GetCapacityReservationUsageCommandOutput,
} from "./commands/GetCapacityReservationUsageCommand";
import {
  GetCoipPoolUsageCommand,
  GetCoipPoolUsageCommandInput,
  GetCoipPoolUsageCommandOutput,
} from "./commands/GetCoipPoolUsageCommand";
import {
  GetConsoleOutputCommand,
  GetConsoleOutputCommandInput,
  GetConsoleOutputCommandOutput,
} from "./commands/GetConsoleOutputCommand";
import {
  GetConsoleScreenshotCommand,
  GetConsoleScreenshotCommandInput,
  GetConsoleScreenshotCommandOutput,
} from "./commands/GetConsoleScreenshotCommand";
import {
  GetDeclarativePoliciesReportSummaryCommand,
  GetDeclarativePoliciesReportSummaryCommandInput,
  GetDeclarativePoliciesReportSummaryCommandOutput,
} from "./commands/GetDeclarativePoliciesReportSummaryCommand";
import {
  GetDefaultCreditSpecificationCommand,
  GetDefaultCreditSpecificationCommandInput,
  GetDefaultCreditSpecificationCommandOutput,
} from "./commands/GetDefaultCreditSpecificationCommand";
import {
  GetEbsDefaultKmsKeyIdCommand,
  GetEbsDefaultKmsKeyIdCommandInput,
  GetEbsDefaultKmsKeyIdCommandOutput,
} from "./commands/GetEbsDefaultKmsKeyIdCommand";
import {
  GetEbsEncryptionByDefaultCommand,
  GetEbsEncryptionByDefaultCommandInput,
  GetEbsEncryptionByDefaultCommandOutput,
} from "./commands/GetEbsEncryptionByDefaultCommand";
import {
  GetFlowLogsIntegrationTemplateCommand,
  GetFlowLogsIntegrationTemplateCommandInput,
  GetFlowLogsIntegrationTemplateCommandOutput,
} from "./commands/GetFlowLogsIntegrationTemplateCommand";
import {
  GetGroupsForCapacityReservationCommand,
  GetGroupsForCapacityReservationCommandInput,
  GetGroupsForCapacityReservationCommandOutput,
} from "./commands/GetGroupsForCapacityReservationCommand";
import {
  GetHostReservationPurchasePreviewCommand,
  GetHostReservationPurchasePreviewCommandInput,
  GetHostReservationPurchasePreviewCommandOutput,
} from "./commands/GetHostReservationPurchasePreviewCommand";
import {
  GetImageBlockPublicAccessStateCommand,
  GetImageBlockPublicAccessStateCommandInput,
  GetImageBlockPublicAccessStateCommandOutput,
} from "./commands/GetImageBlockPublicAccessStateCommand";
import {
  GetInstanceMetadataDefaultsCommand,
  GetInstanceMetadataDefaultsCommandInput,
  GetInstanceMetadataDefaultsCommandOutput,
} from "./commands/GetInstanceMetadataDefaultsCommand";
import {
  GetInstanceTpmEkPubCommand,
  GetInstanceTpmEkPubCommandInput,
  GetInstanceTpmEkPubCommandOutput,
} from "./commands/GetInstanceTpmEkPubCommand";
import {
  GetInstanceTypesFromInstanceRequirementsCommand,
  GetInstanceTypesFromInstanceRequirementsCommandInput,
  GetInstanceTypesFromInstanceRequirementsCommandOutput,
} from "./commands/GetInstanceTypesFromInstanceRequirementsCommand";
import {
  GetInstanceUefiDataCommand,
  GetInstanceUefiDataCommandInput,
  GetInstanceUefiDataCommandOutput,
} from "./commands/GetInstanceUefiDataCommand";
import {
  GetIpamAddressHistoryCommand,
  GetIpamAddressHistoryCommandInput,
  GetIpamAddressHistoryCommandOutput,
} from "./commands/GetIpamAddressHistoryCommand";
import {
  GetIpamDiscoveredAccountsCommand,
  GetIpamDiscoveredAccountsCommandInput,
  GetIpamDiscoveredAccountsCommandOutput,
} from "./commands/GetIpamDiscoveredAccountsCommand";
import {
  GetIpamDiscoveredPublicAddressesCommand,
  GetIpamDiscoveredPublicAddressesCommandInput,
  GetIpamDiscoveredPublicAddressesCommandOutput,
} from "./commands/GetIpamDiscoveredPublicAddressesCommand";
import {
  GetIpamDiscoveredResourceCidrsCommand,
  GetIpamDiscoveredResourceCidrsCommandInput,
  GetIpamDiscoveredResourceCidrsCommandOutput,
} from "./commands/GetIpamDiscoveredResourceCidrsCommand";
import {
  GetIpamPoolAllocationsCommand,
  GetIpamPoolAllocationsCommandInput,
  GetIpamPoolAllocationsCommandOutput,
} from "./commands/GetIpamPoolAllocationsCommand";
import {
  GetIpamPoolCidrsCommand,
  GetIpamPoolCidrsCommandInput,
  GetIpamPoolCidrsCommandOutput,
} from "./commands/GetIpamPoolCidrsCommand";
import {
  GetIpamResourceCidrsCommand,
  GetIpamResourceCidrsCommandInput,
  GetIpamResourceCidrsCommandOutput,
} from "./commands/GetIpamResourceCidrsCommand";
import {
  GetLaunchTemplateDataCommand,
  GetLaunchTemplateDataCommandInput,
  GetLaunchTemplateDataCommandOutput,
} from "./commands/GetLaunchTemplateDataCommand";
import {
  GetManagedPrefixListAssociationsCommand,
  GetManagedPrefixListAssociationsCommandInput,
  GetManagedPrefixListAssociationsCommandOutput,
} from "./commands/GetManagedPrefixListAssociationsCommand";
import {
  GetManagedPrefixListEntriesCommand,
  GetManagedPrefixListEntriesCommandInput,
  GetManagedPrefixListEntriesCommandOutput,
} from "./commands/GetManagedPrefixListEntriesCommand";
import {
  GetNetworkInsightsAccessScopeAnalysisFindingsCommand,
  GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput,
  GetNetworkInsightsAccessScopeAnalysisFindingsCommandOutput,
} from "./commands/GetNetworkInsightsAccessScopeAnalysisFindingsCommand";
import {
  GetNetworkInsightsAccessScopeContentCommand,
  GetNetworkInsightsAccessScopeContentCommandInput,
  GetNetworkInsightsAccessScopeContentCommandOutput,
} from "./commands/GetNetworkInsightsAccessScopeContentCommand";
import {
  GetPasswordDataCommand,
  GetPasswordDataCommandInput,
  GetPasswordDataCommandOutput,
} from "./commands/GetPasswordDataCommand";
import {
  GetReservedInstancesExchangeQuoteCommand,
  GetReservedInstancesExchangeQuoteCommandInput,
  GetReservedInstancesExchangeQuoteCommandOutput,
} from "./commands/GetReservedInstancesExchangeQuoteCommand";
import {
  GetRouteServerAssociationsCommand,
  GetRouteServerAssociationsCommandInput,
  GetRouteServerAssociationsCommandOutput,
} from "./commands/GetRouteServerAssociationsCommand";
import {
  GetRouteServerPropagationsCommand,
  GetRouteServerPropagationsCommandInput,
  GetRouteServerPropagationsCommandOutput,
} from "./commands/GetRouteServerPropagationsCommand";
import {
  GetRouteServerRoutingDatabaseCommand,
  GetRouteServerRoutingDatabaseCommandInput,
  GetRouteServerRoutingDatabaseCommandOutput,
} from "./commands/GetRouteServerRoutingDatabaseCommand";
import {
  GetSecurityGroupsForVpcCommand,
  GetSecurityGroupsForVpcCommandInput,
  GetSecurityGroupsForVpcCommandOutput,
} from "./commands/GetSecurityGroupsForVpcCommand";
import {
  GetSerialConsoleAccessStatusCommand,
  GetSerialConsoleAccessStatusCommandInput,
  GetSerialConsoleAccessStatusCommandOutput,
} from "./commands/GetSerialConsoleAccessStatusCommand";
import {
  GetSnapshotBlockPublicAccessStateCommand,
  GetSnapshotBlockPublicAccessStateCommandInput,
  GetSnapshotBlockPublicAccessStateCommandOutput,
} from "./commands/GetSnapshotBlockPublicAccessStateCommand";
import {
  GetSpotPlacementScoresCommand,
  GetSpotPlacementScoresCommandInput,
  GetSpotPlacementScoresCommandOutput,
} from "./commands/GetSpotPlacementScoresCommand";
import {
  GetSubnetCidrReservationsCommand,
  GetSubnetCidrReservationsCommandInput,
  GetSubnetCidrReservationsCommandOutput,
} from "./commands/GetSubnetCidrReservationsCommand";
import {
  GetTransitGatewayAttachmentPropagationsCommand,
  GetTransitGatewayAttachmentPropagationsCommandInput,
  GetTransitGatewayAttachmentPropagationsCommandOutput,
} from "./commands/GetTransitGatewayAttachmentPropagationsCommand";
import {
  GetTransitGatewayMulticastDomainAssociationsCommand,
  GetTransitGatewayMulticastDomainAssociationsCommandInput,
  GetTransitGatewayMulticastDomainAssociationsCommandOutput,
} from "./commands/GetTransitGatewayMulticastDomainAssociationsCommand";
import {
  GetTransitGatewayPolicyTableAssociationsCommand,
  GetTransitGatewayPolicyTableAssociationsCommandInput,
  GetTransitGatewayPolicyTableAssociationsCommandOutput,
} from "./commands/GetTransitGatewayPolicyTableAssociationsCommand";
import {
  GetTransitGatewayPolicyTableEntriesCommand,
  GetTransitGatewayPolicyTableEntriesCommandInput,
  GetTransitGatewayPolicyTableEntriesCommandOutput,
} from "./commands/GetTransitGatewayPolicyTableEntriesCommand";
import {
  GetTransitGatewayPrefixListReferencesCommand,
  GetTransitGatewayPrefixListReferencesCommandInput,
  GetTransitGatewayPrefixListReferencesCommandOutput,
} from "./commands/GetTransitGatewayPrefixListReferencesCommand";
import {
  GetTransitGatewayRouteTableAssociationsCommand,
  GetTransitGatewayRouteTableAssociationsCommandInput,
  GetTransitGatewayRouteTableAssociationsCommandOutput,
} from "./commands/GetTransitGatewayRouteTableAssociationsCommand";
import {
  GetTransitGatewayRouteTablePropagationsCommand,
  GetTransitGatewayRouteTablePropagationsCommandInput,
  GetTransitGatewayRouteTablePropagationsCommandOutput,
} from "./commands/GetTransitGatewayRouteTablePropagationsCommand";
import {
  GetVerifiedAccessEndpointPolicyCommand,
  GetVerifiedAccessEndpointPolicyCommandInput,
  GetVerifiedAccessEndpointPolicyCommandOutput,
} from "./commands/GetVerifiedAccessEndpointPolicyCommand";
import {
  GetVerifiedAccessEndpointTargetsCommand,
  GetVerifiedAccessEndpointTargetsCommandInput,
  GetVerifiedAccessEndpointTargetsCommandOutput,
} from "./commands/GetVerifiedAccessEndpointTargetsCommand";
import {
  GetVerifiedAccessGroupPolicyCommand,
  GetVerifiedAccessGroupPolicyCommandInput,
  GetVerifiedAccessGroupPolicyCommandOutput,
} from "./commands/GetVerifiedAccessGroupPolicyCommand";
import {
  GetVpnConnectionDeviceSampleConfigurationCommand,
  GetVpnConnectionDeviceSampleConfigurationCommandInput,
  GetVpnConnectionDeviceSampleConfigurationCommandOutput,
} from "./commands/GetVpnConnectionDeviceSampleConfigurationCommand";
import {
  GetVpnConnectionDeviceTypesCommand,
  GetVpnConnectionDeviceTypesCommandInput,
  GetVpnConnectionDeviceTypesCommandOutput,
} from "./commands/GetVpnConnectionDeviceTypesCommand";
import {
  GetVpnTunnelReplacementStatusCommand,
  GetVpnTunnelReplacementStatusCommandInput,
  GetVpnTunnelReplacementStatusCommandOutput,
} from "./commands/GetVpnTunnelReplacementStatusCommand";
import {
  ImportClientVpnClientCertificateRevocationListCommand,
  ImportClientVpnClientCertificateRevocationListCommandInput,
  ImportClientVpnClientCertificateRevocationListCommandOutput,
} from "./commands/ImportClientVpnClientCertificateRevocationListCommand";
import { ImportImageCommand, ImportImageCommandInput, ImportImageCommandOutput } from "./commands/ImportImageCommand";
import {
  ImportInstanceCommand,
  ImportInstanceCommandInput,
  ImportInstanceCommandOutput,
} from "./commands/ImportInstanceCommand";
import {
  ImportKeyPairCommand,
  ImportKeyPairCommandInput,
  ImportKeyPairCommandOutput,
} from "./commands/ImportKeyPairCommand";
import {
  ImportSnapshotCommand,
  ImportSnapshotCommandInput,
  ImportSnapshotCommandOutput,
} from "./commands/ImportSnapshotCommand";
import {
  ImportVolumeCommand,
  ImportVolumeCommandInput,
  ImportVolumeCommandOutput,
} from "./commands/ImportVolumeCommand";
import {
  ListImagesInRecycleBinCommand,
  ListImagesInRecycleBinCommandInput,
  ListImagesInRecycleBinCommandOutput,
} from "./commands/ListImagesInRecycleBinCommand";
import {
  ListSnapshotsInRecycleBinCommand,
  ListSnapshotsInRecycleBinCommandInput,
  ListSnapshotsInRecycleBinCommandOutput,
} from "./commands/ListSnapshotsInRecycleBinCommand";
import {
  LockSnapshotCommand,
  LockSnapshotCommandInput,
  LockSnapshotCommandOutput,
} from "./commands/LockSnapshotCommand";
import {
  ModifyAddressAttributeCommand,
  ModifyAddressAttributeCommandInput,
  ModifyAddressAttributeCommandOutput,
} from "./commands/ModifyAddressAttributeCommand";
import {
  ModifyAvailabilityZoneGroupCommand,
  ModifyAvailabilityZoneGroupCommandInput,
  ModifyAvailabilityZoneGroupCommandOutput,
} from "./commands/ModifyAvailabilityZoneGroupCommand";
import {
  ModifyCapacityReservationCommand,
  ModifyCapacityReservationCommandInput,
  ModifyCapacityReservationCommandOutput,
} from "./commands/ModifyCapacityReservationCommand";
import {
  ModifyCapacityReservationFleetCommand,
  ModifyCapacityReservationFleetCommandInput,
  ModifyCapacityReservationFleetCommandOutput,
} from "./commands/ModifyCapacityReservationFleetCommand";
import {
  ModifyClientVpnEndpointCommand,
  ModifyClientVpnEndpointCommandInput,
  ModifyClientVpnEndpointCommandOutput,
} from "./commands/ModifyClientVpnEndpointCommand";
import {
  ModifyDefaultCreditSpecificationCommand,
  ModifyDefaultCreditSpecificationCommandInput,
  ModifyDefaultCreditSpecificationCommandOutput,
} from "./commands/ModifyDefaultCreditSpecificationCommand";
import {
  ModifyEbsDefaultKmsKeyIdCommand,
  ModifyEbsDefaultKmsKeyIdCommandInput,
  ModifyEbsDefaultKmsKeyIdCommandOutput,
} from "./commands/ModifyEbsDefaultKmsKeyIdCommand";
import { ModifyFleetCommand, ModifyFleetCommandInput, ModifyFleetCommandOutput } from "./commands/ModifyFleetCommand";
import {
  ModifyFpgaImageAttributeCommand,
  ModifyFpgaImageAttributeCommandInput,
  ModifyFpgaImageAttributeCommandOutput,
} from "./commands/ModifyFpgaImageAttributeCommand";
import { ModifyHostsCommand, ModifyHostsCommandInput, ModifyHostsCommandOutput } from "./commands/ModifyHostsCommand";
import {
  ModifyIdentityIdFormatCommand,
  ModifyIdentityIdFormatCommandInput,
  ModifyIdentityIdFormatCommandOutput,
} from "./commands/ModifyIdentityIdFormatCommand";
import {
  ModifyIdFormatCommand,
  ModifyIdFormatCommandInput,
  ModifyIdFormatCommandOutput,
} from "./commands/ModifyIdFormatCommand";
import {
  ModifyImageAttributeCommand,
  ModifyImageAttributeCommandInput,
  ModifyImageAttributeCommandOutput,
} from "./commands/ModifyImageAttributeCommand";
import {
  ModifyInstanceAttributeCommand,
  ModifyInstanceAttributeCommandInput,
  ModifyInstanceAttributeCommandOutput,
} from "./commands/ModifyInstanceAttributeCommand";
import {
  ModifyInstanceCapacityReservationAttributesCommand,
  ModifyInstanceCapacityReservationAttributesCommandInput,
  ModifyInstanceCapacityReservationAttributesCommandOutput,
} from "./commands/ModifyInstanceCapacityReservationAttributesCommand";
import {
  ModifyInstanceCpuOptionsCommand,
  ModifyInstanceCpuOptionsCommandInput,
  ModifyInstanceCpuOptionsCommandOutput,
} from "./commands/ModifyInstanceCpuOptionsCommand";
import {
  ModifyInstanceCreditSpecificationCommand,
  ModifyInstanceCreditSpecificationCommandInput,
  ModifyInstanceCreditSpecificationCommandOutput,
} from "./commands/ModifyInstanceCreditSpecificationCommand";
import {
  ModifyInstanceEventStartTimeCommand,
  ModifyInstanceEventStartTimeCommandInput,
  ModifyInstanceEventStartTimeCommandOutput,
} from "./commands/ModifyInstanceEventStartTimeCommand";
import {
  ModifyInstanceEventWindowCommand,
  ModifyInstanceEventWindowCommandInput,
  ModifyInstanceEventWindowCommandOutput,
} from "./commands/ModifyInstanceEventWindowCommand";
import {
  ModifyInstanceMaintenanceOptionsCommand,
  ModifyInstanceMaintenanceOptionsCommandInput,
  ModifyInstanceMaintenanceOptionsCommandOutput,
} from "./commands/ModifyInstanceMaintenanceOptionsCommand";
import {
  ModifyInstanceMetadataDefaultsCommand,
  ModifyInstanceMetadataDefaultsCommandInput,
  ModifyInstanceMetadataDefaultsCommandOutput,
} from "./commands/ModifyInstanceMetadataDefaultsCommand";
import {
  ModifyInstanceMetadataOptionsCommand,
  ModifyInstanceMetadataOptionsCommandInput,
  ModifyInstanceMetadataOptionsCommandOutput,
} from "./commands/ModifyInstanceMetadataOptionsCommand";
import {
  ModifyInstanceNetworkPerformanceOptionsCommand,
  ModifyInstanceNetworkPerformanceOptionsCommandInput,
  ModifyInstanceNetworkPerformanceOptionsCommandOutput,
} from "./commands/ModifyInstanceNetworkPerformanceOptionsCommand";
import {
  ModifyInstancePlacementCommand,
  ModifyInstancePlacementCommandInput,
  ModifyInstancePlacementCommandOutput,
} from "./commands/ModifyInstancePlacementCommand";
import { ModifyIpamCommand, ModifyIpamCommandInput, ModifyIpamCommandOutput } from "./commands/ModifyIpamCommand";
import {
  ModifyIpamPoolCommand,
  ModifyIpamPoolCommandInput,
  ModifyIpamPoolCommandOutput,
} from "./commands/ModifyIpamPoolCommand";
import {
  ModifyIpamResourceCidrCommand,
  ModifyIpamResourceCidrCommandInput,
  ModifyIpamResourceCidrCommandOutput,
} from "./commands/ModifyIpamResourceCidrCommand";
import {
  ModifyIpamResourceDiscoveryCommand,
  ModifyIpamResourceDiscoveryCommandInput,
  ModifyIpamResourceDiscoveryCommandOutput,
} from "./commands/ModifyIpamResourceDiscoveryCommand";
import {
  ModifyIpamScopeCommand,
  ModifyIpamScopeCommandInput,
  ModifyIpamScopeCommandOutput,
} from "./commands/ModifyIpamScopeCommand";
import {
  ModifyLaunchTemplateCommand,
  ModifyLaunchTemplateCommandInput,
  ModifyLaunchTemplateCommandOutput,
} from "./commands/ModifyLaunchTemplateCommand";
import {
  ModifyLocalGatewayRouteCommand,
  ModifyLocalGatewayRouteCommandInput,
  ModifyLocalGatewayRouteCommandOutput,
} from "./commands/ModifyLocalGatewayRouteCommand";
import {
  ModifyManagedPrefixListCommand,
  ModifyManagedPrefixListCommandInput,
  ModifyManagedPrefixListCommandOutput,
} from "./commands/ModifyManagedPrefixListCommand";
import {
  ModifyNetworkInterfaceAttributeCommand,
  ModifyNetworkInterfaceAttributeCommandInput,
  ModifyNetworkInterfaceAttributeCommandOutput,
} from "./commands/ModifyNetworkInterfaceAttributeCommand";
import {
  ModifyPrivateDnsNameOptionsCommand,
  ModifyPrivateDnsNameOptionsCommandInput,
  ModifyPrivateDnsNameOptionsCommandOutput,
} from "./commands/ModifyPrivateDnsNameOptionsCommand";
import {
  ModifyPublicIpDnsNameOptionsCommand,
  ModifyPublicIpDnsNameOptionsCommandInput,
  ModifyPublicIpDnsNameOptionsCommandOutput,
} from "./commands/ModifyPublicIpDnsNameOptionsCommand";
import {
  ModifyReservedInstancesCommand,
  ModifyReservedInstancesCommandInput,
  ModifyReservedInstancesCommandOutput,
} from "./commands/ModifyReservedInstancesCommand";
import {
  ModifyRouteServerCommand,
  ModifyRouteServerCommandInput,
  ModifyRouteServerCommandOutput,
} from "./commands/ModifyRouteServerCommand";
import {
  ModifySecurityGroupRulesCommand,
  ModifySecurityGroupRulesCommandInput,
  ModifySecurityGroupRulesCommandOutput,
} from "./commands/ModifySecurityGroupRulesCommand";
import {
  ModifySnapshotAttributeCommand,
  ModifySnapshotAttributeCommandInput,
  ModifySnapshotAttributeCommandOutput,
} from "./commands/ModifySnapshotAttributeCommand";
import {
  ModifySnapshotTierCommand,
  ModifySnapshotTierCommandInput,
  ModifySnapshotTierCommandOutput,
} from "./commands/ModifySnapshotTierCommand";
import {
  ModifySpotFleetRequestCommand,
  ModifySpotFleetRequestCommandInput,
  ModifySpotFleetRequestCommandOutput,
} from "./commands/ModifySpotFleetRequestCommand";
import {
  ModifySubnetAttributeCommand,
  ModifySubnetAttributeCommandInput,
  ModifySubnetAttributeCommandOutput,
} from "./commands/ModifySubnetAttributeCommand";
import {
  ModifyTrafficMirrorFilterNetworkServicesCommand,
  ModifyTrafficMirrorFilterNetworkServicesCommandInput,
  ModifyTrafficMirrorFilterNetworkServicesCommandOutput,
} from "./commands/ModifyTrafficMirrorFilterNetworkServicesCommand";
import {
  ModifyTrafficMirrorFilterRuleCommand,
  ModifyTrafficMirrorFilterRuleCommandInput,
  ModifyTrafficMirrorFilterRuleCommandOutput,
} from "./commands/ModifyTrafficMirrorFilterRuleCommand";
import {
  ModifyTrafficMirrorSessionCommand,
  ModifyTrafficMirrorSessionCommandInput,
  ModifyTrafficMirrorSessionCommandOutput,
} from "./commands/ModifyTrafficMirrorSessionCommand";
import {
  ModifyTransitGatewayCommand,
  ModifyTransitGatewayCommandInput,
  ModifyTransitGatewayCommandOutput,
} from "./commands/ModifyTransitGatewayCommand";
import {
  ModifyTransitGatewayPrefixListReferenceCommand,
  ModifyTransitGatewayPrefixListReferenceCommandInput,
  ModifyTransitGatewayPrefixListReferenceCommandOutput,
} from "./commands/ModifyTransitGatewayPrefixListReferenceCommand";
import {
  ModifyTransitGatewayVpcAttachmentCommand,
  ModifyTransitGatewayVpcAttachmentCommandInput,
  ModifyTransitGatewayVpcAttachmentCommandOutput,
} from "./commands/ModifyTransitGatewayVpcAttachmentCommand";
import {
  ModifyVerifiedAccessEndpointCommand,
  ModifyVerifiedAccessEndpointCommandInput,
  ModifyVerifiedAccessEndpointCommandOutput,
} from "./commands/ModifyVerifiedAccessEndpointCommand";
import {
  ModifyVerifiedAccessEndpointPolicyCommand,
  ModifyVerifiedAccessEndpointPolicyCommandInput,
  ModifyVerifiedAccessEndpointPolicyCommandOutput,
} from "./commands/ModifyVerifiedAccessEndpointPolicyCommand";
import {
  ModifyVerifiedAccessGroupCommand,
  ModifyVerifiedAccessGroupCommandInput,
  ModifyVerifiedAccessGroupCommandOutput,
} from "./commands/ModifyVerifiedAccessGroupCommand";
import {
  ModifyVerifiedAccessGroupPolicyCommand,
  ModifyVerifiedAccessGroupPolicyCommandInput,
  ModifyVerifiedAccessGroupPolicyCommandOutput,
} from "./commands/ModifyVerifiedAccessGroupPolicyCommand";
import {
  ModifyVerifiedAccessInstanceCommand,
  ModifyVerifiedAccessInstanceCommandInput,
  ModifyVerifiedAccessInstanceCommandOutput,
} from "./commands/ModifyVerifiedAccessInstanceCommand";
import {
  ModifyVerifiedAccessInstanceLoggingConfigurationCommand,
  ModifyVerifiedAccessInstanceLoggingConfigurationCommandInput,
  ModifyVerifiedAccessInstanceLoggingConfigurationCommandOutput,
} from "./commands/ModifyVerifiedAccessInstanceLoggingConfigurationCommand";
import {
  ModifyVerifiedAccessTrustProviderCommand,
  ModifyVerifiedAccessTrustProviderCommandInput,
  ModifyVerifiedAccessTrustProviderCommandOutput,
} from "./commands/ModifyVerifiedAccessTrustProviderCommand";
import {
  ModifyVolumeAttributeCommand,
  ModifyVolumeAttributeCommandInput,
  ModifyVolumeAttributeCommandOutput,
} from "./commands/ModifyVolumeAttributeCommand";
import {
  ModifyVolumeCommand,
  ModifyVolumeCommandInput,
  ModifyVolumeCommandOutput,
} from "./commands/ModifyVolumeCommand";
import {
  ModifyVpcAttributeCommand,
  ModifyVpcAttributeCommandInput,
  ModifyVpcAttributeCommandOutput,
} from "./commands/ModifyVpcAttributeCommand";
import {
  ModifyVpcBlockPublicAccessExclusionCommand,
  ModifyVpcBlockPublicAccessExclusionCommandInput,
  ModifyVpcBlockPublicAccessExclusionCommandOutput,
} from "./commands/ModifyVpcBlockPublicAccessExclusionCommand";
import {
  ModifyVpcBlockPublicAccessOptionsCommand,
  ModifyVpcBlockPublicAccessOptionsCommandInput,
  ModifyVpcBlockPublicAccessOptionsCommandOutput,
} from "./commands/ModifyVpcBlockPublicAccessOptionsCommand";
import {
  ModifyVpcEndpointCommand,
  ModifyVpcEndpointCommandInput,
  ModifyVpcEndpointCommandOutput,
} from "./commands/ModifyVpcEndpointCommand";
import {
  ModifyVpcEndpointConnectionNotificationCommand,
  ModifyVpcEndpointConnectionNotificationCommandInput,
  ModifyVpcEndpointConnectionNotificationCommandOutput,
} from "./commands/ModifyVpcEndpointConnectionNotificationCommand";
import {
  ModifyVpcEndpointServiceConfigurationCommand,
  ModifyVpcEndpointServiceConfigurationCommandInput,
  ModifyVpcEndpointServiceConfigurationCommandOutput,
} from "./commands/ModifyVpcEndpointServiceConfigurationCommand";
import {
  ModifyVpcEndpointServicePayerResponsibilityCommand,
  ModifyVpcEndpointServicePayerResponsibilityCommandInput,
  ModifyVpcEndpointServicePayerResponsibilityCommandOutput,
} from "./commands/ModifyVpcEndpointServicePayerResponsibilityCommand";
import {
  ModifyVpcEndpointServicePermissionsCommand,
  ModifyVpcEndpointServicePermissionsCommandInput,
  ModifyVpcEndpointServicePermissionsCommandOutput,
} from "./commands/ModifyVpcEndpointServicePermissionsCommand";
import {
  ModifyVpcPeeringConnectionOptionsCommand,
  ModifyVpcPeeringConnectionOptionsCommandInput,
  ModifyVpcPeeringConnectionOptionsCommandOutput,
} from "./commands/ModifyVpcPeeringConnectionOptionsCommand";
import {
  ModifyVpcTenancyCommand,
  ModifyVpcTenancyCommandInput,
  ModifyVpcTenancyCommandOutput,
} from "./commands/ModifyVpcTenancyCommand";
import {
  ModifyVpnConnectionCommand,
  ModifyVpnConnectionCommandInput,
  ModifyVpnConnectionCommandOutput,
} from "./commands/ModifyVpnConnectionCommand";
import {
  ModifyVpnConnectionOptionsCommand,
  ModifyVpnConnectionOptionsCommandInput,
  ModifyVpnConnectionOptionsCommandOutput,
} from "./commands/ModifyVpnConnectionOptionsCommand";
import {
  ModifyVpnTunnelCertificateCommand,
  ModifyVpnTunnelCertificateCommandInput,
  ModifyVpnTunnelCertificateCommandOutput,
} from "./commands/ModifyVpnTunnelCertificateCommand";
import {
  ModifyVpnTunnelOptionsCommand,
  ModifyVpnTunnelOptionsCommandInput,
  ModifyVpnTunnelOptionsCommandOutput,
} from "./commands/ModifyVpnTunnelOptionsCommand";
import {
  MonitorInstancesCommand,
  MonitorInstancesCommandInput,
  MonitorInstancesCommandOutput,
} from "./commands/MonitorInstancesCommand";
import {
  MoveAddressToVpcCommand,
  MoveAddressToVpcCommandInput,
  MoveAddressToVpcCommandOutput,
} from "./commands/MoveAddressToVpcCommand";
import {
  MoveByoipCidrToIpamCommand,
  MoveByoipCidrToIpamCommandInput,
  MoveByoipCidrToIpamCommandOutput,
} from "./commands/MoveByoipCidrToIpamCommand";
import {
  MoveCapacityReservationInstancesCommand,
  MoveCapacityReservationInstancesCommandInput,
  MoveCapacityReservationInstancesCommandOutput,
} from "./commands/MoveCapacityReservationInstancesCommand";
import {
  ProvisionByoipCidrCommand,
  ProvisionByoipCidrCommandInput,
  ProvisionByoipCidrCommandOutput,
} from "./commands/ProvisionByoipCidrCommand";
import {
  ProvisionIpamByoasnCommand,
  ProvisionIpamByoasnCommandInput,
  ProvisionIpamByoasnCommandOutput,
} from "./commands/ProvisionIpamByoasnCommand";
import {
  ProvisionIpamPoolCidrCommand,
  ProvisionIpamPoolCidrCommandInput,
  ProvisionIpamPoolCidrCommandOutput,
} from "./commands/ProvisionIpamPoolCidrCommand";
import {
  ProvisionPublicIpv4PoolCidrCommand,
  ProvisionPublicIpv4PoolCidrCommandInput,
  ProvisionPublicIpv4PoolCidrCommandOutput,
} from "./commands/ProvisionPublicIpv4PoolCidrCommand";
import {
  PurchaseCapacityBlockCommand,
  PurchaseCapacityBlockCommandInput,
  PurchaseCapacityBlockCommandOutput,
} from "./commands/PurchaseCapacityBlockCommand";
import {
  PurchaseCapacityBlockExtensionCommand,
  PurchaseCapacityBlockExtensionCommandInput,
  PurchaseCapacityBlockExtensionCommandOutput,
} from "./commands/PurchaseCapacityBlockExtensionCommand";
import {
  PurchaseHostReservationCommand,
  PurchaseHostReservationCommandInput,
  PurchaseHostReservationCommandOutput,
} from "./commands/PurchaseHostReservationCommand";
import {
  PurchaseReservedInstancesOfferingCommand,
  PurchaseReservedInstancesOfferingCommandInput,
  PurchaseReservedInstancesOfferingCommandOutput,
} from "./commands/PurchaseReservedInstancesOfferingCommand";
import {
  PurchaseScheduledInstancesCommand,
  PurchaseScheduledInstancesCommandInput,
  PurchaseScheduledInstancesCommandOutput,
} from "./commands/PurchaseScheduledInstancesCommand";
import {
  RebootInstancesCommand,
  RebootInstancesCommandInput,
  RebootInstancesCommandOutput,
} from "./commands/RebootInstancesCommand";
import {
  RegisterImageCommand,
  RegisterImageCommandInput,
  RegisterImageCommandOutput,
} from "./commands/RegisterImageCommand";
import {
  RegisterInstanceEventNotificationAttributesCommand,
  RegisterInstanceEventNotificationAttributesCommandInput,
  RegisterInstanceEventNotificationAttributesCommandOutput,
} from "./commands/RegisterInstanceEventNotificationAttributesCommand";
import {
  RegisterTransitGatewayMulticastGroupMembersCommand,
  RegisterTransitGatewayMulticastGroupMembersCommandInput,
  RegisterTransitGatewayMulticastGroupMembersCommandOutput,
} from "./commands/RegisterTransitGatewayMulticastGroupMembersCommand";
import {
  RegisterTransitGatewayMulticastGroupSourcesCommand,
  RegisterTransitGatewayMulticastGroupSourcesCommandInput,
  RegisterTransitGatewayMulticastGroupSourcesCommandOutput,
} from "./commands/RegisterTransitGatewayMulticastGroupSourcesCommand";
import {
  RejectCapacityReservationBillingOwnershipCommand,
  RejectCapacityReservationBillingOwnershipCommandInput,
  RejectCapacityReservationBillingOwnershipCommandOutput,
} from "./commands/RejectCapacityReservationBillingOwnershipCommand";
import {
  RejectTransitGatewayMulticastDomainAssociationsCommand,
  RejectTransitGatewayMulticastDomainAssociationsCommandInput,
  RejectTransitGatewayMulticastDomainAssociationsCommandOutput,
} from "./commands/RejectTransitGatewayMulticastDomainAssociationsCommand";
import {
  RejectTransitGatewayPeeringAttachmentCommand,
  RejectTransitGatewayPeeringAttachmentCommandInput,
  RejectTransitGatewayPeeringAttachmentCommandOutput,
} from "./commands/RejectTransitGatewayPeeringAttachmentCommand";
import {
  RejectTransitGatewayVpcAttachmentCommand,
  RejectTransitGatewayVpcAttachmentCommandInput,
  RejectTransitGatewayVpcAttachmentCommandOutput,
} from "./commands/RejectTransitGatewayVpcAttachmentCommand";
import {
  RejectVpcEndpointConnectionsCommand,
  RejectVpcEndpointConnectionsCommandInput,
  RejectVpcEndpointConnectionsCommandOutput,
} from "./commands/RejectVpcEndpointConnectionsCommand";
import {
  RejectVpcPeeringConnectionCommand,
  RejectVpcPeeringConnectionCommandInput,
  RejectVpcPeeringConnectionCommandOutput,
} from "./commands/RejectVpcPeeringConnectionCommand";
import {
  ReleaseAddressCommand,
  ReleaseAddressCommandInput,
  ReleaseAddressCommandOutput,
} from "./commands/ReleaseAddressCommand";
import {
  ReleaseHostsCommand,
  ReleaseHostsCommandInput,
  ReleaseHostsCommandOutput,
} from "./commands/ReleaseHostsCommand";
import {
  ReleaseIpamPoolAllocationCommand,
  ReleaseIpamPoolAllocationCommandInput,
  ReleaseIpamPoolAllocationCommandOutput,
} from "./commands/ReleaseIpamPoolAllocationCommand";
import {
  ReplaceIamInstanceProfileAssociationCommand,
  ReplaceIamInstanceProfileAssociationCommandInput,
  ReplaceIamInstanceProfileAssociationCommandOutput,
} from "./commands/ReplaceIamInstanceProfileAssociationCommand";
import {
  ReplaceImageCriteriaInAllowedImagesSettingsCommand,
  ReplaceImageCriteriaInAllowedImagesSettingsCommandInput,
  ReplaceImageCriteriaInAllowedImagesSettingsCommandOutput,
} from "./commands/ReplaceImageCriteriaInAllowedImagesSettingsCommand";
import {
  ReplaceNetworkAclAssociationCommand,
  ReplaceNetworkAclAssociationCommandInput,
  ReplaceNetworkAclAssociationCommandOutput,
} from "./commands/ReplaceNetworkAclAssociationCommand";
import {
  ReplaceNetworkAclEntryCommand,
  ReplaceNetworkAclEntryCommandInput,
  ReplaceNetworkAclEntryCommandOutput,
} from "./commands/ReplaceNetworkAclEntryCommand";
import {
  ReplaceRouteCommand,
  ReplaceRouteCommandInput,
  ReplaceRouteCommandOutput,
} from "./commands/ReplaceRouteCommand";
import {
  ReplaceRouteTableAssociationCommand,
  ReplaceRouteTableAssociationCommandInput,
  ReplaceRouteTableAssociationCommandOutput,
} from "./commands/ReplaceRouteTableAssociationCommand";
import {
  ReplaceTransitGatewayRouteCommand,
  ReplaceTransitGatewayRouteCommandInput,
  ReplaceTransitGatewayRouteCommandOutput,
} from "./commands/ReplaceTransitGatewayRouteCommand";
import {
  ReplaceVpnTunnelCommand,
  ReplaceVpnTunnelCommandInput,
  ReplaceVpnTunnelCommandOutput,
} from "./commands/ReplaceVpnTunnelCommand";
import {
  ReportInstanceStatusCommand,
  ReportInstanceStatusCommandInput,
  ReportInstanceStatusCommandOutput,
} from "./commands/ReportInstanceStatusCommand";
import {
  RequestSpotFleetCommand,
  RequestSpotFleetCommandInput,
  RequestSpotFleetCommandOutput,
} from "./commands/RequestSpotFleetCommand";
import {
  RequestSpotInstancesCommand,
  RequestSpotInstancesCommandInput,
  RequestSpotInstancesCommandOutput,
} from "./commands/RequestSpotInstancesCommand";
import {
  ResetAddressAttributeCommand,
  ResetAddressAttributeCommandInput,
  ResetAddressAttributeCommandOutput,
} from "./commands/ResetAddressAttributeCommand";
import {
  ResetEbsDefaultKmsKeyIdCommand,
  ResetEbsDefaultKmsKeyIdCommandInput,
  ResetEbsDefaultKmsKeyIdCommandOutput,
} from "./commands/ResetEbsDefaultKmsKeyIdCommand";
import {
  ResetFpgaImageAttributeCommand,
  ResetFpgaImageAttributeCommandInput,
  ResetFpgaImageAttributeCommandOutput,
} from "./commands/ResetFpgaImageAttributeCommand";
import {
  ResetImageAttributeCommand,
  ResetImageAttributeCommandInput,
  ResetImageAttributeCommandOutput,
} from "./commands/ResetImageAttributeCommand";
import {
  ResetInstanceAttributeCommand,
  ResetInstanceAttributeCommandInput,
  ResetInstanceAttributeCommandOutput,
} from "./commands/ResetInstanceAttributeCommand";
import {
  ResetNetworkInterfaceAttributeCommand,
  ResetNetworkInterfaceAttributeCommandInput,
  ResetNetworkInterfaceAttributeCommandOutput,
} from "./commands/ResetNetworkInterfaceAttributeCommand";
import {
  ResetSnapshotAttributeCommand,
  ResetSnapshotAttributeCommandInput,
  ResetSnapshotAttributeCommandOutput,
} from "./commands/ResetSnapshotAttributeCommand";
import {
  RestoreAddressToClassicCommand,
  RestoreAddressToClassicCommandInput,
  RestoreAddressToClassicCommandOutput,
} from "./commands/RestoreAddressToClassicCommand";
import {
  RestoreImageFromRecycleBinCommand,
  RestoreImageFromRecycleBinCommandInput,
  RestoreImageFromRecycleBinCommandOutput,
} from "./commands/RestoreImageFromRecycleBinCommand";
import {
  RestoreManagedPrefixListVersionCommand,
  RestoreManagedPrefixListVersionCommandInput,
  RestoreManagedPrefixListVersionCommandOutput,
} from "./commands/RestoreManagedPrefixListVersionCommand";
import {
  RestoreSnapshotFromRecycleBinCommand,
  RestoreSnapshotFromRecycleBinCommandInput,
  RestoreSnapshotFromRecycleBinCommandOutput,
} from "./commands/RestoreSnapshotFromRecycleBinCommand";
import {
  RestoreSnapshotTierCommand,
  RestoreSnapshotTierCommandInput,
  RestoreSnapshotTierCommandOutput,
} from "./commands/RestoreSnapshotTierCommand";
import {
  RevokeClientVpnIngressCommand,
  RevokeClientVpnIngressCommandInput,
  RevokeClientVpnIngressCommandOutput,
} from "./commands/RevokeClientVpnIngressCommand";
import {
  RevokeSecurityGroupEgressCommand,
  RevokeSecurityGroupEgressCommandInput,
  RevokeSecurityGroupEgressCommandOutput,
} from "./commands/RevokeSecurityGroupEgressCommand";
import {
  RevokeSecurityGroupIngressCommand,
  RevokeSecurityGroupIngressCommandInput,
  RevokeSecurityGroupIngressCommandOutput,
} from "./commands/RevokeSecurityGroupIngressCommand";
import {
  RunInstancesCommand,
  RunInstancesCommandInput,
  RunInstancesCommandOutput,
} from "./commands/RunInstancesCommand";
import {
  RunScheduledInstancesCommand,
  RunScheduledInstancesCommandInput,
  RunScheduledInstancesCommandOutput,
} from "./commands/RunScheduledInstancesCommand";
import {
  SearchLocalGatewayRoutesCommand,
  SearchLocalGatewayRoutesCommandInput,
  SearchLocalGatewayRoutesCommandOutput,
} from "./commands/SearchLocalGatewayRoutesCommand";
import {
  SearchTransitGatewayMulticastGroupsCommand,
  SearchTransitGatewayMulticastGroupsCommandInput,
  SearchTransitGatewayMulticastGroupsCommandOutput,
} from "./commands/SearchTransitGatewayMulticastGroupsCommand";
import {
  SearchTransitGatewayRoutesCommand,
  SearchTransitGatewayRoutesCommandInput,
  SearchTransitGatewayRoutesCommandOutput,
} from "./commands/SearchTransitGatewayRoutesCommand";
import {
  SendDiagnosticInterruptCommand,
  SendDiagnosticInterruptCommandInput,
  SendDiagnosticInterruptCommandOutput,
} from "./commands/SendDiagnosticInterruptCommand";
import {
  StartDeclarativePoliciesReportCommand,
  StartDeclarativePoliciesReportCommandInput,
  StartDeclarativePoliciesReportCommandOutput,
} from "./commands/StartDeclarativePoliciesReportCommand";
import {
  StartInstancesCommand,
  StartInstancesCommandInput,
  StartInstancesCommandOutput,
} from "./commands/StartInstancesCommand";
import {
  StartNetworkInsightsAccessScopeAnalysisCommand,
  StartNetworkInsightsAccessScopeAnalysisCommandInput,
  StartNetworkInsightsAccessScopeAnalysisCommandOutput,
} from "./commands/StartNetworkInsightsAccessScopeAnalysisCommand";
import {
  StartNetworkInsightsAnalysisCommand,
  StartNetworkInsightsAnalysisCommandInput,
  StartNetworkInsightsAnalysisCommandOutput,
} from "./commands/StartNetworkInsightsAnalysisCommand";
import {
  StartVpcEndpointServicePrivateDnsVerificationCommand,
  StartVpcEndpointServicePrivateDnsVerificationCommandInput,
  StartVpcEndpointServicePrivateDnsVerificationCommandOutput,
} from "./commands/StartVpcEndpointServicePrivateDnsVerificationCommand";
import {
  StopInstancesCommand,
  StopInstancesCommandInput,
  StopInstancesCommandOutput,
} from "./commands/StopInstancesCommand";
import {
  TerminateClientVpnConnectionsCommand,
  TerminateClientVpnConnectionsCommandInput,
  TerminateClientVpnConnectionsCommandOutput,
} from "./commands/TerminateClientVpnConnectionsCommand";
import {
  TerminateInstancesCommand,
  TerminateInstancesCommandInput,
  TerminateInstancesCommandOutput,
} from "./commands/TerminateInstancesCommand";
import {
  UnassignIpv6AddressesCommand,
  UnassignIpv6AddressesCommandInput,
  UnassignIpv6AddressesCommandOutput,
} from "./commands/UnassignIpv6AddressesCommand";
import {
  UnassignPrivateIpAddressesCommand,
  UnassignPrivateIpAddressesCommandInput,
  UnassignPrivateIpAddressesCommandOutput,
} from "./commands/UnassignPrivateIpAddressesCommand";
import {
  UnassignPrivateNatGatewayAddressCommand,
  UnassignPrivateNatGatewayAddressCommandInput,
  UnassignPrivateNatGatewayAddressCommandOutput,
} from "./commands/UnassignPrivateNatGatewayAddressCommand";
import {
  UnlockSnapshotCommand,
  UnlockSnapshotCommandInput,
  UnlockSnapshotCommandOutput,
} from "./commands/UnlockSnapshotCommand";
import {
  UnmonitorInstancesCommand,
  UnmonitorInstancesCommandInput,
  UnmonitorInstancesCommandOutput,
} from "./commands/UnmonitorInstancesCommand";
import {
  UpdateSecurityGroupRuleDescriptionsEgressCommand,
  UpdateSecurityGroupRuleDescriptionsEgressCommandInput,
  UpdateSecurityGroupRuleDescriptionsEgressCommandOutput,
} from "./commands/UpdateSecurityGroupRuleDescriptionsEgressCommand";
import {
  UpdateSecurityGroupRuleDescriptionsIngressCommand,
  UpdateSecurityGroupRuleDescriptionsIngressCommandInput,
  UpdateSecurityGroupRuleDescriptionsIngressCommandOutput,
} from "./commands/UpdateSecurityGroupRuleDescriptionsIngressCommand";
import {
  WithdrawByoipCidrCommand,
  WithdrawByoipCidrCommandInput,
  WithdrawByoipCidrCommandOutput,
} from "./commands/WithdrawByoipCidrCommand";
import { EC2Client, EC2ClientConfig } from "./EC2Client";

const commands = {
  AcceptAddressTransferCommand,
  AcceptCapacityReservationBillingOwnershipCommand,
  AcceptReservedInstancesExchangeQuoteCommand,
  AcceptTransitGatewayMulticastDomainAssociationsCommand,
  AcceptTransitGatewayPeeringAttachmentCommand,
  AcceptTransitGatewayVpcAttachmentCommand,
  AcceptVpcEndpointConnectionsCommand,
  AcceptVpcPeeringConnectionCommand,
  AdvertiseByoipCidrCommand,
  AllocateAddressCommand,
  AllocateHostsCommand,
  AllocateIpamPoolCidrCommand,
  ApplySecurityGroupsToClientVpnTargetNetworkCommand,
  AssignIpv6AddressesCommand,
  AssignPrivateIpAddressesCommand,
  AssignPrivateNatGatewayAddressCommand,
  AssociateAddressCommand,
  AssociateCapacityReservationBillingOwnerCommand,
  AssociateClientVpnTargetNetworkCommand,
  AssociateDhcpOptionsCommand,
  AssociateEnclaveCertificateIamRoleCommand,
  AssociateIamInstanceProfileCommand,
  AssociateInstanceEventWindowCommand,
  AssociateIpamByoasnCommand,
  AssociateIpamResourceDiscoveryCommand,
  AssociateNatGatewayAddressCommand,
  AssociateRouteServerCommand,
  AssociateRouteTableCommand,
  AssociateSecurityGroupVpcCommand,
  AssociateSubnetCidrBlockCommand,
  AssociateTransitGatewayMulticastDomainCommand,
  AssociateTransitGatewayPolicyTableCommand,
  AssociateTransitGatewayRouteTableCommand,
  AssociateTrunkInterfaceCommand,
  AssociateVpcCidrBlockCommand,
  AttachClassicLinkVpcCommand,
  AttachInternetGatewayCommand,
  AttachNetworkInterfaceCommand,
  AttachVerifiedAccessTrustProviderCommand,
  AttachVolumeCommand,
  AttachVpnGatewayCommand,
  AuthorizeClientVpnIngressCommand,
  AuthorizeSecurityGroupEgressCommand,
  AuthorizeSecurityGroupIngressCommand,
  BundleInstanceCommand,
  CancelBundleTaskCommand,
  CancelCapacityReservationCommand,
  CancelCapacityReservationFleetsCommand,
  CancelConversionTaskCommand,
  CancelDeclarativePoliciesReportCommand,
  CancelExportTaskCommand,
  CancelImageLaunchPermissionCommand,
  CancelImportTaskCommand,
  CancelReservedInstancesListingCommand,
  CancelSpotFleetRequestsCommand,
  CancelSpotInstanceRequestsCommand,
  ConfirmProductInstanceCommand,
  CopyFpgaImageCommand,
  CopyImageCommand,
  CopySnapshotCommand,
  CreateCapacityReservationCommand,
  CreateCapacityReservationBySplittingCommand,
  CreateCapacityReservationFleetCommand,
  CreateCarrierGatewayCommand,
  CreateClientVpnEndpointCommand,
  CreateClientVpnRouteCommand,
  CreateCoipCidrCommand,
  CreateCoipPoolCommand,
  CreateCustomerGatewayCommand,
  CreateDefaultSubnetCommand,
  CreateDefaultVpcCommand,
  CreateDelegateMacVolumeOwnershipTaskCommand,
  CreateDhcpOptionsCommand,
  CreateEgressOnlyInternetGatewayCommand,
  CreateFleetCommand,
  CreateFlowLogsCommand,
  CreateFpgaImageCommand,
  CreateImageCommand,
  CreateInstanceConnectEndpointCommand,
  CreateInstanceEventWindowCommand,
  CreateInstanceExportTaskCommand,
  CreateInternetGatewayCommand,
  CreateIpamCommand,
  CreateIpamExternalResourceVerificationTokenCommand,
  CreateIpamPoolCommand,
  CreateIpamResourceDiscoveryCommand,
  CreateIpamScopeCommand,
  CreateKeyPairCommand,
  CreateLaunchTemplateCommand,
  CreateLaunchTemplateVersionCommand,
  CreateLocalGatewayRouteCommand,
  CreateLocalGatewayRouteTableCommand,
  CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand,
  CreateLocalGatewayRouteTableVpcAssociationCommand,
  CreateLocalGatewayVirtualInterfaceCommand,
  CreateLocalGatewayVirtualInterfaceGroupCommand,
  CreateMacSystemIntegrityProtectionModificationTaskCommand,
  CreateManagedPrefixListCommand,
  CreateNatGatewayCommand,
  CreateNetworkAclCommand,
  CreateNetworkAclEntryCommand,
  CreateNetworkInsightsAccessScopeCommand,
  CreateNetworkInsightsPathCommand,
  CreateNetworkInterfaceCommand,
  CreateNetworkInterfacePermissionCommand,
  CreatePlacementGroupCommand,
  CreatePublicIpv4PoolCommand,
  CreateReplaceRootVolumeTaskCommand,
  CreateReservedInstancesListingCommand,
  CreateRestoreImageTaskCommand,
  CreateRouteCommand,
  CreateRouteServerCommand,
  CreateRouteServerEndpointCommand,
  CreateRouteServerPeerCommand,
  CreateRouteTableCommand,
  CreateSecurityGroupCommand,
  CreateSnapshotCommand,
  CreateSnapshotsCommand,
  CreateSpotDatafeedSubscriptionCommand,
  CreateStoreImageTaskCommand,
  CreateSubnetCommand,
  CreateSubnetCidrReservationCommand,
  CreateTagsCommand,
  CreateTrafficMirrorFilterCommand,
  CreateTrafficMirrorFilterRuleCommand,
  CreateTrafficMirrorSessionCommand,
  CreateTrafficMirrorTargetCommand,
  CreateTransitGatewayCommand,
  CreateTransitGatewayConnectCommand,
  CreateTransitGatewayConnectPeerCommand,
  CreateTransitGatewayMulticastDomainCommand,
  CreateTransitGatewayPeeringAttachmentCommand,
  CreateTransitGatewayPolicyTableCommand,
  CreateTransitGatewayPrefixListReferenceCommand,
  CreateTransitGatewayRouteCommand,
  CreateTransitGatewayRouteTableCommand,
  CreateTransitGatewayRouteTableAnnouncementCommand,
  CreateTransitGatewayVpcAttachmentCommand,
  CreateVerifiedAccessEndpointCommand,
  CreateVerifiedAccessGroupCommand,
  CreateVerifiedAccessInstanceCommand,
  CreateVerifiedAccessTrustProviderCommand,
  CreateVolumeCommand,
  CreateVpcCommand,
  CreateVpcBlockPublicAccessExclusionCommand,
  CreateVpcEndpointCommand,
  CreateVpcEndpointConnectionNotificationCommand,
  CreateVpcEndpointServiceConfigurationCommand,
  CreateVpcPeeringConnectionCommand,
  CreateVpnConnectionCommand,
  CreateVpnConnectionRouteCommand,
  CreateVpnGatewayCommand,
  DeleteCarrierGatewayCommand,
  DeleteClientVpnEndpointCommand,
  DeleteClientVpnRouteCommand,
  DeleteCoipCidrCommand,
  DeleteCoipPoolCommand,
  DeleteCustomerGatewayCommand,
  DeleteDhcpOptionsCommand,
  DeleteEgressOnlyInternetGatewayCommand,
  DeleteFleetsCommand,
  DeleteFlowLogsCommand,
  DeleteFpgaImageCommand,
  DeleteInstanceConnectEndpointCommand,
  DeleteInstanceEventWindowCommand,
  DeleteInternetGatewayCommand,
  DeleteIpamCommand,
  DeleteIpamExternalResourceVerificationTokenCommand,
  DeleteIpamPoolCommand,
  DeleteIpamResourceDiscoveryCommand,
  DeleteIpamScopeCommand,
  DeleteKeyPairCommand,
  DeleteLaunchTemplateCommand,
  DeleteLaunchTemplateVersionsCommand,
  DeleteLocalGatewayRouteCommand,
  DeleteLocalGatewayRouteTableCommand,
  DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand,
  DeleteLocalGatewayRouteTableVpcAssociationCommand,
  DeleteLocalGatewayVirtualInterfaceCommand,
  DeleteLocalGatewayVirtualInterfaceGroupCommand,
  DeleteManagedPrefixListCommand,
  DeleteNatGatewayCommand,
  DeleteNetworkAclCommand,
  DeleteNetworkAclEntryCommand,
  DeleteNetworkInsightsAccessScopeCommand,
  DeleteNetworkInsightsAccessScopeAnalysisCommand,
  DeleteNetworkInsightsAnalysisCommand,
  DeleteNetworkInsightsPathCommand,
  DeleteNetworkInterfaceCommand,
  DeleteNetworkInterfacePermissionCommand,
  DeletePlacementGroupCommand,
  DeletePublicIpv4PoolCommand,
  DeleteQueuedReservedInstancesCommand,
  DeleteRouteCommand,
  DeleteRouteServerCommand,
  DeleteRouteServerEndpointCommand,
  DeleteRouteServerPeerCommand,
  DeleteRouteTableCommand,
  DeleteSecurityGroupCommand,
  DeleteSnapshotCommand,
  DeleteSpotDatafeedSubscriptionCommand,
  DeleteSubnetCommand,
  DeleteSubnetCidrReservationCommand,
  DeleteTagsCommand,
  DeleteTrafficMirrorFilterCommand,
  DeleteTrafficMirrorFilterRuleCommand,
  DeleteTrafficMirrorSessionCommand,
  DeleteTrafficMirrorTargetCommand,
  DeleteTransitGatewayCommand,
  DeleteTransitGatewayConnectCommand,
  DeleteTransitGatewayConnectPeerCommand,
  DeleteTransitGatewayMulticastDomainCommand,
  DeleteTransitGatewayPeeringAttachmentCommand,
  DeleteTransitGatewayPolicyTableCommand,
  DeleteTransitGatewayPrefixListReferenceCommand,
  DeleteTransitGatewayRouteCommand,
  DeleteTransitGatewayRouteTableCommand,
  DeleteTransitGatewayRouteTableAnnouncementCommand,
  DeleteTransitGatewayVpcAttachmentCommand,
  DeleteVerifiedAccessEndpointCommand,
  DeleteVerifiedAccessGroupCommand,
  DeleteVerifiedAccessInstanceCommand,
  DeleteVerifiedAccessTrustProviderCommand,
  DeleteVolumeCommand,
  DeleteVpcCommand,
  DeleteVpcBlockPublicAccessExclusionCommand,
  DeleteVpcEndpointConnectionNotificationsCommand,
  DeleteVpcEndpointsCommand,
  DeleteVpcEndpointServiceConfigurationsCommand,
  DeleteVpcPeeringConnectionCommand,
  DeleteVpnConnectionCommand,
  DeleteVpnConnectionRouteCommand,
  DeleteVpnGatewayCommand,
  DeprovisionByoipCidrCommand,
  DeprovisionIpamByoasnCommand,
  DeprovisionIpamPoolCidrCommand,
  DeprovisionPublicIpv4PoolCidrCommand,
  DeregisterImageCommand,
  DeregisterInstanceEventNotificationAttributesCommand,
  DeregisterTransitGatewayMulticastGroupMembersCommand,
  DeregisterTransitGatewayMulticastGroupSourcesCommand,
  DescribeAccountAttributesCommand,
  DescribeAddressesCommand,
  DescribeAddressesAttributeCommand,
  DescribeAddressTransfersCommand,
  DescribeAggregateIdFormatCommand,
  DescribeAvailabilityZonesCommand,
  DescribeAwsNetworkPerformanceMetricSubscriptionsCommand,
  DescribeBundleTasksCommand,
  DescribeByoipCidrsCommand,
  DescribeCapacityBlockExtensionHistoryCommand,
  DescribeCapacityBlockExtensionOfferingsCommand,
  DescribeCapacityBlockOfferingsCommand,
  DescribeCapacityBlocksCommand,
  DescribeCapacityBlockStatusCommand,
  DescribeCapacityReservationBillingRequestsCommand,
  DescribeCapacityReservationFleetsCommand,
  DescribeCapacityReservationsCommand,
  DescribeCarrierGatewaysCommand,
  DescribeClassicLinkInstancesCommand,
  DescribeClientVpnAuthorizationRulesCommand,
  DescribeClientVpnConnectionsCommand,
  DescribeClientVpnEndpointsCommand,
  DescribeClientVpnRoutesCommand,
  DescribeClientVpnTargetNetworksCommand,
  DescribeCoipPoolsCommand,
  DescribeConversionTasksCommand,
  DescribeCustomerGatewaysCommand,
  DescribeDeclarativePoliciesReportsCommand,
  DescribeDhcpOptionsCommand,
  DescribeEgressOnlyInternetGatewaysCommand,
  DescribeElasticGpusCommand,
  DescribeExportImageTasksCommand,
  DescribeExportTasksCommand,
  DescribeFastLaunchImagesCommand,
  DescribeFastSnapshotRestoresCommand,
  DescribeFleetHistoryCommand,
  DescribeFleetInstancesCommand,
  DescribeFleetsCommand,
  DescribeFlowLogsCommand,
  DescribeFpgaImageAttributeCommand,
  DescribeFpgaImagesCommand,
  DescribeHostReservationOfferingsCommand,
  DescribeHostReservationsCommand,
  DescribeHostsCommand,
  DescribeIamInstanceProfileAssociationsCommand,
  DescribeIdentityIdFormatCommand,
  DescribeIdFormatCommand,
  DescribeImageAttributeCommand,
  DescribeImagesCommand,
  DescribeImportImageTasksCommand,
  DescribeImportSnapshotTasksCommand,
  DescribeInstanceAttributeCommand,
  DescribeInstanceConnectEndpointsCommand,
  DescribeInstanceCreditSpecificationsCommand,
  DescribeInstanceEventNotificationAttributesCommand,
  DescribeInstanceEventWindowsCommand,
  DescribeInstanceImageMetadataCommand,
  DescribeInstancesCommand,
  DescribeInstanceStatusCommand,
  DescribeInstanceTopologyCommand,
  DescribeInstanceTypeOfferingsCommand,
  DescribeInstanceTypesCommand,
  DescribeInternetGatewaysCommand,
  DescribeIpamByoasnCommand,
  DescribeIpamExternalResourceVerificationTokensCommand,
  DescribeIpamPoolsCommand,
  DescribeIpamResourceDiscoveriesCommand,
  DescribeIpamResourceDiscoveryAssociationsCommand,
  DescribeIpamsCommand,
  DescribeIpamScopesCommand,
  DescribeIpv6PoolsCommand,
  DescribeKeyPairsCommand,
  DescribeLaunchTemplatesCommand,
  DescribeLaunchTemplateVersionsCommand,
  DescribeLocalGatewayRouteTablesCommand,
  DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand,
  DescribeLocalGatewayRouteTableVpcAssociationsCommand,
  DescribeLocalGatewaysCommand,
  DescribeLocalGatewayVirtualInterfaceGroupsCommand,
  DescribeLocalGatewayVirtualInterfacesCommand,
  DescribeLockedSnapshotsCommand,
  DescribeMacHostsCommand,
  DescribeMacModificationTasksCommand,
  DescribeManagedPrefixListsCommand,
  DescribeMovingAddressesCommand,
  DescribeNatGatewaysCommand,
  DescribeNetworkAclsCommand,
  DescribeNetworkInsightsAccessScopeAnalysesCommand,
  DescribeNetworkInsightsAccessScopesCommand,
  DescribeNetworkInsightsAnalysesCommand,
  DescribeNetworkInsightsPathsCommand,
  DescribeNetworkInterfaceAttributeCommand,
  DescribeNetworkInterfacePermissionsCommand,
  DescribeNetworkInterfacesCommand,
  DescribeOutpostLagsCommand,
  DescribePlacementGroupsCommand,
  DescribePrefixListsCommand,
  DescribePrincipalIdFormatCommand,
  DescribePublicIpv4PoolsCommand,
  DescribeRegionsCommand,
  DescribeReplaceRootVolumeTasksCommand,
  DescribeReservedInstancesCommand,
  DescribeReservedInstancesListingsCommand,
  DescribeReservedInstancesModificationsCommand,
  DescribeReservedInstancesOfferingsCommand,
  DescribeRouteServerEndpointsCommand,
  DescribeRouteServerPeersCommand,
  DescribeRouteServersCommand,
  DescribeRouteTablesCommand,
  DescribeScheduledInstanceAvailabilityCommand,
  DescribeScheduledInstancesCommand,
  DescribeSecurityGroupReferencesCommand,
  DescribeSecurityGroupRulesCommand,
  DescribeSecurityGroupsCommand,
  DescribeSecurityGroupVpcAssociationsCommand,
  DescribeServiceLinkVirtualInterfacesCommand,
  DescribeSnapshotAttributeCommand,
  DescribeSnapshotsCommand,
  DescribeSnapshotTierStatusCommand,
  DescribeSpotDatafeedSubscriptionCommand,
  DescribeSpotFleetInstancesCommand,
  DescribeSpotFleetRequestHistoryCommand,
  DescribeSpotFleetRequestsCommand,
  DescribeSpotInstanceRequestsCommand,
  DescribeSpotPriceHistoryCommand,
  DescribeStaleSecurityGroupsCommand,
  DescribeStoreImageTasksCommand,
  DescribeSubnetsCommand,
  DescribeTagsCommand,
  DescribeTrafficMirrorFilterRulesCommand,
  DescribeTrafficMirrorFiltersCommand,
  DescribeTrafficMirrorSessionsCommand,
  DescribeTrafficMirrorTargetsCommand,
  DescribeTransitGatewayAttachmentsCommand,
  DescribeTransitGatewayConnectPeersCommand,
  DescribeTransitGatewayConnectsCommand,
  DescribeTransitGatewayMulticastDomainsCommand,
  DescribeTransitGatewayPeeringAttachmentsCommand,
  DescribeTransitGatewayPolicyTablesCommand,
  DescribeTransitGatewayRouteTableAnnouncementsCommand,
  DescribeTransitGatewayRouteTablesCommand,
  DescribeTransitGatewaysCommand,
  DescribeTransitGatewayVpcAttachmentsCommand,
  DescribeTrunkInterfaceAssociationsCommand,
  DescribeVerifiedAccessEndpointsCommand,
  DescribeVerifiedAccessGroupsCommand,
  DescribeVerifiedAccessInstanceLoggingConfigurationsCommand,
  DescribeVerifiedAccessInstancesCommand,
  DescribeVerifiedAccessTrustProvidersCommand,
  DescribeVolumeAttributeCommand,
  DescribeVolumesCommand,
  DescribeVolumesModificationsCommand,
  DescribeVolumeStatusCommand,
  DescribeVpcAttributeCommand,
  DescribeVpcBlockPublicAccessExclusionsCommand,
  DescribeVpcBlockPublicAccessOptionsCommand,
  DescribeVpcClassicLinkCommand,
  DescribeVpcClassicLinkDnsSupportCommand,
  DescribeVpcEndpointAssociationsCommand,
  DescribeVpcEndpointConnectionNotificationsCommand,
  DescribeVpcEndpointConnectionsCommand,
  DescribeVpcEndpointsCommand,
  DescribeVpcEndpointServiceConfigurationsCommand,
  DescribeVpcEndpointServicePermissionsCommand,
  DescribeVpcEndpointServicesCommand,
  DescribeVpcPeeringConnectionsCommand,
  DescribeVpcsCommand,
  DescribeVpnConnectionsCommand,
  DescribeVpnGatewaysCommand,
  DetachClassicLinkVpcCommand,
  DetachInternetGatewayCommand,
  DetachNetworkInterfaceCommand,
  DetachVerifiedAccessTrustProviderCommand,
  DetachVolumeCommand,
  DetachVpnGatewayCommand,
  DisableAddressTransferCommand,
  DisableAllowedImagesSettingsCommand,
  DisableAwsNetworkPerformanceMetricSubscriptionCommand,
  DisableEbsEncryptionByDefaultCommand,
  DisableFastLaunchCommand,
  DisableFastSnapshotRestoresCommand,
  DisableImageCommand,
  DisableImageBlockPublicAccessCommand,
  DisableImageDeprecationCommand,
  DisableImageDeregistrationProtectionCommand,
  DisableIpamOrganizationAdminAccountCommand,
  DisableRouteServerPropagationCommand,
  DisableSerialConsoleAccessCommand,
  DisableSnapshotBlockPublicAccessCommand,
  DisableTransitGatewayRouteTablePropagationCommand,
  DisableVgwRoutePropagationCommand,
  DisableVpcClassicLinkCommand,
  DisableVpcClassicLinkDnsSupportCommand,
  DisassociateAddressCommand,
  DisassociateCapacityReservationBillingOwnerCommand,
  DisassociateClientVpnTargetNetworkCommand,
  DisassociateEnclaveCertificateIamRoleCommand,
  DisassociateIamInstanceProfileCommand,
  DisassociateInstanceEventWindowCommand,
  DisassociateIpamByoasnCommand,
  DisassociateIpamResourceDiscoveryCommand,
  DisassociateNatGatewayAddressCommand,
  DisassociateRouteServerCommand,
  DisassociateRouteTableCommand,
  DisassociateSecurityGroupVpcCommand,
  DisassociateSubnetCidrBlockCommand,
  DisassociateTransitGatewayMulticastDomainCommand,
  DisassociateTransitGatewayPolicyTableCommand,
  DisassociateTransitGatewayRouteTableCommand,
  DisassociateTrunkInterfaceCommand,
  DisassociateVpcCidrBlockCommand,
  EnableAddressTransferCommand,
  EnableAllowedImagesSettingsCommand,
  EnableAwsNetworkPerformanceMetricSubscriptionCommand,
  EnableEbsEncryptionByDefaultCommand,
  EnableFastLaunchCommand,
  EnableFastSnapshotRestoresCommand,
  EnableImageCommand,
  EnableImageBlockPublicAccessCommand,
  EnableImageDeprecationCommand,
  EnableImageDeregistrationProtectionCommand,
  EnableIpamOrganizationAdminAccountCommand,
  EnableReachabilityAnalyzerOrganizationSharingCommand,
  EnableRouteServerPropagationCommand,
  EnableSerialConsoleAccessCommand,
  EnableSnapshotBlockPublicAccessCommand,
  EnableTransitGatewayRouteTablePropagationCommand,
  EnableVgwRoutePropagationCommand,
  EnableVolumeIOCommand,
  EnableVpcClassicLinkCommand,
  EnableVpcClassicLinkDnsSupportCommand,
  ExportClientVpnClientCertificateRevocationListCommand,
  ExportClientVpnClientConfigurationCommand,
  ExportImageCommand,
  ExportTransitGatewayRoutesCommand,
  ExportVerifiedAccessInstanceClientConfigurationCommand,
  GetActiveVpnTunnelStatusCommand,
  GetAllowedImagesSettingsCommand,
  GetAssociatedEnclaveCertificateIamRolesCommand,
  GetAssociatedIpv6PoolCidrsCommand,
  GetAwsNetworkPerformanceDataCommand,
  GetCapacityReservationUsageCommand,
  GetCoipPoolUsageCommand,
  GetConsoleOutputCommand,
  GetConsoleScreenshotCommand,
  GetDeclarativePoliciesReportSummaryCommand,
  GetDefaultCreditSpecificationCommand,
  GetEbsDefaultKmsKeyIdCommand,
  GetEbsEncryptionByDefaultCommand,
  GetFlowLogsIntegrationTemplateCommand,
  GetGroupsForCapacityReservationCommand,
  GetHostReservationPurchasePreviewCommand,
  GetImageBlockPublicAccessStateCommand,
  GetInstanceMetadataDefaultsCommand,
  GetInstanceTpmEkPubCommand,
  GetInstanceTypesFromInstanceRequirementsCommand,
  GetInstanceUefiDataCommand,
  GetIpamAddressHistoryCommand,
  GetIpamDiscoveredAccountsCommand,
  GetIpamDiscoveredPublicAddressesCommand,
  GetIpamDiscoveredResourceCidrsCommand,
  GetIpamPoolAllocationsCommand,
  GetIpamPoolCidrsCommand,
  GetIpamResourceCidrsCommand,
  GetLaunchTemplateDataCommand,
  GetManagedPrefixListAssociationsCommand,
  GetManagedPrefixListEntriesCommand,
  GetNetworkInsightsAccessScopeAnalysisFindingsCommand,
  GetNetworkInsightsAccessScopeContentCommand,
  GetPasswordDataCommand,
  GetReservedInstancesExchangeQuoteCommand,
  GetRouteServerAssociationsCommand,
  GetRouteServerPropagationsCommand,
  GetRouteServerRoutingDatabaseCommand,
  GetSecurityGroupsForVpcCommand,
  GetSerialConsoleAccessStatusCommand,
  GetSnapshotBlockPublicAccessStateCommand,
  GetSpotPlacementScoresCommand,
  GetSubnetCidrReservationsCommand,
  GetTransitGatewayAttachmentPropagationsCommand,
  GetTransitGatewayMulticastDomainAssociationsCommand,
  GetTransitGatewayPolicyTableAssociationsCommand,
  GetTransitGatewayPolicyTableEntriesCommand,
  GetTransitGatewayPrefixListReferencesCommand,
  GetTransitGatewayRouteTableAssociationsCommand,
  GetTransitGatewayRouteTablePropagationsCommand,
  GetVerifiedAccessEndpointPolicyCommand,
  GetVerifiedAccessEndpointTargetsCommand,
  GetVerifiedAccessGroupPolicyCommand,
  GetVpnConnectionDeviceSampleConfigurationCommand,
  GetVpnConnectionDeviceTypesCommand,
  GetVpnTunnelReplacementStatusCommand,
  ImportClientVpnClientCertificateRevocationListCommand,
  ImportImageCommand,
  ImportInstanceCommand,
  ImportKeyPairCommand,
  ImportSnapshotCommand,
  ImportVolumeCommand,
  ListImagesInRecycleBinCommand,
  ListSnapshotsInRecycleBinCommand,
  LockSnapshotCommand,
  ModifyAddressAttributeCommand,
  ModifyAvailabilityZoneGroupCommand,
  ModifyCapacityReservationCommand,
  ModifyCapacityReservationFleetCommand,
  ModifyClientVpnEndpointCommand,
  ModifyDefaultCreditSpecificationCommand,
  ModifyEbsDefaultKmsKeyIdCommand,
  ModifyFleetCommand,
  ModifyFpgaImageAttributeCommand,
  ModifyHostsCommand,
  ModifyIdentityIdFormatCommand,
  ModifyIdFormatCommand,
  ModifyImageAttributeCommand,
  ModifyInstanceAttributeCommand,
  ModifyInstanceCapacityReservationAttributesCommand,
  ModifyInstanceCpuOptionsCommand,
  ModifyInstanceCreditSpecificationCommand,
  ModifyInstanceEventStartTimeCommand,
  ModifyInstanceEventWindowCommand,
  ModifyInstanceMaintenanceOptionsCommand,
  ModifyInstanceMetadataDefaultsCommand,
  ModifyInstanceMetadataOptionsCommand,
  ModifyInstanceNetworkPerformanceOptionsCommand,
  ModifyInstancePlacementCommand,
  ModifyIpamCommand,
  ModifyIpamPoolCommand,
  ModifyIpamResourceCidrCommand,
  ModifyIpamResourceDiscoveryCommand,
  ModifyIpamScopeCommand,
  ModifyLaunchTemplateCommand,
  ModifyLocalGatewayRouteCommand,
  ModifyManagedPrefixListCommand,
  ModifyNetworkInterfaceAttributeCommand,
  ModifyPrivateDnsNameOptionsCommand,
  ModifyPublicIpDnsNameOptionsCommand,
  ModifyReservedInstancesCommand,
  ModifyRouteServerCommand,
  ModifySecurityGroupRulesCommand,
  ModifySnapshotAttributeCommand,
  ModifySnapshotTierCommand,
  ModifySpotFleetRequestCommand,
  ModifySubnetAttributeCommand,
  ModifyTrafficMirrorFilterNetworkServicesCommand,
  ModifyTrafficMirrorFilterRuleCommand,
  ModifyTrafficMirrorSessionCommand,
  ModifyTransitGatewayCommand,
  ModifyTransitGatewayPrefixListReferenceCommand,
  ModifyTransitGatewayVpcAttachmentCommand,
  ModifyVerifiedAccessEndpointCommand,
  ModifyVerifiedAccessEndpointPolicyCommand,
  ModifyVerifiedAccessGroupCommand,
  ModifyVerifiedAccessGroupPolicyCommand,
  ModifyVerifiedAccessInstanceCommand,
  ModifyVerifiedAccessInstanceLoggingConfigurationCommand,
  ModifyVerifiedAccessTrustProviderCommand,
  ModifyVolumeCommand,
  ModifyVolumeAttributeCommand,
  ModifyVpcAttributeCommand,
  ModifyVpcBlockPublicAccessExclusionCommand,
  ModifyVpcBlockPublicAccessOptionsCommand,
  ModifyVpcEndpointCommand,
  ModifyVpcEndpointConnectionNotificationCommand,
  ModifyVpcEndpointServiceConfigurationCommand,
  ModifyVpcEndpointServicePayerResponsibilityCommand,
  ModifyVpcEndpointServicePermissionsCommand,
  ModifyVpcPeeringConnectionOptionsCommand,
  ModifyVpcTenancyCommand,
  ModifyVpnConnectionCommand,
  ModifyVpnConnectionOptionsCommand,
  ModifyVpnTunnelCertificateCommand,
  ModifyVpnTunnelOptionsCommand,
  MonitorInstancesCommand,
  MoveAddressToVpcCommand,
  MoveByoipCidrToIpamCommand,
  MoveCapacityReservationInstancesCommand,
  ProvisionByoipCidrCommand,
  ProvisionIpamByoasnCommand,
  ProvisionIpamPoolCidrCommand,
  ProvisionPublicIpv4PoolCidrCommand,
  PurchaseCapacityBlockCommand,
  PurchaseCapacityBlockExtensionCommand,
  PurchaseHostReservationCommand,
  PurchaseReservedInstancesOfferingCommand,
  PurchaseScheduledInstancesCommand,
  RebootInstancesCommand,
  RegisterImageCommand,
  RegisterInstanceEventNotificationAttributesCommand,
  RegisterTransitGatewayMulticastGroupMembersCommand,
  RegisterTransitGatewayMulticastGroupSourcesCommand,
  RejectCapacityReservationBillingOwnershipCommand,
  RejectTransitGatewayMulticastDomainAssociationsCommand,
  RejectTransitGatewayPeeringAttachmentCommand,
  RejectTransitGatewayVpcAttachmentCommand,
  RejectVpcEndpointConnectionsCommand,
  RejectVpcPeeringConnectionCommand,
  ReleaseAddressCommand,
  ReleaseHostsCommand,
  ReleaseIpamPoolAllocationCommand,
  ReplaceIamInstanceProfileAssociationCommand,
  ReplaceImageCriteriaInAllowedImagesSettingsCommand,
  ReplaceNetworkAclAssociationCommand,
  ReplaceNetworkAclEntryCommand,
  ReplaceRouteCommand,
  ReplaceRouteTableAssociationCommand,
  ReplaceTransitGatewayRouteCommand,
  ReplaceVpnTunnelCommand,
  ReportInstanceStatusCommand,
  RequestSpotFleetCommand,
  RequestSpotInstancesCommand,
  ResetAddressAttributeCommand,
  ResetEbsDefaultKmsKeyIdCommand,
  ResetFpgaImageAttributeCommand,
  ResetImageAttributeCommand,
  ResetInstanceAttributeCommand,
  ResetNetworkInterfaceAttributeCommand,
  ResetSnapshotAttributeCommand,
  RestoreAddressToClassicCommand,
  RestoreImageFromRecycleBinCommand,
  RestoreManagedPrefixListVersionCommand,
  RestoreSnapshotFromRecycleBinCommand,
  RestoreSnapshotTierCommand,
  RevokeClientVpnIngressCommand,
  RevokeSecurityGroupEgressCommand,
  RevokeSecurityGroupIngressCommand,
  RunInstancesCommand,
  RunScheduledInstancesCommand,
  SearchLocalGatewayRoutesCommand,
  SearchTransitGatewayMulticastGroupsCommand,
  SearchTransitGatewayRoutesCommand,
  SendDiagnosticInterruptCommand,
  StartDeclarativePoliciesReportCommand,
  StartInstancesCommand,
  StartNetworkInsightsAccessScopeAnalysisCommand,
  StartNetworkInsightsAnalysisCommand,
  StartVpcEndpointServicePrivateDnsVerificationCommand,
  StopInstancesCommand,
  TerminateClientVpnConnectionsCommand,
  TerminateInstancesCommand,
  UnassignIpv6AddressesCommand,
  UnassignPrivateIpAddressesCommand,
  UnassignPrivateNatGatewayAddressCommand,
  UnlockSnapshotCommand,
  UnmonitorInstancesCommand,
  UpdateSecurityGroupRuleDescriptionsEgressCommand,
  UpdateSecurityGroupRuleDescriptionsIngressCommand,
  WithdrawByoipCidrCommand,
};

export interface EC2 {
  /**
   * @see {@link AcceptAddressTransferCommand}
   */
  acceptAddressTransfer(
    args: AcceptAddressTransferCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptAddressTransferCommandOutput>;
  acceptAddressTransfer(
    args: AcceptAddressTransferCommandInput,
    cb: (err: any, data?: AcceptAddressTransferCommandOutput) => void
  ): void;
  acceptAddressTransfer(
    args: AcceptAddressTransferCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptAddressTransferCommandOutput) => void
  ): void;

  /**
   * @see {@link AcceptCapacityReservationBillingOwnershipCommand}
   */
  acceptCapacityReservationBillingOwnership(
    args: AcceptCapacityReservationBillingOwnershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptCapacityReservationBillingOwnershipCommandOutput>;
  acceptCapacityReservationBillingOwnership(
    args: AcceptCapacityReservationBillingOwnershipCommandInput,
    cb: (err: any, data?: AcceptCapacityReservationBillingOwnershipCommandOutput) => void
  ): void;
  acceptCapacityReservationBillingOwnership(
    args: AcceptCapacityReservationBillingOwnershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptCapacityReservationBillingOwnershipCommandOutput) => void
  ): void;

  /**
   * @see {@link AcceptReservedInstancesExchangeQuoteCommand}
   */
  acceptReservedInstancesExchangeQuote(
    args: AcceptReservedInstancesExchangeQuoteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptReservedInstancesExchangeQuoteCommandOutput>;
  acceptReservedInstancesExchangeQuote(
    args: AcceptReservedInstancesExchangeQuoteCommandInput,
    cb: (err: any, data?: AcceptReservedInstancesExchangeQuoteCommandOutput) => void
  ): void;
  acceptReservedInstancesExchangeQuote(
    args: AcceptReservedInstancesExchangeQuoteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptReservedInstancesExchangeQuoteCommandOutput) => void
  ): void;

  /**
   * @see {@link AcceptTransitGatewayMulticastDomainAssociationsCommand}
   */
  acceptTransitGatewayMulticastDomainAssociations(): Promise<AcceptTransitGatewayMulticastDomainAssociationsCommandOutput>;
  acceptTransitGatewayMulticastDomainAssociations(
    args: AcceptTransitGatewayMulticastDomainAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptTransitGatewayMulticastDomainAssociationsCommandOutput>;
  acceptTransitGatewayMulticastDomainAssociations(
    args: AcceptTransitGatewayMulticastDomainAssociationsCommandInput,
    cb: (err: any, data?: AcceptTransitGatewayMulticastDomainAssociationsCommandOutput) => void
  ): void;
  acceptTransitGatewayMulticastDomainAssociations(
    args: AcceptTransitGatewayMulticastDomainAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptTransitGatewayMulticastDomainAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link AcceptTransitGatewayPeeringAttachmentCommand}
   */
  acceptTransitGatewayPeeringAttachment(
    args: AcceptTransitGatewayPeeringAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptTransitGatewayPeeringAttachmentCommandOutput>;
  acceptTransitGatewayPeeringAttachment(
    args: AcceptTransitGatewayPeeringAttachmentCommandInput,
    cb: (err: any, data?: AcceptTransitGatewayPeeringAttachmentCommandOutput) => void
  ): void;
  acceptTransitGatewayPeeringAttachment(
    args: AcceptTransitGatewayPeeringAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptTransitGatewayPeeringAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link AcceptTransitGatewayVpcAttachmentCommand}
   */
  acceptTransitGatewayVpcAttachment(
    args: AcceptTransitGatewayVpcAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptTransitGatewayVpcAttachmentCommandOutput>;
  acceptTransitGatewayVpcAttachment(
    args: AcceptTransitGatewayVpcAttachmentCommandInput,
    cb: (err: any, data?: AcceptTransitGatewayVpcAttachmentCommandOutput) => void
  ): void;
  acceptTransitGatewayVpcAttachment(
    args: AcceptTransitGatewayVpcAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptTransitGatewayVpcAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link AcceptVpcEndpointConnectionsCommand}
   */
  acceptVpcEndpointConnections(
    args: AcceptVpcEndpointConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptVpcEndpointConnectionsCommandOutput>;
  acceptVpcEndpointConnections(
    args: AcceptVpcEndpointConnectionsCommandInput,
    cb: (err: any, data?: AcceptVpcEndpointConnectionsCommandOutput) => void
  ): void;
  acceptVpcEndpointConnections(
    args: AcceptVpcEndpointConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptVpcEndpointConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link AcceptVpcPeeringConnectionCommand}
   */
  acceptVpcPeeringConnection(
    args: AcceptVpcPeeringConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptVpcPeeringConnectionCommandOutput>;
  acceptVpcPeeringConnection(
    args: AcceptVpcPeeringConnectionCommandInput,
    cb: (err: any, data?: AcceptVpcPeeringConnectionCommandOutput) => void
  ): void;
  acceptVpcPeeringConnection(
    args: AcceptVpcPeeringConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptVpcPeeringConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link AdvertiseByoipCidrCommand}
   */
  advertiseByoipCidr(
    args: AdvertiseByoipCidrCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdvertiseByoipCidrCommandOutput>;
  advertiseByoipCidr(
    args: AdvertiseByoipCidrCommandInput,
    cb: (err: any, data?: AdvertiseByoipCidrCommandOutput) => void
  ): void;
  advertiseByoipCidr(
    args: AdvertiseByoipCidrCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdvertiseByoipCidrCommandOutput) => void
  ): void;

  /**
   * @see {@link AllocateAddressCommand}
   */
  allocateAddress(): Promise<AllocateAddressCommandOutput>;
  allocateAddress(
    args: AllocateAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AllocateAddressCommandOutput>;
  allocateAddress(args: AllocateAddressCommandInput, cb: (err: any, data?: AllocateAddressCommandOutput) => void): void;
  allocateAddress(
    args: AllocateAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AllocateAddressCommandOutput) => void
  ): void;

  /**
   * @see {@link AllocateHostsCommand}
   */
  allocateHosts(): Promise<AllocateHostsCommandOutput>;
  allocateHosts(args: AllocateHostsCommandInput, options?: __HttpHandlerOptions): Promise<AllocateHostsCommandOutput>;
  allocateHosts(args: AllocateHostsCommandInput, cb: (err: any, data?: AllocateHostsCommandOutput) => void): void;
  allocateHosts(
    args: AllocateHostsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AllocateHostsCommandOutput) => void
  ): void;

  /**
   * @see {@link AllocateIpamPoolCidrCommand}
   */
  allocateIpamPoolCidr(
    args: AllocateIpamPoolCidrCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AllocateIpamPoolCidrCommandOutput>;
  allocateIpamPoolCidr(
    args: AllocateIpamPoolCidrCommandInput,
    cb: (err: any, data?: AllocateIpamPoolCidrCommandOutput) => void
  ): void;
  allocateIpamPoolCidr(
    args: AllocateIpamPoolCidrCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AllocateIpamPoolCidrCommandOutput) => void
  ): void;

  /**
   * @see {@link ApplySecurityGroupsToClientVpnTargetNetworkCommand}
   */
  applySecurityGroupsToClientVpnTargetNetwork(
    args: ApplySecurityGroupsToClientVpnTargetNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput>;
  applySecurityGroupsToClientVpnTargetNetwork(
    args: ApplySecurityGroupsToClientVpnTargetNetworkCommandInput,
    cb: (err: any, data?: ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput) => void
  ): void;
  applySecurityGroupsToClientVpnTargetNetwork(
    args: ApplySecurityGroupsToClientVpnTargetNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link AssignIpv6AddressesCommand}
   */
  assignIpv6Addresses(
    args: AssignIpv6AddressesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssignIpv6AddressesCommandOutput>;
  assignIpv6Addresses(
    args: AssignIpv6AddressesCommandInput,
    cb: (err: any, data?: AssignIpv6AddressesCommandOutput) => void
  ): void;
  assignIpv6Addresses(
    args: AssignIpv6AddressesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssignIpv6AddressesCommandOutput) => void
  ): void;

  /**
   * @see {@link AssignPrivateIpAddressesCommand}
   */
  assignPrivateIpAddresses(
    args: AssignPrivateIpAddressesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssignPrivateIpAddressesCommandOutput>;
  assignPrivateIpAddresses(
    args: AssignPrivateIpAddressesCommandInput,
    cb: (err: any, data?: AssignPrivateIpAddressesCommandOutput) => void
  ): void;
  assignPrivateIpAddresses(
    args: AssignPrivateIpAddressesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssignPrivateIpAddressesCommandOutput) => void
  ): void;

  /**
   * @see {@link AssignPrivateNatGatewayAddressCommand}
   */
  assignPrivateNatGatewayAddress(
    args: AssignPrivateNatGatewayAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssignPrivateNatGatewayAddressCommandOutput>;
  assignPrivateNatGatewayAddress(
    args: AssignPrivateNatGatewayAddressCommandInput,
    cb: (err: any, data?: AssignPrivateNatGatewayAddressCommandOutput) => void
  ): void;
  assignPrivateNatGatewayAddress(
    args: AssignPrivateNatGatewayAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssignPrivateNatGatewayAddressCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateAddressCommand}
   */
  associateAddress(): Promise<AssociateAddressCommandOutput>;
  associateAddress(
    args: AssociateAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateAddressCommandOutput>;
  associateAddress(
    args: AssociateAddressCommandInput,
    cb: (err: any, data?: AssociateAddressCommandOutput) => void
  ): void;
  associateAddress(
    args: AssociateAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateAddressCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateCapacityReservationBillingOwnerCommand}
   */
  associateCapacityReservationBillingOwner(
    args: AssociateCapacityReservationBillingOwnerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateCapacityReservationBillingOwnerCommandOutput>;
  associateCapacityReservationBillingOwner(
    args: AssociateCapacityReservationBillingOwnerCommandInput,
    cb: (err: any, data?: AssociateCapacityReservationBillingOwnerCommandOutput) => void
  ): void;
  associateCapacityReservationBillingOwner(
    args: AssociateCapacityReservationBillingOwnerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateCapacityReservationBillingOwnerCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateClientVpnTargetNetworkCommand}
   */
  associateClientVpnTargetNetwork(
    args: AssociateClientVpnTargetNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateClientVpnTargetNetworkCommandOutput>;
  associateClientVpnTargetNetwork(
    args: AssociateClientVpnTargetNetworkCommandInput,
    cb: (err: any, data?: AssociateClientVpnTargetNetworkCommandOutput) => void
  ): void;
  associateClientVpnTargetNetwork(
    args: AssociateClientVpnTargetNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateClientVpnTargetNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateDhcpOptionsCommand}
   */
  associateDhcpOptions(
    args: AssociateDhcpOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateDhcpOptionsCommandOutput>;
  associateDhcpOptions(
    args: AssociateDhcpOptionsCommandInput,
    cb: (err: any, data?: AssociateDhcpOptionsCommandOutput) => void
  ): void;
  associateDhcpOptions(
    args: AssociateDhcpOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateDhcpOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateEnclaveCertificateIamRoleCommand}
   */
  associateEnclaveCertificateIamRole(
    args: AssociateEnclaveCertificateIamRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateEnclaveCertificateIamRoleCommandOutput>;
  associateEnclaveCertificateIamRole(
    args: AssociateEnclaveCertificateIamRoleCommandInput,
    cb: (err: any, data?: AssociateEnclaveCertificateIamRoleCommandOutput) => void
  ): void;
  associateEnclaveCertificateIamRole(
    args: AssociateEnclaveCertificateIamRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateEnclaveCertificateIamRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateIamInstanceProfileCommand}
   */
  associateIamInstanceProfile(
    args: AssociateIamInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateIamInstanceProfileCommandOutput>;
  associateIamInstanceProfile(
    args: AssociateIamInstanceProfileCommandInput,
    cb: (err: any, data?: AssociateIamInstanceProfileCommandOutput) => void
  ): void;
  associateIamInstanceProfile(
    args: AssociateIamInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateIamInstanceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateInstanceEventWindowCommand}
   */
  associateInstanceEventWindow(
    args: AssociateInstanceEventWindowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateInstanceEventWindowCommandOutput>;
  associateInstanceEventWindow(
    args: AssociateInstanceEventWindowCommandInput,
    cb: (err: any, data?: AssociateInstanceEventWindowCommandOutput) => void
  ): void;
  associateInstanceEventWindow(
    args: AssociateInstanceEventWindowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateInstanceEventWindowCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateIpamByoasnCommand}
   */
  associateIpamByoasn(
    args: AssociateIpamByoasnCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateIpamByoasnCommandOutput>;
  associateIpamByoasn(
    args: AssociateIpamByoasnCommandInput,
    cb: (err: any, data?: AssociateIpamByoasnCommandOutput) => void
  ): void;
  associateIpamByoasn(
    args: AssociateIpamByoasnCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateIpamByoasnCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateIpamResourceDiscoveryCommand}
   */
  associateIpamResourceDiscovery(
    args: AssociateIpamResourceDiscoveryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateIpamResourceDiscoveryCommandOutput>;
  associateIpamResourceDiscovery(
    args: AssociateIpamResourceDiscoveryCommandInput,
    cb: (err: any, data?: AssociateIpamResourceDiscoveryCommandOutput) => void
  ): void;
  associateIpamResourceDiscovery(
    args: AssociateIpamResourceDiscoveryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateIpamResourceDiscoveryCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateNatGatewayAddressCommand}
   */
  associateNatGatewayAddress(
    args: AssociateNatGatewayAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateNatGatewayAddressCommandOutput>;
  associateNatGatewayAddress(
    args: AssociateNatGatewayAddressCommandInput,
    cb: (err: any, data?: AssociateNatGatewayAddressCommandOutput) => void
  ): void;
  associateNatGatewayAddress(
    args: AssociateNatGatewayAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateNatGatewayAddressCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateRouteServerCommand}
   */
  associateRouteServer(
    args: AssociateRouteServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateRouteServerCommandOutput>;
  associateRouteServer(
    args: AssociateRouteServerCommandInput,
    cb: (err: any, data?: AssociateRouteServerCommandOutput) => void
  ): void;
  associateRouteServer(
    args: AssociateRouteServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateRouteServerCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateRouteTableCommand}
   */
  associateRouteTable(
    args: AssociateRouteTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateRouteTableCommandOutput>;
  associateRouteTable(
    args: AssociateRouteTableCommandInput,
    cb: (err: any, data?: AssociateRouteTableCommandOutput) => void
  ): void;
  associateRouteTable(
    args: AssociateRouteTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateRouteTableCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateSecurityGroupVpcCommand}
   */
  associateSecurityGroupVpc(
    args: AssociateSecurityGroupVpcCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateSecurityGroupVpcCommandOutput>;
  associateSecurityGroupVpc(
    args: AssociateSecurityGroupVpcCommandInput,
    cb: (err: any, data?: AssociateSecurityGroupVpcCommandOutput) => void
  ): void;
  associateSecurityGroupVpc(
    args: AssociateSecurityGroupVpcCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateSecurityGroupVpcCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateSubnetCidrBlockCommand}
   */
  associateSubnetCidrBlock(
    args: AssociateSubnetCidrBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateSubnetCidrBlockCommandOutput>;
  associateSubnetCidrBlock(
    args: AssociateSubnetCidrBlockCommandInput,
    cb: (err: any, data?: AssociateSubnetCidrBlockCommandOutput) => void
  ): void;
  associateSubnetCidrBlock(
    args: AssociateSubnetCidrBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateSubnetCidrBlockCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateTransitGatewayMulticastDomainCommand}
   */
  associateTransitGatewayMulticastDomain(
    args: AssociateTransitGatewayMulticastDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateTransitGatewayMulticastDomainCommandOutput>;
  associateTransitGatewayMulticastDomain(
    args: AssociateTransitGatewayMulticastDomainCommandInput,
    cb: (err: any, data?: AssociateTransitGatewayMulticastDomainCommandOutput) => void
  ): void;
  associateTransitGatewayMulticastDomain(
    args: AssociateTransitGatewayMulticastDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateTransitGatewayMulticastDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateTransitGatewayPolicyTableCommand}
   */
  associateTransitGatewayPolicyTable(
    args: AssociateTransitGatewayPolicyTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateTransitGatewayPolicyTableCommandOutput>;
  associateTransitGatewayPolicyTable(
    args: AssociateTransitGatewayPolicyTableCommandInput,
    cb: (err: any, data?: AssociateTransitGatewayPolicyTableCommandOutput) => void
  ): void;
  associateTransitGatewayPolicyTable(
    args: AssociateTransitGatewayPolicyTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateTransitGatewayPolicyTableCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateTransitGatewayRouteTableCommand}
   */
  associateTransitGatewayRouteTable(
    args: AssociateTransitGatewayRouteTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateTransitGatewayRouteTableCommandOutput>;
  associateTransitGatewayRouteTable(
    args: AssociateTransitGatewayRouteTableCommandInput,
    cb: (err: any, data?: AssociateTransitGatewayRouteTableCommandOutput) => void
  ): void;
  associateTransitGatewayRouteTable(
    args: AssociateTransitGatewayRouteTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateTransitGatewayRouteTableCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateTrunkInterfaceCommand}
   */
  associateTrunkInterface(
    args: AssociateTrunkInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateTrunkInterfaceCommandOutput>;
  associateTrunkInterface(
    args: AssociateTrunkInterfaceCommandInput,
    cb: (err: any, data?: AssociateTrunkInterfaceCommandOutput) => void
  ): void;
  associateTrunkInterface(
    args: AssociateTrunkInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateTrunkInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateVpcCidrBlockCommand}
   */
  associateVpcCidrBlock(
    args: AssociateVpcCidrBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateVpcCidrBlockCommandOutput>;
  associateVpcCidrBlock(
    args: AssociateVpcCidrBlockCommandInput,
    cb: (err: any, data?: AssociateVpcCidrBlockCommandOutput) => void
  ): void;
  associateVpcCidrBlock(
    args: AssociateVpcCidrBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateVpcCidrBlockCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachClassicLinkVpcCommand}
   */
  attachClassicLinkVpc(
    args: AttachClassicLinkVpcCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachClassicLinkVpcCommandOutput>;
  attachClassicLinkVpc(
    args: AttachClassicLinkVpcCommandInput,
    cb: (err: any, data?: AttachClassicLinkVpcCommandOutput) => void
  ): void;
  attachClassicLinkVpc(
    args: AttachClassicLinkVpcCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachClassicLinkVpcCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachInternetGatewayCommand}
   */
  attachInternetGateway(
    args: AttachInternetGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachInternetGatewayCommandOutput>;
  attachInternetGateway(
    args: AttachInternetGatewayCommandInput,
    cb: (err: any, data?: AttachInternetGatewayCommandOutput) => void
  ): void;
  attachInternetGateway(
    args: AttachInternetGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachInternetGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachNetworkInterfaceCommand}
   */
  attachNetworkInterface(
    args: AttachNetworkInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachNetworkInterfaceCommandOutput>;
  attachNetworkInterface(
    args: AttachNetworkInterfaceCommandInput,
    cb: (err: any, data?: AttachNetworkInterfaceCommandOutput) => void
  ): void;
  attachNetworkInterface(
    args: AttachNetworkInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachNetworkInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachVerifiedAccessTrustProviderCommand}
   */
  attachVerifiedAccessTrustProvider(
    args: AttachVerifiedAccessTrustProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachVerifiedAccessTrustProviderCommandOutput>;
  attachVerifiedAccessTrustProvider(
    args: AttachVerifiedAccessTrustProviderCommandInput,
    cb: (err: any, data?: AttachVerifiedAccessTrustProviderCommandOutput) => void
  ): void;
  attachVerifiedAccessTrustProvider(
    args: AttachVerifiedAccessTrustProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachVerifiedAccessTrustProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachVolumeCommand}
   */
  attachVolume(args: AttachVolumeCommandInput, options?: __HttpHandlerOptions): Promise<AttachVolumeCommandOutput>;
  attachVolume(args: AttachVolumeCommandInput, cb: (err: any, data?: AttachVolumeCommandOutput) => void): void;
  attachVolume(
    args: AttachVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachVpnGatewayCommand}
   */
  attachVpnGateway(
    args: AttachVpnGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachVpnGatewayCommandOutput>;
  attachVpnGateway(
    args: AttachVpnGatewayCommandInput,
    cb: (err: any, data?: AttachVpnGatewayCommandOutput) => void
  ): void;
  attachVpnGateway(
    args: AttachVpnGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachVpnGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link AuthorizeClientVpnIngressCommand}
   */
  authorizeClientVpnIngress(
    args: AuthorizeClientVpnIngressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AuthorizeClientVpnIngressCommandOutput>;
  authorizeClientVpnIngress(
    args: AuthorizeClientVpnIngressCommandInput,
    cb: (err: any, data?: AuthorizeClientVpnIngressCommandOutput) => void
  ): void;
  authorizeClientVpnIngress(
    args: AuthorizeClientVpnIngressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AuthorizeClientVpnIngressCommandOutput) => void
  ): void;

  /**
   * @see {@link AuthorizeSecurityGroupEgressCommand}
   */
  authorizeSecurityGroupEgress(
    args: AuthorizeSecurityGroupEgressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AuthorizeSecurityGroupEgressCommandOutput>;
  authorizeSecurityGroupEgress(
    args: AuthorizeSecurityGroupEgressCommandInput,
    cb: (err: any, data?: AuthorizeSecurityGroupEgressCommandOutput) => void
  ): void;
  authorizeSecurityGroupEgress(
    args: AuthorizeSecurityGroupEgressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AuthorizeSecurityGroupEgressCommandOutput) => void
  ): void;

  /**
   * @see {@link AuthorizeSecurityGroupIngressCommand}
   */
  authorizeSecurityGroupIngress(): Promise<AuthorizeSecurityGroupIngressCommandOutput>;
  authorizeSecurityGroupIngress(
    args: AuthorizeSecurityGroupIngressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AuthorizeSecurityGroupIngressCommandOutput>;
  authorizeSecurityGroupIngress(
    args: AuthorizeSecurityGroupIngressCommandInput,
    cb: (err: any, data?: AuthorizeSecurityGroupIngressCommandOutput) => void
  ): void;
  authorizeSecurityGroupIngress(
    args: AuthorizeSecurityGroupIngressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AuthorizeSecurityGroupIngressCommandOutput) => void
  ): void;

  /**
   * @see {@link BundleInstanceCommand}
   */
  bundleInstance(
    args: BundleInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BundleInstanceCommandOutput>;
  bundleInstance(args: BundleInstanceCommandInput, cb: (err: any, data?: BundleInstanceCommandOutput) => void): void;
  bundleInstance(
    args: BundleInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BundleInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelBundleTaskCommand}
   */
  cancelBundleTask(
    args: CancelBundleTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelBundleTaskCommandOutput>;
  cancelBundleTask(
    args: CancelBundleTaskCommandInput,
    cb: (err: any, data?: CancelBundleTaskCommandOutput) => void
  ): void;
  cancelBundleTask(
    args: CancelBundleTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelBundleTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelCapacityReservationCommand}
   */
  cancelCapacityReservation(
    args: CancelCapacityReservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelCapacityReservationCommandOutput>;
  cancelCapacityReservation(
    args: CancelCapacityReservationCommandInput,
    cb: (err: any, data?: CancelCapacityReservationCommandOutput) => void
  ): void;
  cancelCapacityReservation(
    args: CancelCapacityReservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelCapacityReservationCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelCapacityReservationFleetsCommand}
   */
  cancelCapacityReservationFleets(
    args: CancelCapacityReservationFleetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelCapacityReservationFleetsCommandOutput>;
  cancelCapacityReservationFleets(
    args: CancelCapacityReservationFleetsCommandInput,
    cb: (err: any, data?: CancelCapacityReservationFleetsCommandOutput) => void
  ): void;
  cancelCapacityReservationFleets(
    args: CancelCapacityReservationFleetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelCapacityReservationFleetsCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelConversionTaskCommand}
   */
  cancelConversionTask(
    args: CancelConversionTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelConversionTaskCommandOutput>;
  cancelConversionTask(
    args: CancelConversionTaskCommandInput,
    cb: (err: any, data?: CancelConversionTaskCommandOutput) => void
  ): void;
  cancelConversionTask(
    args: CancelConversionTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelConversionTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelDeclarativePoliciesReportCommand}
   */
  cancelDeclarativePoliciesReport(
    args: CancelDeclarativePoliciesReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelDeclarativePoliciesReportCommandOutput>;
  cancelDeclarativePoliciesReport(
    args: CancelDeclarativePoliciesReportCommandInput,
    cb: (err: any, data?: CancelDeclarativePoliciesReportCommandOutput) => void
  ): void;
  cancelDeclarativePoliciesReport(
    args: CancelDeclarativePoliciesReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelDeclarativePoliciesReportCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelExportTaskCommand}
   */
  cancelExportTask(
    args: CancelExportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelExportTaskCommandOutput>;
  cancelExportTask(
    args: CancelExportTaskCommandInput,
    cb: (err: any, data?: CancelExportTaskCommandOutput) => void
  ): void;
  cancelExportTask(
    args: CancelExportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelExportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelImageLaunchPermissionCommand}
   */
  cancelImageLaunchPermission(
    args: CancelImageLaunchPermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelImageLaunchPermissionCommandOutput>;
  cancelImageLaunchPermission(
    args: CancelImageLaunchPermissionCommandInput,
    cb: (err: any, data?: CancelImageLaunchPermissionCommandOutput) => void
  ): void;
  cancelImageLaunchPermission(
    args: CancelImageLaunchPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelImageLaunchPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelImportTaskCommand}
   */
  cancelImportTask(): Promise<CancelImportTaskCommandOutput>;
  cancelImportTask(
    args: CancelImportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelImportTaskCommandOutput>;
  cancelImportTask(
    args: CancelImportTaskCommandInput,
    cb: (err: any, data?: CancelImportTaskCommandOutput) => void
  ): void;
  cancelImportTask(
    args: CancelImportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelImportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelReservedInstancesListingCommand}
   */
  cancelReservedInstancesListing(
    args: CancelReservedInstancesListingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelReservedInstancesListingCommandOutput>;
  cancelReservedInstancesListing(
    args: CancelReservedInstancesListingCommandInput,
    cb: (err: any, data?: CancelReservedInstancesListingCommandOutput) => void
  ): void;
  cancelReservedInstancesListing(
    args: CancelReservedInstancesListingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelReservedInstancesListingCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelSpotFleetRequestsCommand}
   */
  cancelSpotFleetRequests(
    args: CancelSpotFleetRequestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelSpotFleetRequestsCommandOutput>;
  cancelSpotFleetRequests(
    args: CancelSpotFleetRequestsCommandInput,
    cb: (err: any, data?: CancelSpotFleetRequestsCommandOutput) => void
  ): void;
  cancelSpotFleetRequests(
    args: CancelSpotFleetRequestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelSpotFleetRequestsCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelSpotInstanceRequestsCommand}
   */
  cancelSpotInstanceRequests(
    args: CancelSpotInstanceRequestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelSpotInstanceRequestsCommandOutput>;
  cancelSpotInstanceRequests(
    args: CancelSpotInstanceRequestsCommandInput,
    cb: (err: any, data?: CancelSpotInstanceRequestsCommandOutput) => void
  ): void;
  cancelSpotInstanceRequests(
    args: CancelSpotInstanceRequestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelSpotInstanceRequestsCommandOutput) => void
  ): void;

  /**
   * @see {@link ConfirmProductInstanceCommand}
   */
  confirmProductInstance(
    args: ConfirmProductInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfirmProductInstanceCommandOutput>;
  confirmProductInstance(
    args: ConfirmProductInstanceCommandInput,
    cb: (err: any, data?: ConfirmProductInstanceCommandOutput) => void
  ): void;
  confirmProductInstance(
    args: ConfirmProductInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfirmProductInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyFpgaImageCommand}
   */
  copyFpgaImage(args: CopyFpgaImageCommandInput, options?: __HttpHandlerOptions): Promise<CopyFpgaImageCommandOutput>;
  copyFpgaImage(args: CopyFpgaImageCommandInput, cb: (err: any, data?: CopyFpgaImageCommandOutput) => void): void;
  copyFpgaImage(
    args: CopyFpgaImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyFpgaImageCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyImageCommand}
   */
  copyImage(args: CopyImageCommandInput, options?: __HttpHandlerOptions): Promise<CopyImageCommandOutput>;
  copyImage(args: CopyImageCommandInput, cb: (err: any, data?: CopyImageCommandOutput) => void): void;
  copyImage(
    args: CopyImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyImageCommandOutput) => void
  ): void;

  /**
   * @see {@link CopySnapshotCommand}
   */
  copySnapshot(args: CopySnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CopySnapshotCommandOutput>;
  copySnapshot(args: CopySnapshotCommandInput, cb: (err: any, data?: CopySnapshotCommandOutput) => void): void;
  copySnapshot(
    args: CopySnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopySnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCapacityReservationCommand}
   */
  createCapacityReservation(
    args: CreateCapacityReservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCapacityReservationCommandOutput>;
  createCapacityReservation(
    args: CreateCapacityReservationCommandInput,
    cb: (err: any, data?: CreateCapacityReservationCommandOutput) => void
  ): void;
  createCapacityReservation(
    args: CreateCapacityReservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCapacityReservationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCapacityReservationBySplittingCommand}
   */
  createCapacityReservationBySplitting(
    args: CreateCapacityReservationBySplittingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCapacityReservationBySplittingCommandOutput>;
  createCapacityReservationBySplitting(
    args: CreateCapacityReservationBySplittingCommandInput,
    cb: (err: any, data?: CreateCapacityReservationBySplittingCommandOutput) => void
  ): void;
  createCapacityReservationBySplitting(
    args: CreateCapacityReservationBySplittingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCapacityReservationBySplittingCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCapacityReservationFleetCommand}
   */
  createCapacityReservationFleet(
    args: CreateCapacityReservationFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCapacityReservationFleetCommandOutput>;
  createCapacityReservationFleet(
    args: CreateCapacityReservationFleetCommandInput,
    cb: (err: any, data?: CreateCapacityReservationFleetCommandOutput) => void
  ): void;
  createCapacityReservationFleet(
    args: CreateCapacityReservationFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCapacityReservationFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCarrierGatewayCommand}
   */
  createCarrierGateway(
    args: CreateCarrierGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCarrierGatewayCommandOutput>;
  createCarrierGateway(
    args: CreateCarrierGatewayCommandInput,
    cb: (err: any, data?: CreateCarrierGatewayCommandOutput) => void
  ): void;
  createCarrierGateway(
    args: CreateCarrierGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCarrierGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClientVpnEndpointCommand}
   */
  createClientVpnEndpoint(
    args: CreateClientVpnEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClientVpnEndpointCommandOutput>;
  createClientVpnEndpoint(
    args: CreateClientVpnEndpointCommandInput,
    cb: (err: any, data?: CreateClientVpnEndpointCommandOutput) => void
  ): void;
  createClientVpnEndpoint(
    args: CreateClientVpnEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClientVpnEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClientVpnRouteCommand}
   */
  createClientVpnRoute(
    args: CreateClientVpnRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClientVpnRouteCommandOutput>;
  createClientVpnRoute(
    args: CreateClientVpnRouteCommandInput,
    cb: (err: any, data?: CreateClientVpnRouteCommandOutput) => void
  ): void;
  createClientVpnRoute(
    args: CreateClientVpnRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClientVpnRouteCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCoipCidrCommand}
   */
  createCoipCidr(
    args: CreateCoipCidrCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCoipCidrCommandOutput>;
  createCoipCidr(args: CreateCoipCidrCommandInput, cb: (err: any, data?: CreateCoipCidrCommandOutput) => void): void;
  createCoipCidr(
    args: CreateCoipCidrCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCoipCidrCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCoipPoolCommand}
   */
  createCoipPool(
    args: CreateCoipPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCoipPoolCommandOutput>;
  createCoipPool(args: CreateCoipPoolCommandInput, cb: (err: any, data?: CreateCoipPoolCommandOutput) => void): void;
  createCoipPool(
    args: CreateCoipPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCoipPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCustomerGatewayCommand}
   */
  createCustomerGateway(
    args: CreateCustomerGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomerGatewayCommandOutput>;
  createCustomerGateway(
    args: CreateCustomerGatewayCommandInput,
    cb: (err: any, data?: CreateCustomerGatewayCommandOutput) => void
  ): void;
  createCustomerGateway(
    args: CreateCustomerGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomerGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDefaultSubnetCommand}
   */
  createDefaultSubnet(
    args: CreateDefaultSubnetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDefaultSubnetCommandOutput>;
  createDefaultSubnet(
    args: CreateDefaultSubnetCommandInput,
    cb: (err: any, data?: CreateDefaultSubnetCommandOutput) => void
  ): void;
  createDefaultSubnet(
    args: CreateDefaultSubnetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDefaultSubnetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDefaultVpcCommand}
   */
  createDefaultVpc(): Promise<CreateDefaultVpcCommandOutput>;
  createDefaultVpc(
    args: CreateDefaultVpcCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDefaultVpcCommandOutput>;
  createDefaultVpc(
    args: CreateDefaultVpcCommandInput,
    cb: (err: any, data?: CreateDefaultVpcCommandOutput) => void
  ): void;
  createDefaultVpc(
    args: CreateDefaultVpcCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDefaultVpcCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDelegateMacVolumeOwnershipTaskCommand}
   */
  createDelegateMacVolumeOwnershipTask(
    args: CreateDelegateMacVolumeOwnershipTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDelegateMacVolumeOwnershipTaskCommandOutput>;
  createDelegateMacVolumeOwnershipTask(
    args: CreateDelegateMacVolumeOwnershipTaskCommandInput,
    cb: (err: any, data?: CreateDelegateMacVolumeOwnershipTaskCommandOutput) => void
  ): void;
  createDelegateMacVolumeOwnershipTask(
    args: CreateDelegateMacVolumeOwnershipTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDelegateMacVolumeOwnershipTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDhcpOptionsCommand}
   */
  createDhcpOptions(
    args: CreateDhcpOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDhcpOptionsCommandOutput>;
  createDhcpOptions(
    args: CreateDhcpOptionsCommandInput,
    cb: (err: any, data?: CreateDhcpOptionsCommandOutput) => void
  ): void;
  createDhcpOptions(
    args: CreateDhcpOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDhcpOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEgressOnlyInternetGatewayCommand}
   */
  createEgressOnlyInternetGateway(
    args: CreateEgressOnlyInternetGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEgressOnlyInternetGatewayCommandOutput>;
  createEgressOnlyInternetGateway(
    args: CreateEgressOnlyInternetGatewayCommandInput,
    cb: (err: any, data?: CreateEgressOnlyInternetGatewayCommandOutput) => void
  ): void;
  createEgressOnlyInternetGateway(
    args: CreateEgressOnlyInternetGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEgressOnlyInternetGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFleetCommand}
   */
  createFleet(args: CreateFleetCommandInput, options?: __HttpHandlerOptions): Promise<CreateFleetCommandOutput>;
  createFleet(args: CreateFleetCommandInput, cb: (err: any, data?: CreateFleetCommandOutput) => void): void;
  createFleet(
    args: CreateFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFlowLogsCommand}
   */
  createFlowLogs(
    args: CreateFlowLogsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFlowLogsCommandOutput>;
  createFlowLogs(args: CreateFlowLogsCommandInput, cb: (err: any, data?: CreateFlowLogsCommandOutput) => void): void;
  createFlowLogs(
    args: CreateFlowLogsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFlowLogsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFpgaImageCommand}
   */
  createFpgaImage(
    args: CreateFpgaImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFpgaImageCommandOutput>;
  createFpgaImage(args: CreateFpgaImageCommandInput, cb: (err: any, data?: CreateFpgaImageCommandOutput) => void): void;
  createFpgaImage(
    args: CreateFpgaImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFpgaImageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateImageCommand}
   */
  createImage(args: CreateImageCommandInput, options?: __HttpHandlerOptions): Promise<CreateImageCommandOutput>;
  createImage(args: CreateImageCommandInput, cb: (err: any, data?: CreateImageCommandOutput) => void): void;
  createImage(
    args: CreateImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateImageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInstanceConnectEndpointCommand}
   */
  createInstanceConnectEndpoint(
    args: CreateInstanceConnectEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInstanceConnectEndpointCommandOutput>;
  createInstanceConnectEndpoint(
    args: CreateInstanceConnectEndpointCommandInput,
    cb: (err: any, data?: CreateInstanceConnectEndpointCommandOutput) => void
  ): void;
  createInstanceConnectEndpoint(
    args: CreateInstanceConnectEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInstanceConnectEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInstanceEventWindowCommand}
   */
  createInstanceEventWindow(): Promise<CreateInstanceEventWindowCommandOutput>;
  createInstanceEventWindow(
    args: CreateInstanceEventWindowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInstanceEventWindowCommandOutput>;
  createInstanceEventWindow(
    args: CreateInstanceEventWindowCommandInput,
    cb: (err: any, data?: CreateInstanceEventWindowCommandOutput) => void
  ): void;
  createInstanceEventWindow(
    args: CreateInstanceEventWindowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInstanceEventWindowCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInstanceExportTaskCommand}
   */
  createInstanceExportTask(
    args: CreateInstanceExportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInstanceExportTaskCommandOutput>;
  createInstanceExportTask(
    args: CreateInstanceExportTaskCommandInput,
    cb: (err: any, data?: CreateInstanceExportTaskCommandOutput) => void
  ): void;
  createInstanceExportTask(
    args: CreateInstanceExportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInstanceExportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInternetGatewayCommand}
   */
  createInternetGateway(): Promise<CreateInternetGatewayCommandOutput>;
  createInternetGateway(
    args: CreateInternetGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInternetGatewayCommandOutput>;
  createInternetGateway(
    args: CreateInternetGatewayCommandInput,
    cb: (err: any, data?: CreateInternetGatewayCommandOutput) => void
  ): void;
  createInternetGateway(
    args: CreateInternetGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInternetGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIpamCommand}
   */
  createIpam(): Promise<CreateIpamCommandOutput>;
  createIpam(args: CreateIpamCommandInput, options?: __HttpHandlerOptions): Promise<CreateIpamCommandOutput>;
  createIpam(args: CreateIpamCommandInput, cb: (err: any, data?: CreateIpamCommandOutput) => void): void;
  createIpam(
    args: CreateIpamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIpamCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIpamExternalResourceVerificationTokenCommand}
   */
  createIpamExternalResourceVerificationToken(
    args: CreateIpamExternalResourceVerificationTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIpamExternalResourceVerificationTokenCommandOutput>;
  createIpamExternalResourceVerificationToken(
    args: CreateIpamExternalResourceVerificationTokenCommandInput,
    cb: (err: any, data?: CreateIpamExternalResourceVerificationTokenCommandOutput) => void
  ): void;
  createIpamExternalResourceVerificationToken(
    args: CreateIpamExternalResourceVerificationTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIpamExternalResourceVerificationTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIpamPoolCommand}
   */
  createIpamPool(
    args: CreateIpamPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIpamPoolCommandOutput>;
  createIpamPool(args: CreateIpamPoolCommandInput, cb: (err: any, data?: CreateIpamPoolCommandOutput) => void): void;
  createIpamPool(
    args: CreateIpamPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIpamPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIpamResourceDiscoveryCommand}
   */
  createIpamResourceDiscovery(): Promise<CreateIpamResourceDiscoveryCommandOutput>;
  createIpamResourceDiscovery(
    args: CreateIpamResourceDiscoveryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIpamResourceDiscoveryCommandOutput>;
  createIpamResourceDiscovery(
    args: CreateIpamResourceDiscoveryCommandInput,
    cb: (err: any, data?: CreateIpamResourceDiscoveryCommandOutput) => void
  ): void;
  createIpamResourceDiscovery(
    args: CreateIpamResourceDiscoveryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIpamResourceDiscoveryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIpamScopeCommand}
   */
  createIpamScope(
    args: CreateIpamScopeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIpamScopeCommandOutput>;
  createIpamScope(args: CreateIpamScopeCommandInput, cb: (err: any, data?: CreateIpamScopeCommandOutput) => void): void;
  createIpamScope(
    args: CreateIpamScopeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIpamScopeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKeyPairCommand}
   */
  createKeyPair(args: CreateKeyPairCommandInput, options?: __HttpHandlerOptions): Promise<CreateKeyPairCommandOutput>;
  createKeyPair(args: CreateKeyPairCommandInput, cb: (err: any, data?: CreateKeyPairCommandOutput) => void): void;
  createKeyPair(
    args: CreateKeyPairCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKeyPairCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLaunchTemplateCommand}
   */
  createLaunchTemplate(
    args: CreateLaunchTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLaunchTemplateCommandOutput>;
  createLaunchTemplate(
    args: CreateLaunchTemplateCommandInput,
    cb: (err: any, data?: CreateLaunchTemplateCommandOutput) => void
  ): void;
  createLaunchTemplate(
    args: CreateLaunchTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLaunchTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLaunchTemplateVersionCommand}
   */
  createLaunchTemplateVersion(
    args: CreateLaunchTemplateVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLaunchTemplateVersionCommandOutput>;
  createLaunchTemplateVersion(
    args: CreateLaunchTemplateVersionCommandInput,
    cb: (err: any, data?: CreateLaunchTemplateVersionCommandOutput) => void
  ): void;
  createLaunchTemplateVersion(
    args: CreateLaunchTemplateVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLaunchTemplateVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLocalGatewayRouteCommand}
   */
  createLocalGatewayRoute(
    args: CreateLocalGatewayRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLocalGatewayRouteCommandOutput>;
  createLocalGatewayRoute(
    args: CreateLocalGatewayRouteCommandInput,
    cb: (err: any, data?: CreateLocalGatewayRouteCommandOutput) => void
  ): void;
  createLocalGatewayRoute(
    args: CreateLocalGatewayRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLocalGatewayRouteCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLocalGatewayRouteTableCommand}
   */
  createLocalGatewayRouteTable(
    args: CreateLocalGatewayRouteTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLocalGatewayRouteTableCommandOutput>;
  createLocalGatewayRouteTable(
    args: CreateLocalGatewayRouteTableCommandInput,
    cb: (err: any, data?: CreateLocalGatewayRouteTableCommandOutput) => void
  ): void;
  createLocalGatewayRouteTable(
    args: CreateLocalGatewayRouteTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLocalGatewayRouteTableCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand}
   */
  createLocalGatewayRouteTableVirtualInterfaceGroupAssociation(
    args: CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput>;
  createLocalGatewayRouteTableVirtualInterfaceGroupAssociation(
    args: CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput,
    cb: (err: any, data?: CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput) => void
  ): void;
  createLocalGatewayRouteTableVirtualInterfaceGroupAssociation(
    args: CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLocalGatewayRouteTableVpcAssociationCommand}
   */
  createLocalGatewayRouteTableVpcAssociation(
    args: CreateLocalGatewayRouteTableVpcAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLocalGatewayRouteTableVpcAssociationCommandOutput>;
  createLocalGatewayRouteTableVpcAssociation(
    args: CreateLocalGatewayRouteTableVpcAssociationCommandInput,
    cb: (err: any, data?: CreateLocalGatewayRouteTableVpcAssociationCommandOutput) => void
  ): void;
  createLocalGatewayRouteTableVpcAssociation(
    args: CreateLocalGatewayRouteTableVpcAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLocalGatewayRouteTableVpcAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLocalGatewayVirtualInterfaceCommand}
   */
  createLocalGatewayVirtualInterface(
    args: CreateLocalGatewayVirtualInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLocalGatewayVirtualInterfaceCommandOutput>;
  createLocalGatewayVirtualInterface(
    args: CreateLocalGatewayVirtualInterfaceCommandInput,
    cb: (err: any, data?: CreateLocalGatewayVirtualInterfaceCommandOutput) => void
  ): void;
  createLocalGatewayVirtualInterface(
    args: CreateLocalGatewayVirtualInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLocalGatewayVirtualInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLocalGatewayVirtualInterfaceGroupCommand}
   */
  createLocalGatewayVirtualInterfaceGroup(
    args: CreateLocalGatewayVirtualInterfaceGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLocalGatewayVirtualInterfaceGroupCommandOutput>;
  createLocalGatewayVirtualInterfaceGroup(
    args: CreateLocalGatewayVirtualInterfaceGroupCommandInput,
    cb: (err: any, data?: CreateLocalGatewayVirtualInterfaceGroupCommandOutput) => void
  ): void;
  createLocalGatewayVirtualInterfaceGroup(
    args: CreateLocalGatewayVirtualInterfaceGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLocalGatewayVirtualInterfaceGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMacSystemIntegrityProtectionModificationTaskCommand}
   */
  createMacSystemIntegrityProtectionModificationTask(
    args: CreateMacSystemIntegrityProtectionModificationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMacSystemIntegrityProtectionModificationTaskCommandOutput>;
  createMacSystemIntegrityProtectionModificationTask(
    args: CreateMacSystemIntegrityProtectionModificationTaskCommandInput,
    cb: (err: any, data?: CreateMacSystemIntegrityProtectionModificationTaskCommandOutput) => void
  ): void;
  createMacSystemIntegrityProtectionModificationTask(
    args: CreateMacSystemIntegrityProtectionModificationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMacSystemIntegrityProtectionModificationTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateManagedPrefixListCommand}
   */
  createManagedPrefixList(
    args: CreateManagedPrefixListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateManagedPrefixListCommandOutput>;
  createManagedPrefixList(
    args: CreateManagedPrefixListCommandInput,
    cb: (err: any, data?: CreateManagedPrefixListCommandOutput) => void
  ): void;
  createManagedPrefixList(
    args: CreateManagedPrefixListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateManagedPrefixListCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNatGatewayCommand}
   */
  createNatGateway(
    args: CreateNatGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNatGatewayCommandOutput>;
  createNatGateway(
    args: CreateNatGatewayCommandInput,
    cb: (err: any, data?: CreateNatGatewayCommandOutput) => void
  ): void;
  createNatGateway(
    args: CreateNatGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNatGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNetworkAclCommand}
   */
  createNetworkAcl(
    args: CreateNetworkAclCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNetworkAclCommandOutput>;
  createNetworkAcl(
    args: CreateNetworkAclCommandInput,
    cb: (err: any, data?: CreateNetworkAclCommandOutput) => void
  ): void;
  createNetworkAcl(
    args: CreateNetworkAclCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkAclCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNetworkAclEntryCommand}
   */
  createNetworkAclEntry(
    args: CreateNetworkAclEntryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNetworkAclEntryCommandOutput>;
  createNetworkAclEntry(
    args: CreateNetworkAclEntryCommandInput,
    cb: (err: any, data?: CreateNetworkAclEntryCommandOutput) => void
  ): void;
  createNetworkAclEntry(
    args: CreateNetworkAclEntryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkAclEntryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNetworkInsightsAccessScopeCommand}
   */
  createNetworkInsightsAccessScope(
    args: CreateNetworkInsightsAccessScopeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNetworkInsightsAccessScopeCommandOutput>;
  createNetworkInsightsAccessScope(
    args: CreateNetworkInsightsAccessScopeCommandInput,
    cb: (err: any, data?: CreateNetworkInsightsAccessScopeCommandOutput) => void
  ): void;
  createNetworkInsightsAccessScope(
    args: CreateNetworkInsightsAccessScopeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkInsightsAccessScopeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNetworkInsightsPathCommand}
   */
  createNetworkInsightsPath(
    args: CreateNetworkInsightsPathCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNetworkInsightsPathCommandOutput>;
  createNetworkInsightsPath(
    args: CreateNetworkInsightsPathCommandInput,
    cb: (err: any, data?: CreateNetworkInsightsPathCommandOutput) => void
  ): void;
  createNetworkInsightsPath(
    args: CreateNetworkInsightsPathCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkInsightsPathCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNetworkInterfaceCommand}
   */
  createNetworkInterface(
    args: CreateNetworkInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNetworkInterfaceCommandOutput>;
  createNetworkInterface(
    args: CreateNetworkInterfaceCommandInput,
    cb: (err: any, data?: CreateNetworkInterfaceCommandOutput) => void
  ): void;
  createNetworkInterface(
    args: CreateNetworkInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNetworkInterfacePermissionCommand}
   */
  createNetworkInterfacePermission(
    args: CreateNetworkInterfacePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNetworkInterfacePermissionCommandOutput>;
  createNetworkInterfacePermission(
    args: CreateNetworkInterfacePermissionCommandInput,
    cb: (err: any, data?: CreateNetworkInterfacePermissionCommandOutput) => void
  ): void;
  createNetworkInterfacePermission(
    args: CreateNetworkInterfacePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkInterfacePermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePlacementGroupCommand}
   */
  createPlacementGroup(): Promise<CreatePlacementGroupCommandOutput>;
  createPlacementGroup(
    args: CreatePlacementGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePlacementGroupCommandOutput>;
  createPlacementGroup(
    args: CreatePlacementGroupCommandInput,
    cb: (err: any, data?: CreatePlacementGroupCommandOutput) => void
  ): void;
  createPlacementGroup(
    args: CreatePlacementGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePlacementGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePublicIpv4PoolCommand}
   */
  createPublicIpv4Pool(): Promise<CreatePublicIpv4PoolCommandOutput>;
  createPublicIpv4Pool(
    args: CreatePublicIpv4PoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePublicIpv4PoolCommandOutput>;
  createPublicIpv4Pool(
    args: CreatePublicIpv4PoolCommandInput,
    cb: (err: any, data?: CreatePublicIpv4PoolCommandOutput) => void
  ): void;
  createPublicIpv4Pool(
    args: CreatePublicIpv4PoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePublicIpv4PoolCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReplaceRootVolumeTaskCommand}
   */
  createReplaceRootVolumeTask(
    args: CreateReplaceRootVolumeTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReplaceRootVolumeTaskCommandOutput>;
  createReplaceRootVolumeTask(
    args: CreateReplaceRootVolumeTaskCommandInput,
    cb: (err: any, data?: CreateReplaceRootVolumeTaskCommandOutput) => void
  ): void;
  createReplaceRootVolumeTask(
    args: CreateReplaceRootVolumeTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReplaceRootVolumeTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReservedInstancesListingCommand}
   */
  createReservedInstancesListing(
    args: CreateReservedInstancesListingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReservedInstancesListingCommandOutput>;
  createReservedInstancesListing(
    args: CreateReservedInstancesListingCommandInput,
    cb: (err: any, data?: CreateReservedInstancesListingCommandOutput) => void
  ): void;
  createReservedInstancesListing(
    args: CreateReservedInstancesListingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReservedInstancesListingCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRestoreImageTaskCommand}
   */
  createRestoreImageTask(
    args: CreateRestoreImageTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRestoreImageTaskCommandOutput>;
  createRestoreImageTask(
    args: CreateRestoreImageTaskCommandInput,
    cb: (err: any, data?: CreateRestoreImageTaskCommandOutput) => void
  ): void;
  createRestoreImageTask(
    args: CreateRestoreImageTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRestoreImageTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRouteCommand}
   */
  createRoute(args: CreateRouteCommandInput, options?: __HttpHandlerOptions): Promise<CreateRouteCommandOutput>;
  createRoute(args: CreateRouteCommandInput, cb: (err: any, data?: CreateRouteCommandOutput) => void): void;
  createRoute(
    args: CreateRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRouteCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRouteServerCommand}
   */
  createRouteServer(
    args: CreateRouteServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRouteServerCommandOutput>;
  createRouteServer(
    args: CreateRouteServerCommandInput,
    cb: (err: any, data?: CreateRouteServerCommandOutput) => void
  ): void;
  createRouteServer(
    args: CreateRouteServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRouteServerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRouteServerEndpointCommand}
   */
  createRouteServerEndpoint(
    args: CreateRouteServerEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRouteServerEndpointCommandOutput>;
  createRouteServerEndpoint(
    args: CreateRouteServerEndpointCommandInput,
    cb: (err: any, data?: CreateRouteServerEndpointCommandOutput) => void
  ): void;
  createRouteServerEndpoint(
    args: CreateRouteServerEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRouteServerEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRouteServerPeerCommand}
   */
  createRouteServerPeer(
    args: CreateRouteServerPeerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRouteServerPeerCommandOutput>;
  createRouteServerPeer(
    args: CreateRouteServerPeerCommandInput,
    cb: (err: any, data?: CreateRouteServerPeerCommandOutput) => void
  ): void;
  createRouteServerPeer(
    args: CreateRouteServerPeerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRouteServerPeerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRouteTableCommand}
   */
  createRouteTable(
    args: CreateRouteTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRouteTableCommandOutput>;
  createRouteTable(
    args: CreateRouteTableCommandInput,
    cb: (err: any, data?: CreateRouteTableCommandOutput) => void
  ): void;
  createRouteTable(
    args: CreateRouteTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRouteTableCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSecurityGroupCommand}
   */
  createSecurityGroup(
    args: CreateSecurityGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSecurityGroupCommandOutput>;
  createSecurityGroup(
    args: CreateSecurityGroupCommandInput,
    cb: (err: any, data?: CreateSecurityGroupCommandOutput) => void
  ): void;
  createSecurityGroup(
    args: CreateSecurityGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSecurityGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSnapshotCommand}
   */
  createSnapshot(
    args: CreateSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSnapshotCommandOutput>;
  createSnapshot(args: CreateSnapshotCommandInput, cb: (err: any, data?: CreateSnapshotCommandOutput) => void): void;
  createSnapshot(
    args: CreateSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSnapshotsCommand}
   */
  createSnapshots(
    args: CreateSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSnapshotsCommandOutput>;
  createSnapshots(args: CreateSnapshotsCommandInput, cb: (err: any, data?: CreateSnapshotsCommandOutput) => void): void;
  createSnapshots(
    args: CreateSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSpotDatafeedSubscriptionCommand}
   */
  createSpotDatafeedSubscription(
    args: CreateSpotDatafeedSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSpotDatafeedSubscriptionCommandOutput>;
  createSpotDatafeedSubscription(
    args: CreateSpotDatafeedSubscriptionCommandInput,
    cb: (err: any, data?: CreateSpotDatafeedSubscriptionCommandOutput) => void
  ): void;
  createSpotDatafeedSubscription(
    args: CreateSpotDatafeedSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSpotDatafeedSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStoreImageTaskCommand}
   */
  createStoreImageTask(
    args: CreateStoreImageTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStoreImageTaskCommandOutput>;
  createStoreImageTask(
    args: CreateStoreImageTaskCommandInput,
    cb: (err: any, data?: CreateStoreImageTaskCommandOutput) => void
  ): void;
  createStoreImageTask(
    args: CreateStoreImageTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStoreImageTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSubnetCommand}
   */
  createSubnet(args: CreateSubnetCommandInput, options?: __HttpHandlerOptions): Promise<CreateSubnetCommandOutput>;
  createSubnet(args: CreateSubnetCommandInput, cb: (err: any, data?: CreateSubnetCommandOutput) => void): void;
  createSubnet(
    args: CreateSubnetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSubnetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSubnetCidrReservationCommand}
   */
  createSubnetCidrReservation(
    args: CreateSubnetCidrReservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSubnetCidrReservationCommandOutput>;
  createSubnetCidrReservation(
    args: CreateSubnetCidrReservationCommandInput,
    cb: (err: any, data?: CreateSubnetCidrReservationCommandOutput) => void
  ): void;
  createSubnetCidrReservation(
    args: CreateSubnetCidrReservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSubnetCidrReservationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTagsCommand}
   */
  createTags(args: CreateTagsCommandInput, options?: __HttpHandlerOptions): Promise<CreateTagsCommandOutput>;
  createTags(args: CreateTagsCommandInput, cb: (err: any, data?: CreateTagsCommandOutput) => void): void;
  createTags(
    args: CreateTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTrafficMirrorFilterCommand}
   */
  createTrafficMirrorFilter(): Promise<CreateTrafficMirrorFilterCommandOutput>;
  createTrafficMirrorFilter(
    args: CreateTrafficMirrorFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrafficMirrorFilterCommandOutput>;
  createTrafficMirrorFilter(
    args: CreateTrafficMirrorFilterCommandInput,
    cb: (err: any, data?: CreateTrafficMirrorFilterCommandOutput) => void
  ): void;
  createTrafficMirrorFilter(
    args: CreateTrafficMirrorFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrafficMirrorFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTrafficMirrorFilterRuleCommand}
   */
  createTrafficMirrorFilterRule(
    args: CreateTrafficMirrorFilterRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrafficMirrorFilterRuleCommandOutput>;
  createTrafficMirrorFilterRule(
    args: CreateTrafficMirrorFilterRuleCommandInput,
    cb: (err: any, data?: CreateTrafficMirrorFilterRuleCommandOutput) => void
  ): void;
  createTrafficMirrorFilterRule(
    args: CreateTrafficMirrorFilterRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrafficMirrorFilterRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTrafficMirrorSessionCommand}
   */
  createTrafficMirrorSession(
    args: CreateTrafficMirrorSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrafficMirrorSessionCommandOutput>;
  createTrafficMirrorSession(
    args: CreateTrafficMirrorSessionCommandInput,
    cb: (err: any, data?: CreateTrafficMirrorSessionCommandOutput) => void
  ): void;
  createTrafficMirrorSession(
    args: CreateTrafficMirrorSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrafficMirrorSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTrafficMirrorTargetCommand}
   */
  createTrafficMirrorTarget(): Promise<CreateTrafficMirrorTargetCommandOutput>;
  createTrafficMirrorTarget(
    args: CreateTrafficMirrorTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrafficMirrorTargetCommandOutput>;
  createTrafficMirrorTarget(
    args: CreateTrafficMirrorTargetCommandInput,
    cb: (err: any, data?: CreateTrafficMirrorTargetCommandOutput) => void
  ): void;
  createTrafficMirrorTarget(
    args: CreateTrafficMirrorTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrafficMirrorTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTransitGatewayCommand}
   */
  createTransitGateway(): Promise<CreateTransitGatewayCommandOutput>;
  createTransitGateway(
    args: CreateTransitGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransitGatewayCommandOutput>;
  createTransitGateway(
    args: CreateTransitGatewayCommandInput,
    cb: (err: any, data?: CreateTransitGatewayCommandOutput) => void
  ): void;
  createTransitGateway(
    args: CreateTransitGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransitGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTransitGatewayConnectCommand}
   */
  createTransitGatewayConnect(
    args: CreateTransitGatewayConnectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransitGatewayConnectCommandOutput>;
  createTransitGatewayConnect(
    args: CreateTransitGatewayConnectCommandInput,
    cb: (err: any, data?: CreateTransitGatewayConnectCommandOutput) => void
  ): void;
  createTransitGatewayConnect(
    args: CreateTransitGatewayConnectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransitGatewayConnectCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTransitGatewayConnectPeerCommand}
   */
  createTransitGatewayConnectPeer(
    args: CreateTransitGatewayConnectPeerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransitGatewayConnectPeerCommandOutput>;
  createTransitGatewayConnectPeer(
    args: CreateTransitGatewayConnectPeerCommandInput,
    cb: (err: any, data?: CreateTransitGatewayConnectPeerCommandOutput) => void
  ): void;
  createTransitGatewayConnectPeer(
    args: CreateTransitGatewayConnectPeerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransitGatewayConnectPeerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTransitGatewayMulticastDomainCommand}
   */
  createTransitGatewayMulticastDomain(
    args: CreateTransitGatewayMulticastDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransitGatewayMulticastDomainCommandOutput>;
  createTransitGatewayMulticastDomain(
    args: CreateTransitGatewayMulticastDomainCommandInput,
    cb: (err: any, data?: CreateTransitGatewayMulticastDomainCommandOutput) => void
  ): void;
  createTransitGatewayMulticastDomain(
    args: CreateTransitGatewayMulticastDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransitGatewayMulticastDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTransitGatewayPeeringAttachmentCommand}
   */
  createTransitGatewayPeeringAttachment(
    args: CreateTransitGatewayPeeringAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransitGatewayPeeringAttachmentCommandOutput>;
  createTransitGatewayPeeringAttachment(
    args: CreateTransitGatewayPeeringAttachmentCommandInput,
    cb: (err: any, data?: CreateTransitGatewayPeeringAttachmentCommandOutput) => void
  ): void;
  createTransitGatewayPeeringAttachment(
    args: CreateTransitGatewayPeeringAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransitGatewayPeeringAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTransitGatewayPolicyTableCommand}
   */
  createTransitGatewayPolicyTable(
    args: CreateTransitGatewayPolicyTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransitGatewayPolicyTableCommandOutput>;
  createTransitGatewayPolicyTable(
    args: CreateTransitGatewayPolicyTableCommandInput,
    cb: (err: any, data?: CreateTransitGatewayPolicyTableCommandOutput) => void
  ): void;
  createTransitGatewayPolicyTable(
    args: CreateTransitGatewayPolicyTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransitGatewayPolicyTableCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTransitGatewayPrefixListReferenceCommand}
   */
  createTransitGatewayPrefixListReference(
    args: CreateTransitGatewayPrefixListReferenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransitGatewayPrefixListReferenceCommandOutput>;
  createTransitGatewayPrefixListReference(
    args: CreateTransitGatewayPrefixListReferenceCommandInput,
    cb: (err: any, data?: CreateTransitGatewayPrefixListReferenceCommandOutput) => void
  ): void;
  createTransitGatewayPrefixListReference(
    args: CreateTransitGatewayPrefixListReferenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransitGatewayPrefixListReferenceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTransitGatewayRouteCommand}
   */
  createTransitGatewayRoute(
    args: CreateTransitGatewayRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransitGatewayRouteCommandOutput>;
  createTransitGatewayRoute(
    args: CreateTransitGatewayRouteCommandInput,
    cb: (err: any, data?: CreateTransitGatewayRouteCommandOutput) => void
  ): void;
  createTransitGatewayRoute(
    args: CreateTransitGatewayRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransitGatewayRouteCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTransitGatewayRouteTableCommand}
   */
  createTransitGatewayRouteTable(
    args: CreateTransitGatewayRouteTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransitGatewayRouteTableCommandOutput>;
  createTransitGatewayRouteTable(
    args: CreateTransitGatewayRouteTableCommandInput,
    cb: (err: any, data?: CreateTransitGatewayRouteTableCommandOutput) => void
  ): void;
  createTransitGatewayRouteTable(
    args: CreateTransitGatewayRouteTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransitGatewayRouteTableCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTransitGatewayRouteTableAnnouncementCommand}
   */
  createTransitGatewayRouteTableAnnouncement(
    args: CreateTransitGatewayRouteTableAnnouncementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransitGatewayRouteTableAnnouncementCommandOutput>;
  createTransitGatewayRouteTableAnnouncement(
    args: CreateTransitGatewayRouteTableAnnouncementCommandInput,
    cb: (err: any, data?: CreateTransitGatewayRouteTableAnnouncementCommandOutput) => void
  ): void;
  createTransitGatewayRouteTableAnnouncement(
    args: CreateTransitGatewayRouteTableAnnouncementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransitGatewayRouteTableAnnouncementCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTransitGatewayVpcAttachmentCommand}
   */
  createTransitGatewayVpcAttachment(
    args: CreateTransitGatewayVpcAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransitGatewayVpcAttachmentCommandOutput>;
  createTransitGatewayVpcAttachment(
    args: CreateTransitGatewayVpcAttachmentCommandInput,
    cb: (err: any, data?: CreateTransitGatewayVpcAttachmentCommandOutput) => void
  ): void;
  createTransitGatewayVpcAttachment(
    args: CreateTransitGatewayVpcAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransitGatewayVpcAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVerifiedAccessEndpointCommand}
   */
  createVerifiedAccessEndpoint(
    args: CreateVerifiedAccessEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVerifiedAccessEndpointCommandOutput>;
  createVerifiedAccessEndpoint(
    args: CreateVerifiedAccessEndpointCommandInput,
    cb: (err: any, data?: CreateVerifiedAccessEndpointCommandOutput) => void
  ): void;
  createVerifiedAccessEndpoint(
    args: CreateVerifiedAccessEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVerifiedAccessEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVerifiedAccessGroupCommand}
   */
  createVerifiedAccessGroup(
    args: CreateVerifiedAccessGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVerifiedAccessGroupCommandOutput>;
  createVerifiedAccessGroup(
    args: CreateVerifiedAccessGroupCommandInput,
    cb: (err: any, data?: CreateVerifiedAccessGroupCommandOutput) => void
  ): void;
  createVerifiedAccessGroup(
    args: CreateVerifiedAccessGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVerifiedAccessGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVerifiedAccessInstanceCommand}
   */
  createVerifiedAccessInstance(): Promise<CreateVerifiedAccessInstanceCommandOutput>;
  createVerifiedAccessInstance(
    args: CreateVerifiedAccessInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVerifiedAccessInstanceCommandOutput>;
  createVerifiedAccessInstance(
    args: CreateVerifiedAccessInstanceCommandInput,
    cb: (err: any, data?: CreateVerifiedAccessInstanceCommandOutput) => void
  ): void;
  createVerifiedAccessInstance(
    args: CreateVerifiedAccessInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVerifiedAccessInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVerifiedAccessTrustProviderCommand}
   */
  createVerifiedAccessTrustProvider(
    args: CreateVerifiedAccessTrustProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVerifiedAccessTrustProviderCommandOutput>;
  createVerifiedAccessTrustProvider(
    args: CreateVerifiedAccessTrustProviderCommandInput,
    cb: (err: any, data?: CreateVerifiedAccessTrustProviderCommandOutput) => void
  ): void;
  createVerifiedAccessTrustProvider(
    args: CreateVerifiedAccessTrustProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVerifiedAccessTrustProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVolumeCommand}
   */
  createVolume(args: CreateVolumeCommandInput, options?: __HttpHandlerOptions): Promise<CreateVolumeCommandOutput>;
  createVolume(args: CreateVolumeCommandInput, cb: (err: any, data?: CreateVolumeCommandOutput) => void): void;
  createVolume(
    args: CreateVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVpcCommand}
   */
  createVpc(): Promise<CreateVpcCommandOutput>;
  createVpc(args: CreateVpcCommandInput, options?: __HttpHandlerOptions): Promise<CreateVpcCommandOutput>;
  createVpc(args: CreateVpcCommandInput, cb: (err: any, data?: CreateVpcCommandOutput) => void): void;
  createVpc(
    args: CreateVpcCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVpcBlockPublicAccessExclusionCommand}
   */
  createVpcBlockPublicAccessExclusion(
    args: CreateVpcBlockPublicAccessExclusionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcBlockPublicAccessExclusionCommandOutput>;
  createVpcBlockPublicAccessExclusion(
    args: CreateVpcBlockPublicAccessExclusionCommandInput,
    cb: (err: any, data?: CreateVpcBlockPublicAccessExclusionCommandOutput) => void
  ): void;
  createVpcBlockPublicAccessExclusion(
    args: CreateVpcBlockPublicAccessExclusionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcBlockPublicAccessExclusionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVpcEndpointCommand}
   */
  createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcEndpointCommandOutput>;
  createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    cb: (err: any, data?: CreateVpcEndpointCommandOutput) => void
  ): void;
  createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVpcEndpointConnectionNotificationCommand}
   */
  createVpcEndpointConnectionNotification(
    args: CreateVpcEndpointConnectionNotificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcEndpointConnectionNotificationCommandOutput>;
  createVpcEndpointConnectionNotification(
    args: CreateVpcEndpointConnectionNotificationCommandInput,
    cb: (err: any, data?: CreateVpcEndpointConnectionNotificationCommandOutput) => void
  ): void;
  createVpcEndpointConnectionNotification(
    args: CreateVpcEndpointConnectionNotificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcEndpointConnectionNotificationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVpcEndpointServiceConfigurationCommand}
   */
  createVpcEndpointServiceConfiguration(): Promise<CreateVpcEndpointServiceConfigurationCommandOutput>;
  createVpcEndpointServiceConfiguration(
    args: CreateVpcEndpointServiceConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcEndpointServiceConfigurationCommandOutput>;
  createVpcEndpointServiceConfiguration(
    args: CreateVpcEndpointServiceConfigurationCommandInput,
    cb: (err: any, data?: CreateVpcEndpointServiceConfigurationCommandOutput) => void
  ): void;
  createVpcEndpointServiceConfiguration(
    args: CreateVpcEndpointServiceConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcEndpointServiceConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVpcPeeringConnectionCommand}
   */
  createVpcPeeringConnection(
    args: CreateVpcPeeringConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcPeeringConnectionCommandOutput>;
  createVpcPeeringConnection(
    args: CreateVpcPeeringConnectionCommandInput,
    cb: (err: any, data?: CreateVpcPeeringConnectionCommandOutput) => void
  ): void;
  createVpcPeeringConnection(
    args: CreateVpcPeeringConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcPeeringConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVpnConnectionCommand}
   */
  createVpnConnection(
    args: CreateVpnConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpnConnectionCommandOutput>;
  createVpnConnection(
    args: CreateVpnConnectionCommandInput,
    cb: (err: any, data?: CreateVpnConnectionCommandOutput) => void
  ): void;
  createVpnConnection(
    args: CreateVpnConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpnConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVpnConnectionRouteCommand}
   */
  createVpnConnectionRoute(
    args: CreateVpnConnectionRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpnConnectionRouteCommandOutput>;
  createVpnConnectionRoute(
    args: CreateVpnConnectionRouteCommandInput,
    cb: (err: any, data?: CreateVpnConnectionRouteCommandOutput) => void
  ): void;
  createVpnConnectionRoute(
    args: CreateVpnConnectionRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpnConnectionRouteCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVpnGatewayCommand}
   */
  createVpnGateway(
    args: CreateVpnGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpnGatewayCommandOutput>;
  createVpnGateway(
    args: CreateVpnGatewayCommandInput,
    cb: (err: any, data?: CreateVpnGatewayCommandOutput) => void
  ): void;
  createVpnGateway(
    args: CreateVpnGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpnGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCarrierGatewayCommand}
   */
  deleteCarrierGateway(
    args: DeleteCarrierGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCarrierGatewayCommandOutput>;
  deleteCarrierGateway(
    args: DeleteCarrierGatewayCommandInput,
    cb: (err: any, data?: DeleteCarrierGatewayCommandOutput) => void
  ): void;
  deleteCarrierGateway(
    args: DeleteCarrierGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCarrierGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClientVpnEndpointCommand}
   */
  deleteClientVpnEndpoint(
    args: DeleteClientVpnEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClientVpnEndpointCommandOutput>;
  deleteClientVpnEndpoint(
    args: DeleteClientVpnEndpointCommandInput,
    cb: (err: any, data?: DeleteClientVpnEndpointCommandOutput) => void
  ): void;
  deleteClientVpnEndpoint(
    args: DeleteClientVpnEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClientVpnEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClientVpnRouteCommand}
   */
  deleteClientVpnRoute(
    args: DeleteClientVpnRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClientVpnRouteCommandOutput>;
  deleteClientVpnRoute(
    args: DeleteClientVpnRouteCommandInput,
    cb: (err: any, data?: DeleteClientVpnRouteCommandOutput) => void
  ): void;
  deleteClientVpnRoute(
    args: DeleteClientVpnRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClientVpnRouteCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCoipCidrCommand}
   */
  deleteCoipCidr(
    args: DeleteCoipCidrCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCoipCidrCommandOutput>;
  deleteCoipCidr(args: DeleteCoipCidrCommandInput, cb: (err: any, data?: DeleteCoipCidrCommandOutput) => void): void;
  deleteCoipCidr(
    args: DeleteCoipCidrCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCoipCidrCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCoipPoolCommand}
   */
  deleteCoipPool(
    args: DeleteCoipPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCoipPoolCommandOutput>;
  deleteCoipPool(args: DeleteCoipPoolCommandInput, cb: (err: any, data?: DeleteCoipPoolCommandOutput) => void): void;
  deleteCoipPool(
    args: DeleteCoipPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCoipPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomerGatewayCommand}
   */
  deleteCustomerGateway(
    args: DeleteCustomerGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomerGatewayCommandOutput>;
  deleteCustomerGateway(
    args: DeleteCustomerGatewayCommandInput,
    cb: (err: any, data?: DeleteCustomerGatewayCommandOutput) => void
  ): void;
  deleteCustomerGateway(
    args: DeleteCustomerGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomerGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDhcpOptionsCommand}
   */
  deleteDhcpOptions(
    args: DeleteDhcpOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDhcpOptionsCommandOutput>;
  deleteDhcpOptions(
    args: DeleteDhcpOptionsCommandInput,
    cb: (err: any, data?: DeleteDhcpOptionsCommandOutput) => void
  ): void;
  deleteDhcpOptions(
    args: DeleteDhcpOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDhcpOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEgressOnlyInternetGatewayCommand}
   */
  deleteEgressOnlyInternetGateway(
    args: DeleteEgressOnlyInternetGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEgressOnlyInternetGatewayCommandOutput>;
  deleteEgressOnlyInternetGateway(
    args: DeleteEgressOnlyInternetGatewayCommandInput,
    cb: (err: any, data?: DeleteEgressOnlyInternetGatewayCommandOutput) => void
  ): void;
  deleteEgressOnlyInternetGateway(
    args: DeleteEgressOnlyInternetGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEgressOnlyInternetGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFleetsCommand}
   */
  deleteFleets(args: DeleteFleetsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFleetsCommandOutput>;
  deleteFleets(args: DeleteFleetsCommandInput, cb: (err: any, data?: DeleteFleetsCommandOutput) => void): void;
  deleteFleets(
    args: DeleteFleetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFleetsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFlowLogsCommand}
   */
  deleteFlowLogs(
    args: DeleteFlowLogsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFlowLogsCommandOutput>;
  deleteFlowLogs(args: DeleteFlowLogsCommandInput, cb: (err: any, data?: DeleteFlowLogsCommandOutput) => void): void;
  deleteFlowLogs(
    args: DeleteFlowLogsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFlowLogsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFpgaImageCommand}
   */
  deleteFpgaImage(
    args: DeleteFpgaImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFpgaImageCommandOutput>;
  deleteFpgaImage(args: DeleteFpgaImageCommandInput, cb: (err: any, data?: DeleteFpgaImageCommandOutput) => void): void;
  deleteFpgaImage(
    args: DeleteFpgaImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFpgaImageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInstanceConnectEndpointCommand}
   */
  deleteInstanceConnectEndpoint(
    args: DeleteInstanceConnectEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInstanceConnectEndpointCommandOutput>;
  deleteInstanceConnectEndpoint(
    args: DeleteInstanceConnectEndpointCommandInput,
    cb: (err: any, data?: DeleteInstanceConnectEndpointCommandOutput) => void
  ): void;
  deleteInstanceConnectEndpoint(
    args: DeleteInstanceConnectEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInstanceConnectEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInstanceEventWindowCommand}
   */
  deleteInstanceEventWindow(
    args: DeleteInstanceEventWindowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInstanceEventWindowCommandOutput>;
  deleteInstanceEventWindow(
    args: DeleteInstanceEventWindowCommandInput,
    cb: (err: any, data?: DeleteInstanceEventWindowCommandOutput) => void
  ): void;
  deleteInstanceEventWindow(
    args: DeleteInstanceEventWindowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInstanceEventWindowCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInternetGatewayCommand}
   */
  deleteInternetGateway(
    args: DeleteInternetGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInternetGatewayCommandOutput>;
  deleteInternetGateway(
    args: DeleteInternetGatewayCommandInput,
    cb: (err: any, data?: DeleteInternetGatewayCommandOutput) => void
  ): void;
  deleteInternetGateway(
    args: DeleteInternetGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInternetGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIpamCommand}
   */
  deleteIpam(args: DeleteIpamCommandInput, options?: __HttpHandlerOptions): Promise<DeleteIpamCommandOutput>;
  deleteIpam(args: DeleteIpamCommandInput, cb: (err: any, data?: DeleteIpamCommandOutput) => void): void;
  deleteIpam(
    args: DeleteIpamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIpamCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIpamExternalResourceVerificationTokenCommand}
   */
  deleteIpamExternalResourceVerificationToken(
    args: DeleteIpamExternalResourceVerificationTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIpamExternalResourceVerificationTokenCommandOutput>;
  deleteIpamExternalResourceVerificationToken(
    args: DeleteIpamExternalResourceVerificationTokenCommandInput,
    cb: (err: any, data?: DeleteIpamExternalResourceVerificationTokenCommandOutput) => void
  ): void;
  deleteIpamExternalResourceVerificationToken(
    args: DeleteIpamExternalResourceVerificationTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIpamExternalResourceVerificationTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIpamPoolCommand}
   */
  deleteIpamPool(
    args: DeleteIpamPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIpamPoolCommandOutput>;
  deleteIpamPool(args: DeleteIpamPoolCommandInput, cb: (err: any, data?: DeleteIpamPoolCommandOutput) => void): void;
  deleteIpamPool(
    args: DeleteIpamPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIpamPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIpamResourceDiscoveryCommand}
   */
  deleteIpamResourceDiscovery(
    args: DeleteIpamResourceDiscoveryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIpamResourceDiscoveryCommandOutput>;
  deleteIpamResourceDiscovery(
    args: DeleteIpamResourceDiscoveryCommandInput,
    cb: (err: any, data?: DeleteIpamResourceDiscoveryCommandOutput) => void
  ): void;
  deleteIpamResourceDiscovery(
    args: DeleteIpamResourceDiscoveryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIpamResourceDiscoveryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIpamScopeCommand}
   */
  deleteIpamScope(
    args: DeleteIpamScopeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIpamScopeCommandOutput>;
  deleteIpamScope(args: DeleteIpamScopeCommandInput, cb: (err: any, data?: DeleteIpamScopeCommandOutput) => void): void;
  deleteIpamScope(
    args: DeleteIpamScopeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIpamScopeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKeyPairCommand}
   */
  deleteKeyPair(): Promise<DeleteKeyPairCommandOutput>;
  deleteKeyPair(args: DeleteKeyPairCommandInput, options?: __HttpHandlerOptions): Promise<DeleteKeyPairCommandOutput>;
  deleteKeyPair(args: DeleteKeyPairCommandInput, cb: (err: any, data?: DeleteKeyPairCommandOutput) => void): void;
  deleteKeyPair(
    args: DeleteKeyPairCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKeyPairCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLaunchTemplateCommand}
   */
  deleteLaunchTemplate(): Promise<DeleteLaunchTemplateCommandOutput>;
  deleteLaunchTemplate(
    args: DeleteLaunchTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLaunchTemplateCommandOutput>;
  deleteLaunchTemplate(
    args: DeleteLaunchTemplateCommandInput,
    cb: (err: any, data?: DeleteLaunchTemplateCommandOutput) => void
  ): void;
  deleteLaunchTemplate(
    args: DeleteLaunchTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLaunchTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLaunchTemplateVersionsCommand}
   */
  deleteLaunchTemplateVersions(
    args: DeleteLaunchTemplateVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLaunchTemplateVersionsCommandOutput>;
  deleteLaunchTemplateVersions(
    args: DeleteLaunchTemplateVersionsCommandInput,
    cb: (err: any, data?: DeleteLaunchTemplateVersionsCommandOutput) => void
  ): void;
  deleteLaunchTemplateVersions(
    args: DeleteLaunchTemplateVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLaunchTemplateVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLocalGatewayRouteCommand}
   */
  deleteLocalGatewayRoute(
    args: DeleteLocalGatewayRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLocalGatewayRouteCommandOutput>;
  deleteLocalGatewayRoute(
    args: DeleteLocalGatewayRouteCommandInput,
    cb: (err: any, data?: DeleteLocalGatewayRouteCommandOutput) => void
  ): void;
  deleteLocalGatewayRoute(
    args: DeleteLocalGatewayRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLocalGatewayRouteCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLocalGatewayRouteTableCommand}
   */
  deleteLocalGatewayRouteTable(
    args: DeleteLocalGatewayRouteTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLocalGatewayRouteTableCommandOutput>;
  deleteLocalGatewayRouteTable(
    args: DeleteLocalGatewayRouteTableCommandInput,
    cb: (err: any, data?: DeleteLocalGatewayRouteTableCommandOutput) => void
  ): void;
  deleteLocalGatewayRouteTable(
    args: DeleteLocalGatewayRouteTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLocalGatewayRouteTableCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand}
   */
  deleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation(
    args: DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput>;
  deleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation(
    args: DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput,
    cb: (err: any, data?: DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput) => void
  ): void;
  deleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation(
    args: DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLocalGatewayRouteTableVpcAssociationCommand}
   */
  deleteLocalGatewayRouteTableVpcAssociation(
    args: DeleteLocalGatewayRouteTableVpcAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLocalGatewayRouteTableVpcAssociationCommandOutput>;
  deleteLocalGatewayRouteTableVpcAssociation(
    args: DeleteLocalGatewayRouteTableVpcAssociationCommandInput,
    cb: (err: any, data?: DeleteLocalGatewayRouteTableVpcAssociationCommandOutput) => void
  ): void;
  deleteLocalGatewayRouteTableVpcAssociation(
    args: DeleteLocalGatewayRouteTableVpcAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLocalGatewayRouteTableVpcAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLocalGatewayVirtualInterfaceCommand}
   */
  deleteLocalGatewayVirtualInterface(
    args: DeleteLocalGatewayVirtualInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLocalGatewayVirtualInterfaceCommandOutput>;
  deleteLocalGatewayVirtualInterface(
    args: DeleteLocalGatewayVirtualInterfaceCommandInput,
    cb: (err: any, data?: DeleteLocalGatewayVirtualInterfaceCommandOutput) => void
  ): void;
  deleteLocalGatewayVirtualInterface(
    args: DeleteLocalGatewayVirtualInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLocalGatewayVirtualInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLocalGatewayVirtualInterfaceGroupCommand}
   */
  deleteLocalGatewayVirtualInterfaceGroup(
    args: DeleteLocalGatewayVirtualInterfaceGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLocalGatewayVirtualInterfaceGroupCommandOutput>;
  deleteLocalGatewayVirtualInterfaceGroup(
    args: DeleteLocalGatewayVirtualInterfaceGroupCommandInput,
    cb: (err: any, data?: DeleteLocalGatewayVirtualInterfaceGroupCommandOutput) => void
  ): void;
  deleteLocalGatewayVirtualInterfaceGroup(
    args: DeleteLocalGatewayVirtualInterfaceGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLocalGatewayVirtualInterfaceGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteManagedPrefixListCommand}
   */
  deleteManagedPrefixList(
    args: DeleteManagedPrefixListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteManagedPrefixListCommandOutput>;
  deleteManagedPrefixList(
    args: DeleteManagedPrefixListCommandInput,
    cb: (err: any, data?: DeleteManagedPrefixListCommandOutput) => void
  ): void;
  deleteManagedPrefixList(
    args: DeleteManagedPrefixListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteManagedPrefixListCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNatGatewayCommand}
   */
  deleteNatGateway(
    args: DeleteNatGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNatGatewayCommandOutput>;
  deleteNatGateway(
    args: DeleteNatGatewayCommandInput,
    cb: (err: any, data?: DeleteNatGatewayCommandOutput) => void
  ): void;
  deleteNatGateway(
    args: DeleteNatGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNatGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNetworkAclCommand}
   */
  deleteNetworkAcl(
    args: DeleteNetworkAclCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkAclCommandOutput>;
  deleteNetworkAcl(
    args: DeleteNetworkAclCommandInput,
    cb: (err: any, data?: DeleteNetworkAclCommandOutput) => void
  ): void;
  deleteNetworkAcl(
    args: DeleteNetworkAclCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkAclCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNetworkAclEntryCommand}
   */
  deleteNetworkAclEntry(
    args: DeleteNetworkAclEntryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkAclEntryCommandOutput>;
  deleteNetworkAclEntry(
    args: DeleteNetworkAclEntryCommandInput,
    cb: (err: any, data?: DeleteNetworkAclEntryCommandOutput) => void
  ): void;
  deleteNetworkAclEntry(
    args: DeleteNetworkAclEntryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkAclEntryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNetworkInsightsAccessScopeCommand}
   */
  deleteNetworkInsightsAccessScope(
    args: DeleteNetworkInsightsAccessScopeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkInsightsAccessScopeCommandOutput>;
  deleteNetworkInsightsAccessScope(
    args: DeleteNetworkInsightsAccessScopeCommandInput,
    cb: (err: any, data?: DeleteNetworkInsightsAccessScopeCommandOutput) => void
  ): void;
  deleteNetworkInsightsAccessScope(
    args: DeleteNetworkInsightsAccessScopeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkInsightsAccessScopeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNetworkInsightsAccessScopeAnalysisCommand}
   */
  deleteNetworkInsightsAccessScopeAnalysis(
    args: DeleteNetworkInsightsAccessScopeAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkInsightsAccessScopeAnalysisCommandOutput>;
  deleteNetworkInsightsAccessScopeAnalysis(
    args: DeleteNetworkInsightsAccessScopeAnalysisCommandInput,
    cb: (err: any, data?: DeleteNetworkInsightsAccessScopeAnalysisCommandOutput) => void
  ): void;
  deleteNetworkInsightsAccessScopeAnalysis(
    args: DeleteNetworkInsightsAccessScopeAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkInsightsAccessScopeAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNetworkInsightsAnalysisCommand}
   */
  deleteNetworkInsightsAnalysis(
    args: DeleteNetworkInsightsAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkInsightsAnalysisCommandOutput>;
  deleteNetworkInsightsAnalysis(
    args: DeleteNetworkInsightsAnalysisCommandInput,
    cb: (err: any, data?: DeleteNetworkInsightsAnalysisCommandOutput) => void
  ): void;
  deleteNetworkInsightsAnalysis(
    args: DeleteNetworkInsightsAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkInsightsAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNetworkInsightsPathCommand}
   */
  deleteNetworkInsightsPath(
    args: DeleteNetworkInsightsPathCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkInsightsPathCommandOutput>;
  deleteNetworkInsightsPath(
    args: DeleteNetworkInsightsPathCommandInput,
    cb: (err: any, data?: DeleteNetworkInsightsPathCommandOutput) => void
  ): void;
  deleteNetworkInsightsPath(
    args: DeleteNetworkInsightsPathCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkInsightsPathCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNetworkInterfaceCommand}
   */
  deleteNetworkInterface(
    args: DeleteNetworkInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkInterfaceCommandOutput>;
  deleteNetworkInterface(
    args: DeleteNetworkInterfaceCommandInput,
    cb: (err: any, data?: DeleteNetworkInterfaceCommandOutput) => void
  ): void;
  deleteNetworkInterface(
    args: DeleteNetworkInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNetworkInterfacePermissionCommand}
   */
  deleteNetworkInterfacePermission(
    args: DeleteNetworkInterfacePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkInterfacePermissionCommandOutput>;
  deleteNetworkInterfacePermission(
    args: DeleteNetworkInterfacePermissionCommandInput,
    cb: (err: any, data?: DeleteNetworkInterfacePermissionCommandOutput) => void
  ): void;
  deleteNetworkInterfacePermission(
    args: DeleteNetworkInterfacePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkInterfacePermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePlacementGroupCommand}
   */
  deletePlacementGroup(
    args: DeletePlacementGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePlacementGroupCommandOutput>;
  deletePlacementGroup(
    args: DeletePlacementGroupCommandInput,
    cb: (err: any, data?: DeletePlacementGroupCommandOutput) => void
  ): void;
  deletePlacementGroup(
    args: DeletePlacementGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePlacementGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePublicIpv4PoolCommand}
   */
  deletePublicIpv4Pool(
    args: DeletePublicIpv4PoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePublicIpv4PoolCommandOutput>;
  deletePublicIpv4Pool(
    args: DeletePublicIpv4PoolCommandInput,
    cb: (err: any, data?: DeletePublicIpv4PoolCommandOutput) => void
  ): void;
  deletePublicIpv4Pool(
    args: DeletePublicIpv4PoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePublicIpv4PoolCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQueuedReservedInstancesCommand}
   */
  deleteQueuedReservedInstances(
    args: DeleteQueuedReservedInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteQueuedReservedInstancesCommandOutput>;
  deleteQueuedReservedInstances(
    args: DeleteQueuedReservedInstancesCommandInput,
    cb: (err: any, data?: DeleteQueuedReservedInstancesCommandOutput) => void
  ): void;
  deleteQueuedReservedInstances(
    args: DeleteQueuedReservedInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQueuedReservedInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRouteCommand}
   */
  deleteRoute(args: DeleteRouteCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRouteCommandOutput>;
  deleteRoute(args: DeleteRouteCommandInput, cb: (err: any, data?: DeleteRouteCommandOutput) => void): void;
  deleteRoute(
    args: DeleteRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRouteCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRouteServerCommand}
   */
  deleteRouteServer(
    args: DeleteRouteServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRouteServerCommandOutput>;
  deleteRouteServer(
    args: DeleteRouteServerCommandInput,
    cb: (err: any, data?: DeleteRouteServerCommandOutput) => void
  ): void;
  deleteRouteServer(
    args: DeleteRouteServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRouteServerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRouteServerEndpointCommand}
   */
  deleteRouteServerEndpoint(
    args: DeleteRouteServerEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRouteServerEndpointCommandOutput>;
  deleteRouteServerEndpoint(
    args: DeleteRouteServerEndpointCommandInput,
    cb: (err: any, data?: DeleteRouteServerEndpointCommandOutput) => void
  ): void;
  deleteRouteServerEndpoint(
    args: DeleteRouteServerEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRouteServerEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRouteServerPeerCommand}
   */
  deleteRouteServerPeer(
    args: DeleteRouteServerPeerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRouteServerPeerCommandOutput>;
  deleteRouteServerPeer(
    args: DeleteRouteServerPeerCommandInput,
    cb: (err: any, data?: DeleteRouteServerPeerCommandOutput) => void
  ): void;
  deleteRouteServerPeer(
    args: DeleteRouteServerPeerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRouteServerPeerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRouteTableCommand}
   */
  deleteRouteTable(
    args: DeleteRouteTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRouteTableCommandOutput>;
  deleteRouteTable(
    args: DeleteRouteTableCommandInput,
    cb: (err: any, data?: DeleteRouteTableCommandOutput) => void
  ): void;
  deleteRouteTable(
    args: DeleteRouteTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRouteTableCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSecurityGroupCommand}
   */
  deleteSecurityGroup(): Promise<DeleteSecurityGroupCommandOutput>;
  deleteSecurityGroup(
    args: DeleteSecurityGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSecurityGroupCommandOutput>;
  deleteSecurityGroup(
    args: DeleteSecurityGroupCommandInput,
    cb: (err: any, data?: DeleteSecurityGroupCommandOutput) => void
  ): void;
  deleteSecurityGroup(
    args: DeleteSecurityGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSecurityGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSnapshotCommand}
   */
  deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSnapshotCommandOutput>;
  deleteSnapshot(args: DeleteSnapshotCommandInput, cb: (err: any, data?: DeleteSnapshotCommandOutput) => void): void;
  deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSpotDatafeedSubscriptionCommand}
   */
  deleteSpotDatafeedSubscription(): Promise<DeleteSpotDatafeedSubscriptionCommandOutput>;
  deleteSpotDatafeedSubscription(
    args: DeleteSpotDatafeedSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSpotDatafeedSubscriptionCommandOutput>;
  deleteSpotDatafeedSubscription(
    args: DeleteSpotDatafeedSubscriptionCommandInput,
    cb: (err: any, data?: DeleteSpotDatafeedSubscriptionCommandOutput) => void
  ): void;
  deleteSpotDatafeedSubscription(
    args: DeleteSpotDatafeedSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSpotDatafeedSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSubnetCommand}
   */
  deleteSubnet(args: DeleteSubnetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSubnetCommandOutput>;
  deleteSubnet(args: DeleteSubnetCommandInput, cb: (err: any, data?: DeleteSubnetCommandOutput) => void): void;
  deleteSubnet(
    args: DeleteSubnetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSubnetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSubnetCidrReservationCommand}
   */
  deleteSubnetCidrReservation(
    args: DeleteSubnetCidrReservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSubnetCidrReservationCommandOutput>;
  deleteSubnetCidrReservation(
    args: DeleteSubnetCidrReservationCommandInput,
    cb: (err: any, data?: DeleteSubnetCidrReservationCommandOutput) => void
  ): void;
  deleteSubnetCidrReservation(
    args: DeleteSubnetCidrReservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSubnetCidrReservationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTagsCommand}
   */
  deleteTags(args: DeleteTagsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTagsCommandOutput>;
  deleteTags(args: DeleteTagsCommandInput, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
  deleteTags(
    args: DeleteTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTrafficMirrorFilterCommand}
   */
  deleteTrafficMirrorFilter(
    args: DeleteTrafficMirrorFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrafficMirrorFilterCommandOutput>;
  deleteTrafficMirrorFilter(
    args: DeleteTrafficMirrorFilterCommandInput,
    cb: (err: any, data?: DeleteTrafficMirrorFilterCommandOutput) => void
  ): void;
  deleteTrafficMirrorFilter(
    args: DeleteTrafficMirrorFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrafficMirrorFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTrafficMirrorFilterRuleCommand}
   */
  deleteTrafficMirrorFilterRule(
    args: DeleteTrafficMirrorFilterRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrafficMirrorFilterRuleCommandOutput>;
  deleteTrafficMirrorFilterRule(
    args: DeleteTrafficMirrorFilterRuleCommandInput,
    cb: (err: any, data?: DeleteTrafficMirrorFilterRuleCommandOutput) => void
  ): void;
  deleteTrafficMirrorFilterRule(
    args: DeleteTrafficMirrorFilterRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrafficMirrorFilterRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTrafficMirrorSessionCommand}
   */
  deleteTrafficMirrorSession(
    args: DeleteTrafficMirrorSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrafficMirrorSessionCommandOutput>;
  deleteTrafficMirrorSession(
    args: DeleteTrafficMirrorSessionCommandInput,
    cb: (err: any, data?: DeleteTrafficMirrorSessionCommandOutput) => void
  ): void;
  deleteTrafficMirrorSession(
    args: DeleteTrafficMirrorSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrafficMirrorSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTrafficMirrorTargetCommand}
   */
  deleteTrafficMirrorTarget(
    args: DeleteTrafficMirrorTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrafficMirrorTargetCommandOutput>;
  deleteTrafficMirrorTarget(
    args: DeleteTrafficMirrorTargetCommandInput,
    cb: (err: any, data?: DeleteTrafficMirrorTargetCommandOutput) => void
  ): void;
  deleteTrafficMirrorTarget(
    args: DeleteTrafficMirrorTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrafficMirrorTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTransitGatewayCommand}
   */
  deleteTransitGateway(
    args: DeleteTransitGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTransitGatewayCommandOutput>;
  deleteTransitGateway(
    args: DeleteTransitGatewayCommandInput,
    cb: (err: any, data?: DeleteTransitGatewayCommandOutput) => void
  ): void;
  deleteTransitGateway(
    args: DeleteTransitGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTransitGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTransitGatewayConnectCommand}
   */
  deleteTransitGatewayConnect(
    args: DeleteTransitGatewayConnectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTransitGatewayConnectCommandOutput>;
  deleteTransitGatewayConnect(
    args: DeleteTransitGatewayConnectCommandInput,
    cb: (err: any, data?: DeleteTransitGatewayConnectCommandOutput) => void
  ): void;
  deleteTransitGatewayConnect(
    args: DeleteTransitGatewayConnectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTransitGatewayConnectCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTransitGatewayConnectPeerCommand}
   */
  deleteTransitGatewayConnectPeer(
    args: DeleteTransitGatewayConnectPeerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTransitGatewayConnectPeerCommandOutput>;
  deleteTransitGatewayConnectPeer(
    args: DeleteTransitGatewayConnectPeerCommandInput,
    cb: (err: any, data?: DeleteTransitGatewayConnectPeerCommandOutput) => void
  ): void;
  deleteTransitGatewayConnectPeer(
    args: DeleteTransitGatewayConnectPeerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTransitGatewayConnectPeerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTransitGatewayMulticastDomainCommand}
   */
  deleteTransitGatewayMulticastDomain(
    args: DeleteTransitGatewayMulticastDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTransitGatewayMulticastDomainCommandOutput>;
  deleteTransitGatewayMulticastDomain(
    args: DeleteTransitGatewayMulticastDomainCommandInput,
    cb: (err: any, data?: DeleteTransitGatewayMulticastDomainCommandOutput) => void
  ): void;
  deleteTransitGatewayMulticastDomain(
    args: DeleteTransitGatewayMulticastDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTransitGatewayMulticastDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTransitGatewayPeeringAttachmentCommand}
   */
  deleteTransitGatewayPeeringAttachment(
    args: DeleteTransitGatewayPeeringAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTransitGatewayPeeringAttachmentCommandOutput>;
  deleteTransitGatewayPeeringAttachment(
    args: DeleteTransitGatewayPeeringAttachmentCommandInput,
    cb: (err: any, data?: DeleteTransitGatewayPeeringAttachmentCommandOutput) => void
  ): void;
  deleteTransitGatewayPeeringAttachment(
    args: DeleteTransitGatewayPeeringAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTransitGatewayPeeringAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTransitGatewayPolicyTableCommand}
   */
  deleteTransitGatewayPolicyTable(
    args: DeleteTransitGatewayPolicyTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTransitGatewayPolicyTableCommandOutput>;
  deleteTransitGatewayPolicyTable(
    args: DeleteTransitGatewayPolicyTableCommandInput,
    cb: (err: any, data?: DeleteTransitGatewayPolicyTableCommandOutput) => void
  ): void;
  deleteTransitGatewayPolicyTable(
    args: DeleteTransitGatewayPolicyTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTransitGatewayPolicyTableCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTransitGatewayPrefixListReferenceCommand}
   */
  deleteTransitGatewayPrefixListReference(
    args: DeleteTransitGatewayPrefixListReferenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTransitGatewayPrefixListReferenceCommandOutput>;
  deleteTransitGatewayPrefixListReference(
    args: DeleteTransitGatewayPrefixListReferenceCommandInput,
    cb: (err: any, data?: DeleteTransitGatewayPrefixListReferenceCommandOutput) => void
  ): void;
  deleteTransitGatewayPrefixListReference(
    args: DeleteTransitGatewayPrefixListReferenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTransitGatewayPrefixListReferenceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTransitGatewayRouteCommand}
   */
  deleteTransitGatewayRoute(
    args: DeleteTransitGatewayRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTransitGatewayRouteCommandOutput>;
  deleteTransitGatewayRoute(
    args: DeleteTransitGatewayRouteCommandInput,
    cb: (err: any, data?: DeleteTransitGatewayRouteCommandOutput) => void
  ): void;
  deleteTransitGatewayRoute(
    args: DeleteTransitGatewayRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTransitGatewayRouteCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTransitGatewayRouteTableCommand}
   */
  deleteTransitGatewayRouteTable(
    args: DeleteTransitGatewayRouteTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTransitGatewayRouteTableCommandOutput>;
  deleteTransitGatewayRouteTable(
    args: DeleteTransitGatewayRouteTableCommandInput,
    cb: (err: any, data?: DeleteTransitGatewayRouteTableCommandOutput) => void
  ): void;
  deleteTransitGatewayRouteTable(
    args: DeleteTransitGatewayRouteTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTransitGatewayRouteTableCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTransitGatewayRouteTableAnnouncementCommand}
   */
  deleteTransitGatewayRouteTableAnnouncement(
    args: DeleteTransitGatewayRouteTableAnnouncementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTransitGatewayRouteTableAnnouncementCommandOutput>;
  deleteTransitGatewayRouteTableAnnouncement(
    args: DeleteTransitGatewayRouteTableAnnouncementCommandInput,
    cb: (err: any, data?: DeleteTransitGatewayRouteTableAnnouncementCommandOutput) => void
  ): void;
  deleteTransitGatewayRouteTableAnnouncement(
    args: DeleteTransitGatewayRouteTableAnnouncementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTransitGatewayRouteTableAnnouncementCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTransitGatewayVpcAttachmentCommand}
   */
  deleteTransitGatewayVpcAttachment(
    args: DeleteTransitGatewayVpcAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTransitGatewayVpcAttachmentCommandOutput>;
  deleteTransitGatewayVpcAttachment(
    args: DeleteTransitGatewayVpcAttachmentCommandInput,
    cb: (err: any, data?: DeleteTransitGatewayVpcAttachmentCommandOutput) => void
  ): void;
  deleteTransitGatewayVpcAttachment(
    args: DeleteTransitGatewayVpcAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTransitGatewayVpcAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVerifiedAccessEndpointCommand}
   */
  deleteVerifiedAccessEndpoint(
    args: DeleteVerifiedAccessEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVerifiedAccessEndpointCommandOutput>;
  deleteVerifiedAccessEndpoint(
    args: DeleteVerifiedAccessEndpointCommandInput,
    cb: (err: any, data?: DeleteVerifiedAccessEndpointCommandOutput) => void
  ): void;
  deleteVerifiedAccessEndpoint(
    args: DeleteVerifiedAccessEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVerifiedAccessEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVerifiedAccessGroupCommand}
   */
  deleteVerifiedAccessGroup(
    args: DeleteVerifiedAccessGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVerifiedAccessGroupCommandOutput>;
  deleteVerifiedAccessGroup(
    args: DeleteVerifiedAccessGroupCommandInput,
    cb: (err: any, data?: DeleteVerifiedAccessGroupCommandOutput) => void
  ): void;
  deleteVerifiedAccessGroup(
    args: DeleteVerifiedAccessGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVerifiedAccessGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVerifiedAccessInstanceCommand}
   */
  deleteVerifiedAccessInstance(
    args: DeleteVerifiedAccessInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVerifiedAccessInstanceCommandOutput>;
  deleteVerifiedAccessInstance(
    args: DeleteVerifiedAccessInstanceCommandInput,
    cb: (err: any, data?: DeleteVerifiedAccessInstanceCommandOutput) => void
  ): void;
  deleteVerifiedAccessInstance(
    args: DeleteVerifiedAccessInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVerifiedAccessInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVerifiedAccessTrustProviderCommand}
   */
  deleteVerifiedAccessTrustProvider(
    args: DeleteVerifiedAccessTrustProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVerifiedAccessTrustProviderCommandOutput>;
  deleteVerifiedAccessTrustProvider(
    args: DeleteVerifiedAccessTrustProviderCommandInput,
    cb: (err: any, data?: DeleteVerifiedAccessTrustProviderCommandOutput) => void
  ): void;
  deleteVerifiedAccessTrustProvider(
    args: DeleteVerifiedAccessTrustProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVerifiedAccessTrustProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVolumeCommand}
   */
  deleteVolume(args: DeleteVolumeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteVolumeCommandOutput>;
  deleteVolume(args: DeleteVolumeCommandInput, cb: (err: any, data?: DeleteVolumeCommandOutput) => void): void;
  deleteVolume(
    args: DeleteVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVpcCommand}
   */
  deleteVpc(args: DeleteVpcCommandInput, options?: __HttpHandlerOptions): Promise<DeleteVpcCommandOutput>;
  deleteVpc(args: DeleteVpcCommandInput, cb: (err: any, data?: DeleteVpcCommandOutput) => void): void;
  deleteVpc(
    args: DeleteVpcCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVpcBlockPublicAccessExclusionCommand}
   */
  deleteVpcBlockPublicAccessExclusion(
    args: DeleteVpcBlockPublicAccessExclusionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpcBlockPublicAccessExclusionCommandOutput>;
  deleteVpcBlockPublicAccessExclusion(
    args: DeleteVpcBlockPublicAccessExclusionCommandInput,
    cb: (err: any, data?: DeleteVpcBlockPublicAccessExclusionCommandOutput) => void
  ): void;
  deleteVpcBlockPublicAccessExclusion(
    args: DeleteVpcBlockPublicAccessExclusionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcBlockPublicAccessExclusionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVpcEndpointConnectionNotificationsCommand}
   */
  deleteVpcEndpointConnectionNotifications(
    args: DeleteVpcEndpointConnectionNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpcEndpointConnectionNotificationsCommandOutput>;
  deleteVpcEndpointConnectionNotifications(
    args: DeleteVpcEndpointConnectionNotificationsCommandInput,
    cb: (err: any, data?: DeleteVpcEndpointConnectionNotificationsCommandOutput) => void
  ): void;
  deleteVpcEndpointConnectionNotifications(
    args: DeleteVpcEndpointConnectionNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcEndpointConnectionNotificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVpcEndpointsCommand}
   */
  deleteVpcEndpoints(
    args: DeleteVpcEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpcEndpointsCommandOutput>;
  deleteVpcEndpoints(
    args: DeleteVpcEndpointsCommandInput,
    cb: (err: any, data?: DeleteVpcEndpointsCommandOutput) => void
  ): void;
  deleteVpcEndpoints(
    args: DeleteVpcEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVpcEndpointServiceConfigurationsCommand}
   */
  deleteVpcEndpointServiceConfigurations(
    args: DeleteVpcEndpointServiceConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpcEndpointServiceConfigurationsCommandOutput>;
  deleteVpcEndpointServiceConfigurations(
    args: DeleteVpcEndpointServiceConfigurationsCommandInput,
    cb: (err: any, data?: DeleteVpcEndpointServiceConfigurationsCommandOutput) => void
  ): void;
  deleteVpcEndpointServiceConfigurations(
    args: DeleteVpcEndpointServiceConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcEndpointServiceConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVpcPeeringConnectionCommand}
   */
  deleteVpcPeeringConnection(
    args: DeleteVpcPeeringConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpcPeeringConnectionCommandOutput>;
  deleteVpcPeeringConnection(
    args: DeleteVpcPeeringConnectionCommandInput,
    cb: (err: any, data?: DeleteVpcPeeringConnectionCommandOutput) => void
  ): void;
  deleteVpcPeeringConnection(
    args: DeleteVpcPeeringConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcPeeringConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVpnConnectionCommand}
   */
  deleteVpnConnection(
    args: DeleteVpnConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpnConnectionCommandOutput>;
  deleteVpnConnection(
    args: DeleteVpnConnectionCommandInput,
    cb: (err: any, data?: DeleteVpnConnectionCommandOutput) => void
  ): void;
  deleteVpnConnection(
    args: DeleteVpnConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpnConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVpnConnectionRouteCommand}
   */
  deleteVpnConnectionRoute(
    args: DeleteVpnConnectionRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpnConnectionRouteCommandOutput>;
  deleteVpnConnectionRoute(
    args: DeleteVpnConnectionRouteCommandInput,
    cb: (err: any, data?: DeleteVpnConnectionRouteCommandOutput) => void
  ): void;
  deleteVpnConnectionRoute(
    args: DeleteVpnConnectionRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpnConnectionRouteCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVpnGatewayCommand}
   */
  deleteVpnGateway(
    args: DeleteVpnGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpnGatewayCommandOutput>;
  deleteVpnGateway(
    args: DeleteVpnGatewayCommandInput,
    cb: (err: any, data?: DeleteVpnGatewayCommandOutput) => void
  ): void;
  deleteVpnGateway(
    args: DeleteVpnGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpnGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DeprovisionByoipCidrCommand}
   */
  deprovisionByoipCidr(
    args: DeprovisionByoipCidrCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeprovisionByoipCidrCommandOutput>;
  deprovisionByoipCidr(
    args: DeprovisionByoipCidrCommandInput,
    cb: (err: any, data?: DeprovisionByoipCidrCommandOutput) => void
  ): void;
  deprovisionByoipCidr(
    args: DeprovisionByoipCidrCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeprovisionByoipCidrCommandOutput) => void
  ): void;

  /**
   * @see {@link DeprovisionIpamByoasnCommand}
   */
  deprovisionIpamByoasn(
    args: DeprovisionIpamByoasnCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeprovisionIpamByoasnCommandOutput>;
  deprovisionIpamByoasn(
    args: DeprovisionIpamByoasnCommandInput,
    cb: (err: any, data?: DeprovisionIpamByoasnCommandOutput) => void
  ): void;
  deprovisionIpamByoasn(
    args: DeprovisionIpamByoasnCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeprovisionIpamByoasnCommandOutput) => void
  ): void;

  /**
   * @see {@link DeprovisionIpamPoolCidrCommand}
   */
  deprovisionIpamPoolCidr(
    args: DeprovisionIpamPoolCidrCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeprovisionIpamPoolCidrCommandOutput>;
  deprovisionIpamPoolCidr(
    args: DeprovisionIpamPoolCidrCommandInput,
    cb: (err: any, data?: DeprovisionIpamPoolCidrCommandOutput) => void
  ): void;
  deprovisionIpamPoolCidr(
    args: DeprovisionIpamPoolCidrCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeprovisionIpamPoolCidrCommandOutput) => void
  ): void;

  /**
   * @see {@link DeprovisionPublicIpv4PoolCidrCommand}
   */
  deprovisionPublicIpv4PoolCidr(
    args: DeprovisionPublicIpv4PoolCidrCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeprovisionPublicIpv4PoolCidrCommandOutput>;
  deprovisionPublicIpv4PoolCidr(
    args: DeprovisionPublicIpv4PoolCidrCommandInput,
    cb: (err: any, data?: DeprovisionPublicIpv4PoolCidrCommandOutput) => void
  ): void;
  deprovisionPublicIpv4PoolCidr(
    args: DeprovisionPublicIpv4PoolCidrCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeprovisionPublicIpv4PoolCidrCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterImageCommand}
   */
  deregisterImage(
    args: DeregisterImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterImageCommandOutput>;
  deregisterImage(args: DeregisterImageCommandInput, cb: (err: any, data?: DeregisterImageCommandOutput) => void): void;
  deregisterImage(
    args: DeregisterImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterImageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterInstanceEventNotificationAttributesCommand}
   */
  deregisterInstanceEventNotificationAttributes(
    args: DeregisterInstanceEventNotificationAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterInstanceEventNotificationAttributesCommandOutput>;
  deregisterInstanceEventNotificationAttributes(
    args: DeregisterInstanceEventNotificationAttributesCommandInput,
    cb: (err: any, data?: DeregisterInstanceEventNotificationAttributesCommandOutput) => void
  ): void;
  deregisterInstanceEventNotificationAttributes(
    args: DeregisterInstanceEventNotificationAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterInstanceEventNotificationAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterTransitGatewayMulticastGroupMembersCommand}
   */
  deregisterTransitGatewayMulticastGroupMembers(): Promise<DeregisterTransitGatewayMulticastGroupMembersCommandOutput>;
  deregisterTransitGatewayMulticastGroupMembers(
    args: DeregisterTransitGatewayMulticastGroupMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterTransitGatewayMulticastGroupMembersCommandOutput>;
  deregisterTransitGatewayMulticastGroupMembers(
    args: DeregisterTransitGatewayMulticastGroupMembersCommandInput,
    cb: (err: any, data?: DeregisterTransitGatewayMulticastGroupMembersCommandOutput) => void
  ): void;
  deregisterTransitGatewayMulticastGroupMembers(
    args: DeregisterTransitGatewayMulticastGroupMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterTransitGatewayMulticastGroupMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterTransitGatewayMulticastGroupSourcesCommand}
   */
  deregisterTransitGatewayMulticastGroupSources(): Promise<DeregisterTransitGatewayMulticastGroupSourcesCommandOutput>;
  deregisterTransitGatewayMulticastGroupSources(
    args: DeregisterTransitGatewayMulticastGroupSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterTransitGatewayMulticastGroupSourcesCommandOutput>;
  deregisterTransitGatewayMulticastGroupSources(
    args: DeregisterTransitGatewayMulticastGroupSourcesCommandInput,
    cb: (err: any, data?: DeregisterTransitGatewayMulticastGroupSourcesCommandOutput) => void
  ): void;
  deregisterTransitGatewayMulticastGroupSources(
    args: DeregisterTransitGatewayMulticastGroupSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterTransitGatewayMulticastGroupSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountAttributesCommand}
   */
  describeAccountAttributes(): Promise<DescribeAccountAttributesCommandOutput>;
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountAttributesCommandOutput>;
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAddressesCommand}
   */
  describeAddresses(): Promise<DescribeAddressesCommandOutput>;
  describeAddresses(
    args: DescribeAddressesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAddressesCommandOutput>;
  describeAddresses(
    args: DescribeAddressesCommandInput,
    cb: (err: any, data?: DescribeAddressesCommandOutput) => void
  ): void;
  describeAddresses(
    args: DescribeAddressesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAddressesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAddressesAttributeCommand}
   */
  describeAddressesAttribute(): Promise<DescribeAddressesAttributeCommandOutput>;
  describeAddressesAttribute(
    args: DescribeAddressesAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAddressesAttributeCommandOutput>;
  describeAddressesAttribute(
    args: DescribeAddressesAttributeCommandInput,
    cb: (err: any, data?: DescribeAddressesAttributeCommandOutput) => void
  ): void;
  describeAddressesAttribute(
    args: DescribeAddressesAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAddressesAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAddressTransfersCommand}
   */
  describeAddressTransfers(): Promise<DescribeAddressTransfersCommandOutput>;
  describeAddressTransfers(
    args: DescribeAddressTransfersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAddressTransfersCommandOutput>;
  describeAddressTransfers(
    args: DescribeAddressTransfersCommandInput,
    cb: (err: any, data?: DescribeAddressTransfersCommandOutput) => void
  ): void;
  describeAddressTransfers(
    args: DescribeAddressTransfersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAddressTransfersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAggregateIdFormatCommand}
   */
  describeAggregateIdFormat(): Promise<DescribeAggregateIdFormatCommandOutput>;
  describeAggregateIdFormat(
    args: DescribeAggregateIdFormatCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAggregateIdFormatCommandOutput>;
  describeAggregateIdFormat(
    args: DescribeAggregateIdFormatCommandInput,
    cb: (err: any, data?: DescribeAggregateIdFormatCommandOutput) => void
  ): void;
  describeAggregateIdFormat(
    args: DescribeAggregateIdFormatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAggregateIdFormatCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAvailabilityZonesCommand}
   */
  describeAvailabilityZones(): Promise<DescribeAvailabilityZonesCommandOutput>;
  describeAvailabilityZones(
    args: DescribeAvailabilityZonesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAvailabilityZonesCommandOutput>;
  describeAvailabilityZones(
    args: DescribeAvailabilityZonesCommandInput,
    cb: (err: any, data?: DescribeAvailabilityZonesCommandOutput) => void
  ): void;
  describeAvailabilityZones(
    args: DescribeAvailabilityZonesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAvailabilityZonesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAwsNetworkPerformanceMetricSubscriptionsCommand}
   */
  describeAwsNetworkPerformanceMetricSubscriptions(): Promise<DescribeAwsNetworkPerformanceMetricSubscriptionsCommandOutput>;
  describeAwsNetworkPerformanceMetricSubscriptions(
    args: DescribeAwsNetworkPerformanceMetricSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAwsNetworkPerformanceMetricSubscriptionsCommandOutput>;
  describeAwsNetworkPerformanceMetricSubscriptions(
    args: DescribeAwsNetworkPerformanceMetricSubscriptionsCommandInput,
    cb: (err: any, data?: DescribeAwsNetworkPerformanceMetricSubscriptionsCommandOutput) => void
  ): void;
  describeAwsNetworkPerformanceMetricSubscriptions(
    args: DescribeAwsNetworkPerformanceMetricSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAwsNetworkPerformanceMetricSubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBundleTasksCommand}
   */
  describeBundleTasks(): Promise<DescribeBundleTasksCommandOutput>;
  describeBundleTasks(
    args: DescribeBundleTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBundleTasksCommandOutput>;
  describeBundleTasks(
    args: DescribeBundleTasksCommandInput,
    cb: (err: any, data?: DescribeBundleTasksCommandOutput) => void
  ): void;
  describeBundleTasks(
    args: DescribeBundleTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBundleTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeByoipCidrsCommand}
   */
  describeByoipCidrs(
    args: DescribeByoipCidrsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeByoipCidrsCommandOutput>;
  describeByoipCidrs(
    args: DescribeByoipCidrsCommandInput,
    cb: (err: any, data?: DescribeByoipCidrsCommandOutput) => void
  ): void;
  describeByoipCidrs(
    args: DescribeByoipCidrsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeByoipCidrsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCapacityBlockExtensionHistoryCommand}
   */
  describeCapacityBlockExtensionHistory(): Promise<DescribeCapacityBlockExtensionHistoryCommandOutput>;
  describeCapacityBlockExtensionHistory(
    args: DescribeCapacityBlockExtensionHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCapacityBlockExtensionHistoryCommandOutput>;
  describeCapacityBlockExtensionHistory(
    args: DescribeCapacityBlockExtensionHistoryCommandInput,
    cb: (err: any, data?: DescribeCapacityBlockExtensionHistoryCommandOutput) => void
  ): void;
  describeCapacityBlockExtensionHistory(
    args: DescribeCapacityBlockExtensionHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCapacityBlockExtensionHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCapacityBlockExtensionOfferingsCommand}
   */
  describeCapacityBlockExtensionOfferings(
    args: DescribeCapacityBlockExtensionOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCapacityBlockExtensionOfferingsCommandOutput>;
  describeCapacityBlockExtensionOfferings(
    args: DescribeCapacityBlockExtensionOfferingsCommandInput,
    cb: (err: any, data?: DescribeCapacityBlockExtensionOfferingsCommandOutput) => void
  ): void;
  describeCapacityBlockExtensionOfferings(
    args: DescribeCapacityBlockExtensionOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCapacityBlockExtensionOfferingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCapacityBlockOfferingsCommand}
   */
  describeCapacityBlockOfferings(
    args: DescribeCapacityBlockOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCapacityBlockOfferingsCommandOutput>;
  describeCapacityBlockOfferings(
    args: DescribeCapacityBlockOfferingsCommandInput,
    cb: (err: any, data?: DescribeCapacityBlockOfferingsCommandOutput) => void
  ): void;
  describeCapacityBlockOfferings(
    args: DescribeCapacityBlockOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCapacityBlockOfferingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCapacityBlocksCommand}
   */
  describeCapacityBlocks(): Promise<DescribeCapacityBlocksCommandOutput>;
  describeCapacityBlocks(
    args: DescribeCapacityBlocksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCapacityBlocksCommandOutput>;
  describeCapacityBlocks(
    args: DescribeCapacityBlocksCommandInput,
    cb: (err: any, data?: DescribeCapacityBlocksCommandOutput) => void
  ): void;
  describeCapacityBlocks(
    args: DescribeCapacityBlocksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCapacityBlocksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCapacityBlockStatusCommand}
   */
  describeCapacityBlockStatus(): Promise<DescribeCapacityBlockStatusCommandOutput>;
  describeCapacityBlockStatus(
    args: DescribeCapacityBlockStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCapacityBlockStatusCommandOutput>;
  describeCapacityBlockStatus(
    args: DescribeCapacityBlockStatusCommandInput,
    cb: (err: any, data?: DescribeCapacityBlockStatusCommandOutput) => void
  ): void;
  describeCapacityBlockStatus(
    args: DescribeCapacityBlockStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCapacityBlockStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCapacityReservationBillingRequestsCommand}
   */
  describeCapacityReservationBillingRequests(
    args: DescribeCapacityReservationBillingRequestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCapacityReservationBillingRequestsCommandOutput>;
  describeCapacityReservationBillingRequests(
    args: DescribeCapacityReservationBillingRequestsCommandInput,
    cb: (err: any, data?: DescribeCapacityReservationBillingRequestsCommandOutput) => void
  ): void;
  describeCapacityReservationBillingRequests(
    args: DescribeCapacityReservationBillingRequestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCapacityReservationBillingRequestsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCapacityReservationFleetsCommand}
   */
  describeCapacityReservationFleets(): Promise<DescribeCapacityReservationFleetsCommandOutput>;
  describeCapacityReservationFleets(
    args: DescribeCapacityReservationFleetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCapacityReservationFleetsCommandOutput>;
  describeCapacityReservationFleets(
    args: DescribeCapacityReservationFleetsCommandInput,
    cb: (err: any, data?: DescribeCapacityReservationFleetsCommandOutput) => void
  ): void;
  describeCapacityReservationFleets(
    args: DescribeCapacityReservationFleetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCapacityReservationFleetsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCapacityReservationsCommand}
   */
  describeCapacityReservations(): Promise<DescribeCapacityReservationsCommandOutput>;
  describeCapacityReservations(
    args: DescribeCapacityReservationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCapacityReservationsCommandOutput>;
  describeCapacityReservations(
    args: DescribeCapacityReservationsCommandInput,
    cb: (err: any, data?: DescribeCapacityReservationsCommandOutput) => void
  ): void;
  describeCapacityReservations(
    args: DescribeCapacityReservationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCapacityReservationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCarrierGatewaysCommand}
   */
  describeCarrierGateways(): Promise<DescribeCarrierGatewaysCommandOutput>;
  describeCarrierGateways(
    args: DescribeCarrierGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCarrierGatewaysCommandOutput>;
  describeCarrierGateways(
    args: DescribeCarrierGatewaysCommandInput,
    cb: (err: any, data?: DescribeCarrierGatewaysCommandOutput) => void
  ): void;
  describeCarrierGateways(
    args: DescribeCarrierGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCarrierGatewaysCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClassicLinkInstancesCommand}
   */
  describeClassicLinkInstances(): Promise<DescribeClassicLinkInstancesCommandOutput>;
  describeClassicLinkInstances(
    args: DescribeClassicLinkInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClassicLinkInstancesCommandOutput>;
  describeClassicLinkInstances(
    args: DescribeClassicLinkInstancesCommandInput,
    cb: (err: any, data?: DescribeClassicLinkInstancesCommandOutput) => void
  ): void;
  describeClassicLinkInstances(
    args: DescribeClassicLinkInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClassicLinkInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClientVpnAuthorizationRulesCommand}
   */
  describeClientVpnAuthorizationRules(
    args: DescribeClientVpnAuthorizationRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClientVpnAuthorizationRulesCommandOutput>;
  describeClientVpnAuthorizationRules(
    args: DescribeClientVpnAuthorizationRulesCommandInput,
    cb: (err: any, data?: DescribeClientVpnAuthorizationRulesCommandOutput) => void
  ): void;
  describeClientVpnAuthorizationRules(
    args: DescribeClientVpnAuthorizationRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClientVpnAuthorizationRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClientVpnConnectionsCommand}
   */
  describeClientVpnConnections(
    args: DescribeClientVpnConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClientVpnConnectionsCommandOutput>;
  describeClientVpnConnections(
    args: DescribeClientVpnConnectionsCommandInput,
    cb: (err: any, data?: DescribeClientVpnConnectionsCommandOutput) => void
  ): void;
  describeClientVpnConnections(
    args: DescribeClientVpnConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClientVpnConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClientVpnEndpointsCommand}
   */
  describeClientVpnEndpoints(): Promise<DescribeClientVpnEndpointsCommandOutput>;
  describeClientVpnEndpoints(
    args: DescribeClientVpnEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClientVpnEndpointsCommandOutput>;
  describeClientVpnEndpoints(
    args: DescribeClientVpnEndpointsCommandInput,
    cb: (err: any, data?: DescribeClientVpnEndpointsCommandOutput) => void
  ): void;
  describeClientVpnEndpoints(
    args: DescribeClientVpnEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClientVpnEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClientVpnRoutesCommand}
   */
  describeClientVpnRoutes(
    args: DescribeClientVpnRoutesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClientVpnRoutesCommandOutput>;
  describeClientVpnRoutes(
    args: DescribeClientVpnRoutesCommandInput,
    cb: (err: any, data?: DescribeClientVpnRoutesCommandOutput) => void
  ): void;
  describeClientVpnRoutes(
    args: DescribeClientVpnRoutesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClientVpnRoutesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClientVpnTargetNetworksCommand}
   */
  describeClientVpnTargetNetworks(
    args: DescribeClientVpnTargetNetworksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClientVpnTargetNetworksCommandOutput>;
  describeClientVpnTargetNetworks(
    args: DescribeClientVpnTargetNetworksCommandInput,
    cb: (err: any, data?: DescribeClientVpnTargetNetworksCommandOutput) => void
  ): void;
  describeClientVpnTargetNetworks(
    args: DescribeClientVpnTargetNetworksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClientVpnTargetNetworksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCoipPoolsCommand}
   */
  describeCoipPools(): Promise<DescribeCoipPoolsCommandOutput>;
  describeCoipPools(
    args: DescribeCoipPoolsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCoipPoolsCommandOutput>;
  describeCoipPools(
    args: DescribeCoipPoolsCommandInput,
    cb: (err: any, data?: DescribeCoipPoolsCommandOutput) => void
  ): void;
  describeCoipPools(
    args: DescribeCoipPoolsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCoipPoolsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConversionTasksCommand}
   */
  describeConversionTasks(): Promise<DescribeConversionTasksCommandOutput>;
  describeConversionTasks(
    args: DescribeConversionTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConversionTasksCommandOutput>;
  describeConversionTasks(
    args: DescribeConversionTasksCommandInput,
    cb: (err: any, data?: DescribeConversionTasksCommandOutput) => void
  ): void;
  describeConversionTasks(
    args: DescribeConversionTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConversionTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCustomerGatewaysCommand}
   */
  describeCustomerGateways(): Promise<DescribeCustomerGatewaysCommandOutput>;
  describeCustomerGateways(
    args: DescribeCustomerGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCustomerGatewaysCommandOutput>;
  describeCustomerGateways(
    args: DescribeCustomerGatewaysCommandInput,
    cb: (err: any, data?: DescribeCustomerGatewaysCommandOutput) => void
  ): void;
  describeCustomerGateways(
    args: DescribeCustomerGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCustomerGatewaysCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDeclarativePoliciesReportsCommand}
   */
  describeDeclarativePoliciesReports(): Promise<DescribeDeclarativePoliciesReportsCommandOutput>;
  describeDeclarativePoliciesReports(
    args: DescribeDeclarativePoliciesReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeclarativePoliciesReportsCommandOutput>;
  describeDeclarativePoliciesReports(
    args: DescribeDeclarativePoliciesReportsCommandInput,
    cb: (err: any, data?: DescribeDeclarativePoliciesReportsCommandOutput) => void
  ): void;
  describeDeclarativePoliciesReports(
    args: DescribeDeclarativePoliciesReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeclarativePoliciesReportsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDhcpOptionsCommand}
   */
  describeDhcpOptions(): Promise<DescribeDhcpOptionsCommandOutput>;
  describeDhcpOptions(
    args: DescribeDhcpOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDhcpOptionsCommandOutput>;
  describeDhcpOptions(
    args: DescribeDhcpOptionsCommandInput,
    cb: (err: any, data?: DescribeDhcpOptionsCommandOutput) => void
  ): void;
  describeDhcpOptions(
    args: DescribeDhcpOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDhcpOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEgressOnlyInternetGatewaysCommand}
   */
  describeEgressOnlyInternetGateways(): Promise<DescribeEgressOnlyInternetGatewaysCommandOutput>;
  describeEgressOnlyInternetGateways(
    args: DescribeEgressOnlyInternetGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEgressOnlyInternetGatewaysCommandOutput>;
  describeEgressOnlyInternetGateways(
    args: DescribeEgressOnlyInternetGatewaysCommandInput,
    cb: (err: any, data?: DescribeEgressOnlyInternetGatewaysCommandOutput) => void
  ): void;
  describeEgressOnlyInternetGateways(
    args: DescribeEgressOnlyInternetGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEgressOnlyInternetGatewaysCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeElasticGpusCommand}
   */
  describeElasticGpus(): Promise<DescribeElasticGpusCommandOutput>;
  describeElasticGpus(
    args: DescribeElasticGpusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeElasticGpusCommandOutput>;
  describeElasticGpus(
    args: DescribeElasticGpusCommandInput,
    cb: (err: any, data?: DescribeElasticGpusCommandOutput) => void
  ): void;
  describeElasticGpus(
    args: DescribeElasticGpusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeElasticGpusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeExportImageTasksCommand}
   */
  describeExportImageTasks(): Promise<DescribeExportImageTasksCommandOutput>;
  describeExportImageTasks(
    args: DescribeExportImageTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExportImageTasksCommandOutput>;
  describeExportImageTasks(
    args: DescribeExportImageTasksCommandInput,
    cb: (err: any, data?: DescribeExportImageTasksCommandOutput) => void
  ): void;
  describeExportImageTasks(
    args: DescribeExportImageTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExportImageTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeExportTasksCommand}
   */
  describeExportTasks(): Promise<DescribeExportTasksCommandOutput>;
  describeExportTasks(
    args: DescribeExportTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExportTasksCommandOutput>;
  describeExportTasks(
    args: DescribeExportTasksCommandInput,
    cb: (err: any, data?: DescribeExportTasksCommandOutput) => void
  ): void;
  describeExportTasks(
    args: DescribeExportTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExportTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFastLaunchImagesCommand}
   */
  describeFastLaunchImages(): Promise<DescribeFastLaunchImagesCommandOutput>;
  describeFastLaunchImages(
    args: DescribeFastLaunchImagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFastLaunchImagesCommandOutput>;
  describeFastLaunchImages(
    args: DescribeFastLaunchImagesCommandInput,
    cb: (err: any, data?: DescribeFastLaunchImagesCommandOutput) => void
  ): void;
  describeFastLaunchImages(
    args: DescribeFastLaunchImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFastLaunchImagesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFastSnapshotRestoresCommand}
   */
  describeFastSnapshotRestores(): Promise<DescribeFastSnapshotRestoresCommandOutput>;
  describeFastSnapshotRestores(
    args: DescribeFastSnapshotRestoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFastSnapshotRestoresCommandOutput>;
  describeFastSnapshotRestores(
    args: DescribeFastSnapshotRestoresCommandInput,
    cb: (err: any, data?: DescribeFastSnapshotRestoresCommandOutput) => void
  ): void;
  describeFastSnapshotRestores(
    args: DescribeFastSnapshotRestoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFastSnapshotRestoresCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFleetHistoryCommand}
   */
  describeFleetHistory(
    args: DescribeFleetHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetHistoryCommandOutput>;
  describeFleetHistory(
    args: DescribeFleetHistoryCommandInput,
    cb: (err: any, data?: DescribeFleetHistoryCommandOutput) => void
  ): void;
  describeFleetHistory(
    args: DescribeFleetHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFleetInstancesCommand}
   */
  describeFleetInstances(
    args: DescribeFleetInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetInstancesCommandOutput>;
  describeFleetInstances(
    args: DescribeFleetInstancesCommandInput,
    cb: (err: any, data?: DescribeFleetInstancesCommandOutput) => void
  ): void;
  describeFleetInstances(
    args: DescribeFleetInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFleetsCommand}
   */
  describeFleets(): Promise<DescribeFleetsCommandOutput>;
  describeFleets(
    args: DescribeFleetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetsCommandOutput>;
  describeFleets(args: DescribeFleetsCommandInput, cb: (err: any, data?: DescribeFleetsCommandOutput) => void): void;
  describeFleets(
    args: DescribeFleetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFlowLogsCommand}
   */
  describeFlowLogs(): Promise<DescribeFlowLogsCommandOutput>;
  describeFlowLogs(
    args: DescribeFlowLogsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFlowLogsCommandOutput>;
  describeFlowLogs(
    args: DescribeFlowLogsCommandInput,
    cb: (err: any, data?: DescribeFlowLogsCommandOutput) => void
  ): void;
  describeFlowLogs(
    args: DescribeFlowLogsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFlowLogsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFpgaImageAttributeCommand}
   */
  describeFpgaImageAttribute(
    args: DescribeFpgaImageAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFpgaImageAttributeCommandOutput>;
  describeFpgaImageAttribute(
    args: DescribeFpgaImageAttributeCommandInput,
    cb: (err: any, data?: DescribeFpgaImageAttributeCommandOutput) => void
  ): void;
  describeFpgaImageAttribute(
    args: DescribeFpgaImageAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFpgaImageAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFpgaImagesCommand}
   */
  describeFpgaImages(): Promise<DescribeFpgaImagesCommandOutput>;
  describeFpgaImages(
    args: DescribeFpgaImagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFpgaImagesCommandOutput>;
  describeFpgaImages(
    args: DescribeFpgaImagesCommandInput,
    cb: (err: any, data?: DescribeFpgaImagesCommandOutput) => void
  ): void;
  describeFpgaImages(
    args: DescribeFpgaImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFpgaImagesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeHostReservationOfferingsCommand}
   */
  describeHostReservationOfferings(): Promise<DescribeHostReservationOfferingsCommandOutput>;
  describeHostReservationOfferings(
    args: DescribeHostReservationOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHostReservationOfferingsCommandOutput>;
  describeHostReservationOfferings(
    args: DescribeHostReservationOfferingsCommandInput,
    cb: (err: any, data?: DescribeHostReservationOfferingsCommandOutput) => void
  ): void;
  describeHostReservationOfferings(
    args: DescribeHostReservationOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHostReservationOfferingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeHostReservationsCommand}
   */
  describeHostReservations(): Promise<DescribeHostReservationsCommandOutput>;
  describeHostReservations(
    args: DescribeHostReservationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHostReservationsCommandOutput>;
  describeHostReservations(
    args: DescribeHostReservationsCommandInput,
    cb: (err: any, data?: DescribeHostReservationsCommandOutput) => void
  ): void;
  describeHostReservations(
    args: DescribeHostReservationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHostReservationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeHostsCommand}
   */
  describeHosts(): Promise<DescribeHostsCommandOutput>;
  describeHosts(args: DescribeHostsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeHostsCommandOutput>;
  describeHosts(args: DescribeHostsCommandInput, cb: (err: any, data?: DescribeHostsCommandOutput) => void): void;
  describeHosts(
    args: DescribeHostsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHostsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIamInstanceProfileAssociationsCommand}
   */
  describeIamInstanceProfileAssociations(): Promise<DescribeIamInstanceProfileAssociationsCommandOutput>;
  describeIamInstanceProfileAssociations(
    args: DescribeIamInstanceProfileAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIamInstanceProfileAssociationsCommandOutput>;
  describeIamInstanceProfileAssociations(
    args: DescribeIamInstanceProfileAssociationsCommandInput,
    cb: (err: any, data?: DescribeIamInstanceProfileAssociationsCommandOutput) => void
  ): void;
  describeIamInstanceProfileAssociations(
    args: DescribeIamInstanceProfileAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIamInstanceProfileAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIdentityIdFormatCommand}
   */
  describeIdentityIdFormat(
    args: DescribeIdentityIdFormatCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIdentityIdFormatCommandOutput>;
  describeIdentityIdFormat(
    args: DescribeIdentityIdFormatCommandInput,
    cb: (err: any, data?: DescribeIdentityIdFormatCommandOutput) => void
  ): void;
  describeIdentityIdFormat(
    args: DescribeIdentityIdFormatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIdentityIdFormatCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIdFormatCommand}
   */
  describeIdFormat(): Promise<DescribeIdFormatCommandOutput>;
  describeIdFormat(
    args: DescribeIdFormatCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIdFormatCommandOutput>;
  describeIdFormat(
    args: DescribeIdFormatCommandInput,
    cb: (err: any, data?: DescribeIdFormatCommandOutput) => void
  ): void;
  describeIdFormat(
    args: DescribeIdFormatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIdFormatCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeImageAttributeCommand}
   */
  describeImageAttribute(
    args: DescribeImageAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImageAttributeCommandOutput>;
  describeImageAttribute(
    args: DescribeImageAttributeCommandInput,
    cb: (err: any, data?: DescribeImageAttributeCommandOutput) => void
  ): void;
  describeImageAttribute(
    args: DescribeImageAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImageAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeImagesCommand}
   */
  describeImages(): Promise<DescribeImagesCommandOutput>;
  describeImages(
    args: DescribeImagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImagesCommandOutput>;
  describeImages(args: DescribeImagesCommandInput, cb: (err: any, data?: DescribeImagesCommandOutput) => void): void;
  describeImages(
    args: DescribeImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImagesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeImportImageTasksCommand}
   */
  describeImportImageTasks(): Promise<DescribeImportImageTasksCommandOutput>;
  describeImportImageTasks(
    args: DescribeImportImageTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImportImageTasksCommandOutput>;
  describeImportImageTasks(
    args: DescribeImportImageTasksCommandInput,
    cb: (err: any, data?: DescribeImportImageTasksCommandOutput) => void
  ): void;
  describeImportImageTasks(
    args: DescribeImportImageTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImportImageTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeImportSnapshotTasksCommand}
   */
  describeImportSnapshotTasks(): Promise<DescribeImportSnapshotTasksCommandOutput>;
  describeImportSnapshotTasks(
    args: DescribeImportSnapshotTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImportSnapshotTasksCommandOutput>;
  describeImportSnapshotTasks(
    args: DescribeImportSnapshotTasksCommandInput,
    cb: (err: any, data?: DescribeImportSnapshotTasksCommandOutput) => void
  ): void;
  describeImportSnapshotTasks(
    args: DescribeImportSnapshotTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImportSnapshotTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInstanceAttributeCommand}
   */
  describeInstanceAttribute(
    args: DescribeInstanceAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceAttributeCommandOutput>;
  describeInstanceAttribute(
    args: DescribeInstanceAttributeCommandInput,
    cb: (err: any, data?: DescribeInstanceAttributeCommandOutput) => void
  ): void;
  describeInstanceAttribute(
    args: DescribeInstanceAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInstanceConnectEndpointsCommand}
   */
  describeInstanceConnectEndpoints(): Promise<DescribeInstanceConnectEndpointsCommandOutput>;
  describeInstanceConnectEndpoints(
    args: DescribeInstanceConnectEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceConnectEndpointsCommandOutput>;
  describeInstanceConnectEndpoints(
    args: DescribeInstanceConnectEndpointsCommandInput,
    cb: (err: any, data?: DescribeInstanceConnectEndpointsCommandOutput) => void
  ): void;
  describeInstanceConnectEndpoints(
    args: DescribeInstanceConnectEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceConnectEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInstanceCreditSpecificationsCommand}
   */
  describeInstanceCreditSpecifications(): Promise<DescribeInstanceCreditSpecificationsCommandOutput>;
  describeInstanceCreditSpecifications(
    args: DescribeInstanceCreditSpecificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceCreditSpecificationsCommandOutput>;
  describeInstanceCreditSpecifications(
    args: DescribeInstanceCreditSpecificationsCommandInput,
    cb: (err: any, data?: DescribeInstanceCreditSpecificationsCommandOutput) => void
  ): void;
  describeInstanceCreditSpecifications(
    args: DescribeInstanceCreditSpecificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceCreditSpecificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInstanceEventNotificationAttributesCommand}
   */
  describeInstanceEventNotificationAttributes(): Promise<DescribeInstanceEventNotificationAttributesCommandOutput>;
  describeInstanceEventNotificationAttributes(
    args: DescribeInstanceEventNotificationAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceEventNotificationAttributesCommandOutput>;
  describeInstanceEventNotificationAttributes(
    args: DescribeInstanceEventNotificationAttributesCommandInput,
    cb: (err: any, data?: DescribeInstanceEventNotificationAttributesCommandOutput) => void
  ): void;
  describeInstanceEventNotificationAttributes(
    args: DescribeInstanceEventNotificationAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceEventNotificationAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInstanceEventWindowsCommand}
   */
  describeInstanceEventWindows(): Promise<DescribeInstanceEventWindowsCommandOutput>;
  describeInstanceEventWindows(
    args: DescribeInstanceEventWindowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceEventWindowsCommandOutput>;
  describeInstanceEventWindows(
    args: DescribeInstanceEventWindowsCommandInput,
    cb: (err: any, data?: DescribeInstanceEventWindowsCommandOutput) => void
  ): void;
  describeInstanceEventWindows(
    args: DescribeInstanceEventWindowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceEventWindowsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInstanceImageMetadataCommand}
   */
  describeInstanceImageMetadata(): Promise<DescribeInstanceImageMetadataCommandOutput>;
  describeInstanceImageMetadata(
    args: DescribeInstanceImageMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceImageMetadataCommandOutput>;
  describeInstanceImageMetadata(
    args: DescribeInstanceImageMetadataCommandInput,
    cb: (err: any, data?: DescribeInstanceImageMetadataCommandOutput) => void
  ): void;
  describeInstanceImageMetadata(
    args: DescribeInstanceImageMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceImageMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInstancesCommand}
   */
  describeInstances(): Promise<DescribeInstancesCommandOutput>;
  describeInstances(
    args: DescribeInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstancesCommandOutput>;
  describeInstances(
    args: DescribeInstancesCommandInput,
    cb: (err: any, data?: DescribeInstancesCommandOutput) => void
  ): void;
  describeInstances(
    args: DescribeInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInstanceStatusCommand}
   */
  describeInstanceStatus(): Promise<DescribeInstanceStatusCommandOutput>;
  describeInstanceStatus(
    args: DescribeInstanceStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceStatusCommandOutput>;
  describeInstanceStatus(
    args: DescribeInstanceStatusCommandInput,
    cb: (err: any, data?: DescribeInstanceStatusCommandOutput) => void
  ): void;
  describeInstanceStatus(
    args: DescribeInstanceStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInstanceTopologyCommand}
   */
  describeInstanceTopology(): Promise<DescribeInstanceTopologyCommandOutput>;
  describeInstanceTopology(
    args: DescribeInstanceTopologyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceTopologyCommandOutput>;
  describeInstanceTopology(
    args: DescribeInstanceTopologyCommandInput,
    cb: (err: any, data?: DescribeInstanceTopologyCommandOutput) => void
  ): void;
  describeInstanceTopology(
    args: DescribeInstanceTopologyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceTopologyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInstanceTypeOfferingsCommand}
   */
  describeInstanceTypeOfferings(): Promise<DescribeInstanceTypeOfferingsCommandOutput>;
  describeInstanceTypeOfferings(
    args: DescribeInstanceTypeOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceTypeOfferingsCommandOutput>;
  describeInstanceTypeOfferings(
    args: DescribeInstanceTypeOfferingsCommandInput,
    cb: (err: any, data?: DescribeInstanceTypeOfferingsCommandOutput) => void
  ): void;
  describeInstanceTypeOfferings(
    args: DescribeInstanceTypeOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceTypeOfferingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInstanceTypesCommand}
   */
  describeInstanceTypes(): Promise<DescribeInstanceTypesCommandOutput>;
  describeInstanceTypes(
    args: DescribeInstanceTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceTypesCommandOutput>;
  describeInstanceTypes(
    args: DescribeInstanceTypesCommandInput,
    cb: (err: any, data?: DescribeInstanceTypesCommandOutput) => void
  ): void;
  describeInstanceTypes(
    args: DescribeInstanceTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInternetGatewaysCommand}
   */
  describeInternetGateways(): Promise<DescribeInternetGatewaysCommandOutput>;
  describeInternetGateways(
    args: DescribeInternetGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInternetGatewaysCommandOutput>;
  describeInternetGateways(
    args: DescribeInternetGatewaysCommandInput,
    cb: (err: any, data?: DescribeInternetGatewaysCommandOutput) => void
  ): void;
  describeInternetGateways(
    args: DescribeInternetGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInternetGatewaysCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIpamByoasnCommand}
   */
  describeIpamByoasn(): Promise<DescribeIpamByoasnCommandOutput>;
  describeIpamByoasn(
    args: DescribeIpamByoasnCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIpamByoasnCommandOutput>;
  describeIpamByoasn(
    args: DescribeIpamByoasnCommandInput,
    cb: (err: any, data?: DescribeIpamByoasnCommandOutput) => void
  ): void;
  describeIpamByoasn(
    args: DescribeIpamByoasnCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIpamByoasnCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIpamExternalResourceVerificationTokensCommand}
   */
  describeIpamExternalResourceVerificationTokens(): Promise<DescribeIpamExternalResourceVerificationTokensCommandOutput>;
  describeIpamExternalResourceVerificationTokens(
    args: DescribeIpamExternalResourceVerificationTokensCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIpamExternalResourceVerificationTokensCommandOutput>;
  describeIpamExternalResourceVerificationTokens(
    args: DescribeIpamExternalResourceVerificationTokensCommandInput,
    cb: (err: any, data?: DescribeIpamExternalResourceVerificationTokensCommandOutput) => void
  ): void;
  describeIpamExternalResourceVerificationTokens(
    args: DescribeIpamExternalResourceVerificationTokensCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIpamExternalResourceVerificationTokensCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIpamPoolsCommand}
   */
  describeIpamPools(): Promise<DescribeIpamPoolsCommandOutput>;
  describeIpamPools(
    args: DescribeIpamPoolsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIpamPoolsCommandOutput>;
  describeIpamPools(
    args: DescribeIpamPoolsCommandInput,
    cb: (err: any, data?: DescribeIpamPoolsCommandOutput) => void
  ): void;
  describeIpamPools(
    args: DescribeIpamPoolsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIpamPoolsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIpamResourceDiscoveriesCommand}
   */
  describeIpamResourceDiscoveries(): Promise<DescribeIpamResourceDiscoveriesCommandOutput>;
  describeIpamResourceDiscoveries(
    args: DescribeIpamResourceDiscoveriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIpamResourceDiscoveriesCommandOutput>;
  describeIpamResourceDiscoveries(
    args: DescribeIpamResourceDiscoveriesCommandInput,
    cb: (err: any, data?: DescribeIpamResourceDiscoveriesCommandOutput) => void
  ): void;
  describeIpamResourceDiscoveries(
    args: DescribeIpamResourceDiscoveriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIpamResourceDiscoveriesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIpamResourceDiscoveryAssociationsCommand}
   */
  describeIpamResourceDiscoveryAssociations(): Promise<DescribeIpamResourceDiscoveryAssociationsCommandOutput>;
  describeIpamResourceDiscoveryAssociations(
    args: DescribeIpamResourceDiscoveryAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIpamResourceDiscoveryAssociationsCommandOutput>;
  describeIpamResourceDiscoveryAssociations(
    args: DescribeIpamResourceDiscoveryAssociationsCommandInput,
    cb: (err: any, data?: DescribeIpamResourceDiscoveryAssociationsCommandOutput) => void
  ): void;
  describeIpamResourceDiscoveryAssociations(
    args: DescribeIpamResourceDiscoveryAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIpamResourceDiscoveryAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIpamsCommand}
   */
  describeIpams(): Promise<DescribeIpamsCommandOutput>;
  describeIpams(args: DescribeIpamsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeIpamsCommandOutput>;
  describeIpams(args: DescribeIpamsCommandInput, cb: (err: any, data?: DescribeIpamsCommandOutput) => void): void;
  describeIpams(
    args: DescribeIpamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIpamsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIpamScopesCommand}
   */
  describeIpamScopes(): Promise<DescribeIpamScopesCommandOutput>;
  describeIpamScopes(
    args: DescribeIpamScopesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIpamScopesCommandOutput>;
  describeIpamScopes(
    args: DescribeIpamScopesCommandInput,
    cb: (err: any, data?: DescribeIpamScopesCommandOutput) => void
  ): void;
  describeIpamScopes(
    args: DescribeIpamScopesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIpamScopesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIpv6PoolsCommand}
   */
  describeIpv6Pools(): Promise<DescribeIpv6PoolsCommandOutput>;
  describeIpv6Pools(
    args: DescribeIpv6PoolsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIpv6PoolsCommandOutput>;
  describeIpv6Pools(
    args: DescribeIpv6PoolsCommandInput,
    cb: (err: any, data?: DescribeIpv6PoolsCommandOutput) => void
  ): void;
  describeIpv6Pools(
    args: DescribeIpv6PoolsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIpv6PoolsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeKeyPairsCommand}
   */
  describeKeyPairs(): Promise<DescribeKeyPairsCommandOutput>;
  describeKeyPairs(
    args: DescribeKeyPairsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeKeyPairsCommandOutput>;
  describeKeyPairs(
    args: DescribeKeyPairsCommandInput,
    cb: (err: any, data?: DescribeKeyPairsCommandOutput) => void
  ): void;
  describeKeyPairs(
    args: DescribeKeyPairsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeKeyPairsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLaunchTemplatesCommand}
   */
  describeLaunchTemplates(): Promise<DescribeLaunchTemplatesCommandOutput>;
  describeLaunchTemplates(
    args: DescribeLaunchTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLaunchTemplatesCommandOutput>;
  describeLaunchTemplates(
    args: DescribeLaunchTemplatesCommandInput,
    cb: (err: any, data?: DescribeLaunchTemplatesCommandOutput) => void
  ): void;
  describeLaunchTemplates(
    args: DescribeLaunchTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLaunchTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLaunchTemplateVersionsCommand}
   */
  describeLaunchTemplateVersions(): Promise<DescribeLaunchTemplateVersionsCommandOutput>;
  describeLaunchTemplateVersions(
    args: DescribeLaunchTemplateVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLaunchTemplateVersionsCommandOutput>;
  describeLaunchTemplateVersions(
    args: DescribeLaunchTemplateVersionsCommandInput,
    cb: (err: any, data?: DescribeLaunchTemplateVersionsCommandOutput) => void
  ): void;
  describeLaunchTemplateVersions(
    args: DescribeLaunchTemplateVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLaunchTemplateVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLocalGatewayRouteTablesCommand}
   */
  describeLocalGatewayRouteTables(): Promise<DescribeLocalGatewayRouteTablesCommandOutput>;
  describeLocalGatewayRouteTables(
    args: DescribeLocalGatewayRouteTablesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocalGatewayRouteTablesCommandOutput>;
  describeLocalGatewayRouteTables(
    args: DescribeLocalGatewayRouteTablesCommandInput,
    cb: (err: any, data?: DescribeLocalGatewayRouteTablesCommandOutput) => void
  ): void;
  describeLocalGatewayRouteTables(
    args: DescribeLocalGatewayRouteTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocalGatewayRouteTablesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand}
   */
  describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations(): Promise<DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput>;
  describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations(
    args: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput>;
  describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations(
    args: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput,
    cb: (err: any, data?: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput) => void
  ): void;
  describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations(
    args: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLocalGatewayRouteTableVpcAssociationsCommand}
   */
  describeLocalGatewayRouteTableVpcAssociations(): Promise<DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput>;
  describeLocalGatewayRouteTableVpcAssociations(
    args: DescribeLocalGatewayRouteTableVpcAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput>;
  describeLocalGatewayRouteTableVpcAssociations(
    args: DescribeLocalGatewayRouteTableVpcAssociationsCommandInput,
    cb: (err: any, data?: DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput) => void
  ): void;
  describeLocalGatewayRouteTableVpcAssociations(
    args: DescribeLocalGatewayRouteTableVpcAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLocalGatewaysCommand}
   */
  describeLocalGateways(): Promise<DescribeLocalGatewaysCommandOutput>;
  describeLocalGateways(
    args: DescribeLocalGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocalGatewaysCommandOutput>;
  describeLocalGateways(
    args: DescribeLocalGatewaysCommandInput,
    cb: (err: any, data?: DescribeLocalGatewaysCommandOutput) => void
  ): void;
  describeLocalGateways(
    args: DescribeLocalGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocalGatewaysCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLocalGatewayVirtualInterfaceGroupsCommand}
   */
  describeLocalGatewayVirtualInterfaceGroups(): Promise<DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput>;
  describeLocalGatewayVirtualInterfaceGroups(
    args: DescribeLocalGatewayVirtualInterfaceGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput>;
  describeLocalGatewayVirtualInterfaceGroups(
    args: DescribeLocalGatewayVirtualInterfaceGroupsCommandInput,
    cb: (err: any, data?: DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput) => void
  ): void;
  describeLocalGatewayVirtualInterfaceGroups(
    args: DescribeLocalGatewayVirtualInterfaceGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLocalGatewayVirtualInterfacesCommand}
   */
  describeLocalGatewayVirtualInterfaces(): Promise<DescribeLocalGatewayVirtualInterfacesCommandOutput>;
  describeLocalGatewayVirtualInterfaces(
    args: DescribeLocalGatewayVirtualInterfacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocalGatewayVirtualInterfacesCommandOutput>;
  describeLocalGatewayVirtualInterfaces(
    args: DescribeLocalGatewayVirtualInterfacesCommandInput,
    cb: (err: any, data?: DescribeLocalGatewayVirtualInterfacesCommandOutput) => void
  ): void;
  describeLocalGatewayVirtualInterfaces(
    args: DescribeLocalGatewayVirtualInterfacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocalGatewayVirtualInterfacesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLockedSnapshotsCommand}
   */
  describeLockedSnapshots(): Promise<DescribeLockedSnapshotsCommandOutput>;
  describeLockedSnapshots(
    args: DescribeLockedSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLockedSnapshotsCommandOutput>;
  describeLockedSnapshots(
    args: DescribeLockedSnapshotsCommandInput,
    cb: (err: any, data?: DescribeLockedSnapshotsCommandOutput) => void
  ): void;
  describeLockedSnapshots(
    args: DescribeLockedSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLockedSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMacHostsCommand}
   */
  describeMacHosts(): Promise<DescribeMacHostsCommandOutput>;
  describeMacHosts(
    args: DescribeMacHostsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMacHostsCommandOutput>;
  describeMacHosts(
    args: DescribeMacHostsCommandInput,
    cb: (err: any, data?: DescribeMacHostsCommandOutput) => void
  ): void;
  describeMacHosts(
    args: DescribeMacHostsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMacHostsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMacModificationTasksCommand}
   */
  describeMacModificationTasks(): Promise<DescribeMacModificationTasksCommandOutput>;
  describeMacModificationTasks(
    args: DescribeMacModificationTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMacModificationTasksCommandOutput>;
  describeMacModificationTasks(
    args: DescribeMacModificationTasksCommandInput,
    cb: (err: any, data?: DescribeMacModificationTasksCommandOutput) => void
  ): void;
  describeMacModificationTasks(
    args: DescribeMacModificationTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMacModificationTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeManagedPrefixListsCommand}
   */
  describeManagedPrefixLists(): Promise<DescribeManagedPrefixListsCommandOutput>;
  describeManagedPrefixLists(
    args: DescribeManagedPrefixListsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeManagedPrefixListsCommandOutput>;
  describeManagedPrefixLists(
    args: DescribeManagedPrefixListsCommandInput,
    cb: (err: any, data?: DescribeManagedPrefixListsCommandOutput) => void
  ): void;
  describeManagedPrefixLists(
    args: DescribeManagedPrefixListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeManagedPrefixListsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMovingAddressesCommand}
   */
  describeMovingAddresses(): Promise<DescribeMovingAddressesCommandOutput>;
  describeMovingAddresses(
    args: DescribeMovingAddressesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMovingAddressesCommandOutput>;
  describeMovingAddresses(
    args: DescribeMovingAddressesCommandInput,
    cb: (err: any, data?: DescribeMovingAddressesCommandOutput) => void
  ): void;
  describeMovingAddresses(
    args: DescribeMovingAddressesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMovingAddressesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNatGatewaysCommand}
   */
  describeNatGateways(): Promise<DescribeNatGatewaysCommandOutput>;
  describeNatGateways(
    args: DescribeNatGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNatGatewaysCommandOutput>;
  describeNatGateways(
    args: DescribeNatGatewaysCommandInput,
    cb: (err: any, data?: DescribeNatGatewaysCommandOutput) => void
  ): void;
  describeNatGateways(
    args: DescribeNatGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNatGatewaysCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNetworkAclsCommand}
   */
  describeNetworkAcls(): Promise<DescribeNetworkAclsCommandOutput>;
  describeNetworkAcls(
    args: DescribeNetworkAclsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNetworkAclsCommandOutput>;
  describeNetworkAcls(
    args: DescribeNetworkAclsCommandInput,
    cb: (err: any, data?: DescribeNetworkAclsCommandOutput) => void
  ): void;
  describeNetworkAcls(
    args: DescribeNetworkAclsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNetworkAclsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNetworkInsightsAccessScopeAnalysesCommand}
   */
  describeNetworkInsightsAccessScopeAnalyses(): Promise<DescribeNetworkInsightsAccessScopeAnalysesCommandOutput>;
  describeNetworkInsightsAccessScopeAnalyses(
    args: DescribeNetworkInsightsAccessScopeAnalysesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNetworkInsightsAccessScopeAnalysesCommandOutput>;
  describeNetworkInsightsAccessScopeAnalyses(
    args: DescribeNetworkInsightsAccessScopeAnalysesCommandInput,
    cb: (err: any, data?: DescribeNetworkInsightsAccessScopeAnalysesCommandOutput) => void
  ): void;
  describeNetworkInsightsAccessScopeAnalyses(
    args: DescribeNetworkInsightsAccessScopeAnalysesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNetworkInsightsAccessScopeAnalysesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNetworkInsightsAccessScopesCommand}
   */
  describeNetworkInsightsAccessScopes(): Promise<DescribeNetworkInsightsAccessScopesCommandOutput>;
  describeNetworkInsightsAccessScopes(
    args: DescribeNetworkInsightsAccessScopesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNetworkInsightsAccessScopesCommandOutput>;
  describeNetworkInsightsAccessScopes(
    args: DescribeNetworkInsightsAccessScopesCommandInput,
    cb: (err: any, data?: DescribeNetworkInsightsAccessScopesCommandOutput) => void
  ): void;
  describeNetworkInsightsAccessScopes(
    args: DescribeNetworkInsightsAccessScopesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNetworkInsightsAccessScopesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNetworkInsightsAnalysesCommand}
   */
  describeNetworkInsightsAnalyses(): Promise<DescribeNetworkInsightsAnalysesCommandOutput>;
  describeNetworkInsightsAnalyses(
    args: DescribeNetworkInsightsAnalysesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNetworkInsightsAnalysesCommandOutput>;
  describeNetworkInsightsAnalyses(
    args: DescribeNetworkInsightsAnalysesCommandInput,
    cb: (err: any, data?: DescribeNetworkInsightsAnalysesCommandOutput) => void
  ): void;
  describeNetworkInsightsAnalyses(
    args: DescribeNetworkInsightsAnalysesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNetworkInsightsAnalysesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNetworkInsightsPathsCommand}
   */
  describeNetworkInsightsPaths(): Promise<DescribeNetworkInsightsPathsCommandOutput>;
  describeNetworkInsightsPaths(
    args: DescribeNetworkInsightsPathsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNetworkInsightsPathsCommandOutput>;
  describeNetworkInsightsPaths(
    args: DescribeNetworkInsightsPathsCommandInput,
    cb: (err: any, data?: DescribeNetworkInsightsPathsCommandOutput) => void
  ): void;
  describeNetworkInsightsPaths(
    args: DescribeNetworkInsightsPathsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNetworkInsightsPathsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNetworkInterfaceAttributeCommand}
   */
  describeNetworkInterfaceAttribute(
    args: DescribeNetworkInterfaceAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNetworkInterfaceAttributeCommandOutput>;
  describeNetworkInterfaceAttribute(
    args: DescribeNetworkInterfaceAttributeCommandInput,
    cb: (err: any, data?: DescribeNetworkInterfaceAttributeCommandOutput) => void
  ): void;
  describeNetworkInterfaceAttribute(
    args: DescribeNetworkInterfaceAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNetworkInterfaceAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNetworkInterfacePermissionsCommand}
   */
  describeNetworkInterfacePermissions(): Promise<DescribeNetworkInterfacePermissionsCommandOutput>;
  describeNetworkInterfacePermissions(
    args: DescribeNetworkInterfacePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNetworkInterfacePermissionsCommandOutput>;
  describeNetworkInterfacePermissions(
    args: DescribeNetworkInterfacePermissionsCommandInput,
    cb: (err: any, data?: DescribeNetworkInterfacePermissionsCommandOutput) => void
  ): void;
  describeNetworkInterfacePermissions(
    args: DescribeNetworkInterfacePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNetworkInterfacePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNetworkInterfacesCommand}
   */
  describeNetworkInterfaces(): Promise<DescribeNetworkInterfacesCommandOutput>;
  describeNetworkInterfaces(
    args: DescribeNetworkInterfacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNetworkInterfacesCommandOutput>;
  describeNetworkInterfaces(
    args: DescribeNetworkInterfacesCommandInput,
    cb: (err: any, data?: DescribeNetworkInterfacesCommandOutput) => void
  ): void;
  describeNetworkInterfaces(
    args: DescribeNetworkInterfacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNetworkInterfacesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOutpostLagsCommand}
   */
  describeOutpostLags(): Promise<DescribeOutpostLagsCommandOutput>;
  describeOutpostLags(
    args: DescribeOutpostLagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOutpostLagsCommandOutput>;
  describeOutpostLags(
    args: DescribeOutpostLagsCommandInput,
    cb: (err: any, data?: DescribeOutpostLagsCommandOutput) => void
  ): void;
  describeOutpostLags(
    args: DescribeOutpostLagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOutpostLagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePlacementGroupsCommand}
   */
  describePlacementGroups(): Promise<DescribePlacementGroupsCommandOutput>;
  describePlacementGroups(
    args: DescribePlacementGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePlacementGroupsCommandOutput>;
  describePlacementGroups(
    args: DescribePlacementGroupsCommandInput,
    cb: (err: any, data?: DescribePlacementGroupsCommandOutput) => void
  ): void;
  describePlacementGroups(
    args: DescribePlacementGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePlacementGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePrefixListsCommand}
   */
  describePrefixLists(): Promise<DescribePrefixListsCommandOutput>;
  describePrefixLists(
    args: DescribePrefixListsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePrefixListsCommandOutput>;
  describePrefixLists(
    args: DescribePrefixListsCommandInput,
    cb: (err: any, data?: DescribePrefixListsCommandOutput) => void
  ): void;
  describePrefixLists(
    args: DescribePrefixListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePrefixListsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePrincipalIdFormatCommand}
   */
  describePrincipalIdFormat(): Promise<DescribePrincipalIdFormatCommandOutput>;
  describePrincipalIdFormat(
    args: DescribePrincipalIdFormatCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePrincipalIdFormatCommandOutput>;
  describePrincipalIdFormat(
    args: DescribePrincipalIdFormatCommandInput,
    cb: (err: any, data?: DescribePrincipalIdFormatCommandOutput) => void
  ): void;
  describePrincipalIdFormat(
    args: DescribePrincipalIdFormatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePrincipalIdFormatCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePublicIpv4PoolsCommand}
   */
  describePublicIpv4Pools(): Promise<DescribePublicIpv4PoolsCommandOutput>;
  describePublicIpv4Pools(
    args: DescribePublicIpv4PoolsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePublicIpv4PoolsCommandOutput>;
  describePublicIpv4Pools(
    args: DescribePublicIpv4PoolsCommandInput,
    cb: (err: any, data?: DescribePublicIpv4PoolsCommandOutput) => void
  ): void;
  describePublicIpv4Pools(
    args: DescribePublicIpv4PoolsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePublicIpv4PoolsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRegionsCommand}
   */
  describeRegions(): Promise<DescribeRegionsCommandOutput>;
  describeRegions(
    args: DescribeRegionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRegionsCommandOutput>;
  describeRegions(args: DescribeRegionsCommandInput, cb: (err: any, data?: DescribeRegionsCommandOutput) => void): void;
  describeRegions(
    args: DescribeRegionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRegionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReplaceRootVolumeTasksCommand}
   */
  describeReplaceRootVolumeTasks(): Promise<DescribeReplaceRootVolumeTasksCommandOutput>;
  describeReplaceRootVolumeTasks(
    args: DescribeReplaceRootVolumeTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplaceRootVolumeTasksCommandOutput>;
  describeReplaceRootVolumeTasks(
    args: DescribeReplaceRootVolumeTasksCommandInput,
    cb: (err: any, data?: DescribeReplaceRootVolumeTasksCommandOutput) => void
  ): void;
  describeReplaceRootVolumeTasks(
    args: DescribeReplaceRootVolumeTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplaceRootVolumeTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReservedInstancesCommand}
   */
  describeReservedInstances(): Promise<DescribeReservedInstancesCommandOutput>;
  describeReservedInstances(
    args: DescribeReservedInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedInstancesCommandOutput>;
  describeReservedInstances(
    args: DescribeReservedInstancesCommandInput,
    cb: (err: any, data?: DescribeReservedInstancesCommandOutput) => void
  ): void;
  describeReservedInstances(
    args: DescribeReservedInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReservedInstancesListingsCommand}
   */
  describeReservedInstancesListings(): Promise<DescribeReservedInstancesListingsCommandOutput>;
  describeReservedInstancesListings(
    args: DescribeReservedInstancesListingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedInstancesListingsCommandOutput>;
  describeReservedInstancesListings(
    args: DescribeReservedInstancesListingsCommandInput,
    cb: (err: any, data?: DescribeReservedInstancesListingsCommandOutput) => void
  ): void;
  describeReservedInstancesListings(
    args: DescribeReservedInstancesListingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedInstancesListingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReservedInstancesModificationsCommand}
   */
  describeReservedInstancesModifications(): Promise<DescribeReservedInstancesModificationsCommandOutput>;
  describeReservedInstancesModifications(
    args: DescribeReservedInstancesModificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedInstancesModificationsCommandOutput>;
  describeReservedInstancesModifications(
    args: DescribeReservedInstancesModificationsCommandInput,
    cb: (err: any, data?: DescribeReservedInstancesModificationsCommandOutput) => void
  ): void;
  describeReservedInstancesModifications(
    args: DescribeReservedInstancesModificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedInstancesModificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReservedInstancesOfferingsCommand}
   */
  describeReservedInstancesOfferings(): Promise<DescribeReservedInstancesOfferingsCommandOutput>;
  describeReservedInstancesOfferings(
    args: DescribeReservedInstancesOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedInstancesOfferingsCommandOutput>;
  describeReservedInstancesOfferings(
    args: DescribeReservedInstancesOfferingsCommandInput,
    cb: (err: any, data?: DescribeReservedInstancesOfferingsCommandOutput) => void
  ): void;
  describeReservedInstancesOfferings(
    args: DescribeReservedInstancesOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedInstancesOfferingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRouteServerEndpointsCommand}
   */
  describeRouteServerEndpoints(): Promise<DescribeRouteServerEndpointsCommandOutput>;
  describeRouteServerEndpoints(
    args: DescribeRouteServerEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRouteServerEndpointsCommandOutput>;
  describeRouteServerEndpoints(
    args: DescribeRouteServerEndpointsCommandInput,
    cb: (err: any, data?: DescribeRouteServerEndpointsCommandOutput) => void
  ): void;
  describeRouteServerEndpoints(
    args: DescribeRouteServerEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRouteServerEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRouteServerPeersCommand}
   */
  describeRouteServerPeers(): Promise<DescribeRouteServerPeersCommandOutput>;
  describeRouteServerPeers(
    args: DescribeRouteServerPeersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRouteServerPeersCommandOutput>;
  describeRouteServerPeers(
    args: DescribeRouteServerPeersCommandInput,
    cb: (err: any, data?: DescribeRouteServerPeersCommandOutput) => void
  ): void;
  describeRouteServerPeers(
    args: DescribeRouteServerPeersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRouteServerPeersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRouteServersCommand}
   */
  describeRouteServers(): Promise<DescribeRouteServersCommandOutput>;
  describeRouteServers(
    args: DescribeRouteServersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRouteServersCommandOutput>;
  describeRouteServers(
    args: DescribeRouteServersCommandInput,
    cb: (err: any, data?: DescribeRouteServersCommandOutput) => void
  ): void;
  describeRouteServers(
    args: DescribeRouteServersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRouteServersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRouteTablesCommand}
   */
  describeRouteTables(): Promise<DescribeRouteTablesCommandOutput>;
  describeRouteTables(
    args: DescribeRouteTablesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRouteTablesCommandOutput>;
  describeRouteTables(
    args: DescribeRouteTablesCommandInput,
    cb: (err: any, data?: DescribeRouteTablesCommandOutput) => void
  ): void;
  describeRouteTables(
    args: DescribeRouteTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRouteTablesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScheduledInstanceAvailabilityCommand}
   */
  describeScheduledInstanceAvailability(
    args: DescribeScheduledInstanceAvailabilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScheduledInstanceAvailabilityCommandOutput>;
  describeScheduledInstanceAvailability(
    args: DescribeScheduledInstanceAvailabilityCommandInput,
    cb: (err: any, data?: DescribeScheduledInstanceAvailabilityCommandOutput) => void
  ): void;
  describeScheduledInstanceAvailability(
    args: DescribeScheduledInstanceAvailabilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScheduledInstanceAvailabilityCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScheduledInstancesCommand}
   */
  describeScheduledInstances(): Promise<DescribeScheduledInstancesCommandOutput>;
  describeScheduledInstances(
    args: DescribeScheduledInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScheduledInstancesCommandOutput>;
  describeScheduledInstances(
    args: DescribeScheduledInstancesCommandInput,
    cb: (err: any, data?: DescribeScheduledInstancesCommandOutput) => void
  ): void;
  describeScheduledInstances(
    args: DescribeScheduledInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScheduledInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSecurityGroupReferencesCommand}
   */
  describeSecurityGroupReferences(
    args: DescribeSecurityGroupReferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSecurityGroupReferencesCommandOutput>;
  describeSecurityGroupReferences(
    args: DescribeSecurityGroupReferencesCommandInput,
    cb: (err: any, data?: DescribeSecurityGroupReferencesCommandOutput) => void
  ): void;
  describeSecurityGroupReferences(
    args: DescribeSecurityGroupReferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSecurityGroupReferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSecurityGroupRulesCommand}
   */
  describeSecurityGroupRules(): Promise<DescribeSecurityGroupRulesCommandOutput>;
  describeSecurityGroupRules(
    args: DescribeSecurityGroupRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSecurityGroupRulesCommandOutput>;
  describeSecurityGroupRules(
    args: DescribeSecurityGroupRulesCommandInput,
    cb: (err: any, data?: DescribeSecurityGroupRulesCommandOutput) => void
  ): void;
  describeSecurityGroupRules(
    args: DescribeSecurityGroupRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSecurityGroupRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSecurityGroupsCommand}
   */
  describeSecurityGroups(): Promise<DescribeSecurityGroupsCommandOutput>;
  describeSecurityGroups(
    args: DescribeSecurityGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSecurityGroupsCommandOutput>;
  describeSecurityGroups(
    args: DescribeSecurityGroupsCommandInput,
    cb: (err: any, data?: DescribeSecurityGroupsCommandOutput) => void
  ): void;
  describeSecurityGroups(
    args: DescribeSecurityGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSecurityGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSecurityGroupVpcAssociationsCommand}
   */
  describeSecurityGroupVpcAssociations(): Promise<DescribeSecurityGroupVpcAssociationsCommandOutput>;
  describeSecurityGroupVpcAssociations(
    args: DescribeSecurityGroupVpcAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSecurityGroupVpcAssociationsCommandOutput>;
  describeSecurityGroupVpcAssociations(
    args: DescribeSecurityGroupVpcAssociationsCommandInput,
    cb: (err: any, data?: DescribeSecurityGroupVpcAssociationsCommandOutput) => void
  ): void;
  describeSecurityGroupVpcAssociations(
    args: DescribeSecurityGroupVpcAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSecurityGroupVpcAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeServiceLinkVirtualInterfacesCommand}
   */
  describeServiceLinkVirtualInterfaces(): Promise<DescribeServiceLinkVirtualInterfacesCommandOutput>;
  describeServiceLinkVirtualInterfaces(
    args: DescribeServiceLinkVirtualInterfacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServiceLinkVirtualInterfacesCommandOutput>;
  describeServiceLinkVirtualInterfaces(
    args: DescribeServiceLinkVirtualInterfacesCommandInput,
    cb: (err: any, data?: DescribeServiceLinkVirtualInterfacesCommandOutput) => void
  ): void;
  describeServiceLinkVirtualInterfaces(
    args: DescribeServiceLinkVirtualInterfacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServiceLinkVirtualInterfacesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSnapshotAttributeCommand}
   */
  describeSnapshotAttribute(
    args: DescribeSnapshotAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSnapshotAttributeCommandOutput>;
  describeSnapshotAttribute(
    args: DescribeSnapshotAttributeCommandInput,
    cb: (err: any, data?: DescribeSnapshotAttributeCommandOutput) => void
  ): void;
  describeSnapshotAttribute(
    args: DescribeSnapshotAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSnapshotAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSnapshotsCommand}
   */
  describeSnapshots(): Promise<DescribeSnapshotsCommandOutput>;
  describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSnapshotsCommandOutput>;
  describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    cb: (err: any, data?: DescribeSnapshotsCommandOutput) => void
  ): void;
  describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSnapshotTierStatusCommand}
   */
  describeSnapshotTierStatus(): Promise<DescribeSnapshotTierStatusCommandOutput>;
  describeSnapshotTierStatus(
    args: DescribeSnapshotTierStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSnapshotTierStatusCommandOutput>;
  describeSnapshotTierStatus(
    args: DescribeSnapshotTierStatusCommandInput,
    cb: (err: any, data?: DescribeSnapshotTierStatusCommandOutput) => void
  ): void;
  describeSnapshotTierStatus(
    args: DescribeSnapshotTierStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSnapshotTierStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSpotDatafeedSubscriptionCommand}
   */
  describeSpotDatafeedSubscription(): Promise<DescribeSpotDatafeedSubscriptionCommandOutput>;
  describeSpotDatafeedSubscription(
    args: DescribeSpotDatafeedSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSpotDatafeedSubscriptionCommandOutput>;
  describeSpotDatafeedSubscription(
    args: DescribeSpotDatafeedSubscriptionCommandInput,
    cb: (err: any, data?: DescribeSpotDatafeedSubscriptionCommandOutput) => void
  ): void;
  describeSpotDatafeedSubscription(
    args: DescribeSpotDatafeedSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSpotDatafeedSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSpotFleetInstancesCommand}
   */
  describeSpotFleetInstances(
    args: DescribeSpotFleetInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSpotFleetInstancesCommandOutput>;
  describeSpotFleetInstances(
    args: DescribeSpotFleetInstancesCommandInput,
    cb: (err: any, data?: DescribeSpotFleetInstancesCommandOutput) => void
  ): void;
  describeSpotFleetInstances(
    args: DescribeSpotFleetInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSpotFleetInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSpotFleetRequestHistoryCommand}
   */
  describeSpotFleetRequestHistory(
    args: DescribeSpotFleetRequestHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSpotFleetRequestHistoryCommandOutput>;
  describeSpotFleetRequestHistory(
    args: DescribeSpotFleetRequestHistoryCommandInput,
    cb: (err: any, data?: DescribeSpotFleetRequestHistoryCommandOutput) => void
  ): void;
  describeSpotFleetRequestHistory(
    args: DescribeSpotFleetRequestHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSpotFleetRequestHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSpotFleetRequestsCommand}
   */
  describeSpotFleetRequests(): Promise<DescribeSpotFleetRequestsCommandOutput>;
  describeSpotFleetRequests(
    args: DescribeSpotFleetRequestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSpotFleetRequestsCommandOutput>;
  describeSpotFleetRequests(
    args: DescribeSpotFleetRequestsCommandInput,
    cb: (err: any, data?: DescribeSpotFleetRequestsCommandOutput) => void
  ): void;
  describeSpotFleetRequests(
    args: DescribeSpotFleetRequestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSpotFleetRequestsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSpotInstanceRequestsCommand}
   */
  describeSpotInstanceRequests(): Promise<DescribeSpotInstanceRequestsCommandOutput>;
  describeSpotInstanceRequests(
    args: DescribeSpotInstanceRequestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSpotInstanceRequestsCommandOutput>;
  describeSpotInstanceRequests(
    args: DescribeSpotInstanceRequestsCommandInput,
    cb: (err: any, data?: DescribeSpotInstanceRequestsCommandOutput) => void
  ): void;
  describeSpotInstanceRequests(
    args: DescribeSpotInstanceRequestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSpotInstanceRequestsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSpotPriceHistoryCommand}
   */
  describeSpotPriceHistory(): Promise<DescribeSpotPriceHistoryCommandOutput>;
  describeSpotPriceHistory(
    args: DescribeSpotPriceHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSpotPriceHistoryCommandOutput>;
  describeSpotPriceHistory(
    args: DescribeSpotPriceHistoryCommandInput,
    cb: (err: any, data?: DescribeSpotPriceHistoryCommandOutput) => void
  ): void;
  describeSpotPriceHistory(
    args: DescribeSpotPriceHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSpotPriceHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStaleSecurityGroupsCommand}
   */
  describeStaleSecurityGroups(
    args: DescribeStaleSecurityGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStaleSecurityGroupsCommandOutput>;
  describeStaleSecurityGroups(
    args: DescribeStaleSecurityGroupsCommandInput,
    cb: (err: any, data?: DescribeStaleSecurityGroupsCommandOutput) => void
  ): void;
  describeStaleSecurityGroups(
    args: DescribeStaleSecurityGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStaleSecurityGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStoreImageTasksCommand}
   */
  describeStoreImageTasks(): Promise<DescribeStoreImageTasksCommandOutput>;
  describeStoreImageTasks(
    args: DescribeStoreImageTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStoreImageTasksCommandOutput>;
  describeStoreImageTasks(
    args: DescribeStoreImageTasksCommandInput,
    cb: (err: any, data?: DescribeStoreImageTasksCommandOutput) => void
  ): void;
  describeStoreImageTasks(
    args: DescribeStoreImageTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStoreImageTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSubnetsCommand}
   */
  describeSubnets(): Promise<DescribeSubnetsCommandOutput>;
  describeSubnets(
    args: DescribeSubnetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSubnetsCommandOutput>;
  describeSubnets(args: DescribeSubnetsCommandInput, cb: (err: any, data?: DescribeSubnetsCommandOutput) => void): void;
  describeSubnets(
    args: DescribeSubnetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSubnetsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTagsCommand}
   */
  describeTags(): Promise<DescribeTagsCommandOutput>;
  describeTags(args: DescribeTagsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTagsCommandOutput>;
  describeTags(args: DescribeTagsCommandInput, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
  describeTags(
    args: DescribeTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTrafficMirrorFilterRulesCommand}
   */
  describeTrafficMirrorFilterRules(): Promise<DescribeTrafficMirrorFilterRulesCommandOutput>;
  describeTrafficMirrorFilterRules(
    args: DescribeTrafficMirrorFilterRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrafficMirrorFilterRulesCommandOutput>;
  describeTrafficMirrorFilterRules(
    args: DescribeTrafficMirrorFilterRulesCommandInput,
    cb: (err: any, data?: DescribeTrafficMirrorFilterRulesCommandOutput) => void
  ): void;
  describeTrafficMirrorFilterRules(
    args: DescribeTrafficMirrorFilterRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrafficMirrorFilterRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTrafficMirrorFiltersCommand}
   */
  describeTrafficMirrorFilters(): Promise<DescribeTrafficMirrorFiltersCommandOutput>;
  describeTrafficMirrorFilters(
    args: DescribeTrafficMirrorFiltersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrafficMirrorFiltersCommandOutput>;
  describeTrafficMirrorFilters(
    args: DescribeTrafficMirrorFiltersCommandInput,
    cb: (err: any, data?: DescribeTrafficMirrorFiltersCommandOutput) => void
  ): void;
  describeTrafficMirrorFilters(
    args: DescribeTrafficMirrorFiltersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrafficMirrorFiltersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTrafficMirrorSessionsCommand}
   */
  describeTrafficMirrorSessions(): Promise<DescribeTrafficMirrorSessionsCommandOutput>;
  describeTrafficMirrorSessions(
    args: DescribeTrafficMirrorSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrafficMirrorSessionsCommandOutput>;
  describeTrafficMirrorSessions(
    args: DescribeTrafficMirrorSessionsCommandInput,
    cb: (err: any, data?: DescribeTrafficMirrorSessionsCommandOutput) => void
  ): void;
  describeTrafficMirrorSessions(
    args: DescribeTrafficMirrorSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrafficMirrorSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTrafficMirrorTargetsCommand}
   */
  describeTrafficMirrorTargets(): Promise<DescribeTrafficMirrorTargetsCommandOutput>;
  describeTrafficMirrorTargets(
    args: DescribeTrafficMirrorTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrafficMirrorTargetsCommandOutput>;
  describeTrafficMirrorTargets(
    args: DescribeTrafficMirrorTargetsCommandInput,
    cb: (err: any, data?: DescribeTrafficMirrorTargetsCommandOutput) => void
  ): void;
  describeTrafficMirrorTargets(
    args: DescribeTrafficMirrorTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrafficMirrorTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTransitGatewayAttachmentsCommand}
   */
  describeTransitGatewayAttachments(): Promise<DescribeTransitGatewayAttachmentsCommandOutput>;
  describeTransitGatewayAttachments(
    args: DescribeTransitGatewayAttachmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTransitGatewayAttachmentsCommandOutput>;
  describeTransitGatewayAttachments(
    args: DescribeTransitGatewayAttachmentsCommandInput,
    cb: (err: any, data?: DescribeTransitGatewayAttachmentsCommandOutput) => void
  ): void;
  describeTransitGatewayAttachments(
    args: DescribeTransitGatewayAttachmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTransitGatewayAttachmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTransitGatewayConnectPeersCommand}
   */
  describeTransitGatewayConnectPeers(): Promise<DescribeTransitGatewayConnectPeersCommandOutput>;
  describeTransitGatewayConnectPeers(
    args: DescribeTransitGatewayConnectPeersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTransitGatewayConnectPeersCommandOutput>;
  describeTransitGatewayConnectPeers(
    args: DescribeTransitGatewayConnectPeersCommandInput,
    cb: (err: any, data?: DescribeTransitGatewayConnectPeersCommandOutput) => void
  ): void;
  describeTransitGatewayConnectPeers(
    args: DescribeTransitGatewayConnectPeersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTransitGatewayConnectPeersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTransitGatewayConnectsCommand}
   */
  describeTransitGatewayConnects(): Promise<DescribeTransitGatewayConnectsCommandOutput>;
  describeTransitGatewayConnects(
    args: DescribeTransitGatewayConnectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTransitGatewayConnectsCommandOutput>;
  describeTransitGatewayConnects(
    args: DescribeTransitGatewayConnectsCommandInput,
    cb: (err: any, data?: DescribeTransitGatewayConnectsCommandOutput) => void
  ): void;
  describeTransitGatewayConnects(
    args: DescribeTransitGatewayConnectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTransitGatewayConnectsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTransitGatewayMulticastDomainsCommand}
   */
  describeTransitGatewayMulticastDomains(): Promise<DescribeTransitGatewayMulticastDomainsCommandOutput>;
  describeTransitGatewayMulticastDomains(
    args: DescribeTransitGatewayMulticastDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTransitGatewayMulticastDomainsCommandOutput>;
  describeTransitGatewayMulticastDomains(
    args: DescribeTransitGatewayMulticastDomainsCommandInput,
    cb: (err: any, data?: DescribeTransitGatewayMulticastDomainsCommandOutput) => void
  ): void;
  describeTransitGatewayMulticastDomains(
    args: DescribeTransitGatewayMulticastDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTransitGatewayMulticastDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTransitGatewayPeeringAttachmentsCommand}
   */
  describeTransitGatewayPeeringAttachments(): Promise<DescribeTransitGatewayPeeringAttachmentsCommandOutput>;
  describeTransitGatewayPeeringAttachments(
    args: DescribeTransitGatewayPeeringAttachmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTransitGatewayPeeringAttachmentsCommandOutput>;
  describeTransitGatewayPeeringAttachments(
    args: DescribeTransitGatewayPeeringAttachmentsCommandInput,
    cb: (err: any, data?: DescribeTransitGatewayPeeringAttachmentsCommandOutput) => void
  ): void;
  describeTransitGatewayPeeringAttachments(
    args: DescribeTransitGatewayPeeringAttachmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTransitGatewayPeeringAttachmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTransitGatewayPolicyTablesCommand}
   */
  describeTransitGatewayPolicyTables(): Promise<DescribeTransitGatewayPolicyTablesCommandOutput>;
  describeTransitGatewayPolicyTables(
    args: DescribeTransitGatewayPolicyTablesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTransitGatewayPolicyTablesCommandOutput>;
  describeTransitGatewayPolicyTables(
    args: DescribeTransitGatewayPolicyTablesCommandInput,
    cb: (err: any, data?: DescribeTransitGatewayPolicyTablesCommandOutput) => void
  ): void;
  describeTransitGatewayPolicyTables(
    args: DescribeTransitGatewayPolicyTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTransitGatewayPolicyTablesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTransitGatewayRouteTableAnnouncementsCommand}
   */
  describeTransitGatewayRouteTableAnnouncements(): Promise<DescribeTransitGatewayRouteTableAnnouncementsCommandOutput>;
  describeTransitGatewayRouteTableAnnouncements(
    args: DescribeTransitGatewayRouteTableAnnouncementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTransitGatewayRouteTableAnnouncementsCommandOutput>;
  describeTransitGatewayRouteTableAnnouncements(
    args: DescribeTransitGatewayRouteTableAnnouncementsCommandInput,
    cb: (err: any, data?: DescribeTransitGatewayRouteTableAnnouncementsCommandOutput) => void
  ): void;
  describeTransitGatewayRouteTableAnnouncements(
    args: DescribeTransitGatewayRouteTableAnnouncementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTransitGatewayRouteTableAnnouncementsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTransitGatewayRouteTablesCommand}
   */
  describeTransitGatewayRouteTables(): Promise<DescribeTransitGatewayRouteTablesCommandOutput>;
  describeTransitGatewayRouteTables(
    args: DescribeTransitGatewayRouteTablesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTransitGatewayRouteTablesCommandOutput>;
  describeTransitGatewayRouteTables(
    args: DescribeTransitGatewayRouteTablesCommandInput,
    cb: (err: any, data?: DescribeTransitGatewayRouteTablesCommandOutput) => void
  ): void;
  describeTransitGatewayRouteTables(
    args: DescribeTransitGatewayRouteTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTransitGatewayRouteTablesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTransitGatewaysCommand}
   */
  describeTransitGateways(): Promise<DescribeTransitGatewaysCommandOutput>;
  describeTransitGateways(
    args: DescribeTransitGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTransitGatewaysCommandOutput>;
  describeTransitGateways(
    args: DescribeTransitGatewaysCommandInput,
    cb: (err: any, data?: DescribeTransitGatewaysCommandOutput) => void
  ): void;
  describeTransitGateways(
    args: DescribeTransitGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTransitGatewaysCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTransitGatewayVpcAttachmentsCommand}
   */
  describeTransitGatewayVpcAttachments(): Promise<DescribeTransitGatewayVpcAttachmentsCommandOutput>;
  describeTransitGatewayVpcAttachments(
    args: DescribeTransitGatewayVpcAttachmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTransitGatewayVpcAttachmentsCommandOutput>;
  describeTransitGatewayVpcAttachments(
    args: DescribeTransitGatewayVpcAttachmentsCommandInput,
    cb: (err: any, data?: DescribeTransitGatewayVpcAttachmentsCommandOutput) => void
  ): void;
  describeTransitGatewayVpcAttachments(
    args: DescribeTransitGatewayVpcAttachmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTransitGatewayVpcAttachmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTrunkInterfaceAssociationsCommand}
   */
  describeTrunkInterfaceAssociations(): Promise<DescribeTrunkInterfaceAssociationsCommandOutput>;
  describeTrunkInterfaceAssociations(
    args: DescribeTrunkInterfaceAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrunkInterfaceAssociationsCommandOutput>;
  describeTrunkInterfaceAssociations(
    args: DescribeTrunkInterfaceAssociationsCommandInput,
    cb: (err: any, data?: DescribeTrunkInterfaceAssociationsCommandOutput) => void
  ): void;
  describeTrunkInterfaceAssociations(
    args: DescribeTrunkInterfaceAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrunkInterfaceAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVerifiedAccessEndpointsCommand}
   */
  describeVerifiedAccessEndpoints(): Promise<DescribeVerifiedAccessEndpointsCommandOutput>;
  describeVerifiedAccessEndpoints(
    args: DescribeVerifiedAccessEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVerifiedAccessEndpointsCommandOutput>;
  describeVerifiedAccessEndpoints(
    args: DescribeVerifiedAccessEndpointsCommandInput,
    cb: (err: any, data?: DescribeVerifiedAccessEndpointsCommandOutput) => void
  ): void;
  describeVerifiedAccessEndpoints(
    args: DescribeVerifiedAccessEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVerifiedAccessEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVerifiedAccessGroupsCommand}
   */
  describeVerifiedAccessGroups(): Promise<DescribeVerifiedAccessGroupsCommandOutput>;
  describeVerifiedAccessGroups(
    args: DescribeVerifiedAccessGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVerifiedAccessGroupsCommandOutput>;
  describeVerifiedAccessGroups(
    args: DescribeVerifiedAccessGroupsCommandInput,
    cb: (err: any, data?: DescribeVerifiedAccessGroupsCommandOutput) => void
  ): void;
  describeVerifiedAccessGroups(
    args: DescribeVerifiedAccessGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVerifiedAccessGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVerifiedAccessInstanceLoggingConfigurationsCommand}
   */
  describeVerifiedAccessInstanceLoggingConfigurations(): Promise<DescribeVerifiedAccessInstanceLoggingConfigurationsCommandOutput>;
  describeVerifiedAccessInstanceLoggingConfigurations(
    args: DescribeVerifiedAccessInstanceLoggingConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVerifiedAccessInstanceLoggingConfigurationsCommandOutput>;
  describeVerifiedAccessInstanceLoggingConfigurations(
    args: DescribeVerifiedAccessInstanceLoggingConfigurationsCommandInput,
    cb: (err: any, data?: DescribeVerifiedAccessInstanceLoggingConfigurationsCommandOutput) => void
  ): void;
  describeVerifiedAccessInstanceLoggingConfigurations(
    args: DescribeVerifiedAccessInstanceLoggingConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVerifiedAccessInstanceLoggingConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVerifiedAccessInstancesCommand}
   */
  describeVerifiedAccessInstances(): Promise<DescribeVerifiedAccessInstancesCommandOutput>;
  describeVerifiedAccessInstances(
    args: DescribeVerifiedAccessInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVerifiedAccessInstancesCommandOutput>;
  describeVerifiedAccessInstances(
    args: DescribeVerifiedAccessInstancesCommandInput,
    cb: (err: any, data?: DescribeVerifiedAccessInstancesCommandOutput) => void
  ): void;
  describeVerifiedAccessInstances(
    args: DescribeVerifiedAccessInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVerifiedAccessInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVerifiedAccessTrustProvidersCommand}
   */
  describeVerifiedAccessTrustProviders(): Promise<DescribeVerifiedAccessTrustProvidersCommandOutput>;
  describeVerifiedAccessTrustProviders(
    args: DescribeVerifiedAccessTrustProvidersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVerifiedAccessTrustProvidersCommandOutput>;
  describeVerifiedAccessTrustProviders(
    args: DescribeVerifiedAccessTrustProvidersCommandInput,
    cb: (err: any, data?: DescribeVerifiedAccessTrustProvidersCommandOutput) => void
  ): void;
  describeVerifiedAccessTrustProviders(
    args: DescribeVerifiedAccessTrustProvidersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVerifiedAccessTrustProvidersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVolumeAttributeCommand}
   */
  describeVolumeAttribute(
    args: DescribeVolumeAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVolumeAttributeCommandOutput>;
  describeVolumeAttribute(
    args: DescribeVolumeAttributeCommandInput,
    cb: (err: any, data?: DescribeVolumeAttributeCommandOutput) => void
  ): void;
  describeVolumeAttribute(
    args: DescribeVolumeAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVolumeAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVolumesCommand}
   */
  describeVolumes(): Promise<DescribeVolumesCommandOutput>;
  describeVolumes(
    args: DescribeVolumesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVolumesCommandOutput>;
  describeVolumes(args: DescribeVolumesCommandInput, cb: (err: any, data?: DescribeVolumesCommandOutput) => void): void;
  describeVolumes(
    args: DescribeVolumesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVolumesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVolumesModificationsCommand}
   */
  describeVolumesModifications(): Promise<DescribeVolumesModificationsCommandOutput>;
  describeVolumesModifications(
    args: DescribeVolumesModificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVolumesModificationsCommandOutput>;
  describeVolumesModifications(
    args: DescribeVolumesModificationsCommandInput,
    cb: (err: any, data?: DescribeVolumesModificationsCommandOutput) => void
  ): void;
  describeVolumesModifications(
    args: DescribeVolumesModificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVolumesModificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVolumeStatusCommand}
   */
  describeVolumeStatus(): Promise<DescribeVolumeStatusCommandOutput>;
  describeVolumeStatus(
    args: DescribeVolumeStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVolumeStatusCommandOutput>;
  describeVolumeStatus(
    args: DescribeVolumeStatusCommandInput,
    cb: (err: any, data?: DescribeVolumeStatusCommandOutput) => void
  ): void;
  describeVolumeStatus(
    args: DescribeVolumeStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVolumeStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVpcAttributeCommand}
   */
  describeVpcAttribute(
    args: DescribeVpcAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcAttributeCommandOutput>;
  describeVpcAttribute(
    args: DescribeVpcAttributeCommandInput,
    cb: (err: any, data?: DescribeVpcAttributeCommandOutput) => void
  ): void;
  describeVpcAttribute(
    args: DescribeVpcAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVpcBlockPublicAccessExclusionsCommand}
   */
  describeVpcBlockPublicAccessExclusions(): Promise<DescribeVpcBlockPublicAccessExclusionsCommandOutput>;
  describeVpcBlockPublicAccessExclusions(
    args: DescribeVpcBlockPublicAccessExclusionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcBlockPublicAccessExclusionsCommandOutput>;
  describeVpcBlockPublicAccessExclusions(
    args: DescribeVpcBlockPublicAccessExclusionsCommandInput,
    cb: (err: any, data?: DescribeVpcBlockPublicAccessExclusionsCommandOutput) => void
  ): void;
  describeVpcBlockPublicAccessExclusions(
    args: DescribeVpcBlockPublicAccessExclusionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcBlockPublicAccessExclusionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVpcBlockPublicAccessOptionsCommand}
   */
  describeVpcBlockPublicAccessOptions(): Promise<DescribeVpcBlockPublicAccessOptionsCommandOutput>;
  describeVpcBlockPublicAccessOptions(
    args: DescribeVpcBlockPublicAccessOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcBlockPublicAccessOptionsCommandOutput>;
  describeVpcBlockPublicAccessOptions(
    args: DescribeVpcBlockPublicAccessOptionsCommandInput,
    cb: (err: any, data?: DescribeVpcBlockPublicAccessOptionsCommandOutput) => void
  ): void;
  describeVpcBlockPublicAccessOptions(
    args: DescribeVpcBlockPublicAccessOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcBlockPublicAccessOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVpcClassicLinkCommand}
   */
  describeVpcClassicLink(): Promise<DescribeVpcClassicLinkCommandOutput>;
  describeVpcClassicLink(
    args: DescribeVpcClassicLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcClassicLinkCommandOutput>;
  describeVpcClassicLink(
    args: DescribeVpcClassicLinkCommandInput,
    cb: (err: any, data?: DescribeVpcClassicLinkCommandOutput) => void
  ): void;
  describeVpcClassicLink(
    args: DescribeVpcClassicLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcClassicLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVpcClassicLinkDnsSupportCommand}
   */
  describeVpcClassicLinkDnsSupport(): Promise<DescribeVpcClassicLinkDnsSupportCommandOutput>;
  describeVpcClassicLinkDnsSupport(
    args: DescribeVpcClassicLinkDnsSupportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcClassicLinkDnsSupportCommandOutput>;
  describeVpcClassicLinkDnsSupport(
    args: DescribeVpcClassicLinkDnsSupportCommandInput,
    cb: (err: any, data?: DescribeVpcClassicLinkDnsSupportCommandOutput) => void
  ): void;
  describeVpcClassicLinkDnsSupport(
    args: DescribeVpcClassicLinkDnsSupportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcClassicLinkDnsSupportCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVpcEndpointAssociationsCommand}
   */
  describeVpcEndpointAssociations(): Promise<DescribeVpcEndpointAssociationsCommandOutput>;
  describeVpcEndpointAssociations(
    args: DescribeVpcEndpointAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcEndpointAssociationsCommandOutput>;
  describeVpcEndpointAssociations(
    args: DescribeVpcEndpointAssociationsCommandInput,
    cb: (err: any, data?: DescribeVpcEndpointAssociationsCommandOutput) => void
  ): void;
  describeVpcEndpointAssociations(
    args: DescribeVpcEndpointAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcEndpointAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVpcEndpointConnectionNotificationsCommand}
   */
  describeVpcEndpointConnectionNotifications(): Promise<DescribeVpcEndpointConnectionNotificationsCommandOutput>;
  describeVpcEndpointConnectionNotifications(
    args: DescribeVpcEndpointConnectionNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcEndpointConnectionNotificationsCommandOutput>;
  describeVpcEndpointConnectionNotifications(
    args: DescribeVpcEndpointConnectionNotificationsCommandInput,
    cb: (err: any, data?: DescribeVpcEndpointConnectionNotificationsCommandOutput) => void
  ): void;
  describeVpcEndpointConnectionNotifications(
    args: DescribeVpcEndpointConnectionNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcEndpointConnectionNotificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVpcEndpointConnectionsCommand}
   */
  describeVpcEndpointConnections(): Promise<DescribeVpcEndpointConnectionsCommandOutput>;
  describeVpcEndpointConnections(
    args: DescribeVpcEndpointConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcEndpointConnectionsCommandOutput>;
  describeVpcEndpointConnections(
    args: DescribeVpcEndpointConnectionsCommandInput,
    cb: (err: any, data?: DescribeVpcEndpointConnectionsCommandOutput) => void
  ): void;
  describeVpcEndpointConnections(
    args: DescribeVpcEndpointConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcEndpointConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVpcEndpointsCommand}
   */
  describeVpcEndpoints(): Promise<DescribeVpcEndpointsCommandOutput>;
  describeVpcEndpoints(
    args: DescribeVpcEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcEndpointsCommandOutput>;
  describeVpcEndpoints(
    args: DescribeVpcEndpointsCommandInput,
    cb: (err: any, data?: DescribeVpcEndpointsCommandOutput) => void
  ): void;
  describeVpcEndpoints(
    args: DescribeVpcEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVpcEndpointServiceConfigurationsCommand}
   */
  describeVpcEndpointServiceConfigurations(): Promise<DescribeVpcEndpointServiceConfigurationsCommandOutput>;
  describeVpcEndpointServiceConfigurations(
    args: DescribeVpcEndpointServiceConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcEndpointServiceConfigurationsCommandOutput>;
  describeVpcEndpointServiceConfigurations(
    args: DescribeVpcEndpointServiceConfigurationsCommandInput,
    cb: (err: any, data?: DescribeVpcEndpointServiceConfigurationsCommandOutput) => void
  ): void;
  describeVpcEndpointServiceConfigurations(
    args: DescribeVpcEndpointServiceConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcEndpointServiceConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVpcEndpointServicePermissionsCommand}
   */
  describeVpcEndpointServicePermissions(
    args: DescribeVpcEndpointServicePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcEndpointServicePermissionsCommandOutput>;
  describeVpcEndpointServicePermissions(
    args: DescribeVpcEndpointServicePermissionsCommandInput,
    cb: (err: any, data?: DescribeVpcEndpointServicePermissionsCommandOutput) => void
  ): void;
  describeVpcEndpointServicePermissions(
    args: DescribeVpcEndpointServicePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcEndpointServicePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVpcEndpointServicesCommand}
   */
  describeVpcEndpointServices(): Promise<DescribeVpcEndpointServicesCommandOutput>;
  describeVpcEndpointServices(
    args: DescribeVpcEndpointServicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcEndpointServicesCommandOutput>;
  describeVpcEndpointServices(
    args: DescribeVpcEndpointServicesCommandInput,
    cb: (err: any, data?: DescribeVpcEndpointServicesCommandOutput) => void
  ): void;
  describeVpcEndpointServices(
    args: DescribeVpcEndpointServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcEndpointServicesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVpcPeeringConnectionsCommand}
   */
  describeVpcPeeringConnections(): Promise<DescribeVpcPeeringConnectionsCommandOutput>;
  describeVpcPeeringConnections(
    args: DescribeVpcPeeringConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcPeeringConnectionsCommandOutput>;
  describeVpcPeeringConnections(
    args: DescribeVpcPeeringConnectionsCommandInput,
    cb: (err: any, data?: DescribeVpcPeeringConnectionsCommandOutput) => void
  ): void;
  describeVpcPeeringConnections(
    args: DescribeVpcPeeringConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcPeeringConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVpcsCommand}
   */
  describeVpcs(): Promise<DescribeVpcsCommandOutput>;
  describeVpcs(args: DescribeVpcsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeVpcsCommandOutput>;
  describeVpcs(args: DescribeVpcsCommandInput, cb: (err: any, data?: DescribeVpcsCommandOutput) => void): void;
  describeVpcs(
    args: DescribeVpcsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVpnConnectionsCommand}
   */
  describeVpnConnections(): Promise<DescribeVpnConnectionsCommandOutput>;
  describeVpnConnections(
    args: DescribeVpnConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpnConnectionsCommandOutput>;
  describeVpnConnections(
    args: DescribeVpnConnectionsCommandInput,
    cb: (err: any, data?: DescribeVpnConnectionsCommandOutput) => void
  ): void;
  describeVpnConnections(
    args: DescribeVpnConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpnConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVpnGatewaysCommand}
   */
  describeVpnGateways(): Promise<DescribeVpnGatewaysCommandOutput>;
  describeVpnGateways(
    args: DescribeVpnGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpnGatewaysCommandOutput>;
  describeVpnGateways(
    args: DescribeVpnGatewaysCommandInput,
    cb: (err: any, data?: DescribeVpnGatewaysCommandOutput) => void
  ): void;
  describeVpnGateways(
    args: DescribeVpnGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpnGatewaysCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachClassicLinkVpcCommand}
   */
  detachClassicLinkVpc(
    args: DetachClassicLinkVpcCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachClassicLinkVpcCommandOutput>;
  detachClassicLinkVpc(
    args: DetachClassicLinkVpcCommandInput,
    cb: (err: any, data?: DetachClassicLinkVpcCommandOutput) => void
  ): void;
  detachClassicLinkVpc(
    args: DetachClassicLinkVpcCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachClassicLinkVpcCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachInternetGatewayCommand}
   */
  detachInternetGateway(
    args: DetachInternetGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachInternetGatewayCommandOutput>;
  detachInternetGateway(
    args: DetachInternetGatewayCommandInput,
    cb: (err: any, data?: DetachInternetGatewayCommandOutput) => void
  ): void;
  detachInternetGateway(
    args: DetachInternetGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachInternetGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachNetworkInterfaceCommand}
   */
  detachNetworkInterface(
    args: DetachNetworkInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachNetworkInterfaceCommandOutput>;
  detachNetworkInterface(
    args: DetachNetworkInterfaceCommandInput,
    cb: (err: any, data?: DetachNetworkInterfaceCommandOutput) => void
  ): void;
  detachNetworkInterface(
    args: DetachNetworkInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachNetworkInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachVerifiedAccessTrustProviderCommand}
   */
  detachVerifiedAccessTrustProvider(
    args: DetachVerifiedAccessTrustProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachVerifiedAccessTrustProviderCommandOutput>;
  detachVerifiedAccessTrustProvider(
    args: DetachVerifiedAccessTrustProviderCommandInput,
    cb: (err: any, data?: DetachVerifiedAccessTrustProviderCommandOutput) => void
  ): void;
  detachVerifiedAccessTrustProvider(
    args: DetachVerifiedAccessTrustProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachVerifiedAccessTrustProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachVolumeCommand}
   */
  detachVolume(args: DetachVolumeCommandInput, options?: __HttpHandlerOptions): Promise<DetachVolumeCommandOutput>;
  detachVolume(args: DetachVolumeCommandInput, cb: (err: any, data?: DetachVolumeCommandOutput) => void): void;
  detachVolume(
    args: DetachVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachVpnGatewayCommand}
   */
  detachVpnGateway(
    args: DetachVpnGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachVpnGatewayCommandOutput>;
  detachVpnGateway(
    args: DetachVpnGatewayCommandInput,
    cb: (err: any, data?: DetachVpnGatewayCommandOutput) => void
  ): void;
  detachVpnGateway(
    args: DetachVpnGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachVpnGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableAddressTransferCommand}
   */
  disableAddressTransfer(
    args: DisableAddressTransferCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableAddressTransferCommandOutput>;
  disableAddressTransfer(
    args: DisableAddressTransferCommandInput,
    cb: (err: any, data?: DisableAddressTransferCommandOutput) => void
  ): void;
  disableAddressTransfer(
    args: DisableAddressTransferCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableAddressTransferCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableAllowedImagesSettingsCommand}
   */
  disableAllowedImagesSettings(): Promise<DisableAllowedImagesSettingsCommandOutput>;
  disableAllowedImagesSettings(
    args: DisableAllowedImagesSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableAllowedImagesSettingsCommandOutput>;
  disableAllowedImagesSettings(
    args: DisableAllowedImagesSettingsCommandInput,
    cb: (err: any, data?: DisableAllowedImagesSettingsCommandOutput) => void
  ): void;
  disableAllowedImagesSettings(
    args: DisableAllowedImagesSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableAllowedImagesSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableAwsNetworkPerformanceMetricSubscriptionCommand}
   */
  disableAwsNetworkPerformanceMetricSubscription(): Promise<DisableAwsNetworkPerformanceMetricSubscriptionCommandOutput>;
  disableAwsNetworkPerformanceMetricSubscription(
    args: DisableAwsNetworkPerformanceMetricSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableAwsNetworkPerformanceMetricSubscriptionCommandOutput>;
  disableAwsNetworkPerformanceMetricSubscription(
    args: DisableAwsNetworkPerformanceMetricSubscriptionCommandInput,
    cb: (err: any, data?: DisableAwsNetworkPerformanceMetricSubscriptionCommandOutput) => void
  ): void;
  disableAwsNetworkPerformanceMetricSubscription(
    args: DisableAwsNetworkPerformanceMetricSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableAwsNetworkPerformanceMetricSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableEbsEncryptionByDefaultCommand}
   */
  disableEbsEncryptionByDefault(): Promise<DisableEbsEncryptionByDefaultCommandOutput>;
  disableEbsEncryptionByDefault(
    args: DisableEbsEncryptionByDefaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableEbsEncryptionByDefaultCommandOutput>;
  disableEbsEncryptionByDefault(
    args: DisableEbsEncryptionByDefaultCommandInput,
    cb: (err: any, data?: DisableEbsEncryptionByDefaultCommandOutput) => void
  ): void;
  disableEbsEncryptionByDefault(
    args: DisableEbsEncryptionByDefaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableEbsEncryptionByDefaultCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableFastLaunchCommand}
   */
  disableFastLaunch(
    args: DisableFastLaunchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableFastLaunchCommandOutput>;
  disableFastLaunch(
    args: DisableFastLaunchCommandInput,
    cb: (err: any, data?: DisableFastLaunchCommandOutput) => void
  ): void;
  disableFastLaunch(
    args: DisableFastLaunchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableFastLaunchCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableFastSnapshotRestoresCommand}
   */
  disableFastSnapshotRestores(
    args: DisableFastSnapshotRestoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableFastSnapshotRestoresCommandOutput>;
  disableFastSnapshotRestores(
    args: DisableFastSnapshotRestoresCommandInput,
    cb: (err: any, data?: DisableFastSnapshotRestoresCommandOutput) => void
  ): void;
  disableFastSnapshotRestores(
    args: DisableFastSnapshotRestoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableFastSnapshotRestoresCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableImageCommand}
   */
  disableImage(args: DisableImageCommandInput, options?: __HttpHandlerOptions): Promise<DisableImageCommandOutput>;
  disableImage(args: DisableImageCommandInput, cb: (err: any, data?: DisableImageCommandOutput) => void): void;
  disableImage(
    args: DisableImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableImageCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableImageBlockPublicAccessCommand}
   */
  disableImageBlockPublicAccess(): Promise<DisableImageBlockPublicAccessCommandOutput>;
  disableImageBlockPublicAccess(
    args: DisableImageBlockPublicAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableImageBlockPublicAccessCommandOutput>;
  disableImageBlockPublicAccess(
    args: DisableImageBlockPublicAccessCommandInput,
    cb: (err: any, data?: DisableImageBlockPublicAccessCommandOutput) => void
  ): void;
  disableImageBlockPublicAccess(
    args: DisableImageBlockPublicAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableImageBlockPublicAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableImageDeprecationCommand}
   */
  disableImageDeprecation(
    args: DisableImageDeprecationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableImageDeprecationCommandOutput>;
  disableImageDeprecation(
    args: DisableImageDeprecationCommandInput,
    cb: (err: any, data?: DisableImageDeprecationCommandOutput) => void
  ): void;
  disableImageDeprecation(
    args: DisableImageDeprecationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableImageDeprecationCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableImageDeregistrationProtectionCommand}
   */
  disableImageDeregistrationProtection(
    args: DisableImageDeregistrationProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableImageDeregistrationProtectionCommandOutput>;
  disableImageDeregistrationProtection(
    args: DisableImageDeregistrationProtectionCommandInput,
    cb: (err: any, data?: DisableImageDeregistrationProtectionCommandOutput) => void
  ): void;
  disableImageDeregistrationProtection(
    args: DisableImageDeregistrationProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableImageDeregistrationProtectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableIpamOrganizationAdminAccountCommand}
   */
  disableIpamOrganizationAdminAccount(
    args: DisableIpamOrganizationAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableIpamOrganizationAdminAccountCommandOutput>;
  disableIpamOrganizationAdminAccount(
    args: DisableIpamOrganizationAdminAccountCommandInput,
    cb: (err: any, data?: DisableIpamOrganizationAdminAccountCommandOutput) => void
  ): void;
  disableIpamOrganizationAdminAccount(
    args: DisableIpamOrganizationAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableIpamOrganizationAdminAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableRouteServerPropagationCommand}
   */
  disableRouteServerPropagation(
    args: DisableRouteServerPropagationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableRouteServerPropagationCommandOutput>;
  disableRouteServerPropagation(
    args: DisableRouteServerPropagationCommandInput,
    cb: (err: any, data?: DisableRouteServerPropagationCommandOutput) => void
  ): void;
  disableRouteServerPropagation(
    args: DisableRouteServerPropagationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableRouteServerPropagationCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableSerialConsoleAccessCommand}
   */
  disableSerialConsoleAccess(): Promise<DisableSerialConsoleAccessCommandOutput>;
  disableSerialConsoleAccess(
    args: DisableSerialConsoleAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableSerialConsoleAccessCommandOutput>;
  disableSerialConsoleAccess(
    args: DisableSerialConsoleAccessCommandInput,
    cb: (err: any, data?: DisableSerialConsoleAccessCommandOutput) => void
  ): void;
  disableSerialConsoleAccess(
    args: DisableSerialConsoleAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableSerialConsoleAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableSnapshotBlockPublicAccessCommand}
   */
  disableSnapshotBlockPublicAccess(): Promise<DisableSnapshotBlockPublicAccessCommandOutput>;
  disableSnapshotBlockPublicAccess(
    args: DisableSnapshotBlockPublicAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableSnapshotBlockPublicAccessCommandOutput>;
  disableSnapshotBlockPublicAccess(
    args: DisableSnapshotBlockPublicAccessCommandInput,
    cb: (err: any, data?: DisableSnapshotBlockPublicAccessCommandOutput) => void
  ): void;
  disableSnapshotBlockPublicAccess(
    args: DisableSnapshotBlockPublicAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableSnapshotBlockPublicAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableTransitGatewayRouteTablePropagationCommand}
   */
  disableTransitGatewayRouteTablePropagation(
    args: DisableTransitGatewayRouteTablePropagationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableTransitGatewayRouteTablePropagationCommandOutput>;
  disableTransitGatewayRouteTablePropagation(
    args: DisableTransitGatewayRouteTablePropagationCommandInput,
    cb: (err: any, data?: DisableTransitGatewayRouteTablePropagationCommandOutput) => void
  ): void;
  disableTransitGatewayRouteTablePropagation(
    args: DisableTransitGatewayRouteTablePropagationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableTransitGatewayRouteTablePropagationCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableVgwRoutePropagationCommand}
   */
  disableVgwRoutePropagation(
    args: DisableVgwRoutePropagationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableVgwRoutePropagationCommandOutput>;
  disableVgwRoutePropagation(
    args: DisableVgwRoutePropagationCommandInput,
    cb: (err: any, data?: DisableVgwRoutePropagationCommandOutput) => void
  ): void;
  disableVgwRoutePropagation(
    args: DisableVgwRoutePropagationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableVgwRoutePropagationCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableVpcClassicLinkCommand}
   */
  disableVpcClassicLink(
    args: DisableVpcClassicLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableVpcClassicLinkCommandOutput>;
  disableVpcClassicLink(
    args: DisableVpcClassicLinkCommandInput,
    cb: (err: any, data?: DisableVpcClassicLinkCommandOutput) => void
  ): void;
  disableVpcClassicLink(
    args: DisableVpcClassicLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableVpcClassicLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableVpcClassicLinkDnsSupportCommand}
   */
  disableVpcClassicLinkDnsSupport(): Promise<DisableVpcClassicLinkDnsSupportCommandOutput>;
  disableVpcClassicLinkDnsSupport(
    args: DisableVpcClassicLinkDnsSupportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableVpcClassicLinkDnsSupportCommandOutput>;
  disableVpcClassicLinkDnsSupport(
    args: DisableVpcClassicLinkDnsSupportCommandInput,
    cb: (err: any, data?: DisableVpcClassicLinkDnsSupportCommandOutput) => void
  ): void;
  disableVpcClassicLinkDnsSupport(
    args: DisableVpcClassicLinkDnsSupportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableVpcClassicLinkDnsSupportCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateAddressCommand}
   */
  disassociateAddress(): Promise<DisassociateAddressCommandOutput>;
  disassociateAddress(
    args: DisassociateAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateAddressCommandOutput>;
  disassociateAddress(
    args: DisassociateAddressCommandInput,
    cb: (err: any, data?: DisassociateAddressCommandOutput) => void
  ): void;
  disassociateAddress(
    args: DisassociateAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateAddressCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateCapacityReservationBillingOwnerCommand}
   */
  disassociateCapacityReservationBillingOwner(
    args: DisassociateCapacityReservationBillingOwnerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateCapacityReservationBillingOwnerCommandOutput>;
  disassociateCapacityReservationBillingOwner(
    args: DisassociateCapacityReservationBillingOwnerCommandInput,
    cb: (err: any, data?: DisassociateCapacityReservationBillingOwnerCommandOutput) => void
  ): void;
  disassociateCapacityReservationBillingOwner(
    args: DisassociateCapacityReservationBillingOwnerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateCapacityReservationBillingOwnerCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateClientVpnTargetNetworkCommand}
   */
  disassociateClientVpnTargetNetwork(
    args: DisassociateClientVpnTargetNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateClientVpnTargetNetworkCommandOutput>;
  disassociateClientVpnTargetNetwork(
    args: DisassociateClientVpnTargetNetworkCommandInput,
    cb: (err: any, data?: DisassociateClientVpnTargetNetworkCommandOutput) => void
  ): void;
  disassociateClientVpnTargetNetwork(
    args: DisassociateClientVpnTargetNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateClientVpnTargetNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateEnclaveCertificateIamRoleCommand}
   */
  disassociateEnclaveCertificateIamRole(
    args: DisassociateEnclaveCertificateIamRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateEnclaveCertificateIamRoleCommandOutput>;
  disassociateEnclaveCertificateIamRole(
    args: DisassociateEnclaveCertificateIamRoleCommandInput,
    cb: (err: any, data?: DisassociateEnclaveCertificateIamRoleCommandOutput) => void
  ): void;
  disassociateEnclaveCertificateIamRole(
    args: DisassociateEnclaveCertificateIamRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateEnclaveCertificateIamRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateIamInstanceProfileCommand}
   */
  disassociateIamInstanceProfile(
    args: DisassociateIamInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateIamInstanceProfileCommandOutput>;
  disassociateIamInstanceProfile(
    args: DisassociateIamInstanceProfileCommandInput,
    cb: (err: any, data?: DisassociateIamInstanceProfileCommandOutput) => void
  ): void;
  disassociateIamInstanceProfile(
    args: DisassociateIamInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateIamInstanceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateInstanceEventWindowCommand}
   */
  disassociateInstanceEventWindow(
    args: DisassociateInstanceEventWindowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateInstanceEventWindowCommandOutput>;
  disassociateInstanceEventWindow(
    args: DisassociateInstanceEventWindowCommandInput,
    cb: (err: any, data?: DisassociateInstanceEventWindowCommandOutput) => void
  ): void;
  disassociateInstanceEventWindow(
    args: DisassociateInstanceEventWindowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateInstanceEventWindowCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateIpamByoasnCommand}
   */
  disassociateIpamByoasn(
    args: DisassociateIpamByoasnCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateIpamByoasnCommandOutput>;
  disassociateIpamByoasn(
    args: DisassociateIpamByoasnCommandInput,
    cb: (err: any, data?: DisassociateIpamByoasnCommandOutput) => void
  ): void;
  disassociateIpamByoasn(
    args: DisassociateIpamByoasnCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateIpamByoasnCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateIpamResourceDiscoveryCommand}
   */
  disassociateIpamResourceDiscovery(
    args: DisassociateIpamResourceDiscoveryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateIpamResourceDiscoveryCommandOutput>;
  disassociateIpamResourceDiscovery(
    args: DisassociateIpamResourceDiscoveryCommandInput,
    cb: (err: any, data?: DisassociateIpamResourceDiscoveryCommandOutput) => void
  ): void;
  disassociateIpamResourceDiscovery(
    args: DisassociateIpamResourceDiscoveryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateIpamResourceDiscoveryCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateNatGatewayAddressCommand}
   */
  disassociateNatGatewayAddress(
    args: DisassociateNatGatewayAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateNatGatewayAddressCommandOutput>;
  disassociateNatGatewayAddress(
    args: DisassociateNatGatewayAddressCommandInput,
    cb: (err: any, data?: DisassociateNatGatewayAddressCommandOutput) => void
  ): void;
  disassociateNatGatewayAddress(
    args: DisassociateNatGatewayAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateNatGatewayAddressCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateRouteServerCommand}
   */
  disassociateRouteServer(
    args: DisassociateRouteServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateRouteServerCommandOutput>;
  disassociateRouteServer(
    args: DisassociateRouteServerCommandInput,
    cb: (err: any, data?: DisassociateRouteServerCommandOutput) => void
  ): void;
  disassociateRouteServer(
    args: DisassociateRouteServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateRouteServerCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateRouteTableCommand}
   */
  disassociateRouteTable(
    args: DisassociateRouteTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateRouteTableCommandOutput>;
  disassociateRouteTable(
    args: DisassociateRouteTableCommandInput,
    cb: (err: any, data?: DisassociateRouteTableCommandOutput) => void
  ): void;
  disassociateRouteTable(
    args: DisassociateRouteTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateRouteTableCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateSecurityGroupVpcCommand}
   */
  disassociateSecurityGroupVpc(
    args: DisassociateSecurityGroupVpcCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateSecurityGroupVpcCommandOutput>;
  disassociateSecurityGroupVpc(
    args: DisassociateSecurityGroupVpcCommandInput,
    cb: (err: any, data?: DisassociateSecurityGroupVpcCommandOutput) => void
  ): void;
  disassociateSecurityGroupVpc(
    args: DisassociateSecurityGroupVpcCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateSecurityGroupVpcCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateSubnetCidrBlockCommand}
   */
  disassociateSubnetCidrBlock(
    args: DisassociateSubnetCidrBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateSubnetCidrBlockCommandOutput>;
  disassociateSubnetCidrBlock(
    args: DisassociateSubnetCidrBlockCommandInput,
    cb: (err: any, data?: DisassociateSubnetCidrBlockCommandOutput) => void
  ): void;
  disassociateSubnetCidrBlock(
    args: DisassociateSubnetCidrBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateSubnetCidrBlockCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateTransitGatewayMulticastDomainCommand}
   */
  disassociateTransitGatewayMulticastDomain(
    args: DisassociateTransitGatewayMulticastDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateTransitGatewayMulticastDomainCommandOutput>;
  disassociateTransitGatewayMulticastDomain(
    args: DisassociateTransitGatewayMulticastDomainCommandInput,
    cb: (err: any, data?: DisassociateTransitGatewayMulticastDomainCommandOutput) => void
  ): void;
  disassociateTransitGatewayMulticastDomain(
    args: DisassociateTransitGatewayMulticastDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateTransitGatewayMulticastDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateTransitGatewayPolicyTableCommand}
   */
  disassociateTransitGatewayPolicyTable(
    args: DisassociateTransitGatewayPolicyTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateTransitGatewayPolicyTableCommandOutput>;
  disassociateTransitGatewayPolicyTable(
    args: DisassociateTransitGatewayPolicyTableCommandInput,
    cb: (err: any, data?: DisassociateTransitGatewayPolicyTableCommandOutput) => void
  ): void;
  disassociateTransitGatewayPolicyTable(
    args: DisassociateTransitGatewayPolicyTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateTransitGatewayPolicyTableCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateTransitGatewayRouteTableCommand}
   */
  disassociateTransitGatewayRouteTable(
    args: DisassociateTransitGatewayRouteTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateTransitGatewayRouteTableCommandOutput>;
  disassociateTransitGatewayRouteTable(
    args: DisassociateTransitGatewayRouteTableCommandInput,
    cb: (err: any, data?: DisassociateTransitGatewayRouteTableCommandOutput) => void
  ): void;
  disassociateTransitGatewayRouteTable(
    args: DisassociateTransitGatewayRouteTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateTransitGatewayRouteTableCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateTrunkInterfaceCommand}
   */
  disassociateTrunkInterface(
    args: DisassociateTrunkInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateTrunkInterfaceCommandOutput>;
  disassociateTrunkInterface(
    args: DisassociateTrunkInterfaceCommandInput,
    cb: (err: any, data?: DisassociateTrunkInterfaceCommandOutput) => void
  ): void;
  disassociateTrunkInterface(
    args: DisassociateTrunkInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateTrunkInterfaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateVpcCidrBlockCommand}
   */
  disassociateVpcCidrBlock(
    args: DisassociateVpcCidrBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateVpcCidrBlockCommandOutput>;
  disassociateVpcCidrBlock(
    args: DisassociateVpcCidrBlockCommandInput,
    cb: (err: any, data?: DisassociateVpcCidrBlockCommandOutput) => void
  ): void;
  disassociateVpcCidrBlock(
    args: DisassociateVpcCidrBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateVpcCidrBlockCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableAddressTransferCommand}
   */
  enableAddressTransfer(
    args: EnableAddressTransferCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableAddressTransferCommandOutput>;
  enableAddressTransfer(
    args: EnableAddressTransferCommandInput,
    cb: (err: any, data?: EnableAddressTransferCommandOutput) => void
  ): void;
  enableAddressTransfer(
    args: EnableAddressTransferCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableAddressTransferCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableAllowedImagesSettingsCommand}
   */
  enableAllowedImagesSettings(
    args: EnableAllowedImagesSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableAllowedImagesSettingsCommandOutput>;
  enableAllowedImagesSettings(
    args: EnableAllowedImagesSettingsCommandInput,
    cb: (err: any, data?: EnableAllowedImagesSettingsCommandOutput) => void
  ): void;
  enableAllowedImagesSettings(
    args: EnableAllowedImagesSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableAllowedImagesSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableAwsNetworkPerformanceMetricSubscriptionCommand}
   */
  enableAwsNetworkPerformanceMetricSubscription(): Promise<EnableAwsNetworkPerformanceMetricSubscriptionCommandOutput>;
  enableAwsNetworkPerformanceMetricSubscription(
    args: EnableAwsNetworkPerformanceMetricSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableAwsNetworkPerformanceMetricSubscriptionCommandOutput>;
  enableAwsNetworkPerformanceMetricSubscription(
    args: EnableAwsNetworkPerformanceMetricSubscriptionCommandInput,
    cb: (err: any, data?: EnableAwsNetworkPerformanceMetricSubscriptionCommandOutput) => void
  ): void;
  enableAwsNetworkPerformanceMetricSubscription(
    args: EnableAwsNetworkPerformanceMetricSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableAwsNetworkPerformanceMetricSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableEbsEncryptionByDefaultCommand}
   */
  enableEbsEncryptionByDefault(): Promise<EnableEbsEncryptionByDefaultCommandOutput>;
  enableEbsEncryptionByDefault(
    args: EnableEbsEncryptionByDefaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableEbsEncryptionByDefaultCommandOutput>;
  enableEbsEncryptionByDefault(
    args: EnableEbsEncryptionByDefaultCommandInput,
    cb: (err: any, data?: EnableEbsEncryptionByDefaultCommandOutput) => void
  ): void;
  enableEbsEncryptionByDefault(
    args: EnableEbsEncryptionByDefaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableEbsEncryptionByDefaultCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableFastLaunchCommand}
   */
  enableFastLaunch(
    args: EnableFastLaunchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableFastLaunchCommandOutput>;
  enableFastLaunch(
    args: EnableFastLaunchCommandInput,
    cb: (err: any, data?: EnableFastLaunchCommandOutput) => void
  ): void;
  enableFastLaunch(
    args: EnableFastLaunchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableFastLaunchCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableFastSnapshotRestoresCommand}
   */
  enableFastSnapshotRestores(
    args: EnableFastSnapshotRestoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableFastSnapshotRestoresCommandOutput>;
  enableFastSnapshotRestores(
    args: EnableFastSnapshotRestoresCommandInput,
    cb: (err: any, data?: EnableFastSnapshotRestoresCommandOutput) => void
  ): void;
  enableFastSnapshotRestores(
    args: EnableFastSnapshotRestoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableFastSnapshotRestoresCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableImageCommand}
   */
  enableImage(args: EnableImageCommandInput, options?: __HttpHandlerOptions): Promise<EnableImageCommandOutput>;
  enableImage(args: EnableImageCommandInput, cb: (err: any, data?: EnableImageCommandOutput) => void): void;
  enableImage(
    args: EnableImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableImageCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableImageBlockPublicAccessCommand}
   */
  enableImageBlockPublicAccess(
    args: EnableImageBlockPublicAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableImageBlockPublicAccessCommandOutput>;
  enableImageBlockPublicAccess(
    args: EnableImageBlockPublicAccessCommandInput,
    cb: (err: any, data?: EnableImageBlockPublicAccessCommandOutput) => void
  ): void;
  enableImageBlockPublicAccess(
    args: EnableImageBlockPublicAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableImageBlockPublicAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableImageDeprecationCommand}
   */
  enableImageDeprecation(
    args: EnableImageDeprecationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableImageDeprecationCommandOutput>;
  enableImageDeprecation(
    args: EnableImageDeprecationCommandInput,
    cb: (err: any, data?: EnableImageDeprecationCommandOutput) => void
  ): void;
  enableImageDeprecation(
    args: EnableImageDeprecationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableImageDeprecationCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableImageDeregistrationProtectionCommand}
   */
  enableImageDeregistrationProtection(
    args: EnableImageDeregistrationProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableImageDeregistrationProtectionCommandOutput>;
  enableImageDeregistrationProtection(
    args: EnableImageDeregistrationProtectionCommandInput,
    cb: (err: any, data?: EnableImageDeregistrationProtectionCommandOutput) => void
  ): void;
  enableImageDeregistrationProtection(
    args: EnableImageDeregistrationProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableImageDeregistrationProtectionCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableIpamOrganizationAdminAccountCommand}
   */
  enableIpamOrganizationAdminAccount(
    args: EnableIpamOrganizationAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableIpamOrganizationAdminAccountCommandOutput>;
  enableIpamOrganizationAdminAccount(
    args: EnableIpamOrganizationAdminAccountCommandInput,
    cb: (err: any, data?: EnableIpamOrganizationAdminAccountCommandOutput) => void
  ): void;
  enableIpamOrganizationAdminAccount(
    args: EnableIpamOrganizationAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableIpamOrganizationAdminAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableReachabilityAnalyzerOrganizationSharingCommand}
   */
  enableReachabilityAnalyzerOrganizationSharing(): Promise<EnableReachabilityAnalyzerOrganizationSharingCommandOutput>;
  enableReachabilityAnalyzerOrganizationSharing(
    args: EnableReachabilityAnalyzerOrganizationSharingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableReachabilityAnalyzerOrganizationSharingCommandOutput>;
  enableReachabilityAnalyzerOrganizationSharing(
    args: EnableReachabilityAnalyzerOrganizationSharingCommandInput,
    cb: (err: any, data?: EnableReachabilityAnalyzerOrganizationSharingCommandOutput) => void
  ): void;
  enableReachabilityAnalyzerOrganizationSharing(
    args: EnableReachabilityAnalyzerOrganizationSharingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableReachabilityAnalyzerOrganizationSharingCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableRouteServerPropagationCommand}
   */
  enableRouteServerPropagation(
    args: EnableRouteServerPropagationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableRouteServerPropagationCommandOutput>;
  enableRouteServerPropagation(
    args: EnableRouteServerPropagationCommandInput,
    cb: (err: any, data?: EnableRouteServerPropagationCommandOutput) => void
  ): void;
  enableRouteServerPropagation(
    args: EnableRouteServerPropagationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableRouteServerPropagationCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableSerialConsoleAccessCommand}
   */
  enableSerialConsoleAccess(): Promise<EnableSerialConsoleAccessCommandOutput>;
  enableSerialConsoleAccess(
    args: EnableSerialConsoleAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableSerialConsoleAccessCommandOutput>;
  enableSerialConsoleAccess(
    args: EnableSerialConsoleAccessCommandInput,
    cb: (err: any, data?: EnableSerialConsoleAccessCommandOutput) => void
  ): void;
  enableSerialConsoleAccess(
    args: EnableSerialConsoleAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableSerialConsoleAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableSnapshotBlockPublicAccessCommand}
   */
  enableSnapshotBlockPublicAccess(
    args: EnableSnapshotBlockPublicAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableSnapshotBlockPublicAccessCommandOutput>;
  enableSnapshotBlockPublicAccess(
    args: EnableSnapshotBlockPublicAccessCommandInput,
    cb: (err: any, data?: EnableSnapshotBlockPublicAccessCommandOutput) => void
  ): void;
  enableSnapshotBlockPublicAccess(
    args: EnableSnapshotBlockPublicAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableSnapshotBlockPublicAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableTransitGatewayRouteTablePropagationCommand}
   */
  enableTransitGatewayRouteTablePropagation(
    args: EnableTransitGatewayRouteTablePropagationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableTransitGatewayRouteTablePropagationCommandOutput>;
  enableTransitGatewayRouteTablePropagation(
    args: EnableTransitGatewayRouteTablePropagationCommandInput,
    cb: (err: any, data?: EnableTransitGatewayRouteTablePropagationCommandOutput) => void
  ): void;
  enableTransitGatewayRouteTablePropagation(
    args: EnableTransitGatewayRouteTablePropagationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableTransitGatewayRouteTablePropagationCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableVgwRoutePropagationCommand}
   */
  enableVgwRoutePropagation(
    args: EnableVgwRoutePropagationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableVgwRoutePropagationCommandOutput>;
  enableVgwRoutePropagation(
    args: EnableVgwRoutePropagationCommandInput,
    cb: (err: any, data?: EnableVgwRoutePropagationCommandOutput) => void
  ): void;
  enableVgwRoutePropagation(
    args: EnableVgwRoutePropagationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableVgwRoutePropagationCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableVolumeIOCommand}
   */
  enableVolumeIO(
    args: EnableVolumeIOCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableVolumeIOCommandOutput>;
  enableVolumeIO(args: EnableVolumeIOCommandInput, cb: (err: any, data?: EnableVolumeIOCommandOutput) => void): void;
  enableVolumeIO(
    args: EnableVolumeIOCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableVolumeIOCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableVpcClassicLinkCommand}
   */
  enableVpcClassicLink(
    args: EnableVpcClassicLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableVpcClassicLinkCommandOutput>;
  enableVpcClassicLink(
    args: EnableVpcClassicLinkCommandInput,
    cb: (err: any, data?: EnableVpcClassicLinkCommandOutput) => void
  ): void;
  enableVpcClassicLink(
    args: EnableVpcClassicLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableVpcClassicLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableVpcClassicLinkDnsSupportCommand}
   */
  enableVpcClassicLinkDnsSupport(): Promise<EnableVpcClassicLinkDnsSupportCommandOutput>;
  enableVpcClassicLinkDnsSupport(
    args: EnableVpcClassicLinkDnsSupportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableVpcClassicLinkDnsSupportCommandOutput>;
  enableVpcClassicLinkDnsSupport(
    args: EnableVpcClassicLinkDnsSupportCommandInput,
    cb: (err: any, data?: EnableVpcClassicLinkDnsSupportCommandOutput) => void
  ): void;
  enableVpcClassicLinkDnsSupport(
    args: EnableVpcClassicLinkDnsSupportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableVpcClassicLinkDnsSupportCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportClientVpnClientCertificateRevocationListCommand}
   */
  exportClientVpnClientCertificateRevocationList(
    args: ExportClientVpnClientCertificateRevocationListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportClientVpnClientCertificateRevocationListCommandOutput>;
  exportClientVpnClientCertificateRevocationList(
    args: ExportClientVpnClientCertificateRevocationListCommandInput,
    cb: (err: any, data?: ExportClientVpnClientCertificateRevocationListCommandOutput) => void
  ): void;
  exportClientVpnClientCertificateRevocationList(
    args: ExportClientVpnClientCertificateRevocationListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportClientVpnClientCertificateRevocationListCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportClientVpnClientConfigurationCommand}
   */
  exportClientVpnClientConfiguration(
    args: ExportClientVpnClientConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportClientVpnClientConfigurationCommandOutput>;
  exportClientVpnClientConfiguration(
    args: ExportClientVpnClientConfigurationCommandInput,
    cb: (err: any, data?: ExportClientVpnClientConfigurationCommandOutput) => void
  ): void;
  exportClientVpnClientConfiguration(
    args: ExportClientVpnClientConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportClientVpnClientConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportImageCommand}
   */
  exportImage(args: ExportImageCommandInput, options?: __HttpHandlerOptions): Promise<ExportImageCommandOutput>;
  exportImage(args: ExportImageCommandInput, cb: (err: any, data?: ExportImageCommandOutput) => void): void;
  exportImage(
    args: ExportImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportImageCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportTransitGatewayRoutesCommand}
   */
  exportTransitGatewayRoutes(
    args: ExportTransitGatewayRoutesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportTransitGatewayRoutesCommandOutput>;
  exportTransitGatewayRoutes(
    args: ExportTransitGatewayRoutesCommandInput,
    cb: (err: any, data?: ExportTransitGatewayRoutesCommandOutput) => void
  ): void;
  exportTransitGatewayRoutes(
    args: ExportTransitGatewayRoutesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportTransitGatewayRoutesCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportVerifiedAccessInstanceClientConfigurationCommand}
   */
  exportVerifiedAccessInstanceClientConfiguration(
    args: ExportVerifiedAccessInstanceClientConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportVerifiedAccessInstanceClientConfigurationCommandOutput>;
  exportVerifiedAccessInstanceClientConfiguration(
    args: ExportVerifiedAccessInstanceClientConfigurationCommandInput,
    cb: (err: any, data?: ExportVerifiedAccessInstanceClientConfigurationCommandOutput) => void
  ): void;
  exportVerifiedAccessInstanceClientConfiguration(
    args: ExportVerifiedAccessInstanceClientConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportVerifiedAccessInstanceClientConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetActiveVpnTunnelStatusCommand}
   */
  getActiveVpnTunnelStatus(
    args: GetActiveVpnTunnelStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetActiveVpnTunnelStatusCommandOutput>;
  getActiveVpnTunnelStatus(
    args: GetActiveVpnTunnelStatusCommandInput,
    cb: (err: any, data?: GetActiveVpnTunnelStatusCommandOutput) => void
  ): void;
  getActiveVpnTunnelStatus(
    args: GetActiveVpnTunnelStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetActiveVpnTunnelStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAllowedImagesSettingsCommand}
   */
  getAllowedImagesSettings(): Promise<GetAllowedImagesSettingsCommandOutput>;
  getAllowedImagesSettings(
    args: GetAllowedImagesSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAllowedImagesSettingsCommandOutput>;
  getAllowedImagesSettings(
    args: GetAllowedImagesSettingsCommandInput,
    cb: (err: any, data?: GetAllowedImagesSettingsCommandOutput) => void
  ): void;
  getAllowedImagesSettings(
    args: GetAllowedImagesSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAllowedImagesSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssociatedEnclaveCertificateIamRolesCommand}
   */
  getAssociatedEnclaveCertificateIamRoles(
    args: GetAssociatedEnclaveCertificateIamRolesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssociatedEnclaveCertificateIamRolesCommandOutput>;
  getAssociatedEnclaveCertificateIamRoles(
    args: GetAssociatedEnclaveCertificateIamRolesCommandInput,
    cb: (err: any, data?: GetAssociatedEnclaveCertificateIamRolesCommandOutput) => void
  ): void;
  getAssociatedEnclaveCertificateIamRoles(
    args: GetAssociatedEnclaveCertificateIamRolesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssociatedEnclaveCertificateIamRolesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssociatedIpv6PoolCidrsCommand}
   */
  getAssociatedIpv6PoolCidrs(
    args: GetAssociatedIpv6PoolCidrsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssociatedIpv6PoolCidrsCommandOutput>;
  getAssociatedIpv6PoolCidrs(
    args: GetAssociatedIpv6PoolCidrsCommandInput,
    cb: (err: any, data?: GetAssociatedIpv6PoolCidrsCommandOutput) => void
  ): void;
  getAssociatedIpv6PoolCidrs(
    args: GetAssociatedIpv6PoolCidrsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssociatedIpv6PoolCidrsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAwsNetworkPerformanceDataCommand}
   */
  getAwsNetworkPerformanceData(): Promise<GetAwsNetworkPerformanceDataCommandOutput>;
  getAwsNetworkPerformanceData(
    args: GetAwsNetworkPerformanceDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAwsNetworkPerformanceDataCommandOutput>;
  getAwsNetworkPerformanceData(
    args: GetAwsNetworkPerformanceDataCommandInput,
    cb: (err: any, data?: GetAwsNetworkPerformanceDataCommandOutput) => void
  ): void;
  getAwsNetworkPerformanceData(
    args: GetAwsNetworkPerformanceDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAwsNetworkPerformanceDataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCapacityReservationUsageCommand}
   */
  getCapacityReservationUsage(
    args: GetCapacityReservationUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCapacityReservationUsageCommandOutput>;
  getCapacityReservationUsage(
    args: GetCapacityReservationUsageCommandInput,
    cb: (err: any, data?: GetCapacityReservationUsageCommandOutput) => void
  ): void;
  getCapacityReservationUsage(
    args: GetCapacityReservationUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCapacityReservationUsageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCoipPoolUsageCommand}
   */
  getCoipPoolUsage(
    args: GetCoipPoolUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCoipPoolUsageCommandOutput>;
  getCoipPoolUsage(
    args: GetCoipPoolUsageCommandInput,
    cb: (err: any, data?: GetCoipPoolUsageCommandOutput) => void
  ): void;
  getCoipPoolUsage(
    args: GetCoipPoolUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCoipPoolUsageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConsoleOutputCommand}
   */
  getConsoleOutput(
    args: GetConsoleOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConsoleOutputCommandOutput>;
  getConsoleOutput(
    args: GetConsoleOutputCommandInput,
    cb: (err: any, data?: GetConsoleOutputCommandOutput) => void
  ): void;
  getConsoleOutput(
    args: GetConsoleOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConsoleOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConsoleScreenshotCommand}
   */
  getConsoleScreenshot(
    args: GetConsoleScreenshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConsoleScreenshotCommandOutput>;
  getConsoleScreenshot(
    args: GetConsoleScreenshotCommandInput,
    cb: (err: any, data?: GetConsoleScreenshotCommandOutput) => void
  ): void;
  getConsoleScreenshot(
    args: GetConsoleScreenshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConsoleScreenshotCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeclarativePoliciesReportSummaryCommand}
   */
  getDeclarativePoliciesReportSummary(
    args: GetDeclarativePoliciesReportSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeclarativePoliciesReportSummaryCommandOutput>;
  getDeclarativePoliciesReportSummary(
    args: GetDeclarativePoliciesReportSummaryCommandInput,
    cb: (err: any, data?: GetDeclarativePoliciesReportSummaryCommandOutput) => void
  ): void;
  getDeclarativePoliciesReportSummary(
    args: GetDeclarativePoliciesReportSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeclarativePoliciesReportSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDefaultCreditSpecificationCommand}
   */
  getDefaultCreditSpecification(
    args: GetDefaultCreditSpecificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDefaultCreditSpecificationCommandOutput>;
  getDefaultCreditSpecification(
    args: GetDefaultCreditSpecificationCommandInput,
    cb: (err: any, data?: GetDefaultCreditSpecificationCommandOutput) => void
  ): void;
  getDefaultCreditSpecification(
    args: GetDefaultCreditSpecificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDefaultCreditSpecificationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEbsDefaultKmsKeyIdCommand}
   */
  getEbsDefaultKmsKeyId(): Promise<GetEbsDefaultKmsKeyIdCommandOutput>;
  getEbsDefaultKmsKeyId(
    args: GetEbsDefaultKmsKeyIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEbsDefaultKmsKeyIdCommandOutput>;
  getEbsDefaultKmsKeyId(
    args: GetEbsDefaultKmsKeyIdCommandInput,
    cb: (err: any, data?: GetEbsDefaultKmsKeyIdCommandOutput) => void
  ): void;
  getEbsDefaultKmsKeyId(
    args: GetEbsDefaultKmsKeyIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEbsDefaultKmsKeyIdCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEbsEncryptionByDefaultCommand}
   */
  getEbsEncryptionByDefault(): Promise<GetEbsEncryptionByDefaultCommandOutput>;
  getEbsEncryptionByDefault(
    args: GetEbsEncryptionByDefaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEbsEncryptionByDefaultCommandOutput>;
  getEbsEncryptionByDefault(
    args: GetEbsEncryptionByDefaultCommandInput,
    cb: (err: any, data?: GetEbsEncryptionByDefaultCommandOutput) => void
  ): void;
  getEbsEncryptionByDefault(
    args: GetEbsEncryptionByDefaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEbsEncryptionByDefaultCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFlowLogsIntegrationTemplateCommand}
   */
  getFlowLogsIntegrationTemplate(
    args: GetFlowLogsIntegrationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFlowLogsIntegrationTemplateCommandOutput>;
  getFlowLogsIntegrationTemplate(
    args: GetFlowLogsIntegrationTemplateCommandInput,
    cb: (err: any, data?: GetFlowLogsIntegrationTemplateCommandOutput) => void
  ): void;
  getFlowLogsIntegrationTemplate(
    args: GetFlowLogsIntegrationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFlowLogsIntegrationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGroupsForCapacityReservationCommand}
   */
  getGroupsForCapacityReservation(
    args: GetGroupsForCapacityReservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGroupsForCapacityReservationCommandOutput>;
  getGroupsForCapacityReservation(
    args: GetGroupsForCapacityReservationCommandInput,
    cb: (err: any, data?: GetGroupsForCapacityReservationCommandOutput) => void
  ): void;
  getGroupsForCapacityReservation(
    args: GetGroupsForCapacityReservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupsForCapacityReservationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHostReservationPurchasePreviewCommand}
   */
  getHostReservationPurchasePreview(
    args: GetHostReservationPurchasePreviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHostReservationPurchasePreviewCommandOutput>;
  getHostReservationPurchasePreview(
    args: GetHostReservationPurchasePreviewCommandInput,
    cb: (err: any, data?: GetHostReservationPurchasePreviewCommandOutput) => void
  ): void;
  getHostReservationPurchasePreview(
    args: GetHostReservationPurchasePreviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHostReservationPurchasePreviewCommandOutput) => void
  ): void;

  /**
   * @see {@link GetImageBlockPublicAccessStateCommand}
   */
  getImageBlockPublicAccessState(): Promise<GetImageBlockPublicAccessStateCommandOutput>;
  getImageBlockPublicAccessState(
    args: GetImageBlockPublicAccessStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetImageBlockPublicAccessStateCommandOutput>;
  getImageBlockPublicAccessState(
    args: GetImageBlockPublicAccessStateCommandInput,
    cb: (err: any, data?: GetImageBlockPublicAccessStateCommandOutput) => void
  ): void;
  getImageBlockPublicAccessState(
    args: GetImageBlockPublicAccessStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImageBlockPublicAccessStateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInstanceMetadataDefaultsCommand}
   */
  getInstanceMetadataDefaults(): Promise<GetInstanceMetadataDefaultsCommandOutput>;
  getInstanceMetadataDefaults(
    args: GetInstanceMetadataDefaultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstanceMetadataDefaultsCommandOutput>;
  getInstanceMetadataDefaults(
    args: GetInstanceMetadataDefaultsCommandInput,
    cb: (err: any, data?: GetInstanceMetadataDefaultsCommandOutput) => void
  ): void;
  getInstanceMetadataDefaults(
    args: GetInstanceMetadataDefaultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstanceMetadataDefaultsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInstanceTpmEkPubCommand}
   */
  getInstanceTpmEkPub(
    args: GetInstanceTpmEkPubCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstanceTpmEkPubCommandOutput>;
  getInstanceTpmEkPub(
    args: GetInstanceTpmEkPubCommandInput,
    cb: (err: any, data?: GetInstanceTpmEkPubCommandOutput) => void
  ): void;
  getInstanceTpmEkPub(
    args: GetInstanceTpmEkPubCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstanceTpmEkPubCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInstanceTypesFromInstanceRequirementsCommand}
   */
  getInstanceTypesFromInstanceRequirements(
    args: GetInstanceTypesFromInstanceRequirementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstanceTypesFromInstanceRequirementsCommandOutput>;
  getInstanceTypesFromInstanceRequirements(
    args: GetInstanceTypesFromInstanceRequirementsCommandInput,
    cb: (err: any, data?: GetInstanceTypesFromInstanceRequirementsCommandOutput) => void
  ): void;
  getInstanceTypesFromInstanceRequirements(
    args: GetInstanceTypesFromInstanceRequirementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstanceTypesFromInstanceRequirementsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInstanceUefiDataCommand}
   */
  getInstanceUefiData(
    args: GetInstanceUefiDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstanceUefiDataCommandOutput>;
  getInstanceUefiData(
    args: GetInstanceUefiDataCommandInput,
    cb: (err: any, data?: GetInstanceUefiDataCommandOutput) => void
  ): void;
  getInstanceUefiData(
    args: GetInstanceUefiDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstanceUefiDataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIpamAddressHistoryCommand}
   */
  getIpamAddressHistory(
    args: GetIpamAddressHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIpamAddressHistoryCommandOutput>;
  getIpamAddressHistory(
    args: GetIpamAddressHistoryCommandInput,
    cb: (err: any, data?: GetIpamAddressHistoryCommandOutput) => void
  ): void;
  getIpamAddressHistory(
    args: GetIpamAddressHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIpamAddressHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIpamDiscoveredAccountsCommand}
   */
  getIpamDiscoveredAccounts(
    args: GetIpamDiscoveredAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIpamDiscoveredAccountsCommandOutput>;
  getIpamDiscoveredAccounts(
    args: GetIpamDiscoveredAccountsCommandInput,
    cb: (err: any, data?: GetIpamDiscoveredAccountsCommandOutput) => void
  ): void;
  getIpamDiscoveredAccounts(
    args: GetIpamDiscoveredAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIpamDiscoveredAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIpamDiscoveredPublicAddressesCommand}
   */
  getIpamDiscoveredPublicAddresses(
    args: GetIpamDiscoveredPublicAddressesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIpamDiscoveredPublicAddressesCommandOutput>;
  getIpamDiscoveredPublicAddresses(
    args: GetIpamDiscoveredPublicAddressesCommandInput,
    cb: (err: any, data?: GetIpamDiscoveredPublicAddressesCommandOutput) => void
  ): void;
  getIpamDiscoveredPublicAddresses(
    args: GetIpamDiscoveredPublicAddressesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIpamDiscoveredPublicAddressesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIpamDiscoveredResourceCidrsCommand}
   */
  getIpamDiscoveredResourceCidrs(
    args: GetIpamDiscoveredResourceCidrsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIpamDiscoveredResourceCidrsCommandOutput>;
  getIpamDiscoveredResourceCidrs(
    args: GetIpamDiscoveredResourceCidrsCommandInput,
    cb: (err: any, data?: GetIpamDiscoveredResourceCidrsCommandOutput) => void
  ): void;
  getIpamDiscoveredResourceCidrs(
    args: GetIpamDiscoveredResourceCidrsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIpamDiscoveredResourceCidrsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIpamPoolAllocationsCommand}
   */
  getIpamPoolAllocations(
    args: GetIpamPoolAllocationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIpamPoolAllocationsCommandOutput>;
  getIpamPoolAllocations(
    args: GetIpamPoolAllocationsCommandInput,
    cb: (err: any, data?: GetIpamPoolAllocationsCommandOutput) => void
  ): void;
  getIpamPoolAllocations(
    args: GetIpamPoolAllocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIpamPoolAllocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIpamPoolCidrsCommand}
   */
  getIpamPoolCidrs(
    args: GetIpamPoolCidrsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIpamPoolCidrsCommandOutput>;
  getIpamPoolCidrs(
    args: GetIpamPoolCidrsCommandInput,
    cb: (err: any, data?: GetIpamPoolCidrsCommandOutput) => void
  ): void;
  getIpamPoolCidrs(
    args: GetIpamPoolCidrsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIpamPoolCidrsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIpamResourceCidrsCommand}
   */
  getIpamResourceCidrs(
    args: GetIpamResourceCidrsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIpamResourceCidrsCommandOutput>;
  getIpamResourceCidrs(
    args: GetIpamResourceCidrsCommandInput,
    cb: (err: any, data?: GetIpamResourceCidrsCommandOutput) => void
  ): void;
  getIpamResourceCidrs(
    args: GetIpamResourceCidrsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIpamResourceCidrsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLaunchTemplateDataCommand}
   */
  getLaunchTemplateData(
    args: GetLaunchTemplateDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLaunchTemplateDataCommandOutput>;
  getLaunchTemplateData(
    args: GetLaunchTemplateDataCommandInput,
    cb: (err: any, data?: GetLaunchTemplateDataCommandOutput) => void
  ): void;
  getLaunchTemplateData(
    args: GetLaunchTemplateDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLaunchTemplateDataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetManagedPrefixListAssociationsCommand}
   */
  getManagedPrefixListAssociations(
    args: GetManagedPrefixListAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetManagedPrefixListAssociationsCommandOutput>;
  getManagedPrefixListAssociations(
    args: GetManagedPrefixListAssociationsCommandInput,
    cb: (err: any, data?: GetManagedPrefixListAssociationsCommandOutput) => void
  ): void;
  getManagedPrefixListAssociations(
    args: GetManagedPrefixListAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetManagedPrefixListAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetManagedPrefixListEntriesCommand}
   */
  getManagedPrefixListEntries(
    args: GetManagedPrefixListEntriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetManagedPrefixListEntriesCommandOutput>;
  getManagedPrefixListEntries(
    args: GetManagedPrefixListEntriesCommandInput,
    cb: (err: any, data?: GetManagedPrefixListEntriesCommandOutput) => void
  ): void;
  getManagedPrefixListEntries(
    args: GetManagedPrefixListEntriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetManagedPrefixListEntriesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNetworkInsightsAccessScopeAnalysisFindingsCommand}
   */
  getNetworkInsightsAccessScopeAnalysisFindings(
    args: GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkInsightsAccessScopeAnalysisFindingsCommandOutput>;
  getNetworkInsightsAccessScopeAnalysisFindings(
    args: GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput,
    cb: (err: any, data?: GetNetworkInsightsAccessScopeAnalysisFindingsCommandOutput) => void
  ): void;
  getNetworkInsightsAccessScopeAnalysisFindings(
    args: GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkInsightsAccessScopeAnalysisFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNetworkInsightsAccessScopeContentCommand}
   */
  getNetworkInsightsAccessScopeContent(
    args: GetNetworkInsightsAccessScopeContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkInsightsAccessScopeContentCommandOutput>;
  getNetworkInsightsAccessScopeContent(
    args: GetNetworkInsightsAccessScopeContentCommandInput,
    cb: (err: any, data?: GetNetworkInsightsAccessScopeContentCommandOutput) => void
  ): void;
  getNetworkInsightsAccessScopeContent(
    args: GetNetworkInsightsAccessScopeContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkInsightsAccessScopeContentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPasswordDataCommand}
   */
  getPasswordData(
    args: GetPasswordDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPasswordDataCommandOutput>;
  getPasswordData(args: GetPasswordDataCommandInput, cb: (err: any, data?: GetPasswordDataCommandOutput) => void): void;
  getPasswordData(
    args: GetPasswordDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPasswordDataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReservedInstancesExchangeQuoteCommand}
   */
  getReservedInstancesExchangeQuote(
    args: GetReservedInstancesExchangeQuoteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReservedInstancesExchangeQuoteCommandOutput>;
  getReservedInstancesExchangeQuote(
    args: GetReservedInstancesExchangeQuoteCommandInput,
    cb: (err: any, data?: GetReservedInstancesExchangeQuoteCommandOutput) => void
  ): void;
  getReservedInstancesExchangeQuote(
    args: GetReservedInstancesExchangeQuoteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReservedInstancesExchangeQuoteCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRouteServerAssociationsCommand}
   */
  getRouteServerAssociations(
    args: GetRouteServerAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRouteServerAssociationsCommandOutput>;
  getRouteServerAssociations(
    args: GetRouteServerAssociationsCommandInput,
    cb: (err: any, data?: GetRouteServerAssociationsCommandOutput) => void
  ): void;
  getRouteServerAssociations(
    args: GetRouteServerAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRouteServerAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRouteServerPropagationsCommand}
   */
  getRouteServerPropagations(
    args: GetRouteServerPropagationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRouteServerPropagationsCommandOutput>;
  getRouteServerPropagations(
    args: GetRouteServerPropagationsCommandInput,
    cb: (err: any, data?: GetRouteServerPropagationsCommandOutput) => void
  ): void;
  getRouteServerPropagations(
    args: GetRouteServerPropagationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRouteServerPropagationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRouteServerRoutingDatabaseCommand}
   */
  getRouteServerRoutingDatabase(
    args: GetRouteServerRoutingDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRouteServerRoutingDatabaseCommandOutput>;
  getRouteServerRoutingDatabase(
    args: GetRouteServerRoutingDatabaseCommandInput,
    cb: (err: any, data?: GetRouteServerRoutingDatabaseCommandOutput) => void
  ): void;
  getRouteServerRoutingDatabase(
    args: GetRouteServerRoutingDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRouteServerRoutingDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSecurityGroupsForVpcCommand}
   */
  getSecurityGroupsForVpc(
    args: GetSecurityGroupsForVpcCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSecurityGroupsForVpcCommandOutput>;
  getSecurityGroupsForVpc(
    args: GetSecurityGroupsForVpcCommandInput,
    cb: (err: any, data?: GetSecurityGroupsForVpcCommandOutput) => void
  ): void;
  getSecurityGroupsForVpc(
    args: GetSecurityGroupsForVpcCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSecurityGroupsForVpcCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSerialConsoleAccessStatusCommand}
   */
  getSerialConsoleAccessStatus(): Promise<GetSerialConsoleAccessStatusCommandOutput>;
  getSerialConsoleAccessStatus(
    args: GetSerialConsoleAccessStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSerialConsoleAccessStatusCommandOutput>;
  getSerialConsoleAccessStatus(
    args: GetSerialConsoleAccessStatusCommandInput,
    cb: (err: any, data?: GetSerialConsoleAccessStatusCommandOutput) => void
  ): void;
  getSerialConsoleAccessStatus(
    args: GetSerialConsoleAccessStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSerialConsoleAccessStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSnapshotBlockPublicAccessStateCommand}
   */
  getSnapshotBlockPublicAccessState(): Promise<GetSnapshotBlockPublicAccessStateCommandOutput>;
  getSnapshotBlockPublicAccessState(
    args: GetSnapshotBlockPublicAccessStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSnapshotBlockPublicAccessStateCommandOutput>;
  getSnapshotBlockPublicAccessState(
    args: GetSnapshotBlockPublicAccessStateCommandInput,
    cb: (err: any, data?: GetSnapshotBlockPublicAccessStateCommandOutput) => void
  ): void;
  getSnapshotBlockPublicAccessState(
    args: GetSnapshotBlockPublicAccessStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSnapshotBlockPublicAccessStateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSpotPlacementScoresCommand}
   */
  getSpotPlacementScores(
    args: GetSpotPlacementScoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSpotPlacementScoresCommandOutput>;
  getSpotPlacementScores(
    args: GetSpotPlacementScoresCommandInput,
    cb: (err: any, data?: GetSpotPlacementScoresCommandOutput) => void
  ): void;
  getSpotPlacementScores(
    args: GetSpotPlacementScoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSpotPlacementScoresCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSubnetCidrReservationsCommand}
   */
  getSubnetCidrReservations(
    args: GetSubnetCidrReservationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSubnetCidrReservationsCommandOutput>;
  getSubnetCidrReservations(
    args: GetSubnetCidrReservationsCommandInput,
    cb: (err: any, data?: GetSubnetCidrReservationsCommandOutput) => void
  ): void;
  getSubnetCidrReservations(
    args: GetSubnetCidrReservationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSubnetCidrReservationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTransitGatewayAttachmentPropagationsCommand}
   */
  getTransitGatewayAttachmentPropagations(
    args: GetTransitGatewayAttachmentPropagationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTransitGatewayAttachmentPropagationsCommandOutput>;
  getTransitGatewayAttachmentPropagations(
    args: GetTransitGatewayAttachmentPropagationsCommandInput,
    cb: (err: any, data?: GetTransitGatewayAttachmentPropagationsCommandOutput) => void
  ): void;
  getTransitGatewayAttachmentPropagations(
    args: GetTransitGatewayAttachmentPropagationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTransitGatewayAttachmentPropagationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTransitGatewayMulticastDomainAssociationsCommand}
   */
  getTransitGatewayMulticastDomainAssociations(
    args: GetTransitGatewayMulticastDomainAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTransitGatewayMulticastDomainAssociationsCommandOutput>;
  getTransitGatewayMulticastDomainAssociations(
    args: GetTransitGatewayMulticastDomainAssociationsCommandInput,
    cb: (err: any, data?: GetTransitGatewayMulticastDomainAssociationsCommandOutput) => void
  ): void;
  getTransitGatewayMulticastDomainAssociations(
    args: GetTransitGatewayMulticastDomainAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTransitGatewayMulticastDomainAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTransitGatewayPolicyTableAssociationsCommand}
   */
  getTransitGatewayPolicyTableAssociations(
    args: GetTransitGatewayPolicyTableAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTransitGatewayPolicyTableAssociationsCommandOutput>;
  getTransitGatewayPolicyTableAssociations(
    args: GetTransitGatewayPolicyTableAssociationsCommandInput,
    cb: (err: any, data?: GetTransitGatewayPolicyTableAssociationsCommandOutput) => void
  ): void;
  getTransitGatewayPolicyTableAssociations(
    args: GetTransitGatewayPolicyTableAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTransitGatewayPolicyTableAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTransitGatewayPolicyTableEntriesCommand}
   */
  getTransitGatewayPolicyTableEntries(
    args: GetTransitGatewayPolicyTableEntriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTransitGatewayPolicyTableEntriesCommandOutput>;
  getTransitGatewayPolicyTableEntries(
    args: GetTransitGatewayPolicyTableEntriesCommandInput,
    cb: (err: any, data?: GetTransitGatewayPolicyTableEntriesCommandOutput) => void
  ): void;
  getTransitGatewayPolicyTableEntries(
    args: GetTransitGatewayPolicyTableEntriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTransitGatewayPolicyTableEntriesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTransitGatewayPrefixListReferencesCommand}
   */
  getTransitGatewayPrefixListReferences(
    args: GetTransitGatewayPrefixListReferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTransitGatewayPrefixListReferencesCommandOutput>;
  getTransitGatewayPrefixListReferences(
    args: GetTransitGatewayPrefixListReferencesCommandInput,
    cb: (err: any, data?: GetTransitGatewayPrefixListReferencesCommandOutput) => void
  ): void;
  getTransitGatewayPrefixListReferences(
    args: GetTransitGatewayPrefixListReferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTransitGatewayPrefixListReferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTransitGatewayRouteTableAssociationsCommand}
   */
  getTransitGatewayRouteTableAssociations(
    args: GetTransitGatewayRouteTableAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTransitGatewayRouteTableAssociationsCommandOutput>;
  getTransitGatewayRouteTableAssociations(
    args: GetTransitGatewayRouteTableAssociationsCommandInput,
    cb: (err: any, data?: GetTransitGatewayRouteTableAssociationsCommandOutput) => void
  ): void;
  getTransitGatewayRouteTableAssociations(
    args: GetTransitGatewayRouteTableAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTransitGatewayRouteTableAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTransitGatewayRouteTablePropagationsCommand}
   */
  getTransitGatewayRouteTablePropagations(
    args: GetTransitGatewayRouteTablePropagationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTransitGatewayRouteTablePropagationsCommandOutput>;
  getTransitGatewayRouteTablePropagations(
    args: GetTransitGatewayRouteTablePropagationsCommandInput,
    cb: (err: any, data?: GetTransitGatewayRouteTablePropagationsCommandOutput) => void
  ): void;
  getTransitGatewayRouteTablePropagations(
    args: GetTransitGatewayRouteTablePropagationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTransitGatewayRouteTablePropagationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVerifiedAccessEndpointPolicyCommand}
   */
  getVerifiedAccessEndpointPolicy(
    args: GetVerifiedAccessEndpointPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVerifiedAccessEndpointPolicyCommandOutput>;
  getVerifiedAccessEndpointPolicy(
    args: GetVerifiedAccessEndpointPolicyCommandInput,
    cb: (err: any, data?: GetVerifiedAccessEndpointPolicyCommandOutput) => void
  ): void;
  getVerifiedAccessEndpointPolicy(
    args: GetVerifiedAccessEndpointPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVerifiedAccessEndpointPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVerifiedAccessEndpointTargetsCommand}
   */
  getVerifiedAccessEndpointTargets(
    args: GetVerifiedAccessEndpointTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVerifiedAccessEndpointTargetsCommandOutput>;
  getVerifiedAccessEndpointTargets(
    args: GetVerifiedAccessEndpointTargetsCommandInput,
    cb: (err: any, data?: GetVerifiedAccessEndpointTargetsCommandOutput) => void
  ): void;
  getVerifiedAccessEndpointTargets(
    args: GetVerifiedAccessEndpointTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVerifiedAccessEndpointTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVerifiedAccessGroupPolicyCommand}
   */
  getVerifiedAccessGroupPolicy(
    args: GetVerifiedAccessGroupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVerifiedAccessGroupPolicyCommandOutput>;
  getVerifiedAccessGroupPolicy(
    args: GetVerifiedAccessGroupPolicyCommandInput,
    cb: (err: any, data?: GetVerifiedAccessGroupPolicyCommandOutput) => void
  ): void;
  getVerifiedAccessGroupPolicy(
    args: GetVerifiedAccessGroupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVerifiedAccessGroupPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVpnConnectionDeviceSampleConfigurationCommand}
   */
  getVpnConnectionDeviceSampleConfiguration(
    args: GetVpnConnectionDeviceSampleConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVpnConnectionDeviceSampleConfigurationCommandOutput>;
  getVpnConnectionDeviceSampleConfiguration(
    args: GetVpnConnectionDeviceSampleConfigurationCommandInput,
    cb: (err: any, data?: GetVpnConnectionDeviceSampleConfigurationCommandOutput) => void
  ): void;
  getVpnConnectionDeviceSampleConfiguration(
    args: GetVpnConnectionDeviceSampleConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVpnConnectionDeviceSampleConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVpnConnectionDeviceTypesCommand}
   */
  getVpnConnectionDeviceTypes(): Promise<GetVpnConnectionDeviceTypesCommandOutput>;
  getVpnConnectionDeviceTypes(
    args: GetVpnConnectionDeviceTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVpnConnectionDeviceTypesCommandOutput>;
  getVpnConnectionDeviceTypes(
    args: GetVpnConnectionDeviceTypesCommandInput,
    cb: (err: any, data?: GetVpnConnectionDeviceTypesCommandOutput) => void
  ): void;
  getVpnConnectionDeviceTypes(
    args: GetVpnConnectionDeviceTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVpnConnectionDeviceTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVpnTunnelReplacementStatusCommand}
   */
  getVpnTunnelReplacementStatus(
    args: GetVpnTunnelReplacementStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVpnTunnelReplacementStatusCommandOutput>;
  getVpnTunnelReplacementStatus(
    args: GetVpnTunnelReplacementStatusCommandInput,
    cb: (err: any, data?: GetVpnTunnelReplacementStatusCommandOutput) => void
  ): void;
  getVpnTunnelReplacementStatus(
    args: GetVpnTunnelReplacementStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVpnTunnelReplacementStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportClientVpnClientCertificateRevocationListCommand}
   */
  importClientVpnClientCertificateRevocationList(
    args: ImportClientVpnClientCertificateRevocationListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportClientVpnClientCertificateRevocationListCommandOutput>;
  importClientVpnClientCertificateRevocationList(
    args: ImportClientVpnClientCertificateRevocationListCommandInput,
    cb: (err: any, data?: ImportClientVpnClientCertificateRevocationListCommandOutput) => void
  ): void;
  importClientVpnClientCertificateRevocationList(
    args: ImportClientVpnClientCertificateRevocationListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportClientVpnClientCertificateRevocationListCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportImageCommand}
   */
  importImage(): Promise<ImportImageCommandOutput>;
  importImage(args: ImportImageCommandInput, options?: __HttpHandlerOptions): Promise<ImportImageCommandOutput>;
  importImage(args: ImportImageCommandInput, cb: (err: any, data?: ImportImageCommandOutput) => void): void;
  importImage(
    args: ImportImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportImageCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportInstanceCommand}
   */
  importInstance(
    args: ImportInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportInstanceCommandOutput>;
  importInstance(args: ImportInstanceCommandInput, cb: (err: any, data?: ImportInstanceCommandOutput) => void): void;
  importInstance(
    args: ImportInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportKeyPairCommand}
   */
  importKeyPair(args: ImportKeyPairCommandInput, options?: __HttpHandlerOptions): Promise<ImportKeyPairCommandOutput>;
  importKeyPair(args: ImportKeyPairCommandInput, cb: (err: any, data?: ImportKeyPairCommandOutput) => void): void;
  importKeyPair(
    args: ImportKeyPairCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportKeyPairCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportSnapshotCommand}
   */
  importSnapshot(): Promise<ImportSnapshotCommandOutput>;
  importSnapshot(
    args: ImportSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportSnapshotCommandOutput>;
  importSnapshot(args: ImportSnapshotCommandInput, cb: (err: any, data?: ImportSnapshotCommandOutput) => void): void;
  importSnapshot(
    args: ImportSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportVolumeCommand}
   */
  importVolume(args: ImportVolumeCommandInput, options?: __HttpHandlerOptions): Promise<ImportVolumeCommandOutput>;
  importVolume(args: ImportVolumeCommandInput, cb: (err: any, data?: ImportVolumeCommandOutput) => void): void;
  importVolume(
    args: ImportVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImagesInRecycleBinCommand}
   */
  listImagesInRecycleBin(): Promise<ListImagesInRecycleBinCommandOutput>;
  listImagesInRecycleBin(
    args: ListImagesInRecycleBinCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImagesInRecycleBinCommandOutput>;
  listImagesInRecycleBin(
    args: ListImagesInRecycleBinCommandInput,
    cb: (err: any, data?: ListImagesInRecycleBinCommandOutput) => void
  ): void;
  listImagesInRecycleBin(
    args: ListImagesInRecycleBinCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImagesInRecycleBinCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSnapshotsInRecycleBinCommand}
   */
  listSnapshotsInRecycleBin(): Promise<ListSnapshotsInRecycleBinCommandOutput>;
  listSnapshotsInRecycleBin(
    args: ListSnapshotsInRecycleBinCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSnapshotsInRecycleBinCommandOutput>;
  listSnapshotsInRecycleBin(
    args: ListSnapshotsInRecycleBinCommandInput,
    cb: (err: any, data?: ListSnapshotsInRecycleBinCommandOutput) => void
  ): void;
  listSnapshotsInRecycleBin(
    args: ListSnapshotsInRecycleBinCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSnapshotsInRecycleBinCommandOutput) => void
  ): void;

  /**
   * @see {@link LockSnapshotCommand}
   */
  lockSnapshot(args: LockSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<LockSnapshotCommandOutput>;
  lockSnapshot(args: LockSnapshotCommandInput, cb: (err: any, data?: LockSnapshotCommandOutput) => void): void;
  lockSnapshot(
    args: LockSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LockSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyAddressAttributeCommand}
   */
  modifyAddressAttribute(
    args: ModifyAddressAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyAddressAttributeCommandOutput>;
  modifyAddressAttribute(
    args: ModifyAddressAttributeCommandInput,
    cb: (err: any, data?: ModifyAddressAttributeCommandOutput) => void
  ): void;
  modifyAddressAttribute(
    args: ModifyAddressAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyAddressAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyAvailabilityZoneGroupCommand}
   */
  modifyAvailabilityZoneGroup(
    args: ModifyAvailabilityZoneGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyAvailabilityZoneGroupCommandOutput>;
  modifyAvailabilityZoneGroup(
    args: ModifyAvailabilityZoneGroupCommandInput,
    cb: (err: any, data?: ModifyAvailabilityZoneGroupCommandOutput) => void
  ): void;
  modifyAvailabilityZoneGroup(
    args: ModifyAvailabilityZoneGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyAvailabilityZoneGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyCapacityReservationCommand}
   */
  modifyCapacityReservation(
    args: ModifyCapacityReservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyCapacityReservationCommandOutput>;
  modifyCapacityReservation(
    args: ModifyCapacityReservationCommandInput,
    cb: (err: any, data?: ModifyCapacityReservationCommandOutput) => void
  ): void;
  modifyCapacityReservation(
    args: ModifyCapacityReservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyCapacityReservationCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyCapacityReservationFleetCommand}
   */
  modifyCapacityReservationFleet(
    args: ModifyCapacityReservationFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyCapacityReservationFleetCommandOutput>;
  modifyCapacityReservationFleet(
    args: ModifyCapacityReservationFleetCommandInput,
    cb: (err: any, data?: ModifyCapacityReservationFleetCommandOutput) => void
  ): void;
  modifyCapacityReservationFleet(
    args: ModifyCapacityReservationFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyCapacityReservationFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyClientVpnEndpointCommand}
   */
  modifyClientVpnEndpoint(
    args: ModifyClientVpnEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyClientVpnEndpointCommandOutput>;
  modifyClientVpnEndpoint(
    args: ModifyClientVpnEndpointCommandInput,
    cb: (err: any, data?: ModifyClientVpnEndpointCommandOutput) => void
  ): void;
  modifyClientVpnEndpoint(
    args: ModifyClientVpnEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyClientVpnEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDefaultCreditSpecificationCommand}
   */
  modifyDefaultCreditSpecification(
    args: ModifyDefaultCreditSpecificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDefaultCreditSpecificationCommandOutput>;
  modifyDefaultCreditSpecification(
    args: ModifyDefaultCreditSpecificationCommandInput,
    cb: (err: any, data?: ModifyDefaultCreditSpecificationCommandOutput) => void
  ): void;
  modifyDefaultCreditSpecification(
    args: ModifyDefaultCreditSpecificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDefaultCreditSpecificationCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyEbsDefaultKmsKeyIdCommand}
   */
  modifyEbsDefaultKmsKeyId(
    args: ModifyEbsDefaultKmsKeyIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyEbsDefaultKmsKeyIdCommandOutput>;
  modifyEbsDefaultKmsKeyId(
    args: ModifyEbsDefaultKmsKeyIdCommandInput,
    cb: (err: any, data?: ModifyEbsDefaultKmsKeyIdCommandOutput) => void
  ): void;
  modifyEbsDefaultKmsKeyId(
    args: ModifyEbsDefaultKmsKeyIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyEbsDefaultKmsKeyIdCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyFleetCommand}
   */
  modifyFleet(args: ModifyFleetCommandInput, options?: __HttpHandlerOptions): Promise<ModifyFleetCommandOutput>;
  modifyFleet(args: ModifyFleetCommandInput, cb: (err: any, data?: ModifyFleetCommandOutput) => void): void;
  modifyFleet(
    args: ModifyFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyFpgaImageAttributeCommand}
   */
  modifyFpgaImageAttribute(
    args: ModifyFpgaImageAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyFpgaImageAttributeCommandOutput>;
  modifyFpgaImageAttribute(
    args: ModifyFpgaImageAttributeCommandInput,
    cb: (err: any, data?: ModifyFpgaImageAttributeCommandOutput) => void
  ): void;
  modifyFpgaImageAttribute(
    args: ModifyFpgaImageAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyFpgaImageAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyHostsCommand}
   */
  modifyHosts(args: ModifyHostsCommandInput, options?: __HttpHandlerOptions): Promise<ModifyHostsCommandOutput>;
  modifyHosts(args: ModifyHostsCommandInput, cb: (err: any, data?: ModifyHostsCommandOutput) => void): void;
  modifyHosts(
    args: ModifyHostsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyHostsCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyIdentityIdFormatCommand}
   */
  modifyIdentityIdFormat(
    args: ModifyIdentityIdFormatCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyIdentityIdFormatCommandOutput>;
  modifyIdentityIdFormat(
    args: ModifyIdentityIdFormatCommandInput,
    cb: (err: any, data?: ModifyIdentityIdFormatCommandOutput) => void
  ): void;
  modifyIdentityIdFormat(
    args: ModifyIdentityIdFormatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyIdentityIdFormatCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyIdFormatCommand}
   */
  modifyIdFormat(
    args: ModifyIdFormatCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyIdFormatCommandOutput>;
  modifyIdFormat(args: ModifyIdFormatCommandInput, cb: (err: any, data?: ModifyIdFormatCommandOutput) => void): void;
  modifyIdFormat(
    args: ModifyIdFormatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyIdFormatCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyImageAttributeCommand}
   */
  modifyImageAttribute(
    args: ModifyImageAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyImageAttributeCommandOutput>;
  modifyImageAttribute(
    args: ModifyImageAttributeCommandInput,
    cb: (err: any, data?: ModifyImageAttributeCommandOutput) => void
  ): void;
  modifyImageAttribute(
    args: ModifyImageAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyImageAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyInstanceAttributeCommand}
   */
  modifyInstanceAttribute(
    args: ModifyInstanceAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyInstanceAttributeCommandOutput>;
  modifyInstanceAttribute(
    args: ModifyInstanceAttributeCommandInput,
    cb: (err: any, data?: ModifyInstanceAttributeCommandOutput) => void
  ): void;
  modifyInstanceAttribute(
    args: ModifyInstanceAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyInstanceAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyInstanceCapacityReservationAttributesCommand}
   */
  modifyInstanceCapacityReservationAttributes(
    args: ModifyInstanceCapacityReservationAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyInstanceCapacityReservationAttributesCommandOutput>;
  modifyInstanceCapacityReservationAttributes(
    args: ModifyInstanceCapacityReservationAttributesCommandInput,
    cb: (err: any, data?: ModifyInstanceCapacityReservationAttributesCommandOutput) => void
  ): void;
  modifyInstanceCapacityReservationAttributes(
    args: ModifyInstanceCapacityReservationAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyInstanceCapacityReservationAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyInstanceCpuOptionsCommand}
   */
  modifyInstanceCpuOptions(
    args: ModifyInstanceCpuOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyInstanceCpuOptionsCommandOutput>;
  modifyInstanceCpuOptions(
    args: ModifyInstanceCpuOptionsCommandInput,
    cb: (err: any, data?: ModifyInstanceCpuOptionsCommandOutput) => void
  ): void;
  modifyInstanceCpuOptions(
    args: ModifyInstanceCpuOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyInstanceCpuOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyInstanceCreditSpecificationCommand}
   */
  modifyInstanceCreditSpecification(
    args: ModifyInstanceCreditSpecificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyInstanceCreditSpecificationCommandOutput>;
  modifyInstanceCreditSpecification(
    args: ModifyInstanceCreditSpecificationCommandInput,
    cb: (err: any, data?: ModifyInstanceCreditSpecificationCommandOutput) => void
  ): void;
  modifyInstanceCreditSpecification(
    args: ModifyInstanceCreditSpecificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyInstanceCreditSpecificationCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyInstanceEventStartTimeCommand}
   */
  modifyInstanceEventStartTime(
    args: ModifyInstanceEventStartTimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyInstanceEventStartTimeCommandOutput>;
  modifyInstanceEventStartTime(
    args: ModifyInstanceEventStartTimeCommandInput,
    cb: (err: any, data?: ModifyInstanceEventStartTimeCommandOutput) => void
  ): void;
  modifyInstanceEventStartTime(
    args: ModifyInstanceEventStartTimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyInstanceEventStartTimeCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyInstanceEventWindowCommand}
   */
  modifyInstanceEventWindow(
    args: ModifyInstanceEventWindowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyInstanceEventWindowCommandOutput>;
  modifyInstanceEventWindow(
    args: ModifyInstanceEventWindowCommandInput,
    cb: (err: any, data?: ModifyInstanceEventWindowCommandOutput) => void
  ): void;
  modifyInstanceEventWindow(
    args: ModifyInstanceEventWindowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyInstanceEventWindowCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyInstanceMaintenanceOptionsCommand}
   */
  modifyInstanceMaintenanceOptions(
    args: ModifyInstanceMaintenanceOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyInstanceMaintenanceOptionsCommandOutput>;
  modifyInstanceMaintenanceOptions(
    args: ModifyInstanceMaintenanceOptionsCommandInput,
    cb: (err: any, data?: ModifyInstanceMaintenanceOptionsCommandOutput) => void
  ): void;
  modifyInstanceMaintenanceOptions(
    args: ModifyInstanceMaintenanceOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyInstanceMaintenanceOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyInstanceMetadataDefaultsCommand}
   */
  modifyInstanceMetadataDefaults(): Promise<ModifyInstanceMetadataDefaultsCommandOutput>;
  modifyInstanceMetadataDefaults(
    args: ModifyInstanceMetadataDefaultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyInstanceMetadataDefaultsCommandOutput>;
  modifyInstanceMetadataDefaults(
    args: ModifyInstanceMetadataDefaultsCommandInput,
    cb: (err: any, data?: ModifyInstanceMetadataDefaultsCommandOutput) => void
  ): void;
  modifyInstanceMetadataDefaults(
    args: ModifyInstanceMetadataDefaultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyInstanceMetadataDefaultsCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyInstanceMetadataOptionsCommand}
   */
  modifyInstanceMetadataOptions(
    args: ModifyInstanceMetadataOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyInstanceMetadataOptionsCommandOutput>;
  modifyInstanceMetadataOptions(
    args: ModifyInstanceMetadataOptionsCommandInput,
    cb: (err: any, data?: ModifyInstanceMetadataOptionsCommandOutput) => void
  ): void;
  modifyInstanceMetadataOptions(
    args: ModifyInstanceMetadataOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyInstanceMetadataOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyInstanceNetworkPerformanceOptionsCommand}
   */
  modifyInstanceNetworkPerformanceOptions(
    args: ModifyInstanceNetworkPerformanceOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyInstanceNetworkPerformanceOptionsCommandOutput>;
  modifyInstanceNetworkPerformanceOptions(
    args: ModifyInstanceNetworkPerformanceOptionsCommandInput,
    cb: (err: any, data?: ModifyInstanceNetworkPerformanceOptionsCommandOutput) => void
  ): void;
  modifyInstanceNetworkPerformanceOptions(
    args: ModifyInstanceNetworkPerformanceOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyInstanceNetworkPerformanceOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyInstancePlacementCommand}
   */
  modifyInstancePlacement(
    args: ModifyInstancePlacementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyInstancePlacementCommandOutput>;
  modifyInstancePlacement(
    args: ModifyInstancePlacementCommandInput,
    cb: (err: any, data?: ModifyInstancePlacementCommandOutput) => void
  ): void;
  modifyInstancePlacement(
    args: ModifyInstancePlacementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyInstancePlacementCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyIpamCommand}
   */
  modifyIpam(args: ModifyIpamCommandInput, options?: __HttpHandlerOptions): Promise<ModifyIpamCommandOutput>;
  modifyIpam(args: ModifyIpamCommandInput, cb: (err: any, data?: ModifyIpamCommandOutput) => void): void;
  modifyIpam(
    args: ModifyIpamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyIpamCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyIpamPoolCommand}
   */
  modifyIpamPool(
    args: ModifyIpamPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyIpamPoolCommandOutput>;
  modifyIpamPool(args: ModifyIpamPoolCommandInput, cb: (err: any, data?: ModifyIpamPoolCommandOutput) => void): void;
  modifyIpamPool(
    args: ModifyIpamPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyIpamPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyIpamResourceCidrCommand}
   */
  modifyIpamResourceCidr(
    args: ModifyIpamResourceCidrCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyIpamResourceCidrCommandOutput>;
  modifyIpamResourceCidr(
    args: ModifyIpamResourceCidrCommandInput,
    cb: (err: any, data?: ModifyIpamResourceCidrCommandOutput) => void
  ): void;
  modifyIpamResourceCidr(
    args: ModifyIpamResourceCidrCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyIpamResourceCidrCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyIpamResourceDiscoveryCommand}
   */
  modifyIpamResourceDiscovery(
    args: ModifyIpamResourceDiscoveryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyIpamResourceDiscoveryCommandOutput>;
  modifyIpamResourceDiscovery(
    args: ModifyIpamResourceDiscoveryCommandInput,
    cb: (err: any, data?: ModifyIpamResourceDiscoveryCommandOutput) => void
  ): void;
  modifyIpamResourceDiscovery(
    args: ModifyIpamResourceDiscoveryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyIpamResourceDiscoveryCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyIpamScopeCommand}
   */
  modifyIpamScope(
    args: ModifyIpamScopeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyIpamScopeCommandOutput>;
  modifyIpamScope(args: ModifyIpamScopeCommandInput, cb: (err: any, data?: ModifyIpamScopeCommandOutput) => void): void;
  modifyIpamScope(
    args: ModifyIpamScopeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyIpamScopeCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyLaunchTemplateCommand}
   */
  modifyLaunchTemplate(): Promise<ModifyLaunchTemplateCommandOutput>;
  modifyLaunchTemplate(
    args: ModifyLaunchTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyLaunchTemplateCommandOutput>;
  modifyLaunchTemplate(
    args: ModifyLaunchTemplateCommandInput,
    cb: (err: any, data?: ModifyLaunchTemplateCommandOutput) => void
  ): void;
  modifyLaunchTemplate(
    args: ModifyLaunchTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyLaunchTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyLocalGatewayRouteCommand}
   */
  modifyLocalGatewayRoute(
    args: ModifyLocalGatewayRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyLocalGatewayRouteCommandOutput>;
  modifyLocalGatewayRoute(
    args: ModifyLocalGatewayRouteCommandInput,
    cb: (err: any, data?: ModifyLocalGatewayRouteCommandOutput) => void
  ): void;
  modifyLocalGatewayRoute(
    args: ModifyLocalGatewayRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyLocalGatewayRouteCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyManagedPrefixListCommand}
   */
  modifyManagedPrefixList(
    args: ModifyManagedPrefixListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyManagedPrefixListCommandOutput>;
  modifyManagedPrefixList(
    args: ModifyManagedPrefixListCommandInput,
    cb: (err: any, data?: ModifyManagedPrefixListCommandOutput) => void
  ): void;
  modifyManagedPrefixList(
    args: ModifyManagedPrefixListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyManagedPrefixListCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyNetworkInterfaceAttributeCommand}
   */
  modifyNetworkInterfaceAttribute(
    args: ModifyNetworkInterfaceAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyNetworkInterfaceAttributeCommandOutput>;
  modifyNetworkInterfaceAttribute(
    args: ModifyNetworkInterfaceAttributeCommandInput,
    cb: (err: any, data?: ModifyNetworkInterfaceAttributeCommandOutput) => void
  ): void;
  modifyNetworkInterfaceAttribute(
    args: ModifyNetworkInterfaceAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyNetworkInterfaceAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyPrivateDnsNameOptionsCommand}
   */
  modifyPrivateDnsNameOptions(
    args: ModifyPrivateDnsNameOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyPrivateDnsNameOptionsCommandOutput>;
  modifyPrivateDnsNameOptions(
    args: ModifyPrivateDnsNameOptionsCommandInput,
    cb: (err: any, data?: ModifyPrivateDnsNameOptionsCommandOutput) => void
  ): void;
  modifyPrivateDnsNameOptions(
    args: ModifyPrivateDnsNameOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyPrivateDnsNameOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyPublicIpDnsNameOptionsCommand}
   */
  modifyPublicIpDnsNameOptions(
    args: ModifyPublicIpDnsNameOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyPublicIpDnsNameOptionsCommandOutput>;
  modifyPublicIpDnsNameOptions(
    args: ModifyPublicIpDnsNameOptionsCommandInput,
    cb: (err: any, data?: ModifyPublicIpDnsNameOptionsCommandOutput) => void
  ): void;
  modifyPublicIpDnsNameOptions(
    args: ModifyPublicIpDnsNameOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyPublicIpDnsNameOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyReservedInstancesCommand}
   */
  modifyReservedInstances(
    args: ModifyReservedInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyReservedInstancesCommandOutput>;
  modifyReservedInstances(
    args: ModifyReservedInstancesCommandInput,
    cb: (err: any, data?: ModifyReservedInstancesCommandOutput) => void
  ): void;
  modifyReservedInstances(
    args: ModifyReservedInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyReservedInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyRouteServerCommand}
   */
  modifyRouteServer(
    args: ModifyRouteServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyRouteServerCommandOutput>;
  modifyRouteServer(
    args: ModifyRouteServerCommandInput,
    cb: (err: any, data?: ModifyRouteServerCommandOutput) => void
  ): void;
  modifyRouteServer(
    args: ModifyRouteServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyRouteServerCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifySecurityGroupRulesCommand}
   */
  modifySecurityGroupRules(
    args: ModifySecurityGroupRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifySecurityGroupRulesCommandOutput>;
  modifySecurityGroupRules(
    args: ModifySecurityGroupRulesCommandInput,
    cb: (err: any, data?: ModifySecurityGroupRulesCommandOutput) => void
  ): void;
  modifySecurityGroupRules(
    args: ModifySecurityGroupRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifySecurityGroupRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifySnapshotAttributeCommand}
   */
  modifySnapshotAttribute(
    args: ModifySnapshotAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifySnapshotAttributeCommandOutput>;
  modifySnapshotAttribute(
    args: ModifySnapshotAttributeCommandInput,
    cb: (err: any, data?: ModifySnapshotAttributeCommandOutput) => void
  ): void;
  modifySnapshotAttribute(
    args: ModifySnapshotAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifySnapshotAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifySnapshotTierCommand}
   */
  modifySnapshotTier(
    args: ModifySnapshotTierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifySnapshotTierCommandOutput>;
  modifySnapshotTier(
    args: ModifySnapshotTierCommandInput,
    cb: (err: any, data?: ModifySnapshotTierCommandOutput) => void
  ): void;
  modifySnapshotTier(
    args: ModifySnapshotTierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifySnapshotTierCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifySpotFleetRequestCommand}
   */
  modifySpotFleetRequest(
    args: ModifySpotFleetRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifySpotFleetRequestCommandOutput>;
  modifySpotFleetRequest(
    args: ModifySpotFleetRequestCommandInput,
    cb: (err: any, data?: ModifySpotFleetRequestCommandOutput) => void
  ): void;
  modifySpotFleetRequest(
    args: ModifySpotFleetRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifySpotFleetRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifySubnetAttributeCommand}
   */
  modifySubnetAttribute(
    args: ModifySubnetAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifySubnetAttributeCommandOutput>;
  modifySubnetAttribute(
    args: ModifySubnetAttributeCommandInput,
    cb: (err: any, data?: ModifySubnetAttributeCommandOutput) => void
  ): void;
  modifySubnetAttribute(
    args: ModifySubnetAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifySubnetAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyTrafficMirrorFilterNetworkServicesCommand}
   */
  modifyTrafficMirrorFilterNetworkServices(
    args: ModifyTrafficMirrorFilterNetworkServicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyTrafficMirrorFilterNetworkServicesCommandOutput>;
  modifyTrafficMirrorFilterNetworkServices(
    args: ModifyTrafficMirrorFilterNetworkServicesCommandInput,
    cb: (err: any, data?: ModifyTrafficMirrorFilterNetworkServicesCommandOutput) => void
  ): void;
  modifyTrafficMirrorFilterNetworkServices(
    args: ModifyTrafficMirrorFilterNetworkServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyTrafficMirrorFilterNetworkServicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyTrafficMirrorFilterRuleCommand}
   */
  modifyTrafficMirrorFilterRule(
    args: ModifyTrafficMirrorFilterRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyTrafficMirrorFilterRuleCommandOutput>;
  modifyTrafficMirrorFilterRule(
    args: ModifyTrafficMirrorFilterRuleCommandInput,
    cb: (err: any, data?: ModifyTrafficMirrorFilterRuleCommandOutput) => void
  ): void;
  modifyTrafficMirrorFilterRule(
    args: ModifyTrafficMirrorFilterRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyTrafficMirrorFilterRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyTrafficMirrorSessionCommand}
   */
  modifyTrafficMirrorSession(
    args: ModifyTrafficMirrorSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyTrafficMirrorSessionCommandOutput>;
  modifyTrafficMirrorSession(
    args: ModifyTrafficMirrorSessionCommandInput,
    cb: (err: any, data?: ModifyTrafficMirrorSessionCommandOutput) => void
  ): void;
  modifyTrafficMirrorSession(
    args: ModifyTrafficMirrorSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyTrafficMirrorSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyTransitGatewayCommand}
   */
  modifyTransitGateway(
    args: ModifyTransitGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyTransitGatewayCommandOutput>;
  modifyTransitGateway(
    args: ModifyTransitGatewayCommandInput,
    cb: (err: any, data?: ModifyTransitGatewayCommandOutput) => void
  ): void;
  modifyTransitGateway(
    args: ModifyTransitGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyTransitGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyTransitGatewayPrefixListReferenceCommand}
   */
  modifyTransitGatewayPrefixListReference(
    args: ModifyTransitGatewayPrefixListReferenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyTransitGatewayPrefixListReferenceCommandOutput>;
  modifyTransitGatewayPrefixListReference(
    args: ModifyTransitGatewayPrefixListReferenceCommandInput,
    cb: (err: any, data?: ModifyTransitGatewayPrefixListReferenceCommandOutput) => void
  ): void;
  modifyTransitGatewayPrefixListReference(
    args: ModifyTransitGatewayPrefixListReferenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyTransitGatewayPrefixListReferenceCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyTransitGatewayVpcAttachmentCommand}
   */
  modifyTransitGatewayVpcAttachment(
    args: ModifyTransitGatewayVpcAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyTransitGatewayVpcAttachmentCommandOutput>;
  modifyTransitGatewayVpcAttachment(
    args: ModifyTransitGatewayVpcAttachmentCommandInput,
    cb: (err: any, data?: ModifyTransitGatewayVpcAttachmentCommandOutput) => void
  ): void;
  modifyTransitGatewayVpcAttachment(
    args: ModifyTransitGatewayVpcAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyTransitGatewayVpcAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyVerifiedAccessEndpointCommand}
   */
  modifyVerifiedAccessEndpoint(
    args: ModifyVerifiedAccessEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVerifiedAccessEndpointCommandOutput>;
  modifyVerifiedAccessEndpoint(
    args: ModifyVerifiedAccessEndpointCommandInput,
    cb: (err: any, data?: ModifyVerifiedAccessEndpointCommandOutput) => void
  ): void;
  modifyVerifiedAccessEndpoint(
    args: ModifyVerifiedAccessEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVerifiedAccessEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyVerifiedAccessEndpointPolicyCommand}
   */
  modifyVerifiedAccessEndpointPolicy(
    args: ModifyVerifiedAccessEndpointPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVerifiedAccessEndpointPolicyCommandOutput>;
  modifyVerifiedAccessEndpointPolicy(
    args: ModifyVerifiedAccessEndpointPolicyCommandInput,
    cb: (err: any, data?: ModifyVerifiedAccessEndpointPolicyCommandOutput) => void
  ): void;
  modifyVerifiedAccessEndpointPolicy(
    args: ModifyVerifiedAccessEndpointPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVerifiedAccessEndpointPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyVerifiedAccessGroupCommand}
   */
  modifyVerifiedAccessGroup(
    args: ModifyVerifiedAccessGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVerifiedAccessGroupCommandOutput>;
  modifyVerifiedAccessGroup(
    args: ModifyVerifiedAccessGroupCommandInput,
    cb: (err: any, data?: ModifyVerifiedAccessGroupCommandOutput) => void
  ): void;
  modifyVerifiedAccessGroup(
    args: ModifyVerifiedAccessGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVerifiedAccessGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyVerifiedAccessGroupPolicyCommand}
   */
  modifyVerifiedAccessGroupPolicy(
    args: ModifyVerifiedAccessGroupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVerifiedAccessGroupPolicyCommandOutput>;
  modifyVerifiedAccessGroupPolicy(
    args: ModifyVerifiedAccessGroupPolicyCommandInput,
    cb: (err: any, data?: ModifyVerifiedAccessGroupPolicyCommandOutput) => void
  ): void;
  modifyVerifiedAccessGroupPolicy(
    args: ModifyVerifiedAccessGroupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVerifiedAccessGroupPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyVerifiedAccessInstanceCommand}
   */
  modifyVerifiedAccessInstance(
    args: ModifyVerifiedAccessInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVerifiedAccessInstanceCommandOutput>;
  modifyVerifiedAccessInstance(
    args: ModifyVerifiedAccessInstanceCommandInput,
    cb: (err: any, data?: ModifyVerifiedAccessInstanceCommandOutput) => void
  ): void;
  modifyVerifiedAccessInstance(
    args: ModifyVerifiedAccessInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVerifiedAccessInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyVerifiedAccessInstanceLoggingConfigurationCommand}
   */
  modifyVerifiedAccessInstanceLoggingConfiguration(
    args: ModifyVerifiedAccessInstanceLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVerifiedAccessInstanceLoggingConfigurationCommandOutput>;
  modifyVerifiedAccessInstanceLoggingConfiguration(
    args: ModifyVerifiedAccessInstanceLoggingConfigurationCommandInput,
    cb: (err: any, data?: ModifyVerifiedAccessInstanceLoggingConfigurationCommandOutput) => void
  ): void;
  modifyVerifiedAccessInstanceLoggingConfiguration(
    args: ModifyVerifiedAccessInstanceLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVerifiedAccessInstanceLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyVerifiedAccessTrustProviderCommand}
   */
  modifyVerifiedAccessTrustProvider(
    args: ModifyVerifiedAccessTrustProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVerifiedAccessTrustProviderCommandOutput>;
  modifyVerifiedAccessTrustProvider(
    args: ModifyVerifiedAccessTrustProviderCommandInput,
    cb: (err: any, data?: ModifyVerifiedAccessTrustProviderCommandOutput) => void
  ): void;
  modifyVerifiedAccessTrustProvider(
    args: ModifyVerifiedAccessTrustProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVerifiedAccessTrustProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyVolumeCommand}
   */
  modifyVolume(args: ModifyVolumeCommandInput, options?: __HttpHandlerOptions): Promise<ModifyVolumeCommandOutput>;
  modifyVolume(args: ModifyVolumeCommandInput, cb: (err: any, data?: ModifyVolumeCommandOutput) => void): void;
  modifyVolume(
    args: ModifyVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyVolumeAttributeCommand}
   */
  modifyVolumeAttribute(
    args: ModifyVolumeAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVolumeAttributeCommandOutput>;
  modifyVolumeAttribute(
    args: ModifyVolumeAttributeCommandInput,
    cb: (err: any, data?: ModifyVolumeAttributeCommandOutput) => void
  ): void;
  modifyVolumeAttribute(
    args: ModifyVolumeAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVolumeAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyVpcAttributeCommand}
   */
  modifyVpcAttribute(
    args: ModifyVpcAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVpcAttributeCommandOutput>;
  modifyVpcAttribute(
    args: ModifyVpcAttributeCommandInput,
    cb: (err: any, data?: ModifyVpcAttributeCommandOutput) => void
  ): void;
  modifyVpcAttribute(
    args: ModifyVpcAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVpcAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyVpcBlockPublicAccessExclusionCommand}
   */
  modifyVpcBlockPublicAccessExclusion(
    args: ModifyVpcBlockPublicAccessExclusionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVpcBlockPublicAccessExclusionCommandOutput>;
  modifyVpcBlockPublicAccessExclusion(
    args: ModifyVpcBlockPublicAccessExclusionCommandInput,
    cb: (err: any, data?: ModifyVpcBlockPublicAccessExclusionCommandOutput) => void
  ): void;
  modifyVpcBlockPublicAccessExclusion(
    args: ModifyVpcBlockPublicAccessExclusionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVpcBlockPublicAccessExclusionCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyVpcBlockPublicAccessOptionsCommand}
   */
  modifyVpcBlockPublicAccessOptions(
    args: ModifyVpcBlockPublicAccessOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVpcBlockPublicAccessOptionsCommandOutput>;
  modifyVpcBlockPublicAccessOptions(
    args: ModifyVpcBlockPublicAccessOptionsCommandInput,
    cb: (err: any, data?: ModifyVpcBlockPublicAccessOptionsCommandOutput) => void
  ): void;
  modifyVpcBlockPublicAccessOptions(
    args: ModifyVpcBlockPublicAccessOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVpcBlockPublicAccessOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyVpcEndpointCommand}
   */
  modifyVpcEndpoint(
    args: ModifyVpcEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVpcEndpointCommandOutput>;
  modifyVpcEndpoint(
    args: ModifyVpcEndpointCommandInput,
    cb: (err: any, data?: ModifyVpcEndpointCommandOutput) => void
  ): void;
  modifyVpcEndpoint(
    args: ModifyVpcEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVpcEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyVpcEndpointConnectionNotificationCommand}
   */
  modifyVpcEndpointConnectionNotification(
    args: ModifyVpcEndpointConnectionNotificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVpcEndpointConnectionNotificationCommandOutput>;
  modifyVpcEndpointConnectionNotification(
    args: ModifyVpcEndpointConnectionNotificationCommandInput,
    cb: (err: any, data?: ModifyVpcEndpointConnectionNotificationCommandOutput) => void
  ): void;
  modifyVpcEndpointConnectionNotification(
    args: ModifyVpcEndpointConnectionNotificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVpcEndpointConnectionNotificationCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyVpcEndpointServiceConfigurationCommand}
   */
  modifyVpcEndpointServiceConfiguration(
    args: ModifyVpcEndpointServiceConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVpcEndpointServiceConfigurationCommandOutput>;
  modifyVpcEndpointServiceConfiguration(
    args: ModifyVpcEndpointServiceConfigurationCommandInput,
    cb: (err: any, data?: ModifyVpcEndpointServiceConfigurationCommandOutput) => void
  ): void;
  modifyVpcEndpointServiceConfiguration(
    args: ModifyVpcEndpointServiceConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVpcEndpointServiceConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyVpcEndpointServicePayerResponsibilityCommand}
   */
  modifyVpcEndpointServicePayerResponsibility(
    args: ModifyVpcEndpointServicePayerResponsibilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVpcEndpointServicePayerResponsibilityCommandOutput>;
  modifyVpcEndpointServicePayerResponsibility(
    args: ModifyVpcEndpointServicePayerResponsibilityCommandInput,
    cb: (err: any, data?: ModifyVpcEndpointServicePayerResponsibilityCommandOutput) => void
  ): void;
  modifyVpcEndpointServicePayerResponsibility(
    args: ModifyVpcEndpointServicePayerResponsibilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVpcEndpointServicePayerResponsibilityCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyVpcEndpointServicePermissionsCommand}
   */
  modifyVpcEndpointServicePermissions(
    args: ModifyVpcEndpointServicePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVpcEndpointServicePermissionsCommandOutput>;
  modifyVpcEndpointServicePermissions(
    args: ModifyVpcEndpointServicePermissionsCommandInput,
    cb: (err: any, data?: ModifyVpcEndpointServicePermissionsCommandOutput) => void
  ): void;
  modifyVpcEndpointServicePermissions(
    args: ModifyVpcEndpointServicePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVpcEndpointServicePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyVpcPeeringConnectionOptionsCommand}
   */
  modifyVpcPeeringConnectionOptions(
    args: ModifyVpcPeeringConnectionOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVpcPeeringConnectionOptionsCommandOutput>;
  modifyVpcPeeringConnectionOptions(
    args: ModifyVpcPeeringConnectionOptionsCommandInput,
    cb: (err: any, data?: ModifyVpcPeeringConnectionOptionsCommandOutput) => void
  ): void;
  modifyVpcPeeringConnectionOptions(
    args: ModifyVpcPeeringConnectionOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVpcPeeringConnectionOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyVpcTenancyCommand}
   */
  modifyVpcTenancy(
    args: ModifyVpcTenancyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVpcTenancyCommandOutput>;
  modifyVpcTenancy(
    args: ModifyVpcTenancyCommandInput,
    cb: (err: any, data?: ModifyVpcTenancyCommandOutput) => void
  ): void;
  modifyVpcTenancy(
    args: ModifyVpcTenancyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVpcTenancyCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyVpnConnectionCommand}
   */
  modifyVpnConnection(
    args: ModifyVpnConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVpnConnectionCommandOutput>;
  modifyVpnConnection(
    args: ModifyVpnConnectionCommandInput,
    cb: (err: any, data?: ModifyVpnConnectionCommandOutput) => void
  ): void;
  modifyVpnConnection(
    args: ModifyVpnConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVpnConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyVpnConnectionOptionsCommand}
   */
  modifyVpnConnectionOptions(
    args: ModifyVpnConnectionOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVpnConnectionOptionsCommandOutput>;
  modifyVpnConnectionOptions(
    args: ModifyVpnConnectionOptionsCommandInput,
    cb: (err: any, data?: ModifyVpnConnectionOptionsCommandOutput) => void
  ): void;
  modifyVpnConnectionOptions(
    args: ModifyVpnConnectionOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVpnConnectionOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyVpnTunnelCertificateCommand}
   */
  modifyVpnTunnelCertificate(
    args: ModifyVpnTunnelCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVpnTunnelCertificateCommandOutput>;
  modifyVpnTunnelCertificate(
    args: ModifyVpnTunnelCertificateCommandInput,
    cb: (err: any, data?: ModifyVpnTunnelCertificateCommandOutput) => void
  ): void;
  modifyVpnTunnelCertificate(
    args: ModifyVpnTunnelCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVpnTunnelCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyVpnTunnelOptionsCommand}
   */
  modifyVpnTunnelOptions(
    args: ModifyVpnTunnelOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVpnTunnelOptionsCommandOutput>;
  modifyVpnTunnelOptions(
    args: ModifyVpnTunnelOptionsCommandInput,
    cb: (err: any, data?: ModifyVpnTunnelOptionsCommandOutput) => void
  ): void;
  modifyVpnTunnelOptions(
    args: ModifyVpnTunnelOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVpnTunnelOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link MonitorInstancesCommand}
   */
  monitorInstances(
    args: MonitorInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MonitorInstancesCommandOutput>;
  monitorInstances(
    args: MonitorInstancesCommandInput,
    cb: (err: any, data?: MonitorInstancesCommandOutput) => void
  ): void;
  monitorInstances(
    args: MonitorInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MonitorInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link MoveAddressToVpcCommand}
   */
  moveAddressToVpc(
    args: MoveAddressToVpcCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MoveAddressToVpcCommandOutput>;
  moveAddressToVpc(
    args: MoveAddressToVpcCommandInput,
    cb: (err: any, data?: MoveAddressToVpcCommandOutput) => void
  ): void;
  moveAddressToVpc(
    args: MoveAddressToVpcCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MoveAddressToVpcCommandOutput) => void
  ): void;

  /**
   * @see {@link MoveByoipCidrToIpamCommand}
   */
  moveByoipCidrToIpam(
    args: MoveByoipCidrToIpamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MoveByoipCidrToIpamCommandOutput>;
  moveByoipCidrToIpam(
    args: MoveByoipCidrToIpamCommandInput,
    cb: (err: any, data?: MoveByoipCidrToIpamCommandOutput) => void
  ): void;
  moveByoipCidrToIpam(
    args: MoveByoipCidrToIpamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MoveByoipCidrToIpamCommandOutput) => void
  ): void;

  /**
   * @see {@link MoveCapacityReservationInstancesCommand}
   */
  moveCapacityReservationInstances(
    args: MoveCapacityReservationInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MoveCapacityReservationInstancesCommandOutput>;
  moveCapacityReservationInstances(
    args: MoveCapacityReservationInstancesCommandInput,
    cb: (err: any, data?: MoveCapacityReservationInstancesCommandOutput) => void
  ): void;
  moveCapacityReservationInstances(
    args: MoveCapacityReservationInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MoveCapacityReservationInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ProvisionByoipCidrCommand}
   */
  provisionByoipCidr(
    args: ProvisionByoipCidrCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ProvisionByoipCidrCommandOutput>;
  provisionByoipCidr(
    args: ProvisionByoipCidrCommandInput,
    cb: (err: any, data?: ProvisionByoipCidrCommandOutput) => void
  ): void;
  provisionByoipCidr(
    args: ProvisionByoipCidrCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ProvisionByoipCidrCommandOutput) => void
  ): void;

  /**
   * @see {@link ProvisionIpamByoasnCommand}
   */
  provisionIpamByoasn(
    args: ProvisionIpamByoasnCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ProvisionIpamByoasnCommandOutput>;
  provisionIpamByoasn(
    args: ProvisionIpamByoasnCommandInput,
    cb: (err: any, data?: ProvisionIpamByoasnCommandOutput) => void
  ): void;
  provisionIpamByoasn(
    args: ProvisionIpamByoasnCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ProvisionIpamByoasnCommandOutput) => void
  ): void;

  /**
   * @see {@link ProvisionIpamPoolCidrCommand}
   */
  provisionIpamPoolCidr(
    args: ProvisionIpamPoolCidrCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ProvisionIpamPoolCidrCommandOutput>;
  provisionIpamPoolCidr(
    args: ProvisionIpamPoolCidrCommandInput,
    cb: (err: any, data?: ProvisionIpamPoolCidrCommandOutput) => void
  ): void;
  provisionIpamPoolCidr(
    args: ProvisionIpamPoolCidrCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ProvisionIpamPoolCidrCommandOutput) => void
  ): void;

  /**
   * @see {@link ProvisionPublicIpv4PoolCidrCommand}
   */
  provisionPublicIpv4PoolCidr(
    args: ProvisionPublicIpv4PoolCidrCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ProvisionPublicIpv4PoolCidrCommandOutput>;
  provisionPublicIpv4PoolCidr(
    args: ProvisionPublicIpv4PoolCidrCommandInput,
    cb: (err: any, data?: ProvisionPublicIpv4PoolCidrCommandOutput) => void
  ): void;
  provisionPublicIpv4PoolCidr(
    args: ProvisionPublicIpv4PoolCidrCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ProvisionPublicIpv4PoolCidrCommandOutput) => void
  ): void;

  /**
   * @see {@link PurchaseCapacityBlockCommand}
   */
  purchaseCapacityBlock(
    args: PurchaseCapacityBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PurchaseCapacityBlockCommandOutput>;
  purchaseCapacityBlock(
    args: PurchaseCapacityBlockCommandInput,
    cb: (err: any, data?: PurchaseCapacityBlockCommandOutput) => void
  ): void;
  purchaseCapacityBlock(
    args: PurchaseCapacityBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PurchaseCapacityBlockCommandOutput) => void
  ): void;

  /**
   * @see {@link PurchaseCapacityBlockExtensionCommand}
   */
  purchaseCapacityBlockExtension(
    args: PurchaseCapacityBlockExtensionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PurchaseCapacityBlockExtensionCommandOutput>;
  purchaseCapacityBlockExtension(
    args: PurchaseCapacityBlockExtensionCommandInput,
    cb: (err: any, data?: PurchaseCapacityBlockExtensionCommandOutput) => void
  ): void;
  purchaseCapacityBlockExtension(
    args: PurchaseCapacityBlockExtensionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PurchaseCapacityBlockExtensionCommandOutput) => void
  ): void;

  /**
   * @see {@link PurchaseHostReservationCommand}
   */
  purchaseHostReservation(
    args: PurchaseHostReservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PurchaseHostReservationCommandOutput>;
  purchaseHostReservation(
    args: PurchaseHostReservationCommandInput,
    cb: (err: any, data?: PurchaseHostReservationCommandOutput) => void
  ): void;
  purchaseHostReservation(
    args: PurchaseHostReservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PurchaseHostReservationCommandOutput) => void
  ): void;

  /**
   * @see {@link PurchaseReservedInstancesOfferingCommand}
   */
  purchaseReservedInstancesOffering(
    args: PurchaseReservedInstancesOfferingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PurchaseReservedInstancesOfferingCommandOutput>;
  purchaseReservedInstancesOffering(
    args: PurchaseReservedInstancesOfferingCommandInput,
    cb: (err: any, data?: PurchaseReservedInstancesOfferingCommandOutput) => void
  ): void;
  purchaseReservedInstancesOffering(
    args: PurchaseReservedInstancesOfferingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PurchaseReservedInstancesOfferingCommandOutput) => void
  ): void;

  /**
   * @see {@link PurchaseScheduledInstancesCommand}
   */
  purchaseScheduledInstances(
    args: PurchaseScheduledInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PurchaseScheduledInstancesCommandOutput>;
  purchaseScheduledInstances(
    args: PurchaseScheduledInstancesCommandInput,
    cb: (err: any, data?: PurchaseScheduledInstancesCommandOutput) => void
  ): void;
  purchaseScheduledInstances(
    args: PurchaseScheduledInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PurchaseScheduledInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link RebootInstancesCommand}
   */
  rebootInstances(
    args: RebootInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootInstancesCommandOutput>;
  rebootInstances(args: RebootInstancesCommandInput, cb: (err: any, data?: RebootInstancesCommandOutput) => void): void;
  rebootInstances(
    args: RebootInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterImageCommand}
   */
  registerImage(args: RegisterImageCommandInput, options?: __HttpHandlerOptions): Promise<RegisterImageCommandOutput>;
  registerImage(args: RegisterImageCommandInput, cb: (err: any, data?: RegisterImageCommandOutput) => void): void;
  registerImage(
    args: RegisterImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterImageCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterInstanceEventNotificationAttributesCommand}
   */
  registerInstanceEventNotificationAttributes(
    args: RegisterInstanceEventNotificationAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterInstanceEventNotificationAttributesCommandOutput>;
  registerInstanceEventNotificationAttributes(
    args: RegisterInstanceEventNotificationAttributesCommandInput,
    cb: (err: any, data?: RegisterInstanceEventNotificationAttributesCommandOutput) => void
  ): void;
  registerInstanceEventNotificationAttributes(
    args: RegisterInstanceEventNotificationAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterInstanceEventNotificationAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterTransitGatewayMulticastGroupMembersCommand}
   */
  registerTransitGatewayMulticastGroupMembers(
    args: RegisterTransitGatewayMulticastGroupMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterTransitGatewayMulticastGroupMembersCommandOutput>;
  registerTransitGatewayMulticastGroupMembers(
    args: RegisterTransitGatewayMulticastGroupMembersCommandInput,
    cb: (err: any, data?: RegisterTransitGatewayMulticastGroupMembersCommandOutput) => void
  ): void;
  registerTransitGatewayMulticastGroupMembers(
    args: RegisterTransitGatewayMulticastGroupMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterTransitGatewayMulticastGroupMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterTransitGatewayMulticastGroupSourcesCommand}
   */
  registerTransitGatewayMulticastGroupSources(
    args: RegisterTransitGatewayMulticastGroupSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterTransitGatewayMulticastGroupSourcesCommandOutput>;
  registerTransitGatewayMulticastGroupSources(
    args: RegisterTransitGatewayMulticastGroupSourcesCommandInput,
    cb: (err: any, data?: RegisterTransitGatewayMulticastGroupSourcesCommandOutput) => void
  ): void;
  registerTransitGatewayMulticastGroupSources(
    args: RegisterTransitGatewayMulticastGroupSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterTransitGatewayMulticastGroupSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectCapacityReservationBillingOwnershipCommand}
   */
  rejectCapacityReservationBillingOwnership(
    args: RejectCapacityReservationBillingOwnershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectCapacityReservationBillingOwnershipCommandOutput>;
  rejectCapacityReservationBillingOwnership(
    args: RejectCapacityReservationBillingOwnershipCommandInput,
    cb: (err: any, data?: RejectCapacityReservationBillingOwnershipCommandOutput) => void
  ): void;
  rejectCapacityReservationBillingOwnership(
    args: RejectCapacityReservationBillingOwnershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectCapacityReservationBillingOwnershipCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectTransitGatewayMulticastDomainAssociationsCommand}
   */
  rejectTransitGatewayMulticastDomainAssociations(): Promise<RejectTransitGatewayMulticastDomainAssociationsCommandOutput>;
  rejectTransitGatewayMulticastDomainAssociations(
    args: RejectTransitGatewayMulticastDomainAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectTransitGatewayMulticastDomainAssociationsCommandOutput>;
  rejectTransitGatewayMulticastDomainAssociations(
    args: RejectTransitGatewayMulticastDomainAssociationsCommandInput,
    cb: (err: any, data?: RejectTransitGatewayMulticastDomainAssociationsCommandOutput) => void
  ): void;
  rejectTransitGatewayMulticastDomainAssociations(
    args: RejectTransitGatewayMulticastDomainAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectTransitGatewayMulticastDomainAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectTransitGatewayPeeringAttachmentCommand}
   */
  rejectTransitGatewayPeeringAttachment(
    args: RejectTransitGatewayPeeringAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectTransitGatewayPeeringAttachmentCommandOutput>;
  rejectTransitGatewayPeeringAttachment(
    args: RejectTransitGatewayPeeringAttachmentCommandInput,
    cb: (err: any, data?: RejectTransitGatewayPeeringAttachmentCommandOutput) => void
  ): void;
  rejectTransitGatewayPeeringAttachment(
    args: RejectTransitGatewayPeeringAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectTransitGatewayPeeringAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectTransitGatewayVpcAttachmentCommand}
   */
  rejectTransitGatewayVpcAttachment(
    args: RejectTransitGatewayVpcAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectTransitGatewayVpcAttachmentCommandOutput>;
  rejectTransitGatewayVpcAttachment(
    args: RejectTransitGatewayVpcAttachmentCommandInput,
    cb: (err: any, data?: RejectTransitGatewayVpcAttachmentCommandOutput) => void
  ): void;
  rejectTransitGatewayVpcAttachment(
    args: RejectTransitGatewayVpcAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectTransitGatewayVpcAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectVpcEndpointConnectionsCommand}
   */
  rejectVpcEndpointConnections(
    args: RejectVpcEndpointConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectVpcEndpointConnectionsCommandOutput>;
  rejectVpcEndpointConnections(
    args: RejectVpcEndpointConnectionsCommandInput,
    cb: (err: any, data?: RejectVpcEndpointConnectionsCommandOutput) => void
  ): void;
  rejectVpcEndpointConnections(
    args: RejectVpcEndpointConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectVpcEndpointConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectVpcPeeringConnectionCommand}
   */
  rejectVpcPeeringConnection(
    args: RejectVpcPeeringConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectVpcPeeringConnectionCommandOutput>;
  rejectVpcPeeringConnection(
    args: RejectVpcPeeringConnectionCommandInput,
    cb: (err: any, data?: RejectVpcPeeringConnectionCommandOutput) => void
  ): void;
  rejectVpcPeeringConnection(
    args: RejectVpcPeeringConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectVpcPeeringConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link ReleaseAddressCommand}
   */
  releaseAddress(): Promise<ReleaseAddressCommandOutput>;
  releaseAddress(
    args: ReleaseAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReleaseAddressCommandOutput>;
  releaseAddress(args: ReleaseAddressCommandInput, cb: (err: any, data?: ReleaseAddressCommandOutput) => void): void;
  releaseAddress(
    args: ReleaseAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReleaseAddressCommandOutput) => void
  ): void;

  /**
   * @see {@link ReleaseHostsCommand}
   */
  releaseHosts(args: ReleaseHostsCommandInput, options?: __HttpHandlerOptions): Promise<ReleaseHostsCommandOutput>;
  releaseHosts(args: ReleaseHostsCommandInput, cb: (err: any, data?: ReleaseHostsCommandOutput) => void): void;
  releaseHosts(
    args: ReleaseHostsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReleaseHostsCommandOutput) => void
  ): void;

  /**
   * @see {@link ReleaseIpamPoolAllocationCommand}
   */
  releaseIpamPoolAllocation(
    args: ReleaseIpamPoolAllocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReleaseIpamPoolAllocationCommandOutput>;
  releaseIpamPoolAllocation(
    args: ReleaseIpamPoolAllocationCommandInput,
    cb: (err: any, data?: ReleaseIpamPoolAllocationCommandOutput) => void
  ): void;
  releaseIpamPoolAllocation(
    args: ReleaseIpamPoolAllocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReleaseIpamPoolAllocationCommandOutput) => void
  ): void;

  /**
   * @see {@link ReplaceIamInstanceProfileAssociationCommand}
   */
  replaceIamInstanceProfileAssociation(
    args: ReplaceIamInstanceProfileAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReplaceIamInstanceProfileAssociationCommandOutput>;
  replaceIamInstanceProfileAssociation(
    args: ReplaceIamInstanceProfileAssociationCommandInput,
    cb: (err: any, data?: ReplaceIamInstanceProfileAssociationCommandOutput) => void
  ): void;
  replaceIamInstanceProfileAssociation(
    args: ReplaceIamInstanceProfileAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReplaceIamInstanceProfileAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link ReplaceImageCriteriaInAllowedImagesSettingsCommand}
   */
  replaceImageCriteriaInAllowedImagesSettings(): Promise<ReplaceImageCriteriaInAllowedImagesSettingsCommandOutput>;
  replaceImageCriteriaInAllowedImagesSettings(
    args: ReplaceImageCriteriaInAllowedImagesSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReplaceImageCriteriaInAllowedImagesSettingsCommandOutput>;
  replaceImageCriteriaInAllowedImagesSettings(
    args: ReplaceImageCriteriaInAllowedImagesSettingsCommandInput,
    cb: (err: any, data?: ReplaceImageCriteriaInAllowedImagesSettingsCommandOutput) => void
  ): void;
  replaceImageCriteriaInAllowedImagesSettings(
    args: ReplaceImageCriteriaInAllowedImagesSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReplaceImageCriteriaInAllowedImagesSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ReplaceNetworkAclAssociationCommand}
   */
  replaceNetworkAclAssociation(
    args: ReplaceNetworkAclAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReplaceNetworkAclAssociationCommandOutput>;
  replaceNetworkAclAssociation(
    args: ReplaceNetworkAclAssociationCommandInput,
    cb: (err: any, data?: ReplaceNetworkAclAssociationCommandOutput) => void
  ): void;
  replaceNetworkAclAssociation(
    args: ReplaceNetworkAclAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReplaceNetworkAclAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link ReplaceNetworkAclEntryCommand}
   */
  replaceNetworkAclEntry(
    args: ReplaceNetworkAclEntryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReplaceNetworkAclEntryCommandOutput>;
  replaceNetworkAclEntry(
    args: ReplaceNetworkAclEntryCommandInput,
    cb: (err: any, data?: ReplaceNetworkAclEntryCommandOutput) => void
  ): void;
  replaceNetworkAclEntry(
    args: ReplaceNetworkAclEntryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReplaceNetworkAclEntryCommandOutput) => void
  ): void;

  /**
   * @see {@link ReplaceRouteCommand}
   */
  replaceRoute(args: ReplaceRouteCommandInput, options?: __HttpHandlerOptions): Promise<ReplaceRouteCommandOutput>;
  replaceRoute(args: ReplaceRouteCommandInput, cb: (err: any, data?: ReplaceRouteCommandOutput) => void): void;
  replaceRoute(
    args: ReplaceRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReplaceRouteCommandOutput) => void
  ): void;

  /**
   * @see {@link ReplaceRouteTableAssociationCommand}
   */
  replaceRouteTableAssociation(
    args: ReplaceRouteTableAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReplaceRouteTableAssociationCommandOutput>;
  replaceRouteTableAssociation(
    args: ReplaceRouteTableAssociationCommandInput,
    cb: (err: any, data?: ReplaceRouteTableAssociationCommandOutput) => void
  ): void;
  replaceRouteTableAssociation(
    args: ReplaceRouteTableAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReplaceRouteTableAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link ReplaceTransitGatewayRouteCommand}
   */
  replaceTransitGatewayRoute(
    args: ReplaceTransitGatewayRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReplaceTransitGatewayRouteCommandOutput>;
  replaceTransitGatewayRoute(
    args: ReplaceTransitGatewayRouteCommandInput,
    cb: (err: any, data?: ReplaceTransitGatewayRouteCommandOutput) => void
  ): void;
  replaceTransitGatewayRoute(
    args: ReplaceTransitGatewayRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReplaceTransitGatewayRouteCommandOutput) => void
  ): void;

  /**
   * @see {@link ReplaceVpnTunnelCommand}
   */
  replaceVpnTunnel(
    args: ReplaceVpnTunnelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReplaceVpnTunnelCommandOutput>;
  replaceVpnTunnel(
    args: ReplaceVpnTunnelCommandInput,
    cb: (err: any, data?: ReplaceVpnTunnelCommandOutput) => void
  ): void;
  replaceVpnTunnel(
    args: ReplaceVpnTunnelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReplaceVpnTunnelCommandOutput) => void
  ): void;

  /**
   * @see {@link ReportInstanceStatusCommand}
   */
  reportInstanceStatus(
    args: ReportInstanceStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReportInstanceStatusCommandOutput>;
  reportInstanceStatus(
    args: ReportInstanceStatusCommandInput,
    cb: (err: any, data?: ReportInstanceStatusCommandOutput) => void
  ): void;
  reportInstanceStatus(
    args: ReportInstanceStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReportInstanceStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link RequestSpotFleetCommand}
   */
  requestSpotFleet(
    args: RequestSpotFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RequestSpotFleetCommandOutput>;
  requestSpotFleet(
    args: RequestSpotFleetCommandInput,
    cb: (err: any, data?: RequestSpotFleetCommandOutput) => void
  ): void;
  requestSpotFleet(
    args: RequestSpotFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RequestSpotFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link RequestSpotInstancesCommand}
   */
  requestSpotInstances(): Promise<RequestSpotInstancesCommandOutput>;
  requestSpotInstances(
    args: RequestSpotInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RequestSpotInstancesCommandOutput>;
  requestSpotInstances(
    args: RequestSpotInstancesCommandInput,
    cb: (err: any, data?: RequestSpotInstancesCommandOutput) => void
  ): void;
  requestSpotInstances(
    args: RequestSpotInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RequestSpotInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetAddressAttributeCommand}
   */
  resetAddressAttribute(
    args: ResetAddressAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetAddressAttributeCommandOutput>;
  resetAddressAttribute(
    args: ResetAddressAttributeCommandInput,
    cb: (err: any, data?: ResetAddressAttributeCommandOutput) => void
  ): void;
  resetAddressAttribute(
    args: ResetAddressAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetAddressAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetEbsDefaultKmsKeyIdCommand}
   */
  resetEbsDefaultKmsKeyId(): Promise<ResetEbsDefaultKmsKeyIdCommandOutput>;
  resetEbsDefaultKmsKeyId(
    args: ResetEbsDefaultKmsKeyIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetEbsDefaultKmsKeyIdCommandOutput>;
  resetEbsDefaultKmsKeyId(
    args: ResetEbsDefaultKmsKeyIdCommandInput,
    cb: (err: any, data?: ResetEbsDefaultKmsKeyIdCommandOutput) => void
  ): void;
  resetEbsDefaultKmsKeyId(
    args: ResetEbsDefaultKmsKeyIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetEbsDefaultKmsKeyIdCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetFpgaImageAttributeCommand}
   */
  resetFpgaImageAttribute(
    args: ResetFpgaImageAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetFpgaImageAttributeCommandOutput>;
  resetFpgaImageAttribute(
    args: ResetFpgaImageAttributeCommandInput,
    cb: (err: any, data?: ResetFpgaImageAttributeCommandOutput) => void
  ): void;
  resetFpgaImageAttribute(
    args: ResetFpgaImageAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetFpgaImageAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetImageAttributeCommand}
   */
  resetImageAttribute(
    args: ResetImageAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetImageAttributeCommandOutput>;
  resetImageAttribute(
    args: ResetImageAttributeCommandInput,
    cb: (err: any, data?: ResetImageAttributeCommandOutput) => void
  ): void;
  resetImageAttribute(
    args: ResetImageAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetImageAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetInstanceAttributeCommand}
   */
  resetInstanceAttribute(
    args: ResetInstanceAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetInstanceAttributeCommandOutput>;
  resetInstanceAttribute(
    args: ResetInstanceAttributeCommandInput,
    cb: (err: any, data?: ResetInstanceAttributeCommandOutput) => void
  ): void;
  resetInstanceAttribute(
    args: ResetInstanceAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetInstanceAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetNetworkInterfaceAttributeCommand}
   */
  resetNetworkInterfaceAttribute(
    args: ResetNetworkInterfaceAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetNetworkInterfaceAttributeCommandOutput>;
  resetNetworkInterfaceAttribute(
    args: ResetNetworkInterfaceAttributeCommandInput,
    cb: (err: any, data?: ResetNetworkInterfaceAttributeCommandOutput) => void
  ): void;
  resetNetworkInterfaceAttribute(
    args: ResetNetworkInterfaceAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetNetworkInterfaceAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetSnapshotAttributeCommand}
   */
  resetSnapshotAttribute(
    args: ResetSnapshotAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetSnapshotAttributeCommandOutput>;
  resetSnapshotAttribute(
    args: ResetSnapshotAttributeCommandInput,
    cb: (err: any, data?: ResetSnapshotAttributeCommandOutput) => void
  ): void;
  resetSnapshotAttribute(
    args: ResetSnapshotAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetSnapshotAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreAddressToClassicCommand}
   */
  restoreAddressToClassic(
    args: RestoreAddressToClassicCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreAddressToClassicCommandOutput>;
  restoreAddressToClassic(
    args: RestoreAddressToClassicCommandInput,
    cb: (err: any, data?: RestoreAddressToClassicCommandOutput) => void
  ): void;
  restoreAddressToClassic(
    args: RestoreAddressToClassicCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreAddressToClassicCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreImageFromRecycleBinCommand}
   */
  restoreImageFromRecycleBin(
    args: RestoreImageFromRecycleBinCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreImageFromRecycleBinCommandOutput>;
  restoreImageFromRecycleBin(
    args: RestoreImageFromRecycleBinCommandInput,
    cb: (err: any, data?: RestoreImageFromRecycleBinCommandOutput) => void
  ): void;
  restoreImageFromRecycleBin(
    args: RestoreImageFromRecycleBinCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreImageFromRecycleBinCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreManagedPrefixListVersionCommand}
   */
  restoreManagedPrefixListVersion(
    args: RestoreManagedPrefixListVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreManagedPrefixListVersionCommandOutput>;
  restoreManagedPrefixListVersion(
    args: RestoreManagedPrefixListVersionCommandInput,
    cb: (err: any, data?: RestoreManagedPrefixListVersionCommandOutput) => void
  ): void;
  restoreManagedPrefixListVersion(
    args: RestoreManagedPrefixListVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreManagedPrefixListVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreSnapshotFromRecycleBinCommand}
   */
  restoreSnapshotFromRecycleBin(
    args: RestoreSnapshotFromRecycleBinCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreSnapshotFromRecycleBinCommandOutput>;
  restoreSnapshotFromRecycleBin(
    args: RestoreSnapshotFromRecycleBinCommandInput,
    cb: (err: any, data?: RestoreSnapshotFromRecycleBinCommandOutput) => void
  ): void;
  restoreSnapshotFromRecycleBin(
    args: RestoreSnapshotFromRecycleBinCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreSnapshotFromRecycleBinCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreSnapshotTierCommand}
   */
  restoreSnapshotTier(
    args: RestoreSnapshotTierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreSnapshotTierCommandOutput>;
  restoreSnapshotTier(
    args: RestoreSnapshotTierCommandInput,
    cb: (err: any, data?: RestoreSnapshotTierCommandOutput) => void
  ): void;
  restoreSnapshotTier(
    args: RestoreSnapshotTierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreSnapshotTierCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeClientVpnIngressCommand}
   */
  revokeClientVpnIngress(
    args: RevokeClientVpnIngressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeClientVpnIngressCommandOutput>;
  revokeClientVpnIngress(
    args: RevokeClientVpnIngressCommandInput,
    cb: (err: any, data?: RevokeClientVpnIngressCommandOutput) => void
  ): void;
  revokeClientVpnIngress(
    args: RevokeClientVpnIngressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeClientVpnIngressCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeSecurityGroupEgressCommand}
   */
  revokeSecurityGroupEgress(
    args: RevokeSecurityGroupEgressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeSecurityGroupEgressCommandOutput>;
  revokeSecurityGroupEgress(
    args: RevokeSecurityGroupEgressCommandInput,
    cb: (err: any, data?: RevokeSecurityGroupEgressCommandOutput) => void
  ): void;
  revokeSecurityGroupEgress(
    args: RevokeSecurityGroupEgressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeSecurityGroupEgressCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeSecurityGroupIngressCommand}
   */
  revokeSecurityGroupIngress(): Promise<RevokeSecurityGroupIngressCommandOutput>;
  revokeSecurityGroupIngress(
    args: RevokeSecurityGroupIngressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeSecurityGroupIngressCommandOutput>;
  revokeSecurityGroupIngress(
    args: RevokeSecurityGroupIngressCommandInput,
    cb: (err: any, data?: RevokeSecurityGroupIngressCommandOutput) => void
  ): void;
  revokeSecurityGroupIngress(
    args: RevokeSecurityGroupIngressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeSecurityGroupIngressCommandOutput) => void
  ): void;

  /**
   * @see {@link RunInstancesCommand}
   */
  runInstances(args: RunInstancesCommandInput, options?: __HttpHandlerOptions): Promise<RunInstancesCommandOutput>;
  runInstances(args: RunInstancesCommandInput, cb: (err: any, data?: RunInstancesCommandOutput) => void): void;
  runInstances(
    args: RunInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RunInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link RunScheduledInstancesCommand}
   */
  runScheduledInstances(
    args: RunScheduledInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RunScheduledInstancesCommandOutput>;
  runScheduledInstances(
    args: RunScheduledInstancesCommandInput,
    cb: (err: any, data?: RunScheduledInstancesCommandOutput) => void
  ): void;
  runScheduledInstances(
    args: RunScheduledInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RunScheduledInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchLocalGatewayRoutesCommand}
   */
  searchLocalGatewayRoutes(
    args: SearchLocalGatewayRoutesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchLocalGatewayRoutesCommandOutput>;
  searchLocalGatewayRoutes(
    args: SearchLocalGatewayRoutesCommandInput,
    cb: (err: any, data?: SearchLocalGatewayRoutesCommandOutput) => void
  ): void;
  searchLocalGatewayRoutes(
    args: SearchLocalGatewayRoutesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchLocalGatewayRoutesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchTransitGatewayMulticastGroupsCommand}
   */
  searchTransitGatewayMulticastGroups(
    args: SearchTransitGatewayMulticastGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchTransitGatewayMulticastGroupsCommandOutput>;
  searchTransitGatewayMulticastGroups(
    args: SearchTransitGatewayMulticastGroupsCommandInput,
    cb: (err: any, data?: SearchTransitGatewayMulticastGroupsCommandOutput) => void
  ): void;
  searchTransitGatewayMulticastGroups(
    args: SearchTransitGatewayMulticastGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchTransitGatewayMulticastGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchTransitGatewayRoutesCommand}
   */
  searchTransitGatewayRoutes(
    args: SearchTransitGatewayRoutesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchTransitGatewayRoutesCommandOutput>;
  searchTransitGatewayRoutes(
    args: SearchTransitGatewayRoutesCommandInput,
    cb: (err: any, data?: SearchTransitGatewayRoutesCommandOutput) => void
  ): void;
  searchTransitGatewayRoutes(
    args: SearchTransitGatewayRoutesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchTransitGatewayRoutesCommandOutput) => void
  ): void;

  /**
   * @see {@link SendDiagnosticInterruptCommand}
   */
  sendDiagnosticInterrupt(
    args: SendDiagnosticInterruptCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendDiagnosticInterruptCommandOutput>;
  sendDiagnosticInterrupt(
    args: SendDiagnosticInterruptCommandInput,
    cb: (err: any, data?: SendDiagnosticInterruptCommandOutput) => void
  ): void;
  sendDiagnosticInterrupt(
    args: SendDiagnosticInterruptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendDiagnosticInterruptCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDeclarativePoliciesReportCommand}
   */
  startDeclarativePoliciesReport(
    args: StartDeclarativePoliciesReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDeclarativePoliciesReportCommandOutput>;
  startDeclarativePoliciesReport(
    args: StartDeclarativePoliciesReportCommandInput,
    cb: (err: any, data?: StartDeclarativePoliciesReportCommandOutput) => void
  ): void;
  startDeclarativePoliciesReport(
    args: StartDeclarativePoliciesReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDeclarativePoliciesReportCommandOutput) => void
  ): void;

  /**
   * @see {@link StartInstancesCommand}
   */
  startInstances(
    args: StartInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartInstancesCommandOutput>;
  startInstances(args: StartInstancesCommandInput, cb: (err: any, data?: StartInstancesCommandOutput) => void): void;
  startInstances(
    args: StartInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link StartNetworkInsightsAccessScopeAnalysisCommand}
   */
  startNetworkInsightsAccessScopeAnalysis(
    args: StartNetworkInsightsAccessScopeAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartNetworkInsightsAccessScopeAnalysisCommandOutput>;
  startNetworkInsightsAccessScopeAnalysis(
    args: StartNetworkInsightsAccessScopeAnalysisCommandInput,
    cb: (err: any, data?: StartNetworkInsightsAccessScopeAnalysisCommandOutput) => void
  ): void;
  startNetworkInsightsAccessScopeAnalysis(
    args: StartNetworkInsightsAccessScopeAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartNetworkInsightsAccessScopeAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link StartNetworkInsightsAnalysisCommand}
   */
  startNetworkInsightsAnalysis(
    args: StartNetworkInsightsAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartNetworkInsightsAnalysisCommandOutput>;
  startNetworkInsightsAnalysis(
    args: StartNetworkInsightsAnalysisCommandInput,
    cb: (err: any, data?: StartNetworkInsightsAnalysisCommandOutput) => void
  ): void;
  startNetworkInsightsAnalysis(
    args: StartNetworkInsightsAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartNetworkInsightsAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link StartVpcEndpointServicePrivateDnsVerificationCommand}
   */
  startVpcEndpointServicePrivateDnsVerification(
    args: StartVpcEndpointServicePrivateDnsVerificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartVpcEndpointServicePrivateDnsVerificationCommandOutput>;
  startVpcEndpointServicePrivateDnsVerification(
    args: StartVpcEndpointServicePrivateDnsVerificationCommandInput,
    cb: (err: any, data?: StartVpcEndpointServicePrivateDnsVerificationCommandOutput) => void
  ): void;
  startVpcEndpointServicePrivateDnsVerification(
    args: StartVpcEndpointServicePrivateDnsVerificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartVpcEndpointServicePrivateDnsVerificationCommandOutput) => void
  ): void;

  /**
   * @see {@link StopInstancesCommand}
   */
  stopInstances(args: StopInstancesCommandInput, options?: __HttpHandlerOptions): Promise<StopInstancesCommandOutput>;
  stopInstances(args: StopInstancesCommandInput, cb: (err: any, data?: StopInstancesCommandOutput) => void): void;
  stopInstances(
    args: StopInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link TerminateClientVpnConnectionsCommand}
   */
  terminateClientVpnConnections(
    args: TerminateClientVpnConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateClientVpnConnectionsCommandOutput>;
  terminateClientVpnConnections(
    args: TerminateClientVpnConnectionsCommandInput,
    cb: (err: any, data?: TerminateClientVpnConnectionsCommandOutput) => void
  ): void;
  terminateClientVpnConnections(
    args: TerminateClientVpnConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateClientVpnConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link TerminateInstancesCommand}
   */
  terminateInstances(
    args: TerminateInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateInstancesCommandOutput>;
  terminateInstances(
    args: TerminateInstancesCommandInput,
    cb: (err: any, data?: TerminateInstancesCommandOutput) => void
  ): void;
  terminateInstances(
    args: TerminateInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link UnassignIpv6AddressesCommand}
   */
  unassignIpv6Addresses(
    args: UnassignIpv6AddressesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnassignIpv6AddressesCommandOutput>;
  unassignIpv6Addresses(
    args: UnassignIpv6AddressesCommandInput,
    cb: (err: any, data?: UnassignIpv6AddressesCommandOutput) => void
  ): void;
  unassignIpv6Addresses(
    args: UnassignIpv6AddressesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnassignIpv6AddressesCommandOutput) => void
  ): void;

  /**
   * @see {@link UnassignPrivateIpAddressesCommand}
   */
  unassignPrivateIpAddresses(
    args: UnassignPrivateIpAddressesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnassignPrivateIpAddressesCommandOutput>;
  unassignPrivateIpAddresses(
    args: UnassignPrivateIpAddressesCommandInput,
    cb: (err: any, data?: UnassignPrivateIpAddressesCommandOutput) => void
  ): void;
  unassignPrivateIpAddresses(
    args: UnassignPrivateIpAddressesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnassignPrivateIpAddressesCommandOutput) => void
  ): void;

  /**
   * @see {@link UnassignPrivateNatGatewayAddressCommand}
   */
  unassignPrivateNatGatewayAddress(
    args: UnassignPrivateNatGatewayAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnassignPrivateNatGatewayAddressCommandOutput>;
  unassignPrivateNatGatewayAddress(
    args: UnassignPrivateNatGatewayAddressCommandInput,
    cb: (err: any, data?: UnassignPrivateNatGatewayAddressCommandOutput) => void
  ): void;
  unassignPrivateNatGatewayAddress(
    args: UnassignPrivateNatGatewayAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnassignPrivateNatGatewayAddressCommandOutput) => void
  ): void;

  /**
   * @see {@link UnlockSnapshotCommand}
   */
  unlockSnapshot(
    args: UnlockSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnlockSnapshotCommandOutput>;
  unlockSnapshot(args: UnlockSnapshotCommandInput, cb: (err: any, data?: UnlockSnapshotCommandOutput) => void): void;
  unlockSnapshot(
    args: UnlockSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnlockSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link UnmonitorInstancesCommand}
   */
  unmonitorInstances(
    args: UnmonitorInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnmonitorInstancesCommandOutput>;
  unmonitorInstances(
    args: UnmonitorInstancesCommandInput,
    cb: (err: any, data?: UnmonitorInstancesCommandOutput) => void
  ): void;
  unmonitorInstances(
    args: UnmonitorInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnmonitorInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSecurityGroupRuleDescriptionsEgressCommand}
   */
  updateSecurityGroupRuleDescriptionsEgress(): Promise<UpdateSecurityGroupRuleDescriptionsEgressCommandOutput>;
  updateSecurityGroupRuleDescriptionsEgress(
    args: UpdateSecurityGroupRuleDescriptionsEgressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSecurityGroupRuleDescriptionsEgressCommandOutput>;
  updateSecurityGroupRuleDescriptionsEgress(
    args: UpdateSecurityGroupRuleDescriptionsEgressCommandInput,
    cb: (err: any, data?: UpdateSecurityGroupRuleDescriptionsEgressCommandOutput) => void
  ): void;
  updateSecurityGroupRuleDescriptionsEgress(
    args: UpdateSecurityGroupRuleDescriptionsEgressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSecurityGroupRuleDescriptionsEgressCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSecurityGroupRuleDescriptionsIngressCommand}
   */
  updateSecurityGroupRuleDescriptionsIngress(): Promise<UpdateSecurityGroupRuleDescriptionsIngressCommandOutput>;
  updateSecurityGroupRuleDescriptionsIngress(
    args: UpdateSecurityGroupRuleDescriptionsIngressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSecurityGroupRuleDescriptionsIngressCommandOutput>;
  updateSecurityGroupRuleDescriptionsIngress(
    args: UpdateSecurityGroupRuleDescriptionsIngressCommandInput,
    cb: (err: any, data?: UpdateSecurityGroupRuleDescriptionsIngressCommandOutput) => void
  ): void;
  updateSecurityGroupRuleDescriptionsIngress(
    args: UpdateSecurityGroupRuleDescriptionsIngressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSecurityGroupRuleDescriptionsIngressCommandOutput) => void
  ): void;

  /**
   * @see {@link WithdrawByoipCidrCommand}
   */
  withdrawByoipCidr(
    args: WithdrawByoipCidrCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<WithdrawByoipCidrCommandOutput>;
  withdrawByoipCidr(
    args: WithdrawByoipCidrCommandInput,
    cb: (err: any, data?: WithdrawByoipCidrCommandOutput) => void
  ): void;
  withdrawByoipCidr(
    args: WithdrawByoipCidrCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: WithdrawByoipCidrCommandOutput) => void
  ): void;
}

/**
 * <fullname>Amazon Elastic Compute Cloud</fullname>
 *          <p>You can access the features of Amazon Elastic Compute Cloud (Amazon EC2) programmatically. For more information,
 *         see the <a href="https://docs.aws.amazon.com/ec2/latest/devguide">Amazon EC2 Developer Guide</a>.</p>
 * @public
 */
export class EC2 extends EC2Client implements EC2 {}
createAggregatedClient(commands, EC2);
