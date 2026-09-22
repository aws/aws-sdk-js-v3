// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type AssociateGlossaryTermsCommandInput,
  type AssociateGlossaryTermsCommandOutput,
  AssociateGlossaryTermsCommand,
} from "./commands/AssociateGlossaryTermsCommand";
import {
  type BatchCreatePartitionCommandInput,
  type BatchCreatePartitionCommandOutput,
  BatchCreatePartitionCommand,
} from "./commands/BatchCreatePartitionCommand";
import {
  type BatchDeleteConnectionCommandInput,
  type BatchDeleteConnectionCommandOutput,
  BatchDeleteConnectionCommand,
} from "./commands/BatchDeleteConnectionCommand";
import {
  type BatchDeletePartitionCommandInput,
  type BatchDeletePartitionCommandOutput,
  BatchDeletePartitionCommand,
} from "./commands/BatchDeletePartitionCommand";
import {
  type BatchDeleteTableCommandInput,
  type BatchDeleteTableCommandOutput,
  BatchDeleteTableCommand,
} from "./commands/BatchDeleteTableCommand";
import {
  type BatchDeleteTableVersionCommandInput,
  type BatchDeleteTableVersionCommandOutput,
  BatchDeleteTableVersionCommand,
} from "./commands/BatchDeleteTableVersionCommand";
import {
  type BatchGetBlueprintsCommandInput,
  type BatchGetBlueprintsCommandOutput,
  BatchGetBlueprintsCommand,
} from "./commands/BatchGetBlueprintsCommand";
import {
  type BatchGetCrawlersCommandInput,
  type BatchGetCrawlersCommandOutput,
  BatchGetCrawlersCommand,
} from "./commands/BatchGetCrawlersCommand";
import {
  type BatchGetCustomEntityTypesCommandInput,
  type BatchGetCustomEntityTypesCommandOutput,
  BatchGetCustomEntityTypesCommand,
} from "./commands/BatchGetCustomEntityTypesCommand";
import {
  type BatchGetDataQualityResultCommandInput,
  type BatchGetDataQualityResultCommandOutput,
  BatchGetDataQualityResultCommand,
} from "./commands/BatchGetDataQualityResultCommand";
import {
  type BatchGetDataQualityRulesetEvaluationRunCommandInput,
  type BatchGetDataQualityRulesetEvaluationRunCommandOutput,
  BatchGetDataQualityRulesetEvaluationRunCommand,
} from "./commands/BatchGetDataQualityRulesetEvaluationRunCommand";
import {
  type BatchGetDevEndpointsCommandInput,
  type BatchGetDevEndpointsCommandOutput,
  BatchGetDevEndpointsCommand,
} from "./commands/BatchGetDevEndpointsCommand";
import {
  type BatchGetIterableFormsCommandInput,
  type BatchGetIterableFormsCommandOutput,
  BatchGetIterableFormsCommand,
} from "./commands/BatchGetIterableFormsCommand";
import {
  type BatchGetJobsCommandInput,
  type BatchGetJobsCommandOutput,
  BatchGetJobsCommand,
} from "./commands/BatchGetJobsCommand";
import {
  type BatchGetPartitionCommandInput,
  type BatchGetPartitionCommandOutput,
  BatchGetPartitionCommand,
} from "./commands/BatchGetPartitionCommand";
import {
  type BatchGetTableOptimizerCommandInput,
  type BatchGetTableOptimizerCommandOutput,
  BatchGetTableOptimizerCommand,
} from "./commands/BatchGetTableOptimizerCommand";
import {
  type BatchGetTriggersCommandInput,
  type BatchGetTriggersCommandOutput,
  BatchGetTriggersCommand,
} from "./commands/BatchGetTriggersCommand";
import {
  type BatchGetWorkflowsCommandInput,
  type BatchGetWorkflowsCommandOutput,
  BatchGetWorkflowsCommand,
} from "./commands/BatchGetWorkflowsCommand";
import {
  type BatchPutDataQualityStatisticAnnotationCommandInput,
  type BatchPutDataQualityStatisticAnnotationCommandOutput,
  BatchPutDataQualityStatisticAnnotationCommand,
} from "./commands/BatchPutDataQualityStatisticAnnotationCommand";
import {
  type BatchStopJobRunCommandInput,
  type BatchStopJobRunCommandOutput,
  BatchStopJobRunCommand,
} from "./commands/BatchStopJobRunCommand";
import {
  type BatchUpdatePartitionCommandInput,
  type BatchUpdatePartitionCommandOutput,
  BatchUpdatePartitionCommand,
} from "./commands/BatchUpdatePartitionCommand";
import {
  type CancelDataQualityRuleRecommendationRunCommandInput,
  type CancelDataQualityRuleRecommendationRunCommandOutput,
  CancelDataQualityRuleRecommendationRunCommand,
} from "./commands/CancelDataQualityRuleRecommendationRunCommand";
import {
  type CancelDataQualityRulesetEvaluationRunCommandInput,
  type CancelDataQualityRulesetEvaluationRunCommandOutput,
  CancelDataQualityRulesetEvaluationRunCommand,
} from "./commands/CancelDataQualityRulesetEvaluationRunCommand";
import {
  type CancelMLTaskRunCommandInput,
  type CancelMLTaskRunCommandOutput,
  CancelMLTaskRunCommand,
} from "./commands/CancelMLTaskRunCommand";
import {
  type CancelStatementCommandInput,
  type CancelStatementCommandOutput,
  CancelStatementCommand,
} from "./commands/CancelStatementCommand";
import {
  type CheckSchemaVersionValidityCommandInput,
  type CheckSchemaVersionValidityCommandOutput,
  CheckSchemaVersionValidityCommand,
} from "./commands/CheckSchemaVersionValidityCommand";
import {
  type CreateBlueprintCommandInput,
  type CreateBlueprintCommandOutput,
  CreateBlueprintCommand,
} from "./commands/CreateBlueprintCommand";
import {
  type CreateCatalogCommandInput,
  type CreateCatalogCommandOutput,
  CreateCatalogCommand,
} from "./commands/CreateCatalogCommand";
import {
  type CreateClassifierCommandInput,
  type CreateClassifierCommandOutput,
  CreateClassifierCommand,
} from "./commands/CreateClassifierCommand";
import {
  type CreateColumnStatisticsTaskSettingsCommandInput,
  type CreateColumnStatisticsTaskSettingsCommandOutput,
  CreateColumnStatisticsTaskSettingsCommand,
} from "./commands/CreateColumnStatisticsTaskSettingsCommand";
import {
  type CreateConnectionCommandInput,
  type CreateConnectionCommandOutput,
  CreateConnectionCommand,
} from "./commands/CreateConnectionCommand";
import {
  type CreateCrawlerCommandInput,
  type CreateCrawlerCommandOutput,
  CreateCrawlerCommand,
} from "./commands/CreateCrawlerCommand";
import {
  type CreateCustomEntityTypeCommandInput,
  type CreateCustomEntityTypeCommandOutput,
  CreateCustomEntityTypeCommand,
} from "./commands/CreateCustomEntityTypeCommand";
import {
  type CreateDatabaseCommandInput,
  type CreateDatabaseCommandOutput,
  CreateDatabaseCommand,
} from "./commands/CreateDatabaseCommand";
import {
  type CreateDataQualityRulesetCommandInput,
  type CreateDataQualityRulesetCommandOutput,
  CreateDataQualityRulesetCommand,
} from "./commands/CreateDataQualityRulesetCommand";
import {
  type CreateDevEndpointCommandInput,
  type CreateDevEndpointCommandOutput,
  CreateDevEndpointCommand,
} from "./commands/CreateDevEndpointCommand";
import {
  type CreateGlossaryCommandInput,
  type CreateGlossaryCommandOutput,
  CreateGlossaryCommand,
} from "./commands/CreateGlossaryCommand";
import {
  type CreateGlossaryTermCommandInput,
  type CreateGlossaryTermCommandOutput,
  CreateGlossaryTermCommand,
} from "./commands/CreateGlossaryTermCommand";
import {
  type CreateGlueIdentityCenterConfigurationCommandInput,
  type CreateGlueIdentityCenterConfigurationCommandOutput,
  CreateGlueIdentityCenterConfigurationCommand,
} from "./commands/CreateGlueIdentityCenterConfigurationCommand";
import {
  type CreateIntegrationCommandInput,
  type CreateIntegrationCommandOutput,
  CreateIntegrationCommand,
} from "./commands/CreateIntegrationCommand";
import {
  type CreateIntegrationResourcePropertyCommandInput,
  type CreateIntegrationResourcePropertyCommandOutput,
  CreateIntegrationResourcePropertyCommand,
} from "./commands/CreateIntegrationResourcePropertyCommand";
import {
  type CreateIntegrationTablePropertiesCommandInput,
  type CreateIntegrationTablePropertiesCommandOutput,
  CreateIntegrationTablePropertiesCommand,
} from "./commands/CreateIntegrationTablePropertiesCommand";
import { type CreateJobCommandInput, type CreateJobCommandOutput, CreateJobCommand } from "./commands/CreateJobCommand";
import {
  type CreateMLTransformCommandInput,
  type CreateMLTransformCommandOutput,
  CreateMLTransformCommand,
} from "./commands/CreateMLTransformCommand";
import {
  type CreatePartitionCommandInput,
  type CreatePartitionCommandOutput,
  CreatePartitionCommand,
} from "./commands/CreatePartitionCommand";
import {
  type CreatePartitionIndexCommandInput,
  type CreatePartitionIndexCommandOutput,
  CreatePartitionIndexCommand,
} from "./commands/CreatePartitionIndexCommand";
import {
  type CreateRegistryCommandInput,
  type CreateRegistryCommandOutput,
  CreateRegistryCommand,
} from "./commands/CreateRegistryCommand";
import {
  type CreateSchemaCommandInput,
  type CreateSchemaCommandOutput,
  CreateSchemaCommand,
} from "./commands/CreateSchemaCommand";
import {
  type CreateScriptCommandInput,
  type CreateScriptCommandOutput,
  CreateScriptCommand,
} from "./commands/CreateScriptCommand";
import {
  type CreateSecurityConfigurationCommandInput,
  type CreateSecurityConfigurationCommandOutput,
  CreateSecurityConfigurationCommand,
} from "./commands/CreateSecurityConfigurationCommand";
import {
  type CreateSessionCommandInput,
  type CreateSessionCommandOutput,
  CreateSessionCommand,
} from "./commands/CreateSessionCommand";
import {
  type CreateTableCommandInput,
  type CreateTableCommandOutput,
  CreateTableCommand,
} from "./commands/CreateTableCommand";
import {
  type CreateTableOptimizerCommandInput,
  type CreateTableOptimizerCommandOutput,
  CreateTableOptimizerCommand,
} from "./commands/CreateTableOptimizerCommand";
import {
  type CreateTriggerCommandInput,
  type CreateTriggerCommandOutput,
  CreateTriggerCommand,
} from "./commands/CreateTriggerCommand";
import {
  type CreateUsageProfileCommandInput,
  type CreateUsageProfileCommandOutput,
  CreateUsageProfileCommand,
} from "./commands/CreateUsageProfileCommand";
import {
  type CreateUserDefinedFunctionCommandInput,
  type CreateUserDefinedFunctionCommandOutput,
  CreateUserDefinedFunctionCommand,
} from "./commands/CreateUserDefinedFunctionCommand";
import {
  type CreateWorkflowCommandInput,
  type CreateWorkflowCommandOutput,
  CreateWorkflowCommand,
} from "./commands/CreateWorkflowCommand";
import {
  type DeleteAssetCommandInput,
  type DeleteAssetCommandOutput,
  DeleteAssetCommand,
} from "./commands/DeleteAssetCommand";
import {
  type DeleteAssetTypeCommandInput,
  type DeleteAssetTypeCommandOutput,
  DeleteAssetTypeCommand,
} from "./commands/DeleteAssetTypeCommand";
import {
  type DeleteAttachmentCommandInput,
  type DeleteAttachmentCommandOutput,
  DeleteAttachmentCommand,
} from "./commands/DeleteAttachmentCommand";
import {
  type DeleteBlueprintCommandInput,
  type DeleteBlueprintCommandOutput,
  DeleteBlueprintCommand,
} from "./commands/DeleteBlueprintCommand";
import {
  type DeleteCatalogCommandInput,
  type DeleteCatalogCommandOutput,
  DeleteCatalogCommand,
} from "./commands/DeleteCatalogCommand";
import {
  type DeleteClassifierCommandInput,
  type DeleteClassifierCommandOutput,
  DeleteClassifierCommand,
} from "./commands/DeleteClassifierCommand";
import {
  type DeleteColumnStatisticsForPartitionCommandInput,
  type DeleteColumnStatisticsForPartitionCommandOutput,
  DeleteColumnStatisticsForPartitionCommand,
} from "./commands/DeleteColumnStatisticsForPartitionCommand";
import {
  type DeleteColumnStatisticsForTableCommandInput,
  type DeleteColumnStatisticsForTableCommandOutput,
  DeleteColumnStatisticsForTableCommand,
} from "./commands/DeleteColumnStatisticsForTableCommand";
import {
  type DeleteColumnStatisticsTaskSettingsCommandInput,
  type DeleteColumnStatisticsTaskSettingsCommandOutput,
  DeleteColumnStatisticsTaskSettingsCommand,
} from "./commands/DeleteColumnStatisticsTaskSettingsCommand";
import {
  type DeleteConnectionCommandInput,
  type DeleteConnectionCommandOutput,
  DeleteConnectionCommand,
} from "./commands/DeleteConnectionCommand";
import {
  type DeleteConnectionTypeCommandInput,
  type DeleteConnectionTypeCommandOutput,
  DeleteConnectionTypeCommand,
} from "./commands/DeleteConnectionTypeCommand";
import {
  type DeleteCrawlerCommandInput,
  type DeleteCrawlerCommandOutput,
  DeleteCrawlerCommand,
} from "./commands/DeleteCrawlerCommand";
import {
  type DeleteCustomEntityTypeCommandInput,
  type DeleteCustomEntityTypeCommandOutput,
  DeleteCustomEntityTypeCommand,
} from "./commands/DeleteCustomEntityTypeCommand";
import {
  type DeleteDatabaseCommandInput,
  type DeleteDatabaseCommandOutput,
  DeleteDatabaseCommand,
} from "./commands/DeleteDatabaseCommand";
import {
  type DeleteDataQualityRulesetCommandInput,
  type DeleteDataQualityRulesetCommandOutput,
  DeleteDataQualityRulesetCommand,
} from "./commands/DeleteDataQualityRulesetCommand";
import {
  type DeleteDevEndpointCommandInput,
  type DeleteDevEndpointCommandOutput,
  DeleteDevEndpointCommand,
} from "./commands/DeleteDevEndpointCommand";
import {
  type DeleteFormTypeCommandInput,
  type DeleteFormTypeCommandOutput,
  DeleteFormTypeCommand,
} from "./commands/DeleteFormTypeCommand";
import {
  type DeleteGlossaryCommandInput,
  type DeleteGlossaryCommandOutput,
  DeleteGlossaryCommand,
} from "./commands/DeleteGlossaryCommand";
import {
  type DeleteGlossaryTermCommandInput,
  type DeleteGlossaryTermCommandOutput,
  DeleteGlossaryTermCommand,
} from "./commands/DeleteGlossaryTermCommand";
import {
  type DeleteGlueIdentityCenterConfigurationCommandInput,
  type DeleteGlueIdentityCenterConfigurationCommandOutput,
  DeleteGlueIdentityCenterConfigurationCommand,
} from "./commands/DeleteGlueIdentityCenterConfigurationCommand";
import {
  type DeleteIntegrationCommandInput,
  type DeleteIntegrationCommandOutput,
  DeleteIntegrationCommand,
} from "./commands/DeleteIntegrationCommand";
import {
  type DeleteIntegrationResourcePropertyCommandInput,
  type DeleteIntegrationResourcePropertyCommandOutput,
  DeleteIntegrationResourcePropertyCommand,
} from "./commands/DeleteIntegrationResourcePropertyCommand";
import {
  type DeleteIntegrationTablePropertiesCommandInput,
  type DeleteIntegrationTablePropertiesCommandOutput,
  DeleteIntegrationTablePropertiesCommand,
} from "./commands/DeleteIntegrationTablePropertiesCommand";
import { type DeleteJobCommandInput, type DeleteJobCommandOutput, DeleteJobCommand } from "./commands/DeleteJobCommand";
import {
  type DeleteMLTransformCommandInput,
  type DeleteMLTransformCommandOutput,
  DeleteMLTransformCommand,
} from "./commands/DeleteMLTransformCommand";
import {
  type DeletePartitionCommandInput,
  type DeletePartitionCommandOutput,
  DeletePartitionCommand,
} from "./commands/DeletePartitionCommand";
import {
  type DeletePartitionIndexCommandInput,
  type DeletePartitionIndexCommandOutput,
  DeletePartitionIndexCommand,
} from "./commands/DeletePartitionIndexCommand";
import {
  type DeleteRegistryCommandInput,
  type DeleteRegistryCommandOutput,
  DeleteRegistryCommand,
} from "./commands/DeleteRegistryCommand";
import {
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteResourcePolicyCommand,
} from "./commands/DeleteResourcePolicyCommand";
import {
  type DeleteSchemaCommandInput,
  type DeleteSchemaCommandOutput,
  DeleteSchemaCommand,
} from "./commands/DeleteSchemaCommand";
import {
  type DeleteSchemaVersionsCommandInput,
  type DeleteSchemaVersionsCommandOutput,
  DeleteSchemaVersionsCommand,
} from "./commands/DeleteSchemaVersionsCommand";
import {
  type DeleteSecurityConfigurationCommandInput,
  type DeleteSecurityConfigurationCommandOutput,
  DeleteSecurityConfigurationCommand,
} from "./commands/DeleteSecurityConfigurationCommand";
import {
  type DeleteSessionCommandInput,
  type DeleteSessionCommandOutput,
  DeleteSessionCommand,
} from "./commands/DeleteSessionCommand";
import {
  type DeleteTableCommandInput,
  type DeleteTableCommandOutput,
  DeleteTableCommand,
} from "./commands/DeleteTableCommand";
import {
  type DeleteTableOptimizerCommandInput,
  type DeleteTableOptimizerCommandOutput,
  DeleteTableOptimizerCommand,
} from "./commands/DeleteTableOptimizerCommand";
import {
  type DeleteTableVersionCommandInput,
  type DeleteTableVersionCommandOutput,
  DeleteTableVersionCommand,
} from "./commands/DeleteTableVersionCommand";
import {
  type DeleteTriggerCommandInput,
  type DeleteTriggerCommandOutput,
  DeleteTriggerCommand,
} from "./commands/DeleteTriggerCommand";
import {
  type DeleteUsageProfileCommandInput,
  type DeleteUsageProfileCommandOutput,
  DeleteUsageProfileCommand,
} from "./commands/DeleteUsageProfileCommand";
import {
  type DeleteUserDefinedFunctionCommandInput,
  type DeleteUserDefinedFunctionCommandOutput,
  DeleteUserDefinedFunctionCommand,
} from "./commands/DeleteUserDefinedFunctionCommand";
import {
  type DeleteWorkflowCommandInput,
  type DeleteWorkflowCommandOutput,
  DeleteWorkflowCommand,
} from "./commands/DeleteWorkflowCommand";
import {
  type DescribeConnectionTypeCommandInput,
  type DescribeConnectionTypeCommandOutput,
  DescribeConnectionTypeCommand,
} from "./commands/DescribeConnectionTypeCommand";
import {
  type DescribeEntityCommandInput,
  type DescribeEntityCommandOutput,
  DescribeEntityCommand,
} from "./commands/DescribeEntityCommand";
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
  type DisassociateGlossaryTermsCommandInput,
  type DisassociateGlossaryTermsCommandOutput,
  DisassociateGlossaryTermsCommand,
} from "./commands/DisassociateGlossaryTermsCommand";
import { type GetAssetCommandInput, type GetAssetCommandOutput, GetAssetCommand } from "./commands/GetAssetCommand";
import {
  type GetAssetTypeCommandInput,
  type GetAssetTypeCommandOutput,
  GetAssetTypeCommand,
} from "./commands/GetAssetTypeCommand";
import {
  type GetBlueprintCommandInput,
  type GetBlueprintCommandOutput,
  GetBlueprintCommand,
} from "./commands/GetBlueprintCommand";
import {
  type GetBlueprintRunCommandInput,
  type GetBlueprintRunCommandOutput,
  GetBlueprintRunCommand,
} from "./commands/GetBlueprintRunCommand";
import {
  type GetBlueprintRunsCommandInput,
  type GetBlueprintRunsCommandOutput,
  GetBlueprintRunsCommand,
} from "./commands/GetBlueprintRunsCommand";
import {
  type GetCatalogCommandInput,
  type GetCatalogCommandOutput,
  GetCatalogCommand,
} from "./commands/GetCatalogCommand";
import {
  type GetCatalogImportStatusCommandInput,
  type GetCatalogImportStatusCommandOutput,
  GetCatalogImportStatusCommand,
} from "./commands/GetCatalogImportStatusCommand";
import {
  type GetCatalogsCommandInput,
  type GetCatalogsCommandOutput,
  GetCatalogsCommand,
} from "./commands/GetCatalogsCommand";
import {
  type GetClassifierCommandInput,
  type GetClassifierCommandOutput,
  GetClassifierCommand,
} from "./commands/GetClassifierCommand";
import {
  type GetClassifiersCommandInput,
  type GetClassifiersCommandOutput,
  GetClassifiersCommand,
} from "./commands/GetClassifiersCommand";
import {
  type GetColumnStatisticsForPartitionCommandInput,
  type GetColumnStatisticsForPartitionCommandOutput,
  GetColumnStatisticsForPartitionCommand,
} from "./commands/GetColumnStatisticsForPartitionCommand";
import {
  type GetColumnStatisticsForTableCommandInput,
  type GetColumnStatisticsForTableCommandOutput,
  GetColumnStatisticsForTableCommand,
} from "./commands/GetColumnStatisticsForTableCommand";
import {
  type GetColumnStatisticsTaskRunCommandInput,
  type GetColumnStatisticsTaskRunCommandOutput,
  GetColumnStatisticsTaskRunCommand,
} from "./commands/GetColumnStatisticsTaskRunCommand";
import {
  type GetColumnStatisticsTaskRunsCommandInput,
  type GetColumnStatisticsTaskRunsCommandOutput,
  GetColumnStatisticsTaskRunsCommand,
} from "./commands/GetColumnStatisticsTaskRunsCommand";
import {
  type GetColumnStatisticsTaskSettingsCommandInput,
  type GetColumnStatisticsTaskSettingsCommandOutput,
  GetColumnStatisticsTaskSettingsCommand,
} from "./commands/GetColumnStatisticsTaskSettingsCommand";
import {
  type GetConnectionCommandInput,
  type GetConnectionCommandOutput,
  GetConnectionCommand,
} from "./commands/GetConnectionCommand";
import {
  type GetConnectionsCommandInput,
  type GetConnectionsCommandOutput,
  GetConnectionsCommand,
} from "./commands/GetConnectionsCommand";
import {
  type GetCrawlerCommandInput,
  type GetCrawlerCommandOutput,
  GetCrawlerCommand,
} from "./commands/GetCrawlerCommand";
import {
  type GetCrawlerMetricsCommandInput,
  type GetCrawlerMetricsCommandOutput,
  GetCrawlerMetricsCommand,
} from "./commands/GetCrawlerMetricsCommand";
import {
  type GetCrawlersCommandInput,
  type GetCrawlersCommandOutput,
  GetCrawlersCommand,
} from "./commands/GetCrawlersCommand";
import {
  type GetCustomEntityTypeCommandInput,
  type GetCustomEntityTypeCommandOutput,
  GetCustomEntityTypeCommand,
} from "./commands/GetCustomEntityTypeCommand";
import {
  type GetDashboardUrlCommandInput,
  type GetDashboardUrlCommandOutput,
  GetDashboardUrlCommand,
} from "./commands/GetDashboardUrlCommand";
import {
  type GetDatabaseCommandInput,
  type GetDatabaseCommandOutput,
  GetDatabaseCommand,
} from "./commands/GetDatabaseCommand";
import {
  type GetDatabasesCommandInput,
  type GetDatabasesCommandOutput,
  GetDatabasesCommand,
} from "./commands/GetDatabasesCommand";
import {
  type GetDataCatalogEncryptionSettingsCommandInput,
  type GetDataCatalogEncryptionSettingsCommandOutput,
  GetDataCatalogEncryptionSettingsCommand,
} from "./commands/GetDataCatalogEncryptionSettingsCommand";
import {
  type GetDataCatalogExportConfigurationCommandInput,
  type GetDataCatalogExportConfigurationCommandOutput,
  GetDataCatalogExportConfigurationCommand,
} from "./commands/GetDataCatalogExportConfigurationCommand";
import {
  type GetDataflowGraphCommandInput,
  type GetDataflowGraphCommandOutput,
  GetDataflowGraphCommand,
} from "./commands/GetDataflowGraphCommand";
import {
  type GetDataQualityModelCommandInput,
  type GetDataQualityModelCommandOutput,
  GetDataQualityModelCommand,
} from "./commands/GetDataQualityModelCommand";
import {
  type GetDataQualityModelResultCommandInput,
  type GetDataQualityModelResultCommandOutput,
  GetDataQualityModelResultCommand,
} from "./commands/GetDataQualityModelResultCommand";
import {
  type GetDataQualityResultCommandInput,
  type GetDataQualityResultCommandOutput,
  GetDataQualityResultCommand,
} from "./commands/GetDataQualityResultCommand";
import {
  type GetDataQualityRuleRecommendationRunCommandInput,
  type GetDataQualityRuleRecommendationRunCommandOutput,
  GetDataQualityRuleRecommendationRunCommand,
} from "./commands/GetDataQualityRuleRecommendationRunCommand";
import {
  type GetDataQualityRulesetCommandInput,
  type GetDataQualityRulesetCommandOutput,
  GetDataQualityRulesetCommand,
} from "./commands/GetDataQualityRulesetCommand";
import {
  type GetDataQualityRulesetEvaluationRunCommandInput,
  type GetDataQualityRulesetEvaluationRunCommandOutput,
  GetDataQualityRulesetEvaluationRunCommand,
} from "./commands/GetDataQualityRulesetEvaluationRunCommand";
import {
  type GetDevEndpointCommandInput,
  type GetDevEndpointCommandOutput,
  GetDevEndpointCommand,
} from "./commands/GetDevEndpointCommand";
import {
  type GetDevEndpointsCommandInput,
  type GetDevEndpointsCommandOutput,
  GetDevEndpointsCommand,
} from "./commands/GetDevEndpointsCommand";
import {
  type GetEntityRecordsCommandInput,
  type GetEntityRecordsCommandOutput,
  GetEntityRecordsCommand,
} from "./commands/GetEntityRecordsCommand";
import {
  type GetFormTypeCommandInput,
  type GetFormTypeCommandOutput,
  GetFormTypeCommand,
} from "./commands/GetFormTypeCommand";
import {
  type GetGlossaryCommandInput,
  type GetGlossaryCommandOutput,
  GetGlossaryCommand,
} from "./commands/GetGlossaryCommand";
import {
  type GetGlossaryTermCommandInput,
  type GetGlossaryTermCommandOutput,
  GetGlossaryTermCommand,
} from "./commands/GetGlossaryTermCommand";
import {
  type GetGlueIdentityCenterConfigurationCommandInput,
  type GetGlueIdentityCenterConfigurationCommandOutput,
  GetGlueIdentityCenterConfigurationCommand,
} from "./commands/GetGlueIdentityCenterConfigurationCommand";
import {
  type GetIntegrationResourcePropertyCommandInput,
  type GetIntegrationResourcePropertyCommandOutput,
  GetIntegrationResourcePropertyCommand,
} from "./commands/GetIntegrationResourcePropertyCommand";
import {
  type GetIntegrationTablePropertiesCommandInput,
  type GetIntegrationTablePropertiesCommandOutput,
  GetIntegrationTablePropertiesCommand,
} from "./commands/GetIntegrationTablePropertiesCommand";
import {
  type GetJobBookmarkCommandInput,
  type GetJobBookmarkCommandOutput,
  GetJobBookmarkCommand,
} from "./commands/GetJobBookmarkCommand";
import { type GetJobCommandInput, type GetJobCommandOutput, GetJobCommand } from "./commands/GetJobCommand";
import { type GetJobRunCommandInput, type GetJobRunCommandOutput, GetJobRunCommand } from "./commands/GetJobRunCommand";
import {
  type GetJobRunsCommandInput,
  type GetJobRunsCommandOutput,
  GetJobRunsCommand,
} from "./commands/GetJobRunsCommand";
import { type GetJobsCommandInput, type GetJobsCommandOutput, GetJobsCommand } from "./commands/GetJobsCommand";
import {
  type GetMappingCommandInput,
  type GetMappingCommandOutput,
  GetMappingCommand,
} from "./commands/GetMappingCommand";
import {
  type GetMaterializedViewRefreshTaskRunCommandInput,
  type GetMaterializedViewRefreshTaskRunCommandOutput,
  GetMaterializedViewRefreshTaskRunCommand,
} from "./commands/GetMaterializedViewRefreshTaskRunCommand";
import {
  type GetMLTaskRunCommandInput,
  type GetMLTaskRunCommandOutput,
  GetMLTaskRunCommand,
} from "./commands/GetMLTaskRunCommand";
import {
  type GetMLTaskRunsCommandInput,
  type GetMLTaskRunsCommandOutput,
  GetMLTaskRunsCommand,
} from "./commands/GetMLTaskRunsCommand";
import {
  type GetMLTransformCommandInput,
  type GetMLTransformCommandOutput,
  GetMLTransformCommand,
} from "./commands/GetMLTransformCommand";
import {
  type GetMLTransformsCommandInput,
  type GetMLTransformsCommandOutput,
  GetMLTransformsCommand,
} from "./commands/GetMLTransformsCommand";
import {
  type GetPartitionCommandInput,
  type GetPartitionCommandOutput,
  GetPartitionCommand,
} from "./commands/GetPartitionCommand";
import {
  type GetPartitionIndexesCommandInput,
  type GetPartitionIndexesCommandOutput,
  GetPartitionIndexesCommand,
} from "./commands/GetPartitionIndexesCommand";
import {
  type GetPartitionsCommandInput,
  type GetPartitionsCommandOutput,
  GetPartitionsCommand,
} from "./commands/GetPartitionsCommand";
import { type GetPlanCommandInput, type GetPlanCommandOutput, GetPlanCommand } from "./commands/GetPlanCommand";
import {
  type GetRegistryCommandInput,
  type GetRegistryCommandOutput,
  GetRegistryCommand,
} from "./commands/GetRegistryCommand";
import {
  type GetResourcePoliciesCommandInput,
  type GetResourcePoliciesCommandOutput,
  GetResourcePoliciesCommand,
} from "./commands/GetResourcePoliciesCommand";
import {
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetResourcePolicyCommand,
} from "./commands/GetResourcePolicyCommand";
import {
  type GetSchemaByDefinitionCommandInput,
  type GetSchemaByDefinitionCommandOutput,
  GetSchemaByDefinitionCommand,
} from "./commands/GetSchemaByDefinitionCommand";
import { type GetSchemaCommandInput, type GetSchemaCommandOutput, GetSchemaCommand } from "./commands/GetSchemaCommand";
import {
  type GetSchemaVersionCommandInput,
  type GetSchemaVersionCommandOutput,
  GetSchemaVersionCommand,
} from "./commands/GetSchemaVersionCommand";
import {
  type GetSchemaVersionsDiffCommandInput,
  type GetSchemaVersionsDiffCommandOutput,
  GetSchemaVersionsDiffCommand,
} from "./commands/GetSchemaVersionsDiffCommand";
import {
  type GetSecurityConfigurationCommandInput,
  type GetSecurityConfigurationCommandOutput,
  GetSecurityConfigurationCommand,
} from "./commands/GetSecurityConfigurationCommand";
import {
  type GetSecurityConfigurationsCommandInput,
  type GetSecurityConfigurationsCommandOutput,
  GetSecurityConfigurationsCommand,
} from "./commands/GetSecurityConfigurationsCommand";
import {
  type GetSessionCommandInput,
  type GetSessionCommandOutput,
  GetSessionCommand,
} from "./commands/GetSessionCommand";
import {
  type GetSessionEndpointCommandInput,
  type GetSessionEndpointCommandOutput,
  GetSessionEndpointCommand,
} from "./commands/GetSessionEndpointCommand";
import {
  type GetStatementCommandInput,
  type GetStatementCommandOutput,
  GetStatementCommand,
} from "./commands/GetStatementCommand";
import { type GetTableCommandInput, type GetTableCommandOutput, GetTableCommand } from "./commands/GetTableCommand";
import {
  type GetTableOptimizerCommandInput,
  type GetTableOptimizerCommandOutput,
  GetTableOptimizerCommand,
} from "./commands/GetTableOptimizerCommand";
import { type GetTablesCommandInput, type GetTablesCommandOutput, GetTablesCommand } from "./commands/GetTablesCommand";
import {
  type GetTableVersionCommandInput,
  type GetTableVersionCommandOutput,
  GetTableVersionCommand,
} from "./commands/GetTableVersionCommand";
import {
  type GetTableVersionsCommandInput,
  type GetTableVersionsCommandOutput,
  GetTableVersionsCommand,
} from "./commands/GetTableVersionsCommand";
import { type GetTagsCommandInput, type GetTagsCommandOutput, GetTagsCommand } from "./commands/GetTagsCommand";
import {
  type GetTriggerCommandInput,
  type GetTriggerCommandOutput,
  GetTriggerCommand,
} from "./commands/GetTriggerCommand";
import {
  type GetTriggersCommandInput,
  type GetTriggersCommandOutput,
  GetTriggersCommand,
} from "./commands/GetTriggersCommand";
import {
  type GetUnfilteredPartitionMetadataCommandInput,
  type GetUnfilteredPartitionMetadataCommandOutput,
  GetUnfilteredPartitionMetadataCommand,
} from "./commands/GetUnfilteredPartitionMetadataCommand";
import {
  type GetUnfilteredPartitionsMetadataCommandInput,
  type GetUnfilteredPartitionsMetadataCommandOutput,
  GetUnfilteredPartitionsMetadataCommand,
} from "./commands/GetUnfilteredPartitionsMetadataCommand";
import {
  type GetUnfilteredTableMetadataCommandInput,
  type GetUnfilteredTableMetadataCommandOutput,
  GetUnfilteredTableMetadataCommand,
} from "./commands/GetUnfilteredTableMetadataCommand";
import {
  type GetUsageProfileCommandInput,
  type GetUsageProfileCommandOutput,
  GetUsageProfileCommand,
} from "./commands/GetUsageProfileCommand";
import {
  type GetUserDefinedFunctionCommandInput,
  type GetUserDefinedFunctionCommandOutput,
  GetUserDefinedFunctionCommand,
} from "./commands/GetUserDefinedFunctionCommand";
import {
  type GetUserDefinedFunctionsCommandInput,
  type GetUserDefinedFunctionsCommandOutput,
  GetUserDefinedFunctionsCommand,
} from "./commands/GetUserDefinedFunctionsCommand";
import {
  type GetWorkflowCommandInput,
  type GetWorkflowCommandOutput,
  GetWorkflowCommand,
} from "./commands/GetWorkflowCommand";
import {
  type GetWorkflowRunCommandInput,
  type GetWorkflowRunCommandOutput,
  GetWorkflowRunCommand,
} from "./commands/GetWorkflowRunCommand";
import {
  type GetWorkflowRunPropertiesCommandInput,
  type GetWorkflowRunPropertiesCommandOutput,
  GetWorkflowRunPropertiesCommand,
} from "./commands/GetWorkflowRunPropertiesCommand";
import {
  type GetWorkflowRunsCommandInput,
  type GetWorkflowRunsCommandOutput,
  GetWorkflowRunsCommand,
} from "./commands/GetWorkflowRunsCommand";
import {
  type ImportCatalogToGlueCommandInput,
  type ImportCatalogToGlueCommandOutput,
  ImportCatalogToGlueCommand,
} from "./commands/ImportCatalogToGlueCommand";
import {
  type ListAssetTypesCommandInput,
  type ListAssetTypesCommandOutput,
  ListAssetTypesCommand,
} from "./commands/ListAssetTypesCommand";
import {
  type ListBlueprintsCommandInput,
  type ListBlueprintsCommandOutput,
  ListBlueprintsCommand,
} from "./commands/ListBlueprintsCommand";
import {
  type ListColumnStatisticsTaskRunsCommandInput,
  type ListColumnStatisticsTaskRunsCommandOutput,
  ListColumnStatisticsTaskRunsCommand,
} from "./commands/ListColumnStatisticsTaskRunsCommand";
import {
  type ListConnectionTypesCommandInput,
  type ListConnectionTypesCommandOutput,
  ListConnectionTypesCommand,
} from "./commands/ListConnectionTypesCommand";
import {
  type ListCrawlersCommandInput,
  type ListCrawlersCommandOutput,
  ListCrawlersCommand,
} from "./commands/ListCrawlersCommand";
import {
  type ListCrawlsCommandInput,
  type ListCrawlsCommandOutput,
  ListCrawlsCommand,
} from "./commands/ListCrawlsCommand";
import {
  type ListCustomEntityTypesCommandInput,
  type ListCustomEntityTypesCommandOutput,
  ListCustomEntityTypesCommand,
} from "./commands/ListCustomEntityTypesCommand";
import {
  type ListDataQualityResultsCommandInput,
  type ListDataQualityResultsCommandOutput,
  ListDataQualityResultsCommand,
} from "./commands/ListDataQualityResultsCommand";
import {
  type ListDataQualityRuleRecommendationRunsCommandInput,
  type ListDataQualityRuleRecommendationRunsCommandOutput,
  ListDataQualityRuleRecommendationRunsCommand,
} from "./commands/ListDataQualityRuleRecommendationRunsCommand";
import {
  type ListDataQualityRulesetEvaluationRunsCommandInput,
  type ListDataQualityRulesetEvaluationRunsCommandOutput,
  ListDataQualityRulesetEvaluationRunsCommand,
} from "./commands/ListDataQualityRulesetEvaluationRunsCommand";
import {
  type ListDataQualityRulesetsCommandInput,
  type ListDataQualityRulesetsCommandOutput,
  ListDataQualityRulesetsCommand,
} from "./commands/ListDataQualityRulesetsCommand";
import {
  type ListDataQualityStatisticAnnotationsCommandInput,
  type ListDataQualityStatisticAnnotationsCommandOutput,
  ListDataQualityStatisticAnnotationsCommand,
} from "./commands/ListDataQualityStatisticAnnotationsCommand";
import {
  type ListDataQualityStatisticsCommandInput,
  type ListDataQualityStatisticsCommandOutput,
  ListDataQualityStatisticsCommand,
} from "./commands/ListDataQualityStatisticsCommand";
import {
  type ListDevEndpointsCommandInput,
  type ListDevEndpointsCommandOutput,
  ListDevEndpointsCommand,
} from "./commands/ListDevEndpointsCommand";
import {
  type ListEntitiesCommandInput,
  type ListEntitiesCommandOutput,
  ListEntitiesCommand,
} from "./commands/ListEntitiesCommand";
import {
  type ListFormTypesCommandInput,
  type ListFormTypesCommandOutput,
  ListFormTypesCommand,
} from "./commands/ListFormTypesCommand";
import {
  type ListGlossariesCommandInput,
  type ListGlossariesCommandOutput,
  ListGlossariesCommand,
} from "./commands/ListGlossariesCommand";
import {
  type ListGlossaryTermsCommandInput,
  type ListGlossaryTermsCommandOutput,
  ListGlossaryTermsCommand,
} from "./commands/ListGlossaryTermsCommand";
import {
  type ListIntegrationResourcePropertiesCommandInput,
  type ListIntegrationResourcePropertiesCommandOutput,
  ListIntegrationResourcePropertiesCommand,
} from "./commands/ListIntegrationResourcePropertiesCommand";
import {
  type ListIntegrationTablePropertiesCommandInput,
  type ListIntegrationTablePropertiesCommandOutput,
  ListIntegrationTablePropertiesCommand,
} from "./commands/ListIntegrationTablePropertiesCommand";
import {
  type ListIterableFormsCommandInput,
  type ListIterableFormsCommandOutput,
  ListIterableFormsCommand,
} from "./commands/ListIterableFormsCommand";
import { type ListJobsCommandInput, type ListJobsCommandOutput, ListJobsCommand } from "./commands/ListJobsCommand";
import {
  type ListMaterializedViewRefreshTaskRunsCommandInput,
  type ListMaterializedViewRefreshTaskRunsCommandOutput,
  ListMaterializedViewRefreshTaskRunsCommand,
} from "./commands/ListMaterializedViewRefreshTaskRunsCommand";
import {
  type ListMLTransformsCommandInput,
  type ListMLTransformsCommandOutput,
  ListMLTransformsCommand,
} from "./commands/ListMLTransformsCommand";
import {
  type ListRegistriesCommandInput,
  type ListRegistriesCommandOutput,
  ListRegistriesCommand,
} from "./commands/ListRegistriesCommand";
import {
  type ListSchemasCommandInput,
  type ListSchemasCommandOutput,
  ListSchemasCommand,
} from "./commands/ListSchemasCommand";
import {
  type ListSchemaVersionsCommandInput,
  type ListSchemaVersionsCommandOutput,
  ListSchemaVersionsCommand,
} from "./commands/ListSchemaVersionsCommand";
import {
  type ListSessionsCommandInput,
  type ListSessionsCommandOutput,
  ListSessionsCommand,
} from "./commands/ListSessionsCommand";
import {
  type ListStatementsCommandInput,
  type ListStatementsCommandOutput,
  ListStatementsCommand,
} from "./commands/ListStatementsCommand";
import {
  type ListTableOptimizerRunsCommandInput,
  type ListTableOptimizerRunsCommandOutput,
  ListTableOptimizerRunsCommand,
} from "./commands/ListTableOptimizerRunsCommand";
import {
  type ListTriggersCommandInput,
  type ListTriggersCommandOutput,
  ListTriggersCommand,
} from "./commands/ListTriggersCommand";
import {
  type ListUsageProfilesCommandInput,
  type ListUsageProfilesCommandOutput,
  ListUsageProfilesCommand,
} from "./commands/ListUsageProfilesCommand";
import {
  type ListWorkflowsCommandInput,
  type ListWorkflowsCommandOutput,
  ListWorkflowsCommand,
} from "./commands/ListWorkflowsCommand";
import {
  type ModifyIntegrationCommandInput,
  type ModifyIntegrationCommandOutput,
  ModifyIntegrationCommand,
} from "./commands/ModifyIntegrationCommand";
import { type PutAssetCommandInput, type PutAssetCommandOutput, PutAssetCommand } from "./commands/PutAssetCommand";
import {
  type PutAssetTypeCommandInput,
  type PutAssetTypeCommandOutput,
  PutAssetTypeCommand,
} from "./commands/PutAssetTypeCommand";
import {
  type PutAttachmentCommandInput,
  type PutAttachmentCommandOutput,
  PutAttachmentCommand,
} from "./commands/PutAttachmentCommand";
import {
  type PutDataCatalogEncryptionSettingsCommandInput,
  type PutDataCatalogEncryptionSettingsCommandOutput,
  PutDataCatalogEncryptionSettingsCommand,
} from "./commands/PutDataCatalogEncryptionSettingsCommand";
import {
  type PutDataCatalogExportConfigurationCommandInput,
  type PutDataCatalogExportConfigurationCommandOutput,
  PutDataCatalogExportConfigurationCommand,
} from "./commands/PutDataCatalogExportConfigurationCommand";
import {
  type PutDataQualityProfileAnnotationCommandInput,
  type PutDataQualityProfileAnnotationCommandOutput,
  PutDataQualityProfileAnnotationCommand,
} from "./commands/PutDataQualityProfileAnnotationCommand";
import {
  type PutFormTypeCommandInput,
  type PutFormTypeCommandOutput,
  PutFormTypeCommand,
} from "./commands/PutFormTypeCommand";
import {
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  PutResourcePolicyCommand,
} from "./commands/PutResourcePolicyCommand";
import {
  type PutSchemaVersionMetadataCommandInput,
  type PutSchemaVersionMetadataCommandOutput,
  PutSchemaVersionMetadataCommand,
} from "./commands/PutSchemaVersionMetadataCommand";
import {
  type PutWorkflowRunPropertiesCommandInput,
  type PutWorkflowRunPropertiesCommandOutput,
  PutWorkflowRunPropertiesCommand,
} from "./commands/PutWorkflowRunPropertiesCommand";
import {
  type QuerySchemaVersionMetadataCommandInput,
  type QuerySchemaVersionMetadataCommandOutput,
  QuerySchemaVersionMetadataCommand,
} from "./commands/QuerySchemaVersionMetadataCommand";
import {
  type RegisterConnectionTypeCommandInput,
  type RegisterConnectionTypeCommandOutput,
  RegisterConnectionTypeCommand,
} from "./commands/RegisterConnectionTypeCommand";
import {
  type RegisterSchemaVersionCommandInput,
  type RegisterSchemaVersionCommandOutput,
  RegisterSchemaVersionCommand,
} from "./commands/RegisterSchemaVersionCommand";
import {
  type RemoveSchemaVersionMetadataCommandInput,
  type RemoveSchemaVersionMetadataCommandOutput,
  RemoveSchemaVersionMetadataCommand,
} from "./commands/RemoveSchemaVersionMetadataCommand";
import {
  type ResetJobBookmarkCommandInput,
  type ResetJobBookmarkCommandOutput,
  ResetJobBookmarkCommand,
} from "./commands/ResetJobBookmarkCommand";
import {
  type ResumeWorkflowRunCommandInput,
  type ResumeWorkflowRunCommandOutput,
  ResumeWorkflowRunCommand,
} from "./commands/ResumeWorkflowRunCommand";
import {
  type RunStatementCommandInput,
  type RunStatementCommandOutput,
  RunStatementCommand,
} from "./commands/RunStatementCommand";
import {
  type SearchAssetsCommandInput,
  type SearchAssetsCommandOutput,
  SearchAssetsCommand,
} from "./commands/SearchAssetsCommand";
import {
  type SearchTablesCommandInput,
  type SearchTablesCommandOutput,
  SearchTablesCommand,
} from "./commands/SearchTablesCommand";
import {
  type StartBlueprintRunCommandInput,
  type StartBlueprintRunCommandOutput,
  StartBlueprintRunCommand,
} from "./commands/StartBlueprintRunCommand";
import {
  type StartColumnStatisticsTaskRunCommandInput,
  type StartColumnStatisticsTaskRunCommandOutput,
  StartColumnStatisticsTaskRunCommand,
} from "./commands/StartColumnStatisticsTaskRunCommand";
import {
  type StartColumnStatisticsTaskRunScheduleCommandInput,
  type StartColumnStatisticsTaskRunScheduleCommandOutput,
  StartColumnStatisticsTaskRunScheduleCommand,
} from "./commands/StartColumnStatisticsTaskRunScheduleCommand";
import {
  type StartCrawlerCommandInput,
  type StartCrawlerCommandOutput,
  StartCrawlerCommand,
} from "./commands/StartCrawlerCommand";
import {
  type StartCrawlerScheduleCommandInput,
  type StartCrawlerScheduleCommandOutput,
  StartCrawlerScheduleCommand,
} from "./commands/StartCrawlerScheduleCommand";
import {
  type StartDataQualityRuleRecommendationRunCommandInput,
  type StartDataQualityRuleRecommendationRunCommandOutput,
  StartDataQualityRuleRecommendationRunCommand,
} from "./commands/StartDataQualityRuleRecommendationRunCommand";
import {
  type StartDataQualityRulesetEvaluationRunCommandInput,
  type StartDataQualityRulesetEvaluationRunCommandOutput,
  StartDataQualityRulesetEvaluationRunCommand,
} from "./commands/StartDataQualityRulesetEvaluationRunCommand";
import {
  type StartExportLabelsTaskRunCommandInput,
  type StartExportLabelsTaskRunCommandOutput,
  StartExportLabelsTaskRunCommand,
} from "./commands/StartExportLabelsTaskRunCommand";
import {
  type StartImportLabelsTaskRunCommandInput,
  type StartImportLabelsTaskRunCommandOutput,
  StartImportLabelsTaskRunCommand,
} from "./commands/StartImportLabelsTaskRunCommand";
import {
  type StartJobRunCommandInput,
  type StartJobRunCommandOutput,
  StartJobRunCommand,
} from "./commands/StartJobRunCommand";
import {
  type StartMaterializedViewRefreshTaskRunCommandInput,
  type StartMaterializedViewRefreshTaskRunCommandOutput,
  StartMaterializedViewRefreshTaskRunCommand,
} from "./commands/StartMaterializedViewRefreshTaskRunCommand";
import {
  type StartMLEvaluationTaskRunCommandInput,
  type StartMLEvaluationTaskRunCommandOutput,
  StartMLEvaluationTaskRunCommand,
} from "./commands/StartMLEvaluationTaskRunCommand";
import {
  type StartMLLabelingSetGenerationTaskRunCommandInput,
  type StartMLLabelingSetGenerationTaskRunCommandOutput,
  StartMLLabelingSetGenerationTaskRunCommand,
} from "./commands/StartMLLabelingSetGenerationTaskRunCommand";
import {
  type StartTriggerCommandInput,
  type StartTriggerCommandOutput,
  StartTriggerCommand,
} from "./commands/StartTriggerCommand";
import {
  type StartWorkflowRunCommandInput,
  type StartWorkflowRunCommandOutput,
  StartWorkflowRunCommand,
} from "./commands/StartWorkflowRunCommand";
import {
  type StopColumnStatisticsTaskRunCommandInput,
  type StopColumnStatisticsTaskRunCommandOutput,
  StopColumnStatisticsTaskRunCommand,
} from "./commands/StopColumnStatisticsTaskRunCommand";
import {
  type StopColumnStatisticsTaskRunScheduleCommandInput,
  type StopColumnStatisticsTaskRunScheduleCommandOutput,
  StopColumnStatisticsTaskRunScheduleCommand,
} from "./commands/StopColumnStatisticsTaskRunScheduleCommand";
import {
  type StopCrawlerCommandInput,
  type StopCrawlerCommandOutput,
  StopCrawlerCommand,
} from "./commands/StopCrawlerCommand";
import {
  type StopCrawlerScheduleCommandInput,
  type StopCrawlerScheduleCommandOutput,
  StopCrawlerScheduleCommand,
} from "./commands/StopCrawlerScheduleCommand";
import {
  type StopMaterializedViewRefreshTaskRunCommandInput,
  type StopMaterializedViewRefreshTaskRunCommandOutput,
  StopMaterializedViewRefreshTaskRunCommand,
} from "./commands/StopMaterializedViewRefreshTaskRunCommand";
import {
  type StopSessionCommandInput,
  type StopSessionCommandOutput,
  StopSessionCommand,
} from "./commands/StopSessionCommand";
import {
  type StopTriggerCommandInput,
  type StopTriggerCommandOutput,
  StopTriggerCommand,
} from "./commands/StopTriggerCommand";
import {
  type StopWorkflowRunCommandInput,
  type StopWorkflowRunCommandOutput,
  StopWorkflowRunCommand,
} from "./commands/StopWorkflowRunCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type TestConnectionCommandInput,
  type TestConnectionCommandOutput,
  TestConnectionCommand,
} from "./commands/TestConnectionCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateAssetCommandInput,
  type UpdateAssetCommandOutput,
  UpdateAssetCommand,
} from "./commands/UpdateAssetCommand";
import {
  type UpdateBlueprintCommandInput,
  type UpdateBlueprintCommandOutput,
  UpdateBlueprintCommand,
} from "./commands/UpdateBlueprintCommand";
import {
  type UpdateCatalogCommandInput,
  type UpdateCatalogCommandOutput,
  UpdateCatalogCommand,
} from "./commands/UpdateCatalogCommand";
import {
  type UpdateClassifierCommandInput,
  type UpdateClassifierCommandOutput,
  UpdateClassifierCommand,
} from "./commands/UpdateClassifierCommand";
import {
  type UpdateColumnStatisticsForPartitionCommandInput,
  type UpdateColumnStatisticsForPartitionCommandOutput,
  UpdateColumnStatisticsForPartitionCommand,
} from "./commands/UpdateColumnStatisticsForPartitionCommand";
import {
  type UpdateColumnStatisticsForTableCommandInput,
  type UpdateColumnStatisticsForTableCommandOutput,
  UpdateColumnStatisticsForTableCommand,
} from "./commands/UpdateColumnStatisticsForTableCommand";
import {
  type UpdateColumnStatisticsTaskSettingsCommandInput,
  type UpdateColumnStatisticsTaskSettingsCommandOutput,
  UpdateColumnStatisticsTaskSettingsCommand,
} from "./commands/UpdateColumnStatisticsTaskSettingsCommand";
import {
  type UpdateConnectionCommandInput,
  type UpdateConnectionCommandOutput,
  UpdateConnectionCommand,
} from "./commands/UpdateConnectionCommand";
import {
  type UpdateCrawlerCommandInput,
  type UpdateCrawlerCommandOutput,
  UpdateCrawlerCommand,
} from "./commands/UpdateCrawlerCommand";
import {
  type UpdateCrawlerScheduleCommandInput,
  type UpdateCrawlerScheduleCommandOutput,
  UpdateCrawlerScheduleCommand,
} from "./commands/UpdateCrawlerScheduleCommand";
import {
  type UpdateDatabaseCommandInput,
  type UpdateDatabaseCommandOutput,
  UpdateDatabaseCommand,
} from "./commands/UpdateDatabaseCommand";
import {
  type UpdateDataQualityRulesetCommandInput,
  type UpdateDataQualityRulesetCommandOutput,
  UpdateDataQualityRulesetCommand,
} from "./commands/UpdateDataQualityRulesetCommand";
import {
  type UpdateDevEndpointCommandInput,
  type UpdateDevEndpointCommandOutput,
  UpdateDevEndpointCommand,
} from "./commands/UpdateDevEndpointCommand";
import {
  type UpdateGlossaryCommandInput,
  type UpdateGlossaryCommandOutput,
  UpdateGlossaryCommand,
} from "./commands/UpdateGlossaryCommand";
import {
  type UpdateGlossaryTermCommandInput,
  type UpdateGlossaryTermCommandOutput,
  UpdateGlossaryTermCommand,
} from "./commands/UpdateGlossaryTermCommand";
import {
  type UpdateGlueIdentityCenterConfigurationCommandInput,
  type UpdateGlueIdentityCenterConfigurationCommandOutput,
  UpdateGlueIdentityCenterConfigurationCommand,
} from "./commands/UpdateGlueIdentityCenterConfigurationCommand";
import {
  type UpdateIntegrationResourcePropertyCommandInput,
  type UpdateIntegrationResourcePropertyCommandOutput,
  UpdateIntegrationResourcePropertyCommand,
} from "./commands/UpdateIntegrationResourcePropertyCommand";
import {
  type UpdateIntegrationTablePropertiesCommandInput,
  type UpdateIntegrationTablePropertiesCommandOutput,
  UpdateIntegrationTablePropertiesCommand,
} from "./commands/UpdateIntegrationTablePropertiesCommand";
import { type UpdateJobCommandInput, type UpdateJobCommandOutput, UpdateJobCommand } from "./commands/UpdateJobCommand";
import {
  type UpdateJobFromSourceControlCommandInput,
  type UpdateJobFromSourceControlCommandOutput,
  UpdateJobFromSourceControlCommand,
} from "./commands/UpdateJobFromSourceControlCommand";
import {
  type UpdateMLTransformCommandInput,
  type UpdateMLTransformCommandOutput,
  UpdateMLTransformCommand,
} from "./commands/UpdateMLTransformCommand";
import {
  type UpdatePartitionCommandInput,
  type UpdatePartitionCommandOutput,
  UpdatePartitionCommand,
} from "./commands/UpdatePartitionCommand";
import {
  type UpdateRegistryCommandInput,
  type UpdateRegistryCommandOutput,
  UpdateRegistryCommand,
} from "./commands/UpdateRegistryCommand";
import {
  type UpdateSchemaCommandInput,
  type UpdateSchemaCommandOutput,
  UpdateSchemaCommand,
} from "./commands/UpdateSchemaCommand";
import {
  type UpdateSourceControlFromJobCommandInput,
  type UpdateSourceControlFromJobCommandOutput,
  UpdateSourceControlFromJobCommand,
} from "./commands/UpdateSourceControlFromJobCommand";
import {
  type UpdateTableCommandInput,
  type UpdateTableCommandOutput,
  UpdateTableCommand,
} from "./commands/UpdateTableCommand";
import {
  type UpdateTableOptimizerCommandInput,
  type UpdateTableOptimizerCommandOutput,
  UpdateTableOptimizerCommand,
} from "./commands/UpdateTableOptimizerCommand";
import {
  type UpdateTriggerCommandInput,
  type UpdateTriggerCommandOutput,
  UpdateTriggerCommand,
} from "./commands/UpdateTriggerCommand";
import {
  type UpdateUsageProfileCommandInput,
  type UpdateUsageProfileCommandOutput,
  UpdateUsageProfileCommand,
} from "./commands/UpdateUsageProfileCommand";
import {
  type UpdateUserDefinedFunctionCommandInput,
  type UpdateUserDefinedFunctionCommandOutput,
  UpdateUserDefinedFunctionCommand,
} from "./commands/UpdateUserDefinedFunctionCommand";
import {
  type UpdateWorkflowCommandInput,
  type UpdateWorkflowCommandOutput,
  UpdateWorkflowCommand,
} from "./commands/UpdateWorkflowCommand";
import { GlueClient } from "./GlueClient";
import { paginateDescribeEntity } from "./pagination/DescribeEntityPaginator";
import { paginateGetBlueprintRuns } from "./pagination/GetBlueprintRunsPaginator";
import { paginateGetClassifiers } from "./pagination/GetClassifiersPaginator";
import { paginateGetColumnStatisticsTaskRuns } from "./pagination/GetColumnStatisticsTaskRunsPaginator";
import { paginateGetConnections } from "./pagination/GetConnectionsPaginator";
import { paginateGetCrawlerMetrics } from "./pagination/GetCrawlerMetricsPaginator";
import { paginateGetCrawlers } from "./pagination/GetCrawlersPaginator";
import { paginateGetDatabases } from "./pagination/GetDatabasesPaginator";
import { paginateGetDevEndpoints } from "./pagination/GetDevEndpointsPaginator";
import { paginateGetJobRuns } from "./pagination/GetJobRunsPaginator";
import { paginateGetJobs } from "./pagination/GetJobsPaginator";
import { paginateGetMLTaskRuns } from "./pagination/GetMLTaskRunsPaginator";
import { paginateGetMLTransforms } from "./pagination/GetMLTransformsPaginator";
import { paginateGetPartitionIndexes } from "./pagination/GetPartitionIndexesPaginator";
import { paginateGetPartitions } from "./pagination/GetPartitionsPaginator";
import { paginateGetResourcePolicies } from "./pagination/GetResourcePoliciesPaginator";
import { paginateGetSecurityConfigurations } from "./pagination/GetSecurityConfigurationsPaginator";
import { paginateGetTables } from "./pagination/GetTablesPaginator";
import { paginateGetTableVersions } from "./pagination/GetTableVersionsPaginator";
import { paginateGetTriggers } from "./pagination/GetTriggersPaginator";
import { paginateGetUnfilteredPartitionsMetadata } from "./pagination/GetUnfilteredPartitionsMetadataPaginator";
import { paginateGetUserDefinedFunctions } from "./pagination/GetUserDefinedFunctionsPaginator";
import { paginateGetWorkflowRuns } from "./pagination/GetWorkflowRunsPaginator";
import { paginateListAssetTypes } from "./pagination/ListAssetTypesPaginator";
import { paginateListBlueprints } from "./pagination/ListBlueprintsPaginator";
import { paginateListColumnStatisticsTaskRuns } from "./pagination/ListColumnStatisticsTaskRunsPaginator";
import { paginateListConnectionTypes } from "./pagination/ListConnectionTypesPaginator";
import { paginateListCrawlers } from "./pagination/ListCrawlersPaginator";
import { paginateListCustomEntityTypes } from "./pagination/ListCustomEntityTypesPaginator";
import { paginateListDataQualityResults } from "./pagination/ListDataQualityResultsPaginator";
import {
  paginateListDataQualityRuleRecommendationRuns,
} from "./pagination/ListDataQualityRuleRecommendationRunsPaginator";
import {
  paginateListDataQualityRulesetEvaluationRuns,
} from "./pagination/ListDataQualityRulesetEvaluationRunsPaginator";
import { paginateListDataQualityRulesets } from "./pagination/ListDataQualityRulesetsPaginator";
import { paginateListDevEndpoints } from "./pagination/ListDevEndpointsPaginator";
import { paginateListEntities } from "./pagination/ListEntitiesPaginator";
import { paginateListFormTypes } from "./pagination/ListFormTypesPaginator";
import { paginateListGlossaries } from "./pagination/ListGlossariesPaginator";
import { paginateListGlossaryTerms } from "./pagination/ListGlossaryTermsPaginator";
import { paginateListIterableForms } from "./pagination/ListIterableFormsPaginator";
import { paginateListJobs } from "./pagination/ListJobsPaginator";
import { paginateListMaterializedViewRefreshTaskRuns } from "./pagination/ListMaterializedViewRefreshTaskRunsPaginator";
import { paginateListMLTransforms } from "./pagination/ListMLTransformsPaginator";
import { paginateListRegistries } from "./pagination/ListRegistriesPaginator";
import { paginateListSchemas } from "./pagination/ListSchemasPaginator";
import { paginateListSchemaVersions } from "./pagination/ListSchemaVersionsPaginator";
import { paginateListSessions } from "./pagination/ListSessionsPaginator";
import { paginateListTableOptimizerRuns } from "./pagination/ListTableOptimizerRunsPaginator";
import { paginateListTriggers } from "./pagination/ListTriggersPaginator";
import { paginateListUsageProfiles } from "./pagination/ListUsageProfilesPaginator";
import { paginateListWorkflows } from "./pagination/ListWorkflowsPaginator";
import { paginateSearchAssets } from "./pagination/SearchAssetsPaginator";
import { paginateSearchTables } from "./pagination/SearchTablesPaginator";

const commands = {
  AssociateGlossaryTermsCommand,
  BatchCreatePartitionCommand,
  BatchDeleteConnectionCommand,
  BatchDeletePartitionCommand,
  BatchDeleteTableCommand,
  BatchDeleteTableVersionCommand,
  BatchGetBlueprintsCommand,
  BatchGetCrawlersCommand,
  BatchGetCustomEntityTypesCommand,
  BatchGetDataQualityResultCommand,
  BatchGetDataQualityRulesetEvaluationRunCommand,
  BatchGetDevEndpointsCommand,
  BatchGetIterableFormsCommand,
  BatchGetJobsCommand,
  BatchGetPartitionCommand,
  BatchGetTableOptimizerCommand,
  BatchGetTriggersCommand,
  BatchGetWorkflowsCommand,
  BatchPutDataQualityStatisticAnnotationCommand,
  BatchStopJobRunCommand,
  BatchUpdatePartitionCommand,
  CancelDataQualityRuleRecommendationRunCommand,
  CancelDataQualityRulesetEvaluationRunCommand,
  CancelMLTaskRunCommand,
  CancelStatementCommand,
  CheckSchemaVersionValidityCommand,
  CreateBlueprintCommand,
  CreateCatalogCommand,
  CreateClassifierCommand,
  CreateColumnStatisticsTaskSettingsCommand,
  CreateConnectionCommand,
  CreateCrawlerCommand,
  CreateCustomEntityTypeCommand,
  CreateDatabaseCommand,
  CreateDataQualityRulesetCommand,
  CreateDevEndpointCommand,
  CreateGlossaryCommand,
  CreateGlossaryTermCommand,
  CreateGlueIdentityCenterConfigurationCommand,
  CreateIntegrationCommand,
  CreateIntegrationResourcePropertyCommand,
  CreateIntegrationTablePropertiesCommand,
  CreateJobCommand,
  CreateMLTransformCommand,
  CreatePartitionCommand,
  CreatePartitionIndexCommand,
  CreateRegistryCommand,
  CreateSchemaCommand,
  CreateScriptCommand,
  CreateSecurityConfigurationCommand,
  CreateSessionCommand,
  CreateTableCommand,
  CreateTableOptimizerCommand,
  CreateTriggerCommand,
  CreateUsageProfileCommand,
  CreateUserDefinedFunctionCommand,
  CreateWorkflowCommand,
  DeleteAssetCommand,
  DeleteAssetTypeCommand,
  DeleteAttachmentCommand,
  DeleteBlueprintCommand,
  DeleteCatalogCommand,
  DeleteClassifierCommand,
  DeleteColumnStatisticsForPartitionCommand,
  DeleteColumnStatisticsForTableCommand,
  DeleteColumnStatisticsTaskSettingsCommand,
  DeleteConnectionCommand,
  DeleteConnectionTypeCommand,
  DeleteCrawlerCommand,
  DeleteCustomEntityTypeCommand,
  DeleteDatabaseCommand,
  DeleteDataQualityRulesetCommand,
  DeleteDevEndpointCommand,
  DeleteFormTypeCommand,
  DeleteGlossaryCommand,
  DeleteGlossaryTermCommand,
  DeleteGlueIdentityCenterConfigurationCommand,
  DeleteIntegrationCommand,
  DeleteIntegrationResourcePropertyCommand,
  DeleteIntegrationTablePropertiesCommand,
  DeleteJobCommand,
  DeleteMLTransformCommand,
  DeletePartitionCommand,
  DeletePartitionIndexCommand,
  DeleteRegistryCommand,
  DeleteResourcePolicyCommand,
  DeleteSchemaCommand,
  DeleteSchemaVersionsCommand,
  DeleteSecurityConfigurationCommand,
  DeleteSessionCommand,
  DeleteTableCommand,
  DeleteTableOptimizerCommand,
  DeleteTableVersionCommand,
  DeleteTriggerCommand,
  DeleteUsageProfileCommand,
  DeleteUserDefinedFunctionCommand,
  DeleteWorkflowCommand,
  DescribeConnectionTypeCommand,
  DescribeEntityCommand,
  DescribeInboundIntegrationsCommand,
  DescribeIntegrationsCommand,
  DisassociateGlossaryTermsCommand,
  GetAssetCommand,
  GetAssetTypeCommand,
  GetBlueprintCommand,
  GetBlueprintRunCommand,
  GetBlueprintRunsCommand,
  GetCatalogCommand,
  GetCatalogImportStatusCommand,
  GetCatalogsCommand,
  GetClassifierCommand,
  GetClassifiersCommand,
  GetColumnStatisticsForPartitionCommand,
  GetColumnStatisticsForTableCommand,
  GetColumnStatisticsTaskRunCommand,
  GetColumnStatisticsTaskRunsCommand,
  GetColumnStatisticsTaskSettingsCommand,
  GetConnectionCommand,
  GetConnectionsCommand,
  GetCrawlerCommand,
  GetCrawlerMetricsCommand,
  GetCrawlersCommand,
  GetCustomEntityTypeCommand,
  GetDashboardUrlCommand,
  GetDatabaseCommand,
  GetDatabasesCommand,
  GetDataCatalogEncryptionSettingsCommand,
  GetDataCatalogExportConfigurationCommand,
  GetDataflowGraphCommand,
  GetDataQualityModelCommand,
  GetDataQualityModelResultCommand,
  GetDataQualityResultCommand,
  GetDataQualityRuleRecommendationRunCommand,
  GetDataQualityRulesetCommand,
  GetDataQualityRulesetEvaluationRunCommand,
  GetDevEndpointCommand,
  GetDevEndpointsCommand,
  GetEntityRecordsCommand,
  GetFormTypeCommand,
  GetGlossaryCommand,
  GetGlossaryTermCommand,
  GetGlueIdentityCenterConfigurationCommand,
  GetIntegrationResourcePropertyCommand,
  GetIntegrationTablePropertiesCommand,
  GetJobCommand,
  GetJobBookmarkCommand,
  GetJobRunCommand,
  GetJobRunsCommand,
  GetJobsCommand,
  GetMappingCommand,
  GetMaterializedViewRefreshTaskRunCommand,
  GetMLTaskRunCommand,
  GetMLTaskRunsCommand,
  GetMLTransformCommand,
  GetMLTransformsCommand,
  GetPartitionCommand,
  GetPartitionIndexesCommand,
  GetPartitionsCommand,
  GetPlanCommand,
  GetRegistryCommand,
  GetResourcePoliciesCommand,
  GetResourcePolicyCommand,
  GetSchemaCommand,
  GetSchemaByDefinitionCommand,
  GetSchemaVersionCommand,
  GetSchemaVersionsDiffCommand,
  GetSecurityConfigurationCommand,
  GetSecurityConfigurationsCommand,
  GetSessionCommand,
  GetSessionEndpointCommand,
  GetStatementCommand,
  GetTableCommand,
  GetTableOptimizerCommand,
  GetTablesCommand,
  GetTableVersionCommand,
  GetTableVersionsCommand,
  GetTagsCommand,
  GetTriggerCommand,
  GetTriggersCommand,
  GetUnfilteredPartitionMetadataCommand,
  GetUnfilteredPartitionsMetadataCommand,
  GetUnfilteredTableMetadataCommand,
  GetUsageProfileCommand,
  GetUserDefinedFunctionCommand,
  GetUserDefinedFunctionsCommand,
  GetWorkflowCommand,
  GetWorkflowRunCommand,
  GetWorkflowRunPropertiesCommand,
  GetWorkflowRunsCommand,
  ImportCatalogToGlueCommand,
  ListAssetTypesCommand,
  ListBlueprintsCommand,
  ListColumnStatisticsTaskRunsCommand,
  ListConnectionTypesCommand,
  ListCrawlersCommand,
  ListCrawlsCommand,
  ListCustomEntityTypesCommand,
  ListDataQualityResultsCommand,
  ListDataQualityRuleRecommendationRunsCommand,
  ListDataQualityRulesetEvaluationRunsCommand,
  ListDataQualityRulesetsCommand,
  ListDataQualityStatisticAnnotationsCommand,
  ListDataQualityStatisticsCommand,
  ListDevEndpointsCommand,
  ListEntitiesCommand,
  ListFormTypesCommand,
  ListGlossariesCommand,
  ListGlossaryTermsCommand,
  ListIntegrationResourcePropertiesCommand,
  ListIntegrationTablePropertiesCommand,
  ListIterableFormsCommand,
  ListJobsCommand,
  ListMaterializedViewRefreshTaskRunsCommand,
  ListMLTransformsCommand,
  ListRegistriesCommand,
  ListSchemasCommand,
  ListSchemaVersionsCommand,
  ListSessionsCommand,
  ListStatementsCommand,
  ListTableOptimizerRunsCommand,
  ListTriggersCommand,
  ListUsageProfilesCommand,
  ListWorkflowsCommand,
  ModifyIntegrationCommand,
  PutAssetCommand,
  PutAssetTypeCommand,
  PutAttachmentCommand,
  PutDataCatalogEncryptionSettingsCommand,
  PutDataCatalogExportConfigurationCommand,
  PutDataQualityProfileAnnotationCommand,
  PutFormTypeCommand,
  PutResourcePolicyCommand,
  PutSchemaVersionMetadataCommand,
  PutWorkflowRunPropertiesCommand,
  QuerySchemaVersionMetadataCommand,
  RegisterConnectionTypeCommand,
  RegisterSchemaVersionCommand,
  RemoveSchemaVersionMetadataCommand,
  ResetJobBookmarkCommand,
  ResumeWorkflowRunCommand,
  RunStatementCommand,
  SearchAssetsCommand,
  SearchTablesCommand,
  StartBlueprintRunCommand,
  StartColumnStatisticsTaskRunCommand,
  StartColumnStatisticsTaskRunScheduleCommand,
  StartCrawlerCommand,
  StartCrawlerScheduleCommand,
  StartDataQualityRuleRecommendationRunCommand,
  StartDataQualityRulesetEvaluationRunCommand,
  StartExportLabelsTaskRunCommand,
  StartImportLabelsTaskRunCommand,
  StartJobRunCommand,
  StartMaterializedViewRefreshTaskRunCommand,
  StartMLEvaluationTaskRunCommand,
  StartMLLabelingSetGenerationTaskRunCommand,
  StartTriggerCommand,
  StartWorkflowRunCommand,
  StopColumnStatisticsTaskRunCommand,
  StopColumnStatisticsTaskRunScheduleCommand,
  StopCrawlerCommand,
  StopCrawlerScheduleCommand,
  StopMaterializedViewRefreshTaskRunCommand,
  StopSessionCommand,
  StopTriggerCommand,
  StopWorkflowRunCommand,
  TagResourceCommand,
  TestConnectionCommand,
  UntagResourceCommand,
  UpdateAssetCommand,
  UpdateBlueprintCommand,
  UpdateCatalogCommand,
  UpdateClassifierCommand,
  UpdateColumnStatisticsForPartitionCommand,
  UpdateColumnStatisticsForTableCommand,
  UpdateColumnStatisticsTaskSettingsCommand,
  UpdateConnectionCommand,
  UpdateCrawlerCommand,
  UpdateCrawlerScheduleCommand,
  UpdateDatabaseCommand,
  UpdateDataQualityRulesetCommand,
  UpdateDevEndpointCommand,
  UpdateGlossaryCommand,
  UpdateGlossaryTermCommand,
  UpdateGlueIdentityCenterConfigurationCommand,
  UpdateIntegrationResourcePropertyCommand,
  UpdateIntegrationTablePropertiesCommand,
  UpdateJobCommand,
  UpdateJobFromSourceControlCommand,
  UpdateMLTransformCommand,
  UpdatePartitionCommand,
  UpdateRegistryCommand,
  UpdateSchemaCommand,
  UpdateSourceControlFromJobCommand,
  UpdateTableCommand,
  UpdateTableOptimizerCommand,
  UpdateTriggerCommand,
  UpdateUsageProfileCommand,
  UpdateUserDefinedFunctionCommand,
  UpdateWorkflowCommand,
};
const paginators = {
  paginateDescribeEntity,
  paginateGetBlueprintRuns,
  paginateGetClassifiers,
  paginateGetColumnStatisticsTaskRuns,
  paginateGetConnections,
  paginateGetCrawlerMetrics,
  paginateGetCrawlers,
  paginateGetDatabases,
  paginateGetDevEndpoints,
  paginateGetJobRuns,
  paginateGetJobs,
  paginateGetMLTaskRuns,
  paginateGetMLTransforms,
  paginateGetPartitionIndexes,
  paginateGetPartitions,
  paginateGetResourcePolicies,
  paginateGetSecurityConfigurations,
  paginateGetTables,
  paginateGetTableVersions,
  paginateGetTriggers,
  paginateGetUnfilteredPartitionsMetadata,
  paginateGetUserDefinedFunctions,
  paginateGetWorkflowRuns,
  paginateListAssetTypes,
  paginateListBlueprints,
  paginateListColumnStatisticsTaskRuns,
  paginateListConnectionTypes,
  paginateListCrawlers,
  paginateListCustomEntityTypes,
  paginateListDataQualityResults,
  paginateListDataQualityRuleRecommendationRuns,
  paginateListDataQualityRulesetEvaluationRuns,
  paginateListDataQualityRulesets,
  paginateListDevEndpoints,
  paginateListEntities,
  paginateListFormTypes,
  paginateListGlossaries,
  paginateListGlossaryTerms,
  paginateListIterableForms,
  paginateListJobs,
  paginateListMaterializedViewRefreshTaskRuns,
  paginateListMLTransforms,
  paginateListRegistries,
  paginateListSchemas,
  paginateListSchemaVersions,
  paginateListSessions,
  paginateListTableOptimizerRuns,
  paginateListTriggers,
  paginateListUsageProfiles,
  paginateListWorkflows,
  paginateSearchAssets,
  paginateSearchTables,
};

/**
 * @public
 */
export interface GlueRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Glue {
  /**
   * @see {@link AssociateGlossaryTermsCommand}
   */
  associateGlossaryTerms(
    args: AssociateGlossaryTermsCommandInput,
    options?: GlueRequestOptions
  ): Promise<AssociateGlossaryTermsCommandOutput>;
  associateGlossaryTerms(
    args: AssociateGlossaryTermsCommandInput,
    cb: (err: any, data?: AssociateGlossaryTermsCommandOutput) => void
  ): void;
  associateGlossaryTerms(
    args: AssociateGlossaryTermsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: AssociateGlossaryTermsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchCreatePartitionCommand}
   */
  batchCreatePartition(
    args: BatchCreatePartitionCommandInput,
    options?: GlueRequestOptions
  ): Promise<BatchCreatePartitionCommandOutput>;
  batchCreatePartition(
    args: BatchCreatePartitionCommandInput,
    cb: (err: any, data?: BatchCreatePartitionCommandOutput) => void
  ): void;
  batchCreatePartition(
    args: BatchCreatePartitionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: BatchCreatePartitionCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteConnectionCommand}
   */
  batchDeleteConnection(
    args: BatchDeleteConnectionCommandInput,
    options?: GlueRequestOptions
  ): Promise<BatchDeleteConnectionCommandOutput>;
  batchDeleteConnection(
    args: BatchDeleteConnectionCommandInput,
    cb: (err: any, data?: BatchDeleteConnectionCommandOutput) => void
  ): void;
  batchDeleteConnection(
    args: BatchDeleteConnectionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: BatchDeleteConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeletePartitionCommand}
   */
  batchDeletePartition(
    args: BatchDeletePartitionCommandInput,
    options?: GlueRequestOptions
  ): Promise<BatchDeletePartitionCommandOutput>;
  batchDeletePartition(
    args: BatchDeletePartitionCommandInput,
    cb: (err: any, data?: BatchDeletePartitionCommandOutput) => void
  ): void;
  batchDeletePartition(
    args: BatchDeletePartitionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: BatchDeletePartitionCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteTableCommand}
   */
  batchDeleteTable(
    args: BatchDeleteTableCommandInput,
    options?: GlueRequestOptions
  ): Promise<BatchDeleteTableCommandOutput>;
  batchDeleteTable(
    args: BatchDeleteTableCommandInput,
    cb: (err: any, data?: BatchDeleteTableCommandOutput) => void
  ): void;
  batchDeleteTable(
    args: BatchDeleteTableCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: BatchDeleteTableCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteTableVersionCommand}
   */
  batchDeleteTableVersion(
    args: BatchDeleteTableVersionCommandInput,
    options?: GlueRequestOptions
  ): Promise<BatchDeleteTableVersionCommandOutput>;
  batchDeleteTableVersion(
    args: BatchDeleteTableVersionCommandInput,
    cb: (err: any, data?: BatchDeleteTableVersionCommandOutput) => void
  ): void;
  batchDeleteTableVersion(
    args: BatchDeleteTableVersionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: BatchDeleteTableVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetBlueprintsCommand}
   */
  batchGetBlueprints(
    args: BatchGetBlueprintsCommandInput,
    options?: GlueRequestOptions
  ): Promise<BatchGetBlueprintsCommandOutput>;
  batchGetBlueprints(
    args: BatchGetBlueprintsCommandInput,
    cb: (err: any, data?: BatchGetBlueprintsCommandOutput) => void
  ): void;
  batchGetBlueprints(
    args: BatchGetBlueprintsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: BatchGetBlueprintsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetCrawlersCommand}
   */
  batchGetCrawlers(
    args: BatchGetCrawlersCommandInput,
    options?: GlueRequestOptions
  ): Promise<BatchGetCrawlersCommandOutput>;
  batchGetCrawlers(
    args: BatchGetCrawlersCommandInput,
    cb: (err: any, data?: BatchGetCrawlersCommandOutput) => void
  ): void;
  batchGetCrawlers(
    args: BatchGetCrawlersCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: BatchGetCrawlersCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetCustomEntityTypesCommand}
   */
  batchGetCustomEntityTypes(
    args: BatchGetCustomEntityTypesCommandInput,
    options?: GlueRequestOptions
  ): Promise<BatchGetCustomEntityTypesCommandOutput>;
  batchGetCustomEntityTypes(
    args: BatchGetCustomEntityTypesCommandInput,
    cb: (err: any, data?: BatchGetCustomEntityTypesCommandOutput) => void
  ): void;
  batchGetCustomEntityTypes(
    args: BatchGetCustomEntityTypesCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: BatchGetCustomEntityTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetDataQualityResultCommand}
   */
  batchGetDataQualityResult(
    args: BatchGetDataQualityResultCommandInput,
    options?: GlueRequestOptions
  ): Promise<BatchGetDataQualityResultCommandOutput>;
  batchGetDataQualityResult(
    args: BatchGetDataQualityResultCommandInput,
    cb: (err: any, data?: BatchGetDataQualityResultCommandOutput) => void
  ): void;
  batchGetDataQualityResult(
    args: BatchGetDataQualityResultCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: BatchGetDataQualityResultCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetDataQualityRulesetEvaluationRunCommand}
   */
  batchGetDataQualityRulesetEvaluationRun(
    args: BatchGetDataQualityRulesetEvaluationRunCommandInput,
    options?: GlueRequestOptions
  ): Promise<BatchGetDataQualityRulesetEvaluationRunCommandOutput>;
  batchGetDataQualityRulesetEvaluationRun(
    args: BatchGetDataQualityRulesetEvaluationRunCommandInput,
    cb: (err: any, data?: BatchGetDataQualityRulesetEvaluationRunCommandOutput) => void
  ): void;
  batchGetDataQualityRulesetEvaluationRun(
    args: BatchGetDataQualityRulesetEvaluationRunCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: BatchGetDataQualityRulesetEvaluationRunCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetDevEndpointsCommand}
   */
  batchGetDevEndpoints(
    args: BatchGetDevEndpointsCommandInput,
    options?: GlueRequestOptions
  ): Promise<BatchGetDevEndpointsCommandOutput>;
  batchGetDevEndpoints(
    args: BatchGetDevEndpointsCommandInput,
    cb: (err: any, data?: BatchGetDevEndpointsCommandOutput) => void
  ): void;
  batchGetDevEndpoints(
    args: BatchGetDevEndpointsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: BatchGetDevEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetIterableFormsCommand}
   */
  batchGetIterableForms(
    args: BatchGetIterableFormsCommandInput,
    options?: GlueRequestOptions
  ): Promise<BatchGetIterableFormsCommandOutput>;
  batchGetIterableForms(
    args: BatchGetIterableFormsCommandInput,
    cb: (err: any, data?: BatchGetIterableFormsCommandOutput) => void
  ): void;
  batchGetIterableForms(
    args: BatchGetIterableFormsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: BatchGetIterableFormsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetJobsCommand}
   */
  batchGetJobs(
    args: BatchGetJobsCommandInput,
    options?: GlueRequestOptions
  ): Promise<BatchGetJobsCommandOutput>;
  batchGetJobs(
    args: BatchGetJobsCommandInput,
    cb: (err: any, data?: BatchGetJobsCommandOutput) => void
  ): void;
  batchGetJobs(
    args: BatchGetJobsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: BatchGetJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetPartitionCommand}
   */
  batchGetPartition(
    args: BatchGetPartitionCommandInput,
    options?: GlueRequestOptions
  ): Promise<BatchGetPartitionCommandOutput>;
  batchGetPartition(
    args: BatchGetPartitionCommandInput,
    cb: (err: any, data?: BatchGetPartitionCommandOutput) => void
  ): void;
  batchGetPartition(
    args: BatchGetPartitionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: BatchGetPartitionCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetTableOptimizerCommand}
   */
  batchGetTableOptimizer(
    args: BatchGetTableOptimizerCommandInput,
    options?: GlueRequestOptions
  ): Promise<BatchGetTableOptimizerCommandOutput>;
  batchGetTableOptimizer(
    args: BatchGetTableOptimizerCommandInput,
    cb: (err: any, data?: BatchGetTableOptimizerCommandOutput) => void
  ): void;
  batchGetTableOptimizer(
    args: BatchGetTableOptimizerCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: BatchGetTableOptimizerCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetTriggersCommand}
   */
  batchGetTriggers(
    args: BatchGetTriggersCommandInput,
    options?: GlueRequestOptions
  ): Promise<BatchGetTriggersCommandOutput>;
  batchGetTriggers(
    args: BatchGetTriggersCommandInput,
    cb: (err: any, data?: BatchGetTriggersCommandOutput) => void
  ): void;
  batchGetTriggers(
    args: BatchGetTriggersCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: BatchGetTriggersCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetWorkflowsCommand}
   */
  batchGetWorkflows(
    args: BatchGetWorkflowsCommandInput,
    options?: GlueRequestOptions
  ): Promise<BatchGetWorkflowsCommandOutput>;
  batchGetWorkflows(
    args: BatchGetWorkflowsCommandInput,
    cb: (err: any, data?: BatchGetWorkflowsCommandOutput) => void
  ): void;
  batchGetWorkflows(
    args: BatchGetWorkflowsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: BatchGetWorkflowsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchPutDataQualityStatisticAnnotationCommand}
   */
  batchPutDataQualityStatisticAnnotation(
    args: BatchPutDataQualityStatisticAnnotationCommandInput,
    options?: GlueRequestOptions
  ): Promise<BatchPutDataQualityStatisticAnnotationCommandOutput>;
  batchPutDataQualityStatisticAnnotation(
    args: BatchPutDataQualityStatisticAnnotationCommandInput,
    cb: (err: any, data?: BatchPutDataQualityStatisticAnnotationCommandOutput) => void
  ): void;
  batchPutDataQualityStatisticAnnotation(
    args: BatchPutDataQualityStatisticAnnotationCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: BatchPutDataQualityStatisticAnnotationCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchStopJobRunCommand}
   */
  batchStopJobRun(
    args: BatchStopJobRunCommandInput,
    options?: GlueRequestOptions
  ): Promise<BatchStopJobRunCommandOutput>;
  batchStopJobRun(
    args: BatchStopJobRunCommandInput,
    cb: (err: any, data?: BatchStopJobRunCommandOutput) => void
  ): void;
  batchStopJobRun(
    args: BatchStopJobRunCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: BatchStopJobRunCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdatePartitionCommand}
   */
  batchUpdatePartition(
    args: BatchUpdatePartitionCommandInput,
    options?: GlueRequestOptions
  ): Promise<BatchUpdatePartitionCommandOutput>;
  batchUpdatePartition(
    args: BatchUpdatePartitionCommandInput,
    cb: (err: any, data?: BatchUpdatePartitionCommandOutput) => void
  ): void;
  batchUpdatePartition(
    args: BatchUpdatePartitionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: BatchUpdatePartitionCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelDataQualityRuleRecommendationRunCommand}
   */
  cancelDataQualityRuleRecommendationRun(
    args: CancelDataQualityRuleRecommendationRunCommandInput,
    options?: GlueRequestOptions
  ): Promise<CancelDataQualityRuleRecommendationRunCommandOutput>;
  cancelDataQualityRuleRecommendationRun(
    args: CancelDataQualityRuleRecommendationRunCommandInput,
    cb: (err: any, data?: CancelDataQualityRuleRecommendationRunCommandOutput) => void
  ): void;
  cancelDataQualityRuleRecommendationRun(
    args: CancelDataQualityRuleRecommendationRunCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CancelDataQualityRuleRecommendationRunCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelDataQualityRulesetEvaluationRunCommand}
   */
  cancelDataQualityRulesetEvaluationRun(
    args: CancelDataQualityRulesetEvaluationRunCommandInput,
    options?: GlueRequestOptions
  ): Promise<CancelDataQualityRulesetEvaluationRunCommandOutput>;
  cancelDataQualityRulesetEvaluationRun(
    args: CancelDataQualityRulesetEvaluationRunCommandInput,
    cb: (err: any, data?: CancelDataQualityRulesetEvaluationRunCommandOutput) => void
  ): void;
  cancelDataQualityRulesetEvaluationRun(
    args: CancelDataQualityRulesetEvaluationRunCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CancelDataQualityRulesetEvaluationRunCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelMLTaskRunCommand}
   */
  cancelMLTaskRun(
    args: CancelMLTaskRunCommandInput,
    options?: GlueRequestOptions
  ): Promise<CancelMLTaskRunCommandOutput>;
  cancelMLTaskRun(
    args: CancelMLTaskRunCommandInput,
    cb: (err: any, data?: CancelMLTaskRunCommandOutput) => void
  ): void;
  cancelMLTaskRun(
    args: CancelMLTaskRunCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CancelMLTaskRunCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelStatementCommand}
   */
  cancelStatement(
    args: CancelStatementCommandInput,
    options?: GlueRequestOptions
  ): Promise<CancelStatementCommandOutput>;
  cancelStatement(
    args: CancelStatementCommandInput,
    cb: (err: any, data?: CancelStatementCommandOutput) => void
  ): void;
  cancelStatement(
    args: CancelStatementCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CancelStatementCommandOutput) => void
  ): void;

  /**
   * @see {@link CheckSchemaVersionValidityCommand}
   */
  checkSchemaVersionValidity(
    args: CheckSchemaVersionValidityCommandInput,
    options?: GlueRequestOptions
  ): Promise<CheckSchemaVersionValidityCommandOutput>;
  checkSchemaVersionValidity(
    args: CheckSchemaVersionValidityCommandInput,
    cb: (err: any, data?: CheckSchemaVersionValidityCommandOutput) => void
  ): void;
  checkSchemaVersionValidity(
    args: CheckSchemaVersionValidityCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CheckSchemaVersionValidityCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBlueprintCommand}
   */
  createBlueprint(
    args: CreateBlueprintCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateBlueprintCommandOutput>;
  createBlueprint(
    args: CreateBlueprintCommandInput,
    cb: (err: any, data?: CreateBlueprintCommandOutput) => void
  ): void;
  createBlueprint(
    args: CreateBlueprintCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateBlueprintCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCatalogCommand}
   */
  createCatalog(
    args: CreateCatalogCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateCatalogCommandOutput>;
  createCatalog(
    args: CreateCatalogCommandInput,
    cb: (err: any, data?: CreateCatalogCommandOutput) => void
  ): void;
  createCatalog(
    args: CreateCatalogCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateCatalogCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClassifierCommand}
   */
  createClassifier(): Promise<CreateClassifierCommandOutput>;
  createClassifier(
    args: CreateClassifierCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateClassifierCommandOutput>;
  createClassifier(
    args: CreateClassifierCommandInput,
    cb: (err: any, data?: CreateClassifierCommandOutput) => void
  ): void;
  createClassifier(
    args: CreateClassifierCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateClassifierCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateColumnStatisticsTaskSettingsCommand}
   */
  createColumnStatisticsTaskSettings(
    args: CreateColumnStatisticsTaskSettingsCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateColumnStatisticsTaskSettingsCommandOutput>;
  createColumnStatisticsTaskSettings(
    args: CreateColumnStatisticsTaskSettingsCommandInput,
    cb: (err: any, data?: CreateColumnStatisticsTaskSettingsCommandOutput) => void
  ): void;
  createColumnStatisticsTaskSettings(
    args: CreateColumnStatisticsTaskSettingsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateColumnStatisticsTaskSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectionCommand}
   */
  createConnection(
    args: CreateConnectionCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateConnectionCommandOutput>;
  createConnection(
    args: CreateConnectionCommandInput,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;
  createConnection(
    args: CreateConnectionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCrawlerCommand}
   */
  createCrawler(
    args: CreateCrawlerCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateCrawlerCommandOutput>;
  createCrawler(
    args: CreateCrawlerCommandInput,
    cb: (err: any, data?: CreateCrawlerCommandOutput) => void
  ): void;
  createCrawler(
    args: CreateCrawlerCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateCrawlerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCustomEntityTypeCommand}
   */
  createCustomEntityType(
    args: CreateCustomEntityTypeCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateCustomEntityTypeCommandOutput>;
  createCustomEntityType(
    args: CreateCustomEntityTypeCommandInput,
    cb: (err: any, data?: CreateCustomEntityTypeCommandOutput) => void
  ): void;
  createCustomEntityType(
    args: CreateCustomEntityTypeCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateCustomEntityTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatabaseCommand}
   */
  createDatabase(
    args: CreateDatabaseCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateDatabaseCommandOutput>;
  createDatabase(
    args: CreateDatabaseCommandInput,
    cb: (err: any, data?: CreateDatabaseCommandOutput) => void
  ): void;
  createDatabase(
    args: CreateDatabaseCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataQualityRulesetCommand}
   */
  createDataQualityRuleset(
    args: CreateDataQualityRulesetCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateDataQualityRulesetCommandOutput>;
  createDataQualityRuleset(
    args: CreateDataQualityRulesetCommandInput,
    cb: (err: any, data?: CreateDataQualityRulesetCommandOutput) => void
  ): void;
  createDataQualityRuleset(
    args: CreateDataQualityRulesetCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateDataQualityRulesetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDevEndpointCommand}
   */
  createDevEndpoint(
    args: CreateDevEndpointCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateDevEndpointCommandOutput>;
  createDevEndpoint(
    args: CreateDevEndpointCommandInput,
    cb: (err: any, data?: CreateDevEndpointCommandOutput) => void
  ): void;
  createDevEndpoint(
    args: CreateDevEndpointCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateDevEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGlossaryCommand}
   */
  createGlossary(
    args: CreateGlossaryCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateGlossaryCommandOutput>;
  createGlossary(
    args: CreateGlossaryCommandInput,
    cb: (err: any, data?: CreateGlossaryCommandOutput) => void
  ): void;
  createGlossary(
    args: CreateGlossaryCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateGlossaryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGlossaryTermCommand}
   */
  createGlossaryTerm(
    args: CreateGlossaryTermCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateGlossaryTermCommandOutput>;
  createGlossaryTerm(
    args: CreateGlossaryTermCommandInput,
    cb: (err: any, data?: CreateGlossaryTermCommandOutput) => void
  ): void;
  createGlossaryTerm(
    args: CreateGlossaryTermCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateGlossaryTermCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGlueIdentityCenterConfigurationCommand}
   */
  createGlueIdentityCenterConfiguration(
    args: CreateGlueIdentityCenterConfigurationCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateGlueIdentityCenterConfigurationCommandOutput>;
  createGlueIdentityCenterConfiguration(
    args: CreateGlueIdentityCenterConfigurationCommandInput,
    cb: (err: any, data?: CreateGlueIdentityCenterConfigurationCommandOutput) => void
  ): void;
  createGlueIdentityCenterConfiguration(
    args: CreateGlueIdentityCenterConfigurationCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateGlueIdentityCenterConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIntegrationCommand}
   */
  createIntegration(
    args: CreateIntegrationCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateIntegrationCommandOutput>;
  createIntegration(
    args: CreateIntegrationCommandInput,
    cb: (err: any, data?: CreateIntegrationCommandOutput) => void
  ): void;
  createIntegration(
    args: CreateIntegrationCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIntegrationResourcePropertyCommand}
   */
  createIntegrationResourceProperty(
    args: CreateIntegrationResourcePropertyCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateIntegrationResourcePropertyCommandOutput>;
  createIntegrationResourceProperty(
    args: CreateIntegrationResourcePropertyCommandInput,
    cb: (err: any, data?: CreateIntegrationResourcePropertyCommandOutput) => void
  ): void;
  createIntegrationResourceProperty(
    args: CreateIntegrationResourcePropertyCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateIntegrationResourcePropertyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIntegrationTablePropertiesCommand}
   */
  createIntegrationTableProperties(
    args: CreateIntegrationTablePropertiesCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateIntegrationTablePropertiesCommandOutput>;
  createIntegrationTableProperties(
    args: CreateIntegrationTablePropertiesCommandInput,
    cb: (err: any, data?: CreateIntegrationTablePropertiesCommandOutput) => void
  ): void;
  createIntegrationTableProperties(
    args: CreateIntegrationTablePropertiesCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateIntegrationTablePropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateJobCommand}
   */
  createJob(
    args: CreateJobCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateJobCommandOutput>;
  createJob(
    args: CreateJobCommandInput,
    cb: (err: any, data?: CreateJobCommandOutput) => void
  ): void;
  createJob(
    args: CreateJobCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMLTransformCommand}
   */
  createMLTransform(
    args: CreateMLTransformCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateMLTransformCommandOutput>;
  createMLTransform(
    args: CreateMLTransformCommandInput,
    cb: (err: any, data?: CreateMLTransformCommandOutput) => void
  ): void;
  createMLTransform(
    args: CreateMLTransformCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateMLTransformCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePartitionCommand}
   */
  createPartition(
    args: CreatePartitionCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreatePartitionCommandOutput>;
  createPartition(
    args: CreatePartitionCommandInput,
    cb: (err: any, data?: CreatePartitionCommandOutput) => void
  ): void;
  createPartition(
    args: CreatePartitionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreatePartitionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePartitionIndexCommand}
   */
  createPartitionIndex(
    args: CreatePartitionIndexCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreatePartitionIndexCommandOutput>;
  createPartitionIndex(
    args: CreatePartitionIndexCommandInput,
    cb: (err: any, data?: CreatePartitionIndexCommandOutput) => void
  ): void;
  createPartitionIndex(
    args: CreatePartitionIndexCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreatePartitionIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRegistryCommand}
   */
  createRegistry(
    args: CreateRegistryCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateRegistryCommandOutput>;
  createRegistry(
    args: CreateRegistryCommandInput,
    cb: (err: any, data?: CreateRegistryCommandOutput) => void
  ): void;
  createRegistry(
    args: CreateRegistryCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateRegistryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSchemaCommand}
   */
  createSchema(
    args: CreateSchemaCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateSchemaCommandOutput>;
  createSchema(
    args: CreateSchemaCommandInput,
    cb: (err: any, data?: CreateSchemaCommandOutput) => void
  ): void;
  createSchema(
    args: CreateSchemaCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateScriptCommand}
   */
  createScript(): Promise<CreateScriptCommandOutput>;
  createScript(
    args: CreateScriptCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateScriptCommandOutput>;
  createScript(
    args: CreateScriptCommandInput,
    cb: (err: any, data?: CreateScriptCommandOutput) => void
  ): void;
  createScript(
    args: CreateScriptCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateScriptCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSecurityConfigurationCommand}
   */
  createSecurityConfiguration(
    args: CreateSecurityConfigurationCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateSecurityConfigurationCommandOutput>;
  createSecurityConfiguration(
    args: CreateSecurityConfigurationCommandInput,
    cb: (err: any, data?: CreateSecurityConfigurationCommandOutput) => void
  ): void;
  createSecurityConfiguration(
    args: CreateSecurityConfigurationCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateSecurityConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSessionCommand}
   */
  createSession(
    args: CreateSessionCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateSessionCommandOutput>;
  createSession(
    args: CreateSessionCommandInput,
    cb: (err: any, data?: CreateSessionCommandOutput) => void
  ): void;
  createSession(
    args: CreateSessionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTableCommand}
   */
  createTable(
    args: CreateTableCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateTableCommandOutput>;
  createTable(
    args: CreateTableCommandInput,
    cb: (err: any, data?: CreateTableCommandOutput) => void
  ): void;
  createTable(
    args: CreateTableCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateTableCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTableOptimizerCommand}
   */
  createTableOptimizer(
    args: CreateTableOptimizerCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateTableOptimizerCommandOutput>;
  createTableOptimizer(
    args: CreateTableOptimizerCommandInput,
    cb: (err: any, data?: CreateTableOptimizerCommandOutput) => void
  ): void;
  createTableOptimizer(
    args: CreateTableOptimizerCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateTableOptimizerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTriggerCommand}
   */
  createTrigger(
    args: CreateTriggerCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateTriggerCommandOutput>;
  createTrigger(
    args: CreateTriggerCommandInput,
    cb: (err: any, data?: CreateTriggerCommandOutput) => void
  ): void;
  createTrigger(
    args: CreateTriggerCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateTriggerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUsageProfileCommand}
   */
  createUsageProfile(
    args: CreateUsageProfileCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateUsageProfileCommandOutput>;
  createUsageProfile(
    args: CreateUsageProfileCommandInput,
    cb: (err: any, data?: CreateUsageProfileCommandOutput) => void
  ): void;
  createUsageProfile(
    args: CreateUsageProfileCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateUsageProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserDefinedFunctionCommand}
   */
  createUserDefinedFunction(
    args: CreateUserDefinedFunctionCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateUserDefinedFunctionCommandOutput>;
  createUserDefinedFunction(
    args: CreateUserDefinedFunctionCommandInput,
    cb: (err: any, data?: CreateUserDefinedFunctionCommandOutput) => void
  ): void;
  createUserDefinedFunction(
    args: CreateUserDefinedFunctionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateUserDefinedFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkflowCommand}
   */
  createWorkflow(
    args: CreateWorkflowCommandInput,
    options?: GlueRequestOptions
  ): Promise<CreateWorkflowCommandOutput>;
  createWorkflow(
    args: CreateWorkflowCommandInput,
    cb: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): void;
  createWorkflow(
    args: CreateWorkflowCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAssetCommand}
   */
  deleteAsset(
    args: DeleteAssetCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteAssetCommandOutput>;
  deleteAsset(
    args: DeleteAssetCommandInput,
    cb: (err: any, data?: DeleteAssetCommandOutput) => void
  ): void;
  deleteAsset(
    args: DeleteAssetCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteAssetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAssetTypeCommand}
   */
  deleteAssetType(
    args: DeleteAssetTypeCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteAssetTypeCommandOutput>;
  deleteAssetType(
    args: DeleteAssetTypeCommandInput,
    cb: (err: any, data?: DeleteAssetTypeCommandOutput) => void
  ): void;
  deleteAssetType(
    args: DeleteAssetTypeCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteAssetTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAttachmentCommand}
   */
  deleteAttachment(
    args: DeleteAttachmentCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteAttachmentCommandOutput>;
  deleteAttachment(
    args: DeleteAttachmentCommandInput,
    cb: (err: any, data?: DeleteAttachmentCommandOutput) => void
  ): void;
  deleteAttachment(
    args: DeleteAttachmentCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBlueprintCommand}
   */
  deleteBlueprint(
    args: DeleteBlueprintCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteBlueprintCommandOutput>;
  deleteBlueprint(
    args: DeleteBlueprintCommandInput,
    cb: (err: any, data?: DeleteBlueprintCommandOutput) => void
  ): void;
  deleteBlueprint(
    args: DeleteBlueprintCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteBlueprintCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCatalogCommand}
   */
  deleteCatalog(
    args: DeleteCatalogCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteCatalogCommandOutput>;
  deleteCatalog(
    args: DeleteCatalogCommandInput,
    cb: (err: any, data?: DeleteCatalogCommandOutput) => void
  ): void;
  deleteCatalog(
    args: DeleteCatalogCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteCatalogCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClassifierCommand}
   */
  deleteClassifier(
    args: DeleteClassifierCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteClassifierCommandOutput>;
  deleteClassifier(
    args: DeleteClassifierCommandInput,
    cb: (err: any, data?: DeleteClassifierCommandOutput) => void
  ): void;
  deleteClassifier(
    args: DeleteClassifierCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteClassifierCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteColumnStatisticsForPartitionCommand}
   */
  deleteColumnStatisticsForPartition(
    args: DeleteColumnStatisticsForPartitionCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteColumnStatisticsForPartitionCommandOutput>;
  deleteColumnStatisticsForPartition(
    args: DeleteColumnStatisticsForPartitionCommandInput,
    cb: (err: any, data?: DeleteColumnStatisticsForPartitionCommandOutput) => void
  ): void;
  deleteColumnStatisticsForPartition(
    args: DeleteColumnStatisticsForPartitionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteColumnStatisticsForPartitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteColumnStatisticsForTableCommand}
   */
  deleteColumnStatisticsForTable(
    args: DeleteColumnStatisticsForTableCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteColumnStatisticsForTableCommandOutput>;
  deleteColumnStatisticsForTable(
    args: DeleteColumnStatisticsForTableCommandInput,
    cb: (err: any, data?: DeleteColumnStatisticsForTableCommandOutput) => void
  ): void;
  deleteColumnStatisticsForTable(
    args: DeleteColumnStatisticsForTableCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteColumnStatisticsForTableCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteColumnStatisticsTaskSettingsCommand}
   */
  deleteColumnStatisticsTaskSettings(
    args: DeleteColumnStatisticsTaskSettingsCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteColumnStatisticsTaskSettingsCommandOutput>;
  deleteColumnStatisticsTaskSettings(
    args: DeleteColumnStatisticsTaskSettingsCommandInput,
    cb: (err: any, data?: DeleteColumnStatisticsTaskSettingsCommandOutput) => void
  ): void;
  deleteColumnStatisticsTaskSettings(
    args: DeleteColumnStatisticsTaskSettingsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteColumnStatisticsTaskSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectionCommand}
   */
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteConnectionCommandOutput>;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectionTypeCommand}
   */
  deleteConnectionType(
    args: DeleteConnectionTypeCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteConnectionTypeCommandOutput>;
  deleteConnectionType(
    args: DeleteConnectionTypeCommandInput,
    cb: (err: any, data?: DeleteConnectionTypeCommandOutput) => void
  ): void;
  deleteConnectionType(
    args: DeleteConnectionTypeCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteConnectionTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCrawlerCommand}
   */
  deleteCrawler(
    args: DeleteCrawlerCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteCrawlerCommandOutput>;
  deleteCrawler(
    args: DeleteCrawlerCommandInput,
    cb: (err: any, data?: DeleteCrawlerCommandOutput) => void
  ): void;
  deleteCrawler(
    args: DeleteCrawlerCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteCrawlerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomEntityTypeCommand}
   */
  deleteCustomEntityType(
    args: DeleteCustomEntityTypeCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteCustomEntityTypeCommandOutput>;
  deleteCustomEntityType(
    args: DeleteCustomEntityTypeCommandInput,
    cb: (err: any, data?: DeleteCustomEntityTypeCommandOutput) => void
  ): void;
  deleteCustomEntityType(
    args: DeleteCustomEntityTypeCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteCustomEntityTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDatabaseCommand}
   */
  deleteDatabase(
    args: DeleteDatabaseCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteDatabaseCommandOutput>;
  deleteDatabase(
    args: DeleteDatabaseCommandInput,
    cb: (err: any, data?: DeleteDatabaseCommandOutput) => void
  ): void;
  deleteDatabase(
    args: DeleteDatabaseCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataQualityRulesetCommand}
   */
  deleteDataQualityRuleset(
    args: DeleteDataQualityRulesetCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteDataQualityRulesetCommandOutput>;
  deleteDataQualityRuleset(
    args: DeleteDataQualityRulesetCommandInput,
    cb: (err: any, data?: DeleteDataQualityRulesetCommandOutput) => void
  ): void;
  deleteDataQualityRuleset(
    args: DeleteDataQualityRulesetCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteDataQualityRulesetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDevEndpointCommand}
   */
  deleteDevEndpoint(
    args: DeleteDevEndpointCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteDevEndpointCommandOutput>;
  deleteDevEndpoint(
    args: DeleteDevEndpointCommandInput,
    cb: (err: any, data?: DeleteDevEndpointCommandOutput) => void
  ): void;
  deleteDevEndpoint(
    args: DeleteDevEndpointCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteDevEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFormTypeCommand}
   */
  deleteFormType(
    args: DeleteFormTypeCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteFormTypeCommandOutput>;
  deleteFormType(
    args: DeleteFormTypeCommandInput,
    cb: (err: any, data?: DeleteFormTypeCommandOutput) => void
  ): void;
  deleteFormType(
    args: DeleteFormTypeCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteFormTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGlossaryCommand}
   */
  deleteGlossary(
    args: DeleteGlossaryCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteGlossaryCommandOutput>;
  deleteGlossary(
    args: DeleteGlossaryCommandInput,
    cb: (err: any, data?: DeleteGlossaryCommandOutput) => void
  ): void;
  deleteGlossary(
    args: DeleteGlossaryCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteGlossaryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGlossaryTermCommand}
   */
  deleteGlossaryTerm(
    args: DeleteGlossaryTermCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteGlossaryTermCommandOutput>;
  deleteGlossaryTerm(
    args: DeleteGlossaryTermCommandInput,
    cb: (err: any, data?: DeleteGlossaryTermCommandOutput) => void
  ): void;
  deleteGlossaryTerm(
    args: DeleteGlossaryTermCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteGlossaryTermCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGlueIdentityCenterConfigurationCommand}
   */
  deleteGlueIdentityCenterConfiguration(): Promise<DeleteGlueIdentityCenterConfigurationCommandOutput>;
  deleteGlueIdentityCenterConfiguration(
    args: DeleteGlueIdentityCenterConfigurationCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteGlueIdentityCenterConfigurationCommandOutput>;
  deleteGlueIdentityCenterConfiguration(
    args: DeleteGlueIdentityCenterConfigurationCommandInput,
    cb: (err: any, data?: DeleteGlueIdentityCenterConfigurationCommandOutput) => void
  ): void;
  deleteGlueIdentityCenterConfiguration(
    args: DeleteGlueIdentityCenterConfigurationCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteGlueIdentityCenterConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIntegrationCommand}
   */
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteIntegrationCommandOutput>;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIntegrationResourcePropertyCommand}
   */
  deleteIntegrationResourceProperty(
    args: DeleteIntegrationResourcePropertyCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteIntegrationResourcePropertyCommandOutput>;
  deleteIntegrationResourceProperty(
    args: DeleteIntegrationResourcePropertyCommandInput,
    cb: (err: any, data?: DeleteIntegrationResourcePropertyCommandOutput) => void
  ): void;
  deleteIntegrationResourceProperty(
    args: DeleteIntegrationResourcePropertyCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteIntegrationResourcePropertyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIntegrationTablePropertiesCommand}
   */
  deleteIntegrationTableProperties(
    args: DeleteIntegrationTablePropertiesCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteIntegrationTablePropertiesCommandOutput>;
  deleteIntegrationTableProperties(
    args: DeleteIntegrationTablePropertiesCommandInput,
    cb: (err: any, data?: DeleteIntegrationTablePropertiesCommandOutput) => void
  ): void;
  deleteIntegrationTableProperties(
    args: DeleteIntegrationTablePropertiesCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteIntegrationTablePropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteJobCommand}
   */
  deleteJob(
    args: DeleteJobCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteJobCommandOutput>;
  deleteJob(
    args: DeleteJobCommandInput,
    cb: (err: any, data?: DeleteJobCommandOutput) => void
  ): void;
  deleteJob(
    args: DeleteJobCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMLTransformCommand}
   */
  deleteMLTransform(
    args: DeleteMLTransformCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteMLTransformCommandOutput>;
  deleteMLTransform(
    args: DeleteMLTransformCommandInput,
    cb: (err: any, data?: DeleteMLTransformCommandOutput) => void
  ): void;
  deleteMLTransform(
    args: DeleteMLTransformCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteMLTransformCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePartitionCommand}
   */
  deletePartition(
    args: DeletePartitionCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeletePartitionCommandOutput>;
  deletePartition(
    args: DeletePartitionCommandInput,
    cb: (err: any, data?: DeletePartitionCommandOutput) => void
  ): void;
  deletePartition(
    args: DeletePartitionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeletePartitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePartitionIndexCommand}
   */
  deletePartitionIndex(
    args: DeletePartitionIndexCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeletePartitionIndexCommandOutput>;
  deletePartitionIndex(
    args: DeletePartitionIndexCommandInput,
    cb: (err: any, data?: DeletePartitionIndexCommandOutput) => void
  ): void;
  deletePartitionIndex(
    args: DeletePartitionIndexCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeletePartitionIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRegistryCommand}
   */
  deleteRegistry(
    args: DeleteRegistryCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteRegistryCommandOutput>;
  deleteRegistry(
    args: DeleteRegistryCommandInput,
    cb: (err: any, data?: DeleteRegistryCommandOutput) => void
  ): void;
  deleteRegistry(
    args: DeleteRegistryCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteRegistryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSchemaCommand}
   */
  deleteSchema(
    args: DeleteSchemaCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteSchemaCommandOutput>;
  deleteSchema(
    args: DeleteSchemaCommandInput,
    cb: (err: any, data?: DeleteSchemaCommandOutput) => void
  ): void;
  deleteSchema(
    args: DeleteSchemaCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSchemaVersionsCommand}
   */
  deleteSchemaVersions(
    args: DeleteSchemaVersionsCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteSchemaVersionsCommandOutput>;
  deleteSchemaVersions(
    args: DeleteSchemaVersionsCommandInput,
    cb: (err: any, data?: DeleteSchemaVersionsCommandOutput) => void
  ): void;
  deleteSchemaVersions(
    args: DeleteSchemaVersionsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteSchemaVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSecurityConfigurationCommand}
   */
  deleteSecurityConfiguration(
    args: DeleteSecurityConfigurationCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteSecurityConfigurationCommandOutput>;
  deleteSecurityConfiguration(
    args: DeleteSecurityConfigurationCommandInput,
    cb: (err: any, data?: DeleteSecurityConfigurationCommandOutput) => void
  ): void;
  deleteSecurityConfiguration(
    args: DeleteSecurityConfigurationCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteSecurityConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSessionCommand}
   */
  deleteSession(
    args: DeleteSessionCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteSessionCommandOutput>;
  deleteSession(
    args: DeleteSessionCommandInput,
    cb: (err: any, data?: DeleteSessionCommandOutput) => void
  ): void;
  deleteSession(
    args: DeleteSessionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTableCommand}
   */
  deleteTable(
    args: DeleteTableCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteTableCommandOutput>;
  deleteTable(
    args: DeleteTableCommandInput,
    cb: (err: any, data?: DeleteTableCommandOutput) => void
  ): void;
  deleteTable(
    args: DeleteTableCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteTableCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTableOptimizerCommand}
   */
  deleteTableOptimizer(
    args: DeleteTableOptimizerCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteTableOptimizerCommandOutput>;
  deleteTableOptimizer(
    args: DeleteTableOptimizerCommandInput,
    cb: (err: any, data?: DeleteTableOptimizerCommandOutput) => void
  ): void;
  deleteTableOptimizer(
    args: DeleteTableOptimizerCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteTableOptimizerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTableVersionCommand}
   */
  deleteTableVersion(
    args: DeleteTableVersionCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteTableVersionCommandOutput>;
  deleteTableVersion(
    args: DeleteTableVersionCommandInput,
    cb: (err: any, data?: DeleteTableVersionCommandOutput) => void
  ): void;
  deleteTableVersion(
    args: DeleteTableVersionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteTableVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTriggerCommand}
   */
  deleteTrigger(
    args: DeleteTriggerCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteTriggerCommandOutput>;
  deleteTrigger(
    args: DeleteTriggerCommandInput,
    cb: (err: any, data?: DeleteTriggerCommandOutput) => void
  ): void;
  deleteTrigger(
    args: DeleteTriggerCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteTriggerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUsageProfileCommand}
   */
  deleteUsageProfile(
    args: DeleteUsageProfileCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteUsageProfileCommandOutput>;
  deleteUsageProfile(
    args: DeleteUsageProfileCommandInput,
    cb: (err: any, data?: DeleteUsageProfileCommandOutput) => void
  ): void;
  deleteUsageProfile(
    args: DeleteUsageProfileCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteUsageProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserDefinedFunctionCommand}
   */
  deleteUserDefinedFunction(
    args: DeleteUserDefinedFunctionCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteUserDefinedFunctionCommandOutput>;
  deleteUserDefinedFunction(
    args: DeleteUserDefinedFunctionCommandInput,
    cb: (err: any, data?: DeleteUserDefinedFunctionCommandOutput) => void
  ): void;
  deleteUserDefinedFunction(
    args: DeleteUserDefinedFunctionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteUserDefinedFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkflowCommand}
   */
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options?: GlueRequestOptions
  ): Promise<DeleteWorkflowCommandOutput>;
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    cb: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): void;
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConnectionTypeCommand}
   */
  describeConnectionType(
    args: DescribeConnectionTypeCommandInput,
    options?: GlueRequestOptions
  ): Promise<DescribeConnectionTypeCommandOutput>;
  describeConnectionType(
    args: DescribeConnectionTypeCommandInput,
    cb: (err: any, data?: DescribeConnectionTypeCommandOutput) => void
  ): void;
  describeConnectionType(
    args: DescribeConnectionTypeCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DescribeConnectionTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEntityCommand}
   */
  describeEntity(
    args: DescribeEntityCommandInput,
    options?: GlueRequestOptions
  ): Promise<DescribeEntityCommandOutput>;
  describeEntity(
    args: DescribeEntityCommandInput,
    cb: (err: any, data?: DescribeEntityCommandOutput) => void
  ): void;
  describeEntity(
    args: DescribeEntityCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DescribeEntityCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInboundIntegrationsCommand}
   */
  describeInboundIntegrations(): Promise<DescribeInboundIntegrationsCommandOutput>;
  describeInboundIntegrations(
    args: DescribeInboundIntegrationsCommandInput,
    options?: GlueRequestOptions
  ): Promise<DescribeInboundIntegrationsCommandOutput>;
  describeInboundIntegrations(
    args: DescribeInboundIntegrationsCommandInput,
    cb: (err: any, data?: DescribeInboundIntegrationsCommandOutput) => void
  ): void;
  describeInboundIntegrations(
    args: DescribeInboundIntegrationsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DescribeInboundIntegrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIntegrationsCommand}
   */
  describeIntegrations(): Promise<DescribeIntegrationsCommandOutput>;
  describeIntegrations(
    args: DescribeIntegrationsCommandInput,
    options?: GlueRequestOptions
  ): Promise<DescribeIntegrationsCommandOutput>;
  describeIntegrations(
    args: DescribeIntegrationsCommandInput,
    cb: (err: any, data?: DescribeIntegrationsCommandOutput) => void
  ): void;
  describeIntegrations(
    args: DescribeIntegrationsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DescribeIntegrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateGlossaryTermsCommand}
   */
  disassociateGlossaryTerms(
    args: DisassociateGlossaryTermsCommandInput,
    options?: GlueRequestOptions
  ): Promise<DisassociateGlossaryTermsCommandOutput>;
  disassociateGlossaryTerms(
    args: DisassociateGlossaryTermsCommandInput,
    cb: (err: any, data?: DisassociateGlossaryTermsCommandOutput) => void
  ): void;
  disassociateGlossaryTerms(
    args: DisassociateGlossaryTermsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: DisassociateGlossaryTermsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssetCommand}
   */
  getAsset(
    args: GetAssetCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetAssetCommandOutput>;
  getAsset(
    args: GetAssetCommandInput,
    cb: (err: any, data?: GetAssetCommandOutput) => void
  ): void;
  getAsset(
    args: GetAssetCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetAssetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssetTypeCommand}
   */
  getAssetType(
    args: GetAssetTypeCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetAssetTypeCommandOutput>;
  getAssetType(
    args: GetAssetTypeCommandInput,
    cb: (err: any, data?: GetAssetTypeCommandOutput) => void
  ): void;
  getAssetType(
    args: GetAssetTypeCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetAssetTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBlueprintCommand}
   */
  getBlueprint(
    args: GetBlueprintCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetBlueprintCommandOutput>;
  getBlueprint(
    args: GetBlueprintCommandInput,
    cb: (err: any, data?: GetBlueprintCommandOutput) => void
  ): void;
  getBlueprint(
    args: GetBlueprintCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetBlueprintCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBlueprintRunCommand}
   */
  getBlueprintRun(
    args: GetBlueprintRunCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetBlueprintRunCommandOutput>;
  getBlueprintRun(
    args: GetBlueprintRunCommandInput,
    cb: (err: any, data?: GetBlueprintRunCommandOutput) => void
  ): void;
  getBlueprintRun(
    args: GetBlueprintRunCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetBlueprintRunCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBlueprintRunsCommand}
   */
  getBlueprintRuns(
    args: GetBlueprintRunsCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetBlueprintRunsCommandOutput>;
  getBlueprintRuns(
    args: GetBlueprintRunsCommandInput,
    cb: (err: any, data?: GetBlueprintRunsCommandOutput) => void
  ): void;
  getBlueprintRuns(
    args: GetBlueprintRunsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetBlueprintRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCatalogCommand}
   */
  getCatalog(
    args: GetCatalogCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetCatalogCommandOutput>;
  getCatalog(
    args: GetCatalogCommandInput,
    cb: (err: any, data?: GetCatalogCommandOutput) => void
  ): void;
  getCatalog(
    args: GetCatalogCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetCatalogCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCatalogImportStatusCommand}
   */
  getCatalogImportStatus(): Promise<GetCatalogImportStatusCommandOutput>;
  getCatalogImportStatus(
    args: GetCatalogImportStatusCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetCatalogImportStatusCommandOutput>;
  getCatalogImportStatus(
    args: GetCatalogImportStatusCommandInput,
    cb: (err: any, data?: GetCatalogImportStatusCommandOutput) => void
  ): void;
  getCatalogImportStatus(
    args: GetCatalogImportStatusCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetCatalogImportStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCatalogsCommand}
   */
  getCatalogs(): Promise<GetCatalogsCommandOutput>;
  getCatalogs(
    args: GetCatalogsCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetCatalogsCommandOutput>;
  getCatalogs(
    args: GetCatalogsCommandInput,
    cb: (err: any, data?: GetCatalogsCommandOutput) => void
  ): void;
  getCatalogs(
    args: GetCatalogsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetCatalogsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetClassifierCommand}
   */
  getClassifier(
    args: GetClassifierCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetClassifierCommandOutput>;
  getClassifier(
    args: GetClassifierCommandInput,
    cb: (err: any, data?: GetClassifierCommandOutput) => void
  ): void;
  getClassifier(
    args: GetClassifierCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetClassifierCommandOutput) => void
  ): void;

  /**
   * @see {@link GetClassifiersCommand}
   */
  getClassifiers(): Promise<GetClassifiersCommandOutput>;
  getClassifiers(
    args: GetClassifiersCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetClassifiersCommandOutput>;
  getClassifiers(
    args: GetClassifiersCommandInput,
    cb: (err: any, data?: GetClassifiersCommandOutput) => void
  ): void;
  getClassifiers(
    args: GetClassifiersCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetClassifiersCommandOutput) => void
  ): void;

  /**
   * @see {@link GetColumnStatisticsForPartitionCommand}
   */
  getColumnStatisticsForPartition(
    args: GetColumnStatisticsForPartitionCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetColumnStatisticsForPartitionCommandOutput>;
  getColumnStatisticsForPartition(
    args: GetColumnStatisticsForPartitionCommandInput,
    cb: (err: any, data?: GetColumnStatisticsForPartitionCommandOutput) => void
  ): void;
  getColumnStatisticsForPartition(
    args: GetColumnStatisticsForPartitionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetColumnStatisticsForPartitionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetColumnStatisticsForTableCommand}
   */
  getColumnStatisticsForTable(
    args: GetColumnStatisticsForTableCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetColumnStatisticsForTableCommandOutput>;
  getColumnStatisticsForTable(
    args: GetColumnStatisticsForTableCommandInput,
    cb: (err: any, data?: GetColumnStatisticsForTableCommandOutput) => void
  ): void;
  getColumnStatisticsForTable(
    args: GetColumnStatisticsForTableCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetColumnStatisticsForTableCommandOutput) => void
  ): void;

  /**
   * @see {@link GetColumnStatisticsTaskRunCommand}
   */
  getColumnStatisticsTaskRun(
    args: GetColumnStatisticsTaskRunCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetColumnStatisticsTaskRunCommandOutput>;
  getColumnStatisticsTaskRun(
    args: GetColumnStatisticsTaskRunCommandInput,
    cb: (err: any, data?: GetColumnStatisticsTaskRunCommandOutput) => void
  ): void;
  getColumnStatisticsTaskRun(
    args: GetColumnStatisticsTaskRunCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetColumnStatisticsTaskRunCommandOutput) => void
  ): void;

  /**
   * @see {@link GetColumnStatisticsTaskRunsCommand}
   */
  getColumnStatisticsTaskRuns(
    args: GetColumnStatisticsTaskRunsCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetColumnStatisticsTaskRunsCommandOutput>;
  getColumnStatisticsTaskRuns(
    args: GetColumnStatisticsTaskRunsCommandInput,
    cb: (err: any, data?: GetColumnStatisticsTaskRunsCommandOutput) => void
  ): void;
  getColumnStatisticsTaskRuns(
    args: GetColumnStatisticsTaskRunsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetColumnStatisticsTaskRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetColumnStatisticsTaskSettingsCommand}
   */
  getColumnStatisticsTaskSettings(
    args: GetColumnStatisticsTaskSettingsCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetColumnStatisticsTaskSettingsCommandOutput>;
  getColumnStatisticsTaskSettings(
    args: GetColumnStatisticsTaskSettingsCommandInput,
    cb: (err: any, data?: GetColumnStatisticsTaskSettingsCommandOutput) => void
  ): void;
  getColumnStatisticsTaskSettings(
    args: GetColumnStatisticsTaskSettingsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetColumnStatisticsTaskSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectionCommand}
   */
  getConnection(
    args: GetConnectionCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetConnectionCommandOutput>;
  getConnection(
    args: GetConnectionCommandInput,
    cb: (err: any, data?: GetConnectionCommandOutput) => void
  ): void;
  getConnection(
    args: GetConnectionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectionsCommand}
   */
  getConnections(): Promise<GetConnectionsCommandOutput>;
  getConnections(
    args: GetConnectionsCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetConnectionsCommandOutput>;
  getConnections(
    args: GetConnectionsCommandInput,
    cb: (err: any, data?: GetConnectionsCommandOutput) => void
  ): void;
  getConnections(
    args: GetConnectionsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCrawlerCommand}
   */
  getCrawler(
    args: GetCrawlerCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetCrawlerCommandOutput>;
  getCrawler(
    args: GetCrawlerCommandInput,
    cb: (err: any, data?: GetCrawlerCommandOutput) => void
  ): void;
  getCrawler(
    args: GetCrawlerCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetCrawlerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCrawlerMetricsCommand}
   */
  getCrawlerMetrics(): Promise<GetCrawlerMetricsCommandOutput>;
  getCrawlerMetrics(
    args: GetCrawlerMetricsCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetCrawlerMetricsCommandOutput>;
  getCrawlerMetrics(
    args: GetCrawlerMetricsCommandInput,
    cb: (err: any, data?: GetCrawlerMetricsCommandOutput) => void
  ): void;
  getCrawlerMetrics(
    args: GetCrawlerMetricsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetCrawlerMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCrawlersCommand}
   */
  getCrawlers(): Promise<GetCrawlersCommandOutput>;
  getCrawlers(
    args: GetCrawlersCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetCrawlersCommandOutput>;
  getCrawlers(
    args: GetCrawlersCommandInput,
    cb: (err: any, data?: GetCrawlersCommandOutput) => void
  ): void;
  getCrawlers(
    args: GetCrawlersCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetCrawlersCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCustomEntityTypeCommand}
   */
  getCustomEntityType(
    args: GetCustomEntityTypeCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetCustomEntityTypeCommandOutput>;
  getCustomEntityType(
    args: GetCustomEntityTypeCommandInput,
    cb: (err: any, data?: GetCustomEntityTypeCommandOutput) => void
  ): void;
  getCustomEntityType(
    args: GetCustomEntityTypeCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetCustomEntityTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDashboardUrlCommand}
   */
  getDashboardUrl(
    args: GetDashboardUrlCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetDashboardUrlCommandOutput>;
  getDashboardUrl(
    args: GetDashboardUrlCommandInput,
    cb: (err: any, data?: GetDashboardUrlCommandOutput) => void
  ): void;
  getDashboardUrl(
    args: GetDashboardUrlCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetDashboardUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDatabaseCommand}
   */
  getDatabase(
    args: GetDatabaseCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetDatabaseCommandOutput>;
  getDatabase(
    args: GetDatabaseCommandInput,
    cb: (err: any, data?: GetDatabaseCommandOutput) => void
  ): void;
  getDatabase(
    args: GetDatabaseCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDatabasesCommand}
   */
  getDatabases(): Promise<GetDatabasesCommandOutput>;
  getDatabases(
    args: GetDatabasesCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetDatabasesCommandOutput>;
  getDatabases(
    args: GetDatabasesCommandInput,
    cb: (err: any, data?: GetDatabasesCommandOutput) => void
  ): void;
  getDatabases(
    args: GetDatabasesCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetDatabasesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataCatalogEncryptionSettingsCommand}
   */
  getDataCatalogEncryptionSettings(): Promise<GetDataCatalogEncryptionSettingsCommandOutput>;
  getDataCatalogEncryptionSettings(
    args: GetDataCatalogEncryptionSettingsCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetDataCatalogEncryptionSettingsCommandOutput>;
  getDataCatalogEncryptionSettings(
    args: GetDataCatalogEncryptionSettingsCommandInput,
    cb: (err: any, data?: GetDataCatalogEncryptionSettingsCommandOutput) => void
  ): void;
  getDataCatalogEncryptionSettings(
    args: GetDataCatalogEncryptionSettingsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetDataCatalogEncryptionSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataCatalogExportConfigurationCommand}
   */
  getDataCatalogExportConfiguration(): Promise<GetDataCatalogExportConfigurationCommandOutput>;
  getDataCatalogExportConfiguration(
    args: GetDataCatalogExportConfigurationCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetDataCatalogExportConfigurationCommandOutput>;
  getDataCatalogExportConfiguration(
    args: GetDataCatalogExportConfigurationCommandInput,
    cb: (err: any, data?: GetDataCatalogExportConfigurationCommandOutput) => void
  ): void;
  getDataCatalogExportConfiguration(
    args: GetDataCatalogExportConfigurationCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetDataCatalogExportConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataflowGraphCommand}
   */
  getDataflowGraph(): Promise<GetDataflowGraphCommandOutput>;
  getDataflowGraph(
    args: GetDataflowGraphCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetDataflowGraphCommandOutput>;
  getDataflowGraph(
    args: GetDataflowGraphCommandInput,
    cb: (err: any, data?: GetDataflowGraphCommandOutput) => void
  ): void;
  getDataflowGraph(
    args: GetDataflowGraphCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetDataflowGraphCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataQualityModelCommand}
   */
  getDataQualityModel(
    args: GetDataQualityModelCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetDataQualityModelCommandOutput>;
  getDataQualityModel(
    args: GetDataQualityModelCommandInput,
    cb: (err: any, data?: GetDataQualityModelCommandOutput) => void
  ): void;
  getDataQualityModel(
    args: GetDataQualityModelCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetDataQualityModelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataQualityModelResultCommand}
   */
  getDataQualityModelResult(
    args: GetDataQualityModelResultCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetDataQualityModelResultCommandOutput>;
  getDataQualityModelResult(
    args: GetDataQualityModelResultCommandInput,
    cb: (err: any, data?: GetDataQualityModelResultCommandOutput) => void
  ): void;
  getDataQualityModelResult(
    args: GetDataQualityModelResultCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetDataQualityModelResultCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataQualityResultCommand}
   */
  getDataQualityResult(
    args: GetDataQualityResultCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetDataQualityResultCommandOutput>;
  getDataQualityResult(
    args: GetDataQualityResultCommandInput,
    cb: (err: any, data?: GetDataQualityResultCommandOutput) => void
  ): void;
  getDataQualityResult(
    args: GetDataQualityResultCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetDataQualityResultCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataQualityRuleRecommendationRunCommand}
   */
  getDataQualityRuleRecommendationRun(
    args: GetDataQualityRuleRecommendationRunCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetDataQualityRuleRecommendationRunCommandOutput>;
  getDataQualityRuleRecommendationRun(
    args: GetDataQualityRuleRecommendationRunCommandInput,
    cb: (err: any, data?: GetDataQualityRuleRecommendationRunCommandOutput) => void
  ): void;
  getDataQualityRuleRecommendationRun(
    args: GetDataQualityRuleRecommendationRunCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetDataQualityRuleRecommendationRunCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataQualityRulesetCommand}
   */
  getDataQualityRuleset(
    args: GetDataQualityRulesetCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetDataQualityRulesetCommandOutput>;
  getDataQualityRuleset(
    args: GetDataQualityRulesetCommandInput,
    cb: (err: any, data?: GetDataQualityRulesetCommandOutput) => void
  ): void;
  getDataQualityRuleset(
    args: GetDataQualityRulesetCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetDataQualityRulesetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataQualityRulesetEvaluationRunCommand}
   */
  getDataQualityRulesetEvaluationRun(
    args: GetDataQualityRulesetEvaluationRunCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetDataQualityRulesetEvaluationRunCommandOutput>;
  getDataQualityRulesetEvaluationRun(
    args: GetDataQualityRulesetEvaluationRunCommandInput,
    cb: (err: any, data?: GetDataQualityRulesetEvaluationRunCommandOutput) => void
  ): void;
  getDataQualityRulesetEvaluationRun(
    args: GetDataQualityRulesetEvaluationRunCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetDataQualityRulesetEvaluationRunCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDevEndpointCommand}
   */
  getDevEndpoint(
    args: GetDevEndpointCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetDevEndpointCommandOutput>;
  getDevEndpoint(
    args: GetDevEndpointCommandInput,
    cb: (err: any, data?: GetDevEndpointCommandOutput) => void
  ): void;
  getDevEndpoint(
    args: GetDevEndpointCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetDevEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDevEndpointsCommand}
   */
  getDevEndpoints(): Promise<GetDevEndpointsCommandOutput>;
  getDevEndpoints(
    args: GetDevEndpointsCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetDevEndpointsCommandOutput>;
  getDevEndpoints(
    args: GetDevEndpointsCommandInput,
    cb: (err: any, data?: GetDevEndpointsCommandOutput) => void
  ): void;
  getDevEndpoints(
    args: GetDevEndpointsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetDevEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEntityRecordsCommand}
   */
  getEntityRecords(
    args: GetEntityRecordsCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetEntityRecordsCommandOutput>;
  getEntityRecords(
    args: GetEntityRecordsCommandInput,
    cb: (err: any, data?: GetEntityRecordsCommandOutput) => void
  ): void;
  getEntityRecords(
    args: GetEntityRecordsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetEntityRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFormTypeCommand}
   */
  getFormType(
    args: GetFormTypeCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetFormTypeCommandOutput>;
  getFormType(
    args: GetFormTypeCommandInput,
    cb: (err: any, data?: GetFormTypeCommandOutput) => void
  ): void;
  getFormType(
    args: GetFormTypeCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetFormTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGlossaryCommand}
   */
  getGlossary(
    args: GetGlossaryCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetGlossaryCommandOutput>;
  getGlossary(
    args: GetGlossaryCommandInput,
    cb: (err: any, data?: GetGlossaryCommandOutput) => void
  ): void;
  getGlossary(
    args: GetGlossaryCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetGlossaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGlossaryTermCommand}
   */
  getGlossaryTerm(
    args: GetGlossaryTermCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetGlossaryTermCommandOutput>;
  getGlossaryTerm(
    args: GetGlossaryTermCommandInput,
    cb: (err: any, data?: GetGlossaryTermCommandOutput) => void
  ): void;
  getGlossaryTerm(
    args: GetGlossaryTermCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetGlossaryTermCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGlueIdentityCenterConfigurationCommand}
   */
  getGlueIdentityCenterConfiguration(): Promise<GetGlueIdentityCenterConfigurationCommandOutput>;
  getGlueIdentityCenterConfiguration(
    args: GetGlueIdentityCenterConfigurationCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetGlueIdentityCenterConfigurationCommandOutput>;
  getGlueIdentityCenterConfiguration(
    args: GetGlueIdentityCenterConfigurationCommandInput,
    cb: (err: any, data?: GetGlueIdentityCenterConfigurationCommandOutput) => void
  ): void;
  getGlueIdentityCenterConfiguration(
    args: GetGlueIdentityCenterConfigurationCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetGlueIdentityCenterConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIntegrationResourcePropertyCommand}
   */
  getIntegrationResourceProperty(
    args: GetIntegrationResourcePropertyCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetIntegrationResourcePropertyCommandOutput>;
  getIntegrationResourceProperty(
    args: GetIntegrationResourcePropertyCommandInput,
    cb: (err: any, data?: GetIntegrationResourcePropertyCommandOutput) => void
  ): void;
  getIntegrationResourceProperty(
    args: GetIntegrationResourcePropertyCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetIntegrationResourcePropertyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIntegrationTablePropertiesCommand}
   */
  getIntegrationTableProperties(
    args: GetIntegrationTablePropertiesCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetIntegrationTablePropertiesCommandOutput>;
  getIntegrationTableProperties(
    args: GetIntegrationTablePropertiesCommandInput,
    cb: (err: any, data?: GetIntegrationTablePropertiesCommandOutput) => void
  ): void;
  getIntegrationTableProperties(
    args: GetIntegrationTablePropertiesCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetIntegrationTablePropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobCommand}
   */
  getJob(
    args: GetJobCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetJobCommandOutput>;
  getJob(
    args: GetJobCommandInput,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;
  getJob(
    args: GetJobCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobBookmarkCommand}
   */
  getJobBookmark(
    args: GetJobBookmarkCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetJobBookmarkCommandOutput>;
  getJobBookmark(
    args: GetJobBookmarkCommandInput,
    cb: (err: any, data?: GetJobBookmarkCommandOutput) => void
  ): void;
  getJobBookmark(
    args: GetJobBookmarkCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetJobBookmarkCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobRunCommand}
   */
  getJobRun(
    args: GetJobRunCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetJobRunCommandOutput>;
  getJobRun(
    args: GetJobRunCommandInput,
    cb: (err: any, data?: GetJobRunCommandOutput) => void
  ): void;
  getJobRun(
    args: GetJobRunCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetJobRunCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobRunsCommand}
   */
  getJobRuns(
    args: GetJobRunsCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetJobRunsCommandOutput>;
  getJobRuns(
    args: GetJobRunsCommandInput,
    cb: (err: any, data?: GetJobRunsCommandOutput) => void
  ): void;
  getJobRuns(
    args: GetJobRunsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetJobRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobsCommand}
   */
  getJobs(): Promise<GetJobsCommandOutput>;
  getJobs(
    args: GetJobsCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetJobsCommandOutput>;
  getJobs(
    args: GetJobsCommandInput,
    cb: (err: any, data?: GetJobsCommandOutput) => void
  ): void;
  getJobs(
    args: GetJobsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMappingCommand}
   */
  getMapping(
    args: GetMappingCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetMappingCommandOutput>;
  getMapping(
    args: GetMappingCommandInput,
    cb: (err: any, data?: GetMappingCommandOutput) => void
  ): void;
  getMapping(
    args: GetMappingCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMaterializedViewRefreshTaskRunCommand}
   */
  getMaterializedViewRefreshTaskRun(
    args: GetMaterializedViewRefreshTaskRunCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetMaterializedViewRefreshTaskRunCommandOutput>;
  getMaterializedViewRefreshTaskRun(
    args: GetMaterializedViewRefreshTaskRunCommandInput,
    cb: (err: any, data?: GetMaterializedViewRefreshTaskRunCommandOutput) => void
  ): void;
  getMaterializedViewRefreshTaskRun(
    args: GetMaterializedViewRefreshTaskRunCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetMaterializedViewRefreshTaskRunCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMLTaskRunCommand}
   */
  getMLTaskRun(
    args: GetMLTaskRunCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetMLTaskRunCommandOutput>;
  getMLTaskRun(
    args: GetMLTaskRunCommandInput,
    cb: (err: any, data?: GetMLTaskRunCommandOutput) => void
  ): void;
  getMLTaskRun(
    args: GetMLTaskRunCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetMLTaskRunCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMLTaskRunsCommand}
   */
  getMLTaskRuns(
    args: GetMLTaskRunsCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetMLTaskRunsCommandOutput>;
  getMLTaskRuns(
    args: GetMLTaskRunsCommandInput,
    cb: (err: any, data?: GetMLTaskRunsCommandOutput) => void
  ): void;
  getMLTaskRuns(
    args: GetMLTaskRunsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetMLTaskRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMLTransformCommand}
   */
  getMLTransform(
    args: GetMLTransformCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetMLTransformCommandOutput>;
  getMLTransform(
    args: GetMLTransformCommandInput,
    cb: (err: any, data?: GetMLTransformCommandOutput) => void
  ): void;
  getMLTransform(
    args: GetMLTransformCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetMLTransformCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMLTransformsCommand}
   */
  getMLTransforms(): Promise<GetMLTransformsCommandOutput>;
  getMLTransforms(
    args: GetMLTransformsCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetMLTransformsCommandOutput>;
  getMLTransforms(
    args: GetMLTransformsCommandInput,
    cb: (err: any, data?: GetMLTransformsCommandOutput) => void
  ): void;
  getMLTransforms(
    args: GetMLTransformsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetMLTransformsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPartitionCommand}
   */
  getPartition(
    args: GetPartitionCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetPartitionCommandOutput>;
  getPartition(
    args: GetPartitionCommandInput,
    cb: (err: any, data?: GetPartitionCommandOutput) => void
  ): void;
  getPartition(
    args: GetPartitionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetPartitionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPartitionIndexesCommand}
   */
  getPartitionIndexes(
    args: GetPartitionIndexesCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetPartitionIndexesCommandOutput>;
  getPartitionIndexes(
    args: GetPartitionIndexesCommandInput,
    cb: (err: any, data?: GetPartitionIndexesCommandOutput) => void
  ): void;
  getPartitionIndexes(
    args: GetPartitionIndexesCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetPartitionIndexesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPartitionsCommand}
   */
  getPartitions(
    args: GetPartitionsCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetPartitionsCommandOutput>;
  getPartitions(
    args: GetPartitionsCommandInput,
    cb: (err: any, data?: GetPartitionsCommandOutput) => void
  ): void;
  getPartitions(
    args: GetPartitionsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetPartitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPlanCommand}
   */
  getPlan(
    args: GetPlanCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetPlanCommandOutput>;
  getPlan(
    args: GetPlanCommandInput,
    cb: (err: any, data?: GetPlanCommandOutput) => void
  ): void;
  getPlan(
    args: GetPlanCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRegistryCommand}
   */
  getRegistry(
    args: GetRegistryCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetRegistryCommandOutput>;
  getRegistry(
    args: GetRegistryCommandInput,
    cb: (err: any, data?: GetRegistryCommandOutput) => void
  ): void;
  getRegistry(
    args: GetRegistryCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetRegistryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePoliciesCommand}
   */
  getResourcePolicies(): Promise<GetResourcePoliciesCommandOutput>;
  getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetResourcePoliciesCommandOutput>;
  getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    cb: (err: any, data?: GetResourcePoliciesCommandOutput) => void
  ): void;
  getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetResourcePoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSchemaCommand}
   */
  getSchema(
    args: GetSchemaCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetSchemaCommandOutput>;
  getSchema(
    args: GetSchemaCommandInput,
    cb: (err: any, data?: GetSchemaCommandOutput) => void
  ): void;
  getSchema(
    args: GetSchemaCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSchemaByDefinitionCommand}
   */
  getSchemaByDefinition(
    args: GetSchemaByDefinitionCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetSchemaByDefinitionCommandOutput>;
  getSchemaByDefinition(
    args: GetSchemaByDefinitionCommandInput,
    cb: (err: any, data?: GetSchemaByDefinitionCommandOutput) => void
  ): void;
  getSchemaByDefinition(
    args: GetSchemaByDefinitionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetSchemaByDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSchemaVersionCommand}
   */
  getSchemaVersion(): Promise<GetSchemaVersionCommandOutput>;
  getSchemaVersion(
    args: GetSchemaVersionCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetSchemaVersionCommandOutput>;
  getSchemaVersion(
    args: GetSchemaVersionCommandInput,
    cb: (err: any, data?: GetSchemaVersionCommandOutput) => void
  ): void;
  getSchemaVersion(
    args: GetSchemaVersionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetSchemaVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSchemaVersionsDiffCommand}
   */
  getSchemaVersionsDiff(
    args: GetSchemaVersionsDiffCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetSchemaVersionsDiffCommandOutput>;
  getSchemaVersionsDiff(
    args: GetSchemaVersionsDiffCommandInput,
    cb: (err: any, data?: GetSchemaVersionsDiffCommandOutput) => void
  ): void;
  getSchemaVersionsDiff(
    args: GetSchemaVersionsDiffCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetSchemaVersionsDiffCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSecurityConfigurationCommand}
   */
  getSecurityConfiguration(
    args: GetSecurityConfigurationCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetSecurityConfigurationCommandOutput>;
  getSecurityConfiguration(
    args: GetSecurityConfigurationCommandInput,
    cb: (err: any, data?: GetSecurityConfigurationCommandOutput) => void
  ): void;
  getSecurityConfiguration(
    args: GetSecurityConfigurationCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetSecurityConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSecurityConfigurationsCommand}
   */
  getSecurityConfigurations(): Promise<GetSecurityConfigurationsCommandOutput>;
  getSecurityConfigurations(
    args: GetSecurityConfigurationsCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetSecurityConfigurationsCommandOutput>;
  getSecurityConfigurations(
    args: GetSecurityConfigurationsCommandInput,
    cb: (err: any, data?: GetSecurityConfigurationsCommandOutput) => void
  ): void;
  getSecurityConfigurations(
    args: GetSecurityConfigurationsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetSecurityConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSessionCommand}
   */
  getSession(
    args: GetSessionCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetSessionCommandOutput>;
  getSession(
    args: GetSessionCommandInput,
    cb: (err: any, data?: GetSessionCommandOutput) => void
  ): void;
  getSession(
    args: GetSessionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSessionEndpointCommand}
   */
  getSessionEndpoint(
    args: GetSessionEndpointCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetSessionEndpointCommandOutput>;
  getSessionEndpoint(
    args: GetSessionEndpointCommandInput,
    cb: (err: any, data?: GetSessionEndpointCommandOutput) => void
  ): void;
  getSessionEndpoint(
    args: GetSessionEndpointCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetSessionEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStatementCommand}
   */
  getStatement(
    args: GetStatementCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetStatementCommandOutput>;
  getStatement(
    args: GetStatementCommandInput,
    cb: (err: any, data?: GetStatementCommandOutput) => void
  ): void;
  getStatement(
    args: GetStatementCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetStatementCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableCommand}
   */
  getTable(
    args: GetTableCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetTableCommandOutput>;
  getTable(
    args: GetTableCommandInput,
    cb: (err: any, data?: GetTableCommandOutput) => void
  ): void;
  getTable(
    args: GetTableCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetTableCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableOptimizerCommand}
   */
  getTableOptimizer(
    args: GetTableOptimizerCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetTableOptimizerCommandOutput>;
  getTableOptimizer(
    args: GetTableOptimizerCommandInput,
    cb: (err: any, data?: GetTableOptimizerCommandOutput) => void
  ): void;
  getTableOptimizer(
    args: GetTableOptimizerCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetTableOptimizerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTablesCommand}
   */
  getTables(
    args: GetTablesCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetTablesCommandOutput>;
  getTables(
    args: GetTablesCommandInput,
    cb: (err: any, data?: GetTablesCommandOutput) => void
  ): void;
  getTables(
    args: GetTablesCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetTablesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableVersionCommand}
   */
  getTableVersion(
    args: GetTableVersionCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetTableVersionCommandOutput>;
  getTableVersion(
    args: GetTableVersionCommandInput,
    cb: (err: any, data?: GetTableVersionCommandOutput) => void
  ): void;
  getTableVersion(
    args: GetTableVersionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetTableVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableVersionsCommand}
   */
  getTableVersions(
    args: GetTableVersionsCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetTableVersionsCommandOutput>;
  getTableVersions(
    args: GetTableVersionsCommandInput,
    cb: (err: any, data?: GetTableVersionsCommandOutput) => void
  ): void;
  getTableVersions(
    args: GetTableVersionsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetTableVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTagsCommand}
   */
  getTags(
    args: GetTagsCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetTagsCommandOutput>;
  getTags(
    args: GetTagsCommandInput,
    cb: (err: any, data?: GetTagsCommandOutput) => void
  ): void;
  getTags(
    args: GetTagsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTriggerCommand}
   */
  getTrigger(
    args: GetTriggerCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetTriggerCommandOutput>;
  getTrigger(
    args: GetTriggerCommandInput,
    cb: (err: any, data?: GetTriggerCommandOutput) => void
  ): void;
  getTrigger(
    args: GetTriggerCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetTriggerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTriggersCommand}
   */
  getTriggers(): Promise<GetTriggersCommandOutput>;
  getTriggers(
    args: GetTriggersCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetTriggersCommandOutput>;
  getTriggers(
    args: GetTriggersCommandInput,
    cb: (err: any, data?: GetTriggersCommandOutput) => void
  ): void;
  getTriggers(
    args: GetTriggersCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetTriggersCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUnfilteredPartitionMetadataCommand}
   */
  getUnfilteredPartitionMetadata(
    args: GetUnfilteredPartitionMetadataCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetUnfilteredPartitionMetadataCommandOutput>;
  getUnfilteredPartitionMetadata(
    args: GetUnfilteredPartitionMetadataCommandInput,
    cb: (err: any, data?: GetUnfilteredPartitionMetadataCommandOutput) => void
  ): void;
  getUnfilteredPartitionMetadata(
    args: GetUnfilteredPartitionMetadataCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetUnfilteredPartitionMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUnfilteredPartitionsMetadataCommand}
   */
  getUnfilteredPartitionsMetadata(
    args: GetUnfilteredPartitionsMetadataCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetUnfilteredPartitionsMetadataCommandOutput>;
  getUnfilteredPartitionsMetadata(
    args: GetUnfilteredPartitionsMetadataCommandInput,
    cb: (err: any, data?: GetUnfilteredPartitionsMetadataCommandOutput) => void
  ): void;
  getUnfilteredPartitionsMetadata(
    args: GetUnfilteredPartitionsMetadataCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetUnfilteredPartitionsMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUnfilteredTableMetadataCommand}
   */
  getUnfilteredTableMetadata(
    args: GetUnfilteredTableMetadataCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetUnfilteredTableMetadataCommandOutput>;
  getUnfilteredTableMetadata(
    args: GetUnfilteredTableMetadataCommandInput,
    cb: (err: any, data?: GetUnfilteredTableMetadataCommandOutput) => void
  ): void;
  getUnfilteredTableMetadata(
    args: GetUnfilteredTableMetadataCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetUnfilteredTableMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUsageProfileCommand}
   */
  getUsageProfile(
    args: GetUsageProfileCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetUsageProfileCommandOutput>;
  getUsageProfile(
    args: GetUsageProfileCommandInput,
    cb: (err: any, data?: GetUsageProfileCommandOutput) => void
  ): void;
  getUsageProfile(
    args: GetUsageProfileCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetUsageProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserDefinedFunctionCommand}
   */
  getUserDefinedFunction(
    args: GetUserDefinedFunctionCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetUserDefinedFunctionCommandOutput>;
  getUserDefinedFunction(
    args: GetUserDefinedFunctionCommandInput,
    cb: (err: any, data?: GetUserDefinedFunctionCommandOutput) => void
  ): void;
  getUserDefinedFunction(
    args: GetUserDefinedFunctionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetUserDefinedFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserDefinedFunctionsCommand}
   */
  getUserDefinedFunctions(
    args: GetUserDefinedFunctionsCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetUserDefinedFunctionsCommandOutput>;
  getUserDefinedFunctions(
    args: GetUserDefinedFunctionsCommandInput,
    cb: (err: any, data?: GetUserDefinedFunctionsCommandOutput) => void
  ): void;
  getUserDefinedFunctions(
    args: GetUserDefinedFunctionsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetUserDefinedFunctionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowCommand}
   */
  getWorkflow(
    args: GetWorkflowCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetWorkflowCommandOutput>;
  getWorkflow(
    args: GetWorkflowCommandInput,
    cb: (err: any, data?: GetWorkflowCommandOutput) => void
  ): void;
  getWorkflow(
    args: GetWorkflowCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowRunCommand}
   */
  getWorkflowRun(
    args: GetWorkflowRunCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetWorkflowRunCommandOutput>;
  getWorkflowRun(
    args: GetWorkflowRunCommandInput,
    cb: (err: any, data?: GetWorkflowRunCommandOutput) => void
  ): void;
  getWorkflowRun(
    args: GetWorkflowRunCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetWorkflowRunCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowRunPropertiesCommand}
   */
  getWorkflowRunProperties(
    args: GetWorkflowRunPropertiesCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetWorkflowRunPropertiesCommandOutput>;
  getWorkflowRunProperties(
    args: GetWorkflowRunPropertiesCommandInput,
    cb: (err: any, data?: GetWorkflowRunPropertiesCommandOutput) => void
  ): void;
  getWorkflowRunProperties(
    args: GetWorkflowRunPropertiesCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetWorkflowRunPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowRunsCommand}
   */
  getWorkflowRuns(
    args: GetWorkflowRunsCommandInput,
    options?: GlueRequestOptions
  ): Promise<GetWorkflowRunsCommandOutput>;
  getWorkflowRuns(
    args: GetWorkflowRunsCommandInput,
    cb: (err: any, data?: GetWorkflowRunsCommandOutput) => void
  ): void;
  getWorkflowRuns(
    args: GetWorkflowRunsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: GetWorkflowRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportCatalogToGlueCommand}
   */
  importCatalogToGlue(): Promise<ImportCatalogToGlueCommandOutput>;
  importCatalogToGlue(
    args: ImportCatalogToGlueCommandInput,
    options?: GlueRequestOptions
  ): Promise<ImportCatalogToGlueCommandOutput>;
  importCatalogToGlue(
    args: ImportCatalogToGlueCommandInput,
    cb: (err: any, data?: ImportCatalogToGlueCommandOutput) => void
  ): void;
  importCatalogToGlue(
    args: ImportCatalogToGlueCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ImportCatalogToGlueCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssetTypesCommand}
   */
  listAssetTypes(): Promise<ListAssetTypesCommandOutput>;
  listAssetTypes(
    args: ListAssetTypesCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListAssetTypesCommandOutput>;
  listAssetTypes(
    args: ListAssetTypesCommandInput,
    cb: (err: any, data?: ListAssetTypesCommandOutput) => void
  ): void;
  listAssetTypes(
    args: ListAssetTypesCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListAssetTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBlueprintsCommand}
   */
  listBlueprints(): Promise<ListBlueprintsCommandOutput>;
  listBlueprints(
    args: ListBlueprintsCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListBlueprintsCommandOutput>;
  listBlueprints(
    args: ListBlueprintsCommandInput,
    cb: (err: any, data?: ListBlueprintsCommandOutput) => void
  ): void;
  listBlueprints(
    args: ListBlueprintsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListBlueprintsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListColumnStatisticsTaskRunsCommand}
   */
  listColumnStatisticsTaskRuns(): Promise<ListColumnStatisticsTaskRunsCommandOutput>;
  listColumnStatisticsTaskRuns(
    args: ListColumnStatisticsTaskRunsCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListColumnStatisticsTaskRunsCommandOutput>;
  listColumnStatisticsTaskRuns(
    args: ListColumnStatisticsTaskRunsCommandInput,
    cb: (err: any, data?: ListColumnStatisticsTaskRunsCommandOutput) => void
  ): void;
  listColumnStatisticsTaskRuns(
    args: ListColumnStatisticsTaskRunsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListColumnStatisticsTaskRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectionTypesCommand}
   */
  listConnectionTypes(): Promise<ListConnectionTypesCommandOutput>;
  listConnectionTypes(
    args: ListConnectionTypesCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListConnectionTypesCommandOutput>;
  listConnectionTypes(
    args: ListConnectionTypesCommandInput,
    cb: (err: any, data?: ListConnectionTypesCommandOutput) => void
  ): void;
  listConnectionTypes(
    args: ListConnectionTypesCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListConnectionTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCrawlersCommand}
   */
  listCrawlers(): Promise<ListCrawlersCommandOutput>;
  listCrawlers(
    args: ListCrawlersCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListCrawlersCommandOutput>;
  listCrawlers(
    args: ListCrawlersCommandInput,
    cb: (err: any, data?: ListCrawlersCommandOutput) => void
  ): void;
  listCrawlers(
    args: ListCrawlersCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListCrawlersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCrawlsCommand}
   */
  listCrawls(
    args: ListCrawlsCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListCrawlsCommandOutput>;
  listCrawls(
    args: ListCrawlsCommandInput,
    cb: (err: any, data?: ListCrawlsCommandOutput) => void
  ): void;
  listCrawls(
    args: ListCrawlsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListCrawlsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomEntityTypesCommand}
   */
  listCustomEntityTypes(): Promise<ListCustomEntityTypesCommandOutput>;
  listCustomEntityTypes(
    args: ListCustomEntityTypesCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListCustomEntityTypesCommandOutput>;
  listCustomEntityTypes(
    args: ListCustomEntityTypesCommandInput,
    cb: (err: any, data?: ListCustomEntityTypesCommandOutput) => void
  ): void;
  listCustomEntityTypes(
    args: ListCustomEntityTypesCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListCustomEntityTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataQualityResultsCommand}
   */
  listDataQualityResults(): Promise<ListDataQualityResultsCommandOutput>;
  listDataQualityResults(
    args: ListDataQualityResultsCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListDataQualityResultsCommandOutput>;
  listDataQualityResults(
    args: ListDataQualityResultsCommandInput,
    cb: (err: any, data?: ListDataQualityResultsCommandOutput) => void
  ): void;
  listDataQualityResults(
    args: ListDataQualityResultsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListDataQualityResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataQualityRuleRecommendationRunsCommand}
   */
  listDataQualityRuleRecommendationRuns(): Promise<ListDataQualityRuleRecommendationRunsCommandOutput>;
  listDataQualityRuleRecommendationRuns(
    args: ListDataQualityRuleRecommendationRunsCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListDataQualityRuleRecommendationRunsCommandOutput>;
  listDataQualityRuleRecommendationRuns(
    args: ListDataQualityRuleRecommendationRunsCommandInput,
    cb: (err: any, data?: ListDataQualityRuleRecommendationRunsCommandOutput) => void
  ): void;
  listDataQualityRuleRecommendationRuns(
    args: ListDataQualityRuleRecommendationRunsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListDataQualityRuleRecommendationRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataQualityRulesetEvaluationRunsCommand}
   */
  listDataQualityRulesetEvaluationRuns(): Promise<ListDataQualityRulesetEvaluationRunsCommandOutput>;
  listDataQualityRulesetEvaluationRuns(
    args: ListDataQualityRulesetEvaluationRunsCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListDataQualityRulesetEvaluationRunsCommandOutput>;
  listDataQualityRulesetEvaluationRuns(
    args: ListDataQualityRulesetEvaluationRunsCommandInput,
    cb: (err: any, data?: ListDataQualityRulesetEvaluationRunsCommandOutput) => void
  ): void;
  listDataQualityRulesetEvaluationRuns(
    args: ListDataQualityRulesetEvaluationRunsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListDataQualityRulesetEvaluationRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataQualityRulesetsCommand}
   */
  listDataQualityRulesets(): Promise<ListDataQualityRulesetsCommandOutput>;
  listDataQualityRulesets(
    args: ListDataQualityRulesetsCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListDataQualityRulesetsCommandOutput>;
  listDataQualityRulesets(
    args: ListDataQualityRulesetsCommandInput,
    cb: (err: any, data?: ListDataQualityRulesetsCommandOutput) => void
  ): void;
  listDataQualityRulesets(
    args: ListDataQualityRulesetsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListDataQualityRulesetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataQualityStatisticAnnotationsCommand}
   */
  listDataQualityStatisticAnnotations(): Promise<ListDataQualityStatisticAnnotationsCommandOutput>;
  listDataQualityStatisticAnnotations(
    args: ListDataQualityStatisticAnnotationsCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListDataQualityStatisticAnnotationsCommandOutput>;
  listDataQualityStatisticAnnotations(
    args: ListDataQualityStatisticAnnotationsCommandInput,
    cb: (err: any, data?: ListDataQualityStatisticAnnotationsCommandOutput) => void
  ): void;
  listDataQualityStatisticAnnotations(
    args: ListDataQualityStatisticAnnotationsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListDataQualityStatisticAnnotationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataQualityStatisticsCommand}
   */
  listDataQualityStatistics(): Promise<ListDataQualityStatisticsCommandOutput>;
  listDataQualityStatistics(
    args: ListDataQualityStatisticsCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListDataQualityStatisticsCommandOutput>;
  listDataQualityStatistics(
    args: ListDataQualityStatisticsCommandInput,
    cb: (err: any, data?: ListDataQualityStatisticsCommandOutput) => void
  ): void;
  listDataQualityStatistics(
    args: ListDataQualityStatisticsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListDataQualityStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDevEndpointsCommand}
   */
  listDevEndpoints(): Promise<ListDevEndpointsCommandOutput>;
  listDevEndpoints(
    args: ListDevEndpointsCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListDevEndpointsCommandOutput>;
  listDevEndpoints(
    args: ListDevEndpointsCommandInput,
    cb: (err: any, data?: ListDevEndpointsCommandOutput) => void
  ): void;
  listDevEndpoints(
    args: ListDevEndpointsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListDevEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEntitiesCommand}
   */
  listEntities(): Promise<ListEntitiesCommandOutput>;
  listEntities(
    args: ListEntitiesCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListEntitiesCommandOutput>;
  listEntities(
    args: ListEntitiesCommandInput,
    cb: (err: any, data?: ListEntitiesCommandOutput) => void
  ): void;
  listEntities(
    args: ListEntitiesCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListEntitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFormTypesCommand}
   */
  listFormTypes(): Promise<ListFormTypesCommandOutput>;
  listFormTypes(
    args: ListFormTypesCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListFormTypesCommandOutput>;
  listFormTypes(
    args: ListFormTypesCommandInput,
    cb: (err: any, data?: ListFormTypesCommandOutput) => void
  ): void;
  listFormTypes(
    args: ListFormTypesCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListFormTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGlossariesCommand}
   */
  listGlossaries(): Promise<ListGlossariesCommandOutput>;
  listGlossaries(
    args: ListGlossariesCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListGlossariesCommandOutput>;
  listGlossaries(
    args: ListGlossariesCommandInput,
    cb: (err: any, data?: ListGlossariesCommandOutput) => void
  ): void;
  listGlossaries(
    args: ListGlossariesCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListGlossariesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGlossaryTermsCommand}
   */
  listGlossaryTerms(
    args: ListGlossaryTermsCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListGlossaryTermsCommandOutput>;
  listGlossaryTerms(
    args: ListGlossaryTermsCommandInput,
    cb: (err: any, data?: ListGlossaryTermsCommandOutput) => void
  ): void;
  listGlossaryTerms(
    args: ListGlossaryTermsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListGlossaryTermsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIntegrationResourcePropertiesCommand}
   */
  listIntegrationResourceProperties(): Promise<ListIntegrationResourcePropertiesCommandOutput>;
  listIntegrationResourceProperties(
    args: ListIntegrationResourcePropertiesCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListIntegrationResourcePropertiesCommandOutput>;
  listIntegrationResourceProperties(
    args: ListIntegrationResourcePropertiesCommandInput,
    cb: (err: any, data?: ListIntegrationResourcePropertiesCommandOutput) => void
  ): void;
  listIntegrationResourceProperties(
    args: ListIntegrationResourcePropertiesCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListIntegrationResourcePropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIntegrationTablePropertiesCommand}
   */
  listIntegrationTableProperties(): Promise<ListIntegrationTablePropertiesCommandOutput>;
  listIntegrationTableProperties(
    args: ListIntegrationTablePropertiesCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListIntegrationTablePropertiesCommandOutput>;
  listIntegrationTableProperties(
    args: ListIntegrationTablePropertiesCommandInput,
    cb: (err: any, data?: ListIntegrationTablePropertiesCommandOutput) => void
  ): void;
  listIntegrationTableProperties(
    args: ListIntegrationTablePropertiesCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListIntegrationTablePropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIterableFormsCommand}
   */
  listIterableForms(
    args: ListIterableFormsCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListIterableFormsCommandOutput>;
  listIterableForms(
    args: ListIterableFormsCommandInput,
    cb: (err: any, data?: ListIterableFormsCommandOutput) => void
  ): void;
  listIterableForms(
    args: ListIterableFormsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListIterableFormsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobsCommand}
   */
  listJobs(): Promise<ListJobsCommandOutput>;
  listJobs(
    args: ListJobsCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListJobsCommandOutput>;
  listJobs(
    args: ListJobsCommandInput,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;
  listJobs(
    args: ListJobsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMaterializedViewRefreshTaskRunsCommand}
   */
  listMaterializedViewRefreshTaskRuns(
    args: ListMaterializedViewRefreshTaskRunsCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListMaterializedViewRefreshTaskRunsCommandOutput>;
  listMaterializedViewRefreshTaskRuns(
    args: ListMaterializedViewRefreshTaskRunsCommandInput,
    cb: (err: any, data?: ListMaterializedViewRefreshTaskRunsCommandOutput) => void
  ): void;
  listMaterializedViewRefreshTaskRuns(
    args: ListMaterializedViewRefreshTaskRunsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListMaterializedViewRefreshTaskRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMLTransformsCommand}
   */
  listMLTransforms(): Promise<ListMLTransformsCommandOutput>;
  listMLTransforms(
    args: ListMLTransformsCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListMLTransformsCommandOutput>;
  listMLTransforms(
    args: ListMLTransformsCommandInput,
    cb: (err: any, data?: ListMLTransformsCommandOutput) => void
  ): void;
  listMLTransforms(
    args: ListMLTransformsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListMLTransformsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRegistriesCommand}
   */
  listRegistries(): Promise<ListRegistriesCommandOutput>;
  listRegistries(
    args: ListRegistriesCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListRegistriesCommandOutput>;
  listRegistries(
    args: ListRegistriesCommandInput,
    cb: (err: any, data?: ListRegistriesCommandOutput) => void
  ): void;
  listRegistries(
    args: ListRegistriesCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListRegistriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSchemasCommand}
   */
  listSchemas(): Promise<ListSchemasCommandOutput>;
  listSchemas(
    args: ListSchemasCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListSchemasCommandOutput>;
  listSchemas(
    args: ListSchemasCommandInput,
    cb: (err: any, data?: ListSchemasCommandOutput) => void
  ): void;
  listSchemas(
    args: ListSchemasCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListSchemasCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSchemaVersionsCommand}
   */
  listSchemaVersions(
    args: ListSchemaVersionsCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListSchemaVersionsCommandOutput>;
  listSchemaVersions(
    args: ListSchemaVersionsCommandInput,
    cb: (err: any, data?: ListSchemaVersionsCommandOutput) => void
  ): void;
  listSchemaVersions(
    args: ListSchemaVersionsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListSchemaVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSessionsCommand}
   */
  listSessions(): Promise<ListSessionsCommandOutput>;
  listSessions(
    args: ListSessionsCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListSessionsCommandOutput>;
  listSessions(
    args: ListSessionsCommandInput,
    cb: (err: any, data?: ListSessionsCommandOutput) => void
  ): void;
  listSessions(
    args: ListSessionsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStatementsCommand}
   */
  listStatements(
    args: ListStatementsCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListStatementsCommandOutput>;
  listStatements(
    args: ListStatementsCommandInput,
    cb: (err: any, data?: ListStatementsCommandOutput) => void
  ): void;
  listStatements(
    args: ListStatementsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListStatementsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTableOptimizerRunsCommand}
   */
  listTableOptimizerRuns(
    args: ListTableOptimizerRunsCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListTableOptimizerRunsCommandOutput>;
  listTableOptimizerRuns(
    args: ListTableOptimizerRunsCommandInput,
    cb: (err: any, data?: ListTableOptimizerRunsCommandOutput) => void
  ): void;
  listTableOptimizerRuns(
    args: ListTableOptimizerRunsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListTableOptimizerRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTriggersCommand}
   */
  listTriggers(): Promise<ListTriggersCommandOutput>;
  listTriggers(
    args: ListTriggersCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListTriggersCommandOutput>;
  listTriggers(
    args: ListTriggersCommandInput,
    cb: (err: any, data?: ListTriggersCommandOutput) => void
  ): void;
  listTriggers(
    args: ListTriggersCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListTriggersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUsageProfilesCommand}
   */
  listUsageProfiles(): Promise<ListUsageProfilesCommandOutput>;
  listUsageProfiles(
    args: ListUsageProfilesCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListUsageProfilesCommandOutput>;
  listUsageProfiles(
    args: ListUsageProfilesCommandInput,
    cb: (err: any, data?: ListUsageProfilesCommandOutput) => void
  ): void;
  listUsageProfiles(
    args: ListUsageProfilesCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListUsageProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkflowsCommand}
   */
  listWorkflows(): Promise<ListWorkflowsCommandOutput>;
  listWorkflows(
    args: ListWorkflowsCommandInput,
    options?: GlueRequestOptions
  ): Promise<ListWorkflowsCommandOutput>;
  listWorkflows(
    args: ListWorkflowsCommandInput,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;
  listWorkflows(
    args: ListWorkflowsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyIntegrationCommand}
   */
  modifyIntegration(
    args: ModifyIntegrationCommandInput,
    options?: GlueRequestOptions
  ): Promise<ModifyIntegrationCommandOutput>;
  modifyIntegration(
    args: ModifyIntegrationCommandInput,
    cb: (err: any, data?: ModifyIntegrationCommandOutput) => void
  ): void;
  modifyIntegration(
    args: ModifyIntegrationCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ModifyIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAssetCommand}
   */
  putAsset(
    args: PutAssetCommandInput,
    options?: GlueRequestOptions
  ): Promise<PutAssetCommandOutput>;
  putAsset(
    args: PutAssetCommandInput,
    cb: (err: any, data?: PutAssetCommandOutput) => void
  ): void;
  putAsset(
    args: PutAssetCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: PutAssetCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAssetTypeCommand}
   */
  putAssetType(
    args: PutAssetTypeCommandInput,
    options?: GlueRequestOptions
  ): Promise<PutAssetTypeCommandOutput>;
  putAssetType(
    args: PutAssetTypeCommandInput,
    cb: (err: any, data?: PutAssetTypeCommandOutput) => void
  ): void;
  putAssetType(
    args: PutAssetTypeCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: PutAssetTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAttachmentCommand}
   */
  putAttachment(
    args: PutAttachmentCommandInput,
    options?: GlueRequestOptions
  ): Promise<PutAttachmentCommandOutput>;
  putAttachment(
    args: PutAttachmentCommandInput,
    cb: (err: any, data?: PutAttachmentCommandOutput) => void
  ): void;
  putAttachment(
    args: PutAttachmentCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: PutAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDataCatalogEncryptionSettingsCommand}
   */
  putDataCatalogEncryptionSettings(
    args: PutDataCatalogEncryptionSettingsCommandInput,
    options?: GlueRequestOptions
  ): Promise<PutDataCatalogEncryptionSettingsCommandOutput>;
  putDataCatalogEncryptionSettings(
    args: PutDataCatalogEncryptionSettingsCommandInput,
    cb: (err: any, data?: PutDataCatalogEncryptionSettingsCommandOutput) => void
  ): void;
  putDataCatalogEncryptionSettings(
    args: PutDataCatalogEncryptionSettingsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: PutDataCatalogEncryptionSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDataCatalogExportConfigurationCommand}
   */
  putDataCatalogExportConfiguration(
    args: PutDataCatalogExportConfigurationCommandInput,
    options?: GlueRequestOptions
  ): Promise<PutDataCatalogExportConfigurationCommandOutput>;
  putDataCatalogExportConfiguration(
    args: PutDataCatalogExportConfigurationCommandInput,
    cb: (err: any, data?: PutDataCatalogExportConfigurationCommandOutput) => void
  ): void;
  putDataCatalogExportConfiguration(
    args: PutDataCatalogExportConfigurationCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: PutDataCatalogExportConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDataQualityProfileAnnotationCommand}
   */
  putDataQualityProfileAnnotation(
    args: PutDataQualityProfileAnnotationCommandInput,
    options?: GlueRequestOptions
  ): Promise<PutDataQualityProfileAnnotationCommandOutput>;
  putDataQualityProfileAnnotation(
    args: PutDataQualityProfileAnnotationCommandInput,
    cb: (err: any, data?: PutDataQualityProfileAnnotationCommandOutput) => void
  ): void;
  putDataQualityProfileAnnotation(
    args: PutDataQualityProfileAnnotationCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: PutDataQualityProfileAnnotationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutFormTypeCommand}
   */
  putFormType(
    args: PutFormTypeCommandInput,
    options?: GlueRequestOptions
  ): Promise<PutFormTypeCommandOutput>;
  putFormType(
    args: PutFormTypeCommandInput,
    cb: (err: any, data?: PutFormTypeCommandOutput) => void
  ): void;
  putFormType(
    args: PutFormTypeCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: PutFormTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: GlueRequestOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutSchemaVersionMetadataCommand}
   */
  putSchemaVersionMetadata(
    args: PutSchemaVersionMetadataCommandInput,
    options?: GlueRequestOptions
  ): Promise<PutSchemaVersionMetadataCommandOutput>;
  putSchemaVersionMetadata(
    args: PutSchemaVersionMetadataCommandInput,
    cb: (err: any, data?: PutSchemaVersionMetadataCommandOutput) => void
  ): void;
  putSchemaVersionMetadata(
    args: PutSchemaVersionMetadataCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: PutSchemaVersionMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link PutWorkflowRunPropertiesCommand}
   */
  putWorkflowRunProperties(
    args: PutWorkflowRunPropertiesCommandInput,
    options?: GlueRequestOptions
  ): Promise<PutWorkflowRunPropertiesCommandOutput>;
  putWorkflowRunProperties(
    args: PutWorkflowRunPropertiesCommandInput,
    cb: (err: any, data?: PutWorkflowRunPropertiesCommandOutput) => void
  ): void;
  putWorkflowRunProperties(
    args: PutWorkflowRunPropertiesCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: PutWorkflowRunPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link QuerySchemaVersionMetadataCommand}
   */
  querySchemaVersionMetadata(): Promise<QuerySchemaVersionMetadataCommandOutput>;
  querySchemaVersionMetadata(
    args: QuerySchemaVersionMetadataCommandInput,
    options?: GlueRequestOptions
  ): Promise<QuerySchemaVersionMetadataCommandOutput>;
  querySchemaVersionMetadata(
    args: QuerySchemaVersionMetadataCommandInput,
    cb: (err: any, data?: QuerySchemaVersionMetadataCommandOutput) => void
  ): void;
  querySchemaVersionMetadata(
    args: QuerySchemaVersionMetadataCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: QuerySchemaVersionMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterConnectionTypeCommand}
   */
  registerConnectionType(
    args: RegisterConnectionTypeCommandInput,
    options?: GlueRequestOptions
  ): Promise<RegisterConnectionTypeCommandOutput>;
  registerConnectionType(
    args: RegisterConnectionTypeCommandInput,
    cb: (err: any, data?: RegisterConnectionTypeCommandOutput) => void
  ): void;
  registerConnectionType(
    args: RegisterConnectionTypeCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: RegisterConnectionTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterSchemaVersionCommand}
   */
  registerSchemaVersion(
    args: RegisterSchemaVersionCommandInput,
    options?: GlueRequestOptions
  ): Promise<RegisterSchemaVersionCommandOutput>;
  registerSchemaVersion(
    args: RegisterSchemaVersionCommandInput,
    cb: (err: any, data?: RegisterSchemaVersionCommandOutput) => void
  ): void;
  registerSchemaVersion(
    args: RegisterSchemaVersionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: RegisterSchemaVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveSchemaVersionMetadataCommand}
   */
  removeSchemaVersionMetadata(
    args: RemoveSchemaVersionMetadataCommandInput,
    options?: GlueRequestOptions
  ): Promise<RemoveSchemaVersionMetadataCommandOutput>;
  removeSchemaVersionMetadata(
    args: RemoveSchemaVersionMetadataCommandInput,
    cb: (err: any, data?: RemoveSchemaVersionMetadataCommandOutput) => void
  ): void;
  removeSchemaVersionMetadata(
    args: RemoveSchemaVersionMetadataCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: RemoveSchemaVersionMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetJobBookmarkCommand}
   */
  resetJobBookmark(
    args: ResetJobBookmarkCommandInput,
    options?: GlueRequestOptions
  ): Promise<ResetJobBookmarkCommandOutput>;
  resetJobBookmark(
    args: ResetJobBookmarkCommandInput,
    cb: (err: any, data?: ResetJobBookmarkCommandOutput) => void
  ): void;
  resetJobBookmark(
    args: ResetJobBookmarkCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ResetJobBookmarkCommandOutput) => void
  ): void;

  /**
   * @see {@link ResumeWorkflowRunCommand}
   */
  resumeWorkflowRun(
    args: ResumeWorkflowRunCommandInput,
    options?: GlueRequestOptions
  ): Promise<ResumeWorkflowRunCommandOutput>;
  resumeWorkflowRun(
    args: ResumeWorkflowRunCommandInput,
    cb: (err: any, data?: ResumeWorkflowRunCommandOutput) => void
  ): void;
  resumeWorkflowRun(
    args: ResumeWorkflowRunCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: ResumeWorkflowRunCommandOutput) => void
  ): void;

  /**
   * @see {@link RunStatementCommand}
   */
  runStatement(
    args: RunStatementCommandInput,
    options?: GlueRequestOptions
  ): Promise<RunStatementCommandOutput>;
  runStatement(
    args: RunStatementCommandInput,
    cb: (err: any, data?: RunStatementCommandOutput) => void
  ): void;
  runStatement(
    args: RunStatementCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: RunStatementCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchAssetsCommand}
   */
  searchAssets(): Promise<SearchAssetsCommandOutput>;
  searchAssets(
    args: SearchAssetsCommandInput,
    options?: GlueRequestOptions
  ): Promise<SearchAssetsCommandOutput>;
  searchAssets(
    args: SearchAssetsCommandInput,
    cb: (err: any, data?: SearchAssetsCommandOutput) => void
  ): void;
  searchAssets(
    args: SearchAssetsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: SearchAssetsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchTablesCommand}
   */
  searchTables(): Promise<SearchTablesCommandOutput>;
  searchTables(
    args: SearchTablesCommandInput,
    options?: GlueRequestOptions
  ): Promise<SearchTablesCommandOutput>;
  searchTables(
    args: SearchTablesCommandInput,
    cb: (err: any, data?: SearchTablesCommandOutput) => void
  ): void;
  searchTables(
    args: SearchTablesCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: SearchTablesCommandOutput) => void
  ): void;

  /**
   * @see {@link StartBlueprintRunCommand}
   */
  startBlueprintRun(
    args: StartBlueprintRunCommandInput,
    options?: GlueRequestOptions
  ): Promise<StartBlueprintRunCommandOutput>;
  startBlueprintRun(
    args: StartBlueprintRunCommandInput,
    cb: (err: any, data?: StartBlueprintRunCommandOutput) => void
  ): void;
  startBlueprintRun(
    args: StartBlueprintRunCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: StartBlueprintRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StartColumnStatisticsTaskRunCommand}
   */
  startColumnStatisticsTaskRun(
    args: StartColumnStatisticsTaskRunCommandInput,
    options?: GlueRequestOptions
  ): Promise<StartColumnStatisticsTaskRunCommandOutput>;
  startColumnStatisticsTaskRun(
    args: StartColumnStatisticsTaskRunCommandInput,
    cb: (err: any, data?: StartColumnStatisticsTaskRunCommandOutput) => void
  ): void;
  startColumnStatisticsTaskRun(
    args: StartColumnStatisticsTaskRunCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: StartColumnStatisticsTaskRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StartColumnStatisticsTaskRunScheduleCommand}
   */
  startColumnStatisticsTaskRunSchedule(
    args: StartColumnStatisticsTaskRunScheduleCommandInput,
    options?: GlueRequestOptions
  ): Promise<StartColumnStatisticsTaskRunScheduleCommandOutput>;
  startColumnStatisticsTaskRunSchedule(
    args: StartColumnStatisticsTaskRunScheduleCommandInput,
    cb: (err: any, data?: StartColumnStatisticsTaskRunScheduleCommandOutput) => void
  ): void;
  startColumnStatisticsTaskRunSchedule(
    args: StartColumnStatisticsTaskRunScheduleCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: StartColumnStatisticsTaskRunScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCrawlerCommand}
   */
  startCrawler(
    args: StartCrawlerCommandInput,
    options?: GlueRequestOptions
  ): Promise<StartCrawlerCommandOutput>;
  startCrawler(
    args: StartCrawlerCommandInput,
    cb: (err: any, data?: StartCrawlerCommandOutput) => void
  ): void;
  startCrawler(
    args: StartCrawlerCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: StartCrawlerCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCrawlerScheduleCommand}
   */
  startCrawlerSchedule(
    args: StartCrawlerScheduleCommandInput,
    options?: GlueRequestOptions
  ): Promise<StartCrawlerScheduleCommandOutput>;
  startCrawlerSchedule(
    args: StartCrawlerScheduleCommandInput,
    cb: (err: any, data?: StartCrawlerScheduleCommandOutput) => void
  ): void;
  startCrawlerSchedule(
    args: StartCrawlerScheduleCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: StartCrawlerScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDataQualityRuleRecommendationRunCommand}
   */
  startDataQualityRuleRecommendationRun(
    args: StartDataQualityRuleRecommendationRunCommandInput,
    options?: GlueRequestOptions
  ): Promise<StartDataQualityRuleRecommendationRunCommandOutput>;
  startDataQualityRuleRecommendationRun(
    args: StartDataQualityRuleRecommendationRunCommandInput,
    cb: (err: any, data?: StartDataQualityRuleRecommendationRunCommandOutput) => void
  ): void;
  startDataQualityRuleRecommendationRun(
    args: StartDataQualityRuleRecommendationRunCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: StartDataQualityRuleRecommendationRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDataQualityRulesetEvaluationRunCommand}
   */
  startDataQualityRulesetEvaluationRun(
    args: StartDataQualityRulesetEvaluationRunCommandInput,
    options?: GlueRequestOptions
  ): Promise<StartDataQualityRulesetEvaluationRunCommandOutput>;
  startDataQualityRulesetEvaluationRun(
    args: StartDataQualityRulesetEvaluationRunCommandInput,
    cb: (err: any, data?: StartDataQualityRulesetEvaluationRunCommandOutput) => void
  ): void;
  startDataQualityRulesetEvaluationRun(
    args: StartDataQualityRulesetEvaluationRunCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: StartDataQualityRulesetEvaluationRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StartExportLabelsTaskRunCommand}
   */
  startExportLabelsTaskRun(
    args: StartExportLabelsTaskRunCommandInput,
    options?: GlueRequestOptions
  ): Promise<StartExportLabelsTaskRunCommandOutput>;
  startExportLabelsTaskRun(
    args: StartExportLabelsTaskRunCommandInput,
    cb: (err: any, data?: StartExportLabelsTaskRunCommandOutput) => void
  ): void;
  startExportLabelsTaskRun(
    args: StartExportLabelsTaskRunCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: StartExportLabelsTaskRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StartImportLabelsTaskRunCommand}
   */
  startImportLabelsTaskRun(
    args: StartImportLabelsTaskRunCommandInput,
    options?: GlueRequestOptions
  ): Promise<StartImportLabelsTaskRunCommandOutput>;
  startImportLabelsTaskRun(
    args: StartImportLabelsTaskRunCommandInput,
    cb: (err: any, data?: StartImportLabelsTaskRunCommandOutput) => void
  ): void;
  startImportLabelsTaskRun(
    args: StartImportLabelsTaskRunCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: StartImportLabelsTaskRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StartJobRunCommand}
   */
  startJobRun(
    args: StartJobRunCommandInput,
    options?: GlueRequestOptions
  ): Promise<StartJobRunCommandOutput>;
  startJobRun(
    args: StartJobRunCommandInput,
    cb: (err: any, data?: StartJobRunCommandOutput) => void
  ): void;
  startJobRun(
    args: StartJobRunCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: StartJobRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMaterializedViewRefreshTaskRunCommand}
   */
  startMaterializedViewRefreshTaskRun(
    args: StartMaterializedViewRefreshTaskRunCommandInput,
    options?: GlueRequestOptions
  ): Promise<StartMaterializedViewRefreshTaskRunCommandOutput>;
  startMaterializedViewRefreshTaskRun(
    args: StartMaterializedViewRefreshTaskRunCommandInput,
    cb: (err: any, data?: StartMaterializedViewRefreshTaskRunCommandOutput) => void
  ): void;
  startMaterializedViewRefreshTaskRun(
    args: StartMaterializedViewRefreshTaskRunCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: StartMaterializedViewRefreshTaskRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMLEvaluationTaskRunCommand}
   */
  startMLEvaluationTaskRun(
    args: StartMLEvaluationTaskRunCommandInput,
    options?: GlueRequestOptions
  ): Promise<StartMLEvaluationTaskRunCommandOutput>;
  startMLEvaluationTaskRun(
    args: StartMLEvaluationTaskRunCommandInput,
    cb: (err: any, data?: StartMLEvaluationTaskRunCommandOutput) => void
  ): void;
  startMLEvaluationTaskRun(
    args: StartMLEvaluationTaskRunCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: StartMLEvaluationTaskRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMLLabelingSetGenerationTaskRunCommand}
   */
  startMLLabelingSetGenerationTaskRun(
    args: StartMLLabelingSetGenerationTaskRunCommandInput,
    options?: GlueRequestOptions
  ): Promise<StartMLLabelingSetGenerationTaskRunCommandOutput>;
  startMLLabelingSetGenerationTaskRun(
    args: StartMLLabelingSetGenerationTaskRunCommandInput,
    cb: (err: any, data?: StartMLLabelingSetGenerationTaskRunCommandOutput) => void
  ): void;
  startMLLabelingSetGenerationTaskRun(
    args: StartMLLabelingSetGenerationTaskRunCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: StartMLLabelingSetGenerationTaskRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTriggerCommand}
   */
  startTrigger(
    args: StartTriggerCommandInput,
    options?: GlueRequestOptions
  ): Promise<StartTriggerCommandOutput>;
  startTrigger(
    args: StartTriggerCommandInput,
    cb: (err: any, data?: StartTriggerCommandOutput) => void
  ): void;
  startTrigger(
    args: StartTriggerCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: StartTriggerCommandOutput) => void
  ): void;

  /**
   * @see {@link StartWorkflowRunCommand}
   */
  startWorkflowRun(
    args: StartWorkflowRunCommandInput,
    options?: GlueRequestOptions
  ): Promise<StartWorkflowRunCommandOutput>;
  startWorkflowRun(
    args: StartWorkflowRunCommandInput,
    cb: (err: any, data?: StartWorkflowRunCommandOutput) => void
  ): void;
  startWorkflowRun(
    args: StartWorkflowRunCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: StartWorkflowRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StopColumnStatisticsTaskRunCommand}
   */
  stopColumnStatisticsTaskRun(
    args: StopColumnStatisticsTaskRunCommandInput,
    options?: GlueRequestOptions
  ): Promise<StopColumnStatisticsTaskRunCommandOutput>;
  stopColumnStatisticsTaskRun(
    args: StopColumnStatisticsTaskRunCommandInput,
    cb: (err: any, data?: StopColumnStatisticsTaskRunCommandOutput) => void
  ): void;
  stopColumnStatisticsTaskRun(
    args: StopColumnStatisticsTaskRunCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: StopColumnStatisticsTaskRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StopColumnStatisticsTaskRunScheduleCommand}
   */
  stopColumnStatisticsTaskRunSchedule(
    args: StopColumnStatisticsTaskRunScheduleCommandInput,
    options?: GlueRequestOptions
  ): Promise<StopColumnStatisticsTaskRunScheduleCommandOutput>;
  stopColumnStatisticsTaskRunSchedule(
    args: StopColumnStatisticsTaskRunScheduleCommandInput,
    cb: (err: any, data?: StopColumnStatisticsTaskRunScheduleCommandOutput) => void
  ): void;
  stopColumnStatisticsTaskRunSchedule(
    args: StopColumnStatisticsTaskRunScheduleCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: StopColumnStatisticsTaskRunScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link StopCrawlerCommand}
   */
  stopCrawler(
    args: StopCrawlerCommandInput,
    options?: GlueRequestOptions
  ): Promise<StopCrawlerCommandOutput>;
  stopCrawler(
    args: StopCrawlerCommandInput,
    cb: (err: any, data?: StopCrawlerCommandOutput) => void
  ): void;
  stopCrawler(
    args: StopCrawlerCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: StopCrawlerCommandOutput) => void
  ): void;

  /**
   * @see {@link StopCrawlerScheduleCommand}
   */
  stopCrawlerSchedule(
    args: StopCrawlerScheduleCommandInput,
    options?: GlueRequestOptions
  ): Promise<StopCrawlerScheduleCommandOutput>;
  stopCrawlerSchedule(
    args: StopCrawlerScheduleCommandInput,
    cb: (err: any, data?: StopCrawlerScheduleCommandOutput) => void
  ): void;
  stopCrawlerSchedule(
    args: StopCrawlerScheduleCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: StopCrawlerScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link StopMaterializedViewRefreshTaskRunCommand}
   */
  stopMaterializedViewRefreshTaskRun(
    args: StopMaterializedViewRefreshTaskRunCommandInput,
    options?: GlueRequestOptions
  ): Promise<StopMaterializedViewRefreshTaskRunCommandOutput>;
  stopMaterializedViewRefreshTaskRun(
    args: StopMaterializedViewRefreshTaskRunCommandInput,
    cb: (err: any, data?: StopMaterializedViewRefreshTaskRunCommandOutput) => void
  ): void;
  stopMaterializedViewRefreshTaskRun(
    args: StopMaterializedViewRefreshTaskRunCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: StopMaterializedViewRefreshTaskRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StopSessionCommand}
   */
  stopSession(
    args: StopSessionCommandInput,
    options?: GlueRequestOptions
  ): Promise<StopSessionCommandOutput>;
  stopSession(
    args: StopSessionCommandInput,
    cb: (err: any, data?: StopSessionCommandOutput) => void
  ): void;
  stopSession(
    args: StopSessionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: StopSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopTriggerCommand}
   */
  stopTrigger(
    args: StopTriggerCommandInput,
    options?: GlueRequestOptions
  ): Promise<StopTriggerCommandOutput>;
  stopTrigger(
    args: StopTriggerCommandInput,
    cb: (err: any, data?: StopTriggerCommandOutput) => void
  ): void;
  stopTrigger(
    args: StopTriggerCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: StopTriggerCommandOutput) => void
  ): void;

  /**
   * @see {@link StopWorkflowRunCommand}
   */
  stopWorkflowRun(
    args: StopWorkflowRunCommandInput,
    options?: GlueRequestOptions
  ): Promise<StopWorkflowRunCommandOutput>;
  stopWorkflowRun(
    args: StopWorkflowRunCommandInput,
    cb: (err: any, data?: StopWorkflowRunCommandOutput) => void
  ): void;
  stopWorkflowRun(
    args: StopWorkflowRunCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: StopWorkflowRunCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: GlueRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TestConnectionCommand}
   */
  testConnection(): Promise<TestConnectionCommandOutput>;
  testConnection(
    args: TestConnectionCommandInput,
    options?: GlueRequestOptions
  ): Promise<TestConnectionCommandOutput>;
  testConnection(
    args: TestConnectionCommandInput,
    cb: (err: any, data?: TestConnectionCommandOutput) => void
  ): void;
  testConnection(
    args: TestConnectionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: TestConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: GlueRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAssetCommand}
   */
  updateAsset(
    args: UpdateAssetCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateAssetCommandOutput>;
  updateAsset(
    args: UpdateAssetCommandInput,
    cb: (err: any, data?: UpdateAssetCommandOutput) => void
  ): void;
  updateAsset(
    args: UpdateAssetCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateAssetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBlueprintCommand}
   */
  updateBlueprint(
    args: UpdateBlueprintCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateBlueprintCommandOutput>;
  updateBlueprint(
    args: UpdateBlueprintCommandInput,
    cb: (err: any, data?: UpdateBlueprintCommandOutput) => void
  ): void;
  updateBlueprint(
    args: UpdateBlueprintCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateBlueprintCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCatalogCommand}
   */
  updateCatalog(
    args: UpdateCatalogCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateCatalogCommandOutput>;
  updateCatalog(
    args: UpdateCatalogCommandInput,
    cb: (err: any, data?: UpdateCatalogCommandOutput) => void
  ): void;
  updateCatalog(
    args: UpdateCatalogCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateCatalogCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateClassifierCommand}
   */
  updateClassifier(): Promise<UpdateClassifierCommandOutput>;
  updateClassifier(
    args: UpdateClassifierCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateClassifierCommandOutput>;
  updateClassifier(
    args: UpdateClassifierCommandInput,
    cb: (err: any, data?: UpdateClassifierCommandOutput) => void
  ): void;
  updateClassifier(
    args: UpdateClassifierCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateClassifierCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateColumnStatisticsForPartitionCommand}
   */
  updateColumnStatisticsForPartition(
    args: UpdateColumnStatisticsForPartitionCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateColumnStatisticsForPartitionCommandOutput>;
  updateColumnStatisticsForPartition(
    args: UpdateColumnStatisticsForPartitionCommandInput,
    cb: (err: any, data?: UpdateColumnStatisticsForPartitionCommandOutput) => void
  ): void;
  updateColumnStatisticsForPartition(
    args: UpdateColumnStatisticsForPartitionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateColumnStatisticsForPartitionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateColumnStatisticsForTableCommand}
   */
  updateColumnStatisticsForTable(
    args: UpdateColumnStatisticsForTableCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateColumnStatisticsForTableCommandOutput>;
  updateColumnStatisticsForTable(
    args: UpdateColumnStatisticsForTableCommandInput,
    cb: (err: any, data?: UpdateColumnStatisticsForTableCommandOutput) => void
  ): void;
  updateColumnStatisticsForTable(
    args: UpdateColumnStatisticsForTableCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateColumnStatisticsForTableCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateColumnStatisticsTaskSettingsCommand}
   */
  updateColumnStatisticsTaskSettings(
    args: UpdateColumnStatisticsTaskSettingsCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateColumnStatisticsTaskSettingsCommandOutput>;
  updateColumnStatisticsTaskSettings(
    args: UpdateColumnStatisticsTaskSettingsCommandInput,
    cb: (err: any, data?: UpdateColumnStatisticsTaskSettingsCommandOutput) => void
  ): void;
  updateColumnStatisticsTaskSettings(
    args: UpdateColumnStatisticsTaskSettingsCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateColumnStatisticsTaskSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConnectionCommand}
   */
  updateConnection(
    args: UpdateConnectionCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateConnectionCommandOutput>;
  updateConnection(
    args: UpdateConnectionCommandInput,
    cb: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): void;
  updateConnection(
    args: UpdateConnectionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCrawlerCommand}
   */
  updateCrawler(
    args: UpdateCrawlerCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateCrawlerCommandOutput>;
  updateCrawler(
    args: UpdateCrawlerCommandInput,
    cb: (err: any, data?: UpdateCrawlerCommandOutput) => void
  ): void;
  updateCrawler(
    args: UpdateCrawlerCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateCrawlerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCrawlerScheduleCommand}
   */
  updateCrawlerSchedule(
    args: UpdateCrawlerScheduleCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateCrawlerScheduleCommandOutput>;
  updateCrawlerSchedule(
    args: UpdateCrawlerScheduleCommandInput,
    cb: (err: any, data?: UpdateCrawlerScheduleCommandOutput) => void
  ): void;
  updateCrawlerSchedule(
    args: UpdateCrawlerScheduleCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateCrawlerScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDatabaseCommand}
   */
  updateDatabase(
    args: UpdateDatabaseCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateDatabaseCommandOutput>;
  updateDatabase(
    args: UpdateDatabaseCommandInput,
    cb: (err: any, data?: UpdateDatabaseCommandOutput) => void
  ): void;
  updateDatabase(
    args: UpdateDatabaseCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataQualityRulesetCommand}
   */
  updateDataQualityRuleset(
    args: UpdateDataQualityRulesetCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateDataQualityRulesetCommandOutput>;
  updateDataQualityRuleset(
    args: UpdateDataQualityRulesetCommandInput,
    cb: (err: any, data?: UpdateDataQualityRulesetCommandOutput) => void
  ): void;
  updateDataQualityRuleset(
    args: UpdateDataQualityRulesetCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateDataQualityRulesetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDevEndpointCommand}
   */
  updateDevEndpoint(
    args: UpdateDevEndpointCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateDevEndpointCommandOutput>;
  updateDevEndpoint(
    args: UpdateDevEndpointCommandInput,
    cb: (err: any, data?: UpdateDevEndpointCommandOutput) => void
  ): void;
  updateDevEndpoint(
    args: UpdateDevEndpointCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateDevEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGlossaryCommand}
   */
  updateGlossary(
    args: UpdateGlossaryCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateGlossaryCommandOutput>;
  updateGlossary(
    args: UpdateGlossaryCommandInput,
    cb: (err: any, data?: UpdateGlossaryCommandOutput) => void
  ): void;
  updateGlossary(
    args: UpdateGlossaryCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateGlossaryCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGlossaryTermCommand}
   */
  updateGlossaryTerm(
    args: UpdateGlossaryTermCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateGlossaryTermCommandOutput>;
  updateGlossaryTerm(
    args: UpdateGlossaryTermCommandInput,
    cb: (err: any, data?: UpdateGlossaryTermCommandOutput) => void
  ): void;
  updateGlossaryTerm(
    args: UpdateGlossaryTermCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateGlossaryTermCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGlueIdentityCenterConfigurationCommand}
   */
  updateGlueIdentityCenterConfiguration(): Promise<UpdateGlueIdentityCenterConfigurationCommandOutput>;
  updateGlueIdentityCenterConfiguration(
    args: UpdateGlueIdentityCenterConfigurationCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateGlueIdentityCenterConfigurationCommandOutput>;
  updateGlueIdentityCenterConfiguration(
    args: UpdateGlueIdentityCenterConfigurationCommandInput,
    cb: (err: any, data?: UpdateGlueIdentityCenterConfigurationCommandOutput) => void
  ): void;
  updateGlueIdentityCenterConfiguration(
    args: UpdateGlueIdentityCenterConfigurationCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateGlueIdentityCenterConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIntegrationResourcePropertyCommand}
   */
  updateIntegrationResourceProperty(
    args: UpdateIntegrationResourcePropertyCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateIntegrationResourcePropertyCommandOutput>;
  updateIntegrationResourceProperty(
    args: UpdateIntegrationResourcePropertyCommandInput,
    cb: (err: any, data?: UpdateIntegrationResourcePropertyCommandOutput) => void
  ): void;
  updateIntegrationResourceProperty(
    args: UpdateIntegrationResourcePropertyCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateIntegrationResourcePropertyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIntegrationTablePropertiesCommand}
   */
  updateIntegrationTableProperties(
    args: UpdateIntegrationTablePropertiesCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateIntegrationTablePropertiesCommandOutput>;
  updateIntegrationTableProperties(
    args: UpdateIntegrationTablePropertiesCommandInput,
    cb: (err: any, data?: UpdateIntegrationTablePropertiesCommandOutput) => void
  ): void;
  updateIntegrationTableProperties(
    args: UpdateIntegrationTablePropertiesCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateIntegrationTablePropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateJobCommand}
   */
  updateJob(
    args: UpdateJobCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateJobCommandOutput>;
  updateJob(
    args: UpdateJobCommandInput,
    cb: (err: any, data?: UpdateJobCommandOutput) => void
  ): void;
  updateJob(
    args: UpdateJobCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateJobCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateJobFromSourceControlCommand}
   */
  updateJobFromSourceControl(): Promise<UpdateJobFromSourceControlCommandOutput>;
  updateJobFromSourceControl(
    args: UpdateJobFromSourceControlCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateJobFromSourceControlCommandOutput>;
  updateJobFromSourceControl(
    args: UpdateJobFromSourceControlCommandInput,
    cb: (err: any, data?: UpdateJobFromSourceControlCommandOutput) => void
  ): void;
  updateJobFromSourceControl(
    args: UpdateJobFromSourceControlCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateJobFromSourceControlCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMLTransformCommand}
   */
  updateMLTransform(
    args: UpdateMLTransformCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateMLTransformCommandOutput>;
  updateMLTransform(
    args: UpdateMLTransformCommandInput,
    cb: (err: any, data?: UpdateMLTransformCommandOutput) => void
  ): void;
  updateMLTransform(
    args: UpdateMLTransformCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateMLTransformCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePartitionCommand}
   */
  updatePartition(
    args: UpdatePartitionCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdatePartitionCommandOutput>;
  updatePartition(
    args: UpdatePartitionCommandInput,
    cb: (err: any, data?: UpdatePartitionCommandOutput) => void
  ): void;
  updatePartition(
    args: UpdatePartitionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdatePartitionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRegistryCommand}
   */
  updateRegistry(
    args: UpdateRegistryCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateRegistryCommandOutput>;
  updateRegistry(
    args: UpdateRegistryCommandInput,
    cb: (err: any, data?: UpdateRegistryCommandOutput) => void
  ): void;
  updateRegistry(
    args: UpdateRegistryCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateRegistryCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSchemaCommand}
   */
  updateSchema(
    args: UpdateSchemaCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateSchemaCommandOutput>;
  updateSchema(
    args: UpdateSchemaCommandInput,
    cb: (err: any, data?: UpdateSchemaCommandOutput) => void
  ): void;
  updateSchema(
    args: UpdateSchemaCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSourceControlFromJobCommand}
   */
  updateSourceControlFromJob(): Promise<UpdateSourceControlFromJobCommandOutput>;
  updateSourceControlFromJob(
    args: UpdateSourceControlFromJobCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateSourceControlFromJobCommandOutput>;
  updateSourceControlFromJob(
    args: UpdateSourceControlFromJobCommandInput,
    cb: (err: any, data?: UpdateSourceControlFromJobCommandOutput) => void
  ): void;
  updateSourceControlFromJob(
    args: UpdateSourceControlFromJobCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateSourceControlFromJobCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTableCommand}
   */
  updateTable(
    args: UpdateTableCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateTableCommandOutput>;
  updateTable(
    args: UpdateTableCommandInput,
    cb: (err: any, data?: UpdateTableCommandOutput) => void
  ): void;
  updateTable(
    args: UpdateTableCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateTableCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTableOptimizerCommand}
   */
  updateTableOptimizer(
    args: UpdateTableOptimizerCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateTableOptimizerCommandOutput>;
  updateTableOptimizer(
    args: UpdateTableOptimizerCommandInput,
    cb: (err: any, data?: UpdateTableOptimizerCommandOutput) => void
  ): void;
  updateTableOptimizer(
    args: UpdateTableOptimizerCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateTableOptimizerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTriggerCommand}
   */
  updateTrigger(
    args: UpdateTriggerCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateTriggerCommandOutput>;
  updateTrigger(
    args: UpdateTriggerCommandInput,
    cb: (err: any, data?: UpdateTriggerCommandOutput) => void
  ): void;
  updateTrigger(
    args: UpdateTriggerCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateTriggerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUsageProfileCommand}
   */
  updateUsageProfile(
    args: UpdateUsageProfileCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateUsageProfileCommandOutput>;
  updateUsageProfile(
    args: UpdateUsageProfileCommandInput,
    cb: (err: any, data?: UpdateUsageProfileCommandOutput) => void
  ): void;
  updateUsageProfile(
    args: UpdateUsageProfileCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateUsageProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserDefinedFunctionCommand}
   */
  updateUserDefinedFunction(
    args: UpdateUserDefinedFunctionCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateUserDefinedFunctionCommandOutput>;
  updateUserDefinedFunction(
    args: UpdateUserDefinedFunctionCommandInput,
    cb: (err: any, data?: UpdateUserDefinedFunctionCommandOutput) => void
  ): void;
  updateUserDefinedFunction(
    args: UpdateUserDefinedFunctionCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateUserDefinedFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkflowCommand}
   */
  updateWorkflow(
    args: UpdateWorkflowCommandInput,
    options?: GlueRequestOptions
  ): Promise<UpdateWorkflowCommandOutput>;
  updateWorkflow(
    args: UpdateWorkflowCommandInput,
    cb: (err: any, data?: UpdateWorkflowCommandOutput) => void
  ): void;
  updateWorkflow(
    args: UpdateWorkflowCommandInput,
    options: GlueRequestOptions,
    cb: (err: any, data?: UpdateWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEntityCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeEntityCommandOutput}.
   */
  paginateDescribeEntity(
    args: DescribeEntityCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeEntityCommandOutput>;

  /**
   * @see {@link GetBlueprintRunsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetBlueprintRunsCommandOutput}.
   */
  paginateGetBlueprintRuns(
    args: GetBlueprintRunsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetBlueprintRunsCommandOutput>;

  /**
   * @see {@link GetClassifiersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetClassifiersCommandOutput}.
   */
  paginateGetClassifiers(
    args?: GetClassifiersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetClassifiersCommandOutput>;

  /**
   * @see {@link GetColumnStatisticsTaskRunsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetColumnStatisticsTaskRunsCommandOutput}.
   */
  paginateGetColumnStatisticsTaskRuns(
    args: GetColumnStatisticsTaskRunsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetColumnStatisticsTaskRunsCommandOutput>;

  /**
   * @see {@link GetConnectionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetConnectionsCommandOutput}.
   */
  paginateGetConnections(
    args?: GetConnectionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetConnectionsCommandOutput>;

  /**
   * @see {@link GetCrawlerMetricsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetCrawlerMetricsCommandOutput}.
   */
  paginateGetCrawlerMetrics(
    args?: GetCrawlerMetricsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetCrawlerMetricsCommandOutput>;

  /**
   * @see {@link GetCrawlersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetCrawlersCommandOutput}.
   */
  paginateGetCrawlers(
    args?: GetCrawlersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetCrawlersCommandOutput>;

  /**
   * @see {@link GetDatabasesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetDatabasesCommandOutput}.
   */
  paginateGetDatabases(
    args?: GetDatabasesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetDatabasesCommandOutput>;

  /**
   * @see {@link GetDevEndpointsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetDevEndpointsCommandOutput}.
   */
  paginateGetDevEndpoints(
    args?: GetDevEndpointsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetDevEndpointsCommandOutput>;

  /**
   * @see {@link GetJobRunsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetJobRunsCommandOutput}.
   */
  paginateGetJobRuns(
    args: GetJobRunsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetJobRunsCommandOutput>;

  /**
   * @see {@link GetJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetJobsCommandOutput}.
   */
  paginateGetJobs(
    args?: GetJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetJobsCommandOutput>;

  /**
   * @see {@link GetMLTaskRunsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetMLTaskRunsCommandOutput}.
   */
  paginateGetMLTaskRuns(
    args: GetMLTaskRunsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetMLTaskRunsCommandOutput>;

  /**
   * @see {@link GetMLTransformsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetMLTransformsCommandOutput}.
   */
  paginateGetMLTransforms(
    args?: GetMLTransformsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetMLTransformsCommandOutput>;

  /**
   * @see {@link GetPartitionIndexesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetPartitionIndexesCommandOutput}.
   */
  paginateGetPartitionIndexes(
    args: GetPartitionIndexesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetPartitionIndexesCommandOutput>;

  /**
   * @see {@link GetPartitionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetPartitionsCommandOutput}.
   */
  paginateGetPartitions(
    args: GetPartitionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetPartitionsCommandOutput>;

  /**
   * @see {@link GetResourcePoliciesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetResourcePoliciesCommandOutput}.
   */
  paginateGetResourcePolicies(
    args?: GetResourcePoliciesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetResourcePoliciesCommandOutput>;

  /**
   * @see {@link GetSecurityConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetSecurityConfigurationsCommandOutput}.
   */
  paginateGetSecurityConfigurations(
    args?: GetSecurityConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetSecurityConfigurationsCommandOutput>;

  /**
   * @see {@link GetTablesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetTablesCommandOutput}.
   */
  paginateGetTables(
    args: GetTablesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetTablesCommandOutput>;

  /**
   * @see {@link GetTableVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetTableVersionsCommandOutput}.
   */
  paginateGetTableVersions(
    args: GetTableVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetTableVersionsCommandOutput>;

  /**
   * @see {@link GetTriggersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetTriggersCommandOutput}.
   */
  paginateGetTriggers(
    args?: GetTriggersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetTriggersCommandOutput>;

  /**
   * @see {@link GetUnfilteredPartitionsMetadataCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetUnfilteredPartitionsMetadataCommandOutput}.
   */
  paginateGetUnfilteredPartitionsMetadata(
    args: GetUnfilteredPartitionsMetadataCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetUnfilteredPartitionsMetadataCommandOutput>;

  /**
   * @see {@link GetUserDefinedFunctionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetUserDefinedFunctionsCommandOutput}.
   */
  paginateGetUserDefinedFunctions(
    args: GetUserDefinedFunctionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetUserDefinedFunctionsCommandOutput>;

  /**
   * @see {@link GetWorkflowRunsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetWorkflowRunsCommandOutput}.
   */
  paginateGetWorkflowRuns(
    args: GetWorkflowRunsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetWorkflowRunsCommandOutput>;

  /**
   * @see {@link ListAssetTypesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssetTypesCommandOutput}.
   */
  paginateListAssetTypes(
    args?: ListAssetTypesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssetTypesCommandOutput>;

  /**
   * @see {@link ListBlueprintsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBlueprintsCommandOutput}.
   */
  paginateListBlueprints(
    args?: ListBlueprintsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBlueprintsCommandOutput>;

  /**
   * @see {@link ListColumnStatisticsTaskRunsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListColumnStatisticsTaskRunsCommandOutput}.
   */
  paginateListColumnStatisticsTaskRuns(
    args?: ListColumnStatisticsTaskRunsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListColumnStatisticsTaskRunsCommandOutput>;

  /**
   * @see {@link ListConnectionTypesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListConnectionTypesCommandOutput}.
   */
  paginateListConnectionTypes(
    args?: ListConnectionTypesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListConnectionTypesCommandOutput>;

  /**
   * @see {@link ListCrawlersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCrawlersCommandOutput}.
   */
  paginateListCrawlers(
    args?: ListCrawlersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCrawlersCommandOutput>;

  /**
   * @see {@link ListCustomEntityTypesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCustomEntityTypesCommandOutput}.
   */
  paginateListCustomEntityTypes(
    args?: ListCustomEntityTypesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCustomEntityTypesCommandOutput>;

  /**
   * @see {@link ListDataQualityResultsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDataQualityResultsCommandOutput}.
   */
  paginateListDataQualityResults(
    args?: ListDataQualityResultsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDataQualityResultsCommandOutput>;

  /**
   * @see {@link ListDataQualityRuleRecommendationRunsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDataQualityRuleRecommendationRunsCommandOutput}.
   */
  paginateListDataQualityRuleRecommendationRuns(
    args?: ListDataQualityRuleRecommendationRunsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDataQualityRuleRecommendationRunsCommandOutput>;

  /**
   * @see {@link ListDataQualityRulesetEvaluationRunsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDataQualityRulesetEvaluationRunsCommandOutput}.
   */
  paginateListDataQualityRulesetEvaluationRuns(
    args?: ListDataQualityRulesetEvaluationRunsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDataQualityRulesetEvaluationRunsCommandOutput>;

  /**
   * @see {@link ListDataQualityRulesetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDataQualityRulesetsCommandOutput}.
   */
  paginateListDataQualityRulesets(
    args?: ListDataQualityRulesetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDataQualityRulesetsCommandOutput>;

  /**
   * @see {@link ListDevEndpointsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDevEndpointsCommandOutput}.
   */
  paginateListDevEndpoints(
    args?: ListDevEndpointsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDevEndpointsCommandOutput>;

  /**
   * @see {@link ListEntitiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEntitiesCommandOutput}.
   */
  paginateListEntities(
    args?: ListEntitiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEntitiesCommandOutput>;

  /**
   * @see {@link ListFormTypesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFormTypesCommandOutput}.
   */
  paginateListFormTypes(
    args?: ListFormTypesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFormTypesCommandOutput>;

  /**
   * @see {@link ListGlossariesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListGlossariesCommandOutput}.
   */
  paginateListGlossaries(
    args?: ListGlossariesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListGlossariesCommandOutput>;

  /**
   * @see {@link ListGlossaryTermsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListGlossaryTermsCommandOutput}.
   */
  paginateListGlossaryTerms(
    args: ListGlossaryTermsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListGlossaryTermsCommandOutput>;

  /**
   * @see {@link ListIterableFormsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIterableFormsCommandOutput}.
   */
  paginateListIterableForms(
    args: ListIterableFormsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIterableFormsCommandOutput>;

  /**
   * @see {@link ListJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListJobsCommandOutput}.
   */
  paginateListJobs(
    args?: ListJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListJobsCommandOutput>;

  /**
   * @see {@link ListMaterializedViewRefreshTaskRunsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMaterializedViewRefreshTaskRunsCommandOutput}.
   */
  paginateListMaterializedViewRefreshTaskRuns(
    args: ListMaterializedViewRefreshTaskRunsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMaterializedViewRefreshTaskRunsCommandOutput>;

  /**
   * @see {@link ListMLTransformsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMLTransformsCommandOutput}.
   */
  paginateListMLTransforms(
    args?: ListMLTransformsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMLTransformsCommandOutput>;

  /**
   * @see {@link ListRegistriesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRegistriesCommandOutput}.
   */
  paginateListRegistries(
    args?: ListRegistriesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRegistriesCommandOutput>;

  /**
   * @see {@link ListSchemasCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSchemasCommandOutput}.
   */
  paginateListSchemas(
    args?: ListSchemasCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSchemasCommandOutput>;

  /**
   * @see {@link ListSchemaVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSchemaVersionsCommandOutput}.
   */
  paginateListSchemaVersions(
    args: ListSchemaVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSchemaVersionsCommandOutput>;

  /**
   * @see {@link ListSessionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSessionsCommandOutput}.
   */
  paginateListSessions(
    args?: ListSessionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSessionsCommandOutput>;

  /**
   * @see {@link ListTableOptimizerRunsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTableOptimizerRunsCommandOutput}.
   */
  paginateListTableOptimizerRuns(
    args: ListTableOptimizerRunsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTableOptimizerRunsCommandOutput>;

  /**
   * @see {@link ListTriggersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTriggersCommandOutput}.
   */
  paginateListTriggers(
    args?: ListTriggersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTriggersCommandOutput>;

  /**
   * @see {@link ListUsageProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListUsageProfilesCommandOutput}.
   */
  paginateListUsageProfiles(
    args?: ListUsageProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListUsageProfilesCommandOutput>;

  /**
   * @see {@link ListWorkflowsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWorkflowsCommandOutput}.
   */
  paginateListWorkflows(
    args?: ListWorkflowsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWorkflowsCommandOutput>;

  /**
   * @see {@link SearchAssetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchAssetsCommandOutput}.
   */
  paginateSearchAssets(
    args?: SearchAssetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchAssetsCommandOutput>;

  /**
   * @see {@link SearchTablesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchTablesCommandOutput}.
   */
  paginateSearchTables(
    args?: SearchTablesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchTablesCommandOutput>;
}

/**
 * <fullname>Glue</fullname>
 *          <p>Defines the public endpoint for the Glue service.</p>
 * @public
 */
export class Glue extends GlueClient implements Glue {}
createAggregatedClient(commands, Glue, { paginators });
