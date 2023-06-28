// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AcceptCertificateTransferCommand,
  AcceptCertificateTransferCommandInput,
  AcceptCertificateTransferCommandOutput,
} from "./commands/AcceptCertificateTransferCommand";
import {
  AddThingToBillingGroupCommand,
  AddThingToBillingGroupCommandInput,
  AddThingToBillingGroupCommandOutput,
} from "./commands/AddThingToBillingGroupCommand";
import {
  AddThingToThingGroupCommand,
  AddThingToThingGroupCommandInput,
  AddThingToThingGroupCommandOutput,
} from "./commands/AddThingToThingGroupCommand";
import {
  AssociateTargetsWithJobCommand,
  AssociateTargetsWithJobCommandInput,
  AssociateTargetsWithJobCommandOutput,
} from "./commands/AssociateTargetsWithJobCommand";
import {
  AttachPolicyCommand,
  AttachPolicyCommandInput,
  AttachPolicyCommandOutput,
} from "./commands/AttachPolicyCommand";
import {
  AttachPrincipalPolicyCommand,
  AttachPrincipalPolicyCommandInput,
  AttachPrincipalPolicyCommandOutput,
} from "./commands/AttachPrincipalPolicyCommand";
import {
  AttachSecurityProfileCommand,
  AttachSecurityProfileCommandInput,
  AttachSecurityProfileCommandOutput,
} from "./commands/AttachSecurityProfileCommand";
import {
  AttachThingPrincipalCommand,
  AttachThingPrincipalCommandInput,
  AttachThingPrincipalCommandOutput,
} from "./commands/AttachThingPrincipalCommand";
import {
  CancelAuditMitigationActionsTaskCommand,
  CancelAuditMitigationActionsTaskCommandInput,
  CancelAuditMitigationActionsTaskCommandOutput,
} from "./commands/CancelAuditMitigationActionsTaskCommand";
import {
  CancelAuditTaskCommand,
  CancelAuditTaskCommandInput,
  CancelAuditTaskCommandOutput,
} from "./commands/CancelAuditTaskCommand";
import {
  CancelCertificateTransferCommand,
  CancelCertificateTransferCommandInput,
  CancelCertificateTransferCommandOutput,
} from "./commands/CancelCertificateTransferCommand";
import {
  CancelDetectMitigationActionsTaskCommand,
  CancelDetectMitigationActionsTaskCommandInput,
  CancelDetectMitigationActionsTaskCommandOutput,
} from "./commands/CancelDetectMitigationActionsTaskCommand";
import { CancelJobCommand, CancelJobCommandInput, CancelJobCommandOutput } from "./commands/CancelJobCommand";
import {
  CancelJobExecutionCommand,
  CancelJobExecutionCommandInput,
  CancelJobExecutionCommandOutput,
} from "./commands/CancelJobExecutionCommand";
import {
  ClearDefaultAuthorizerCommand,
  ClearDefaultAuthorizerCommandInput,
  ClearDefaultAuthorizerCommandOutput,
} from "./commands/ClearDefaultAuthorizerCommand";
import {
  ConfirmTopicRuleDestinationCommand,
  ConfirmTopicRuleDestinationCommandInput,
  ConfirmTopicRuleDestinationCommandOutput,
} from "./commands/ConfirmTopicRuleDestinationCommand";
import {
  CreateAuditSuppressionCommand,
  CreateAuditSuppressionCommandInput,
  CreateAuditSuppressionCommandOutput,
} from "./commands/CreateAuditSuppressionCommand";
import {
  CreateAuthorizerCommand,
  CreateAuthorizerCommandInput,
  CreateAuthorizerCommandOutput,
} from "./commands/CreateAuthorizerCommand";
import {
  CreateBillingGroupCommand,
  CreateBillingGroupCommandInput,
  CreateBillingGroupCommandOutput,
} from "./commands/CreateBillingGroupCommand";
import {
  CreateCertificateFromCsrCommand,
  CreateCertificateFromCsrCommandInput,
  CreateCertificateFromCsrCommandOutput,
} from "./commands/CreateCertificateFromCsrCommand";
import {
  CreateCustomMetricCommand,
  CreateCustomMetricCommandInput,
  CreateCustomMetricCommandOutput,
} from "./commands/CreateCustomMetricCommand";
import {
  CreateDimensionCommand,
  CreateDimensionCommandInput,
  CreateDimensionCommandOutput,
} from "./commands/CreateDimensionCommand";
import {
  CreateDomainConfigurationCommand,
  CreateDomainConfigurationCommandInput,
  CreateDomainConfigurationCommandOutput,
} from "./commands/CreateDomainConfigurationCommand";
import {
  CreateDynamicThingGroupCommand,
  CreateDynamicThingGroupCommandInput,
  CreateDynamicThingGroupCommandOutput,
} from "./commands/CreateDynamicThingGroupCommand";
import {
  CreateFleetMetricCommand,
  CreateFleetMetricCommandInput,
  CreateFleetMetricCommandOutput,
} from "./commands/CreateFleetMetricCommand";
import { CreateJobCommand, CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import {
  CreateJobTemplateCommand,
  CreateJobTemplateCommandInput,
  CreateJobTemplateCommandOutput,
} from "./commands/CreateJobTemplateCommand";
import {
  CreateKeysAndCertificateCommand,
  CreateKeysAndCertificateCommandInput,
  CreateKeysAndCertificateCommandOutput,
} from "./commands/CreateKeysAndCertificateCommand";
import {
  CreateMitigationActionCommand,
  CreateMitigationActionCommandInput,
  CreateMitigationActionCommandOutput,
} from "./commands/CreateMitigationActionCommand";
import {
  CreateOTAUpdateCommand,
  CreateOTAUpdateCommandInput,
  CreateOTAUpdateCommandOutput,
} from "./commands/CreateOTAUpdateCommand";
import {
  CreatePackageCommand,
  CreatePackageCommandInput,
  CreatePackageCommandOutput,
} from "./commands/CreatePackageCommand";
import {
  CreatePackageVersionCommand,
  CreatePackageVersionCommandInput,
  CreatePackageVersionCommandOutput,
} from "./commands/CreatePackageVersionCommand";
import {
  CreatePolicyCommand,
  CreatePolicyCommandInput,
  CreatePolicyCommandOutput,
} from "./commands/CreatePolicyCommand";
import {
  CreatePolicyVersionCommand,
  CreatePolicyVersionCommandInput,
  CreatePolicyVersionCommandOutput,
} from "./commands/CreatePolicyVersionCommand";
import {
  CreateProvisioningClaimCommand,
  CreateProvisioningClaimCommandInput,
  CreateProvisioningClaimCommandOutput,
} from "./commands/CreateProvisioningClaimCommand";
import {
  CreateProvisioningTemplateCommand,
  CreateProvisioningTemplateCommandInput,
  CreateProvisioningTemplateCommandOutput,
} from "./commands/CreateProvisioningTemplateCommand";
import {
  CreateProvisioningTemplateVersionCommand,
  CreateProvisioningTemplateVersionCommandInput,
  CreateProvisioningTemplateVersionCommandOutput,
} from "./commands/CreateProvisioningTemplateVersionCommand";
import {
  CreateRoleAliasCommand,
  CreateRoleAliasCommandInput,
  CreateRoleAliasCommandOutput,
} from "./commands/CreateRoleAliasCommand";
import {
  CreateScheduledAuditCommand,
  CreateScheduledAuditCommandInput,
  CreateScheduledAuditCommandOutput,
} from "./commands/CreateScheduledAuditCommand";
import {
  CreateSecurityProfileCommand,
  CreateSecurityProfileCommandInput,
  CreateSecurityProfileCommandOutput,
} from "./commands/CreateSecurityProfileCommand";
import {
  CreateStreamCommand,
  CreateStreamCommandInput,
  CreateStreamCommandOutput,
} from "./commands/CreateStreamCommand";
import { CreateThingCommand, CreateThingCommandInput, CreateThingCommandOutput } from "./commands/CreateThingCommand";
import {
  CreateThingGroupCommand,
  CreateThingGroupCommandInput,
  CreateThingGroupCommandOutput,
} from "./commands/CreateThingGroupCommand";
import {
  CreateThingTypeCommand,
  CreateThingTypeCommandInput,
  CreateThingTypeCommandOutput,
} from "./commands/CreateThingTypeCommand";
import {
  CreateTopicRuleCommand,
  CreateTopicRuleCommandInput,
  CreateTopicRuleCommandOutput,
} from "./commands/CreateTopicRuleCommand";
import {
  CreateTopicRuleDestinationCommand,
  CreateTopicRuleDestinationCommandInput,
  CreateTopicRuleDestinationCommandOutput,
} from "./commands/CreateTopicRuleDestinationCommand";
import {
  DeleteAccountAuditConfigurationCommand,
  DeleteAccountAuditConfigurationCommandInput,
  DeleteAccountAuditConfigurationCommandOutput,
} from "./commands/DeleteAccountAuditConfigurationCommand";
import {
  DeleteAuditSuppressionCommand,
  DeleteAuditSuppressionCommandInput,
  DeleteAuditSuppressionCommandOutput,
} from "./commands/DeleteAuditSuppressionCommand";
import {
  DeleteAuthorizerCommand,
  DeleteAuthorizerCommandInput,
  DeleteAuthorizerCommandOutput,
} from "./commands/DeleteAuthorizerCommand";
import {
  DeleteBillingGroupCommand,
  DeleteBillingGroupCommandInput,
  DeleteBillingGroupCommandOutput,
} from "./commands/DeleteBillingGroupCommand";
import {
  DeleteCACertificateCommand,
  DeleteCACertificateCommandInput,
  DeleteCACertificateCommandOutput,
} from "./commands/DeleteCACertificateCommand";
import {
  DeleteCertificateCommand,
  DeleteCertificateCommandInput,
  DeleteCertificateCommandOutput,
} from "./commands/DeleteCertificateCommand";
import {
  DeleteCustomMetricCommand,
  DeleteCustomMetricCommandInput,
  DeleteCustomMetricCommandOutput,
} from "./commands/DeleteCustomMetricCommand";
import {
  DeleteDimensionCommand,
  DeleteDimensionCommandInput,
  DeleteDimensionCommandOutput,
} from "./commands/DeleteDimensionCommand";
import {
  DeleteDomainConfigurationCommand,
  DeleteDomainConfigurationCommandInput,
  DeleteDomainConfigurationCommandOutput,
} from "./commands/DeleteDomainConfigurationCommand";
import {
  DeleteDynamicThingGroupCommand,
  DeleteDynamicThingGroupCommandInput,
  DeleteDynamicThingGroupCommandOutput,
} from "./commands/DeleteDynamicThingGroupCommand";
import {
  DeleteFleetMetricCommand,
  DeleteFleetMetricCommandInput,
  DeleteFleetMetricCommandOutput,
} from "./commands/DeleteFleetMetricCommand";
import { DeleteJobCommand, DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand";
import {
  DeleteJobExecutionCommand,
  DeleteJobExecutionCommandInput,
  DeleteJobExecutionCommandOutput,
} from "./commands/DeleteJobExecutionCommand";
import {
  DeleteJobTemplateCommand,
  DeleteJobTemplateCommandInput,
  DeleteJobTemplateCommandOutput,
} from "./commands/DeleteJobTemplateCommand";
import {
  DeleteMitigationActionCommand,
  DeleteMitigationActionCommandInput,
  DeleteMitigationActionCommandOutput,
} from "./commands/DeleteMitigationActionCommand";
import {
  DeleteOTAUpdateCommand,
  DeleteOTAUpdateCommandInput,
  DeleteOTAUpdateCommandOutput,
} from "./commands/DeleteOTAUpdateCommand";
import {
  DeletePackageCommand,
  DeletePackageCommandInput,
  DeletePackageCommandOutput,
} from "./commands/DeletePackageCommand";
import {
  DeletePackageVersionCommand,
  DeletePackageVersionCommandInput,
  DeletePackageVersionCommandOutput,
} from "./commands/DeletePackageVersionCommand";
import {
  DeletePolicyCommand,
  DeletePolicyCommandInput,
  DeletePolicyCommandOutput,
} from "./commands/DeletePolicyCommand";
import {
  DeletePolicyVersionCommand,
  DeletePolicyVersionCommandInput,
  DeletePolicyVersionCommandOutput,
} from "./commands/DeletePolicyVersionCommand";
import {
  DeleteProvisioningTemplateCommand,
  DeleteProvisioningTemplateCommandInput,
  DeleteProvisioningTemplateCommandOutput,
} from "./commands/DeleteProvisioningTemplateCommand";
import {
  DeleteProvisioningTemplateVersionCommand,
  DeleteProvisioningTemplateVersionCommandInput,
  DeleteProvisioningTemplateVersionCommandOutput,
} from "./commands/DeleteProvisioningTemplateVersionCommand";
import {
  DeleteRegistrationCodeCommand,
  DeleteRegistrationCodeCommandInput,
  DeleteRegistrationCodeCommandOutput,
} from "./commands/DeleteRegistrationCodeCommand";
import {
  DeleteRoleAliasCommand,
  DeleteRoleAliasCommandInput,
  DeleteRoleAliasCommandOutput,
} from "./commands/DeleteRoleAliasCommand";
import {
  DeleteScheduledAuditCommand,
  DeleteScheduledAuditCommandInput,
  DeleteScheduledAuditCommandOutput,
} from "./commands/DeleteScheduledAuditCommand";
import {
  DeleteSecurityProfileCommand,
  DeleteSecurityProfileCommandInput,
  DeleteSecurityProfileCommandOutput,
} from "./commands/DeleteSecurityProfileCommand";
import {
  DeleteStreamCommand,
  DeleteStreamCommandInput,
  DeleteStreamCommandOutput,
} from "./commands/DeleteStreamCommand";
import { DeleteThingCommand, DeleteThingCommandInput, DeleteThingCommandOutput } from "./commands/DeleteThingCommand";
import {
  DeleteThingGroupCommand,
  DeleteThingGroupCommandInput,
  DeleteThingGroupCommandOutput,
} from "./commands/DeleteThingGroupCommand";
import {
  DeleteThingTypeCommand,
  DeleteThingTypeCommandInput,
  DeleteThingTypeCommandOutput,
} from "./commands/DeleteThingTypeCommand";
import {
  DeleteTopicRuleCommand,
  DeleteTopicRuleCommandInput,
  DeleteTopicRuleCommandOutput,
} from "./commands/DeleteTopicRuleCommand";
import {
  DeleteTopicRuleDestinationCommand,
  DeleteTopicRuleDestinationCommandInput,
  DeleteTopicRuleDestinationCommandOutput,
} from "./commands/DeleteTopicRuleDestinationCommand";
import {
  DeleteV2LoggingLevelCommand,
  DeleteV2LoggingLevelCommandInput,
  DeleteV2LoggingLevelCommandOutput,
} from "./commands/DeleteV2LoggingLevelCommand";
import {
  DeprecateThingTypeCommand,
  DeprecateThingTypeCommandInput,
  DeprecateThingTypeCommandOutput,
} from "./commands/DeprecateThingTypeCommand";
import {
  DescribeAccountAuditConfigurationCommand,
  DescribeAccountAuditConfigurationCommandInput,
  DescribeAccountAuditConfigurationCommandOutput,
} from "./commands/DescribeAccountAuditConfigurationCommand";
import {
  DescribeAuditFindingCommand,
  DescribeAuditFindingCommandInput,
  DescribeAuditFindingCommandOutput,
} from "./commands/DescribeAuditFindingCommand";
import {
  DescribeAuditMitigationActionsTaskCommand,
  DescribeAuditMitigationActionsTaskCommandInput,
  DescribeAuditMitigationActionsTaskCommandOutput,
} from "./commands/DescribeAuditMitigationActionsTaskCommand";
import {
  DescribeAuditSuppressionCommand,
  DescribeAuditSuppressionCommandInput,
  DescribeAuditSuppressionCommandOutput,
} from "./commands/DescribeAuditSuppressionCommand";
import {
  DescribeAuditTaskCommand,
  DescribeAuditTaskCommandInput,
  DescribeAuditTaskCommandOutput,
} from "./commands/DescribeAuditTaskCommand";
import {
  DescribeAuthorizerCommand,
  DescribeAuthorizerCommandInput,
  DescribeAuthorizerCommandOutput,
} from "./commands/DescribeAuthorizerCommand";
import {
  DescribeBillingGroupCommand,
  DescribeBillingGroupCommandInput,
  DescribeBillingGroupCommandOutput,
} from "./commands/DescribeBillingGroupCommand";
import {
  DescribeCACertificateCommand,
  DescribeCACertificateCommandInput,
  DescribeCACertificateCommandOutput,
} from "./commands/DescribeCACertificateCommand";
import {
  DescribeCertificateCommand,
  DescribeCertificateCommandInput,
  DescribeCertificateCommandOutput,
} from "./commands/DescribeCertificateCommand";
import {
  DescribeCustomMetricCommand,
  DescribeCustomMetricCommandInput,
  DescribeCustomMetricCommandOutput,
} from "./commands/DescribeCustomMetricCommand";
import {
  DescribeDefaultAuthorizerCommand,
  DescribeDefaultAuthorizerCommandInput,
  DescribeDefaultAuthorizerCommandOutput,
} from "./commands/DescribeDefaultAuthorizerCommand";
import {
  DescribeDetectMitigationActionsTaskCommand,
  DescribeDetectMitigationActionsTaskCommandInput,
  DescribeDetectMitigationActionsTaskCommandOutput,
} from "./commands/DescribeDetectMitigationActionsTaskCommand";
import {
  DescribeDimensionCommand,
  DescribeDimensionCommandInput,
  DescribeDimensionCommandOutput,
} from "./commands/DescribeDimensionCommand";
import {
  DescribeDomainConfigurationCommand,
  DescribeDomainConfigurationCommandInput,
  DescribeDomainConfigurationCommandOutput,
} from "./commands/DescribeDomainConfigurationCommand";
import {
  DescribeEndpointCommand,
  DescribeEndpointCommandInput,
  DescribeEndpointCommandOutput,
} from "./commands/DescribeEndpointCommand";
import {
  DescribeEventConfigurationsCommand,
  DescribeEventConfigurationsCommandInput,
  DescribeEventConfigurationsCommandOutput,
} from "./commands/DescribeEventConfigurationsCommand";
import {
  DescribeFleetMetricCommand,
  DescribeFleetMetricCommandInput,
  DescribeFleetMetricCommandOutput,
} from "./commands/DescribeFleetMetricCommand";
import {
  DescribeIndexCommand,
  DescribeIndexCommandInput,
  DescribeIndexCommandOutput,
} from "./commands/DescribeIndexCommand";
import { DescribeJobCommand, DescribeJobCommandInput, DescribeJobCommandOutput } from "./commands/DescribeJobCommand";
import {
  DescribeJobExecutionCommand,
  DescribeJobExecutionCommandInput,
  DescribeJobExecutionCommandOutput,
} from "./commands/DescribeJobExecutionCommand";
import {
  DescribeJobTemplateCommand,
  DescribeJobTemplateCommandInput,
  DescribeJobTemplateCommandOutput,
} from "./commands/DescribeJobTemplateCommand";
import {
  DescribeManagedJobTemplateCommand,
  DescribeManagedJobTemplateCommandInput,
  DescribeManagedJobTemplateCommandOutput,
} from "./commands/DescribeManagedJobTemplateCommand";
import {
  DescribeMitigationActionCommand,
  DescribeMitigationActionCommandInput,
  DescribeMitigationActionCommandOutput,
} from "./commands/DescribeMitigationActionCommand";
import {
  DescribeProvisioningTemplateCommand,
  DescribeProvisioningTemplateCommandInput,
  DescribeProvisioningTemplateCommandOutput,
} from "./commands/DescribeProvisioningTemplateCommand";
import {
  DescribeProvisioningTemplateVersionCommand,
  DescribeProvisioningTemplateVersionCommandInput,
  DescribeProvisioningTemplateVersionCommandOutput,
} from "./commands/DescribeProvisioningTemplateVersionCommand";
import {
  DescribeRoleAliasCommand,
  DescribeRoleAliasCommandInput,
  DescribeRoleAliasCommandOutput,
} from "./commands/DescribeRoleAliasCommand";
import {
  DescribeScheduledAuditCommand,
  DescribeScheduledAuditCommandInput,
  DescribeScheduledAuditCommandOutput,
} from "./commands/DescribeScheduledAuditCommand";
import {
  DescribeSecurityProfileCommand,
  DescribeSecurityProfileCommandInput,
  DescribeSecurityProfileCommandOutput,
} from "./commands/DescribeSecurityProfileCommand";
import {
  DescribeStreamCommand,
  DescribeStreamCommandInput,
  DescribeStreamCommandOutput,
} from "./commands/DescribeStreamCommand";
import {
  DescribeThingCommand,
  DescribeThingCommandInput,
  DescribeThingCommandOutput,
} from "./commands/DescribeThingCommand";
import {
  DescribeThingGroupCommand,
  DescribeThingGroupCommandInput,
  DescribeThingGroupCommandOutput,
} from "./commands/DescribeThingGroupCommand";
import {
  DescribeThingRegistrationTaskCommand,
  DescribeThingRegistrationTaskCommandInput,
  DescribeThingRegistrationTaskCommandOutput,
} from "./commands/DescribeThingRegistrationTaskCommand";
import {
  DescribeThingTypeCommand,
  DescribeThingTypeCommandInput,
  DescribeThingTypeCommandOutput,
} from "./commands/DescribeThingTypeCommand";
import {
  DetachPolicyCommand,
  DetachPolicyCommandInput,
  DetachPolicyCommandOutput,
} from "./commands/DetachPolicyCommand";
import {
  DetachPrincipalPolicyCommand,
  DetachPrincipalPolicyCommandInput,
  DetachPrincipalPolicyCommandOutput,
} from "./commands/DetachPrincipalPolicyCommand";
import {
  DetachSecurityProfileCommand,
  DetachSecurityProfileCommandInput,
  DetachSecurityProfileCommandOutput,
} from "./commands/DetachSecurityProfileCommand";
import {
  DetachThingPrincipalCommand,
  DetachThingPrincipalCommandInput,
  DetachThingPrincipalCommandOutput,
} from "./commands/DetachThingPrincipalCommand";
import {
  DisableTopicRuleCommand,
  DisableTopicRuleCommandInput,
  DisableTopicRuleCommandOutput,
} from "./commands/DisableTopicRuleCommand";
import {
  EnableTopicRuleCommand,
  EnableTopicRuleCommandInput,
  EnableTopicRuleCommandOutput,
} from "./commands/EnableTopicRuleCommand";
import {
  GetBehaviorModelTrainingSummariesCommand,
  GetBehaviorModelTrainingSummariesCommandInput,
  GetBehaviorModelTrainingSummariesCommandOutput,
} from "./commands/GetBehaviorModelTrainingSummariesCommand";
import {
  GetBucketsAggregationCommand,
  GetBucketsAggregationCommandInput,
  GetBucketsAggregationCommandOutput,
} from "./commands/GetBucketsAggregationCommand";
import {
  GetCardinalityCommand,
  GetCardinalityCommandInput,
  GetCardinalityCommandOutput,
} from "./commands/GetCardinalityCommand";
import {
  GetEffectivePoliciesCommand,
  GetEffectivePoliciesCommandInput,
  GetEffectivePoliciesCommandOutput,
} from "./commands/GetEffectivePoliciesCommand";
import {
  GetIndexingConfigurationCommand,
  GetIndexingConfigurationCommandInput,
  GetIndexingConfigurationCommandOutput,
} from "./commands/GetIndexingConfigurationCommand";
import {
  GetJobDocumentCommand,
  GetJobDocumentCommandInput,
  GetJobDocumentCommandOutput,
} from "./commands/GetJobDocumentCommand";
import {
  GetLoggingOptionsCommand,
  GetLoggingOptionsCommandInput,
  GetLoggingOptionsCommandOutput,
} from "./commands/GetLoggingOptionsCommand";
import {
  GetOTAUpdateCommand,
  GetOTAUpdateCommandInput,
  GetOTAUpdateCommandOutput,
} from "./commands/GetOTAUpdateCommand";
import { GetPackageCommand, GetPackageCommandInput, GetPackageCommandOutput } from "./commands/GetPackageCommand";
import {
  GetPackageConfigurationCommand,
  GetPackageConfigurationCommandInput,
  GetPackageConfigurationCommandOutput,
} from "./commands/GetPackageConfigurationCommand";
import {
  GetPackageVersionCommand,
  GetPackageVersionCommandInput,
  GetPackageVersionCommandOutput,
} from "./commands/GetPackageVersionCommand";
import {
  GetPercentilesCommand,
  GetPercentilesCommandInput,
  GetPercentilesCommandOutput,
} from "./commands/GetPercentilesCommand";
import { GetPolicyCommand, GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import {
  GetPolicyVersionCommand,
  GetPolicyVersionCommandInput,
  GetPolicyVersionCommandOutput,
} from "./commands/GetPolicyVersionCommand";
import {
  GetRegistrationCodeCommand,
  GetRegistrationCodeCommandInput,
  GetRegistrationCodeCommandOutput,
} from "./commands/GetRegistrationCodeCommand";
import {
  GetStatisticsCommand,
  GetStatisticsCommandInput,
  GetStatisticsCommandOutput,
} from "./commands/GetStatisticsCommand";
import {
  GetTopicRuleCommand,
  GetTopicRuleCommandInput,
  GetTopicRuleCommandOutput,
} from "./commands/GetTopicRuleCommand";
import {
  GetTopicRuleDestinationCommand,
  GetTopicRuleDestinationCommandInput,
  GetTopicRuleDestinationCommandOutput,
} from "./commands/GetTopicRuleDestinationCommand";
import {
  GetV2LoggingOptionsCommand,
  GetV2LoggingOptionsCommandInput,
  GetV2LoggingOptionsCommandOutput,
} from "./commands/GetV2LoggingOptionsCommand";
import {
  ListActiveViolationsCommand,
  ListActiveViolationsCommandInput,
  ListActiveViolationsCommandOutput,
} from "./commands/ListActiveViolationsCommand";
import {
  ListAttachedPoliciesCommand,
  ListAttachedPoliciesCommandInput,
  ListAttachedPoliciesCommandOutput,
} from "./commands/ListAttachedPoliciesCommand";
import {
  ListAuditFindingsCommand,
  ListAuditFindingsCommandInput,
  ListAuditFindingsCommandOutput,
} from "./commands/ListAuditFindingsCommand";
import {
  ListAuditMitigationActionsExecutionsCommand,
  ListAuditMitigationActionsExecutionsCommandInput,
  ListAuditMitigationActionsExecutionsCommandOutput,
} from "./commands/ListAuditMitigationActionsExecutionsCommand";
import {
  ListAuditMitigationActionsTasksCommand,
  ListAuditMitigationActionsTasksCommandInput,
  ListAuditMitigationActionsTasksCommandOutput,
} from "./commands/ListAuditMitigationActionsTasksCommand";
import {
  ListAuditSuppressionsCommand,
  ListAuditSuppressionsCommandInput,
  ListAuditSuppressionsCommandOutput,
} from "./commands/ListAuditSuppressionsCommand";
import {
  ListAuditTasksCommand,
  ListAuditTasksCommandInput,
  ListAuditTasksCommandOutput,
} from "./commands/ListAuditTasksCommand";
import {
  ListAuthorizersCommand,
  ListAuthorizersCommandInput,
  ListAuthorizersCommandOutput,
} from "./commands/ListAuthorizersCommand";
import {
  ListBillingGroupsCommand,
  ListBillingGroupsCommandInput,
  ListBillingGroupsCommandOutput,
} from "./commands/ListBillingGroupsCommand";
import {
  ListCACertificatesCommand,
  ListCACertificatesCommandInput,
  ListCACertificatesCommandOutput,
} from "./commands/ListCACertificatesCommand";
import {
  ListCertificatesByCACommand,
  ListCertificatesByCACommandInput,
  ListCertificatesByCACommandOutput,
} from "./commands/ListCertificatesByCACommand";
import {
  ListCertificatesCommand,
  ListCertificatesCommandInput,
  ListCertificatesCommandOutput,
} from "./commands/ListCertificatesCommand";
import {
  ListCustomMetricsCommand,
  ListCustomMetricsCommandInput,
  ListCustomMetricsCommandOutput,
} from "./commands/ListCustomMetricsCommand";
import {
  ListDetectMitigationActionsExecutionsCommand,
  ListDetectMitigationActionsExecutionsCommandInput,
  ListDetectMitigationActionsExecutionsCommandOutput,
} from "./commands/ListDetectMitigationActionsExecutionsCommand";
import {
  ListDetectMitigationActionsTasksCommand,
  ListDetectMitigationActionsTasksCommandInput,
  ListDetectMitigationActionsTasksCommandOutput,
} from "./commands/ListDetectMitigationActionsTasksCommand";
import {
  ListDimensionsCommand,
  ListDimensionsCommandInput,
  ListDimensionsCommandOutput,
} from "./commands/ListDimensionsCommand";
import {
  ListDomainConfigurationsCommand,
  ListDomainConfigurationsCommandInput,
  ListDomainConfigurationsCommandOutput,
} from "./commands/ListDomainConfigurationsCommand";
import {
  ListFleetMetricsCommand,
  ListFleetMetricsCommandInput,
  ListFleetMetricsCommandOutput,
} from "./commands/ListFleetMetricsCommand";
import { ListIndicesCommand, ListIndicesCommandInput, ListIndicesCommandOutput } from "./commands/ListIndicesCommand";
import {
  ListJobExecutionsForJobCommand,
  ListJobExecutionsForJobCommandInput,
  ListJobExecutionsForJobCommandOutput,
} from "./commands/ListJobExecutionsForJobCommand";
import {
  ListJobExecutionsForThingCommand,
  ListJobExecutionsForThingCommandInput,
  ListJobExecutionsForThingCommandOutput,
} from "./commands/ListJobExecutionsForThingCommand";
import { ListJobsCommand, ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import {
  ListJobTemplatesCommand,
  ListJobTemplatesCommandInput,
  ListJobTemplatesCommandOutput,
} from "./commands/ListJobTemplatesCommand";
import {
  ListManagedJobTemplatesCommand,
  ListManagedJobTemplatesCommandInput,
  ListManagedJobTemplatesCommandOutput,
} from "./commands/ListManagedJobTemplatesCommand";
import {
  ListMetricValuesCommand,
  ListMetricValuesCommandInput,
  ListMetricValuesCommandOutput,
} from "./commands/ListMetricValuesCommand";
import {
  ListMitigationActionsCommand,
  ListMitigationActionsCommandInput,
  ListMitigationActionsCommandOutput,
} from "./commands/ListMitigationActionsCommand";
import {
  ListOTAUpdatesCommand,
  ListOTAUpdatesCommandInput,
  ListOTAUpdatesCommandOutput,
} from "./commands/ListOTAUpdatesCommand";
import {
  ListOutgoingCertificatesCommand,
  ListOutgoingCertificatesCommandInput,
  ListOutgoingCertificatesCommandOutput,
} from "./commands/ListOutgoingCertificatesCommand";
import {
  ListPackagesCommand,
  ListPackagesCommandInput,
  ListPackagesCommandOutput,
} from "./commands/ListPackagesCommand";
import {
  ListPackageVersionsCommand,
  ListPackageVersionsCommandInput,
  ListPackageVersionsCommandOutput,
} from "./commands/ListPackageVersionsCommand";
import {
  ListPoliciesCommand,
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput,
} from "./commands/ListPoliciesCommand";
import {
  ListPolicyPrincipalsCommand,
  ListPolicyPrincipalsCommandInput,
  ListPolicyPrincipalsCommandOutput,
} from "./commands/ListPolicyPrincipalsCommand";
import {
  ListPolicyVersionsCommand,
  ListPolicyVersionsCommandInput,
  ListPolicyVersionsCommandOutput,
} from "./commands/ListPolicyVersionsCommand";
import {
  ListPrincipalPoliciesCommand,
  ListPrincipalPoliciesCommandInput,
  ListPrincipalPoliciesCommandOutput,
} from "./commands/ListPrincipalPoliciesCommand";
import {
  ListPrincipalThingsCommand,
  ListPrincipalThingsCommandInput,
  ListPrincipalThingsCommandOutput,
} from "./commands/ListPrincipalThingsCommand";
import {
  ListProvisioningTemplatesCommand,
  ListProvisioningTemplatesCommandInput,
  ListProvisioningTemplatesCommandOutput,
} from "./commands/ListProvisioningTemplatesCommand";
import {
  ListProvisioningTemplateVersionsCommand,
  ListProvisioningTemplateVersionsCommandInput,
  ListProvisioningTemplateVersionsCommandOutput,
} from "./commands/ListProvisioningTemplateVersionsCommand";
import {
  ListRelatedResourcesForAuditFindingCommand,
  ListRelatedResourcesForAuditFindingCommandInput,
  ListRelatedResourcesForAuditFindingCommandOutput,
} from "./commands/ListRelatedResourcesForAuditFindingCommand";
import {
  ListRoleAliasesCommand,
  ListRoleAliasesCommandInput,
  ListRoleAliasesCommandOutput,
} from "./commands/ListRoleAliasesCommand";
import {
  ListScheduledAuditsCommand,
  ListScheduledAuditsCommandInput,
  ListScheduledAuditsCommandOutput,
} from "./commands/ListScheduledAuditsCommand";
import {
  ListSecurityProfilesCommand,
  ListSecurityProfilesCommandInput,
  ListSecurityProfilesCommandOutput,
} from "./commands/ListSecurityProfilesCommand";
import {
  ListSecurityProfilesForTargetCommand,
  ListSecurityProfilesForTargetCommandInput,
  ListSecurityProfilesForTargetCommandOutput,
} from "./commands/ListSecurityProfilesForTargetCommand";
import { ListStreamsCommand, ListStreamsCommandInput, ListStreamsCommandOutput } from "./commands/ListStreamsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTargetsForPolicyCommand,
  ListTargetsForPolicyCommandInput,
  ListTargetsForPolicyCommandOutput,
} from "./commands/ListTargetsForPolicyCommand";
import {
  ListTargetsForSecurityProfileCommand,
  ListTargetsForSecurityProfileCommandInput,
  ListTargetsForSecurityProfileCommandOutput,
} from "./commands/ListTargetsForSecurityProfileCommand";
import {
  ListThingGroupsCommand,
  ListThingGroupsCommandInput,
  ListThingGroupsCommandOutput,
} from "./commands/ListThingGroupsCommand";
import {
  ListThingGroupsForThingCommand,
  ListThingGroupsForThingCommandInput,
  ListThingGroupsForThingCommandOutput,
} from "./commands/ListThingGroupsForThingCommand";
import {
  ListThingPrincipalsCommand,
  ListThingPrincipalsCommandInput,
  ListThingPrincipalsCommandOutput,
} from "./commands/ListThingPrincipalsCommand";
import {
  ListThingRegistrationTaskReportsCommand,
  ListThingRegistrationTaskReportsCommandInput,
  ListThingRegistrationTaskReportsCommandOutput,
} from "./commands/ListThingRegistrationTaskReportsCommand";
import {
  ListThingRegistrationTasksCommand,
  ListThingRegistrationTasksCommandInput,
  ListThingRegistrationTasksCommandOutput,
} from "./commands/ListThingRegistrationTasksCommand";
import { ListThingsCommand, ListThingsCommandInput, ListThingsCommandOutput } from "./commands/ListThingsCommand";
import {
  ListThingsInBillingGroupCommand,
  ListThingsInBillingGroupCommandInput,
  ListThingsInBillingGroupCommandOutput,
} from "./commands/ListThingsInBillingGroupCommand";
import {
  ListThingsInThingGroupCommand,
  ListThingsInThingGroupCommandInput,
  ListThingsInThingGroupCommandOutput,
} from "./commands/ListThingsInThingGroupCommand";
import {
  ListThingTypesCommand,
  ListThingTypesCommandInput,
  ListThingTypesCommandOutput,
} from "./commands/ListThingTypesCommand";
import {
  ListTopicRuleDestinationsCommand,
  ListTopicRuleDestinationsCommandInput,
  ListTopicRuleDestinationsCommandOutput,
} from "./commands/ListTopicRuleDestinationsCommand";
import {
  ListTopicRulesCommand,
  ListTopicRulesCommandInput,
  ListTopicRulesCommandOutput,
} from "./commands/ListTopicRulesCommand";
import {
  ListV2LoggingLevelsCommand,
  ListV2LoggingLevelsCommandInput,
  ListV2LoggingLevelsCommandOutput,
} from "./commands/ListV2LoggingLevelsCommand";
import {
  ListViolationEventsCommand,
  ListViolationEventsCommandInput,
  ListViolationEventsCommandOutput,
} from "./commands/ListViolationEventsCommand";
import {
  PutVerificationStateOnViolationCommand,
  PutVerificationStateOnViolationCommandInput,
  PutVerificationStateOnViolationCommandOutput,
} from "./commands/PutVerificationStateOnViolationCommand";
import {
  RegisterCACertificateCommand,
  RegisterCACertificateCommandInput,
  RegisterCACertificateCommandOutput,
} from "./commands/RegisterCACertificateCommand";
import {
  RegisterCertificateCommand,
  RegisterCertificateCommandInput,
  RegisterCertificateCommandOutput,
} from "./commands/RegisterCertificateCommand";
import {
  RegisterCertificateWithoutCACommand,
  RegisterCertificateWithoutCACommandInput,
  RegisterCertificateWithoutCACommandOutput,
} from "./commands/RegisterCertificateWithoutCACommand";
import {
  RegisterThingCommand,
  RegisterThingCommandInput,
  RegisterThingCommandOutput,
} from "./commands/RegisterThingCommand";
import {
  RejectCertificateTransferCommand,
  RejectCertificateTransferCommandInput,
  RejectCertificateTransferCommandOutput,
} from "./commands/RejectCertificateTransferCommand";
import {
  RemoveThingFromBillingGroupCommand,
  RemoveThingFromBillingGroupCommandInput,
  RemoveThingFromBillingGroupCommandOutput,
} from "./commands/RemoveThingFromBillingGroupCommand";
import {
  RemoveThingFromThingGroupCommand,
  RemoveThingFromThingGroupCommandInput,
  RemoveThingFromThingGroupCommandOutput,
} from "./commands/RemoveThingFromThingGroupCommand";
import {
  ReplaceTopicRuleCommand,
  ReplaceTopicRuleCommandInput,
  ReplaceTopicRuleCommandOutput,
} from "./commands/ReplaceTopicRuleCommand";
import { SearchIndexCommand, SearchIndexCommandInput, SearchIndexCommandOutput } from "./commands/SearchIndexCommand";
import {
  SetDefaultAuthorizerCommand,
  SetDefaultAuthorizerCommandInput,
  SetDefaultAuthorizerCommandOutput,
} from "./commands/SetDefaultAuthorizerCommand";
import {
  SetDefaultPolicyVersionCommand,
  SetDefaultPolicyVersionCommandInput,
  SetDefaultPolicyVersionCommandOutput,
} from "./commands/SetDefaultPolicyVersionCommand";
import {
  SetLoggingOptionsCommand,
  SetLoggingOptionsCommandInput,
  SetLoggingOptionsCommandOutput,
} from "./commands/SetLoggingOptionsCommand";
import {
  SetV2LoggingLevelCommand,
  SetV2LoggingLevelCommandInput,
  SetV2LoggingLevelCommandOutput,
} from "./commands/SetV2LoggingLevelCommand";
import {
  SetV2LoggingOptionsCommand,
  SetV2LoggingOptionsCommandInput,
  SetV2LoggingOptionsCommandOutput,
} from "./commands/SetV2LoggingOptionsCommand";
import {
  StartAuditMitigationActionsTaskCommand,
  StartAuditMitigationActionsTaskCommandInput,
  StartAuditMitigationActionsTaskCommandOutput,
} from "./commands/StartAuditMitigationActionsTaskCommand";
import {
  StartDetectMitigationActionsTaskCommand,
  StartDetectMitigationActionsTaskCommandInput,
  StartDetectMitigationActionsTaskCommandOutput,
} from "./commands/StartDetectMitigationActionsTaskCommand";
import {
  StartOnDemandAuditTaskCommand,
  StartOnDemandAuditTaskCommandInput,
  StartOnDemandAuditTaskCommandOutput,
} from "./commands/StartOnDemandAuditTaskCommand";
import {
  StartThingRegistrationTaskCommand,
  StartThingRegistrationTaskCommandInput,
  StartThingRegistrationTaskCommandOutput,
} from "./commands/StartThingRegistrationTaskCommand";
import {
  StopThingRegistrationTaskCommand,
  StopThingRegistrationTaskCommandInput,
  StopThingRegistrationTaskCommandOutput,
} from "./commands/StopThingRegistrationTaskCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestAuthorizationCommand,
  TestAuthorizationCommandInput,
  TestAuthorizationCommandOutput,
} from "./commands/TestAuthorizationCommand";
import {
  TestInvokeAuthorizerCommand,
  TestInvokeAuthorizerCommandInput,
  TestInvokeAuthorizerCommandOutput,
} from "./commands/TestInvokeAuthorizerCommand";
import {
  TransferCertificateCommand,
  TransferCertificateCommandInput,
  TransferCertificateCommandOutput,
} from "./commands/TransferCertificateCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAccountAuditConfigurationCommand,
  UpdateAccountAuditConfigurationCommandInput,
  UpdateAccountAuditConfigurationCommandOutput,
} from "./commands/UpdateAccountAuditConfigurationCommand";
import {
  UpdateAuditSuppressionCommand,
  UpdateAuditSuppressionCommandInput,
  UpdateAuditSuppressionCommandOutput,
} from "./commands/UpdateAuditSuppressionCommand";
import {
  UpdateAuthorizerCommand,
  UpdateAuthorizerCommandInput,
  UpdateAuthorizerCommandOutput,
} from "./commands/UpdateAuthorizerCommand";
import {
  UpdateBillingGroupCommand,
  UpdateBillingGroupCommandInput,
  UpdateBillingGroupCommandOutput,
} from "./commands/UpdateBillingGroupCommand";
import {
  UpdateCACertificateCommand,
  UpdateCACertificateCommandInput,
  UpdateCACertificateCommandOutput,
} from "./commands/UpdateCACertificateCommand";
import {
  UpdateCertificateCommand,
  UpdateCertificateCommandInput,
  UpdateCertificateCommandOutput,
} from "./commands/UpdateCertificateCommand";
import {
  UpdateCustomMetricCommand,
  UpdateCustomMetricCommandInput,
  UpdateCustomMetricCommandOutput,
} from "./commands/UpdateCustomMetricCommand";
import {
  UpdateDimensionCommand,
  UpdateDimensionCommandInput,
  UpdateDimensionCommandOutput,
} from "./commands/UpdateDimensionCommand";
import {
  UpdateDomainConfigurationCommand,
  UpdateDomainConfigurationCommandInput,
  UpdateDomainConfigurationCommandOutput,
} from "./commands/UpdateDomainConfigurationCommand";
import {
  UpdateDynamicThingGroupCommand,
  UpdateDynamicThingGroupCommandInput,
  UpdateDynamicThingGroupCommandOutput,
} from "./commands/UpdateDynamicThingGroupCommand";
import {
  UpdateEventConfigurationsCommand,
  UpdateEventConfigurationsCommandInput,
  UpdateEventConfigurationsCommandOutput,
} from "./commands/UpdateEventConfigurationsCommand";
import {
  UpdateFleetMetricCommand,
  UpdateFleetMetricCommandInput,
  UpdateFleetMetricCommandOutput,
} from "./commands/UpdateFleetMetricCommand";
import {
  UpdateIndexingConfigurationCommand,
  UpdateIndexingConfigurationCommandInput,
  UpdateIndexingConfigurationCommandOutput,
} from "./commands/UpdateIndexingConfigurationCommand";
import { UpdateJobCommand, UpdateJobCommandInput, UpdateJobCommandOutput } from "./commands/UpdateJobCommand";
import {
  UpdateMitigationActionCommand,
  UpdateMitigationActionCommandInput,
  UpdateMitigationActionCommandOutput,
} from "./commands/UpdateMitigationActionCommand";
import {
  UpdatePackageCommand,
  UpdatePackageCommandInput,
  UpdatePackageCommandOutput,
} from "./commands/UpdatePackageCommand";
import {
  UpdatePackageConfigurationCommand,
  UpdatePackageConfigurationCommandInput,
  UpdatePackageConfigurationCommandOutput,
} from "./commands/UpdatePackageConfigurationCommand";
import {
  UpdatePackageVersionCommand,
  UpdatePackageVersionCommandInput,
  UpdatePackageVersionCommandOutput,
} from "./commands/UpdatePackageVersionCommand";
import {
  UpdateProvisioningTemplateCommand,
  UpdateProvisioningTemplateCommandInput,
  UpdateProvisioningTemplateCommandOutput,
} from "./commands/UpdateProvisioningTemplateCommand";
import {
  UpdateRoleAliasCommand,
  UpdateRoleAliasCommandInput,
  UpdateRoleAliasCommandOutput,
} from "./commands/UpdateRoleAliasCommand";
import {
  UpdateScheduledAuditCommand,
  UpdateScheduledAuditCommandInput,
  UpdateScheduledAuditCommandOutput,
} from "./commands/UpdateScheduledAuditCommand";
import {
  UpdateSecurityProfileCommand,
  UpdateSecurityProfileCommandInput,
  UpdateSecurityProfileCommandOutput,
} from "./commands/UpdateSecurityProfileCommand";
import {
  UpdateStreamCommand,
  UpdateStreamCommandInput,
  UpdateStreamCommandOutput,
} from "./commands/UpdateStreamCommand";
import { UpdateThingCommand, UpdateThingCommandInput, UpdateThingCommandOutput } from "./commands/UpdateThingCommand";
import {
  UpdateThingGroupCommand,
  UpdateThingGroupCommandInput,
  UpdateThingGroupCommandOutput,
} from "./commands/UpdateThingGroupCommand";
import {
  UpdateThingGroupsForThingCommand,
  UpdateThingGroupsForThingCommandInput,
  UpdateThingGroupsForThingCommandOutput,
} from "./commands/UpdateThingGroupsForThingCommand";
import {
  UpdateTopicRuleDestinationCommand,
  UpdateTopicRuleDestinationCommandInput,
  UpdateTopicRuleDestinationCommandOutput,
} from "./commands/UpdateTopicRuleDestinationCommand";
import {
  ValidateSecurityProfileBehaviorsCommand,
  ValidateSecurityProfileBehaviorsCommandInput,
  ValidateSecurityProfileBehaviorsCommandOutput,
} from "./commands/ValidateSecurityProfileBehaviorsCommand";
import { IoTClient, IoTClientConfig } from "./IoTClient";

const commands = {
  AcceptCertificateTransferCommand,
  AddThingToBillingGroupCommand,
  AddThingToThingGroupCommand,
  AssociateTargetsWithJobCommand,
  AttachPolicyCommand,
  AttachPrincipalPolicyCommand,
  AttachSecurityProfileCommand,
  AttachThingPrincipalCommand,
  CancelAuditMitigationActionsTaskCommand,
  CancelAuditTaskCommand,
  CancelCertificateTransferCommand,
  CancelDetectMitigationActionsTaskCommand,
  CancelJobCommand,
  CancelJobExecutionCommand,
  ClearDefaultAuthorizerCommand,
  ConfirmTopicRuleDestinationCommand,
  CreateAuditSuppressionCommand,
  CreateAuthorizerCommand,
  CreateBillingGroupCommand,
  CreateCertificateFromCsrCommand,
  CreateCustomMetricCommand,
  CreateDimensionCommand,
  CreateDomainConfigurationCommand,
  CreateDynamicThingGroupCommand,
  CreateFleetMetricCommand,
  CreateJobCommand,
  CreateJobTemplateCommand,
  CreateKeysAndCertificateCommand,
  CreateMitigationActionCommand,
  CreateOTAUpdateCommand,
  CreatePackageCommand,
  CreatePackageVersionCommand,
  CreatePolicyCommand,
  CreatePolicyVersionCommand,
  CreateProvisioningClaimCommand,
  CreateProvisioningTemplateCommand,
  CreateProvisioningTemplateVersionCommand,
  CreateRoleAliasCommand,
  CreateScheduledAuditCommand,
  CreateSecurityProfileCommand,
  CreateStreamCommand,
  CreateThingCommand,
  CreateThingGroupCommand,
  CreateThingTypeCommand,
  CreateTopicRuleCommand,
  CreateTopicRuleDestinationCommand,
  DeleteAccountAuditConfigurationCommand,
  DeleteAuditSuppressionCommand,
  DeleteAuthorizerCommand,
  DeleteBillingGroupCommand,
  DeleteCACertificateCommand,
  DeleteCertificateCommand,
  DeleteCustomMetricCommand,
  DeleteDimensionCommand,
  DeleteDomainConfigurationCommand,
  DeleteDynamicThingGroupCommand,
  DeleteFleetMetricCommand,
  DeleteJobCommand,
  DeleteJobExecutionCommand,
  DeleteJobTemplateCommand,
  DeleteMitigationActionCommand,
  DeleteOTAUpdateCommand,
  DeletePackageCommand,
  DeletePackageVersionCommand,
  DeletePolicyCommand,
  DeletePolicyVersionCommand,
  DeleteProvisioningTemplateCommand,
  DeleteProvisioningTemplateVersionCommand,
  DeleteRegistrationCodeCommand,
  DeleteRoleAliasCommand,
  DeleteScheduledAuditCommand,
  DeleteSecurityProfileCommand,
  DeleteStreamCommand,
  DeleteThingCommand,
  DeleteThingGroupCommand,
  DeleteThingTypeCommand,
  DeleteTopicRuleCommand,
  DeleteTopicRuleDestinationCommand,
  DeleteV2LoggingLevelCommand,
  DeprecateThingTypeCommand,
  DescribeAccountAuditConfigurationCommand,
  DescribeAuditFindingCommand,
  DescribeAuditMitigationActionsTaskCommand,
  DescribeAuditSuppressionCommand,
  DescribeAuditTaskCommand,
  DescribeAuthorizerCommand,
  DescribeBillingGroupCommand,
  DescribeCACertificateCommand,
  DescribeCertificateCommand,
  DescribeCustomMetricCommand,
  DescribeDefaultAuthorizerCommand,
  DescribeDetectMitigationActionsTaskCommand,
  DescribeDimensionCommand,
  DescribeDomainConfigurationCommand,
  DescribeEndpointCommand,
  DescribeEventConfigurationsCommand,
  DescribeFleetMetricCommand,
  DescribeIndexCommand,
  DescribeJobCommand,
  DescribeJobExecutionCommand,
  DescribeJobTemplateCommand,
  DescribeManagedJobTemplateCommand,
  DescribeMitigationActionCommand,
  DescribeProvisioningTemplateCommand,
  DescribeProvisioningTemplateVersionCommand,
  DescribeRoleAliasCommand,
  DescribeScheduledAuditCommand,
  DescribeSecurityProfileCommand,
  DescribeStreamCommand,
  DescribeThingCommand,
  DescribeThingGroupCommand,
  DescribeThingRegistrationTaskCommand,
  DescribeThingTypeCommand,
  DetachPolicyCommand,
  DetachPrincipalPolicyCommand,
  DetachSecurityProfileCommand,
  DetachThingPrincipalCommand,
  DisableTopicRuleCommand,
  EnableTopicRuleCommand,
  GetBehaviorModelTrainingSummariesCommand,
  GetBucketsAggregationCommand,
  GetCardinalityCommand,
  GetEffectivePoliciesCommand,
  GetIndexingConfigurationCommand,
  GetJobDocumentCommand,
  GetLoggingOptionsCommand,
  GetOTAUpdateCommand,
  GetPackageCommand,
  GetPackageConfigurationCommand,
  GetPackageVersionCommand,
  GetPercentilesCommand,
  GetPolicyCommand,
  GetPolicyVersionCommand,
  GetRegistrationCodeCommand,
  GetStatisticsCommand,
  GetTopicRuleCommand,
  GetTopicRuleDestinationCommand,
  GetV2LoggingOptionsCommand,
  ListActiveViolationsCommand,
  ListAttachedPoliciesCommand,
  ListAuditFindingsCommand,
  ListAuditMitigationActionsExecutionsCommand,
  ListAuditMitigationActionsTasksCommand,
  ListAuditSuppressionsCommand,
  ListAuditTasksCommand,
  ListAuthorizersCommand,
  ListBillingGroupsCommand,
  ListCACertificatesCommand,
  ListCertificatesCommand,
  ListCertificatesByCACommand,
  ListCustomMetricsCommand,
  ListDetectMitigationActionsExecutionsCommand,
  ListDetectMitigationActionsTasksCommand,
  ListDimensionsCommand,
  ListDomainConfigurationsCommand,
  ListFleetMetricsCommand,
  ListIndicesCommand,
  ListJobExecutionsForJobCommand,
  ListJobExecutionsForThingCommand,
  ListJobsCommand,
  ListJobTemplatesCommand,
  ListManagedJobTemplatesCommand,
  ListMetricValuesCommand,
  ListMitigationActionsCommand,
  ListOTAUpdatesCommand,
  ListOutgoingCertificatesCommand,
  ListPackagesCommand,
  ListPackageVersionsCommand,
  ListPoliciesCommand,
  ListPolicyPrincipalsCommand,
  ListPolicyVersionsCommand,
  ListPrincipalPoliciesCommand,
  ListPrincipalThingsCommand,
  ListProvisioningTemplatesCommand,
  ListProvisioningTemplateVersionsCommand,
  ListRelatedResourcesForAuditFindingCommand,
  ListRoleAliasesCommand,
  ListScheduledAuditsCommand,
  ListSecurityProfilesCommand,
  ListSecurityProfilesForTargetCommand,
  ListStreamsCommand,
  ListTagsForResourceCommand,
  ListTargetsForPolicyCommand,
  ListTargetsForSecurityProfileCommand,
  ListThingGroupsCommand,
  ListThingGroupsForThingCommand,
  ListThingPrincipalsCommand,
  ListThingRegistrationTaskReportsCommand,
  ListThingRegistrationTasksCommand,
  ListThingsCommand,
  ListThingsInBillingGroupCommand,
  ListThingsInThingGroupCommand,
  ListThingTypesCommand,
  ListTopicRuleDestinationsCommand,
  ListTopicRulesCommand,
  ListV2LoggingLevelsCommand,
  ListViolationEventsCommand,
  PutVerificationStateOnViolationCommand,
  RegisterCACertificateCommand,
  RegisterCertificateCommand,
  RegisterCertificateWithoutCACommand,
  RegisterThingCommand,
  RejectCertificateTransferCommand,
  RemoveThingFromBillingGroupCommand,
  RemoveThingFromThingGroupCommand,
  ReplaceTopicRuleCommand,
  SearchIndexCommand,
  SetDefaultAuthorizerCommand,
  SetDefaultPolicyVersionCommand,
  SetLoggingOptionsCommand,
  SetV2LoggingLevelCommand,
  SetV2LoggingOptionsCommand,
  StartAuditMitigationActionsTaskCommand,
  StartDetectMitigationActionsTaskCommand,
  StartOnDemandAuditTaskCommand,
  StartThingRegistrationTaskCommand,
  StopThingRegistrationTaskCommand,
  TagResourceCommand,
  TestAuthorizationCommand,
  TestInvokeAuthorizerCommand,
  TransferCertificateCommand,
  UntagResourceCommand,
  UpdateAccountAuditConfigurationCommand,
  UpdateAuditSuppressionCommand,
  UpdateAuthorizerCommand,
  UpdateBillingGroupCommand,
  UpdateCACertificateCommand,
  UpdateCertificateCommand,
  UpdateCustomMetricCommand,
  UpdateDimensionCommand,
  UpdateDomainConfigurationCommand,
  UpdateDynamicThingGroupCommand,
  UpdateEventConfigurationsCommand,
  UpdateFleetMetricCommand,
  UpdateIndexingConfigurationCommand,
  UpdateJobCommand,
  UpdateMitigationActionCommand,
  UpdatePackageCommand,
  UpdatePackageConfigurationCommand,
  UpdatePackageVersionCommand,
  UpdateProvisioningTemplateCommand,
  UpdateRoleAliasCommand,
  UpdateScheduledAuditCommand,
  UpdateSecurityProfileCommand,
  UpdateStreamCommand,
  UpdateThingCommand,
  UpdateThingGroupCommand,
  UpdateThingGroupsForThingCommand,
  UpdateTopicRuleDestinationCommand,
  ValidateSecurityProfileBehaviorsCommand,
};

export interface IoT {
  /**
   * @see {@link AcceptCertificateTransferCommand}
   */
  acceptCertificateTransfer(
    args: AcceptCertificateTransferCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptCertificateTransferCommandOutput>;
  acceptCertificateTransfer(
    args: AcceptCertificateTransferCommandInput,
    cb: (err: any, data?: AcceptCertificateTransferCommandOutput) => void
  ): void;
  acceptCertificateTransfer(
    args: AcceptCertificateTransferCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptCertificateTransferCommandOutput) => void
  ): void;

  /**
   * @see {@link AddThingToBillingGroupCommand}
   */
  addThingToBillingGroup(
    args: AddThingToBillingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddThingToBillingGroupCommandOutput>;
  addThingToBillingGroup(
    args: AddThingToBillingGroupCommandInput,
    cb: (err: any, data?: AddThingToBillingGroupCommandOutput) => void
  ): void;
  addThingToBillingGroup(
    args: AddThingToBillingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddThingToBillingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link AddThingToThingGroupCommand}
   */
  addThingToThingGroup(
    args: AddThingToThingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddThingToThingGroupCommandOutput>;
  addThingToThingGroup(
    args: AddThingToThingGroupCommandInput,
    cb: (err: any, data?: AddThingToThingGroupCommandOutput) => void
  ): void;
  addThingToThingGroup(
    args: AddThingToThingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddThingToThingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateTargetsWithJobCommand}
   */
  associateTargetsWithJob(
    args: AssociateTargetsWithJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateTargetsWithJobCommandOutput>;
  associateTargetsWithJob(
    args: AssociateTargetsWithJobCommandInput,
    cb: (err: any, data?: AssociateTargetsWithJobCommandOutput) => void
  ): void;
  associateTargetsWithJob(
    args: AssociateTargetsWithJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateTargetsWithJobCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachPolicyCommand}
   */
  attachPolicy(args: AttachPolicyCommandInput, options?: __HttpHandlerOptions): Promise<AttachPolicyCommandOutput>;
  attachPolicy(args: AttachPolicyCommandInput, cb: (err: any, data?: AttachPolicyCommandOutput) => void): void;
  attachPolicy(
    args: AttachPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachPrincipalPolicyCommand}
   */
  attachPrincipalPolicy(
    args: AttachPrincipalPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachPrincipalPolicyCommandOutput>;
  attachPrincipalPolicy(
    args: AttachPrincipalPolicyCommandInput,
    cb: (err: any, data?: AttachPrincipalPolicyCommandOutput) => void
  ): void;
  attachPrincipalPolicy(
    args: AttachPrincipalPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachPrincipalPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachSecurityProfileCommand}
   */
  attachSecurityProfile(
    args: AttachSecurityProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachSecurityProfileCommandOutput>;
  attachSecurityProfile(
    args: AttachSecurityProfileCommandInput,
    cb: (err: any, data?: AttachSecurityProfileCommandOutput) => void
  ): void;
  attachSecurityProfile(
    args: AttachSecurityProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachSecurityProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachThingPrincipalCommand}
   */
  attachThingPrincipal(
    args: AttachThingPrincipalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachThingPrincipalCommandOutput>;
  attachThingPrincipal(
    args: AttachThingPrincipalCommandInput,
    cb: (err: any, data?: AttachThingPrincipalCommandOutput) => void
  ): void;
  attachThingPrincipal(
    args: AttachThingPrincipalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachThingPrincipalCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelAuditMitigationActionsTaskCommand}
   */
  cancelAuditMitigationActionsTask(
    args: CancelAuditMitigationActionsTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelAuditMitigationActionsTaskCommandOutput>;
  cancelAuditMitigationActionsTask(
    args: CancelAuditMitigationActionsTaskCommandInput,
    cb: (err: any, data?: CancelAuditMitigationActionsTaskCommandOutput) => void
  ): void;
  cancelAuditMitigationActionsTask(
    args: CancelAuditMitigationActionsTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelAuditMitigationActionsTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelAuditTaskCommand}
   */
  cancelAuditTask(
    args: CancelAuditTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelAuditTaskCommandOutput>;
  cancelAuditTask(args: CancelAuditTaskCommandInput, cb: (err: any, data?: CancelAuditTaskCommandOutput) => void): void;
  cancelAuditTask(
    args: CancelAuditTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelAuditTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelCertificateTransferCommand}
   */
  cancelCertificateTransfer(
    args: CancelCertificateTransferCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelCertificateTransferCommandOutput>;
  cancelCertificateTransfer(
    args: CancelCertificateTransferCommandInput,
    cb: (err: any, data?: CancelCertificateTransferCommandOutput) => void
  ): void;
  cancelCertificateTransfer(
    args: CancelCertificateTransferCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelCertificateTransferCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelDetectMitigationActionsTaskCommand}
   */
  cancelDetectMitigationActionsTask(
    args: CancelDetectMitigationActionsTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelDetectMitigationActionsTaskCommandOutput>;
  cancelDetectMitigationActionsTask(
    args: CancelDetectMitigationActionsTaskCommandInput,
    cb: (err: any, data?: CancelDetectMitigationActionsTaskCommandOutput) => void
  ): void;
  cancelDetectMitigationActionsTask(
    args: CancelDetectMitigationActionsTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelDetectMitigationActionsTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelJobCommand}
   */
  cancelJob(args: CancelJobCommandInput, options?: __HttpHandlerOptions): Promise<CancelJobCommandOutput>;
  cancelJob(args: CancelJobCommandInput, cb: (err: any, data?: CancelJobCommandOutput) => void): void;
  cancelJob(
    args: CancelJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelJobExecutionCommand}
   */
  cancelJobExecution(
    args: CancelJobExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelJobExecutionCommandOutput>;
  cancelJobExecution(
    args: CancelJobExecutionCommandInput,
    cb: (err: any, data?: CancelJobExecutionCommandOutput) => void
  ): void;
  cancelJobExecution(
    args: CancelJobExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelJobExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link ClearDefaultAuthorizerCommand}
   */
  clearDefaultAuthorizer(
    args: ClearDefaultAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ClearDefaultAuthorizerCommandOutput>;
  clearDefaultAuthorizer(
    args: ClearDefaultAuthorizerCommandInput,
    cb: (err: any, data?: ClearDefaultAuthorizerCommandOutput) => void
  ): void;
  clearDefaultAuthorizer(
    args: ClearDefaultAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ClearDefaultAuthorizerCommandOutput) => void
  ): void;

  /**
   * @see {@link ConfirmTopicRuleDestinationCommand}
   */
  confirmTopicRuleDestination(
    args: ConfirmTopicRuleDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfirmTopicRuleDestinationCommandOutput>;
  confirmTopicRuleDestination(
    args: ConfirmTopicRuleDestinationCommandInput,
    cb: (err: any, data?: ConfirmTopicRuleDestinationCommandOutput) => void
  ): void;
  confirmTopicRuleDestination(
    args: ConfirmTopicRuleDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfirmTopicRuleDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAuditSuppressionCommand}
   */
  createAuditSuppression(
    args: CreateAuditSuppressionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAuditSuppressionCommandOutput>;
  createAuditSuppression(
    args: CreateAuditSuppressionCommandInput,
    cb: (err: any, data?: CreateAuditSuppressionCommandOutput) => void
  ): void;
  createAuditSuppression(
    args: CreateAuditSuppressionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAuditSuppressionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAuthorizerCommand}
   */
  createAuthorizer(
    args: CreateAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAuthorizerCommandOutput>;
  createAuthorizer(
    args: CreateAuthorizerCommandInput,
    cb: (err: any, data?: CreateAuthorizerCommandOutput) => void
  ): void;
  createAuthorizer(
    args: CreateAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAuthorizerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBillingGroupCommand}
   */
  createBillingGroup(
    args: CreateBillingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBillingGroupCommandOutput>;
  createBillingGroup(
    args: CreateBillingGroupCommandInput,
    cb: (err: any, data?: CreateBillingGroupCommandOutput) => void
  ): void;
  createBillingGroup(
    args: CreateBillingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBillingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCertificateFromCsrCommand}
   */
  createCertificateFromCsr(
    args: CreateCertificateFromCsrCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCertificateFromCsrCommandOutput>;
  createCertificateFromCsr(
    args: CreateCertificateFromCsrCommandInput,
    cb: (err: any, data?: CreateCertificateFromCsrCommandOutput) => void
  ): void;
  createCertificateFromCsr(
    args: CreateCertificateFromCsrCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCertificateFromCsrCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCustomMetricCommand}
   */
  createCustomMetric(
    args: CreateCustomMetricCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomMetricCommandOutput>;
  createCustomMetric(
    args: CreateCustomMetricCommandInput,
    cb: (err: any, data?: CreateCustomMetricCommandOutput) => void
  ): void;
  createCustomMetric(
    args: CreateCustomMetricCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomMetricCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDimensionCommand}
   */
  createDimension(
    args: CreateDimensionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDimensionCommandOutput>;
  createDimension(args: CreateDimensionCommandInput, cb: (err: any, data?: CreateDimensionCommandOutput) => void): void;
  createDimension(
    args: CreateDimensionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDimensionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDomainConfigurationCommand}
   */
  createDomainConfiguration(
    args: CreateDomainConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainConfigurationCommandOutput>;
  createDomainConfiguration(
    args: CreateDomainConfigurationCommandInput,
    cb: (err: any, data?: CreateDomainConfigurationCommandOutput) => void
  ): void;
  createDomainConfiguration(
    args: CreateDomainConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDynamicThingGroupCommand}
   */
  createDynamicThingGroup(
    args: CreateDynamicThingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDynamicThingGroupCommandOutput>;
  createDynamicThingGroup(
    args: CreateDynamicThingGroupCommandInput,
    cb: (err: any, data?: CreateDynamicThingGroupCommandOutput) => void
  ): void;
  createDynamicThingGroup(
    args: CreateDynamicThingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDynamicThingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFleetMetricCommand}
   */
  createFleetMetric(
    args: CreateFleetMetricCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFleetMetricCommandOutput>;
  createFleetMetric(
    args: CreateFleetMetricCommandInput,
    cb: (err: any, data?: CreateFleetMetricCommandOutput) => void
  ): void;
  createFleetMetric(
    args: CreateFleetMetricCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFleetMetricCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateJobCommand}
   */
  createJob(args: CreateJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateJobCommandOutput>;
  createJob(args: CreateJobCommandInput, cb: (err: any, data?: CreateJobCommandOutput) => void): void;
  createJob(
    args: CreateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateJobTemplateCommand}
   */
  createJobTemplate(
    args: CreateJobTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateJobTemplateCommandOutput>;
  createJobTemplate(
    args: CreateJobTemplateCommandInput,
    cb: (err: any, data?: CreateJobTemplateCommandOutput) => void
  ): void;
  createJobTemplate(
    args: CreateJobTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateJobTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKeysAndCertificateCommand}
   */
  createKeysAndCertificate(
    args: CreateKeysAndCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateKeysAndCertificateCommandOutput>;
  createKeysAndCertificate(
    args: CreateKeysAndCertificateCommandInput,
    cb: (err: any, data?: CreateKeysAndCertificateCommandOutput) => void
  ): void;
  createKeysAndCertificate(
    args: CreateKeysAndCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKeysAndCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMitigationActionCommand}
   */
  createMitigationAction(
    args: CreateMitigationActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMitigationActionCommandOutput>;
  createMitigationAction(
    args: CreateMitigationActionCommandInput,
    cb: (err: any, data?: CreateMitigationActionCommandOutput) => void
  ): void;
  createMitigationAction(
    args: CreateMitigationActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMitigationActionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOTAUpdateCommand}
   */
  createOTAUpdate(
    args: CreateOTAUpdateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOTAUpdateCommandOutput>;
  createOTAUpdate(args: CreateOTAUpdateCommandInput, cb: (err: any, data?: CreateOTAUpdateCommandOutput) => void): void;
  createOTAUpdate(
    args: CreateOTAUpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOTAUpdateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePackageCommand}
   */
  createPackage(args: CreatePackageCommandInput, options?: __HttpHandlerOptions): Promise<CreatePackageCommandOutput>;
  createPackage(args: CreatePackageCommandInput, cb: (err: any, data?: CreatePackageCommandOutput) => void): void;
  createPackage(
    args: CreatePackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePackageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePackageVersionCommand}
   */
  createPackageVersion(
    args: CreatePackageVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePackageVersionCommandOutput>;
  createPackageVersion(
    args: CreatePackageVersionCommandInput,
    cb: (err: any, data?: CreatePackageVersionCommandOutput) => void
  ): void;
  createPackageVersion(
    args: CreatePackageVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePackageVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePolicyCommand}
   */
  createPolicy(args: CreatePolicyCommandInput, options?: __HttpHandlerOptions): Promise<CreatePolicyCommandOutput>;
  createPolicy(args: CreatePolicyCommandInput, cb: (err: any, data?: CreatePolicyCommandOutput) => void): void;
  createPolicy(
    args: CreatePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePolicyVersionCommand}
   */
  createPolicyVersion(
    args: CreatePolicyVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePolicyVersionCommandOutput>;
  createPolicyVersion(
    args: CreatePolicyVersionCommandInput,
    cb: (err: any, data?: CreatePolicyVersionCommandOutput) => void
  ): void;
  createPolicyVersion(
    args: CreatePolicyVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePolicyVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProvisioningClaimCommand}
   */
  createProvisioningClaim(
    args: CreateProvisioningClaimCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProvisioningClaimCommandOutput>;
  createProvisioningClaim(
    args: CreateProvisioningClaimCommandInput,
    cb: (err: any, data?: CreateProvisioningClaimCommandOutput) => void
  ): void;
  createProvisioningClaim(
    args: CreateProvisioningClaimCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProvisioningClaimCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProvisioningTemplateCommand}
   */
  createProvisioningTemplate(
    args: CreateProvisioningTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProvisioningTemplateCommandOutput>;
  createProvisioningTemplate(
    args: CreateProvisioningTemplateCommandInput,
    cb: (err: any, data?: CreateProvisioningTemplateCommandOutput) => void
  ): void;
  createProvisioningTemplate(
    args: CreateProvisioningTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProvisioningTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProvisioningTemplateVersionCommand}
   */
  createProvisioningTemplateVersion(
    args: CreateProvisioningTemplateVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProvisioningTemplateVersionCommandOutput>;
  createProvisioningTemplateVersion(
    args: CreateProvisioningTemplateVersionCommandInput,
    cb: (err: any, data?: CreateProvisioningTemplateVersionCommandOutput) => void
  ): void;
  createProvisioningTemplateVersion(
    args: CreateProvisioningTemplateVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProvisioningTemplateVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRoleAliasCommand}
   */
  createRoleAlias(
    args: CreateRoleAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRoleAliasCommandOutput>;
  createRoleAlias(args: CreateRoleAliasCommandInput, cb: (err: any, data?: CreateRoleAliasCommandOutput) => void): void;
  createRoleAlias(
    args: CreateRoleAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRoleAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateScheduledAuditCommand}
   */
  createScheduledAudit(
    args: CreateScheduledAuditCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateScheduledAuditCommandOutput>;
  createScheduledAudit(
    args: CreateScheduledAuditCommandInput,
    cb: (err: any, data?: CreateScheduledAuditCommandOutput) => void
  ): void;
  createScheduledAudit(
    args: CreateScheduledAuditCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateScheduledAuditCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSecurityProfileCommand}
   */
  createSecurityProfile(
    args: CreateSecurityProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSecurityProfileCommandOutput>;
  createSecurityProfile(
    args: CreateSecurityProfileCommandInput,
    cb: (err: any, data?: CreateSecurityProfileCommandOutput) => void
  ): void;
  createSecurityProfile(
    args: CreateSecurityProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSecurityProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStreamCommand}
   */
  createStream(args: CreateStreamCommandInput, options?: __HttpHandlerOptions): Promise<CreateStreamCommandOutput>;
  createStream(args: CreateStreamCommandInput, cb: (err: any, data?: CreateStreamCommandOutput) => void): void;
  createStream(
    args: CreateStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateThingCommand}
   */
  createThing(args: CreateThingCommandInput, options?: __HttpHandlerOptions): Promise<CreateThingCommandOutput>;
  createThing(args: CreateThingCommandInput, cb: (err: any, data?: CreateThingCommandOutput) => void): void;
  createThing(
    args: CreateThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateThingCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateThingGroupCommand}
   */
  createThingGroup(
    args: CreateThingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateThingGroupCommandOutput>;
  createThingGroup(
    args: CreateThingGroupCommandInput,
    cb: (err: any, data?: CreateThingGroupCommandOutput) => void
  ): void;
  createThingGroup(
    args: CreateThingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateThingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateThingTypeCommand}
   */
  createThingType(
    args: CreateThingTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateThingTypeCommandOutput>;
  createThingType(args: CreateThingTypeCommandInput, cb: (err: any, data?: CreateThingTypeCommandOutput) => void): void;
  createThingType(
    args: CreateThingTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateThingTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTopicRuleCommand}
   */
  createTopicRule(
    args: CreateTopicRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTopicRuleCommandOutput>;
  createTopicRule(args: CreateTopicRuleCommandInput, cb: (err: any, data?: CreateTopicRuleCommandOutput) => void): void;
  createTopicRule(
    args: CreateTopicRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTopicRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTopicRuleDestinationCommand}
   */
  createTopicRuleDestination(
    args: CreateTopicRuleDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTopicRuleDestinationCommandOutput>;
  createTopicRuleDestination(
    args: CreateTopicRuleDestinationCommandInput,
    cb: (err: any, data?: CreateTopicRuleDestinationCommandOutput) => void
  ): void;
  createTopicRuleDestination(
    args: CreateTopicRuleDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTopicRuleDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccountAuditConfigurationCommand}
   */
  deleteAccountAuditConfiguration(
    args: DeleteAccountAuditConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccountAuditConfigurationCommandOutput>;
  deleteAccountAuditConfiguration(
    args: DeleteAccountAuditConfigurationCommandInput,
    cb: (err: any, data?: DeleteAccountAuditConfigurationCommandOutput) => void
  ): void;
  deleteAccountAuditConfiguration(
    args: DeleteAccountAuditConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccountAuditConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAuditSuppressionCommand}
   */
  deleteAuditSuppression(
    args: DeleteAuditSuppressionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAuditSuppressionCommandOutput>;
  deleteAuditSuppression(
    args: DeleteAuditSuppressionCommandInput,
    cb: (err: any, data?: DeleteAuditSuppressionCommandOutput) => void
  ): void;
  deleteAuditSuppression(
    args: DeleteAuditSuppressionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAuditSuppressionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAuthorizerCommand}
   */
  deleteAuthorizer(
    args: DeleteAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAuthorizerCommandOutput>;
  deleteAuthorizer(
    args: DeleteAuthorizerCommandInput,
    cb: (err: any, data?: DeleteAuthorizerCommandOutput) => void
  ): void;
  deleteAuthorizer(
    args: DeleteAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAuthorizerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBillingGroupCommand}
   */
  deleteBillingGroup(
    args: DeleteBillingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBillingGroupCommandOutput>;
  deleteBillingGroup(
    args: DeleteBillingGroupCommandInput,
    cb: (err: any, data?: DeleteBillingGroupCommandOutput) => void
  ): void;
  deleteBillingGroup(
    args: DeleteBillingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBillingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCACertificateCommand}
   */
  deleteCACertificate(
    args: DeleteCACertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCACertificateCommandOutput>;
  deleteCACertificate(
    args: DeleteCACertificateCommandInput,
    cb: (err: any, data?: DeleteCACertificateCommandOutput) => void
  ): void;
  deleteCACertificate(
    args: DeleteCACertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCACertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCertificateCommand}
   */
  deleteCertificate(
    args: DeleteCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCertificateCommandOutput>;
  deleteCertificate(
    args: DeleteCertificateCommandInput,
    cb: (err: any, data?: DeleteCertificateCommandOutput) => void
  ): void;
  deleteCertificate(
    args: DeleteCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomMetricCommand}
   */
  deleteCustomMetric(
    args: DeleteCustomMetricCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomMetricCommandOutput>;
  deleteCustomMetric(
    args: DeleteCustomMetricCommandInput,
    cb: (err: any, data?: DeleteCustomMetricCommandOutput) => void
  ): void;
  deleteCustomMetric(
    args: DeleteCustomMetricCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomMetricCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDimensionCommand}
   */
  deleteDimension(
    args: DeleteDimensionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDimensionCommandOutput>;
  deleteDimension(args: DeleteDimensionCommandInput, cb: (err: any, data?: DeleteDimensionCommandOutput) => void): void;
  deleteDimension(
    args: DeleteDimensionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDimensionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainConfigurationCommand}
   */
  deleteDomainConfiguration(
    args: DeleteDomainConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainConfigurationCommandOutput>;
  deleteDomainConfiguration(
    args: DeleteDomainConfigurationCommandInput,
    cb: (err: any, data?: DeleteDomainConfigurationCommandOutput) => void
  ): void;
  deleteDomainConfiguration(
    args: DeleteDomainConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDynamicThingGroupCommand}
   */
  deleteDynamicThingGroup(
    args: DeleteDynamicThingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDynamicThingGroupCommandOutput>;
  deleteDynamicThingGroup(
    args: DeleteDynamicThingGroupCommandInput,
    cb: (err: any, data?: DeleteDynamicThingGroupCommandOutput) => void
  ): void;
  deleteDynamicThingGroup(
    args: DeleteDynamicThingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDynamicThingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFleetMetricCommand}
   */
  deleteFleetMetric(
    args: DeleteFleetMetricCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFleetMetricCommandOutput>;
  deleteFleetMetric(
    args: DeleteFleetMetricCommandInput,
    cb: (err: any, data?: DeleteFleetMetricCommandOutput) => void
  ): void;
  deleteFleetMetric(
    args: DeleteFleetMetricCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFleetMetricCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteJobCommand}
   */
  deleteJob(args: DeleteJobCommandInput, options?: __HttpHandlerOptions): Promise<DeleteJobCommandOutput>;
  deleteJob(args: DeleteJobCommandInput, cb: (err: any, data?: DeleteJobCommandOutput) => void): void;
  deleteJob(
    args: DeleteJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteJobExecutionCommand}
   */
  deleteJobExecution(
    args: DeleteJobExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteJobExecutionCommandOutput>;
  deleteJobExecution(
    args: DeleteJobExecutionCommandInput,
    cb: (err: any, data?: DeleteJobExecutionCommandOutput) => void
  ): void;
  deleteJobExecution(
    args: DeleteJobExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteJobExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteJobTemplateCommand}
   */
  deleteJobTemplate(
    args: DeleteJobTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteJobTemplateCommandOutput>;
  deleteJobTemplate(
    args: DeleteJobTemplateCommandInput,
    cb: (err: any, data?: DeleteJobTemplateCommandOutput) => void
  ): void;
  deleteJobTemplate(
    args: DeleteJobTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteJobTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMitigationActionCommand}
   */
  deleteMitigationAction(
    args: DeleteMitigationActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMitigationActionCommandOutput>;
  deleteMitigationAction(
    args: DeleteMitigationActionCommandInput,
    cb: (err: any, data?: DeleteMitigationActionCommandOutput) => void
  ): void;
  deleteMitigationAction(
    args: DeleteMitigationActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMitigationActionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOTAUpdateCommand}
   */
  deleteOTAUpdate(
    args: DeleteOTAUpdateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOTAUpdateCommandOutput>;
  deleteOTAUpdate(args: DeleteOTAUpdateCommandInput, cb: (err: any, data?: DeleteOTAUpdateCommandOutput) => void): void;
  deleteOTAUpdate(
    args: DeleteOTAUpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOTAUpdateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePackageCommand}
   */
  deletePackage(args: DeletePackageCommandInput, options?: __HttpHandlerOptions): Promise<DeletePackageCommandOutput>;
  deletePackage(args: DeletePackageCommandInput, cb: (err: any, data?: DeletePackageCommandOutput) => void): void;
  deletePackage(
    args: DeletePackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePackageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePackageVersionCommand}
   */
  deletePackageVersion(
    args: DeletePackageVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePackageVersionCommandOutput>;
  deletePackageVersion(
    args: DeletePackageVersionCommandInput,
    cb: (err: any, data?: DeletePackageVersionCommandOutput) => void
  ): void;
  deletePackageVersion(
    args: DeletePackageVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePackageVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePolicyCommand}
   */
  deletePolicy(args: DeletePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeletePolicyCommandOutput>;
  deletePolicy(args: DeletePolicyCommandInput, cb: (err: any, data?: DeletePolicyCommandOutput) => void): void;
  deletePolicy(
    args: DeletePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePolicyVersionCommand}
   */
  deletePolicyVersion(
    args: DeletePolicyVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePolicyVersionCommandOutput>;
  deletePolicyVersion(
    args: DeletePolicyVersionCommandInput,
    cb: (err: any, data?: DeletePolicyVersionCommandOutput) => void
  ): void;
  deletePolicyVersion(
    args: DeletePolicyVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePolicyVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProvisioningTemplateCommand}
   */
  deleteProvisioningTemplate(
    args: DeleteProvisioningTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProvisioningTemplateCommandOutput>;
  deleteProvisioningTemplate(
    args: DeleteProvisioningTemplateCommandInput,
    cb: (err: any, data?: DeleteProvisioningTemplateCommandOutput) => void
  ): void;
  deleteProvisioningTemplate(
    args: DeleteProvisioningTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProvisioningTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProvisioningTemplateVersionCommand}
   */
  deleteProvisioningTemplateVersion(
    args: DeleteProvisioningTemplateVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProvisioningTemplateVersionCommandOutput>;
  deleteProvisioningTemplateVersion(
    args: DeleteProvisioningTemplateVersionCommandInput,
    cb: (err: any, data?: DeleteProvisioningTemplateVersionCommandOutput) => void
  ): void;
  deleteProvisioningTemplateVersion(
    args: DeleteProvisioningTemplateVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProvisioningTemplateVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRegistrationCodeCommand}
   */
  deleteRegistrationCode(
    args: DeleteRegistrationCodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRegistrationCodeCommandOutput>;
  deleteRegistrationCode(
    args: DeleteRegistrationCodeCommandInput,
    cb: (err: any, data?: DeleteRegistrationCodeCommandOutput) => void
  ): void;
  deleteRegistrationCode(
    args: DeleteRegistrationCodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRegistrationCodeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRoleAliasCommand}
   */
  deleteRoleAlias(
    args: DeleteRoleAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRoleAliasCommandOutput>;
  deleteRoleAlias(args: DeleteRoleAliasCommandInput, cb: (err: any, data?: DeleteRoleAliasCommandOutput) => void): void;
  deleteRoleAlias(
    args: DeleteRoleAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRoleAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteScheduledAuditCommand}
   */
  deleteScheduledAudit(
    args: DeleteScheduledAuditCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteScheduledAuditCommandOutput>;
  deleteScheduledAudit(
    args: DeleteScheduledAuditCommandInput,
    cb: (err: any, data?: DeleteScheduledAuditCommandOutput) => void
  ): void;
  deleteScheduledAudit(
    args: DeleteScheduledAuditCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScheduledAuditCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSecurityProfileCommand}
   */
  deleteSecurityProfile(
    args: DeleteSecurityProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSecurityProfileCommandOutput>;
  deleteSecurityProfile(
    args: DeleteSecurityProfileCommandInput,
    cb: (err: any, data?: DeleteSecurityProfileCommandOutput) => void
  ): void;
  deleteSecurityProfile(
    args: DeleteSecurityProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSecurityProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStreamCommand}
   */
  deleteStream(args: DeleteStreamCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStreamCommandOutput>;
  deleteStream(args: DeleteStreamCommandInput, cb: (err: any, data?: DeleteStreamCommandOutput) => void): void;
  deleteStream(
    args: DeleteStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteThingCommand}
   */
  deleteThing(args: DeleteThingCommandInput, options?: __HttpHandlerOptions): Promise<DeleteThingCommandOutput>;
  deleteThing(args: DeleteThingCommandInput, cb: (err: any, data?: DeleteThingCommandOutput) => void): void;
  deleteThing(
    args: DeleteThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteThingCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteThingGroupCommand}
   */
  deleteThingGroup(
    args: DeleteThingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteThingGroupCommandOutput>;
  deleteThingGroup(
    args: DeleteThingGroupCommandInput,
    cb: (err: any, data?: DeleteThingGroupCommandOutput) => void
  ): void;
  deleteThingGroup(
    args: DeleteThingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteThingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteThingTypeCommand}
   */
  deleteThingType(
    args: DeleteThingTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteThingTypeCommandOutput>;
  deleteThingType(args: DeleteThingTypeCommandInput, cb: (err: any, data?: DeleteThingTypeCommandOutput) => void): void;
  deleteThingType(
    args: DeleteThingTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteThingTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTopicRuleCommand}
   */
  deleteTopicRule(
    args: DeleteTopicRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTopicRuleCommandOutput>;
  deleteTopicRule(args: DeleteTopicRuleCommandInput, cb: (err: any, data?: DeleteTopicRuleCommandOutput) => void): void;
  deleteTopicRule(
    args: DeleteTopicRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTopicRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTopicRuleDestinationCommand}
   */
  deleteTopicRuleDestination(
    args: DeleteTopicRuleDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTopicRuleDestinationCommandOutput>;
  deleteTopicRuleDestination(
    args: DeleteTopicRuleDestinationCommandInput,
    cb: (err: any, data?: DeleteTopicRuleDestinationCommandOutput) => void
  ): void;
  deleteTopicRuleDestination(
    args: DeleteTopicRuleDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTopicRuleDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteV2LoggingLevelCommand}
   */
  deleteV2LoggingLevel(
    args: DeleteV2LoggingLevelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteV2LoggingLevelCommandOutput>;
  deleteV2LoggingLevel(
    args: DeleteV2LoggingLevelCommandInput,
    cb: (err: any, data?: DeleteV2LoggingLevelCommandOutput) => void
  ): void;
  deleteV2LoggingLevel(
    args: DeleteV2LoggingLevelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteV2LoggingLevelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeprecateThingTypeCommand}
   */
  deprecateThingType(
    args: DeprecateThingTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeprecateThingTypeCommandOutput>;
  deprecateThingType(
    args: DeprecateThingTypeCommandInput,
    cb: (err: any, data?: DeprecateThingTypeCommandOutput) => void
  ): void;
  deprecateThingType(
    args: DeprecateThingTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeprecateThingTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountAuditConfigurationCommand}
   */
  describeAccountAuditConfiguration(
    args: DescribeAccountAuditConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountAuditConfigurationCommandOutput>;
  describeAccountAuditConfiguration(
    args: DescribeAccountAuditConfigurationCommandInput,
    cb: (err: any, data?: DescribeAccountAuditConfigurationCommandOutput) => void
  ): void;
  describeAccountAuditConfiguration(
    args: DescribeAccountAuditConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountAuditConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAuditFindingCommand}
   */
  describeAuditFinding(
    args: DescribeAuditFindingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAuditFindingCommandOutput>;
  describeAuditFinding(
    args: DescribeAuditFindingCommandInput,
    cb: (err: any, data?: DescribeAuditFindingCommandOutput) => void
  ): void;
  describeAuditFinding(
    args: DescribeAuditFindingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAuditFindingCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAuditMitigationActionsTaskCommand}
   */
  describeAuditMitigationActionsTask(
    args: DescribeAuditMitigationActionsTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAuditMitigationActionsTaskCommandOutput>;
  describeAuditMitigationActionsTask(
    args: DescribeAuditMitigationActionsTaskCommandInput,
    cb: (err: any, data?: DescribeAuditMitigationActionsTaskCommandOutput) => void
  ): void;
  describeAuditMitigationActionsTask(
    args: DescribeAuditMitigationActionsTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAuditMitigationActionsTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAuditSuppressionCommand}
   */
  describeAuditSuppression(
    args: DescribeAuditSuppressionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAuditSuppressionCommandOutput>;
  describeAuditSuppression(
    args: DescribeAuditSuppressionCommandInput,
    cb: (err: any, data?: DescribeAuditSuppressionCommandOutput) => void
  ): void;
  describeAuditSuppression(
    args: DescribeAuditSuppressionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAuditSuppressionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAuditTaskCommand}
   */
  describeAuditTask(
    args: DescribeAuditTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAuditTaskCommandOutput>;
  describeAuditTask(
    args: DescribeAuditTaskCommandInput,
    cb: (err: any, data?: DescribeAuditTaskCommandOutput) => void
  ): void;
  describeAuditTask(
    args: DescribeAuditTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAuditTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAuthorizerCommand}
   */
  describeAuthorizer(
    args: DescribeAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAuthorizerCommandOutput>;
  describeAuthorizer(
    args: DescribeAuthorizerCommandInput,
    cb: (err: any, data?: DescribeAuthorizerCommandOutput) => void
  ): void;
  describeAuthorizer(
    args: DescribeAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAuthorizerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBillingGroupCommand}
   */
  describeBillingGroup(
    args: DescribeBillingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBillingGroupCommandOutput>;
  describeBillingGroup(
    args: DescribeBillingGroupCommandInput,
    cb: (err: any, data?: DescribeBillingGroupCommandOutput) => void
  ): void;
  describeBillingGroup(
    args: DescribeBillingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBillingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCACertificateCommand}
   */
  describeCACertificate(
    args: DescribeCACertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCACertificateCommandOutput>;
  describeCACertificate(
    args: DescribeCACertificateCommandInput,
    cb: (err: any, data?: DescribeCACertificateCommandOutput) => void
  ): void;
  describeCACertificate(
    args: DescribeCACertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCACertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCertificateCommand}
   */
  describeCertificate(
    args: DescribeCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCertificateCommandOutput>;
  describeCertificate(
    args: DescribeCertificateCommandInput,
    cb: (err: any, data?: DescribeCertificateCommandOutput) => void
  ): void;
  describeCertificate(
    args: DescribeCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCustomMetricCommand}
   */
  describeCustomMetric(
    args: DescribeCustomMetricCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCustomMetricCommandOutput>;
  describeCustomMetric(
    args: DescribeCustomMetricCommandInput,
    cb: (err: any, data?: DescribeCustomMetricCommandOutput) => void
  ): void;
  describeCustomMetric(
    args: DescribeCustomMetricCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCustomMetricCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDefaultAuthorizerCommand}
   */
  describeDefaultAuthorizer(
    args: DescribeDefaultAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDefaultAuthorizerCommandOutput>;
  describeDefaultAuthorizer(
    args: DescribeDefaultAuthorizerCommandInput,
    cb: (err: any, data?: DescribeDefaultAuthorizerCommandOutput) => void
  ): void;
  describeDefaultAuthorizer(
    args: DescribeDefaultAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDefaultAuthorizerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDetectMitigationActionsTaskCommand}
   */
  describeDetectMitigationActionsTask(
    args: DescribeDetectMitigationActionsTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDetectMitigationActionsTaskCommandOutput>;
  describeDetectMitigationActionsTask(
    args: DescribeDetectMitigationActionsTaskCommandInput,
    cb: (err: any, data?: DescribeDetectMitigationActionsTaskCommandOutput) => void
  ): void;
  describeDetectMitigationActionsTask(
    args: DescribeDetectMitigationActionsTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDetectMitigationActionsTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDimensionCommand}
   */
  describeDimension(
    args: DescribeDimensionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDimensionCommandOutput>;
  describeDimension(
    args: DescribeDimensionCommandInput,
    cb: (err: any, data?: DescribeDimensionCommandOutput) => void
  ): void;
  describeDimension(
    args: DescribeDimensionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDimensionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDomainConfigurationCommand}
   */
  describeDomainConfiguration(
    args: DescribeDomainConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainConfigurationCommandOutput>;
  describeDomainConfiguration(
    args: DescribeDomainConfigurationCommandInput,
    cb: (err: any, data?: DescribeDomainConfigurationCommandOutput) => void
  ): void;
  describeDomainConfiguration(
    args: DescribeDomainConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEndpointCommand}
   */
  describeEndpoint(
    args: DescribeEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEndpointCommandOutput>;
  describeEndpoint(
    args: DescribeEndpointCommandInput,
    cb: (err: any, data?: DescribeEndpointCommandOutput) => void
  ): void;
  describeEndpoint(
    args: DescribeEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventConfigurationsCommand}
   */
  describeEventConfigurations(
    args: DescribeEventConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventConfigurationsCommandOutput>;
  describeEventConfigurations(
    args: DescribeEventConfigurationsCommandInput,
    cb: (err: any, data?: DescribeEventConfigurationsCommandOutput) => void
  ): void;
  describeEventConfigurations(
    args: DescribeEventConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFleetMetricCommand}
   */
  describeFleetMetric(
    args: DescribeFleetMetricCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetMetricCommandOutput>;
  describeFleetMetric(
    args: DescribeFleetMetricCommandInput,
    cb: (err: any, data?: DescribeFleetMetricCommandOutput) => void
  ): void;
  describeFleetMetric(
    args: DescribeFleetMetricCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetMetricCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIndexCommand}
   */
  describeIndex(args: DescribeIndexCommandInput, options?: __HttpHandlerOptions): Promise<DescribeIndexCommandOutput>;
  describeIndex(args: DescribeIndexCommandInput, cb: (err: any, data?: DescribeIndexCommandOutput) => void): void;
  describeIndex(
    args: DescribeIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeJobCommand}
   */
  describeJob(args: DescribeJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeJobCommandOutput>;
  describeJob(args: DescribeJobCommandInput, cb: (err: any, data?: DescribeJobCommandOutput) => void): void;
  describeJob(
    args: DescribeJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeJobExecutionCommand}
   */
  describeJobExecution(
    args: DescribeJobExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobExecutionCommandOutput>;
  describeJobExecution(
    args: DescribeJobExecutionCommandInput,
    cb: (err: any, data?: DescribeJobExecutionCommandOutput) => void
  ): void;
  describeJobExecution(
    args: DescribeJobExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeJobTemplateCommand}
   */
  describeJobTemplate(
    args: DescribeJobTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobTemplateCommandOutput>;
  describeJobTemplate(
    args: DescribeJobTemplateCommandInput,
    cb: (err: any, data?: DescribeJobTemplateCommandOutput) => void
  ): void;
  describeJobTemplate(
    args: DescribeJobTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeManagedJobTemplateCommand}
   */
  describeManagedJobTemplate(
    args: DescribeManagedJobTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeManagedJobTemplateCommandOutput>;
  describeManagedJobTemplate(
    args: DescribeManagedJobTemplateCommandInput,
    cb: (err: any, data?: DescribeManagedJobTemplateCommandOutput) => void
  ): void;
  describeManagedJobTemplate(
    args: DescribeManagedJobTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeManagedJobTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMitigationActionCommand}
   */
  describeMitigationAction(
    args: DescribeMitigationActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMitigationActionCommandOutput>;
  describeMitigationAction(
    args: DescribeMitigationActionCommandInput,
    cb: (err: any, data?: DescribeMitigationActionCommandOutput) => void
  ): void;
  describeMitigationAction(
    args: DescribeMitigationActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMitigationActionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProvisioningTemplateCommand}
   */
  describeProvisioningTemplate(
    args: DescribeProvisioningTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProvisioningTemplateCommandOutput>;
  describeProvisioningTemplate(
    args: DescribeProvisioningTemplateCommandInput,
    cb: (err: any, data?: DescribeProvisioningTemplateCommandOutput) => void
  ): void;
  describeProvisioningTemplate(
    args: DescribeProvisioningTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProvisioningTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProvisioningTemplateVersionCommand}
   */
  describeProvisioningTemplateVersion(
    args: DescribeProvisioningTemplateVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProvisioningTemplateVersionCommandOutput>;
  describeProvisioningTemplateVersion(
    args: DescribeProvisioningTemplateVersionCommandInput,
    cb: (err: any, data?: DescribeProvisioningTemplateVersionCommandOutput) => void
  ): void;
  describeProvisioningTemplateVersion(
    args: DescribeProvisioningTemplateVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProvisioningTemplateVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRoleAliasCommand}
   */
  describeRoleAlias(
    args: DescribeRoleAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRoleAliasCommandOutput>;
  describeRoleAlias(
    args: DescribeRoleAliasCommandInput,
    cb: (err: any, data?: DescribeRoleAliasCommandOutput) => void
  ): void;
  describeRoleAlias(
    args: DescribeRoleAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRoleAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScheduledAuditCommand}
   */
  describeScheduledAudit(
    args: DescribeScheduledAuditCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScheduledAuditCommandOutput>;
  describeScheduledAudit(
    args: DescribeScheduledAuditCommandInput,
    cb: (err: any, data?: DescribeScheduledAuditCommandOutput) => void
  ): void;
  describeScheduledAudit(
    args: DescribeScheduledAuditCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScheduledAuditCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSecurityProfileCommand}
   */
  describeSecurityProfile(
    args: DescribeSecurityProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSecurityProfileCommandOutput>;
  describeSecurityProfile(
    args: DescribeSecurityProfileCommandInput,
    cb: (err: any, data?: DescribeSecurityProfileCommandOutput) => void
  ): void;
  describeSecurityProfile(
    args: DescribeSecurityProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSecurityProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStreamCommand}
   */
  describeStream(
    args: DescribeStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStreamCommandOutput>;
  describeStream(args: DescribeStreamCommandInput, cb: (err: any, data?: DescribeStreamCommandOutput) => void): void;
  describeStream(
    args: DescribeStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeThingCommand}
   */
  describeThing(args: DescribeThingCommandInput, options?: __HttpHandlerOptions): Promise<DescribeThingCommandOutput>;
  describeThing(args: DescribeThingCommandInput, cb: (err: any, data?: DescribeThingCommandOutput) => void): void;
  describeThing(
    args: DescribeThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeThingCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeThingGroupCommand}
   */
  describeThingGroup(
    args: DescribeThingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeThingGroupCommandOutput>;
  describeThingGroup(
    args: DescribeThingGroupCommandInput,
    cb: (err: any, data?: DescribeThingGroupCommandOutput) => void
  ): void;
  describeThingGroup(
    args: DescribeThingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeThingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeThingRegistrationTaskCommand}
   */
  describeThingRegistrationTask(
    args: DescribeThingRegistrationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeThingRegistrationTaskCommandOutput>;
  describeThingRegistrationTask(
    args: DescribeThingRegistrationTaskCommandInput,
    cb: (err: any, data?: DescribeThingRegistrationTaskCommandOutput) => void
  ): void;
  describeThingRegistrationTask(
    args: DescribeThingRegistrationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeThingRegistrationTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeThingTypeCommand}
   */
  describeThingType(
    args: DescribeThingTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeThingTypeCommandOutput>;
  describeThingType(
    args: DescribeThingTypeCommandInput,
    cb: (err: any, data?: DescribeThingTypeCommandOutput) => void
  ): void;
  describeThingType(
    args: DescribeThingTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeThingTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachPolicyCommand}
   */
  detachPolicy(args: DetachPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DetachPolicyCommandOutput>;
  detachPolicy(args: DetachPolicyCommandInput, cb: (err: any, data?: DetachPolicyCommandOutput) => void): void;
  detachPolicy(
    args: DetachPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachPrincipalPolicyCommand}
   */
  detachPrincipalPolicy(
    args: DetachPrincipalPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachPrincipalPolicyCommandOutput>;
  detachPrincipalPolicy(
    args: DetachPrincipalPolicyCommandInput,
    cb: (err: any, data?: DetachPrincipalPolicyCommandOutput) => void
  ): void;
  detachPrincipalPolicy(
    args: DetachPrincipalPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachPrincipalPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachSecurityProfileCommand}
   */
  detachSecurityProfile(
    args: DetachSecurityProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachSecurityProfileCommandOutput>;
  detachSecurityProfile(
    args: DetachSecurityProfileCommandInput,
    cb: (err: any, data?: DetachSecurityProfileCommandOutput) => void
  ): void;
  detachSecurityProfile(
    args: DetachSecurityProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachSecurityProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachThingPrincipalCommand}
   */
  detachThingPrincipal(
    args: DetachThingPrincipalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachThingPrincipalCommandOutput>;
  detachThingPrincipal(
    args: DetachThingPrincipalCommandInput,
    cb: (err: any, data?: DetachThingPrincipalCommandOutput) => void
  ): void;
  detachThingPrincipal(
    args: DetachThingPrincipalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachThingPrincipalCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableTopicRuleCommand}
   */
  disableTopicRule(
    args: DisableTopicRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableTopicRuleCommandOutput>;
  disableTopicRule(
    args: DisableTopicRuleCommandInput,
    cb: (err: any, data?: DisableTopicRuleCommandOutput) => void
  ): void;
  disableTopicRule(
    args: DisableTopicRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableTopicRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableTopicRuleCommand}
   */
  enableTopicRule(
    args: EnableTopicRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableTopicRuleCommandOutput>;
  enableTopicRule(args: EnableTopicRuleCommandInput, cb: (err: any, data?: EnableTopicRuleCommandOutput) => void): void;
  enableTopicRule(
    args: EnableTopicRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableTopicRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBehaviorModelTrainingSummariesCommand}
   */
  getBehaviorModelTrainingSummaries(
    args: GetBehaviorModelTrainingSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBehaviorModelTrainingSummariesCommandOutput>;
  getBehaviorModelTrainingSummaries(
    args: GetBehaviorModelTrainingSummariesCommandInput,
    cb: (err: any, data?: GetBehaviorModelTrainingSummariesCommandOutput) => void
  ): void;
  getBehaviorModelTrainingSummaries(
    args: GetBehaviorModelTrainingSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBehaviorModelTrainingSummariesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketsAggregationCommand}
   */
  getBucketsAggregation(
    args: GetBucketsAggregationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketsAggregationCommandOutput>;
  getBucketsAggregation(
    args: GetBucketsAggregationCommandInput,
    cb: (err: any, data?: GetBucketsAggregationCommandOutput) => void
  ): void;
  getBucketsAggregation(
    args: GetBucketsAggregationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketsAggregationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCardinalityCommand}
   */
  getCardinality(
    args: GetCardinalityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCardinalityCommandOutput>;
  getCardinality(args: GetCardinalityCommandInput, cb: (err: any, data?: GetCardinalityCommandOutput) => void): void;
  getCardinality(
    args: GetCardinalityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCardinalityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEffectivePoliciesCommand}
   */
  getEffectivePolicies(
    args: GetEffectivePoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEffectivePoliciesCommandOutput>;
  getEffectivePolicies(
    args: GetEffectivePoliciesCommandInput,
    cb: (err: any, data?: GetEffectivePoliciesCommandOutput) => void
  ): void;
  getEffectivePolicies(
    args: GetEffectivePoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEffectivePoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIndexingConfigurationCommand}
   */
  getIndexingConfiguration(
    args: GetIndexingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIndexingConfigurationCommandOutput>;
  getIndexingConfiguration(
    args: GetIndexingConfigurationCommandInput,
    cb: (err: any, data?: GetIndexingConfigurationCommandOutput) => void
  ): void;
  getIndexingConfiguration(
    args: GetIndexingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIndexingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobDocumentCommand}
   */
  getJobDocument(
    args: GetJobDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetJobDocumentCommandOutput>;
  getJobDocument(args: GetJobDocumentCommandInput, cb: (err: any, data?: GetJobDocumentCommandOutput) => void): void;
  getJobDocument(
    args: GetJobDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobDocumentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLoggingOptionsCommand}
   */
  getLoggingOptions(
    args: GetLoggingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLoggingOptionsCommandOutput>;
  getLoggingOptions(
    args: GetLoggingOptionsCommandInput,
    cb: (err: any, data?: GetLoggingOptionsCommandOutput) => void
  ): void;
  getLoggingOptions(
    args: GetLoggingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLoggingOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOTAUpdateCommand}
   */
  getOTAUpdate(args: GetOTAUpdateCommandInput, options?: __HttpHandlerOptions): Promise<GetOTAUpdateCommandOutput>;
  getOTAUpdate(args: GetOTAUpdateCommandInput, cb: (err: any, data?: GetOTAUpdateCommandOutput) => void): void;
  getOTAUpdate(
    args: GetOTAUpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOTAUpdateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPackageCommand}
   */
  getPackage(args: GetPackageCommandInput, options?: __HttpHandlerOptions): Promise<GetPackageCommandOutput>;
  getPackage(args: GetPackageCommandInput, cb: (err: any, data?: GetPackageCommandOutput) => void): void;
  getPackage(
    args: GetPackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPackageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPackageConfigurationCommand}
   */
  getPackageConfiguration(
    args: GetPackageConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPackageConfigurationCommandOutput>;
  getPackageConfiguration(
    args: GetPackageConfigurationCommandInput,
    cb: (err: any, data?: GetPackageConfigurationCommandOutput) => void
  ): void;
  getPackageConfiguration(
    args: GetPackageConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPackageConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPackageVersionCommand}
   */
  getPackageVersion(
    args: GetPackageVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPackageVersionCommandOutput>;
  getPackageVersion(
    args: GetPackageVersionCommandInput,
    cb: (err: any, data?: GetPackageVersionCommandOutput) => void
  ): void;
  getPackageVersion(
    args: GetPackageVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPackageVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPercentilesCommand}
   */
  getPercentiles(
    args: GetPercentilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPercentilesCommandOutput>;
  getPercentiles(args: GetPercentilesCommandInput, cb: (err: any, data?: GetPercentilesCommandOutput) => void): void;
  getPercentiles(
    args: GetPercentilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPercentilesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPolicyCommand}
   */
  getPolicy(args: GetPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetPolicyCommandOutput>;
  getPolicy(args: GetPolicyCommandInput, cb: (err: any, data?: GetPolicyCommandOutput) => void): void;
  getPolicy(
    args: GetPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPolicyVersionCommand}
   */
  getPolicyVersion(
    args: GetPolicyVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPolicyVersionCommandOutput>;
  getPolicyVersion(
    args: GetPolicyVersionCommandInput,
    cb: (err: any, data?: GetPolicyVersionCommandOutput) => void
  ): void;
  getPolicyVersion(
    args: GetPolicyVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRegistrationCodeCommand}
   */
  getRegistrationCode(
    args: GetRegistrationCodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRegistrationCodeCommandOutput>;
  getRegistrationCode(
    args: GetRegistrationCodeCommandInput,
    cb: (err: any, data?: GetRegistrationCodeCommandOutput) => void
  ): void;
  getRegistrationCode(
    args: GetRegistrationCodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRegistrationCodeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStatisticsCommand}
   */
  getStatistics(args: GetStatisticsCommandInput, options?: __HttpHandlerOptions): Promise<GetStatisticsCommandOutput>;
  getStatistics(args: GetStatisticsCommandInput, cb: (err: any, data?: GetStatisticsCommandOutput) => void): void;
  getStatistics(
    args: GetStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTopicRuleCommand}
   */
  getTopicRule(args: GetTopicRuleCommandInput, options?: __HttpHandlerOptions): Promise<GetTopicRuleCommandOutput>;
  getTopicRule(args: GetTopicRuleCommandInput, cb: (err: any, data?: GetTopicRuleCommandOutput) => void): void;
  getTopicRule(
    args: GetTopicRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTopicRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTopicRuleDestinationCommand}
   */
  getTopicRuleDestination(
    args: GetTopicRuleDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTopicRuleDestinationCommandOutput>;
  getTopicRuleDestination(
    args: GetTopicRuleDestinationCommandInput,
    cb: (err: any, data?: GetTopicRuleDestinationCommandOutput) => void
  ): void;
  getTopicRuleDestination(
    args: GetTopicRuleDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTopicRuleDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetV2LoggingOptionsCommand}
   */
  getV2LoggingOptions(
    args: GetV2LoggingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetV2LoggingOptionsCommandOutput>;
  getV2LoggingOptions(
    args: GetV2LoggingOptionsCommandInput,
    cb: (err: any, data?: GetV2LoggingOptionsCommandOutput) => void
  ): void;
  getV2LoggingOptions(
    args: GetV2LoggingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetV2LoggingOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListActiveViolationsCommand}
   */
  listActiveViolations(
    args: ListActiveViolationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListActiveViolationsCommandOutput>;
  listActiveViolations(
    args: ListActiveViolationsCommandInput,
    cb: (err: any, data?: ListActiveViolationsCommandOutput) => void
  ): void;
  listActiveViolations(
    args: ListActiveViolationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListActiveViolationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAttachedPoliciesCommand}
   */
  listAttachedPolicies(
    args: ListAttachedPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttachedPoliciesCommandOutput>;
  listAttachedPolicies(
    args: ListAttachedPoliciesCommandInput,
    cb: (err: any, data?: ListAttachedPoliciesCommandOutput) => void
  ): void;
  listAttachedPolicies(
    args: ListAttachedPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttachedPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAuditFindingsCommand}
   */
  listAuditFindings(
    args: ListAuditFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAuditFindingsCommandOutput>;
  listAuditFindings(
    args: ListAuditFindingsCommandInput,
    cb: (err: any, data?: ListAuditFindingsCommandOutput) => void
  ): void;
  listAuditFindings(
    args: ListAuditFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAuditFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAuditMitigationActionsExecutionsCommand}
   */
  listAuditMitigationActionsExecutions(
    args: ListAuditMitigationActionsExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAuditMitigationActionsExecutionsCommandOutput>;
  listAuditMitigationActionsExecutions(
    args: ListAuditMitigationActionsExecutionsCommandInput,
    cb: (err: any, data?: ListAuditMitigationActionsExecutionsCommandOutput) => void
  ): void;
  listAuditMitigationActionsExecutions(
    args: ListAuditMitigationActionsExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAuditMitigationActionsExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAuditMitigationActionsTasksCommand}
   */
  listAuditMitigationActionsTasks(
    args: ListAuditMitigationActionsTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAuditMitigationActionsTasksCommandOutput>;
  listAuditMitigationActionsTasks(
    args: ListAuditMitigationActionsTasksCommandInput,
    cb: (err: any, data?: ListAuditMitigationActionsTasksCommandOutput) => void
  ): void;
  listAuditMitigationActionsTasks(
    args: ListAuditMitigationActionsTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAuditMitigationActionsTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAuditSuppressionsCommand}
   */
  listAuditSuppressions(
    args: ListAuditSuppressionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAuditSuppressionsCommandOutput>;
  listAuditSuppressions(
    args: ListAuditSuppressionsCommandInput,
    cb: (err: any, data?: ListAuditSuppressionsCommandOutput) => void
  ): void;
  listAuditSuppressions(
    args: ListAuditSuppressionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAuditSuppressionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAuditTasksCommand}
   */
  listAuditTasks(
    args: ListAuditTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAuditTasksCommandOutput>;
  listAuditTasks(args: ListAuditTasksCommandInput, cb: (err: any, data?: ListAuditTasksCommandOutput) => void): void;
  listAuditTasks(
    args: ListAuditTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAuditTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAuthorizersCommand}
   */
  listAuthorizers(
    args: ListAuthorizersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAuthorizersCommandOutput>;
  listAuthorizers(args: ListAuthorizersCommandInput, cb: (err: any, data?: ListAuthorizersCommandOutput) => void): void;
  listAuthorizers(
    args: ListAuthorizersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAuthorizersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBillingGroupsCommand}
   */
  listBillingGroups(
    args: ListBillingGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBillingGroupsCommandOutput>;
  listBillingGroups(
    args: ListBillingGroupsCommandInput,
    cb: (err: any, data?: ListBillingGroupsCommandOutput) => void
  ): void;
  listBillingGroups(
    args: ListBillingGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBillingGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCACertificatesCommand}
   */
  listCACertificates(
    args: ListCACertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCACertificatesCommandOutput>;
  listCACertificates(
    args: ListCACertificatesCommandInput,
    cb: (err: any, data?: ListCACertificatesCommandOutput) => void
  ): void;
  listCACertificates(
    args: ListCACertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCACertificatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCertificatesCommand}
   */
  listCertificates(
    args: ListCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCertificatesCommandOutput>;
  listCertificates(
    args: ListCertificatesCommandInput,
    cb: (err: any, data?: ListCertificatesCommandOutput) => void
  ): void;
  listCertificates(
    args: ListCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCertificatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCertificatesByCACommand}
   */
  listCertificatesByCA(
    args: ListCertificatesByCACommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCertificatesByCACommandOutput>;
  listCertificatesByCA(
    args: ListCertificatesByCACommandInput,
    cb: (err: any, data?: ListCertificatesByCACommandOutput) => void
  ): void;
  listCertificatesByCA(
    args: ListCertificatesByCACommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCertificatesByCACommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomMetricsCommand}
   */
  listCustomMetrics(
    args: ListCustomMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomMetricsCommandOutput>;
  listCustomMetrics(
    args: ListCustomMetricsCommandInput,
    cb: (err: any, data?: ListCustomMetricsCommandOutput) => void
  ): void;
  listCustomMetrics(
    args: ListCustomMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDetectMitigationActionsExecutionsCommand}
   */
  listDetectMitigationActionsExecutions(
    args: ListDetectMitigationActionsExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDetectMitigationActionsExecutionsCommandOutput>;
  listDetectMitigationActionsExecutions(
    args: ListDetectMitigationActionsExecutionsCommandInput,
    cb: (err: any, data?: ListDetectMitigationActionsExecutionsCommandOutput) => void
  ): void;
  listDetectMitigationActionsExecutions(
    args: ListDetectMitigationActionsExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDetectMitigationActionsExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDetectMitigationActionsTasksCommand}
   */
  listDetectMitigationActionsTasks(
    args: ListDetectMitigationActionsTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDetectMitigationActionsTasksCommandOutput>;
  listDetectMitigationActionsTasks(
    args: ListDetectMitigationActionsTasksCommandInput,
    cb: (err: any, data?: ListDetectMitigationActionsTasksCommandOutput) => void
  ): void;
  listDetectMitigationActionsTasks(
    args: ListDetectMitigationActionsTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDetectMitigationActionsTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDimensionsCommand}
   */
  listDimensions(
    args: ListDimensionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDimensionsCommandOutput>;
  listDimensions(args: ListDimensionsCommandInput, cb: (err: any, data?: ListDimensionsCommandOutput) => void): void;
  listDimensions(
    args: ListDimensionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDimensionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainConfigurationsCommand}
   */
  listDomainConfigurations(
    args: ListDomainConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainConfigurationsCommandOutput>;
  listDomainConfigurations(
    args: ListDomainConfigurationsCommandInput,
    cb: (err: any, data?: ListDomainConfigurationsCommandOutput) => void
  ): void;
  listDomainConfigurations(
    args: ListDomainConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFleetMetricsCommand}
   */
  listFleetMetrics(
    args: ListFleetMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFleetMetricsCommandOutput>;
  listFleetMetrics(
    args: ListFleetMetricsCommandInput,
    cb: (err: any, data?: ListFleetMetricsCommandOutput) => void
  ): void;
  listFleetMetrics(
    args: ListFleetMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFleetMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIndicesCommand}
   */
  listIndices(args: ListIndicesCommandInput, options?: __HttpHandlerOptions): Promise<ListIndicesCommandOutput>;
  listIndices(args: ListIndicesCommandInput, cb: (err: any, data?: ListIndicesCommandOutput) => void): void;
  listIndices(
    args: ListIndicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIndicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobExecutionsForJobCommand}
   */
  listJobExecutionsForJob(
    args: ListJobExecutionsForJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJobExecutionsForJobCommandOutput>;
  listJobExecutionsForJob(
    args: ListJobExecutionsForJobCommandInput,
    cb: (err: any, data?: ListJobExecutionsForJobCommandOutput) => void
  ): void;
  listJobExecutionsForJob(
    args: ListJobExecutionsForJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobExecutionsForJobCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobExecutionsForThingCommand}
   */
  listJobExecutionsForThing(
    args: ListJobExecutionsForThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJobExecutionsForThingCommandOutput>;
  listJobExecutionsForThing(
    args: ListJobExecutionsForThingCommandInput,
    cb: (err: any, data?: ListJobExecutionsForThingCommandOutput) => void
  ): void;
  listJobExecutionsForThing(
    args: ListJobExecutionsForThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobExecutionsForThingCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobsCommand}
   */
  listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
  listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
  listJobs(
    args: ListJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobTemplatesCommand}
   */
  listJobTemplates(
    args: ListJobTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJobTemplatesCommandOutput>;
  listJobTemplates(
    args: ListJobTemplatesCommandInput,
    cb: (err: any, data?: ListJobTemplatesCommandOutput) => void
  ): void;
  listJobTemplates(
    args: ListJobTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListManagedJobTemplatesCommand}
   */
  listManagedJobTemplates(
    args: ListManagedJobTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedJobTemplatesCommandOutput>;
  listManagedJobTemplates(
    args: ListManagedJobTemplatesCommandInput,
    cb: (err: any, data?: ListManagedJobTemplatesCommandOutput) => void
  ): void;
  listManagedJobTemplates(
    args: ListManagedJobTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedJobTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMetricValuesCommand}
   */
  listMetricValues(
    args: ListMetricValuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMetricValuesCommandOutput>;
  listMetricValues(
    args: ListMetricValuesCommandInput,
    cb: (err: any, data?: ListMetricValuesCommandOutput) => void
  ): void;
  listMetricValues(
    args: ListMetricValuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMetricValuesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMitigationActionsCommand}
   */
  listMitigationActions(
    args: ListMitigationActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMitigationActionsCommandOutput>;
  listMitigationActions(
    args: ListMitigationActionsCommandInput,
    cb: (err: any, data?: ListMitigationActionsCommandOutput) => void
  ): void;
  listMitigationActions(
    args: ListMitigationActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMitigationActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOTAUpdatesCommand}
   */
  listOTAUpdates(
    args: ListOTAUpdatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOTAUpdatesCommandOutput>;
  listOTAUpdates(args: ListOTAUpdatesCommandInput, cb: (err: any, data?: ListOTAUpdatesCommandOutput) => void): void;
  listOTAUpdates(
    args: ListOTAUpdatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOTAUpdatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOutgoingCertificatesCommand}
   */
  listOutgoingCertificates(
    args: ListOutgoingCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOutgoingCertificatesCommandOutput>;
  listOutgoingCertificates(
    args: ListOutgoingCertificatesCommandInput,
    cb: (err: any, data?: ListOutgoingCertificatesCommandOutput) => void
  ): void;
  listOutgoingCertificates(
    args: ListOutgoingCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOutgoingCertificatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPackagesCommand}
   */
  listPackages(args: ListPackagesCommandInput, options?: __HttpHandlerOptions): Promise<ListPackagesCommandOutput>;
  listPackages(args: ListPackagesCommandInput, cb: (err: any, data?: ListPackagesCommandOutput) => void): void;
  listPackages(
    args: ListPackagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPackagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPackageVersionsCommand}
   */
  listPackageVersions(
    args: ListPackageVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPackageVersionsCommandOutput>;
  listPackageVersions(
    args: ListPackageVersionsCommandInput,
    cb: (err: any, data?: ListPackageVersionsCommandOutput) => void
  ): void;
  listPackageVersions(
    args: ListPackageVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPackageVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPoliciesCommand}
   */
  listPolicies(args: ListPoliciesCommandInput, options?: __HttpHandlerOptions): Promise<ListPoliciesCommandOutput>;
  listPolicies(args: ListPoliciesCommandInput, cb: (err: any, data?: ListPoliciesCommandOutput) => void): void;
  listPolicies(
    args: ListPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPolicyPrincipalsCommand}
   */
  listPolicyPrincipals(
    args: ListPolicyPrincipalsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPolicyPrincipalsCommandOutput>;
  listPolicyPrincipals(
    args: ListPolicyPrincipalsCommandInput,
    cb: (err: any, data?: ListPolicyPrincipalsCommandOutput) => void
  ): void;
  listPolicyPrincipals(
    args: ListPolicyPrincipalsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPolicyPrincipalsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPolicyVersionsCommand}
   */
  listPolicyVersions(
    args: ListPolicyVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPolicyVersionsCommandOutput>;
  listPolicyVersions(
    args: ListPolicyVersionsCommandInput,
    cb: (err: any, data?: ListPolicyVersionsCommandOutput) => void
  ): void;
  listPolicyVersions(
    args: ListPolicyVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPolicyVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPrincipalPoliciesCommand}
   */
  listPrincipalPolicies(
    args: ListPrincipalPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPrincipalPoliciesCommandOutput>;
  listPrincipalPolicies(
    args: ListPrincipalPoliciesCommandInput,
    cb: (err: any, data?: ListPrincipalPoliciesCommandOutput) => void
  ): void;
  listPrincipalPolicies(
    args: ListPrincipalPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPrincipalPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPrincipalThingsCommand}
   */
  listPrincipalThings(
    args: ListPrincipalThingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPrincipalThingsCommandOutput>;
  listPrincipalThings(
    args: ListPrincipalThingsCommandInput,
    cb: (err: any, data?: ListPrincipalThingsCommandOutput) => void
  ): void;
  listPrincipalThings(
    args: ListPrincipalThingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPrincipalThingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProvisioningTemplatesCommand}
   */
  listProvisioningTemplates(
    args: ListProvisioningTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProvisioningTemplatesCommandOutput>;
  listProvisioningTemplates(
    args: ListProvisioningTemplatesCommandInput,
    cb: (err: any, data?: ListProvisioningTemplatesCommandOutput) => void
  ): void;
  listProvisioningTemplates(
    args: ListProvisioningTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProvisioningTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProvisioningTemplateVersionsCommand}
   */
  listProvisioningTemplateVersions(
    args: ListProvisioningTemplateVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProvisioningTemplateVersionsCommandOutput>;
  listProvisioningTemplateVersions(
    args: ListProvisioningTemplateVersionsCommandInput,
    cb: (err: any, data?: ListProvisioningTemplateVersionsCommandOutput) => void
  ): void;
  listProvisioningTemplateVersions(
    args: ListProvisioningTemplateVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProvisioningTemplateVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRelatedResourcesForAuditFindingCommand}
   */
  listRelatedResourcesForAuditFinding(
    args: ListRelatedResourcesForAuditFindingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRelatedResourcesForAuditFindingCommandOutput>;
  listRelatedResourcesForAuditFinding(
    args: ListRelatedResourcesForAuditFindingCommandInput,
    cb: (err: any, data?: ListRelatedResourcesForAuditFindingCommandOutput) => void
  ): void;
  listRelatedResourcesForAuditFinding(
    args: ListRelatedResourcesForAuditFindingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRelatedResourcesForAuditFindingCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRoleAliasesCommand}
   */
  listRoleAliases(
    args: ListRoleAliasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRoleAliasesCommandOutput>;
  listRoleAliases(args: ListRoleAliasesCommandInput, cb: (err: any, data?: ListRoleAliasesCommandOutput) => void): void;
  listRoleAliases(
    args: ListRoleAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRoleAliasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListScheduledAuditsCommand}
   */
  listScheduledAudits(
    args: ListScheduledAuditsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListScheduledAuditsCommandOutput>;
  listScheduledAudits(
    args: ListScheduledAuditsCommandInput,
    cb: (err: any, data?: ListScheduledAuditsCommandOutput) => void
  ): void;
  listScheduledAudits(
    args: ListScheduledAuditsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListScheduledAuditsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSecurityProfilesCommand}
   */
  listSecurityProfiles(
    args: ListSecurityProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSecurityProfilesCommandOutput>;
  listSecurityProfiles(
    args: ListSecurityProfilesCommandInput,
    cb: (err: any, data?: ListSecurityProfilesCommandOutput) => void
  ): void;
  listSecurityProfiles(
    args: ListSecurityProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecurityProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSecurityProfilesForTargetCommand}
   */
  listSecurityProfilesForTarget(
    args: ListSecurityProfilesForTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSecurityProfilesForTargetCommandOutput>;
  listSecurityProfilesForTarget(
    args: ListSecurityProfilesForTargetCommandInput,
    cb: (err: any, data?: ListSecurityProfilesForTargetCommandOutput) => void
  ): void;
  listSecurityProfilesForTarget(
    args: ListSecurityProfilesForTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecurityProfilesForTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStreamsCommand}
   */
  listStreams(args: ListStreamsCommandInput, options?: __HttpHandlerOptions): Promise<ListStreamsCommandOutput>;
  listStreams(args: ListStreamsCommandInput, cb: (err: any, data?: ListStreamsCommandOutput) => void): void;
  listStreams(
    args: ListStreamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTargetsForPolicyCommand}
   */
  listTargetsForPolicy(
    args: ListTargetsForPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTargetsForPolicyCommandOutput>;
  listTargetsForPolicy(
    args: ListTargetsForPolicyCommandInput,
    cb: (err: any, data?: ListTargetsForPolicyCommandOutput) => void
  ): void;
  listTargetsForPolicy(
    args: ListTargetsForPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTargetsForPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTargetsForSecurityProfileCommand}
   */
  listTargetsForSecurityProfile(
    args: ListTargetsForSecurityProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTargetsForSecurityProfileCommandOutput>;
  listTargetsForSecurityProfile(
    args: ListTargetsForSecurityProfileCommandInput,
    cb: (err: any, data?: ListTargetsForSecurityProfileCommandOutput) => void
  ): void;
  listTargetsForSecurityProfile(
    args: ListTargetsForSecurityProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTargetsForSecurityProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link ListThingGroupsCommand}
   */
  listThingGroups(
    args: ListThingGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListThingGroupsCommandOutput>;
  listThingGroups(args: ListThingGroupsCommandInput, cb: (err: any, data?: ListThingGroupsCommandOutput) => void): void;
  listThingGroups(
    args: ListThingGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThingGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListThingGroupsForThingCommand}
   */
  listThingGroupsForThing(
    args: ListThingGroupsForThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListThingGroupsForThingCommandOutput>;
  listThingGroupsForThing(
    args: ListThingGroupsForThingCommandInput,
    cb: (err: any, data?: ListThingGroupsForThingCommandOutput) => void
  ): void;
  listThingGroupsForThing(
    args: ListThingGroupsForThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThingGroupsForThingCommandOutput) => void
  ): void;

  /**
   * @see {@link ListThingPrincipalsCommand}
   */
  listThingPrincipals(
    args: ListThingPrincipalsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListThingPrincipalsCommandOutput>;
  listThingPrincipals(
    args: ListThingPrincipalsCommandInput,
    cb: (err: any, data?: ListThingPrincipalsCommandOutput) => void
  ): void;
  listThingPrincipals(
    args: ListThingPrincipalsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThingPrincipalsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListThingRegistrationTaskReportsCommand}
   */
  listThingRegistrationTaskReports(
    args: ListThingRegistrationTaskReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListThingRegistrationTaskReportsCommandOutput>;
  listThingRegistrationTaskReports(
    args: ListThingRegistrationTaskReportsCommandInput,
    cb: (err: any, data?: ListThingRegistrationTaskReportsCommandOutput) => void
  ): void;
  listThingRegistrationTaskReports(
    args: ListThingRegistrationTaskReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThingRegistrationTaskReportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListThingRegistrationTasksCommand}
   */
  listThingRegistrationTasks(
    args: ListThingRegistrationTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListThingRegistrationTasksCommandOutput>;
  listThingRegistrationTasks(
    args: ListThingRegistrationTasksCommandInput,
    cb: (err: any, data?: ListThingRegistrationTasksCommandOutput) => void
  ): void;
  listThingRegistrationTasks(
    args: ListThingRegistrationTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThingRegistrationTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListThingsCommand}
   */
  listThings(args: ListThingsCommandInput, options?: __HttpHandlerOptions): Promise<ListThingsCommandOutput>;
  listThings(args: ListThingsCommandInput, cb: (err: any, data?: ListThingsCommandOutput) => void): void;
  listThings(
    args: ListThingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListThingsInBillingGroupCommand}
   */
  listThingsInBillingGroup(
    args: ListThingsInBillingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListThingsInBillingGroupCommandOutput>;
  listThingsInBillingGroup(
    args: ListThingsInBillingGroupCommandInput,
    cb: (err: any, data?: ListThingsInBillingGroupCommandOutput) => void
  ): void;
  listThingsInBillingGroup(
    args: ListThingsInBillingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThingsInBillingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListThingsInThingGroupCommand}
   */
  listThingsInThingGroup(
    args: ListThingsInThingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListThingsInThingGroupCommandOutput>;
  listThingsInThingGroup(
    args: ListThingsInThingGroupCommandInput,
    cb: (err: any, data?: ListThingsInThingGroupCommandOutput) => void
  ): void;
  listThingsInThingGroup(
    args: ListThingsInThingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThingsInThingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListThingTypesCommand}
   */
  listThingTypes(
    args: ListThingTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListThingTypesCommandOutput>;
  listThingTypes(args: ListThingTypesCommandInput, cb: (err: any, data?: ListThingTypesCommandOutput) => void): void;
  listThingTypes(
    args: ListThingTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThingTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTopicRuleDestinationsCommand}
   */
  listTopicRuleDestinations(
    args: ListTopicRuleDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTopicRuleDestinationsCommandOutput>;
  listTopicRuleDestinations(
    args: ListTopicRuleDestinationsCommandInput,
    cb: (err: any, data?: ListTopicRuleDestinationsCommandOutput) => void
  ): void;
  listTopicRuleDestinations(
    args: ListTopicRuleDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTopicRuleDestinationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTopicRulesCommand}
   */
  listTopicRules(
    args: ListTopicRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTopicRulesCommandOutput>;
  listTopicRules(args: ListTopicRulesCommandInput, cb: (err: any, data?: ListTopicRulesCommandOutput) => void): void;
  listTopicRules(
    args: ListTopicRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTopicRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListV2LoggingLevelsCommand}
   */
  listV2LoggingLevels(
    args: ListV2LoggingLevelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListV2LoggingLevelsCommandOutput>;
  listV2LoggingLevels(
    args: ListV2LoggingLevelsCommandInput,
    cb: (err: any, data?: ListV2LoggingLevelsCommandOutput) => void
  ): void;
  listV2LoggingLevels(
    args: ListV2LoggingLevelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListV2LoggingLevelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListViolationEventsCommand}
   */
  listViolationEvents(
    args: ListViolationEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListViolationEventsCommandOutput>;
  listViolationEvents(
    args: ListViolationEventsCommandInput,
    cb: (err: any, data?: ListViolationEventsCommandOutput) => void
  ): void;
  listViolationEvents(
    args: ListViolationEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListViolationEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutVerificationStateOnViolationCommand}
   */
  putVerificationStateOnViolation(
    args: PutVerificationStateOnViolationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVerificationStateOnViolationCommandOutput>;
  putVerificationStateOnViolation(
    args: PutVerificationStateOnViolationCommandInput,
    cb: (err: any, data?: PutVerificationStateOnViolationCommandOutput) => void
  ): void;
  putVerificationStateOnViolation(
    args: PutVerificationStateOnViolationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVerificationStateOnViolationCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterCACertificateCommand}
   */
  registerCACertificate(
    args: RegisterCACertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterCACertificateCommandOutput>;
  registerCACertificate(
    args: RegisterCACertificateCommandInput,
    cb: (err: any, data?: RegisterCACertificateCommandOutput) => void
  ): void;
  registerCACertificate(
    args: RegisterCACertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterCACertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterCertificateCommand}
   */
  registerCertificate(
    args: RegisterCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterCertificateCommandOutput>;
  registerCertificate(
    args: RegisterCertificateCommandInput,
    cb: (err: any, data?: RegisterCertificateCommandOutput) => void
  ): void;
  registerCertificate(
    args: RegisterCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterCertificateWithoutCACommand}
   */
  registerCertificateWithoutCA(
    args: RegisterCertificateWithoutCACommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterCertificateWithoutCACommandOutput>;
  registerCertificateWithoutCA(
    args: RegisterCertificateWithoutCACommandInput,
    cb: (err: any, data?: RegisterCertificateWithoutCACommandOutput) => void
  ): void;
  registerCertificateWithoutCA(
    args: RegisterCertificateWithoutCACommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterCertificateWithoutCACommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterThingCommand}
   */
  registerThing(args: RegisterThingCommandInput, options?: __HttpHandlerOptions): Promise<RegisterThingCommandOutput>;
  registerThing(args: RegisterThingCommandInput, cb: (err: any, data?: RegisterThingCommandOutput) => void): void;
  registerThing(
    args: RegisterThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterThingCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectCertificateTransferCommand}
   */
  rejectCertificateTransfer(
    args: RejectCertificateTransferCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectCertificateTransferCommandOutput>;
  rejectCertificateTransfer(
    args: RejectCertificateTransferCommandInput,
    cb: (err: any, data?: RejectCertificateTransferCommandOutput) => void
  ): void;
  rejectCertificateTransfer(
    args: RejectCertificateTransferCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectCertificateTransferCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveThingFromBillingGroupCommand}
   */
  removeThingFromBillingGroup(
    args: RemoveThingFromBillingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveThingFromBillingGroupCommandOutput>;
  removeThingFromBillingGroup(
    args: RemoveThingFromBillingGroupCommandInput,
    cb: (err: any, data?: RemoveThingFromBillingGroupCommandOutput) => void
  ): void;
  removeThingFromBillingGroup(
    args: RemoveThingFromBillingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveThingFromBillingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveThingFromThingGroupCommand}
   */
  removeThingFromThingGroup(
    args: RemoveThingFromThingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveThingFromThingGroupCommandOutput>;
  removeThingFromThingGroup(
    args: RemoveThingFromThingGroupCommandInput,
    cb: (err: any, data?: RemoveThingFromThingGroupCommandOutput) => void
  ): void;
  removeThingFromThingGroup(
    args: RemoveThingFromThingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveThingFromThingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ReplaceTopicRuleCommand}
   */
  replaceTopicRule(
    args: ReplaceTopicRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReplaceTopicRuleCommandOutput>;
  replaceTopicRule(
    args: ReplaceTopicRuleCommandInput,
    cb: (err: any, data?: ReplaceTopicRuleCommandOutput) => void
  ): void;
  replaceTopicRule(
    args: ReplaceTopicRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReplaceTopicRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchIndexCommand}
   */
  searchIndex(args: SearchIndexCommandInput, options?: __HttpHandlerOptions): Promise<SearchIndexCommandOutput>;
  searchIndex(args: SearchIndexCommandInput, cb: (err: any, data?: SearchIndexCommandOutput) => void): void;
  searchIndex(
    args: SearchIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link SetDefaultAuthorizerCommand}
   */
  setDefaultAuthorizer(
    args: SetDefaultAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetDefaultAuthorizerCommandOutput>;
  setDefaultAuthorizer(
    args: SetDefaultAuthorizerCommandInput,
    cb: (err: any, data?: SetDefaultAuthorizerCommandOutput) => void
  ): void;
  setDefaultAuthorizer(
    args: SetDefaultAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetDefaultAuthorizerCommandOutput) => void
  ): void;

  /**
   * @see {@link SetDefaultPolicyVersionCommand}
   */
  setDefaultPolicyVersion(
    args: SetDefaultPolicyVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetDefaultPolicyVersionCommandOutput>;
  setDefaultPolicyVersion(
    args: SetDefaultPolicyVersionCommandInput,
    cb: (err: any, data?: SetDefaultPolicyVersionCommandOutput) => void
  ): void;
  setDefaultPolicyVersion(
    args: SetDefaultPolicyVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetDefaultPolicyVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link SetLoggingOptionsCommand}
   */
  setLoggingOptions(
    args: SetLoggingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetLoggingOptionsCommandOutput>;
  setLoggingOptions(
    args: SetLoggingOptionsCommandInput,
    cb: (err: any, data?: SetLoggingOptionsCommandOutput) => void
  ): void;
  setLoggingOptions(
    args: SetLoggingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetLoggingOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link SetV2LoggingLevelCommand}
   */
  setV2LoggingLevel(
    args: SetV2LoggingLevelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetV2LoggingLevelCommandOutput>;
  setV2LoggingLevel(
    args: SetV2LoggingLevelCommandInput,
    cb: (err: any, data?: SetV2LoggingLevelCommandOutput) => void
  ): void;
  setV2LoggingLevel(
    args: SetV2LoggingLevelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetV2LoggingLevelCommandOutput) => void
  ): void;

  /**
   * @see {@link SetV2LoggingOptionsCommand}
   */
  setV2LoggingOptions(
    args: SetV2LoggingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetV2LoggingOptionsCommandOutput>;
  setV2LoggingOptions(
    args: SetV2LoggingOptionsCommandInput,
    cb: (err: any, data?: SetV2LoggingOptionsCommandOutput) => void
  ): void;
  setV2LoggingOptions(
    args: SetV2LoggingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetV2LoggingOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAuditMitigationActionsTaskCommand}
   */
  startAuditMitigationActionsTask(
    args: StartAuditMitigationActionsTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAuditMitigationActionsTaskCommandOutput>;
  startAuditMitigationActionsTask(
    args: StartAuditMitigationActionsTaskCommandInput,
    cb: (err: any, data?: StartAuditMitigationActionsTaskCommandOutput) => void
  ): void;
  startAuditMitigationActionsTask(
    args: StartAuditMitigationActionsTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAuditMitigationActionsTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDetectMitigationActionsTaskCommand}
   */
  startDetectMitigationActionsTask(
    args: StartDetectMitigationActionsTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDetectMitigationActionsTaskCommandOutput>;
  startDetectMitigationActionsTask(
    args: StartDetectMitigationActionsTaskCommandInput,
    cb: (err: any, data?: StartDetectMitigationActionsTaskCommandOutput) => void
  ): void;
  startDetectMitigationActionsTask(
    args: StartDetectMitigationActionsTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDetectMitigationActionsTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StartOnDemandAuditTaskCommand}
   */
  startOnDemandAuditTask(
    args: StartOnDemandAuditTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartOnDemandAuditTaskCommandOutput>;
  startOnDemandAuditTask(
    args: StartOnDemandAuditTaskCommandInput,
    cb: (err: any, data?: StartOnDemandAuditTaskCommandOutput) => void
  ): void;
  startOnDemandAuditTask(
    args: StartOnDemandAuditTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartOnDemandAuditTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StartThingRegistrationTaskCommand}
   */
  startThingRegistrationTask(
    args: StartThingRegistrationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartThingRegistrationTaskCommandOutput>;
  startThingRegistrationTask(
    args: StartThingRegistrationTaskCommandInput,
    cb: (err: any, data?: StartThingRegistrationTaskCommandOutput) => void
  ): void;
  startThingRegistrationTask(
    args: StartThingRegistrationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartThingRegistrationTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StopThingRegistrationTaskCommand}
   */
  stopThingRegistrationTask(
    args: StopThingRegistrationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopThingRegistrationTaskCommandOutput>;
  stopThingRegistrationTask(
    args: StopThingRegistrationTaskCommandInput,
    cb: (err: any, data?: StopThingRegistrationTaskCommandOutput) => void
  ): void;
  stopThingRegistrationTask(
    args: StopThingRegistrationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopThingRegistrationTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TestAuthorizationCommand}
   */
  testAuthorization(
    args: TestAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestAuthorizationCommandOutput>;
  testAuthorization(
    args: TestAuthorizationCommandInput,
    cb: (err: any, data?: TestAuthorizationCommandOutput) => void
  ): void;
  testAuthorization(
    args: TestAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestAuthorizationCommandOutput) => void
  ): void;

  /**
   * @see {@link TestInvokeAuthorizerCommand}
   */
  testInvokeAuthorizer(
    args: TestInvokeAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestInvokeAuthorizerCommandOutput>;
  testInvokeAuthorizer(
    args: TestInvokeAuthorizerCommandInput,
    cb: (err: any, data?: TestInvokeAuthorizerCommandOutput) => void
  ): void;
  testInvokeAuthorizer(
    args: TestInvokeAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestInvokeAuthorizerCommandOutput) => void
  ): void;

  /**
   * @see {@link TransferCertificateCommand}
   */
  transferCertificate(
    args: TransferCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TransferCertificateCommandOutput>;
  transferCertificate(
    args: TransferCertificateCommandInput,
    cb: (err: any, data?: TransferCertificateCommandOutput) => void
  ): void;
  transferCertificate(
    args: TransferCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TransferCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountAuditConfigurationCommand}
   */
  updateAccountAuditConfiguration(
    args: UpdateAccountAuditConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountAuditConfigurationCommandOutput>;
  updateAccountAuditConfiguration(
    args: UpdateAccountAuditConfigurationCommandInput,
    cb: (err: any, data?: UpdateAccountAuditConfigurationCommandOutput) => void
  ): void;
  updateAccountAuditConfiguration(
    args: UpdateAccountAuditConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountAuditConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAuditSuppressionCommand}
   */
  updateAuditSuppression(
    args: UpdateAuditSuppressionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAuditSuppressionCommandOutput>;
  updateAuditSuppression(
    args: UpdateAuditSuppressionCommandInput,
    cb: (err: any, data?: UpdateAuditSuppressionCommandOutput) => void
  ): void;
  updateAuditSuppression(
    args: UpdateAuditSuppressionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAuditSuppressionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAuthorizerCommand}
   */
  updateAuthorizer(
    args: UpdateAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAuthorizerCommandOutput>;
  updateAuthorizer(
    args: UpdateAuthorizerCommandInput,
    cb: (err: any, data?: UpdateAuthorizerCommandOutput) => void
  ): void;
  updateAuthorizer(
    args: UpdateAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAuthorizerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBillingGroupCommand}
   */
  updateBillingGroup(
    args: UpdateBillingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBillingGroupCommandOutput>;
  updateBillingGroup(
    args: UpdateBillingGroupCommandInput,
    cb: (err: any, data?: UpdateBillingGroupCommandOutput) => void
  ): void;
  updateBillingGroup(
    args: UpdateBillingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBillingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCACertificateCommand}
   */
  updateCACertificate(
    args: UpdateCACertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCACertificateCommandOutput>;
  updateCACertificate(
    args: UpdateCACertificateCommandInput,
    cb: (err: any, data?: UpdateCACertificateCommandOutput) => void
  ): void;
  updateCACertificate(
    args: UpdateCACertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCACertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCertificateCommand}
   */
  updateCertificate(
    args: UpdateCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCertificateCommandOutput>;
  updateCertificate(
    args: UpdateCertificateCommandInput,
    cb: (err: any, data?: UpdateCertificateCommandOutput) => void
  ): void;
  updateCertificate(
    args: UpdateCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCustomMetricCommand}
   */
  updateCustomMetric(
    args: UpdateCustomMetricCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCustomMetricCommandOutput>;
  updateCustomMetric(
    args: UpdateCustomMetricCommandInput,
    cb: (err: any, data?: UpdateCustomMetricCommandOutput) => void
  ): void;
  updateCustomMetric(
    args: UpdateCustomMetricCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCustomMetricCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDimensionCommand}
   */
  updateDimension(
    args: UpdateDimensionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDimensionCommandOutput>;
  updateDimension(args: UpdateDimensionCommandInput, cb: (err: any, data?: UpdateDimensionCommandOutput) => void): void;
  updateDimension(
    args: UpdateDimensionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDimensionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDomainConfigurationCommand}
   */
  updateDomainConfiguration(
    args: UpdateDomainConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainConfigurationCommandOutput>;
  updateDomainConfiguration(
    args: UpdateDomainConfigurationCommandInput,
    cb: (err: any, data?: UpdateDomainConfigurationCommandOutput) => void
  ): void;
  updateDomainConfiguration(
    args: UpdateDomainConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDynamicThingGroupCommand}
   */
  updateDynamicThingGroup(
    args: UpdateDynamicThingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDynamicThingGroupCommandOutput>;
  updateDynamicThingGroup(
    args: UpdateDynamicThingGroupCommandInput,
    cb: (err: any, data?: UpdateDynamicThingGroupCommandOutput) => void
  ): void;
  updateDynamicThingGroup(
    args: UpdateDynamicThingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDynamicThingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEventConfigurationsCommand}
   */
  updateEventConfigurations(
    args: UpdateEventConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEventConfigurationsCommandOutput>;
  updateEventConfigurations(
    args: UpdateEventConfigurationsCommandInput,
    cb: (err: any, data?: UpdateEventConfigurationsCommandOutput) => void
  ): void;
  updateEventConfigurations(
    args: UpdateEventConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEventConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFleetMetricCommand}
   */
  updateFleetMetric(
    args: UpdateFleetMetricCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFleetMetricCommandOutput>;
  updateFleetMetric(
    args: UpdateFleetMetricCommandInput,
    cb: (err: any, data?: UpdateFleetMetricCommandOutput) => void
  ): void;
  updateFleetMetric(
    args: UpdateFleetMetricCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFleetMetricCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIndexingConfigurationCommand}
   */
  updateIndexingConfiguration(
    args: UpdateIndexingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIndexingConfigurationCommandOutput>;
  updateIndexingConfiguration(
    args: UpdateIndexingConfigurationCommandInput,
    cb: (err: any, data?: UpdateIndexingConfigurationCommandOutput) => void
  ): void;
  updateIndexingConfiguration(
    args: UpdateIndexingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIndexingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateJobCommand}
   */
  updateJob(args: UpdateJobCommandInput, options?: __HttpHandlerOptions): Promise<UpdateJobCommandOutput>;
  updateJob(args: UpdateJobCommandInput, cb: (err: any, data?: UpdateJobCommandOutput) => void): void;
  updateJob(
    args: UpdateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateJobCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMitigationActionCommand}
   */
  updateMitigationAction(
    args: UpdateMitigationActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMitigationActionCommandOutput>;
  updateMitigationAction(
    args: UpdateMitigationActionCommandInput,
    cb: (err: any, data?: UpdateMitigationActionCommandOutput) => void
  ): void;
  updateMitigationAction(
    args: UpdateMitigationActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMitigationActionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePackageCommand}
   */
  updatePackage(args: UpdatePackageCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePackageCommandOutput>;
  updatePackage(args: UpdatePackageCommandInput, cb: (err: any, data?: UpdatePackageCommandOutput) => void): void;
  updatePackage(
    args: UpdatePackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePackageCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePackageConfigurationCommand}
   */
  updatePackageConfiguration(
    args: UpdatePackageConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePackageConfigurationCommandOutput>;
  updatePackageConfiguration(
    args: UpdatePackageConfigurationCommandInput,
    cb: (err: any, data?: UpdatePackageConfigurationCommandOutput) => void
  ): void;
  updatePackageConfiguration(
    args: UpdatePackageConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePackageConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePackageVersionCommand}
   */
  updatePackageVersion(
    args: UpdatePackageVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePackageVersionCommandOutput>;
  updatePackageVersion(
    args: UpdatePackageVersionCommandInput,
    cb: (err: any, data?: UpdatePackageVersionCommandOutput) => void
  ): void;
  updatePackageVersion(
    args: UpdatePackageVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePackageVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProvisioningTemplateCommand}
   */
  updateProvisioningTemplate(
    args: UpdateProvisioningTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProvisioningTemplateCommandOutput>;
  updateProvisioningTemplate(
    args: UpdateProvisioningTemplateCommandInput,
    cb: (err: any, data?: UpdateProvisioningTemplateCommandOutput) => void
  ): void;
  updateProvisioningTemplate(
    args: UpdateProvisioningTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProvisioningTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRoleAliasCommand}
   */
  updateRoleAlias(
    args: UpdateRoleAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRoleAliasCommandOutput>;
  updateRoleAlias(args: UpdateRoleAliasCommandInput, cb: (err: any, data?: UpdateRoleAliasCommandOutput) => void): void;
  updateRoleAlias(
    args: UpdateRoleAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoleAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateScheduledAuditCommand}
   */
  updateScheduledAudit(
    args: UpdateScheduledAuditCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateScheduledAuditCommandOutput>;
  updateScheduledAudit(
    args: UpdateScheduledAuditCommandInput,
    cb: (err: any, data?: UpdateScheduledAuditCommandOutput) => void
  ): void;
  updateScheduledAudit(
    args: UpdateScheduledAuditCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateScheduledAuditCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSecurityProfileCommand}
   */
  updateSecurityProfile(
    args: UpdateSecurityProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSecurityProfileCommandOutput>;
  updateSecurityProfile(
    args: UpdateSecurityProfileCommandInput,
    cb: (err: any, data?: UpdateSecurityProfileCommandOutput) => void
  ): void;
  updateSecurityProfile(
    args: UpdateSecurityProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSecurityProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStreamCommand}
   */
  updateStream(args: UpdateStreamCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStreamCommandOutput>;
  updateStream(args: UpdateStreamCommandInput, cb: (err: any, data?: UpdateStreamCommandOutput) => void): void;
  updateStream(
    args: UpdateStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateThingCommand}
   */
  updateThing(args: UpdateThingCommandInput, options?: __HttpHandlerOptions): Promise<UpdateThingCommandOutput>;
  updateThing(args: UpdateThingCommandInput, cb: (err: any, data?: UpdateThingCommandOutput) => void): void;
  updateThing(
    args: UpdateThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateThingCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateThingGroupCommand}
   */
  updateThingGroup(
    args: UpdateThingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateThingGroupCommandOutput>;
  updateThingGroup(
    args: UpdateThingGroupCommandInput,
    cb: (err: any, data?: UpdateThingGroupCommandOutput) => void
  ): void;
  updateThingGroup(
    args: UpdateThingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateThingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateThingGroupsForThingCommand}
   */
  updateThingGroupsForThing(
    args: UpdateThingGroupsForThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateThingGroupsForThingCommandOutput>;
  updateThingGroupsForThing(
    args: UpdateThingGroupsForThingCommandInput,
    cb: (err: any, data?: UpdateThingGroupsForThingCommandOutput) => void
  ): void;
  updateThingGroupsForThing(
    args: UpdateThingGroupsForThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateThingGroupsForThingCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTopicRuleDestinationCommand}
   */
  updateTopicRuleDestination(
    args: UpdateTopicRuleDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTopicRuleDestinationCommandOutput>;
  updateTopicRuleDestination(
    args: UpdateTopicRuleDestinationCommandInput,
    cb: (err: any, data?: UpdateTopicRuleDestinationCommandOutput) => void
  ): void;
  updateTopicRuleDestination(
    args: UpdateTopicRuleDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTopicRuleDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link ValidateSecurityProfileBehaviorsCommand}
   */
  validateSecurityProfileBehaviors(
    args: ValidateSecurityProfileBehaviorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidateSecurityProfileBehaviorsCommandOutput>;
  validateSecurityProfileBehaviors(
    args: ValidateSecurityProfileBehaviorsCommandInput,
    cb: (err: any, data?: ValidateSecurityProfileBehaviorsCommandOutput) => void
  ): void;
  validateSecurityProfileBehaviors(
    args: ValidateSecurityProfileBehaviorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidateSecurityProfileBehaviorsCommandOutput) => void
  ): void;
}

/**
 * @public
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
 */
export class IoT extends IoTClient implements IoT {}
createAggregatedClient(commands, IoT);
