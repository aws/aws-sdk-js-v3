import { EC2Client } from "./EC2Client";
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
  AssociateAddressCommand,
  AssociateAddressCommandInput,
  AssociateAddressCommandOutput,
} from "./commands/AssociateAddressCommand";
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
  AssociateRouteTableCommand,
  AssociateRouteTableCommandInput,
  AssociateRouteTableCommandOutput,
} from "./commands/AssociateRouteTableCommand";
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
  AssociateTransitGatewayRouteTableCommand,
  AssociateTransitGatewayRouteTableCommandInput,
  AssociateTransitGatewayRouteTableCommandOutput,
} from "./commands/AssociateTransitGatewayRouteTableCommand";
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
  CancelConversionTaskCommand,
  CancelConversionTaskCommandInput,
  CancelConversionTaskCommandOutput,
} from "./commands/CancelConversionTaskCommand";
import {
  CancelExportTaskCommand,
  CancelExportTaskCommandInput,
  CancelExportTaskCommandOutput,
} from "./commands/CancelExportTaskCommand";
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
  CreateCapacityReservationCommand,
  CreateCapacityReservationCommandInput,
  CreateCapacityReservationCommandOutput,
} from "./commands/CreateCapacityReservationCommand";
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
  CreateInstanceExportTaskCommand,
  CreateInstanceExportTaskCommandInput,
  CreateInstanceExportTaskCommandOutput,
} from "./commands/CreateInstanceExportTaskCommand";
import {
  CreateInternetGatewayCommand,
  CreateInternetGatewayCommandInput,
  CreateInternetGatewayCommandOutput,
} from "./commands/CreateInternetGatewayCommand";
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
  CreateLocalGatewayRouteTableVpcAssociationCommand,
  CreateLocalGatewayRouteTableVpcAssociationCommandInput,
  CreateLocalGatewayRouteTableVpcAssociationCommandOutput,
} from "./commands/CreateLocalGatewayRouteTableVpcAssociationCommand";
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
  CreateReservedInstancesListingCommand,
  CreateReservedInstancesListingCommandInput,
  CreateReservedInstancesListingCommandOutput,
} from "./commands/CreateReservedInstancesListingCommand";
import { CreateRouteCommand, CreateRouteCommandInput, CreateRouteCommandOutput } from "./commands/CreateRouteCommand";
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
  CreateVolumeCommand,
  CreateVolumeCommandInput,
  CreateVolumeCommandOutput,
} from "./commands/CreateVolumeCommand";
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
  DeleteInternetGatewayCommand,
  DeleteInternetGatewayCommandInput,
  DeleteInternetGatewayCommandOutput,
} from "./commands/DeleteInternetGatewayCommand";
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
  DeleteLocalGatewayRouteTableVpcAssociationCommand,
  DeleteLocalGatewayRouteTableVpcAssociationCommandInput,
  DeleteLocalGatewayRouteTableVpcAssociationCommandOutput,
} from "./commands/DeleteLocalGatewayRouteTableVpcAssociationCommand";
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
  DeleteQueuedReservedInstancesCommand,
  DeleteQueuedReservedInstancesCommandInput,
  DeleteQueuedReservedInstancesCommandOutput,
} from "./commands/DeleteQueuedReservedInstancesCommand";
import { DeleteRouteCommand, DeleteRouteCommandInput, DeleteRouteCommandOutput } from "./commands/DeleteRouteCommand";
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
  DeleteVolumeCommand,
  DeleteVolumeCommandInput,
  DeleteVolumeCommandOutput,
} from "./commands/DeleteVolumeCommand";
import { DeleteVpcCommand, DeleteVpcCommandInput, DeleteVpcCommandOutput } from "./commands/DeleteVpcCommand";
import {
  DeleteVpcEndpointConnectionNotificationsCommand,
  DeleteVpcEndpointConnectionNotificationsCommandInput,
  DeleteVpcEndpointConnectionNotificationsCommandOutput,
} from "./commands/DeleteVpcEndpointConnectionNotificationsCommand";
import {
  DeleteVpcEndpointServiceConfigurationsCommand,
  DeleteVpcEndpointServiceConfigurationsCommandInput,
  DeleteVpcEndpointServiceConfigurationsCommandOutput,
} from "./commands/DeleteVpcEndpointServiceConfigurationsCommand";
import {
  DeleteVpcEndpointsCommand,
  DeleteVpcEndpointsCommandInput,
  DeleteVpcEndpointsCommandOutput,
} from "./commands/DeleteVpcEndpointsCommand";
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
  DescribeIdFormatCommand,
  DescribeIdFormatCommandInput,
  DescribeIdFormatCommandOutput,
} from "./commands/DescribeIdFormatCommand";
import {
  DescribeIdentityIdFormatCommand,
  DescribeIdentityIdFormatCommandInput,
  DescribeIdentityIdFormatCommandOutput,
} from "./commands/DescribeIdentityIdFormatCommand";
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
  DescribeInstanceStatusCommand,
  DescribeInstanceStatusCommandInput,
  DescribeInstanceStatusCommandOutput,
} from "./commands/DescribeInstanceStatusCommand";
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
  DescribeInstancesCommand,
  DescribeInstancesCommandInput,
  DescribeInstancesCommandOutput,
} from "./commands/DescribeInstancesCommand";
import {
  DescribeInternetGatewaysCommand,
  DescribeInternetGatewaysCommandInput,
  DescribeInternetGatewaysCommandOutput,
} from "./commands/DescribeInternetGatewaysCommand";
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
  DescribeLaunchTemplateVersionsCommand,
  DescribeLaunchTemplateVersionsCommandInput,
  DescribeLaunchTemplateVersionsCommandOutput,
} from "./commands/DescribeLaunchTemplateVersionsCommand";
import {
  DescribeLaunchTemplatesCommand,
  DescribeLaunchTemplatesCommandInput,
  DescribeLaunchTemplatesCommandOutput,
} from "./commands/DescribeLaunchTemplatesCommand";
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
  DescribeLocalGatewayRouteTablesCommand,
  DescribeLocalGatewayRouteTablesCommandInput,
  DescribeLocalGatewayRouteTablesCommandOutput,
} from "./commands/DescribeLocalGatewayRouteTablesCommand";
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
  DescribeLocalGatewaysCommand,
  DescribeLocalGatewaysCommandInput,
  DescribeLocalGatewaysCommandOutput,
} from "./commands/DescribeLocalGatewaysCommand";
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
  DescribeSecurityGroupsCommand,
  DescribeSecurityGroupsCommandInput,
  DescribeSecurityGroupsCommandOutput,
} from "./commands/DescribeSecurityGroupsCommand";
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
  DescribeTransitGatewayRouteTablesCommand,
  DescribeTransitGatewayRouteTablesCommandInput,
  DescribeTransitGatewayRouteTablesCommandOutput,
} from "./commands/DescribeTransitGatewayRouteTablesCommand";
import {
  DescribeTransitGatewayVpcAttachmentsCommand,
  DescribeTransitGatewayVpcAttachmentsCommandInput,
  DescribeTransitGatewayVpcAttachmentsCommandOutput,
} from "./commands/DescribeTransitGatewayVpcAttachmentsCommand";
import {
  DescribeTransitGatewaysCommand,
  DescribeTransitGatewaysCommandInput,
  DescribeTransitGatewaysCommandOutput,
} from "./commands/DescribeTransitGatewaysCommand";
import {
  DescribeVolumeAttributeCommand,
  DescribeVolumeAttributeCommandInput,
  DescribeVolumeAttributeCommandOutput,
} from "./commands/DescribeVolumeAttributeCommand";
import {
  DescribeVolumeStatusCommand,
  DescribeVolumeStatusCommandInput,
  DescribeVolumeStatusCommandOutput,
} from "./commands/DescribeVolumeStatusCommand";
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
  DescribeVpcAttributeCommand,
  DescribeVpcAttributeCommandInput,
  DescribeVpcAttributeCommandOutput,
} from "./commands/DescribeVpcAttributeCommand";
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
  DescribeVpcEndpointsCommand,
  DescribeVpcEndpointsCommandInput,
  DescribeVpcEndpointsCommandOutput,
} from "./commands/DescribeVpcEndpointsCommand";
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
  DisableEbsEncryptionByDefaultCommand,
  DisableEbsEncryptionByDefaultCommandInput,
  DisableEbsEncryptionByDefaultCommandOutput,
} from "./commands/DisableEbsEncryptionByDefaultCommand";
import {
  DisableFastSnapshotRestoresCommand,
  DisableFastSnapshotRestoresCommandInput,
  DisableFastSnapshotRestoresCommandOutput,
} from "./commands/DisableFastSnapshotRestoresCommand";
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
  DisassociateRouteTableCommand,
  DisassociateRouteTableCommandInput,
  DisassociateRouteTableCommandOutput,
} from "./commands/DisassociateRouteTableCommand";
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
  DisassociateTransitGatewayRouteTableCommand,
  DisassociateTransitGatewayRouteTableCommandInput,
  DisassociateTransitGatewayRouteTableCommandOutput,
} from "./commands/DisassociateTransitGatewayRouteTableCommand";
import {
  DisassociateVpcCidrBlockCommand,
  DisassociateVpcCidrBlockCommandInput,
  DisassociateVpcCidrBlockCommandOutput,
} from "./commands/DisassociateVpcCidrBlockCommand";
import {
  EnableEbsEncryptionByDefaultCommand,
  EnableEbsEncryptionByDefaultCommandInput,
  EnableEbsEncryptionByDefaultCommandOutput,
} from "./commands/EnableEbsEncryptionByDefaultCommand";
import {
  EnableFastSnapshotRestoresCommand,
  EnableFastSnapshotRestoresCommandInput,
  EnableFastSnapshotRestoresCommandOutput,
} from "./commands/EnableFastSnapshotRestoresCommand";
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
  ModifyIdFormatCommand,
  ModifyIdFormatCommandInput,
  ModifyIdFormatCommandOutput,
} from "./commands/ModifyIdFormatCommand";
import {
  ModifyIdentityIdFormatCommand,
  ModifyIdentityIdFormatCommandInput,
  ModifyIdentityIdFormatCommandOutput,
} from "./commands/ModifyIdentityIdFormatCommand";
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
  ModifyInstanceMetadataOptionsCommand,
  ModifyInstanceMetadataOptionsCommandInput,
  ModifyInstanceMetadataOptionsCommandOutput,
} from "./commands/ModifyInstanceMetadataOptionsCommand";
import {
  ModifyInstancePlacementCommand,
  ModifyInstancePlacementCommandInput,
  ModifyInstancePlacementCommandOutput,
} from "./commands/ModifyInstancePlacementCommand";
import {
  ModifyLaunchTemplateCommand,
  ModifyLaunchTemplateCommandInput,
  ModifyLaunchTemplateCommandOutput,
} from "./commands/ModifyLaunchTemplateCommand";
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
  ModifyReservedInstancesCommand,
  ModifyReservedInstancesCommandInput,
  ModifyReservedInstancesCommandOutput,
} from "./commands/ModifyReservedInstancesCommand";
import {
  ModifySnapshotAttributeCommand,
  ModifySnapshotAttributeCommandInput,
  ModifySnapshotAttributeCommandOutput,
} from "./commands/ModifySnapshotAttributeCommand";
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
  ProvisionByoipCidrCommand,
  ProvisionByoipCidrCommandInput,
  ProvisionByoipCidrCommandOutput,
} from "./commands/ProvisionByoipCidrCommand";
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
  ReplaceIamInstanceProfileAssociationCommand,
  ReplaceIamInstanceProfileAssociationCommandInput,
  ReplaceIamInstanceProfileAssociationCommandOutput,
} from "./commands/ReplaceIamInstanceProfileAssociationCommand";
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
  RestoreManagedPrefixListVersionCommand,
  RestoreManagedPrefixListVersionCommandInput,
  RestoreManagedPrefixListVersionCommandOutput,
} from "./commands/RestoreManagedPrefixListVersionCommand";
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
  StartInstancesCommand,
  StartInstancesCommandInput,
  StartInstancesCommandOutput,
} from "./commands/StartInstancesCommand";
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
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>Amazon Elastic Compute Cloud</fullname>
 *          <p>Amazon Elastic Compute Cloud (Amazon EC2) provides secure and resizable computing capacity in the AWS cloud.
 *           Using Amazon EC2 eliminates the need to invest in hardware up front, so you can develop and
 *           deploy applications faster.</p>
 *          <p>To learn more, see the following resources:</p>
 *          <ul>
 *             <li>
 *                <p>Amazon EC2: <a href="http://aws.amazon.com/ec2">AmazonEC2 product page</a>, <a href="http://aws.amazon.com/documentation/ec2">Amazon EC2 documentation</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Amazon EBS: <a href="http://aws.amazon.com/ebs">Amazon EBS product page</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html">Amazon EBS documentation</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Amazon VPC: <a href="http://aws.amazon.com/vpc">Amazon VPC product page</a>, <a href="http://aws.amazon.com/documentation/vpc">Amazon VPC documentation</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>AWS VPN: <a href="http://aws.amazon.com/vpn">AWS VPN product page</a>, <a href="http://aws.amazon.com/documentation/vpn">AWS VPN documentation</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class EC2 extends EC2Client {
  /**
   * <p>Accepts the Convertible Reserved Instance exchange quote described in the <a>GetReservedInstancesExchangeQuote</a> call.</p>
   */
  public acceptReservedInstancesExchangeQuote(
    args: AcceptReservedInstancesExchangeQuoteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptReservedInstancesExchangeQuoteCommandOutput>;
  public acceptReservedInstancesExchangeQuote(
    args: AcceptReservedInstancesExchangeQuoteCommandInput,
    cb: (err: any, data?: AcceptReservedInstancesExchangeQuoteCommandOutput) => void
  ): void;
  public acceptReservedInstancesExchangeQuote(
    args: AcceptReservedInstancesExchangeQuoteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptReservedInstancesExchangeQuoteCommandOutput) => void
  ): void;
  public acceptReservedInstancesExchangeQuote(
    args: AcceptReservedInstancesExchangeQuoteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AcceptReservedInstancesExchangeQuoteCommandOutput) => void),
    cb?: (err: any, data?: AcceptReservedInstancesExchangeQuoteCommandOutput) => void
  ): Promise<AcceptReservedInstancesExchangeQuoteCommandOutput> | void {
    const command = new AcceptReservedInstancesExchangeQuoteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Accepts a request to associate subnets with a transit gateway multicast domain.</p>
   */
  public acceptTransitGatewayMulticastDomainAssociations(
    args: AcceptTransitGatewayMulticastDomainAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptTransitGatewayMulticastDomainAssociationsCommandOutput>;
  public acceptTransitGatewayMulticastDomainAssociations(
    args: AcceptTransitGatewayMulticastDomainAssociationsCommandInput,
    cb: (err: any, data?: AcceptTransitGatewayMulticastDomainAssociationsCommandOutput) => void
  ): void;
  public acceptTransitGatewayMulticastDomainAssociations(
    args: AcceptTransitGatewayMulticastDomainAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptTransitGatewayMulticastDomainAssociationsCommandOutput) => void
  ): void;
  public acceptTransitGatewayMulticastDomainAssociations(
    args: AcceptTransitGatewayMulticastDomainAssociationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AcceptTransitGatewayMulticastDomainAssociationsCommandOutput) => void),
    cb?: (err: any, data?: AcceptTransitGatewayMulticastDomainAssociationsCommandOutput) => void
  ): Promise<AcceptTransitGatewayMulticastDomainAssociationsCommandOutput> | void {
    const command = new AcceptTransitGatewayMulticastDomainAssociationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Accepts a transit gateway peering attachment request. The peering attachment must be
   *             in the <code>pendingAcceptance</code> state.</p>
   */
  public acceptTransitGatewayPeeringAttachment(
    args: AcceptTransitGatewayPeeringAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptTransitGatewayPeeringAttachmentCommandOutput>;
  public acceptTransitGatewayPeeringAttachment(
    args: AcceptTransitGatewayPeeringAttachmentCommandInput,
    cb: (err: any, data?: AcceptTransitGatewayPeeringAttachmentCommandOutput) => void
  ): void;
  public acceptTransitGatewayPeeringAttachment(
    args: AcceptTransitGatewayPeeringAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptTransitGatewayPeeringAttachmentCommandOutput) => void
  ): void;
  public acceptTransitGatewayPeeringAttachment(
    args: AcceptTransitGatewayPeeringAttachmentCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AcceptTransitGatewayPeeringAttachmentCommandOutput) => void),
    cb?: (err: any, data?: AcceptTransitGatewayPeeringAttachmentCommandOutput) => void
  ): Promise<AcceptTransitGatewayPeeringAttachmentCommandOutput> | void {
    const command = new AcceptTransitGatewayPeeringAttachmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Accepts a request to attach a VPC to a transit gateway.</p>
   *          <p>The VPC attachment must be in the <code>pendingAcceptance</code> state.
   *          Use <a>DescribeTransitGatewayVpcAttachments</a> to view your pending VPC attachment requests.
   *          Use <a>RejectTransitGatewayVpcAttachment</a> to reject a VPC attachment request.</p>
   */
  public acceptTransitGatewayVpcAttachment(
    args: AcceptTransitGatewayVpcAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptTransitGatewayVpcAttachmentCommandOutput>;
  public acceptTransitGatewayVpcAttachment(
    args: AcceptTransitGatewayVpcAttachmentCommandInput,
    cb: (err: any, data?: AcceptTransitGatewayVpcAttachmentCommandOutput) => void
  ): void;
  public acceptTransitGatewayVpcAttachment(
    args: AcceptTransitGatewayVpcAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptTransitGatewayVpcAttachmentCommandOutput) => void
  ): void;
  public acceptTransitGatewayVpcAttachment(
    args: AcceptTransitGatewayVpcAttachmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AcceptTransitGatewayVpcAttachmentCommandOutput) => void),
    cb?: (err: any, data?: AcceptTransitGatewayVpcAttachmentCommandOutput) => void
  ): Promise<AcceptTransitGatewayVpcAttachmentCommandOutput> | void {
    const command = new AcceptTransitGatewayVpcAttachmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Accepts one or more interface VPC endpoint connection requests to your VPC endpoint
   *             service.</p>
   */
  public acceptVpcEndpointConnections(
    args: AcceptVpcEndpointConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptVpcEndpointConnectionsCommandOutput>;
  public acceptVpcEndpointConnections(
    args: AcceptVpcEndpointConnectionsCommandInput,
    cb: (err: any, data?: AcceptVpcEndpointConnectionsCommandOutput) => void
  ): void;
  public acceptVpcEndpointConnections(
    args: AcceptVpcEndpointConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptVpcEndpointConnectionsCommandOutput) => void
  ): void;
  public acceptVpcEndpointConnections(
    args: AcceptVpcEndpointConnectionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AcceptVpcEndpointConnectionsCommandOutput) => void),
    cb?: (err: any, data?: AcceptVpcEndpointConnectionsCommandOutput) => void
  ): Promise<AcceptVpcEndpointConnectionsCommandOutput> | void {
    const command = new AcceptVpcEndpointConnectionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Accept a VPC peering connection request. To accept a request, the VPC peering connection must
   *       be in the <code>pending-acceptance</code> state, and you must be the owner of the peer VPC.
   *       Use <a>DescribeVpcPeeringConnections</a> to view your outstanding VPC
   *       peering connection requests.</p>
   *   	      <p>For an inter-Region VPC peering connection request, you must accept the VPC peering
   *       connection in the Region of the accepter VPC.</p>
   */
  public acceptVpcPeeringConnection(
    args: AcceptVpcPeeringConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptVpcPeeringConnectionCommandOutput>;
  public acceptVpcPeeringConnection(
    args: AcceptVpcPeeringConnectionCommandInput,
    cb: (err: any, data?: AcceptVpcPeeringConnectionCommandOutput) => void
  ): void;
  public acceptVpcPeeringConnection(
    args: AcceptVpcPeeringConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptVpcPeeringConnectionCommandOutput) => void
  ): void;
  public acceptVpcPeeringConnection(
    args: AcceptVpcPeeringConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AcceptVpcPeeringConnectionCommandOutput) => void),
    cb?: (err: any, data?: AcceptVpcPeeringConnectionCommandOutput) => void
  ): Promise<AcceptVpcPeeringConnectionCommandOutput> | void {
    const command = new AcceptVpcPeeringConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Advertises an IPv4 or IPv6 address range that is provisioned for use with your AWS resources through
   *          bring your own IP addresses (BYOIP).</p>
   *          <p>You can perform this operation at most once every 10 seconds, even if you specify different
   *          address ranges each time.</p>
   *          <p>We recommend that you stop advertising the BYOIP CIDR from other locations when you advertise
   *          it from AWS. To minimize down time, you can configure your AWS resources to use an address from a
   *          BYOIP CIDR before it is advertised, and then simultaneously stop advertising it from the current
   *          location and start advertising it through AWS.</p>
   *          <p>It can take a few minutes before traffic to the specified addresses starts routing to AWS
   *          because of BGP propagation delays.</p>
   *          <p>To stop advertising the BYOIP CIDR, use <a>WithdrawByoipCidr</a>.</p>
   */
  public advertiseByoipCidr(
    args: AdvertiseByoipCidrCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdvertiseByoipCidrCommandOutput>;
  public advertiseByoipCidr(
    args: AdvertiseByoipCidrCommandInput,
    cb: (err: any, data?: AdvertiseByoipCidrCommandOutput) => void
  ): void;
  public advertiseByoipCidr(
    args: AdvertiseByoipCidrCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdvertiseByoipCidrCommandOutput) => void
  ): void;
  public advertiseByoipCidr(
    args: AdvertiseByoipCidrCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AdvertiseByoipCidrCommandOutput) => void),
    cb?: (err: any, data?: AdvertiseByoipCidrCommandOutput) => void
  ): Promise<AdvertiseByoipCidrCommandOutput> | void {
    const command = new AdvertiseByoipCidrCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Allocates an Elastic IP address to your AWS account. After you allocate the Elastic IP address you can associate
   *          it with an instance or network interface. After you release an Elastic IP address, it is released to the IP address
   *          pool and can be allocated to a different AWS account.</p>
   *          <p>You can allocate an Elastic IP address from an address pool owned by AWS or from an address pool created
   *          from a public IPv4 address range that you have brought to AWS for use with your AWS resources using bring your own
   *          IP addresses (BYOIP). For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>[EC2-VPC] If you release an Elastic IP address, you might be able to recover it. You cannot recover an
   *          Elastic IP address that you released after it is allocated to another AWS account. You cannot recover an Elastic IP
   *          address for EC2-Classic. To attempt to recover an Elastic IP address that you released, specify it in this operation.</p>
   *          <p>An Elastic IP address is for use either in the EC2-Classic platform or in a VPC. By default, you can allocate
   *          5 Elastic IP addresses for EC2-Classic per Region and 5 Elastic IP addresses for EC2-VPC per Region.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>You can allocate a carrier IP address which is a public IP address from a telecommunication carrier, to a network interface which resides in a subnet in a Wavelength Zone (for example an EC2 instance). </p>
   */
  public allocateAddress(
    args: AllocateAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AllocateAddressCommandOutput>;
  public allocateAddress(
    args: AllocateAddressCommandInput,
    cb: (err: any, data?: AllocateAddressCommandOutput) => void
  ): void;
  public allocateAddress(
    args: AllocateAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AllocateAddressCommandOutput) => void
  ): void;
  public allocateAddress(
    args: AllocateAddressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AllocateAddressCommandOutput) => void),
    cb?: (err: any, data?: AllocateAddressCommandOutput) => void
  ): Promise<AllocateAddressCommandOutput> | void {
    const command = new AllocateAddressCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Allocates a Dedicated Host to your account. At a minimum, specify the supported instance
   *         	type or instance family, the Availability Zone in which to allocate the host, and the number of
   *         	hosts to allocate.</p>
   */
  public allocateHosts(
    args: AllocateHostsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AllocateHostsCommandOutput>;
  public allocateHosts(
    args: AllocateHostsCommandInput,
    cb: (err: any, data?: AllocateHostsCommandOutput) => void
  ): void;
  public allocateHosts(
    args: AllocateHostsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AllocateHostsCommandOutput) => void
  ): void;
  public allocateHosts(
    args: AllocateHostsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AllocateHostsCommandOutput) => void),
    cb?: (err: any, data?: AllocateHostsCommandOutput) => void
  ): Promise<AllocateHostsCommandOutput> | void {
    const command = new AllocateHostsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Applies a security group to the association between the target network and the Client VPN endpoint. This action replaces the existing
   * 			security groups with the specified security groups.</p>
   */
  public applySecurityGroupsToClientVpnTargetNetwork(
    args: ApplySecurityGroupsToClientVpnTargetNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput>;
  public applySecurityGroupsToClientVpnTargetNetwork(
    args: ApplySecurityGroupsToClientVpnTargetNetworkCommandInput,
    cb: (err: any, data?: ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput) => void
  ): void;
  public applySecurityGroupsToClientVpnTargetNetwork(
    args: ApplySecurityGroupsToClientVpnTargetNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput) => void
  ): void;
  public applySecurityGroupsToClientVpnTargetNetwork(
    args: ApplySecurityGroupsToClientVpnTargetNetworkCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput) => void),
    cb?: (err: any, data?: ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput) => void
  ): Promise<ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput> | void {
    const command = new ApplySecurityGroupsToClientVpnTargetNetworkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Assigns one or more IPv6 addresses to the specified network interface. You can
   *             specify one or more specific IPv6 addresses, or you can specify the number of IPv6
   *             addresses to be automatically assigned from within the subnet's IPv6 CIDR block range.
   *             You can assign as many IPv6 addresses to a network interface as you can assign private
   *             IPv4 addresses, and the limit varies per instance type. For information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI">IP Addresses Per Network Interface Per Instance Type</a>
   *             in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *         <p>You must specify either the IPv6 addresses or the IPv6 address count in the request.</p>
   */
  public assignIpv6Addresses(
    args: AssignIpv6AddressesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssignIpv6AddressesCommandOutput>;
  public assignIpv6Addresses(
    args: AssignIpv6AddressesCommandInput,
    cb: (err: any, data?: AssignIpv6AddressesCommandOutput) => void
  ): void;
  public assignIpv6Addresses(
    args: AssignIpv6AddressesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssignIpv6AddressesCommandOutput) => void
  ): void;
  public assignIpv6Addresses(
    args: AssignIpv6AddressesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssignIpv6AddressesCommandOutput) => void),
    cb?: (err: any, data?: AssignIpv6AddressesCommandOutput) => void
  ): Promise<AssignIpv6AddressesCommandOutput> | void {
    const command = new AssignIpv6AddressesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Assigns one or more secondary private IP addresses to the specified network interface.</p>
   *         <p>You can specify one or more specific secondary IP addresses, or you can specify the number
   *             of secondary IP addresses to be automatically assigned within the subnet's CIDR block range.
   *             The number of secondary IP addresses that you can assign to an instance varies by instance type.
   *             For information about instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Types</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. For more information about
   *             Elastic IP addresses, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *         <p>When you move a secondary private IP address to another network interface, any Elastic IP address
   *             that is associated with the IP address is also moved.</p>
   *         <p>Remapping an IP address is an asynchronous operation. When you move an IP address from one network
   *             interface to another, check <code>network/interfaces/macs/mac/local-ipv4s</code> in the instance
   *             metadata to confirm that the remapping is complete.</p>
   *         <p>You must specify either the IP addresses or the IP address count in the request.</p>
   */
  public assignPrivateIpAddresses(
    args: AssignPrivateIpAddressesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssignPrivateIpAddressesCommandOutput>;
  public assignPrivateIpAddresses(
    args: AssignPrivateIpAddressesCommandInput,
    cb: (err: any, data?: AssignPrivateIpAddressesCommandOutput) => void
  ): void;
  public assignPrivateIpAddresses(
    args: AssignPrivateIpAddressesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssignPrivateIpAddressesCommandOutput) => void
  ): void;
  public assignPrivateIpAddresses(
    args: AssignPrivateIpAddressesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssignPrivateIpAddressesCommandOutput) => void),
    cb?: (err: any, data?: AssignPrivateIpAddressesCommandOutput) => void
  ): Promise<AssignPrivateIpAddressesCommandOutput> | void {
    const command = new AssignPrivateIpAddressesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates an Elastic IP address, or carrier IP address (for instances that are in
   *       subnets in Wavelength Zones) with an instance or a network interface. Before you can use an
   *       Elastic IP address, you must allocate it to your account.</p>
   *          <p>An Elastic IP address is for use in either the EC2-Classic platform or in a VPC.
   * 			For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>[EC2-Classic, VPC in an EC2-VPC-only account] If the Elastic IP address is already
   *       associated with a different instance, it is disassociated from that instance and associated
   *       with the specified instance. If you associate an Elastic IP address with an instance that has
   *       an existing Elastic IP address, the existing address is disassociated from the instance, but
   *       remains allocated to your account.</p>
   *          <p>[VPC in an EC2-Classic account] If you don't specify a private IP address, the Elastic
   *       IP address is associated with the primary IP address. If the Elastic IP address is already
   *       associated with a different instance or a network interface, you get an error unless you allow
   *       reassociation. You cannot associate an Elastic IP address with an instance or network
   *       interface that has an existing Elastic IP address.</p>
   *          <p>[Subnets in Wavelength Zones] You can associate an IP address from the telecommunication
   *       carrier to the instance or network interface. </p>
   *          <p>You cannot associate an Elastic IP address with an interface in a different network border group.</p>
   *          <important>
   *             <p>This is an idempotent operation. If you perform the operation more than once, Amazon EC2
   *         doesn't return an error, and you may be charged for each time the Elastic IP address is
   *         remapped to the same instance. For more information, see the <i>Elastic IP
   *           Addresses</i> section of <a href="http://aws.amazon.com/ec2/pricing/">Amazon EC2
   *           Pricing</a>.</p>
   *          </important>
   */
  public associateAddress(
    args: AssociateAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateAddressCommandOutput>;
  public associateAddress(
    args: AssociateAddressCommandInput,
    cb: (err: any, data?: AssociateAddressCommandOutput) => void
  ): void;
  public associateAddress(
    args: AssociateAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateAddressCommandOutput) => void
  ): void;
  public associateAddress(
    args: AssociateAddressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateAddressCommandOutput) => void),
    cb?: (err: any, data?: AssociateAddressCommandOutput) => void
  ): Promise<AssociateAddressCommandOutput> | void {
    const command = new AssociateAddressCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a target network with a Client VPN endpoint. A target network is a subnet in a VPC. You can associate multiple subnets from the same VPC with a Client VPN endpoint. You can associate only one subnet in each Availability Zone. We recommend that you associate at least two subnets to provide Availability Zone redundancy.</p>
   * 	        <p>If you specified a VPC when you created the Client VPN endpoint or if you have previous subnet associations, the specified subnet must be in the same VPC. To specify a subnet that's in a different VPC, you must first modify the Client VPN endpoint (<a>ModifyClientVpnEndpoint</a>) and change the VPC that's associated with it.</p>
   */
  public associateClientVpnTargetNetwork(
    args: AssociateClientVpnTargetNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateClientVpnTargetNetworkCommandOutput>;
  public associateClientVpnTargetNetwork(
    args: AssociateClientVpnTargetNetworkCommandInput,
    cb: (err: any, data?: AssociateClientVpnTargetNetworkCommandOutput) => void
  ): void;
  public associateClientVpnTargetNetwork(
    args: AssociateClientVpnTargetNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateClientVpnTargetNetworkCommandOutput) => void
  ): void;
  public associateClientVpnTargetNetwork(
    args: AssociateClientVpnTargetNetworkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateClientVpnTargetNetworkCommandOutput) => void),
    cb?: (err: any, data?: AssociateClientVpnTargetNetworkCommandOutput) => void
  ): Promise<AssociateClientVpnTargetNetworkCommandOutput> | void {
    const command = new AssociateClientVpnTargetNetworkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a set of DHCP options (that you've previously created) with the specified VPC, or associates no DHCP options with the VPC.</p>
   *          <p>After you associate the options with the VPC, any existing instances and all new instances that you launch in that VPC use the options. You don't need to restart or relaunch the instances. They automatically pick up the changes within a few hours, depending on how frequently the instance renews its DHCP lease. You can explicitly renew the lease using the operating system on the instance.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html">DHCP Options Sets</a>
   *           in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  public associateDhcpOptions(
    args: AssociateDhcpOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateDhcpOptionsCommandOutput>;
  public associateDhcpOptions(
    args: AssociateDhcpOptionsCommandInput,
    cb: (err: any, data?: AssociateDhcpOptionsCommandOutput) => void
  ): void;
  public associateDhcpOptions(
    args: AssociateDhcpOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateDhcpOptionsCommandOutput) => void
  ): void;
  public associateDhcpOptions(
    args: AssociateDhcpOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateDhcpOptionsCommandOutput) => void),
    cb?: (err: any, data?: AssociateDhcpOptionsCommandOutput) => void
  ): Promise<AssociateDhcpOptionsCommandOutput> | void {
    const command = new AssociateDhcpOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates an AWS Identity and Access Management (IAM) role with an AWS Certificate Manager (ACM) certificate.
   * 			This enables the certificate to be used by the ACM for Nitro Enclaves application inside an enclave. For more
   * 			information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave-refapp.html">AWS Certificate
   * 				Manager for Nitro Enclaves</a> in the <i>AWS Nitro Enclaves User Guide</i>.</p>
   *
   * 		       <p>When the IAM role is associated with the ACM certificate, places the certificate, certificate chain, and encrypted
   * 			private key in an Amazon S3 bucket that only the associated IAM role can access. The private key of the certificate
   * 			is encrypted with an AWS-managed KMS customer master (CMK) that has an attached attestation-based CMK policy.</p>
   *
   * 		       <p>To enable the IAM role to access the Amazon S3 object, you must grant it permission to call <code>s3:GetObject</code>
   * 			on the Amazon S3 bucket returned by the command. To enable the IAM role to access the AWS KMS CMK, you must
   * 			grant it permission to call <code>kms:Decrypt</code> on AWS KMS CMK returned by the command. For more
   * 			information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave-refapp.html#add-policy">
   * 				Grant the role permission to access the certificate and encryption key</a> in the
   * 			<i>AWS Nitro Enclaves User Guide</i>.</p>
   */
  public associateEnclaveCertificateIamRole(
    args: AssociateEnclaveCertificateIamRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateEnclaveCertificateIamRoleCommandOutput>;
  public associateEnclaveCertificateIamRole(
    args: AssociateEnclaveCertificateIamRoleCommandInput,
    cb: (err: any, data?: AssociateEnclaveCertificateIamRoleCommandOutput) => void
  ): void;
  public associateEnclaveCertificateIamRole(
    args: AssociateEnclaveCertificateIamRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateEnclaveCertificateIamRoleCommandOutput) => void
  ): void;
  public associateEnclaveCertificateIamRole(
    args: AssociateEnclaveCertificateIamRoleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateEnclaveCertificateIamRoleCommandOutput) => void),
    cb?: (err: any, data?: AssociateEnclaveCertificateIamRoleCommandOutput) => void
  ): Promise<AssociateEnclaveCertificateIamRoleCommandOutput> | void {
    const command = new AssociateEnclaveCertificateIamRoleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates an IAM instance profile with a running or stopped instance. You cannot
   *             associate more than one IAM instance profile with an instance.</p>
   */
  public associateIamInstanceProfile(
    args: AssociateIamInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateIamInstanceProfileCommandOutput>;
  public associateIamInstanceProfile(
    args: AssociateIamInstanceProfileCommandInput,
    cb: (err: any, data?: AssociateIamInstanceProfileCommandOutput) => void
  ): void;
  public associateIamInstanceProfile(
    args: AssociateIamInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateIamInstanceProfileCommandOutput) => void
  ): void;
  public associateIamInstanceProfile(
    args: AssociateIamInstanceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateIamInstanceProfileCommandOutput) => void),
    cb?: (err: any, data?: AssociateIamInstanceProfileCommandOutput) => void
  ): Promise<AssociateIamInstanceProfileCommandOutput> | void {
    const command = new AssociateIamInstanceProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a subnet in your VPC or an internet gateway or virtual private gateway
   *             attached to your VPC with a route table in your VPC. This association causes traffic
   *             from the subnet or gateway to be routed according to the routes in the route table. The
   *             action returns an association ID, which you need in order to disassociate the route
   *             table later. A route table can be associated with multiple subnets.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route Tables</a> in the
   *                 <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  public associateRouteTable(
    args: AssociateRouteTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateRouteTableCommandOutput>;
  public associateRouteTable(
    args: AssociateRouteTableCommandInput,
    cb: (err: any, data?: AssociateRouteTableCommandOutput) => void
  ): void;
  public associateRouteTable(
    args: AssociateRouteTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateRouteTableCommandOutput) => void
  ): void;
  public associateRouteTable(
    args: AssociateRouteTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateRouteTableCommandOutput) => void),
    cb?: (err: any, data?: AssociateRouteTableCommandOutput) => void
  ): Promise<AssociateRouteTableCommandOutput> | void {
    const command = new AssociateRouteTableCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a CIDR block with your subnet. You can only associate a single IPv6 CIDR
   *             block with your subnet. An IPv6 CIDR block must have a prefix length of /64.</p>
   */
  public associateSubnetCidrBlock(
    args: AssociateSubnetCidrBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateSubnetCidrBlockCommandOutput>;
  public associateSubnetCidrBlock(
    args: AssociateSubnetCidrBlockCommandInput,
    cb: (err: any, data?: AssociateSubnetCidrBlockCommandOutput) => void
  ): void;
  public associateSubnetCidrBlock(
    args: AssociateSubnetCidrBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateSubnetCidrBlockCommandOutput) => void
  ): void;
  public associateSubnetCidrBlock(
    args: AssociateSubnetCidrBlockCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateSubnetCidrBlockCommandOutput) => void),
    cb?: (err: any, data?: AssociateSubnetCidrBlockCommandOutput) => void
  ): Promise<AssociateSubnetCidrBlockCommandOutput> | void {
    const command = new AssociateSubnetCidrBlockCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates the specified subnets and transit gateway attachments with the specified transit gateway multicast domain.</p>
   *         <p>The transit gateway attachment must be in the available state before you can add a resource. Use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayAttachments.html">DescribeTransitGatewayAttachments</a> to see the state of the attachment.</p>
   */
  public associateTransitGatewayMulticastDomain(
    args: AssociateTransitGatewayMulticastDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateTransitGatewayMulticastDomainCommandOutput>;
  public associateTransitGatewayMulticastDomain(
    args: AssociateTransitGatewayMulticastDomainCommandInput,
    cb: (err: any, data?: AssociateTransitGatewayMulticastDomainCommandOutput) => void
  ): void;
  public associateTransitGatewayMulticastDomain(
    args: AssociateTransitGatewayMulticastDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateTransitGatewayMulticastDomainCommandOutput) => void
  ): void;
  public associateTransitGatewayMulticastDomain(
    args: AssociateTransitGatewayMulticastDomainCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AssociateTransitGatewayMulticastDomainCommandOutput) => void),
    cb?: (err: any, data?: AssociateTransitGatewayMulticastDomainCommandOutput) => void
  ): Promise<AssociateTransitGatewayMulticastDomainCommandOutput> | void {
    const command = new AssociateTransitGatewayMulticastDomainCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates the specified attachment with the specified transit gateway route table. You can
   *         associate only one route table with an attachment.</p>
   */
  public associateTransitGatewayRouteTable(
    args: AssociateTransitGatewayRouteTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateTransitGatewayRouteTableCommandOutput>;
  public associateTransitGatewayRouteTable(
    args: AssociateTransitGatewayRouteTableCommandInput,
    cb: (err: any, data?: AssociateTransitGatewayRouteTableCommandOutput) => void
  ): void;
  public associateTransitGatewayRouteTable(
    args: AssociateTransitGatewayRouteTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateTransitGatewayRouteTableCommandOutput) => void
  ): void;
  public associateTransitGatewayRouteTable(
    args: AssociateTransitGatewayRouteTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateTransitGatewayRouteTableCommandOutput) => void),
    cb?: (err: any, data?: AssociateTransitGatewayRouteTableCommandOutput) => void
  ): Promise<AssociateTransitGatewayRouteTableCommandOutput> | void {
    const command = new AssociateTransitGatewayRouteTableCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a CIDR block with your VPC. You can associate a secondary IPv4 CIDR block,
   *             an Amazon-provided IPv6 CIDR block, or an IPv6 CIDR block from an IPv6 address pool that
   *             you provisioned through bring your own IP addresses (<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html">BYOIP</a>). The IPv6 CIDR block size is fixed
   *             at /56.</p>
   *         <p>You must specify one of the following in the request: an IPv4 CIDR block, an IPv6
   *             pool, or an Amazon-provided IPv6 CIDR block.</p>
   *         <p>For more information about associating CIDR blocks with your VPC and applicable
   *             restrictions, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html#VPC_Sizing">VPC and Subnet Sizing</a> in the
   *                 <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  public associateVpcCidrBlock(
    args: AssociateVpcCidrBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateVpcCidrBlockCommandOutput>;
  public associateVpcCidrBlock(
    args: AssociateVpcCidrBlockCommandInput,
    cb: (err: any, data?: AssociateVpcCidrBlockCommandOutput) => void
  ): void;
  public associateVpcCidrBlock(
    args: AssociateVpcCidrBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateVpcCidrBlockCommandOutput) => void
  ): void;
  public associateVpcCidrBlock(
    args: AssociateVpcCidrBlockCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateVpcCidrBlockCommandOutput) => void),
    cb?: (err: any, data?: AssociateVpcCidrBlockCommandOutput) => void
  ): Promise<AssociateVpcCidrBlockCommandOutput> | void {
    const command = new AssociateVpcCidrBlockCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Links an EC2-Classic instance to a ClassicLink-enabled VPC through one or more of the VPC's
   * 			security groups. You cannot link an EC2-Classic instance to more than one VPC at a time. You
   * 			can only link an instance that's in the <code>running</code> state. An instance is
   * 			automatically unlinked from a VPC when it's stopped - you can link it to the VPC again when
   * 			you restart it.</p>
   * 		       <p>After you've linked an instance, you cannot change the VPC security groups that are associated with it. To change the security groups, you must first unlink the instance, and then link it again.</p>
   * 		       <p>Linking your instance to a VPC is sometimes referred to as <i>attaching</i> your instance.</p>
   */
  public attachClassicLinkVpc(
    args: AttachClassicLinkVpcCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachClassicLinkVpcCommandOutput>;
  public attachClassicLinkVpc(
    args: AttachClassicLinkVpcCommandInput,
    cb: (err: any, data?: AttachClassicLinkVpcCommandOutput) => void
  ): void;
  public attachClassicLinkVpc(
    args: AttachClassicLinkVpcCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachClassicLinkVpcCommandOutput) => void
  ): void;
  public attachClassicLinkVpc(
    args: AttachClassicLinkVpcCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AttachClassicLinkVpcCommandOutput) => void),
    cb?: (err: any, data?: AttachClassicLinkVpcCommandOutput) => void
  ): Promise<AttachClassicLinkVpcCommandOutput> | void {
    const command = new AttachClassicLinkVpcCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Attaches an internet gateway or a virtual private gateway to a VPC, enabling connectivity between the internet and
   * 			the VPC. For more information about your VPC and internet gateway, see the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/">Amazon Virtual Private Cloud User Guide</a>.</p>
   */
  public attachInternetGateway(
    args: AttachInternetGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachInternetGatewayCommandOutput>;
  public attachInternetGateway(
    args: AttachInternetGatewayCommandInput,
    cb: (err: any, data?: AttachInternetGatewayCommandOutput) => void
  ): void;
  public attachInternetGateway(
    args: AttachInternetGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachInternetGatewayCommandOutput) => void
  ): void;
  public attachInternetGateway(
    args: AttachInternetGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AttachInternetGatewayCommandOutput) => void),
    cb?: (err: any, data?: AttachInternetGatewayCommandOutput) => void
  ): Promise<AttachInternetGatewayCommandOutput> | void {
    const command = new AttachInternetGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Attaches a network interface to an instance.</p>
   */
  public attachNetworkInterface(
    args: AttachNetworkInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachNetworkInterfaceCommandOutput>;
  public attachNetworkInterface(
    args: AttachNetworkInterfaceCommandInput,
    cb: (err: any, data?: AttachNetworkInterfaceCommandOutput) => void
  ): void;
  public attachNetworkInterface(
    args: AttachNetworkInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachNetworkInterfaceCommandOutput) => void
  ): void;
  public attachNetworkInterface(
    args: AttachNetworkInterfaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AttachNetworkInterfaceCommandOutput) => void),
    cb?: (err: any, data?: AttachNetworkInterfaceCommandOutput) => void
  ): Promise<AttachNetworkInterfaceCommandOutput> | void {
    const command = new AttachNetworkInterfaceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Attaches an EBS volume to a running or stopped instance and exposes it to the instance
   *       with the specified device name.</p>
   *          <p>Encrypted EBS volumes must be attached to instances that support Amazon EBS encryption. For
   *       more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>After you attach an EBS volume, you must make it available. For more information, see
   *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-using-volumes.html">Making an EBS volume available for use</a>.</p>
   *          <p>If a volume has an AWS Marketplace product code:</p>
   *          <ul>
   *             <li>
   *                <p>The volume can be attached only to a stopped instance.</p>
   *             </li>
   *             <li>
   *                <p>AWS Marketplace product codes are copied from the volume to the instance.</p>
   *             </li>
   *             <li>
   *                <p>You must be subscribed to the product.</p>
   *             </li>
   *             <li>
   *                <p>The instance type and operating system of the instance must support the product. For
   *           example, you can't detach a volume from a Windows instance and attach it to a Linux
   *           instance.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-attaching-volume.html">Attaching Amazon EBS volumes</a> in the
   *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public attachVolume(
    args: AttachVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachVolumeCommandOutput>;
  public attachVolume(args: AttachVolumeCommandInput, cb: (err: any, data?: AttachVolumeCommandOutput) => void): void;
  public attachVolume(
    args: AttachVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachVolumeCommandOutput) => void
  ): void;
  public attachVolume(
    args: AttachVolumeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AttachVolumeCommandOutput) => void),
    cb?: (err: any, data?: AttachVolumeCommandOutput) => void
  ): Promise<AttachVolumeCommandOutput> | void {
    const command = new AttachVolumeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Attaches a virtual private gateway to a VPC. You can attach one virtual private
   *             gateway to one VPC at a time.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
   */
  public attachVpnGateway(
    args: AttachVpnGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachVpnGatewayCommandOutput>;
  public attachVpnGateway(
    args: AttachVpnGatewayCommandInput,
    cb: (err: any, data?: AttachVpnGatewayCommandOutput) => void
  ): void;
  public attachVpnGateway(
    args: AttachVpnGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachVpnGatewayCommandOutput) => void
  ): void;
  public attachVpnGateway(
    args: AttachVpnGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AttachVpnGatewayCommandOutput) => void),
    cb?: (err: any, data?: AttachVpnGatewayCommandOutput) => void
  ): Promise<AttachVpnGatewayCommandOutput> | void {
    const command = new AttachVpnGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds an ingress authorization rule to a Client VPN endpoint. Ingress authorization rules act as
   * 			firewall rules that grant access to networks. You must configure ingress authorization rules to
   * 			enable clients to access resources in AWS or on-premises networks.</p>
   */
  public authorizeClientVpnIngress(
    args: AuthorizeClientVpnIngressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AuthorizeClientVpnIngressCommandOutput>;
  public authorizeClientVpnIngress(
    args: AuthorizeClientVpnIngressCommandInput,
    cb: (err: any, data?: AuthorizeClientVpnIngressCommandOutput) => void
  ): void;
  public authorizeClientVpnIngress(
    args: AuthorizeClientVpnIngressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AuthorizeClientVpnIngressCommandOutput) => void
  ): void;
  public authorizeClientVpnIngress(
    args: AuthorizeClientVpnIngressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AuthorizeClientVpnIngressCommandOutput) => void),
    cb?: (err: any, data?: AuthorizeClientVpnIngressCommandOutput) => void
  ): Promise<AuthorizeClientVpnIngressCommandOutput> | void {
    const command = new AuthorizeClientVpnIngressCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>[VPC only] Adds the specified egress rules to a security group for use with a VPC.</p>
   *          <p>An outbound rule permits instances to send traffic to the specified IPv4 or IPv6 CIDR
   *       address ranges, or to the instances associated with the specified destination security groups.</p>
   *          <p>You specify a protocol for each rule (for example, TCP).
   *        For the TCP and UDP protocols, you must also specify the destination port or port range.
   *        For the ICMP protocol, you must also specify the ICMP type and code.
   *        You can use -1 for the type or code to mean all types or all codes.</p>
   *          <p>Rule changes are propagated to affected instances as quickly as possible. However, a small delay might occur.</p>
   *          <p>For more information about VPC security group limits, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC Limits</a>.</p>
   */
  public authorizeSecurityGroupEgress(
    args: AuthorizeSecurityGroupEgressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AuthorizeSecurityGroupEgressCommandOutput>;
  public authorizeSecurityGroupEgress(
    args: AuthorizeSecurityGroupEgressCommandInput,
    cb: (err: any, data?: AuthorizeSecurityGroupEgressCommandOutput) => void
  ): void;
  public authorizeSecurityGroupEgress(
    args: AuthorizeSecurityGroupEgressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AuthorizeSecurityGroupEgressCommandOutput) => void
  ): void;
  public authorizeSecurityGroupEgress(
    args: AuthorizeSecurityGroupEgressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AuthorizeSecurityGroupEgressCommandOutput) => void),
    cb?: (err: any, data?: AuthorizeSecurityGroupEgressCommandOutput) => void
  ): Promise<AuthorizeSecurityGroupEgressCommandOutput> | void {
    const command = new AuthorizeSecurityGroupEgressCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds the specified ingress rules to a security group.</p>
   *          <p>An inbound rule permits instances to receive traffic from the specified IPv4 or IPv6 CIDR
   *        address ranges, or from the instances associated with the specified destination security groups.</p>
   *          <p>You specify a protocol for each rule (for example, TCP).
   *        For TCP and UDP, you must also specify the destination port or port range.
   *        For ICMP/ICMPv6, you must also specify the ICMP/ICMPv6 type and code.
   *        You can use -1 to mean all types or all codes.</p>
   *          <p>Rule changes are propagated to instances within the security group as quickly as possible.
   *          However, a small delay might occur.</p>
   *          <p>For more information about VPC security group limits, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC Limits</a>.</p>
   */
  public authorizeSecurityGroupIngress(
    args: AuthorizeSecurityGroupIngressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AuthorizeSecurityGroupIngressCommandOutput>;
  public authorizeSecurityGroupIngress(
    args: AuthorizeSecurityGroupIngressCommandInput,
    cb: (err: any, data?: AuthorizeSecurityGroupIngressCommandOutput) => void
  ): void;
  public authorizeSecurityGroupIngress(
    args: AuthorizeSecurityGroupIngressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AuthorizeSecurityGroupIngressCommandOutput) => void
  ): void;
  public authorizeSecurityGroupIngress(
    args: AuthorizeSecurityGroupIngressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AuthorizeSecurityGroupIngressCommandOutput) => void),
    cb?: (err: any, data?: AuthorizeSecurityGroupIngressCommandOutput) => void
  ): Promise<AuthorizeSecurityGroupIngressCommandOutput> | void {
    const command = new AuthorizeSecurityGroupIngressCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Bundles an Amazon instance store-backed Windows instance.</p>
   *          <p>During bundling, only the root device volume (C:\) is bundled. Data on other instance store volumes is not preserved.</p>
   *          <note>
   *             <p>This action is not applicable for Linux/Unix instances or Windows instances that are backed by Amazon EBS.</p>
   * 			      </note>
   */
  public bundleInstance(
    args: BundleInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BundleInstanceCommandOutput>;
  public bundleInstance(
    args: BundleInstanceCommandInput,
    cb: (err: any, data?: BundleInstanceCommandOutput) => void
  ): void;
  public bundleInstance(
    args: BundleInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BundleInstanceCommandOutput) => void
  ): void;
  public bundleInstance(
    args: BundleInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BundleInstanceCommandOutput) => void),
    cb?: (err: any, data?: BundleInstanceCommandOutput) => void
  ): Promise<BundleInstanceCommandOutput> | void {
    const command = new BundleInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels a bundling operation for an instance store-backed Windows instance.</p>
   */
  public cancelBundleTask(
    args: CancelBundleTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelBundleTaskCommandOutput>;
  public cancelBundleTask(
    args: CancelBundleTaskCommandInput,
    cb: (err: any, data?: CancelBundleTaskCommandOutput) => void
  ): void;
  public cancelBundleTask(
    args: CancelBundleTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelBundleTaskCommandOutput) => void
  ): void;
  public cancelBundleTask(
    args: CancelBundleTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelBundleTaskCommandOutput) => void),
    cb?: (err: any, data?: CancelBundleTaskCommandOutput) => void
  ): Promise<CancelBundleTaskCommandOutput> | void {
    const command = new CancelBundleTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels the specified Capacity Reservation, releases the reserved capacity, and changes the Capacity Reservation's state to
   * 			<code>cancelled</code>.</p>
   * 		       <p>Instances running in the reserved capacity continue running until you stop them. Stopped
   * 			instances that target the Capacity Reservation can no longer launch. Modify these instances to either
   * 			target a different Capacity Reservation, launch On-Demand Instance capacity, or run in any open Capacity Reservation
   * 			that has matching attributes and sufficient capacity.</p>
   */
  public cancelCapacityReservation(
    args: CancelCapacityReservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelCapacityReservationCommandOutput>;
  public cancelCapacityReservation(
    args: CancelCapacityReservationCommandInput,
    cb: (err: any, data?: CancelCapacityReservationCommandOutput) => void
  ): void;
  public cancelCapacityReservation(
    args: CancelCapacityReservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelCapacityReservationCommandOutput) => void
  ): void;
  public cancelCapacityReservation(
    args: CancelCapacityReservationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelCapacityReservationCommandOutput) => void),
    cb?: (err: any, data?: CancelCapacityReservationCommandOutput) => void
  ): Promise<CancelCapacityReservationCommandOutput> | void {
    const command = new CancelCapacityReservationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels an active conversion task. The task can be the import of an instance or volume. The action removes all
   *    artifacts of the conversion, including a partially uploaded volume or instance. If the conversion is complete or is
   *    in the process of transferring the final disk image, the command fails and returns an exception.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/CommandLineReference/ec2-cli-vmimport-export.html">Importing a Virtual Machine Using the Amazon
   *     EC2 CLI</a>.</p>
   */
  public cancelConversionTask(
    args: CancelConversionTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelConversionTaskCommandOutput>;
  public cancelConversionTask(
    args: CancelConversionTaskCommandInput,
    cb: (err: any, data?: CancelConversionTaskCommandOutput) => void
  ): void;
  public cancelConversionTask(
    args: CancelConversionTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelConversionTaskCommandOutput) => void
  ): void;
  public cancelConversionTask(
    args: CancelConversionTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelConversionTaskCommandOutput) => void),
    cb?: (err: any, data?: CancelConversionTaskCommandOutput) => void
  ): Promise<CancelConversionTaskCommandOutput> | void {
    const command = new CancelConversionTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels an active export task. The request removes all artifacts of the export, including any partially-created
   *    Amazon S3 objects. If the export task is complete or is in the process of transferring the final disk image, the
   *    command fails and returns an error.</p>
   */
  public cancelExportTask(
    args: CancelExportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelExportTaskCommandOutput>;
  public cancelExportTask(
    args: CancelExportTaskCommandInput,
    cb: (err: any, data?: CancelExportTaskCommandOutput) => void
  ): void;
  public cancelExportTask(
    args: CancelExportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelExportTaskCommandOutput) => void
  ): void;
  public cancelExportTask(
    args: CancelExportTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelExportTaskCommandOutput) => void),
    cb?: (err: any, data?: CancelExportTaskCommandOutput) => void
  ): Promise<CancelExportTaskCommandOutput> | void {
    const command = new CancelExportTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels an in-process import virtual machine or import snapshot task.</p>
   */
  public cancelImportTask(
    args: CancelImportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelImportTaskCommandOutput>;
  public cancelImportTask(
    args: CancelImportTaskCommandInput,
    cb: (err: any, data?: CancelImportTaskCommandOutput) => void
  ): void;
  public cancelImportTask(
    args: CancelImportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelImportTaskCommandOutput) => void
  ): void;
  public cancelImportTask(
    args: CancelImportTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelImportTaskCommandOutput) => void),
    cb?: (err: any, data?: CancelImportTaskCommandOutput) => void
  ): Promise<CancelImportTaskCommandOutput> | void {
    const command = new CancelImportTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels the specified Reserved Instance listing in the Reserved Instance Marketplace.</p>
   *          <p>For more information, see
   *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a>
   *         in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public cancelReservedInstancesListing(
    args: CancelReservedInstancesListingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelReservedInstancesListingCommandOutput>;
  public cancelReservedInstancesListing(
    args: CancelReservedInstancesListingCommandInput,
    cb: (err: any, data?: CancelReservedInstancesListingCommandOutput) => void
  ): void;
  public cancelReservedInstancesListing(
    args: CancelReservedInstancesListingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelReservedInstancesListingCommandOutput) => void
  ): void;
  public cancelReservedInstancesListing(
    args: CancelReservedInstancesListingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelReservedInstancesListingCommandOutput) => void),
    cb?: (err: any, data?: CancelReservedInstancesListingCommandOutput) => void
  ): Promise<CancelReservedInstancesListingCommandOutput> | void {
    const command = new CancelReservedInstancesListingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels the specified Spot Fleet requests.</p>
   *          <p>After you cancel a Spot Fleet request, the Spot Fleet launches no new Spot Instances.
   *        You must specify whether the Spot Fleet should also terminate its Spot Instances.
   *        If you terminate the instances, the Spot Fleet request enters the <code>cancelled_terminating</code> state.
   *        Otherwise, the Spot Fleet request enters the <code>cancelled_running</code> state and the instances
   *        continue to run until they are interrupted or you terminate them manually.</p>
   */
  public cancelSpotFleetRequests(
    args: CancelSpotFleetRequestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelSpotFleetRequestsCommandOutput>;
  public cancelSpotFleetRequests(
    args: CancelSpotFleetRequestsCommandInput,
    cb: (err: any, data?: CancelSpotFleetRequestsCommandOutput) => void
  ): void;
  public cancelSpotFleetRequests(
    args: CancelSpotFleetRequestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelSpotFleetRequestsCommandOutput) => void
  ): void;
  public cancelSpotFleetRequests(
    args: CancelSpotFleetRequestsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelSpotFleetRequestsCommandOutput) => void),
    cb?: (err: any, data?: CancelSpotFleetRequestsCommandOutput) => void
  ): Promise<CancelSpotFleetRequestsCommandOutput> | void {
    const command = new CancelSpotFleetRequestsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels one or more Spot Instance requests.</p>
   *          <important>
   *             <p>Canceling a Spot Instance request does not terminate running Spot Instances associated with the request.</p>
   *          </important>
   */
  public cancelSpotInstanceRequests(
    args: CancelSpotInstanceRequestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelSpotInstanceRequestsCommandOutput>;
  public cancelSpotInstanceRequests(
    args: CancelSpotInstanceRequestsCommandInput,
    cb: (err: any, data?: CancelSpotInstanceRequestsCommandOutput) => void
  ): void;
  public cancelSpotInstanceRequests(
    args: CancelSpotInstanceRequestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelSpotInstanceRequestsCommandOutput) => void
  ): void;
  public cancelSpotInstanceRequests(
    args: CancelSpotInstanceRequestsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelSpotInstanceRequestsCommandOutput) => void),
    cb?: (err: any, data?: CancelSpotInstanceRequestsCommandOutput) => void
  ): Promise<CancelSpotInstanceRequestsCommandOutput> | void {
    const command = new CancelSpotInstanceRequestsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Determines whether a product code is associated with an instance. This action can only
   *             be used by the owner of the product code. It is useful when a product code owner must
   *             verify whether another user's instance is eligible for support.</p>
   */
  public confirmProductInstance(
    args: ConfirmProductInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfirmProductInstanceCommandOutput>;
  public confirmProductInstance(
    args: ConfirmProductInstanceCommandInput,
    cb: (err: any, data?: ConfirmProductInstanceCommandOutput) => void
  ): void;
  public confirmProductInstance(
    args: ConfirmProductInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfirmProductInstanceCommandOutput) => void
  ): void;
  public confirmProductInstance(
    args: ConfirmProductInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ConfirmProductInstanceCommandOutput) => void),
    cb?: (err: any, data?: ConfirmProductInstanceCommandOutput) => void
  ): Promise<ConfirmProductInstanceCommandOutput> | void {
    const command = new ConfirmProductInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Copies the specified Amazon FPGA Image (AFI) to the current Region.</p>
   */
  public copyFpgaImage(
    args: CopyFpgaImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyFpgaImageCommandOutput>;
  public copyFpgaImage(
    args: CopyFpgaImageCommandInput,
    cb: (err: any, data?: CopyFpgaImageCommandOutput) => void
  ): void;
  public copyFpgaImage(
    args: CopyFpgaImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyFpgaImageCommandOutput) => void
  ): void;
  public copyFpgaImage(
    args: CopyFpgaImageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CopyFpgaImageCommandOutput) => void),
    cb?: (err: any, data?: CopyFpgaImageCommandOutput) => void
  ): Promise<CopyFpgaImageCommandOutput> | void {
    const command = new CopyFpgaImageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Initiates the copy of an AMI from the specified source Region to the current Region. You specify the destination Region by using its endpoint when making the request.</p>
   *          <p>Copies of encrypted backing snapshots for the AMI are encrypted. Copies of unencrypted backing snapshots
   *        remain unencrypted, unless you set <code>Encrypted</code> during the copy operation. You cannot create an unencrypted
   *        copy of an encrypted backing snapshot.</p>
   *          <p>For more information about the prerequisites and limits when copying an AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/CopyingAMIs.html">Copying an AMI</a>
   *         in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public copyImage(args: CopyImageCommandInput, options?: __HttpHandlerOptions): Promise<CopyImageCommandOutput>;
  public copyImage(args: CopyImageCommandInput, cb: (err: any, data?: CopyImageCommandOutput) => void): void;
  public copyImage(
    args: CopyImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyImageCommandOutput) => void
  ): void;
  public copyImage(
    args: CopyImageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CopyImageCommandOutput) => void),
    cb?: (err: any, data?: CopyImageCommandOutput) => void
  ): Promise<CopyImageCommandOutput> | void {
    const command = new CopyImageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Copies a point-in-time snapshot of an EBS volume and stores it in Amazon S3. You can copy the
   *       snapshot within the same Region or from one Region to another. You can use the snapshot to
   *       create EBS volumes or Amazon Machine Images (AMIs).</p>
   *          <p>Copies of encrypted EBS snapshots remain encrypted. Copies of unencrypted snapshots remain
   *       unencrypted, unless you enable encryption for the snapshot copy operation. By default, encrypted
   *       snapshot copies use the default AWS Key Management Service (AWS KMS) customer master key (CMK); however, you can specify a
   *       different CMK.</p>
   *          <p>To copy an encrypted snapshot that has been shared from another account, you must have
   *       permissions for the CMK used to encrypt the snapshot.</p>
   *          <p>Snapshots created by copying another snapshot have an arbitrary volume ID that should not
   *       be used for any purpose.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-copy-snapshot.html">Copying an Amazon EBS snapshot</a> in the
   *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public copySnapshot(
    args: CopySnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopySnapshotCommandOutput>;
  public copySnapshot(args: CopySnapshotCommandInput, cb: (err: any, data?: CopySnapshotCommandOutput) => void): void;
  public copySnapshot(
    args: CopySnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopySnapshotCommandOutput) => void
  ): void;
  public copySnapshot(
    args: CopySnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CopySnapshotCommandOutput) => void),
    cb?: (err: any, data?: CopySnapshotCommandOutput) => void
  ): Promise<CopySnapshotCommandOutput> | void {
    const command = new CopySnapshotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new Capacity Reservation with the specified attributes.</p>
   * 		       <p>Capacity Reservations enable you to reserve capacity for your Amazon EC2 instances in a specific Availability Zone for any duration. This
   * 			gives you the flexibility to selectively add capacity reservations and still get the Regional RI discounts for that usage.
   * 			By creating Capacity Reservations, you ensure that you always have access to Amazon EC2 capacity when you need it, for as long as you need it.
   * 			For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html">Capacity Reservations</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * 		       <p>Your request to create a Capacity Reservation could fail if Amazon EC2 does not have sufficient capacity to
   * 			fulfill the request. If your request fails due to Amazon EC2 capacity constraints, either try
   * 			again at a later time, try in a different Availability Zone, or request a smaller
   * 			capacity reservation. If your application is flexible across instance types and sizes,
   * 			try to create a Capacity Reservation with different instance attributes.</p>
   *
   * 		       <p>Your request could also fail if the requested quantity exceeds your On-Demand Instance
   * 			limit for the selected instance type. If your request fails due to limit constraints,
   * 			increase your On-Demand Instance limit for the required instance type and try again. For
   * 			more information about increasing your instance limits, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html">Amazon EC2 Service
   * 				Limits</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public createCapacityReservation(
    args: CreateCapacityReservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCapacityReservationCommandOutput>;
  public createCapacityReservation(
    args: CreateCapacityReservationCommandInput,
    cb: (err: any, data?: CreateCapacityReservationCommandOutput) => void
  ): void;
  public createCapacityReservation(
    args: CreateCapacityReservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCapacityReservationCommandOutput) => void
  ): void;
  public createCapacityReservation(
    args: CreateCapacityReservationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCapacityReservationCommandOutput) => void),
    cb?: (err: any, data?: CreateCapacityReservationCommandOutput) => void
  ): Promise<CreateCapacityReservationCommandOutput> | void {
    const command = new CreateCapacityReservationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a carrier gateway.   For more information about carrier gateways, see <a href="https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#wavelength-carrier-gateway">Carrier gateways</a> in the <i>AWS Wavelength Developer
   *                 Guide</i>.</p>
   */
  public createCarrierGateway(
    args: CreateCarrierGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCarrierGatewayCommandOutput>;
  public createCarrierGateway(
    args: CreateCarrierGatewayCommandInput,
    cb: (err: any, data?: CreateCarrierGatewayCommandOutput) => void
  ): void;
  public createCarrierGateway(
    args: CreateCarrierGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCarrierGatewayCommandOutput) => void
  ): void;
  public createCarrierGateway(
    args: CreateCarrierGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCarrierGatewayCommandOutput) => void),
    cb?: (err: any, data?: CreateCarrierGatewayCommandOutput) => void
  ): Promise<CreateCarrierGatewayCommandOutput> | void {
    const command = new CreateCarrierGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a Client VPN endpoint. A Client VPN endpoint is the resource you create and configure to
   * 			enable and manage client VPN sessions. It is the destination endpoint at which all client VPN sessions
   * 			are terminated.</p>
   */
  public createClientVpnEndpoint(
    args: CreateClientVpnEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClientVpnEndpointCommandOutput>;
  public createClientVpnEndpoint(
    args: CreateClientVpnEndpointCommandInput,
    cb: (err: any, data?: CreateClientVpnEndpointCommandOutput) => void
  ): void;
  public createClientVpnEndpoint(
    args: CreateClientVpnEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClientVpnEndpointCommandOutput) => void
  ): void;
  public createClientVpnEndpoint(
    args: CreateClientVpnEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateClientVpnEndpointCommandOutput) => void),
    cb?: (err: any, data?: CreateClientVpnEndpointCommandOutput) => void
  ): Promise<CreateClientVpnEndpointCommandOutput> | void {
    const command = new CreateClientVpnEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds a route to a network to a Client VPN endpoint. Each Client VPN endpoint has a route table that describes the
   * 			available destination network routes. Each route in the route table specifies the path for traﬃc to speciﬁc resources or networks.</p>
   */
  public createClientVpnRoute(
    args: CreateClientVpnRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClientVpnRouteCommandOutput>;
  public createClientVpnRoute(
    args: CreateClientVpnRouteCommandInput,
    cb: (err: any, data?: CreateClientVpnRouteCommandOutput) => void
  ): void;
  public createClientVpnRoute(
    args: CreateClientVpnRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClientVpnRouteCommandOutput) => void
  ): void;
  public createClientVpnRoute(
    args: CreateClientVpnRouteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateClientVpnRouteCommandOutput) => void),
    cb?: (err: any, data?: CreateClientVpnRouteCommandOutput) => void
  ): Promise<CreateClientVpnRouteCommandOutput> | void {
    const command = new CreateClientVpnRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides information to AWS about your VPN customer gateway device. The customer
   *             gateway is the appliance at your end of the VPN connection. (The device on the AWS side
   *             of the VPN connection is the virtual private gateway.) You must provide the
   *             internet-routable IP address of the customer gateway's external interface. The IP
   *             address must be static and can be behind a device performing network address translation
   *             (NAT).</p>
   *         <p>For devices that use Border Gateway Protocol (BGP), you can also provide the device's
   *             BGP Autonomous System Number (ASN). You can use an existing ASN assigned to your
   *             network. If you don't have an ASN already, you can use a private ASN (in the 64512 -
   *             65534 range).</p>
   *         <note>
   *             <p>Amazon EC2 supports all 4-byte ASN numbers in the range of 1 - 2147483647, with the
   *                 exception of the following:</p>
   *                 <ul>
   *                <li>
   *                   <p>7224 - reserved in the <code>us-east-1</code> Region</p>
   *                </li>
   *                <li>
   *                   <p>9059 - reserved in the <code>eu-west-1</code> Region</p>
   *                </li>
   *                <li>
   *                   <p>17943 - reserved in the <code>ap-southeast-1</code> Region</p>
   *                </li>
   *                <li>
   *                   <p>10124 - reserved in the <code>ap-northeast-1</code> Region</p>
   *                </li>
   *             </ul>
   *         </note>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN
   *                 User Guide</i>.</p>
   *         <important>
   *             <p>To create more than one customer gateway with the same VPN type, IP address, and
   *                 BGP ASN, specify a unique device name for each customer gateway. Identical requests
   *                 return information about the existing customer gateway and do not create new
   *                 customer gateways.</p>
   *         </important>
   */
  public createCustomerGateway(
    args: CreateCustomerGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomerGatewayCommandOutput>;
  public createCustomerGateway(
    args: CreateCustomerGatewayCommandInput,
    cb: (err: any, data?: CreateCustomerGatewayCommandOutput) => void
  ): void;
  public createCustomerGateway(
    args: CreateCustomerGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomerGatewayCommandOutput) => void
  ): void;
  public createCustomerGateway(
    args: CreateCustomerGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCustomerGatewayCommandOutput) => void),
    cb?: (err: any, data?: CreateCustomerGatewayCommandOutput) => void
  ): Promise<CreateCustomerGatewayCommandOutput> | void {
    const command = new CreateCustomerGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a default subnet with a size <code>/20</code> IPv4 CIDR block in the
   *             specified Availability Zone in your default VPC. You can have only one default subnet
   *             per Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html#create-default-subnet">Creating a Default
   *                 Subnet</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  public createDefaultSubnet(
    args: CreateDefaultSubnetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDefaultSubnetCommandOutput>;
  public createDefaultSubnet(
    args: CreateDefaultSubnetCommandInput,
    cb: (err: any, data?: CreateDefaultSubnetCommandOutput) => void
  ): void;
  public createDefaultSubnet(
    args: CreateDefaultSubnetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDefaultSubnetCommandOutput) => void
  ): void;
  public createDefaultSubnet(
    args: CreateDefaultSubnetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDefaultSubnetCommandOutput) => void),
    cb?: (err: any, data?: CreateDefaultSubnetCommandOutput) => void
  ): Promise<CreateDefaultSubnetCommandOutput> | void {
    const command = new CreateDefaultSubnetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a default VPC with a size <code>/16</code> IPv4 CIDR block and a default subnet
   * 			in each Availability Zone. For more information about the components of a default VPC,
   * 			see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html">Default VPC and
   * 			Default Subnets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>. You cannot
   * 			specify the components of the default VPC yourself.</p>
   * 		       <p>If you deleted your previous default VPC, you can create a default VPC. You cannot have
   * 			more than one default VPC per Region.</p>
   * 		       <p>If your account supports EC2-Classic, you cannot use this action to create a default VPC
   * 			in a Region that supports EC2-Classic. If you want a default VPC in a Region that
   * 			supports EC2-Classic, see "I really want a default VPC for my existing EC2 account. Is
   * 			that possible?" in the <a href="http://aws.amazon.com/vpc/faqs/#Default_VPCs">Default VPCs
   * 			FAQ</a>.</p>
   */
  public createDefaultVpc(
    args: CreateDefaultVpcCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDefaultVpcCommandOutput>;
  public createDefaultVpc(
    args: CreateDefaultVpcCommandInput,
    cb: (err: any, data?: CreateDefaultVpcCommandOutput) => void
  ): void;
  public createDefaultVpc(
    args: CreateDefaultVpcCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDefaultVpcCommandOutput) => void
  ): void;
  public createDefaultVpc(
    args: CreateDefaultVpcCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDefaultVpcCommandOutput) => void),
    cb?: (err: any, data?: CreateDefaultVpcCommandOutput) => void
  ): Promise<CreateDefaultVpcCommandOutput> | void {
    const command = new CreateDefaultVpcCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a set of DHCP options for your VPC. After creating the set, you must
   * 				associate it with the VPC, causing all existing and new instances that you launch in
   * 				the VPC to use this set of DHCP options. The following are the individual DHCP
   * 				options you can specify. For more information about the options, see <a href="http://www.ietf.org/rfc/rfc2132.txt">RFC 2132</a>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>domain-name-servers</code> - The IP addresses of up to four domain name
   *                     servers, or AmazonProvidedDNS. The default DHCP option set specifies
   *                     AmazonProvidedDNS. If specifying more than one domain name server, specify the
   *                     IP addresses in a single parameter, separated by commas. To have your instance
   *                     receive a custom DNS hostname as specified in <code>domain-name</code>, you must
   *                     set <code>domain-name-servers</code> to a custom DNS server.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>domain-name</code> - If you're using AmazonProvidedDNS in
   *                    <code>us-east-1</code>, specify <code>ec2.internal</code>. If you're using
   *                    AmazonProvidedDNS in another Region, specify
   *                    <code>region.compute.internal</code> (for example,
   *                    <code>ap-northeast-1.compute.internal</code>). Otherwise, specify a domain
   *                    name (for example, <code>ExampleCompany.com</code>). This value is used to complete
   *                    unqualified DNS hostnames. <b>Important</b>: Some
   *                    Linux operating systems accept multiple domain names separated by spaces.
   *                    However, Windows and other Linux operating systems treat the value as a single
   *                    domain, which results in unexpected behavior. If your DHCP options set is
   *                    associated with a VPC that has instances with multiple operating systems,
   *                    specify only one domain name.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>ntp-servers</code> - The IP addresses of up to four Network Time Protocol (NTP)
   *                    servers.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>netbios-name-servers</code> - The IP addresses of up to four NetBIOS name
   *                    servers.</p>
   *            </li>
   *             <li>
   *                <p>
   *                   <code>netbios-node-type</code> - The NetBIOS node type (1, 2, 4, or 8). We recommend that
   *                    you specify 2 (broadcast and multicast are not currently supported). For more information
   *                    about these node types, see <a href="http://www.ietf.org/rfc/rfc2132.txt">RFC 2132</a>.</p>
   *            </li>
   *          </ul>
   *
   *          <p>Your VPC automatically starts out with a set of DHCP options that includes only a DNS
   * 			server that we provide (AmazonProvidedDNS). If you create a set of options, and if your
   * 			VPC has an internet gateway, make sure to set the <code>domain-name-servers</code>
   * 			option either to <code>AmazonProvidedDNS</code> or to a domain name server of your
   * 			choice. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html">DHCP Options Sets</a> in the
   * 			<i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  public createDhcpOptions(
    args: CreateDhcpOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDhcpOptionsCommandOutput>;
  public createDhcpOptions(
    args: CreateDhcpOptionsCommandInput,
    cb: (err: any, data?: CreateDhcpOptionsCommandOutput) => void
  ): void;
  public createDhcpOptions(
    args: CreateDhcpOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDhcpOptionsCommandOutput) => void
  ): void;
  public createDhcpOptions(
    args: CreateDhcpOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDhcpOptionsCommandOutput) => void),
    cb?: (err: any, data?: CreateDhcpOptionsCommandOutput) => void
  ): Promise<CreateDhcpOptionsCommandOutput> | void {
    const command = new CreateDhcpOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>[IPv6 only] Creates an egress-only internet gateway for your VPC. An egress-only
   * 			internet gateway is used to enable outbound communication over IPv6 from instances in
   * 			your VPC to the internet, and prevents hosts outside of your VPC from initiating an IPv6
   * 			connection with your instance.</p>
   */
  public createEgressOnlyInternetGateway(
    args: CreateEgressOnlyInternetGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEgressOnlyInternetGatewayCommandOutput>;
  public createEgressOnlyInternetGateway(
    args: CreateEgressOnlyInternetGatewayCommandInput,
    cb: (err: any, data?: CreateEgressOnlyInternetGatewayCommandOutput) => void
  ): void;
  public createEgressOnlyInternetGateway(
    args: CreateEgressOnlyInternetGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEgressOnlyInternetGatewayCommandOutput) => void
  ): void;
  public createEgressOnlyInternetGateway(
    args: CreateEgressOnlyInternetGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEgressOnlyInternetGatewayCommandOutput) => void),
    cb?: (err: any, data?: CreateEgressOnlyInternetGatewayCommandOutput) => void
  ): Promise<CreateEgressOnlyInternetGatewayCommandOutput> | void {
    const command = new CreateEgressOnlyInternetGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Launches an EC2 Fleet.</p>
   *          <p>You can create a single EC2 Fleet that includes multiple launch specifications that vary by
   *          instance type, AMI, Availability Zone, or subnet.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet.html">Launching an EC2 Fleet</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public createFleet(args: CreateFleetCommandInput, options?: __HttpHandlerOptions): Promise<CreateFleetCommandOutput>;
  public createFleet(args: CreateFleetCommandInput, cb: (err: any, data?: CreateFleetCommandOutput) => void): void;
  public createFleet(
    args: CreateFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFleetCommandOutput) => void
  ): void;
  public createFleet(
    args: CreateFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFleetCommandOutput) => void),
    cb?: (err: any, data?: CreateFleetCommandOutput) => void
  ): Promise<CreateFleetCommandOutput> | void {
    const command = new CreateFleetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates one or more flow logs to capture information about IP traffic for a specific network interface,
   *             subnet, or VPC. </p>
   *
   *         <p>Flow log data for a monitored network interface is recorded as flow log records, which are log events
   *             consisting of fields that describe the traffic flow. For more information, see
   *             <a href="https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html#flow-log-records">Flow Log Records</a>
   *             in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *
   *         <p>When publishing to CloudWatch Logs, flow log records are published to a log group, and each network
   *             interface has a unique log stream in the log group. When publishing to Amazon S3, flow log records for all
   *             of the monitored network interfaces are published to a single log file object that is stored in the specified
   *             bucket.</p>
   *
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html">VPC Flow Logs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  public createFlowLogs(
    args: CreateFlowLogsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFlowLogsCommandOutput>;
  public createFlowLogs(
    args: CreateFlowLogsCommandInput,
    cb: (err: any, data?: CreateFlowLogsCommandOutput) => void
  ): void;
  public createFlowLogs(
    args: CreateFlowLogsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFlowLogsCommandOutput) => void
  ): void;
  public createFlowLogs(
    args: CreateFlowLogsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFlowLogsCommandOutput) => void),
    cb?: (err: any, data?: CreateFlowLogsCommandOutput) => void
  ): Promise<CreateFlowLogsCommandOutput> | void {
    const command = new CreateFlowLogsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an Amazon FPGA Image (AFI) from the specified design checkpoint (DCP).</p>
   *          <p>The create operation is asynchronous. To verify that the AFI is ready for use,
   *          check the output logs.</p>
   *          <p>An AFI contains the FPGA bitstream that is ready to download to an FPGA.
   *          You can securely deploy an AFI on multiple FPGA-accelerated instances.
   *          For more information, see the <a href="https://github.com/aws/aws-fpga/">AWS FPGA Hardware Development Kit</a>.</p>
   */
  public createFpgaImage(
    args: CreateFpgaImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFpgaImageCommandOutput>;
  public createFpgaImage(
    args: CreateFpgaImageCommandInput,
    cb: (err: any, data?: CreateFpgaImageCommandOutput) => void
  ): void;
  public createFpgaImage(
    args: CreateFpgaImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFpgaImageCommandOutput) => void
  ): void;
  public createFpgaImage(
    args: CreateFpgaImageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFpgaImageCommandOutput) => void),
    cb?: (err: any, data?: CreateFpgaImageCommandOutput) => void
  ): Promise<CreateFpgaImageCommandOutput> | void {
    const command = new CreateFpgaImageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an Amazon EBS-backed AMI from an Amazon EBS-backed instance that is either running or stopped.</p>
   *          <p>If you customized your instance with instance store volumes or EBS volumes in addition to the root device volume, the new AMI contains block device mapping information for those volumes. When you launch an instance from this new AMI, the instance automatically launches with those additional volumes.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html">Creating Amazon EBS-Backed Linux AMIs</a>
   * 				in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public createImage(args: CreateImageCommandInput, options?: __HttpHandlerOptions): Promise<CreateImageCommandOutput>;
  public createImage(args: CreateImageCommandInput, cb: (err: any, data?: CreateImageCommandOutput) => void): void;
  public createImage(
    args: CreateImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateImageCommandOutput) => void
  ): void;
  public createImage(
    args: CreateImageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateImageCommandOutput) => void),
    cb?: (err: any, data?: CreateImageCommandOutput) => void
  ): Promise<CreateImageCommandOutput> | void {
    const command = new CreateImageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Exports a running or stopped instance to an Amazon S3 bucket.</p>
   *          <p>For information about the supported operating systems, image formats, and known limitations for the types of
   *    instances you can export, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport.html">Exporting an Instance as
   *     a VM Using VM Import/Export</a> in the <i>VM Import/Export User Guide</i>.</p>
   */
  public createInstanceExportTask(
    args: CreateInstanceExportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInstanceExportTaskCommandOutput>;
  public createInstanceExportTask(
    args: CreateInstanceExportTaskCommandInput,
    cb: (err: any, data?: CreateInstanceExportTaskCommandOutput) => void
  ): void;
  public createInstanceExportTask(
    args: CreateInstanceExportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInstanceExportTaskCommandOutput) => void
  ): void;
  public createInstanceExportTask(
    args: CreateInstanceExportTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateInstanceExportTaskCommandOutput) => void),
    cb?: (err: any, data?: CreateInstanceExportTaskCommandOutput) => void
  ): Promise<CreateInstanceExportTaskCommandOutput> | void {
    const command = new CreateInstanceExportTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an internet gateway for use with a VPC. After creating the internet gateway,
   * 			you attach it to a VPC using <a>AttachInternetGateway</a>.</p>
   *          <p>For more information about your VPC and internet gateway, see the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/">Amazon Virtual Private Cloud User Guide</a>.</p>
   */
  public createInternetGateway(
    args: CreateInternetGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInternetGatewayCommandOutput>;
  public createInternetGateway(
    args: CreateInternetGatewayCommandInput,
    cb: (err: any, data?: CreateInternetGatewayCommandOutput) => void
  ): void;
  public createInternetGateway(
    args: CreateInternetGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInternetGatewayCommandOutput) => void
  ): void;
  public createInternetGateway(
    args: CreateInternetGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateInternetGatewayCommandOutput) => void),
    cb?: (err: any, data?: CreateInternetGatewayCommandOutput) => void
  ): Promise<CreateInternetGatewayCommandOutput> | void {
    const command = new CreateInternetGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a 2048-bit RSA key pair with the specified name. Amazon EC2 stores the public
   *             key and displays the private key for you to save to a file. The private key is returned
   *             as an unencrypted PEM encoded PKCS#1 private key. If a key with the specified name
   *             already exists, Amazon EC2 returns an error.</p>
   *          <p>You can have up to five thousand key pairs per Region.</p>
   * 		       <p>The key pair returned to you is available only in the Region in which you create it.
   *             If you prefer, you can create your own key pair using a third-party tool and upload it
   *             to any Region using <a>ImportKeyPair</a>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Key Pairs</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public createKeyPair(
    args: CreateKeyPairCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateKeyPairCommandOutput>;
  public createKeyPair(
    args: CreateKeyPairCommandInput,
    cb: (err: any, data?: CreateKeyPairCommandOutput) => void
  ): void;
  public createKeyPair(
    args: CreateKeyPairCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKeyPairCommandOutput) => void
  ): void;
  public createKeyPair(
    args: CreateKeyPairCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateKeyPairCommandOutput) => void),
    cb?: (err: any, data?: CreateKeyPairCommandOutput) => void
  ): Promise<CreateKeyPairCommandOutput> | void {
    const command = new CreateKeyPairCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a launch template. A launch template contains the parameters to launch an
   *             instance. When you launch an instance using <a>RunInstances</a>, you can
   *             specify a launch template instead of providing the launch parameters in the request. For
   *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">Launching an instance from a
   *                 launch template</a>in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public createLaunchTemplate(
    args: CreateLaunchTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLaunchTemplateCommandOutput>;
  public createLaunchTemplate(
    args: CreateLaunchTemplateCommandInput,
    cb: (err: any, data?: CreateLaunchTemplateCommandOutput) => void
  ): void;
  public createLaunchTemplate(
    args: CreateLaunchTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLaunchTemplateCommandOutput) => void
  ): void;
  public createLaunchTemplate(
    args: CreateLaunchTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLaunchTemplateCommandOutput) => void),
    cb?: (err: any, data?: CreateLaunchTemplateCommandOutput) => void
  ): Promise<CreateLaunchTemplateCommandOutput> | void {
    const command = new CreateLaunchTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new version for a launch template. You can specify an existing version of
   *             launch template from which to base the new version.</p>
   *         <p>Launch template versions are numbered in the order in which they are created. You
   *             cannot specify, change, or replace the numbering of launch template versions.</p>
   *         <p>For
   *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#manage-launch-template-versions">Managing launch template versions</a>in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public createLaunchTemplateVersion(
    args: CreateLaunchTemplateVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLaunchTemplateVersionCommandOutput>;
  public createLaunchTemplateVersion(
    args: CreateLaunchTemplateVersionCommandInput,
    cb: (err: any, data?: CreateLaunchTemplateVersionCommandOutput) => void
  ): void;
  public createLaunchTemplateVersion(
    args: CreateLaunchTemplateVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLaunchTemplateVersionCommandOutput) => void
  ): void;
  public createLaunchTemplateVersion(
    args: CreateLaunchTemplateVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLaunchTemplateVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateLaunchTemplateVersionCommandOutput) => void
  ): Promise<CreateLaunchTemplateVersionCommandOutput> | void {
    const command = new CreateLaunchTemplateVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a static route for the specified local gateway route table.</p>
   */
  public createLocalGatewayRoute(
    args: CreateLocalGatewayRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLocalGatewayRouteCommandOutput>;
  public createLocalGatewayRoute(
    args: CreateLocalGatewayRouteCommandInput,
    cb: (err: any, data?: CreateLocalGatewayRouteCommandOutput) => void
  ): void;
  public createLocalGatewayRoute(
    args: CreateLocalGatewayRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLocalGatewayRouteCommandOutput) => void
  ): void;
  public createLocalGatewayRoute(
    args: CreateLocalGatewayRouteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLocalGatewayRouteCommandOutput) => void),
    cb?: (err: any, data?: CreateLocalGatewayRouteCommandOutput) => void
  ): Promise<CreateLocalGatewayRouteCommandOutput> | void {
    const command = new CreateLocalGatewayRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates the specified VPC with the specified local gateway route table.</p>
   */
  public createLocalGatewayRouteTableVpcAssociation(
    args: CreateLocalGatewayRouteTableVpcAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLocalGatewayRouteTableVpcAssociationCommandOutput>;
  public createLocalGatewayRouteTableVpcAssociation(
    args: CreateLocalGatewayRouteTableVpcAssociationCommandInput,
    cb: (err: any, data?: CreateLocalGatewayRouteTableVpcAssociationCommandOutput) => void
  ): void;
  public createLocalGatewayRouteTableVpcAssociation(
    args: CreateLocalGatewayRouteTableVpcAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLocalGatewayRouteTableVpcAssociationCommandOutput) => void
  ): void;
  public createLocalGatewayRouteTableVpcAssociation(
    args: CreateLocalGatewayRouteTableVpcAssociationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateLocalGatewayRouteTableVpcAssociationCommandOutput) => void),
    cb?: (err: any, data?: CreateLocalGatewayRouteTableVpcAssociationCommandOutput) => void
  ): Promise<CreateLocalGatewayRouteTableVpcAssociationCommandOutput> | void {
    const command = new CreateLocalGatewayRouteTableVpcAssociationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a managed prefix list. You can specify one or more entries for the prefix list. Each entry consists of a CIDR block and an optional description.</p>
   *         <p>You must specify the maximum number of entries for the prefix list. The maximum number of entries cannot be changed later.</p>
   */
  public createManagedPrefixList(
    args: CreateManagedPrefixListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateManagedPrefixListCommandOutput>;
  public createManagedPrefixList(
    args: CreateManagedPrefixListCommandInput,
    cb: (err: any, data?: CreateManagedPrefixListCommandOutput) => void
  ): void;
  public createManagedPrefixList(
    args: CreateManagedPrefixListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateManagedPrefixListCommandOutput) => void
  ): void;
  public createManagedPrefixList(
    args: CreateManagedPrefixListCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateManagedPrefixListCommandOutput) => void),
    cb?: (err: any, data?: CreateManagedPrefixListCommandOutput) => void
  ): Promise<CreateManagedPrefixListCommandOutput> | void {
    const command = new CreateManagedPrefixListCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a NAT gateway in the specified public subnet. This action creates a network
   *             interface in the specified subnet with a private IP address from the IP address range of
   *             the subnet. Internet-bound traffic from a private subnet can be routed to the NAT
   *             gateway, therefore enabling instances in the private subnet to connect to the internet.
   *             For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">NAT Gateways</a> in the
   *                 <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  public createNatGateway(
    args: CreateNatGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNatGatewayCommandOutput>;
  public createNatGateway(
    args: CreateNatGatewayCommandInput,
    cb: (err: any, data?: CreateNatGatewayCommandOutput) => void
  ): void;
  public createNatGateway(
    args: CreateNatGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNatGatewayCommandOutput) => void
  ): void;
  public createNatGateway(
    args: CreateNatGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateNatGatewayCommandOutput) => void),
    cb?: (err: any, data?: CreateNatGatewayCommandOutput) => void
  ): Promise<CreateNatGatewayCommandOutput> | void {
    const command = new CreateNatGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a network ACL in a VPC. Network ACLs provide an optional layer of security (in addition to security groups) for the instances in your VPC.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the
   * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  public createNetworkAcl(
    args: CreateNetworkAclCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNetworkAclCommandOutput>;
  public createNetworkAcl(
    args: CreateNetworkAclCommandInput,
    cb: (err: any, data?: CreateNetworkAclCommandOutput) => void
  ): void;
  public createNetworkAcl(
    args: CreateNetworkAclCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkAclCommandOutput) => void
  ): void;
  public createNetworkAcl(
    args: CreateNetworkAclCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateNetworkAclCommandOutput) => void),
    cb?: (err: any, data?: CreateNetworkAclCommandOutput) => void
  ): Promise<CreateNetworkAclCommandOutput> | void {
    const command = new CreateNetworkAclCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an entry (a rule) in a network ACL with the specified rule number. Each network ACL has a set of numbered ingress rules
   * 		        and a separate set of numbered egress rules. When determining whether a packet should be allowed in or out of a subnet associated
   * 		        with the ACL, we process the entries in the ACL according to the rule numbers, in ascending order. Each network ACL has a set of
   * 		        ingress rules and a separate set of egress rules.</p>
   * 		       <p>We recommend that you leave room between the rule numbers (for example, 100, 110, 120, ...), and not number them one right after the
   * 		        other (for example, 101, 102, 103, ...). This makes it easier to add a rule between existing ones without having to renumber the rules.</p>
   * 		       <p>After you add an entry, you can't modify it; you must either replace it, or create an entry and delete the old one.</p>
   *          <p>For more information about network ACLs, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  public createNetworkAclEntry(
    args: CreateNetworkAclEntryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNetworkAclEntryCommandOutput>;
  public createNetworkAclEntry(
    args: CreateNetworkAclEntryCommandInput,
    cb: (err: any, data?: CreateNetworkAclEntryCommandOutput) => void
  ): void;
  public createNetworkAclEntry(
    args: CreateNetworkAclEntryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkAclEntryCommandOutput) => void
  ): void;
  public createNetworkAclEntry(
    args: CreateNetworkAclEntryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateNetworkAclEntryCommandOutput) => void),
    cb?: (err: any, data?: CreateNetworkAclEntryCommandOutput) => void
  ): Promise<CreateNetworkAclEntryCommandOutput> | void {
    const command = new CreateNetworkAclEntryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a path to analyze for reachability.</p>
   *          <p>Reachability Analyzer enables you to analyze and debug network reachability between
   *           two resources in your virtual private cloud (VPC). For more information, see
   *           <a href="https://docs.aws.amazon.com/vpc/latest/reachability/">What is Reachability Analyzer</a>.</p>
   */
  public createNetworkInsightsPath(
    args: CreateNetworkInsightsPathCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNetworkInsightsPathCommandOutput>;
  public createNetworkInsightsPath(
    args: CreateNetworkInsightsPathCommandInput,
    cb: (err: any, data?: CreateNetworkInsightsPathCommandOutput) => void
  ): void;
  public createNetworkInsightsPath(
    args: CreateNetworkInsightsPathCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkInsightsPathCommandOutput) => void
  ): void;
  public createNetworkInsightsPath(
    args: CreateNetworkInsightsPathCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateNetworkInsightsPathCommandOutput) => void),
    cb?: (err: any, data?: CreateNetworkInsightsPathCommandOutput) => void
  ): Promise<CreateNetworkInsightsPathCommandOutput> | void {
    const command = new CreateNetworkInsightsPathCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a network interface in the specified subnet.</p>
   *         <p>For more information about network interfaces, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html">Elastic Network Interfaces</a>
   *             in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  public createNetworkInterface(
    args: CreateNetworkInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNetworkInterfaceCommandOutput>;
  public createNetworkInterface(
    args: CreateNetworkInterfaceCommandInput,
    cb: (err: any, data?: CreateNetworkInterfaceCommandOutput) => void
  ): void;
  public createNetworkInterface(
    args: CreateNetworkInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkInterfaceCommandOutput) => void
  ): void;
  public createNetworkInterface(
    args: CreateNetworkInterfaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateNetworkInterfaceCommandOutput) => void),
    cb?: (err: any, data?: CreateNetworkInterfaceCommandOutput) => void
  ): Promise<CreateNetworkInterfaceCommandOutput> | void {
    const command = new CreateNetworkInterfaceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Grants an AWS-authorized account permission to attach the specified network interface to
   *             an instance in their account.</p>
   * 		       <p>You can grant permission to a single AWS account only, and only one account at a time.</p>
   */
  public createNetworkInterfacePermission(
    args: CreateNetworkInterfacePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNetworkInterfacePermissionCommandOutput>;
  public createNetworkInterfacePermission(
    args: CreateNetworkInterfacePermissionCommandInput,
    cb: (err: any, data?: CreateNetworkInterfacePermissionCommandOutput) => void
  ): void;
  public createNetworkInterfacePermission(
    args: CreateNetworkInterfacePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkInterfacePermissionCommandOutput) => void
  ): void;
  public createNetworkInterfacePermission(
    args: CreateNetworkInterfacePermissionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateNetworkInterfacePermissionCommandOutput) => void),
    cb?: (err: any, data?: CreateNetworkInterfacePermissionCommandOutput) => void
  ): Promise<CreateNetworkInterfacePermissionCommandOutput> | void {
    const command = new CreateNetworkInterfacePermissionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a placement group in which to launch instances. The strategy of the placement
   *             group determines how the instances are organized within the group. </p>
   *         <p>A <code>cluster</code> placement group is a logical grouping of instances within a
   *             single Availability Zone that benefit from low network latency, high network throughput.
   *             A <code>spread</code> placement group places instances on distinct hardware. A
   *                 <code>partition</code> placement group places groups of instances in different
   *             partitions, where instances in one partition do not share the same hardware with
   *             instances in another partition.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public createPlacementGroup(
    args: CreatePlacementGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePlacementGroupCommandOutput>;
  public createPlacementGroup(
    args: CreatePlacementGroupCommandInput,
    cb: (err: any, data?: CreatePlacementGroupCommandOutput) => void
  ): void;
  public createPlacementGroup(
    args: CreatePlacementGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePlacementGroupCommandOutput) => void
  ): void;
  public createPlacementGroup(
    args: CreatePlacementGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePlacementGroupCommandOutput) => void),
    cb?: (err: any, data?: CreatePlacementGroupCommandOutput) => void
  ): Promise<CreatePlacementGroupCommandOutput> | void {
    const command = new CreatePlacementGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a listing for Amazon EC2 Standard Reserved Instances to be sold in the Reserved Instance
   * 			Marketplace. You can submit one Standard Reserved Instance listing at a time. To get a list of your
   * 			Standard Reserved Instances, you can use the <a>DescribeReservedInstances</a> operation.</p>
   *          <note>
   *             <p>Only Standard Reserved Instances can be sold in the Reserved Instance Marketplace.
   *        Convertible Reserved Instances cannot be sold.</p>
   *          </note>
   * 		       <p>The Reserved Instance Marketplace matches sellers who want to resell Standard Reserved Instance capacity that they no longer need with buyers who want to purchase additional capacity. Reserved Instances bought and sold through the Reserved Instance Marketplace work like any other Reserved Instances.</p>
   * 		       <p>To sell your Standard Reserved Instances, you must first register as a seller in the Reserved Instance
   *       Marketplace. After completing the registration process, you can create a Reserved Instance
   *       Marketplace listing of some or all of your Standard Reserved Instances, and specify the upfront price
   *       to receive for them. Your Standard Reserved Instance listings then become available for purchase. To
   *       view the details of your Standard Reserved Instance listing, you can use the
   *         <a>DescribeReservedInstancesListings</a> operation.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a> in the
   * 				<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public createReservedInstancesListing(
    args: CreateReservedInstancesListingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReservedInstancesListingCommandOutput>;
  public createReservedInstancesListing(
    args: CreateReservedInstancesListingCommandInput,
    cb: (err: any, data?: CreateReservedInstancesListingCommandOutput) => void
  ): void;
  public createReservedInstancesListing(
    args: CreateReservedInstancesListingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReservedInstancesListingCommandOutput) => void
  ): void;
  public createReservedInstancesListing(
    args: CreateReservedInstancesListingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateReservedInstancesListingCommandOutput) => void),
    cb?: (err: any, data?: CreateReservedInstancesListingCommandOutput) => void
  ): Promise<CreateReservedInstancesListingCommandOutput> | void {
    const command = new CreateReservedInstancesListingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a route in a route table within a VPC.</p>
   *          <p>You must specify one of the following targets: internet gateway or virtual private
   * 			gateway, NAT instance, NAT gateway, VPC peering connection, network interface, egress-only internet gateway, or transit gateway.</p>
   *          <p>When determining how to route traffic, we use the route with the most specific match.
   *             For example, traffic is destined for the IPv4 address <code>192.0.2.3</code>, and the
   *             route table includes the following two IPv4 routes:</p>
   * 			      <ul>
   *             <li>
   * 					          <p>
   *                   <code>192.0.2.0/24</code> (goes to some target A)</p>
   * 				        </li>
   *             <li>
   * 					          <p>
   *                   <code>192.0.2.0/28</code> (goes to some target B)</p>
   * 				        </li>
   *          </ul>
   * 		       <p>Both routes apply to the traffic destined for <code>192.0.2.3</code>. However, the second route
   * 				in the list covers a smaller number of IP addresses and is therefore more specific,
   * 				so we use that route to determine where to target the traffic.</p>
   *          <p>For more information about route tables, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route Tables</a> in the
   *          <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  public createRoute(args: CreateRouteCommandInput, options?: __HttpHandlerOptions): Promise<CreateRouteCommandOutput>;
  public createRoute(args: CreateRouteCommandInput, cb: (err: any, data?: CreateRouteCommandOutput) => void): void;
  public createRoute(
    args: CreateRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRouteCommandOutput) => void
  ): void;
  public createRoute(
    args: CreateRouteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRouteCommandOutput) => void),
    cb?: (err: any, data?: CreateRouteCommandOutput) => void
  ): Promise<CreateRouteCommandOutput> | void {
    const command = new CreateRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a route table for the specified VPC. After you create a route table, you can add routes and associate the table with a subnet.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route Tables</a> in the
   * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  public createRouteTable(
    args: CreateRouteTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRouteTableCommandOutput>;
  public createRouteTable(
    args: CreateRouteTableCommandInput,
    cb: (err: any, data?: CreateRouteTableCommandOutput) => void
  ): void;
  public createRouteTable(
    args: CreateRouteTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRouteTableCommandOutput) => void
  ): void;
  public createRouteTable(
    args: CreateRouteTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRouteTableCommandOutput) => void),
    cb?: (err: any, data?: CreateRouteTableCommandOutput) => void
  ): Promise<CreateRouteTableCommandOutput> | void {
    const command = new CreateRouteTableCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a security group.</p>
   *          <p>A security group acts as a virtual firewall for your instance to control inbound and outbound traffic.
   *          For more information, see
   * 				<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html">Amazon EC2 Security Groups</a> in
   * 				the <i>Amazon Elastic Compute Cloud User Guide</i> and
   * 				<a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html">Security Groups for Your VPC</a> in the
   * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *          <p>When you create a security group, you specify a friendly name of your choice. You can have a security group for use in EC2-Classic with the same name as a security group for use in a VPC. However, you can't have two security groups for use in EC2-Classic with the same name or two security groups for use in a VPC with the same name.</p>
   *          <p>You have a default security group for use in EC2-Classic and a default security group for use in your VPC. If you don't specify a security group when you launch an instance, the instance is launched into the appropriate default security group. A default security group includes a default rule that grants instances unrestricted network access to each other.</p>
   *          <p>You can add or remove rules from your security groups using
   * 					<a>AuthorizeSecurityGroupIngress</a>,
   * 					<a>AuthorizeSecurityGroupEgress</a>,
   * 					<a>RevokeSecurityGroupIngress</a>, and
   * 					<a>RevokeSecurityGroupEgress</a>.</p>
   *          <p>For more information about VPC security group limits, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC Limits</a>.</p>
   */
  public createSecurityGroup(
    args: CreateSecurityGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSecurityGroupCommandOutput>;
  public createSecurityGroup(
    args: CreateSecurityGroupCommandInput,
    cb: (err: any, data?: CreateSecurityGroupCommandOutput) => void
  ): void;
  public createSecurityGroup(
    args: CreateSecurityGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSecurityGroupCommandOutput) => void
  ): void;
  public createSecurityGroup(
    args: CreateSecurityGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSecurityGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateSecurityGroupCommandOutput) => void
  ): Promise<CreateSecurityGroupCommandOutput> | void {
    const command = new CreateSecurityGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a snapshot of an EBS volume and stores it in Amazon S3. You can use snapshots for
   *       backups, to make copies of EBS volumes, and to save data before shutting down an
   *       instance.</p>
   *          <p>When a snapshot is created, any AWS Marketplace product codes that are associated with the
   *       source volume are propagated to the snapshot.</p>
   *          <p>You can take a snapshot of an attached volume that is in use. However, snapshots only
   *       capture data that has been written to your EBS volume at the time the snapshot command is
   *       issued; this might exclude any data that has been cached by any applications or the operating
   *       system. If you can pause any file systems on the volume long enough to take a snapshot, your
   *       snapshot should be complete. However, if you cannot pause all file writes to the volume, you
   *       should unmount the volume from within the instance, issue the snapshot command, and then
   *       remount the volume to ensure a consistent and complete snapshot. You may remount and use your
   *       volume while the snapshot status is <code>pending</code>.</p>
   *          <p>To create a snapshot for EBS volumes that serve as root devices, you should stop the
   *       instance before taking the snapshot.</p>
   *          <p>Snapshots that are taken from encrypted volumes are automatically encrypted. Volumes that
   *       are created from encrypted snapshots are also automatically encrypted. Your encrypted volumes
   *       and any associated snapshots always remain protected.</p>
   *          <p>You can tag your snapshots during creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging your Amazon EC2
   *         resources</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html">Amazon Elastic Block Store</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public createSnapshot(
    args: CreateSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSnapshotCommandOutput>;
  public createSnapshot(
    args: CreateSnapshotCommandInput,
    cb: (err: any, data?: CreateSnapshotCommandOutput) => void
  ): void;
  public createSnapshot(
    args: CreateSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSnapshotCommandOutput) => void
  ): void;
  public createSnapshot(
    args: CreateSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSnapshotCommandOutput) => void),
    cb?: (err: any, data?: CreateSnapshotCommandOutput) => void
  ): Promise<CreateSnapshotCommandOutput> | void {
    const command = new CreateSnapshotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates crash-consistent snapshots of multiple EBS volumes and stores the data in S3.
   *     Volumes are chosen by specifying an instance. Any attached volumes will produce one snapshot
   *     each that is crash-consistent across the instance. Boot volumes can be excluded by changing the
   *     parameters. </p>
   */
  public createSnapshots(
    args: CreateSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSnapshotsCommandOutput>;
  public createSnapshots(
    args: CreateSnapshotsCommandInput,
    cb: (err: any, data?: CreateSnapshotsCommandOutput) => void
  ): void;
  public createSnapshots(
    args: CreateSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSnapshotsCommandOutput) => void
  ): void;
  public createSnapshots(
    args: CreateSnapshotsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSnapshotsCommandOutput) => void),
    cb?: (err: any, data?: CreateSnapshotsCommandOutput) => void
  ): Promise<CreateSnapshotsCommandOutput> | void {
    const command = new CreateSnapshotsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a data feed for Spot Instances, enabling you to view Spot Instance usage logs.
   * 				You can create one data feed per AWS account. For more information, see
   *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-data-feeds.html">Spot Instance data feed</a>
   *         in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  public createSpotDatafeedSubscription(
    args: CreateSpotDatafeedSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSpotDatafeedSubscriptionCommandOutput>;
  public createSpotDatafeedSubscription(
    args: CreateSpotDatafeedSubscriptionCommandInput,
    cb: (err: any, data?: CreateSpotDatafeedSubscriptionCommandOutput) => void
  ): void;
  public createSpotDatafeedSubscription(
    args: CreateSpotDatafeedSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSpotDatafeedSubscriptionCommandOutput) => void
  ): void;
  public createSpotDatafeedSubscription(
    args: CreateSpotDatafeedSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSpotDatafeedSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: CreateSpotDatafeedSubscriptionCommandOutput) => void
  ): Promise<CreateSpotDatafeedSubscriptionCommandOutput> | void {
    const command = new CreateSpotDatafeedSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a subnet in a specified VPC.</p>
   *         <p>You must specify an IPv4 CIDR block for the subnet. After you create a subnet, you
   *             can't change its CIDR block. The allowed block size is between a /16 netmask (65,536 IP
   *             addresses) and /28 netmask (16 IP addresses). The CIDR block must not overlap with the
   *             CIDR block of an existing subnet in the VPC.</p>
   *         <p>If you've associated an IPv6 CIDR block with your VPC, you can create a subnet with an
   *             IPv6 CIDR block that uses a /64 prefix length. </p>
   *         <important>
   *             <p>AWS reserves both the first four and the last IPv4 address in each subnet's CIDR
   *                 block. They're not available for use.</p>
   *         </important>
   *         <p>If you add more than one subnet to a VPC, they're set up in a star topology with a
   *             logical router in the middle.</p>
   *         <p>When you stop an instance in a subnet, it retains its private IPv4 address. It's
   *             therefore possible to have a subnet with no running instances (they're all stopped), but
   *             no remaining IP addresses available.</p>
   *         <p>For more information about subnets, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">Your VPC and Subnets</a> in the
   *                 <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  public createSubnet(
    args: CreateSubnetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSubnetCommandOutput>;
  public createSubnet(args: CreateSubnetCommandInput, cb: (err: any, data?: CreateSubnetCommandOutput) => void): void;
  public createSubnet(
    args: CreateSubnetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSubnetCommandOutput) => void
  ): void;
  public createSubnet(
    args: CreateSubnetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSubnetCommandOutput) => void),
    cb?: (err: any, data?: CreateSubnetCommandOutput) => void
  ): Promise<CreateSubnetCommandOutput> | void {
    const command = new CreateSubnetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds or overwrites only the specified tags for the specified Amazon EC2 resource or
   *          resources. When you specify an existing tag key, the value is overwritten with
   *          the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and
   *          optional value. Tag keys must be unique per resource.</p>
   *
   *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging Your Resources</a> in the
   *             <i>Amazon Elastic Compute Cloud User Guide</i>. For more information about
   *          creating IAM policies that control users' access to resources based on tags, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-iam-actions-resources.html">Supported
   *             Resource-Level Permissions for Amazon EC2 API Actions</a> in the <i>Amazon
   *             Elastic Compute Cloud User Guide</i>.</p>
   */
  public createTags(args: CreateTagsCommandInput, options?: __HttpHandlerOptions): Promise<CreateTagsCommandOutput>;
  public createTags(args: CreateTagsCommandInput, cb: (err: any, data?: CreateTagsCommandOutput) => void): void;
  public createTags(
    args: CreateTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTagsCommandOutput) => void
  ): void;
  public createTags(
    args: CreateTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTagsCommandOutput) => void),
    cb?: (err: any, data?: CreateTagsCommandOutput) => void
  ): Promise<CreateTagsCommandOutput> | void {
    const command = new CreateTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a Traffic Mirror filter.</p>
   *          <p>A Traffic Mirror filter is a set of rules that defines the traffic to mirror.</p>
   *          <p>By default, no traffic is mirrored. To mirror traffic, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorFilterRule.htm">CreateTrafficMirrorFilterRule</a> to add Traffic Mirror rules to the filter. The rules you
   *          add define what traffic gets mirrored. You can also use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTrafficMirrorFilterNetworkServices.html">ModifyTrafficMirrorFilterNetworkServices</a> to mirror supported network services.</p>
   */
  public createTrafficMirrorFilter(
    args: CreateTrafficMirrorFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrafficMirrorFilterCommandOutput>;
  public createTrafficMirrorFilter(
    args: CreateTrafficMirrorFilterCommandInput,
    cb: (err: any, data?: CreateTrafficMirrorFilterCommandOutput) => void
  ): void;
  public createTrafficMirrorFilter(
    args: CreateTrafficMirrorFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrafficMirrorFilterCommandOutput) => void
  ): void;
  public createTrafficMirrorFilter(
    args: CreateTrafficMirrorFilterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTrafficMirrorFilterCommandOutput) => void),
    cb?: (err: any, data?: CreateTrafficMirrorFilterCommandOutput) => void
  ): Promise<CreateTrafficMirrorFilterCommandOutput> | void {
    const command = new CreateTrafficMirrorFilterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a Traffic Mirror filter rule. </p>
   *          <p>A Traffic Mirror rule defines the Traffic Mirror source traffic to mirror.</p>
   *          <p>You need the Traffic Mirror filter ID when you create the rule.</p>
   */
  public createTrafficMirrorFilterRule(
    args: CreateTrafficMirrorFilterRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrafficMirrorFilterRuleCommandOutput>;
  public createTrafficMirrorFilterRule(
    args: CreateTrafficMirrorFilterRuleCommandInput,
    cb: (err: any, data?: CreateTrafficMirrorFilterRuleCommandOutput) => void
  ): void;
  public createTrafficMirrorFilterRule(
    args: CreateTrafficMirrorFilterRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrafficMirrorFilterRuleCommandOutput) => void
  ): void;
  public createTrafficMirrorFilterRule(
    args: CreateTrafficMirrorFilterRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTrafficMirrorFilterRuleCommandOutput) => void),
    cb?: (err: any, data?: CreateTrafficMirrorFilterRuleCommandOutput) => void
  ): Promise<CreateTrafficMirrorFilterRuleCommandOutput> | void {
    const command = new CreateTrafficMirrorFilterRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a Traffic Mirror session.</p>
   *          <p>A Traffic Mirror session actively copies packets from a Traffic Mirror source to a Traffic Mirror target. Create a filter, and then assign it
   *          to the session to define a subset of the traffic to mirror, for example all TCP
   *          traffic.</p>
   *          <p>The Traffic Mirror source and the Traffic Mirror target (monitoring appliances) can be in the same VPC, or in a different VPC connected via VPC peering or a transit gateway. </p>
   *          <p>By default, no traffic is mirrored. Use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorFilter.htm">CreateTrafficMirrorFilter</a> to
   *          create filter rules that specify the traffic to mirror.</p>
   */
  public createTrafficMirrorSession(
    args: CreateTrafficMirrorSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrafficMirrorSessionCommandOutput>;
  public createTrafficMirrorSession(
    args: CreateTrafficMirrorSessionCommandInput,
    cb: (err: any, data?: CreateTrafficMirrorSessionCommandOutput) => void
  ): void;
  public createTrafficMirrorSession(
    args: CreateTrafficMirrorSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrafficMirrorSessionCommandOutput) => void
  ): void;
  public createTrafficMirrorSession(
    args: CreateTrafficMirrorSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTrafficMirrorSessionCommandOutput) => void),
    cb?: (err: any, data?: CreateTrafficMirrorSessionCommandOutput) => void
  ): Promise<CreateTrafficMirrorSessionCommandOutput> | void {
    const command = new CreateTrafficMirrorSessionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a target for your Traffic Mirror session.</p>
   *          <p>A Traffic Mirror target is the destination for mirrored traffic. The Traffic Mirror source and
   *          the Traffic Mirror target (monitoring appliances) can be in the same VPC, or in
   *          different VPCs connected via VPC peering or a transit gateway.</p>
   *          <p>A Traffic Mirror target can be a network interface, or a Network Load Balancer.</p>
   *          <p>To use the target in a Traffic Mirror session, use  <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorSession.htm">CreateTrafficMirrorSession</a>.</p>
   */
  public createTrafficMirrorTarget(
    args: CreateTrafficMirrorTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrafficMirrorTargetCommandOutput>;
  public createTrafficMirrorTarget(
    args: CreateTrafficMirrorTargetCommandInput,
    cb: (err: any, data?: CreateTrafficMirrorTargetCommandOutput) => void
  ): void;
  public createTrafficMirrorTarget(
    args: CreateTrafficMirrorTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrafficMirrorTargetCommandOutput) => void
  ): void;
  public createTrafficMirrorTarget(
    args: CreateTrafficMirrorTargetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTrafficMirrorTargetCommandOutput) => void),
    cb?: (err: any, data?: CreateTrafficMirrorTargetCommandOutput) => void
  ): Promise<CreateTrafficMirrorTargetCommandOutput> | void {
    const command = new CreateTrafficMirrorTargetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a transit gateway.</p>
   *          <p>You can use a transit gateway to interconnect your virtual private clouds (VPC) and on-premises networks.
   *           After the transit gateway enters the <code>available</code> state, you can attach your VPCs and VPN
   *           connections to the transit gateway.</p>
   *          <p>To attach your VPCs, use <a>CreateTransitGatewayVpcAttachment</a>.</p>
   *          <p>To attach a VPN connection, use <a>CreateCustomerGateway</a> to create a customer
   *          gateway and specify the ID of the customer gateway and the ID of the transit gateway in a call to
   *          <a>CreateVpnConnection</a>.</p>
   *          <p>When you create a transit gateway, we create a default transit gateway route table and use it as the default association route table
   *          and the default propagation route table. You can use <a>CreateTransitGatewayRouteTable</a> to create
   *          additional transit gateway route tables. If you disable automatic route propagation, we do not create a default transit gateway route table.
   *          You can use <a>EnableTransitGatewayRouteTablePropagation</a> to propagate routes from a resource
   *          attachment to a transit gateway route table. If you disable automatic associations, you can use <a>AssociateTransitGatewayRouteTable</a> to associate a resource attachment with a transit gateway route table.</p>
   */
  public createTransitGateway(
    args: CreateTransitGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransitGatewayCommandOutput>;
  public createTransitGateway(
    args: CreateTransitGatewayCommandInput,
    cb: (err: any, data?: CreateTransitGatewayCommandOutput) => void
  ): void;
  public createTransitGateway(
    args: CreateTransitGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransitGatewayCommandOutput) => void
  ): void;
  public createTransitGateway(
    args: CreateTransitGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTransitGatewayCommandOutput) => void),
    cb?: (err: any, data?: CreateTransitGatewayCommandOutput) => void
  ): Promise<CreateTransitGatewayCommandOutput> | void {
    const command = new CreateTransitGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a Connect attachment from a specified transit gateway attachment. A Connect attachment is a GRE-based tunnel attachment that you can use to establish a connection between a transit gateway and an appliance.</p>
   *         <p>A Connect attachment uses an existing VPC or AWS Direct Connect attachment as the underlying transport mechanism. </p>
   */
  public createTransitGatewayConnect(
    args: CreateTransitGatewayConnectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransitGatewayConnectCommandOutput>;
  public createTransitGatewayConnect(
    args: CreateTransitGatewayConnectCommandInput,
    cb: (err: any, data?: CreateTransitGatewayConnectCommandOutput) => void
  ): void;
  public createTransitGatewayConnect(
    args: CreateTransitGatewayConnectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransitGatewayConnectCommandOutput) => void
  ): void;
  public createTransitGatewayConnect(
    args: CreateTransitGatewayConnectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTransitGatewayConnectCommandOutput) => void),
    cb?: (err: any, data?: CreateTransitGatewayConnectCommandOutput) => void
  ): Promise<CreateTransitGatewayConnectCommandOutput> | void {
    const command = new CreateTransitGatewayConnectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a Connect peer for a specified transit gateway Connect attachment between a
   *             transit gateway and an appliance.</p>
   *         <p>The peer address and transit gateway address must be the same IP address family (IPv4 or IPv6).</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-connect.html#tgw-connect-peer">Connect peers</a> in the <i>Transit Gateways Guide</i>.</p>
   */
  public createTransitGatewayConnectPeer(
    args: CreateTransitGatewayConnectPeerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransitGatewayConnectPeerCommandOutput>;
  public createTransitGatewayConnectPeer(
    args: CreateTransitGatewayConnectPeerCommandInput,
    cb: (err: any, data?: CreateTransitGatewayConnectPeerCommandOutput) => void
  ): void;
  public createTransitGatewayConnectPeer(
    args: CreateTransitGatewayConnectPeerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransitGatewayConnectPeerCommandOutput) => void
  ): void;
  public createTransitGatewayConnectPeer(
    args: CreateTransitGatewayConnectPeerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTransitGatewayConnectPeerCommandOutput) => void),
    cb?: (err: any, data?: CreateTransitGatewayConnectPeerCommandOutput) => void
  ): Promise<CreateTransitGatewayConnectPeerCommandOutput> | void {
    const command = new CreateTransitGatewayConnectPeerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a multicast domain using the specified transit gateway.</p>
   *         <p>The transit gateway  must be in the available state before you create a domain. Use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGateways.html">DescribeTransitGateways</a> to see the state of transit gateway.</p>
   */
  public createTransitGatewayMulticastDomain(
    args: CreateTransitGatewayMulticastDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransitGatewayMulticastDomainCommandOutput>;
  public createTransitGatewayMulticastDomain(
    args: CreateTransitGatewayMulticastDomainCommandInput,
    cb: (err: any, data?: CreateTransitGatewayMulticastDomainCommandOutput) => void
  ): void;
  public createTransitGatewayMulticastDomain(
    args: CreateTransitGatewayMulticastDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransitGatewayMulticastDomainCommandOutput) => void
  ): void;
  public createTransitGatewayMulticastDomain(
    args: CreateTransitGatewayMulticastDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTransitGatewayMulticastDomainCommandOutput) => void),
    cb?: (err: any, data?: CreateTransitGatewayMulticastDomainCommandOutput) => void
  ): Promise<CreateTransitGatewayMulticastDomainCommandOutput> | void {
    const command = new CreateTransitGatewayMulticastDomainCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Requests a transit gateway peering attachment between the specified transit gateway
   *             (requester) and a peer transit gateway (accepter). The transit gateways must be in
   *             different Regions. The peer transit gateway can be in your account or a different AWS
   *             account. </p>
   *          <p>After you create the peering attachment, the owner of the accepter
   *             transit gateway must accept the attachment request.</p>
   */
  public createTransitGatewayPeeringAttachment(
    args: CreateTransitGatewayPeeringAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransitGatewayPeeringAttachmentCommandOutput>;
  public createTransitGatewayPeeringAttachment(
    args: CreateTransitGatewayPeeringAttachmentCommandInput,
    cb: (err: any, data?: CreateTransitGatewayPeeringAttachmentCommandOutput) => void
  ): void;
  public createTransitGatewayPeeringAttachment(
    args: CreateTransitGatewayPeeringAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransitGatewayPeeringAttachmentCommandOutput) => void
  ): void;
  public createTransitGatewayPeeringAttachment(
    args: CreateTransitGatewayPeeringAttachmentCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateTransitGatewayPeeringAttachmentCommandOutput) => void),
    cb?: (err: any, data?: CreateTransitGatewayPeeringAttachmentCommandOutput) => void
  ): Promise<CreateTransitGatewayPeeringAttachmentCommandOutput> | void {
    const command = new CreateTransitGatewayPeeringAttachmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a reference (route) to a prefix list in a specified transit gateway route table.</p>
   */
  public createTransitGatewayPrefixListReference(
    args: CreateTransitGatewayPrefixListReferenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransitGatewayPrefixListReferenceCommandOutput>;
  public createTransitGatewayPrefixListReference(
    args: CreateTransitGatewayPrefixListReferenceCommandInput,
    cb: (err: any, data?: CreateTransitGatewayPrefixListReferenceCommandOutput) => void
  ): void;
  public createTransitGatewayPrefixListReference(
    args: CreateTransitGatewayPrefixListReferenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransitGatewayPrefixListReferenceCommandOutput) => void
  ): void;
  public createTransitGatewayPrefixListReference(
    args: CreateTransitGatewayPrefixListReferenceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateTransitGatewayPrefixListReferenceCommandOutput) => void),
    cb?: (err: any, data?: CreateTransitGatewayPrefixListReferenceCommandOutput) => void
  ): Promise<CreateTransitGatewayPrefixListReferenceCommandOutput> | void {
    const command = new CreateTransitGatewayPrefixListReferenceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a static route for the specified transit gateway route table.</p>
   */
  public createTransitGatewayRoute(
    args: CreateTransitGatewayRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransitGatewayRouteCommandOutput>;
  public createTransitGatewayRoute(
    args: CreateTransitGatewayRouteCommandInput,
    cb: (err: any, data?: CreateTransitGatewayRouteCommandOutput) => void
  ): void;
  public createTransitGatewayRoute(
    args: CreateTransitGatewayRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransitGatewayRouteCommandOutput) => void
  ): void;
  public createTransitGatewayRoute(
    args: CreateTransitGatewayRouteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTransitGatewayRouteCommandOutput) => void),
    cb?: (err: any, data?: CreateTransitGatewayRouteCommandOutput) => void
  ): Promise<CreateTransitGatewayRouteCommandOutput> | void {
    const command = new CreateTransitGatewayRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a route table for the specified transit gateway.</p>
   */
  public createTransitGatewayRouteTable(
    args: CreateTransitGatewayRouteTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransitGatewayRouteTableCommandOutput>;
  public createTransitGatewayRouteTable(
    args: CreateTransitGatewayRouteTableCommandInput,
    cb: (err: any, data?: CreateTransitGatewayRouteTableCommandOutput) => void
  ): void;
  public createTransitGatewayRouteTable(
    args: CreateTransitGatewayRouteTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransitGatewayRouteTableCommandOutput) => void
  ): void;
  public createTransitGatewayRouteTable(
    args: CreateTransitGatewayRouteTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTransitGatewayRouteTableCommandOutput) => void),
    cb?: (err: any, data?: CreateTransitGatewayRouteTableCommandOutput) => void
  ): Promise<CreateTransitGatewayRouteTableCommandOutput> | void {
    const command = new CreateTransitGatewayRouteTableCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Attaches the specified VPC to the specified transit gateway.</p>
   *          <p>If you attach a VPC with a CIDR range that overlaps the CIDR range of a VPC that is already attached,
   *          the new VPC CIDR range is not propagated to the default propagation route table.</p>
   *          <p>To send VPC traffic to an attached transit gateway, add a route to the VPC route table using <a>CreateRoute</a>.</p>
   */
  public createTransitGatewayVpcAttachment(
    args: CreateTransitGatewayVpcAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransitGatewayVpcAttachmentCommandOutput>;
  public createTransitGatewayVpcAttachment(
    args: CreateTransitGatewayVpcAttachmentCommandInput,
    cb: (err: any, data?: CreateTransitGatewayVpcAttachmentCommandOutput) => void
  ): void;
  public createTransitGatewayVpcAttachment(
    args: CreateTransitGatewayVpcAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransitGatewayVpcAttachmentCommandOutput) => void
  ): void;
  public createTransitGatewayVpcAttachment(
    args: CreateTransitGatewayVpcAttachmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTransitGatewayVpcAttachmentCommandOutput) => void),
    cb?: (err: any, data?: CreateTransitGatewayVpcAttachmentCommandOutput) => void
  ): Promise<CreateTransitGatewayVpcAttachmentCommandOutput> | void {
    const command = new CreateTransitGatewayVpcAttachmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an EBS volume that can be attached to an instance in the same Availability Zone.</p>
   *          <p>You can create a new empty volume or restore a volume from an EBS snapshot.
   *       Any AWS Marketplace product codes from the snapshot are propagated to the volume.</p>
   *          <p>You can create encrypted volumes. Encrypted volumes must be attached to instances that
   *       support Amazon EBS encryption. Volumes that are created from encrypted snapshots are also automatically
   *       encrypted. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a>
   *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>You can tag your volumes during creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging your Amazon EC2
   *         resources</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-volume.html">Creating an Amazon EBS volume</a> in the
   *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public createVolume(
    args: CreateVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVolumeCommandOutput>;
  public createVolume(args: CreateVolumeCommandInput, cb: (err: any, data?: CreateVolumeCommandOutput) => void): void;
  public createVolume(
    args: CreateVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVolumeCommandOutput) => void
  ): void;
  public createVolume(
    args: CreateVolumeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVolumeCommandOutput) => void),
    cb?: (err: any, data?: CreateVolumeCommandOutput) => void
  ): Promise<CreateVolumeCommandOutput> | void {
    const command = new CreateVolumeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a VPC with the specified IPv4 CIDR block. The smallest VPC you can create
   * 			uses a /28 netmask (16 IPv4 addresses), and the largest uses a /16 netmask (65,536 IPv4
   * 			addresses). For more information about how large to make your VPC, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">Your VPC and
   * 				Subnets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *          <p>You can optionally request an IPv6 CIDR block for the VPC. You can request an Amazon-provided IPv6 CIDR block from Amazon's pool of IPv6 addresses, or an IPv6 CIDR block from an IPv6 address pool that you provisioned through bring your own IP addresses (<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html">BYOIP</a>).</p>
   * 		       <p>By default, each instance you launch in the VPC has the default DHCP options, which
   * 			include only a default DNS server that we provide (AmazonProvidedDNS). For more
   * 			information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html">DHCP Options Sets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *          <p>You can specify the instance tenancy value for the VPC when you create it. You can't change
   *       this value for the VPC after you create it. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html">Dedicated Instances</a> in the
   *           <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public createVpc(args: CreateVpcCommandInput, options?: __HttpHandlerOptions): Promise<CreateVpcCommandOutput>;
  public createVpc(args: CreateVpcCommandInput, cb: (err: any, data?: CreateVpcCommandOutput) => void): void;
  public createVpc(
    args: CreateVpcCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcCommandOutput) => void
  ): void;
  public createVpc(
    args: CreateVpcCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVpcCommandOutput) => void),
    cb?: (err: any, data?: CreateVpcCommandOutput) => void
  ): Promise<CreateVpcCommandOutput> | void {
    const command = new CreateVpcCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a VPC endpoint for a specified service. An endpoint enables you to create a
   *             private connection between your VPC and the service. The service may be provided by AWS,
   *             an AWS Marketplace Partner, or another AWS account. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html">VPC Endpoints</a> in
   *             the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *         <p>A <code>gateway</code> endpoint serves as a target for a route in your route table for
   *             traffic destined for the AWS service. You can specify an endpoint policy to attach to
   *             the endpoint, which will control access to the service from your VPC. You can also
   *             specify the VPC route tables that use the endpoint.</p>
   *         <p>An <code>interface</code> endpoint is a network interface in your subnet that
   *             serves as an endpoint for communicating with the specified service. You can specify the
   *             subnets in which to create an endpoint, and the security groups to associate with the
   *             endpoint network interface.</p>
   *         <p>A <code>GatewayLoadBalancer</code> endpoint is a network interface in your subnet that serves an endpoint for communicating with a Gateway Load Balancer that you've configured as a VPC endpoint service.</p>
   *         <p>Use <a>DescribeVpcEndpointServices</a> to get a list of supported
   *             services.</p>
   */
  public createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcEndpointCommandOutput>;
  public createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    cb: (err: any, data?: CreateVpcEndpointCommandOutput) => void
  ): void;
  public createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcEndpointCommandOutput) => void
  ): void;
  public createVpcEndpoint(
    args: CreateVpcEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVpcEndpointCommandOutput) => void),
    cb?: (err: any, data?: CreateVpcEndpointCommandOutput) => void
  ): Promise<CreateVpcEndpointCommandOutput> | void {
    const command = new CreateVpcEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a connection notification for a specified VPC endpoint or VPC endpoint
   *             service. A connection notification notifies you of specific endpoint events. You must
   *             create an SNS topic to receive notifications. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Create a Topic</a> in
   *             the <i>Amazon Simple Notification Service Developer Guide</i>.</p>
   *         <p>You can create a connection notification for interface endpoints only.</p>
   */
  public createVpcEndpointConnectionNotification(
    args: CreateVpcEndpointConnectionNotificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcEndpointConnectionNotificationCommandOutput>;
  public createVpcEndpointConnectionNotification(
    args: CreateVpcEndpointConnectionNotificationCommandInput,
    cb: (err: any, data?: CreateVpcEndpointConnectionNotificationCommandOutput) => void
  ): void;
  public createVpcEndpointConnectionNotification(
    args: CreateVpcEndpointConnectionNotificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcEndpointConnectionNotificationCommandOutput) => void
  ): void;
  public createVpcEndpointConnectionNotification(
    args: CreateVpcEndpointConnectionNotificationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateVpcEndpointConnectionNotificationCommandOutput) => void),
    cb?: (err: any, data?: CreateVpcEndpointConnectionNotificationCommandOutput) => void
  ): Promise<CreateVpcEndpointConnectionNotificationCommandOutput> | void {
    const command = new CreateVpcEndpointConnectionNotificationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a VPC endpoint service configuration to which service consumers (AWS accounts,
   *             IAM users, and IAM roles) can connect.</p>
   *         <p>To create an endpoint service configuration, you must first create one of the
   *             following for your service:</p>
   *         <ul>
   *             <li>
   *                 <p>A <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html">Network Load Balancer</a>. Service consumers connect to your service using an
   *                     interface endpoint.</p>
   *             </li>
   *             <li>
   *                 <p>A <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/introduction.html">Gateway Load Balancer</a>. Service consumers connect to your service using a
   *                     Gateway Load Balancer endpoint.</p>
   *             </li>
   *          </ul>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-service.html">VPC Endpoint Services</a> in the
   *                 <i>Amazon Virtual Private Cloud User Guide</i>. </p>
   *         <p>If you set the private DNS name, you must prove that you own the private DNS domain
   *             name. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-dns-validation.html">VPC Endpoint Service
   *                 Private DNS Name Verification</a> in the
   *             <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  public createVpcEndpointServiceConfiguration(
    args: CreateVpcEndpointServiceConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcEndpointServiceConfigurationCommandOutput>;
  public createVpcEndpointServiceConfiguration(
    args: CreateVpcEndpointServiceConfigurationCommandInput,
    cb: (err: any, data?: CreateVpcEndpointServiceConfigurationCommandOutput) => void
  ): void;
  public createVpcEndpointServiceConfiguration(
    args: CreateVpcEndpointServiceConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcEndpointServiceConfigurationCommandOutput) => void
  ): void;
  public createVpcEndpointServiceConfiguration(
    args: CreateVpcEndpointServiceConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateVpcEndpointServiceConfigurationCommandOutput) => void),
    cb?: (err: any, data?: CreateVpcEndpointServiceConfigurationCommandOutput) => void
  ): Promise<CreateVpcEndpointServiceConfigurationCommandOutput> | void {
    const command = new CreateVpcEndpointServiceConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Requests a VPC peering connection between two VPCs: a requester VPC that you own and
   * 			an accepter VPC with which to create the connection. The accepter VPC can belong to
   * 			another AWS account and can be in a different Region to the requester VPC. The requester
   * 			VPC and accepter VPC cannot have overlapping CIDR blocks.</p>
   *          <note>
   *             <p>Limitations and rules apply to a VPC peering connection. For more information, see the <a href="https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-basics.html#vpc-peering-limitations">limitations</a> section in the <i>VPC Peering Guide</i>.</p>
   *          </note>
   *          <p>The owner of the accepter VPC must accept the peering request to activate the peering
   *             connection. The VPC peering connection request expires after 7 days, after which it
   *             cannot be accepted or rejected.</p>
   *          <p>If you create a VPC peering connection request between VPCs with overlapping CIDR
   *             blocks, the VPC peering connection has a status of <code>failed</code>.</p>
   */
  public createVpcPeeringConnection(
    args: CreateVpcPeeringConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcPeeringConnectionCommandOutput>;
  public createVpcPeeringConnection(
    args: CreateVpcPeeringConnectionCommandInput,
    cb: (err: any, data?: CreateVpcPeeringConnectionCommandOutput) => void
  ): void;
  public createVpcPeeringConnection(
    args: CreateVpcPeeringConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcPeeringConnectionCommandOutput) => void
  ): void;
  public createVpcPeeringConnection(
    args: CreateVpcPeeringConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVpcPeeringConnectionCommandOutput) => void),
    cb?: (err: any, data?: CreateVpcPeeringConnectionCommandOutput) => void
  ): Promise<CreateVpcPeeringConnectionCommandOutput> | void {
    const command = new CreateVpcPeeringConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a VPN connection between an existing virtual private gateway or transit gateway and a
   *             customer gateway. The supported connection type is <code>ipsec.1</code>.</p>
   *         <p>The response includes information that you need to give to your network administrator
   *             to configure your customer gateway.</p>
   *         <important>
   *             <p>We strongly recommend that you use HTTPS when calling this operation because the
   *                 response contains sensitive cryptographic information for configuring your customer
   *                 gateway device.</p>
   *         </important>
   *         <p>If you decide to shut down your VPN connection for any reason and later create a new
   *             VPN connection, you must reconfigure your customer gateway with the new information
   *             returned from this call.</p>
   *         <p>This is an idempotent operation. If you perform the operation more than once, Amazon
   *             EC2 doesn't return an error.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN
   *                 User Guide</i>.</p>
   */
  public createVpnConnection(
    args: CreateVpnConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpnConnectionCommandOutput>;
  public createVpnConnection(
    args: CreateVpnConnectionCommandInput,
    cb: (err: any, data?: CreateVpnConnectionCommandOutput) => void
  ): void;
  public createVpnConnection(
    args: CreateVpnConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpnConnectionCommandOutput) => void
  ): void;
  public createVpnConnection(
    args: CreateVpnConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVpnConnectionCommandOutput) => void),
    cb?: (err: any, data?: CreateVpnConnectionCommandOutput) => void
  ): Promise<CreateVpnConnectionCommandOutput> | void {
    const command = new CreateVpnConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a static route associated with a VPN connection between an existing virtual private gateway and a VPN customer gateway. The static route allows traffic to be routed from the virtual private gateway to the VPN customer gateway.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
   */
  public createVpnConnectionRoute(
    args: CreateVpnConnectionRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpnConnectionRouteCommandOutput>;
  public createVpnConnectionRoute(
    args: CreateVpnConnectionRouteCommandInput,
    cb: (err: any, data?: CreateVpnConnectionRouteCommandOutput) => void
  ): void;
  public createVpnConnectionRoute(
    args: CreateVpnConnectionRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpnConnectionRouteCommandOutput) => void
  ): void;
  public createVpnConnectionRoute(
    args: CreateVpnConnectionRouteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVpnConnectionRouteCommandOutput) => void),
    cb?: (err: any, data?: CreateVpnConnectionRouteCommandOutput) => void
  ): Promise<CreateVpnConnectionRouteCommandOutput> | void {
    const command = new CreateVpnConnectionRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a virtual private gateway. A virtual private gateway is the endpoint on the VPC side of your VPN connection. You can create a virtual private gateway before creating the VPC itself.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
   */
  public createVpnGateway(
    args: CreateVpnGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpnGatewayCommandOutput>;
  public createVpnGateway(
    args: CreateVpnGatewayCommandInput,
    cb: (err: any, data?: CreateVpnGatewayCommandOutput) => void
  ): void;
  public createVpnGateway(
    args: CreateVpnGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpnGatewayCommandOutput) => void
  ): void;
  public createVpnGateway(
    args: CreateVpnGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVpnGatewayCommandOutput) => void),
    cb?: (err: any, data?: CreateVpnGatewayCommandOutput) => void
  ): Promise<CreateVpnGatewayCommandOutput> | void {
    const command = new CreateVpnGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a carrier gateway.</p>
   *         <important>
   *             <p>If you do not delete the route that contains the carrier gateway as the
   *                 Target, the route is a blackhole route. For information about how to delete a route, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteRoute.html">DeleteRoute</a>.</p>
   *         </important>
   */
  public deleteCarrierGateway(
    args: DeleteCarrierGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCarrierGatewayCommandOutput>;
  public deleteCarrierGateway(
    args: DeleteCarrierGatewayCommandInput,
    cb: (err: any, data?: DeleteCarrierGatewayCommandOutput) => void
  ): void;
  public deleteCarrierGateway(
    args: DeleteCarrierGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCarrierGatewayCommandOutput) => void
  ): void;
  public deleteCarrierGateway(
    args: DeleteCarrierGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCarrierGatewayCommandOutput) => void),
    cb?: (err: any, data?: DeleteCarrierGatewayCommandOutput) => void
  ): Promise<DeleteCarrierGatewayCommandOutput> | void {
    const command = new DeleteCarrierGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified Client VPN endpoint. You must disassociate all target networks before you
   * 			can delete a Client VPN endpoint.</p>
   */
  public deleteClientVpnEndpoint(
    args: DeleteClientVpnEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClientVpnEndpointCommandOutput>;
  public deleteClientVpnEndpoint(
    args: DeleteClientVpnEndpointCommandInput,
    cb: (err: any, data?: DeleteClientVpnEndpointCommandOutput) => void
  ): void;
  public deleteClientVpnEndpoint(
    args: DeleteClientVpnEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClientVpnEndpointCommandOutput) => void
  ): void;
  public deleteClientVpnEndpoint(
    args: DeleteClientVpnEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteClientVpnEndpointCommandOutput) => void),
    cb?: (err: any, data?: DeleteClientVpnEndpointCommandOutput) => void
  ): Promise<DeleteClientVpnEndpointCommandOutput> | void {
    const command = new DeleteClientVpnEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a route from a Client VPN endpoint. You can only delete routes that you manually added using
   * 			the <b>CreateClientVpnRoute</b> action. You cannot delete routes that were
   * 			automatically added when associating a subnet. To remove routes that have been automatically added,
   * 			disassociate the target subnet from the Client VPN endpoint.</p>
   */
  public deleteClientVpnRoute(
    args: DeleteClientVpnRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClientVpnRouteCommandOutput>;
  public deleteClientVpnRoute(
    args: DeleteClientVpnRouteCommandInput,
    cb: (err: any, data?: DeleteClientVpnRouteCommandOutput) => void
  ): void;
  public deleteClientVpnRoute(
    args: DeleteClientVpnRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClientVpnRouteCommandOutput) => void
  ): void;
  public deleteClientVpnRoute(
    args: DeleteClientVpnRouteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteClientVpnRouteCommandOutput) => void),
    cb?: (err: any, data?: DeleteClientVpnRouteCommandOutput) => void
  ): Promise<DeleteClientVpnRouteCommandOutput> | void {
    const command = new DeleteClientVpnRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified customer gateway. You must delete the VPN connection before you can delete the customer gateway.</p>
   */
  public deleteCustomerGateway(
    args: DeleteCustomerGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomerGatewayCommandOutput>;
  public deleteCustomerGateway(
    args: DeleteCustomerGatewayCommandInput,
    cb: (err: any, data?: DeleteCustomerGatewayCommandOutput) => void
  ): void;
  public deleteCustomerGateway(
    args: DeleteCustomerGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomerGatewayCommandOutput) => void
  ): void;
  public deleteCustomerGateway(
    args: DeleteCustomerGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCustomerGatewayCommandOutput) => void),
    cb?: (err: any, data?: DeleteCustomerGatewayCommandOutput) => void
  ): Promise<DeleteCustomerGatewayCommandOutput> | void {
    const command = new DeleteCustomerGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified set of DHCP options. You must disassociate the set of DHCP options before you can delete it. You can disassociate the set of DHCP options by associating either a new set of options or the default set of options with the VPC.</p>
   */
  public deleteDhcpOptions(
    args: DeleteDhcpOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDhcpOptionsCommandOutput>;
  public deleteDhcpOptions(
    args: DeleteDhcpOptionsCommandInput,
    cb: (err: any, data?: DeleteDhcpOptionsCommandOutput) => void
  ): void;
  public deleteDhcpOptions(
    args: DeleteDhcpOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDhcpOptionsCommandOutput) => void
  ): void;
  public deleteDhcpOptions(
    args: DeleteDhcpOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDhcpOptionsCommandOutput) => void),
    cb?: (err: any, data?: DeleteDhcpOptionsCommandOutput) => void
  ): Promise<DeleteDhcpOptionsCommandOutput> | void {
    const command = new DeleteDhcpOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an egress-only internet gateway.</p>
   */
  public deleteEgressOnlyInternetGateway(
    args: DeleteEgressOnlyInternetGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEgressOnlyInternetGatewayCommandOutput>;
  public deleteEgressOnlyInternetGateway(
    args: DeleteEgressOnlyInternetGatewayCommandInput,
    cb: (err: any, data?: DeleteEgressOnlyInternetGatewayCommandOutput) => void
  ): void;
  public deleteEgressOnlyInternetGateway(
    args: DeleteEgressOnlyInternetGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEgressOnlyInternetGatewayCommandOutput) => void
  ): void;
  public deleteEgressOnlyInternetGateway(
    args: DeleteEgressOnlyInternetGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEgressOnlyInternetGatewayCommandOutput) => void),
    cb?: (err: any, data?: DeleteEgressOnlyInternetGatewayCommandOutput) => void
  ): Promise<DeleteEgressOnlyInternetGatewayCommandOutput> | void {
    const command = new DeleteEgressOnlyInternetGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified EC2 Fleet.</p>
   *          <p>After you delete an EC2 Fleet, it launches no new instances.</p>
   *          <p>You must specify whether a deleted EC2 Fleet should also terminate its instances. If you
   *          choose to terminate the instances, the EC2 Fleet enters the <code>deleted_terminating</code>
   *          state. Otherwise, the EC2 Fleet enters the <code>deleted_running</code> state, and the instances
   *          continue to run until they are interrupted or you terminate them manually.</p>
   *          <p>For <code>instant</code> fleets, EC2 Fleet must terminate the instances when the fleet is
   *          deleted. A deleted <code>instant</code> fleet with running instances is not
   *          supported.</p>
   *          <p class="title">
   *             <b>Restrictions</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>You can delete up to 25 <code>instant</code> fleets in a single request. If you exceed this
   *                number, no <code>instant</code> fleets are deleted and an error is returned. There is no
   *                restriction on the number of fleets of type <code>maintain</code> or <code>request</code> that can be deleted
   *                in a single request.</p>
   *             </li>
   *             <li>
   *                <p>Up to 1000 instances can be terminated in a single request to delete
   *                <code>instant</code> fleets.</p>
   *             </li>
   *          </ul>
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/manage-ec2-fleet.html#delete-fleet">Deleting an EC2
   *          Fleet</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public deleteFleets(
    args: DeleteFleetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFleetsCommandOutput>;
  public deleteFleets(args: DeleteFleetsCommandInput, cb: (err: any, data?: DeleteFleetsCommandOutput) => void): void;
  public deleteFleets(
    args: DeleteFleetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFleetsCommandOutput) => void
  ): void;
  public deleteFleets(
    args: DeleteFleetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFleetsCommandOutput) => void),
    cb?: (err: any, data?: DeleteFleetsCommandOutput) => void
  ): Promise<DeleteFleetsCommandOutput> | void {
    const command = new DeleteFleetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes one or more flow logs.</p>
   */
  public deleteFlowLogs(
    args: DeleteFlowLogsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFlowLogsCommandOutput>;
  public deleteFlowLogs(
    args: DeleteFlowLogsCommandInput,
    cb: (err: any, data?: DeleteFlowLogsCommandOutput) => void
  ): void;
  public deleteFlowLogs(
    args: DeleteFlowLogsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFlowLogsCommandOutput) => void
  ): void;
  public deleteFlowLogs(
    args: DeleteFlowLogsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFlowLogsCommandOutput) => void),
    cb?: (err: any, data?: DeleteFlowLogsCommandOutput) => void
  ): Promise<DeleteFlowLogsCommandOutput> | void {
    const command = new DeleteFlowLogsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified Amazon FPGA Image (AFI).</p>
   */
  public deleteFpgaImage(
    args: DeleteFpgaImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFpgaImageCommandOutput>;
  public deleteFpgaImage(
    args: DeleteFpgaImageCommandInput,
    cb: (err: any, data?: DeleteFpgaImageCommandOutput) => void
  ): void;
  public deleteFpgaImage(
    args: DeleteFpgaImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFpgaImageCommandOutput) => void
  ): void;
  public deleteFpgaImage(
    args: DeleteFpgaImageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFpgaImageCommandOutput) => void),
    cb?: (err: any, data?: DeleteFpgaImageCommandOutput) => void
  ): Promise<DeleteFpgaImageCommandOutput> | void {
    const command = new DeleteFpgaImageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified internet gateway. You must detach the internet gateway from the
   * 			VPC before you can delete it.</p>
   */
  public deleteInternetGateway(
    args: DeleteInternetGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInternetGatewayCommandOutput>;
  public deleteInternetGateway(
    args: DeleteInternetGatewayCommandInput,
    cb: (err: any, data?: DeleteInternetGatewayCommandOutput) => void
  ): void;
  public deleteInternetGateway(
    args: DeleteInternetGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInternetGatewayCommandOutput) => void
  ): void;
  public deleteInternetGateway(
    args: DeleteInternetGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteInternetGatewayCommandOutput) => void),
    cb?: (err: any, data?: DeleteInternetGatewayCommandOutput) => void
  ): Promise<DeleteInternetGatewayCommandOutput> | void {
    const command = new DeleteInternetGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified key pair, by removing the public key from Amazon EC2.</p>
   */
  public deleteKeyPair(
    args: DeleteKeyPairCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteKeyPairCommandOutput>;
  public deleteKeyPair(
    args: DeleteKeyPairCommandInput,
    cb: (err: any, data?: DeleteKeyPairCommandOutput) => void
  ): void;
  public deleteKeyPair(
    args: DeleteKeyPairCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKeyPairCommandOutput) => void
  ): void;
  public deleteKeyPair(
    args: DeleteKeyPairCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteKeyPairCommandOutput) => void),
    cb?: (err: any, data?: DeleteKeyPairCommandOutput) => void
  ): Promise<DeleteKeyPairCommandOutput> | void {
    const command = new DeleteKeyPairCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a launch template. Deleting a launch template deletes all of its versions.</p>
   */
  public deleteLaunchTemplate(
    args: DeleteLaunchTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLaunchTemplateCommandOutput>;
  public deleteLaunchTemplate(
    args: DeleteLaunchTemplateCommandInput,
    cb: (err: any, data?: DeleteLaunchTemplateCommandOutput) => void
  ): void;
  public deleteLaunchTemplate(
    args: DeleteLaunchTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLaunchTemplateCommandOutput) => void
  ): void;
  public deleteLaunchTemplate(
    args: DeleteLaunchTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLaunchTemplateCommandOutput) => void),
    cb?: (err: any, data?: DeleteLaunchTemplateCommandOutput) => void
  ): Promise<DeleteLaunchTemplateCommandOutput> | void {
    const command = new DeleteLaunchTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes one or more versions of a launch template. You cannot delete the default
   *             version of a launch template; you must first assign a different version as the default.
   *             If the default version is the only version for the launch template, you must delete the
   *             entire launch template using <a>DeleteLaunchTemplate</a>.</p>
   */
  public deleteLaunchTemplateVersions(
    args: DeleteLaunchTemplateVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLaunchTemplateVersionsCommandOutput>;
  public deleteLaunchTemplateVersions(
    args: DeleteLaunchTemplateVersionsCommandInput,
    cb: (err: any, data?: DeleteLaunchTemplateVersionsCommandOutput) => void
  ): void;
  public deleteLaunchTemplateVersions(
    args: DeleteLaunchTemplateVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLaunchTemplateVersionsCommandOutput) => void
  ): void;
  public deleteLaunchTemplateVersions(
    args: DeleteLaunchTemplateVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLaunchTemplateVersionsCommandOutput) => void),
    cb?: (err: any, data?: DeleteLaunchTemplateVersionsCommandOutput) => void
  ): Promise<DeleteLaunchTemplateVersionsCommandOutput> | void {
    const command = new DeleteLaunchTemplateVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified route from the specified local gateway route table.</p>
   */
  public deleteLocalGatewayRoute(
    args: DeleteLocalGatewayRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLocalGatewayRouteCommandOutput>;
  public deleteLocalGatewayRoute(
    args: DeleteLocalGatewayRouteCommandInput,
    cb: (err: any, data?: DeleteLocalGatewayRouteCommandOutput) => void
  ): void;
  public deleteLocalGatewayRoute(
    args: DeleteLocalGatewayRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLocalGatewayRouteCommandOutput) => void
  ): void;
  public deleteLocalGatewayRoute(
    args: DeleteLocalGatewayRouteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLocalGatewayRouteCommandOutput) => void),
    cb?: (err: any, data?: DeleteLocalGatewayRouteCommandOutput) => void
  ): Promise<DeleteLocalGatewayRouteCommandOutput> | void {
    const command = new DeleteLocalGatewayRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified association between a VPC and local gateway route table.</p>
   */
  public deleteLocalGatewayRouteTableVpcAssociation(
    args: DeleteLocalGatewayRouteTableVpcAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLocalGatewayRouteTableVpcAssociationCommandOutput>;
  public deleteLocalGatewayRouteTableVpcAssociation(
    args: DeleteLocalGatewayRouteTableVpcAssociationCommandInput,
    cb: (err: any, data?: DeleteLocalGatewayRouteTableVpcAssociationCommandOutput) => void
  ): void;
  public deleteLocalGatewayRouteTableVpcAssociation(
    args: DeleteLocalGatewayRouteTableVpcAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLocalGatewayRouteTableVpcAssociationCommandOutput) => void
  ): void;
  public deleteLocalGatewayRouteTableVpcAssociation(
    args: DeleteLocalGatewayRouteTableVpcAssociationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteLocalGatewayRouteTableVpcAssociationCommandOutput) => void),
    cb?: (err: any, data?: DeleteLocalGatewayRouteTableVpcAssociationCommandOutput) => void
  ): Promise<DeleteLocalGatewayRouteTableVpcAssociationCommandOutput> | void {
    const command = new DeleteLocalGatewayRouteTableVpcAssociationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified managed prefix list. You must first remove all references to the prefix list in your resources.</p>
   */
  public deleteManagedPrefixList(
    args: DeleteManagedPrefixListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteManagedPrefixListCommandOutput>;
  public deleteManagedPrefixList(
    args: DeleteManagedPrefixListCommandInput,
    cb: (err: any, data?: DeleteManagedPrefixListCommandOutput) => void
  ): void;
  public deleteManagedPrefixList(
    args: DeleteManagedPrefixListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteManagedPrefixListCommandOutput) => void
  ): void;
  public deleteManagedPrefixList(
    args: DeleteManagedPrefixListCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteManagedPrefixListCommandOutput) => void),
    cb?: (err: any, data?: DeleteManagedPrefixListCommandOutput) => void
  ): Promise<DeleteManagedPrefixListCommandOutput> | void {
    const command = new DeleteManagedPrefixListCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified NAT gateway. Deleting a NAT gateway disassociates its Elastic IP address, but does not release the address from your account. Deleting a NAT gateway does not delete any NAT gateway routes in your route tables.</p>
   */
  public deleteNatGateway(
    args: DeleteNatGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNatGatewayCommandOutput>;
  public deleteNatGateway(
    args: DeleteNatGatewayCommandInput,
    cb: (err: any, data?: DeleteNatGatewayCommandOutput) => void
  ): void;
  public deleteNatGateway(
    args: DeleteNatGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNatGatewayCommandOutput) => void
  ): void;
  public deleteNatGateway(
    args: DeleteNatGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteNatGatewayCommandOutput) => void),
    cb?: (err: any, data?: DeleteNatGatewayCommandOutput) => void
  ): Promise<DeleteNatGatewayCommandOutput> | void {
    const command = new DeleteNatGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified network ACL. You can't delete the ACL if it's associated with any subnets. You can't delete the default network ACL.</p>
   */
  public deleteNetworkAcl(
    args: DeleteNetworkAclCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkAclCommandOutput>;
  public deleteNetworkAcl(
    args: DeleteNetworkAclCommandInput,
    cb: (err: any, data?: DeleteNetworkAclCommandOutput) => void
  ): void;
  public deleteNetworkAcl(
    args: DeleteNetworkAclCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkAclCommandOutput) => void
  ): void;
  public deleteNetworkAcl(
    args: DeleteNetworkAclCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteNetworkAclCommandOutput) => void),
    cb?: (err: any, data?: DeleteNetworkAclCommandOutput) => void
  ): Promise<DeleteNetworkAclCommandOutput> | void {
    const command = new DeleteNetworkAclCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified ingress or egress entry (rule) from the specified network ACL.</p>
   */
  public deleteNetworkAclEntry(
    args: DeleteNetworkAclEntryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkAclEntryCommandOutput>;
  public deleteNetworkAclEntry(
    args: DeleteNetworkAclEntryCommandInput,
    cb: (err: any, data?: DeleteNetworkAclEntryCommandOutput) => void
  ): void;
  public deleteNetworkAclEntry(
    args: DeleteNetworkAclEntryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkAclEntryCommandOutput) => void
  ): void;
  public deleteNetworkAclEntry(
    args: DeleteNetworkAclEntryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteNetworkAclEntryCommandOutput) => void),
    cb?: (err: any, data?: DeleteNetworkAclEntryCommandOutput) => void
  ): Promise<DeleteNetworkAclEntryCommandOutput> | void {
    const command = new DeleteNetworkAclEntryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified network insights analysis.</p>
   */
  public deleteNetworkInsightsAnalysis(
    args: DeleteNetworkInsightsAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkInsightsAnalysisCommandOutput>;
  public deleteNetworkInsightsAnalysis(
    args: DeleteNetworkInsightsAnalysisCommandInput,
    cb: (err: any, data?: DeleteNetworkInsightsAnalysisCommandOutput) => void
  ): void;
  public deleteNetworkInsightsAnalysis(
    args: DeleteNetworkInsightsAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkInsightsAnalysisCommandOutput) => void
  ): void;
  public deleteNetworkInsightsAnalysis(
    args: DeleteNetworkInsightsAnalysisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteNetworkInsightsAnalysisCommandOutput) => void),
    cb?: (err: any, data?: DeleteNetworkInsightsAnalysisCommandOutput) => void
  ): Promise<DeleteNetworkInsightsAnalysisCommandOutput> | void {
    const command = new DeleteNetworkInsightsAnalysisCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified path.</p>
   */
  public deleteNetworkInsightsPath(
    args: DeleteNetworkInsightsPathCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkInsightsPathCommandOutput>;
  public deleteNetworkInsightsPath(
    args: DeleteNetworkInsightsPathCommandInput,
    cb: (err: any, data?: DeleteNetworkInsightsPathCommandOutput) => void
  ): void;
  public deleteNetworkInsightsPath(
    args: DeleteNetworkInsightsPathCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkInsightsPathCommandOutput) => void
  ): void;
  public deleteNetworkInsightsPath(
    args: DeleteNetworkInsightsPathCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteNetworkInsightsPathCommandOutput) => void),
    cb?: (err: any, data?: DeleteNetworkInsightsPathCommandOutput) => void
  ): Promise<DeleteNetworkInsightsPathCommandOutput> | void {
    const command = new DeleteNetworkInsightsPathCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified network interface. You must detach the network interface before you can delete it.</p>
   */
  public deleteNetworkInterface(
    args: DeleteNetworkInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkInterfaceCommandOutput>;
  public deleteNetworkInterface(
    args: DeleteNetworkInterfaceCommandInput,
    cb: (err: any, data?: DeleteNetworkInterfaceCommandOutput) => void
  ): void;
  public deleteNetworkInterface(
    args: DeleteNetworkInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkInterfaceCommandOutput) => void
  ): void;
  public deleteNetworkInterface(
    args: DeleteNetworkInterfaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteNetworkInterfaceCommandOutput) => void),
    cb?: (err: any, data?: DeleteNetworkInterfaceCommandOutput) => void
  ): Promise<DeleteNetworkInterfaceCommandOutput> | void {
    const command = new DeleteNetworkInterfaceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a permission for a network interface. By default, you cannot delete the
   * 			permission if the account for which you're removing the permission has attached the
   * 			network interface to an instance. However, you can force delete the permission,
   * 			regardless of any attachment.</p>
   */
  public deleteNetworkInterfacePermission(
    args: DeleteNetworkInterfacePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkInterfacePermissionCommandOutput>;
  public deleteNetworkInterfacePermission(
    args: DeleteNetworkInterfacePermissionCommandInput,
    cb: (err: any, data?: DeleteNetworkInterfacePermissionCommandOutput) => void
  ): void;
  public deleteNetworkInterfacePermission(
    args: DeleteNetworkInterfacePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkInterfacePermissionCommandOutput) => void
  ): void;
  public deleteNetworkInterfacePermission(
    args: DeleteNetworkInterfacePermissionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteNetworkInterfacePermissionCommandOutput) => void),
    cb?: (err: any, data?: DeleteNetworkInterfacePermissionCommandOutput) => void
  ): Promise<DeleteNetworkInterfacePermissionCommandOutput> | void {
    const command = new DeleteNetworkInterfacePermissionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified placement group. You must terminate all instances in the
   *             placement group before you can delete the placement group. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the <i>Amazon Elastic Compute Cloud User
   *                 Guide</i>.</p>
   */
  public deletePlacementGroup(
    args: DeletePlacementGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePlacementGroupCommandOutput>;
  public deletePlacementGroup(
    args: DeletePlacementGroupCommandInput,
    cb: (err: any, data?: DeletePlacementGroupCommandOutput) => void
  ): void;
  public deletePlacementGroup(
    args: DeletePlacementGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePlacementGroupCommandOutput) => void
  ): void;
  public deletePlacementGroup(
    args: DeletePlacementGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePlacementGroupCommandOutput) => void),
    cb?: (err: any, data?: DeletePlacementGroupCommandOutput) => void
  ): Promise<DeletePlacementGroupCommandOutput> | void {
    const command = new DeletePlacementGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the queued purchases for the specified Reserved Instances.</p>
   */
  public deleteQueuedReservedInstances(
    args: DeleteQueuedReservedInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteQueuedReservedInstancesCommandOutput>;
  public deleteQueuedReservedInstances(
    args: DeleteQueuedReservedInstancesCommandInput,
    cb: (err: any, data?: DeleteQueuedReservedInstancesCommandOutput) => void
  ): void;
  public deleteQueuedReservedInstances(
    args: DeleteQueuedReservedInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQueuedReservedInstancesCommandOutput) => void
  ): void;
  public deleteQueuedReservedInstances(
    args: DeleteQueuedReservedInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteQueuedReservedInstancesCommandOutput) => void),
    cb?: (err: any, data?: DeleteQueuedReservedInstancesCommandOutput) => void
  ): Promise<DeleteQueuedReservedInstancesCommandOutput> | void {
    const command = new DeleteQueuedReservedInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified route from the specified route table.</p>
   */
  public deleteRoute(args: DeleteRouteCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRouteCommandOutput>;
  public deleteRoute(args: DeleteRouteCommandInput, cb: (err: any, data?: DeleteRouteCommandOutput) => void): void;
  public deleteRoute(
    args: DeleteRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRouteCommandOutput) => void
  ): void;
  public deleteRoute(
    args: DeleteRouteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRouteCommandOutput) => void),
    cb?: (err: any, data?: DeleteRouteCommandOutput) => void
  ): Promise<DeleteRouteCommandOutput> | void {
    const command = new DeleteRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified route table. You must disassociate the route table from any subnets before you can delete it. You can't delete the main route table.</p>
   */
  public deleteRouteTable(
    args: DeleteRouteTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRouteTableCommandOutput>;
  public deleteRouteTable(
    args: DeleteRouteTableCommandInput,
    cb: (err: any, data?: DeleteRouteTableCommandOutput) => void
  ): void;
  public deleteRouteTable(
    args: DeleteRouteTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRouteTableCommandOutput) => void
  ): void;
  public deleteRouteTable(
    args: DeleteRouteTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRouteTableCommandOutput) => void),
    cb?: (err: any, data?: DeleteRouteTableCommandOutput) => void
  ): Promise<DeleteRouteTableCommandOutput> | void {
    const command = new DeleteRouteTableCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a security group.</p>
   *          <p>If you attempt to delete a security group that is associated with an instance, or is
   * 			  referenced by another security group, the operation fails with
   * 				<code>InvalidGroup.InUse</code> in EC2-Classic or
   * 				<code>DependencyViolation</code> in EC2-VPC.</p>
   */
  public deleteSecurityGroup(
    args: DeleteSecurityGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSecurityGroupCommandOutput>;
  public deleteSecurityGroup(
    args: DeleteSecurityGroupCommandInput,
    cb: (err: any, data?: DeleteSecurityGroupCommandOutput) => void
  ): void;
  public deleteSecurityGroup(
    args: DeleteSecurityGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSecurityGroupCommandOutput) => void
  ): void;
  public deleteSecurityGroup(
    args: DeleteSecurityGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSecurityGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteSecurityGroupCommandOutput) => void
  ): Promise<DeleteSecurityGroupCommandOutput> | void {
    const command = new DeleteSecurityGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified snapshot.</p>
   *          <p>When you make periodic snapshots of a volume, the snapshots are incremental, and only the
   *       blocks on the device that have changed since your last snapshot are saved in the new snapshot.
   *       When you delete a snapshot, only the data not needed for any other snapshot is removed. So
   *       regardless of which prior snapshots have been deleted, all active snapshots will have access
   *       to all the information needed to restore the volume.</p>
   *          <p>You cannot delete a snapshot of the root device of an EBS volume used by a registered AMI.
   *       You must first de-register the AMI before you can delete the snapshot.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-deleting-snapshot.html">Deleting an Amazon EBS snapshot</a> in the
   *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSnapshotCommandOutput>;
  public deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    cb: (err: any, data?: DeleteSnapshotCommandOutput) => void
  ): void;
  public deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSnapshotCommandOutput) => void
  ): void;
  public deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSnapshotCommandOutput) => void),
    cb?: (err: any, data?: DeleteSnapshotCommandOutput) => void
  ): Promise<DeleteSnapshotCommandOutput> | void {
    const command = new DeleteSnapshotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the data feed for Spot Instances.</p>
   */
  public deleteSpotDatafeedSubscription(
    args: DeleteSpotDatafeedSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSpotDatafeedSubscriptionCommandOutput>;
  public deleteSpotDatafeedSubscription(
    args: DeleteSpotDatafeedSubscriptionCommandInput,
    cb: (err: any, data?: DeleteSpotDatafeedSubscriptionCommandOutput) => void
  ): void;
  public deleteSpotDatafeedSubscription(
    args: DeleteSpotDatafeedSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSpotDatafeedSubscriptionCommandOutput) => void
  ): void;
  public deleteSpotDatafeedSubscription(
    args: DeleteSpotDatafeedSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSpotDatafeedSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: DeleteSpotDatafeedSubscriptionCommandOutput) => void
  ): Promise<DeleteSpotDatafeedSubscriptionCommandOutput> | void {
    const command = new DeleteSpotDatafeedSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified subnet. You must terminate all running instances in the subnet before you can delete the subnet.</p>
   */
  public deleteSubnet(
    args: DeleteSubnetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSubnetCommandOutput>;
  public deleteSubnet(args: DeleteSubnetCommandInput, cb: (err: any, data?: DeleteSubnetCommandOutput) => void): void;
  public deleteSubnet(
    args: DeleteSubnetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSubnetCommandOutput) => void
  ): void;
  public deleteSubnet(
    args: DeleteSubnetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSubnetCommandOutput) => void),
    cb?: (err: any, data?: DeleteSubnetCommandOutput) => void
  ): Promise<DeleteSubnetCommandOutput> | void {
    const command = new DeleteSubnetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified set of tags from the specified set of resources.</p>
   *          <p>To list the current tags, use <a>DescribeTags</a>. For more information about tags, see
   *          <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging Your Resources</a>
   *          in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public deleteTags(args: DeleteTagsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTagsCommandOutput>;
  public deleteTags(args: DeleteTagsCommandInput, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
  public deleteTags(
    args: DeleteTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;
  public deleteTags(
    args: DeleteTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTagsCommandOutput) => void),
    cb?: (err: any, data?: DeleteTagsCommandOutput) => void
  ): Promise<DeleteTagsCommandOutput> | void {
    const command = new DeleteTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified Traffic Mirror filter.</p>
   *          <p>You cannot delete a Traffic Mirror filter that is in use by a Traffic Mirror session.</p>
   */
  public deleteTrafficMirrorFilter(
    args: DeleteTrafficMirrorFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrafficMirrorFilterCommandOutput>;
  public deleteTrafficMirrorFilter(
    args: DeleteTrafficMirrorFilterCommandInput,
    cb: (err: any, data?: DeleteTrafficMirrorFilterCommandOutput) => void
  ): void;
  public deleteTrafficMirrorFilter(
    args: DeleteTrafficMirrorFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrafficMirrorFilterCommandOutput) => void
  ): void;
  public deleteTrafficMirrorFilter(
    args: DeleteTrafficMirrorFilterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTrafficMirrorFilterCommandOutput) => void),
    cb?: (err: any, data?: DeleteTrafficMirrorFilterCommandOutput) => void
  ): Promise<DeleteTrafficMirrorFilterCommandOutput> | void {
    const command = new DeleteTrafficMirrorFilterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified Traffic Mirror rule.</p>
   */
  public deleteTrafficMirrorFilterRule(
    args: DeleteTrafficMirrorFilterRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrafficMirrorFilterRuleCommandOutput>;
  public deleteTrafficMirrorFilterRule(
    args: DeleteTrafficMirrorFilterRuleCommandInput,
    cb: (err: any, data?: DeleteTrafficMirrorFilterRuleCommandOutput) => void
  ): void;
  public deleteTrafficMirrorFilterRule(
    args: DeleteTrafficMirrorFilterRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrafficMirrorFilterRuleCommandOutput) => void
  ): void;
  public deleteTrafficMirrorFilterRule(
    args: DeleteTrafficMirrorFilterRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTrafficMirrorFilterRuleCommandOutput) => void),
    cb?: (err: any, data?: DeleteTrafficMirrorFilterRuleCommandOutput) => void
  ): Promise<DeleteTrafficMirrorFilterRuleCommandOutput> | void {
    const command = new DeleteTrafficMirrorFilterRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified Traffic Mirror session.</p>
   */
  public deleteTrafficMirrorSession(
    args: DeleteTrafficMirrorSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrafficMirrorSessionCommandOutput>;
  public deleteTrafficMirrorSession(
    args: DeleteTrafficMirrorSessionCommandInput,
    cb: (err: any, data?: DeleteTrafficMirrorSessionCommandOutput) => void
  ): void;
  public deleteTrafficMirrorSession(
    args: DeleteTrafficMirrorSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrafficMirrorSessionCommandOutput) => void
  ): void;
  public deleteTrafficMirrorSession(
    args: DeleteTrafficMirrorSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTrafficMirrorSessionCommandOutput) => void),
    cb?: (err: any, data?: DeleteTrafficMirrorSessionCommandOutput) => void
  ): Promise<DeleteTrafficMirrorSessionCommandOutput> | void {
    const command = new DeleteTrafficMirrorSessionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified Traffic Mirror target.</p>
   *          <p>You cannot delete a Traffic Mirror target that is in use by a Traffic Mirror session.</p>
   */
  public deleteTrafficMirrorTarget(
    args: DeleteTrafficMirrorTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrafficMirrorTargetCommandOutput>;
  public deleteTrafficMirrorTarget(
    args: DeleteTrafficMirrorTargetCommandInput,
    cb: (err: any, data?: DeleteTrafficMirrorTargetCommandOutput) => void
  ): void;
  public deleteTrafficMirrorTarget(
    args: DeleteTrafficMirrorTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrafficMirrorTargetCommandOutput) => void
  ): void;
  public deleteTrafficMirrorTarget(
    args: DeleteTrafficMirrorTargetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTrafficMirrorTargetCommandOutput) => void),
    cb?: (err: any, data?: DeleteTrafficMirrorTargetCommandOutput) => void
  ): Promise<DeleteTrafficMirrorTargetCommandOutput> | void {
    const command = new DeleteTrafficMirrorTargetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified transit gateway.</p>
   */
  public deleteTransitGateway(
    args: DeleteTransitGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTransitGatewayCommandOutput>;
  public deleteTransitGateway(
    args: DeleteTransitGatewayCommandInput,
    cb: (err: any, data?: DeleteTransitGatewayCommandOutput) => void
  ): void;
  public deleteTransitGateway(
    args: DeleteTransitGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTransitGatewayCommandOutput) => void
  ): void;
  public deleteTransitGateway(
    args: DeleteTransitGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTransitGatewayCommandOutput) => void),
    cb?: (err: any, data?: DeleteTransitGatewayCommandOutput) => void
  ): Promise<DeleteTransitGatewayCommandOutput> | void {
    const command = new DeleteTransitGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified Connect attachment. You must first delete any Connect peers for
   *             the attachment.</p>
   */
  public deleteTransitGatewayConnect(
    args: DeleteTransitGatewayConnectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTransitGatewayConnectCommandOutput>;
  public deleteTransitGatewayConnect(
    args: DeleteTransitGatewayConnectCommandInput,
    cb: (err: any, data?: DeleteTransitGatewayConnectCommandOutput) => void
  ): void;
  public deleteTransitGatewayConnect(
    args: DeleteTransitGatewayConnectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTransitGatewayConnectCommandOutput) => void
  ): void;
  public deleteTransitGatewayConnect(
    args: DeleteTransitGatewayConnectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTransitGatewayConnectCommandOutput) => void),
    cb?: (err: any, data?: DeleteTransitGatewayConnectCommandOutput) => void
  ): Promise<DeleteTransitGatewayConnectCommandOutput> | void {
    const command = new DeleteTransitGatewayConnectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified Connect peer.</p>
   */
  public deleteTransitGatewayConnectPeer(
    args: DeleteTransitGatewayConnectPeerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTransitGatewayConnectPeerCommandOutput>;
  public deleteTransitGatewayConnectPeer(
    args: DeleteTransitGatewayConnectPeerCommandInput,
    cb: (err: any, data?: DeleteTransitGatewayConnectPeerCommandOutput) => void
  ): void;
  public deleteTransitGatewayConnectPeer(
    args: DeleteTransitGatewayConnectPeerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTransitGatewayConnectPeerCommandOutput) => void
  ): void;
  public deleteTransitGatewayConnectPeer(
    args: DeleteTransitGatewayConnectPeerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTransitGatewayConnectPeerCommandOutput) => void),
    cb?: (err: any, data?: DeleteTransitGatewayConnectPeerCommandOutput) => void
  ): Promise<DeleteTransitGatewayConnectPeerCommandOutput> | void {
    const command = new DeleteTransitGatewayConnectPeerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified transit gateway multicast domain.</p>
   */
  public deleteTransitGatewayMulticastDomain(
    args: DeleteTransitGatewayMulticastDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTransitGatewayMulticastDomainCommandOutput>;
  public deleteTransitGatewayMulticastDomain(
    args: DeleteTransitGatewayMulticastDomainCommandInput,
    cb: (err: any, data?: DeleteTransitGatewayMulticastDomainCommandOutput) => void
  ): void;
  public deleteTransitGatewayMulticastDomain(
    args: DeleteTransitGatewayMulticastDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTransitGatewayMulticastDomainCommandOutput) => void
  ): void;
  public deleteTransitGatewayMulticastDomain(
    args: DeleteTransitGatewayMulticastDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTransitGatewayMulticastDomainCommandOutput) => void),
    cb?: (err: any, data?: DeleteTransitGatewayMulticastDomainCommandOutput) => void
  ): Promise<DeleteTransitGatewayMulticastDomainCommandOutput> | void {
    const command = new DeleteTransitGatewayMulticastDomainCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a transit gateway peering attachment.</p>
   */
  public deleteTransitGatewayPeeringAttachment(
    args: DeleteTransitGatewayPeeringAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTransitGatewayPeeringAttachmentCommandOutput>;
  public deleteTransitGatewayPeeringAttachment(
    args: DeleteTransitGatewayPeeringAttachmentCommandInput,
    cb: (err: any, data?: DeleteTransitGatewayPeeringAttachmentCommandOutput) => void
  ): void;
  public deleteTransitGatewayPeeringAttachment(
    args: DeleteTransitGatewayPeeringAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTransitGatewayPeeringAttachmentCommandOutput) => void
  ): void;
  public deleteTransitGatewayPeeringAttachment(
    args: DeleteTransitGatewayPeeringAttachmentCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteTransitGatewayPeeringAttachmentCommandOutput) => void),
    cb?: (err: any, data?: DeleteTransitGatewayPeeringAttachmentCommandOutput) => void
  ): Promise<DeleteTransitGatewayPeeringAttachmentCommandOutput> | void {
    const command = new DeleteTransitGatewayPeeringAttachmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a reference (route) to a prefix list in a specified transit gateway route table.</p>
   */
  public deleteTransitGatewayPrefixListReference(
    args: DeleteTransitGatewayPrefixListReferenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTransitGatewayPrefixListReferenceCommandOutput>;
  public deleteTransitGatewayPrefixListReference(
    args: DeleteTransitGatewayPrefixListReferenceCommandInput,
    cb: (err: any, data?: DeleteTransitGatewayPrefixListReferenceCommandOutput) => void
  ): void;
  public deleteTransitGatewayPrefixListReference(
    args: DeleteTransitGatewayPrefixListReferenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTransitGatewayPrefixListReferenceCommandOutput) => void
  ): void;
  public deleteTransitGatewayPrefixListReference(
    args: DeleteTransitGatewayPrefixListReferenceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteTransitGatewayPrefixListReferenceCommandOutput) => void),
    cb?: (err: any, data?: DeleteTransitGatewayPrefixListReferenceCommandOutput) => void
  ): Promise<DeleteTransitGatewayPrefixListReferenceCommandOutput> | void {
    const command = new DeleteTransitGatewayPrefixListReferenceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified route from the specified transit gateway route table.</p>
   */
  public deleteTransitGatewayRoute(
    args: DeleteTransitGatewayRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTransitGatewayRouteCommandOutput>;
  public deleteTransitGatewayRoute(
    args: DeleteTransitGatewayRouteCommandInput,
    cb: (err: any, data?: DeleteTransitGatewayRouteCommandOutput) => void
  ): void;
  public deleteTransitGatewayRoute(
    args: DeleteTransitGatewayRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTransitGatewayRouteCommandOutput) => void
  ): void;
  public deleteTransitGatewayRoute(
    args: DeleteTransitGatewayRouteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTransitGatewayRouteCommandOutput) => void),
    cb?: (err: any, data?: DeleteTransitGatewayRouteCommandOutput) => void
  ): Promise<DeleteTransitGatewayRouteCommandOutput> | void {
    const command = new DeleteTransitGatewayRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified transit gateway route table. You must disassociate the route table from any
   *           transit gateway route tables before you can delete it.</p>
   */
  public deleteTransitGatewayRouteTable(
    args: DeleteTransitGatewayRouteTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTransitGatewayRouteTableCommandOutput>;
  public deleteTransitGatewayRouteTable(
    args: DeleteTransitGatewayRouteTableCommandInput,
    cb: (err: any, data?: DeleteTransitGatewayRouteTableCommandOutput) => void
  ): void;
  public deleteTransitGatewayRouteTable(
    args: DeleteTransitGatewayRouteTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTransitGatewayRouteTableCommandOutput) => void
  ): void;
  public deleteTransitGatewayRouteTable(
    args: DeleteTransitGatewayRouteTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTransitGatewayRouteTableCommandOutput) => void),
    cb?: (err: any, data?: DeleteTransitGatewayRouteTableCommandOutput) => void
  ): Promise<DeleteTransitGatewayRouteTableCommandOutput> | void {
    const command = new DeleteTransitGatewayRouteTableCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified VPC attachment.</p>
   */
  public deleteTransitGatewayVpcAttachment(
    args: DeleteTransitGatewayVpcAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTransitGatewayVpcAttachmentCommandOutput>;
  public deleteTransitGatewayVpcAttachment(
    args: DeleteTransitGatewayVpcAttachmentCommandInput,
    cb: (err: any, data?: DeleteTransitGatewayVpcAttachmentCommandOutput) => void
  ): void;
  public deleteTransitGatewayVpcAttachment(
    args: DeleteTransitGatewayVpcAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTransitGatewayVpcAttachmentCommandOutput) => void
  ): void;
  public deleteTransitGatewayVpcAttachment(
    args: DeleteTransitGatewayVpcAttachmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTransitGatewayVpcAttachmentCommandOutput) => void),
    cb?: (err: any, data?: DeleteTransitGatewayVpcAttachmentCommandOutput) => void
  ): Promise<DeleteTransitGatewayVpcAttachmentCommandOutput> | void {
    const command = new DeleteTransitGatewayVpcAttachmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified EBS volume. The volume must be in the <code>available</code> state
   *       (not attached to an instance).</p>
   *          <p>The volume can remain in the <code>deleting</code> state for several minutes.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-deleting-volume.html">Deleting an Amazon EBS volume</a> in the
   *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public deleteVolume(
    args: DeleteVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVolumeCommandOutput>;
  public deleteVolume(args: DeleteVolumeCommandInput, cb: (err: any, data?: DeleteVolumeCommandOutput) => void): void;
  public deleteVolume(
    args: DeleteVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVolumeCommandOutput) => void
  ): void;
  public deleteVolume(
    args: DeleteVolumeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVolumeCommandOutput) => void),
    cb?: (err: any, data?: DeleteVolumeCommandOutput) => void
  ): Promise<DeleteVolumeCommandOutput> | void {
    const command = new DeleteVolumeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified VPC. You must detach or delete all gateways and resources that are associated with the VPC before you can delete it. For example, you must terminate all instances running in the VPC, delete all security groups associated with the VPC (except the default one), delete all route tables associated with the VPC (except the default one), and so on.</p>
   */
  public deleteVpc(args: DeleteVpcCommandInput, options?: __HttpHandlerOptions): Promise<DeleteVpcCommandOutput>;
  public deleteVpc(args: DeleteVpcCommandInput, cb: (err: any, data?: DeleteVpcCommandOutput) => void): void;
  public deleteVpc(
    args: DeleteVpcCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcCommandOutput) => void
  ): void;
  public deleteVpc(
    args: DeleteVpcCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVpcCommandOutput) => void),
    cb?: (err: any, data?: DeleteVpcCommandOutput) => void
  ): Promise<DeleteVpcCommandOutput> | void {
    const command = new DeleteVpcCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes one or more VPC endpoint connection notifications.</p>
   */
  public deleteVpcEndpointConnectionNotifications(
    args: DeleteVpcEndpointConnectionNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpcEndpointConnectionNotificationsCommandOutput>;
  public deleteVpcEndpointConnectionNotifications(
    args: DeleteVpcEndpointConnectionNotificationsCommandInput,
    cb: (err: any, data?: DeleteVpcEndpointConnectionNotificationsCommandOutput) => void
  ): void;
  public deleteVpcEndpointConnectionNotifications(
    args: DeleteVpcEndpointConnectionNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcEndpointConnectionNotificationsCommandOutput) => void
  ): void;
  public deleteVpcEndpointConnectionNotifications(
    args: DeleteVpcEndpointConnectionNotificationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteVpcEndpointConnectionNotificationsCommandOutput) => void),
    cb?: (err: any, data?: DeleteVpcEndpointConnectionNotificationsCommandOutput) => void
  ): Promise<DeleteVpcEndpointConnectionNotificationsCommandOutput> | void {
    const command = new DeleteVpcEndpointConnectionNotificationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes one or more specified VPC endpoints. Deleting a gateway endpoint also deletes
   *             the endpoint routes in the route tables that were associated with the endpoint. Deleting
   *             an interface endpoint or a Gateway Load Balancer endpoint deletes the endpoint network interfaces. Gateway Load Balancer endpoints can only be deleted if the routes that are associated with the endpoint are deleted.</p>
   */
  public deleteVpcEndpoints(
    args: DeleteVpcEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpcEndpointsCommandOutput>;
  public deleteVpcEndpoints(
    args: DeleteVpcEndpointsCommandInput,
    cb: (err: any, data?: DeleteVpcEndpointsCommandOutput) => void
  ): void;
  public deleteVpcEndpoints(
    args: DeleteVpcEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcEndpointsCommandOutput) => void
  ): void;
  public deleteVpcEndpoints(
    args: DeleteVpcEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVpcEndpointsCommandOutput) => void),
    cb?: (err: any, data?: DeleteVpcEndpointsCommandOutput) => void
  ): Promise<DeleteVpcEndpointsCommandOutput> | void {
    const command = new DeleteVpcEndpointsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes one or more VPC endpoint service configurations in your account. Before you
   *             delete the endpoint service configuration, you must reject any <code>Available</code> or
   *                 <code>PendingAcceptance</code> interface endpoint connections that are attached to
   *             the service.</p>
   */
  public deleteVpcEndpointServiceConfigurations(
    args: DeleteVpcEndpointServiceConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpcEndpointServiceConfigurationsCommandOutput>;
  public deleteVpcEndpointServiceConfigurations(
    args: DeleteVpcEndpointServiceConfigurationsCommandInput,
    cb: (err: any, data?: DeleteVpcEndpointServiceConfigurationsCommandOutput) => void
  ): void;
  public deleteVpcEndpointServiceConfigurations(
    args: DeleteVpcEndpointServiceConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcEndpointServiceConfigurationsCommandOutput) => void
  ): void;
  public deleteVpcEndpointServiceConfigurations(
    args: DeleteVpcEndpointServiceConfigurationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteVpcEndpointServiceConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: DeleteVpcEndpointServiceConfigurationsCommandOutput) => void
  ): Promise<DeleteVpcEndpointServiceConfigurationsCommandOutput> | void {
    const command = new DeleteVpcEndpointServiceConfigurationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a VPC peering connection. Either the owner of the requester VPC or the owner
   *             of the accepter VPC can delete the VPC peering connection if it's in the
   *                 <code>active</code> state. The owner of the requester VPC can delete a VPC peering
   *             connection in the <code>pending-acceptance</code> state. You cannot delete a VPC peering
   *             connection that's in the <code>failed</code> state.</p>
   */
  public deleteVpcPeeringConnection(
    args: DeleteVpcPeeringConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpcPeeringConnectionCommandOutput>;
  public deleteVpcPeeringConnection(
    args: DeleteVpcPeeringConnectionCommandInput,
    cb: (err: any, data?: DeleteVpcPeeringConnectionCommandOutput) => void
  ): void;
  public deleteVpcPeeringConnection(
    args: DeleteVpcPeeringConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcPeeringConnectionCommandOutput) => void
  ): void;
  public deleteVpcPeeringConnection(
    args: DeleteVpcPeeringConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVpcPeeringConnectionCommandOutput) => void),
    cb?: (err: any, data?: DeleteVpcPeeringConnectionCommandOutput) => void
  ): Promise<DeleteVpcPeeringConnectionCommandOutput> | void {
    const command = new DeleteVpcPeeringConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified VPN connection.</p>
   *         <p>If you're deleting the VPC and its associated components, we recommend that you detach the virtual private gateway from the VPC and delete the VPC before deleting the VPN connection. If you believe that the tunnel credentials for your VPN connection have been compromised, you can delete the VPN connection and create a new one that has new keys, without needing to delete the VPC or virtual private gateway. If you create a new VPN connection, you must reconfigure the customer gateway device using the new configuration information returned with the new VPN connection ID.</p>
   *         <p>For certificate-based authentication, delete all AWS Certificate Manager (ACM) private certificates used for the AWS-side tunnel endpoints for the VPN connection before deleting the VPN connection.</p>
   */
  public deleteVpnConnection(
    args: DeleteVpnConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpnConnectionCommandOutput>;
  public deleteVpnConnection(
    args: DeleteVpnConnectionCommandInput,
    cb: (err: any, data?: DeleteVpnConnectionCommandOutput) => void
  ): void;
  public deleteVpnConnection(
    args: DeleteVpnConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpnConnectionCommandOutput) => void
  ): void;
  public deleteVpnConnection(
    args: DeleteVpnConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVpnConnectionCommandOutput) => void),
    cb?: (err: any, data?: DeleteVpnConnectionCommandOutput) => void
  ): Promise<DeleteVpnConnectionCommandOutput> | void {
    const command = new DeleteVpnConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified static route associated with a VPN connection between an existing virtual private gateway and a VPN customer gateway. The static route allows traffic to be routed from the virtual private gateway to the VPN customer gateway.</p>
   */
  public deleteVpnConnectionRoute(
    args: DeleteVpnConnectionRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpnConnectionRouteCommandOutput>;
  public deleteVpnConnectionRoute(
    args: DeleteVpnConnectionRouteCommandInput,
    cb: (err: any, data?: DeleteVpnConnectionRouteCommandOutput) => void
  ): void;
  public deleteVpnConnectionRoute(
    args: DeleteVpnConnectionRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpnConnectionRouteCommandOutput) => void
  ): void;
  public deleteVpnConnectionRoute(
    args: DeleteVpnConnectionRouteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVpnConnectionRouteCommandOutput) => void),
    cb?: (err: any, data?: DeleteVpnConnectionRouteCommandOutput) => void
  ): Promise<DeleteVpnConnectionRouteCommandOutput> | void {
    const command = new DeleteVpnConnectionRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified virtual private gateway. You must first detach the virtual private gateway from the VPC. Note that you don't need to delete the virtual private gateway if you plan to delete and recreate the VPN connection between your VPC and your network.</p>
   */
  public deleteVpnGateway(
    args: DeleteVpnGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpnGatewayCommandOutput>;
  public deleteVpnGateway(
    args: DeleteVpnGatewayCommandInput,
    cb: (err: any, data?: DeleteVpnGatewayCommandOutput) => void
  ): void;
  public deleteVpnGateway(
    args: DeleteVpnGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpnGatewayCommandOutput) => void
  ): void;
  public deleteVpnGateway(
    args: DeleteVpnGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVpnGatewayCommandOutput) => void),
    cb?: (err: any, data?: DeleteVpnGatewayCommandOutput) => void
  ): Promise<DeleteVpnGatewayCommandOutput> | void {
    const command = new DeleteVpnGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Releases the specified address range that you provisioned for use with your AWS resources
   *          through bring your own IP addresses (BYOIP) and deletes the corresponding address pool.</p>
   *          <p>Before you can release an address range, you must stop advertising it using <a>WithdrawByoipCidr</a> and you must not have any IP addresses allocated from its
   *          address range.</p>
   */
  public deprovisionByoipCidr(
    args: DeprovisionByoipCidrCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeprovisionByoipCidrCommandOutput>;
  public deprovisionByoipCidr(
    args: DeprovisionByoipCidrCommandInput,
    cb: (err: any, data?: DeprovisionByoipCidrCommandOutput) => void
  ): void;
  public deprovisionByoipCidr(
    args: DeprovisionByoipCidrCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeprovisionByoipCidrCommandOutput) => void
  ): void;
  public deprovisionByoipCidr(
    args: DeprovisionByoipCidrCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeprovisionByoipCidrCommandOutput) => void),
    cb?: (err: any, data?: DeprovisionByoipCidrCommandOutput) => void
  ): Promise<DeprovisionByoipCidrCommandOutput> | void {
    const command = new DeprovisionByoipCidrCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deregisters the specified AMI. After you deregister an AMI, it can't be used to launch
   * 			new instances; however, it doesn't affect any instances that you've already launched
   * 			from the AMI. You'll continue to incur usage costs for those instances until you
   * 			terminate them.</p>
   *          <p>When you deregister an Amazon EBS-backed AMI, it doesn't affect the snapshot that was
   * 			created for the root volume of the instance during the AMI creation process. When you
   * 			deregister an instance store-backed AMI, it doesn't affect the files that you uploaded
   * 			to Amazon S3 when you created the AMI.</p>
   */
  public deregisterImage(
    args: DeregisterImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterImageCommandOutput>;
  public deregisterImage(
    args: DeregisterImageCommandInput,
    cb: (err: any, data?: DeregisterImageCommandOutput) => void
  ): void;
  public deregisterImage(
    args: DeregisterImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterImageCommandOutput) => void
  ): void;
  public deregisterImage(
    args: DeregisterImageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterImageCommandOutput) => void),
    cb?: (err: any, data?: DeregisterImageCommandOutput) => void
  ): Promise<DeregisterImageCommandOutput> | void {
    const command = new DeregisterImageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deregisters tag keys to prevent tags that have the specified tag keys from being included
   * 			in scheduled event notifications for resources in the Region.</p>
   */
  public deregisterInstanceEventNotificationAttributes(
    args: DeregisterInstanceEventNotificationAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterInstanceEventNotificationAttributesCommandOutput>;
  public deregisterInstanceEventNotificationAttributes(
    args: DeregisterInstanceEventNotificationAttributesCommandInput,
    cb: (err: any, data?: DeregisterInstanceEventNotificationAttributesCommandOutput) => void
  ): void;
  public deregisterInstanceEventNotificationAttributes(
    args: DeregisterInstanceEventNotificationAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterInstanceEventNotificationAttributesCommandOutput) => void
  ): void;
  public deregisterInstanceEventNotificationAttributes(
    args: DeregisterInstanceEventNotificationAttributesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeregisterInstanceEventNotificationAttributesCommandOutput) => void),
    cb?: (err: any, data?: DeregisterInstanceEventNotificationAttributesCommandOutput) => void
  ): Promise<DeregisterInstanceEventNotificationAttributesCommandOutput> | void {
    const command = new DeregisterInstanceEventNotificationAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deregisters the specified members (network interfaces) from the  transit gateway multicast group.</p>
   */
  public deregisterTransitGatewayMulticastGroupMembers(
    args: DeregisterTransitGatewayMulticastGroupMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterTransitGatewayMulticastGroupMembersCommandOutput>;
  public deregisterTransitGatewayMulticastGroupMembers(
    args: DeregisterTransitGatewayMulticastGroupMembersCommandInput,
    cb: (err: any, data?: DeregisterTransitGatewayMulticastGroupMembersCommandOutput) => void
  ): void;
  public deregisterTransitGatewayMulticastGroupMembers(
    args: DeregisterTransitGatewayMulticastGroupMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterTransitGatewayMulticastGroupMembersCommandOutput) => void
  ): void;
  public deregisterTransitGatewayMulticastGroupMembers(
    args: DeregisterTransitGatewayMulticastGroupMembersCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeregisterTransitGatewayMulticastGroupMembersCommandOutput) => void),
    cb?: (err: any, data?: DeregisterTransitGatewayMulticastGroupMembersCommandOutput) => void
  ): Promise<DeregisterTransitGatewayMulticastGroupMembersCommandOutput> | void {
    const command = new DeregisterTransitGatewayMulticastGroupMembersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deregisters the specified sources (network interfaces) from the  transit gateway multicast group.</p>
   */
  public deregisterTransitGatewayMulticastGroupSources(
    args: DeregisterTransitGatewayMulticastGroupSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterTransitGatewayMulticastGroupSourcesCommandOutput>;
  public deregisterTransitGatewayMulticastGroupSources(
    args: DeregisterTransitGatewayMulticastGroupSourcesCommandInput,
    cb: (err: any, data?: DeregisterTransitGatewayMulticastGroupSourcesCommandOutput) => void
  ): void;
  public deregisterTransitGatewayMulticastGroupSources(
    args: DeregisterTransitGatewayMulticastGroupSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterTransitGatewayMulticastGroupSourcesCommandOutput) => void
  ): void;
  public deregisterTransitGatewayMulticastGroupSources(
    args: DeregisterTransitGatewayMulticastGroupSourcesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeregisterTransitGatewayMulticastGroupSourcesCommandOutput) => void),
    cb?: (err: any, data?: DeregisterTransitGatewayMulticastGroupSourcesCommandOutput) => void
  ): Promise<DeregisterTransitGatewayMulticastGroupSourcesCommandOutput> | void {
    const command = new DeregisterTransitGatewayMulticastGroupSourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes attributes of your AWS account. The following are the supported account attributes:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>supported-platforms</code>: Indicates whether your account can launch instances
   *           into EC2-Classic and EC2-VPC, or only into EC2-VPC.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>default-vpc</code>: The ID of the default VPC for your account, or
   *             <code>none</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>max-instances</code>: This attribute is no longer supported. The returned
   *                     value does not reflect your actual vCPU limit for running On-Demand Instances.
   *                     For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-on-demand-instances.html#ec2-on-demand-instances-limits">On-Demand Instance Limits</a> in the
   *                         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-max-security-groups-per-interface</code>: The maximum number of security groups
   *           that you can assign to a network interface.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>max-elastic-ips</code>: The maximum number of Elastic IP addresses that you can
   *           allocate for use with EC2-Classic. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vpc-max-elastic-ips</code>: The maximum number of Elastic IP addresses that you can
   *           allocate for use with EC2-VPC.</p>
   *             </li>
   *          </ul>
   */
  public describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountAttributesCommandOutput>;
  public describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;
  public describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;
  public describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAccountAttributesCommandOutput) => void),
    cb?: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): Promise<DescribeAccountAttributesCommandOutput> | void {
    const command = new DescribeAccountAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified Elastic IP addresses or all of your Elastic IP addresses.</p>
   *          <p>An Elastic IP address is for use in either the EC2-Classic platform or in a VPC.
   * 				For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public describeAddresses(
    args: DescribeAddressesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAddressesCommandOutput>;
  public describeAddresses(
    args: DescribeAddressesCommandInput,
    cb: (err: any, data?: DescribeAddressesCommandOutput) => void
  ): void;
  public describeAddresses(
    args: DescribeAddressesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAddressesCommandOutput) => void
  ): void;
  public describeAddresses(
    args: DescribeAddressesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAddressesCommandOutput) => void),
    cb?: (err: any, data?: DescribeAddressesCommandOutput) => void
  ): Promise<DescribeAddressesCommandOutput> | void {
    const command = new DescribeAddressesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public describeAddressesAttribute(
    args: DescribeAddressesAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAddressesAttributeCommandOutput>;
  public describeAddressesAttribute(
    args: DescribeAddressesAttributeCommandInput,
    cb: (err: any, data?: DescribeAddressesAttributeCommandOutput) => void
  ): void;
  public describeAddressesAttribute(
    args: DescribeAddressesAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAddressesAttributeCommandOutput) => void
  ): void;
  public describeAddressesAttribute(
    args: DescribeAddressesAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAddressesAttributeCommandOutput) => void),
    cb?: (err: any, data?: DescribeAddressesAttributeCommandOutput) => void
  ): Promise<DescribeAddressesAttributeCommandOutput> | void {
    const command = new DescribeAddressesAttributeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the longer ID format settings for all resource types in a specific
   *          Region. This request is useful for performing a quick audit to determine whether a
   *          specific Region is fully opted in for longer IDs (17-character IDs).</p>
   *
   *          <p>This request only returns information about resource types that support longer IDs.</p>
   *          <p>The following resource types support longer IDs: <code>bundle</code> |
   *         <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
   *         <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
   *         <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
   *         <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
   *         <code>network-acl</code> | <code>network-acl-association</code> |
   *         <code>network-interface</code> | <code>network-interface-attachment</code> |
   *         <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
   *         <code>route-table-association</code> | <code>security-group</code> |
   *         <code>snapshot</code> | <code>subnet</code> |
   *         <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code> |
   *         <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
   *         <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>.</p>
   */
  public describeAggregateIdFormat(
    args: DescribeAggregateIdFormatCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAggregateIdFormatCommandOutput>;
  public describeAggregateIdFormat(
    args: DescribeAggregateIdFormatCommandInput,
    cb: (err: any, data?: DescribeAggregateIdFormatCommandOutput) => void
  ): void;
  public describeAggregateIdFormat(
    args: DescribeAggregateIdFormatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAggregateIdFormatCommandOutput) => void
  ): void;
  public describeAggregateIdFormat(
    args: DescribeAggregateIdFormatCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAggregateIdFormatCommandOutput) => void),
    cb?: (err: any, data?: DescribeAggregateIdFormatCommandOutput) => void
  ): Promise<DescribeAggregateIdFormatCommandOutput> | void {
    const command = new DescribeAggregateIdFormatCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the Availability Zones, Local Zones, and Wavelength Zones that are available to
   *       you. If there is an event impacting a zone, you can use this request to view the state and any
   *       provided messages for that zone.</p>
   *          <p>For more information about Availability Zones, Local Zones, and Wavelength Zones, see
   *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html">Regions, Zones and
   *         Outposts</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public describeAvailabilityZones(
    args: DescribeAvailabilityZonesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAvailabilityZonesCommandOutput>;
  public describeAvailabilityZones(
    args: DescribeAvailabilityZonesCommandInput,
    cb: (err: any, data?: DescribeAvailabilityZonesCommandOutput) => void
  ): void;
  public describeAvailabilityZones(
    args: DescribeAvailabilityZonesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAvailabilityZonesCommandOutput) => void
  ): void;
  public describeAvailabilityZones(
    args: DescribeAvailabilityZonesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAvailabilityZonesCommandOutput) => void),
    cb?: (err: any, data?: DescribeAvailabilityZonesCommandOutput) => void
  ): Promise<DescribeAvailabilityZonesCommandOutput> | void {
    const command = new DescribeAvailabilityZonesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified bundle tasks or all of your bundle tasks.</p>
   *          <note>
   *             <p>Completed bundle tasks are listed for only a limited time. If your bundle task is no longer in the list, you can still register an AMI from it. Just use <code>RegisterImage</code> with the Amazon S3 bucket name and image manifest name you provided to the bundle task.</p>
   *          </note>
   */
  public describeBundleTasks(
    args: DescribeBundleTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBundleTasksCommandOutput>;
  public describeBundleTasks(
    args: DescribeBundleTasksCommandInput,
    cb: (err: any, data?: DescribeBundleTasksCommandOutput) => void
  ): void;
  public describeBundleTasks(
    args: DescribeBundleTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBundleTasksCommandOutput) => void
  ): void;
  public describeBundleTasks(
    args: DescribeBundleTasksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBundleTasksCommandOutput) => void),
    cb?: (err: any, data?: DescribeBundleTasksCommandOutput) => void
  ): Promise<DescribeBundleTasksCommandOutput> | void {
    const command = new DescribeBundleTasksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the IP address ranges that were specified in calls to <a>ProvisionByoipCidr</a>.</p>
   *          <p>To describe the address pools that were created when you provisioned the address
   *           ranges, use <a>DescribePublicIpv4Pools</a> or <a>DescribeIpv6Pools</a>.</p>
   */
  public describeByoipCidrs(
    args: DescribeByoipCidrsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeByoipCidrsCommandOutput>;
  public describeByoipCidrs(
    args: DescribeByoipCidrsCommandInput,
    cb: (err: any, data?: DescribeByoipCidrsCommandOutput) => void
  ): void;
  public describeByoipCidrs(
    args: DescribeByoipCidrsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeByoipCidrsCommandOutput) => void
  ): void;
  public describeByoipCidrs(
    args: DescribeByoipCidrsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeByoipCidrsCommandOutput) => void),
    cb?: (err: any, data?: DescribeByoipCidrsCommandOutput) => void
  ): Promise<DescribeByoipCidrsCommandOutput> | void {
    const command = new DescribeByoipCidrsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more of your Capacity Reservations. The results describe only the Capacity Reservations in the AWS
   * 			Region that you're currently using.</p>
   */
  public describeCapacityReservations(
    args: DescribeCapacityReservationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCapacityReservationsCommandOutput>;
  public describeCapacityReservations(
    args: DescribeCapacityReservationsCommandInput,
    cb: (err: any, data?: DescribeCapacityReservationsCommandOutput) => void
  ): void;
  public describeCapacityReservations(
    args: DescribeCapacityReservationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCapacityReservationsCommandOutput) => void
  ): void;
  public describeCapacityReservations(
    args: DescribeCapacityReservationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCapacityReservationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeCapacityReservationsCommandOutput) => void
  ): Promise<DescribeCapacityReservationsCommandOutput> | void {
    const command = new DescribeCapacityReservationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more of your carrier gateways.</p>
   */
  public describeCarrierGateways(
    args: DescribeCarrierGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCarrierGatewaysCommandOutput>;
  public describeCarrierGateways(
    args: DescribeCarrierGatewaysCommandInput,
    cb: (err: any, data?: DescribeCarrierGatewaysCommandOutput) => void
  ): void;
  public describeCarrierGateways(
    args: DescribeCarrierGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCarrierGatewaysCommandOutput) => void
  ): void;
  public describeCarrierGateways(
    args: DescribeCarrierGatewaysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCarrierGatewaysCommandOutput) => void),
    cb?: (err: any, data?: DescribeCarrierGatewaysCommandOutput) => void
  ): Promise<DescribeCarrierGatewaysCommandOutput> | void {
    const command = new DescribeCarrierGatewaysCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more of your linked EC2-Classic instances. This request only returns
   * 			information about EC2-Classic instances linked to a VPC through ClassicLink. You cannot
   * 			use this request to return information about other instances.</p>
   */
  public describeClassicLinkInstances(
    args: DescribeClassicLinkInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClassicLinkInstancesCommandOutput>;
  public describeClassicLinkInstances(
    args: DescribeClassicLinkInstancesCommandInput,
    cb: (err: any, data?: DescribeClassicLinkInstancesCommandOutput) => void
  ): void;
  public describeClassicLinkInstances(
    args: DescribeClassicLinkInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClassicLinkInstancesCommandOutput) => void
  ): void;
  public describeClassicLinkInstances(
    args: DescribeClassicLinkInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeClassicLinkInstancesCommandOutput) => void),
    cb?: (err: any, data?: DescribeClassicLinkInstancesCommandOutput) => void
  ): Promise<DescribeClassicLinkInstancesCommandOutput> | void {
    const command = new DescribeClassicLinkInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the authorization rules for a specified Client VPN endpoint.</p>
   */
  public describeClientVpnAuthorizationRules(
    args: DescribeClientVpnAuthorizationRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClientVpnAuthorizationRulesCommandOutput>;
  public describeClientVpnAuthorizationRules(
    args: DescribeClientVpnAuthorizationRulesCommandInput,
    cb: (err: any, data?: DescribeClientVpnAuthorizationRulesCommandOutput) => void
  ): void;
  public describeClientVpnAuthorizationRules(
    args: DescribeClientVpnAuthorizationRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClientVpnAuthorizationRulesCommandOutput) => void
  ): void;
  public describeClientVpnAuthorizationRules(
    args: DescribeClientVpnAuthorizationRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeClientVpnAuthorizationRulesCommandOutput) => void),
    cb?: (err: any, data?: DescribeClientVpnAuthorizationRulesCommandOutput) => void
  ): Promise<DescribeClientVpnAuthorizationRulesCommandOutput> | void {
    const command = new DescribeClientVpnAuthorizationRulesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes active client connections and connections that have been terminated within the last 60
   * 			minutes for the specified Client VPN endpoint.</p>
   */
  public describeClientVpnConnections(
    args: DescribeClientVpnConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClientVpnConnectionsCommandOutput>;
  public describeClientVpnConnections(
    args: DescribeClientVpnConnectionsCommandInput,
    cb: (err: any, data?: DescribeClientVpnConnectionsCommandOutput) => void
  ): void;
  public describeClientVpnConnections(
    args: DescribeClientVpnConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClientVpnConnectionsCommandOutput) => void
  ): void;
  public describeClientVpnConnections(
    args: DescribeClientVpnConnectionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeClientVpnConnectionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeClientVpnConnectionsCommandOutput) => void
  ): Promise<DescribeClientVpnConnectionsCommandOutput> | void {
    const command = new DescribeClientVpnConnectionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more Client VPN endpoints in the account.</p>
   */
  public describeClientVpnEndpoints(
    args: DescribeClientVpnEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClientVpnEndpointsCommandOutput>;
  public describeClientVpnEndpoints(
    args: DescribeClientVpnEndpointsCommandInput,
    cb: (err: any, data?: DescribeClientVpnEndpointsCommandOutput) => void
  ): void;
  public describeClientVpnEndpoints(
    args: DescribeClientVpnEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClientVpnEndpointsCommandOutput) => void
  ): void;
  public describeClientVpnEndpoints(
    args: DescribeClientVpnEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeClientVpnEndpointsCommandOutput) => void),
    cb?: (err: any, data?: DescribeClientVpnEndpointsCommandOutput) => void
  ): Promise<DescribeClientVpnEndpointsCommandOutput> | void {
    const command = new DescribeClientVpnEndpointsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the routes for the specified Client VPN endpoint.</p>
   */
  public describeClientVpnRoutes(
    args: DescribeClientVpnRoutesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClientVpnRoutesCommandOutput>;
  public describeClientVpnRoutes(
    args: DescribeClientVpnRoutesCommandInput,
    cb: (err: any, data?: DescribeClientVpnRoutesCommandOutput) => void
  ): void;
  public describeClientVpnRoutes(
    args: DescribeClientVpnRoutesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClientVpnRoutesCommandOutput) => void
  ): void;
  public describeClientVpnRoutes(
    args: DescribeClientVpnRoutesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeClientVpnRoutesCommandOutput) => void),
    cb?: (err: any, data?: DescribeClientVpnRoutesCommandOutput) => void
  ): Promise<DescribeClientVpnRoutesCommandOutput> | void {
    const command = new DescribeClientVpnRoutesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the target networks associated with the specified Client VPN endpoint.</p>
   */
  public describeClientVpnTargetNetworks(
    args: DescribeClientVpnTargetNetworksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClientVpnTargetNetworksCommandOutput>;
  public describeClientVpnTargetNetworks(
    args: DescribeClientVpnTargetNetworksCommandInput,
    cb: (err: any, data?: DescribeClientVpnTargetNetworksCommandOutput) => void
  ): void;
  public describeClientVpnTargetNetworks(
    args: DescribeClientVpnTargetNetworksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClientVpnTargetNetworksCommandOutput) => void
  ): void;
  public describeClientVpnTargetNetworks(
    args: DescribeClientVpnTargetNetworksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeClientVpnTargetNetworksCommandOutput) => void),
    cb?: (err: any, data?: DescribeClientVpnTargetNetworksCommandOutput) => void
  ): Promise<DescribeClientVpnTargetNetworksCommandOutput> | void {
    const command = new DescribeClientVpnTargetNetworksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified customer-owned address pools or all of your customer-owned address pools.</p>
   */
  public describeCoipPools(
    args: DescribeCoipPoolsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCoipPoolsCommandOutput>;
  public describeCoipPools(
    args: DescribeCoipPoolsCommandInput,
    cb: (err: any, data?: DescribeCoipPoolsCommandOutput) => void
  ): void;
  public describeCoipPools(
    args: DescribeCoipPoolsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCoipPoolsCommandOutput) => void
  ): void;
  public describeCoipPools(
    args: DescribeCoipPoolsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCoipPoolsCommandOutput) => void),
    cb?: (err: any, data?: DescribeCoipPoolsCommandOutput) => void
  ): Promise<DescribeCoipPoolsCommandOutput> | void {
    const command = new DescribeCoipPoolsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified conversion tasks or all your conversion tasks. For more information, see the
   *    <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/">VM Import/Export User Guide</a>.</p>
   *          <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
   */
  public describeConversionTasks(
    args: DescribeConversionTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConversionTasksCommandOutput>;
  public describeConversionTasks(
    args: DescribeConversionTasksCommandInput,
    cb: (err: any, data?: DescribeConversionTasksCommandOutput) => void
  ): void;
  public describeConversionTasks(
    args: DescribeConversionTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConversionTasksCommandOutput) => void
  ): void;
  public describeConversionTasks(
    args: DescribeConversionTasksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConversionTasksCommandOutput) => void),
    cb?: (err: any, data?: DescribeConversionTasksCommandOutput) => void
  ): Promise<DescribeConversionTasksCommandOutput> | void {
    const command = new DescribeConversionTasksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more of your VPN customer gateways.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
   */
  public describeCustomerGateways(
    args: DescribeCustomerGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCustomerGatewaysCommandOutput>;
  public describeCustomerGateways(
    args: DescribeCustomerGatewaysCommandInput,
    cb: (err: any, data?: DescribeCustomerGatewaysCommandOutput) => void
  ): void;
  public describeCustomerGateways(
    args: DescribeCustomerGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCustomerGatewaysCommandOutput) => void
  ): void;
  public describeCustomerGateways(
    args: DescribeCustomerGatewaysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCustomerGatewaysCommandOutput) => void),
    cb?: (err: any, data?: DescribeCustomerGatewaysCommandOutput) => void
  ): Promise<DescribeCustomerGatewaysCommandOutput> | void {
    const command = new DescribeCustomerGatewaysCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more of your DHCP options sets.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html">DHCP Options Sets</a> in the
   * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  public describeDhcpOptions(
    args: DescribeDhcpOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDhcpOptionsCommandOutput>;
  public describeDhcpOptions(
    args: DescribeDhcpOptionsCommandInput,
    cb: (err: any, data?: DescribeDhcpOptionsCommandOutput) => void
  ): void;
  public describeDhcpOptions(
    args: DescribeDhcpOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDhcpOptionsCommandOutput) => void
  ): void;
  public describeDhcpOptions(
    args: DescribeDhcpOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDhcpOptionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDhcpOptionsCommandOutput) => void
  ): Promise<DescribeDhcpOptionsCommandOutput> | void {
    const command = new DescribeDhcpOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more of your egress-only internet gateways.</p>
   */
  public describeEgressOnlyInternetGateways(
    args: DescribeEgressOnlyInternetGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEgressOnlyInternetGatewaysCommandOutput>;
  public describeEgressOnlyInternetGateways(
    args: DescribeEgressOnlyInternetGatewaysCommandInput,
    cb: (err: any, data?: DescribeEgressOnlyInternetGatewaysCommandOutput) => void
  ): void;
  public describeEgressOnlyInternetGateways(
    args: DescribeEgressOnlyInternetGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEgressOnlyInternetGatewaysCommandOutput) => void
  ): void;
  public describeEgressOnlyInternetGateways(
    args: DescribeEgressOnlyInternetGatewaysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEgressOnlyInternetGatewaysCommandOutput) => void),
    cb?: (err: any, data?: DescribeEgressOnlyInternetGatewaysCommandOutput) => void
  ): Promise<DescribeEgressOnlyInternetGatewaysCommandOutput> | void {
    const command = new DescribeEgressOnlyInternetGatewaysCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the Elastic Graphics accelerator associated with your instances. For more information
   *             about Elastic Graphics, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-graphics.html">Amazon Elastic Graphics</a>.</p>
   */
  public describeElasticGpus(
    args: DescribeElasticGpusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeElasticGpusCommandOutput>;
  public describeElasticGpus(
    args: DescribeElasticGpusCommandInput,
    cb: (err: any, data?: DescribeElasticGpusCommandOutput) => void
  ): void;
  public describeElasticGpus(
    args: DescribeElasticGpusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeElasticGpusCommandOutput) => void
  ): void;
  public describeElasticGpus(
    args: DescribeElasticGpusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeElasticGpusCommandOutput) => void),
    cb?: (err: any, data?: DescribeElasticGpusCommandOutput) => void
  ): Promise<DescribeElasticGpusCommandOutput> | void {
    const command = new DescribeElasticGpusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified export image tasks or all of your export image tasks.</p>
   */
  public describeExportImageTasks(
    args: DescribeExportImageTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExportImageTasksCommandOutput>;
  public describeExportImageTasks(
    args: DescribeExportImageTasksCommandInput,
    cb: (err: any, data?: DescribeExportImageTasksCommandOutput) => void
  ): void;
  public describeExportImageTasks(
    args: DescribeExportImageTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExportImageTasksCommandOutput) => void
  ): void;
  public describeExportImageTasks(
    args: DescribeExportImageTasksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeExportImageTasksCommandOutput) => void),
    cb?: (err: any, data?: DescribeExportImageTasksCommandOutput) => void
  ): Promise<DescribeExportImageTasksCommandOutput> | void {
    const command = new DescribeExportImageTasksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified export instance tasks or all of your export instance tasks.</p>
   */
  public describeExportTasks(
    args: DescribeExportTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExportTasksCommandOutput>;
  public describeExportTasks(
    args: DescribeExportTasksCommandInput,
    cb: (err: any, data?: DescribeExportTasksCommandOutput) => void
  ): void;
  public describeExportTasks(
    args: DescribeExportTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExportTasksCommandOutput) => void
  ): void;
  public describeExportTasks(
    args: DescribeExportTasksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeExportTasksCommandOutput) => void),
    cb?: (err: any, data?: DescribeExportTasksCommandOutput) => void
  ): Promise<DescribeExportTasksCommandOutput> | void {
    const command = new DescribeExportTasksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the state of fast snapshot restores for your snapshots.</p>
   */
  public describeFastSnapshotRestores(
    args: DescribeFastSnapshotRestoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFastSnapshotRestoresCommandOutput>;
  public describeFastSnapshotRestores(
    args: DescribeFastSnapshotRestoresCommandInput,
    cb: (err: any, data?: DescribeFastSnapshotRestoresCommandOutput) => void
  ): void;
  public describeFastSnapshotRestores(
    args: DescribeFastSnapshotRestoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFastSnapshotRestoresCommandOutput) => void
  ): void;
  public describeFastSnapshotRestores(
    args: DescribeFastSnapshotRestoresCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFastSnapshotRestoresCommandOutput) => void),
    cb?: (err: any, data?: DescribeFastSnapshotRestoresCommandOutput) => void
  ): Promise<DescribeFastSnapshotRestoresCommandOutput> | void {
    const command = new DescribeFastSnapshotRestoresCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the events for the specified EC2 Fleet during the specified time.</p>
   *          <p>EC2 Fleet events are delayed by up to 30 seconds before they can be described. This ensures
   *          that you can query by the last evaluated time and not miss a recorded event. EC2 Fleet events
   *          are available for 48 hours.</p>
   */
  public describeFleetHistory(
    args: DescribeFleetHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetHistoryCommandOutput>;
  public describeFleetHistory(
    args: DescribeFleetHistoryCommandInput,
    cb: (err: any, data?: DescribeFleetHistoryCommandOutput) => void
  ): void;
  public describeFleetHistory(
    args: DescribeFleetHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetHistoryCommandOutput) => void
  ): void;
  public describeFleetHistory(
    args: DescribeFleetHistoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFleetHistoryCommandOutput) => void),
    cb?: (err: any, data?: DescribeFleetHistoryCommandOutput) => void
  ): Promise<DescribeFleetHistoryCommandOutput> | void {
    const command = new DescribeFleetHistoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the running instances for the specified EC2 Fleet.</p>
   */
  public describeFleetInstances(
    args: DescribeFleetInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetInstancesCommandOutput>;
  public describeFleetInstances(
    args: DescribeFleetInstancesCommandInput,
    cb: (err: any, data?: DescribeFleetInstancesCommandOutput) => void
  ): void;
  public describeFleetInstances(
    args: DescribeFleetInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetInstancesCommandOutput) => void
  ): void;
  public describeFleetInstances(
    args: DescribeFleetInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFleetInstancesCommandOutput) => void),
    cb?: (err: any, data?: DescribeFleetInstancesCommandOutput) => void
  ): Promise<DescribeFleetInstancesCommandOutput> | void {
    const command = new DescribeFleetInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified EC2 Fleets or all of your EC2 Fleets.</p>
   */
  public describeFleets(
    args: DescribeFleetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetsCommandOutput>;
  public describeFleets(
    args: DescribeFleetsCommandInput,
    cb: (err: any, data?: DescribeFleetsCommandOutput) => void
  ): void;
  public describeFleets(
    args: DescribeFleetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetsCommandOutput) => void
  ): void;
  public describeFleets(
    args: DescribeFleetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFleetsCommandOutput) => void),
    cb?: (err: any, data?: DescribeFleetsCommandOutput) => void
  ): Promise<DescribeFleetsCommandOutput> | void {
    const command = new DescribeFleetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more flow logs. To view the information in your flow logs (the log
   *             streams for the network interfaces), you must use the CloudWatch Logs console or the CloudWatch Logs
   *             API.</p>
   */
  public describeFlowLogs(
    args: DescribeFlowLogsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFlowLogsCommandOutput>;
  public describeFlowLogs(
    args: DescribeFlowLogsCommandInput,
    cb: (err: any, data?: DescribeFlowLogsCommandOutput) => void
  ): void;
  public describeFlowLogs(
    args: DescribeFlowLogsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFlowLogsCommandOutput) => void
  ): void;
  public describeFlowLogs(
    args: DescribeFlowLogsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFlowLogsCommandOutput) => void),
    cb?: (err: any, data?: DescribeFlowLogsCommandOutput) => void
  ): Promise<DescribeFlowLogsCommandOutput> | void {
    const command = new DescribeFlowLogsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified attribute of the specified Amazon FPGA Image (AFI).</p>
   */
  public describeFpgaImageAttribute(
    args: DescribeFpgaImageAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFpgaImageAttributeCommandOutput>;
  public describeFpgaImageAttribute(
    args: DescribeFpgaImageAttributeCommandInput,
    cb: (err: any, data?: DescribeFpgaImageAttributeCommandOutput) => void
  ): void;
  public describeFpgaImageAttribute(
    args: DescribeFpgaImageAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFpgaImageAttributeCommandOutput) => void
  ): void;
  public describeFpgaImageAttribute(
    args: DescribeFpgaImageAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFpgaImageAttributeCommandOutput) => void),
    cb?: (err: any, data?: DescribeFpgaImageAttributeCommandOutput) => void
  ): Promise<DescribeFpgaImageAttributeCommandOutput> | void {
    const command = new DescribeFpgaImageAttributeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the Amazon FPGA Images (AFIs) available to you. These include public AFIs,
   * 			private AFIs that you own, and AFIs owned by other AWS accounts for which you have load
   * 			permissions.</p>
   */
  public describeFpgaImages(
    args: DescribeFpgaImagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFpgaImagesCommandOutput>;
  public describeFpgaImages(
    args: DescribeFpgaImagesCommandInput,
    cb: (err: any, data?: DescribeFpgaImagesCommandOutput) => void
  ): void;
  public describeFpgaImages(
    args: DescribeFpgaImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFpgaImagesCommandOutput) => void
  ): void;
  public describeFpgaImages(
    args: DescribeFpgaImagesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFpgaImagesCommandOutput) => void),
    cb?: (err: any, data?: DescribeFpgaImagesCommandOutput) => void
  ): Promise<DescribeFpgaImagesCommandOutput> | void {
    const command = new DescribeFpgaImagesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the Dedicated Host reservations that are available to purchase.</p>
   *         <p>The results describe all of the Dedicated Host reservation offerings, including
   * 			offerings that might not match the instance family and Region of your Dedicated Hosts.
   * 			When purchasing an offering, ensure that the instance family and Region of the offering
   * 			matches that of the Dedicated Hosts with which it is to be associated. For more
   * 			information about supported instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html">Dedicated Hosts
   * 				Overview</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. </p>
   */
  public describeHostReservationOfferings(
    args: DescribeHostReservationOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHostReservationOfferingsCommandOutput>;
  public describeHostReservationOfferings(
    args: DescribeHostReservationOfferingsCommandInput,
    cb: (err: any, data?: DescribeHostReservationOfferingsCommandOutput) => void
  ): void;
  public describeHostReservationOfferings(
    args: DescribeHostReservationOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHostReservationOfferingsCommandOutput) => void
  ): void;
  public describeHostReservationOfferings(
    args: DescribeHostReservationOfferingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeHostReservationOfferingsCommandOutput) => void),
    cb?: (err: any, data?: DescribeHostReservationOfferingsCommandOutput) => void
  ): Promise<DescribeHostReservationOfferingsCommandOutput> | void {
    const command = new DescribeHostReservationOfferingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes reservations that are associated with Dedicated Hosts in your
   *             account.</p>
   */
  public describeHostReservations(
    args: DescribeHostReservationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHostReservationsCommandOutput>;
  public describeHostReservations(
    args: DescribeHostReservationsCommandInput,
    cb: (err: any, data?: DescribeHostReservationsCommandOutput) => void
  ): void;
  public describeHostReservations(
    args: DescribeHostReservationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHostReservationsCommandOutput) => void
  ): void;
  public describeHostReservations(
    args: DescribeHostReservationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeHostReservationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeHostReservationsCommandOutput) => void
  ): Promise<DescribeHostReservationsCommandOutput> | void {
    const command = new DescribeHostReservationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified Dedicated Hosts or all your Dedicated Hosts.</p>
   *         <p>The results describe only the Dedicated Hosts in the Region you're currently using.
   *             All listed instances consume capacity on your Dedicated Host. Dedicated Hosts that have
   *             recently been released are listed with the state <code>released</code>.</p>
   */
  public describeHosts(
    args: DescribeHostsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHostsCommandOutput>;
  public describeHosts(
    args: DescribeHostsCommandInput,
    cb: (err: any, data?: DescribeHostsCommandOutput) => void
  ): void;
  public describeHosts(
    args: DescribeHostsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHostsCommandOutput) => void
  ): void;
  public describeHosts(
    args: DescribeHostsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeHostsCommandOutput) => void),
    cb?: (err: any, data?: DescribeHostsCommandOutput) => void
  ): Promise<DescribeHostsCommandOutput> | void {
    const command = new DescribeHostsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes your IAM instance profile associations.</p>
   */
  public describeIamInstanceProfileAssociations(
    args: DescribeIamInstanceProfileAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIamInstanceProfileAssociationsCommandOutput>;
  public describeIamInstanceProfileAssociations(
    args: DescribeIamInstanceProfileAssociationsCommandInput,
    cb: (err: any, data?: DescribeIamInstanceProfileAssociationsCommandOutput) => void
  ): void;
  public describeIamInstanceProfileAssociations(
    args: DescribeIamInstanceProfileAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIamInstanceProfileAssociationsCommandOutput) => void
  ): void;
  public describeIamInstanceProfileAssociations(
    args: DescribeIamInstanceProfileAssociationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeIamInstanceProfileAssociationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeIamInstanceProfileAssociationsCommandOutput) => void
  ): Promise<DescribeIamInstanceProfileAssociationsCommandOutput> | void {
    const command = new DescribeIamInstanceProfileAssociationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the ID format settings for resources for the specified IAM user, IAM role, or root
   *       user. For example, you can view the resource types that are enabled for longer IDs. This request only
   *       returns information about resource types whose ID formats can be modified; it does not return
   *       information about other resource types. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resource-ids.html">Resource IDs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. </p>
   *          <p>The following resource types support longer IDs: <code>bundle</code> |
   *           <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
   *           <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
   *           <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
   *           <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
   *           <code>network-acl</code> | <code>network-acl-association</code> |
   *           <code>network-interface</code> | <code>network-interface-attachment</code> |
   *           <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
   *           <code>route-table-association</code> | <code>security-group</code> |
   *           <code>snapshot</code> | <code>subnet</code> |
   *           <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
   *           | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
   *           <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p>
   *          <p>These settings apply to the principal specified in the request. They do not apply to the
   *       principal that makes the request.</p>
   */
  public describeIdentityIdFormat(
    args: DescribeIdentityIdFormatCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIdentityIdFormatCommandOutput>;
  public describeIdentityIdFormat(
    args: DescribeIdentityIdFormatCommandInput,
    cb: (err: any, data?: DescribeIdentityIdFormatCommandOutput) => void
  ): void;
  public describeIdentityIdFormat(
    args: DescribeIdentityIdFormatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIdentityIdFormatCommandOutput) => void
  ): void;
  public describeIdentityIdFormat(
    args: DescribeIdentityIdFormatCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeIdentityIdFormatCommandOutput) => void),
    cb?: (err: any, data?: DescribeIdentityIdFormatCommandOutput) => void
  ): Promise<DescribeIdentityIdFormatCommandOutput> | void {
    const command = new DescribeIdentityIdFormatCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the ID format settings for your resources on a per-Region basis, for example, to view which resource types are enabled for longer IDs. This request only returns information about resource types whose ID formats can be modified; it does not return information about other resource types.</p>
   *          <p>The following resource types support longer IDs: <code>bundle</code> |
   *            <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
   *            <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
   *            <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
   *            <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
   *            <code>network-acl</code> | <code>network-acl-association</code> |
   *            <code>network-interface</code> | <code>network-interface-attachment</code> |
   *            <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
   *            <code>route-table-association</code> | <code>security-group</code> |
   *            <code>snapshot</code> | <code>subnet</code> |
   *            <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
   *            | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
   *            <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p>
   *          <p>These settings apply to the IAM user who makes the request; they do not apply to the entire
   *       AWS account. By default, an IAM user defaults to the same settings as the root user, unless
   *       they explicitly override the settings by running the <a>ModifyIdFormat</a> command. Resources
   *       created with longer IDs are visible to all IAM users, regardless of these settings and
   *       provided that they have permission to use the relevant <code>Describe</code> command for the
   *       resource type.</p>
   */
  public describeIdFormat(
    args: DescribeIdFormatCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIdFormatCommandOutput>;
  public describeIdFormat(
    args: DescribeIdFormatCommandInput,
    cb: (err: any, data?: DescribeIdFormatCommandOutput) => void
  ): void;
  public describeIdFormat(
    args: DescribeIdFormatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIdFormatCommandOutput) => void
  ): void;
  public describeIdFormat(
    args: DescribeIdFormatCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeIdFormatCommandOutput) => void),
    cb?: (err: any, data?: DescribeIdFormatCommandOutput) => void
  ): Promise<DescribeIdFormatCommandOutput> | void {
    const command = new DescribeIdFormatCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified attribute of the specified AMI. You can specify only one attribute at a time.</p>
   */
  public describeImageAttribute(
    args: DescribeImageAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImageAttributeCommandOutput>;
  public describeImageAttribute(
    args: DescribeImageAttributeCommandInput,
    cb: (err: any, data?: DescribeImageAttributeCommandOutput) => void
  ): void;
  public describeImageAttribute(
    args: DescribeImageAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImageAttributeCommandOutput) => void
  ): void;
  public describeImageAttribute(
    args: DescribeImageAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeImageAttributeCommandOutput) => void),
    cb?: (err: any, data?: DescribeImageAttributeCommandOutput) => void
  ): Promise<DescribeImageAttributeCommandOutput> | void {
    const command = new DescribeImageAttributeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified images (AMIs, AKIs, and ARIs) available to you or all of the images available to you.</p>
   *          <p>The images available to you include public images, private images that you own, and private images owned by other AWS accounts for which you have explicit launch permissions.</p>
   *          <p>Recently deregistered images appear in the returned results for a short interval and then return empty results.
   *         After all instances that reference a deregistered AMI are terminated, specifying the ID of the image results
   *         in an error indicating that the AMI ID cannot be found.</p>
   */
  public describeImages(
    args: DescribeImagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImagesCommandOutput>;
  public describeImages(
    args: DescribeImagesCommandInput,
    cb: (err: any, data?: DescribeImagesCommandOutput) => void
  ): void;
  public describeImages(
    args: DescribeImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImagesCommandOutput) => void
  ): void;
  public describeImages(
    args: DescribeImagesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeImagesCommandOutput) => void),
    cb?: (err: any, data?: DescribeImagesCommandOutput) => void
  ): Promise<DescribeImagesCommandOutput> | void {
    const command = new DescribeImagesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Displays details about an import virtual machine or import snapshot tasks that are already created.</p>
   */
  public describeImportImageTasks(
    args: DescribeImportImageTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImportImageTasksCommandOutput>;
  public describeImportImageTasks(
    args: DescribeImportImageTasksCommandInput,
    cb: (err: any, data?: DescribeImportImageTasksCommandOutput) => void
  ): void;
  public describeImportImageTasks(
    args: DescribeImportImageTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImportImageTasksCommandOutput) => void
  ): void;
  public describeImportImageTasks(
    args: DescribeImportImageTasksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeImportImageTasksCommandOutput) => void),
    cb?: (err: any, data?: DescribeImportImageTasksCommandOutput) => void
  ): Promise<DescribeImportImageTasksCommandOutput> | void {
    const command = new DescribeImportImageTasksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes your import snapshot tasks.</p>
   */
  public describeImportSnapshotTasks(
    args: DescribeImportSnapshotTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImportSnapshotTasksCommandOutput>;
  public describeImportSnapshotTasks(
    args: DescribeImportSnapshotTasksCommandInput,
    cb: (err: any, data?: DescribeImportSnapshotTasksCommandOutput) => void
  ): void;
  public describeImportSnapshotTasks(
    args: DescribeImportSnapshotTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImportSnapshotTasksCommandOutput) => void
  ): void;
  public describeImportSnapshotTasks(
    args: DescribeImportSnapshotTasksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeImportSnapshotTasksCommandOutput) => void),
    cb?: (err: any, data?: DescribeImportSnapshotTasksCommandOutput) => void
  ): Promise<DescribeImportSnapshotTasksCommandOutput> | void {
    const command = new DescribeImportSnapshotTasksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified attribute of the specified instance. You can specify only one
   *             attribute at a time. Valid attribute values are: <code>instanceType</code> |
   *                 <code>kernel</code> | <code>ramdisk</code> | <code>userData</code> |
   *                 <code>disableApiTermination</code> | <code>instanceInitiatedShutdownBehavior</code>
   *             | <code>rootDeviceName</code> | <code>blockDeviceMapping</code> |
   *                 <code>productCodes</code> | <code>sourceDestCheck</code> | <code>groupSet</code> |
   *                 <code>ebsOptimized</code> | <code>sriovNetSupport</code>
   *         </p>
   */
  public describeInstanceAttribute(
    args: DescribeInstanceAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceAttributeCommandOutput>;
  public describeInstanceAttribute(
    args: DescribeInstanceAttributeCommandInput,
    cb: (err: any, data?: DescribeInstanceAttributeCommandOutput) => void
  ): void;
  public describeInstanceAttribute(
    args: DescribeInstanceAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceAttributeCommandOutput) => void
  ): void;
  public describeInstanceAttribute(
    args: DescribeInstanceAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeInstanceAttributeCommandOutput) => void),
    cb?: (err: any, data?: DescribeInstanceAttributeCommandOutput) => void
  ): Promise<DescribeInstanceAttributeCommandOutput> | void {
    const command = new DescribeInstanceAttributeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the credit option for CPU usage of the specified burstable performance
   *             instances. The credit options are <code>standard</code> and
   *             <code>unlimited</code>.</p>
   *         <p>If you do not specify an instance ID, Amazon EC2 returns burstable performance
   *             instances with the <code>unlimited</code> credit option, as well as instances that were
   *             previously configured as T2, T3, and T3a with the <code>unlimited</code> credit option.
   *             For example, if you resize a T2 instance, while it is configured as
   *                 <code>unlimited</code>, to an M4 instance, Amazon EC2 returns the M4
   *             instance.</p>
   *         <p>If you specify one or more instance IDs, Amazon EC2 returns the credit option
   *                 (<code>standard</code> or <code>unlimited</code>) of those instances. If you specify
   *             an instance ID that is not valid, such as an instance that is not a burstable
   *             performance instance, an error is returned.</p>
   *         <p>Recently terminated instances might appear in the returned results. This interval is
   *             usually less than one hour.</p>
   *         <p>If an Availability Zone is experiencing a service disruption and you specify instance
   *             IDs in the affected zone, or do not specify any instance IDs at all, the call fails. If
   *             you specify only instance IDs in an unaffected zone, the call works normally.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
   *                 performance instances</a> in the <i>Amazon Elastic Compute Cloud User
   *                 Guide</i>.</p>
   */
  public describeInstanceCreditSpecifications(
    args: DescribeInstanceCreditSpecificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceCreditSpecificationsCommandOutput>;
  public describeInstanceCreditSpecifications(
    args: DescribeInstanceCreditSpecificationsCommandInput,
    cb: (err: any, data?: DescribeInstanceCreditSpecificationsCommandOutput) => void
  ): void;
  public describeInstanceCreditSpecifications(
    args: DescribeInstanceCreditSpecificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceCreditSpecificationsCommandOutput) => void
  ): void;
  public describeInstanceCreditSpecifications(
    args: DescribeInstanceCreditSpecificationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeInstanceCreditSpecificationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeInstanceCreditSpecificationsCommandOutput) => void
  ): Promise<DescribeInstanceCreditSpecificationsCommandOutput> | void {
    const command = new DescribeInstanceCreditSpecificationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the tag keys that are registered to appear in scheduled event notifications for
   *       	resources in the current Region.</p>
   */
  public describeInstanceEventNotificationAttributes(
    args: DescribeInstanceEventNotificationAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceEventNotificationAttributesCommandOutput>;
  public describeInstanceEventNotificationAttributes(
    args: DescribeInstanceEventNotificationAttributesCommandInput,
    cb: (err: any, data?: DescribeInstanceEventNotificationAttributesCommandOutput) => void
  ): void;
  public describeInstanceEventNotificationAttributes(
    args: DescribeInstanceEventNotificationAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceEventNotificationAttributesCommandOutput) => void
  ): void;
  public describeInstanceEventNotificationAttributes(
    args: DescribeInstanceEventNotificationAttributesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeInstanceEventNotificationAttributesCommandOutput) => void),
    cb?: (err: any, data?: DescribeInstanceEventNotificationAttributesCommandOutput) => void
  ): Promise<DescribeInstanceEventNotificationAttributesCommandOutput> | void {
    const command = new DescribeInstanceEventNotificationAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified instances or all instances.</p>
   *         <p>If you specify instance IDs, the output includes information for only the specified instances.
   *             If you specify filters, the output includes information for only those instances that meet the filter criteria.
   *             If you do not specify instance IDs or filters, the output includes information for all instances,
   *             which can affect performance. We recommend that you use pagination to ensure that the operation
   *             returns quickly and successfully.</p>
   *         <p>If you specify an instance ID that is not valid, an error is returned. If you
   *             specify an instance that you do not own, it is not included in the output.</p>
   *         <p>Recently terminated instances might appear in the returned results. This interval is
   *             usually less than one hour.</p>
   *         <p>If you describe instances in the rare case where an Availability Zone is experiencing
   *             a service disruption and you specify instance IDs that are in the affected zone, or do
   *             not specify any instance IDs at all, the call fails. If you describe instances and
   *             specify only instance IDs that are in an unaffected zone, the call works
   *             normally.</p>
   */
  public describeInstances(
    args: DescribeInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstancesCommandOutput>;
  public describeInstances(
    args: DescribeInstancesCommandInput,
    cb: (err: any, data?: DescribeInstancesCommandOutput) => void
  ): void;
  public describeInstances(
    args: DescribeInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstancesCommandOutput) => void
  ): void;
  public describeInstances(
    args: DescribeInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeInstancesCommandOutput) => void),
    cb?: (err: any, data?: DescribeInstancesCommandOutput) => void
  ): Promise<DescribeInstancesCommandOutput> | void {
    const command = new DescribeInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the status of the specified instances or all of your instances. By default,
   *             only running instances are described, unless you specifically indicate to return the
   *             status of all instances.</p>
   *         <p>Instance status includes the following components:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <b>Status checks</b> - Amazon EC2 performs status
   *                     checks on running EC2 instances to identify hardware and software issues. For
   *                     more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-system-instance-status-check.html">Status checks for your instances</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstances.html">Troubleshooting
   *                         instances with failed status checks</a> in the <i>Amazon Elastic
   *                         Compute Cloud User Guide</i>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>Scheduled events</b> - Amazon EC2 can schedule
   *                     events (such as reboot, stop, or terminate) for your instances related to
   *                     hardware issues, software updates, or system maintenance. For more information,
   *                     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-instances-status-check_sched.html">Scheduled events for your instances</a> in the <i>Amazon Elastic
   *                         Compute Cloud User Guide</i>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>Instance state</b> - You can manage your instances
   *                     from the moment you launch them through their termination. For more information,
   *                     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html">Instance
   *                         lifecycle</a> in the <i>Amazon Elastic Compute Cloud User
   *                         Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  public describeInstanceStatus(
    args: DescribeInstanceStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceStatusCommandOutput>;
  public describeInstanceStatus(
    args: DescribeInstanceStatusCommandInput,
    cb: (err: any, data?: DescribeInstanceStatusCommandOutput) => void
  ): void;
  public describeInstanceStatus(
    args: DescribeInstanceStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceStatusCommandOutput) => void
  ): void;
  public describeInstanceStatus(
    args: DescribeInstanceStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeInstanceStatusCommandOutput) => void),
    cb?: (err: any, data?: DescribeInstanceStatusCommandOutput) => void
  ): Promise<DescribeInstanceStatusCommandOutput> | void {
    const command = new DescribeInstanceStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of all instance types offered. The results can be filtered by location (Region or Availability
   *    Zone). If no location is specified, the instance types offered in the current Region are returned.</p>
   */
  public describeInstanceTypeOfferings(
    args: DescribeInstanceTypeOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceTypeOfferingsCommandOutput>;
  public describeInstanceTypeOfferings(
    args: DescribeInstanceTypeOfferingsCommandInput,
    cb: (err: any, data?: DescribeInstanceTypeOfferingsCommandOutput) => void
  ): void;
  public describeInstanceTypeOfferings(
    args: DescribeInstanceTypeOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceTypeOfferingsCommandOutput) => void
  ): void;
  public describeInstanceTypeOfferings(
    args: DescribeInstanceTypeOfferingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeInstanceTypeOfferingsCommandOutput) => void),
    cb?: (err: any, data?: DescribeInstanceTypeOfferingsCommandOutput) => void
  ): Promise<DescribeInstanceTypeOfferingsCommandOutput> | void {
    const command = new DescribeInstanceTypeOfferingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the details of the instance types that are offered in a location. The results can be filtered by the
   *    attributes of the instance types.</p>
   */
  public describeInstanceTypes(
    args: DescribeInstanceTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceTypesCommandOutput>;
  public describeInstanceTypes(
    args: DescribeInstanceTypesCommandInput,
    cb: (err: any, data?: DescribeInstanceTypesCommandOutput) => void
  ): void;
  public describeInstanceTypes(
    args: DescribeInstanceTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceTypesCommandOutput) => void
  ): void;
  public describeInstanceTypes(
    args: DescribeInstanceTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeInstanceTypesCommandOutput) => void),
    cb?: (err: any, data?: DescribeInstanceTypesCommandOutput) => void
  ): Promise<DescribeInstanceTypesCommandOutput> | void {
    const command = new DescribeInstanceTypesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more of your internet gateways.</p>
   */
  public describeInternetGateways(
    args: DescribeInternetGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInternetGatewaysCommandOutput>;
  public describeInternetGateways(
    args: DescribeInternetGatewaysCommandInput,
    cb: (err: any, data?: DescribeInternetGatewaysCommandOutput) => void
  ): void;
  public describeInternetGateways(
    args: DescribeInternetGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInternetGatewaysCommandOutput) => void
  ): void;
  public describeInternetGateways(
    args: DescribeInternetGatewaysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeInternetGatewaysCommandOutput) => void),
    cb?: (err: any, data?: DescribeInternetGatewaysCommandOutput) => void
  ): Promise<DescribeInternetGatewaysCommandOutput> | void {
    const command = new DescribeInternetGatewaysCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes your IPv6 address pools.</p>
   */
  public describeIpv6Pools(
    args: DescribeIpv6PoolsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIpv6PoolsCommandOutput>;
  public describeIpv6Pools(
    args: DescribeIpv6PoolsCommandInput,
    cb: (err: any, data?: DescribeIpv6PoolsCommandOutput) => void
  ): void;
  public describeIpv6Pools(
    args: DescribeIpv6PoolsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIpv6PoolsCommandOutput) => void
  ): void;
  public describeIpv6Pools(
    args: DescribeIpv6PoolsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeIpv6PoolsCommandOutput) => void),
    cb?: (err: any, data?: DescribeIpv6PoolsCommandOutput) => void
  ): Promise<DescribeIpv6PoolsCommandOutput> | void {
    const command = new DescribeIpv6PoolsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified key pairs or all of your key pairs.</p>
   *          <p>For more information about key pairs, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Key Pairs</a>
   * 				in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public describeKeyPairs(
    args: DescribeKeyPairsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeKeyPairsCommandOutput>;
  public describeKeyPairs(
    args: DescribeKeyPairsCommandInput,
    cb: (err: any, data?: DescribeKeyPairsCommandOutput) => void
  ): void;
  public describeKeyPairs(
    args: DescribeKeyPairsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeKeyPairsCommandOutput) => void
  ): void;
  public describeKeyPairs(
    args: DescribeKeyPairsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeKeyPairsCommandOutput) => void),
    cb?: (err: any, data?: DescribeKeyPairsCommandOutput) => void
  ): Promise<DescribeKeyPairsCommandOutput> | void {
    const command = new DescribeKeyPairsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more launch templates.</p>
   */
  public describeLaunchTemplates(
    args: DescribeLaunchTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLaunchTemplatesCommandOutput>;
  public describeLaunchTemplates(
    args: DescribeLaunchTemplatesCommandInput,
    cb: (err: any, data?: DescribeLaunchTemplatesCommandOutput) => void
  ): void;
  public describeLaunchTemplates(
    args: DescribeLaunchTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLaunchTemplatesCommandOutput) => void
  ): void;
  public describeLaunchTemplates(
    args: DescribeLaunchTemplatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLaunchTemplatesCommandOutput) => void),
    cb?: (err: any, data?: DescribeLaunchTemplatesCommandOutput) => void
  ): Promise<DescribeLaunchTemplatesCommandOutput> | void {
    const command = new DescribeLaunchTemplatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more versions of a specified launch template. You can describe all
   *             versions, individual versions, or a range of versions. You can also describe all the
   *             latest versions or all the default versions of all the launch templates in your
   *             account.</p>
   */
  public describeLaunchTemplateVersions(
    args: DescribeLaunchTemplateVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLaunchTemplateVersionsCommandOutput>;
  public describeLaunchTemplateVersions(
    args: DescribeLaunchTemplateVersionsCommandInput,
    cb: (err: any, data?: DescribeLaunchTemplateVersionsCommandOutput) => void
  ): void;
  public describeLaunchTemplateVersions(
    args: DescribeLaunchTemplateVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLaunchTemplateVersionsCommandOutput) => void
  ): void;
  public describeLaunchTemplateVersions(
    args: DescribeLaunchTemplateVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLaunchTemplateVersionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeLaunchTemplateVersionsCommandOutput) => void
  ): Promise<DescribeLaunchTemplateVersionsCommandOutput> | void {
    const command = new DescribeLaunchTemplateVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more local gateway route tables. By default, all local gateway route tables are described.
   *          Alternatively, you can filter the results.</p>
   */
  public describeLocalGatewayRouteTables(
    args: DescribeLocalGatewayRouteTablesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocalGatewayRouteTablesCommandOutput>;
  public describeLocalGatewayRouteTables(
    args: DescribeLocalGatewayRouteTablesCommandInput,
    cb: (err: any, data?: DescribeLocalGatewayRouteTablesCommandOutput) => void
  ): void;
  public describeLocalGatewayRouteTables(
    args: DescribeLocalGatewayRouteTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocalGatewayRouteTablesCommandOutput) => void
  ): void;
  public describeLocalGatewayRouteTables(
    args: DescribeLocalGatewayRouteTablesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLocalGatewayRouteTablesCommandOutput) => void),
    cb?: (err: any, data?: DescribeLocalGatewayRouteTablesCommandOutput) => void
  ): Promise<DescribeLocalGatewayRouteTablesCommandOutput> | void {
    const command = new DescribeLocalGatewayRouteTablesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the associations between virtual interface groups and local gateway route tables.</p>
   */
  public describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations(
    args: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput>;
  public describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations(
    args: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput,
    cb: (err: any, data?: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput) => void
  ): void;
  public describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations(
    args: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput) => void
  ): void;
  public describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations(
    args: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput) => void
  ): Promise<DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput> | void {
    const command = new DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified associations between VPCs and local gateway route tables.</p>
   */
  public describeLocalGatewayRouteTableVpcAssociations(
    args: DescribeLocalGatewayRouteTableVpcAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput>;
  public describeLocalGatewayRouteTableVpcAssociations(
    args: DescribeLocalGatewayRouteTableVpcAssociationsCommandInput,
    cb: (err: any, data?: DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput) => void
  ): void;
  public describeLocalGatewayRouteTableVpcAssociations(
    args: DescribeLocalGatewayRouteTableVpcAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput) => void
  ): void;
  public describeLocalGatewayRouteTableVpcAssociations(
    args: DescribeLocalGatewayRouteTableVpcAssociationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput) => void
  ): Promise<DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput> | void {
    const command = new DescribeLocalGatewayRouteTableVpcAssociationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more local gateways. By default, all local gateways are described.
   *         Alternatively, you can filter the results.</p>
   */
  public describeLocalGateways(
    args: DescribeLocalGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocalGatewaysCommandOutput>;
  public describeLocalGateways(
    args: DescribeLocalGatewaysCommandInput,
    cb: (err: any, data?: DescribeLocalGatewaysCommandOutput) => void
  ): void;
  public describeLocalGateways(
    args: DescribeLocalGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocalGatewaysCommandOutput) => void
  ): void;
  public describeLocalGateways(
    args: DescribeLocalGatewaysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLocalGatewaysCommandOutput) => void),
    cb?: (err: any, data?: DescribeLocalGatewaysCommandOutput) => void
  ): Promise<DescribeLocalGatewaysCommandOutput> | void {
    const command = new DescribeLocalGatewaysCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified local gateway virtual interface groups.</p>
   */
  public describeLocalGatewayVirtualInterfaceGroups(
    args: DescribeLocalGatewayVirtualInterfaceGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput>;
  public describeLocalGatewayVirtualInterfaceGroups(
    args: DescribeLocalGatewayVirtualInterfaceGroupsCommandInput,
    cb: (err: any, data?: DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput) => void
  ): void;
  public describeLocalGatewayVirtualInterfaceGroups(
    args: DescribeLocalGatewayVirtualInterfaceGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput) => void
  ): void;
  public describeLocalGatewayVirtualInterfaceGroups(
    args: DescribeLocalGatewayVirtualInterfaceGroupsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput) => void
  ): Promise<DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput> | void {
    const command = new DescribeLocalGatewayVirtualInterfaceGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified local gateway virtual interfaces.</p>
   */
  public describeLocalGatewayVirtualInterfaces(
    args: DescribeLocalGatewayVirtualInterfacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocalGatewayVirtualInterfacesCommandOutput>;
  public describeLocalGatewayVirtualInterfaces(
    args: DescribeLocalGatewayVirtualInterfacesCommandInput,
    cb: (err: any, data?: DescribeLocalGatewayVirtualInterfacesCommandOutput) => void
  ): void;
  public describeLocalGatewayVirtualInterfaces(
    args: DescribeLocalGatewayVirtualInterfacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocalGatewayVirtualInterfacesCommandOutput) => void
  ): void;
  public describeLocalGatewayVirtualInterfaces(
    args: DescribeLocalGatewayVirtualInterfacesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeLocalGatewayVirtualInterfacesCommandOutput) => void),
    cb?: (err: any, data?: DescribeLocalGatewayVirtualInterfacesCommandOutput) => void
  ): Promise<DescribeLocalGatewayVirtualInterfacesCommandOutput> | void {
    const command = new DescribeLocalGatewayVirtualInterfacesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes your managed prefix lists and any AWS-managed prefix lists.</p>
   *         <p>To view the entries for your prefix list, use <a>GetManagedPrefixListEntries</a>.</p>
   */
  public describeManagedPrefixLists(
    args: DescribeManagedPrefixListsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeManagedPrefixListsCommandOutput>;
  public describeManagedPrefixLists(
    args: DescribeManagedPrefixListsCommandInput,
    cb: (err: any, data?: DescribeManagedPrefixListsCommandOutput) => void
  ): void;
  public describeManagedPrefixLists(
    args: DescribeManagedPrefixListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeManagedPrefixListsCommandOutput) => void
  ): void;
  public describeManagedPrefixLists(
    args: DescribeManagedPrefixListsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeManagedPrefixListsCommandOutput) => void),
    cb?: (err: any, data?: DescribeManagedPrefixListsCommandOutput) => void
  ): Promise<DescribeManagedPrefixListsCommandOutput> | void {
    const command = new DescribeManagedPrefixListsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes your Elastic IP addresses that are being moved to the EC2-VPC platform, or that are being restored to the EC2-Classic platform. This request does not return information about any other Elastic IP addresses in your account.</p>
   */
  public describeMovingAddresses(
    args: DescribeMovingAddressesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMovingAddressesCommandOutput>;
  public describeMovingAddresses(
    args: DescribeMovingAddressesCommandInput,
    cb: (err: any, data?: DescribeMovingAddressesCommandOutput) => void
  ): void;
  public describeMovingAddresses(
    args: DescribeMovingAddressesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMovingAddressesCommandOutput) => void
  ): void;
  public describeMovingAddresses(
    args: DescribeMovingAddressesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMovingAddressesCommandOutput) => void),
    cb?: (err: any, data?: DescribeMovingAddressesCommandOutput) => void
  ): Promise<DescribeMovingAddressesCommandOutput> | void {
    const command = new DescribeMovingAddressesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more of your NAT gateways.</p>
   */
  public describeNatGateways(
    args: DescribeNatGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNatGatewaysCommandOutput>;
  public describeNatGateways(
    args: DescribeNatGatewaysCommandInput,
    cb: (err: any, data?: DescribeNatGatewaysCommandOutput) => void
  ): void;
  public describeNatGateways(
    args: DescribeNatGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNatGatewaysCommandOutput) => void
  ): void;
  public describeNatGateways(
    args: DescribeNatGatewaysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeNatGatewaysCommandOutput) => void),
    cb?: (err: any, data?: DescribeNatGatewaysCommandOutput) => void
  ): Promise<DescribeNatGatewaysCommandOutput> | void {
    const command = new DescribeNatGatewaysCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more of your network ACLs.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the
   * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  public describeNetworkAcls(
    args: DescribeNetworkAclsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNetworkAclsCommandOutput>;
  public describeNetworkAcls(
    args: DescribeNetworkAclsCommandInput,
    cb: (err: any, data?: DescribeNetworkAclsCommandOutput) => void
  ): void;
  public describeNetworkAcls(
    args: DescribeNetworkAclsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNetworkAclsCommandOutput) => void
  ): void;
  public describeNetworkAcls(
    args: DescribeNetworkAclsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeNetworkAclsCommandOutput) => void),
    cb?: (err: any, data?: DescribeNetworkAclsCommandOutput) => void
  ): Promise<DescribeNetworkAclsCommandOutput> | void {
    const command = new DescribeNetworkAclsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more of your network insights analyses.</p>
   */
  public describeNetworkInsightsAnalyses(
    args: DescribeNetworkInsightsAnalysesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNetworkInsightsAnalysesCommandOutput>;
  public describeNetworkInsightsAnalyses(
    args: DescribeNetworkInsightsAnalysesCommandInput,
    cb: (err: any, data?: DescribeNetworkInsightsAnalysesCommandOutput) => void
  ): void;
  public describeNetworkInsightsAnalyses(
    args: DescribeNetworkInsightsAnalysesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNetworkInsightsAnalysesCommandOutput) => void
  ): void;
  public describeNetworkInsightsAnalyses(
    args: DescribeNetworkInsightsAnalysesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeNetworkInsightsAnalysesCommandOutput) => void),
    cb?: (err: any, data?: DescribeNetworkInsightsAnalysesCommandOutput) => void
  ): Promise<DescribeNetworkInsightsAnalysesCommandOutput> | void {
    const command = new DescribeNetworkInsightsAnalysesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more of your paths.</p>
   */
  public describeNetworkInsightsPaths(
    args: DescribeNetworkInsightsPathsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNetworkInsightsPathsCommandOutput>;
  public describeNetworkInsightsPaths(
    args: DescribeNetworkInsightsPathsCommandInput,
    cb: (err: any, data?: DescribeNetworkInsightsPathsCommandOutput) => void
  ): void;
  public describeNetworkInsightsPaths(
    args: DescribeNetworkInsightsPathsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNetworkInsightsPathsCommandOutput) => void
  ): void;
  public describeNetworkInsightsPaths(
    args: DescribeNetworkInsightsPathsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeNetworkInsightsPathsCommandOutput) => void),
    cb?: (err: any, data?: DescribeNetworkInsightsPathsCommandOutput) => void
  ): Promise<DescribeNetworkInsightsPathsCommandOutput> | void {
    const command = new DescribeNetworkInsightsPathsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a network interface attribute. You can specify only one attribute at a time.</p>
   */
  public describeNetworkInterfaceAttribute(
    args: DescribeNetworkInterfaceAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNetworkInterfaceAttributeCommandOutput>;
  public describeNetworkInterfaceAttribute(
    args: DescribeNetworkInterfaceAttributeCommandInput,
    cb: (err: any, data?: DescribeNetworkInterfaceAttributeCommandOutput) => void
  ): void;
  public describeNetworkInterfaceAttribute(
    args: DescribeNetworkInterfaceAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNetworkInterfaceAttributeCommandOutput) => void
  ): void;
  public describeNetworkInterfaceAttribute(
    args: DescribeNetworkInterfaceAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeNetworkInterfaceAttributeCommandOutput) => void),
    cb?: (err: any, data?: DescribeNetworkInterfaceAttributeCommandOutput) => void
  ): Promise<DescribeNetworkInterfaceAttributeCommandOutput> | void {
    const command = new DescribeNetworkInterfaceAttributeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the permissions for your network interfaces. </p>
   */
  public describeNetworkInterfacePermissions(
    args: DescribeNetworkInterfacePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNetworkInterfacePermissionsCommandOutput>;
  public describeNetworkInterfacePermissions(
    args: DescribeNetworkInterfacePermissionsCommandInput,
    cb: (err: any, data?: DescribeNetworkInterfacePermissionsCommandOutput) => void
  ): void;
  public describeNetworkInterfacePermissions(
    args: DescribeNetworkInterfacePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNetworkInterfacePermissionsCommandOutput) => void
  ): void;
  public describeNetworkInterfacePermissions(
    args: DescribeNetworkInterfacePermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeNetworkInterfacePermissionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeNetworkInterfacePermissionsCommandOutput) => void
  ): Promise<DescribeNetworkInterfacePermissionsCommandOutput> | void {
    const command = new DescribeNetworkInterfacePermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more of your network interfaces.</p>
   */
  public describeNetworkInterfaces(
    args: DescribeNetworkInterfacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNetworkInterfacesCommandOutput>;
  public describeNetworkInterfaces(
    args: DescribeNetworkInterfacesCommandInput,
    cb: (err: any, data?: DescribeNetworkInterfacesCommandOutput) => void
  ): void;
  public describeNetworkInterfaces(
    args: DescribeNetworkInterfacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNetworkInterfacesCommandOutput) => void
  ): void;
  public describeNetworkInterfaces(
    args: DescribeNetworkInterfacesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeNetworkInterfacesCommandOutput) => void),
    cb?: (err: any, data?: DescribeNetworkInterfacesCommandOutput) => void
  ): Promise<DescribeNetworkInterfacesCommandOutput> | void {
    const command = new DescribeNetworkInterfacesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified placement groups or all of your placement groups. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public describePlacementGroups(
    args: DescribePlacementGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePlacementGroupsCommandOutput>;
  public describePlacementGroups(
    args: DescribePlacementGroupsCommandInput,
    cb: (err: any, data?: DescribePlacementGroupsCommandOutput) => void
  ): void;
  public describePlacementGroups(
    args: DescribePlacementGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePlacementGroupsCommandOutput) => void
  ): void;
  public describePlacementGroups(
    args: DescribePlacementGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePlacementGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribePlacementGroupsCommandOutput) => void
  ): Promise<DescribePlacementGroupsCommandOutput> | void {
    const command = new DescribePlacementGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes available AWS services in a prefix list format, which includes the prefix list
   *             name and prefix list ID of the service and the IP address range for the service.</p>
   *         <p>We recommend that you use <a>DescribeManagedPrefixLists</a> instead.</p>
   */
  public describePrefixLists(
    args: DescribePrefixListsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePrefixListsCommandOutput>;
  public describePrefixLists(
    args: DescribePrefixListsCommandInput,
    cb: (err: any, data?: DescribePrefixListsCommandOutput) => void
  ): void;
  public describePrefixLists(
    args: DescribePrefixListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePrefixListsCommandOutput) => void
  ): void;
  public describePrefixLists(
    args: DescribePrefixListsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePrefixListsCommandOutput) => void),
    cb?: (err: any, data?: DescribePrefixListsCommandOutput) => void
  ): Promise<DescribePrefixListsCommandOutput> | void {
    const command = new DescribePrefixListsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the ID format settings for the root user and all IAM roles and IAM users
   *             that have explicitly specified a longer ID (17-character ID) preference. </p>
   *          <p>By default, all IAM roles and IAM users default to the same ID settings as the root user, unless they
   *             explicitly override the settings. This request is useful for identifying those IAM users and IAM roles
   *             that have overridden the default ID settings.</p>
   *          <p>The following resource types support longer IDs: <code>bundle</code> |
   *           <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
   *           <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
   *           <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
   *           <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
   *           <code>network-acl</code> | <code>network-acl-association</code> |
   *           <code>network-interface</code> | <code>network-interface-attachment</code> |
   *           <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
   *           <code>route-table-association</code> | <code>security-group</code> |
   *           <code>snapshot</code> | <code>subnet</code> |
   *           <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
   *           | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
   *           <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p>
   */
  public describePrincipalIdFormat(
    args: DescribePrincipalIdFormatCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePrincipalIdFormatCommandOutput>;
  public describePrincipalIdFormat(
    args: DescribePrincipalIdFormatCommandInput,
    cb: (err: any, data?: DescribePrincipalIdFormatCommandOutput) => void
  ): void;
  public describePrincipalIdFormat(
    args: DescribePrincipalIdFormatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePrincipalIdFormatCommandOutput) => void
  ): void;
  public describePrincipalIdFormat(
    args: DescribePrincipalIdFormatCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePrincipalIdFormatCommandOutput) => void),
    cb?: (err: any, data?: DescribePrincipalIdFormatCommandOutput) => void
  ): Promise<DescribePrincipalIdFormatCommandOutput> | void {
    const command = new DescribePrincipalIdFormatCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified IPv4 address pools.</p>
   */
  public describePublicIpv4Pools(
    args: DescribePublicIpv4PoolsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePublicIpv4PoolsCommandOutput>;
  public describePublicIpv4Pools(
    args: DescribePublicIpv4PoolsCommandInput,
    cb: (err: any, data?: DescribePublicIpv4PoolsCommandOutput) => void
  ): void;
  public describePublicIpv4Pools(
    args: DescribePublicIpv4PoolsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePublicIpv4PoolsCommandOutput) => void
  ): void;
  public describePublicIpv4Pools(
    args: DescribePublicIpv4PoolsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePublicIpv4PoolsCommandOutput) => void),
    cb?: (err: any, data?: DescribePublicIpv4PoolsCommandOutput) => void
  ): Promise<DescribePublicIpv4PoolsCommandOutput> | void {
    const command = new DescribePublicIpv4PoolsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the Regions that are enabled for your account, or all Regions.</p>
   *          <p>For a list of the Regions supported by Amazon EC2, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#ec2_region">
   *        Regions and Endpoints</a>.</p>
   *          <p>For information about enabling and disabling Regions for your account, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing AWS Regions</a> in the <i>AWS General Reference</i>.</p>
   */
  public describeRegions(
    args: DescribeRegionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRegionsCommandOutput>;
  public describeRegions(
    args: DescribeRegionsCommandInput,
    cb: (err: any, data?: DescribeRegionsCommandOutput) => void
  ): void;
  public describeRegions(
    args: DescribeRegionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRegionsCommandOutput) => void
  ): void;
  public describeRegions(
    args: DescribeRegionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRegionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeRegionsCommandOutput) => void
  ): Promise<DescribeRegionsCommandOutput> | void {
    const command = new DescribeRegionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more of the Reserved Instances that you purchased.</p>
   *          <p>For more information about Reserved Instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts-on-demand-reserved-instances.html">Reserved
   * 				Instances</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public describeReservedInstances(
    args: DescribeReservedInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedInstancesCommandOutput>;
  public describeReservedInstances(
    args: DescribeReservedInstancesCommandInput,
    cb: (err: any, data?: DescribeReservedInstancesCommandOutput) => void
  ): void;
  public describeReservedInstances(
    args: DescribeReservedInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedInstancesCommandOutput) => void
  ): void;
  public describeReservedInstances(
    args: DescribeReservedInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeReservedInstancesCommandOutput) => void),
    cb?: (err: any, data?: DescribeReservedInstancesCommandOutput) => void
  ): Promise<DescribeReservedInstancesCommandOutput> | void {
    const command = new DescribeReservedInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes your account's Reserved Instance listings in the Reserved Instance Marketplace.</p>
   * 		       <p>The Reserved Instance Marketplace matches sellers who want to resell Reserved Instance capacity that they no longer need with buyers who want to purchase additional capacity. Reserved Instances bought and sold through the Reserved Instance Marketplace work like any other Reserved Instances.</p>
   * 		       <p>As a seller, you choose to list some or all of your Reserved Instances, and you specify the upfront price to receive for them. Your Reserved Instances are then listed in the Reserved Instance Marketplace and are available for purchase.</p>
   * 		       <p>As a buyer, you specify the configuration of the Reserved Instance to purchase, and the Marketplace matches what you're searching for with what's available. The Marketplace first sells the lowest priced Reserved Instances to you, and continues to sell available Reserved Instance listings to you until your demand is met. You are charged based on the total price of all of the listings that you purchase.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a>
   *         in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public describeReservedInstancesListings(
    args: DescribeReservedInstancesListingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedInstancesListingsCommandOutput>;
  public describeReservedInstancesListings(
    args: DescribeReservedInstancesListingsCommandInput,
    cb: (err: any, data?: DescribeReservedInstancesListingsCommandOutput) => void
  ): void;
  public describeReservedInstancesListings(
    args: DescribeReservedInstancesListingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedInstancesListingsCommandOutput) => void
  ): void;
  public describeReservedInstancesListings(
    args: DescribeReservedInstancesListingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeReservedInstancesListingsCommandOutput) => void),
    cb?: (err: any, data?: DescribeReservedInstancesListingsCommandOutput) => void
  ): Promise<DescribeReservedInstancesListingsCommandOutput> | void {
    const command = new DescribeReservedInstancesListingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the modifications made to your Reserved Instances. If no parameter is specified, information about all your Reserved Instances modification requests is returned. If a modification ID is specified, only information about the specific modification is returned.</p>
   *    	     <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html">Modifying Reserved Instances</a> in the Amazon Elastic Compute Cloud User Guide.</p>
   */
  public describeReservedInstancesModifications(
    args: DescribeReservedInstancesModificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedInstancesModificationsCommandOutput>;
  public describeReservedInstancesModifications(
    args: DescribeReservedInstancesModificationsCommandInput,
    cb: (err: any, data?: DescribeReservedInstancesModificationsCommandOutput) => void
  ): void;
  public describeReservedInstancesModifications(
    args: DescribeReservedInstancesModificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedInstancesModificationsCommandOutput) => void
  ): void;
  public describeReservedInstancesModifications(
    args: DescribeReservedInstancesModificationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeReservedInstancesModificationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeReservedInstancesModificationsCommandOutput) => void
  ): Promise<DescribeReservedInstancesModificationsCommandOutput> | void {
    const command = new DescribeReservedInstancesModificationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes Reserved Instance offerings that are available for purchase. With Reserved Instances, you purchase the right to launch instances for a period of time. During that time period, you do not receive insufficient capacity errors, and you pay a lower usage rate than the rate charged for On-Demand instances for the actual time used.</p>
   *          <p>If you have listed your own Reserved Instances for sale in the Reserved Instance Marketplace, they will be excluded from these results. This is to ensure that you do not purchase your own Reserved Instances.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a>
   * 				in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public describeReservedInstancesOfferings(
    args: DescribeReservedInstancesOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedInstancesOfferingsCommandOutput>;
  public describeReservedInstancesOfferings(
    args: DescribeReservedInstancesOfferingsCommandInput,
    cb: (err: any, data?: DescribeReservedInstancesOfferingsCommandOutput) => void
  ): void;
  public describeReservedInstancesOfferings(
    args: DescribeReservedInstancesOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedInstancesOfferingsCommandOutput) => void
  ): void;
  public describeReservedInstancesOfferings(
    args: DescribeReservedInstancesOfferingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeReservedInstancesOfferingsCommandOutput) => void),
    cb?: (err: any, data?: DescribeReservedInstancesOfferingsCommandOutput) => void
  ): Promise<DescribeReservedInstancesOfferingsCommandOutput> | void {
    const command = new DescribeReservedInstancesOfferingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more of your route tables.</p>
   *          <p>Each subnet in your VPC must be associated with a route table. If a subnet is not explicitly associated with any route table, it is implicitly associated with the main route table. This command does not return the subnet ID for implicit associations.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route Tables</a> in the
   * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  public describeRouteTables(
    args: DescribeRouteTablesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRouteTablesCommandOutput>;
  public describeRouteTables(
    args: DescribeRouteTablesCommandInput,
    cb: (err: any, data?: DescribeRouteTablesCommandOutput) => void
  ): void;
  public describeRouteTables(
    args: DescribeRouteTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRouteTablesCommandOutput) => void
  ): void;
  public describeRouteTables(
    args: DescribeRouteTablesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRouteTablesCommandOutput) => void),
    cb?: (err: any, data?: DescribeRouteTablesCommandOutput) => void
  ): Promise<DescribeRouteTablesCommandOutput> | void {
    const command = new DescribeRouteTablesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Finds available schedules that meet the specified criteria.</p>
   *          <p>You can search for an available schedule no more than 3 months in advance. You must meet the minimum required duration of 1,200 hours per year. For example, the minimum daily schedule is 4 hours, the minimum weekly schedule is 24 hours, and the minimum monthly schedule is 100 hours.</p>
   *          <p>After you find a schedule that meets your needs, call <a>PurchaseScheduledInstances</a>
   *          to purchase Scheduled Instances with that schedule.</p>
   */
  public describeScheduledInstanceAvailability(
    args: DescribeScheduledInstanceAvailabilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScheduledInstanceAvailabilityCommandOutput>;
  public describeScheduledInstanceAvailability(
    args: DescribeScheduledInstanceAvailabilityCommandInput,
    cb: (err: any, data?: DescribeScheduledInstanceAvailabilityCommandOutput) => void
  ): void;
  public describeScheduledInstanceAvailability(
    args: DescribeScheduledInstanceAvailabilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScheduledInstanceAvailabilityCommandOutput) => void
  ): void;
  public describeScheduledInstanceAvailability(
    args: DescribeScheduledInstanceAvailabilityCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeScheduledInstanceAvailabilityCommandOutput) => void),
    cb?: (err: any, data?: DescribeScheduledInstanceAvailabilityCommandOutput) => void
  ): Promise<DescribeScheduledInstanceAvailabilityCommandOutput> | void {
    const command = new DescribeScheduledInstanceAvailabilityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified Scheduled Instances or all your Scheduled Instances.</p>
   */
  public describeScheduledInstances(
    args: DescribeScheduledInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScheduledInstancesCommandOutput>;
  public describeScheduledInstances(
    args: DescribeScheduledInstancesCommandInput,
    cb: (err: any, data?: DescribeScheduledInstancesCommandOutput) => void
  ): void;
  public describeScheduledInstances(
    args: DescribeScheduledInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScheduledInstancesCommandOutput) => void
  ): void;
  public describeScheduledInstances(
    args: DescribeScheduledInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeScheduledInstancesCommandOutput) => void),
    cb?: (err: any, data?: DescribeScheduledInstancesCommandOutput) => void
  ): Promise<DescribeScheduledInstancesCommandOutput> | void {
    const command = new DescribeScheduledInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>[VPC only] Describes the VPCs on the other side of a VPC peering connection that are referencing the security groups you've specified in this request.</p>
   */
  public describeSecurityGroupReferences(
    args: DescribeSecurityGroupReferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSecurityGroupReferencesCommandOutput>;
  public describeSecurityGroupReferences(
    args: DescribeSecurityGroupReferencesCommandInput,
    cb: (err: any, data?: DescribeSecurityGroupReferencesCommandOutput) => void
  ): void;
  public describeSecurityGroupReferences(
    args: DescribeSecurityGroupReferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSecurityGroupReferencesCommandOutput) => void
  ): void;
  public describeSecurityGroupReferences(
    args: DescribeSecurityGroupReferencesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSecurityGroupReferencesCommandOutput) => void),
    cb?: (err: any, data?: DescribeSecurityGroupReferencesCommandOutput) => void
  ): Promise<DescribeSecurityGroupReferencesCommandOutput> | void {
    const command = new DescribeSecurityGroupReferencesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified security groups or all of your security groups.</p>
   *          <p>A security group is for use with instances either in the EC2-Classic platform
   * 				or in a specific VPC. For more information, see
   * 				<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html">Amazon EC2 Security Groups</a> in
   * 				the <i>Amazon Elastic Compute Cloud User Guide</i> and
   * 				<a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html">Security Groups for Your VPC</a> in the
   * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  public describeSecurityGroups(
    args: DescribeSecurityGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSecurityGroupsCommandOutput>;
  public describeSecurityGroups(
    args: DescribeSecurityGroupsCommandInput,
    cb: (err: any, data?: DescribeSecurityGroupsCommandOutput) => void
  ): void;
  public describeSecurityGroups(
    args: DescribeSecurityGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSecurityGroupsCommandOutput) => void
  ): void;
  public describeSecurityGroups(
    args: DescribeSecurityGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSecurityGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeSecurityGroupsCommandOutput) => void
  ): Promise<DescribeSecurityGroupsCommandOutput> | void {
    const command = new DescribeSecurityGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified attribute of the specified snapshot. You can specify only one
   *       attribute at a time.</p>
   *          <p>For more information about EBS snapshots, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html">Amazon EBS snapshots</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public describeSnapshotAttribute(
    args: DescribeSnapshotAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSnapshotAttributeCommandOutput>;
  public describeSnapshotAttribute(
    args: DescribeSnapshotAttributeCommandInput,
    cb: (err: any, data?: DescribeSnapshotAttributeCommandOutput) => void
  ): void;
  public describeSnapshotAttribute(
    args: DescribeSnapshotAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSnapshotAttributeCommandOutput) => void
  ): void;
  public describeSnapshotAttribute(
    args: DescribeSnapshotAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSnapshotAttributeCommandOutput) => void),
    cb?: (err: any, data?: DescribeSnapshotAttributeCommandOutput) => void
  ): Promise<DescribeSnapshotAttributeCommandOutput> | void {
    const command = new DescribeSnapshotAttributeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified EBS snapshots available to you or all of the EBS snapshots
   *       available to you.</p>
   *          <p>The snapshots available to you include public snapshots, private snapshots that you own,
   *       and private snapshots owned by other AWS accounts for which you have explicit create volume
   *       permissions.</p>
   *          <p>The create volume permissions fall into the following categories:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>public</i>: The owner of the snapshot granted create volume
   *           permissions for the snapshot to the <code>all</code> group. All AWS accounts have create
   *           volume permissions for these snapshots.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>explicit</i>: The owner of the snapshot granted create volume
   *           permissions to a specific AWS account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>implicit</i>: An AWS account has implicit create volume permissions
   *           for all snapshots it owns.</p>
   *             </li>
   *          </ul>
   *          <p>The list of snapshots returned can be filtered by specifying snapshot IDs, snapshot
   *       owners, or AWS accounts with create volume permissions. If no options are specified, Amazon
   *       EC2 returns all snapshots for which you have create volume permissions.</p>
   *          <p>If you specify one or more snapshot IDs, only snapshots that have the specified IDs are
   *       returned. If you specify an invalid snapshot ID, an error is returned. If you specify a
   *       snapshot ID for which you do not have access, it is not included in the returned
   *       results.</p>
   *          <p>If you specify one or more snapshot owners using the <code>OwnerIds</code> option, only
   *       snapshots from the specified owners and for which you have access are returned. The results
   *       can include the AWS account IDs of the specified owners, <code>amazon</code> for snapshots
   *       owned by Amazon, or <code>self</code> for snapshots that you own.</p>
   *          <p>If you specify a list of restorable users, only snapshots with create snapshot permissions
   *       for those users are returned. You can specify AWS account IDs (if you own the snapshots),
   *         <code>self</code> for snapshots for which you own or have explicit permissions, or
   *         <code>all</code> for public snapshots.</p>
   *          <p>If you are describing a long list of snapshots, we recommend that you paginate the output to make the
   *       list more manageable. The <code>MaxResults</code> parameter sets the maximum number of results
   *       returned in a single page. If the list of results exceeds your <code>MaxResults</code> value,
   *       then that number of results is returned along with a <code>NextToken</code> value that can be
   *       passed to a subsequent <code>DescribeSnapshots</code> request to retrieve the remaining
   *       results.</p>
   *          <p>To get the state of fast snapshot restores for a snapshot, use <a>DescribeFastSnapshotRestores</a>.</p>
   *          <p>For more information about EBS snapshots, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html">Amazon EBS snapshots</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSnapshotsCommandOutput>;
  public describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    cb: (err: any, data?: DescribeSnapshotsCommandOutput) => void
  ): void;
  public describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSnapshotsCommandOutput) => void
  ): void;
  public describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSnapshotsCommandOutput) => void),
    cb?: (err: any, data?: DescribeSnapshotsCommandOutput) => void
  ): Promise<DescribeSnapshotsCommandOutput> | void {
    const command = new DescribeSnapshotsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the data feed for Spot Instances. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-data-feeds.html">Spot
   *                 Instance data feed</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  public describeSpotDatafeedSubscription(
    args: DescribeSpotDatafeedSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSpotDatafeedSubscriptionCommandOutput>;
  public describeSpotDatafeedSubscription(
    args: DescribeSpotDatafeedSubscriptionCommandInput,
    cb: (err: any, data?: DescribeSpotDatafeedSubscriptionCommandOutput) => void
  ): void;
  public describeSpotDatafeedSubscription(
    args: DescribeSpotDatafeedSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSpotDatafeedSubscriptionCommandOutput) => void
  ): void;
  public describeSpotDatafeedSubscription(
    args: DescribeSpotDatafeedSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSpotDatafeedSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: DescribeSpotDatafeedSubscriptionCommandOutput) => void
  ): Promise<DescribeSpotDatafeedSubscriptionCommandOutput> | void {
    const command = new DescribeSpotDatafeedSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the running instances for the specified Spot Fleet.</p>
   */
  public describeSpotFleetInstances(
    args: DescribeSpotFleetInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSpotFleetInstancesCommandOutput>;
  public describeSpotFleetInstances(
    args: DescribeSpotFleetInstancesCommandInput,
    cb: (err: any, data?: DescribeSpotFleetInstancesCommandOutput) => void
  ): void;
  public describeSpotFleetInstances(
    args: DescribeSpotFleetInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSpotFleetInstancesCommandOutput) => void
  ): void;
  public describeSpotFleetInstances(
    args: DescribeSpotFleetInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSpotFleetInstancesCommandOutput) => void),
    cb?: (err: any, data?: DescribeSpotFleetInstancesCommandOutput) => void
  ): Promise<DescribeSpotFleetInstancesCommandOutput> | void {
    const command = new DescribeSpotFleetInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the events for the specified Spot Fleet request during the specified time.</p>
   *          <p>Spot Fleet events are delayed by up to 30 seconds before they can be described. This ensures that you can query
   *           by the last evaluated time and not miss a recorded event. Spot Fleet events are available for 48 hours.</p>
   */
  public describeSpotFleetRequestHistory(
    args: DescribeSpotFleetRequestHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSpotFleetRequestHistoryCommandOutput>;
  public describeSpotFleetRequestHistory(
    args: DescribeSpotFleetRequestHistoryCommandInput,
    cb: (err: any, data?: DescribeSpotFleetRequestHistoryCommandOutput) => void
  ): void;
  public describeSpotFleetRequestHistory(
    args: DescribeSpotFleetRequestHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSpotFleetRequestHistoryCommandOutput) => void
  ): void;
  public describeSpotFleetRequestHistory(
    args: DescribeSpotFleetRequestHistoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSpotFleetRequestHistoryCommandOutput) => void),
    cb?: (err: any, data?: DescribeSpotFleetRequestHistoryCommandOutput) => void
  ): Promise<DescribeSpotFleetRequestHistoryCommandOutput> | void {
    const command = new DescribeSpotFleetRequestHistoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes your Spot Fleet requests.</p>
   *          <p>Spot Fleet requests are deleted 48 hours after they are canceled and their instances are terminated.</p>
   */
  public describeSpotFleetRequests(
    args: DescribeSpotFleetRequestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSpotFleetRequestsCommandOutput>;
  public describeSpotFleetRequests(
    args: DescribeSpotFleetRequestsCommandInput,
    cb: (err: any, data?: DescribeSpotFleetRequestsCommandOutput) => void
  ): void;
  public describeSpotFleetRequests(
    args: DescribeSpotFleetRequestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSpotFleetRequestsCommandOutput) => void
  ): void;
  public describeSpotFleetRequests(
    args: DescribeSpotFleetRequestsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSpotFleetRequestsCommandOutput) => void),
    cb?: (err: any, data?: DescribeSpotFleetRequestsCommandOutput) => void
  ): Promise<DescribeSpotFleetRequestsCommandOutput> | void {
    const command = new DescribeSpotFleetRequestsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified Spot Instance requests.</p>
   *          <p>You can use <code>DescribeSpotInstanceRequests</code> to find a
   * 		running Spot Instance by examining the response. If the status of
   * 		the Spot Instance is <code>fulfilled</code>, the instance ID
   * 		appears in the response and contains the identifier of the instance.
   * 		Alternatively, you can use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances">DescribeInstances</a> with a filter to
   * 		look for instances where the instance lifecycle is <code>spot</code>.</p>
   *         <p>We recommend that you set <code>MaxResults</code> to a value between 5 and 1000 to
   *             limit the number of results returned. This paginates the output, which makes the list
   *             more manageable and returns the results faster. If the list of results exceeds your
   *                 <code>MaxResults</code> value, then that number of results is returned along with a
   *                 <code>NextToken</code> value that can be passed to a subsequent
   *                 <code>DescribeSpotInstanceRequests</code> request to retrieve the remaining
   *             results.</p>
   * 	        <p>Spot Instance requests are deleted four hours after they are canceled and their instances
   *             are terminated.</p>
   */
  public describeSpotInstanceRequests(
    args: DescribeSpotInstanceRequestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSpotInstanceRequestsCommandOutput>;
  public describeSpotInstanceRequests(
    args: DescribeSpotInstanceRequestsCommandInput,
    cb: (err: any, data?: DescribeSpotInstanceRequestsCommandOutput) => void
  ): void;
  public describeSpotInstanceRequests(
    args: DescribeSpotInstanceRequestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSpotInstanceRequestsCommandOutput) => void
  ): void;
  public describeSpotInstanceRequests(
    args: DescribeSpotInstanceRequestsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSpotInstanceRequestsCommandOutput) => void),
    cb?: (err: any, data?: DescribeSpotInstanceRequestsCommandOutput) => void
  ): Promise<DescribeSpotInstanceRequestsCommandOutput> | void {
    const command = new DescribeSpotInstanceRequestsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the Spot price history. For more information, see
   * 		<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances-history.html">Spot Instance pricing history</a>
   *         in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   * 	        <p>When you specify a start and end time, this operation returns the prices of the instance types within the time range that you specified and the time when the price changed.
   * 	        The price is valid within the time period that you specified; the response merely indicates the last time that the price changed.</p>
   */
  public describeSpotPriceHistory(
    args: DescribeSpotPriceHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSpotPriceHistoryCommandOutput>;
  public describeSpotPriceHistory(
    args: DescribeSpotPriceHistoryCommandInput,
    cb: (err: any, data?: DescribeSpotPriceHistoryCommandOutput) => void
  ): void;
  public describeSpotPriceHistory(
    args: DescribeSpotPriceHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSpotPriceHistoryCommandOutput) => void
  ): void;
  public describeSpotPriceHistory(
    args: DescribeSpotPriceHistoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSpotPriceHistoryCommandOutput) => void),
    cb?: (err: any, data?: DescribeSpotPriceHistoryCommandOutput) => void
  ): Promise<DescribeSpotPriceHistoryCommandOutput> | void {
    const command = new DescribeSpotPriceHistoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>[VPC only] Describes the stale security group rules for security groups in a specified VPC. Rules are stale when they reference a deleted security group in a peer VPC, or a security group in a peer VPC for which the VPC peering connection has been deleted.</p>
   */
  public describeStaleSecurityGroups(
    args: DescribeStaleSecurityGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStaleSecurityGroupsCommandOutput>;
  public describeStaleSecurityGroups(
    args: DescribeStaleSecurityGroupsCommandInput,
    cb: (err: any, data?: DescribeStaleSecurityGroupsCommandOutput) => void
  ): void;
  public describeStaleSecurityGroups(
    args: DescribeStaleSecurityGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStaleSecurityGroupsCommandOutput) => void
  ): void;
  public describeStaleSecurityGroups(
    args: DescribeStaleSecurityGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeStaleSecurityGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeStaleSecurityGroupsCommandOutput) => void
  ): Promise<DescribeStaleSecurityGroupsCommandOutput> | void {
    const command = new DescribeStaleSecurityGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more of your subnets.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">Your VPC and Subnets</a> in the
   * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  public describeSubnets(
    args: DescribeSubnetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSubnetsCommandOutput>;
  public describeSubnets(
    args: DescribeSubnetsCommandInput,
    cb: (err: any, data?: DescribeSubnetsCommandOutput) => void
  ): void;
  public describeSubnets(
    args: DescribeSubnetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSubnetsCommandOutput) => void
  ): void;
  public describeSubnets(
    args: DescribeSubnetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSubnetsCommandOutput) => void),
    cb?: (err: any, data?: DescribeSubnetsCommandOutput) => void
  ): Promise<DescribeSubnetsCommandOutput> | void {
    const command = new DescribeSubnetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified tags for your EC2 resources.</p>
   *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging Your Resources</a> in the
   *      <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public describeTags(
    args: DescribeTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTagsCommandOutput>;
  public describeTags(args: DescribeTagsCommandInput, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
  public describeTags(
    args: DescribeTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;
  public describeTags(
    args: DescribeTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTagsCommandOutput) => void),
    cb?: (err: any, data?: DescribeTagsCommandOutput) => void
  ): Promise<DescribeTagsCommandOutput> | void {
    const command = new DescribeTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more Traffic Mirror filters.</p>
   */
  public describeTrafficMirrorFilters(
    args: DescribeTrafficMirrorFiltersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrafficMirrorFiltersCommandOutput>;
  public describeTrafficMirrorFilters(
    args: DescribeTrafficMirrorFiltersCommandInput,
    cb: (err: any, data?: DescribeTrafficMirrorFiltersCommandOutput) => void
  ): void;
  public describeTrafficMirrorFilters(
    args: DescribeTrafficMirrorFiltersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrafficMirrorFiltersCommandOutput) => void
  ): void;
  public describeTrafficMirrorFilters(
    args: DescribeTrafficMirrorFiltersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTrafficMirrorFiltersCommandOutput) => void),
    cb?: (err: any, data?: DescribeTrafficMirrorFiltersCommandOutput) => void
  ): Promise<DescribeTrafficMirrorFiltersCommandOutput> | void {
    const command = new DescribeTrafficMirrorFiltersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more Traffic Mirror sessions. By default, all Traffic Mirror sessions are described. Alternatively, you can filter the results.</p>
   */
  public describeTrafficMirrorSessions(
    args: DescribeTrafficMirrorSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrafficMirrorSessionsCommandOutput>;
  public describeTrafficMirrorSessions(
    args: DescribeTrafficMirrorSessionsCommandInput,
    cb: (err: any, data?: DescribeTrafficMirrorSessionsCommandOutput) => void
  ): void;
  public describeTrafficMirrorSessions(
    args: DescribeTrafficMirrorSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrafficMirrorSessionsCommandOutput) => void
  ): void;
  public describeTrafficMirrorSessions(
    args: DescribeTrafficMirrorSessionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTrafficMirrorSessionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeTrafficMirrorSessionsCommandOutput) => void
  ): Promise<DescribeTrafficMirrorSessionsCommandOutput> | void {
    const command = new DescribeTrafficMirrorSessionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Information about one or more Traffic Mirror targets.</p>
   */
  public describeTrafficMirrorTargets(
    args: DescribeTrafficMirrorTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrafficMirrorTargetsCommandOutput>;
  public describeTrafficMirrorTargets(
    args: DescribeTrafficMirrorTargetsCommandInput,
    cb: (err: any, data?: DescribeTrafficMirrorTargetsCommandOutput) => void
  ): void;
  public describeTrafficMirrorTargets(
    args: DescribeTrafficMirrorTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrafficMirrorTargetsCommandOutput) => void
  ): void;
  public describeTrafficMirrorTargets(
    args: DescribeTrafficMirrorTargetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTrafficMirrorTargetsCommandOutput) => void),
    cb?: (err: any, data?: DescribeTrafficMirrorTargetsCommandOutput) => void
  ): Promise<DescribeTrafficMirrorTargetsCommandOutput> | void {
    const command = new DescribeTrafficMirrorTargetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more attachments between resources and transit gateways. By default, all attachments are described.
   *          Alternatively, you can filter the results by attachment ID, attachment state, resource ID, or resource owner.</p>
   */
  public describeTransitGatewayAttachments(
    args: DescribeTransitGatewayAttachmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTransitGatewayAttachmentsCommandOutput>;
  public describeTransitGatewayAttachments(
    args: DescribeTransitGatewayAttachmentsCommandInput,
    cb: (err: any, data?: DescribeTransitGatewayAttachmentsCommandOutput) => void
  ): void;
  public describeTransitGatewayAttachments(
    args: DescribeTransitGatewayAttachmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTransitGatewayAttachmentsCommandOutput) => void
  ): void;
  public describeTransitGatewayAttachments(
    args: DescribeTransitGatewayAttachmentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTransitGatewayAttachmentsCommandOutput) => void),
    cb?: (err: any, data?: DescribeTransitGatewayAttachmentsCommandOutput) => void
  ): Promise<DescribeTransitGatewayAttachmentsCommandOutput> | void {
    const command = new DescribeTransitGatewayAttachmentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more Connect peers.</p>
   */
  public describeTransitGatewayConnectPeers(
    args: DescribeTransitGatewayConnectPeersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTransitGatewayConnectPeersCommandOutput>;
  public describeTransitGatewayConnectPeers(
    args: DescribeTransitGatewayConnectPeersCommandInput,
    cb: (err: any, data?: DescribeTransitGatewayConnectPeersCommandOutput) => void
  ): void;
  public describeTransitGatewayConnectPeers(
    args: DescribeTransitGatewayConnectPeersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTransitGatewayConnectPeersCommandOutput) => void
  ): void;
  public describeTransitGatewayConnectPeers(
    args: DescribeTransitGatewayConnectPeersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTransitGatewayConnectPeersCommandOutput) => void),
    cb?: (err: any, data?: DescribeTransitGatewayConnectPeersCommandOutput) => void
  ): Promise<DescribeTransitGatewayConnectPeersCommandOutput> | void {
    const command = new DescribeTransitGatewayConnectPeersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more Connect attachments.</p>
   */
  public describeTransitGatewayConnects(
    args: DescribeTransitGatewayConnectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTransitGatewayConnectsCommandOutput>;
  public describeTransitGatewayConnects(
    args: DescribeTransitGatewayConnectsCommandInput,
    cb: (err: any, data?: DescribeTransitGatewayConnectsCommandOutput) => void
  ): void;
  public describeTransitGatewayConnects(
    args: DescribeTransitGatewayConnectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTransitGatewayConnectsCommandOutput) => void
  ): void;
  public describeTransitGatewayConnects(
    args: DescribeTransitGatewayConnectsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTransitGatewayConnectsCommandOutput) => void),
    cb?: (err: any, data?: DescribeTransitGatewayConnectsCommandOutput) => void
  ): Promise<DescribeTransitGatewayConnectsCommandOutput> | void {
    const command = new DescribeTransitGatewayConnectsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more transit gateway multicast domains.</p>
   */
  public describeTransitGatewayMulticastDomains(
    args: DescribeTransitGatewayMulticastDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTransitGatewayMulticastDomainsCommandOutput>;
  public describeTransitGatewayMulticastDomains(
    args: DescribeTransitGatewayMulticastDomainsCommandInput,
    cb: (err: any, data?: DescribeTransitGatewayMulticastDomainsCommandOutput) => void
  ): void;
  public describeTransitGatewayMulticastDomains(
    args: DescribeTransitGatewayMulticastDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTransitGatewayMulticastDomainsCommandOutput) => void
  ): void;
  public describeTransitGatewayMulticastDomains(
    args: DescribeTransitGatewayMulticastDomainsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeTransitGatewayMulticastDomainsCommandOutput) => void),
    cb?: (err: any, data?: DescribeTransitGatewayMulticastDomainsCommandOutput) => void
  ): Promise<DescribeTransitGatewayMulticastDomainsCommandOutput> | void {
    const command = new DescribeTransitGatewayMulticastDomainsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes your transit gateway peering attachments.</p>
   */
  public describeTransitGatewayPeeringAttachments(
    args: DescribeTransitGatewayPeeringAttachmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTransitGatewayPeeringAttachmentsCommandOutput>;
  public describeTransitGatewayPeeringAttachments(
    args: DescribeTransitGatewayPeeringAttachmentsCommandInput,
    cb: (err: any, data?: DescribeTransitGatewayPeeringAttachmentsCommandOutput) => void
  ): void;
  public describeTransitGatewayPeeringAttachments(
    args: DescribeTransitGatewayPeeringAttachmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTransitGatewayPeeringAttachmentsCommandOutput) => void
  ): void;
  public describeTransitGatewayPeeringAttachments(
    args: DescribeTransitGatewayPeeringAttachmentsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeTransitGatewayPeeringAttachmentsCommandOutput) => void),
    cb?: (err: any, data?: DescribeTransitGatewayPeeringAttachmentsCommandOutput) => void
  ): Promise<DescribeTransitGatewayPeeringAttachmentsCommandOutput> | void {
    const command = new DescribeTransitGatewayPeeringAttachmentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more transit gateway route tables. By default, all transit gateway route tables are described.
   *          Alternatively, you can filter the results.</p>
   */
  public describeTransitGatewayRouteTables(
    args: DescribeTransitGatewayRouteTablesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTransitGatewayRouteTablesCommandOutput>;
  public describeTransitGatewayRouteTables(
    args: DescribeTransitGatewayRouteTablesCommandInput,
    cb: (err: any, data?: DescribeTransitGatewayRouteTablesCommandOutput) => void
  ): void;
  public describeTransitGatewayRouteTables(
    args: DescribeTransitGatewayRouteTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTransitGatewayRouteTablesCommandOutput) => void
  ): void;
  public describeTransitGatewayRouteTables(
    args: DescribeTransitGatewayRouteTablesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTransitGatewayRouteTablesCommandOutput) => void),
    cb?: (err: any, data?: DescribeTransitGatewayRouteTablesCommandOutput) => void
  ): Promise<DescribeTransitGatewayRouteTablesCommandOutput> | void {
    const command = new DescribeTransitGatewayRouteTablesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more transit gateways. By default, all transit gateways are described. Alternatively, you can
   *          filter the results.</p>
   */
  public describeTransitGateways(
    args: DescribeTransitGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTransitGatewaysCommandOutput>;
  public describeTransitGateways(
    args: DescribeTransitGatewaysCommandInput,
    cb: (err: any, data?: DescribeTransitGatewaysCommandOutput) => void
  ): void;
  public describeTransitGateways(
    args: DescribeTransitGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTransitGatewaysCommandOutput) => void
  ): void;
  public describeTransitGateways(
    args: DescribeTransitGatewaysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTransitGatewaysCommandOutput) => void),
    cb?: (err: any, data?: DescribeTransitGatewaysCommandOutput) => void
  ): Promise<DescribeTransitGatewaysCommandOutput> | void {
    const command = new DescribeTransitGatewaysCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more VPC attachments. By default, all VPC attachments are described.
   *          Alternatively, you can filter the results.</p>
   */
  public describeTransitGatewayVpcAttachments(
    args: DescribeTransitGatewayVpcAttachmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTransitGatewayVpcAttachmentsCommandOutput>;
  public describeTransitGatewayVpcAttachments(
    args: DescribeTransitGatewayVpcAttachmentsCommandInput,
    cb: (err: any, data?: DescribeTransitGatewayVpcAttachmentsCommandOutput) => void
  ): void;
  public describeTransitGatewayVpcAttachments(
    args: DescribeTransitGatewayVpcAttachmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTransitGatewayVpcAttachmentsCommandOutput) => void
  ): void;
  public describeTransitGatewayVpcAttachments(
    args: DescribeTransitGatewayVpcAttachmentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTransitGatewayVpcAttachmentsCommandOutput) => void),
    cb?: (err: any, data?: DescribeTransitGatewayVpcAttachmentsCommandOutput) => void
  ): Promise<DescribeTransitGatewayVpcAttachmentsCommandOutput> | void {
    const command = new DescribeTransitGatewayVpcAttachmentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified attribute of the specified volume. You can specify only one
   *       attribute at a time.</p>
   *          <p>For more information about EBS volumes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumes.html">Amazon EBS volumes</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public describeVolumeAttribute(
    args: DescribeVolumeAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVolumeAttributeCommandOutput>;
  public describeVolumeAttribute(
    args: DescribeVolumeAttributeCommandInput,
    cb: (err: any, data?: DescribeVolumeAttributeCommandOutput) => void
  ): void;
  public describeVolumeAttribute(
    args: DescribeVolumeAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVolumeAttributeCommandOutput) => void
  ): void;
  public describeVolumeAttribute(
    args: DescribeVolumeAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVolumeAttributeCommandOutput) => void),
    cb?: (err: any, data?: DescribeVolumeAttributeCommandOutput) => void
  ): Promise<DescribeVolumeAttributeCommandOutput> | void {
    const command = new DescribeVolumeAttributeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified EBS volumes or all of your EBS volumes.</p>
   *          <p>If you are describing a long list of volumes, we recommend that you paginate the output to make the list
   *       more manageable. The <code>MaxResults</code> parameter sets the maximum number of results
   *       returned in a single page. If the list of results exceeds your <code>MaxResults</code> value,
   *       then that number of results is returned along with a <code>NextToken</code> value that can be
   *       passed to a subsequent <code>DescribeVolumes</code> request to retrieve the remaining
   *       results.</p>
   *          <p>For more information about EBS volumes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumes.html">Amazon EBS volumes</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public describeVolumes(
    args: DescribeVolumesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVolumesCommandOutput>;
  public describeVolumes(
    args: DescribeVolumesCommandInput,
    cb: (err: any, data?: DescribeVolumesCommandOutput) => void
  ): void;
  public describeVolumes(
    args: DescribeVolumesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVolumesCommandOutput) => void
  ): void;
  public describeVolumes(
    args: DescribeVolumesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVolumesCommandOutput) => void),
    cb?: (err: any, data?: DescribeVolumesCommandOutput) => void
  ): Promise<DescribeVolumesCommandOutput> | void {
    const command = new DescribeVolumesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the most recent volume modification request for the specified EBS volumes.</p>
   *          <p>If a volume has never been modified, some information in the output will be null.
   *       If a volume has been modified more than once, the output includes only the most
   *       recent modification request.</p>
   *          <p>You can also use CloudWatch Events to check the status of a modification to an EBS
   *       volume. For information about CloudWatch Events, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/">Amazon CloudWatch Events User Guide</a>. For more information, see
   *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-expand-volume.html#monitoring_mods">Monitoring volume modifications</a> in the
   *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public describeVolumesModifications(
    args: DescribeVolumesModificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVolumesModificationsCommandOutput>;
  public describeVolumesModifications(
    args: DescribeVolumesModificationsCommandInput,
    cb: (err: any, data?: DescribeVolumesModificationsCommandOutput) => void
  ): void;
  public describeVolumesModifications(
    args: DescribeVolumesModificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVolumesModificationsCommandOutput) => void
  ): void;
  public describeVolumesModifications(
    args: DescribeVolumesModificationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVolumesModificationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeVolumesModificationsCommandOutput) => void
  ): Promise<DescribeVolumesModificationsCommandOutput> | void {
    const command = new DescribeVolumesModificationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the status of the specified volumes. Volume status provides the result of the
   *       checks performed on your volumes to determine events that can impair the performance of your
   *       volumes. The performance of a volume can be affected if an issue occurs on the volume's
   *       underlying host. If the volume's underlying host experiences a power outage or system issue,
   *       after the system is restored, there could be data inconsistencies on the volume. Volume events
   *       notify you if this occurs. Volume actions notify you if any action needs to be taken in
   *       response to the event.</p>
   *          <p>The <code>DescribeVolumeStatus</code> operation provides the following information about
   *       the specified volumes:</p>
   *          <p>
   *             <i>Status</i>: Reflects the current status of the volume. The possible
   *       values are <code>ok</code>, <code>impaired</code> , <code>warning</code>, or
   *         <code>insufficient-data</code>. If all checks pass, the overall status of the volume is
   *         <code>ok</code>. If the check fails, the overall status is <code>impaired</code>. If the
   *       status is <code>insufficient-data</code>, then the checks might still be taking place on your
   *       volume at the time. We recommend that you retry the request. For more information about volume
   *       status, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-volume-status.html">Monitoring the status of your volumes</a> in the
   *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>
   *             <i>Events</i>: Reflect the cause of a volume status and might require you to
   *       take action. For example, if your volume returns an <code>impaired</code> status, then the
   *       volume event might be <code>potential-data-inconsistency</code>. This means that your volume
   *       has been affected by an issue with the underlying host, has all I/O operations disabled, and
   *       might have inconsistent data.</p>
   *          <p>
   *             <i>Actions</i>: Reflect the actions you might have to take in response to an
   *       event. For example, if the status of the volume is <code>impaired</code> and the volume event
   *       shows <code>potential-data-inconsistency</code>, then the action shows
   *         <code>enable-volume-io</code>. This means that you may want to enable the I/O operations for
   *       the volume by calling the <a>EnableVolumeIO</a> action and then check the volume
   *       for data consistency.</p>
   *          <p>Volume status is based on the volume status checks, and does not reflect the volume state.
   *       Therefore, volume status does not indicate volumes in the <code>error</code> state (for
   *       example, when a volume is incapable of accepting I/O.)</p>
   */
  public describeVolumeStatus(
    args: DescribeVolumeStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVolumeStatusCommandOutput>;
  public describeVolumeStatus(
    args: DescribeVolumeStatusCommandInput,
    cb: (err: any, data?: DescribeVolumeStatusCommandOutput) => void
  ): void;
  public describeVolumeStatus(
    args: DescribeVolumeStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVolumeStatusCommandOutput) => void
  ): void;
  public describeVolumeStatus(
    args: DescribeVolumeStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVolumeStatusCommandOutput) => void),
    cb?: (err: any, data?: DescribeVolumeStatusCommandOutput) => void
  ): Promise<DescribeVolumeStatusCommandOutput> | void {
    const command = new DescribeVolumeStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified attribute of the specified VPC. You can specify only one attribute at a time.</p>
   */
  public describeVpcAttribute(
    args: DescribeVpcAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcAttributeCommandOutput>;
  public describeVpcAttribute(
    args: DescribeVpcAttributeCommandInput,
    cb: (err: any, data?: DescribeVpcAttributeCommandOutput) => void
  ): void;
  public describeVpcAttribute(
    args: DescribeVpcAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcAttributeCommandOutput) => void
  ): void;
  public describeVpcAttribute(
    args: DescribeVpcAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVpcAttributeCommandOutput) => void),
    cb?: (err: any, data?: DescribeVpcAttributeCommandOutput) => void
  ): Promise<DescribeVpcAttributeCommandOutput> | void {
    const command = new DescribeVpcAttributeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the ClassicLink status of one or more VPCs.</p>
   */
  public describeVpcClassicLink(
    args: DescribeVpcClassicLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcClassicLinkCommandOutput>;
  public describeVpcClassicLink(
    args: DescribeVpcClassicLinkCommandInput,
    cb: (err: any, data?: DescribeVpcClassicLinkCommandOutput) => void
  ): void;
  public describeVpcClassicLink(
    args: DescribeVpcClassicLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcClassicLinkCommandOutput) => void
  ): void;
  public describeVpcClassicLink(
    args: DescribeVpcClassicLinkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVpcClassicLinkCommandOutput) => void),
    cb?: (err: any, data?: DescribeVpcClassicLinkCommandOutput) => void
  ): Promise<DescribeVpcClassicLinkCommandOutput> | void {
    const command = new DescribeVpcClassicLinkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the ClassicLink DNS support status of one or more VPCs. If enabled, the DNS
   *             hostname of a linked EC2-Classic instance resolves to its private IP address when
   *             addressed from an instance in the VPC to which it's linked. Similarly, the DNS hostname
   *             of an instance in a VPC resolves to its private IP address when addressed from a linked
   *             EC2-Classic instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public describeVpcClassicLinkDnsSupport(
    args: DescribeVpcClassicLinkDnsSupportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcClassicLinkDnsSupportCommandOutput>;
  public describeVpcClassicLinkDnsSupport(
    args: DescribeVpcClassicLinkDnsSupportCommandInput,
    cb: (err: any, data?: DescribeVpcClassicLinkDnsSupportCommandOutput) => void
  ): void;
  public describeVpcClassicLinkDnsSupport(
    args: DescribeVpcClassicLinkDnsSupportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcClassicLinkDnsSupportCommandOutput) => void
  ): void;
  public describeVpcClassicLinkDnsSupport(
    args: DescribeVpcClassicLinkDnsSupportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVpcClassicLinkDnsSupportCommandOutput) => void),
    cb?: (err: any, data?: DescribeVpcClassicLinkDnsSupportCommandOutput) => void
  ): Promise<DescribeVpcClassicLinkDnsSupportCommandOutput> | void {
    const command = new DescribeVpcClassicLinkDnsSupportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the connection notifications for VPC endpoints and VPC endpoint
   *             services.</p>
   */
  public describeVpcEndpointConnectionNotifications(
    args: DescribeVpcEndpointConnectionNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcEndpointConnectionNotificationsCommandOutput>;
  public describeVpcEndpointConnectionNotifications(
    args: DescribeVpcEndpointConnectionNotificationsCommandInput,
    cb: (err: any, data?: DescribeVpcEndpointConnectionNotificationsCommandOutput) => void
  ): void;
  public describeVpcEndpointConnectionNotifications(
    args: DescribeVpcEndpointConnectionNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcEndpointConnectionNotificationsCommandOutput) => void
  ): void;
  public describeVpcEndpointConnectionNotifications(
    args: DescribeVpcEndpointConnectionNotificationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeVpcEndpointConnectionNotificationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeVpcEndpointConnectionNotificationsCommandOutput) => void
  ): Promise<DescribeVpcEndpointConnectionNotificationsCommandOutput> | void {
    const command = new DescribeVpcEndpointConnectionNotificationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the VPC endpoint connections to your VPC endpoint services, including any
   *             endpoints that are pending your acceptance.</p>
   */
  public describeVpcEndpointConnections(
    args: DescribeVpcEndpointConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcEndpointConnectionsCommandOutput>;
  public describeVpcEndpointConnections(
    args: DescribeVpcEndpointConnectionsCommandInput,
    cb: (err: any, data?: DescribeVpcEndpointConnectionsCommandOutput) => void
  ): void;
  public describeVpcEndpointConnections(
    args: DescribeVpcEndpointConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcEndpointConnectionsCommandOutput) => void
  ): void;
  public describeVpcEndpointConnections(
    args: DescribeVpcEndpointConnectionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVpcEndpointConnectionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeVpcEndpointConnectionsCommandOutput) => void
  ): Promise<DescribeVpcEndpointConnectionsCommandOutput> | void {
    const command = new DescribeVpcEndpointConnectionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more of your VPC endpoints.</p>
   */
  public describeVpcEndpoints(
    args: DescribeVpcEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcEndpointsCommandOutput>;
  public describeVpcEndpoints(
    args: DescribeVpcEndpointsCommandInput,
    cb: (err: any, data?: DescribeVpcEndpointsCommandOutput) => void
  ): void;
  public describeVpcEndpoints(
    args: DescribeVpcEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcEndpointsCommandOutput) => void
  ): void;
  public describeVpcEndpoints(
    args: DescribeVpcEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVpcEndpointsCommandOutput) => void),
    cb?: (err: any, data?: DescribeVpcEndpointsCommandOutput) => void
  ): Promise<DescribeVpcEndpointsCommandOutput> | void {
    const command = new DescribeVpcEndpointsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the VPC endpoint service configurations in your account (your services).</p>
   */
  public describeVpcEndpointServiceConfigurations(
    args: DescribeVpcEndpointServiceConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcEndpointServiceConfigurationsCommandOutput>;
  public describeVpcEndpointServiceConfigurations(
    args: DescribeVpcEndpointServiceConfigurationsCommandInput,
    cb: (err: any, data?: DescribeVpcEndpointServiceConfigurationsCommandOutput) => void
  ): void;
  public describeVpcEndpointServiceConfigurations(
    args: DescribeVpcEndpointServiceConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcEndpointServiceConfigurationsCommandOutput) => void
  ): void;
  public describeVpcEndpointServiceConfigurations(
    args: DescribeVpcEndpointServiceConfigurationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeVpcEndpointServiceConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeVpcEndpointServiceConfigurationsCommandOutput) => void
  ): Promise<DescribeVpcEndpointServiceConfigurationsCommandOutput> | void {
    const command = new DescribeVpcEndpointServiceConfigurationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the principals (service consumers) that are permitted to discover your VPC
   *             endpoint service.</p>
   */
  public describeVpcEndpointServicePermissions(
    args: DescribeVpcEndpointServicePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcEndpointServicePermissionsCommandOutput>;
  public describeVpcEndpointServicePermissions(
    args: DescribeVpcEndpointServicePermissionsCommandInput,
    cb: (err: any, data?: DescribeVpcEndpointServicePermissionsCommandOutput) => void
  ): void;
  public describeVpcEndpointServicePermissions(
    args: DescribeVpcEndpointServicePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcEndpointServicePermissionsCommandOutput) => void
  ): void;
  public describeVpcEndpointServicePermissions(
    args: DescribeVpcEndpointServicePermissionsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeVpcEndpointServicePermissionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeVpcEndpointServicePermissionsCommandOutput) => void
  ): Promise<DescribeVpcEndpointServicePermissionsCommandOutput> | void {
    const command = new DescribeVpcEndpointServicePermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes available services to which you can create a VPC endpoint.</p>
   *         <p>When the service provider  and the consumer have different accounts  multiple
   *             Availability Zones, and the consumer views the VPC endpoint service information, the
   *             response only includes the common Availability Zones. For example, when the service
   *             provider account uses <code>us-east-1a</code> and <code>us-east-1c</code> and the
   *             consumer uses <code>us-east-1a</code> and us-east-1a and us-east-1b, the response
   *             includes the VPC endpoint services in the common Availability Zone,
   *                 <code>us-east-1a</code>.</p>
   */
  public describeVpcEndpointServices(
    args: DescribeVpcEndpointServicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcEndpointServicesCommandOutput>;
  public describeVpcEndpointServices(
    args: DescribeVpcEndpointServicesCommandInput,
    cb: (err: any, data?: DescribeVpcEndpointServicesCommandOutput) => void
  ): void;
  public describeVpcEndpointServices(
    args: DescribeVpcEndpointServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcEndpointServicesCommandOutput) => void
  ): void;
  public describeVpcEndpointServices(
    args: DescribeVpcEndpointServicesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVpcEndpointServicesCommandOutput) => void),
    cb?: (err: any, data?: DescribeVpcEndpointServicesCommandOutput) => void
  ): Promise<DescribeVpcEndpointServicesCommandOutput> | void {
    const command = new DescribeVpcEndpointServicesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more of your VPC peering connections.</p>
   */
  public describeVpcPeeringConnections(
    args: DescribeVpcPeeringConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcPeeringConnectionsCommandOutput>;
  public describeVpcPeeringConnections(
    args: DescribeVpcPeeringConnectionsCommandInput,
    cb: (err: any, data?: DescribeVpcPeeringConnectionsCommandOutput) => void
  ): void;
  public describeVpcPeeringConnections(
    args: DescribeVpcPeeringConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcPeeringConnectionsCommandOutput) => void
  ): void;
  public describeVpcPeeringConnections(
    args: DescribeVpcPeeringConnectionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVpcPeeringConnectionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeVpcPeeringConnectionsCommandOutput) => void
  ): Promise<DescribeVpcPeeringConnectionsCommandOutput> | void {
    const command = new DescribeVpcPeeringConnectionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more of your VPCs.</p>
   */
  public describeVpcs(
    args: DescribeVpcsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcsCommandOutput>;
  public describeVpcs(args: DescribeVpcsCommandInput, cb: (err: any, data?: DescribeVpcsCommandOutput) => void): void;
  public describeVpcs(
    args: DescribeVpcsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcsCommandOutput) => void
  ): void;
  public describeVpcs(
    args: DescribeVpcsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVpcsCommandOutput) => void),
    cb?: (err: any, data?: DescribeVpcsCommandOutput) => void
  ): Promise<DescribeVpcsCommandOutput> | void {
    const command = new DescribeVpcsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more of your VPN connections.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
   */
  public describeVpnConnections(
    args: DescribeVpnConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpnConnectionsCommandOutput>;
  public describeVpnConnections(
    args: DescribeVpnConnectionsCommandInput,
    cb: (err: any, data?: DescribeVpnConnectionsCommandOutput) => void
  ): void;
  public describeVpnConnections(
    args: DescribeVpnConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpnConnectionsCommandOutput) => void
  ): void;
  public describeVpnConnections(
    args: DescribeVpnConnectionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVpnConnectionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeVpnConnectionsCommandOutput) => void
  ): Promise<DescribeVpnConnectionsCommandOutput> | void {
    const command = new DescribeVpnConnectionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more of your virtual private gateways.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
   */
  public describeVpnGateways(
    args: DescribeVpnGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpnGatewaysCommandOutput>;
  public describeVpnGateways(
    args: DescribeVpnGatewaysCommandInput,
    cb: (err: any, data?: DescribeVpnGatewaysCommandOutput) => void
  ): void;
  public describeVpnGateways(
    args: DescribeVpnGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpnGatewaysCommandOutput) => void
  ): void;
  public describeVpnGateways(
    args: DescribeVpnGatewaysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVpnGatewaysCommandOutput) => void),
    cb?: (err: any, data?: DescribeVpnGatewaysCommandOutput) => void
  ): Promise<DescribeVpnGatewaysCommandOutput> | void {
    const command = new DescribeVpnGatewaysCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Unlinks (detaches) a linked EC2-Classic instance from a VPC. After the instance has been unlinked, the VPC security groups are no longer associated with it. An instance is automatically unlinked from a VPC when it's stopped.</p>
   */
  public detachClassicLinkVpc(
    args: DetachClassicLinkVpcCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachClassicLinkVpcCommandOutput>;
  public detachClassicLinkVpc(
    args: DetachClassicLinkVpcCommandInput,
    cb: (err: any, data?: DetachClassicLinkVpcCommandOutput) => void
  ): void;
  public detachClassicLinkVpc(
    args: DetachClassicLinkVpcCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachClassicLinkVpcCommandOutput) => void
  ): void;
  public detachClassicLinkVpc(
    args: DetachClassicLinkVpcCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetachClassicLinkVpcCommandOutput) => void),
    cb?: (err: any, data?: DetachClassicLinkVpcCommandOutput) => void
  ): Promise<DetachClassicLinkVpcCommandOutput> | void {
    const command = new DetachClassicLinkVpcCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Detaches an internet gateway from a VPC, disabling connectivity between the internet
   * 			and the VPC. The VPC must not contain any running instances with Elastic IP addresses or
   * 			public IPv4 addresses.</p>
   */
  public detachInternetGateway(
    args: DetachInternetGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachInternetGatewayCommandOutput>;
  public detachInternetGateway(
    args: DetachInternetGatewayCommandInput,
    cb: (err: any, data?: DetachInternetGatewayCommandOutput) => void
  ): void;
  public detachInternetGateway(
    args: DetachInternetGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachInternetGatewayCommandOutput) => void
  ): void;
  public detachInternetGateway(
    args: DetachInternetGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetachInternetGatewayCommandOutput) => void),
    cb?: (err: any, data?: DetachInternetGatewayCommandOutput) => void
  ): Promise<DetachInternetGatewayCommandOutput> | void {
    const command = new DetachInternetGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Detaches a network interface from an instance.</p>
   */
  public detachNetworkInterface(
    args: DetachNetworkInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachNetworkInterfaceCommandOutput>;
  public detachNetworkInterface(
    args: DetachNetworkInterfaceCommandInput,
    cb: (err: any, data?: DetachNetworkInterfaceCommandOutput) => void
  ): void;
  public detachNetworkInterface(
    args: DetachNetworkInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachNetworkInterfaceCommandOutput) => void
  ): void;
  public detachNetworkInterface(
    args: DetachNetworkInterfaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetachNetworkInterfaceCommandOutput) => void),
    cb?: (err: any, data?: DetachNetworkInterfaceCommandOutput) => void
  ): Promise<DetachNetworkInterfaceCommandOutput> | void {
    const command = new DetachNetworkInterfaceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Detaches an EBS volume from an instance. Make sure to unmount any file systems on the
   *       device within your operating system before detaching the volume. Failure to do so can result
   *       in the volume becoming stuck in the <code>busy</code> state while detaching. If this happens,
   *       detachment can be delayed indefinitely until you unmount the volume, force detachment, reboot
   *       the instance, or all three. If an EBS volume is the root device of an instance, it can't be
   *       detached while the instance is running. To detach the root volume, stop the instance
   *       first.</p>
   *          <p>When a volume with an AWS Marketplace product code is detached from an instance, the
   *       product code is no longer associated with the instance.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-detaching-volume.html">Detaching an Amazon EBS volume</a> in the
   *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public detachVolume(
    args: DetachVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachVolumeCommandOutput>;
  public detachVolume(args: DetachVolumeCommandInput, cb: (err: any, data?: DetachVolumeCommandOutput) => void): void;
  public detachVolume(
    args: DetachVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachVolumeCommandOutput) => void
  ): void;
  public detachVolume(
    args: DetachVolumeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetachVolumeCommandOutput) => void),
    cb?: (err: any, data?: DetachVolumeCommandOutput) => void
  ): Promise<DetachVolumeCommandOutput> | void {
    const command = new DetachVolumeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Detaches a virtual private gateway from a VPC. You do this if you're planning to turn off the VPC and not use it anymore. You can confirm a virtual private gateway has been completely detached from a VPC by describing the virtual private gateway (any attachments to the virtual private gateway are also described).</p>
   *         <p>You must wait for the attachment's state to switch to <code>detached</code> before
   *             you can delete the VPC or attach a different VPC to the virtual private gateway.</p>
   */
  public detachVpnGateway(
    args: DetachVpnGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachVpnGatewayCommandOutput>;
  public detachVpnGateway(
    args: DetachVpnGatewayCommandInput,
    cb: (err: any, data?: DetachVpnGatewayCommandOutput) => void
  ): void;
  public detachVpnGateway(
    args: DetachVpnGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachVpnGatewayCommandOutput) => void
  ): void;
  public detachVpnGateway(
    args: DetachVpnGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetachVpnGatewayCommandOutput) => void),
    cb?: (err: any, data?: DetachVpnGatewayCommandOutput) => void
  ): Promise<DetachVpnGatewayCommandOutput> | void {
    const command = new DetachVpnGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disables EBS encryption by default for your account in the current Region.</p>
   *          <p>After you disable encryption by default, you can still create encrypted volumes by
   *       enabling encryption when you create each volume.</p>
   *          <p>Disabling encryption by default does not change the encryption status of your
   *       existing volumes.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the
   *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public disableEbsEncryptionByDefault(
    args: DisableEbsEncryptionByDefaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableEbsEncryptionByDefaultCommandOutput>;
  public disableEbsEncryptionByDefault(
    args: DisableEbsEncryptionByDefaultCommandInput,
    cb: (err: any, data?: DisableEbsEncryptionByDefaultCommandOutput) => void
  ): void;
  public disableEbsEncryptionByDefault(
    args: DisableEbsEncryptionByDefaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableEbsEncryptionByDefaultCommandOutput) => void
  ): void;
  public disableEbsEncryptionByDefault(
    args: DisableEbsEncryptionByDefaultCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableEbsEncryptionByDefaultCommandOutput) => void),
    cb?: (err: any, data?: DisableEbsEncryptionByDefaultCommandOutput) => void
  ): Promise<DisableEbsEncryptionByDefaultCommandOutput> | void {
    const command = new DisableEbsEncryptionByDefaultCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disables fast snapshot restores for the specified snapshots in the specified Availability Zones.</p>
   */
  public disableFastSnapshotRestores(
    args: DisableFastSnapshotRestoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableFastSnapshotRestoresCommandOutput>;
  public disableFastSnapshotRestores(
    args: DisableFastSnapshotRestoresCommandInput,
    cb: (err: any, data?: DisableFastSnapshotRestoresCommandOutput) => void
  ): void;
  public disableFastSnapshotRestores(
    args: DisableFastSnapshotRestoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableFastSnapshotRestoresCommandOutput) => void
  ): void;
  public disableFastSnapshotRestores(
    args: DisableFastSnapshotRestoresCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableFastSnapshotRestoresCommandOutput) => void),
    cb?: (err: any, data?: DisableFastSnapshotRestoresCommandOutput) => void
  ): Promise<DisableFastSnapshotRestoresCommandOutput> | void {
    const command = new DisableFastSnapshotRestoresCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disables the specified resource attachment from propagating routes to the specified
   *          propagation route table.</p>
   */
  public disableTransitGatewayRouteTablePropagation(
    args: DisableTransitGatewayRouteTablePropagationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableTransitGatewayRouteTablePropagationCommandOutput>;
  public disableTransitGatewayRouteTablePropagation(
    args: DisableTransitGatewayRouteTablePropagationCommandInput,
    cb: (err: any, data?: DisableTransitGatewayRouteTablePropagationCommandOutput) => void
  ): void;
  public disableTransitGatewayRouteTablePropagation(
    args: DisableTransitGatewayRouteTablePropagationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableTransitGatewayRouteTablePropagationCommandOutput) => void
  ): void;
  public disableTransitGatewayRouteTablePropagation(
    args: DisableTransitGatewayRouteTablePropagationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisableTransitGatewayRouteTablePropagationCommandOutput) => void),
    cb?: (err: any, data?: DisableTransitGatewayRouteTablePropagationCommandOutput) => void
  ): Promise<DisableTransitGatewayRouteTablePropagationCommandOutput> | void {
    const command = new DisableTransitGatewayRouteTablePropagationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disables a virtual private gateway (VGW) from propagating routes to a specified route table of a VPC.</p>
   */
  public disableVgwRoutePropagation(
    args: DisableVgwRoutePropagationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableVgwRoutePropagationCommandOutput>;
  public disableVgwRoutePropagation(
    args: DisableVgwRoutePropagationCommandInput,
    cb: (err: any, data?: DisableVgwRoutePropagationCommandOutput) => void
  ): void;
  public disableVgwRoutePropagation(
    args: DisableVgwRoutePropagationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableVgwRoutePropagationCommandOutput) => void
  ): void;
  public disableVgwRoutePropagation(
    args: DisableVgwRoutePropagationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableVgwRoutePropagationCommandOutput) => void),
    cb?: (err: any, data?: DisableVgwRoutePropagationCommandOutput) => void
  ): Promise<DisableVgwRoutePropagationCommandOutput> | void {
    const command = new DisableVgwRoutePropagationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disables ClassicLink for a VPC. You cannot disable ClassicLink for a VPC that has EC2-Classic instances linked to it.</p>
   */
  public disableVpcClassicLink(
    args: DisableVpcClassicLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableVpcClassicLinkCommandOutput>;
  public disableVpcClassicLink(
    args: DisableVpcClassicLinkCommandInput,
    cb: (err: any, data?: DisableVpcClassicLinkCommandOutput) => void
  ): void;
  public disableVpcClassicLink(
    args: DisableVpcClassicLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableVpcClassicLinkCommandOutput) => void
  ): void;
  public disableVpcClassicLink(
    args: DisableVpcClassicLinkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableVpcClassicLinkCommandOutput) => void),
    cb?: (err: any, data?: DisableVpcClassicLinkCommandOutput) => void
  ): Promise<DisableVpcClassicLinkCommandOutput> | void {
    const command = new DisableVpcClassicLinkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disables ClassicLink DNS support for a VPC. If disabled, DNS hostnames resolve to
   * 			public IP addresses when addressed between a linked EC2-Classic instance and instances
   * 			in the VPC to which it's linked. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the
   * 				<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>You must specify a VPC ID in the request.</p>
   */
  public disableVpcClassicLinkDnsSupport(
    args: DisableVpcClassicLinkDnsSupportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableVpcClassicLinkDnsSupportCommandOutput>;
  public disableVpcClassicLinkDnsSupport(
    args: DisableVpcClassicLinkDnsSupportCommandInput,
    cb: (err: any, data?: DisableVpcClassicLinkDnsSupportCommandOutput) => void
  ): void;
  public disableVpcClassicLinkDnsSupport(
    args: DisableVpcClassicLinkDnsSupportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableVpcClassicLinkDnsSupportCommandOutput) => void
  ): void;
  public disableVpcClassicLinkDnsSupport(
    args: DisableVpcClassicLinkDnsSupportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableVpcClassicLinkDnsSupportCommandOutput) => void),
    cb?: (err: any, data?: DisableVpcClassicLinkDnsSupportCommandOutput) => void
  ): Promise<DisableVpcClassicLinkDnsSupportCommandOutput> | void {
    const command = new DisableVpcClassicLinkDnsSupportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates an Elastic IP address from the instance or network interface it's associated with.</p>
   * 			      <p>An Elastic IP address is for use in either the EC2-Classic platform or in a VPC. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP
   * 				Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>This is an idempotent operation. If you perform the operation more than once, Amazon EC2 doesn't return an error.</p>
   */
  public disassociateAddress(
    args: DisassociateAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateAddressCommandOutput>;
  public disassociateAddress(
    args: DisassociateAddressCommandInput,
    cb: (err: any, data?: DisassociateAddressCommandOutput) => void
  ): void;
  public disassociateAddress(
    args: DisassociateAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateAddressCommandOutput) => void
  ): void;
  public disassociateAddress(
    args: DisassociateAddressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateAddressCommandOutput) => void),
    cb?: (err: any, data?: DisassociateAddressCommandOutput) => void
  ): Promise<DisassociateAddressCommandOutput> | void {
    const command = new DisassociateAddressCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates a target network from the specified Client VPN endpoint. When you disassociate the
   * 			last target network from a Client VPN, the following happens:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>The route that was automatically added for the VPC is deleted</p>
   * 			         </li>
   *             <li>
   * 				           <p>All active client connections are terminated</p>
   * 			         </li>
   *             <li>
   * 				           <p>New client connections are disallowed</p>
   * 			         </li>
   *             <li>
   * 				           <p>The Client VPN endpoint's status changes to <code>pending-associate</code>
   *                </p>
   * 			         </li>
   *          </ul>
   */
  public disassociateClientVpnTargetNetwork(
    args: DisassociateClientVpnTargetNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateClientVpnTargetNetworkCommandOutput>;
  public disassociateClientVpnTargetNetwork(
    args: DisassociateClientVpnTargetNetworkCommandInput,
    cb: (err: any, data?: DisassociateClientVpnTargetNetworkCommandOutput) => void
  ): void;
  public disassociateClientVpnTargetNetwork(
    args: DisassociateClientVpnTargetNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateClientVpnTargetNetworkCommandOutput) => void
  ): void;
  public disassociateClientVpnTargetNetwork(
    args: DisassociateClientVpnTargetNetworkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateClientVpnTargetNetworkCommandOutput) => void),
    cb?: (err: any, data?: DisassociateClientVpnTargetNetworkCommandOutput) => void
  ): Promise<DisassociateClientVpnTargetNetworkCommandOutput> | void {
    const command = new DisassociateClientVpnTargetNetworkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates an IAM role from an AWS Certificate Manager (ACM) certificate. Disassociating an IAM role
   * 			from an ACM certificate removes the Amazon S3 object that contains the certificate, certificate chain, and
   * 			encrypted private key from the Amazon S3 bucket. It also revokes the IAM role's permission to use the
   * 			AWS Key Management Service (KMS) customer master key (CMK) used to encrypt the private key. This effectively revokes the role's
   * 			permission to use the certificate. </p>
   */
  public disassociateEnclaveCertificateIamRole(
    args: DisassociateEnclaveCertificateIamRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateEnclaveCertificateIamRoleCommandOutput>;
  public disassociateEnclaveCertificateIamRole(
    args: DisassociateEnclaveCertificateIamRoleCommandInput,
    cb: (err: any, data?: DisassociateEnclaveCertificateIamRoleCommandOutput) => void
  ): void;
  public disassociateEnclaveCertificateIamRole(
    args: DisassociateEnclaveCertificateIamRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateEnclaveCertificateIamRoleCommandOutput) => void
  ): void;
  public disassociateEnclaveCertificateIamRole(
    args: DisassociateEnclaveCertificateIamRoleCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociateEnclaveCertificateIamRoleCommandOutput) => void),
    cb?: (err: any, data?: DisassociateEnclaveCertificateIamRoleCommandOutput) => void
  ): Promise<DisassociateEnclaveCertificateIamRoleCommandOutput> | void {
    const command = new DisassociateEnclaveCertificateIamRoleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates an IAM instance profile from a running or stopped instance.</p>
   *         <p>Use <a>DescribeIamInstanceProfileAssociations</a> to get the association
   *             ID.</p>
   */
  public disassociateIamInstanceProfile(
    args: DisassociateIamInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateIamInstanceProfileCommandOutput>;
  public disassociateIamInstanceProfile(
    args: DisassociateIamInstanceProfileCommandInput,
    cb: (err: any, data?: DisassociateIamInstanceProfileCommandOutput) => void
  ): void;
  public disassociateIamInstanceProfile(
    args: DisassociateIamInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateIamInstanceProfileCommandOutput) => void
  ): void;
  public disassociateIamInstanceProfile(
    args: DisassociateIamInstanceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateIamInstanceProfileCommandOutput) => void),
    cb?: (err: any, data?: DisassociateIamInstanceProfileCommandOutput) => void
  ): Promise<DisassociateIamInstanceProfileCommandOutput> | void {
    const command = new DisassociateIamInstanceProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates a subnet or gateway from a route table.</p>
   * 		       <p>After you perform this action, the subnet no longer uses the routes in the route table.
   * 				Instead, it uses the routes in the VPC's main route table. For more information
   * 				about route tables, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route
   * 				Tables</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  public disassociateRouteTable(
    args: DisassociateRouteTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateRouteTableCommandOutput>;
  public disassociateRouteTable(
    args: DisassociateRouteTableCommandInput,
    cb: (err: any, data?: DisassociateRouteTableCommandOutput) => void
  ): void;
  public disassociateRouteTable(
    args: DisassociateRouteTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateRouteTableCommandOutput) => void
  ): void;
  public disassociateRouteTable(
    args: DisassociateRouteTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateRouteTableCommandOutput) => void),
    cb?: (err: any, data?: DisassociateRouteTableCommandOutput) => void
  ): Promise<DisassociateRouteTableCommandOutput> | void {
    const command = new DisassociateRouteTableCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates a CIDR block from a subnet. Currently, you can disassociate an IPv6 CIDR block only. You must detach or delete all gateways and resources that are associated with the CIDR block before you can disassociate it. </p>
   */
  public disassociateSubnetCidrBlock(
    args: DisassociateSubnetCidrBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateSubnetCidrBlockCommandOutput>;
  public disassociateSubnetCidrBlock(
    args: DisassociateSubnetCidrBlockCommandInput,
    cb: (err: any, data?: DisassociateSubnetCidrBlockCommandOutput) => void
  ): void;
  public disassociateSubnetCidrBlock(
    args: DisassociateSubnetCidrBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateSubnetCidrBlockCommandOutput) => void
  ): void;
  public disassociateSubnetCidrBlock(
    args: DisassociateSubnetCidrBlockCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateSubnetCidrBlockCommandOutput) => void),
    cb?: (err: any, data?: DisassociateSubnetCidrBlockCommandOutput) => void
  ): Promise<DisassociateSubnetCidrBlockCommandOutput> | void {
    const command = new DisassociateSubnetCidrBlockCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates the specified subnets from the transit gateway multicast domain. </p>
   */
  public disassociateTransitGatewayMulticastDomain(
    args: DisassociateTransitGatewayMulticastDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateTransitGatewayMulticastDomainCommandOutput>;
  public disassociateTransitGatewayMulticastDomain(
    args: DisassociateTransitGatewayMulticastDomainCommandInput,
    cb: (err: any, data?: DisassociateTransitGatewayMulticastDomainCommandOutput) => void
  ): void;
  public disassociateTransitGatewayMulticastDomain(
    args: DisassociateTransitGatewayMulticastDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateTransitGatewayMulticastDomainCommandOutput) => void
  ): void;
  public disassociateTransitGatewayMulticastDomain(
    args: DisassociateTransitGatewayMulticastDomainCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociateTransitGatewayMulticastDomainCommandOutput) => void),
    cb?: (err: any, data?: DisassociateTransitGatewayMulticastDomainCommandOutput) => void
  ): Promise<DisassociateTransitGatewayMulticastDomainCommandOutput> | void {
    const command = new DisassociateTransitGatewayMulticastDomainCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates a resource attachment from a transit gateway route table.</p>
   */
  public disassociateTransitGatewayRouteTable(
    args: DisassociateTransitGatewayRouteTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateTransitGatewayRouteTableCommandOutput>;
  public disassociateTransitGatewayRouteTable(
    args: DisassociateTransitGatewayRouteTableCommandInput,
    cb: (err: any, data?: DisassociateTransitGatewayRouteTableCommandOutput) => void
  ): void;
  public disassociateTransitGatewayRouteTable(
    args: DisassociateTransitGatewayRouteTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateTransitGatewayRouteTableCommandOutput) => void
  ): void;
  public disassociateTransitGatewayRouteTable(
    args: DisassociateTransitGatewayRouteTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateTransitGatewayRouteTableCommandOutput) => void),
    cb?: (err: any, data?: DisassociateTransitGatewayRouteTableCommandOutput) => void
  ): Promise<DisassociateTransitGatewayRouteTableCommandOutput> | void {
    const command = new DisassociateTransitGatewayRouteTableCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates a CIDR block from a VPC. To disassociate the CIDR block, you must
   *             specify its association ID. You can get the association ID by using
   *                 <a>DescribeVpcs</a>. You must detach or delete all gateways and resources that
   *             are associated with the CIDR block before you can disassociate it. </p>
   * 		       <p>You cannot disassociate the CIDR block with which you originally created the VPC (the
   * 			primary CIDR block).</p>
   */
  public disassociateVpcCidrBlock(
    args: DisassociateVpcCidrBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateVpcCidrBlockCommandOutput>;
  public disassociateVpcCidrBlock(
    args: DisassociateVpcCidrBlockCommandInput,
    cb: (err: any, data?: DisassociateVpcCidrBlockCommandOutput) => void
  ): void;
  public disassociateVpcCidrBlock(
    args: DisassociateVpcCidrBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateVpcCidrBlockCommandOutput) => void
  ): void;
  public disassociateVpcCidrBlock(
    args: DisassociateVpcCidrBlockCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateVpcCidrBlockCommandOutput) => void),
    cb?: (err: any, data?: DisassociateVpcCidrBlockCommandOutput) => void
  ): Promise<DisassociateVpcCidrBlockCommandOutput> | void {
    const command = new DisassociateVpcCidrBlockCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enables EBS encryption by default for your account in the current Region.</p>
   *          <p>After you enable encryption by default, the EBS volumes that you create are
   *       are always encrypted, either using the default CMK or the CMK that you specified
   *       when you created each volume. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the
   *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>You can specify the default CMK for encryption by default using <a>ModifyEbsDefaultKmsKeyId</a>
   *       or <a>ResetEbsDefaultKmsKeyId</a>.</p>
   *          <p>Enabling encryption by default has no effect on the encryption status of your
   *       existing volumes.</p>
   *          <p>After you enable encryption by default, you can no longer launch instances
   *       using instance types that do not support encryption. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#EBSEncryption_supported_instances">Supported
   *         instance types</a>.</p>
   */
  public enableEbsEncryptionByDefault(
    args: EnableEbsEncryptionByDefaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableEbsEncryptionByDefaultCommandOutput>;
  public enableEbsEncryptionByDefault(
    args: EnableEbsEncryptionByDefaultCommandInput,
    cb: (err: any, data?: EnableEbsEncryptionByDefaultCommandOutput) => void
  ): void;
  public enableEbsEncryptionByDefault(
    args: EnableEbsEncryptionByDefaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableEbsEncryptionByDefaultCommandOutput) => void
  ): void;
  public enableEbsEncryptionByDefault(
    args: EnableEbsEncryptionByDefaultCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableEbsEncryptionByDefaultCommandOutput) => void),
    cb?: (err: any, data?: EnableEbsEncryptionByDefaultCommandOutput) => void
  ): Promise<EnableEbsEncryptionByDefaultCommandOutput> | void {
    const command = new EnableEbsEncryptionByDefaultCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enables fast snapshot restores for the specified snapshots in the specified Availability Zones.</p>
   *          <p>You get the full benefit of fast snapshot restores after they enter the <code>enabled</code> state.
   *       To get the current state of fast snapshot restores, use <a>DescribeFastSnapshotRestores</a>.
   *       To disable fast snapshot restores, use <a>DisableFastSnapshotRestores</a>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-fast-snapshot-restore.html">Amazon EBS fast snapshot
   *       restore</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public enableFastSnapshotRestores(
    args: EnableFastSnapshotRestoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableFastSnapshotRestoresCommandOutput>;
  public enableFastSnapshotRestores(
    args: EnableFastSnapshotRestoresCommandInput,
    cb: (err: any, data?: EnableFastSnapshotRestoresCommandOutput) => void
  ): void;
  public enableFastSnapshotRestores(
    args: EnableFastSnapshotRestoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableFastSnapshotRestoresCommandOutput) => void
  ): void;
  public enableFastSnapshotRestores(
    args: EnableFastSnapshotRestoresCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableFastSnapshotRestoresCommandOutput) => void),
    cb?: (err: any, data?: EnableFastSnapshotRestoresCommandOutput) => void
  ): Promise<EnableFastSnapshotRestoresCommandOutput> | void {
    const command = new EnableFastSnapshotRestoresCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enables the specified attachment to propagate routes to the specified
   *          propagation route table.</p>
   */
  public enableTransitGatewayRouteTablePropagation(
    args: EnableTransitGatewayRouteTablePropagationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableTransitGatewayRouteTablePropagationCommandOutput>;
  public enableTransitGatewayRouteTablePropagation(
    args: EnableTransitGatewayRouteTablePropagationCommandInput,
    cb: (err: any, data?: EnableTransitGatewayRouteTablePropagationCommandOutput) => void
  ): void;
  public enableTransitGatewayRouteTablePropagation(
    args: EnableTransitGatewayRouteTablePropagationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableTransitGatewayRouteTablePropagationCommandOutput) => void
  ): void;
  public enableTransitGatewayRouteTablePropagation(
    args: EnableTransitGatewayRouteTablePropagationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: EnableTransitGatewayRouteTablePropagationCommandOutput) => void),
    cb?: (err: any, data?: EnableTransitGatewayRouteTablePropagationCommandOutput) => void
  ): Promise<EnableTransitGatewayRouteTablePropagationCommandOutput> | void {
    const command = new EnableTransitGatewayRouteTablePropagationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enables a virtual private gateway (VGW) to propagate routes to the specified route table of a VPC.</p>
   */
  public enableVgwRoutePropagation(
    args: EnableVgwRoutePropagationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableVgwRoutePropagationCommandOutput>;
  public enableVgwRoutePropagation(
    args: EnableVgwRoutePropagationCommandInput,
    cb: (err: any, data?: EnableVgwRoutePropagationCommandOutput) => void
  ): void;
  public enableVgwRoutePropagation(
    args: EnableVgwRoutePropagationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableVgwRoutePropagationCommandOutput) => void
  ): void;
  public enableVgwRoutePropagation(
    args: EnableVgwRoutePropagationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableVgwRoutePropagationCommandOutput) => void),
    cb?: (err: any, data?: EnableVgwRoutePropagationCommandOutput) => void
  ): Promise<EnableVgwRoutePropagationCommandOutput> | void {
    const command = new EnableVgwRoutePropagationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enables I/O operations for a volume that had I/O operations disabled because the data on
   *       the volume was potentially inconsistent.</p>
   */
  public enableVolumeIO(
    args: EnableVolumeIOCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableVolumeIOCommandOutput>;
  public enableVolumeIO(
    args: EnableVolumeIOCommandInput,
    cb: (err: any, data?: EnableVolumeIOCommandOutput) => void
  ): void;
  public enableVolumeIO(
    args: EnableVolumeIOCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableVolumeIOCommandOutput) => void
  ): void;
  public enableVolumeIO(
    args: EnableVolumeIOCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableVolumeIOCommandOutput) => void),
    cb?: (err: any, data?: EnableVolumeIOCommandOutput) => void
  ): Promise<EnableVolumeIOCommandOutput> | void {
    const command = new EnableVolumeIOCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enables a VPC for ClassicLink. You can then link EC2-Classic instances to your
   * 			ClassicLink-enabled VPC to allow communication over private IP addresses. You cannot
   * 			enable your VPC for ClassicLink if any of your VPC route tables have existing routes for
   * 			address ranges within the <code>10.0.0.0/8</code> IP address range, excluding local
   * 			routes for VPCs in the <code>10.0.0.0/16</code> and <code>10.1.0.0/16</code> IP address
   * 			ranges. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the
   * 				<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public enableVpcClassicLink(
    args: EnableVpcClassicLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableVpcClassicLinkCommandOutput>;
  public enableVpcClassicLink(
    args: EnableVpcClassicLinkCommandInput,
    cb: (err: any, data?: EnableVpcClassicLinkCommandOutput) => void
  ): void;
  public enableVpcClassicLink(
    args: EnableVpcClassicLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableVpcClassicLinkCommandOutput) => void
  ): void;
  public enableVpcClassicLink(
    args: EnableVpcClassicLinkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableVpcClassicLinkCommandOutput) => void),
    cb?: (err: any, data?: EnableVpcClassicLinkCommandOutput) => void
  ): Promise<EnableVpcClassicLinkCommandOutput> | void {
    const command = new EnableVpcClassicLinkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enables a VPC to support DNS hostname resolution for ClassicLink. If enabled, the DNS
   * 			hostname of a linked EC2-Classic instance resolves to its private IP address when
   * 			addressed from an instance in the VPC to which it's linked. Similarly, the DNS hostname
   * 			of an instance in a VPC resolves to its private IP address when addressed from a linked
   * 			EC2-Classic instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the
   * 				<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>You must specify a VPC ID in the request.</p>
   */
  public enableVpcClassicLinkDnsSupport(
    args: EnableVpcClassicLinkDnsSupportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableVpcClassicLinkDnsSupportCommandOutput>;
  public enableVpcClassicLinkDnsSupport(
    args: EnableVpcClassicLinkDnsSupportCommandInput,
    cb: (err: any, data?: EnableVpcClassicLinkDnsSupportCommandOutput) => void
  ): void;
  public enableVpcClassicLinkDnsSupport(
    args: EnableVpcClassicLinkDnsSupportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableVpcClassicLinkDnsSupportCommandOutput) => void
  ): void;
  public enableVpcClassicLinkDnsSupport(
    args: EnableVpcClassicLinkDnsSupportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableVpcClassicLinkDnsSupportCommandOutput) => void),
    cb?: (err: any, data?: EnableVpcClassicLinkDnsSupportCommandOutput) => void
  ): Promise<EnableVpcClassicLinkDnsSupportCommandOutput> | void {
    const command = new EnableVpcClassicLinkDnsSupportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Downloads the client certificate revocation list for the specified Client VPN endpoint.</p>
   */
  public exportClientVpnClientCertificateRevocationList(
    args: ExportClientVpnClientCertificateRevocationListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportClientVpnClientCertificateRevocationListCommandOutput>;
  public exportClientVpnClientCertificateRevocationList(
    args: ExportClientVpnClientCertificateRevocationListCommandInput,
    cb: (err: any, data?: ExportClientVpnClientCertificateRevocationListCommandOutput) => void
  ): void;
  public exportClientVpnClientCertificateRevocationList(
    args: ExportClientVpnClientCertificateRevocationListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportClientVpnClientCertificateRevocationListCommandOutput) => void
  ): void;
  public exportClientVpnClientCertificateRevocationList(
    args: ExportClientVpnClientCertificateRevocationListCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ExportClientVpnClientCertificateRevocationListCommandOutput) => void),
    cb?: (err: any, data?: ExportClientVpnClientCertificateRevocationListCommandOutput) => void
  ): Promise<ExportClientVpnClientCertificateRevocationListCommandOutput> | void {
    const command = new ExportClientVpnClientCertificateRevocationListCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Downloads the contents of the Client VPN endpoint configuration file for the specified Client VPN endpoint. The Client VPN endpoint configuration
   * 			file includes the Client VPN endpoint and certificate information clients need to establish a connection
   * 			with the Client VPN endpoint.</p>
   */
  public exportClientVpnClientConfiguration(
    args: ExportClientVpnClientConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportClientVpnClientConfigurationCommandOutput>;
  public exportClientVpnClientConfiguration(
    args: ExportClientVpnClientConfigurationCommandInput,
    cb: (err: any, data?: ExportClientVpnClientConfigurationCommandOutput) => void
  ): void;
  public exportClientVpnClientConfiguration(
    args: ExportClientVpnClientConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportClientVpnClientConfigurationCommandOutput) => void
  ): void;
  public exportClientVpnClientConfiguration(
    args: ExportClientVpnClientConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExportClientVpnClientConfigurationCommandOutput) => void),
    cb?: (err: any, data?: ExportClientVpnClientConfigurationCommandOutput) => void
  ): Promise<ExportClientVpnClientConfigurationCommandOutput> | void {
    const command = new ExportClientVpnClientConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Exports an Amazon Machine Image (AMI) to a VM file. For more information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport_image.html">Exporting a VM Directory from an Amazon Machine Image
   *     (AMI)</a> in the <i>VM Import/Export User Guide</i>.</p>
   */
  public exportImage(args: ExportImageCommandInput, options?: __HttpHandlerOptions): Promise<ExportImageCommandOutput>;
  public exportImage(args: ExportImageCommandInput, cb: (err: any, data?: ExportImageCommandOutput) => void): void;
  public exportImage(
    args: ExportImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportImageCommandOutput) => void
  ): void;
  public exportImage(
    args: ExportImageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExportImageCommandOutput) => void),
    cb?: (err: any, data?: ExportImageCommandOutput) => void
  ): Promise<ExportImageCommandOutput> | void {
    const command = new ExportImageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Exports routes from the specified transit gateway route table to the specified S3 bucket.
   *          By default, all routes are exported. Alternatively, you can filter by CIDR range.</p>
   *          <p>The routes are saved to the specified bucket in a JSON file. For more information, see
   *                 <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-route-tables.html#tgw-export-route-tables">Export Route Tables
   *                 to Amazon S3</a> in <i>Transit Gateways</i>.</p>
   */
  public exportTransitGatewayRoutes(
    args: ExportTransitGatewayRoutesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportTransitGatewayRoutesCommandOutput>;
  public exportTransitGatewayRoutes(
    args: ExportTransitGatewayRoutesCommandInput,
    cb: (err: any, data?: ExportTransitGatewayRoutesCommandOutput) => void
  ): void;
  public exportTransitGatewayRoutes(
    args: ExportTransitGatewayRoutesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportTransitGatewayRoutesCommandOutput) => void
  ): void;
  public exportTransitGatewayRoutes(
    args: ExportTransitGatewayRoutesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExportTransitGatewayRoutesCommandOutput) => void),
    cb?: (err: any, data?: ExportTransitGatewayRoutesCommandOutput) => void
  ): Promise<ExportTransitGatewayRoutesCommandOutput> | void {
    const command = new ExportTransitGatewayRoutesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the IAM roles that are associated with the specified AWS Certificate Manager (ACM) certificate.
   * 			It also returns the name of the Amazon S3 bucket and the Amazon S3 object key where the certificate, certificate chain,
   * 			and encrypted private key bundle are stored, and the ARN of the AWS Key Management Service (KMS) customer master key (CMK)
   * 			that's used to encrypt the private key.</p>
   */
  public getAssociatedEnclaveCertificateIamRoles(
    args: GetAssociatedEnclaveCertificateIamRolesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssociatedEnclaveCertificateIamRolesCommandOutput>;
  public getAssociatedEnclaveCertificateIamRoles(
    args: GetAssociatedEnclaveCertificateIamRolesCommandInput,
    cb: (err: any, data?: GetAssociatedEnclaveCertificateIamRolesCommandOutput) => void
  ): void;
  public getAssociatedEnclaveCertificateIamRoles(
    args: GetAssociatedEnclaveCertificateIamRolesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssociatedEnclaveCertificateIamRolesCommandOutput) => void
  ): void;
  public getAssociatedEnclaveCertificateIamRoles(
    args: GetAssociatedEnclaveCertificateIamRolesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetAssociatedEnclaveCertificateIamRolesCommandOutput) => void),
    cb?: (err: any, data?: GetAssociatedEnclaveCertificateIamRolesCommandOutput) => void
  ): Promise<GetAssociatedEnclaveCertificateIamRolesCommandOutput> | void {
    const command = new GetAssociatedEnclaveCertificateIamRolesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the IPv6 CIDR block associations for a specified IPv6 address pool.</p>
   */
  public getAssociatedIpv6PoolCidrs(
    args: GetAssociatedIpv6PoolCidrsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssociatedIpv6PoolCidrsCommandOutput>;
  public getAssociatedIpv6PoolCidrs(
    args: GetAssociatedIpv6PoolCidrsCommandInput,
    cb: (err: any, data?: GetAssociatedIpv6PoolCidrsCommandOutput) => void
  ): void;
  public getAssociatedIpv6PoolCidrs(
    args: GetAssociatedIpv6PoolCidrsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssociatedIpv6PoolCidrsCommandOutput) => void
  ): void;
  public getAssociatedIpv6PoolCidrs(
    args: GetAssociatedIpv6PoolCidrsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAssociatedIpv6PoolCidrsCommandOutput) => void),
    cb?: (err: any, data?: GetAssociatedIpv6PoolCidrsCommandOutput) => void
  ): Promise<GetAssociatedIpv6PoolCidrsCommandOutput> | void {
    const command = new GetAssociatedIpv6PoolCidrsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets usage information about a Capacity Reservation. If the Capacity Reservation is shared, it shows usage information for the Capacity Reservation owner
   * 			and each AWS account that is currently using the shared capacity. If the Capacity Reservation is not shared, it shows only
   * 			the Capacity Reservation owner's usage.</p>
   */
  public getCapacityReservationUsage(
    args: GetCapacityReservationUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCapacityReservationUsageCommandOutput>;
  public getCapacityReservationUsage(
    args: GetCapacityReservationUsageCommandInput,
    cb: (err: any, data?: GetCapacityReservationUsageCommandOutput) => void
  ): void;
  public getCapacityReservationUsage(
    args: GetCapacityReservationUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCapacityReservationUsageCommandOutput) => void
  ): void;
  public getCapacityReservationUsage(
    args: GetCapacityReservationUsageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCapacityReservationUsageCommandOutput) => void),
    cb?: (err: any, data?: GetCapacityReservationUsageCommandOutput) => void
  ): Promise<GetCapacityReservationUsageCommandOutput> | void {
    const command = new GetCapacityReservationUsageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the allocations from the specified customer-owned address pool.</p>
   */
  public getCoipPoolUsage(
    args: GetCoipPoolUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCoipPoolUsageCommandOutput>;
  public getCoipPoolUsage(
    args: GetCoipPoolUsageCommandInput,
    cb: (err: any, data?: GetCoipPoolUsageCommandOutput) => void
  ): void;
  public getCoipPoolUsage(
    args: GetCoipPoolUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCoipPoolUsageCommandOutput) => void
  ): void;
  public getCoipPoolUsage(
    args: GetCoipPoolUsageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCoipPoolUsageCommandOutput) => void),
    cb?: (err: any, data?: GetCoipPoolUsageCommandOutput) => void
  ): Promise<GetCoipPoolUsageCommandOutput> | void {
    const command = new GetCoipPoolUsageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the console output for the specified instance. For Linux instances, the instance
   *             console output displays the exact console output that would normally be displayed on a
   *             physical monitor attached to a computer. For Windows instances, the instance console
   *             output includes the last three system event log errors.</p>
   *         <p>By default, the console output returns buffered information that was posted shortly
   *             after an instance transition state (start, stop, reboot, or terminate). This information
   *             is available for at least one hour after the most recent post. Only the most recent 64
   *             KB of console output is available.</p>
   *         <p>You can optionally retrieve the latest serial console output at any time during the
   *             instance lifecycle. This option is supported on instance types that use the Nitro
   *             hypervisor.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-console.html#instance-console-console-output">Instance
   *                 Console Output</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public getConsoleOutput(
    args: GetConsoleOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConsoleOutputCommandOutput>;
  public getConsoleOutput(
    args: GetConsoleOutputCommandInput,
    cb: (err: any, data?: GetConsoleOutputCommandOutput) => void
  ): void;
  public getConsoleOutput(
    args: GetConsoleOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConsoleOutputCommandOutput) => void
  ): void;
  public getConsoleOutput(
    args: GetConsoleOutputCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConsoleOutputCommandOutput) => void),
    cb?: (err: any, data?: GetConsoleOutputCommandOutput) => void
  ): Promise<GetConsoleOutputCommandOutput> | void {
    const command = new GetConsoleOutputCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieve a JPG-format screenshot of a running instance to help with
   *             troubleshooting.</p>
   *         <p>The returned content is Base64-encoded.</p>
   */
  public getConsoleScreenshot(
    args: GetConsoleScreenshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConsoleScreenshotCommandOutput>;
  public getConsoleScreenshot(
    args: GetConsoleScreenshotCommandInput,
    cb: (err: any, data?: GetConsoleScreenshotCommandOutput) => void
  ): void;
  public getConsoleScreenshot(
    args: GetConsoleScreenshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConsoleScreenshotCommandOutput) => void
  ): void;
  public getConsoleScreenshot(
    args: GetConsoleScreenshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConsoleScreenshotCommandOutput) => void),
    cb?: (err: any, data?: GetConsoleScreenshotCommandOutput) => void
  ): Promise<GetConsoleScreenshotCommandOutput> | void {
    const command = new GetConsoleScreenshotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the default credit option for CPU usage of a burstable performance instance family.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
   *             performance instances</a> in the <i>Amazon Elastic Compute Cloud User
   *                 Guide</i>.</p>
   */
  public getDefaultCreditSpecification(
    args: GetDefaultCreditSpecificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDefaultCreditSpecificationCommandOutput>;
  public getDefaultCreditSpecification(
    args: GetDefaultCreditSpecificationCommandInput,
    cb: (err: any, data?: GetDefaultCreditSpecificationCommandOutput) => void
  ): void;
  public getDefaultCreditSpecification(
    args: GetDefaultCreditSpecificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDefaultCreditSpecificationCommandOutput) => void
  ): void;
  public getDefaultCreditSpecification(
    args: GetDefaultCreditSpecificationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDefaultCreditSpecificationCommandOutput) => void),
    cb?: (err: any, data?: GetDefaultCreditSpecificationCommandOutput) => void
  ): Promise<GetDefaultCreditSpecificationCommandOutput> | void {
    const command = new GetDefaultCreditSpecificationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the default customer master key (CMK) for EBS encryption by default for your account in this Region.
   *       You can change the default CMK for encryption by default using <a>ModifyEbsDefaultKmsKeyId</a> or
   *       <a>ResetEbsDefaultKmsKeyId</a>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a>
   *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public getEbsDefaultKmsKeyId(
    args: GetEbsDefaultKmsKeyIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEbsDefaultKmsKeyIdCommandOutput>;
  public getEbsDefaultKmsKeyId(
    args: GetEbsDefaultKmsKeyIdCommandInput,
    cb: (err: any, data?: GetEbsDefaultKmsKeyIdCommandOutput) => void
  ): void;
  public getEbsDefaultKmsKeyId(
    args: GetEbsDefaultKmsKeyIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEbsDefaultKmsKeyIdCommandOutput) => void
  ): void;
  public getEbsDefaultKmsKeyId(
    args: GetEbsDefaultKmsKeyIdCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEbsDefaultKmsKeyIdCommandOutput) => void),
    cb?: (err: any, data?: GetEbsDefaultKmsKeyIdCommandOutput) => void
  ): Promise<GetEbsDefaultKmsKeyIdCommandOutput> | void {
    const command = new GetEbsDefaultKmsKeyIdCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes whether EBS encryption by default is enabled for your account in the current
   *       Region.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a>
   *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public getEbsEncryptionByDefault(
    args: GetEbsEncryptionByDefaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEbsEncryptionByDefaultCommandOutput>;
  public getEbsEncryptionByDefault(
    args: GetEbsEncryptionByDefaultCommandInput,
    cb: (err: any, data?: GetEbsEncryptionByDefaultCommandOutput) => void
  ): void;
  public getEbsEncryptionByDefault(
    args: GetEbsEncryptionByDefaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEbsEncryptionByDefaultCommandOutput) => void
  ): void;
  public getEbsEncryptionByDefault(
    args: GetEbsEncryptionByDefaultCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEbsEncryptionByDefaultCommandOutput) => void),
    cb?: (err: any, data?: GetEbsEncryptionByDefaultCommandOutput) => void
  ): Promise<GetEbsEncryptionByDefaultCommandOutput> | void {
    const command = new GetEbsEncryptionByDefaultCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the resource groups to which a Capacity Reservation has been added.</p>
   */
  public getGroupsForCapacityReservation(
    args: GetGroupsForCapacityReservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGroupsForCapacityReservationCommandOutput>;
  public getGroupsForCapacityReservation(
    args: GetGroupsForCapacityReservationCommandInput,
    cb: (err: any, data?: GetGroupsForCapacityReservationCommandOutput) => void
  ): void;
  public getGroupsForCapacityReservation(
    args: GetGroupsForCapacityReservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupsForCapacityReservationCommandOutput) => void
  ): void;
  public getGroupsForCapacityReservation(
    args: GetGroupsForCapacityReservationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGroupsForCapacityReservationCommandOutput) => void),
    cb?: (err: any, data?: GetGroupsForCapacityReservationCommandOutput) => void
  ): Promise<GetGroupsForCapacityReservationCommandOutput> | void {
    const command = new GetGroupsForCapacityReservationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Preview a reservation purchase with configurations that match those of your
   *             Dedicated Host. You must have active Dedicated Hosts in your account before you purchase
   *             a reservation.</p>
   *         <p>This is a preview of the <a>PurchaseHostReservation</a> action and does
   *             not result in the offering being purchased.</p>
   */
  public getHostReservationPurchasePreview(
    args: GetHostReservationPurchasePreviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHostReservationPurchasePreviewCommandOutput>;
  public getHostReservationPurchasePreview(
    args: GetHostReservationPurchasePreviewCommandInput,
    cb: (err: any, data?: GetHostReservationPurchasePreviewCommandOutput) => void
  ): void;
  public getHostReservationPurchasePreview(
    args: GetHostReservationPurchasePreviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHostReservationPurchasePreviewCommandOutput) => void
  ): void;
  public getHostReservationPurchasePreview(
    args: GetHostReservationPurchasePreviewCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetHostReservationPurchasePreviewCommandOutput) => void),
    cb?: (err: any, data?: GetHostReservationPurchasePreviewCommandOutput) => void
  ): Promise<GetHostReservationPurchasePreviewCommandOutput> | void {
    const command = new GetHostReservationPurchasePreviewCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the configuration data of the specified instance. You can use this data
   *             to create a launch template. </p>
   *         <p>This action calls on other describe actions to get instance information. Depending on your instance configuration, you may need to allow the following
   *             actions in your IAM policy: DescribeSpotInstanceRequests, DescribeInstanceCreditSpecifications, DescribeVolumes, DescribeInstanceAttribute, and DescribeElasticGpus. Or, you can allow
   *         <code>describe*</code> depending on your instance requirements.</p>
   */
  public getLaunchTemplateData(
    args: GetLaunchTemplateDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLaunchTemplateDataCommandOutput>;
  public getLaunchTemplateData(
    args: GetLaunchTemplateDataCommandInput,
    cb: (err: any, data?: GetLaunchTemplateDataCommandOutput) => void
  ): void;
  public getLaunchTemplateData(
    args: GetLaunchTemplateDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLaunchTemplateDataCommandOutput) => void
  ): void;
  public getLaunchTemplateData(
    args: GetLaunchTemplateDataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLaunchTemplateDataCommandOutput) => void),
    cb?: (err: any, data?: GetLaunchTemplateDataCommandOutput) => void
  ): Promise<GetLaunchTemplateDataCommandOutput> | void {
    const command = new GetLaunchTemplateDataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the resources that are associated with the specified managed prefix list.</p>
   */
  public getManagedPrefixListAssociations(
    args: GetManagedPrefixListAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetManagedPrefixListAssociationsCommandOutput>;
  public getManagedPrefixListAssociations(
    args: GetManagedPrefixListAssociationsCommandInput,
    cb: (err: any, data?: GetManagedPrefixListAssociationsCommandOutput) => void
  ): void;
  public getManagedPrefixListAssociations(
    args: GetManagedPrefixListAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetManagedPrefixListAssociationsCommandOutput) => void
  ): void;
  public getManagedPrefixListAssociations(
    args: GetManagedPrefixListAssociationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetManagedPrefixListAssociationsCommandOutput) => void),
    cb?: (err: any, data?: GetManagedPrefixListAssociationsCommandOutput) => void
  ): Promise<GetManagedPrefixListAssociationsCommandOutput> | void {
    const command = new GetManagedPrefixListAssociationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the entries for a specified managed prefix list.</p>
   */
  public getManagedPrefixListEntries(
    args: GetManagedPrefixListEntriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetManagedPrefixListEntriesCommandOutput>;
  public getManagedPrefixListEntries(
    args: GetManagedPrefixListEntriesCommandInput,
    cb: (err: any, data?: GetManagedPrefixListEntriesCommandOutput) => void
  ): void;
  public getManagedPrefixListEntries(
    args: GetManagedPrefixListEntriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetManagedPrefixListEntriesCommandOutput) => void
  ): void;
  public getManagedPrefixListEntries(
    args: GetManagedPrefixListEntriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetManagedPrefixListEntriesCommandOutput) => void),
    cb?: (err: any, data?: GetManagedPrefixListEntriesCommandOutput) => void
  ): Promise<GetManagedPrefixListEntriesCommandOutput> | void {
    const command = new GetManagedPrefixListEntriesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the encrypted administrator password for a running Windows instance.</p>
   *         <p>The Windows password is generated at boot by the <code>EC2Config</code> service or
   *                 <code>EC2Launch</code> scripts (Windows Server 2016 and later). This usually only
   *             happens the first time an instance is launched. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/UsingConfig_WinAMI.html">EC2Config</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2launch.html">EC2Launch</a> in the
   *             Amazon Elastic Compute Cloud User Guide.</p>
   *         <p>For the <code>EC2Config</code> service, the password is not generated for rebundled
   *             AMIs unless <code>Ec2SetPassword</code> is enabled before bundling.</p>
   *         <p>The password is encrypted using the key pair that you specified when you launched the
   *             instance. You must provide the corresponding key pair file.</p>
   *         <p>When you launch an instance, password generation and encryption may take a few
   *             minutes. If you try to retrieve the password before it's available, the output returns
   *             an empty string. We recommend that you wait up to 15 minutes after launching an instance
   *             before trying to retrieve the generated password.</p>
   */
  public getPasswordData(
    args: GetPasswordDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPasswordDataCommandOutput>;
  public getPasswordData(
    args: GetPasswordDataCommandInput,
    cb: (err: any, data?: GetPasswordDataCommandOutput) => void
  ): void;
  public getPasswordData(
    args: GetPasswordDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPasswordDataCommandOutput) => void
  ): void;
  public getPasswordData(
    args: GetPasswordDataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPasswordDataCommandOutput) => void),
    cb?: (err: any, data?: GetPasswordDataCommandOutput) => void
  ): Promise<GetPasswordDataCommandOutput> | void {
    const command = new GetPasswordDataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a quote and exchange information for exchanging one or more specified
   *             Convertible Reserved Instances for a new Convertible Reserved Instance. If the exchange
   *             cannot be performed, the reason is returned in the response. Use <a>AcceptReservedInstancesExchangeQuote</a> to perform the exchange.</p>
   */
  public getReservedInstancesExchangeQuote(
    args: GetReservedInstancesExchangeQuoteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReservedInstancesExchangeQuoteCommandOutput>;
  public getReservedInstancesExchangeQuote(
    args: GetReservedInstancesExchangeQuoteCommandInput,
    cb: (err: any, data?: GetReservedInstancesExchangeQuoteCommandOutput) => void
  ): void;
  public getReservedInstancesExchangeQuote(
    args: GetReservedInstancesExchangeQuoteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReservedInstancesExchangeQuoteCommandOutput) => void
  ): void;
  public getReservedInstancesExchangeQuote(
    args: GetReservedInstancesExchangeQuoteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetReservedInstancesExchangeQuoteCommandOutput) => void),
    cb?: (err: any, data?: GetReservedInstancesExchangeQuoteCommandOutput) => void
  ): Promise<GetReservedInstancesExchangeQuoteCommandOutput> | void {
    const command = new GetReservedInstancesExchangeQuoteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the route tables to which the specified resource attachment propagates routes.</p>
   */
  public getTransitGatewayAttachmentPropagations(
    args: GetTransitGatewayAttachmentPropagationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTransitGatewayAttachmentPropagationsCommandOutput>;
  public getTransitGatewayAttachmentPropagations(
    args: GetTransitGatewayAttachmentPropagationsCommandInput,
    cb: (err: any, data?: GetTransitGatewayAttachmentPropagationsCommandOutput) => void
  ): void;
  public getTransitGatewayAttachmentPropagations(
    args: GetTransitGatewayAttachmentPropagationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTransitGatewayAttachmentPropagationsCommandOutput) => void
  ): void;
  public getTransitGatewayAttachmentPropagations(
    args: GetTransitGatewayAttachmentPropagationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetTransitGatewayAttachmentPropagationsCommandOutput) => void),
    cb?: (err: any, data?: GetTransitGatewayAttachmentPropagationsCommandOutput) => void
  ): Promise<GetTransitGatewayAttachmentPropagationsCommandOutput> | void {
    const command = new GetTransitGatewayAttachmentPropagationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the associations for the transit gateway multicast domain.</p>
   */
  public getTransitGatewayMulticastDomainAssociations(
    args: GetTransitGatewayMulticastDomainAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTransitGatewayMulticastDomainAssociationsCommandOutput>;
  public getTransitGatewayMulticastDomainAssociations(
    args: GetTransitGatewayMulticastDomainAssociationsCommandInput,
    cb: (err: any, data?: GetTransitGatewayMulticastDomainAssociationsCommandOutput) => void
  ): void;
  public getTransitGatewayMulticastDomainAssociations(
    args: GetTransitGatewayMulticastDomainAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTransitGatewayMulticastDomainAssociationsCommandOutput) => void
  ): void;
  public getTransitGatewayMulticastDomainAssociations(
    args: GetTransitGatewayMulticastDomainAssociationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetTransitGatewayMulticastDomainAssociationsCommandOutput) => void),
    cb?: (err: any, data?: GetTransitGatewayMulticastDomainAssociationsCommandOutput) => void
  ): Promise<GetTransitGatewayMulticastDomainAssociationsCommandOutput> | void {
    const command = new GetTransitGatewayMulticastDomainAssociationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the prefix list references in a specified transit gateway route table.</p>
   */
  public getTransitGatewayPrefixListReferences(
    args: GetTransitGatewayPrefixListReferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTransitGatewayPrefixListReferencesCommandOutput>;
  public getTransitGatewayPrefixListReferences(
    args: GetTransitGatewayPrefixListReferencesCommandInput,
    cb: (err: any, data?: GetTransitGatewayPrefixListReferencesCommandOutput) => void
  ): void;
  public getTransitGatewayPrefixListReferences(
    args: GetTransitGatewayPrefixListReferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTransitGatewayPrefixListReferencesCommandOutput) => void
  ): void;
  public getTransitGatewayPrefixListReferences(
    args: GetTransitGatewayPrefixListReferencesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetTransitGatewayPrefixListReferencesCommandOutput) => void),
    cb?: (err: any, data?: GetTransitGatewayPrefixListReferencesCommandOutput) => void
  ): Promise<GetTransitGatewayPrefixListReferencesCommandOutput> | void {
    const command = new GetTransitGatewayPrefixListReferencesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the associations for the specified transit gateway route table.</p>
   */
  public getTransitGatewayRouteTableAssociations(
    args: GetTransitGatewayRouteTableAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTransitGatewayRouteTableAssociationsCommandOutput>;
  public getTransitGatewayRouteTableAssociations(
    args: GetTransitGatewayRouteTableAssociationsCommandInput,
    cb: (err: any, data?: GetTransitGatewayRouteTableAssociationsCommandOutput) => void
  ): void;
  public getTransitGatewayRouteTableAssociations(
    args: GetTransitGatewayRouteTableAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTransitGatewayRouteTableAssociationsCommandOutput) => void
  ): void;
  public getTransitGatewayRouteTableAssociations(
    args: GetTransitGatewayRouteTableAssociationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetTransitGatewayRouteTableAssociationsCommandOutput) => void),
    cb?: (err: any, data?: GetTransitGatewayRouteTableAssociationsCommandOutput) => void
  ): Promise<GetTransitGatewayRouteTableAssociationsCommandOutput> | void {
    const command = new GetTransitGatewayRouteTableAssociationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the route table propagations for the specified transit gateway route table.</p>
   */
  public getTransitGatewayRouteTablePropagations(
    args: GetTransitGatewayRouteTablePropagationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTransitGatewayRouteTablePropagationsCommandOutput>;
  public getTransitGatewayRouteTablePropagations(
    args: GetTransitGatewayRouteTablePropagationsCommandInput,
    cb: (err: any, data?: GetTransitGatewayRouteTablePropagationsCommandOutput) => void
  ): void;
  public getTransitGatewayRouteTablePropagations(
    args: GetTransitGatewayRouteTablePropagationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTransitGatewayRouteTablePropagationsCommandOutput) => void
  ): void;
  public getTransitGatewayRouteTablePropagations(
    args: GetTransitGatewayRouteTablePropagationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetTransitGatewayRouteTablePropagationsCommandOutput) => void),
    cb?: (err: any, data?: GetTransitGatewayRouteTablePropagationsCommandOutput) => void
  ): Promise<GetTransitGatewayRouteTablePropagationsCommandOutput> | void {
    const command = new GetTransitGatewayRouteTablePropagationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Uploads a client certificate revocation list to the specified Client VPN endpoint. Uploading a client certificate revocation list overwrites the existing client certificate revocation list.</p>
   * 		       <p>Uploading a client certificate revocation list resets existing client connections.</p>
   */
  public importClientVpnClientCertificateRevocationList(
    args: ImportClientVpnClientCertificateRevocationListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportClientVpnClientCertificateRevocationListCommandOutput>;
  public importClientVpnClientCertificateRevocationList(
    args: ImportClientVpnClientCertificateRevocationListCommandInput,
    cb: (err: any, data?: ImportClientVpnClientCertificateRevocationListCommandOutput) => void
  ): void;
  public importClientVpnClientCertificateRevocationList(
    args: ImportClientVpnClientCertificateRevocationListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportClientVpnClientCertificateRevocationListCommandOutput) => void
  ): void;
  public importClientVpnClientCertificateRevocationList(
    args: ImportClientVpnClientCertificateRevocationListCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ImportClientVpnClientCertificateRevocationListCommandOutput) => void),
    cb?: (err: any, data?: ImportClientVpnClientCertificateRevocationListCommandOutput) => void
  ): Promise<ImportClientVpnClientCertificateRevocationListCommandOutput> | void {
    const command = new ImportClientVpnClientCertificateRevocationListCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Import single or multi-volume disk images or EBS snapshots into an Amazon Machine Image (AMI). For more
   *    information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-image-import.html">Importing a VM as an
   *     Image Using VM Import/Export</a> in the <i>VM Import/Export User Guide</i>.</p>
   */
  public importImage(args: ImportImageCommandInput, options?: __HttpHandlerOptions): Promise<ImportImageCommandOutput>;
  public importImage(args: ImportImageCommandInput, cb: (err: any, data?: ImportImageCommandOutput) => void): void;
  public importImage(
    args: ImportImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportImageCommandOutput) => void
  ): void;
  public importImage(
    args: ImportImageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportImageCommandOutput) => void),
    cb?: (err: any, data?: ImportImageCommandOutput) => void
  ): Promise<ImportImageCommandOutput> | void {
    const command = new ImportImageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an import instance task using metadata from the specified disk image. <code>ImportInstance</code> only
   *    supports single-volume VMs. To import multi-volume VMs, use <a>ImportImage</a>. For more information, see
   *     <a href="https://docs.aws.amazon.com/AWSEC2/latest/CommandLineReference/ec2-cli-vmimport-export.html">Importing a
   *     Virtual Machine Using the Amazon EC2 CLI</a>.</p>
   *          <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
   */
  public importInstance(
    args: ImportInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportInstanceCommandOutput>;
  public importInstance(
    args: ImportInstanceCommandInput,
    cb: (err: any, data?: ImportInstanceCommandOutput) => void
  ): void;
  public importInstance(
    args: ImportInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportInstanceCommandOutput) => void
  ): void;
  public importInstance(
    args: ImportInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportInstanceCommandOutput) => void),
    cb?: (err: any, data?: ImportInstanceCommandOutput) => void
  ): Promise<ImportInstanceCommandOutput> | void {
    const command = new ImportInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Imports the public key from an RSA key pair that you created with a third-party tool.
   *         Compare this with <a>CreateKeyPair</a>, in which AWS creates the key pair and gives the keys to you
   *         (AWS keeps a copy of the public key). With ImportKeyPair, you create the key pair and give AWS just the public key.
   *         The private key is never transferred between you and AWS.</p>
   *          <p>For more information about key pairs, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Key Pairs</a>
   * 				in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public importKeyPair(
    args: ImportKeyPairCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportKeyPairCommandOutput>;
  public importKeyPair(
    args: ImportKeyPairCommandInput,
    cb: (err: any, data?: ImportKeyPairCommandOutput) => void
  ): void;
  public importKeyPair(
    args: ImportKeyPairCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportKeyPairCommandOutput) => void
  ): void;
  public importKeyPair(
    args: ImportKeyPairCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportKeyPairCommandOutput) => void),
    cb?: (err: any, data?: ImportKeyPairCommandOutput) => void
  ): Promise<ImportKeyPairCommandOutput> | void {
    const command = new ImportKeyPairCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Imports a disk into an EBS snapshot.</p>
   */
  public importSnapshot(
    args: ImportSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportSnapshotCommandOutput>;
  public importSnapshot(
    args: ImportSnapshotCommandInput,
    cb: (err: any, data?: ImportSnapshotCommandOutput) => void
  ): void;
  public importSnapshot(
    args: ImportSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportSnapshotCommandOutput) => void
  ): void;
  public importSnapshot(
    args: ImportSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportSnapshotCommandOutput) => void),
    cb?: (err: any, data?: ImportSnapshotCommandOutput) => void
  ): Promise<ImportSnapshotCommandOutput> | void {
    const command = new ImportSnapshotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an import volume task using metadata from the specified disk image.For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/CommandLineReference/importing-your-volumes-into-amazon-ebs.html">Importing
   *     Disks to Amazon EBS</a>.</p>
   *          <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
   */
  public importVolume(
    args: ImportVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportVolumeCommandOutput>;
  public importVolume(args: ImportVolumeCommandInput, cb: (err: any, data?: ImportVolumeCommandOutput) => void): void;
  public importVolume(
    args: ImportVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportVolumeCommandOutput) => void
  ): void;
  public importVolume(
    args: ImportVolumeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportVolumeCommandOutput) => void),
    cb?: (err: any, data?: ImportVolumeCommandOutput) => void
  ): Promise<ImportVolumeCommandOutput> | void {
    const command = new ImportVolumeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public modifyAddressAttribute(
    args: ModifyAddressAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyAddressAttributeCommandOutput>;
  public modifyAddressAttribute(
    args: ModifyAddressAttributeCommandInput,
    cb: (err: any, data?: ModifyAddressAttributeCommandOutput) => void
  ): void;
  public modifyAddressAttribute(
    args: ModifyAddressAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyAddressAttributeCommandOutput) => void
  ): void;
  public modifyAddressAttribute(
    args: ModifyAddressAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyAddressAttributeCommandOutput) => void),
    cb?: (err: any, data?: ModifyAddressAttributeCommandOutput) => void
  ): Promise<ModifyAddressAttributeCommandOutput> | void {
    const command = new ModifyAddressAttributeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Changes the opt-in status of the Local Zone and Wavelength Zone group for your
   *       account.</p>
   *          <p>Use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAvailabilityZones.html">
   *   		DescribeAvailabilityZones</a> to view the value for <code>GroupName</code>.</p>
   */
  public modifyAvailabilityZoneGroup(
    args: ModifyAvailabilityZoneGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyAvailabilityZoneGroupCommandOutput>;
  public modifyAvailabilityZoneGroup(
    args: ModifyAvailabilityZoneGroupCommandInput,
    cb: (err: any, data?: ModifyAvailabilityZoneGroupCommandOutput) => void
  ): void;
  public modifyAvailabilityZoneGroup(
    args: ModifyAvailabilityZoneGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyAvailabilityZoneGroupCommandOutput) => void
  ): void;
  public modifyAvailabilityZoneGroup(
    args: ModifyAvailabilityZoneGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyAvailabilityZoneGroupCommandOutput) => void),
    cb?: (err: any, data?: ModifyAvailabilityZoneGroupCommandOutput) => void
  ): Promise<ModifyAvailabilityZoneGroupCommandOutput> | void {
    const command = new ModifyAvailabilityZoneGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies a Capacity Reservation's capacity and the conditions under which it is to be released. You
   * 			cannot change a Capacity Reservation's instance type, EBS optimization, instance store settings,
   * 			platform, Availability Zone, or instance eligibility. If you need to modify any of these
   * 			attributes, we recommend that you cancel the Capacity Reservation, and then create a new one with
   * 			the required attributes.</p>
   */
  public modifyCapacityReservation(
    args: ModifyCapacityReservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyCapacityReservationCommandOutput>;
  public modifyCapacityReservation(
    args: ModifyCapacityReservationCommandInput,
    cb: (err: any, data?: ModifyCapacityReservationCommandOutput) => void
  ): void;
  public modifyCapacityReservation(
    args: ModifyCapacityReservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyCapacityReservationCommandOutput) => void
  ): void;
  public modifyCapacityReservation(
    args: ModifyCapacityReservationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyCapacityReservationCommandOutput) => void),
    cb?: (err: any, data?: ModifyCapacityReservationCommandOutput) => void
  ): Promise<ModifyCapacityReservationCommandOutput> | void {
    const command = new ModifyCapacityReservationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the specified Client VPN endpoint. Modifying the DNS server resets existing client connections.</p>
   */
  public modifyClientVpnEndpoint(
    args: ModifyClientVpnEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyClientVpnEndpointCommandOutput>;
  public modifyClientVpnEndpoint(
    args: ModifyClientVpnEndpointCommandInput,
    cb: (err: any, data?: ModifyClientVpnEndpointCommandOutput) => void
  ): void;
  public modifyClientVpnEndpoint(
    args: ModifyClientVpnEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyClientVpnEndpointCommandOutput) => void
  ): void;
  public modifyClientVpnEndpoint(
    args: ModifyClientVpnEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyClientVpnEndpointCommandOutput) => void),
    cb?: (err: any, data?: ModifyClientVpnEndpointCommandOutput) => void
  ): Promise<ModifyClientVpnEndpointCommandOutput> | void {
    const command = new ModifyClientVpnEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the default credit option for CPU usage of burstable performance instances.
   *             The default credit option is set at the account level per AWS Region, and is specified
   *             per instance family. All new burstable performance instances in the account launch using
   *             the default credit option.</p>
   *         <p>
   *             <code>ModifyDefaultCreditSpecification</code> is an asynchronous operation, which works at an AWS
   *             Region level and modifies the credit option for each Availability Zone. All zones in a
   *             Region are updated within five minutes. But if instances are launched during this
   *             operation, they might not get the new credit option until the zone is updated. To verify
   *             whether the update has occurred, you can call <code>GetDefaultCreditSpecification</code> and check
   *             <code>DefaultCreditSpecification</code> for updates.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
   *             performance instances</a> in the <i>Amazon Elastic Compute Cloud User
   *                 Guide</i>.</p>
   */
  public modifyDefaultCreditSpecification(
    args: ModifyDefaultCreditSpecificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDefaultCreditSpecificationCommandOutput>;
  public modifyDefaultCreditSpecification(
    args: ModifyDefaultCreditSpecificationCommandInput,
    cb: (err: any, data?: ModifyDefaultCreditSpecificationCommandOutput) => void
  ): void;
  public modifyDefaultCreditSpecification(
    args: ModifyDefaultCreditSpecificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDefaultCreditSpecificationCommandOutput) => void
  ): void;
  public modifyDefaultCreditSpecification(
    args: ModifyDefaultCreditSpecificationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyDefaultCreditSpecificationCommandOutput) => void),
    cb?: (err: any, data?: ModifyDefaultCreditSpecificationCommandOutput) => void
  ): Promise<ModifyDefaultCreditSpecificationCommandOutput> | void {
    const command = new ModifyDefaultCreditSpecificationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Changes the default customer master key (CMK) for EBS encryption by default for your account in this Region.</p>
   *          <p>AWS creates a unique AWS managed CMK in each Region for use with encryption by default. If
   *       you change the default CMK to a symmetric customer managed CMK, it is used instead of the AWS
   *       managed CMK. To reset the default CMK to the AWS managed CMK for EBS, use <a>ResetEbsDefaultKmsKeyId</a>. Amazon EBS does not support asymmetric CMKs.</p>
   *          <p>If you delete or disable the customer managed CMK that you specified for use with
   *       encryption by default, your instances will fail to launch.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a>
   *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public modifyEbsDefaultKmsKeyId(
    args: ModifyEbsDefaultKmsKeyIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyEbsDefaultKmsKeyIdCommandOutput>;
  public modifyEbsDefaultKmsKeyId(
    args: ModifyEbsDefaultKmsKeyIdCommandInput,
    cb: (err: any, data?: ModifyEbsDefaultKmsKeyIdCommandOutput) => void
  ): void;
  public modifyEbsDefaultKmsKeyId(
    args: ModifyEbsDefaultKmsKeyIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyEbsDefaultKmsKeyIdCommandOutput) => void
  ): void;
  public modifyEbsDefaultKmsKeyId(
    args: ModifyEbsDefaultKmsKeyIdCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyEbsDefaultKmsKeyIdCommandOutput) => void),
    cb?: (err: any, data?: ModifyEbsDefaultKmsKeyIdCommandOutput) => void
  ): Promise<ModifyEbsDefaultKmsKeyIdCommandOutput> | void {
    const command = new ModifyEbsDefaultKmsKeyIdCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the specified EC2 Fleet.</p>
   *          <p>You can only modify an EC2 Fleet request of type <code>maintain</code>.</p>
   *          <p>While the EC2 Fleet is being modified, it is in the <code>modifying</code> state.</p>
   *          <p>To scale up your EC2 Fleet, increase its target capacity. The EC2 Fleet launches the additional
   *          Spot Instances according to the allocation strategy for the EC2 Fleet request. If the allocation
   *          strategy is <code>lowest-price</code>, the EC2 Fleet launches instances using the Spot Instance
   *          pool with the lowest price. If the allocation strategy is <code>diversified</code>, the
   *          EC2 Fleet distributes the instances across the Spot Instance pools. If the allocation strategy
   *          is <code>capacity-optimized</code>, EC2 Fleet launches instances from Spot Instance pools with optimal
   *          capacity for the number of instances that are launching.</p>
   *          <p>To scale down your EC2 Fleet, decrease its target capacity. First, the EC2 Fleet cancels any open
   *          requests that exceed the new target capacity. You can request that the EC2 Fleet terminate Spot
   *          Instances until the size of the fleet no longer exceeds the new target capacity. If the
   *          allocation strategy is <code>lowest-price</code>, the EC2 Fleet terminates the instances with
   *          the highest price per unit. If the allocation strategy is <code>capacity-optimized</code>,
   *          the EC2 Fleet terminates the instances in the Spot Instance pools that have the least available
   *          Spot Instance capacity. If the allocation strategy is <code>diversified</code>, the EC2 Fleet terminates
   *          instances across the Spot Instance pools. Alternatively, you can request that the EC2 Fleet keep
   *          the fleet at its current size, but not replace any Spot Instances that are interrupted or
   *          that you terminate manually.</p>
   *          <p>If you are finished with your EC2 Fleet for now, but will use it again later, you can set the
   *          target capacity to 0.</p>
   */
  public modifyFleet(args: ModifyFleetCommandInput, options?: __HttpHandlerOptions): Promise<ModifyFleetCommandOutput>;
  public modifyFleet(args: ModifyFleetCommandInput, cb: (err: any, data?: ModifyFleetCommandOutput) => void): void;
  public modifyFleet(
    args: ModifyFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyFleetCommandOutput) => void
  ): void;
  public modifyFleet(
    args: ModifyFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyFleetCommandOutput) => void),
    cb?: (err: any, data?: ModifyFleetCommandOutput) => void
  ): Promise<ModifyFleetCommandOutput> | void {
    const command = new ModifyFleetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the specified attribute of the specified Amazon FPGA Image (AFI).</p>
   */
  public modifyFpgaImageAttribute(
    args: ModifyFpgaImageAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyFpgaImageAttributeCommandOutput>;
  public modifyFpgaImageAttribute(
    args: ModifyFpgaImageAttributeCommandInput,
    cb: (err: any, data?: ModifyFpgaImageAttributeCommandOutput) => void
  ): void;
  public modifyFpgaImageAttribute(
    args: ModifyFpgaImageAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyFpgaImageAttributeCommandOutput) => void
  ): void;
  public modifyFpgaImageAttribute(
    args: ModifyFpgaImageAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyFpgaImageAttributeCommandOutput) => void),
    cb?: (err: any, data?: ModifyFpgaImageAttributeCommandOutput) => void
  ): Promise<ModifyFpgaImageAttributeCommandOutput> | void {
    const command = new ModifyFpgaImageAttributeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modify the auto-placement setting of a Dedicated Host. When auto-placement is enabled,
   *             any instances that you launch with a tenancy of <code>host</code> but without a specific host
   *         	ID are placed onto any available Dedicated Host in your account that has auto-placement enabled.
   *         	When auto-placement is disabled, you need to provide a host ID to have the instance launch onto
   *         	a specific host. If no host ID is provided, the instance is launched onto a suitable host with
   *         	auto-placement enabled.</p>
   *     	    <p>You can also use this API action to modify a Dedicated Host to support either multiple
   *     		instance types in an instance family, or to support a specific instance type only.</p>
   */
  public modifyHosts(args: ModifyHostsCommandInput, options?: __HttpHandlerOptions): Promise<ModifyHostsCommandOutput>;
  public modifyHosts(args: ModifyHostsCommandInput, cb: (err: any, data?: ModifyHostsCommandOutput) => void): void;
  public modifyHosts(
    args: ModifyHostsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyHostsCommandOutput) => void
  ): void;
  public modifyHosts(
    args: ModifyHostsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyHostsCommandOutput) => void),
    cb?: (err: any, data?: ModifyHostsCommandOutput) => void
  ): Promise<ModifyHostsCommandOutput> | void {
    const command = new ModifyHostsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the ID format of a resource for a specified IAM user, IAM role, or the root
   *        user for an account; or all IAM users, IAM roles, and the root user for an account. You can
   *        specify that resources should receive longer IDs (17-character IDs) when they are created. </p>
   *          <p>This request can only be used to modify longer ID settings for resource types that are
   *        within the opt-in period. Resources currently in their opt-in period include:
   *                 <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
   *                 <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
   *                 <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
   *                 <code>import-task</code> | <code>internet-gateway</code> | <code>network-acl</code>
   *             | <code>network-acl-association</code> | <code>network-interface</code> |
   *                 <code>network-interface-attachment</code> | <code>prefix-list</code> |
   *                 <code>route-table</code> | <code>route-table-association</code> |
   *                 <code>security-group</code> | <code>subnet</code> |
   *                 <code>subnet-cidr-block-association</code> | <code>vpc</code> |
   *         <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resource-ids.html">Resource IDs</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>. </p>
   *          <p>This setting applies to the principal specified in the request; it does not apply to the
   *       principal that makes the request. </p>
   *          <p>Resources created with longer IDs are visible to all IAM roles and users, regardless of these
   *       settings and provided that they have permission to use the relevant <code>Describe</code>
   *       command for the resource type.</p>
   */
  public modifyIdentityIdFormat(
    args: ModifyIdentityIdFormatCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyIdentityIdFormatCommandOutput>;
  public modifyIdentityIdFormat(
    args: ModifyIdentityIdFormatCommandInput,
    cb: (err: any, data?: ModifyIdentityIdFormatCommandOutput) => void
  ): void;
  public modifyIdentityIdFormat(
    args: ModifyIdentityIdFormatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyIdentityIdFormatCommandOutput) => void
  ): void;
  public modifyIdentityIdFormat(
    args: ModifyIdentityIdFormatCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyIdentityIdFormatCommandOutput) => void),
    cb?: (err: any, data?: ModifyIdentityIdFormatCommandOutput) => void
  ): Promise<ModifyIdentityIdFormatCommandOutput> | void {
    const command = new ModifyIdentityIdFormatCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the ID format for the specified resource on a per-Region basis. You can
   *             specify that resources should receive longer IDs (17-character IDs) when they are
   *             created.</p>
   *          <p>This request can only be used to modify longer ID settings for resource types that
   *             are within the opt-in period. Resources currently in their opt-in period include:
   *             <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
   *             <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
   *             <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
   *             <code>import-task</code> | <code>internet-gateway</code> | <code>network-acl</code>
   *             | <code>network-acl-association</code> | <code>network-interface</code> |
   *             <code>network-interface-attachment</code> | <code>prefix-list</code> |
   *             <code>route-table</code> | <code>route-table-association</code> |
   *             <code>security-group</code> | <code>subnet</code> |
   *             <code>subnet-cidr-block-association</code> | <code>vpc</code> |
   *             <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>.</p>
   *          <p>This setting applies to the IAM user who makes the request; it does not apply to the
   *         entire AWS account. By default, an IAM user defaults to the same settings as the root user. If
   *         you're using this action as the root user, then these settings apply to the entire account,
   *         unless an IAM user explicitly overrides these settings for themselves. For more information,
   *         see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resource-ids.html">Resource IDs</a>
   *         in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>Resources created with longer IDs are visible to all IAM roles and users, regardless
   *         of these settings and provided that they have permission to use the relevant
   *         <code>Describe</code> command for the resource type.</p>
   */
  public modifyIdFormat(
    args: ModifyIdFormatCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyIdFormatCommandOutput>;
  public modifyIdFormat(
    args: ModifyIdFormatCommandInput,
    cb: (err: any, data?: ModifyIdFormatCommandOutput) => void
  ): void;
  public modifyIdFormat(
    args: ModifyIdFormatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyIdFormatCommandOutput) => void
  ): void;
  public modifyIdFormat(
    args: ModifyIdFormatCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyIdFormatCommandOutput) => void),
    cb?: (err: any, data?: ModifyIdFormatCommandOutput) => void
  ): Promise<ModifyIdFormatCommandOutput> | void {
    const command = new ModifyIdFormatCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the specified attribute of the specified AMI. You can specify only one attribute at a time.
   *        You can use the <code>Attribute</code> parameter to specify the attribute or one of the following parameters:
   *        <code>Description</code>, <code>LaunchPermission</code>, or <code>ProductCode</code>.</p>
   *          <p>AWS Marketplace product codes cannot be modified. Images with an AWS Marketplace product code cannot be made public.</p>
   *          <p>To enable the SriovNetSupport enhanced networking attribute of an image, enable SriovNetSupport on an instance
   *        and create an AMI from the instance.</p>
   */
  public modifyImageAttribute(
    args: ModifyImageAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyImageAttributeCommandOutput>;
  public modifyImageAttribute(
    args: ModifyImageAttributeCommandInput,
    cb: (err: any, data?: ModifyImageAttributeCommandOutput) => void
  ): void;
  public modifyImageAttribute(
    args: ModifyImageAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyImageAttributeCommandOutput) => void
  ): void;
  public modifyImageAttribute(
    args: ModifyImageAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyImageAttributeCommandOutput) => void),
    cb?: (err: any, data?: ModifyImageAttributeCommandOutput) => void
  ): Promise<ModifyImageAttributeCommandOutput> | void {
    const command = new ModifyImageAttributeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the specified attribute of the specified instance. You can specify only one
   *             attribute at a time.</p>
   *         <p>
   *             <b>Note: </b>Using this action to change the security groups
   *             associated with an elastic network interface (ENI) attached to an instance in a VPC can
   *             result in an error if the instance has more than one ENI. To change the security groups
   *             associated with an ENI attached to an instance that has multiple ENIs, we recommend that
   *             you use the <a>ModifyNetworkInterfaceAttribute</a> action.</p>
   *         <p>To modify some attributes, the instance must be stopped. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_ChangingAttributesWhileInstanceStopped.html">Modifying attributes of a stopped instance</a> in the <i>Amazon Elastic
   *                 Compute Cloud User Guide</i>.</p>
   */
  public modifyInstanceAttribute(
    args: ModifyInstanceAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyInstanceAttributeCommandOutput>;
  public modifyInstanceAttribute(
    args: ModifyInstanceAttributeCommandInput,
    cb: (err: any, data?: ModifyInstanceAttributeCommandOutput) => void
  ): void;
  public modifyInstanceAttribute(
    args: ModifyInstanceAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyInstanceAttributeCommandOutput) => void
  ): void;
  public modifyInstanceAttribute(
    args: ModifyInstanceAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyInstanceAttributeCommandOutput) => void),
    cb?: (err: any, data?: ModifyInstanceAttributeCommandOutput) => void
  ): Promise<ModifyInstanceAttributeCommandOutput> | void {
    const command = new ModifyInstanceAttributeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the Capacity Reservation settings for a stopped instance. Use this action to configure an
   * 			instance to target a specific Capacity Reservation, run in any <code>open</code> Capacity Reservation with matching
   * 			attributes, or run On-Demand Instance capacity.</p>
   */
  public modifyInstanceCapacityReservationAttributes(
    args: ModifyInstanceCapacityReservationAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyInstanceCapacityReservationAttributesCommandOutput>;
  public modifyInstanceCapacityReservationAttributes(
    args: ModifyInstanceCapacityReservationAttributesCommandInput,
    cb: (err: any, data?: ModifyInstanceCapacityReservationAttributesCommandOutput) => void
  ): void;
  public modifyInstanceCapacityReservationAttributes(
    args: ModifyInstanceCapacityReservationAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyInstanceCapacityReservationAttributesCommandOutput) => void
  ): void;
  public modifyInstanceCapacityReservationAttributes(
    args: ModifyInstanceCapacityReservationAttributesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ModifyInstanceCapacityReservationAttributesCommandOutput) => void),
    cb?: (err: any, data?: ModifyInstanceCapacityReservationAttributesCommandOutput) => void
  ): Promise<ModifyInstanceCapacityReservationAttributesCommandOutput> | void {
    const command = new ModifyInstanceCapacityReservationAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the credit option for CPU usage on a running or stopped burstable performance
   *             instance. The credit options are <code>standard</code> and
   *             <code>unlimited</code>.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
   *                 performance instances</a> in the <i>Amazon Elastic Compute Cloud User
   *                 Guide</i>.</p>
   */
  public modifyInstanceCreditSpecification(
    args: ModifyInstanceCreditSpecificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyInstanceCreditSpecificationCommandOutput>;
  public modifyInstanceCreditSpecification(
    args: ModifyInstanceCreditSpecificationCommandInput,
    cb: (err: any, data?: ModifyInstanceCreditSpecificationCommandOutput) => void
  ): void;
  public modifyInstanceCreditSpecification(
    args: ModifyInstanceCreditSpecificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyInstanceCreditSpecificationCommandOutput) => void
  ): void;
  public modifyInstanceCreditSpecification(
    args: ModifyInstanceCreditSpecificationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyInstanceCreditSpecificationCommandOutput) => void),
    cb?: (err: any, data?: ModifyInstanceCreditSpecificationCommandOutput) => void
  ): Promise<ModifyInstanceCreditSpecificationCommandOutput> | void {
    const command = new ModifyInstanceCreditSpecificationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the start time for a scheduled Amazon EC2 instance event.</p>
   */
  public modifyInstanceEventStartTime(
    args: ModifyInstanceEventStartTimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyInstanceEventStartTimeCommandOutput>;
  public modifyInstanceEventStartTime(
    args: ModifyInstanceEventStartTimeCommandInput,
    cb: (err: any, data?: ModifyInstanceEventStartTimeCommandOutput) => void
  ): void;
  public modifyInstanceEventStartTime(
    args: ModifyInstanceEventStartTimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyInstanceEventStartTimeCommandOutput) => void
  ): void;
  public modifyInstanceEventStartTime(
    args: ModifyInstanceEventStartTimeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyInstanceEventStartTimeCommandOutput) => void),
    cb?: (err: any, data?: ModifyInstanceEventStartTimeCommandOutput) => void
  ): Promise<ModifyInstanceEventStartTimeCommandOutput> | void {
    const command = new ModifyInstanceEventStartTimeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modify the instance metadata parameters on a running or stopped instance. When you
   *             modify the parameters on a stopped instance, they are applied when the instance is
   *             started. When you modify the parameters on a running instance, the API responds with a
   *             state of “pending”. After the parameter modifications are successfully applied to the
   *             instance, the state of the modifications changes from “pending” to “applied” in
   *             subsequent describe-instances API calls. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a>.</p>
   */
  public modifyInstanceMetadataOptions(
    args: ModifyInstanceMetadataOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyInstanceMetadataOptionsCommandOutput>;
  public modifyInstanceMetadataOptions(
    args: ModifyInstanceMetadataOptionsCommandInput,
    cb: (err: any, data?: ModifyInstanceMetadataOptionsCommandOutput) => void
  ): void;
  public modifyInstanceMetadataOptions(
    args: ModifyInstanceMetadataOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyInstanceMetadataOptionsCommandOutput) => void
  ): void;
  public modifyInstanceMetadataOptions(
    args: ModifyInstanceMetadataOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyInstanceMetadataOptionsCommandOutput) => void),
    cb?: (err: any, data?: ModifyInstanceMetadataOptionsCommandOutput) => void
  ): Promise<ModifyInstanceMetadataOptionsCommandOutput> | void {
    const command = new ModifyInstanceMetadataOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the placement attributes for a specified instance. You can do the
   *             following:</p>
   *         <ul>
   *             <li>
   *                 <p>Modify the affinity between an instance and a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html">Dedicated
   *                         Host</a>. When affinity is set to <code>host</code> and the instance is
   *                     not associated with a specific Dedicated Host, the next time the instance is
   *                     launched, it is automatically associated with the host on which it lands. If the
   *                     instance is restarted or rebooted, this relationship persists.</p>
   *             </li>
   *             <li>
   *                 <p>Change the Dedicated Host with which an instance is associated.</p>
   *             </li>
   *             <li>
   *                 <p>Change the instance tenancy of an instance from <code>host</code> to
   *                         <code>dedicated</code>, or from <code>dedicated</code> to
   *                     <code>host</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Move an instance to or from a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">placement
   *                     group</a>.</p>
   *             </li>
   *          </ul>
   *         <p>At least one attribute for affinity, host ID, tenancy, or placement group name must
   *             be specified in the request. Affinity and tenancy can be modified in the same
   *             request.</p>
   *         <p>To modify the host ID, tenancy, placement group, or partition for an instance, the
   *             instance must be in the <code>stopped</code> state.</p>
   */
  public modifyInstancePlacement(
    args: ModifyInstancePlacementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyInstancePlacementCommandOutput>;
  public modifyInstancePlacement(
    args: ModifyInstancePlacementCommandInput,
    cb: (err: any, data?: ModifyInstancePlacementCommandOutput) => void
  ): void;
  public modifyInstancePlacement(
    args: ModifyInstancePlacementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyInstancePlacementCommandOutput) => void
  ): void;
  public modifyInstancePlacement(
    args: ModifyInstancePlacementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyInstancePlacementCommandOutput) => void),
    cb?: (err: any, data?: ModifyInstancePlacementCommandOutput) => void
  ): Promise<ModifyInstancePlacementCommandOutput> | void {
    const command = new ModifyInstancePlacementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies a launch template. You can specify which version of the launch template to
   *             set as the default version. When launching an instance, the default version applies when
   *             a launch template version is not specified.</p>
   */
  public modifyLaunchTemplate(
    args: ModifyLaunchTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyLaunchTemplateCommandOutput>;
  public modifyLaunchTemplate(
    args: ModifyLaunchTemplateCommandInput,
    cb: (err: any, data?: ModifyLaunchTemplateCommandOutput) => void
  ): void;
  public modifyLaunchTemplate(
    args: ModifyLaunchTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyLaunchTemplateCommandOutput) => void
  ): void;
  public modifyLaunchTemplate(
    args: ModifyLaunchTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyLaunchTemplateCommandOutput) => void),
    cb?: (err: any, data?: ModifyLaunchTemplateCommandOutput) => void
  ): Promise<ModifyLaunchTemplateCommandOutput> | void {
    const command = new ModifyLaunchTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the specified managed prefix list.</p>
   *         <p>Adding or removing entries in a prefix list creates a new version of the prefix list.
   *             Changing the name of the prefix list does not affect the version.</p>
   *         <p>If you specify a current version number that does not match the true current version
   *             number, the request fails.</p>
   */
  public modifyManagedPrefixList(
    args: ModifyManagedPrefixListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyManagedPrefixListCommandOutput>;
  public modifyManagedPrefixList(
    args: ModifyManagedPrefixListCommandInput,
    cb: (err: any, data?: ModifyManagedPrefixListCommandOutput) => void
  ): void;
  public modifyManagedPrefixList(
    args: ModifyManagedPrefixListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyManagedPrefixListCommandOutput) => void
  ): void;
  public modifyManagedPrefixList(
    args: ModifyManagedPrefixListCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyManagedPrefixListCommandOutput) => void),
    cb?: (err: any, data?: ModifyManagedPrefixListCommandOutput) => void
  ): Promise<ModifyManagedPrefixListCommandOutput> | void {
    const command = new ModifyManagedPrefixListCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the specified network interface attribute. You can specify only one
   *             attribute at a time. You can use this action to attach and detach security groups from
   *             an existing EC2 instance.</p>
   */
  public modifyNetworkInterfaceAttribute(
    args: ModifyNetworkInterfaceAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyNetworkInterfaceAttributeCommandOutput>;
  public modifyNetworkInterfaceAttribute(
    args: ModifyNetworkInterfaceAttributeCommandInput,
    cb: (err: any, data?: ModifyNetworkInterfaceAttributeCommandOutput) => void
  ): void;
  public modifyNetworkInterfaceAttribute(
    args: ModifyNetworkInterfaceAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyNetworkInterfaceAttributeCommandOutput) => void
  ): void;
  public modifyNetworkInterfaceAttribute(
    args: ModifyNetworkInterfaceAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyNetworkInterfaceAttributeCommandOutput) => void),
    cb?: (err: any, data?: ModifyNetworkInterfaceAttributeCommandOutput) => void
  ): Promise<ModifyNetworkInterfaceAttributeCommandOutput> | void {
    const command = new ModifyNetworkInterfaceAttributeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the Availability Zone, instance count, instance type, or network platform
   *             (EC2-Classic or EC2-VPC) of your Reserved Instances. The Reserved Instances to be
   *             modified must be identical, except for Availability Zone, network platform, and instance
   *             type.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html">Modifying Reserved
   * 				Instances</a> in the Amazon Elastic Compute Cloud User Guide.</p>
   */
  public modifyReservedInstances(
    args: ModifyReservedInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyReservedInstancesCommandOutput>;
  public modifyReservedInstances(
    args: ModifyReservedInstancesCommandInput,
    cb: (err: any, data?: ModifyReservedInstancesCommandOutput) => void
  ): void;
  public modifyReservedInstances(
    args: ModifyReservedInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyReservedInstancesCommandOutput) => void
  ): void;
  public modifyReservedInstances(
    args: ModifyReservedInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyReservedInstancesCommandOutput) => void),
    cb?: (err: any, data?: ModifyReservedInstancesCommandOutput) => void
  ): Promise<ModifyReservedInstancesCommandOutput> | void {
    const command = new ModifyReservedInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds or removes permission settings for the specified snapshot. You may add or remove
   *       specified AWS account IDs from a snapshot's list of create volume permissions, but you cannot
   *       do both in a single operation. If you need to both add and remove account IDs for a snapshot,
   *       you must use multiple operations. You can make up to 500 modifications to a snapshot in a single operation.</p>
   *          <p>Encrypted snapshots and snapshots with AWS Marketplace product codes cannot be made
   *       public. Snapshots encrypted with your default CMK cannot be shared with other accounts.</p>
   *          <p>For more information about modifying snapshot permissions, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html">Sharing snapshots</a> in the
   *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public modifySnapshotAttribute(
    args: ModifySnapshotAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifySnapshotAttributeCommandOutput>;
  public modifySnapshotAttribute(
    args: ModifySnapshotAttributeCommandInput,
    cb: (err: any, data?: ModifySnapshotAttributeCommandOutput) => void
  ): void;
  public modifySnapshotAttribute(
    args: ModifySnapshotAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifySnapshotAttributeCommandOutput) => void
  ): void;
  public modifySnapshotAttribute(
    args: ModifySnapshotAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifySnapshotAttributeCommandOutput) => void),
    cb?: (err: any, data?: ModifySnapshotAttributeCommandOutput) => void
  ): Promise<ModifySnapshotAttributeCommandOutput> | void {
    const command = new ModifySnapshotAttributeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the specified Spot Fleet request.</p>
   *          <p>You can only modify a Spot Fleet request of type <code>maintain</code>.</p>
   *          <p>While the Spot Fleet request is being modified, it is in the <code>modifying</code> state.</p>
   *          <p>To scale up your Spot Fleet, increase its target capacity. The Spot Fleet launches the
   *             additional Spot Instances according to the allocation strategy for the Spot Fleet
   *             request. If the allocation strategy is <code>lowestPrice</code>, the Spot Fleet launches
   *             instances using the Spot Instance pool with the lowest price. If the allocation strategy
   *             is <code>diversified</code>, the Spot Fleet distributes the instances across the Spot
   *             Instance pools. If the allocation strategy is <code>capacityOptimized</code>, Spot Fleet
   *             launches instances from Spot Instance pools with optimal capacity for the number of instances
   *             that are launching.</p>
   *          <p>To scale down your Spot Fleet, decrease its target capacity. First, the Spot Fleet
   *             cancels any open requests that exceed the new target capacity. You can request that the
   *             Spot Fleet terminate Spot Instances until the size of the fleet no longer exceeds the
   *             new target capacity. If the allocation strategy is <code>lowestPrice</code>, the Spot
   *             Fleet terminates the instances with the highest price per unit. If the allocation
   *             strategy is <code>capacityOptimized</code>, the Spot Fleet terminates the instances in
   *             the Spot Instance pools that have the least available Spot Instance capacity. If the allocation
   *             strategy is <code>diversified</code>, the Spot Fleet terminates instances across the
   *             Spot Instance pools. Alternatively, you can request that the Spot Fleet keep the fleet
   *             at its current size, but not replace any Spot Instances that are interrupted or that you
   *             terminate manually.</p>
   *          <p>If you are finished with your Spot Fleet for now, but will use it again later, you can set the
   *        target capacity to 0.</p>
   */
  public modifySpotFleetRequest(
    args: ModifySpotFleetRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifySpotFleetRequestCommandOutput>;
  public modifySpotFleetRequest(
    args: ModifySpotFleetRequestCommandInput,
    cb: (err: any, data?: ModifySpotFleetRequestCommandOutput) => void
  ): void;
  public modifySpotFleetRequest(
    args: ModifySpotFleetRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifySpotFleetRequestCommandOutput) => void
  ): void;
  public modifySpotFleetRequest(
    args: ModifySpotFleetRequestCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifySpotFleetRequestCommandOutput) => void),
    cb?: (err: any, data?: ModifySpotFleetRequestCommandOutput) => void
  ): Promise<ModifySpotFleetRequestCommandOutput> | void {
    const command = new ModifySpotFleetRequestCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies a subnet attribute. You can only modify one attribute at a time.</p>
   */
  public modifySubnetAttribute(
    args: ModifySubnetAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifySubnetAttributeCommandOutput>;
  public modifySubnetAttribute(
    args: ModifySubnetAttributeCommandInput,
    cb: (err: any, data?: ModifySubnetAttributeCommandOutput) => void
  ): void;
  public modifySubnetAttribute(
    args: ModifySubnetAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifySubnetAttributeCommandOutput) => void
  ): void;
  public modifySubnetAttribute(
    args: ModifySubnetAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifySubnetAttributeCommandOutput) => void),
    cb?: (err: any, data?: ModifySubnetAttributeCommandOutput) => void
  ): Promise<ModifySubnetAttributeCommandOutput> | void {
    const command = new ModifySubnetAttributeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Allows or restricts mirroring network services.</p>
   *          <p> By default, Amazon DNS network services are not eligible for Traffic Mirror. Use <code>AddNetworkServices</code> to add network services to a Traffic Mirror filter. When a network service is added to the Traffic Mirror filter, all traffic related to that network service will be mirrored.
   *          When you no longer want to mirror network services, use <code>RemoveNetworkServices</code> to remove the network services from the Traffic Mirror filter.
   *       </p>
   *          <p>For information about filter rule properties, see
   *          <a href="https://docs.aws.amazon.com/vpc/latest/mirroring/traffic-mirroring-considerations.html">Network Services</a> in the <i>Traffic Mirroring User Guide </i>.</p>
   */
  public modifyTrafficMirrorFilterNetworkServices(
    args: ModifyTrafficMirrorFilterNetworkServicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyTrafficMirrorFilterNetworkServicesCommandOutput>;
  public modifyTrafficMirrorFilterNetworkServices(
    args: ModifyTrafficMirrorFilterNetworkServicesCommandInput,
    cb: (err: any, data?: ModifyTrafficMirrorFilterNetworkServicesCommandOutput) => void
  ): void;
  public modifyTrafficMirrorFilterNetworkServices(
    args: ModifyTrafficMirrorFilterNetworkServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyTrafficMirrorFilterNetworkServicesCommandOutput) => void
  ): void;
  public modifyTrafficMirrorFilterNetworkServices(
    args: ModifyTrafficMirrorFilterNetworkServicesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ModifyTrafficMirrorFilterNetworkServicesCommandOutput) => void),
    cb?: (err: any, data?: ModifyTrafficMirrorFilterNetworkServicesCommandOutput) => void
  ): Promise<ModifyTrafficMirrorFilterNetworkServicesCommandOutput> | void {
    const command = new ModifyTrafficMirrorFilterNetworkServicesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the specified Traffic Mirror rule.</p>
   *          <p>
   *             <code>DestinationCidrBlock</code> and <code>SourceCidrBlock</code> must both be an IPv4
   *          range or an IPv6 range.</p>
   */
  public modifyTrafficMirrorFilterRule(
    args: ModifyTrafficMirrorFilterRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyTrafficMirrorFilterRuleCommandOutput>;
  public modifyTrafficMirrorFilterRule(
    args: ModifyTrafficMirrorFilterRuleCommandInput,
    cb: (err: any, data?: ModifyTrafficMirrorFilterRuleCommandOutput) => void
  ): void;
  public modifyTrafficMirrorFilterRule(
    args: ModifyTrafficMirrorFilterRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyTrafficMirrorFilterRuleCommandOutput) => void
  ): void;
  public modifyTrafficMirrorFilterRule(
    args: ModifyTrafficMirrorFilterRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyTrafficMirrorFilterRuleCommandOutput) => void),
    cb?: (err: any, data?: ModifyTrafficMirrorFilterRuleCommandOutput) => void
  ): Promise<ModifyTrafficMirrorFilterRuleCommandOutput> | void {
    const command = new ModifyTrafficMirrorFilterRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies a Traffic Mirror session.</p>
   */
  public modifyTrafficMirrorSession(
    args: ModifyTrafficMirrorSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyTrafficMirrorSessionCommandOutput>;
  public modifyTrafficMirrorSession(
    args: ModifyTrafficMirrorSessionCommandInput,
    cb: (err: any, data?: ModifyTrafficMirrorSessionCommandOutput) => void
  ): void;
  public modifyTrafficMirrorSession(
    args: ModifyTrafficMirrorSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyTrafficMirrorSessionCommandOutput) => void
  ): void;
  public modifyTrafficMirrorSession(
    args: ModifyTrafficMirrorSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyTrafficMirrorSessionCommandOutput) => void),
    cb?: (err: any, data?: ModifyTrafficMirrorSessionCommandOutput) => void
  ): Promise<ModifyTrafficMirrorSessionCommandOutput> | void {
    const command = new ModifyTrafficMirrorSessionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the specified transit gateway. When you modify a transit gateway, the modified options are applied to new transit gateway attachments only. Your existing transit gateway attachments are not modified.</p>
   */
  public modifyTransitGateway(
    args: ModifyTransitGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyTransitGatewayCommandOutput>;
  public modifyTransitGateway(
    args: ModifyTransitGatewayCommandInput,
    cb: (err: any, data?: ModifyTransitGatewayCommandOutput) => void
  ): void;
  public modifyTransitGateway(
    args: ModifyTransitGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyTransitGatewayCommandOutput) => void
  ): void;
  public modifyTransitGateway(
    args: ModifyTransitGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyTransitGatewayCommandOutput) => void),
    cb?: (err: any, data?: ModifyTransitGatewayCommandOutput) => void
  ): Promise<ModifyTransitGatewayCommandOutput> | void {
    const command = new ModifyTransitGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies a reference (route) to a prefix list in a specified transit gateway route table.</p>
   */
  public modifyTransitGatewayPrefixListReference(
    args: ModifyTransitGatewayPrefixListReferenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyTransitGatewayPrefixListReferenceCommandOutput>;
  public modifyTransitGatewayPrefixListReference(
    args: ModifyTransitGatewayPrefixListReferenceCommandInput,
    cb: (err: any, data?: ModifyTransitGatewayPrefixListReferenceCommandOutput) => void
  ): void;
  public modifyTransitGatewayPrefixListReference(
    args: ModifyTransitGatewayPrefixListReferenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyTransitGatewayPrefixListReferenceCommandOutput) => void
  ): void;
  public modifyTransitGatewayPrefixListReference(
    args: ModifyTransitGatewayPrefixListReferenceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ModifyTransitGatewayPrefixListReferenceCommandOutput) => void),
    cb?: (err: any, data?: ModifyTransitGatewayPrefixListReferenceCommandOutput) => void
  ): Promise<ModifyTransitGatewayPrefixListReferenceCommandOutput> | void {
    const command = new ModifyTransitGatewayPrefixListReferenceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the specified VPC attachment.</p>
   */
  public modifyTransitGatewayVpcAttachment(
    args: ModifyTransitGatewayVpcAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyTransitGatewayVpcAttachmentCommandOutput>;
  public modifyTransitGatewayVpcAttachment(
    args: ModifyTransitGatewayVpcAttachmentCommandInput,
    cb: (err: any, data?: ModifyTransitGatewayVpcAttachmentCommandOutput) => void
  ): void;
  public modifyTransitGatewayVpcAttachment(
    args: ModifyTransitGatewayVpcAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyTransitGatewayVpcAttachmentCommandOutput) => void
  ): void;
  public modifyTransitGatewayVpcAttachment(
    args: ModifyTransitGatewayVpcAttachmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyTransitGatewayVpcAttachmentCommandOutput) => void),
    cb?: (err: any, data?: ModifyTransitGatewayVpcAttachmentCommandOutput) => void
  ): Promise<ModifyTransitGatewayVpcAttachmentCommandOutput> | void {
    const command = new ModifyTransitGatewayVpcAttachmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>You can modify several parameters of an existing EBS volume, including volume size, volume
   *       type, and IOPS capacity. If your EBS volume is attached to a current-generation EC2 instance
   *       type, you might be able to apply these changes without stopping the instance or detaching the
   *       volume from it. For more information about modifying an EBS volume running Linux, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-expand-volume.html">Modifying the size, IOPS, or
   *         type of an EBS volume on Linux</a>. For more information about modifying an EBS volume
   *       running Windows, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ebs-expand-volume.html">Modifying the size, IOPS, or type of an EBS volume on Windows</a>.</p>
   *          <p> When you complete a resize operation on your volume, you need to extend the volume's
   *       file-system size to take advantage of the new storage capacity. For information about
   *       extending a Linux file system, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-expand-volume.html#recognize-expanded-volume-linux">Extending a Linux
   *         file system</a>. For information about extending a Windows file system, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ebs-expand-volume.html#recognize-expanded-volume-windows">Extending a
   *         Windows file system</a>. </p>
   *          <p> You can use CloudWatch Events to check the status of a modification to an EBS volume. For
   *       information about CloudWatch Events, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/">Amazon CloudWatch Events User Guide</a>. You can also track the status of a
   *       modification using <a>DescribeVolumesModifications</a>. For information
   *       about tracking status changes using either method, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-expand-volume.html#monitoring_mods">Monitoring volume
   *         modifications</a>. </p>
   *          <p>With previous-generation instance types, resizing an EBS volume might require detaching and
   *       reattaching the volume or stopping and restarting the instance. For more information, see
   *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modify-volume.html">Amazon EBS Elastic
   *           Volumes</a> (Linux) or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ebs-modify-volume.html">Amazon EBS Elastic Volumes</a> (Windows).</p>
   *          <p>If you reach the maximum volume modification rate per volume limit, you will need to wait
   *       at least six hours before applying further modifications to the affected EBS volume.</p>
   */
  public modifyVolume(
    args: ModifyVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVolumeCommandOutput>;
  public modifyVolume(args: ModifyVolumeCommandInput, cb: (err: any, data?: ModifyVolumeCommandOutput) => void): void;
  public modifyVolume(
    args: ModifyVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVolumeCommandOutput) => void
  ): void;
  public modifyVolume(
    args: ModifyVolumeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyVolumeCommandOutput) => void),
    cb?: (err: any, data?: ModifyVolumeCommandOutput) => void
  ): Promise<ModifyVolumeCommandOutput> | void {
    const command = new ModifyVolumeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies a volume attribute.</p>
   *          <p>By default, all I/O operations for the volume are suspended when the data on the volume is
   *       determined to be potentially inconsistent, to prevent undetectable, latent data corruption.
   *       The I/O access to the volume can be resumed by first enabling I/O access and then checking the
   *       data consistency on your volume.</p>
   *          <p>You can change the default behavior to resume I/O operations. We recommend that you change
   *       this only for boot volumes or for volumes that are stateless or disposable.</p>
   */
  public modifyVolumeAttribute(
    args: ModifyVolumeAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVolumeAttributeCommandOutput>;
  public modifyVolumeAttribute(
    args: ModifyVolumeAttributeCommandInput,
    cb: (err: any, data?: ModifyVolumeAttributeCommandOutput) => void
  ): void;
  public modifyVolumeAttribute(
    args: ModifyVolumeAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVolumeAttributeCommandOutput) => void
  ): void;
  public modifyVolumeAttribute(
    args: ModifyVolumeAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyVolumeAttributeCommandOutput) => void),
    cb?: (err: any, data?: ModifyVolumeAttributeCommandOutput) => void
  ): Promise<ModifyVolumeAttributeCommandOutput> | void {
    const command = new ModifyVolumeAttributeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the specified attribute of the specified VPC.</p>
   */
  public modifyVpcAttribute(
    args: ModifyVpcAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVpcAttributeCommandOutput>;
  public modifyVpcAttribute(
    args: ModifyVpcAttributeCommandInput,
    cb: (err: any, data?: ModifyVpcAttributeCommandOutput) => void
  ): void;
  public modifyVpcAttribute(
    args: ModifyVpcAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVpcAttributeCommandOutput) => void
  ): void;
  public modifyVpcAttribute(
    args: ModifyVpcAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyVpcAttributeCommandOutput) => void),
    cb?: (err: any, data?: ModifyVpcAttributeCommandOutput) => void
  ): Promise<ModifyVpcAttributeCommandOutput> | void {
    const command = new ModifyVpcAttributeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies attributes of a specified VPC endpoint. The attributes that you can modify
   *             depend on the type of VPC endpoint (interface, gateway, or Gateway Load Balancer). For more information, see
   *             <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html">VPC
   *                 Endpoints</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  public modifyVpcEndpoint(
    args: ModifyVpcEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVpcEndpointCommandOutput>;
  public modifyVpcEndpoint(
    args: ModifyVpcEndpointCommandInput,
    cb: (err: any, data?: ModifyVpcEndpointCommandOutput) => void
  ): void;
  public modifyVpcEndpoint(
    args: ModifyVpcEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVpcEndpointCommandOutput) => void
  ): void;
  public modifyVpcEndpoint(
    args: ModifyVpcEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyVpcEndpointCommandOutput) => void),
    cb?: (err: any, data?: ModifyVpcEndpointCommandOutput) => void
  ): Promise<ModifyVpcEndpointCommandOutput> | void {
    const command = new ModifyVpcEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies a connection notification for VPC endpoint or VPC endpoint service. You
   *             can change the SNS topic for the notification, or the events for which to be notified. </p>
   */
  public modifyVpcEndpointConnectionNotification(
    args: ModifyVpcEndpointConnectionNotificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVpcEndpointConnectionNotificationCommandOutput>;
  public modifyVpcEndpointConnectionNotification(
    args: ModifyVpcEndpointConnectionNotificationCommandInput,
    cb: (err: any, data?: ModifyVpcEndpointConnectionNotificationCommandOutput) => void
  ): void;
  public modifyVpcEndpointConnectionNotification(
    args: ModifyVpcEndpointConnectionNotificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVpcEndpointConnectionNotificationCommandOutput) => void
  ): void;
  public modifyVpcEndpointConnectionNotification(
    args: ModifyVpcEndpointConnectionNotificationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ModifyVpcEndpointConnectionNotificationCommandOutput) => void),
    cb?: (err: any, data?: ModifyVpcEndpointConnectionNotificationCommandOutput) => void
  ): Promise<ModifyVpcEndpointConnectionNotificationCommandOutput> | void {
    const command = new ModifyVpcEndpointConnectionNotificationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the attributes of your VPC endpoint service configuration. You can change the
   *             Network Load Balancers or Gateway Load Balancers for your service, and you can specify whether acceptance is
   *             required for requests to connect to your endpoint service through an interface VPC
   *             endpoint.</p>
   * 	        <p>If you set or modify the private DNS name, you must prove that you own the private DNS
   *             domain name. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-dns-validation.html">VPC Endpoint Service
   *                 Private DNS Name Verification</a> in the
   *             <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  public modifyVpcEndpointServiceConfiguration(
    args: ModifyVpcEndpointServiceConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVpcEndpointServiceConfigurationCommandOutput>;
  public modifyVpcEndpointServiceConfiguration(
    args: ModifyVpcEndpointServiceConfigurationCommandInput,
    cb: (err: any, data?: ModifyVpcEndpointServiceConfigurationCommandOutput) => void
  ): void;
  public modifyVpcEndpointServiceConfiguration(
    args: ModifyVpcEndpointServiceConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVpcEndpointServiceConfigurationCommandOutput) => void
  ): void;
  public modifyVpcEndpointServiceConfiguration(
    args: ModifyVpcEndpointServiceConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ModifyVpcEndpointServiceConfigurationCommandOutput) => void),
    cb?: (err: any, data?: ModifyVpcEndpointServiceConfigurationCommandOutput) => void
  ): Promise<ModifyVpcEndpointServiceConfigurationCommandOutput> | void {
    const command = new ModifyVpcEndpointServiceConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the permissions for your <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-service.html">VPC endpoint service</a>. You can add or remove permissions for service consumers (IAM users,
   * 	        IAM roles, and AWS accounts) to connect to your endpoint service.</p>
   * 	        <p>If you grant permissions to all principals, the service is public. Any users who know the name of a
   * 	        public service can send a request to attach an endpoint. If the service does not require manual approval,
   * 	        attachments are automatically approved.</p>
   */
  public modifyVpcEndpointServicePermissions(
    args: ModifyVpcEndpointServicePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVpcEndpointServicePermissionsCommandOutput>;
  public modifyVpcEndpointServicePermissions(
    args: ModifyVpcEndpointServicePermissionsCommandInput,
    cb: (err: any, data?: ModifyVpcEndpointServicePermissionsCommandOutput) => void
  ): void;
  public modifyVpcEndpointServicePermissions(
    args: ModifyVpcEndpointServicePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVpcEndpointServicePermissionsCommandOutput) => void
  ): void;
  public modifyVpcEndpointServicePermissions(
    args: ModifyVpcEndpointServicePermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyVpcEndpointServicePermissionsCommandOutput) => void),
    cb?: (err: any, data?: ModifyVpcEndpointServicePermissionsCommandOutput) => void
  ): Promise<ModifyVpcEndpointServicePermissionsCommandOutput> | void {
    const command = new ModifyVpcEndpointServicePermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the VPC peering connection options on one side of a VPC peering connection. You can do the following:</p>
   *          <ul>
   *             <li>
   *                <p>Enable/disable communication over the peering connection between an EC2-Classic instance that's linked to your VPC (using ClassicLink) and instances in the peer VPC.</p>
   *             </li>
   *             <li>
   *                <p>Enable/disable communication over the peering connection between instances in your VPC and an EC2-Classic instance that's linked to the peer VPC.</p>
   *             </li>
   *             <li>
   *                <p>Enable/disable the ability to resolve public DNS hostnames to private IP
   *                     addresses when queried from instances in the peer VPC.</p>
   *             </li>
   *          </ul>
   *          <p>If the peered VPCs are in the same AWS account, you can enable DNS resolution for queries
   *             from the local VPC. This ensures that queries from the local VPC resolve to private IP
   *             addresses in the peer VPC. This option is not available if the peered VPCs are in
   *             different AWS accounts or different Regions. For peered VPCs in different AWS accounts,
   *             each AWS account owner must initiate a separate request to modify the peering connection
   *             options. For inter-region peering connections, you must use the Region for the requester
   *             VPC to modify the requester VPC peering options and the Region for the accepter VPC to
   *             modify the accepter VPC peering options. To verify which VPCs are the accepter and the
   *             requester for a VPC peering connection, use the <a>DescribeVpcPeeringConnections</a> command.</p>
   */
  public modifyVpcPeeringConnectionOptions(
    args: ModifyVpcPeeringConnectionOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVpcPeeringConnectionOptionsCommandOutput>;
  public modifyVpcPeeringConnectionOptions(
    args: ModifyVpcPeeringConnectionOptionsCommandInput,
    cb: (err: any, data?: ModifyVpcPeeringConnectionOptionsCommandOutput) => void
  ): void;
  public modifyVpcPeeringConnectionOptions(
    args: ModifyVpcPeeringConnectionOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVpcPeeringConnectionOptionsCommandOutput) => void
  ): void;
  public modifyVpcPeeringConnectionOptions(
    args: ModifyVpcPeeringConnectionOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyVpcPeeringConnectionOptionsCommandOutput) => void),
    cb?: (err: any, data?: ModifyVpcPeeringConnectionOptionsCommandOutput) => void
  ): Promise<ModifyVpcPeeringConnectionOptionsCommandOutput> | void {
    const command = new ModifyVpcPeeringConnectionOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the instance tenancy attribute of the specified VPC. You can change the
   *             instance tenancy attribute of a VPC to <code>default</code> only. You cannot change the
   *             instance tenancy attribute to <code>dedicated</code>.</p>
   *         <p>After you modify the tenancy of the VPC, any new instances that you launch into the
   *             VPC have a tenancy of <code>default</code>, unless you specify otherwise during launch.
   *             The tenancy of any existing instances in the VPC is not affected.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html">Dedicated Instances</a> in the
   * 				<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public modifyVpcTenancy(
    args: ModifyVpcTenancyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVpcTenancyCommandOutput>;
  public modifyVpcTenancy(
    args: ModifyVpcTenancyCommandInput,
    cb: (err: any, data?: ModifyVpcTenancyCommandOutput) => void
  ): void;
  public modifyVpcTenancy(
    args: ModifyVpcTenancyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVpcTenancyCommandOutput) => void
  ): void;
  public modifyVpcTenancy(
    args: ModifyVpcTenancyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyVpcTenancyCommandOutput) => void),
    cb?: (err: any, data?: ModifyVpcTenancyCommandOutput) => void
  ): Promise<ModifyVpcTenancyCommandOutput> | void {
    const command = new ModifyVpcTenancyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the customer gateway or the target gateway of an AWS Site-to-Site VPN connection. To modify the target gateway, the following migration
   *             options are available:</p>
   *         <ul>
   *             <li>
   *                 <p>An existing virtual private gateway to a new virtual private gateway</p>
   *             </li>
   *             <li>
   *                 <p>An existing virtual private gateway to a transit gateway</p>
   *             </li>
   *             <li>
   *                 <p>An existing transit gateway to a new transit gateway</p>
   *             </li>
   *             <li>
   *                 <p>An existing transit gateway to a virtual private gateway</p>
   *             </li>
   *          </ul>
   *         <p>Before you perform the migration to the new gateway, you must configure the new gateway. Use <a>CreateVpnGateway</a> to create a virtual private gateway, or <a>CreateTransitGateway</a> to create a transit gateway.</p>
   *         <p>This step is required when you migrate from a virtual private gateway with static routes to
   *             a transit gateway. </p>
   *         <p>You must delete the static routes before you migrate to the new gateway.</p>
   *
   *         <p>Keep a copy of the static route before you delete it. You will need to add back these
   *             routes to the transit gateway after the VPN connection migration is complete.</p>
   *
   *         <p>After you migrate to the new gateway, you might need to modify your VPC route table. Use <a>CreateRoute</a> and <a>DeleteRoute</a> to make the changes described in <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/modify-vpn-target.html#step-update-routing">VPN Gateway Target Modification Required VPC Route Table Updates</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
   *         <p>
   *             When the new gateway is a transit gateway, modify the transit gateway route table to allow traffic between the VPC and the  AWS Site-to-Site VPN connection. Use <a>CreateTransitGatewayRoute</a> to add the routes.</p>
   *
   *         <p> If you deleted VPN static routes, you must add the static routes to the transit gateway
   *             route table.</p>
   *         <p>After you perform this operation, the AWS VPN endpoint's IP addresses on the AWS side and
   *             the tunnel options remain intact. Your AWS Site-to-Site VPN connection will be temporarily unavailable
   *             for a brief period while we provision the new endpoints.</p>
   */
  public modifyVpnConnection(
    args: ModifyVpnConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVpnConnectionCommandOutput>;
  public modifyVpnConnection(
    args: ModifyVpnConnectionCommandInput,
    cb: (err: any, data?: ModifyVpnConnectionCommandOutput) => void
  ): void;
  public modifyVpnConnection(
    args: ModifyVpnConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVpnConnectionCommandOutput) => void
  ): void;
  public modifyVpnConnection(
    args: ModifyVpnConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyVpnConnectionCommandOutput) => void),
    cb?: (err: any, data?: ModifyVpnConnectionCommandOutput) => void
  ): Promise<ModifyVpnConnectionCommandOutput> | void {
    const command = new ModifyVpnConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the connection options for your Site-to-Site VPN connection.</p>
   *         <p>When you modify the VPN connection options, the VPN endpoint IP addresses on the AWS side do not change, and the tunnel options do not change. Your VPN connection will be temporarily unavailable for a brief period while the VPN connection is updated.</p>
   */
  public modifyVpnConnectionOptions(
    args: ModifyVpnConnectionOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVpnConnectionOptionsCommandOutput>;
  public modifyVpnConnectionOptions(
    args: ModifyVpnConnectionOptionsCommandInput,
    cb: (err: any, data?: ModifyVpnConnectionOptionsCommandOutput) => void
  ): void;
  public modifyVpnConnectionOptions(
    args: ModifyVpnConnectionOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVpnConnectionOptionsCommandOutput) => void
  ): void;
  public modifyVpnConnectionOptions(
    args: ModifyVpnConnectionOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyVpnConnectionOptionsCommandOutput) => void),
    cb?: (err: any, data?: ModifyVpnConnectionOptionsCommandOutput) => void
  ): Promise<ModifyVpnConnectionOptionsCommandOutput> | void {
    const command = new ModifyVpnConnectionOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the VPN tunnel endpoint certificate.</p>
   */
  public modifyVpnTunnelCertificate(
    args: ModifyVpnTunnelCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVpnTunnelCertificateCommandOutput>;
  public modifyVpnTunnelCertificate(
    args: ModifyVpnTunnelCertificateCommandInput,
    cb: (err: any, data?: ModifyVpnTunnelCertificateCommandOutput) => void
  ): void;
  public modifyVpnTunnelCertificate(
    args: ModifyVpnTunnelCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVpnTunnelCertificateCommandOutput) => void
  ): void;
  public modifyVpnTunnelCertificate(
    args: ModifyVpnTunnelCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyVpnTunnelCertificateCommandOutput) => void),
    cb?: (err: any, data?: ModifyVpnTunnelCertificateCommandOutput) => void
  ): Promise<ModifyVpnTunnelCertificateCommandOutput> | void {
    const command = new ModifyVpnTunnelCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the options for a VPN tunnel in an AWS Site-to-Site VPN connection. You can modify
   *             multiple options for a tunnel in a single request, but you can only modify one tunnel at
   *             a time. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPNTunnels.html">Site-to-Site VPN Tunnel Options for Your Site-to-Site VPN
   *                 Connection</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
   */
  public modifyVpnTunnelOptions(
    args: ModifyVpnTunnelOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyVpnTunnelOptionsCommandOutput>;
  public modifyVpnTunnelOptions(
    args: ModifyVpnTunnelOptionsCommandInput,
    cb: (err: any, data?: ModifyVpnTunnelOptionsCommandOutput) => void
  ): void;
  public modifyVpnTunnelOptions(
    args: ModifyVpnTunnelOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyVpnTunnelOptionsCommandOutput) => void
  ): void;
  public modifyVpnTunnelOptions(
    args: ModifyVpnTunnelOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyVpnTunnelOptionsCommandOutput) => void),
    cb?: (err: any, data?: ModifyVpnTunnelOptionsCommandOutput) => void
  ): Promise<ModifyVpnTunnelOptionsCommandOutput> | void {
    const command = new ModifyVpnTunnelOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enables detailed monitoring for a running instance. Otherwise, basic monitoring is
   *             enabled. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch.html">Monitoring your instances and
   *                 volumes</a> in the <i>Amazon Elastic Compute Cloud User
   *             Guide</i>.</p>
   *         <p>To disable detailed monitoring, see .</p>
   */
  public monitorInstances(
    args: MonitorInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MonitorInstancesCommandOutput>;
  public monitorInstances(
    args: MonitorInstancesCommandInput,
    cb: (err: any, data?: MonitorInstancesCommandOutput) => void
  ): void;
  public monitorInstances(
    args: MonitorInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MonitorInstancesCommandOutput) => void
  ): void;
  public monitorInstances(
    args: MonitorInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MonitorInstancesCommandOutput) => void),
    cb?: (err: any, data?: MonitorInstancesCommandOutput) => void
  ): Promise<MonitorInstancesCommandOutput> | void {
    const command = new MonitorInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Moves an Elastic IP address from the EC2-Classic platform to the EC2-VPC platform. The
   *       Elastic IP address must be allocated to your account for more than 24 hours, and it must not
   *       be associated with an instance. After the Elastic IP address is moved, it is no longer
   *       available for use in the EC2-Classic platform, unless you move it back using the
   *         <a>RestoreAddressToClassic</a> request. You cannot move an Elastic IP address that was
   *       originally allocated for use in the EC2-VPC platform to the EC2-Classic platform. </p>
   */
  public moveAddressToVpc(
    args: MoveAddressToVpcCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MoveAddressToVpcCommandOutput>;
  public moveAddressToVpc(
    args: MoveAddressToVpcCommandInput,
    cb: (err: any, data?: MoveAddressToVpcCommandOutput) => void
  ): void;
  public moveAddressToVpc(
    args: MoveAddressToVpcCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MoveAddressToVpcCommandOutput) => void
  ): void;
  public moveAddressToVpc(
    args: MoveAddressToVpcCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MoveAddressToVpcCommandOutput) => void),
    cb?: (err: any, data?: MoveAddressToVpcCommandOutput) => void
  ): Promise<MoveAddressToVpcCommandOutput> | void {
    const command = new MoveAddressToVpcCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provisions an IPv4 or IPv6 address range for use with your AWS resources through bring your own IP
   *          addresses (BYOIP) and creates a corresponding address pool. After the address range is
   *          provisioned, it is ready to be advertised using <a>AdvertiseByoipCidr</a>.</p>
   *          <p>AWS verifies that you own the address range and are authorized to advertise it.
   *          You must ensure that the address range is registered to you and that you created an
   *          RPKI ROA to authorize Amazon ASNs 16509 and 14618 to advertise the address range.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>Provisioning an address range is an asynchronous operation, so the call returns immediately,
   *          but the address range is not ready to use until its status changes from <code>pending-provision</code>
   *          to <code>provisioned</code>. To monitor the status of an address range, use <a>DescribeByoipCidrs</a>.
   *          To allocate an Elastic IP address from your IPv4 address pool, use <a>AllocateAddress</a>
   *          with either the specific address from the address pool or the ID of the address pool.</p>
   */
  public provisionByoipCidr(
    args: ProvisionByoipCidrCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ProvisionByoipCidrCommandOutput>;
  public provisionByoipCidr(
    args: ProvisionByoipCidrCommandInput,
    cb: (err: any, data?: ProvisionByoipCidrCommandOutput) => void
  ): void;
  public provisionByoipCidr(
    args: ProvisionByoipCidrCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ProvisionByoipCidrCommandOutput) => void
  ): void;
  public provisionByoipCidr(
    args: ProvisionByoipCidrCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ProvisionByoipCidrCommandOutput) => void),
    cb?: (err: any, data?: ProvisionByoipCidrCommandOutput) => void
  ): Promise<ProvisionByoipCidrCommandOutput> | void {
    const command = new ProvisionByoipCidrCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Purchase a reservation with configurations that match those of your Dedicated Host.
   *             You must have active Dedicated Hosts in your account before you purchase a reservation.
   *             This action results in the specified reservation being purchased and charged to your
   *             account.</p>
   */
  public purchaseHostReservation(
    args: PurchaseHostReservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PurchaseHostReservationCommandOutput>;
  public purchaseHostReservation(
    args: PurchaseHostReservationCommandInput,
    cb: (err: any, data?: PurchaseHostReservationCommandOutput) => void
  ): void;
  public purchaseHostReservation(
    args: PurchaseHostReservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PurchaseHostReservationCommandOutput) => void
  ): void;
  public purchaseHostReservation(
    args: PurchaseHostReservationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PurchaseHostReservationCommandOutput) => void),
    cb?: (err: any, data?: PurchaseHostReservationCommandOutput) => void
  ): Promise<PurchaseHostReservationCommandOutput> | void {
    const command = new PurchaseHostReservationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Purchases a Reserved Instance for use with your account. With Reserved Instances, you pay a lower
   *        hourly rate compared to On-Demand instance pricing.</p>
   * 		       <p>Use <a>DescribeReservedInstancesOfferings</a> to get a list of Reserved Instance offerings
   * 			that match your specifications. After you've purchased a Reserved Instance, you can check for your
   * 			new Reserved Instance with <a>DescribeReservedInstances</a>.</p>
   *          <p>To queue a purchase for a future date and time, specify a purchase time. If you do not specify a
   *       purchase time, the default is the current time.</p>
   *    	     <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts-on-demand-reserved-instances.html">Reserved Instances</a> and
   *    	   <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a>
   *    	   in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public purchaseReservedInstancesOffering(
    args: PurchaseReservedInstancesOfferingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PurchaseReservedInstancesOfferingCommandOutput>;
  public purchaseReservedInstancesOffering(
    args: PurchaseReservedInstancesOfferingCommandInput,
    cb: (err: any, data?: PurchaseReservedInstancesOfferingCommandOutput) => void
  ): void;
  public purchaseReservedInstancesOffering(
    args: PurchaseReservedInstancesOfferingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PurchaseReservedInstancesOfferingCommandOutput) => void
  ): void;
  public purchaseReservedInstancesOffering(
    args: PurchaseReservedInstancesOfferingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PurchaseReservedInstancesOfferingCommandOutput) => void),
    cb?: (err: any, data?: PurchaseReservedInstancesOfferingCommandOutput) => void
  ): Promise<PurchaseReservedInstancesOfferingCommandOutput> | void {
    const command = new PurchaseReservedInstancesOfferingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Purchases the Scheduled Instances with the specified schedule.</p>
   *          <p>Scheduled Instances enable you to purchase Amazon EC2 compute capacity by the hour for a one-year term.
   *          Before you can purchase a Scheduled Instance, you must call <a>DescribeScheduledInstanceAvailability</a>
   *          to check for available schedules and obtain a purchase token. After you purchase a Scheduled Instance,
   *          you must call <a>RunScheduledInstances</a> during each scheduled time period.</p>
   *          <p>After you purchase a Scheduled Instance, you can't cancel, modify, or resell your purchase.</p>
   */
  public purchaseScheduledInstances(
    args: PurchaseScheduledInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PurchaseScheduledInstancesCommandOutput>;
  public purchaseScheduledInstances(
    args: PurchaseScheduledInstancesCommandInput,
    cb: (err: any, data?: PurchaseScheduledInstancesCommandOutput) => void
  ): void;
  public purchaseScheduledInstances(
    args: PurchaseScheduledInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PurchaseScheduledInstancesCommandOutput) => void
  ): void;
  public purchaseScheduledInstances(
    args: PurchaseScheduledInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PurchaseScheduledInstancesCommandOutput) => void),
    cb?: (err: any, data?: PurchaseScheduledInstancesCommandOutput) => void
  ): Promise<PurchaseScheduledInstancesCommandOutput> | void {
    const command = new PurchaseScheduledInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Requests a reboot of the specified instances. This operation is asynchronous; it only
   *             queues a request to reboot the specified instances. The operation succeeds if the
   *             instances are valid and belong to you. Requests to reboot terminated instances are
   *             ignored.</p>
   *         <p>If an instance does not cleanly shut down within a few minutes, Amazon EC2 performs a
   *             hard reboot.</p>
   *         <p>For more information about troubleshooting, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-console.html">Getting console output and
   *                 rebooting instances</a> in the <i>Amazon Elastic Compute Cloud User
   *                 Guide</i>.</p>
   */
  public rebootInstances(
    args: RebootInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootInstancesCommandOutput>;
  public rebootInstances(
    args: RebootInstancesCommandInput,
    cb: (err: any, data?: RebootInstancesCommandOutput) => void
  ): void;
  public rebootInstances(
    args: RebootInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootInstancesCommandOutput) => void
  ): void;
  public rebootInstances(
    args: RebootInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RebootInstancesCommandOutput) => void),
    cb?: (err: any, data?: RebootInstancesCommandOutput) => void
  ): Promise<RebootInstancesCommandOutput> | void {
    const command = new RebootInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Registers an AMI. When you're creating an AMI, this is the final step you must complete
   *       before you can launch an instance from the AMI. For more information about creating AMIs, see
   *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami.html">Creating your
   *         own AMIs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <note>
   *             <p>For Amazon EBS-backed instances, <a>CreateImage</a> creates and registers the AMI in a single request, so you don't have to register the AMI yourself.</p>
   *          </note>
   *
   *          <p>You can also use <code>RegisterImage</code> to create an Amazon EBS-backed Linux AMI from
   *       a snapshot of a root device volume. You specify the snapshot using the block device mapping.
   *       For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-launch-snapshot.html">Launching a Linux instance from
   *         a backup</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   *          <p>If any snapshots have AWS Marketplace product codes, they are copied to the new
   *       AMI.</p>
   *          <p>Windows and some Linux distributions, such as Red Hat Enterprise Linux (RHEL) and SUSE
   *       Linux Enterprise Server (SLES), use the EC2 billing product code associated with an AMI to
   *       verify the subscription status for package updates. To create a new AMI for operating systems
   *       that require a billing product code, instead of registering the AMI, do the following to
   *       preserve the billing product code association:</p>
   *          <ol>
   *             <li>
   *                <p>Launch an instance from an existing AMI with that billing product code.</p>
   *             </li>
   *             <li>
   *                <p>Customize the instance.</p>
   *             </li>
   *             <li>
   *                <p>Create an AMI from the instance using <a>CreateImage</a>.</p>
   *             </li>
   *          </ol>
   *          <p>If you purchase a Reserved Instance to apply to an On-Demand Instance that was launched
   *       from an AMI with a billing product code, make sure that the Reserved Instance has the matching
   *       billing product code. If you purchase a Reserved Instance without the matching billing product
   *       code, the Reserved Instance will not be applied to the On-Demand Instance. For information
   *       about how to obtain the platform details and billing information of an AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-billing-info.html">Obtaining billing
   *         information</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>If needed, you can deregister an AMI at any time. Any modifications you make to an AMI backed by an instance store volume invalidates its registration.
   *        If you make changes to an image, deregister the previous image and register the new image.</p>
   */
  public registerImage(
    args: RegisterImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterImageCommandOutput>;
  public registerImage(
    args: RegisterImageCommandInput,
    cb: (err: any, data?: RegisterImageCommandOutput) => void
  ): void;
  public registerImage(
    args: RegisterImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterImageCommandOutput) => void
  ): void;
  public registerImage(
    args: RegisterImageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterImageCommandOutput) => void),
    cb?: (err: any, data?: RegisterImageCommandOutput) => void
  ): Promise<RegisterImageCommandOutput> | void {
    const command = new RegisterImageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Registers a set of tag keys to include in scheduled event notifications for your resources.
   *    		</p>
   *          <p>To remove tags, use .</p>
   */
  public registerInstanceEventNotificationAttributes(
    args: RegisterInstanceEventNotificationAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterInstanceEventNotificationAttributesCommandOutput>;
  public registerInstanceEventNotificationAttributes(
    args: RegisterInstanceEventNotificationAttributesCommandInput,
    cb: (err: any, data?: RegisterInstanceEventNotificationAttributesCommandOutput) => void
  ): void;
  public registerInstanceEventNotificationAttributes(
    args: RegisterInstanceEventNotificationAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterInstanceEventNotificationAttributesCommandOutput) => void
  ): void;
  public registerInstanceEventNotificationAttributes(
    args: RegisterInstanceEventNotificationAttributesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RegisterInstanceEventNotificationAttributesCommandOutput) => void),
    cb?: (err: any, data?: RegisterInstanceEventNotificationAttributesCommandOutput) => void
  ): Promise<RegisterInstanceEventNotificationAttributesCommandOutput> | void {
    const command = new RegisterInstanceEventNotificationAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Registers members (network interfaces) with the  transit gateway multicast group. A member is a network interface associated
   *             with a supported EC2 instance that receives multicast traffic. For information about
   *             supported instances, see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/transit-gateway-limits.html#multicast-limits">Multicast
   *                 Consideration</a> in <i>Amazon VPC Transit Gateways</i>.</p>
   *         <p>After you add the members, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SearchTransitGatewayMulticastGroups.html">SearchTransitGatewayMulticastGroups</a> to verify that the members were added
   *             to the  transit gateway multicast group.</p>
   */
  public registerTransitGatewayMulticastGroupMembers(
    args: RegisterTransitGatewayMulticastGroupMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterTransitGatewayMulticastGroupMembersCommandOutput>;
  public registerTransitGatewayMulticastGroupMembers(
    args: RegisterTransitGatewayMulticastGroupMembersCommandInput,
    cb: (err: any, data?: RegisterTransitGatewayMulticastGroupMembersCommandOutput) => void
  ): void;
  public registerTransitGatewayMulticastGroupMembers(
    args: RegisterTransitGatewayMulticastGroupMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterTransitGatewayMulticastGroupMembersCommandOutput) => void
  ): void;
  public registerTransitGatewayMulticastGroupMembers(
    args: RegisterTransitGatewayMulticastGroupMembersCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RegisterTransitGatewayMulticastGroupMembersCommandOutput) => void),
    cb?: (err: any, data?: RegisterTransitGatewayMulticastGroupMembersCommandOutput) => void
  ): Promise<RegisterTransitGatewayMulticastGroupMembersCommandOutput> | void {
    const command = new RegisterTransitGatewayMulticastGroupMembersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Registers sources (network interfaces) with the specified  transit gateway multicast group.</p>
   *         <p>A multicast source is a network interface attached to a supported instance that sends
   *             multicast traffic. For information about supported instances, see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/transit-gateway-limits.html#multicast-limits">Multicast
   *                 Considerations</a> in <i>Amazon VPC Transit Gateways</i>.</p>
   *         <p>After you add the source, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SearchTransitGatewayMulticastGroups.html">SearchTransitGatewayMulticastGroups</a> to verify that the source was added to the multicast
   *             group.</p>
   */
  public registerTransitGatewayMulticastGroupSources(
    args: RegisterTransitGatewayMulticastGroupSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterTransitGatewayMulticastGroupSourcesCommandOutput>;
  public registerTransitGatewayMulticastGroupSources(
    args: RegisterTransitGatewayMulticastGroupSourcesCommandInput,
    cb: (err: any, data?: RegisterTransitGatewayMulticastGroupSourcesCommandOutput) => void
  ): void;
  public registerTransitGatewayMulticastGroupSources(
    args: RegisterTransitGatewayMulticastGroupSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterTransitGatewayMulticastGroupSourcesCommandOutput) => void
  ): void;
  public registerTransitGatewayMulticastGroupSources(
    args: RegisterTransitGatewayMulticastGroupSourcesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RegisterTransitGatewayMulticastGroupSourcesCommandOutput) => void),
    cb?: (err: any, data?: RegisterTransitGatewayMulticastGroupSourcesCommandOutput) => void
  ): Promise<RegisterTransitGatewayMulticastGroupSourcesCommandOutput> | void {
    const command = new RegisterTransitGatewayMulticastGroupSourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Rejects a request to associate cross-account subnets with a transit gateway multicast domain.</p>
   */
  public rejectTransitGatewayMulticastDomainAssociations(
    args: RejectTransitGatewayMulticastDomainAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectTransitGatewayMulticastDomainAssociationsCommandOutput>;
  public rejectTransitGatewayMulticastDomainAssociations(
    args: RejectTransitGatewayMulticastDomainAssociationsCommandInput,
    cb: (err: any, data?: RejectTransitGatewayMulticastDomainAssociationsCommandOutput) => void
  ): void;
  public rejectTransitGatewayMulticastDomainAssociations(
    args: RejectTransitGatewayMulticastDomainAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectTransitGatewayMulticastDomainAssociationsCommandOutput) => void
  ): void;
  public rejectTransitGatewayMulticastDomainAssociations(
    args: RejectTransitGatewayMulticastDomainAssociationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RejectTransitGatewayMulticastDomainAssociationsCommandOutput) => void),
    cb?: (err: any, data?: RejectTransitGatewayMulticastDomainAssociationsCommandOutput) => void
  ): Promise<RejectTransitGatewayMulticastDomainAssociationsCommandOutput> | void {
    const command = new RejectTransitGatewayMulticastDomainAssociationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Rejects a transit gateway peering attachment request.</p>
   */
  public rejectTransitGatewayPeeringAttachment(
    args: RejectTransitGatewayPeeringAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectTransitGatewayPeeringAttachmentCommandOutput>;
  public rejectTransitGatewayPeeringAttachment(
    args: RejectTransitGatewayPeeringAttachmentCommandInput,
    cb: (err: any, data?: RejectTransitGatewayPeeringAttachmentCommandOutput) => void
  ): void;
  public rejectTransitGatewayPeeringAttachment(
    args: RejectTransitGatewayPeeringAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectTransitGatewayPeeringAttachmentCommandOutput) => void
  ): void;
  public rejectTransitGatewayPeeringAttachment(
    args: RejectTransitGatewayPeeringAttachmentCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RejectTransitGatewayPeeringAttachmentCommandOutput) => void),
    cb?: (err: any, data?: RejectTransitGatewayPeeringAttachmentCommandOutput) => void
  ): Promise<RejectTransitGatewayPeeringAttachmentCommandOutput> | void {
    const command = new RejectTransitGatewayPeeringAttachmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Rejects a request to attach a VPC to a transit gateway.</p>
   *          <p>The VPC attachment must be in the <code>pendingAcceptance</code> state.
   *          Use <a>DescribeTransitGatewayVpcAttachments</a> to view your pending VPC attachment requests.
   *          Use <a>AcceptTransitGatewayVpcAttachment</a> to accept a VPC attachment request.</p>
   */
  public rejectTransitGatewayVpcAttachment(
    args: RejectTransitGatewayVpcAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectTransitGatewayVpcAttachmentCommandOutput>;
  public rejectTransitGatewayVpcAttachment(
    args: RejectTransitGatewayVpcAttachmentCommandInput,
    cb: (err: any, data?: RejectTransitGatewayVpcAttachmentCommandOutput) => void
  ): void;
  public rejectTransitGatewayVpcAttachment(
    args: RejectTransitGatewayVpcAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectTransitGatewayVpcAttachmentCommandOutput) => void
  ): void;
  public rejectTransitGatewayVpcAttachment(
    args: RejectTransitGatewayVpcAttachmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RejectTransitGatewayVpcAttachmentCommandOutput) => void),
    cb?: (err: any, data?: RejectTransitGatewayVpcAttachmentCommandOutput) => void
  ): Promise<RejectTransitGatewayVpcAttachmentCommandOutput> | void {
    const command = new RejectTransitGatewayVpcAttachmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Rejects one or more VPC endpoint connection requests to your VPC endpoint
   *             service.</p>
   */
  public rejectVpcEndpointConnections(
    args: RejectVpcEndpointConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectVpcEndpointConnectionsCommandOutput>;
  public rejectVpcEndpointConnections(
    args: RejectVpcEndpointConnectionsCommandInput,
    cb: (err: any, data?: RejectVpcEndpointConnectionsCommandOutput) => void
  ): void;
  public rejectVpcEndpointConnections(
    args: RejectVpcEndpointConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectVpcEndpointConnectionsCommandOutput) => void
  ): void;
  public rejectVpcEndpointConnections(
    args: RejectVpcEndpointConnectionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RejectVpcEndpointConnectionsCommandOutput) => void),
    cb?: (err: any, data?: RejectVpcEndpointConnectionsCommandOutput) => void
  ): Promise<RejectVpcEndpointConnectionsCommandOutput> | void {
    const command = new RejectVpcEndpointConnectionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Rejects a VPC peering connection request. The VPC peering connection must be in the
   * 				<code>pending-acceptance</code> state. Use the <a>DescribeVpcPeeringConnections</a> request
   * 			to view your outstanding VPC peering connection requests. To delete an active VPC peering
   * 			connection, or to delete a VPC peering connection request that you initiated, use	<a>DeleteVpcPeeringConnection</a>.</p>
   */
  public rejectVpcPeeringConnection(
    args: RejectVpcPeeringConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectVpcPeeringConnectionCommandOutput>;
  public rejectVpcPeeringConnection(
    args: RejectVpcPeeringConnectionCommandInput,
    cb: (err: any, data?: RejectVpcPeeringConnectionCommandOutput) => void
  ): void;
  public rejectVpcPeeringConnection(
    args: RejectVpcPeeringConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectVpcPeeringConnectionCommandOutput) => void
  ): void;
  public rejectVpcPeeringConnection(
    args: RejectVpcPeeringConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RejectVpcPeeringConnectionCommandOutput) => void),
    cb?: (err: any, data?: RejectVpcPeeringConnectionCommandOutput) => void
  ): Promise<RejectVpcPeeringConnectionCommandOutput> | void {
    const command = new RejectVpcPeeringConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Releases the specified Elastic IP address.</p>
   *          <p>[EC2-Classic, default VPC] Releasing an Elastic IP address automatically disassociates it
   * 				from any instance that it's associated with. To disassociate an Elastic IP address without
   * 				releasing it, use <a>DisassociateAddress</a>.</p>
   *          <p>[Nondefault VPC] You must use <a>DisassociateAddress</a> to disassociate the Elastic IP address
   * 			  before you can release it. Otherwise, Amazon EC2 returns an error (<code>InvalidIPAddress.InUse</code>).</p>
   *          <p>After releasing an Elastic IP address, it is released to the IP address pool.
   *         Be sure to update your DNS records and any servers or devices that communicate with the address.
   *         If you attempt to release an Elastic IP address that you already released, you'll get an
   *         <code>AuthFailure</code> error if the address is already allocated to another AWS account.</p>
   *          <p>[EC2-VPC] After you release an Elastic IP address for use in a VPC, you might be able to recover it.
   *         For more information, see <a>AllocateAddress</a>.</p>
   */
  public releaseAddress(
    args: ReleaseAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReleaseAddressCommandOutput>;
  public releaseAddress(
    args: ReleaseAddressCommandInput,
    cb: (err: any, data?: ReleaseAddressCommandOutput) => void
  ): void;
  public releaseAddress(
    args: ReleaseAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReleaseAddressCommandOutput) => void
  ): void;
  public releaseAddress(
    args: ReleaseAddressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ReleaseAddressCommandOutput) => void),
    cb?: (err: any, data?: ReleaseAddressCommandOutput) => void
  ): Promise<ReleaseAddressCommandOutput> | void {
    const command = new ReleaseAddressCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>When you no longer want to use an On-Demand Dedicated Host it can be released.
   *             On-Demand billing is stopped and the host goes into <code>released</code> state. The
   *             host ID of Dedicated Hosts that have been released can no longer be specified in another
   *             request, for example, to modify the host. You must stop or terminate all instances on a
   *             host before it can be released.</p>
   *         <p>When Dedicated Hosts are released, it may take some time for them to stop counting
   *             toward your limit and you may receive capacity errors when trying to allocate new
   *             Dedicated Hosts. Wait a few minutes and then try again.</p>
   *         <p>Released hosts still appear in a <a>DescribeHosts</a> response.</p>
   */
  public releaseHosts(
    args: ReleaseHostsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReleaseHostsCommandOutput>;
  public releaseHosts(args: ReleaseHostsCommandInput, cb: (err: any, data?: ReleaseHostsCommandOutput) => void): void;
  public releaseHosts(
    args: ReleaseHostsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReleaseHostsCommandOutput) => void
  ): void;
  public releaseHosts(
    args: ReleaseHostsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ReleaseHostsCommandOutput) => void),
    cb?: (err: any, data?: ReleaseHostsCommandOutput) => void
  ): Promise<ReleaseHostsCommandOutput> | void {
    const command = new ReleaseHostsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Replaces an IAM instance profile for the specified running instance. You can use
   *             this action to change the IAM instance profile that's associated with an instance
   *             without having to disassociate the existing IAM instance profile first.</p>
   *         <p>Use <a>DescribeIamInstanceProfileAssociations</a> to get the association
   *             ID.</p>
   */
  public replaceIamInstanceProfileAssociation(
    args: ReplaceIamInstanceProfileAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReplaceIamInstanceProfileAssociationCommandOutput>;
  public replaceIamInstanceProfileAssociation(
    args: ReplaceIamInstanceProfileAssociationCommandInput,
    cb: (err: any, data?: ReplaceIamInstanceProfileAssociationCommandOutput) => void
  ): void;
  public replaceIamInstanceProfileAssociation(
    args: ReplaceIamInstanceProfileAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReplaceIamInstanceProfileAssociationCommandOutput) => void
  ): void;
  public replaceIamInstanceProfileAssociation(
    args: ReplaceIamInstanceProfileAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ReplaceIamInstanceProfileAssociationCommandOutput) => void),
    cb?: (err: any, data?: ReplaceIamInstanceProfileAssociationCommandOutput) => void
  ): Promise<ReplaceIamInstanceProfileAssociationCommandOutput> | void {
    const command = new ReplaceIamInstanceProfileAssociationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Changes which network ACL a subnet is associated with. By default when you create a
   * 			subnet, it's automatically associated with the default network ACL. For more
   * 			information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network
   * 			ACLs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *         <p>This is an idempotent operation.</p>
   */
  public replaceNetworkAclAssociation(
    args: ReplaceNetworkAclAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReplaceNetworkAclAssociationCommandOutput>;
  public replaceNetworkAclAssociation(
    args: ReplaceNetworkAclAssociationCommandInput,
    cb: (err: any, data?: ReplaceNetworkAclAssociationCommandOutput) => void
  ): void;
  public replaceNetworkAclAssociation(
    args: ReplaceNetworkAclAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReplaceNetworkAclAssociationCommandOutput) => void
  ): void;
  public replaceNetworkAclAssociation(
    args: ReplaceNetworkAclAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ReplaceNetworkAclAssociationCommandOutput) => void),
    cb?: (err: any, data?: ReplaceNetworkAclAssociationCommandOutput) => void
  ): Promise<ReplaceNetworkAclAssociationCommandOutput> | void {
    const command = new ReplaceNetworkAclAssociationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Replaces an entry (rule) in a network ACL. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the
   * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  public replaceNetworkAclEntry(
    args: ReplaceNetworkAclEntryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReplaceNetworkAclEntryCommandOutput>;
  public replaceNetworkAclEntry(
    args: ReplaceNetworkAclEntryCommandInput,
    cb: (err: any, data?: ReplaceNetworkAclEntryCommandOutput) => void
  ): void;
  public replaceNetworkAclEntry(
    args: ReplaceNetworkAclEntryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReplaceNetworkAclEntryCommandOutput) => void
  ): void;
  public replaceNetworkAclEntry(
    args: ReplaceNetworkAclEntryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ReplaceNetworkAclEntryCommandOutput) => void),
    cb?: (err: any, data?: ReplaceNetworkAclEntryCommandOutput) => void
  ): Promise<ReplaceNetworkAclEntryCommandOutput> | void {
    const command = new ReplaceNetworkAclEntryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Replaces an existing route within a route table in a VPC. You must provide only one of
   *             the following: internet gateway, virtual private gateway, NAT instance, NAT gateway, VPC
   *             peering connection, network interface, egress-only internet gateway, or transit
   *             gateway.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route Tables</a> in the
   *                 <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  public replaceRoute(
    args: ReplaceRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReplaceRouteCommandOutput>;
  public replaceRoute(args: ReplaceRouteCommandInput, cb: (err: any, data?: ReplaceRouteCommandOutput) => void): void;
  public replaceRoute(
    args: ReplaceRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReplaceRouteCommandOutput) => void
  ): void;
  public replaceRoute(
    args: ReplaceRouteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ReplaceRouteCommandOutput) => void),
    cb?: (err: any, data?: ReplaceRouteCommandOutput) => void
  ): Promise<ReplaceRouteCommandOutput> | void {
    const command = new ReplaceRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Changes the route table associated with a given subnet, internet gateway, or virtual private gateway in a VPC. After the operation
   *       completes, the subnet or gateway uses the routes in the new route table. For more
   *       information about route tables, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route
   *         Tables</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *          <p>You can also use this operation to change which table is the main route table in the VPC. Specify the main route table's association ID and the route table ID of the new main route table.</p>
   */
  public replaceRouteTableAssociation(
    args: ReplaceRouteTableAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReplaceRouteTableAssociationCommandOutput>;
  public replaceRouteTableAssociation(
    args: ReplaceRouteTableAssociationCommandInput,
    cb: (err: any, data?: ReplaceRouteTableAssociationCommandOutput) => void
  ): void;
  public replaceRouteTableAssociation(
    args: ReplaceRouteTableAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReplaceRouteTableAssociationCommandOutput) => void
  ): void;
  public replaceRouteTableAssociation(
    args: ReplaceRouteTableAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ReplaceRouteTableAssociationCommandOutput) => void),
    cb?: (err: any, data?: ReplaceRouteTableAssociationCommandOutput) => void
  ): Promise<ReplaceRouteTableAssociationCommandOutput> | void {
    const command = new ReplaceRouteTableAssociationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Replaces the specified route in the specified transit gateway route table.</p>
   */
  public replaceTransitGatewayRoute(
    args: ReplaceTransitGatewayRouteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReplaceTransitGatewayRouteCommandOutput>;
  public replaceTransitGatewayRoute(
    args: ReplaceTransitGatewayRouteCommandInput,
    cb: (err: any, data?: ReplaceTransitGatewayRouteCommandOutput) => void
  ): void;
  public replaceTransitGatewayRoute(
    args: ReplaceTransitGatewayRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReplaceTransitGatewayRouteCommandOutput) => void
  ): void;
  public replaceTransitGatewayRoute(
    args: ReplaceTransitGatewayRouteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ReplaceTransitGatewayRouteCommandOutput) => void),
    cb?: (err: any, data?: ReplaceTransitGatewayRouteCommandOutput) => void
  ): Promise<ReplaceTransitGatewayRouteCommandOutput> | void {
    const command = new ReplaceTransitGatewayRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Submits feedback about the status of an instance. The instance must be in the
   *                 <code>running</code> state. If your experience with the instance differs from the
   *             instance status returned by <a>DescribeInstanceStatus</a>, use <a>ReportInstanceStatus</a> to report your experience with the instance. Amazon
   *             EC2 collects this information to improve the accuracy of status checks.</p>
   *         <p>Use of this action does not change the value returned by <a>DescribeInstanceStatus</a>.</p>
   */
  public reportInstanceStatus(
    args: ReportInstanceStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReportInstanceStatusCommandOutput>;
  public reportInstanceStatus(
    args: ReportInstanceStatusCommandInput,
    cb: (err: any, data?: ReportInstanceStatusCommandOutput) => void
  ): void;
  public reportInstanceStatus(
    args: ReportInstanceStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReportInstanceStatusCommandOutput) => void
  ): void;
  public reportInstanceStatus(
    args: ReportInstanceStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ReportInstanceStatusCommandOutput) => void),
    cb?: (err: any, data?: ReportInstanceStatusCommandOutput) => void
  ): Promise<ReportInstanceStatusCommandOutput> | void {
    const command = new ReportInstanceStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a Spot Fleet request.</p>
   *         <p>The Spot Fleet request specifies the total target capacity and the On-Demand target
   *             capacity. Amazon EC2 calculates the difference between the total capacity and On-Demand
   *             capacity, and launches the difference as Spot capacity.</p>
   *          <p>You can submit a single request that includes multiple launch specifications that vary by instance type, AMI, Availability Zone, or subnet.</p>
   *          <p>By default, the Spot Fleet requests Spot Instances in the Spot Instance pool where the
   *             price per unit is the lowest. Each launch specification can include its own instance
   *             weighting that reflects the value of the instance type to your application
   *             workload.</p>
   *          <p>Alternatively, you can specify that the Spot Fleet distribute the target capacity across the Spot pools included in its launch specifications. By ensuring that the Spot Instances in your Spot Fleet are in different Spot pools, you can improve the availability of your fleet.</p>
   *          <p>You can specify tags for the Spot Fleet request and instances launched by the fleet. You
   *             cannot tag other resource types in a Spot Fleet request because only the
   *                 <code>spot-fleet-request</code> and <code>instance</code> resource types are
   *             supported.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-requests.html">Spot Fleet requests</a>
   *        in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  public requestSpotFleet(
    args: RequestSpotFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RequestSpotFleetCommandOutput>;
  public requestSpotFleet(
    args: RequestSpotFleetCommandInput,
    cb: (err: any, data?: RequestSpotFleetCommandOutput) => void
  ): void;
  public requestSpotFleet(
    args: RequestSpotFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RequestSpotFleetCommandOutput) => void
  ): void;
  public requestSpotFleet(
    args: RequestSpotFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RequestSpotFleetCommandOutput) => void),
    cb?: (err: any, data?: RequestSpotFleetCommandOutput) => void
  ): Promise<RequestSpotFleetCommandOutput> | void {
    const command = new RequestSpotFleetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a Spot Instance request.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-requests.html">Spot Instance requests</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  public requestSpotInstances(
    args: RequestSpotInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RequestSpotInstancesCommandOutput>;
  public requestSpotInstances(
    args: RequestSpotInstancesCommandInput,
    cb: (err: any, data?: RequestSpotInstancesCommandOutput) => void
  ): void;
  public requestSpotInstances(
    args: RequestSpotInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RequestSpotInstancesCommandOutput) => void
  ): void;
  public requestSpotInstances(
    args: RequestSpotInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RequestSpotInstancesCommandOutput) => void),
    cb?: (err: any, data?: RequestSpotInstancesCommandOutput) => void
  ): Promise<RequestSpotInstancesCommandOutput> | void {
    const command = new RequestSpotInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public resetAddressAttribute(
    args: ResetAddressAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetAddressAttributeCommandOutput>;
  public resetAddressAttribute(
    args: ResetAddressAttributeCommandInput,
    cb: (err: any, data?: ResetAddressAttributeCommandOutput) => void
  ): void;
  public resetAddressAttribute(
    args: ResetAddressAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetAddressAttributeCommandOutput) => void
  ): void;
  public resetAddressAttribute(
    args: ResetAddressAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResetAddressAttributeCommandOutput) => void),
    cb?: (err: any, data?: ResetAddressAttributeCommandOutput) => void
  ): Promise<ResetAddressAttributeCommandOutput> | void {
    const command = new ResetAddressAttributeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Resets the default customer master key (CMK) for EBS encryption for your account in this Region
   *       to the AWS managed CMK for EBS.</p>
   *          <p>After resetting the default CMK to the AWS managed CMK, you can continue to encrypt by a
   *       customer managed CMK by specifying it when you create the volume. For more information, see
   *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a>
   *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public resetEbsDefaultKmsKeyId(
    args: ResetEbsDefaultKmsKeyIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetEbsDefaultKmsKeyIdCommandOutput>;
  public resetEbsDefaultKmsKeyId(
    args: ResetEbsDefaultKmsKeyIdCommandInput,
    cb: (err: any, data?: ResetEbsDefaultKmsKeyIdCommandOutput) => void
  ): void;
  public resetEbsDefaultKmsKeyId(
    args: ResetEbsDefaultKmsKeyIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetEbsDefaultKmsKeyIdCommandOutput) => void
  ): void;
  public resetEbsDefaultKmsKeyId(
    args: ResetEbsDefaultKmsKeyIdCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResetEbsDefaultKmsKeyIdCommandOutput) => void),
    cb?: (err: any, data?: ResetEbsDefaultKmsKeyIdCommandOutput) => void
  ): Promise<ResetEbsDefaultKmsKeyIdCommandOutput> | void {
    const command = new ResetEbsDefaultKmsKeyIdCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Resets the specified attribute of the specified Amazon FPGA Image (AFI) to its default value.
   * 		    You can only reset the load permission attribute.</p>
   */
  public resetFpgaImageAttribute(
    args: ResetFpgaImageAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetFpgaImageAttributeCommandOutput>;
  public resetFpgaImageAttribute(
    args: ResetFpgaImageAttributeCommandInput,
    cb: (err: any, data?: ResetFpgaImageAttributeCommandOutput) => void
  ): void;
  public resetFpgaImageAttribute(
    args: ResetFpgaImageAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetFpgaImageAttributeCommandOutput) => void
  ): void;
  public resetFpgaImageAttribute(
    args: ResetFpgaImageAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResetFpgaImageAttributeCommandOutput) => void),
    cb?: (err: any, data?: ResetFpgaImageAttributeCommandOutput) => void
  ): Promise<ResetFpgaImageAttributeCommandOutput> | void {
    const command = new ResetFpgaImageAttributeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Resets an attribute of an AMI to its default value.</p>
   *          <note>
   *             <p>The productCodes attribute can't be reset.</p>
   *          </note>
   */
  public resetImageAttribute(
    args: ResetImageAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetImageAttributeCommandOutput>;
  public resetImageAttribute(
    args: ResetImageAttributeCommandInput,
    cb: (err: any, data?: ResetImageAttributeCommandOutput) => void
  ): void;
  public resetImageAttribute(
    args: ResetImageAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetImageAttributeCommandOutput) => void
  ): void;
  public resetImageAttribute(
    args: ResetImageAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResetImageAttributeCommandOutput) => void),
    cb?: (err: any, data?: ResetImageAttributeCommandOutput) => void
  ): Promise<ResetImageAttributeCommandOutput> | void {
    const command = new ResetImageAttributeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Resets an attribute of an instance to its default value. To reset the
   *                 <code>kernel</code> or <code>ramdisk</code>, the instance must be in a stopped
   *             state. To reset the <code>sourceDestCheck</code>, the instance can be either running or
   *             stopped.</p>
   *         <p>The <code>sourceDestCheck</code> attribute controls whether source/destination
   *             checking is enabled. The default value is <code>true</code>, which means checking is
   *             enabled. This value must be <code>false</code> for a NAT instance to perform NAT. For
   *             more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_NAT_Instance.html">NAT Instances</a> in the
   *                 <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  public resetInstanceAttribute(
    args: ResetInstanceAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetInstanceAttributeCommandOutput>;
  public resetInstanceAttribute(
    args: ResetInstanceAttributeCommandInput,
    cb: (err: any, data?: ResetInstanceAttributeCommandOutput) => void
  ): void;
  public resetInstanceAttribute(
    args: ResetInstanceAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetInstanceAttributeCommandOutput) => void
  ): void;
  public resetInstanceAttribute(
    args: ResetInstanceAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResetInstanceAttributeCommandOutput) => void),
    cb?: (err: any, data?: ResetInstanceAttributeCommandOutput) => void
  ): Promise<ResetInstanceAttributeCommandOutput> | void {
    const command = new ResetInstanceAttributeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Resets a network interface attribute. You can specify only one attribute at a time.</p>
   */
  public resetNetworkInterfaceAttribute(
    args: ResetNetworkInterfaceAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetNetworkInterfaceAttributeCommandOutput>;
  public resetNetworkInterfaceAttribute(
    args: ResetNetworkInterfaceAttributeCommandInput,
    cb: (err: any, data?: ResetNetworkInterfaceAttributeCommandOutput) => void
  ): void;
  public resetNetworkInterfaceAttribute(
    args: ResetNetworkInterfaceAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetNetworkInterfaceAttributeCommandOutput) => void
  ): void;
  public resetNetworkInterfaceAttribute(
    args: ResetNetworkInterfaceAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResetNetworkInterfaceAttributeCommandOutput) => void),
    cb?: (err: any, data?: ResetNetworkInterfaceAttributeCommandOutput) => void
  ): Promise<ResetNetworkInterfaceAttributeCommandOutput> | void {
    const command = new ResetNetworkInterfaceAttributeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Resets permission settings for the specified snapshot.</p>
   *          <p>For more information about modifying snapshot permissions, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html">Sharing snapshots</a> in the
   *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public resetSnapshotAttribute(
    args: ResetSnapshotAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetSnapshotAttributeCommandOutput>;
  public resetSnapshotAttribute(
    args: ResetSnapshotAttributeCommandInput,
    cb: (err: any, data?: ResetSnapshotAttributeCommandOutput) => void
  ): void;
  public resetSnapshotAttribute(
    args: ResetSnapshotAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetSnapshotAttributeCommandOutput) => void
  ): void;
  public resetSnapshotAttribute(
    args: ResetSnapshotAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResetSnapshotAttributeCommandOutput) => void),
    cb?: (err: any, data?: ResetSnapshotAttributeCommandOutput) => void
  ): Promise<ResetSnapshotAttributeCommandOutput> | void {
    const command = new ResetSnapshotAttributeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Restores an Elastic IP address that was previously moved to the EC2-VPC platform back to the EC2-Classic platform. You cannot move an Elastic IP address that was originally allocated for use in EC2-VPC. The Elastic IP address must not be associated with an instance or network interface.</p>
   */
  public restoreAddressToClassic(
    args: RestoreAddressToClassicCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreAddressToClassicCommandOutput>;
  public restoreAddressToClassic(
    args: RestoreAddressToClassicCommandInput,
    cb: (err: any, data?: RestoreAddressToClassicCommandOutput) => void
  ): void;
  public restoreAddressToClassic(
    args: RestoreAddressToClassicCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreAddressToClassicCommandOutput) => void
  ): void;
  public restoreAddressToClassic(
    args: RestoreAddressToClassicCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestoreAddressToClassicCommandOutput) => void),
    cb?: (err: any, data?: RestoreAddressToClassicCommandOutput) => void
  ): Promise<RestoreAddressToClassicCommandOutput> | void {
    const command = new RestoreAddressToClassicCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Restores the entries from a previous version of a managed prefix list to a new version of the prefix list.</p>
   */
  public restoreManagedPrefixListVersion(
    args: RestoreManagedPrefixListVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreManagedPrefixListVersionCommandOutput>;
  public restoreManagedPrefixListVersion(
    args: RestoreManagedPrefixListVersionCommandInput,
    cb: (err: any, data?: RestoreManagedPrefixListVersionCommandOutput) => void
  ): void;
  public restoreManagedPrefixListVersion(
    args: RestoreManagedPrefixListVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreManagedPrefixListVersionCommandOutput) => void
  ): void;
  public restoreManagedPrefixListVersion(
    args: RestoreManagedPrefixListVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestoreManagedPrefixListVersionCommandOutput) => void),
    cb?: (err: any, data?: RestoreManagedPrefixListVersionCommandOutput) => void
  ): Promise<RestoreManagedPrefixListVersionCommandOutput> | void {
    const command = new RestoreManagedPrefixListVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes an ingress authorization rule from a Client VPN endpoint. </p>
   */
  public revokeClientVpnIngress(
    args: RevokeClientVpnIngressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeClientVpnIngressCommandOutput>;
  public revokeClientVpnIngress(
    args: RevokeClientVpnIngressCommandInput,
    cb: (err: any, data?: RevokeClientVpnIngressCommandOutput) => void
  ): void;
  public revokeClientVpnIngress(
    args: RevokeClientVpnIngressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeClientVpnIngressCommandOutput) => void
  ): void;
  public revokeClientVpnIngress(
    args: RevokeClientVpnIngressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RevokeClientVpnIngressCommandOutput) => void),
    cb?: (err: any, data?: RevokeClientVpnIngressCommandOutput) => void
  ): Promise<RevokeClientVpnIngressCommandOutput> | void {
    const command = new RevokeClientVpnIngressCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>[VPC only] Removes the specified egress rules from a security group for EC2-VPC.
   *        This action does not apply to security groups for use in EC2-Classic. To remove a rule, the
   *        values that you specify (for example, ports) must match the existing rule's values
   *        exactly.</p>
   *          <note>
   *             <p>[Default VPC] If the values you specify do not match the existing rule's values, no error is
   *                 returned, and the output describes the security group rules that were not revoked. </p>
   *             <p>AWS recommends that you use <a>DescribeSecurityGroups</a> to verify
   *                 that the rule has been removed.</p>
   *          </note>
   *          <p>Each rule consists of the protocol and the IPv4 or IPv6 CIDR range or source security
   *       group. For the TCP and UDP protocols, you must also specify the destination port or range of
   *       ports. For the ICMP protocol, you must also specify the ICMP type and code. If the security group rule
   *       has a description, you do not have to specify the description to revoke the rule.</p>
   *          <p>Rule changes are propagated to instances within the security group as quickly as possible. However, a small delay might occur.</p>
   */
  public revokeSecurityGroupEgress(
    args: RevokeSecurityGroupEgressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeSecurityGroupEgressCommandOutput>;
  public revokeSecurityGroupEgress(
    args: RevokeSecurityGroupEgressCommandInput,
    cb: (err: any, data?: RevokeSecurityGroupEgressCommandOutput) => void
  ): void;
  public revokeSecurityGroupEgress(
    args: RevokeSecurityGroupEgressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeSecurityGroupEgressCommandOutput) => void
  ): void;
  public revokeSecurityGroupEgress(
    args: RevokeSecurityGroupEgressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RevokeSecurityGroupEgressCommandOutput) => void),
    cb?: (err: any, data?: RevokeSecurityGroupEgressCommandOutput) => void
  ): Promise<RevokeSecurityGroupEgressCommandOutput> | void {
    const command = new RevokeSecurityGroupEgressCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the specified ingress rules from a security group. To remove a rule, the values
   *        that you specify (for example, ports) must match the existing rule's values exactly.</p>
   *
   *    	     <note>
   *             <p>[EC2-Classic , default VPC] If the values you specify do not match the existing rule's values,
   *                 no error is returned, and the output describes the security group rules that were
   *                 not revoked. </p>
   *             <p>AWS recommends that you use <a>DescribeSecurityGroups</a> to verify
   *                 that the rule has been removed.</p>
   *          </note>
   *
   *          <p>Each rule consists of the protocol and the CIDR range or source security group. For the TCP and UDP protocols, you must also specify the destination port or range of ports. For the ICMP protocol, you must also specify the ICMP type and code. If the security group rule has a description, you do not have to specify the description to revoke the rule.</p>
   *          <p>Rule changes are propagated to instances within the security group as quickly as possible. However, a small delay might occur.</p>
   */
  public revokeSecurityGroupIngress(
    args: RevokeSecurityGroupIngressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeSecurityGroupIngressCommandOutput>;
  public revokeSecurityGroupIngress(
    args: RevokeSecurityGroupIngressCommandInput,
    cb: (err: any, data?: RevokeSecurityGroupIngressCommandOutput) => void
  ): void;
  public revokeSecurityGroupIngress(
    args: RevokeSecurityGroupIngressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeSecurityGroupIngressCommandOutput) => void
  ): void;
  public revokeSecurityGroupIngress(
    args: RevokeSecurityGroupIngressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RevokeSecurityGroupIngressCommandOutput) => void),
    cb?: (err: any, data?: RevokeSecurityGroupIngressCommandOutput) => void
  ): Promise<RevokeSecurityGroupIngressCommandOutput> | void {
    const command = new RevokeSecurityGroupIngressCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Launches the specified number of instances using an AMI for which you have
   *             permissions.</p>
   *         <p>You can specify a number of options, or leave the default options. The following rules
   *             apply:</p>
   *         <ul>
   *             <li>
   *                 <p>[EC2-VPC] If you don't specify a subnet ID, we choose a default subnet from
   *                     your default VPC for you. If you don't have a default VPC, you must specify a
   *                     subnet ID in the request.</p>
   *             </li>
   *             <li>
   *                 <p>[EC2-Classic] If don't specify an Availability Zone, we choose one for
   *                     you.</p>
   *             </li>
   *             <li>
   *                 <p>Some instance types must be launched into a VPC. If you do not have a default
   *                     VPC, or if you do not specify a subnet ID, the request fails. For more
   *                     information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-vpc.html#vpc-only-instance-types">Instance types available only in a VPC</a>.</p>
   *             </li>
   *             <li>
   *                 <p>[EC2-VPC] All instances have a network interface with a primary private IPv4
   *                     address. If you don't specify this address, we choose one from the IPv4 range of
   *                     your subnet.</p>
   *             </li>
   *             <li>
   *                 <p>Not all instance types support IPv6 addresses. For more information, see
   *                         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance
   *                     types</a>.</p>
   *             </li>
   *             <li>
   *                 <p>If you don't specify a security group ID, we use the default security group.
   *                     For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html">Security
   *                         groups</a>.</p>
   *             </li>
   *             <li>
   *                 <p>If any of the AMIs have a product code attached for which the user has not
   *                     subscribed, the request fails.</p>
   *             </li>
   *          </ul>
   *         <p>You can create a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">launch template</a>,
   *             which is a resource that contains the parameters to launch an instance. When you launch
   *             an instance using <a>RunInstances</a>, you can specify the launch template
   *             instead of specifying the launch parameters.</p>
   *         <p>To ensure faster instance launches, break up large requests into smaller batches. For
   *             example, create five separate launch requests for 100 instances each instead of one
   *             launch request for 500 instances.</p>
   *         <p>An instance is ready for you to use when it's in the <code>running</code> state. You
   *             can check the state of your instance using <a>DescribeInstances</a>. You can
   *             tag instances and EBS volumes during launch, after launch, or both. For more
   *             information, see <a>CreateTags</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging your Amazon EC2
   *                 resources</a>.</p>
   *         <p>Linux instances have access to the public key of the key pair at boot. You can use
   *             this key to provide secure access to the instance. Amazon EC2 public images use this
   *             feature to provide secure access without passwords. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Key
   *                 pairs</a> in the <i>Amazon Elastic Compute Cloud User
   *             Guide</i>.</p>
   *         <p>For troubleshooting, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_InstanceStraightToTerminated.html">What to do if
   *                 an instance immediately terminates</a>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesConnecting.html">Troubleshooting connecting to your instance</a> in the <i>Amazon Elastic
   *                 Compute Cloud User Guide</i>.</p>
   */
  public runInstances(
    args: RunInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RunInstancesCommandOutput>;
  public runInstances(args: RunInstancesCommandInput, cb: (err: any, data?: RunInstancesCommandOutput) => void): void;
  public runInstances(
    args: RunInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RunInstancesCommandOutput) => void
  ): void;
  public runInstances(
    args: RunInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RunInstancesCommandOutput) => void),
    cb?: (err: any, data?: RunInstancesCommandOutput) => void
  ): Promise<RunInstancesCommandOutput> | void {
    const command = new RunInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Launches the specified Scheduled Instances.</p>
   *          <p>Before you can launch a Scheduled Instance, you must purchase it and obtain an identifier using <a>PurchaseScheduledInstances</a>.</p>
   *          <p>You must launch a Scheduled Instance during its scheduled time period. You can't stop or reboot a Scheduled Instance,
   *          but you can terminate it as needed. If you terminate a Scheduled Instance before the current scheduled time period ends,
   *          you can launch it again after a few minutes. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-scheduled-instances.html">Scheduled Instances</a>
   *          in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public runScheduledInstances(
    args: RunScheduledInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RunScheduledInstancesCommandOutput>;
  public runScheduledInstances(
    args: RunScheduledInstancesCommandInput,
    cb: (err: any, data?: RunScheduledInstancesCommandOutput) => void
  ): void;
  public runScheduledInstances(
    args: RunScheduledInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RunScheduledInstancesCommandOutput) => void
  ): void;
  public runScheduledInstances(
    args: RunScheduledInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RunScheduledInstancesCommandOutput) => void),
    cb?: (err: any, data?: RunScheduledInstancesCommandOutput) => void
  ): Promise<RunScheduledInstancesCommandOutput> | void {
    const command = new RunScheduledInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Searches for routes in the specified local gateway route table.</p>
   */
  public searchLocalGatewayRoutes(
    args: SearchLocalGatewayRoutesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchLocalGatewayRoutesCommandOutput>;
  public searchLocalGatewayRoutes(
    args: SearchLocalGatewayRoutesCommandInput,
    cb: (err: any, data?: SearchLocalGatewayRoutesCommandOutput) => void
  ): void;
  public searchLocalGatewayRoutes(
    args: SearchLocalGatewayRoutesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchLocalGatewayRoutesCommandOutput) => void
  ): void;
  public searchLocalGatewayRoutes(
    args: SearchLocalGatewayRoutesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchLocalGatewayRoutesCommandOutput) => void),
    cb?: (err: any, data?: SearchLocalGatewayRoutesCommandOutput) => void
  ): Promise<SearchLocalGatewayRoutesCommandOutput> | void {
    const command = new SearchLocalGatewayRoutesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Searches one or more  transit gateway multicast groups and returns the group membership information.</p>
   */
  public searchTransitGatewayMulticastGroups(
    args: SearchTransitGatewayMulticastGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchTransitGatewayMulticastGroupsCommandOutput>;
  public searchTransitGatewayMulticastGroups(
    args: SearchTransitGatewayMulticastGroupsCommandInput,
    cb: (err: any, data?: SearchTransitGatewayMulticastGroupsCommandOutput) => void
  ): void;
  public searchTransitGatewayMulticastGroups(
    args: SearchTransitGatewayMulticastGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchTransitGatewayMulticastGroupsCommandOutput) => void
  ): void;
  public searchTransitGatewayMulticastGroups(
    args: SearchTransitGatewayMulticastGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchTransitGatewayMulticastGroupsCommandOutput) => void),
    cb?: (err: any, data?: SearchTransitGatewayMulticastGroupsCommandOutput) => void
  ): Promise<SearchTransitGatewayMulticastGroupsCommandOutput> | void {
    const command = new SearchTransitGatewayMulticastGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Searches for routes in the specified transit gateway route table.</p>
   */
  public searchTransitGatewayRoutes(
    args: SearchTransitGatewayRoutesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchTransitGatewayRoutesCommandOutput>;
  public searchTransitGatewayRoutes(
    args: SearchTransitGatewayRoutesCommandInput,
    cb: (err: any, data?: SearchTransitGatewayRoutesCommandOutput) => void
  ): void;
  public searchTransitGatewayRoutes(
    args: SearchTransitGatewayRoutesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchTransitGatewayRoutesCommandOutput) => void
  ): void;
  public searchTransitGatewayRoutes(
    args: SearchTransitGatewayRoutesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchTransitGatewayRoutesCommandOutput) => void),
    cb?: (err: any, data?: SearchTransitGatewayRoutesCommandOutput) => void
  ): Promise<SearchTransitGatewayRoutesCommandOutput> | void {
    const command = new SearchTransitGatewayRoutesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sends a diagnostic interrupt to the specified Amazon EC2 instance to trigger a
   * 			<i>kernel panic</i> (on Linux instances), or a
   * 			<i>blue screen</i>/<i>stop error</i> (on Windows
   * 			instances). For instances based on Intel and AMD processors, the interrupt is
   * 			received as a <i>non-maskable interrupt</i> (NMI).</p>
   *
   * 		       <p>In general, the operating system crashes and reboots when a kernel panic or stop
   * 			error is triggered. The operating system can also be configured to perform diagnostic
   * 			tasks, such as generating a memory dump file, loading a secondary kernel, or
   * 			obtaining a call trace.</p>
   *
   * 		       <p>Before sending a diagnostic interrupt to your instance, ensure that its operating
   * 			system is configured to perform the required diagnostic tasks.</p>
   *
   * 		       <p>For more information about configuring your operating system to generate a crash dump
   * 			when a kernel panic or stop error occurs, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/diagnostic-interrupt.html">Send a diagnostic interrupt</a> (Linux instances) or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/diagnostic-interrupt.html">Send a Diagnostic Interrupt</a> (Windows instances).</p>
   */
  public sendDiagnosticInterrupt(
    args: SendDiagnosticInterruptCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendDiagnosticInterruptCommandOutput>;
  public sendDiagnosticInterrupt(
    args: SendDiagnosticInterruptCommandInput,
    cb: (err: any, data?: SendDiagnosticInterruptCommandOutput) => void
  ): void;
  public sendDiagnosticInterrupt(
    args: SendDiagnosticInterruptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendDiagnosticInterruptCommandOutput) => void
  ): void;
  public sendDiagnosticInterrupt(
    args: SendDiagnosticInterruptCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendDiagnosticInterruptCommandOutput) => void),
    cb?: (err: any, data?: SendDiagnosticInterruptCommandOutput) => void
  ): Promise<SendDiagnosticInterruptCommandOutput> | void {
    const command = new SendDiagnosticInterruptCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts an Amazon EBS-backed instance that you've previously stopped.</p>
   *         <p>Instances that use Amazon EBS volumes as their root devices can be quickly stopped and
   *             started. When an instance is stopped, the compute resources are released and you are not
   *             billed for instance usage. However, your root partition Amazon EBS volume remains and
   *             continues to persist your data, and you are charged for Amazon EBS volume usage. You can
   *             restart your instance at any time. Every time you start your Windows instance, Amazon
   *             EC2 charges you for a full instance hour. If you stop and restart your Windows instance,
   *             a new instance hour begins and Amazon EC2 charges you for another full instance hour
   *             even if you are still within the same 60-minute period when it was stopped. Every time
   *             you start your Linux instance, Amazon EC2 charges a one-minute minimum for instance
   *             usage, and thereafter charges per second for instance usage.</p>
   *         <p>Before stopping an instance, make sure it is in a state from which it can be
   *             restarted. Stopping an instance does not preserve data stored in RAM.</p>
   *         <p>Performing this operation on an instance that uses an instance store as its root
   *             device returns an error.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html">Stopping instances</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public startInstances(
    args: StartInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartInstancesCommandOutput>;
  public startInstances(
    args: StartInstancesCommandInput,
    cb: (err: any, data?: StartInstancesCommandOutput) => void
  ): void;
  public startInstances(
    args: StartInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartInstancesCommandOutput) => void
  ): void;
  public startInstances(
    args: StartInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartInstancesCommandOutput) => void),
    cb?: (err: any, data?: StartInstancesCommandOutput) => void
  ): Promise<StartInstancesCommandOutput> | void {
    const command = new StartInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts analyzing the specified path. If the path is reachable, the
   *          operation returns the shortest feasible path.</p>
   */
  public startNetworkInsightsAnalysis(
    args: StartNetworkInsightsAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartNetworkInsightsAnalysisCommandOutput>;
  public startNetworkInsightsAnalysis(
    args: StartNetworkInsightsAnalysisCommandInput,
    cb: (err: any, data?: StartNetworkInsightsAnalysisCommandOutput) => void
  ): void;
  public startNetworkInsightsAnalysis(
    args: StartNetworkInsightsAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartNetworkInsightsAnalysisCommandOutput) => void
  ): void;
  public startNetworkInsightsAnalysis(
    args: StartNetworkInsightsAnalysisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartNetworkInsightsAnalysisCommandOutput) => void),
    cb?: (err: any, data?: StartNetworkInsightsAnalysisCommandOutput) => void
  ): Promise<StartNetworkInsightsAnalysisCommandOutput> | void {
    const command = new StartNetworkInsightsAnalysisCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Initiates the verification process to prove that the service provider owns the private
   *             DNS name domain for the endpoint service.</p>
   *         <p>The service provider must successfully perform the verification before the consumer can use the name to access the service.</p>
   *         <p>Before the service provider runs this command, they must add a record to the DNS server. For more information, see  <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-dns-validation.html#add-dns-txt-record">Adding a TXT Record to Your Domain's DNS Server </a> in the <i>Amazon VPC User Guide</i>.</p>
   */
  public startVpcEndpointServicePrivateDnsVerification(
    args: StartVpcEndpointServicePrivateDnsVerificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartVpcEndpointServicePrivateDnsVerificationCommandOutput>;
  public startVpcEndpointServicePrivateDnsVerification(
    args: StartVpcEndpointServicePrivateDnsVerificationCommandInput,
    cb: (err: any, data?: StartVpcEndpointServicePrivateDnsVerificationCommandOutput) => void
  ): void;
  public startVpcEndpointServicePrivateDnsVerification(
    args: StartVpcEndpointServicePrivateDnsVerificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartVpcEndpointServicePrivateDnsVerificationCommandOutput) => void
  ): void;
  public startVpcEndpointServicePrivateDnsVerification(
    args: StartVpcEndpointServicePrivateDnsVerificationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartVpcEndpointServicePrivateDnsVerificationCommandOutput) => void),
    cb?: (err: any, data?: StartVpcEndpointServicePrivateDnsVerificationCommandOutput) => void
  ): Promise<StartVpcEndpointServicePrivateDnsVerificationCommandOutput> | void {
    const command = new StartVpcEndpointServicePrivateDnsVerificationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops an Amazon EBS-backed instance.</p>
   *         <p>You can use the Stop action to hibernate an instance if the instance is <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#enabling-hibernation">enabled for
   *                 hibernation</a> and it meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites">hibernation
   *                 prerequisites</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *         <p>We don't charge usage for a stopped instance, or data transfer fees; however, your
   *             root partition Amazon EBS volume remains and continues to persist your data, and you are
   *             charged for Amazon EBS volume usage. Every time you start your Windows instance, Amazon
   *             EC2 charges you for a full instance hour. If you stop and restart your Windows instance,
   *             a new instance hour begins and Amazon EC2 charges you for another full instance hour
   *             even if you are still within the same 60-minute period when it was stopped. Every time
   *             you start your Linux instance, Amazon EC2 charges a one-minute minimum for instance
   *             usage, and thereafter charges per second for instance usage.</p>
   *         <p>You can't stop or hibernate instance store-backed instances. You can't use the Stop
   *             action to hibernate Spot Instances, but you can specify that Amazon EC2 should hibernate
   *             Spot Instances when they are interrupted. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-interruptions.html#hibernate-spot-instances">Hibernating interrupted Spot Instances</a> in the <i>Amazon Elastic
   *                 Compute Cloud User Guide</i>.</p>
   *         <p>When you stop or hibernate an instance, we shut it down. You can restart your instance
   *             at any time. Before stopping or hibernating an instance, make sure it is in a state from
   *             which it can be restarted. Stopping an instance does not preserve data stored in RAM,
   *             but hibernating an instance does preserve data stored in RAM. If an instance cannot
   *             hibernate successfully, a normal shutdown occurs.</p>
   *         <p>Stopping and hibernating an instance is different to rebooting or terminating it. For
   *             example, when you stop or hibernate an instance, the root device and any other devices
   *             attached to the instance persist. When you terminate an instance, the root device and
   *             any other devices attached during the instance launch are automatically deleted. For
   *             more information about the differences between rebooting, stopping, hibernating, and
   *             terminating instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html">Instance lifecycle</a>
   *             in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *         <p>When you stop an instance, we attempt to shut it down forcibly after a short while. If
   *             your instance appears stuck in the stopping state after a period of time, there may be
   *             an issue with the underlying host computer. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesStopping.html">Troubleshooting
   *                 stopping your instance</a> in the <i>Amazon Elastic Compute Cloud User
   *                 Guide</i>.</p>
   */
  public stopInstances(
    args: StopInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopInstancesCommandOutput>;
  public stopInstances(
    args: StopInstancesCommandInput,
    cb: (err: any, data?: StopInstancesCommandOutput) => void
  ): void;
  public stopInstances(
    args: StopInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopInstancesCommandOutput) => void
  ): void;
  public stopInstances(
    args: StopInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopInstancesCommandOutput) => void),
    cb?: (err: any, data?: StopInstancesCommandOutput) => void
  ): Promise<StopInstancesCommandOutput> | void {
    const command = new StopInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Terminates active Client VPN endpoint connections. This action can be used to terminate a specific client connection, or up to five connections established by a specific user.</p>
   */
  public terminateClientVpnConnections(
    args: TerminateClientVpnConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateClientVpnConnectionsCommandOutput>;
  public terminateClientVpnConnections(
    args: TerminateClientVpnConnectionsCommandInput,
    cb: (err: any, data?: TerminateClientVpnConnectionsCommandOutput) => void
  ): void;
  public terminateClientVpnConnections(
    args: TerminateClientVpnConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateClientVpnConnectionsCommandOutput) => void
  ): void;
  public terminateClientVpnConnections(
    args: TerminateClientVpnConnectionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TerminateClientVpnConnectionsCommandOutput) => void),
    cb?: (err: any, data?: TerminateClientVpnConnectionsCommandOutput) => void
  ): Promise<TerminateClientVpnConnectionsCommandOutput> | void {
    const command = new TerminateClientVpnConnectionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Shuts down the specified instances. This operation is idempotent; if you terminate an
   *             instance more than once, each call succeeds. </p>
   *         <p>If you specify multiple instances and the request fails (for example, because of a
   *             single incorrect instance ID), none of the instances are terminated.</p>
   *         <p>Terminated instances remain visible after termination (for approximately one
   *             hour).</p>
   *         <p>By default, Amazon EC2 deletes all EBS volumes that were attached when the instance
   *             launched. Volumes attached after instance launch continue running.</p>
   *         <p>You can stop, start, and terminate EBS-backed instances. You can only terminate
   *             instance store-backed instances. What happens to an instance differs if you stop it or
   *             terminate it. For example, when you stop an instance, the root device and any other
   *             devices attached to the instance persist. When you terminate an instance, any attached
   *             EBS volumes with the <code>DeleteOnTermination</code> block device mapping parameter set
   *             to <code>true</code> are automatically deleted. For more information about the
   *             differences between stopping and terminating instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html">Instance lifecycle</a>
   *             in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *         <p>For more information about troubleshooting, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesShuttingDown.html">Troubleshooting terminating your instance</a> in the <i>Amazon Elastic
   *                 Compute Cloud User Guide</i>.</p>
   */
  public terminateInstances(
    args: TerminateInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateInstancesCommandOutput>;
  public terminateInstances(
    args: TerminateInstancesCommandInput,
    cb: (err: any, data?: TerminateInstancesCommandOutput) => void
  ): void;
  public terminateInstances(
    args: TerminateInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateInstancesCommandOutput) => void
  ): void;
  public terminateInstances(
    args: TerminateInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TerminateInstancesCommandOutput) => void),
    cb?: (err: any, data?: TerminateInstancesCommandOutput) => void
  ): Promise<TerminateInstancesCommandOutput> | void {
    const command = new TerminateInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Unassigns one or more IPv6 addresses from a network interface.</p>
   */
  public unassignIpv6Addresses(
    args: UnassignIpv6AddressesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnassignIpv6AddressesCommandOutput>;
  public unassignIpv6Addresses(
    args: UnassignIpv6AddressesCommandInput,
    cb: (err: any, data?: UnassignIpv6AddressesCommandOutput) => void
  ): void;
  public unassignIpv6Addresses(
    args: UnassignIpv6AddressesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnassignIpv6AddressesCommandOutput) => void
  ): void;
  public unassignIpv6Addresses(
    args: UnassignIpv6AddressesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UnassignIpv6AddressesCommandOutput) => void),
    cb?: (err: any, data?: UnassignIpv6AddressesCommandOutput) => void
  ): Promise<UnassignIpv6AddressesCommandOutput> | void {
    const command = new UnassignIpv6AddressesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Unassigns one or more secondary private IP addresses from a network interface.</p>
   */
  public unassignPrivateIpAddresses(
    args: UnassignPrivateIpAddressesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnassignPrivateIpAddressesCommandOutput>;
  public unassignPrivateIpAddresses(
    args: UnassignPrivateIpAddressesCommandInput,
    cb: (err: any, data?: UnassignPrivateIpAddressesCommandOutput) => void
  ): void;
  public unassignPrivateIpAddresses(
    args: UnassignPrivateIpAddressesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnassignPrivateIpAddressesCommandOutput) => void
  ): void;
  public unassignPrivateIpAddresses(
    args: UnassignPrivateIpAddressesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UnassignPrivateIpAddressesCommandOutput) => void),
    cb?: (err: any, data?: UnassignPrivateIpAddressesCommandOutput) => void
  ): Promise<UnassignPrivateIpAddressesCommandOutput> | void {
    const command = new UnassignPrivateIpAddressesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disables detailed monitoring for a running instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch.html">Monitoring
   *                 your instances and volumes</a> in the <i>Amazon Elastic Compute Cloud
   *                 User Guide</i>.</p>
   */
  public unmonitorInstances(
    args: UnmonitorInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnmonitorInstancesCommandOutput>;
  public unmonitorInstances(
    args: UnmonitorInstancesCommandInput,
    cb: (err: any, data?: UnmonitorInstancesCommandOutput) => void
  ): void;
  public unmonitorInstances(
    args: UnmonitorInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnmonitorInstancesCommandOutput) => void
  ): void;
  public unmonitorInstances(
    args: UnmonitorInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UnmonitorInstancesCommandOutput) => void),
    cb?: (err: any, data?: UnmonitorInstancesCommandOutput) => void
  ): Promise<UnmonitorInstancesCommandOutput> | void {
    const command = new UnmonitorInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>[VPC only] Updates the description of an egress (outbound) security group rule. You
   * 			can replace an existing description, or add a description to a rule that did not have one
   * 			previously.</p>
   * 		       <p>You specify the description as part of the IP permissions structure. You can remove a
   * 			description for a security group rule by omitting the description parameter in the
   * 			request.</p>
   */
  public updateSecurityGroupRuleDescriptionsEgress(
    args: UpdateSecurityGroupRuleDescriptionsEgressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSecurityGroupRuleDescriptionsEgressCommandOutput>;
  public updateSecurityGroupRuleDescriptionsEgress(
    args: UpdateSecurityGroupRuleDescriptionsEgressCommandInput,
    cb: (err: any, data?: UpdateSecurityGroupRuleDescriptionsEgressCommandOutput) => void
  ): void;
  public updateSecurityGroupRuleDescriptionsEgress(
    args: UpdateSecurityGroupRuleDescriptionsEgressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSecurityGroupRuleDescriptionsEgressCommandOutput) => void
  ): void;
  public updateSecurityGroupRuleDescriptionsEgress(
    args: UpdateSecurityGroupRuleDescriptionsEgressCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateSecurityGroupRuleDescriptionsEgressCommandOutput) => void),
    cb?: (err: any, data?: UpdateSecurityGroupRuleDescriptionsEgressCommandOutput) => void
  ): Promise<UpdateSecurityGroupRuleDescriptionsEgressCommandOutput> | void {
    const command = new UpdateSecurityGroupRuleDescriptionsEgressCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the description of an ingress (inbound) security group rule. You can replace an
   * 			existing description, or add a description to a rule that did not have one
   * 			previously.</p>
   * 		       <p>You specify the description as part of the IP permissions structure. You can remove a
   * 			description for a security group rule by omitting the description parameter in the
   * 			request.</p>
   */
  public updateSecurityGroupRuleDescriptionsIngress(
    args: UpdateSecurityGroupRuleDescriptionsIngressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSecurityGroupRuleDescriptionsIngressCommandOutput>;
  public updateSecurityGroupRuleDescriptionsIngress(
    args: UpdateSecurityGroupRuleDescriptionsIngressCommandInput,
    cb: (err: any, data?: UpdateSecurityGroupRuleDescriptionsIngressCommandOutput) => void
  ): void;
  public updateSecurityGroupRuleDescriptionsIngress(
    args: UpdateSecurityGroupRuleDescriptionsIngressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSecurityGroupRuleDescriptionsIngressCommandOutput) => void
  ): void;
  public updateSecurityGroupRuleDescriptionsIngress(
    args: UpdateSecurityGroupRuleDescriptionsIngressCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateSecurityGroupRuleDescriptionsIngressCommandOutput) => void),
    cb?: (err: any, data?: UpdateSecurityGroupRuleDescriptionsIngressCommandOutput) => void
  ): Promise<UpdateSecurityGroupRuleDescriptionsIngressCommandOutput> | void {
    const command = new UpdateSecurityGroupRuleDescriptionsIngressCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops advertising an address range that is provisioned as an address pool.</p>
   *          <p>You can perform this operation at most once every 10 seconds, even if you specify different
   *          address ranges each time.</p>
   *          <p>It can take a few minutes before traffic to the specified addresses stops routing to AWS
   *           because of BGP propagation delays.</p>
   */
  public withdrawByoipCidr(
    args: WithdrawByoipCidrCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<WithdrawByoipCidrCommandOutput>;
  public withdrawByoipCidr(
    args: WithdrawByoipCidrCommandInput,
    cb: (err: any, data?: WithdrawByoipCidrCommandOutput) => void
  ): void;
  public withdrawByoipCidr(
    args: WithdrawByoipCidrCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: WithdrawByoipCidrCommandOutput) => void
  ): void;
  public withdrawByoipCidr(
    args: WithdrawByoipCidrCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: WithdrawByoipCidrCommandOutput) => void),
    cb?: (err: any, data?: WithdrawByoipCidrCommandOutput) => void
  ): Promise<WithdrawByoipCidrCommandOutput> | void {
    const command = new WithdrawByoipCidrCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
