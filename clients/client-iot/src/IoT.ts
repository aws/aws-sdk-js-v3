// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { IoTClient } from "./IoTClient";

/**
 * <fullname>IoT</fullname>
 *         <p>IoT provides secure, bi-directional communication between Internet-connected
 *             devices (such as sensors, actuators, embedded devices, or smart appliances) and the Amazon Web Services
 *             cloud. You can discover your custom IoT-Data endpoint to communicate with, configure
 *             rules for data processing and integration with other services, organize resources
 *             associated with each device (Registry), configure logging, and create and manage
 *             policies and credentials to authenticate devices.</p>
 *         <p>The service endpoints that expose this API are listed in
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/iot-core.html">Amazon Web Services IoT Core Endpoints and Quotas</a>.
 *             You must use the endpoint for the region that has the resources you want to access.</p>
 *         <p>The service name used by <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Amazon Web Services
 *                 Signature Version 4</a> to sign the request is:
 *             <i>execute-api</i>.</p>
 *         <p>For more information about how IoT works, see the <a href="https://docs.aws.amazon.com/iot/latest/developerguide/aws-iot-how-it-works.html">Developer
 *             Guide</a>.</p>
 *         <p>For information about how to use the credentials provider for IoT, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/authorizing-direct-aws.html">Authorizing Direct Calls to Amazon Web Services Services</a>.</p>
 */
export class IoT extends IoTClient {
  /**
   * <p>Accepts a pending certificate transfer. The default state of the certificate is
   *          INACTIVE.</p>
   *          <p>To check for pending certificate transfers, call <a>ListCertificates</a>
   *          to enumerate your certificates.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AcceptCertificateTransfer</a> action.</p>
   */
  public acceptCertificateTransfer(
    args: AcceptCertificateTransferCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptCertificateTransferCommandOutput>;
  public acceptCertificateTransfer(
    args: AcceptCertificateTransferCommandInput,
    cb: (err: any, data?: AcceptCertificateTransferCommandOutput) => void
  ): void;
  public acceptCertificateTransfer(
    args: AcceptCertificateTransferCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptCertificateTransferCommandOutput) => void
  ): void;
  public acceptCertificateTransfer(
    args: AcceptCertificateTransferCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AcceptCertificateTransferCommandOutput) => void),
    cb?: (err: any, data?: AcceptCertificateTransferCommandOutput) => void
  ): Promise<AcceptCertificateTransferCommandOutput> | void {
    const command = new AcceptCertificateTransferCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds a thing to a billing group.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AddThingToBillingGroup</a> action.</p>
   */
  public addThingToBillingGroup(
    args: AddThingToBillingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddThingToBillingGroupCommandOutput>;
  public addThingToBillingGroup(
    args: AddThingToBillingGroupCommandInput,
    cb: (err: any, data?: AddThingToBillingGroupCommandOutput) => void
  ): void;
  public addThingToBillingGroup(
    args: AddThingToBillingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddThingToBillingGroupCommandOutput) => void
  ): void;
  public addThingToBillingGroup(
    args: AddThingToBillingGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddThingToBillingGroupCommandOutput) => void),
    cb?: (err: any, data?: AddThingToBillingGroupCommandOutput) => void
  ): Promise<AddThingToBillingGroupCommandOutput> | void {
    const command = new AddThingToBillingGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds a thing to a thing group.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AddThingToThingGroup</a> action.</p>
   */
  public addThingToThingGroup(
    args: AddThingToThingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddThingToThingGroupCommandOutput>;
  public addThingToThingGroup(
    args: AddThingToThingGroupCommandInput,
    cb: (err: any, data?: AddThingToThingGroupCommandOutput) => void
  ): void;
  public addThingToThingGroup(
    args: AddThingToThingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddThingToThingGroupCommandOutput) => void
  ): void;
  public addThingToThingGroup(
    args: AddThingToThingGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddThingToThingGroupCommandOutput) => void),
    cb?: (err: any, data?: AddThingToThingGroupCommandOutput) => void
  ): Promise<AddThingToThingGroupCommandOutput> | void {
    const command = new AddThingToThingGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a group with a continuous job. The following criteria must be met: </p>
   *         <ul>
   *             <li>
   *                 <p>The job must have been created with the <code>targetSelection</code> field set to
   *                     "CONTINUOUS".</p>
   *             </li>
   *             <li>
   *                 <p>The job status must currently be "IN_PROGRESS".</p>
   *             </li>
   *             <li>
   *                 <p>The total number of targets associated with a job must not exceed 100.</p>
   *             </li>
   *          </ul>
   *         <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AssociateTargetsWithJob</a> action.</p>
   */
  public associateTargetsWithJob(
    args: AssociateTargetsWithJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateTargetsWithJobCommandOutput>;
  public associateTargetsWithJob(
    args: AssociateTargetsWithJobCommandInput,
    cb: (err: any, data?: AssociateTargetsWithJobCommandOutput) => void
  ): void;
  public associateTargetsWithJob(
    args: AssociateTargetsWithJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateTargetsWithJobCommandOutput) => void
  ): void;
  public associateTargetsWithJob(
    args: AssociateTargetsWithJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateTargetsWithJobCommandOutput) => void),
    cb?: (err: any, data?: AssociateTargetsWithJobCommandOutput) => void
  ): Promise<AssociateTargetsWithJobCommandOutput> | void {
    const command = new AssociateTargetsWithJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Attaches the specified policy to the specified principal (certificate or other
   *          credential).</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachPolicy</a> action.</p>
   */
  public attachPolicy(
    args: AttachPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachPolicyCommandOutput>;
  public attachPolicy(args: AttachPolicyCommandInput, cb: (err: any, data?: AttachPolicyCommandOutput) => void): void;
  public attachPolicy(
    args: AttachPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachPolicyCommandOutput) => void
  ): void;
  public attachPolicy(
    args: AttachPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AttachPolicyCommandOutput) => void),
    cb?: (err: any, data?: AttachPolicyCommandOutput) => void
  ): Promise<AttachPolicyCommandOutput> | void {
    const command = new AttachPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @deprecated
   *
   * <p>Attaches the specified policy to the specified principal (certificate or other
   *          credential).</p>
   *          <p>
   *             <b>Note:</b> This action is deprecated and works as
   *          expected for backward compatibility, but we won't add enhancements. Use <a>AttachPolicy</a> instead.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachPrincipalPolicy</a> action.</p>
   */
  public attachPrincipalPolicy(
    args: AttachPrincipalPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachPrincipalPolicyCommandOutput>;
  public attachPrincipalPolicy(
    args: AttachPrincipalPolicyCommandInput,
    cb: (err: any, data?: AttachPrincipalPolicyCommandOutput) => void
  ): void;
  public attachPrincipalPolicy(
    args: AttachPrincipalPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachPrincipalPolicyCommandOutput) => void
  ): void;
  public attachPrincipalPolicy(
    args: AttachPrincipalPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AttachPrincipalPolicyCommandOutput) => void),
    cb?: (err: any, data?: AttachPrincipalPolicyCommandOutput) => void
  ): Promise<AttachPrincipalPolicyCommandOutput> | void {
    const command = new AttachPrincipalPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a Device Defender security profile with a thing group or this account. Each
   *         thing group or account can have up to five security profiles associated with it.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachSecurityProfile</a> action.</p>
   */
  public attachSecurityProfile(
    args: AttachSecurityProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachSecurityProfileCommandOutput>;
  public attachSecurityProfile(
    args: AttachSecurityProfileCommandInput,
    cb: (err: any, data?: AttachSecurityProfileCommandOutput) => void
  ): void;
  public attachSecurityProfile(
    args: AttachSecurityProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachSecurityProfileCommandOutput) => void
  ): void;
  public attachSecurityProfile(
    args: AttachSecurityProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AttachSecurityProfileCommandOutput) => void),
    cb?: (err: any, data?: AttachSecurityProfileCommandOutput) => void
  ): Promise<AttachSecurityProfileCommandOutput> | void {
    const command = new AttachSecurityProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Attaches the specified principal to the specified thing. A principal can be X.509
   * 			certificates, Amazon Cognito identities or federated identities.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachThingPrincipal</a> action.</p>
   */
  public attachThingPrincipal(
    args: AttachThingPrincipalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachThingPrincipalCommandOutput>;
  public attachThingPrincipal(
    args: AttachThingPrincipalCommandInput,
    cb: (err: any, data?: AttachThingPrincipalCommandOutput) => void
  ): void;
  public attachThingPrincipal(
    args: AttachThingPrincipalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachThingPrincipalCommandOutput) => void
  ): void;
  public attachThingPrincipal(
    args: AttachThingPrincipalCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AttachThingPrincipalCommandOutput) => void),
    cb?: (err: any, data?: AttachThingPrincipalCommandOutput) => void
  ): Promise<AttachThingPrincipalCommandOutput> | void {
    const command = new AttachThingPrincipalCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels a mitigation action task that is in progress. If the task
   *       is not
   *       in progress, an InvalidRequestException occurs.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelAuditMitigationActionsTask</a> action.</p>
   */
  public cancelAuditMitigationActionsTask(
    args: CancelAuditMitigationActionsTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelAuditMitigationActionsTaskCommandOutput>;
  public cancelAuditMitigationActionsTask(
    args: CancelAuditMitigationActionsTaskCommandInput,
    cb: (err: any, data?: CancelAuditMitigationActionsTaskCommandOutput) => void
  ): void;
  public cancelAuditMitigationActionsTask(
    args: CancelAuditMitigationActionsTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelAuditMitigationActionsTaskCommandOutput) => void
  ): void;
  public cancelAuditMitigationActionsTask(
    args: CancelAuditMitigationActionsTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelAuditMitigationActionsTaskCommandOutput) => void),
    cb?: (err: any, data?: CancelAuditMitigationActionsTaskCommandOutput) => void
  ): Promise<CancelAuditMitigationActionsTaskCommandOutput> | void {
    const command = new CancelAuditMitigationActionsTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels an audit that is in progress. The audit can be either scheduled or on demand. If the audit isn't in progress, an "InvalidRequestException" occurs.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelAuditTask</a> action.</p>
   */
  public cancelAuditTask(
    args: CancelAuditTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelAuditTaskCommandOutput>;
  public cancelAuditTask(
    args: CancelAuditTaskCommandInput,
    cb: (err: any, data?: CancelAuditTaskCommandOutput) => void
  ): void;
  public cancelAuditTask(
    args: CancelAuditTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelAuditTaskCommandOutput) => void
  ): void;
  public cancelAuditTask(
    args: CancelAuditTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelAuditTaskCommandOutput) => void),
    cb?: (err: any, data?: CancelAuditTaskCommandOutput) => void
  ): Promise<CancelAuditTaskCommandOutput> | void {
    const command = new CancelAuditTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels a pending transfer for the specified certificate.</p>
   *          <p>
   *             <b>Note</b> Only the transfer source account can use this
   *          operation to cancel a transfer. (Transfer destinations can use <a>RejectCertificateTransfer</a> instead.) After transfer, IoT returns the
   *          certificate to the source account in the INACTIVE state. After the destination account has
   *          accepted the transfer, the transfer cannot be cancelled.</p>
   *          <p>After a certificate transfer is cancelled, the status of the certificate changes from
   *          PENDING_TRANSFER to INACTIVE.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelCertificateTransfer</a> action.</p>
   */
  public cancelCertificateTransfer(
    args: CancelCertificateTransferCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelCertificateTransferCommandOutput>;
  public cancelCertificateTransfer(
    args: CancelCertificateTransferCommandInput,
    cb: (err: any, data?: CancelCertificateTransferCommandOutput) => void
  ): void;
  public cancelCertificateTransfer(
    args: CancelCertificateTransferCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelCertificateTransferCommandOutput) => void
  ): void;
  public cancelCertificateTransfer(
    args: CancelCertificateTransferCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelCertificateTransferCommandOutput) => void),
    cb?: (err: any, data?: CancelCertificateTransferCommandOutput) => void
  ): Promise<CancelCertificateTransferCommandOutput> | void {
    const command = new CancelCertificateTransferCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *         Cancels a Device Defender ML Detect mitigation action.
   *       </p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelDetectMitigationActionsTask</a> action.</p>
   */
  public cancelDetectMitigationActionsTask(
    args: CancelDetectMitigationActionsTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelDetectMitigationActionsTaskCommandOutput>;
  public cancelDetectMitigationActionsTask(
    args: CancelDetectMitigationActionsTaskCommandInput,
    cb: (err: any, data?: CancelDetectMitigationActionsTaskCommandOutput) => void
  ): void;
  public cancelDetectMitigationActionsTask(
    args: CancelDetectMitigationActionsTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelDetectMitigationActionsTaskCommandOutput) => void
  ): void;
  public cancelDetectMitigationActionsTask(
    args: CancelDetectMitigationActionsTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelDetectMitigationActionsTaskCommandOutput) => void),
    cb?: (err: any, data?: CancelDetectMitigationActionsTaskCommandOutput) => void
  ): Promise<CancelDetectMitigationActionsTaskCommandOutput> | void {
    const command = new CancelDetectMitigationActionsTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels a job.</p>
   *         <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelJob</a> action.</p>
   */
  public cancelJob(args: CancelJobCommandInput, options?: __HttpHandlerOptions): Promise<CancelJobCommandOutput>;
  public cancelJob(args: CancelJobCommandInput, cb: (err: any, data?: CancelJobCommandOutput) => void): void;
  public cancelJob(
    args: CancelJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelJobCommandOutput) => void
  ): void;
  public cancelJob(
    args: CancelJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelJobCommandOutput) => void),
    cb?: (err: any, data?: CancelJobCommandOutput) => void
  ): Promise<CancelJobCommandOutput> | void {
    const command = new CancelJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels the execution of a job for a given thing.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelJobExecution</a> action.</p>
   */
  public cancelJobExecution(
    args: CancelJobExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelJobExecutionCommandOutput>;
  public cancelJobExecution(
    args: CancelJobExecutionCommandInput,
    cb: (err: any, data?: CancelJobExecutionCommandOutput) => void
  ): void;
  public cancelJobExecution(
    args: CancelJobExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelJobExecutionCommandOutput) => void
  ): void;
  public cancelJobExecution(
    args: CancelJobExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelJobExecutionCommandOutput) => void),
    cb?: (err: any, data?: CancelJobExecutionCommandOutput) => void
  ): Promise<CancelJobExecutionCommandOutput> | void {
    const command = new CancelJobExecutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Clears the default authorizer.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ClearDefaultAuthorizer</a> action.</p>
   */
  public clearDefaultAuthorizer(
    args: ClearDefaultAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ClearDefaultAuthorizerCommandOutput>;
  public clearDefaultAuthorizer(
    args: ClearDefaultAuthorizerCommandInput,
    cb: (err: any, data?: ClearDefaultAuthorizerCommandOutput) => void
  ): void;
  public clearDefaultAuthorizer(
    args: ClearDefaultAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ClearDefaultAuthorizerCommandOutput) => void
  ): void;
  public clearDefaultAuthorizer(
    args: ClearDefaultAuthorizerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ClearDefaultAuthorizerCommandOutput) => void),
    cb?: (err: any, data?: ClearDefaultAuthorizerCommandOutput) => void
  ): Promise<ClearDefaultAuthorizerCommandOutput> | void {
    const command = new ClearDefaultAuthorizerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Confirms a topic rule destination. When you create a rule requiring a destination, IoT
   *          sends a confirmation message to the endpoint or base address you specify. The message
   *          includes a token which you pass back when calling <code>ConfirmTopicRuleDestination</code>
   *          to confirm that you own or have access to the endpoint.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ConfirmTopicRuleDestination</a> action.</p>
   */
  public confirmTopicRuleDestination(
    args: ConfirmTopicRuleDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfirmTopicRuleDestinationCommandOutput>;
  public confirmTopicRuleDestination(
    args: ConfirmTopicRuleDestinationCommandInput,
    cb: (err: any, data?: ConfirmTopicRuleDestinationCommandOutput) => void
  ): void;
  public confirmTopicRuleDestination(
    args: ConfirmTopicRuleDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfirmTopicRuleDestinationCommandOutput) => void
  ): void;
  public confirmTopicRuleDestination(
    args: ConfirmTopicRuleDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ConfirmTopicRuleDestinationCommandOutput) => void),
    cb?: (err: any, data?: ConfirmTopicRuleDestinationCommandOutput) => void
  ): Promise<ConfirmTopicRuleDestinationCommandOutput> | void {
    const command = new ConfirmTopicRuleDestinationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *       Creates a Device Defender audit suppression.
   *     </p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateAuditSuppression</a> action.</p>
   */
  public createAuditSuppression(
    args: CreateAuditSuppressionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAuditSuppressionCommandOutput>;
  public createAuditSuppression(
    args: CreateAuditSuppressionCommandInput,
    cb: (err: any, data?: CreateAuditSuppressionCommandOutput) => void
  ): void;
  public createAuditSuppression(
    args: CreateAuditSuppressionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAuditSuppressionCommandOutput) => void
  ): void;
  public createAuditSuppression(
    args: CreateAuditSuppressionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAuditSuppressionCommandOutput) => void),
    cb?: (err: any, data?: CreateAuditSuppressionCommandOutput) => void
  ): Promise<CreateAuditSuppressionCommandOutput> | void {
    const command = new CreateAuditSuppressionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an authorizer.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateAuthorizer</a> action.</p>
   */
  public createAuthorizer(
    args: CreateAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAuthorizerCommandOutput>;
  public createAuthorizer(
    args: CreateAuthorizerCommandInput,
    cb: (err: any, data?: CreateAuthorizerCommandOutput) => void
  ): void;
  public createAuthorizer(
    args: CreateAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAuthorizerCommandOutput) => void
  ): void;
  public createAuthorizer(
    args: CreateAuthorizerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAuthorizerCommandOutput) => void),
    cb?: (err: any, data?: CreateAuthorizerCommandOutput) => void
  ): Promise<CreateAuthorizerCommandOutput> | void {
    const command = new CreateAuthorizerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a billing group.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateBillingGroup</a> action.</p>
   */
  public createBillingGroup(
    args: CreateBillingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBillingGroupCommandOutput>;
  public createBillingGroup(
    args: CreateBillingGroupCommandInput,
    cb: (err: any, data?: CreateBillingGroupCommandOutput) => void
  ): void;
  public createBillingGroup(
    args: CreateBillingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBillingGroupCommandOutput) => void
  ): void;
  public createBillingGroup(
    args: CreateBillingGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBillingGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateBillingGroupCommandOutput) => void
  ): Promise<CreateBillingGroupCommandOutput> | void {
    const command = new CreateBillingGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an X.509 certificate using the specified certificate signing
   *          request.</p>
   *          <p>
   *             <b>Note:</b> The CSR must include a public key that is either an
   *          RSA key with a length of at least 2048 bits or an ECC key from NIST P-256, NIST P-384, or NIST P-512
   *          curves. For supported certificates, consult <a href="https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html#x509-cert-algorithms">
   *             Certificate signing algorithms supported by IoT</a>.</p>
   *          <p>
   *             <b>Note:</b> Reusing the same certificate signing request (CSR)
   *          results in a distinct certificate.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateCertificateFromCsr</a> action.</p>
   *
   *          <p>You can create multiple certificates in a batch by creating a directory, copying
   *          multiple .csr files into that directory, and then specifying that directory on the command
   *          line. The following commands show how to create a batch of certificates given a batch of
   *          CSRs.</p>
   *          <p>Assuming a set of CSRs are located inside of the directory
   *          my-csr-directory:</p>
   *
   *          <p>On Linux and OS X, the command is:</p>
   *
   *          <p>$ ls my-csr-directory/ | xargs -I {} aws iot create-certificate-from-csr
   *          --certificate-signing-request file://my-csr-directory/{}</p>
   *          <p>This command lists all of the CSRs in my-csr-directory and pipes each CSR file name
   *          to the aws iot create-certificate-from-csr Amazon Web Services CLI command to create a certificate for the
   *          corresponding CSR.</p>
   *          <p>The aws iot create-certificate-from-csr part of the command can also be run in
   *          parallel to speed up the certificate creation process:</p>
   *          <p>$ ls my-csr-directory/ | xargs -P 10 -I {} aws iot create-certificate-from-csr
   *          --certificate-signing-request file://my-csr-directory/{}</p>
   *          <p>On Windows PowerShell, the command to create certificates for all CSRs in
   *          my-csr-directory is:</p>
   *          <p>> ls -Name my-csr-directory | %{aws iot create-certificate-from-csr
   *          --certificate-signing-request file://my-csr-directory/$_}</p>
   *          <p>On a Windows command prompt, the command to create certificates for all CSRs in
   *          my-csr-directory is:</p>
   *          <p>> forfiles /p my-csr-directory /c "cmd /c aws iot create-certificate-from-csr
   *          --certificate-signing-request file://@path"</p>
   */
  public createCertificateFromCsr(
    args: CreateCertificateFromCsrCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCertificateFromCsrCommandOutput>;
  public createCertificateFromCsr(
    args: CreateCertificateFromCsrCommandInput,
    cb: (err: any, data?: CreateCertificateFromCsrCommandOutput) => void
  ): void;
  public createCertificateFromCsr(
    args: CreateCertificateFromCsrCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCertificateFromCsrCommandOutput) => void
  ): void;
  public createCertificateFromCsr(
    args: CreateCertificateFromCsrCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCertificateFromCsrCommandOutput) => void),
    cb?: (err: any, data?: CreateCertificateFromCsrCommandOutput) => void
  ): Promise<CreateCertificateFromCsrCommandOutput> | void {
    const command = new CreateCertificateFromCsrCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Use this API to define a
   *       Custom
   *       Metric
   *       published by your devices to Device Defender. </p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateCustomMetric</a> action.</p>
   */
  public createCustomMetric(
    args: CreateCustomMetricCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomMetricCommandOutput>;
  public createCustomMetric(
    args: CreateCustomMetricCommandInput,
    cb: (err: any, data?: CreateCustomMetricCommandOutput) => void
  ): void;
  public createCustomMetric(
    args: CreateCustomMetricCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomMetricCommandOutput) => void
  ): void;
  public createCustomMetric(
    args: CreateCustomMetricCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCustomMetricCommandOutput) => void),
    cb?: (err: any, data?: CreateCustomMetricCommandOutput) => void
  ): Promise<CreateCustomMetricCommandOutput> | void {
    const command = new CreateCustomMetricCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Create a dimension that you can use to limit the scope of a metric used in a security profile for IoT Device Defender.
   *       For example, using a <code>TOPIC_FILTER</code> dimension, you can narrow down the scope of the metric only to MQTT topics whose name match the pattern specified in the dimension.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateDimension</a> action.</p>
   */
  public createDimension(
    args: CreateDimensionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDimensionCommandOutput>;
  public createDimension(
    args: CreateDimensionCommandInput,
    cb: (err: any, data?: CreateDimensionCommandOutput) => void
  ): void;
  public createDimension(
    args: CreateDimensionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDimensionCommandOutput) => void
  ): void;
  public createDimension(
    args: CreateDimensionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDimensionCommandOutput) => void),
    cb?: (err: any, data?: CreateDimensionCommandOutput) => void
  ): Promise<CreateDimensionCommandOutput> | void {
    const command = new CreateDimensionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a domain configuration.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateDomainConfiguration</a> action.</p>
   */
  public createDomainConfiguration(
    args: CreateDomainConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainConfigurationCommandOutput>;
  public createDomainConfiguration(
    args: CreateDomainConfigurationCommandInput,
    cb: (err: any, data?: CreateDomainConfigurationCommandOutput) => void
  ): void;
  public createDomainConfiguration(
    args: CreateDomainConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainConfigurationCommandOutput) => void
  ): void;
  public createDomainConfiguration(
    args: CreateDomainConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDomainConfigurationCommandOutput) => void),
    cb?: (err: any, data?: CreateDomainConfigurationCommandOutput) => void
  ): Promise<CreateDomainConfigurationCommandOutput> | void {
    const command = new CreateDomainConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a dynamic thing group.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateDynamicThingGroup</a> action.</p>
   */
  public createDynamicThingGroup(
    args: CreateDynamicThingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDynamicThingGroupCommandOutput>;
  public createDynamicThingGroup(
    args: CreateDynamicThingGroupCommandInput,
    cb: (err: any, data?: CreateDynamicThingGroupCommandOutput) => void
  ): void;
  public createDynamicThingGroup(
    args: CreateDynamicThingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDynamicThingGroupCommandOutput) => void
  ): void;
  public createDynamicThingGroup(
    args: CreateDynamicThingGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDynamicThingGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateDynamicThingGroupCommandOutput) => void
  ): Promise<CreateDynamicThingGroupCommandOutput> | void {
    const command = new CreateDynamicThingGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a fleet metric.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateFleetMetric</a> action.</p>
   */
  public createFleetMetric(
    args: CreateFleetMetricCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFleetMetricCommandOutput>;
  public createFleetMetric(
    args: CreateFleetMetricCommandInput,
    cb: (err: any, data?: CreateFleetMetricCommandOutput) => void
  ): void;
  public createFleetMetric(
    args: CreateFleetMetricCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFleetMetricCommandOutput) => void
  ): void;
  public createFleetMetric(
    args: CreateFleetMetricCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFleetMetricCommandOutput) => void),
    cb?: (err: any, data?: CreateFleetMetricCommandOutput) => void
  ): Promise<CreateFleetMetricCommandOutput> | void {
    const command = new CreateFleetMetricCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a job.</p>
   *         <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateJob</a> action.</p>
   */
  public createJob(args: CreateJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateJobCommandOutput>;
  public createJob(args: CreateJobCommandInput, cb: (err: any, data?: CreateJobCommandOutput) => void): void;
  public createJob(
    args: CreateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateJobCommandOutput) => void
  ): void;
  public createJob(
    args: CreateJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateJobCommandOutput) => void),
    cb?: (err: any, data?: CreateJobCommandOutput) => void
  ): Promise<CreateJobCommandOutput> | void {
    const command = new CreateJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a job template.</p>
   *         <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateJobTemplate</a> action.</p>
   */
  public createJobTemplate(
    args: CreateJobTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateJobTemplateCommandOutput>;
  public createJobTemplate(
    args: CreateJobTemplateCommandInput,
    cb: (err: any, data?: CreateJobTemplateCommandOutput) => void
  ): void;
  public createJobTemplate(
    args: CreateJobTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateJobTemplateCommandOutput) => void
  ): void;
  public createJobTemplate(
    args: CreateJobTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateJobTemplateCommandOutput) => void),
    cb?: (err: any, data?: CreateJobTemplateCommandOutput) => void
  ): Promise<CreateJobTemplateCommandOutput> | void {
    const command = new CreateJobTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a 2048-bit RSA key pair and issues an X.509 certificate using the issued
   *          public key. You can also call <code>CreateKeysAndCertificate</code> over MQTT from a
   *          device, for more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-wo-cert.html#provision-mqtt-api">Provisioning MQTT API</a>.</p>
   *          <p>
   *             <b>Note</b> This is the only time IoT issues the private key
   *          for this certificate, so it is important to keep it in a secure location.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateKeysAndCertificate</a> action.</p>
   */
  public createKeysAndCertificate(
    args: CreateKeysAndCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateKeysAndCertificateCommandOutput>;
  public createKeysAndCertificate(
    args: CreateKeysAndCertificateCommandInput,
    cb: (err: any, data?: CreateKeysAndCertificateCommandOutput) => void
  ): void;
  public createKeysAndCertificate(
    args: CreateKeysAndCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKeysAndCertificateCommandOutput) => void
  ): void;
  public createKeysAndCertificate(
    args: CreateKeysAndCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateKeysAndCertificateCommandOutput) => void),
    cb?: (err: any, data?: CreateKeysAndCertificateCommandOutput) => void
  ): Promise<CreateKeysAndCertificateCommandOutput> | void {
    const command = new CreateKeysAndCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Defines an action that can be applied to audit findings by using StartAuditMitigationActionsTask. Only certain types of mitigation actions can be applied to specific check names.
   *       For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-mitigation-actions.html">Mitigation actions</a>. Each mitigation action can apply only one type of change.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateMitigationAction</a> action.</p>
   */
  public createMitigationAction(
    args: CreateMitigationActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMitigationActionCommandOutput>;
  public createMitigationAction(
    args: CreateMitigationActionCommandInput,
    cb: (err: any, data?: CreateMitigationActionCommandOutput) => void
  ): void;
  public createMitigationAction(
    args: CreateMitigationActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMitigationActionCommandOutput) => void
  ): void;
  public createMitigationAction(
    args: CreateMitigationActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMitigationActionCommandOutput) => void),
    cb?: (err: any, data?: CreateMitigationActionCommandOutput) => void
  ): Promise<CreateMitigationActionCommandOutput> | void {
    const command = new CreateMitigationActionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an IoT OTA update on a target group of things or groups.</p>
   *         <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateOTAUpdate</a> action.</p>
   */
  public createOTAUpdate(
    args: CreateOTAUpdateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOTAUpdateCommandOutput>;
  public createOTAUpdate(
    args: CreateOTAUpdateCommandInput,
    cb: (err: any, data?: CreateOTAUpdateCommandOutput) => void
  ): void;
  public createOTAUpdate(
    args: CreateOTAUpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOTAUpdateCommandOutput) => void
  ): void;
  public createOTAUpdate(
    args: CreateOTAUpdateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateOTAUpdateCommandOutput) => void),
    cb?: (err: any, data?: CreateOTAUpdateCommandOutput) => void
  ): Promise<CreateOTAUpdateCommandOutput> | void {
    const command = new CreateOTAUpdateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an IoT policy.</p>
   *          <p>The created policy is the default version for the policy. This operation creates a
   *          policy version with a version identifier of <b>1</b> and sets
   *             <b>1</b> as the policy's default version.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreatePolicy</a> action.</p>
   */
  public createPolicy(
    args: CreatePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePolicyCommandOutput>;
  public createPolicy(args: CreatePolicyCommandInput, cb: (err: any, data?: CreatePolicyCommandOutput) => void): void;
  public createPolicy(
    args: CreatePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePolicyCommandOutput) => void
  ): void;
  public createPolicy(
    args: CreatePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePolicyCommandOutput) => void),
    cb?: (err: any, data?: CreatePolicyCommandOutput) => void
  ): Promise<CreatePolicyCommandOutput> | void {
    const command = new CreatePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new version of the specified IoT policy. To update a policy, create a
   *          new policy version. A managed policy can have up to five versions. If the policy has five
   *          versions, you must use <a>DeletePolicyVersion</a> to delete an existing version
   *          before you create a new one.</p>
   *          <p>Optionally, you can set the new version as the policy's default version. The default
   *          version is the operative version (that is, the version that is in effect for the
   *          certificates to which the policy is attached).</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreatePolicyVersion</a> action.</p>
   */
  public createPolicyVersion(
    args: CreatePolicyVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePolicyVersionCommandOutput>;
  public createPolicyVersion(
    args: CreatePolicyVersionCommandInput,
    cb: (err: any, data?: CreatePolicyVersionCommandOutput) => void
  ): void;
  public createPolicyVersion(
    args: CreatePolicyVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePolicyVersionCommandOutput) => void
  ): void;
  public createPolicyVersion(
    args: CreatePolicyVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePolicyVersionCommandOutput) => void),
    cb?: (err: any, data?: CreatePolicyVersionCommandOutput) => void
  ): Promise<CreatePolicyVersionCommandOutput> | void {
    const command = new CreatePolicyVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a provisioning claim.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateProvisioningClaim</a> action.</p>
   */
  public createProvisioningClaim(
    args: CreateProvisioningClaimCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProvisioningClaimCommandOutput>;
  public createProvisioningClaim(
    args: CreateProvisioningClaimCommandInput,
    cb: (err: any, data?: CreateProvisioningClaimCommandOutput) => void
  ): void;
  public createProvisioningClaim(
    args: CreateProvisioningClaimCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProvisioningClaimCommandOutput) => void
  ): void;
  public createProvisioningClaim(
    args: CreateProvisioningClaimCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateProvisioningClaimCommandOutput) => void),
    cb?: (err: any, data?: CreateProvisioningClaimCommandOutput) => void
  ): Promise<CreateProvisioningClaimCommandOutput> | void {
    const command = new CreateProvisioningClaimCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a provisioning template.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateProvisioningTemplate</a> action.</p>
   */
  public createProvisioningTemplate(
    args: CreateProvisioningTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProvisioningTemplateCommandOutput>;
  public createProvisioningTemplate(
    args: CreateProvisioningTemplateCommandInput,
    cb: (err: any, data?: CreateProvisioningTemplateCommandOutput) => void
  ): void;
  public createProvisioningTemplate(
    args: CreateProvisioningTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProvisioningTemplateCommandOutput) => void
  ): void;
  public createProvisioningTemplate(
    args: CreateProvisioningTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateProvisioningTemplateCommandOutput) => void),
    cb?: (err: any, data?: CreateProvisioningTemplateCommandOutput) => void
  ): Promise<CreateProvisioningTemplateCommandOutput> | void {
    const command = new CreateProvisioningTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new version of a provisioning template.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateProvisioningTemplateVersion</a> action.</p>
   */
  public createProvisioningTemplateVersion(
    args: CreateProvisioningTemplateVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProvisioningTemplateVersionCommandOutput>;
  public createProvisioningTemplateVersion(
    args: CreateProvisioningTemplateVersionCommandInput,
    cb: (err: any, data?: CreateProvisioningTemplateVersionCommandOutput) => void
  ): void;
  public createProvisioningTemplateVersion(
    args: CreateProvisioningTemplateVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProvisioningTemplateVersionCommandOutput) => void
  ): void;
  public createProvisioningTemplateVersion(
    args: CreateProvisioningTemplateVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateProvisioningTemplateVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateProvisioningTemplateVersionCommandOutput) => void
  ): Promise<CreateProvisioningTemplateVersionCommandOutput> | void {
    const command = new CreateProvisioningTemplateVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a role alias.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateRoleAlias</a> action.</p>
   */
  public createRoleAlias(
    args: CreateRoleAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRoleAliasCommandOutput>;
  public createRoleAlias(
    args: CreateRoleAliasCommandInput,
    cb: (err: any, data?: CreateRoleAliasCommandOutput) => void
  ): void;
  public createRoleAlias(
    args: CreateRoleAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRoleAliasCommandOutput) => void
  ): void;
  public createRoleAlias(
    args: CreateRoleAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRoleAliasCommandOutput) => void),
    cb?: (err: any, data?: CreateRoleAliasCommandOutput) => void
  ): Promise<CreateRoleAliasCommandOutput> | void {
    const command = new CreateRoleAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a scheduled audit that is run at a specified
   *           time interval.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateScheduledAudit</a> action.</p>
   */
  public createScheduledAudit(
    args: CreateScheduledAuditCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateScheduledAuditCommandOutput>;
  public createScheduledAudit(
    args: CreateScheduledAuditCommandInput,
    cb: (err: any, data?: CreateScheduledAuditCommandOutput) => void
  ): void;
  public createScheduledAudit(
    args: CreateScheduledAuditCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateScheduledAuditCommandOutput) => void
  ): void;
  public createScheduledAudit(
    args: CreateScheduledAuditCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateScheduledAuditCommandOutput) => void),
    cb?: (err: any, data?: CreateScheduledAuditCommandOutput) => void
  ): Promise<CreateScheduledAuditCommandOutput> | void {
    const command = new CreateScheduledAuditCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a Device Defender security profile.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateSecurityProfile</a> action.</p>
   */
  public createSecurityProfile(
    args: CreateSecurityProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSecurityProfileCommandOutput>;
  public createSecurityProfile(
    args: CreateSecurityProfileCommandInput,
    cb: (err: any, data?: CreateSecurityProfileCommandOutput) => void
  ): void;
  public createSecurityProfile(
    args: CreateSecurityProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSecurityProfileCommandOutput) => void
  ): void;
  public createSecurityProfile(
    args: CreateSecurityProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSecurityProfileCommandOutput) => void),
    cb?: (err: any, data?: CreateSecurityProfileCommandOutput) => void
  ): Promise<CreateSecurityProfileCommandOutput> | void {
    const command = new CreateSecurityProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a stream for delivering one or more large files in chunks over MQTT. A stream transports data
   *             bytes in chunks or blocks packaged as MQTT messages from a source like S3. You can have one or more files
   *             associated with a stream.</p>
   *     	    <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateStream</a> action.</p>
   */
  public createStream(
    args: CreateStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStreamCommandOutput>;
  public createStream(args: CreateStreamCommandInput, cb: (err: any, data?: CreateStreamCommandOutput) => void): void;
  public createStream(
    args: CreateStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStreamCommandOutput) => void
  ): void;
  public createStream(
    args: CreateStreamCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateStreamCommandOutput) => void),
    cb?: (err: any, data?: CreateStreamCommandOutput) => void
  ): Promise<CreateStreamCommandOutput> | void {
    const command = new CreateStreamCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a thing record in the registry. If this call is made multiple times using
   * 			the same thing name and configuration, the call will succeed. If this call is made with
   * 			the same thing name but different configuration a
   * 				<code>ResourceAlreadyExistsException</code> is thrown.</p>
   * 		       <note>
   * 			         <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for
   * 				information about authorizing control plane actions.</p>
   * 		       </note>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateThing</a> action.</p>
   */
  public createThing(args: CreateThingCommandInput, options?: __HttpHandlerOptions): Promise<CreateThingCommandOutput>;
  public createThing(args: CreateThingCommandInput, cb: (err: any, data?: CreateThingCommandOutput) => void): void;
  public createThing(
    args: CreateThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateThingCommandOutput) => void
  ): void;
  public createThing(
    args: CreateThingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateThingCommandOutput) => void),
    cb?: (err: any, data?: CreateThingCommandOutput) => void
  ): Promise<CreateThingCommandOutput> | void {
    const command = new CreateThingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Create a thing group.</p>
   * 		       <note>
   * 			         <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for
   * 				information about authorizing control plane actions.</p>
   * 		       </note>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateThingGroup</a> action.</p>
   */
  public createThingGroup(
    args: CreateThingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateThingGroupCommandOutput>;
  public createThingGroup(
    args: CreateThingGroupCommandInput,
    cb: (err: any, data?: CreateThingGroupCommandOutput) => void
  ): void;
  public createThingGroup(
    args: CreateThingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateThingGroupCommandOutput) => void
  ): void;
  public createThingGroup(
    args: CreateThingGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateThingGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateThingGroupCommandOutput) => void
  ): Promise<CreateThingGroupCommandOutput> | void {
    const command = new CreateThingGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new thing type.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateThingType</a> action.</p>
   */
  public createThingType(
    args: CreateThingTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateThingTypeCommandOutput>;
  public createThingType(
    args: CreateThingTypeCommandInput,
    cb: (err: any, data?: CreateThingTypeCommandOutput) => void
  ): void;
  public createThingType(
    args: CreateThingTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateThingTypeCommandOutput) => void
  ): void;
  public createThingType(
    args: CreateThingTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateThingTypeCommandOutput) => void),
    cb?: (err: any, data?: CreateThingTypeCommandOutput) => void
  ): Promise<CreateThingTypeCommandOutput> | void {
    const command = new CreateThingTypeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a rule. Creating rules is an administrator-level action. Any user who has
   *          permission to create rules will be able to access data processed by the rule.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateTopicRule</a> action.</p>
   */
  public createTopicRule(
    args: CreateTopicRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTopicRuleCommandOutput>;
  public createTopicRule(
    args: CreateTopicRuleCommandInput,
    cb: (err: any, data?: CreateTopicRuleCommandOutput) => void
  ): void;
  public createTopicRule(
    args: CreateTopicRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTopicRuleCommandOutput) => void
  ): void;
  public createTopicRule(
    args: CreateTopicRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTopicRuleCommandOutput) => void),
    cb?: (err: any, data?: CreateTopicRuleCommandOutput) => void
  ): Promise<CreateTopicRuleCommandOutput> | void {
    const command = new CreateTopicRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a topic rule destination. The destination must be confirmed prior to use.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateTopicRuleDestination</a> action.</p>
   */
  public createTopicRuleDestination(
    args: CreateTopicRuleDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTopicRuleDestinationCommandOutput>;
  public createTopicRuleDestination(
    args: CreateTopicRuleDestinationCommandInput,
    cb: (err: any, data?: CreateTopicRuleDestinationCommandOutput) => void
  ): void;
  public createTopicRuleDestination(
    args: CreateTopicRuleDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTopicRuleDestinationCommandOutput) => void
  ): void;
  public createTopicRuleDestination(
    args: CreateTopicRuleDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTopicRuleDestinationCommandOutput) => void),
    cb?: (err: any, data?: CreateTopicRuleDestinationCommandOutput) => void
  ): Promise<CreateTopicRuleDestinationCommandOutput> | void {
    const command = new CreateTopicRuleDestinationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Restores the default settings for Device Defender audits for this account. Any
   *           configuration data you entered is deleted and all audit checks are reset to
   *           disabled.  </p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteAccountAuditConfiguration</a> action.</p>
   */
  public deleteAccountAuditConfiguration(
    args: DeleteAccountAuditConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccountAuditConfigurationCommandOutput>;
  public deleteAccountAuditConfiguration(
    args: DeleteAccountAuditConfigurationCommandInput,
    cb: (err: any, data?: DeleteAccountAuditConfigurationCommandOutput) => void
  ): void;
  public deleteAccountAuditConfiguration(
    args: DeleteAccountAuditConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccountAuditConfigurationCommandOutput) => void
  ): void;
  public deleteAccountAuditConfiguration(
    args: DeleteAccountAuditConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAccountAuditConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteAccountAuditConfigurationCommandOutput) => void
  ): Promise<DeleteAccountAuditConfigurationCommandOutput> | void {
    const command = new DeleteAccountAuditConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *       Deletes a Device Defender audit suppression.
   *     </p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteAuditSuppression</a> action.</p>
   */
  public deleteAuditSuppression(
    args: DeleteAuditSuppressionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAuditSuppressionCommandOutput>;
  public deleteAuditSuppression(
    args: DeleteAuditSuppressionCommandInput,
    cb: (err: any, data?: DeleteAuditSuppressionCommandOutput) => void
  ): void;
  public deleteAuditSuppression(
    args: DeleteAuditSuppressionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAuditSuppressionCommandOutput) => void
  ): void;
  public deleteAuditSuppression(
    args: DeleteAuditSuppressionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAuditSuppressionCommandOutput) => void),
    cb?: (err: any, data?: DeleteAuditSuppressionCommandOutput) => void
  ): Promise<DeleteAuditSuppressionCommandOutput> | void {
    const command = new DeleteAuditSuppressionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an authorizer.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteAuthorizer</a> action.</p>
   */
  public deleteAuthorizer(
    args: DeleteAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAuthorizerCommandOutput>;
  public deleteAuthorizer(
    args: DeleteAuthorizerCommandInput,
    cb: (err: any, data?: DeleteAuthorizerCommandOutput) => void
  ): void;
  public deleteAuthorizer(
    args: DeleteAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAuthorizerCommandOutput) => void
  ): void;
  public deleteAuthorizer(
    args: DeleteAuthorizerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAuthorizerCommandOutput) => void),
    cb?: (err: any, data?: DeleteAuthorizerCommandOutput) => void
  ): Promise<DeleteAuthorizerCommandOutput> | void {
    const command = new DeleteAuthorizerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the billing group.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteBillingGroup</a> action.</p>
   */
  public deleteBillingGroup(
    args: DeleteBillingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBillingGroupCommandOutput>;
  public deleteBillingGroup(
    args: DeleteBillingGroupCommandInput,
    cb: (err: any, data?: DeleteBillingGroupCommandOutput) => void
  ): void;
  public deleteBillingGroup(
    args: DeleteBillingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBillingGroupCommandOutput) => void
  ): void;
  public deleteBillingGroup(
    args: DeleteBillingGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBillingGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteBillingGroupCommandOutput) => void
  ): Promise<DeleteBillingGroupCommandOutput> | void {
    const command = new DeleteBillingGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a registered CA certificate.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteCACertificate</a> action.</p>
   */
  public deleteCACertificate(
    args: DeleteCACertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCACertificateCommandOutput>;
  public deleteCACertificate(
    args: DeleteCACertificateCommandInput,
    cb: (err: any, data?: DeleteCACertificateCommandOutput) => void
  ): void;
  public deleteCACertificate(
    args: DeleteCACertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCACertificateCommandOutput) => void
  ): void;
  public deleteCACertificate(
    args: DeleteCACertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCACertificateCommandOutput) => void),
    cb?: (err: any, data?: DeleteCACertificateCommandOutput) => void
  ): Promise<DeleteCACertificateCommandOutput> | void {
    const command = new DeleteCACertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified certificate.</p>
   *          <p>A certificate cannot be deleted if it has a policy or IoT thing attached to it or if
   *          its status is set to ACTIVE. To delete a certificate, first use the <a>DetachPolicy</a> action to detach all policies. Next, use the <a>UpdateCertificate</a> action to set the certificate to the INACTIVE
   *          status.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteCertificate</a> action.</p>
   */
  public deleteCertificate(
    args: DeleteCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCertificateCommandOutput>;
  public deleteCertificate(
    args: DeleteCertificateCommandInput,
    cb: (err: any, data?: DeleteCertificateCommandOutput) => void
  ): void;
  public deleteCertificate(
    args: DeleteCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCertificateCommandOutput) => void
  ): void;
  public deleteCertificate(
    args: DeleteCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCertificateCommandOutput) => void),
    cb?: (err: any, data?: DeleteCertificateCommandOutput) => void
  ): Promise<DeleteCertificateCommandOutput> | void {
    const command = new DeleteCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *       Deletes a Device Defender detect custom metric.
   *     </p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteCustomMetric</a> action.</p>
   *          <note>
   *             <p>Before you can delete a custom metric, you must first remove the custom metric from all
   *       security profiles it's a part of.
   *       The
   *       security
   *       profile associated with the custom metric can be found using the <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_ListSecurityProfiles.html">ListSecurityProfiles</a>
   *       API with <code>metricName</code> set to your custom metric name.</p>
   *          </note>
   */
  public deleteCustomMetric(
    args: DeleteCustomMetricCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomMetricCommandOutput>;
  public deleteCustomMetric(
    args: DeleteCustomMetricCommandInput,
    cb: (err: any, data?: DeleteCustomMetricCommandOutput) => void
  ): void;
  public deleteCustomMetric(
    args: DeleteCustomMetricCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomMetricCommandOutput) => void
  ): void;
  public deleteCustomMetric(
    args: DeleteCustomMetricCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCustomMetricCommandOutput) => void),
    cb?: (err: any, data?: DeleteCustomMetricCommandOutput) => void
  ): Promise<DeleteCustomMetricCommandOutput> | void {
    const command = new DeleteCustomMetricCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the specified dimension from your Amazon Web Services accounts.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteDimension</a> action.</p>
   */
  public deleteDimension(
    args: DeleteDimensionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDimensionCommandOutput>;
  public deleteDimension(
    args: DeleteDimensionCommandInput,
    cb: (err: any, data?: DeleteDimensionCommandOutput) => void
  ): void;
  public deleteDimension(
    args: DeleteDimensionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDimensionCommandOutput) => void
  ): void;
  public deleteDimension(
    args: DeleteDimensionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDimensionCommandOutput) => void),
    cb?: (err: any, data?: DeleteDimensionCommandOutput) => void
  ): Promise<DeleteDimensionCommandOutput> | void {
    const command = new DeleteDimensionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified domain configuration.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteDomainConfiguration</a> action.</p>
   */
  public deleteDomainConfiguration(
    args: DeleteDomainConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainConfigurationCommandOutput>;
  public deleteDomainConfiguration(
    args: DeleteDomainConfigurationCommandInput,
    cb: (err: any, data?: DeleteDomainConfigurationCommandOutput) => void
  ): void;
  public deleteDomainConfiguration(
    args: DeleteDomainConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainConfigurationCommandOutput) => void
  ): void;
  public deleteDomainConfiguration(
    args: DeleteDomainConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDomainConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteDomainConfigurationCommandOutput) => void
  ): Promise<DeleteDomainConfigurationCommandOutput> | void {
    const command = new DeleteDomainConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a dynamic thing group.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteDynamicThingGroup</a> action.</p>
   */
  public deleteDynamicThingGroup(
    args: DeleteDynamicThingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDynamicThingGroupCommandOutput>;
  public deleteDynamicThingGroup(
    args: DeleteDynamicThingGroupCommandInput,
    cb: (err: any, data?: DeleteDynamicThingGroupCommandOutput) => void
  ): void;
  public deleteDynamicThingGroup(
    args: DeleteDynamicThingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDynamicThingGroupCommandOutput) => void
  ): void;
  public deleteDynamicThingGroup(
    args: DeleteDynamicThingGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDynamicThingGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteDynamicThingGroupCommandOutput) => void
  ): Promise<DeleteDynamicThingGroupCommandOutput> | void {
    const command = new DeleteDynamicThingGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified fleet metric.
   *         Returns successfully with no error if the deletion is successful or you specify a fleet metric that doesn't exist.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteFleetMetric</a> action.</p>
   */
  public deleteFleetMetric(
    args: DeleteFleetMetricCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFleetMetricCommandOutput>;
  public deleteFleetMetric(
    args: DeleteFleetMetricCommandInput,
    cb: (err: any, data?: DeleteFleetMetricCommandOutput) => void
  ): void;
  public deleteFleetMetric(
    args: DeleteFleetMetricCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFleetMetricCommandOutput) => void
  ): void;
  public deleteFleetMetric(
    args: DeleteFleetMetricCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFleetMetricCommandOutput) => void),
    cb?: (err: any, data?: DeleteFleetMetricCommandOutput) => void
  ): Promise<DeleteFleetMetricCommandOutput> | void {
    const command = new DeleteFleetMetricCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a job and its related job executions.</p>
   *          <p>Deleting a job may take time, depending on the number of job
   *         executions created for the job and various other factors. While the job
   *         is being deleted, the status of the job will be shown as
   *         "DELETION_IN_PROGRESS". Attempting to delete or cancel a job whose status
   *         is already "DELETION_IN_PROGRESS" will result in an error.</p>
   *          <p>Only 10 jobs may have status "DELETION_IN_PROGRESS" at the same time, or
   *         a LimitExceededException will occur.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteJob</a> action.</p>
   */
  public deleteJob(args: DeleteJobCommandInput, options?: __HttpHandlerOptions): Promise<DeleteJobCommandOutput>;
  public deleteJob(args: DeleteJobCommandInput, cb: (err: any, data?: DeleteJobCommandOutput) => void): void;
  public deleteJob(
    args: DeleteJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteJobCommandOutput) => void
  ): void;
  public deleteJob(
    args: DeleteJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteJobCommandOutput) => void),
    cb?: (err: any, data?: DeleteJobCommandOutput) => void
  ): Promise<DeleteJobCommandOutput> | void {
    const command = new DeleteJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a job execution.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteJobExecution</a> action.</p>
   */
  public deleteJobExecution(
    args: DeleteJobExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteJobExecutionCommandOutput>;
  public deleteJobExecution(
    args: DeleteJobExecutionCommandInput,
    cb: (err: any, data?: DeleteJobExecutionCommandOutput) => void
  ): void;
  public deleteJobExecution(
    args: DeleteJobExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteJobExecutionCommandOutput) => void
  ): void;
  public deleteJobExecution(
    args: DeleteJobExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteJobExecutionCommandOutput) => void),
    cb?: (err: any, data?: DeleteJobExecutionCommandOutput) => void
  ): Promise<DeleteJobExecutionCommandOutput> | void {
    const command = new DeleteJobExecutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified job template.</p>
   */
  public deleteJobTemplate(
    args: DeleteJobTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteJobTemplateCommandOutput>;
  public deleteJobTemplate(
    args: DeleteJobTemplateCommandInput,
    cb: (err: any, data?: DeleteJobTemplateCommandOutput) => void
  ): void;
  public deleteJobTemplate(
    args: DeleteJobTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteJobTemplateCommandOutput) => void
  ): void;
  public deleteJobTemplate(
    args: DeleteJobTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteJobTemplateCommandOutput) => void),
    cb?: (err: any, data?: DeleteJobTemplateCommandOutput) => void
  ): Promise<DeleteJobTemplateCommandOutput> | void {
    const command = new DeleteJobTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a defined mitigation action from your Amazon Web Services accounts.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteMitigationAction</a> action.</p>
   */
  public deleteMitigationAction(
    args: DeleteMitigationActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMitigationActionCommandOutput>;
  public deleteMitigationAction(
    args: DeleteMitigationActionCommandInput,
    cb: (err: any, data?: DeleteMitigationActionCommandOutput) => void
  ): void;
  public deleteMitigationAction(
    args: DeleteMitigationActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMitigationActionCommandOutput) => void
  ): void;
  public deleteMitigationAction(
    args: DeleteMitigationActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMitigationActionCommandOutput) => void),
    cb?: (err: any, data?: DeleteMitigationActionCommandOutput) => void
  ): Promise<DeleteMitigationActionCommandOutput> | void {
    const command = new DeleteMitigationActionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Delete an OTA update.</p>
   *         <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteOTAUpdate</a> action.</p>
   */
  public deleteOTAUpdate(
    args: DeleteOTAUpdateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOTAUpdateCommandOutput>;
  public deleteOTAUpdate(
    args: DeleteOTAUpdateCommandInput,
    cb: (err: any, data?: DeleteOTAUpdateCommandOutput) => void
  ): void;
  public deleteOTAUpdate(
    args: DeleteOTAUpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOTAUpdateCommandOutput) => void
  ): void;
  public deleteOTAUpdate(
    args: DeleteOTAUpdateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteOTAUpdateCommandOutput) => void),
    cb?: (err: any, data?: DeleteOTAUpdateCommandOutput) => void
  ): Promise<DeleteOTAUpdateCommandOutput> | void {
    const command = new DeleteOTAUpdateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified policy.</p>
   *          <p>A policy cannot be deleted if it has non-default versions or it is attached to any
   *          certificate.</p>
   *          <p>To delete a policy, use the <a>DeletePolicyVersion</a> action to delete all non-default
   *          versions of the policy; use the <a>DetachPolicy</a> action to detach the policy from any
   *          certificate; and then use the DeletePolicy action to delete the policy.</p>
   *          <p>When a policy is deleted using DeletePolicy, its default version is deleted with
   *          it.</p>
   *          <note>
   *             <p>Because of the distributed nature of Amazon Web Services, it can take up to five minutes after
   *          a policy is detached before it's ready to be deleted.</p>
   *          </note>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeletePolicy</a> action.</p>
   */
  public deletePolicy(
    args: DeletePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePolicyCommandOutput>;
  public deletePolicy(args: DeletePolicyCommandInput, cb: (err: any, data?: DeletePolicyCommandOutput) => void): void;
  public deletePolicy(
    args: DeletePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePolicyCommandOutput) => void
  ): void;
  public deletePolicy(
    args: DeletePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePolicyCommandOutput) => void),
    cb?: (err: any, data?: DeletePolicyCommandOutput) => void
  ): Promise<DeletePolicyCommandOutput> | void {
    const command = new DeletePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified version of the specified policy. You cannot delete the default
   *          version of a policy using this action. To delete the default version of a policy, use <a>DeletePolicy</a>. To find out which version of a policy is marked as the default
   *          version, use ListPolicyVersions.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeletePolicyVersion</a> action.</p>
   */
  public deletePolicyVersion(
    args: DeletePolicyVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePolicyVersionCommandOutput>;
  public deletePolicyVersion(
    args: DeletePolicyVersionCommandInput,
    cb: (err: any, data?: DeletePolicyVersionCommandOutput) => void
  ): void;
  public deletePolicyVersion(
    args: DeletePolicyVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePolicyVersionCommandOutput) => void
  ): void;
  public deletePolicyVersion(
    args: DeletePolicyVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePolicyVersionCommandOutput) => void),
    cb?: (err: any, data?: DeletePolicyVersionCommandOutput) => void
  ): Promise<DeletePolicyVersionCommandOutput> | void {
    const command = new DeletePolicyVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a provisioning template.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteProvisioningTemplate</a> action.</p>
   */
  public deleteProvisioningTemplate(
    args: DeleteProvisioningTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProvisioningTemplateCommandOutput>;
  public deleteProvisioningTemplate(
    args: DeleteProvisioningTemplateCommandInput,
    cb: (err: any, data?: DeleteProvisioningTemplateCommandOutput) => void
  ): void;
  public deleteProvisioningTemplate(
    args: DeleteProvisioningTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProvisioningTemplateCommandOutput) => void
  ): void;
  public deleteProvisioningTemplate(
    args: DeleteProvisioningTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteProvisioningTemplateCommandOutput) => void),
    cb?: (err: any, data?: DeleteProvisioningTemplateCommandOutput) => void
  ): Promise<DeleteProvisioningTemplateCommandOutput> | void {
    const command = new DeleteProvisioningTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a provisioning template version.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteProvisioningTemplateVersion</a> action.</p>
   */
  public deleteProvisioningTemplateVersion(
    args: DeleteProvisioningTemplateVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProvisioningTemplateVersionCommandOutput>;
  public deleteProvisioningTemplateVersion(
    args: DeleteProvisioningTemplateVersionCommandInput,
    cb: (err: any, data?: DeleteProvisioningTemplateVersionCommandOutput) => void
  ): void;
  public deleteProvisioningTemplateVersion(
    args: DeleteProvisioningTemplateVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProvisioningTemplateVersionCommandOutput) => void
  ): void;
  public deleteProvisioningTemplateVersion(
    args: DeleteProvisioningTemplateVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteProvisioningTemplateVersionCommandOutput) => void),
    cb?: (err: any, data?: DeleteProvisioningTemplateVersionCommandOutput) => void
  ): Promise<DeleteProvisioningTemplateVersionCommandOutput> | void {
    const command = new DeleteProvisioningTemplateVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a CA certificate registration code.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteRegistrationCode</a> action.</p>
   */
  public deleteRegistrationCode(
    args: DeleteRegistrationCodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRegistrationCodeCommandOutput>;
  public deleteRegistrationCode(
    args: DeleteRegistrationCodeCommandInput,
    cb: (err: any, data?: DeleteRegistrationCodeCommandOutput) => void
  ): void;
  public deleteRegistrationCode(
    args: DeleteRegistrationCodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRegistrationCodeCommandOutput) => void
  ): void;
  public deleteRegistrationCode(
    args: DeleteRegistrationCodeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRegistrationCodeCommandOutput) => void),
    cb?: (err: any, data?: DeleteRegistrationCodeCommandOutput) => void
  ): Promise<DeleteRegistrationCodeCommandOutput> | void {
    const command = new DeleteRegistrationCodeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a role alias</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteRoleAlias</a> action.</p>
   */
  public deleteRoleAlias(
    args: DeleteRoleAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRoleAliasCommandOutput>;
  public deleteRoleAlias(
    args: DeleteRoleAliasCommandInput,
    cb: (err: any, data?: DeleteRoleAliasCommandOutput) => void
  ): void;
  public deleteRoleAlias(
    args: DeleteRoleAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRoleAliasCommandOutput) => void
  ): void;
  public deleteRoleAlias(
    args: DeleteRoleAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRoleAliasCommandOutput) => void),
    cb?: (err: any, data?: DeleteRoleAliasCommandOutput) => void
  ): Promise<DeleteRoleAliasCommandOutput> | void {
    const command = new DeleteRoleAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a scheduled audit.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteScheduledAudit</a> action.</p>
   */
  public deleteScheduledAudit(
    args: DeleteScheduledAuditCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteScheduledAuditCommandOutput>;
  public deleteScheduledAudit(
    args: DeleteScheduledAuditCommandInput,
    cb: (err: any, data?: DeleteScheduledAuditCommandOutput) => void
  ): void;
  public deleteScheduledAudit(
    args: DeleteScheduledAuditCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScheduledAuditCommandOutput) => void
  ): void;
  public deleteScheduledAudit(
    args: DeleteScheduledAuditCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteScheduledAuditCommandOutput) => void),
    cb?: (err: any, data?: DeleteScheduledAuditCommandOutput) => void
  ): Promise<DeleteScheduledAuditCommandOutput> | void {
    const command = new DeleteScheduledAuditCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a Device Defender security profile.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteSecurityProfile</a> action.</p>
   */
  public deleteSecurityProfile(
    args: DeleteSecurityProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSecurityProfileCommandOutput>;
  public deleteSecurityProfile(
    args: DeleteSecurityProfileCommandInput,
    cb: (err: any, data?: DeleteSecurityProfileCommandOutput) => void
  ): void;
  public deleteSecurityProfile(
    args: DeleteSecurityProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSecurityProfileCommandOutput) => void
  ): void;
  public deleteSecurityProfile(
    args: DeleteSecurityProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSecurityProfileCommandOutput) => void),
    cb?: (err: any, data?: DeleteSecurityProfileCommandOutput) => void
  ): Promise<DeleteSecurityProfileCommandOutput> | void {
    const command = new DeleteSecurityProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a stream.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteStream</a> action.</p>
   */
  public deleteStream(
    args: DeleteStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStreamCommandOutput>;
  public deleteStream(args: DeleteStreamCommandInput, cb: (err: any, data?: DeleteStreamCommandOutput) => void): void;
  public deleteStream(
    args: DeleteStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStreamCommandOutput) => void
  ): void;
  public deleteStream(
    args: DeleteStreamCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteStreamCommandOutput) => void),
    cb?: (err: any, data?: DeleteStreamCommandOutput) => void
  ): Promise<DeleteStreamCommandOutput> | void {
    const command = new DeleteStreamCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified thing. Returns successfully with no error if the deletion is
   * 			successful or you specify a thing that doesn't exist.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThing</a> action.</p>
   */
  public deleteThing(args: DeleteThingCommandInput, options?: __HttpHandlerOptions): Promise<DeleteThingCommandOutput>;
  public deleteThing(args: DeleteThingCommandInput, cb: (err: any, data?: DeleteThingCommandOutput) => void): void;
  public deleteThing(
    args: DeleteThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteThingCommandOutput) => void
  ): void;
  public deleteThing(
    args: DeleteThingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteThingCommandOutput) => void),
    cb?: (err: any, data?: DeleteThingCommandOutput) => void
  ): Promise<DeleteThingCommandOutput> | void {
    const command = new DeleteThingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a thing group.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThingGroup</a> action.</p>
   */
  public deleteThingGroup(
    args: DeleteThingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteThingGroupCommandOutput>;
  public deleteThingGroup(
    args: DeleteThingGroupCommandInput,
    cb: (err: any, data?: DeleteThingGroupCommandOutput) => void
  ): void;
  public deleteThingGroup(
    args: DeleteThingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteThingGroupCommandOutput) => void
  ): void;
  public deleteThingGroup(
    args: DeleteThingGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteThingGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteThingGroupCommandOutput) => void
  ): Promise<DeleteThingGroupCommandOutput> | void {
    const command = new DeleteThingGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified thing type. You cannot delete a thing type if it has things
   * 			associated with it. To delete a thing type, first mark it as deprecated by calling <a>DeprecateThingType</a>, then remove any associated things by calling <a>UpdateThing</a> to change the thing type on any associated thing, and
   * 			finally use <a>DeleteThingType</a> to delete the thing type.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThingType</a> action.</p>
   */
  public deleteThingType(
    args: DeleteThingTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteThingTypeCommandOutput>;
  public deleteThingType(
    args: DeleteThingTypeCommandInput,
    cb: (err: any, data?: DeleteThingTypeCommandOutput) => void
  ): void;
  public deleteThingType(
    args: DeleteThingTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteThingTypeCommandOutput) => void
  ): void;
  public deleteThingType(
    args: DeleteThingTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteThingTypeCommandOutput) => void),
    cb?: (err: any, data?: DeleteThingTypeCommandOutput) => void
  ): Promise<DeleteThingTypeCommandOutput> | void {
    const command = new DeleteThingTypeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the rule.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteTopicRule</a> action.</p>
   */
  public deleteTopicRule(
    args: DeleteTopicRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTopicRuleCommandOutput>;
  public deleteTopicRule(
    args: DeleteTopicRuleCommandInput,
    cb: (err: any, data?: DeleteTopicRuleCommandOutput) => void
  ): void;
  public deleteTopicRule(
    args: DeleteTopicRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTopicRuleCommandOutput) => void
  ): void;
  public deleteTopicRule(
    args: DeleteTopicRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTopicRuleCommandOutput) => void),
    cb?: (err: any, data?: DeleteTopicRuleCommandOutput) => void
  ): Promise<DeleteTopicRuleCommandOutput> | void {
    const command = new DeleteTopicRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a topic rule destination.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteTopicRuleDestination</a> action.</p>
   */
  public deleteTopicRuleDestination(
    args: DeleteTopicRuleDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTopicRuleDestinationCommandOutput>;
  public deleteTopicRuleDestination(
    args: DeleteTopicRuleDestinationCommandInput,
    cb: (err: any, data?: DeleteTopicRuleDestinationCommandOutput) => void
  ): void;
  public deleteTopicRuleDestination(
    args: DeleteTopicRuleDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTopicRuleDestinationCommandOutput) => void
  ): void;
  public deleteTopicRuleDestination(
    args: DeleteTopicRuleDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTopicRuleDestinationCommandOutput) => void),
    cb?: (err: any, data?: DeleteTopicRuleDestinationCommandOutput) => void
  ): Promise<DeleteTopicRuleDestinationCommandOutput> | void {
    const command = new DeleteTopicRuleDestinationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a logging level.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteV2LoggingLevel</a> action.</p>
   */
  public deleteV2LoggingLevel(
    args: DeleteV2LoggingLevelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteV2LoggingLevelCommandOutput>;
  public deleteV2LoggingLevel(
    args: DeleteV2LoggingLevelCommandInput,
    cb: (err: any, data?: DeleteV2LoggingLevelCommandOutput) => void
  ): void;
  public deleteV2LoggingLevel(
    args: DeleteV2LoggingLevelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteV2LoggingLevelCommandOutput) => void
  ): void;
  public deleteV2LoggingLevel(
    args: DeleteV2LoggingLevelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteV2LoggingLevelCommandOutput) => void),
    cb?: (err: any, data?: DeleteV2LoggingLevelCommandOutput) => void
  ): Promise<DeleteV2LoggingLevelCommandOutput> | void {
    const command = new DeleteV2LoggingLevelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deprecates a thing type. You can not associate new things with deprecated thing
   * 			type.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeprecateThingType</a> action.</p>
   */
  public deprecateThingType(
    args: DeprecateThingTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeprecateThingTypeCommandOutput>;
  public deprecateThingType(
    args: DeprecateThingTypeCommandInput,
    cb: (err: any, data?: DeprecateThingTypeCommandOutput) => void
  ): void;
  public deprecateThingType(
    args: DeprecateThingTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeprecateThingTypeCommandOutput) => void
  ): void;
  public deprecateThingType(
    args: DeprecateThingTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeprecateThingTypeCommandOutput) => void),
    cb?: (err: any, data?: DeprecateThingTypeCommandOutput) => void
  ): Promise<DeprecateThingTypeCommandOutput> | void {
    const command = new DeprecateThingTypeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the Device Defender audit settings for this account.
   *           Settings include how audit notifications are sent and which audit checks are
   *           enabled or disabled.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAccountAuditConfiguration</a> action.</p>
   */
  public describeAccountAuditConfiguration(
    args: DescribeAccountAuditConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountAuditConfigurationCommandOutput>;
  public describeAccountAuditConfiguration(
    args: DescribeAccountAuditConfigurationCommandInput,
    cb: (err: any, data?: DescribeAccountAuditConfigurationCommandOutput) => void
  ): void;
  public describeAccountAuditConfiguration(
    args: DescribeAccountAuditConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountAuditConfigurationCommandOutput) => void
  ): void;
  public describeAccountAuditConfiguration(
    args: DescribeAccountAuditConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAccountAuditConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeAccountAuditConfigurationCommandOutput) => void
  ): Promise<DescribeAccountAuditConfigurationCommandOutput> | void {
    const command = new DescribeAccountAuditConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a single audit finding. Properties include the reason for
   *       noncompliance, the severity of the issue,
   *       and the start time
   *       when the audit that returned the
   *       finding.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAuditFinding</a> action.</p>
   */
  public describeAuditFinding(
    args: DescribeAuditFindingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAuditFindingCommandOutput>;
  public describeAuditFinding(
    args: DescribeAuditFindingCommandInput,
    cb: (err: any, data?: DescribeAuditFindingCommandOutput) => void
  ): void;
  public describeAuditFinding(
    args: DescribeAuditFindingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAuditFindingCommandOutput) => void
  ): void;
  public describeAuditFinding(
    args: DescribeAuditFindingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAuditFindingCommandOutput) => void),
    cb?: (err: any, data?: DescribeAuditFindingCommandOutput) => void
  ): Promise<DescribeAuditFindingCommandOutput> | void {
    const command = new DescribeAuditFindingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about an audit mitigation task that is used to apply mitigation actions to a set of audit findings. Properties include the actions being applied, the audit checks to which they're being applied, the task status, and aggregated task statistics.</p>
   */
  public describeAuditMitigationActionsTask(
    args: DescribeAuditMitigationActionsTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAuditMitigationActionsTaskCommandOutput>;
  public describeAuditMitigationActionsTask(
    args: DescribeAuditMitigationActionsTaskCommandInput,
    cb: (err: any, data?: DescribeAuditMitigationActionsTaskCommandOutput) => void
  ): void;
  public describeAuditMitigationActionsTask(
    args: DescribeAuditMitigationActionsTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAuditMitigationActionsTaskCommandOutput) => void
  ): void;
  public describeAuditMitigationActionsTask(
    args: DescribeAuditMitigationActionsTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAuditMitigationActionsTaskCommandOutput) => void),
    cb?: (err: any, data?: DescribeAuditMitigationActionsTaskCommandOutput) => void
  ): Promise<DescribeAuditMitigationActionsTaskCommandOutput> | void {
    const command = new DescribeAuditMitigationActionsTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *       Gets information about a Device Defender audit suppression.
   *     </p>
   */
  public describeAuditSuppression(
    args: DescribeAuditSuppressionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAuditSuppressionCommandOutput>;
  public describeAuditSuppression(
    args: DescribeAuditSuppressionCommandInput,
    cb: (err: any, data?: DescribeAuditSuppressionCommandOutput) => void
  ): void;
  public describeAuditSuppression(
    args: DescribeAuditSuppressionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAuditSuppressionCommandOutput) => void
  ): void;
  public describeAuditSuppression(
    args: DescribeAuditSuppressionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAuditSuppressionCommandOutput) => void),
    cb?: (err: any, data?: DescribeAuditSuppressionCommandOutput) => void
  ): Promise<DescribeAuditSuppressionCommandOutput> | void {
    const command = new DescribeAuditSuppressionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a Device Defender audit.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAuditTask</a> action.</p>
   */
  public describeAuditTask(
    args: DescribeAuditTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAuditTaskCommandOutput>;
  public describeAuditTask(
    args: DescribeAuditTaskCommandInput,
    cb: (err: any, data?: DescribeAuditTaskCommandOutput) => void
  ): void;
  public describeAuditTask(
    args: DescribeAuditTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAuditTaskCommandOutput) => void
  ): void;
  public describeAuditTask(
    args: DescribeAuditTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAuditTaskCommandOutput) => void),
    cb?: (err: any, data?: DescribeAuditTaskCommandOutput) => void
  ): Promise<DescribeAuditTaskCommandOutput> | void {
    const command = new DescribeAuditTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes an authorizer.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAuthorizer</a> action.</p>
   */
  public describeAuthorizer(
    args: DescribeAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAuthorizerCommandOutput>;
  public describeAuthorizer(
    args: DescribeAuthorizerCommandInput,
    cb: (err: any, data?: DescribeAuthorizerCommandOutput) => void
  ): void;
  public describeAuthorizer(
    args: DescribeAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAuthorizerCommandOutput) => void
  ): void;
  public describeAuthorizer(
    args: DescribeAuthorizerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAuthorizerCommandOutput) => void),
    cb?: (err: any, data?: DescribeAuthorizerCommandOutput) => void
  ): Promise<DescribeAuthorizerCommandOutput> | void {
    const command = new DescribeAuthorizerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about a billing group.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeBillingGroup</a> action.</p>
   */
  public describeBillingGroup(
    args: DescribeBillingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBillingGroupCommandOutput>;
  public describeBillingGroup(
    args: DescribeBillingGroupCommandInput,
    cb: (err: any, data?: DescribeBillingGroupCommandOutput) => void
  ): void;
  public describeBillingGroup(
    args: DescribeBillingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBillingGroupCommandOutput) => void
  ): void;
  public describeBillingGroup(
    args: DescribeBillingGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBillingGroupCommandOutput) => void),
    cb?: (err: any, data?: DescribeBillingGroupCommandOutput) => void
  ): Promise<DescribeBillingGroupCommandOutput> | void {
    const command = new DescribeBillingGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a registered CA certificate.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeCACertificate</a> action.</p>
   */
  public describeCACertificate(
    args: DescribeCACertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCACertificateCommandOutput>;
  public describeCACertificate(
    args: DescribeCACertificateCommandInput,
    cb: (err: any, data?: DescribeCACertificateCommandOutput) => void
  ): void;
  public describeCACertificate(
    args: DescribeCACertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCACertificateCommandOutput) => void
  ): void;
  public describeCACertificate(
    args: DescribeCACertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCACertificateCommandOutput) => void),
    cb?: (err: any, data?: DescribeCACertificateCommandOutput) => void
  ): Promise<DescribeCACertificateCommandOutput> | void {
    const command = new DescribeCACertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the specified certificate.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeCertificate</a> action.</p>
   */
  public describeCertificate(
    args: DescribeCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCertificateCommandOutput>;
  public describeCertificate(
    args: DescribeCertificateCommandInput,
    cb: (err: any, data?: DescribeCertificateCommandOutput) => void
  ): void;
  public describeCertificate(
    args: DescribeCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCertificateCommandOutput) => void
  ): void;
  public describeCertificate(
    args: DescribeCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCertificateCommandOutput) => void),
    cb?: (err: any, data?: DescribeCertificateCommandOutput) => void
  ): Promise<DescribeCertificateCommandOutput> | void {
    const command = new DescribeCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *       Gets information about a Device Defender detect custom metric.
   *     </p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeCustomMetric</a> action.</p>
   */
  public describeCustomMetric(
    args: DescribeCustomMetricCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCustomMetricCommandOutput>;
  public describeCustomMetric(
    args: DescribeCustomMetricCommandInput,
    cb: (err: any, data?: DescribeCustomMetricCommandOutput) => void
  ): void;
  public describeCustomMetric(
    args: DescribeCustomMetricCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCustomMetricCommandOutput) => void
  ): void;
  public describeCustomMetric(
    args: DescribeCustomMetricCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCustomMetricCommandOutput) => void),
    cb?: (err: any, data?: DescribeCustomMetricCommandOutput) => void
  ): Promise<DescribeCustomMetricCommandOutput> | void {
    const command = new DescribeCustomMetricCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the default authorizer.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDefaultAuthorizer</a> action.</p>
   */
  public describeDefaultAuthorizer(
    args: DescribeDefaultAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDefaultAuthorizerCommandOutput>;
  public describeDefaultAuthorizer(
    args: DescribeDefaultAuthorizerCommandInput,
    cb: (err: any, data?: DescribeDefaultAuthorizerCommandOutput) => void
  ): void;
  public describeDefaultAuthorizer(
    args: DescribeDefaultAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDefaultAuthorizerCommandOutput) => void
  ): void;
  public describeDefaultAuthorizer(
    args: DescribeDefaultAuthorizerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDefaultAuthorizerCommandOutput) => void),
    cb?: (err: any, data?: DescribeDefaultAuthorizerCommandOutput) => void
  ): Promise<DescribeDefaultAuthorizerCommandOutput> | void {
    const command = new DescribeDefaultAuthorizerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *       Gets information about a Device Defender ML Detect mitigation action.
   *     </p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDetectMitigationActionsTask</a> action.</p>
   */
  public describeDetectMitigationActionsTask(
    args: DescribeDetectMitigationActionsTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDetectMitigationActionsTaskCommandOutput>;
  public describeDetectMitigationActionsTask(
    args: DescribeDetectMitigationActionsTaskCommandInput,
    cb: (err: any, data?: DescribeDetectMitigationActionsTaskCommandOutput) => void
  ): void;
  public describeDetectMitigationActionsTask(
    args: DescribeDetectMitigationActionsTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDetectMitigationActionsTaskCommandOutput) => void
  ): void;
  public describeDetectMitigationActionsTask(
    args: DescribeDetectMitigationActionsTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDetectMitigationActionsTaskCommandOutput) => void),
    cb?: (err: any, data?: DescribeDetectMitigationActionsTaskCommandOutput) => void
  ): Promise<DescribeDetectMitigationActionsTaskCommandOutput> | void {
    const command = new DescribeDetectMitigationActionsTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides details about a dimension that is defined in your Amazon Web Services accounts.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDimension</a> action.</p>
   */
  public describeDimension(
    args: DescribeDimensionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDimensionCommandOutput>;
  public describeDimension(
    args: DescribeDimensionCommandInput,
    cb: (err: any, data?: DescribeDimensionCommandOutput) => void
  ): void;
  public describeDimension(
    args: DescribeDimensionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDimensionCommandOutput) => void
  ): void;
  public describeDimension(
    args: DescribeDimensionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDimensionCommandOutput) => void),
    cb?: (err: any, data?: DescribeDimensionCommandOutput) => void
  ): Promise<DescribeDimensionCommandOutput> | void {
    const command = new DescribeDimensionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets summary information about a domain configuration.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDomainConfiguration</a> action.</p>
   */
  public describeDomainConfiguration(
    args: DescribeDomainConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainConfigurationCommandOutput>;
  public describeDomainConfiguration(
    args: DescribeDomainConfigurationCommandInput,
    cb: (err: any, data?: DescribeDomainConfigurationCommandOutput) => void
  ): void;
  public describeDomainConfiguration(
    args: DescribeDomainConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainConfigurationCommandOutput) => void
  ): void;
  public describeDomainConfiguration(
    args: DescribeDomainConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDomainConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeDomainConfigurationCommandOutput) => void
  ): Promise<DescribeDomainConfigurationCommandOutput> | void {
    const command = new DescribeDomainConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a unique endpoint specific to the Amazon Web Services account making the call.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeEndpoint</a> action.</p>
   */
  public describeEndpoint(
    args: DescribeEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEndpointCommandOutput>;
  public describeEndpoint(
    args: DescribeEndpointCommandInput,
    cb: (err: any, data?: DescribeEndpointCommandOutput) => void
  ): void;
  public describeEndpoint(
    args: DescribeEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEndpointCommandOutput) => void
  ): void;
  public describeEndpoint(
    args: DescribeEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEndpointCommandOutput) => void),
    cb?: (err: any, data?: DescribeEndpointCommandOutput) => void
  ): Promise<DescribeEndpointCommandOutput> | void {
    const command = new DescribeEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes event configurations.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeEventConfigurations</a> action.</p>
   */
  public describeEventConfigurations(
    args: DescribeEventConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventConfigurationsCommandOutput>;
  public describeEventConfigurations(
    args: DescribeEventConfigurationsCommandInput,
    cb: (err: any, data?: DescribeEventConfigurationsCommandOutput) => void
  ): void;
  public describeEventConfigurations(
    args: DescribeEventConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventConfigurationsCommandOutput) => void
  ): void;
  public describeEventConfigurations(
    args: DescribeEventConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEventConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventConfigurationsCommandOutput) => void
  ): Promise<DescribeEventConfigurationsCommandOutput> | void {
    const command = new DescribeEventConfigurationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the specified fleet metric.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeFleetMetric</a> action.</p>
   */
  public describeFleetMetric(
    args: DescribeFleetMetricCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetMetricCommandOutput>;
  public describeFleetMetric(
    args: DescribeFleetMetricCommandInput,
    cb: (err: any, data?: DescribeFleetMetricCommandOutput) => void
  ): void;
  public describeFleetMetric(
    args: DescribeFleetMetricCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetMetricCommandOutput) => void
  ): void;
  public describeFleetMetric(
    args: DescribeFleetMetricCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFleetMetricCommandOutput) => void),
    cb?: (err: any, data?: DescribeFleetMetricCommandOutput) => void
  ): Promise<DescribeFleetMetricCommandOutput> | void {
    const command = new DescribeFleetMetricCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a search index.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeIndex</a> action.</p>
   */
  public describeIndex(
    args: DescribeIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIndexCommandOutput>;
  public describeIndex(
    args: DescribeIndexCommandInput,
    cb: (err: any, data?: DescribeIndexCommandOutput) => void
  ): void;
  public describeIndex(
    args: DescribeIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIndexCommandOutput) => void
  ): void;
  public describeIndex(
    args: DescribeIndexCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeIndexCommandOutput) => void),
    cb?: (err: any, data?: DescribeIndexCommandOutput) => void
  ): Promise<DescribeIndexCommandOutput> | void {
    const command = new DescribeIndexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a job.</p>
   *         <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeJob</a> action.</p>
   */
  public describeJob(args: DescribeJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeJobCommandOutput>;
  public describeJob(args: DescribeJobCommandInput, cb: (err: any, data?: DescribeJobCommandOutput) => void): void;
  public describeJob(
    args: DescribeJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobCommandOutput) => void
  ): void;
  public describeJob(
    args: DescribeJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeJobCommandOutput) => void
  ): Promise<DescribeJobCommandOutput> | void {
    const command = new DescribeJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a job execution.</p>
   *         <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeJobExecution</a> action.</p>
   */
  public describeJobExecution(
    args: DescribeJobExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobExecutionCommandOutput>;
  public describeJobExecution(
    args: DescribeJobExecutionCommandInput,
    cb: (err: any, data?: DescribeJobExecutionCommandOutput) => void
  ): void;
  public describeJobExecution(
    args: DescribeJobExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobExecutionCommandOutput) => void
  ): void;
  public describeJobExecution(
    args: DescribeJobExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeJobExecutionCommandOutput) => void),
    cb?: (err: any, data?: DescribeJobExecutionCommandOutput) => void
  ): Promise<DescribeJobExecutionCommandOutput> | void {
    const command = new DescribeJobExecutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about a job template.</p>
   */
  public describeJobTemplate(
    args: DescribeJobTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobTemplateCommandOutput>;
  public describeJobTemplate(
    args: DescribeJobTemplateCommandInput,
    cb: (err: any, data?: DescribeJobTemplateCommandOutput) => void
  ): void;
  public describeJobTemplate(
    args: DescribeJobTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobTemplateCommandOutput) => void
  ): void;
  public describeJobTemplate(
    args: DescribeJobTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeJobTemplateCommandOutput) => void),
    cb?: (err: any, data?: DescribeJobTemplateCommandOutput) => void
  ): Promise<DescribeJobTemplateCommandOutput> | void {
    const command = new DescribeJobTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>View details of a managed job template.</p>
   */
  public describeManagedJobTemplate(
    args: DescribeManagedJobTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeManagedJobTemplateCommandOutput>;
  public describeManagedJobTemplate(
    args: DescribeManagedJobTemplateCommandInput,
    cb: (err: any, data?: DescribeManagedJobTemplateCommandOutput) => void
  ): void;
  public describeManagedJobTemplate(
    args: DescribeManagedJobTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeManagedJobTemplateCommandOutput) => void
  ): void;
  public describeManagedJobTemplate(
    args: DescribeManagedJobTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeManagedJobTemplateCommandOutput) => void),
    cb?: (err: any, data?: DescribeManagedJobTemplateCommandOutput) => void
  ): Promise<DescribeManagedJobTemplateCommandOutput> | void {
    const command = new DescribeManagedJobTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a mitigation action.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeMitigationAction</a> action.</p>
   */
  public describeMitigationAction(
    args: DescribeMitigationActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMitigationActionCommandOutput>;
  public describeMitigationAction(
    args: DescribeMitigationActionCommandInput,
    cb: (err: any, data?: DescribeMitigationActionCommandOutput) => void
  ): void;
  public describeMitigationAction(
    args: DescribeMitigationActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMitigationActionCommandOutput) => void
  ): void;
  public describeMitigationAction(
    args: DescribeMitigationActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMitigationActionCommandOutput) => void),
    cb?: (err: any, data?: DescribeMitigationActionCommandOutput) => void
  ): Promise<DescribeMitigationActionCommandOutput> | void {
    const command = new DescribeMitigationActionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about a provisioning template.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeProvisioningTemplate</a> action.</p>
   */
  public describeProvisioningTemplate(
    args: DescribeProvisioningTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProvisioningTemplateCommandOutput>;
  public describeProvisioningTemplate(
    args: DescribeProvisioningTemplateCommandInput,
    cb: (err: any, data?: DescribeProvisioningTemplateCommandOutput) => void
  ): void;
  public describeProvisioningTemplate(
    args: DescribeProvisioningTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProvisioningTemplateCommandOutput) => void
  ): void;
  public describeProvisioningTemplate(
    args: DescribeProvisioningTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeProvisioningTemplateCommandOutput) => void),
    cb?: (err: any, data?: DescribeProvisioningTemplateCommandOutput) => void
  ): Promise<DescribeProvisioningTemplateCommandOutput> | void {
    const command = new DescribeProvisioningTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about a provisioning template version.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeProvisioningTemplateVersion</a> action.</p>
   */
  public describeProvisioningTemplateVersion(
    args: DescribeProvisioningTemplateVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProvisioningTemplateVersionCommandOutput>;
  public describeProvisioningTemplateVersion(
    args: DescribeProvisioningTemplateVersionCommandInput,
    cb: (err: any, data?: DescribeProvisioningTemplateVersionCommandOutput) => void
  ): void;
  public describeProvisioningTemplateVersion(
    args: DescribeProvisioningTemplateVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProvisioningTemplateVersionCommandOutput) => void
  ): void;
  public describeProvisioningTemplateVersion(
    args: DescribeProvisioningTemplateVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeProvisioningTemplateVersionCommandOutput) => void),
    cb?: (err: any, data?: DescribeProvisioningTemplateVersionCommandOutput) => void
  ): Promise<DescribeProvisioningTemplateVersionCommandOutput> | void {
    const command = new DescribeProvisioningTemplateVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a role alias.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeRoleAlias</a> action.</p>
   */
  public describeRoleAlias(
    args: DescribeRoleAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRoleAliasCommandOutput>;
  public describeRoleAlias(
    args: DescribeRoleAliasCommandInput,
    cb: (err: any, data?: DescribeRoleAliasCommandOutput) => void
  ): void;
  public describeRoleAlias(
    args: DescribeRoleAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRoleAliasCommandOutput) => void
  ): void;
  public describeRoleAlias(
    args: DescribeRoleAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRoleAliasCommandOutput) => void),
    cb?: (err: any, data?: DescribeRoleAliasCommandOutput) => void
  ): Promise<DescribeRoleAliasCommandOutput> | void {
    const command = new DescribeRoleAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a scheduled audit.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeScheduledAudit</a> action.</p>
   */
  public describeScheduledAudit(
    args: DescribeScheduledAuditCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScheduledAuditCommandOutput>;
  public describeScheduledAudit(
    args: DescribeScheduledAuditCommandInput,
    cb: (err: any, data?: DescribeScheduledAuditCommandOutput) => void
  ): void;
  public describeScheduledAudit(
    args: DescribeScheduledAuditCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScheduledAuditCommandOutput) => void
  ): void;
  public describeScheduledAudit(
    args: DescribeScheduledAuditCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeScheduledAuditCommandOutput) => void),
    cb?: (err: any, data?: DescribeScheduledAuditCommandOutput) => void
  ): Promise<DescribeScheduledAuditCommandOutput> | void {
    const command = new DescribeScheduledAuditCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a Device Defender security profile.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeSecurityProfile</a> action.</p>
   */
  public describeSecurityProfile(
    args: DescribeSecurityProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSecurityProfileCommandOutput>;
  public describeSecurityProfile(
    args: DescribeSecurityProfileCommandInput,
    cb: (err: any, data?: DescribeSecurityProfileCommandOutput) => void
  ): void;
  public describeSecurityProfile(
    args: DescribeSecurityProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSecurityProfileCommandOutput) => void
  ): void;
  public describeSecurityProfile(
    args: DescribeSecurityProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSecurityProfileCommandOutput) => void),
    cb?: (err: any, data?: DescribeSecurityProfileCommandOutput) => void
  ): Promise<DescribeSecurityProfileCommandOutput> | void {
    const command = new DescribeSecurityProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a stream.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeStream</a> action.</p>
   */
  public describeStream(
    args: DescribeStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStreamCommandOutput>;
  public describeStream(
    args: DescribeStreamCommandInput,
    cb: (err: any, data?: DescribeStreamCommandOutput) => void
  ): void;
  public describeStream(
    args: DescribeStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStreamCommandOutput) => void
  ): void;
  public describeStream(
    args: DescribeStreamCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeStreamCommandOutput) => void),
    cb?: (err: any, data?: DescribeStreamCommandOutput) => void
  ): Promise<DescribeStreamCommandOutput> | void {
    const command = new DescribeStreamCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the specified thing.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThing</a> action.</p>
   */
  public describeThing(
    args: DescribeThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeThingCommandOutput>;
  public describeThing(
    args: DescribeThingCommandInput,
    cb: (err: any, data?: DescribeThingCommandOutput) => void
  ): void;
  public describeThing(
    args: DescribeThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeThingCommandOutput) => void
  ): void;
  public describeThing(
    args: DescribeThingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeThingCommandOutput) => void),
    cb?: (err: any, data?: DescribeThingCommandOutput) => void
  ): Promise<DescribeThingCommandOutput> | void {
    const command = new DescribeThingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describe a thing group.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThingGroup</a> action.</p>
   */
  public describeThingGroup(
    args: DescribeThingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeThingGroupCommandOutput>;
  public describeThingGroup(
    args: DescribeThingGroupCommandInput,
    cb: (err: any, data?: DescribeThingGroupCommandOutput) => void
  ): void;
  public describeThingGroup(
    args: DescribeThingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeThingGroupCommandOutput) => void
  ): void;
  public describeThingGroup(
    args: DescribeThingGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeThingGroupCommandOutput) => void),
    cb?: (err: any, data?: DescribeThingGroupCommandOutput) => void
  ): Promise<DescribeThingGroupCommandOutput> | void {
    const command = new DescribeThingGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a bulk thing provisioning task.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThingRegistrationTask</a> action.</p>
   */
  public describeThingRegistrationTask(
    args: DescribeThingRegistrationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeThingRegistrationTaskCommandOutput>;
  public describeThingRegistrationTask(
    args: DescribeThingRegistrationTaskCommandInput,
    cb: (err: any, data?: DescribeThingRegistrationTaskCommandOutput) => void
  ): void;
  public describeThingRegistrationTask(
    args: DescribeThingRegistrationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeThingRegistrationTaskCommandOutput) => void
  ): void;
  public describeThingRegistrationTask(
    args: DescribeThingRegistrationTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeThingRegistrationTaskCommandOutput) => void),
    cb?: (err: any, data?: DescribeThingRegistrationTaskCommandOutput) => void
  ): Promise<DescribeThingRegistrationTaskCommandOutput> | void {
    const command = new DescribeThingRegistrationTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the specified thing type.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThingType</a> action.</p>
   */
  public describeThingType(
    args: DescribeThingTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeThingTypeCommandOutput>;
  public describeThingType(
    args: DescribeThingTypeCommandInput,
    cb: (err: any, data?: DescribeThingTypeCommandOutput) => void
  ): void;
  public describeThingType(
    args: DescribeThingTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeThingTypeCommandOutput) => void
  ): void;
  public describeThingType(
    args: DescribeThingTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeThingTypeCommandOutput) => void),
    cb?: (err: any, data?: DescribeThingTypeCommandOutput) => void
  ): Promise<DescribeThingTypeCommandOutput> | void {
    const command = new DescribeThingTypeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Detaches a policy from the specified target.</p>
   *          <note>
   *             <p>Because of the distributed nature of Amazon Web Services, it can take up to five minutes after
   *          a policy is detached before it's ready to be deleted.</p>
   *          </note>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachPolicy</a> action.</p>
   */
  public detachPolicy(
    args: DetachPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachPolicyCommandOutput>;
  public detachPolicy(args: DetachPolicyCommandInput, cb: (err: any, data?: DetachPolicyCommandOutput) => void): void;
  public detachPolicy(
    args: DetachPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachPolicyCommandOutput) => void
  ): void;
  public detachPolicy(
    args: DetachPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetachPolicyCommandOutput) => void),
    cb?: (err: any, data?: DetachPolicyCommandOutput) => void
  ): Promise<DetachPolicyCommandOutput> | void {
    const command = new DetachPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @deprecated
   *
   * <p>Removes the specified policy from the specified certificate.</p>
   *          <p>
   *             <b>Note:</b> This action is deprecated and works as
   *          expected for backward compatibility, but we won't add enhancements. Use <a>DetachPolicy</a> instead.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachPrincipalPolicy</a> action.</p>
   */
  public detachPrincipalPolicy(
    args: DetachPrincipalPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachPrincipalPolicyCommandOutput>;
  public detachPrincipalPolicy(
    args: DetachPrincipalPolicyCommandInput,
    cb: (err: any, data?: DetachPrincipalPolicyCommandOutput) => void
  ): void;
  public detachPrincipalPolicy(
    args: DetachPrincipalPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachPrincipalPolicyCommandOutput) => void
  ): void;
  public detachPrincipalPolicy(
    args: DetachPrincipalPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetachPrincipalPolicyCommandOutput) => void),
    cb?: (err: any, data?: DetachPrincipalPolicyCommandOutput) => void
  ): Promise<DetachPrincipalPolicyCommandOutput> | void {
    const command = new DetachPrincipalPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates a Device Defender security profile from a thing group or from this account.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachSecurityProfile</a> action.</p>
   */
  public detachSecurityProfile(
    args: DetachSecurityProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachSecurityProfileCommandOutput>;
  public detachSecurityProfile(
    args: DetachSecurityProfileCommandInput,
    cb: (err: any, data?: DetachSecurityProfileCommandOutput) => void
  ): void;
  public detachSecurityProfile(
    args: DetachSecurityProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachSecurityProfileCommandOutput) => void
  ): void;
  public detachSecurityProfile(
    args: DetachSecurityProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetachSecurityProfileCommandOutput) => void),
    cb?: (err: any, data?: DetachSecurityProfileCommandOutput) => void
  ): Promise<DetachSecurityProfileCommandOutput> | void {
    const command = new DetachSecurityProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Detaches the specified principal from the specified thing. A principal can be X.509
   * 			certificates, IAM users, groups, and roles, Amazon Cognito identities or federated
   * 			identities.</p>
   * 		       <note>
   * 			         <p>This call is asynchronous. It might take several seconds for the detachment to
   * 				propagate.</p>
   * 		       </note>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachThingPrincipal</a> action.</p>
   */
  public detachThingPrincipal(
    args: DetachThingPrincipalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachThingPrincipalCommandOutput>;
  public detachThingPrincipal(
    args: DetachThingPrincipalCommandInput,
    cb: (err: any, data?: DetachThingPrincipalCommandOutput) => void
  ): void;
  public detachThingPrincipal(
    args: DetachThingPrincipalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachThingPrincipalCommandOutput) => void
  ): void;
  public detachThingPrincipal(
    args: DetachThingPrincipalCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetachThingPrincipalCommandOutput) => void),
    cb?: (err: any, data?: DetachThingPrincipalCommandOutput) => void
  ): Promise<DetachThingPrincipalCommandOutput> | void {
    const command = new DetachThingPrincipalCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disables the rule.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DisableTopicRule</a> action.</p>
   */
  public disableTopicRule(
    args: DisableTopicRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableTopicRuleCommandOutput>;
  public disableTopicRule(
    args: DisableTopicRuleCommandInput,
    cb: (err: any, data?: DisableTopicRuleCommandOutput) => void
  ): void;
  public disableTopicRule(
    args: DisableTopicRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableTopicRuleCommandOutput) => void
  ): void;
  public disableTopicRule(
    args: DisableTopicRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableTopicRuleCommandOutput) => void),
    cb?: (err: any, data?: DisableTopicRuleCommandOutput) => void
  ): Promise<DisableTopicRuleCommandOutput> | void {
    const command = new DisableTopicRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enables the rule.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">EnableTopicRule</a> action.</p>
   */
  public enableTopicRule(
    args: EnableTopicRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableTopicRuleCommandOutput>;
  public enableTopicRule(
    args: EnableTopicRuleCommandInput,
    cb: (err: any, data?: EnableTopicRuleCommandOutput) => void
  ): void;
  public enableTopicRule(
    args: EnableTopicRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableTopicRuleCommandOutput) => void
  ): void;
  public enableTopicRule(
    args: EnableTopicRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableTopicRuleCommandOutput) => void),
    cb?: (err: any, data?: EnableTopicRuleCommandOutput) => void
  ): Promise<EnableTopicRuleCommandOutput> | void {
    const command = new EnableTopicRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *       Returns a Device Defender's ML Detect Security Profile training model's status.
   *     </p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetBehaviorModelTrainingSummaries</a> action.</p>
   */
  public getBehaviorModelTrainingSummaries(
    args: GetBehaviorModelTrainingSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBehaviorModelTrainingSummariesCommandOutput>;
  public getBehaviorModelTrainingSummaries(
    args: GetBehaviorModelTrainingSummariesCommandInput,
    cb: (err: any, data?: GetBehaviorModelTrainingSummariesCommandOutput) => void
  ): void;
  public getBehaviorModelTrainingSummaries(
    args: GetBehaviorModelTrainingSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBehaviorModelTrainingSummariesCommandOutput) => void
  ): void;
  public getBehaviorModelTrainingSummaries(
    args: GetBehaviorModelTrainingSummariesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBehaviorModelTrainingSummariesCommandOutput) => void),
    cb?: (err: any, data?: GetBehaviorModelTrainingSummariesCommandOutput) => void
  ): Promise<GetBehaviorModelTrainingSummariesCommandOutput> | void {
    const command = new GetBehaviorModelTrainingSummariesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Aggregates on indexed data with search queries pertaining to particular fields. </p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetBucketsAggregation</a> action.</p>
   */
  public getBucketsAggregation(
    args: GetBucketsAggregationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketsAggregationCommandOutput>;
  public getBucketsAggregation(
    args: GetBucketsAggregationCommandInput,
    cb: (err: any, data?: GetBucketsAggregationCommandOutput) => void
  ): void;
  public getBucketsAggregation(
    args: GetBucketsAggregationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketsAggregationCommandOutput) => void
  ): void;
  public getBucketsAggregation(
    args: GetBucketsAggregationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBucketsAggregationCommandOutput) => void),
    cb?: (err: any, data?: GetBucketsAggregationCommandOutput) => void
  ): Promise<GetBucketsAggregationCommandOutput> | void {
    const command = new GetBucketsAggregationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the approximate count of unique values that match the query.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetCardinality</a> action.</p>
   */
  public getCardinality(
    args: GetCardinalityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCardinalityCommandOutput>;
  public getCardinality(
    args: GetCardinalityCommandInput,
    cb: (err: any, data?: GetCardinalityCommandOutput) => void
  ): void;
  public getCardinality(
    args: GetCardinalityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCardinalityCommandOutput) => void
  ): void;
  public getCardinality(
    args: GetCardinalityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCardinalityCommandOutput) => void),
    cb?: (err: any, data?: GetCardinalityCommandOutput) => void
  ): Promise<GetCardinalityCommandOutput> | void {
    const command = new GetCardinalityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a list of the policies that have an effect on the authorization behavior of the
   *          specified device when it connects to the IoT device gateway.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetEffectivePolicies</a> action.</p>
   */
  public getEffectivePolicies(
    args: GetEffectivePoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEffectivePoliciesCommandOutput>;
  public getEffectivePolicies(
    args: GetEffectivePoliciesCommandInput,
    cb: (err: any, data?: GetEffectivePoliciesCommandOutput) => void
  ): void;
  public getEffectivePolicies(
    args: GetEffectivePoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEffectivePoliciesCommandOutput) => void
  ): void;
  public getEffectivePolicies(
    args: GetEffectivePoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEffectivePoliciesCommandOutput) => void),
    cb?: (err: any, data?: GetEffectivePoliciesCommandOutput) => void
  ): Promise<GetEffectivePoliciesCommandOutput> | void {
    const command = new GetEffectivePoliciesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the indexing configuration.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetIndexingConfiguration</a> action.</p>
   */
  public getIndexingConfiguration(
    args: GetIndexingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIndexingConfigurationCommandOutput>;
  public getIndexingConfiguration(
    args: GetIndexingConfigurationCommandInput,
    cb: (err: any, data?: GetIndexingConfigurationCommandOutput) => void
  ): void;
  public getIndexingConfiguration(
    args: GetIndexingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIndexingConfigurationCommandOutput) => void
  ): void;
  public getIndexingConfiguration(
    args: GetIndexingConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetIndexingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetIndexingConfigurationCommandOutput) => void
  ): Promise<GetIndexingConfigurationCommandOutput> | void {
    const command = new GetIndexingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a job document.</p>
   *         <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetJobDocument</a> action.</p>
   */
  public getJobDocument(
    args: GetJobDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetJobDocumentCommandOutput>;
  public getJobDocument(
    args: GetJobDocumentCommandInput,
    cb: (err: any, data?: GetJobDocumentCommandOutput) => void
  ): void;
  public getJobDocument(
    args: GetJobDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobDocumentCommandOutput) => void
  ): void;
  public getJobDocument(
    args: GetJobDocumentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetJobDocumentCommandOutput) => void),
    cb?: (err: any, data?: GetJobDocumentCommandOutput) => void
  ): Promise<GetJobDocumentCommandOutput> | void {
    const command = new GetJobDocumentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the logging options.</p>
   *          <p>NOTE: use of this command is not recommended. Use <code>GetV2LoggingOptions</code>
   *          instead.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetLoggingOptions</a> action.</p>
   */
  public getLoggingOptions(
    args: GetLoggingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLoggingOptionsCommandOutput>;
  public getLoggingOptions(
    args: GetLoggingOptionsCommandInput,
    cb: (err: any, data?: GetLoggingOptionsCommandOutput) => void
  ): void;
  public getLoggingOptions(
    args: GetLoggingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLoggingOptionsCommandOutput) => void
  ): void;
  public getLoggingOptions(
    args: GetLoggingOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLoggingOptionsCommandOutput) => void),
    cb?: (err: any, data?: GetLoggingOptionsCommandOutput) => void
  ): Promise<GetLoggingOptionsCommandOutput> | void {
    const command = new GetLoggingOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets an OTA update.</p>
   *         <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetOTAUpdate</a> action.</p>
   */
  public getOTAUpdate(
    args: GetOTAUpdateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOTAUpdateCommandOutput>;
  public getOTAUpdate(args: GetOTAUpdateCommandInput, cb: (err: any, data?: GetOTAUpdateCommandOutput) => void): void;
  public getOTAUpdate(
    args: GetOTAUpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOTAUpdateCommandOutput) => void
  ): void;
  public getOTAUpdate(
    args: GetOTAUpdateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetOTAUpdateCommandOutput) => void),
    cb?: (err: any, data?: GetOTAUpdateCommandOutput) => void
  ): Promise<GetOTAUpdateCommandOutput> | void {
    const command = new GetOTAUpdateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Groups the aggregated values that match the query into percentile groupings. The default
   *         percentile groupings are: 1,5,25,50,75,95,99, although you can specify your own
   *         when you call <code>GetPercentiles</code>. This function returns a value for each
   *         percentile group specified (or the default percentile groupings). The percentile group
   *         "1" contains the aggregated field value that occurs in approximately one percent of the
   *         values that match the query. The percentile group "5" contains the aggregated field value
   *         that occurs in approximately five percent of the values that match the query, and so on.
   *         The result is an approximation, the more values that match the query, the more accurate
   *         the percentile values.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPercentiles</a> action.</p>
   */
  public getPercentiles(
    args: GetPercentilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPercentilesCommandOutput>;
  public getPercentiles(
    args: GetPercentilesCommandInput,
    cb: (err: any, data?: GetPercentilesCommandOutput) => void
  ): void;
  public getPercentiles(
    args: GetPercentilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPercentilesCommandOutput) => void
  ): void;
  public getPercentiles(
    args: GetPercentilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPercentilesCommandOutput) => void),
    cb?: (err: any, data?: GetPercentilesCommandOutput) => void
  ): Promise<GetPercentilesCommandOutput> | void {
    const command = new GetPercentilesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the specified policy with the policy document of the default
   *          version.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPolicy</a> action.</p>
   */
  public getPolicy(args: GetPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetPolicyCommandOutput>;
  public getPolicy(args: GetPolicyCommandInput, cb: (err: any, data?: GetPolicyCommandOutput) => void): void;
  public getPolicy(
    args: GetPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;
  public getPolicy(
    args: GetPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetPolicyCommandOutput) => void
  ): Promise<GetPolicyCommandOutput> | void {
    const command = new GetPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the specified policy version.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPolicyVersion</a> action.</p>
   */
  public getPolicyVersion(
    args: GetPolicyVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPolicyVersionCommandOutput>;
  public getPolicyVersion(
    args: GetPolicyVersionCommandInput,
    cb: (err: any, data?: GetPolicyVersionCommandOutput) => void
  ): void;
  public getPolicyVersion(
    args: GetPolicyVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyVersionCommandOutput) => void
  ): void;
  public getPolicyVersion(
    args: GetPolicyVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPolicyVersionCommandOutput) => void),
    cb?: (err: any, data?: GetPolicyVersionCommandOutput) => void
  ): Promise<GetPolicyVersionCommandOutput> | void {
    const command = new GetPolicyVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a registration code used to register a CA certificate with IoT.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetRegistrationCode</a> action.</p>
   */
  public getRegistrationCode(
    args: GetRegistrationCodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRegistrationCodeCommandOutput>;
  public getRegistrationCode(
    args: GetRegistrationCodeCommandInput,
    cb: (err: any, data?: GetRegistrationCodeCommandOutput) => void
  ): void;
  public getRegistrationCode(
    args: GetRegistrationCodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRegistrationCodeCommandOutput) => void
  ): void;
  public getRegistrationCode(
    args: GetRegistrationCodeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRegistrationCodeCommandOutput) => void),
    cb?: (err: any, data?: GetRegistrationCodeCommandOutput) => void
  ): Promise<GetRegistrationCodeCommandOutput> | void {
    const command = new GetRegistrationCodeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the count, average, sum, minimum, maximum, sum of squares, variance,
   *       and standard deviation for the specified aggregated field. If the aggregation field is of type
   *       <code>String</code>, only the count statistic is returned.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetStatistics</a> action.</p>
   */
  public getStatistics(
    args: GetStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStatisticsCommandOutput>;
  public getStatistics(
    args: GetStatisticsCommandInput,
    cb: (err: any, data?: GetStatisticsCommandOutput) => void
  ): void;
  public getStatistics(
    args: GetStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStatisticsCommandOutput) => void
  ): void;
  public getStatistics(
    args: GetStatisticsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetStatisticsCommandOutput) => void),
    cb?: (err: any, data?: GetStatisticsCommandOutput) => void
  ): Promise<GetStatisticsCommandOutput> | void {
    const command = new GetStatisticsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the rule.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetTopicRule</a> action.</p>
   */
  public getTopicRule(
    args: GetTopicRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTopicRuleCommandOutput>;
  public getTopicRule(args: GetTopicRuleCommandInput, cb: (err: any, data?: GetTopicRuleCommandOutput) => void): void;
  public getTopicRule(
    args: GetTopicRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTopicRuleCommandOutput) => void
  ): void;
  public getTopicRule(
    args: GetTopicRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTopicRuleCommandOutput) => void),
    cb?: (err: any, data?: GetTopicRuleCommandOutput) => void
  ): Promise<GetTopicRuleCommandOutput> | void {
    const command = new GetTopicRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a topic rule destination.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetTopicRuleDestination</a> action.</p>
   */
  public getTopicRuleDestination(
    args: GetTopicRuleDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTopicRuleDestinationCommandOutput>;
  public getTopicRuleDestination(
    args: GetTopicRuleDestinationCommandInput,
    cb: (err: any, data?: GetTopicRuleDestinationCommandOutput) => void
  ): void;
  public getTopicRuleDestination(
    args: GetTopicRuleDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTopicRuleDestinationCommandOutput) => void
  ): void;
  public getTopicRuleDestination(
    args: GetTopicRuleDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTopicRuleDestinationCommandOutput) => void),
    cb?: (err: any, data?: GetTopicRuleDestinationCommandOutput) => void
  ): Promise<GetTopicRuleDestinationCommandOutput> | void {
    const command = new GetTopicRuleDestinationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the fine grained logging options.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetV2LoggingOptions</a> action.</p>
   */
  public getV2LoggingOptions(
    args: GetV2LoggingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetV2LoggingOptionsCommandOutput>;
  public getV2LoggingOptions(
    args: GetV2LoggingOptionsCommandInput,
    cb: (err: any, data?: GetV2LoggingOptionsCommandOutput) => void
  ): void;
  public getV2LoggingOptions(
    args: GetV2LoggingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetV2LoggingOptionsCommandOutput) => void
  ): void;
  public getV2LoggingOptions(
    args: GetV2LoggingOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetV2LoggingOptionsCommandOutput) => void),
    cb?: (err: any, data?: GetV2LoggingOptionsCommandOutput) => void
  ): Promise<GetV2LoggingOptionsCommandOutput> | void {
    const command = new GetV2LoggingOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the active violations for a given Device Defender security profile.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListActiveViolations</a> action.</p>
   */
  public listActiveViolations(
    args: ListActiveViolationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListActiveViolationsCommandOutput>;
  public listActiveViolations(
    args: ListActiveViolationsCommandInput,
    cb: (err: any, data?: ListActiveViolationsCommandOutput) => void
  ): void;
  public listActiveViolations(
    args: ListActiveViolationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListActiveViolationsCommandOutput) => void
  ): void;
  public listActiveViolations(
    args: ListActiveViolationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListActiveViolationsCommandOutput) => void),
    cb?: (err: any, data?: ListActiveViolationsCommandOutput) => void
  ): Promise<ListActiveViolationsCommandOutput> | void {
    const command = new ListActiveViolationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the policies attached to the specified thing group.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAttachedPolicies</a> action.</p>
   */
  public listAttachedPolicies(
    args: ListAttachedPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttachedPoliciesCommandOutput>;
  public listAttachedPolicies(
    args: ListAttachedPoliciesCommandInput,
    cb: (err: any, data?: ListAttachedPoliciesCommandOutput) => void
  ): void;
  public listAttachedPolicies(
    args: ListAttachedPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttachedPoliciesCommandOutput) => void
  ): void;
  public listAttachedPolicies(
    args: ListAttachedPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAttachedPoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListAttachedPoliciesCommandOutput) => void
  ): Promise<ListAttachedPoliciesCommandOutput> | void {
    const command = new ListAttachedPoliciesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the findings (results) of a Device Defender audit or of the audits
   *         performed during a specified time period. (Findings are retained for 90 days.)</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditFindings</a> action.</p>
   */
  public listAuditFindings(
    args: ListAuditFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAuditFindingsCommandOutput>;
  public listAuditFindings(
    args: ListAuditFindingsCommandInput,
    cb: (err: any, data?: ListAuditFindingsCommandOutput) => void
  ): void;
  public listAuditFindings(
    args: ListAuditFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAuditFindingsCommandOutput) => void
  ): void;
  public listAuditFindings(
    args: ListAuditFindingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAuditFindingsCommandOutput) => void),
    cb?: (err: any, data?: ListAuditFindingsCommandOutput) => void
  ): Promise<ListAuditFindingsCommandOutput> | void {
    const command = new ListAuditFindingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the status of audit mitigation action tasks that were
   *       executed.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditMitigationActionsExecutions</a> action.</p>
   */
  public listAuditMitigationActionsExecutions(
    args: ListAuditMitigationActionsExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAuditMitigationActionsExecutionsCommandOutput>;
  public listAuditMitigationActionsExecutions(
    args: ListAuditMitigationActionsExecutionsCommandInput,
    cb: (err: any, data?: ListAuditMitigationActionsExecutionsCommandOutput) => void
  ): void;
  public listAuditMitigationActionsExecutions(
    args: ListAuditMitigationActionsExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAuditMitigationActionsExecutionsCommandOutput) => void
  ): void;
  public listAuditMitigationActionsExecutions(
    args: ListAuditMitigationActionsExecutionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAuditMitigationActionsExecutionsCommandOutput) => void),
    cb?: (err: any, data?: ListAuditMitigationActionsExecutionsCommandOutput) => void
  ): Promise<ListAuditMitigationActionsExecutionsCommandOutput> | void {
    const command = new ListAuditMitigationActionsExecutionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a list of audit mitigation action tasks that match the specified filters.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditMitigationActionsTasks</a> action.</p>
   */
  public listAuditMitigationActionsTasks(
    args: ListAuditMitigationActionsTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAuditMitigationActionsTasksCommandOutput>;
  public listAuditMitigationActionsTasks(
    args: ListAuditMitigationActionsTasksCommandInput,
    cb: (err: any, data?: ListAuditMitigationActionsTasksCommandOutput) => void
  ): void;
  public listAuditMitigationActionsTasks(
    args: ListAuditMitigationActionsTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAuditMitigationActionsTasksCommandOutput) => void
  ): void;
  public listAuditMitigationActionsTasks(
    args: ListAuditMitigationActionsTasksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAuditMitigationActionsTasksCommandOutput) => void),
    cb?: (err: any, data?: ListAuditMitigationActionsTasksCommandOutput) => void
  ): Promise<ListAuditMitigationActionsTasksCommandOutput> | void {
    const command = new ListAuditMitigationActionsTasksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *       Lists your Device Defender audit listings.
   *     </p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditSuppressions</a> action.</p>
   */
  public listAuditSuppressions(
    args: ListAuditSuppressionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAuditSuppressionsCommandOutput>;
  public listAuditSuppressions(
    args: ListAuditSuppressionsCommandInput,
    cb: (err: any, data?: ListAuditSuppressionsCommandOutput) => void
  ): void;
  public listAuditSuppressions(
    args: ListAuditSuppressionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAuditSuppressionsCommandOutput) => void
  ): void;
  public listAuditSuppressions(
    args: ListAuditSuppressionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAuditSuppressionsCommandOutput) => void),
    cb?: (err: any, data?: ListAuditSuppressionsCommandOutput) => void
  ): Promise<ListAuditSuppressionsCommandOutput> | void {
    const command = new ListAuditSuppressionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the Device Defender audits that have been performed during a given
   *           time period.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditTasks</a> action.</p>
   */
  public listAuditTasks(
    args: ListAuditTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAuditTasksCommandOutput>;
  public listAuditTasks(
    args: ListAuditTasksCommandInput,
    cb: (err: any, data?: ListAuditTasksCommandOutput) => void
  ): void;
  public listAuditTasks(
    args: ListAuditTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAuditTasksCommandOutput) => void
  ): void;
  public listAuditTasks(
    args: ListAuditTasksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAuditTasksCommandOutput) => void),
    cb?: (err: any, data?: ListAuditTasksCommandOutput) => void
  ): Promise<ListAuditTasksCommandOutput> | void {
    const command = new ListAuditTasksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the authorizers registered in your account.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuthorizers</a> action.</p>
   */
  public listAuthorizers(
    args: ListAuthorizersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAuthorizersCommandOutput>;
  public listAuthorizers(
    args: ListAuthorizersCommandInput,
    cb: (err: any, data?: ListAuthorizersCommandOutput) => void
  ): void;
  public listAuthorizers(
    args: ListAuthorizersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAuthorizersCommandOutput) => void
  ): void;
  public listAuthorizers(
    args: ListAuthorizersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAuthorizersCommandOutput) => void),
    cb?: (err: any, data?: ListAuthorizersCommandOutput) => void
  ): Promise<ListAuthorizersCommandOutput> | void {
    const command = new ListAuthorizersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the billing groups you have created.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListBillingGroups</a> action.</p>
   */
  public listBillingGroups(
    args: ListBillingGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBillingGroupsCommandOutput>;
  public listBillingGroups(
    args: ListBillingGroupsCommandInput,
    cb: (err: any, data?: ListBillingGroupsCommandOutput) => void
  ): void;
  public listBillingGroups(
    args: ListBillingGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBillingGroupsCommandOutput) => void
  ): void;
  public listBillingGroups(
    args: ListBillingGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBillingGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListBillingGroupsCommandOutput) => void
  ): Promise<ListBillingGroupsCommandOutput> | void {
    const command = new ListBillingGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the CA certificates registered for your Amazon Web Services account.</p>
   *          <p>The results are paginated with a default page size of 25. You can use the returned
   *          marker to retrieve additional results.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCACertificates</a> action.</p>
   */
  public listCACertificates(
    args: ListCACertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCACertificatesCommandOutput>;
  public listCACertificates(
    args: ListCACertificatesCommandInput,
    cb: (err: any, data?: ListCACertificatesCommandOutput) => void
  ): void;
  public listCACertificates(
    args: ListCACertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCACertificatesCommandOutput) => void
  ): void;
  public listCACertificates(
    args: ListCACertificatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCACertificatesCommandOutput) => void),
    cb?: (err: any, data?: ListCACertificatesCommandOutput) => void
  ): Promise<ListCACertificatesCommandOutput> | void {
    const command = new ListCACertificatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the certificates registered in your Amazon Web Services account.</p>
   *          <p>The results are paginated with a default page size of 25. You can use the returned
   *          marker to retrieve additional results.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCertificates</a> action.</p>
   */
  public listCertificates(
    args: ListCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCertificatesCommandOutput>;
  public listCertificates(
    args: ListCertificatesCommandInput,
    cb: (err: any, data?: ListCertificatesCommandOutput) => void
  ): void;
  public listCertificates(
    args: ListCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCertificatesCommandOutput) => void
  ): void;
  public listCertificates(
    args: ListCertificatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCertificatesCommandOutput) => void),
    cb?: (err: any, data?: ListCertificatesCommandOutput) => void
  ): Promise<ListCertificatesCommandOutput> | void {
    const command = new ListCertificatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List the device certificates signed by the specified CA certificate.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCertificatesByCA</a> action.</p>
   */
  public listCertificatesByCA(
    args: ListCertificatesByCACommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCertificatesByCACommandOutput>;
  public listCertificatesByCA(
    args: ListCertificatesByCACommandInput,
    cb: (err: any, data?: ListCertificatesByCACommandOutput) => void
  ): void;
  public listCertificatesByCA(
    args: ListCertificatesByCACommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCertificatesByCACommandOutput) => void
  ): void;
  public listCertificatesByCA(
    args: ListCertificatesByCACommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCertificatesByCACommandOutput) => void),
    cb?: (err: any, data?: ListCertificatesByCACommandOutput) => void
  ): Promise<ListCertificatesByCACommandOutput> | void {
    const command = new ListCertificatesByCACommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *       Lists your Device Defender detect custom metrics.
   *     </p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCustomMetrics</a> action.</p>
   */
  public listCustomMetrics(
    args: ListCustomMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomMetricsCommandOutput>;
  public listCustomMetrics(
    args: ListCustomMetricsCommandInput,
    cb: (err: any, data?: ListCustomMetricsCommandOutput) => void
  ): void;
  public listCustomMetrics(
    args: ListCustomMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomMetricsCommandOutput) => void
  ): void;
  public listCustomMetrics(
    args: ListCustomMetricsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCustomMetricsCommandOutput) => void),
    cb?: (err: any, data?: ListCustomMetricsCommandOutput) => void
  ): Promise<ListCustomMetricsCommandOutput> | void {
    const command = new ListCustomMetricsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *       Lists mitigation actions executions for a Device Defender ML Detect Security Profile.
   *     </p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDetectMitigationActionsExecutions</a> action.</p>
   */
  public listDetectMitigationActionsExecutions(
    args: ListDetectMitigationActionsExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDetectMitigationActionsExecutionsCommandOutput>;
  public listDetectMitigationActionsExecutions(
    args: ListDetectMitigationActionsExecutionsCommandInput,
    cb: (err: any, data?: ListDetectMitigationActionsExecutionsCommandOutput) => void
  ): void;
  public listDetectMitigationActionsExecutions(
    args: ListDetectMitigationActionsExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDetectMitigationActionsExecutionsCommandOutput) => void
  ): void;
  public listDetectMitigationActionsExecutions(
    args: ListDetectMitigationActionsExecutionsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListDetectMitigationActionsExecutionsCommandOutput) => void),
    cb?: (err: any, data?: ListDetectMitigationActionsExecutionsCommandOutput) => void
  ): Promise<ListDetectMitigationActionsExecutionsCommandOutput> | void {
    const command = new ListDetectMitigationActionsExecutionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *       List of Device Defender ML Detect mitigation actions tasks.
   *     </p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDetectMitigationActionsTasks</a> action.</p>
   */
  public listDetectMitigationActionsTasks(
    args: ListDetectMitigationActionsTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDetectMitigationActionsTasksCommandOutput>;
  public listDetectMitigationActionsTasks(
    args: ListDetectMitigationActionsTasksCommandInput,
    cb: (err: any, data?: ListDetectMitigationActionsTasksCommandOutput) => void
  ): void;
  public listDetectMitigationActionsTasks(
    args: ListDetectMitigationActionsTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDetectMitigationActionsTasksCommandOutput) => void
  ): void;
  public listDetectMitigationActionsTasks(
    args: ListDetectMitigationActionsTasksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDetectMitigationActionsTasksCommandOutput) => void),
    cb?: (err: any, data?: ListDetectMitigationActionsTasksCommandOutput) => void
  ): Promise<ListDetectMitigationActionsTasksCommandOutput> | void {
    const command = new ListDetectMitigationActionsTasksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List the set of dimensions that are defined for your Amazon Web Services accounts.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDimensions</a> action.</p>
   */
  public listDimensions(
    args: ListDimensionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDimensionsCommandOutput>;
  public listDimensions(
    args: ListDimensionsCommandInput,
    cb: (err: any, data?: ListDimensionsCommandOutput) => void
  ): void;
  public listDimensions(
    args: ListDimensionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDimensionsCommandOutput) => void
  ): void;
  public listDimensions(
    args: ListDimensionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDimensionsCommandOutput) => void),
    cb?: (err: any, data?: ListDimensionsCommandOutput) => void
  ): Promise<ListDimensionsCommandOutput> | void {
    const command = new ListDimensionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a list of domain configurations for the user. This list is sorted
   *          alphabetically by domain configuration name.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDomainConfigurations</a> action.</p>
   */
  public listDomainConfigurations(
    args: ListDomainConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainConfigurationsCommandOutput>;
  public listDomainConfigurations(
    args: ListDomainConfigurationsCommandInput,
    cb: (err: any, data?: ListDomainConfigurationsCommandOutput) => void
  ): void;
  public listDomainConfigurations(
    args: ListDomainConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainConfigurationsCommandOutput) => void
  ): void;
  public listDomainConfigurations(
    args: ListDomainConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDomainConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: ListDomainConfigurationsCommandOutput) => void
  ): Promise<ListDomainConfigurationsCommandOutput> | void {
    const command = new ListDomainConfigurationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all your fleet metrics. </p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListFleetMetrics</a> action.</p>
   */
  public listFleetMetrics(
    args: ListFleetMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFleetMetricsCommandOutput>;
  public listFleetMetrics(
    args: ListFleetMetricsCommandInput,
    cb: (err: any, data?: ListFleetMetricsCommandOutput) => void
  ): void;
  public listFleetMetrics(
    args: ListFleetMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFleetMetricsCommandOutput) => void
  ): void;
  public listFleetMetrics(
    args: ListFleetMetricsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFleetMetricsCommandOutput) => void),
    cb?: (err: any, data?: ListFleetMetricsCommandOutput) => void
  ): Promise<ListFleetMetricsCommandOutput> | void {
    const command = new ListFleetMetricsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the search indices.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListIndices</a> action.</p>
   */
  public listIndices(args: ListIndicesCommandInput, options?: __HttpHandlerOptions): Promise<ListIndicesCommandOutput>;
  public listIndices(args: ListIndicesCommandInput, cb: (err: any, data?: ListIndicesCommandOutput) => void): void;
  public listIndices(
    args: ListIndicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIndicesCommandOutput) => void
  ): void;
  public listIndices(
    args: ListIndicesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListIndicesCommandOutput) => void),
    cb?: (err: any, data?: ListIndicesCommandOutput) => void
  ): Promise<ListIndicesCommandOutput> | void {
    const command = new ListIndicesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the job executions for a job.</p>
   *         <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobExecutionsForJob</a> action.</p>
   */
  public listJobExecutionsForJob(
    args: ListJobExecutionsForJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJobExecutionsForJobCommandOutput>;
  public listJobExecutionsForJob(
    args: ListJobExecutionsForJobCommandInput,
    cb: (err: any, data?: ListJobExecutionsForJobCommandOutput) => void
  ): void;
  public listJobExecutionsForJob(
    args: ListJobExecutionsForJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobExecutionsForJobCommandOutput) => void
  ): void;
  public listJobExecutionsForJob(
    args: ListJobExecutionsForJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListJobExecutionsForJobCommandOutput) => void),
    cb?: (err: any, data?: ListJobExecutionsForJobCommandOutput) => void
  ): Promise<ListJobExecutionsForJobCommandOutput> | void {
    const command = new ListJobExecutionsForJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the job executions for the specified thing.</p>
   *         <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobExecutionsForThing</a> action.</p>
   */
  public listJobExecutionsForThing(
    args: ListJobExecutionsForThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJobExecutionsForThingCommandOutput>;
  public listJobExecutionsForThing(
    args: ListJobExecutionsForThingCommandInput,
    cb: (err: any, data?: ListJobExecutionsForThingCommandOutput) => void
  ): void;
  public listJobExecutionsForThing(
    args: ListJobExecutionsForThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobExecutionsForThingCommandOutput) => void
  ): void;
  public listJobExecutionsForThing(
    args: ListJobExecutionsForThingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListJobExecutionsForThingCommandOutput) => void),
    cb?: (err: any, data?: ListJobExecutionsForThingCommandOutput) => void
  ): Promise<ListJobExecutionsForThingCommandOutput> | void {
    const command = new ListJobExecutionsForThingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists jobs.</p>
   *         <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobs</a> action.</p>
   */
  public listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
  public listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
  public listJobs(
    args: ListJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;
  public listJobs(
    args: ListJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListJobsCommandOutput) => void),
    cb?: (err: any, data?: ListJobsCommandOutput) => void
  ): Promise<ListJobsCommandOutput> | void {
    const command = new ListJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of job templates.</p>
   *         <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobTemplates</a> action.</p>
   */
  public listJobTemplates(
    args: ListJobTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJobTemplatesCommandOutput>;
  public listJobTemplates(
    args: ListJobTemplatesCommandInput,
    cb: (err: any, data?: ListJobTemplatesCommandOutput) => void
  ): void;
  public listJobTemplates(
    args: ListJobTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobTemplatesCommandOutput) => void
  ): void;
  public listJobTemplates(
    args: ListJobTemplatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListJobTemplatesCommandOutput) => void),
    cb?: (err: any, data?: ListJobTemplatesCommandOutput) => void
  ): Promise<ListJobTemplatesCommandOutput> | void {
    const command = new ListJobTemplatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of managed job templates.</p>
   */
  public listManagedJobTemplates(
    args: ListManagedJobTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedJobTemplatesCommandOutput>;
  public listManagedJobTemplates(
    args: ListManagedJobTemplatesCommandInput,
    cb: (err: any, data?: ListManagedJobTemplatesCommandOutput) => void
  ): void;
  public listManagedJobTemplates(
    args: ListManagedJobTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedJobTemplatesCommandOutput) => void
  ): void;
  public listManagedJobTemplates(
    args: ListManagedJobTemplatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListManagedJobTemplatesCommandOutput) => void),
    cb?: (err: any, data?: ListManagedJobTemplatesCommandOutput) => void
  ): Promise<ListManagedJobTemplatesCommandOutput> | void {
    const command = new ListManagedJobTemplatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the values reported for an IoT Device Defender metric (device-side metric, cloud-side metric, or custom metric)
   *       by the given thing during the specified time period.</p>
   */
  public listMetricValues(
    args: ListMetricValuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMetricValuesCommandOutput>;
  public listMetricValues(
    args: ListMetricValuesCommandInput,
    cb: (err: any, data?: ListMetricValuesCommandOutput) => void
  ): void;
  public listMetricValues(
    args: ListMetricValuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMetricValuesCommandOutput) => void
  ): void;
  public listMetricValues(
    args: ListMetricValuesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMetricValuesCommandOutput) => void),
    cb?: (err: any, data?: ListMetricValuesCommandOutput) => void
  ): Promise<ListMetricValuesCommandOutput> | void {
    const command = new ListMetricValuesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a list of all mitigation actions that match the specified filter criteria.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListMitigationActions</a> action.</p>
   */
  public listMitigationActions(
    args: ListMitigationActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMitigationActionsCommandOutput>;
  public listMitigationActions(
    args: ListMitigationActionsCommandInput,
    cb: (err: any, data?: ListMitigationActionsCommandOutput) => void
  ): void;
  public listMitigationActions(
    args: ListMitigationActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMitigationActionsCommandOutput) => void
  ): void;
  public listMitigationActions(
    args: ListMitigationActionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMitigationActionsCommandOutput) => void),
    cb?: (err: any, data?: ListMitigationActionsCommandOutput) => void
  ): Promise<ListMitigationActionsCommandOutput> | void {
    const command = new ListMitigationActionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists OTA updates.</p>
   *         <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListOTAUpdates</a> action.</p>
   */
  public listOTAUpdates(
    args: ListOTAUpdatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOTAUpdatesCommandOutput>;
  public listOTAUpdates(
    args: ListOTAUpdatesCommandInput,
    cb: (err: any, data?: ListOTAUpdatesCommandOutput) => void
  ): void;
  public listOTAUpdates(
    args: ListOTAUpdatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOTAUpdatesCommandOutput) => void
  ): void;
  public listOTAUpdates(
    args: ListOTAUpdatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListOTAUpdatesCommandOutput) => void),
    cb?: (err: any, data?: ListOTAUpdatesCommandOutput) => void
  ): Promise<ListOTAUpdatesCommandOutput> | void {
    const command = new ListOTAUpdatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists certificates that are being transferred but not yet accepted.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListOutgoingCertificates</a> action.</p>
   */
  public listOutgoingCertificates(
    args: ListOutgoingCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOutgoingCertificatesCommandOutput>;
  public listOutgoingCertificates(
    args: ListOutgoingCertificatesCommandInput,
    cb: (err: any, data?: ListOutgoingCertificatesCommandOutput) => void
  ): void;
  public listOutgoingCertificates(
    args: ListOutgoingCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOutgoingCertificatesCommandOutput) => void
  ): void;
  public listOutgoingCertificates(
    args: ListOutgoingCertificatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListOutgoingCertificatesCommandOutput) => void),
    cb?: (err: any, data?: ListOutgoingCertificatesCommandOutput) => void
  ): Promise<ListOutgoingCertificatesCommandOutput> | void {
    const command = new ListOutgoingCertificatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists your policies.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPolicies</a> action.</p>
   */
  public listPolicies(
    args: ListPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPoliciesCommandOutput>;
  public listPolicies(args: ListPoliciesCommandInput, cb: (err: any, data?: ListPoliciesCommandOutput) => void): void;
  public listPolicies(
    args: ListPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPoliciesCommandOutput) => void
  ): void;
  public listPolicies(
    args: ListPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListPoliciesCommandOutput) => void
  ): Promise<ListPoliciesCommandOutput> | void {
    const command = new ListPoliciesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @deprecated
   *
   * <p>Lists the principals associated with the specified policy.</p>
   *          <p>
   *             <b>Note:</b> This action is deprecated and works as
   *          expected for backward compatibility, but we won't add enhancements. Use <a>ListTargetsForPolicy</a> instead.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPolicyPrincipals</a> action.</p>
   */
  public listPolicyPrincipals(
    args: ListPolicyPrincipalsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPolicyPrincipalsCommandOutput>;
  public listPolicyPrincipals(
    args: ListPolicyPrincipalsCommandInput,
    cb: (err: any, data?: ListPolicyPrincipalsCommandOutput) => void
  ): void;
  public listPolicyPrincipals(
    args: ListPolicyPrincipalsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPolicyPrincipalsCommandOutput) => void
  ): void;
  public listPolicyPrincipals(
    args: ListPolicyPrincipalsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPolicyPrincipalsCommandOutput) => void),
    cb?: (err: any, data?: ListPolicyPrincipalsCommandOutput) => void
  ): Promise<ListPolicyPrincipalsCommandOutput> | void {
    const command = new ListPolicyPrincipalsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the versions of the specified policy and identifies the default
   *          version.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPolicyVersions</a> action.</p>
   */
  public listPolicyVersions(
    args: ListPolicyVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPolicyVersionsCommandOutput>;
  public listPolicyVersions(
    args: ListPolicyVersionsCommandInput,
    cb: (err: any, data?: ListPolicyVersionsCommandOutput) => void
  ): void;
  public listPolicyVersions(
    args: ListPolicyVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPolicyVersionsCommandOutput) => void
  ): void;
  public listPolicyVersions(
    args: ListPolicyVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPolicyVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListPolicyVersionsCommandOutput) => void
  ): Promise<ListPolicyVersionsCommandOutput> | void {
    const command = new ListPolicyVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @deprecated
   *
   * <p>Lists the policies attached to the specified principal. If you use an Cognito
   *          identity, the ID must be in <a href="https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetCredentialsForIdentity.html#API_GetCredentialsForIdentity_RequestSyntax">AmazonCognito Identity format</a>.</p>
   *          <p>
   *             <b>Note:</b> This action is deprecated and works as
   *          expected for backward compatibility, but we won't add enhancements. Use <a>ListAttachedPolicies</a> instead.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPrincipalPolicies</a> action.</p>
   */
  public listPrincipalPolicies(
    args: ListPrincipalPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPrincipalPoliciesCommandOutput>;
  public listPrincipalPolicies(
    args: ListPrincipalPoliciesCommandInput,
    cb: (err: any, data?: ListPrincipalPoliciesCommandOutput) => void
  ): void;
  public listPrincipalPolicies(
    args: ListPrincipalPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPrincipalPoliciesCommandOutput) => void
  ): void;
  public listPrincipalPolicies(
    args: ListPrincipalPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPrincipalPoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListPrincipalPoliciesCommandOutput) => void
  ): Promise<ListPrincipalPoliciesCommandOutput> | void {
    const command = new ListPrincipalPoliciesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the things associated with the specified principal. A principal can be X.509
   * 			certificates, IAM users, groups, and roles, Amazon Cognito identities or federated
   * 			identities. </p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPrincipalThings</a> action.</p>
   */
  public listPrincipalThings(
    args: ListPrincipalThingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPrincipalThingsCommandOutput>;
  public listPrincipalThings(
    args: ListPrincipalThingsCommandInput,
    cb: (err: any, data?: ListPrincipalThingsCommandOutput) => void
  ): void;
  public listPrincipalThings(
    args: ListPrincipalThingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPrincipalThingsCommandOutput) => void
  ): void;
  public listPrincipalThings(
    args: ListPrincipalThingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPrincipalThingsCommandOutput) => void),
    cb?: (err: any, data?: ListPrincipalThingsCommandOutput) => void
  ): Promise<ListPrincipalThingsCommandOutput> | void {
    const command = new ListPrincipalThingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the provisioning templates in your Amazon Web Services account.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListProvisioningTemplates</a> action.</p>
   */
  public listProvisioningTemplates(
    args: ListProvisioningTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProvisioningTemplatesCommandOutput>;
  public listProvisioningTemplates(
    args: ListProvisioningTemplatesCommandInput,
    cb: (err: any, data?: ListProvisioningTemplatesCommandOutput) => void
  ): void;
  public listProvisioningTemplates(
    args: ListProvisioningTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProvisioningTemplatesCommandOutput) => void
  ): void;
  public listProvisioningTemplates(
    args: ListProvisioningTemplatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProvisioningTemplatesCommandOutput) => void),
    cb?: (err: any, data?: ListProvisioningTemplatesCommandOutput) => void
  ): Promise<ListProvisioningTemplatesCommandOutput> | void {
    const command = new ListProvisioningTemplatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>A list of provisioning template versions.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListProvisioningTemplateVersions</a> action.</p>
   */
  public listProvisioningTemplateVersions(
    args: ListProvisioningTemplateVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProvisioningTemplateVersionsCommandOutput>;
  public listProvisioningTemplateVersions(
    args: ListProvisioningTemplateVersionsCommandInput,
    cb: (err: any, data?: ListProvisioningTemplateVersionsCommandOutput) => void
  ): void;
  public listProvisioningTemplateVersions(
    args: ListProvisioningTemplateVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProvisioningTemplateVersionsCommandOutput) => void
  ): void;
  public listProvisioningTemplateVersions(
    args: ListProvisioningTemplateVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProvisioningTemplateVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListProvisioningTemplateVersionsCommandOutput) => void
  ): Promise<ListProvisioningTemplateVersionsCommandOutput> | void {
    const command = new ListProvisioningTemplateVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>The related resources of an Audit finding.
   *       The following resources can be returned from calling this API:</p>
   *          <ul>
   *             <li>
   *                <p>DEVICE_CERTIFICATE</p>
   *             </li>
   *             <li>
   *                <p>CA_CERTIFICATE</p>
   *             </li>
   *             <li>
   *                <p>IOT_POLICY</p>
   *             </li>
   *             <li>
   *                <p>COGNITO_IDENTITY_POOL</p>
   *             </li>
   *             <li>
   *                <p>CLIENT_ID</p>
   *             </li>
   *             <li>
   *                <p>ACCOUNT_SETTINGS</p>
   *             </li>
   *             <li>
   *                <p>ROLE_ALIAS</p>
   *             </li>
   *             <li>
   *                <p>IAM_ROLE</p>
   *             </li>
   *             <li>
   *                <p>ISSUER_CERTIFICATE</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>This API is similar to DescribeAuditFinding's <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditFinding.html">RelatedResources</a>
   *       but provides pagination and is not limited to 10 resources.
   *       When calling <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditFinding.html">DescribeAuditFinding</a> for the intermediate CA revoked for
   *       active device certificates check, RelatedResources will not be populated. You must use this API, ListRelatedResourcesForAuditFinding, to list the certificates.</p>
   *          </note>
   */
  public listRelatedResourcesForAuditFinding(
    args: ListRelatedResourcesForAuditFindingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRelatedResourcesForAuditFindingCommandOutput>;
  public listRelatedResourcesForAuditFinding(
    args: ListRelatedResourcesForAuditFindingCommandInput,
    cb: (err: any, data?: ListRelatedResourcesForAuditFindingCommandOutput) => void
  ): void;
  public listRelatedResourcesForAuditFinding(
    args: ListRelatedResourcesForAuditFindingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRelatedResourcesForAuditFindingCommandOutput) => void
  ): void;
  public listRelatedResourcesForAuditFinding(
    args: ListRelatedResourcesForAuditFindingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRelatedResourcesForAuditFindingCommandOutput) => void),
    cb?: (err: any, data?: ListRelatedResourcesForAuditFindingCommandOutput) => void
  ): Promise<ListRelatedResourcesForAuditFindingCommandOutput> | void {
    const command = new ListRelatedResourcesForAuditFindingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the role aliases registered in your account.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListRoleAliases</a> action.</p>
   */
  public listRoleAliases(
    args: ListRoleAliasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRoleAliasesCommandOutput>;
  public listRoleAliases(
    args: ListRoleAliasesCommandInput,
    cb: (err: any, data?: ListRoleAliasesCommandOutput) => void
  ): void;
  public listRoleAliases(
    args: ListRoleAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRoleAliasesCommandOutput) => void
  ): void;
  public listRoleAliases(
    args: ListRoleAliasesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRoleAliasesCommandOutput) => void),
    cb?: (err: any, data?: ListRoleAliasesCommandOutput) => void
  ): Promise<ListRoleAliasesCommandOutput> | void {
    const command = new ListRoleAliasesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all of your scheduled audits.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListScheduledAudits</a> action.</p>
   */
  public listScheduledAudits(
    args: ListScheduledAuditsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListScheduledAuditsCommandOutput>;
  public listScheduledAudits(
    args: ListScheduledAuditsCommandInput,
    cb: (err: any, data?: ListScheduledAuditsCommandOutput) => void
  ): void;
  public listScheduledAudits(
    args: ListScheduledAuditsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListScheduledAuditsCommandOutput) => void
  ): void;
  public listScheduledAudits(
    args: ListScheduledAuditsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListScheduledAuditsCommandOutput) => void),
    cb?: (err: any, data?: ListScheduledAuditsCommandOutput) => void
  ): Promise<ListScheduledAuditsCommandOutput> | void {
    const command = new ListScheduledAuditsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the Device Defender security profiles
   *       you've
   *       created. You can filter security profiles by dimension or custom metric.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSecurityProfiles</a> action.</p>
   *          <note>
   *             <p>
   *                <code>dimensionName</code> and <code>metricName</code> cannot be used in the same request.</p>
   *          </note>
   */
  public listSecurityProfiles(
    args: ListSecurityProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSecurityProfilesCommandOutput>;
  public listSecurityProfiles(
    args: ListSecurityProfilesCommandInput,
    cb: (err: any, data?: ListSecurityProfilesCommandOutput) => void
  ): void;
  public listSecurityProfiles(
    args: ListSecurityProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecurityProfilesCommandOutput) => void
  ): void;
  public listSecurityProfiles(
    args: ListSecurityProfilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSecurityProfilesCommandOutput) => void),
    cb?: (err: any, data?: ListSecurityProfilesCommandOutput) => void
  ): Promise<ListSecurityProfilesCommandOutput> | void {
    const command = new ListSecurityProfilesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the Device Defender security profiles attached to a target (thing group).</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSecurityProfilesForTarget</a> action.</p>
   */
  public listSecurityProfilesForTarget(
    args: ListSecurityProfilesForTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSecurityProfilesForTargetCommandOutput>;
  public listSecurityProfilesForTarget(
    args: ListSecurityProfilesForTargetCommandInput,
    cb: (err: any, data?: ListSecurityProfilesForTargetCommandOutput) => void
  ): void;
  public listSecurityProfilesForTarget(
    args: ListSecurityProfilesForTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecurityProfilesForTargetCommandOutput) => void
  ): void;
  public listSecurityProfilesForTarget(
    args: ListSecurityProfilesForTargetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSecurityProfilesForTargetCommandOutput) => void),
    cb?: (err: any, data?: ListSecurityProfilesForTargetCommandOutput) => void
  ): Promise<ListSecurityProfilesForTargetCommandOutput> | void {
    const command = new ListSecurityProfilesForTargetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all of the streams in your Amazon Web Services account.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListStreams</a> action.</p>
   */
  public listStreams(args: ListStreamsCommandInput, options?: __HttpHandlerOptions): Promise<ListStreamsCommandOutput>;
  public listStreams(args: ListStreamsCommandInput, cb: (err: any, data?: ListStreamsCommandOutput) => void): void;
  public listStreams(
    args: ListStreamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamsCommandOutput) => void
  ): void;
  public listStreams(
    args: ListStreamsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStreamsCommandOutput) => void),
    cb?: (err: any, data?: ListStreamsCommandOutput) => void
  ): Promise<ListStreamsCommandOutput> | void {
    const command = new ListStreamsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the tags (metadata) you have assigned to the resource.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTagsForResource</a> action.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List targets for the specified policy.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTargetsForPolicy</a> action.</p>
   */
  public listTargetsForPolicy(
    args: ListTargetsForPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTargetsForPolicyCommandOutput>;
  public listTargetsForPolicy(
    args: ListTargetsForPolicyCommandInput,
    cb: (err: any, data?: ListTargetsForPolicyCommandOutput) => void
  ): void;
  public listTargetsForPolicy(
    args: ListTargetsForPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTargetsForPolicyCommandOutput) => void
  ): void;
  public listTargetsForPolicy(
    args: ListTargetsForPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTargetsForPolicyCommandOutput) => void),
    cb?: (err: any, data?: ListTargetsForPolicyCommandOutput) => void
  ): Promise<ListTargetsForPolicyCommandOutput> | void {
    const command = new ListTargetsForPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the targets (thing groups) associated with a given Device Defender security profile.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTargetsForSecurityProfile</a> action.</p>
   */
  public listTargetsForSecurityProfile(
    args: ListTargetsForSecurityProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTargetsForSecurityProfileCommandOutput>;
  public listTargetsForSecurityProfile(
    args: ListTargetsForSecurityProfileCommandInput,
    cb: (err: any, data?: ListTargetsForSecurityProfileCommandOutput) => void
  ): void;
  public listTargetsForSecurityProfile(
    args: ListTargetsForSecurityProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTargetsForSecurityProfileCommandOutput) => void
  ): void;
  public listTargetsForSecurityProfile(
    args: ListTargetsForSecurityProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTargetsForSecurityProfileCommandOutput) => void),
    cb?: (err: any, data?: ListTargetsForSecurityProfileCommandOutput) => void
  ): Promise<ListTargetsForSecurityProfileCommandOutput> | void {
    const command = new ListTargetsForSecurityProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List the thing groups in your account.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingGroups</a> action.</p>
   */
  public listThingGroups(
    args: ListThingGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListThingGroupsCommandOutput>;
  public listThingGroups(
    args: ListThingGroupsCommandInput,
    cb: (err: any, data?: ListThingGroupsCommandOutput) => void
  ): void;
  public listThingGroups(
    args: ListThingGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThingGroupsCommandOutput) => void
  ): void;
  public listThingGroups(
    args: ListThingGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListThingGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListThingGroupsCommandOutput) => void
  ): Promise<ListThingGroupsCommandOutput> | void {
    const command = new ListThingGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List the thing groups to which the specified thing belongs.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingGroupsForThing</a> action.</p>
   */
  public listThingGroupsForThing(
    args: ListThingGroupsForThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListThingGroupsForThingCommandOutput>;
  public listThingGroupsForThing(
    args: ListThingGroupsForThingCommandInput,
    cb: (err: any, data?: ListThingGroupsForThingCommandOutput) => void
  ): void;
  public listThingGroupsForThing(
    args: ListThingGroupsForThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThingGroupsForThingCommandOutput) => void
  ): void;
  public listThingGroupsForThing(
    args: ListThingGroupsForThingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListThingGroupsForThingCommandOutput) => void),
    cb?: (err: any, data?: ListThingGroupsForThingCommandOutput) => void
  ): Promise<ListThingGroupsForThingCommandOutput> | void {
    const command = new ListThingGroupsForThingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the principals associated with the specified thing. A principal can be X.509
   * 			certificates, IAM users, groups, and roles, Amazon Cognito identities or federated
   * 			identities.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingPrincipals</a> action.</p>
   */
  public listThingPrincipals(
    args: ListThingPrincipalsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListThingPrincipalsCommandOutput>;
  public listThingPrincipals(
    args: ListThingPrincipalsCommandInput,
    cb: (err: any, data?: ListThingPrincipalsCommandOutput) => void
  ): void;
  public listThingPrincipals(
    args: ListThingPrincipalsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThingPrincipalsCommandOutput) => void
  ): void;
  public listThingPrincipals(
    args: ListThingPrincipalsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListThingPrincipalsCommandOutput) => void),
    cb?: (err: any, data?: ListThingPrincipalsCommandOutput) => void
  ): Promise<ListThingPrincipalsCommandOutput> | void {
    const command = new ListThingPrincipalsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Information about the thing registration tasks.</p>
   */
  public listThingRegistrationTaskReports(
    args: ListThingRegistrationTaskReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListThingRegistrationTaskReportsCommandOutput>;
  public listThingRegistrationTaskReports(
    args: ListThingRegistrationTaskReportsCommandInput,
    cb: (err: any, data?: ListThingRegistrationTaskReportsCommandOutput) => void
  ): void;
  public listThingRegistrationTaskReports(
    args: ListThingRegistrationTaskReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThingRegistrationTaskReportsCommandOutput) => void
  ): void;
  public listThingRegistrationTaskReports(
    args: ListThingRegistrationTaskReportsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListThingRegistrationTaskReportsCommandOutput) => void),
    cb?: (err: any, data?: ListThingRegistrationTaskReportsCommandOutput) => void
  ): Promise<ListThingRegistrationTaskReportsCommandOutput> | void {
    const command = new ListThingRegistrationTaskReportsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List bulk thing provisioning tasks.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingRegistrationTasks</a> action.</p>
   */
  public listThingRegistrationTasks(
    args: ListThingRegistrationTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListThingRegistrationTasksCommandOutput>;
  public listThingRegistrationTasks(
    args: ListThingRegistrationTasksCommandInput,
    cb: (err: any, data?: ListThingRegistrationTasksCommandOutput) => void
  ): void;
  public listThingRegistrationTasks(
    args: ListThingRegistrationTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThingRegistrationTasksCommandOutput) => void
  ): void;
  public listThingRegistrationTasks(
    args: ListThingRegistrationTasksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListThingRegistrationTasksCommandOutput) => void),
    cb?: (err: any, data?: ListThingRegistrationTasksCommandOutput) => void
  ): Promise<ListThingRegistrationTasksCommandOutput> | void {
    const command = new ListThingRegistrationTasksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists your things. Use the <b>attributeName</b> and <b>attributeValue</b> parameters to filter your things. For example,
   * 			calling <code>ListThings</code> with attributeName=Color and attributeValue=Red
   * 			retrieves all things in the registry that contain an attribute <b>Color</b> with the value <b>Red</b>. For more
   * 			information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/thing-registry.html#list-things">List Things</a> from the <i>Amazon Web Services IoT Core Developer
   * 				Guide</i>.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThings</a> action.</p>
   *
   * 		       <note>
   * 			         <p>You will not be charged for calling this API if an <code>Access denied</code> error is returned. You will also not be charged if no attributes or pagination token was provided in request and no pagination token and no results were returned.</p>
   * 		       </note>
   */
  public listThings(args: ListThingsCommandInput, options?: __HttpHandlerOptions): Promise<ListThingsCommandOutput>;
  public listThings(args: ListThingsCommandInput, cb: (err: any, data?: ListThingsCommandOutput) => void): void;
  public listThings(
    args: ListThingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThingsCommandOutput) => void
  ): void;
  public listThings(
    args: ListThingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListThingsCommandOutput) => void),
    cb?: (err: any, data?: ListThingsCommandOutput) => void
  ): Promise<ListThingsCommandOutput> | void {
    const command = new ListThingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the things you have added to the given billing group.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingsInBillingGroup</a> action.</p>
   */
  public listThingsInBillingGroup(
    args: ListThingsInBillingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListThingsInBillingGroupCommandOutput>;
  public listThingsInBillingGroup(
    args: ListThingsInBillingGroupCommandInput,
    cb: (err: any, data?: ListThingsInBillingGroupCommandOutput) => void
  ): void;
  public listThingsInBillingGroup(
    args: ListThingsInBillingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThingsInBillingGroupCommandOutput) => void
  ): void;
  public listThingsInBillingGroup(
    args: ListThingsInBillingGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListThingsInBillingGroupCommandOutput) => void),
    cb?: (err: any, data?: ListThingsInBillingGroupCommandOutput) => void
  ): Promise<ListThingsInBillingGroupCommandOutput> | void {
    const command = new ListThingsInBillingGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the things in the specified group.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingsInThingGroup</a> action.</p>
   */
  public listThingsInThingGroup(
    args: ListThingsInThingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListThingsInThingGroupCommandOutput>;
  public listThingsInThingGroup(
    args: ListThingsInThingGroupCommandInput,
    cb: (err: any, data?: ListThingsInThingGroupCommandOutput) => void
  ): void;
  public listThingsInThingGroup(
    args: ListThingsInThingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThingsInThingGroupCommandOutput) => void
  ): void;
  public listThingsInThingGroup(
    args: ListThingsInThingGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListThingsInThingGroupCommandOutput) => void),
    cb?: (err: any, data?: ListThingsInThingGroupCommandOutput) => void
  ): Promise<ListThingsInThingGroupCommandOutput> | void {
    const command = new ListThingsInThingGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the existing thing types.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingTypes</a> action.</p>
   */
  public listThingTypes(
    args: ListThingTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListThingTypesCommandOutput>;
  public listThingTypes(
    args: ListThingTypesCommandInput,
    cb: (err: any, data?: ListThingTypesCommandOutput) => void
  ): void;
  public listThingTypes(
    args: ListThingTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThingTypesCommandOutput) => void
  ): void;
  public listThingTypes(
    args: ListThingTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListThingTypesCommandOutput) => void),
    cb?: (err: any, data?: ListThingTypesCommandOutput) => void
  ): Promise<ListThingTypesCommandOutput> | void {
    const command = new ListThingTypesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all the topic rule destinations in your Amazon Web Services account.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTopicRuleDestinations</a> action.</p>
   */
  public listTopicRuleDestinations(
    args: ListTopicRuleDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTopicRuleDestinationsCommandOutput>;
  public listTopicRuleDestinations(
    args: ListTopicRuleDestinationsCommandInput,
    cb: (err: any, data?: ListTopicRuleDestinationsCommandOutput) => void
  ): void;
  public listTopicRuleDestinations(
    args: ListTopicRuleDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTopicRuleDestinationsCommandOutput) => void
  ): void;
  public listTopicRuleDestinations(
    args: ListTopicRuleDestinationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTopicRuleDestinationsCommandOutput) => void),
    cb?: (err: any, data?: ListTopicRuleDestinationsCommandOutput) => void
  ): Promise<ListTopicRuleDestinationsCommandOutput> | void {
    const command = new ListTopicRuleDestinationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the rules for the specific topic.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTopicRules</a> action.</p>
   */
  public listTopicRules(
    args: ListTopicRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTopicRulesCommandOutput>;
  public listTopicRules(
    args: ListTopicRulesCommandInput,
    cb: (err: any, data?: ListTopicRulesCommandOutput) => void
  ): void;
  public listTopicRules(
    args: ListTopicRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTopicRulesCommandOutput) => void
  ): void;
  public listTopicRules(
    args: ListTopicRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTopicRulesCommandOutput) => void),
    cb?: (err: any, data?: ListTopicRulesCommandOutput) => void
  ): Promise<ListTopicRulesCommandOutput> | void {
    const command = new ListTopicRulesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists logging levels.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListV2LoggingLevels</a> action.</p>
   */
  public listV2LoggingLevels(
    args: ListV2LoggingLevelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListV2LoggingLevelsCommandOutput>;
  public listV2LoggingLevels(
    args: ListV2LoggingLevelsCommandInput,
    cb: (err: any, data?: ListV2LoggingLevelsCommandOutput) => void
  ): void;
  public listV2LoggingLevels(
    args: ListV2LoggingLevelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListV2LoggingLevelsCommandOutput) => void
  ): void;
  public listV2LoggingLevels(
    args: ListV2LoggingLevelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListV2LoggingLevelsCommandOutput) => void),
    cb?: (err: any, data?: ListV2LoggingLevelsCommandOutput) => void
  ): Promise<ListV2LoggingLevelsCommandOutput> | void {
    const command = new ListV2LoggingLevelsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the Device Defender security profile violations discovered during the given time period.
   *       You can use filters to limit the results to those alerts issued for a particular security profile,
   *       behavior, or thing (device).</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListViolationEvents</a> action.</p>
   */
  public listViolationEvents(
    args: ListViolationEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListViolationEventsCommandOutput>;
  public listViolationEvents(
    args: ListViolationEventsCommandInput,
    cb: (err: any, data?: ListViolationEventsCommandOutput) => void
  ): void;
  public listViolationEvents(
    args: ListViolationEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListViolationEventsCommandOutput) => void
  ): void;
  public listViolationEvents(
    args: ListViolationEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListViolationEventsCommandOutput) => void),
    cb?: (err: any, data?: ListViolationEventsCommandOutput) => void
  ): Promise<ListViolationEventsCommandOutput> | void {
    const command = new ListViolationEventsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Set a verification state and provide a description of that verification state on a violation (detect alarm).</p>
   */
  public putVerificationStateOnViolation(
    args: PutVerificationStateOnViolationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVerificationStateOnViolationCommandOutput>;
  public putVerificationStateOnViolation(
    args: PutVerificationStateOnViolationCommandInput,
    cb: (err: any, data?: PutVerificationStateOnViolationCommandOutput) => void
  ): void;
  public putVerificationStateOnViolation(
    args: PutVerificationStateOnViolationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVerificationStateOnViolationCommandOutput) => void
  ): void;
  public putVerificationStateOnViolation(
    args: PutVerificationStateOnViolationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutVerificationStateOnViolationCommandOutput) => void),
    cb?: (err: any, data?: PutVerificationStateOnViolationCommandOutput) => void
  ): Promise<PutVerificationStateOnViolationCommandOutput> | void {
    const command = new PutVerificationStateOnViolationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Registers a CA certificate with Amazon Web Services IoT Core. There is no limit to the number of CA
   *          certificates you can register in your Amazon Web Services account. You can register up to 10 CA
   *          certificates with the same <code>CA subject field</code> per Amazon Web Services account.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RegisterCACertificate</a> action.</p>
   */
  public registerCACertificate(
    args: RegisterCACertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterCACertificateCommandOutput>;
  public registerCACertificate(
    args: RegisterCACertificateCommandInput,
    cb: (err: any, data?: RegisterCACertificateCommandOutput) => void
  ): void;
  public registerCACertificate(
    args: RegisterCACertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterCACertificateCommandOutput) => void
  ): void;
  public registerCACertificate(
    args: RegisterCACertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterCACertificateCommandOutput) => void),
    cb?: (err: any, data?: RegisterCACertificateCommandOutput) => void
  ): Promise<RegisterCACertificateCommandOutput> | void {
    const command = new RegisterCACertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Registers a device certificate with IoT in the same <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CertificateDescription.html#iot-Type-CertificateDescription-certificateMode">certificate mode</a> as the signing CA. If you have more than one CA certificate that has the same subject field, you must
   *          specify the CA certificate that was used to sign the device certificate being
   *          registered.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RegisterCertificate</a> action.</p>
   */
  public registerCertificate(
    args: RegisterCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterCertificateCommandOutput>;
  public registerCertificate(
    args: RegisterCertificateCommandInput,
    cb: (err: any, data?: RegisterCertificateCommandOutput) => void
  ): void;
  public registerCertificate(
    args: RegisterCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterCertificateCommandOutput) => void
  ): void;
  public registerCertificate(
    args: RegisterCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterCertificateCommandOutput) => void),
    cb?: (err: any, data?: RegisterCertificateCommandOutput) => void
  ): Promise<RegisterCertificateCommandOutput> | void {
    const command = new RegisterCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Register a certificate that does not have a certificate authority (CA).
   *          For supported certificates, consult <a href="https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html#x509-cert-algorithms">
   *          Certificate signing algorithms supported by IoT</a>.
   *       </p>
   */
  public registerCertificateWithoutCA(
    args: RegisterCertificateWithoutCACommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterCertificateWithoutCACommandOutput>;
  public registerCertificateWithoutCA(
    args: RegisterCertificateWithoutCACommandInput,
    cb: (err: any, data?: RegisterCertificateWithoutCACommandOutput) => void
  ): void;
  public registerCertificateWithoutCA(
    args: RegisterCertificateWithoutCACommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterCertificateWithoutCACommandOutput) => void
  ): void;
  public registerCertificateWithoutCA(
    args: RegisterCertificateWithoutCACommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterCertificateWithoutCACommandOutput) => void),
    cb?: (err: any, data?: RegisterCertificateWithoutCACommandOutput) => void
  ): Promise<RegisterCertificateWithoutCACommandOutput> | void {
    const command = new RegisterCertificateWithoutCACommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provisions a thing in the device registry. RegisterThing calls other IoT control
   *          plane APIs. These calls might exceed your account level <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_iot">
   *             IoT Throttling Limits</a> and cause throttle errors. Please contact <a href="https://console.aws.amazon.com/support/home">Amazon Web Services Customer Support</a> to raise
   *          your throttling limits if necessary.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RegisterThing</a> action.</p>
   */
  public registerThing(
    args: RegisterThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterThingCommandOutput>;
  public registerThing(
    args: RegisterThingCommandInput,
    cb: (err: any, data?: RegisterThingCommandOutput) => void
  ): void;
  public registerThing(
    args: RegisterThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterThingCommandOutput) => void
  ): void;
  public registerThing(
    args: RegisterThingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterThingCommandOutput) => void),
    cb?: (err: any, data?: RegisterThingCommandOutput) => void
  ): Promise<RegisterThingCommandOutput> | void {
    const command = new RegisterThingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Rejects a pending certificate transfer. After IoT rejects a certificate transfer,
   *          the certificate status changes from <b>PENDING_TRANSFER</b> to
   *             <b>INACTIVE</b>.</p>
   *          <p>To check for pending certificate transfers, call <a>ListCertificates</a>
   *          to enumerate your certificates.</p>
   *          <p>This operation can only be called by the transfer destination. After it is called,
   *          the certificate will be returned to the source's account in the INACTIVE state.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RejectCertificateTransfer</a> action.</p>
   */
  public rejectCertificateTransfer(
    args: RejectCertificateTransferCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectCertificateTransferCommandOutput>;
  public rejectCertificateTransfer(
    args: RejectCertificateTransferCommandInput,
    cb: (err: any, data?: RejectCertificateTransferCommandOutput) => void
  ): void;
  public rejectCertificateTransfer(
    args: RejectCertificateTransferCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectCertificateTransferCommandOutput) => void
  ): void;
  public rejectCertificateTransfer(
    args: RejectCertificateTransferCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RejectCertificateTransferCommandOutput) => void),
    cb?: (err: any, data?: RejectCertificateTransferCommandOutput) => void
  ): Promise<RejectCertificateTransferCommandOutput> | void {
    const command = new RejectCertificateTransferCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the given thing from the billing group.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RemoveThingFromBillingGroup</a> action.</p>
   * 		       <note>
   *             <p>This call is asynchronous. It might take several seconds for the detachment to propagate.</p>
   *          </note>
   */
  public removeThingFromBillingGroup(
    args: RemoveThingFromBillingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveThingFromBillingGroupCommandOutput>;
  public removeThingFromBillingGroup(
    args: RemoveThingFromBillingGroupCommandInput,
    cb: (err: any, data?: RemoveThingFromBillingGroupCommandOutput) => void
  ): void;
  public removeThingFromBillingGroup(
    args: RemoveThingFromBillingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveThingFromBillingGroupCommandOutput) => void
  ): void;
  public removeThingFromBillingGroup(
    args: RemoveThingFromBillingGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveThingFromBillingGroupCommandOutput) => void),
    cb?: (err: any, data?: RemoveThingFromBillingGroupCommandOutput) => void
  ): Promise<RemoveThingFromBillingGroupCommandOutput> | void {
    const command = new RemoveThingFromBillingGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Remove the specified thing from the specified group.</p>
   * 		       <p>You must specify either a <code>thingGroupArn</code> or a
   * 			<code>thingGroupName</code> to identify the thing group and
   * 			either a <code>thingArn</code> or a <code>thingName</code> to
   * 			identify the thing to remove from the thing group.
   * 		</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RemoveThingFromThingGroup</a> action.</p>
   */
  public removeThingFromThingGroup(
    args: RemoveThingFromThingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveThingFromThingGroupCommandOutput>;
  public removeThingFromThingGroup(
    args: RemoveThingFromThingGroupCommandInput,
    cb: (err: any, data?: RemoveThingFromThingGroupCommandOutput) => void
  ): void;
  public removeThingFromThingGroup(
    args: RemoveThingFromThingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveThingFromThingGroupCommandOutput) => void
  ): void;
  public removeThingFromThingGroup(
    args: RemoveThingFromThingGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveThingFromThingGroupCommandOutput) => void),
    cb?: (err: any, data?: RemoveThingFromThingGroupCommandOutput) => void
  ): Promise<RemoveThingFromThingGroupCommandOutput> | void {
    const command = new RemoveThingFromThingGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Replaces the rule. You must specify all parameters for the new rule. Creating rules
   *          is an administrator-level action. Any user who has permission to create rules will be able
   *          to access data processed by the rule.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ReplaceTopicRule</a> action.</p>
   */
  public replaceTopicRule(
    args: ReplaceTopicRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReplaceTopicRuleCommandOutput>;
  public replaceTopicRule(
    args: ReplaceTopicRuleCommandInput,
    cb: (err: any, data?: ReplaceTopicRuleCommandOutput) => void
  ): void;
  public replaceTopicRule(
    args: ReplaceTopicRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReplaceTopicRuleCommandOutput) => void
  ): void;
  public replaceTopicRule(
    args: ReplaceTopicRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ReplaceTopicRuleCommandOutput) => void),
    cb?: (err: any, data?: ReplaceTopicRuleCommandOutput) => void
  ): Promise<ReplaceTopicRuleCommandOutput> | void {
    const command = new ReplaceTopicRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>The query search index.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SearchIndex</a> action.</p>
   */
  public searchIndex(args: SearchIndexCommandInput, options?: __HttpHandlerOptions): Promise<SearchIndexCommandOutput>;
  public searchIndex(args: SearchIndexCommandInput, cb: (err: any, data?: SearchIndexCommandOutput) => void): void;
  public searchIndex(
    args: SearchIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchIndexCommandOutput) => void
  ): void;
  public searchIndex(
    args: SearchIndexCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchIndexCommandOutput) => void),
    cb?: (err: any, data?: SearchIndexCommandOutput) => void
  ): Promise<SearchIndexCommandOutput> | void {
    const command = new SearchIndexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sets the default authorizer. This will be used if a websocket connection is made
   *          without specifying an authorizer.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetDefaultAuthorizer</a> action.</p>
   */
  public setDefaultAuthorizer(
    args: SetDefaultAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetDefaultAuthorizerCommandOutput>;
  public setDefaultAuthorizer(
    args: SetDefaultAuthorizerCommandInput,
    cb: (err: any, data?: SetDefaultAuthorizerCommandOutput) => void
  ): void;
  public setDefaultAuthorizer(
    args: SetDefaultAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetDefaultAuthorizerCommandOutput) => void
  ): void;
  public setDefaultAuthorizer(
    args: SetDefaultAuthorizerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetDefaultAuthorizerCommandOutput) => void),
    cb?: (err: any, data?: SetDefaultAuthorizerCommandOutput) => void
  ): Promise<SetDefaultAuthorizerCommandOutput> | void {
    const command = new SetDefaultAuthorizerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sets the specified version of the specified policy as the policy's default
   *          (operative) version. This action affects all certificates to which the policy is attached.
   *          To list the principals the policy is attached to, use the <a>ListPrincipalPolicies</a>
   *          action.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetDefaultPolicyVersion</a> action.</p>
   */
  public setDefaultPolicyVersion(
    args: SetDefaultPolicyVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetDefaultPolicyVersionCommandOutput>;
  public setDefaultPolicyVersion(
    args: SetDefaultPolicyVersionCommandInput,
    cb: (err: any, data?: SetDefaultPolicyVersionCommandOutput) => void
  ): void;
  public setDefaultPolicyVersion(
    args: SetDefaultPolicyVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetDefaultPolicyVersionCommandOutput) => void
  ): void;
  public setDefaultPolicyVersion(
    args: SetDefaultPolicyVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetDefaultPolicyVersionCommandOutput) => void),
    cb?: (err: any, data?: SetDefaultPolicyVersionCommandOutput) => void
  ): Promise<SetDefaultPolicyVersionCommandOutput> | void {
    const command = new SetDefaultPolicyVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sets the logging options.</p>
   *          <p>NOTE: use of this command is not recommended. Use <code>SetV2LoggingOptions</code>
   *          instead.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetLoggingOptions</a> action.</p>
   */
  public setLoggingOptions(
    args: SetLoggingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetLoggingOptionsCommandOutput>;
  public setLoggingOptions(
    args: SetLoggingOptionsCommandInput,
    cb: (err: any, data?: SetLoggingOptionsCommandOutput) => void
  ): void;
  public setLoggingOptions(
    args: SetLoggingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetLoggingOptionsCommandOutput) => void
  ): void;
  public setLoggingOptions(
    args: SetLoggingOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetLoggingOptionsCommandOutput) => void),
    cb?: (err: any, data?: SetLoggingOptionsCommandOutput) => void
  ): Promise<SetLoggingOptionsCommandOutput> | void {
    const command = new SetLoggingOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sets the logging level.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetV2LoggingLevel</a> action.</p>
   */
  public setV2LoggingLevel(
    args: SetV2LoggingLevelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetV2LoggingLevelCommandOutput>;
  public setV2LoggingLevel(
    args: SetV2LoggingLevelCommandInput,
    cb: (err: any, data?: SetV2LoggingLevelCommandOutput) => void
  ): void;
  public setV2LoggingLevel(
    args: SetV2LoggingLevelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetV2LoggingLevelCommandOutput) => void
  ): void;
  public setV2LoggingLevel(
    args: SetV2LoggingLevelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetV2LoggingLevelCommandOutput) => void),
    cb?: (err: any, data?: SetV2LoggingLevelCommandOutput) => void
  ): Promise<SetV2LoggingLevelCommandOutput> | void {
    const command = new SetV2LoggingLevelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sets the logging options for the V2 logging service.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetV2LoggingOptions</a> action.</p>
   */
  public setV2LoggingOptions(
    args: SetV2LoggingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetV2LoggingOptionsCommandOutput>;
  public setV2LoggingOptions(
    args: SetV2LoggingOptionsCommandInput,
    cb: (err: any, data?: SetV2LoggingOptionsCommandOutput) => void
  ): void;
  public setV2LoggingOptions(
    args: SetV2LoggingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetV2LoggingOptionsCommandOutput) => void
  ): void;
  public setV2LoggingOptions(
    args: SetV2LoggingOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetV2LoggingOptionsCommandOutput) => void),
    cb?: (err: any, data?: SetV2LoggingOptionsCommandOutput) => void
  ): Promise<SetV2LoggingOptionsCommandOutput> | void {
    const command = new SetV2LoggingOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a task that applies a set of mitigation actions to the specified target.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartAuditMitigationActionsTask</a> action.</p>
   */
  public startAuditMitigationActionsTask(
    args: StartAuditMitigationActionsTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAuditMitigationActionsTaskCommandOutput>;
  public startAuditMitigationActionsTask(
    args: StartAuditMitigationActionsTaskCommandInput,
    cb: (err: any, data?: StartAuditMitigationActionsTaskCommandOutput) => void
  ): void;
  public startAuditMitigationActionsTask(
    args: StartAuditMitigationActionsTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAuditMitigationActionsTaskCommandOutput) => void
  ): void;
  public startAuditMitigationActionsTask(
    args: StartAuditMitigationActionsTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartAuditMitigationActionsTaskCommandOutput) => void),
    cb?: (err: any, data?: StartAuditMitigationActionsTaskCommandOutput) => void
  ): Promise<StartAuditMitigationActionsTaskCommandOutput> | void {
    const command = new StartAuditMitigationActionsTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *       Starts a Device Defender ML Detect mitigation actions task.
   *     </p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartDetectMitigationActionsTask</a> action.</p>
   */
  public startDetectMitigationActionsTask(
    args: StartDetectMitigationActionsTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDetectMitigationActionsTaskCommandOutput>;
  public startDetectMitigationActionsTask(
    args: StartDetectMitigationActionsTaskCommandInput,
    cb: (err: any, data?: StartDetectMitigationActionsTaskCommandOutput) => void
  ): void;
  public startDetectMitigationActionsTask(
    args: StartDetectMitigationActionsTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDetectMitigationActionsTaskCommandOutput) => void
  ): void;
  public startDetectMitigationActionsTask(
    args: StartDetectMitigationActionsTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartDetectMitigationActionsTaskCommandOutput) => void),
    cb?: (err: any, data?: StartDetectMitigationActionsTaskCommandOutput) => void
  ): Promise<StartDetectMitigationActionsTaskCommandOutput> | void {
    const command = new StartDetectMitigationActionsTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts an on-demand Device Defender audit.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartOnDemandAuditTask</a> action.</p>
   */
  public startOnDemandAuditTask(
    args: StartOnDemandAuditTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartOnDemandAuditTaskCommandOutput>;
  public startOnDemandAuditTask(
    args: StartOnDemandAuditTaskCommandInput,
    cb: (err: any, data?: StartOnDemandAuditTaskCommandOutput) => void
  ): void;
  public startOnDemandAuditTask(
    args: StartOnDemandAuditTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartOnDemandAuditTaskCommandOutput) => void
  ): void;
  public startOnDemandAuditTask(
    args: StartOnDemandAuditTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartOnDemandAuditTaskCommandOutput) => void),
    cb?: (err: any, data?: StartOnDemandAuditTaskCommandOutput) => void
  ): Promise<StartOnDemandAuditTaskCommandOutput> | void {
    const command = new StartOnDemandAuditTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a bulk thing provisioning task.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartThingRegistrationTask</a> action.</p>
   */
  public startThingRegistrationTask(
    args: StartThingRegistrationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartThingRegistrationTaskCommandOutput>;
  public startThingRegistrationTask(
    args: StartThingRegistrationTaskCommandInput,
    cb: (err: any, data?: StartThingRegistrationTaskCommandOutput) => void
  ): void;
  public startThingRegistrationTask(
    args: StartThingRegistrationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartThingRegistrationTaskCommandOutput) => void
  ): void;
  public startThingRegistrationTask(
    args: StartThingRegistrationTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartThingRegistrationTaskCommandOutput) => void),
    cb?: (err: any, data?: StartThingRegistrationTaskCommandOutput) => void
  ): Promise<StartThingRegistrationTaskCommandOutput> | void {
    const command = new StartThingRegistrationTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels a bulk thing provisioning task.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StopThingRegistrationTask</a> action.</p>
   */
  public stopThingRegistrationTask(
    args: StopThingRegistrationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopThingRegistrationTaskCommandOutput>;
  public stopThingRegistrationTask(
    args: StopThingRegistrationTaskCommandInput,
    cb: (err: any, data?: StopThingRegistrationTaskCommandOutput) => void
  ): void;
  public stopThingRegistrationTask(
    args: StopThingRegistrationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopThingRegistrationTaskCommandOutput) => void
  ): void;
  public stopThingRegistrationTask(
    args: StopThingRegistrationTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopThingRegistrationTaskCommandOutput) => void),
    cb?: (err: any, data?: StopThingRegistrationTaskCommandOutput) => void
  ): Promise<StopThingRegistrationTaskCommandOutput> | void {
    const command = new StopThingRegistrationTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds to or modifies the tags of the given resource. Tags are metadata which can be
   * 			used to manage a resource.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TagResource</a> action.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Tests if a specified principal is authorized to perform an IoT action on a
   *          specified resource. Use this to test and debug the authorization behavior of devices that
   *          connect to the IoT device gateway.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TestAuthorization</a> action.</p>
   */
  public testAuthorization(
    args: TestAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestAuthorizationCommandOutput>;
  public testAuthorization(
    args: TestAuthorizationCommandInput,
    cb: (err: any, data?: TestAuthorizationCommandOutput) => void
  ): void;
  public testAuthorization(
    args: TestAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestAuthorizationCommandOutput) => void
  ): void;
  public testAuthorization(
    args: TestAuthorizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TestAuthorizationCommandOutput) => void),
    cb?: (err: any, data?: TestAuthorizationCommandOutput) => void
  ): Promise<TestAuthorizationCommandOutput> | void {
    const command = new TestAuthorizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Tests a custom authorization behavior by invoking a specified custom authorizer. Use
   *          this to test and debug the custom authorization behavior of devices that connect to the IoT
   *          device gateway.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TestInvokeAuthorizer</a> action.</p>
   */
  public testInvokeAuthorizer(
    args: TestInvokeAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestInvokeAuthorizerCommandOutput>;
  public testInvokeAuthorizer(
    args: TestInvokeAuthorizerCommandInput,
    cb: (err: any, data?: TestInvokeAuthorizerCommandOutput) => void
  ): void;
  public testInvokeAuthorizer(
    args: TestInvokeAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestInvokeAuthorizerCommandOutput) => void
  ): void;
  public testInvokeAuthorizer(
    args: TestInvokeAuthorizerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TestInvokeAuthorizerCommandOutput) => void),
    cb?: (err: any, data?: TestInvokeAuthorizerCommandOutput) => void
  ): Promise<TestInvokeAuthorizerCommandOutput> | void {
    const command = new TestInvokeAuthorizerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Transfers the specified certificate to the specified Amazon Web Services account.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TransferCertificate</a> action.</p>
   *
   *          <p>You can cancel the transfer until it is acknowledged by the recipient.</p>
   *          <p>No notification is sent to the transfer destination's account. It is up to the caller
   *          to notify the transfer target.</p>
   *          <p>The certificate being transferred must not be in the ACTIVE state. You can use the
   *          <a>UpdateCertificate</a> action to deactivate it.</p>
   *          <p>The certificate must not have any policies attached to it. You can use the
   *          <a>DetachPolicy</a> action to detach them.</p>
   */
  public transferCertificate(
    args: TransferCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TransferCertificateCommandOutput>;
  public transferCertificate(
    args: TransferCertificateCommandInput,
    cb: (err: any, data?: TransferCertificateCommandOutput) => void
  ): void;
  public transferCertificate(
    args: TransferCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TransferCertificateCommandOutput) => void
  ): void;
  public transferCertificate(
    args: TransferCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TransferCertificateCommandOutput) => void),
    cb?: (err: any, data?: TransferCertificateCommandOutput) => void
  ): Promise<TransferCertificateCommandOutput> | void {
    const command = new TransferCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the given tags (metadata) from the resource.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UntagResource</a> action.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Configures or reconfigures the Device Defender audit settings for this account.
   *           Settings include how audit notifications are sent and which audit checks are
   *           enabled or disabled.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateAccountAuditConfiguration</a> action.</p>
   */
  public updateAccountAuditConfiguration(
    args: UpdateAccountAuditConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountAuditConfigurationCommandOutput>;
  public updateAccountAuditConfiguration(
    args: UpdateAccountAuditConfigurationCommandInput,
    cb: (err: any, data?: UpdateAccountAuditConfigurationCommandOutput) => void
  ): void;
  public updateAccountAuditConfiguration(
    args: UpdateAccountAuditConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountAuditConfigurationCommandOutput) => void
  ): void;
  public updateAccountAuditConfiguration(
    args: UpdateAccountAuditConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAccountAuditConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateAccountAuditConfigurationCommandOutput) => void
  ): Promise<UpdateAccountAuditConfigurationCommandOutput> | void {
    const command = new UpdateAccountAuditConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *       Updates a Device Defender audit suppression.
   *     </p>
   */
  public updateAuditSuppression(
    args: UpdateAuditSuppressionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAuditSuppressionCommandOutput>;
  public updateAuditSuppression(
    args: UpdateAuditSuppressionCommandInput,
    cb: (err: any, data?: UpdateAuditSuppressionCommandOutput) => void
  ): void;
  public updateAuditSuppression(
    args: UpdateAuditSuppressionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAuditSuppressionCommandOutput) => void
  ): void;
  public updateAuditSuppression(
    args: UpdateAuditSuppressionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAuditSuppressionCommandOutput) => void),
    cb?: (err: any, data?: UpdateAuditSuppressionCommandOutput) => void
  ): Promise<UpdateAuditSuppressionCommandOutput> | void {
    const command = new UpdateAuditSuppressionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an authorizer.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateAuthorizer</a> action.</p>
   */
  public updateAuthorizer(
    args: UpdateAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAuthorizerCommandOutput>;
  public updateAuthorizer(
    args: UpdateAuthorizerCommandInput,
    cb: (err: any, data?: UpdateAuthorizerCommandOutput) => void
  ): void;
  public updateAuthorizer(
    args: UpdateAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAuthorizerCommandOutput) => void
  ): void;
  public updateAuthorizer(
    args: UpdateAuthorizerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAuthorizerCommandOutput) => void),
    cb?: (err: any, data?: UpdateAuthorizerCommandOutput) => void
  ): Promise<UpdateAuthorizerCommandOutput> | void {
    const command = new UpdateAuthorizerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates information about the billing group.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateBillingGroup</a> action.</p>
   */
  public updateBillingGroup(
    args: UpdateBillingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBillingGroupCommandOutput>;
  public updateBillingGroup(
    args: UpdateBillingGroupCommandInput,
    cb: (err: any, data?: UpdateBillingGroupCommandOutput) => void
  ): void;
  public updateBillingGroup(
    args: UpdateBillingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBillingGroupCommandOutput) => void
  ): void;
  public updateBillingGroup(
    args: UpdateBillingGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBillingGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateBillingGroupCommandOutput) => void
  ): Promise<UpdateBillingGroupCommandOutput> | void {
    const command = new UpdateBillingGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a registered CA certificate.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateCACertificate</a> action.</p>
   */
  public updateCACertificate(
    args: UpdateCACertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCACertificateCommandOutput>;
  public updateCACertificate(
    args: UpdateCACertificateCommandInput,
    cb: (err: any, data?: UpdateCACertificateCommandOutput) => void
  ): void;
  public updateCACertificate(
    args: UpdateCACertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCACertificateCommandOutput) => void
  ): void;
  public updateCACertificate(
    args: UpdateCACertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCACertificateCommandOutput) => void),
    cb?: (err: any, data?: UpdateCACertificateCommandOutput) => void
  ): Promise<UpdateCACertificateCommandOutput> | void {
    const command = new UpdateCACertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the status of the specified certificate. This operation is
   *          idempotent.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateCertificate</a> action.</p>
   *
   *          <p>Certificates must be in the ACTIVE state to authenticate devices that use
   *          a certificate to connect to IoT.</p>
   *          <p>Within a few minutes of updating a certificate from the ACTIVE state to any other
   *          state, IoT disconnects all devices that used that certificate to connect. Devices cannot
   *          use a certificate that is not in the ACTIVE state to reconnect.</p>
   */
  public updateCertificate(
    args: UpdateCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCertificateCommandOutput>;
  public updateCertificate(
    args: UpdateCertificateCommandInput,
    cb: (err: any, data?: UpdateCertificateCommandOutput) => void
  ): void;
  public updateCertificate(
    args: UpdateCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCertificateCommandOutput) => void
  ): void;
  public updateCertificate(
    args: UpdateCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCertificateCommandOutput) => void),
    cb?: (err: any, data?: UpdateCertificateCommandOutput) => void
  ): Promise<UpdateCertificateCommandOutput> | void {
    const command = new UpdateCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a
   *       Device Defender detect custom metric. </p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateCustomMetric</a> action.</p>
   */
  public updateCustomMetric(
    args: UpdateCustomMetricCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCustomMetricCommandOutput>;
  public updateCustomMetric(
    args: UpdateCustomMetricCommandInput,
    cb: (err: any, data?: UpdateCustomMetricCommandOutput) => void
  ): void;
  public updateCustomMetric(
    args: UpdateCustomMetricCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCustomMetricCommandOutput) => void
  ): void;
  public updateCustomMetric(
    args: UpdateCustomMetricCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCustomMetricCommandOutput) => void),
    cb?: (err: any, data?: UpdateCustomMetricCommandOutput) => void
  ): Promise<UpdateCustomMetricCommandOutput> | void {
    const command = new UpdateCustomMetricCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the definition for a dimension. You
   *       cannot
   *       change the type of a dimension after
   *       it is created (you can delete it and
   *       recreate
   *       it).</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateDimension</a> action.</p>
   */
  public updateDimension(
    args: UpdateDimensionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDimensionCommandOutput>;
  public updateDimension(
    args: UpdateDimensionCommandInput,
    cb: (err: any, data?: UpdateDimensionCommandOutput) => void
  ): void;
  public updateDimension(
    args: UpdateDimensionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDimensionCommandOutput) => void
  ): void;
  public updateDimension(
    args: UpdateDimensionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDimensionCommandOutput) => void),
    cb?: (err: any, data?: UpdateDimensionCommandOutput) => void
  ): Promise<UpdateDimensionCommandOutput> | void {
    const command = new UpdateDimensionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates values stored in the domain configuration. Domain configurations for default
   *          endpoints can't be updated.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateDomainConfiguration</a> action.</p>
   */
  public updateDomainConfiguration(
    args: UpdateDomainConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainConfigurationCommandOutput>;
  public updateDomainConfiguration(
    args: UpdateDomainConfigurationCommandInput,
    cb: (err: any, data?: UpdateDomainConfigurationCommandOutput) => void
  ): void;
  public updateDomainConfiguration(
    args: UpdateDomainConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainConfigurationCommandOutput) => void
  ): void;
  public updateDomainConfiguration(
    args: UpdateDomainConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDomainConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateDomainConfigurationCommandOutput) => void
  ): Promise<UpdateDomainConfigurationCommandOutput> | void {
    const command = new UpdateDomainConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a dynamic thing group.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateDynamicThingGroup</a> action.</p>
   */
  public updateDynamicThingGroup(
    args: UpdateDynamicThingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDynamicThingGroupCommandOutput>;
  public updateDynamicThingGroup(
    args: UpdateDynamicThingGroupCommandInput,
    cb: (err: any, data?: UpdateDynamicThingGroupCommandOutput) => void
  ): void;
  public updateDynamicThingGroup(
    args: UpdateDynamicThingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDynamicThingGroupCommandOutput) => void
  ): void;
  public updateDynamicThingGroup(
    args: UpdateDynamicThingGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDynamicThingGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateDynamicThingGroupCommandOutput) => void
  ): Promise<UpdateDynamicThingGroupCommandOutput> | void {
    const command = new UpdateDynamicThingGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the event configurations.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateEventConfigurations</a> action.</p>
   */
  public updateEventConfigurations(
    args: UpdateEventConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEventConfigurationsCommandOutput>;
  public updateEventConfigurations(
    args: UpdateEventConfigurationsCommandInput,
    cb: (err: any, data?: UpdateEventConfigurationsCommandOutput) => void
  ): void;
  public updateEventConfigurations(
    args: UpdateEventConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEventConfigurationsCommandOutput) => void
  ): void;
  public updateEventConfigurations(
    args: UpdateEventConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateEventConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: UpdateEventConfigurationsCommandOutput) => void
  ): Promise<UpdateEventConfigurationsCommandOutput> | void {
    const command = new UpdateEventConfigurationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the data for a fleet metric.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateFleetMetric</a> action.</p>
   */
  public updateFleetMetric(
    args: UpdateFleetMetricCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFleetMetricCommandOutput>;
  public updateFleetMetric(
    args: UpdateFleetMetricCommandInput,
    cb: (err: any, data?: UpdateFleetMetricCommandOutput) => void
  ): void;
  public updateFleetMetric(
    args: UpdateFleetMetricCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFleetMetricCommandOutput) => void
  ): void;
  public updateFleetMetric(
    args: UpdateFleetMetricCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFleetMetricCommandOutput) => void),
    cb?: (err: any, data?: UpdateFleetMetricCommandOutput) => void
  ): Promise<UpdateFleetMetricCommandOutput> | void {
    const command = new UpdateFleetMetricCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the search configuration.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateIndexingConfiguration</a> action.</p>
   */
  public updateIndexingConfiguration(
    args: UpdateIndexingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIndexingConfigurationCommandOutput>;
  public updateIndexingConfiguration(
    args: UpdateIndexingConfigurationCommandInput,
    cb: (err: any, data?: UpdateIndexingConfigurationCommandOutput) => void
  ): void;
  public updateIndexingConfiguration(
    args: UpdateIndexingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIndexingConfigurationCommandOutput) => void
  ): void;
  public updateIndexingConfiguration(
    args: UpdateIndexingConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateIndexingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateIndexingConfigurationCommandOutput) => void
  ): Promise<UpdateIndexingConfigurationCommandOutput> | void {
    const command = new UpdateIndexingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates supported fields of the specified job.</p>
   *         <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateJob</a> action.</p>
   */
  public updateJob(args: UpdateJobCommandInput, options?: __HttpHandlerOptions): Promise<UpdateJobCommandOutput>;
  public updateJob(args: UpdateJobCommandInput, cb: (err: any, data?: UpdateJobCommandOutput) => void): void;
  public updateJob(
    args: UpdateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateJobCommandOutput) => void
  ): void;
  public updateJob(
    args: UpdateJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateJobCommandOutput) => void),
    cb?: (err: any, data?: UpdateJobCommandOutput) => void
  ): Promise<UpdateJobCommandOutput> | void {
    const command = new UpdateJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the definition for the specified mitigation action.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateMitigationAction</a> action.</p>
   */
  public updateMitigationAction(
    args: UpdateMitigationActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMitigationActionCommandOutput>;
  public updateMitigationAction(
    args: UpdateMitigationActionCommandInput,
    cb: (err: any, data?: UpdateMitigationActionCommandOutput) => void
  ): void;
  public updateMitigationAction(
    args: UpdateMitigationActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMitigationActionCommandOutput) => void
  ): void;
  public updateMitigationAction(
    args: UpdateMitigationActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMitigationActionCommandOutput) => void),
    cb?: (err: any, data?: UpdateMitigationActionCommandOutput) => void
  ): Promise<UpdateMitigationActionCommandOutput> | void {
    const command = new UpdateMitigationActionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a provisioning template.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateProvisioningTemplate</a> action.</p>
   */
  public updateProvisioningTemplate(
    args: UpdateProvisioningTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProvisioningTemplateCommandOutput>;
  public updateProvisioningTemplate(
    args: UpdateProvisioningTemplateCommandInput,
    cb: (err: any, data?: UpdateProvisioningTemplateCommandOutput) => void
  ): void;
  public updateProvisioningTemplate(
    args: UpdateProvisioningTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProvisioningTemplateCommandOutput) => void
  ): void;
  public updateProvisioningTemplate(
    args: UpdateProvisioningTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateProvisioningTemplateCommandOutput) => void),
    cb?: (err: any, data?: UpdateProvisioningTemplateCommandOutput) => void
  ): Promise<UpdateProvisioningTemplateCommandOutput> | void {
    const command = new UpdateProvisioningTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a role alias.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateRoleAlias</a> action.</p>
   */
  public updateRoleAlias(
    args: UpdateRoleAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRoleAliasCommandOutput>;
  public updateRoleAlias(
    args: UpdateRoleAliasCommandInput,
    cb: (err: any, data?: UpdateRoleAliasCommandOutput) => void
  ): void;
  public updateRoleAlias(
    args: UpdateRoleAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoleAliasCommandOutput) => void
  ): void;
  public updateRoleAlias(
    args: UpdateRoleAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRoleAliasCommandOutput) => void),
    cb?: (err: any, data?: UpdateRoleAliasCommandOutput) => void
  ): Promise<UpdateRoleAliasCommandOutput> | void {
    const command = new UpdateRoleAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a scheduled audit, including which checks are performed and
   *           how often the audit takes place.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateScheduledAudit</a> action.</p>
   */
  public updateScheduledAudit(
    args: UpdateScheduledAuditCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateScheduledAuditCommandOutput>;
  public updateScheduledAudit(
    args: UpdateScheduledAuditCommandInput,
    cb: (err: any, data?: UpdateScheduledAuditCommandOutput) => void
  ): void;
  public updateScheduledAudit(
    args: UpdateScheduledAuditCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateScheduledAuditCommandOutput) => void
  ): void;
  public updateScheduledAudit(
    args: UpdateScheduledAuditCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateScheduledAuditCommandOutput) => void),
    cb?: (err: any, data?: UpdateScheduledAuditCommandOutput) => void
  ): Promise<UpdateScheduledAuditCommandOutput> | void {
    const command = new UpdateScheduledAuditCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a Device Defender security profile.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateSecurityProfile</a> action.</p>
   */
  public updateSecurityProfile(
    args: UpdateSecurityProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSecurityProfileCommandOutput>;
  public updateSecurityProfile(
    args: UpdateSecurityProfileCommandInput,
    cb: (err: any, data?: UpdateSecurityProfileCommandOutput) => void
  ): void;
  public updateSecurityProfile(
    args: UpdateSecurityProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSecurityProfileCommandOutput) => void
  ): void;
  public updateSecurityProfile(
    args: UpdateSecurityProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSecurityProfileCommandOutput) => void),
    cb?: (err: any, data?: UpdateSecurityProfileCommandOutput) => void
  ): Promise<UpdateSecurityProfileCommandOutput> | void {
    const command = new UpdateSecurityProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing stream. The stream version will be incremented by one.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateStream</a> action.</p>
   */
  public updateStream(
    args: UpdateStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStreamCommandOutput>;
  public updateStream(args: UpdateStreamCommandInput, cb: (err: any, data?: UpdateStreamCommandOutput) => void): void;
  public updateStream(
    args: UpdateStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStreamCommandOutput) => void
  ): void;
  public updateStream(
    args: UpdateStreamCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateStreamCommandOutput) => void),
    cb?: (err: any, data?: UpdateStreamCommandOutput) => void
  ): Promise<UpdateStreamCommandOutput> | void {
    const command = new UpdateStreamCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the data for a thing.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThing</a> action.</p>
   */
  public updateThing(args: UpdateThingCommandInput, options?: __HttpHandlerOptions): Promise<UpdateThingCommandOutput>;
  public updateThing(args: UpdateThingCommandInput, cb: (err: any, data?: UpdateThingCommandOutput) => void): void;
  public updateThing(
    args: UpdateThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateThingCommandOutput) => void
  ): void;
  public updateThing(
    args: UpdateThingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateThingCommandOutput) => void),
    cb?: (err: any, data?: UpdateThingCommandOutput) => void
  ): Promise<UpdateThingCommandOutput> | void {
    const command = new UpdateThingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update a thing group.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThingGroup</a> action.</p>
   */
  public updateThingGroup(
    args: UpdateThingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateThingGroupCommandOutput>;
  public updateThingGroup(
    args: UpdateThingGroupCommandInput,
    cb: (err: any, data?: UpdateThingGroupCommandOutput) => void
  ): void;
  public updateThingGroup(
    args: UpdateThingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateThingGroupCommandOutput) => void
  ): void;
  public updateThingGroup(
    args: UpdateThingGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateThingGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateThingGroupCommandOutput) => void
  ): Promise<UpdateThingGroupCommandOutput> | void {
    const command = new UpdateThingGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the groups to which the thing belongs.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThingGroupsForThing</a> action.</p>
   */
  public updateThingGroupsForThing(
    args: UpdateThingGroupsForThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateThingGroupsForThingCommandOutput>;
  public updateThingGroupsForThing(
    args: UpdateThingGroupsForThingCommandInput,
    cb: (err: any, data?: UpdateThingGroupsForThingCommandOutput) => void
  ): void;
  public updateThingGroupsForThing(
    args: UpdateThingGroupsForThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateThingGroupsForThingCommandOutput) => void
  ): void;
  public updateThingGroupsForThing(
    args: UpdateThingGroupsForThingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateThingGroupsForThingCommandOutput) => void),
    cb?: (err: any, data?: UpdateThingGroupsForThingCommandOutput) => void
  ): Promise<UpdateThingGroupsForThingCommandOutput> | void {
    const command = new UpdateThingGroupsForThingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a topic rule destination. You use this to change the status, endpoint URL, or
   *          confirmation URL of the destination.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateTopicRuleDestination</a> action.</p>
   */
  public updateTopicRuleDestination(
    args: UpdateTopicRuleDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTopicRuleDestinationCommandOutput>;
  public updateTopicRuleDestination(
    args: UpdateTopicRuleDestinationCommandInput,
    cb: (err: any, data?: UpdateTopicRuleDestinationCommandOutput) => void
  ): void;
  public updateTopicRuleDestination(
    args: UpdateTopicRuleDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTopicRuleDestinationCommandOutput) => void
  ): void;
  public updateTopicRuleDestination(
    args: UpdateTopicRuleDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTopicRuleDestinationCommandOutput) => void),
    cb?: (err: any, data?: UpdateTopicRuleDestinationCommandOutput) => void
  ): Promise<UpdateTopicRuleDestinationCommandOutput> | void {
    const command = new UpdateTopicRuleDestinationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Validates a Device Defender security profile behaviors specification.</p>
   *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ValidateSecurityProfileBehaviors</a> action.</p>
   */
  public validateSecurityProfileBehaviors(
    args: ValidateSecurityProfileBehaviorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidateSecurityProfileBehaviorsCommandOutput>;
  public validateSecurityProfileBehaviors(
    args: ValidateSecurityProfileBehaviorsCommandInput,
    cb: (err: any, data?: ValidateSecurityProfileBehaviorsCommandOutput) => void
  ): void;
  public validateSecurityProfileBehaviors(
    args: ValidateSecurityProfileBehaviorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidateSecurityProfileBehaviorsCommandOutput) => void
  ): void;
  public validateSecurityProfileBehaviors(
    args: ValidateSecurityProfileBehaviorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ValidateSecurityProfileBehaviorsCommandOutput) => void),
    cb?: (err: any, data?: ValidateSecurityProfileBehaviorsCommandOutput) => void
  ): Promise<ValidateSecurityProfileBehaviorsCommandOutput> | void {
    const command = new ValidateSecurityProfileBehaviorsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
