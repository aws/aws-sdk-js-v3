"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EC2Client_1 = require("./EC2Client");
const AcceptReservedInstancesExchangeQuoteCommand_1 = require("./commands/AcceptReservedInstancesExchangeQuoteCommand");
const AcceptTransitGatewayPeeringAttachmentCommand_1 = require("./commands/AcceptTransitGatewayPeeringAttachmentCommand");
const AcceptTransitGatewayVpcAttachmentCommand_1 = require("./commands/AcceptTransitGatewayVpcAttachmentCommand");
const AcceptVpcEndpointConnectionsCommand_1 = require("./commands/AcceptVpcEndpointConnectionsCommand");
const AcceptVpcPeeringConnectionCommand_1 = require("./commands/AcceptVpcPeeringConnectionCommand");
const AdvertiseByoipCidrCommand_1 = require("./commands/AdvertiseByoipCidrCommand");
const AllocateAddressCommand_1 = require("./commands/AllocateAddressCommand");
const AllocateHostsCommand_1 = require("./commands/AllocateHostsCommand");
const ApplySecurityGroupsToClientVpnTargetNetworkCommand_1 = require("./commands/ApplySecurityGroupsToClientVpnTargetNetworkCommand");
const AssignIpv6AddressesCommand_1 = require("./commands/AssignIpv6AddressesCommand");
const AssignPrivateIpAddressesCommand_1 = require("./commands/AssignPrivateIpAddressesCommand");
const AssociateAddressCommand_1 = require("./commands/AssociateAddressCommand");
const AssociateClientVpnTargetNetworkCommand_1 = require("./commands/AssociateClientVpnTargetNetworkCommand");
const AssociateDhcpOptionsCommand_1 = require("./commands/AssociateDhcpOptionsCommand");
const AssociateIamInstanceProfileCommand_1 = require("./commands/AssociateIamInstanceProfileCommand");
const AssociateRouteTableCommand_1 = require("./commands/AssociateRouteTableCommand");
const AssociateSubnetCidrBlockCommand_1 = require("./commands/AssociateSubnetCidrBlockCommand");
const AssociateTransitGatewayMulticastDomainCommand_1 = require("./commands/AssociateTransitGatewayMulticastDomainCommand");
const AssociateTransitGatewayRouteTableCommand_1 = require("./commands/AssociateTransitGatewayRouteTableCommand");
const AssociateVpcCidrBlockCommand_1 = require("./commands/AssociateVpcCidrBlockCommand");
const AttachClassicLinkVpcCommand_1 = require("./commands/AttachClassicLinkVpcCommand");
const AttachInternetGatewayCommand_1 = require("./commands/AttachInternetGatewayCommand");
const AttachNetworkInterfaceCommand_1 = require("./commands/AttachNetworkInterfaceCommand");
const AttachVolumeCommand_1 = require("./commands/AttachVolumeCommand");
const AttachVpnGatewayCommand_1 = require("./commands/AttachVpnGatewayCommand");
const AuthorizeClientVpnIngressCommand_1 = require("./commands/AuthorizeClientVpnIngressCommand");
const AuthorizeSecurityGroupEgressCommand_1 = require("./commands/AuthorizeSecurityGroupEgressCommand");
const AuthorizeSecurityGroupIngressCommand_1 = require("./commands/AuthorizeSecurityGroupIngressCommand");
const BundleInstanceCommand_1 = require("./commands/BundleInstanceCommand");
const CancelBundleTaskCommand_1 = require("./commands/CancelBundleTaskCommand");
const CancelCapacityReservationCommand_1 = require("./commands/CancelCapacityReservationCommand");
const CancelConversionTaskCommand_1 = require("./commands/CancelConversionTaskCommand");
const CancelExportTaskCommand_1 = require("./commands/CancelExportTaskCommand");
const CancelImportTaskCommand_1 = require("./commands/CancelImportTaskCommand");
const CancelReservedInstancesListingCommand_1 = require("./commands/CancelReservedInstancesListingCommand");
const CancelSpotFleetRequestsCommand_1 = require("./commands/CancelSpotFleetRequestsCommand");
const CancelSpotInstanceRequestsCommand_1 = require("./commands/CancelSpotInstanceRequestsCommand");
const ConfirmProductInstanceCommand_1 = require("./commands/ConfirmProductInstanceCommand");
const CopyFpgaImageCommand_1 = require("./commands/CopyFpgaImageCommand");
const CopyImageCommand_1 = require("./commands/CopyImageCommand");
const CopySnapshotCommand_1 = require("./commands/CopySnapshotCommand");
const CreateCapacityReservationCommand_1 = require("./commands/CreateCapacityReservationCommand");
const CreateClientVpnEndpointCommand_1 = require("./commands/CreateClientVpnEndpointCommand");
const CreateClientVpnRouteCommand_1 = require("./commands/CreateClientVpnRouteCommand");
const CreateCustomerGatewayCommand_1 = require("./commands/CreateCustomerGatewayCommand");
const CreateDefaultSubnetCommand_1 = require("./commands/CreateDefaultSubnetCommand");
const CreateDefaultVpcCommand_1 = require("./commands/CreateDefaultVpcCommand");
const CreateDhcpOptionsCommand_1 = require("./commands/CreateDhcpOptionsCommand");
const CreateEgressOnlyInternetGatewayCommand_1 = require("./commands/CreateEgressOnlyInternetGatewayCommand");
const CreateFleetCommand_1 = require("./commands/CreateFleetCommand");
const CreateFlowLogsCommand_1 = require("./commands/CreateFlowLogsCommand");
const CreateFpgaImageCommand_1 = require("./commands/CreateFpgaImageCommand");
const CreateImageCommand_1 = require("./commands/CreateImageCommand");
const CreateInstanceExportTaskCommand_1 = require("./commands/CreateInstanceExportTaskCommand");
const CreateInternetGatewayCommand_1 = require("./commands/CreateInternetGatewayCommand");
const CreateKeyPairCommand_1 = require("./commands/CreateKeyPairCommand");
const CreateLaunchTemplateCommand_1 = require("./commands/CreateLaunchTemplateCommand");
const CreateLaunchTemplateVersionCommand_1 = require("./commands/CreateLaunchTemplateVersionCommand");
const CreateLocalGatewayRouteCommand_1 = require("./commands/CreateLocalGatewayRouteCommand");
const CreateLocalGatewayRouteTableVpcAssociationCommand_1 = require("./commands/CreateLocalGatewayRouteTableVpcAssociationCommand");
const CreateNatGatewayCommand_1 = require("./commands/CreateNatGatewayCommand");
const CreateNetworkAclCommand_1 = require("./commands/CreateNetworkAclCommand");
const CreateNetworkAclEntryCommand_1 = require("./commands/CreateNetworkAclEntryCommand");
const CreateNetworkInterfaceCommand_1 = require("./commands/CreateNetworkInterfaceCommand");
const CreateNetworkInterfacePermissionCommand_1 = require("./commands/CreateNetworkInterfacePermissionCommand");
const CreatePlacementGroupCommand_1 = require("./commands/CreatePlacementGroupCommand");
const CreateReservedInstancesListingCommand_1 = require("./commands/CreateReservedInstancesListingCommand");
const CreateRouteCommand_1 = require("./commands/CreateRouteCommand");
const CreateRouteTableCommand_1 = require("./commands/CreateRouteTableCommand");
const CreateSecurityGroupCommand_1 = require("./commands/CreateSecurityGroupCommand");
const CreateSnapshotCommand_1 = require("./commands/CreateSnapshotCommand");
const CreateSnapshotsCommand_1 = require("./commands/CreateSnapshotsCommand");
const CreateSpotDatafeedSubscriptionCommand_1 = require("./commands/CreateSpotDatafeedSubscriptionCommand");
const CreateSubnetCommand_1 = require("./commands/CreateSubnetCommand");
const CreateTagsCommand_1 = require("./commands/CreateTagsCommand");
const CreateTrafficMirrorFilterCommand_1 = require("./commands/CreateTrafficMirrorFilterCommand");
const CreateTrafficMirrorFilterRuleCommand_1 = require("./commands/CreateTrafficMirrorFilterRuleCommand");
const CreateTrafficMirrorSessionCommand_1 = require("./commands/CreateTrafficMirrorSessionCommand");
const CreateTrafficMirrorTargetCommand_1 = require("./commands/CreateTrafficMirrorTargetCommand");
const CreateTransitGatewayCommand_1 = require("./commands/CreateTransitGatewayCommand");
const CreateTransitGatewayMulticastDomainCommand_1 = require("./commands/CreateTransitGatewayMulticastDomainCommand");
const CreateTransitGatewayPeeringAttachmentCommand_1 = require("./commands/CreateTransitGatewayPeeringAttachmentCommand");
const CreateTransitGatewayRouteCommand_1 = require("./commands/CreateTransitGatewayRouteCommand");
const CreateTransitGatewayRouteTableCommand_1 = require("./commands/CreateTransitGatewayRouteTableCommand");
const CreateTransitGatewayVpcAttachmentCommand_1 = require("./commands/CreateTransitGatewayVpcAttachmentCommand");
const CreateVolumeCommand_1 = require("./commands/CreateVolumeCommand");
const CreateVpcCommand_1 = require("./commands/CreateVpcCommand");
const CreateVpcEndpointCommand_1 = require("./commands/CreateVpcEndpointCommand");
const CreateVpcEndpointConnectionNotificationCommand_1 = require("./commands/CreateVpcEndpointConnectionNotificationCommand");
const CreateVpcEndpointServiceConfigurationCommand_1 = require("./commands/CreateVpcEndpointServiceConfigurationCommand");
const CreateVpcPeeringConnectionCommand_1 = require("./commands/CreateVpcPeeringConnectionCommand");
const CreateVpnConnectionCommand_1 = require("./commands/CreateVpnConnectionCommand");
const CreateVpnConnectionRouteCommand_1 = require("./commands/CreateVpnConnectionRouteCommand");
const CreateVpnGatewayCommand_1 = require("./commands/CreateVpnGatewayCommand");
const DeleteClientVpnEndpointCommand_1 = require("./commands/DeleteClientVpnEndpointCommand");
const DeleteClientVpnRouteCommand_1 = require("./commands/DeleteClientVpnRouteCommand");
const DeleteCustomerGatewayCommand_1 = require("./commands/DeleteCustomerGatewayCommand");
const DeleteDhcpOptionsCommand_1 = require("./commands/DeleteDhcpOptionsCommand");
const DeleteEgressOnlyInternetGatewayCommand_1 = require("./commands/DeleteEgressOnlyInternetGatewayCommand");
const DeleteFleetsCommand_1 = require("./commands/DeleteFleetsCommand");
const DeleteFlowLogsCommand_1 = require("./commands/DeleteFlowLogsCommand");
const DeleteFpgaImageCommand_1 = require("./commands/DeleteFpgaImageCommand");
const DeleteInternetGatewayCommand_1 = require("./commands/DeleteInternetGatewayCommand");
const DeleteKeyPairCommand_1 = require("./commands/DeleteKeyPairCommand");
const DeleteLaunchTemplateCommand_1 = require("./commands/DeleteLaunchTemplateCommand");
const DeleteLaunchTemplateVersionsCommand_1 = require("./commands/DeleteLaunchTemplateVersionsCommand");
const DeleteLocalGatewayRouteCommand_1 = require("./commands/DeleteLocalGatewayRouteCommand");
const DeleteLocalGatewayRouteTableVpcAssociationCommand_1 = require("./commands/DeleteLocalGatewayRouteTableVpcAssociationCommand");
const DeleteNatGatewayCommand_1 = require("./commands/DeleteNatGatewayCommand");
const DeleteNetworkAclCommand_1 = require("./commands/DeleteNetworkAclCommand");
const DeleteNetworkAclEntryCommand_1 = require("./commands/DeleteNetworkAclEntryCommand");
const DeleteNetworkInterfaceCommand_1 = require("./commands/DeleteNetworkInterfaceCommand");
const DeleteNetworkInterfacePermissionCommand_1 = require("./commands/DeleteNetworkInterfacePermissionCommand");
const DeletePlacementGroupCommand_1 = require("./commands/DeletePlacementGroupCommand");
const DeleteQueuedReservedInstancesCommand_1 = require("./commands/DeleteQueuedReservedInstancesCommand");
const DeleteRouteCommand_1 = require("./commands/DeleteRouteCommand");
const DeleteRouteTableCommand_1 = require("./commands/DeleteRouteTableCommand");
const DeleteSecurityGroupCommand_1 = require("./commands/DeleteSecurityGroupCommand");
const DeleteSnapshotCommand_1 = require("./commands/DeleteSnapshotCommand");
const DeleteSpotDatafeedSubscriptionCommand_1 = require("./commands/DeleteSpotDatafeedSubscriptionCommand");
const DeleteSubnetCommand_1 = require("./commands/DeleteSubnetCommand");
const DeleteTagsCommand_1 = require("./commands/DeleteTagsCommand");
const DeleteTrafficMirrorFilterCommand_1 = require("./commands/DeleteTrafficMirrorFilterCommand");
const DeleteTrafficMirrorFilterRuleCommand_1 = require("./commands/DeleteTrafficMirrorFilterRuleCommand");
const DeleteTrafficMirrorSessionCommand_1 = require("./commands/DeleteTrafficMirrorSessionCommand");
const DeleteTrafficMirrorTargetCommand_1 = require("./commands/DeleteTrafficMirrorTargetCommand");
const DeleteTransitGatewayCommand_1 = require("./commands/DeleteTransitGatewayCommand");
const DeleteTransitGatewayMulticastDomainCommand_1 = require("./commands/DeleteTransitGatewayMulticastDomainCommand");
const DeleteTransitGatewayPeeringAttachmentCommand_1 = require("./commands/DeleteTransitGatewayPeeringAttachmentCommand");
const DeleteTransitGatewayRouteCommand_1 = require("./commands/DeleteTransitGatewayRouteCommand");
const DeleteTransitGatewayRouteTableCommand_1 = require("./commands/DeleteTransitGatewayRouteTableCommand");
const DeleteTransitGatewayVpcAttachmentCommand_1 = require("./commands/DeleteTransitGatewayVpcAttachmentCommand");
const DeleteVolumeCommand_1 = require("./commands/DeleteVolumeCommand");
const DeleteVpcCommand_1 = require("./commands/DeleteVpcCommand");
const DeleteVpcEndpointConnectionNotificationsCommand_1 = require("./commands/DeleteVpcEndpointConnectionNotificationsCommand");
const DeleteVpcEndpointServiceConfigurationsCommand_1 = require("./commands/DeleteVpcEndpointServiceConfigurationsCommand");
const DeleteVpcEndpointsCommand_1 = require("./commands/DeleteVpcEndpointsCommand");
const DeleteVpcPeeringConnectionCommand_1 = require("./commands/DeleteVpcPeeringConnectionCommand");
const DeleteVpnConnectionCommand_1 = require("./commands/DeleteVpnConnectionCommand");
const DeleteVpnConnectionRouteCommand_1 = require("./commands/DeleteVpnConnectionRouteCommand");
const DeleteVpnGatewayCommand_1 = require("./commands/DeleteVpnGatewayCommand");
const DeprovisionByoipCidrCommand_1 = require("./commands/DeprovisionByoipCidrCommand");
const DeregisterImageCommand_1 = require("./commands/DeregisterImageCommand");
const DeregisterTransitGatewayMulticastGroupMembersCommand_1 = require("./commands/DeregisterTransitGatewayMulticastGroupMembersCommand");
const DeregisterTransitGatewayMulticastGroupSourcesCommand_1 = require("./commands/DeregisterTransitGatewayMulticastGroupSourcesCommand");
const DescribeAccountAttributesCommand_1 = require("./commands/DescribeAccountAttributesCommand");
const DescribeAddressesCommand_1 = require("./commands/DescribeAddressesCommand");
const DescribeAggregateIdFormatCommand_1 = require("./commands/DescribeAggregateIdFormatCommand");
const DescribeAvailabilityZonesCommand_1 = require("./commands/DescribeAvailabilityZonesCommand");
const DescribeBundleTasksCommand_1 = require("./commands/DescribeBundleTasksCommand");
const DescribeByoipCidrsCommand_1 = require("./commands/DescribeByoipCidrsCommand");
const DescribeCapacityReservationsCommand_1 = require("./commands/DescribeCapacityReservationsCommand");
const DescribeClassicLinkInstancesCommand_1 = require("./commands/DescribeClassicLinkInstancesCommand");
const DescribeClientVpnAuthorizationRulesCommand_1 = require("./commands/DescribeClientVpnAuthorizationRulesCommand");
const DescribeClientVpnConnectionsCommand_1 = require("./commands/DescribeClientVpnConnectionsCommand");
const DescribeClientVpnEndpointsCommand_1 = require("./commands/DescribeClientVpnEndpointsCommand");
const DescribeClientVpnRoutesCommand_1 = require("./commands/DescribeClientVpnRoutesCommand");
const DescribeClientVpnTargetNetworksCommand_1 = require("./commands/DescribeClientVpnTargetNetworksCommand");
const DescribeCoipPoolsCommand_1 = require("./commands/DescribeCoipPoolsCommand");
const DescribeConversionTasksCommand_1 = require("./commands/DescribeConversionTasksCommand");
const DescribeCustomerGatewaysCommand_1 = require("./commands/DescribeCustomerGatewaysCommand");
const DescribeDhcpOptionsCommand_1 = require("./commands/DescribeDhcpOptionsCommand");
const DescribeEgressOnlyInternetGatewaysCommand_1 = require("./commands/DescribeEgressOnlyInternetGatewaysCommand");
const DescribeElasticGpusCommand_1 = require("./commands/DescribeElasticGpusCommand");
const DescribeExportImageTasksCommand_1 = require("./commands/DescribeExportImageTasksCommand");
const DescribeExportTasksCommand_1 = require("./commands/DescribeExportTasksCommand");
const DescribeFastSnapshotRestoresCommand_1 = require("./commands/DescribeFastSnapshotRestoresCommand");
const DescribeFleetHistoryCommand_1 = require("./commands/DescribeFleetHistoryCommand");
const DescribeFleetInstancesCommand_1 = require("./commands/DescribeFleetInstancesCommand");
const DescribeFleetsCommand_1 = require("./commands/DescribeFleetsCommand");
const DescribeFlowLogsCommand_1 = require("./commands/DescribeFlowLogsCommand");
const DescribeFpgaImageAttributeCommand_1 = require("./commands/DescribeFpgaImageAttributeCommand");
const DescribeFpgaImagesCommand_1 = require("./commands/DescribeFpgaImagesCommand");
const DescribeHostReservationOfferingsCommand_1 = require("./commands/DescribeHostReservationOfferingsCommand");
const DescribeHostReservationsCommand_1 = require("./commands/DescribeHostReservationsCommand");
const DescribeHostsCommand_1 = require("./commands/DescribeHostsCommand");
const DescribeIamInstanceProfileAssociationsCommand_1 = require("./commands/DescribeIamInstanceProfileAssociationsCommand");
const DescribeIdFormatCommand_1 = require("./commands/DescribeIdFormatCommand");
const DescribeIdentityIdFormatCommand_1 = require("./commands/DescribeIdentityIdFormatCommand");
const DescribeImageAttributeCommand_1 = require("./commands/DescribeImageAttributeCommand");
const DescribeImagesCommand_1 = require("./commands/DescribeImagesCommand");
const DescribeImportImageTasksCommand_1 = require("./commands/DescribeImportImageTasksCommand");
const DescribeImportSnapshotTasksCommand_1 = require("./commands/DescribeImportSnapshotTasksCommand");
const DescribeInstanceAttributeCommand_1 = require("./commands/DescribeInstanceAttributeCommand");
const DescribeInstanceCreditSpecificationsCommand_1 = require("./commands/DescribeInstanceCreditSpecificationsCommand");
const DescribeInstanceStatusCommand_1 = require("./commands/DescribeInstanceStatusCommand");
const DescribeInstanceTypeOfferingsCommand_1 = require("./commands/DescribeInstanceTypeOfferingsCommand");
const DescribeInstanceTypesCommand_1 = require("./commands/DescribeInstanceTypesCommand");
const DescribeInstancesCommand_1 = require("./commands/DescribeInstancesCommand");
const DescribeInternetGatewaysCommand_1 = require("./commands/DescribeInternetGatewaysCommand");
const DescribeIpv6PoolsCommand_1 = require("./commands/DescribeIpv6PoolsCommand");
const DescribeKeyPairsCommand_1 = require("./commands/DescribeKeyPairsCommand");
const DescribeLaunchTemplateVersionsCommand_1 = require("./commands/DescribeLaunchTemplateVersionsCommand");
const DescribeLaunchTemplatesCommand_1 = require("./commands/DescribeLaunchTemplatesCommand");
const DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand_1 = require("./commands/DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand");
const DescribeLocalGatewayRouteTableVpcAssociationsCommand_1 = require("./commands/DescribeLocalGatewayRouteTableVpcAssociationsCommand");
const DescribeLocalGatewayRouteTablesCommand_1 = require("./commands/DescribeLocalGatewayRouteTablesCommand");
const DescribeLocalGatewayVirtualInterfaceGroupsCommand_1 = require("./commands/DescribeLocalGatewayVirtualInterfaceGroupsCommand");
const DescribeLocalGatewayVirtualInterfacesCommand_1 = require("./commands/DescribeLocalGatewayVirtualInterfacesCommand");
const DescribeLocalGatewaysCommand_1 = require("./commands/DescribeLocalGatewaysCommand");
const DescribeMovingAddressesCommand_1 = require("./commands/DescribeMovingAddressesCommand");
const DescribeNatGatewaysCommand_1 = require("./commands/DescribeNatGatewaysCommand");
const DescribeNetworkAclsCommand_1 = require("./commands/DescribeNetworkAclsCommand");
const DescribeNetworkInterfaceAttributeCommand_1 = require("./commands/DescribeNetworkInterfaceAttributeCommand");
const DescribeNetworkInterfacePermissionsCommand_1 = require("./commands/DescribeNetworkInterfacePermissionsCommand");
const DescribeNetworkInterfacesCommand_1 = require("./commands/DescribeNetworkInterfacesCommand");
const DescribePlacementGroupsCommand_1 = require("./commands/DescribePlacementGroupsCommand");
const DescribePrefixListsCommand_1 = require("./commands/DescribePrefixListsCommand");
const DescribePrincipalIdFormatCommand_1 = require("./commands/DescribePrincipalIdFormatCommand");
const DescribePublicIpv4PoolsCommand_1 = require("./commands/DescribePublicIpv4PoolsCommand");
const DescribeRegionsCommand_1 = require("./commands/DescribeRegionsCommand");
const DescribeReservedInstancesCommand_1 = require("./commands/DescribeReservedInstancesCommand");
const DescribeReservedInstancesListingsCommand_1 = require("./commands/DescribeReservedInstancesListingsCommand");
const DescribeReservedInstancesModificationsCommand_1 = require("./commands/DescribeReservedInstancesModificationsCommand");
const DescribeReservedInstancesOfferingsCommand_1 = require("./commands/DescribeReservedInstancesOfferingsCommand");
const DescribeRouteTablesCommand_1 = require("./commands/DescribeRouteTablesCommand");
const DescribeScheduledInstanceAvailabilityCommand_1 = require("./commands/DescribeScheduledInstanceAvailabilityCommand");
const DescribeScheduledInstancesCommand_1 = require("./commands/DescribeScheduledInstancesCommand");
const DescribeSecurityGroupReferencesCommand_1 = require("./commands/DescribeSecurityGroupReferencesCommand");
const DescribeSecurityGroupsCommand_1 = require("./commands/DescribeSecurityGroupsCommand");
const DescribeSnapshotAttributeCommand_1 = require("./commands/DescribeSnapshotAttributeCommand");
const DescribeSnapshotsCommand_1 = require("./commands/DescribeSnapshotsCommand");
const DescribeSpotDatafeedSubscriptionCommand_1 = require("./commands/DescribeSpotDatafeedSubscriptionCommand");
const DescribeSpotFleetInstancesCommand_1 = require("./commands/DescribeSpotFleetInstancesCommand");
const DescribeSpotFleetRequestHistoryCommand_1 = require("./commands/DescribeSpotFleetRequestHistoryCommand");
const DescribeSpotFleetRequestsCommand_1 = require("./commands/DescribeSpotFleetRequestsCommand");
const DescribeSpotInstanceRequestsCommand_1 = require("./commands/DescribeSpotInstanceRequestsCommand");
const DescribeSpotPriceHistoryCommand_1 = require("./commands/DescribeSpotPriceHistoryCommand");
const DescribeStaleSecurityGroupsCommand_1 = require("./commands/DescribeStaleSecurityGroupsCommand");
const DescribeSubnetsCommand_1 = require("./commands/DescribeSubnetsCommand");
const DescribeTagsCommand_1 = require("./commands/DescribeTagsCommand");
const DescribeTrafficMirrorFiltersCommand_1 = require("./commands/DescribeTrafficMirrorFiltersCommand");
const DescribeTrafficMirrorSessionsCommand_1 = require("./commands/DescribeTrafficMirrorSessionsCommand");
const DescribeTrafficMirrorTargetsCommand_1 = require("./commands/DescribeTrafficMirrorTargetsCommand");
const DescribeTransitGatewayAttachmentsCommand_1 = require("./commands/DescribeTransitGatewayAttachmentsCommand");
const DescribeTransitGatewayMulticastDomainsCommand_1 = require("./commands/DescribeTransitGatewayMulticastDomainsCommand");
const DescribeTransitGatewayPeeringAttachmentsCommand_1 = require("./commands/DescribeTransitGatewayPeeringAttachmentsCommand");
const DescribeTransitGatewayRouteTablesCommand_1 = require("./commands/DescribeTransitGatewayRouteTablesCommand");
const DescribeTransitGatewayVpcAttachmentsCommand_1 = require("./commands/DescribeTransitGatewayVpcAttachmentsCommand");
const DescribeTransitGatewaysCommand_1 = require("./commands/DescribeTransitGatewaysCommand");
const DescribeVolumeAttributeCommand_1 = require("./commands/DescribeVolumeAttributeCommand");
const DescribeVolumeStatusCommand_1 = require("./commands/DescribeVolumeStatusCommand");
const DescribeVolumesCommand_1 = require("./commands/DescribeVolumesCommand");
const DescribeVolumesModificationsCommand_1 = require("./commands/DescribeVolumesModificationsCommand");
const DescribeVpcAttributeCommand_1 = require("./commands/DescribeVpcAttributeCommand");
const DescribeVpcClassicLinkCommand_1 = require("./commands/DescribeVpcClassicLinkCommand");
const DescribeVpcClassicLinkDnsSupportCommand_1 = require("./commands/DescribeVpcClassicLinkDnsSupportCommand");
const DescribeVpcEndpointConnectionNotificationsCommand_1 = require("./commands/DescribeVpcEndpointConnectionNotificationsCommand");
const DescribeVpcEndpointConnectionsCommand_1 = require("./commands/DescribeVpcEndpointConnectionsCommand");
const DescribeVpcEndpointServiceConfigurationsCommand_1 = require("./commands/DescribeVpcEndpointServiceConfigurationsCommand");
const DescribeVpcEndpointServicePermissionsCommand_1 = require("./commands/DescribeVpcEndpointServicePermissionsCommand");
const DescribeVpcEndpointServicesCommand_1 = require("./commands/DescribeVpcEndpointServicesCommand");
const DescribeVpcEndpointsCommand_1 = require("./commands/DescribeVpcEndpointsCommand");
const DescribeVpcPeeringConnectionsCommand_1 = require("./commands/DescribeVpcPeeringConnectionsCommand");
const DescribeVpcsCommand_1 = require("./commands/DescribeVpcsCommand");
const DescribeVpnConnectionsCommand_1 = require("./commands/DescribeVpnConnectionsCommand");
const DescribeVpnGatewaysCommand_1 = require("./commands/DescribeVpnGatewaysCommand");
const DetachClassicLinkVpcCommand_1 = require("./commands/DetachClassicLinkVpcCommand");
const DetachInternetGatewayCommand_1 = require("./commands/DetachInternetGatewayCommand");
const DetachNetworkInterfaceCommand_1 = require("./commands/DetachNetworkInterfaceCommand");
const DetachVolumeCommand_1 = require("./commands/DetachVolumeCommand");
const DetachVpnGatewayCommand_1 = require("./commands/DetachVpnGatewayCommand");
const DisableEbsEncryptionByDefaultCommand_1 = require("./commands/DisableEbsEncryptionByDefaultCommand");
const DisableFastSnapshotRestoresCommand_1 = require("./commands/DisableFastSnapshotRestoresCommand");
const DisableTransitGatewayRouteTablePropagationCommand_1 = require("./commands/DisableTransitGatewayRouteTablePropagationCommand");
const DisableVgwRoutePropagationCommand_1 = require("./commands/DisableVgwRoutePropagationCommand");
const DisableVpcClassicLinkCommand_1 = require("./commands/DisableVpcClassicLinkCommand");
const DisableVpcClassicLinkDnsSupportCommand_1 = require("./commands/DisableVpcClassicLinkDnsSupportCommand");
const DisassociateAddressCommand_1 = require("./commands/DisassociateAddressCommand");
const DisassociateClientVpnTargetNetworkCommand_1 = require("./commands/DisassociateClientVpnTargetNetworkCommand");
const DisassociateIamInstanceProfileCommand_1 = require("./commands/DisassociateIamInstanceProfileCommand");
const DisassociateRouteTableCommand_1 = require("./commands/DisassociateRouteTableCommand");
const DisassociateSubnetCidrBlockCommand_1 = require("./commands/DisassociateSubnetCidrBlockCommand");
const DisassociateTransitGatewayMulticastDomainCommand_1 = require("./commands/DisassociateTransitGatewayMulticastDomainCommand");
const DisassociateTransitGatewayRouteTableCommand_1 = require("./commands/DisassociateTransitGatewayRouteTableCommand");
const DisassociateVpcCidrBlockCommand_1 = require("./commands/DisassociateVpcCidrBlockCommand");
const EnableEbsEncryptionByDefaultCommand_1 = require("./commands/EnableEbsEncryptionByDefaultCommand");
const EnableFastSnapshotRestoresCommand_1 = require("./commands/EnableFastSnapshotRestoresCommand");
const EnableTransitGatewayRouteTablePropagationCommand_1 = require("./commands/EnableTransitGatewayRouteTablePropagationCommand");
const EnableVgwRoutePropagationCommand_1 = require("./commands/EnableVgwRoutePropagationCommand");
const EnableVolumeIOCommand_1 = require("./commands/EnableVolumeIOCommand");
const EnableVpcClassicLinkCommand_1 = require("./commands/EnableVpcClassicLinkCommand");
const EnableVpcClassicLinkDnsSupportCommand_1 = require("./commands/EnableVpcClassicLinkDnsSupportCommand");
const ExportClientVpnClientCertificateRevocationListCommand_1 = require("./commands/ExportClientVpnClientCertificateRevocationListCommand");
const ExportClientVpnClientConfigurationCommand_1 = require("./commands/ExportClientVpnClientConfigurationCommand");
const ExportImageCommand_1 = require("./commands/ExportImageCommand");
const ExportTransitGatewayRoutesCommand_1 = require("./commands/ExportTransitGatewayRoutesCommand");
const GetAssociatedIpv6PoolCidrsCommand_1 = require("./commands/GetAssociatedIpv6PoolCidrsCommand");
const GetCapacityReservationUsageCommand_1 = require("./commands/GetCapacityReservationUsageCommand");
const GetCoipPoolUsageCommand_1 = require("./commands/GetCoipPoolUsageCommand");
const GetConsoleOutputCommand_1 = require("./commands/GetConsoleOutputCommand");
const GetConsoleScreenshotCommand_1 = require("./commands/GetConsoleScreenshotCommand");
const GetDefaultCreditSpecificationCommand_1 = require("./commands/GetDefaultCreditSpecificationCommand");
const GetEbsDefaultKmsKeyIdCommand_1 = require("./commands/GetEbsDefaultKmsKeyIdCommand");
const GetEbsEncryptionByDefaultCommand_1 = require("./commands/GetEbsEncryptionByDefaultCommand");
const GetHostReservationPurchasePreviewCommand_1 = require("./commands/GetHostReservationPurchasePreviewCommand");
const GetLaunchTemplateDataCommand_1 = require("./commands/GetLaunchTemplateDataCommand");
const GetPasswordDataCommand_1 = require("./commands/GetPasswordDataCommand");
const GetReservedInstancesExchangeQuoteCommand_1 = require("./commands/GetReservedInstancesExchangeQuoteCommand");
const GetTransitGatewayAttachmentPropagationsCommand_1 = require("./commands/GetTransitGatewayAttachmentPropagationsCommand");
const GetTransitGatewayMulticastDomainAssociationsCommand_1 = require("./commands/GetTransitGatewayMulticastDomainAssociationsCommand");
const GetTransitGatewayRouteTableAssociationsCommand_1 = require("./commands/GetTransitGatewayRouteTableAssociationsCommand");
const GetTransitGatewayRouteTablePropagationsCommand_1 = require("./commands/GetTransitGatewayRouteTablePropagationsCommand");
const ImportClientVpnClientCertificateRevocationListCommand_1 = require("./commands/ImportClientVpnClientCertificateRevocationListCommand");
const ImportImageCommand_1 = require("./commands/ImportImageCommand");
const ImportInstanceCommand_1 = require("./commands/ImportInstanceCommand");
const ImportKeyPairCommand_1 = require("./commands/ImportKeyPairCommand");
const ImportSnapshotCommand_1 = require("./commands/ImportSnapshotCommand");
const ImportVolumeCommand_1 = require("./commands/ImportVolumeCommand");
const ModifyCapacityReservationCommand_1 = require("./commands/ModifyCapacityReservationCommand");
const ModifyClientVpnEndpointCommand_1 = require("./commands/ModifyClientVpnEndpointCommand");
const ModifyDefaultCreditSpecificationCommand_1 = require("./commands/ModifyDefaultCreditSpecificationCommand");
const ModifyEbsDefaultKmsKeyIdCommand_1 = require("./commands/ModifyEbsDefaultKmsKeyIdCommand");
const ModifyFleetCommand_1 = require("./commands/ModifyFleetCommand");
const ModifyFpgaImageAttributeCommand_1 = require("./commands/ModifyFpgaImageAttributeCommand");
const ModifyHostsCommand_1 = require("./commands/ModifyHostsCommand");
const ModifyIdFormatCommand_1 = require("./commands/ModifyIdFormatCommand");
const ModifyIdentityIdFormatCommand_1 = require("./commands/ModifyIdentityIdFormatCommand");
const ModifyImageAttributeCommand_1 = require("./commands/ModifyImageAttributeCommand");
const ModifyInstanceAttributeCommand_1 = require("./commands/ModifyInstanceAttributeCommand");
const ModifyInstanceCapacityReservationAttributesCommand_1 = require("./commands/ModifyInstanceCapacityReservationAttributesCommand");
const ModifyInstanceCreditSpecificationCommand_1 = require("./commands/ModifyInstanceCreditSpecificationCommand");
const ModifyInstanceEventStartTimeCommand_1 = require("./commands/ModifyInstanceEventStartTimeCommand");
const ModifyInstanceMetadataOptionsCommand_1 = require("./commands/ModifyInstanceMetadataOptionsCommand");
const ModifyInstancePlacementCommand_1 = require("./commands/ModifyInstancePlacementCommand");
const ModifyLaunchTemplateCommand_1 = require("./commands/ModifyLaunchTemplateCommand");
const ModifyNetworkInterfaceAttributeCommand_1 = require("./commands/ModifyNetworkInterfaceAttributeCommand");
const ModifyReservedInstancesCommand_1 = require("./commands/ModifyReservedInstancesCommand");
const ModifySnapshotAttributeCommand_1 = require("./commands/ModifySnapshotAttributeCommand");
const ModifySpotFleetRequestCommand_1 = require("./commands/ModifySpotFleetRequestCommand");
const ModifySubnetAttributeCommand_1 = require("./commands/ModifySubnetAttributeCommand");
const ModifyTrafficMirrorFilterNetworkServicesCommand_1 = require("./commands/ModifyTrafficMirrorFilterNetworkServicesCommand");
const ModifyTrafficMirrorFilterRuleCommand_1 = require("./commands/ModifyTrafficMirrorFilterRuleCommand");
const ModifyTrafficMirrorSessionCommand_1 = require("./commands/ModifyTrafficMirrorSessionCommand");
const ModifyTransitGatewayVpcAttachmentCommand_1 = require("./commands/ModifyTransitGatewayVpcAttachmentCommand");
const ModifyVolumeAttributeCommand_1 = require("./commands/ModifyVolumeAttributeCommand");
const ModifyVolumeCommand_1 = require("./commands/ModifyVolumeCommand");
const ModifyVpcAttributeCommand_1 = require("./commands/ModifyVpcAttributeCommand");
const ModifyVpcEndpointCommand_1 = require("./commands/ModifyVpcEndpointCommand");
const ModifyVpcEndpointConnectionNotificationCommand_1 = require("./commands/ModifyVpcEndpointConnectionNotificationCommand");
const ModifyVpcEndpointServiceConfigurationCommand_1 = require("./commands/ModifyVpcEndpointServiceConfigurationCommand");
const ModifyVpcEndpointServicePermissionsCommand_1 = require("./commands/ModifyVpcEndpointServicePermissionsCommand");
const ModifyVpcPeeringConnectionOptionsCommand_1 = require("./commands/ModifyVpcPeeringConnectionOptionsCommand");
const ModifyVpcTenancyCommand_1 = require("./commands/ModifyVpcTenancyCommand");
const ModifyVpnConnectionCommand_1 = require("./commands/ModifyVpnConnectionCommand");
const ModifyVpnTunnelCertificateCommand_1 = require("./commands/ModifyVpnTunnelCertificateCommand");
const ModifyVpnTunnelOptionsCommand_1 = require("./commands/ModifyVpnTunnelOptionsCommand");
const MonitorInstancesCommand_1 = require("./commands/MonitorInstancesCommand");
const MoveAddressToVpcCommand_1 = require("./commands/MoveAddressToVpcCommand");
const ProvisionByoipCidrCommand_1 = require("./commands/ProvisionByoipCidrCommand");
const PurchaseHostReservationCommand_1 = require("./commands/PurchaseHostReservationCommand");
const PurchaseReservedInstancesOfferingCommand_1 = require("./commands/PurchaseReservedInstancesOfferingCommand");
const PurchaseScheduledInstancesCommand_1 = require("./commands/PurchaseScheduledInstancesCommand");
const RebootInstancesCommand_1 = require("./commands/RebootInstancesCommand");
const RegisterImageCommand_1 = require("./commands/RegisterImageCommand");
const RegisterTransitGatewayMulticastGroupMembersCommand_1 = require("./commands/RegisterTransitGatewayMulticastGroupMembersCommand");
const RegisterTransitGatewayMulticastGroupSourcesCommand_1 = require("./commands/RegisterTransitGatewayMulticastGroupSourcesCommand");
const RejectTransitGatewayPeeringAttachmentCommand_1 = require("./commands/RejectTransitGatewayPeeringAttachmentCommand");
const RejectTransitGatewayVpcAttachmentCommand_1 = require("./commands/RejectTransitGatewayVpcAttachmentCommand");
const RejectVpcEndpointConnectionsCommand_1 = require("./commands/RejectVpcEndpointConnectionsCommand");
const RejectVpcPeeringConnectionCommand_1 = require("./commands/RejectVpcPeeringConnectionCommand");
const ReleaseAddressCommand_1 = require("./commands/ReleaseAddressCommand");
const ReleaseHostsCommand_1 = require("./commands/ReleaseHostsCommand");
const ReplaceIamInstanceProfileAssociationCommand_1 = require("./commands/ReplaceIamInstanceProfileAssociationCommand");
const ReplaceNetworkAclAssociationCommand_1 = require("./commands/ReplaceNetworkAclAssociationCommand");
const ReplaceNetworkAclEntryCommand_1 = require("./commands/ReplaceNetworkAclEntryCommand");
const ReplaceRouteCommand_1 = require("./commands/ReplaceRouteCommand");
const ReplaceRouteTableAssociationCommand_1 = require("./commands/ReplaceRouteTableAssociationCommand");
const ReplaceTransitGatewayRouteCommand_1 = require("./commands/ReplaceTransitGatewayRouteCommand");
const ReportInstanceStatusCommand_1 = require("./commands/ReportInstanceStatusCommand");
const RequestSpotFleetCommand_1 = require("./commands/RequestSpotFleetCommand");
const RequestSpotInstancesCommand_1 = require("./commands/RequestSpotInstancesCommand");
const ResetEbsDefaultKmsKeyIdCommand_1 = require("./commands/ResetEbsDefaultKmsKeyIdCommand");
const ResetFpgaImageAttributeCommand_1 = require("./commands/ResetFpgaImageAttributeCommand");
const ResetImageAttributeCommand_1 = require("./commands/ResetImageAttributeCommand");
const ResetInstanceAttributeCommand_1 = require("./commands/ResetInstanceAttributeCommand");
const ResetNetworkInterfaceAttributeCommand_1 = require("./commands/ResetNetworkInterfaceAttributeCommand");
const ResetSnapshotAttributeCommand_1 = require("./commands/ResetSnapshotAttributeCommand");
const RestoreAddressToClassicCommand_1 = require("./commands/RestoreAddressToClassicCommand");
const RevokeClientVpnIngressCommand_1 = require("./commands/RevokeClientVpnIngressCommand");
const RevokeSecurityGroupEgressCommand_1 = require("./commands/RevokeSecurityGroupEgressCommand");
const RevokeSecurityGroupIngressCommand_1 = require("./commands/RevokeSecurityGroupIngressCommand");
const RunInstancesCommand_1 = require("./commands/RunInstancesCommand");
const RunScheduledInstancesCommand_1 = require("./commands/RunScheduledInstancesCommand");
const SearchLocalGatewayRoutesCommand_1 = require("./commands/SearchLocalGatewayRoutesCommand");
const SearchTransitGatewayMulticastGroupsCommand_1 = require("./commands/SearchTransitGatewayMulticastGroupsCommand");
const SearchTransitGatewayRoutesCommand_1 = require("./commands/SearchTransitGatewayRoutesCommand");
const SendDiagnosticInterruptCommand_1 = require("./commands/SendDiagnosticInterruptCommand");
const StartInstancesCommand_1 = require("./commands/StartInstancesCommand");
const StartVpcEndpointServicePrivateDnsVerificationCommand_1 = require("./commands/StartVpcEndpointServicePrivateDnsVerificationCommand");
const StopInstancesCommand_1 = require("./commands/StopInstancesCommand");
const TerminateClientVpnConnectionsCommand_1 = require("./commands/TerminateClientVpnConnectionsCommand");
const TerminateInstancesCommand_1 = require("./commands/TerminateInstancesCommand");
const UnassignIpv6AddressesCommand_1 = require("./commands/UnassignIpv6AddressesCommand");
const UnassignPrivateIpAddressesCommand_1 = require("./commands/UnassignPrivateIpAddressesCommand");
const UnmonitorInstancesCommand_1 = require("./commands/UnmonitorInstancesCommand");
const UpdateSecurityGroupRuleDescriptionsEgressCommand_1 = require("./commands/UpdateSecurityGroupRuleDescriptionsEgressCommand");
const UpdateSecurityGroupRuleDescriptionsIngressCommand_1 = require("./commands/UpdateSecurityGroupRuleDescriptionsIngressCommand");
const WithdrawByoipCidrCommand_1 = require("./commands/WithdrawByoipCidrCommand");
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
class EC2 extends EC2Client_1.EC2Client {
    acceptReservedInstancesExchangeQuote(args, optionsOrCb, cb) {
        const command = new AcceptReservedInstancesExchangeQuoteCommand_1.AcceptReservedInstancesExchangeQuoteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    acceptTransitGatewayPeeringAttachment(args, optionsOrCb, cb) {
        const command = new AcceptTransitGatewayPeeringAttachmentCommand_1.AcceptTransitGatewayPeeringAttachmentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    acceptTransitGatewayVpcAttachment(args, optionsOrCb, cb) {
        const command = new AcceptTransitGatewayVpcAttachmentCommand_1.AcceptTransitGatewayVpcAttachmentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    acceptVpcEndpointConnections(args, optionsOrCb, cb) {
        const command = new AcceptVpcEndpointConnectionsCommand_1.AcceptVpcEndpointConnectionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    acceptVpcPeeringConnection(args, optionsOrCb, cb) {
        const command = new AcceptVpcPeeringConnectionCommand_1.AcceptVpcPeeringConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    advertiseByoipCidr(args, optionsOrCb, cb) {
        const command = new AdvertiseByoipCidrCommand_1.AdvertiseByoipCidrCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    allocateAddress(args, optionsOrCb, cb) {
        const command = new AllocateAddressCommand_1.AllocateAddressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    allocateHosts(args, optionsOrCb, cb) {
        const command = new AllocateHostsCommand_1.AllocateHostsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    applySecurityGroupsToClientVpnTargetNetwork(args, optionsOrCb, cb) {
        const command = new ApplySecurityGroupsToClientVpnTargetNetworkCommand_1.ApplySecurityGroupsToClientVpnTargetNetworkCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    assignIpv6Addresses(args, optionsOrCb, cb) {
        const command = new AssignIpv6AddressesCommand_1.AssignIpv6AddressesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    assignPrivateIpAddresses(args, optionsOrCb, cb) {
        const command = new AssignPrivateIpAddressesCommand_1.AssignPrivateIpAddressesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateAddress(args, optionsOrCb, cb) {
        const command = new AssociateAddressCommand_1.AssociateAddressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateClientVpnTargetNetwork(args, optionsOrCb, cb) {
        const command = new AssociateClientVpnTargetNetworkCommand_1.AssociateClientVpnTargetNetworkCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateDhcpOptions(args, optionsOrCb, cb) {
        const command = new AssociateDhcpOptionsCommand_1.AssociateDhcpOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateIamInstanceProfile(args, optionsOrCb, cb) {
        const command = new AssociateIamInstanceProfileCommand_1.AssociateIamInstanceProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateRouteTable(args, optionsOrCb, cb) {
        const command = new AssociateRouteTableCommand_1.AssociateRouteTableCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateSubnetCidrBlock(args, optionsOrCb, cb) {
        const command = new AssociateSubnetCidrBlockCommand_1.AssociateSubnetCidrBlockCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateTransitGatewayMulticastDomain(args, optionsOrCb, cb) {
        const command = new AssociateTransitGatewayMulticastDomainCommand_1.AssociateTransitGatewayMulticastDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateTransitGatewayRouteTable(args, optionsOrCb, cb) {
        const command = new AssociateTransitGatewayRouteTableCommand_1.AssociateTransitGatewayRouteTableCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateVpcCidrBlock(args, optionsOrCb, cb) {
        const command = new AssociateVpcCidrBlockCommand_1.AssociateVpcCidrBlockCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    attachClassicLinkVpc(args, optionsOrCb, cb) {
        const command = new AttachClassicLinkVpcCommand_1.AttachClassicLinkVpcCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    attachInternetGateway(args, optionsOrCb, cb) {
        const command = new AttachInternetGatewayCommand_1.AttachInternetGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    attachNetworkInterface(args, optionsOrCb, cb) {
        const command = new AttachNetworkInterfaceCommand_1.AttachNetworkInterfaceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    attachVolume(args, optionsOrCb, cb) {
        const command = new AttachVolumeCommand_1.AttachVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    attachVpnGateway(args, optionsOrCb, cb) {
        const command = new AttachVpnGatewayCommand_1.AttachVpnGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    authorizeClientVpnIngress(args, optionsOrCb, cb) {
        const command = new AuthorizeClientVpnIngressCommand_1.AuthorizeClientVpnIngressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    authorizeSecurityGroupEgress(args, optionsOrCb, cb) {
        const command = new AuthorizeSecurityGroupEgressCommand_1.AuthorizeSecurityGroupEgressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    authorizeSecurityGroupIngress(args, optionsOrCb, cb) {
        const command = new AuthorizeSecurityGroupIngressCommand_1.AuthorizeSecurityGroupIngressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    bundleInstance(args, optionsOrCb, cb) {
        const command = new BundleInstanceCommand_1.BundleInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    cancelBundleTask(args, optionsOrCb, cb) {
        const command = new CancelBundleTaskCommand_1.CancelBundleTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    cancelCapacityReservation(args, optionsOrCb, cb) {
        const command = new CancelCapacityReservationCommand_1.CancelCapacityReservationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    cancelConversionTask(args, optionsOrCb, cb) {
        const command = new CancelConversionTaskCommand_1.CancelConversionTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    cancelExportTask(args, optionsOrCb, cb) {
        const command = new CancelExportTaskCommand_1.CancelExportTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    cancelImportTask(args, optionsOrCb, cb) {
        const command = new CancelImportTaskCommand_1.CancelImportTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    cancelReservedInstancesListing(args, optionsOrCb, cb) {
        const command = new CancelReservedInstancesListingCommand_1.CancelReservedInstancesListingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    cancelSpotFleetRequests(args, optionsOrCb, cb) {
        const command = new CancelSpotFleetRequestsCommand_1.CancelSpotFleetRequestsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    cancelSpotInstanceRequests(args, optionsOrCb, cb) {
        const command = new CancelSpotInstanceRequestsCommand_1.CancelSpotInstanceRequestsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    confirmProductInstance(args, optionsOrCb, cb) {
        const command = new ConfirmProductInstanceCommand_1.ConfirmProductInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    copyFpgaImage(args, optionsOrCb, cb) {
        const command = new CopyFpgaImageCommand_1.CopyFpgaImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    copyImage(args, optionsOrCb, cb) {
        const command = new CopyImageCommand_1.CopyImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    copySnapshot(args, optionsOrCb, cb) {
        const command = new CopySnapshotCommand_1.CopySnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createCapacityReservation(args, optionsOrCb, cb) {
        const command = new CreateCapacityReservationCommand_1.CreateCapacityReservationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createClientVpnEndpoint(args, optionsOrCb, cb) {
        const command = new CreateClientVpnEndpointCommand_1.CreateClientVpnEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createClientVpnRoute(args, optionsOrCb, cb) {
        const command = new CreateClientVpnRouteCommand_1.CreateClientVpnRouteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createCustomerGateway(args, optionsOrCb, cb) {
        const command = new CreateCustomerGatewayCommand_1.CreateCustomerGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createDefaultSubnet(args, optionsOrCb, cb) {
        const command = new CreateDefaultSubnetCommand_1.CreateDefaultSubnetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createDefaultVpc(args, optionsOrCb, cb) {
        const command = new CreateDefaultVpcCommand_1.CreateDefaultVpcCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createDhcpOptions(args, optionsOrCb, cb) {
        const command = new CreateDhcpOptionsCommand_1.CreateDhcpOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createEgressOnlyInternetGateway(args, optionsOrCb, cb) {
        const command = new CreateEgressOnlyInternetGatewayCommand_1.CreateEgressOnlyInternetGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createFleet(args, optionsOrCb, cb) {
        const command = new CreateFleetCommand_1.CreateFleetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createFlowLogs(args, optionsOrCb, cb) {
        const command = new CreateFlowLogsCommand_1.CreateFlowLogsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createFpgaImage(args, optionsOrCb, cb) {
        const command = new CreateFpgaImageCommand_1.CreateFpgaImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createImage(args, optionsOrCb, cb) {
        const command = new CreateImageCommand_1.CreateImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createInstanceExportTask(args, optionsOrCb, cb) {
        const command = new CreateInstanceExportTaskCommand_1.CreateInstanceExportTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createInternetGateway(args, optionsOrCb, cb) {
        const command = new CreateInternetGatewayCommand_1.CreateInternetGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createKeyPair(args, optionsOrCb, cb) {
        const command = new CreateKeyPairCommand_1.CreateKeyPairCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createLaunchTemplate(args, optionsOrCb, cb) {
        const command = new CreateLaunchTemplateCommand_1.CreateLaunchTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createLaunchTemplateVersion(args, optionsOrCb, cb) {
        const command = new CreateLaunchTemplateVersionCommand_1.CreateLaunchTemplateVersionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createLocalGatewayRoute(args, optionsOrCb, cb) {
        const command = new CreateLocalGatewayRouteCommand_1.CreateLocalGatewayRouteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createLocalGatewayRouteTableVpcAssociation(args, optionsOrCb, cb) {
        const command = new CreateLocalGatewayRouteTableVpcAssociationCommand_1.CreateLocalGatewayRouteTableVpcAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createNatGateway(args, optionsOrCb, cb) {
        const command = new CreateNatGatewayCommand_1.CreateNatGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createNetworkAcl(args, optionsOrCb, cb) {
        const command = new CreateNetworkAclCommand_1.CreateNetworkAclCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createNetworkAclEntry(args, optionsOrCb, cb) {
        const command = new CreateNetworkAclEntryCommand_1.CreateNetworkAclEntryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createNetworkInterface(args, optionsOrCb, cb) {
        const command = new CreateNetworkInterfaceCommand_1.CreateNetworkInterfaceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createNetworkInterfacePermission(args, optionsOrCb, cb) {
        const command = new CreateNetworkInterfacePermissionCommand_1.CreateNetworkInterfacePermissionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createPlacementGroup(args, optionsOrCb, cb) {
        const command = new CreatePlacementGroupCommand_1.CreatePlacementGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createReservedInstancesListing(args, optionsOrCb, cb) {
        const command = new CreateReservedInstancesListingCommand_1.CreateReservedInstancesListingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createRoute(args, optionsOrCb, cb) {
        const command = new CreateRouteCommand_1.CreateRouteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createRouteTable(args, optionsOrCb, cb) {
        const command = new CreateRouteTableCommand_1.CreateRouteTableCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createSecurityGroup(args, optionsOrCb, cb) {
        const command = new CreateSecurityGroupCommand_1.CreateSecurityGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createSnapshot(args, optionsOrCb, cb) {
        const command = new CreateSnapshotCommand_1.CreateSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createSnapshots(args, optionsOrCb, cb) {
        const command = new CreateSnapshotsCommand_1.CreateSnapshotsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createSpotDatafeedSubscription(args, optionsOrCb, cb) {
        const command = new CreateSpotDatafeedSubscriptionCommand_1.CreateSpotDatafeedSubscriptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createSubnet(args, optionsOrCb, cb) {
        const command = new CreateSubnetCommand_1.CreateSubnetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTags(args, optionsOrCb, cb) {
        const command = new CreateTagsCommand_1.CreateTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTrafficMirrorFilter(args, optionsOrCb, cb) {
        const command = new CreateTrafficMirrorFilterCommand_1.CreateTrafficMirrorFilterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTrafficMirrorFilterRule(args, optionsOrCb, cb) {
        const command = new CreateTrafficMirrorFilterRuleCommand_1.CreateTrafficMirrorFilterRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTrafficMirrorSession(args, optionsOrCb, cb) {
        const command = new CreateTrafficMirrorSessionCommand_1.CreateTrafficMirrorSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTrafficMirrorTarget(args, optionsOrCb, cb) {
        const command = new CreateTrafficMirrorTargetCommand_1.CreateTrafficMirrorTargetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTransitGateway(args, optionsOrCb, cb) {
        const command = new CreateTransitGatewayCommand_1.CreateTransitGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTransitGatewayMulticastDomain(args, optionsOrCb, cb) {
        const command = new CreateTransitGatewayMulticastDomainCommand_1.CreateTransitGatewayMulticastDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTransitGatewayPeeringAttachment(args, optionsOrCb, cb) {
        const command = new CreateTransitGatewayPeeringAttachmentCommand_1.CreateTransitGatewayPeeringAttachmentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTransitGatewayRoute(args, optionsOrCb, cb) {
        const command = new CreateTransitGatewayRouteCommand_1.CreateTransitGatewayRouteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTransitGatewayRouteTable(args, optionsOrCb, cb) {
        const command = new CreateTransitGatewayRouteTableCommand_1.CreateTransitGatewayRouteTableCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTransitGatewayVpcAttachment(args, optionsOrCb, cb) {
        const command = new CreateTransitGatewayVpcAttachmentCommand_1.CreateTransitGatewayVpcAttachmentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createVolume(args, optionsOrCb, cb) {
        const command = new CreateVolumeCommand_1.CreateVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createVpc(args, optionsOrCb, cb) {
        const command = new CreateVpcCommand_1.CreateVpcCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createVpcEndpoint(args, optionsOrCb, cb) {
        const command = new CreateVpcEndpointCommand_1.CreateVpcEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createVpcEndpointConnectionNotification(args, optionsOrCb, cb) {
        const command = new CreateVpcEndpointConnectionNotificationCommand_1.CreateVpcEndpointConnectionNotificationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createVpcEndpointServiceConfiguration(args, optionsOrCb, cb) {
        const command = new CreateVpcEndpointServiceConfigurationCommand_1.CreateVpcEndpointServiceConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createVpcPeeringConnection(args, optionsOrCb, cb) {
        const command = new CreateVpcPeeringConnectionCommand_1.CreateVpcPeeringConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createVpnConnection(args, optionsOrCb, cb) {
        const command = new CreateVpnConnectionCommand_1.CreateVpnConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createVpnConnectionRoute(args, optionsOrCb, cb) {
        const command = new CreateVpnConnectionRouteCommand_1.CreateVpnConnectionRouteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createVpnGateway(args, optionsOrCb, cb) {
        const command = new CreateVpnGatewayCommand_1.CreateVpnGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteClientVpnEndpoint(args, optionsOrCb, cb) {
        const command = new DeleteClientVpnEndpointCommand_1.DeleteClientVpnEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteClientVpnRoute(args, optionsOrCb, cb) {
        const command = new DeleteClientVpnRouteCommand_1.DeleteClientVpnRouteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteCustomerGateway(args, optionsOrCb, cb) {
        const command = new DeleteCustomerGatewayCommand_1.DeleteCustomerGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDhcpOptions(args, optionsOrCb, cb) {
        const command = new DeleteDhcpOptionsCommand_1.DeleteDhcpOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteEgressOnlyInternetGateway(args, optionsOrCb, cb) {
        const command = new DeleteEgressOnlyInternetGatewayCommand_1.DeleteEgressOnlyInternetGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteFleets(args, optionsOrCb, cb) {
        const command = new DeleteFleetsCommand_1.DeleteFleetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteFlowLogs(args, optionsOrCb, cb) {
        const command = new DeleteFlowLogsCommand_1.DeleteFlowLogsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteFpgaImage(args, optionsOrCb, cb) {
        const command = new DeleteFpgaImageCommand_1.DeleteFpgaImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteInternetGateway(args, optionsOrCb, cb) {
        const command = new DeleteInternetGatewayCommand_1.DeleteInternetGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteKeyPair(args, optionsOrCb, cb) {
        const command = new DeleteKeyPairCommand_1.DeleteKeyPairCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteLaunchTemplate(args, optionsOrCb, cb) {
        const command = new DeleteLaunchTemplateCommand_1.DeleteLaunchTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteLaunchTemplateVersions(args, optionsOrCb, cb) {
        const command = new DeleteLaunchTemplateVersionsCommand_1.DeleteLaunchTemplateVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteLocalGatewayRoute(args, optionsOrCb, cb) {
        const command = new DeleteLocalGatewayRouteCommand_1.DeleteLocalGatewayRouteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteLocalGatewayRouteTableVpcAssociation(args, optionsOrCb, cb) {
        const command = new DeleteLocalGatewayRouteTableVpcAssociationCommand_1.DeleteLocalGatewayRouteTableVpcAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteNatGateway(args, optionsOrCb, cb) {
        const command = new DeleteNatGatewayCommand_1.DeleteNatGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteNetworkAcl(args, optionsOrCb, cb) {
        const command = new DeleteNetworkAclCommand_1.DeleteNetworkAclCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteNetworkAclEntry(args, optionsOrCb, cb) {
        const command = new DeleteNetworkAclEntryCommand_1.DeleteNetworkAclEntryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteNetworkInterface(args, optionsOrCb, cb) {
        const command = new DeleteNetworkInterfaceCommand_1.DeleteNetworkInterfaceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteNetworkInterfacePermission(args, optionsOrCb, cb) {
        const command = new DeleteNetworkInterfacePermissionCommand_1.DeleteNetworkInterfacePermissionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deletePlacementGroup(args, optionsOrCb, cb) {
        const command = new DeletePlacementGroupCommand_1.DeletePlacementGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteQueuedReservedInstances(args, optionsOrCb, cb) {
        const command = new DeleteQueuedReservedInstancesCommand_1.DeleteQueuedReservedInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteRoute(args, optionsOrCb, cb) {
        const command = new DeleteRouteCommand_1.DeleteRouteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteRouteTable(args, optionsOrCb, cb) {
        const command = new DeleteRouteTableCommand_1.DeleteRouteTableCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteSecurityGroup(args, optionsOrCb, cb) {
        const command = new DeleteSecurityGroupCommand_1.DeleteSecurityGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteSnapshot(args, optionsOrCb, cb) {
        const command = new DeleteSnapshotCommand_1.DeleteSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteSpotDatafeedSubscription(args, optionsOrCb, cb) {
        const command = new DeleteSpotDatafeedSubscriptionCommand_1.DeleteSpotDatafeedSubscriptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteSubnet(args, optionsOrCb, cb) {
        const command = new DeleteSubnetCommand_1.DeleteSubnetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteTags(args, optionsOrCb, cb) {
        const command = new DeleteTagsCommand_1.DeleteTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteTrafficMirrorFilter(args, optionsOrCb, cb) {
        const command = new DeleteTrafficMirrorFilterCommand_1.DeleteTrafficMirrorFilterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteTrafficMirrorFilterRule(args, optionsOrCb, cb) {
        const command = new DeleteTrafficMirrorFilterRuleCommand_1.DeleteTrafficMirrorFilterRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteTrafficMirrorSession(args, optionsOrCb, cb) {
        const command = new DeleteTrafficMirrorSessionCommand_1.DeleteTrafficMirrorSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteTrafficMirrorTarget(args, optionsOrCb, cb) {
        const command = new DeleteTrafficMirrorTargetCommand_1.DeleteTrafficMirrorTargetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteTransitGateway(args, optionsOrCb, cb) {
        const command = new DeleteTransitGatewayCommand_1.DeleteTransitGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteTransitGatewayMulticastDomain(args, optionsOrCb, cb) {
        const command = new DeleteTransitGatewayMulticastDomainCommand_1.DeleteTransitGatewayMulticastDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteTransitGatewayPeeringAttachment(args, optionsOrCb, cb) {
        const command = new DeleteTransitGatewayPeeringAttachmentCommand_1.DeleteTransitGatewayPeeringAttachmentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteTransitGatewayRoute(args, optionsOrCb, cb) {
        const command = new DeleteTransitGatewayRouteCommand_1.DeleteTransitGatewayRouteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteTransitGatewayRouteTable(args, optionsOrCb, cb) {
        const command = new DeleteTransitGatewayRouteTableCommand_1.DeleteTransitGatewayRouteTableCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteTransitGatewayVpcAttachment(args, optionsOrCb, cb) {
        const command = new DeleteTransitGatewayVpcAttachmentCommand_1.DeleteTransitGatewayVpcAttachmentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteVolume(args, optionsOrCb, cb) {
        const command = new DeleteVolumeCommand_1.DeleteVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteVpc(args, optionsOrCb, cb) {
        const command = new DeleteVpcCommand_1.DeleteVpcCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteVpcEndpointConnectionNotifications(args, optionsOrCb, cb) {
        const command = new DeleteVpcEndpointConnectionNotificationsCommand_1.DeleteVpcEndpointConnectionNotificationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteVpcEndpointServiceConfigurations(args, optionsOrCb, cb) {
        const command = new DeleteVpcEndpointServiceConfigurationsCommand_1.DeleteVpcEndpointServiceConfigurationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteVpcEndpoints(args, optionsOrCb, cb) {
        const command = new DeleteVpcEndpointsCommand_1.DeleteVpcEndpointsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteVpcPeeringConnection(args, optionsOrCb, cb) {
        const command = new DeleteVpcPeeringConnectionCommand_1.DeleteVpcPeeringConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteVpnConnection(args, optionsOrCb, cb) {
        const command = new DeleteVpnConnectionCommand_1.DeleteVpnConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteVpnConnectionRoute(args, optionsOrCb, cb) {
        const command = new DeleteVpnConnectionRouteCommand_1.DeleteVpnConnectionRouteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteVpnGateway(args, optionsOrCb, cb) {
        const command = new DeleteVpnGatewayCommand_1.DeleteVpnGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deprovisionByoipCidr(args, optionsOrCb, cb) {
        const command = new DeprovisionByoipCidrCommand_1.DeprovisionByoipCidrCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deregisterImage(args, optionsOrCb, cb) {
        const command = new DeregisterImageCommand_1.DeregisterImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deregisterTransitGatewayMulticastGroupMembers(args, optionsOrCb, cb) {
        const command = new DeregisterTransitGatewayMulticastGroupMembersCommand_1.DeregisterTransitGatewayMulticastGroupMembersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deregisterTransitGatewayMulticastGroupSources(args, optionsOrCb, cb) {
        const command = new DeregisterTransitGatewayMulticastGroupSourcesCommand_1.DeregisterTransitGatewayMulticastGroupSourcesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAccountAttributes(args, optionsOrCb, cb) {
        const command = new DescribeAccountAttributesCommand_1.DescribeAccountAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAddresses(args, optionsOrCb, cb) {
        const command = new DescribeAddressesCommand_1.DescribeAddressesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAggregateIdFormat(args, optionsOrCb, cb) {
        const command = new DescribeAggregateIdFormatCommand_1.DescribeAggregateIdFormatCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAvailabilityZones(args, optionsOrCb, cb) {
        const command = new DescribeAvailabilityZonesCommand_1.DescribeAvailabilityZonesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeBundleTasks(args, optionsOrCb, cb) {
        const command = new DescribeBundleTasksCommand_1.DescribeBundleTasksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeByoipCidrs(args, optionsOrCb, cb) {
        const command = new DescribeByoipCidrsCommand_1.DescribeByoipCidrsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeCapacityReservations(args, optionsOrCb, cb) {
        const command = new DescribeCapacityReservationsCommand_1.DescribeCapacityReservationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeClassicLinkInstances(args, optionsOrCb, cb) {
        const command = new DescribeClassicLinkInstancesCommand_1.DescribeClassicLinkInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeClientVpnAuthorizationRules(args, optionsOrCb, cb) {
        const command = new DescribeClientVpnAuthorizationRulesCommand_1.DescribeClientVpnAuthorizationRulesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeClientVpnConnections(args, optionsOrCb, cb) {
        const command = new DescribeClientVpnConnectionsCommand_1.DescribeClientVpnConnectionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeClientVpnEndpoints(args, optionsOrCb, cb) {
        const command = new DescribeClientVpnEndpointsCommand_1.DescribeClientVpnEndpointsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeClientVpnRoutes(args, optionsOrCb, cb) {
        const command = new DescribeClientVpnRoutesCommand_1.DescribeClientVpnRoutesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeClientVpnTargetNetworks(args, optionsOrCb, cb) {
        const command = new DescribeClientVpnTargetNetworksCommand_1.DescribeClientVpnTargetNetworksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeCoipPools(args, optionsOrCb, cb) {
        const command = new DescribeCoipPoolsCommand_1.DescribeCoipPoolsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeConversionTasks(args, optionsOrCb, cb) {
        const command = new DescribeConversionTasksCommand_1.DescribeConversionTasksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeCustomerGateways(args, optionsOrCb, cb) {
        const command = new DescribeCustomerGatewaysCommand_1.DescribeCustomerGatewaysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDhcpOptions(args, optionsOrCb, cb) {
        const command = new DescribeDhcpOptionsCommand_1.DescribeDhcpOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeEgressOnlyInternetGateways(args, optionsOrCb, cb) {
        const command = new DescribeEgressOnlyInternetGatewaysCommand_1.DescribeEgressOnlyInternetGatewaysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeElasticGpus(args, optionsOrCb, cb) {
        const command = new DescribeElasticGpusCommand_1.DescribeElasticGpusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeExportImageTasks(args, optionsOrCb, cb) {
        const command = new DescribeExportImageTasksCommand_1.DescribeExportImageTasksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeExportTasks(args, optionsOrCb, cb) {
        const command = new DescribeExportTasksCommand_1.DescribeExportTasksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeFastSnapshotRestores(args, optionsOrCb, cb) {
        const command = new DescribeFastSnapshotRestoresCommand_1.DescribeFastSnapshotRestoresCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeFleetHistory(args, optionsOrCb, cb) {
        const command = new DescribeFleetHistoryCommand_1.DescribeFleetHistoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeFleetInstances(args, optionsOrCb, cb) {
        const command = new DescribeFleetInstancesCommand_1.DescribeFleetInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeFleets(args, optionsOrCb, cb) {
        const command = new DescribeFleetsCommand_1.DescribeFleetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeFlowLogs(args, optionsOrCb, cb) {
        const command = new DescribeFlowLogsCommand_1.DescribeFlowLogsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeFpgaImageAttribute(args, optionsOrCb, cb) {
        const command = new DescribeFpgaImageAttributeCommand_1.DescribeFpgaImageAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeFpgaImages(args, optionsOrCb, cb) {
        const command = new DescribeFpgaImagesCommand_1.DescribeFpgaImagesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeHostReservationOfferings(args, optionsOrCb, cb) {
        const command = new DescribeHostReservationOfferingsCommand_1.DescribeHostReservationOfferingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeHostReservations(args, optionsOrCb, cb) {
        const command = new DescribeHostReservationsCommand_1.DescribeHostReservationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeHosts(args, optionsOrCb, cb) {
        const command = new DescribeHostsCommand_1.DescribeHostsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeIamInstanceProfileAssociations(args, optionsOrCb, cb) {
        const command = new DescribeIamInstanceProfileAssociationsCommand_1.DescribeIamInstanceProfileAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeIdFormat(args, optionsOrCb, cb) {
        const command = new DescribeIdFormatCommand_1.DescribeIdFormatCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeIdentityIdFormat(args, optionsOrCb, cb) {
        const command = new DescribeIdentityIdFormatCommand_1.DescribeIdentityIdFormatCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeImageAttribute(args, optionsOrCb, cb) {
        const command = new DescribeImageAttributeCommand_1.DescribeImageAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeImages(args, optionsOrCb, cb) {
        const command = new DescribeImagesCommand_1.DescribeImagesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeImportImageTasks(args, optionsOrCb, cb) {
        const command = new DescribeImportImageTasksCommand_1.DescribeImportImageTasksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeImportSnapshotTasks(args, optionsOrCb, cb) {
        const command = new DescribeImportSnapshotTasksCommand_1.DescribeImportSnapshotTasksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeInstanceAttribute(args, optionsOrCb, cb) {
        const command = new DescribeInstanceAttributeCommand_1.DescribeInstanceAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeInstanceCreditSpecifications(args, optionsOrCb, cb) {
        const command = new DescribeInstanceCreditSpecificationsCommand_1.DescribeInstanceCreditSpecificationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeInstanceStatus(args, optionsOrCb, cb) {
        const command = new DescribeInstanceStatusCommand_1.DescribeInstanceStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeInstanceTypeOfferings(args, optionsOrCb, cb) {
        const command = new DescribeInstanceTypeOfferingsCommand_1.DescribeInstanceTypeOfferingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeInstanceTypes(args, optionsOrCb, cb) {
        const command = new DescribeInstanceTypesCommand_1.DescribeInstanceTypesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeInstances(args, optionsOrCb, cb) {
        const command = new DescribeInstancesCommand_1.DescribeInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeInternetGateways(args, optionsOrCb, cb) {
        const command = new DescribeInternetGatewaysCommand_1.DescribeInternetGatewaysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeIpv6Pools(args, optionsOrCb, cb) {
        const command = new DescribeIpv6PoolsCommand_1.DescribeIpv6PoolsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeKeyPairs(args, optionsOrCb, cb) {
        const command = new DescribeKeyPairsCommand_1.DescribeKeyPairsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeLaunchTemplateVersions(args, optionsOrCb, cb) {
        const command = new DescribeLaunchTemplateVersionsCommand_1.DescribeLaunchTemplateVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeLaunchTemplates(args, optionsOrCb, cb) {
        const command = new DescribeLaunchTemplatesCommand_1.DescribeLaunchTemplatesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations(args, optionsOrCb, cb) {
        const command = new DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand_1.DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeLocalGatewayRouteTableVpcAssociations(args, optionsOrCb, cb) {
        const command = new DescribeLocalGatewayRouteTableVpcAssociationsCommand_1.DescribeLocalGatewayRouteTableVpcAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeLocalGatewayRouteTables(args, optionsOrCb, cb) {
        const command = new DescribeLocalGatewayRouteTablesCommand_1.DescribeLocalGatewayRouteTablesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeLocalGatewayVirtualInterfaceGroups(args, optionsOrCb, cb) {
        const command = new DescribeLocalGatewayVirtualInterfaceGroupsCommand_1.DescribeLocalGatewayVirtualInterfaceGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeLocalGatewayVirtualInterfaces(args, optionsOrCb, cb) {
        const command = new DescribeLocalGatewayVirtualInterfacesCommand_1.DescribeLocalGatewayVirtualInterfacesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeLocalGateways(args, optionsOrCb, cb) {
        const command = new DescribeLocalGatewaysCommand_1.DescribeLocalGatewaysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeMovingAddresses(args, optionsOrCb, cb) {
        const command = new DescribeMovingAddressesCommand_1.DescribeMovingAddressesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeNatGateways(args, optionsOrCb, cb) {
        const command = new DescribeNatGatewaysCommand_1.DescribeNatGatewaysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeNetworkAcls(args, optionsOrCb, cb) {
        const command = new DescribeNetworkAclsCommand_1.DescribeNetworkAclsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeNetworkInterfaceAttribute(args, optionsOrCb, cb) {
        const command = new DescribeNetworkInterfaceAttributeCommand_1.DescribeNetworkInterfaceAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeNetworkInterfacePermissions(args, optionsOrCb, cb) {
        const command = new DescribeNetworkInterfacePermissionsCommand_1.DescribeNetworkInterfacePermissionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeNetworkInterfaces(args, optionsOrCb, cb) {
        const command = new DescribeNetworkInterfacesCommand_1.DescribeNetworkInterfacesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describePlacementGroups(args, optionsOrCb, cb) {
        const command = new DescribePlacementGroupsCommand_1.DescribePlacementGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describePrefixLists(args, optionsOrCb, cb) {
        const command = new DescribePrefixListsCommand_1.DescribePrefixListsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describePrincipalIdFormat(args, optionsOrCb, cb) {
        const command = new DescribePrincipalIdFormatCommand_1.DescribePrincipalIdFormatCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describePublicIpv4Pools(args, optionsOrCb, cb) {
        const command = new DescribePublicIpv4PoolsCommand_1.DescribePublicIpv4PoolsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeRegions(args, optionsOrCb, cb) {
        const command = new DescribeRegionsCommand_1.DescribeRegionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeReservedInstances(args, optionsOrCb, cb) {
        const command = new DescribeReservedInstancesCommand_1.DescribeReservedInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeReservedInstancesListings(args, optionsOrCb, cb) {
        const command = new DescribeReservedInstancesListingsCommand_1.DescribeReservedInstancesListingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeReservedInstancesModifications(args, optionsOrCb, cb) {
        const command = new DescribeReservedInstancesModificationsCommand_1.DescribeReservedInstancesModificationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeReservedInstancesOfferings(args, optionsOrCb, cb) {
        const command = new DescribeReservedInstancesOfferingsCommand_1.DescribeReservedInstancesOfferingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeRouteTables(args, optionsOrCb, cb) {
        const command = new DescribeRouteTablesCommand_1.DescribeRouteTablesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeScheduledInstanceAvailability(args, optionsOrCb, cb) {
        const command = new DescribeScheduledInstanceAvailabilityCommand_1.DescribeScheduledInstanceAvailabilityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeScheduledInstances(args, optionsOrCb, cb) {
        const command = new DescribeScheduledInstancesCommand_1.DescribeScheduledInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeSecurityGroupReferences(args, optionsOrCb, cb) {
        const command = new DescribeSecurityGroupReferencesCommand_1.DescribeSecurityGroupReferencesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeSecurityGroups(args, optionsOrCb, cb) {
        const command = new DescribeSecurityGroupsCommand_1.DescribeSecurityGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeSnapshotAttribute(args, optionsOrCb, cb) {
        const command = new DescribeSnapshotAttributeCommand_1.DescribeSnapshotAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeSnapshots(args, optionsOrCb, cb) {
        const command = new DescribeSnapshotsCommand_1.DescribeSnapshotsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeSpotDatafeedSubscription(args, optionsOrCb, cb) {
        const command = new DescribeSpotDatafeedSubscriptionCommand_1.DescribeSpotDatafeedSubscriptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeSpotFleetInstances(args, optionsOrCb, cb) {
        const command = new DescribeSpotFleetInstancesCommand_1.DescribeSpotFleetInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeSpotFleetRequestHistory(args, optionsOrCb, cb) {
        const command = new DescribeSpotFleetRequestHistoryCommand_1.DescribeSpotFleetRequestHistoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeSpotFleetRequests(args, optionsOrCb, cb) {
        const command = new DescribeSpotFleetRequestsCommand_1.DescribeSpotFleetRequestsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeSpotInstanceRequests(args, optionsOrCb, cb) {
        const command = new DescribeSpotInstanceRequestsCommand_1.DescribeSpotInstanceRequestsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeSpotPriceHistory(args, optionsOrCb, cb) {
        const command = new DescribeSpotPriceHistoryCommand_1.DescribeSpotPriceHistoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeStaleSecurityGroups(args, optionsOrCb, cb) {
        const command = new DescribeStaleSecurityGroupsCommand_1.DescribeStaleSecurityGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeSubnets(args, optionsOrCb, cb) {
        const command = new DescribeSubnetsCommand_1.DescribeSubnetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTags(args, optionsOrCb, cb) {
        const command = new DescribeTagsCommand_1.DescribeTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTrafficMirrorFilters(args, optionsOrCb, cb) {
        const command = new DescribeTrafficMirrorFiltersCommand_1.DescribeTrafficMirrorFiltersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTrafficMirrorSessions(args, optionsOrCb, cb) {
        const command = new DescribeTrafficMirrorSessionsCommand_1.DescribeTrafficMirrorSessionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTrafficMirrorTargets(args, optionsOrCb, cb) {
        const command = new DescribeTrafficMirrorTargetsCommand_1.DescribeTrafficMirrorTargetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTransitGatewayAttachments(args, optionsOrCb, cb) {
        const command = new DescribeTransitGatewayAttachmentsCommand_1.DescribeTransitGatewayAttachmentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTransitGatewayMulticastDomains(args, optionsOrCb, cb) {
        const command = new DescribeTransitGatewayMulticastDomainsCommand_1.DescribeTransitGatewayMulticastDomainsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTransitGatewayPeeringAttachments(args, optionsOrCb, cb) {
        const command = new DescribeTransitGatewayPeeringAttachmentsCommand_1.DescribeTransitGatewayPeeringAttachmentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTransitGatewayRouteTables(args, optionsOrCb, cb) {
        const command = new DescribeTransitGatewayRouteTablesCommand_1.DescribeTransitGatewayRouteTablesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTransitGatewayVpcAttachments(args, optionsOrCb, cb) {
        const command = new DescribeTransitGatewayVpcAttachmentsCommand_1.DescribeTransitGatewayVpcAttachmentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTransitGateways(args, optionsOrCb, cb) {
        const command = new DescribeTransitGatewaysCommand_1.DescribeTransitGatewaysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeVolumeAttribute(args, optionsOrCb, cb) {
        const command = new DescribeVolumeAttributeCommand_1.DescribeVolumeAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeVolumeStatus(args, optionsOrCb, cb) {
        const command = new DescribeVolumeStatusCommand_1.DescribeVolumeStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeVolumes(args, optionsOrCb, cb) {
        const command = new DescribeVolumesCommand_1.DescribeVolumesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeVolumesModifications(args, optionsOrCb, cb) {
        const command = new DescribeVolumesModificationsCommand_1.DescribeVolumesModificationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeVpcAttribute(args, optionsOrCb, cb) {
        const command = new DescribeVpcAttributeCommand_1.DescribeVpcAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeVpcClassicLink(args, optionsOrCb, cb) {
        const command = new DescribeVpcClassicLinkCommand_1.DescribeVpcClassicLinkCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeVpcClassicLinkDnsSupport(args, optionsOrCb, cb) {
        const command = new DescribeVpcClassicLinkDnsSupportCommand_1.DescribeVpcClassicLinkDnsSupportCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeVpcEndpointConnectionNotifications(args, optionsOrCb, cb) {
        const command = new DescribeVpcEndpointConnectionNotificationsCommand_1.DescribeVpcEndpointConnectionNotificationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeVpcEndpointConnections(args, optionsOrCb, cb) {
        const command = new DescribeVpcEndpointConnectionsCommand_1.DescribeVpcEndpointConnectionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeVpcEndpointServiceConfigurations(args, optionsOrCb, cb) {
        const command = new DescribeVpcEndpointServiceConfigurationsCommand_1.DescribeVpcEndpointServiceConfigurationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeVpcEndpointServicePermissions(args, optionsOrCb, cb) {
        const command = new DescribeVpcEndpointServicePermissionsCommand_1.DescribeVpcEndpointServicePermissionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeVpcEndpointServices(args, optionsOrCb, cb) {
        const command = new DescribeVpcEndpointServicesCommand_1.DescribeVpcEndpointServicesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeVpcEndpoints(args, optionsOrCb, cb) {
        const command = new DescribeVpcEndpointsCommand_1.DescribeVpcEndpointsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeVpcPeeringConnections(args, optionsOrCb, cb) {
        const command = new DescribeVpcPeeringConnectionsCommand_1.DescribeVpcPeeringConnectionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeVpcs(args, optionsOrCb, cb) {
        const command = new DescribeVpcsCommand_1.DescribeVpcsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeVpnConnections(args, optionsOrCb, cb) {
        const command = new DescribeVpnConnectionsCommand_1.DescribeVpnConnectionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeVpnGateways(args, optionsOrCb, cb) {
        const command = new DescribeVpnGatewaysCommand_1.DescribeVpnGatewaysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    detachClassicLinkVpc(args, optionsOrCb, cb) {
        const command = new DetachClassicLinkVpcCommand_1.DetachClassicLinkVpcCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    detachInternetGateway(args, optionsOrCb, cb) {
        const command = new DetachInternetGatewayCommand_1.DetachInternetGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    detachNetworkInterface(args, optionsOrCb, cb) {
        const command = new DetachNetworkInterfaceCommand_1.DetachNetworkInterfaceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    detachVolume(args, optionsOrCb, cb) {
        const command = new DetachVolumeCommand_1.DetachVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    detachVpnGateway(args, optionsOrCb, cb) {
        const command = new DetachVpnGatewayCommand_1.DetachVpnGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disableEbsEncryptionByDefault(args, optionsOrCb, cb) {
        const command = new DisableEbsEncryptionByDefaultCommand_1.DisableEbsEncryptionByDefaultCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disableFastSnapshotRestores(args, optionsOrCb, cb) {
        const command = new DisableFastSnapshotRestoresCommand_1.DisableFastSnapshotRestoresCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disableTransitGatewayRouteTablePropagation(args, optionsOrCb, cb) {
        const command = new DisableTransitGatewayRouteTablePropagationCommand_1.DisableTransitGatewayRouteTablePropagationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disableVgwRoutePropagation(args, optionsOrCb, cb) {
        const command = new DisableVgwRoutePropagationCommand_1.DisableVgwRoutePropagationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disableVpcClassicLink(args, optionsOrCb, cb) {
        const command = new DisableVpcClassicLinkCommand_1.DisableVpcClassicLinkCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disableVpcClassicLinkDnsSupport(args, optionsOrCb, cb) {
        const command = new DisableVpcClassicLinkDnsSupportCommand_1.DisableVpcClassicLinkDnsSupportCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateAddress(args, optionsOrCb, cb) {
        const command = new DisassociateAddressCommand_1.DisassociateAddressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateClientVpnTargetNetwork(args, optionsOrCb, cb) {
        const command = new DisassociateClientVpnTargetNetworkCommand_1.DisassociateClientVpnTargetNetworkCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateIamInstanceProfile(args, optionsOrCb, cb) {
        const command = new DisassociateIamInstanceProfileCommand_1.DisassociateIamInstanceProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateRouteTable(args, optionsOrCb, cb) {
        const command = new DisassociateRouteTableCommand_1.DisassociateRouteTableCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateSubnetCidrBlock(args, optionsOrCb, cb) {
        const command = new DisassociateSubnetCidrBlockCommand_1.DisassociateSubnetCidrBlockCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateTransitGatewayMulticastDomain(args, optionsOrCb, cb) {
        const command = new DisassociateTransitGatewayMulticastDomainCommand_1.DisassociateTransitGatewayMulticastDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateTransitGatewayRouteTable(args, optionsOrCb, cb) {
        const command = new DisassociateTransitGatewayRouteTableCommand_1.DisassociateTransitGatewayRouteTableCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateVpcCidrBlock(args, optionsOrCb, cb) {
        const command = new DisassociateVpcCidrBlockCommand_1.DisassociateVpcCidrBlockCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    enableEbsEncryptionByDefault(args, optionsOrCb, cb) {
        const command = new EnableEbsEncryptionByDefaultCommand_1.EnableEbsEncryptionByDefaultCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    enableFastSnapshotRestores(args, optionsOrCb, cb) {
        const command = new EnableFastSnapshotRestoresCommand_1.EnableFastSnapshotRestoresCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    enableTransitGatewayRouteTablePropagation(args, optionsOrCb, cb) {
        const command = new EnableTransitGatewayRouteTablePropagationCommand_1.EnableTransitGatewayRouteTablePropagationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    enableVgwRoutePropagation(args, optionsOrCb, cb) {
        const command = new EnableVgwRoutePropagationCommand_1.EnableVgwRoutePropagationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    enableVolumeIO(args, optionsOrCb, cb) {
        const command = new EnableVolumeIOCommand_1.EnableVolumeIOCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    enableVpcClassicLink(args, optionsOrCb, cb) {
        const command = new EnableVpcClassicLinkCommand_1.EnableVpcClassicLinkCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    enableVpcClassicLinkDnsSupport(args, optionsOrCb, cb) {
        const command = new EnableVpcClassicLinkDnsSupportCommand_1.EnableVpcClassicLinkDnsSupportCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    exportClientVpnClientCertificateRevocationList(args, optionsOrCb, cb) {
        const command = new ExportClientVpnClientCertificateRevocationListCommand_1.ExportClientVpnClientCertificateRevocationListCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    exportClientVpnClientConfiguration(args, optionsOrCb, cb) {
        const command = new ExportClientVpnClientConfigurationCommand_1.ExportClientVpnClientConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    exportImage(args, optionsOrCb, cb) {
        const command = new ExportImageCommand_1.ExportImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    exportTransitGatewayRoutes(args, optionsOrCb, cb) {
        const command = new ExportTransitGatewayRoutesCommand_1.ExportTransitGatewayRoutesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getAssociatedIpv6PoolCidrs(args, optionsOrCb, cb) {
        const command = new GetAssociatedIpv6PoolCidrsCommand_1.GetAssociatedIpv6PoolCidrsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getCapacityReservationUsage(args, optionsOrCb, cb) {
        const command = new GetCapacityReservationUsageCommand_1.GetCapacityReservationUsageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getCoipPoolUsage(args, optionsOrCb, cb) {
        const command = new GetCoipPoolUsageCommand_1.GetCoipPoolUsageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getConsoleOutput(args, optionsOrCb, cb) {
        const command = new GetConsoleOutputCommand_1.GetConsoleOutputCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getConsoleScreenshot(args, optionsOrCb, cb) {
        const command = new GetConsoleScreenshotCommand_1.GetConsoleScreenshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getDefaultCreditSpecification(args, optionsOrCb, cb) {
        const command = new GetDefaultCreditSpecificationCommand_1.GetDefaultCreditSpecificationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getEbsDefaultKmsKeyId(args, optionsOrCb, cb) {
        const command = new GetEbsDefaultKmsKeyIdCommand_1.GetEbsDefaultKmsKeyIdCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getEbsEncryptionByDefault(args, optionsOrCb, cb) {
        const command = new GetEbsEncryptionByDefaultCommand_1.GetEbsEncryptionByDefaultCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getHostReservationPurchasePreview(args, optionsOrCb, cb) {
        const command = new GetHostReservationPurchasePreviewCommand_1.GetHostReservationPurchasePreviewCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getLaunchTemplateData(args, optionsOrCb, cb) {
        const command = new GetLaunchTemplateDataCommand_1.GetLaunchTemplateDataCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getPasswordData(args, optionsOrCb, cb) {
        const command = new GetPasswordDataCommand_1.GetPasswordDataCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getReservedInstancesExchangeQuote(args, optionsOrCb, cb) {
        const command = new GetReservedInstancesExchangeQuoteCommand_1.GetReservedInstancesExchangeQuoteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getTransitGatewayAttachmentPropagations(args, optionsOrCb, cb) {
        const command = new GetTransitGatewayAttachmentPropagationsCommand_1.GetTransitGatewayAttachmentPropagationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getTransitGatewayMulticastDomainAssociations(args, optionsOrCb, cb) {
        const command = new GetTransitGatewayMulticastDomainAssociationsCommand_1.GetTransitGatewayMulticastDomainAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getTransitGatewayRouteTableAssociations(args, optionsOrCb, cb) {
        const command = new GetTransitGatewayRouteTableAssociationsCommand_1.GetTransitGatewayRouteTableAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getTransitGatewayRouteTablePropagations(args, optionsOrCb, cb) {
        const command = new GetTransitGatewayRouteTablePropagationsCommand_1.GetTransitGatewayRouteTablePropagationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    importClientVpnClientCertificateRevocationList(args, optionsOrCb, cb) {
        const command = new ImportClientVpnClientCertificateRevocationListCommand_1.ImportClientVpnClientCertificateRevocationListCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    importImage(args, optionsOrCb, cb) {
        const command = new ImportImageCommand_1.ImportImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    importInstance(args, optionsOrCb, cb) {
        const command = new ImportInstanceCommand_1.ImportInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    importKeyPair(args, optionsOrCb, cb) {
        const command = new ImportKeyPairCommand_1.ImportKeyPairCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    importSnapshot(args, optionsOrCb, cb) {
        const command = new ImportSnapshotCommand_1.ImportSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    importVolume(args, optionsOrCb, cb) {
        const command = new ImportVolumeCommand_1.ImportVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyCapacityReservation(args, optionsOrCb, cb) {
        const command = new ModifyCapacityReservationCommand_1.ModifyCapacityReservationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyClientVpnEndpoint(args, optionsOrCb, cb) {
        const command = new ModifyClientVpnEndpointCommand_1.ModifyClientVpnEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyDefaultCreditSpecification(args, optionsOrCb, cb) {
        const command = new ModifyDefaultCreditSpecificationCommand_1.ModifyDefaultCreditSpecificationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyEbsDefaultKmsKeyId(args, optionsOrCb, cb) {
        const command = new ModifyEbsDefaultKmsKeyIdCommand_1.ModifyEbsDefaultKmsKeyIdCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyFleet(args, optionsOrCb, cb) {
        const command = new ModifyFleetCommand_1.ModifyFleetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyFpgaImageAttribute(args, optionsOrCb, cb) {
        const command = new ModifyFpgaImageAttributeCommand_1.ModifyFpgaImageAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyHosts(args, optionsOrCb, cb) {
        const command = new ModifyHostsCommand_1.ModifyHostsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyIdFormat(args, optionsOrCb, cb) {
        const command = new ModifyIdFormatCommand_1.ModifyIdFormatCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyIdentityIdFormat(args, optionsOrCb, cb) {
        const command = new ModifyIdentityIdFormatCommand_1.ModifyIdentityIdFormatCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyImageAttribute(args, optionsOrCb, cb) {
        const command = new ModifyImageAttributeCommand_1.ModifyImageAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyInstanceAttribute(args, optionsOrCb, cb) {
        const command = new ModifyInstanceAttributeCommand_1.ModifyInstanceAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyInstanceCapacityReservationAttributes(args, optionsOrCb, cb) {
        const command = new ModifyInstanceCapacityReservationAttributesCommand_1.ModifyInstanceCapacityReservationAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyInstanceCreditSpecification(args, optionsOrCb, cb) {
        const command = new ModifyInstanceCreditSpecificationCommand_1.ModifyInstanceCreditSpecificationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyInstanceEventStartTime(args, optionsOrCb, cb) {
        const command = new ModifyInstanceEventStartTimeCommand_1.ModifyInstanceEventStartTimeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyInstanceMetadataOptions(args, optionsOrCb, cb) {
        const command = new ModifyInstanceMetadataOptionsCommand_1.ModifyInstanceMetadataOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyInstancePlacement(args, optionsOrCb, cb) {
        const command = new ModifyInstancePlacementCommand_1.ModifyInstancePlacementCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyLaunchTemplate(args, optionsOrCb, cb) {
        const command = new ModifyLaunchTemplateCommand_1.ModifyLaunchTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyNetworkInterfaceAttribute(args, optionsOrCb, cb) {
        const command = new ModifyNetworkInterfaceAttributeCommand_1.ModifyNetworkInterfaceAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyReservedInstances(args, optionsOrCb, cb) {
        const command = new ModifyReservedInstancesCommand_1.ModifyReservedInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifySnapshotAttribute(args, optionsOrCb, cb) {
        const command = new ModifySnapshotAttributeCommand_1.ModifySnapshotAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifySpotFleetRequest(args, optionsOrCb, cb) {
        const command = new ModifySpotFleetRequestCommand_1.ModifySpotFleetRequestCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifySubnetAttribute(args, optionsOrCb, cb) {
        const command = new ModifySubnetAttributeCommand_1.ModifySubnetAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyTrafficMirrorFilterNetworkServices(args, optionsOrCb, cb) {
        const command = new ModifyTrafficMirrorFilterNetworkServicesCommand_1.ModifyTrafficMirrorFilterNetworkServicesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyTrafficMirrorFilterRule(args, optionsOrCb, cb) {
        const command = new ModifyTrafficMirrorFilterRuleCommand_1.ModifyTrafficMirrorFilterRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyTrafficMirrorSession(args, optionsOrCb, cb) {
        const command = new ModifyTrafficMirrorSessionCommand_1.ModifyTrafficMirrorSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyTransitGatewayVpcAttachment(args, optionsOrCb, cb) {
        const command = new ModifyTransitGatewayVpcAttachmentCommand_1.ModifyTransitGatewayVpcAttachmentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyVolume(args, optionsOrCb, cb) {
        const command = new ModifyVolumeCommand_1.ModifyVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyVolumeAttribute(args, optionsOrCb, cb) {
        const command = new ModifyVolumeAttributeCommand_1.ModifyVolumeAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyVpcAttribute(args, optionsOrCb, cb) {
        const command = new ModifyVpcAttributeCommand_1.ModifyVpcAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyVpcEndpoint(args, optionsOrCb, cb) {
        const command = new ModifyVpcEndpointCommand_1.ModifyVpcEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyVpcEndpointConnectionNotification(args, optionsOrCb, cb) {
        const command = new ModifyVpcEndpointConnectionNotificationCommand_1.ModifyVpcEndpointConnectionNotificationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyVpcEndpointServiceConfiguration(args, optionsOrCb, cb) {
        const command = new ModifyVpcEndpointServiceConfigurationCommand_1.ModifyVpcEndpointServiceConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyVpcEndpointServicePermissions(args, optionsOrCb, cb) {
        const command = new ModifyVpcEndpointServicePermissionsCommand_1.ModifyVpcEndpointServicePermissionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyVpcPeeringConnectionOptions(args, optionsOrCb, cb) {
        const command = new ModifyVpcPeeringConnectionOptionsCommand_1.ModifyVpcPeeringConnectionOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyVpcTenancy(args, optionsOrCb, cb) {
        const command = new ModifyVpcTenancyCommand_1.ModifyVpcTenancyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyVpnConnection(args, optionsOrCb, cb) {
        const command = new ModifyVpnConnectionCommand_1.ModifyVpnConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyVpnTunnelCertificate(args, optionsOrCb, cb) {
        const command = new ModifyVpnTunnelCertificateCommand_1.ModifyVpnTunnelCertificateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyVpnTunnelOptions(args, optionsOrCb, cb) {
        const command = new ModifyVpnTunnelOptionsCommand_1.ModifyVpnTunnelOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    monitorInstances(args, optionsOrCb, cb) {
        const command = new MonitorInstancesCommand_1.MonitorInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    moveAddressToVpc(args, optionsOrCb, cb) {
        const command = new MoveAddressToVpcCommand_1.MoveAddressToVpcCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    provisionByoipCidr(args, optionsOrCb, cb) {
        const command = new ProvisionByoipCidrCommand_1.ProvisionByoipCidrCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    purchaseHostReservation(args, optionsOrCb, cb) {
        const command = new PurchaseHostReservationCommand_1.PurchaseHostReservationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    purchaseReservedInstancesOffering(args, optionsOrCb, cb) {
        const command = new PurchaseReservedInstancesOfferingCommand_1.PurchaseReservedInstancesOfferingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    purchaseScheduledInstances(args, optionsOrCb, cb) {
        const command = new PurchaseScheduledInstancesCommand_1.PurchaseScheduledInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    rebootInstances(args, optionsOrCb, cb) {
        const command = new RebootInstancesCommand_1.RebootInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    registerImage(args, optionsOrCb, cb) {
        const command = new RegisterImageCommand_1.RegisterImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    registerTransitGatewayMulticastGroupMembers(args, optionsOrCb, cb) {
        const command = new RegisterTransitGatewayMulticastGroupMembersCommand_1.RegisterTransitGatewayMulticastGroupMembersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    registerTransitGatewayMulticastGroupSources(args, optionsOrCb, cb) {
        const command = new RegisterTransitGatewayMulticastGroupSourcesCommand_1.RegisterTransitGatewayMulticastGroupSourcesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    rejectTransitGatewayPeeringAttachment(args, optionsOrCb, cb) {
        const command = new RejectTransitGatewayPeeringAttachmentCommand_1.RejectTransitGatewayPeeringAttachmentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    rejectTransitGatewayVpcAttachment(args, optionsOrCb, cb) {
        const command = new RejectTransitGatewayVpcAttachmentCommand_1.RejectTransitGatewayVpcAttachmentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    rejectVpcEndpointConnections(args, optionsOrCb, cb) {
        const command = new RejectVpcEndpointConnectionsCommand_1.RejectVpcEndpointConnectionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    rejectVpcPeeringConnection(args, optionsOrCb, cb) {
        const command = new RejectVpcPeeringConnectionCommand_1.RejectVpcPeeringConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    releaseAddress(args, optionsOrCb, cb) {
        const command = new ReleaseAddressCommand_1.ReleaseAddressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    releaseHosts(args, optionsOrCb, cb) {
        const command = new ReleaseHostsCommand_1.ReleaseHostsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    replaceIamInstanceProfileAssociation(args, optionsOrCb, cb) {
        const command = new ReplaceIamInstanceProfileAssociationCommand_1.ReplaceIamInstanceProfileAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    replaceNetworkAclAssociation(args, optionsOrCb, cb) {
        const command = new ReplaceNetworkAclAssociationCommand_1.ReplaceNetworkAclAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    replaceNetworkAclEntry(args, optionsOrCb, cb) {
        const command = new ReplaceNetworkAclEntryCommand_1.ReplaceNetworkAclEntryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    replaceRoute(args, optionsOrCb, cb) {
        const command = new ReplaceRouteCommand_1.ReplaceRouteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    replaceRouteTableAssociation(args, optionsOrCb, cb) {
        const command = new ReplaceRouteTableAssociationCommand_1.ReplaceRouteTableAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    replaceTransitGatewayRoute(args, optionsOrCb, cb) {
        const command = new ReplaceTransitGatewayRouteCommand_1.ReplaceTransitGatewayRouteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    reportInstanceStatus(args, optionsOrCb, cb) {
        const command = new ReportInstanceStatusCommand_1.ReportInstanceStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    requestSpotFleet(args, optionsOrCb, cb) {
        const command = new RequestSpotFleetCommand_1.RequestSpotFleetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    requestSpotInstances(args, optionsOrCb, cb) {
        const command = new RequestSpotInstancesCommand_1.RequestSpotInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    resetEbsDefaultKmsKeyId(args, optionsOrCb, cb) {
        const command = new ResetEbsDefaultKmsKeyIdCommand_1.ResetEbsDefaultKmsKeyIdCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    resetFpgaImageAttribute(args, optionsOrCb, cb) {
        const command = new ResetFpgaImageAttributeCommand_1.ResetFpgaImageAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    resetImageAttribute(args, optionsOrCb, cb) {
        const command = new ResetImageAttributeCommand_1.ResetImageAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    resetInstanceAttribute(args, optionsOrCb, cb) {
        const command = new ResetInstanceAttributeCommand_1.ResetInstanceAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    resetNetworkInterfaceAttribute(args, optionsOrCb, cb) {
        const command = new ResetNetworkInterfaceAttributeCommand_1.ResetNetworkInterfaceAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    resetSnapshotAttribute(args, optionsOrCb, cb) {
        const command = new ResetSnapshotAttributeCommand_1.ResetSnapshotAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    restoreAddressToClassic(args, optionsOrCb, cb) {
        const command = new RestoreAddressToClassicCommand_1.RestoreAddressToClassicCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    revokeClientVpnIngress(args, optionsOrCb, cb) {
        const command = new RevokeClientVpnIngressCommand_1.RevokeClientVpnIngressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    revokeSecurityGroupEgress(args, optionsOrCb, cb) {
        const command = new RevokeSecurityGroupEgressCommand_1.RevokeSecurityGroupEgressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    revokeSecurityGroupIngress(args, optionsOrCb, cb) {
        const command = new RevokeSecurityGroupIngressCommand_1.RevokeSecurityGroupIngressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    runInstances(args, optionsOrCb, cb) {
        const command = new RunInstancesCommand_1.RunInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    runScheduledInstances(args, optionsOrCb, cb) {
        const command = new RunScheduledInstancesCommand_1.RunScheduledInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    searchLocalGatewayRoutes(args, optionsOrCb, cb) {
        const command = new SearchLocalGatewayRoutesCommand_1.SearchLocalGatewayRoutesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    searchTransitGatewayMulticastGroups(args, optionsOrCb, cb) {
        const command = new SearchTransitGatewayMulticastGroupsCommand_1.SearchTransitGatewayMulticastGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    searchTransitGatewayRoutes(args, optionsOrCb, cb) {
        const command = new SearchTransitGatewayRoutesCommand_1.SearchTransitGatewayRoutesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    sendDiagnosticInterrupt(args, optionsOrCb, cb) {
        const command = new SendDiagnosticInterruptCommand_1.SendDiagnosticInterruptCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startInstances(args, optionsOrCb, cb) {
        const command = new StartInstancesCommand_1.StartInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startVpcEndpointServicePrivateDnsVerification(args, optionsOrCb, cb) {
        const command = new StartVpcEndpointServicePrivateDnsVerificationCommand_1.StartVpcEndpointServicePrivateDnsVerificationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopInstances(args, optionsOrCb, cb) {
        const command = new StopInstancesCommand_1.StopInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    terminateClientVpnConnections(args, optionsOrCb, cb) {
        const command = new TerminateClientVpnConnectionsCommand_1.TerminateClientVpnConnectionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    terminateInstances(args, optionsOrCb, cb) {
        const command = new TerminateInstancesCommand_1.TerminateInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    unassignIpv6Addresses(args, optionsOrCb, cb) {
        const command = new UnassignIpv6AddressesCommand_1.UnassignIpv6AddressesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    unassignPrivateIpAddresses(args, optionsOrCb, cb) {
        const command = new UnassignPrivateIpAddressesCommand_1.UnassignPrivateIpAddressesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    unmonitorInstances(args, optionsOrCb, cb) {
        const command = new UnmonitorInstancesCommand_1.UnmonitorInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateSecurityGroupRuleDescriptionsEgress(args, optionsOrCb, cb) {
        const command = new UpdateSecurityGroupRuleDescriptionsEgressCommand_1.UpdateSecurityGroupRuleDescriptionsEgressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateSecurityGroupRuleDescriptionsIngress(args, optionsOrCb, cb) {
        const command = new UpdateSecurityGroupRuleDescriptionsIngressCommand_1.UpdateSecurityGroupRuleDescriptionsIngressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    withdrawByoipCidr(args, optionsOrCb, cb) {
        const command = new WithdrawByoipCidrCommand_1.WithdrawByoipCidrCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.EC2 = EC2;
//# sourceMappingURL=EC2.js.map