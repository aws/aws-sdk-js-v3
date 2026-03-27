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
  defaultRedshiftHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AcceptReservedNodeExchangeCommandInput,
  AcceptReservedNodeExchangeCommandOutput,
} from "./commands/AcceptReservedNodeExchangeCommand";
import type { AddPartnerCommandInput, AddPartnerCommandOutput } from "./commands/AddPartnerCommand";
import type {
  AssociateDataShareConsumerCommandInput,
  AssociateDataShareConsumerCommandOutput,
} from "./commands/AssociateDataShareConsumerCommand";
import type {
  AuthorizeClusterSecurityGroupIngressCommandInput,
  AuthorizeClusterSecurityGroupIngressCommandOutput,
} from "./commands/AuthorizeClusterSecurityGroupIngressCommand";
import type {
  AuthorizeDataShareCommandInput,
  AuthorizeDataShareCommandOutput,
} from "./commands/AuthorizeDataShareCommand";
import type {
  AuthorizeEndpointAccessCommandInput,
  AuthorizeEndpointAccessCommandOutput,
} from "./commands/AuthorizeEndpointAccessCommand";
import type {
  AuthorizeSnapshotAccessCommandInput,
  AuthorizeSnapshotAccessCommandOutput,
} from "./commands/AuthorizeSnapshotAccessCommand";
import type {
  BatchDeleteClusterSnapshotsCommandInput,
  BatchDeleteClusterSnapshotsCommandOutput,
} from "./commands/BatchDeleteClusterSnapshotsCommand";
import type {
  BatchModifyClusterSnapshotsCommandInput,
  BatchModifyClusterSnapshotsCommandOutput,
} from "./commands/BatchModifyClusterSnapshotsCommand";
import type { CancelResizeCommandInput, CancelResizeCommandOutput } from "./commands/CancelResizeCommand";
import type {
  CopyClusterSnapshotCommandInput,
  CopyClusterSnapshotCommandOutput,
} from "./commands/CopyClusterSnapshotCommand";
import type {
  CreateAuthenticationProfileCommandInput,
  CreateAuthenticationProfileCommandOutput,
} from "./commands/CreateAuthenticationProfileCommand";
import type { CreateClusterCommandInput, CreateClusterCommandOutput } from "./commands/CreateClusterCommand";
import type {
  CreateClusterParameterGroupCommandInput,
  CreateClusterParameterGroupCommandOutput,
} from "./commands/CreateClusterParameterGroupCommand";
import type {
  CreateClusterSecurityGroupCommandInput,
  CreateClusterSecurityGroupCommandOutput,
} from "./commands/CreateClusterSecurityGroupCommand";
import type {
  CreateClusterSnapshotCommandInput,
  CreateClusterSnapshotCommandOutput,
} from "./commands/CreateClusterSnapshotCommand";
import type {
  CreateClusterSubnetGroupCommandInput,
  CreateClusterSubnetGroupCommandOutput,
} from "./commands/CreateClusterSubnetGroupCommand";
import type {
  CreateCustomDomainAssociationCommandInput,
  CreateCustomDomainAssociationCommandOutput,
} from "./commands/CreateCustomDomainAssociationCommand";
import type {
  CreateEndpointAccessCommandInput,
  CreateEndpointAccessCommandOutput,
} from "./commands/CreateEndpointAccessCommand";
import type {
  CreateEventSubscriptionCommandInput,
  CreateEventSubscriptionCommandOutput,
} from "./commands/CreateEventSubscriptionCommand";
import type {
  CreateHsmClientCertificateCommandInput,
  CreateHsmClientCertificateCommandOutput,
} from "./commands/CreateHsmClientCertificateCommand";
import type {
  CreateHsmConfigurationCommandInput,
  CreateHsmConfigurationCommandOutput,
} from "./commands/CreateHsmConfigurationCommand";
import type {
  CreateIntegrationCommandInput,
  CreateIntegrationCommandOutput,
} from "./commands/CreateIntegrationCommand";
import type {
  CreateRedshiftIdcApplicationCommandInput,
  CreateRedshiftIdcApplicationCommandOutput,
} from "./commands/CreateRedshiftIdcApplicationCommand";
import type {
  CreateScheduledActionCommandInput,
  CreateScheduledActionCommandOutput,
} from "./commands/CreateScheduledActionCommand";
import type {
  CreateSnapshotCopyGrantCommandInput,
  CreateSnapshotCopyGrantCommandOutput,
} from "./commands/CreateSnapshotCopyGrantCommand";
import type {
  CreateSnapshotScheduleCommandInput,
  CreateSnapshotScheduleCommandOutput,
} from "./commands/CreateSnapshotScheduleCommand";
import type { CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand";
import type { CreateUsageLimitCommandInput, CreateUsageLimitCommandOutput } from "./commands/CreateUsageLimitCommand";
import type {
  DeauthorizeDataShareCommandInput,
  DeauthorizeDataShareCommandOutput,
} from "./commands/DeauthorizeDataShareCommand";
import type {
  DeleteAuthenticationProfileCommandInput,
  DeleteAuthenticationProfileCommandOutput,
} from "./commands/DeleteAuthenticationProfileCommand";
import type { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "./commands/DeleteClusterCommand";
import type {
  DeleteClusterParameterGroupCommandInput,
  DeleteClusterParameterGroupCommandOutput,
} from "./commands/DeleteClusterParameterGroupCommand";
import type {
  DeleteClusterSecurityGroupCommandInput,
  DeleteClusterSecurityGroupCommandOutput,
} from "./commands/DeleteClusterSecurityGroupCommand";
import type {
  DeleteClusterSnapshotCommandInput,
  DeleteClusterSnapshotCommandOutput,
} from "./commands/DeleteClusterSnapshotCommand";
import type {
  DeleteClusterSubnetGroupCommandInput,
  DeleteClusterSubnetGroupCommandOutput,
} from "./commands/DeleteClusterSubnetGroupCommand";
import type {
  DeleteCustomDomainAssociationCommandInput,
  DeleteCustomDomainAssociationCommandOutput,
} from "./commands/DeleteCustomDomainAssociationCommand";
import type {
  DeleteEndpointAccessCommandInput,
  DeleteEndpointAccessCommandOutput,
} from "./commands/DeleteEndpointAccessCommand";
import type {
  DeleteEventSubscriptionCommandInput,
  DeleteEventSubscriptionCommandOutput,
} from "./commands/DeleteEventSubscriptionCommand";
import type {
  DeleteHsmClientCertificateCommandInput,
  DeleteHsmClientCertificateCommandOutput,
} from "./commands/DeleteHsmClientCertificateCommand";
import type {
  DeleteHsmConfigurationCommandInput,
  DeleteHsmConfigurationCommandOutput,
} from "./commands/DeleteHsmConfigurationCommand";
import type {
  DeleteIntegrationCommandInput,
  DeleteIntegrationCommandOutput,
} from "./commands/DeleteIntegrationCommand";
import type { DeletePartnerCommandInput, DeletePartnerCommandOutput } from "./commands/DeletePartnerCommand";
import type {
  DeleteRedshiftIdcApplicationCommandInput,
  DeleteRedshiftIdcApplicationCommandOutput,
} from "./commands/DeleteRedshiftIdcApplicationCommand";
import type {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import type {
  DeleteScheduledActionCommandInput,
  DeleteScheduledActionCommandOutput,
} from "./commands/DeleteScheduledActionCommand";
import type {
  DeleteSnapshotCopyGrantCommandInput,
  DeleteSnapshotCopyGrantCommandOutput,
} from "./commands/DeleteSnapshotCopyGrantCommand";
import type {
  DeleteSnapshotScheduleCommandInput,
  DeleteSnapshotScheduleCommandOutput,
} from "./commands/DeleteSnapshotScheduleCommand";
import type { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import type { DeleteUsageLimitCommandInput, DeleteUsageLimitCommandOutput } from "./commands/DeleteUsageLimitCommand";
import type {
  DeregisterNamespaceCommandInput,
  DeregisterNamespaceCommandOutput,
} from "./commands/DeregisterNamespaceCommand";
import type {
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "./commands/DescribeAccountAttributesCommand";
import type {
  DescribeAuthenticationProfilesCommandInput,
  DescribeAuthenticationProfilesCommandOutput,
} from "./commands/DescribeAuthenticationProfilesCommand";
import type {
  DescribeClusterDbRevisionsCommandInput,
  DescribeClusterDbRevisionsCommandOutput,
} from "./commands/DescribeClusterDbRevisionsCommand";
import type {
  DescribeClusterParameterGroupsCommandInput,
  DescribeClusterParameterGroupsCommandOutput,
} from "./commands/DescribeClusterParameterGroupsCommand";
import type {
  DescribeClusterParametersCommandInput,
  DescribeClusterParametersCommandOutput,
} from "./commands/DescribeClusterParametersCommand";
import type { DescribeClustersCommandInput, DescribeClustersCommandOutput } from "./commands/DescribeClustersCommand";
import type {
  DescribeClusterSecurityGroupsCommandInput,
  DescribeClusterSecurityGroupsCommandOutput,
} from "./commands/DescribeClusterSecurityGroupsCommand";
import type {
  DescribeClusterSnapshotsCommandInput,
  DescribeClusterSnapshotsCommandOutput,
} from "./commands/DescribeClusterSnapshotsCommand";
import type {
  DescribeClusterSubnetGroupsCommandInput,
  DescribeClusterSubnetGroupsCommandOutput,
} from "./commands/DescribeClusterSubnetGroupsCommand";
import type {
  DescribeClusterTracksCommandInput,
  DescribeClusterTracksCommandOutput,
} from "./commands/DescribeClusterTracksCommand";
import type {
  DescribeClusterVersionsCommandInput,
  DescribeClusterVersionsCommandOutput,
} from "./commands/DescribeClusterVersionsCommand";
import type {
  DescribeCustomDomainAssociationsCommandInput,
  DescribeCustomDomainAssociationsCommandOutput,
} from "./commands/DescribeCustomDomainAssociationsCommand";
import type {
  DescribeDataSharesCommandInput,
  DescribeDataSharesCommandOutput,
} from "./commands/DescribeDataSharesCommand";
import type {
  DescribeDataSharesForConsumerCommandInput,
  DescribeDataSharesForConsumerCommandOutput,
} from "./commands/DescribeDataSharesForConsumerCommand";
import type {
  DescribeDataSharesForProducerCommandInput,
  DescribeDataSharesForProducerCommandOutput,
} from "./commands/DescribeDataSharesForProducerCommand";
import type {
  DescribeDefaultClusterParametersCommandInput,
  DescribeDefaultClusterParametersCommandOutput,
} from "./commands/DescribeDefaultClusterParametersCommand";
import type {
  DescribeEndpointAccessCommandInput,
  DescribeEndpointAccessCommandOutput,
} from "./commands/DescribeEndpointAccessCommand";
import type {
  DescribeEndpointAuthorizationCommandInput,
  DescribeEndpointAuthorizationCommandOutput,
} from "./commands/DescribeEndpointAuthorizationCommand";
import type {
  DescribeEventCategoriesCommandInput,
  DescribeEventCategoriesCommandOutput,
} from "./commands/DescribeEventCategoriesCommand";
import type { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "./commands/DescribeEventsCommand";
import type {
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput,
} from "./commands/DescribeEventSubscriptionsCommand";
import type {
  DescribeHsmClientCertificatesCommandInput,
  DescribeHsmClientCertificatesCommandOutput,
} from "./commands/DescribeHsmClientCertificatesCommand";
import type {
  DescribeHsmConfigurationsCommandInput,
  DescribeHsmConfigurationsCommandOutput,
} from "./commands/DescribeHsmConfigurationsCommand";
import type {
  DescribeInboundIntegrationsCommandInput,
  DescribeInboundIntegrationsCommandOutput,
} from "./commands/DescribeInboundIntegrationsCommand";
import type {
  DescribeIntegrationsCommandInput,
  DescribeIntegrationsCommandOutput,
} from "./commands/DescribeIntegrationsCommand";
import type {
  DescribeLoggingStatusCommandInput,
  DescribeLoggingStatusCommandOutput,
} from "./commands/DescribeLoggingStatusCommand";
import type {
  DescribeNodeConfigurationOptionsCommandInput,
  DescribeNodeConfigurationOptionsCommandOutput,
} from "./commands/DescribeNodeConfigurationOptionsCommand";
import type {
  DescribeOrderableClusterOptionsCommandInput,
  DescribeOrderableClusterOptionsCommandOutput,
} from "./commands/DescribeOrderableClusterOptionsCommand";
import type { DescribePartnersCommandInput, DescribePartnersCommandOutput } from "./commands/DescribePartnersCommand";
import type {
  DescribeRedshiftIdcApplicationsCommandInput,
  DescribeRedshiftIdcApplicationsCommandOutput,
} from "./commands/DescribeRedshiftIdcApplicationsCommand";
import type {
  DescribeReservedNodeExchangeStatusCommandInput,
  DescribeReservedNodeExchangeStatusCommandOutput,
} from "./commands/DescribeReservedNodeExchangeStatusCommand";
import type {
  DescribeReservedNodeOfferingsCommandInput,
  DescribeReservedNodeOfferingsCommandOutput,
} from "./commands/DescribeReservedNodeOfferingsCommand";
import type {
  DescribeReservedNodesCommandInput,
  DescribeReservedNodesCommandOutput,
} from "./commands/DescribeReservedNodesCommand";
import type { DescribeResizeCommandInput, DescribeResizeCommandOutput } from "./commands/DescribeResizeCommand";
import type {
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput,
} from "./commands/DescribeScheduledActionsCommand";
import type {
  DescribeSnapshotCopyGrantsCommandInput,
  DescribeSnapshotCopyGrantsCommandOutput,
} from "./commands/DescribeSnapshotCopyGrantsCommand";
import type {
  DescribeSnapshotSchedulesCommandInput,
  DescribeSnapshotSchedulesCommandOutput,
} from "./commands/DescribeSnapshotSchedulesCommand";
import type { DescribeStorageCommandInput, DescribeStorageCommandOutput } from "./commands/DescribeStorageCommand";
import type {
  DescribeTableRestoreStatusCommandInput,
  DescribeTableRestoreStatusCommandOutput,
} from "./commands/DescribeTableRestoreStatusCommand";
import type { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "./commands/DescribeTagsCommand";
import type {
  DescribeUsageLimitsCommandInput,
  DescribeUsageLimitsCommandOutput,
} from "./commands/DescribeUsageLimitsCommand";
import type { DisableLoggingCommandInput, DisableLoggingCommandOutput } from "./commands/DisableLoggingCommand";
import type {
  DisableSnapshotCopyCommandInput,
  DisableSnapshotCopyCommandOutput,
} from "./commands/DisableSnapshotCopyCommand";
import type {
  DisassociateDataShareConsumerCommandInput,
  DisassociateDataShareConsumerCommandOutput,
} from "./commands/DisassociateDataShareConsumerCommand";
import type { EnableLoggingCommandInput, EnableLoggingCommandOutput } from "./commands/EnableLoggingCommand";
import type {
  EnableSnapshotCopyCommandInput,
  EnableSnapshotCopyCommandOutput,
} from "./commands/EnableSnapshotCopyCommand";
import type {
  FailoverPrimaryComputeCommandInput,
  FailoverPrimaryComputeCommandOutput,
} from "./commands/FailoverPrimaryComputeCommand";
import type {
  GetClusterCredentialsCommandInput,
  GetClusterCredentialsCommandOutput,
} from "./commands/GetClusterCredentialsCommand";
import type {
  GetClusterCredentialsWithIAMCommandInput,
  GetClusterCredentialsWithIAMCommandOutput,
} from "./commands/GetClusterCredentialsWithIAMCommand";
import type {
  GetIdentityCenterAuthTokenCommandInput,
  GetIdentityCenterAuthTokenCommandOutput,
} from "./commands/GetIdentityCenterAuthTokenCommand";
import type {
  GetReservedNodeExchangeConfigurationOptionsCommandInput,
  GetReservedNodeExchangeConfigurationOptionsCommandOutput,
} from "./commands/GetReservedNodeExchangeConfigurationOptionsCommand";
import type {
  GetReservedNodeExchangeOfferingsCommandInput,
  GetReservedNodeExchangeOfferingsCommandOutput,
} from "./commands/GetReservedNodeExchangeOfferingsCommand";
import type {
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import type {
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "./commands/ListRecommendationsCommand";
import type {
  ModifyAquaConfigurationCommandInput,
  ModifyAquaConfigurationCommandOutput,
} from "./commands/ModifyAquaConfigurationCommand";
import type {
  ModifyAuthenticationProfileCommandInput,
  ModifyAuthenticationProfileCommandOutput,
} from "./commands/ModifyAuthenticationProfileCommand";
import type { ModifyClusterCommandInput, ModifyClusterCommandOutput } from "./commands/ModifyClusterCommand";
import type {
  ModifyClusterDbRevisionCommandInput,
  ModifyClusterDbRevisionCommandOutput,
} from "./commands/ModifyClusterDbRevisionCommand";
import type {
  ModifyClusterIamRolesCommandInput,
  ModifyClusterIamRolesCommandOutput,
} from "./commands/ModifyClusterIamRolesCommand";
import type {
  ModifyClusterMaintenanceCommandInput,
  ModifyClusterMaintenanceCommandOutput,
} from "./commands/ModifyClusterMaintenanceCommand";
import type {
  ModifyClusterParameterGroupCommandInput,
  ModifyClusterParameterGroupCommandOutput,
} from "./commands/ModifyClusterParameterGroupCommand";
import type {
  ModifyClusterSnapshotCommandInput,
  ModifyClusterSnapshotCommandOutput,
} from "./commands/ModifyClusterSnapshotCommand";
import type {
  ModifyClusterSnapshotScheduleCommandInput,
  ModifyClusterSnapshotScheduleCommandOutput,
} from "./commands/ModifyClusterSnapshotScheduleCommand";
import type {
  ModifyClusterSubnetGroupCommandInput,
  ModifyClusterSubnetGroupCommandOutput,
} from "./commands/ModifyClusterSubnetGroupCommand";
import type {
  ModifyCustomDomainAssociationCommandInput,
  ModifyCustomDomainAssociationCommandOutput,
} from "./commands/ModifyCustomDomainAssociationCommand";
import type {
  ModifyEndpointAccessCommandInput,
  ModifyEndpointAccessCommandOutput,
} from "./commands/ModifyEndpointAccessCommand";
import type {
  ModifyEventSubscriptionCommandInput,
  ModifyEventSubscriptionCommandOutput,
} from "./commands/ModifyEventSubscriptionCommand";
import type {
  ModifyIntegrationCommandInput,
  ModifyIntegrationCommandOutput,
} from "./commands/ModifyIntegrationCommand";
import type {
  ModifyLakehouseConfigurationCommandInput,
  ModifyLakehouseConfigurationCommandOutput,
} from "./commands/ModifyLakehouseConfigurationCommand";
import type {
  ModifyRedshiftIdcApplicationCommandInput,
  ModifyRedshiftIdcApplicationCommandOutput,
} from "./commands/ModifyRedshiftIdcApplicationCommand";
import type {
  ModifyScheduledActionCommandInput,
  ModifyScheduledActionCommandOutput,
} from "./commands/ModifyScheduledActionCommand";
import type {
  ModifySnapshotCopyRetentionPeriodCommandInput,
  ModifySnapshotCopyRetentionPeriodCommandOutput,
} from "./commands/ModifySnapshotCopyRetentionPeriodCommand";
import type {
  ModifySnapshotScheduleCommandInput,
  ModifySnapshotScheduleCommandOutput,
} from "./commands/ModifySnapshotScheduleCommand";
import type { ModifyUsageLimitCommandInput, ModifyUsageLimitCommandOutput } from "./commands/ModifyUsageLimitCommand";
import type { PauseClusterCommandInput, PauseClusterCommandOutput } from "./commands/PauseClusterCommand";
import type {
  PurchaseReservedNodeOfferingCommandInput,
  PurchaseReservedNodeOfferingCommandOutput,
} from "./commands/PurchaseReservedNodeOfferingCommand";
import type {
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import type { RebootClusterCommandInput, RebootClusterCommandOutput } from "./commands/RebootClusterCommand";
import type {
  RegisterNamespaceCommandInput,
  RegisterNamespaceCommandOutput,
} from "./commands/RegisterNamespaceCommand";
import type { RejectDataShareCommandInput, RejectDataShareCommandOutput } from "./commands/RejectDataShareCommand";
import type {
  ResetClusterParameterGroupCommandInput,
  ResetClusterParameterGroupCommandOutput,
} from "./commands/ResetClusterParameterGroupCommand";
import type { ResizeClusterCommandInput, ResizeClusterCommandOutput } from "./commands/ResizeClusterCommand";
import type {
  RestoreFromClusterSnapshotCommandInput,
  RestoreFromClusterSnapshotCommandOutput,
} from "./commands/RestoreFromClusterSnapshotCommand";
import type {
  RestoreTableFromClusterSnapshotCommandInput,
  RestoreTableFromClusterSnapshotCommandOutput,
} from "./commands/RestoreTableFromClusterSnapshotCommand";
import type { ResumeClusterCommandInput, ResumeClusterCommandOutput } from "./commands/ResumeClusterCommand";
import type {
  RevokeClusterSecurityGroupIngressCommandInput,
  RevokeClusterSecurityGroupIngressCommandOutput,
} from "./commands/RevokeClusterSecurityGroupIngressCommand";
import type {
  RevokeEndpointAccessCommandInput,
  RevokeEndpointAccessCommandOutput,
} from "./commands/RevokeEndpointAccessCommand";
import type {
  RevokeSnapshotAccessCommandInput,
  RevokeSnapshotAccessCommandOutput,
} from "./commands/RevokeSnapshotAccessCommand";
import type {
  RotateEncryptionKeyCommandInput,
  RotateEncryptionKeyCommandOutput,
} from "./commands/RotateEncryptionKeyCommand";
import type {
  UpdatePartnerStatusCommandInput,
  UpdatePartnerStatusCommandOutput,
} from "./commands/UpdatePartnerStatusCommand";
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
  | AcceptReservedNodeExchangeCommandInput
  | AddPartnerCommandInput
  | AssociateDataShareConsumerCommandInput
  | AuthorizeClusterSecurityGroupIngressCommandInput
  | AuthorizeDataShareCommandInput
  | AuthorizeEndpointAccessCommandInput
  | AuthorizeSnapshotAccessCommandInput
  | BatchDeleteClusterSnapshotsCommandInput
  | BatchModifyClusterSnapshotsCommandInput
  | CancelResizeCommandInput
  | CopyClusterSnapshotCommandInput
  | CreateAuthenticationProfileCommandInput
  | CreateClusterCommandInput
  | CreateClusterParameterGroupCommandInput
  | CreateClusterSecurityGroupCommandInput
  | CreateClusterSnapshotCommandInput
  | CreateClusterSubnetGroupCommandInput
  | CreateCustomDomainAssociationCommandInput
  | CreateEndpointAccessCommandInput
  | CreateEventSubscriptionCommandInput
  | CreateHsmClientCertificateCommandInput
  | CreateHsmConfigurationCommandInput
  | CreateIntegrationCommandInput
  | CreateRedshiftIdcApplicationCommandInput
  | CreateScheduledActionCommandInput
  | CreateSnapshotCopyGrantCommandInput
  | CreateSnapshotScheduleCommandInput
  | CreateTagsCommandInput
  | CreateUsageLimitCommandInput
  | DeauthorizeDataShareCommandInput
  | DeleteAuthenticationProfileCommandInput
  | DeleteClusterCommandInput
  | DeleteClusterParameterGroupCommandInput
  | DeleteClusterSecurityGroupCommandInput
  | DeleteClusterSnapshotCommandInput
  | DeleteClusterSubnetGroupCommandInput
  | DeleteCustomDomainAssociationCommandInput
  | DeleteEndpointAccessCommandInput
  | DeleteEventSubscriptionCommandInput
  | DeleteHsmClientCertificateCommandInput
  | DeleteHsmConfigurationCommandInput
  | DeleteIntegrationCommandInput
  | DeletePartnerCommandInput
  | DeleteRedshiftIdcApplicationCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteScheduledActionCommandInput
  | DeleteSnapshotCopyGrantCommandInput
  | DeleteSnapshotScheduleCommandInput
  | DeleteTagsCommandInput
  | DeleteUsageLimitCommandInput
  | DeregisterNamespaceCommandInput
  | DescribeAccountAttributesCommandInput
  | DescribeAuthenticationProfilesCommandInput
  | DescribeClusterDbRevisionsCommandInput
  | DescribeClusterParameterGroupsCommandInput
  | DescribeClusterParametersCommandInput
  | DescribeClusterSecurityGroupsCommandInput
  | DescribeClusterSnapshotsCommandInput
  | DescribeClusterSubnetGroupsCommandInput
  | DescribeClusterTracksCommandInput
  | DescribeClusterVersionsCommandInput
  | DescribeClustersCommandInput
  | DescribeCustomDomainAssociationsCommandInput
  | DescribeDataSharesCommandInput
  | DescribeDataSharesForConsumerCommandInput
  | DescribeDataSharesForProducerCommandInput
  | DescribeDefaultClusterParametersCommandInput
  | DescribeEndpointAccessCommandInput
  | DescribeEndpointAuthorizationCommandInput
  | DescribeEventCategoriesCommandInput
  | DescribeEventSubscriptionsCommandInput
  | DescribeEventsCommandInput
  | DescribeHsmClientCertificatesCommandInput
  | DescribeHsmConfigurationsCommandInput
  | DescribeInboundIntegrationsCommandInput
  | DescribeIntegrationsCommandInput
  | DescribeLoggingStatusCommandInput
  | DescribeNodeConfigurationOptionsCommandInput
  | DescribeOrderableClusterOptionsCommandInput
  | DescribePartnersCommandInput
  | DescribeRedshiftIdcApplicationsCommandInput
  | DescribeReservedNodeExchangeStatusCommandInput
  | DescribeReservedNodeOfferingsCommandInput
  | DescribeReservedNodesCommandInput
  | DescribeResizeCommandInput
  | DescribeScheduledActionsCommandInput
  | DescribeSnapshotCopyGrantsCommandInput
  | DescribeSnapshotSchedulesCommandInput
  | DescribeStorageCommandInput
  | DescribeTableRestoreStatusCommandInput
  | DescribeTagsCommandInput
  | DescribeUsageLimitsCommandInput
  | DisableLoggingCommandInput
  | DisableSnapshotCopyCommandInput
  | DisassociateDataShareConsumerCommandInput
  | EnableLoggingCommandInput
  | EnableSnapshotCopyCommandInput
  | FailoverPrimaryComputeCommandInput
  | GetClusterCredentialsCommandInput
  | GetClusterCredentialsWithIAMCommandInput
  | GetIdentityCenterAuthTokenCommandInput
  | GetReservedNodeExchangeConfigurationOptionsCommandInput
  | GetReservedNodeExchangeOfferingsCommandInput
  | GetResourcePolicyCommandInput
  | ListRecommendationsCommandInput
  | ModifyAquaConfigurationCommandInput
  | ModifyAuthenticationProfileCommandInput
  | ModifyClusterCommandInput
  | ModifyClusterDbRevisionCommandInput
  | ModifyClusterIamRolesCommandInput
  | ModifyClusterMaintenanceCommandInput
  | ModifyClusterParameterGroupCommandInput
  | ModifyClusterSnapshotCommandInput
  | ModifyClusterSnapshotScheduleCommandInput
  | ModifyClusterSubnetGroupCommandInput
  | ModifyCustomDomainAssociationCommandInput
  | ModifyEndpointAccessCommandInput
  | ModifyEventSubscriptionCommandInput
  | ModifyIntegrationCommandInput
  | ModifyLakehouseConfigurationCommandInput
  | ModifyRedshiftIdcApplicationCommandInput
  | ModifyScheduledActionCommandInput
  | ModifySnapshotCopyRetentionPeriodCommandInput
  | ModifySnapshotScheduleCommandInput
  | ModifyUsageLimitCommandInput
  | PauseClusterCommandInput
  | PurchaseReservedNodeOfferingCommandInput
  | PutResourcePolicyCommandInput
  | RebootClusterCommandInput
  | RegisterNamespaceCommandInput
  | RejectDataShareCommandInput
  | ResetClusterParameterGroupCommandInput
  | ResizeClusterCommandInput
  | RestoreFromClusterSnapshotCommandInput
  | RestoreTableFromClusterSnapshotCommandInput
  | ResumeClusterCommandInput
  | RevokeClusterSecurityGroupIngressCommandInput
  | RevokeEndpointAccessCommandInput
  | RevokeSnapshotAccessCommandInput
  | RotateEncryptionKeyCommandInput
  | UpdatePartnerStatusCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptReservedNodeExchangeCommandOutput
  | AddPartnerCommandOutput
  | AssociateDataShareConsumerCommandOutput
  | AuthorizeClusterSecurityGroupIngressCommandOutput
  | AuthorizeDataShareCommandOutput
  | AuthorizeEndpointAccessCommandOutput
  | AuthorizeSnapshotAccessCommandOutput
  | BatchDeleteClusterSnapshotsCommandOutput
  | BatchModifyClusterSnapshotsCommandOutput
  | CancelResizeCommandOutput
  | CopyClusterSnapshotCommandOutput
  | CreateAuthenticationProfileCommandOutput
  | CreateClusterCommandOutput
  | CreateClusterParameterGroupCommandOutput
  | CreateClusterSecurityGroupCommandOutput
  | CreateClusterSnapshotCommandOutput
  | CreateClusterSubnetGroupCommandOutput
  | CreateCustomDomainAssociationCommandOutput
  | CreateEndpointAccessCommandOutput
  | CreateEventSubscriptionCommandOutput
  | CreateHsmClientCertificateCommandOutput
  | CreateHsmConfigurationCommandOutput
  | CreateIntegrationCommandOutput
  | CreateRedshiftIdcApplicationCommandOutput
  | CreateScheduledActionCommandOutput
  | CreateSnapshotCopyGrantCommandOutput
  | CreateSnapshotScheduleCommandOutput
  | CreateTagsCommandOutput
  | CreateUsageLimitCommandOutput
  | DeauthorizeDataShareCommandOutput
  | DeleteAuthenticationProfileCommandOutput
  | DeleteClusterCommandOutput
  | DeleteClusterParameterGroupCommandOutput
  | DeleteClusterSecurityGroupCommandOutput
  | DeleteClusterSnapshotCommandOutput
  | DeleteClusterSubnetGroupCommandOutput
  | DeleteCustomDomainAssociationCommandOutput
  | DeleteEndpointAccessCommandOutput
  | DeleteEventSubscriptionCommandOutput
  | DeleteHsmClientCertificateCommandOutput
  | DeleteHsmConfigurationCommandOutput
  | DeleteIntegrationCommandOutput
  | DeletePartnerCommandOutput
  | DeleteRedshiftIdcApplicationCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteScheduledActionCommandOutput
  | DeleteSnapshotCopyGrantCommandOutput
  | DeleteSnapshotScheduleCommandOutput
  | DeleteTagsCommandOutput
  | DeleteUsageLimitCommandOutput
  | DeregisterNamespaceCommandOutput
  | DescribeAccountAttributesCommandOutput
  | DescribeAuthenticationProfilesCommandOutput
  | DescribeClusterDbRevisionsCommandOutput
  | DescribeClusterParameterGroupsCommandOutput
  | DescribeClusterParametersCommandOutput
  | DescribeClusterSecurityGroupsCommandOutput
  | DescribeClusterSnapshotsCommandOutput
  | DescribeClusterSubnetGroupsCommandOutput
  | DescribeClusterTracksCommandOutput
  | DescribeClusterVersionsCommandOutput
  | DescribeClustersCommandOutput
  | DescribeCustomDomainAssociationsCommandOutput
  | DescribeDataSharesCommandOutput
  | DescribeDataSharesForConsumerCommandOutput
  | DescribeDataSharesForProducerCommandOutput
  | DescribeDefaultClusterParametersCommandOutput
  | DescribeEndpointAccessCommandOutput
  | DescribeEndpointAuthorizationCommandOutput
  | DescribeEventCategoriesCommandOutput
  | DescribeEventSubscriptionsCommandOutput
  | DescribeEventsCommandOutput
  | DescribeHsmClientCertificatesCommandOutput
  | DescribeHsmConfigurationsCommandOutput
  | DescribeInboundIntegrationsCommandOutput
  | DescribeIntegrationsCommandOutput
  | DescribeLoggingStatusCommandOutput
  | DescribeNodeConfigurationOptionsCommandOutput
  | DescribeOrderableClusterOptionsCommandOutput
  | DescribePartnersCommandOutput
  | DescribeRedshiftIdcApplicationsCommandOutput
  | DescribeReservedNodeExchangeStatusCommandOutput
  | DescribeReservedNodeOfferingsCommandOutput
  | DescribeReservedNodesCommandOutput
  | DescribeResizeCommandOutput
  | DescribeScheduledActionsCommandOutput
  | DescribeSnapshotCopyGrantsCommandOutput
  | DescribeSnapshotSchedulesCommandOutput
  | DescribeStorageCommandOutput
  | DescribeTableRestoreStatusCommandOutput
  | DescribeTagsCommandOutput
  | DescribeUsageLimitsCommandOutput
  | DisableLoggingCommandOutput
  | DisableSnapshotCopyCommandOutput
  | DisassociateDataShareConsumerCommandOutput
  | EnableLoggingCommandOutput
  | EnableSnapshotCopyCommandOutput
  | FailoverPrimaryComputeCommandOutput
  | GetClusterCredentialsCommandOutput
  | GetClusterCredentialsWithIAMCommandOutput
  | GetIdentityCenterAuthTokenCommandOutput
  | GetReservedNodeExchangeConfigurationOptionsCommandOutput
  | GetReservedNodeExchangeOfferingsCommandOutput
  | GetResourcePolicyCommandOutput
  | ListRecommendationsCommandOutput
  | ModifyAquaConfigurationCommandOutput
  | ModifyAuthenticationProfileCommandOutput
  | ModifyClusterCommandOutput
  | ModifyClusterDbRevisionCommandOutput
  | ModifyClusterIamRolesCommandOutput
  | ModifyClusterMaintenanceCommandOutput
  | ModifyClusterParameterGroupCommandOutput
  | ModifyClusterSnapshotCommandOutput
  | ModifyClusterSnapshotScheduleCommandOutput
  | ModifyClusterSubnetGroupCommandOutput
  | ModifyCustomDomainAssociationCommandOutput
  | ModifyEndpointAccessCommandOutput
  | ModifyEventSubscriptionCommandOutput
  | ModifyIntegrationCommandOutput
  | ModifyLakehouseConfigurationCommandOutput
  | ModifyRedshiftIdcApplicationCommandOutput
  | ModifyScheduledActionCommandOutput
  | ModifySnapshotCopyRetentionPeriodCommandOutput
  | ModifySnapshotScheduleCommandOutput
  | ModifyUsageLimitCommandOutput
  | PauseClusterCommandOutput
  | PurchaseReservedNodeOfferingCommandOutput
  | PutResourcePolicyCommandOutput
  | RebootClusterCommandOutput
  | RegisterNamespaceCommandOutput
  | RejectDataShareCommandOutput
  | ResetClusterParameterGroupCommandOutput
  | ResizeClusterCommandOutput
  | RestoreFromClusterSnapshotCommandOutput
  | RestoreTableFromClusterSnapshotCommandOutput
  | ResumeClusterCommandOutput
  | RevokeClusterSecurityGroupIngressCommandOutput
  | RevokeEndpointAccessCommandOutput
  | RevokeSnapshotAccessCommandOutput
  | RotateEncryptionKeyCommandOutput
  | UpdatePartnerStatusCommandOutput;

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
export type RedshiftClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of RedshiftClient class constructor that set the region, credentials and other options.
 */
export interface RedshiftClientConfig extends RedshiftClientConfigType {}

/**
 * @public
 */
export type RedshiftClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of RedshiftClient class. This is resolved and normalized from the {@link RedshiftClientConfig | constructor configuration interface}.
 */
export interface RedshiftClientResolvedConfig extends RedshiftClientResolvedConfigType {}

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
export class RedshiftClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  RedshiftClientResolvedConfig
> {
  /**
   * The resolved configuration of RedshiftClient class. This is resolved and normalized from the {@link RedshiftClientConfig | constructor configuration interface}.
   */
  readonly config: RedshiftClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<RedshiftClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultRedshiftHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: RedshiftClientResolvedConfig) =>
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
