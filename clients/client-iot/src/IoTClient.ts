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
  getOmitRetryHeadersPlugin,
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
  defaultIoTHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AcceptCertificateTransferCommandInput,
  AcceptCertificateTransferCommandOutput,
} from "./commands/AcceptCertificateTransferCommand";
import type {
  AddThingToBillingGroupCommandInput,
  AddThingToBillingGroupCommandOutput,
} from "./commands/AddThingToBillingGroupCommand";
import type {
  AddThingToThingGroupCommandInput,
  AddThingToThingGroupCommandOutput,
} from "./commands/AddThingToThingGroupCommand";
import type {
  AssociateSbomWithPackageVersionCommandInput,
  AssociateSbomWithPackageVersionCommandOutput,
} from "./commands/AssociateSbomWithPackageVersionCommand";
import type {
  AssociateTargetsWithJobCommandInput,
  AssociateTargetsWithJobCommandOutput,
} from "./commands/AssociateTargetsWithJobCommand";
import type { AttachPolicyCommandInput, AttachPolicyCommandOutput } from "./commands/AttachPolicyCommand";
import type {
  AttachPrincipalPolicyCommandInput,
  AttachPrincipalPolicyCommandOutput,
} from "./commands/AttachPrincipalPolicyCommand";
import type {
  AttachSecurityProfileCommandInput,
  AttachSecurityProfileCommandOutput,
} from "./commands/AttachSecurityProfileCommand";
import type {
  AttachThingPrincipalCommandInput,
  AttachThingPrincipalCommandOutput,
} from "./commands/AttachThingPrincipalCommand";
import type {
  CancelAuditMitigationActionsTaskCommandInput,
  CancelAuditMitigationActionsTaskCommandOutput,
} from "./commands/CancelAuditMitigationActionsTaskCommand";
import type { CancelAuditTaskCommandInput, CancelAuditTaskCommandOutput } from "./commands/CancelAuditTaskCommand";
import type {
  CancelCertificateTransferCommandInput,
  CancelCertificateTransferCommandOutput,
} from "./commands/CancelCertificateTransferCommand";
import type {
  CancelDetectMitigationActionsTaskCommandInput,
  CancelDetectMitigationActionsTaskCommandOutput,
} from "./commands/CancelDetectMitigationActionsTaskCommand";
import type { CancelJobCommandInput, CancelJobCommandOutput } from "./commands/CancelJobCommand";
import type {
  CancelJobExecutionCommandInput,
  CancelJobExecutionCommandOutput,
} from "./commands/CancelJobExecutionCommand";
import type {
  ClearDefaultAuthorizerCommandInput,
  ClearDefaultAuthorizerCommandOutput,
} from "./commands/ClearDefaultAuthorizerCommand";
import type {
  ConfirmTopicRuleDestinationCommandInput,
  ConfirmTopicRuleDestinationCommandOutput,
} from "./commands/ConfirmTopicRuleDestinationCommand";
import type {
  CreateAuditSuppressionCommandInput,
  CreateAuditSuppressionCommandOutput,
} from "./commands/CreateAuditSuppressionCommand";
import type { CreateAuthorizerCommandInput, CreateAuthorizerCommandOutput } from "./commands/CreateAuthorizerCommand";
import type {
  CreateBillingGroupCommandInput,
  CreateBillingGroupCommandOutput,
} from "./commands/CreateBillingGroupCommand";
import type {
  CreateCertificateFromCsrCommandInput,
  CreateCertificateFromCsrCommandOutput,
} from "./commands/CreateCertificateFromCsrCommand";
import type {
  CreateCertificateProviderCommandInput,
  CreateCertificateProviderCommandOutput,
} from "./commands/CreateCertificateProviderCommand";
import type { CreateCommandCommandInput, CreateCommandCommandOutput } from "./commands/CreateCommandCommand";
import type {
  CreateCustomMetricCommandInput,
  CreateCustomMetricCommandOutput,
} from "./commands/CreateCustomMetricCommand";
import type { CreateDimensionCommandInput, CreateDimensionCommandOutput } from "./commands/CreateDimensionCommand";
import type {
  CreateDomainConfigurationCommandInput,
  CreateDomainConfigurationCommandOutput,
} from "./commands/CreateDomainConfigurationCommand";
import type {
  CreateDynamicThingGroupCommandInput,
  CreateDynamicThingGroupCommandOutput,
} from "./commands/CreateDynamicThingGroupCommand";
import type {
  CreateFleetMetricCommandInput,
  CreateFleetMetricCommandOutput,
} from "./commands/CreateFleetMetricCommand";
import type { CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import type {
  CreateJobTemplateCommandInput,
  CreateJobTemplateCommandOutput,
} from "./commands/CreateJobTemplateCommand";
import type {
  CreateKeysAndCertificateCommandInput,
  CreateKeysAndCertificateCommandOutput,
} from "./commands/CreateKeysAndCertificateCommand";
import type {
  CreateMitigationActionCommandInput,
  CreateMitigationActionCommandOutput,
} from "./commands/CreateMitigationActionCommand";
import type { CreateOTAUpdateCommandInput, CreateOTAUpdateCommandOutput } from "./commands/CreateOTAUpdateCommand";
import type { CreatePackageCommandInput, CreatePackageCommandOutput } from "./commands/CreatePackageCommand";
import type {
  CreatePackageVersionCommandInput,
  CreatePackageVersionCommandOutput,
} from "./commands/CreatePackageVersionCommand";
import type { CreatePolicyCommandInput, CreatePolicyCommandOutput } from "./commands/CreatePolicyCommand";
import type {
  CreatePolicyVersionCommandInput,
  CreatePolicyVersionCommandOutput,
} from "./commands/CreatePolicyVersionCommand";
import type {
  CreateProvisioningClaimCommandInput,
  CreateProvisioningClaimCommandOutput,
} from "./commands/CreateProvisioningClaimCommand";
import type {
  CreateProvisioningTemplateCommandInput,
  CreateProvisioningTemplateCommandOutput,
} from "./commands/CreateProvisioningTemplateCommand";
import type {
  CreateProvisioningTemplateVersionCommandInput,
  CreateProvisioningTemplateVersionCommandOutput,
} from "./commands/CreateProvisioningTemplateVersionCommand";
import type { CreateRoleAliasCommandInput, CreateRoleAliasCommandOutput } from "./commands/CreateRoleAliasCommand";
import type {
  CreateScheduledAuditCommandInput,
  CreateScheduledAuditCommandOutput,
} from "./commands/CreateScheduledAuditCommand";
import type {
  CreateSecurityProfileCommandInput,
  CreateSecurityProfileCommandOutput,
} from "./commands/CreateSecurityProfileCommand";
import type { CreateStreamCommandInput, CreateStreamCommandOutput } from "./commands/CreateStreamCommand";
import type { CreateThingCommandInput, CreateThingCommandOutput } from "./commands/CreateThingCommand";
import type { CreateThingGroupCommandInput, CreateThingGroupCommandOutput } from "./commands/CreateThingGroupCommand";
import type { CreateThingTypeCommandInput, CreateThingTypeCommandOutput } from "./commands/CreateThingTypeCommand";
import type { CreateTopicRuleCommandInput, CreateTopicRuleCommandOutput } from "./commands/CreateTopicRuleCommand";
import type {
  CreateTopicRuleDestinationCommandInput,
  CreateTopicRuleDestinationCommandOutput,
} from "./commands/CreateTopicRuleDestinationCommand";
import type {
  DeleteAccountAuditConfigurationCommandInput,
  DeleteAccountAuditConfigurationCommandOutput,
} from "./commands/DeleteAccountAuditConfigurationCommand";
import type {
  DeleteAuditSuppressionCommandInput,
  DeleteAuditSuppressionCommandOutput,
} from "./commands/DeleteAuditSuppressionCommand";
import type { DeleteAuthorizerCommandInput, DeleteAuthorizerCommandOutput } from "./commands/DeleteAuthorizerCommand";
import type {
  DeleteBillingGroupCommandInput,
  DeleteBillingGroupCommandOutput,
} from "./commands/DeleteBillingGroupCommand";
import type {
  DeleteCACertificateCommandInput,
  DeleteCACertificateCommandOutput,
} from "./commands/DeleteCACertificateCommand";
import type {
  DeleteCertificateCommandInput,
  DeleteCertificateCommandOutput,
} from "./commands/DeleteCertificateCommand";
import type {
  DeleteCertificateProviderCommandInput,
  DeleteCertificateProviderCommandOutput,
} from "./commands/DeleteCertificateProviderCommand";
import type { DeleteCommandCommandInput, DeleteCommandCommandOutput } from "./commands/DeleteCommandCommand";
import type {
  DeleteCommandExecutionCommandInput,
  DeleteCommandExecutionCommandOutput,
} from "./commands/DeleteCommandExecutionCommand";
import type {
  DeleteCustomMetricCommandInput,
  DeleteCustomMetricCommandOutput,
} from "./commands/DeleteCustomMetricCommand";
import type { DeleteDimensionCommandInput, DeleteDimensionCommandOutput } from "./commands/DeleteDimensionCommand";
import type {
  DeleteDomainConfigurationCommandInput,
  DeleteDomainConfigurationCommandOutput,
} from "./commands/DeleteDomainConfigurationCommand";
import type {
  DeleteDynamicThingGroupCommandInput,
  DeleteDynamicThingGroupCommandOutput,
} from "./commands/DeleteDynamicThingGroupCommand";
import type {
  DeleteFleetMetricCommandInput,
  DeleteFleetMetricCommandOutput,
} from "./commands/DeleteFleetMetricCommand";
import type { DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand";
import type {
  DeleteJobExecutionCommandInput,
  DeleteJobExecutionCommandOutput,
} from "./commands/DeleteJobExecutionCommand";
import type {
  DeleteJobTemplateCommandInput,
  DeleteJobTemplateCommandOutput,
} from "./commands/DeleteJobTemplateCommand";
import type {
  DeleteMitigationActionCommandInput,
  DeleteMitigationActionCommandOutput,
} from "./commands/DeleteMitigationActionCommand";
import type { DeleteOTAUpdateCommandInput, DeleteOTAUpdateCommandOutput } from "./commands/DeleteOTAUpdateCommand";
import type { DeletePackageCommandInput, DeletePackageCommandOutput } from "./commands/DeletePackageCommand";
import type {
  DeletePackageVersionCommandInput,
  DeletePackageVersionCommandOutput,
} from "./commands/DeletePackageVersionCommand";
import type { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "./commands/DeletePolicyCommand";
import type {
  DeletePolicyVersionCommandInput,
  DeletePolicyVersionCommandOutput,
} from "./commands/DeletePolicyVersionCommand";
import type {
  DeleteProvisioningTemplateCommandInput,
  DeleteProvisioningTemplateCommandOutput,
} from "./commands/DeleteProvisioningTemplateCommand";
import type {
  DeleteProvisioningTemplateVersionCommandInput,
  DeleteProvisioningTemplateVersionCommandOutput,
} from "./commands/DeleteProvisioningTemplateVersionCommand";
import type {
  DeleteRegistrationCodeCommandInput,
  DeleteRegistrationCodeCommandOutput,
} from "./commands/DeleteRegistrationCodeCommand";
import type { DeleteRoleAliasCommandInput, DeleteRoleAliasCommandOutput } from "./commands/DeleteRoleAliasCommand";
import type {
  DeleteScheduledAuditCommandInput,
  DeleteScheduledAuditCommandOutput,
} from "./commands/DeleteScheduledAuditCommand";
import type {
  DeleteSecurityProfileCommandInput,
  DeleteSecurityProfileCommandOutput,
} from "./commands/DeleteSecurityProfileCommand";
import type { DeleteStreamCommandInput, DeleteStreamCommandOutput } from "./commands/DeleteStreamCommand";
import type { DeleteThingCommandInput, DeleteThingCommandOutput } from "./commands/DeleteThingCommand";
import type { DeleteThingGroupCommandInput, DeleteThingGroupCommandOutput } from "./commands/DeleteThingGroupCommand";
import type { DeleteThingTypeCommandInput, DeleteThingTypeCommandOutput } from "./commands/DeleteThingTypeCommand";
import type { DeleteTopicRuleCommandInput, DeleteTopicRuleCommandOutput } from "./commands/DeleteTopicRuleCommand";
import type {
  DeleteTopicRuleDestinationCommandInput,
  DeleteTopicRuleDestinationCommandOutput,
} from "./commands/DeleteTopicRuleDestinationCommand";
import type {
  DeleteV2LoggingLevelCommandInput,
  DeleteV2LoggingLevelCommandOutput,
} from "./commands/DeleteV2LoggingLevelCommand";
import type {
  DeprecateThingTypeCommandInput,
  DeprecateThingTypeCommandOutput,
} from "./commands/DeprecateThingTypeCommand";
import type {
  DescribeAccountAuditConfigurationCommandInput,
  DescribeAccountAuditConfigurationCommandOutput,
} from "./commands/DescribeAccountAuditConfigurationCommand";
import type {
  DescribeAuditFindingCommandInput,
  DescribeAuditFindingCommandOutput,
} from "./commands/DescribeAuditFindingCommand";
import type {
  DescribeAuditMitigationActionsTaskCommandInput,
  DescribeAuditMitigationActionsTaskCommandOutput,
} from "./commands/DescribeAuditMitigationActionsTaskCommand";
import type {
  DescribeAuditSuppressionCommandInput,
  DescribeAuditSuppressionCommandOutput,
} from "./commands/DescribeAuditSuppressionCommand";
import type {
  DescribeAuditTaskCommandInput,
  DescribeAuditTaskCommandOutput,
} from "./commands/DescribeAuditTaskCommand";
import type {
  DescribeAuthorizerCommandInput,
  DescribeAuthorizerCommandOutput,
} from "./commands/DescribeAuthorizerCommand";
import type {
  DescribeBillingGroupCommandInput,
  DescribeBillingGroupCommandOutput,
} from "./commands/DescribeBillingGroupCommand";
import type {
  DescribeCACertificateCommandInput,
  DescribeCACertificateCommandOutput,
} from "./commands/DescribeCACertificateCommand";
import type {
  DescribeCertificateCommandInput,
  DescribeCertificateCommandOutput,
} from "./commands/DescribeCertificateCommand";
import type {
  DescribeCertificateProviderCommandInput,
  DescribeCertificateProviderCommandOutput,
} from "./commands/DescribeCertificateProviderCommand";
import type {
  DescribeCustomMetricCommandInput,
  DescribeCustomMetricCommandOutput,
} from "./commands/DescribeCustomMetricCommand";
import type {
  DescribeDefaultAuthorizerCommandInput,
  DescribeDefaultAuthorizerCommandOutput,
} from "./commands/DescribeDefaultAuthorizerCommand";
import type {
  DescribeDetectMitigationActionsTaskCommandInput,
  DescribeDetectMitigationActionsTaskCommandOutput,
} from "./commands/DescribeDetectMitigationActionsTaskCommand";
import type {
  DescribeDimensionCommandInput,
  DescribeDimensionCommandOutput,
} from "./commands/DescribeDimensionCommand";
import type {
  DescribeDomainConfigurationCommandInput,
  DescribeDomainConfigurationCommandOutput,
} from "./commands/DescribeDomainConfigurationCommand";
import type {
  DescribeEncryptionConfigurationCommandInput,
  DescribeEncryptionConfigurationCommandOutput,
} from "./commands/DescribeEncryptionConfigurationCommand";
import type { DescribeEndpointCommandInput, DescribeEndpointCommandOutput } from "./commands/DescribeEndpointCommand";
import type {
  DescribeEventConfigurationsCommandInput,
  DescribeEventConfigurationsCommandOutput,
} from "./commands/DescribeEventConfigurationsCommand";
import type {
  DescribeFleetMetricCommandInput,
  DescribeFleetMetricCommandOutput,
} from "./commands/DescribeFleetMetricCommand";
import type { DescribeIndexCommandInput, DescribeIndexCommandOutput } from "./commands/DescribeIndexCommand";
import type { DescribeJobCommandInput, DescribeJobCommandOutput } from "./commands/DescribeJobCommand";
import type {
  DescribeJobExecutionCommandInput,
  DescribeJobExecutionCommandOutput,
} from "./commands/DescribeJobExecutionCommand";
import type {
  DescribeJobTemplateCommandInput,
  DescribeJobTemplateCommandOutput,
} from "./commands/DescribeJobTemplateCommand";
import type {
  DescribeManagedJobTemplateCommandInput,
  DescribeManagedJobTemplateCommandOutput,
} from "./commands/DescribeManagedJobTemplateCommand";
import type {
  DescribeMitigationActionCommandInput,
  DescribeMitigationActionCommandOutput,
} from "./commands/DescribeMitigationActionCommand";
import type {
  DescribeProvisioningTemplateCommandInput,
  DescribeProvisioningTemplateCommandOutput,
} from "./commands/DescribeProvisioningTemplateCommand";
import type {
  DescribeProvisioningTemplateVersionCommandInput,
  DescribeProvisioningTemplateVersionCommandOutput,
} from "./commands/DescribeProvisioningTemplateVersionCommand";
import type {
  DescribeRoleAliasCommandInput,
  DescribeRoleAliasCommandOutput,
} from "./commands/DescribeRoleAliasCommand";
import type {
  DescribeScheduledAuditCommandInput,
  DescribeScheduledAuditCommandOutput,
} from "./commands/DescribeScheduledAuditCommand";
import type {
  DescribeSecurityProfileCommandInput,
  DescribeSecurityProfileCommandOutput,
} from "./commands/DescribeSecurityProfileCommand";
import type { DescribeStreamCommandInput, DescribeStreamCommandOutput } from "./commands/DescribeStreamCommand";
import type { DescribeThingCommandInput, DescribeThingCommandOutput } from "./commands/DescribeThingCommand";
import type {
  DescribeThingGroupCommandInput,
  DescribeThingGroupCommandOutput,
} from "./commands/DescribeThingGroupCommand";
import type {
  DescribeThingRegistrationTaskCommandInput,
  DescribeThingRegistrationTaskCommandOutput,
} from "./commands/DescribeThingRegistrationTaskCommand";
import type {
  DescribeThingTypeCommandInput,
  DescribeThingTypeCommandOutput,
} from "./commands/DescribeThingTypeCommand";
import type { DetachPolicyCommandInput, DetachPolicyCommandOutput } from "./commands/DetachPolicyCommand";
import type {
  DetachPrincipalPolicyCommandInput,
  DetachPrincipalPolicyCommandOutput,
} from "./commands/DetachPrincipalPolicyCommand";
import type {
  DetachSecurityProfileCommandInput,
  DetachSecurityProfileCommandOutput,
} from "./commands/DetachSecurityProfileCommand";
import type {
  DetachThingPrincipalCommandInput,
  DetachThingPrincipalCommandOutput,
} from "./commands/DetachThingPrincipalCommand";
import type { DisableTopicRuleCommandInput, DisableTopicRuleCommandOutput } from "./commands/DisableTopicRuleCommand";
import type {
  DisassociateSbomFromPackageVersionCommandInput,
  DisassociateSbomFromPackageVersionCommandOutput,
} from "./commands/DisassociateSbomFromPackageVersionCommand";
import type { EnableTopicRuleCommandInput, EnableTopicRuleCommandOutput } from "./commands/EnableTopicRuleCommand";
import type {
  GetBehaviorModelTrainingSummariesCommandInput,
  GetBehaviorModelTrainingSummariesCommandOutput,
} from "./commands/GetBehaviorModelTrainingSummariesCommand";
import type {
  GetBucketsAggregationCommandInput,
  GetBucketsAggregationCommandOutput,
} from "./commands/GetBucketsAggregationCommand";
import type { GetCardinalityCommandInput, GetCardinalityCommandOutput } from "./commands/GetCardinalityCommand";
import type { GetCommandCommandInput, GetCommandCommandOutput } from "./commands/GetCommandCommand";
import type {
  GetCommandExecutionCommandInput,
  GetCommandExecutionCommandOutput,
} from "./commands/GetCommandExecutionCommand";
import type {
  GetEffectivePoliciesCommandInput,
  GetEffectivePoliciesCommandOutput,
} from "./commands/GetEffectivePoliciesCommand";
import type {
  GetIndexingConfigurationCommandInput,
  GetIndexingConfigurationCommandOutput,
} from "./commands/GetIndexingConfigurationCommand";
import type { GetJobDocumentCommandInput, GetJobDocumentCommandOutput } from "./commands/GetJobDocumentCommand";
import type {
  GetLoggingOptionsCommandInput,
  GetLoggingOptionsCommandOutput,
} from "./commands/GetLoggingOptionsCommand";
import type { GetOTAUpdateCommandInput, GetOTAUpdateCommandOutput } from "./commands/GetOTAUpdateCommand";
import type { GetPackageCommandInput, GetPackageCommandOutput } from "./commands/GetPackageCommand";
import type {
  GetPackageConfigurationCommandInput,
  GetPackageConfigurationCommandOutput,
} from "./commands/GetPackageConfigurationCommand";
import type {
  GetPackageVersionCommandInput,
  GetPackageVersionCommandOutput,
} from "./commands/GetPackageVersionCommand";
import type { GetPercentilesCommandInput, GetPercentilesCommandOutput } from "./commands/GetPercentilesCommand";
import type { GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import type { GetPolicyVersionCommandInput, GetPolicyVersionCommandOutput } from "./commands/GetPolicyVersionCommand";
import type {
  GetRegistrationCodeCommandInput,
  GetRegistrationCodeCommandOutput,
} from "./commands/GetRegistrationCodeCommand";
import type { GetStatisticsCommandInput, GetStatisticsCommandOutput } from "./commands/GetStatisticsCommand";
import type {
  GetThingConnectivityDataCommandInput,
  GetThingConnectivityDataCommandOutput,
} from "./commands/GetThingConnectivityDataCommand";
import type { GetTopicRuleCommandInput, GetTopicRuleCommandOutput } from "./commands/GetTopicRuleCommand";
import type {
  GetTopicRuleDestinationCommandInput,
  GetTopicRuleDestinationCommandOutput,
} from "./commands/GetTopicRuleDestinationCommand";
import type {
  GetV2LoggingOptionsCommandInput,
  GetV2LoggingOptionsCommandOutput,
} from "./commands/GetV2LoggingOptionsCommand";
import type {
  ListActiveViolationsCommandInput,
  ListActiveViolationsCommandOutput,
} from "./commands/ListActiveViolationsCommand";
import type {
  ListAttachedPoliciesCommandInput,
  ListAttachedPoliciesCommandOutput,
} from "./commands/ListAttachedPoliciesCommand";
import type {
  ListAuditFindingsCommandInput,
  ListAuditFindingsCommandOutput,
} from "./commands/ListAuditFindingsCommand";
import type {
  ListAuditMitigationActionsExecutionsCommandInput,
  ListAuditMitigationActionsExecutionsCommandOutput,
} from "./commands/ListAuditMitigationActionsExecutionsCommand";
import type {
  ListAuditMitigationActionsTasksCommandInput,
  ListAuditMitigationActionsTasksCommandOutput,
} from "./commands/ListAuditMitigationActionsTasksCommand";
import type {
  ListAuditSuppressionsCommandInput,
  ListAuditSuppressionsCommandOutput,
} from "./commands/ListAuditSuppressionsCommand";
import type { ListAuditTasksCommandInput, ListAuditTasksCommandOutput } from "./commands/ListAuditTasksCommand";
import type { ListAuthorizersCommandInput, ListAuthorizersCommandOutput } from "./commands/ListAuthorizersCommand";
import type {
  ListBillingGroupsCommandInput,
  ListBillingGroupsCommandOutput,
} from "./commands/ListBillingGroupsCommand";
import type {
  ListCACertificatesCommandInput,
  ListCACertificatesCommandOutput,
} from "./commands/ListCACertificatesCommand";
import type {
  ListCertificateProvidersCommandInput,
  ListCertificateProvidersCommandOutput,
} from "./commands/ListCertificateProvidersCommand";
import type {
  ListCertificatesByCACommandInput,
  ListCertificatesByCACommandOutput,
} from "./commands/ListCertificatesByCACommand";
import type { ListCertificatesCommandInput, ListCertificatesCommandOutput } from "./commands/ListCertificatesCommand";
import type {
  ListCommandExecutionsCommandInput,
  ListCommandExecutionsCommandOutput,
} from "./commands/ListCommandExecutionsCommand";
import type { ListCommandsCommandInput, ListCommandsCommandOutput } from "./commands/ListCommandsCommand";
import type {
  ListCustomMetricsCommandInput,
  ListCustomMetricsCommandOutput,
} from "./commands/ListCustomMetricsCommand";
import type {
  ListDetectMitigationActionsExecutionsCommandInput,
  ListDetectMitigationActionsExecutionsCommandOutput,
} from "./commands/ListDetectMitigationActionsExecutionsCommand";
import type {
  ListDetectMitigationActionsTasksCommandInput,
  ListDetectMitigationActionsTasksCommandOutput,
} from "./commands/ListDetectMitigationActionsTasksCommand";
import type { ListDimensionsCommandInput, ListDimensionsCommandOutput } from "./commands/ListDimensionsCommand";
import type {
  ListDomainConfigurationsCommandInput,
  ListDomainConfigurationsCommandOutput,
} from "./commands/ListDomainConfigurationsCommand";
import type { ListFleetMetricsCommandInput, ListFleetMetricsCommandOutput } from "./commands/ListFleetMetricsCommand";
import type { ListIndicesCommandInput, ListIndicesCommandOutput } from "./commands/ListIndicesCommand";
import type {
  ListJobExecutionsForJobCommandInput,
  ListJobExecutionsForJobCommandOutput,
} from "./commands/ListJobExecutionsForJobCommand";
import type {
  ListJobExecutionsForThingCommandInput,
  ListJobExecutionsForThingCommandOutput,
} from "./commands/ListJobExecutionsForThingCommand";
import type { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import type { ListJobTemplatesCommandInput, ListJobTemplatesCommandOutput } from "./commands/ListJobTemplatesCommand";
import type {
  ListManagedJobTemplatesCommandInput,
  ListManagedJobTemplatesCommandOutput,
} from "./commands/ListManagedJobTemplatesCommand";
import type { ListMetricValuesCommandInput, ListMetricValuesCommandOutput } from "./commands/ListMetricValuesCommand";
import type {
  ListMitigationActionsCommandInput,
  ListMitigationActionsCommandOutput,
} from "./commands/ListMitigationActionsCommand";
import type { ListOTAUpdatesCommandInput, ListOTAUpdatesCommandOutput } from "./commands/ListOTAUpdatesCommand";
import type {
  ListOutgoingCertificatesCommandInput,
  ListOutgoingCertificatesCommandOutput,
} from "./commands/ListOutgoingCertificatesCommand";
import type { ListPackagesCommandInput, ListPackagesCommandOutput } from "./commands/ListPackagesCommand";
import type {
  ListPackageVersionsCommandInput,
  ListPackageVersionsCommandOutput,
} from "./commands/ListPackageVersionsCommand";
import type { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "./commands/ListPoliciesCommand";
import type {
  ListPolicyPrincipalsCommandInput,
  ListPolicyPrincipalsCommandOutput,
} from "./commands/ListPolicyPrincipalsCommand";
import type {
  ListPolicyVersionsCommandInput,
  ListPolicyVersionsCommandOutput,
} from "./commands/ListPolicyVersionsCommand";
import type {
  ListPrincipalPoliciesCommandInput,
  ListPrincipalPoliciesCommandOutput,
} from "./commands/ListPrincipalPoliciesCommand";
import type {
  ListPrincipalThingsCommandInput,
  ListPrincipalThingsCommandOutput,
} from "./commands/ListPrincipalThingsCommand";
import type {
  ListPrincipalThingsV2CommandInput,
  ListPrincipalThingsV2CommandOutput,
} from "./commands/ListPrincipalThingsV2Command";
import type {
  ListProvisioningTemplatesCommandInput,
  ListProvisioningTemplatesCommandOutput,
} from "./commands/ListProvisioningTemplatesCommand";
import type {
  ListProvisioningTemplateVersionsCommandInput,
  ListProvisioningTemplateVersionsCommandOutput,
} from "./commands/ListProvisioningTemplateVersionsCommand";
import type {
  ListRelatedResourcesForAuditFindingCommandInput,
  ListRelatedResourcesForAuditFindingCommandOutput,
} from "./commands/ListRelatedResourcesForAuditFindingCommand";
import type { ListRoleAliasesCommandInput, ListRoleAliasesCommandOutput } from "./commands/ListRoleAliasesCommand";
import type {
  ListSbomValidationResultsCommandInput,
  ListSbomValidationResultsCommandOutput,
} from "./commands/ListSbomValidationResultsCommand";
import type {
  ListScheduledAuditsCommandInput,
  ListScheduledAuditsCommandOutput,
} from "./commands/ListScheduledAuditsCommand";
import type {
  ListSecurityProfilesCommandInput,
  ListSecurityProfilesCommandOutput,
} from "./commands/ListSecurityProfilesCommand";
import type {
  ListSecurityProfilesForTargetCommandInput,
  ListSecurityProfilesForTargetCommandOutput,
} from "./commands/ListSecurityProfilesForTargetCommand";
import type { ListStreamsCommandInput, ListStreamsCommandOutput } from "./commands/ListStreamsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ListTargetsForPolicyCommandInput,
  ListTargetsForPolicyCommandOutput,
} from "./commands/ListTargetsForPolicyCommand";
import type {
  ListTargetsForSecurityProfileCommandInput,
  ListTargetsForSecurityProfileCommandOutput,
} from "./commands/ListTargetsForSecurityProfileCommand";
import type { ListThingGroupsCommandInput, ListThingGroupsCommandOutput } from "./commands/ListThingGroupsCommand";
import type {
  ListThingGroupsForThingCommandInput,
  ListThingGroupsForThingCommandOutput,
} from "./commands/ListThingGroupsForThingCommand";
import type {
  ListThingPrincipalsCommandInput,
  ListThingPrincipalsCommandOutput,
} from "./commands/ListThingPrincipalsCommand";
import type {
  ListThingPrincipalsV2CommandInput,
  ListThingPrincipalsV2CommandOutput,
} from "./commands/ListThingPrincipalsV2Command";
import type {
  ListThingRegistrationTaskReportsCommandInput,
  ListThingRegistrationTaskReportsCommandOutput,
} from "./commands/ListThingRegistrationTaskReportsCommand";
import type {
  ListThingRegistrationTasksCommandInput,
  ListThingRegistrationTasksCommandOutput,
} from "./commands/ListThingRegistrationTasksCommand";
import type { ListThingsCommandInput, ListThingsCommandOutput } from "./commands/ListThingsCommand";
import type {
  ListThingsInBillingGroupCommandInput,
  ListThingsInBillingGroupCommandOutput,
} from "./commands/ListThingsInBillingGroupCommand";
import type {
  ListThingsInThingGroupCommandInput,
  ListThingsInThingGroupCommandOutput,
} from "./commands/ListThingsInThingGroupCommand";
import type { ListThingTypesCommandInput, ListThingTypesCommandOutput } from "./commands/ListThingTypesCommand";
import type {
  ListTopicRuleDestinationsCommandInput,
  ListTopicRuleDestinationsCommandOutput,
} from "./commands/ListTopicRuleDestinationsCommand";
import type { ListTopicRulesCommandInput, ListTopicRulesCommandOutput } from "./commands/ListTopicRulesCommand";
import type {
  ListV2LoggingLevelsCommandInput,
  ListV2LoggingLevelsCommandOutput,
} from "./commands/ListV2LoggingLevelsCommand";
import type {
  ListViolationEventsCommandInput,
  ListViolationEventsCommandOutput,
} from "./commands/ListViolationEventsCommand";
import type {
  PutVerificationStateOnViolationCommandInput,
  PutVerificationStateOnViolationCommandOutput,
} from "./commands/PutVerificationStateOnViolationCommand";
import type {
  RegisterCACertificateCommandInput,
  RegisterCACertificateCommandOutput,
} from "./commands/RegisterCACertificateCommand";
import type {
  RegisterCertificateCommandInput,
  RegisterCertificateCommandOutput,
} from "./commands/RegisterCertificateCommand";
import type {
  RegisterCertificateWithoutCACommandInput,
  RegisterCertificateWithoutCACommandOutput,
} from "./commands/RegisterCertificateWithoutCACommand";
import type { RegisterThingCommandInput, RegisterThingCommandOutput } from "./commands/RegisterThingCommand";
import type {
  RejectCertificateTransferCommandInput,
  RejectCertificateTransferCommandOutput,
} from "./commands/RejectCertificateTransferCommand";
import type {
  RemoveThingFromBillingGroupCommandInput,
  RemoveThingFromBillingGroupCommandOutput,
} from "./commands/RemoveThingFromBillingGroupCommand";
import type {
  RemoveThingFromThingGroupCommandInput,
  RemoveThingFromThingGroupCommandOutput,
} from "./commands/RemoveThingFromThingGroupCommand";
import type { ReplaceTopicRuleCommandInput, ReplaceTopicRuleCommandOutput } from "./commands/ReplaceTopicRuleCommand";
import type { SearchIndexCommandInput, SearchIndexCommandOutput } from "./commands/SearchIndexCommand";
import type {
  SetDefaultAuthorizerCommandInput,
  SetDefaultAuthorizerCommandOutput,
} from "./commands/SetDefaultAuthorizerCommand";
import type {
  SetDefaultPolicyVersionCommandInput,
  SetDefaultPolicyVersionCommandOutput,
} from "./commands/SetDefaultPolicyVersionCommand";
import type {
  SetLoggingOptionsCommandInput,
  SetLoggingOptionsCommandOutput,
} from "./commands/SetLoggingOptionsCommand";
import type {
  SetV2LoggingLevelCommandInput,
  SetV2LoggingLevelCommandOutput,
} from "./commands/SetV2LoggingLevelCommand";
import type {
  SetV2LoggingOptionsCommandInput,
  SetV2LoggingOptionsCommandOutput,
} from "./commands/SetV2LoggingOptionsCommand";
import type {
  StartAuditMitigationActionsTaskCommandInput,
  StartAuditMitigationActionsTaskCommandOutput,
} from "./commands/StartAuditMitigationActionsTaskCommand";
import type {
  StartDetectMitigationActionsTaskCommandInput,
  StartDetectMitigationActionsTaskCommandOutput,
} from "./commands/StartDetectMitigationActionsTaskCommand";
import type {
  StartOnDemandAuditTaskCommandInput,
  StartOnDemandAuditTaskCommandOutput,
} from "./commands/StartOnDemandAuditTaskCommand";
import type {
  StartThingRegistrationTaskCommandInput,
  StartThingRegistrationTaskCommandOutput,
} from "./commands/StartThingRegistrationTaskCommand";
import type {
  StopThingRegistrationTaskCommandInput,
  StopThingRegistrationTaskCommandOutput,
} from "./commands/StopThingRegistrationTaskCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type {
  TestAuthorizationCommandInput,
  TestAuthorizationCommandOutput,
} from "./commands/TestAuthorizationCommand";
import type {
  TestInvokeAuthorizerCommandInput,
  TestInvokeAuthorizerCommandOutput,
} from "./commands/TestInvokeAuthorizerCommand";
import type {
  TransferCertificateCommandInput,
  TransferCertificateCommandOutput,
} from "./commands/TransferCertificateCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateAccountAuditConfigurationCommandInput,
  UpdateAccountAuditConfigurationCommandOutput,
} from "./commands/UpdateAccountAuditConfigurationCommand";
import type {
  UpdateAuditSuppressionCommandInput,
  UpdateAuditSuppressionCommandOutput,
} from "./commands/UpdateAuditSuppressionCommand";
import type { UpdateAuthorizerCommandInput, UpdateAuthorizerCommandOutput } from "./commands/UpdateAuthorizerCommand";
import type {
  UpdateBillingGroupCommandInput,
  UpdateBillingGroupCommandOutput,
} from "./commands/UpdateBillingGroupCommand";
import type {
  UpdateCACertificateCommandInput,
  UpdateCACertificateCommandOutput,
} from "./commands/UpdateCACertificateCommand";
import type {
  UpdateCertificateCommandInput,
  UpdateCertificateCommandOutput,
} from "./commands/UpdateCertificateCommand";
import type {
  UpdateCertificateProviderCommandInput,
  UpdateCertificateProviderCommandOutput,
} from "./commands/UpdateCertificateProviderCommand";
import type { UpdateCommandCommandInput, UpdateCommandCommandOutput } from "./commands/UpdateCommandCommand";
import type {
  UpdateCustomMetricCommandInput,
  UpdateCustomMetricCommandOutput,
} from "./commands/UpdateCustomMetricCommand";
import type { UpdateDimensionCommandInput, UpdateDimensionCommandOutput } from "./commands/UpdateDimensionCommand";
import type {
  UpdateDomainConfigurationCommandInput,
  UpdateDomainConfigurationCommandOutput,
} from "./commands/UpdateDomainConfigurationCommand";
import type {
  UpdateDynamicThingGroupCommandInput,
  UpdateDynamicThingGroupCommandOutput,
} from "./commands/UpdateDynamicThingGroupCommand";
import type {
  UpdateEncryptionConfigurationCommandInput,
  UpdateEncryptionConfigurationCommandOutput,
} from "./commands/UpdateEncryptionConfigurationCommand";
import type {
  UpdateEventConfigurationsCommandInput,
  UpdateEventConfigurationsCommandOutput,
} from "./commands/UpdateEventConfigurationsCommand";
import type {
  UpdateFleetMetricCommandInput,
  UpdateFleetMetricCommandOutput,
} from "./commands/UpdateFleetMetricCommand";
import type {
  UpdateIndexingConfigurationCommandInput,
  UpdateIndexingConfigurationCommandOutput,
} from "./commands/UpdateIndexingConfigurationCommand";
import type { UpdateJobCommandInput, UpdateJobCommandOutput } from "./commands/UpdateJobCommand";
import type {
  UpdateMitigationActionCommandInput,
  UpdateMitigationActionCommandOutput,
} from "./commands/UpdateMitigationActionCommand";
import type { UpdatePackageCommandInput, UpdatePackageCommandOutput } from "./commands/UpdatePackageCommand";
import type {
  UpdatePackageConfigurationCommandInput,
  UpdatePackageConfigurationCommandOutput,
} from "./commands/UpdatePackageConfigurationCommand";
import type {
  UpdatePackageVersionCommandInput,
  UpdatePackageVersionCommandOutput,
} from "./commands/UpdatePackageVersionCommand";
import type {
  UpdateProvisioningTemplateCommandInput,
  UpdateProvisioningTemplateCommandOutput,
} from "./commands/UpdateProvisioningTemplateCommand";
import type { UpdateRoleAliasCommandInput, UpdateRoleAliasCommandOutput } from "./commands/UpdateRoleAliasCommand";
import type {
  UpdateScheduledAuditCommandInput,
  UpdateScheduledAuditCommandOutput,
} from "./commands/UpdateScheduledAuditCommand";
import type {
  UpdateSecurityProfileCommandInput,
  UpdateSecurityProfileCommandOutput,
} from "./commands/UpdateSecurityProfileCommand";
import type { UpdateStreamCommandInput, UpdateStreamCommandOutput } from "./commands/UpdateStreamCommand";
import type { UpdateThingCommandInput, UpdateThingCommandOutput } from "./commands/UpdateThingCommand";
import type { UpdateThingGroupCommandInput, UpdateThingGroupCommandOutput } from "./commands/UpdateThingGroupCommand";
import type {
  UpdateThingGroupsForThingCommandInput,
  UpdateThingGroupsForThingCommandOutput,
} from "./commands/UpdateThingGroupsForThingCommand";
import type { UpdateThingTypeCommandInput, UpdateThingTypeCommandOutput } from "./commands/UpdateThingTypeCommand";
import type {
  UpdateTopicRuleDestinationCommandInput,
  UpdateTopicRuleDestinationCommandOutput,
} from "./commands/UpdateTopicRuleDestinationCommand";
import type {
  ValidateSecurityProfileBehaviorsCommandInput,
  ValidateSecurityProfileBehaviorsCommandOutput,
} from "./commands/ValidateSecurityProfileBehaviorsCommand";
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
  | AcceptCertificateTransferCommandInput
  | AddThingToBillingGroupCommandInput
  | AddThingToThingGroupCommandInput
  | AssociateSbomWithPackageVersionCommandInput
  | AssociateTargetsWithJobCommandInput
  | AttachPolicyCommandInput
  | AttachPrincipalPolicyCommandInput
  | AttachSecurityProfileCommandInput
  | AttachThingPrincipalCommandInput
  | CancelAuditMitigationActionsTaskCommandInput
  | CancelAuditTaskCommandInput
  | CancelCertificateTransferCommandInput
  | CancelDetectMitigationActionsTaskCommandInput
  | CancelJobCommandInput
  | CancelJobExecutionCommandInput
  | ClearDefaultAuthorizerCommandInput
  | ConfirmTopicRuleDestinationCommandInput
  | CreateAuditSuppressionCommandInput
  | CreateAuthorizerCommandInput
  | CreateBillingGroupCommandInput
  | CreateCertificateFromCsrCommandInput
  | CreateCertificateProviderCommandInput
  | CreateCommandCommandInput
  | CreateCustomMetricCommandInput
  | CreateDimensionCommandInput
  | CreateDomainConfigurationCommandInput
  | CreateDynamicThingGroupCommandInput
  | CreateFleetMetricCommandInput
  | CreateJobCommandInput
  | CreateJobTemplateCommandInput
  | CreateKeysAndCertificateCommandInput
  | CreateMitigationActionCommandInput
  | CreateOTAUpdateCommandInput
  | CreatePackageCommandInput
  | CreatePackageVersionCommandInput
  | CreatePolicyCommandInput
  | CreatePolicyVersionCommandInput
  | CreateProvisioningClaimCommandInput
  | CreateProvisioningTemplateCommandInput
  | CreateProvisioningTemplateVersionCommandInput
  | CreateRoleAliasCommandInput
  | CreateScheduledAuditCommandInput
  | CreateSecurityProfileCommandInput
  | CreateStreamCommandInput
  | CreateThingCommandInput
  | CreateThingGroupCommandInput
  | CreateThingTypeCommandInput
  | CreateTopicRuleCommandInput
  | CreateTopicRuleDestinationCommandInput
  | DeleteAccountAuditConfigurationCommandInput
  | DeleteAuditSuppressionCommandInput
  | DeleteAuthorizerCommandInput
  | DeleteBillingGroupCommandInput
  | DeleteCACertificateCommandInput
  | DeleteCertificateCommandInput
  | DeleteCertificateProviderCommandInput
  | DeleteCommandCommandInput
  | DeleteCommandExecutionCommandInput
  | DeleteCustomMetricCommandInput
  | DeleteDimensionCommandInput
  | DeleteDomainConfigurationCommandInput
  | DeleteDynamicThingGroupCommandInput
  | DeleteFleetMetricCommandInput
  | DeleteJobCommandInput
  | DeleteJobExecutionCommandInput
  | DeleteJobTemplateCommandInput
  | DeleteMitigationActionCommandInput
  | DeleteOTAUpdateCommandInput
  | DeletePackageCommandInput
  | DeletePackageVersionCommandInput
  | DeletePolicyCommandInput
  | DeletePolicyVersionCommandInput
  | DeleteProvisioningTemplateCommandInput
  | DeleteProvisioningTemplateVersionCommandInput
  | DeleteRegistrationCodeCommandInput
  | DeleteRoleAliasCommandInput
  | DeleteScheduledAuditCommandInput
  | DeleteSecurityProfileCommandInput
  | DeleteStreamCommandInput
  | DeleteThingCommandInput
  | DeleteThingGroupCommandInput
  | DeleteThingTypeCommandInput
  | DeleteTopicRuleCommandInput
  | DeleteTopicRuleDestinationCommandInput
  | DeleteV2LoggingLevelCommandInput
  | DeprecateThingTypeCommandInput
  | DescribeAccountAuditConfigurationCommandInput
  | DescribeAuditFindingCommandInput
  | DescribeAuditMitigationActionsTaskCommandInput
  | DescribeAuditSuppressionCommandInput
  | DescribeAuditTaskCommandInput
  | DescribeAuthorizerCommandInput
  | DescribeBillingGroupCommandInput
  | DescribeCACertificateCommandInput
  | DescribeCertificateCommandInput
  | DescribeCertificateProviderCommandInput
  | DescribeCustomMetricCommandInput
  | DescribeDefaultAuthorizerCommandInput
  | DescribeDetectMitigationActionsTaskCommandInput
  | DescribeDimensionCommandInput
  | DescribeDomainConfigurationCommandInput
  | DescribeEncryptionConfigurationCommandInput
  | DescribeEndpointCommandInput
  | DescribeEventConfigurationsCommandInput
  | DescribeFleetMetricCommandInput
  | DescribeIndexCommandInput
  | DescribeJobCommandInput
  | DescribeJobExecutionCommandInput
  | DescribeJobTemplateCommandInput
  | DescribeManagedJobTemplateCommandInput
  | DescribeMitigationActionCommandInput
  | DescribeProvisioningTemplateCommandInput
  | DescribeProvisioningTemplateVersionCommandInput
  | DescribeRoleAliasCommandInput
  | DescribeScheduledAuditCommandInput
  | DescribeSecurityProfileCommandInput
  | DescribeStreamCommandInput
  | DescribeThingCommandInput
  | DescribeThingGroupCommandInput
  | DescribeThingRegistrationTaskCommandInput
  | DescribeThingTypeCommandInput
  | DetachPolicyCommandInput
  | DetachPrincipalPolicyCommandInput
  | DetachSecurityProfileCommandInput
  | DetachThingPrincipalCommandInput
  | DisableTopicRuleCommandInput
  | DisassociateSbomFromPackageVersionCommandInput
  | EnableTopicRuleCommandInput
  | GetBehaviorModelTrainingSummariesCommandInput
  | GetBucketsAggregationCommandInput
  | GetCardinalityCommandInput
  | GetCommandCommandInput
  | GetCommandExecutionCommandInput
  | GetEffectivePoliciesCommandInput
  | GetIndexingConfigurationCommandInput
  | GetJobDocumentCommandInput
  | GetLoggingOptionsCommandInput
  | GetOTAUpdateCommandInput
  | GetPackageCommandInput
  | GetPackageConfigurationCommandInput
  | GetPackageVersionCommandInput
  | GetPercentilesCommandInput
  | GetPolicyCommandInput
  | GetPolicyVersionCommandInput
  | GetRegistrationCodeCommandInput
  | GetStatisticsCommandInput
  | GetThingConnectivityDataCommandInput
  | GetTopicRuleCommandInput
  | GetTopicRuleDestinationCommandInput
  | GetV2LoggingOptionsCommandInput
  | ListActiveViolationsCommandInput
  | ListAttachedPoliciesCommandInput
  | ListAuditFindingsCommandInput
  | ListAuditMitigationActionsExecutionsCommandInput
  | ListAuditMitigationActionsTasksCommandInput
  | ListAuditSuppressionsCommandInput
  | ListAuditTasksCommandInput
  | ListAuthorizersCommandInput
  | ListBillingGroupsCommandInput
  | ListCACertificatesCommandInput
  | ListCertificateProvidersCommandInput
  | ListCertificatesByCACommandInput
  | ListCertificatesCommandInput
  | ListCommandExecutionsCommandInput
  | ListCommandsCommandInput
  | ListCustomMetricsCommandInput
  | ListDetectMitigationActionsExecutionsCommandInput
  | ListDetectMitigationActionsTasksCommandInput
  | ListDimensionsCommandInput
  | ListDomainConfigurationsCommandInput
  | ListFleetMetricsCommandInput
  | ListIndicesCommandInput
  | ListJobExecutionsForJobCommandInput
  | ListJobExecutionsForThingCommandInput
  | ListJobTemplatesCommandInput
  | ListJobsCommandInput
  | ListManagedJobTemplatesCommandInput
  | ListMetricValuesCommandInput
  | ListMitigationActionsCommandInput
  | ListOTAUpdatesCommandInput
  | ListOutgoingCertificatesCommandInput
  | ListPackageVersionsCommandInput
  | ListPackagesCommandInput
  | ListPoliciesCommandInput
  | ListPolicyPrincipalsCommandInput
  | ListPolicyVersionsCommandInput
  | ListPrincipalPoliciesCommandInput
  | ListPrincipalThingsCommandInput
  | ListPrincipalThingsV2CommandInput
  | ListProvisioningTemplateVersionsCommandInput
  | ListProvisioningTemplatesCommandInput
  | ListRelatedResourcesForAuditFindingCommandInput
  | ListRoleAliasesCommandInput
  | ListSbomValidationResultsCommandInput
  | ListScheduledAuditsCommandInput
  | ListSecurityProfilesCommandInput
  | ListSecurityProfilesForTargetCommandInput
  | ListStreamsCommandInput
  | ListTagsForResourceCommandInput
  | ListTargetsForPolicyCommandInput
  | ListTargetsForSecurityProfileCommandInput
  | ListThingGroupsCommandInput
  | ListThingGroupsForThingCommandInput
  | ListThingPrincipalsCommandInput
  | ListThingPrincipalsV2CommandInput
  | ListThingRegistrationTaskReportsCommandInput
  | ListThingRegistrationTasksCommandInput
  | ListThingTypesCommandInput
  | ListThingsCommandInput
  | ListThingsInBillingGroupCommandInput
  | ListThingsInThingGroupCommandInput
  | ListTopicRuleDestinationsCommandInput
  | ListTopicRulesCommandInput
  | ListV2LoggingLevelsCommandInput
  | ListViolationEventsCommandInput
  | PutVerificationStateOnViolationCommandInput
  | RegisterCACertificateCommandInput
  | RegisterCertificateCommandInput
  | RegisterCertificateWithoutCACommandInput
  | RegisterThingCommandInput
  | RejectCertificateTransferCommandInput
  | RemoveThingFromBillingGroupCommandInput
  | RemoveThingFromThingGroupCommandInput
  | ReplaceTopicRuleCommandInput
  | SearchIndexCommandInput
  | SetDefaultAuthorizerCommandInput
  | SetDefaultPolicyVersionCommandInput
  | SetLoggingOptionsCommandInput
  | SetV2LoggingLevelCommandInput
  | SetV2LoggingOptionsCommandInput
  | StartAuditMitigationActionsTaskCommandInput
  | StartDetectMitigationActionsTaskCommandInput
  | StartOnDemandAuditTaskCommandInput
  | StartThingRegistrationTaskCommandInput
  | StopThingRegistrationTaskCommandInput
  | TagResourceCommandInput
  | TestAuthorizationCommandInput
  | TestInvokeAuthorizerCommandInput
  | TransferCertificateCommandInput
  | UntagResourceCommandInput
  | UpdateAccountAuditConfigurationCommandInput
  | UpdateAuditSuppressionCommandInput
  | UpdateAuthorizerCommandInput
  | UpdateBillingGroupCommandInput
  | UpdateCACertificateCommandInput
  | UpdateCertificateCommandInput
  | UpdateCertificateProviderCommandInput
  | UpdateCommandCommandInput
  | UpdateCustomMetricCommandInput
  | UpdateDimensionCommandInput
  | UpdateDomainConfigurationCommandInput
  | UpdateDynamicThingGroupCommandInput
  | UpdateEncryptionConfigurationCommandInput
  | UpdateEventConfigurationsCommandInput
  | UpdateFleetMetricCommandInput
  | UpdateIndexingConfigurationCommandInput
  | UpdateJobCommandInput
  | UpdateMitigationActionCommandInput
  | UpdatePackageCommandInput
  | UpdatePackageConfigurationCommandInput
  | UpdatePackageVersionCommandInput
  | UpdateProvisioningTemplateCommandInput
  | UpdateRoleAliasCommandInput
  | UpdateScheduledAuditCommandInput
  | UpdateSecurityProfileCommandInput
  | UpdateStreamCommandInput
  | UpdateThingCommandInput
  | UpdateThingGroupCommandInput
  | UpdateThingGroupsForThingCommandInput
  | UpdateThingTypeCommandInput
  | UpdateTopicRuleDestinationCommandInput
  | ValidateSecurityProfileBehaviorsCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptCertificateTransferCommandOutput
  | AddThingToBillingGroupCommandOutput
  | AddThingToThingGroupCommandOutput
  | AssociateSbomWithPackageVersionCommandOutput
  | AssociateTargetsWithJobCommandOutput
  | AttachPolicyCommandOutput
  | AttachPrincipalPolicyCommandOutput
  | AttachSecurityProfileCommandOutput
  | AttachThingPrincipalCommandOutput
  | CancelAuditMitigationActionsTaskCommandOutput
  | CancelAuditTaskCommandOutput
  | CancelCertificateTransferCommandOutput
  | CancelDetectMitigationActionsTaskCommandOutput
  | CancelJobCommandOutput
  | CancelJobExecutionCommandOutput
  | ClearDefaultAuthorizerCommandOutput
  | ConfirmTopicRuleDestinationCommandOutput
  | CreateAuditSuppressionCommandOutput
  | CreateAuthorizerCommandOutput
  | CreateBillingGroupCommandOutput
  | CreateCertificateFromCsrCommandOutput
  | CreateCertificateProviderCommandOutput
  | CreateCommandCommandOutput
  | CreateCustomMetricCommandOutput
  | CreateDimensionCommandOutput
  | CreateDomainConfigurationCommandOutput
  | CreateDynamicThingGroupCommandOutput
  | CreateFleetMetricCommandOutput
  | CreateJobCommandOutput
  | CreateJobTemplateCommandOutput
  | CreateKeysAndCertificateCommandOutput
  | CreateMitigationActionCommandOutput
  | CreateOTAUpdateCommandOutput
  | CreatePackageCommandOutput
  | CreatePackageVersionCommandOutput
  | CreatePolicyCommandOutput
  | CreatePolicyVersionCommandOutput
  | CreateProvisioningClaimCommandOutput
  | CreateProvisioningTemplateCommandOutput
  | CreateProvisioningTemplateVersionCommandOutput
  | CreateRoleAliasCommandOutput
  | CreateScheduledAuditCommandOutput
  | CreateSecurityProfileCommandOutput
  | CreateStreamCommandOutput
  | CreateThingCommandOutput
  | CreateThingGroupCommandOutput
  | CreateThingTypeCommandOutput
  | CreateTopicRuleCommandOutput
  | CreateTopicRuleDestinationCommandOutput
  | DeleteAccountAuditConfigurationCommandOutput
  | DeleteAuditSuppressionCommandOutput
  | DeleteAuthorizerCommandOutput
  | DeleteBillingGroupCommandOutput
  | DeleteCACertificateCommandOutput
  | DeleteCertificateCommandOutput
  | DeleteCertificateProviderCommandOutput
  | DeleteCommandCommandOutput
  | DeleteCommandExecutionCommandOutput
  | DeleteCustomMetricCommandOutput
  | DeleteDimensionCommandOutput
  | DeleteDomainConfigurationCommandOutput
  | DeleteDynamicThingGroupCommandOutput
  | DeleteFleetMetricCommandOutput
  | DeleteJobCommandOutput
  | DeleteJobExecutionCommandOutput
  | DeleteJobTemplateCommandOutput
  | DeleteMitigationActionCommandOutput
  | DeleteOTAUpdateCommandOutput
  | DeletePackageCommandOutput
  | DeletePackageVersionCommandOutput
  | DeletePolicyCommandOutput
  | DeletePolicyVersionCommandOutput
  | DeleteProvisioningTemplateCommandOutput
  | DeleteProvisioningTemplateVersionCommandOutput
  | DeleteRegistrationCodeCommandOutput
  | DeleteRoleAliasCommandOutput
  | DeleteScheduledAuditCommandOutput
  | DeleteSecurityProfileCommandOutput
  | DeleteStreamCommandOutput
  | DeleteThingCommandOutput
  | DeleteThingGroupCommandOutput
  | DeleteThingTypeCommandOutput
  | DeleteTopicRuleCommandOutput
  | DeleteTopicRuleDestinationCommandOutput
  | DeleteV2LoggingLevelCommandOutput
  | DeprecateThingTypeCommandOutput
  | DescribeAccountAuditConfigurationCommandOutput
  | DescribeAuditFindingCommandOutput
  | DescribeAuditMitigationActionsTaskCommandOutput
  | DescribeAuditSuppressionCommandOutput
  | DescribeAuditTaskCommandOutput
  | DescribeAuthorizerCommandOutput
  | DescribeBillingGroupCommandOutput
  | DescribeCACertificateCommandOutput
  | DescribeCertificateCommandOutput
  | DescribeCertificateProviderCommandOutput
  | DescribeCustomMetricCommandOutput
  | DescribeDefaultAuthorizerCommandOutput
  | DescribeDetectMitigationActionsTaskCommandOutput
  | DescribeDimensionCommandOutput
  | DescribeDomainConfigurationCommandOutput
  | DescribeEncryptionConfigurationCommandOutput
  | DescribeEndpointCommandOutput
  | DescribeEventConfigurationsCommandOutput
  | DescribeFleetMetricCommandOutput
  | DescribeIndexCommandOutput
  | DescribeJobCommandOutput
  | DescribeJobExecutionCommandOutput
  | DescribeJobTemplateCommandOutput
  | DescribeManagedJobTemplateCommandOutput
  | DescribeMitigationActionCommandOutput
  | DescribeProvisioningTemplateCommandOutput
  | DescribeProvisioningTemplateVersionCommandOutput
  | DescribeRoleAliasCommandOutput
  | DescribeScheduledAuditCommandOutput
  | DescribeSecurityProfileCommandOutput
  | DescribeStreamCommandOutput
  | DescribeThingCommandOutput
  | DescribeThingGroupCommandOutput
  | DescribeThingRegistrationTaskCommandOutput
  | DescribeThingTypeCommandOutput
  | DetachPolicyCommandOutput
  | DetachPrincipalPolicyCommandOutput
  | DetachSecurityProfileCommandOutput
  | DetachThingPrincipalCommandOutput
  | DisableTopicRuleCommandOutput
  | DisassociateSbomFromPackageVersionCommandOutput
  | EnableTopicRuleCommandOutput
  | GetBehaviorModelTrainingSummariesCommandOutput
  | GetBucketsAggregationCommandOutput
  | GetCardinalityCommandOutput
  | GetCommandCommandOutput
  | GetCommandExecutionCommandOutput
  | GetEffectivePoliciesCommandOutput
  | GetIndexingConfigurationCommandOutput
  | GetJobDocumentCommandOutput
  | GetLoggingOptionsCommandOutput
  | GetOTAUpdateCommandOutput
  | GetPackageCommandOutput
  | GetPackageConfigurationCommandOutput
  | GetPackageVersionCommandOutput
  | GetPercentilesCommandOutput
  | GetPolicyCommandOutput
  | GetPolicyVersionCommandOutput
  | GetRegistrationCodeCommandOutput
  | GetStatisticsCommandOutput
  | GetThingConnectivityDataCommandOutput
  | GetTopicRuleCommandOutput
  | GetTopicRuleDestinationCommandOutput
  | GetV2LoggingOptionsCommandOutput
  | ListActiveViolationsCommandOutput
  | ListAttachedPoliciesCommandOutput
  | ListAuditFindingsCommandOutput
  | ListAuditMitigationActionsExecutionsCommandOutput
  | ListAuditMitigationActionsTasksCommandOutput
  | ListAuditSuppressionsCommandOutput
  | ListAuditTasksCommandOutput
  | ListAuthorizersCommandOutput
  | ListBillingGroupsCommandOutput
  | ListCACertificatesCommandOutput
  | ListCertificateProvidersCommandOutput
  | ListCertificatesByCACommandOutput
  | ListCertificatesCommandOutput
  | ListCommandExecutionsCommandOutput
  | ListCommandsCommandOutput
  | ListCustomMetricsCommandOutput
  | ListDetectMitigationActionsExecutionsCommandOutput
  | ListDetectMitigationActionsTasksCommandOutput
  | ListDimensionsCommandOutput
  | ListDomainConfigurationsCommandOutput
  | ListFleetMetricsCommandOutput
  | ListIndicesCommandOutput
  | ListJobExecutionsForJobCommandOutput
  | ListJobExecutionsForThingCommandOutput
  | ListJobTemplatesCommandOutput
  | ListJobsCommandOutput
  | ListManagedJobTemplatesCommandOutput
  | ListMetricValuesCommandOutput
  | ListMitigationActionsCommandOutput
  | ListOTAUpdatesCommandOutput
  | ListOutgoingCertificatesCommandOutput
  | ListPackageVersionsCommandOutput
  | ListPackagesCommandOutput
  | ListPoliciesCommandOutput
  | ListPolicyPrincipalsCommandOutput
  | ListPolicyVersionsCommandOutput
  | ListPrincipalPoliciesCommandOutput
  | ListPrincipalThingsCommandOutput
  | ListPrincipalThingsV2CommandOutput
  | ListProvisioningTemplateVersionsCommandOutput
  | ListProvisioningTemplatesCommandOutput
  | ListRelatedResourcesForAuditFindingCommandOutput
  | ListRoleAliasesCommandOutput
  | ListSbomValidationResultsCommandOutput
  | ListScheduledAuditsCommandOutput
  | ListSecurityProfilesCommandOutput
  | ListSecurityProfilesForTargetCommandOutput
  | ListStreamsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTargetsForPolicyCommandOutput
  | ListTargetsForSecurityProfileCommandOutput
  | ListThingGroupsCommandOutput
  | ListThingGroupsForThingCommandOutput
  | ListThingPrincipalsCommandOutput
  | ListThingPrincipalsV2CommandOutput
  | ListThingRegistrationTaskReportsCommandOutput
  | ListThingRegistrationTasksCommandOutput
  | ListThingTypesCommandOutput
  | ListThingsCommandOutput
  | ListThingsInBillingGroupCommandOutput
  | ListThingsInThingGroupCommandOutput
  | ListTopicRuleDestinationsCommandOutput
  | ListTopicRulesCommandOutput
  | ListV2LoggingLevelsCommandOutput
  | ListViolationEventsCommandOutput
  | PutVerificationStateOnViolationCommandOutput
  | RegisterCACertificateCommandOutput
  | RegisterCertificateCommandOutput
  | RegisterCertificateWithoutCACommandOutput
  | RegisterThingCommandOutput
  | RejectCertificateTransferCommandOutput
  | RemoveThingFromBillingGroupCommandOutput
  | RemoveThingFromThingGroupCommandOutput
  | ReplaceTopicRuleCommandOutput
  | SearchIndexCommandOutput
  | SetDefaultAuthorizerCommandOutput
  | SetDefaultPolicyVersionCommandOutput
  | SetLoggingOptionsCommandOutput
  | SetV2LoggingLevelCommandOutput
  | SetV2LoggingOptionsCommandOutput
  | StartAuditMitigationActionsTaskCommandOutput
  | StartDetectMitigationActionsTaskCommandOutput
  | StartOnDemandAuditTaskCommandOutput
  | StartThingRegistrationTaskCommandOutput
  | StopThingRegistrationTaskCommandOutput
  | TagResourceCommandOutput
  | TestAuthorizationCommandOutput
  | TestInvokeAuthorizerCommandOutput
  | TransferCertificateCommandOutput
  | UntagResourceCommandOutput
  | UpdateAccountAuditConfigurationCommandOutput
  | UpdateAuditSuppressionCommandOutput
  | UpdateAuthorizerCommandOutput
  | UpdateBillingGroupCommandOutput
  | UpdateCACertificateCommandOutput
  | UpdateCertificateCommandOutput
  | UpdateCertificateProviderCommandOutput
  | UpdateCommandCommandOutput
  | UpdateCustomMetricCommandOutput
  | UpdateDimensionCommandOutput
  | UpdateDomainConfigurationCommandOutput
  | UpdateDynamicThingGroupCommandOutput
  | UpdateEncryptionConfigurationCommandOutput
  | UpdateEventConfigurationsCommandOutput
  | UpdateFleetMetricCommandOutput
  | UpdateIndexingConfigurationCommandOutput
  | UpdateJobCommandOutput
  | UpdateMitigationActionCommandOutput
  | UpdatePackageCommandOutput
  | UpdatePackageConfigurationCommandOutput
  | UpdatePackageVersionCommandOutput
  | UpdateProvisioningTemplateCommandOutput
  | UpdateRoleAliasCommandOutput
  | UpdateScheduledAuditCommandOutput
  | UpdateSecurityProfileCommandOutput
  | UpdateStreamCommandOutput
  | UpdateThingCommandOutput
  | UpdateThingGroupCommandOutput
  | UpdateThingGroupsForThingCommandOutput
  | UpdateThingTypeCommandOutput
  | UpdateTopicRuleDestinationCommandOutput
  | ValidateSecurityProfileBehaviorsCommandOutput;

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
export type IoTClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of IoTClient class constructor that set the region, credentials and other options.
 */
export interface IoTClientConfig extends IoTClientConfigType {}

/**
 * @public
 */
export type IoTClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of IoTClient class. This is resolved and normalized from the {@link IoTClientConfig | constructor configuration interface}.
 */
export interface IoTClientResolvedConfig extends IoTClientResolvedConfigType {}

/**
 * <fullname>IoT</fullname>
 *          <p>IoT provides secure, bi-directional communication between Internet-connected
 *          devices (such as sensors, actuators, embedded devices, or smart appliances) and the Amazon Web Services
 *          cloud. You can discover your custom IoT-Data endpoint to communicate with, configure
 *          rules for data processing and integration with other services, organize resources
 *          associated with each device (Registry), configure logging, and create and manage
 *          policies and credentials to authenticate devices.</p>
 *          <p>The service endpoints that expose this API are listed in
 *          <a href="https://docs.aws.amazon.com/general/latest/gr/iot-core.html">Amazon Web Services IoT Core Endpoints and Quotas</a>.
 *          You must use the endpoint for the region that has the resources you want to access.</p>
 *          <p>The service name used by <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Amazon Web Services
 *          Signature Version 4</a> to sign the request is:
 *          <i>execute-api</i>.</p>
 *          <p>For more information about how IoT works, see the <a href="https://docs.aws.amazon.com/iot/latest/developerguide/aws-iot-how-it-works.html">Developer
 *          Guide</a>.</p>
 *          <p>For information about how to use the credentials provider for IoT, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/authorizing-direct-aws.html">Authorizing Direct Calls to Amazon Web Services Services</a>.</p>
 * @public
 */
export class IoTClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  IoTClientResolvedConfig
> {
  /**
   * The resolved configuration of IoTClient class. This is resolved and normalized from the {@link IoTClientConfig | constructor configuration interface}.
   */
  readonly config: IoTClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<IoTClientConfig>) {
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
    this.middlewareStack.use(getOmitRetryHeadersPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultIoTHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: IoTClientResolvedConfig) =>
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
