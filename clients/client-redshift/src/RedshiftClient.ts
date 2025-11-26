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
import {
  type BodyLengthCalculator as __BodyLengthCalculator,
  type CheckOptionalClientConfig as __CheckOptionalClientConfig,
  type ChecksumConstructor as __ChecksumConstructor,
  type ClientProtocol,
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
  type HttpRequest,
  type HttpResponse,
  type Logger as __Logger,
  type Provider as __Provider,
  type StreamCollector as __StreamCollector,
  type UrlParser as __UrlParser,
  AwsCredentialIdentityProvider,
  EndpointV2 as __EndpointV2,
  Provider,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultRedshiftHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AcceptReservedNodeExchangeCommandInput,
  AcceptReservedNodeExchangeCommandOutput,
} from "./commands/AcceptReservedNodeExchangeCommand";
import { AddPartnerCommandInput, AddPartnerCommandOutput } from "./commands/AddPartnerCommand";
import {
  AssociateDataShareConsumerCommandInput,
  AssociateDataShareConsumerCommandOutput,
} from "./commands/AssociateDataShareConsumerCommand";
import {
  AuthorizeClusterSecurityGroupIngressCommandInput,
  AuthorizeClusterSecurityGroupIngressCommandOutput,
} from "./commands/AuthorizeClusterSecurityGroupIngressCommand";
import { AuthorizeDataShareCommandInput, AuthorizeDataShareCommandOutput } from "./commands/AuthorizeDataShareCommand";
import {
  AuthorizeEndpointAccessCommandInput,
  AuthorizeEndpointAccessCommandOutput,
} from "./commands/AuthorizeEndpointAccessCommand";
import {
  AuthorizeSnapshotAccessCommandInput,
  AuthorizeSnapshotAccessCommandOutput,
} from "./commands/AuthorizeSnapshotAccessCommand";
import {
  BatchDeleteClusterSnapshotsCommandInput,
  BatchDeleteClusterSnapshotsCommandOutput,
} from "./commands/BatchDeleteClusterSnapshotsCommand";
import {
  BatchModifyClusterSnapshotsCommandInput,
  BatchModifyClusterSnapshotsCommandOutput,
} from "./commands/BatchModifyClusterSnapshotsCommand";
import { CancelResizeCommandInput, CancelResizeCommandOutput } from "./commands/CancelResizeCommand";
import {
  CopyClusterSnapshotCommandInput,
  CopyClusterSnapshotCommandOutput,
} from "./commands/CopyClusterSnapshotCommand";
import {
  CreateAuthenticationProfileCommandInput,
  CreateAuthenticationProfileCommandOutput,
} from "./commands/CreateAuthenticationProfileCommand";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "./commands/CreateClusterCommand";
import {
  CreateClusterParameterGroupCommandInput,
  CreateClusterParameterGroupCommandOutput,
} from "./commands/CreateClusterParameterGroupCommand";
import {
  CreateClusterSecurityGroupCommandInput,
  CreateClusterSecurityGroupCommandOutput,
} from "./commands/CreateClusterSecurityGroupCommand";
import {
  CreateClusterSnapshotCommandInput,
  CreateClusterSnapshotCommandOutput,
} from "./commands/CreateClusterSnapshotCommand";
import {
  CreateClusterSubnetGroupCommandInput,
  CreateClusterSubnetGroupCommandOutput,
} from "./commands/CreateClusterSubnetGroupCommand";
import {
  CreateCustomDomainAssociationCommandInput,
  CreateCustomDomainAssociationCommandOutput,
} from "./commands/CreateCustomDomainAssociationCommand";
import {
  CreateEndpointAccessCommandInput,
  CreateEndpointAccessCommandOutput,
} from "./commands/CreateEndpointAccessCommand";
import {
  CreateEventSubscriptionCommandInput,
  CreateEventSubscriptionCommandOutput,
} from "./commands/CreateEventSubscriptionCommand";
import {
  CreateHsmClientCertificateCommandInput,
  CreateHsmClientCertificateCommandOutput,
} from "./commands/CreateHsmClientCertificateCommand";
import {
  CreateHsmConfigurationCommandInput,
  CreateHsmConfigurationCommandOutput,
} from "./commands/CreateHsmConfigurationCommand";
import { CreateIntegrationCommandInput, CreateIntegrationCommandOutput } from "./commands/CreateIntegrationCommand";
import {
  CreateRedshiftIdcApplicationCommandInput,
  CreateRedshiftIdcApplicationCommandOutput,
} from "./commands/CreateRedshiftIdcApplicationCommand";
import {
  CreateScheduledActionCommandInput,
  CreateScheduledActionCommandOutput,
} from "./commands/CreateScheduledActionCommand";
import {
  CreateSnapshotCopyGrantCommandInput,
  CreateSnapshotCopyGrantCommandOutput,
} from "./commands/CreateSnapshotCopyGrantCommand";
import {
  CreateSnapshotScheduleCommandInput,
  CreateSnapshotScheduleCommandOutput,
} from "./commands/CreateSnapshotScheduleCommand";
import { CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand";
import { CreateUsageLimitCommandInput, CreateUsageLimitCommandOutput } from "./commands/CreateUsageLimitCommand";
import {
  DeauthorizeDataShareCommandInput,
  DeauthorizeDataShareCommandOutput,
} from "./commands/DeauthorizeDataShareCommand";
import {
  DeleteAuthenticationProfileCommandInput,
  DeleteAuthenticationProfileCommandOutput,
} from "./commands/DeleteAuthenticationProfileCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "./commands/DeleteClusterCommand";
import {
  DeleteClusterParameterGroupCommandInput,
  DeleteClusterParameterGroupCommandOutput,
} from "./commands/DeleteClusterParameterGroupCommand";
import {
  DeleteClusterSecurityGroupCommandInput,
  DeleteClusterSecurityGroupCommandOutput,
} from "./commands/DeleteClusterSecurityGroupCommand";
import {
  DeleteClusterSnapshotCommandInput,
  DeleteClusterSnapshotCommandOutput,
} from "./commands/DeleteClusterSnapshotCommand";
import {
  DeleteClusterSubnetGroupCommandInput,
  DeleteClusterSubnetGroupCommandOutput,
} from "./commands/DeleteClusterSubnetGroupCommand";
import {
  DeleteCustomDomainAssociationCommandInput,
  DeleteCustomDomainAssociationCommandOutput,
} from "./commands/DeleteCustomDomainAssociationCommand";
import {
  DeleteEndpointAccessCommandInput,
  DeleteEndpointAccessCommandOutput,
} from "./commands/DeleteEndpointAccessCommand";
import {
  DeleteEventSubscriptionCommandInput,
  DeleteEventSubscriptionCommandOutput,
} from "./commands/DeleteEventSubscriptionCommand";
import {
  DeleteHsmClientCertificateCommandInput,
  DeleteHsmClientCertificateCommandOutput,
} from "./commands/DeleteHsmClientCertificateCommand";
import {
  DeleteHsmConfigurationCommandInput,
  DeleteHsmConfigurationCommandOutput,
} from "./commands/DeleteHsmConfigurationCommand";
import { DeleteIntegrationCommandInput, DeleteIntegrationCommandOutput } from "./commands/DeleteIntegrationCommand";
import { DeletePartnerCommandInput, DeletePartnerCommandOutput } from "./commands/DeletePartnerCommand";
import {
  DeleteRedshiftIdcApplicationCommandInput,
  DeleteRedshiftIdcApplicationCommandOutput,
} from "./commands/DeleteRedshiftIdcApplicationCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteScheduledActionCommandInput,
  DeleteScheduledActionCommandOutput,
} from "./commands/DeleteScheduledActionCommand";
import {
  DeleteSnapshotCopyGrantCommandInput,
  DeleteSnapshotCopyGrantCommandOutput,
} from "./commands/DeleteSnapshotCopyGrantCommand";
import {
  DeleteSnapshotScheduleCommandInput,
  DeleteSnapshotScheduleCommandOutput,
} from "./commands/DeleteSnapshotScheduleCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import { DeleteUsageLimitCommandInput, DeleteUsageLimitCommandOutput } from "./commands/DeleteUsageLimitCommand";
import {
  DeregisterNamespaceCommandInput,
  DeregisterNamespaceCommandOutput,
} from "./commands/DeregisterNamespaceCommand";
import {
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "./commands/DescribeAccountAttributesCommand";
import {
  DescribeAuthenticationProfilesCommandInput,
  DescribeAuthenticationProfilesCommandOutput,
} from "./commands/DescribeAuthenticationProfilesCommand";
import {
  DescribeClusterDbRevisionsCommandInput,
  DescribeClusterDbRevisionsCommandOutput,
} from "./commands/DescribeClusterDbRevisionsCommand";
import {
  DescribeClusterParameterGroupsCommandInput,
  DescribeClusterParameterGroupsCommandOutput,
} from "./commands/DescribeClusterParameterGroupsCommand";
import {
  DescribeClusterParametersCommandInput,
  DescribeClusterParametersCommandOutput,
} from "./commands/DescribeClusterParametersCommand";
import { DescribeClustersCommandInput, DescribeClustersCommandOutput } from "./commands/DescribeClustersCommand";
import {
  DescribeClusterSecurityGroupsCommandInput,
  DescribeClusterSecurityGroupsCommandOutput,
} from "./commands/DescribeClusterSecurityGroupsCommand";
import {
  DescribeClusterSnapshotsCommandInput,
  DescribeClusterSnapshotsCommandOutput,
} from "./commands/DescribeClusterSnapshotsCommand";
import {
  DescribeClusterSubnetGroupsCommandInput,
  DescribeClusterSubnetGroupsCommandOutput,
} from "./commands/DescribeClusterSubnetGroupsCommand";
import {
  DescribeClusterTracksCommandInput,
  DescribeClusterTracksCommandOutput,
} from "./commands/DescribeClusterTracksCommand";
import {
  DescribeClusterVersionsCommandInput,
  DescribeClusterVersionsCommandOutput,
} from "./commands/DescribeClusterVersionsCommand";
import {
  DescribeCustomDomainAssociationsCommandInput,
  DescribeCustomDomainAssociationsCommandOutput,
} from "./commands/DescribeCustomDomainAssociationsCommand";
import { DescribeDataSharesCommandInput, DescribeDataSharesCommandOutput } from "./commands/DescribeDataSharesCommand";
import {
  DescribeDataSharesForConsumerCommandInput,
  DescribeDataSharesForConsumerCommandOutput,
} from "./commands/DescribeDataSharesForConsumerCommand";
import {
  DescribeDataSharesForProducerCommandInput,
  DescribeDataSharesForProducerCommandOutput,
} from "./commands/DescribeDataSharesForProducerCommand";
import {
  DescribeDefaultClusterParametersCommandInput,
  DescribeDefaultClusterParametersCommandOutput,
} from "./commands/DescribeDefaultClusterParametersCommand";
import {
  DescribeEndpointAccessCommandInput,
  DescribeEndpointAccessCommandOutput,
} from "./commands/DescribeEndpointAccessCommand";
import {
  DescribeEndpointAuthorizationCommandInput,
  DescribeEndpointAuthorizationCommandOutput,
} from "./commands/DescribeEndpointAuthorizationCommand";
import {
  DescribeEventCategoriesCommandInput,
  DescribeEventCategoriesCommandOutput,
} from "./commands/DescribeEventCategoriesCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "./commands/DescribeEventsCommand";
import {
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput,
} from "./commands/DescribeEventSubscriptionsCommand";
import {
  DescribeHsmClientCertificatesCommandInput,
  DescribeHsmClientCertificatesCommandOutput,
} from "./commands/DescribeHsmClientCertificatesCommand";
import {
  DescribeHsmConfigurationsCommandInput,
  DescribeHsmConfigurationsCommandOutput,
} from "./commands/DescribeHsmConfigurationsCommand";
import {
  DescribeInboundIntegrationsCommandInput,
  DescribeInboundIntegrationsCommandOutput,
} from "./commands/DescribeInboundIntegrationsCommand";
import {
  DescribeIntegrationsCommandInput,
  DescribeIntegrationsCommandOutput,
} from "./commands/DescribeIntegrationsCommand";
import {
  DescribeLoggingStatusCommandInput,
  DescribeLoggingStatusCommandOutput,
} from "./commands/DescribeLoggingStatusCommand";
import {
  DescribeNodeConfigurationOptionsCommandInput,
  DescribeNodeConfigurationOptionsCommandOutput,
} from "./commands/DescribeNodeConfigurationOptionsCommand";
import {
  DescribeOrderableClusterOptionsCommandInput,
  DescribeOrderableClusterOptionsCommandOutput,
} from "./commands/DescribeOrderableClusterOptionsCommand";
import { DescribePartnersCommandInput, DescribePartnersCommandOutput } from "./commands/DescribePartnersCommand";
import {
  DescribeRedshiftIdcApplicationsCommandInput,
  DescribeRedshiftIdcApplicationsCommandOutput,
} from "./commands/DescribeRedshiftIdcApplicationsCommand";
import {
  DescribeReservedNodeExchangeStatusCommandInput,
  DescribeReservedNodeExchangeStatusCommandOutput,
} from "./commands/DescribeReservedNodeExchangeStatusCommand";
import {
  DescribeReservedNodeOfferingsCommandInput,
  DescribeReservedNodeOfferingsCommandOutput,
} from "./commands/DescribeReservedNodeOfferingsCommand";
import {
  DescribeReservedNodesCommandInput,
  DescribeReservedNodesCommandOutput,
} from "./commands/DescribeReservedNodesCommand";
import { DescribeResizeCommandInput, DescribeResizeCommandOutput } from "./commands/DescribeResizeCommand";
import {
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput,
} from "./commands/DescribeScheduledActionsCommand";
import {
  DescribeSnapshotCopyGrantsCommandInput,
  DescribeSnapshotCopyGrantsCommandOutput,
} from "./commands/DescribeSnapshotCopyGrantsCommand";
import {
  DescribeSnapshotSchedulesCommandInput,
  DescribeSnapshotSchedulesCommandOutput,
} from "./commands/DescribeSnapshotSchedulesCommand";
import { DescribeStorageCommandInput, DescribeStorageCommandOutput } from "./commands/DescribeStorageCommand";
import {
  DescribeTableRestoreStatusCommandInput,
  DescribeTableRestoreStatusCommandOutput,
} from "./commands/DescribeTableRestoreStatusCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "./commands/DescribeTagsCommand";
import {
  DescribeUsageLimitsCommandInput,
  DescribeUsageLimitsCommandOutput,
} from "./commands/DescribeUsageLimitsCommand";
import { DisableLoggingCommandInput, DisableLoggingCommandOutput } from "./commands/DisableLoggingCommand";
import {
  DisableSnapshotCopyCommandInput,
  DisableSnapshotCopyCommandOutput,
} from "./commands/DisableSnapshotCopyCommand";
import {
  DisassociateDataShareConsumerCommandInput,
  DisassociateDataShareConsumerCommandOutput,
} from "./commands/DisassociateDataShareConsumerCommand";
import { EnableLoggingCommandInput, EnableLoggingCommandOutput } from "./commands/EnableLoggingCommand";
import { EnableSnapshotCopyCommandInput, EnableSnapshotCopyCommandOutput } from "./commands/EnableSnapshotCopyCommand";
import {
  FailoverPrimaryComputeCommandInput,
  FailoverPrimaryComputeCommandOutput,
} from "./commands/FailoverPrimaryComputeCommand";
import {
  GetClusterCredentialsCommandInput,
  GetClusterCredentialsCommandOutput,
} from "./commands/GetClusterCredentialsCommand";
import {
  GetClusterCredentialsWithIAMCommandInput,
  GetClusterCredentialsWithIAMCommandOutput,
} from "./commands/GetClusterCredentialsWithIAMCommand";
import {
  GetIdentityCenterAuthTokenCommandInput,
  GetIdentityCenterAuthTokenCommandOutput,
} from "./commands/GetIdentityCenterAuthTokenCommand";
import {
  GetReservedNodeExchangeConfigurationOptionsCommandInput,
  GetReservedNodeExchangeConfigurationOptionsCommandOutput,
} from "./commands/GetReservedNodeExchangeConfigurationOptionsCommand";
import {
  GetReservedNodeExchangeOfferingsCommandInput,
  GetReservedNodeExchangeOfferingsCommandOutput,
} from "./commands/GetReservedNodeExchangeOfferingsCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "./commands/GetResourcePolicyCommand";
import {
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "./commands/ListRecommendationsCommand";
import {
  ModifyAquaConfigurationCommandInput,
  ModifyAquaConfigurationCommandOutput,
} from "./commands/ModifyAquaConfigurationCommand";
import {
  ModifyAuthenticationProfileCommandInput,
  ModifyAuthenticationProfileCommandOutput,
} from "./commands/ModifyAuthenticationProfileCommand";
import { ModifyClusterCommandInput, ModifyClusterCommandOutput } from "./commands/ModifyClusterCommand";
import {
  ModifyClusterDbRevisionCommandInput,
  ModifyClusterDbRevisionCommandOutput,
} from "./commands/ModifyClusterDbRevisionCommand";
import {
  ModifyClusterIamRolesCommandInput,
  ModifyClusterIamRolesCommandOutput,
} from "./commands/ModifyClusterIamRolesCommand";
import {
  ModifyClusterMaintenanceCommandInput,
  ModifyClusterMaintenanceCommandOutput,
} from "./commands/ModifyClusterMaintenanceCommand";
import {
  ModifyClusterParameterGroupCommandInput,
  ModifyClusterParameterGroupCommandOutput,
} from "./commands/ModifyClusterParameterGroupCommand";
import {
  ModifyClusterSnapshotCommandInput,
  ModifyClusterSnapshotCommandOutput,
} from "./commands/ModifyClusterSnapshotCommand";
import {
  ModifyClusterSnapshotScheduleCommandInput,
  ModifyClusterSnapshotScheduleCommandOutput,
} from "./commands/ModifyClusterSnapshotScheduleCommand";
import {
  ModifyClusterSubnetGroupCommandInput,
  ModifyClusterSubnetGroupCommandOutput,
} from "./commands/ModifyClusterSubnetGroupCommand";
import {
  ModifyCustomDomainAssociationCommandInput,
  ModifyCustomDomainAssociationCommandOutput,
} from "./commands/ModifyCustomDomainAssociationCommand";
import {
  ModifyEndpointAccessCommandInput,
  ModifyEndpointAccessCommandOutput,
} from "./commands/ModifyEndpointAccessCommand";
import {
  ModifyEventSubscriptionCommandInput,
  ModifyEventSubscriptionCommandOutput,
} from "./commands/ModifyEventSubscriptionCommand";
import { ModifyIntegrationCommandInput, ModifyIntegrationCommandOutput } from "./commands/ModifyIntegrationCommand";
import {
  ModifyLakehouseConfigurationCommandInput,
  ModifyLakehouseConfigurationCommandOutput,
} from "./commands/ModifyLakehouseConfigurationCommand";
import {
  ModifyRedshiftIdcApplicationCommandInput,
  ModifyRedshiftIdcApplicationCommandOutput,
} from "./commands/ModifyRedshiftIdcApplicationCommand";
import {
  ModifyScheduledActionCommandInput,
  ModifyScheduledActionCommandOutput,
} from "./commands/ModifyScheduledActionCommand";
import {
  ModifySnapshotCopyRetentionPeriodCommandInput,
  ModifySnapshotCopyRetentionPeriodCommandOutput,
} from "./commands/ModifySnapshotCopyRetentionPeriodCommand";
import {
  ModifySnapshotScheduleCommandInput,
  ModifySnapshotScheduleCommandOutput,
} from "./commands/ModifySnapshotScheduleCommand";
import { ModifyUsageLimitCommandInput, ModifyUsageLimitCommandOutput } from "./commands/ModifyUsageLimitCommand";
import { PauseClusterCommandInput, PauseClusterCommandOutput } from "./commands/PauseClusterCommand";
import {
  PurchaseReservedNodeOfferingCommandInput,
  PurchaseReservedNodeOfferingCommandOutput,
} from "./commands/PurchaseReservedNodeOfferingCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "./commands/PutResourcePolicyCommand";
import { RebootClusterCommandInput, RebootClusterCommandOutput } from "./commands/RebootClusterCommand";
import { RegisterNamespaceCommandInput, RegisterNamespaceCommandOutput } from "./commands/RegisterNamespaceCommand";
import { RejectDataShareCommandInput, RejectDataShareCommandOutput } from "./commands/RejectDataShareCommand";
import {
  ResetClusterParameterGroupCommandInput,
  ResetClusterParameterGroupCommandOutput,
} from "./commands/ResetClusterParameterGroupCommand";
import { ResizeClusterCommandInput, ResizeClusterCommandOutput } from "./commands/ResizeClusterCommand";
import {
  RestoreFromClusterSnapshotCommandInput,
  RestoreFromClusterSnapshotCommandOutput,
} from "./commands/RestoreFromClusterSnapshotCommand";
import {
  RestoreTableFromClusterSnapshotCommandInput,
  RestoreTableFromClusterSnapshotCommandOutput,
} from "./commands/RestoreTableFromClusterSnapshotCommand";
import { ResumeClusterCommandInput, ResumeClusterCommandOutput } from "./commands/ResumeClusterCommand";
import {
  RevokeClusterSecurityGroupIngressCommandInput,
  RevokeClusterSecurityGroupIngressCommandOutput,
} from "./commands/RevokeClusterSecurityGroupIngressCommand";
import {
  RevokeEndpointAccessCommandInput,
  RevokeEndpointAccessCommandOutput,
} from "./commands/RevokeEndpointAccessCommand";
import {
  RevokeSnapshotAccessCommandInput,
  RevokeSnapshotAccessCommandOutput,
} from "./commands/RevokeSnapshotAccessCommand";
import {
  RotateEncryptionKeyCommandInput,
  RotateEncryptionKeyCommandOutput,
} from "./commands/RotateEncryptionKeyCommand";
import {
  UpdatePartnerStatusCommandInput,
  UpdatePartnerStatusCommandOutput,
} from "./commands/UpdatePartnerStatusCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
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
   * The protocol controlling the message type (e.g. HTTP) and format (e.g. JSON)
   * may be overridden. A default will always be set by the client.
   * Available options depend on the service's supported protocols and will not be validated by
   * the client.
   * @alpha
   *
   */
  protocol?: ClientProtocol<HttpRequest, HttpResponse>;

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
