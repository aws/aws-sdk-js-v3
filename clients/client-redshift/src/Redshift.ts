// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

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
  type CreateQev2IdcApplicationCommandInput,
  type CreateQev2IdcApplicationCommandOutput,
  CreateQev2IdcApplicationCommand,
} from "./commands/CreateQev2IdcApplicationCommand";
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
  type DeleteQev2IdcApplicationCommandInput,
  type DeleteQev2IdcApplicationCommandOutput,
  DeleteQev2IdcApplicationCommand,
} from "./commands/DeleteQev2IdcApplicationCommand";
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
  type DescribeQev2IdcApplicationsCommandInput,
  type DescribeQev2IdcApplicationsCommandOutput,
  DescribeQev2IdcApplicationsCommand,
} from "./commands/DescribeQev2IdcApplicationsCommand";
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
  type ModifyQev2IdcApplicationCommandInput,
  type ModifyQev2IdcApplicationCommandOutput,
  ModifyQev2IdcApplicationCommand,
} from "./commands/ModifyQev2IdcApplicationCommand";
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
import type { ClusterNotFoundFault } from "./models/errors";
import type { RedshiftServiceException } from "./models/RedshiftServiceException";
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
import { paginateDescribeQev2IdcApplications } from "./pagination/DescribeQev2IdcApplicationsPaginator";
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
  CreateQev2IdcApplicationCommand,
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
  DeleteQev2IdcApplicationCommand,
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
  DescribeQev2IdcApplicationsCommand,
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
  ModifyQev2IdcApplicationCommand,
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
  paginateDescribeQev2IdcApplications,
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

/**
 * @public
 */
export interface RedshiftRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Redshift {
  /**
   * @see {@link AcceptReservedNodeExchangeCommand}
   */
  acceptReservedNodeExchange(
    args: AcceptReservedNodeExchangeCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<AcceptReservedNodeExchangeCommandOutput>;
  acceptReservedNodeExchange(
    args: AcceptReservedNodeExchangeCommandInput,
    cb: (err: any, data?: AcceptReservedNodeExchangeCommandOutput) => void
  ): void;
  acceptReservedNodeExchange(
    args: AcceptReservedNodeExchangeCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: AcceptReservedNodeExchangeCommandOutput) => void
  ): void;

  /**
   * @see {@link AddPartnerCommand}
   */
  addPartner(
    args: AddPartnerCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<AddPartnerCommandOutput>;
  addPartner(
    args: AddPartnerCommandInput,
    cb: (err: any, data?: AddPartnerCommandOutput) => void
  ): void;
  addPartner(
    args: AddPartnerCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: AddPartnerCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateDataShareConsumerCommand}
   */
  associateDataShareConsumer(
    args: AssociateDataShareConsumerCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<AssociateDataShareConsumerCommandOutput>;
  associateDataShareConsumer(
    args: AssociateDataShareConsumerCommandInput,
    cb: (err: any, data?: AssociateDataShareConsumerCommandOutput) => void
  ): void;
  associateDataShareConsumer(
    args: AssociateDataShareConsumerCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: AssociateDataShareConsumerCommandOutput) => void
  ): void;

  /**
   * @see {@link AuthorizeClusterSecurityGroupIngressCommand}
   */
  authorizeClusterSecurityGroupIngress(
    args: AuthorizeClusterSecurityGroupIngressCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<AuthorizeClusterSecurityGroupIngressCommandOutput>;
  authorizeClusterSecurityGroupIngress(
    args: AuthorizeClusterSecurityGroupIngressCommandInput,
    cb: (err: any, data?: AuthorizeClusterSecurityGroupIngressCommandOutput) => void
  ): void;
  authorizeClusterSecurityGroupIngress(
    args: AuthorizeClusterSecurityGroupIngressCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: AuthorizeClusterSecurityGroupIngressCommandOutput) => void
  ): void;

  /**
   * @see {@link AuthorizeDataShareCommand}
   */
  authorizeDataShare(
    args: AuthorizeDataShareCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<AuthorizeDataShareCommandOutput>;
  authorizeDataShare(
    args: AuthorizeDataShareCommandInput,
    cb: (err: any, data?: AuthorizeDataShareCommandOutput) => void
  ): void;
  authorizeDataShare(
    args: AuthorizeDataShareCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: AuthorizeDataShareCommandOutput) => void
  ): void;

  /**
   * @see {@link AuthorizeEndpointAccessCommand}
   */
  authorizeEndpointAccess(
    args: AuthorizeEndpointAccessCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<AuthorizeEndpointAccessCommandOutput>;
  authorizeEndpointAccess(
    args: AuthorizeEndpointAccessCommandInput,
    cb: (err: any, data?: AuthorizeEndpointAccessCommandOutput) => void
  ): void;
  authorizeEndpointAccess(
    args: AuthorizeEndpointAccessCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: AuthorizeEndpointAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link AuthorizeSnapshotAccessCommand}
   */
  authorizeSnapshotAccess(
    args: AuthorizeSnapshotAccessCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<AuthorizeSnapshotAccessCommandOutput>;
  authorizeSnapshotAccess(
    args: AuthorizeSnapshotAccessCommandInput,
    cb: (err: any, data?: AuthorizeSnapshotAccessCommandOutput) => void
  ): void;
  authorizeSnapshotAccess(
    args: AuthorizeSnapshotAccessCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: AuthorizeSnapshotAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteClusterSnapshotsCommand}
   */
  batchDeleteClusterSnapshots(
    args: BatchDeleteClusterSnapshotsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<BatchDeleteClusterSnapshotsCommandOutput>;
  batchDeleteClusterSnapshots(
    args: BatchDeleteClusterSnapshotsCommandInput,
    cb: (err: any, data?: BatchDeleteClusterSnapshotsCommandOutput) => void
  ): void;
  batchDeleteClusterSnapshots(
    args: BatchDeleteClusterSnapshotsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: BatchDeleteClusterSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchModifyClusterSnapshotsCommand}
   */
  batchModifyClusterSnapshots(
    args: BatchModifyClusterSnapshotsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<BatchModifyClusterSnapshotsCommandOutput>;
  batchModifyClusterSnapshots(
    args: BatchModifyClusterSnapshotsCommandInput,
    cb: (err: any, data?: BatchModifyClusterSnapshotsCommandOutput) => void
  ): void;
  batchModifyClusterSnapshots(
    args: BatchModifyClusterSnapshotsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: BatchModifyClusterSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelResizeCommand}
   */
  cancelResize(
    args: CancelResizeCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<CancelResizeCommandOutput>;
  cancelResize(
    args: CancelResizeCommandInput,
    cb: (err: any, data?: CancelResizeCommandOutput) => void
  ): void;
  cancelResize(
    args: CancelResizeCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: CancelResizeCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyClusterSnapshotCommand}
   */
  copyClusterSnapshot(
    args: CopyClusterSnapshotCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<CopyClusterSnapshotCommandOutput>;
  copyClusterSnapshot(
    args: CopyClusterSnapshotCommandInput,
    cb: (err: any, data?: CopyClusterSnapshotCommandOutput) => void
  ): void;
  copyClusterSnapshot(
    args: CopyClusterSnapshotCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: CopyClusterSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAuthenticationProfileCommand}
   */
  createAuthenticationProfile(
    args: CreateAuthenticationProfileCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<CreateAuthenticationProfileCommandOutput>;
  createAuthenticationProfile(
    args: CreateAuthenticationProfileCommandInput,
    cb: (err: any, data?: CreateAuthenticationProfileCommandOutput) => void
  ): void;
  createAuthenticationProfile(
    args: CreateAuthenticationProfileCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: CreateAuthenticationProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClusterCommand}
   */
  createCluster(
    args: CreateClusterCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<CreateClusterCommandOutput>;
  createCluster(
    args: CreateClusterCommandInput,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;
  createCluster(
    args: CreateClusterCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClusterParameterGroupCommand}
   */
  createClusterParameterGroup(
    args: CreateClusterParameterGroupCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<CreateClusterParameterGroupCommandOutput>;
  createClusterParameterGroup(
    args: CreateClusterParameterGroupCommandInput,
    cb: (err: any, data?: CreateClusterParameterGroupCommandOutput) => void
  ): void;
  createClusterParameterGroup(
    args: CreateClusterParameterGroupCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: CreateClusterParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClusterSecurityGroupCommand}
   */
  createClusterSecurityGroup(
    args: CreateClusterSecurityGroupCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<CreateClusterSecurityGroupCommandOutput>;
  createClusterSecurityGroup(
    args: CreateClusterSecurityGroupCommandInput,
    cb: (err: any, data?: CreateClusterSecurityGroupCommandOutput) => void
  ): void;
  createClusterSecurityGroup(
    args: CreateClusterSecurityGroupCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: CreateClusterSecurityGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClusterSnapshotCommand}
   */
  createClusterSnapshot(
    args: CreateClusterSnapshotCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<CreateClusterSnapshotCommandOutput>;
  createClusterSnapshot(
    args: CreateClusterSnapshotCommandInput,
    cb: (err: any, data?: CreateClusterSnapshotCommandOutput) => void
  ): void;
  createClusterSnapshot(
    args: CreateClusterSnapshotCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: CreateClusterSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClusterSubnetGroupCommand}
   */
  createClusterSubnetGroup(
    args: CreateClusterSubnetGroupCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<CreateClusterSubnetGroupCommandOutput>;
  createClusterSubnetGroup(
    args: CreateClusterSubnetGroupCommandInput,
    cb: (err: any, data?: CreateClusterSubnetGroupCommandOutput) => void
  ): void;
  createClusterSubnetGroup(
    args: CreateClusterSubnetGroupCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: CreateClusterSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCustomDomainAssociationCommand}
   */
  createCustomDomainAssociation(
    args: CreateCustomDomainAssociationCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<CreateCustomDomainAssociationCommandOutput>;
  createCustomDomainAssociation(
    args: CreateCustomDomainAssociationCommandInput,
    cb: (err: any, data?: CreateCustomDomainAssociationCommandOutput) => void
  ): void;
  createCustomDomainAssociation(
    args: CreateCustomDomainAssociationCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: CreateCustomDomainAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEndpointAccessCommand}
   */
  createEndpointAccess(
    args: CreateEndpointAccessCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<CreateEndpointAccessCommandOutput>;
  createEndpointAccess(
    args: CreateEndpointAccessCommandInput,
    cb: (err: any, data?: CreateEndpointAccessCommandOutput) => void
  ): void;
  createEndpointAccess(
    args: CreateEndpointAccessCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: CreateEndpointAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventSubscriptionCommand}
   */
  createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<CreateEventSubscriptionCommandOutput>;
  createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void
  ): void;
  createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateHsmClientCertificateCommand}
   */
  createHsmClientCertificate(
    args: CreateHsmClientCertificateCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<CreateHsmClientCertificateCommandOutput>;
  createHsmClientCertificate(
    args: CreateHsmClientCertificateCommandInput,
    cb: (err: any, data?: CreateHsmClientCertificateCommandOutput) => void
  ): void;
  createHsmClientCertificate(
    args: CreateHsmClientCertificateCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: CreateHsmClientCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateHsmConfigurationCommand}
   */
  createHsmConfiguration(
    args: CreateHsmConfigurationCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<CreateHsmConfigurationCommandOutput>;
  createHsmConfiguration(
    args: CreateHsmConfigurationCommandInput,
    cb: (err: any, data?: CreateHsmConfigurationCommandOutput) => void
  ): void;
  createHsmConfiguration(
    args: CreateHsmConfigurationCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: CreateHsmConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIntegrationCommand}
   */
  createIntegration(
    args: CreateIntegrationCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<CreateIntegrationCommandOutput>;
  createIntegration(
    args: CreateIntegrationCommandInput,
    cb: (err: any, data?: CreateIntegrationCommandOutput) => void
  ): void;
  createIntegration(
    args: CreateIntegrationCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: CreateIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateQev2IdcApplicationCommand}
   */
  createQev2IdcApplication(
    args: CreateQev2IdcApplicationCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<CreateQev2IdcApplicationCommandOutput>;
  createQev2IdcApplication(
    args: CreateQev2IdcApplicationCommandInput,
    cb: (err: any, data?: CreateQev2IdcApplicationCommandOutput) => void
  ): void;
  createQev2IdcApplication(
    args: CreateQev2IdcApplicationCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: CreateQev2IdcApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRedshiftIdcApplicationCommand}
   */
  createRedshiftIdcApplication(
    args: CreateRedshiftIdcApplicationCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<CreateRedshiftIdcApplicationCommandOutput>;
  createRedshiftIdcApplication(
    args: CreateRedshiftIdcApplicationCommandInput,
    cb: (err: any, data?: CreateRedshiftIdcApplicationCommandOutput) => void
  ): void;
  createRedshiftIdcApplication(
    args: CreateRedshiftIdcApplicationCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: CreateRedshiftIdcApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateScheduledActionCommand}
   */
  createScheduledAction(
    args: CreateScheduledActionCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<CreateScheduledActionCommandOutput>;
  createScheduledAction(
    args: CreateScheduledActionCommandInput,
    cb: (err: any, data?: CreateScheduledActionCommandOutput) => void
  ): void;
  createScheduledAction(
    args: CreateScheduledActionCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: CreateScheduledActionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSnapshotCopyGrantCommand}
   */
  createSnapshotCopyGrant(
    args: CreateSnapshotCopyGrantCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<CreateSnapshotCopyGrantCommandOutput>;
  createSnapshotCopyGrant(
    args: CreateSnapshotCopyGrantCommandInput,
    cb: (err: any, data?: CreateSnapshotCopyGrantCommandOutput) => void
  ): void;
  createSnapshotCopyGrant(
    args: CreateSnapshotCopyGrantCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: CreateSnapshotCopyGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSnapshotScheduleCommand}
   */
  createSnapshotSchedule(): Promise<CreateSnapshotScheduleCommandOutput>;
  createSnapshotSchedule(
    args: CreateSnapshotScheduleCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<CreateSnapshotScheduleCommandOutput>;
  createSnapshotSchedule(
    args: CreateSnapshotScheduleCommandInput,
    cb: (err: any, data?: CreateSnapshotScheduleCommandOutput) => void
  ): void;
  createSnapshotSchedule(
    args: CreateSnapshotScheduleCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: CreateSnapshotScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTagsCommand}
   */
  createTags(
    args: CreateTagsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<CreateTagsCommandOutput>;
  createTags(
    args: CreateTagsCommandInput,
    cb: (err: any, data?: CreateTagsCommandOutput) => void
  ): void;
  createTags(
    args: CreateTagsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: CreateTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUsageLimitCommand}
   */
  createUsageLimit(
    args: CreateUsageLimitCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<CreateUsageLimitCommandOutput>;
  createUsageLimit(
    args: CreateUsageLimitCommandInput,
    cb: (err: any, data?: CreateUsageLimitCommandOutput) => void
  ): void;
  createUsageLimit(
    args: CreateUsageLimitCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: CreateUsageLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link DeauthorizeDataShareCommand}
   */
  deauthorizeDataShare(
    args: DeauthorizeDataShareCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DeauthorizeDataShareCommandOutput>;
  deauthorizeDataShare(
    args: DeauthorizeDataShareCommandInput,
    cb: (err: any, data?: DeauthorizeDataShareCommandOutput) => void
  ): void;
  deauthorizeDataShare(
    args: DeauthorizeDataShareCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DeauthorizeDataShareCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAuthenticationProfileCommand}
   */
  deleteAuthenticationProfile(
    args: DeleteAuthenticationProfileCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DeleteAuthenticationProfileCommandOutput>;
  deleteAuthenticationProfile(
    args: DeleteAuthenticationProfileCommandInput,
    cb: (err: any, data?: DeleteAuthenticationProfileCommandOutput) => void
  ): void;
  deleteAuthenticationProfile(
    args: DeleteAuthenticationProfileCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DeleteAuthenticationProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClusterCommand}
   */
  deleteCluster(
    args: DeleteClusterCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DeleteClusterCommandOutput>;
  deleteCluster(
    args: DeleteClusterCommandInput,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;
  deleteCluster(
    args: DeleteClusterCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClusterParameterGroupCommand}
   */
  deleteClusterParameterGroup(
    args: DeleteClusterParameterGroupCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DeleteClusterParameterGroupCommandOutput>;
  deleteClusterParameterGroup(
    args: DeleteClusterParameterGroupCommandInput,
    cb: (err: any, data?: DeleteClusterParameterGroupCommandOutput) => void
  ): void;
  deleteClusterParameterGroup(
    args: DeleteClusterParameterGroupCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DeleteClusterParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClusterSecurityGroupCommand}
   */
  deleteClusterSecurityGroup(
    args: DeleteClusterSecurityGroupCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DeleteClusterSecurityGroupCommandOutput>;
  deleteClusterSecurityGroup(
    args: DeleteClusterSecurityGroupCommandInput,
    cb: (err: any, data?: DeleteClusterSecurityGroupCommandOutput) => void
  ): void;
  deleteClusterSecurityGroup(
    args: DeleteClusterSecurityGroupCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DeleteClusterSecurityGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClusterSnapshotCommand}
   */
  deleteClusterSnapshot(
    args: DeleteClusterSnapshotCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DeleteClusterSnapshotCommandOutput>;
  deleteClusterSnapshot(
    args: DeleteClusterSnapshotCommandInput,
    cb: (err: any, data?: DeleteClusterSnapshotCommandOutput) => void
  ): void;
  deleteClusterSnapshot(
    args: DeleteClusterSnapshotCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DeleteClusterSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClusterSubnetGroupCommand}
   */
  deleteClusterSubnetGroup(
    args: DeleteClusterSubnetGroupCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DeleteClusterSubnetGroupCommandOutput>;
  deleteClusterSubnetGroup(
    args: DeleteClusterSubnetGroupCommandInput,
    cb: (err: any, data?: DeleteClusterSubnetGroupCommandOutput) => void
  ): void;
  deleteClusterSubnetGroup(
    args: DeleteClusterSubnetGroupCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DeleteClusterSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomDomainAssociationCommand}
   */
  deleteCustomDomainAssociation(
    args: DeleteCustomDomainAssociationCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DeleteCustomDomainAssociationCommandOutput>;
  deleteCustomDomainAssociation(
    args: DeleteCustomDomainAssociationCommandInput,
    cb: (err: any, data?: DeleteCustomDomainAssociationCommandOutput) => void
  ): void;
  deleteCustomDomainAssociation(
    args: DeleteCustomDomainAssociationCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DeleteCustomDomainAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEndpointAccessCommand}
   */
  deleteEndpointAccess(
    args: DeleteEndpointAccessCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DeleteEndpointAccessCommandOutput>;
  deleteEndpointAccess(
    args: DeleteEndpointAccessCommandInput,
    cb: (err: any, data?: DeleteEndpointAccessCommandOutput) => void
  ): void;
  deleteEndpointAccess(
    args: DeleteEndpointAccessCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DeleteEndpointAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventSubscriptionCommand}
   */
  deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DeleteEventSubscriptionCommandOutput>;
  deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void
  ): void;
  deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteHsmClientCertificateCommand}
   */
  deleteHsmClientCertificate(
    args: DeleteHsmClientCertificateCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DeleteHsmClientCertificateCommandOutput>;
  deleteHsmClientCertificate(
    args: DeleteHsmClientCertificateCommandInput,
    cb: (err: any, data?: DeleteHsmClientCertificateCommandOutput) => void
  ): void;
  deleteHsmClientCertificate(
    args: DeleteHsmClientCertificateCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DeleteHsmClientCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteHsmConfigurationCommand}
   */
  deleteHsmConfiguration(
    args: DeleteHsmConfigurationCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DeleteHsmConfigurationCommandOutput>;
  deleteHsmConfiguration(
    args: DeleteHsmConfigurationCommandInput,
    cb: (err: any, data?: DeleteHsmConfigurationCommandOutput) => void
  ): void;
  deleteHsmConfiguration(
    args: DeleteHsmConfigurationCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DeleteHsmConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIntegrationCommand}
   */
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DeleteIntegrationCommandOutput>;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePartnerCommand}
   */
  deletePartner(
    args: DeletePartnerCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DeletePartnerCommandOutput>;
  deletePartner(
    args: DeletePartnerCommandInput,
    cb: (err: any, data?: DeletePartnerCommandOutput) => void
  ): void;
  deletePartner(
    args: DeletePartnerCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DeletePartnerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQev2IdcApplicationCommand}
   */
  deleteQev2IdcApplication(
    args: DeleteQev2IdcApplicationCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DeleteQev2IdcApplicationCommandOutput>;
  deleteQev2IdcApplication(
    args: DeleteQev2IdcApplicationCommandInput,
    cb: (err: any, data?: DeleteQev2IdcApplicationCommandOutput) => void
  ): void;
  deleteQev2IdcApplication(
    args: DeleteQev2IdcApplicationCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DeleteQev2IdcApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRedshiftIdcApplicationCommand}
   */
  deleteRedshiftIdcApplication(
    args: DeleteRedshiftIdcApplicationCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DeleteRedshiftIdcApplicationCommandOutput>;
  deleteRedshiftIdcApplication(
    args: DeleteRedshiftIdcApplicationCommandInput,
    cb: (err: any, data?: DeleteRedshiftIdcApplicationCommandOutput) => void
  ): void;
  deleteRedshiftIdcApplication(
    args: DeleteRedshiftIdcApplicationCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DeleteRedshiftIdcApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteScheduledActionCommand}
   */
  deleteScheduledAction(
    args: DeleteScheduledActionCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DeleteScheduledActionCommandOutput>;
  deleteScheduledAction(
    args: DeleteScheduledActionCommandInput,
    cb: (err: any, data?: DeleteScheduledActionCommandOutput) => void
  ): void;
  deleteScheduledAction(
    args: DeleteScheduledActionCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DeleteScheduledActionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSnapshotCopyGrantCommand}
   */
  deleteSnapshotCopyGrant(
    args: DeleteSnapshotCopyGrantCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DeleteSnapshotCopyGrantCommandOutput>;
  deleteSnapshotCopyGrant(
    args: DeleteSnapshotCopyGrantCommandInput,
    cb: (err: any, data?: DeleteSnapshotCopyGrantCommandOutput) => void
  ): void;
  deleteSnapshotCopyGrant(
    args: DeleteSnapshotCopyGrantCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DeleteSnapshotCopyGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSnapshotScheduleCommand}
   */
  deleteSnapshotSchedule(
    args: DeleteSnapshotScheduleCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DeleteSnapshotScheduleCommandOutput>;
  deleteSnapshotSchedule(
    args: DeleteSnapshotScheduleCommandInput,
    cb: (err: any, data?: DeleteSnapshotScheduleCommandOutput) => void
  ): void;
  deleteSnapshotSchedule(
    args: DeleteSnapshotScheduleCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DeleteSnapshotScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTagsCommand}
   */
  deleteTags(
    args: DeleteTagsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DeleteTagsCommandOutput>;
  deleteTags(
    args: DeleteTagsCommandInput,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;
  deleteTags(
    args: DeleteTagsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUsageLimitCommand}
   */
  deleteUsageLimit(
    args: DeleteUsageLimitCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DeleteUsageLimitCommandOutput>;
  deleteUsageLimit(
    args: DeleteUsageLimitCommandInput,
    cb: (err: any, data?: DeleteUsageLimitCommandOutput) => void
  ): void;
  deleteUsageLimit(
    args: DeleteUsageLimitCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DeleteUsageLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterNamespaceCommand}
   */
  deregisterNamespace(
    args: DeregisterNamespaceCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DeregisterNamespaceCommandOutput>;
  deregisterNamespace(
    args: DeregisterNamespaceCommandInput,
    cb: (err: any, data?: DeregisterNamespaceCommandOutput) => void
  ): void;
  deregisterNamespace(
    args: DeregisterNamespaceCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DeregisterNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountAttributesCommand}
   */
  describeAccountAttributes(): Promise<DescribeAccountAttributesCommandOutput>;
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeAccountAttributesCommandOutput>;
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAuthenticationProfilesCommand}
   */
  describeAuthenticationProfiles(): Promise<DescribeAuthenticationProfilesCommandOutput>;
  describeAuthenticationProfiles(
    args: DescribeAuthenticationProfilesCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeAuthenticationProfilesCommandOutput>;
  describeAuthenticationProfiles(
    args: DescribeAuthenticationProfilesCommandInput,
    cb: (err: any, data?: DescribeAuthenticationProfilesCommandOutput) => void
  ): void;
  describeAuthenticationProfiles(
    args: DescribeAuthenticationProfilesCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeAuthenticationProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterDbRevisionsCommand}
   */
  describeClusterDbRevisions(): Promise<DescribeClusterDbRevisionsCommandOutput>;
  describeClusterDbRevisions(
    args: DescribeClusterDbRevisionsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeClusterDbRevisionsCommandOutput>;
  describeClusterDbRevisions(
    args: DescribeClusterDbRevisionsCommandInput,
    cb: (err: any, data?: DescribeClusterDbRevisionsCommandOutput) => void
  ): void;
  describeClusterDbRevisions(
    args: DescribeClusterDbRevisionsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeClusterDbRevisionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterParameterGroupsCommand}
   */
  describeClusterParameterGroups(): Promise<DescribeClusterParameterGroupsCommandOutput>;
  describeClusterParameterGroups(
    args: DescribeClusterParameterGroupsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeClusterParameterGroupsCommandOutput>;
  describeClusterParameterGroups(
    args: DescribeClusterParameterGroupsCommandInput,
    cb: (err: any, data?: DescribeClusterParameterGroupsCommandOutput) => void
  ): void;
  describeClusterParameterGroups(
    args: DescribeClusterParameterGroupsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeClusterParameterGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterParametersCommand}
   */
  describeClusterParameters(
    args: DescribeClusterParametersCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeClusterParametersCommandOutput>;
  describeClusterParameters(
    args: DescribeClusterParametersCommandInput,
    cb: (err: any, data?: DescribeClusterParametersCommandOutput) => void
  ): void;
  describeClusterParameters(
    args: DescribeClusterParametersCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeClusterParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClustersCommand}
   */
  describeClusters(): Promise<DescribeClustersCommandOutput>;
  describeClusters(
    args: DescribeClustersCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeClustersCommandOutput>;
  describeClusters(
    args: DescribeClustersCommandInput,
    cb: (err: any, data?: DescribeClustersCommandOutput) => void
  ): void;
  describeClusters(
    args: DescribeClustersCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterSecurityGroupsCommand}
   */
  describeClusterSecurityGroups(): Promise<DescribeClusterSecurityGroupsCommandOutput>;
  describeClusterSecurityGroups(
    args: DescribeClusterSecurityGroupsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeClusterSecurityGroupsCommandOutput>;
  describeClusterSecurityGroups(
    args: DescribeClusterSecurityGroupsCommandInput,
    cb: (err: any, data?: DescribeClusterSecurityGroupsCommandOutput) => void
  ): void;
  describeClusterSecurityGroups(
    args: DescribeClusterSecurityGroupsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeClusterSecurityGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterSnapshotsCommand}
   */
  describeClusterSnapshots(): Promise<DescribeClusterSnapshotsCommandOutput>;
  describeClusterSnapshots(
    args: DescribeClusterSnapshotsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeClusterSnapshotsCommandOutput>;
  describeClusterSnapshots(
    args: DescribeClusterSnapshotsCommandInput,
    cb: (err: any, data?: DescribeClusterSnapshotsCommandOutput) => void
  ): void;
  describeClusterSnapshots(
    args: DescribeClusterSnapshotsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeClusterSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterSubnetGroupsCommand}
   */
  describeClusterSubnetGroups(): Promise<DescribeClusterSubnetGroupsCommandOutput>;
  describeClusterSubnetGroups(
    args: DescribeClusterSubnetGroupsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeClusterSubnetGroupsCommandOutput>;
  describeClusterSubnetGroups(
    args: DescribeClusterSubnetGroupsCommandInput,
    cb: (err: any, data?: DescribeClusterSubnetGroupsCommandOutput) => void
  ): void;
  describeClusterSubnetGroups(
    args: DescribeClusterSubnetGroupsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeClusterSubnetGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterTracksCommand}
   */
  describeClusterTracks(): Promise<DescribeClusterTracksCommandOutput>;
  describeClusterTracks(
    args: DescribeClusterTracksCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeClusterTracksCommandOutput>;
  describeClusterTracks(
    args: DescribeClusterTracksCommandInput,
    cb: (err: any, data?: DescribeClusterTracksCommandOutput) => void
  ): void;
  describeClusterTracks(
    args: DescribeClusterTracksCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeClusterTracksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterVersionsCommand}
   */
  describeClusterVersions(): Promise<DescribeClusterVersionsCommandOutput>;
  describeClusterVersions(
    args: DescribeClusterVersionsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeClusterVersionsCommandOutput>;
  describeClusterVersions(
    args: DescribeClusterVersionsCommandInput,
    cb: (err: any, data?: DescribeClusterVersionsCommandOutput) => void
  ): void;
  describeClusterVersions(
    args: DescribeClusterVersionsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeClusterVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCustomDomainAssociationsCommand}
   */
  describeCustomDomainAssociations(): Promise<DescribeCustomDomainAssociationsCommandOutput>;
  describeCustomDomainAssociations(
    args: DescribeCustomDomainAssociationsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeCustomDomainAssociationsCommandOutput>;
  describeCustomDomainAssociations(
    args: DescribeCustomDomainAssociationsCommandInput,
    cb: (err: any, data?: DescribeCustomDomainAssociationsCommandOutput) => void
  ): void;
  describeCustomDomainAssociations(
    args: DescribeCustomDomainAssociationsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeCustomDomainAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataSharesCommand}
   */
  describeDataShares(): Promise<DescribeDataSharesCommandOutput>;
  describeDataShares(
    args: DescribeDataSharesCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeDataSharesCommandOutput>;
  describeDataShares(
    args: DescribeDataSharesCommandInput,
    cb: (err: any, data?: DescribeDataSharesCommandOutput) => void
  ): void;
  describeDataShares(
    args: DescribeDataSharesCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeDataSharesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataSharesForConsumerCommand}
   */
  describeDataSharesForConsumer(): Promise<DescribeDataSharesForConsumerCommandOutput>;
  describeDataSharesForConsumer(
    args: DescribeDataSharesForConsumerCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeDataSharesForConsumerCommandOutput>;
  describeDataSharesForConsumer(
    args: DescribeDataSharesForConsumerCommandInput,
    cb: (err: any, data?: DescribeDataSharesForConsumerCommandOutput) => void
  ): void;
  describeDataSharesForConsumer(
    args: DescribeDataSharesForConsumerCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeDataSharesForConsumerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataSharesForProducerCommand}
   */
  describeDataSharesForProducer(): Promise<DescribeDataSharesForProducerCommandOutput>;
  describeDataSharesForProducer(
    args: DescribeDataSharesForProducerCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeDataSharesForProducerCommandOutput>;
  describeDataSharesForProducer(
    args: DescribeDataSharesForProducerCommandInput,
    cb: (err: any, data?: DescribeDataSharesForProducerCommandOutput) => void
  ): void;
  describeDataSharesForProducer(
    args: DescribeDataSharesForProducerCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeDataSharesForProducerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDefaultClusterParametersCommand}
   */
  describeDefaultClusterParameters(
    args: DescribeDefaultClusterParametersCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeDefaultClusterParametersCommandOutput>;
  describeDefaultClusterParameters(
    args: DescribeDefaultClusterParametersCommandInput,
    cb: (err: any, data?: DescribeDefaultClusterParametersCommandOutput) => void
  ): void;
  describeDefaultClusterParameters(
    args: DescribeDefaultClusterParametersCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeDefaultClusterParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEndpointAccessCommand}
   */
  describeEndpointAccess(): Promise<DescribeEndpointAccessCommandOutput>;
  describeEndpointAccess(
    args: DescribeEndpointAccessCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeEndpointAccessCommandOutput>;
  describeEndpointAccess(
    args: DescribeEndpointAccessCommandInput,
    cb: (err: any, data?: DescribeEndpointAccessCommandOutput) => void
  ): void;
  describeEndpointAccess(
    args: DescribeEndpointAccessCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeEndpointAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEndpointAuthorizationCommand}
   */
  describeEndpointAuthorization(): Promise<DescribeEndpointAuthorizationCommandOutput>;
  describeEndpointAuthorization(
    args: DescribeEndpointAuthorizationCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeEndpointAuthorizationCommandOutput>;
  describeEndpointAuthorization(
    args: DescribeEndpointAuthorizationCommandInput,
    cb: (err: any, data?: DescribeEndpointAuthorizationCommandOutput) => void
  ): void;
  describeEndpointAuthorization(
    args: DescribeEndpointAuthorizationCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeEndpointAuthorizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventCategoriesCommand}
   */
  describeEventCategories(): Promise<DescribeEventCategoriesCommandOutput>;
  describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeEventCategoriesCommandOutput>;
  describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void
  ): void;
  describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventsCommand}
   */
  describeEvents(): Promise<DescribeEventsCommandOutput>;
  describeEvents(
    args: DescribeEventsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeEventsCommandOutput>;
  describeEvents(
    args: DescribeEventsCommandInput,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;
  describeEvents(
    args: DescribeEventsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventSubscriptionsCommand}
   */
  describeEventSubscriptions(): Promise<DescribeEventSubscriptionsCommandOutput>;
  describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeEventSubscriptionsCommandOutput>;
  describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void
  ): void;
  describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeHsmClientCertificatesCommand}
   */
  describeHsmClientCertificates(): Promise<DescribeHsmClientCertificatesCommandOutput>;
  describeHsmClientCertificates(
    args: DescribeHsmClientCertificatesCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeHsmClientCertificatesCommandOutput>;
  describeHsmClientCertificates(
    args: DescribeHsmClientCertificatesCommandInput,
    cb: (err: any, data?: DescribeHsmClientCertificatesCommandOutput) => void
  ): void;
  describeHsmClientCertificates(
    args: DescribeHsmClientCertificatesCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeHsmClientCertificatesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeHsmConfigurationsCommand}
   */
  describeHsmConfigurations(): Promise<DescribeHsmConfigurationsCommandOutput>;
  describeHsmConfigurations(
    args: DescribeHsmConfigurationsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeHsmConfigurationsCommandOutput>;
  describeHsmConfigurations(
    args: DescribeHsmConfigurationsCommandInput,
    cb: (err: any, data?: DescribeHsmConfigurationsCommandOutput) => void
  ): void;
  describeHsmConfigurations(
    args: DescribeHsmConfigurationsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeHsmConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInboundIntegrationsCommand}
   */
  describeInboundIntegrations(): Promise<DescribeInboundIntegrationsCommandOutput>;
  describeInboundIntegrations(
    args: DescribeInboundIntegrationsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeInboundIntegrationsCommandOutput>;
  describeInboundIntegrations(
    args: DescribeInboundIntegrationsCommandInput,
    cb: (err: any, data?: DescribeInboundIntegrationsCommandOutput) => void
  ): void;
  describeInboundIntegrations(
    args: DescribeInboundIntegrationsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeInboundIntegrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIntegrationsCommand}
   */
  describeIntegrations(): Promise<DescribeIntegrationsCommandOutput>;
  describeIntegrations(
    args: DescribeIntegrationsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeIntegrationsCommandOutput>;
  describeIntegrations(
    args: DescribeIntegrationsCommandInput,
    cb: (err: any, data?: DescribeIntegrationsCommandOutput) => void
  ): void;
  describeIntegrations(
    args: DescribeIntegrationsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeIntegrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLoggingStatusCommand}
   */
  describeLoggingStatus(
    args: DescribeLoggingStatusCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeLoggingStatusCommandOutput>;
  describeLoggingStatus(
    args: DescribeLoggingStatusCommandInput,
    cb: (err: any, data?: DescribeLoggingStatusCommandOutput) => void
  ): void;
  describeLoggingStatus(
    args: DescribeLoggingStatusCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeLoggingStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNodeConfigurationOptionsCommand}
   */
  describeNodeConfigurationOptions(
    args: DescribeNodeConfigurationOptionsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeNodeConfigurationOptionsCommandOutput>;
  describeNodeConfigurationOptions(
    args: DescribeNodeConfigurationOptionsCommandInput,
    cb: (err: any, data?: DescribeNodeConfigurationOptionsCommandOutput) => void
  ): void;
  describeNodeConfigurationOptions(
    args: DescribeNodeConfigurationOptionsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeNodeConfigurationOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOrderableClusterOptionsCommand}
   */
  describeOrderableClusterOptions(): Promise<DescribeOrderableClusterOptionsCommandOutput>;
  describeOrderableClusterOptions(
    args: DescribeOrderableClusterOptionsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeOrderableClusterOptionsCommandOutput>;
  describeOrderableClusterOptions(
    args: DescribeOrderableClusterOptionsCommandInput,
    cb: (err: any, data?: DescribeOrderableClusterOptionsCommandOutput) => void
  ): void;
  describeOrderableClusterOptions(
    args: DescribeOrderableClusterOptionsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeOrderableClusterOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePartnersCommand}
   */
  describePartners(
    args: DescribePartnersCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribePartnersCommandOutput>;
  describePartners(
    args: DescribePartnersCommandInput,
    cb: (err: any, data?: DescribePartnersCommandOutput) => void
  ): void;
  describePartners(
    args: DescribePartnersCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribePartnersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeQev2IdcApplicationsCommand}
   */
  describeQev2IdcApplications(): Promise<DescribeQev2IdcApplicationsCommandOutput>;
  describeQev2IdcApplications(
    args: DescribeQev2IdcApplicationsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeQev2IdcApplicationsCommandOutput>;
  describeQev2IdcApplications(
    args: DescribeQev2IdcApplicationsCommandInput,
    cb: (err: any, data?: DescribeQev2IdcApplicationsCommandOutput) => void
  ): void;
  describeQev2IdcApplications(
    args: DescribeQev2IdcApplicationsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeQev2IdcApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRedshiftIdcApplicationsCommand}
   */
  describeRedshiftIdcApplications(): Promise<DescribeRedshiftIdcApplicationsCommandOutput>;
  describeRedshiftIdcApplications(
    args: DescribeRedshiftIdcApplicationsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeRedshiftIdcApplicationsCommandOutput>;
  describeRedshiftIdcApplications(
    args: DescribeRedshiftIdcApplicationsCommandInput,
    cb: (err: any, data?: DescribeRedshiftIdcApplicationsCommandOutput) => void
  ): void;
  describeRedshiftIdcApplications(
    args: DescribeRedshiftIdcApplicationsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeRedshiftIdcApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReservedNodeExchangeStatusCommand}
   */
  describeReservedNodeExchangeStatus(): Promise<DescribeReservedNodeExchangeStatusCommandOutput>;
  describeReservedNodeExchangeStatus(
    args: DescribeReservedNodeExchangeStatusCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeReservedNodeExchangeStatusCommandOutput>;
  describeReservedNodeExchangeStatus(
    args: DescribeReservedNodeExchangeStatusCommandInput,
    cb: (err: any, data?: DescribeReservedNodeExchangeStatusCommandOutput) => void
  ): void;
  describeReservedNodeExchangeStatus(
    args: DescribeReservedNodeExchangeStatusCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeReservedNodeExchangeStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReservedNodeOfferingsCommand}
   */
  describeReservedNodeOfferings(): Promise<DescribeReservedNodeOfferingsCommandOutput>;
  describeReservedNodeOfferings(
    args: DescribeReservedNodeOfferingsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeReservedNodeOfferingsCommandOutput>;
  describeReservedNodeOfferings(
    args: DescribeReservedNodeOfferingsCommandInput,
    cb: (err: any, data?: DescribeReservedNodeOfferingsCommandOutput) => void
  ): void;
  describeReservedNodeOfferings(
    args: DescribeReservedNodeOfferingsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeReservedNodeOfferingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReservedNodesCommand}
   */
  describeReservedNodes(): Promise<DescribeReservedNodesCommandOutput>;
  describeReservedNodes(
    args: DescribeReservedNodesCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeReservedNodesCommandOutput>;
  describeReservedNodes(
    args: DescribeReservedNodesCommandInput,
    cb: (err: any, data?: DescribeReservedNodesCommandOutput) => void
  ): void;
  describeReservedNodes(
    args: DescribeReservedNodesCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeReservedNodesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeResizeCommand}
   */
  describeResize(
    args: DescribeResizeCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeResizeCommandOutput>;
  describeResize(
    args: DescribeResizeCommandInput,
    cb: (err: any, data?: DescribeResizeCommandOutput) => void
  ): void;
  describeResize(
    args: DescribeResizeCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeResizeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScheduledActionsCommand}
   */
  describeScheduledActions(): Promise<DescribeScheduledActionsCommandOutput>;
  describeScheduledActions(
    args: DescribeScheduledActionsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeScheduledActionsCommandOutput>;
  describeScheduledActions(
    args: DescribeScheduledActionsCommandInput,
    cb: (err: any, data?: DescribeScheduledActionsCommandOutput) => void
  ): void;
  describeScheduledActions(
    args: DescribeScheduledActionsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeScheduledActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSnapshotCopyGrantsCommand}
   */
  describeSnapshotCopyGrants(): Promise<DescribeSnapshotCopyGrantsCommandOutput>;
  describeSnapshotCopyGrants(
    args: DescribeSnapshotCopyGrantsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeSnapshotCopyGrantsCommandOutput>;
  describeSnapshotCopyGrants(
    args: DescribeSnapshotCopyGrantsCommandInput,
    cb: (err: any, data?: DescribeSnapshotCopyGrantsCommandOutput) => void
  ): void;
  describeSnapshotCopyGrants(
    args: DescribeSnapshotCopyGrantsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeSnapshotCopyGrantsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSnapshotSchedulesCommand}
   */
  describeSnapshotSchedules(): Promise<DescribeSnapshotSchedulesCommandOutput>;
  describeSnapshotSchedules(
    args: DescribeSnapshotSchedulesCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeSnapshotSchedulesCommandOutput>;
  describeSnapshotSchedules(
    args: DescribeSnapshotSchedulesCommandInput,
    cb: (err: any, data?: DescribeSnapshotSchedulesCommandOutput) => void
  ): void;
  describeSnapshotSchedules(
    args: DescribeSnapshotSchedulesCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeSnapshotSchedulesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStorageCommand}
   */
  describeStorage(): Promise<DescribeStorageCommandOutput>;
  describeStorage(
    args: DescribeStorageCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeStorageCommandOutput>;
  describeStorage(
    args: DescribeStorageCommandInput,
    cb: (err: any, data?: DescribeStorageCommandOutput) => void
  ): void;
  describeStorage(
    args: DescribeStorageCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeStorageCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTableRestoreStatusCommand}
   */
  describeTableRestoreStatus(): Promise<DescribeTableRestoreStatusCommandOutput>;
  describeTableRestoreStatus(
    args: DescribeTableRestoreStatusCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeTableRestoreStatusCommandOutput>;
  describeTableRestoreStatus(
    args: DescribeTableRestoreStatusCommandInput,
    cb: (err: any, data?: DescribeTableRestoreStatusCommandOutput) => void
  ): void;
  describeTableRestoreStatus(
    args: DescribeTableRestoreStatusCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeTableRestoreStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTagsCommand}
   */
  describeTags(): Promise<DescribeTagsCommandOutput>;
  describeTags(
    args: DescribeTagsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeTagsCommandOutput>;
  describeTags(
    args: DescribeTagsCommandInput,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;
  describeTags(
    args: DescribeTagsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUsageLimitsCommand}
   */
  describeUsageLimits(): Promise<DescribeUsageLimitsCommandOutput>;
  describeUsageLimits(
    args: DescribeUsageLimitsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DescribeUsageLimitsCommandOutput>;
  describeUsageLimits(
    args: DescribeUsageLimitsCommandInput,
    cb: (err: any, data?: DescribeUsageLimitsCommandOutput) => void
  ): void;
  describeUsageLimits(
    args: DescribeUsageLimitsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DescribeUsageLimitsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableLoggingCommand}
   */
  disableLogging(
    args: DisableLoggingCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DisableLoggingCommandOutput>;
  disableLogging(
    args: DisableLoggingCommandInput,
    cb: (err: any, data?: DisableLoggingCommandOutput) => void
  ): void;
  disableLogging(
    args: DisableLoggingCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DisableLoggingCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableSnapshotCopyCommand}
   */
  disableSnapshotCopy(
    args: DisableSnapshotCopyCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DisableSnapshotCopyCommandOutput>;
  disableSnapshotCopy(
    args: DisableSnapshotCopyCommandInput,
    cb: (err: any, data?: DisableSnapshotCopyCommandOutput) => void
  ): void;
  disableSnapshotCopy(
    args: DisableSnapshotCopyCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DisableSnapshotCopyCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateDataShareConsumerCommand}
   */
  disassociateDataShareConsumer(
    args: DisassociateDataShareConsumerCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<DisassociateDataShareConsumerCommandOutput>;
  disassociateDataShareConsumer(
    args: DisassociateDataShareConsumerCommandInput,
    cb: (err: any, data?: DisassociateDataShareConsumerCommandOutput) => void
  ): void;
  disassociateDataShareConsumer(
    args: DisassociateDataShareConsumerCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: DisassociateDataShareConsumerCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableLoggingCommand}
   */
  enableLogging(
    args: EnableLoggingCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<EnableLoggingCommandOutput>;
  enableLogging(
    args: EnableLoggingCommandInput,
    cb: (err: any, data?: EnableLoggingCommandOutput) => void
  ): void;
  enableLogging(
    args: EnableLoggingCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: EnableLoggingCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableSnapshotCopyCommand}
   */
  enableSnapshotCopy(
    args: EnableSnapshotCopyCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<EnableSnapshotCopyCommandOutput>;
  enableSnapshotCopy(
    args: EnableSnapshotCopyCommandInput,
    cb: (err: any, data?: EnableSnapshotCopyCommandOutput) => void
  ): void;
  enableSnapshotCopy(
    args: EnableSnapshotCopyCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: EnableSnapshotCopyCommandOutput) => void
  ): void;

  /**
   * @see {@link FailoverPrimaryComputeCommand}
   */
  failoverPrimaryCompute(
    args: FailoverPrimaryComputeCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<FailoverPrimaryComputeCommandOutput>;
  failoverPrimaryCompute(
    args: FailoverPrimaryComputeCommandInput,
    cb: (err: any, data?: FailoverPrimaryComputeCommandOutput) => void
  ): void;
  failoverPrimaryCompute(
    args: FailoverPrimaryComputeCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: FailoverPrimaryComputeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetClusterCredentialsCommand}
   */
  getClusterCredentials(
    args: GetClusterCredentialsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<GetClusterCredentialsCommandOutput>;
  getClusterCredentials(
    args: GetClusterCredentialsCommandInput,
    cb: (err: any, data?: GetClusterCredentialsCommandOutput) => void
  ): void;
  getClusterCredentials(
    args: GetClusterCredentialsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: GetClusterCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetClusterCredentialsWithIAMCommand}
   */
  getClusterCredentialsWithIAM(): Promise<GetClusterCredentialsWithIAMCommandOutput>;
  getClusterCredentialsWithIAM(
    args: GetClusterCredentialsWithIAMCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<GetClusterCredentialsWithIAMCommandOutput>;
  getClusterCredentialsWithIAM(
    args: GetClusterCredentialsWithIAMCommandInput,
    cb: (err: any, data?: GetClusterCredentialsWithIAMCommandOutput) => void
  ): void;
  getClusterCredentialsWithIAM(
    args: GetClusterCredentialsWithIAMCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: GetClusterCredentialsWithIAMCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdentityCenterAuthTokenCommand}
   */
  getIdentityCenterAuthToken(
    args: GetIdentityCenterAuthTokenCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<GetIdentityCenterAuthTokenCommandOutput>;
  getIdentityCenterAuthToken(
    args: GetIdentityCenterAuthTokenCommandInput,
    cb: (err: any, data?: GetIdentityCenterAuthTokenCommandOutput) => void
  ): void;
  getIdentityCenterAuthToken(
    args: GetIdentityCenterAuthTokenCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: GetIdentityCenterAuthTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReservedNodeExchangeConfigurationOptionsCommand}
   */
  getReservedNodeExchangeConfigurationOptions(
    args: GetReservedNodeExchangeConfigurationOptionsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<GetReservedNodeExchangeConfigurationOptionsCommandOutput>;
  getReservedNodeExchangeConfigurationOptions(
    args: GetReservedNodeExchangeConfigurationOptionsCommandInput,
    cb: (err: any, data?: GetReservedNodeExchangeConfigurationOptionsCommandOutput) => void
  ): void;
  getReservedNodeExchangeConfigurationOptions(
    args: GetReservedNodeExchangeConfigurationOptionsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: GetReservedNodeExchangeConfigurationOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReservedNodeExchangeOfferingsCommand}
   */
  getReservedNodeExchangeOfferings(
    args: GetReservedNodeExchangeOfferingsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<GetReservedNodeExchangeOfferingsCommandOutput>;
  getReservedNodeExchangeOfferings(
    args: GetReservedNodeExchangeOfferingsCommandInput,
    cb: (err: any, data?: GetReservedNodeExchangeOfferingsCommandOutput) => void
  ): void;
  getReservedNodeExchangeOfferings(
    args: GetReservedNodeExchangeOfferingsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: GetReservedNodeExchangeOfferingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecommendationsCommand}
   */
  listRecommendations(): Promise<ListRecommendationsCommandOutput>;
  listRecommendations(
    args: ListRecommendationsCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<ListRecommendationsCommandOutput>;
  listRecommendations(
    args: ListRecommendationsCommandInput,
    cb: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): void;
  listRecommendations(
    args: ListRecommendationsCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyAquaConfigurationCommand}
   */
  modifyAquaConfiguration(
    args: ModifyAquaConfigurationCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<ModifyAquaConfigurationCommandOutput>;
  modifyAquaConfiguration(
    args: ModifyAquaConfigurationCommandInput,
    cb: (err: any, data?: ModifyAquaConfigurationCommandOutput) => void
  ): void;
  modifyAquaConfiguration(
    args: ModifyAquaConfigurationCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: ModifyAquaConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyAuthenticationProfileCommand}
   */
  modifyAuthenticationProfile(
    args: ModifyAuthenticationProfileCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<ModifyAuthenticationProfileCommandOutput>;
  modifyAuthenticationProfile(
    args: ModifyAuthenticationProfileCommandInput,
    cb: (err: any, data?: ModifyAuthenticationProfileCommandOutput) => void
  ): void;
  modifyAuthenticationProfile(
    args: ModifyAuthenticationProfileCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: ModifyAuthenticationProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyClusterCommand}
   */
  modifyCluster(
    args: ModifyClusterCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<ModifyClusterCommandOutput>;
  modifyCluster(
    args: ModifyClusterCommandInput,
    cb: (err: any, data?: ModifyClusterCommandOutput) => void
  ): void;
  modifyCluster(
    args: ModifyClusterCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: ModifyClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyClusterDbRevisionCommand}
   */
  modifyClusterDbRevision(
    args: ModifyClusterDbRevisionCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<ModifyClusterDbRevisionCommandOutput>;
  modifyClusterDbRevision(
    args: ModifyClusterDbRevisionCommandInput,
    cb: (err: any, data?: ModifyClusterDbRevisionCommandOutput) => void
  ): void;
  modifyClusterDbRevision(
    args: ModifyClusterDbRevisionCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: ModifyClusterDbRevisionCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyClusterIamRolesCommand}
   */
  modifyClusterIamRoles(
    args: ModifyClusterIamRolesCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<ModifyClusterIamRolesCommandOutput>;
  modifyClusterIamRoles(
    args: ModifyClusterIamRolesCommandInput,
    cb: (err: any, data?: ModifyClusterIamRolesCommandOutput) => void
  ): void;
  modifyClusterIamRoles(
    args: ModifyClusterIamRolesCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: ModifyClusterIamRolesCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyClusterMaintenanceCommand}
   */
  modifyClusterMaintenance(
    args: ModifyClusterMaintenanceCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<ModifyClusterMaintenanceCommandOutput>;
  modifyClusterMaintenance(
    args: ModifyClusterMaintenanceCommandInput,
    cb: (err: any, data?: ModifyClusterMaintenanceCommandOutput) => void
  ): void;
  modifyClusterMaintenance(
    args: ModifyClusterMaintenanceCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: ModifyClusterMaintenanceCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyClusterParameterGroupCommand}
   */
  modifyClusterParameterGroup(
    args: ModifyClusterParameterGroupCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<ModifyClusterParameterGroupCommandOutput>;
  modifyClusterParameterGroup(
    args: ModifyClusterParameterGroupCommandInput,
    cb: (err: any, data?: ModifyClusterParameterGroupCommandOutput) => void
  ): void;
  modifyClusterParameterGroup(
    args: ModifyClusterParameterGroupCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: ModifyClusterParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyClusterSnapshotCommand}
   */
  modifyClusterSnapshot(
    args: ModifyClusterSnapshotCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<ModifyClusterSnapshotCommandOutput>;
  modifyClusterSnapshot(
    args: ModifyClusterSnapshotCommandInput,
    cb: (err: any, data?: ModifyClusterSnapshotCommandOutput) => void
  ): void;
  modifyClusterSnapshot(
    args: ModifyClusterSnapshotCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: ModifyClusterSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyClusterSnapshotScheduleCommand}
   */
  modifyClusterSnapshotSchedule(
    args: ModifyClusterSnapshotScheduleCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<ModifyClusterSnapshotScheduleCommandOutput>;
  modifyClusterSnapshotSchedule(
    args: ModifyClusterSnapshotScheduleCommandInput,
    cb: (err: any, data?: ModifyClusterSnapshotScheduleCommandOutput) => void
  ): void;
  modifyClusterSnapshotSchedule(
    args: ModifyClusterSnapshotScheduleCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: ModifyClusterSnapshotScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyClusterSubnetGroupCommand}
   */
  modifyClusterSubnetGroup(
    args: ModifyClusterSubnetGroupCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<ModifyClusterSubnetGroupCommandOutput>;
  modifyClusterSubnetGroup(
    args: ModifyClusterSubnetGroupCommandInput,
    cb: (err: any, data?: ModifyClusterSubnetGroupCommandOutput) => void
  ): void;
  modifyClusterSubnetGroup(
    args: ModifyClusterSubnetGroupCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: ModifyClusterSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyCustomDomainAssociationCommand}
   */
  modifyCustomDomainAssociation(
    args: ModifyCustomDomainAssociationCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<ModifyCustomDomainAssociationCommandOutput>;
  modifyCustomDomainAssociation(
    args: ModifyCustomDomainAssociationCommandInput,
    cb: (err: any, data?: ModifyCustomDomainAssociationCommandOutput) => void
  ): void;
  modifyCustomDomainAssociation(
    args: ModifyCustomDomainAssociationCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: ModifyCustomDomainAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyEndpointAccessCommand}
   */
  modifyEndpointAccess(
    args: ModifyEndpointAccessCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<ModifyEndpointAccessCommandOutput>;
  modifyEndpointAccess(
    args: ModifyEndpointAccessCommandInput,
    cb: (err: any, data?: ModifyEndpointAccessCommandOutput) => void
  ): void;
  modifyEndpointAccess(
    args: ModifyEndpointAccessCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: ModifyEndpointAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyEventSubscriptionCommand}
   */
  modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<ModifyEventSubscriptionCommandOutput>;
  modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void
  ): void;
  modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyIntegrationCommand}
   */
  modifyIntegration(
    args: ModifyIntegrationCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<ModifyIntegrationCommandOutput>;
  modifyIntegration(
    args: ModifyIntegrationCommandInput,
    cb: (err: any, data?: ModifyIntegrationCommandOutput) => void
  ): void;
  modifyIntegration(
    args: ModifyIntegrationCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: ModifyIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyLakehouseConfigurationCommand}
   */
  modifyLakehouseConfiguration(
    args: ModifyLakehouseConfigurationCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<ModifyLakehouseConfigurationCommandOutput>;
  modifyLakehouseConfiguration(
    args: ModifyLakehouseConfigurationCommandInput,
    cb: (err: any, data?: ModifyLakehouseConfigurationCommandOutput) => void
  ): void;
  modifyLakehouseConfiguration(
    args: ModifyLakehouseConfigurationCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: ModifyLakehouseConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyQev2IdcApplicationCommand}
   */
  modifyQev2IdcApplication(
    args: ModifyQev2IdcApplicationCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<ModifyQev2IdcApplicationCommandOutput>;
  modifyQev2IdcApplication(
    args: ModifyQev2IdcApplicationCommandInput,
    cb: (err: any, data?: ModifyQev2IdcApplicationCommandOutput) => void
  ): void;
  modifyQev2IdcApplication(
    args: ModifyQev2IdcApplicationCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: ModifyQev2IdcApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyRedshiftIdcApplicationCommand}
   */
  modifyRedshiftIdcApplication(
    args: ModifyRedshiftIdcApplicationCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<ModifyRedshiftIdcApplicationCommandOutput>;
  modifyRedshiftIdcApplication(
    args: ModifyRedshiftIdcApplicationCommandInput,
    cb: (err: any, data?: ModifyRedshiftIdcApplicationCommandOutput) => void
  ): void;
  modifyRedshiftIdcApplication(
    args: ModifyRedshiftIdcApplicationCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: ModifyRedshiftIdcApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyScheduledActionCommand}
   */
  modifyScheduledAction(
    args: ModifyScheduledActionCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<ModifyScheduledActionCommandOutput>;
  modifyScheduledAction(
    args: ModifyScheduledActionCommandInput,
    cb: (err: any, data?: ModifyScheduledActionCommandOutput) => void
  ): void;
  modifyScheduledAction(
    args: ModifyScheduledActionCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: ModifyScheduledActionCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifySnapshotCopyRetentionPeriodCommand}
   */
  modifySnapshotCopyRetentionPeriod(
    args: ModifySnapshotCopyRetentionPeriodCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<ModifySnapshotCopyRetentionPeriodCommandOutput>;
  modifySnapshotCopyRetentionPeriod(
    args: ModifySnapshotCopyRetentionPeriodCommandInput,
    cb: (err: any, data?: ModifySnapshotCopyRetentionPeriodCommandOutput) => void
  ): void;
  modifySnapshotCopyRetentionPeriod(
    args: ModifySnapshotCopyRetentionPeriodCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: ModifySnapshotCopyRetentionPeriodCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifySnapshotScheduleCommand}
   */
  modifySnapshotSchedule(
    args: ModifySnapshotScheduleCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<ModifySnapshotScheduleCommandOutput>;
  modifySnapshotSchedule(
    args: ModifySnapshotScheduleCommandInput,
    cb: (err: any, data?: ModifySnapshotScheduleCommandOutput) => void
  ): void;
  modifySnapshotSchedule(
    args: ModifySnapshotScheduleCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: ModifySnapshotScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyUsageLimitCommand}
   */
  modifyUsageLimit(
    args: ModifyUsageLimitCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<ModifyUsageLimitCommandOutput>;
  modifyUsageLimit(
    args: ModifyUsageLimitCommandInput,
    cb: (err: any, data?: ModifyUsageLimitCommandOutput) => void
  ): void;
  modifyUsageLimit(
    args: ModifyUsageLimitCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: ModifyUsageLimitCommandOutput) => void
  ): void;

  /**
   * @see {@link PauseClusterCommand}
   */
  pauseCluster(
    args: PauseClusterCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<PauseClusterCommandOutput>;
  pauseCluster(
    args: PauseClusterCommandInput,
    cb: (err: any, data?: PauseClusterCommandOutput) => void
  ): void;
  pauseCluster(
    args: PauseClusterCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: PauseClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link PurchaseReservedNodeOfferingCommand}
   */
  purchaseReservedNodeOffering(
    args: PurchaseReservedNodeOfferingCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<PurchaseReservedNodeOfferingCommandOutput>;
  purchaseReservedNodeOffering(
    args: PurchaseReservedNodeOfferingCommandInput,
    cb: (err: any, data?: PurchaseReservedNodeOfferingCommandOutput) => void
  ): void;
  purchaseReservedNodeOffering(
    args: PurchaseReservedNodeOfferingCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: PurchaseReservedNodeOfferingCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RebootClusterCommand}
   */
  rebootCluster(
    args: RebootClusterCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<RebootClusterCommandOutput>;
  rebootCluster(
    args: RebootClusterCommandInput,
    cb: (err: any, data?: RebootClusterCommandOutput) => void
  ): void;
  rebootCluster(
    args: RebootClusterCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: RebootClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterNamespaceCommand}
   */
  registerNamespace(
    args: RegisterNamespaceCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<RegisterNamespaceCommandOutput>;
  registerNamespace(
    args: RegisterNamespaceCommandInput,
    cb: (err: any, data?: RegisterNamespaceCommandOutput) => void
  ): void;
  registerNamespace(
    args: RegisterNamespaceCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: RegisterNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectDataShareCommand}
   */
  rejectDataShare(
    args: RejectDataShareCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<RejectDataShareCommandOutput>;
  rejectDataShare(
    args: RejectDataShareCommandInput,
    cb: (err: any, data?: RejectDataShareCommandOutput) => void
  ): void;
  rejectDataShare(
    args: RejectDataShareCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: RejectDataShareCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetClusterParameterGroupCommand}
   */
  resetClusterParameterGroup(
    args: ResetClusterParameterGroupCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<ResetClusterParameterGroupCommandOutput>;
  resetClusterParameterGroup(
    args: ResetClusterParameterGroupCommandInput,
    cb: (err: any, data?: ResetClusterParameterGroupCommandOutput) => void
  ): void;
  resetClusterParameterGroup(
    args: ResetClusterParameterGroupCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: ResetClusterParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ResizeClusterCommand}
   */
  resizeCluster(
    args: ResizeClusterCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<ResizeClusterCommandOutput>;
  resizeCluster(
    args: ResizeClusterCommandInput,
    cb: (err: any, data?: ResizeClusterCommandOutput) => void
  ): void;
  resizeCluster(
    args: ResizeClusterCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: ResizeClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreFromClusterSnapshotCommand}
   */
  restoreFromClusterSnapshot(
    args: RestoreFromClusterSnapshotCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<RestoreFromClusterSnapshotCommandOutput>;
  restoreFromClusterSnapshot(
    args: RestoreFromClusterSnapshotCommandInput,
    cb: (err: any, data?: RestoreFromClusterSnapshotCommandOutput) => void
  ): void;
  restoreFromClusterSnapshot(
    args: RestoreFromClusterSnapshotCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: RestoreFromClusterSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreTableFromClusterSnapshotCommand}
   */
  restoreTableFromClusterSnapshot(
    args: RestoreTableFromClusterSnapshotCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<RestoreTableFromClusterSnapshotCommandOutput>;
  restoreTableFromClusterSnapshot(
    args: RestoreTableFromClusterSnapshotCommandInput,
    cb: (err: any, data?: RestoreTableFromClusterSnapshotCommandOutput) => void
  ): void;
  restoreTableFromClusterSnapshot(
    args: RestoreTableFromClusterSnapshotCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: RestoreTableFromClusterSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link ResumeClusterCommand}
   */
  resumeCluster(
    args: ResumeClusterCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<ResumeClusterCommandOutput>;
  resumeCluster(
    args: ResumeClusterCommandInput,
    cb: (err: any, data?: ResumeClusterCommandOutput) => void
  ): void;
  resumeCluster(
    args: ResumeClusterCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: ResumeClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeClusterSecurityGroupIngressCommand}
   */
  revokeClusterSecurityGroupIngress(
    args: RevokeClusterSecurityGroupIngressCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<RevokeClusterSecurityGroupIngressCommandOutput>;
  revokeClusterSecurityGroupIngress(
    args: RevokeClusterSecurityGroupIngressCommandInput,
    cb: (err: any, data?: RevokeClusterSecurityGroupIngressCommandOutput) => void
  ): void;
  revokeClusterSecurityGroupIngress(
    args: RevokeClusterSecurityGroupIngressCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: RevokeClusterSecurityGroupIngressCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeEndpointAccessCommand}
   */
  revokeEndpointAccess(): Promise<RevokeEndpointAccessCommandOutput>;
  revokeEndpointAccess(
    args: RevokeEndpointAccessCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<RevokeEndpointAccessCommandOutput>;
  revokeEndpointAccess(
    args: RevokeEndpointAccessCommandInput,
    cb: (err: any, data?: RevokeEndpointAccessCommandOutput) => void
  ): void;
  revokeEndpointAccess(
    args: RevokeEndpointAccessCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: RevokeEndpointAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeSnapshotAccessCommand}
   */
  revokeSnapshotAccess(
    args: RevokeSnapshotAccessCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<RevokeSnapshotAccessCommandOutput>;
  revokeSnapshotAccess(
    args: RevokeSnapshotAccessCommandInput,
    cb: (err: any, data?: RevokeSnapshotAccessCommandOutput) => void
  ): void;
  revokeSnapshotAccess(
    args: RevokeSnapshotAccessCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: RevokeSnapshotAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link RotateEncryptionKeyCommand}
   */
  rotateEncryptionKey(
    args: RotateEncryptionKeyCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<RotateEncryptionKeyCommandOutput>;
  rotateEncryptionKey(
    args: RotateEncryptionKeyCommandInput,
    cb: (err: any, data?: RotateEncryptionKeyCommandOutput) => void
  ): void;
  rotateEncryptionKey(
    args: RotateEncryptionKeyCommandInput,
    options: RedshiftRequestOptions,
    cb: (err: any, data?: RotateEncryptionKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePartnerStatusCommand}
   */
  updatePartnerStatus(
    args: UpdatePartnerStatusCommandInput,
    options?: RedshiftRequestOptions
  ): Promise<UpdatePartnerStatusCommandOutput>;
  updatePartnerStatus(
    args: UpdatePartnerStatusCommandInput,
    cb: (err: any, data?: UpdatePartnerStatusCommandOutput) => void
  ): void;
  updatePartnerStatus(
    args: UpdatePartnerStatusCommandInput,
    options: RedshiftRequestOptions,
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
   * @see {@link DescribeQev2IdcApplicationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeQev2IdcApplicationsCommandOutput}.
   */
  paginateDescribeQev2IdcApplications(
    args?: DescribeQev2IdcApplicationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeQev2IdcApplicationsCommandOutput>;

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
  ): Promise<WaiterResult<DescribeClustersCommandOutput>>;

  /**
   * @see {@link DescribeClustersCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilClusterDeleted(
    args: DescribeClustersCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Redshift>, "client">
  ): Promise<WaiterResult<ClusterNotFoundFault>>;

  /**
   * @see {@link DescribeClustersCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilClusterRestored(
    args: DescribeClustersCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Redshift>, "client">
  ): Promise<WaiterResult<DescribeClustersCommandOutput>>;

  /**
   * @see {@link DescribeClusterSnapshotsCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilSnapshotAvailable(
    args: DescribeClusterSnapshotsCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Redshift>, "client">
  ): Promise<WaiterResult<DescribeClusterSnapshotsCommandOutput>>;
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
