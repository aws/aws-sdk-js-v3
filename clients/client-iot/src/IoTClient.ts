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
import {
  type BodyLengthCalculator as __BodyLengthCalculator,
  type CheckOptionalClientConfig as __CheckOptionalClientConfig,
  type ChecksumConstructor as __ChecksumConstructor,
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
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
  defaultIoTHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AcceptCertificateTransferCommandInput,
  AcceptCertificateTransferCommandOutput,
} from "./commands/AcceptCertificateTransferCommand";
import {
  AddThingToBillingGroupCommandInput,
  AddThingToBillingGroupCommandOutput,
} from "./commands/AddThingToBillingGroupCommand";
import {
  AddThingToThingGroupCommandInput,
  AddThingToThingGroupCommandOutput,
} from "./commands/AddThingToThingGroupCommand";
import {
  AssociateSbomWithPackageVersionCommandInput,
  AssociateSbomWithPackageVersionCommandOutput,
} from "./commands/AssociateSbomWithPackageVersionCommand";
import {
  AssociateTargetsWithJobCommandInput,
  AssociateTargetsWithJobCommandOutput,
} from "./commands/AssociateTargetsWithJobCommand";
import { AttachPolicyCommandInput, AttachPolicyCommandOutput } from "./commands/AttachPolicyCommand";
import {
  AttachPrincipalPolicyCommandInput,
  AttachPrincipalPolicyCommandOutput,
} from "./commands/AttachPrincipalPolicyCommand";
import {
  AttachSecurityProfileCommandInput,
  AttachSecurityProfileCommandOutput,
} from "./commands/AttachSecurityProfileCommand";
import {
  AttachThingPrincipalCommandInput,
  AttachThingPrincipalCommandOutput,
} from "./commands/AttachThingPrincipalCommand";
import {
  CancelAuditMitigationActionsTaskCommandInput,
  CancelAuditMitigationActionsTaskCommandOutput,
} from "./commands/CancelAuditMitigationActionsTaskCommand";
import { CancelAuditTaskCommandInput, CancelAuditTaskCommandOutput } from "./commands/CancelAuditTaskCommand";
import {
  CancelCertificateTransferCommandInput,
  CancelCertificateTransferCommandOutput,
} from "./commands/CancelCertificateTransferCommand";
import {
  CancelDetectMitigationActionsTaskCommandInput,
  CancelDetectMitigationActionsTaskCommandOutput,
} from "./commands/CancelDetectMitigationActionsTaskCommand";
import { CancelJobCommandInput, CancelJobCommandOutput } from "./commands/CancelJobCommand";
import { CancelJobExecutionCommandInput, CancelJobExecutionCommandOutput } from "./commands/CancelJobExecutionCommand";
import {
  ClearDefaultAuthorizerCommandInput,
  ClearDefaultAuthorizerCommandOutput,
} from "./commands/ClearDefaultAuthorizerCommand";
import {
  ConfirmTopicRuleDestinationCommandInput,
  ConfirmTopicRuleDestinationCommandOutput,
} from "./commands/ConfirmTopicRuleDestinationCommand";
import {
  CreateAuditSuppressionCommandInput,
  CreateAuditSuppressionCommandOutput,
} from "./commands/CreateAuditSuppressionCommand";
import { CreateAuthorizerCommandInput, CreateAuthorizerCommandOutput } from "./commands/CreateAuthorizerCommand";
import { CreateBillingGroupCommandInput, CreateBillingGroupCommandOutput } from "./commands/CreateBillingGroupCommand";
import {
  CreateCertificateFromCsrCommandInput,
  CreateCertificateFromCsrCommandOutput,
} from "./commands/CreateCertificateFromCsrCommand";
import {
  CreateCertificateProviderCommandInput,
  CreateCertificateProviderCommandOutput,
} from "./commands/CreateCertificateProviderCommand";
import { CreateCommandCommandInput, CreateCommandCommandOutput } from "./commands/CreateCommandCommand";
import { CreateCustomMetricCommandInput, CreateCustomMetricCommandOutput } from "./commands/CreateCustomMetricCommand";
import { CreateDimensionCommandInput, CreateDimensionCommandOutput } from "./commands/CreateDimensionCommand";
import {
  CreateDomainConfigurationCommandInput,
  CreateDomainConfigurationCommandOutput,
} from "./commands/CreateDomainConfigurationCommand";
import {
  CreateDynamicThingGroupCommandInput,
  CreateDynamicThingGroupCommandOutput,
} from "./commands/CreateDynamicThingGroupCommand";
import { CreateFleetMetricCommandInput, CreateFleetMetricCommandOutput } from "./commands/CreateFleetMetricCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import { CreateJobTemplateCommandInput, CreateJobTemplateCommandOutput } from "./commands/CreateJobTemplateCommand";
import {
  CreateKeysAndCertificateCommandInput,
  CreateKeysAndCertificateCommandOutput,
} from "./commands/CreateKeysAndCertificateCommand";
import {
  CreateMitigationActionCommandInput,
  CreateMitigationActionCommandOutput,
} from "./commands/CreateMitigationActionCommand";
import { CreateOTAUpdateCommandInput, CreateOTAUpdateCommandOutput } from "./commands/CreateOTAUpdateCommand";
import { CreatePackageCommandInput, CreatePackageCommandOutput } from "./commands/CreatePackageCommand";
import {
  CreatePackageVersionCommandInput,
  CreatePackageVersionCommandOutput,
} from "./commands/CreatePackageVersionCommand";
import { CreatePolicyCommandInput, CreatePolicyCommandOutput } from "./commands/CreatePolicyCommand";
import {
  CreatePolicyVersionCommandInput,
  CreatePolicyVersionCommandOutput,
} from "./commands/CreatePolicyVersionCommand";
import {
  CreateProvisioningClaimCommandInput,
  CreateProvisioningClaimCommandOutput,
} from "./commands/CreateProvisioningClaimCommand";
import {
  CreateProvisioningTemplateCommandInput,
  CreateProvisioningTemplateCommandOutput,
} from "./commands/CreateProvisioningTemplateCommand";
import {
  CreateProvisioningTemplateVersionCommandInput,
  CreateProvisioningTemplateVersionCommandOutput,
} from "./commands/CreateProvisioningTemplateVersionCommand";
import { CreateRoleAliasCommandInput, CreateRoleAliasCommandOutput } from "./commands/CreateRoleAliasCommand";
import {
  CreateScheduledAuditCommandInput,
  CreateScheduledAuditCommandOutput,
} from "./commands/CreateScheduledAuditCommand";
import {
  CreateSecurityProfileCommandInput,
  CreateSecurityProfileCommandOutput,
} from "./commands/CreateSecurityProfileCommand";
import { CreateStreamCommandInput, CreateStreamCommandOutput } from "./commands/CreateStreamCommand";
import { CreateThingCommandInput, CreateThingCommandOutput } from "./commands/CreateThingCommand";
import { CreateThingGroupCommandInput, CreateThingGroupCommandOutput } from "./commands/CreateThingGroupCommand";
import { CreateThingTypeCommandInput, CreateThingTypeCommandOutput } from "./commands/CreateThingTypeCommand";
import { CreateTopicRuleCommandInput, CreateTopicRuleCommandOutput } from "./commands/CreateTopicRuleCommand";
import {
  CreateTopicRuleDestinationCommandInput,
  CreateTopicRuleDestinationCommandOutput,
} from "./commands/CreateTopicRuleDestinationCommand";
import {
  DeleteAccountAuditConfigurationCommandInput,
  DeleteAccountAuditConfigurationCommandOutput,
} from "./commands/DeleteAccountAuditConfigurationCommand";
import {
  DeleteAuditSuppressionCommandInput,
  DeleteAuditSuppressionCommandOutput,
} from "./commands/DeleteAuditSuppressionCommand";
import { DeleteAuthorizerCommandInput, DeleteAuthorizerCommandOutput } from "./commands/DeleteAuthorizerCommand";
import { DeleteBillingGroupCommandInput, DeleteBillingGroupCommandOutput } from "./commands/DeleteBillingGroupCommand";
import {
  DeleteCACertificateCommandInput,
  DeleteCACertificateCommandOutput,
} from "./commands/DeleteCACertificateCommand";
import { DeleteCertificateCommandInput, DeleteCertificateCommandOutput } from "./commands/DeleteCertificateCommand";
import {
  DeleteCertificateProviderCommandInput,
  DeleteCertificateProviderCommandOutput,
} from "./commands/DeleteCertificateProviderCommand";
import { DeleteCommandCommandInput, DeleteCommandCommandOutput } from "./commands/DeleteCommandCommand";
import {
  DeleteCommandExecutionCommandInput,
  DeleteCommandExecutionCommandOutput,
} from "./commands/DeleteCommandExecutionCommand";
import { DeleteCustomMetricCommandInput, DeleteCustomMetricCommandOutput } from "./commands/DeleteCustomMetricCommand";
import { DeleteDimensionCommandInput, DeleteDimensionCommandOutput } from "./commands/DeleteDimensionCommand";
import {
  DeleteDomainConfigurationCommandInput,
  DeleteDomainConfigurationCommandOutput,
} from "./commands/DeleteDomainConfigurationCommand";
import {
  DeleteDynamicThingGroupCommandInput,
  DeleteDynamicThingGroupCommandOutput,
} from "./commands/DeleteDynamicThingGroupCommand";
import { DeleteFleetMetricCommandInput, DeleteFleetMetricCommandOutput } from "./commands/DeleteFleetMetricCommand";
import { DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand";
import { DeleteJobExecutionCommandInput, DeleteJobExecutionCommandOutput } from "./commands/DeleteJobExecutionCommand";
import { DeleteJobTemplateCommandInput, DeleteJobTemplateCommandOutput } from "./commands/DeleteJobTemplateCommand";
import {
  DeleteMitigationActionCommandInput,
  DeleteMitigationActionCommandOutput,
} from "./commands/DeleteMitigationActionCommand";
import { DeleteOTAUpdateCommandInput, DeleteOTAUpdateCommandOutput } from "./commands/DeleteOTAUpdateCommand";
import { DeletePackageCommandInput, DeletePackageCommandOutput } from "./commands/DeletePackageCommand";
import {
  DeletePackageVersionCommandInput,
  DeletePackageVersionCommandOutput,
} from "./commands/DeletePackageVersionCommand";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "./commands/DeletePolicyCommand";
import {
  DeletePolicyVersionCommandInput,
  DeletePolicyVersionCommandOutput,
} from "./commands/DeletePolicyVersionCommand";
import {
  DeleteProvisioningTemplateCommandInput,
  DeleteProvisioningTemplateCommandOutput,
} from "./commands/DeleteProvisioningTemplateCommand";
import {
  DeleteProvisioningTemplateVersionCommandInput,
  DeleteProvisioningTemplateVersionCommandOutput,
} from "./commands/DeleteProvisioningTemplateVersionCommand";
import {
  DeleteRegistrationCodeCommandInput,
  DeleteRegistrationCodeCommandOutput,
} from "./commands/DeleteRegistrationCodeCommand";
import { DeleteRoleAliasCommandInput, DeleteRoleAliasCommandOutput } from "./commands/DeleteRoleAliasCommand";
import {
  DeleteScheduledAuditCommandInput,
  DeleteScheduledAuditCommandOutput,
} from "./commands/DeleteScheduledAuditCommand";
import {
  DeleteSecurityProfileCommandInput,
  DeleteSecurityProfileCommandOutput,
} from "./commands/DeleteSecurityProfileCommand";
import { DeleteStreamCommandInput, DeleteStreamCommandOutput } from "./commands/DeleteStreamCommand";
import { DeleteThingCommandInput, DeleteThingCommandOutput } from "./commands/DeleteThingCommand";
import { DeleteThingGroupCommandInput, DeleteThingGroupCommandOutput } from "./commands/DeleteThingGroupCommand";
import { DeleteThingTypeCommandInput, DeleteThingTypeCommandOutput } from "./commands/DeleteThingTypeCommand";
import { DeleteTopicRuleCommandInput, DeleteTopicRuleCommandOutput } from "./commands/DeleteTopicRuleCommand";
import {
  DeleteTopicRuleDestinationCommandInput,
  DeleteTopicRuleDestinationCommandOutput,
} from "./commands/DeleteTopicRuleDestinationCommand";
import {
  DeleteV2LoggingLevelCommandInput,
  DeleteV2LoggingLevelCommandOutput,
} from "./commands/DeleteV2LoggingLevelCommand";
import { DeprecateThingTypeCommandInput, DeprecateThingTypeCommandOutput } from "./commands/DeprecateThingTypeCommand";
import {
  DescribeAccountAuditConfigurationCommandInput,
  DescribeAccountAuditConfigurationCommandOutput,
} from "./commands/DescribeAccountAuditConfigurationCommand";
import {
  DescribeAuditFindingCommandInput,
  DescribeAuditFindingCommandOutput,
} from "./commands/DescribeAuditFindingCommand";
import {
  DescribeAuditMitigationActionsTaskCommandInput,
  DescribeAuditMitigationActionsTaskCommandOutput,
} from "./commands/DescribeAuditMitigationActionsTaskCommand";
import {
  DescribeAuditSuppressionCommandInput,
  DescribeAuditSuppressionCommandOutput,
} from "./commands/DescribeAuditSuppressionCommand";
import { DescribeAuditTaskCommandInput, DescribeAuditTaskCommandOutput } from "./commands/DescribeAuditTaskCommand";
import { DescribeAuthorizerCommandInput, DescribeAuthorizerCommandOutput } from "./commands/DescribeAuthorizerCommand";
import {
  DescribeBillingGroupCommandInput,
  DescribeBillingGroupCommandOutput,
} from "./commands/DescribeBillingGroupCommand";
import {
  DescribeCACertificateCommandInput,
  DescribeCACertificateCommandOutput,
} from "./commands/DescribeCACertificateCommand";
import {
  DescribeCertificateCommandInput,
  DescribeCertificateCommandOutput,
} from "./commands/DescribeCertificateCommand";
import {
  DescribeCertificateProviderCommandInput,
  DescribeCertificateProviderCommandOutput,
} from "./commands/DescribeCertificateProviderCommand";
import {
  DescribeCustomMetricCommandInput,
  DescribeCustomMetricCommandOutput,
} from "./commands/DescribeCustomMetricCommand";
import {
  DescribeDefaultAuthorizerCommandInput,
  DescribeDefaultAuthorizerCommandOutput,
} from "./commands/DescribeDefaultAuthorizerCommand";
import {
  DescribeDetectMitigationActionsTaskCommandInput,
  DescribeDetectMitigationActionsTaskCommandOutput,
} from "./commands/DescribeDetectMitigationActionsTaskCommand";
import { DescribeDimensionCommandInput, DescribeDimensionCommandOutput } from "./commands/DescribeDimensionCommand";
import {
  DescribeDomainConfigurationCommandInput,
  DescribeDomainConfigurationCommandOutput,
} from "./commands/DescribeDomainConfigurationCommand";
import {
  DescribeEncryptionConfigurationCommandInput,
  DescribeEncryptionConfigurationCommandOutput,
} from "./commands/DescribeEncryptionConfigurationCommand";
import { DescribeEndpointCommandInput, DescribeEndpointCommandOutput } from "./commands/DescribeEndpointCommand";
import {
  DescribeEventConfigurationsCommandInput,
  DescribeEventConfigurationsCommandOutput,
} from "./commands/DescribeEventConfigurationsCommand";
import {
  DescribeFleetMetricCommandInput,
  DescribeFleetMetricCommandOutput,
} from "./commands/DescribeFleetMetricCommand";
import { DescribeIndexCommandInput, DescribeIndexCommandOutput } from "./commands/DescribeIndexCommand";
import { DescribeJobCommandInput, DescribeJobCommandOutput } from "./commands/DescribeJobCommand";
import {
  DescribeJobExecutionCommandInput,
  DescribeJobExecutionCommandOutput,
} from "./commands/DescribeJobExecutionCommand";
import {
  DescribeJobTemplateCommandInput,
  DescribeJobTemplateCommandOutput,
} from "./commands/DescribeJobTemplateCommand";
import {
  DescribeManagedJobTemplateCommandInput,
  DescribeManagedJobTemplateCommandOutput,
} from "./commands/DescribeManagedJobTemplateCommand";
import {
  DescribeMitigationActionCommandInput,
  DescribeMitigationActionCommandOutput,
} from "./commands/DescribeMitigationActionCommand";
import {
  DescribeProvisioningTemplateCommandInput,
  DescribeProvisioningTemplateCommandOutput,
} from "./commands/DescribeProvisioningTemplateCommand";
import {
  DescribeProvisioningTemplateVersionCommandInput,
  DescribeProvisioningTemplateVersionCommandOutput,
} from "./commands/DescribeProvisioningTemplateVersionCommand";
import { DescribeRoleAliasCommandInput, DescribeRoleAliasCommandOutput } from "./commands/DescribeRoleAliasCommand";
import {
  DescribeScheduledAuditCommandInput,
  DescribeScheduledAuditCommandOutput,
} from "./commands/DescribeScheduledAuditCommand";
import {
  DescribeSecurityProfileCommandInput,
  DescribeSecurityProfileCommandOutput,
} from "./commands/DescribeSecurityProfileCommand";
import { DescribeStreamCommandInput, DescribeStreamCommandOutput } from "./commands/DescribeStreamCommand";
import { DescribeThingCommandInput, DescribeThingCommandOutput } from "./commands/DescribeThingCommand";
import { DescribeThingGroupCommandInput, DescribeThingGroupCommandOutput } from "./commands/DescribeThingGroupCommand";
import {
  DescribeThingRegistrationTaskCommandInput,
  DescribeThingRegistrationTaskCommandOutput,
} from "./commands/DescribeThingRegistrationTaskCommand";
import { DescribeThingTypeCommandInput, DescribeThingTypeCommandOutput } from "./commands/DescribeThingTypeCommand";
import { DetachPolicyCommandInput, DetachPolicyCommandOutput } from "./commands/DetachPolicyCommand";
import {
  DetachPrincipalPolicyCommandInput,
  DetachPrincipalPolicyCommandOutput,
} from "./commands/DetachPrincipalPolicyCommand";
import {
  DetachSecurityProfileCommandInput,
  DetachSecurityProfileCommandOutput,
} from "./commands/DetachSecurityProfileCommand";
import {
  DetachThingPrincipalCommandInput,
  DetachThingPrincipalCommandOutput,
} from "./commands/DetachThingPrincipalCommand";
import { DisableTopicRuleCommandInput, DisableTopicRuleCommandOutput } from "./commands/DisableTopicRuleCommand";
import {
  DisassociateSbomFromPackageVersionCommandInput,
  DisassociateSbomFromPackageVersionCommandOutput,
} from "./commands/DisassociateSbomFromPackageVersionCommand";
import { EnableTopicRuleCommandInput, EnableTopicRuleCommandOutput } from "./commands/EnableTopicRuleCommand";
import {
  GetBehaviorModelTrainingSummariesCommandInput,
  GetBehaviorModelTrainingSummariesCommandOutput,
} from "./commands/GetBehaviorModelTrainingSummariesCommand";
import {
  GetBucketsAggregationCommandInput,
  GetBucketsAggregationCommandOutput,
} from "./commands/GetBucketsAggregationCommand";
import { GetCardinalityCommandInput, GetCardinalityCommandOutput } from "./commands/GetCardinalityCommand";
import { GetCommandCommandInput, GetCommandCommandOutput } from "./commands/GetCommandCommand";
import {
  GetCommandExecutionCommandInput,
  GetCommandExecutionCommandOutput,
} from "./commands/GetCommandExecutionCommand";
import {
  GetEffectivePoliciesCommandInput,
  GetEffectivePoliciesCommandOutput,
} from "./commands/GetEffectivePoliciesCommand";
import {
  GetIndexingConfigurationCommandInput,
  GetIndexingConfigurationCommandOutput,
} from "./commands/GetIndexingConfigurationCommand";
import { GetJobDocumentCommandInput, GetJobDocumentCommandOutput } from "./commands/GetJobDocumentCommand";
import { GetLoggingOptionsCommandInput, GetLoggingOptionsCommandOutput } from "./commands/GetLoggingOptionsCommand";
import { GetOTAUpdateCommandInput, GetOTAUpdateCommandOutput } from "./commands/GetOTAUpdateCommand";
import { GetPackageCommandInput, GetPackageCommandOutput } from "./commands/GetPackageCommand";
import {
  GetPackageConfigurationCommandInput,
  GetPackageConfigurationCommandOutput,
} from "./commands/GetPackageConfigurationCommand";
import { GetPackageVersionCommandInput, GetPackageVersionCommandOutput } from "./commands/GetPackageVersionCommand";
import { GetPercentilesCommandInput, GetPercentilesCommandOutput } from "./commands/GetPercentilesCommand";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import { GetPolicyVersionCommandInput, GetPolicyVersionCommandOutput } from "./commands/GetPolicyVersionCommand";
import {
  GetRegistrationCodeCommandInput,
  GetRegistrationCodeCommandOutput,
} from "./commands/GetRegistrationCodeCommand";
import { GetStatisticsCommandInput, GetStatisticsCommandOutput } from "./commands/GetStatisticsCommand";
import {
  GetThingConnectivityDataCommandInput,
  GetThingConnectivityDataCommandOutput,
} from "./commands/GetThingConnectivityDataCommand";
import { GetTopicRuleCommandInput, GetTopicRuleCommandOutput } from "./commands/GetTopicRuleCommand";
import {
  GetTopicRuleDestinationCommandInput,
  GetTopicRuleDestinationCommandOutput,
} from "./commands/GetTopicRuleDestinationCommand";
import {
  GetV2LoggingOptionsCommandInput,
  GetV2LoggingOptionsCommandOutput,
} from "./commands/GetV2LoggingOptionsCommand";
import {
  ListActiveViolationsCommandInput,
  ListActiveViolationsCommandOutput,
} from "./commands/ListActiveViolationsCommand";
import {
  ListAttachedPoliciesCommandInput,
  ListAttachedPoliciesCommandOutput,
} from "./commands/ListAttachedPoliciesCommand";
import { ListAuditFindingsCommandInput, ListAuditFindingsCommandOutput } from "./commands/ListAuditFindingsCommand";
import {
  ListAuditMitigationActionsExecutionsCommandInput,
  ListAuditMitigationActionsExecutionsCommandOutput,
} from "./commands/ListAuditMitigationActionsExecutionsCommand";
import {
  ListAuditMitigationActionsTasksCommandInput,
  ListAuditMitigationActionsTasksCommandOutput,
} from "./commands/ListAuditMitigationActionsTasksCommand";
import {
  ListAuditSuppressionsCommandInput,
  ListAuditSuppressionsCommandOutput,
} from "./commands/ListAuditSuppressionsCommand";
import { ListAuditTasksCommandInput, ListAuditTasksCommandOutput } from "./commands/ListAuditTasksCommand";
import { ListAuthorizersCommandInput, ListAuthorizersCommandOutput } from "./commands/ListAuthorizersCommand";
import { ListBillingGroupsCommandInput, ListBillingGroupsCommandOutput } from "./commands/ListBillingGroupsCommand";
import { ListCACertificatesCommandInput, ListCACertificatesCommandOutput } from "./commands/ListCACertificatesCommand";
import {
  ListCertificateProvidersCommandInput,
  ListCertificateProvidersCommandOutput,
} from "./commands/ListCertificateProvidersCommand";
import {
  ListCertificatesByCACommandInput,
  ListCertificatesByCACommandOutput,
} from "./commands/ListCertificatesByCACommand";
import { ListCertificatesCommandInput, ListCertificatesCommandOutput } from "./commands/ListCertificatesCommand";
import {
  ListCommandExecutionsCommandInput,
  ListCommandExecutionsCommandOutput,
} from "./commands/ListCommandExecutionsCommand";
import { ListCommandsCommandInput, ListCommandsCommandOutput } from "./commands/ListCommandsCommand";
import { ListCustomMetricsCommandInput, ListCustomMetricsCommandOutput } from "./commands/ListCustomMetricsCommand";
import {
  ListDetectMitigationActionsExecutionsCommandInput,
  ListDetectMitigationActionsExecutionsCommandOutput,
} from "./commands/ListDetectMitigationActionsExecutionsCommand";
import {
  ListDetectMitigationActionsTasksCommandInput,
  ListDetectMitigationActionsTasksCommandOutput,
} from "./commands/ListDetectMitigationActionsTasksCommand";
import { ListDimensionsCommandInput, ListDimensionsCommandOutput } from "./commands/ListDimensionsCommand";
import {
  ListDomainConfigurationsCommandInput,
  ListDomainConfigurationsCommandOutput,
} from "./commands/ListDomainConfigurationsCommand";
import { ListFleetMetricsCommandInput, ListFleetMetricsCommandOutput } from "./commands/ListFleetMetricsCommand";
import { ListIndicesCommandInput, ListIndicesCommandOutput } from "./commands/ListIndicesCommand";
import {
  ListJobExecutionsForJobCommandInput,
  ListJobExecutionsForJobCommandOutput,
} from "./commands/ListJobExecutionsForJobCommand";
import {
  ListJobExecutionsForThingCommandInput,
  ListJobExecutionsForThingCommandOutput,
} from "./commands/ListJobExecutionsForThingCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import { ListJobTemplatesCommandInput, ListJobTemplatesCommandOutput } from "./commands/ListJobTemplatesCommand";
import {
  ListManagedJobTemplatesCommandInput,
  ListManagedJobTemplatesCommandOutput,
} from "./commands/ListManagedJobTemplatesCommand";
import { ListMetricValuesCommandInput, ListMetricValuesCommandOutput } from "./commands/ListMetricValuesCommand";
import {
  ListMitigationActionsCommandInput,
  ListMitigationActionsCommandOutput,
} from "./commands/ListMitigationActionsCommand";
import { ListOTAUpdatesCommandInput, ListOTAUpdatesCommandOutput } from "./commands/ListOTAUpdatesCommand";
import {
  ListOutgoingCertificatesCommandInput,
  ListOutgoingCertificatesCommandOutput,
} from "./commands/ListOutgoingCertificatesCommand";
import { ListPackagesCommandInput, ListPackagesCommandOutput } from "./commands/ListPackagesCommand";
import {
  ListPackageVersionsCommandInput,
  ListPackageVersionsCommandOutput,
} from "./commands/ListPackageVersionsCommand";
import { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "./commands/ListPoliciesCommand";
import {
  ListPolicyPrincipalsCommandInput,
  ListPolicyPrincipalsCommandOutput,
} from "./commands/ListPolicyPrincipalsCommand";
import { ListPolicyVersionsCommandInput, ListPolicyVersionsCommandOutput } from "./commands/ListPolicyVersionsCommand";
import {
  ListPrincipalPoliciesCommandInput,
  ListPrincipalPoliciesCommandOutput,
} from "./commands/ListPrincipalPoliciesCommand";
import {
  ListPrincipalThingsCommandInput,
  ListPrincipalThingsCommandOutput,
} from "./commands/ListPrincipalThingsCommand";
import {
  ListPrincipalThingsV2CommandInput,
  ListPrincipalThingsV2CommandOutput,
} from "./commands/ListPrincipalThingsV2Command";
import {
  ListProvisioningTemplatesCommandInput,
  ListProvisioningTemplatesCommandOutput,
} from "./commands/ListProvisioningTemplatesCommand";
import {
  ListProvisioningTemplateVersionsCommandInput,
  ListProvisioningTemplateVersionsCommandOutput,
} from "./commands/ListProvisioningTemplateVersionsCommand";
import {
  ListRelatedResourcesForAuditFindingCommandInput,
  ListRelatedResourcesForAuditFindingCommandOutput,
} from "./commands/ListRelatedResourcesForAuditFindingCommand";
import { ListRoleAliasesCommandInput, ListRoleAliasesCommandOutput } from "./commands/ListRoleAliasesCommand";
import {
  ListSbomValidationResultsCommandInput,
  ListSbomValidationResultsCommandOutput,
} from "./commands/ListSbomValidationResultsCommand";
import {
  ListScheduledAuditsCommandInput,
  ListScheduledAuditsCommandOutput,
} from "./commands/ListScheduledAuditsCommand";
import {
  ListSecurityProfilesCommandInput,
  ListSecurityProfilesCommandOutput,
} from "./commands/ListSecurityProfilesCommand";
import {
  ListSecurityProfilesForTargetCommandInput,
  ListSecurityProfilesForTargetCommandOutput,
} from "./commands/ListSecurityProfilesForTargetCommand";
import { ListStreamsCommandInput, ListStreamsCommandOutput } from "./commands/ListStreamsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTargetsForPolicyCommandInput,
  ListTargetsForPolicyCommandOutput,
} from "./commands/ListTargetsForPolicyCommand";
import {
  ListTargetsForSecurityProfileCommandInput,
  ListTargetsForSecurityProfileCommandOutput,
} from "./commands/ListTargetsForSecurityProfileCommand";
import { ListThingGroupsCommandInput, ListThingGroupsCommandOutput } from "./commands/ListThingGroupsCommand";
import {
  ListThingGroupsForThingCommandInput,
  ListThingGroupsForThingCommandOutput,
} from "./commands/ListThingGroupsForThingCommand";
import {
  ListThingPrincipalsCommandInput,
  ListThingPrincipalsCommandOutput,
} from "./commands/ListThingPrincipalsCommand";
import {
  ListThingPrincipalsV2CommandInput,
  ListThingPrincipalsV2CommandOutput,
} from "./commands/ListThingPrincipalsV2Command";
import {
  ListThingRegistrationTaskReportsCommandInput,
  ListThingRegistrationTaskReportsCommandOutput,
} from "./commands/ListThingRegistrationTaskReportsCommand";
import {
  ListThingRegistrationTasksCommandInput,
  ListThingRegistrationTasksCommandOutput,
} from "./commands/ListThingRegistrationTasksCommand";
import { ListThingsCommandInput, ListThingsCommandOutput } from "./commands/ListThingsCommand";
import {
  ListThingsInBillingGroupCommandInput,
  ListThingsInBillingGroupCommandOutput,
} from "./commands/ListThingsInBillingGroupCommand";
import {
  ListThingsInThingGroupCommandInput,
  ListThingsInThingGroupCommandOutput,
} from "./commands/ListThingsInThingGroupCommand";
import { ListThingTypesCommandInput, ListThingTypesCommandOutput } from "./commands/ListThingTypesCommand";
import {
  ListTopicRuleDestinationsCommandInput,
  ListTopicRuleDestinationsCommandOutput,
} from "./commands/ListTopicRuleDestinationsCommand";
import { ListTopicRulesCommandInput, ListTopicRulesCommandOutput } from "./commands/ListTopicRulesCommand";
import {
  ListV2LoggingLevelsCommandInput,
  ListV2LoggingLevelsCommandOutput,
} from "./commands/ListV2LoggingLevelsCommand";
import {
  ListViolationEventsCommandInput,
  ListViolationEventsCommandOutput,
} from "./commands/ListViolationEventsCommand";
import {
  PutVerificationStateOnViolationCommandInput,
  PutVerificationStateOnViolationCommandOutput,
} from "./commands/PutVerificationStateOnViolationCommand";
import {
  RegisterCACertificateCommandInput,
  RegisterCACertificateCommandOutput,
} from "./commands/RegisterCACertificateCommand";
import {
  RegisterCertificateCommandInput,
  RegisterCertificateCommandOutput,
} from "./commands/RegisterCertificateCommand";
import {
  RegisterCertificateWithoutCACommandInput,
  RegisterCertificateWithoutCACommandOutput,
} from "./commands/RegisterCertificateWithoutCACommand";
import { RegisterThingCommandInput, RegisterThingCommandOutput } from "./commands/RegisterThingCommand";
import {
  RejectCertificateTransferCommandInput,
  RejectCertificateTransferCommandOutput,
} from "./commands/RejectCertificateTransferCommand";
import {
  RemoveThingFromBillingGroupCommandInput,
  RemoveThingFromBillingGroupCommandOutput,
} from "./commands/RemoveThingFromBillingGroupCommand";
import {
  RemoveThingFromThingGroupCommandInput,
  RemoveThingFromThingGroupCommandOutput,
} from "./commands/RemoveThingFromThingGroupCommand";
import { ReplaceTopicRuleCommandInput, ReplaceTopicRuleCommandOutput } from "./commands/ReplaceTopicRuleCommand";
import { SearchIndexCommandInput, SearchIndexCommandOutput } from "./commands/SearchIndexCommand";
import {
  SetDefaultAuthorizerCommandInput,
  SetDefaultAuthorizerCommandOutput,
} from "./commands/SetDefaultAuthorizerCommand";
import {
  SetDefaultPolicyVersionCommandInput,
  SetDefaultPolicyVersionCommandOutput,
} from "./commands/SetDefaultPolicyVersionCommand";
import { SetLoggingOptionsCommandInput, SetLoggingOptionsCommandOutput } from "./commands/SetLoggingOptionsCommand";
import { SetV2LoggingLevelCommandInput, SetV2LoggingLevelCommandOutput } from "./commands/SetV2LoggingLevelCommand";
import {
  SetV2LoggingOptionsCommandInput,
  SetV2LoggingOptionsCommandOutput,
} from "./commands/SetV2LoggingOptionsCommand";
import {
  StartAuditMitigationActionsTaskCommandInput,
  StartAuditMitigationActionsTaskCommandOutput,
} from "./commands/StartAuditMitigationActionsTaskCommand";
import {
  StartDetectMitigationActionsTaskCommandInput,
  StartDetectMitigationActionsTaskCommandOutput,
} from "./commands/StartDetectMitigationActionsTaskCommand";
import {
  StartOnDemandAuditTaskCommandInput,
  StartOnDemandAuditTaskCommandOutput,
} from "./commands/StartOnDemandAuditTaskCommand";
import {
  StartThingRegistrationTaskCommandInput,
  StartThingRegistrationTaskCommandOutput,
} from "./commands/StartThingRegistrationTaskCommand";
import {
  StopThingRegistrationTaskCommandInput,
  StopThingRegistrationTaskCommandOutput,
} from "./commands/StopThingRegistrationTaskCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TestAuthorizationCommandInput, TestAuthorizationCommandOutput } from "./commands/TestAuthorizationCommand";
import {
  TestInvokeAuthorizerCommandInput,
  TestInvokeAuthorizerCommandOutput,
} from "./commands/TestInvokeAuthorizerCommand";
import {
  TransferCertificateCommandInput,
  TransferCertificateCommandOutput,
} from "./commands/TransferCertificateCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateAccountAuditConfigurationCommandInput,
  UpdateAccountAuditConfigurationCommandOutput,
} from "./commands/UpdateAccountAuditConfigurationCommand";
import {
  UpdateAuditSuppressionCommandInput,
  UpdateAuditSuppressionCommandOutput,
} from "./commands/UpdateAuditSuppressionCommand";
import { UpdateAuthorizerCommandInput, UpdateAuthorizerCommandOutput } from "./commands/UpdateAuthorizerCommand";
import { UpdateBillingGroupCommandInput, UpdateBillingGroupCommandOutput } from "./commands/UpdateBillingGroupCommand";
import {
  UpdateCACertificateCommandInput,
  UpdateCACertificateCommandOutput,
} from "./commands/UpdateCACertificateCommand";
import { UpdateCertificateCommandInput, UpdateCertificateCommandOutput } from "./commands/UpdateCertificateCommand";
import {
  UpdateCertificateProviderCommandInput,
  UpdateCertificateProviderCommandOutput,
} from "./commands/UpdateCertificateProviderCommand";
import { UpdateCommandCommandInput, UpdateCommandCommandOutput } from "./commands/UpdateCommandCommand";
import { UpdateCustomMetricCommandInput, UpdateCustomMetricCommandOutput } from "./commands/UpdateCustomMetricCommand";
import { UpdateDimensionCommandInput, UpdateDimensionCommandOutput } from "./commands/UpdateDimensionCommand";
import {
  UpdateDomainConfigurationCommandInput,
  UpdateDomainConfigurationCommandOutput,
} from "./commands/UpdateDomainConfigurationCommand";
import {
  UpdateDynamicThingGroupCommandInput,
  UpdateDynamicThingGroupCommandOutput,
} from "./commands/UpdateDynamicThingGroupCommand";
import {
  UpdateEncryptionConfigurationCommandInput,
  UpdateEncryptionConfigurationCommandOutput,
} from "./commands/UpdateEncryptionConfigurationCommand";
import {
  UpdateEventConfigurationsCommandInput,
  UpdateEventConfigurationsCommandOutput,
} from "./commands/UpdateEventConfigurationsCommand";
import { UpdateFleetMetricCommandInput, UpdateFleetMetricCommandOutput } from "./commands/UpdateFleetMetricCommand";
import {
  UpdateIndexingConfigurationCommandInput,
  UpdateIndexingConfigurationCommandOutput,
} from "./commands/UpdateIndexingConfigurationCommand";
import { UpdateJobCommandInput, UpdateJobCommandOutput } from "./commands/UpdateJobCommand";
import {
  UpdateMitigationActionCommandInput,
  UpdateMitigationActionCommandOutput,
} from "./commands/UpdateMitigationActionCommand";
import { UpdatePackageCommandInput, UpdatePackageCommandOutput } from "./commands/UpdatePackageCommand";
import {
  UpdatePackageConfigurationCommandInput,
  UpdatePackageConfigurationCommandOutput,
} from "./commands/UpdatePackageConfigurationCommand";
import {
  UpdatePackageVersionCommandInput,
  UpdatePackageVersionCommandOutput,
} from "./commands/UpdatePackageVersionCommand";
import {
  UpdateProvisioningTemplateCommandInput,
  UpdateProvisioningTemplateCommandOutput,
} from "./commands/UpdateProvisioningTemplateCommand";
import { UpdateRoleAliasCommandInput, UpdateRoleAliasCommandOutput } from "./commands/UpdateRoleAliasCommand";
import {
  UpdateScheduledAuditCommandInput,
  UpdateScheduledAuditCommandOutput,
} from "./commands/UpdateScheduledAuditCommand";
import {
  UpdateSecurityProfileCommandInput,
  UpdateSecurityProfileCommandOutput,
} from "./commands/UpdateSecurityProfileCommand";
import { UpdateStreamCommandInput, UpdateStreamCommandOutput } from "./commands/UpdateStreamCommand";
import { UpdateThingCommandInput, UpdateThingCommandOutput } from "./commands/UpdateThingCommand";
import { UpdateThingGroupCommandInput, UpdateThingGroupCommandOutput } from "./commands/UpdateThingGroupCommand";
import {
  UpdateThingGroupsForThingCommandInput,
  UpdateThingGroupsForThingCommandOutput,
} from "./commands/UpdateThingGroupsForThingCommand";
import { UpdateThingTypeCommandInput, UpdateThingTypeCommandOutput } from "./commands/UpdateThingTypeCommand";
import {
  UpdateTopicRuleDestinationCommandInput,
  UpdateTopicRuleDestinationCommandOutput,
} from "./commands/UpdateTopicRuleDestinationCommand";
import {
  ValidateSecurityProfileBehaviorsCommandInput,
  ValidateSecurityProfileBehaviorsCommandOutput,
} from "./commands/ValidateSecurityProfileBehaviorsCommand";
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
 *             devices (such as sensors, actuators, embedded devices, or smart appliances) and the Amazon Web Services
 *             cloud. You can discover your custom IoT-Data endpoint to communicate with, configure
 *             rules for data processing and integration with other services, organize resources
 *             associated with each device (Registry), configure logging, and create and manage
 *             policies and credentials to authenticate devices.</p>
 *          <p>The service endpoints that expose this API are listed in
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/iot-core.html">Amazon Web Services IoT Core Endpoints and Quotas</a>.
 *             You must use the endpoint for the region that has the resources you want to access.</p>
 *          <p>The service name used by <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Amazon Web Services
 *                 Signature Version 4</a> to sign the request is:
 *             <i>execute-api</i>.</p>
 *          <p>For more information about how IoT works, see the <a href="https://docs.aws.amazon.com/iot/latest/developerguide/aws-iot-how-it-works.html">Developer
 *             Guide</a>.</p>
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
