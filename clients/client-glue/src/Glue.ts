// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BatchCreatePartitionCommand,
  BatchCreatePartitionCommandInput,
  BatchCreatePartitionCommandOutput,
} from "./commands/BatchCreatePartitionCommand";
import {
  BatchDeleteConnectionCommand,
  BatchDeleteConnectionCommandInput,
  BatchDeleteConnectionCommandOutput,
} from "./commands/BatchDeleteConnectionCommand";
import {
  BatchDeletePartitionCommand,
  BatchDeletePartitionCommandInput,
  BatchDeletePartitionCommandOutput,
} from "./commands/BatchDeletePartitionCommand";
import {
  BatchDeleteTableCommand,
  BatchDeleteTableCommandInput,
  BatchDeleteTableCommandOutput,
} from "./commands/BatchDeleteTableCommand";
import {
  BatchDeleteTableVersionCommand,
  BatchDeleteTableVersionCommandInput,
  BatchDeleteTableVersionCommandOutput,
} from "./commands/BatchDeleteTableVersionCommand";
import {
  BatchGetBlueprintsCommand,
  BatchGetBlueprintsCommandInput,
  BatchGetBlueprintsCommandOutput,
} from "./commands/BatchGetBlueprintsCommand";
import {
  BatchGetCrawlersCommand,
  BatchGetCrawlersCommandInput,
  BatchGetCrawlersCommandOutput,
} from "./commands/BatchGetCrawlersCommand";
import {
  BatchGetCustomEntityTypesCommand,
  BatchGetCustomEntityTypesCommandInput,
  BatchGetCustomEntityTypesCommandOutput,
} from "./commands/BatchGetCustomEntityTypesCommand";
import {
  BatchGetDataQualityResultCommand,
  BatchGetDataQualityResultCommandInput,
  BatchGetDataQualityResultCommandOutput,
} from "./commands/BatchGetDataQualityResultCommand";
import {
  BatchGetDevEndpointsCommand,
  BatchGetDevEndpointsCommandInput,
  BatchGetDevEndpointsCommandOutput,
} from "./commands/BatchGetDevEndpointsCommand";
import {
  BatchGetJobsCommand,
  BatchGetJobsCommandInput,
  BatchGetJobsCommandOutput,
} from "./commands/BatchGetJobsCommand";
import {
  BatchGetPartitionCommand,
  BatchGetPartitionCommandInput,
  BatchGetPartitionCommandOutput,
} from "./commands/BatchGetPartitionCommand";
import {
  BatchGetTableOptimizerCommand,
  BatchGetTableOptimizerCommandInput,
  BatchGetTableOptimizerCommandOutput,
} from "./commands/BatchGetTableOptimizerCommand";
import {
  BatchGetTriggersCommand,
  BatchGetTriggersCommandInput,
  BatchGetTriggersCommandOutput,
} from "./commands/BatchGetTriggersCommand";
import {
  BatchGetWorkflowsCommand,
  BatchGetWorkflowsCommandInput,
  BatchGetWorkflowsCommandOutput,
} from "./commands/BatchGetWorkflowsCommand";
import {
  BatchPutDataQualityStatisticAnnotationCommand,
  BatchPutDataQualityStatisticAnnotationCommandInput,
  BatchPutDataQualityStatisticAnnotationCommandOutput,
} from "./commands/BatchPutDataQualityStatisticAnnotationCommand";
import {
  BatchStopJobRunCommand,
  BatchStopJobRunCommandInput,
  BatchStopJobRunCommandOutput,
} from "./commands/BatchStopJobRunCommand";
import {
  BatchUpdatePartitionCommand,
  BatchUpdatePartitionCommandInput,
  BatchUpdatePartitionCommandOutput,
} from "./commands/BatchUpdatePartitionCommand";
import {
  CancelDataQualityRuleRecommendationRunCommand,
  CancelDataQualityRuleRecommendationRunCommandInput,
  CancelDataQualityRuleRecommendationRunCommandOutput,
} from "./commands/CancelDataQualityRuleRecommendationRunCommand";
import {
  CancelDataQualityRulesetEvaluationRunCommand,
  CancelDataQualityRulesetEvaluationRunCommandInput,
  CancelDataQualityRulesetEvaluationRunCommandOutput,
} from "./commands/CancelDataQualityRulesetEvaluationRunCommand";
import {
  CancelMLTaskRunCommand,
  CancelMLTaskRunCommandInput,
  CancelMLTaskRunCommandOutput,
} from "./commands/CancelMLTaskRunCommand";
import {
  CancelStatementCommand,
  CancelStatementCommandInput,
  CancelStatementCommandOutput,
} from "./commands/CancelStatementCommand";
import {
  CheckSchemaVersionValidityCommand,
  CheckSchemaVersionValidityCommandInput,
  CheckSchemaVersionValidityCommandOutput,
} from "./commands/CheckSchemaVersionValidityCommand";
import {
  CreateBlueprintCommand,
  CreateBlueprintCommandInput,
  CreateBlueprintCommandOutput,
} from "./commands/CreateBlueprintCommand";
import {
  CreateCatalogCommand,
  CreateCatalogCommandInput,
  CreateCatalogCommandOutput,
} from "./commands/CreateCatalogCommand";
import {
  CreateClassifierCommand,
  CreateClassifierCommandInput,
  CreateClassifierCommandOutput,
} from "./commands/CreateClassifierCommand";
import {
  CreateColumnStatisticsTaskSettingsCommand,
  CreateColumnStatisticsTaskSettingsCommandInput,
  CreateColumnStatisticsTaskSettingsCommandOutput,
} from "./commands/CreateColumnStatisticsTaskSettingsCommand";
import {
  CreateConnectionCommand,
  CreateConnectionCommandInput,
  CreateConnectionCommandOutput,
} from "./commands/CreateConnectionCommand";
import {
  CreateCrawlerCommand,
  CreateCrawlerCommandInput,
  CreateCrawlerCommandOutput,
} from "./commands/CreateCrawlerCommand";
import {
  CreateCustomEntityTypeCommand,
  CreateCustomEntityTypeCommandInput,
  CreateCustomEntityTypeCommandOutput,
} from "./commands/CreateCustomEntityTypeCommand";
import {
  CreateDatabaseCommand,
  CreateDatabaseCommandInput,
  CreateDatabaseCommandOutput,
} from "./commands/CreateDatabaseCommand";
import {
  CreateDataQualityRulesetCommand,
  CreateDataQualityRulesetCommandInput,
  CreateDataQualityRulesetCommandOutput,
} from "./commands/CreateDataQualityRulesetCommand";
import {
  CreateDevEndpointCommand,
  CreateDevEndpointCommandInput,
  CreateDevEndpointCommandOutput,
} from "./commands/CreateDevEndpointCommand";
import {
  CreateGlueIdentityCenterConfigurationCommand,
  CreateGlueIdentityCenterConfigurationCommandInput,
  CreateGlueIdentityCenterConfigurationCommandOutput,
} from "./commands/CreateGlueIdentityCenterConfigurationCommand";
import {
  CreateIntegrationCommand,
  CreateIntegrationCommandInput,
  CreateIntegrationCommandOutput,
} from "./commands/CreateIntegrationCommand";
import {
  CreateIntegrationResourcePropertyCommand,
  CreateIntegrationResourcePropertyCommandInput,
  CreateIntegrationResourcePropertyCommandOutput,
} from "./commands/CreateIntegrationResourcePropertyCommand";
import {
  CreateIntegrationTablePropertiesCommand,
  CreateIntegrationTablePropertiesCommandInput,
  CreateIntegrationTablePropertiesCommandOutput,
} from "./commands/CreateIntegrationTablePropertiesCommand";
import { CreateJobCommand, CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import {
  CreateMLTransformCommand,
  CreateMLTransformCommandInput,
  CreateMLTransformCommandOutput,
} from "./commands/CreateMLTransformCommand";
import {
  CreatePartitionCommand,
  CreatePartitionCommandInput,
  CreatePartitionCommandOutput,
} from "./commands/CreatePartitionCommand";
import {
  CreatePartitionIndexCommand,
  CreatePartitionIndexCommandInput,
  CreatePartitionIndexCommandOutput,
} from "./commands/CreatePartitionIndexCommand";
import {
  CreateRegistryCommand,
  CreateRegistryCommandInput,
  CreateRegistryCommandOutput,
} from "./commands/CreateRegistryCommand";
import {
  CreateSchemaCommand,
  CreateSchemaCommandInput,
  CreateSchemaCommandOutput,
} from "./commands/CreateSchemaCommand";
import {
  CreateScriptCommand,
  CreateScriptCommandInput,
  CreateScriptCommandOutput,
} from "./commands/CreateScriptCommand";
import {
  CreateSecurityConfigurationCommand,
  CreateSecurityConfigurationCommandInput,
  CreateSecurityConfigurationCommandOutput,
} from "./commands/CreateSecurityConfigurationCommand";
import {
  CreateSessionCommand,
  CreateSessionCommandInput,
  CreateSessionCommandOutput,
} from "./commands/CreateSessionCommand";
import { CreateTableCommand, CreateTableCommandInput, CreateTableCommandOutput } from "./commands/CreateTableCommand";
import {
  CreateTableOptimizerCommand,
  CreateTableOptimizerCommandInput,
  CreateTableOptimizerCommandOutput,
} from "./commands/CreateTableOptimizerCommand";
import {
  CreateTriggerCommand,
  CreateTriggerCommandInput,
  CreateTriggerCommandOutput,
} from "./commands/CreateTriggerCommand";
import {
  CreateUsageProfileCommand,
  CreateUsageProfileCommandInput,
  CreateUsageProfileCommandOutput,
} from "./commands/CreateUsageProfileCommand";
import {
  CreateUserDefinedFunctionCommand,
  CreateUserDefinedFunctionCommandInput,
  CreateUserDefinedFunctionCommandOutput,
} from "./commands/CreateUserDefinedFunctionCommand";
import {
  CreateWorkflowCommand,
  CreateWorkflowCommandInput,
  CreateWorkflowCommandOutput,
} from "./commands/CreateWorkflowCommand";
import {
  DeleteBlueprintCommand,
  DeleteBlueprintCommandInput,
  DeleteBlueprintCommandOutput,
} from "./commands/DeleteBlueprintCommand";
import {
  DeleteCatalogCommand,
  DeleteCatalogCommandInput,
  DeleteCatalogCommandOutput,
} from "./commands/DeleteCatalogCommand";
import {
  DeleteClassifierCommand,
  DeleteClassifierCommandInput,
  DeleteClassifierCommandOutput,
} from "./commands/DeleteClassifierCommand";
import {
  DeleteColumnStatisticsForPartitionCommand,
  DeleteColumnStatisticsForPartitionCommandInput,
  DeleteColumnStatisticsForPartitionCommandOutput,
} from "./commands/DeleteColumnStatisticsForPartitionCommand";
import {
  DeleteColumnStatisticsForTableCommand,
  DeleteColumnStatisticsForTableCommandInput,
  DeleteColumnStatisticsForTableCommandOutput,
} from "./commands/DeleteColumnStatisticsForTableCommand";
import {
  DeleteColumnStatisticsTaskSettingsCommand,
  DeleteColumnStatisticsTaskSettingsCommandInput,
  DeleteColumnStatisticsTaskSettingsCommandOutput,
} from "./commands/DeleteColumnStatisticsTaskSettingsCommand";
import {
  DeleteConnectionCommand,
  DeleteConnectionCommandInput,
  DeleteConnectionCommandOutput,
} from "./commands/DeleteConnectionCommand";
import {
  DeleteCrawlerCommand,
  DeleteCrawlerCommandInput,
  DeleteCrawlerCommandOutput,
} from "./commands/DeleteCrawlerCommand";
import {
  DeleteCustomEntityTypeCommand,
  DeleteCustomEntityTypeCommandInput,
  DeleteCustomEntityTypeCommandOutput,
} from "./commands/DeleteCustomEntityTypeCommand";
import {
  DeleteDatabaseCommand,
  DeleteDatabaseCommandInput,
  DeleteDatabaseCommandOutput,
} from "./commands/DeleteDatabaseCommand";
import {
  DeleteDataQualityRulesetCommand,
  DeleteDataQualityRulesetCommandInput,
  DeleteDataQualityRulesetCommandOutput,
} from "./commands/DeleteDataQualityRulesetCommand";
import {
  DeleteDevEndpointCommand,
  DeleteDevEndpointCommandInput,
  DeleteDevEndpointCommandOutput,
} from "./commands/DeleteDevEndpointCommand";
import {
  DeleteGlueIdentityCenterConfigurationCommand,
  DeleteGlueIdentityCenterConfigurationCommandInput,
  DeleteGlueIdentityCenterConfigurationCommandOutput,
} from "./commands/DeleteGlueIdentityCenterConfigurationCommand";
import {
  DeleteIntegrationCommand,
  DeleteIntegrationCommandInput,
  DeleteIntegrationCommandOutput,
} from "./commands/DeleteIntegrationCommand";
import {
  DeleteIntegrationTablePropertiesCommand,
  DeleteIntegrationTablePropertiesCommandInput,
  DeleteIntegrationTablePropertiesCommandOutput,
} from "./commands/DeleteIntegrationTablePropertiesCommand";
import { DeleteJobCommand, DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand";
import {
  DeleteMLTransformCommand,
  DeleteMLTransformCommandInput,
  DeleteMLTransformCommandOutput,
} from "./commands/DeleteMLTransformCommand";
import {
  DeletePartitionCommand,
  DeletePartitionCommandInput,
  DeletePartitionCommandOutput,
} from "./commands/DeletePartitionCommand";
import {
  DeletePartitionIndexCommand,
  DeletePartitionIndexCommandInput,
  DeletePartitionIndexCommandOutput,
} from "./commands/DeletePartitionIndexCommand";
import {
  DeleteRegistryCommand,
  DeleteRegistryCommandInput,
  DeleteRegistryCommandOutput,
} from "./commands/DeleteRegistryCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteSchemaCommand,
  DeleteSchemaCommandInput,
  DeleteSchemaCommandOutput,
} from "./commands/DeleteSchemaCommand";
import {
  DeleteSchemaVersionsCommand,
  DeleteSchemaVersionsCommandInput,
  DeleteSchemaVersionsCommandOutput,
} from "./commands/DeleteSchemaVersionsCommand";
import {
  DeleteSecurityConfigurationCommand,
  DeleteSecurityConfigurationCommandInput,
  DeleteSecurityConfigurationCommandOutput,
} from "./commands/DeleteSecurityConfigurationCommand";
import {
  DeleteSessionCommand,
  DeleteSessionCommandInput,
  DeleteSessionCommandOutput,
} from "./commands/DeleteSessionCommand";
import { DeleteTableCommand, DeleteTableCommandInput, DeleteTableCommandOutput } from "./commands/DeleteTableCommand";
import {
  DeleteTableOptimizerCommand,
  DeleteTableOptimizerCommandInput,
  DeleteTableOptimizerCommandOutput,
} from "./commands/DeleteTableOptimizerCommand";
import {
  DeleteTableVersionCommand,
  DeleteTableVersionCommandInput,
  DeleteTableVersionCommandOutput,
} from "./commands/DeleteTableVersionCommand";
import {
  DeleteTriggerCommand,
  DeleteTriggerCommandInput,
  DeleteTriggerCommandOutput,
} from "./commands/DeleteTriggerCommand";
import {
  DeleteUsageProfileCommand,
  DeleteUsageProfileCommandInput,
  DeleteUsageProfileCommandOutput,
} from "./commands/DeleteUsageProfileCommand";
import {
  DeleteUserDefinedFunctionCommand,
  DeleteUserDefinedFunctionCommandInput,
  DeleteUserDefinedFunctionCommandOutput,
} from "./commands/DeleteUserDefinedFunctionCommand";
import {
  DeleteWorkflowCommand,
  DeleteWorkflowCommandInput,
  DeleteWorkflowCommandOutput,
} from "./commands/DeleteWorkflowCommand";
import {
  DescribeConnectionTypeCommand,
  DescribeConnectionTypeCommandInput,
  DescribeConnectionTypeCommandOutput,
} from "./commands/DescribeConnectionTypeCommand";
import {
  DescribeEntityCommand,
  DescribeEntityCommandInput,
  DescribeEntityCommandOutput,
} from "./commands/DescribeEntityCommand";
import {
  DescribeInboundIntegrationsCommand,
  DescribeInboundIntegrationsCommandInput,
  DescribeInboundIntegrationsCommandOutput,
} from "./commands/DescribeInboundIntegrationsCommand";
import {
  DescribeIntegrationsCommand,
  DescribeIntegrationsCommandInput,
  DescribeIntegrationsCommandOutput,
} from "./commands/DescribeIntegrationsCommand";
import {
  GetBlueprintCommand,
  GetBlueprintCommandInput,
  GetBlueprintCommandOutput,
} from "./commands/GetBlueprintCommand";
import {
  GetBlueprintRunCommand,
  GetBlueprintRunCommandInput,
  GetBlueprintRunCommandOutput,
} from "./commands/GetBlueprintRunCommand";
import {
  GetBlueprintRunsCommand,
  GetBlueprintRunsCommandInput,
  GetBlueprintRunsCommandOutput,
} from "./commands/GetBlueprintRunsCommand";
import { GetCatalogCommand, GetCatalogCommandInput, GetCatalogCommandOutput } from "./commands/GetCatalogCommand";
import {
  GetCatalogImportStatusCommand,
  GetCatalogImportStatusCommandInput,
  GetCatalogImportStatusCommandOutput,
} from "./commands/GetCatalogImportStatusCommand";
import { GetCatalogsCommand, GetCatalogsCommandInput, GetCatalogsCommandOutput } from "./commands/GetCatalogsCommand";
import {
  GetClassifierCommand,
  GetClassifierCommandInput,
  GetClassifierCommandOutput,
} from "./commands/GetClassifierCommand";
import {
  GetClassifiersCommand,
  GetClassifiersCommandInput,
  GetClassifiersCommandOutput,
} from "./commands/GetClassifiersCommand";
import {
  GetColumnStatisticsForPartitionCommand,
  GetColumnStatisticsForPartitionCommandInput,
  GetColumnStatisticsForPartitionCommandOutput,
} from "./commands/GetColumnStatisticsForPartitionCommand";
import {
  GetColumnStatisticsForTableCommand,
  GetColumnStatisticsForTableCommandInput,
  GetColumnStatisticsForTableCommandOutput,
} from "./commands/GetColumnStatisticsForTableCommand";
import {
  GetColumnStatisticsTaskRunCommand,
  GetColumnStatisticsTaskRunCommandInput,
  GetColumnStatisticsTaskRunCommandOutput,
} from "./commands/GetColumnStatisticsTaskRunCommand";
import {
  GetColumnStatisticsTaskRunsCommand,
  GetColumnStatisticsTaskRunsCommandInput,
  GetColumnStatisticsTaskRunsCommandOutput,
} from "./commands/GetColumnStatisticsTaskRunsCommand";
import {
  GetColumnStatisticsTaskSettingsCommand,
  GetColumnStatisticsTaskSettingsCommandInput,
  GetColumnStatisticsTaskSettingsCommandOutput,
} from "./commands/GetColumnStatisticsTaskSettingsCommand";
import {
  GetConnectionCommand,
  GetConnectionCommandInput,
  GetConnectionCommandOutput,
} from "./commands/GetConnectionCommand";
import {
  GetConnectionsCommand,
  GetConnectionsCommandInput,
  GetConnectionsCommandOutput,
} from "./commands/GetConnectionsCommand";
import { GetCrawlerCommand, GetCrawlerCommandInput, GetCrawlerCommandOutput } from "./commands/GetCrawlerCommand";
import {
  GetCrawlerMetricsCommand,
  GetCrawlerMetricsCommandInput,
  GetCrawlerMetricsCommandOutput,
} from "./commands/GetCrawlerMetricsCommand";
import { GetCrawlersCommand, GetCrawlersCommandInput, GetCrawlersCommandOutput } from "./commands/GetCrawlersCommand";
import {
  GetCustomEntityTypeCommand,
  GetCustomEntityTypeCommandInput,
  GetCustomEntityTypeCommandOutput,
} from "./commands/GetCustomEntityTypeCommand";
import { GetDatabaseCommand, GetDatabaseCommandInput, GetDatabaseCommandOutput } from "./commands/GetDatabaseCommand";
import {
  GetDatabasesCommand,
  GetDatabasesCommandInput,
  GetDatabasesCommandOutput,
} from "./commands/GetDatabasesCommand";
import {
  GetDataCatalogEncryptionSettingsCommand,
  GetDataCatalogEncryptionSettingsCommandInput,
  GetDataCatalogEncryptionSettingsCommandOutput,
} from "./commands/GetDataCatalogEncryptionSettingsCommand";
import {
  GetDataflowGraphCommand,
  GetDataflowGraphCommandInput,
  GetDataflowGraphCommandOutput,
} from "./commands/GetDataflowGraphCommand";
import {
  GetDataQualityModelCommand,
  GetDataQualityModelCommandInput,
  GetDataQualityModelCommandOutput,
} from "./commands/GetDataQualityModelCommand";
import {
  GetDataQualityModelResultCommand,
  GetDataQualityModelResultCommandInput,
  GetDataQualityModelResultCommandOutput,
} from "./commands/GetDataQualityModelResultCommand";
import {
  GetDataQualityResultCommand,
  GetDataQualityResultCommandInput,
  GetDataQualityResultCommandOutput,
} from "./commands/GetDataQualityResultCommand";
import {
  GetDataQualityRuleRecommendationRunCommand,
  GetDataQualityRuleRecommendationRunCommandInput,
  GetDataQualityRuleRecommendationRunCommandOutput,
} from "./commands/GetDataQualityRuleRecommendationRunCommand";
import {
  GetDataQualityRulesetCommand,
  GetDataQualityRulesetCommandInput,
  GetDataQualityRulesetCommandOutput,
} from "./commands/GetDataQualityRulesetCommand";
import {
  GetDataQualityRulesetEvaluationRunCommand,
  GetDataQualityRulesetEvaluationRunCommandInput,
  GetDataQualityRulesetEvaluationRunCommandOutput,
} from "./commands/GetDataQualityRulesetEvaluationRunCommand";
import {
  GetDevEndpointCommand,
  GetDevEndpointCommandInput,
  GetDevEndpointCommandOutput,
} from "./commands/GetDevEndpointCommand";
import {
  GetDevEndpointsCommand,
  GetDevEndpointsCommandInput,
  GetDevEndpointsCommandOutput,
} from "./commands/GetDevEndpointsCommand";
import {
  GetEntityRecordsCommand,
  GetEntityRecordsCommandInput,
  GetEntityRecordsCommandOutput,
} from "./commands/GetEntityRecordsCommand";
import {
  GetGlueIdentityCenterConfigurationCommand,
  GetGlueIdentityCenterConfigurationCommandInput,
  GetGlueIdentityCenterConfigurationCommandOutput,
} from "./commands/GetGlueIdentityCenterConfigurationCommand";
import {
  GetIntegrationResourcePropertyCommand,
  GetIntegrationResourcePropertyCommandInput,
  GetIntegrationResourcePropertyCommandOutput,
} from "./commands/GetIntegrationResourcePropertyCommand";
import {
  GetIntegrationTablePropertiesCommand,
  GetIntegrationTablePropertiesCommandInput,
  GetIntegrationTablePropertiesCommandOutput,
} from "./commands/GetIntegrationTablePropertiesCommand";
import {
  GetJobBookmarkCommand,
  GetJobBookmarkCommandInput,
  GetJobBookmarkCommandOutput,
} from "./commands/GetJobBookmarkCommand";
import { GetJobCommand, GetJobCommandInput, GetJobCommandOutput } from "./commands/GetJobCommand";
import { GetJobRunCommand, GetJobRunCommandInput, GetJobRunCommandOutput } from "./commands/GetJobRunCommand";
import { GetJobRunsCommand, GetJobRunsCommandInput, GetJobRunsCommandOutput } from "./commands/GetJobRunsCommand";
import { GetJobsCommand, GetJobsCommandInput, GetJobsCommandOutput } from "./commands/GetJobsCommand";
import { GetMappingCommand, GetMappingCommandInput, GetMappingCommandOutput } from "./commands/GetMappingCommand";
import {
  GetMLTaskRunCommand,
  GetMLTaskRunCommandInput,
  GetMLTaskRunCommandOutput,
} from "./commands/GetMLTaskRunCommand";
import {
  GetMLTaskRunsCommand,
  GetMLTaskRunsCommandInput,
  GetMLTaskRunsCommandOutput,
} from "./commands/GetMLTaskRunsCommand";
import {
  GetMLTransformCommand,
  GetMLTransformCommandInput,
  GetMLTransformCommandOutput,
} from "./commands/GetMLTransformCommand";
import {
  GetMLTransformsCommand,
  GetMLTransformsCommandInput,
  GetMLTransformsCommandOutput,
} from "./commands/GetMLTransformsCommand";
import {
  GetPartitionCommand,
  GetPartitionCommandInput,
  GetPartitionCommandOutput,
} from "./commands/GetPartitionCommand";
import {
  GetPartitionIndexesCommand,
  GetPartitionIndexesCommandInput,
  GetPartitionIndexesCommandOutput,
} from "./commands/GetPartitionIndexesCommand";
import {
  GetPartitionsCommand,
  GetPartitionsCommandInput,
  GetPartitionsCommandOutput,
} from "./commands/GetPartitionsCommand";
import { GetPlanCommand, GetPlanCommandInput, GetPlanCommandOutput } from "./commands/GetPlanCommand";
import { GetRegistryCommand, GetRegistryCommandInput, GetRegistryCommandOutput } from "./commands/GetRegistryCommand";
import {
  GetResourcePoliciesCommand,
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput,
} from "./commands/GetResourcePoliciesCommand";
import {
  GetResourcePolicyCommand,
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import {
  GetSchemaByDefinitionCommand,
  GetSchemaByDefinitionCommandInput,
  GetSchemaByDefinitionCommandOutput,
} from "./commands/GetSchemaByDefinitionCommand";
import { GetSchemaCommand, GetSchemaCommandInput, GetSchemaCommandOutput } from "./commands/GetSchemaCommand";
import {
  GetSchemaVersionCommand,
  GetSchemaVersionCommandInput,
  GetSchemaVersionCommandOutput,
} from "./commands/GetSchemaVersionCommand";
import {
  GetSchemaVersionsDiffCommand,
  GetSchemaVersionsDiffCommandInput,
  GetSchemaVersionsDiffCommandOutput,
} from "./commands/GetSchemaVersionsDiffCommand";
import {
  GetSecurityConfigurationCommand,
  GetSecurityConfigurationCommandInput,
  GetSecurityConfigurationCommandOutput,
} from "./commands/GetSecurityConfigurationCommand";
import {
  GetSecurityConfigurationsCommand,
  GetSecurityConfigurationsCommandInput,
  GetSecurityConfigurationsCommandOutput,
} from "./commands/GetSecurityConfigurationsCommand";
import { GetSessionCommand, GetSessionCommandInput, GetSessionCommandOutput } from "./commands/GetSessionCommand";
import {
  GetStatementCommand,
  GetStatementCommandInput,
  GetStatementCommandOutput,
} from "./commands/GetStatementCommand";
import { GetTableCommand, GetTableCommandInput, GetTableCommandOutput } from "./commands/GetTableCommand";
import {
  GetTableOptimizerCommand,
  GetTableOptimizerCommandInput,
  GetTableOptimizerCommandOutput,
} from "./commands/GetTableOptimizerCommand";
import { GetTablesCommand, GetTablesCommandInput, GetTablesCommandOutput } from "./commands/GetTablesCommand";
import {
  GetTableVersionCommand,
  GetTableVersionCommandInput,
  GetTableVersionCommandOutput,
} from "./commands/GetTableVersionCommand";
import {
  GetTableVersionsCommand,
  GetTableVersionsCommandInput,
  GetTableVersionsCommandOutput,
} from "./commands/GetTableVersionsCommand";
import { GetTagsCommand, GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand";
import { GetTriggerCommand, GetTriggerCommandInput, GetTriggerCommandOutput } from "./commands/GetTriggerCommand";
import { GetTriggersCommand, GetTriggersCommandInput, GetTriggersCommandOutput } from "./commands/GetTriggersCommand";
import {
  GetUnfilteredPartitionMetadataCommand,
  GetUnfilteredPartitionMetadataCommandInput,
  GetUnfilteredPartitionMetadataCommandOutput,
} from "./commands/GetUnfilteredPartitionMetadataCommand";
import {
  GetUnfilteredPartitionsMetadataCommand,
  GetUnfilteredPartitionsMetadataCommandInput,
  GetUnfilteredPartitionsMetadataCommandOutput,
} from "./commands/GetUnfilteredPartitionsMetadataCommand";
import {
  GetUnfilteredTableMetadataCommand,
  GetUnfilteredTableMetadataCommandInput,
  GetUnfilteredTableMetadataCommandOutput,
} from "./commands/GetUnfilteredTableMetadataCommand";
import {
  GetUsageProfileCommand,
  GetUsageProfileCommandInput,
  GetUsageProfileCommandOutput,
} from "./commands/GetUsageProfileCommand";
import {
  GetUserDefinedFunctionCommand,
  GetUserDefinedFunctionCommandInput,
  GetUserDefinedFunctionCommandOutput,
} from "./commands/GetUserDefinedFunctionCommand";
import {
  GetUserDefinedFunctionsCommand,
  GetUserDefinedFunctionsCommandInput,
  GetUserDefinedFunctionsCommandOutput,
} from "./commands/GetUserDefinedFunctionsCommand";
import { GetWorkflowCommand, GetWorkflowCommandInput, GetWorkflowCommandOutput } from "./commands/GetWorkflowCommand";
import {
  GetWorkflowRunCommand,
  GetWorkflowRunCommandInput,
  GetWorkflowRunCommandOutput,
} from "./commands/GetWorkflowRunCommand";
import {
  GetWorkflowRunPropertiesCommand,
  GetWorkflowRunPropertiesCommandInput,
  GetWorkflowRunPropertiesCommandOutput,
} from "./commands/GetWorkflowRunPropertiesCommand";
import {
  GetWorkflowRunsCommand,
  GetWorkflowRunsCommandInput,
  GetWorkflowRunsCommandOutput,
} from "./commands/GetWorkflowRunsCommand";
import {
  ImportCatalogToGlueCommand,
  ImportCatalogToGlueCommandInput,
  ImportCatalogToGlueCommandOutput,
} from "./commands/ImportCatalogToGlueCommand";
import {
  ListBlueprintsCommand,
  ListBlueprintsCommandInput,
  ListBlueprintsCommandOutput,
} from "./commands/ListBlueprintsCommand";
import {
  ListColumnStatisticsTaskRunsCommand,
  ListColumnStatisticsTaskRunsCommandInput,
  ListColumnStatisticsTaskRunsCommandOutput,
} from "./commands/ListColumnStatisticsTaskRunsCommand";
import {
  ListConnectionTypesCommand,
  ListConnectionTypesCommandInput,
  ListConnectionTypesCommandOutput,
} from "./commands/ListConnectionTypesCommand";
import {
  ListCrawlersCommand,
  ListCrawlersCommandInput,
  ListCrawlersCommandOutput,
} from "./commands/ListCrawlersCommand";
import { ListCrawlsCommand, ListCrawlsCommandInput, ListCrawlsCommandOutput } from "./commands/ListCrawlsCommand";
import {
  ListCustomEntityTypesCommand,
  ListCustomEntityTypesCommandInput,
  ListCustomEntityTypesCommandOutput,
} from "./commands/ListCustomEntityTypesCommand";
import {
  ListDataQualityResultsCommand,
  ListDataQualityResultsCommandInput,
  ListDataQualityResultsCommandOutput,
} from "./commands/ListDataQualityResultsCommand";
import {
  ListDataQualityRuleRecommendationRunsCommand,
  ListDataQualityRuleRecommendationRunsCommandInput,
  ListDataQualityRuleRecommendationRunsCommandOutput,
} from "./commands/ListDataQualityRuleRecommendationRunsCommand";
import {
  ListDataQualityRulesetEvaluationRunsCommand,
  ListDataQualityRulesetEvaluationRunsCommandInput,
  ListDataQualityRulesetEvaluationRunsCommandOutput,
} from "./commands/ListDataQualityRulesetEvaluationRunsCommand";
import {
  ListDataQualityRulesetsCommand,
  ListDataQualityRulesetsCommandInput,
  ListDataQualityRulesetsCommandOutput,
} from "./commands/ListDataQualityRulesetsCommand";
import {
  ListDataQualityStatisticAnnotationsCommand,
  ListDataQualityStatisticAnnotationsCommandInput,
  ListDataQualityStatisticAnnotationsCommandOutput,
} from "./commands/ListDataQualityStatisticAnnotationsCommand";
import {
  ListDataQualityStatisticsCommand,
  ListDataQualityStatisticsCommandInput,
  ListDataQualityStatisticsCommandOutput,
} from "./commands/ListDataQualityStatisticsCommand";
import {
  ListDevEndpointsCommand,
  ListDevEndpointsCommandInput,
  ListDevEndpointsCommandOutput,
} from "./commands/ListDevEndpointsCommand";
import {
  ListEntitiesCommand,
  ListEntitiesCommandInput,
  ListEntitiesCommandOutput,
} from "./commands/ListEntitiesCommand";
import { ListJobsCommand, ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import {
  ListMLTransformsCommand,
  ListMLTransformsCommandInput,
  ListMLTransformsCommandOutput,
} from "./commands/ListMLTransformsCommand";
import {
  ListRegistriesCommand,
  ListRegistriesCommandInput,
  ListRegistriesCommandOutput,
} from "./commands/ListRegistriesCommand";
import { ListSchemasCommand, ListSchemasCommandInput, ListSchemasCommandOutput } from "./commands/ListSchemasCommand";
import {
  ListSchemaVersionsCommand,
  ListSchemaVersionsCommandInput,
  ListSchemaVersionsCommandOutput,
} from "./commands/ListSchemaVersionsCommand";
import {
  ListSessionsCommand,
  ListSessionsCommandInput,
  ListSessionsCommandOutput,
} from "./commands/ListSessionsCommand";
import {
  ListStatementsCommand,
  ListStatementsCommandInput,
  ListStatementsCommandOutput,
} from "./commands/ListStatementsCommand";
import {
  ListTableOptimizerRunsCommand,
  ListTableOptimizerRunsCommandInput,
  ListTableOptimizerRunsCommandOutput,
} from "./commands/ListTableOptimizerRunsCommand";
import {
  ListTriggersCommand,
  ListTriggersCommandInput,
  ListTriggersCommandOutput,
} from "./commands/ListTriggersCommand";
import {
  ListUsageProfilesCommand,
  ListUsageProfilesCommandInput,
  ListUsageProfilesCommandOutput,
} from "./commands/ListUsageProfilesCommand";
import {
  ListWorkflowsCommand,
  ListWorkflowsCommandInput,
  ListWorkflowsCommandOutput,
} from "./commands/ListWorkflowsCommand";
import {
  ModifyIntegrationCommand,
  ModifyIntegrationCommandInput,
  ModifyIntegrationCommandOutput,
} from "./commands/ModifyIntegrationCommand";
import {
  PutDataCatalogEncryptionSettingsCommand,
  PutDataCatalogEncryptionSettingsCommandInput,
  PutDataCatalogEncryptionSettingsCommandOutput,
} from "./commands/PutDataCatalogEncryptionSettingsCommand";
import {
  PutDataQualityProfileAnnotationCommand,
  PutDataQualityProfileAnnotationCommandInput,
  PutDataQualityProfileAnnotationCommandOutput,
} from "./commands/PutDataQualityProfileAnnotationCommand";
import {
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import {
  PutSchemaVersionMetadataCommand,
  PutSchemaVersionMetadataCommandInput,
  PutSchemaVersionMetadataCommandOutput,
} from "./commands/PutSchemaVersionMetadataCommand";
import {
  PutWorkflowRunPropertiesCommand,
  PutWorkflowRunPropertiesCommandInput,
  PutWorkflowRunPropertiesCommandOutput,
} from "./commands/PutWorkflowRunPropertiesCommand";
import {
  QuerySchemaVersionMetadataCommand,
  QuerySchemaVersionMetadataCommandInput,
  QuerySchemaVersionMetadataCommandOutput,
} from "./commands/QuerySchemaVersionMetadataCommand";
import {
  RegisterSchemaVersionCommand,
  RegisterSchemaVersionCommandInput,
  RegisterSchemaVersionCommandOutput,
} from "./commands/RegisterSchemaVersionCommand";
import {
  RemoveSchemaVersionMetadataCommand,
  RemoveSchemaVersionMetadataCommandInput,
  RemoveSchemaVersionMetadataCommandOutput,
} from "./commands/RemoveSchemaVersionMetadataCommand";
import {
  ResetJobBookmarkCommand,
  ResetJobBookmarkCommandInput,
  ResetJobBookmarkCommandOutput,
} from "./commands/ResetJobBookmarkCommand";
import {
  ResumeWorkflowRunCommand,
  ResumeWorkflowRunCommandInput,
  ResumeWorkflowRunCommandOutput,
} from "./commands/ResumeWorkflowRunCommand";
import {
  RunStatementCommand,
  RunStatementCommandInput,
  RunStatementCommandOutput,
} from "./commands/RunStatementCommand";
import {
  SearchTablesCommand,
  SearchTablesCommandInput,
  SearchTablesCommandOutput,
} from "./commands/SearchTablesCommand";
import {
  StartBlueprintRunCommand,
  StartBlueprintRunCommandInput,
  StartBlueprintRunCommandOutput,
} from "./commands/StartBlueprintRunCommand";
import {
  StartColumnStatisticsTaskRunCommand,
  StartColumnStatisticsTaskRunCommandInput,
  StartColumnStatisticsTaskRunCommandOutput,
} from "./commands/StartColumnStatisticsTaskRunCommand";
import {
  StartColumnStatisticsTaskRunScheduleCommand,
  StartColumnStatisticsTaskRunScheduleCommandInput,
  StartColumnStatisticsTaskRunScheduleCommandOutput,
} from "./commands/StartColumnStatisticsTaskRunScheduleCommand";
import {
  StartCrawlerCommand,
  StartCrawlerCommandInput,
  StartCrawlerCommandOutput,
} from "./commands/StartCrawlerCommand";
import {
  StartCrawlerScheduleCommand,
  StartCrawlerScheduleCommandInput,
  StartCrawlerScheduleCommandOutput,
} from "./commands/StartCrawlerScheduleCommand";
import {
  StartDataQualityRuleRecommendationRunCommand,
  StartDataQualityRuleRecommendationRunCommandInput,
  StartDataQualityRuleRecommendationRunCommandOutput,
} from "./commands/StartDataQualityRuleRecommendationRunCommand";
import {
  StartDataQualityRulesetEvaluationRunCommand,
  StartDataQualityRulesetEvaluationRunCommandInput,
  StartDataQualityRulesetEvaluationRunCommandOutput,
} from "./commands/StartDataQualityRulesetEvaluationRunCommand";
import {
  StartExportLabelsTaskRunCommand,
  StartExportLabelsTaskRunCommandInput,
  StartExportLabelsTaskRunCommandOutput,
} from "./commands/StartExportLabelsTaskRunCommand";
import {
  StartImportLabelsTaskRunCommand,
  StartImportLabelsTaskRunCommandInput,
  StartImportLabelsTaskRunCommandOutput,
} from "./commands/StartImportLabelsTaskRunCommand";
import { StartJobRunCommand, StartJobRunCommandInput, StartJobRunCommandOutput } from "./commands/StartJobRunCommand";
import {
  StartMLEvaluationTaskRunCommand,
  StartMLEvaluationTaskRunCommandInput,
  StartMLEvaluationTaskRunCommandOutput,
} from "./commands/StartMLEvaluationTaskRunCommand";
import {
  StartMLLabelingSetGenerationTaskRunCommand,
  StartMLLabelingSetGenerationTaskRunCommandInput,
  StartMLLabelingSetGenerationTaskRunCommandOutput,
} from "./commands/StartMLLabelingSetGenerationTaskRunCommand";
import {
  StartTriggerCommand,
  StartTriggerCommandInput,
  StartTriggerCommandOutput,
} from "./commands/StartTriggerCommand";
import {
  StartWorkflowRunCommand,
  StartWorkflowRunCommandInput,
  StartWorkflowRunCommandOutput,
} from "./commands/StartWorkflowRunCommand";
import {
  StopColumnStatisticsTaskRunCommand,
  StopColumnStatisticsTaskRunCommandInput,
  StopColumnStatisticsTaskRunCommandOutput,
} from "./commands/StopColumnStatisticsTaskRunCommand";
import {
  StopColumnStatisticsTaskRunScheduleCommand,
  StopColumnStatisticsTaskRunScheduleCommandInput,
  StopColumnStatisticsTaskRunScheduleCommandOutput,
} from "./commands/StopColumnStatisticsTaskRunScheduleCommand";
import { StopCrawlerCommand, StopCrawlerCommandInput, StopCrawlerCommandOutput } from "./commands/StopCrawlerCommand";
import {
  StopCrawlerScheduleCommand,
  StopCrawlerScheduleCommandInput,
  StopCrawlerScheduleCommandOutput,
} from "./commands/StopCrawlerScheduleCommand";
import { StopSessionCommand, StopSessionCommandInput, StopSessionCommandOutput } from "./commands/StopSessionCommand";
import { StopTriggerCommand, StopTriggerCommandInput, StopTriggerCommandOutput } from "./commands/StopTriggerCommand";
import {
  StopWorkflowRunCommand,
  StopWorkflowRunCommandInput,
  StopWorkflowRunCommandOutput,
} from "./commands/StopWorkflowRunCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestConnectionCommand,
  TestConnectionCommandInput,
  TestConnectionCommandOutput,
} from "./commands/TestConnectionCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateBlueprintCommand,
  UpdateBlueprintCommandInput,
  UpdateBlueprintCommandOutput,
} from "./commands/UpdateBlueprintCommand";
import {
  UpdateCatalogCommand,
  UpdateCatalogCommandInput,
  UpdateCatalogCommandOutput,
} from "./commands/UpdateCatalogCommand";
import {
  UpdateClassifierCommand,
  UpdateClassifierCommandInput,
  UpdateClassifierCommandOutput,
} from "./commands/UpdateClassifierCommand";
import {
  UpdateColumnStatisticsForPartitionCommand,
  UpdateColumnStatisticsForPartitionCommandInput,
  UpdateColumnStatisticsForPartitionCommandOutput,
} from "./commands/UpdateColumnStatisticsForPartitionCommand";
import {
  UpdateColumnStatisticsForTableCommand,
  UpdateColumnStatisticsForTableCommandInput,
  UpdateColumnStatisticsForTableCommandOutput,
} from "./commands/UpdateColumnStatisticsForTableCommand";
import {
  UpdateColumnStatisticsTaskSettingsCommand,
  UpdateColumnStatisticsTaskSettingsCommandInput,
  UpdateColumnStatisticsTaskSettingsCommandOutput,
} from "./commands/UpdateColumnStatisticsTaskSettingsCommand";
import {
  UpdateConnectionCommand,
  UpdateConnectionCommandInput,
  UpdateConnectionCommandOutput,
} from "./commands/UpdateConnectionCommand";
import {
  UpdateCrawlerCommand,
  UpdateCrawlerCommandInput,
  UpdateCrawlerCommandOutput,
} from "./commands/UpdateCrawlerCommand";
import {
  UpdateCrawlerScheduleCommand,
  UpdateCrawlerScheduleCommandInput,
  UpdateCrawlerScheduleCommandOutput,
} from "./commands/UpdateCrawlerScheduleCommand";
import {
  UpdateDatabaseCommand,
  UpdateDatabaseCommandInput,
  UpdateDatabaseCommandOutput,
} from "./commands/UpdateDatabaseCommand";
import {
  UpdateDataQualityRulesetCommand,
  UpdateDataQualityRulesetCommandInput,
  UpdateDataQualityRulesetCommandOutput,
} from "./commands/UpdateDataQualityRulesetCommand";
import {
  UpdateDevEndpointCommand,
  UpdateDevEndpointCommandInput,
  UpdateDevEndpointCommandOutput,
} from "./commands/UpdateDevEndpointCommand";
import {
  UpdateGlueIdentityCenterConfigurationCommand,
  UpdateGlueIdentityCenterConfigurationCommandInput,
  UpdateGlueIdentityCenterConfigurationCommandOutput,
} from "./commands/UpdateGlueIdentityCenterConfigurationCommand";
import {
  UpdateIntegrationResourcePropertyCommand,
  UpdateIntegrationResourcePropertyCommandInput,
  UpdateIntegrationResourcePropertyCommandOutput,
} from "./commands/UpdateIntegrationResourcePropertyCommand";
import {
  UpdateIntegrationTablePropertiesCommand,
  UpdateIntegrationTablePropertiesCommandInput,
  UpdateIntegrationTablePropertiesCommandOutput,
} from "./commands/UpdateIntegrationTablePropertiesCommand";
import { UpdateJobCommand, UpdateJobCommandInput, UpdateJobCommandOutput } from "./commands/UpdateJobCommand";
import {
  UpdateJobFromSourceControlCommand,
  UpdateJobFromSourceControlCommandInput,
  UpdateJobFromSourceControlCommandOutput,
} from "./commands/UpdateJobFromSourceControlCommand";
import {
  UpdateMLTransformCommand,
  UpdateMLTransformCommandInput,
  UpdateMLTransformCommandOutput,
} from "./commands/UpdateMLTransformCommand";
import {
  UpdatePartitionCommand,
  UpdatePartitionCommandInput,
  UpdatePartitionCommandOutput,
} from "./commands/UpdatePartitionCommand";
import {
  UpdateRegistryCommand,
  UpdateRegistryCommandInput,
  UpdateRegistryCommandOutput,
} from "./commands/UpdateRegistryCommand";
import {
  UpdateSchemaCommand,
  UpdateSchemaCommandInput,
  UpdateSchemaCommandOutput,
} from "./commands/UpdateSchemaCommand";
import {
  UpdateSourceControlFromJobCommand,
  UpdateSourceControlFromJobCommandInput,
  UpdateSourceControlFromJobCommandOutput,
} from "./commands/UpdateSourceControlFromJobCommand";
import { UpdateTableCommand, UpdateTableCommandInput, UpdateTableCommandOutput } from "./commands/UpdateTableCommand";
import {
  UpdateTableOptimizerCommand,
  UpdateTableOptimizerCommandInput,
  UpdateTableOptimizerCommandOutput,
} from "./commands/UpdateTableOptimizerCommand";
import {
  UpdateTriggerCommand,
  UpdateTriggerCommandInput,
  UpdateTriggerCommandOutput,
} from "./commands/UpdateTriggerCommand";
import {
  UpdateUsageProfileCommand,
  UpdateUsageProfileCommandInput,
  UpdateUsageProfileCommandOutput,
} from "./commands/UpdateUsageProfileCommand";
import {
  UpdateUserDefinedFunctionCommand,
  UpdateUserDefinedFunctionCommandInput,
  UpdateUserDefinedFunctionCommandOutput,
} from "./commands/UpdateUserDefinedFunctionCommand";
import {
  UpdateWorkflowCommand,
  UpdateWorkflowCommandInput,
  UpdateWorkflowCommandOutput,
} from "./commands/UpdateWorkflowCommand";
import { GlueClient, GlueClientConfig } from "./GlueClient";

const commands = {
  BatchCreatePartitionCommand,
  BatchDeleteConnectionCommand,
  BatchDeletePartitionCommand,
  BatchDeleteTableCommand,
  BatchDeleteTableVersionCommand,
  BatchGetBlueprintsCommand,
  BatchGetCrawlersCommand,
  BatchGetCustomEntityTypesCommand,
  BatchGetDataQualityResultCommand,
  BatchGetDevEndpointsCommand,
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
  DeleteBlueprintCommand,
  DeleteCatalogCommand,
  DeleteClassifierCommand,
  DeleteColumnStatisticsForPartitionCommand,
  DeleteColumnStatisticsForTableCommand,
  DeleteColumnStatisticsTaskSettingsCommand,
  DeleteConnectionCommand,
  DeleteCrawlerCommand,
  DeleteCustomEntityTypeCommand,
  DeleteDatabaseCommand,
  DeleteDataQualityRulesetCommand,
  DeleteDevEndpointCommand,
  DeleteGlueIdentityCenterConfigurationCommand,
  DeleteIntegrationCommand,
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
  GetDatabaseCommand,
  GetDatabasesCommand,
  GetDataCatalogEncryptionSettingsCommand,
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
  GetGlueIdentityCenterConfigurationCommand,
  GetIntegrationResourcePropertyCommand,
  GetIntegrationTablePropertiesCommand,
  GetJobCommand,
  GetJobBookmarkCommand,
  GetJobRunCommand,
  GetJobRunsCommand,
  GetJobsCommand,
  GetMappingCommand,
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
  ListJobsCommand,
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
  PutDataCatalogEncryptionSettingsCommand,
  PutDataQualityProfileAnnotationCommand,
  PutResourcePolicyCommand,
  PutSchemaVersionMetadataCommand,
  PutWorkflowRunPropertiesCommand,
  QuerySchemaVersionMetadataCommand,
  RegisterSchemaVersionCommand,
  RemoveSchemaVersionMetadataCommand,
  ResetJobBookmarkCommand,
  ResumeWorkflowRunCommand,
  RunStatementCommand,
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
  StartMLEvaluationTaskRunCommand,
  StartMLLabelingSetGenerationTaskRunCommand,
  StartTriggerCommand,
  StartWorkflowRunCommand,
  StopColumnStatisticsTaskRunCommand,
  StopColumnStatisticsTaskRunScheduleCommand,
  StopCrawlerCommand,
  StopCrawlerScheduleCommand,
  StopSessionCommand,
  StopTriggerCommand,
  StopWorkflowRunCommand,
  TagResourceCommand,
  TestConnectionCommand,
  UntagResourceCommand,
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

export interface Glue {
  /**
   * @see {@link BatchCreatePartitionCommand}
   */
  batchCreatePartition(
    args: BatchCreatePartitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreatePartitionCommandOutput>;
  batchCreatePartition(
    args: BatchCreatePartitionCommandInput,
    cb: (err: any, data?: BatchCreatePartitionCommandOutput) => void
  ): void;
  batchCreatePartition(
    args: BatchCreatePartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreatePartitionCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteConnectionCommand}
   */
  batchDeleteConnection(
    args: BatchDeleteConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteConnectionCommandOutput>;
  batchDeleteConnection(
    args: BatchDeleteConnectionCommandInput,
    cb: (err: any, data?: BatchDeleteConnectionCommandOutput) => void
  ): void;
  batchDeleteConnection(
    args: BatchDeleteConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeletePartitionCommand}
   */
  batchDeletePartition(
    args: BatchDeletePartitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeletePartitionCommandOutput>;
  batchDeletePartition(
    args: BatchDeletePartitionCommandInput,
    cb: (err: any, data?: BatchDeletePartitionCommandOutput) => void
  ): void;
  batchDeletePartition(
    args: BatchDeletePartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeletePartitionCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteTableCommand}
   */
  batchDeleteTable(
    args: BatchDeleteTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteTableCommandOutput>;
  batchDeleteTable(
    args: BatchDeleteTableCommandInput,
    cb: (err: any, data?: BatchDeleteTableCommandOutput) => void
  ): void;
  batchDeleteTable(
    args: BatchDeleteTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteTableCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteTableVersionCommand}
   */
  batchDeleteTableVersion(
    args: BatchDeleteTableVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteTableVersionCommandOutput>;
  batchDeleteTableVersion(
    args: BatchDeleteTableVersionCommandInput,
    cb: (err: any, data?: BatchDeleteTableVersionCommandOutput) => void
  ): void;
  batchDeleteTableVersion(
    args: BatchDeleteTableVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteTableVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetBlueprintsCommand}
   */
  batchGetBlueprints(
    args: BatchGetBlueprintsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetBlueprintsCommandOutput>;
  batchGetBlueprints(
    args: BatchGetBlueprintsCommandInput,
    cb: (err: any, data?: BatchGetBlueprintsCommandOutput) => void
  ): void;
  batchGetBlueprints(
    args: BatchGetBlueprintsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetBlueprintsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetCrawlersCommand}
   */
  batchGetCrawlers(
    args: BatchGetCrawlersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetCrawlersCommandOutput>;
  batchGetCrawlers(
    args: BatchGetCrawlersCommandInput,
    cb: (err: any, data?: BatchGetCrawlersCommandOutput) => void
  ): void;
  batchGetCrawlers(
    args: BatchGetCrawlersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetCrawlersCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetCustomEntityTypesCommand}
   */
  batchGetCustomEntityTypes(
    args: BatchGetCustomEntityTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetCustomEntityTypesCommandOutput>;
  batchGetCustomEntityTypes(
    args: BatchGetCustomEntityTypesCommandInput,
    cb: (err: any, data?: BatchGetCustomEntityTypesCommandOutput) => void
  ): void;
  batchGetCustomEntityTypes(
    args: BatchGetCustomEntityTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetCustomEntityTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetDataQualityResultCommand}
   */
  batchGetDataQualityResult(
    args: BatchGetDataQualityResultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetDataQualityResultCommandOutput>;
  batchGetDataQualityResult(
    args: BatchGetDataQualityResultCommandInput,
    cb: (err: any, data?: BatchGetDataQualityResultCommandOutput) => void
  ): void;
  batchGetDataQualityResult(
    args: BatchGetDataQualityResultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetDataQualityResultCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetDevEndpointsCommand}
   */
  batchGetDevEndpoints(
    args: BatchGetDevEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetDevEndpointsCommandOutput>;
  batchGetDevEndpoints(
    args: BatchGetDevEndpointsCommandInput,
    cb: (err: any, data?: BatchGetDevEndpointsCommandOutput) => void
  ): void;
  batchGetDevEndpoints(
    args: BatchGetDevEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetDevEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetJobsCommand}
   */
  batchGetJobs(args: BatchGetJobsCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetJobsCommandOutput>;
  batchGetJobs(args: BatchGetJobsCommandInput, cb: (err: any, data?: BatchGetJobsCommandOutput) => void): void;
  batchGetJobs(
    args: BatchGetJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetPartitionCommand}
   */
  batchGetPartition(
    args: BatchGetPartitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetPartitionCommandOutput>;
  batchGetPartition(
    args: BatchGetPartitionCommandInput,
    cb: (err: any, data?: BatchGetPartitionCommandOutput) => void
  ): void;
  batchGetPartition(
    args: BatchGetPartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetPartitionCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetTableOptimizerCommand}
   */
  batchGetTableOptimizer(
    args: BatchGetTableOptimizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetTableOptimizerCommandOutput>;
  batchGetTableOptimizer(
    args: BatchGetTableOptimizerCommandInput,
    cb: (err: any, data?: BatchGetTableOptimizerCommandOutput) => void
  ): void;
  batchGetTableOptimizer(
    args: BatchGetTableOptimizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetTableOptimizerCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetTriggersCommand}
   */
  batchGetTriggers(
    args: BatchGetTriggersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetTriggersCommandOutput>;
  batchGetTriggers(
    args: BatchGetTriggersCommandInput,
    cb: (err: any, data?: BatchGetTriggersCommandOutput) => void
  ): void;
  batchGetTriggers(
    args: BatchGetTriggersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetTriggersCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetWorkflowsCommand}
   */
  batchGetWorkflows(
    args: BatchGetWorkflowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetWorkflowsCommandOutput>;
  batchGetWorkflows(
    args: BatchGetWorkflowsCommandInput,
    cb: (err: any, data?: BatchGetWorkflowsCommandOutput) => void
  ): void;
  batchGetWorkflows(
    args: BatchGetWorkflowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetWorkflowsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchPutDataQualityStatisticAnnotationCommand}
   */
  batchPutDataQualityStatisticAnnotation(
    args: BatchPutDataQualityStatisticAnnotationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchPutDataQualityStatisticAnnotationCommandOutput>;
  batchPutDataQualityStatisticAnnotation(
    args: BatchPutDataQualityStatisticAnnotationCommandInput,
    cb: (err: any, data?: BatchPutDataQualityStatisticAnnotationCommandOutput) => void
  ): void;
  batchPutDataQualityStatisticAnnotation(
    args: BatchPutDataQualityStatisticAnnotationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchPutDataQualityStatisticAnnotationCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchStopJobRunCommand}
   */
  batchStopJobRun(
    args: BatchStopJobRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchStopJobRunCommandOutput>;
  batchStopJobRun(args: BatchStopJobRunCommandInput, cb: (err: any, data?: BatchStopJobRunCommandOutput) => void): void;
  batchStopJobRun(
    args: BatchStopJobRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchStopJobRunCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdatePartitionCommand}
   */
  batchUpdatePartition(
    args: BatchUpdatePartitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdatePartitionCommandOutput>;
  batchUpdatePartition(
    args: BatchUpdatePartitionCommandInput,
    cb: (err: any, data?: BatchUpdatePartitionCommandOutput) => void
  ): void;
  batchUpdatePartition(
    args: BatchUpdatePartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdatePartitionCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelDataQualityRuleRecommendationRunCommand}
   */
  cancelDataQualityRuleRecommendationRun(
    args: CancelDataQualityRuleRecommendationRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelDataQualityRuleRecommendationRunCommandOutput>;
  cancelDataQualityRuleRecommendationRun(
    args: CancelDataQualityRuleRecommendationRunCommandInput,
    cb: (err: any, data?: CancelDataQualityRuleRecommendationRunCommandOutput) => void
  ): void;
  cancelDataQualityRuleRecommendationRun(
    args: CancelDataQualityRuleRecommendationRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelDataQualityRuleRecommendationRunCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelDataQualityRulesetEvaluationRunCommand}
   */
  cancelDataQualityRulesetEvaluationRun(
    args: CancelDataQualityRulesetEvaluationRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelDataQualityRulesetEvaluationRunCommandOutput>;
  cancelDataQualityRulesetEvaluationRun(
    args: CancelDataQualityRulesetEvaluationRunCommandInput,
    cb: (err: any, data?: CancelDataQualityRulesetEvaluationRunCommandOutput) => void
  ): void;
  cancelDataQualityRulesetEvaluationRun(
    args: CancelDataQualityRulesetEvaluationRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelDataQualityRulesetEvaluationRunCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelMLTaskRunCommand}
   */
  cancelMLTaskRun(
    args: CancelMLTaskRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelMLTaskRunCommandOutput>;
  cancelMLTaskRun(args: CancelMLTaskRunCommandInput, cb: (err: any, data?: CancelMLTaskRunCommandOutput) => void): void;
  cancelMLTaskRun(
    args: CancelMLTaskRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelMLTaskRunCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelStatementCommand}
   */
  cancelStatement(
    args: CancelStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelStatementCommandOutput>;
  cancelStatement(args: CancelStatementCommandInput, cb: (err: any, data?: CancelStatementCommandOutput) => void): void;
  cancelStatement(
    args: CancelStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelStatementCommandOutput) => void
  ): void;

  /**
   * @see {@link CheckSchemaVersionValidityCommand}
   */
  checkSchemaVersionValidity(
    args: CheckSchemaVersionValidityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CheckSchemaVersionValidityCommandOutput>;
  checkSchemaVersionValidity(
    args: CheckSchemaVersionValidityCommandInput,
    cb: (err: any, data?: CheckSchemaVersionValidityCommandOutput) => void
  ): void;
  checkSchemaVersionValidity(
    args: CheckSchemaVersionValidityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CheckSchemaVersionValidityCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBlueprintCommand}
   */
  createBlueprint(
    args: CreateBlueprintCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBlueprintCommandOutput>;
  createBlueprint(args: CreateBlueprintCommandInput, cb: (err: any, data?: CreateBlueprintCommandOutput) => void): void;
  createBlueprint(
    args: CreateBlueprintCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBlueprintCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCatalogCommand}
   */
  createCatalog(args: CreateCatalogCommandInput, options?: __HttpHandlerOptions): Promise<CreateCatalogCommandOutput>;
  createCatalog(args: CreateCatalogCommandInput, cb: (err: any, data?: CreateCatalogCommandOutput) => void): void;
  createCatalog(
    args: CreateCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCatalogCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClassifierCommand}
   */
  createClassifier(): Promise<CreateClassifierCommandOutput>;
  createClassifier(
    args: CreateClassifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClassifierCommandOutput>;
  createClassifier(
    args: CreateClassifierCommandInput,
    cb: (err: any, data?: CreateClassifierCommandOutput) => void
  ): void;
  createClassifier(
    args: CreateClassifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClassifierCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateColumnStatisticsTaskSettingsCommand}
   */
  createColumnStatisticsTaskSettings(
    args: CreateColumnStatisticsTaskSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateColumnStatisticsTaskSettingsCommandOutput>;
  createColumnStatisticsTaskSettings(
    args: CreateColumnStatisticsTaskSettingsCommandInput,
    cb: (err: any, data?: CreateColumnStatisticsTaskSettingsCommandOutput) => void
  ): void;
  createColumnStatisticsTaskSettings(
    args: CreateColumnStatisticsTaskSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateColumnStatisticsTaskSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectionCommand}
   */
  createConnection(
    args: CreateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectionCommandOutput>;
  createConnection(
    args: CreateConnectionCommandInput,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;
  createConnection(
    args: CreateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCrawlerCommand}
   */
  createCrawler(args: CreateCrawlerCommandInput, options?: __HttpHandlerOptions): Promise<CreateCrawlerCommandOutput>;
  createCrawler(args: CreateCrawlerCommandInput, cb: (err: any, data?: CreateCrawlerCommandOutput) => void): void;
  createCrawler(
    args: CreateCrawlerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCrawlerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCustomEntityTypeCommand}
   */
  createCustomEntityType(
    args: CreateCustomEntityTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomEntityTypeCommandOutput>;
  createCustomEntityType(
    args: CreateCustomEntityTypeCommandInput,
    cb: (err: any, data?: CreateCustomEntityTypeCommandOutput) => void
  ): void;
  createCustomEntityType(
    args: CreateCustomEntityTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomEntityTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatabaseCommand}
   */
  createDatabase(
    args: CreateDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatabaseCommandOutput>;
  createDatabase(args: CreateDatabaseCommandInput, cb: (err: any, data?: CreateDatabaseCommandOutput) => void): void;
  createDatabase(
    args: CreateDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataQualityRulesetCommand}
   */
  createDataQualityRuleset(
    args: CreateDataQualityRulesetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataQualityRulesetCommandOutput>;
  createDataQualityRuleset(
    args: CreateDataQualityRulesetCommandInput,
    cb: (err: any, data?: CreateDataQualityRulesetCommandOutput) => void
  ): void;
  createDataQualityRuleset(
    args: CreateDataQualityRulesetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataQualityRulesetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDevEndpointCommand}
   */
  createDevEndpoint(
    args: CreateDevEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDevEndpointCommandOutput>;
  createDevEndpoint(
    args: CreateDevEndpointCommandInput,
    cb: (err: any, data?: CreateDevEndpointCommandOutput) => void
  ): void;
  createDevEndpoint(
    args: CreateDevEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDevEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGlueIdentityCenterConfigurationCommand}
   */
  createGlueIdentityCenterConfiguration(
    args: CreateGlueIdentityCenterConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGlueIdentityCenterConfigurationCommandOutput>;
  createGlueIdentityCenterConfiguration(
    args: CreateGlueIdentityCenterConfigurationCommandInput,
    cb: (err: any, data?: CreateGlueIdentityCenterConfigurationCommandOutput) => void
  ): void;
  createGlueIdentityCenterConfiguration(
    args: CreateGlueIdentityCenterConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGlueIdentityCenterConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIntegrationCommand}
   */
  createIntegration(
    args: CreateIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIntegrationCommandOutput>;
  createIntegration(
    args: CreateIntegrationCommandInput,
    cb: (err: any, data?: CreateIntegrationCommandOutput) => void
  ): void;
  createIntegration(
    args: CreateIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIntegrationResourcePropertyCommand}
   */
  createIntegrationResourceProperty(
    args: CreateIntegrationResourcePropertyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIntegrationResourcePropertyCommandOutput>;
  createIntegrationResourceProperty(
    args: CreateIntegrationResourcePropertyCommandInput,
    cb: (err: any, data?: CreateIntegrationResourcePropertyCommandOutput) => void
  ): void;
  createIntegrationResourceProperty(
    args: CreateIntegrationResourcePropertyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIntegrationResourcePropertyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIntegrationTablePropertiesCommand}
   */
  createIntegrationTableProperties(
    args: CreateIntegrationTablePropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIntegrationTablePropertiesCommandOutput>;
  createIntegrationTableProperties(
    args: CreateIntegrationTablePropertiesCommandInput,
    cb: (err: any, data?: CreateIntegrationTablePropertiesCommandOutput) => void
  ): void;
  createIntegrationTableProperties(
    args: CreateIntegrationTablePropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIntegrationTablePropertiesCommandOutput) => void
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
   * @see {@link CreateMLTransformCommand}
   */
  createMLTransform(
    args: CreateMLTransformCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMLTransformCommandOutput>;
  createMLTransform(
    args: CreateMLTransformCommandInput,
    cb: (err: any, data?: CreateMLTransformCommandOutput) => void
  ): void;
  createMLTransform(
    args: CreateMLTransformCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMLTransformCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePartitionCommand}
   */
  createPartition(
    args: CreatePartitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePartitionCommandOutput>;
  createPartition(args: CreatePartitionCommandInput, cb: (err: any, data?: CreatePartitionCommandOutput) => void): void;
  createPartition(
    args: CreatePartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePartitionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePartitionIndexCommand}
   */
  createPartitionIndex(
    args: CreatePartitionIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePartitionIndexCommandOutput>;
  createPartitionIndex(
    args: CreatePartitionIndexCommandInput,
    cb: (err: any, data?: CreatePartitionIndexCommandOutput) => void
  ): void;
  createPartitionIndex(
    args: CreatePartitionIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePartitionIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRegistryCommand}
   */
  createRegistry(
    args: CreateRegistryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRegistryCommandOutput>;
  createRegistry(args: CreateRegistryCommandInput, cb: (err: any, data?: CreateRegistryCommandOutput) => void): void;
  createRegistry(
    args: CreateRegistryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRegistryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSchemaCommand}
   */
  createSchema(args: CreateSchemaCommandInput, options?: __HttpHandlerOptions): Promise<CreateSchemaCommandOutput>;
  createSchema(args: CreateSchemaCommandInput, cb: (err: any, data?: CreateSchemaCommandOutput) => void): void;
  createSchema(
    args: CreateSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateScriptCommand}
   */
  createScript(): Promise<CreateScriptCommandOutput>;
  createScript(args: CreateScriptCommandInput, options?: __HttpHandlerOptions): Promise<CreateScriptCommandOutput>;
  createScript(args: CreateScriptCommandInput, cb: (err: any, data?: CreateScriptCommandOutput) => void): void;
  createScript(
    args: CreateScriptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateScriptCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSecurityConfigurationCommand}
   */
  createSecurityConfiguration(
    args: CreateSecurityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSecurityConfigurationCommandOutput>;
  createSecurityConfiguration(
    args: CreateSecurityConfigurationCommandInput,
    cb: (err: any, data?: CreateSecurityConfigurationCommandOutput) => void
  ): void;
  createSecurityConfiguration(
    args: CreateSecurityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSecurityConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSessionCommand}
   */
  createSession(args: CreateSessionCommandInput, options?: __HttpHandlerOptions): Promise<CreateSessionCommandOutput>;
  createSession(args: CreateSessionCommandInput, cb: (err: any, data?: CreateSessionCommandOutput) => void): void;
  createSession(
    args: CreateSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTableCommand}
   */
  createTable(args: CreateTableCommandInput, options?: __HttpHandlerOptions): Promise<CreateTableCommandOutput>;
  createTable(args: CreateTableCommandInput, cb: (err: any, data?: CreateTableCommandOutput) => void): void;
  createTable(
    args: CreateTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTableCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTableOptimizerCommand}
   */
  createTableOptimizer(
    args: CreateTableOptimizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTableOptimizerCommandOutput>;
  createTableOptimizer(
    args: CreateTableOptimizerCommandInput,
    cb: (err: any, data?: CreateTableOptimizerCommandOutput) => void
  ): void;
  createTableOptimizer(
    args: CreateTableOptimizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTableOptimizerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTriggerCommand}
   */
  createTrigger(args: CreateTriggerCommandInput, options?: __HttpHandlerOptions): Promise<CreateTriggerCommandOutput>;
  createTrigger(args: CreateTriggerCommandInput, cb: (err: any, data?: CreateTriggerCommandOutput) => void): void;
  createTrigger(
    args: CreateTriggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTriggerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUsageProfileCommand}
   */
  createUsageProfile(
    args: CreateUsageProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUsageProfileCommandOutput>;
  createUsageProfile(
    args: CreateUsageProfileCommandInput,
    cb: (err: any, data?: CreateUsageProfileCommandOutput) => void
  ): void;
  createUsageProfile(
    args: CreateUsageProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUsageProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserDefinedFunctionCommand}
   */
  createUserDefinedFunction(
    args: CreateUserDefinedFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserDefinedFunctionCommandOutput>;
  createUserDefinedFunction(
    args: CreateUserDefinedFunctionCommandInput,
    cb: (err: any, data?: CreateUserDefinedFunctionCommandOutput) => void
  ): void;
  createUserDefinedFunction(
    args: CreateUserDefinedFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserDefinedFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkflowCommand}
   */
  createWorkflow(
    args: CreateWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkflowCommandOutput>;
  createWorkflow(args: CreateWorkflowCommandInput, cb: (err: any, data?: CreateWorkflowCommandOutput) => void): void;
  createWorkflow(
    args: CreateWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBlueprintCommand}
   */
  deleteBlueprint(
    args: DeleteBlueprintCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBlueprintCommandOutput>;
  deleteBlueprint(args: DeleteBlueprintCommandInput, cb: (err: any, data?: DeleteBlueprintCommandOutput) => void): void;
  deleteBlueprint(
    args: DeleteBlueprintCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBlueprintCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCatalogCommand}
   */
  deleteCatalog(args: DeleteCatalogCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCatalogCommandOutput>;
  deleteCatalog(args: DeleteCatalogCommandInput, cb: (err: any, data?: DeleteCatalogCommandOutput) => void): void;
  deleteCatalog(
    args: DeleteCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCatalogCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClassifierCommand}
   */
  deleteClassifier(
    args: DeleteClassifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClassifierCommandOutput>;
  deleteClassifier(
    args: DeleteClassifierCommandInput,
    cb: (err: any, data?: DeleteClassifierCommandOutput) => void
  ): void;
  deleteClassifier(
    args: DeleteClassifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClassifierCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteColumnStatisticsForPartitionCommand}
   */
  deleteColumnStatisticsForPartition(
    args: DeleteColumnStatisticsForPartitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteColumnStatisticsForPartitionCommandOutput>;
  deleteColumnStatisticsForPartition(
    args: DeleteColumnStatisticsForPartitionCommandInput,
    cb: (err: any, data?: DeleteColumnStatisticsForPartitionCommandOutput) => void
  ): void;
  deleteColumnStatisticsForPartition(
    args: DeleteColumnStatisticsForPartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteColumnStatisticsForPartitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteColumnStatisticsForTableCommand}
   */
  deleteColumnStatisticsForTable(
    args: DeleteColumnStatisticsForTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteColumnStatisticsForTableCommandOutput>;
  deleteColumnStatisticsForTable(
    args: DeleteColumnStatisticsForTableCommandInput,
    cb: (err: any, data?: DeleteColumnStatisticsForTableCommandOutput) => void
  ): void;
  deleteColumnStatisticsForTable(
    args: DeleteColumnStatisticsForTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteColumnStatisticsForTableCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteColumnStatisticsTaskSettingsCommand}
   */
  deleteColumnStatisticsTaskSettings(
    args: DeleteColumnStatisticsTaskSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteColumnStatisticsTaskSettingsCommandOutput>;
  deleteColumnStatisticsTaskSettings(
    args: DeleteColumnStatisticsTaskSettingsCommandInput,
    cb: (err: any, data?: DeleteColumnStatisticsTaskSettingsCommandOutput) => void
  ): void;
  deleteColumnStatisticsTaskSettings(
    args: DeleteColumnStatisticsTaskSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteColumnStatisticsTaskSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectionCommand}
   */
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectionCommandOutput>;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCrawlerCommand}
   */
  deleteCrawler(args: DeleteCrawlerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCrawlerCommandOutput>;
  deleteCrawler(args: DeleteCrawlerCommandInput, cb: (err: any, data?: DeleteCrawlerCommandOutput) => void): void;
  deleteCrawler(
    args: DeleteCrawlerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCrawlerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomEntityTypeCommand}
   */
  deleteCustomEntityType(
    args: DeleteCustomEntityTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomEntityTypeCommandOutput>;
  deleteCustomEntityType(
    args: DeleteCustomEntityTypeCommandInput,
    cb: (err: any, data?: DeleteCustomEntityTypeCommandOutput) => void
  ): void;
  deleteCustomEntityType(
    args: DeleteCustomEntityTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomEntityTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDatabaseCommand}
   */
  deleteDatabase(
    args: DeleteDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatabaseCommandOutput>;
  deleteDatabase(args: DeleteDatabaseCommandInput, cb: (err: any, data?: DeleteDatabaseCommandOutput) => void): void;
  deleteDatabase(
    args: DeleteDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataQualityRulesetCommand}
   */
  deleteDataQualityRuleset(
    args: DeleteDataQualityRulesetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataQualityRulesetCommandOutput>;
  deleteDataQualityRuleset(
    args: DeleteDataQualityRulesetCommandInput,
    cb: (err: any, data?: DeleteDataQualityRulesetCommandOutput) => void
  ): void;
  deleteDataQualityRuleset(
    args: DeleteDataQualityRulesetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataQualityRulesetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDevEndpointCommand}
   */
  deleteDevEndpoint(
    args: DeleteDevEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDevEndpointCommandOutput>;
  deleteDevEndpoint(
    args: DeleteDevEndpointCommandInput,
    cb: (err: any, data?: DeleteDevEndpointCommandOutput) => void
  ): void;
  deleteDevEndpoint(
    args: DeleteDevEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDevEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGlueIdentityCenterConfigurationCommand}
   */
  deleteGlueIdentityCenterConfiguration(): Promise<DeleteGlueIdentityCenterConfigurationCommandOutput>;
  deleteGlueIdentityCenterConfiguration(
    args: DeleteGlueIdentityCenterConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGlueIdentityCenterConfigurationCommandOutput>;
  deleteGlueIdentityCenterConfiguration(
    args: DeleteGlueIdentityCenterConfigurationCommandInput,
    cb: (err: any, data?: DeleteGlueIdentityCenterConfigurationCommandOutput) => void
  ): void;
  deleteGlueIdentityCenterConfiguration(
    args: DeleteGlueIdentityCenterConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGlueIdentityCenterConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIntegrationCommand}
   */
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIntegrationCommandOutput>;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIntegrationTablePropertiesCommand}
   */
  deleteIntegrationTableProperties(
    args: DeleteIntegrationTablePropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIntegrationTablePropertiesCommandOutput>;
  deleteIntegrationTableProperties(
    args: DeleteIntegrationTablePropertiesCommandInput,
    cb: (err: any, data?: DeleteIntegrationTablePropertiesCommandOutput) => void
  ): void;
  deleteIntegrationTableProperties(
    args: DeleteIntegrationTablePropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIntegrationTablePropertiesCommandOutput) => void
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
   * @see {@link DeleteMLTransformCommand}
   */
  deleteMLTransform(
    args: DeleteMLTransformCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMLTransformCommandOutput>;
  deleteMLTransform(
    args: DeleteMLTransformCommandInput,
    cb: (err: any, data?: DeleteMLTransformCommandOutput) => void
  ): void;
  deleteMLTransform(
    args: DeleteMLTransformCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMLTransformCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePartitionCommand}
   */
  deletePartition(
    args: DeletePartitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePartitionCommandOutput>;
  deletePartition(args: DeletePartitionCommandInput, cb: (err: any, data?: DeletePartitionCommandOutput) => void): void;
  deletePartition(
    args: DeletePartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePartitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePartitionIndexCommand}
   */
  deletePartitionIndex(
    args: DeletePartitionIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePartitionIndexCommandOutput>;
  deletePartitionIndex(
    args: DeletePartitionIndexCommandInput,
    cb: (err: any, data?: DeletePartitionIndexCommandOutput) => void
  ): void;
  deletePartitionIndex(
    args: DeletePartitionIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePartitionIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRegistryCommand}
   */
  deleteRegistry(
    args: DeleteRegistryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRegistryCommandOutput>;
  deleteRegistry(args: DeleteRegistryCommandInput, cb: (err: any, data?: DeleteRegistryCommandOutput) => void): void;
  deleteRegistry(
    args: DeleteRegistryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRegistryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSchemaCommand}
   */
  deleteSchema(args: DeleteSchemaCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSchemaCommandOutput>;
  deleteSchema(args: DeleteSchemaCommandInput, cb: (err: any, data?: DeleteSchemaCommandOutput) => void): void;
  deleteSchema(
    args: DeleteSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSchemaVersionsCommand}
   */
  deleteSchemaVersions(
    args: DeleteSchemaVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSchemaVersionsCommandOutput>;
  deleteSchemaVersions(
    args: DeleteSchemaVersionsCommandInput,
    cb: (err: any, data?: DeleteSchemaVersionsCommandOutput) => void
  ): void;
  deleteSchemaVersions(
    args: DeleteSchemaVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSchemaVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSecurityConfigurationCommand}
   */
  deleteSecurityConfiguration(
    args: DeleteSecurityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSecurityConfigurationCommandOutput>;
  deleteSecurityConfiguration(
    args: DeleteSecurityConfigurationCommandInput,
    cb: (err: any, data?: DeleteSecurityConfigurationCommandOutput) => void
  ): void;
  deleteSecurityConfiguration(
    args: DeleteSecurityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSecurityConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSessionCommand}
   */
  deleteSession(args: DeleteSessionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSessionCommandOutput>;
  deleteSession(args: DeleteSessionCommandInput, cb: (err: any, data?: DeleteSessionCommandOutput) => void): void;
  deleteSession(
    args: DeleteSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTableCommand}
   */
  deleteTable(args: DeleteTableCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTableCommandOutput>;
  deleteTable(args: DeleteTableCommandInput, cb: (err: any, data?: DeleteTableCommandOutput) => void): void;
  deleteTable(
    args: DeleteTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTableCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTableOptimizerCommand}
   */
  deleteTableOptimizer(
    args: DeleteTableOptimizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTableOptimizerCommandOutput>;
  deleteTableOptimizer(
    args: DeleteTableOptimizerCommandInput,
    cb: (err: any, data?: DeleteTableOptimizerCommandOutput) => void
  ): void;
  deleteTableOptimizer(
    args: DeleteTableOptimizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTableOptimizerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTableVersionCommand}
   */
  deleteTableVersion(
    args: DeleteTableVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTableVersionCommandOutput>;
  deleteTableVersion(
    args: DeleteTableVersionCommandInput,
    cb: (err: any, data?: DeleteTableVersionCommandOutput) => void
  ): void;
  deleteTableVersion(
    args: DeleteTableVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTableVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTriggerCommand}
   */
  deleteTrigger(args: DeleteTriggerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTriggerCommandOutput>;
  deleteTrigger(args: DeleteTriggerCommandInput, cb: (err: any, data?: DeleteTriggerCommandOutput) => void): void;
  deleteTrigger(
    args: DeleteTriggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTriggerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUsageProfileCommand}
   */
  deleteUsageProfile(
    args: DeleteUsageProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUsageProfileCommandOutput>;
  deleteUsageProfile(
    args: DeleteUsageProfileCommandInput,
    cb: (err: any, data?: DeleteUsageProfileCommandOutput) => void
  ): void;
  deleteUsageProfile(
    args: DeleteUsageProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUsageProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserDefinedFunctionCommand}
   */
  deleteUserDefinedFunction(
    args: DeleteUserDefinedFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserDefinedFunctionCommandOutput>;
  deleteUserDefinedFunction(
    args: DeleteUserDefinedFunctionCommandInput,
    cb: (err: any, data?: DeleteUserDefinedFunctionCommandOutput) => void
  ): void;
  deleteUserDefinedFunction(
    args: DeleteUserDefinedFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserDefinedFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkflowCommand}
   */
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkflowCommandOutput>;
  deleteWorkflow(args: DeleteWorkflowCommandInput, cb: (err: any, data?: DeleteWorkflowCommandOutput) => void): void;
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConnectionTypeCommand}
   */
  describeConnectionType(
    args: DescribeConnectionTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectionTypeCommandOutput>;
  describeConnectionType(
    args: DescribeConnectionTypeCommandInput,
    cb: (err: any, data?: DescribeConnectionTypeCommandOutput) => void
  ): void;
  describeConnectionType(
    args: DescribeConnectionTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectionTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEntityCommand}
   */
  describeEntity(
    args: DescribeEntityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEntityCommandOutput>;
  describeEntity(args: DescribeEntityCommandInput, cb: (err: any, data?: DescribeEntityCommandOutput) => void): void;
  describeEntity(
    args: DescribeEntityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEntityCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInboundIntegrationsCommand}
   */
  describeInboundIntegrations(): Promise<DescribeInboundIntegrationsCommandOutput>;
  describeInboundIntegrations(
    args: DescribeInboundIntegrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInboundIntegrationsCommandOutput>;
  describeInboundIntegrations(
    args: DescribeInboundIntegrationsCommandInput,
    cb: (err: any, data?: DescribeInboundIntegrationsCommandOutput) => void
  ): void;
  describeInboundIntegrations(
    args: DescribeInboundIntegrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInboundIntegrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIntegrationsCommand}
   */
  describeIntegrations(): Promise<DescribeIntegrationsCommandOutput>;
  describeIntegrations(
    args: DescribeIntegrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIntegrationsCommandOutput>;
  describeIntegrations(
    args: DescribeIntegrationsCommandInput,
    cb: (err: any, data?: DescribeIntegrationsCommandOutput) => void
  ): void;
  describeIntegrations(
    args: DescribeIntegrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIntegrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBlueprintCommand}
   */
  getBlueprint(args: GetBlueprintCommandInput, options?: __HttpHandlerOptions): Promise<GetBlueprintCommandOutput>;
  getBlueprint(args: GetBlueprintCommandInput, cb: (err: any, data?: GetBlueprintCommandOutput) => void): void;
  getBlueprint(
    args: GetBlueprintCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBlueprintCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBlueprintRunCommand}
   */
  getBlueprintRun(
    args: GetBlueprintRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBlueprintRunCommandOutput>;
  getBlueprintRun(args: GetBlueprintRunCommandInput, cb: (err: any, data?: GetBlueprintRunCommandOutput) => void): void;
  getBlueprintRun(
    args: GetBlueprintRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBlueprintRunCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBlueprintRunsCommand}
   */
  getBlueprintRuns(
    args: GetBlueprintRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBlueprintRunsCommandOutput>;
  getBlueprintRuns(
    args: GetBlueprintRunsCommandInput,
    cb: (err: any, data?: GetBlueprintRunsCommandOutput) => void
  ): void;
  getBlueprintRuns(
    args: GetBlueprintRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBlueprintRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCatalogCommand}
   */
  getCatalog(args: GetCatalogCommandInput, options?: __HttpHandlerOptions): Promise<GetCatalogCommandOutput>;
  getCatalog(args: GetCatalogCommandInput, cb: (err: any, data?: GetCatalogCommandOutput) => void): void;
  getCatalog(
    args: GetCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCatalogCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCatalogImportStatusCommand}
   */
  getCatalogImportStatus(): Promise<GetCatalogImportStatusCommandOutput>;
  getCatalogImportStatus(
    args: GetCatalogImportStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCatalogImportStatusCommandOutput>;
  getCatalogImportStatus(
    args: GetCatalogImportStatusCommandInput,
    cb: (err: any, data?: GetCatalogImportStatusCommandOutput) => void
  ): void;
  getCatalogImportStatus(
    args: GetCatalogImportStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCatalogImportStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCatalogsCommand}
   */
  getCatalogs(): Promise<GetCatalogsCommandOutput>;
  getCatalogs(args: GetCatalogsCommandInput, options?: __HttpHandlerOptions): Promise<GetCatalogsCommandOutput>;
  getCatalogs(args: GetCatalogsCommandInput, cb: (err: any, data?: GetCatalogsCommandOutput) => void): void;
  getCatalogs(
    args: GetCatalogsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCatalogsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetClassifierCommand}
   */
  getClassifier(args: GetClassifierCommandInput, options?: __HttpHandlerOptions): Promise<GetClassifierCommandOutput>;
  getClassifier(args: GetClassifierCommandInput, cb: (err: any, data?: GetClassifierCommandOutput) => void): void;
  getClassifier(
    args: GetClassifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClassifierCommandOutput) => void
  ): void;

  /**
   * @see {@link GetClassifiersCommand}
   */
  getClassifiers(): Promise<GetClassifiersCommandOutput>;
  getClassifiers(
    args: GetClassifiersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClassifiersCommandOutput>;
  getClassifiers(args: GetClassifiersCommandInput, cb: (err: any, data?: GetClassifiersCommandOutput) => void): void;
  getClassifiers(
    args: GetClassifiersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClassifiersCommandOutput) => void
  ): void;

  /**
   * @see {@link GetColumnStatisticsForPartitionCommand}
   */
  getColumnStatisticsForPartition(
    args: GetColumnStatisticsForPartitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetColumnStatisticsForPartitionCommandOutput>;
  getColumnStatisticsForPartition(
    args: GetColumnStatisticsForPartitionCommandInput,
    cb: (err: any, data?: GetColumnStatisticsForPartitionCommandOutput) => void
  ): void;
  getColumnStatisticsForPartition(
    args: GetColumnStatisticsForPartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetColumnStatisticsForPartitionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetColumnStatisticsForTableCommand}
   */
  getColumnStatisticsForTable(
    args: GetColumnStatisticsForTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetColumnStatisticsForTableCommandOutput>;
  getColumnStatisticsForTable(
    args: GetColumnStatisticsForTableCommandInput,
    cb: (err: any, data?: GetColumnStatisticsForTableCommandOutput) => void
  ): void;
  getColumnStatisticsForTable(
    args: GetColumnStatisticsForTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetColumnStatisticsForTableCommandOutput) => void
  ): void;

  /**
   * @see {@link GetColumnStatisticsTaskRunCommand}
   */
  getColumnStatisticsTaskRun(
    args: GetColumnStatisticsTaskRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetColumnStatisticsTaskRunCommandOutput>;
  getColumnStatisticsTaskRun(
    args: GetColumnStatisticsTaskRunCommandInput,
    cb: (err: any, data?: GetColumnStatisticsTaskRunCommandOutput) => void
  ): void;
  getColumnStatisticsTaskRun(
    args: GetColumnStatisticsTaskRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetColumnStatisticsTaskRunCommandOutput) => void
  ): void;

  /**
   * @see {@link GetColumnStatisticsTaskRunsCommand}
   */
  getColumnStatisticsTaskRuns(
    args: GetColumnStatisticsTaskRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetColumnStatisticsTaskRunsCommandOutput>;
  getColumnStatisticsTaskRuns(
    args: GetColumnStatisticsTaskRunsCommandInput,
    cb: (err: any, data?: GetColumnStatisticsTaskRunsCommandOutput) => void
  ): void;
  getColumnStatisticsTaskRuns(
    args: GetColumnStatisticsTaskRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetColumnStatisticsTaskRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetColumnStatisticsTaskSettingsCommand}
   */
  getColumnStatisticsTaskSettings(
    args: GetColumnStatisticsTaskSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetColumnStatisticsTaskSettingsCommandOutput>;
  getColumnStatisticsTaskSettings(
    args: GetColumnStatisticsTaskSettingsCommandInput,
    cb: (err: any, data?: GetColumnStatisticsTaskSettingsCommandOutput) => void
  ): void;
  getColumnStatisticsTaskSettings(
    args: GetColumnStatisticsTaskSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetColumnStatisticsTaskSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectionCommand}
   */
  getConnection(args: GetConnectionCommandInput, options?: __HttpHandlerOptions): Promise<GetConnectionCommandOutput>;
  getConnection(args: GetConnectionCommandInput, cb: (err: any, data?: GetConnectionCommandOutput) => void): void;
  getConnection(
    args: GetConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectionsCommand}
   */
  getConnections(): Promise<GetConnectionsCommandOutput>;
  getConnections(
    args: GetConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectionsCommandOutput>;
  getConnections(args: GetConnectionsCommandInput, cb: (err: any, data?: GetConnectionsCommandOutput) => void): void;
  getConnections(
    args: GetConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCrawlerCommand}
   */
  getCrawler(args: GetCrawlerCommandInput, options?: __HttpHandlerOptions): Promise<GetCrawlerCommandOutput>;
  getCrawler(args: GetCrawlerCommandInput, cb: (err: any, data?: GetCrawlerCommandOutput) => void): void;
  getCrawler(
    args: GetCrawlerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCrawlerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCrawlerMetricsCommand}
   */
  getCrawlerMetrics(): Promise<GetCrawlerMetricsCommandOutput>;
  getCrawlerMetrics(
    args: GetCrawlerMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCrawlerMetricsCommandOutput>;
  getCrawlerMetrics(
    args: GetCrawlerMetricsCommandInput,
    cb: (err: any, data?: GetCrawlerMetricsCommandOutput) => void
  ): void;
  getCrawlerMetrics(
    args: GetCrawlerMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCrawlerMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCrawlersCommand}
   */
  getCrawlers(): Promise<GetCrawlersCommandOutput>;
  getCrawlers(args: GetCrawlersCommandInput, options?: __HttpHandlerOptions): Promise<GetCrawlersCommandOutput>;
  getCrawlers(args: GetCrawlersCommandInput, cb: (err: any, data?: GetCrawlersCommandOutput) => void): void;
  getCrawlers(
    args: GetCrawlersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCrawlersCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCustomEntityTypeCommand}
   */
  getCustomEntityType(
    args: GetCustomEntityTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCustomEntityTypeCommandOutput>;
  getCustomEntityType(
    args: GetCustomEntityTypeCommandInput,
    cb: (err: any, data?: GetCustomEntityTypeCommandOutput) => void
  ): void;
  getCustomEntityType(
    args: GetCustomEntityTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCustomEntityTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDatabaseCommand}
   */
  getDatabase(args: GetDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<GetDatabaseCommandOutput>;
  getDatabase(args: GetDatabaseCommandInput, cb: (err: any, data?: GetDatabaseCommandOutput) => void): void;
  getDatabase(
    args: GetDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDatabasesCommand}
   */
  getDatabases(): Promise<GetDatabasesCommandOutput>;
  getDatabases(args: GetDatabasesCommandInput, options?: __HttpHandlerOptions): Promise<GetDatabasesCommandOutput>;
  getDatabases(args: GetDatabasesCommandInput, cb: (err: any, data?: GetDatabasesCommandOutput) => void): void;
  getDatabases(
    args: GetDatabasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDatabasesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataCatalogEncryptionSettingsCommand}
   */
  getDataCatalogEncryptionSettings(): Promise<GetDataCatalogEncryptionSettingsCommandOutput>;
  getDataCatalogEncryptionSettings(
    args: GetDataCatalogEncryptionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataCatalogEncryptionSettingsCommandOutput>;
  getDataCatalogEncryptionSettings(
    args: GetDataCatalogEncryptionSettingsCommandInput,
    cb: (err: any, data?: GetDataCatalogEncryptionSettingsCommandOutput) => void
  ): void;
  getDataCatalogEncryptionSettings(
    args: GetDataCatalogEncryptionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataCatalogEncryptionSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataflowGraphCommand}
   */
  getDataflowGraph(): Promise<GetDataflowGraphCommandOutput>;
  getDataflowGraph(
    args: GetDataflowGraphCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataflowGraphCommandOutput>;
  getDataflowGraph(
    args: GetDataflowGraphCommandInput,
    cb: (err: any, data?: GetDataflowGraphCommandOutput) => void
  ): void;
  getDataflowGraph(
    args: GetDataflowGraphCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataflowGraphCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataQualityModelCommand}
   */
  getDataQualityModel(
    args: GetDataQualityModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataQualityModelCommandOutput>;
  getDataQualityModel(
    args: GetDataQualityModelCommandInput,
    cb: (err: any, data?: GetDataQualityModelCommandOutput) => void
  ): void;
  getDataQualityModel(
    args: GetDataQualityModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataQualityModelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataQualityModelResultCommand}
   */
  getDataQualityModelResult(
    args: GetDataQualityModelResultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataQualityModelResultCommandOutput>;
  getDataQualityModelResult(
    args: GetDataQualityModelResultCommandInput,
    cb: (err: any, data?: GetDataQualityModelResultCommandOutput) => void
  ): void;
  getDataQualityModelResult(
    args: GetDataQualityModelResultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataQualityModelResultCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataQualityResultCommand}
   */
  getDataQualityResult(
    args: GetDataQualityResultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataQualityResultCommandOutput>;
  getDataQualityResult(
    args: GetDataQualityResultCommandInput,
    cb: (err: any, data?: GetDataQualityResultCommandOutput) => void
  ): void;
  getDataQualityResult(
    args: GetDataQualityResultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataQualityResultCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataQualityRuleRecommendationRunCommand}
   */
  getDataQualityRuleRecommendationRun(
    args: GetDataQualityRuleRecommendationRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataQualityRuleRecommendationRunCommandOutput>;
  getDataQualityRuleRecommendationRun(
    args: GetDataQualityRuleRecommendationRunCommandInput,
    cb: (err: any, data?: GetDataQualityRuleRecommendationRunCommandOutput) => void
  ): void;
  getDataQualityRuleRecommendationRun(
    args: GetDataQualityRuleRecommendationRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataQualityRuleRecommendationRunCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataQualityRulesetCommand}
   */
  getDataQualityRuleset(
    args: GetDataQualityRulesetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataQualityRulesetCommandOutput>;
  getDataQualityRuleset(
    args: GetDataQualityRulesetCommandInput,
    cb: (err: any, data?: GetDataQualityRulesetCommandOutput) => void
  ): void;
  getDataQualityRuleset(
    args: GetDataQualityRulesetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataQualityRulesetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataQualityRulesetEvaluationRunCommand}
   */
  getDataQualityRulesetEvaluationRun(
    args: GetDataQualityRulesetEvaluationRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataQualityRulesetEvaluationRunCommandOutput>;
  getDataQualityRulesetEvaluationRun(
    args: GetDataQualityRulesetEvaluationRunCommandInput,
    cb: (err: any, data?: GetDataQualityRulesetEvaluationRunCommandOutput) => void
  ): void;
  getDataQualityRulesetEvaluationRun(
    args: GetDataQualityRulesetEvaluationRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataQualityRulesetEvaluationRunCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDevEndpointCommand}
   */
  getDevEndpoint(
    args: GetDevEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDevEndpointCommandOutput>;
  getDevEndpoint(args: GetDevEndpointCommandInput, cb: (err: any, data?: GetDevEndpointCommandOutput) => void): void;
  getDevEndpoint(
    args: GetDevEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDevEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDevEndpointsCommand}
   */
  getDevEndpoints(): Promise<GetDevEndpointsCommandOutput>;
  getDevEndpoints(
    args: GetDevEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDevEndpointsCommandOutput>;
  getDevEndpoints(args: GetDevEndpointsCommandInput, cb: (err: any, data?: GetDevEndpointsCommandOutput) => void): void;
  getDevEndpoints(
    args: GetDevEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDevEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEntityRecordsCommand}
   */
  getEntityRecords(
    args: GetEntityRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEntityRecordsCommandOutput>;
  getEntityRecords(
    args: GetEntityRecordsCommandInput,
    cb: (err: any, data?: GetEntityRecordsCommandOutput) => void
  ): void;
  getEntityRecords(
    args: GetEntityRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEntityRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGlueIdentityCenterConfigurationCommand}
   */
  getGlueIdentityCenterConfiguration(): Promise<GetGlueIdentityCenterConfigurationCommandOutput>;
  getGlueIdentityCenterConfiguration(
    args: GetGlueIdentityCenterConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGlueIdentityCenterConfigurationCommandOutput>;
  getGlueIdentityCenterConfiguration(
    args: GetGlueIdentityCenterConfigurationCommandInput,
    cb: (err: any, data?: GetGlueIdentityCenterConfigurationCommandOutput) => void
  ): void;
  getGlueIdentityCenterConfiguration(
    args: GetGlueIdentityCenterConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGlueIdentityCenterConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIntegrationResourcePropertyCommand}
   */
  getIntegrationResourceProperty(
    args: GetIntegrationResourcePropertyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIntegrationResourcePropertyCommandOutput>;
  getIntegrationResourceProperty(
    args: GetIntegrationResourcePropertyCommandInput,
    cb: (err: any, data?: GetIntegrationResourcePropertyCommandOutput) => void
  ): void;
  getIntegrationResourceProperty(
    args: GetIntegrationResourcePropertyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntegrationResourcePropertyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIntegrationTablePropertiesCommand}
   */
  getIntegrationTableProperties(
    args: GetIntegrationTablePropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIntegrationTablePropertiesCommandOutput>;
  getIntegrationTableProperties(
    args: GetIntegrationTablePropertiesCommandInput,
    cb: (err: any, data?: GetIntegrationTablePropertiesCommandOutput) => void
  ): void;
  getIntegrationTableProperties(
    args: GetIntegrationTablePropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntegrationTablePropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobCommand}
   */
  getJob(args: GetJobCommandInput, options?: __HttpHandlerOptions): Promise<GetJobCommandOutput>;
  getJob(args: GetJobCommandInput, cb: (err: any, data?: GetJobCommandOutput) => void): void;
  getJob(
    args: GetJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobBookmarkCommand}
   */
  getJobBookmark(
    args: GetJobBookmarkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetJobBookmarkCommandOutput>;
  getJobBookmark(args: GetJobBookmarkCommandInput, cb: (err: any, data?: GetJobBookmarkCommandOutput) => void): void;
  getJobBookmark(
    args: GetJobBookmarkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobBookmarkCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobRunCommand}
   */
  getJobRun(args: GetJobRunCommandInput, options?: __HttpHandlerOptions): Promise<GetJobRunCommandOutput>;
  getJobRun(args: GetJobRunCommandInput, cb: (err: any, data?: GetJobRunCommandOutput) => void): void;
  getJobRun(
    args: GetJobRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobRunCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobRunsCommand}
   */
  getJobRuns(args: GetJobRunsCommandInput, options?: __HttpHandlerOptions): Promise<GetJobRunsCommandOutput>;
  getJobRuns(args: GetJobRunsCommandInput, cb: (err: any, data?: GetJobRunsCommandOutput) => void): void;
  getJobRuns(
    args: GetJobRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobsCommand}
   */
  getJobs(): Promise<GetJobsCommandOutput>;
  getJobs(args: GetJobsCommandInput, options?: __HttpHandlerOptions): Promise<GetJobsCommandOutput>;
  getJobs(args: GetJobsCommandInput, cb: (err: any, data?: GetJobsCommandOutput) => void): void;
  getJobs(
    args: GetJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMappingCommand}
   */
  getMapping(args: GetMappingCommandInput, options?: __HttpHandlerOptions): Promise<GetMappingCommandOutput>;
  getMapping(args: GetMappingCommandInput, cb: (err: any, data?: GetMappingCommandOutput) => void): void;
  getMapping(
    args: GetMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMLTaskRunCommand}
   */
  getMLTaskRun(args: GetMLTaskRunCommandInput, options?: __HttpHandlerOptions): Promise<GetMLTaskRunCommandOutput>;
  getMLTaskRun(args: GetMLTaskRunCommandInput, cb: (err: any, data?: GetMLTaskRunCommandOutput) => void): void;
  getMLTaskRun(
    args: GetMLTaskRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMLTaskRunCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMLTaskRunsCommand}
   */
  getMLTaskRuns(args: GetMLTaskRunsCommandInput, options?: __HttpHandlerOptions): Promise<GetMLTaskRunsCommandOutput>;
  getMLTaskRuns(args: GetMLTaskRunsCommandInput, cb: (err: any, data?: GetMLTaskRunsCommandOutput) => void): void;
  getMLTaskRuns(
    args: GetMLTaskRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMLTaskRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMLTransformCommand}
   */
  getMLTransform(
    args: GetMLTransformCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMLTransformCommandOutput>;
  getMLTransform(args: GetMLTransformCommandInput, cb: (err: any, data?: GetMLTransformCommandOutput) => void): void;
  getMLTransform(
    args: GetMLTransformCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMLTransformCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMLTransformsCommand}
   */
  getMLTransforms(): Promise<GetMLTransformsCommandOutput>;
  getMLTransforms(
    args: GetMLTransformsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMLTransformsCommandOutput>;
  getMLTransforms(args: GetMLTransformsCommandInput, cb: (err: any, data?: GetMLTransformsCommandOutput) => void): void;
  getMLTransforms(
    args: GetMLTransformsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMLTransformsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPartitionCommand}
   */
  getPartition(args: GetPartitionCommandInput, options?: __HttpHandlerOptions): Promise<GetPartitionCommandOutput>;
  getPartition(args: GetPartitionCommandInput, cb: (err: any, data?: GetPartitionCommandOutput) => void): void;
  getPartition(
    args: GetPartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPartitionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPartitionIndexesCommand}
   */
  getPartitionIndexes(
    args: GetPartitionIndexesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPartitionIndexesCommandOutput>;
  getPartitionIndexes(
    args: GetPartitionIndexesCommandInput,
    cb: (err: any, data?: GetPartitionIndexesCommandOutput) => void
  ): void;
  getPartitionIndexes(
    args: GetPartitionIndexesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPartitionIndexesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPartitionsCommand}
   */
  getPartitions(args: GetPartitionsCommandInput, options?: __HttpHandlerOptions): Promise<GetPartitionsCommandOutput>;
  getPartitions(args: GetPartitionsCommandInput, cb: (err: any, data?: GetPartitionsCommandOutput) => void): void;
  getPartitions(
    args: GetPartitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPartitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPlanCommand}
   */
  getPlan(args: GetPlanCommandInput, options?: __HttpHandlerOptions): Promise<GetPlanCommandOutput>;
  getPlan(args: GetPlanCommandInput, cb: (err: any, data?: GetPlanCommandOutput) => void): void;
  getPlan(
    args: GetPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRegistryCommand}
   */
  getRegistry(args: GetRegistryCommandInput, options?: __HttpHandlerOptions): Promise<GetRegistryCommandOutput>;
  getRegistry(args: GetRegistryCommandInput, cb: (err: any, data?: GetRegistryCommandOutput) => void): void;
  getRegistry(
    args: GetRegistryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRegistryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePoliciesCommand}
   */
  getResourcePolicies(): Promise<GetResourcePoliciesCommandOutput>;
  getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePoliciesCommandOutput>;
  getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    cb: (err: any, data?: GetResourcePoliciesCommandOutput) => void
  ): void;
  getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSchemaCommand}
   */
  getSchema(args: GetSchemaCommandInput, options?: __HttpHandlerOptions): Promise<GetSchemaCommandOutput>;
  getSchema(args: GetSchemaCommandInput, cb: (err: any, data?: GetSchemaCommandOutput) => void): void;
  getSchema(
    args: GetSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSchemaByDefinitionCommand}
   */
  getSchemaByDefinition(
    args: GetSchemaByDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSchemaByDefinitionCommandOutput>;
  getSchemaByDefinition(
    args: GetSchemaByDefinitionCommandInput,
    cb: (err: any, data?: GetSchemaByDefinitionCommandOutput) => void
  ): void;
  getSchemaByDefinition(
    args: GetSchemaByDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSchemaByDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSchemaVersionCommand}
   */
  getSchemaVersion(): Promise<GetSchemaVersionCommandOutput>;
  getSchemaVersion(
    args: GetSchemaVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSchemaVersionCommandOutput>;
  getSchemaVersion(
    args: GetSchemaVersionCommandInput,
    cb: (err: any, data?: GetSchemaVersionCommandOutput) => void
  ): void;
  getSchemaVersion(
    args: GetSchemaVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSchemaVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSchemaVersionsDiffCommand}
   */
  getSchemaVersionsDiff(
    args: GetSchemaVersionsDiffCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSchemaVersionsDiffCommandOutput>;
  getSchemaVersionsDiff(
    args: GetSchemaVersionsDiffCommandInput,
    cb: (err: any, data?: GetSchemaVersionsDiffCommandOutput) => void
  ): void;
  getSchemaVersionsDiff(
    args: GetSchemaVersionsDiffCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSchemaVersionsDiffCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSecurityConfigurationCommand}
   */
  getSecurityConfiguration(
    args: GetSecurityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSecurityConfigurationCommandOutput>;
  getSecurityConfiguration(
    args: GetSecurityConfigurationCommandInput,
    cb: (err: any, data?: GetSecurityConfigurationCommandOutput) => void
  ): void;
  getSecurityConfiguration(
    args: GetSecurityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSecurityConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSecurityConfigurationsCommand}
   */
  getSecurityConfigurations(): Promise<GetSecurityConfigurationsCommandOutput>;
  getSecurityConfigurations(
    args: GetSecurityConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSecurityConfigurationsCommandOutput>;
  getSecurityConfigurations(
    args: GetSecurityConfigurationsCommandInput,
    cb: (err: any, data?: GetSecurityConfigurationsCommandOutput) => void
  ): void;
  getSecurityConfigurations(
    args: GetSecurityConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSecurityConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSessionCommand}
   */
  getSession(args: GetSessionCommandInput, options?: __HttpHandlerOptions): Promise<GetSessionCommandOutput>;
  getSession(args: GetSessionCommandInput, cb: (err: any, data?: GetSessionCommandOutput) => void): void;
  getSession(
    args: GetSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStatementCommand}
   */
  getStatement(args: GetStatementCommandInput, options?: __HttpHandlerOptions): Promise<GetStatementCommandOutput>;
  getStatement(args: GetStatementCommandInput, cb: (err: any, data?: GetStatementCommandOutput) => void): void;
  getStatement(
    args: GetStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStatementCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableCommand}
   */
  getTable(args: GetTableCommandInput, options?: __HttpHandlerOptions): Promise<GetTableCommandOutput>;
  getTable(args: GetTableCommandInput, cb: (err: any, data?: GetTableCommandOutput) => void): void;
  getTable(
    args: GetTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableOptimizerCommand}
   */
  getTableOptimizer(
    args: GetTableOptimizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTableOptimizerCommandOutput>;
  getTableOptimizer(
    args: GetTableOptimizerCommandInput,
    cb: (err: any, data?: GetTableOptimizerCommandOutput) => void
  ): void;
  getTableOptimizer(
    args: GetTableOptimizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableOptimizerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTablesCommand}
   */
  getTables(args: GetTablesCommandInput, options?: __HttpHandlerOptions): Promise<GetTablesCommandOutput>;
  getTables(args: GetTablesCommandInput, cb: (err: any, data?: GetTablesCommandOutput) => void): void;
  getTables(
    args: GetTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTablesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableVersionCommand}
   */
  getTableVersion(
    args: GetTableVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTableVersionCommandOutput>;
  getTableVersion(args: GetTableVersionCommandInput, cb: (err: any, data?: GetTableVersionCommandOutput) => void): void;
  getTableVersion(
    args: GetTableVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableVersionsCommand}
   */
  getTableVersions(
    args: GetTableVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTableVersionsCommandOutput>;
  getTableVersions(
    args: GetTableVersionsCommandInput,
    cb: (err: any, data?: GetTableVersionsCommandOutput) => void
  ): void;
  getTableVersions(
    args: GetTableVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTagsCommand}
   */
  getTags(args: GetTagsCommandInput, options?: __HttpHandlerOptions): Promise<GetTagsCommandOutput>;
  getTags(args: GetTagsCommandInput, cb: (err: any, data?: GetTagsCommandOutput) => void): void;
  getTags(
    args: GetTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTriggerCommand}
   */
  getTrigger(args: GetTriggerCommandInput, options?: __HttpHandlerOptions): Promise<GetTriggerCommandOutput>;
  getTrigger(args: GetTriggerCommandInput, cb: (err: any, data?: GetTriggerCommandOutput) => void): void;
  getTrigger(
    args: GetTriggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTriggerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTriggersCommand}
   */
  getTriggers(): Promise<GetTriggersCommandOutput>;
  getTriggers(args: GetTriggersCommandInput, options?: __HttpHandlerOptions): Promise<GetTriggersCommandOutput>;
  getTriggers(args: GetTriggersCommandInput, cb: (err: any, data?: GetTriggersCommandOutput) => void): void;
  getTriggers(
    args: GetTriggersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTriggersCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUnfilteredPartitionMetadataCommand}
   */
  getUnfilteredPartitionMetadata(
    args: GetUnfilteredPartitionMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUnfilteredPartitionMetadataCommandOutput>;
  getUnfilteredPartitionMetadata(
    args: GetUnfilteredPartitionMetadataCommandInput,
    cb: (err: any, data?: GetUnfilteredPartitionMetadataCommandOutput) => void
  ): void;
  getUnfilteredPartitionMetadata(
    args: GetUnfilteredPartitionMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUnfilteredPartitionMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUnfilteredPartitionsMetadataCommand}
   */
  getUnfilteredPartitionsMetadata(
    args: GetUnfilteredPartitionsMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUnfilteredPartitionsMetadataCommandOutput>;
  getUnfilteredPartitionsMetadata(
    args: GetUnfilteredPartitionsMetadataCommandInput,
    cb: (err: any, data?: GetUnfilteredPartitionsMetadataCommandOutput) => void
  ): void;
  getUnfilteredPartitionsMetadata(
    args: GetUnfilteredPartitionsMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUnfilteredPartitionsMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUnfilteredTableMetadataCommand}
   */
  getUnfilteredTableMetadata(
    args: GetUnfilteredTableMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUnfilteredTableMetadataCommandOutput>;
  getUnfilteredTableMetadata(
    args: GetUnfilteredTableMetadataCommandInput,
    cb: (err: any, data?: GetUnfilteredTableMetadataCommandOutput) => void
  ): void;
  getUnfilteredTableMetadata(
    args: GetUnfilteredTableMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUnfilteredTableMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUsageProfileCommand}
   */
  getUsageProfile(
    args: GetUsageProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUsageProfileCommandOutput>;
  getUsageProfile(args: GetUsageProfileCommandInput, cb: (err: any, data?: GetUsageProfileCommandOutput) => void): void;
  getUsageProfile(
    args: GetUsageProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsageProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserDefinedFunctionCommand}
   */
  getUserDefinedFunction(
    args: GetUserDefinedFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserDefinedFunctionCommandOutput>;
  getUserDefinedFunction(
    args: GetUserDefinedFunctionCommandInput,
    cb: (err: any, data?: GetUserDefinedFunctionCommandOutput) => void
  ): void;
  getUserDefinedFunction(
    args: GetUserDefinedFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserDefinedFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserDefinedFunctionsCommand}
   */
  getUserDefinedFunctions(
    args: GetUserDefinedFunctionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserDefinedFunctionsCommandOutput>;
  getUserDefinedFunctions(
    args: GetUserDefinedFunctionsCommandInput,
    cb: (err: any, data?: GetUserDefinedFunctionsCommandOutput) => void
  ): void;
  getUserDefinedFunctions(
    args: GetUserDefinedFunctionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserDefinedFunctionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowCommand}
   */
  getWorkflow(args: GetWorkflowCommandInput, options?: __HttpHandlerOptions): Promise<GetWorkflowCommandOutput>;
  getWorkflow(args: GetWorkflowCommandInput, cb: (err: any, data?: GetWorkflowCommandOutput) => void): void;
  getWorkflow(
    args: GetWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowRunCommand}
   */
  getWorkflowRun(
    args: GetWorkflowRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkflowRunCommandOutput>;
  getWorkflowRun(args: GetWorkflowRunCommandInput, cb: (err: any, data?: GetWorkflowRunCommandOutput) => void): void;
  getWorkflowRun(
    args: GetWorkflowRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowRunCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowRunPropertiesCommand}
   */
  getWorkflowRunProperties(
    args: GetWorkflowRunPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkflowRunPropertiesCommandOutput>;
  getWorkflowRunProperties(
    args: GetWorkflowRunPropertiesCommandInput,
    cb: (err: any, data?: GetWorkflowRunPropertiesCommandOutput) => void
  ): void;
  getWorkflowRunProperties(
    args: GetWorkflowRunPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowRunPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowRunsCommand}
   */
  getWorkflowRuns(
    args: GetWorkflowRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkflowRunsCommandOutput>;
  getWorkflowRuns(args: GetWorkflowRunsCommandInput, cb: (err: any, data?: GetWorkflowRunsCommandOutput) => void): void;
  getWorkflowRuns(
    args: GetWorkflowRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportCatalogToGlueCommand}
   */
  importCatalogToGlue(): Promise<ImportCatalogToGlueCommandOutput>;
  importCatalogToGlue(
    args: ImportCatalogToGlueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportCatalogToGlueCommandOutput>;
  importCatalogToGlue(
    args: ImportCatalogToGlueCommandInput,
    cb: (err: any, data?: ImportCatalogToGlueCommandOutput) => void
  ): void;
  importCatalogToGlue(
    args: ImportCatalogToGlueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportCatalogToGlueCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBlueprintsCommand}
   */
  listBlueprints(): Promise<ListBlueprintsCommandOutput>;
  listBlueprints(
    args: ListBlueprintsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBlueprintsCommandOutput>;
  listBlueprints(args: ListBlueprintsCommandInput, cb: (err: any, data?: ListBlueprintsCommandOutput) => void): void;
  listBlueprints(
    args: ListBlueprintsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBlueprintsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListColumnStatisticsTaskRunsCommand}
   */
  listColumnStatisticsTaskRuns(): Promise<ListColumnStatisticsTaskRunsCommandOutput>;
  listColumnStatisticsTaskRuns(
    args: ListColumnStatisticsTaskRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListColumnStatisticsTaskRunsCommandOutput>;
  listColumnStatisticsTaskRuns(
    args: ListColumnStatisticsTaskRunsCommandInput,
    cb: (err: any, data?: ListColumnStatisticsTaskRunsCommandOutput) => void
  ): void;
  listColumnStatisticsTaskRuns(
    args: ListColumnStatisticsTaskRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListColumnStatisticsTaskRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectionTypesCommand}
   */
  listConnectionTypes(): Promise<ListConnectionTypesCommandOutput>;
  listConnectionTypes(
    args: ListConnectionTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectionTypesCommandOutput>;
  listConnectionTypes(
    args: ListConnectionTypesCommandInput,
    cb: (err: any, data?: ListConnectionTypesCommandOutput) => void
  ): void;
  listConnectionTypes(
    args: ListConnectionTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectionTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCrawlersCommand}
   */
  listCrawlers(): Promise<ListCrawlersCommandOutput>;
  listCrawlers(args: ListCrawlersCommandInput, options?: __HttpHandlerOptions): Promise<ListCrawlersCommandOutput>;
  listCrawlers(args: ListCrawlersCommandInput, cb: (err: any, data?: ListCrawlersCommandOutput) => void): void;
  listCrawlers(
    args: ListCrawlersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCrawlersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCrawlsCommand}
   */
  listCrawls(args: ListCrawlsCommandInput, options?: __HttpHandlerOptions): Promise<ListCrawlsCommandOutput>;
  listCrawls(args: ListCrawlsCommandInput, cb: (err: any, data?: ListCrawlsCommandOutput) => void): void;
  listCrawls(
    args: ListCrawlsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCrawlsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomEntityTypesCommand}
   */
  listCustomEntityTypes(): Promise<ListCustomEntityTypesCommandOutput>;
  listCustomEntityTypes(
    args: ListCustomEntityTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomEntityTypesCommandOutput>;
  listCustomEntityTypes(
    args: ListCustomEntityTypesCommandInput,
    cb: (err: any, data?: ListCustomEntityTypesCommandOutput) => void
  ): void;
  listCustomEntityTypes(
    args: ListCustomEntityTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomEntityTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataQualityResultsCommand}
   */
  listDataQualityResults(): Promise<ListDataQualityResultsCommandOutput>;
  listDataQualityResults(
    args: ListDataQualityResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataQualityResultsCommandOutput>;
  listDataQualityResults(
    args: ListDataQualityResultsCommandInput,
    cb: (err: any, data?: ListDataQualityResultsCommandOutput) => void
  ): void;
  listDataQualityResults(
    args: ListDataQualityResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataQualityResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataQualityRuleRecommendationRunsCommand}
   */
  listDataQualityRuleRecommendationRuns(): Promise<ListDataQualityRuleRecommendationRunsCommandOutput>;
  listDataQualityRuleRecommendationRuns(
    args: ListDataQualityRuleRecommendationRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataQualityRuleRecommendationRunsCommandOutput>;
  listDataQualityRuleRecommendationRuns(
    args: ListDataQualityRuleRecommendationRunsCommandInput,
    cb: (err: any, data?: ListDataQualityRuleRecommendationRunsCommandOutput) => void
  ): void;
  listDataQualityRuleRecommendationRuns(
    args: ListDataQualityRuleRecommendationRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataQualityRuleRecommendationRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataQualityRulesetEvaluationRunsCommand}
   */
  listDataQualityRulesetEvaluationRuns(): Promise<ListDataQualityRulesetEvaluationRunsCommandOutput>;
  listDataQualityRulesetEvaluationRuns(
    args: ListDataQualityRulesetEvaluationRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataQualityRulesetEvaluationRunsCommandOutput>;
  listDataQualityRulesetEvaluationRuns(
    args: ListDataQualityRulesetEvaluationRunsCommandInput,
    cb: (err: any, data?: ListDataQualityRulesetEvaluationRunsCommandOutput) => void
  ): void;
  listDataQualityRulesetEvaluationRuns(
    args: ListDataQualityRulesetEvaluationRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataQualityRulesetEvaluationRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataQualityRulesetsCommand}
   */
  listDataQualityRulesets(): Promise<ListDataQualityRulesetsCommandOutput>;
  listDataQualityRulesets(
    args: ListDataQualityRulesetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataQualityRulesetsCommandOutput>;
  listDataQualityRulesets(
    args: ListDataQualityRulesetsCommandInput,
    cb: (err: any, data?: ListDataQualityRulesetsCommandOutput) => void
  ): void;
  listDataQualityRulesets(
    args: ListDataQualityRulesetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataQualityRulesetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataQualityStatisticAnnotationsCommand}
   */
  listDataQualityStatisticAnnotations(): Promise<ListDataQualityStatisticAnnotationsCommandOutput>;
  listDataQualityStatisticAnnotations(
    args: ListDataQualityStatisticAnnotationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataQualityStatisticAnnotationsCommandOutput>;
  listDataQualityStatisticAnnotations(
    args: ListDataQualityStatisticAnnotationsCommandInput,
    cb: (err: any, data?: ListDataQualityStatisticAnnotationsCommandOutput) => void
  ): void;
  listDataQualityStatisticAnnotations(
    args: ListDataQualityStatisticAnnotationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataQualityStatisticAnnotationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataQualityStatisticsCommand}
   */
  listDataQualityStatistics(): Promise<ListDataQualityStatisticsCommandOutput>;
  listDataQualityStatistics(
    args: ListDataQualityStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataQualityStatisticsCommandOutput>;
  listDataQualityStatistics(
    args: ListDataQualityStatisticsCommandInput,
    cb: (err: any, data?: ListDataQualityStatisticsCommandOutput) => void
  ): void;
  listDataQualityStatistics(
    args: ListDataQualityStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataQualityStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDevEndpointsCommand}
   */
  listDevEndpoints(): Promise<ListDevEndpointsCommandOutput>;
  listDevEndpoints(
    args: ListDevEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDevEndpointsCommandOutput>;
  listDevEndpoints(
    args: ListDevEndpointsCommandInput,
    cb: (err: any, data?: ListDevEndpointsCommandOutput) => void
  ): void;
  listDevEndpoints(
    args: ListDevEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEntitiesCommand}
   */
  listEntities(): Promise<ListEntitiesCommandOutput>;
  listEntities(args: ListEntitiesCommandInput, options?: __HttpHandlerOptions): Promise<ListEntitiesCommandOutput>;
  listEntities(args: ListEntitiesCommandInput, cb: (err: any, data?: ListEntitiesCommandOutput) => void): void;
  listEntities(
    args: ListEntitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEntitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobsCommand}
   */
  listJobs(): Promise<ListJobsCommandOutput>;
  listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
  listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
  listJobs(
    args: ListJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMLTransformsCommand}
   */
  listMLTransforms(): Promise<ListMLTransformsCommandOutput>;
  listMLTransforms(
    args: ListMLTransformsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMLTransformsCommandOutput>;
  listMLTransforms(
    args: ListMLTransformsCommandInput,
    cb: (err: any, data?: ListMLTransformsCommandOutput) => void
  ): void;
  listMLTransforms(
    args: ListMLTransformsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMLTransformsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRegistriesCommand}
   */
  listRegistries(): Promise<ListRegistriesCommandOutput>;
  listRegistries(
    args: ListRegistriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRegistriesCommandOutput>;
  listRegistries(args: ListRegistriesCommandInput, cb: (err: any, data?: ListRegistriesCommandOutput) => void): void;
  listRegistries(
    args: ListRegistriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRegistriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSchemasCommand}
   */
  listSchemas(): Promise<ListSchemasCommandOutput>;
  listSchemas(args: ListSchemasCommandInput, options?: __HttpHandlerOptions): Promise<ListSchemasCommandOutput>;
  listSchemas(args: ListSchemasCommandInput, cb: (err: any, data?: ListSchemasCommandOutput) => void): void;
  listSchemas(
    args: ListSchemasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSchemasCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSchemaVersionsCommand}
   */
  listSchemaVersions(
    args: ListSchemaVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSchemaVersionsCommandOutput>;
  listSchemaVersions(
    args: ListSchemaVersionsCommandInput,
    cb: (err: any, data?: ListSchemaVersionsCommandOutput) => void
  ): void;
  listSchemaVersions(
    args: ListSchemaVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSchemaVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSessionsCommand}
   */
  listSessions(): Promise<ListSessionsCommandOutput>;
  listSessions(args: ListSessionsCommandInput, options?: __HttpHandlerOptions): Promise<ListSessionsCommandOutput>;
  listSessions(args: ListSessionsCommandInput, cb: (err: any, data?: ListSessionsCommandOutput) => void): void;
  listSessions(
    args: ListSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStatementsCommand}
   */
  listStatements(
    args: ListStatementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStatementsCommandOutput>;
  listStatements(args: ListStatementsCommandInput, cb: (err: any, data?: ListStatementsCommandOutput) => void): void;
  listStatements(
    args: ListStatementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStatementsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTableOptimizerRunsCommand}
   */
  listTableOptimizerRuns(
    args: ListTableOptimizerRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTableOptimizerRunsCommandOutput>;
  listTableOptimizerRuns(
    args: ListTableOptimizerRunsCommandInput,
    cb: (err: any, data?: ListTableOptimizerRunsCommandOutput) => void
  ): void;
  listTableOptimizerRuns(
    args: ListTableOptimizerRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTableOptimizerRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTriggersCommand}
   */
  listTriggers(): Promise<ListTriggersCommandOutput>;
  listTriggers(args: ListTriggersCommandInput, options?: __HttpHandlerOptions): Promise<ListTriggersCommandOutput>;
  listTriggers(args: ListTriggersCommandInput, cb: (err: any, data?: ListTriggersCommandOutput) => void): void;
  listTriggers(
    args: ListTriggersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTriggersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUsageProfilesCommand}
   */
  listUsageProfiles(): Promise<ListUsageProfilesCommandOutput>;
  listUsageProfiles(
    args: ListUsageProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUsageProfilesCommandOutput>;
  listUsageProfiles(
    args: ListUsageProfilesCommandInput,
    cb: (err: any, data?: ListUsageProfilesCommandOutput) => void
  ): void;
  listUsageProfiles(
    args: ListUsageProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsageProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkflowsCommand}
   */
  listWorkflows(): Promise<ListWorkflowsCommandOutput>;
  listWorkflows(args: ListWorkflowsCommandInput, options?: __HttpHandlerOptions): Promise<ListWorkflowsCommandOutput>;
  listWorkflows(args: ListWorkflowsCommandInput, cb: (err: any, data?: ListWorkflowsCommandOutput) => void): void;
  listWorkflows(
    args: ListWorkflowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyIntegrationCommand}
   */
  modifyIntegration(
    args: ModifyIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyIntegrationCommandOutput>;
  modifyIntegration(
    args: ModifyIntegrationCommandInput,
    cb: (err: any, data?: ModifyIntegrationCommandOutput) => void
  ): void;
  modifyIntegration(
    args: ModifyIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDataCatalogEncryptionSettingsCommand}
   */
  putDataCatalogEncryptionSettings(
    args: PutDataCatalogEncryptionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDataCatalogEncryptionSettingsCommandOutput>;
  putDataCatalogEncryptionSettings(
    args: PutDataCatalogEncryptionSettingsCommandInput,
    cb: (err: any, data?: PutDataCatalogEncryptionSettingsCommandOutput) => void
  ): void;
  putDataCatalogEncryptionSettings(
    args: PutDataCatalogEncryptionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDataCatalogEncryptionSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDataQualityProfileAnnotationCommand}
   */
  putDataQualityProfileAnnotation(
    args: PutDataQualityProfileAnnotationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDataQualityProfileAnnotationCommandOutput>;
  putDataQualityProfileAnnotation(
    args: PutDataQualityProfileAnnotationCommandInput,
    cb: (err: any, data?: PutDataQualityProfileAnnotationCommandOutput) => void
  ): void;
  putDataQualityProfileAnnotation(
    args: PutDataQualityProfileAnnotationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDataQualityProfileAnnotationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutSchemaVersionMetadataCommand}
   */
  putSchemaVersionMetadata(
    args: PutSchemaVersionMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSchemaVersionMetadataCommandOutput>;
  putSchemaVersionMetadata(
    args: PutSchemaVersionMetadataCommandInput,
    cb: (err: any, data?: PutSchemaVersionMetadataCommandOutput) => void
  ): void;
  putSchemaVersionMetadata(
    args: PutSchemaVersionMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSchemaVersionMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link PutWorkflowRunPropertiesCommand}
   */
  putWorkflowRunProperties(
    args: PutWorkflowRunPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutWorkflowRunPropertiesCommandOutput>;
  putWorkflowRunProperties(
    args: PutWorkflowRunPropertiesCommandInput,
    cb: (err: any, data?: PutWorkflowRunPropertiesCommandOutput) => void
  ): void;
  putWorkflowRunProperties(
    args: PutWorkflowRunPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutWorkflowRunPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link QuerySchemaVersionMetadataCommand}
   */
  querySchemaVersionMetadata(): Promise<QuerySchemaVersionMetadataCommandOutput>;
  querySchemaVersionMetadata(
    args: QuerySchemaVersionMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QuerySchemaVersionMetadataCommandOutput>;
  querySchemaVersionMetadata(
    args: QuerySchemaVersionMetadataCommandInput,
    cb: (err: any, data?: QuerySchemaVersionMetadataCommandOutput) => void
  ): void;
  querySchemaVersionMetadata(
    args: QuerySchemaVersionMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QuerySchemaVersionMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterSchemaVersionCommand}
   */
  registerSchemaVersion(
    args: RegisterSchemaVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterSchemaVersionCommandOutput>;
  registerSchemaVersion(
    args: RegisterSchemaVersionCommandInput,
    cb: (err: any, data?: RegisterSchemaVersionCommandOutput) => void
  ): void;
  registerSchemaVersion(
    args: RegisterSchemaVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterSchemaVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveSchemaVersionMetadataCommand}
   */
  removeSchemaVersionMetadata(
    args: RemoveSchemaVersionMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveSchemaVersionMetadataCommandOutput>;
  removeSchemaVersionMetadata(
    args: RemoveSchemaVersionMetadataCommandInput,
    cb: (err: any, data?: RemoveSchemaVersionMetadataCommandOutput) => void
  ): void;
  removeSchemaVersionMetadata(
    args: RemoveSchemaVersionMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveSchemaVersionMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetJobBookmarkCommand}
   */
  resetJobBookmark(
    args: ResetJobBookmarkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetJobBookmarkCommandOutput>;
  resetJobBookmark(
    args: ResetJobBookmarkCommandInput,
    cb: (err: any, data?: ResetJobBookmarkCommandOutput) => void
  ): void;
  resetJobBookmark(
    args: ResetJobBookmarkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetJobBookmarkCommandOutput) => void
  ): void;

  /**
   * @see {@link ResumeWorkflowRunCommand}
   */
  resumeWorkflowRun(
    args: ResumeWorkflowRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResumeWorkflowRunCommandOutput>;
  resumeWorkflowRun(
    args: ResumeWorkflowRunCommandInput,
    cb: (err: any, data?: ResumeWorkflowRunCommandOutput) => void
  ): void;
  resumeWorkflowRun(
    args: ResumeWorkflowRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResumeWorkflowRunCommandOutput) => void
  ): void;

  /**
   * @see {@link RunStatementCommand}
   */
  runStatement(args: RunStatementCommandInput, options?: __HttpHandlerOptions): Promise<RunStatementCommandOutput>;
  runStatement(args: RunStatementCommandInput, cb: (err: any, data?: RunStatementCommandOutput) => void): void;
  runStatement(
    args: RunStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RunStatementCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchTablesCommand}
   */
  searchTables(): Promise<SearchTablesCommandOutput>;
  searchTables(args: SearchTablesCommandInput, options?: __HttpHandlerOptions): Promise<SearchTablesCommandOutput>;
  searchTables(args: SearchTablesCommandInput, cb: (err: any, data?: SearchTablesCommandOutput) => void): void;
  searchTables(
    args: SearchTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchTablesCommandOutput) => void
  ): void;

  /**
   * @see {@link StartBlueprintRunCommand}
   */
  startBlueprintRun(
    args: StartBlueprintRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartBlueprintRunCommandOutput>;
  startBlueprintRun(
    args: StartBlueprintRunCommandInput,
    cb: (err: any, data?: StartBlueprintRunCommandOutput) => void
  ): void;
  startBlueprintRun(
    args: StartBlueprintRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartBlueprintRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StartColumnStatisticsTaskRunCommand}
   */
  startColumnStatisticsTaskRun(
    args: StartColumnStatisticsTaskRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartColumnStatisticsTaskRunCommandOutput>;
  startColumnStatisticsTaskRun(
    args: StartColumnStatisticsTaskRunCommandInput,
    cb: (err: any, data?: StartColumnStatisticsTaskRunCommandOutput) => void
  ): void;
  startColumnStatisticsTaskRun(
    args: StartColumnStatisticsTaskRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartColumnStatisticsTaskRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StartColumnStatisticsTaskRunScheduleCommand}
   */
  startColumnStatisticsTaskRunSchedule(
    args: StartColumnStatisticsTaskRunScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartColumnStatisticsTaskRunScheduleCommandOutput>;
  startColumnStatisticsTaskRunSchedule(
    args: StartColumnStatisticsTaskRunScheduleCommandInput,
    cb: (err: any, data?: StartColumnStatisticsTaskRunScheduleCommandOutput) => void
  ): void;
  startColumnStatisticsTaskRunSchedule(
    args: StartColumnStatisticsTaskRunScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartColumnStatisticsTaskRunScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCrawlerCommand}
   */
  startCrawler(args: StartCrawlerCommandInput, options?: __HttpHandlerOptions): Promise<StartCrawlerCommandOutput>;
  startCrawler(args: StartCrawlerCommandInput, cb: (err: any, data?: StartCrawlerCommandOutput) => void): void;
  startCrawler(
    args: StartCrawlerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCrawlerCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCrawlerScheduleCommand}
   */
  startCrawlerSchedule(
    args: StartCrawlerScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCrawlerScheduleCommandOutput>;
  startCrawlerSchedule(
    args: StartCrawlerScheduleCommandInput,
    cb: (err: any, data?: StartCrawlerScheduleCommandOutput) => void
  ): void;
  startCrawlerSchedule(
    args: StartCrawlerScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCrawlerScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDataQualityRuleRecommendationRunCommand}
   */
  startDataQualityRuleRecommendationRun(
    args: StartDataQualityRuleRecommendationRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDataQualityRuleRecommendationRunCommandOutput>;
  startDataQualityRuleRecommendationRun(
    args: StartDataQualityRuleRecommendationRunCommandInput,
    cb: (err: any, data?: StartDataQualityRuleRecommendationRunCommandOutput) => void
  ): void;
  startDataQualityRuleRecommendationRun(
    args: StartDataQualityRuleRecommendationRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDataQualityRuleRecommendationRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDataQualityRulesetEvaluationRunCommand}
   */
  startDataQualityRulesetEvaluationRun(
    args: StartDataQualityRulesetEvaluationRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDataQualityRulesetEvaluationRunCommandOutput>;
  startDataQualityRulesetEvaluationRun(
    args: StartDataQualityRulesetEvaluationRunCommandInput,
    cb: (err: any, data?: StartDataQualityRulesetEvaluationRunCommandOutput) => void
  ): void;
  startDataQualityRulesetEvaluationRun(
    args: StartDataQualityRulesetEvaluationRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDataQualityRulesetEvaluationRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StartExportLabelsTaskRunCommand}
   */
  startExportLabelsTaskRun(
    args: StartExportLabelsTaskRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartExportLabelsTaskRunCommandOutput>;
  startExportLabelsTaskRun(
    args: StartExportLabelsTaskRunCommandInput,
    cb: (err: any, data?: StartExportLabelsTaskRunCommandOutput) => void
  ): void;
  startExportLabelsTaskRun(
    args: StartExportLabelsTaskRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartExportLabelsTaskRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StartImportLabelsTaskRunCommand}
   */
  startImportLabelsTaskRun(
    args: StartImportLabelsTaskRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartImportLabelsTaskRunCommandOutput>;
  startImportLabelsTaskRun(
    args: StartImportLabelsTaskRunCommandInput,
    cb: (err: any, data?: StartImportLabelsTaskRunCommandOutput) => void
  ): void;
  startImportLabelsTaskRun(
    args: StartImportLabelsTaskRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartImportLabelsTaskRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StartJobRunCommand}
   */
  startJobRun(args: StartJobRunCommandInput, options?: __HttpHandlerOptions): Promise<StartJobRunCommandOutput>;
  startJobRun(args: StartJobRunCommandInput, cb: (err: any, data?: StartJobRunCommandOutput) => void): void;
  startJobRun(
    args: StartJobRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartJobRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMLEvaluationTaskRunCommand}
   */
  startMLEvaluationTaskRun(
    args: StartMLEvaluationTaskRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMLEvaluationTaskRunCommandOutput>;
  startMLEvaluationTaskRun(
    args: StartMLEvaluationTaskRunCommandInput,
    cb: (err: any, data?: StartMLEvaluationTaskRunCommandOutput) => void
  ): void;
  startMLEvaluationTaskRun(
    args: StartMLEvaluationTaskRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMLEvaluationTaskRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMLLabelingSetGenerationTaskRunCommand}
   */
  startMLLabelingSetGenerationTaskRun(
    args: StartMLLabelingSetGenerationTaskRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMLLabelingSetGenerationTaskRunCommandOutput>;
  startMLLabelingSetGenerationTaskRun(
    args: StartMLLabelingSetGenerationTaskRunCommandInput,
    cb: (err: any, data?: StartMLLabelingSetGenerationTaskRunCommandOutput) => void
  ): void;
  startMLLabelingSetGenerationTaskRun(
    args: StartMLLabelingSetGenerationTaskRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMLLabelingSetGenerationTaskRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTriggerCommand}
   */
  startTrigger(args: StartTriggerCommandInput, options?: __HttpHandlerOptions): Promise<StartTriggerCommandOutput>;
  startTrigger(args: StartTriggerCommandInput, cb: (err: any, data?: StartTriggerCommandOutput) => void): void;
  startTrigger(
    args: StartTriggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTriggerCommandOutput) => void
  ): void;

  /**
   * @see {@link StartWorkflowRunCommand}
   */
  startWorkflowRun(
    args: StartWorkflowRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartWorkflowRunCommandOutput>;
  startWorkflowRun(
    args: StartWorkflowRunCommandInput,
    cb: (err: any, data?: StartWorkflowRunCommandOutput) => void
  ): void;
  startWorkflowRun(
    args: StartWorkflowRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartWorkflowRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StopColumnStatisticsTaskRunCommand}
   */
  stopColumnStatisticsTaskRun(
    args: StopColumnStatisticsTaskRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopColumnStatisticsTaskRunCommandOutput>;
  stopColumnStatisticsTaskRun(
    args: StopColumnStatisticsTaskRunCommandInput,
    cb: (err: any, data?: StopColumnStatisticsTaskRunCommandOutput) => void
  ): void;
  stopColumnStatisticsTaskRun(
    args: StopColumnStatisticsTaskRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopColumnStatisticsTaskRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StopColumnStatisticsTaskRunScheduleCommand}
   */
  stopColumnStatisticsTaskRunSchedule(
    args: StopColumnStatisticsTaskRunScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopColumnStatisticsTaskRunScheduleCommandOutput>;
  stopColumnStatisticsTaskRunSchedule(
    args: StopColumnStatisticsTaskRunScheduleCommandInput,
    cb: (err: any, data?: StopColumnStatisticsTaskRunScheduleCommandOutput) => void
  ): void;
  stopColumnStatisticsTaskRunSchedule(
    args: StopColumnStatisticsTaskRunScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopColumnStatisticsTaskRunScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link StopCrawlerCommand}
   */
  stopCrawler(args: StopCrawlerCommandInput, options?: __HttpHandlerOptions): Promise<StopCrawlerCommandOutput>;
  stopCrawler(args: StopCrawlerCommandInput, cb: (err: any, data?: StopCrawlerCommandOutput) => void): void;
  stopCrawler(
    args: StopCrawlerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopCrawlerCommandOutput) => void
  ): void;

  /**
   * @see {@link StopCrawlerScheduleCommand}
   */
  stopCrawlerSchedule(
    args: StopCrawlerScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopCrawlerScheduleCommandOutput>;
  stopCrawlerSchedule(
    args: StopCrawlerScheduleCommandInput,
    cb: (err: any, data?: StopCrawlerScheduleCommandOutput) => void
  ): void;
  stopCrawlerSchedule(
    args: StopCrawlerScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopCrawlerScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link StopSessionCommand}
   */
  stopSession(args: StopSessionCommandInput, options?: __HttpHandlerOptions): Promise<StopSessionCommandOutput>;
  stopSession(args: StopSessionCommandInput, cb: (err: any, data?: StopSessionCommandOutput) => void): void;
  stopSession(
    args: StopSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopTriggerCommand}
   */
  stopTrigger(args: StopTriggerCommandInput, options?: __HttpHandlerOptions): Promise<StopTriggerCommandOutput>;
  stopTrigger(args: StopTriggerCommandInput, cb: (err: any, data?: StopTriggerCommandOutput) => void): void;
  stopTrigger(
    args: StopTriggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopTriggerCommandOutput) => void
  ): void;

  /**
   * @see {@link StopWorkflowRunCommand}
   */
  stopWorkflowRun(
    args: StopWorkflowRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopWorkflowRunCommandOutput>;
  stopWorkflowRun(args: StopWorkflowRunCommandInput, cb: (err: any, data?: StopWorkflowRunCommandOutput) => void): void;
  stopWorkflowRun(
    args: StopWorkflowRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopWorkflowRunCommandOutput) => void
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
   * @see {@link TestConnectionCommand}
   */
  testConnection(): Promise<TestConnectionCommandOutput>;
  testConnection(
    args: TestConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestConnectionCommandOutput>;
  testConnection(args: TestConnectionCommandInput, cb: (err: any, data?: TestConnectionCommandOutput) => void): void;
  testConnection(
    args: TestConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestConnectionCommandOutput) => void
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
   * @see {@link UpdateBlueprintCommand}
   */
  updateBlueprint(
    args: UpdateBlueprintCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBlueprintCommandOutput>;
  updateBlueprint(args: UpdateBlueprintCommandInput, cb: (err: any, data?: UpdateBlueprintCommandOutput) => void): void;
  updateBlueprint(
    args: UpdateBlueprintCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBlueprintCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCatalogCommand}
   */
  updateCatalog(args: UpdateCatalogCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCatalogCommandOutput>;
  updateCatalog(args: UpdateCatalogCommandInput, cb: (err: any, data?: UpdateCatalogCommandOutput) => void): void;
  updateCatalog(
    args: UpdateCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCatalogCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateClassifierCommand}
   */
  updateClassifier(): Promise<UpdateClassifierCommandOutput>;
  updateClassifier(
    args: UpdateClassifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClassifierCommandOutput>;
  updateClassifier(
    args: UpdateClassifierCommandInput,
    cb: (err: any, data?: UpdateClassifierCommandOutput) => void
  ): void;
  updateClassifier(
    args: UpdateClassifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClassifierCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateColumnStatisticsForPartitionCommand}
   */
  updateColumnStatisticsForPartition(
    args: UpdateColumnStatisticsForPartitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateColumnStatisticsForPartitionCommandOutput>;
  updateColumnStatisticsForPartition(
    args: UpdateColumnStatisticsForPartitionCommandInput,
    cb: (err: any, data?: UpdateColumnStatisticsForPartitionCommandOutput) => void
  ): void;
  updateColumnStatisticsForPartition(
    args: UpdateColumnStatisticsForPartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateColumnStatisticsForPartitionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateColumnStatisticsForTableCommand}
   */
  updateColumnStatisticsForTable(
    args: UpdateColumnStatisticsForTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateColumnStatisticsForTableCommandOutput>;
  updateColumnStatisticsForTable(
    args: UpdateColumnStatisticsForTableCommandInput,
    cb: (err: any, data?: UpdateColumnStatisticsForTableCommandOutput) => void
  ): void;
  updateColumnStatisticsForTable(
    args: UpdateColumnStatisticsForTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateColumnStatisticsForTableCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateColumnStatisticsTaskSettingsCommand}
   */
  updateColumnStatisticsTaskSettings(
    args: UpdateColumnStatisticsTaskSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateColumnStatisticsTaskSettingsCommandOutput>;
  updateColumnStatisticsTaskSettings(
    args: UpdateColumnStatisticsTaskSettingsCommandInput,
    cb: (err: any, data?: UpdateColumnStatisticsTaskSettingsCommandOutput) => void
  ): void;
  updateColumnStatisticsTaskSettings(
    args: UpdateColumnStatisticsTaskSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateColumnStatisticsTaskSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConnectionCommand}
   */
  updateConnection(
    args: UpdateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectionCommandOutput>;
  updateConnection(
    args: UpdateConnectionCommandInput,
    cb: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): void;
  updateConnection(
    args: UpdateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCrawlerCommand}
   */
  updateCrawler(args: UpdateCrawlerCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCrawlerCommandOutput>;
  updateCrawler(args: UpdateCrawlerCommandInput, cb: (err: any, data?: UpdateCrawlerCommandOutput) => void): void;
  updateCrawler(
    args: UpdateCrawlerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCrawlerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCrawlerScheduleCommand}
   */
  updateCrawlerSchedule(
    args: UpdateCrawlerScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCrawlerScheduleCommandOutput>;
  updateCrawlerSchedule(
    args: UpdateCrawlerScheduleCommandInput,
    cb: (err: any, data?: UpdateCrawlerScheduleCommandOutput) => void
  ): void;
  updateCrawlerSchedule(
    args: UpdateCrawlerScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCrawlerScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDatabaseCommand}
   */
  updateDatabase(
    args: UpdateDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDatabaseCommandOutput>;
  updateDatabase(args: UpdateDatabaseCommandInput, cb: (err: any, data?: UpdateDatabaseCommandOutput) => void): void;
  updateDatabase(
    args: UpdateDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataQualityRulesetCommand}
   */
  updateDataQualityRuleset(
    args: UpdateDataQualityRulesetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataQualityRulesetCommandOutput>;
  updateDataQualityRuleset(
    args: UpdateDataQualityRulesetCommandInput,
    cb: (err: any, data?: UpdateDataQualityRulesetCommandOutput) => void
  ): void;
  updateDataQualityRuleset(
    args: UpdateDataQualityRulesetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataQualityRulesetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDevEndpointCommand}
   */
  updateDevEndpoint(
    args: UpdateDevEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDevEndpointCommandOutput>;
  updateDevEndpoint(
    args: UpdateDevEndpointCommandInput,
    cb: (err: any, data?: UpdateDevEndpointCommandOutput) => void
  ): void;
  updateDevEndpoint(
    args: UpdateDevEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDevEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGlueIdentityCenterConfigurationCommand}
   */
  updateGlueIdentityCenterConfiguration(): Promise<UpdateGlueIdentityCenterConfigurationCommandOutput>;
  updateGlueIdentityCenterConfiguration(
    args: UpdateGlueIdentityCenterConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGlueIdentityCenterConfigurationCommandOutput>;
  updateGlueIdentityCenterConfiguration(
    args: UpdateGlueIdentityCenterConfigurationCommandInput,
    cb: (err: any, data?: UpdateGlueIdentityCenterConfigurationCommandOutput) => void
  ): void;
  updateGlueIdentityCenterConfiguration(
    args: UpdateGlueIdentityCenterConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGlueIdentityCenterConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIntegrationResourcePropertyCommand}
   */
  updateIntegrationResourceProperty(
    args: UpdateIntegrationResourcePropertyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIntegrationResourcePropertyCommandOutput>;
  updateIntegrationResourceProperty(
    args: UpdateIntegrationResourcePropertyCommandInput,
    cb: (err: any, data?: UpdateIntegrationResourcePropertyCommandOutput) => void
  ): void;
  updateIntegrationResourceProperty(
    args: UpdateIntegrationResourcePropertyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIntegrationResourcePropertyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIntegrationTablePropertiesCommand}
   */
  updateIntegrationTableProperties(
    args: UpdateIntegrationTablePropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIntegrationTablePropertiesCommandOutput>;
  updateIntegrationTableProperties(
    args: UpdateIntegrationTablePropertiesCommandInput,
    cb: (err: any, data?: UpdateIntegrationTablePropertiesCommandOutput) => void
  ): void;
  updateIntegrationTableProperties(
    args: UpdateIntegrationTablePropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIntegrationTablePropertiesCommandOutput) => void
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
   * @see {@link UpdateJobFromSourceControlCommand}
   */
  updateJobFromSourceControl(): Promise<UpdateJobFromSourceControlCommandOutput>;
  updateJobFromSourceControl(
    args: UpdateJobFromSourceControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateJobFromSourceControlCommandOutput>;
  updateJobFromSourceControl(
    args: UpdateJobFromSourceControlCommandInput,
    cb: (err: any, data?: UpdateJobFromSourceControlCommandOutput) => void
  ): void;
  updateJobFromSourceControl(
    args: UpdateJobFromSourceControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateJobFromSourceControlCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMLTransformCommand}
   */
  updateMLTransform(
    args: UpdateMLTransformCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMLTransformCommandOutput>;
  updateMLTransform(
    args: UpdateMLTransformCommandInput,
    cb: (err: any, data?: UpdateMLTransformCommandOutput) => void
  ): void;
  updateMLTransform(
    args: UpdateMLTransformCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMLTransformCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePartitionCommand}
   */
  updatePartition(
    args: UpdatePartitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePartitionCommandOutput>;
  updatePartition(args: UpdatePartitionCommandInput, cb: (err: any, data?: UpdatePartitionCommandOutput) => void): void;
  updatePartition(
    args: UpdatePartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePartitionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRegistryCommand}
   */
  updateRegistry(
    args: UpdateRegistryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRegistryCommandOutput>;
  updateRegistry(args: UpdateRegistryCommandInput, cb: (err: any, data?: UpdateRegistryCommandOutput) => void): void;
  updateRegistry(
    args: UpdateRegistryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRegistryCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSchemaCommand}
   */
  updateSchema(args: UpdateSchemaCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSchemaCommandOutput>;
  updateSchema(args: UpdateSchemaCommandInput, cb: (err: any, data?: UpdateSchemaCommandOutput) => void): void;
  updateSchema(
    args: UpdateSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSourceControlFromJobCommand}
   */
  updateSourceControlFromJob(): Promise<UpdateSourceControlFromJobCommandOutput>;
  updateSourceControlFromJob(
    args: UpdateSourceControlFromJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSourceControlFromJobCommandOutput>;
  updateSourceControlFromJob(
    args: UpdateSourceControlFromJobCommandInput,
    cb: (err: any, data?: UpdateSourceControlFromJobCommandOutput) => void
  ): void;
  updateSourceControlFromJob(
    args: UpdateSourceControlFromJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSourceControlFromJobCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTableCommand}
   */
  updateTable(args: UpdateTableCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTableCommandOutput>;
  updateTable(args: UpdateTableCommandInput, cb: (err: any, data?: UpdateTableCommandOutput) => void): void;
  updateTable(
    args: UpdateTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTableCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTableOptimizerCommand}
   */
  updateTableOptimizer(
    args: UpdateTableOptimizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTableOptimizerCommandOutput>;
  updateTableOptimizer(
    args: UpdateTableOptimizerCommandInput,
    cb: (err: any, data?: UpdateTableOptimizerCommandOutput) => void
  ): void;
  updateTableOptimizer(
    args: UpdateTableOptimizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTableOptimizerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTriggerCommand}
   */
  updateTrigger(args: UpdateTriggerCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTriggerCommandOutput>;
  updateTrigger(args: UpdateTriggerCommandInput, cb: (err: any, data?: UpdateTriggerCommandOutput) => void): void;
  updateTrigger(
    args: UpdateTriggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTriggerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUsageProfileCommand}
   */
  updateUsageProfile(
    args: UpdateUsageProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUsageProfileCommandOutput>;
  updateUsageProfile(
    args: UpdateUsageProfileCommandInput,
    cb: (err: any, data?: UpdateUsageProfileCommandOutput) => void
  ): void;
  updateUsageProfile(
    args: UpdateUsageProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUsageProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserDefinedFunctionCommand}
   */
  updateUserDefinedFunction(
    args: UpdateUserDefinedFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserDefinedFunctionCommandOutput>;
  updateUserDefinedFunction(
    args: UpdateUserDefinedFunctionCommandInput,
    cb: (err: any, data?: UpdateUserDefinedFunctionCommandOutput) => void
  ): void;
  updateUserDefinedFunction(
    args: UpdateUserDefinedFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserDefinedFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkflowCommand}
   */
  updateWorkflow(
    args: UpdateWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkflowCommandOutput>;
  updateWorkflow(args: UpdateWorkflowCommandInput, cb: (err: any, data?: UpdateWorkflowCommandOutput) => void): void;
  updateWorkflow(
    args: UpdateWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkflowCommandOutput) => void
  ): void;
}

/**
 * <fullname>Glue</fullname>
 *          <p>Defines the public endpoint for the Glue service.</p>
 * @public
 */
export class Glue extends GlueClient implements Glue {}
createAggregatedClient(commands, Glue);
