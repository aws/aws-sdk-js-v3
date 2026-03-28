// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";
import type { WaiterResult } from "@smithy/util-waiter";

import {
  type AcceptReservedNodeExchangeCommandInput,
  type AcceptReservedNodeExchangeCommandOutput,
  AcceptReservedNodeExchangeCommand,
} from "./commands/AcceptReservedNodeExchangeCommand";
import {
  type AddPartnerCommandInput,
  type AddPartnerCommandOutput,
  AddPartnerCommand,
} from "./commands/AddPartnerCommand";
import {
  type AssociateDataShareConsumerCommandInput,
  type AssociateDataShareConsumerCommandOutput,
  AssociateDataShareConsumerCommand,
} from "./commands/AssociateDataShareConsumerCommand";
import {
  type AuthorizeClusterSecurityGroupIngressCommandInput,
  type AuthorizeClusterSecurityGroupIngressCommandOutput,
  AuthorizeClusterSecurityGroupIngressCommand,
} from "./commands/AuthorizeClusterSecurityGroupIngressCommand";
import {
  type AuthorizeDataShareCommandInput,
  type AuthorizeDataShareCommandOutput,
  AuthorizeDataShareCommand,
} from "./commands/AuthorizeDataShareCommand";
import {
  type AuthorizeEndpointAccessCommandInput,
  type AuthorizeEndpointAccessCommandOutput,
  AuthorizeEndpointAccessCommand,
} from "./commands/AuthorizeEndpointAccessCommand";
import {
  type AuthorizeSnapshotAccessCommandInput,
  type AuthorizeSnapshotAccessCommandOutput,
  AuthorizeSnapshotAccessCommand,
} from "./commands/AuthorizeSnapshotAccessCommand";
import {
  type BatchDeleteClusterSnapshotsCommandInput,
  type BatchDeleteClusterSnapshotsCommandOutput,
  BatchDeleteClusterSnapshotsCommand,
} from "./commands/BatchDeleteClusterSnapshotsCommand";
import {
  type BatchModifyClusterSnapshotsCommandInput,
  type BatchModifyClusterSnapshotsCommandOutput,
  BatchModifyClusterSnapshotsCommand,
} from "./commands/BatchModifyClusterSnapshotsCommand";
import {
  type CancelResizeCommandInput,
  type CancelResizeCommandOutput,
  CancelResizeCommand,
} from "./commands/CancelResizeCommand";
import {
  type CopyClusterSnapshotCommandInput,
  type CopyClusterSnapshotCommandOutput,
  CopyClusterSnapshotCommand,
} from "./commands/CopyClusterSnapshotCommand";
import {
  type CreateAuthenticationProfileCommandInput,
  type CreateAuthenticationProfileCommandOutput,
  CreateAuthenticationProfileCommand,
} from "./commands/CreateAuthenticationProfileCommand";
import {
  type CreateClusterCommandInput,
  type CreateClusterCommandOutput,
  CreateClusterCommand,
} from "./commands/CreateClusterCommand";
import {
  type CreateClusterParameterGroupCommandInput,
  type CreateClusterParameterGroupCommandOutput,
  CreateClusterParameterGroupCommand,
} from "./commands/CreateClusterParameterGroupCommand";
import {
  type CreateClusterSecurityGroupCommandInput,
  type CreateClusterSecurityGroupCommandOutput,
  CreateClusterSecurityGroupCommand,
} from "./commands/CreateClusterSecurityGroupCommand";
import {
  type CreateClusterSnapshotCommandInput,
  type CreateClusterSnapshotCommandOutput,
  CreateClusterSnapshotCommand,
} from "./commands/CreateClusterSnapshotCommand";
import {
  type CreateClusterSubnetGroupCommandInput,
  type CreateClusterSubnetGroupCommandOutput,
  CreateClusterSubnetGroupCommand,
} from "./commands/CreateClusterSubnetGroupCommand";
import {
  type CreateCustomDomainAssociationCommandInput,
  type CreateCustomDomainAssociationCommandOutput,
  CreateCustomDomainAssociationCommand,
} from "./commands/CreateCustomDomainAssociationCommand";
import {
  type CreateEndpointAccessCommandInput,
  type CreateEndpointAccessCommandOutput,
  CreateEndpointAccessCommand,
} from "./commands/CreateEndpointAccessCommand";
import {
  type CreateEventSubscriptionCommandInput,
  type CreateEventSubscriptionCommandOutput,
  CreateEventSubscriptionCommand,
} from "./commands/CreateEventSubscriptionCommand";
import {
  type CreateHsmClientCertificateCommandInput,
  type CreateHsmClientCertificateCommandOutput,
  CreateHsmClientCertificateCommand,
} from "./commands/CreateHsmClientCertificateCommand";
import {
  type CreateHsmConfigurationCommandInput,
  type CreateHsmConfigurationCommandOutput,
  CreateHsmConfigurationCommand,
} from "./commands/CreateHsmConfigurationCommand";
import {
  type CreateIntegrationCommandInput,
  type CreateIntegrationCommandOutput,
  CreateIntegrationCommand,
} from "./commands/CreateIntegrationCommand";
import {
  type CreateRedshiftIdcApplicationCommandInput,
  type CreateRedshiftIdcApplicationCommandOutput,
  CreateRedshiftIdcApplicationCommand,
} from "./commands/CreateRedshiftIdcApplicationCommand";
import {
  type CreateScheduledActionCommandInput,
  type CreateScheduledActionCommandOutput,
  CreateScheduledActionCommand,
} from "./commands/CreateScheduledActionCommand";
import {
  type CreateSnapshotCopyGrantCommandInput,
  type CreateSnapshotCopyGrantCommandOutput,
  CreateSnapshotCopyGrantCommand,
} from "./commands/CreateSnapshotCopyGrantCommand";
import {
  type CreateSnapshotScheduleCommandInput,
  type CreateSnapshotScheduleCommandOutput,
  CreateSnapshotScheduleCommand,
} from "./commands/CreateSnapshotScheduleCommand";
import {
  type CreateTagsCommandInput,
  type CreateTagsCommandOutput,
  CreateTagsCommand,
} from "./commands/CreateTagsCommand";
import {
  type CreateUsageLimitCommandInput,
  type CreateUsageLimitCommandOutput,
  CreateUsageLimitCommand,
} from "./commands/CreateUsageLimitCommand";
import {
  type DeauthorizeDataShareCommandInput,
  type DeauthorizeDataShareCommandOutput,
  DeauthorizeDataShareCommand,
} from "./commands/DeauthorizeDataShareCommand";
import {
  type DeleteAuthenticationProfileCommandInput,
  type DeleteAuthenticationProfileCommandOutput,
  DeleteAuthenticationProfileCommand,
} from "./commands/DeleteAuthenticationProfileCommand";
import {
  type DeleteClusterCommandInput,
  type DeleteClusterCommandOutput,
  DeleteClusterCommand,
} from "./commands/DeleteClusterCommand";
import {
  type DeleteClusterParameterGroupCommandInput,
  type DeleteClusterParameterGroupCommandOutput,
  DeleteClusterParameterGroupCommand,
} from "./commands/DeleteClusterParameterGroupCommand";
import {
  type DeleteClusterSecurityGroupCommandInput,
  type DeleteClusterSecurityGroupCommandOutput,
  DeleteClusterSecurityGroupCommand,
} from "./commands/DeleteClusterSecurityGroupCommand";
import {
  type DeleteClusterSnapshotCommandInput,
  type DeleteClusterSnapshotCommandOutput,
  DeleteClusterSnapshotCommand,
} from "./commands/DeleteClusterSnapshotCommand";
import {
  type DeleteClusterSubnetGroupCommandInput,
  type DeleteClusterSubnetGroupCommandOutput,
  DeleteClusterSubnetGroupCommand,
} from "./commands/DeleteClusterSubnetGroupCommand";
import {
  type DeleteCustomDomainAssociationCommandInput,
  type DeleteCustomDomainAssociationCommandOutput,
  DeleteCustomDomainAssociationCommand,
} from "./commands/DeleteCustomDomainAssociationCommand";
import {
  type DeleteEndpointAccessCommandInput,
  type DeleteEndpointAccessCommandOutput,
  DeleteEndpointAccessCommand,
} from "./commands/DeleteEndpointAccessCommand";
import {
  type DeleteEventSubscriptionCommandInput,
  type DeleteEventSubscriptionCommandOutput,
  DeleteEventSubscriptionCommand,
} from "./commands/DeleteEventSubscriptionCommand";
import {
  type DeleteHsmClientCertificateCommandInput,
  type DeleteHsmClientCertificateCommandOutput,
  DeleteHsmClientCertificateCommand,
} from "./commands/DeleteHsmClientCertificateCommand";
import {
  type DeleteHsmConfigurationCommandInput,
  type DeleteHsmConfigurationCommandOutput,
  DeleteHsmConfigurationCommand,
} from "./commands/DeleteHsmConfigurationCommand";
import {
  type DeleteIntegrationCommandInput,
  type DeleteIntegrationCommandOutput,
  DeleteIntegrationCommand,
} from "./commands/DeleteIntegrationCommand";
import {
  type DeletePartnerCommandInput,
  type DeletePartnerCommandOutput,
  DeletePartnerCommand,
} from "./commands/DeletePartnerCommand";
import {
  type DeleteRedshiftIdcApplicationCommandInput,
  type DeleteRedshiftIdcApplicationCommandOutput,
  DeleteRedshiftIdcApplicationCommand,
} from "./commands/DeleteRedshiftIdcApplicationCommand";
import {
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteResourcePolicyCommand,
} from "./commands/DeleteResourcePolicyCommand";
import {
  type DeleteScheduledActionCommandInput,
  type DeleteScheduledActionCommandOutput,
  DeleteScheduledActionCommand,
} from "./commands/DeleteScheduledActionCommand";
import {
  type DeleteSnapshotCopyGrantCommandInput,
  type DeleteSnapshotCopyGrantCommandOutput,
  DeleteSnapshotCopyGrantCommand,
} from "./commands/DeleteSnapshotCopyGrantCommand";
import {
  type DeleteSnapshotScheduleCommandInput,
  type DeleteSnapshotScheduleCommandOutput,
  DeleteSnapshotScheduleCommand,
} from "./commands/DeleteSnapshotScheduleCommand";
import {
  type DeleteTagsCommandInput,
  type DeleteTagsCommandOutput,
  DeleteTagsCommand,
} from "./commands/DeleteTagsCommand";
import {
  type DeleteUsageLimitCommandInput,
  type DeleteUsageLimitCommandOutput,
  DeleteUsageLimitCommand,
} from "./commands/DeleteUsageLimitCommand";
import {
  type DeregisterNamespaceCommandInput,
  type DeregisterNamespaceCommandOutput,
  DeregisterNamespaceCommand,
} from "./commands/DeregisterNamespaceCommand";
import {
  type DescribeAccountAttributesCommandInput,
  type DescribeAccountAttributesCommandOutput,
  DescribeAccountAttributesCommand,
} from "./commands/DescribeAccountAttributesCommand";
import {
  type DescribeAuthenticationProfilesCommandInput,
  type DescribeAuthenticationProfilesCommandOutput,
  DescribeAuthenticationProfilesCommand,
} from "./commands/DescribeAuthenticationProfilesCommand";
import {
  type DescribeClusterDbRevisionsCommandInput,
  type DescribeClusterDbRevisionsCommandOutput,
  DescribeClusterDbRevisionsCommand,
} from "./commands/DescribeClusterDbRevisionsCommand";
import {
  type DescribeClusterParameterGroupsCommandInput,
  type DescribeClusterParameterGroupsCommandOutput,
  DescribeClusterParameterGroupsCommand,
} from "./commands/DescribeClusterParameterGroupsCommand";
import {
  type DescribeClusterParametersCommandInput,
  type DescribeClusterParametersCommandOutput,
  DescribeClusterParametersCommand,
} from "./commands/DescribeClusterParametersCommand";
import {
  type DescribeClustersCommandInput,
  type DescribeClustersCommandOutput,
  DescribeClustersCommand,
} from "./commands/DescribeClustersCommand";
import {
  type DescribeClusterSecurityGroupsCommandInput,
  type DescribeClusterSecurityGroupsCommandOutput,
  DescribeClusterSecurityGroupsCommand,
} from "./commands/DescribeClusterSecurityGroupsCommand";
import {
  type DescribeClusterSnapshotsCommandInput,
  type DescribeClusterSnapshotsCommandOutput,
  DescribeClusterSnapshotsCommand,
} from "./commands/DescribeClusterSnapshotsCommand";
import {
  type DescribeClusterSubnetGroupsCommandInput,
  type DescribeClusterSubnetGroupsCommandOutput,
  DescribeClusterSubnetGroupsCommand,
} from "./commands/DescribeClusterSubnetGroupsCommand";
import {
  type DescribeClusterTracksCommandInput,
  type DescribeClusterTracksCommandOutput,
  DescribeClusterTracksCommand,
} from "./commands/DescribeClusterTracksCommand";
import {
  type DescribeClusterVersionsCommandInput,
  type DescribeClusterVersionsCommandOutput,
  DescribeClusterVersionsCommand,
} from "./commands/DescribeClusterVersionsCommand";
import {
  type DescribeCustomDomainAssociationsCommandInput,
  type DescribeCustomDomainAssociationsCommandOutput,
  DescribeCustomDomainAssociationsCommand,
} from "./commands/DescribeCustomDomainAssociationsCommand";
import {
  type DescribeDataSharesCommandInput,
  type DescribeDataSharesCommandOutput,
  DescribeDataSharesCommand,
} from "./commands/DescribeDataSharesCommand";
import {
  type DescribeDataSharesForConsumerCommandInput,
  type DescribeDataSharesForConsumerCommandOutput,
  DescribeDataSharesForConsumerCommand,
} from "./commands/DescribeDataSharesForConsumerCommand";
import {
  type DescribeDataSharesForProducerCommandInput,
  type DescribeDataSharesForProducerCommandOutput,
  DescribeDataSharesForProducerCommand,
} from "./commands/DescribeDataSharesForProducerCommand";
import {
  type DescribeDefaultClusterParametersCommandInput,
  type DescribeDefaultClusterParametersCommandOutput,
  DescribeDefaultClusterParametersCommand,
} from "./commands/DescribeDefaultClusterParametersCommand";
import {
  type DescribeEndpointAccessCommandInput,
  type DescribeEndpointAccessCommandOutput,
  DescribeEndpointAccessCommand,
} from "./commands/DescribeEndpointAccessCommand";
import {
  type DescribeEndpointAuthorizationCommandInput,
  type DescribeEndpointAuthorizationCommandOutput,
  DescribeEndpointAuthorizationCommand,
} from "./commands/DescribeEndpointAuthorizationCommand";
import {
  type DescribeEventCategoriesCommandInput,
  type DescribeEventCategoriesCommandOutput,
  DescribeEventCategoriesCommand,
} from "./commands/DescribeEventCategoriesCommand";
import {
  type DescribeEventsCommandInput,
  type DescribeEventsCommandOutput,
  DescribeEventsCommand,
} from "./commands/DescribeEventsCommand";
import {
  type DescribeEventSubscriptionsCommandInput,
  type DescribeEventSubscriptionsCommandOutput,
  DescribeEventSubscriptionsCommand,
} from "./commands/DescribeEventSubscriptionsCommand";
import {
  type DescribeHsmClientCertificatesCommandInput,
  type DescribeHsmClientCertificatesCommandOutput,
  DescribeHsmClientCertificatesCommand,
} from "./commands/DescribeHsmClientCertificatesCommand";
import {
  type DescribeHsmConfigurationsCommandInput,
  type DescribeHsmConfigurationsCommandOutput,
  DescribeHsmConfigurationsCommand,
} from "./commands/DescribeHsmConfigurationsCommand";
import {
  type DescribeInboundIntegrationsCommandInput,
  type DescribeInboundIntegrationsCommandOutput,
  DescribeInboundIntegrationsCommand,
} from "./commands/DescribeInboundIntegrationsCommand";
import {
  type DescribeIntegrationsCommandInput,
  type DescribeIntegrationsCommandOutput,
  DescribeIntegrationsCommand,
} from "./commands/DescribeIntegrationsCommand";
import {
  type DescribeLoggingStatusCommandInput,
  type DescribeLoggingStatusCommandOutput,
  DescribeLoggingStatusCommand,
} from "./commands/DescribeLoggingStatusCommand";
import {
  type DescribeNodeConfigurationOptionsCommandInput,
  type DescribeNodeConfigurationOptionsCommandOutput,
  DescribeNodeConfigurationOptionsCommand,
} from "./commands/DescribeNodeConfigurationOptionsCommand";
import {
  type DescribeOrderableClusterOptionsCommandInput,
  type DescribeOrderableClusterOptionsCommandOutput,
  DescribeOrderableClusterOptionsCommand,
} from "./commands/DescribeOrderableClusterOptionsCommand";
import {
  type DescribePartnersCommandInput,
  type DescribePartnersCommandOutput,
  DescribePartnersCommand,
} from "./commands/DescribePartnersCommand";
import {
  type DescribeRedshiftIdcApplicationsCommandInput,
  type DescribeRedshiftIdcApplicationsCommandOutput,
  DescribeRedshiftIdcApplicationsCommand,
} from "./commands/DescribeRedshiftIdcApplicationsCommand";
import {
  type DescribeReservedNodeExchangeStatusCommandInput,
  type DescribeReservedNodeExchangeStatusCommandOutput,
  DescribeReservedNodeExchangeStatusCommand,
} from "./commands/DescribeReservedNodeExchangeStatusCommand";
import {
  type DescribeReservedNodeOfferingsCommandInput,
  type DescribeReservedNodeOfferingsCommandOutput,
  DescribeReservedNodeOfferingsCommand,
} from "./commands/DescribeReservedNodeOfferingsCommand";
import {
  type DescribeReservedNodesCommandInput,
  type DescribeReservedNodesCommandOutput,
  DescribeReservedNodesCommand,
} from "./commands/DescribeReservedNodesCommand";
import {
  type DescribeResizeCommandInput,
  type DescribeResizeCommandOutput,
  DescribeResizeCommand,
} from "./commands/DescribeResizeCommand";
import {
  type DescribeScheduledActionsCommandInput,
  type DescribeScheduledActionsCommandOutput,
  DescribeScheduledActionsCommand,
} from "./commands/DescribeScheduledActionsCommand";
import {
  type DescribeSnapshotCopyGrantsCommandInput,
  type DescribeSnapshotCopyGrantsCommandOutput,
  DescribeSnapshotCopyGrantsCommand,
} from "./commands/DescribeSnapshotCopyGrantsCommand";
import {
  type DescribeSnapshotSchedulesCommandInput,
  type DescribeSnapshotSchedulesCommandOutput,
  DescribeSnapshotSchedulesCommand,
} from "./commands/DescribeSnapshotSchedulesCommand";
import {
  type DescribeStorageCommandInput,
  type DescribeStorageCommandOutput,
  DescribeStorageCommand,
} from "./commands/DescribeStorageCommand";
import {
  type DescribeTableRestoreStatusCommandInput,
  type DescribeTableRestoreStatusCommandOutput,
  DescribeTableRestoreStatusCommand,
} from "./commands/DescribeTableRestoreStatusCommand";
import {
  type DescribeTagsCommandInput,
  type DescribeTagsCommandOutput,
  DescribeTagsCommand,
} from "./commands/DescribeTagsCommand";
import {
  type DescribeUsageLimitsCommandInput,
  type DescribeUsageLimitsCommandOutput,
  DescribeUsageLimitsCommand,
} from "./commands/DescribeUsageLimitsCommand";
import {
  type DisableLoggingCommandInput,
  type DisableLoggingCommandOutput,
  DisableLoggingCommand,
} from "./commands/DisableLoggingCommand";
import {
  type DisableSnapshotCopyCommandInput,
  type DisableSnapshotCopyCommandOutput,
  DisableSnapshotCopyCommand,
} from "./commands/DisableSnapshotCopyCommand";
import {
  type DisassociateDataShareConsumerCommandInput,
  type DisassociateDataShareConsumerCommandOutput,
  DisassociateDataShareConsumerCommand,
} from "./commands/DisassociateDataShareConsumerCommand";
import {
  type EnableLoggingCommandInput,
  type EnableLoggingCommandOutput,
  EnableLoggingCommand,
} from "./commands/EnableLoggingCommand";
import {
  type EnableSnapshotCopyCommandInput,
  type EnableSnapshotCopyCommandOutput,
  EnableSnapshotCopyCommand,
} from "./commands/EnableSnapshotCopyCommand";
import {
  type FailoverPrimaryComputeCommandInput,
  type FailoverPrimaryComputeCommandOutput,
  FailoverPrimaryComputeCommand,
} from "./commands/FailoverPrimaryComputeCommand";
import {
  type GetClusterCredentialsCommandInput,
  type GetClusterCredentialsCommandOutput,
  GetClusterCredentialsCommand,
} from "./commands/GetClusterCredentialsCommand";
import {
  type GetClusterCredentialsWithIAMCommandInput,
  type GetClusterCredentialsWithIAMCommandOutput,
  GetClusterCredentialsWithIAMCommand,
} from "./commands/GetClusterCredentialsWithIAMCommand";
import {
  type GetIdentityCenterAuthTokenCommandInput,
  type GetIdentityCenterAuthTokenCommandOutput,
  GetIdentityCenterAuthTokenCommand,
} from "./commands/GetIdentityCenterAuthTokenCommand";
import {
  type GetReservedNodeExchangeConfigurationOptionsCommandInput,
  type GetReservedNodeExchangeConfigurationOptionsCommandOutput,
  GetReservedNodeExchangeConfigurationOptionsCommand,
} from "./commands/GetReservedNodeExchangeConfigurationOptionsCommand";
import {
  type GetReservedNodeExchangeOfferingsCommandInput,
  type GetReservedNodeExchangeOfferingsCommandOutput,
  GetReservedNodeExchangeOfferingsCommand,
} from "./commands/GetReservedNodeExchangeOfferingsCommand";
import {
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetResourcePolicyCommand,
} from "./commands/GetResourcePolicyCommand";
import {
  type ListRecommendationsCommandInput,
  type ListRecommendationsCommandOutput,
  ListRecommendationsCommand,
} from "./commands/ListRecommendationsCommand";
import {
  type ModifyAquaConfigurationCommandInput,
  type ModifyAquaConfigurationCommandOutput,
  ModifyAquaConfigurationCommand,
} from "./commands/ModifyAquaConfigurationCommand";
import {
  type ModifyAuthenticationProfileCommandInput,
  type ModifyAuthenticationProfileCommandOutput,
  ModifyAuthenticationProfileCommand,
} from "./commands/ModifyAuthenticationProfileCommand";
import {
  type ModifyClusterCommandInput,
  type ModifyClusterCommandOutput,
  ModifyClusterCommand,
} from "./commands/ModifyClusterCommand";
import {
  type ModifyClusterDbRevisionCommandInput,
  type ModifyClusterDbRevisionCommandOutput,
  ModifyClusterDbRevisionCommand,
} from "./commands/ModifyClusterDbRevisionCommand";
import {
  type ModifyClusterIamRolesCommandInput,
  type ModifyClusterIamRolesCommandOutput,
  ModifyClusterIamRolesCommand,
} from "./commands/ModifyClusterIamRolesCommand";
import {
  type ModifyClusterMaintenanceCommandInput,
  type ModifyClusterMaintenanceCommandOutput,
  ModifyClusterMaintenanceCommand,
} from "./commands/ModifyClusterMaintenanceCommand";
import {
  type ModifyClusterParameterGroupCommandInput,
  type ModifyClusterParameterGroupCommandOutput,
  ModifyClusterParameterGroupCommand,
} from "./commands/ModifyClusterParameterGroupCommand";
import {
  type ModifyClusterSnapshotCommandInput,
  type ModifyClusterSnapshotCommandOutput,
  ModifyClusterSnapshotCommand,
} from "./commands/ModifyClusterSnapshotCommand";
import {
  type ModifyClusterSnapshotScheduleCommandInput,
  type ModifyClusterSnapshotScheduleCommandOutput,
  ModifyClusterSnapshotScheduleCommand,
} from "./commands/ModifyClusterSnapshotScheduleCommand";
import {
  type ModifyClusterSubnetGroupCommandInput,
  type ModifyClusterSubnetGroupCommandOutput,
  ModifyClusterSubnetGroupCommand,
} from "./commands/ModifyClusterSubnetGroupCommand";
import {
  type ModifyCustomDomainAssociationCommandInput,
  type ModifyCustomDomainAssociationCommandOutput,
  ModifyCustomDomainAssociationCommand,
} from "./commands/ModifyCustomDomainAssociationCommand";
import {
  type ModifyEndpointAccessCommandInput,
  type ModifyEndpointAccessCommandOutput,
  ModifyEndpointAccessCommand,
} from "./commands/ModifyEndpointAccessCommand";
import {
  type ModifyEventSubscriptionCommandInput,
  type ModifyEventSubscriptionCommandOutput,
  ModifyEventSubscriptionCommand,
} from "./commands/ModifyEventSubscriptionCommand";
import {
  type ModifyIntegrationCommandInput,
  type ModifyIntegrationCommandOutput,
  ModifyIntegrationCommand,
} from "./commands/ModifyIntegrationCommand";
import {
  type ModifyLakehouseConfigurationCommandInput,
  type ModifyLakehouseConfigurationCommandOutput,
  ModifyLakehouseConfigurationCommand,
} from "./commands/ModifyLakehouseConfigurationCommand";
import {
  type ModifyRedshiftIdcApplicationCommandInput,
  type ModifyRedshiftIdcApplicationCommandOutput,
  ModifyRedshiftIdcApplicationCommand,
} from "./commands/ModifyRedshiftIdcApplicationCommand";
import {
  type ModifyScheduledActionCommandInput,
  type ModifyScheduledActionCommandOutput,
  ModifyScheduledActionCommand,
} from "./commands/ModifyScheduledActionCommand";
import {
  type ModifySnapshotCopyRetentionPeriodCommandInput,
  type ModifySnapshotCopyRetentionPeriodCommandOutput,
  ModifySnapshotCopyRetentionPeriodCommand,
} from "./commands/ModifySnapshotCopyRetentionPeriodCommand";
import {
  type ModifySnapshotScheduleCommandInput,
  type ModifySnapshotScheduleCommandOutput,
  ModifySnapshotScheduleCommand,
} from "./commands/ModifySnapshotScheduleCommand";
import {
  type ModifyUsageLimitCommandInput,
  type ModifyUsageLimitCommandOutput,
  ModifyUsageLimitCommand,
} from "./commands/ModifyUsageLimitCommand";
import {
  type PauseClusterCommandInput,
  type PauseClusterCommandOutput,
  PauseClusterCommand,
} from "./commands/PauseClusterCommand";
import {
  type PurchaseReservedNodeOfferingCommandInput,
  type PurchaseReservedNodeOfferingCommandOutput,
  PurchaseReservedNodeOfferingCommand,
} from "./commands/PurchaseReservedNodeOfferingCommand";
import {
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  PutResourcePolicyCommand,
} from "./commands/PutResourcePolicyCommand";
import {
  type RebootClusterCommandInput,
  type RebootClusterCommandOutput,
  RebootClusterCommand,
} from "./commands/RebootClusterCommand";
import {
  type RegisterNamespaceCommandInput,
  type RegisterNamespaceCommandOutput,
  RegisterNamespaceCommand,
} from "./commands/RegisterNamespaceCommand";
import {
  type RejectDataShareCommandInput,
  type RejectDataShareCommandOutput,
  RejectDataShareCommand,
} from "./commands/RejectDataShareCommand";
import {
  type ResetClusterParameterGroupCommandInput,
  type ResetClusterParameterGroupCommandOutput,
  ResetClusterParameterGroupCommand,
} from "./commands/ResetClusterParameterGroupCommand";
import {
  type ResizeClusterCommandInput,
  type ResizeClusterCommandOutput,
  ResizeClusterCommand,
} from "./commands/ResizeClusterCommand";
import {
  type RestoreFromClusterSnapshotCommandInput,
  type RestoreFromClusterSnapshotCommandOutput,
  RestoreFromClusterSnapshotCommand,
} from "./commands/RestoreFromClusterSnapshotCommand";
import {
  type RestoreTableFromClusterSnapshotCommandInput,
  type RestoreTableFromClusterSnapshotCommandOutput,
  RestoreTableFromClusterSnapshotCommand,
} from "./commands/RestoreTableFromClusterSnapshotCommand";
import {
  type ResumeClusterCommandInput,
  type ResumeClusterCommandOutput,
  ResumeClusterCommand,
} from "./commands/ResumeClusterCommand";
import {
  type RevokeClusterSecurityGroupIngressCommandInput,
  type RevokeClusterSecurityGroupIngressCommandOutput,
  RevokeClusterSecurityGroupIngressCommand,
} from "./commands/RevokeClusterSecurityGroupIngressCommand";
import {
  type RevokeEndpointAccessCommandInput,
  type RevokeEndpointAccessCommandOutput,
  RevokeEndpointAccessCommand,
} from "./commands/RevokeEndpointAccessCommand";
import {
  type RevokeSnapshotAccessCommandInput,
  type RevokeSnapshotAccessCommandOutput,
  RevokeSnapshotAccessCommand,
} from "./commands/RevokeSnapshotAccessCommand";
import {
  type RotateEncryptionKeyCommandInput,
  type RotateEncryptionKeyCommandOutput,
  RotateEncryptionKeyCommand,
} from "./commands/RotateEncryptionKeyCommand";
import {
  type UpdatePartnerStatusCommandInput,
  type UpdatePartnerStatusCommandOutput,
  UpdatePartnerStatusCommand,
} from "./commands/UpdatePartnerStatusCommand";
import { paginateDescribeClusterDbRevisions } from "./pagination/DescribeClusterDbRevisionsPaginator";
import { paginateDescribeClusterParameterGroups } from "./pagination/DescribeClusterParameterGroupsPaginator";
import { paginateDescribeClusterParameters } from "./pagination/DescribeClusterParametersPaginator";
import { paginateDescribeClusterSecurityGroups } from "./pagination/DescribeClusterSecurityGroupsPaginator";
import { paginateDescribeClusterSnapshots } from "./pagination/DescribeClusterSnapshotsPaginator";
import { paginateDescribeClusters } from "./pagination/DescribeClustersPaginator";
import { paginateDescribeClusterSubnetGroups } from "./pagination/DescribeClusterSubnetGroupsPaginator";
import { paginateDescribeClusterTracks } from "./pagination/DescribeClusterTracksPaginator";
import { paginateDescribeClusterVersions } from "./pagination/DescribeClusterVersionsPaginator";
import { paginateDescribeCustomDomainAssociations } from "./pagination/DescribeCustomDomainAssociationsPaginator";
import { paginateDescribeDataSharesForConsumer } from "./pagination/DescribeDataSharesForConsumerPaginator";
import { paginateDescribeDataSharesForProducer } from "./pagination/DescribeDataSharesForProducerPaginator";
import { paginateDescribeDataShares } from "./pagination/DescribeDataSharesPaginator";
import { paginateDescribeDefaultClusterParameters } from "./pagination/DescribeDefaultClusterParametersPaginator";
import { paginateDescribeEndpointAccess } from "./pagination/DescribeEndpointAccessPaginator";
import { paginateDescribeEndpointAuthorization } from "./pagination/DescribeEndpointAuthorizationPaginator";
import { paginateDescribeEvents } from "./pagination/DescribeEventsPaginator";
import { paginateDescribeEventSubscriptions } from "./pagination/DescribeEventSubscriptionsPaginator";
import { paginateDescribeHsmClientCertificates } from "./pagination/DescribeHsmClientCertificatesPaginator";
import { paginateDescribeHsmConfigurations } from "./pagination/DescribeHsmConfigurationsPaginator";
import { paginateDescribeInboundIntegrations } from "./pagination/DescribeInboundIntegrationsPaginator";
import { paginateDescribeIntegrations } from "./pagination/DescribeIntegrationsPaginator";
import { paginateDescribeNodeConfigurationOptions } from "./pagination/DescribeNodeConfigurationOptionsPaginator";
import { paginateDescribeOrderableClusterOptions } from "./pagination/DescribeOrderableClusterOptionsPaginator";
import { paginateDescribeRedshiftIdcApplications } from "./pagination/DescribeRedshiftIdcApplicationsPaginator";
import { paginateDescribeReservedNodeExchangeStatus } from "./pagination/DescribeReservedNodeExchangeStatusPaginator";
import { paginateDescribeReservedNodeOfferings } from "./pagination/DescribeReservedNodeOfferingsPaginator";
import { paginateDescribeReservedNodes } from "./pagination/DescribeReservedNodesPaginator";
import { paginateDescribeScheduledActions } from "./pagination/DescribeScheduledActionsPaginator";
import { paginateDescribeSnapshotCopyGrants } from "./pagination/DescribeSnapshotCopyGrantsPaginator";
import { paginateDescribeSnapshotSchedules } from "./pagination/DescribeSnapshotSchedulesPaginator";
import { paginateDescribeTableRestoreStatus } from "./pagination/DescribeTableRestoreStatusPaginator";
import { paginateDescribeTags } from "./pagination/DescribeTagsPaginator";
import { paginateDescribeUsageLimits } from "./pagination/DescribeUsageLimitsPaginator";
import {
  paginateGetReservedNodeExchangeConfigurationOptions,
} from "./pagination/GetReservedNodeExchangeConfigurationOptionsPaginator";
import { paginateGetReservedNodeExchangeOfferings } from "./pagination/GetReservedNodeExchangeOfferingsPaginator";
import { paginateListRecommendations } from "./pagination/ListRecommendationsPaginator";
import { RedshiftClient } from "./RedshiftClient";
import { waitUntilClusterAvailable } from "./waiters/waitForClusterAvailable";
import { waitUntilClusterDeleted } from "./waiters/waitForClusterDeleted";
import { waitUntilClusterRestored } from "./waiters/waitForClusterRestored";
import { waitUntilSnapshotAvailable } from "./waiters/waitForSnapshotAvailable";

const commands = {
  AcceptReservedNodeExchangeCommand,
  AddPartnerCommand,
  AssociateDataShareConsumerCommand,
  AuthorizeClusterSecurityGroupIngressCommand,
  AuthorizeDataShareCommand,
  AuthorizeEndpointAccessCommand,
  AuthorizeSnapshotAccessCommand,
  BatchDeleteClusterSnapshotsCommand,
  BatchModifyClusterSnapshotsCommand,
  CancelResizeCommand,
  CopyClusterSnapshotCommand,
  CreateAuthenticationProfileCommand,
  CreateClusterCommand,
  CreateClusterParameterGroupCommand,
  CreateClusterSecurityGroupCommand,
  CreateClusterSnapshotCommand,
  CreateClusterSubnetGroupCommand,
  CreateCustomDomainAssociationCommand,
  CreateEndpointAccessCommand,
  CreateEventSubscriptionCommand,
  CreateHsmClientCertificateCommand,
  CreateHsmConfigurationCommand,
  CreateIntegrationCommand,
  CreateRedshiftIdcApplicationCommand,
  CreateScheduledActionCommand,
  CreateSnapshotCopyGrantCommand,
  CreateSnapshotScheduleCommand,
  CreateTagsCommand,
  CreateUsageLimitCommand,
  DeauthorizeDataShareCommand,
  DeleteAuthenticationProfileCommand,
  DeleteClusterCommand,
  DeleteClusterParameterGroupCommand,
  DeleteClusterSecurityGroupCommand,
  DeleteClusterSnapshotCommand,
  DeleteClusterSubnetGroupCommand,
  DeleteCustomDomainAssociationCommand,
  DeleteEndpointAccessCommand,
  DeleteEventSubscriptionCommand,
  DeleteHsmClientCertificateCommand,
  DeleteHsmConfigurationCommand,
  DeleteIntegrationCommand,
  DeletePartnerCommand,
  DeleteRedshiftIdcApplicationCommand,
  DeleteResourcePolicyCommand,
  DeleteScheduledActionCommand,
  DeleteSnapshotCopyGrantCommand,
  DeleteSnapshotScheduleCommand,
  DeleteTagsCommand,
  DeleteUsageLimitCommand,
  DeregisterNamespaceCommand,
  DescribeAccountAttributesCommand,
  DescribeAuthenticationProfilesCommand,
  DescribeClusterDbRevisionsCommand,
  DescribeClusterParameterGroupsCommand,
  DescribeClusterParametersCommand,
  DescribeClustersCommand,
  DescribeClusterSecurityGroupsCommand,
  DescribeClusterSnapshotsCommand,
  DescribeClusterSubnetGroupsCommand,
  DescribeClusterTracksCommand,
  DescribeClusterVersionsCommand,
  DescribeCustomDomainAssociationsCommand,
  DescribeDataSharesCommand,
  DescribeDataSharesForConsumerCommand,
  DescribeDataSharesForProducerCommand,
  DescribeDefaultClusterParametersCommand,
  DescribeEndpointAccessCommand,
  DescribeEndpointAuthorizationCommand,
  DescribeEventCategoriesCommand,
  DescribeEventsCommand,
  DescribeEventSubscriptionsCommand,
  DescribeHsmClientCertificatesCommand,
  DescribeHsmConfigurationsCommand,
  DescribeInboundIntegrationsCommand,
  DescribeIntegrationsCommand,
  DescribeLoggingStatusCommand,
  DescribeNodeConfigurationOptionsCommand,
  DescribeOrderableClusterOptionsCommand,
  DescribePartnersCommand,
  DescribeRedshiftIdcApplicationsCommand,
  DescribeReservedNodeExchangeStatusCommand,
  DescribeReservedNodeOfferingsCommand,
  DescribeReservedNodesCommand,
  DescribeResizeCommand,
  DescribeScheduledActionsCommand,
  DescribeSnapshotCopyGrantsCommand,
  DescribeSnapshotSchedulesCommand,
  DescribeStorageCommand,
  DescribeTableRestoreStatusCommand,
  DescribeTagsCommand,
  DescribeUsageLimitsCommand,
  DisableLoggingCommand,
  DisableSnapshotCopyCommand,
  DisassociateDataShareConsumerCommand,
  EnableLoggingCommand,
  EnableSnapshotCopyCommand,
  FailoverPrimaryComputeCommand,
  GetClusterCredentialsCommand,
  GetClusterCredentialsWithIAMCommand,
  GetIdentityCenterAuthTokenCommand,
  GetReservedNodeExchangeConfigurationOptionsCommand,
  GetReservedNodeExchangeOfferingsCommand,
  GetResourcePolicyCommand,
  ListRecommendationsCommand,
  ModifyAquaConfigurationCommand,
  ModifyAuthenticationProfileCommand,
  ModifyClusterCommand,
  ModifyClusterDbRevisionCommand,
  ModifyClusterIamRolesCommand,
  ModifyClusterMaintenanceCommand,
  ModifyClusterParameterGroupCommand,
  ModifyClusterSnapshotCommand,
  ModifyClusterSnapshotScheduleCommand,
  ModifyClusterSubnetGroupCommand,
  ModifyCustomDomainAssociationCommand,
  ModifyEndpointAccessCommand,
  ModifyEventSubscriptionCommand,
  ModifyIntegrationCommand,
  ModifyLakehouseConfigurationCommand,
  ModifyRedshiftIdcApplicationCommand,
  ModifyScheduledActionCommand,
  ModifySnapshotCopyRetentionPeriodCommand,
  ModifySnapshotScheduleCommand,
  ModifyUsageLimitCommand,
  PauseClusterCommand,
  PurchaseReservedNodeOfferingCommand,
  PutResourcePolicyCommand,
  RebootClusterCommand,
  RegisterNamespaceCommand,
  RejectDataShareCommand,
  ResetClusterParameterGroupCommand,
  ResizeClusterCommand,
  RestoreFromClusterSnapshotCommand,
  RestoreTableFromClusterSnapshotCommand,
  ResumeClusterCommand,
  RevokeClusterSecurityGroupIngressCommand,
  RevokeEndpointAccessCommand,
  RevokeSnapshotAccessCommand,
  RotateEncryptionKeyCommand,
  UpdatePartnerStatusCommand,
};
const paginators = {
  paginateDescribeClusterDbRevisions,
  paginateDescribeClusterParameterGroups,
  paginateDescribeClusterParameters,
  paginateDescribeClusters,
  paginateDescribeClusterSecurityGroups,
  paginateDescribeClusterSnapshots,
  paginateDescribeClusterSubnetGroups,
  paginateDescribeClusterTracks,
  paginateDescribeClusterVersions,
  paginateDescribeCustomDomainAssociations,
  paginateDescribeDataShares,
  paginateDescribeDataSharesForConsumer,
  paginateDescribeDataSharesForProducer,
  paginateDescribeDefaultClusterParameters,
  paginateDescribeEndpointAccess,
  paginateDescribeEndpointAuthorization,
  paginateDescribeEvents,
  paginateDescribeEventSubscriptions,
  paginateDescribeHsmClientCertificates,
  paginateDescribeHsmConfigurations,
  paginateDescribeInboundIntegrations,
  paginateDescribeIntegrations,
  paginateDescribeNodeConfigurationOptions,
  paginateDescribeOrderableClusterOptions,
  paginateDescribeRedshiftIdcApplications,
  paginateDescribeReservedNodeExchangeStatus,
  paginateDescribeReservedNodeOfferings,
  paginateDescribeReservedNodes,
  paginateDescribeScheduledActions,
  paginateDescribeSnapshotCopyGrants,
  paginateDescribeSnapshotSchedules,
  paginateDescribeTableRestoreStatus,
  paginateDescribeTags,
  paginateDescribeUsageLimits,
  paginateGetReservedNodeExchangeConfigurationOptions,
  paginateGetReservedNodeExchangeOfferings,
  paginateListRecommendations,
};
const waiters = {
  waitUntilClusterAvailable,
  waitUntilClusterDeleted,
  waitUntilClusterRestored,
  waitUntilSnapshotAvailable,
};

export interface Redshift {
  /**
   * @see {@link AcceptReservedNodeExchangeCommand}
   */
  acceptReservedNodeExchange(
    args: AcceptReservedNodeExchangeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptReservedNodeExchangeCommandOutput>;
  acceptReservedNodeExchange(
    args: AcceptReservedNodeExchangeCommandInput,
    cb: (err: any, data?: AcceptReservedNodeExchangeCommandOutput) => void
  ): void;
  acceptReservedNodeExchange(
    args: AcceptReservedNodeExchangeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptReservedNodeExchangeCommandOutput) => void
  ): void;

  /**
   * @see {@link AddPartnerCommand}
   */
  addPartner(
    args: AddPartnerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddPartnerCommandOutput>;
  addPartner(
    args: AddPartnerCommandInput,
    cb: (err: any, data?: AddPartnerCommandOutput) => void
  ): void;
  addPartner(
    args: AddPartnerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddPartnerCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateDataShareConsumerCommand}
   */
  associateDataShareConsumer(
    args: AssociateDataShareConsumerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateDataShareConsumerCommandOutput>;
  associateDataShareConsumer(
    args: AssociateDataShareConsumerCommandInput,
    cb: (err: any, data?: AssociateDataShareConsumerCommandOutput) => void
  ): void;
  associateDataShareConsumer(
    args: AssociateDataShareConsumerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateDataShareConsumerCommandOutput) => void
  ): void;

  /**
   * @see {@link AuthorizeClusterSecurityGroupIngressCommand}
   */
  authorizeClusterSecurityGroupIngress(
    args: AuthorizeClusterSecurityGroupIngressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AuthorizeClusterSecurityGroupIngressCommandOutput>;
  authorizeClusterSecurityGroupIngress(
    args: AuthorizeClusterSecurityGroupIngressCommandInput,
    cb: (err: any, data?: AuthorizeClusterSecurityGroupIngressCommandOutput) => void
  ): void;
  authorizeClusterSecurityGroupIngress(
    args: AuthorizeClusterSecurityGroupIngressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AuthorizeClusterSecurityGroupIngressCommandOutput) => void
  ): void;

  /**
   * @see {@link AuthorizeDataShareCommand}
   */
  authorizeDataShare(
    args: AuthorizeDataShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AuthorizeDataShareCommandOutput>;
  authorizeDataShare(
    args: AuthorizeDataShareCommandInput,
    cb: (err: any, data?: AuthorizeDataShareCommandOutput) => void
  ): void;
  authorizeDataShare(
    args: AuthorizeDataShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AuthorizeDataShareCommandOutput) => void
  ): void;

  /**
   * @see {@link AuthorizeEndpointAccessCommand}
   */
  authorizeEndpointAccess(
    args: AuthorizeEndpointAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AuthorizeEndpointAccessCommandOutput>;
  authorizeEndpointAccess(
    args: AuthorizeEndpointAccessCommandInput,
    cb: (err: any, data?: AuthorizeEndpointAccessCommandOutput) => void
  ): void;
  authorizeEndpointAccess(
    args: AuthorizeEndpointAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AuthorizeEndpointAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link AuthorizeSnapshotAccessCommand}
   */
  authorizeSnapshotAccess(
    args: AuthorizeSnapshotAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AuthorizeSnapshotAccessCommandOutput>;
  authorizeSnapshotAccess(
    args: AuthorizeSnapshotAccessCommandInput,
    cb: (err: any, data?: AuthorizeSnapshotAccessCommandOutput) => void
  ): void;
  authorizeSnapshotAccess(
    args: AuthorizeSnapshotAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AuthorizeSnapshotAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteClusterSnapshotsCommand}
   */
  batchDeleteClusterSnapshots(
    args: BatchDeleteClusterSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteClusterSnapshotsCommandOutput>;
  batchDeleteClusterSnapshots(
    args: BatchDeleteClusterSnapshotsCommandInput,
    cb: (err: any, data?: BatchDeleteClusterSnapshotsCommandOutput) => void
  ): void;
  batchDeleteClusterSnapshots(
    args: BatchDeleteClusterSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteClusterSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchModifyClusterSnapshotsCommand}
   */
  batchModifyClusterSnapshots(
    args: BatchModifyClusterSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchModifyClusterSnapshotsCommandOutput>;
  batchModifyClusterSnapshots(
    args: BatchModifyClusterSnapshotsCommandInput,
    cb: (err: any, data?: BatchModifyClusterSnapshotsCommandOutput) => void
  ): void;
  batchModifyClusterSnapshots(
    args: BatchModifyClusterSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchModifyClusterSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelResizeCommand}
   */
  cancelResize(
    args: CancelResizeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelResizeCommandOutput>;
  cancelResize(
    args: CancelResizeCommandInput,
    cb: (err: any, data?: CancelResizeCommandOutput) => void
  ): void;
  cancelResize(
    args: CancelResizeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelResizeCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyClusterSnapshotCommand}
   */
  copyClusterSnapshot(
    args: CopyClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyClusterSnapshotCommandOutput>;
  copyClusterSnapshot(
    args: CopyClusterSnapshotCommandInput,
    cb: (err: any, data?: CopyClusterSnapshotCommandOutput) => void
  ): void;
  copyClusterSnapshot(
    args: CopyClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyClusterSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAuthenticationProfileCommand}
   */
  createAuthenticationProfile(
    args: CreateAuthenticationProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAuthenticationProfileCommandOutput>;
  createAuthenticationProfile(
    args: CreateAuthenticationProfileCommandInput,
    cb: (err: any, data?: CreateAuthenticationProfileCommandOutput) => void
  ): void;
  createAuthenticationProfile(
    args: CreateAuthenticationProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAuthenticationProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClusterCommand}
   */
  createCluster(
    args: CreateClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClusterCommandOutput>;
  createCluster(
    args: CreateClusterCommandInput,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;
  createCluster(
    args: CreateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClusterParameterGroupCommand}
   */
  createClusterParameterGroup(
    args: CreateClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClusterParameterGroupCommandOutput>;
  createClusterParameterGroup(
    args: CreateClusterParameterGroupCommandInput,
    cb: (err: any, data?: CreateClusterParameterGroupCommandOutput) => void
  ): void;
  createClusterParameterGroup(
    args: CreateClusterParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClusterSecurityGroupCommand}
   */
  createClusterSecurityGroup(
    args: CreateClusterSecurityGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClusterSecurityGroupCommandOutput>;
  createClusterSecurityGroup(
    args: CreateClusterSecurityGroupCommandInput,
    cb: (err: any, data?: CreateClusterSecurityGroupCommandOutput) => void
  ): void;
  createClusterSecurityGroup(
    args: CreateClusterSecurityGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterSecurityGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClusterSnapshotCommand}
   */
  createClusterSnapshot(
    args: CreateClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClusterSnapshotCommandOutput>;
  createClusterSnapshot(
    args: CreateClusterSnapshotCommandInput,
    cb: (err: any, data?: CreateClusterSnapshotCommandOutput) => void
  ): void;
  createClusterSnapshot(
    args: CreateClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClusterSubnetGroupCommand}
   */
  createClusterSubnetGroup(
    args: CreateClusterSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClusterSubnetGroupCommandOutput>;
  createClusterSubnetGroup(
    args: CreateClusterSubnetGroupCommandInput,
    cb: (err: any, data?: CreateClusterSubnetGroupCommandOutput) => void
  ): void;
  createClusterSubnetGroup(
    args: CreateClusterSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCustomDomainAssociationCommand}
   */
  createCustomDomainAssociation(
    args: CreateCustomDomainAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomDomainAssociationCommandOutput>;
  createCustomDomainAssociation(
    args: CreateCustomDomainAssociationCommandInput,
    cb: (err: any, data?: CreateCustomDomainAssociationCommandOutput) => void
  ): void;
  createCustomDomainAssociation(
    args: CreateCustomDomainAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomDomainAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEndpointAccessCommand}
   */
  createEndpointAccess(
    args: CreateEndpointAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEndpointAccessCommandOutput>;
  createEndpointAccess(
    args: CreateEndpointAccessCommandInput,
    cb: (err: any, data?: CreateEndpointAccessCommandOutput) => void
  ): void;
  createEndpointAccess(
    args: CreateEndpointAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEndpointAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventSubscriptionCommand}
   */
  createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventSubscriptionCommandOutput>;
  createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void
  ): void;
  createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateHsmClientCertificateCommand}
   */
  createHsmClientCertificate(
    args: CreateHsmClientCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHsmClientCertificateCommandOutput>;
  createHsmClientCertificate(
    args: CreateHsmClientCertificateCommandInput,
    cb: (err: any, data?: CreateHsmClientCertificateCommandOutput) => void
  ): void;
  createHsmClientCertificate(
    args: CreateHsmClientCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHsmClientCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateHsmConfigurationCommand}
   */
  createHsmConfiguration(
    args: CreateHsmConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHsmConfigurationCommandOutput>;
  createHsmConfiguration(
    args: CreateHsmConfigurationCommandInput,
    cb: (err: any, data?: CreateHsmConfigurationCommandOutput) => void
  ): void;
  createHsmConfiguration(
    args: CreateHsmConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHsmConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIntegrationCommand}
   */
  createIntegration(
    args: CreateIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIntegrationCommandOutput>;
  createIntegration(
    args: CreateIntegrationCommandInput,
    cb: (err: any, data?: CreateIntegrationCommandOutput) => void
  ): void;
  createIntegration(
    args: CreateIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRedshiftIdcApplicationCommand}
   */
  createRedshiftIdcApplication(
    args: CreateRedshiftIdcApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRedshiftIdcApplicationCommandOutput>;
  createRedshiftIdcApplication(
    args: CreateRedshiftIdcApplicationCommandInput,
    cb: (err: any, data?: CreateRedshiftIdcApplicationCommandOutput) => void
  ): void;
  createRedshiftIdcApplication(
    args: CreateRedshiftIdcApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRedshiftIdcApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateScheduledActionCommand}
   */
  createScheduledAction(
    args: CreateScheduledActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateScheduledActionCommandOutput>;
  createScheduledAction(
    args: CreateScheduledActionCommandInput,
    cb: (err: any, data?: CreateScheduledActionCommandOutput) => void
  ): void;
  createScheduledAction(
    args: CreateScheduledActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateScheduledActionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSnapshotCopyGrantCommand}
   */
  createSnapshotCopyGrant(
    args: CreateSnapshotCopyGrantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSnapshotCopyGrantCommandOutput>;
  createSnapshotCopyGrant(
    args: CreateSnapshotCopyGrantCommandInput,
    cb: (err: any, data?: CreateSnapshotCopyGrantCommandOutput) => void
  ): void;
  createSnapshotCopyGrant(
    args: CreateSnapshotCopyGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSnapshotCopyGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSnapshotScheduleCommand}
   */
  createSnapshotSchedule(): Promise<CreateSnapshotScheduleCommandOutput>;
  createSnapshotSchedule(
    args: CreateSnapshotScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSnapshotScheduleCommandOutput>;
  createSnapshotSchedule(
    args: CreateSnapshotScheduleCommandInput,
    cb: (err: any, data?: CreateSnapshotScheduleCommandOutput) => void
  ): void;
  createSnapshotSchedule(
    args: CreateSnapshotScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSnapshotScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTagsCommand}
   */
  createTags(
    args: CreateTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTagsCommandOutput>;
  createTags(
    args: CreateTagsCommandInput,
    cb: (err: any, data?: CreateTagsCommandOutput) => void
  ): void;
  createTags(
    args: CreateTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUsageLimitCommand}
   */
  createUsageLimit(
    args: CreateUsageLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUsageLimitCommandOutput>;
  createUsageLimit(
    args: CreateUsageLimitCommandInput,
    cb: (err: any, data?: CreateUsageLimitCommandOutput) => void
  ): void;
  createUsageLimit(
    args: CreateUsageLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUsageLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link DeauthorizeDataShareCommand}
   */
  deauthorizeDataShare(
    args: DeauthorizeDataShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeauthorizeDataShareCommandOutput>;
  deauthorizeDataShare(
    args: DeauthorizeDataShareCommandInput,
    cb: (err: any, data?: DeauthorizeDataShareCommandOutput) => void
  ): void;
  deauthorizeDataShare(
    args: DeauthorizeDataShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeauthorizeDataShareCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAuthenticationProfileCommand}
   */
  deleteAuthenticationProfile(
    args: DeleteAuthenticationProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAuthenticationProfileCommandOutput>;
  deleteAuthenticationProfile(
    args: DeleteAuthenticationProfileCommandInput,
    cb: (err: any, data?: DeleteAuthenticationProfileCommandOutput) => void
  ): void;
  deleteAuthenticationProfile(
    args: DeleteAuthenticationProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAuthenticationProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClusterCommand}
   */
  deleteCluster(
    args: DeleteClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClusterCommandOutput>;
  deleteCluster(
    args: DeleteClusterCommandInput,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;
  deleteCluster(
    args: DeleteClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClusterParameterGroupCommand}
   */
  deleteClusterParameterGroup(
    args: DeleteClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClusterParameterGroupCommandOutput>;
  deleteClusterParameterGroup(
    args: DeleteClusterParameterGroupCommandInput,
    cb: (err: any, data?: DeleteClusterParameterGroupCommandOutput) => void
  ): void;
  deleteClusterParameterGroup(
    args: DeleteClusterParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClusterSecurityGroupCommand}
   */
  deleteClusterSecurityGroup(
    args: DeleteClusterSecurityGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClusterSecurityGroupCommandOutput>;
  deleteClusterSecurityGroup(
    args: DeleteClusterSecurityGroupCommandInput,
    cb: (err: any, data?: DeleteClusterSecurityGroupCommandOutput) => void
  ): void;
  deleteClusterSecurityGroup(
    args: DeleteClusterSecurityGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterSecurityGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClusterSnapshotCommand}
   */
  deleteClusterSnapshot(
    args: DeleteClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClusterSnapshotCommandOutput>;
  deleteClusterSnapshot(
    args: DeleteClusterSnapshotCommandInput,
    cb: (err: any, data?: DeleteClusterSnapshotCommandOutput) => void
  ): void;
  deleteClusterSnapshot(
    args: DeleteClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClusterSubnetGroupCommand}
   */
  deleteClusterSubnetGroup(
    args: DeleteClusterSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClusterSubnetGroupCommandOutput>;
  deleteClusterSubnetGroup(
    args: DeleteClusterSubnetGroupCommandInput,
    cb: (err: any, data?: DeleteClusterSubnetGroupCommandOutput) => void
  ): void;
  deleteClusterSubnetGroup(
    args: DeleteClusterSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomDomainAssociationCommand}
   */
  deleteCustomDomainAssociation(
    args: DeleteCustomDomainAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomDomainAssociationCommandOutput>;
  deleteCustomDomainAssociation(
    args: DeleteCustomDomainAssociationCommandInput,
    cb: (err: any, data?: DeleteCustomDomainAssociationCommandOutput) => void
  ): void;
  deleteCustomDomainAssociation(
    args: DeleteCustomDomainAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomDomainAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEndpointAccessCommand}
   */
  deleteEndpointAccess(
    args: DeleteEndpointAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEndpointAccessCommandOutput>;
  deleteEndpointAccess(
    args: DeleteEndpointAccessCommandInput,
    cb: (err: any, data?: DeleteEndpointAccessCommandOutput) => void
  ): void;
  deleteEndpointAccess(
    args: DeleteEndpointAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEndpointAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventSubscriptionCommand}
   */
  deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventSubscriptionCommandOutput>;
  deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void
  ): void;
  deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteHsmClientCertificateCommand}
   */
  deleteHsmClientCertificate(
    args: DeleteHsmClientCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteHsmClientCertificateCommandOutput>;
  deleteHsmClientCertificate(
    args: DeleteHsmClientCertificateCommandInput,
    cb: (err: any, data?: DeleteHsmClientCertificateCommandOutput) => void
  ): void;
  deleteHsmClientCertificate(
    args: DeleteHsmClientCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHsmClientCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteHsmConfigurationCommand}
   */
  deleteHsmConfiguration(
    args: DeleteHsmConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteHsmConfigurationCommandOutput>;
  deleteHsmConfiguration(
    args: DeleteHsmConfigurationCommandInput,
    cb: (err: any, data?: DeleteHsmConfigurationCommandOutput) => void
  ): void;
  deleteHsmConfiguration(
    args: DeleteHsmConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHsmConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIntegrationCommand}
   */
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIntegrationCommandOutput>;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePartnerCommand}
   */
  deletePartner(
    args: DeletePartnerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePartnerCommandOutput>;
  deletePartner(
    args: DeletePartnerCommandInput,
    cb: (err: any, data?: DeletePartnerCommandOutput) => void
  ): void;
  deletePartner(
    args: DeletePartnerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePartnerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRedshiftIdcApplicationCommand}
   */
  deleteRedshiftIdcApplication(
    args: DeleteRedshiftIdcApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRedshiftIdcApplicationCommandOutput>;
  deleteRedshiftIdcApplication(
    args: DeleteRedshiftIdcApplicationCommandInput,
    cb: (err: any, data?: DeleteRedshiftIdcApplicationCommandOutput) => void
  ): void;
  deleteRedshiftIdcApplication(
    args: DeleteRedshiftIdcApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRedshiftIdcApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteScheduledActionCommand}
   */
  deleteScheduledAction(
    args: DeleteScheduledActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteScheduledActionCommandOutput>;
  deleteScheduledAction(
    args: DeleteScheduledActionCommandInput,
    cb: (err: any, data?: DeleteScheduledActionCommandOutput) => void
  ): void;
  deleteScheduledAction(
    args: DeleteScheduledActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScheduledActionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSnapshotCopyGrantCommand}
   */
  deleteSnapshotCopyGrant(
    args: DeleteSnapshotCopyGrantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSnapshotCopyGrantCommandOutput>;
  deleteSnapshotCopyGrant(
    args: DeleteSnapshotCopyGrantCommandInput,
    cb: (err: any, data?: DeleteSnapshotCopyGrantCommandOutput) => void
  ): void;
  deleteSnapshotCopyGrant(
    args: DeleteSnapshotCopyGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSnapshotCopyGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSnapshotScheduleCommand}
   */
  deleteSnapshotSchedule(
    args: DeleteSnapshotScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSnapshotScheduleCommandOutput>;
  deleteSnapshotSchedule(
    args: DeleteSnapshotScheduleCommandInput,
    cb: (err: any, data?: DeleteSnapshotScheduleCommandOutput) => void
  ): void;
  deleteSnapshotSchedule(
    args: DeleteSnapshotScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSnapshotScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTagsCommand}
   */
  deleteTags(
    args: DeleteTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTagsCommandOutput>;
  deleteTags(
    args: DeleteTagsCommandInput,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;
  deleteTags(
    args: DeleteTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUsageLimitCommand}
   */
  deleteUsageLimit(
    args: DeleteUsageLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUsageLimitCommandOutput>;
  deleteUsageLimit(
    args: DeleteUsageLimitCommandInput,
    cb: (err: any, data?: DeleteUsageLimitCommandOutput) => void
  ): void;
  deleteUsageLimit(
    args: DeleteUsageLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUsageLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterNamespaceCommand}
   */
  deregisterNamespace(
    args: DeregisterNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterNamespaceCommandOutput>;
  deregisterNamespace(
    args: DeregisterNamespaceCommandInput,
    cb: (err: any, data?: DeregisterNamespaceCommandOutput) => void
  ): void;
  deregisterNamespace(
    args: DeregisterNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterNamespaceCommandOutput) => void
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
   * @see {@link DescribeAuthenticationProfilesCommand}
   */
  describeAuthenticationProfiles(): Promise<DescribeAuthenticationProfilesCommandOutput>;
  describeAuthenticationProfiles(
    args: DescribeAuthenticationProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAuthenticationProfilesCommandOutput>;
  describeAuthenticationProfiles(
    args: DescribeAuthenticationProfilesCommandInput,
    cb: (err: any, data?: DescribeAuthenticationProfilesCommandOutput) => void
  ): void;
  describeAuthenticationProfiles(
    args: DescribeAuthenticationProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAuthenticationProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterDbRevisionsCommand}
   */
  describeClusterDbRevisions(): Promise<DescribeClusterDbRevisionsCommandOutput>;
  describeClusterDbRevisions(
    args: DescribeClusterDbRevisionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterDbRevisionsCommandOutput>;
  describeClusterDbRevisions(
    args: DescribeClusterDbRevisionsCommandInput,
    cb: (err: any, data?: DescribeClusterDbRevisionsCommandOutput) => void
  ): void;
  describeClusterDbRevisions(
    args: DescribeClusterDbRevisionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterDbRevisionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterParameterGroupsCommand}
   */
  describeClusterParameterGroups(): Promise<DescribeClusterParameterGroupsCommandOutput>;
  describeClusterParameterGroups(
    args: DescribeClusterParameterGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterParameterGroupsCommandOutput>;
  describeClusterParameterGroups(
    args: DescribeClusterParameterGroupsCommandInput,
    cb: (err: any, data?: DescribeClusterParameterGroupsCommandOutput) => void
  ): void;
  describeClusterParameterGroups(
    args: DescribeClusterParameterGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterParameterGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterParametersCommand}
   */
  describeClusterParameters(
    args: DescribeClusterParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterParametersCommandOutput>;
  describeClusterParameters(
    args: DescribeClusterParametersCommandInput,
    cb: (err: any, data?: DescribeClusterParametersCommandOutput) => void
  ): void;
  describeClusterParameters(
    args: DescribeClusterParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClustersCommand}
   */
  describeClusters(): Promise<DescribeClustersCommandOutput>;
  describeClusters(
    args: DescribeClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClustersCommandOutput>;
  describeClusters(
    args: DescribeClustersCommandInput,
    cb: (err: any, data?: DescribeClustersCommandOutput) => void
  ): void;
  describeClusters(
    args: DescribeClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterSecurityGroupsCommand}
   */
  describeClusterSecurityGroups(): Promise<DescribeClusterSecurityGroupsCommandOutput>;
  describeClusterSecurityGroups(
    args: DescribeClusterSecurityGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterSecurityGroupsCommandOutput>;
  describeClusterSecurityGroups(
    args: DescribeClusterSecurityGroupsCommandInput,
    cb: (err: any, data?: DescribeClusterSecurityGroupsCommandOutput) => void
  ): void;
  describeClusterSecurityGroups(
    args: DescribeClusterSecurityGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterSecurityGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterSnapshotsCommand}
   */
  describeClusterSnapshots(): Promise<DescribeClusterSnapshotsCommandOutput>;
  describeClusterSnapshots(
    args: DescribeClusterSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterSnapshotsCommandOutput>;
  describeClusterSnapshots(
    args: DescribeClusterSnapshotsCommandInput,
    cb: (err: any, data?: DescribeClusterSnapshotsCommandOutput) => void
  ): void;
  describeClusterSnapshots(
    args: DescribeClusterSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterSubnetGroupsCommand}
   */
  describeClusterSubnetGroups(): Promise<DescribeClusterSubnetGroupsCommandOutput>;
  describeClusterSubnetGroups(
    args: DescribeClusterSubnetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterSubnetGroupsCommandOutput>;
  describeClusterSubnetGroups(
    args: DescribeClusterSubnetGroupsCommandInput,
    cb: (err: any, data?: DescribeClusterSubnetGroupsCommandOutput) => void
  ): void;
  describeClusterSubnetGroups(
    args: DescribeClusterSubnetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterSubnetGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterTracksCommand}
   */
  describeClusterTracks(): Promise<DescribeClusterTracksCommandOutput>;
  describeClusterTracks(
    args: DescribeClusterTracksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterTracksCommandOutput>;
  describeClusterTracks(
    args: DescribeClusterTracksCommandInput,
    cb: (err: any, data?: DescribeClusterTracksCommandOutput) => void
  ): void;
  describeClusterTracks(
    args: DescribeClusterTracksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterTracksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterVersionsCommand}
   */
  describeClusterVersions(): Promise<DescribeClusterVersionsCommandOutput>;
  describeClusterVersions(
    args: DescribeClusterVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterVersionsCommandOutput>;
  describeClusterVersions(
    args: DescribeClusterVersionsCommandInput,
    cb: (err: any, data?: DescribeClusterVersionsCommandOutput) => void
  ): void;
  describeClusterVersions(
    args: DescribeClusterVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCustomDomainAssociationsCommand}
   */
  describeCustomDomainAssociations(): Promise<DescribeCustomDomainAssociationsCommandOutput>;
  describeCustomDomainAssociations(
    args: DescribeCustomDomainAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCustomDomainAssociationsCommandOutput>;
  describeCustomDomainAssociations(
    args: DescribeCustomDomainAssociationsCommandInput,
    cb: (err: any, data?: DescribeCustomDomainAssociationsCommandOutput) => void
  ): void;
  describeCustomDomainAssociations(
    args: DescribeCustomDomainAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCustomDomainAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataSharesCommand}
   */
  describeDataShares(): Promise<DescribeDataSharesCommandOutput>;
  describeDataShares(
    args: DescribeDataSharesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataSharesCommandOutput>;
  describeDataShares(
    args: DescribeDataSharesCommandInput,
    cb: (err: any, data?: DescribeDataSharesCommandOutput) => void
  ): void;
  describeDataShares(
    args: DescribeDataSharesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataSharesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataSharesForConsumerCommand}
   */
  describeDataSharesForConsumer(): Promise<DescribeDataSharesForConsumerCommandOutput>;
  describeDataSharesForConsumer(
    args: DescribeDataSharesForConsumerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataSharesForConsumerCommandOutput>;
  describeDataSharesForConsumer(
    args: DescribeDataSharesForConsumerCommandInput,
    cb: (err: any, data?: DescribeDataSharesForConsumerCommandOutput) => void
  ): void;
  describeDataSharesForConsumer(
    args: DescribeDataSharesForConsumerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataSharesForConsumerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataSharesForProducerCommand}
   */
  describeDataSharesForProducer(): Promise<DescribeDataSharesForProducerCommandOutput>;
  describeDataSharesForProducer(
    args: DescribeDataSharesForProducerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataSharesForProducerCommandOutput>;
  describeDataSharesForProducer(
    args: DescribeDataSharesForProducerCommandInput,
    cb: (err: any, data?: DescribeDataSharesForProducerCommandOutput) => void
  ): void;
  describeDataSharesForProducer(
    args: DescribeDataSharesForProducerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataSharesForProducerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDefaultClusterParametersCommand}
   */
  describeDefaultClusterParameters(
    args: DescribeDefaultClusterParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDefaultClusterParametersCommandOutput>;
  describeDefaultClusterParameters(
    args: DescribeDefaultClusterParametersCommandInput,
    cb: (err: any, data?: DescribeDefaultClusterParametersCommandOutput) => void
  ): void;
  describeDefaultClusterParameters(
    args: DescribeDefaultClusterParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDefaultClusterParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEndpointAccessCommand}
   */
  describeEndpointAccess(): Promise<DescribeEndpointAccessCommandOutput>;
  describeEndpointAccess(
    args: DescribeEndpointAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEndpointAccessCommandOutput>;
  describeEndpointAccess(
    args: DescribeEndpointAccessCommandInput,
    cb: (err: any, data?: DescribeEndpointAccessCommandOutput) => void
  ): void;
  describeEndpointAccess(
    args: DescribeEndpointAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEndpointAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEndpointAuthorizationCommand}
   */
  describeEndpointAuthorization(): Promise<DescribeEndpointAuthorizationCommandOutput>;
  describeEndpointAuthorization(
    args: DescribeEndpointAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEndpointAuthorizationCommandOutput>;
  describeEndpointAuthorization(
    args: DescribeEndpointAuthorizationCommandInput,
    cb: (err: any, data?: DescribeEndpointAuthorizationCommandOutput) => void
  ): void;
  describeEndpointAuthorization(
    args: DescribeEndpointAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEndpointAuthorizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventCategoriesCommand}
   */
  describeEventCategories(): Promise<DescribeEventCategoriesCommandOutput>;
  describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventCategoriesCommandOutput>;
  describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void
  ): void;
  describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventsCommand}
   */
  describeEvents(): Promise<DescribeEventsCommandOutput>;
  describeEvents(
    args: DescribeEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventsCommandOutput>;
  describeEvents(
    args: DescribeEventsCommandInput,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;
  describeEvents(
    args: DescribeEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventSubscriptionsCommand}
   */
  describeEventSubscriptions(): Promise<DescribeEventSubscriptionsCommandOutput>;
  describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventSubscriptionsCommandOutput>;
  describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void
  ): void;
  describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeHsmClientCertificatesCommand}
   */
  describeHsmClientCertificates(): Promise<DescribeHsmClientCertificatesCommandOutput>;
  describeHsmClientCertificates(
    args: DescribeHsmClientCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHsmClientCertificatesCommandOutput>;
  describeHsmClientCertificates(
    args: DescribeHsmClientCertificatesCommandInput,
    cb: (err: any, data?: DescribeHsmClientCertificatesCommandOutput) => void
  ): void;
  describeHsmClientCertificates(
    args: DescribeHsmClientCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHsmClientCertificatesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeHsmConfigurationsCommand}
   */
  describeHsmConfigurations(): Promise<DescribeHsmConfigurationsCommandOutput>;
  describeHsmConfigurations(
    args: DescribeHsmConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHsmConfigurationsCommandOutput>;
  describeHsmConfigurations(
    args: DescribeHsmConfigurationsCommandInput,
    cb: (err: any, data?: DescribeHsmConfigurationsCommandOutput) => void
  ): void;
  describeHsmConfigurations(
    args: DescribeHsmConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHsmConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInboundIntegrationsCommand}
   */
  describeInboundIntegrations(): Promise<DescribeInboundIntegrationsCommandOutput>;
  describeInboundIntegrations(
    args: DescribeInboundIntegrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInboundIntegrationsCommandOutput>;
  describeInboundIntegrations(
    args: DescribeInboundIntegrationsCommandInput,
    cb: (err: any, data?: DescribeInboundIntegrationsCommandOutput) => void
  ): void;
  describeInboundIntegrations(
    args: DescribeInboundIntegrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInboundIntegrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIntegrationsCommand}
   */
  describeIntegrations(): Promise<DescribeIntegrationsCommandOutput>;
  describeIntegrations(
    args: DescribeIntegrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIntegrationsCommandOutput>;
  describeIntegrations(
    args: DescribeIntegrationsCommandInput,
    cb: (err: any, data?: DescribeIntegrationsCommandOutput) => void
  ): void;
  describeIntegrations(
    args: DescribeIntegrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIntegrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLoggingStatusCommand}
   */
  describeLoggingStatus(
    args: DescribeLoggingStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLoggingStatusCommandOutput>;
  describeLoggingStatus(
    args: DescribeLoggingStatusCommandInput,
    cb: (err: any, data?: DescribeLoggingStatusCommandOutput) => void
  ): void;
  describeLoggingStatus(
    args: DescribeLoggingStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLoggingStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNodeConfigurationOptionsCommand}
   */
  describeNodeConfigurationOptions(
    args: DescribeNodeConfigurationOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNodeConfigurationOptionsCommandOutput>;
  describeNodeConfigurationOptions(
    args: DescribeNodeConfigurationOptionsCommandInput,
    cb: (err: any, data?: DescribeNodeConfigurationOptionsCommandOutput) => void
  ): void;
  describeNodeConfigurationOptions(
    args: DescribeNodeConfigurationOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNodeConfigurationOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOrderableClusterOptionsCommand}
   */
  describeOrderableClusterOptions(): Promise<DescribeOrderableClusterOptionsCommandOutput>;
  describeOrderableClusterOptions(
    args: DescribeOrderableClusterOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrderableClusterOptionsCommandOutput>;
  describeOrderableClusterOptions(
    args: DescribeOrderableClusterOptionsCommandInput,
    cb: (err: any, data?: DescribeOrderableClusterOptionsCommandOutput) => void
  ): void;
  describeOrderableClusterOptions(
    args: DescribeOrderableClusterOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrderableClusterOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePartnersCommand}
   */
  describePartners(
    args: DescribePartnersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePartnersCommandOutput>;
  describePartners(
    args: DescribePartnersCommandInput,
    cb: (err: any, data?: DescribePartnersCommandOutput) => void
  ): void;
  describePartners(
    args: DescribePartnersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePartnersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRedshiftIdcApplicationsCommand}
   */
  describeRedshiftIdcApplications(): Promise<DescribeRedshiftIdcApplicationsCommandOutput>;
  describeRedshiftIdcApplications(
    args: DescribeRedshiftIdcApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRedshiftIdcApplicationsCommandOutput>;
  describeRedshiftIdcApplications(
    args: DescribeRedshiftIdcApplicationsCommandInput,
    cb: (err: any, data?: DescribeRedshiftIdcApplicationsCommandOutput) => void
  ): void;
  describeRedshiftIdcApplications(
    args: DescribeRedshiftIdcApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRedshiftIdcApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReservedNodeExchangeStatusCommand}
   */
  describeReservedNodeExchangeStatus(): Promise<DescribeReservedNodeExchangeStatusCommandOutput>;
  describeReservedNodeExchangeStatus(
    args: DescribeReservedNodeExchangeStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedNodeExchangeStatusCommandOutput>;
  describeReservedNodeExchangeStatus(
    args: DescribeReservedNodeExchangeStatusCommandInput,
    cb: (err: any, data?: DescribeReservedNodeExchangeStatusCommandOutput) => void
  ): void;
  describeReservedNodeExchangeStatus(
    args: DescribeReservedNodeExchangeStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedNodeExchangeStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReservedNodeOfferingsCommand}
   */
  describeReservedNodeOfferings(): Promise<DescribeReservedNodeOfferingsCommandOutput>;
  describeReservedNodeOfferings(
    args: DescribeReservedNodeOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedNodeOfferingsCommandOutput>;
  describeReservedNodeOfferings(
    args: DescribeReservedNodeOfferingsCommandInput,
    cb: (err: any, data?: DescribeReservedNodeOfferingsCommandOutput) => void
  ): void;
  describeReservedNodeOfferings(
    args: DescribeReservedNodeOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedNodeOfferingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReservedNodesCommand}
   */
  describeReservedNodes(): Promise<DescribeReservedNodesCommandOutput>;
  describeReservedNodes(
    args: DescribeReservedNodesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedNodesCommandOutput>;
  describeReservedNodes(
    args: DescribeReservedNodesCommandInput,
    cb: (err: any, data?: DescribeReservedNodesCommandOutput) => void
  ): void;
  describeReservedNodes(
    args: DescribeReservedNodesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedNodesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeResizeCommand}
   */
  describeResize(
    args: DescribeResizeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeResizeCommandOutput>;
  describeResize(
    args: DescribeResizeCommandInput,
    cb: (err: any, data?: DescribeResizeCommandOutput) => void
  ): void;
  describeResize(
    args: DescribeResizeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResizeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScheduledActionsCommand}
   */
  describeScheduledActions(): Promise<DescribeScheduledActionsCommandOutput>;
  describeScheduledActions(
    args: DescribeScheduledActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScheduledActionsCommandOutput>;
  describeScheduledActions(
    args: DescribeScheduledActionsCommandInput,
    cb: (err: any, data?: DescribeScheduledActionsCommandOutput) => void
  ): void;
  describeScheduledActions(
    args: DescribeScheduledActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScheduledActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSnapshotCopyGrantsCommand}
   */
  describeSnapshotCopyGrants(): Promise<DescribeSnapshotCopyGrantsCommandOutput>;
  describeSnapshotCopyGrants(
    args: DescribeSnapshotCopyGrantsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSnapshotCopyGrantsCommandOutput>;
  describeSnapshotCopyGrants(
    args: DescribeSnapshotCopyGrantsCommandInput,
    cb: (err: any, data?: DescribeSnapshotCopyGrantsCommandOutput) => void
  ): void;
  describeSnapshotCopyGrants(
    args: DescribeSnapshotCopyGrantsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSnapshotCopyGrantsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSnapshotSchedulesCommand}
   */
  describeSnapshotSchedules(): Promise<DescribeSnapshotSchedulesCommandOutput>;
  describeSnapshotSchedules(
    args: DescribeSnapshotSchedulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSnapshotSchedulesCommandOutput>;
  describeSnapshotSchedules(
    args: DescribeSnapshotSchedulesCommandInput,
    cb: (err: any, data?: DescribeSnapshotSchedulesCommandOutput) => void
  ): void;
  describeSnapshotSchedules(
    args: DescribeSnapshotSchedulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSnapshotSchedulesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStorageCommand}
   */
  describeStorage(): Promise<DescribeStorageCommandOutput>;
  describeStorage(
    args: DescribeStorageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStorageCommandOutput>;
  describeStorage(
    args: DescribeStorageCommandInput,
    cb: (err: any, data?: DescribeStorageCommandOutput) => void
  ): void;
  describeStorage(
    args: DescribeStorageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStorageCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTableRestoreStatusCommand}
   */
  describeTableRestoreStatus(): Promise<DescribeTableRestoreStatusCommandOutput>;
  describeTableRestoreStatus(
    args: DescribeTableRestoreStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTableRestoreStatusCommandOutput>;
  describeTableRestoreStatus(
    args: DescribeTableRestoreStatusCommandInput,
    cb: (err: any, data?: DescribeTableRestoreStatusCommandOutput) => void
  ): void;
  describeTableRestoreStatus(
    args: DescribeTableRestoreStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTableRestoreStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTagsCommand}
   */
  describeTags(): Promise<DescribeTagsCommandOutput>;
  describeTags(
    args: DescribeTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTagsCommandOutput>;
  describeTags(
    args: DescribeTagsCommandInput,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;
  describeTags(
    args: DescribeTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUsageLimitsCommand}
   */
  describeUsageLimits(): Promise<DescribeUsageLimitsCommandOutput>;
  describeUsageLimits(
    args: DescribeUsageLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUsageLimitsCommandOutput>;
  describeUsageLimits(
    args: DescribeUsageLimitsCommandInput,
    cb: (err: any, data?: DescribeUsageLimitsCommandOutput) => void
  ): void;
  describeUsageLimits(
    args: DescribeUsageLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUsageLimitsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableLoggingCommand}
   */
  disableLogging(
    args: DisableLoggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableLoggingCommandOutput>;
  disableLogging(
    args: DisableLoggingCommandInput,
    cb: (err: any, data?: DisableLoggingCommandOutput) => void
  ): void;
  disableLogging(
    args: DisableLoggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableLoggingCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableSnapshotCopyCommand}
   */
  disableSnapshotCopy(
    args: DisableSnapshotCopyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableSnapshotCopyCommandOutput>;
  disableSnapshotCopy(
    args: DisableSnapshotCopyCommandInput,
    cb: (err: any, data?: DisableSnapshotCopyCommandOutput) => void
  ): void;
  disableSnapshotCopy(
    args: DisableSnapshotCopyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableSnapshotCopyCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateDataShareConsumerCommand}
   */
  disassociateDataShareConsumer(
    args: DisassociateDataShareConsumerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateDataShareConsumerCommandOutput>;
  disassociateDataShareConsumer(
    args: DisassociateDataShareConsumerCommandInput,
    cb: (err: any, data?: DisassociateDataShareConsumerCommandOutput) => void
  ): void;
  disassociateDataShareConsumer(
    args: DisassociateDataShareConsumerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateDataShareConsumerCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableLoggingCommand}
   */
  enableLogging(
    args: EnableLoggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableLoggingCommandOutput>;
  enableLogging(
    args: EnableLoggingCommandInput,
    cb: (err: any, data?: EnableLoggingCommandOutput) => void
  ): void;
  enableLogging(
    args: EnableLoggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableLoggingCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableSnapshotCopyCommand}
   */
  enableSnapshotCopy(
    args: EnableSnapshotCopyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableSnapshotCopyCommandOutput>;
  enableSnapshotCopy(
    args: EnableSnapshotCopyCommandInput,
    cb: (err: any, data?: EnableSnapshotCopyCommandOutput) => void
  ): void;
  enableSnapshotCopy(
    args: EnableSnapshotCopyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableSnapshotCopyCommandOutput) => void
  ): void;

  /**
   * @see {@link FailoverPrimaryComputeCommand}
   */
  failoverPrimaryCompute(
    args: FailoverPrimaryComputeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FailoverPrimaryComputeCommandOutput>;
  failoverPrimaryCompute(
    args: FailoverPrimaryComputeCommandInput,
    cb: (err: any, data?: FailoverPrimaryComputeCommandOutput) => void
  ): void;
  failoverPrimaryCompute(
    args: FailoverPrimaryComputeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FailoverPrimaryComputeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetClusterCredentialsCommand}
   */
  getClusterCredentials(
    args: GetClusterCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClusterCredentialsCommandOutput>;
  getClusterCredentials(
    args: GetClusterCredentialsCommandInput,
    cb: (err: any, data?: GetClusterCredentialsCommandOutput) => void
  ): void;
  getClusterCredentials(
    args: GetClusterCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClusterCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetClusterCredentialsWithIAMCommand}
   */
  getClusterCredentialsWithIAM(): Promise<GetClusterCredentialsWithIAMCommandOutput>;
  getClusterCredentialsWithIAM(
    args: GetClusterCredentialsWithIAMCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClusterCredentialsWithIAMCommandOutput>;
  getClusterCredentialsWithIAM(
    args: GetClusterCredentialsWithIAMCommandInput,
    cb: (err: any, data?: GetClusterCredentialsWithIAMCommandOutput) => void
  ): void;
  getClusterCredentialsWithIAM(
    args: GetClusterCredentialsWithIAMCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClusterCredentialsWithIAMCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdentityCenterAuthTokenCommand}
   */
  getIdentityCenterAuthToken(
    args: GetIdentityCenterAuthTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIdentityCenterAuthTokenCommandOutput>;
  getIdentityCenterAuthToken(
    args: GetIdentityCenterAuthTokenCommandInput,
    cb: (err: any, data?: GetIdentityCenterAuthTokenCommandOutput) => void
  ): void;
  getIdentityCenterAuthToken(
    args: GetIdentityCenterAuthTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdentityCenterAuthTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReservedNodeExchangeConfigurationOptionsCommand}
   */
  getReservedNodeExchangeConfigurationOptions(
    args: GetReservedNodeExchangeConfigurationOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReservedNodeExchangeConfigurationOptionsCommandOutput>;
  getReservedNodeExchangeConfigurationOptions(
    args: GetReservedNodeExchangeConfigurationOptionsCommandInput,
    cb: (err: any, data?: GetReservedNodeExchangeConfigurationOptionsCommandOutput) => void
  ): void;
  getReservedNodeExchangeConfigurationOptions(
    args: GetReservedNodeExchangeConfigurationOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReservedNodeExchangeConfigurationOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReservedNodeExchangeOfferingsCommand}
   */
  getReservedNodeExchangeOfferings(
    args: GetReservedNodeExchangeOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReservedNodeExchangeOfferingsCommandOutput>;
  getReservedNodeExchangeOfferings(
    args: GetReservedNodeExchangeOfferingsCommandInput,
    cb: (err: any, data?: GetReservedNodeExchangeOfferingsCommandOutput) => void
  ): void;
  getReservedNodeExchangeOfferings(
    args: GetReservedNodeExchangeOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReservedNodeExchangeOfferingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecommendationsCommand}
   */
  listRecommendations(): Promise<ListRecommendationsCommandOutput>;
  listRecommendations(
    args: ListRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecommendationsCommandOutput>;
  listRecommendations(
    args: ListRecommendationsCommandInput,
    cb: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): void;
  listRecommendations(
    args: ListRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyAquaConfigurationCommand}
   */
  modifyAquaConfiguration(
    args: ModifyAquaConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyAquaConfigurationCommandOutput>;
  modifyAquaConfiguration(
    args: ModifyAquaConfigurationCommandInput,
    cb: (err: any, data?: ModifyAquaConfigurationCommandOutput) => void
  ): void;
  modifyAquaConfiguration(
    args: ModifyAquaConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyAquaConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyAuthenticationProfileCommand}
   */
  modifyAuthenticationProfile(
    args: ModifyAuthenticationProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyAuthenticationProfileCommandOutput>;
  modifyAuthenticationProfile(
    args: ModifyAuthenticationProfileCommandInput,
    cb: (err: any, data?: ModifyAuthenticationProfileCommandOutput) => void
  ): void;
  modifyAuthenticationProfile(
    args: ModifyAuthenticationProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyAuthenticationProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyClusterCommand}
   */
  modifyCluster(
    args: ModifyClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyClusterCommandOutput>;
  modifyCluster(
    args: ModifyClusterCommandInput,
    cb: (err: any, data?: ModifyClusterCommandOutput) => void
  ): void;
  modifyCluster(
    args: ModifyClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyClusterDbRevisionCommand}
   */
  modifyClusterDbRevision(
    args: ModifyClusterDbRevisionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyClusterDbRevisionCommandOutput>;
  modifyClusterDbRevision(
    args: ModifyClusterDbRevisionCommandInput,
    cb: (err: any, data?: ModifyClusterDbRevisionCommandOutput) => void
  ): void;
  modifyClusterDbRevision(
    args: ModifyClusterDbRevisionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyClusterDbRevisionCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyClusterIamRolesCommand}
   */
  modifyClusterIamRoles(
    args: ModifyClusterIamRolesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyClusterIamRolesCommandOutput>;
  modifyClusterIamRoles(
    args: ModifyClusterIamRolesCommandInput,
    cb: (err: any, data?: ModifyClusterIamRolesCommandOutput) => void
  ): void;
  modifyClusterIamRoles(
    args: ModifyClusterIamRolesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyClusterIamRolesCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyClusterMaintenanceCommand}
   */
  modifyClusterMaintenance(
    args: ModifyClusterMaintenanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyClusterMaintenanceCommandOutput>;
  modifyClusterMaintenance(
    args: ModifyClusterMaintenanceCommandInput,
    cb: (err: any, data?: ModifyClusterMaintenanceCommandOutput) => void
  ): void;
  modifyClusterMaintenance(
    args: ModifyClusterMaintenanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyClusterMaintenanceCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyClusterParameterGroupCommand}
   */
  modifyClusterParameterGroup(
    args: ModifyClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyClusterParameterGroupCommandOutput>;
  modifyClusterParameterGroup(
    args: ModifyClusterParameterGroupCommandInput,
    cb: (err: any, data?: ModifyClusterParameterGroupCommandOutput) => void
  ): void;
  modifyClusterParameterGroup(
    args: ModifyClusterParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyClusterParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyClusterSnapshotCommand}
   */
  modifyClusterSnapshot(
    args: ModifyClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyClusterSnapshotCommandOutput>;
  modifyClusterSnapshot(
    args: ModifyClusterSnapshotCommandInput,
    cb: (err: any, data?: ModifyClusterSnapshotCommandOutput) => void
  ): void;
  modifyClusterSnapshot(
    args: ModifyClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyClusterSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyClusterSnapshotScheduleCommand}
   */
  modifyClusterSnapshotSchedule(
    args: ModifyClusterSnapshotScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyClusterSnapshotScheduleCommandOutput>;
  modifyClusterSnapshotSchedule(
    args: ModifyClusterSnapshotScheduleCommandInput,
    cb: (err: any, data?: ModifyClusterSnapshotScheduleCommandOutput) => void
  ): void;
  modifyClusterSnapshotSchedule(
    args: ModifyClusterSnapshotScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyClusterSnapshotScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyClusterSubnetGroupCommand}
   */
  modifyClusterSubnetGroup(
    args: ModifyClusterSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyClusterSubnetGroupCommandOutput>;
  modifyClusterSubnetGroup(
    args: ModifyClusterSubnetGroupCommandInput,
    cb: (err: any, data?: ModifyClusterSubnetGroupCommandOutput) => void
  ): void;
  modifyClusterSubnetGroup(
    args: ModifyClusterSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyClusterSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyCustomDomainAssociationCommand}
   */
  modifyCustomDomainAssociation(
    args: ModifyCustomDomainAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyCustomDomainAssociationCommandOutput>;
  modifyCustomDomainAssociation(
    args: ModifyCustomDomainAssociationCommandInput,
    cb: (err: any, data?: ModifyCustomDomainAssociationCommandOutput) => void
  ): void;
  modifyCustomDomainAssociation(
    args: ModifyCustomDomainAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyCustomDomainAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyEndpointAccessCommand}
   */
  modifyEndpointAccess(
    args: ModifyEndpointAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyEndpointAccessCommandOutput>;
  modifyEndpointAccess(
    args: ModifyEndpointAccessCommandInput,
    cb: (err: any, data?: ModifyEndpointAccessCommandOutput) => void
  ): void;
  modifyEndpointAccess(
    args: ModifyEndpointAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyEndpointAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyEventSubscriptionCommand}
   */
  modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyEventSubscriptionCommandOutput>;
  modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void
  ): void;
  modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyIntegrationCommand}
   */
  modifyIntegration(
    args: ModifyIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyIntegrationCommandOutput>;
  modifyIntegration(
    args: ModifyIntegrationCommandInput,
    cb: (err: any, data?: ModifyIntegrationCommandOutput) => void
  ): void;
  modifyIntegration(
    args: ModifyIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyLakehouseConfigurationCommand}
   */
  modifyLakehouseConfiguration(
    args: ModifyLakehouseConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyLakehouseConfigurationCommandOutput>;
  modifyLakehouseConfiguration(
    args: ModifyLakehouseConfigurationCommandInput,
    cb: (err: any, data?: ModifyLakehouseConfigurationCommandOutput) => void
  ): void;
  modifyLakehouseConfiguration(
    args: ModifyLakehouseConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyLakehouseConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyRedshiftIdcApplicationCommand}
   */
  modifyRedshiftIdcApplication(
    args: ModifyRedshiftIdcApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyRedshiftIdcApplicationCommandOutput>;
  modifyRedshiftIdcApplication(
    args: ModifyRedshiftIdcApplicationCommandInput,
    cb: (err: any, data?: ModifyRedshiftIdcApplicationCommandOutput) => void
  ): void;
  modifyRedshiftIdcApplication(
    args: ModifyRedshiftIdcApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyRedshiftIdcApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyScheduledActionCommand}
   */
  modifyScheduledAction(
    args: ModifyScheduledActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyScheduledActionCommandOutput>;
  modifyScheduledAction(
    args: ModifyScheduledActionCommandInput,
    cb: (err: any, data?: ModifyScheduledActionCommandOutput) => void
  ): void;
  modifyScheduledAction(
    args: ModifyScheduledActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyScheduledActionCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifySnapshotCopyRetentionPeriodCommand}
   */
  modifySnapshotCopyRetentionPeriod(
    args: ModifySnapshotCopyRetentionPeriodCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifySnapshotCopyRetentionPeriodCommandOutput>;
  modifySnapshotCopyRetentionPeriod(
    args: ModifySnapshotCopyRetentionPeriodCommandInput,
    cb: (err: any, data?: ModifySnapshotCopyRetentionPeriodCommandOutput) => void
  ): void;
  modifySnapshotCopyRetentionPeriod(
    args: ModifySnapshotCopyRetentionPeriodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifySnapshotCopyRetentionPeriodCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifySnapshotScheduleCommand}
   */
  modifySnapshotSchedule(
    args: ModifySnapshotScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifySnapshotScheduleCommandOutput>;
  modifySnapshotSchedule(
    args: ModifySnapshotScheduleCommandInput,
    cb: (err: any, data?: ModifySnapshotScheduleCommandOutput) => void
  ): void;
  modifySnapshotSchedule(
    args: ModifySnapshotScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifySnapshotScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyUsageLimitCommand}
   */
  modifyUsageLimit(
    args: ModifyUsageLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyUsageLimitCommandOutput>;
  modifyUsageLimit(
    args: ModifyUsageLimitCommandInput,
    cb: (err: any, data?: ModifyUsageLimitCommandOutput) => void
  ): void;
  modifyUsageLimit(
    args: ModifyUsageLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyUsageLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link PauseClusterCommand}
   */
  pauseCluster(
    args: PauseClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PauseClusterCommandOutput>;
  pauseCluster(
    args: PauseClusterCommandInput,
    cb: (err: any, data?: PauseClusterCommandOutput) => void
  ): void;
  pauseCluster(
    args: PauseClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PauseClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link PurchaseReservedNodeOfferingCommand}
   */
  purchaseReservedNodeOffering(
    args: PurchaseReservedNodeOfferingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PurchaseReservedNodeOfferingCommandOutput>;
  purchaseReservedNodeOffering(
    args: PurchaseReservedNodeOfferingCommandInput,
    cb: (err: any, data?: PurchaseReservedNodeOfferingCommandOutput) => void
  ): void;
  purchaseReservedNodeOffering(
    args: PurchaseReservedNodeOfferingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PurchaseReservedNodeOfferingCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RebootClusterCommand}
   */
  rebootCluster(
    args: RebootClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootClusterCommandOutput>;
  rebootCluster(
    args: RebootClusterCommandInput,
    cb: (err: any, data?: RebootClusterCommandOutput) => void
  ): void;
  rebootCluster(
    args: RebootClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterNamespaceCommand}
   */
  registerNamespace(
    args: RegisterNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterNamespaceCommandOutput>;
  registerNamespace(
    args: RegisterNamespaceCommandInput,
    cb: (err: any, data?: RegisterNamespaceCommandOutput) => void
  ): void;
  registerNamespace(
    args: RegisterNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectDataShareCommand}
   */
  rejectDataShare(
    args: RejectDataShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectDataShareCommandOutput>;
  rejectDataShare(
    args: RejectDataShareCommandInput,
    cb: (err: any, data?: RejectDataShareCommandOutput) => void
  ): void;
  rejectDataShare(
    args: RejectDataShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectDataShareCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetClusterParameterGroupCommand}
   */
  resetClusterParameterGroup(
    args: ResetClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetClusterParameterGroupCommandOutput>;
  resetClusterParameterGroup(
    args: ResetClusterParameterGroupCommandInput,
    cb: (err: any, data?: ResetClusterParameterGroupCommandOutput) => void
  ): void;
  resetClusterParameterGroup(
    args: ResetClusterParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetClusterParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ResizeClusterCommand}
   */
  resizeCluster(
    args: ResizeClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResizeClusterCommandOutput>;
  resizeCluster(
    args: ResizeClusterCommandInput,
    cb: (err: any, data?: ResizeClusterCommandOutput) => void
  ): void;
  resizeCluster(
    args: ResizeClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResizeClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreFromClusterSnapshotCommand}
   */
  restoreFromClusterSnapshot(
    args: RestoreFromClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreFromClusterSnapshotCommandOutput>;
  restoreFromClusterSnapshot(
    args: RestoreFromClusterSnapshotCommandInput,
    cb: (err: any, data?: RestoreFromClusterSnapshotCommandOutput) => void
  ): void;
  restoreFromClusterSnapshot(
    args: RestoreFromClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreFromClusterSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreTableFromClusterSnapshotCommand}
   */
  restoreTableFromClusterSnapshot(
    args: RestoreTableFromClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreTableFromClusterSnapshotCommandOutput>;
  restoreTableFromClusterSnapshot(
    args: RestoreTableFromClusterSnapshotCommandInput,
    cb: (err: any, data?: RestoreTableFromClusterSnapshotCommandOutput) => void
  ): void;
  restoreTableFromClusterSnapshot(
    args: RestoreTableFromClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreTableFromClusterSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link ResumeClusterCommand}
   */
  resumeCluster(
    args: ResumeClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResumeClusterCommandOutput>;
  resumeCluster(
    args: ResumeClusterCommandInput,
    cb: (err: any, data?: ResumeClusterCommandOutput) => void
  ): void;
  resumeCluster(
    args: ResumeClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResumeClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeClusterSecurityGroupIngressCommand}
   */
  revokeClusterSecurityGroupIngress(
    args: RevokeClusterSecurityGroupIngressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeClusterSecurityGroupIngressCommandOutput>;
  revokeClusterSecurityGroupIngress(
    args: RevokeClusterSecurityGroupIngressCommandInput,
    cb: (err: any, data?: RevokeClusterSecurityGroupIngressCommandOutput) => void
  ): void;
  revokeClusterSecurityGroupIngress(
    args: RevokeClusterSecurityGroupIngressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeClusterSecurityGroupIngressCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeEndpointAccessCommand}
   */
  revokeEndpointAccess(): Promise<RevokeEndpointAccessCommandOutput>;
  revokeEndpointAccess(
    args: RevokeEndpointAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeEndpointAccessCommandOutput>;
  revokeEndpointAccess(
    args: RevokeEndpointAccessCommandInput,
    cb: (err: any, data?: RevokeEndpointAccessCommandOutput) => void
  ): void;
  revokeEndpointAccess(
    args: RevokeEndpointAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeEndpointAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeSnapshotAccessCommand}
   */
  revokeSnapshotAccess(
    args: RevokeSnapshotAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeSnapshotAccessCommandOutput>;
  revokeSnapshotAccess(
    args: RevokeSnapshotAccessCommandInput,
    cb: (err: any, data?: RevokeSnapshotAccessCommandOutput) => void
  ): void;
  revokeSnapshotAccess(
    args: RevokeSnapshotAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeSnapshotAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link RotateEncryptionKeyCommand}
   */
  rotateEncryptionKey(
    args: RotateEncryptionKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RotateEncryptionKeyCommandOutput>;
  rotateEncryptionKey(
    args: RotateEncryptionKeyCommandInput,
    cb: (err: any, data?: RotateEncryptionKeyCommandOutput) => void
  ): void;
  rotateEncryptionKey(
    args: RotateEncryptionKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RotateEncryptionKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePartnerStatusCommand}
   */
  updatePartnerStatus(
    args: UpdatePartnerStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePartnerStatusCommandOutput>;
  updatePartnerStatus(
    args: UpdatePartnerStatusCommandInput,
    cb: (err: any, data?: UpdatePartnerStatusCommandOutput) => void
  ): void;
  updatePartnerStatus(
    args: UpdatePartnerStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePartnerStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterDbRevisionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeClusterDbRevisionsCommandOutput}.
   */
  paginateDescribeClusterDbRevisions(
    args?: DescribeClusterDbRevisionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeClusterDbRevisionsCommandOutput>;

  /**
   * @see {@link DescribeClusterParameterGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeClusterParameterGroupsCommandOutput}.
   */
  paginateDescribeClusterParameterGroups(
    args?: DescribeClusterParameterGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeClusterParameterGroupsCommandOutput>;

  /**
   * @see {@link DescribeClusterParametersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeClusterParametersCommandOutput}.
   */
  paginateDescribeClusterParameters(
    args: DescribeClusterParametersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeClusterParametersCommandOutput>;

  /**
   * @see {@link DescribeClustersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeClustersCommandOutput}.
   */
  paginateDescribeClusters(
    args?: DescribeClustersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeClustersCommandOutput>;

  /**
   * @see {@link DescribeClusterSecurityGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeClusterSecurityGroupsCommandOutput}.
   */
  paginateDescribeClusterSecurityGroups(
    args?: DescribeClusterSecurityGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeClusterSecurityGroupsCommandOutput>;

  /**
   * @see {@link DescribeClusterSnapshotsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeClusterSnapshotsCommandOutput}.
   */
  paginateDescribeClusterSnapshots(
    args?: DescribeClusterSnapshotsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeClusterSnapshotsCommandOutput>;

  /**
   * @see {@link DescribeClusterSubnetGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeClusterSubnetGroupsCommandOutput}.
   */
  paginateDescribeClusterSubnetGroups(
    args?: DescribeClusterSubnetGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeClusterSubnetGroupsCommandOutput>;

  /**
   * @see {@link DescribeClusterTracksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeClusterTracksCommandOutput}.
   */
  paginateDescribeClusterTracks(
    args?: DescribeClusterTracksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeClusterTracksCommandOutput>;

  /**
   * @see {@link DescribeClusterVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeClusterVersionsCommandOutput}.
   */
  paginateDescribeClusterVersions(
    args?: DescribeClusterVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeClusterVersionsCommandOutput>;

  /**
   * @see {@link DescribeCustomDomainAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeCustomDomainAssociationsCommandOutput}.
   */
  paginateDescribeCustomDomainAssociations(
    args?: DescribeCustomDomainAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeCustomDomainAssociationsCommandOutput>;

  /**
   * @see {@link DescribeDataSharesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDataSharesCommandOutput}.
   */
  paginateDescribeDataShares(
    args?: DescribeDataSharesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDataSharesCommandOutput>;

  /**
   * @see {@link DescribeDataSharesForConsumerCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDataSharesForConsumerCommandOutput}.
   */
  paginateDescribeDataSharesForConsumer(
    args?: DescribeDataSharesForConsumerCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDataSharesForConsumerCommandOutput>;

  /**
   * @see {@link DescribeDataSharesForProducerCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDataSharesForProducerCommandOutput}.
   */
  paginateDescribeDataSharesForProducer(
    args?: DescribeDataSharesForProducerCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDataSharesForProducerCommandOutput>;

  /**
   * @see {@link DescribeDefaultClusterParametersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDefaultClusterParametersCommandOutput}.
   */
  paginateDescribeDefaultClusterParameters(
    args: DescribeDefaultClusterParametersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDefaultClusterParametersCommandOutput>;

  /**
   * @see {@link DescribeEndpointAccessCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeEndpointAccessCommandOutput}.
   */
  paginateDescribeEndpointAccess(
    args?: DescribeEndpointAccessCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeEndpointAccessCommandOutput>;

  /**
   * @see {@link DescribeEndpointAuthorizationCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeEndpointAuthorizationCommandOutput}.
   */
  paginateDescribeEndpointAuthorization(
    args?: DescribeEndpointAuthorizationCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeEndpointAuthorizationCommandOutput>;

  /**
   * @see {@link DescribeEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeEventsCommandOutput}.
   */
  paginateDescribeEvents(
    args?: DescribeEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeEventsCommandOutput>;

  /**
   * @see {@link DescribeEventSubscriptionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeEventSubscriptionsCommandOutput}.
   */
  paginateDescribeEventSubscriptions(
    args?: DescribeEventSubscriptionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeEventSubscriptionsCommandOutput>;

  /**
   * @see {@link DescribeHsmClientCertificatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeHsmClientCertificatesCommandOutput}.
   */
  paginateDescribeHsmClientCertificates(
    args?: DescribeHsmClientCertificatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeHsmClientCertificatesCommandOutput>;

  /**
   * @see {@link DescribeHsmConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeHsmConfigurationsCommandOutput}.
   */
  paginateDescribeHsmConfigurations(
    args?: DescribeHsmConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeHsmConfigurationsCommandOutput>;

  /**
   * @see {@link DescribeInboundIntegrationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeInboundIntegrationsCommandOutput}.
   */
  paginateDescribeInboundIntegrations(
    args?: DescribeInboundIntegrationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeInboundIntegrationsCommandOutput>;

  /**
   * @see {@link DescribeIntegrationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeIntegrationsCommandOutput}.
   */
  paginateDescribeIntegrations(
    args?: DescribeIntegrationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeIntegrationsCommandOutput>;

  /**
   * @see {@link DescribeNodeConfigurationOptionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeNodeConfigurationOptionsCommandOutput}.
   */
  paginateDescribeNodeConfigurationOptions(
    args: DescribeNodeConfigurationOptionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeNodeConfigurationOptionsCommandOutput>;

  /**
   * @see {@link DescribeOrderableClusterOptionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeOrderableClusterOptionsCommandOutput}.
   */
  paginateDescribeOrderableClusterOptions(
    args?: DescribeOrderableClusterOptionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeOrderableClusterOptionsCommandOutput>;

  /**
   * @see {@link DescribeRedshiftIdcApplicationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeRedshiftIdcApplicationsCommandOutput}.
   */
  paginateDescribeRedshiftIdcApplications(
    args?: DescribeRedshiftIdcApplicationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeRedshiftIdcApplicationsCommandOutput>;

  /**
   * @see {@link DescribeReservedNodeExchangeStatusCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeReservedNodeExchangeStatusCommandOutput}.
   */
  paginateDescribeReservedNodeExchangeStatus(
    args?: DescribeReservedNodeExchangeStatusCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeReservedNodeExchangeStatusCommandOutput>;

  /**
   * @see {@link DescribeReservedNodeOfferingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeReservedNodeOfferingsCommandOutput}.
   */
  paginateDescribeReservedNodeOfferings(
    args?: DescribeReservedNodeOfferingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeReservedNodeOfferingsCommandOutput>;

  /**
   * @see {@link DescribeReservedNodesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeReservedNodesCommandOutput}.
   */
  paginateDescribeReservedNodes(
    args?: DescribeReservedNodesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeReservedNodesCommandOutput>;

  /**
   * @see {@link DescribeScheduledActionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeScheduledActionsCommandOutput}.
   */
  paginateDescribeScheduledActions(
    args?: DescribeScheduledActionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeScheduledActionsCommandOutput>;

  /**
   * @see {@link DescribeSnapshotCopyGrantsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeSnapshotCopyGrantsCommandOutput}.
   */
  paginateDescribeSnapshotCopyGrants(
    args?: DescribeSnapshotCopyGrantsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeSnapshotCopyGrantsCommandOutput>;

  /**
   * @see {@link DescribeSnapshotSchedulesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeSnapshotSchedulesCommandOutput}.
   */
  paginateDescribeSnapshotSchedules(
    args?: DescribeSnapshotSchedulesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeSnapshotSchedulesCommandOutput>;

  /**
   * @see {@link DescribeTableRestoreStatusCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeTableRestoreStatusCommandOutput}.
   */
  paginateDescribeTableRestoreStatus(
    args?: DescribeTableRestoreStatusCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeTableRestoreStatusCommandOutput>;

  /**
   * @see {@link DescribeTagsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeTagsCommandOutput}.
   */
  paginateDescribeTags(
    args?: DescribeTagsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeTagsCommandOutput>;

  /**
   * @see {@link DescribeUsageLimitsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeUsageLimitsCommandOutput}.
   */
  paginateDescribeUsageLimits(
    args?: DescribeUsageLimitsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeUsageLimitsCommandOutput>;

  /**
   * @see {@link GetReservedNodeExchangeConfigurationOptionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetReservedNodeExchangeConfigurationOptionsCommandOutput}.
   */
  paginateGetReservedNodeExchangeConfigurationOptions(
    args: GetReservedNodeExchangeConfigurationOptionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetReservedNodeExchangeConfigurationOptionsCommandOutput>;

  /**
   * @see {@link GetReservedNodeExchangeOfferingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetReservedNodeExchangeOfferingsCommandOutput}.
   */
  paginateGetReservedNodeExchangeOfferings(
    args: GetReservedNodeExchangeOfferingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetReservedNodeExchangeOfferingsCommandOutput>;

  /**
   * @see {@link ListRecommendationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRecommendationsCommandOutput}.
   */
  paginateListRecommendations(
    args?: ListRecommendationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRecommendationsCommandOutput>;

  /**
   * @see {@link DescribeClustersCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilClusterAvailable(
    args: DescribeClustersCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Redshift>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link DescribeClustersCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilClusterDeleted(
    args: DescribeClustersCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Redshift>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link DescribeClustersCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilClusterRestored(
    args: DescribeClustersCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Redshift>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link DescribeClusterSnapshotsCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilSnapshotAvailable(
    args: DescribeClusterSnapshotsCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Redshift>, "client">
  ): Promise<WaiterResult>;
}

/**
 * <fullname>Amazon Redshift</fullname>
 *          <p>
 *             <b>Overview</b>
 *          </p>
 *          <p>This is an interface reference for Amazon Redshift. It contains documentation for one of
 *             the programming or command line interfaces you can use to manage Amazon Redshift clusters.
 *             Note that Amazon Redshift is asynchronous, which means that some interfaces may require
 *             techniques, such as polling or asynchronous callback handlers, to determine when a
 *             command has been applied. In this reference, the parameter descriptions indicate whether
 *             a change is applied immediately, on the next instance reboot, or during the next
 *             maintenance window. For a summary of the Amazon Redshift cluster management interfaces, go to
 *                 <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/using-aws-sdk.html">Using the
 *                 Amazon Redshift Management Interfaces</a>.</p>
 *          <p>Amazon Redshift manages all the work of setting up, operating, and scaling a data
 *             warehouse: provisioning capacity, monitoring and backing up the cluster, and applying
 *             patches and upgrades to the Amazon Redshift engine. You can focus on using your data to
 *             acquire new insights for your business and customers.</p>
 *          <p>If you are a first-time user of Amazon Redshift, we recommend that you begin by reading
 *             the <a href="https://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html">Amazon Redshift Getting Started Guide</a>.</p>
 *          <p>If you are a database developer, the <a href="https://docs.aws.amazon.com/redshift/latest/dg/welcome.html">Amazon Redshift Database Developer Guide</a> explains how to design,
 *             build, query, and maintain the databases that make up your data warehouse. </p>
 * @public
 */
export class Redshift extends RedshiftClient implements Redshift {}
createAggregatedClient(commands, Redshift, { paginators, waiters });
