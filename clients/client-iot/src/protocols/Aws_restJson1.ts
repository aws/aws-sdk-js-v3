// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  isSerializableHeaderValue,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "@smithy/uuid";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AcceptCertificateTransferCommandInput,
  AcceptCertificateTransferCommandOutput,
} from "../commands/AcceptCertificateTransferCommand";
import {
  AddThingToBillingGroupCommandInput,
  AddThingToBillingGroupCommandOutput,
} from "../commands/AddThingToBillingGroupCommand";
import {
  AddThingToThingGroupCommandInput,
  AddThingToThingGroupCommandOutput,
} from "../commands/AddThingToThingGroupCommand";
import {
  AssociateSbomWithPackageVersionCommandInput,
  AssociateSbomWithPackageVersionCommandOutput,
} from "../commands/AssociateSbomWithPackageVersionCommand";
import {
  AssociateTargetsWithJobCommandInput,
  AssociateTargetsWithJobCommandOutput,
} from "../commands/AssociateTargetsWithJobCommand";
import { AttachPolicyCommandInput, AttachPolicyCommandOutput } from "../commands/AttachPolicyCommand";
import {
  AttachPrincipalPolicyCommandInput,
  AttachPrincipalPolicyCommandOutput,
} from "../commands/AttachPrincipalPolicyCommand";
import {
  AttachSecurityProfileCommandInput,
  AttachSecurityProfileCommandOutput,
} from "../commands/AttachSecurityProfileCommand";
import {
  AttachThingPrincipalCommandInput,
  AttachThingPrincipalCommandOutput,
} from "../commands/AttachThingPrincipalCommand";
import {
  CancelAuditMitigationActionsTaskCommandInput,
  CancelAuditMitigationActionsTaskCommandOutput,
} from "../commands/CancelAuditMitigationActionsTaskCommand";
import { CancelAuditTaskCommandInput, CancelAuditTaskCommandOutput } from "../commands/CancelAuditTaskCommand";
import {
  CancelCertificateTransferCommandInput,
  CancelCertificateTransferCommandOutput,
} from "../commands/CancelCertificateTransferCommand";
import {
  CancelDetectMitigationActionsTaskCommandInput,
  CancelDetectMitigationActionsTaskCommandOutput,
} from "../commands/CancelDetectMitigationActionsTaskCommand";
import { CancelJobCommandInput, CancelJobCommandOutput } from "../commands/CancelJobCommand";
import { CancelJobExecutionCommandInput, CancelJobExecutionCommandOutput } from "../commands/CancelJobExecutionCommand";
import {
  ClearDefaultAuthorizerCommandInput,
  ClearDefaultAuthorizerCommandOutput,
} from "../commands/ClearDefaultAuthorizerCommand";
import {
  ConfirmTopicRuleDestinationCommandInput,
  ConfirmTopicRuleDestinationCommandOutput,
} from "../commands/ConfirmTopicRuleDestinationCommand";
import {
  CreateAuditSuppressionCommandInput,
  CreateAuditSuppressionCommandOutput,
} from "../commands/CreateAuditSuppressionCommand";
import { CreateAuthorizerCommandInput, CreateAuthorizerCommandOutput } from "../commands/CreateAuthorizerCommand";
import { CreateBillingGroupCommandInput, CreateBillingGroupCommandOutput } from "../commands/CreateBillingGroupCommand";
import {
  CreateCertificateFromCsrCommandInput,
  CreateCertificateFromCsrCommandOutput,
} from "../commands/CreateCertificateFromCsrCommand";
import {
  CreateCertificateProviderCommandInput,
  CreateCertificateProviderCommandOutput,
} from "../commands/CreateCertificateProviderCommand";
import { CreateCommandCommandInput, CreateCommandCommandOutput } from "../commands/CreateCommandCommand";
import { CreateCustomMetricCommandInput, CreateCustomMetricCommandOutput } from "../commands/CreateCustomMetricCommand";
import { CreateDimensionCommandInput, CreateDimensionCommandOutput } from "../commands/CreateDimensionCommand";
import {
  CreateDomainConfigurationCommandInput,
  CreateDomainConfigurationCommandOutput,
} from "../commands/CreateDomainConfigurationCommand";
import {
  CreateDynamicThingGroupCommandInput,
  CreateDynamicThingGroupCommandOutput,
} from "../commands/CreateDynamicThingGroupCommand";
import { CreateFleetMetricCommandInput, CreateFleetMetricCommandOutput } from "../commands/CreateFleetMetricCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "../commands/CreateJobCommand";
import { CreateJobTemplateCommandInput, CreateJobTemplateCommandOutput } from "../commands/CreateJobTemplateCommand";
import {
  CreateKeysAndCertificateCommandInput,
  CreateKeysAndCertificateCommandOutput,
} from "../commands/CreateKeysAndCertificateCommand";
import {
  CreateMitigationActionCommandInput,
  CreateMitigationActionCommandOutput,
} from "../commands/CreateMitigationActionCommand";
import { CreateOTAUpdateCommandInput, CreateOTAUpdateCommandOutput } from "../commands/CreateOTAUpdateCommand";
import { CreatePackageCommandInput, CreatePackageCommandOutput } from "../commands/CreatePackageCommand";
import {
  CreatePackageVersionCommandInput,
  CreatePackageVersionCommandOutput,
} from "../commands/CreatePackageVersionCommand";
import { CreatePolicyCommandInput, CreatePolicyCommandOutput } from "../commands/CreatePolicyCommand";
import {
  CreatePolicyVersionCommandInput,
  CreatePolicyVersionCommandOutput,
} from "../commands/CreatePolicyVersionCommand";
import {
  CreateProvisioningClaimCommandInput,
  CreateProvisioningClaimCommandOutput,
} from "../commands/CreateProvisioningClaimCommand";
import {
  CreateProvisioningTemplateCommandInput,
  CreateProvisioningTemplateCommandOutput,
} from "../commands/CreateProvisioningTemplateCommand";
import {
  CreateProvisioningTemplateVersionCommandInput,
  CreateProvisioningTemplateVersionCommandOutput,
} from "../commands/CreateProvisioningTemplateVersionCommand";
import { CreateRoleAliasCommandInput, CreateRoleAliasCommandOutput } from "../commands/CreateRoleAliasCommand";
import {
  CreateScheduledAuditCommandInput,
  CreateScheduledAuditCommandOutput,
} from "../commands/CreateScheduledAuditCommand";
import {
  CreateSecurityProfileCommandInput,
  CreateSecurityProfileCommandOutput,
} from "../commands/CreateSecurityProfileCommand";
import { CreateStreamCommandInput, CreateStreamCommandOutput } from "../commands/CreateStreamCommand";
import { CreateThingCommandInput, CreateThingCommandOutput } from "../commands/CreateThingCommand";
import { CreateThingGroupCommandInput, CreateThingGroupCommandOutput } from "../commands/CreateThingGroupCommand";
import { CreateThingTypeCommandInput, CreateThingTypeCommandOutput } from "../commands/CreateThingTypeCommand";
import { CreateTopicRuleCommandInput, CreateTopicRuleCommandOutput } from "../commands/CreateTopicRuleCommand";
import {
  CreateTopicRuleDestinationCommandInput,
  CreateTopicRuleDestinationCommandOutput,
} from "../commands/CreateTopicRuleDestinationCommand";
import {
  DeleteAccountAuditConfigurationCommandInput,
  DeleteAccountAuditConfigurationCommandOutput,
} from "../commands/DeleteAccountAuditConfigurationCommand";
import {
  DeleteAuditSuppressionCommandInput,
  DeleteAuditSuppressionCommandOutput,
} from "../commands/DeleteAuditSuppressionCommand";
import { DeleteAuthorizerCommandInput, DeleteAuthorizerCommandOutput } from "../commands/DeleteAuthorizerCommand";
import { DeleteBillingGroupCommandInput, DeleteBillingGroupCommandOutput } from "../commands/DeleteBillingGroupCommand";
import {
  DeleteCACertificateCommandInput,
  DeleteCACertificateCommandOutput,
} from "../commands/DeleteCACertificateCommand";
import { DeleteCertificateCommandInput, DeleteCertificateCommandOutput } from "../commands/DeleteCertificateCommand";
import {
  DeleteCertificateProviderCommandInput,
  DeleteCertificateProviderCommandOutput,
} from "../commands/DeleteCertificateProviderCommand";
import { DeleteCommandCommandInput, DeleteCommandCommandOutput } from "../commands/DeleteCommandCommand";
import {
  DeleteCommandExecutionCommandInput,
  DeleteCommandExecutionCommandOutput,
} from "../commands/DeleteCommandExecutionCommand";
import { DeleteCustomMetricCommandInput, DeleteCustomMetricCommandOutput } from "../commands/DeleteCustomMetricCommand";
import { DeleteDimensionCommandInput, DeleteDimensionCommandOutput } from "../commands/DeleteDimensionCommand";
import {
  DeleteDomainConfigurationCommandInput,
  DeleteDomainConfigurationCommandOutput,
} from "../commands/DeleteDomainConfigurationCommand";
import {
  DeleteDynamicThingGroupCommandInput,
  DeleteDynamicThingGroupCommandOutput,
} from "../commands/DeleteDynamicThingGroupCommand";
import { DeleteFleetMetricCommandInput, DeleteFleetMetricCommandOutput } from "../commands/DeleteFleetMetricCommand";
import { DeleteJobCommandInput, DeleteJobCommandOutput } from "../commands/DeleteJobCommand";
import { DeleteJobExecutionCommandInput, DeleteJobExecutionCommandOutput } from "../commands/DeleteJobExecutionCommand";
import { DeleteJobTemplateCommandInput, DeleteJobTemplateCommandOutput } from "../commands/DeleteJobTemplateCommand";
import {
  DeleteMitigationActionCommandInput,
  DeleteMitigationActionCommandOutput,
} from "../commands/DeleteMitigationActionCommand";
import { DeleteOTAUpdateCommandInput, DeleteOTAUpdateCommandOutput } from "../commands/DeleteOTAUpdateCommand";
import { DeletePackageCommandInput, DeletePackageCommandOutput } from "../commands/DeletePackageCommand";
import {
  DeletePackageVersionCommandInput,
  DeletePackageVersionCommandOutput,
} from "../commands/DeletePackageVersionCommand";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "../commands/DeletePolicyCommand";
import {
  DeletePolicyVersionCommandInput,
  DeletePolicyVersionCommandOutput,
} from "../commands/DeletePolicyVersionCommand";
import {
  DeleteProvisioningTemplateCommandInput,
  DeleteProvisioningTemplateCommandOutput,
} from "../commands/DeleteProvisioningTemplateCommand";
import {
  DeleteProvisioningTemplateVersionCommandInput,
  DeleteProvisioningTemplateVersionCommandOutput,
} from "../commands/DeleteProvisioningTemplateVersionCommand";
import {
  DeleteRegistrationCodeCommandInput,
  DeleteRegistrationCodeCommandOutput,
} from "../commands/DeleteRegistrationCodeCommand";
import { DeleteRoleAliasCommandInput, DeleteRoleAliasCommandOutput } from "../commands/DeleteRoleAliasCommand";
import {
  DeleteScheduledAuditCommandInput,
  DeleteScheduledAuditCommandOutput,
} from "../commands/DeleteScheduledAuditCommand";
import {
  DeleteSecurityProfileCommandInput,
  DeleteSecurityProfileCommandOutput,
} from "../commands/DeleteSecurityProfileCommand";
import { DeleteStreamCommandInput, DeleteStreamCommandOutput } from "../commands/DeleteStreamCommand";
import { DeleteThingCommandInput, DeleteThingCommandOutput } from "../commands/DeleteThingCommand";
import { DeleteThingGroupCommandInput, DeleteThingGroupCommandOutput } from "../commands/DeleteThingGroupCommand";
import { DeleteThingTypeCommandInput, DeleteThingTypeCommandOutput } from "../commands/DeleteThingTypeCommand";
import { DeleteTopicRuleCommandInput, DeleteTopicRuleCommandOutput } from "../commands/DeleteTopicRuleCommand";
import {
  DeleteTopicRuleDestinationCommandInput,
  DeleteTopicRuleDestinationCommandOutput,
} from "../commands/DeleteTopicRuleDestinationCommand";
import {
  DeleteV2LoggingLevelCommandInput,
  DeleteV2LoggingLevelCommandOutput,
} from "../commands/DeleteV2LoggingLevelCommand";
import { DeprecateThingTypeCommandInput, DeprecateThingTypeCommandOutput } from "../commands/DeprecateThingTypeCommand";
import {
  DescribeAccountAuditConfigurationCommandInput,
  DescribeAccountAuditConfigurationCommandOutput,
} from "../commands/DescribeAccountAuditConfigurationCommand";
import {
  DescribeAuditFindingCommandInput,
  DescribeAuditFindingCommandOutput,
} from "../commands/DescribeAuditFindingCommand";
import {
  DescribeAuditMitigationActionsTaskCommandInput,
  DescribeAuditMitigationActionsTaskCommandOutput,
} from "../commands/DescribeAuditMitigationActionsTaskCommand";
import {
  DescribeAuditSuppressionCommandInput,
  DescribeAuditSuppressionCommandOutput,
} from "../commands/DescribeAuditSuppressionCommand";
import { DescribeAuditTaskCommandInput, DescribeAuditTaskCommandOutput } from "../commands/DescribeAuditTaskCommand";
import { DescribeAuthorizerCommandInput, DescribeAuthorizerCommandOutput } from "../commands/DescribeAuthorizerCommand";
import {
  DescribeBillingGroupCommandInput,
  DescribeBillingGroupCommandOutput,
} from "../commands/DescribeBillingGroupCommand";
import {
  DescribeCACertificateCommandInput,
  DescribeCACertificateCommandOutput,
} from "../commands/DescribeCACertificateCommand";
import {
  DescribeCertificateCommandInput,
  DescribeCertificateCommandOutput,
} from "../commands/DescribeCertificateCommand";
import {
  DescribeCertificateProviderCommandInput,
  DescribeCertificateProviderCommandOutput,
} from "../commands/DescribeCertificateProviderCommand";
import {
  DescribeCustomMetricCommandInput,
  DescribeCustomMetricCommandOutput,
} from "../commands/DescribeCustomMetricCommand";
import {
  DescribeDefaultAuthorizerCommandInput,
  DescribeDefaultAuthorizerCommandOutput,
} from "../commands/DescribeDefaultAuthorizerCommand";
import {
  DescribeDetectMitigationActionsTaskCommandInput,
  DescribeDetectMitigationActionsTaskCommandOutput,
} from "../commands/DescribeDetectMitigationActionsTaskCommand";
import { DescribeDimensionCommandInput, DescribeDimensionCommandOutput } from "../commands/DescribeDimensionCommand";
import {
  DescribeDomainConfigurationCommandInput,
  DescribeDomainConfigurationCommandOutput,
} from "../commands/DescribeDomainConfigurationCommand";
import {
  DescribeEncryptionConfigurationCommandInput,
  DescribeEncryptionConfigurationCommandOutput,
} from "../commands/DescribeEncryptionConfigurationCommand";
import { DescribeEndpointCommandInput, DescribeEndpointCommandOutput } from "../commands/DescribeEndpointCommand";
import {
  DescribeEventConfigurationsCommandInput,
  DescribeEventConfigurationsCommandOutput,
} from "../commands/DescribeEventConfigurationsCommand";
import {
  DescribeFleetMetricCommandInput,
  DescribeFleetMetricCommandOutput,
} from "../commands/DescribeFleetMetricCommand";
import { DescribeIndexCommandInput, DescribeIndexCommandOutput } from "../commands/DescribeIndexCommand";
import { DescribeJobCommandInput, DescribeJobCommandOutput } from "../commands/DescribeJobCommand";
import {
  DescribeJobExecutionCommandInput,
  DescribeJobExecutionCommandOutput,
} from "../commands/DescribeJobExecutionCommand";
import {
  DescribeJobTemplateCommandInput,
  DescribeJobTemplateCommandOutput,
} from "../commands/DescribeJobTemplateCommand";
import {
  DescribeManagedJobTemplateCommandInput,
  DescribeManagedJobTemplateCommandOutput,
} from "../commands/DescribeManagedJobTemplateCommand";
import {
  DescribeMitigationActionCommandInput,
  DescribeMitigationActionCommandOutput,
} from "../commands/DescribeMitigationActionCommand";
import {
  DescribeProvisioningTemplateCommandInput,
  DescribeProvisioningTemplateCommandOutput,
} from "../commands/DescribeProvisioningTemplateCommand";
import {
  DescribeProvisioningTemplateVersionCommandInput,
  DescribeProvisioningTemplateVersionCommandOutput,
} from "../commands/DescribeProvisioningTemplateVersionCommand";
import { DescribeRoleAliasCommandInput, DescribeRoleAliasCommandOutput } from "../commands/DescribeRoleAliasCommand";
import {
  DescribeScheduledAuditCommandInput,
  DescribeScheduledAuditCommandOutput,
} from "../commands/DescribeScheduledAuditCommand";
import {
  DescribeSecurityProfileCommandInput,
  DescribeSecurityProfileCommandOutput,
} from "../commands/DescribeSecurityProfileCommand";
import { DescribeStreamCommandInput, DescribeStreamCommandOutput } from "../commands/DescribeStreamCommand";
import { DescribeThingCommandInput, DescribeThingCommandOutput } from "../commands/DescribeThingCommand";
import { DescribeThingGroupCommandInput, DescribeThingGroupCommandOutput } from "../commands/DescribeThingGroupCommand";
import {
  DescribeThingRegistrationTaskCommandInput,
  DescribeThingRegistrationTaskCommandOutput,
} from "../commands/DescribeThingRegistrationTaskCommand";
import { DescribeThingTypeCommandInput, DescribeThingTypeCommandOutput } from "../commands/DescribeThingTypeCommand";
import { DetachPolicyCommandInput, DetachPolicyCommandOutput } from "../commands/DetachPolicyCommand";
import {
  DetachPrincipalPolicyCommandInput,
  DetachPrincipalPolicyCommandOutput,
} from "../commands/DetachPrincipalPolicyCommand";
import {
  DetachSecurityProfileCommandInput,
  DetachSecurityProfileCommandOutput,
} from "../commands/DetachSecurityProfileCommand";
import {
  DetachThingPrincipalCommandInput,
  DetachThingPrincipalCommandOutput,
} from "../commands/DetachThingPrincipalCommand";
import { DisableTopicRuleCommandInput, DisableTopicRuleCommandOutput } from "../commands/DisableTopicRuleCommand";
import {
  DisassociateSbomFromPackageVersionCommandInput,
  DisassociateSbomFromPackageVersionCommandOutput,
} from "../commands/DisassociateSbomFromPackageVersionCommand";
import { EnableTopicRuleCommandInput, EnableTopicRuleCommandOutput } from "../commands/EnableTopicRuleCommand";
import {
  GetBehaviorModelTrainingSummariesCommandInput,
  GetBehaviorModelTrainingSummariesCommandOutput,
} from "../commands/GetBehaviorModelTrainingSummariesCommand";
import {
  GetBucketsAggregationCommandInput,
  GetBucketsAggregationCommandOutput,
} from "../commands/GetBucketsAggregationCommand";
import { GetCardinalityCommandInput, GetCardinalityCommandOutput } from "../commands/GetCardinalityCommand";
import { GetCommandCommandInput, GetCommandCommandOutput } from "../commands/GetCommandCommand";
import {
  GetCommandExecutionCommandInput,
  GetCommandExecutionCommandOutput,
} from "../commands/GetCommandExecutionCommand";
import {
  GetEffectivePoliciesCommandInput,
  GetEffectivePoliciesCommandOutput,
} from "../commands/GetEffectivePoliciesCommand";
import {
  GetIndexingConfigurationCommandInput,
  GetIndexingConfigurationCommandOutput,
} from "../commands/GetIndexingConfigurationCommand";
import { GetJobDocumentCommandInput, GetJobDocumentCommandOutput } from "../commands/GetJobDocumentCommand";
import { GetLoggingOptionsCommandInput, GetLoggingOptionsCommandOutput } from "../commands/GetLoggingOptionsCommand";
import { GetOTAUpdateCommandInput, GetOTAUpdateCommandOutput } from "../commands/GetOTAUpdateCommand";
import { GetPackageCommandInput, GetPackageCommandOutput } from "../commands/GetPackageCommand";
import {
  GetPackageConfigurationCommandInput,
  GetPackageConfigurationCommandOutput,
} from "../commands/GetPackageConfigurationCommand";
import { GetPackageVersionCommandInput, GetPackageVersionCommandOutput } from "../commands/GetPackageVersionCommand";
import { GetPercentilesCommandInput, GetPercentilesCommandOutput } from "../commands/GetPercentilesCommand";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "../commands/GetPolicyCommand";
import { GetPolicyVersionCommandInput, GetPolicyVersionCommandOutput } from "../commands/GetPolicyVersionCommand";
import {
  GetRegistrationCodeCommandInput,
  GetRegistrationCodeCommandOutput,
} from "../commands/GetRegistrationCodeCommand";
import { GetStatisticsCommandInput, GetStatisticsCommandOutput } from "../commands/GetStatisticsCommand";
import {
  GetThingConnectivityDataCommandInput,
  GetThingConnectivityDataCommandOutput,
} from "../commands/GetThingConnectivityDataCommand";
import { GetTopicRuleCommandInput, GetTopicRuleCommandOutput } from "../commands/GetTopicRuleCommand";
import {
  GetTopicRuleDestinationCommandInput,
  GetTopicRuleDestinationCommandOutput,
} from "../commands/GetTopicRuleDestinationCommand";
import {
  GetV2LoggingOptionsCommandInput,
  GetV2LoggingOptionsCommandOutput,
} from "../commands/GetV2LoggingOptionsCommand";
import {
  ListActiveViolationsCommandInput,
  ListActiveViolationsCommandOutput,
} from "../commands/ListActiveViolationsCommand";
import {
  ListAttachedPoliciesCommandInput,
  ListAttachedPoliciesCommandOutput,
} from "../commands/ListAttachedPoliciesCommand";
import { ListAuditFindingsCommandInput, ListAuditFindingsCommandOutput } from "../commands/ListAuditFindingsCommand";
import {
  ListAuditMitigationActionsExecutionsCommandInput,
  ListAuditMitigationActionsExecutionsCommandOutput,
} from "../commands/ListAuditMitigationActionsExecutionsCommand";
import {
  ListAuditMitigationActionsTasksCommandInput,
  ListAuditMitigationActionsTasksCommandOutput,
} from "../commands/ListAuditMitigationActionsTasksCommand";
import {
  ListAuditSuppressionsCommandInput,
  ListAuditSuppressionsCommandOutput,
} from "../commands/ListAuditSuppressionsCommand";
import { ListAuditTasksCommandInput, ListAuditTasksCommandOutput } from "../commands/ListAuditTasksCommand";
import { ListAuthorizersCommandInput, ListAuthorizersCommandOutput } from "../commands/ListAuthorizersCommand";
import { ListBillingGroupsCommandInput, ListBillingGroupsCommandOutput } from "../commands/ListBillingGroupsCommand";
import { ListCACertificatesCommandInput, ListCACertificatesCommandOutput } from "../commands/ListCACertificatesCommand";
import {
  ListCertificateProvidersCommandInput,
  ListCertificateProvidersCommandOutput,
} from "../commands/ListCertificateProvidersCommand";
import {
  ListCertificatesByCACommandInput,
  ListCertificatesByCACommandOutput,
} from "../commands/ListCertificatesByCACommand";
import { ListCertificatesCommandInput, ListCertificatesCommandOutput } from "../commands/ListCertificatesCommand";
import {
  ListCommandExecutionsCommandInput,
  ListCommandExecutionsCommandOutput,
} from "../commands/ListCommandExecutionsCommand";
import { ListCommandsCommandInput, ListCommandsCommandOutput } from "../commands/ListCommandsCommand";
import { ListCustomMetricsCommandInput, ListCustomMetricsCommandOutput } from "../commands/ListCustomMetricsCommand";
import {
  ListDetectMitigationActionsExecutionsCommandInput,
  ListDetectMitigationActionsExecutionsCommandOutput,
} from "../commands/ListDetectMitigationActionsExecutionsCommand";
import {
  ListDetectMitigationActionsTasksCommandInput,
  ListDetectMitigationActionsTasksCommandOutput,
} from "../commands/ListDetectMitigationActionsTasksCommand";
import { ListDimensionsCommandInput, ListDimensionsCommandOutput } from "../commands/ListDimensionsCommand";
import {
  ListDomainConfigurationsCommandInput,
  ListDomainConfigurationsCommandOutput,
} from "../commands/ListDomainConfigurationsCommand";
import { ListFleetMetricsCommandInput, ListFleetMetricsCommandOutput } from "../commands/ListFleetMetricsCommand";
import { ListIndicesCommandInput, ListIndicesCommandOutput } from "../commands/ListIndicesCommand";
import {
  ListJobExecutionsForJobCommandInput,
  ListJobExecutionsForJobCommandOutput,
} from "../commands/ListJobExecutionsForJobCommand";
import {
  ListJobExecutionsForThingCommandInput,
  ListJobExecutionsForThingCommandOutput,
} from "../commands/ListJobExecutionsForThingCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import { ListJobTemplatesCommandInput, ListJobTemplatesCommandOutput } from "../commands/ListJobTemplatesCommand";
import {
  ListManagedJobTemplatesCommandInput,
  ListManagedJobTemplatesCommandOutput,
} from "../commands/ListManagedJobTemplatesCommand";
import { ListMetricValuesCommandInput, ListMetricValuesCommandOutput } from "../commands/ListMetricValuesCommand";
import {
  ListMitigationActionsCommandInput,
  ListMitigationActionsCommandOutput,
} from "../commands/ListMitigationActionsCommand";
import { ListOTAUpdatesCommandInput, ListOTAUpdatesCommandOutput } from "../commands/ListOTAUpdatesCommand";
import {
  ListOutgoingCertificatesCommandInput,
  ListOutgoingCertificatesCommandOutput,
} from "../commands/ListOutgoingCertificatesCommand";
import { ListPackagesCommandInput, ListPackagesCommandOutput } from "../commands/ListPackagesCommand";
import {
  ListPackageVersionsCommandInput,
  ListPackageVersionsCommandOutput,
} from "../commands/ListPackageVersionsCommand";
import { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "../commands/ListPoliciesCommand";
import {
  ListPolicyPrincipalsCommandInput,
  ListPolicyPrincipalsCommandOutput,
} from "../commands/ListPolicyPrincipalsCommand";
import { ListPolicyVersionsCommandInput, ListPolicyVersionsCommandOutput } from "../commands/ListPolicyVersionsCommand";
import {
  ListPrincipalPoliciesCommandInput,
  ListPrincipalPoliciesCommandOutput,
} from "../commands/ListPrincipalPoliciesCommand";
import {
  ListPrincipalThingsCommandInput,
  ListPrincipalThingsCommandOutput,
} from "../commands/ListPrincipalThingsCommand";
import {
  ListPrincipalThingsV2CommandInput,
  ListPrincipalThingsV2CommandOutput,
} from "../commands/ListPrincipalThingsV2Command";
import {
  ListProvisioningTemplatesCommandInput,
  ListProvisioningTemplatesCommandOutput,
} from "../commands/ListProvisioningTemplatesCommand";
import {
  ListProvisioningTemplateVersionsCommandInput,
  ListProvisioningTemplateVersionsCommandOutput,
} from "../commands/ListProvisioningTemplateVersionsCommand";
import {
  ListRelatedResourcesForAuditFindingCommandInput,
  ListRelatedResourcesForAuditFindingCommandOutput,
} from "../commands/ListRelatedResourcesForAuditFindingCommand";
import { ListRoleAliasesCommandInput, ListRoleAliasesCommandOutput } from "../commands/ListRoleAliasesCommand";
import {
  ListSbomValidationResultsCommandInput,
  ListSbomValidationResultsCommandOutput,
} from "../commands/ListSbomValidationResultsCommand";
import {
  ListScheduledAuditsCommandInput,
  ListScheduledAuditsCommandOutput,
} from "../commands/ListScheduledAuditsCommand";
import {
  ListSecurityProfilesCommandInput,
  ListSecurityProfilesCommandOutput,
} from "../commands/ListSecurityProfilesCommand";
import {
  ListSecurityProfilesForTargetCommandInput,
  ListSecurityProfilesForTargetCommandOutput,
} from "../commands/ListSecurityProfilesForTargetCommand";
import { ListStreamsCommandInput, ListStreamsCommandOutput } from "../commands/ListStreamsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTargetsForPolicyCommandInput,
  ListTargetsForPolicyCommandOutput,
} from "../commands/ListTargetsForPolicyCommand";
import {
  ListTargetsForSecurityProfileCommandInput,
  ListTargetsForSecurityProfileCommandOutput,
} from "../commands/ListTargetsForSecurityProfileCommand";
import { ListThingGroupsCommandInput, ListThingGroupsCommandOutput } from "../commands/ListThingGroupsCommand";
import {
  ListThingGroupsForThingCommandInput,
  ListThingGroupsForThingCommandOutput,
} from "../commands/ListThingGroupsForThingCommand";
import {
  ListThingPrincipalsCommandInput,
  ListThingPrincipalsCommandOutput,
} from "../commands/ListThingPrincipalsCommand";
import {
  ListThingPrincipalsV2CommandInput,
  ListThingPrincipalsV2CommandOutput,
} from "../commands/ListThingPrincipalsV2Command";
import {
  ListThingRegistrationTaskReportsCommandInput,
  ListThingRegistrationTaskReportsCommandOutput,
} from "../commands/ListThingRegistrationTaskReportsCommand";
import {
  ListThingRegistrationTasksCommandInput,
  ListThingRegistrationTasksCommandOutput,
} from "../commands/ListThingRegistrationTasksCommand";
import { ListThingsCommandInput, ListThingsCommandOutput } from "../commands/ListThingsCommand";
import {
  ListThingsInBillingGroupCommandInput,
  ListThingsInBillingGroupCommandOutput,
} from "../commands/ListThingsInBillingGroupCommand";
import {
  ListThingsInThingGroupCommandInput,
  ListThingsInThingGroupCommandOutput,
} from "../commands/ListThingsInThingGroupCommand";
import { ListThingTypesCommandInput, ListThingTypesCommandOutput } from "../commands/ListThingTypesCommand";
import {
  ListTopicRuleDestinationsCommandInput,
  ListTopicRuleDestinationsCommandOutput,
} from "../commands/ListTopicRuleDestinationsCommand";
import { ListTopicRulesCommandInput, ListTopicRulesCommandOutput } from "../commands/ListTopicRulesCommand";
import {
  ListV2LoggingLevelsCommandInput,
  ListV2LoggingLevelsCommandOutput,
} from "../commands/ListV2LoggingLevelsCommand";
import {
  ListViolationEventsCommandInput,
  ListViolationEventsCommandOutput,
} from "../commands/ListViolationEventsCommand";
import {
  PutVerificationStateOnViolationCommandInput,
  PutVerificationStateOnViolationCommandOutput,
} from "../commands/PutVerificationStateOnViolationCommand";
import {
  RegisterCACertificateCommandInput,
  RegisterCACertificateCommandOutput,
} from "../commands/RegisterCACertificateCommand";
import {
  RegisterCertificateCommandInput,
  RegisterCertificateCommandOutput,
} from "../commands/RegisterCertificateCommand";
import {
  RegisterCertificateWithoutCACommandInput,
  RegisterCertificateWithoutCACommandOutput,
} from "../commands/RegisterCertificateWithoutCACommand";
import { RegisterThingCommandInput, RegisterThingCommandOutput } from "../commands/RegisterThingCommand";
import {
  RejectCertificateTransferCommandInput,
  RejectCertificateTransferCommandOutput,
} from "../commands/RejectCertificateTransferCommand";
import {
  RemoveThingFromBillingGroupCommandInput,
  RemoveThingFromBillingGroupCommandOutput,
} from "../commands/RemoveThingFromBillingGroupCommand";
import {
  RemoveThingFromThingGroupCommandInput,
  RemoveThingFromThingGroupCommandOutput,
} from "../commands/RemoveThingFromThingGroupCommand";
import { ReplaceTopicRuleCommandInput, ReplaceTopicRuleCommandOutput } from "../commands/ReplaceTopicRuleCommand";
import { SearchIndexCommandInput, SearchIndexCommandOutput } from "../commands/SearchIndexCommand";
import {
  SetDefaultAuthorizerCommandInput,
  SetDefaultAuthorizerCommandOutput,
} from "../commands/SetDefaultAuthorizerCommand";
import {
  SetDefaultPolicyVersionCommandInput,
  SetDefaultPolicyVersionCommandOutput,
} from "../commands/SetDefaultPolicyVersionCommand";
import { SetLoggingOptionsCommandInput, SetLoggingOptionsCommandOutput } from "../commands/SetLoggingOptionsCommand";
import { SetV2LoggingLevelCommandInput, SetV2LoggingLevelCommandOutput } from "../commands/SetV2LoggingLevelCommand";
import {
  SetV2LoggingOptionsCommandInput,
  SetV2LoggingOptionsCommandOutput,
} from "../commands/SetV2LoggingOptionsCommand";
import {
  StartAuditMitigationActionsTaskCommandInput,
  StartAuditMitigationActionsTaskCommandOutput,
} from "../commands/StartAuditMitigationActionsTaskCommand";
import {
  StartDetectMitigationActionsTaskCommandInput,
  StartDetectMitigationActionsTaskCommandOutput,
} from "../commands/StartDetectMitigationActionsTaskCommand";
import {
  StartOnDemandAuditTaskCommandInput,
  StartOnDemandAuditTaskCommandOutput,
} from "../commands/StartOnDemandAuditTaskCommand";
import {
  StartThingRegistrationTaskCommandInput,
  StartThingRegistrationTaskCommandOutput,
} from "../commands/StartThingRegistrationTaskCommand";
import {
  StopThingRegistrationTaskCommandInput,
  StopThingRegistrationTaskCommandOutput,
} from "../commands/StopThingRegistrationTaskCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { TestAuthorizationCommandInput, TestAuthorizationCommandOutput } from "../commands/TestAuthorizationCommand";
import {
  TestInvokeAuthorizerCommandInput,
  TestInvokeAuthorizerCommandOutput,
} from "../commands/TestInvokeAuthorizerCommand";
import {
  TransferCertificateCommandInput,
  TransferCertificateCommandOutput,
} from "../commands/TransferCertificateCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateAccountAuditConfigurationCommandInput,
  UpdateAccountAuditConfigurationCommandOutput,
} from "../commands/UpdateAccountAuditConfigurationCommand";
import {
  UpdateAuditSuppressionCommandInput,
  UpdateAuditSuppressionCommandOutput,
} from "../commands/UpdateAuditSuppressionCommand";
import { UpdateAuthorizerCommandInput, UpdateAuthorizerCommandOutput } from "../commands/UpdateAuthorizerCommand";
import { UpdateBillingGroupCommandInput, UpdateBillingGroupCommandOutput } from "../commands/UpdateBillingGroupCommand";
import {
  UpdateCACertificateCommandInput,
  UpdateCACertificateCommandOutput,
} from "../commands/UpdateCACertificateCommand";
import { UpdateCertificateCommandInput, UpdateCertificateCommandOutput } from "../commands/UpdateCertificateCommand";
import {
  UpdateCertificateProviderCommandInput,
  UpdateCertificateProviderCommandOutput,
} from "../commands/UpdateCertificateProviderCommand";
import { UpdateCommandCommandInput, UpdateCommandCommandOutput } from "../commands/UpdateCommandCommand";
import { UpdateCustomMetricCommandInput, UpdateCustomMetricCommandOutput } from "../commands/UpdateCustomMetricCommand";
import { UpdateDimensionCommandInput, UpdateDimensionCommandOutput } from "../commands/UpdateDimensionCommand";
import {
  UpdateDomainConfigurationCommandInput,
  UpdateDomainConfigurationCommandOutput,
} from "../commands/UpdateDomainConfigurationCommand";
import {
  UpdateDynamicThingGroupCommandInput,
  UpdateDynamicThingGroupCommandOutput,
} from "../commands/UpdateDynamicThingGroupCommand";
import {
  UpdateEncryptionConfigurationCommandInput,
  UpdateEncryptionConfigurationCommandOutput,
} from "../commands/UpdateEncryptionConfigurationCommand";
import {
  UpdateEventConfigurationsCommandInput,
  UpdateEventConfigurationsCommandOutput,
} from "../commands/UpdateEventConfigurationsCommand";
import { UpdateFleetMetricCommandInput, UpdateFleetMetricCommandOutput } from "../commands/UpdateFleetMetricCommand";
import {
  UpdateIndexingConfigurationCommandInput,
  UpdateIndexingConfigurationCommandOutput,
} from "../commands/UpdateIndexingConfigurationCommand";
import { UpdateJobCommandInput, UpdateJobCommandOutput } from "../commands/UpdateJobCommand";
import {
  UpdateMitigationActionCommandInput,
  UpdateMitigationActionCommandOutput,
} from "../commands/UpdateMitigationActionCommand";
import { UpdatePackageCommandInput, UpdatePackageCommandOutput } from "../commands/UpdatePackageCommand";
import {
  UpdatePackageConfigurationCommandInput,
  UpdatePackageConfigurationCommandOutput,
} from "../commands/UpdatePackageConfigurationCommand";
import {
  UpdatePackageVersionCommandInput,
  UpdatePackageVersionCommandOutput,
} from "../commands/UpdatePackageVersionCommand";
import {
  UpdateProvisioningTemplateCommandInput,
  UpdateProvisioningTemplateCommandOutput,
} from "../commands/UpdateProvisioningTemplateCommand";
import { UpdateRoleAliasCommandInput, UpdateRoleAliasCommandOutput } from "../commands/UpdateRoleAliasCommand";
import {
  UpdateScheduledAuditCommandInput,
  UpdateScheduledAuditCommandOutput,
} from "../commands/UpdateScheduledAuditCommand";
import {
  UpdateSecurityProfileCommandInput,
  UpdateSecurityProfileCommandOutput,
} from "../commands/UpdateSecurityProfileCommand";
import { UpdateStreamCommandInput, UpdateStreamCommandOutput } from "../commands/UpdateStreamCommand";
import { UpdateThingCommandInput, UpdateThingCommandOutput } from "../commands/UpdateThingCommand";
import { UpdateThingGroupCommandInput, UpdateThingGroupCommandOutput } from "../commands/UpdateThingGroupCommand";
import {
  UpdateThingGroupsForThingCommandInput,
  UpdateThingGroupsForThingCommandOutput,
} from "../commands/UpdateThingGroupsForThingCommand";
import { UpdateThingTypeCommandInput, UpdateThingTypeCommandOutput } from "../commands/UpdateThingTypeCommand";
import {
  UpdateTopicRuleDestinationCommandInput,
  UpdateTopicRuleDestinationCommandOutput,
} from "../commands/UpdateTopicRuleDestinationCommand";
import {
  ValidateSecurityProfileBehaviorsCommandInput,
  ValidateSecurityProfileBehaviorsCommandOutput,
} from "../commands/ValidateSecurityProfileBehaviorsCommand";
import { IoTServiceException as __BaseException } from "../models/IoTServiceException";
import {
  _Stream,
  AbortConfig,
  AbortCriteria,
  Action,
  ActiveViolation,
  AddThingsToThingGroupParams,
  AggregationType,
  AlertTarget,
  AlertTargetType,
  AssetPropertyTimestamp,
  AssetPropertyValue,
  AssetPropertyVariant,
  AttributePayload,
  AuditCheckConfiguration,
  AuditFinding,
  AuditMitigationActionExecutionMetadata,
  AuditMitigationActionsTaskMetadata,
  AuditMitigationActionsTaskTarget,
  AuditNotificationTarget,
  AuditNotificationType,
  AuditSuppression,
  AuthInfo,
  AuthorizerConfig,
  AuthorizerDescription,
  AwsJobAbortConfig,
  AwsJobAbortCriteria,
  AwsJobExecutionsRolloutConfig,
  AwsJobExponentialRolloutRate,
  AwsJobPresignedUrlConfig,
  AwsJobRateIncreaseCriteria,
  AwsJobTimeoutConfig,
  Behavior,
  BehaviorCriteria,
  BillingGroupProperties,
  CertificateProviderOperation,
  CertificateValidationException,
  ClientCertificateConfig,
  CloudwatchAlarmAction,
  CloudwatchLogsAction,
  CloudwatchMetricAction,
  CodeSigning,
  CodeSigningCertificateChain,
  CodeSigningSignature,
  CommandParameter,
  CommandParameterValue,
  CommandPayload,
  ConfigName,
  ConflictException,
  ConflictingResourceUpdateException,
  CustomCodeSigning,
  Destination,
  DynamoDBAction,
  DynamoDBv2Action,
  ElasticsearchAction,
  EnableIoTLoggingParams,
  ExponentialRolloutRate,
  FileLocation,
  FirehoseAction,
  HttpAction,
  HttpActionHeader,
  HttpAuthorization,
  HttpUrlDestinationConfiguration,
  IndexNotReadyException,
  InternalException,
  InternalFailureException,
  InternalServerException,
  InvalidAggregationException,
  InvalidQueryException,
  InvalidRequestException,
  InvalidStateTransitionException,
  IotAnalyticsAction,
  IotEventsAction,
  IotSiteWiseAction,
  IssuerCertificateIdentifier,
  JobExecutionsRetryConfig,
  JobExecutionsRolloutConfig,
  KafkaAction,
  KafkaActionHeader,
  KinesisAction,
  LambdaAction,
  LimitExceededException,
  LocationAction,
  LocationTimestamp,
  MachineLearningDetectionConfig,
  MaintenanceWindow,
  MalformedPolicyException,
  MetricDimension,
  MetricsExportConfig,
  MetricToRetain,
  MetricValue,
  MitigationActionParams,
  Mqtt5Configuration,
  MqttHeaders,
  OpenSearchAction,
  OTAUpdateFile,
  PackageVersionArtifact,
  PolicyVersionIdentifier,
  PresignedUrlConfig,
  PropagatingAttribute,
  Protocol,
  ProvisioningHook,
  PublishFindingToSnsParams,
  PutAssetPropertyValueEntry,
  PutItemInput,
  RateIncreaseCriteria,
  ReplaceDefaultPolicyVersionParams,
  RepublishAction,
  ResourceAlreadyExistsException,
  ResourceIdentifier,
  ResourceNotFoundException,
  RetryCriteria,
  S3Action,
  S3Destination,
  S3Location,
  SalesforceAction,
  Sbom,
  SchedulingConfig,
  ServerCertificateConfig,
  ServiceQuotaExceededException,
  ServiceUnavailableException,
  SigningProfileParameter,
  SigV4Authorization,
  SnsAction,
  SqlParseException,
  SqsAction,
  StartSigningJobParameter,
  StatisticalThreshold,
  StepFunctionsAction,
  StreamFile,
  Tag,
  ThingGroupProperties,
  ThingTypeProperties,
  ThrottlingException,
  TimeoutConfig,
  TimestreamAction,
  TimestreamDimension,
  TimestreamTimestamp,
  TlsConfig,
  TopicRuleDestinationConfiguration,
  TopicRulePayload,
  TransferAlreadyCompletedException,
  UnauthorizedException,
  UpdateCACertificateParams,
  UpdateDeviceCertificateParams,
  UserProperty,
  ValidationException,
  VersionConflictException,
  VersionsLimitExceededException,
  VpcDestinationConfiguration,
} from "../models/models_0";
import {
  BehaviorModelTrainingSummary,
  BillingGroupMetadata,
  BucketsAggregationType,
  CACertificate,
  CACertificateDescription,
  Certificate,
  CertificateDescription,
  CertificateStateException,
  CertificateValidity,
  CommandExecutionResult,
  CommandExecutionSummary,
  Configuration,
  DeleteConflictException,
  DetectMitigationActionsTaskSummary,
  DetectMitigationActionsTaskTarget,
  EventType,
  Field,
  GeoLocationTarget,
  IndexingFilter,
  Job,
  JobExecution,
  NotConfiguredException,
  OTAUpdateInfo,
  PercentPair,
  RegistrationConfig,
  RoleAliasDescription,
  Statistics,
  StreamInfo,
  TermsAggregation,
  ThingGroupIndexingConfiguration,
  ThingGroupMetadata,
  ThingIndexingConfiguration,
  ThingTypeMetadata,
  TimeFilter,
  TopicRule,
  TopicRuleDestination,
  TransferData,
  VersionUpdateByJobsConfig,
  ViolationEventOccurrenceRange,
} from "../models/models_1";
import {
  CertificateConflictException,
  CommandSummary,
  DetectMitigationActionExecution,
  HttpContext,
  InvalidResponseException,
  JobExecutionSummary,
  JobExecutionSummaryForJob,
  JobExecutionSummaryForThing,
  JobSummary,
  JobTemplateSummary,
  LoggingOptionsPayload,
  LogTarget,
  MetricDatum,
  MitigationActionIdentifier,
  MqttContext,
  OTAUpdateSummary,
  OutgoingCertificate,
  PackageSummary,
  PackageVersionSummary,
  PolicyVersion,
  ProvisioningTemplateSummary,
  ProvisioningTemplateVersionSummary,
  RegistrationCodeValidationException,
  ResourceRegistrationFailureException,
  TaskAlreadyExistsException,
  ThingTypeDefinition,
  TlsContext,
  TopicRuleDestinationSummary,
  TopicRuleListItem,
  TransferConflictException,
  ViolationEvent,
} from "../models/models_2";

/**
 * serializeAws_restJson1AcceptCertificateTransferCommand
 */
export const se_AcceptCertificateTransferCommand = async (
  input: AcceptCertificateTransferCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accept-certificate-transfer/{certificateId}");
  b.p("certificateId", () => input.certificateId!, "{certificateId}", false);
  const query: any = map({
    [_sAA]: [() => input.setAsActive !== void 0, () => input[_sAA]!.toString()],
  });
  let body: any;
  b.m("PATCH").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AddThingToBillingGroupCommand
 */
export const se_AddThingToBillingGroupCommand = async (
  input: AddThingToBillingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/billing-groups/addThingToBillingGroup");
  let body: any;
  body = JSON.stringify(
    take(input, {
      billingGroupArn: [],
      billingGroupName: [],
      thingArn: [],
      thingName: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AddThingToThingGroupCommand
 */
export const se_AddThingToThingGroupCommand = async (
  input: AddThingToThingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/thing-groups/addThingToThingGroup");
  let body: any;
  body = JSON.stringify(
    take(input, {
      overrideDynamicGroups: [],
      thingArn: [],
      thingGroupArn: [],
      thingGroupName: [],
      thingName: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateSbomWithPackageVersionCommand
 */
export const se_AssociateSbomWithPackageVersionCommand = async (
  input: AssociateSbomWithPackageVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/packages/{packageName}/versions/{versionName}/sbom");
  b.p("packageName", () => input.packageName!, "{packageName}", false);
  b.p("versionName", () => input.versionName!, "{versionName}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      sbom: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateTargetsWithJobCommand
 */
export const se_AssociateTargetsWithJobCommand = async (
  input: AssociateTargetsWithJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/jobs/{jobId}/targets");
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  const query: any = map({
    [_nI]: [, input[_nI]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      comment: [],
      targets: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AttachPolicyCommand
 */
export const se_AttachPolicyCommand = async (
  input: AttachPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/target-policies/{policyName}");
  b.p("policyName", () => input.policyName!, "{policyName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      target: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AttachPrincipalPolicyCommand
 */
export const se_AttachPrincipalPolicyCommand = async (
  input: AttachPrincipalPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaip]: input[_p]!,
  });
  b.bp("/principal-policies/{policyName}");
  b.p("policyName", () => input.policyName!, "{policyName}", false);
  let body: any;
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AttachSecurityProfileCommand
 */
export const se_AttachSecurityProfileCommand = async (
  input: AttachSecurityProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/security-profiles/{securityProfileName}/targets");
  b.p("securityProfileName", () => input.securityProfileName!, "{securityProfileName}", false);
  const query: any = map({
    [_sPTA]: [, __expectNonNull(input[_sPTA]!, `securityProfileTargetArn`)],
  });
  let body: any;
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AttachThingPrincipalCommand
 */
export const se_AttachThingPrincipalCommand = async (
  input: AttachThingPrincipalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xap]: input[_p]!,
  });
  b.bp("/things/{thingName}/principals");
  b.p("thingName", () => input.thingName!, "{thingName}", false);
  const query: any = map({
    [_tPT]: [, input[_tPT]!],
  });
  let body: any;
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelAuditMitigationActionsTaskCommand
 */
export const se_CancelAuditMitigationActionsTaskCommand = async (
  input: CancelAuditMitigationActionsTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audit/mitigationactions/tasks/{taskId}/cancel");
  b.p("taskId", () => input.taskId!, "{taskId}", false);
  let body: any;
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelAuditTaskCommand
 */
export const se_CancelAuditTaskCommand = async (
  input: CancelAuditTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audit/tasks/{taskId}/cancel");
  b.p("taskId", () => input.taskId!, "{taskId}", false);
  let body: any;
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelCertificateTransferCommand
 */
export const se_CancelCertificateTransferCommand = async (
  input: CancelCertificateTransferCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/cancel-certificate-transfer/{certificateId}");
  b.p("certificateId", () => input.certificateId!, "{certificateId}", false);
  let body: any;
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelDetectMitigationActionsTaskCommand
 */
export const se_CancelDetectMitigationActionsTaskCommand = async (
  input: CancelDetectMitigationActionsTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/detect/mitigationactions/tasks/{taskId}/cancel");
  b.p("taskId", () => input.taskId!, "{taskId}", false);
  let body: any;
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelJobCommand
 */
export const se_CancelJobCommand = async (
  input: CancelJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/jobs/{jobId}/cancel");
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  const query: any = map({
    [_f]: [() => input.force !== void 0, () => input[_f]!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      comment: [],
      reasonCode: [],
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelJobExecutionCommand
 */
export const se_CancelJobExecutionCommand = async (
  input: CancelJobExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/things/{thingName}/jobs/{jobId}/cancel");
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  b.p("thingName", () => input.thingName!, "{thingName}", false);
  const query: any = map({
    [_f]: [() => input.force !== void 0, () => input[_f]!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      expectedVersion: [],
      statusDetails: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ClearDefaultAuthorizerCommand
 */
export const se_ClearDefaultAuthorizerCommand = async (
  input: ClearDefaultAuthorizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/default-authorizer");
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ConfirmTopicRuleDestinationCommand
 */
export const se_ConfirmTopicRuleDestinationCommand = async (
  input: ConfirmTopicRuleDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/confirmdestination/{confirmationToken+}");
  b.p("confirmationToken", () => input.confirmationToken!, "{confirmationToken+}", true);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAuditSuppressionCommand
 */
export const se_CreateAuditSuppressionCommand = async (
  input: CreateAuditSuppressionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/audit/suppressions/create");
  let body: any;
  body = JSON.stringify(
    take(input, {
      checkName: [],
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      expirationDate: (_) => _.getTime() / 1_000,
      resourceIdentifier: (_) => _json(_),
      suppressIndefinitely: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAuthorizerCommand
 */
export const se_CreateAuthorizerCommand = async (
  input: CreateAuthorizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/authorizer/{authorizerName}");
  b.p("authorizerName", () => input.authorizerName!, "{authorizerName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      authorizerFunctionArn: [],
      enableCachingForHttp: [],
      signingDisabled: [],
      status: [],
      tags: (_) => _json(_),
      tokenKeyName: [],
      tokenSigningPublicKeys: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateBillingGroupCommand
 */
export const se_CreateBillingGroupCommand = async (
  input: CreateBillingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/billing-groups/{billingGroupName}");
  b.p("billingGroupName", () => input.billingGroupName!, "{billingGroupName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      billingGroupProperties: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateCertificateFromCsrCommand
 */
export const se_CreateCertificateFromCsrCommand = async (
  input: CreateCertificateFromCsrCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/certificates");
  const query: any = map({
    [_sAA]: [() => input.setAsActive !== void 0, () => input[_sAA]!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      certificateSigningRequest: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateCertificateProviderCommand
 */
export const se_CreateCertificateProviderCommand = async (
  input: CreateCertificateProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/certificate-providers/{certificateProviderName}");
  b.p("certificateProviderName", () => input.certificateProviderName!, "{certificateProviderName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountDefaultForOperations: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      lambdaFunctionArn: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateCommandCommand
 */
export const se_CreateCommandCommand = async (
  input: CreateCommandCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/commands/{commandId}");
  b.p("commandId", () => input.commandId!, "{commandId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      displayName: [],
      mandatoryParameters: (_) => se_CommandParameterList(_, context),
      namespace: [],
      payload: (_) => se_CommandPayload(_, context),
      roleArn: [],
      tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateCustomMetricCommand
 */
export const se_CreateCustomMetricCommand = async (
  input: CreateCustomMetricCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/custom-metric/{metricName}");
  b.p("metricName", () => input.metricName!, "{metricName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      displayName: [],
      metricType: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDimensionCommand
 */
export const se_CreateDimensionCommand = async (
  input: CreateDimensionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/dimensions/{name}");
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      stringValues: (_) => _json(_),
      tags: (_) => _json(_),
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDomainConfigurationCommand
 */
export const se_CreateDomainConfigurationCommand = async (
  input: CreateDomainConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domainConfigurations/{domainConfigurationName}");
  b.p("domainConfigurationName", () => input.domainConfigurationName!, "{domainConfigurationName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      applicationProtocol: [],
      authenticationType: [],
      authorizerConfig: (_) => _json(_),
      clientCertificateConfig: (_) => _json(_),
      domainName: [],
      serverCertificateArns: (_) => _json(_),
      serverCertificateConfig: (_) => _json(_),
      serviceType: [],
      tags: (_) => _json(_),
      tlsConfig: (_) => _json(_),
      validationCertificateArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDynamicThingGroupCommand
 */
export const se_CreateDynamicThingGroupCommand = async (
  input: CreateDynamicThingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/dynamic-thing-groups/{thingGroupName}");
  b.p("thingGroupName", () => input.thingGroupName!, "{thingGroupName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      indexName: [],
      queryString: [],
      queryVersion: [],
      tags: (_) => _json(_),
      thingGroupProperties: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateFleetMetricCommand
 */
export const se_CreateFleetMetricCommand = async (
  input: CreateFleetMetricCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/fleet-metric/{metricName}");
  b.p("metricName", () => input.metricName!, "{metricName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      aggregationField: [],
      aggregationType: (_) => _json(_),
      description: [],
      indexName: [],
      period: [],
      queryString: [],
      queryVersion: [],
      tags: (_) => _json(_),
      unit: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateJobCommand
 */
export const se_CreateJobCommand = async (
  input: CreateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/jobs/{jobId}");
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      abortConfig: (_) => se_AbortConfig(_, context),
      description: [],
      destinationPackageVersions: (_) => _json(_),
      document: [],
      documentParameters: (_) => _json(_),
      documentSource: [],
      jobExecutionsRetryConfig: (_) => _json(_),
      jobExecutionsRolloutConfig: (_) => se_JobExecutionsRolloutConfig(_, context),
      jobTemplateArn: [],
      namespaceId: [],
      presignedUrlConfig: (_) => _json(_),
      schedulingConfig: (_) => _json(_),
      tags: (_) => _json(_),
      targetSelection: [],
      targets: (_) => _json(_),
      timeoutConfig: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateJobTemplateCommand
 */
export const se_CreateJobTemplateCommand = async (
  input: CreateJobTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/job-templates/{jobTemplateId}");
  b.p("jobTemplateId", () => input.jobTemplateId!, "{jobTemplateId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      abortConfig: (_) => se_AbortConfig(_, context),
      description: [],
      destinationPackageVersions: (_) => _json(_),
      document: [],
      documentSource: [],
      jobArn: [],
      jobExecutionsRetryConfig: (_) => _json(_),
      jobExecutionsRolloutConfig: (_) => se_JobExecutionsRolloutConfig(_, context),
      maintenanceWindows: (_) => _json(_),
      presignedUrlConfig: (_) => _json(_),
      tags: (_) => _json(_),
      timeoutConfig: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateKeysAndCertificateCommand
 */
export const se_CreateKeysAndCertificateCommand = async (
  input: CreateKeysAndCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/keys-and-certificate");
  const query: any = map({
    [_sAA]: [() => input.setAsActive !== void 0, () => input[_sAA]!.toString()],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMitigationActionCommand
 */
export const se_CreateMitigationActionCommand = async (
  input: CreateMitigationActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/mitigationactions/actions/{actionName}");
  b.p("actionName", () => input.actionName!, "{actionName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      actionParams: (_) => _json(_),
      roleArn: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateOTAUpdateCommand
 */
export const se_CreateOTAUpdateCommand = async (
  input: CreateOTAUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/otaUpdates/{otaUpdateId}");
  b.p("otaUpdateId", () => input.otaUpdateId!, "{otaUpdateId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      additionalParameters: (_) => _json(_),
      awsJobAbortConfig: (_) => se_AwsJobAbortConfig(_, context),
      awsJobExecutionsRolloutConfig: (_) => se_AwsJobExecutionsRolloutConfig(_, context),
      awsJobPresignedUrlConfig: (_) => _json(_),
      awsJobTimeoutConfig: (_) => _json(_),
      description: [],
      files: (_) => se_OTAUpdateFiles(_, context),
      protocols: (_) => _json(_),
      roleArn: [],
      tags: (_) => _json(_),
      targetSelection: [],
      targets: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePackageCommand
 */
export const se_CreatePackageCommand = async (
  input: CreatePackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/packages/{packageName}");
  b.p("packageName", () => input.packageName!, "{packageName}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePackageVersionCommand
 */
export const se_CreatePackageVersionCommand = async (
  input: CreatePackageVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/packages/{packageName}/versions/{versionName}");
  b.p("packageName", () => input.packageName!, "{packageName}", false);
  b.p("versionName", () => input.versionName!, "{versionName}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      artifact: (_) => _json(_),
      attributes: (_) => _json(_),
      description: [],
      recipe: [],
      tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePolicyCommand
 */
export const se_CreatePolicyCommand = async (
  input: CreatePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/policies/{policyName}");
  b.p("policyName", () => input.policyName!, "{policyName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      policyDocument: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePolicyVersionCommand
 */
export const se_CreatePolicyVersionCommand = async (
  input: CreatePolicyVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/policies/{policyName}/version");
  b.p("policyName", () => input.policyName!, "{policyName}", false);
  const query: any = map({
    [_sAD]: [() => input.setAsDefault !== void 0, () => input[_sAD]!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      policyDocument: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateProvisioningClaimCommand
 */
export const se_CreateProvisioningClaimCommand = async (
  input: CreateProvisioningClaimCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/provisioning-templates/{templateName}/provisioning-claim");
  b.p("templateName", () => input.templateName!, "{templateName}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateProvisioningTemplateCommand
 */
export const se_CreateProvisioningTemplateCommand = async (
  input: CreateProvisioningTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/provisioning-templates");
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      enabled: [],
      preProvisioningHook: (_) => _json(_),
      provisioningRoleArn: [],
      tags: (_) => _json(_),
      templateBody: [],
      templateName: [],
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateProvisioningTemplateVersionCommand
 */
export const se_CreateProvisioningTemplateVersionCommand = async (
  input: CreateProvisioningTemplateVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/provisioning-templates/{templateName}/versions");
  b.p("templateName", () => input.templateName!, "{templateName}", false);
  const query: any = map({
    [_sAD]: [() => input.setAsDefault !== void 0, () => input[_sAD]!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      templateBody: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRoleAliasCommand
 */
export const se_CreateRoleAliasCommand = async (
  input: CreateRoleAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/role-aliases/{roleAlias}");
  b.p("roleAlias", () => input.roleAlias!, "{roleAlias}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      credentialDurationSeconds: [],
      roleArn: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateScheduledAuditCommand
 */
export const se_CreateScheduledAuditCommand = async (
  input: CreateScheduledAuditCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/audit/scheduledaudits/{scheduledAuditName}");
  b.p("scheduledAuditName", () => input.scheduledAuditName!, "{scheduledAuditName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      dayOfMonth: [],
      dayOfWeek: [],
      frequency: [],
      tags: (_) => _json(_),
      targetCheckNames: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSecurityProfileCommand
 */
export const se_CreateSecurityProfileCommand = async (
  input: CreateSecurityProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/security-profiles/{securityProfileName}");
  b.p("securityProfileName", () => input.securityProfileName!, "{securityProfileName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      additionalMetricsToRetain: (_) => _json(_),
      additionalMetricsToRetainV2: (_) => _json(_),
      alertTargets: (_) => _json(_),
      behaviors: (_) => se_Behaviors(_, context),
      metricsExportConfig: (_) => _json(_),
      securityProfileDescription: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateStreamCommand
 */
export const se_CreateStreamCommand = async (
  input: CreateStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/streams/{streamId}");
  b.p("streamId", () => input.streamId!, "{streamId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      files: (_) => _json(_),
      roleArn: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateThingCommand
 */
export const se_CreateThingCommand = async (
  input: CreateThingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/things/{thingName}");
  b.p("thingName", () => input.thingName!, "{thingName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      attributePayload: (_) => _json(_),
      billingGroupName: [],
      thingTypeName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateThingGroupCommand
 */
export const se_CreateThingGroupCommand = async (
  input: CreateThingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/thing-groups/{thingGroupName}");
  b.p("thingGroupName", () => input.thingGroupName!, "{thingGroupName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      parentGroupName: [],
      tags: (_) => _json(_),
      thingGroupProperties: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateThingTypeCommand
 */
export const se_CreateThingTypeCommand = async (
  input: CreateThingTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/thing-types/{thingTypeName}");
  b.p("thingTypeName", () => input.thingTypeName!, "{thingTypeName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
      thingTypeProperties: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTopicRuleCommand
 */
export const se_CreateTopicRuleCommand = async (
  input: CreateTopicRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xat]: input[_t]!,
  });
  b.bp("/rules/{ruleName}");
  b.p("ruleName", () => input.ruleName!, "{ruleName}", false);
  let body: any;
  if (input.topicRulePayload !== undefined) {
    body = _json(input.topicRulePayload);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTopicRuleDestinationCommand
 */
export const se_CreateTopicRuleDestinationCommand = async (
  input: CreateTopicRuleDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/destinations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      destinationConfiguration: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAccountAuditConfigurationCommand
 */
export const se_DeleteAccountAuditConfigurationCommand = async (
  input: DeleteAccountAuditConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audit/configuration");
  const query: any = map({
    [_dSA]: [() => input.deleteScheduledAudits !== void 0, () => input[_dSA]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAuditSuppressionCommand
 */
export const se_DeleteAuditSuppressionCommand = async (
  input: DeleteAuditSuppressionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/audit/suppressions/delete");
  let body: any;
  body = JSON.stringify(
    take(input, {
      checkName: [],
      resourceIdentifier: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAuthorizerCommand
 */
export const se_DeleteAuthorizerCommand = async (
  input: DeleteAuthorizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/authorizer/{authorizerName}");
  b.p("authorizerName", () => input.authorizerName!, "{authorizerName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteBillingGroupCommand
 */
export const se_DeleteBillingGroupCommand = async (
  input: DeleteBillingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/billing-groups/{billingGroupName}");
  b.p("billingGroupName", () => input.billingGroupName!, "{billingGroupName}", false);
  const query: any = map({
    [_eV]: [() => input.expectedVersion !== void 0, () => input[_eV]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCACertificateCommand
 */
export const se_DeleteCACertificateCommand = async (
  input: DeleteCACertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/cacertificate/{certificateId}");
  b.p("certificateId", () => input.certificateId!, "{certificateId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCertificateCommand
 */
export const se_DeleteCertificateCommand = async (
  input: DeleteCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/certificates/{certificateId}");
  b.p("certificateId", () => input.certificateId!, "{certificateId}", false);
  const query: any = map({
    [_fD]: [() => input.forceDelete !== void 0, () => input[_fD]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCertificateProviderCommand
 */
export const se_DeleteCertificateProviderCommand = async (
  input: DeleteCertificateProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/certificate-providers/{certificateProviderName}");
  b.p("certificateProviderName", () => input.certificateProviderName!, "{certificateProviderName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCommandCommand
 */
export const se_DeleteCommandCommand = async (
  input: DeleteCommandCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/commands/{commandId}");
  b.p("commandId", () => input.commandId!, "{commandId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCommandExecutionCommand
 */
export const se_DeleteCommandExecutionCommand = async (
  input: DeleteCommandExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/command-executions/{executionId}");
  b.p("executionId", () => input.executionId!, "{executionId}", false);
  const query: any = map({
    [_tA]: [, __expectNonNull(input[_tA]!, `targetArn`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCustomMetricCommand
 */
export const se_DeleteCustomMetricCommand = async (
  input: DeleteCustomMetricCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/custom-metric/{metricName}");
  b.p("metricName", () => input.metricName!, "{metricName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDimensionCommand
 */
export const se_DeleteDimensionCommand = async (
  input: DeleteDimensionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/dimensions/{name}");
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDomainConfigurationCommand
 */
export const se_DeleteDomainConfigurationCommand = async (
  input: DeleteDomainConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domainConfigurations/{domainConfigurationName}");
  b.p("domainConfigurationName", () => input.domainConfigurationName!, "{domainConfigurationName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDynamicThingGroupCommand
 */
export const se_DeleteDynamicThingGroupCommand = async (
  input: DeleteDynamicThingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/dynamic-thing-groups/{thingGroupName}");
  b.p("thingGroupName", () => input.thingGroupName!, "{thingGroupName}", false);
  const query: any = map({
    [_eV]: [() => input.expectedVersion !== void 0, () => input[_eV]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteFleetMetricCommand
 */
export const se_DeleteFleetMetricCommand = async (
  input: DeleteFleetMetricCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/fleet-metric/{metricName}");
  b.p("metricName", () => input.metricName!, "{metricName}", false);
  const query: any = map({
    [_eV]: [() => input.expectedVersion !== void 0, () => input[_eV]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteJobCommand
 */
export const se_DeleteJobCommand = async (
  input: DeleteJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/jobs/{jobId}");
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  const query: any = map({
    [_f]: [() => input.force !== void 0, () => input[_f]!.toString()],
    [_nI]: [, input[_nI]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteJobExecutionCommand
 */
export const se_DeleteJobExecutionCommand = async (
  input: DeleteJobExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/things/{thingName}/jobs/{jobId}/executionNumber/{executionNumber}");
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  b.p("thingName", () => input.thingName!, "{thingName}", false);
  b.p("executionNumber", () => input.executionNumber!.toString(), "{executionNumber}", false);
  const query: any = map({
    [_f]: [() => input.force !== void 0, () => input[_f]!.toString()],
    [_nI]: [, input[_nI]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteJobTemplateCommand
 */
export const se_DeleteJobTemplateCommand = async (
  input: DeleteJobTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/job-templates/{jobTemplateId}");
  b.p("jobTemplateId", () => input.jobTemplateId!, "{jobTemplateId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMitigationActionCommand
 */
export const se_DeleteMitigationActionCommand = async (
  input: DeleteMitigationActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/mitigationactions/actions/{actionName}");
  b.p("actionName", () => input.actionName!, "{actionName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteOTAUpdateCommand
 */
export const se_DeleteOTAUpdateCommand = async (
  input: DeleteOTAUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/otaUpdates/{otaUpdateId}");
  b.p("otaUpdateId", () => input.otaUpdateId!, "{otaUpdateId}", false);
  const query: any = map({
    [_dS]: [() => input.deleteStream !== void 0, () => input[_dS]!.toString()],
    [_fDAWSJ]: [() => input.forceDeleteAWSJob !== void 0, () => input[_fDAWSJ]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePackageCommand
 */
export const se_DeletePackageCommand = async (
  input: DeletePackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/packages/{packageName}");
  b.p("packageName", () => input.packageName!, "{packageName}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePackageVersionCommand
 */
export const se_DeletePackageVersionCommand = async (
  input: DeletePackageVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/packages/{packageName}/versions/{versionName}");
  b.p("packageName", () => input.packageName!, "{packageName}", false);
  b.p("versionName", () => input.versionName!, "{versionName}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePolicyCommand
 */
export const se_DeletePolicyCommand = async (
  input: DeletePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/policies/{policyName}");
  b.p("policyName", () => input.policyName!, "{policyName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePolicyVersionCommand
 */
export const se_DeletePolicyVersionCommand = async (
  input: DeletePolicyVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/policies/{policyName}/version/{policyVersionId}");
  b.p("policyName", () => input.policyName!, "{policyName}", false);
  b.p("policyVersionId", () => input.policyVersionId!, "{policyVersionId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteProvisioningTemplateCommand
 */
export const se_DeleteProvisioningTemplateCommand = async (
  input: DeleteProvisioningTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/provisioning-templates/{templateName}");
  b.p("templateName", () => input.templateName!, "{templateName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteProvisioningTemplateVersionCommand
 */
export const se_DeleteProvisioningTemplateVersionCommand = async (
  input: DeleteProvisioningTemplateVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/provisioning-templates/{templateName}/versions/{versionId}");
  b.p("templateName", () => input.templateName!, "{templateName}", false);
  b.p("versionId", () => input.versionId!.toString(), "{versionId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRegistrationCodeCommand
 */
export const se_DeleteRegistrationCodeCommand = async (
  input: DeleteRegistrationCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/registrationcode");
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRoleAliasCommand
 */
export const se_DeleteRoleAliasCommand = async (
  input: DeleteRoleAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/role-aliases/{roleAlias}");
  b.p("roleAlias", () => input.roleAlias!, "{roleAlias}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteScheduledAuditCommand
 */
export const se_DeleteScheduledAuditCommand = async (
  input: DeleteScheduledAuditCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audit/scheduledaudits/{scheduledAuditName}");
  b.p("scheduledAuditName", () => input.scheduledAuditName!, "{scheduledAuditName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSecurityProfileCommand
 */
export const se_DeleteSecurityProfileCommand = async (
  input: DeleteSecurityProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/security-profiles/{securityProfileName}");
  b.p("securityProfileName", () => input.securityProfileName!, "{securityProfileName}", false);
  const query: any = map({
    [_eV]: [() => input.expectedVersion !== void 0, () => input[_eV]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteStreamCommand
 */
export const se_DeleteStreamCommand = async (
  input: DeleteStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/streams/{streamId}");
  b.p("streamId", () => input.streamId!, "{streamId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteThingCommand
 */
export const se_DeleteThingCommand = async (
  input: DeleteThingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/things/{thingName}");
  b.p("thingName", () => input.thingName!, "{thingName}", false);
  const query: any = map({
    [_eV]: [() => input.expectedVersion !== void 0, () => input[_eV]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteThingGroupCommand
 */
export const se_DeleteThingGroupCommand = async (
  input: DeleteThingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/thing-groups/{thingGroupName}");
  b.p("thingGroupName", () => input.thingGroupName!, "{thingGroupName}", false);
  const query: any = map({
    [_eV]: [() => input.expectedVersion !== void 0, () => input[_eV]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteThingTypeCommand
 */
export const se_DeleteThingTypeCommand = async (
  input: DeleteThingTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/thing-types/{thingTypeName}");
  b.p("thingTypeName", () => input.thingTypeName!, "{thingTypeName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTopicRuleCommand
 */
export const se_DeleteTopicRuleCommand = async (
  input: DeleteTopicRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/rules/{ruleName}");
  b.p("ruleName", () => input.ruleName!, "{ruleName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTopicRuleDestinationCommand
 */
export const se_DeleteTopicRuleDestinationCommand = async (
  input: DeleteTopicRuleDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/destinations/{arn+}");
  b.p("arn", () => input.arn!, "{arn+}", true);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteV2LoggingLevelCommand
 */
export const se_DeleteV2LoggingLevelCommand = async (
  input: DeleteV2LoggingLevelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2LoggingLevel");
  const query: any = map({
    [_tT]: [, __expectNonNull(input[_tT]!, `targetType`)],
    [_tN]: [, __expectNonNull(input[_tN]!, `targetName`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeprecateThingTypeCommand
 */
export const se_DeprecateThingTypeCommand = async (
  input: DeprecateThingTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/thing-types/{thingTypeName}/deprecate");
  b.p("thingTypeName", () => input.thingTypeName!, "{thingTypeName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      undoDeprecate: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAccountAuditConfigurationCommand
 */
export const se_DescribeAccountAuditConfigurationCommand = async (
  input: DescribeAccountAuditConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audit/configuration");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAuditFindingCommand
 */
export const se_DescribeAuditFindingCommand = async (
  input: DescribeAuditFindingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audit/findings/{findingId}");
  b.p("findingId", () => input.findingId!, "{findingId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAuditMitigationActionsTaskCommand
 */
export const se_DescribeAuditMitigationActionsTaskCommand = async (
  input: DescribeAuditMitigationActionsTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audit/mitigationactions/tasks/{taskId}");
  b.p("taskId", () => input.taskId!, "{taskId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAuditSuppressionCommand
 */
export const se_DescribeAuditSuppressionCommand = async (
  input: DescribeAuditSuppressionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/audit/suppressions/describe");
  let body: any;
  body = JSON.stringify(
    take(input, {
      checkName: [],
      resourceIdentifier: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAuditTaskCommand
 */
export const se_DescribeAuditTaskCommand = async (
  input: DescribeAuditTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audit/tasks/{taskId}");
  b.p("taskId", () => input.taskId!, "{taskId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAuthorizerCommand
 */
export const se_DescribeAuthorizerCommand = async (
  input: DescribeAuthorizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/authorizer/{authorizerName}");
  b.p("authorizerName", () => input.authorizerName!, "{authorizerName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeBillingGroupCommand
 */
export const se_DescribeBillingGroupCommand = async (
  input: DescribeBillingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/billing-groups/{billingGroupName}");
  b.p("billingGroupName", () => input.billingGroupName!, "{billingGroupName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeCACertificateCommand
 */
export const se_DescribeCACertificateCommand = async (
  input: DescribeCACertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/cacertificate/{certificateId}");
  b.p("certificateId", () => input.certificateId!, "{certificateId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeCertificateCommand
 */
export const se_DescribeCertificateCommand = async (
  input: DescribeCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/certificates/{certificateId}");
  b.p("certificateId", () => input.certificateId!, "{certificateId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeCertificateProviderCommand
 */
export const se_DescribeCertificateProviderCommand = async (
  input: DescribeCertificateProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/certificate-providers/{certificateProviderName}");
  b.p("certificateProviderName", () => input.certificateProviderName!, "{certificateProviderName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeCustomMetricCommand
 */
export const se_DescribeCustomMetricCommand = async (
  input: DescribeCustomMetricCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/custom-metric/{metricName}");
  b.p("metricName", () => input.metricName!, "{metricName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDefaultAuthorizerCommand
 */
export const se_DescribeDefaultAuthorizerCommand = async (
  input: DescribeDefaultAuthorizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/default-authorizer");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDetectMitigationActionsTaskCommand
 */
export const se_DescribeDetectMitigationActionsTaskCommand = async (
  input: DescribeDetectMitigationActionsTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/detect/mitigationactions/tasks/{taskId}");
  b.p("taskId", () => input.taskId!, "{taskId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDimensionCommand
 */
export const se_DescribeDimensionCommand = async (
  input: DescribeDimensionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/dimensions/{name}");
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDomainConfigurationCommand
 */
export const se_DescribeDomainConfigurationCommand = async (
  input: DescribeDomainConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domainConfigurations/{domainConfigurationName}");
  b.p("domainConfigurationName", () => input.domainConfigurationName!, "{domainConfigurationName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeEncryptionConfigurationCommand
 */
export const se_DescribeEncryptionConfigurationCommand = async (
  input: DescribeEncryptionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/encryption-configuration");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeEndpointCommand
 */
export const se_DescribeEndpointCommand = async (
  input: DescribeEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/endpoint");
  const query: any = map({
    [_eT]: [, input[_eT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeEventConfigurationsCommand
 */
export const se_DescribeEventConfigurationsCommand = async (
  input: DescribeEventConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/event-configurations");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeFleetMetricCommand
 */
export const se_DescribeFleetMetricCommand = async (
  input: DescribeFleetMetricCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/fleet-metric/{metricName}");
  b.p("metricName", () => input.metricName!, "{metricName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeIndexCommand
 */
export const se_DescribeIndexCommand = async (
  input: DescribeIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/indices/{indexName}");
  b.p("indexName", () => input.indexName!, "{indexName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeJobCommand
 */
export const se_DescribeJobCommand = async (
  input: DescribeJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/jobs/{jobId}");
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  const query: any = map({
    [_bS]: [() => input.beforeSubstitution !== void 0, () => input[_bS]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeJobExecutionCommand
 */
export const se_DescribeJobExecutionCommand = async (
  input: DescribeJobExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/things/{thingName}/jobs/{jobId}");
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  b.p("thingName", () => input.thingName!, "{thingName}", false);
  const query: any = map({
    [_eN]: [() => input.executionNumber !== void 0, () => input[_eN]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeJobTemplateCommand
 */
export const se_DescribeJobTemplateCommand = async (
  input: DescribeJobTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/job-templates/{jobTemplateId}");
  b.p("jobTemplateId", () => input.jobTemplateId!, "{jobTemplateId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeManagedJobTemplateCommand
 */
export const se_DescribeManagedJobTemplateCommand = async (
  input: DescribeManagedJobTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/managed-job-templates/{templateName}");
  b.p("templateName", () => input.templateName!, "{templateName}", false);
  const query: any = map({
    [_tV]: [, input[_tV]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeMitigationActionCommand
 */
export const se_DescribeMitigationActionCommand = async (
  input: DescribeMitigationActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/mitigationactions/actions/{actionName}");
  b.p("actionName", () => input.actionName!, "{actionName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeProvisioningTemplateCommand
 */
export const se_DescribeProvisioningTemplateCommand = async (
  input: DescribeProvisioningTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/provisioning-templates/{templateName}");
  b.p("templateName", () => input.templateName!, "{templateName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeProvisioningTemplateVersionCommand
 */
export const se_DescribeProvisioningTemplateVersionCommand = async (
  input: DescribeProvisioningTemplateVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/provisioning-templates/{templateName}/versions/{versionId}");
  b.p("templateName", () => input.templateName!, "{templateName}", false);
  b.p("versionId", () => input.versionId!.toString(), "{versionId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeRoleAliasCommand
 */
export const se_DescribeRoleAliasCommand = async (
  input: DescribeRoleAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/role-aliases/{roleAlias}");
  b.p("roleAlias", () => input.roleAlias!, "{roleAlias}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeScheduledAuditCommand
 */
export const se_DescribeScheduledAuditCommand = async (
  input: DescribeScheduledAuditCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audit/scheduledaudits/{scheduledAuditName}");
  b.p("scheduledAuditName", () => input.scheduledAuditName!, "{scheduledAuditName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeSecurityProfileCommand
 */
export const se_DescribeSecurityProfileCommand = async (
  input: DescribeSecurityProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/security-profiles/{securityProfileName}");
  b.p("securityProfileName", () => input.securityProfileName!, "{securityProfileName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeStreamCommand
 */
export const se_DescribeStreamCommand = async (
  input: DescribeStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/streams/{streamId}");
  b.p("streamId", () => input.streamId!, "{streamId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeThingCommand
 */
export const se_DescribeThingCommand = async (
  input: DescribeThingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/things/{thingName}");
  b.p("thingName", () => input.thingName!, "{thingName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeThingGroupCommand
 */
export const se_DescribeThingGroupCommand = async (
  input: DescribeThingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/thing-groups/{thingGroupName}");
  b.p("thingGroupName", () => input.thingGroupName!, "{thingGroupName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeThingRegistrationTaskCommand
 */
export const se_DescribeThingRegistrationTaskCommand = async (
  input: DescribeThingRegistrationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/thing-registration-tasks/{taskId}");
  b.p("taskId", () => input.taskId!, "{taskId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeThingTypeCommand
 */
export const se_DescribeThingTypeCommand = async (
  input: DescribeThingTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/thing-types/{thingTypeName}");
  b.p("thingTypeName", () => input.thingTypeName!, "{thingTypeName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DetachPolicyCommand
 */
export const se_DetachPolicyCommand = async (
  input: DetachPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/target-policies/{policyName}");
  b.p("policyName", () => input.policyName!, "{policyName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      target: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DetachPrincipalPolicyCommand
 */
export const se_DetachPrincipalPolicyCommand = async (
  input: DetachPrincipalPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaip]: input[_p]!,
  });
  b.bp("/principal-policies/{policyName}");
  b.p("policyName", () => input.policyName!, "{policyName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DetachSecurityProfileCommand
 */
export const se_DetachSecurityProfileCommand = async (
  input: DetachSecurityProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/security-profiles/{securityProfileName}/targets");
  b.p("securityProfileName", () => input.securityProfileName!, "{securityProfileName}", false);
  const query: any = map({
    [_sPTA]: [, __expectNonNull(input[_sPTA]!, `securityProfileTargetArn`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DetachThingPrincipalCommand
 */
export const se_DetachThingPrincipalCommand = async (
  input: DetachThingPrincipalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xap]: input[_p]!,
  });
  b.bp("/things/{thingName}/principals");
  b.p("thingName", () => input.thingName!, "{thingName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisableTopicRuleCommand
 */
export const se_DisableTopicRuleCommand = async (
  input: DisableTopicRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/rules/{ruleName}/disable");
  b.p("ruleName", () => input.ruleName!, "{ruleName}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateSbomFromPackageVersionCommand
 */
export const se_DisassociateSbomFromPackageVersionCommand = async (
  input: DisassociateSbomFromPackageVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/packages/{packageName}/versions/{versionName}/sbom");
  b.p("packageName", () => input.packageName!, "{packageName}", false);
  b.p("versionName", () => input.versionName!, "{versionName}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1EnableTopicRuleCommand
 */
export const se_EnableTopicRuleCommand = async (
  input: EnableTopicRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/rules/{ruleName}/enable");
  b.p("ruleName", () => input.ruleName!, "{ruleName}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetBehaviorModelTrainingSummariesCommand
 */
export const se_GetBehaviorModelTrainingSummariesCommand = async (
  input: GetBehaviorModelTrainingSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/behavior-model-training/summaries");
  const query: any = map({
    [_sPN]: [, input[_sPN]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetBucketsAggregationCommand
 */
export const se_GetBucketsAggregationCommand = async (
  input: GetBucketsAggregationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/indices/buckets");
  let body: any;
  body = JSON.stringify(
    take(input, {
      aggregationField: [],
      bucketsAggregationType: (_) => _json(_),
      indexName: [],
      queryString: [],
      queryVersion: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCardinalityCommand
 */
export const se_GetCardinalityCommand = async (
  input: GetCardinalityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/indices/cardinality");
  let body: any;
  body = JSON.stringify(
    take(input, {
      aggregationField: [],
      indexName: [],
      queryString: [],
      queryVersion: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCommandCommand
 */
export const se_GetCommandCommand = async (
  input: GetCommandCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/commands/{commandId}");
  b.p("commandId", () => input.commandId!, "{commandId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCommandExecutionCommand
 */
export const se_GetCommandExecutionCommand = async (
  input: GetCommandExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/command-executions/{executionId}");
  b.p("executionId", () => input.executionId!, "{executionId}", false);
  const query: any = map({
    [_tA]: [, __expectNonNull(input[_tA]!, `targetArn`)],
    [_iR]: [() => input.includeResult !== void 0, () => input[_iR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEffectivePoliciesCommand
 */
export const se_GetEffectivePoliciesCommand = async (
  input: GetEffectivePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/effective-policies");
  const query: any = map({
    [_tNh]: [, input[_tNh]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      cognitoIdentityPoolId: [],
      principal: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetIndexingConfigurationCommand
 */
export const se_GetIndexingConfigurationCommand = async (
  input: GetIndexingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/indexing/config");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetJobDocumentCommand
 */
export const se_GetJobDocumentCommand = async (
  input: GetJobDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/jobs/{jobId}/job-document");
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  const query: any = map({
    [_bS]: [() => input.beforeSubstitution !== void 0, () => input[_bS]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLoggingOptionsCommand
 */
export const se_GetLoggingOptionsCommand = async (
  input: GetLoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/loggingOptions");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetOTAUpdateCommand
 */
export const se_GetOTAUpdateCommand = async (
  input: GetOTAUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/otaUpdates/{otaUpdateId}");
  b.p("otaUpdateId", () => input.otaUpdateId!, "{otaUpdateId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPackageCommand
 */
export const se_GetPackageCommand = async (
  input: GetPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/packages/{packageName}");
  b.p("packageName", () => input.packageName!, "{packageName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPackageConfigurationCommand
 */
export const se_GetPackageConfigurationCommand = async (
  input: GetPackageConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/package-configuration");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPackageVersionCommand
 */
export const se_GetPackageVersionCommand = async (
  input: GetPackageVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/packages/{packageName}/versions/{versionName}");
  b.p("packageName", () => input.packageName!, "{packageName}", false);
  b.p("versionName", () => input.versionName!, "{versionName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPercentilesCommand
 */
export const se_GetPercentilesCommand = async (
  input: GetPercentilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/indices/percentiles");
  let body: any;
  body = JSON.stringify(
    take(input, {
      aggregationField: [],
      indexName: [],
      percents: (_) => se_PercentList(_, context),
      queryString: [],
      queryVersion: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPolicyCommand
 */
export const se_GetPolicyCommand = async (
  input: GetPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/policies/{policyName}");
  b.p("policyName", () => input.policyName!, "{policyName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPolicyVersionCommand
 */
export const se_GetPolicyVersionCommand = async (
  input: GetPolicyVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/policies/{policyName}/version/{policyVersionId}");
  b.p("policyName", () => input.policyName!, "{policyName}", false);
  b.p("policyVersionId", () => input.policyVersionId!, "{policyVersionId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRegistrationCodeCommand
 */
export const se_GetRegistrationCodeCommand = async (
  input: GetRegistrationCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/registrationcode");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetStatisticsCommand
 */
export const se_GetStatisticsCommand = async (
  input: GetStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/indices/statistics");
  let body: any;
  body = JSON.stringify(
    take(input, {
      aggregationField: [],
      indexName: [],
      queryString: [],
      queryVersion: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetThingConnectivityDataCommand
 */
export const se_GetThingConnectivityDataCommand = async (
  input: GetThingConnectivityDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/things/{thingName}/connectivity-data");
  b.p("thingName", () => input.thingName!, "{thingName}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTopicRuleCommand
 */
export const se_GetTopicRuleCommand = async (
  input: GetTopicRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/rules/{ruleName}");
  b.p("ruleName", () => input.ruleName!, "{ruleName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTopicRuleDestinationCommand
 */
export const se_GetTopicRuleDestinationCommand = async (
  input: GetTopicRuleDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/destinations/{arn+}");
  b.p("arn", () => input.arn!, "{arn+}", true);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetV2LoggingOptionsCommand
 */
export const se_GetV2LoggingOptionsCommand = async (
  input: GetV2LoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2LoggingOptions");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListActiveViolationsCommand
 */
export const se_ListActiveViolationsCommand = async (
  input: ListActiveViolationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/active-violations");
  const query: any = map({
    [_tNh]: [, input[_tNh]!],
    [_sPN]: [, input[_sPN]!],
    [_bCT]: [, input[_bCT]!],
    [_lSA]: [() => input.listSuppressedAlerts !== void 0, () => input[_lSA]!.toString()],
    [_vS]: [, input[_vS]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAttachedPoliciesCommand
 */
export const se_ListAttachedPoliciesCommand = async (
  input: ListAttachedPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/attached-policies/{target}");
  b.p("target", () => input.target!, "{target}", false);
  const query: any = map({
    [_r]: [() => input.recursive !== void 0, () => input[_r]!.toString()],
    [_m]: [, input[_m]!],
    [_pS]: [() => input.pageSize !== void 0, () => input[_pS]!.toString()],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAuditFindingsCommand
 */
export const se_ListAuditFindingsCommand = async (
  input: ListAuditFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/audit/findings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      checkName: [],
      endTime: (_) => _.getTime() / 1_000,
      listSuppressedFindings: [],
      maxResults: [],
      nextToken: [],
      resourceIdentifier: (_) => _json(_),
      startTime: (_) => _.getTime() / 1_000,
      taskId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAuditMitigationActionsExecutionsCommand
 */
export const se_ListAuditMitigationActionsExecutionsCommand = async (
  input: ListAuditMitigationActionsExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audit/mitigationactions/executions");
  const query: any = map({
    [_tI]: [, __expectNonNull(input[_tI]!, `taskId`)],
    [_aS]: [, input[_aS]!],
    [_fI]: [, __expectNonNull(input[_fI]!, `findingId`)],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAuditMitigationActionsTasksCommand
 */
export const se_ListAuditMitigationActionsTasksCommand = async (
  input: ListAuditMitigationActionsTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audit/mitigationactions/tasks");
  const query: any = map({
    [_aTI]: [, input[_aTI]!],
    [_fI]: [, input[_fI]!],
    [_tS]: [, input[_tS]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_sT]: [__expectNonNull(input.startTime, `startTime`) != null, () => __serializeDateTime(input[_sT]!).toString()],
    [_eTn]: [__expectNonNull(input.endTime, `endTime`) != null, () => __serializeDateTime(input[_eTn]!).toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAuditSuppressionsCommand
 */
export const se_ListAuditSuppressionsCommand = async (
  input: ListAuditSuppressionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/audit/suppressions/list");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ascendingOrder: [],
      checkName: [],
      maxResults: [],
      nextToken: [],
      resourceIdentifier: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAuditTasksCommand
 */
export const se_ListAuditTasksCommand = async (
  input: ListAuditTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audit/tasks");
  const query: any = map({
    [_sT]: [__expectNonNull(input.startTime, `startTime`) != null, () => __serializeDateTime(input[_sT]!).toString()],
    [_eTn]: [__expectNonNull(input.endTime, `endTime`) != null, () => __serializeDateTime(input[_eTn]!).toString()],
    [_tTa]: [, input[_tTa]!],
    [_tS]: [, input[_tS]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAuthorizersCommand
 */
export const se_ListAuthorizersCommand = async (
  input: ListAuthorizersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/authorizers");
  const query: any = map({
    [_pS]: [() => input.pageSize !== void 0, () => input[_pS]!.toString()],
    [_m]: [, input[_m]!],
    [_iAO]: [() => input.ascendingOrder !== void 0, () => input[_aO]!.toString()],
    [_s]: [, input[_s]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListBillingGroupsCommand
 */
export const se_ListBillingGroupsCommand = async (
  input: ListBillingGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/billing-groups");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nPF]: [, input[_nPF]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCACertificatesCommand
 */
export const se_ListCACertificatesCommand = async (
  input: ListCACertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/cacertificates");
  const query: any = map({
    [_pS]: [() => input.pageSize !== void 0, () => input[_pS]!.toString()],
    [_m]: [, input[_m]!],
    [_iAO]: [() => input.ascendingOrder !== void 0, () => input[_aO]!.toString()],
    [_tNe]: [, input[_tNe]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCertificateProvidersCommand
 */
export const se_ListCertificateProvidersCommand = async (
  input: ListCertificateProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/certificate-providers");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_iAO]: [() => input.ascendingOrder !== void 0, () => input[_aO]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCertificatesCommand
 */
export const se_ListCertificatesCommand = async (
  input: ListCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/certificates");
  const query: any = map({
    [_pS]: [() => input.pageSize !== void 0, () => input[_pS]!.toString()],
    [_m]: [, input[_m]!],
    [_iAO]: [() => input.ascendingOrder !== void 0, () => input[_aO]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCertificatesByCACommand
 */
export const se_ListCertificatesByCACommand = async (
  input: ListCertificatesByCACommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/certificates-by-ca/{caCertificateId}");
  b.p("caCertificateId", () => input.caCertificateId!, "{caCertificateId}", false);
  const query: any = map({
    [_pS]: [() => input.pageSize !== void 0, () => input[_pS]!.toString()],
    [_m]: [, input[_m]!],
    [_iAO]: [() => input.ascendingOrder !== void 0, () => input[_aO]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCommandExecutionsCommand
 */
export const se_ListCommandExecutionsCommand = async (
  input: ListCommandExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/command-executions");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      commandArn: [],
      completedTimeFilter: (_) => _json(_),
      namespace: [],
      sortOrder: [],
      startedTimeFilter: (_) => _json(_),
      status: [],
      targetArn: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCommandsCommand
 */
export const se_ListCommandsCommand = async (
  input: ListCommandsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/commands");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_n]: [, input[_n]!],
    [_cPN]: [, input[_cPN]!],
    [_sO]: [, input[_sO]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCustomMetricsCommand
 */
export const se_ListCustomMetricsCommand = async (
  input: ListCustomMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/custom-metrics");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDetectMitigationActionsExecutionsCommand
 */
export const se_ListDetectMitigationActionsExecutionsCommand = async (
  input: ListDetectMitigationActionsExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/detect/mitigationactions/executions");
  const query: any = map({
    [_tI]: [, input[_tI]!],
    [_vI]: [, input[_vI]!],
    [_tNh]: [, input[_tNh]!],
    [_sT]: [() => input.startTime !== void 0, () => __serializeDateTime(input[_sT]!).toString()],
    [_eTn]: [() => input.endTime !== void 0, () => __serializeDateTime(input[_eTn]!).toString()],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDetectMitigationActionsTasksCommand
 */
export const se_ListDetectMitigationActionsTasksCommand = async (
  input: ListDetectMitigationActionsTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/detect/mitigationactions/tasks");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_sT]: [__expectNonNull(input.startTime, `startTime`) != null, () => __serializeDateTime(input[_sT]!).toString()],
    [_eTn]: [__expectNonNull(input.endTime, `endTime`) != null, () => __serializeDateTime(input[_eTn]!).toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDimensionsCommand
 */
export const se_ListDimensionsCommand = async (
  input: ListDimensionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/dimensions");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDomainConfigurationsCommand
 */
export const se_ListDomainConfigurationsCommand = async (
  input: ListDomainConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domainConfigurations");
  const query: any = map({
    [_m]: [, input[_m]!],
    [_pS]: [() => input.pageSize !== void 0, () => input[_pS]!.toString()],
    [_sTe]: [, input[_sTe]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFleetMetricsCommand
 */
export const se_ListFleetMetricsCommand = async (
  input: ListFleetMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/fleet-metrics");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListIndicesCommand
 */
export const se_ListIndicesCommand = async (
  input: ListIndicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/indices");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListJobExecutionsForJobCommand
 */
export const se_ListJobExecutionsForJobCommand = async (
  input: ListJobExecutionsForJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/jobs/{jobId}/things");
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  const query: any = map({
    [_s]: [, input[_s]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListJobExecutionsForThingCommand
 */
export const se_ListJobExecutionsForThingCommand = async (
  input: ListJobExecutionsForThingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/things/{thingName}/jobs");
  b.p("thingName", () => input.thingName!, "{thingName}", false);
  const query: any = map({
    [_s]: [, input[_s]!],
    [_nI]: [, input[_nI]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_jI]: [, input[_jI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListJobsCommand
 */
export const se_ListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/jobs");
  const query: any = map({
    [_s]: [, input[_s]!],
    [_tSa]: [, input[_tSa]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_tGN]: [, input[_tGN]!],
    [_tGI]: [, input[_tGI]!],
    [_nI]: [, input[_nI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListJobTemplatesCommand
 */
export const se_ListJobTemplatesCommand = async (
  input: ListJobTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/job-templates");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListManagedJobTemplatesCommand
 */
export const se_ListManagedJobTemplatesCommand = async (
  input: ListManagedJobTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/managed-job-templates");
  const query: any = map({
    [_tNe]: [, input[_tNe]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMetricValuesCommand
 */
export const se_ListMetricValuesCommand = async (
  input: ListMetricValuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/metric-values");
  const query: any = map({
    [_tNh]: [, __expectNonNull(input[_tNh]!, `thingName`)],
    [_mN]: [, __expectNonNull(input[_mN]!, `metricName`)],
    [_dN]: [, input[_dN]!],
    [_dVO]: [, input[_dVO]!],
    [_sT]: [__expectNonNull(input.startTime, `startTime`) != null, () => __serializeDateTime(input[_sT]!).toString()],
    [_eTn]: [__expectNonNull(input.endTime, `endTime`) != null, () => __serializeDateTime(input[_eTn]!).toString()],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMitigationActionsCommand
 */
export const se_ListMitigationActionsCommand = async (
  input: ListMitigationActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/mitigationactions/actions");
  const query: any = map({
    [_aT]: [, input[_aT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListOTAUpdatesCommand
 */
export const se_ListOTAUpdatesCommand = async (
  input: ListOTAUpdatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/otaUpdates");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_oUS]: [, input[_oUS]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListOutgoingCertificatesCommand
 */
export const se_ListOutgoingCertificatesCommand = async (
  input: ListOutgoingCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/certificates-out-going");
  const query: any = map({
    [_pS]: [() => input.pageSize !== void 0, () => input[_pS]!.toString()],
    [_m]: [, input[_m]!],
    [_iAO]: [() => input.ascendingOrder !== void 0, () => input[_aO]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPackagesCommand
 */
export const se_ListPackagesCommand = async (
  input: ListPackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/packages");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPackageVersionsCommand
 */
export const se_ListPackageVersionsCommand = async (
  input: ListPackageVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/packages/{packageName}/versions");
  b.p("packageName", () => input.packageName!, "{packageName}", false);
  const query: any = map({
    [_s]: [, input[_s]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPoliciesCommand
 */
export const se_ListPoliciesCommand = async (
  input: ListPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/policies");
  const query: any = map({
    [_m]: [, input[_m]!],
    [_pS]: [() => input.pageSize !== void 0, () => input[_pS]!.toString()],
    [_iAO]: [() => input.ascendingOrder !== void 0, () => input[_aO]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPolicyPrincipalsCommand
 */
export const se_ListPolicyPrincipalsCommand = async (
  input: ListPolicyPrincipalsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaip_]: input[_pN]!,
  });
  b.bp("/policy-principals");
  const query: any = map({
    [_m]: [, input[_m]!],
    [_pS]: [() => input.pageSize !== void 0, () => input[_pS]!.toString()],
    [_iAO]: [() => input.ascendingOrder !== void 0, () => input[_aO]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPolicyVersionsCommand
 */
export const se_ListPolicyVersionsCommand = async (
  input: ListPolicyVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/policies/{policyName}/version");
  b.p("policyName", () => input.policyName!, "{policyName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPrincipalPoliciesCommand
 */
export const se_ListPrincipalPoliciesCommand = async (
  input: ListPrincipalPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaip]: input[_p]!,
  });
  b.bp("/principal-policies");
  const query: any = map({
    [_m]: [, input[_m]!],
    [_pS]: [() => input.pageSize !== void 0, () => input[_pS]!.toString()],
    [_iAO]: [() => input.ascendingOrder !== void 0, () => input[_aO]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPrincipalThingsCommand
 */
export const se_ListPrincipalThingsCommand = async (
  input: ListPrincipalThingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xap]: input[_p]!,
  });
  b.bp("/principals/things");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPrincipalThingsV2Command
 */
export const se_ListPrincipalThingsV2Command = async (
  input: ListPrincipalThingsV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xap]: input[_p]!,
  });
  b.bp("/principals/things-v2");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_tPT]: [, input[_tPT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProvisioningTemplatesCommand
 */
export const se_ListProvisioningTemplatesCommand = async (
  input: ListProvisioningTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/provisioning-templates");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProvisioningTemplateVersionsCommand
 */
export const se_ListProvisioningTemplateVersionsCommand = async (
  input: ListProvisioningTemplateVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/provisioning-templates/{templateName}/versions");
  b.p("templateName", () => input.templateName!, "{templateName}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRelatedResourcesForAuditFindingCommand
 */
export const se_ListRelatedResourcesForAuditFindingCommand = async (
  input: ListRelatedResourcesForAuditFindingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audit/relatedResources");
  const query: any = map({
    [_fI]: [, __expectNonNull(input[_fI]!, `findingId`)],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRoleAliasesCommand
 */
export const se_ListRoleAliasesCommand = async (
  input: ListRoleAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/role-aliases");
  const query: any = map({
    [_pS]: [() => input.pageSize !== void 0, () => input[_pS]!.toString()],
    [_m]: [, input[_m]!],
    [_iAO]: [() => input.ascendingOrder !== void 0, () => input[_aO]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSbomValidationResultsCommand
 */
export const se_ListSbomValidationResultsCommand = async (
  input: ListSbomValidationResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/packages/{packageName}/versions/{versionName}/sbom-validation-results");
  b.p("packageName", () => input.packageName!, "{packageName}", false);
  b.p("versionName", () => input.versionName!, "{versionName}", false);
  const query: any = map({
    [_vR]: [, input[_vR]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListScheduledAuditsCommand
 */
export const se_ListScheduledAuditsCommand = async (
  input: ListScheduledAuditsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audit/scheduledaudits");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSecurityProfilesCommand
 */
export const se_ListSecurityProfilesCommand = async (
  input: ListSecurityProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/security-profiles");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_dN]: [, input[_dN]!],
    [_mN]: [, input[_mN]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSecurityProfilesForTargetCommand
 */
export const se_ListSecurityProfilesForTargetCommand = async (
  input: ListSecurityProfilesForTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/security-profiles-for-target");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_r]: [() => input.recursive !== void 0, () => input[_r]!.toString()],
    [_sPTA]: [, __expectNonNull(input[_sPTA]!, `securityProfileTargetArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListStreamsCommand
 */
export const se_ListStreamsCommand = async (
  input: ListStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/streams");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_iAO]: [() => input.ascendingOrder !== void 0, () => input[_aO]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags");
  const query: any = map({
    [_rA]: [, __expectNonNull(input[_rA]!, `resourceArn`)],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTargetsForPolicyCommand
 */
export const se_ListTargetsForPolicyCommand = async (
  input: ListTargetsForPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/policy-targets/{policyName}");
  b.p("policyName", () => input.policyName!, "{policyName}", false);
  const query: any = map({
    [_m]: [, input[_m]!],
    [_pS]: [() => input.pageSize !== void 0, () => input[_pS]!.toString()],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTargetsForSecurityProfileCommand
 */
export const se_ListTargetsForSecurityProfileCommand = async (
  input: ListTargetsForSecurityProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/security-profiles/{securityProfileName}/targets");
  b.p("securityProfileName", () => input.securityProfileName!, "{securityProfileName}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListThingGroupsCommand
 */
export const se_ListThingGroupsCommand = async (
  input: ListThingGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/thing-groups");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_pG]: [, input[_pG]!],
    [_nPF]: [, input[_nPF]!],
    [_r]: [() => input.recursive !== void 0, () => input[_r]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListThingGroupsForThingCommand
 */
export const se_ListThingGroupsForThingCommand = async (
  input: ListThingGroupsForThingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/things/{thingName}/thing-groups");
  b.p("thingName", () => input.thingName!, "{thingName}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListThingPrincipalsCommand
 */
export const se_ListThingPrincipalsCommand = async (
  input: ListThingPrincipalsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/things/{thingName}/principals");
  b.p("thingName", () => input.thingName!, "{thingName}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListThingPrincipalsV2Command
 */
export const se_ListThingPrincipalsV2Command = async (
  input: ListThingPrincipalsV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/things/{thingName}/principals-v2");
  b.p("thingName", () => input.thingName!, "{thingName}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_tPT]: [, input[_tPT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListThingRegistrationTaskReportsCommand
 */
export const se_ListThingRegistrationTaskReportsCommand = async (
  input: ListThingRegistrationTaskReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/thing-registration-tasks/{taskId}/reports");
  b.p("taskId", () => input.taskId!, "{taskId}", false);
  const query: any = map({
    [_rT]: [, __expectNonNull(input[_rT]!, `reportType`)],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListThingRegistrationTasksCommand
 */
export const se_ListThingRegistrationTasksCommand = async (
  input: ListThingRegistrationTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/thing-registration-tasks");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_s]: [, input[_s]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListThingsCommand
 */
export const se_ListThingsCommand = async (
  input: ListThingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/things");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_aN]: [, input[_aN]!],
    [_aV]: [, input[_aV]!],
    [_tTN]: [, input[_tTN]!],
    [_uPAV]: [() => input.usePrefixAttributeValue !== void 0, () => input[_uPAV]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListThingsInBillingGroupCommand
 */
export const se_ListThingsInBillingGroupCommand = async (
  input: ListThingsInBillingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/billing-groups/{billingGroupName}/things");
  b.p("billingGroupName", () => input.billingGroupName!, "{billingGroupName}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListThingsInThingGroupCommand
 */
export const se_ListThingsInThingGroupCommand = async (
  input: ListThingsInThingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/thing-groups/{thingGroupName}/things");
  b.p("thingGroupName", () => input.thingGroupName!, "{thingGroupName}", false);
  const query: any = map({
    [_r]: [() => input.recursive !== void 0, () => input[_r]!.toString()],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListThingTypesCommand
 */
export const se_ListThingTypesCommand = async (
  input: ListThingTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/thing-types");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_tTN]: [, input[_tTN]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTopicRuleDestinationsCommand
 */
export const se_ListTopicRuleDestinationsCommand = async (
  input: ListTopicRuleDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/destinations");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTopicRulesCommand
 */
export const se_ListTopicRulesCommand = async (
  input: ListTopicRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/rules");
  const query: any = map({
    [_to]: [, input[_to]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_rD]: [() => input.ruleDisabled !== void 0, () => input[_rD]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListV2LoggingLevelsCommand
 */
export const se_ListV2LoggingLevelsCommand = async (
  input: ListV2LoggingLevelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2LoggingLevel");
  const query: any = map({
    [_tT]: [, input[_tT]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListViolationEventsCommand
 */
export const se_ListViolationEventsCommand = async (
  input: ListViolationEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/violation-events");
  const query: any = map({
    [_sT]: [__expectNonNull(input.startTime, `startTime`) != null, () => __serializeDateTime(input[_sT]!).toString()],
    [_eTn]: [__expectNonNull(input.endTime, `endTime`) != null, () => __serializeDateTime(input[_eTn]!).toString()],
    [_tNh]: [, input[_tNh]!],
    [_sPN]: [, input[_sPN]!],
    [_bCT]: [, input[_bCT]!],
    [_lSA]: [() => input.listSuppressedAlerts !== void 0, () => input[_lSA]!.toString()],
    [_vS]: [, input[_vS]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutVerificationStateOnViolationCommand
 */
export const se_PutVerificationStateOnViolationCommand = async (
  input: PutVerificationStateOnViolationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/violations/verification-state/{violationId}");
  b.p("violationId", () => input.violationId!, "{violationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      verificationState: [],
      verificationStateDescription: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RegisterCACertificateCommand
 */
export const se_RegisterCACertificateCommand = async (
  input: RegisterCACertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/cacertificate");
  const query: any = map({
    [_sAA]: [() => input.setAsActive !== void 0, () => input[_sAA]!.toString()],
    [_aAR]: [() => input.allowAutoRegistration !== void 0, () => input[_aAR]!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      caCertificate: [],
      certificateMode: [],
      registrationConfig: (_) => _json(_),
      tags: (_) => _json(_),
      verificationCertificate: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RegisterCertificateCommand
 */
export const se_RegisterCertificateCommand = async (
  input: RegisterCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/certificate/register");
  const query: any = map({
    [_sAA]: [() => input.setAsActive !== void 0, () => input[_sAA]!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      caCertificatePem: [],
      certificatePem: [],
      status: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RegisterCertificateWithoutCACommand
 */
export const se_RegisterCertificateWithoutCACommand = async (
  input: RegisterCertificateWithoutCACommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/certificate/register-no-ca");
  let body: any;
  body = JSON.stringify(
    take(input, {
      certificatePem: [],
      status: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RegisterThingCommand
 */
export const se_RegisterThingCommand = async (
  input: RegisterThingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/things");
  let body: any;
  body = JSON.stringify(
    take(input, {
      parameters: (_) => _json(_),
      templateBody: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RejectCertificateTransferCommand
 */
export const se_RejectCertificateTransferCommand = async (
  input: RejectCertificateTransferCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/reject-certificate-transfer/{certificateId}");
  b.p("certificateId", () => input.certificateId!, "{certificateId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      rejectReason: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RemoveThingFromBillingGroupCommand
 */
export const se_RemoveThingFromBillingGroupCommand = async (
  input: RemoveThingFromBillingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/billing-groups/removeThingFromBillingGroup");
  let body: any;
  body = JSON.stringify(
    take(input, {
      billingGroupArn: [],
      billingGroupName: [],
      thingArn: [],
      thingName: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RemoveThingFromThingGroupCommand
 */
export const se_RemoveThingFromThingGroupCommand = async (
  input: RemoveThingFromThingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/thing-groups/removeThingFromThingGroup");
  let body: any;
  body = JSON.stringify(
    take(input, {
      thingArn: [],
      thingGroupArn: [],
      thingGroupName: [],
      thingName: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ReplaceTopicRuleCommand
 */
export const se_ReplaceTopicRuleCommand = async (
  input: ReplaceTopicRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/rules/{ruleName}");
  b.p("ruleName", () => input.ruleName!, "{ruleName}", false);
  let body: any;
  if (input.topicRulePayload !== undefined) {
    body = _json(input.topicRulePayload);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchIndexCommand
 */
export const se_SearchIndexCommand = async (
  input: SearchIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/indices/search");
  let body: any;
  body = JSON.stringify(
    take(input, {
      indexName: [],
      maxResults: [],
      nextToken: [],
      queryString: [],
      queryVersion: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SetDefaultAuthorizerCommand
 */
export const se_SetDefaultAuthorizerCommand = async (
  input: SetDefaultAuthorizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/default-authorizer");
  let body: any;
  body = JSON.stringify(
    take(input, {
      authorizerName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SetDefaultPolicyVersionCommand
 */
export const se_SetDefaultPolicyVersionCommand = async (
  input: SetDefaultPolicyVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/policies/{policyName}/version/{policyVersionId}");
  b.p("policyName", () => input.policyName!, "{policyName}", false);
  b.p("policyVersionId", () => input.policyVersionId!, "{policyVersionId}", false);
  let body: any;
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SetLoggingOptionsCommand
 */
export const se_SetLoggingOptionsCommand = async (
  input: SetLoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/loggingOptions");
  let body: any;
  if (input.loggingOptionsPayload !== undefined) {
    body = _json(input.loggingOptionsPayload);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SetV2LoggingLevelCommand
 */
export const se_SetV2LoggingLevelCommand = async (
  input: SetV2LoggingLevelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2LoggingLevel");
  let body: any;
  body = JSON.stringify(
    take(input, {
      logLevel: [],
      logTarget: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SetV2LoggingOptionsCommand
 */
export const se_SetV2LoggingOptionsCommand = async (
  input: SetV2LoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2LoggingOptions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      defaultLogLevel: [],
      disableAllLogs: [],
      roleArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartAuditMitigationActionsTaskCommand
 */
export const se_StartAuditMitigationActionsTaskCommand = async (
  input: StartAuditMitigationActionsTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/audit/mitigationactions/tasks/{taskId}");
  b.p("taskId", () => input.taskId!, "{taskId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      auditCheckToActionsMapping: (_) => _json(_),
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      target: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartDetectMitigationActionsTaskCommand
 */
export const se_StartDetectMitigationActionsTaskCommand = async (
  input: StartDetectMitigationActionsTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/detect/mitigationactions/tasks/{taskId}");
  b.p("taskId", () => input.taskId!, "{taskId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      actions: (_) => _json(_),
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      includeOnlyActiveViolations: [],
      includeSuppressedAlerts: [],
      target: (_) => _json(_),
      violationEventOccurrenceRange: (_) => se_ViolationEventOccurrenceRange(_, context),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartOnDemandAuditTaskCommand
 */
export const se_StartOnDemandAuditTaskCommand = async (
  input: StartOnDemandAuditTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/audit/tasks");
  let body: any;
  body = JSON.stringify(
    take(input, {
      targetCheckNames: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartThingRegistrationTaskCommand
 */
export const se_StartThingRegistrationTaskCommand = async (
  input: StartThingRegistrationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/thing-registration-tasks");
  let body: any;
  body = JSON.stringify(
    take(input, {
      inputFileBucket: [],
      inputFileKey: [],
      roleArn: [],
      templateBody: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopThingRegistrationTaskCommand
 */
export const se_StopThingRegistrationTaskCommand = async (
  input: StopThingRegistrationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/thing-registration-tasks/{taskId}/cancel");
  b.p("taskId", () => input.taskId!, "{taskId}", false);
  let body: any;
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags");
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourceArn: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TestAuthorizationCommand
 */
export const se_TestAuthorizationCommand = async (
  input: TestAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/test-authorization");
  const query: any = map({
    [_cI]: [, input[_cI]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      authInfos: (_) => _json(_),
      cognitoIdentityPoolId: [],
      policyNamesToAdd: (_) => _json(_),
      policyNamesToSkip: (_) => _json(_),
      principal: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TestInvokeAuthorizerCommand
 */
export const se_TestInvokeAuthorizerCommand = async (
  input: TestInvokeAuthorizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/authorizer/{authorizerName}/test");
  b.p("authorizerName", () => input.authorizerName!, "{authorizerName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      httpContext: (_) => _json(_),
      mqttContext: (_) => se_MqttContext(_, context),
      tlsContext: (_) => _json(_),
      token: [],
      tokenSignature: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TransferCertificateCommand
 */
export const se_TransferCertificateCommand = async (
  input: TransferCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/transfer-certificate/{certificateId}");
  b.p("certificateId", () => input.certificateId!, "{certificateId}", false);
  const query: any = map({
    [_tAA]: [, __expectNonNull(input[_tAA]!, `targetAwsAccount`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      transferMessage: [],
    })
  );
  b.m("PATCH").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/untag");
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourceArn: [],
      tagKeys: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAccountAuditConfigurationCommand
 */
export const se_UpdateAccountAuditConfigurationCommand = async (
  input: UpdateAccountAuditConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/audit/configuration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      auditCheckConfigurations: (_) => _json(_),
      auditNotificationTargetConfigurations: (_) => _json(_),
      roleArn: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAuditSuppressionCommand
 */
export const se_UpdateAuditSuppressionCommand = async (
  input: UpdateAuditSuppressionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/audit/suppressions/update");
  let body: any;
  body = JSON.stringify(
    take(input, {
      checkName: [],
      description: [],
      expirationDate: (_) => _.getTime() / 1_000,
      resourceIdentifier: (_) => _json(_),
      suppressIndefinitely: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAuthorizerCommand
 */
export const se_UpdateAuthorizerCommand = async (
  input: UpdateAuthorizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/authorizer/{authorizerName}");
  b.p("authorizerName", () => input.authorizerName!, "{authorizerName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      authorizerFunctionArn: [],
      enableCachingForHttp: [],
      status: [],
      tokenKeyName: [],
      tokenSigningPublicKeys: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateBillingGroupCommand
 */
export const se_UpdateBillingGroupCommand = async (
  input: UpdateBillingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/billing-groups/{billingGroupName}");
  b.p("billingGroupName", () => input.billingGroupName!, "{billingGroupName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      billingGroupProperties: (_) => _json(_),
      expectedVersion: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCACertificateCommand
 */
export const se_UpdateCACertificateCommand = async (
  input: UpdateCACertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/cacertificate/{certificateId}");
  b.p("certificateId", () => input.certificateId!, "{certificateId}", false);
  const query: any = map({
    [_nS]: [, input[_nS]!],
    [_nARS]: [, input[_nARS]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      registrationConfig: (_) => _json(_),
      removeAutoRegistration: [],
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCertificateCommand
 */
export const se_UpdateCertificateCommand = async (
  input: UpdateCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/certificates/{certificateId}");
  b.p("certificateId", () => input.certificateId!, "{certificateId}", false);
  const query: any = map({
    [_nS]: [, __expectNonNull(input[_nS]!, `newStatus`)],
  });
  let body: any;
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCertificateProviderCommand
 */
export const se_UpdateCertificateProviderCommand = async (
  input: UpdateCertificateProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/certificate-providers/{certificateProviderName}");
  b.p("certificateProviderName", () => input.certificateProviderName!, "{certificateProviderName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountDefaultForOperations: (_) => _json(_),
      lambdaFunctionArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCommandCommand
 */
export const se_UpdateCommandCommand = async (
  input: UpdateCommandCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/commands/{commandId}");
  b.p("commandId", () => input.commandId!, "{commandId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      deprecated: [],
      description: [],
      displayName: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCustomMetricCommand
 */
export const se_UpdateCustomMetricCommand = async (
  input: UpdateCustomMetricCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/custom-metric/{metricName}");
  b.p("metricName", () => input.metricName!, "{metricName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      displayName: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDimensionCommand
 */
export const se_UpdateDimensionCommand = async (
  input: UpdateDimensionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/dimensions/{name}");
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      stringValues: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDomainConfigurationCommand
 */
export const se_UpdateDomainConfigurationCommand = async (
  input: UpdateDomainConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domainConfigurations/{domainConfigurationName}");
  b.p("domainConfigurationName", () => input.domainConfigurationName!, "{domainConfigurationName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      applicationProtocol: [],
      authenticationType: [],
      authorizerConfig: (_) => _json(_),
      clientCertificateConfig: (_) => _json(_),
      domainConfigurationStatus: [],
      removeAuthorizerConfig: [],
      serverCertificateConfig: (_) => _json(_),
      tlsConfig: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDynamicThingGroupCommand
 */
export const se_UpdateDynamicThingGroupCommand = async (
  input: UpdateDynamicThingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/dynamic-thing-groups/{thingGroupName}");
  b.p("thingGroupName", () => input.thingGroupName!, "{thingGroupName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      expectedVersion: [],
      indexName: [],
      queryString: [],
      queryVersion: [],
      thingGroupProperties: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateEncryptionConfigurationCommand
 */
export const se_UpdateEncryptionConfigurationCommand = async (
  input: UpdateEncryptionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/encryption-configuration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      encryptionType: [],
      kmsAccessRoleArn: [],
      kmsKeyArn: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateEventConfigurationsCommand
 */
export const se_UpdateEventConfigurationsCommand = async (
  input: UpdateEventConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/event-configurations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      eventConfigurations: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateFleetMetricCommand
 */
export const se_UpdateFleetMetricCommand = async (
  input: UpdateFleetMetricCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/fleet-metric/{metricName}");
  b.p("metricName", () => input.metricName!, "{metricName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      aggregationField: [],
      aggregationType: (_) => _json(_),
      description: [],
      expectedVersion: [],
      indexName: [],
      period: [],
      queryString: [],
      queryVersion: [],
      unit: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateIndexingConfigurationCommand
 */
export const se_UpdateIndexingConfigurationCommand = async (
  input: UpdateIndexingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/indexing/config");
  let body: any;
  body = JSON.stringify(
    take(input, {
      thingGroupIndexingConfiguration: (_) => _json(_),
      thingIndexingConfiguration: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateJobCommand
 */
export const se_UpdateJobCommand = async (
  input: UpdateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/jobs/{jobId}");
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  const query: any = map({
    [_nI]: [, input[_nI]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      abortConfig: (_) => se_AbortConfig(_, context),
      description: [],
      jobExecutionsRetryConfig: (_) => _json(_),
      jobExecutionsRolloutConfig: (_) => se_JobExecutionsRolloutConfig(_, context),
      presignedUrlConfig: (_) => _json(_),
      timeoutConfig: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateMitigationActionCommand
 */
export const se_UpdateMitigationActionCommand = async (
  input: UpdateMitigationActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/mitigationactions/actions/{actionName}");
  b.p("actionName", () => input.actionName!, "{actionName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      actionParams: (_) => _json(_),
      roleArn: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePackageCommand
 */
export const se_UpdatePackageCommand = async (
  input: UpdatePackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/packages/{packageName}");
  b.p("packageName", () => input.packageName!, "{packageName}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      defaultVersionName: [],
      description: [],
      unsetDefaultVersion: [],
    })
  );
  b.m("PATCH").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePackageConfigurationCommand
 */
export const se_UpdatePackageConfigurationCommand = async (
  input: UpdatePackageConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/package-configuration");
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      versionUpdateByJobsConfig: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePackageVersionCommand
 */
export const se_UpdatePackageVersionCommand = async (
  input: UpdatePackageVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/packages/{packageName}/versions/{versionName}");
  b.p("packageName", () => input.packageName!, "{packageName}", false);
  b.p("versionName", () => input.versionName!, "{versionName}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      action: [],
      artifact: (_) => _json(_),
      attributes: (_) => _json(_),
      description: [],
      recipe: [],
    })
  );
  b.m("PATCH").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateProvisioningTemplateCommand
 */
export const se_UpdateProvisioningTemplateCommand = async (
  input: UpdateProvisioningTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/provisioning-templates/{templateName}");
  b.p("templateName", () => input.templateName!, "{templateName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      defaultVersionId: [],
      description: [],
      enabled: [],
      preProvisioningHook: (_) => _json(_),
      provisioningRoleArn: [],
      removePreProvisioningHook: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRoleAliasCommand
 */
export const se_UpdateRoleAliasCommand = async (
  input: UpdateRoleAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/role-aliases/{roleAlias}");
  b.p("roleAlias", () => input.roleAlias!, "{roleAlias}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      credentialDurationSeconds: [],
      roleArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateScheduledAuditCommand
 */
export const se_UpdateScheduledAuditCommand = async (
  input: UpdateScheduledAuditCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/audit/scheduledaudits/{scheduledAuditName}");
  b.p("scheduledAuditName", () => input.scheduledAuditName!, "{scheduledAuditName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      dayOfMonth: [],
      dayOfWeek: [],
      frequency: [],
      targetCheckNames: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSecurityProfileCommand
 */
export const se_UpdateSecurityProfileCommand = async (
  input: UpdateSecurityProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/security-profiles/{securityProfileName}");
  b.p("securityProfileName", () => input.securityProfileName!, "{securityProfileName}", false);
  const query: any = map({
    [_eV]: [() => input.expectedVersion !== void 0, () => input[_eV]!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      additionalMetricsToRetain: (_) => _json(_),
      additionalMetricsToRetainV2: (_) => _json(_),
      alertTargets: (_) => _json(_),
      behaviors: (_) => se_Behaviors(_, context),
      deleteAdditionalMetricsToRetain: [],
      deleteAlertTargets: [],
      deleteBehaviors: [],
      deleteMetricsExportConfig: [],
      metricsExportConfig: (_) => _json(_),
      securityProfileDescription: [],
    })
  );
  b.m("PATCH").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateStreamCommand
 */
export const se_UpdateStreamCommand = async (
  input: UpdateStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/streams/{streamId}");
  b.p("streamId", () => input.streamId!, "{streamId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      files: (_) => _json(_),
      roleArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateThingCommand
 */
export const se_UpdateThingCommand = async (
  input: UpdateThingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/things/{thingName}");
  b.p("thingName", () => input.thingName!, "{thingName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      attributePayload: (_) => _json(_),
      expectedVersion: [],
      removeThingType: [],
      thingTypeName: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateThingGroupCommand
 */
export const se_UpdateThingGroupCommand = async (
  input: UpdateThingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/thing-groups/{thingGroupName}");
  b.p("thingGroupName", () => input.thingGroupName!, "{thingGroupName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      expectedVersion: [],
      thingGroupProperties: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateThingGroupsForThingCommand
 */
export const se_UpdateThingGroupsForThingCommand = async (
  input: UpdateThingGroupsForThingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/thing-groups/updateThingGroupsForThing");
  let body: any;
  body = JSON.stringify(
    take(input, {
      overrideDynamicGroups: [],
      thingGroupsToAdd: (_) => _json(_),
      thingGroupsToRemove: (_) => _json(_),
      thingName: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateThingTypeCommand
 */
export const se_UpdateThingTypeCommand = async (
  input: UpdateThingTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/thing-types/{thingTypeName}");
  b.p("thingTypeName", () => input.thingTypeName!, "{thingTypeName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      thingTypeProperties: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateTopicRuleDestinationCommand
 */
export const se_UpdateTopicRuleDestinationCommand = async (
  input: UpdateTopicRuleDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/destinations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arn: [],
      status: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ValidateSecurityProfileBehaviorsCommand
 */
export const se_ValidateSecurityProfileBehaviorsCommand = async (
  input: ValidateSecurityProfileBehaviorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/security-profile-behaviors/validate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      behaviors: (_) => se_Behaviors(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AcceptCertificateTransferCommand
 */
export const de_AcceptCertificateTransferCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptCertificateTransferCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AddThingToBillingGroupCommand
 */
export const de_AddThingToBillingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddThingToBillingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AddThingToThingGroupCommand
 */
export const de_AddThingToThingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddThingToThingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateSbomWithPackageVersionCommand
 */
export const de_AssociateSbomWithPackageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSbomWithPackageVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    packageName: __expectString,
    sbom: _json,
    sbomValidationStatus: __expectString,
    versionName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateTargetsWithJobCommand
 */
export const de_AssociateTargetsWithJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTargetsWithJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    jobArn: __expectString,
    jobId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AttachPolicyCommand
 */
export const de_AttachPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AttachPrincipalPolicyCommand
 */
export const de_AttachPrincipalPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachPrincipalPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AttachSecurityProfileCommand
 */
export const de_AttachSecurityProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachSecurityProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AttachThingPrincipalCommand
 */
export const de_AttachThingPrincipalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachThingPrincipalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelAuditMitigationActionsTaskCommand
 */
export const de_CancelAuditMitigationActionsTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelAuditMitigationActionsTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelAuditTaskCommand
 */
export const de_CancelAuditTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelAuditTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelCertificateTransferCommand
 */
export const de_CancelCertificateTransferCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelCertificateTransferCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelDetectMitigationActionsTaskCommand
 */
export const de_CancelDetectMitigationActionsTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDetectMitigationActionsTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelJobCommand
 */
export const de_CancelJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    jobArn: __expectString,
    jobId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CancelJobExecutionCommand
 */
export const de_CancelJobExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobExecutionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ClearDefaultAuthorizerCommand
 */
export const de_ClearDefaultAuthorizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ClearDefaultAuthorizerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ConfirmTopicRuleDestinationCommand
 */
export const de_ConfirmTopicRuleDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmTopicRuleDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAuditSuppressionCommand
 */
export const de_CreateAuditSuppressionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAuditSuppressionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAuthorizerCommand
 */
export const de_CreateAuthorizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAuthorizerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    authorizerArn: __expectString,
    authorizerName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateBillingGroupCommand
 */
export const de_CreateBillingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBillingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    billingGroupArn: __expectString,
    billingGroupId: __expectString,
    billingGroupName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCertificateFromCsrCommand
 */
export const de_CreateCertificateFromCsrCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCertificateFromCsrCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    certificateArn: __expectString,
    certificateId: __expectString,
    certificatePem: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCertificateProviderCommand
 */
export const de_CreateCertificateProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCertificateProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    certificateProviderArn: __expectString,
    certificateProviderName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCommandCommand
 */
export const de_CreateCommandCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCommandCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    commandArn: __expectString,
    commandId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCustomMetricCommand
 */
export const de_CreateCustomMetricCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomMetricCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    metricArn: __expectString,
    metricName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDimensionCommand
 */
export const de_CreateDimensionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDimensionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDomainConfigurationCommand
 */
export const de_CreateDomainConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    domainConfigurationArn: __expectString,
    domainConfigurationName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDynamicThingGroupCommand
 */
export const de_CreateDynamicThingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDynamicThingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    indexName: __expectString,
    queryString: __expectString,
    queryVersion: __expectString,
    thingGroupArn: __expectString,
    thingGroupId: __expectString,
    thingGroupName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateFleetMetricCommand
 */
export const de_CreateFleetMetricCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetMetricCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    metricArn: __expectString,
    metricName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateJobCommand
 */
export const de_CreateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    jobArn: __expectString,
    jobId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateJobTemplateCommand
 */
export const de_CreateJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobTemplateArn: __expectString,
    jobTemplateId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateKeysAndCertificateCommand
 */
export const de_CreateKeysAndCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeysAndCertificateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    certificateArn: __expectString,
    certificateId: __expectString,
    certificatePem: __expectString,
    keyPair: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMitigationActionCommand
 */
export const de_CreateMitigationActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMitigationActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    actionArn: __expectString,
    actionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateOTAUpdateCommand
 */
export const de_CreateOTAUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOTAUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    awsIotJobArn: __expectString,
    awsIotJobId: __expectString,
    otaUpdateArn: __expectString,
    otaUpdateId: __expectString,
    otaUpdateStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePackageCommand
 */
export const de_CreatePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    packageArn: __expectString,
    packageName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePackageVersionCommand
 */
export const de_CreatePackageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackageVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    attributes: _json,
    description: __expectString,
    errorReason: __expectString,
    packageName: __expectString,
    packageVersionArn: __expectString,
    status: __expectString,
    versionName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePolicyCommand
 */
export const de_CreatePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policyArn: __expectString,
    policyDocument: __expectString,
    policyName: __expectString,
    policyVersionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePolicyVersionCommand
 */
export const de_CreatePolicyVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePolicyVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    isDefaultVersion: __expectBoolean,
    policyArn: __expectString,
    policyDocument: __expectString,
    policyVersionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateProvisioningClaimCommand
 */
export const de_CreateProvisioningClaimCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProvisioningClaimCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    certificateId: __expectString,
    certificatePem: __expectString,
    expiration: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    keyPair: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateProvisioningTemplateCommand
 */
export const de_CreateProvisioningTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProvisioningTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    defaultVersionId: __expectInt32,
    templateArn: __expectString,
    templateName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateProvisioningTemplateVersionCommand
 */
export const de_CreateProvisioningTemplateVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProvisioningTemplateVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    isDefaultVersion: __expectBoolean,
    templateArn: __expectString,
    templateName: __expectString,
    versionId: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRoleAliasCommand
 */
export const de_CreateRoleAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRoleAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    roleAlias: __expectString,
    roleAliasArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateScheduledAuditCommand
 */
export const de_CreateScheduledAuditCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScheduledAuditCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    scheduledAuditArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSecurityProfileCommand
 */
export const de_CreateSecurityProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecurityProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    securityProfileArn: __expectString,
    securityProfileName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateStreamCommand
 */
export const de_CreateStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    streamArn: __expectString,
    streamId: __expectString,
    streamVersion: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateThingCommand
 */
export const de_CreateThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateThingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    thingArn: __expectString,
    thingId: __expectString,
    thingName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateThingGroupCommand
 */
export const de_CreateThingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateThingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    thingGroupArn: __expectString,
    thingGroupId: __expectString,
    thingGroupName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateThingTypeCommand
 */
export const de_CreateThingTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateThingTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    thingTypeArn: __expectString,
    thingTypeId: __expectString,
    thingTypeName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTopicRuleCommand
 */
export const de_CreateTopicRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTopicRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTopicRuleDestinationCommand
 */
export const de_CreateTopicRuleDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTopicRuleDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    topicRuleDestination: (_) => de_TopicRuleDestination(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAccountAuditConfigurationCommand
 */
export const de_DeleteAccountAuditConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountAuditConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAuditSuppressionCommand
 */
export const de_DeleteAuditSuppressionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAuditSuppressionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAuthorizerCommand
 */
export const de_DeleteAuthorizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAuthorizerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBillingGroupCommand
 */
export const de_DeleteBillingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBillingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCACertificateCommand
 */
export const de_DeleteCACertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCACertificateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCertificateCommand
 */
export const de_DeleteCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCertificateProviderCommand
 */
export const de_DeleteCertificateProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCommandCommand
 */
export const de_DeleteCommandCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCommandCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  map(contents, {
    statusCode: [, output.statusCode],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCommandExecutionCommand
 */
export const de_DeleteCommandExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCommandExecutionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCustomMetricCommand
 */
export const de_DeleteCustomMetricCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomMetricCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDimensionCommand
 */
export const de_DeleteDimensionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDimensionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDomainConfigurationCommand
 */
export const de_DeleteDomainConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDynamicThingGroupCommand
 */
export const de_DeleteDynamicThingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDynamicThingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFleetMetricCommand
 */
export const de_DeleteFleetMetricCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetMetricCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteJobCommand
 */
export const de_DeleteJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteJobExecutionCommand
 */
export const de_DeleteJobExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobExecutionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteJobTemplateCommand
 */
export const de_DeleteJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMitigationActionCommand
 */
export const de_DeleteMitigationActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMitigationActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteOTAUpdateCommand
 */
export const de_DeleteOTAUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOTAUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePackageCommand
 */
export const de_DeletePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePackageVersionCommand
 */
export const de_DeletePackageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackageVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePolicyCommand
 */
export const de_DeletePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePolicyVersionCommand
 */
export const de_DeletePolicyVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteProvisioningTemplateCommand
 */
export const de_DeleteProvisioningTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProvisioningTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteProvisioningTemplateVersionCommand
 */
export const de_DeleteProvisioningTemplateVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProvisioningTemplateVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRegistrationCodeCommand
 */
export const de_DeleteRegistrationCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRegistrationCodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRoleAliasCommand
 */
export const de_DeleteRoleAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRoleAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteScheduledAuditCommand
 */
export const de_DeleteScheduledAuditCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduledAuditCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSecurityProfileCommand
 */
export const de_DeleteSecurityProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecurityProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteStreamCommand
 */
export const de_DeleteStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteThingCommand
 */
export const de_DeleteThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteThingGroupCommand
 */
export const de_DeleteThingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteThingTypeCommand
 */
export const de_DeleteThingTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThingTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTopicRuleCommand
 */
export const de_DeleteTopicRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTopicRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTopicRuleDestinationCommand
 */
export const de_DeleteTopicRuleDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTopicRuleDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteV2LoggingLevelCommand
 */
export const de_DeleteV2LoggingLevelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteV2LoggingLevelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeprecateThingTypeCommand
 */
export const de_DeprecateThingTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateThingTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAccountAuditConfigurationCommand
 */
export const de_DescribeAccountAuditConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAuditConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    auditCheckConfigurations: _json,
    auditNotificationTargetConfigurations: _json,
    roleArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAuditFindingCommand
 */
export const de_DescribeAuditFindingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAuditFindingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    finding: (_) => de_AuditFinding(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAuditMitigationActionsTaskCommand
 */
export const de_DescribeAuditMitigationActionsTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAuditMitigationActionsTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    actionsDefinition: _json,
    auditCheckToActionsMapping: _json,
    endTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    startTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    target: _json,
    taskStatistics: _json,
    taskStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAuditSuppressionCommand
 */
export const de_DescribeAuditSuppressionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAuditSuppressionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    checkName: __expectString,
    description: __expectString,
    expirationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    resourceIdentifier: _json,
    suppressIndefinitely: __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAuditTaskCommand
 */
export const de_DescribeAuditTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAuditTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    auditDetails: _json,
    scheduledAuditName: __expectString,
    taskStartTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    taskStatistics: _json,
    taskStatus: __expectString,
    taskType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAuthorizerCommand
 */
export const de_DescribeAuthorizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAuthorizerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    authorizerDescription: (_) => de_AuthorizerDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeBillingGroupCommand
 */
export const de_DescribeBillingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBillingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    billingGroupArn: __expectString,
    billingGroupId: __expectString,
    billingGroupMetadata: (_) => de_BillingGroupMetadata(_, context),
    billingGroupName: __expectString,
    billingGroupProperties: _json,
    version: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeCACertificateCommand
 */
export const de_DescribeCACertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCACertificateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    certificateDescription: (_) => de_CACertificateDescription(_, context),
    registrationConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeCertificateCommand
 */
export const de_DescribeCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    certificateDescription: (_) => de_CertificateDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeCertificateProviderCommand
 */
export const de_DescribeCertificateProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accountDefaultForOperations: _json,
    certificateProviderArn: __expectString,
    certificateProviderName: __expectString,
    creationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lambdaFunctionArn: __expectString,
    lastModifiedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeCustomMetricCommand
 */
export const de_DescribeCustomMetricCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomMetricCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    displayName: __expectString,
    lastModifiedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    metricArn: __expectString,
    metricName: __expectString,
    metricType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDefaultAuthorizerCommand
 */
export const de_DescribeDefaultAuthorizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDefaultAuthorizerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    authorizerDescription: (_) => de_AuthorizerDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDetectMitigationActionsTaskCommand
 */
export const de_DescribeDetectMitigationActionsTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectMitigationActionsTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    taskSummary: (_) => de_DetectMitigationActionsTaskSummary(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDimensionCommand
 */
export const de_DescribeDimensionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDimensionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    creationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastModifiedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    stringValues: _json,
    type: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDomainConfigurationCommand
 */
export const de_DescribeDomainConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationProtocol: __expectString,
    authenticationType: __expectString,
    authorizerConfig: _json,
    clientCertificateConfig: _json,
    domainConfigurationArn: __expectString,
    domainConfigurationName: __expectString,
    domainConfigurationStatus: __expectString,
    domainName: __expectString,
    domainType: __expectString,
    lastStatusChangeDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    serverCertificateConfig: _json,
    serverCertificates: _json,
    serviceType: __expectString,
    tlsConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeEncryptionConfigurationCommand
 */
export const de_DescribeEncryptionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEncryptionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configurationDetails: _json,
    encryptionType: __expectString,
    kmsAccessRoleArn: __expectString,
    kmsKeyArn: __expectString,
    lastModifiedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeEndpointCommand
 */
export const de_DescribeEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    endpointAddress: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeEventConfigurationsCommand
 */
export const de_DescribeEventConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    eventConfigurations: _json,
    lastModifiedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeFleetMetricCommand
 */
export const de_DescribeFleetMetricCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetMetricCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    aggregationField: __expectString,
    aggregationType: _json,
    creationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    indexName: __expectString,
    lastModifiedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    metricArn: __expectString,
    metricName: __expectString,
    period: __expectInt32,
    queryString: __expectString,
    queryVersion: __expectString,
    unit: __expectString,
    version: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeIndexCommand
 */
export const de_DescribeIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    indexName: __expectString,
    indexStatus: __expectString,
    schema: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeJobCommand
 */
export const de_DescribeJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    documentSource: __expectString,
    job: (_) => de_Job(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeJobExecutionCommand
 */
export const de_DescribeJobExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobExecutionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    execution: (_) => de_JobExecution(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeJobTemplateCommand
 */
export const de_DescribeJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    abortConfig: (_) => de_AbortConfig(_, context),
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    destinationPackageVersions: _json,
    document: __expectString,
    documentSource: __expectString,
    jobExecutionsRetryConfig: _json,
    jobExecutionsRolloutConfig: (_) => de_JobExecutionsRolloutConfig(_, context),
    jobTemplateArn: __expectString,
    jobTemplateId: __expectString,
    maintenanceWindows: _json,
    presignedUrlConfig: _json,
    timeoutConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeManagedJobTemplateCommand
 */
export const de_DescribeManagedJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeManagedJobTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    document: __expectString,
    documentParameters: _json,
    environments: _json,
    templateArn: __expectString,
    templateName: __expectString,
    templateVersion: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeMitigationActionCommand
 */
export const de_DescribeMitigationActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMitigationActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    actionArn: __expectString,
    actionId: __expectString,
    actionName: __expectString,
    actionParams: _json,
    actionType: __expectString,
    creationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastModifiedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    roleArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeProvisioningTemplateCommand
 */
export const de_DescribeProvisioningTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProvisioningTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    defaultVersionId: __expectInt32,
    description: __expectString,
    enabled: __expectBoolean,
    lastModifiedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    preProvisioningHook: _json,
    provisioningRoleArn: __expectString,
    templateArn: __expectString,
    templateBody: __expectString,
    templateName: __expectString,
    type: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeProvisioningTemplateVersionCommand
 */
export const de_DescribeProvisioningTemplateVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProvisioningTemplateVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    isDefaultVersion: __expectBoolean,
    templateBody: __expectString,
    versionId: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeRoleAliasCommand
 */
export const de_DescribeRoleAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRoleAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    roleAliasDescription: (_) => de_RoleAliasDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeScheduledAuditCommand
 */
export const de_DescribeScheduledAuditCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduledAuditCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dayOfMonth: __expectString,
    dayOfWeek: __expectString,
    frequency: __expectString,
    scheduledAuditArn: __expectString,
    scheduledAuditName: __expectString,
    targetCheckNames: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSecurityProfileCommand
 */
export const de_DescribeSecurityProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSecurityProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    additionalMetricsToRetain: _json,
    additionalMetricsToRetainV2: _json,
    alertTargets: _json,
    behaviors: (_) => de_Behaviors(_, context),
    creationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastModifiedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    metricsExportConfig: _json,
    securityProfileArn: __expectString,
    securityProfileDescription: __expectString,
    securityProfileName: __expectString,
    version: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeStreamCommand
 */
export const de_DescribeStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    streamInfo: (_) => de_StreamInfo(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeThingCommand
 */
export const de_DescribeThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeThingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    attributes: _json,
    billingGroupName: __expectString,
    defaultClientId: __expectString,
    thingArn: __expectString,
    thingId: __expectString,
    thingName: __expectString,
    thingTypeName: __expectString,
    version: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeThingGroupCommand
 */
export const de_DescribeThingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeThingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    indexName: __expectString,
    queryString: __expectString,
    queryVersion: __expectString,
    status: __expectString,
    thingGroupArn: __expectString,
    thingGroupId: __expectString,
    thingGroupMetadata: (_) => de_ThingGroupMetadata(_, context),
    thingGroupName: __expectString,
    thingGroupProperties: _json,
    version: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeThingRegistrationTaskCommand
 */
export const de_DescribeThingRegistrationTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeThingRegistrationTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureCount: __expectInt32,
    inputFileBucket: __expectString,
    inputFileKey: __expectString,
    lastModifiedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    message: __expectString,
    percentageProgress: __expectInt32,
    roleArn: __expectString,
    status: __expectString,
    successCount: __expectInt32,
    taskId: __expectString,
    templateBody: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeThingTypeCommand
 */
export const de_DescribeThingTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeThingTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    thingTypeArn: __expectString,
    thingTypeId: __expectString,
    thingTypeMetadata: (_) => de_ThingTypeMetadata(_, context),
    thingTypeName: __expectString,
    thingTypeProperties: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DetachPolicyCommand
 */
export const de_DetachPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DetachPrincipalPolicyCommand
 */
export const de_DetachPrincipalPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachPrincipalPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DetachSecurityProfileCommand
 */
export const de_DetachSecurityProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachSecurityProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DetachThingPrincipalCommand
 */
export const de_DetachThingPrincipalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachThingPrincipalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisableTopicRuleCommand
 */
export const de_DisableTopicRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableTopicRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateSbomFromPackageVersionCommand
 */
export const de_DisassociateSbomFromPackageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSbomFromPackageVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1EnableTopicRuleCommand
 */
export const de_EnableTopicRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableTopicRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetBehaviorModelTrainingSummariesCommand
 */
export const de_GetBehaviorModelTrainingSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBehaviorModelTrainingSummariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    summaries: (_) => de_BehaviorModelTrainingSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetBucketsAggregationCommand
 */
export const de_GetBucketsAggregationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketsAggregationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    buckets: _json,
    totalCount: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCardinalityCommand
 */
export const de_GetCardinalityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCardinalityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    cardinality: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCommandCommand
 */
export const de_GetCommandCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCommandCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    commandArn: __expectString,
    commandId: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deprecated: __expectBoolean,
    description: __expectString,
    displayName: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    mandatoryParameters: (_) => de_CommandParameterList(_, context),
    namespace: __expectString,
    payload: (_) => de_CommandPayload(_, context),
    pendingDeletion: __expectBoolean,
    roleArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCommandExecutionCommand
 */
export const de_GetCommandExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCommandExecutionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    commandArn: __expectString,
    completedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    executionId: __expectString,
    executionTimeoutSeconds: __expectLong,
    lastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    parameters: (_) => de_CommandExecutionParameterMap(_, context),
    result: (_) => de_CommandExecutionResultMap(_, context),
    startedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    statusReason: _json,
    targetArn: __expectString,
    timeToLive: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEffectivePoliciesCommand
 */
export const de_GetEffectivePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEffectivePoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    effectivePolicies: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetIndexingConfigurationCommand
 */
export const de_GetIndexingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIndexingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    thingGroupIndexingConfiguration: _json,
    thingIndexingConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetJobDocumentCommand
 */
export const de_GetJobDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobDocumentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    document: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLoggingOptionsCommand
 */
export const de_GetLoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoggingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    logLevel: __expectString,
    roleArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetOTAUpdateCommand
 */
export const de_GetOTAUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOTAUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    otaUpdateInfo: (_) => de_OTAUpdateInfo(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPackageCommand
 */
export const de_GetPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    defaultVersionName: __expectString,
    description: __expectString,
    lastModifiedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    packageArn: __expectString,
    packageName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPackageConfigurationCommand
 */
export const de_GetPackageConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPackageConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    versionUpdateByJobsConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPackageVersionCommand
 */
export const de_GetPackageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPackageVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    artifact: _json,
    attributes: _json,
    creationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    errorReason: __expectString,
    lastModifiedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    packageName: __expectString,
    packageVersionArn: __expectString,
    recipe: __expectString,
    sbom: _json,
    sbomValidationStatus: __expectString,
    status: __expectString,
    versionName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPercentilesCommand
 */
export const de_GetPercentilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPercentilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    percentiles: (_) => de_Percentiles(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPolicyCommand
 */
export const de_GetPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    defaultVersionId: __expectString,
    generationId: __expectString,
    lastModifiedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    policyArn: __expectString,
    policyDocument: __expectString,
    policyName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPolicyVersionCommand
 */
export const de_GetPolicyVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    generationId: __expectString,
    isDefaultVersion: __expectBoolean,
    lastModifiedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    policyArn: __expectString,
    policyDocument: __expectString,
    policyName: __expectString,
    policyVersionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRegistrationCodeCommand
 */
export const de_GetRegistrationCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegistrationCodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    registrationCode: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetStatisticsCommand
 */
export const de_GetStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    statistics: (_) => de_Statistics(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetThingConnectivityDataCommand
 */
export const de_GetThingConnectivityDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetThingConnectivityDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    connected: __expectBoolean,
    disconnectReason: __expectString,
    thingName: __expectString,
    timestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTopicRuleCommand
 */
export const de_GetTopicRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTopicRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    rule: (_) => de_TopicRule(_, context),
    ruleArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTopicRuleDestinationCommand
 */
export const de_GetTopicRuleDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTopicRuleDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    topicRuleDestination: (_) => de_TopicRuleDestination(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetV2LoggingOptionsCommand
 */
export const de_GetV2LoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetV2LoggingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    defaultLogLevel: __expectString,
    disableAllLogs: __expectBoolean,
    roleArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListActiveViolationsCommand
 */
export const de_ListActiveViolationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActiveViolationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    activeViolations: (_) => de_ActiveViolations(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAttachedPoliciesCommand
 */
export const de_ListAttachedPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachedPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextMarker: __expectString,
    policies: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAuditFindingsCommand
 */
export const de_ListAuditFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAuditFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    findings: (_) => de_AuditFindings(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAuditMitigationActionsExecutionsCommand
 */
export const de_ListAuditMitigationActionsExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAuditMitigationActionsExecutionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    actionsExecutions: (_) => de_AuditMitigationActionExecutionMetadataList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAuditMitigationActionsTasksCommand
 */
export const de_ListAuditMitigationActionsTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAuditMitigationActionsTasksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    tasks: (_) => de_AuditMitigationActionsTaskMetadataList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAuditSuppressionsCommand
 */
export const de_ListAuditSuppressionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAuditSuppressionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    suppressions: (_) => de_AuditSuppressionList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAuditTasksCommand
 */
export const de_ListAuditTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAuditTasksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    tasks: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAuthorizersCommand
 */
export const de_ListAuthorizersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAuthorizersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    authorizers: _json,
    nextMarker: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListBillingGroupsCommand
 */
export const de_ListBillingGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBillingGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    billingGroups: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCACertificatesCommand
 */
export const de_ListCACertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCACertificatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    certificates: (_) => de_CACertificates(_, context),
    nextMarker: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCertificateProvidersCommand
 */
export const de_ListCertificateProvidersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCertificateProvidersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    certificateProviders: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCertificatesCommand
 */
export const de_ListCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCertificatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    certificates: (_) => de_Certificates(_, context),
    nextMarker: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCertificatesByCACommand
 */
export const de_ListCertificatesByCACommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCertificatesByCACommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    certificates: (_) => de_Certificates(_, context),
    nextMarker: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCommandExecutionsCommand
 */
export const de_ListCommandExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCommandExecutionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    commandExecutions: (_) => de_CommandExecutionSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCommandsCommand
 */
export const de_ListCommandsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCommandsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    commands: (_) => de_CommandSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCustomMetricsCommand
 */
export const de_ListCustomMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomMetricsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    metricNames: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDetectMitigationActionsExecutionsCommand
 */
export const de_ListDetectMitigationActionsExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectMitigationActionsExecutionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    actionsExecutions: (_) => de_DetectMitigationActionExecutionList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDetectMitigationActionsTasksCommand
 */
export const de_ListDetectMitigationActionsTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectMitigationActionsTasksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    tasks: (_) => de_DetectMitigationActionsTaskSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDimensionsCommand
 */
export const de_ListDimensionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDimensionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dimensionNames: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDomainConfigurationsCommand
 */
export const de_ListDomainConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    domainConfigurations: _json,
    nextMarker: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFleetMetricsCommand
 */
export const de_ListFleetMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFleetMetricsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    fleetMetrics: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIndicesCommand
 */
export const de_ListIndicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIndicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    indexNames: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListJobExecutionsForJobCommand
 */
export const de_ListJobExecutionsForJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobExecutionsForJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    executionSummaries: (_) => de_JobExecutionSummaryForJobList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListJobExecutionsForThingCommand
 */
export const de_ListJobExecutionsForThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobExecutionsForThingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    executionSummaries: (_) => de_JobExecutionSummaryForThingList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListJobsCommand
 */
export const de_ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobs: (_) => de_JobSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListJobTemplatesCommand
 */
export const de_ListJobTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobTemplates: (_) => de_JobTemplateSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListManagedJobTemplatesCommand
 */
export const de_ListManagedJobTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedJobTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    managedJobTemplates: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMetricValuesCommand
 */
export const de_ListMetricValuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetricValuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    metricDatumList: (_) => de_MetricDatumList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMitigationActionsCommand
 */
export const de_ListMitigationActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMitigationActionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    actionIdentifiers: (_) => de_MitigationActionIdentifierList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListOTAUpdatesCommand
 */
export const de_ListOTAUpdatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOTAUpdatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    otaUpdates: (_) => de_OTAUpdatesSummary(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListOutgoingCertificatesCommand
 */
export const de_ListOutgoingCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOutgoingCertificatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextMarker: __expectString,
    outgoingCertificates: (_) => de_OutgoingCertificates(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPackagesCommand
 */
export const de_ListPackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    packageSummaries: (_) => de_PackageSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPackageVersionsCommand
 */
export const de_ListPackageVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackageVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    packageVersionSummaries: (_) => de_PackageVersionSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPoliciesCommand
 */
export const de_ListPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextMarker: __expectString,
    policies: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPolicyPrincipalsCommand
 */
export const de_ListPolicyPrincipalsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyPrincipalsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextMarker: __expectString,
    principals: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPolicyVersionsCommand
 */
export const de_ListPolicyVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policyVersions: (_) => de_PolicyVersions(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPrincipalPoliciesCommand
 */
export const de_ListPrincipalPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPrincipalPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextMarker: __expectString,
    policies: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPrincipalThingsCommand
 */
export const de_ListPrincipalThingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPrincipalThingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    things: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPrincipalThingsV2Command
 */
export const de_ListPrincipalThingsV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPrincipalThingsV2CommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    principalThingObjects: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProvisioningTemplatesCommand
 */
export const de_ListProvisioningTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisioningTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    templates: (_) => de_ProvisioningTemplateListing(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProvisioningTemplateVersionsCommand
 */
export const de_ListProvisioningTemplateVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisioningTemplateVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    versions: (_) => de_ProvisioningTemplateVersionListing(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRelatedResourcesForAuditFindingCommand
 */
export const de_ListRelatedResourcesForAuditFindingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRelatedResourcesForAuditFindingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    relatedResources: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRoleAliasesCommand
 */
export const de_ListRoleAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoleAliasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextMarker: __expectString,
    roleAliases: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSbomValidationResultsCommand
 */
export const de_ListSbomValidationResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSbomValidationResultsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    validationResultSummaries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListScheduledAuditsCommand
 */
export const de_ListScheduledAuditsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListScheduledAuditsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    scheduledAudits: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSecurityProfilesCommand
 */
export const de_ListSecurityProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    securityProfileIdentifiers: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSecurityProfilesForTargetCommand
 */
export const de_ListSecurityProfilesForTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityProfilesForTargetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    securityProfileTargetMappings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListStreamsCommand
 */
export const de_ListStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    streams: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTargetsForPolicyCommand
 */
export const de_ListTargetsForPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetsForPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextMarker: __expectString,
    targets: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTargetsForSecurityProfileCommand
 */
export const de_ListTargetsForSecurityProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetsForSecurityProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    securityProfileTargets: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListThingGroupsCommand
 */
export const de_ListThingGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThingGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    thingGroups: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListThingGroupsForThingCommand
 */
export const de_ListThingGroupsForThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThingGroupsForThingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    thingGroups: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListThingPrincipalsCommand
 */
export const de_ListThingPrincipalsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThingPrincipalsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    principals: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListThingPrincipalsV2Command
 */
export const de_ListThingPrincipalsV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThingPrincipalsV2CommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    thingPrincipalObjects: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListThingRegistrationTaskReportsCommand
 */
export const de_ListThingRegistrationTaskReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThingRegistrationTaskReportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    reportType: __expectString,
    resourceLinks: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListThingRegistrationTasksCommand
 */
export const de_ListThingRegistrationTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThingRegistrationTasksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    taskIds: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListThingsCommand
 */
export const de_ListThingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    things: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListThingsInBillingGroupCommand
 */
export const de_ListThingsInBillingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThingsInBillingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    things: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListThingsInThingGroupCommand
 */
export const de_ListThingsInThingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThingsInThingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    things: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListThingTypesCommand
 */
export const de_ListThingTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThingTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    thingTypes: (_) => de_ThingTypeList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTopicRuleDestinationsCommand
 */
export const de_ListTopicRuleDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTopicRuleDestinationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    destinationSummaries: (_) => de_TopicRuleDestinationSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTopicRulesCommand
 */
export const de_ListTopicRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTopicRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    rules: (_) => de_TopicRuleList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListV2LoggingLevelsCommand
 */
export const de_ListV2LoggingLevelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListV2LoggingLevelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    logTargetConfigurations: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListViolationEventsCommand
 */
export const de_ListViolationEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListViolationEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    violationEvents: (_) => de_ViolationEvents(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutVerificationStateOnViolationCommand
 */
export const de_PutVerificationStateOnViolationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVerificationStateOnViolationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RegisterCACertificateCommand
 */
export const de_RegisterCACertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterCACertificateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    certificateArn: __expectString,
    certificateId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RegisterCertificateCommand
 */
export const de_RegisterCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterCertificateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    certificateArn: __expectString,
    certificateId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RegisterCertificateWithoutCACommand
 */
export const de_RegisterCertificateWithoutCACommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterCertificateWithoutCACommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    certificateArn: __expectString,
    certificateId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RegisterThingCommand
 */
export const de_RegisterThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterThingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    certificatePem: __expectString,
    resourceArns: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RejectCertificateTransferCommand
 */
export const de_RejectCertificateTransferCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectCertificateTransferCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RemoveThingFromBillingGroupCommand
 */
export const de_RemoveThingFromBillingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveThingFromBillingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RemoveThingFromThingGroupCommand
 */
export const de_RemoveThingFromThingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveThingFromThingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ReplaceTopicRuleCommand
 */
export const de_ReplaceTopicRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReplaceTopicRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1SearchIndexCommand
 */
export const de_SearchIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    thingGroups: _json,
    things: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SetDefaultAuthorizerCommand
 */
export const de_SetDefaultAuthorizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDefaultAuthorizerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    authorizerArn: __expectString,
    authorizerName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SetDefaultPolicyVersionCommand
 */
export const de_SetDefaultPolicyVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDefaultPolicyVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1SetLoggingOptionsCommand
 */
export const de_SetLoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLoggingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1SetV2LoggingLevelCommand
 */
export const de_SetV2LoggingLevelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetV2LoggingLevelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1SetV2LoggingOptionsCommand
 */
export const de_SetV2LoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetV2LoggingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartAuditMitigationActionsTaskCommand
 */
export const de_StartAuditMitigationActionsTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAuditMitigationActionsTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    taskId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartDetectMitigationActionsTaskCommand
 */
export const de_StartDetectMitigationActionsTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDetectMitigationActionsTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    taskId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartOnDemandAuditTaskCommand
 */
export const de_StartOnDemandAuditTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartOnDemandAuditTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    taskId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartThingRegistrationTaskCommand
 */
export const de_StartThingRegistrationTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartThingRegistrationTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    taskId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopThingRegistrationTaskCommand
 */
export const de_StopThingRegistrationTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopThingRegistrationTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TestAuthorizationCommand
 */
export const de_TestAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestAuthorizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    authResults: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TestInvokeAuthorizerCommand
 */
export const de_TestInvokeAuthorizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestInvokeAuthorizerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    disconnectAfterInSeconds: __expectInt32,
    isAuthenticated: __expectBoolean,
    policyDocuments: _json,
    principalId: __expectString,
    refreshAfterInSeconds: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TransferCertificateCommand
 */
export const de_TransferCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransferCertificateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    transferredCertificateArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAccountAuditConfigurationCommand
 */
export const de_UpdateAccountAuditConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountAuditConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAuditSuppressionCommand
 */
export const de_UpdateAuditSuppressionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAuditSuppressionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAuthorizerCommand
 */
export const de_UpdateAuthorizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAuthorizerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    authorizerArn: __expectString,
    authorizerName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBillingGroupCommand
 */
export const de_UpdateBillingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBillingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    version: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateCACertificateCommand
 */
export const de_UpdateCACertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCACertificateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateCertificateCommand
 */
export const de_UpdateCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCertificateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateCertificateProviderCommand
 */
export const de_UpdateCertificateProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCertificateProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    certificateProviderArn: __expectString,
    certificateProviderName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateCommandCommand
 */
export const de_UpdateCommandCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCommandCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    commandId: __expectString,
    deprecated: __expectBoolean,
    description: __expectString,
    displayName: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateCustomMetricCommand
 */
export const de_UpdateCustomMetricCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomMetricCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    displayName: __expectString,
    lastModifiedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    metricArn: __expectString,
    metricName: __expectString,
    metricType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDimensionCommand
 */
export const de_UpdateDimensionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDimensionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    creationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastModifiedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    stringValues: _json,
    type: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDomainConfigurationCommand
 */
export const de_UpdateDomainConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    domainConfigurationArn: __expectString,
    domainConfigurationName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDynamicThingGroupCommand
 */
export const de_UpdateDynamicThingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDynamicThingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    version: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEncryptionConfigurationCommand
 */
export const de_UpdateEncryptionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEncryptionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEventConfigurationsCommand
 */
export const de_UpdateEventConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFleetMetricCommand
 */
export const de_UpdateFleetMetricCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFleetMetricCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateIndexingConfigurationCommand
 */
export const de_UpdateIndexingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIndexingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateJobCommand
 */
export const de_UpdateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMitigationActionCommand
 */
export const de_UpdateMitigationActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMitigationActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    actionArn: __expectString,
    actionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePackageCommand
 */
export const de_UpdatePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePackageConfigurationCommand
 */
export const de_UpdatePackageConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePackageConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePackageVersionCommand
 */
export const de_UpdatePackageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePackageVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateProvisioningTemplateCommand
 */
export const de_UpdateProvisioningTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProvisioningTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRoleAliasCommand
 */
export const de_UpdateRoleAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoleAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    roleAlias: __expectString,
    roleAliasArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateScheduledAuditCommand
 */
export const de_UpdateScheduledAuditCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScheduledAuditCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    scheduledAuditArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSecurityProfileCommand
 */
export const de_UpdateSecurityProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecurityProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    additionalMetricsToRetain: _json,
    additionalMetricsToRetainV2: _json,
    alertTargets: _json,
    behaviors: (_) => de_Behaviors(_, context),
    creationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastModifiedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    metricsExportConfig: _json,
    securityProfileArn: __expectString,
    securityProfileDescription: __expectString,
    securityProfileName: __expectString,
    version: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateStreamCommand
 */
export const de_UpdateStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    streamArn: __expectString,
    streamId: __expectString,
    streamVersion: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateThingCommand
 */
export const de_UpdateThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateThingGroupCommand
 */
export const de_UpdateThingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    version: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateThingGroupsForThingCommand
 */
export const de_UpdateThingGroupsForThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThingGroupsForThingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateThingTypeCommand
 */
export const de_UpdateThingTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThingTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTopicRuleDestinationCommand
 */
export const de_UpdateTopicRuleDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTopicRuleDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ValidateSecurityProfileBehaviorsCommand
 */
export const de_ValidateSecurityProfileBehaviorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateSecurityProfileBehaviorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    valid: __expectBoolean,
    validationErrors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iot#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iot#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iot#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iot#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "TransferAlreadyCompletedException":
    case "com.amazonaws.iot#TransferAlreadyCompletedException":
      throw await de_TransferAlreadyCompletedExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.iot#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iot#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iot#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iot#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iot#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iot#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "VersionConflictException":
    case "com.amazonaws.iot#VersionConflictException":
      throw await de_VersionConflictExceptionRes(parsedOutput, context);
    case "InvalidStateTransitionException":
    case "com.amazonaws.iot#InvalidStateTransitionException":
      throw await de_InvalidStateTransitionExceptionRes(parsedOutput, context);
    case "ConflictingResourceUpdateException":
    case "com.amazonaws.iot#ConflictingResourceUpdateException":
      throw await de_ConflictingResourceUpdateExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.iot#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iot#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "CertificateValidationException":
    case "com.amazonaws.iot#CertificateValidationException":
      throw await de_CertificateValidationExceptionRes(parsedOutput, context);
    case "InvalidQueryException":
    case "com.amazonaws.iot#InvalidQueryException":
      throw await de_InvalidQueryExceptionRes(parsedOutput, context);
    case "IndexNotReadyException":
    case "com.amazonaws.iot#IndexNotReadyException":
      throw await de_IndexNotReadyExceptionRes(parsedOutput, context);
    case "InvalidAggregationException":
    case "com.amazonaws.iot#InvalidAggregationException":
      throw await de_InvalidAggregationExceptionRes(parsedOutput, context);
    case "MalformedPolicyException":
    case "com.amazonaws.iot#MalformedPolicyException":
      throw await de_MalformedPolicyExceptionRes(parsedOutput, context);
    case "VersionsLimitExceededException":
    case "com.amazonaws.iot#VersionsLimitExceededException":
      throw await de_VersionsLimitExceededExceptionRes(parsedOutput, context);
    case "SqlParseException":
    case "com.amazonaws.iot#SqlParseException":
      throw await de_SqlParseExceptionRes(parsedOutput, context);
    case "DeleteConflictException":
    case "com.amazonaws.iot#DeleteConflictException":
      throw await de_DeleteConflictExceptionRes(parsedOutput, context);
    case "CertificateStateException":
    case "com.amazonaws.iot#CertificateStateException":
      throw await de_CertificateStateExceptionRes(parsedOutput, context);
    case "NotConfiguredException":
    case "com.amazonaws.iot#NotConfiguredException":
      throw await de_NotConfiguredExceptionRes(parsedOutput, context);
    case "RegistrationCodeValidationException":
    case "com.amazonaws.iot#RegistrationCodeValidationException":
      throw await de_RegistrationCodeValidationExceptionRes(parsedOutput, context);
    case "CertificateConflictException":
    case "com.amazonaws.iot#CertificateConflictException":
      throw await de_CertificateConflictExceptionRes(parsedOutput, context);
    case "ResourceRegistrationFailureException":
    case "com.amazonaws.iot#ResourceRegistrationFailureException":
      throw await de_ResourceRegistrationFailureExceptionRes(parsedOutput, context);
    case "TaskAlreadyExistsException":
    case "com.amazonaws.iot#TaskAlreadyExistsException":
      throw await de_TaskAlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidResponseException":
    case "com.amazonaws.iot#InvalidResponseException":
      throw await de_InvalidResponseExceptionRes(parsedOutput, context);
    case "TransferConflictException":
    case "com.amazonaws.iot#TransferConflictException":
      throw await de_TransferConflictExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1CertificateConflictExceptionRes
 */
const de_CertificateConflictExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CertificateConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new CertificateConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1CertificateStateExceptionRes
 */
const de_CertificateStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CertificateStateException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new CertificateStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1CertificateValidationExceptionRes
 */
const de_CertificateValidationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CertificateValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new CertificateValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    resourceId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictingResourceUpdateExceptionRes
 */
const de_ConflictingResourceUpdateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictingResourceUpdateException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictingResourceUpdateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DeleteConflictExceptionRes
 */
const de_DeleteConflictExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeleteConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DeleteConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1IndexNotReadyExceptionRes
 */
const de_IndexNotReadyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IndexNotReadyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new IndexNotReadyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalExceptionRes
 */
const de_InternalExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalFailureExceptionRes
 */
const de_InternalFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidAggregationExceptionRes
 */
const de_InvalidAggregationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAggregationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidAggregationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidQueryExceptionRes
 */
const de_InvalidQueryExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidQueryException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidQueryException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidResponseExceptionRes
 */
const de_InvalidResponseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResponseException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidResponseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidStateTransitionExceptionRes
 */
const de_InvalidStateTransitionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateTransitionException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidStateTransitionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1MalformedPolicyExceptionRes
 */
const de_MalformedPolicyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedPolicyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new MalformedPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotConfiguredExceptionRes
 */
const de_NotConfiguredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotConfiguredException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new NotConfiguredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1RegistrationCodeValidationExceptionRes
 */
const de_RegistrationCodeValidationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RegistrationCodeValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new RegistrationCodeValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceAlreadyExistsExceptionRes
 */
const de_ResourceAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    resourceArn: __expectString,
    resourceId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceRegistrationFailureExceptionRes
 */
const de_ResourceRegistrationFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceRegistrationFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceRegistrationFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1SqlParseExceptionRes
 */
const de_SqlParseExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<SqlParseException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new SqlParseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TaskAlreadyExistsExceptionRes
 */
const de_TaskAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TaskAlreadyExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new TaskAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TransferAlreadyCompletedExceptionRes
 */
const de_TransferAlreadyCompletedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TransferAlreadyCompletedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new TransferAlreadyCompletedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TransferConflictExceptionRes
 */
const de_TransferConflictExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TransferConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new TransferConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnauthorizedExceptionRes
 */
const de_UnauthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1VersionConflictExceptionRes
 */
const de_VersionConflictExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<VersionConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new VersionConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1VersionsLimitExceededExceptionRes
 */
const de_VersionsLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<VersionsLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new VersionsLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AbortConfig
 */
const se_AbortConfig = (input: AbortConfig, context: __SerdeContext): any => {
  return take(input, {
    criteriaList: (_) => se_AbortCriteriaList(_, context),
  });
};

/**
 * serializeAws_restJson1AbortCriteria
 */
const se_AbortCriteria = (input: AbortCriteria, context: __SerdeContext): any => {
  return take(input, {
    action: [],
    failureType: [],
    minNumberOfExecutedThings: [],
    thresholdPercentage: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1AbortCriteriaList
 */
const se_AbortCriteriaList = (input: AbortCriteria[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AbortCriteria(entry, context);
    });
};

// se_Action omitted.

// se_ActionList omitted.

// se_AdditionalMetricsToRetainList omitted.

// se_AdditionalMetricsToRetainV2List omitted.

// se_AdditionalParameterMap omitted.

// se_AddThingsToThingGroupParams omitted.

// se_AggregationType omitted.

// se_AggregationTypeValues omitted.

// se_AlertTarget omitted.

// se_AlertTargets omitted.

// se_AssetPropertyTimestamp omitted.

// se_AssetPropertyValue omitted.

// se_AssetPropertyValueList omitted.

// se_AssetPropertyVariant omitted.

// se_AttributePayload omitted.

// se_Attributes omitted.

// se_AttributesMap omitted.

// se_AuditCheckConfiguration omitted.

// se_AuditCheckConfigurations omitted.

// se_AuditCheckToActionsMapping omitted.

// se_AuditCheckToReasonCodeFilter omitted.

// se_AuditMitigationActionsTaskTarget omitted.

// se_AuditNotificationTarget omitted.

// se_AuditNotificationTargetConfigurations omitted.

// se_AuthInfo omitted.

// se_AuthInfos omitted.

// se_AuthorizerConfig omitted.

/**
 * serializeAws_restJson1AwsJobAbortConfig
 */
const se_AwsJobAbortConfig = (input: AwsJobAbortConfig, context: __SerdeContext): any => {
  return take(input, {
    abortCriteriaList: (_) => se_AwsJobAbortCriteriaList(_, context),
  });
};

/**
 * serializeAws_restJson1AwsJobAbortCriteria
 */
const se_AwsJobAbortCriteria = (input: AwsJobAbortCriteria, context: __SerdeContext): any => {
  return take(input, {
    action: [],
    failureType: [],
    minNumberOfExecutedThings: [],
    thresholdPercentage: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1AwsJobAbortCriteriaList
 */
const se_AwsJobAbortCriteriaList = (input: AwsJobAbortCriteria[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AwsJobAbortCriteria(entry, context);
    });
};

/**
 * serializeAws_restJson1AwsJobExecutionsRolloutConfig
 */
const se_AwsJobExecutionsRolloutConfig = (input: AwsJobExecutionsRolloutConfig, context: __SerdeContext): any => {
  return take(input, {
    exponentialRate: (_) => se_AwsJobExponentialRolloutRate(_, context),
    maximumPerMinute: [],
  });
};

/**
 * serializeAws_restJson1AwsJobExponentialRolloutRate
 */
const se_AwsJobExponentialRolloutRate = (input: AwsJobExponentialRolloutRate, context: __SerdeContext): any => {
  return take(input, {
    baseRatePerMinute: [],
    incrementFactor: __serializeFloat,
    rateIncreaseCriteria: _json,
  });
};

// se_AwsJobPresignedUrlConfig omitted.

// se_AwsJobRateIncreaseCriteria omitted.

// se_AwsJobTimeoutConfig omitted.

/**
 * serializeAws_restJson1Behavior
 */
const se_Behavior = (input: Behavior, context: __SerdeContext): any => {
  return take(input, {
    criteria: (_) => se_BehaviorCriteria(_, context),
    exportMetric: [],
    metric: [],
    metricDimension: _json,
    name: [],
    suppressAlerts: [],
  });
};

/**
 * serializeAws_restJson1BehaviorCriteria
 */
const se_BehaviorCriteria = (input: BehaviorCriteria, context: __SerdeContext): any => {
  return take(input, {
    comparisonOperator: [],
    consecutiveDatapointsToAlarm: [],
    consecutiveDatapointsToClear: [],
    durationSeconds: [],
    mlDetectionConfig: _json,
    statisticalThreshold: _json,
    value: (_) => se_MetricValue(_, context),
  });
};

/**
 * serializeAws_restJson1Behaviors
 */
const se_Behaviors = (input: Behavior[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Behavior(entry, context);
    });
};

// se_BillingGroupProperties omitted.

// se_BucketsAggregationType omitted.

// se_CertificateProviderAccountDefaultForOperations omitted.

// se_CheckCustomConfiguration omitted.

// se_Cidrs omitted.

// se_ClientCertificateConfig omitted.

// se_ClientProperties omitted.

// se_CloudwatchAlarmAction omitted.

// se_CloudwatchLogsAction omitted.

// se_CloudwatchMetricAction omitted.

/**
 * serializeAws_restJson1CodeSigning
 */
const se_CodeSigning = (input: CodeSigning, context: __SerdeContext): any => {
  return take(input, {
    awsSignerJobId: [],
    customCodeSigning: (_) => se_CustomCodeSigning(_, context),
    startSigningJobParameter: _json,
  });
};

// se_CodeSigningCertificateChain omitted.

/**
 * serializeAws_restJson1CodeSigningSignature
 */
const se_CodeSigningSignature = (input: CodeSigningSignature, context: __SerdeContext): any => {
  return take(input, {
    inlineDocument: context.base64Encoder,
  });
};

/**
 * serializeAws_restJson1CommandParameter
 */
const se_CommandParameter = (input: CommandParameter, context: __SerdeContext): any => {
  return take(input, {
    defaultValue: (_) => se_CommandParameterValue(_, context),
    description: [],
    name: [],
    value: (_) => se_CommandParameterValue(_, context),
  });
};

/**
 * serializeAws_restJson1CommandParameterList
 */
const se_CommandParameterList = (input: CommandParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CommandParameter(entry, context);
    });
};

/**
 * serializeAws_restJson1CommandParameterValue
 */
const se_CommandParameterValue = (input: CommandParameterValue, context: __SerdeContext): any => {
  return take(input, {
    B: [],
    BIN: context.base64Encoder,
    D: __serializeFloat,
    I: [],
    L: [],
    S: [],
    UL: [],
  });
};

/**
 * serializeAws_restJson1CommandPayload
 */
const se_CommandPayload = (input: CommandPayload, context: __SerdeContext): any => {
  return take(input, {
    content: context.base64Encoder,
    contentType: [],
  });
};

// se_Configuration omitted.

/**
 * serializeAws_restJson1CustomCodeSigning
 */
const se_CustomCodeSigning = (input: CustomCodeSigning, context: __SerdeContext): any => {
  return take(input, {
    certificateChain: _json,
    hashAlgorithm: [],
    signature: (_) => se_CodeSigningSignature(_, context),
    signatureAlgorithm: [],
  });
};

// se_Destination omitted.

// se_DestinationPackageVersions omitted.

// se_DetailsMap omitted.

// se_DetectMitigationActionsTaskTarget omitted.

// se_DetectMitigationActionsToExecuteList omitted.

// se_DimensionStringValues omitted.

// se_DynamoDBAction omitted.

// se_DynamoDBv2Action omitted.

// se_ElasticsearchAction omitted.

// se_EnableIoTLoggingParams omitted.

// se_EventConfigurations omitted.

/**
 * serializeAws_restJson1ExponentialRolloutRate
 */
const se_ExponentialRolloutRate = (input: ExponentialRolloutRate, context: __SerdeContext): any => {
  return take(input, {
    baseRatePerMinute: [],
    incrementFactor: __serializeFloat,
    rateIncreaseCriteria: _json,
  });
};

// se_Field omitted.

// se_Fields omitted.

// se_FileLocation omitted.

// se_FindingIds omitted.

// se_FirehoseAction omitted.

// se_GeoLocationsFilter omitted.

// se_GeoLocationTarget omitted.

// se_HeaderList omitted.

// se_HttpAction omitted.

// se_HttpActionHeader omitted.

// se_HttpAuthorization omitted.

// se_HttpContext omitted.

// se_HttpHeaders omitted.

// se_HttpUrlDestinationConfiguration omitted.

// se_IndexingFilter omitted.

// se_IotAnalyticsAction omitted.

// se_IotEventsAction omitted.

// se_IotSiteWiseAction omitted.

// se_IssuerCertificateIdentifier omitted.

// se_JobExecutionsRetryConfig omitted.

/**
 * serializeAws_restJson1JobExecutionsRolloutConfig
 */
const se_JobExecutionsRolloutConfig = (input: JobExecutionsRolloutConfig, context: __SerdeContext): any => {
  return take(input, {
    exponentialRate: (_) => se_ExponentialRolloutRate(_, context),
    maximumPerMinute: [],
  });
};

// se_JobTargets omitted.

// se_KafkaAction omitted.

// se_KafkaActionHeader omitted.

// se_KafkaHeaders omitted.

// se_KinesisAction omitted.

// se_LambdaAction omitted.

// se_LocationAction omitted.

// se_LocationTimestamp omitted.

// se_LoggingOptionsPayload omitted.

// se_LogTarget omitted.

// se_MachineLearningDetectionConfig omitted.

// se_MaintenanceWindow omitted.

// se_MaintenanceWindows omitted.

// se_MetricDimension omitted.

// se_MetricsExportConfig omitted.

// se_MetricToRetain omitted.

/**
 * serializeAws_restJson1MetricValue
 */
const se_MetricValue = (input: MetricValue, context: __SerdeContext): any => {
  return take(input, {
    cidrs: _json,
    count: [],
    number: __serializeFloat,
    numbers: (_) => se_NumberList(_, context),
    ports: _json,
    strings: _json,
  });
};

// se_MitigationActionNameList omitted.

// se_MitigationActionParams omitted.

// se_Mqtt5Configuration omitted.

/**
 * serializeAws_restJson1MqttContext
 */
const se_MqttContext = (input: MqttContext, context: __SerdeContext): any => {
  return take(input, {
    clientId: [],
    password: context.base64Encoder,
    username: [],
  });
};

// se_MqttHeaders omitted.

// se_NamedShadowNamesFilter omitted.

/**
 * serializeAws_restJson1NumberList
 */
const se_NumberList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return __serializeFloat(entry);
    });
};

// se_OpenSearchAction omitted.

/**
 * serializeAws_restJson1OTAUpdateFile
 */
const se_OTAUpdateFile = (input: OTAUpdateFile, context: __SerdeContext): any => {
  return take(input, {
    attributes: _json,
    codeSigning: (_) => se_CodeSigning(_, context),
    fileLocation: _json,
    fileName: [],
    fileType: [],
    fileVersion: [],
  });
};

/**
 * serializeAws_restJson1OTAUpdateFiles
 */
const se_OTAUpdateFiles = (input: OTAUpdateFile[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_OTAUpdateFile(entry, context);
    });
};

// se_PackageVersionArtifact omitted.

// se_ParameterMap omitted.

// se_Parameters omitted.

/**
 * serializeAws_restJson1PercentList
 */
const se_PercentList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return __serializeFloat(entry);
    });
};

// se_PolicyNames omitted.

// se_PolicyVersionIdentifier omitted.

// se_Ports omitted.

// se_PresignedUrlConfig omitted.

// se_PropagatingAttribute omitted.

// se_PropagatingAttributeList omitted.

// se_Protocols omitted.

// se_ProvisioningHook omitted.

// se_PublicKeyMap omitted.

// se_PublishFindingToSnsParams omitted.

// se_PutAssetPropertyValueEntry omitted.

// se_PutAssetPropertyValueEntryList omitted.

// se_PutItemInput omitted.

// se_RateIncreaseCriteria omitted.

// se_ReasonForNonComplianceCodes omitted.

// se_RegistrationConfig omitted.

// se_ReplaceDefaultPolicyVersionParams omitted.

// se_RepublishAction omitted.

// se_ResourceAttributes omitted.

// se_ResourceIdentifier omitted.

// se_Resources omitted.

// se_RetryCriteria omitted.

// se_RetryCriteriaList omitted.

// se_S3Action omitted.

// se_S3Destination omitted.

// se_S3Location omitted.

// se_SalesforceAction omitted.

// se_Sbom omitted.

// se_SchedulingConfig omitted.

// se_SearchableAttributes omitted.

// se_SecurityGroupList omitted.

// se_ServerCertificateArns omitted.

// se_ServerCertificateConfig omitted.

// se_SigningProfileParameter omitted.

// se_SigV4Authorization omitted.

// se_SnsAction omitted.

// se_SqsAction omitted.

// se_StartSigningJobParameter omitted.

// se_StatisticalThreshold omitted.

// se_StepFunctionsAction omitted.

// se__Stream omitted.

// se_StreamFile omitted.

// se_StreamFiles omitted.

// se_StringList omitted.

// se_SubnetIdList omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagMap omitted.

// se_TargetAuditCheckNames omitted.

// se_Targets omitted.

// se_TargetViolationIdsForDetectMitigationActions omitted.

// se_TermsAggregation omitted.

// se_ThingGroupIndexingConfiguration omitted.

// se_ThingGroupList omitted.

// se_ThingGroupNames omitted.

// se_ThingGroupProperties omitted.

// se_ThingIndexingConfiguration omitted.

// se_ThingTypeProperties omitted.

// se_TimeFilter omitted.

// se_TimeoutConfig omitted.

// se_TimestreamAction omitted.

// se_TimestreamDimension omitted.

// se_TimestreamDimensionList omitted.

// se_TimestreamTimestamp omitted.

// se_TlsConfig omitted.

// se_TlsContext omitted.

// se_TopicRuleDestinationConfiguration omitted.

// se_TopicRulePayload omitted.

// se_UpdateCACertificateParams omitted.

// se_UpdateDeviceCertificateParams omitted.

// se_UserProperties omitted.

// se_UserProperty omitted.

// se_VersionUpdateByJobsConfig omitted.

/**
 * serializeAws_restJson1ViolationEventOccurrenceRange
 */
const se_ViolationEventOccurrenceRange = (input: ViolationEventOccurrenceRange, context: __SerdeContext): any => {
  return take(input, {
    endTime: (_) => _.getTime() / 1_000,
    startTime: (_) => _.getTime() / 1_000,
  });
};

// se_VpcDestinationConfiguration omitted.

/**
 * deserializeAws_restJson1AbortConfig
 */
const de_AbortConfig = (output: any, context: __SerdeContext): AbortConfig => {
  return take(output, {
    criteriaList: (_: any) => de_AbortCriteriaList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1AbortCriteria
 */
const de_AbortCriteria = (output: any, context: __SerdeContext): AbortCriteria => {
  return take(output, {
    action: __expectString,
    failureType: __expectString,
    minNumberOfExecutedThings: __expectInt32,
    thresholdPercentage: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1AbortCriteriaList
 */
const de_AbortCriteriaList = (output: any, context: __SerdeContext): AbortCriteria[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AbortCriteria(entry, context);
    });
  return retVal;
};

// de_Action omitted.

// de_ActionList omitted.

/**
 * deserializeAws_restJson1ActiveViolation
 */
const de_ActiveViolation = (output: any, context: __SerdeContext): ActiveViolation => {
  return take(output, {
    behavior: (_: any) => de_Behavior(_, context),
    lastViolationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastViolationValue: (_: any) => de_MetricValue(_, context),
    securityProfileName: __expectString,
    thingName: __expectString,
    verificationState: __expectString,
    verificationStateDescription: __expectString,
    violationEventAdditionalInfo: _json,
    violationId: __expectString,
    violationStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1ActiveViolations
 */
const de_ActiveViolations = (output: any, context: __SerdeContext): ActiveViolation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ActiveViolation(entry, context);
    });
  return retVal;
};

// de_AdditionalMetricsToRetainList omitted.

// de_AdditionalMetricsToRetainV2List omitted.

// de_AdditionalParameterMap omitted.

// de_AddThingsToThingGroupParams omitted.

// de_AggregationType omitted.

// de_AggregationTypeValues omitted.

// de_AlertTarget omitted.

// de_AlertTargets omitted.

// de_Allowed omitted.

// de_AssetPropertyTimestamp omitted.

// de_AssetPropertyValue omitted.

// de_AssetPropertyValueList omitted.

// de_AssetPropertyVariant omitted.

// de_AttributePayload omitted.

// de_Attributes omitted.

// de_AttributesMap omitted.

// de_AuditCheckConfiguration omitted.

// de_AuditCheckConfigurations omitted.

// de_AuditCheckDetails omitted.

// de_AuditCheckToActionsMapping omitted.

// de_AuditCheckToReasonCodeFilter omitted.

// de_AuditDetails omitted.

/**
 * deserializeAws_restJson1AuditFinding
 */
const de_AuditFinding = (output: any, context: __SerdeContext): AuditFinding => {
  return take(output, {
    checkName: __expectString,
    findingId: __expectString,
    findingTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    isSuppressed: __expectBoolean,
    nonCompliantResource: _json,
    reasonForNonCompliance: __expectString,
    reasonForNonComplianceCode: __expectString,
    relatedResources: _json,
    severity: __expectString,
    taskId: __expectString,
    taskStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1AuditFindings
 */
const de_AuditFindings = (output: any, context: __SerdeContext): AuditFinding[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AuditFinding(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AuditMitigationActionExecutionMetadata
 */
const de_AuditMitigationActionExecutionMetadata = (
  output: any,
  context: __SerdeContext
): AuditMitigationActionExecutionMetadata => {
  return take(output, {
    actionId: __expectString,
    actionName: __expectString,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    errorCode: __expectString,
    findingId: __expectString,
    message: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    taskId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AuditMitigationActionExecutionMetadataList
 */
const de_AuditMitigationActionExecutionMetadataList = (
  output: any,
  context: __SerdeContext
): AuditMitigationActionExecutionMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AuditMitigationActionExecutionMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AuditMitigationActionsTaskMetadata
 */
const de_AuditMitigationActionsTaskMetadata = (
  output: any,
  context: __SerdeContext
): AuditMitigationActionsTaskMetadata => {
  return take(output, {
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    taskId: __expectString,
    taskStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AuditMitigationActionsTaskMetadataList
 */
const de_AuditMitigationActionsTaskMetadataList = (
  output: any,
  context: __SerdeContext
): AuditMitigationActionsTaskMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AuditMitigationActionsTaskMetadata(entry, context);
    });
  return retVal;
};

// de_AuditMitigationActionsTaskStatistics omitted.

// de_AuditMitigationActionsTaskTarget omitted.

// de_AuditNotificationTarget omitted.

// de_AuditNotificationTargetConfigurations omitted.

/**
 * deserializeAws_restJson1AuditSuppression
 */
const de_AuditSuppression = (output: any, context: __SerdeContext): AuditSuppression => {
  return take(output, {
    checkName: __expectString,
    description: __expectString,
    expirationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    resourceIdentifier: _json,
    suppressIndefinitely: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_restJson1AuditSuppressionList
 */
const de_AuditSuppressionList = (output: any, context: __SerdeContext): AuditSuppression[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AuditSuppression(entry, context);
    });
  return retVal;
};

// de_AuditTaskMetadata omitted.

// de_AuditTaskMetadataList omitted.

// de_AuthInfo omitted.

// de_AuthorizerConfig omitted.

/**
 * deserializeAws_restJson1AuthorizerDescription
 */
const de_AuthorizerDescription = (output: any, context: __SerdeContext): AuthorizerDescription => {
  return take(output, {
    authorizerArn: __expectString,
    authorizerFunctionArn: __expectString,
    authorizerName: __expectString,
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    enableCachingForHttp: __expectBoolean,
    lastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    signingDisabled: __expectBoolean,
    status: __expectString,
    tokenKeyName: __expectString,
    tokenSigningPublicKeys: _json,
  }) as any;
};

// de_Authorizers omitted.

// de_AuthorizerSummary omitted.

// de_AuthResult omitted.

// de_AuthResults omitted.

/**
 * deserializeAws_restJson1AwsJobExecutionsRolloutConfig
 */
const de_AwsJobExecutionsRolloutConfig = (output: any, context: __SerdeContext): AwsJobExecutionsRolloutConfig => {
  return take(output, {
    exponentialRate: (_: any) => de_AwsJobExponentialRolloutRate(_, context),
    maximumPerMinute: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1AwsJobExponentialRolloutRate
 */
const de_AwsJobExponentialRolloutRate = (output: any, context: __SerdeContext): AwsJobExponentialRolloutRate => {
  return take(output, {
    baseRatePerMinute: __expectInt32,
    incrementFactor: __limitedParseDouble,
    rateIncreaseCriteria: _json,
  }) as any;
};

// de_AwsJobPresignedUrlConfig omitted.

// de_AwsJobRateIncreaseCriteria omitted.

/**
 * deserializeAws_restJson1Behavior
 */
const de_Behavior = (output: any, context: __SerdeContext): Behavior => {
  return take(output, {
    criteria: (_: any) => de_BehaviorCriteria(_, context),
    exportMetric: __expectBoolean,
    metric: __expectString,
    metricDimension: _json,
    name: __expectString,
    suppressAlerts: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_restJson1BehaviorCriteria
 */
const de_BehaviorCriteria = (output: any, context: __SerdeContext): BehaviorCriteria => {
  return take(output, {
    comparisonOperator: __expectString,
    consecutiveDatapointsToAlarm: __expectInt32,
    consecutiveDatapointsToClear: __expectInt32,
    durationSeconds: __expectInt32,
    mlDetectionConfig: _json,
    statisticalThreshold: _json,
    value: (_: any) => de_MetricValue(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1BehaviorModelTrainingSummaries
 */
const de_BehaviorModelTrainingSummaries = (output: any, context: __SerdeContext): BehaviorModelTrainingSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BehaviorModelTrainingSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BehaviorModelTrainingSummary
 */
const de_BehaviorModelTrainingSummary = (output: any, context: __SerdeContext): BehaviorModelTrainingSummary => {
  return take(output, {
    behaviorName: __expectString,
    datapointsCollectionPercentage: __limitedParseDouble,
    lastModelRefreshDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    modelStatus: __expectString,
    securityProfileName: __expectString,
    trainingDataCollectionStartDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1Behaviors
 */
const de_Behaviors = (output: any, context: __SerdeContext): Behavior[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Behavior(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BillingGroupMetadata
 */
const de_BillingGroupMetadata = (output: any, context: __SerdeContext): BillingGroupMetadata => {
  return take(output, {
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_BillingGroupNameAndArnList omitted.

// de_BillingGroupProperties omitted.

// de_Bucket omitted.

// de_Buckets omitted.

/**
 * deserializeAws_restJson1CACertificate
 */
const de_CACertificate = (output: any, context: __SerdeContext): CACertificate => {
  return take(output, {
    certificateArn: __expectString,
    certificateId: __expectString,
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CACertificateDescription
 */
const de_CACertificateDescription = (output: any, context: __SerdeContext): CACertificateDescription => {
  return take(output, {
    autoRegistrationStatus: __expectString,
    certificateArn: __expectString,
    certificateId: __expectString,
    certificateMode: __expectString,
    certificatePem: __expectString,
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    customerVersion: __expectInt32,
    generationId: __expectString,
    lastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ownedBy: __expectString,
    status: __expectString,
    validity: (_: any) => de_CertificateValidity(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1CACertificates
 */
const de_CACertificates = (output: any, context: __SerdeContext): CACertificate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CACertificate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Certificate
 */
const de_Certificate = (output: any, context: __SerdeContext): Certificate => {
  return take(output, {
    certificateArn: __expectString,
    certificateId: __expectString,
    certificateMode: __expectString,
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CertificateDescription
 */
const de_CertificateDescription = (output: any, context: __SerdeContext): CertificateDescription => {
  return take(output, {
    caCertificateId: __expectString,
    certificateArn: __expectString,
    certificateId: __expectString,
    certificateMode: __expectString,
    certificatePem: __expectString,
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    customerVersion: __expectInt32,
    generationId: __expectString,
    lastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ownedBy: __expectString,
    previousOwnedBy: __expectString,
    status: __expectString,
    transferData: (_: any) => de_TransferData(_, context),
    validity: (_: any) => de_CertificateValidity(_, context),
  }) as any;
};

// de_CertificateProviderAccountDefaultForOperations omitted.

// de_CertificateProviders omitted.

// de_CertificateProviderSummary omitted.

/**
 * deserializeAws_restJson1Certificates
 */
const de_Certificates = (output: any, context: __SerdeContext): Certificate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Certificate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CertificateValidity
 */
const de_CertificateValidity = (output: any, context: __SerdeContext): CertificateValidity => {
  return take(output, {
    notAfter: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    notBefore: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_CheckCustomConfiguration omitted.

// de_Cidrs omitted.

// de_ClientCertificateConfig omitted.

// de_ClientProperties omitted.

// de_CloudwatchAlarmAction omitted.

// de_CloudwatchLogsAction omitted.

// de_CloudwatchMetricAction omitted.

/**
 * deserializeAws_restJson1CodeSigning
 */
const de_CodeSigning = (output: any, context: __SerdeContext): CodeSigning => {
  return take(output, {
    awsSignerJobId: __expectString,
    customCodeSigning: (_: any) => de_CustomCodeSigning(_, context),
    startSigningJobParameter: _json,
  }) as any;
};

// de_CodeSigningCertificateChain omitted.

/**
 * deserializeAws_restJson1CodeSigningSignature
 */
const de_CodeSigningSignature = (output: any, context: __SerdeContext): CodeSigningSignature => {
  return take(output, {
    inlineDocument: context.base64Decoder,
  }) as any;
};

/**
 * deserializeAws_restJson1CommandExecutionParameterMap
 */
const de_CommandExecutionParameterMap = (
  output: any,
  context: __SerdeContext
): Record<string, CommandParameterValue> => {
  return Object.entries(output).reduce((acc: Record<string, CommandParameterValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_CommandParameterValue(value, context);
    return acc;
  }, {} as Record<string, CommandParameterValue>);
};

/**
 * deserializeAws_restJson1CommandExecutionResult
 */
const de_CommandExecutionResult = (output: any, context: __SerdeContext): CommandExecutionResult => {
  return take(output, {
    B: __expectBoolean,
    BIN: context.base64Decoder,
    S: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CommandExecutionResultMap
 */
const de_CommandExecutionResultMap = (output: any, context: __SerdeContext): Record<string, CommandExecutionResult> => {
  return Object.entries(output).reduce((acc: Record<string, CommandExecutionResult>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_CommandExecutionResult(value, context);
    return acc;
  }, {} as Record<string, CommandExecutionResult>);
};

/**
 * deserializeAws_restJson1CommandExecutionSummary
 */
const de_CommandExecutionSummary = (output: any, context: __SerdeContext): CommandExecutionSummary => {
  return take(output, {
    commandArn: __expectString,
    completedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    executionId: __expectString,
    startedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    targetArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CommandExecutionSummaryList
 */
const de_CommandExecutionSummaryList = (output: any, context: __SerdeContext): CommandExecutionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CommandExecutionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CommandParameter
 */
const de_CommandParameter = (output: any, context: __SerdeContext): CommandParameter => {
  return take(output, {
    defaultValue: (_: any) => de_CommandParameterValue(_, context),
    description: __expectString,
    name: __expectString,
    value: (_: any) => de_CommandParameterValue(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1CommandParameterList
 */
const de_CommandParameterList = (output: any, context: __SerdeContext): CommandParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CommandParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CommandParameterValue
 */
const de_CommandParameterValue = (output: any, context: __SerdeContext): CommandParameterValue => {
  return take(output, {
    B: __expectBoolean,
    BIN: context.base64Decoder,
    D: __limitedParseDouble,
    I: __expectInt32,
    L: __expectLong,
    S: __expectString,
    UL: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CommandPayload
 */
const de_CommandPayload = (output: any, context: __SerdeContext): CommandPayload => {
  return take(output, {
    content: context.base64Decoder,
    contentType: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CommandSummary
 */
const de_CommandSummary = (output: any, context: __SerdeContext): CommandSummary => {
  return take(output, {
    commandArn: __expectString,
    commandId: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deprecated: __expectBoolean,
    displayName: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    pendingDeletion: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_restJson1CommandSummaryList
 */
const de_CommandSummaryList = (output: any, context: __SerdeContext): CommandSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CommandSummary(entry, context);
    });
  return retVal;
};

// de_Configuration omitted.

// de_ConfigurationDetails omitted.

/**
 * deserializeAws_restJson1CustomCodeSigning
 */
const de_CustomCodeSigning = (output: any, context: __SerdeContext): CustomCodeSigning => {
  return take(output, {
    certificateChain: _json,
    hashAlgorithm: __expectString,
    signature: (_: any) => de_CodeSigningSignature(_, context),
    signatureAlgorithm: __expectString,
  }) as any;
};

// de_Denied omitted.

// de_Destination omitted.

// de_DestinationPackageVersions omitted.

// de_DetailsMap omitted.

/**
 * deserializeAws_restJson1DetectMitigationActionExecution
 */
const de_DetectMitigationActionExecution = (output: any, context: __SerdeContext): DetectMitigationActionExecution => {
  return take(output, {
    actionName: __expectString,
    errorCode: __expectString,
    executionEndDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    executionStartDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    message: __expectString,
    status: __expectString,
    taskId: __expectString,
    thingName: __expectString,
    violationId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DetectMitigationActionExecutionList
 */
const de_DetectMitigationActionExecutionList = (
  output: any,
  context: __SerdeContext
): DetectMitigationActionExecution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DetectMitigationActionExecution(entry, context);
    });
  return retVal;
};

// de_DetectMitigationActionsTaskStatistics omitted.

/**
 * deserializeAws_restJson1DetectMitigationActionsTaskSummary
 */
const de_DetectMitigationActionsTaskSummary = (
  output: any,
  context: __SerdeContext
): DetectMitigationActionsTaskSummary => {
  return take(output, {
    actionsDefinition: _json,
    onlyActiveViolationsIncluded: __expectBoolean,
    suppressedAlertsIncluded: __expectBoolean,
    target: _json,
    taskEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    taskId: __expectString,
    taskStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    taskStatistics: _json,
    taskStatus: __expectString,
    violationEventOccurrenceRange: (_: any) => de_ViolationEventOccurrenceRange(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1DetectMitigationActionsTaskSummaryList
 */
const de_DetectMitigationActionsTaskSummaryList = (
  output: any,
  context: __SerdeContext
): DetectMitigationActionsTaskSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DetectMitigationActionsTaskSummary(entry, context);
    });
  return retVal;
};

// de_DetectMitigationActionsTaskTarget omitted.

// de_DimensionNames omitted.

// de_DimensionStringValues omitted.

// de_DocumentParameter omitted.

// de_DocumentParameters omitted.

// de_DomainConfigurations omitted.

// de_DomainConfigurationSummary omitted.

// de_DynamoDBAction omitted.

// de_DynamoDBv2Action omitted.

// de_EffectivePolicies omitted.

// de_EffectivePolicy omitted.

// de_ElasticsearchAction omitted.

// de_EnableIoTLoggingParams omitted.

// de_Environments omitted.

// de_ErrorInfo omitted.

// de_EventConfigurations omitted.

// de_ExplicitDeny omitted.

/**
 * deserializeAws_restJson1ExponentialRolloutRate
 */
const de_ExponentialRolloutRate = (output: any, context: __SerdeContext): ExponentialRolloutRate => {
  return take(output, {
    baseRatePerMinute: __expectInt32,
    incrementFactor: __limitedParseDouble,
    rateIncreaseCriteria: _json,
  }) as any;
};

// de_Field omitted.

// de_Fields omitted.

// de_FileLocation omitted.

// de_FindingIds omitted.

// de_FirehoseAction omitted.

// de_FleetMetricNameAndArn omitted.

// de_FleetMetricNameAndArnList omitted.

// de_GeoLocationsFilter omitted.

// de_GeoLocationTarget omitted.

// de_GroupNameAndArn omitted.

// de_HeaderList omitted.

// de_HttpAction omitted.

// de_HttpActionHeader omitted.

// de_HttpAuthorization omitted.

// de_HttpUrlDestinationProperties omitted.

// de_HttpUrlDestinationSummary omitted.

// de_ImplicitDeny omitted.

// de_IndexingFilter omitted.

// de_IndexNamesList omitted.

// de_IotAnalyticsAction omitted.

// de_IotEventsAction omitted.

// de_IotSiteWiseAction omitted.

// de_IssuerCertificateIdentifier omitted.

/**
 * deserializeAws_restJson1Job
 */
const de_Job = (output: any, context: __SerdeContext): Job => {
  return take(output, {
    abortConfig: (_: any) => de_AbortConfig(_, context),
    comment: __expectString,
    completedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    destinationPackageVersions: _json,
    documentParameters: _json,
    forceCanceled: __expectBoolean,
    isConcurrent: __expectBoolean,
    jobArn: __expectString,
    jobExecutionsRetryConfig: _json,
    jobExecutionsRolloutConfig: (_: any) => de_JobExecutionsRolloutConfig(_, context),
    jobId: __expectString,
    jobProcessDetails: _json,
    jobTemplateArn: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    namespaceId: __expectString,
    presignedUrlConfig: _json,
    reasonCode: __expectString,
    scheduledJobRollouts: _json,
    schedulingConfig: _json,
    status: __expectString,
    targetSelection: __expectString,
    targets: _json,
    timeoutConfig: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1JobExecution
 */
const de_JobExecution = (output: any, context: __SerdeContext): JobExecution => {
  return take(output, {
    approximateSecondsBeforeTimedOut: __expectLong,
    executionNumber: __expectLong,
    forceCanceled: __expectBoolean,
    jobId: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    queuedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    startedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    statusDetails: _json,
    thingArn: __expectString,
    versionNumber: __expectLong,
  }) as any;
};

// de_JobExecutionsRetryConfig omitted.

/**
 * deserializeAws_restJson1JobExecutionsRolloutConfig
 */
const de_JobExecutionsRolloutConfig = (output: any, context: __SerdeContext): JobExecutionsRolloutConfig => {
  return take(output, {
    exponentialRate: (_: any) => de_ExponentialRolloutRate(_, context),
    maximumPerMinute: __expectInt32,
  }) as any;
};

// de_JobExecutionStatusDetails omitted.

/**
 * deserializeAws_restJson1JobExecutionSummary
 */
const de_JobExecutionSummary = (output: any, context: __SerdeContext): JobExecutionSummary => {
  return take(output, {
    executionNumber: __expectLong,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    queuedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    retryAttempt: __expectInt32,
    startedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1JobExecutionSummaryForJob
 */
const de_JobExecutionSummaryForJob = (output: any, context: __SerdeContext): JobExecutionSummaryForJob => {
  return take(output, {
    jobExecutionSummary: (_: any) => de_JobExecutionSummary(_, context),
    thingArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1JobExecutionSummaryForJobList
 */
const de_JobExecutionSummaryForJobList = (output: any, context: __SerdeContext): JobExecutionSummaryForJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobExecutionSummaryForJob(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1JobExecutionSummaryForThing
 */
const de_JobExecutionSummaryForThing = (output: any, context: __SerdeContext): JobExecutionSummaryForThing => {
  return take(output, {
    jobExecutionSummary: (_: any) => de_JobExecutionSummary(_, context),
    jobId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1JobExecutionSummaryForThingList
 */
const de_JobExecutionSummaryForThingList = (output: any, context: __SerdeContext): JobExecutionSummaryForThing[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobExecutionSummaryForThing(entry, context);
    });
  return retVal;
};

// de_JobProcessDetails omitted.

/**
 * deserializeAws_restJson1JobSummary
 */
const de_JobSummary = (output: any, context: __SerdeContext): JobSummary => {
  return take(output, {
    completedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    isConcurrent: __expectBoolean,
    jobArn: __expectString,
    jobId: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    targetSelection: __expectString,
    thingGroupId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1JobSummaryList
 */
const de_JobSummaryList = (output: any, context: __SerdeContext): JobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobSummary(entry, context);
    });
  return retVal;
};

// de_JobTargets omitted.

/**
 * deserializeAws_restJson1JobTemplateSummary
 */
const de_JobTemplateSummary = (output: any, context: __SerdeContext): JobTemplateSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    jobTemplateArn: __expectString,
    jobTemplateId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1JobTemplateSummaryList
 */
const de_JobTemplateSummaryList = (output: any, context: __SerdeContext): JobTemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobTemplateSummary(entry, context);
    });
  return retVal;
};

// de_KafkaAction omitted.

// de_KafkaActionHeader omitted.

// de_KafkaHeaders omitted.

// de_KeyPair omitted.

// de_KinesisAction omitted.

// de_LambdaAction omitted.

// de_LocationAction omitted.

// de_LocationTimestamp omitted.

// de_LogTarget omitted.

// de_LogTargetConfiguration omitted.

// de_LogTargetConfigurations omitted.

// de_MachineLearningDetectionConfig omitted.

// de_MaintenanceWindow omitted.

// de_MaintenanceWindows omitted.

// de_ManagedJobTemplatesSummaryList omitted.

// de_ManagedJobTemplateSummary omitted.

/**
 * deserializeAws_restJson1MetricDatum
 */
const de_MetricDatum = (output: any, context: __SerdeContext): MetricDatum => {
  return take(output, {
    timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    value: (_: any) => de_MetricValue(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1MetricDatumList
 */
const de_MetricDatumList = (output: any, context: __SerdeContext): MetricDatum[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricDatum(entry, context);
    });
  return retVal;
};

// de_MetricDimension omitted.

// de_MetricNames omitted.

// de_MetricsExportConfig omitted.

// de_MetricToRetain omitted.

/**
 * deserializeAws_restJson1MetricValue
 */
const de_MetricValue = (output: any, context: __SerdeContext): MetricValue => {
  return take(output, {
    cidrs: _json,
    count: __expectLong,
    number: __limitedParseDouble,
    numbers: (_: any) => de_NumberList(_, context),
    ports: _json,
    strings: _json,
  }) as any;
};

// de_MissingContextValues omitted.

// de_MitigationAction omitted.

/**
 * deserializeAws_restJson1MitigationActionIdentifier
 */
const de_MitigationActionIdentifier = (output: any, context: __SerdeContext): MitigationActionIdentifier => {
  return take(output, {
    actionArn: __expectString,
    actionName: __expectString,
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1MitigationActionIdentifierList
 */
const de_MitigationActionIdentifierList = (output: any, context: __SerdeContext): MitigationActionIdentifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MitigationActionIdentifier(entry, context);
    });
  return retVal;
};

// de_MitigationActionList omitted.

// de_MitigationActionNameList omitted.

// de_MitigationActionParams omitted.

// de_Mqtt5Configuration omitted.

// de_MqttHeaders omitted.

// de_NamedShadowNamesFilter omitted.

// de_NonCompliantResource omitted.

/**
 * deserializeAws_restJson1NumberList
 */
const de_NumberList = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

// de_OpenSearchAction omitted.

/**
 * deserializeAws_restJson1OTAUpdateFile
 */
const de_OTAUpdateFile = (output: any, context: __SerdeContext): OTAUpdateFile => {
  return take(output, {
    attributes: _json,
    codeSigning: (_: any) => de_CodeSigning(_, context),
    fileLocation: _json,
    fileName: __expectString,
    fileType: __expectInt32,
    fileVersion: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1OTAUpdateFiles
 */
const de_OTAUpdateFiles = (output: any, context: __SerdeContext): OTAUpdateFile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OTAUpdateFile(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1OTAUpdateInfo
 */
const de_OTAUpdateInfo = (output: any, context: __SerdeContext): OTAUpdateInfo => {
  return take(output, {
    additionalParameters: _json,
    awsIotJobArn: __expectString,
    awsIotJobId: __expectString,
    awsJobExecutionsRolloutConfig: (_: any) => de_AwsJobExecutionsRolloutConfig(_, context),
    awsJobPresignedUrlConfig: _json,
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    errorInfo: _json,
    lastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    otaUpdateArn: __expectString,
    otaUpdateFiles: (_: any) => de_OTAUpdateFiles(_, context),
    otaUpdateId: __expectString,
    otaUpdateStatus: __expectString,
    protocols: _json,
    targetSelection: __expectString,
    targets: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1OTAUpdatesSummary
 */
const de_OTAUpdatesSummary = (output: any, context: __SerdeContext): OTAUpdateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OTAUpdateSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1OTAUpdateSummary
 */
const de_OTAUpdateSummary = (output: any, context: __SerdeContext): OTAUpdateSummary => {
  return take(output, {
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    otaUpdateArn: __expectString,
    otaUpdateId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1OutgoingCertificate
 */
const de_OutgoingCertificate = (output: any, context: __SerdeContext): OutgoingCertificate => {
  return take(output, {
    certificateArn: __expectString,
    certificateId: __expectString,
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    transferDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    transferMessage: __expectString,
    transferredTo: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1OutgoingCertificates
 */
const de_OutgoingCertificates = (output: any, context: __SerdeContext): OutgoingCertificate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OutgoingCertificate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PackageSummary
 */
const de_PackageSummary = (output: any, context: __SerdeContext): PackageSummary => {
  return take(output, {
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    defaultVersionName: __expectString,
    lastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    packageName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1PackageSummaryList
 */
const de_PackageSummaryList = (output: any, context: __SerdeContext): PackageSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PackageSummary(entry, context);
    });
  return retVal;
};

// de_PackageVersionArtifact omitted.

/**
 * deserializeAws_restJson1PackageVersionSummary
 */
const de_PackageVersionSummary = (output: any, context: __SerdeContext): PackageVersionSummary => {
  return take(output, {
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    packageName: __expectString,
    status: __expectString,
    versionName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1PackageVersionSummaryList
 */
const de_PackageVersionSummaryList = (output: any, context: __SerdeContext): PackageVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PackageVersionSummary(entry, context);
    });
  return retVal;
};

// de_ParameterMap omitted.

/**
 * deserializeAws_restJson1Percentiles
 */
const de_Percentiles = (output: any, context: __SerdeContext): PercentPair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PercentPair(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PercentPair
 */
const de_PercentPair = (output: any, context: __SerdeContext): PercentPair => {
  return take(output, {
    percent: __limitedParseDouble,
    value: __limitedParseDouble,
  }) as any;
};

// de_Policies omitted.

// de_Policy omitted.

// de_PolicyDocuments omitted.

// de_PolicyTargets omitted.

/**
 * deserializeAws_restJson1PolicyVersion
 */
const de_PolicyVersion = (output: any, context: __SerdeContext): PolicyVersion => {
  return take(output, {
    createDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    isDefaultVersion: __expectBoolean,
    versionId: __expectString,
  }) as any;
};

// de_PolicyVersionIdentifier omitted.

/**
 * deserializeAws_restJson1PolicyVersions
 */
const de_PolicyVersions = (output: any, context: __SerdeContext): PolicyVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PolicyVersion(entry, context);
    });
  return retVal;
};

// de_Ports omitted.

// de_PresignedUrlConfig omitted.

// de_Principals omitted.

// de_PrincipalThingObject omitted.

// de_PrincipalThingObjects omitted.

// de_ProcessingTargetNameList omitted.

// de_PropagatingAttribute omitted.

// de_PropagatingAttributeList omitted.

// de_Protocols omitted.

// de_ProvisioningHook omitted.

/**
 * deserializeAws_restJson1ProvisioningTemplateListing
 */
const de_ProvisioningTemplateListing = (output: any, context: __SerdeContext): ProvisioningTemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProvisioningTemplateSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProvisioningTemplateSummary
 */
const de_ProvisioningTemplateSummary = (output: any, context: __SerdeContext): ProvisioningTemplateSummary => {
  return take(output, {
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    enabled: __expectBoolean,
    lastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    templateArn: __expectString,
    templateName: __expectString,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ProvisioningTemplateVersionListing
 */
const de_ProvisioningTemplateVersionListing = (
  output: any,
  context: __SerdeContext
): ProvisioningTemplateVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProvisioningTemplateVersionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProvisioningTemplateVersionSummary
 */
const de_ProvisioningTemplateVersionSummary = (
  output: any,
  context: __SerdeContext
): ProvisioningTemplateVersionSummary => {
  return take(output, {
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    isDefaultVersion: __expectBoolean,
    versionId: __expectInt32,
  }) as any;
};

// de_PublicKeyMap omitted.

// de_PublishFindingToSnsParams omitted.

// de_PutAssetPropertyValueEntry omitted.

// de_PutAssetPropertyValueEntryList omitted.

// de_PutItemInput omitted.

// de_RateIncreaseCriteria omitted.

// de_ReasonForNonComplianceCodes omitted.

// de_RegistrationConfig omitted.

// de_RelatedResource omitted.

// de_RelatedResources omitted.

// de_ReplaceDefaultPolicyVersionParams omitted.

// de_RepublishAction omitted.

// de_ResourceArns omitted.

// de_ResourceAttributes omitted.

// de_ResourceIdentifier omitted.

// de_Resources omitted.

// de_RetryCriteria omitted.

// de_RetryCriteriaList omitted.

/**
 * deserializeAws_restJson1RoleAliasDescription
 */
const de_RoleAliasDescription = (output: any, context: __SerdeContext): RoleAliasDescription => {
  return take(output, {
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    credentialDurationSeconds: __expectInt32,
    lastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    owner: __expectString,
    roleAlias: __expectString,
    roleAliasArn: __expectString,
    roleArn: __expectString,
  }) as any;
};

// de_RoleAliases omitted.

// de_S3Action omitted.

// de_S3Destination omitted.

// de_S3FileUrlList omitted.

// de_S3Location omitted.

// de_SalesforceAction omitted.

// de_Sbom omitted.

// de_SbomValidationResultSummary omitted.

// de_SbomValidationResultSummaryList omitted.

// de_ScheduledAuditMetadata omitted.

// de_ScheduledAuditMetadataList omitted.

// de_ScheduledJobRollout omitted.

// de_ScheduledJobRolloutList omitted.

// de_SchedulingConfig omitted.

// de_SearchableAttributes omitted.

// de_SecurityGroupList omitted.

// de_SecurityProfileIdentifier omitted.

// de_SecurityProfileIdentifiers omitted.

// de_SecurityProfileTarget omitted.

// de_SecurityProfileTargetMapping omitted.

// de_SecurityProfileTargetMappings omitted.

// de_SecurityProfileTargets omitted.

// de_ServerCertificateConfig omitted.

// de_ServerCertificates omitted.

// de_ServerCertificateSummary omitted.

// de_SigningProfileParameter omitted.

// de_SigV4Authorization omitted.

// de_SnsAction omitted.

// de_SqsAction omitted.

// de_StartSigningJobParameter omitted.

// de_StatisticalThreshold omitted.

/**
 * deserializeAws_restJson1Statistics
 */
const de_Statistics = (output: any, context: __SerdeContext): Statistics => {
  return take(output, {
    average: __limitedParseDouble,
    count: __expectInt32,
    maximum: __limitedParseDouble,
    minimum: __limitedParseDouble,
    stdDeviation: __limitedParseDouble,
    sum: __limitedParseDouble,
    sumOfSquares: __limitedParseDouble,
    variance: __limitedParseDouble,
  }) as any;
};

// de_StatusReason omitted.

// de_StepFunctionsAction omitted.

// de__Stream omitted.

// de_StreamFile omitted.

// de_StreamFiles omitted.

/**
 * deserializeAws_restJson1StreamInfo
 */
const de_StreamInfo = (output: any, context: __SerdeContext): StreamInfo => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    files: _json,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    roleArn: __expectString,
    streamArn: __expectString,
    streamId: __expectString,
    streamVersion: __expectInt32,
  }) as any;
};

// de_StreamsSummary omitted.

// de_StreamSummary omitted.

// de_StringList omitted.

// de_StringMap omitted.

// de_SubnetIdList omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TargetAuditCheckNames omitted.

// de_Targets omitted.

// de_TargetViolationIdsForDetectMitigationActions omitted.

// de_TaskIdList omitted.

// de_TaskStatistics omitted.

// de_TaskStatisticsForAuditCheck omitted.

// de_ThingAttribute omitted.

// de_ThingAttributeList omitted.

// de_ThingConnectivity omitted.

// de_ThingDocument omitted.

// de_ThingDocumentList omitted.

// de_ThingGroupDocument omitted.

// de_ThingGroupDocumentList omitted.

// de_ThingGroupIndexingConfiguration omitted.

/**
 * deserializeAws_restJson1ThingGroupMetadata
 */
const de_ThingGroupMetadata = (output: any, context: __SerdeContext): ThingGroupMetadata => {
  return take(output, {
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    parentGroupName: __expectString,
    rootToParentThingGroups: _json,
  }) as any;
};

// de_ThingGroupNameAndArnList omitted.

// de_ThingGroupNameList omitted.

// de_ThingGroupNames omitted.

// de_ThingGroupProperties omitted.

// de_ThingIndexingConfiguration omitted.

// de_ThingNameList omitted.

// de_ThingPrincipalObject omitted.

// de_ThingPrincipalObjects omitted.

/**
 * deserializeAws_restJson1ThingTypeDefinition
 */
const de_ThingTypeDefinition = (output: any, context: __SerdeContext): ThingTypeDefinition => {
  return take(output, {
    thingTypeArn: __expectString,
    thingTypeMetadata: (_: any) => de_ThingTypeMetadata(_, context),
    thingTypeName: __expectString,
    thingTypeProperties: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ThingTypeList
 */
const de_ThingTypeList = (output: any, context: __SerdeContext): ThingTypeDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ThingTypeDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ThingTypeMetadata
 */
const de_ThingTypeMetadata = (output: any, context: __SerdeContext): ThingTypeMetadata => {
  return take(output, {
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deprecated: __expectBoolean,
    deprecationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ThingTypeProperties omitted.

// de_TimeoutConfig omitted.

// de_TimestreamAction omitted.

// de_TimestreamDimension omitted.

// de_TimestreamDimensionList omitted.

// de_TimestreamTimestamp omitted.

// de_TlsConfig omitted.

/**
 * deserializeAws_restJson1TopicRule
 */
const de_TopicRule = (output: any, context: __SerdeContext): TopicRule => {
  return take(output, {
    actions: _json,
    awsIotSqlVersion: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    errorAction: _json,
    ruleDisabled: __expectBoolean,
    ruleName: __expectString,
    sql: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1TopicRuleDestination
 */
const de_TopicRuleDestination = (output: any, context: __SerdeContext): TopicRuleDestination => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    httpUrlProperties: _json,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    statusReason: __expectString,
    vpcProperties: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1TopicRuleDestinationSummaries
 */
const de_TopicRuleDestinationSummaries = (output: any, context: __SerdeContext): TopicRuleDestinationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TopicRuleDestinationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TopicRuleDestinationSummary
 */
const de_TopicRuleDestinationSummary = (output: any, context: __SerdeContext): TopicRuleDestinationSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    httpUrlSummary: _json,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    statusReason: __expectString,
    vpcDestinationSummary: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1TopicRuleList
 */
const de_TopicRuleList = (output: any, context: __SerdeContext): TopicRuleListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TopicRuleListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TopicRuleListItem
 */
const de_TopicRuleListItem = (output: any, context: __SerdeContext): TopicRuleListItem => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ruleArn: __expectString,
    ruleDisabled: __expectBoolean,
    ruleName: __expectString,
    topicPattern: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1TransferData
 */
const de_TransferData = (output: any, context: __SerdeContext): TransferData => {
  return take(output, {
    acceptDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    rejectDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    rejectReason: __expectString,
    transferDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    transferMessage: __expectString,
  }) as any;
};

// de_UpdateCACertificateParams omitted.

// de_UpdateDeviceCertificateParams omitted.

// de_UserProperties omitted.

// de_UserProperty omitted.

// de_ValidationError omitted.

// de_ValidationErrors omitted.

// de_VersionUpdateByJobsConfig omitted.

/**
 * deserializeAws_restJson1ViolationEvent
 */
const de_ViolationEvent = (output: any, context: __SerdeContext): ViolationEvent => {
  return take(output, {
    behavior: (_: any) => de_Behavior(_, context),
    metricValue: (_: any) => de_MetricValue(_, context),
    securityProfileName: __expectString,
    thingName: __expectString,
    verificationState: __expectString,
    verificationStateDescription: __expectString,
    violationEventAdditionalInfo: _json,
    violationEventTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    violationEventType: __expectString,
    violationId: __expectString,
  }) as any;
};

// de_ViolationEventAdditionalInfo omitted.

/**
 * deserializeAws_restJson1ViolationEventOccurrenceRange
 */
const de_ViolationEventOccurrenceRange = (output: any, context: __SerdeContext): ViolationEventOccurrenceRange => {
  return take(output, {
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1ViolationEvents
 */
const de_ViolationEvents = (output: any, context: __SerdeContext): ViolationEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ViolationEvent(entry, context);
    });
  return retVal;
};

// de_VpcDestinationProperties omitted.

// de_VpcDestinationSummary omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const _aAR = "allowAutoRegistration";
const _aN = "attributeName";
const _aO = "ascendingOrder";
const _aS = "actionStatus";
const _aT = "actionType";
const _aTI = "auditTaskId";
const _aV = "attributeValue";
const _bCT = "behaviorCriteriaType";
const _bS = "beforeSubstitution";
const _cI = "clientId";
const _cPN = "commandParameterName";
const _cT = "clientToken";
const _dN = "dimensionName";
const _dS = "deleteStream";
const _dSA = "deleteScheduledAudits";
const _dVO = "dimensionValueOperator";
const _eN = "executionNumber";
const _eT = "endpointType";
const _eTn = "endTime";
const _eV = "expectedVersion";
const _f = "force";
const _fD = "forceDelete";
const _fDAWSJ = "forceDeleteAWSJob";
const _fI = "findingId";
const _iAO = "isAscendingOrder";
const _iR = "includeResult";
const _jI = "jobId";
const _lSA = "listSuppressedAlerts";
const _m = "marker";
const _mN = "metricName";
const _mR = "maxResults";
const _n = "namespace";
const _nARS = "newAutoRegistrationStatus";
const _nI = "namespaceId";
const _nPF = "namePrefixFilter";
const _nS = "newStatus";
const _nT = "nextToken";
const _oUS = "otaUpdateStatus";
const _p = "principal";
const _pG = "parentGroup";
const _pN = "policyName";
const _pS = "pageSize";
const _r = "recursive";
const _rA = "resourceArn";
const _rD = "ruleDisabled";
const _rT = "reportType";
const _s = "status";
const _sAA = "setAsActive";
const _sAD = "setAsDefault";
const _sO = "sortOrder";
const _sPN = "securityProfileName";
const _sPTA = "securityProfileTargetArn";
const _sT = "startTime";
const _sTe = "serviceType";
const _t = "tags";
const _tA = "targetArn";
const _tAA = "targetAwsAccount";
const _tGI = "thingGroupId";
const _tGN = "thingGroupName";
const _tI = "taskId";
const _tN = "targetName";
const _tNe = "templateName";
const _tNh = "thingName";
const _tPT = "thingPrincipalType";
const _tS = "taskStatus";
const _tSa = "targetSelection";
const _tT = "targetType";
const _tTN = "thingTypeName";
const _tTa = "taskType";
const _tV = "templateVersion";
const _to = "topic";
const _uPAV = "usePrefixAttributeValue";
const _vI = "violationId";
const _vR = "validationResult";
const _vS = "verificationState";
const _xaip = "x-amzn-iot-principal";
const _xaip_ = "x-amzn-iot-policy";
const _xap = "x-amzn-principal";
const _xat = "x-amz-tagging";
