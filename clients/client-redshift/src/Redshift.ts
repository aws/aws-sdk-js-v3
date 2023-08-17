// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AcceptReservedNodeExchangeCommand,
  AcceptReservedNodeExchangeCommandInput,
  AcceptReservedNodeExchangeCommandOutput,
} from "./commands/AcceptReservedNodeExchangeCommand";
import { AddPartnerCommand, AddPartnerCommandInput, AddPartnerCommandOutput } from "./commands/AddPartnerCommand";
import {
  AssociateDataShareConsumerCommand,
  AssociateDataShareConsumerCommandInput,
  AssociateDataShareConsumerCommandOutput,
} from "./commands/AssociateDataShareConsumerCommand";
import {
  AuthorizeClusterSecurityGroupIngressCommand,
  AuthorizeClusterSecurityGroupIngressCommandInput,
  AuthorizeClusterSecurityGroupIngressCommandOutput,
} from "./commands/AuthorizeClusterSecurityGroupIngressCommand";
import {
  AuthorizeDataShareCommand,
  AuthorizeDataShareCommandInput,
  AuthorizeDataShareCommandOutput,
} from "./commands/AuthorizeDataShareCommand";
import {
  AuthorizeEndpointAccessCommand,
  AuthorizeEndpointAccessCommandInput,
  AuthorizeEndpointAccessCommandOutput,
} from "./commands/AuthorizeEndpointAccessCommand";
import {
  AuthorizeSnapshotAccessCommand,
  AuthorizeSnapshotAccessCommandInput,
  AuthorizeSnapshotAccessCommandOutput,
} from "./commands/AuthorizeSnapshotAccessCommand";
import {
  BatchDeleteClusterSnapshotsCommand,
  BatchDeleteClusterSnapshotsCommandInput,
  BatchDeleteClusterSnapshotsCommandOutput,
} from "./commands/BatchDeleteClusterSnapshotsCommand";
import {
  BatchModifyClusterSnapshotsCommand,
  BatchModifyClusterSnapshotsCommandInput,
  BatchModifyClusterSnapshotsCommandOutput,
} from "./commands/BatchModifyClusterSnapshotsCommand";
import {
  CancelResizeCommand,
  CancelResizeCommandInput,
  CancelResizeCommandOutput,
} from "./commands/CancelResizeCommand";
import {
  CopyClusterSnapshotCommand,
  CopyClusterSnapshotCommandInput,
  CopyClusterSnapshotCommandOutput,
} from "./commands/CopyClusterSnapshotCommand";
import {
  CreateAuthenticationProfileCommand,
  CreateAuthenticationProfileCommandInput,
  CreateAuthenticationProfileCommandOutput,
} from "./commands/CreateAuthenticationProfileCommand";
import {
  CreateClusterCommand,
  CreateClusterCommandInput,
  CreateClusterCommandOutput,
} from "./commands/CreateClusterCommand";
import {
  CreateClusterParameterGroupCommand,
  CreateClusterParameterGroupCommandInput,
  CreateClusterParameterGroupCommandOutput,
} from "./commands/CreateClusterParameterGroupCommand";
import {
  CreateClusterSecurityGroupCommand,
  CreateClusterSecurityGroupCommandInput,
  CreateClusterSecurityGroupCommandOutput,
} from "./commands/CreateClusterSecurityGroupCommand";
import {
  CreateClusterSnapshotCommand,
  CreateClusterSnapshotCommandInput,
  CreateClusterSnapshotCommandOutput,
} from "./commands/CreateClusterSnapshotCommand";
import {
  CreateClusterSubnetGroupCommand,
  CreateClusterSubnetGroupCommandInput,
  CreateClusterSubnetGroupCommandOutput,
} from "./commands/CreateClusterSubnetGroupCommand";
import {
  CreateCustomDomainAssociationCommand,
  CreateCustomDomainAssociationCommandInput,
  CreateCustomDomainAssociationCommandOutput,
} from "./commands/CreateCustomDomainAssociationCommand";
import {
  CreateEndpointAccessCommand,
  CreateEndpointAccessCommandInput,
  CreateEndpointAccessCommandOutput,
} from "./commands/CreateEndpointAccessCommand";
import {
  CreateEventSubscriptionCommand,
  CreateEventSubscriptionCommandInput,
  CreateEventSubscriptionCommandOutput,
} from "./commands/CreateEventSubscriptionCommand";
import {
  CreateHsmClientCertificateCommand,
  CreateHsmClientCertificateCommandInput,
  CreateHsmClientCertificateCommandOutput,
} from "./commands/CreateHsmClientCertificateCommand";
import {
  CreateHsmConfigurationCommand,
  CreateHsmConfigurationCommandInput,
  CreateHsmConfigurationCommandOutput,
} from "./commands/CreateHsmConfigurationCommand";
import {
  CreateScheduledActionCommand,
  CreateScheduledActionCommandInput,
  CreateScheduledActionCommandOutput,
} from "./commands/CreateScheduledActionCommand";
import {
  CreateSnapshotCopyGrantCommand,
  CreateSnapshotCopyGrantCommandInput,
  CreateSnapshotCopyGrantCommandOutput,
} from "./commands/CreateSnapshotCopyGrantCommand";
import {
  CreateSnapshotScheduleCommand,
  CreateSnapshotScheduleCommandInput,
  CreateSnapshotScheduleCommandOutput,
} from "./commands/CreateSnapshotScheduleCommand";
import { CreateTagsCommand, CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand";
import {
  CreateUsageLimitCommand,
  CreateUsageLimitCommandInput,
  CreateUsageLimitCommandOutput,
} from "./commands/CreateUsageLimitCommand";
import {
  DeauthorizeDataShareCommand,
  DeauthorizeDataShareCommandInput,
  DeauthorizeDataShareCommandOutput,
} from "./commands/DeauthorizeDataShareCommand";
import {
  DeleteAuthenticationProfileCommand,
  DeleteAuthenticationProfileCommandInput,
  DeleteAuthenticationProfileCommandOutput,
} from "./commands/DeleteAuthenticationProfileCommand";
import {
  DeleteClusterCommand,
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput,
} from "./commands/DeleteClusterCommand";
import {
  DeleteClusterParameterGroupCommand,
  DeleteClusterParameterGroupCommandInput,
  DeleteClusterParameterGroupCommandOutput,
} from "./commands/DeleteClusterParameterGroupCommand";
import {
  DeleteClusterSecurityGroupCommand,
  DeleteClusterSecurityGroupCommandInput,
  DeleteClusterSecurityGroupCommandOutput,
} from "./commands/DeleteClusterSecurityGroupCommand";
import {
  DeleteClusterSnapshotCommand,
  DeleteClusterSnapshotCommandInput,
  DeleteClusterSnapshotCommandOutput,
} from "./commands/DeleteClusterSnapshotCommand";
import {
  DeleteClusterSubnetGroupCommand,
  DeleteClusterSubnetGroupCommandInput,
  DeleteClusterSubnetGroupCommandOutput,
} from "./commands/DeleteClusterSubnetGroupCommand";
import {
  DeleteCustomDomainAssociationCommand,
  DeleteCustomDomainAssociationCommandInput,
  DeleteCustomDomainAssociationCommandOutput,
} from "./commands/DeleteCustomDomainAssociationCommand";
import {
  DeleteEndpointAccessCommand,
  DeleteEndpointAccessCommandInput,
  DeleteEndpointAccessCommandOutput,
} from "./commands/DeleteEndpointAccessCommand";
import {
  DeleteEventSubscriptionCommand,
  DeleteEventSubscriptionCommandInput,
  DeleteEventSubscriptionCommandOutput,
} from "./commands/DeleteEventSubscriptionCommand";
import {
  DeleteHsmClientCertificateCommand,
  DeleteHsmClientCertificateCommandInput,
  DeleteHsmClientCertificateCommandOutput,
} from "./commands/DeleteHsmClientCertificateCommand";
import {
  DeleteHsmConfigurationCommand,
  DeleteHsmConfigurationCommandInput,
  DeleteHsmConfigurationCommandOutput,
} from "./commands/DeleteHsmConfigurationCommand";
import {
  DeletePartnerCommand,
  DeletePartnerCommandInput,
  DeletePartnerCommandOutput,
} from "./commands/DeletePartnerCommand";
import {
  DeleteScheduledActionCommand,
  DeleteScheduledActionCommandInput,
  DeleteScheduledActionCommandOutput,
} from "./commands/DeleteScheduledActionCommand";
import {
  DeleteSnapshotCopyGrantCommand,
  DeleteSnapshotCopyGrantCommandInput,
  DeleteSnapshotCopyGrantCommandOutput,
} from "./commands/DeleteSnapshotCopyGrantCommand";
import {
  DeleteSnapshotScheduleCommand,
  DeleteSnapshotScheduleCommandInput,
  DeleteSnapshotScheduleCommandOutput,
} from "./commands/DeleteSnapshotScheduleCommand";
import { DeleteTagsCommand, DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import {
  DeleteUsageLimitCommand,
  DeleteUsageLimitCommandInput,
  DeleteUsageLimitCommandOutput,
} from "./commands/DeleteUsageLimitCommand";
import {
  DescribeAccountAttributesCommand,
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "./commands/DescribeAccountAttributesCommand";
import {
  DescribeAuthenticationProfilesCommand,
  DescribeAuthenticationProfilesCommandInput,
  DescribeAuthenticationProfilesCommandOutput,
} from "./commands/DescribeAuthenticationProfilesCommand";
import {
  DescribeClusterDbRevisionsCommand,
  DescribeClusterDbRevisionsCommandInput,
  DescribeClusterDbRevisionsCommandOutput,
} from "./commands/DescribeClusterDbRevisionsCommand";
import {
  DescribeClusterParameterGroupsCommand,
  DescribeClusterParameterGroupsCommandInput,
  DescribeClusterParameterGroupsCommandOutput,
} from "./commands/DescribeClusterParameterGroupsCommand";
import {
  DescribeClusterParametersCommand,
  DescribeClusterParametersCommandInput,
  DescribeClusterParametersCommandOutput,
} from "./commands/DescribeClusterParametersCommand";
import {
  DescribeClustersCommand,
  DescribeClustersCommandInput,
  DescribeClustersCommandOutput,
} from "./commands/DescribeClustersCommand";
import {
  DescribeClusterSecurityGroupsCommand,
  DescribeClusterSecurityGroupsCommandInput,
  DescribeClusterSecurityGroupsCommandOutput,
} from "./commands/DescribeClusterSecurityGroupsCommand";
import {
  DescribeClusterSnapshotsCommand,
  DescribeClusterSnapshotsCommandInput,
  DescribeClusterSnapshotsCommandOutput,
} from "./commands/DescribeClusterSnapshotsCommand";
import {
  DescribeClusterSubnetGroupsCommand,
  DescribeClusterSubnetGroupsCommandInput,
  DescribeClusterSubnetGroupsCommandOutput,
} from "./commands/DescribeClusterSubnetGroupsCommand";
import {
  DescribeClusterTracksCommand,
  DescribeClusterTracksCommandInput,
  DescribeClusterTracksCommandOutput,
} from "./commands/DescribeClusterTracksCommand";
import {
  DescribeClusterVersionsCommand,
  DescribeClusterVersionsCommandInput,
  DescribeClusterVersionsCommandOutput,
} from "./commands/DescribeClusterVersionsCommand";
import {
  DescribeCustomDomainAssociationsCommand,
  DescribeCustomDomainAssociationsCommandInput,
  DescribeCustomDomainAssociationsCommandOutput,
} from "./commands/DescribeCustomDomainAssociationsCommand";
import {
  DescribeDataSharesCommand,
  DescribeDataSharesCommandInput,
  DescribeDataSharesCommandOutput,
} from "./commands/DescribeDataSharesCommand";
import {
  DescribeDataSharesForConsumerCommand,
  DescribeDataSharesForConsumerCommandInput,
  DescribeDataSharesForConsumerCommandOutput,
} from "./commands/DescribeDataSharesForConsumerCommand";
import {
  DescribeDataSharesForProducerCommand,
  DescribeDataSharesForProducerCommandInput,
  DescribeDataSharesForProducerCommandOutput,
} from "./commands/DescribeDataSharesForProducerCommand";
import {
  DescribeDefaultClusterParametersCommand,
  DescribeDefaultClusterParametersCommandInput,
  DescribeDefaultClusterParametersCommandOutput,
} from "./commands/DescribeDefaultClusterParametersCommand";
import {
  DescribeEndpointAccessCommand,
  DescribeEndpointAccessCommandInput,
  DescribeEndpointAccessCommandOutput,
} from "./commands/DescribeEndpointAccessCommand";
import {
  DescribeEndpointAuthorizationCommand,
  DescribeEndpointAuthorizationCommandInput,
  DescribeEndpointAuthorizationCommandOutput,
} from "./commands/DescribeEndpointAuthorizationCommand";
import {
  DescribeEventCategoriesCommand,
  DescribeEventCategoriesCommandInput,
  DescribeEventCategoriesCommandOutput,
} from "./commands/DescribeEventCategoriesCommand";
import {
  DescribeEventsCommand,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
} from "./commands/DescribeEventsCommand";
import {
  DescribeEventSubscriptionsCommand,
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput,
} from "./commands/DescribeEventSubscriptionsCommand";
import {
  DescribeHsmClientCertificatesCommand,
  DescribeHsmClientCertificatesCommandInput,
  DescribeHsmClientCertificatesCommandOutput,
} from "./commands/DescribeHsmClientCertificatesCommand";
import {
  DescribeHsmConfigurationsCommand,
  DescribeHsmConfigurationsCommandInput,
  DescribeHsmConfigurationsCommandOutput,
} from "./commands/DescribeHsmConfigurationsCommand";
import {
  DescribeLoggingStatusCommand,
  DescribeLoggingStatusCommandInput,
  DescribeLoggingStatusCommandOutput,
} from "./commands/DescribeLoggingStatusCommand";
import {
  DescribeNodeConfigurationOptionsCommand,
  DescribeNodeConfigurationOptionsCommandInput,
  DescribeNodeConfigurationOptionsCommandOutput,
} from "./commands/DescribeNodeConfigurationOptionsCommand";
import {
  DescribeOrderableClusterOptionsCommand,
  DescribeOrderableClusterOptionsCommandInput,
  DescribeOrderableClusterOptionsCommandOutput,
} from "./commands/DescribeOrderableClusterOptionsCommand";
import {
  DescribePartnersCommand,
  DescribePartnersCommandInput,
  DescribePartnersCommandOutput,
} from "./commands/DescribePartnersCommand";
import {
  DescribeReservedNodeExchangeStatusCommand,
  DescribeReservedNodeExchangeStatusCommandInput,
  DescribeReservedNodeExchangeStatusCommandOutput,
} from "./commands/DescribeReservedNodeExchangeStatusCommand";
import {
  DescribeReservedNodeOfferingsCommand,
  DescribeReservedNodeOfferingsCommandInput,
  DescribeReservedNodeOfferingsCommandOutput,
} from "./commands/DescribeReservedNodeOfferingsCommand";
import {
  DescribeReservedNodesCommand,
  DescribeReservedNodesCommandInput,
  DescribeReservedNodesCommandOutput,
} from "./commands/DescribeReservedNodesCommand";
import {
  DescribeResizeCommand,
  DescribeResizeCommandInput,
  DescribeResizeCommandOutput,
} from "./commands/DescribeResizeCommand";
import {
  DescribeScheduledActionsCommand,
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput,
} from "./commands/DescribeScheduledActionsCommand";
import {
  DescribeSnapshotCopyGrantsCommand,
  DescribeSnapshotCopyGrantsCommandInput,
  DescribeSnapshotCopyGrantsCommandOutput,
} from "./commands/DescribeSnapshotCopyGrantsCommand";
import {
  DescribeSnapshotSchedulesCommand,
  DescribeSnapshotSchedulesCommandInput,
  DescribeSnapshotSchedulesCommandOutput,
} from "./commands/DescribeSnapshotSchedulesCommand";
import {
  DescribeStorageCommand,
  DescribeStorageCommandInput,
  DescribeStorageCommandOutput,
} from "./commands/DescribeStorageCommand";
import {
  DescribeTableRestoreStatusCommand,
  DescribeTableRestoreStatusCommandInput,
  DescribeTableRestoreStatusCommandOutput,
} from "./commands/DescribeTableRestoreStatusCommand";
import {
  DescribeTagsCommand,
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
} from "./commands/DescribeTagsCommand";
import {
  DescribeUsageLimitsCommand,
  DescribeUsageLimitsCommandInput,
  DescribeUsageLimitsCommandOutput,
} from "./commands/DescribeUsageLimitsCommand";
import {
  DisableLoggingCommand,
  DisableLoggingCommandInput,
  DisableLoggingCommandOutput,
} from "./commands/DisableLoggingCommand";
import {
  DisableSnapshotCopyCommand,
  DisableSnapshotCopyCommandInput,
  DisableSnapshotCopyCommandOutput,
} from "./commands/DisableSnapshotCopyCommand";
import {
  DisassociateDataShareConsumerCommand,
  DisassociateDataShareConsumerCommandInput,
  DisassociateDataShareConsumerCommandOutput,
} from "./commands/DisassociateDataShareConsumerCommand";
import {
  EnableLoggingCommand,
  EnableLoggingCommandInput,
  EnableLoggingCommandOutput,
} from "./commands/EnableLoggingCommand";
import {
  EnableSnapshotCopyCommand,
  EnableSnapshotCopyCommandInput,
  EnableSnapshotCopyCommandOutput,
} from "./commands/EnableSnapshotCopyCommand";
import {
  GetClusterCredentialsCommand,
  GetClusterCredentialsCommandInput,
  GetClusterCredentialsCommandOutput,
} from "./commands/GetClusterCredentialsCommand";
import {
  GetClusterCredentialsWithIAMCommand,
  GetClusterCredentialsWithIAMCommandInput,
  GetClusterCredentialsWithIAMCommandOutput,
} from "./commands/GetClusterCredentialsWithIAMCommand";
import {
  GetReservedNodeExchangeConfigurationOptionsCommand,
  GetReservedNodeExchangeConfigurationOptionsCommandInput,
  GetReservedNodeExchangeConfigurationOptionsCommandOutput,
} from "./commands/GetReservedNodeExchangeConfigurationOptionsCommand";
import {
  GetReservedNodeExchangeOfferingsCommand,
  GetReservedNodeExchangeOfferingsCommandInput,
  GetReservedNodeExchangeOfferingsCommandOutput,
} from "./commands/GetReservedNodeExchangeOfferingsCommand";
import {
  ModifyAquaConfigurationCommand,
  ModifyAquaConfigurationCommandInput,
  ModifyAquaConfigurationCommandOutput,
} from "./commands/ModifyAquaConfigurationCommand";
import {
  ModifyAuthenticationProfileCommand,
  ModifyAuthenticationProfileCommandInput,
  ModifyAuthenticationProfileCommandOutput,
} from "./commands/ModifyAuthenticationProfileCommand";
import {
  ModifyClusterCommand,
  ModifyClusterCommandInput,
  ModifyClusterCommandOutput,
} from "./commands/ModifyClusterCommand";
import {
  ModifyClusterDbRevisionCommand,
  ModifyClusterDbRevisionCommandInput,
  ModifyClusterDbRevisionCommandOutput,
} from "./commands/ModifyClusterDbRevisionCommand";
import {
  ModifyClusterIamRolesCommand,
  ModifyClusterIamRolesCommandInput,
  ModifyClusterIamRolesCommandOutput,
} from "./commands/ModifyClusterIamRolesCommand";
import {
  ModifyClusterMaintenanceCommand,
  ModifyClusterMaintenanceCommandInput,
  ModifyClusterMaintenanceCommandOutput,
} from "./commands/ModifyClusterMaintenanceCommand";
import {
  ModifyClusterParameterGroupCommand,
  ModifyClusterParameterGroupCommandInput,
  ModifyClusterParameterGroupCommandOutput,
} from "./commands/ModifyClusterParameterGroupCommand";
import {
  ModifyClusterSnapshotCommand,
  ModifyClusterSnapshotCommandInput,
  ModifyClusterSnapshotCommandOutput,
} from "./commands/ModifyClusterSnapshotCommand";
import {
  ModifyClusterSnapshotScheduleCommand,
  ModifyClusterSnapshotScheduleCommandInput,
  ModifyClusterSnapshotScheduleCommandOutput,
} from "./commands/ModifyClusterSnapshotScheduleCommand";
import {
  ModifyClusterSubnetGroupCommand,
  ModifyClusterSubnetGroupCommandInput,
  ModifyClusterSubnetGroupCommandOutput,
} from "./commands/ModifyClusterSubnetGroupCommand";
import {
  ModifyCustomDomainAssociationCommand,
  ModifyCustomDomainAssociationCommandInput,
  ModifyCustomDomainAssociationCommandOutput,
} from "./commands/ModifyCustomDomainAssociationCommand";
import {
  ModifyEndpointAccessCommand,
  ModifyEndpointAccessCommandInput,
  ModifyEndpointAccessCommandOutput,
} from "./commands/ModifyEndpointAccessCommand";
import {
  ModifyEventSubscriptionCommand,
  ModifyEventSubscriptionCommandInput,
  ModifyEventSubscriptionCommandOutput,
} from "./commands/ModifyEventSubscriptionCommand";
import {
  ModifyScheduledActionCommand,
  ModifyScheduledActionCommandInput,
  ModifyScheduledActionCommandOutput,
} from "./commands/ModifyScheduledActionCommand";
import {
  ModifySnapshotCopyRetentionPeriodCommand,
  ModifySnapshotCopyRetentionPeriodCommandInput,
  ModifySnapshotCopyRetentionPeriodCommandOutput,
} from "./commands/ModifySnapshotCopyRetentionPeriodCommand";
import {
  ModifySnapshotScheduleCommand,
  ModifySnapshotScheduleCommandInput,
  ModifySnapshotScheduleCommandOutput,
} from "./commands/ModifySnapshotScheduleCommand";
import {
  ModifyUsageLimitCommand,
  ModifyUsageLimitCommandInput,
  ModifyUsageLimitCommandOutput,
} from "./commands/ModifyUsageLimitCommand";
import {
  PauseClusterCommand,
  PauseClusterCommandInput,
  PauseClusterCommandOutput,
} from "./commands/PauseClusterCommand";
import {
  PurchaseReservedNodeOfferingCommand,
  PurchaseReservedNodeOfferingCommandInput,
  PurchaseReservedNodeOfferingCommandOutput,
} from "./commands/PurchaseReservedNodeOfferingCommand";
import {
  RebootClusterCommand,
  RebootClusterCommandInput,
  RebootClusterCommandOutput,
} from "./commands/RebootClusterCommand";
import {
  RejectDataShareCommand,
  RejectDataShareCommandInput,
  RejectDataShareCommandOutput,
} from "./commands/RejectDataShareCommand";
import {
  ResetClusterParameterGroupCommand,
  ResetClusterParameterGroupCommandInput,
  ResetClusterParameterGroupCommandOutput,
} from "./commands/ResetClusterParameterGroupCommand";
import {
  ResizeClusterCommand,
  ResizeClusterCommandInput,
  ResizeClusterCommandOutput,
} from "./commands/ResizeClusterCommand";
import {
  RestoreFromClusterSnapshotCommand,
  RestoreFromClusterSnapshotCommandInput,
  RestoreFromClusterSnapshotCommandOutput,
} from "./commands/RestoreFromClusterSnapshotCommand";
import {
  RestoreTableFromClusterSnapshotCommand,
  RestoreTableFromClusterSnapshotCommandInput,
  RestoreTableFromClusterSnapshotCommandOutput,
} from "./commands/RestoreTableFromClusterSnapshotCommand";
import {
  ResumeClusterCommand,
  ResumeClusterCommandInput,
  ResumeClusterCommandOutput,
} from "./commands/ResumeClusterCommand";
import {
  RevokeClusterSecurityGroupIngressCommand,
  RevokeClusterSecurityGroupIngressCommandInput,
  RevokeClusterSecurityGroupIngressCommandOutput,
} from "./commands/RevokeClusterSecurityGroupIngressCommand";
import {
  RevokeEndpointAccessCommand,
  RevokeEndpointAccessCommandInput,
  RevokeEndpointAccessCommandOutput,
} from "./commands/RevokeEndpointAccessCommand";
import {
  RevokeSnapshotAccessCommand,
  RevokeSnapshotAccessCommandInput,
  RevokeSnapshotAccessCommandOutput,
} from "./commands/RevokeSnapshotAccessCommand";
import {
  RotateEncryptionKeyCommand,
  RotateEncryptionKeyCommandInput,
  RotateEncryptionKeyCommandOutput,
} from "./commands/RotateEncryptionKeyCommand";
import {
  UpdatePartnerStatusCommand,
  UpdatePartnerStatusCommandInput,
  UpdatePartnerStatusCommandOutput,
} from "./commands/UpdatePartnerStatusCommand";
import { RedshiftClient, RedshiftClientConfig } from "./RedshiftClient";

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
  DeletePartnerCommand,
  DeleteScheduledActionCommand,
  DeleteSnapshotCopyGrantCommand,
  DeleteSnapshotScheduleCommand,
  DeleteTagsCommand,
  DeleteUsageLimitCommand,
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
  DescribeLoggingStatusCommand,
  DescribeNodeConfigurationOptionsCommand,
  DescribeOrderableClusterOptionsCommand,
  DescribePartnersCommand,
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
  GetClusterCredentialsCommand,
  GetClusterCredentialsWithIAMCommand,
  GetReservedNodeExchangeConfigurationOptionsCommand,
  GetReservedNodeExchangeOfferingsCommand,
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
  ModifyScheduledActionCommand,
  ModifySnapshotCopyRetentionPeriodCommand,
  ModifySnapshotScheduleCommand,
  ModifyUsageLimitCommand,
  PauseClusterCommand,
  PurchaseReservedNodeOfferingCommand,
  RebootClusterCommand,
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
  addPartner(args: AddPartnerCommandInput, options?: __HttpHandlerOptions): Promise<AddPartnerCommandOutput>;
  addPartner(args: AddPartnerCommandInput, cb: (err: any, data?: AddPartnerCommandOutput) => void): void;
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
  cancelResize(args: CancelResizeCommandInput, options?: __HttpHandlerOptions): Promise<CancelResizeCommandOutput>;
  cancelResize(args: CancelResizeCommandInput, cb: (err: any, data?: CancelResizeCommandOutput) => void): void;
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
  createCluster(args: CreateClusterCommandInput, options?: __HttpHandlerOptions): Promise<CreateClusterCommandOutput>;
  createCluster(args: CreateClusterCommandInput, cb: (err: any, data?: CreateClusterCommandOutput) => void): void;
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
  createTags(args: CreateTagsCommandInput, options?: __HttpHandlerOptions): Promise<CreateTagsCommandOutput>;
  createTags(args: CreateTagsCommandInput, cb: (err: any, data?: CreateTagsCommandOutput) => void): void;
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
  deleteCluster(args: DeleteClusterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteClusterCommandOutput>;
  deleteCluster(args: DeleteClusterCommandInput, cb: (err: any, data?: DeleteClusterCommandOutput) => void): void;
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
   * @see {@link DeletePartnerCommand}
   */
  deletePartner(args: DeletePartnerCommandInput, options?: __HttpHandlerOptions): Promise<DeletePartnerCommandOutput>;
  deletePartner(args: DeletePartnerCommandInput, cb: (err: any, data?: DeletePartnerCommandOutput) => void): void;
  deletePartner(
    args: DeletePartnerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePartnerCommandOutput) => void
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
  deleteTags(args: DeleteTagsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTagsCommandOutput>;
  deleteTags(args: DeleteTagsCommandInput, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
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
   * @see {@link DescribeAccountAttributesCommand}
   */
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
  describeEvents(
    args: DescribeEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventsCommandOutput>;
  describeEvents(args: DescribeEventsCommandInput, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
  describeEvents(
    args: DescribeEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventSubscriptionsCommand}
   */
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
   * @see {@link DescribeReservedNodeExchangeStatusCommand}
   */
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
  describeResize(args: DescribeResizeCommandInput, cb: (err: any, data?: DescribeResizeCommandOutput) => void): void;
  describeResize(
    args: DescribeResizeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResizeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScheduledActionsCommand}
   */
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
  describeStorage(
    args: DescribeStorageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStorageCommandOutput>;
  describeStorage(args: DescribeStorageCommandInput, cb: (err: any, data?: DescribeStorageCommandOutput) => void): void;
  describeStorage(
    args: DescribeStorageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStorageCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTableRestoreStatusCommand}
   */
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
  describeTags(args: DescribeTagsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTagsCommandOutput>;
  describeTags(args: DescribeTagsCommandInput, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
  describeTags(
    args: DescribeTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUsageLimitsCommand}
   */
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
  disableLogging(args: DisableLoggingCommandInput, cb: (err: any, data?: DisableLoggingCommandOutput) => void): void;
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
  enableLogging(args: EnableLoggingCommandInput, options?: __HttpHandlerOptions): Promise<EnableLoggingCommandOutput>;
  enableLogging(args: EnableLoggingCommandInput, cb: (err: any, data?: EnableLoggingCommandOutput) => void): void;
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
  modifyCluster(args: ModifyClusterCommandInput, options?: __HttpHandlerOptions): Promise<ModifyClusterCommandOutput>;
  modifyCluster(args: ModifyClusterCommandInput, cb: (err: any, data?: ModifyClusterCommandOutput) => void): void;
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
  pauseCluster(args: PauseClusterCommandInput, options?: __HttpHandlerOptions): Promise<PauseClusterCommandOutput>;
  pauseCluster(args: PauseClusterCommandInput, cb: (err: any, data?: PauseClusterCommandOutput) => void): void;
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
   * @see {@link RebootClusterCommand}
   */
  rebootCluster(args: RebootClusterCommandInput, options?: __HttpHandlerOptions): Promise<RebootClusterCommandOutput>;
  rebootCluster(args: RebootClusterCommandInput, cb: (err: any, data?: RebootClusterCommandOutput) => void): void;
  rebootCluster(
    args: RebootClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectDataShareCommand}
   */
  rejectDataShare(
    args: RejectDataShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectDataShareCommandOutput>;
  rejectDataShare(args: RejectDataShareCommandInput, cb: (err: any, data?: RejectDataShareCommandOutput) => void): void;
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
  resizeCluster(args: ResizeClusterCommandInput, options?: __HttpHandlerOptions): Promise<ResizeClusterCommandOutput>;
  resizeCluster(args: ResizeClusterCommandInput, cb: (err: any, data?: ResizeClusterCommandOutput) => void): void;
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
  resumeCluster(args: ResumeClusterCommandInput, options?: __HttpHandlerOptions): Promise<ResumeClusterCommandOutput>;
  resumeCluster(args: ResumeClusterCommandInput, cb: (err: any, data?: ResumeClusterCommandOutput) => void): void;
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
}

/**
 * @public
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
 */
export class Redshift extends RedshiftClient implements Redshift {}
createAggregatedClient(commands, Redshift);
