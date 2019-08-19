import { EC2Client } from "./EC2Client";
import { AcceptReservedInstancesExchangeQuoteInput } from "./types/AcceptReservedInstancesExchangeQuoteInput";
import { AcceptReservedInstancesExchangeQuoteOutput } from "./types/AcceptReservedInstancesExchangeQuoteOutput";
import { AcceptTransitGatewayVpcAttachmentInput } from "./types/AcceptTransitGatewayVpcAttachmentInput";
import { AcceptTransitGatewayVpcAttachmentOutput } from "./types/AcceptTransitGatewayVpcAttachmentOutput";
import { AcceptVpcEndpointConnectionsInput } from "./types/AcceptVpcEndpointConnectionsInput";
import { AcceptVpcEndpointConnectionsOutput } from "./types/AcceptVpcEndpointConnectionsOutput";
import { AcceptVpcPeeringConnectionInput } from "./types/AcceptVpcPeeringConnectionInput";
import { AcceptVpcPeeringConnectionOutput } from "./types/AcceptVpcPeeringConnectionOutput";
import { AdvertiseByoipCidrInput } from "./types/AdvertiseByoipCidrInput";
import { AdvertiseByoipCidrOutput } from "./types/AdvertiseByoipCidrOutput";
import { AllocateAddressInput } from "./types/AllocateAddressInput";
import { AllocateAddressOutput } from "./types/AllocateAddressOutput";
import { AllocateHostsInput } from "./types/AllocateHostsInput";
import { AllocateHostsOutput } from "./types/AllocateHostsOutput";
import { ApplySecurityGroupsToClientVpnTargetNetworkInput } from "./types/ApplySecurityGroupsToClientVpnTargetNetworkInput";
import { ApplySecurityGroupsToClientVpnTargetNetworkOutput } from "./types/ApplySecurityGroupsToClientVpnTargetNetworkOutput";
import { AssignIpv6AddressesInput } from "./types/AssignIpv6AddressesInput";
import { AssignIpv6AddressesOutput } from "./types/AssignIpv6AddressesOutput";
import { AssignPrivateIpAddressesInput } from "./types/AssignPrivateIpAddressesInput";
import { AssignPrivateIpAddressesOutput } from "./types/AssignPrivateIpAddressesOutput";
import { AssociateAddressInput } from "./types/AssociateAddressInput";
import { AssociateAddressOutput } from "./types/AssociateAddressOutput";
import { AssociateClientVpnTargetNetworkInput } from "./types/AssociateClientVpnTargetNetworkInput";
import { AssociateClientVpnTargetNetworkOutput } from "./types/AssociateClientVpnTargetNetworkOutput";
import { AssociateDhcpOptionsInput } from "./types/AssociateDhcpOptionsInput";
import { AssociateDhcpOptionsOutput } from "./types/AssociateDhcpOptionsOutput";
import { AssociateIamInstanceProfileInput } from "./types/AssociateIamInstanceProfileInput";
import { AssociateIamInstanceProfileOutput } from "./types/AssociateIamInstanceProfileOutput";
import { AssociateRouteTableInput } from "./types/AssociateRouteTableInput";
import { AssociateRouteTableOutput } from "./types/AssociateRouteTableOutput";
import { AssociateSubnetCidrBlockInput } from "./types/AssociateSubnetCidrBlockInput";
import { AssociateSubnetCidrBlockOutput } from "./types/AssociateSubnetCidrBlockOutput";
import { AssociateTransitGatewayRouteTableInput } from "./types/AssociateTransitGatewayRouteTableInput";
import { AssociateTransitGatewayRouteTableOutput } from "./types/AssociateTransitGatewayRouteTableOutput";
import { AssociateVpcCidrBlockInput } from "./types/AssociateVpcCidrBlockInput";
import { AssociateVpcCidrBlockOutput } from "./types/AssociateVpcCidrBlockOutput";
import { AttachClassicLinkVpcInput } from "./types/AttachClassicLinkVpcInput";
import { AttachClassicLinkVpcOutput } from "./types/AttachClassicLinkVpcOutput";
import { AttachInternetGatewayInput } from "./types/AttachInternetGatewayInput";
import { AttachInternetGatewayOutput } from "./types/AttachInternetGatewayOutput";
import { AttachNetworkInterfaceInput } from "./types/AttachNetworkInterfaceInput";
import { AttachNetworkInterfaceOutput } from "./types/AttachNetworkInterfaceOutput";
import { AttachVolumeInput } from "./types/AttachVolumeInput";
import { AttachVolumeOutput } from "./types/AttachVolumeOutput";
import { AttachVpnGatewayInput } from "./types/AttachVpnGatewayInput";
import { AttachVpnGatewayOutput } from "./types/AttachVpnGatewayOutput";
import { AuthorizeClientVpnIngressInput } from "./types/AuthorizeClientVpnIngressInput";
import { AuthorizeClientVpnIngressOutput } from "./types/AuthorizeClientVpnIngressOutput";
import { AuthorizeSecurityGroupEgressInput } from "./types/AuthorizeSecurityGroupEgressInput";
import { AuthorizeSecurityGroupEgressOutput } from "./types/AuthorizeSecurityGroupEgressOutput";
import { AuthorizeSecurityGroupIngressInput } from "./types/AuthorizeSecurityGroupIngressInput";
import { AuthorizeSecurityGroupIngressOutput } from "./types/AuthorizeSecurityGroupIngressOutput";
import { BundleInstanceInput } from "./types/BundleInstanceInput";
import { BundleInstanceOutput } from "./types/BundleInstanceOutput";
import { CancelBundleTaskInput } from "./types/CancelBundleTaskInput";
import { CancelBundleTaskOutput } from "./types/CancelBundleTaskOutput";
import { CancelCapacityReservationInput } from "./types/CancelCapacityReservationInput";
import { CancelCapacityReservationOutput } from "./types/CancelCapacityReservationOutput";
import { CancelConversionTaskInput } from "./types/CancelConversionTaskInput";
import { CancelConversionTaskOutput } from "./types/CancelConversionTaskOutput";
import { CancelExportTaskInput } from "./types/CancelExportTaskInput";
import { CancelExportTaskOutput } from "./types/CancelExportTaskOutput";
import { CancelImportTaskInput } from "./types/CancelImportTaskInput";
import { CancelImportTaskOutput } from "./types/CancelImportTaskOutput";
import { CancelReservedInstancesListingInput } from "./types/CancelReservedInstancesListingInput";
import { CancelReservedInstancesListingOutput } from "./types/CancelReservedInstancesListingOutput";
import { CancelSpotFleetRequestsInput } from "./types/CancelSpotFleetRequestsInput";
import { CancelSpotFleetRequestsOutput } from "./types/CancelSpotFleetRequestsOutput";
import { CancelSpotInstanceRequestsInput } from "./types/CancelSpotInstanceRequestsInput";
import { CancelSpotInstanceRequestsOutput } from "./types/CancelSpotInstanceRequestsOutput";
import { ConfirmProductInstanceInput } from "./types/ConfirmProductInstanceInput";
import { ConfirmProductInstanceOutput } from "./types/ConfirmProductInstanceOutput";
import { CopyFpgaImageInput } from "./types/CopyFpgaImageInput";
import { CopyFpgaImageOutput } from "./types/CopyFpgaImageOutput";
import { CopyImageInput } from "./types/CopyImageInput";
import { CopyImageOutput } from "./types/CopyImageOutput";
import { CopySnapshotInput } from "./types/CopySnapshotInput";
import { CopySnapshotOutput } from "./types/CopySnapshotOutput";
import { CreateCapacityReservationInput } from "./types/CreateCapacityReservationInput";
import { CreateCapacityReservationOutput } from "./types/CreateCapacityReservationOutput";
import { CreateClientVpnEndpointInput } from "./types/CreateClientVpnEndpointInput";
import { CreateClientVpnEndpointOutput } from "./types/CreateClientVpnEndpointOutput";
import { CreateClientVpnRouteInput } from "./types/CreateClientVpnRouteInput";
import { CreateClientVpnRouteOutput } from "./types/CreateClientVpnRouteOutput";
import { CreateCustomerGatewayInput } from "./types/CreateCustomerGatewayInput";
import { CreateCustomerGatewayOutput } from "./types/CreateCustomerGatewayOutput";
import { CreateDefaultSubnetInput } from "./types/CreateDefaultSubnetInput";
import { CreateDefaultSubnetOutput } from "./types/CreateDefaultSubnetOutput";
import { CreateDefaultVpcInput } from "./types/CreateDefaultVpcInput";
import { CreateDefaultVpcOutput } from "./types/CreateDefaultVpcOutput";
import { CreateDhcpOptionsInput } from "./types/CreateDhcpOptionsInput";
import { CreateDhcpOptionsOutput } from "./types/CreateDhcpOptionsOutput";
import { CreateEgressOnlyInternetGatewayInput } from "./types/CreateEgressOnlyInternetGatewayInput";
import { CreateEgressOnlyInternetGatewayOutput } from "./types/CreateEgressOnlyInternetGatewayOutput";
import { CreateFleetInput } from "./types/CreateFleetInput";
import { CreateFleetOutput } from "./types/CreateFleetOutput";
import { CreateFlowLogsInput } from "./types/CreateFlowLogsInput";
import { CreateFlowLogsOutput } from "./types/CreateFlowLogsOutput";
import { CreateFpgaImageInput } from "./types/CreateFpgaImageInput";
import { CreateFpgaImageOutput } from "./types/CreateFpgaImageOutput";
import { CreateImageInput } from "./types/CreateImageInput";
import { CreateImageOutput } from "./types/CreateImageOutput";
import { CreateInstanceExportTaskInput } from "./types/CreateInstanceExportTaskInput";
import { CreateInstanceExportTaskOutput } from "./types/CreateInstanceExportTaskOutput";
import { CreateInternetGatewayInput } from "./types/CreateInternetGatewayInput";
import { CreateInternetGatewayOutput } from "./types/CreateInternetGatewayOutput";
import { CreateKeyPairInput } from "./types/CreateKeyPairInput";
import { CreateKeyPairOutput } from "./types/CreateKeyPairOutput";
import { CreateLaunchTemplateInput } from "./types/CreateLaunchTemplateInput";
import { CreateLaunchTemplateOutput } from "./types/CreateLaunchTemplateOutput";
import { CreateLaunchTemplateVersionInput } from "./types/CreateLaunchTemplateVersionInput";
import { CreateLaunchTemplateVersionOutput } from "./types/CreateLaunchTemplateVersionOutput";
import { CreateNatGatewayInput } from "./types/CreateNatGatewayInput";
import { CreateNatGatewayOutput } from "./types/CreateNatGatewayOutput";
import { CreateNetworkAclEntryInput } from "./types/CreateNetworkAclEntryInput";
import { CreateNetworkAclEntryOutput } from "./types/CreateNetworkAclEntryOutput";
import { CreateNetworkAclInput } from "./types/CreateNetworkAclInput";
import { CreateNetworkAclOutput } from "./types/CreateNetworkAclOutput";
import { CreateNetworkInterfaceInput } from "./types/CreateNetworkInterfaceInput";
import { CreateNetworkInterfaceOutput } from "./types/CreateNetworkInterfaceOutput";
import { CreateNetworkInterfacePermissionInput } from "./types/CreateNetworkInterfacePermissionInput";
import { CreateNetworkInterfacePermissionOutput } from "./types/CreateNetworkInterfacePermissionOutput";
import { CreatePlacementGroupInput } from "./types/CreatePlacementGroupInput";
import { CreatePlacementGroupOutput } from "./types/CreatePlacementGroupOutput";
import { CreateReservedInstancesListingInput } from "./types/CreateReservedInstancesListingInput";
import { CreateReservedInstancesListingOutput } from "./types/CreateReservedInstancesListingOutput";
import { CreateRouteInput } from "./types/CreateRouteInput";
import { CreateRouteOutput } from "./types/CreateRouteOutput";
import { CreateRouteTableInput } from "./types/CreateRouteTableInput";
import { CreateRouteTableOutput } from "./types/CreateRouteTableOutput";
import { CreateSecurityGroupInput } from "./types/CreateSecurityGroupInput";
import { CreateSecurityGroupOutput } from "./types/CreateSecurityGroupOutput";
import { CreateSnapshotInput } from "./types/CreateSnapshotInput";
import { CreateSnapshotOutput } from "./types/CreateSnapshotOutput";
import { CreateSnapshotsInput } from "./types/CreateSnapshotsInput";
import { CreateSnapshotsOutput } from "./types/CreateSnapshotsOutput";
import { CreateSpotDatafeedSubscriptionInput } from "./types/CreateSpotDatafeedSubscriptionInput";
import { CreateSpotDatafeedSubscriptionOutput } from "./types/CreateSpotDatafeedSubscriptionOutput";
import { CreateSubnetInput } from "./types/CreateSubnetInput";
import { CreateSubnetOutput } from "./types/CreateSubnetOutput";
import { CreateTagsInput } from "./types/CreateTagsInput";
import { CreateTagsOutput } from "./types/CreateTagsOutput";
import { CreateTrafficMirrorFilterInput } from "./types/CreateTrafficMirrorFilterInput";
import { CreateTrafficMirrorFilterOutput } from "./types/CreateTrafficMirrorFilterOutput";
import { CreateTrafficMirrorFilterRuleInput } from "./types/CreateTrafficMirrorFilterRuleInput";
import { CreateTrafficMirrorFilterRuleOutput } from "./types/CreateTrafficMirrorFilterRuleOutput";
import { CreateTrafficMirrorSessionInput } from "./types/CreateTrafficMirrorSessionInput";
import { CreateTrafficMirrorSessionOutput } from "./types/CreateTrafficMirrorSessionOutput";
import { CreateTrafficMirrorTargetInput } from "./types/CreateTrafficMirrorTargetInput";
import { CreateTrafficMirrorTargetOutput } from "./types/CreateTrafficMirrorTargetOutput";
import { CreateTransitGatewayInput } from "./types/CreateTransitGatewayInput";
import { CreateTransitGatewayOutput } from "./types/CreateTransitGatewayOutput";
import { CreateTransitGatewayRouteInput } from "./types/CreateTransitGatewayRouteInput";
import { CreateTransitGatewayRouteOutput } from "./types/CreateTransitGatewayRouteOutput";
import { CreateTransitGatewayRouteTableInput } from "./types/CreateTransitGatewayRouteTableInput";
import { CreateTransitGatewayRouteTableOutput } from "./types/CreateTransitGatewayRouteTableOutput";
import { CreateTransitGatewayVpcAttachmentInput } from "./types/CreateTransitGatewayVpcAttachmentInput";
import { CreateTransitGatewayVpcAttachmentOutput } from "./types/CreateTransitGatewayVpcAttachmentOutput";
import { CreateVolumeInput } from "./types/CreateVolumeInput";
import { CreateVolumeOutput } from "./types/CreateVolumeOutput";
import { CreateVpcEndpointConnectionNotificationInput } from "./types/CreateVpcEndpointConnectionNotificationInput";
import { CreateVpcEndpointConnectionNotificationOutput } from "./types/CreateVpcEndpointConnectionNotificationOutput";
import { CreateVpcEndpointInput } from "./types/CreateVpcEndpointInput";
import { CreateVpcEndpointOutput } from "./types/CreateVpcEndpointOutput";
import { CreateVpcEndpointServiceConfigurationInput } from "./types/CreateVpcEndpointServiceConfigurationInput";
import { CreateVpcEndpointServiceConfigurationOutput } from "./types/CreateVpcEndpointServiceConfigurationOutput";
import { CreateVpcInput } from "./types/CreateVpcInput";
import { CreateVpcOutput } from "./types/CreateVpcOutput";
import { CreateVpcPeeringConnectionInput } from "./types/CreateVpcPeeringConnectionInput";
import { CreateVpcPeeringConnectionOutput } from "./types/CreateVpcPeeringConnectionOutput";
import { CreateVpnConnectionInput } from "./types/CreateVpnConnectionInput";
import { CreateVpnConnectionOutput } from "./types/CreateVpnConnectionOutput";
import { CreateVpnConnectionRouteInput } from "./types/CreateVpnConnectionRouteInput";
import { CreateVpnConnectionRouteOutput } from "./types/CreateVpnConnectionRouteOutput";
import { CreateVpnGatewayInput } from "./types/CreateVpnGatewayInput";
import { CreateVpnGatewayOutput } from "./types/CreateVpnGatewayOutput";
import { DeleteClientVpnEndpointInput } from "./types/DeleteClientVpnEndpointInput";
import { DeleteClientVpnEndpointOutput } from "./types/DeleteClientVpnEndpointOutput";
import { DeleteClientVpnRouteInput } from "./types/DeleteClientVpnRouteInput";
import { DeleteClientVpnRouteOutput } from "./types/DeleteClientVpnRouteOutput";
import { DeleteCustomerGatewayInput } from "./types/DeleteCustomerGatewayInput";
import { DeleteCustomerGatewayOutput } from "./types/DeleteCustomerGatewayOutput";
import { DeleteDhcpOptionsInput } from "./types/DeleteDhcpOptionsInput";
import { DeleteDhcpOptionsOutput } from "./types/DeleteDhcpOptionsOutput";
import { DeleteEgressOnlyInternetGatewayInput } from "./types/DeleteEgressOnlyInternetGatewayInput";
import { DeleteEgressOnlyInternetGatewayOutput } from "./types/DeleteEgressOnlyInternetGatewayOutput";
import { DeleteFleetsInput } from "./types/DeleteFleetsInput";
import { DeleteFleetsOutput } from "./types/DeleteFleetsOutput";
import { DeleteFlowLogsInput } from "./types/DeleteFlowLogsInput";
import { DeleteFlowLogsOutput } from "./types/DeleteFlowLogsOutput";
import { DeleteFpgaImageInput } from "./types/DeleteFpgaImageInput";
import { DeleteFpgaImageOutput } from "./types/DeleteFpgaImageOutput";
import { DeleteInternetGatewayInput } from "./types/DeleteInternetGatewayInput";
import { DeleteInternetGatewayOutput } from "./types/DeleteInternetGatewayOutput";
import { DeleteKeyPairInput } from "./types/DeleteKeyPairInput";
import { DeleteKeyPairOutput } from "./types/DeleteKeyPairOutput";
import { DeleteLaunchTemplateInput } from "./types/DeleteLaunchTemplateInput";
import { DeleteLaunchTemplateOutput } from "./types/DeleteLaunchTemplateOutput";
import { DeleteLaunchTemplateVersionsInput } from "./types/DeleteLaunchTemplateVersionsInput";
import { DeleteLaunchTemplateVersionsOutput } from "./types/DeleteLaunchTemplateVersionsOutput";
import { DeleteNatGatewayInput } from "./types/DeleteNatGatewayInput";
import { DeleteNatGatewayOutput } from "./types/DeleteNatGatewayOutput";
import { DeleteNetworkAclEntryInput } from "./types/DeleteNetworkAclEntryInput";
import { DeleteNetworkAclEntryOutput } from "./types/DeleteNetworkAclEntryOutput";
import { DeleteNetworkAclInput } from "./types/DeleteNetworkAclInput";
import { DeleteNetworkAclOutput } from "./types/DeleteNetworkAclOutput";
import { DeleteNetworkInterfaceInput } from "./types/DeleteNetworkInterfaceInput";
import { DeleteNetworkInterfaceOutput } from "./types/DeleteNetworkInterfaceOutput";
import { DeleteNetworkInterfacePermissionInput } from "./types/DeleteNetworkInterfacePermissionInput";
import { DeleteNetworkInterfacePermissionOutput } from "./types/DeleteNetworkInterfacePermissionOutput";
import { DeletePlacementGroupInput } from "./types/DeletePlacementGroupInput";
import { DeletePlacementGroupOutput } from "./types/DeletePlacementGroupOutput";
import { DeleteRouteInput } from "./types/DeleteRouteInput";
import { DeleteRouteOutput } from "./types/DeleteRouteOutput";
import { DeleteRouteTableInput } from "./types/DeleteRouteTableInput";
import { DeleteRouteTableOutput } from "./types/DeleteRouteTableOutput";
import { DeleteSecurityGroupInput } from "./types/DeleteSecurityGroupInput";
import { DeleteSecurityGroupOutput } from "./types/DeleteSecurityGroupOutput";
import { DeleteSnapshotInput } from "./types/DeleteSnapshotInput";
import { DeleteSnapshotOutput } from "./types/DeleteSnapshotOutput";
import { DeleteSpotDatafeedSubscriptionInput } from "./types/DeleteSpotDatafeedSubscriptionInput";
import { DeleteSpotDatafeedSubscriptionOutput } from "./types/DeleteSpotDatafeedSubscriptionOutput";
import { DeleteSubnetInput } from "./types/DeleteSubnetInput";
import { DeleteSubnetOutput } from "./types/DeleteSubnetOutput";
import { DeleteTagsInput } from "./types/DeleteTagsInput";
import { DeleteTagsOutput } from "./types/DeleteTagsOutput";
import { DeleteTrafficMirrorFilterInput } from "./types/DeleteTrafficMirrorFilterInput";
import { DeleteTrafficMirrorFilterOutput } from "./types/DeleteTrafficMirrorFilterOutput";
import { DeleteTrafficMirrorFilterRuleInput } from "./types/DeleteTrafficMirrorFilterRuleInput";
import { DeleteTrafficMirrorFilterRuleOutput } from "./types/DeleteTrafficMirrorFilterRuleOutput";
import { DeleteTrafficMirrorSessionInput } from "./types/DeleteTrafficMirrorSessionInput";
import { DeleteTrafficMirrorSessionOutput } from "./types/DeleteTrafficMirrorSessionOutput";
import { DeleteTrafficMirrorTargetInput } from "./types/DeleteTrafficMirrorTargetInput";
import { DeleteTrafficMirrorTargetOutput } from "./types/DeleteTrafficMirrorTargetOutput";
import { DeleteTransitGatewayInput } from "./types/DeleteTransitGatewayInput";
import { DeleteTransitGatewayOutput } from "./types/DeleteTransitGatewayOutput";
import { DeleteTransitGatewayRouteInput } from "./types/DeleteTransitGatewayRouteInput";
import { DeleteTransitGatewayRouteOutput } from "./types/DeleteTransitGatewayRouteOutput";
import { DeleteTransitGatewayRouteTableInput } from "./types/DeleteTransitGatewayRouteTableInput";
import { DeleteTransitGatewayRouteTableOutput } from "./types/DeleteTransitGatewayRouteTableOutput";
import { DeleteTransitGatewayVpcAttachmentInput } from "./types/DeleteTransitGatewayVpcAttachmentInput";
import { DeleteTransitGatewayVpcAttachmentOutput } from "./types/DeleteTransitGatewayVpcAttachmentOutput";
import { DeleteVolumeInput } from "./types/DeleteVolumeInput";
import { DeleteVolumeOutput } from "./types/DeleteVolumeOutput";
import { DeleteVpcEndpointConnectionNotificationsInput } from "./types/DeleteVpcEndpointConnectionNotificationsInput";
import { DeleteVpcEndpointConnectionNotificationsOutput } from "./types/DeleteVpcEndpointConnectionNotificationsOutput";
import { DeleteVpcEndpointServiceConfigurationsInput } from "./types/DeleteVpcEndpointServiceConfigurationsInput";
import { DeleteVpcEndpointServiceConfigurationsOutput } from "./types/DeleteVpcEndpointServiceConfigurationsOutput";
import { DeleteVpcEndpointsInput } from "./types/DeleteVpcEndpointsInput";
import { DeleteVpcEndpointsOutput } from "./types/DeleteVpcEndpointsOutput";
import { DeleteVpcInput } from "./types/DeleteVpcInput";
import { DeleteVpcOutput } from "./types/DeleteVpcOutput";
import { DeleteVpcPeeringConnectionInput } from "./types/DeleteVpcPeeringConnectionInput";
import { DeleteVpcPeeringConnectionOutput } from "./types/DeleteVpcPeeringConnectionOutput";
import { DeleteVpnConnectionInput } from "./types/DeleteVpnConnectionInput";
import { DeleteVpnConnectionOutput } from "./types/DeleteVpnConnectionOutput";
import { DeleteVpnConnectionRouteInput } from "./types/DeleteVpnConnectionRouteInput";
import { DeleteVpnConnectionRouteOutput } from "./types/DeleteVpnConnectionRouteOutput";
import { DeleteVpnGatewayInput } from "./types/DeleteVpnGatewayInput";
import { DeleteVpnGatewayOutput } from "./types/DeleteVpnGatewayOutput";
import { DeprovisionByoipCidrInput } from "./types/DeprovisionByoipCidrInput";
import { DeprovisionByoipCidrOutput } from "./types/DeprovisionByoipCidrOutput";
import { DeregisterImageInput } from "./types/DeregisterImageInput";
import { DeregisterImageOutput } from "./types/DeregisterImageOutput";
import { DescribeAccountAttributesInput } from "./types/DescribeAccountAttributesInput";
import { DescribeAccountAttributesOutput } from "./types/DescribeAccountAttributesOutput";
import { DescribeAddressesInput } from "./types/DescribeAddressesInput";
import { DescribeAddressesOutput } from "./types/DescribeAddressesOutput";
import { DescribeAggregateIdFormatInput } from "./types/DescribeAggregateIdFormatInput";
import { DescribeAggregateIdFormatOutput } from "./types/DescribeAggregateIdFormatOutput";
import { DescribeAvailabilityZonesInput } from "./types/DescribeAvailabilityZonesInput";
import { DescribeAvailabilityZonesOutput } from "./types/DescribeAvailabilityZonesOutput";
import { DescribeBundleTasksInput } from "./types/DescribeBundleTasksInput";
import { DescribeBundleTasksOutput } from "./types/DescribeBundleTasksOutput";
import { DescribeByoipCidrsInput } from "./types/DescribeByoipCidrsInput";
import { DescribeByoipCidrsOutput } from "./types/DescribeByoipCidrsOutput";
import { DescribeCapacityReservationsInput } from "./types/DescribeCapacityReservationsInput";
import { DescribeCapacityReservationsOutput } from "./types/DescribeCapacityReservationsOutput";
import { DescribeClassicLinkInstancesInput } from "./types/DescribeClassicLinkInstancesInput";
import { DescribeClassicLinkInstancesOutput } from "./types/DescribeClassicLinkInstancesOutput";
import { DescribeClientVpnAuthorizationRulesInput } from "./types/DescribeClientVpnAuthorizationRulesInput";
import { DescribeClientVpnAuthorizationRulesOutput } from "./types/DescribeClientVpnAuthorizationRulesOutput";
import { DescribeClientVpnConnectionsInput } from "./types/DescribeClientVpnConnectionsInput";
import { DescribeClientVpnConnectionsOutput } from "./types/DescribeClientVpnConnectionsOutput";
import { DescribeClientVpnEndpointsInput } from "./types/DescribeClientVpnEndpointsInput";
import { DescribeClientVpnEndpointsOutput } from "./types/DescribeClientVpnEndpointsOutput";
import { DescribeClientVpnRoutesInput } from "./types/DescribeClientVpnRoutesInput";
import { DescribeClientVpnRoutesOutput } from "./types/DescribeClientVpnRoutesOutput";
import { DescribeClientVpnTargetNetworksInput } from "./types/DescribeClientVpnTargetNetworksInput";
import { DescribeClientVpnTargetNetworksOutput } from "./types/DescribeClientVpnTargetNetworksOutput";
import { DescribeConversionTasksInput } from "./types/DescribeConversionTasksInput";
import { DescribeConversionTasksOutput } from "./types/DescribeConversionTasksOutput";
import { DescribeCustomerGatewaysInput } from "./types/DescribeCustomerGatewaysInput";
import { DescribeCustomerGatewaysOutput } from "./types/DescribeCustomerGatewaysOutput";
import { DescribeDhcpOptionsInput } from "./types/DescribeDhcpOptionsInput";
import { DescribeDhcpOptionsOutput } from "./types/DescribeDhcpOptionsOutput";
import { DescribeEgressOnlyInternetGatewaysInput } from "./types/DescribeEgressOnlyInternetGatewaysInput";
import { DescribeEgressOnlyInternetGatewaysOutput } from "./types/DescribeEgressOnlyInternetGatewaysOutput";
import { DescribeElasticGpusInput } from "./types/DescribeElasticGpusInput";
import { DescribeElasticGpusOutput } from "./types/DescribeElasticGpusOutput";
import { DescribeExportTasksInput } from "./types/DescribeExportTasksInput";
import { DescribeExportTasksOutput } from "./types/DescribeExportTasksOutput";
import { DescribeFleetHistoryInput } from "./types/DescribeFleetHistoryInput";
import { DescribeFleetHistoryOutput } from "./types/DescribeFleetHistoryOutput";
import { DescribeFleetInstancesInput } from "./types/DescribeFleetInstancesInput";
import { DescribeFleetInstancesOutput } from "./types/DescribeFleetInstancesOutput";
import { DescribeFleetsInput } from "./types/DescribeFleetsInput";
import { DescribeFleetsOutput } from "./types/DescribeFleetsOutput";
import { DescribeFlowLogsInput } from "./types/DescribeFlowLogsInput";
import { DescribeFlowLogsOutput } from "./types/DescribeFlowLogsOutput";
import { DescribeFpgaImageAttributeInput } from "./types/DescribeFpgaImageAttributeInput";
import { DescribeFpgaImageAttributeOutput } from "./types/DescribeFpgaImageAttributeOutput";
import { DescribeFpgaImagesInput } from "./types/DescribeFpgaImagesInput";
import { DescribeFpgaImagesOutput } from "./types/DescribeFpgaImagesOutput";
import { DescribeHostReservationOfferingsInput } from "./types/DescribeHostReservationOfferingsInput";
import { DescribeHostReservationOfferingsOutput } from "./types/DescribeHostReservationOfferingsOutput";
import { DescribeHostReservationsInput } from "./types/DescribeHostReservationsInput";
import { DescribeHostReservationsOutput } from "./types/DescribeHostReservationsOutput";
import { DescribeHostsInput } from "./types/DescribeHostsInput";
import { DescribeHostsOutput } from "./types/DescribeHostsOutput";
import { DescribeIamInstanceProfileAssociationsInput } from "./types/DescribeIamInstanceProfileAssociationsInput";
import { DescribeIamInstanceProfileAssociationsOutput } from "./types/DescribeIamInstanceProfileAssociationsOutput";
import { DescribeIdFormatInput } from "./types/DescribeIdFormatInput";
import { DescribeIdFormatOutput } from "./types/DescribeIdFormatOutput";
import { DescribeIdentityIdFormatInput } from "./types/DescribeIdentityIdFormatInput";
import { DescribeIdentityIdFormatOutput } from "./types/DescribeIdentityIdFormatOutput";
import { DescribeImageAttributeInput } from "./types/DescribeImageAttributeInput";
import { DescribeImageAttributeOutput } from "./types/DescribeImageAttributeOutput";
import { DescribeImagesInput } from "./types/DescribeImagesInput";
import { DescribeImagesOutput } from "./types/DescribeImagesOutput";
import { DescribeImportImageTasksInput } from "./types/DescribeImportImageTasksInput";
import { DescribeImportImageTasksOutput } from "./types/DescribeImportImageTasksOutput";
import { DescribeImportSnapshotTasksInput } from "./types/DescribeImportSnapshotTasksInput";
import { DescribeImportSnapshotTasksOutput } from "./types/DescribeImportSnapshotTasksOutput";
import { DescribeInstanceAttributeInput } from "./types/DescribeInstanceAttributeInput";
import { DescribeInstanceAttributeOutput } from "./types/DescribeInstanceAttributeOutput";
import { DescribeInstanceCreditSpecificationsInput } from "./types/DescribeInstanceCreditSpecificationsInput";
import { DescribeInstanceCreditSpecificationsOutput } from "./types/DescribeInstanceCreditSpecificationsOutput";
import { DescribeInstanceStatusInput } from "./types/DescribeInstanceStatusInput";
import { DescribeInstanceStatusOutput } from "./types/DescribeInstanceStatusOutput";
import { DescribeInstancesInput } from "./types/DescribeInstancesInput";
import { DescribeInstancesOutput } from "./types/DescribeInstancesOutput";
import { DescribeInternetGatewaysInput } from "./types/DescribeInternetGatewaysInput";
import { DescribeInternetGatewaysOutput } from "./types/DescribeInternetGatewaysOutput";
import { DescribeKeyPairsInput } from "./types/DescribeKeyPairsInput";
import { DescribeKeyPairsOutput } from "./types/DescribeKeyPairsOutput";
import { DescribeLaunchTemplateVersionsInput } from "./types/DescribeLaunchTemplateVersionsInput";
import { DescribeLaunchTemplateVersionsOutput } from "./types/DescribeLaunchTemplateVersionsOutput";
import { DescribeLaunchTemplatesInput } from "./types/DescribeLaunchTemplatesInput";
import { DescribeLaunchTemplatesOutput } from "./types/DescribeLaunchTemplatesOutput";
import { DescribeMovingAddressesInput } from "./types/DescribeMovingAddressesInput";
import { DescribeMovingAddressesOutput } from "./types/DescribeMovingAddressesOutput";
import { DescribeNatGatewaysInput } from "./types/DescribeNatGatewaysInput";
import { DescribeNatGatewaysOutput } from "./types/DescribeNatGatewaysOutput";
import { DescribeNetworkAclsInput } from "./types/DescribeNetworkAclsInput";
import { DescribeNetworkAclsOutput } from "./types/DescribeNetworkAclsOutput";
import { DescribeNetworkInterfaceAttributeInput } from "./types/DescribeNetworkInterfaceAttributeInput";
import { DescribeNetworkInterfaceAttributeOutput } from "./types/DescribeNetworkInterfaceAttributeOutput";
import { DescribeNetworkInterfacePermissionsInput } from "./types/DescribeNetworkInterfacePermissionsInput";
import { DescribeNetworkInterfacePermissionsOutput } from "./types/DescribeNetworkInterfacePermissionsOutput";
import { DescribeNetworkInterfacesInput } from "./types/DescribeNetworkInterfacesInput";
import { DescribeNetworkInterfacesOutput } from "./types/DescribeNetworkInterfacesOutput";
import { DescribePlacementGroupsInput } from "./types/DescribePlacementGroupsInput";
import { DescribePlacementGroupsOutput } from "./types/DescribePlacementGroupsOutput";
import { DescribePrefixListsInput } from "./types/DescribePrefixListsInput";
import { DescribePrefixListsOutput } from "./types/DescribePrefixListsOutput";
import { DescribePrincipalIdFormatInput } from "./types/DescribePrincipalIdFormatInput";
import { DescribePrincipalIdFormatOutput } from "./types/DescribePrincipalIdFormatOutput";
import { DescribePublicIpv4PoolsInput } from "./types/DescribePublicIpv4PoolsInput";
import { DescribePublicIpv4PoolsOutput } from "./types/DescribePublicIpv4PoolsOutput";
import { DescribeRegionsInput } from "./types/DescribeRegionsInput";
import { DescribeRegionsOutput } from "./types/DescribeRegionsOutput";
import { DescribeReservedInstancesInput } from "./types/DescribeReservedInstancesInput";
import { DescribeReservedInstancesListingsInput } from "./types/DescribeReservedInstancesListingsInput";
import { DescribeReservedInstancesListingsOutput } from "./types/DescribeReservedInstancesListingsOutput";
import { DescribeReservedInstancesModificationsInput } from "./types/DescribeReservedInstancesModificationsInput";
import { DescribeReservedInstancesModificationsOutput } from "./types/DescribeReservedInstancesModificationsOutput";
import { DescribeReservedInstancesOfferingsInput } from "./types/DescribeReservedInstancesOfferingsInput";
import { DescribeReservedInstancesOfferingsOutput } from "./types/DescribeReservedInstancesOfferingsOutput";
import { DescribeReservedInstancesOutput } from "./types/DescribeReservedInstancesOutput";
import { DescribeRouteTablesInput } from "./types/DescribeRouteTablesInput";
import { DescribeRouteTablesOutput } from "./types/DescribeRouteTablesOutput";
import { DescribeScheduledInstanceAvailabilityInput } from "./types/DescribeScheduledInstanceAvailabilityInput";
import { DescribeScheduledInstanceAvailabilityOutput } from "./types/DescribeScheduledInstanceAvailabilityOutput";
import { DescribeScheduledInstancesInput } from "./types/DescribeScheduledInstancesInput";
import { DescribeScheduledInstancesOutput } from "./types/DescribeScheduledInstancesOutput";
import { DescribeSecurityGroupReferencesInput } from "./types/DescribeSecurityGroupReferencesInput";
import { DescribeSecurityGroupReferencesOutput } from "./types/DescribeSecurityGroupReferencesOutput";
import { DescribeSecurityGroupsInput } from "./types/DescribeSecurityGroupsInput";
import { DescribeSecurityGroupsOutput } from "./types/DescribeSecurityGroupsOutput";
import { DescribeSnapshotAttributeInput } from "./types/DescribeSnapshotAttributeInput";
import { DescribeSnapshotAttributeOutput } from "./types/DescribeSnapshotAttributeOutput";
import { DescribeSnapshotsInput } from "./types/DescribeSnapshotsInput";
import { DescribeSnapshotsOutput } from "./types/DescribeSnapshotsOutput";
import { DescribeSpotDatafeedSubscriptionInput } from "./types/DescribeSpotDatafeedSubscriptionInput";
import { DescribeSpotDatafeedSubscriptionOutput } from "./types/DescribeSpotDatafeedSubscriptionOutput";
import { DescribeSpotFleetInstancesInput } from "./types/DescribeSpotFleetInstancesInput";
import { DescribeSpotFleetInstancesOutput } from "./types/DescribeSpotFleetInstancesOutput";
import { DescribeSpotFleetRequestHistoryInput } from "./types/DescribeSpotFleetRequestHistoryInput";
import { DescribeSpotFleetRequestHistoryOutput } from "./types/DescribeSpotFleetRequestHistoryOutput";
import { DescribeSpotFleetRequestsInput } from "./types/DescribeSpotFleetRequestsInput";
import { DescribeSpotFleetRequestsOutput } from "./types/DescribeSpotFleetRequestsOutput";
import { DescribeSpotInstanceRequestsInput } from "./types/DescribeSpotInstanceRequestsInput";
import { DescribeSpotInstanceRequestsOutput } from "./types/DescribeSpotInstanceRequestsOutput";
import { DescribeSpotPriceHistoryInput } from "./types/DescribeSpotPriceHistoryInput";
import { DescribeSpotPriceHistoryOutput } from "./types/DescribeSpotPriceHistoryOutput";
import { DescribeStaleSecurityGroupsInput } from "./types/DescribeStaleSecurityGroupsInput";
import { DescribeStaleSecurityGroupsOutput } from "./types/DescribeStaleSecurityGroupsOutput";
import { DescribeSubnetsInput } from "./types/DescribeSubnetsInput";
import { DescribeSubnetsOutput } from "./types/DescribeSubnetsOutput";
import { DescribeTagsInput } from "./types/DescribeTagsInput";
import { DescribeTagsOutput } from "./types/DescribeTagsOutput";
import { DescribeTrafficMirrorFiltersInput } from "./types/DescribeTrafficMirrorFiltersInput";
import { DescribeTrafficMirrorFiltersOutput } from "./types/DescribeTrafficMirrorFiltersOutput";
import { DescribeTrafficMirrorSessionsInput } from "./types/DescribeTrafficMirrorSessionsInput";
import { DescribeTrafficMirrorSessionsOutput } from "./types/DescribeTrafficMirrorSessionsOutput";
import { DescribeTrafficMirrorTargetsInput } from "./types/DescribeTrafficMirrorTargetsInput";
import { DescribeTrafficMirrorTargetsOutput } from "./types/DescribeTrafficMirrorTargetsOutput";
import { DescribeTransitGatewayAttachmentsInput } from "./types/DescribeTransitGatewayAttachmentsInput";
import { DescribeTransitGatewayAttachmentsOutput } from "./types/DescribeTransitGatewayAttachmentsOutput";
import { DescribeTransitGatewayRouteTablesInput } from "./types/DescribeTransitGatewayRouteTablesInput";
import { DescribeTransitGatewayRouteTablesOutput } from "./types/DescribeTransitGatewayRouteTablesOutput";
import { DescribeTransitGatewayVpcAttachmentsInput } from "./types/DescribeTransitGatewayVpcAttachmentsInput";
import { DescribeTransitGatewayVpcAttachmentsOutput } from "./types/DescribeTransitGatewayVpcAttachmentsOutput";
import { DescribeTransitGatewaysInput } from "./types/DescribeTransitGatewaysInput";
import { DescribeTransitGatewaysOutput } from "./types/DescribeTransitGatewaysOutput";
import { DescribeVolumeAttributeInput } from "./types/DescribeVolumeAttributeInput";
import { DescribeVolumeAttributeOutput } from "./types/DescribeVolumeAttributeOutput";
import { DescribeVolumeStatusInput } from "./types/DescribeVolumeStatusInput";
import { DescribeVolumeStatusOutput } from "./types/DescribeVolumeStatusOutput";
import { DescribeVolumesInput } from "./types/DescribeVolumesInput";
import { DescribeVolumesModificationsInput } from "./types/DescribeVolumesModificationsInput";
import { DescribeVolumesModificationsOutput } from "./types/DescribeVolumesModificationsOutput";
import { DescribeVolumesOutput } from "./types/DescribeVolumesOutput";
import { DescribeVpcAttributeInput } from "./types/DescribeVpcAttributeInput";
import { DescribeVpcAttributeOutput } from "./types/DescribeVpcAttributeOutput";
import { DescribeVpcClassicLinkDnsSupportInput } from "./types/DescribeVpcClassicLinkDnsSupportInput";
import { DescribeVpcClassicLinkDnsSupportOutput } from "./types/DescribeVpcClassicLinkDnsSupportOutput";
import { DescribeVpcClassicLinkInput } from "./types/DescribeVpcClassicLinkInput";
import { DescribeVpcClassicLinkOutput } from "./types/DescribeVpcClassicLinkOutput";
import { DescribeVpcEndpointConnectionNotificationsInput } from "./types/DescribeVpcEndpointConnectionNotificationsInput";
import { DescribeVpcEndpointConnectionNotificationsOutput } from "./types/DescribeVpcEndpointConnectionNotificationsOutput";
import { DescribeVpcEndpointConnectionsInput } from "./types/DescribeVpcEndpointConnectionsInput";
import { DescribeVpcEndpointConnectionsOutput } from "./types/DescribeVpcEndpointConnectionsOutput";
import { DescribeVpcEndpointServiceConfigurationsInput } from "./types/DescribeVpcEndpointServiceConfigurationsInput";
import { DescribeVpcEndpointServiceConfigurationsOutput } from "./types/DescribeVpcEndpointServiceConfigurationsOutput";
import { DescribeVpcEndpointServicePermissionsInput } from "./types/DescribeVpcEndpointServicePermissionsInput";
import { DescribeVpcEndpointServicePermissionsOutput } from "./types/DescribeVpcEndpointServicePermissionsOutput";
import { DescribeVpcEndpointServicesInput } from "./types/DescribeVpcEndpointServicesInput";
import { DescribeVpcEndpointServicesOutput } from "./types/DescribeVpcEndpointServicesOutput";
import { DescribeVpcEndpointsInput } from "./types/DescribeVpcEndpointsInput";
import { DescribeVpcEndpointsOutput } from "./types/DescribeVpcEndpointsOutput";
import { DescribeVpcPeeringConnectionsInput } from "./types/DescribeVpcPeeringConnectionsInput";
import { DescribeVpcPeeringConnectionsOutput } from "./types/DescribeVpcPeeringConnectionsOutput";
import { DescribeVpcsInput } from "./types/DescribeVpcsInput";
import { DescribeVpcsOutput } from "./types/DescribeVpcsOutput";
import { DescribeVpnConnectionsInput } from "./types/DescribeVpnConnectionsInput";
import { DescribeVpnConnectionsOutput } from "./types/DescribeVpnConnectionsOutput";
import { DescribeVpnGatewaysInput } from "./types/DescribeVpnGatewaysInput";
import { DescribeVpnGatewaysOutput } from "./types/DescribeVpnGatewaysOutput";
import { DetachClassicLinkVpcInput } from "./types/DetachClassicLinkVpcInput";
import { DetachClassicLinkVpcOutput } from "./types/DetachClassicLinkVpcOutput";
import { DetachInternetGatewayInput } from "./types/DetachInternetGatewayInput";
import { DetachInternetGatewayOutput } from "./types/DetachInternetGatewayOutput";
import { DetachNetworkInterfaceInput } from "./types/DetachNetworkInterfaceInput";
import { DetachNetworkInterfaceOutput } from "./types/DetachNetworkInterfaceOutput";
import { DetachVolumeInput } from "./types/DetachVolumeInput";
import { DetachVolumeOutput } from "./types/DetachVolumeOutput";
import { DetachVpnGatewayInput } from "./types/DetachVpnGatewayInput";
import { DetachVpnGatewayOutput } from "./types/DetachVpnGatewayOutput";
import { DisableEbsEncryptionByDefaultInput } from "./types/DisableEbsEncryptionByDefaultInput";
import { DisableEbsEncryptionByDefaultOutput } from "./types/DisableEbsEncryptionByDefaultOutput";
import { DisableTransitGatewayRouteTablePropagationInput } from "./types/DisableTransitGatewayRouteTablePropagationInput";
import { DisableTransitGatewayRouteTablePropagationOutput } from "./types/DisableTransitGatewayRouteTablePropagationOutput";
import { DisableVgwRoutePropagationInput } from "./types/DisableVgwRoutePropagationInput";
import { DisableVgwRoutePropagationOutput } from "./types/DisableVgwRoutePropagationOutput";
import { DisableVpcClassicLinkDnsSupportInput } from "./types/DisableVpcClassicLinkDnsSupportInput";
import { DisableVpcClassicLinkDnsSupportOutput } from "./types/DisableVpcClassicLinkDnsSupportOutput";
import { DisableVpcClassicLinkInput } from "./types/DisableVpcClassicLinkInput";
import { DisableVpcClassicLinkOutput } from "./types/DisableVpcClassicLinkOutput";
import { DisassociateAddressInput } from "./types/DisassociateAddressInput";
import { DisassociateAddressOutput } from "./types/DisassociateAddressOutput";
import { DisassociateClientVpnTargetNetworkInput } from "./types/DisassociateClientVpnTargetNetworkInput";
import { DisassociateClientVpnTargetNetworkOutput } from "./types/DisassociateClientVpnTargetNetworkOutput";
import { DisassociateIamInstanceProfileInput } from "./types/DisassociateIamInstanceProfileInput";
import { DisassociateIamInstanceProfileOutput } from "./types/DisassociateIamInstanceProfileOutput";
import { DisassociateRouteTableInput } from "./types/DisassociateRouteTableInput";
import { DisassociateRouteTableOutput } from "./types/DisassociateRouteTableOutput";
import { DisassociateSubnetCidrBlockInput } from "./types/DisassociateSubnetCidrBlockInput";
import { DisassociateSubnetCidrBlockOutput } from "./types/DisassociateSubnetCidrBlockOutput";
import { DisassociateTransitGatewayRouteTableInput } from "./types/DisassociateTransitGatewayRouteTableInput";
import { DisassociateTransitGatewayRouteTableOutput } from "./types/DisassociateTransitGatewayRouteTableOutput";
import { DisassociateVpcCidrBlockInput } from "./types/DisassociateVpcCidrBlockInput";
import { DisassociateVpcCidrBlockOutput } from "./types/DisassociateVpcCidrBlockOutput";
import { EnableEbsEncryptionByDefaultInput } from "./types/EnableEbsEncryptionByDefaultInput";
import { EnableEbsEncryptionByDefaultOutput } from "./types/EnableEbsEncryptionByDefaultOutput";
import { EnableTransitGatewayRouteTablePropagationInput } from "./types/EnableTransitGatewayRouteTablePropagationInput";
import { EnableTransitGatewayRouteTablePropagationOutput } from "./types/EnableTransitGatewayRouteTablePropagationOutput";
import { EnableVgwRoutePropagationInput } from "./types/EnableVgwRoutePropagationInput";
import { EnableVgwRoutePropagationOutput } from "./types/EnableVgwRoutePropagationOutput";
import { EnableVolumeIOInput } from "./types/EnableVolumeIOInput";
import { EnableVolumeIOOutput } from "./types/EnableVolumeIOOutput";
import { EnableVpcClassicLinkDnsSupportInput } from "./types/EnableVpcClassicLinkDnsSupportInput";
import { EnableVpcClassicLinkDnsSupportOutput } from "./types/EnableVpcClassicLinkDnsSupportOutput";
import { EnableVpcClassicLinkInput } from "./types/EnableVpcClassicLinkInput";
import { EnableVpcClassicLinkOutput } from "./types/EnableVpcClassicLinkOutput";
import { ExportClientVpnClientCertificateRevocationListInput } from "./types/ExportClientVpnClientCertificateRevocationListInput";
import { ExportClientVpnClientCertificateRevocationListOutput } from "./types/ExportClientVpnClientCertificateRevocationListOutput";
import { ExportClientVpnClientConfigurationInput } from "./types/ExportClientVpnClientConfigurationInput";
import { ExportClientVpnClientConfigurationOutput } from "./types/ExportClientVpnClientConfigurationOutput";
import { ExportTransitGatewayRoutesInput } from "./types/ExportTransitGatewayRoutesInput";
import { ExportTransitGatewayRoutesOutput } from "./types/ExportTransitGatewayRoutesOutput";
import { GetCapacityReservationUsageInput } from "./types/GetCapacityReservationUsageInput";
import { GetCapacityReservationUsageOutput } from "./types/GetCapacityReservationUsageOutput";
import { GetConsoleOutputInput } from "./types/GetConsoleOutputInput";
import { GetConsoleOutputOutput } from "./types/GetConsoleOutputOutput";
import { GetConsoleScreenshotInput } from "./types/GetConsoleScreenshotInput";
import { GetConsoleScreenshotOutput } from "./types/GetConsoleScreenshotOutput";
import { GetEbsDefaultKmsKeyIdInput } from "./types/GetEbsDefaultKmsKeyIdInput";
import { GetEbsDefaultKmsKeyIdOutput } from "./types/GetEbsDefaultKmsKeyIdOutput";
import { GetEbsEncryptionByDefaultInput } from "./types/GetEbsEncryptionByDefaultInput";
import { GetEbsEncryptionByDefaultOutput } from "./types/GetEbsEncryptionByDefaultOutput";
import { GetHostReservationPurchasePreviewInput } from "./types/GetHostReservationPurchasePreviewInput";
import { GetHostReservationPurchasePreviewOutput } from "./types/GetHostReservationPurchasePreviewOutput";
import { GetLaunchTemplateDataInput } from "./types/GetLaunchTemplateDataInput";
import { GetLaunchTemplateDataOutput } from "./types/GetLaunchTemplateDataOutput";
import { GetPasswordDataInput } from "./types/GetPasswordDataInput";
import { GetPasswordDataOutput } from "./types/GetPasswordDataOutput";
import { GetReservedInstancesExchangeQuoteInput } from "./types/GetReservedInstancesExchangeQuoteInput";
import { GetReservedInstancesExchangeQuoteOutput } from "./types/GetReservedInstancesExchangeQuoteOutput";
import { GetTransitGatewayAttachmentPropagationsInput } from "./types/GetTransitGatewayAttachmentPropagationsInput";
import { GetTransitGatewayAttachmentPropagationsOutput } from "./types/GetTransitGatewayAttachmentPropagationsOutput";
import { GetTransitGatewayRouteTableAssociationsInput } from "./types/GetTransitGatewayRouteTableAssociationsInput";
import { GetTransitGatewayRouteTableAssociationsOutput } from "./types/GetTransitGatewayRouteTableAssociationsOutput";
import { GetTransitGatewayRouteTablePropagationsInput } from "./types/GetTransitGatewayRouteTablePropagationsInput";
import { GetTransitGatewayRouteTablePropagationsOutput } from "./types/GetTransitGatewayRouteTablePropagationsOutput";
import { ImportClientVpnClientCertificateRevocationListInput } from "./types/ImportClientVpnClientCertificateRevocationListInput";
import { ImportClientVpnClientCertificateRevocationListOutput } from "./types/ImportClientVpnClientCertificateRevocationListOutput";
import { ImportImageInput } from "./types/ImportImageInput";
import { ImportImageOutput } from "./types/ImportImageOutput";
import { ImportInstanceInput } from "./types/ImportInstanceInput";
import { ImportInstanceOutput } from "./types/ImportInstanceOutput";
import { ImportKeyPairInput } from "./types/ImportKeyPairInput";
import { ImportKeyPairOutput } from "./types/ImportKeyPairOutput";
import { ImportSnapshotInput } from "./types/ImportSnapshotInput";
import { ImportSnapshotOutput } from "./types/ImportSnapshotOutput";
import { ImportVolumeInput } from "./types/ImportVolumeInput";
import { ImportVolumeOutput } from "./types/ImportVolumeOutput";
import { ModifyCapacityReservationInput } from "./types/ModifyCapacityReservationInput";
import { ModifyCapacityReservationOutput } from "./types/ModifyCapacityReservationOutput";
import { ModifyClientVpnEndpointInput } from "./types/ModifyClientVpnEndpointInput";
import { ModifyClientVpnEndpointOutput } from "./types/ModifyClientVpnEndpointOutput";
import { ModifyEbsDefaultKmsKeyIdInput } from "./types/ModifyEbsDefaultKmsKeyIdInput";
import { ModifyEbsDefaultKmsKeyIdOutput } from "./types/ModifyEbsDefaultKmsKeyIdOutput";
import { ModifyFleetInput } from "./types/ModifyFleetInput";
import { ModifyFleetOutput } from "./types/ModifyFleetOutput";
import { ModifyFpgaImageAttributeInput } from "./types/ModifyFpgaImageAttributeInput";
import { ModifyFpgaImageAttributeOutput } from "./types/ModifyFpgaImageAttributeOutput";
import { ModifyHostsInput } from "./types/ModifyHostsInput";
import { ModifyHostsOutput } from "./types/ModifyHostsOutput";
import { ModifyIdFormatInput } from "./types/ModifyIdFormatInput";
import { ModifyIdFormatOutput } from "./types/ModifyIdFormatOutput";
import { ModifyIdentityIdFormatInput } from "./types/ModifyIdentityIdFormatInput";
import { ModifyIdentityIdFormatOutput } from "./types/ModifyIdentityIdFormatOutput";
import { ModifyImageAttributeInput } from "./types/ModifyImageAttributeInput";
import { ModifyImageAttributeOutput } from "./types/ModifyImageAttributeOutput";
import { ModifyInstanceAttributeInput } from "./types/ModifyInstanceAttributeInput";
import { ModifyInstanceAttributeOutput } from "./types/ModifyInstanceAttributeOutput";
import { ModifyInstanceCapacityReservationAttributesInput } from "./types/ModifyInstanceCapacityReservationAttributesInput";
import { ModifyInstanceCapacityReservationAttributesOutput } from "./types/ModifyInstanceCapacityReservationAttributesOutput";
import { ModifyInstanceCreditSpecificationInput } from "./types/ModifyInstanceCreditSpecificationInput";
import { ModifyInstanceCreditSpecificationOutput } from "./types/ModifyInstanceCreditSpecificationOutput";
import { ModifyInstanceEventStartTimeInput } from "./types/ModifyInstanceEventStartTimeInput";
import { ModifyInstanceEventStartTimeOutput } from "./types/ModifyInstanceEventStartTimeOutput";
import { ModifyInstancePlacementInput } from "./types/ModifyInstancePlacementInput";
import { ModifyInstancePlacementOutput } from "./types/ModifyInstancePlacementOutput";
import { ModifyLaunchTemplateInput } from "./types/ModifyLaunchTemplateInput";
import { ModifyLaunchTemplateOutput } from "./types/ModifyLaunchTemplateOutput";
import { ModifyNetworkInterfaceAttributeInput } from "./types/ModifyNetworkInterfaceAttributeInput";
import { ModifyNetworkInterfaceAttributeOutput } from "./types/ModifyNetworkInterfaceAttributeOutput";
import { ModifyReservedInstancesInput } from "./types/ModifyReservedInstancesInput";
import { ModifyReservedInstancesOutput } from "./types/ModifyReservedInstancesOutput";
import { ModifySnapshotAttributeInput } from "./types/ModifySnapshotAttributeInput";
import { ModifySnapshotAttributeOutput } from "./types/ModifySnapshotAttributeOutput";
import { ModifySpotFleetRequestInput } from "./types/ModifySpotFleetRequestInput";
import { ModifySpotFleetRequestOutput } from "./types/ModifySpotFleetRequestOutput";
import { ModifySubnetAttributeInput } from "./types/ModifySubnetAttributeInput";
import { ModifySubnetAttributeOutput } from "./types/ModifySubnetAttributeOutput";
import { ModifyTrafficMirrorFilterNetworkServicesInput } from "./types/ModifyTrafficMirrorFilterNetworkServicesInput";
import { ModifyTrafficMirrorFilterNetworkServicesOutput } from "./types/ModifyTrafficMirrorFilterNetworkServicesOutput";
import { ModifyTrafficMirrorFilterRuleInput } from "./types/ModifyTrafficMirrorFilterRuleInput";
import { ModifyTrafficMirrorFilterRuleOutput } from "./types/ModifyTrafficMirrorFilterRuleOutput";
import { ModifyTrafficMirrorSessionInput } from "./types/ModifyTrafficMirrorSessionInput";
import { ModifyTrafficMirrorSessionOutput } from "./types/ModifyTrafficMirrorSessionOutput";
import { ModifyTransitGatewayVpcAttachmentInput } from "./types/ModifyTransitGatewayVpcAttachmentInput";
import { ModifyTransitGatewayVpcAttachmentOutput } from "./types/ModifyTransitGatewayVpcAttachmentOutput";
import { ModifyVolumeAttributeInput } from "./types/ModifyVolumeAttributeInput";
import { ModifyVolumeAttributeOutput } from "./types/ModifyVolumeAttributeOutput";
import { ModifyVolumeInput } from "./types/ModifyVolumeInput";
import { ModifyVolumeOutput } from "./types/ModifyVolumeOutput";
import { ModifyVpcAttributeInput } from "./types/ModifyVpcAttributeInput";
import { ModifyVpcAttributeOutput } from "./types/ModifyVpcAttributeOutput";
import { ModifyVpcEndpointConnectionNotificationInput } from "./types/ModifyVpcEndpointConnectionNotificationInput";
import { ModifyVpcEndpointConnectionNotificationOutput } from "./types/ModifyVpcEndpointConnectionNotificationOutput";
import { ModifyVpcEndpointInput } from "./types/ModifyVpcEndpointInput";
import { ModifyVpcEndpointOutput } from "./types/ModifyVpcEndpointOutput";
import { ModifyVpcEndpointServiceConfigurationInput } from "./types/ModifyVpcEndpointServiceConfigurationInput";
import { ModifyVpcEndpointServiceConfigurationOutput } from "./types/ModifyVpcEndpointServiceConfigurationOutput";
import { ModifyVpcEndpointServicePermissionsInput } from "./types/ModifyVpcEndpointServicePermissionsInput";
import { ModifyVpcEndpointServicePermissionsOutput } from "./types/ModifyVpcEndpointServicePermissionsOutput";
import { ModifyVpcPeeringConnectionOptionsInput } from "./types/ModifyVpcPeeringConnectionOptionsInput";
import { ModifyVpcPeeringConnectionOptionsOutput } from "./types/ModifyVpcPeeringConnectionOptionsOutput";
import { ModifyVpcTenancyInput } from "./types/ModifyVpcTenancyInput";
import { ModifyVpcTenancyOutput } from "./types/ModifyVpcTenancyOutput";
import { ModifyVpnConnectionInput } from "./types/ModifyVpnConnectionInput";
import { ModifyVpnConnectionOutput } from "./types/ModifyVpnConnectionOutput";
import { MonitorInstancesInput } from "./types/MonitorInstancesInput";
import { MonitorInstancesOutput } from "./types/MonitorInstancesOutput";
import { MoveAddressToVpcInput } from "./types/MoveAddressToVpcInput";
import { MoveAddressToVpcOutput } from "./types/MoveAddressToVpcOutput";
import { ProvisionByoipCidrInput } from "./types/ProvisionByoipCidrInput";
import { ProvisionByoipCidrOutput } from "./types/ProvisionByoipCidrOutput";
import { PurchaseHostReservationInput } from "./types/PurchaseHostReservationInput";
import { PurchaseHostReservationOutput } from "./types/PurchaseHostReservationOutput";
import { PurchaseReservedInstancesOfferingInput } from "./types/PurchaseReservedInstancesOfferingInput";
import { PurchaseReservedInstancesOfferingOutput } from "./types/PurchaseReservedInstancesOfferingOutput";
import { PurchaseScheduledInstancesInput } from "./types/PurchaseScheduledInstancesInput";
import { PurchaseScheduledInstancesOutput } from "./types/PurchaseScheduledInstancesOutput";
import { RebootInstancesInput } from "./types/RebootInstancesInput";
import { RebootInstancesOutput } from "./types/RebootInstancesOutput";
import { RegisterImageInput } from "./types/RegisterImageInput";
import { RegisterImageOutput } from "./types/RegisterImageOutput";
import { RejectTransitGatewayVpcAttachmentInput } from "./types/RejectTransitGatewayVpcAttachmentInput";
import { RejectTransitGatewayVpcAttachmentOutput } from "./types/RejectTransitGatewayVpcAttachmentOutput";
import { RejectVpcEndpointConnectionsInput } from "./types/RejectVpcEndpointConnectionsInput";
import { RejectVpcEndpointConnectionsOutput } from "./types/RejectVpcEndpointConnectionsOutput";
import { RejectVpcPeeringConnectionInput } from "./types/RejectVpcPeeringConnectionInput";
import { RejectVpcPeeringConnectionOutput } from "./types/RejectVpcPeeringConnectionOutput";
import { ReleaseAddressInput } from "./types/ReleaseAddressInput";
import { ReleaseAddressOutput } from "./types/ReleaseAddressOutput";
import { ReleaseHostsInput } from "./types/ReleaseHostsInput";
import { ReleaseHostsOutput } from "./types/ReleaseHostsOutput";
import { ReplaceIamInstanceProfileAssociationInput } from "./types/ReplaceIamInstanceProfileAssociationInput";
import { ReplaceIamInstanceProfileAssociationOutput } from "./types/ReplaceIamInstanceProfileAssociationOutput";
import { ReplaceNetworkAclAssociationInput } from "./types/ReplaceNetworkAclAssociationInput";
import { ReplaceNetworkAclAssociationOutput } from "./types/ReplaceNetworkAclAssociationOutput";
import { ReplaceNetworkAclEntryInput } from "./types/ReplaceNetworkAclEntryInput";
import { ReplaceNetworkAclEntryOutput } from "./types/ReplaceNetworkAclEntryOutput";
import { ReplaceRouteInput } from "./types/ReplaceRouteInput";
import { ReplaceRouteOutput } from "./types/ReplaceRouteOutput";
import { ReplaceRouteTableAssociationInput } from "./types/ReplaceRouteTableAssociationInput";
import { ReplaceRouteTableAssociationOutput } from "./types/ReplaceRouteTableAssociationOutput";
import { ReplaceTransitGatewayRouteInput } from "./types/ReplaceTransitGatewayRouteInput";
import { ReplaceTransitGatewayRouteOutput } from "./types/ReplaceTransitGatewayRouteOutput";
import { ReportInstanceStatusInput } from "./types/ReportInstanceStatusInput";
import { ReportInstanceStatusOutput } from "./types/ReportInstanceStatusOutput";
import { RequestSpotFleetInput } from "./types/RequestSpotFleetInput";
import { RequestSpotFleetOutput } from "./types/RequestSpotFleetOutput";
import { RequestSpotInstancesInput } from "./types/RequestSpotInstancesInput";
import { RequestSpotInstancesOutput } from "./types/RequestSpotInstancesOutput";
import { ResetEbsDefaultKmsKeyIdInput } from "./types/ResetEbsDefaultKmsKeyIdInput";
import { ResetEbsDefaultKmsKeyIdOutput } from "./types/ResetEbsDefaultKmsKeyIdOutput";
import { ResetFpgaImageAttributeInput } from "./types/ResetFpgaImageAttributeInput";
import { ResetFpgaImageAttributeOutput } from "./types/ResetFpgaImageAttributeOutput";
import { ResetImageAttributeInput } from "./types/ResetImageAttributeInput";
import { ResetImageAttributeOutput } from "./types/ResetImageAttributeOutput";
import { ResetInstanceAttributeInput } from "./types/ResetInstanceAttributeInput";
import { ResetInstanceAttributeOutput } from "./types/ResetInstanceAttributeOutput";
import { ResetNetworkInterfaceAttributeInput } from "./types/ResetNetworkInterfaceAttributeInput";
import { ResetNetworkInterfaceAttributeOutput } from "./types/ResetNetworkInterfaceAttributeOutput";
import { ResetSnapshotAttributeInput } from "./types/ResetSnapshotAttributeInput";
import { ResetSnapshotAttributeOutput } from "./types/ResetSnapshotAttributeOutput";
import { RestoreAddressToClassicInput } from "./types/RestoreAddressToClassicInput";
import { RestoreAddressToClassicOutput } from "./types/RestoreAddressToClassicOutput";
import { RevokeClientVpnIngressInput } from "./types/RevokeClientVpnIngressInput";
import { RevokeClientVpnIngressOutput } from "./types/RevokeClientVpnIngressOutput";
import { RevokeSecurityGroupEgressInput } from "./types/RevokeSecurityGroupEgressInput";
import { RevokeSecurityGroupEgressOutput } from "./types/RevokeSecurityGroupEgressOutput";
import { RevokeSecurityGroupIngressInput } from "./types/RevokeSecurityGroupIngressInput";
import { RevokeSecurityGroupIngressOutput } from "./types/RevokeSecurityGroupIngressOutput";
import { RunInstancesInput } from "./types/RunInstancesInput";
import { RunInstancesOutput } from "./types/RunInstancesOutput";
import { RunScheduledInstancesInput } from "./types/RunScheduledInstancesInput";
import { RunScheduledInstancesOutput } from "./types/RunScheduledInstancesOutput";
import { SearchTransitGatewayRoutesInput } from "./types/SearchTransitGatewayRoutesInput";
import { SearchTransitGatewayRoutesOutput } from "./types/SearchTransitGatewayRoutesOutput";
import { StartInstancesInput } from "./types/StartInstancesInput";
import { StartInstancesOutput } from "./types/StartInstancesOutput";
import { StopInstancesInput } from "./types/StopInstancesInput";
import { StopInstancesOutput } from "./types/StopInstancesOutput";
import { TerminateClientVpnConnectionsInput } from "./types/TerminateClientVpnConnectionsInput";
import { TerminateClientVpnConnectionsOutput } from "./types/TerminateClientVpnConnectionsOutput";
import { TerminateInstancesInput } from "./types/TerminateInstancesInput";
import { TerminateInstancesOutput } from "./types/TerminateInstancesOutput";
import { UnassignIpv6AddressesInput } from "./types/UnassignIpv6AddressesInput";
import { UnassignIpv6AddressesOutput } from "./types/UnassignIpv6AddressesOutput";
import { UnassignPrivateIpAddressesInput } from "./types/UnassignPrivateIpAddressesInput";
import { UnassignPrivateIpAddressesOutput } from "./types/UnassignPrivateIpAddressesOutput";
import { UnmonitorInstancesInput } from "./types/UnmonitorInstancesInput";
import { UnmonitorInstancesOutput } from "./types/UnmonitorInstancesOutput";
import { UpdateSecurityGroupRuleDescriptionsEgressInput } from "./types/UpdateSecurityGroupRuleDescriptionsEgressInput";
import { UpdateSecurityGroupRuleDescriptionsEgressOutput } from "./types/UpdateSecurityGroupRuleDescriptionsEgressOutput";
import { UpdateSecurityGroupRuleDescriptionsIngressInput } from "./types/UpdateSecurityGroupRuleDescriptionsIngressInput";
import { UpdateSecurityGroupRuleDescriptionsIngressOutput } from "./types/UpdateSecurityGroupRuleDescriptionsIngressOutput";
import { WithdrawByoipCidrInput } from "./types/WithdrawByoipCidrInput";
import { WithdrawByoipCidrOutput } from "./types/WithdrawByoipCidrOutput";
import { AcceptReservedInstancesExchangeQuoteCommand } from "./commands/AcceptReservedInstancesExchangeQuoteCommand";
import { AcceptTransitGatewayVpcAttachmentCommand } from "./commands/AcceptTransitGatewayVpcAttachmentCommand";
import { AcceptVpcEndpointConnectionsCommand } from "./commands/AcceptVpcEndpointConnectionsCommand";
import { AcceptVpcPeeringConnectionCommand } from "./commands/AcceptVpcPeeringConnectionCommand";
import { AdvertiseByoipCidrCommand } from "./commands/AdvertiseByoipCidrCommand";
import { AllocateAddressCommand } from "./commands/AllocateAddressCommand";
import { AllocateHostsCommand } from "./commands/AllocateHostsCommand";
import { ApplySecurityGroupsToClientVpnTargetNetworkCommand } from "./commands/ApplySecurityGroupsToClientVpnTargetNetworkCommand";
import { AssignIpv6AddressesCommand } from "./commands/AssignIpv6AddressesCommand";
import { AssignPrivateIpAddressesCommand } from "./commands/AssignPrivateIpAddressesCommand";
import { AssociateAddressCommand } from "./commands/AssociateAddressCommand";
import { AssociateClientVpnTargetNetworkCommand } from "./commands/AssociateClientVpnTargetNetworkCommand";
import { AssociateDhcpOptionsCommand } from "./commands/AssociateDhcpOptionsCommand";
import { AssociateIamInstanceProfileCommand } from "./commands/AssociateIamInstanceProfileCommand";
import { AssociateRouteTableCommand } from "./commands/AssociateRouteTableCommand";
import { AssociateSubnetCidrBlockCommand } from "./commands/AssociateSubnetCidrBlockCommand";
import { AssociateTransitGatewayRouteTableCommand } from "./commands/AssociateTransitGatewayRouteTableCommand";
import { AssociateVpcCidrBlockCommand } from "./commands/AssociateVpcCidrBlockCommand";
import { AttachClassicLinkVpcCommand } from "./commands/AttachClassicLinkVpcCommand";
import { AttachInternetGatewayCommand } from "./commands/AttachInternetGatewayCommand";
import { AttachNetworkInterfaceCommand } from "./commands/AttachNetworkInterfaceCommand";
import { AttachVolumeCommand } from "./commands/AttachVolumeCommand";
import { AttachVpnGatewayCommand } from "./commands/AttachVpnGatewayCommand";
import { AuthorizeClientVpnIngressCommand } from "./commands/AuthorizeClientVpnIngressCommand";
import { AuthorizeSecurityGroupEgressCommand } from "./commands/AuthorizeSecurityGroupEgressCommand";
import { AuthorizeSecurityGroupIngressCommand } from "./commands/AuthorizeSecurityGroupIngressCommand";
import { BundleInstanceCommand } from "./commands/BundleInstanceCommand";
import { CancelBundleTaskCommand } from "./commands/CancelBundleTaskCommand";
import { CancelCapacityReservationCommand } from "./commands/CancelCapacityReservationCommand";
import { CancelConversionTaskCommand } from "./commands/CancelConversionTaskCommand";
import { CancelExportTaskCommand } from "./commands/CancelExportTaskCommand";
import { CancelImportTaskCommand } from "./commands/CancelImportTaskCommand";
import { CancelReservedInstancesListingCommand } from "./commands/CancelReservedInstancesListingCommand";
import { CancelSpotFleetRequestsCommand } from "./commands/CancelSpotFleetRequestsCommand";
import { CancelSpotInstanceRequestsCommand } from "./commands/CancelSpotInstanceRequestsCommand";
import { ConfirmProductInstanceCommand } from "./commands/ConfirmProductInstanceCommand";
import { CopyFpgaImageCommand } from "./commands/CopyFpgaImageCommand";
import { CopyImageCommand } from "./commands/CopyImageCommand";
import { CopySnapshotCommand } from "./commands/CopySnapshotCommand";
import { CreateCapacityReservationCommand } from "./commands/CreateCapacityReservationCommand";
import { CreateClientVpnEndpointCommand } from "./commands/CreateClientVpnEndpointCommand";
import { CreateClientVpnRouteCommand } from "./commands/CreateClientVpnRouteCommand";
import { CreateCustomerGatewayCommand } from "./commands/CreateCustomerGatewayCommand";
import { CreateDefaultSubnetCommand } from "./commands/CreateDefaultSubnetCommand";
import { CreateDefaultVpcCommand } from "./commands/CreateDefaultVpcCommand";
import { CreateDhcpOptionsCommand } from "./commands/CreateDhcpOptionsCommand";
import { CreateEgressOnlyInternetGatewayCommand } from "./commands/CreateEgressOnlyInternetGatewayCommand";
import { CreateFleetCommand } from "./commands/CreateFleetCommand";
import { CreateFlowLogsCommand } from "./commands/CreateFlowLogsCommand";
import { CreateFpgaImageCommand } from "./commands/CreateFpgaImageCommand";
import { CreateImageCommand } from "./commands/CreateImageCommand";
import { CreateInstanceExportTaskCommand } from "./commands/CreateInstanceExportTaskCommand";
import { CreateInternetGatewayCommand } from "./commands/CreateInternetGatewayCommand";
import { CreateKeyPairCommand } from "./commands/CreateKeyPairCommand";
import { CreateLaunchTemplateCommand } from "./commands/CreateLaunchTemplateCommand";
import { CreateLaunchTemplateVersionCommand } from "./commands/CreateLaunchTemplateVersionCommand";
import { CreateNatGatewayCommand } from "./commands/CreateNatGatewayCommand";
import { CreateNetworkAclCommand } from "./commands/CreateNetworkAclCommand";
import { CreateNetworkAclEntryCommand } from "./commands/CreateNetworkAclEntryCommand";
import { CreateNetworkInterfaceCommand } from "./commands/CreateNetworkInterfaceCommand";
import { CreateNetworkInterfacePermissionCommand } from "./commands/CreateNetworkInterfacePermissionCommand";
import { CreatePlacementGroupCommand } from "./commands/CreatePlacementGroupCommand";
import { CreateReservedInstancesListingCommand } from "./commands/CreateReservedInstancesListingCommand";
import { CreateRouteCommand } from "./commands/CreateRouteCommand";
import { CreateRouteTableCommand } from "./commands/CreateRouteTableCommand";
import { CreateSecurityGroupCommand } from "./commands/CreateSecurityGroupCommand";
import { CreateSnapshotCommand } from "./commands/CreateSnapshotCommand";
import { CreateSnapshotsCommand } from "./commands/CreateSnapshotsCommand";
import { CreateSpotDatafeedSubscriptionCommand } from "./commands/CreateSpotDatafeedSubscriptionCommand";
import { CreateSubnetCommand } from "./commands/CreateSubnetCommand";
import { CreateTagsCommand } from "./commands/CreateTagsCommand";
import { CreateTrafficMirrorFilterCommand } from "./commands/CreateTrafficMirrorFilterCommand";
import { CreateTrafficMirrorFilterRuleCommand } from "./commands/CreateTrafficMirrorFilterRuleCommand";
import { CreateTrafficMirrorSessionCommand } from "./commands/CreateTrafficMirrorSessionCommand";
import { CreateTrafficMirrorTargetCommand } from "./commands/CreateTrafficMirrorTargetCommand";
import { CreateTransitGatewayCommand } from "./commands/CreateTransitGatewayCommand";
import { CreateTransitGatewayRouteCommand } from "./commands/CreateTransitGatewayRouteCommand";
import { CreateTransitGatewayRouteTableCommand } from "./commands/CreateTransitGatewayRouteTableCommand";
import { CreateTransitGatewayVpcAttachmentCommand } from "./commands/CreateTransitGatewayVpcAttachmentCommand";
import { CreateVolumeCommand } from "./commands/CreateVolumeCommand";
import { CreateVpcCommand } from "./commands/CreateVpcCommand";
import { CreateVpcEndpointCommand } from "./commands/CreateVpcEndpointCommand";
import { CreateVpcEndpointConnectionNotificationCommand } from "./commands/CreateVpcEndpointConnectionNotificationCommand";
import { CreateVpcEndpointServiceConfigurationCommand } from "./commands/CreateVpcEndpointServiceConfigurationCommand";
import { CreateVpcPeeringConnectionCommand } from "./commands/CreateVpcPeeringConnectionCommand";
import { CreateVpnConnectionCommand } from "./commands/CreateVpnConnectionCommand";
import { CreateVpnConnectionRouteCommand } from "./commands/CreateVpnConnectionRouteCommand";
import { CreateVpnGatewayCommand } from "./commands/CreateVpnGatewayCommand";
import { DeleteClientVpnEndpointCommand } from "./commands/DeleteClientVpnEndpointCommand";
import { DeleteClientVpnRouteCommand } from "./commands/DeleteClientVpnRouteCommand";
import { DeleteCustomerGatewayCommand } from "./commands/DeleteCustomerGatewayCommand";
import { DeleteDhcpOptionsCommand } from "./commands/DeleteDhcpOptionsCommand";
import { DeleteEgressOnlyInternetGatewayCommand } from "./commands/DeleteEgressOnlyInternetGatewayCommand";
import { DeleteFleetsCommand } from "./commands/DeleteFleetsCommand";
import { DeleteFlowLogsCommand } from "./commands/DeleteFlowLogsCommand";
import { DeleteFpgaImageCommand } from "./commands/DeleteFpgaImageCommand";
import { DeleteInternetGatewayCommand } from "./commands/DeleteInternetGatewayCommand";
import { DeleteKeyPairCommand } from "./commands/DeleteKeyPairCommand";
import { DeleteLaunchTemplateCommand } from "./commands/DeleteLaunchTemplateCommand";
import { DeleteLaunchTemplateVersionsCommand } from "./commands/DeleteLaunchTemplateVersionsCommand";
import { DeleteNatGatewayCommand } from "./commands/DeleteNatGatewayCommand";
import { DeleteNetworkAclCommand } from "./commands/DeleteNetworkAclCommand";
import { DeleteNetworkAclEntryCommand } from "./commands/DeleteNetworkAclEntryCommand";
import { DeleteNetworkInterfaceCommand } from "./commands/DeleteNetworkInterfaceCommand";
import { DeleteNetworkInterfacePermissionCommand } from "./commands/DeleteNetworkInterfacePermissionCommand";
import { DeletePlacementGroupCommand } from "./commands/DeletePlacementGroupCommand";
import { DeleteRouteCommand } from "./commands/DeleteRouteCommand";
import { DeleteRouteTableCommand } from "./commands/DeleteRouteTableCommand";
import { DeleteSecurityGroupCommand } from "./commands/DeleteSecurityGroupCommand";
import { DeleteSnapshotCommand } from "./commands/DeleteSnapshotCommand";
import { DeleteSpotDatafeedSubscriptionCommand } from "./commands/DeleteSpotDatafeedSubscriptionCommand";
import { DeleteSubnetCommand } from "./commands/DeleteSubnetCommand";
import { DeleteTagsCommand } from "./commands/DeleteTagsCommand";
import { DeleteTrafficMirrorFilterCommand } from "./commands/DeleteTrafficMirrorFilterCommand";
import { DeleteTrafficMirrorFilterRuleCommand } from "./commands/DeleteTrafficMirrorFilterRuleCommand";
import { DeleteTrafficMirrorSessionCommand } from "./commands/DeleteTrafficMirrorSessionCommand";
import { DeleteTrafficMirrorTargetCommand } from "./commands/DeleteTrafficMirrorTargetCommand";
import { DeleteTransitGatewayCommand } from "./commands/DeleteTransitGatewayCommand";
import { DeleteTransitGatewayRouteCommand } from "./commands/DeleteTransitGatewayRouteCommand";
import { DeleteTransitGatewayRouteTableCommand } from "./commands/DeleteTransitGatewayRouteTableCommand";
import { DeleteTransitGatewayVpcAttachmentCommand } from "./commands/DeleteTransitGatewayVpcAttachmentCommand";
import { DeleteVolumeCommand } from "./commands/DeleteVolumeCommand";
import { DeleteVpcCommand } from "./commands/DeleteVpcCommand";
import { DeleteVpcEndpointConnectionNotificationsCommand } from "./commands/DeleteVpcEndpointConnectionNotificationsCommand";
import { DeleteVpcEndpointServiceConfigurationsCommand } from "./commands/DeleteVpcEndpointServiceConfigurationsCommand";
import { DeleteVpcEndpointsCommand } from "./commands/DeleteVpcEndpointsCommand";
import { DeleteVpcPeeringConnectionCommand } from "./commands/DeleteVpcPeeringConnectionCommand";
import { DeleteVpnConnectionCommand } from "./commands/DeleteVpnConnectionCommand";
import { DeleteVpnConnectionRouteCommand } from "./commands/DeleteVpnConnectionRouteCommand";
import { DeleteVpnGatewayCommand } from "./commands/DeleteVpnGatewayCommand";
import { DeprovisionByoipCidrCommand } from "./commands/DeprovisionByoipCidrCommand";
import { DeregisterImageCommand } from "./commands/DeregisterImageCommand";
import { DescribeAccountAttributesCommand } from "./commands/DescribeAccountAttributesCommand";
import { DescribeAddressesCommand } from "./commands/DescribeAddressesCommand";
import { DescribeAggregateIdFormatCommand } from "./commands/DescribeAggregateIdFormatCommand";
import { DescribeAvailabilityZonesCommand } from "./commands/DescribeAvailabilityZonesCommand";
import { DescribeBundleTasksCommand } from "./commands/DescribeBundleTasksCommand";
import { DescribeByoipCidrsCommand } from "./commands/DescribeByoipCidrsCommand";
import { DescribeCapacityReservationsCommand } from "./commands/DescribeCapacityReservationsCommand";
import { DescribeClassicLinkInstancesCommand } from "./commands/DescribeClassicLinkInstancesCommand";
import { DescribeClientVpnAuthorizationRulesCommand } from "./commands/DescribeClientVpnAuthorizationRulesCommand";
import { DescribeClientVpnConnectionsCommand } from "./commands/DescribeClientVpnConnectionsCommand";
import { DescribeClientVpnEndpointsCommand } from "./commands/DescribeClientVpnEndpointsCommand";
import { DescribeClientVpnRoutesCommand } from "./commands/DescribeClientVpnRoutesCommand";
import { DescribeClientVpnTargetNetworksCommand } from "./commands/DescribeClientVpnTargetNetworksCommand";
import { DescribeConversionTasksCommand } from "./commands/DescribeConversionTasksCommand";
import { DescribeCustomerGatewaysCommand } from "./commands/DescribeCustomerGatewaysCommand";
import { DescribeDhcpOptionsCommand } from "./commands/DescribeDhcpOptionsCommand";
import { DescribeEgressOnlyInternetGatewaysCommand } from "./commands/DescribeEgressOnlyInternetGatewaysCommand";
import { DescribeElasticGpusCommand } from "./commands/DescribeElasticGpusCommand";
import { DescribeExportTasksCommand } from "./commands/DescribeExportTasksCommand";
import { DescribeFleetHistoryCommand } from "./commands/DescribeFleetHistoryCommand";
import { DescribeFleetInstancesCommand } from "./commands/DescribeFleetInstancesCommand";
import { DescribeFleetsCommand } from "./commands/DescribeFleetsCommand";
import { DescribeFlowLogsCommand } from "./commands/DescribeFlowLogsCommand";
import { DescribeFpgaImageAttributeCommand } from "./commands/DescribeFpgaImageAttributeCommand";
import { DescribeFpgaImagesCommand } from "./commands/DescribeFpgaImagesCommand";
import { DescribeHostReservationOfferingsCommand } from "./commands/DescribeHostReservationOfferingsCommand";
import { DescribeHostReservationsCommand } from "./commands/DescribeHostReservationsCommand";
import { DescribeHostsCommand } from "./commands/DescribeHostsCommand";
import { DescribeIamInstanceProfileAssociationsCommand } from "./commands/DescribeIamInstanceProfileAssociationsCommand";
import { DescribeIdFormatCommand } from "./commands/DescribeIdFormatCommand";
import { DescribeIdentityIdFormatCommand } from "./commands/DescribeIdentityIdFormatCommand";
import { DescribeImageAttributeCommand } from "./commands/DescribeImageAttributeCommand";
import { DescribeImagesCommand } from "./commands/DescribeImagesCommand";
import { DescribeImportImageTasksCommand } from "./commands/DescribeImportImageTasksCommand";
import { DescribeImportSnapshotTasksCommand } from "./commands/DescribeImportSnapshotTasksCommand";
import { DescribeInstanceAttributeCommand } from "./commands/DescribeInstanceAttributeCommand";
import { DescribeInstanceCreditSpecificationsCommand } from "./commands/DescribeInstanceCreditSpecificationsCommand";
import { DescribeInstanceStatusCommand } from "./commands/DescribeInstanceStatusCommand";
import { DescribeInstancesCommand } from "./commands/DescribeInstancesCommand";
import { DescribeInternetGatewaysCommand } from "./commands/DescribeInternetGatewaysCommand";
import { DescribeKeyPairsCommand } from "./commands/DescribeKeyPairsCommand";
import { DescribeLaunchTemplateVersionsCommand } from "./commands/DescribeLaunchTemplateVersionsCommand";
import { DescribeLaunchTemplatesCommand } from "./commands/DescribeLaunchTemplatesCommand";
import { DescribeMovingAddressesCommand } from "./commands/DescribeMovingAddressesCommand";
import { DescribeNatGatewaysCommand } from "./commands/DescribeNatGatewaysCommand";
import { DescribeNetworkAclsCommand } from "./commands/DescribeNetworkAclsCommand";
import { DescribeNetworkInterfaceAttributeCommand } from "./commands/DescribeNetworkInterfaceAttributeCommand";
import { DescribeNetworkInterfacePermissionsCommand } from "./commands/DescribeNetworkInterfacePermissionsCommand";
import { DescribeNetworkInterfacesCommand } from "./commands/DescribeNetworkInterfacesCommand";
import { DescribePlacementGroupsCommand } from "./commands/DescribePlacementGroupsCommand";
import { DescribePrefixListsCommand } from "./commands/DescribePrefixListsCommand";
import { DescribePrincipalIdFormatCommand } from "./commands/DescribePrincipalIdFormatCommand";
import { DescribePublicIpv4PoolsCommand } from "./commands/DescribePublicIpv4PoolsCommand";
import { DescribeRegionsCommand } from "./commands/DescribeRegionsCommand";
import { DescribeReservedInstancesCommand } from "./commands/DescribeReservedInstancesCommand";
import { DescribeReservedInstancesListingsCommand } from "./commands/DescribeReservedInstancesListingsCommand";
import { DescribeReservedInstancesModificationsCommand } from "./commands/DescribeReservedInstancesModificationsCommand";
import { DescribeReservedInstancesOfferingsCommand } from "./commands/DescribeReservedInstancesOfferingsCommand";
import { DescribeRouteTablesCommand } from "./commands/DescribeRouteTablesCommand";
import { DescribeScheduledInstanceAvailabilityCommand } from "./commands/DescribeScheduledInstanceAvailabilityCommand";
import { DescribeScheduledInstancesCommand } from "./commands/DescribeScheduledInstancesCommand";
import { DescribeSecurityGroupReferencesCommand } from "./commands/DescribeSecurityGroupReferencesCommand";
import { DescribeSecurityGroupsCommand } from "./commands/DescribeSecurityGroupsCommand";
import { DescribeSnapshotAttributeCommand } from "./commands/DescribeSnapshotAttributeCommand";
import { DescribeSnapshotsCommand } from "./commands/DescribeSnapshotsCommand";
import { DescribeSpotDatafeedSubscriptionCommand } from "./commands/DescribeSpotDatafeedSubscriptionCommand";
import { DescribeSpotFleetInstancesCommand } from "./commands/DescribeSpotFleetInstancesCommand";
import { DescribeSpotFleetRequestHistoryCommand } from "./commands/DescribeSpotFleetRequestHistoryCommand";
import { DescribeSpotFleetRequestsCommand } from "./commands/DescribeSpotFleetRequestsCommand";
import { DescribeSpotInstanceRequestsCommand } from "./commands/DescribeSpotInstanceRequestsCommand";
import { DescribeSpotPriceHistoryCommand } from "./commands/DescribeSpotPriceHistoryCommand";
import { DescribeStaleSecurityGroupsCommand } from "./commands/DescribeStaleSecurityGroupsCommand";
import { DescribeSubnetsCommand } from "./commands/DescribeSubnetsCommand";
import { DescribeTagsCommand } from "./commands/DescribeTagsCommand";
import { DescribeTrafficMirrorFiltersCommand } from "./commands/DescribeTrafficMirrorFiltersCommand";
import { DescribeTrafficMirrorSessionsCommand } from "./commands/DescribeTrafficMirrorSessionsCommand";
import { DescribeTrafficMirrorTargetsCommand } from "./commands/DescribeTrafficMirrorTargetsCommand";
import { DescribeTransitGatewayAttachmentsCommand } from "./commands/DescribeTransitGatewayAttachmentsCommand";
import { DescribeTransitGatewayRouteTablesCommand } from "./commands/DescribeTransitGatewayRouteTablesCommand";
import { DescribeTransitGatewayVpcAttachmentsCommand } from "./commands/DescribeTransitGatewayVpcAttachmentsCommand";
import { DescribeTransitGatewaysCommand } from "./commands/DescribeTransitGatewaysCommand";
import { DescribeVolumeAttributeCommand } from "./commands/DescribeVolumeAttributeCommand";
import { DescribeVolumeStatusCommand } from "./commands/DescribeVolumeStatusCommand";
import { DescribeVolumesCommand } from "./commands/DescribeVolumesCommand";
import { DescribeVolumesModificationsCommand } from "./commands/DescribeVolumesModificationsCommand";
import { DescribeVpcAttributeCommand } from "./commands/DescribeVpcAttributeCommand";
import { DescribeVpcClassicLinkCommand } from "./commands/DescribeVpcClassicLinkCommand";
import { DescribeVpcClassicLinkDnsSupportCommand } from "./commands/DescribeVpcClassicLinkDnsSupportCommand";
import { DescribeVpcEndpointConnectionNotificationsCommand } from "./commands/DescribeVpcEndpointConnectionNotificationsCommand";
import { DescribeVpcEndpointConnectionsCommand } from "./commands/DescribeVpcEndpointConnectionsCommand";
import { DescribeVpcEndpointServiceConfigurationsCommand } from "./commands/DescribeVpcEndpointServiceConfigurationsCommand";
import { DescribeVpcEndpointServicePermissionsCommand } from "./commands/DescribeVpcEndpointServicePermissionsCommand";
import { DescribeVpcEndpointServicesCommand } from "./commands/DescribeVpcEndpointServicesCommand";
import { DescribeVpcEndpointsCommand } from "./commands/DescribeVpcEndpointsCommand";
import { DescribeVpcPeeringConnectionsCommand } from "./commands/DescribeVpcPeeringConnectionsCommand";
import { DescribeVpcsCommand } from "./commands/DescribeVpcsCommand";
import { DescribeVpnConnectionsCommand } from "./commands/DescribeVpnConnectionsCommand";
import { DescribeVpnGatewaysCommand } from "./commands/DescribeVpnGatewaysCommand";
import { DetachClassicLinkVpcCommand } from "./commands/DetachClassicLinkVpcCommand";
import { DetachInternetGatewayCommand } from "./commands/DetachInternetGatewayCommand";
import { DetachNetworkInterfaceCommand } from "./commands/DetachNetworkInterfaceCommand";
import { DetachVolumeCommand } from "./commands/DetachVolumeCommand";
import { DetachVpnGatewayCommand } from "./commands/DetachVpnGatewayCommand";
import { DisableEbsEncryptionByDefaultCommand } from "./commands/DisableEbsEncryptionByDefaultCommand";
import { DisableTransitGatewayRouteTablePropagationCommand } from "./commands/DisableTransitGatewayRouteTablePropagationCommand";
import { DisableVgwRoutePropagationCommand } from "./commands/DisableVgwRoutePropagationCommand";
import { DisableVpcClassicLinkCommand } from "./commands/DisableVpcClassicLinkCommand";
import { DisableVpcClassicLinkDnsSupportCommand } from "./commands/DisableVpcClassicLinkDnsSupportCommand";
import { DisassociateAddressCommand } from "./commands/DisassociateAddressCommand";
import { DisassociateClientVpnTargetNetworkCommand } from "./commands/DisassociateClientVpnTargetNetworkCommand";
import { DisassociateIamInstanceProfileCommand } from "./commands/DisassociateIamInstanceProfileCommand";
import { DisassociateRouteTableCommand } from "./commands/DisassociateRouteTableCommand";
import { DisassociateSubnetCidrBlockCommand } from "./commands/DisassociateSubnetCidrBlockCommand";
import { DisassociateTransitGatewayRouteTableCommand } from "./commands/DisassociateTransitGatewayRouteTableCommand";
import { DisassociateVpcCidrBlockCommand } from "./commands/DisassociateVpcCidrBlockCommand";
import { EnableEbsEncryptionByDefaultCommand } from "./commands/EnableEbsEncryptionByDefaultCommand";
import { EnableTransitGatewayRouteTablePropagationCommand } from "./commands/EnableTransitGatewayRouteTablePropagationCommand";
import { EnableVgwRoutePropagationCommand } from "./commands/EnableVgwRoutePropagationCommand";
import { EnableVolumeIOCommand } from "./commands/EnableVolumeIOCommand";
import { EnableVpcClassicLinkCommand } from "./commands/EnableVpcClassicLinkCommand";
import { EnableVpcClassicLinkDnsSupportCommand } from "./commands/EnableVpcClassicLinkDnsSupportCommand";
import { ExportClientVpnClientCertificateRevocationListCommand } from "./commands/ExportClientVpnClientCertificateRevocationListCommand";
import { ExportClientVpnClientConfigurationCommand } from "./commands/ExportClientVpnClientConfigurationCommand";
import { ExportTransitGatewayRoutesCommand } from "./commands/ExportTransitGatewayRoutesCommand";
import { GetCapacityReservationUsageCommand } from "./commands/GetCapacityReservationUsageCommand";
import { GetConsoleOutputCommand } from "./commands/GetConsoleOutputCommand";
import { GetConsoleScreenshotCommand } from "./commands/GetConsoleScreenshotCommand";
import { GetEbsDefaultKmsKeyIdCommand } from "./commands/GetEbsDefaultKmsKeyIdCommand";
import { GetEbsEncryptionByDefaultCommand } from "./commands/GetEbsEncryptionByDefaultCommand";
import { GetHostReservationPurchasePreviewCommand } from "./commands/GetHostReservationPurchasePreviewCommand";
import { GetLaunchTemplateDataCommand } from "./commands/GetLaunchTemplateDataCommand";
import { GetPasswordDataCommand } from "./commands/GetPasswordDataCommand";
import { GetReservedInstancesExchangeQuoteCommand } from "./commands/GetReservedInstancesExchangeQuoteCommand";
import { GetTransitGatewayAttachmentPropagationsCommand } from "./commands/GetTransitGatewayAttachmentPropagationsCommand";
import { GetTransitGatewayRouteTableAssociationsCommand } from "./commands/GetTransitGatewayRouteTableAssociationsCommand";
import { GetTransitGatewayRouteTablePropagationsCommand } from "./commands/GetTransitGatewayRouteTablePropagationsCommand";
import { ImportClientVpnClientCertificateRevocationListCommand } from "./commands/ImportClientVpnClientCertificateRevocationListCommand";
import { ImportImageCommand } from "./commands/ImportImageCommand";
import { ImportInstanceCommand } from "./commands/ImportInstanceCommand";
import { ImportKeyPairCommand } from "./commands/ImportKeyPairCommand";
import { ImportSnapshotCommand } from "./commands/ImportSnapshotCommand";
import { ImportVolumeCommand } from "./commands/ImportVolumeCommand";
import { ModifyCapacityReservationCommand } from "./commands/ModifyCapacityReservationCommand";
import { ModifyClientVpnEndpointCommand } from "./commands/ModifyClientVpnEndpointCommand";
import { ModifyEbsDefaultKmsKeyIdCommand } from "./commands/ModifyEbsDefaultKmsKeyIdCommand";
import { ModifyFleetCommand } from "./commands/ModifyFleetCommand";
import { ModifyFpgaImageAttributeCommand } from "./commands/ModifyFpgaImageAttributeCommand";
import { ModifyHostsCommand } from "./commands/ModifyHostsCommand";
import { ModifyIdFormatCommand } from "./commands/ModifyIdFormatCommand";
import { ModifyIdentityIdFormatCommand } from "./commands/ModifyIdentityIdFormatCommand";
import { ModifyImageAttributeCommand } from "./commands/ModifyImageAttributeCommand";
import { ModifyInstanceAttributeCommand } from "./commands/ModifyInstanceAttributeCommand";
import { ModifyInstanceCapacityReservationAttributesCommand } from "./commands/ModifyInstanceCapacityReservationAttributesCommand";
import { ModifyInstanceCreditSpecificationCommand } from "./commands/ModifyInstanceCreditSpecificationCommand";
import { ModifyInstanceEventStartTimeCommand } from "./commands/ModifyInstanceEventStartTimeCommand";
import { ModifyInstancePlacementCommand } from "./commands/ModifyInstancePlacementCommand";
import { ModifyLaunchTemplateCommand } from "./commands/ModifyLaunchTemplateCommand";
import { ModifyNetworkInterfaceAttributeCommand } from "./commands/ModifyNetworkInterfaceAttributeCommand";
import { ModifyReservedInstancesCommand } from "./commands/ModifyReservedInstancesCommand";
import { ModifySnapshotAttributeCommand } from "./commands/ModifySnapshotAttributeCommand";
import { ModifySpotFleetRequestCommand } from "./commands/ModifySpotFleetRequestCommand";
import { ModifySubnetAttributeCommand } from "./commands/ModifySubnetAttributeCommand";
import { ModifyTrafficMirrorFilterNetworkServicesCommand } from "./commands/ModifyTrafficMirrorFilterNetworkServicesCommand";
import { ModifyTrafficMirrorFilterRuleCommand } from "./commands/ModifyTrafficMirrorFilterRuleCommand";
import { ModifyTrafficMirrorSessionCommand } from "./commands/ModifyTrafficMirrorSessionCommand";
import { ModifyTransitGatewayVpcAttachmentCommand } from "./commands/ModifyTransitGatewayVpcAttachmentCommand";
import { ModifyVolumeAttributeCommand } from "./commands/ModifyVolumeAttributeCommand";
import { ModifyVolumeCommand } from "./commands/ModifyVolumeCommand";
import { ModifyVpcAttributeCommand } from "./commands/ModifyVpcAttributeCommand";
import { ModifyVpcEndpointCommand } from "./commands/ModifyVpcEndpointCommand";
import { ModifyVpcEndpointConnectionNotificationCommand } from "./commands/ModifyVpcEndpointConnectionNotificationCommand";
import { ModifyVpcEndpointServiceConfigurationCommand } from "./commands/ModifyVpcEndpointServiceConfigurationCommand";
import { ModifyVpcEndpointServicePermissionsCommand } from "./commands/ModifyVpcEndpointServicePermissionsCommand";
import { ModifyVpcPeeringConnectionOptionsCommand } from "./commands/ModifyVpcPeeringConnectionOptionsCommand";
import { ModifyVpcTenancyCommand } from "./commands/ModifyVpcTenancyCommand";
import { ModifyVpnConnectionCommand } from "./commands/ModifyVpnConnectionCommand";
import { MonitorInstancesCommand } from "./commands/MonitorInstancesCommand";
import { MoveAddressToVpcCommand } from "./commands/MoveAddressToVpcCommand";
import { ProvisionByoipCidrCommand } from "./commands/ProvisionByoipCidrCommand";
import { PurchaseHostReservationCommand } from "./commands/PurchaseHostReservationCommand";
import { PurchaseReservedInstancesOfferingCommand } from "./commands/PurchaseReservedInstancesOfferingCommand";
import { PurchaseScheduledInstancesCommand } from "./commands/PurchaseScheduledInstancesCommand";
import { RebootInstancesCommand } from "./commands/RebootInstancesCommand";
import { RegisterImageCommand } from "./commands/RegisterImageCommand";
import { RejectTransitGatewayVpcAttachmentCommand } from "./commands/RejectTransitGatewayVpcAttachmentCommand";
import { RejectVpcEndpointConnectionsCommand } from "./commands/RejectVpcEndpointConnectionsCommand";
import { RejectVpcPeeringConnectionCommand } from "./commands/RejectVpcPeeringConnectionCommand";
import { ReleaseAddressCommand } from "./commands/ReleaseAddressCommand";
import { ReleaseHostsCommand } from "./commands/ReleaseHostsCommand";
import { ReplaceIamInstanceProfileAssociationCommand } from "./commands/ReplaceIamInstanceProfileAssociationCommand";
import { ReplaceNetworkAclAssociationCommand } from "./commands/ReplaceNetworkAclAssociationCommand";
import { ReplaceNetworkAclEntryCommand } from "./commands/ReplaceNetworkAclEntryCommand";
import { ReplaceRouteCommand } from "./commands/ReplaceRouteCommand";
import { ReplaceRouteTableAssociationCommand } from "./commands/ReplaceRouteTableAssociationCommand";
import { ReplaceTransitGatewayRouteCommand } from "./commands/ReplaceTransitGatewayRouteCommand";
import { ReportInstanceStatusCommand } from "./commands/ReportInstanceStatusCommand";
import { RequestSpotFleetCommand } from "./commands/RequestSpotFleetCommand";
import { RequestSpotInstancesCommand } from "./commands/RequestSpotInstancesCommand";
import { ResetEbsDefaultKmsKeyIdCommand } from "./commands/ResetEbsDefaultKmsKeyIdCommand";
import { ResetFpgaImageAttributeCommand } from "./commands/ResetFpgaImageAttributeCommand";
import { ResetImageAttributeCommand } from "./commands/ResetImageAttributeCommand";
import { ResetInstanceAttributeCommand } from "./commands/ResetInstanceAttributeCommand";
import { ResetNetworkInterfaceAttributeCommand } from "./commands/ResetNetworkInterfaceAttributeCommand";
import { ResetSnapshotAttributeCommand } from "./commands/ResetSnapshotAttributeCommand";
import { RestoreAddressToClassicCommand } from "./commands/RestoreAddressToClassicCommand";
import { RevokeClientVpnIngressCommand } from "./commands/RevokeClientVpnIngressCommand";
import { RevokeSecurityGroupEgressCommand } from "./commands/RevokeSecurityGroupEgressCommand";
import { RevokeSecurityGroupIngressCommand } from "./commands/RevokeSecurityGroupIngressCommand";
import { RunInstancesCommand } from "./commands/RunInstancesCommand";
import { RunScheduledInstancesCommand } from "./commands/RunScheduledInstancesCommand";
import { SearchTransitGatewayRoutesCommand } from "./commands/SearchTransitGatewayRoutesCommand";
import { StartInstancesCommand } from "./commands/StartInstancesCommand";
import { StopInstancesCommand } from "./commands/StopInstancesCommand";
import { TerminateClientVpnConnectionsCommand } from "./commands/TerminateClientVpnConnectionsCommand";
import { TerminateInstancesCommand } from "./commands/TerminateInstancesCommand";
import { UnassignIpv6AddressesCommand } from "./commands/UnassignIpv6AddressesCommand";
import { UnassignPrivateIpAddressesCommand } from "./commands/UnassignPrivateIpAddressesCommand";
import { UnmonitorInstancesCommand } from "./commands/UnmonitorInstancesCommand";
import { UpdateSecurityGroupRuleDescriptionsEgressCommand } from "./commands/UpdateSecurityGroupRuleDescriptionsEgressCommand";
import { UpdateSecurityGroupRuleDescriptionsIngressCommand } from "./commands/UpdateSecurityGroupRuleDescriptionsIngressCommand";
import { WithdrawByoipCidrCommand } from "./commands/WithdrawByoipCidrCommand";

export class EC2 extends EC2Client {
  /**
   * <p>Accepts the Convertible Reserved Instance exchange quote described in the <a>GetReservedInstancesExchangeQuote</a> call.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public acceptReservedInstancesExchangeQuote(
    args: AcceptReservedInstancesExchangeQuoteInput
  ): Promise<AcceptReservedInstancesExchangeQuoteOutput>;
  public acceptReservedInstancesExchangeQuote(
    args: AcceptReservedInstancesExchangeQuoteInput,
    cb: (err: any, data?: AcceptReservedInstancesExchangeQuoteOutput) => void
  ): void;
  public acceptReservedInstancesExchangeQuote(
    args: AcceptReservedInstancesExchangeQuoteInput,
    cb?: (err: any, data?: AcceptReservedInstancesExchangeQuoteOutput) => void
  ): Promise<AcceptReservedInstancesExchangeQuoteOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AcceptReservedInstancesExchangeQuoteCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Accepts a request to attach a VPC to a transit gateway.</p> <p>The VPC attachment must be in the <code>pendingAcceptance</code> state. Use <a>DescribeTransitGatewayVpcAttachments</a> to view your pending VPC attachment requests. Use <a>RejectTransitGatewayVpcAttachment</a> to reject a VPC attachment request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public acceptTransitGatewayVpcAttachment(
    args: AcceptTransitGatewayVpcAttachmentInput
  ): Promise<AcceptTransitGatewayVpcAttachmentOutput>;
  public acceptTransitGatewayVpcAttachment(
    args: AcceptTransitGatewayVpcAttachmentInput,
    cb: (err: any, data?: AcceptTransitGatewayVpcAttachmentOutput) => void
  ): void;
  public acceptTransitGatewayVpcAttachment(
    args: AcceptTransitGatewayVpcAttachmentInput,
    cb?: (err: any, data?: AcceptTransitGatewayVpcAttachmentOutput) => void
  ): Promise<AcceptTransitGatewayVpcAttachmentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AcceptTransitGatewayVpcAttachmentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Accepts one or more interface VPC endpoint connection requests to your VPC endpoint service.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public acceptVpcEndpointConnections(
    args: AcceptVpcEndpointConnectionsInput
  ): Promise<AcceptVpcEndpointConnectionsOutput>;
  public acceptVpcEndpointConnections(
    args: AcceptVpcEndpointConnectionsInput,
    cb: (err: any, data?: AcceptVpcEndpointConnectionsOutput) => void
  ): void;
  public acceptVpcEndpointConnections(
    args: AcceptVpcEndpointConnectionsInput,
    cb?: (err: any, data?: AcceptVpcEndpointConnectionsOutput) => void
  ): Promise<AcceptVpcEndpointConnectionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AcceptVpcEndpointConnectionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Accept a VPC peering connection request. To accept a request, the VPC peering connection must be in the <code>pending-acceptance</code> state, and you must be the owner of the peer VPC. Use <a>DescribeVpcPeeringConnections</a> to view your outstanding VPC peering connection requests.</p> <p>For an inter-Region VPC peering connection request, you must accept the VPC peering connection in the Region of the accepter VPC.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public acceptVpcPeeringConnection(
    args: AcceptVpcPeeringConnectionInput
  ): Promise<AcceptVpcPeeringConnectionOutput>;
  public acceptVpcPeeringConnection(
    args: AcceptVpcPeeringConnectionInput,
    cb: (err: any, data?: AcceptVpcPeeringConnectionOutput) => void
  ): void;
  public acceptVpcPeeringConnection(
    args: AcceptVpcPeeringConnectionInput,
    cb?: (err: any, data?: AcceptVpcPeeringConnectionOutput) => void
  ): Promise<AcceptVpcPeeringConnectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AcceptVpcPeeringConnectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Advertises an IPv4 address range that is provisioned for use with your AWS resources through bring your own IP addresses (BYOIP).</p> <p>You can perform this operation at most once every 10 seconds, even if you specify different address ranges each time.</p> <p>We recommend that you stop advertising the BYOIP CIDR from other locations when you advertise it from AWS. To minimize down time, you can configure your AWS resources to use an address from a BYOIP CIDR before it is advertised, and then simultaneously stop advertising it from the current location and start advertising it through AWS.</p> <p>It can take a few minutes before traffic to the specified addresses starts routing to AWS because of BGP propagation delays.</p> <p>To stop advertising the BYOIP CIDR, use <a>WithdrawByoipCidr</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public advertiseByoipCidr(
    args: AdvertiseByoipCidrInput
  ): Promise<AdvertiseByoipCidrOutput>;
  public advertiseByoipCidr(
    args: AdvertiseByoipCidrInput,
    cb: (err: any, data?: AdvertiseByoipCidrOutput) => void
  ): void;
  public advertiseByoipCidr(
    args: AdvertiseByoipCidrInput,
    cb?: (err: any, data?: AdvertiseByoipCidrOutput) => void
  ): Promise<AdvertiseByoipCidrOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AdvertiseByoipCidrCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Allocates an Elastic IP address to your AWS account. After you allocate the Elastic IP address you can associate it with an instance or network interface. After you release an Elastic IP address, it is released to the IP address pool and can be allocated to a different AWS account.</p> <p>You can allocate an Elastic IP address from an address pool owned by AWS or from an address pool created from a public IPv4 address range that you have brought to AWS for use with your AWS resources using bring your own IP addresses (BYOIP). For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>[EC2-VPC] If you release an Elastic IP address, you might be able to recover it. You cannot recover an Elastic IP address that you released after it is allocated to another AWS account. You cannot recover an Elastic IP address for EC2-Classic. To attempt to recover an Elastic IP address that you released, specify it in this operation.</p> <p>An Elastic IP address is for use either in the EC2-Classic platform or in a VPC. By default, you can allocate 5 Elastic IP addresses for EC2-Classic per Region and 5 Elastic IP addresses for EC2-VPC per Region.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public allocateAddress(
    args: AllocateAddressInput
  ): Promise<AllocateAddressOutput>;
  public allocateAddress(
    args: AllocateAddressInput,
    cb: (err: any, data?: AllocateAddressOutput) => void
  ): void;
  public allocateAddress(
    args: AllocateAddressInput,
    cb?: (err: any, data?: AllocateAddressOutput) => void
  ): Promise<AllocateAddressOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AllocateAddressCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Allocates a Dedicated Host to your account. At a minimum, specify the instance size type, Availability Zone, and quantity of hosts to allocate.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public allocateHosts(args: AllocateHostsInput): Promise<AllocateHostsOutput>;
  public allocateHosts(
    args: AllocateHostsInput,
    cb: (err: any, data?: AllocateHostsOutput) => void
  ): void;
  public allocateHosts(
    args: AllocateHostsInput,
    cb?: (err: any, data?: AllocateHostsOutput) => void
  ): Promise<AllocateHostsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AllocateHostsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Applies a security group to the association between the target network and the Client VPN endpoint. This action replaces the existing security groups with the specified security groups.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public applySecurityGroupsToClientVpnTargetNetwork(
    args: ApplySecurityGroupsToClientVpnTargetNetworkInput
  ): Promise<ApplySecurityGroupsToClientVpnTargetNetworkOutput>;
  public applySecurityGroupsToClientVpnTargetNetwork(
    args: ApplySecurityGroupsToClientVpnTargetNetworkInput,
    cb: (
      err: any,
      data?: ApplySecurityGroupsToClientVpnTargetNetworkOutput
    ) => void
  ): void;
  public applySecurityGroupsToClientVpnTargetNetwork(
    args: ApplySecurityGroupsToClientVpnTargetNetworkInput,
    cb?: (
      err: any,
      data?: ApplySecurityGroupsToClientVpnTargetNetworkOutput
    ) => void
  ): Promise<ApplySecurityGroupsToClientVpnTargetNetworkOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ApplySecurityGroupsToClientVpnTargetNetworkCommand(
      args
    );
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Assigns one or more IPv6 addresses to the specified network interface. You can specify one or more specific IPv6 addresses, or you can specify the number of IPv6 addresses to be automatically assigned from within the subnet's IPv6 CIDR block range. You can assign as many IPv6 addresses to a network interface as you can assign private IPv4 addresses, and the limit varies per instance type. For information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI">IP Addresses Per Network Interface Per Instance Type</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public assignIpv6Addresses(
    args: AssignIpv6AddressesInput
  ): Promise<AssignIpv6AddressesOutput>;
  public assignIpv6Addresses(
    args: AssignIpv6AddressesInput,
    cb: (err: any, data?: AssignIpv6AddressesOutput) => void
  ): void;
  public assignIpv6Addresses(
    args: AssignIpv6AddressesInput,
    cb?: (err: any, data?: AssignIpv6AddressesOutput) => void
  ): Promise<AssignIpv6AddressesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssignIpv6AddressesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Assigns one or more secondary private IP addresses to the specified network interface.</p> <p>You can specify one or more specific secondary IP addresses, or you can specify the number of secondary IP addresses to be automatically assigned within the subnet's CIDR block range. The number of secondary IP addresses that you can assign to an instance varies by instance type. For information about instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Types</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. For more information about Elastic IP addresses, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>When you move a secondary private IP address to another network interface, any Elastic IP address that is associated with the IP address is also moved.</p> <p>Remapping an IP address is an asynchronous operation. When you move an IP address from one network interface to another, check <code>network/interfaces/macs/mac/local-ipv4s</code> in the instance metadata to confirm that the remapping is complete.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public assignPrivateIpAddresses(
    args: AssignPrivateIpAddressesInput
  ): Promise<AssignPrivateIpAddressesOutput>;
  public assignPrivateIpAddresses(
    args: AssignPrivateIpAddressesInput,
    cb: (err: any, data?: AssignPrivateIpAddressesOutput) => void
  ): void;
  public assignPrivateIpAddresses(
    args: AssignPrivateIpAddressesInput,
    cb?: (err: any, data?: AssignPrivateIpAddressesOutput) => void
  ): Promise<AssignPrivateIpAddressesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssignPrivateIpAddressesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates an Elastic IP address with an instance or a network interface. Before you can use an Elastic IP address, you must allocate it to your account.</p> <p>An Elastic IP address is for use in either the EC2-Classic platform or in a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>[EC2-Classic, VPC in an EC2-VPC-only account] If the Elastic IP address is already associated with a different instance, it is disassociated from that instance and associated with the specified instance. If you associate an Elastic IP address with an instance that has an existing Elastic IP address, the existing address is disassociated from the instance, but remains allocated to your account.</p> <p>[VPC in an EC2-Classic account] If you don't specify a private IP address, the Elastic IP address is associated with the primary IP address. If the Elastic IP address is already associated with a different instance or a network interface, you get an error unless you allow reassociation. You cannot associate an Elastic IP address with an instance or network interface that has an existing Elastic IP address.</p> <important> <p>This is an idempotent operation. If you perform the operation more than once, Amazon EC2 doesn't return an error, and you may be charged for each time the Elastic IP address is remapped to the same instance. For more information, see the <i>Elastic IP Addresses</i> section of <a href="http://aws.amazon.com/ec2/pricing/">Amazon EC2 Pricing</a>.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateAddress(
    args: AssociateAddressInput
  ): Promise<AssociateAddressOutput>;
  public associateAddress(
    args: AssociateAddressInput,
    cb: (err: any, data?: AssociateAddressOutput) => void
  ): void;
  public associateAddress(
    args: AssociateAddressInput,
    cb?: (err: any, data?: AssociateAddressOutput) => void
  ): Promise<AssociateAddressOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateAddressCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates a target network with a Client VPN endpoint. A target network is a subnet in a VPC. You can associate multiple subnets from the same VPC with a Client VPN endpoint. You can associate only one subnet in each Availability Zone. We recommend that you associate at least two subnets to provide Availability Zone redundancy.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateClientVpnTargetNetwork(
    args: AssociateClientVpnTargetNetworkInput
  ): Promise<AssociateClientVpnTargetNetworkOutput>;
  public associateClientVpnTargetNetwork(
    args: AssociateClientVpnTargetNetworkInput,
    cb: (err: any, data?: AssociateClientVpnTargetNetworkOutput) => void
  ): void;
  public associateClientVpnTargetNetwork(
    args: AssociateClientVpnTargetNetworkInput,
    cb?: (err: any, data?: AssociateClientVpnTargetNetworkOutput) => void
  ): Promise<AssociateClientVpnTargetNetworkOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateClientVpnTargetNetworkCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates a set of DHCP options (that you've previously created) with the specified VPC, or associates no DHCP options with the VPC.</p> <p>After you associate the options with the VPC, any existing instances and all new instances that you launch in that VPC use the options. You don't need to restart or relaunch the instances. They automatically pick up the changes within a few hours, depending on how frequently the instance renews its DHCP lease. You can explicitly renew the lease using the operating system on the instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html">DHCP Options Sets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateDhcpOptions(
    args: AssociateDhcpOptionsInput
  ): Promise<AssociateDhcpOptionsOutput>;
  public associateDhcpOptions(
    args: AssociateDhcpOptionsInput,
    cb: (err: any, data?: AssociateDhcpOptionsOutput) => void
  ): void;
  public associateDhcpOptions(
    args: AssociateDhcpOptionsInput,
    cb?: (err: any, data?: AssociateDhcpOptionsOutput) => void
  ): Promise<AssociateDhcpOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateDhcpOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates an IAM instance profile with a running or stopped instance. You cannot associate more than one IAM instance profile with an instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateIamInstanceProfile(
    args: AssociateIamInstanceProfileInput
  ): Promise<AssociateIamInstanceProfileOutput>;
  public associateIamInstanceProfile(
    args: AssociateIamInstanceProfileInput,
    cb: (err: any, data?: AssociateIamInstanceProfileOutput) => void
  ): void;
  public associateIamInstanceProfile(
    args: AssociateIamInstanceProfileInput,
    cb?: (err: any, data?: AssociateIamInstanceProfileOutput) => void
  ): Promise<AssociateIamInstanceProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateIamInstanceProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates a subnet with a route table. The subnet and route table must be in the same VPC. This association causes traffic originating from the subnet to be routed according to the routes in the route table. The action returns an association ID, which you need in order to disassociate the route table from the subnet later. A route table can be associated with multiple subnets.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route Tables</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateRouteTable(
    args: AssociateRouteTableInput
  ): Promise<AssociateRouteTableOutput>;
  public associateRouteTable(
    args: AssociateRouteTableInput,
    cb: (err: any, data?: AssociateRouteTableOutput) => void
  ): void;
  public associateRouteTable(
    args: AssociateRouteTableInput,
    cb?: (err: any, data?: AssociateRouteTableOutput) => void
  ): Promise<AssociateRouteTableOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateRouteTableCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates a CIDR block with your subnet. You can only associate a single IPv6 CIDR block with your subnet. An IPv6 CIDR block must have a prefix length of /64.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateSubnetCidrBlock(
    args: AssociateSubnetCidrBlockInput
  ): Promise<AssociateSubnetCidrBlockOutput>;
  public associateSubnetCidrBlock(
    args: AssociateSubnetCidrBlockInput,
    cb: (err: any, data?: AssociateSubnetCidrBlockOutput) => void
  ): void;
  public associateSubnetCidrBlock(
    args: AssociateSubnetCidrBlockInput,
    cb?: (err: any, data?: AssociateSubnetCidrBlockOutput) => void
  ): Promise<AssociateSubnetCidrBlockOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateSubnetCidrBlockCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates the specified attachment with the specified transit gateway route table. You can associate only one route table with an attachment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateTransitGatewayRouteTable(
    args: AssociateTransitGatewayRouteTableInput
  ): Promise<AssociateTransitGatewayRouteTableOutput>;
  public associateTransitGatewayRouteTable(
    args: AssociateTransitGatewayRouteTableInput,
    cb: (err: any, data?: AssociateTransitGatewayRouteTableOutput) => void
  ): void;
  public associateTransitGatewayRouteTable(
    args: AssociateTransitGatewayRouteTableInput,
    cb?: (err: any, data?: AssociateTransitGatewayRouteTableOutput) => void
  ): Promise<AssociateTransitGatewayRouteTableOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateTransitGatewayRouteTableCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates a CIDR block with your VPC. You can associate a secondary IPv4 CIDR block, or you can associate an Amazon-provided IPv6 CIDR block. The IPv6 CIDR block size is fixed at /56.</p> <p>For more information about associating CIDR blocks with your VPC and applicable restrictions, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html#VPC_Sizing">VPC and Subnet Sizing</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateVpcCidrBlock(
    args: AssociateVpcCidrBlockInput
  ): Promise<AssociateVpcCidrBlockOutput>;
  public associateVpcCidrBlock(
    args: AssociateVpcCidrBlockInput,
    cb: (err: any, data?: AssociateVpcCidrBlockOutput) => void
  ): void;
  public associateVpcCidrBlock(
    args: AssociateVpcCidrBlockInput,
    cb?: (err: any, data?: AssociateVpcCidrBlockOutput) => void
  ): Promise<AssociateVpcCidrBlockOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateVpcCidrBlockCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Links an EC2-Classic instance to a ClassicLink-enabled VPC through one or more of the VPC's security groups. You cannot link an EC2-Classic instance to more than one VPC at a time. You can only link an instance that's in the <code>running</code> state. An instance is automatically unlinked from a VPC when it's stopped - you can link it to the VPC again when you restart it.</p> <p>After you've linked an instance, you cannot change the VPC security groups that are associated with it. To change the security groups, you must first unlink the instance, and then link it again.</p> <p>Linking your instance to a VPC is sometimes referred to as <i>attaching</i> your instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public attachClassicLinkVpc(
    args: AttachClassicLinkVpcInput
  ): Promise<AttachClassicLinkVpcOutput>;
  public attachClassicLinkVpc(
    args: AttachClassicLinkVpcInput,
    cb: (err: any, data?: AttachClassicLinkVpcOutput) => void
  ): void;
  public attachClassicLinkVpc(
    args: AttachClassicLinkVpcInput,
    cb?: (err: any, data?: AttachClassicLinkVpcOutput) => void
  ): Promise<AttachClassicLinkVpcOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AttachClassicLinkVpcCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attaches an internet gateway to a VPC, enabling connectivity between the internet and the VPC. For more information about your VPC and internet gateway, see the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/">Amazon Virtual Private Cloud User Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public attachInternetGateway(
    args: AttachInternetGatewayInput
  ): Promise<AttachInternetGatewayOutput>;
  public attachInternetGateway(
    args: AttachInternetGatewayInput,
    cb: (err: any, data?: AttachInternetGatewayOutput) => void
  ): void;
  public attachInternetGateway(
    args: AttachInternetGatewayInput,
    cb?: (err: any, data?: AttachInternetGatewayOutput) => void
  ): Promise<AttachInternetGatewayOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AttachInternetGatewayCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attaches a network interface to an instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public attachNetworkInterface(
    args: AttachNetworkInterfaceInput
  ): Promise<AttachNetworkInterfaceOutput>;
  public attachNetworkInterface(
    args: AttachNetworkInterfaceInput,
    cb: (err: any, data?: AttachNetworkInterfaceOutput) => void
  ): void;
  public attachNetworkInterface(
    args: AttachNetworkInterfaceInput,
    cb?: (err: any, data?: AttachNetworkInterfaceOutput) => void
  ): Promise<AttachNetworkInterfaceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AttachNetworkInterfaceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attaches an EBS volume to a running or stopped instance and exposes it to the instance with the specified device name.</p> <p>Encrypted EBS volumes must be attached to instances that support Amazon EBS encryption. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>After you attach an EBS volume, you must make it available. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-using-volumes.html">Making an EBS Volume Available For Use</a>.</p> <p>If a volume has an AWS Marketplace product code:</p> <ul> <li> <p>The volume can be attached only to a stopped instance.</p> </li> <li> <p>AWS Marketplace product codes are copied from the volume to the instance.</p> </li> <li> <p>You must be subscribed to the product.</p> </li> <li> <p>The instance type and operating system of the instance must support the product. For example, you can't detach a volume from a Windows instance and attach it to a Linux instance.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-attaching-volume.html">Attaching Amazon EBS Volumes</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public attachVolume(args: AttachVolumeInput): Promise<AttachVolumeOutput>;
  public attachVolume(
    args: AttachVolumeInput,
    cb: (err: any, data?: AttachVolumeOutput) => void
  ): void;
  public attachVolume(
    args: AttachVolumeInput,
    cb?: (err: any, data?: AttachVolumeOutput) => void
  ): Promise<AttachVolumeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AttachVolumeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attaches a virtual private gateway to a VPC. You can attach one virtual private gateway to one VPC at a time.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public attachVpnGateway(
    args: AttachVpnGatewayInput
  ): Promise<AttachVpnGatewayOutput>;
  public attachVpnGateway(
    args: AttachVpnGatewayInput,
    cb: (err: any, data?: AttachVpnGatewayOutput) => void
  ): void;
  public attachVpnGateway(
    args: AttachVpnGatewayInput,
    cb?: (err: any, data?: AttachVpnGatewayOutput) => void
  ): Promise<AttachVpnGatewayOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AttachVpnGatewayCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds an ingress authorization rule to a Client VPN endpoint. Ingress authorization rules act as firewall rules that grant access to networks. You must configure ingress authorization rules to enable clients to access resources in AWS or on-premises networks.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public authorizeClientVpnIngress(
    args: AuthorizeClientVpnIngressInput
  ): Promise<AuthorizeClientVpnIngressOutput>;
  public authorizeClientVpnIngress(
    args: AuthorizeClientVpnIngressInput,
    cb: (err: any, data?: AuthorizeClientVpnIngressOutput) => void
  ): void;
  public authorizeClientVpnIngress(
    args: AuthorizeClientVpnIngressInput,
    cb?: (err: any, data?: AuthorizeClientVpnIngressOutput) => void
  ): Promise<AuthorizeClientVpnIngressOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AuthorizeClientVpnIngressCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>[VPC only] Adds the specified egress rules to a security group for use with a VPC.</p> <p>An outbound rule permits instances to send traffic to the specified IPv4 or IPv6 CIDR address ranges, or to the instances associated with the specified destination security groups.</p> <p>You specify a protocol for each rule (for example, TCP). For the TCP and UDP protocols, you must also specify the destination port or port range. For the ICMP protocol, you must also specify the ICMP type and code. You can use -1 for the type or code to mean all types or all codes.</p> <p>Rule changes are propagated to affected instances as quickly as possible. However, a small delay might occur.</p> <p>For more information about VPC security group limits, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC Limits</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public authorizeSecurityGroupEgress(
    args: AuthorizeSecurityGroupEgressInput
  ): Promise<AuthorizeSecurityGroupEgressOutput>;
  public authorizeSecurityGroupEgress(
    args: AuthorizeSecurityGroupEgressInput,
    cb: (err: any, data?: AuthorizeSecurityGroupEgressOutput) => void
  ): void;
  public authorizeSecurityGroupEgress(
    args: AuthorizeSecurityGroupEgressInput,
    cb?: (err: any, data?: AuthorizeSecurityGroupEgressOutput) => void
  ): Promise<AuthorizeSecurityGroupEgressOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AuthorizeSecurityGroupEgressCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds the specified ingress rules to a security group.</p> <p>An inbound rule permits instances to receive traffic from the specified IPv4 or IPv6 CIDR address ranges, or from the instances associated with the specified destination security groups.</p> <p>You specify a protocol for each rule (for example, TCP). For TCP and UDP, you must also specify the destination port or port range. For ICMP/ICMPv6, you must also specify the ICMP/ICMPv6 type and code. You can use -1 to mean all types or all codes.</p> <p>Rule changes are propagated to instances within the security group as quickly as possible. However, a small delay might occur.</p> <p>For more information about VPC security group limits, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC Limits</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public authorizeSecurityGroupIngress(
    args: AuthorizeSecurityGroupIngressInput
  ): Promise<AuthorizeSecurityGroupIngressOutput>;
  public authorizeSecurityGroupIngress(
    args: AuthorizeSecurityGroupIngressInput,
    cb: (err: any, data?: AuthorizeSecurityGroupIngressOutput) => void
  ): void;
  public authorizeSecurityGroupIngress(
    args: AuthorizeSecurityGroupIngressInput,
    cb?: (err: any, data?: AuthorizeSecurityGroupIngressOutput) => void
  ): Promise<AuthorizeSecurityGroupIngressOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AuthorizeSecurityGroupIngressCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Bundles an Amazon instance store-backed Windows instance.</p> <p>During bundling, only the root device volume (C:\) is bundled. Data on other instance store volumes is not preserved.</p> <note> <p>This action is not applicable for Linux/Unix instances or Windows instances that are backed by Amazon EBS.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public bundleInstance(
    args: BundleInstanceInput
  ): Promise<BundleInstanceOutput>;
  public bundleInstance(
    args: BundleInstanceInput,
    cb: (err: any, data?: BundleInstanceOutput) => void
  ): void;
  public bundleInstance(
    args: BundleInstanceInput,
    cb?: (err: any, data?: BundleInstanceOutput) => void
  ): Promise<BundleInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BundleInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Cancels a bundling operation for an instance store-backed Windows instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelBundleTask(
    args: CancelBundleTaskInput
  ): Promise<CancelBundleTaskOutput>;
  public cancelBundleTask(
    args: CancelBundleTaskInput,
    cb: (err: any, data?: CancelBundleTaskOutput) => void
  ): void;
  public cancelBundleTask(
    args: CancelBundleTaskInput,
    cb?: (err: any, data?: CancelBundleTaskOutput) => void
  ): Promise<CancelBundleTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelBundleTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Cancels the specified Capacity Reservation, releases the reserved capacity, and changes the Capacity Reservation's state to <code>cancelled</code>.</p> <p>Instances running in the reserved capacity continue running until you stop them. Stopped instances that target the Capacity Reservation can no longer launch. Modify these instances to either target a different Capacity Reservation, launch On-Demand Instance capacity, or run in any open Capacity Reservation that has matching attributes and sufficient capacity.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelCapacityReservation(
    args: CancelCapacityReservationInput
  ): Promise<CancelCapacityReservationOutput>;
  public cancelCapacityReservation(
    args: CancelCapacityReservationInput,
    cb: (err: any, data?: CancelCapacityReservationOutput) => void
  ): void;
  public cancelCapacityReservation(
    args: CancelCapacityReservationInput,
    cb?: (err: any, data?: CancelCapacityReservationOutput) => void
  ): Promise<CancelCapacityReservationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelCapacityReservationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Cancels an active conversion task. The task can be the import of an instance or volume. The action removes all artifacts of the conversion, including a partially uploaded volume or instance. If the conversion is complete or is in the process of transferring the final disk image, the command fails and returns an exception.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/CommandLineReference/ec2-cli-vmimport-export.html">Importing a Virtual Machine Using the Amazon EC2 CLI</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelConversionTask(
    args: CancelConversionTaskInput
  ): Promise<CancelConversionTaskOutput>;
  public cancelConversionTask(
    args: CancelConversionTaskInput,
    cb: (err: any, data?: CancelConversionTaskOutput) => void
  ): void;
  public cancelConversionTask(
    args: CancelConversionTaskInput,
    cb?: (err: any, data?: CancelConversionTaskOutput) => void
  ): Promise<CancelConversionTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelConversionTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Cancels an active export task. The request removes all artifacts of the export, including any partially-created Amazon S3 objects. If the export task is complete or is in the process of transferring the final disk image, the command fails and returns an error.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelExportTask(
    args: CancelExportTaskInput
  ): Promise<CancelExportTaskOutput>;
  public cancelExportTask(
    args: CancelExportTaskInput,
    cb: (err: any, data?: CancelExportTaskOutput) => void
  ): void;
  public cancelExportTask(
    args: CancelExportTaskInput,
    cb?: (err: any, data?: CancelExportTaskOutput) => void
  ): Promise<CancelExportTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelExportTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Cancels an in-process import virtual machine or import snapshot task.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelImportTask(
    args: CancelImportTaskInput
  ): Promise<CancelImportTaskOutput>;
  public cancelImportTask(
    args: CancelImportTaskInput,
    cb: (err: any, data?: CancelImportTaskOutput) => void
  ): void;
  public cancelImportTask(
    args: CancelImportTaskInput,
    cb?: (err: any, data?: CancelImportTaskOutput) => void
  ): Promise<CancelImportTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelImportTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Cancels the specified Reserved Instance listing in the Reserved Instance Marketplace.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelReservedInstancesListing(
    args: CancelReservedInstancesListingInput
  ): Promise<CancelReservedInstancesListingOutput>;
  public cancelReservedInstancesListing(
    args: CancelReservedInstancesListingInput,
    cb: (err: any, data?: CancelReservedInstancesListingOutput) => void
  ): void;
  public cancelReservedInstancesListing(
    args: CancelReservedInstancesListingInput,
    cb?: (err: any, data?: CancelReservedInstancesListingOutput) => void
  ): Promise<CancelReservedInstancesListingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelReservedInstancesListingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Cancels the specified Spot Fleet requests.</p> <p>After you cancel a Spot Fleet request, the Spot Fleet launches no new Spot Instances. You must specify whether the Spot Fleet should also terminate its Spot Instances. If you terminate the instances, the Spot Fleet request enters the <code>cancelled_terminating</code> state. Otherwise, the Spot Fleet request enters the <code>cancelled_running</code> state and the instances continue to run until they are interrupted or you terminate them manually.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelSpotFleetRequests(
    args: CancelSpotFleetRequestsInput
  ): Promise<CancelSpotFleetRequestsOutput>;
  public cancelSpotFleetRequests(
    args: CancelSpotFleetRequestsInput,
    cb: (err: any, data?: CancelSpotFleetRequestsOutput) => void
  ): void;
  public cancelSpotFleetRequests(
    args: CancelSpotFleetRequestsInput,
    cb?: (err: any, data?: CancelSpotFleetRequestsOutput) => void
  ): Promise<CancelSpotFleetRequestsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelSpotFleetRequestsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Cancels one or more Spot Instance requests.</p> <important> <p>Canceling a Spot Instance request does not terminate running Spot Instances associated with the request.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelSpotInstanceRequests(
    args: CancelSpotInstanceRequestsInput
  ): Promise<CancelSpotInstanceRequestsOutput>;
  public cancelSpotInstanceRequests(
    args: CancelSpotInstanceRequestsInput,
    cb: (err: any, data?: CancelSpotInstanceRequestsOutput) => void
  ): void;
  public cancelSpotInstanceRequests(
    args: CancelSpotInstanceRequestsInput,
    cb?: (err: any, data?: CancelSpotInstanceRequestsOutput) => void
  ): Promise<CancelSpotInstanceRequestsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelSpotInstanceRequestsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Determines whether a product code is associated with an instance. This action can only be used by the owner of the product code. It is useful when a product code owner must verify whether another user's instance is eligible for support.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public confirmProductInstance(
    args: ConfirmProductInstanceInput
  ): Promise<ConfirmProductInstanceOutput>;
  public confirmProductInstance(
    args: ConfirmProductInstanceInput,
    cb: (err: any, data?: ConfirmProductInstanceOutput) => void
  ): void;
  public confirmProductInstance(
    args: ConfirmProductInstanceInput,
    cb?: (err: any, data?: ConfirmProductInstanceOutput) => void
  ): Promise<ConfirmProductInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ConfirmProductInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Copies the specified Amazon FPGA Image (AFI) to the current Region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public copyFpgaImage(args: CopyFpgaImageInput): Promise<CopyFpgaImageOutput>;
  public copyFpgaImage(
    args: CopyFpgaImageInput,
    cb: (err: any, data?: CopyFpgaImageOutput) => void
  ): void;
  public copyFpgaImage(
    args: CopyFpgaImageInput,
    cb?: (err: any, data?: CopyFpgaImageOutput) => void
  ): Promise<CopyFpgaImageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CopyFpgaImageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Initiates the copy of an AMI from the specified source Region to the current Region. You specify the destination Region by using its endpoint when making the request.</p> <p>Copies of encrypted backing snapshots for the AMI are encrypted. Copies of unencrypted backing snapshots remain unencrypted, unless you set <code>Encrypted</code> during the copy operation. You cannot create an unencrypted copy of an encrypted backing snapshot.</p> <p>For more information about the prerequisites and limits when copying an AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/CopyingAMIs.html">Copying an AMI</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public copyImage(args: CopyImageInput): Promise<CopyImageOutput>;
  public copyImage(
    args: CopyImageInput,
    cb: (err: any, data?: CopyImageOutput) => void
  ): void;
  public copyImage(
    args: CopyImageInput,
    cb?: (err: any, data?: CopyImageOutput) => void
  ): Promise<CopyImageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CopyImageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Copies a point-in-time snapshot of an EBS volume and stores it in Amazon S3. You can copy the snapshot within the same Region or from one Region to another. You can use the snapshot to create EBS volumes or Amazon Machine Images (AMIs).</p> <p>Copies of encrypted EBS snapshots remain encrypted. Copies of unencrypted snapshots remain unencrypted, unless you enable encryption for the snapshot copy operation. By default, encrypted snapshot copies use the default AWS Key Management Service (AWS KMS) customer master key (CMK); however, you can specify a different CMK.</p> <p>To copy an encrypted snapshot that has been shared from another account, you must have permissions for the CMK used to encrypt the snapshot.</p> <p>Snapshots created by copying another snapshot have an arbitrary volume ID that should not be used for any purpose.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-copy-snapshot.html">Copying an Amazon EBS Snapshot</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public copySnapshot(args: CopySnapshotInput): Promise<CopySnapshotOutput>;
  public copySnapshot(
    args: CopySnapshotInput,
    cb: (err: any, data?: CopySnapshotOutput) => void
  ): void;
  public copySnapshot(
    args: CopySnapshotInput,
    cb?: (err: any, data?: CopySnapshotOutput) => void
  ): Promise<CopySnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CopySnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new Capacity Reservation with the specified attributes.</p> <p>Capacity Reservations enable you to reserve capacity for your Amazon EC2 instances in a specific Availability Zone for any duration. This gives you the flexibility to selectively add capacity reservations and still get the Regional RI discounts for that usage. By creating Capacity Reservations, you ensure that you always have access to Amazon EC2 capacity when you need it, for as long as you need it. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html">Capacity Reservations</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>Your request to create a Capacity Reservation could fail if Amazon EC2 does not have sufficient capacity to fulfill the request. If your request fails due to Amazon EC2 capacity constraints, either try again at a later time, try in a different Availability Zone, or request a smaller capacity reservation. If your application is flexible across instance types and sizes, try to create a Capacity Reservation with different instance attributes.</p> <p>Your request could also fail if the requested quantity exceeds your On-Demand Instance limit for the selected instance type. If your request fails due to limit constraints, increase your On-Demand Instance limit for the required instance type and try again. For more information about increasing your instance limits, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html">Amazon EC2 Service Limits</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCapacityReservation(
    args: CreateCapacityReservationInput
  ): Promise<CreateCapacityReservationOutput>;
  public createCapacityReservation(
    args: CreateCapacityReservationInput,
    cb: (err: any, data?: CreateCapacityReservationOutput) => void
  ): void;
  public createCapacityReservation(
    args: CreateCapacityReservationInput,
    cb?: (err: any, data?: CreateCapacityReservationOutput) => void
  ): Promise<CreateCapacityReservationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateCapacityReservationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a Client VPN endpoint. A Client VPN endpoint is the resource you create and configure to enable and manage client VPN sessions. It is the destination endpoint at which all client VPN sessions are terminated.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createClientVpnEndpoint(
    args: CreateClientVpnEndpointInput
  ): Promise<CreateClientVpnEndpointOutput>;
  public createClientVpnEndpoint(
    args: CreateClientVpnEndpointInput,
    cb: (err: any, data?: CreateClientVpnEndpointOutput) => void
  ): void;
  public createClientVpnEndpoint(
    args: CreateClientVpnEndpointInput,
    cb?: (err: any, data?: CreateClientVpnEndpointOutput) => void
  ): Promise<CreateClientVpnEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateClientVpnEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds a route to a network to a Client VPN endpoint. Each Client VPN endpoint has a route table that describes the available destination network routes. Each route in the route table specifies the path for traﬃc to speciﬁc resources or networks.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createClientVpnRoute(
    args: CreateClientVpnRouteInput
  ): Promise<CreateClientVpnRouteOutput>;
  public createClientVpnRoute(
    args: CreateClientVpnRouteInput,
    cb: (err: any, data?: CreateClientVpnRouteOutput) => void
  ): void;
  public createClientVpnRoute(
    args: CreateClientVpnRouteInput,
    cb?: (err: any, data?: CreateClientVpnRouteOutput) => void
  ): Promise<CreateClientVpnRouteOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateClientVpnRouteCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides information to AWS about your VPN customer gateway device. The customer gateway is the appliance at your end of the VPN connection. (The device on the AWS side of the VPN connection is the virtual private gateway.) You must provide the Internet-routable IP address of the customer gateway's external interface. The IP address must be static and may be behind a device performing network address translation (NAT).</p> <p>For devices that use Border Gateway Protocol (BGP), you can also provide the device's BGP Autonomous System Number (ASN). You can use an existing ASN assigned to your network. If you don't have an ASN already, you can use a private ASN (in the 64512 - 65534 range).</p> <note> <p>Amazon EC2 supports all 2-byte ASN numbers in the range of 1 - 65534, with the exception of 7224, which is reserved in the <code>us-east-1</code> Region, and 9059, which is reserved in the <code>eu-west-1</code> Region.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p> <important> <p>You cannot create more than one customer gateway with the same VPN type, IP address, and BGP ASN parameter values. If you run an identical request more than one time, the first request creates the customer gateway, and subsequent requests return information about the existing customer gateway. The subsequent requests do not create new customer gateway resources.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCustomerGateway(
    args: CreateCustomerGatewayInput
  ): Promise<CreateCustomerGatewayOutput>;
  public createCustomerGateway(
    args: CreateCustomerGatewayInput,
    cb: (err: any, data?: CreateCustomerGatewayOutput) => void
  ): void;
  public createCustomerGateway(
    args: CreateCustomerGatewayInput,
    cb?: (err: any, data?: CreateCustomerGatewayOutput) => void
  ): Promise<CreateCustomerGatewayOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateCustomerGatewayCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a default subnet with a size <code>/20</code> IPv4 CIDR block in the specified Availability Zone in your default VPC. You can have only one default subnet per Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html#create-default-subnet">Creating a Default Subnet</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDefaultSubnet(
    args: CreateDefaultSubnetInput
  ): Promise<CreateDefaultSubnetOutput>;
  public createDefaultSubnet(
    args: CreateDefaultSubnetInput,
    cb: (err: any, data?: CreateDefaultSubnetOutput) => void
  ): void;
  public createDefaultSubnet(
    args: CreateDefaultSubnetInput,
    cb?: (err: any, data?: CreateDefaultSubnetOutput) => void
  ): Promise<CreateDefaultSubnetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDefaultSubnetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a default VPC with a size <code>/16</code> IPv4 CIDR block and a default subnet in each Availability Zone. For more information about the components of a default VPC, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html">Default VPC and Default Subnets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>. You cannot specify the components of the default VPC yourself.</p> <p>If you deleted your previous default VPC, you can create a default VPC. You cannot have more than one default VPC per Region.</p> <p>If your account supports EC2-Classic, you cannot use this action to create a default VPC in a Region that supports EC2-Classic. If you want a default VPC in a Region that supports EC2-Classic, see "I really want a default VPC for my existing EC2 account. Is that possible?" in the <a href="http://aws.amazon.com/vpc/faqs/#Default_VPCs">Default VPCs FAQ</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDefaultVpc(
    args: CreateDefaultVpcInput
  ): Promise<CreateDefaultVpcOutput>;
  public createDefaultVpc(
    args: CreateDefaultVpcInput,
    cb: (err: any, data?: CreateDefaultVpcOutput) => void
  ): void;
  public createDefaultVpc(
    args: CreateDefaultVpcInput,
    cb?: (err: any, data?: CreateDefaultVpcOutput) => void
  ): Promise<CreateDefaultVpcOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDefaultVpcCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a set of DHCP options for your VPC. After creating the set, you must associate it with the VPC, causing all existing and new instances that you launch in the VPC to use this set of DHCP options. The following are the individual DHCP options you can specify. For more information about the options, see <a href="http://www.ietf.org/rfc/rfc2132.txt">RFC 2132</a>.</p> <ul> <li> <p> <code>domain-name-servers</code> - The IP addresses of up to four domain name servers, or AmazonProvidedDNS. The default DHCP option set specifies AmazonProvidedDNS. If specifying more than one domain name server, specify the IP addresses in a single parameter, separated by commas. To have your instance receive a custom DNS hostname as specified in <code>domain-name</code>, you must set <code>domain-name-servers</code> to a custom DNS server.</p> </li> <li> <p> <code>domain-name</code> - If you're using AmazonProvidedDNS in <code>us-east-1</code>, specify <code>ec2.internal</code>. If you're using AmazonProvidedDNS in another Region, specify <code>region.compute.internal</code> (for example, <code>ap-northeast-1.compute.internal</code>). Otherwise, specify a domain name (for example, <code>MyCompany.com</code>). This value is used to complete unqualified DNS hostnames. <b>Important</b>: Some Linux operating systems accept multiple domain names separated by spaces. However, Windows and other Linux operating systems treat the value as a single domain, which results in unexpected behavior. If your DHCP options set is associated with a VPC that has instances with multiple operating systems, specify only one domain name.</p> </li> <li> <p> <code>ntp-servers</code> - The IP addresses of up to four Network Time Protocol (NTP) servers.</p> </li> <li> <p> <code>netbios-name-servers</code> - The IP addresses of up to four NetBIOS name servers.</p> </li> <li> <p> <code>netbios-node-type</code> - The NetBIOS node type (1, 2, 4, or 8). We recommend that you specify 2 (broadcast and multicast are not currently supported). For more information about these node types, see <a href="http://www.ietf.org/rfc/rfc2132.txt">RFC 2132</a>.</p> </li> </ul> <p>Your VPC automatically starts out with a set of DHCP options that includes only a DNS server that we provide (AmazonProvidedDNS). If you create a set of options, and if your VPC has an internet gateway, make sure to set the <code>domain-name-servers</code> option either to <code>AmazonProvidedDNS</code> or to a domain name server of your choice. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html">DHCP Options Sets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDhcpOptions(
    args: CreateDhcpOptionsInput
  ): Promise<CreateDhcpOptionsOutput>;
  public createDhcpOptions(
    args: CreateDhcpOptionsInput,
    cb: (err: any, data?: CreateDhcpOptionsOutput) => void
  ): void;
  public createDhcpOptions(
    args: CreateDhcpOptionsInput,
    cb?: (err: any, data?: CreateDhcpOptionsOutput) => void
  ): Promise<CreateDhcpOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDhcpOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>[IPv6 only] Creates an egress-only internet gateway for your VPC. An egress-only internet gateway is used to enable outbound communication over IPv6 from instances in your VPC to the internet, and prevents hosts outside of your VPC from initiating an IPv6 connection with your instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createEgressOnlyInternetGateway(
    args: CreateEgressOnlyInternetGatewayInput
  ): Promise<CreateEgressOnlyInternetGatewayOutput>;
  public createEgressOnlyInternetGateway(
    args: CreateEgressOnlyInternetGatewayInput,
    cb: (err: any, data?: CreateEgressOnlyInternetGatewayOutput) => void
  ): void;
  public createEgressOnlyInternetGateway(
    args: CreateEgressOnlyInternetGatewayInput,
    cb?: (err: any, data?: CreateEgressOnlyInternetGatewayOutput) => void
  ): Promise<CreateEgressOnlyInternetGatewayOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateEgressOnlyInternetGatewayCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Launches an EC2 Fleet.</p> <p>You can create a single EC2 Fleet that includes multiple launch specifications that vary by instance type, AMI, Availability Zone, or subnet.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet.html">Launching an EC2 Fleet</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createFleet(args: CreateFleetInput): Promise<CreateFleetOutput>;
  public createFleet(
    args: CreateFleetInput,
    cb: (err: any, data?: CreateFleetOutput) => void
  ): void;
  public createFleet(
    args: CreateFleetInput,
    cb?: (err: any, data?: CreateFleetOutput) => void
  ): Promise<CreateFleetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateFleetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates one or more flow logs to capture information about IP traffic for a specific network interface, subnet, or VPC. </p> <p>Flow log data for a monitored network interface is recorded as flow log records, which are log events consisting of fields that describe the traffic flow. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html#flow-log-records">Flow Log Records</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p> <p>When publishing to CloudWatch Logs, flow log records are published to a log group, and each network interface has a unique log stream in the log group. When publishing to Amazon S3, flow log records for all of the monitored network interfaces are published to a single log file object that is stored in the specified bucket.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html">VPC Flow Logs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createFlowLogs(
    args: CreateFlowLogsInput
  ): Promise<CreateFlowLogsOutput>;
  public createFlowLogs(
    args: CreateFlowLogsInput,
    cb: (err: any, data?: CreateFlowLogsOutput) => void
  ): void;
  public createFlowLogs(
    args: CreateFlowLogsInput,
    cb?: (err: any, data?: CreateFlowLogsOutput) => void
  ): Promise<CreateFlowLogsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateFlowLogsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an Amazon FPGA Image (AFI) from the specified design checkpoint (DCP).</p> <p>The create operation is asynchronous. To verify that the AFI is ready for use, check the output logs.</p> <p>An AFI contains the FPGA bitstream that is ready to download to an FPGA. You can securely deploy an AFI on multiple FPGA-accelerated instances. For more information, see the <a href="https://github.com/aws/aws-fpga/">AWS FPGA Hardware Development Kit</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createFpgaImage(
    args: CreateFpgaImageInput
  ): Promise<CreateFpgaImageOutput>;
  public createFpgaImage(
    args: CreateFpgaImageInput,
    cb: (err: any, data?: CreateFpgaImageOutput) => void
  ): void;
  public createFpgaImage(
    args: CreateFpgaImageInput,
    cb?: (err: any, data?: CreateFpgaImageOutput) => void
  ): Promise<CreateFpgaImageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateFpgaImageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an Amazon EBS-backed AMI from an Amazon EBS-backed instance that is either running or stopped.</p> <p>If you customized your instance with instance store volumes or EBS volumes in addition to the root device volume, the new AMI contains block device mapping information for those volumes. When you launch an instance from this new AMI, the instance automatically launches with those additional volumes.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html">Creating Amazon EBS-Backed Linux AMIs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createImage(args: CreateImageInput): Promise<CreateImageOutput>;
  public createImage(
    args: CreateImageInput,
    cb: (err: any, data?: CreateImageOutput) => void
  ): void;
  public createImage(
    args: CreateImageInput,
    cb?: (err: any, data?: CreateImageOutput) => void
  ): Promise<CreateImageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateImageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Exports a running or stopped instance to an S3 bucket.</p> <p>For information about the supported operating systems, image formats, and known limitations for the types of instances you can export, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport.html">Exporting an Instance as a VM Using VM Import/Export</a> in the <i>VM Import/Export User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createInstanceExportTask(
    args: CreateInstanceExportTaskInput
  ): Promise<CreateInstanceExportTaskOutput>;
  public createInstanceExportTask(
    args: CreateInstanceExportTaskInput,
    cb: (err: any, data?: CreateInstanceExportTaskOutput) => void
  ): void;
  public createInstanceExportTask(
    args: CreateInstanceExportTaskInput,
    cb?: (err: any, data?: CreateInstanceExportTaskOutput) => void
  ): Promise<CreateInstanceExportTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateInstanceExportTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an internet gateway for use with a VPC. After creating the internet gateway, you attach it to a VPC using <a>AttachInternetGateway</a>.</p> <p>For more information about your VPC and internet gateway, see the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/">Amazon Virtual Private Cloud User Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createInternetGateway(
    args: CreateInternetGatewayInput
  ): Promise<CreateInternetGatewayOutput>;
  public createInternetGateway(
    args: CreateInternetGatewayInput,
    cb: (err: any, data?: CreateInternetGatewayOutput) => void
  ): void;
  public createInternetGateway(
    args: CreateInternetGatewayInput,
    cb?: (err: any, data?: CreateInternetGatewayOutput) => void
  ): Promise<CreateInternetGatewayOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateInternetGatewayCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a 2048-bit RSA key pair with the specified name. Amazon EC2 stores the public key and displays the private key for you to save to a file. The private key is returned as an unencrypted PEM encoded PKCS#1 private key. If a key with the specified name already exists, Amazon EC2 returns an error.</p> <p>You can have up to five thousand key pairs per Region.</p> <p>The key pair returned to you is available only in the Region in which you create it. If you prefer, you can create your own key pair using a third-party tool and upload it to any Region using <a>ImportKeyPair</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Key Pairs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createKeyPair(args: CreateKeyPairInput): Promise<CreateKeyPairOutput>;
  public createKeyPair(
    args: CreateKeyPairInput,
    cb: (err: any, data?: CreateKeyPairOutput) => void
  ): void;
  public createKeyPair(
    args: CreateKeyPairInput,
    cb?: (err: any, data?: CreateKeyPairOutput) => void
  ): Promise<CreateKeyPairOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateKeyPairCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a launch template. A launch template contains the parameters to launch an instance. When you launch an instance using <a>RunInstances</a>, you can specify a launch template instead of providing the launch parameters in the request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createLaunchTemplate(
    args: CreateLaunchTemplateInput
  ): Promise<CreateLaunchTemplateOutput>;
  public createLaunchTemplate(
    args: CreateLaunchTemplateInput,
    cb: (err: any, data?: CreateLaunchTemplateOutput) => void
  ): void;
  public createLaunchTemplate(
    args: CreateLaunchTemplateInput,
    cb?: (err: any, data?: CreateLaunchTemplateOutput) => void
  ): Promise<CreateLaunchTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateLaunchTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new version for a launch template. You can specify an existing version of launch template from which to base the new version.</p> <p>Launch template versions are numbered in the order in which they are created. You cannot specify, change, or replace the numbering of launch template versions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createLaunchTemplateVersion(
    args: CreateLaunchTemplateVersionInput
  ): Promise<CreateLaunchTemplateVersionOutput>;
  public createLaunchTemplateVersion(
    args: CreateLaunchTemplateVersionInput,
    cb: (err: any, data?: CreateLaunchTemplateVersionOutput) => void
  ): void;
  public createLaunchTemplateVersion(
    args: CreateLaunchTemplateVersionInput,
    cb?: (err: any, data?: CreateLaunchTemplateVersionOutput) => void
  ): Promise<CreateLaunchTemplateVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateLaunchTemplateVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a NAT gateway in the specified public subnet. This action creates a network interface in the specified subnet with a private IP address from the IP address range of the subnet. Internet-bound traffic from a private subnet can be routed to the NAT gateway, therefore enabling instances in the private subnet to connect to the internet. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">NAT Gateways</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createNatGateway(
    args: CreateNatGatewayInput
  ): Promise<CreateNatGatewayOutput>;
  public createNatGateway(
    args: CreateNatGatewayInput,
    cb: (err: any, data?: CreateNatGatewayOutput) => void
  ): void;
  public createNatGateway(
    args: CreateNatGatewayInput,
    cb?: (err: any, data?: CreateNatGatewayOutput) => void
  ): Promise<CreateNatGatewayOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateNatGatewayCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a network ACL in a VPC. Network ACLs provide an optional layer of security (in addition to security groups) for the instances in your VPC.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createNetworkAcl(
    args: CreateNetworkAclInput
  ): Promise<CreateNetworkAclOutput>;
  public createNetworkAcl(
    args: CreateNetworkAclInput,
    cb: (err: any, data?: CreateNetworkAclOutput) => void
  ): void;
  public createNetworkAcl(
    args: CreateNetworkAclInput,
    cb?: (err: any, data?: CreateNetworkAclOutput) => void
  ): Promise<CreateNetworkAclOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateNetworkAclCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an entry (a rule) in a network ACL with the specified rule number. Each network ACL has a set of numbered ingress rules and a separate set of numbered egress rules. When determining whether a packet should be allowed in or out of a subnet associated with the ACL, we process the entries in the ACL according to the rule numbers, in ascending order. Each network ACL has a set of ingress rules and a separate set of egress rules.</p> <p>We recommend that you leave room between the rule numbers (for example, 100, 110, 120, ...), and not number them one right after the other (for example, 101, 102, 103, ...). This makes it easier to add a rule between existing ones without having to renumber the rules.</p> <p>After you add an entry, you can't modify it; you must either replace it, or create an entry and delete the old one.</p> <p>For more information about network ACLs, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createNetworkAclEntry(
    args: CreateNetworkAclEntryInput
  ): Promise<CreateNetworkAclEntryOutput>;
  public createNetworkAclEntry(
    args: CreateNetworkAclEntryInput,
    cb: (err: any, data?: CreateNetworkAclEntryOutput) => void
  ): void;
  public createNetworkAclEntry(
    args: CreateNetworkAclEntryInput,
    cb?: (err: any, data?: CreateNetworkAclEntryOutput) => void
  ): Promise<CreateNetworkAclEntryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateNetworkAclEntryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a network interface in the specified subnet.</p> <p>For more information about network interfaces, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html">Elastic Network Interfaces</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createNetworkInterface(
    args: CreateNetworkInterfaceInput
  ): Promise<CreateNetworkInterfaceOutput>;
  public createNetworkInterface(
    args: CreateNetworkInterfaceInput,
    cb: (err: any, data?: CreateNetworkInterfaceOutput) => void
  ): void;
  public createNetworkInterface(
    args: CreateNetworkInterfaceInput,
    cb?: (err: any, data?: CreateNetworkInterfaceOutput) => void
  ): Promise<CreateNetworkInterfaceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateNetworkInterfaceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Grants an AWS-authorized account permission to attach the specified network interface to an instance in their account.</p> <p>You can grant permission to a single AWS account only, and only one account at a time.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createNetworkInterfacePermission(
    args: CreateNetworkInterfacePermissionInput
  ): Promise<CreateNetworkInterfacePermissionOutput>;
  public createNetworkInterfacePermission(
    args: CreateNetworkInterfacePermissionInput,
    cb: (err: any, data?: CreateNetworkInterfacePermissionOutput) => void
  ): void;
  public createNetworkInterfacePermission(
    args: CreateNetworkInterfacePermissionInput,
    cb?: (err: any, data?: CreateNetworkInterfacePermissionOutput) => void
  ): Promise<CreateNetworkInterfacePermissionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateNetworkInterfacePermissionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a placement group in which to launch instances. The strategy of the placement group determines how the instances are organized within the group. </p> <p>A <code>cluster</code> placement group is a logical grouping of instances within a single Availability Zone that benefit from low network latency, high network throughput. A <code>spread</code> placement group places instances on distinct hardware. A <code>partition</code> placement group places groups of instances in different partitions, where instances in one partition do not share the same hardware with instances in another partition.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement Groups</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createPlacementGroup(
    args: CreatePlacementGroupInput
  ): Promise<CreatePlacementGroupOutput>;
  public createPlacementGroup(
    args: CreatePlacementGroupInput,
    cb: (err: any, data?: CreatePlacementGroupOutput) => void
  ): void;
  public createPlacementGroup(
    args: CreatePlacementGroupInput,
    cb?: (err: any, data?: CreatePlacementGroupOutput) => void
  ): Promise<CreatePlacementGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreatePlacementGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a listing for Amazon EC2 Standard Reserved Instances to be sold in the Reserved Instance Marketplace. You can submit one Standard Reserved Instance listing at a time. To get a list of your Standard Reserved Instances, you can use the <a>DescribeReservedInstances</a> operation.</p> <note> <p>Only Standard Reserved Instances can be sold in the Reserved Instance Marketplace. Convertible Reserved Instances cannot be sold.</p> </note> <p>The Reserved Instance Marketplace matches sellers who want to resell Standard Reserved Instance capacity that they no longer need with buyers who want to purchase additional capacity. Reserved Instances bought and sold through the Reserved Instance Marketplace work like any other Reserved Instances.</p> <p>To sell your Standard Reserved Instances, you must first register as a seller in the Reserved Instance Marketplace. After completing the registration process, you can create a Reserved Instance Marketplace listing of some or all of your Standard Reserved Instances, and specify the upfront price to receive for them. Your Standard Reserved Instance listings then become available for purchase. To view the details of your Standard Reserved Instance listing, you can use the <a>DescribeReservedInstancesListings</a> operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createReservedInstancesListing(
    args: CreateReservedInstancesListingInput
  ): Promise<CreateReservedInstancesListingOutput>;
  public createReservedInstancesListing(
    args: CreateReservedInstancesListingInput,
    cb: (err: any, data?: CreateReservedInstancesListingOutput) => void
  ): void;
  public createReservedInstancesListing(
    args: CreateReservedInstancesListingInput,
    cb?: (err: any, data?: CreateReservedInstancesListingOutput) => void
  ): Promise<CreateReservedInstancesListingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateReservedInstancesListingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a route in a route table within a VPC.</p> <p>You must specify one of the following targets: internet gateway or virtual private gateway, NAT instance, NAT gateway, VPC peering connection, network interface, or egress-only internet gateway.</p> <p>When determining how to route traffic, we use the route with the most specific match. For example, traffic is destined for the IPv4 address <code>192.0.2.3</code>, and the route table includes the following two IPv4 routes:</p> <ul> <li> <p> <code>192.0.2.0/24</code> (goes to some target A)</p> </li> <li> <p> <code>192.0.2.0/28</code> (goes to some target B)</p> </li> </ul> <p>Both routes apply to the traffic destined for <code>192.0.2.3</code>. However, the second route in the list covers a smaller number of IP addresses and is therefore more specific, so we use that route to determine where to target the traffic.</p> <p>For more information about route tables, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route Tables</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createRoute(args: CreateRouteInput): Promise<CreateRouteOutput>;
  public createRoute(
    args: CreateRouteInput,
    cb: (err: any, data?: CreateRouteOutput) => void
  ): void;
  public createRoute(
    args: CreateRouteInput,
    cb?: (err: any, data?: CreateRouteOutput) => void
  ): Promise<CreateRouteOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateRouteCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a route table for the specified VPC. After you create a route table, you can add routes and associate the table with a subnet.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route Tables</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createRouteTable(
    args: CreateRouteTableInput
  ): Promise<CreateRouteTableOutput>;
  public createRouteTable(
    args: CreateRouteTableInput,
    cb: (err: any, data?: CreateRouteTableOutput) => void
  ): void;
  public createRouteTable(
    args: CreateRouteTableInput,
    cb?: (err: any, data?: CreateRouteTableOutput) => void
  ): Promise<CreateRouteTableOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateRouteTableCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a security group.</p> <p>A security group acts as a virtual firewall for your instance to control inbound and outbound traffic. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html">Amazon EC2 Security Groups</a> in the <i>Amazon Elastic Compute Cloud User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html">Security Groups for Your VPC</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p> <p>When you create a security group, you specify a friendly name of your choice. You can have a security group for use in EC2-Classic with the same name as a security group for use in a VPC. However, you can't have two security groups for use in EC2-Classic with the same name or two security groups for use in a VPC with the same name.</p> <p>You have a default security group for use in EC2-Classic and a default security group for use in your VPC. If you don't specify a security group when you launch an instance, the instance is launched into the appropriate default security group. A default security group includes a default rule that grants instances unrestricted network access to each other.</p> <p>You can add or remove rules from your security groups using <a>AuthorizeSecurityGroupIngress</a>, <a>AuthorizeSecurityGroupEgress</a>, <a>RevokeSecurityGroupIngress</a>, and <a>RevokeSecurityGroupEgress</a>.</p> <p>For more information about VPC security group limits, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC Limits</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSecurityGroup(
    args: CreateSecurityGroupInput
  ): Promise<CreateSecurityGroupOutput>;
  public createSecurityGroup(
    args: CreateSecurityGroupInput,
    cb: (err: any, data?: CreateSecurityGroupOutput) => void
  ): void;
  public createSecurityGroup(
    args: CreateSecurityGroupInput,
    cb?: (err: any, data?: CreateSecurityGroupOutput) => void
  ): Promise<CreateSecurityGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSecurityGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a snapshot of an EBS volume and stores it in Amazon S3. You can use snapshots for backups, to make copies of EBS volumes, and to save data before shutting down an instance.</p> <p>When a snapshot is created, any AWS Marketplace product codes that are associated with the source volume are propagated to the snapshot.</p> <p>You can take a snapshot of an attached volume that is in use. However, snapshots only capture data that has been written to your EBS volume at the time the snapshot command is issued; this may exclude any data that has been cached by any applications or the operating system. If you can pause any file systems on the volume long enough to take a snapshot, your snapshot should be complete. However, if you cannot pause all file writes to the volume, you should unmount the volume from within the instance, issue the snapshot command, and then remount the volume to ensure a consistent and complete snapshot. You may remount and use your volume while the snapshot status is <code>pending</code>.</p> <p>To create a snapshot for EBS volumes that serve as root devices, you should stop the instance before taking the snapshot.</p> <p>Snapshots that are taken from encrypted volumes are automatically encrypted. Volumes that are created from encrypted snapshots are also automatically encrypted. Your encrypted volumes and any associated snapshots always remain protected.</p> <p>You can tag your snapshots during creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging Your Amazon EC2 Resources</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html">Amazon Elastic Block Store</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSnapshot(
    args: CreateSnapshotInput
  ): Promise<CreateSnapshotOutput>;
  public createSnapshot(
    args: CreateSnapshotInput,
    cb: (err: any, data?: CreateSnapshotOutput) => void
  ): void;
  public createSnapshot(
    args: CreateSnapshotInput,
    cb?: (err: any, data?: CreateSnapshotOutput) => void
  ): Promise<CreateSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates crash-consistent snapshots of multiple EBS volumes and stores the data in S3. Volumes are chosen by specifying an instance. Any attached volumes will produce one snapshot each that is crash-consistent across the instance. Boot volumes can be excluded by changing the paramaters. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSnapshots(
    args: CreateSnapshotsInput
  ): Promise<CreateSnapshotsOutput>;
  public createSnapshots(
    args: CreateSnapshotsInput,
    cb: (err: any, data?: CreateSnapshotsOutput) => void
  ): void;
  public createSnapshots(
    args: CreateSnapshotsInput,
    cb?: (err: any, data?: CreateSnapshotsOutput) => void
  ): Promise<CreateSnapshotsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSnapshotsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a data feed for Spot Instances, enabling you to view Spot Instance usage logs. You can create one data feed per AWS account. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-data-feeds.html">Spot Instance Data Feed</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSpotDatafeedSubscription(
    args: CreateSpotDatafeedSubscriptionInput
  ): Promise<CreateSpotDatafeedSubscriptionOutput>;
  public createSpotDatafeedSubscription(
    args: CreateSpotDatafeedSubscriptionInput,
    cb: (err: any, data?: CreateSpotDatafeedSubscriptionOutput) => void
  ): void;
  public createSpotDatafeedSubscription(
    args: CreateSpotDatafeedSubscriptionInput,
    cb?: (err: any, data?: CreateSpotDatafeedSubscriptionOutput) => void
  ): Promise<CreateSpotDatafeedSubscriptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSpotDatafeedSubscriptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a subnet in an existing VPC.</p> <p>When you create each subnet, you provide the VPC ID and IPv4 CIDR block for the subnet. After you create a subnet, you can't change its CIDR block. The size of the subnet's IPv4 CIDR block can be the same as a VPC's IPv4 CIDR block, or a subset of a VPC's IPv4 CIDR block. If you create more than one subnet in a VPC, the subnets' CIDR blocks must not overlap. The smallest IPv4 subnet (and VPC) you can create uses a /28 netmask (16 IPv4 addresses), and the largest uses a /16 netmask (65,536 IPv4 addresses).</p> <p>If you've associated an IPv6 CIDR block with your VPC, you can create a subnet with an IPv6 CIDR block that uses a /64 prefix length. </p> <important> <p>AWS reserves both the first four and the last IPv4 address in each subnet's CIDR block. They're not available for use.</p> </important> <p>If you add more than one subnet to a VPC, they're set up in a star topology with a logical router in the middle.</p> <p>If you launch an instance in a VPC using an Amazon EBS-backed AMI, the IP address doesn't change if you stop and restart the instance (unlike a similar instance launched outside a VPC, which gets a new IP address when restarted). It's therefore possible to have a subnet with no running instances (they're all stopped), but no remaining IP addresses available.</p> <p>For more information about subnets, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">Your VPC and Subnets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSubnet(args: CreateSubnetInput): Promise<CreateSubnetOutput>;
  public createSubnet(
    args: CreateSubnetInput,
    cb: (err: any, data?: CreateSubnetOutput) => void
  ): void;
  public createSubnet(
    args: CreateSubnetInput,
    cb?: (err: any, data?: CreateSubnetOutput) => void
  ): Promise<CreateSubnetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSubnetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds or overwrites the specified tags for the specified Amazon EC2 resource or resources. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value. Tag keys must be unique per resource.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging Your Resources</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. For more information about creating IAM policies that control users' access to resources based on tags, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-iam-actions-resources.html">Supported Resource-Level Permissions for Amazon EC2 API Actions</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTags(args: CreateTagsInput): Promise<CreateTagsOutput>;
  public createTags(
    args: CreateTagsInput,
    cb: (err: any, data?: CreateTagsOutput) => void
  ): void;
  public createTags(
    args: CreateTagsInput,
    cb?: (err: any, data?: CreateTagsOutput) => void
  ): Promise<CreateTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a Traffic Mirror filter.</p> <p>A Traffic Mirror filter is a set of rules that defines the traffic to mirror.</p> <p>By default, no traffic is mirrored. To mirror traffic, use <a>CreateTrafficMirrorFilterRule</a> to add Traffic Mirror rules to the filter. The rules you add define what traffic gets mirrored. You can also use <a>ModifyTrafficMirrorFilterNetworkServices</a> to mirror supported network services.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTrafficMirrorFilter(
    args: CreateTrafficMirrorFilterInput
  ): Promise<CreateTrafficMirrorFilterOutput>;
  public createTrafficMirrorFilter(
    args: CreateTrafficMirrorFilterInput,
    cb: (err: any, data?: CreateTrafficMirrorFilterOutput) => void
  ): void;
  public createTrafficMirrorFilter(
    args: CreateTrafficMirrorFilterInput,
    cb?: (err: any, data?: CreateTrafficMirrorFilterOutput) => void
  ): Promise<CreateTrafficMirrorFilterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTrafficMirrorFilterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a Traffic Mirror rule. </p> <p>A Traffic Mirror rule defines the Traffic Mirror source traffic to mirror.</p> <p>You need the Traffic Mirror filter ID when you create the rule.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTrafficMirrorFilterRule(
    args: CreateTrafficMirrorFilterRuleInput
  ): Promise<CreateTrafficMirrorFilterRuleOutput>;
  public createTrafficMirrorFilterRule(
    args: CreateTrafficMirrorFilterRuleInput,
    cb: (err: any, data?: CreateTrafficMirrorFilterRuleOutput) => void
  ): void;
  public createTrafficMirrorFilterRule(
    args: CreateTrafficMirrorFilterRuleInput,
    cb?: (err: any, data?: CreateTrafficMirrorFilterRuleOutput) => void
  ): Promise<CreateTrafficMirrorFilterRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTrafficMirrorFilterRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a Traffic Mirror session.</p> <p>A Traffic Mirror session actively copies packets from a Traffic Mirror source to a Traffic Mirror target. Create a filter, and then assign it to the session to define a subset of the traffic to mirror, for example all TCP traffic.</p> <p>The Traffic Mirror source and the Traffic Mirror target (monitoring appliances) can be in the same VPC, or in a different VPC connected via VPC peering or a transit gateway. </p> <p>By default, no traffic is mirrored. Use <a>CreateTrafficMirrorFilter</a> to create filter rules that specify the traffic to mirror.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTrafficMirrorSession(
    args: CreateTrafficMirrorSessionInput
  ): Promise<CreateTrafficMirrorSessionOutput>;
  public createTrafficMirrorSession(
    args: CreateTrafficMirrorSessionInput,
    cb: (err: any, data?: CreateTrafficMirrorSessionOutput) => void
  ): void;
  public createTrafficMirrorSession(
    args: CreateTrafficMirrorSessionInput,
    cb?: (err: any, data?: CreateTrafficMirrorSessionOutput) => void
  ): Promise<CreateTrafficMirrorSessionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTrafficMirrorSessionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a target for your Traffic Mirror session.</p> <p>A Traffic Mirror target is the destination for mirrored traffic. The Traffic Mirror source and the Traffic Mirror target (monitoring appliances) can be in the same VPC, or in different VPCs connected via VPC peering or a transit gateway.</p> <p>A Traffic Mirror target can be a network interface, or a Network Load Balancer.</p> <p>To use the target in a Traffic Mirror session, use <a>CreateTrafficMirrorSession</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTrafficMirrorTarget(
    args: CreateTrafficMirrorTargetInput
  ): Promise<CreateTrafficMirrorTargetOutput>;
  public createTrafficMirrorTarget(
    args: CreateTrafficMirrorTargetInput,
    cb: (err: any, data?: CreateTrafficMirrorTargetOutput) => void
  ): void;
  public createTrafficMirrorTarget(
    args: CreateTrafficMirrorTargetInput,
    cb?: (err: any, data?: CreateTrafficMirrorTargetOutput) => void
  ): Promise<CreateTrafficMirrorTargetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTrafficMirrorTargetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a transit gateway.</p> <p>You can use a transit gateway to interconnect your virtual private clouds (VPC) and on-premises networks. After the transit gateway enters the <code>available</code> state, you can attach your VPCs and VPN connections to the transit gateway.</p> <p>To attach your VPCs, use <a>CreateTransitGatewayVpcAttachment</a>.</p> <p>To attach a VPN connection, use <a>CreateCustomerGateway</a> to create a customer gateway and specify the ID of the customer gateway and the ID of the transit gateway in a call to <a>CreateVpnConnection</a>.</p> <p>When you create a transit gateway, we create a default transit gateway route table and use it as the default association route table and the default propagation route table. You can use <a>CreateTransitGatewayRouteTable</a> to create additional transit gateway route tables. If you disable automatic route propagation, we do not create a default transit gateway route table. You can use <a>EnableTransitGatewayRouteTablePropagation</a> to propagate routes from a resource attachment to a transit gateway route table. If you disable automatic associations, you can use <a>AssociateTransitGatewayRouteTable</a> to associate a resource attachment with a transit gateway route table.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTransitGateway(
    args: CreateTransitGatewayInput
  ): Promise<CreateTransitGatewayOutput>;
  public createTransitGateway(
    args: CreateTransitGatewayInput,
    cb: (err: any, data?: CreateTransitGatewayOutput) => void
  ): void;
  public createTransitGateway(
    args: CreateTransitGatewayInput,
    cb?: (err: any, data?: CreateTransitGatewayOutput) => void
  ): Promise<CreateTransitGatewayOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTransitGatewayCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a static route for the specified transit gateway route table.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTransitGatewayRoute(
    args: CreateTransitGatewayRouteInput
  ): Promise<CreateTransitGatewayRouteOutput>;
  public createTransitGatewayRoute(
    args: CreateTransitGatewayRouteInput,
    cb: (err: any, data?: CreateTransitGatewayRouteOutput) => void
  ): void;
  public createTransitGatewayRoute(
    args: CreateTransitGatewayRouteInput,
    cb?: (err: any, data?: CreateTransitGatewayRouteOutput) => void
  ): Promise<CreateTransitGatewayRouteOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTransitGatewayRouteCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a route table for the specified transit gateway.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTransitGatewayRouteTable(
    args: CreateTransitGatewayRouteTableInput
  ): Promise<CreateTransitGatewayRouteTableOutput>;
  public createTransitGatewayRouteTable(
    args: CreateTransitGatewayRouteTableInput,
    cb: (err: any, data?: CreateTransitGatewayRouteTableOutput) => void
  ): void;
  public createTransitGatewayRouteTable(
    args: CreateTransitGatewayRouteTableInput,
    cb?: (err: any, data?: CreateTransitGatewayRouteTableOutput) => void
  ): Promise<CreateTransitGatewayRouteTableOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTransitGatewayRouteTableCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attaches the specified VPC to the specified transit gateway.</p> <p>If you attach a VPC with a CIDR range that overlaps the CIDR range of a VPC that is already attached, the new VPC CIDR range is not propagated to the default propagation route table.</p> <p>To send VPC traffic to an attached transit gateway, add a route to the VPC route table using <a>CreateRoute</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTransitGatewayVpcAttachment(
    args: CreateTransitGatewayVpcAttachmentInput
  ): Promise<CreateTransitGatewayVpcAttachmentOutput>;
  public createTransitGatewayVpcAttachment(
    args: CreateTransitGatewayVpcAttachmentInput,
    cb: (err: any, data?: CreateTransitGatewayVpcAttachmentOutput) => void
  ): void;
  public createTransitGatewayVpcAttachment(
    args: CreateTransitGatewayVpcAttachmentInput,
    cb?: (err: any, data?: CreateTransitGatewayVpcAttachmentOutput) => void
  ): Promise<CreateTransitGatewayVpcAttachmentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTransitGatewayVpcAttachmentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an EBS volume that can be attached to an instance in the same Availability Zone. The volume is created in the regional endpoint that you send the HTTP request to. For more information see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.</p> <p>You can create a new empty volume or restore a volume from an EBS snapshot. Any AWS Marketplace product codes from the snapshot are propagated to the volume.</p> <p>You can create encrypted volumes. Encrypted volumes must be attached to instances that support Amazon EBS encryption. Volumes that are created from encrypted snapshots are also automatically encrypted. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>You can tag your volumes during creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging Your Amazon EC2 Resources</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-volume.html">Creating an Amazon EBS Volume</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createVolume(args: CreateVolumeInput): Promise<CreateVolumeOutput>;
  public createVolume(
    args: CreateVolumeInput,
    cb: (err: any, data?: CreateVolumeOutput) => void
  ): void;
  public createVolume(
    args: CreateVolumeInput,
    cb?: (err: any, data?: CreateVolumeOutput) => void
  ): Promise<CreateVolumeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateVolumeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a VPC with the specified IPv4 CIDR block. The smallest VPC you can create uses a /28 netmask (16 IPv4 addresses), and the largest uses a /16 netmask (65,536 IPv4 addresses). For more information about how large to make your VPC, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">Your VPC and Subnets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p> <p>You can optionally request an Amazon-provided IPv6 CIDR block for the VPC. The IPv6 CIDR block uses a /56 prefix length, and is allocated from Amazon's pool of IPv6 addresses. You cannot choose the IPv6 range for your VPC.</p> <p>By default, each instance you launch in the VPC has the default DHCP options, which include only a default DNS server that we provide (AmazonProvidedDNS). For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html">DHCP Options Sets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p> <p>You can specify the instance tenancy value for the VPC when you create it. You can't change this value for the VPC after you create it. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html">Dedicated Instances</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createVpc(args: CreateVpcInput): Promise<CreateVpcOutput>;
  public createVpc(
    args: CreateVpcInput,
    cb: (err: any, data?: CreateVpcOutput) => void
  ): void;
  public createVpc(
    args: CreateVpcInput,
    cb?: (err: any, data?: CreateVpcOutput) => void
  ): Promise<CreateVpcOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateVpcCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a VPC endpoint for a specified service. An endpoint enables you to create a private connection between your VPC and the service. The service may be provided by AWS, an AWS Marketplace partner, or another AWS account. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html">VPC Endpoints</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p> <p>A <code>gateway</code> endpoint serves as a target for a route in your route table for traffic destined for the AWS service. You can specify an endpoint policy to attach to the endpoint that will control access to the service from your VPC. You can also specify the VPC route tables that use the endpoint.</p> <p>An <code>interface</code> endpoint is a network interface in your subnet that serves as an endpoint for communicating with the specified service. You can specify the subnets in which to create an endpoint, and the security groups to associate with the endpoint network interface.</p> <p>Use <a>DescribeVpcEndpointServices</a> to get a list of supported services.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createVpcEndpoint(
    args: CreateVpcEndpointInput
  ): Promise<CreateVpcEndpointOutput>;
  public createVpcEndpoint(
    args: CreateVpcEndpointInput,
    cb: (err: any, data?: CreateVpcEndpointOutput) => void
  ): void;
  public createVpcEndpoint(
    args: CreateVpcEndpointInput,
    cb?: (err: any, data?: CreateVpcEndpointOutput) => void
  ): Promise<CreateVpcEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateVpcEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a connection notification for a specified VPC endpoint or VPC endpoint service. A connection notification notifies you of specific endpoint events. You must create an SNS topic to receive notifications. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Create a Topic</a> in the <i>Amazon Simple Notification Service Developer Guide</i>.</p> <p>You can create a connection notification for interface endpoints only.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createVpcEndpointConnectionNotification(
    args: CreateVpcEndpointConnectionNotificationInput
  ): Promise<CreateVpcEndpointConnectionNotificationOutput>;
  public createVpcEndpointConnectionNotification(
    args: CreateVpcEndpointConnectionNotificationInput,
    cb: (err: any, data?: CreateVpcEndpointConnectionNotificationOutput) => void
  ): void;
  public createVpcEndpointConnectionNotification(
    args: CreateVpcEndpointConnectionNotificationInput,
    cb?: (
      err: any,
      data?: CreateVpcEndpointConnectionNotificationOutput
    ) => void
  ): Promise<CreateVpcEndpointConnectionNotificationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateVpcEndpointConnectionNotificationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a VPC endpoint service configuration to which service consumers (AWS accounts, IAM users, and IAM roles) can connect. Service consumers can create an interface VPC endpoint to connect to your service.</p> <p>To create an endpoint service configuration, you must first create a Network Load Balancer for your service. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-service.html">VPC Endpoint Services</a> in the <i>Amazon Virtual Private Cloud User Guide</i>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createVpcEndpointServiceConfiguration(
    args: CreateVpcEndpointServiceConfigurationInput
  ): Promise<CreateVpcEndpointServiceConfigurationOutput>;
  public createVpcEndpointServiceConfiguration(
    args: CreateVpcEndpointServiceConfigurationInput,
    cb: (err: any, data?: CreateVpcEndpointServiceConfigurationOutput) => void
  ): void;
  public createVpcEndpointServiceConfiguration(
    args: CreateVpcEndpointServiceConfigurationInput,
    cb?: (err: any, data?: CreateVpcEndpointServiceConfigurationOutput) => void
  ): Promise<CreateVpcEndpointServiceConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateVpcEndpointServiceConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Requests a VPC peering connection between two VPCs: a requester VPC that you own and an accepter VPC with which to create the connection. The accepter VPC can belong to another AWS account and can be in a different Region to the requester VPC. The requester VPC and accepter VPC cannot have overlapping CIDR blocks.</p> <note> <p>Limitations and rules apply to a VPC peering connection. For more information, see the <a href="https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-basics.html#vpc-peering-limitations">limitations</a> section in the <i>VPC Peering Guide</i>.</p> </note> <p>The owner of the accepter VPC must accept the peering request to activate the peering connection. The VPC peering connection request expires after 7 days, after which it cannot be accepted or rejected.</p> <p>If you create a VPC peering connection request between VPCs with overlapping CIDR blocks, the VPC peering connection has a status of <code>failed</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createVpcPeeringConnection(
    args: CreateVpcPeeringConnectionInput
  ): Promise<CreateVpcPeeringConnectionOutput>;
  public createVpcPeeringConnection(
    args: CreateVpcPeeringConnectionInput,
    cb: (err: any, data?: CreateVpcPeeringConnectionOutput) => void
  ): void;
  public createVpcPeeringConnection(
    args: CreateVpcPeeringConnectionInput,
    cb?: (err: any, data?: CreateVpcPeeringConnectionOutput) => void
  ): Promise<CreateVpcPeeringConnectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateVpcPeeringConnectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a VPN connection between an existing virtual private gateway and a VPN customer gateway. The supported connection types is <code>ipsec.1</code>.</p> <p>The response includes information that you need to give to your network administrator to configure your customer gateway.</p> <important> <p>We strongly recommend that you use HTTPS when calling this operation because the response contains sensitive cryptographic information for configuring your customer gateway.</p> </important> <p>If you decide to shut down your VPN connection for any reason and later create a new VPN connection, you must reconfigure your customer gateway with the new information returned from this call.</p> <p>This is an idempotent operation. If you perform the operation more than once, Amazon EC2 doesn't return an error.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createVpnConnection(
    args: CreateVpnConnectionInput
  ): Promise<CreateVpnConnectionOutput>;
  public createVpnConnection(
    args: CreateVpnConnectionInput,
    cb: (err: any, data?: CreateVpnConnectionOutput) => void
  ): void;
  public createVpnConnection(
    args: CreateVpnConnectionInput,
    cb?: (err: any, data?: CreateVpnConnectionOutput) => void
  ): Promise<CreateVpnConnectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateVpnConnectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a static route associated with a VPN connection between an existing virtual private gateway and a VPN customer gateway. The static route allows traffic to be routed from the virtual private gateway to the VPN customer gateway.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createVpnConnectionRoute(
    args: CreateVpnConnectionRouteInput
  ): Promise<CreateVpnConnectionRouteOutput>;
  public createVpnConnectionRoute(
    args: CreateVpnConnectionRouteInput,
    cb: (err: any, data?: CreateVpnConnectionRouteOutput) => void
  ): void;
  public createVpnConnectionRoute(
    args: CreateVpnConnectionRouteInput,
    cb?: (err: any, data?: CreateVpnConnectionRouteOutput) => void
  ): Promise<CreateVpnConnectionRouteOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateVpnConnectionRouteCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a virtual private gateway. A virtual private gateway is the endpoint on the VPC side of your VPN connection. You can create a virtual private gateway before creating the VPC itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createVpnGateway(
    args: CreateVpnGatewayInput
  ): Promise<CreateVpnGatewayOutput>;
  public createVpnGateway(
    args: CreateVpnGatewayInput,
    cb: (err: any, data?: CreateVpnGatewayOutput) => void
  ): void;
  public createVpnGateway(
    args: CreateVpnGatewayInput,
    cb?: (err: any, data?: CreateVpnGatewayOutput) => void
  ): Promise<CreateVpnGatewayOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateVpnGatewayCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified Client VPN endpoint. You must disassociate all target networks before you can delete a Client VPN endpoint.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteClientVpnEndpoint(
    args: DeleteClientVpnEndpointInput
  ): Promise<DeleteClientVpnEndpointOutput>;
  public deleteClientVpnEndpoint(
    args: DeleteClientVpnEndpointInput,
    cb: (err: any, data?: DeleteClientVpnEndpointOutput) => void
  ): void;
  public deleteClientVpnEndpoint(
    args: DeleteClientVpnEndpointInput,
    cb?: (err: any, data?: DeleteClientVpnEndpointOutput) => void
  ): Promise<DeleteClientVpnEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteClientVpnEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a route from a Client VPN endpoint. You can only delete routes that you manually added using the <b>CreateClientVpnRoute</b> action. You cannot delete routes that were automatically added when associating a subnet. To remove routes that have been automatically added, disassociate the target subnet from the Client VPN endpoint.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteClientVpnRoute(
    args: DeleteClientVpnRouteInput
  ): Promise<DeleteClientVpnRouteOutput>;
  public deleteClientVpnRoute(
    args: DeleteClientVpnRouteInput,
    cb: (err: any, data?: DeleteClientVpnRouteOutput) => void
  ): void;
  public deleteClientVpnRoute(
    args: DeleteClientVpnRouteInput,
    cb?: (err: any, data?: DeleteClientVpnRouteOutput) => void
  ): Promise<DeleteClientVpnRouteOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteClientVpnRouteCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified customer gateway. You must delete the VPN connection before you can delete the customer gateway.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteCustomerGateway(
    args: DeleteCustomerGatewayInput
  ): Promise<DeleteCustomerGatewayOutput>;
  public deleteCustomerGateway(
    args: DeleteCustomerGatewayInput,
    cb: (err: any, data?: DeleteCustomerGatewayOutput) => void
  ): void;
  public deleteCustomerGateway(
    args: DeleteCustomerGatewayInput,
    cb?: (err: any, data?: DeleteCustomerGatewayOutput) => void
  ): Promise<DeleteCustomerGatewayOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteCustomerGatewayCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified set of DHCP options. You must disassociate the set of DHCP options before you can delete it. You can disassociate the set of DHCP options by associating either a new set of options or the default set of options with the VPC.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDhcpOptions(
    args: DeleteDhcpOptionsInput
  ): Promise<DeleteDhcpOptionsOutput>;
  public deleteDhcpOptions(
    args: DeleteDhcpOptionsInput,
    cb: (err: any, data?: DeleteDhcpOptionsOutput) => void
  ): void;
  public deleteDhcpOptions(
    args: DeleteDhcpOptionsInput,
    cb?: (err: any, data?: DeleteDhcpOptionsOutput) => void
  ): Promise<DeleteDhcpOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDhcpOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an egress-only internet gateway.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteEgressOnlyInternetGateway(
    args: DeleteEgressOnlyInternetGatewayInput
  ): Promise<DeleteEgressOnlyInternetGatewayOutput>;
  public deleteEgressOnlyInternetGateway(
    args: DeleteEgressOnlyInternetGatewayInput,
    cb: (err: any, data?: DeleteEgressOnlyInternetGatewayOutput) => void
  ): void;
  public deleteEgressOnlyInternetGateway(
    args: DeleteEgressOnlyInternetGatewayInput,
    cb?: (err: any, data?: DeleteEgressOnlyInternetGatewayOutput) => void
  ): Promise<DeleteEgressOnlyInternetGatewayOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteEgressOnlyInternetGatewayCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified EC2 Fleet.</p> <p>After you delete an EC2 Fleet, it launches no new instances. You must specify whether an EC2 Fleet should also terminate its instances. If you terminate the instances, the EC2 Fleet enters the <code>deleted_terminating</code> state. Otherwise, the EC2 Fleet enters the <code>deleted_running</code> state, and the instances continue to run until they are interrupted or you terminate them manually. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteFleets(args: DeleteFleetsInput): Promise<DeleteFleetsOutput>;
  public deleteFleets(
    args: DeleteFleetsInput,
    cb: (err: any, data?: DeleteFleetsOutput) => void
  ): void;
  public deleteFleets(
    args: DeleteFleetsInput,
    cb?: (err: any, data?: DeleteFleetsOutput) => void
  ): Promise<DeleteFleetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteFleetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes one or more flow logs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteFlowLogs(
    args: DeleteFlowLogsInput
  ): Promise<DeleteFlowLogsOutput>;
  public deleteFlowLogs(
    args: DeleteFlowLogsInput,
    cb: (err: any, data?: DeleteFlowLogsOutput) => void
  ): void;
  public deleteFlowLogs(
    args: DeleteFlowLogsInput,
    cb?: (err: any, data?: DeleteFlowLogsOutput) => void
  ): Promise<DeleteFlowLogsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteFlowLogsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified Amazon FPGA Image (AFI).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteFpgaImage(
    args: DeleteFpgaImageInput
  ): Promise<DeleteFpgaImageOutput>;
  public deleteFpgaImage(
    args: DeleteFpgaImageInput,
    cb: (err: any, data?: DeleteFpgaImageOutput) => void
  ): void;
  public deleteFpgaImage(
    args: DeleteFpgaImageInput,
    cb?: (err: any, data?: DeleteFpgaImageOutput) => void
  ): Promise<DeleteFpgaImageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteFpgaImageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified internet gateway. You must detach the internet gateway from the VPC before you can delete it.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteInternetGateway(
    args: DeleteInternetGatewayInput
  ): Promise<DeleteInternetGatewayOutput>;
  public deleteInternetGateway(
    args: DeleteInternetGatewayInput,
    cb: (err: any, data?: DeleteInternetGatewayOutput) => void
  ): void;
  public deleteInternetGateway(
    args: DeleteInternetGatewayInput,
    cb?: (err: any, data?: DeleteInternetGatewayOutput) => void
  ): Promise<DeleteInternetGatewayOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteInternetGatewayCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified key pair, by removing the public key from Amazon EC2.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteKeyPair(args: DeleteKeyPairInput): Promise<DeleteKeyPairOutput>;
  public deleteKeyPair(
    args: DeleteKeyPairInput,
    cb: (err: any, data?: DeleteKeyPairOutput) => void
  ): void;
  public deleteKeyPair(
    args: DeleteKeyPairInput,
    cb?: (err: any, data?: DeleteKeyPairOutput) => void
  ): Promise<DeleteKeyPairOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteKeyPairCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a launch template. Deleting a launch template deletes all of its versions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteLaunchTemplate(
    args: DeleteLaunchTemplateInput
  ): Promise<DeleteLaunchTemplateOutput>;
  public deleteLaunchTemplate(
    args: DeleteLaunchTemplateInput,
    cb: (err: any, data?: DeleteLaunchTemplateOutput) => void
  ): void;
  public deleteLaunchTemplate(
    args: DeleteLaunchTemplateInput,
    cb?: (err: any, data?: DeleteLaunchTemplateOutput) => void
  ): Promise<DeleteLaunchTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteLaunchTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes one or more versions of a launch template. You cannot delete the default version of a launch template; you must first assign a different version as the default. If the default version is the only version for the launch template, you must delete the entire launch template using <a>DeleteLaunchTemplate</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteLaunchTemplateVersions(
    args: DeleteLaunchTemplateVersionsInput
  ): Promise<DeleteLaunchTemplateVersionsOutput>;
  public deleteLaunchTemplateVersions(
    args: DeleteLaunchTemplateVersionsInput,
    cb: (err: any, data?: DeleteLaunchTemplateVersionsOutput) => void
  ): void;
  public deleteLaunchTemplateVersions(
    args: DeleteLaunchTemplateVersionsInput,
    cb?: (err: any, data?: DeleteLaunchTemplateVersionsOutput) => void
  ): Promise<DeleteLaunchTemplateVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteLaunchTemplateVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified NAT gateway. Deleting a NAT gateway disassociates its Elastic IP address, but does not release the address from your account. Deleting a NAT gateway does not delete any NAT gateway routes in your route tables.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteNatGateway(
    args: DeleteNatGatewayInput
  ): Promise<DeleteNatGatewayOutput>;
  public deleteNatGateway(
    args: DeleteNatGatewayInput,
    cb: (err: any, data?: DeleteNatGatewayOutput) => void
  ): void;
  public deleteNatGateway(
    args: DeleteNatGatewayInput,
    cb?: (err: any, data?: DeleteNatGatewayOutput) => void
  ): Promise<DeleteNatGatewayOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteNatGatewayCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified network ACL. You can't delete the ACL if it's associated with any subnets. You can't delete the default network ACL.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteNetworkAcl(
    args: DeleteNetworkAclInput
  ): Promise<DeleteNetworkAclOutput>;
  public deleteNetworkAcl(
    args: DeleteNetworkAclInput,
    cb: (err: any, data?: DeleteNetworkAclOutput) => void
  ): void;
  public deleteNetworkAcl(
    args: DeleteNetworkAclInput,
    cb?: (err: any, data?: DeleteNetworkAclOutput) => void
  ): Promise<DeleteNetworkAclOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteNetworkAclCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified ingress or egress entry (rule) from the specified network ACL.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteNetworkAclEntry(
    args: DeleteNetworkAclEntryInput
  ): Promise<DeleteNetworkAclEntryOutput>;
  public deleteNetworkAclEntry(
    args: DeleteNetworkAclEntryInput,
    cb: (err: any, data?: DeleteNetworkAclEntryOutput) => void
  ): void;
  public deleteNetworkAclEntry(
    args: DeleteNetworkAclEntryInput,
    cb?: (err: any, data?: DeleteNetworkAclEntryOutput) => void
  ): Promise<DeleteNetworkAclEntryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteNetworkAclEntryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified network interface. You must detach the network interface before you can delete it.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteNetworkInterface(
    args: DeleteNetworkInterfaceInput
  ): Promise<DeleteNetworkInterfaceOutput>;
  public deleteNetworkInterface(
    args: DeleteNetworkInterfaceInput,
    cb: (err: any, data?: DeleteNetworkInterfaceOutput) => void
  ): void;
  public deleteNetworkInterface(
    args: DeleteNetworkInterfaceInput,
    cb?: (err: any, data?: DeleteNetworkInterfaceOutput) => void
  ): Promise<DeleteNetworkInterfaceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteNetworkInterfaceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a permission for a network interface. By default, you cannot delete the permission if the account for which you're removing the permission has attached the network interface to an instance. However, you can force delete the permission, regardless of any attachment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteNetworkInterfacePermission(
    args: DeleteNetworkInterfacePermissionInput
  ): Promise<DeleteNetworkInterfacePermissionOutput>;
  public deleteNetworkInterfacePermission(
    args: DeleteNetworkInterfacePermissionInput,
    cb: (err: any, data?: DeleteNetworkInterfacePermissionOutput) => void
  ): void;
  public deleteNetworkInterfacePermission(
    args: DeleteNetworkInterfacePermissionInput,
    cb?: (err: any, data?: DeleteNetworkInterfacePermissionOutput) => void
  ): Promise<DeleteNetworkInterfacePermissionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteNetworkInterfacePermissionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified placement group. You must terminate all instances in the placement group before you can delete the placement group. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement Groups</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deletePlacementGroup(
    args: DeletePlacementGroupInput
  ): Promise<DeletePlacementGroupOutput>;
  public deletePlacementGroup(
    args: DeletePlacementGroupInput,
    cb: (err: any, data?: DeletePlacementGroupOutput) => void
  ): void;
  public deletePlacementGroup(
    args: DeletePlacementGroupInput,
    cb?: (err: any, data?: DeletePlacementGroupOutput) => void
  ): Promise<DeletePlacementGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeletePlacementGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified route from the specified route table.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRoute(args: DeleteRouteInput): Promise<DeleteRouteOutput>;
  public deleteRoute(
    args: DeleteRouteInput,
    cb: (err: any, data?: DeleteRouteOutput) => void
  ): void;
  public deleteRoute(
    args: DeleteRouteInput,
    cb?: (err: any, data?: DeleteRouteOutput) => void
  ): Promise<DeleteRouteOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRouteCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified route table. You must disassociate the route table from any subnets before you can delete it. You can't delete the main route table.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRouteTable(
    args: DeleteRouteTableInput
  ): Promise<DeleteRouteTableOutput>;
  public deleteRouteTable(
    args: DeleteRouteTableInput,
    cb: (err: any, data?: DeleteRouteTableOutput) => void
  ): void;
  public deleteRouteTable(
    args: DeleteRouteTableInput,
    cb?: (err: any, data?: DeleteRouteTableOutput) => void
  ): Promise<DeleteRouteTableOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRouteTableCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a security group.</p> <p>If you attempt to delete a security group that is associated with an instance, or is referenced by another security group, the operation fails with <code>InvalidGroup.InUse</code> in EC2-Classic or <code>DependencyViolation</code> in EC2-VPC.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSecurityGroup(
    args: DeleteSecurityGroupInput
  ): Promise<DeleteSecurityGroupOutput>;
  public deleteSecurityGroup(
    args: DeleteSecurityGroupInput,
    cb: (err: any, data?: DeleteSecurityGroupOutput) => void
  ): void;
  public deleteSecurityGroup(
    args: DeleteSecurityGroupInput,
    cb?: (err: any, data?: DeleteSecurityGroupOutput) => void
  ): Promise<DeleteSecurityGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSecurityGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified snapshot.</p> <p>When you make periodic snapshots of a volume, the snapshots are incremental, and only the blocks on the device that have changed since your last snapshot are saved in the new snapshot. When you delete a snapshot, only the data not needed for any other snapshot is removed. So regardless of which prior snapshots have been deleted, all active snapshots will have access to all the information needed to restore the volume.</p> <p>You cannot delete a snapshot of the root device of an EBS volume used by a registered AMI. You must first de-register the AMI before you can delete the snapshot.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-deleting-snapshot.html">Deleting an Amazon EBS Snapshot</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSnapshot(
    args: DeleteSnapshotInput
  ): Promise<DeleteSnapshotOutput>;
  public deleteSnapshot(
    args: DeleteSnapshotInput,
    cb: (err: any, data?: DeleteSnapshotOutput) => void
  ): void;
  public deleteSnapshot(
    args: DeleteSnapshotInput,
    cb?: (err: any, data?: DeleteSnapshotOutput) => void
  ): Promise<DeleteSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the data feed for Spot Instances.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSpotDatafeedSubscription(
    args: DeleteSpotDatafeedSubscriptionInput
  ): Promise<DeleteSpotDatafeedSubscriptionOutput>;
  public deleteSpotDatafeedSubscription(
    args: DeleteSpotDatafeedSubscriptionInput,
    cb: (err: any, data?: DeleteSpotDatafeedSubscriptionOutput) => void
  ): void;
  public deleteSpotDatafeedSubscription(
    args: DeleteSpotDatafeedSubscriptionInput,
    cb?: (err: any, data?: DeleteSpotDatafeedSubscriptionOutput) => void
  ): Promise<DeleteSpotDatafeedSubscriptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSpotDatafeedSubscriptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified subnet. You must terminate all running instances in the subnet before you can delete the subnet.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSubnet(args: DeleteSubnetInput): Promise<DeleteSubnetOutput>;
  public deleteSubnet(
    args: DeleteSubnetInput,
    cb: (err: any, data?: DeleteSubnetOutput) => void
  ): void;
  public deleteSubnet(
    args: DeleteSubnetInput,
    cb?: (err: any, data?: DeleteSubnetOutput) => void
  ): Promise<DeleteSubnetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSubnetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified set of tags from the specified set of resources.</p> <p>To list the current tags, use <a>DescribeTags</a>. For more information about tags, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging Your Resources</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTags(args: DeleteTagsInput): Promise<DeleteTagsOutput>;
  public deleteTags(
    args: DeleteTagsInput,
    cb: (err: any, data?: DeleteTagsOutput) => void
  ): void;
  public deleteTags(
    args: DeleteTagsInput,
    cb?: (err: any, data?: DeleteTagsOutput) => void
  ): Promise<DeleteTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified Traffic Mirror filter.</p> <p>You cannot delete a Traffic Mirror filter that is in use by a Traffic Mirror session.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTrafficMirrorFilter(
    args: DeleteTrafficMirrorFilterInput
  ): Promise<DeleteTrafficMirrorFilterOutput>;
  public deleteTrafficMirrorFilter(
    args: DeleteTrafficMirrorFilterInput,
    cb: (err: any, data?: DeleteTrafficMirrorFilterOutput) => void
  ): void;
  public deleteTrafficMirrorFilter(
    args: DeleteTrafficMirrorFilterInput,
    cb?: (err: any, data?: DeleteTrafficMirrorFilterOutput) => void
  ): Promise<DeleteTrafficMirrorFilterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTrafficMirrorFilterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified Traffic Mirror rule.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTrafficMirrorFilterRule(
    args: DeleteTrafficMirrorFilterRuleInput
  ): Promise<DeleteTrafficMirrorFilterRuleOutput>;
  public deleteTrafficMirrorFilterRule(
    args: DeleteTrafficMirrorFilterRuleInput,
    cb: (err: any, data?: DeleteTrafficMirrorFilterRuleOutput) => void
  ): void;
  public deleteTrafficMirrorFilterRule(
    args: DeleteTrafficMirrorFilterRuleInput,
    cb?: (err: any, data?: DeleteTrafficMirrorFilterRuleOutput) => void
  ): Promise<DeleteTrafficMirrorFilterRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTrafficMirrorFilterRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified Traffic Mirror session.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTrafficMirrorSession(
    args: DeleteTrafficMirrorSessionInput
  ): Promise<DeleteTrafficMirrorSessionOutput>;
  public deleteTrafficMirrorSession(
    args: DeleteTrafficMirrorSessionInput,
    cb: (err: any, data?: DeleteTrafficMirrorSessionOutput) => void
  ): void;
  public deleteTrafficMirrorSession(
    args: DeleteTrafficMirrorSessionInput,
    cb?: (err: any, data?: DeleteTrafficMirrorSessionOutput) => void
  ): Promise<DeleteTrafficMirrorSessionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTrafficMirrorSessionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified Traffic Mirror target.</p> <p>You cannot delete a Traffic Mirror target that is in use by a Traffic Mirror session.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTrafficMirrorTarget(
    args: DeleteTrafficMirrorTargetInput
  ): Promise<DeleteTrafficMirrorTargetOutput>;
  public deleteTrafficMirrorTarget(
    args: DeleteTrafficMirrorTargetInput,
    cb: (err: any, data?: DeleteTrafficMirrorTargetOutput) => void
  ): void;
  public deleteTrafficMirrorTarget(
    args: DeleteTrafficMirrorTargetInput,
    cb?: (err: any, data?: DeleteTrafficMirrorTargetOutput) => void
  ): Promise<DeleteTrafficMirrorTargetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTrafficMirrorTargetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified transit gateway.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTransitGateway(
    args: DeleteTransitGatewayInput
  ): Promise<DeleteTransitGatewayOutput>;
  public deleteTransitGateway(
    args: DeleteTransitGatewayInput,
    cb: (err: any, data?: DeleteTransitGatewayOutput) => void
  ): void;
  public deleteTransitGateway(
    args: DeleteTransitGatewayInput,
    cb?: (err: any, data?: DeleteTransitGatewayOutput) => void
  ): Promise<DeleteTransitGatewayOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTransitGatewayCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified route from the specified transit gateway route table.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTransitGatewayRoute(
    args: DeleteTransitGatewayRouteInput
  ): Promise<DeleteTransitGatewayRouteOutput>;
  public deleteTransitGatewayRoute(
    args: DeleteTransitGatewayRouteInput,
    cb: (err: any, data?: DeleteTransitGatewayRouteOutput) => void
  ): void;
  public deleteTransitGatewayRoute(
    args: DeleteTransitGatewayRouteInput,
    cb?: (err: any, data?: DeleteTransitGatewayRouteOutput) => void
  ): Promise<DeleteTransitGatewayRouteOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTransitGatewayRouteCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified transit gateway route table. You must disassociate the route table from any transit gateway route tables before you can delete it.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTransitGatewayRouteTable(
    args: DeleteTransitGatewayRouteTableInput
  ): Promise<DeleteTransitGatewayRouteTableOutput>;
  public deleteTransitGatewayRouteTable(
    args: DeleteTransitGatewayRouteTableInput,
    cb: (err: any, data?: DeleteTransitGatewayRouteTableOutput) => void
  ): void;
  public deleteTransitGatewayRouteTable(
    args: DeleteTransitGatewayRouteTableInput,
    cb?: (err: any, data?: DeleteTransitGatewayRouteTableOutput) => void
  ): Promise<DeleteTransitGatewayRouteTableOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTransitGatewayRouteTableCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified VPC attachment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTransitGatewayVpcAttachment(
    args: DeleteTransitGatewayVpcAttachmentInput
  ): Promise<DeleteTransitGatewayVpcAttachmentOutput>;
  public deleteTransitGatewayVpcAttachment(
    args: DeleteTransitGatewayVpcAttachmentInput,
    cb: (err: any, data?: DeleteTransitGatewayVpcAttachmentOutput) => void
  ): void;
  public deleteTransitGatewayVpcAttachment(
    args: DeleteTransitGatewayVpcAttachmentInput,
    cb?: (err: any, data?: DeleteTransitGatewayVpcAttachmentOutput) => void
  ): Promise<DeleteTransitGatewayVpcAttachmentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTransitGatewayVpcAttachmentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified EBS volume. The volume must be in the <code>available</code> state (not attached to an instance).</p> <p>The volume can remain in the <code>deleting</code> state for several minutes.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-deleting-volume.html">Deleting an Amazon EBS Volume</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteVolume(args: DeleteVolumeInput): Promise<DeleteVolumeOutput>;
  public deleteVolume(
    args: DeleteVolumeInput,
    cb: (err: any, data?: DeleteVolumeOutput) => void
  ): void;
  public deleteVolume(
    args: DeleteVolumeInput,
    cb?: (err: any, data?: DeleteVolumeOutput) => void
  ): Promise<DeleteVolumeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteVolumeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified VPC. You must detach or delete all gateways and resources that are associated with the VPC before you can delete it. For example, you must terminate all instances running in the VPC, delete all security groups associated with the VPC (except the default one), delete all route tables associated with the VPC (except the default one), and so on.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteVpc(args: DeleteVpcInput): Promise<DeleteVpcOutput>;
  public deleteVpc(
    args: DeleteVpcInput,
    cb: (err: any, data?: DeleteVpcOutput) => void
  ): void;
  public deleteVpc(
    args: DeleteVpcInput,
    cb?: (err: any, data?: DeleteVpcOutput) => void
  ): Promise<DeleteVpcOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteVpcCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes one or more VPC endpoint connection notifications.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteVpcEndpointConnectionNotifications(
    args: DeleteVpcEndpointConnectionNotificationsInput
  ): Promise<DeleteVpcEndpointConnectionNotificationsOutput>;
  public deleteVpcEndpointConnectionNotifications(
    args: DeleteVpcEndpointConnectionNotificationsInput,
    cb: (
      err: any,
      data?: DeleteVpcEndpointConnectionNotificationsOutput
    ) => void
  ): void;
  public deleteVpcEndpointConnectionNotifications(
    args: DeleteVpcEndpointConnectionNotificationsInput,
    cb?: (
      err: any,
      data?: DeleteVpcEndpointConnectionNotificationsOutput
    ) => void
  ): Promise<DeleteVpcEndpointConnectionNotificationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteVpcEndpointConnectionNotificationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes one or more VPC endpoint service configurations in your account. Before you delete the endpoint service configuration, you must reject any <code>Available</code> or <code>PendingAcceptance</code> interface endpoint connections that are attached to the service.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteVpcEndpointServiceConfigurations(
    args: DeleteVpcEndpointServiceConfigurationsInput
  ): Promise<DeleteVpcEndpointServiceConfigurationsOutput>;
  public deleteVpcEndpointServiceConfigurations(
    args: DeleteVpcEndpointServiceConfigurationsInput,
    cb: (err: any, data?: DeleteVpcEndpointServiceConfigurationsOutput) => void
  ): void;
  public deleteVpcEndpointServiceConfigurations(
    args: DeleteVpcEndpointServiceConfigurationsInput,
    cb?: (err: any, data?: DeleteVpcEndpointServiceConfigurationsOutput) => void
  ): Promise<DeleteVpcEndpointServiceConfigurationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteVpcEndpointServiceConfigurationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes one or more specified VPC endpoints. Deleting a gateway endpoint also deletes the endpoint routes in the route tables that were associated with the endpoint. Deleting an interface endpoint deletes the endpoint network interfaces.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteVpcEndpoints(
    args: DeleteVpcEndpointsInput
  ): Promise<DeleteVpcEndpointsOutput>;
  public deleteVpcEndpoints(
    args: DeleteVpcEndpointsInput,
    cb: (err: any, data?: DeleteVpcEndpointsOutput) => void
  ): void;
  public deleteVpcEndpoints(
    args: DeleteVpcEndpointsInput,
    cb?: (err: any, data?: DeleteVpcEndpointsOutput) => void
  ): Promise<DeleteVpcEndpointsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteVpcEndpointsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a VPC peering connection. Either the owner of the requester VPC or the owner of the accepter VPC can delete the VPC peering connection if it's in the <code>active</code> state. The owner of the requester VPC can delete a VPC peering connection in the <code>pending-acceptance</code> state. You cannot delete a VPC peering connection that's in the <code>failed</code> state.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteVpcPeeringConnection(
    args: DeleteVpcPeeringConnectionInput
  ): Promise<DeleteVpcPeeringConnectionOutput>;
  public deleteVpcPeeringConnection(
    args: DeleteVpcPeeringConnectionInput,
    cb: (err: any, data?: DeleteVpcPeeringConnectionOutput) => void
  ): void;
  public deleteVpcPeeringConnection(
    args: DeleteVpcPeeringConnectionInput,
    cb?: (err: any, data?: DeleteVpcPeeringConnectionOutput) => void
  ): Promise<DeleteVpcPeeringConnectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteVpcPeeringConnectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified VPN connection.</p> <p>If you're deleting the VPC and its associated components, we recommend that you detach the virtual private gateway from the VPC and delete the VPC before deleting the VPN connection. If you believe that the tunnel credentials for your VPN connection have been compromised, you can delete the VPN connection and create a new one that has new keys, without needing to delete the VPC or virtual private gateway. If you create a new VPN connection, you must reconfigure the customer gateway using the new configuration information returned with the new VPN connection ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteVpnConnection(
    args: DeleteVpnConnectionInput
  ): Promise<DeleteVpnConnectionOutput>;
  public deleteVpnConnection(
    args: DeleteVpnConnectionInput,
    cb: (err: any, data?: DeleteVpnConnectionOutput) => void
  ): void;
  public deleteVpnConnection(
    args: DeleteVpnConnectionInput,
    cb?: (err: any, data?: DeleteVpnConnectionOutput) => void
  ): Promise<DeleteVpnConnectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteVpnConnectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified static route associated with a VPN connection between an existing virtual private gateway and a VPN customer gateway. The static route allows traffic to be routed from the virtual private gateway to the VPN customer gateway.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteVpnConnectionRoute(
    args: DeleteVpnConnectionRouteInput
  ): Promise<DeleteVpnConnectionRouteOutput>;
  public deleteVpnConnectionRoute(
    args: DeleteVpnConnectionRouteInput,
    cb: (err: any, data?: DeleteVpnConnectionRouteOutput) => void
  ): void;
  public deleteVpnConnectionRoute(
    args: DeleteVpnConnectionRouteInput,
    cb?: (err: any, data?: DeleteVpnConnectionRouteOutput) => void
  ): Promise<DeleteVpnConnectionRouteOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteVpnConnectionRouteCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified virtual private gateway. We recommend that before you delete a virtual private gateway, you detach it from the VPC and delete the VPN connection. Note that you don't need to delete the virtual private gateway if you plan to delete and recreate the VPN connection between your VPC and your network.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteVpnGateway(
    args: DeleteVpnGatewayInput
  ): Promise<DeleteVpnGatewayOutput>;
  public deleteVpnGateway(
    args: DeleteVpnGatewayInput,
    cb: (err: any, data?: DeleteVpnGatewayOutput) => void
  ): void;
  public deleteVpnGateway(
    args: DeleteVpnGatewayInput,
    cb?: (err: any, data?: DeleteVpnGatewayOutput) => void
  ): Promise<DeleteVpnGatewayOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteVpnGatewayCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Releases the specified address range that you provisioned for use with your AWS resources through bring your own IP addresses (BYOIP) and deletes the corresponding address pool.</p> <p>Before you can release an address range, you must stop advertising it using <a>WithdrawByoipCidr</a> and you must not have any IP addresses allocated from its address range.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deprovisionByoipCidr(
    args: DeprovisionByoipCidrInput
  ): Promise<DeprovisionByoipCidrOutput>;
  public deprovisionByoipCidr(
    args: DeprovisionByoipCidrInput,
    cb: (err: any, data?: DeprovisionByoipCidrOutput) => void
  ): void;
  public deprovisionByoipCidr(
    args: DeprovisionByoipCidrInput,
    cb?: (err: any, data?: DeprovisionByoipCidrOutput) => void
  ): Promise<DeprovisionByoipCidrOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeprovisionByoipCidrCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deregisters the specified AMI. After you deregister an AMI, it can't be used to launch new instances; however, it doesn't affect any instances that you've already launched from the AMI. You'll continue to incur usage costs for those instances until you terminate them.</p> <p>When you deregister an Amazon EBS-backed AMI, it doesn't affect the snapshot that was created for the root volume of the instance during the AMI creation process. When you deregister an instance store-backed AMI, it doesn't affect the files that you uploaded to Amazon S3 when you created the AMI.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deregisterImage(
    args: DeregisterImageInput
  ): Promise<DeregisterImageOutput>;
  public deregisterImage(
    args: DeregisterImageInput,
    cb: (err: any, data?: DeregisterImageOutput) => void
  ): void;
  public deregisterImage(
    args: DeregisterImageInput,
    cb?: (err: any, data?: DeregisterImageOutput) => void
  ): Promise<DeregisterImageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeregisterImageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes attributes of your AWS account. The following are the supported account attributes:</p> <ul> <li> <p> <code>supported-platforms</code>: Indicates whether your account can launch instances into EC2-Classic and EC2-VPC, or only into EC2-VPC.</p> </li> <li> <p> <code>default-vpc</code>: The ID of the default VPC for your account, or <code>none</code>.</p> </li> <li> <p> <code>max-instances</code>: The maximum number of On-Demand Instances that you can run.</p> </li> <li> <p> <code>vpc-max-security-groups-per-interface</code>: The maximum number of security groups that you can assign to a network interface.</p> </li> <li> <p> <code>max-elastic-ips</code>: The maximum number of Elastic IP addresses that you can allocate for use with EC2-Classic. </p> </li> <li> <p> <code>vpc-max-elastic-ips</code>: The maximum number of Elastic IP addresses that you can allocate for use with EC2-VPC.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAccountAttributes(
    args: DescribeAccountAttributesInput
  ): Promise<DescribeAccountAttributesOutput>;
  public describeAccountAttributes(
    args: DescribeAccountAttributesInput,
    cb: (err: any, data?: DescribeAccountAttributesOutput) => void
  ): void;
  public describeAccountAttributes(
    args: DescribeAccountAttributesInput,
    cb?: (err: any, data?: DescribeAccountAttributesOutput) => void
  ): Promise<DescribeAccountAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAccountAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified Elastic IP addresses or all of your Elastic IP addresses.</p> <p>An Elastic IP address is for use in either the EC2-Classic platform or in a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAddresses(
    args: DescribeAddressesInput
  ): Promise<DescribeAddressesOutput>;
  public describeAddresses(
    args: DescribeAddressesInput,
    cb: (err: any, data?: DescribeAddressesOutput) => void
  ): void;
  public describeAddresses(
    args: DescribeAddressesInput,
    cb?: (err: any, data?: DescribeAddressesOutput) => void
  ): Promise<DescribeAddressesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAddressesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the longer ID format settings for all resource types in a specific Region. This request is useful for performing a quick audit to determine whether a specific Region is fully opted in for longer IDs (17-character IDs).</p> <p>This request only returns information about resource types that support longer IDs.</p> <p>The following resource types support longer IDs: <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> | <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> | <code>export-task</code> | <code>flow-log</code> | <code>image</code> | <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> | <code>network-acl</code> | <code>network-acl-association</code> | <code>network-interface</code> | <code>network-interface-attachment</code> | <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> | <code>route-table-association</code> | <code>security-group</code> | <code>snapshot</code> | <code>subnet</code> | <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code> | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAggregateIdFormat(
    args: DescribeAggregateIdFormatInput
  ): Promise<DescribeAggregateIdFormatOutput>;
  public describeAggregateIdFormat(
    args: DescribeAggregateIdFormatInput,
    cb: (err: any, data?: DescribeAggregateIdFormatOutput) => void
  ): void;
  public describeAggregateIdFormat(
    args: DescribeAggregateIdFormatInput,
    cb?: (err: any, data?: DescribeAggregateIdFormatOutput) => void
  ): Promise<DescribeAggregateIdFormatOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAggregateIdFormatCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the Availability Zones that are available to you. The results include zones only for the Region you're currently using. If there is an event impacting an Availability Zone, you can use this request to view the state and any provided message for that Availability Zone.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html">Regions and Availability Zones</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAvailabilityZones(
    args: DescribeAvailabilityZonesInput
  ): Promise<DescribeAvailabilityZonesOutput>;
  public describeAvailabilityZones(
    args: DescribeAvailabilityZonesInput,
    cb: (err: any, data?: DescribeAvailabilityZonesOutput) => void
  ): void;
  public describeAvailabilityZones(
    args: DescribeAvailabilityZonesInput,
    cb?: (err: any, data?: DescribeAvailabilityZonesOutput) => void
  ): Promise<DescribeAvailabilityZonesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAvailabilityZonesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified bundle tasks or all of your bundle tasks.</p> <note> <p>Completed bundle tasks are listed for only a limited time. If your bundle task is no longer in the list, you can still register an AMI from it. Just use <code>RegisterImage</code> with the Amazon S3 bucket name and image manifest name you provided to the bundle task.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeBundleTasks(
    args: DescribeBundleTasksInput
  ): Promise<DescribeBundleTasksOutput>;
  public describeBundleTasks(
    args: DescribeBundleTasksInput,
    cb: (err: any, data?: DescribeBundleTasksOutput) => void
  ): void;
  public describeBundleTasks(
    args: DescribeBundleTasksInput,
    cb?: (err: any, data?: DescribeBundleTasksOutput) => void
  ): Promise<DescribeBundleTasksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeBundleTasksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the IP address ranges that were specified in calls to <a>ProvisionByoipCidr</a>.</p> <p>To describe the address pools that were created when you provisioned the address ranges, use <a>DescribePublicIpv4Pools</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeByoipCidrs(
    args: DescribeByoipCidrsInput
  ): Promise<DescribeByoipCidrsOutput>;
  public describeByoipCidrs(
    args: DescribeByoipCidrsInput,
    cb: (err: any, data?: DescribeByoipCidrsOutput) => void
  ): void;
  public describeByoipCidrs(
    args: DescribeByoipCidrsInput,
    cb?: (err: any, data?: DescribeByoipCidrsOutput) => void
  ): Promise<DescribeByoipCidrsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeByoipCidrsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more of your Capacity Reservations. The results describe only the Capacity Reservations in the AWS Region that you're currently using.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeCapacityReservations(
    args: DescribeCapacityReservationsInput
  ): Promise<DescribeCapacityReservationsOutput>;
  public describeCapacityReservations(
    args: DescribeCapacityReservationsInput,
    cb: (err: any, data?: DescribeCapacityReservationsOutput) => void
  ): void;
  public describeCapacityReservations(
    args: DescribeCapacityReservationsInput,
    cb?: (err: any, data?: DescribeCapacityReservationsOutput) => void
  ): Promise<DescribeCapacityReservationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeCapacityReservationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more of your linked EC2-Classic instances. This request only returns information about EC2-Classic instances linked to a VPC through ClassicLink. You cannot use this request to return information about other instances.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeClassicLinkInstances(
    args: DescribeClassicLinkInstancesInput
  ): Promise<DescribeClassicLinkInstancesOutput>;
  public describeClassicLinkInstances(
    args: DescribeClassicLinkInstancesInput,
    cb: (err: any, data?: DescribeClassicLinkInstancesOutput) => void
  ): void;
  public describeClassicLinkInstances(
    args: DescribeClassicLinkInstancesInput,
    cb?: (err: any, data?: DescribeClassicLinkInstancesOutput) => void
  ): Promise<DescribeClassicLinkInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeClassicLinkInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the authorization rules for a specified Client VPN endpoint.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeClientVpnAuthorizationRules(
    args: DescribeClientVpnAuthorizationRulesInput
  ): Promise<DescribeClientVpnAuthorizationRulesOutput>;
  public describeClientVpnAuthorizationRules(
    args: DescribeClientVpnAuthorizationRulesInput,
    cb: (err: any, data?: DescribeClientVpnAuthorizationRulesOutput) => void
  ): void;
  public describeClientVpnAuthorizationRules(
    args: DescribeClientVpnAuthorizationRulesInput,
    cb?: (err: any, data?: DescribeClientVpnAuthorizationRulesOutput) => void
  ): Promise<DescribeClientVpnAuthorizationRulesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeClientVpnAuthorizationRulesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes active client connections and connections that have been terminated within the last 60 minutes for the specified Client VPN endpoint.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeClientVpnConnections(
    args: DescribeClientVpnConnectionsInput
  ): Promise<DescribeClientVpnConnectionsOutput>;
  public describeClientVpnConnections(
    args: DescribeClientVpnConnectionsInput,
    cb: (err: any, data?: DescribeClientVpnConnectionsOutput) => void
  ): void;
  public describeClientVpnConnections(
    args: DescribeClientVpnConnectionsInput,
    cb?: (err: any, data?: DescribeClientVpnConnectionsOutput) => void
  ): Promise<DescribeClientVpnConnectionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeClientVpnConnectionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more Client VPN endpoints in the account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeClientVpnEndpoints(
    args: DescribeClientVpnEndpointsInput
  ): Promise<DescribeClientVpnEndpointsOutput>;
  public describeClientVpnEndpoints(
    args: DescribeClientVpnEndpointsInput,
    cb: (err: any, data?: DescribeClientVpnEndpointsOutput) => void
  ): void;
  public describeClientVpnEndpoints(
    args: DescribeClientVpnEndpointsInput,
    cb?: (err: any, data?: DescribeClientVpnEndpointsOutput) => void
  ): Promise<DescribeClientVpnEndpointsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeClientVpnEndpointsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the routes for the specified Client VPN endpoint.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeClientVpnRoutes(
    args: DescribeClientVpnRoutesInput
  ): Promise<DescribeClientVpnRoutesOutput>;
  public describeClientVpnRoutes(
    args: DescribeClientVpnRoutesInput,
    cb: (err: any, data?: DescribeClientVpnRoutesOutput) => void
  ): void;
  public describeClientVpnRoutes(
    args: DescribeClientVpnRoutesInput,
    cb?: (err: any, data?: DescribeClientVpnRoutesOutput) => void
  ): Promise<DescribeClientVpnRoutesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeClientVpnRoutesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the target networks associated with the specified Client VPN endpoint.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeClientVpnTargetNetworks(
    args: DescribeClientVpnTargetNetworksInput
  ): Promise<DescribeClientVpnTargetNetworksOutput>;
  public describeClientVpnTargetNetworks(
    args: DescribeClientVpnTargetNetworksInput,
    cb: (err: any, data?: DescribeClientVpnTargetNetworksOutput) => void
  ): void;
  public describeClientVpnTargetNetworks(
    args: DescribeClientVpnTargetNetworksInput,
    cb?: (err: any, data?: DescribeClientVpnTargetNetworksOutput) => void
  ): Promise<DescribeClientVpnTargetNetworksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeClientVpnTargetNetworksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified conversion tasks or all your conversion tasks. For more information, see the <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/">VM Import/Export User Guide</a>.</p> <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeConversionTasks(
    args: DescribeConversionTasksInput
  ): Promise<DescribeConversionTasksOutput>;
  public describeConversionTasks(
    args: DescribeConversionTasksInput,
    cb: (err: any, data?: DescribeConversionTasksOutput) => void
  ): void;
  public describeConversionTasks(
    args: DescribeConversionTasksInput,
    cb?: (err: any, data?: DescribeConversionTasksOutput) => void
  ): Promise<DescribeConversionTasksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeConversionTasksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more of your VPN customer gateways.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeCustomerGateways(
    args: DescribeCustomerGatewaysInput
  ): Promise<DescribeCustomerGatewaysOutput>;
  public describeCustomerGateways(
    args: DescribeCustomerGatewaysInput,
    cb: (err: any, data?: DescribeCustomerGatewaysOutput) => void
  ): void;
  public describeCustomerGateways(
    args: DescribeCustomerGatewaysInput,
    cb?: (err: any, data?: DescribeCustomerGatewaysOutput) => void
  ): Promise<DescribeCustomerGatewaysOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeCustomerGatewaysCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more of your DHCP options sets.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html">DHCP Options Sets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDhcpOptions(
    args: DescribeDhcpOptionsInput
  ): Promise<DescribeDhcpOptionsOutput>;
  public describeDhcpOptions(
    args: DescribeDhcpOptionsInput,
    cb: (err: any, data?: DescribeDhcpOptionsOutput) => void
  ): void;
  public describeDhcpOptions(
    args: DescribeDhcpOptionsInput,
    cb?: (err: any, data?: DescribeDhcpOptionsOutput) => void
  ): Promise<DescribeDhcpOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDhcpOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more of your egress-only internet gateways.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEgressOnlyInternetGateways(
    args: DescribeEgressOnlyInternetGatewaysInput
  ): Promise<DescribeEgressOnlyInternetGatewaysOutput>;
  public describeEgressOnlyInternetGateways(
    args: DescribeEgressOnlyInternetGatewaysInput,
    cb: (err: any, data?: DescribeEgressOnlyInternetGatewaysOutput) => void
  ): void;
  public describeEgressOnlyInternetGateways(
    args: DescribeEgressOnlyInternetGatewaysInput,
    cb?: (err: any, data?: DescribeEgressOnlyInternetGatewaysOutput) => void
  ): Promise<DescribeEgressOnlyInternetGatewaysOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEgressOnlyInternetGatewaysCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the Elastic Graphics accelerator associated with your instances. For more information about Elastic Graphics, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-graphics.html">Amazon Elastic Graphics</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeElasticGpus(
    args: DescribeElasticGpusInput
  ): Promise<DescribeElasticGpusOutput>;
  public describeElasticGpus(
    args: DescribeElasticGpusInput,
    cb: (err: any, data?: DescribeElasticGpusOutput) => void
  ): void;
  public describeElasticGpus(
    args: DescribeElasticGpusInput,
    cb?: (err: any, data?: DescribeElasticGpusOutput) => void
  ): Promise<DescribeElasticGpusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeElasticGpusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified export tasks or all your export tasks.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeExportTasks(
    args: DescribeExportTasksInput
  ): Promise<DescribeExportTasksOutput>;
  public describeExportTasks(
    args: DescribeExportTasksInput,
    cb: (err: any, data?: DescribeExportTasksOutput) => void
  ): void;
  public describeExportTasks(
    args: DescribeExportTasksInput,
    cb?: (err: any, data?: DescribeExportTasksOutput) => void
  ): Promise<DescribeExportTasksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeExportTasksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the events for the specified EC2 Fleet during the specified time.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeFleetHistory(
    args: DescribeFleetHistoryInput
  ): Promise<DescribeFleetHistoryOutput>;
  public describeFleetHistory(
    args: DescribeFleetHistoryInput,
    cb: (err: any, data?: DescribeFleetHistoryOutput) => void
  ): void;
  public describeFleetHistory(
    args: DescribeFleetHistoryInput,
    cb?: (err: any, data?: DescribeFleetHistoryOutput) => void
  ): Promise<DescribeFleetHistoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeFleetHistoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the running instances for the specified EC2 Fleet.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeFleetInstances(
    args: DescribeFleetInstancesInput
  ): Promise<DescribeFleetInstancesOutput>;
  public describeFleetInstances(
    args: DescribeFleetInstancesInput,
    cb: (err: any, data?: DescribeFleetInstancesOutput) => void
  ): void;
  public describeFleetInstances(
    args: DescribeFleetInstancesInput,
    cb?: (err: any, data?: DescribeFleetInstancesOutput) => void
  ): Promise<DescribeFleetInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeFleetInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified EC2 Fleets or all your EC2 Fleets.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeFleets(
    args: DescribeFleetsInput
  ): Promise<DescribeFleetsOutput>;
  public describeFleets(
    args: DescribeFleetsInput,
    cb: (err: any, data?: DescribeFleetsOutput) => void
  ): void;
  public describeFleets(
    args: DescribeFleetsInput,
    cb?: (err: any, data?: DescribeFleetsOutput) => void
  ): Promise<DescribeFleetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeFleetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more flow logs. To view the information in your flow logs (the log streams for the network interfaces), you must use the CloudWatch Logs console or the CloudWatch Logs API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeFlowLogs(
    args: DescribeFlowLogsInput
  ): Promise<DescribeFlowLogsOutput>;
  public describeFlowLogs(
    args: DescribeFlowLogsInput,
    cb: (err: any, data?: DescribeFlowLogsOutput) => void
  ): void;
  public describeFlowLogs(
    args: DescribeFlowLogsInput,
    cb?: (err: any, data?: DescribeFlowLogsOutput) => void
  ): Promise<DescribeFlowLogsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeFlowLogsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified attribute of the specified Amazon FPGA Image (AFI).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeFpgaImageAttribute(
    args: DescribeFpgaImageAttributeInput
  ): Promise<DescribeFpgaImageAttributeOutput>;
  public describeFpgaImageAttribute(
    args: DescribeFpgaImageAttributeInput,
    cb: (err: any, data?: DescribeFpgaImageAttributeOutput) => void
  ): void;
  public describeFpgaImageAttribute(
    args: DescribeFpgaImageAttributeInput,
    cb?: (err: any, data?: DescribeFpgaImageAttributeOutput) => void
  ): Promise<DescribeFpgaImageAttributeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeFpgaImageAttributeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the Amazon FPGA Images (AFIs) available to you. These include public AFIs, private AFIs that you own, and AFIs owned by other AWS accounts for which you have load permissions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeFpgaImages(
    args: DescribeFpgaImagesInput
  ): Promise<DescribeFpgaImagesOutput>;
  public describeFpgaImages(
    args: DescribeFpgaImagesInput,
    cb: (err: any, data?: DescribeFpgaImagesOutput) => void
  ): void;
  public describeFpgaImages(
    args: DescribeFpgaImagesInput,
    cb?: (err: any, data?: DescribeFpgaImagesOutput) => void
  ): Promise<DescribeFpgaImagesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeFpgaImagesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the Dedicated Host reservations that are available to purchase.</p> <p>The results describe all the Dedicated Host reservation offerings, including offerings that may not match the instance family and Region of your Dedicated Hosts. When purchasing an offering, ensure that the instance family and Region of the offering matches that of the Dedicated Hosts with which it is to be associated. For more information about supported instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html">Dedicated Hosts Overview</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeHostReservationOfferings(
    args: DescribeHostReservationOfferingsInput
  ): Promise<DescribeHostReservationOfferingsOutput>;
  public describeHostReservationOfferings(
    args: DescribeHostReservationOfferingsInput,
    cb: (err: any, data?: DescribeHostReservationOfferingsOutput) => void
  ): void;
  public describeHostReservationOfferings(
    args: DescribeHostReservationOfferingsInput,
    cb?: (err: any, data?: DescribeHostReservationOfferingsOutput) => void
  ): Promise<DescribeHostReservationOfferingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeHostReservationOfferingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes reservations that are associated with Dedicated Hosts in your account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeHostReservations(
    args: DescribeHostReservationsInput
  ): Promise<DescribeHostReservationsOutput>;
  public describeHostReservations(
    args: DescribeHostReservationsInput,
    cb: (err: any, data?: DescribeHostReservationsOutput) => void
  ): void;
  public describeHostReservations(
    args: DescribeHostReservationsInput,
    cb?: (err: any, data?: DescribeHostReservationsOutput) => void
  ): Promise<DescribeHostReservationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeHostReservationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified Dedicated Hosts or all your Dedicated Hosts.</p> <p>The results describe only the Dedicated Hosts in the Region you're currently using. All listed instances consume capacity on your Dedicated Host. Dedicated Hosts that have recently been released are listed with the state <code>released</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeHosts(args: DescribeHostsInput): Promise<DescribeHostsOutput>;
  public describeHosts(
    args: DescribeHostsInput,
    cb: (err: any, data?: DescribeHostsOutput) => void
  ): void;
  public describeHosts(
    args: DescribeHostsInput,
    cb?: (err: any, data?: DescribeHostsOutput) => void
  ): Promise<DescribeHostsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeHostsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes your IAM instance profile associations.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeIamInstanceProfileAssociations(
    args: DescribeIamInstanceProfileAssociationsInput
  ): Promise<DescribeIamInstanceProfileAssociationsOutput>;
  public describeIamInstanceProfileAssociations(
    args: DescribeIamInstanceProfileAssociationsInput,
    cb: (err: any, data?: DescribeIamInstanceProfileAssociationsOutput) => void
  ): void;
  public describeIamInstanceProfileAssociations(
    args: DescribeIamInstanceProfileAssociationsInput,
    cb?: (err: any, data?: DescribeIamInstanceProfileAssociationsOutput) => void
  ): Promise<DescribeIamInstanceProfileAssociationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeIamInstanceProfileAssociationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the ID format settings for your resources on a per-Region basis, for example, to view which resource types are enabled for longer IDs. This request only returns information about resource types whose ID formats can be modified; it does not return information about other resource types.</p> <p>The following resource types support longer IDs: <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> | <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> | <code>export-task</code> | <code>flow-log</code> | <code>image</code> | <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> | <code>network-acl</code> | <code>network-acl-association</code> | <code>network-interface</code> | <code>network-interface-attachment</code> | <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> | <code>route-table-association</code> | <code>security-group</code> | <code>snapshot</code> | <code>subnet</code> | <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code> | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p> <p>These settings apply to the IAM user who makes the request; they do not apply to the entire AWS account. By default, an IAM user defaults to the same settings as the root user, unless they explicitly override the settings by running the <a>ModifyIdFormat</a> command. Resources created with longer IDs are visible to all IAM users, regardless of these settings and provided that they have permission to use the relevant <code>Describe</code> command for the resource type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeIdFormat(
    args: DescribeIdFormatInput
  ): Promise<DescribeIdFormatOutput>;
  public describeIdFormat(
    args: DescribeIdFormatInput,
    cb: (err: any, data?: DescribeIdFormatOutput) => void
  ): void;
  public describeIdFormat(
    args: DescribeIdFormatInput,
    cb?: (err: any, data?: DescribeIdFormatOutput) => void
  ): Promise<DescribeIdFormatOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeIdFormatCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the ID format settings for resources for the specified IAM user, IAM role, or root user. For example, you can view the resource types that are enabled for longer IDs. This request only returns information about resource types whose ID formats can be modified; it does not return information about other resource types. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resource-ids.html">Resource IDs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. </p> <p>The following resource types support longer IDs: <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> | <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> | <code>export-task</code> | <code>flow-log</code> | <code>image</code> | <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> | <code>network-acl</code> | <code>network-acl-association</code> | <code>network-interface</code> | <code>network-interface-attachment</code> | <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> | <code>route-table-association</code> | <code>security-group</code> | <code>snapshot</code> | <code>subnet</code> | <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code> | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p> <p>These settings apply to the principal specified in the request. They do not apply to the principal that makes the request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeIdentityIdFormat(
    args: DescribeIdentityIdFormatInput
  ): Promise<DescribeIdentityIdFormatOutput>;
  public describeIdentityIdFormat(
    args: DescribeIdentityIdFormatInput,
    cb: (err: any, data?: DescribeIdentityIdFormatOutput) => void
  ): void;
  public describeIdentityIdFormat(
    args: DescribeIdentityIdFormatInput,
    cb?: (err: any, data?: DescribeIdentityIdFormatOutput) => void
  ): Promise<DescribeIdentityIdFormatOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeIdentityIdFormatCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified attribute of the specified AMI. You can specify only one attribute at a time.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeImageAttribute(
    args: DescribeImageAttributeInput
  ): Promise<DescribeImageAttributeOutput>;
  public describeImageAttribute(
    args: DescribeImageAttributeInput,
    cb: (err: any, data?: DescribeImageAttributeOutput) => void
  ): void;
  public describeImageAttribute(
    args: DescribeImageAttributeInput,
    cb?: (err: any, data?: DescribeImageAttributeOutput) => void
  ): Promise<DescribeImageAttributeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeImageAttributeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified images (AMIs, AKIs, and ARIs) available to you or all of the images available to you.</p> <p>The images available to you include public images, private images that you own, and private images owned by other AWS accounts for which you have explicit launch permissions.</p> <p>Recently deregistered images appear in the returned results for a short interval and then return empty results. After all instances that reference a deregistered AMI are terminated, specifying the ID of the image results in an error indicating that the AMI ID cannot be found.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeImages(
    args: DescribeImagesInput
  ): Promise<DescribeImagesOutput>;
  public describeImages(
    args: DescribeImagesInput,
    cb: (err: any, data?: DescribeImagesOutput) => void
  ): void;
  public describeImages(
    args: DescribeImagesInput,
    cb?: (err: any, data?: DescribeImagesOutput) => void
  ): Promise<DescribeImagesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeImagesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Displays details about an import virtual machine or import snapshot tasks that are already created.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeImportImageTasks(
    args: DescribeImportImageTasksInput
  ): Promise<DescribeImportImageTasksOutput>;
  public describeImportImageTasks(
    args: DescribeImportImageTasksInput,
    cb: (err: any, data?: DescribeImportImageTasksOutput) => void
  ): void;
  public describeImportImageTasks(
    args: DescribeImportImageTasksInput,
    cb?: (err: any, data?: DescribeImportImageTasksOutput) => void
  ): Promise<DescribeImportImageTasksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeImportImageTasksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes your import snapshot tasks.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeImportSnapshotTasks(
    args: DescribeImportSnapshotTasksInput
  ): Promise<DescribeImportSnapshotTasksOutput>;
  public describeImportSnapshotTasks(
    args: DescribeImportSnapshotTasksInput,
    cb: (err: any, data?: DescribeImportSnapshotTasksOutput) => void
  ): void;
  public describeImportSnapshotTasks(
    args: DescribeImportSnapshotTasksInput,
    cb?: (err: any, data?: DescribeImportSnapshotTasksOutput) => void
  ): Promise<DescribeImportSnapshotTasksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeImportSnapshotTasksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified attribute of the specified instance. You can specify only one attribute at a time. Valid attribute values are: <code>instanceType</code> | <code>kernel</code> | <code>ramdisk</code> | <code>userData</code> | <code>disableApiTermination</code> | <code>instanceInitiatedShutdownBehavior</code> | <code>rootDeviceName</code> | <code>blockDeviceMapping</code> | <code>productCodes</code> | <code>sourceDestCheck</code> | <code>groupSet</code> | <code>ebsOptimized</code> | <code>sriovNetSupport</code> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeInstanceAttribute(
    args: DescribeInstanceAttributeInput
  ): Promise<DescribeInstanceAttributeOutput>;
  public describeInstanceAttribute(
    args: DescribeInstanceAttributeInput,
    cb: (err: any, data?: DescribeInstanceAttributeOutput) => void
  ): void;
  public describeInstanceAttribute(
    args: DescribeInstanceAttributeInput,
    cb?: (err: any, data?: DescribeInstanceAttributeOutput) => void
  ): Promise<DescribeInstanceAttributeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeInstanceAttributeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the credit option for CPU usage of the specified T2 or T3 instances. The credit options are <code>standard</code> and <code>unlimited</code>.</p> <p>If you do not specify an instance ID, Amazon EC2 returns T2 and T3 instances with the <code>unlimited</code> credit option, as well as instances that were previously configured as T2 or T3 with the <code>unlimited</code> credit option. For example, if you resize a T2 instance, while it is configured as <code>unlimited</code>, to an M4 instance, Amazon EC2 returns the M4 instance.</p> <p>If you specify one or more instance IDs, Amazon EC2 returns the credit option (<code>standard</code> or <code>unlimited</code>) of those instances. If you specify an instance ID that is not valid, such as an instance that is not a T2 or T3 instance, an error is returned.</p> <p>Recently terminated instances might appear in the returned results. This interval is usually less than one hour.</p> <p>If an Availability Zone is experiencing a service disruption and you specify instance IDs in the affected zone, or do not specify any instance IDs at all, the call fails. If you specify only instance IDs in an unaffected zone, the call works normally.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable Performance Instances</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeInstanceCreditSpecifications(
    args: DescribeInstanceCreditSpecificationsInput
  ): Promise<DescribeInstanceCreditSpecificationsOutput>;
  public describeInstanceCreditSpecifications(
    args: DescribeInstanceCreditSpecificationsInput,
    cb: (err: any, data?: DescribeInstanceCreditSpecificationsOutput) => void
  ): void;
  public describeInstanceCreditSpecifications(
    args: DescribeInstanceCreditSpecificationsInput,
    cb?: (err: any, data?: DescribeInstanceCreditSpecificationsOutput) => void
  ): Promise<DescribeInstanceCreditSpecificationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeInstanceCreditSpecificationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the status of the specified instances or all of your instances. By default, only running instances are described, unless you specifically indicate to return the status of all instances.</p> <p>Instance status includes the following components:</p> <ul> <li> <p> <b>Status checks</b> - Amazon EC2 performs status checks on running EC2 instances to identify hardware and software issues. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-system-instance-status-check.html">Status Checks for Your Instances</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstances.html">Troubleshooting Instances with Failed Status Checks</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </li> <li> <p> <b>Scheduled events</b> - Amazon EC2 can schedule events (such as reboot, stop, or terminate) for your instances related to hardware issues, software updates, or system maintenance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-instances-status-check_sched.html">Scheduled Events for Your Instances</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </li> <li> <p> <b>Instance state</b> - You can manage your instances from the moment you launch them through their termination. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html">Instance Lifecycle</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeInstanceStatus(
    args: DescribeInstanceStatusInput
  ): Promise<DescribeInstanceStatusOutput>;
  public describeInstanceStatus(
    args: DescribeInstanceStatusInput,
    cb: (err: any, data?: DescribeInstanceStatusOutput) => void
  ): void;
  public describeInstanceStatus(
    args: DescribeInstanceStatusInput,
    cb?: (err: any, data?: DescribeInstanceStatusOutput) => void
  ): Promise<DescribeInstanceStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeInstanceStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified instances or all of AWS account's instances.</p> <p>If you specify one or more instance IDs, Amazon EC2 returns information for those instances. If you do not specify instance IDs, Amazon EC2 returns information for all relevant instances. If you specify an instance ID that is not valid, an error is returned. If you specify an instance that you do not own, it is not included in the returned results.</p> <p>Recently terminated instances might appear in the returned results. This interval is usually less than one hour.</p> <p>If you describe instances in the rare case where an Availability Zone is experiencing a service disruption and you specify instance IDs that are in the affected zone, or do not specify any instance IDs at all, the call fails. If you describe instances and specify only instance IDs that are in an unaffected zone, the call works normally.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeInstances(
    args: DescribeInstancesInput
  ): Promise<DescribeInstancesOutput>;
  public describeInstances(
    args: DescribeInstancesInput,
    cb: (err: any, data?: DescribeInstancesOutput) => void
  ): void;
  public describeInstances(
    args: DescribeInstancesInput,
    cb?: (err: any, data?: DescribeInstancesOutput) => void
  ): Promise<DescribeInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more of your internet gateways.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeInternetGateways(
    args: DescribeInternetGatewaysInput
  ): Promise<DescribeInternetGatewaysOutput>;
  public describeInternetGateways(
    args: DescribeInternetGatewaysInput,
    cb: (err: any, data?: DescribeInternetGatewaysOutput) => void
  ): void;
  public describeInternetGateways(
    args: DescribeInternetGatewaysInput,
    cb?: (err: any, data?: DescribeInternetGatewaysOutput) => void
  ): Promise<DescribeInternetGatewaysOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeInternetGatewaysCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified key pairs or all of your key pairs.</p> <p>For more information about key pairs, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Key Pairs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeKeyPairs(
    args: DescribeKeyPairsInput
  ): Promise<DescribeKeyPairsOutput>;
  public describeKeyPairs(
    args: DescribeKeyPairsInput,
    cb: (err: any, data?: DescribeKeyPairsOutput) => void
  ): void;
  public describeKeyPairs(
    args: DescribeKeyPairsInput,
    cb?: (err: any, data?: DescribeKeyPairsOutput) => void
  ): Promise<DescribeKeyPairsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeKeyPairsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more versions of a specified launch template. You can describe all versions, individual versions, or a range of versions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeLaunchTemplateVersions(
    args: DescribeLaunchTemplateVersionsInput
  ): Promise<DescribeLaunchTemplateVersionsOutput>;
  public describeLaunchTemplateVersions(
    args: DescribeLaunchTemplateVersionsInput,
    cb: (err: any, data?: DescribeLaunchTemplateVersionsOutput) => void
  ): void;
  public describeLaunchTemplateVersions(
    args: DescribeLaunchTemplateVersionsInput,
    cb?: (err: any, data?: DescribeLaunchTemplateVersionsOutput) => void
  ): Promise<DescribeLaunchTemplateVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeLaunchTemplateVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more launch templates.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeLaunchTemplates(
    args: DescribeLaunchTemplatesInput
  ): Promise<DescribeLaunchTemplatesOutput>;
  public describeLaunchTemplates(
    args: DescribeLaunchTemplatesInput,
    cb: (err: any, data?: DescribeLaunchTemplatesOutput) => void
  ): void;
  public describeLaunchTemplates(
    args: DescribeLaunchTemplatesInput,
    cb?: (err: any, data?: DescribeLaunchTemplatesOutput) => void
  ): Promise<DescribeLaunchTemplatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeLaunchTemplatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes your Elastic IP addresses that are being moved to the EC2-VPC platform, or that are being restored to the EC2-Classic platform. This request does not return information about any other Elastic IP addresses in your account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeMovingAddresses(
    args: DescribeMovingAddressesInput
  ): Promise<DescribeMovingAddressesOutput>;
  public describeMovingAddresses(
    args: DescribeMovingAddressesInput,
    cb: (err: any, data?: DescribeMovingAddressesOutput) => void
  ): void;
  public describeMovingAddresses(
    args: DescribeMovingAddressesInput,
    cb?: (err: any, data?: DescribeMovingAddressesOutput) => void
  ): Promise<DescribeMovingAddressesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeMovingAddressesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more of your NAT gateways.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeNatGateways(
    args: DescribeNatGatewaysInput
  ): Promise<DescribeNatGatewaysOutput>;
  public describeNatGateways(
    args: DescribeNatGatewaysInput,
    cb: (err: any, data?: DescribeNatGatewaysOutput) => void
  ): void;
  public describeNatGateways(
    args: DescribeNatGatewaysInput,
    cb?: (err: any, data?: DescribeNatGatewaysOutput) => void
  ): Promise<DescribeNatGatewaysOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeNatGatewaysCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more of your network ACLs.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeNetworkAcls(
    args: DescribeNetworkAclsInput
  ): Promise<DescribeNetworkAclsOutput>;
  public describeNetworkAcls(
    args: DescribeNetworkAclsInput,
    cb: (err: any, data?: DescribeNetworkAclsOutput) => void
  ): void;
  public describeNetworkAcls(
    args: DescribeNetworkAclsInput,
    cb?: (err: any, data?: DescribeNetworkAclsOutput) => void
  ): Promise<DescribeNetworkAclsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeNetworkAclsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a network interface attribute. You can specify only one attribute at a time.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeNetworkInterfaceAttribute(
    args: DescribeNetworkInterfaceAttributeInput
  ): Promise<DescribeNetworkInterfaceAttributeOutput>;
  public describeNetworkInterfaceAttribute(
    args: DescribeNetworkInterfaceAttributeInput,
    cb: (err: any, data?: DescribeNetworkInterfaceAttributeOutput) => void
  ): void;
  public describeNetworkInterfaceAttribute(
    args: DescribeNetworkInterfaceAttributeInput,
    cb?: (err: any, data?: DescribeNetworkInterfaceAttributeOutput) => void
  ): Promise<DescribeNetworkInterfaceAttributeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeNetworkInterfaceAttributeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the permissions for your network interfaces. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeNetworkInterfacePermissions(
    args: DescribeNetworkInterfacePermissionsInput
  ): Promise<DescribeNetworkInterfacePermissionsOutput>;
  public describeNetworkInterfacePermissions(
    args: DescribeNetworkInterfacePermissionsInput,
    cb: (err: any, data?: DescribeNetworkInterfacePermissionsOutput) => void
  ): void;
  public describeNetworkInterfacePermissions(
    args: DescribeNetworkInterfacePermissionsInput,
    cb?: (err: any, data?: DescribeNetworkInterfacePermissionsOutput) => void
  ): Promise<DescribeNetworkInterfacePermissionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeNetworkInterfacePermissionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more of your network interfaces.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeNetworkInterfaces(
    args: DescribeNetworkInterfacesInput
  ): Promise<DescribeNetworkInterfacesOutput>;
  public describeNetworkInterfaces(
    args: DescribeNetworkInterfacesInput,
    cb: (err: any, data?: DescribeNetworkInterfacesOutput) => void
  ): void;
  public describeNetworkInterfaces(
    args: DescribeNetworkInterfacesInput,
    cb?: (err: any, data?: DescribeNetworkInterfacesOutput) => void
  ): Promise<DescribeNetworkInterfacesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeNetworkInterfacesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified placement groups or all of your placement groups. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement Groups</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describePlacementGroups(
    args: DescribePlacementGroupsInput
  ): Promise<DescribePlacementGroupsOutput>;
  public describePlacementGroups(
    args: DescribePlacementGroupsInput,
    cb: (err: any, data?: DescribePlacementGroupsOutput) => void
  ): void;
  public describePlacementGroups(
    args: DescribePlacementGroupsInput,
    cb?: (err: any, data?: DescribePlacementGroupsOutput) => void
  ): Promise<DescribePlacementGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribePlacementGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes available AWS services in a prefix list format, which includes the prefix list name and prefix list ID of the service and the IP address range for the service. A prefix list ID is required for creating an outbound security group rule that allows traffic from a VPC to access an AWS service through a gateway VPC endpoint. Currently, the services that support this action are Amazon S3 and Amazon DynamoDB.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describePrefixLists(
    args: DescribePrefixListsInput
  ): Promise<DescribePrefixListsOutput>;
  public describePrefixLists(
    args: DescribePrefixListsInput,
    cb: (err: any, data?: DescribePrefixListsOutput) => void
  ): void;
  public describePrefixLists(
    args: DescribePrefixListsInput,
    cb?: (err: any, data?: DescribePrefixListsOutput) => void
  ): Promise<DescribePrefixListsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribePrefixListsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the ID format settings for the root user and all IAM roles and IAM users that have explicitly specified a longer ID (17-character ID) preference. </p> <p>By default, all IAM roles and IAM users default to the same ID settings as the root user, unless they explicitly override the settings. This request is useful for identifying those IAM users and IAM roles that have overridden the default ID settings.</p> <p>The following resource types support longer IDs: <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> | <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> | <code>export-task</code> | <code>flow-log</code> | <code>image</code> | <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> | <code>network-acl</code> | <code>network-acl-association</code> | <code>network-interface</code> | <code>network-interface-attachment</code> | <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> | <code>route-table-association</code> | <code>security-group</code> | <code>snapshot</code> | <code>subnet</code> | <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code> | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describePrincipalIdFormat(
    args: DescribePrincipalIdFormatInput
  ): Promise<DescribePrincipalIdFormatOutput>;
  public describePrincipalIdFormat(
    args: DescribePrincipalIdFormatInput,
    cb: (err: any, data?: DescribePrincipalIdFormatOutput) => void
  ): void;
  public describePrincipalIdFormat(
    args: DescribePrincipalIdFormatInput,
    cb?: (err: any, data?: DescribePrincipalIdFormatOutput) => void
  ): Promise<DescribePrincipalIdFormatOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribePrincipalIdFormatCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified IPv4 address pools.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describePublicIpv4Pools(
    args: DescribePublicIpv4PoolsInput
  ): Promise<DescribePublicIpv4PoolsOutput>;
  public describePublicIpv4Pools(
    args: DescribePublicIpv4PoolsInput,
    cb: (err: any, data?: DescribePublicIpv4PoolsOutput) => void
  ): void;
  public describePublicIpv4Pools(
    args: DescribePublicIpv4PoolsInput,
    cb?: (err: any, data?: DescribePublicIpv4PoolsOutput) => void
  ): Promise<DescribePublicIpv4PoolsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribePublicIpv4PoolsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the Regions that are enabled for your account, or all Regions.</p> <p>For a list of the Regions supported by Amazon EC2, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#ec2_region"> Regions and Endpoints</a>.</p> <p>For information about enabling and disabling Regions for your account, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing AWS Regions</a> in the <i>AWS General Reference</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeRegions(
    args: DescribeRegionsInput
  ): Promise<DescribeRegionsOutput>;
  public describeRegions(
    args: DescribeRegionsInput,
    cb: (err: any, data?: DescribeRegionsOutput) => void
  ): void;
  public describeRegions(
    args: DescribeRegionsInput,
    cb?: (err: any, data?: DescribeRegionsOutput) => void
  ): Promise<DescribeRegionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeRegionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more of the Reserved Instances that you purchased.</p> <p>For more information about Reserved Instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts-on-demand-reserved-instances.html">Reserved Instances</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeReservedInstances(
    args: DescribeReservedInstancesInput
  ): Promise<DescribeReservedInstancesOutput>;
  public describeReservedInstances(
    args: DescribeReservedInstancesInput,
    cb: (err: any, data?: DescribeReservedInstancesOutput) => void
  ): void;
  public describeReservedInstances(
    args: DescribeReservedInstancesInput,
    cb?: (err: any, data?: DescribeReservedInstancesOutput) => void
  ): Promise<DescribeReservedInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeReservedInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes your account's Reserved Instance listings in the Reserved Instance Marketplace.</p> <p>The Reserved Instance Marketplace matches sellers who want to resell Reserved Instance capacity that they no longer need with buyers who want to purchase additional capacity. Reserved Instances bought and sold through the Reserved Instance Marketplace work like any other Reserved Instances.</p> <p>As a seller, you choose to list some or all of your Reserved Instances, and you specify the upfront price to receive for them. Your Reserved Instances are then listed in the Reserved Instance Marketplace and are available for purchase.</p> <p>As a buyer, you specify the configuration of the Reserved Instance to purchase, and the Marketplace matches what you're searching for with what's available. The Marketplace first sells the lowest priced Reserved Instances to you, and continues to sell available Reserved Instance listings to you until your demand is met. You are charged based on the total price of all of the listings that you purchase.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeReservedInstancesListings(
    args: DescribeReservedInstancesListingsInput
  ): Promise<DescribeReservedInstancesListingsOutput>;
  public describeReservedInstancesListings(
    args: DescribeReservedInstancesListingsInput,
    cb: (err: any, data?: DescribeReservedInstancesListingsOutput) => void
  ): void;
  public describeReservedInstancesListings(
    args: DescribeReservedInstancesListingsInput,
    cb?: (err: any, data?: DescribeReservedInstancesListingsOutput) => void
  ): Promise<DescribeReservedInstancesListingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeReservedInstancesListingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the modifications made to your Reserved Instances. If no parameter is specified, information about all your Reserved Instances modification requests is returned. If a modification ID is specified, only information about the specific modification is returned.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html">Modifying Reserved Instances</a> in the Amazon Elastic Compute Cloud User Guide.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeReservedInstancesModifications(
    args: DescribeReservedInstancesModificationsInput
  ): Promise<DescribeReservedInstancesModificationsOutput>;
  public describeReservedInstancesModifications(
    args: DescribeReservedInstancesModificationsInput,
    cb: (err: any, data?: DescribeReservedInstancesModificationsOutput) => void
  ): void;
  public describeReservedInstancesModifications(
    args: DescribeReservedInstancesModificationsInput,
    cb?: (err: any, data?: DescribeReservedInstancesModificationsOutput) => void
  ): Promise<DescribeReservedInstancesModificationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeReservedInstancesModificationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes Reserved Instance offerings that are available for purchase. With Reserved Instances, you purchase the right to launch instances for a period of time. During that time period, you do not receive insufficient capacity errors, and you pay a lower usage rate than the rate charged for On-Demand instances for the actual time used.</p> <p>If you have listed your own Reserved Instances for sale in the Reserved Instance Marketplace, they will be excluded from these results. This is to ensure that you do not purchase your own Reserved Instances.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeReservedInstancesOfferings(
    args: DescribeReservedInstancesOfferingsInput
  ): Promise<DescribeReservedInstancesOfferingsOutput>;
  public describeReservedInstancesOfferings(
    args: DescribeReservedInstancesOfferingsInput,
    cb: (err: any, data?: DescribeReservedInstancesOfferingsOutput) => void
  ): void;
  public describeReservedInstancesOfferings(
    args: DescribeReservedInstancesOfferingsInput,
    cb?: (err: any, data?: DescribeReservedInstancesOfferingsOutput) => void
  ): Promise<DescribeReservedInstancesOfferingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeReservedInstancesOfferingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more of your route tables.</p> <p>Each subnet in your VPC must be associated with a route table. If a subnet is not explicitly associated with any route table, it is implicitly associated with the main route table. This command does not return the subnet ID for implicit associations.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route Tables</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeRouteTables(
    args: DescribeRouteTablesInput
  ): Promise<DescribeRouteTablesOutput>;
  public describeRouteTables(
    args: DescribeRouteTablesInput,
    cb: (err: any, data?: DescribeRouteTablesOutput) => void
  ): void;
  public describeRouteTables(
    args: DescribeRouteTablesInput,
    cb?: (err: any, data?: DescribeRouteTablesOutput) => void
  ): Promise<DescribeRouteTablesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeRouteTablesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Finds available schedules that meet the specified criteria.</p> <p>You can search for an available schedule no more than 3 months in advance. You must meet the minimum required duration of 1,200 hours per year. For example, the minimum daily schedule is 4 hours, the minimum weekly schedule is 24 hours, and the minimum monthly schedule is 100 hours.</p> <p>After you find a schedule that meets your needs, call <a>PurchaseScheduledInstances</a> to purchase Scheduled Instances with that schedule.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeScheduledInstanceAvailability(
    args: DescribeScheduledInstanceAvailabilityInput
  ): Promise<DescribeScheduledInstanceAvailabilityOutput>;
  public describeScheduledInstanceAvailability(
    args: DescribeScheduledInstanceAvailabilityInput,
    cb: (err: any, data?: DescribeScheduledInstanceAvailabilityOutput) => void
  ): void;
  public describeScheduledInstanceAvailability(
    args: DescribeScheduledInstanceAvailabilityInput,
    cb?: (err: any, data?: DescribeScheduledInstanceAvailabilityOutput) => void
  ): Promise<DescribeScheduledInstanceAvailabilityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeScheduledInstanceAvailabilityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified Scheduled Instances or all your Scheduled Instances.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeScheduledInstances(
    args: DescribeScheduledInstancesInput
  ): Promise<DescribeScheduledInstancesOutput>;
  public describeScheduledInstances(
    args: DescribeScheduledInstancesInput,
    cb: (err: any, data?: DescribeScheduledInstancesOutput) => void
  ): void;
  public describeScheduledInstances(
    args: DescribeScheduledInstancesInput,
    cb?: (err: any, data?: DescribeScheduledInstancesOutput) => void
  ): Promise<DescribeScheduledInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeScheduledInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>[VPC only] Describes the VPCs on the other side of a VPC peering connection that are referencing the security groups you've specified in this request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSecurityGroupReferences(
    args: DescribeSecurityGroupReferencesInput
  ): Promise<DescribeSecurityGroupReferencesOutput>;
  public describeSecurityGroupReferences(
    args: DescribeSecurityGroupReferencesInput,
    cb: (err: any, data?: DescribeSecurityGroupReferencesOutput) => void
  ): void;
  public describeSecurityGroupReferences(
    args: DescribeSecurityGroupReferencesInput,
    cb?: (err: any, data?: DescribeSecurityGroupReferencesOutput) => void
  ): Promise<DescribeSecurityGroupReferencesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSecurityGroupReferencesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified security groups or all of your security groups.</p> <p>A security group is for use with instances either in the EC2-Classic platform or in a specific VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html">Amazon EC2 Security Groups</a> in the <i>Amazon Elastic Compute Cloud User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html">Security Groups for Your VPC</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSecurityGroups(
    args: DescribeSecurityGroupsInput
  ): Promise<DescribeSecurityGroupsOutput>;
  public describeSecurityGroups(
    args: DescribeSecurityGroupsInput,
    cb: (err: any, data?: DescribeSecurityGroupsOutput) => void
  ): void;
  public describeSecurityGroups(
    args: DescribeSecurityGroupsInput,
    cb?: (err: any, data?: DescribeSecurityGroupsOutput) => void
  ): Promise<DescribeSecurityGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSecurityGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified attribute of the specified snapshot. You can specify only one attribute at a time.</p> <p>For more information about EBS snapshots, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html">Amazon EBS Snapshots</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSnapshotAttribute(
    args: DescribeSnapshotAttributeInput
  ): Promise<DescribeSnapshotAttributeOutput>;
  public describeSnapshotAttribute(
    args: DescribeSnapshotAttributeInput,
    cb: (err: any, data?: DescribeSnapshotAttributeOutput) => void
  ): void;
  public describeSnapshotAttribute(
    args: DescribeSnapshotAttributeInput,
    cb?: (err: any, data?: DescribeSnapshotAttributeOutput) => void
  ): Promise<DescribeSnapshotAttributeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSnapshotAttributeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified EBS snapshots available to you or all of the EBS snapshots available to you.</p> <p>The snapshots available to you include public snapshots, private snapshots that you own, and private snapshots owned by other AWS accounts for which you have explicit create volume permissions.</p> <p>The create volume permissions fall into the following categories:</p> <ul> <li> <p> <i>public</i>: The owner of the snapshot granted create volume permissions for the snapshot to the <code>all</code> group. All AWS accounts have create volume permissions for these snapshots.</p> </li> <li> <p> <i>explicit</i>: The owner of the snapshot granted create volume permissions to a specific AWS account.</p> </li> <li> <p> <i>implicit</i>: An AWS account has implicit create volume permissions for all snapshots it owns.</p> </li> </ul> <p>The list of snapshots returned can be modified by specifying snapshot IDs, snapshot owners, or AWS accounts with create volume permissions. If no options are specified, Amazon EC2 returns all snapshots for which you have create volume permissions.</p> <p>If you specify one or more snapshot IDs, only snapshots that have the specified IDs are returned. If you specify an invalid snapshot ID, an error is returned. If you specify a snapshot ID for which you do not have access, it is not included in the returned results.</p> <p>If you specify one or more snapshot owners using the <code>OwnerIds</code> option, only snapshots from the specified owners and for which you have access are returned. The results can include the AWS account IDs of the specified owners, <code>amazon</code> for snapshots owned by Amazon, or <code>self</code> for snapshots that you own.</p> <p>If you specify a list of restorable users, only snapshots with create snapshot permissions for those users are returned. You can specify AWS account IDs (if you own the snapshots), <code>self</code> for snapshots for which you own or have explicit permissions, or <code>all</code> for public snapshots.</p> <p>If you are describing a long list of snapshots, you can paginate the output to make the list more manageable. The <code>MaxResults</code> parameter sets the maximum number of results returned in a single page. If the list of results exceeds your <code>MaxResults</code> value, then that number of results is returned along with a <code>NextToken</code> value that can be passed to a subsequent <code>DescribeSnapshots</code> request to retrieve the remaining results.</p> <p>For more information about EBS snapshots, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html">Amazon EBS Snapshots</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSnapshots(
    args: DescribeSnapshotsInput
  ): Promise<DescribeSnapshotsOutput>;
  public describeSnapshots(
    args: DescribeSnapshotsInput,
    cb: (err: any, data?: DescribeSnapshotsOutput) => void
  ): void;
  public describeSnapshots(
    args: DescribeSnapshotsInput,
    cb?: (err: any, data?: DescribeSnapshotsOutput) => void
  ): Promise<DescribeSnapshotsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSnapshotsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the data feed for Spot Instances. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-data-feeds.html">Spot Instance Data Feed</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSpotDatafeedSubscription(
    args: DescribeSpotDatafeedSubscriptionInput
  ): Promise<DescribeSpotDatafeedSubscriptionOutput>;
  public describeSpotDatafeedSubscription(
    args: DescribeSpotDatafeedSubscriptionInput,
    cb: (err: any, data?: DescribeSpotDatafeedSubscriptionOutput) => void
  ): void;
  public describeSpotDatafeedSubscription(
    args: DescribeSpotDatafeedSubscriptionInput,
    cb?: (err: any, data?: DescribeSpotDatafeedSubscriptionOutput) => void
  ): Promise<DescribeSpotDatafeedSubscriptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSpotDatafeedSubscriptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the running instances for the specified Spot Fleet.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSpotFleetInstances(
    args: DescribeSpotFleetInstancesInput
  ): Promise<DescribeSpotFleetInstancesOutput>;
  public describeSpotFleetInstances(
    args: DescribeSpotFleetInstancesInput,
    cb: (err: any, data?: DescribeSpotFleetInstancesOutput) => void
  ): void;
  public describeSpotFleetInstances(
    args: DescribeSpotFleetInstancesInput,
    cb?: (err: any, data?: DescribeSpotFleetInstancesOutput) => void
  ): Promise<DescribeSpotFleetInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSpotFleetInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the events for the specified Spot Fleet request during the specified time.</p> <p>Spot Fleet events are delayed by up to 30 seconds before they can be described. This ensures that you can query by the last evaluated time and not miss a recorded event. Spot Fleet events are available for 48 hours.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSpotFleetRequestHistory(
    args: DescribeSpotFleetRequestHistoryInput
  ): Promise<DescribeSpotFleetRequestHistoryOutput>;
  public describeSpotFleetRequestHistory(
    args: DescribeSpotFleetRequestHistoryInput,
    cb: (err: any, data?: DescribeSpotFleetRequestHistoryOutput) => void
  ): void;
  public describeSpotFleetRequestHistory(
    args: DescribeSpotFleetRequestHistoryInput,
    cb?: (err: any, data?: DescribeSpotFleetRequestHistoryOutput) => void
  ): Promise<DescribeSpotFleetRequestHistoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSpotFleetRequestHistoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes your Spot Fleet requests.</p> <p>Spot Fleet requests are deleted 48 hours after they are canceled and their instances are terminated.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSpotFleetRequests(
    args: DescribeSpotFleetRequestsInput
  ): Promise<DescribeSpotFleetRequestsOutput>;
  public describeSpotFleetRequests(
    args: DescribeSpotFleetRequestsInput,
    cb: (err: any, data?: DescribeSpotFleetRequestsOutput) => void
  ): void;
  public describeSpotFleetRequests(
    args: DescribeSpotFleetRequestsInput,
    cb?: (err: any, data?: DescribeSpotFleetRequestsOutput) => void
  ): Promise<DescribeSpotFleetRequestsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSpotFleetRequestsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified Spot Instance requests.</p> <p>You can use <code>DescribeSpotInstanceRequests</code> to find a running Spot Instance by examining the response. If the status of the Spot Instance is <code>fulfilled</code>, the instance ID appears in the response and contains the identifier of the instance. Alternatively, you can use <a>DescribeInstances</a> with a filter to look for instances where the instance lifecycle is <code>spot</code>.</p> <p>We recommend that you set <code>MaxResults</code> to a value between 5 and 1000 to limit the number of results returned. This paginates the output, which makes the list more manageable and returns the results faster. If the list of results exceeds your <code>MaxResults</code> value, then that number of results is returned along with a <code>NextToken</code> value that can be passed to a subsequent <code>DescribeSpotInstanceRequests</code> request to retrieve the remaining results.</p> <p>Spot Instance requests are deleted four hours after they are canceled and their instances are terminated.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSpotInstanceRequests(
    args: DescribeSpotInstanceRequestsInput
  ): Promise<DescribeSpotInstanceRequestsOutput>;
  public describeSpotInstanceRequests(
    args: DescribeSpotInstanceRequestsInput,
    cb: (err: any, data?: DescribeSpotInstanceRequestsOutput) => void
  ): void;
  public describeSpotInstanceRequests(
    args: DescribeSpotInstanceRequestsInput,
    cb?: (err: any, data?: DescribeSpotInstanceRequestsOutput) => void
  ): Promise<DescribeSpotInstanceRequestsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSpotInstanceRequestsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the Spot price history. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances-history.html">Spot Instance Pricing History</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> <p>When you specify a start and end time, this operation returns the prices of the instance types within the time range that you specified and the time when the price changed. The price is valid within the time period that you specified; the response merely indicates the last time that the price changed.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSpotPriceHistory(
    args: DescribeSpotPriceHistoryInput
  ): Promise<DescribeSpotPriceHistoryOutput>;
  public describeSpotPriceHistory(
    args: DescribeSpotPriceHistoryInput,
    cb: (err: any, data?: DescribeSpotPriceHistoryOutput) => void
  ): void;
  public describeSpotPriceHistory(
    args: DescribeSpotPriceHistoryInput,
    cb?: (err: any, data?: DescribeSpotPriceHistoryOutput) => void
  ): Promise<DescribeSpotPriceHistoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSpotPriceHistoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>[VPC only] Describes the stale security group rules for security groups in a specified VPC. Rules are stale when they reference a deleted security group in a peer VPC, or a security group in a peer VPC for which the VPC peering connection has been deleted.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeStaleSecurityGroups(
    args: DescribeStaleSecurityGroupsInput
  ): Promise<DescribeStaleSecurityGroupsOutput>;
  public describeStaleSecurityGroups(
    args: DescribeStaleSecurityGroupsInput,
    cb: (err: any, data?: DescribeStaleSecurityGroupsOutput) => void
  ): void;
  public describeStaleSecurityGroups(
    args: DescribeStaleSecurityGroupsInput,
    cb?: (err: any, data?: DescribeStaleSecurityGroupsOutput) => void
  ): Promise<DescribeStaleSecurityGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeStaleSecurityGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more of your subnets.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">Your VPC and Subnets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSubnets(
    args: DescribeSubnetsInput
  ): Promise<DescribeSubnetsOutput>;
  public describeSubnets(
    args: DescribeSubnetsInput,
    cb: (err: any, data?: DescribeSubnetsOutput) => void
  ): void;
  public describeSubnets(
    args: DescribeSubnetsInput,
    cb?: (err: any, data?: DescribeSubnetsOutput) => void
  ): Promise<DescribeSubnetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSubnetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified tags for your EC2 resources.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging Your Resources</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTags(args: DescribeTagsInput): Promise<DescribeTagsOutput>;
  public describeTags(
    args: DescribeTagsInput,
    cb: (err: any, data?: DescribeTagsOutput) => void
  ): void;
  public describeTags(
    args: DescribeTagsInput,
    cb?: (err: any, data?: DescribeTagsOutput) => void
  ): Promise<DescribeTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more Traffic Mirror filters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTrafficMirrorFilters(
    args: DescribeTrafficMirrorFiltersInput
  ): Promise<DescribeTrafficMirrorFiltersOutput>;
  public describeTrafficMirrorFilters(
    args: DescribeTrafficMirrorFiltersInput,
    cb: (err: any, data?: DescribeTrafficMirrorFiltersOutput) => void
  ): void;
  public describeTrafficMirrorFilters(
    args: DescribeTrafficMirrorFiltersInput,
    cb?: (err: any, data?: DescribeTrafficMirrorFiltersOutput) => void
  ): Promise<DescribeTrafficMirrorFiltersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTrafficMirrorFiltersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more Traffic Mirror sessions. By default, all Traffic Mirror sessions are described. Alternatively, you can filter the results.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTrafficMirrorSessions(
    args: DescribeTrafficMirrorSessionsInput
  ): Promise<DescribeTrafficMirrorSessionsOutput>;
  public describeTrafficMirrorSessions(
    args: DescribeTrafficMirrorSessionsInput,
    cb: (err: any, data?: DescribeTrafficMirrorSessionsOutput) => void
  ): void;
  public describeTrafficMirrorSessions(
    args: DescribeTrafficMirrorSessionsInput,
    cb?: (err: any, data?: DescribeTrafficMirrorSessionsOutput) => void
  ): Promise<DescribeTrafficMirrorSessionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTrafficMirrorSessionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Information about one or more Traffic Mirror targets.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTrafficMirrorTargets(
    args: DescribeTrafficMirrorTargetsInput
  ): Promise<DescribeTrafficMirrorTargetsOutput>;
  public describeTrafficMirrorTargets(
    args: DescribeTrafficMirrorTargetsInput,
    cb: (err: any, data?: DescribeTrafficMirrorTargetsOutput) => void
  ): void;
  public describeTrafficMirrorTargets(
    args: DescribeTrafficMirrorTargetsInput,
    cb?: (err: any, data?: DescribeTrafficMirrorTargetsOutput) => void
  ): Promise<DescribeTrafficMirrorTargetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTrafficMirrorTargetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more attachments between resources and transit gateways. By default, all attachments are described. Alternatively, you can filter the results by attachment ID, attachment state, resource ID, or resource owner.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTransitGatewayAttachments(
    args: DescribeTransitGatewayAttachmentsInput
  ): Promise<DescribeTransitGatewayAttachmentsOutput>;
  public describeTransitGatewayAttachments(
    args: DescribeTransitGatewayAttachmentsInput,
    cb: (err: any, data?: DescribeTransitGatewayAttachmentsOutput) => void
  ): void;
  public describeTransitGatewayAttachments(
    args: DescribeTransitGatewayAttachmentsInput,
    cb?: (err: any, data?: DescribeTransitGatewayAttachmentsOutput) => void
  ): Promise<DescribeTransitGatewayAttachmentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTransitGatewayAttachmentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more transit gateway route tables. By default, all transit gateway route tables are described. Alternatively, you can filter the results.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTransitGatewayRouteTables(
    args: DescribeTransitGatewayRouteTablesInput
  ): Promise<DescribeTransitGatewayRouteTablesOutput>;
  public describeTransitGatewayRouteTables(
    args: DescribeTransitGatewayRouteTablesInput,
    cb: (err: any, data?: DescribeTransitGatewayRouteTablesOutput) => void
  ): void;
  public describeTransitGatewayRouteTables(
    args: DescribeTransitGatewayRouteTablesInput,
    cb?: (err: any, data?: DescribeTransitGatewayRouteTablesOutput) => void
  ): Promise<DescribeTransitGatewayRouteTablesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTransitGatewayRouteTablesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more VPC attachments. By default, all VPC attachments are described. Alternatively, you can filter the results.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTransitGatewayVpcAttachments(
    args: DescribeTransitGatewayVpcAttachmentsInput
  ): Promise<DescribeTransitGatewayVpcAttachmentsOutput>;
  public describeTransitGatewayVpcAttachments(
    args: DescribeTransitGatewayVpcAttachmentsInput,
    cb: (err: any, data?: DescribeTransitGatewayVpcAttachmentsOutput) => void
  ): void;
  public describeTransitGatewayVpcAttachments(
    args: DescribeTransitGatewayVpcAttachmentsInput,
    cb?: (err: any, data?: DescribeTransitGatewayVpcAttachmentsOutput) => void
  ): Promise<DescribeTransitGatewayVpcAttachmentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTransitGatewayVpcAttachmentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more transit gateways. By default, all transit gateways are described. Alternatively, you can filter the results.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTransitGateways(
    args: DescribeTransitGatewaysInput
  ): Promise<DescribeTransitGatewaysOutput>;
  public describeTransitGateways(
    args: DescribeTransitGatewaysInput,
    cb: (err: any, data?: DescribeTransitGatewaysOutput) => void
  ): void;
  public describeTransitGateways(
    args: DescribeTransitGatewaysInput,
    cb?: (err: any, data?: DescribeTransitGatewaysOutput) => void
  ): Promise<DescribeTransitGatewaysOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTransitGatewaysCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified attribute of the specified volume. You can specify only one attribute at a time.</p> <p>For more information about EBS volumes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumes.html">Amazon EBS Volumes</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeVolumeAttribute(
    args: DescribeVolumeAttributeInput
  ): Promise<DescribeVolumeAttributeOutput>;
  public describeVolumeAttribute(
    args: DescribeVolumeAttributeInput,
    cb: (err: any, data?: DescribeVolumeAttributeOutput) => void
  ): void;
  public describeVolumeAttribute(
    args: DescribeVolumeAttributeInput,
    cb?: (err: any, data?: DescribeVolumeAttributeOutput) => void
  ): Promise<DescribeVolumeAttributeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeVolumeAttributeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the status of the specified volumes. Volume status provides the result of the checks performed on your volumes to determine events that can impair the performance of your volumes. The performance of a volume can be affected if an issue occurs on the volume's underlying host. If the volume's underlying host experiences a power outage or system issue, after the system is restored, there could be data inconsistencies on the volume. Volume events notify you if this occurs. Volume actions notify you if any action needs to be taken in response to the event.</p> <p>The <code>DescribeVolumeStatus</code> operation provides the following information about the specified volumes:</p> <p> <i>Status</i>: Reflects the current status of the volume. The possible values are <code>ok</code>, <code>impaired</code> , <code>warning</code>, or <code>insufficient-data</code>. If all checks pass, the overall status of the volume is <code>ok</code>. If the check fails, the overall status is <code>impaired</code>. If the status is <code>insufficient-data</code>, then the checks may still be taking place on your volume at the time. We recommend that you retry the request. For more information about volume status, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-volume-status.html">Monitoring the Status of Your Volumes</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p> <i>Events</i>: Reflect the cause of a volume status and may require you to take action. For example, if your volume returns an <code>impaired</code> status, then the volume event might be <code>potential-data-inconsistency</code>. This means that your volume has been affected by an issue with the underlying host, has all I/O operations disabled, and may have inconsistent data.</p> <p> <i>Actions</i>: Reflect the actions you may have to take in response to an event. For example, if the status of the volume is <code>impaired</code> and the volume event shows <code>potential-data-inconsistency</code>, then the action shows <code>enable-volume-io</code>. This means that you may want to enable the I/O operations for the volume by calling the <a>EnableVolumeIO</a> action and then check the volume for data consistency.</p> <p>Volume status is based on the volume status checks, and does not reflect the volume state. Therefore, volume status does not indicate volumes in the <code>error</code> state (for example, when a volume is incapable of accepting I/O.)</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeVolumeStatus(
    args: DescribeVolumeStatusInput
  ): Promise<DescribeVolumeStatusOutput>;
  public describeVolumeStatus(
    args: DescribeVolumeStatusInput,
    cb: (err: any, data?: DescribeVolumeStatusOutput) => void
  ): void;
  public describeVolumeStatus(
    args: DescribeVolumeStatusInput,
    cb?: (err: any, data?: DescribeVolumeStatusOutput) => void
  ): Promise<DescribeVolumeStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeVolumeStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified EBS volumes or all of your EBS volumes.</p> <p>If you are describing a long list of volumes, you can paginate the output to make the list more manageable. The <code>MaxResults</code> parameter sets the maximum number of results returned in a single page. If the list of results exceeds your <code>MaxResults</code> value, then that number of results is returned along with a <code>NextToken</code> value that can be passed to a subsequent <code>DescribeVolumes</code> request to retrieve the remaining results.</p> <p>For more information about EBS volumes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumes.html">Amazon EBS Volumes</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeVolumes(
    args: DescribeVolumesInput
  ): Promise<DescribeVolumesOutput>;
  public describeVolumes(
    args: DescribeVolumesInput,
    cb: (err: any, data?: DescribeVolumesOutput) => void
  ): void;
  public describeVolumes(
    args: DescribeVolumesInput,
    cb?: (err: any, data?: DescribeVolumesOutput) => void
  ): Promise<DescribeVolumesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeVolumesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Reports the current modification status of EBS volumes.</p> <p>Current-generation EBS volumes support modification of attributes including type, size, and (for <code>io1</code> volumes) IOPS provisioning while either attached to or detached from an instance. Following an action from the API or the console to modify a volume, the status of the modification may be <code>modifying</code>, <code>optimizing</code>, <code>completed</code>, or <code>failed</code>. If a volume has never been modified, then certain elements of the returned <code>VolumeModification</code> objects are null. </p> <p> You can also use CloudWatch Events to check the status of a modification to an EBS volume. For information about CloudWatch Events, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/">Amazon CloudWatch Events User Guide</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-expand-volume.html#monitoring_mods">Monitoring Volume Modifications"</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeVolumesModifications(
    args: DescribeVolumesModificationsInput
  ): Promise<DescribeVolumesModificationsOutput>;
  public describeVolumesModifications(
    args: DescribeVolumesModificationsInput,
    cb: (err: any, data?: DescribeVolumesModificationsOutput) => void
  ): void;
  public describeVolumesModifications(
    args: DescribeVolumesModificationsInput,
    cb?: (err: any, data?: DescribeVolumesModificationsOutput) => void
  ): Promise<DescribeVolumesModificationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeVolumesModificationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified attribute of the specified VPC. You can specify only one attribute at a time.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeVpcAttribute(
    args: DescribeVpcAttributeInput
  ): Promise<DescribeVpcAttributeOutput>;
  public describeVpcAttribute(
    args: DescribeVpcAttributeInput,
    cb: (err: any, data?: DescribeVpcAttributeOutput) => void
  ): void;
  public describeVpcAttribute(
    args: DescribeVpcAttributeInput,
    cb?: (err: any, data?: DescribeVpcAttributeOutput) => void
  ): Promise<DescribeVpcAttributeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeVpcAttributeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the ClassicLink status of one or more VPCs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeVpcClassicLink(
    args: DescribeVpcClassicLinkInput
  ): Promise<DescribeVpcClassicLinkOutput>;
  public describeVpcClassicLink(
    args: DescribeVpcClassicLinkInput,
    cb: (err: any, data?: DescribeVpcClassicLinkOutput) => void
  ): void;
  public describeVpcClassicLink(
    args: DescribeVpcClassicLinkInput,
    cb?: (err: any, data?: DescribeVpcClassicLinkOutput) => void
  ): Promise<DescribeVpcClassicLinkOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeVpcClassicLinkCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the ClassicLink DNS support status of one or more VPCs. If enabled, the DNS hostname of a linked EC2-Classic instance resolves to its private IP address when addressed from an instance in the VPC to which it's linked. Similarly, the DNS hostname of an instance in a VPC resolves to its private IP address when addressed from a linked EC2-Classic instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeVpcClassicLinkDnsSupport(
    args: DescribeVpcClassicLinkDnsSupportInput
  ): Promise<DescribeVpcClassicLinkDnsSupportOutput>;
  public describeVpcClassicLinkDnsSupport(
    args: DescribeVpcClassicLinkDnsSupportInput,
    cb: (err: any, data?: DescribeVpcClassicLinkDnsSupportOutput) => void
  ): void;
  public describeVpcClassicLinkDnsSupport(
    args: DescribeVpcClassicLinkDnsSupportInput,
    cb?: (err: any, data?: DescribeVpcClassicLinkDnsSupportOutput) => void
  ): Promise<DescribeVpcClassicLinkDnsSupportOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeVpcClassicLinkDnsSupportCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the connection notifications for VPC endpoints and VPC endpoint services.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeVpcEndpointConnectionNotifications(
    args: DescribeVpcEndpointConnectionNotificationsInput
  ): Promise<DescribeVpcEndpointConnectionNotificationsOutput>;
  public describeVpcEndpointConnectionNotifications(
    args: DescribeVpcEndpointConnectionNotificationsInput,
    cb: (
      err: any,
      data?: DescribeVpcEndpointConnectionNotificationsOutput
    ) => void
  ): void;
  public describeVpcEndpointConnectionNotifications(
    args: DescribeVpcEndpointConnectionNotificationsInput,
    cb?: (
      err: any,
      data?: DescribeVpcEndpointConnectionNotificationsOutput
    ) => void
  ): Promise<DescribeVpcEndpointConnectionNotificationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeVpcEndpointConnectionNotificationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the VPC endpoint connections to your VPC endpoint services, including any endpoints that are pending your acceptance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeVpcEndpointConnections(
    args: DescribeVpcEndpointConnectionsInput
  ): Promise<DescribeVpcEndpointConnectionsOutput>;
  public describeVpcEndpointConnections(
    args: DescribeVpcEndpointConnectionsInput,
    cb: (err: any, data?: DescribeVpcEndpointConnectionsOutput) => void
  ): void;
  public describeVpcEndpointConnections(
    args: DescribeVpcEndpointConnectionsInput,
    cb?: (err: any, data?: DescribeVpcEndpointConnectionsOutput) => void
  ): Promise<DescribeVpcEndpointConnectionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeVpcEndpointConnectionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the VPC endpoint service configurations in your account (your services).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeVpcEndpointServiceConfigurations(
    args: DescribeVpcEndpointServiceConfigurationsInput
  ): Promise<DescribeVpcEndpointServiceConfigurationsOutput>;
  public describeVpcEndpointServiceConfigurations(
    args: DescribeVpcEndpointServiceConfigurationsInput,
    cb: (
      err: any,
      data?: DescribeVpcEndpointServiceConfigurationsOutput
    ) => void
  ): void;
  public describeVpcEndpointServiceConfigurations(
    args: DescribeVpcEndpointServiceConfigurationsInput,
    cb?: (
      err: any,
      data?: DescribeVpcEndpointServiceConfigurationsOutput
    ) => void
  ): Promise<DescribeVpcEndpointServiceConfigurationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeVpcEndpointServiceConfigurationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the principals (service consumers) that are permitted to discover your VPC endpoint service.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeVpcEndpointServicePermissions(
    args: DescribeVpcEndpointServicePermissionsInput
  ): Promise<DescribeVpcEndpointServicePermissionsOutput>;
  public describeVpcEndpointServicePermissions(
    args: DescribeVpcEndpointServicePermissionsInput,
    cb: (err: any, data?: DescribeVpcEndpointServicePermissionsOutput) => void
  ): void;
  public describeVpcEndpointServicePermissions(
    args: DescribeVpcEndpointServicePermissionsInput,
    cb?: (err: any, data?: DescribeVpcEndpointServicePermissionsOutput) => void
  ): Promise<DescribeVpcEndpointServicePermissionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeVpcEndpointServicePermissionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes available services to which you can create a VPC endpoint.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeVpcEndpointServices(
    args: DescribeVpcEndpointServicesInput
  ): Promise<DescribeVpcEndpointServicesOutput>;
  public describeVpcEndpointServices(
    args: DescribeVpcEndpointServicesInput,
    cb: (err: any, data?: DescribeVpcEndpointServicesOutput) => void
  ): void;
  public describeVpcEndpointServices(
    args: DescribeVpcEndpointServicesInput,
    cb?: (err: any, data?: DescribeVpcEndpointServicesOutput) => void
  ): Promise<DescribeVpcEndpointServicesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeVpcEndpointServicesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more of your VPC endpoints.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeVpcEndpoints(
    args: DescribeVpcEndpointsInput
  ): Promise<DescribeVpcEndpointsOutput>;
  public describeVpcEndpoints(
    args: DescribeVpcEndpointsInput,
    cb: (err: any, data?: DescribeVpcEndpointsOutput) => void
  ): void;
  public describeVpcEndpoints(
    args: DescribeVpcEndpointsInput,
    cb?: (err: any, data?: DescribeVpcEndpointsOutput) => void
  ): Promise<DescribeVpcEndpointsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeVpcEndpointsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more of your VPC peering connections.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeVpcPeeringConnections(
    args: DescribeVpcPeeringConnectionsInput
  ): Promise<DescribeVpcPeeringConnectionsOutput>;
  public describeVpcPeeringConnections(
    args: DescribeVpcPeeringConnectionsInput,
    cb: (err: any, data?: DescribeVpcPeeringConnectionsOutput) => void
  ): void;
  public describeVpcPeeringConnections(
    args: DescribeVpcPeeringConnectionsInput,
    cb?: (err: any, data?: DescribeVpcPeeringConnectionsOutput) => void
  ): Promise<DescribeVpcPeeringConnectionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeVpcPeeringConnectionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more of your VPCs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeVpcs(args: DescribeVpcsInput): Promise<DescribeVpcsOutput>;
  public describeVpcs(
    args: DescribeVpcsInput,
    cb: (err: any, data?: DescribeVpcsOutput) => void
  ): void;
  public describeVpcs(
    args: DescribeVpcsInput,
    cb?: (err: any, data?: DescribeVpcsOutput) => void
  ): Promise<DescribeVpcsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeVpcsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more of your VPN connections.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeVpnConnections(
    args: DescribeVpnConnectionsInput
  ): Promise<DescribeVpnConnectionsOutput>;
  public describeVpnConnections(
    args: DescribeVpnConnectionsInput,
    cb: (err: any, data?: DescribeVpnConnectionsOutput) => void
  ): void;
  public describeVpnConnections(
    args: DescribeVpnConnectionsInput,
    cb?: (err: any, data?: DescribeVpnConnectionsOutput) => void
  ): Promise<DescribeVpnConnectionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeVpnConnectionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more of your virtual private gateways.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeVpnGateways(
    args: DescribeVpnGatewaysInput
  ): Promise<DescribeVpnGatewaysOutput>;
  public describeVpnGateways(
    args: DescribeVpnGatewaysInput,
    cb: (err: any, data?: DescribeVpnGatewaysOutput) => void
  ): void;
  public describeVpnGateways(
    args: DescribeVpnGatewaysInput,
    cb?: (err: any, data?: DescribeVpnGatewaysOutput) => void
  ): Promise<DescribeVpnGatewaysOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeVpnGatewaysCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Unlinks (detaches) a linked EC2-Classic instance from a VPC. After the instance has been unlinked, the VPC security groups are no longer associated with it. An instance is automatically unlinked from a VPC when it's stopped.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detachClassicLinkVpc(
    args: DetachClassicLinkVpcInput
  ): Promise<DetachClassicLinkVpcOutput>;
  public detachClassicLinkVpc(
    args: DetachClassicLinkVpcInput,
    cb: (err: any, data?: DetachClassicLinkVpcOutput) => void
  ): void;
  public detachClassicLinkVpc(
    args: DetachClassicLinkVpcInput,
    cb?: (err: any, data?: DetachClassicLinkVpcOutput) => void
  ): Promise<DetachClassicLinkVpcOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetachClassicLinkVpcCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Detaches an internet gateway from a VPC, disabling connectivity between the internet and the VPC. The VPC must not contain any running instances with Elastic IP addresses or public IPv4 addresses.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detachInternetGateway(
    args: DetachInternetGatewayInput
  ): Promise<DetachInternetGatewayOutput>;
  public detachInternetGateway(
    args: DetachInternetGatewayInput,
    cb: (err: any, data?: DetachInternetGatewayOutput) => void
  ): void;
  public detachInternetGateway(
    args: DetachInternetGatewayInput,
    cb?: (err: any, data?: DetachInternetGatewayOutput) => void
  ): Promise<DetachInternetGatewayOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetachInternetGatewayCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Detaches a network interface from an instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detachNetworkInterface(
    args: DetachNetworkInterfaceInput
  ): Promise<DetachNetworkInterfaceOutput>;
  public detachNetworkInterface(
    args: DetachNetworkInterfaceInput,
    cb: (err: any, data?: DetachNetworkInterfaceOutput) => void
  ): void;
  public detachNetworkInterface(
    args: DetachNetworkInterfaceInput,
    cb?: (err: any, data?: DetachNetworkInterfaceOutput) => void
  ): Promise<DetachNetworkInterfaceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetachNetworkInterfaceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Detaches an EBS volume from an instance. Make sure to unmount any file systems on the device within your operating system before detaching the volume. Failure to do so can result in the volume becoming stuck in the <code>busy</code> state while detaching. If this happens, detachment can be delayed indefinitely until you unmount the volume, force detachment, reboot the instance, or all three. If an EBS volume is the root device of an instance, it can't be detached while the instance is running. To detach the root volume, stop the instance first.</p> <p>When a volume with an AWS Marketplace product code is detached from an instance, the product code is no longer associated with the instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-detaching-volume.html">Detaching an Amazon EBS Volume</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detachVolume(args: DetachVolumeInput): Promise<DetachVolumeOutput>;
  public detachVolume(
    args: DetachVolumeInput,
    cb: (err: any, data?: DetachVolumeOutput) => void
  ): void;
  public detachVolume(
    args: DetachVolumeInput,
    cb?: (err: any, data?: DetachVolumeOutput) => void
  ): Promise<DetachVolumeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetachVolumeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Detaches a virtual private gateway from a VPC. You do this if you're planning to turn off the VPC and not use it anymore. You can confirm a virtual private gateway has been completely detached from a VPC by describing the virtual private gateway (any attachments to the virtual private gateway are also described).</p> <p>You must wait for the attachment's state to switch to <code>detached</code> before you can delete the VPC or attach a different VPC to the virtual private gateway.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detachVpnGateway(
    args: DetachVpnGatewayInput
  ): Promise<DetachVpnGatewayOutput>;
  public detachVpnGateway(
    args: DetachVpnGatewayInput,
    cb: (err: any, data?: DetachVpnGatewayOutput) => void
  ): void;
  public detachVpnGateway(
    args: DetachVpnGatewayInput,
    cb?: (err: any, data?: DetachVpnGatewayOutput) => void
  ): Promise<DetachVpnGatewayOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetachVpnGatewayCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables EBS encryption by default for your account in the current Region.</p> <p>After you disable encryption by default, you can still create encrypted volumes by enabling encryption when you create each volume.</p> <p>Disabling encryption by default does not change the encryption status of your existing volumes.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disableEbsEncryptionByDefault(
    args: DisableEbsEncryptionByDefaultInput
  ): Promise<DisableEbsEncryptionByDefaultOutput>;
  public disableEbsEncryptionByDefault(
    args: DisableEbsEncryptionByDefaultInput,
    cb: (err: any, data?: DisableEbsEncryptionByDefaultOutput) => void
  ): void;
  public disableEbsEncryptionByDefault(
    args: DisableEbsEncryptionByDefaultInput,
    cb?: (err: any, data?: DisableEbsEncryptionByDefaultOutput) => void
  ): Promise<DisableEbsEncryptionByDefaultOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisableEbsEncryptionByDefaultCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables the specified resource attachment from propagating routes to the specified propagation route table.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disableTransitGatewayRouteTablePropagation(
    args: DisableTransitGatewayRouteTablePropagationInput
  ): Promise<DisableTransitGatewayRouteTablePropagationOutput>;
  public disableTransitGatewayRouteTablePropagation(
    args: DisableTransitGatewayRouteTablePropagationInput,
    cb: (
      err: any,
      data?: DisableTransitGatewayRouteTablePropagationOutput
    ) => void
  ): void;
  public disableTransitGatewayRouteTablePropagation(
    args: DisableTransitGatewayRouteTablePropagationInput,
    cb?: (
      err: any,
      data?: DisableTransitGatewayRouteTablePropagationOutput
    ) => void
  ): Promise<DisableTransitGatewayRouteTablePropagationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisableTransitGatewayRouteTablePropagationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables a virtual private gateway (VGW) from propagating routes to a specified route table of a VPC.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disableVgwRoutePropagation(
    args: DisableVgwRoutePropagationInput
  ): Promise<DisableVgwRoutePropagationOutput>;
  public disableVgwRoutePropagation(
    args: DisableVgwRoutePropagationInput,
    cb: (err: any, data?: DisableVgwRoutePropagationOutput) => void
  ): void;
  public disableVgwRoutePropagation(
    args: DisableVgwRoutePropagationInput,
    cb?: (err: any, data?: DisableVgwRoutePropagationOutput) => void
  ): Promise<DisableVgwRoutePropagationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisableVgwRoutePropagationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables ClassicLink for a VPC. You cannot disable ClassicLink for a VPC that has EC2-Classic instances linked to it.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disableVpcClassicLink(
    args: DisableVpcClassicLinkInput
  ): Promise<DisableVpcClassicLinkOutput>;
  public disableVpcClassicLink(
    args: DisableVpcClassicLinkInput,
    cb: (err: any, data?: DisableVpcClassicLinkOutput) => void
  ): void;
  public disableVpcClassicLink(
    args: DisableVpcClassicLinkInput,
    cb?: (err: any, data?: DisableVpcClassicLinkOutput) => void
  ): Promise<DisableVpcClassicLinkOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisableVpcClassicLinkCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables ClassicLink DNS support for a VPC. If disabled, DNS hostnames resolve to public IP addresses when addressed between a linked EC2-Classic instance and instances in the VPC to which it's linked. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disableVpcClassicLinkDnsSupport(
    args: DisableVpcClassicLinkDnsSupportInput
  ): Promise<DisableVpcClassicLinkDnsSupportOutput>;
  public disableVpcClassicLinkDnsSupport(
    args: DisableVpcClassicLinkDnsSupportInput,
    cb: (err: any, data?: DisableVpcClassicLinkDnsSupportOutput) => void
  ): void;
  public disableVpcClassicLinkDnsSupport(
    args: DisableVpcClassicLinkDnsSupportInput,
    cb?: (err: any, data?: DisableVpcClassicLinkDnsSupportOutput) => void
  ): Promise<DisableVpcClassicLinkDnsSupportOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisableVpcClassicLinkDnsSupportCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates an Elastic IP address from the instance or network interface it's associated with.</p> <p>An Elastic IP address is for use in either the EC2-Classic platform or in a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>This is an idempotent operation. If you perform the operation more than once, Amazon EC2 doesn't return an error.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateAddress(
    args: DisassociateAddressInput
  ): Promise<DisassociateAddressOutput>;
  public disassociateAddress(
    args: DisassociateAddressInput,
    cb: (err: any, data?: DisassociateAddressOutput) => void
  ): void;
  public disassociateAddress(
    args: DisassociateAddressInput,
    cb?: (err: any, data?: DisassociateAddressOutput) => void
  ): Promise<DisassociateAddressOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateAddressCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates a target network from the specified Client VPN endpoint. When you disassociate the last target network from a Client VPN, the following happens:</p> <ul> <li> <p>The route that was automatically added for the VPC is deleted</p> </li> <li> <p>All active client connections are terminated</p> </li> <li> <p>New client connections are disallowed</p> </li> <li> <p>The Client VPN endpoint's status changes to <code>pending-associate</code> </p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateClientVpnTargetNetwork(
    args: DisassociateClientVpnTargetNetworkInput
  ): Promise<DisassociateClientVpnTargetNetworkOutput>;
  public disassociateClientVpnTargetNetwork(
    args: DisassociateClientVpnTargetNetworkInput,
    cb: (err: any, data?: DisassociateClientVpnTargetNetworkOutput) => void
  ): void;
  public disassociateClientVpnTargetNetwork(
    args: DisassociateClientVpnTargetNetworkInput,
    cb?: (err: any, data?: DisassociateClientVpnTargetNetworkOutput) => void
  ): Promise<DisassociateClientVpnTargetNetworkOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateClientVpnTargetNetworkCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates an IAM instance profile from a running or stopped instance.</p> <p>Use <a>DescribeIamInstanceProfileAssociations</a> to get the association ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateIamInstanceProfile(
    args: DisassociateIamInstanceProfileInput
  ): Promise<DisassociateIamInstanceProfileOutput>;
  public disassociateIamInstanceProfile(
    args: DisassociateIamInstanceProfileInput,
    cb: (err: any, data?: DisassociateIamInstanceProfileOutput) => void
  ): void;
  public disassociateIamInstanceProfile(
    args: DisassociateIamInstanceProfileInput,
    cb?: (err: any, data?: DisassociateIamInstanceProfileOutput) => void
  ): Promise<DisassociateIamInstanceProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateIamInstanceProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates a subnet from a route table.</p> <p>After you perform this action, the subnet no longer uses the routes in the route table. Instead, it uses the routes in the VPC's main route table. For more information about route tables, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route Tables</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateRouteTable(
    args: DisassociateRouteTableInput
  ): Promise<DisassociateRouteTableOutput>;
  public disassociateRouteTable(
    args: DisassociateRouteTableInput,
    cb: (err: any, data?: DisassociateRouteTableOutput) => void
  ): void;
  public disassociateRouteTable(
    args: DisassociateRouteTableInput,
    cb?: (err: any, data?: DisassociateRouteTableOutput) => void
  ): Promise<DisassociateRouteTableOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateRouteTableCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates a CIDR block from a subnet. Currently, you can disassociate an IPv6 CIDR block only. You must detach or delete all gateways and resources that are associated with the CIDR block before you can disassociate it. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateSubnetCidrBlock(
    args: DisassociateSubnetCidrBlockInput
  ): Promise<DisassociateSubnetCidrBlockOutput>;
  public disassociateSubnetCidrBlock(
    args: DisassociateSubnetCidrBlockInput,
    cb: (err: any, data?: DisassociateSubnetCidrBlockOutput) => void
  ): void;
  public disassociateSubnetCidrBlock(
    args: DisassociateSubnetCidrBlockInput,
    cb?: (err: any, data?: DisassociateSubnetCidrBlockOutput) => void
  ): Promise<DisassociateSubnetCidrBlockOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateSubnetCidrBlockCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates a resource attachment from a transit gateway route table.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateTransitGatewayRouteTable(
    args: DisassociateTransitGatewayRouteTableInput
  ): Promise<DisassociateTransitGatewayRouteTableOutput>;
  public disassociateTransitGatewayRouteTable(
    args: DisassociateTransitGatewayRouteTableInput,
    cb: (err: any, data?: DisassociateTransitGatewayRouteTableOutput) => void
  ): void;
  public disassociateTransitGatewayRouteTable(
    args: DisassociateTransitGatewayRouteTableInput,
    cb?: (err: any, data?: DisassociateTransitGatewayRouteTableOutput) => void
  ): Promise<DisassociateTransitGatewayRouteTableOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateTransitGatewayRouteTableCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates a CIDR block from a VPC. To disassociate the CIDR block, you must specify its association ID. You can get the association ID by using <a>DescribeVpcs</a>. You must detach or delete all gateways and resources that are associated with the CIDR block before you can disassociate it. </p> <p>You cannot disassociate the CIDR block with which you originally created the VPC (the primary CIDR block).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateVpcCidrBlock(
    args: DisassociateVpcCidrBlockInput
  ): Promise<DisassociateVpcCidrBlockOutput>;
  public disassociateVpcCidrBlock(
    args: DisassociateVpcCidrBlockInput,
    cb: (err: any, data?: DisassociateVpcCidrBlockOutput) => void
  ): void;
  public disassociateVpcCidrBlock(
    args: DisassociateVpcCidrBlockInput,
    cb?: (err: any, data?: DisassociateVpcCidrBlockOutput) => void
  ): Promise<DisassociateVpcCidrBlockOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateVpcCidrBlockCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables EBS encryption by default for your account in the current Region.</p> <p>After you enable encryption by default, the EBS volumes that you create are are always encrypted, either using the default CMK or the CMK that you specified when you created each volume. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>You can specify the default CMK for encryption by default using <a>ModifyEbsDefaultKmsKeyId</a> or <a>ResetEbsDefaultKmsKeyId</a>.</p> <p>Enabling encryption by default has no effect on the encryption status of your existing volumes.</p> <p>After you enable encryption by default, you can no longer launch instances using instance types that do not support encryption. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#EBSEncryption_supported_instances">Supported Instance Types</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public enableEbsEncryptionByDefault(
    args: EnableEbsEncryptionByDefaultInput
  ): Promise<EnableEbsEncryptionByDefaultOutput>;
  public enableEbsEncryptionByDefault(
    args: EnableEbsEncryptionByDefaultInput,
    cb: (err: any, data?: EnableEbsEncryptionByDefaultOutput) => void
  ): void;
  public enableEbsEncryptionByDefault(
    args: EnableEbsEncryptionByDefaultInput,
    cb?: (err: any, data?: EnableEbsEncryptionByDefaultOutput) => void
  ): Promise<EnableEbsEncryptionByDefaultOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new EnableEbsEncryptionByDefaultCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables the specified attachment to propagate routes to the specified propagation route table.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public enableTransitGatewayRouteTablePropagation(
    args: EnableTransitGatewayRouteTablePropagationInput
  ): Promise<EnableTransitGatewayRouteTablePropagationOutput>;
  public enableTransitGatewayRouteTablePropagation(
    args: EnableTransitGatewayRouteTablePropagationInput,
    cb: (
      err: any,
      data?: EnableTransitGatewayRouteTablePropagationOutput
    ) => void
  ): void;
  public enableTransitGatewayRouteTablePropagation(
    args: EnableTransitGatewayRouteTablePropagationInput,
    cb?: (
      err: any,
      data?: EnableTransitGatewayRouteTablePropagationOutput
    ) => void
  ): Promise<EnableTransitGatewayRouteTablePropagationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new EnableTransitGatewayRouteTablePropagationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables a virtual private gateway (VGW) to propagate routes to the specified route table of a VPC.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public enableVgwRoutePropagation(
    args: EnableVgwRoutePropagationInput
  ): Promise<EnableVgwRoutePropagationOutput>;
  public enableVgwRoutePropagation(
    args: EnableVgwRoutePropagationInput,
    cb: (err: any, data?: EnableVgwRoutePropagationOutput) => void
  ): void;
  public enableVgwRoutePropagation(
    args: EnableVgwRoutePropagationInput,
    cb?: (err: any, data?: EnableVgwRoutePropagationOutput) => void
  ): Promise<EnableVgwRoutePropagationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new EnableVgwRoutePropagationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables I/O operations for a volume that had I/O operations disabled because the data on the volume was potentially inconsistent.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public enableVolumeIO(
    args: EnableVolumeIOInput
  ): Promise<EnableVolumeIOOutput>;
  public enableVolumeIO(
    args: EnableVolumeIOInput,
    cb: (err: any, data?: EnableVolumeIOOutput) => void
  ): void;
  public enableVolumeIO(
    args: EnableVolumeIOInput,
    cb?: (err: any, data?: EnableVolumeIOOutput) => void
  ): Promise<EnableVolumeIOOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new EnableVolumeIOCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables a VPC for ClassicLink. You can then link EC2-Classic instances to your ClassicLink-enabled VPC to allow communication over private IP addresses. You cannot enable your VPC for ClassicLink if any of your VPC route tables have existing routes for address ranges within the <code>10.0.0.0/8</code> IP address range, excluding local routes for VPCs in the <code>10.0.0.0/16</code> and <code>10.1.0.0/16</code> IP address ranges. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public enableVpcClassicLink(
    args: EnableVpcClassicLinkInput
  ): Promise<EnableVpcClassicLinkOutput>;
  public enableVpcClassicLink(
    args: EnableVpcClassicLinkInput,
    cb: (err: any, data?: EnableVpcClassicLinkOutput) => void
  ): void;
  public enableVpcClassicLink(
    args: EnableVpcClassicLinkInput,
    cb?: (err: any, data?: EnableVpcClassicLinkOutput) => void
  ): Promise<EnableVpcClassicLinkOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new EnableVpcClassicLinkCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables a VPC to support DNS hostname resolution for ClassicLink. If enabled, the DNS hostname of a linked EC2-Classic instance resolves to its private IP address when addressed from an instance in the VPC to which it's linked. Similarly, the DNS hostname of an instance in a VPC resolves to its private IP address when addressed from a linked EC2-Classic instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public enableVpcClassicLinkDnsSupport(
    args: EnableVpcClassicLinkDnsSupportInput
  ): Promise<EnableVpcClassicLinkDnsSupportOutput>;
  public enableVpcClassicLinkDnsSupport(
    args: EnableVpcClassicLinkDnsSupportInput,
    cb: (err: any, data?: EnableVpcClassicLinkDnsSupportOutput) => void
  ): void;
  public enableVpcClassicLinkDnsSupport(
    args: EnableVpcClassicLinkDnsSupportInput,
    cb?: (err: any, data?: EnableVpcClassicLinkDnsSupportOutput) => void
  ): Promise<EnableVpcClassicLinkDnsSupportOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new EnableVpcClassicLinkDnsSupportCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Downloads the client certificate revocation list for the specified Client VPN endpoint.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public exportClientVpnClientCertificateRevocationList(
    args: ExportClientVpnClientCertificateRevocationListInput
  ): Promise<ExportClientVpnClientCertificateRevocationListOutput>;
  public exportClientVpnClientCertificateRevocationList(
    args: ExportClientVpnClientCertificateRevocationListInput,
    cb: (
      err: any,
      data?: ExportClientVpnClientCertificateRevocationListOutput
    ) => void
  ): void;
  public exportClientVpnClientCertificateRevocationList(
    args: ExportClientVpnClientCertificateRevocationListInput,
    cb?: (
      err: any,
      data?: ExportClientVpnClientCertificateRevocationListOutput
    ) => void
  ): Promise<ExportClientVpnClientCertificateRevocationListOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ExportClientVpnClientCertificateRevocationListCommand(
      args
    );
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Downloads the contents of the Client VPN endpoint configuration file for the specified Client VPN endpoint. The Client VPN endpoint configuration file includes the Client VPN endpoint and certificate information clients need to establish a connection with the Client VPN endpoint.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public exportClientVpnClientConfiguration(
    args: ExportClientVpnClientConfigurationInput
  ): Promise<ExportClientVpnClientConfigurationOutput>;
  public exportClientVpnClientConfiguration(
    args: ExportClientVpnClientConfigurationInput,
    cb: (err: any, data?: ExportClientVpnClientConfigurationOutput) => void
  ): void;
  public exportClientVpnClientConfiguration(
    args: ExportClientVpnClientConfigurationInput,
    cb?: (err: any, data?: ExportClientVpnClientConfigurationOutput) => void
  ): Promise<ExportClientVpnClientConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ExportClientVpnClientConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Exports routes from the specified transit gateway route table to the specified S3 bucket. By default, all routes are exported. Alternatively, you can filter by CIDR range.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public exportTransitGatewayRoutes(
    args: ExportTransitGatewayRoutesInput
  ): Promise<ExportTransitGatewayRoutesOutput>;
  public exportTransitGatewayRoutes(
    args: ExportTransitGatewayRoutesInput,
    cb: (err: any, data?: ExportTransitGatewayRoutesOutput) => void
  ): void;
  public exportTransitGatewayRoutes(
    args: ExportTransitGatewayRoutesInput,
    cb?: (err: any, data?: ExportTransitGatewayRoutesOutput) => void
  ): Promise<ExportTransitGatewayRoutesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ExportTransitGatewayRoutesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * GetCapacityReservationUsage operation
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCapacityReservationUsage(
    args: GetCapacityReservationUsageInput
  ): Promise<GetCapacityReservationUsageOutput>;
  public getCapacityReservationUsage(
    args: GetCapacityReservationUsageInput,
    cb: (err: any, data?: GetCapacityReservationUsageOutput) => void
  ): void;
  public getCapacityReservationUsage(
    args: GetCapacityReservationUsageInput,
    cb?: (err: any, data?: GetCapacityReservationUsageOutput) => void
  ): Promise<GetCapacityReservationUsageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCapacityReservationUsageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the console output for the specified instance. For Linux instances, the instance console output displays the exact console output that would normally be displayed on a physical monitor attached to a computer. For Windows instances, the instance console output includes the last three system event log errors.</p> <p>By default, the console output returns buffered information that was posted shortly after an instance transition state (start, stop, reboot, or terminate). This information is available for at least one hour after the most recent post. Only the most recent 64 KB of console output is available.</p> <p>You can optionally retrieve the latest serial console output at any time during the instance lifecycle. This option is supported on instance types that use the Nitro hypervisor.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-console.html#instance-console-console-output">Instance Console Output</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getConsoleOutput(
    args: GetConsoleOutputInput
  ): Promise<GetConsoleOutputOutput>;
  public getConsoleOutput(
    args: GetConsoleOutputInput,
    cb: (err: any, data?: GetConsoleOutputOutput) => void
  ): void;
  public getConsoleOutput(
    args: GetConsoleOutputInput,
    cb?: (err: any, data?: GetConsoleOutputOutput) => void
  ): Promise<GetConsoleOutputOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetConsoleOutputCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieve a JPG-format screenshot of a running instance to help with troubleshooting.</p> <p>The returned content is Base64-encoded.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getConsoleScreenshot(
    args: GetConsoleScreenshotInput
  ): Promise<GetConsoleScreenshotOutput>;
  public getConsoleScreenshot(
    args: GetConsoleScreenshotInput,
    cb: (err: any, data?: GetConsoleScreenshotOutput) => void
  ): void;
  public getConsoleScreenshot(
    args: GetConsoleScreenshotInput,
    cb?: (err: any, data?: GetConsoleScreenshotOutput) => void
  ): Promise<GetConsoleScreenshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetConsoleScreenshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the default customer master key (CMK) for EBS encryption by default for your account in this Region. You can change the default CMK for encryption by default using <a>ModifyEbsDefaultKmsKeyId</a> or <a>ResetEbsDefaultKmsKeyId</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getEbsDefaultKmsKeyId(
    args: GetEbsDefaultKmsKeyIdInput
  ): Promise<GetEbsDefaultKmsKeyIdOutput>;
  public getEbsDefaultKmsKeyId(
    args: GetEbsDefaultKmsKeyIdInput,
    cb: (err: any, data?: GetEbsDefaultKmsKeyIdOutput) => void
  ): void;
  public getEbsDefaultKmsKeyId(
    args: GetEbsDefaultKmsKeyIdInput,
    cb?: (err: any, data?: GetEbsDefaultKmsKeyIdOutput) => void
  ): Promise<GetEbsDefaultKmsKeyIdOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetEbsDefaultKmsKeyIdCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes whether EBS encryption by default is enabled for your account in the current Region.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getEbsEncryptionByDefault(
    args: GetEbsEncryptionByDefaultInput
  ): Promise<GetEbsEncryptionByDefaultOutput>;
  public getEbsEncryptionByDefault(
    args: GetEbsEncryptionByDefaultInput,
    cb: (err: any, data?: GetEbsEncryptionByDefaultOutput) => void
  ): void;
  public getEbsEncryptionByDefault(
    args: GetEbsEncryptionByDefaultInput,
    cb?: (err: any, data?: GetEbsEncryptionByDefaultOutput) => void
  ): Promise<GetEbsEncryptionByDefaultOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetEbsEncryptionByDefaultCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Preview a reservation purchase with configurations that match those of your Dedicated Host. You must have active Dedicated Hosts in your account before you purchase a reservation.</p> <p>This is a preview of the <a>PurchaseHostReservation</a> action and does not result in the offering being purchased.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getHostReservationPurchasePreview(
    args: GetHostReservationPurchasePreviewInput
  ): Promise<GetHostReservationPurchasePreviewOutput>;
  public getHostReservationPurchasePreview(
    args: GetHostReservationPurchasePreviewInput,
    cb: (err: any, data?: GetHostReservationPurchasePreviewOutput) => void
  ): void;
  public getHostReservationPurchasePreview(
    args: GetHostReservationPurchasePreviewInput,
    cb?: (err: any, data?: GetHostReservationPurchasePreviewOutput) => void
  ): Promise<GetHostReservationPurchasePreviewOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetHostReservationPurchasePreviewCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the configuration data of the specified instance. You can use this data to create a launch template.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getLaunchTemplateData(
    args: GetLaunchTemplateDataInput
  ): Promise<GetLaunchTemplateDataOutput>;
  public getLaunchTemplateData(
    args: GetLaunchTemplateDataInput,
    cb: (err: any, data?: GetLaunchTemplateDataOutput) => void
  ): void;
  public getLaunchTemplateData(
    args: GetLaunchTemplateDataInput,
    cb?: (err: any, data?: GetLaunchTemplateDataOutput) => void
  ): Promise<GetLaunchTemplateDataOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetLaunchTemplateDataCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the encrypted administrator password for a running Windows instance.</p> <p>The Windows password is generated at boot by the <code>EC2Config</code> service or <code>EC2Launch</code> scripts (Windows Server 2016 and later). This usually only happens the first time an instance is launched. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/UsingConfig_WinAMI.html">EC2Config</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2launch.html">EC2Launch</a> in the Amazon Elastic Compute Cloud User Guide.</p> <p>For the <code>EC2Config</code> service, the password is not generated for rebundled AMIs unless <code>Ec2SetPassword</code> is enabled before bundling.</p> <p>The password is encrypted using the key pair that you specified when you launched the instance. You must provide the corresponding key pair file.</p> <p>When you launch an instance, password generation and encryption may take a few minutes. If you try to retrieve the password before it's available, the output returns an empty string. We recommend that you wait up to 15 minutes after launching an instance before trying to retrieve the generated password.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getPasswordData(
    args: GetPasswordDataInput
  ): Promise<GetPasswordDataOutput>;
  public getPasswordData(
    args: GetPasswordDataInput,
    cb: (err: any, data?: GetPasswordDataOutput) => void
  ): void;
  public getPasswordData(
    args: GetPasswordDataInput,
    cb?: (err: any, data?: GetPasswordDataOutput) => void
  ): Promise<GetPasswordDataOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPasswordDataCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a quote and exchange information for exchanging one or more specified Convertible Reserved Instances for a new Convertible Reserved Instance. If the exchange cannot be performed, the reason is returned in the response. Use <a>AcceptReservedInstancesExchangeQuote</a> to perform the exchange.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getReservedInstancesExchangeQuote(
    args: GetReservedInstancesExchangeQuoteInput
  ): Promise<GetReservedInstancesExchangeQuoteOutput>;
  public getReservedInstancesExchangeQuote(
    args: GetReservedInstancesExchangeQuoteInput,
    cb: (err: any, data?: GetReservedInstancesExchangeQuoteOutput) => void
  ): void;
  public getReservedInstancesExchangeQuote(
    args: GetReservedInstancesExchangeQuoteInput,
    cb?: (err: any, data?: GetReservedInstancesExchangeQuoteOutput) => void
  ): Promise<GetReservedInstancesExchangeQuoteOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetReservedInstancesExchangeQuoteCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the route tables to which the specified resource attachment propagates routes.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTransitGatewayAttachmentPropagations(
    args: GetTransitGatewayAttachmentPropagationsInput
  ): Promise<GetTransitGatewayAttachmentPropagationsOutput>;
  public getTransitGatewayAttachmentPropagations(
    args: GetTransitGatewayAttachmentPropagationsInput,
    cb: (err: any, data?: GetTransitGatewayAttachmentPropagationsOutput) => void
  ): void;
  public getTransitGatewayAttachmentPropagations(
    args: GetTransitGatewayAttachmentPropagationsInput,
    cb?: (
      err: any,
      data?: GetTransitGatewayAttachmentPropagationsOutput
    ) => void
  ): Promise<GetTransitGatewayAttachmentPropagationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTransitGatewayAttachmentPropagationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about the associations for the specified transit gateway route table.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTransitGatewayRouteTableAssociations(
    args: GetTransitGatewayRouteTableAssociationsInput
  ): Promise<GetTransitGatewayRouteTableAssociationsOutput>;
  public getTransitGatewayRouteTableAssociations(
    args: GetTransitGatewayRouteTableAssociationsInput,
    cb: (err: any, data?: GetTransitGatewayRouteTableAssociationsOutput) => void
  ): void;
  public getTransitGatewayRouteTableAssociations(
    args: GetTransitGatewayRouteTableAssociationsInput,
    cb?: (
      err: any,
      data?: GetTransitGatewayRouteTableAssociationsOutput
    ) => void
  ): Promise<GetTransitGatewayRouteTableAssociationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTransitGatewayRouteTableAssociationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about the route table propagations for the specified transit gateway route table.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTransitGatewayRouteTablePropagations(
    args: GetTransitGatewayRouteTablePropagationsInput
  ): Promise<GetTransitGatewayRouteTablePropagationsOutput>;
  public getTransitGatewayRouteTablePropagations(
    args: GetTransitGatewayRouteTablePropagationsInput,
    cb: (err: any, data?: GetTransitGatewayRouteTablePropagationsOutput) => void
  ): void;
  public getTransitGatewayRouteTablePropagations(
    args: GetTransitGatewayRouteTablePropagationsInput,
    cb?: (
      err: any,
      data?: GetTransitGatewayRouteTablePropagationsOutput
    ) => void
  ): Promise<GetTransitGatewayRouteTablePropagationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTransitGatewayRouteTablePropagationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Uploads a client certificate revocation list to the specified Client VPN endpoint. Uploading a client certificate revocation list overwrites the existing client certificate revocation list.</p> <p>Uploading a client certificate revocation list resets existing client connections.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public importClientVpnClientCertificateRevocationList(
    args: ImportClientVpnClientCertificateRevocationListInput
  ): Promise<ImportClientVpnClientCertificateRevocationListOutput>;
  public importClientVpnClientCertificateRevocationList(
    args: ImportClientVpnClientCertificateRevocationListInput,
    cb: (
      err: any,
      data?: ImportClientVpnClientCertificateRevocationListOutput
    ) => void
  ): void;
  public importClientVpnClientCertificateRevocationList(
    args: ImportClientVpnClientCertificateRevocationListInput,
    cb?: (
      err: any,
      data?: ImportClientVpnClientCertificateRevocationListOutput
    ) => void
  ): Promise<ImportClientVpnClientCertificateRevocationListOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ImportClientVpnClientCertificateRevocationListCommand(
      args
    );
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Import single or multi-volume disk images or EBS snapshots into an Amazon Machine Image (AMI). For more information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-image-import.html">Importing a VM as an Image Using VM Import/Export</a> in the <i>VM Import/Export User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public importImage(args: ImportImageInput): Promise<ImportImageOutput>;
  public importImage(
    args: ImportImageInput,
    cb: (err: any, data?: ImportImageOutput) => void
  ): void;
  public importImage(
    args: ImportImageInput,
    cb?: (err: any, data?: ImportImageOutput) => void
  ): Promise<ImportImageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ImportImageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an import instance task using metadata from the specified disk image. <code>ImportInstance</code> only supports single-volume VMs. To import multi-volume VMs, use <a>ImportImage</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/CommandLineReference/ec2-cli-vmimport-export.html">Importing a Virtual Machine Using the Amazon EC2 CLI</a>.</p> <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public importInstance(
    args: ImportInstanceInput
  ): Promise<ImportInstanceOutput>;
  public importInstance(
    args: ImportInstanceInput,
    cb: (err: any, data?: ImportInstanceOutput) => void
  ): void;
  public importInstance(
    args: ImportInstanceInput,
    cb?: (err: any, data?: ImportInstanceOutput) => void
  ): Promise<ImportInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ImportInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Imports the public key from an RSA key pair that you created with a third-party tool. Compare this with <a>CreateKeyPair</a>, in which AWS creates the key pair and gives the keys to you (AWS keeps a copy of the public key). With ImportKeyPair, you create the key pair and give AWS just the public key. The private key is never transferred between you and AWS.</p> <p>For more information about key pairs, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Key Pairs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public importKeyPair(args: ImportKeyPairInput): Promise<ImportKeyPairOutput>;
  public importKeyPair(
    args: ImportKeyPairInput,
    cb: (err: any, data?: ImportKeyPairOutput) => void
  ): void;
  public importKeyPair(
    args: ImportKeyPairInput,
    cb?: (err: any, data?: ImportKeyPairOutput) => void
  ): Promise<ImportKeyPairOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ImportKeyPairCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Imports a disk into an EBS snapshot.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public importSnapshot(
    args: ImportSnapshotInput
  ): Promise<ImportSnapshotOutput>;
  public importSnapshot(
    args: ImportSnapshotInput,
    cb: (err: any, data?: ImportSnapshotOutput) => void
  ): void;
  public importSnapshot(
    args: ImportSnapshotInput,
    cb?: (err: any, data?: ImportSnapshotOutput) => void
  ): Promise<ImportSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ImportSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an import volume task using metadata from the specified disk image.For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/CommandLineReference/importing-your-volumes-into-amazon-ebs.html">Importing Disks to Amazon EBS</a>.</p> <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public importVolume(args: ImportVolumeInput): Promise<ImportVolumeOutput>;
  public importVolume(
    args: ImportVolumeInput,
    cb: (err: any, data?: ImportVolumeOutput) => void
  ): void;
  public importVolume(
    args: ImportVolumeInput,
    cb?: (err: any, data?: ImportVolumeOutput) => void
  ): Promise<ImportVolumeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ImportVolumeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies a Capacity Reservation's capacity and the conditions under which it is to be released. You cannot change a Capacity Reservation's instance type, EBS optimization, instance store settings, platform, Availability Zone, or instance eligibility. If you need to modify any of these attributes, we recommend that you cancel the Capacity Reservation, and then create a new one with the required attributes.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyCapacityReservation(
    args: ModifyCapacityReservationInput
  ): Promise<ModifyCapacityReservationOutput>;
  public modifyCapacityReservation(
    args: ModifyCapacityReservationInput,
    cb: (err: any, data?: ModifyCapacityReservationOutput) => void
  ): void;
  public modifyCapacityReservation(
    args: ModifyCapacityReservationInput,
    cb?: (err: any, data?: ModifyCapacityReservationOutput) => void
  ): Promise<ModifyCapacityReservationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyCapacityReservationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the specified Client VPN endpoint. You can only modify an endpoint's server certificate information, client connection logging information, DNS server, and description. Modifying the DNS server resets existing client connections.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyClientVpnEndpoint(
    args: ModifyClientVpnEndpointInput
  ): Promise<ModifyClientVpnEndpointOutput>;
  public modifyClientVpnEndpoint(
    args: ModifyClientVpnEndpointInput,
    cb: (err: any, data?: ModifyClientVpnEndpointOutput) => void
  ): void;
  public modifyClientVpnEndpoint(
    args: ModifyClientVpnEndpointInput,
    cb?: (err: any, data?: ModifyClientVpnEndpointOutput) => void
  ): Promise<ModifyClientVpnEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyClientVpnEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes the default customer master key (CMK) for EBS encryption by default for your account in this Region.</p> <p>AWS creates a unique AWS managed CMK in each Region for use with encryption by default. If you change the default CMK to a customer managed CMK, it is used instead of the AWS managed CMK. To reset the default CMK to the AWS managed CMK for EBS, use <a>ResetEbsDefaultKmsKeyId</a>.</p> <p>If you delete or disable the customer managed CMK that you specified for use with encryption by default, your instances will fail to launch.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyEbsDefaultKmsKeyId(
    args: ModifyEbsDefaultKmsKeyIdInput
  ): Promise<ModifyEbsDefaultKmsKeyIdOutput>;
  public modifyEbsDefaultKmsKeyId(
    args: ModifyEbsDefaultKmsKeyIdInput,
    cb: (err: any, data?: ModifyEbsDefaultKmsKeyIdOutput) => void
  ): void;
  public modifyEbsDefaultKmsKeyId(
    args: ModifyEbsDefaultKmsKeyIdInput,
    cb?: (err: any, data?: ModifyEbsDefaultKmsKeyIdOutput) => void
  ): Promise<ModifyEbsDefaultKmsKeyIdOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyEbsDefaultKmsKeyIdCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the specified EC2 Fleet.</p> <p>While the EC2 Fleet is being modified, it is in the <code>modifying</code> state.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyFleet(args: ModifyFleetInput): Promise<ModifyFleetOutput>;
  public modifyFleet(
    args: ModifyFleetInput,
    cb: (err: any, data?: ModifyFleetOutput) => void
  ): void;
  public modifyFleet(
    args: ModifyFleetInput,
    cb?: (err: any, data?: ModifyFleetOutput) => void
  ): Promise<ModifyFleetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyFleetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the specified attribute of the specified Amazon FPGA Image (AFI).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyFpgaImageAttribute(
    args: ModifyFpgaImageAttributeInput
  ): Promise<ModifyFpgaImageAttributeOutput>;
  public modifyFpgaImageAttribute(
    args: ModifyFpgaImageAttributeInput,
    cb: (err: any, data?: ModifyFpgaImageAttributeOutput) => void
  ): void;
  public modifyFpgaImageAttribute(
    args: ModifyFpgaImageAttributeInput,
    cb?: (err: any, data?: ModifyFpgaImageAttributeOutput) => void
  ): Promise<ModifyFpgaImageAttributeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyFpgaImageAttributeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modify the auto-placement setting of a Dedicated Host. When auto-placement is enabled, any instances that you launch with a tenancy of <code>host</code> but without a specific host ID are placed onto any available Dedicated Host in your account that has auto-placement enabled. When auto-placement is disabled, you need to provide a host ID to have the instance launch onto a specific host. If no host ID is provided, the instance is launched onto a suitable host with auto-placement enabled.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyHosts(args: ModifyHostsInput): Promise<ModifyHostsOutput>;
  public modifyHosts(
    args: ModifyHostsInput,
    cb: (err: any, data?: ModifyHostsOutput) => void
  ): void;
  public modifyHosts(
    args: ModifyHostsInput,
    cb?: (err: any, data?: ModifyHostsOutput) => void
  ): Promise<ModifyHostsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyHostsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the ID format for the specified resource on a per-Region basis. You can specify that resources should receive longer IDs (17-character IDs) when they are created.</p> <p>This request can only be used to modify longer ID settings for resource types that are within the opt-in period. Resources currently in their opt-in period include: <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> | <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> | <code>export-task</code> | <code>flow-log</code> | <code>image</code> | <code>import-task</code> | <code>internet-gateway</code> | <code>network-acl</code> | <code>network-acl-association</code> | <code>network-interface</code> | <code>network-interface-attachment</code> | <code>prefix-list</code> | <code>route-table</code> | <code>route-table-association</code> | <code>security-group</code> | <code>subnet</code> | <code>subnet-cidr-block-association</code> | <code>vpc</code> | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>.</p> <p>This setting applies to the IAM user who makes the request; it does not apply to the entire AWS account. By default, an IAM user defaults to the same settings as the root user. If you're using this action as the root user, then these settings apply to the entire account, unless an IAM user explicitly overrides these settings for themselves. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resource-ids.html">Resource IDs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>Resources created with longer IDs are visible to all IAM roles and users, regardless of these settings and provided that they have permission to use the relevant <code>Describe</code> command for the resource type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyIdFormat(
    args: ModifyIdFormatInput
  ): Promise<ModifyIdFormatOutput>;
  public modifyIdFormat(
    args: ModifyIdFormatInput,
    cb: (err: any, data?: ModifyIdFormatOutput) => void
  ): void;
  public modifyIdFormat(
    args: ModifyIdFormatInput,
    cb?: (err: any, data?: ModifyIdFormatOutput) => void
  ): Promise<ModifyIdFormatOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyIdFormatCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the ID format of a resource for a specified IAM user, IAM role, or the root user for an account; or all IAM users, IAM roles, and the root user for an account. You can specify that resources should receive longer IDs (17-character IDs) when they are created. </p> <p>This request can only be used to modify longer ID settings for resource types that are within the opt-in period. Resources currently in their opt-in period include: <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> | <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> | <code>export-task</code> | <code>flow-log</code> | <code>image</code> | <code>import-task</code> | <code>internet-gateway</code> | <code>network-acl</code> | <code>network-acl-association</code> | <code>network-interface</code> | <code>network-interface-attachment</code> | <code>prefix-list</code> | <code>route-table</code> | <code>route-table-association</code> | <code>security-group</code> | <code>subnet</code> | <code>subnet-cidr-block-association</code> | <code>vpc</code> | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resource-ids.html">Resource IDs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. </p> <p>This setting applies to the principal specified in the request; it does not apply to the principal that makes the request. </p> <p>Resources created with longer IDs are visible to all IAM roles and users, regardless of these settings and provided that they have permission to use the relevant <code>Describe</code> command for the resource type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyIdentityIdFormat(
    args: ModifyIdentityIdFormatInput
  ): Promise<ModifyIdentityIdFormatOutput>;
  public modifyIdentityIdFormat(
    args: ModifyIdentityIdFormatInput,
    cb: (err: any, data?: ModifyIdentityIdFormatOutput) => void
  ): void;
  public modifyIdentityIdFormat(
    args: ModifyIdentityIdFormatInput,
    cb?: (err: any, data?: ModifyIdentityIdFormatOutput) => void
  ): Promise<ModifyIdentityIdFormatOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyIdentityIdFormatCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the specified attribute of the specified AMI. You can specify only one attribute at a time. You can use the <code>Attribute</code> parameter to specify the attribute or one of the following parameters: <code>Description</code>, <code>LaunchPermission</code>, or <code>ProductCode</code>.</p> <p>AWS Marketplace product codes cannot be modified. Images with an AWS Marketplace product code cannot be made public.</p> <p>To enable the SriovNetSupport enhanced networking attribute of an image, enable SriovNetSupport on an instance and create an AMI from the instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyImageAttribute(
    args: ModifyImageAttributeInput
  ): Promise<ModifyImageAttributeOutput>;
  public modifyImageAttribute(
    args: ModifyImageAttributeInput,
    cb: (err: any, data?: ModifyImageAttributeOutput) => void
  ): void;
  public modifyImageAttribute(
    args: ModifyImageAttributeInput,
    cb?: (err: any, data?: ModifyImageAttributeOutput) => void
  ): Promise<ModifyImageAttributeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyImageAttributeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the specified attribute of the specified instance. You can specify only one attribute at a time.</p> <p> <b>Note: </b>Using this action to change the security groups associated with an elastic network interface (ENI) attached to an instance in a VPC can result in an error if the instance has more than one ENI. To change the security groups associated with an ENI attached to an instance that has multiple ENIs, we recommend that you use the <a>ModifyNetworkInterfaceAttribute</a> action.</p> <p>To modify some attributes, the instance must be stopped. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_ChangingAttributesWhileInstanceStopped.html">Modifying Attributes of a Stopped Instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyInstanceAttribute(
    args: ModifyInstanceAttributeInput
  ): Promise<ModifyInstanceAttributeOutput>;
  public modifyInstanceAttribute(
    args: ModifyInstanceAttributeInput,
    cb: (err: any, data?: ModifyInstanceAttributeOutput) => void
  ): void;
  public modifyInstanceAttribute(
    args: ModifyInstanceAttributeInput,
    cb?: (err: any, data?: ModifyInstanceAttributeOutput) => void
  ): Promise<ModifyInstanceAttributeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyInstanceAttributeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the Capacity Reservation settings for a stopped instance. Use this action to configure an instance to target a specific Capacity Reservation, run in any <code>open</code> Capacity Reservation with matching attributes, or run On-Demand Instance capacity.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyInstanceCapacityReservationAttributes(
    args: ModifyInstanceCapacityReservationAttributesInput
  ): Promise<ModifyInstanceCapacityReservationAttributesOutput>;
  public modifyInstanceCapacityReservationAttributes(
    args: ModifyInstanceCapacityReservationAttributesInput,
    cb: (
      err: any,
      data?: ModifyInstanceCapacityReservationAttributesOutput
    ) => void
  ): void;
  public modifyInstanceCapacityReservationAttributes(
    args: ModifyInstanceCapacityReservationAttributesInput,
    cb?: (
      err: any,
      data?: ModifyInstanceCapacityReservationAttributesOutput
    ) => void
  ): Promise<ModifyInstanceCapacityReservationAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyInstanceCapacityReservationAttributesCommand(
      args
    );
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the credit option for CPU usage on a running or stopped T2 or T3 instance. The credit options are <code>standard</code> and <code>unlimited</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable Performance Instances</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyInstanceCreditSpecification(
    args: ModifyInstanceCreditSpecificationInput
  ): Promise<ModifyInstanceCreditSpecificationOutput>;
  public modifyInstanceCreditSpecification(
    args: ModifyInstanceCreditSpecificationInput,
    cb: (err: any, data?: ModifyInstanceCreditSpecificationOutput) => void
  ): void;
  public modifyInstanceCreditSpecification(
    args: ModifyInstanceCreditSpecificationInput,
    cb?: (err: any, data?: ModifyInstanceCreditSpecificationOutput) => void
  ): Promise<ModifyInstanceCreditSpecificationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyInstanceCreditSpecificationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the start time for a scheduled Amazon EC2 instance event.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyInstanceEventStartTime(
    args: ModifyInstanceEventStartTimeInput
  ): Promise<ModifyInstanceEventStartTimeOutput>;
  public modifyInstanceEventStartTime(
    args: ModifyInstanceEventStartTimeInput,
    cb: (err: any, data?: ModifyInstanceEventStartTimeOutput) => void
  ): void;
  public modifyInstanceEventStartTime(
    args: ModifyInstanceEventStartTimeInput,
    cb?: (err: any, data?: ModifyInstanceEventStartTimeOutput) => void
  ): Promise<ModifyInstanceEventStartTimeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyInstanceEventStartTimeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the placement attributes for a specified instance. You can do the following:</p> <ul> <li> <p>Modify the affinity between an instance and a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html">Dedicated Host</a>. When affinity is set to <code>host</code> and the instance is not associated with a specific Dedicated Host, the next time the instance is launched, it is automatically associated with the host on which it lands. If the instance is restarted or rebooted, this relationship persists.</p> </li> <li> <p>Change the Dedicated Host with which an instance is associated.</p> </li> <li> <p>Change the instance tenancy of an instance from <code>host</code> to <code>dedicated</code>, or from <code>dedicated</code> to <code>host</code>.</p> </li> <li> <p>Move an instance to or from a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">placement group</a>.</p> </li> </ul> <p>At least one attribute for affinity, host ID, tenancy, or placement group name must be specified in the request. Affinity and tenancy can be modified in the same request.</p> <p>To modify the host ID, tenancy, placement group, or partition for an instance, the instance must be in the <code>stopped</code> state.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyInstancePlacement(
    args: ModifyInstancePlacementInput
  ): Promise<ModifyInstancePlacementOutput>;
  public modifyInstancePlacement(
    args: ModifyInstancePlacementInput,
    cb: (err: any, data?: ModifyInstancePlacementOutput) => void
  ): void;
  public modifyInstancePlacement(
    args: ModifyInstancePlacementInput,
    cb?: (err: any, data?: ModifyInstancePlacementOutput) => void
  ): Promise<ModifyInstancePlacementOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyInstancePlacementCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies a launch template. You can specify which version of the launch template to set as the default version. When launching an instance, the default version applies when a launch template version is not specified.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyLaunchTemplate(
    args: ModifyLaunchTemplateInput
  ): Promise<ModifyLaunchTemplateOutput>;
  public modifyLaunchTemplate(
    args: ModifyLaunchTemplateInput,
    cb: (err: any, data?: ModifyLaunchTemplateOutput) => void
  ): void;
  public modifyLaunchTemplate(
    args: ModifyLaunchTemplateInput,
    cb?: (err: any, data?: ModifyLaunchTemplateOutput) => void
  ): Promise<ModifyLaunchTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyLaunchTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the specified network interface attribute. You can specify only one attribute at a time. You can use this action to attach and detach security groups from an existing EC2 instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyNetworkInterfaceAttribute(
    args: ModifyNetworkInterfaceAttributeInput
  ): Promise<ModifyNetworkInterfaceAttributeOutput>;
  public modifyNetworkInterfaceAttribute(
    args: ModifyNetworkInterfaceAttributeInput,
    cb: (err: any, data?: ModifyNetworkInterfaceAttributeOutput) => void
  ): void;
  public modifyNetworkInterfaceAttribute(
    args: ModifyNetworkInterfaceAttributeInput,
    cb?: (err: any, data?: ModifyNetworkInterfaceAttributeOutput) => void
  ): Promise<ModifyNetworkInterfaceAttributeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyNetworkInterfaceAttributeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the Availability Zone, instance count, instance type, or network platform (EC2-Classic or EC2-VPC) of your Reserved Instances. The Reserved Instances to be modified must be identical, except for Availability Zone, network platform, and instance type.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html">Modifying Reserved Instances</a> in the Amazon Elastic Compute Cloud User Guide.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyReservedInstances(
    args: ModifyReservedInstancesInput
  ): Promise<ModifyReservedInstancesOutput>;
  public modifyReservedInstances(
    args: ModifyReservedInstancesInput,
    cb: (err: any, data?: ModifyReservedInstancesOutput) => void
  ): void;
  public modifyReservedInstances(
    args: ModifyReservedInstancesInput,
    cb?: (err: any, data?: ModifyReservedInstancesOutput) => void
  ): Promise<ModifyReservedInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyReservedInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds or removes permission settings for the specified snapshot. You may add or remove specified AWS account IDs from a snapshot's list of create volume permissions, but you cannot do both in a single operation. If you need to both add and remove account IDs for a snapshot, you must use multiple operations.</p> <p>Encrypted snapshots and snapshots with AWS Marketplace product codes cannot be made public. Snapshots encrypted with your default CMK cannot be shared with other accounts.</p> <p>For more information about modifying snapshot permissions, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html">Sharing Snapshots</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifySnapshotAttribute(
    args: ModifySnapshotAttributeInput
  ): Promise<ModifySnapshotAttributeOutput>;
  public modifySnapshotAttribute(
    args: ModifySnapshotAttributeInput,
    cb: (err: any, data?: ModifySnapshotAttributeOutput) => void
  ): void;
  public modifySnapshotAttribute(
    args: ModifySnapshotAttributeInput,
    cb?: (err: any, data?: ModifySnapshotAttributeOutput) => void
  ): Promise<ModifySnapshotAttributeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifySnapshotAttributeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the specified Spot Fleet request.</p> <p>You can only modify a Spot Fleet request of type <code>maintain</code>.</p> <p>While the Spot Fleet request is being modified, it is in the <code>modifying</code> state.</p> <p>To scale up your Spot Fleet, increase its target capacity. The Spot Fleet launches the additional Spot Instances according to the allocation strategy for the Spot Fleet request. If the allocation strategy is <code>lowestPrice</code>, the Spot Fleet launches instances using the Spot pool with the lowest price. If the allocation strategy is <code>diversified</code>, the Spot Fleet distributes the instances across the Spot pools.</p> <p>To scale down your Spot Fleet, decrease its target capacity. First, the Spot Fleet cancels any open requests that exceed the new target capacity. You can request that the Spot Fleet terminate Spot Instances until the size of the fleet no longer exceeds the new target capacity. If the allocation strategy is <code>lowestPrice</code>, the Spot Fleet terminates the instances with the highest price per unit. If the allocation strategy is <code>diversified</code>, the Spot Fleet terminates instances across the Spot pools. Alternatively, you can request that the Spot Fleet keep the fleet at its current size, but not replace any Spot Instances that are interrupted or that you terminate manually.</p> <p>If you are finished with your Spot Fleet for now, but will use it again later, you can set the target capacity to 0.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifySpotFleetRequest(
    args: ModifySpotFleetRequestInput
  ): Promise<ModifySpotFleetRequestOutput>;
  public modifySpotFleetRequest(
    args: ModifySpotFleetRequestInput,
    cb: (err: any, data?: ModifySpotFleetRequestOutput) => void
  ): void;
  public modifySpotFleetRequest(
    args: ModifySpotFleetRequestInput,
    cb?: (err: any, data?: ModifySpotFleetRequestOutput) => void
  ): Promise<ModifySpotFleetRequestOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifySpotFleetRequestCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies a subnet attribute. You can only modify one attribute at a time.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifySubnetAttribute(
    args: ModifySubnetAttributeInput
  ): Promise<ModifySubnetAttributeOutput>;
  public modifySubnetAttribute(
    args: ModifySubnetAttributeInput,
    cb: (err: any, data?: ModifySubnetAttributeOutput) => void
  ): void;
  public modifySubnetAttribute(
    args: ModifySubnetAttributeInput,
    cb?: (err: any, data?: ModifySubnetAttributeOutput) => void
  ): Promise<ModifySubnetAttributeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifySubnetAttributeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Allows or restricts mirroring network services.</p> <p> By default, Amazon DNS network services are not eligible for Traffic Mirror. Use <code>AddNetworkServices</code> to add network services to a Traffic Mirror filter. When a network service is added to the Traffic Mirror filter, all traffic related to that network service will be mirrored. When you no longer want to mirror network services, use <code>RemoveNetworkServices</code> to remove the network services from the Traffic Mirror filter. </p> <p>FFor information about filter rule properties, see <a href="https://docs.aws.amazon.com/vpc/latest/mirroring/traffic-mirroring-considerations.html#traffic-mirroring-network-services">Network Services</a> in the <i>Traffic Mirroring User Guide </i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyTrafficMirrorFilterNetworkServices(
    args: ModifyTrafficMirrorFilterNetworkServicesInput
  ): Promise<ModifyTrafficMirrorFilterNetworkServicesOutput>;
  public modifyTrafficMirrorFilterNetworkServices(
    args: ModifyTrafficMirrorFilterNetworkServicesInput,
    cb: (
      err: any,
      data?: ModifyTrafficMirrorFilterNetworkServicesOutput
    ) => void
  ): void;
  public modifyTrafficMirrorFilterNetworkServices(
    args: ModifyTrafficMirrorFilterNetworkServicesInput,
    cb?: (
      err: any,
      data?: ModifyTrafficMirrorFilterNetworkServicesOutput
    ) => void
  ): Promise<ModifyTrafficMirrorFilterNetworkServicesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyTrafficMirrorFilterNetworkServicesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the specified Traffic Mirror rule.</p> <p> <code>DestinationCidrBlock</code> and <code>SourceCidrBlock</code> must both be an IPv4 range or an IPv6 range.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyTrafficMirrorFilterRule(
    args: ModifyTrafficMirrorFilterRuleInput
  ): Promise<ModifyTrafficMirrorFilterRuleOutput>;
  public modifyTrafficMirrorFilterRule(
    args: ModifyTrafficMirrorFilterRuleInput,
    cb: (err: any, data?: ModifyTrafficMirrorFilterRuleOutput) => void
  ): void;
  public modifyTrafficMirrorFilterRule(
    args: ModifyTrafficMirrorFilterRuleInput,
    cb?: (err: any, data?: ModifyTrafficMirrorFilterRuleOutput) => void
  ): Promise<ModifyTrafficMirrorFilterRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyTrafficMirrorFilterRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies a Traffic Mirror session.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyTrafficMirrorSession(
    args: ModifyTrafficMirrorSessionInput
  ): Promise<ModifyTrafficMirrorSessionOutput>;
  public modifyTrafficMirrorSession(
    args: ModifyTrafficMirrorSessionInput,
    cb: (err: any, data?: ModifyTrafficMirrorSessionOutput) => void
  ): void;
  public modifyTrafficMirrorSession(
    args: ModifyTrafficMirrorSessionInput,
    cb?: (err: any, data?: ModifyTrafficMirrorSessionOutput) => void
  ): Promise<ModifyTrafficMirrorSessionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyTrafficMirrorSessionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the specified VPC attachment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyTransitGatewayVpcAttachment(
    args: ModifyTransitGatewayVpcAttachmentInput
  ): Promise<ModifyTransitGatewayVpcAttachmentOutput>;
  public modifyTransitGatewayVpcAttachment(
    args: ModifyTransitGatewayVpcAttachmentInput,
    cb: (err: any, data?: ModifyTransitGatewayVpcAttachmentOutput) => void
  ): void;
  public modifyTransitGatewayVpcAttachment(
    args: ModifyTransitGatewayVpcAttachmentInput,
    cb?: (err: any, data?: ModifyTransitGatewayVpcAttachmentOutput) => void
  ): Promise<ModifyTransitGatewayVpcAttachmentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyTransitGatewayVpcAttachmentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>You can modify several parameters of an existing EBS volume, including volume size, volume type, and IOPS capacity. If your EBS volume is attached to a current-generation EC2 instance type, you may be able to apply these changes without stopping the instance or detaching the volume from it. For more information about modifying an EBS volume running Linux, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-expand-volume.html">Modifying the Size, IOPS, or Type of an EBS Volume on Linux</a>. For more information about modifying an EBS volume running Windows, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ebs-expand-volume.html">Modifying the Size, IOPS, or Type of an EBS Volume on Windows</a>. </p> <p> When you complete a resize operation on your volume, you need to extend the volume's file-system size to take advantage of the new storage capacity. For information about extending a Linux file system, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-expand-volume.html#recognize-expanded-volume-linux">Extending a Linux File System</a>. For information about extending a Windows file system, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ebs-expand-volume.html#recognize-expanded-volume-windows">Extending a Windows File System</a>. </p> <p> You can use CloudWatch Events to check the status of a modification to an EBS volume. For information about CloudWatch Events, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/">Amazon CloudWatch Events User Guide</a>. You can also track the status of a modification using <a>DescribeVolumesModifications</a>. For information about tracking status changes using either method, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-expand-volume.html#monitoring_mods">Monitoring Volume Modifications</a>. </p> <p>With previous-generation instance types, resizing an EBS volume may require detaching and reattaching the volume or stopping and restarting the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-expand-volume.html">Modifying the Size, IOPS, or Type of an EBS Volume on Linux</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ebs-expand-volume.html">Modifying the Size, IOPS, or Type of an EBS Volume on Windows</a>.</p> <p>If you reach the maximum volume modification rate per volume limit, you will need to wait at least six hours before applying further modifications to the affected EBS volume.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyVolume(args: ModifyVolumeInput): Promise<ModifyVolumeOutput>;
  public modifyVolume(
    args: ModifyVolumeInput,
    cb: (err: any, data?: ModifyVolumeOutput) => void
  ): void;
  public modifyVolume(
    args: ModifyVolumeInput,
    cb?: (err: any, data?: ModifyVolumeOutput) => void
  ): Promise<ModifyVolumeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyVolumeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies a volume attribute.</p> <p>By default, all I/O operations for the volume are suspended when the data on the volume is determined to be potentially inconsistent, to prevent undetectable, latent data corruption. The I/O access to the volume can be resumed by first enabling I/O access and then checking the data consistency on your volume.</p> <p>You can change the default behavior to resume I/O operations. We recommend that you change this only for boot volumes or for volumes that are stateless or disposable.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyVolumeAttribute(
    args: ModifyVolumeAttributeInput
  ): Promise<ModifyVolumeAttributeOutput>;
  public modifyVolumeAttribute(
    args: ModifyVolumeAttributeInput,
    cb: (err: any, data?: ModifyVolumeAttributeOutput) => void
  ): void;
  public modifyVolumeAttribute(
    args: ModifyVolumeAttributeInput,
    cb?: (err: any, data?: ModifyVolumeAttributeOutput) => void
  ): Promise<ModifyVolumeAttributeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyVolumeAttributeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the specified attribute of the specified VPC.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyVpcAttribute(
    args: ModifyVpcAttributeInput
  ): Promise<ModifyVpcAttributeOutput>;
  public modifyVpcAttribute(
    args: ModifyVpcAttributeInput,
    cb: (err: any, data?: ModifyVpcAttributeOutput) => void
  ): void;
  public modifyVpcAttribute(
    args: ModifyVpcAttributeInput,
    cb?: (err: any, data?: ModifyVpcAttributeOutput) => void
  ): Promise<ModifyVpcAttributeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyVpcAttributeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies attributes of a specified VPC endpoint. The attributes that you can modify depend on the type of VPC endpoint (interface or gateway). For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html">VPC Endpoints</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyVpcEndpoint(
    args: ModifyVpcEndpointInput
  ): Promise<ModifyVpcEndpointOutput>;
  public modifyVpcEndpoint(
    args: ModifyVpcEndpointInput,
    cb: (err: any, data?: ModifyVpcEndpointOutput) => void
  ): void;
  public modifyVpcEndpoint(
    args: ModifyVpcEndpointInput,
    cb?: (err: any, data?: ModifyVpcEndpointOutput) => void
  ): Promise<ModifyVpcEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyVpcEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies a connection notification for VPC endpoint or VPC endpoint service. You can change the SNS topic for the notification, or the events for which to be notified. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyVpcEndpointConnectionNotification(
    args: ModifyVpcEndpointConnectionNotificationInput
  ): Promise<ModifyVpcEndpointConnectionNotificationOutput>;
  public modifyVpcEndpointConnectionNotification(
    args: ModifyVpcEndpointConnectionNotificationInput,
    cb: (err: any, data?: ModifyVpcEndpointConnectionNotificationOutput) => void
  ): void;
  public modifyVpcEndpointConnectionNotification(
    args: ModifyVpcEndpointConnectionNotificationInput,
    cb?: (
      err: any,
      data?: ModifyVpcEndpointConnectionNotificationOutput
    ) => void
  ): Promise<ModifyVpcEndpointConnectionNotificationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyVpcEndpointConnectionNotificationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the attributes of your VPC endpoint service configuration. You can change the Network Load Balancers for your service, and you can specify whether acceptance is required for requests to connect to your endpoint service through an interface VPC endpoint.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyVpcEndpointServiceConfiguration(
    args: ModifyVpcEndpointServiceConfigurationInput
  ): Promise<ModifyVpcEndpointServiceConfigurationOutput>;
  public modifyVpcEndpointServiceConfiguration(
    args: ModifyVpcEndpointServiceConfigurationInput,
    cb: (err: any, data?: ModifyVpcEndpointServiceConfigurationOutput) => void
  ): void;
  public modifyVpcEndpointServiceConfiguration(
    args: ModifyVpcEndpointServiceConfigurationInput,
    cb?: (err: any, data?: ModifyVpcEndpointServiceConfigurationOutput) => void
  ): Promise<ModifyVpcEndpointServiceConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyVpcEndpointServiceConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the permissions for your <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-service.html">VPC endpoint service</a>. You can add or remove permissions for service consumers (IAM users, IAM roles, and AWS accounts) to connect to your endpoint service.</p> <p>If you grant permissions to all principals, the service is public. Any users who know the name of a public service can send a request to attach an endpoint. If the service does not require manual approval, attachments are automatically approved.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyVpcEndpointServicePermissions(
    args: ModifyVpcEndpointServicePermissionsInput
  ): Promise<ModifyVpcEndpointServicePermissionsOutput>;
  public modifyVpcEndpointServicePermissions(
    args: ModifyVpcEndpointServicePermissionsInput,
    cb: (err: any, data?: ModifyVpcEndpointServicePermissionsOutput) => void
  ): void;
  public modifyVpcEndpointServicePermissions(
    args: ModifyVpcEndpointServicePermissionsInput,
    cb?: (err: any, data?: ModifyVpcEndpointServicePermissionsOutput) => void
  ): Promise<ModifyVpcEndpointServicePermissionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyVpcEndpointServicePermissionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the VPC peering connection options on one side of a VPC peering connection. You can do the following:</p> <ul> <li> <p>Enable/disable communication over the peering connection between an EC2-Classic instance that's linked to your VPC (using ClassicLink) and instances in the peer VPC.</p> </li> <li> <p>Enable/disable communication over the peering connection between instances in your VPC and an EC2-Classic instance that's linked to the peer VPC.</p> </li> <li> <p>Enable/disable the ability to resolve public DNS hostnames to private IP addresses when queried from instances in the peer VPC.</p> </li> </ul> <p>If the peered VPCs are in the same AWS account, you can enable DNS resolution for queries from the local VPC. This ensures that queries from the local VPC resolve to private IP addresses in the peer VPC. This option is not available if the peered VPCs are in different AWS accounts or different Regions. For peered VPCs in different AWS accounts, each AWS account owner must initiate a separate request to modify the peering connection options. For inter-region peering connections, you must use the Region for the requester VPC to modify the requester VPC peering options and the Region for the accepter VPC to modify the accepter VPC peering options. To verify which VPCs are the accepter and the requester for a VPC peering connection, use the <a>DescribeVpcPeeringConnections</a> command.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyVpcPeeringConnectionOptions(
    args: ModifyVpcPeeringConnectionOptionsInput
  ): Promise<ModifyVpcPeeringConnectionOptionsOutput>;
  public modifyVpcPeeringConnectionOptions(
    args: ModifyVpcPeeringConnectionOptionsInput,
    cb: (err: any, data?: ModifyVpcPeeringConnectionOptionsOutput) => void
  ): void;
  public modifyVpcPeeringConnectionOptions(
    args: ModifyVpcPeeringConnectionOptionsInput,
    cb?: (err: any, data?: ModifyVpcPeeringConnectionOptionsOutput) => void
  ): Promise<ModifyVpcPeeringConnectionOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyVpcPeeringConnectionOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the instance tenancy attribute of the specified VPC. You can change the instance tenancy attribute of a VPC to <code>default</code> only. You cannot change the instance tenancy attribute to <code>dedicated</code>.</p> <p>After you modify the tenancy of the VPC, any new instances that you launch into the VPC have a tenancy of <code>default</code>, unless you specify otherwise during launch. The tenancy of any existing instances in the VPC is not affected.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html">Dedicated Instances</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyVpcTenancy(
    args: ModifyVpcTenancyInput
  ): Promise<ModifyVpcTenancyOutput>;
  public modifyVpcTenancy(
    args: ModifyVpcTenancyInput,
    cb: (err: any, data?: ModifyVpcTenancyOutput) => void
  ): void;
  public modifyVpcTenancy(
    args: ModifyVpcTenancyInput,
    cb?: (err: any, data?: ModifyVpcTenancyOutput) => void
  ): Promise<ModifyVpcTenancyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyVpcTenancyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the target gateway of a AWS Site-to-Site VPN connection. The following migration options are available:</p> <ul> <li> <p>An existing virtual private gateway to a new virtual private gateway</p> </li> <li> <p>An existing virtual private gateway to a transit gateway</p> </li> <li> <p>An existing transit gateway to a new transit gateway</p> </li> <li> <p>An existing transit gateway to a virtual private gateway</p> </li> </ul> <p>Before you perform the migration to the new gateway, you must configure the new gateway. Use <a>CreateVpnGateway</a> to create a virtual private gateway, or <a>CreateTransitGateway</a> to create a transit gateway.</p> <p>This step is required when you migrate from a virtual private gateway with static routes to a transit gateway. </p> <p>You must delete the static routes before you migrate to the new gateway.</p> <p>Keep a copy of the static route before you delete it. You will need to add back these routes to the transit gateway after the VPN connection migration is complete.</p> <p>After you migrate to the new gateway, you might need to modify your VPC route table. Use <a>CreateRoute</a> and <a>DeleteRoute</a> to make the changes described in <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/modify-vpn-target.html#step-update-routing">VPN Gateway Target Modification Required VPC Route Table Updates</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p> <p> When the new gateway is a transit gateway, modify the transit gateway route table to allow traffic between the VPC and the AWS Site-to-Site VPN connection. Use <a>CreateTransitGatewayRoute</a> to add the routes.</p> <p> If you deleted VPN static routes, you must add the static routes to the transit gateway route table.</p> <p>After you perform this operation, the AWS VPN endpoint's IP addresses on the AWS side and the tunnel options remain intact. Your s2slong; connection will be temporarily unavailable for approximately 10 minutes while we provision the new endpoints </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyVpnConnection(
    args: ModifyVpnConnectionInput
  ): Promise<ModifyVpnConnectionOutput>;
  public modifyVpnConnection(
    args: ModifyVpnConnectionInput,
    cb: (err: any, data?: ModifyVpnConnectionOutput) => void
  ): void;
  public modifyVpnConnection(
    args: ModifyVpnConnectionInput,
    cb?: (err: any, data?: ModifyVpnConnectionOutput) => void
  ): Promise<ModifyVpnConnectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyVpnConnectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables detailed monitoring for a running instance. Otherwise, basic monitoring is enabled. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch.html">Monitoring Your Instances and Volumes</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>To disable detailed monitoring, see .</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public monitorInstances(
    args: MonitorInstancesInput
  ): Promise<MonitorInstancesOutput>;
  public monitorInstances(
    args: MonitorInstancesInput,
    cb: (err: any, data?: MonitorInstancesOutput) => void
  ): void;
  public monitorInstances(
    args: MonitorInstancesInput,
    cb?: (err: any, data?: MonitorInstancesOutput) => void
  ): Promise<MonitorInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new MonitorInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Moves an Elastic IP address from the EC2-Classic platform to the EC2-VPC platform. The Elastic IP address must be allocated to your account for more than 24 hours, and it must not be associated with an instance. After the Elastic IP address is moved, it is no longer available for use in the EC2-Classic platform, unless you move it back using the <a>RestoreAddressToClassic</a> request. You cannot move an Elastic IP address that was originally allocated for use in the EC2-VPC platform to the EC2-Classic platform. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public moveAddressToVpc(
    args: MoveAddressToVpcInput
  ): Promise<MoveAddressToVpcOutput>;
  public moveAddressToVpc(
    args: MoveAddressToVpcInput,
    cb: (err: any, data?: MoveAddressToVpcOutput) => void
  ): void;
  public moveAddressToVpc(
    args: MoveAddressToVpcInput,
    cb?: (err: any, data?: MoveAddressToVpcOutput) => void
  ): Promise<MoveAddressToVpcOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new MoveAddressToVpcCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provisions an address range for use with your AWS resources through bring your own IP addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned, it is ready to be advertised using <a>AdvertiseByoipCidr</a>.</p> <p>AWS verifies that you own the address range and are authorized to advertise it. You must ensure that the address range is registered to you and that you created an RPKI ROA to authorize Amazon ASNs 16509 and 14618 to advertise the address range. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>Provisioning an address range is an asynchronous operation, so the call returns immediately, but the address range is not ready to use until its status changes from <code>pending-provision</code> to <code>provisioned</code>. To monitor the status of an address range, use <a>DescribeByoipCidrs</a>. To allocate an Elastic IP address from your address pool, use <a>AllocateAddress</a> with either the specific address from the address pool or the ID of the address pool.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public provisionByoipCidr(
    args: ProvisionByoipCidrInput
  ): Promise<ProvisionByoipCidrOutput>;
  public provisionByoipCidr(
    args: ProvisionByoipCidrInput,
    cb: (err: any, data?: ProvisionByoipCidrOutput) => void
  ): void;
  public provisionByoipCidr(
    args: ProvisionByoipCidrInput,
    cb?: (err: any, data?: ProvisionByoipCidrOutput) => void
  ): Promise<ProvisionByoipCidrOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ProvisionByoipCidrCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Purchase a reservation with configurations that match those of your Dedicated Host. You must have active Dedicated Hosts in your account before you purchase a reservation. This action results in the specified reservation being purchased and charged to your account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public purchaseHostReservation(
    args: PurchaseHostReservationInput
  ): Promise<PurchaseHostReservationOutput>;
  public purchaseHostReservation(
    args: PurchaseHostReservationInput,
    cb: (err: any, data?: PurchaseHostReservationOutput) => void
  ): void;
  public purchaseHostReservation(
    args: PurchaseHostReservationInput,
    cb?: (err: any, data?: PurchaseHostReservationOutput) => void
  ): Promise<PurchaseHostReservationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PurchaseHostReservationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Purchases a Reserved Instance for use with your account. With Reserved Instances, you pay a lower hourly rate compared to On-Demand instance pricing.</p> <p>Use <a>DescribeReservedInstancesOfferings</a> to get a list of Reserved Instance offerings that match your specifications. After you've purchased a Reserved Instance, you can check for your new Reserved Instance with <a>DescribeReservedInstances</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts-on-demand-reserved-instances.html">Reserved Instances</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public purchaseReservedInstancesOffering(
    args: PurchaseReservedInstancesOfferingInput
  ): Promise<PurchaseReservedInstancesOfferingOutput>;
  public purchaseReservedInstancesOffering(
    args: PurchaseReservedInstancesOfferingInput,
    cb: (err: any, data?: PurchaseReservedInstancesOfferingOutput) => void
  ): void;
  public purchaseReservedInstancesOffering(
    args: PurchaseReservedInstancesOfferingInput,
    cb?: (err: any, data?: PurchaseReservedInstancesOfferingOutput) => void
  ): Promise<PurchaseReservedInstancesOfferingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PurchaseReservedInstancesOfferingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Purchases the Scheduled Instances with the specified schedule.</p> <p>Scheduled Instances enable you to purchase Amazon EC2 compute capacity by the hour for a one-year term. Before you can purchase a Scheduled Instance, you must call <a>DescribeScheduledInstanceAvailability</a> to check for available schedules and obtain a purchase token. After you purchase a Scheduled Instance, you must call <a>RunScheduledInstances</a> during each scheduled time period.</p> <p>After you purchase a Scheduled Instance, you can't cancel, modify, or resell your purchase.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public purchaseScheduledInstances(
    args: PurchaseScheduledInstancesInput
  ): Promise<PurchaseScheduledInstancesOutput>;
  public purchaseScheduledInstances(
    args: PurchaseScheduledInstancesInput,
    cb: (err: any, data?: PurchaseScheduledInstancesOutput) => void
  ): void;
  public purchaseScheduledInstances(
    args: PurchaseScheduledInstancesInput,
    cb?: (err: any, data?: PurchaseScheduledInstancesOutput) => void
  ): Promise<PurchaseScheduledInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PurchaseScheduledInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Requests a reboot of the specified instances. This operation is asynchronous; it only queues a request to reboot the specified instances. The operation succeeds if the instances are valid and belong to you. Requests to reboot terminated instances are ignored.</p> <p>If an instance does not cleanly shut down within four minutes, Amazon EC2 performs a hard reboot.</p> <p>For more information about troubleshooting, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-console.html">Getting Console Output and Rebooting Instances</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public rebootInstances(
    args: RebootInstancesInput
  ): Promise<RebootInstancesOutput>;
  public rebootInstances(
    args: RebootInstancesInput,
    cb: (err: any, data?: RebootInstancesOutput) => void
  ): void;
  public rebootInstances(
    args: RebootInstancesInput,
    cb?: (err: any, data?: RebootInstancesOutput) => void
  ): Promise<RebootInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RebootInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Registers an AMI. When you're creating an AMI, this is the final step you must complete before you can launch an instance from the AMI. For more information about creating AMIs, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami.html">Creating Your Own AMIs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <note> <p>For Amazon EBS-backed instances, <a>CreateImage</a> creates and registers the AMI in a single request, so you don't have to register the AMI yourself.</p> </note> <p>You can also use <code>RegisterImage</code> to create an Amazon EBS-backed Linux AMI from a snapshot of a root device volume. You specify the snapshot using the block device mapping. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-launch-snapshot.html">Launching a Linux Instance from a Backup</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>You can't register an image where a secondary (non-root) snapshot has AWS Marketplace product codes.</p> <p>Some Linux distributions, such as Red Hat Enterprise Linux (RHEL) and SUSE Linux Enterprise Server (SLES), use the EC2 billing product code associated with an AMI to verify the subscription status for package updates. Creating an AMI from an EBS snapshot does not maintain this billing code, and instances launched from such an AMI are not able to connect to package update infrastructure. If you purchase a Reserved Instance offering for one of these Linux distributions and launch instances using an AMI that does not contain the required billing code, your Reserved Instance is not applied to these instances.</p> <p>To create an AMI for operating systems that require a billing code, see <a>CreateImage</a>.</p> <p>If needed, you can deregister an AMI at any time. Any modifications you make to an AMI backed by an instance store volume invalidates its registration. If you make changes to an image, deregister the previous image and register the new image.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerImage(args: RegisterImageInput): Promise<RegisterImageOutput>;
  public registerImage(
    args: RegisterImageInput,
    cb: (err: any, data?: RegisterImageOutput) => void
  ): void;
  public registerImage(
    args: RegisterImageInput,
    cb?: (err: any, data?: RegisterImageOutput) => void
  ): Promise<RegisterImageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterImageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Rejects a request to attach a VPC to a transit gateway.</p> <p>The VPC attachment must be in the <code>pendingAcceptance</code> state. Use <a>DescribeTransitGatewayVpcAttachments</a> to view your pending VPC attachment requests. Use <a>AcceptTransitGatewayVpcAttachment</a> to accept a VPC attachment request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public rejectTransitGatewayVpcAttachment(
    args: RejectTransitGatewayVpcAttachmentInput
  ): Promise<RejectTransitGatewayVpcAttachmentOutput>;
  public rejectTransitGatewayVpcAttachment(
    args: RejectTransitGatewayVpcAttachmentInput,
    cb: (err: any, data?: RejectTransitGatewayVpcAttachmentOutput) => void
  ): void;
  public rejectTransitGatewayVpcAttachment(
    args: RejectTransitGatewayVpcAttachmentInput,
    cb?: (err: any, data?: RejectTransitGatewayVpcAttachmentOutput) => void
  ): Promise<RejectTransitGatewayVpcAttachmentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RejectTransitGatewayVpcAttachmentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Rejects one or more VPC endpoint connection requests to your VPC endpoint service.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public rejectVpcEndpointConnections(
    args: RejectVpcEndpointConnectionsInput
  ): Promise<RejectVpcEndpointConnectionsOutput>;
  public rejectVpcEndpointConnections(
    args: RejectVpcEndpointConnectionsInput,
    cb: (err: any, data?: RejectVpcEndpointConnectionsOutput) => void
  ): void;
  public rejectVpcEndpointConnections(
    args: RejectVpcEndpointConnectionsInput,
    cb?: (err: any, data?: RejectVpcEndpointConnectionsOutput) => void
  ): Promise<RejectVpcEndpointConnectionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RejectVpcEndpointConnectionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Rejects a VPC peering connection request. The VPC peering connection must be in the <code>pending-acceptance</code> state. Use the <a>DescribeVpcPeeringConnections</a> request to view your outstanding VPC peering connection requests. To delete an active VPC peering connection, or to delete a VPC peering connection request that you initiated, use <a>DeleteVpcPeeringConnection</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public rejectVpcPeeringConnection(
    args: RejectVpcPeeringConnectionInput
  ): Promise<RejectVpcPeeringConnectionOutput>;
  public rejectVpcPeeringConnection(
    args: RejectVpcPeeringConnectionInput,
    cb: (err: any, data?: RejectVpcPeeringConnectionOutput) => void
  ): void;
  public rejectVpcPeeringConnection(
    args: RejectVpcPeeringConnectionInput,
    cb?: (err: any, data?: RejectVpcPeeringConnectionOutput) => void
  ): Promise<RejectVpcPeeringConnectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RejectVpcPeeringConnectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Releases the specified Elastic IP address.</p> <p>[EC2-Classic, default VPC] Releasing an Elastic IP address automatically disassociates it from any instance that it's associated with. To disassociate an Elastic IP address without releasing it, use <a>DisassociateAddress</a>.</p> <p>[Nondefault VPC] You must use <a>DisassociateAddress</a> to disassociate the Elastic IP address before you can release it. Otherwise, Amazon EC2 returns an error (<code>InvalidIPAddress.InUse</code>).</p> <p>After releasing an Elastic IP address, it is released to the IP address pool. Be sure to update your DNS records and any servers or devices that communicate with the address. If you attempt to release an Elastic IP address that you already released, you'll get an <code>AuthFailure</code> error if the address is already allocated to another AWS account.</p> <p>[EC2-VPC] After you release an Elastic IP address for use in a VPC, you might be able to recover it. For more information, see <a>AllocateAddress</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public releaseAddress(
    args: ReleaseAddressInput
  ): Promise<ReleaseAddressOutput>;
  public releaseAddress(
    args: ReleaseAddressInput,
    cb: (err: any, data?: ReleaseAddressOutput) => void
  ): void;
  public releaseAddress(
    args: ReleaseAddressInput,
    cb?: (err: any, data?: ReleaseAddressOutput) => void
  ): Promise<ReleaseAddressOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ReleaseAddressCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>When you no longer want to use an On-Demand Dedicated Host it can be released. On-Demand billing is stopped and the host goes into <code>released</code> state. The host ID of Dedicated Hosts that have been released can no longer be specified in another request, for example, to modify the host. You must stop or terminate all instances on a host before it can be released.</p> <p>When Dedicated Hosts are released, it may take some time for them to stop counting toward your limit and you may receive capacity errors when trying to allocate new Dedicated Hosts. Wait a few minutes and then try again.</p> <p>Released hosts still appear in a <a>DescribeHosts</a> response.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public releaseHosts(args: ReleaseHostsInput): Promise<ReleaseHostsOutput>;
  public releaseHosts(
    args: ReleaseHostsInput,
    cb: (err: any, data?: ReleaseHostsOutput) => void
  ): void;
  public releaseHosts(
    args: ReleaseHostsInput,
    cb?: (err: any, data?: ReleaseHostsOutput) => void
  ): Promise<ReleaseHostsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ReleaseHostsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Replaces an IAM instance profile for the specified running instance. You can use this action to change the IAM instance profile that's associated with an instance without having to disassociate the existing IAM instance profile first.</p> <p>Use <a>DescribeIamInstanceProfileAssociations</a> to get the association ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public replaceIamInstanceProfileAssociation(
    args: ReplaceIamInstanceProfileAssociationInput
  ): Promise<ReplaceIamInstanceProfileAssociationOutput>;
  public replaceIamInstanceProfileAssociation(
    args: ReplaceIamInstanceProfileAssociationInput,
    cb: (err: any, data?: ReplaceIamInstanceProfileAssociationOutput) => void
  ): void;
  public replaceIamInstanceProfileAssociation(
    args: ReplaceIamInstanceProfileAssociationInput,
    cb?: (err: any, data?: ReplaceIamInstanceProfileAssociationOutput) => void
  ): Promise<ReplaceIamInstanceProfileAssociationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ReplaceIamInstanceProfileAssociationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes which network ACL a subnet is associated with. By default when you create a subnet, it's automatically associated with the default network ACL. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p> <p>This is an idempotent operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public replaceNetworkAclAssociation(
    args: ReplaceNetworkAclAssociationInput
  ): Promise<ReplaceNetworkAclAssociationOutput>;
  public replaceNetworkAclAssociation(
    args: ReplaceNetworkAclAssociationInput,
    cb: (err: any, data?: ReplaceNetworkAclAssociationOutput) => void
  ): void;
  public replaceNetworkAclAssociation(
    args: ReplaceNetworkAclAssociationInput,
    cb?: (err: any, data?: ReplaceNetworkAclAssociationOutput) => void
  ): Promise<ReplaceNetworkAclAssociationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ReplaceNetworkAclAssociationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Replaces an entry (rule) in a network ACL. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public replaceNetworkAclEntry(
    args: ReplaceNetworkAclEntryInput
  ): Promise<ReplaceNetworkAclEntryOutput>;
  public replaceNetworkAclEntry(
    args: ReplaceNetworkAclEntryInput,
    cb: (err: any, data?: ReplaceNetworkAclEntryOutput) => void
  ): void;
  public replaceNetworkAclEntry(
    args: ReplaceNetworkAclEntryInput,
    cb?: (err: any, data?: ReplaceNetworkAclEntryOutput) => void
  ): Promise<ReplaceNetworkAclEntryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ReplaceNetworkAclEntryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Replaces an existing route within a route table in a VPC. You must provide only one of the following: internet gateway or virtual private gateway, NAT instance, NAT gateway, VPC peering connection, network interface, or egress-only internet gateway.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route Tables</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public replaceRoute(args: ReplaceRouteInput): Promise<ReplaceRouteOutput>;
  public replaceRoute(
    args: ReplaceRouteInput,
    cb: (err: any, data?: ReplaceRouteOutput) => void
  ): void;
  public replaceRoute(
    args: ReplaceRouteInput,
    cb?: (err: any, data?: ReplaceRouteOutput) => void
  ): Promise<ReplaceRouteOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ReplaceRouteCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes the route table associated with a given subnet in a VPC. After the operation completes, the subnet uses the routes in the new route table it's associated with. For more information about route tables, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route Tables</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p> <p>You can also use ReplaceRouteTableAssociation to change which table is the main route table in the VPC. You just specify the main route table's association ID and the route table to be the new main route table.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public replaceRouteTableAssociation(
    args: ReplaceRouteTableAssociationInput
  ): Promise<ReplaceRouteTableAssociationOutput>;
  public replaceRouteTableAssociation(
    args: ReplaceRouteTableAssociationInput,
    cb: (err: any, data?: ReplaceRouteTableAssociationOutput) => void
  ): void;
  public replaceRouteTableAssociation(
    args: ReplaceRouteTableAssociationInput,
    cb?: (err: any, data?: ReplaceRouteTableAssociationOutput) => void
  ): Promise<ReplaceRouteTableAssociationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ReplaceRouteTableAssociationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Replaces the specified route in the specified transit gateway route table.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public replaceTransitGatewayRoute(
    args: ReplaceTransitGatewayRouteInput
  ): Promise<ReplaceTransitGatewayRouteOutput>;
  public replaceTransitGatewayRoute(
    args: ReplaceTransitGatewayRouteInput,
    cb: (err: any, data?: ReplaceTransitGatewayRouteOutput) => void
  ): void;
  public replaceTransitGatewayRoute(
    args: ReplaceTransitGatewayRouteInput,
    cb?: (err: any, data?: ReplaceTransitGatewayRouteOutput) => void
  ): Promise<ReplaceTransitGatewayRouteOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ReplaceTransitGatewayRouteCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Submits feedback about the status of an instance. The instance must be in the <code>running</code> state. If your experience with the instance differs from the instance status returned by <a>DescribeInstanceStatus</a>, use <a>ReportInstanceStatus</a> to report your experience with the instance. Amazon EC2 collects this information to improve the accuracy of status checks.</p> <p>Use of this action does not change the value returned by <a>DescribeInstanceStatus</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public reportInstanceStatus(
    args: ReportInstanceStatusInput
  ): Promise<ReportInstanceStatusOutput>;
  public reportInstanceStatus(
    args: ReportInstanceStatusInput,
    cb: (err: any, data?: ReportInstanceStatusOutput) => void
  ): void;
  public reportInstanceStatus(
    args: ReportInstanceStatusInput,
    cb?: (err: any, data?: ReportInstanceStatusOutput) => void
  ): Promise<ReportInstanceStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ReportInstanceStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a Spot Fleet request.</p> <p>The Spot Fleet request specifies the total target capacity and the On-Demand target capacity. Amazon EC2 calculates the difference between the total capacity and On-Demand capacity, and launches the difference as Spot capacity.</p> <p>You can submit a single request that includes multiple launch specifications that vary by instance type, AMI, Availability Zone, or subnet.</p> <p>By default, the Spot Fleet requests Spot Instances in the Spot pool where the price per unit is the lowest. Each launch specification can include its own instance weighting that reflects the value of the instance type to your application workload.</p> <p>Alternatively, you can specify that the Spot Fleet distribute the target capacity across the Spot pools included in its launch specifications. By ensuring that the Spot Instances in your Spot Fleet are in different Spot pools, you can improve the availability of your fleet.</p> <p>You can specify tags for the Spot Instances. You cannot tag other resource types in a Spot Fleet request because only the <code>instance</code> resource type is supported.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-requests.html">Spot Fleet Requests</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public requestSpotFleet(
    args: RequestSpotFleetInput
  ): Promise<RequestSpotFleetOutput>;
  public requestSpotFleet(
    args: RequestSpotFleetInput,
    cb: (err: any, data?: RequestSpotFleetOutput) => void
  ): void;
  public requestSpotFleet(
    args: RequestSpotFleetInput,
    cb?: (err: any, data?: RequestSpotFleetOutput) => void
  ): Promise<RequestSpotFleetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RequestSpotFleetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a Spot Instance request.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-requests.html">Spot Instance Requests</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public requestSpotInstances(
    args: RequestSpotInstancesInput
  ): Promise<RequestSpotInstancesOutput>;
  public requestSpotInstances(
    args: RequestSpotInstancesInput,
    cb: (err: any, data?: RequestSpotInstancesOutput) => void
  ): void;
  public requestSpotInstances(
    args: RequestSpotInstancesInput,
    cb?: (err: any, data?: RequestSpotInstancesOutput) => void
  ): Promise<RequestSpotInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RequestSpotInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Resets the default customer master key (CMK) for EBS encryption for your account in this Region to the AWS managed CMK for EBS.</p> <p>After resetting the default CMK to the AWS managed CMK, you can continue to encrypt by a customer managed CMK by specifying it when you create the volume. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resetEbsDefaultKmsKeyId(
    args: ResetEbsDefaultKmsKeyIdInput
  ): Promise<ResetEbsDefaultKmsKeyIdOutput>;
  public resetEbsDefaultKmsKeyId(
    args: ResetEbsDefaultKmsKeyIdInput,
    cb: (err: any, data?: ResetEbsDefaultKmsKeyIdOutput) => void
  ): void;
  public resetEbsDefaultKmsKeyId(
    args: ResetEbsDefaultKmsKeyIdInput,
    cb?: (err: any, data?: ResetEbsDefaultKmsKeyIdOutput) => void
  ): Promise<ResetEbsDefaultKmsKeyIdOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResetEbsDefaultKmsKeyIdCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Resets the specified attribute of the specified Amazon FPGA Image (AFI) to its default value. You can only reset the load permission attribute.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resetFpgaImageAttribute(
    args: ResetFpgaImageAttributeInput
  ): Promise<ResetFpgaImageAttributeOutput>;
  public resetFpgaImageAttribute(
    args: ResetFpgaImageAttributeInput,
    cb: (err: any, data?: ResetFpgaImageAttributeOutput) => void
  ): void;
  public resetFpgaImageAttribute(
    args: ResetFpgaImageAttributeInput,
    cb?: (err: any, data?: ResetFpgaImageAttributeOutput) => void
  ): Promise<ResetFpgaImageAttributeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResetFpgaImageAttributeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Resets an attribute of an AMI to its default value.</p> <note> <p>The productCodes attribute can't be reset.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resetImageAttribute(
    args: ResetImageAttributeInput
  ): Promise<ResetImageAttributeOutput>;
  public resetImageAttribute(
    args: ResetImageAttributeInput,
    cb: (err: any, data?: ResetImageAttributeOutput) => void
  ): void;
  public resetImageAttribute(
    args: ResetImageAttributeInput,
    cb?: (err: any, data?: ResetImageAttributeOutput) => void
  ): Promise<ResetImageAttributeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResetImageAttributeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Resets an attribute of an instance to its default value. To reset the <code>kernel</code> or <code>ramdisk</code>, the instance must be in a stopped state. To reset the <code>sourceDestCheck</code>, the instance can be either running or stopped.</p> <p>The <code>sourceDestCheck</code> attribute controls whether source/destination checking is enabled. The default value is <code>true</code>, which means checking is enabled. This value must be <code>false</code> for a NAT instance to perform NAT. For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_NAT_Instance.html">NAT Instances</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resetInstanceAttribute(
    args: ResetInstanceAttributeInput
  ): Promise<ResetInstanceAttributeOutput>;
  public resetInstanceAttribute(
    args: ResetInstanceAttributeInput,
    cb: (err: any, data?: ResetInstanceAttributeOutput) => void
  ): void;
  public resetInstanceAttribute(
    args: ResetInstanceAttributeInput,
    cb?: (err: any, data?: ResetInstanceAttributeOutput) => void
  ): Promise<ResetInstanceAttributeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResetInstanceAttributeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Resets a network interface attribute. You can specify only one attribute at a time.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resetNetworkInterfaceAttribute(
    args: ResetNetworkInterfaceAttributeInput
  ): Promise<ResetNetworkInterfaceAttributeOutput>;
  public resetNetworkInterfaceAttribute(
    args: ResetNetworkInterfaceAttributeInput,
    cb: (err: any, data?: ResetNetworkInterfaceAttributeOutput) => void
  ): void;
  public resetNetworkInterfaceAttribute(
    args: ResetNetworkInterfaceAttributeInput,
    cb?: (err: any, data?: ResetNetworkInterfaceAttributeOutput) => void
  ): Promise<ResetNetworkInterfaceAttributeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResetNetworkInterfaceAttributeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Resets permission settings for the specified snapshot.</p> <p>For more information about modifying snapshot permissions, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html">Sharing Snapshots</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resetSnapshotAttribute(
    args: ResetSnapshotAttributeInput
  ): Promise<ResetSnapshotAttributeOutput>;
  public resetSnapshotAttribute(
    args: ResetSnapshotAttributeInput,
    cb: (err: any, data?: ResetSnapshotAttributeOutput) => void
  ): void;
  public resetSnapshotAttribute(
    args: ResetSnapshotAttributeInput,
    cb?: (err: any, data?: ResetSnapshotAttributeOutput) => void
  ): Promise<ResetSnapshotAttributeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResetSnapshotAttributeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Restores an Elastic IP address that was previously moved to the EC2-VPC platform back to the EC2-Classic platform. You cannot move an Elastic IP address that was originally allocated for use in EC2-VPC. The Elastic IP address must not be associated with an instance or network interface.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public restoreAddressToClassic(
    args: RestoreAddressToClassicInput
  ): Promise<RestoreAddressToClassicOutput>;
  public restoreAddressToClassic(
    args: RestoreAddressToClassicInput,
    cb: (err: any, data?: RestoreAddressToClassicOutput) => void
  ): void;
  public restoreAddressToClassic(
    args: RestoreAddressToClassicInput,
    cb?: (err: any, data?: RestoreAddressToClassicOutput) => void
  ): Promise<RestoreAddressToClassicOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RestoreAddressToClassicCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes an ingress authorization rule from a Client VPN endpoint. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public revokeClientVpnIngress(
    args: RevokeClientVpnIngressInput
  ): Promise<RevokeClientVpnIngressOutput>;
  public revokeClientVpnIngress(
    args: RevokeClientVpnIngressInput,
    cb: (err: any, data?: RevokeClientVpnIngressOutput) => void
  ): void;
  public revokeClientVpnIngress(
    args: RevokeClientVpnIngressInput,
    cb?: (err: any, data?: RevokeClientVpnIngressOutput) => void
  ): Promise<RevokeClientVpnIngressOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RevokeClientVpnIngressCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>[VPC only] Removes the specified egress rules from a security group for EC2-VPC. This action doesn't apply to security groups for use in EC2-Classic. To remove a rule, the values that you specify (for example, ports) must match the existing rule's values exactly.</p> <p>Each rule consists of the protocol and the IPv4 or IPv6 CIDR range or source security group. For the TCP and UDP protocols, you must also specify the destination port or range of ports. For the ICMP protocol, you must also specify the ICMP type and code. If the security group rule has a description, you do not have to specify the description to revoke the rule.</p> <p>Rule changes are propagated to instances within the security group as quickly as possible. However, a small delay might occur.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public revokeSecurityGroupEgress(
    args: RevokeSecurityGroupEgressInput
  ): Promise<RevokeSecurityGroupEgressOutput>;
  public revokeSecurityGroupEgress(
    args: RevokeSecurityGroupEgressInput,
    cb: (err: any, data?: RevokeSecurityGroupEgressOutput) => void
  ): void;
  public revokeSecurityGroupEgress(
    args: RevokeSecurityGroupEgressInput,
    cb?: (err: any, data?: RevokeSecurityGroupEgressOutput) => void
  ): Promise<RevokeSecurityGroupEgressOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RevokeSecurityGroupEgressCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the specified ingress rules from a security group. To remove a rule, the values that you specify (for example, ports) must match the existing rule's values exactly.</p> <note> <p>[EC2-Classic only] If the values you specify do not match the existing rule's values, no error is returned. Use <a>DescribeSecurityGroups</a> to verify that the rule has been removed.</p> </note> <p>Each rule consists of the protocol and the CIDR range or source security group. For the TCP and UDP protocols, you must also specify the destination port or range of ports. For the ICMP protocol, you must also specify the ICMP type and code. If the security group rule has a description, you do not have to specify the description to revoke the rule.</p> <p>Rule changes are propagated to instances within the security group as quickly as possible. However, a small delay might occur.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public revokeSecurityGroupIngress(
    args: RevokeSecurityGroupIngressInput
  ): Promise<RevokeSecurityGroupIngressOutput>;
  public revokeSecurityGroupIngress(
    args: RevokeSecurityGroupIngressInput,
    cb: (err: any, data?: RevokeSecurityGroupIngressOutput) => void
  ): void;
  public revokeSecurityGroupIngress(
    args: RevokeSecurityGroupIngressInput,
    cb?: (err: any, data?: RevokeSecurityGroupIngressOutput) => void
  ): Promise<RevokeSecurityGroupIngressOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RevokeSecurityGroupIngressCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Launches the specified number of instances using an AMI for which you have permissions. </p> <p>You can specify a number of options, or leave the default options. The following rules apply:</p> <ul> <li> <p>[EC2-VPC] If you don't specify a subnet ID, we choose a default subnet from your default VPC for you. If you don't have a default VPC, you must specify a subnet ID in the request.</p> </li> <li> <p>[EC2-Classic] If don't specify an Availability Zone, we choose one for you.</p> </li> <li> <p>Some instance types must be launched into a VPC. If you do not have a default VPC, or if you do not specify a subnet ID, the request fails. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-vpc.html#vpc-only-instance-types">Instance Types Available Only in a VPC</a>.</p> </li> <li> <p>[EC2-VPC] All instances have a network interface with a primary private IPv4 address. If you don't specify this address, we choose one from the IPv4 range of your subnet.</p> </li> <li> <p>Not all instance types support IPv6 addresses. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Types</a>.</p> </li> <li> <p>If you don't specify a security group ID, we use the default security group. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html">Security Groups</a>.</p> </li> <li> <p>If any of the AMIs have a product code attached for which the user has not subscribed, the request fails.</p> </li> </ul> <p>You can create a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">launch template</a>, which is a resource that contains the parameters to launch an instance. When you launch an instance using <a>RunInstances</a>, you can specify the launch template instead of specifying the launch parameters.</p> <p>To ensure faster instance launches, break up large requests into smaller batches. For example, create five separate launch requests for 100 instances each instead of one launch request for 500 instances.</p> <p>An instance is ready for you to use when it's in the <code>running</code> state. You can check the state of your instance using <a>DescribeInstances</a>. You can tag instances and EBS volumes during launch, after launch, or both. For more information, see <a>CreateTags</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging Your Amazon EC2 Resources</a>.</p> <p>Linux instances have access to the public key of the key pair at boot. You can use this key to provide secure access to the instance. Amazon EC2 public images use this feature to provide secure access without passwords. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Key Pairs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>For troubleshooting, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_InstanceStraightToTerminated.html">What To Do If An Instance Immediately Terminates</a>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesConnecting.html">Troubleshooting Connecting to Your Instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public runInstances(args: RunInstancesInput): Promise<RunInstancesOutput>;
  public runInstances(
    args: RunInstancesInput,
    cb: (err: any, data?: RunInstancesOutput) => void
  ): void;
  public runInstances(
    args: RunInstancesInput,
    cb?: (err: any, data?: RunInstancesOutput) => void
  ): Promise<RunInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RunInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Launches the specified Scheduled Instances.</p> <p>Before you can launch a Scheduled Instance, you must purchase it and obtain an identifier using <a>PurchaseScheduledInstances</a>.</p> <p>You must launch a Scheduled Instance during its scheduled time period. You can't stop or reboot a Scheduled Instance, but you can terminate it as needed. If you terminate a Scheduled Instance before the current scheduled time period ends, you can launch it again after a few minutes. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-scheduled-instances.html">Scheduled Instances</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public runScheduledInstances(
    args: RunScheduledInstancesInput
  ): Promise<RunScheduledInstancesOutput>;
  public runScheduledInstances(
    args: RunScheduledInstancesInput,
    cb: (err: any, data?: RunScheduledInstancesOutput) => void
  ): void;
  public runScheduledInstances(
    args: RunScheduledInstancesInput,
    cb?: (err: any, data?: RunScheduledInstancesOutput) => void
  ): Promise<RunScheduledInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RunScheduledInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Searches for routes in the specified transit gateway route table.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public searchTransitGatewayRoutes(
    args: SearchTransitGatewayRoutesInput
  ): Promise<SearchTransitGatewayRoutesOutput>;
  public searchTransitGatewayRoutes(
    args: SearchTransitGatewayRoutesInput,
    cb: (err: any, data?: SearchTransitGatewayRoutesOutput) => void
  ): void;
  public searchTransitGatewayRoutes(
    args: SearchTransitGatewayRoutesInput,
    cb?: (err: any, data?: SearchTransitGatewayRoutesOutput) => void
  ): Promise<SearchTransitGatewayRoutesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SearchTransitGatewayRoutesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts an Amazon EBS-backed instance that you've previously stopped.</p> <p>Instances that use Amazon EBS volumes as their root devices can be quickly stopped and started. When an instance is stopped, the compute resources are released and you are not billed for instance usage. However, your root partition Amazon EBS volume remains and continues to persist your data, and you are charged for Amazon EBS volume usage. You can restart your instance at any time. Every time you start your Windows instance, Amazon EC2 charges you for a full instance hour. If you stop and restart your Windows instance, a new instance hour begins and Amazon EC2 charges you for another full instance hour even if you are still within the same 60-minute period when it was stopped. Every time you start your Linux instance, Amazon EC2 charges a one-minute minimum for instance usage, and thereafter charges per second for instance usage.</p> <p>Before stopping an instance, make sure it is in a state from which it can be restarted. Stopping an instance does not preserve data stored in RAM.</p> <p>Performing this operation on an instance that uses an instance store as its root device returns an error.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html">Stopping Instances</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startInstances(
    args: StartInstancesInput
  ): Promise<StartInstancesOutput>;
  public startInstances(
    args: StartInstancesInput,
    cb: (err: any, data?: StartInstancesOutput) => void
  ): void;
  public startInstances(
    args: StartInstancesInput,
    cb?: (err: any, data?: StartInstancesOutput) => void
  ): Promise<StartInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops an Amazon EBS-backed instance.</p> <p>You can use the Stop action to hibernate an instance if the instance is <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#enabling-hibernation">enabled for hibernation</a> and it meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites">hibernation prerequisites</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate Your Instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>We don't charge usage for a stopped instance, or data transfer fees; however, your root partition Amazon EBS volume remains and continues to persist your data, and you are charged for Amazon EBS volume usage. Every time you start your Windows instance, Amazon EC2 charges you for a full instance hour. If you stop and restart your Windows instance, a new instance hour begins and Amazon EC2 charges you for another full instance hour even if you are still within the same 60-minute period when it was stopped. Every time you start your Linux instance, Amazon EC2 charges a one-minute minimum for instance usage, and thereafter charges per second for instance usage.</p> <p>You can't start, stop, or hibernate Spot Instances, and you can't stop or hibernate instance store-backed instances. For information about using hibernation for Spot Instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-interruptions.html#hibernate-spot-instances">Hibernating Interrupted Spot Instances</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>When you stop or hibernate an instance, we shut it down. You can restart your instance at any time. Before stopping or hibernating an instance, make sure it is in a state from which it can be restarted. Stopping an instance does not preserve data stored in RAM, but hibernating an instance does preserve data stored in RAM. If an instance cannot hibernate successfully, a normal shutdown occurs.</p> <p>Stopping and hibernating an instance is different to rebooting or terminating it. For example, when you stop or hibernate an instance, the root device and any other devices attached to the instance persist. When you terminate an instance, the root device and any other devices attached during the instance launch are automatically deleted. For more information about the differences between rebooting, stopping, hibernating, and terminating instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html">Instance Lifecycle</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>When you stop an instance, we attempt to shut it down forcibly after a short while. If your instance appears stuck in the stopping state after a period of time, there may be an issue with the underlying host computer. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesStopping.html">Troubleshooting Stopping Your Instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopInstances(args: StopInstancesInput): Promise<StopInstancesOutput>;
  public stopInstances(
    args: StopInstancesInput,
    cb: (err: any, data?: StopInstancesOutput) => void
  ): void;
  public stopInstances(
    args: StopInstancesInput,
    cb?: (err: any, data?: StopInstancesOutput) => void
  ): Promise<StopInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Terminates active Client VPN endpoint connections. This action can be used to terminate a specific client connection, or up to five connections established by a specific user.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public terminateClientVpnConnections(
    args: TerminateClientVpnConnectionsInput
  ): Promise<TerminateClientVpnConnectionsOutput>;
  public terminateClientVpnConnections(
    args: TerminateClientVpnConnectionsInput,
    cb: (err: any, data?: TerminateClientVpnConnectionsOutput) => void
  ): void;
  public terminateClientVpnConnections(
    args: TerminateClientVpnConnectionsInput,
    cb?: (err: any, data?: TerminateClientVpnConnectionsOutput) => void
  ): Promise<TerminateClientVpnConnectionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TerminateClientVpnConnectionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Shuts down the specified instances. This operation is idempotent; if you terminate an instance more than once, each call succeeds. </p> <p>If you specify multiple instances and the request fails (for example, because of a single incorrect instance ID), none of the instances are terminated.</p> <p>Terminated instances remain visible after termination (for approximately one hour).</p> <p>By default, Amazon EC2 deletes all EBS volumes that were attached when the instance launched. Volumes attached after instance launch continue running.</p> <p>You can stop, start, and terminate EBS-backed instances. You can only terminate instance store-backed instances. What happens to an instance differs if you stop it or terminate it. For example, when you stop an instance, the root device and any other devices attached to the instance persist. When you terminate an instance, any attached EBS volumes with the <code>DeleteOnTermination</code> block device mapping parameter set to <code>true</code> are automatically deleted. For more information about the differences between stopping and terminating instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html">Instance Lifecycle</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>For more information about troubleshooting, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesShuttingDown.html">Troubleshooting Terminating Your Instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public terminateInstances(
    args: TerminateInstancesInput
  ): Promise<TerminateInstancesOutput>;
  public terminateInstances(
    args: TerminateInstancesInput,
    cb: (err: any, data?: TerminateInstancesOutput) => void
  ): void;
  public terminateInstances(
    args: TerminateInstancesInput,
    cb?: (err: any, data?: TerminateInstancesOutput) => void
  ): Promise<TerminateInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TerminateInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Unassigns one or more IPv6 addresses from a network interface.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public unassignIpv6Addresses(
    args: UnassignIpv6AddressesInput
  ): Promise<UnassignIpv6AddressesOutput>;
  public unassignIpv6Addresses(
    args: UnassignIpv6AddressesInput,
    cb: (err: any, data?: UnassignIpv6AddressesOutput) => void
  ): void;
  public unassignIpv6Addresses(
    args: UnassignIpv6AddressesInput,
    cb?: (err: any, data?: UnassignIpv6AddressesOutput) => void
  ): Promise<UnassignIpv6AddressesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UnassignIpv6AddressesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Unassigns one or more secondary private IP addresses from a network interface.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public unassignPrivateIpAddresses(
    args: UnassignPrivateIpAddressesInput
  ): Promise<UnassignPrivateIpAddressesOutput>;
  public unassignPrivateIpAddresses(
    args: UnassignPrivateIpAddressesInput,
    cb: (err: any, data?: UnassignPrivateIpAddressesOutput) => void
  ): void;
  public unassignPrivateIpAddresses(
    args: UnassignPrivateIpAddressesInput,
    cb?: (err: any, data?: UnassignPrivateIpAddressesOutput) => void
  ): Promise<UnassignPrivateIpAddressesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UnassignPrivateIpAddressesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables detailed monitoring for a running instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch.html">Monitoring Your Instances and Volumes</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public unmonitorInstances(
    args: UnmonitorInstancesInput
  ): Promise<UnmonitorInstancesOutput>;
  public unmonitorInstances(
    args: UnmonitorInstancesInput,
    cb: (err: any, data?: UnmonitorInstancesOutput) => void
  ): void;
  public unmonitorInstances(
    args: UnmonitorInstancesInput,
    cb?: (err: any, data?: UnmonitorInstancesOutput) => void
  ): Promise<UnmonitorInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UnmonitorInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>[VPC only] Updates the description of an egress (outbound) security group rule. You can replace an existing description, or add a description to a rule that did not have one previously.</p> <p>You specify the description as part of the IP permissions structure. You can remove a description for a security group rule by omitting the description parameter in the request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateSecurityGroupRuleDescriptionsEgress(
    args: UpdateSecurityGroupRuleDescriptionsEgressInput
  ): Promise<UpdateSecurityGroupRuleDescriptionsEgressOutput>;
  public updateSecurityGroupRuleDescriptionsEgress(
    args: UpdateSecurityGroupRuleDescriptionsEgressInput,
    cb: (
      err: any,
      data?: UpdateSecurityGroupRuleDescriptionsEgressOutput
    ) => void
  ): void;
  public updateSecurityGroupRuleDescriptionsEgress(
    args: UpdateSecurityGroupRuleDescriptionsEgressInput,
    cb?: (
      err: any,
      data?: UpdateSecurityGroupRuleDescriptionsEgressOutput
    ) => void
  ): Promise<UpdateSecurityGroupRuleDescriptionsEgressOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateSecurityGroupRuleDescriptionsEgressCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the description of an ingress (inbound) security group rule. You can replace an existing description, or add a description to a rule that did not have one previously.</p> <p>You specify the description as part of the IP permissions structure. You can remove a description for a security group rule by omitting the description parameter in the request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateSecurityGroupRuleDescriptionsIngress(
    args: UpdateSecurityGroupRuleDescriptionsIngressInput
  ): Promise<UpdateSecurityGroupRuleDescriptionsIngressOutput>;
  public updateSecurityGroupRuleDescriptionsIngress(
    args: UpdateSecurityGroupRuleDescriptionsIngressInput,
    cb: (
      err: any,
      data?: UpdateSecurityGroupRuleDescriptionsIngressOutput
    ) => void
  ): void;
  public updateSecurityGroupRuleDescriptionsIngress(
    args: UpdateSecurityGroupRuleDescriptionsIngressInput,
    cb?: (
      err: any,
      data?: UpdateSecurityGroupRuleDescriptionsIngressOutput
    ) => void
  ): Promise<UpdateSecurityGroupRuleDescriptionsIngressOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateSecurityGroupRuleDescriptionsIngressCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops advertising an IPv4 address range that is provisioned as an address pool.</p> <p>You can perform this operation at most once every 10 seconds, even if you specify different address ranges each time.</p> <p>It can take a few minutes before traffic to the specified addresses stops routing to AWS because of BGP propagation delays.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public withdrawByoipCidr(
    args: WithdrawByoipCidrInput
  ): Promise<WithdrawByoipCidrOutput>;
  public withdrawByoipCidr(
    args: WithdrawByoipCidrInput,
    cb: (err: any, data?: WithdrawByoipCidrOutput) => void
  ): void;
  public withdrawByoipCidr(
    args: WithdrawByoipCidrInput,
    cb?: (err: any, data?: WithdrawByoipCidrOutput) => void
  ): Promise<WithdrawByoipCidrOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new WithdrawByoipCidrCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
