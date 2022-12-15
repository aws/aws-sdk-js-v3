// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
  CreateClassifierCommand,
  CreateClassifierCommandInput,
  CreateClassifierCommandOutput,
} from "./commands/CreateClassifierCommand";
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
  CreateTriggerCommand,
  CreateTriggerCommandInput,
  CreateTriggerCommandOutput,
} from "./commands/CreateTriggerCommand";
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
import {
  GetCatalogImportStatusCommand,
  GetCatalogImportStatusCommandInput,
  GetCatalogImportStatusCommandOutput,
} from "./commands/GetCatalogImportStatusCommand";
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
  ListDevEndpointsCommand,
  ListDevEndpointsCommandInput,
  ListDevEndpointsCommandOutput,
} from "./commands/ListDevEndpointsCommand";
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
  ListTriggersCommand,
  ListTriggersCommandInput,
  ListTriggersCommandOutput,
} from "./commands/ListTriggersCommand";
import {
  ListWorkflowsCommand,
  ListWorkflowsCommandInput,
  ListWorkflowsCommandOutput,
} from "./commands/ListWorkflowsCommand";
import {
  PutDataCatalogEncryptionSettingsCommand,
  PutDataCatalogEncryptionSettingsCommandInput,
  PutDataCatalogEncryptionSettingsCommandOutput,
} from "./commands/PutDataCatalogEncryptionSettingsCommand";
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
  UpdateTriggerCommand,
  UpdateTriggerCommandInput,
  UpdateTriggerCommandOutput,
} from "./commands/UpdateTriggerCommand";
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
import { GlueClient } from "./GlueClient";

/**
 * <fullname>Glue</fullname>
 *          <p>Defines the public endpoint for the Glue service.</p>
 */
export class Glue extends GlueClient {
  /**
   * <p>Creates one or more partitions in a batch operation.</p>
   */
  public batchCreatePartition(
    args: BatchCreatePartitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreatePartitionCommandOutput>;
  public batchCreatePartition(
    args: BatchCreatePartitionCommandInput,
    cb: (err: any, data?: BatchCreatePartitionCommandOutput) => void
  ): void;
  public batchCreatePartition(
    args: BatchCreatePartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreatePartitionCommandOutput) => void
  ): void;
  public batchCreatePartition(
    args: BatchCreatePartitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchCreatePartitionCommandOutput) => void),
    cb?: (err: any, data?: BatchCreatePartitionCommandOutput) => void
  ): Promise<BatchCreatePartitionCommandOutput> | void {
    const command = new BatchCreatePartitionCommand(args);
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
   * <p>Deletes a list of connection definitions from the Data Catalog.</p>
   */
  public batchDeleteConnection(
    args: BatchDeleteConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteConnectionCommandOutput>;
  public batchDeleteConnection(
    args: BatchDeleteConnectionCommandInput,
    cb: (err: any, data?: BatchDeleteConnectionCommandOutput) => void
  ): void;
  public batchDeleteConnection(
    args: BatchDeleteConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteConnectionCommandOutput) => void
  ): void;
  public batchDeleteConnection(
    args: BatchDeleteConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDeleteConnectionCommandOutput) => void),
    cb?: (err: any, data?: BatchDeleteConnectionCommandOutput) => void
  ): Promise<BatchDeleteConnectionCommandOutput> | void {
    const command = new BatchDeleteConnectionCommand(args);
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
   * <p>Deletes one or more partitions in a batch operation.</p>
   */
  public batchDeletePartition(
    args: BatchDeletePartitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeletePartitionCommandOutput>;
  public batchDeletePartition(
    args: BatchDeletePartitionCommandInput,
    cb: (err: any, data?: BatchDeletePartitionCommandOutput) => void
  ): void;
  public batchDeletePartition(
    args: BatchDeletePartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeletePartitionCommandOutput) => void
  ): void;
  public batchDeletePartition(
    args: BatchDeletePartitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDeletePartitionCommandOutput) => void),
    cb?: (err: any, data?: BatchDeletePartitionCommandOutput) => void
  ): Promise<BatchDeletePartitionCommandOutput> | void {
    const command = new BatchDeletePartitionCommand(args);
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
   * <p>Deletes multiple tables at once.</p>
   *          <note>
   *             <p>After completing this operation, you no longer have access to the table versions and
   *         partitions that belong to the deleted table. Glue deletes these "orphaned" resources
   *         asynchronously in a timely manner, at the discretion of the service.</p>
   *             <p>To ensure the immediate deletion of all related resources, before calling
   *           <code>BatchDeleteTable</code>, use <code>DeleteTableVersion</code> or
   *           <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or
   *           <code>BatchDeletePartition</code>, to delete any resources that belong to the
   *         table.</p>
   *          </note>
   */
  public batchDeleteTable(
    args: BatchDeleteTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteTableCommandOutput>;
  public batchDeleteTable(
    args: BatchDeleteTableCommandInput,
    cb: (err: any, data?: BatchDeleteTableCommandOutput) => void
  ): void;
  public batchDeleteTable(
    args: BatchDeleteTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteTableCommandOutput) => void
  ): void;
  public batchDeleteTable(
    args: BatchDeleteTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDeleteTableCommandOutput) => void),
    cb?: (err: any, data?: BatchDeleteTableCommandOutput) => void
  ): Promise<BatchDeleteTableCommandOutput> | void {
    const command = new BatchDeleteTableCommand(args);
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
   * <p>Deletes a specified batch of versions of a table.</p>
   */
  public batchDeleteTableVersion(
    args: BatchDeleteTableVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteTableVersionCommandOutput>;
  public batchDeleteTableVersion(
    args: BatchDeleteTableVersionCommandInput,
    cb: (err: any, data?: BatchDeleteTableVersionCommandOutput) => void
  ): void;
  public batchDeleteTableVersion(
    args: BatchDeleteTableVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteTableVersionCommandOutput) => void
  ): void;
  public batchDeleteTableVersion(
    args: BatchDeleteTableVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDeleteTableVersionCommandOutput) => void),
    cb?: (err: any, data?: BatchDeleteTableVersionCommandOutput) => void
  ): Promise<BatchDeleteTableVersionCommandOutput> | void {
    const command = new BatchDeleteTableVersionCommand(args);
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
   * <p>Retrieves information about a list of blueprints.</p>
   */
  public batchGetBlueprints(
    args: BatchGetBlueprintsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetBlueprintsCommandOutput>;
  public batchGetBlueprints(
    args: BatchGetBlueprintsCommandInput,
    cb: (err: any, data?: BatchGetBlueprintsCommandOutput) => void
  ): void;
  public batchGetBlueprints(
    args: BatchGetBlueprintsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetBlueprintsCommandOutput) => void
  ): void;
  public batchGetBlueprints(
    args: BatchGetBlueprintsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetBlueprintsCommandOutput) => void),
    cb?: (err: any, data?: BatchGetBlueprintsCommandOutput) => void
  ): Promise<BatchGetBlueprintsCommandOutput> | void {
    const command = new BatchGetBlueprintsCommand(args);
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
   * <p>Returns a list of resource metadata for a given list of crawler names. After calling the <code>ListCrawlers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</p>
   */
  public batchGetCrawlers(
    args: BatchGetCrawlersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetCrawlersCommandOutput>;
  public batchGetCrawlers(
    args: BatchGetCrawlersCommandInput,
    cb: (err: any, data?: BatchGetCrawlersCommandOutput) => void
  ): void;
  public batchGetCrawlers(
    args: BatchGetCrawlersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetCrawlersCommandOutput) => void
  ): void;
  public batchGetCrawlers(
    args: BatchGetCrawlersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetCrawlersCommandOutput) => void),
    cb?: (err: any, data?: BatchGetCrawlersCommandOutput) => void
  ): Promise<BatchGetCrawlersCommandOutput> | void {
    const command = new BatchGetCrawlersCommand(args);
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
   * <p>Retrieves the details for the custom patterns specified by a list of names.</p>
   */
  public batchGetCustomEntityTypes(
    args: BatchGetCustomEntityTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetCustomEntityTypesCommandOutput>;
  public batchGetCustomEntityTypes(
    args: BatchGetCustomEntityTypesCommandInput,
    cb: (err: any, data?: BatchGetCustomEntityTypesCommandOutput) => void
  ): void;
  public batchGetCustomEntityTypes(
    args: BatchGetCustomEntityTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetCustomEntityTypesCommandOutput) => void
  ): void;
  public batchGetCustomEntityTypes(
    args: BatchGetCustomEntityTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetCustomEntityTypesCommandOutput) => void),
    cb?: (err: any, data?: BatchGetCustomEntityTypesCommandOutput) => void
  ): Promise<BatchGetCustomEntityTypesCommandOutput> | void {
    const command = new BatchGetCustomEntityTypesCommand(args);
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
   * <p>Retrieves a list of data quality results for the specified result IDs.</p>
   */
  public batchGetDataQualityResult(
    args: BatchGetDataQualityResultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetDataQualityResultCommandOutput>;
  public batchGetDataQualityResult(
    args: BatchGetDataQualityResultCommandInput,
    cb: (err: any, data?: BatchGetDataQualityResultCommandOutput) => void
  ): void;
  public batchGetDataQualityResult(
    args: BatchGetDataQualityResultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetDataQualityResultCommandOutput) => void
  ): void;
  public batchGetDataQualityResult(
    args: BatchGetDataQualityResultCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetDataQualityResultCommandOutput) => void),
    cb?: (err: any, data?: BatchGetDataQualityResultCommandOutput) => void
  ): Promise<BatchGetDataQualityResultCommandOutput> | void {
    const command = new BatchGetDataQualityResultCommand(args);
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
   * <p>Returns a list of resource metadata for a given list of development endpoint names. After
   *       calling the <code>ListDevEndpoints</code> operation, you can call this operation to access the
   *       data to which you have been granted permissions. This operation supports all IAM permissions,
   *       including permission conditions that uses tags.</p>
   */
  public batchGetDevEndpoints(
    args: BatchGetDevEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetDevEndpointsCommandOutput>;
  public batchGetDevEndpoints(
    args: BatchGetDevEndpointsCommandInput,
    cb: (err: any, data?: BatchGetDevEndpointsCommandOutput) => void
  ): void;
  public batchGetDevEndpoints(
    args: BatchGetDevEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetDevEndpointsCommandOutput) => void
  ): void;
  public batchGetDevEndpoints(
    args: BatchGetDevEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetDevEndpointsCommandOutput) => void),
    cb?: (err: any, data?: BatchGetDevEndpointsCommandOutput) => void
  ): Promise<BatchGetDevEndpointsCommandOutput> | void {
    const command = new BatchGetDevEndpointsCommand(args);
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
   * <p>Returns a list of resource metadata for a given list of job names. After calling the <code>ListJobs</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
   * </p>
   */
  public batchGetJobs(
    args: BatchGetJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetJobsCommandOutput>;
  public batchGetJobs(args: BatchGetJobsCommandInput, cb: (err: any, data?: BatchGetJobsCommandOutput) => void): void;
  public batchGetJobs(
    args: BatchGetJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetJobsCommandOutput) => void
  ): void;
  public batchGetJobs(
    args: BatchGetJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetJobsCommandOutput) => void),
    cb?: (err: any, data?: BatchGetJobsCommandOutput) => void
  ): Promise<BatchGetJobsCommandOutput> | void {
    const command = new BatchGetJobsCommand(args);
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
   * <p>Retrieves partitions in a batch request.</p>
   */
  public batchGetPartition(
    args: BatchGetPartitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetPartitionCommandOutput>;
  public batchGetPartition(
    args: BatchGetPartitionCommandInput,
    cb: (err: any, data?: BatchGetPartitionCommandOutput) => void
  ): void;
  public batchGetPartition(
    args: BatchGetPartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetPartitionCommandOutput) => void
  ): void;
  public batchGetPartition(
    args: BatchGetPartitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetPartitionCommandOutput) => void),
    cb?: (err: any, data?: BatchGetPartitionCommandOutput) => void
  ): Promise<BatchGetPartitionCommandOutput> | void {
    const command = new BatchGetPartitionCommand(args);
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
   * <p>Returns a list of resource metadata for a given list of trigger names. After calling the <code>ListTriggers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</p>
   */
  public batchGetTriggers(
    args: BatchGetTriggersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetTriggersCommandOutput>;
  public batchGetTriggers(
    args: BatchGetTriggersCommandInput,
    cb: (err: any, data?: BatchGetTriggersCommandOutput) => void
  ): void;
  public batchGetTriggers(
    args: BatchGetTriggersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetTriggersCommandOutput) => void
  ): void;
  public batchGetTriggers(
    args: BatchGetTriggersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetTriggersCommandOutput) => void),
    cb?: (err: any, data?: BatchGetTriggersCommandOutput) => void
  ): Promise<BatchGetTriggersCommandOutput> | void {
    const command = new BatchGetTriggersCommand(args);
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
   * <p>Returns a list of resource metadata for a given list of workflow names. After calling the <code>ListWorkflows</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</p>
   */
  public batchGetWorkflows(
    args: BatchGetWorkflowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetWorkflowsCommandOutput>;
  public batchGetWorkflows(
    args: BatchGetWorkflowsCommandInput,
    cb: (err: any, data?: BatchGetWorkflowsCommandOutput) => void
  ): void;
  public batchGetWorkflows(
    args: BatchGetWorkflowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetWorkflowsCommandOutput) => void
  ): void;
  public batchGetWorkflows(
    args: BatchGetWorkflowsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetWorkflowsCommandOutput) => void),
    cb?: (err: any, data?: BatchGetWorkflowsCommandOutput) => void
  ): Promise<BatchGetWorkflowsCommandOutput> | void {
    const command = new BatchGetWorkflowsCommand(args);
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
   * <p>Stops one or more job runs for a specified job definition.</p>
   */
  public batchStopJobRun(
    args: BatchStopJobRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchStopJobRunCommandOutput>;
  public batchStopJobRun(
    args: BatchStopJobRunCommandInput,
    cb: (err: any, data?: BatchStopJobRunCommandOutput) => void
  ): void;
  public batchStopJobRun(
    args: BatchStopJobRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchStopJobRunCommandOutput) => void
  ): void;
  public batchStopJobRun(
    args: BatchStopJobRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchStopJobRunCommandOutput) => void),
    cb?: (err: any, data?: BatchStopJobRunCommandOutput) => void
  ): Promise<BatchStopJobRunCommandOutput> | void {
    const command = new BatchStopJobRunCommand(args);
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
   * <p>Updates one or more partitions in a batch operation.</p>
   */
  public batchUpdatePartition(
    args: BatchUpdatePartitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdatePartitionCommandOutput>;
  public batchUpdatePartition(
    args: BatchUpdatePartitionCommandInput,
    cb: (err: any, data?: BatchUpdatePartitionCommandOutput) => void
  ): void;
  public batchUpdatePartition(
    args: BatchUpdatePartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdatePartitionCommandOutput) => void
  ): void;
  public batchUpdatePartition(
    args: BatchUpdatePartitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchUpdatePartitionCommandOutput) => void),
    cb?: (err: any, data?: BatchUpdatePartitionCommandOutput) => void
  ): Promise<BatchUpdatePartitionCommandOutput> | void {
    const command = new BatchUpdatePartitionCommand(args);
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
   * <p>Cancels the specified recommendation run that was being used to generate rules.</p>
   */
  public cancelDataQualityRuleRecommendationRun(
    args: CancelDataQualityRuleRecommendationRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelDataQualityRuleRecommendationRunCommandOutput>;
  public cancelDataQualityRuleRecommendationRun(
    args: CancelDataQualityRuleRecommendationRunCommandInput,
    cb: (err: any, data?: CancelDataQualityRuleRecommendationRunCommandOutput) => void
  ): void;
  public cancelDataQualityRuleRecommendationRun(
    args: CancelDataQualityRuleRecommendationRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelDataQualityRuleRecommendationRunCommandOutput) => void
  ): void;
  public cancelDataQualityRuleRecommendationRun(
    args: CancelDataQualityRuleRecommendationRunCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CancelDataQualityRuleRecommendationRunCommandOutput) => void),
    cb?: (err: any, data?: CancelDataQualityRuleRecommendationRunCommandOutput) => void
  ): Promise<CancelDataQualityRuleRecommendationRunCommandOutput> | void {
    const command = new CancelDataQualityRuleRecommendationRunCommand(args);
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
   * <p>Cancels a run where a ruleset is being evaluated against a data source.</p>
   */
  public cancelDataQualityRulesetEvaluationRun(
    args: CancelDataQualityRulesetEvaluationRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelDataQualityRulesetEvaluationRunCommandOutput>;
  public cancelDataQualityRulesetEvaluationRun(
    args: CancelDataQualityRulesetEvaluationRunCommandInput,
    cb: (err: any, data?: CancelDataQualityRulesetEvaluationRunCommandOutput) => void
  ): void;
  public cancelDataQualityRulesetEvaluationRun(
    args: CancelDataQualityRulesetEvaluationRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelDataQualityRulesetEvaluationRunCommandOutput) => void
  ): void;
  public cancelDataQualityRulesetEvaluationRun(
    args: CancelDataQualityRulesetEvaluationRunCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CancelDataQualityRulesetEvaluationRunCommandOutput) => void),
    cb?: (err: any, data?: CancelDataQualityRulesetEvaluationRunCommandOutput) => void
  ): Promise<CancelDataQualityRulesetEvaluationRunCommandOutput> | void {
    const command = new CancelDataQualityRulesetEvaluationRunCommand(args);
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
   * <p>Cancels (stops) a task run. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can cancel a
   *       machine learning task run at any time by calling <code>CancelMLTaskRun</code> with a task
   *       run's parent transform's <code>TransformID</code> and the task run's <code>TaskRunId</code>. </p>
   */
  public cancelMLTaskRun(
    args: CancelMLTaskRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelMLTaskRunCommandOutput>;
  public cancelMLTaskRun(
    args: CancelMLTaskRunCommandInput,
    cb: (err: any, data?: CancelMLTaskRunCommandOutput) => void
  ): void;
  public cancelMLTaskRun(
    args: CancelMLTaskRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelMLTaskRunCommandOutput) => void
  ): void;
  public cancelMLTaskRun(
    args: CancelMLTaskRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelMLTaskRunCommandOutput) => void),
    cb?: (err: any, data?: CancelMLTaskRunCommandOutput) => void
  ): Promise<CancelMLTaskRunCommandOutput> | void {
    const command = new CancelMLTaskRunCommand(args);
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
   * <p>Cancels the statement.</p>
   */
  public cancelStatement(
    args: CancelStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelStatementCommandOutput>;
  public cancelStatement(
    args: CancelStatementCommandInput,
    cb: (err: any, data?: CancelStatementCommandOutput) => void
  ): void;
  public cancelStatement(
    args: CancelStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelStatementCommandOutput) => void
  ): void;
  public cancelStatement(
    args: CancelStatementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelStatementCommandOutput) => void),
    cb?: (err: any, data?: CancelStatementCommandOutput) => void
  ): Promise<CancelStatementCommandOutput> | void {
    const command = new CancelStatementCommand(args);
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
   * <p>Validates the supplied schema. This call has no side effects, it simply validates using the supplied schema using <code>DataFormat</code> as the format. Since it does not take a schema set name, no compatibility checks are performed.</p>
   */
  public checkSchemaVersionValidity(
    args: CheckSchemaVersionValidityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CheckSchemaVersionValidityCommandOutput>;
  public checkSchemaVersionValidity(
    args: CheckSchemaVersionValidityCommandInput,
    cb: (err: any, data?: CheckSchemaVersionValidityCommandOutput) => void
  ): void;
  public checkSchemaVersionValidity(
    args: CheckSchemaVersionValidityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CheckSchemaVersionValidityCommandOutput) => void
  ): void;
  public checkSchemaVersionValidity(
    args: CheckSchemaVersionValidityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CheckSchemaVersionValidityCommandOutput) => void),
    cb?: (err: any, data?: CheckSchemaVersionValidityCommandOutput) => void
  ): Promise<CheckSchemaVersionValidityCommandOutput> | void {
    const command = new CheckSchemaVersionValidityCommand(args);
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
   * <p>Registers a blueprint with Glue.</p>
   */
  public createBlueprint(
    args: CreateBlueprintCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBlueprintCommandOutput>;
  public createBlueprint(
    args: CreateBlueprintCommandInput,
    cb: (err: any, data?: CreateBlueprintCommandOutput) => void
  ): void;
  public createBlueprint(
    args: CreateBlueprintCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBlueprintCommandOutput) => void
  ): void;
  public createBlueprint(
    args: CreateBlueprintCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBlueprintCommandOutput) => void),
    cb?: (err: any, data?: CreateBlueprintCommandOutput) => void
  ): Promise<CreateBlueprintCommandOutput> | void {
    const command = new CreateBlueprintCommand(args);
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
   * <p>Creates a classifier in the user's account. This can be a <code>GrokClassifier</code>, an
   *         <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>,
   *       depending on which field of the request is present.</p>
   */
  public createClassifier(
    args: CreateClassifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClassifierCommandOutput>;
  public createClassifier(
    args: CreateClassifierCommandInput,
    cb: (err: any, data?: CreateClassifierCommandOutput) => void
  ): void;
  public createClassifier(
    args: CreateClassifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClassifierCommandOutput) => void
  ): void;
  public createClassifier(
    args: CreateClassifierCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateClassifierCommandOutput) => void),
    cb?: (err: any, data?: CreateClassifierCommandOutput) => void
  ): Promise<CreateClassifierCommandOutput> | void {
    const command = new CreateClassifierCommand(args);
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
   * <p>Creates a connection definition in the Data Catalog.</p>
   */
  public createConnection(
    args: CreateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectionCommandOutput>;
  public createConnection(
    args: CreateConnectionCommandInput,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;
  public createConnection(
    args: CreateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;
  public createConnection(
    args: CreateConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateConnectionCommandOutput) => void),
    cb?: (err: any, data?: CreateConnectionCommandOutput) => void
  ): Promise<CreateConnectionCommandOutput> | void {
    const command = new CreateConnectionCommand(args);
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
   * <p>Creates a new crawler with specified targets, role, configuration, and optional schedule.
   *       At least one crawl target must be specified, in the <code>s3Targets</code> field, the
   *         <code>jdbcTargets</code> field, or the <code>DynamoDBTargets</code> field.</p>
   */
  public createCrawler(
    args: CreateCrawlerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCrawlerCommandOutput>;
  public createCrawler(
    args: CreateCrawlerCommandInput,
    cb: (err: any, data?: CreateCrawlerCommandOutput) => void
  ): void;
  public createCrawler(
    args: CreateCrawlerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCrawlerCommandOutput) => void
  ): void;
  public createCrawler(
    args: CreateCrawlerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCrawlerCommandOutput) => void),
    cb?: (err: any, data?: CreateCrawlerCommandOutput) => void
  ): Promise<CreateCrawlerCommandOutput> | void {
    const command = new CreateCrawlerCommand(args);
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
   * <p>Creates a custom pattern that is used to detect sensitive data across the columns and rows of your structured data.</p>
   *          <p>Each custom pattern you create specifies a regular expression and an optional list of context words. If no context words are passed only a regular expression is checked.</p>
   */
  public createCustomEntityType(
    args: CreateCustomEntityTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomEntityTypeCommandOutput>;
  public createCustomEntityType(
    args: CreateCustomEntityTypeCommandInput,
    cb: (err: any, data?: CreateCustomEntityTypeCommandOutput) => void
  ): void;
  public createCustomEntityType(
    args: CreateCustomEntityTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomEntityTypeCommandOutput) => void
  ): void;
  public createCustomEntityType(
    args: CreateCustomEntityTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCustomEntityTypeCommandOutput) => void),
    cb?: (err: any, data?: CreateCustomEntityTypeCommandOutput) => void
  ): Promise<CreateCustomEntityTypeCommandOutput> | void {
    const command = new CreateCustomEntityTypeCommand(args);
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
   * <p>Creates a new database in a Data Catalog.</p>
   */
  public createDatabase(
    args: CreateDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatabaseCommandOutput>;
  public createDatabase(
    args: CreateDatabaseCommandInput,
    cb: (err: any, data?: CreateDatabaseCommandOutput) => void
  ): void;
  public createDatabase(
    args: CreateDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatabaseCommandOutput) => void
  ): void;
  public createDatabase(
    args: CreateDatabaseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDatabaseCommandOutput) => void),
    cb?: (err: any, data?: CreateDatabaseCommandOutput) => void
  ): Promise<CreateDatabaseCommandOutput> | void {
    const command = new CreateDatabaseCommand(args);
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
   * <p>Creates a data quality ruleset with DQDL rules applied to a specified Glue table.</p>
   *          <p>You create the ruleset using the Data Quality Definition Language (DQDL). For more information, see the Glue developer guide.</p>
   */
  public createDataQualityRuleset(
    args: CreateDataQualityRulesetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataQualityRulesetCommandOutput>;
  public createDataQualityRuleset(
    args: CreateDataQualityRulesetCommandInput,
    cb: (err: any, data?: CreateDataQualityRulesetCommandOutput) => void
  ): void;
  public createDataQualityRuleset(
    args: CreateDataQualityRulesetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataQualityRulesetCommandOutput) => void
  ): void;
  public createDataQualityRuleset(
    args: CreateDataQualityRulesetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDataQualityRulesetCommandOutput) => void),
    cb?: (err: any, data?: CreateDataQualityRulesetCommandOutput) => void
  ): Promise<CreateDataQualityRulesetCommandOutput> | void {
    const command = new CreateDataQualityRulesetCommand(args);
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
   * <p>Creates a new development endpoint.</p>
   */
  public createDevEndpoint(
    args: CreateDevEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDevEndpointCommandOutput>;
  public createDevEndpoint(
    args: CreateDevEndpointCommandInput,
    cb: (err: any, data?: CreateDevEndpointCommandOutput) => void
  ): void;
  public createDevEndpoint(
    args: CreateDevEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDevEndpointCommandOutput) => void
  ): void;
  public createDevEndpoint(
    args: CreateDevEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDevEndpointCommandOutput) => void),
    cb?: (err: any, data?: CreateDevEndpointCommandOutput) => void
  ): Promise<CreateDevEndpointCommandOutput> | void {
    const command = new CreateDevEndpointCommand(args);
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
   * <p>Creates a new job definition.</p>
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
   * <p>Creates an Glue machine learning transform. This operation creates the transform and
   *       all the necessary parameters to train it.</p>
   *          <p>Call this operation as the first step in the process of using a machine learning transform
   *       (such as the <code>FindMatches</code> transform) for deduplicating data. You can provide an
   *       optional <code>Description</code>, in addition to the parameters that you want to use for your
   *       algorithm.</p>
   *          <p>You must also specify certain parameters for the tasks that Glue runs on your
   *       behalf as part of learning from your data and creating a high-quality machine learning
   *       transform. These parameters include <code>Role</code>, and optionally,
   *         <code>AllocatedCapacity</code>, <code>Timeout</code>, and <code>MaxRetries</code>. For more
   *       information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html">Jobs</a>.</p>
   */
  public createMLTransform(
    args: CreateMLTransformCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMLTransformCommandOutput>;
  public createMLTransform(
    args: CreateMLTransformCommandInput,
    cb: (err: any, data?: CreateMLTransformCommandOutput) => void
  ): void;
  public createMLTransform(
    args: CreateMLTransformCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMLTransformCommandOutput) => void
  ): void;
  public createMLTransform(
    args: CreateMLTransformCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMLTransformCommandOutput) => void),
    cb?: (err: any, data?: CreateMLTransformCommandOutput) => void
  ): Promise<CreateMLTransformCommandOutput> | void {
    const command = new CreateMLTransformCommand(args);
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
   * <p>Creates a new partition.</p>
   */
  public createPartition(
    args: CreatePartitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePartitionCommandOutput>;
  public createPartition(
    args: CreatePartitionCommandInput,
    cb: (err: any, data?: CreatePartitionCommandOutput) => void
  ): void;
  public createPartition(
    args: CreatePartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePartitionCommandOutput) => void
  ): void;
  public createPartition(
    args: CreatePartitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePartitionCommandOutput) => void),
    cb?: (err: any, data?: CreatePartitionCommandOutput) => void
  ): Promise<CreatePartitionCommandOutput> | void {
    const command = new CreatePartitionCommand(args);
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
   * <p>Creates a specified partition index in an existing table.</p>
   */
  public createPartitionIndex(
    args: CreatePartitionIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePartitionIndexCommandOutput>;
  public createPartitionIndex(
    args: CreatePartitionIndexCommandInput,
    cb: (err: any, data?: CreatePartitionIndexCommandOutput) => void
  ): void;
  public createPartitionIndex(
    args: CreatePartitionIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePartitionIndexCommandOutput) => void
  ): void;
  public createPartitionIndex(
    args: CreatePartitionIndexCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePartitionIndexCommandOutput) => void),
    cb?: (err: any, data?: CreatePartitionIndexCommandOutput) => void
  ): Promise<CreatePartitionIndexCommandOutput> | void {
    const command = new CreatePartitionIndexCommand(args);
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
   * <p>Creates a new registry which may be used to hold a collection of schemas.</p>
   */
  public createRegistry(
    args: CreateRegistryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRegistryCommandOutput>;
  public createRegistry(
    args: CreateRegistryCommandInput,
    cb: (err: any, data?: CreateRegistryCommandOutput) => void
  ): void;
  public createRegistry(
    args: CreateRegistryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRegistryCommandOutput) => void
  ): void;
  public createRegistry(
    args: CreateRegistryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRegistryCommandOutput) => void),
    cb?: (err: any, data?: CreateRegistryCommandOutput) => void
  ): Promise<CreateRegistryCommandOutput> | void {
    const command = new CreateRegistryCommand(args);
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
   * <p>Creates a new schema set and registers the schema definition. Returns an error if the schema set already exists without actually registering the version.</p>
   *          <p>When the schema set is created, a version checkpoint will be set to the first version. Compatibility mode "DISABLED" restricts any additional schema versions from being added after the first schema version. For all other compatibility modes, validation of compatibility settings will be applied only from the second version onwards when the <code>RegisterSchemaVersion</code> API is used.</p>
   *          <p>When this API is called without a <code>RegistryId</code>, this will create an entry for a "default-registry" in the registry database tables, if it is not already present.</p>
   */
  public createSchema(
    args: CreateSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSchemaCommandOutput>;
  public createSchema(args: CreateSchemaCommandInput, cb: (err: any, data?: CreateSchemaCommandOutput) => void): void;
  public createSchema(
    args: CreateSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSchemaCommandOutput) => void
  ): void;
  public createSchema(
    args: CreateSchemaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSchemaCommandOutput) => void),
    cb?: (err: any, data?: CreateSchemaCommandOutput) => void
  ): Promise<CreateSchemaCommandOutput> | void {
    const command = new CreateSchemaCommand(args);
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
   * <p>Transforms a directed acyclic graph (DAG) into code.</p>
   */
  public createScript(
    args: CreateScriptCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateScriptCommandOutput>;
  public createScript(args: CreateScriptCommandInput, cb: (err: any, data?: CreateScriptCommandOutput) => void): void;
  public createScript(
    args: CreateScriptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateScriptCommandOutput) => void
  ): void;
  public createScript(
    args: CreateScriptCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateScriptCommandOutput) => void),
    cb?: (err: any, data?: CreateScriptCommandOutput) => void
  ): Promise<CreateScriptCommandOutput> | void {
    const command = new CreateScriptCommand(args);
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
   * <p>Creates a new security configuration. A security configuration is a set of security properties that can be used by Glue. You can use a security configuration to encrypt data at rest. For information about using security configurations in Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/encryption-security-configuration.html">Encrypting Data Written by Crawlers, Jobs, and Development Endpoints</a>.</p>
   */
  public createSecurityConfiguration(
    args: CreateSecurityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSecurityConfigurationCommandOutput>;
  public createSecurityConfiguration(
    args: CreateSecurityConfigurationCommandInput,
    cb: (err: any, data?: CreateSecurityConfigurationCommandOutput) => void
  ): void;
  public createSecurityConfiguration(
    args: CreateSecurityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSecurityConfigurationCommandOutput) => void
  ): void;
  public createSecurityConfiguration(
    args: CreateSecurityConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSecurityConfigurationCommandOutput) => void),
    cb?: (err: any, data?: CreateSecurityConfigurationCommandOutput) => void
  ): Promise<CreateSecurityConfigurationCommandOutput> | void {
    const command = new CreateSecurityConfigurationCommand(args);
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
   * <p>Creates a new session.</p>
   */
  public createSession(
    args: CreateSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSessionCommandOutput>;
  public createSession(
    args: CreateSessionCommandInput,
    cb: (err: any, data?: CreateSessionCommandOutput) => void
  ): void;
  public createSession(
    args: CreateSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSessionCommandOutput) => void
  ): void;
  public createSession(
    args: CreateSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSessionCommandOutput) => void),
    cb?: (err: any, data?: CreateSessionCommandOutput) => void
  ): Promise<CreateSessionCommandOutput> | void {
    const command = new CreateSessionCommand(args);
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
   * <p>Creates a new table definition in the Data Catalog.</p>
   */
  public createTable(args: CreateTableCommandInput, options?: __HttpHandlerOptions): Promise<CreateTableCommandOutput>;
  public createTable(args: CreateTableCommandInput, cb: (err: any, data?: CreateTableCommandOutput) => void): void;
  public createTable(
    args: CreateTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTableCommandOutput) => void
  ): void;
  public createTable(
    args: CreateTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTableCommandOutput) => void),
    cb?: (err: any, data?: CreateTableCommandOutput) => void
  ): Promise<CreateTableCommandOutput> | void {
    const command = new CreateTableCommand(args);
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
   * <p>Creates a new trigger.</p>
   */
  public createTrigger(
    args: CreateTriggerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTriggerCommandOutput>;
  public createTrigger(
    args: CreateTriggerCommandInput,
    cb: (err: any, data?: CreateTriggerCommandOutput) => void
  ): void;
  public createTrigger(
    args: CreateTriggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTriggerCommandOutput) => void
  ): void;
  public createTrigger(
    args: CreateTriggerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTriggerCommandOutput) => void),
    cb?: (err: any, data?: CreateTriggerCommandOutput) => void
  ): Promise<CreateTriggerCommandOutput> | void {
    const command = new CreateTriggerCommand(args);
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
   * <p>Creates a new function definition in the Data Catalog.</p>
   */
  public createUserDefinedFunction(
    args: CreateUserDefinedFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserDefinedFunctionCommandOutput>;
  public createUserDefinedFunction(
    args: CreateUserDefinedFunctionCommandInput,
    cb: (err: any, data?: CreateUserDefinedFunctionCommandOutput) => void
  ): void;
  public createUserDefinedFunction(
    args: CreateUserDefinedFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserDefinedFunctionCommandOutput) => void
  ): void;
  public createUserDefinedFunction(
    args: CreateUserDefinedFunctionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUserDefinedFunctionCommandOutput) => void),
    cb?: (err: any, data?: CreateUserDefinedFunctionCommandOutput) => void
  ): Promise<CreateUserDefinedFunctionCommandOutput> | void {
    const command = new CreateUserDefinedFunctionCommand(args);
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
   * <p>Creates a new workflow.</p>
   */
  public createWorkflow(
    args: CreateWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkflowCommandOutput>;
  public createWorkflow(
    args: CreateWorkflowCommandInput,
    cb: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): void;
  public createWorkflow(
    args: CreateWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): void;
  public createWorkflow(
    args: CreateWorkflowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWorkflowCommandOutput) => void),
    cb?: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): Promise<CreateWorkflowCommandOutput> | void {
    const command = new CreateWorkflowCommand(args);
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
   * <p>Deletes an existing blueprint.</p>
   */
  public deleteBlueprint(
    args: DeleteBlueprintCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBlueprintCommandOutput>;
  public deleteBlueprint(
    args: DeleteBlueprintCommandInput,
    cb: (err: any, data?: DeleteBlueprintCommandOutput) => void
  ): void;
  public deleteBlueprint(
    args: DeleteBlueprintCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBlueprintCommandOutput) => void
  ): void;
  public deleteBlueprint(
    args: DeleteBlueprintCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBlueprintCommandOutput) => void),
    cb?: (err: any, data?: DeleteBlueprintCommandOutput) => void
  ): Promise<DeleteBlueprintCommandOutput> | void {
    const command = new DeleteBlueprintCommand(args);
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
   * <p>Removes a classifier from the Data Catalog.</p>
   */
  public deleteClassifier(
    args: DeleteClassifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClassifierCommandOutput>;
  public deleteClassifier(
    args: DeleteClassifierCommandInput,
    cb: (err: any, data?: DeleteClassifierCommandOutput) => void
  ): void;
  public deleteClassifier(
    args: DeleteClassifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClassifierCommandOutput) => void
  ): void;
  public deleteClassifier(
    args: DeleteClassifierCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteClassifierCommandOutput) => void),
    cb?: (err: any, data?: DeleteClassifierCommandOutput) => void
  ): Promise<DeleteClassifierCommandOutput> | void {
    const command = new DeleteClassifierCommand(args);
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
   * <p>Delete the partition column statistics of a column.</p>
   *          <p>The Identity and Access Management (IAM) permission required for this operation is <code>DeletePartition</code>.</p>
   */
  public deleteColumnStatisticsForPartition(
    args: DeleteColumnStatisticsForPartitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteColumnStatisticsForPartitionCommandOutput>;
  public deleteColumnStatisticsForPartition(
    args: DeleteColumnStatisticsForPartitionCommandInput,
    cb: (err: any, data?: DeleteColumnStatisticsForPartitionCommandOutput) => void
  ): void;
  public deleteColumnStatisticsForPartition(
    args: DeleteColumnStatisticsForPartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteColumnStatisticsForPartitionCommandOutput) => void
  ): void;
  public deleteColumnStatisticsForPartition(
    args: DeleteColumnStatisticsForPartitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteColumnStatisticsForPartitionCommandOutput) => void),
    cb?: (err: any, data?: DeleteColumnStatisticsForPartitionCommandOutput) => void
  ): Promise<DeleteColumnStatisticsForPartitionCommandOutput> | void {
    const command = new DeleteColumnStatisticsForPartitionCommand(args);
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
   * <p>Retrieves table statistics of columns.</p>
   *          <p>The Identity and Access Management (IAM) permission required for this operation is <code>DeleteTable</code>.</p>
   */
  public deleteColumnStatisticsForTable(
    args: DeleteColumnStatisticsForTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteColumnStatisticsForTableCommandOutput>;
  public deleteColumnStatisticsForTable(
    args: DeleteColumnStatisticsForTableCommandInput,
    cb: (err: any, data?: DeleteColumnStatisticsForTableCommandOutput) => void
  ): void;
  public deleteColumnStatisticsForTable(
    args: DeleteColumnStatisticsForTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteColumnStatisticsForTableCommandOutput) => void
  ): void;
  public deleteColumnStatisticsForTable(
    args: DeleteColumnStatisticsForTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteColumnStatisticsForTableCommandOutput) => void),
    cb?: (err: any, data?: DeleteColumnStatisticsForTableCommandOutput) => void
  ): Promise<DeleteColumnStatisticsForTableCommandOutput> | void {
    const command = new DeleteColumnStatisticsForTableCommand(args);
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
   * <p>Deletes a connection from the Data Catalog.</p>
   */
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectionCommandOutput>;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConnectionCommandOutput) => void),
    cb?: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): Promise<DeleteConnectionCommandOutput> | void {
    const command = new DeleteConnectionCommand(args);
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
   * <p>Removes a specified crawler from the Glue Data Catalog, unless the crawler state is
   *         <code>RUNNING</code>.</p>
   */
  public deleteCrawler(
    args: DeleteCrawlerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCrawlerCommandOutput>;
  public deleteCrawler(
    args: DeleteCrawlerCommandInput,
    cb: (err: any, data?: DeleteCrawlerCommandOutput) => void
  ): void;
  public deleteCrawler(
    args: DeleteCrawlerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCrawlerCommandOutput) => void
  ): void;
  public deleteCrawler(
    args: DeleteCrawlerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCrawlerCommandOutput) => void),
    cb?: (err: any, data?: DeleteCrawlerCommandOutput) => void
  ): Promise<DeleteCrawlerCommandOutput> | void {
    const command = new DeleteCrawlerCommand(args);
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
   * <p>Deletes a custom pattern by specifying its name.</p>
   */
  public deleteCustomEntityType(
    args: DeleteCustomEntityTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomEntityTypeCommandOutput>;
  public deleteCustomEntityType(
    args: DeleteCustomEntityTypeCommandInput,
    cb: (err: any, data?: DeleteCustomEntityTypeCommandOutput) => void
  ): void;
  public deleteCustomEntityType(
    args: DeleteCustomEntityTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomEntityTypeCommandOutput) => void
  ): void;
  public deleteCustomEntityType(
    args: DeleteCustomEntityTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCustomEntityTypeCommandOutput) => void),
    cb?: (err: any, data?: DeleteCustomEntityTypeCommandOutput) => void
  ): Promise<DeleteCustomEntityTypeCommandOutput> | void {
    const command = new DeleteCustomEntityTypeCommand(args);
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
   * <p>Removes a specified database from a Data Catalog.</p>
   *          <note>
   *             <p>After completing this operation, you no longer have access to the tables (and all table
   *         versions and partitions that might belong to the tables) and the user-defined functions in
   *         the deleted database. Glue deletes these "orphaned" resources asynchronously in a timely
   *         manner, at the discretion of the service.</p>
   *             <p>To ensure the immediate deletion of all related resources, before calling
   *           <code>DeleteDatabase</code>, use <code>DeleteTableVersion</code> or
   *           <code>BatchDeleteTableVersion</code>, <code>DeletePartition</code> or
   *           <code>BatchDeletePartition</code>, <code>DeleteUserDefinedFunction</code>, and
   *           <code>DeleteTable</code> or <code>BatchDeleteTable</code>, to delete any resources that
   *         belong to the database.</p>
   *          </note>
   */
  public deleteDatabase(
    args: DeleteDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatabaseCommandOutput>;
  public deleteDatabase(
    args: DeleteDatabaseCommandInput,
    cb: (err: any, data?: DeleteDatabaseCommandOutput) => void
  ): void;
  public deleteDatabase(
    args: DeleteDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatabaseCommandOutput) => void
  ): void;
  public deleteDatabase(
    args: DeleteDatabaseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDatabaseCommandOutput) => void),
    cb?: (err: any, data?: DeleteDatabaseCommandOutput) => void
  ): Promise<DeleteDatabaseCommandOutput> | void {
    const command = new DeleteDatabaseCommand(args);
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
   * <p>Deletes a data quality ruleset.</p>
   */
  public deleteDataQualityRuleset(
    args: DeleteDataQualityRulesetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataQualityRulesetCommandOutput>;
  public deleteDataQualityRuleset(
    args: DeleteDataQualityRulesetCommandInput,
    cb: (err: any, data?: DeleteDataQualityRulesetCommandOutput) => void
  ): void;
  public deleteDataQualityRuleset(
    args: DeleteDataQualityRulesetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataQualityRulesetCommandOutput) => void
  ): void;
  public deleteDataQualityRuleset(
    args: DeleteDataQualityRulesetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDataQualityRulesetCommandOutput) => void),
    cb?: (err: any, data?: DeleteDataQualityRulesetCommandOutput) => void
  ): Promise<DeleteDataQualityRulesetCommandOutput> | void {
    const command = new DeleteDataQualityRulesetCommand(args);
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
   * <p>Deletes a specified development endpoint.</p>
   */
  public deleteDevEndpoint(
    args: DeleteDevEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDevEndpointCommandOutput>;
  public deleteDevEndpoint(
    args: DeleteDevEndpointCommandInput,
    cb: (err: any, data?: DeleteDevEndpointCommandOutput) => void
  ): void;
  public deleteDevEndpoint(
    args: DeleteDevEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDevEndpointCommandOutput) => void
  ): void;
  public deleteDevEndpoint(
    args: DeleteDevEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDevEndpointCommandOutput) => void),
    cb?: (err: any, data?: DeleteDevEndpointCommandOutput) => void
  ): Promise<DeleteDevEndpointCommandOutput> | void {
    const command = new DeleteDevEndpointCommand(args);
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
   * <p>Deletes a specified job definition. If the job definition
   *       is not found, no exception is thrown.</p>
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
   * <p>Deletes an Glue machine learning transform. Machine learning transforms are a special
   *       type of transform that use machine learning to learn the details of the transformation to be
   *       performed by learning from examples provided by humans. These transformations are then saved
   *       by Glue. If you no longer need a transform, you can delete it by calling
   *         <code>DeleteMLTransforms</code>. However, any Glue jobs that still reference the deleted
   *       transform will no longer succeed.</p>
   */
  public deleteMLTransform(
    args: DeleteMLTransformCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMLTransformCommandOutput>;
  public deleteMLTransform(
    args: DeleteMLTransformCommandInput,
    cb: (err: any, data?: DeleteMLTransformCommandOutput) => void
  ): void;
  public deleteMLTransform(
    args: DeleteMLTransformCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMLTransformCommandOutput) => void
  ): void;
  public deleteMLTransform(
    args: DeleteMLTransformCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMLTransformCommandOutput) => void),
    cb?: (err: any, data?: DeleteMLTransformCommandOutput) => void
  ): Promise<DeleteMLTransformCommandOutput> | void {
    const command = new DeleteMLTransformCommand(args);
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
   * <p>Deletes a specified partition.</p>
   */
  public deletePartition(
    args: DeletePartitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePartitionCommandOutput>;
  public deletePartition(
    args: DeletePartitionCommandInput,
    cb: (err: any, data?: DeletePartitionCommandOutput) => void
  ): void;
  public deletePartition(
    args: DeletePartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePartitionCommandOutput) => void
  ): void;
  public deletePartition(
    args: DeletePartitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePartitionCommandOutput) => void),
    cb?: (err: any, data?: DeletePartitionCommandOutput) => void
  ): Promise<DeletePartitionCommandOutput> | void {
    const command = new DeletePartitionCommand(args);
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
   * <p>Deletes a specified partition index from an existing table.</p>
   */
  public deletePartitionIndex(
    args: DeletePartitionIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePartitionIndexCommandOutput>;
  public deletePartitionIndex(
    args: DeletePartitionIndexCommandInput,
    cb: (err: any, data?: DeletePartitionIndexCommandOutput) => void
  ): void;
  public deletePartitionIndex(
    args: DeletePartitionIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePartitionIndexCommandOutput) => void
  ): void;
  public deletePartitionIndex(
    args: DeletePartitionIndexCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePartitionIndexCommandOutput) => void),
    cb?: (err: any, data?: DeletePartitionIndexCommandOutput) => void
  ): Promise<DeletePartitionIndexCommandOutput> | void {
    const command = new DeletePartitionIndexCommand(args);
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
   * <p>Delete the entire registry including schema and all of its versions. To get the status of the delete operation, you can call the <code>GetRegistry</code> API after the asynchronous call. Deleting a registry will deactivate all online operations for the registry such as the <code>UpdateRegistry</code>, <code>CreateSchema</code>, <code>UpdateSchema</code>, and <code>RegisterSchemaVersion</code> APIs. </p>
   */
  public deleteRegistry(
    args: DeleteRegistryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRegistryCommandOutput>;
  public deleteRegistry(
    args: DeleteRegistryCommandInput,
    cb: (err: any, data?: DeleteRegistryCommandOutput) => void
  ): void;
  public deleteRegistry(
    args: DeleteRegistryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRegistryCommandOutput) => void
  ): void;
  public deleteRegistry(
    args: DeleteRegistryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRegistryCommandOutput) => void),
    cb?: (err: any, data?: DeleteRegistryCommandOutput) => void
  ): Promise<DeleteRegistryCommandOutput> | void {
    const command = new DeleteRegistryCommand(args);
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
   * <p>Deletes a specified policy.</p>
   */
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): Promise<DeleteResourcePolicyCommandOutput> | void {
    const command = new DeleteResourcePolicyCommand(args);
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
   * <p>Deletes the entire schema set, including the schema set and all of its versions. To get the status of the delete operation, you can call <code>GetSchema</code> API after the asynchronous call. Deleting a registry will deactivate all online operations for the schema, such as the <code>GetSchemaByDefinition</code>, and <code>RegisterSchemaVersion</code> APIs.</p>
   */
  public deleteSchema(
    args: DeleteSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSchemaCommandOutput>;
  public deleteSchema(args: DeleteSchemaCommandInput, cb: (err: any, data?: DeleteSchemaCommandOutput) => void): void;
  public deleteSchema(
    args: DeleteSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSchemaCommandOutput) => void
  ): void;
  public deleteSchema(
    args: DeleteSchemaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSchemaCommandOutput) => void),
    cb?: (err: any, data?: DeleteSchemaCommandOutput) => void
  ): Promise<DeleteSchemaCommandOutput> | void {
    const command = new DeleteSchemaCommand(args);
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
   * <p>Remove versions from the specified schema. A version number or range may be supplied. If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned.  Calling the <code>GetSchemaVersions</code> API after this call will list the status of the deleted versions.</p>
   *          <p>When the range of version numbers contain check pointed version, the API will return a 409 conflict and will not proceed with the deletion. You have to remove the checkpoint first using the <code>DeleteSchemaCheckpoint</code> API before using this API.</p>
   *          <p>You cannot use the <code>DeleteSchemaVersions</code> API to delete the first schema version in the schema set. The first schema version can only be deleted by the <code>DeleteSchema</code> API. This operation will also delete the attached <code>SchemaVersionMetadata</code> under the schema versions. Hard deletes will be enforced on the database.</p>
   *          <p>If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned.</p>
   */
  public deleteSchemaVersions(
    args: DeleteSchemaVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSchemaVersionsCommandOutput>;
  public deleteSchemaVersions(
    args: DeleteSchemaVersionsCommandInput,
    cb: (err: any, data?: DeleteSchemaVersionsCommandOutput) => void
  ): void;
  public deleteSchemaVersions(
    args: DeleteSchemaVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSchemaVersionsCommandOutput) => void
  ): void;
  public deleteSchemaVersions(
    args: DeleteSchemaVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSchemaVersionsCommandOutput) => void),
    cb?: (err: any, data?: DeleteSchemaVersionsCommandOutput) => void
  ): Promise<DeleteSchemaVersionsCommandOutput> | void {
    const command = new DeleteSchemaVersionsCommand(args);
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
   * <p>Deletes a specified security configuration.</p>
   */
  public deleteSecurityConfiguration(
    args: DeleteSecurityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSecurityConfigurationCommandOutput>;
  public deleteSecurityConfiguration(
    args: DeleteSecurityConfigurationCommandInput,
    cb: (err: any, data?: DeleteSecurityConfigurationCommandOutput) => void
  ): void;
  public deleteSecurityConfiguration(
    args: DeleteSecurityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSecurityConfigurationCommandOutput) => void
  ): void;
  public deleteSecurityConfiguration(
    args: DeleteSecurityConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSecurityConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteSecurityConfigurationCommandOutput) => void
  ): Promise<DeleteSecurityConfigurationCommandOutput> | void {
    const command = new DeleteSecurityConfigurationCommand(args);
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
   * <p>Deletes the session.</p>
   */
  public deleteSession(
    args: DeleteSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSessionCommandOutput>;
  public deleteSession(
    args: DeleteSessionCommandInput,
    cb: (err: any, data?: DeleteSessionCommandOutput) => void
  ): void;
  public deleteSession(
    args: DeleteSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSessionCommandOutput) => void
  ): void;
  public deleteSession(
    args: DeleteSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSessionCommandOutput) => void),
    cb?: (err: any, data?: DeleteSessionCommandOutput) => void
  ): Promise<DeleteSessionCommandOutput> | void {
    const command = new DeleteSessionCommand(args);
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
   * <p>Removes a table definition from the Data Catalog.</p>
   *          <note>
   *             <p>After completing this operation, you no longer have access to the table versions and
   *         partitions that belong to the deleted table. Glue deletes these "orphaned" resources
   *         asynchronously in a timely manner, at the discretion of the service.</p>
   *             <p>To ensure the immediate deletion of all related resources, before calling
   *           <code>DeleteTable</code>, use <code>DeleteTableVersion</code> or
   *           <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or
   *           <code>BatchDeletePartition</code>, to delete any resources that belong to the
   *         table.</p>
   *          </note>
   */
  public deleteTable(args: DeleteTableCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTableCommandOutput>;
  public deleteTable(args: DeleteTableCommandInput, cb: (err: any, data?: DeleteTableCommandOutput) => void): void;
  public deleteTable(
    args: DeleteTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTableCommandOutput) => void
  ): void;
  public deleteTable(
    args: DeleteTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTableCommandOutput) => void),
    cb?: (err: any, data?: DeleteTableCommandOutput) => void
  ): Promise<DeleteTableCommandOutput> | void {
    const command = new DeleteTableCommand(args);
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
   * <p>Deletes a specified version of a table.</p>
   */
  public deleteTableVersion(
    args: DeleteTableVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTableVersionCommandOutput>;
  public deleteTableVersion(
    args: DeleteTableVersionCommandInput,
    cb: (err: any, data?: DeleteTableVersionCommandOutput) => void
  ): void;
  public deleteTableVersion(
    args: DeleteTableVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTableVersionCommandOutput) => void
  ): void;
  public deleteTableVersion(
    args: DeleteTableVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTableVersionCommandOutput) => void),
    cb?: (err: any, data?: DeleteTableVersionCommandOutput) => void
  ): Promise<DeleteTableVersionCommandOutput> | void {
    const command = new DeleteTableVersionCommand(args);
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
   * <p>Deletes a specified trigger. If the trigger is not found, no
   *       exception is thrown.</p>
   */
  public deleteTrigger(
    args: DeleteTriggerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTriggerCommandOutput>;
  public deleteTrigger(
    args: DeleteTriggerCommandInput,
    cb: (err: any, data?: DeleteTriggerCommandOutput) => void
  ): void;
  public deleteTrigger(
    args: DeleteTriggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTriggerCommandOutput) => void
  ): void;
  public deleteTrigger(
    args: DeleteTriggerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTriggerCommandOutput) => void),
    cb?: (err: any, data?: DeleteTriggerCommandOutput) => void
  ): Promise<DeleteTriggerCommandOutput> | void {
    const command = new DeleteTriggerCommand(args);
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
   * <p>Deletes an existing function definition from the Data Catalog.</p>
   */
  public deleteUserDefinedFunction(
    args: DeleteUserDefinedFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserDefinedFunctionCommandOutput>;
  public deleteUserDefinedFunction(
    args: DeleteUserDefinedFunctionCommandInput,
    cb: (err: any, data?: DeleteUserDefinedFunctionCommandOutput) => void
  ): void;
  public deleteUserDefinedFunction(
    args: DeleteUserDefinedFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserDefinedFunctionCommandOutput) => void
  ): void;
  public deleteUserDefinedFunction(
    args: DeleteUserDefinedFunctionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUserDefinedFunctionCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserDefinedFunctionCommandOutput) => void
  ): Promise<DeleteUserDefinedFunctionCommandOutput> | void {
    const command = new DeleteUserDefinedFunctionCommand(args);
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
   * <p>Deletes a workflow.</p>
   */
  public deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkflowCommandOutput>;
  public deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    cb: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): void;
  public deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): void;
  public deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWorkflowCommandOutput) => void),
    cb?: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): Promise<DeleteWorkflowCommandOutput> | void {
    const command = new DeleteWorkflowCommand(args);
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
   * <p>Retrieves the details of a blueprint.</p>
   */
  public getBlueprint(
    args: GetBlueprintCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBlueprintCommandOutput>;
  public getBlueprint(args: GetBlueprintCommandInput, cb: (err: any, data?: GetBlueprintCommandOutput) => void): void;
  public getBlueprint(
    args: GetBlueprintCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBlueprintCommandOutput) => void
  ): void;
  public getBlueprint(
    args: GetBlueprintCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBlueprintCommandOutput) => void),
    cb?: (err: any, data?: GetBlueprintCommandOutput) => void
  ): Promise<GetBlueprintCommandOutput> | void {
    const command = new GetBlueprintCommand(args);
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
   * <p>Retrieves the details of a blueprint run.</p>
   */
  public getBlueprintRun(
    args: GetBlueprintRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBlueprintRunCommandOutput>;
  public getBlueprintRun(
    args: GetBlueprintRunCommandInput,
    cb: (err: any, data?: GetBlueprintRunCommandOutput) => void
  ): void;
  public getBlueprintRun(
    args: GetBlueprintRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBlueprintRunCommandOutput) => void
  ): void;
  public getBlueprintRun(
    args: GetBlueprintRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBlueprintRunCommandOutput) => void),
    cb?: (err: any, data?: GetBlueprintRunCommandOutput) => void
  ): Promise<GetBlueprintRunCommandOutput> | void {
    const command = new GetBlueprintRunCommand(args);
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
   * <p>Retrieves the details of blueprint runs for a specified blueprint.</p>
   */
  public getBlueprintRuns(
    args: GetBlueprintRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBlueprintRunsCommandOutput>;
  public getBlueprintRuns(
    args: GetBlueprintRunsCommandInput,
    cb: (err: any, data?: GetBlueprintRunsCommandOutput) => void
  ): void;
  public getBlueprintRuns(
    args: GetBlueprintRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBlueprintRunsCommandOutput) => void
  ): void;
  public getBlueprintRuns(
    args: GetBlueprintRunsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBlueprintRunsCommandOutput) => void),
    cb?: (err: any, data?: GetBlueprintRunsCommandOutput) => void
  ): Promise<GetBlueprintRunsCommandOutput> | void {
    const command = new GetBlueprintRunsCommand(args);
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
   * <p>Retrieves the status of a migration operation.</p>
   */
  public getCatalogImportStatus(
    args: GetCatalogImportStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCatalogImportStatusCommandOutput>;
  public getCatalogImportStatus(
    args: GetCatalogImportStatusCommandInput,
    cb: (err: any, data?: GetCatalogImportStatusCommandOutput) => void
  ): void;
  public getCatalogImportStatus(
    args: GetCatalogImportStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCatalogImportStatusCommandOutput) => void
  ): void;
  public getCatalogImportStatus(
    args: GetCatalogImportStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCatalogImportStatusCommandOutput) => void),
    cb?: (err: any, data?: GetCatalogImportStatusCommandOutput) => void
  ): Promise<GetCatalogImportStatusCommandOutput> | void {
    const command = new GetCatalogImportStatusCommand(args);
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
   * <p>Retrieve a classifier by name.</p>
   */
  public getClassifier(
    args: GetClassifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClassifierCommandOutput>;
  public getClassifier(
    args: GetClassifierCommandInput,
    cb: (err: any, data?: GetClassifierCommandOutput) => void
  ): void;
  public getClassifier(
    args: GetClassifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClassifierCommandOutput) => void
  ): void;
  public getClassifier(
    args: GetClassifierCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetClassifierCommandOutput) => void),
    cb?: (err: any, data?: GetClassifierCommandOutput) => void
  ): Promise<GetClassifierCommandOutput> | void {
    const command = new GetClassifierCommand(args);
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
   * <p>Lists all classifier objects in the Data Catalog.</p>
   */
  public getClassifiers(
    args: GetClassifiersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClassifiersCommandOutput>;
  public getClassifiers(
    args: GetClassifiersCommandInput,
    cb: (err: any, data?: GetClassifiersCommandOutput) => void
  ): void;
  public getClassifiers(
    args: GetClassifiersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClassifiersCommandOutput) => void
  ): void;
  public getClassifiers(
    args: GetClassifiersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetClassifiersCommandOutput) => void),
    cb?: (err: any, data?: GetClassifiersCommandOutput) => void
  ): Promise<GetClassifiersCommandOutput> | void {
    const command = new GetClassifiersCommand(args);
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
   * <p>Retrieves partition statistics of columns.</p>
   *          <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetPartition</code>.</p>
   */
  public getColumnStatisticsForPartition(
    args: GetColumnStatisticsForPartitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetColumnStatisticsForPartitionCommandOutput>;
  public getColumnStatisticsForPartition(
    args: GetColumnStatisticsForPartitionCommandInput,
    cb: (err: any, data?: GetColumnStatisticsForPartitionCommandOutput) => void
  ): void;
  public getColumnStatisticsForPartition(
    args: GetColumnStatisticsForPartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetColumnStatisticsForPartitionCommandOutput) => void
  ): void;
  public getColumnStatisticsForPartition(
    args: GetColumnStatisticsForPartitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetColumnStatisticsForPartitionCommandOutput) => void),
    cb?: (err: any, data?: GetColumnStatisticsForPartitionCommandOutput) => void
  ): Promise<GetColumnStatisticsForPartitionCommandOutput> | void {
    const command = new GetColumnStatisticsForPartitionCommand(args);
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
   * <p>Retrieves table statistics of columns.</p>
   *          <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetTable</code>.</p>
   */
  public getColumnStatisticsForTable(
    args: GetColumnStatisticsForTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetColumnStatisticsForTableCommandOutput>;
  public getColumnStatisticsForTable(
    args: GetColumnStatisticsForTableCommandInput,
    cb: (err: any, data?: GetColumnStatisticsForTableCommandOutput) => void
  ): void;
  public getColumnStatisticsForTable(
    args: GetColumnStatisticsForTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetColumnStatisticsForTableCommandOutput) => void
  ): void;
  public getColumnStatisticsForTable(
    args: GetColumnStatisticsForTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetColumnStatisticsForTableCommandOutput) => void),
    cb?: (err: any, data?: GetColumnStatisticsForTableCommandOutput) => void
  ): Promise<GetColumnStatisticsForTableCommandOutput> | void {
    const command = new GetColumnStatisticsForTableCommand(args);
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
   * <p>Retrieves a connection definition from the Data Catalog.</p>
   */
  public getConnection(
    args: GetConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectionCommandOutput>;
  public getConnection(
    args: GetConnectionCommandInput,
    cb: (err: any, data?: GetConnectionCommandOutput) => void
  ): void;
  public getConnection(
    args: GetConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectionCommandOutput) => void
  ): void;
  public getConnection(
    args: GetConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConnectionCommandOutput) => void),
    cb?: (err: any, data?: GetConnectionCommandOutput) => void
  ): Promise<GetConnectionCommandOutput> | void {
    const command = new GetConnectionCommand(args);
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
   * <p>Retrieves a list of connection definitions from the Data Catalog.</p>
   */
  public getConnections(
    args: GetConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectionsCommandOutput>;
  public getConnections(
    args: GetConnectionsCommandInput,
    cb: (err: any, data?: GetConnectionsCommandOutput) => void
  ): void;
  public getConnections(
    args: GetConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectionsCommandOutput) => void
  ): void;
  public getConnections(
    args: GetConnectionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConnectionsCommandOutput) => void),
    cb?: (err: any, data?: GetConnectionsCommandOutput) => void
  ): Promise<GetConnectionsCommandOutput> | void {
    const command = new GetConnectionsCommand(args);
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
   * <p>Retrieves metadata for a specified crawler.</p>
   */
  public getCrawler(args: GetCrawlerCommandInput, options?: __HttpHandlerOptions): Promise<GetCrawlerCommandOutput>;
  public getCrawler(args: GetCrawlerCommandInput, cb: (err: any, data?: GetCrawlerCommandOutput) => void): void;
  public getCrawler(
    args: GetCrawlerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCrawlerCommandOutput) => void
  ): void;
  public getCrawler(
    args: GetCrawlerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCrawlerCommandOutput) => void),
    cb?: (err: any, data?: GetCrawlerCommandOutput) => void
  ): Promise<GetCrawlerCommandOutput> | void {
    const command = new GetCrawlerCommand(args);
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
   * <p>Retrieves metrics about specified crawlers.</p>
   */
  public getCrawlerMetrics(
    args: GetCrawlerMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCrawlerMetricsCommandOutput>;
  public getCrawlerMetrics(
    args: GetCrawlerMetricsCommandInput,
    cb: (err: any, data?: GetCrawlerMetricsCommandOutput) => void
  ): void;
  public getCrawlerMetrics(
    args: GetCrawlerMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCrawlerMetricsCommandOutput) => void
  ): void;
  public getCrawlerMetrics(
    args: GetCrawlerMetricsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCrawlerMetricsCommandOutput) => void),
    cb?: (err: any, data?: GetCrawlerMetricsCommandOutput) => void
  ): Promise<GetCrawlerMetricsCommandOutput> | void {
    const command = new GetCrawlerMetricsCommand(args);
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
   * <p>Retrieves metadata for all crawlers defined in the customer
   *       account.</p>
   */
  public getCrawlers(args: GetCrawlersCommandInput, options?: __HttpHandlerOptions): Promise<GetCrawlersCommandOutput>;
  public getCrawlers(args: GetCrawlersCommandInput, cb: (err: any, data?: GetCrawlersCommandOutput) => void): void;
  public getCrawlers(
    args: GetCrawlersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCrawlersCommandOutput) => void
  ): void;
  public getCrawlers(
    args: GetCrawlersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCrawlersCommandOutput) => void),
    cb?: (err: any, data?: GetCrawlersCommandOutput) => void
  ): Promise<GetCrawlersCommandOutput> | void {
    const command = new GetCrawlersCommand(args);
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
   * <p>Retrieves the details of a custom pattern by specifying its name.</p>
   */
  public getCustomEntityType(
    args: GetCustomEntityTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCustomEntityTypeCommandOutput>;
  public getCustomEntityType(
    args: GetCustomEntityTypeCommandInput,
    cb: (err: any, data?: GetCustomEntityTypeCommandOutput) => void
  ): void;
  public getCustomEntityType(
    args: GetCustomEntityTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCustomEntityTypeCommandOutput) => void
  ): void;
  public getCustomEntityType(
    args: GetCustomEntityTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCustomEntityTypeCommandOutput) => void),
    cb?: (err: any, data?: GetCustomEntityTypeCommandOutput) => void
  ): Promise<GetCustomEntityTypeCommandOutput> | void {
    const command = new GetCustomEntityTypeCommand(args);
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
   * <p>Retrieves the definition of a specified database.</p>
   */
  public getDatabase(args: GetDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<GetDatabaseCommandOutput>;
  public getDatabase(args: GetDatabaseCommandInput, cb: (err: any, data?: GetDatabaseCommandOutput) => void): void;
  public getDatabase(
    args: GetDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDatabaseCommandOutput) => void
  ): void;
  public getDatabase(
    args: GetDatabaseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDatabaseCommandOutput) => void),
    cb?: (err: any, data?: GetDatabaseCommandOutput) => void
  ): Promise<GetDatabaseCommandOutput> | void {
    const command = new GetDatabaseCommand(args);
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
   * <p>Retrieves all databases defined in a given Data Catalog.</p>
   */
  public getDatabases(
    args: GetDatabasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDatabasesCommandOutput>;
  public getDatabases(args: GetDatabasesCommandInput, cb: (err: any, data?: GetDatabasesCommandOutput) => void): void;
  public getDatabases(
    args: GetDatabasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDatabasesCommandOutput) => void
  ): void;
  public getDatabases(
    args: GetDatabasesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDatabasesCommandOutput) => void),
    cb?: (err: any, data?: GetDatabasesCommandOutput) => void
  ): Promise<GetDatabasesCommandOutput> | void {
    const command = new GetDatabasesCommand(args);
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
   * <p>Retrieves the security configuration for a specified catalog.</p>
   */
  public getDataCatalogEncryptionSettings(
    args: GetDataCatalogEncryptionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataCatalogEncryptionSettingsCommandOutput>;
  public getDataCatalogEncryptionSettings(
    args: GetDataCatalogEncryptionSettingsCommandInput,
    cb: (err: any, data?: GetDataCatalogEncryptionSettingsCommandOutput) => void
  ): void;
  public getDataCatalogEncryptionSettings(
    args: GetDataCatalogEncryptionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataCatalogEncryptionSettingsCommandOutput) => void
  ): void;
  public getDataCatalogEncryptionSettings(
    args: GetDataCatalogEncryptionSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDataCatalogEncryptionSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetDataCatalogEncryptionSettingsCommandOutput) => void
  ): Promise<GetDataCatalogEncryptionSettingsCommandOutput> | void {
    const command = new GetDataCatalogEncryptionSettingsCommand(args);
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
   * <p>Transforms a Python script into a directed acyclic graph (DAG). </p>
   */
  public getDataflowGraph(
    args: GetDataflowGraphCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataflowGraphCommandOutput>;
  public getDataflowGraph(
    args: GetDataflowGraphCommandInput,
    cb: (err: any, data?: GetDataflowGraphCommandOutput) => void
  ): void;
  public getDataflowGraph(
    args: GetDataflowGraphCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataflowGraphCommandOutput) => void
  ): void;
  public getDataflowGraph(
    args: GetDataflowGraphCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDataflowGraphCommandOutput) => void),
    cb?: (err: any, data?: GetDataflowGraphCommandOutput) => void
  ): Promise<GetDataflowGraphCommandOutput> | void {
    const command = new GetDataflowGraphCommand(args);
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
   * <p>Retrieves the result of a data quality rule evaluation.</p>
   */
  public getDataQualityResult(
    args: GetDataQualityResultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataQualityResultCommandOutput>;
  public getDataQualityResult(
    args: GetDataQualityResultCommandInput,
    cb: (err: any, data?: GetDataQualityResultCommandOutput) => void
  ): void;
  public getDataQualityResult(
    args: GetDataQualityResultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataQualityResultCommandOutput) => void
  ): void;
  public getDataQualityResult(
    args: GetDataQualityResultCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDataQualityResultCommandOutput) => void),
    cb?: (err: any, data?: GetDataQualityResultCommandOutput) => void
  ): Promise<GetDataQualityResultCommandOutput> | void {
    const command = new GetDataQualityResultCommand(args);
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
   * <p>Gets the specified recommendation run that was used to generate rules.</p>
   */
  public getDataQualityRuleRecommendationRun(
    args: GetDataQualityRuleRecommendationRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataQualityRuleRecommendationRunCommandOutput>;
  public getDataQualityRuleRecommendationRun(
    args: GetDataQualityRuleRecommendationRunCommandInput,
    cb: (err: any, data?: GetDataQualityRuleRecommendationRunCommandOutput) => void
  ): void;
  public getDataQualityRuleRecommendationRun(
    args: GetDataQualityRuleRecommendationRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataQualityRuleRecommendationRunCommandOutput) => void
  ): void;
  public getDataQualityRuleRecommendationRun(
    args: GetDataQualityRuleRecommendationRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDataQualityRuleRecommendationRunCommandOutput) => void),
    cb?: (err: any, data?: GetDataQualityRuleRecommendationRunCommandOutput) => void
  ): Promise<GetDataQualityRuleRecommendationRunCommandOutput> | void {
    const command = new GetDataQualityRuleRecommendationRunCommand(args);
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
   * <p>Returns an existing ruleset by identifier or name.</p>
   */
  public getDataQualityRuleset(
    args: GetDataQualityRulesetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataQualityRulesetCommandOutput>;
  public getDataQualityRuleset(
    args: GetDataQualityRulesetCommandInput,
    cb: (err: any, data?: GetDataQualityRulesetCommandOutput) => void
  ): void;
  public getDataQualityRuleset(
    args: GetDataQualityRulesetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataQualityRulesetCommandOutput) => void
  ): void;
  public getDataQualityRuleset(
    args: GetDataQualityRulesetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDataQualityRulesetCommandOutput) => void),
    cb?: (err: any, data?: GetDataQualityRulesetCommandOutput) => void
  ): Promise<GetDataQualityRulesetCommandOutput> | void {
    const command = new GetDataQualityRulesetCommand(args);
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
   * <p>Retrieves a specific run where a ruleset is evaluated against a data source.</p>
   */
  public getDataQualityRulesetEvaluationRun(
    args: GetDataQualityRulesetEvaluationRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataQualityRulesetEvaluationRunCommandOutput>;
  public getDataQualityRulesetEvaluationRun(
    args: GetDataQualityRulesetEvaluationRunCommandInput,
    cb: (err: any, data?: GetDataQualityRulesetEvaluationRunCommandOutput) => void
  ): void;
  public getDataQualityRulesetEvaluationRun(
    args: GetDataQualityRulesetEvaluationRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataQualityRulesetEvaluationRunCommandOutput) => void
  ): void;
  public getDataQualityRulesetEvaluationRun(
    args: GetDataQualityRulesetEvaluationRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDataQualityRulesetEvaluationRunCommandOutput) => void),
    cb?: (err: any, data?: GetDataQualityRulesetEvaluationRunCommandOutput) => void
  ): Promise<GetDataQualityRulesetEvaluationRunCommandOutput> | void {
    const command = new GetDataQualityRulesetEvaluationRunCommand(args);
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
   * <p>Retrieves information about a specified development endpoint.</p>
   *          <note>
   *             <p>When you create a development endpoint in a virtual private cloud (VPC), Glue returns only
   *         a private IP address, and the public IP address field is not populated. When you create a
   *         non-VPC development endpoint, Glue returns only a public IP address.</p>
   *          </note>
   */
  public getDevEndpoint(
    args: GetDevEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDevEndpointCommandOutput>;
  public getDevEndpoint(
    args: GetDevEndpointCommandInput,
    cb: (err: any, data?: GetDevEndpointCommandOutput) => void
  ): void;
  public getDevEndpoint(
    args: GetDevEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDevEndpointCommandOutput) => void
  ): void;
  public getDevEndpoint(
    args: GetDevEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDevEndpointCommandOutput) => void),
    cb?: (err: any, data?: GetDevEndpointCommandOutput) => void
  ): Promise<GetDevEndpointCommandOutput> | void {
    const command = new GetDevEndpointCommand(args);
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
   * <p>Retrieves all the development endpoints in this Amazon Web Services account.</p>
   *          <note>
   *             <p>When you create a development endpoint in a virtual private cloud (VPC), Glue returns only a private IP address
   *       and the public IP address field is not populated. When you create a non-VPC development
   *       endpoint, Glue returns only a public IP address.</p>
   *          </note>
   */
  public getDevEndpoints(
    args: GetDevEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDevEndpointsCommandOutput>;
  public getDevEndpoints(
    args: GetDevEndpointsCommandInput,
    cb: (err: any, data?: GetDevEndpointsCommandOutput) => void
  ): void;
  public getDevEndpoints(
    args: GetDevEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDevEndpointsCommandOutput) => void
  ): void;
  public getDevEndpoints(
    args: GetDevEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDevEndpointsCommandOutput) => void),
    cb?: (err: any, data?: GetDevEndpointsCommandOutput) => void
  ): Promise<GetDevEndpointsCommandOutput> | void {
    const command = new GetDevEndpointsCommand(args);
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
   * <p>Retrieves an existing job definition.</p>
   */
  public getJob(args: GetJobCommandInput, options?: __HttpHandlerOptions): Promise<GetJobCommandOutput>;
  public getJob(args: GetJobCommandInput, cb: (err: any, data?: GetJobCommandOutput) => void): void;
  public getJob(
    args: GetJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;
  public getJob(
    args: GetJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetJobCommandOutput) => void),
    cb?: (err: any, data?: GetJobCommandOutput) => void
  ): Promise<GetJobCommandOutput> | void {
    const command = new GetJobCommand(args);
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
   * <p>Returns information on a job bookmark entry.</p>
   *          <p>For more information about enabling and using job bookmarks, see:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html">Tracking processed data using job bookmarks</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Job parameters used by Glue</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-Job">Job structure</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public getJobBookmark(
    args: GetJobBookmarkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetJobBookmarkCommandOutput>;
  public getJobBookmark(
    args: GetJobBookmarkCommandInput,
    cb: (err: any, data?: GetJobBookmarkCommandOutput) => void
  ): void;
  public getJobBookmark(
    args: GetJobBookmarkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobBookmarkCommandOutput) => void
  ): void;
  public getJobBookmark(
    args: GetJobBookmarkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetJobBookmarkCommandOutput) => void),
    cb?: (err: any, data?: GetJobBookmarkCommandOutput) => void
  ): Promise<GetJobBookmarkCommandOutput> | void {
    const command = new GetJobBookmarkCommand(args);
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
   * <p>Retrieves the metadata for a given job run.</p>
   */
  public getJobRun(args: GetJobRunCommandInput, options?: __HttpHandlerOptions): Promise<GetJobRunCommandOutput>;
  public getJobRun(args: GetJobRunCommandInput, cb: (err: any, data?: GetJobRunCommandOutput) => void): void;
  public getJobRun(
    args: GetJobRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobRunCommandOutput) => void
  ): void;
  public getJobRun(
    args: GetJobRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetJobRunCommandOutput) => void),
    cb?: (err: any, data?: GetJobRunCommandOutput) => void
  ): Promise<GetJobRunCommandOutput> | void {
    const command = new GetJobRunCommand(args);
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
   * <p>Retrieves metadata for all runs of a given job definition.</p>
   */
  public getJobRuns(args: GetJobRunsCommandInput, options?: __HttpHandlerOptions): Promise<GetJobRunsCommandOutput>;
  public getJobRuns(args: GetJobRunsCommandInput, cb: (err: any, data?: GetJobRunsCommandOutput) => void): void;
  public getJobRuns(
    args: GetJobRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobRunsCommandOutput) => void
  ): void;
  public getJobRuns(
    args: GetJobRunsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetJobRunsCommandOutput) => void),
    cb?: (err: any, data?: GetJobRunsCommandOutput) => void
  ): Promise<GetJobRunsCommandOutput> | void {
    const command = new GetJobRunsCommand(args);
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
   * <p>Retrieves all current job definitions.</p>
   */
  public getJobs(args: GetJobsCommandInput, options?: __HttpHandlerOptions): Promise<GetJobsCommandOutput>;
  public getJobs(args: GetJobsCommandInput, cb: (err: any, data?: GetJobsCommandOutput) => void): void;
  public getJobs(
    args: GetJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobsCommandOutput) => void
  ): void;
  public getJobs(
    args: GetJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetJobsCommandOutput) => void),
    cb?: (err: any, data?: GetJobsCommandOutput) => void
  ): Promise<GetJobsCommandOutput> | void {
    const command = new GetJobsCommand(args);
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
   * <p>Creates mappings.</p>
   */
  public getMapping(args: GetMappingCommandInput, options?: __HttpHandlerOptions): Promise<GetMappingCommandOutput>;
  public getMapping(args: GetMappingCommandInput, cb: (err: any, data?: GetMappingCommandOutput) => void): void;
  public getMapping(
    args: GetMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMappingCommandOutput) => void
  ): void;
  public getMapping(
    args: GetMappingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMappingCommandOutput) => void),
    cb?: (err: any, data?: GetMappingCommandOutput) => void
  ): Promise<GetMappingCommandOutput> | void {
    const command = new GetMappingCommand(args);
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
   * <p>Gets details for a specific task run on a machine learning transform. Machine learning
   *       task runs are asynchronous tasks that Glue runs on your behalf as part of various machine
   *       learning workflows. You can check the stats of any task run by calling
   *         <code>GetMLTaskRun</code> with the <code>TaskRunID</code> and its parent transform's
   *         <code>TransformID</code>.</p>
   */
  public getMLTaskRun(
    args: GetMLTaskRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMLTaskRunCommandOutput>;
  public getMLTaskRun(args: GetMLTaskRunCommandInput, cb: (err: any, data?: GetMLTaskRunCommandOutput) => void): void;
  public getMLTaskRun(
    args: GetMLTaskRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMLTaskRunCommandOutput) => void
  ): void;
  public getMLTaskRun(
    args: GetMLTaskRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMLTaskRunCommandOutput) => void),
    cb?: (err: any, data?: GetMLTaskRunCommandOutput) => void
  ): Promise<GetMLTaskRunCommandOutput> | void {
    const command = new GetMLTaskRunCommand(args);
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
   * <p>Gets a list of runs for a machine learning transform. Machine learning task runs are
   *       asynchronous tasks that Glue runs on your behalf as part of various machine learning
   *       workflows. You can get a sortable, filterable list of machine learning task runs by calling
   *         <code>GetMLTaskRuns</code> with their parent transform's <code>TransformID</code> and other
   *       optional parameters as documented in this section.</p>
   *          <p>This operation returns a list of historic runs and must be paginated.</p>
   */
  public getMLTaskRuns(
    args: GetMLTaskRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMLTaskRunsCommandOutput>;
  public getMLTaskRuns(
    args: GetMLTaskRunsCommandInput,
    cb: (err: any, data?: GetMLTaskRunsCommandOutput) => void
  ): void;
  public getMLTaskRuns(
    args: GetMLTaskRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMLTaskRunsCommandOutput) => void
  ): void;
  public getMLTaskRuns(
    args: GetMLTaskRunsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMLTaskRunsCommandOutput) => void),
    cb?: (err: any, data?: GetMLTaskRunsCommandOutput) => void
  ): Promise<GetMLTaskRunsCommandOutput> | void {
    const command = new GetMLTaskRunsCommand(args);
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
   * <p>Gets an Glue machine learning transform artifact and all its corresponding metadata.
   *       Machine learning transforms are a special type of transform that use machine learning to learn
   *       the details of the transformation to be performed by learning from examples provided by
   *       humans. These transformations are then saved by Glue. You can retrieve their metadata by
   *       calling <code>GetMLTransform</code>.</p>
   */
  public getMLTransform(
    args: GetMLTransformCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMLTransformCommandOutput>;
  public getMLTransform(
    args: GetMLTransformCommandInput,
    cb: (err: any, data?: GetMLTransformCommandOutput) => void
  ): void;
  public getMLTransform(
    args: GetMLTransformCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMLTransformCommandOutput) => void
  ): void;
  public getMLTransform(
    args: GetMLTransformCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMLTransformCommandOutput) => void),
    cb?: (err: any, data?: GetMLTransformCommandOutput) => void
  ): Promise<GetMLTransformCommandOutput> | void {
    const command = new GetMLTransformCommand(args);
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
   * <p>Gets a sortable, filterable list of existing Glue machine learning transforms. Machine
   *       learning transforms are a special type of transform that use machine learning to learn the
   *       details of the transformation to be performed by learning from examples provided by humans.
   *       These transformations are then saved by Glue, and you can retrieve their metadata by
   *       calling <code>GetMLTransforms</code>.</p>
   */
  public getMLTransforms(
    args: GetMLTransformsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMLTransformsCommandOutput>;
  public getMLTransforms(
    args: GetMLTransformsCommandInput,
    cb: (err: any, data?: GetMLTransformsCommandOutput) => void
  ): void;
  public getMLTransforms(
    args: GetMLTransformsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMLTransformsCommandOutput) => void
  ): void;
  public getMLTransforms(
    args: GetMLTransformsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMLTransformsCommandOutput) => void),
    cb?: (err: any, data?: GetMLTransformsCommandOutput) => void
  ): Promise<GetMLTransformsCommandOutput> | void {
    const command = new GetMLTransformsCommand(args);
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
   * <p>Retrieves information about a specified partition.</p>
   */
  public getPartition(
    args: GetPartitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPartitionCommandOutput>;
  public getPartition(args: GetPartitionCommandInput, cb: (err: any, data?: GetPartitionCommandOutput) => void): void;
  public getPartition(
    args: GetPartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPartitionCommandOutput) => void
  ): void;
  public getPartition(
    args: GetPartitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPartitionCommandOutput) => void),
    cb?: (err: any, data?: GetPartitionCommandOutput) => void
  ): Promise<GetPartitionCommandOutput> | void {
    const command = new GetPartitionCommand(args);
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
   * <p>Retrieves the partition indexes associated with a table.</p>
   */
  public getPartitionIndexes(
    args: GetPartitionIndexesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPartitionIndexesCommandOutput>;
  public getPartitionIndexes(
    args: GetPartitionIndexesCommandInput,
    cb: (err: any, data?: GetPartitionIndexesCommandOutput) => void
  ): void;
  public getPartitionIndexes(
    args: GetPartitionIndexesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPartitionIndexesCommandOutput) => void
  ): void;
  public getPartitionIndexes(
    args: GetPartitionIndexesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPartitionIndexesCommandOutput) => void),
    cb?: (err: any, data?: GetPartitionIndexesCommandOutput) => void
  ): Promise<GetPartitionIndexesCommandOutput> | void {
    const command = new GetPartitionIndexesCommand(args);
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
   * <p>Retrieves information about the partitions in a table.</p>
   */
  public getPartitions(
    args: GetPartitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPartitionsCommandOutput>;
  public getPartitions(
    args: GetPartitionsCommandInput,
    cb: (err: any, data?: GetPartitionsCommandOutput) => void
  ): void;
  public getPartitions(
    args: GetPartitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPartitionsCommandOutput) => void
  ): void;
  public getPartitions(
    args: GetPartitionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPartitionsCommandOutput) => void),
    cb?: (err: any, data?: GetPartitionsCommandOutput) => void
  ): Promise<GetPartitionsCommandOutput> | void {
    const command = new GetPartitionsCommand(args);
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
   * <p>Gets code to perform a specified mapping.</p>
   */
  public getPlan(args: GetPlanCommandInput, options?: __HttpHandlerOptions): Promise<GetPlanCommandOutput>;
  public getPlan(args: GetPlanCommandInput, cb: (err: any, data?: GetPlanCommandOutput) => void): void;
  public getPlan(
    args: GetPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPlanCommandOutput) => void
  ): void;
  public getPlan(
    args: GetPlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPlanCommandOutput) => void),
    cb?: (err: any, data?: GetPlanCommandOutput) => void
  ): Promise<GetPlanCommandOutput> | void {
    const command = new GetPlanCommand(args);
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
   * <p>Describes the specified registry in detail.</p>
   */
  public getRegistry(args: GetRegistryCommandInput, options?: __HttpHandlerOptions): Promise<GetRegistryCommandOutput>;
  public getRegistry(args: GetRegistryCommandInput, cb: (err: any, data?: GetRegistryCommandOutput) => void): void;
  public getRegistry(
    args: GetRegistryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRegistryCommandOutput) => void
  ): void;
  public getRegistry(
    args: GetRegistryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRegistryCommandOutput) => void),
    cb?: (err: any, data?: GetRegistryCommandOutput) => void
  ): Promise<GetRegistryCommandOutput> | void {
    const command = new GetRegistryCommand(args);
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
   * <p>Retrieves the resource policies set on individual resources by Resource Access Manager
   *       during cross-account permission grants. Also retrieves the Data Catalog resource
   *       policy.</p>
   *          <p>If you enabled metadata encryption in Data Catalog settings, and you do not have
   *       permission on the KMS key, the operation can't return the Data Catalog resource
   *       policy.</p>
   */
  public getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePoliciesCommandOutput>;
  public getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    cb: (err: any, data?: GetResourcePoliciesCommandOutput) => void
  ): void;
  public getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePoliciesCommandOutput) => void
  ): void;
  public getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourcePoliciesCommandOutput) => void),
    cb?: (err: any, data?: GetResourcePoliciesCommandOutput) => void
  ): Promise<GetResourcePoliciesCommandOutput> | void {
    const command = new GetResourcePoliciesCommand(args);
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
   * <p>Retrieves a specified resource policy.</p>
   */
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): Promise<GetResourcePolicyCommandOutput> | void {
    const command = new GetResourcePolicyCommand(args);
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
   * <p>Describes the specified schema in detail.</p>
   */
  public getSchema(args: GetSchemaCommandInput, options?: __HttpHandlerOptions): Promise<GetSchemaCommandOutput>;
  public getSchema(args: GetSchemaCommandInput, cb: (err: any, data?: GetSchemaCommandOutput) => void): void;
  public getSchema(
    args: GetSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSchemaCommandOutput) => void
  ): void;
  public getSchema(
    args: GetSchemaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSchemaCommandOutput) => void),
    cb?: (err: any, data?: GetSchemaCommandOutput) => void
  ): Promise<GetSchemaCommandOutput> | void {
    const command = new GetSchemaCommand(args);
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
   * <p>Retrieves a schema by the <code>SchemaDefinition</code>. The schema definition is sent to the Schema Registry, canonicalized, and hashed. If the hash is matched within the scope of the <code>SchemaName</code> or ARN (or the default registry, if none is supplied), that schema’s metadata is returned. Otherwise, a 404 or NotFound error is returned. Schema versions in <code>Deleted</code> statuses will not be included in the results.</p>
   */
  public getSchemaByDefinition(
    args: GetSchemaByDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSchemaByDefinitionCommandOutput>;
  public getSchemaByDefinition(
    args: GetSchemaByDefinitionCommandInput,
    cb: (err: any, data?: GetSchemaByDefinitionCommandOutput) => void
  ): void;
  public getSchemaByDefinition(
    args: GetSchemaByDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSchemaByDefinitionCommandOutput) => void
  ): void;
  public getSchemaByDefinition(
    args: GetSchemaByDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSchemaByDefinitionCommandOutput) => void),
    cb?: (err: any, data?: GetSchemaByDefinitionCommandOutput) => void
  ): Promise<GetSchemaByDefinitionCommandOutput> | void {
    const command = new GetSchemaByDefinitionCommand(args);
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
   * <p>Get the specified schema by its unique ID assigned when a version of the schema is created or registered. Schema versions in Deleted status will not be included in the results.</p>
   */
  public getSchemaVersion(
    args: GetSchemaVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSchemaVersionCommandOutput>;
  public getSchemaVersion(
    args: GetSchemaVersionCommandInput,
    cb: (err: any, data?: GetSchemaVersionCommandOutput) => void
  ): void;
  public getSchemaVersion(
    args: GetSchemaVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSchemaVersionCommandOutput) => void
  ): void;
  public getSchemaVersion(
    args: GetSchemaVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSchemaVersionCommandOutput) => void),
    cb?: (err: any, data?: GetSchemaVersionCommandOutput) => void
  ): Promise<GetSchemaVersionCommandOutput> | void {
    const command = new GetSchemaVersionCommand(args);
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
   * <p>Fetches the schema version difference in the specified difference type between two stored schema versions in the Schema Registry.</p>
   *          <p>This API allows you to compare two schema versions between two schema definitions under the same schema.</p>
   */
  public getSchemaVersionsDiff(
    args: GetSchemaVersionsDiffCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSchemaVersionsDiffCommandOutput>;
  public getSchemaVersionsDiff(
    args: GetSchemaVersionsDiffCommandInput,
    cb: (err: any, data?: GetSchemaVersionsDiffCommandOutput) => void
  ): void;
  public getSchemaVersionsDiff(
    args: GetSchemaVersionsDiffCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSchemaVersionsDiffCommandOutput) => void
  ): void;
  public getSchemaVersionsDiff(
    args: GetSchemaVersionsDiffCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSchemaVersionsDiffCommandOutput) => void),
    cb?: (err: any, data?: GetSchemaVersionsDiffCommandOutput) => void
  ): Promise<GetSchemaVersionsDiffCommandOutput> | void {
    const command = new GetSchemaVersionsDiffCommand(args);
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
   * <p>Retrieves a specified security configuration.</p>
   */
  public getSecurityConfiguration(
    args: GetSecurityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSecurityConfigurationCommandOutput>;
  public getSecurityConfiguration(
    args: GetSecurityConfigurationCommandInput,
    cb: (err: any, data?: GetSecurityConfigurationCommandOutput) => void
  ): void;
  public getSecurityConfiguration(
    args: GetSecurityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSecurityConfigurationCommandOutput) => void
  ): void;
  public getSecurityConfiguration(
    args: GetSecurityConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSecurityConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetSecurityConfigurationCommandOutput) => void
  ): Promise<GetSecurityConfigurationCommandOutput> | void {
    const command = new GetSecurityConfigurationCommand(args);
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
   * <p>Retrieves a list of all security configurations.</p>
   */
  public getSecurityConfigurations(
    args: GetSecurityConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSecurityConfigurationsCommandOutput>;
  public getSecurityConfigurations(
    args: GetSecurityConfigurationsCommandInput,
    cb: (err: any, data?: GetSecurityConfigurationsCommandOutput) => void
  ): void;
  public getSecurityConfigurations(
    args: GetSecurityConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSecurityConfigurationsCommandOutput) => void
  ): void;
  public getSecurityConfigurations(
    args: GetSecurityConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSecurityConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: GetSecurityConfigurationsCommandOutput) => void
  ): Promise<GetSecurityConfigurationsCommandOutput> | void {
    const command = new GetSecurityConfigurationsCommand(args);
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
   * <p>Retrieves the session.</p>
   */
  public getSession(args: GetSessionCommandInput, options?: __HttpHandlerOptions): Promise<GetSessionCommandOutput>;
  public getSession(args: GetSessionCommandInput, cb: (err: any, data?: GetSessionCommandOutput) => void): void;
  public getSession(
    args: GetSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSessionCommandOutput) => void
  ): void;
  public getSession(
    args: GetSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSessionCommandOutput) => void),
    cb?: (err: any, data?: GetSessionCommandOutput) => void
  ): Promise<GetSessionCommandOutput> | void {
    const command = new GetSessionCommand(args);
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
   * <p>Retrieves the statement.</p>
   */
  public getStatement(
    args: GetStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStatementCommandOutput>;
  public getStatement(args: GetStatementCommandInput, cb: (err: any, data?: GetStatementCommandOutput) => void): void;
  public getStatement(
    args: GetStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStatementCommandOutput) => void
  ): void;
  public getStatement(
    args: GetStatementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetStatementCommandOutput) => void),
    cb?: (err: any, data?: GetStatementCommandOutput) => void
  ): Promise<GetStatementCommandOutput> | void {
    const command = new GetStatementCommand(args);
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
   * <p>Retrieves the <code>Table</code> definition in a Data Catalog for
   *       a specified table.</p>
   */
  public getTable(args: GetTableCommandInput, options?: __HttpHandlerOptions): Promise<GetTableCommandOutput>;
  public getTable(args: GetTableCommandInput, cb: (err: any, data?: GetTableCommandOutput) => void): void;
  public getTable(
    args: GetTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableCommandOutput) => void
  ): void;
  public getTable(
    args: GetTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTableCommandOutput) => void),
    cb?: (err: any, data?: GetTableCommandOutput) => void
  ): Promise<GetTableCommandOutput> | void {
    const command = new GetTableCommand(args);
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
   * <p>Retrieves the definitions of some or all of the tables in a given
   *       <code>Database</code>.</p>
   */
  public getTables(args: GetTablesCommandInput, options?: __HttpHandlerOptions): Promise<GetTablesCommandOutput>;
  public getTables(args: GetTablesCommandInput, cb: (err: any, data?: GetTablesCommandOutput) => void): void;
  public getTables(
    args: GetTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTablesCommandOutput) => void
  ): void;
  public getTables(
    args: GetTablesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTablesCommandOutput) => void),
    cb?: (err: any, data?: GetTablesCommandOutput) => void
  ): Promise<GetTablesCommandOutput> | void {
    const command = new GetTablesCommand(args);
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
   * <p>Retrieves a specified version of a table.</p>
   */
  public getTableVersion(
    args: GetTableVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTableVersionCommandOutput>;
  public getTableVersion(
    args: GetTableVersionCommandInput,
    cb: (err: any, data?: GetTableVersionCommandOutput) => void
  ): void;
  public getTableVersion(
    args: GetTableVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableVersionCommandOutput) => void
  ): void;
  public getTableVersion(
    args: GetTableVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTableVersionCommandOutput) => void),
    cb?: (err: any, data?: GetTableVersionCommandOutput) => void
  ): Promise<GetTableVersionCommandOutput> | void {
    const command = new GetTableVersionCommand(args);
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
   * <p>Retrieves a list of strings that identify available versions of
   *       a specified table.</p>
   */
  public getTableVersions(
    args: GetTableVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTableVersionsCommandOutput>;
  public getTableVersions(
    args: GetTableVersionsCommandInput,
    cb: (err: any, data?: GetTableVersionsCommandOutput) => void
  ): void;
  public getTableVersions(
    args: GetTableVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableVersionsCommandOutput) => void
  ): void;
  public getTableVersions(
    args: GetTableVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTableVersionsCommandOutput) => void),
    cb?: (err: any, data?: GetTableVersionsCommandOutput) => void
  ): Promise<GetTableVersionsCommandOutput> | void {
    const command = new GetTableVersionsCommand(args);
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
   * <p>Retrieves a list of tags associated with a resource.</p>
   */
  public getTags(args: GetTagsCommandInput, options?: __HttpHandlerOptions): Promise<GetTagsCommandOutput>;
  public getTags(args: GetTagsCommandInput, cb: (err: any, data?: GetTagsCommandOutput) => void): void;
  public getTags(
    args: GetTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTagsCommandOutput) => void
  ): void;
  public getTags(
    args: GetTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTagsCommandOutput) => void),
    cb?: (err: any, data?: GetTagsCommandOutput) => void
  ): Promise<GetTagsCommandOutput> | void {
    const command = new GetTagsCommand(args);
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
   * <p>Retrieves the definition of a trigger.</p>
   */
  public getTrigger(args: GetTriggerCommandInput, options?: __HttpHandlerOptions): Promise<GetTriggerCommandOutput>;
  public getTrigger(args: GetTriggerCommandInput, cb: (err: any, data?: GetTriggerCommandOutput) => void): void;
  public getTrigger(
    args: GetTriggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTriggerCommandOutput) => void
  ): void;
  public getTrigger(
    args: GetTriggerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTriggerCommandOutput) => void),
    cb?: (err: any, data?: GetTriggerCommandOutput) => void
  ): Promise<GetTriggerCommandOutput> | void {
    const command = new GetTriggerCommand(args);
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
   * <p>Gets all the triggers associated with a job.</p>
   */
  public getTriggers(args: GetTriggersCommandInput, options?: __HttpHandlerOptions): Promise<GetTriggersCommandOutput>;
  public getTriggers(args: GetTriggersCommandInput, cb: (err: any, data?: GetTriggersCommandOutput) => void): void;
  public getTriggers(
    args: GetTriggersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTriggersCommandOutput) => void
  ): void;
  public getTriggers(
    args: GetTriggersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTriggersCommandOutput) => void),
    cb?: (err: any, data?: GetTriggersCommandOutput) => void
  ): Promise<GetTriggersCommandOutput> | void {
    const command = new GetTriggersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public getUnfilteredPartitionMetadata(
    args: GetUnfilteredPartitionMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUnfilteredPartitionMetadataCommandOutput>;
  public getUnfilteredPartitionMetadata(
    args: GetUnfilteredPartitionMetadataCommandInput,
    cb: (err: any, data?: GetUnfilteredPartitionMetadataCommandOutput) => void
  ): void;
  public getUnfilteredPartitionMetadata(
    args: GetUnfilteredPartitionMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUnfilteredPartitionMetadataCommandOutput) => void
  ): void;
  public getUnfilteredPartitionMetadata(
    args: GetUnfilteredPartitionMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUnfilteredPartitionMetadataCommandOutput) => void),
    cb?: (err: any, data?: GetUnfilteredPartitionMetadataCommandOutput) => void
  ): Promise<GetUnfilteredPartitionMetadataCommandOutput> | void {
    const command = new GetUnfilteredPartitionMetadataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public getUnfilteredPartitionsMetadata(
    args: GetUnfilteredPartitionsMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUnfilteredPartitionsMetadataCommandOutput>;
  public getUnfilteredPartitionsMetadata(
    args: GetUnfilteredPartitionsMetadataCommandInput,
    cb: (err: any, data?: GetUnfilteredPartitionsMetadataCommandOutput) => void
  ): void;
  public getUnfilteredPartitionsMetadata(
    args: GetUnfilteredPartitionsMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUnfilteredPartitionsMetadataCommandOutput) => void
  ): void;
  public getUnfilteredPartitionsMetadata(
    args: GetUnfilteredPartitionsMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUnfilteredPartitionsMetadataCommandOutput) => void),
    cb?: (err: any, data?: GetUnfilteredPartitionsMetadataCommandOutput) => void
  ): Promise<GetUnfilteredPartitionsMetadataCommandOutput> | void {
    const command = new GetUnfilteredPartitionsMetadataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public getUnfilteredTableMetadata(
    args: GetUnfilteredTableMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUnfilteredTableMetadataCommandOutput>;
  public getUnfilteredTableMetadata(
    args: GetUnfilteredTableMetadataCommandInput,
    cb: (err: any, data?: GetUnfilteredTableMetadataCommandOutput) => void
  ): void;
  public getUnfilteredTableMetadata(
    args: GetUnfilteredTableMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUnfilteredTableMetadataCommandOutput) => void
  ): void;
  public getUnfilteredTableMetadata(
    args: GetUnfilteredTableMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUnfilteredTableMetadataCommandOutput) => void),
    cb?: (err: any, data?: GetUnfilteredTableMetadataCommandOutput) => void
  ): Promise<GetUnfilteredTableMetadataCommandOutput> | void {
    const command = new GetUnfilteredTableMetadataCommand(args);
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
   * <p>Retrieves a specified function definition from the Data Catalog.</p>
   */
  public getUserDefinedFunction(
    args: GetUserDefinedFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserDefinedFunctionCommandOutput>;
  public getUserDefinedFunction(
    args: GetUserDefinedFunctionCommandInput,
    cb: (err: any, data?: GetUserDefinedFunctionCommandOutput) => void
  ): void;
  public getUserDefinedFunction(
    args: GetUserDefinedFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserDefinedFunctionCommandOutput) => void
  ): void;
  public getUserDefinedFunction(
    args: GetUserDefinedFunctionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUserDefinedFunctionCommandOutput) => void),
    cb?: (err: any, data?: GetUserDefinedFunctionCommandOutput) => void
  ): Promise<GetUserDefinedFunctionCommandOutput> | void {
    const command = new GetUserDefinedFunctionCommand(args);
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
   * <p>Retrieves multiple function definitions from the Data Catalog.</p>
   */
  public getUserDefinedFunctions(
    args: GetUserDefinedFunctionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserDefinedFunctionsCommandOutput>;
  public getUserDefinedFunctions(
    args: GetUserDefinedFunctionsCommandInput,
    cb: (err: any, data?: GetUserDefinedFunctionsCommandOutput) => void
  ): void;
  public getUserDefinedFunctions(
    args: GetUserDefinedFunctionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserDefinedFunctionsCommandOutput) => void
  ): void;
  public getUserDefinedFunctions(
    args: GetUserDefinedFunctionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUserDefinedFunctionsCommandOutput) => void),
    cb?: (err: any, data?: GetUserDefinedFunctionsCommandOutput) => void
  ): Promise<GetUserDefinedFunctionsCommandOutput> | void {
    const command = new GetUserDefinedFunctionsCommand(args);
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
   * <p>Retrieves resource metadata for a workflow.</p>
   */
  public getWorkflow(args: GetWorkflowCommandInput, options?: __HttpHandlerOptions): Promise<GetWorkflowCommandOutput>;
  public getWorkflow(args: GetWorkflowCommandInput, cb: (err: any, data?: GetWorkflowCommandOutput) => void): void;
  public getWorkflow(
    args: GetWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowCommandOutput) => void
  ): void;
  public getWorkflow(
    args: GetWorkflowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWorkflowCommandOutput) => void),
    cb?: (err: any, data?: GetWorkflowCommandOutput) => void
  ): Promise<GetWorkflowCommandOutput> | void {
    const command = new GetWorkflowCommand(args);
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
   * <p>Retrieves the metadata for a given workflow run. </p>
   */
  public getWorkflowRun(
    args: GetWorkflowRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkflowRunCommandOutput>;
  public getWorkflowRun(
    args: GetWorkflowRunCommandInput,
    cb: (err: any, data?: GetWorkflowRunCommandOutput) => void
  ): void;
  public getWorkflowRun(
    args: GetWorkflowRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowRunCommandOutput) => void
  ): void;
  public getWorkflowRun(
    args: GetWorkflowRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWorkflowRunCommandOutput) => void),
    cb?: (err: any, data?: GetWorkflowRunCommandOutput) => void
  ): Promise<GetWorkflowRunCommandOutput> | void {
    const command = new GetWorkflowRunCommand(args);
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
   * <p>Retrieves the workflow run properties which were set during the run.</p>
   */
  public getWorkflowRunProperties(
    args: GetWorkflowRunPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkflowRunPropertiesCommandOutput>;
  public getWorkflowRunProperties(
    args: GetWorkflowRunPropertiesCommandInput,
    cb: (err: any, data?: GetWorkflowRunPropertiesCommandOutput) => void
  ): void;
  public getWorkflowRunProperties(
    args: GetWorkflowRunPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowRunPropertiesCommandOutput) => void
  ): void;
  public getWorkflowRunProperties(
    args: GetWorkflowRunPropertiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWorkflowRunPropertiesCommandOutput) => void),
    cb?: (err: any, data?: GetWorkflowRunPropertiesCommandOutput) => void
  ): Promise<GetWorkflowRunPropertiesCommandOutput> | void {
    const command = new GetWorkflowRunPropertiesCommand(args);
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
   * <p>Retrieves metadata for all runs of a given workflow.</p>
   */
  public getWorkflowRuns(
    args: GetWorkflowRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkflowRunsCommandOutput>;
  public getWorkflowRuns(
    args: GetWorkflowRunsCommandInput,
    cb: (err: any, data?: GetWorkflowRunsCommandOutput) => void
  ): void;
  public getWorkflowRuns(
    args: GetWorkflowRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowRunsCommandOutput) => void
  ): void;
  public getWorkflowRuns(
    args: GetWorkflowRunsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWorkflowRunsCommandOutput) => void),
    cb?: (err: any, data?: GetWorkflowRunsCommandOutput) => void
  ): Promise<GetWorkflowRunsCommandOutput> | void {
    const command = new GetWorkflowRunsCommand(args);
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
   * <p>Imports an existing Amazon Athena Data Catalog to Glue.</p>
   */
  public importCatalogToGlue(
    args: ImportCatalogToGlueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportCatalogToGlueCommandOutput>;
  public importCatalogToGlue(
    args: ImportCatalogToGlueCommandInput,
    cb: (err: any, data?: ImportCatalogToGlueCommandOutput) => void
  ): void;
  public importCatalogToGlue(
    args: ImportCatalogToGlueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportCatalogToGlueCommandOutput) => void
  ): void;
  public importCatalogToGlue(
    args: ImportCatalogToGlueCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportCatalogToGlueCommandOutput) => void),
    cb?: (err: any, data?: ImportCatalogToGlueCommandOutput) => void
  ): Promise<ImportCatalogToGlueCommandOutput> | void {
    const command = new ImportCatalogToGlueCommand(args);
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
   * <p>Lists all the blueprint names in an account.</p>
   */
  public listBlueprints(
    args: ListBlueprintsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBlueprintsCommandOutput>;
  public listBlueprints(
    args: ListBlueprintsCommandInput,
    cb: (err: any, data?: ListBlueprintsCommandOutput) => void
  ): void;
  public listBlueprints(
    args: ListBlueprintsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBlueprintsCommandOutput) => void
  ): void;
  public listBlueprints(
    args: ListBlueprintsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBlueprintsCommandOutput) => void),
    cb?: (err: any, data?: ListBlueprintsCommandOutput) => void
  ): Promise<ListBlueprintsCommandOutput> | void {
    const command = new ListBlueprintsCommand(args);
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
   * <p>Retrieves the names of all crawler resources in this Amazon Web Services account, or the
   *       resources with the specified tag. This operation allows you to see which
   *       resources are available in your account, and their names.</p>
   *          <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on
   *       the response so that tagged resources can be retrieved as a group. If you choose to use tags
   *       filtering, only resources with the tag are retrieved.</p>
   */
  public listCrawlers(
    args: ListCrawlersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCrawlersCommandOutput>;
  public listCrawlers(args: ListCrawlersCommandInput, cb: (err: any, data?: ListCrawlersCommandOutput) => void): void;
  public listCrawlers(
    args: ListCrawlersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCrawlersCommandOutput) => void
  ): void;
  public listCrawlers(
    args: ListCrawlersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCrawlersCommandOutput) => void),
    cb?: (err: any, data?: ListCrawlersCommandOutput) => void
  ): Promise<ListCrawlersCommandOutput> | void {
    const command = new ListCrawlersCommand(args);
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
   * <p>Returns all the crawls of a specified crawler. Returns only the crawls that have occurred since the launch date of the crawler history feature, and only retains up to 12 months of crawls. Older crawls will not be returned.</p>
   *          <p>You may use this API to:</p>
   *          <ul>
   *             <li>
   *                <p>Retrive all the crawls of a specified crawler.</p>
   *             </li>
   *             <li>
   *                <p>Retrieve all the crawls of a specified crawler within a limited count.</p>
   *             </li>
   *             <li>
   *                <p>Retrieve all the crawls of a specified crawler in a specific time range.</p>
   *             </li>
   *             <li>
   *                <p>Retrieve all the crawls of a specified crawler with a particular state, crawl ID, or DPU hour value.</p>
   *             </li>
   *          </ul>
   */
  public listCrawls(args: ListCrawlsCommandInput, options?: __HttpHandlerOptions): Promise<ListCrawlsCommandOutput>;
  public listCrawls(args: ListCrawlsCommandInput, cb: (err: any, data?: ListCrawlsCommandOutput) => void): void;
  public listCrawls(
    args: ListCrawlsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCrawlsCommandOutput) => void
  ): void;
  public listCrawls(
    args: ListCrawlsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCrawlsCommandOutput) => void),
    cb?: (err: any, data?: ListCrawlsCommandOutput) => void
  ): Promise<ListCrawlsCommandOutput> | void {
    const command = new ListCrawlsCommand(args);
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
   * <p>Lists all the custom patterns that have been created.</p>
   */
  public listCustomEntityTypes(
    args: ListCustomEntityTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomEntityTypesCommandOutput>;
  public listCustomEntityTypes(
    args: ListCustomEntityTypesCommandInput,
    cb: (err: any, data?: ListCustomEntityTypesCommandOutput) => void
  ): void;
  public listCustomEntityTypes(
    args: ListCustomEntityTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomEntityTypesCommandOutput) => void
  ): void;
  public listCustomEntityTypes(
    args: ListCustomEntityTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCustomEntityTypesCommandOutput) => void),
    cb?: (err: any, data?: ListCustomEntityTypesCommandOutput) => void
  ): Promise<ListCustomEntityTypesCommandOutput> | void {
    const command = new ListCustomEntityTypesCommand(args);
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
   * <p>Returns all data quality execution results for your account.</p>
   */
  public listDataQualityResults(
    args: ListDataQualityResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataQualityResultsCommandOutput>;
  public listDataQualityResults(
    args: ListDataQualityResultsCommandInput,
    cb: (err: any, data?: ListDataQualityResultsCommandOutput) => void
  ): void;
  public listDataQualityResults(
    args: ListDataQualityResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataQualityResultsCommandOutput) => void
  ): void;
  public listDataQualityResults(
    args: ListDataQualityResultsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDataQualityResultsCommandOutput) => void),
    cb?: (err: any, data?: ListDataQualityResultsCommandOutput) => void
  ): Promise<ListDataQualityResultsCommandOutput> | void {
    const command = new ListDataQualityResultsCommand(args);
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
   * <p>Lists the recommendation runs meeting the filter criteria.</p>
   */
  public listDataQualityRuleRecommendationRuns(
    args: ListDataQualityRuleRecommendationRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataQualityRuleRecommendationRunsCommandOutput>;
  public listDataQualityRuleRecommendationRuns(
    args: ListDataQualityRuleRecommendationRunsCommandInput,
    cb: (err: any, data?: ListDataQualityRuleRecommendationRunsCommandOutput) => void
  ): void;
  public listDataQualityRuleRecommendationRuns(
    args: ListDataQualityRuleRecommendationRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataQualityRuleRecommendationRunsCommandOutput) => void
  ): void;
  public listDataQualityRuleRecommendationRuns(
    args: ListDataQualityRuleRecommendationRunsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListDataQualityRuleRecommendationRunsCommandOutput) => void),
    cb?: (err: any, data?: ListDataQualityRuleRecommendationRunsCommandOutput) => void
  ): Promise<ListDataQualityRuleRecommendationRunsCommandOutput> | void {
    const command = new ListDataQualityRuleRecommendationRunsCommand(args);
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
   * <p>Lists all the runs meeting the filter criteria, where a ruleset is evaluated against a data source.</p>
   */
  public listDataQualityRulesetEvaluationRuns(
    args: ListDataQualityRulesetEvaluationRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataQualityRulesetEvaluationRunsCommandOutput>;
  public listDataQualityRulesetEvaluationRuns(
    args: ListDataQualityRulesetEvaluationRunsCommandInput,
    cb: (err: any, data?: ListDataQualityRulesetEvaluationRunsCommandOutput) => void
  ): void;
  public listDataQualityRulesetEvaluationRuns(
    args: ListDataQualityRulesetEvaluationRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataQualityRulesetEvaluationRunsCommandOutput) => void
  ): void;
  public listDataQualityRulesetEvaluationRuns(
    args: ListDataQualityRulesetEvaluationRunsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDataQualityRulesetEvaluationRunsCommandOutput) => void),
    cb?: (err: any, data?: ListDataQualityRulesetEvaluationRunsCommandOutput) => void
  ): Promise<ListDataQualityRulesetEvaluationRunsCommandOutput> | void {
    const command = new ListDataQualityRulesetEvaluationRunsCommand(args);
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
   * <p>Returns a paginated list of rulesets for the specified list of Glue tables.</p>
   */
  public listDataQualityRulesets(
    args: ListDataQualityRulesetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataQualityRulesetsCommandOutput>;
  public listDataQualityRulesets(
    args: ListDataQualityRulesetsCommandInput,
    cb: (err: any, data?: ListDataQualityRulesetsCommandOutput) => void
  ): void;
  public listDataQualityRulesets(
    args: ListDataQualityRulesetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataQualityRulesetsCommandOutput) => void
  ): void;
  public listDataQualityRulesets(
    args: ListDataQualityRulesetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDataQualityRulesetsCommandOutput) => void),
    cb?: (err: any, data?: ListDataQualityRulesetsCommandOutput) => void
  ): Promise<ListDataQualityRulesetsCommandOutput> | void {
    const command = new ListDataQualityRulesetsCommand(args);
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
   * <p>Retrieves the names of all <code>DevEndpoint</code> resources in this Amazon Web Services account, or the
   *       resources with the specified tag. This operation allows you to see which resources are
   *       available in your account, and their names.</p>
   *          <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on
   *       the response so that tagged resources can be retrieved as a group. If you choose to use tags
   *       filtering, only resources with the tag are retrieved.</p>
   */
  public listDevEndpoints(
    args: ListDevEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDevEndpointsCommandOutput>;
  public listDevEndpoints(
    args: ListDevEndpointsCommandInput,
    cb: (err: any, data?: ListDevEndpointsCommandOutput) => void
  ): void;
  public listDevEndpoints(
    args: ListDevEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevEndpointsCommandOutput) => void
  ): void;
  public listDevEndpoints(
    args: ListDevEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDevEndpointsCommandOutput) => void),
    cb?: (err: any, data?: ListDevEndpointsCommandOutput) => void
  ): Promise<ListDevEndpointsCommandOutput> | void {
    const command = new ListDevEndpointsCommand(args);
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
   * <p>Retrieves the names of all job resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p>
   *          <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on
   *       the response so that tagged resources can be retrieved as a group. If you choose to use tags
   *       filtering, only resources with the tag are retrieved.</p>
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
   * <p> Retrieves a sortable, filterable list of existing Glue machine learning transforms in this Amazon Web Services account,
   *        or the resources with the specified tag. This operation takes the optional <code>Tags</code> field, which you can use as
   *        a filter of the responses so that tagged resources can be retrieved as a group. If you choose to use tag
   *        filtering, only resources with the tags are retrieved.
   *      </p>
   */
  public listMLTransforms(
    args: ListMLTransformsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMLTransformsCommandOutput>;
  public listMLTransforms(
    args: ListMLTransformsCommandInput,
    cb: (err: any, data?: ListMLTransformsCommandOutput) => void
  ): void;
  public listMLTransforms(
    args: ListMLTransformsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMLTransformsCommandOutput) => void
  ): void;
  public listMLTransforms(
    args: ListMLTransformsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMLTransformsCommandOutput) => void),
    cb?: (err: any, data?: ListMLTransformsCommandOutput) => void
  ): Promise<ListMLTransformsCommandOutput> | void {
    const command = new ListMLTransformsCommand(args);
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
   * <p>Returns a list of registries that you have created, with minimal registry information. Registries in the <code>Deleting</code> status will not be included in the results. Empty results will be returned if there are no registries available.</p>
   */
  public listRegistries(
    args: ListRegistriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRegistriesCommandOutput>;
  public listRegistries(
    args: ListRegistriesCommandInput,
    cb: (err: any, data?: ListRegistriesCommandOutput) => void
  ): void;
  public listRegistries(
    args: ListRegistriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRegistriesCommandOutput) => void
  ): void;
  public listRegistries(
    args: ListRegistriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRegistriesCommandOutput) => void),
    cb?: (err: any, data?: ListRegistriesCommandOutput) => void
  ): Promise<ListRegistriesCommandOutput> | void {
    const command = new ListRegistriesCommand(args);
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
   * <p>Returns a list of schemas with minimal details. Schemas in Deleting status will not be included in the results. Empty results will be returned if there are no schemas available.</p>
   *          <p>When the <code>RegistryId</code> is not provided, all the schemas across registries will be part of the API response.</p>
   */
  public listSchemas(args: ListSchemasCommandInput, options?: __HttpHandlerOptions): Promise<ListSchemasCommandOutput>;
  public listSchemas(args: ListSchemasCommandInput, cb: (err: any, data?: ListSchemasCommandOutput) => void): void;
  public listSchemas(
    args: ListSchemasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSchemasCommandOutput) => void
  ): void;
  public listSchemas(
    args: ListSchemasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSchemasCommandOutput) => void),
    cb?: (err: any, data?: ListSchemasCommandOutput) => void
  ): Promise<ListSchemasCommandOutput> | void {
    const command = new ListSchemasCommand(args);
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
   * <p>Returns a list of schema versions that you have created, with minimal information. Schema versions in Deleted status will not be included in the results. Empty results will be returned if there are no schema versions available.</p>
   */
  public listSchemaVersions(
    args: ListSchemaVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSchemaVersionsCommandOutput>;
  public listSchemaVersions(
    args: ListSchemaVersionsCommandInput,
    cb: (err: any, data?: ListSchemaVersionsCommandOutput) => void
  ): void;
  public listSchemaVersions(
    args: ListSchemaVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSchemaVersionsCommandOutput) => void
  ): void;
  public listSchemaVersions(
    args: ListSchemaVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSchemaVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListSchemaVersionsCommandOutput) => void
  ): Promise<ListSchemaVersionsCommandOutput> | void {
    const command = new ListSchemaVersionsCommand(args);
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
   * <p>Retrieve a list of sessions.</p>
   */
  public listSessions(
    args: ListSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSessionsCommandOutput>;
  public listSessions(args: ListSessionsCommandInput, cb: (err: any, data?: ListSessionsCommandOutput) => void): void;
  public listSessions(
    args: ListSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSessionsCommandOutput) => void
  ): void;
  public listSessions(
    args: ListSessionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSessionsCommandOutput) => void),
    cb?: (err: any, data?: ListSessionsCommandOutput) => void
  ): Promise<ListSessionsCommandOutput> | void {
    const command = new ListSessionsCommand(args);
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
   * <p>Lists statements for the session.</p>
   */
  public listStatements(
    args: ListStatementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStatementsCommandOutput>;
  public listStatements(
    args: ListStatementsCommandInput,
    cb: (err: any, data?: ListStatementsCommandOutput) => void
  ): void;
  public listStatements(
    args: ListStatementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStatementsCommandOutput) => void
  ): void;
  public listStatements(
    args: ListStatementsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStatementsCommandOutput) => void),
    cb?: (err: any, data?: ListStatementsCommandOutput) => void
  ): Promise<ListStatementsCommandOutput> | void {
    const command = new ListStatementsCommand(args);
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
   * <p>Retrieves the names of all trigger resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p>
   *          <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on
   *       the response so that tagged resources can be retrieved as a group. If you choose to use tags
   *       filtering, only resources with the tag are retrieved.</p>
   */
  public listTriggers(
    args: ListTriggersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTriggersCommandOutput>;
  public listTriggers(args: ListTriggersCommandInput, cb: (err: any, data?: ListTriggersCommandOutput) => void): void;
  public listTriggers(
    args: ListTriggersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTriggersCommandOutput) => void
  ): void;
  public listTriggers(
    args: ListTriggersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTriggersCommandOutput) => void),
    cb?: (err: any, data?: ListTriggersCommandOutput) => void
  ): Promise<ListTriggersCommandOutput> | void {
    const command = new ListTriggersCommand(args);
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
   * <p>Lists names of workflows created in the account.</p>
   */
  public listWorkflows(
    args: ListWorkflowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkflowsCommandOutput>;
  public listWorkflows(
    args: ListWorkflowsCommandInput,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;
  public listWorkflows(
    args: ListWorkflowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;
  public listWorkflows(
    args: ListWorkflowsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWorkflowsCommandOutput) => void),
    cb?: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): Promise<ListWorkflowsCommandOutput> | void {
    const command = new ListWorkflowsCommand(args);
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
   * <p>Sets the security configuration for a specified catalog. After the configuration has been
   *       set, the specified encryption is applied to every catalog write thereafter.</p>
   */
  public putDataCatalogEncryptionSettings(
    args: PutDataCatalogEncryptionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDataCatalogEncryptionSettingsCommandOutput>;
  public putDataCatalogEncryptionSettings(
    args: PutDataCatalogEncryptionSettingsCommandInput,
    cb: (err: any, data?: PutDataCatalogEncryptionSettingsCommandOutput) => void
  ): void;
  public putDataCatalogEncryptionSettings(
    args: PutDataCatalogEncryptionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDataCatalogEncryptionSettingsCommandOutput) => void
  ): void;
  public putDataCatalogEncryptionSettings(
    args: PutDataCatalogEncryptionSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutDataCatalogEncryptionSettingsCommandOutput) => void),
    cb?: (err: any, data?: PutDataCatalogEncryptionSettingsCommandOutput) => void
  ): Promise<PutDataCatalogEncryptionSettingsCommandOutput> | void {
    const command = new PutDataCatalogEncryptionSettingsCommand(args);
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
   * <p>Sets the Data Catalog resource policy for access control.</p>
   */
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): Promise<PutResourcePolicyCommandOutput> | void {
    const command = new PutResourcePolicyCommand(args);
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
   * <p>Puts the metadata key value pair for a specified schema version ID. A maximum of 10 key value pairs will be allowed per schema version. They can be added over one or more calls.</p>
   */
  public putSchemaVersionMetadata(
    args: PutSchemaVersionMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSchemaVersionMetadataCommandOutput>;
  public putSchemaVersionMetadata(
    args: PutSchemaVersionMetadataCommandInput,
    cb: (err: any, data?: PutSchemaVersionMetadataCommandOutput) => void
  ): void;
  public putSchemaVersionMetadata(
    args: PutSchemaVersionMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSchemaVersionMetadataCommandOutput) => void
  ): void;
  public putSchemaVersionMetadata(
    args: PutSchemaVersionMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutSchemaVersionMetadataCommandOutput) => void),
    cb?: (err: any, data?: PutSchemaVersionMetadataCommandOutput) => void
  ): Promise<PutSchemaVersionMetadataCommandOutput> | void {
    const command = new PutSchemaVersionMetadataCommand(args);
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
   * <p>Puts the specified workflow run properties for the given workflow run. If a property already exists for the specified run, then it overrides the value otherwise adds the property to existing properties.</p>
   */
  public putWorkflowRunProperties(
    args: PutWorkflowRunPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutWorkflowRunPropertiesCommandOutput>;
  public putWorkflowRunProperties(
    args: PutWorkflowRunPropertiesCommandInput,
    cb: (err: any, data?: PutWorkflowRunPropertiesCommandOutput) => void
  ): void;
  public putWorkflowRunProperties(
    args: PutWorkflowRunPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutWorkflowRunPropertiesCommandOutput) => void
  ): void;
  public putWorkflowRunProperties(
    args: PutWorkflowRunPropertiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutWorkflowRunPropertiesCommandOutput) => void),
    cb?: (err: any, data?: PutWorkflowRunPropertiesCommandOutput) => void
  ): Promise<PutWorkflowRunPropertiesCommandOutput> | void {
    const command = new PutWorkflowRunPropertiesCommand(args);
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
   * <p>Queries for the schema version metadata information. </p>
   */
  public querySchemaVersionMetadata(
    args: QuerySchemaVersionMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QuerySchemaVersionMetadataCommandOutput>;
  public querySchemaVersionMetadata(
    args: QuerySchemaVersionMetadataCommandInput,
    cb: (err: any, data?: QuerySchemaVersionMetadataCommandOutput) => void
  ): void;
  public querySchemaVersionMetadata(
    args: QuerySchemaVersionMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QuerySchemaVersionMetadataCommandOutput) => void
  ): void;
  public querySchemaVersionMetadata(
    args: QuerySchemaVersionMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: QuerySchemaVersionMetadataCommandOutput) => void),
    cb?: (err: any, data?: QuerySchemaVersionMetadataCommandOutput) => void
  ): Promise<QuerySchemaVersionMetadataCommandOutput> | void {
    const command = new QuerySchemaVersionMetadataCommand(args);
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
   * <p>Adds a new version to the existing schema. Returns an error if new version of schema does not meet the compatibility requirements of the schema set. This API will not create a new schema set and will return a 404 error if the schema set is not already present in the Schema Registry.</p>
   *          <p>If this is the first schema definition to be registered in the Schema Registry, this API will store the schema version and return immediately. Otherwise, this call has the potential to run longer than other operations due to compatibility modes. You can call the <code>GetSchemaVersion</code> API with the <code>SchemaVersionId</code> to check compatibility modes.</p>
   *          <p>If the same schema definition is already stored in Schema Registry as a version, the schema ID of the existing schema is returned to the caller.</p>
   */
  public registerSchemaVersion(
    args: RegisterSchemaVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterSchemaVersionCommandOutput>;
  public registerSchemaVersion(
    args: RegisterSchemaVersionCommandInput,
    cb: (err: any, data?: RegisterSchemaVersionCommandOutput) => void
  ): void;
  public registerSchemaVersion(
    args: RegisterSchemaVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterSchemaVersionCommandOutput) => void
  ): void;
  public registerSchemaVersion(
    args: RegisterSchemaVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterSchemaVersionCommandOutput) => void),
    cb?: (err: any, data?: RegisterSchemaVersionCommandOutput) => void
  ): Promise<RegisterSchemaVersionCommandOutput> | void {
    const command = new RegisterSchemaVersionCommand(args);
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
   * <p>Removes a key value pair from the schema version metadata for the specified schema version ID.</p>
   */
  public removeSchemaVersionMetadata(
    args: RemoveSchemaVersionMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveSchemaVersionMetadataCommandOutput>;
  public removeSchemaVersionMetadata(
    args: RemoveSchemaVersionMetadataCommandInput,
    cb: (err: any, data?: RemoveSchemaVersionMetadataCommandOutput) => void
  ): void;
  public removeSchemaVersionMetadata(
    args: RemoveSchemaVersionMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveSchemaVersionMetadataCommandOutput) => void
  ): void;
  public removeSchemaVersionMetadata(
    args: RemoveSchemaVersionMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveSchemaVersionMetadataCommandOutput) => void),
    cb?: (err: any, data?: RemoveSchemaVersionMetadataCommandOutput) => void
  ): Promise<RemoveSchemaVersionMetadataCommandOutput> | void {
    const command = new RemoveSchemaVersionMetadataCommand(args);
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
   * <p>Resets a bookmark entry.</p>
   *          <p>For more information about enabling and using job bookmarks, see:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html">Tracking processed data using job bookmarks</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Job parameters used by Glue</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-Job">Job structure</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public resetJobBookmark(
    args: ResetJobBookmarkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetJobBookmarkCommandOutput>;
  public resetJobBookmark(
    args: ResetJobBookmarkCommandInput,
    cb: (err: any, data?: ResetJobBookmarkCommandOutput) => void
  ): void;
  public resetJobBookmark(
    args: ResetJobBookmarkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetJobBookmarkCommandOutput) => void
  ): void;
  public resetJobBookmark(
    args: ResetJobBookmarkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResetJobBookmarkCommandOutput) => void),
    cb?: (err: any, data?: ResetJobBookmarkCommandOutput) => void
  ): Promise<ResetJobBookmarkCommandOutput> | void {
    const command = new ResetJobBookmarkCommand(args);
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
   * <p>Restarts selected nodes of a previous partially completed workflow run and resumes the workflow run. The selected nodes and all nodes that are downstream from the selected nodes are run.</p>
   */
  public resumeWorkflowRun(
    args: ResumeWorkflowRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResumeWorkflowRunCommandOutput>;
  public resumeWorkflowRun(
    args: ResumeWorkflowRunCommandInput,
    cb: (err: any, data?: ResumeWorkflowRunCommandOutput) => void
  ): void;
  public resumeWorkflowRun(
    args: ResumeWorkflowRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResumeWorkflowRunCommandOutput) => void
  ): void;
  public resumeWorkflowRun(
    args: ResumeWorkflowRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResumeWorkflowRunCommandOutput) => void),
    cb?: (err: any, data?: ResumeWorkflowRunCommandOutput) => void
  ): Promise<ResumeWorkflowRunCommandOutput> | void {
    const command = new ResumeWorkflowRunCommand(args);
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
   * <p>Executes the statement.</p>
   */
  public runStatement(
    args: RunStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RunStatementCommandOutput>;
  public runStatement(args: RunStatementCommandInput, cb: (err: any, data?: RunStatementCommandOutput) => void): void;
  public runStatement(
    args: RunStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RunStatementCommandOutput) => void
  ): void;
  public runStatement(
    args: RunStatementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RunStatementCommandOutput) => void),
    cb?: (err: any, data?: RunStatementCommandOutput) => void
  ): Promise<RunStatementCommandOutput> | void {
    const command = new RunStatementCommand(args);
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
   * <p>Searches a set of tables based on properties in the table metadata as well as on the parent database. You can search against text or filter conditions. </p>
   *          <p>You can only get tables that you have access to based on the security policies defined in Lake Formation. You need at least a read-only access to the table for it to be returned. If you do not have access to all the columns in the table, these columns will not be searched against when returning the list of tables back to you. If you have access to the columns but not the data in the columns, those columns and the associated metadata for those columns will be included in the search. </p>
   */
  public searchTables(
    args: SearchTablesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchTablesCommandOutput>;
  public searchTables(args: SearchTablesCommandInput, cb: (err: any, data?: SearchTablesCommandOutput) => void): void;
  public searchTables(
    args: SearchTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchTablesCommandOutput) => void
  ): void;
  public searchTables(
    args: SearchTablesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchTablesCommandOutput) => void),
    cb?: (err: any, data?: SearchTablesCommandOutput) => void
  ): Promise<SearchTablesCommandOutput> | void {
    const command = new SearchTablesCommand(args);
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
   * <p>Starts a new run of the specified blueprint.</p>
   */
  public startBlueprintRun(
    args: StartBlueprintRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartBlueprintRunCommandOutput>;
  public startBlueprintRun(
    args: StartBlueprintRunCommandInput,
    cb: (err: any, data?: StartBlueprintRunCommandOutput) => void
  ): void;
  public startBlueprintRun(
    args: StartBlueprintRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartBlueprintRunCommandOutput) => void
  ): void;
  public startBlueprintRun(
    args: StartBlueprintRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartBlueprintRunCommandOutput) => void),
    cb?: (err: any, data?: StartBlueprintRunCommandOutput) => void
  ): Promise<StartBlueprintRunCommandOutput> | void {
    const command = new StartBlueprintRunCommand(args);
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
   * <p>Starts a crawl using the specified crawler, regardless
   *       of what is scheduled. If the crawler is already running, returns a
   *       <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-exceptions.html#aws-glue-api-exceptions-CrawlerRunningException">CrawlerRunningException</a>.</p>
   */
  public startCrawler(
    args: StartCrawlerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCrawlerCommandOutput>;
  public startCrawler(args: StartCrawlerCommandInput, cb: (err: any, data?: StartCrawlerCommandOutput) => void): void;
  public startCrawler(
    args: StartCrawlerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCrawlerCommandOutput) => void
  ): void;
  public startCrawler(
    args: StartCrawlerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartCrawlerCommandOutput) => void),
    cb?: (err: any, data?: StartCrawlerCommandOutput) => void
  ): Promise<StartCrawlerCommandOutput> | void {
    const command = new StartCrawlerCommand(args);
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
   * <p>Changes the schedule state of the specified crawler to
   *       <code>SCHEDULED</code>, unless the crawler is already running or the
   *       schedule state is already <code>SCHEDULED</code>.</p>
   */
  public startCrawlerSchedule(
    args: StartCrawlerScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCrawlerScheduleCommandOutput>;
  public startCrawlerSchedule(
    args: StartCrawlerScheduleCommandInput,
    cb: (err: any, data?: StartCrawlerScheduleCommandOutput) => void
  ): void;
  public startCrawlerSchedule(
    args: StartCrawlerScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCrawlerScheduleCommandOutput) => void
  ): void;
  public startCrawlerSchedule(
    args: StartCrawlerScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartCrawlerScheduleCommandOutput) => void),
    cb?: (err: any, data?: StartCrawlerScheduleCommandOutput) => void
  ): Promise<StartCrawlerScheduleCommandOutput> | void {
    const command = new StartCrawlerScheduleCommand(args);
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
   * <p>Starts a recommendation run that is used to generate rules when you don't know what rules to write. Glue Data Quality analyzes the data and comes up with recommendations for a potential ruleset. You can then triage the ruleset and modify the generated ruleset to your liking.</p>
   */
  public startDataQualityRuleRecommendationRun(
    args: StartDataQualityRuleRecommendationRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDataQualityRuleRecommendationRunCommandOutput>;
  public startDataQualityRuleRecommendationRun(
    args: StartDataQualityRuleRecommendationRunCommandInput,
    cb: (err: any, data?: StartDataQualityRuleRecommendationRunCommandOutput) => void
  ): void;
  public startDataQualityRuleRecommendationRun(
    args: StartDataQualityRuleRecommendationRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDataQualityRuleRecommendationRunCommandOutput) => void
  ): void;
  public startDataQualityRuleRecommendationRun(
    args: StartDataQualityRuleRecommendationRunCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartDataQualityRuleRecommendationRunCommandOutput) => void),
    cb?: (err: any, data?: StartDataQualityRuleRecommendationRunCommandOutput) => void
  ): Promise<StartDataQualityRuleRecommendationRunCommandOutput> | void {
    const command = new StartDataQualityRuleRecommendationRunCommand(args);
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
   * <p>Once you have a ruleset definition (either recommended or your own), you call this operation to evaluate the ruleset against a data source (Glue table). The evaluation computes results which you can retrieve with the <code>GetDataQualityResult</code> API.</p>
   */
  public startDataQualityRulesetEvaluationRun(
    args: StartDataQualityRulesetEvaluationRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDataQualityRulesetEvaluationRunCommandOutput>;
  public startDataQualityRulesetEvaluationRun(
    args: StartDataQualityRulesetEvaluationRunCommandInput,
    cb: (err: any, data?: StartDataQualityRulesetEvaluationRunCommandOutput) => void
  ): void;
  public startDataQualityRulesetEvaluationRun(
    args: StartDataQualityRulesetEvaluationRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDataQualityRulesetEvaluationRunCommandOutput) => void
  ): void;
  public startDataQualityRulesetEvaluationRun(
    args: StartDataQualityRulesetEvaluationRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartDataQualityRulesetEvaluationRunCommandOutput) => void),
    cb?: (err: any, data?: StartDataQualityRulesetEvaluationRunCommandOutput) => void
  ): Promise<StartDataQualityRulesetEvaluationRunCommandOutput> | void {
    const command = new StartDataQualityRulesetEvaluationRunCommand(args);
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
   * <p>Begins an asynchronous task to export all labeled data for a particular transform. This
   *       task is the only label-related API call that is not part of the typical active learning
   *       workflow. You typically use <code>StartExportLabelsTaskRun</code> when you want to work with
   *       all of your existing labels at the same time, such as when you want to remove or change labels
   *       that were previously submitted as truth. This API operation accepts the
   *         <code>TransformId</code> whose labels you want to export and an Amazon Simple Storage
   *       Service (Amazon S3) path to export the labels to. The operation returns a
   *         <code>TaskRunId</code>. You can check on the status of your task run by calling the
   *         <code>GetMLTaskRun</code> API.</p>
   */
  public startExportLabelsTaskRun(
    args: StartExportLabelsTaskRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartExportLabelsTaskRunCommandOutput>;
  public startExportLabelsTaskRun(
    args: StartExportLabelsTaskRunCommandInput,
    cb: (err: any, data?: StartExportLabelsTaskRunCommandOutput) => void
  ): void;
  public startExportLabelsTaskRun(
    args: StartExportLabelsTaskRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartExportLabelsTaskRunCommandOutput) => void
  ): void;
  public startExportLabelsTaskRun(
    args: StartExportLabelsTaskRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartExportLabelsTaskRunCommandOutput) => void),
    cb?: (err: any, data?: StartExportLabelsTaskRunCommandOutput) => void
  ): Promise<StartExportLabelsTaskRunCommandOutput> | void {
    const command = new StartExportLabelsTaskRunCommand(args);
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
   * <p>Enables you to provide additional labels (examples of truth) to be used to teach the
   *       machine learning transform and improve its quality. This API operation is generally used as
   *       part of the active learning workflow that starts with the
   *         <code>StartMLLabelingSetGenerationTaskRun</code> call and that ultimately results in
   *       improving the quality of your machine learning transform. </p>
   *          <p>After the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, Glue machine learning
   *       will have generated a series of questions for humans to answer. (Answering these questions is
   *       often called 'labeling' in the machine learning workflows). In the case of the
   *         <code>FindMatches</code> transform, these questions are of the form, “What is the correct
   *       way to group these rows together into groups composed entirely of matching records?” After the
   *       labeling process is finished, users upload their answers/labels with a call to
   *         <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes,
   *       all future runs of the machine learning transform use the new and improved labels and perform
   *       a higher-quality transformation.</p>
   *          <p>By default, <code>StartMLLabelingSetGenerationTaskRun</code> continually learns from and
   *       combines all labels that you upload unless you set <code>Replace</code> to true. If you set
   *         <code>Replace</code> to true, <code>StartImportLabelsTaskRun</code> deletes and forgets all
   *       previously uploaded labels and learns only from the exact set that you upload. Replacing
   *       labels can be helpful if you realize that you previously uploaded incorrect labels, and you
   *       believe that they are having a negative effect on your transform quality.</p>
   *          <p>You can check on the status of your task run by calling the <code>GetMLTaskRun</code>
   *       operation. </p>
   */
  public startImportLabelsTaskRun(
    args: StartImportLabelsTaskRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartImportLabelsTaskRunCommandOutput>;
  public startImportLabelsTaskRun(
    args: StartImportLabelsTaskRunCommandInput,
    cb: (err: any, data?: StartImportLabelsTaskRunCommandOutput) => void
  ): void;
  public startImportLabelsTaskRun(
    args: StartImportLabelsTaskRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartImportLabelsTaskRunCommandOutput) => void
  ): void;
  public startImportLabelsTaskRun(
    args: StartImportLabelsTaskRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartImportLabelsTaskRunCommandOutput) => void),
    cb?: (err: any, data?: StartImportLabelsTaskRunCommandOutput) => void
  ): Promise<StartImportLabelsTaskRunCommandOutput> | void {
    const command = new StartImportLabelsTaskRunCommand(args);
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
   * <p>Starts a job run using a job definition.</p>
   */
  public startJobRun(args: StartJobRunCommandInput, options?: __HttpHandlerOptions): Promise<StartJobRunCommandOutput>;
  public startJobRun(args: StartJobRunCommandInput, cb: (err: any, data?: StartJobRunCommandOutput) => void): void;
  public startJobRun(
    args: StartJobRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartJobRunCommandOutput) => void
  ): void;
  public startJobRun(
    args: StartJobRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartJobRunCommandOutput) => void),
    cb?: (err: any, data?: StartJobRunCommandOutput) => void
  ): Promise<StartJobRunCommandOutput> | void {
    const command = new StartJobRunCommand(args);
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
   * <p>Starts a task to estimate the quality of the transform. </p>
   *          <p>When you provide label sets as examples of truth, Glue machine learning uses some of
   *       those examples to learn from them. The rest of the labels are used as a test to estimate
   *       quality.</p>
   *          <p>Returns a unique identifier for the run. You can call <code>GetMLTaskRun</code> to get more
   *       information about the stats of the <code>EvaluationTaskRun</code>.</p>
   */
  public startMLEvaluationTaskRun(
    args: StartMLEvaluationTaskRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMLEvaluationTaskRunCommandOutput>;
  public startMLEvaluationTaskRun(
    args: StartMLEvaluationTaskRunCommandInput,
    cb: (err: any, data?: StartMLEvaluationTaskRunCommandOutput) => void
  ): void;
  public startMLEvaluationTaskRun(
    args: StartMLEvaluationTaskRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMLEvaluationTaskRunCommandOutput) => void
  ): void;
  public startMLEvaluationTaskRun(
    args: StartMLEvaluationTaskRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartMLEvaluationTaskRunCommandOutput) => void),
    cb?: (err: any, data?: StartMLEvaluationTaskRunCommandOutput) => void
  ): Promise<StartMLEvaluationTaskRunCommandOutput> | void {
    const command = new StartMLEvaluationTaskRunCommand(args);
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
   * <p>Starts the active learning workflow for your machine learning transform to improve the
   *       transform's quality by generating label sets and adding labels.</p>
   *          <p>When the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, Glue will have
   *       generated a "labeling set" or a set of questions for humans to answer.</p>
   *          <p>In the case of the <code>FindMatches</code> transform, these questions are of the form,
   *       “What is the correct way to group these rows together into groups composed entirely of
   *       matching records?” </p>
   *          <p>After the labeling process is finished, you can upload your labels with a call to
   *         <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes,
   *       all future runs of the machine learning transform will use the new and improved labels and
   *       perform a higher-quality transformation.</p>
   */
  public startMLLabelingSetGenerationTaskRun(
    args: StartMLLabelingSetGenerationTaskRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMLLabelingSetGenerationTaskRunCommandOutput>;
  public startMLLabelingSetGenerationTaskRun(
    args: StartMLLabelingSetGenerationTaskRunCommandInput,
    cb: (err: any, data?: StartMLLabelingSetGenerationTaskRunCommandOutput) => void
  ): void;
  public startMLLabelingSetGenerationTaskRun(
    args: StartMLLabelingSetGenerationTaskRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMLLabelingSetGenerationTaskRunCommandOutput) => void
  ): void;
  public startMLLabelingSetGenerationTaskRun(
    args: StartMLLabelingSetGenerationTaskRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartMLLabelingSetGenerationTaskRunCommandOutput) => void),
    cb?: (err: any, data?: StartMLLabelingSetGenerationTaskRunCommandOutput) => void
  ): Promise<StartMLLabelingSetGenerationTaskRunCommandOutput> | void {
    const command = new StartMLLabelingSetGenerationTaskRunCommand(args);
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
   * <p>Starts an existing trigger. See <a href="https://docs.aws.amazon.com/glue/latest/dg/trigger-job.html">Triggering
   *       Jobs</a> for information about how different types of trigger are
   *       started.</p>
   */
  public startTrigger(
    args: StartTriggerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTriggerCommandOutput>;
  public startTrigger(args: StartTriggerCommandInput, cb: (err: any, data?: StartTriggerCommandOutput) => void): void;
  public startTrigger(
    args: StartTriggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTriggerCommandOutput) => void
  ): void;
  public startTrigger(
    args: StartTriggerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartTriggerCommandOutput) => void),
    cb?: (err: any, data?: StartTriggerCommandOutput) => void
  ): Promise<StartTriggerCommandOutput> | void {
    const command = new StartTriggerCommand(args);
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
   * <p>Starts a new run of the specified workflow.</p>
   */
  public startWorkflowRun(
    args: StartWorkflowRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartWorkflowRunCommandOutput>;
  public startWorkflowRun(
    args: StartWorkflowRunCommandInput,
    cb: (err: any, data?: StartWorkflowRunCommandOutput) => void
  ): void;
  public startWorkflowRun(
    args: StartWorkflowRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartWorkflowRunCommandOutput) => void
  ): void;
  public startWorkflowRun(
    args: StartWorkflowRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartWorkflowRunCommandOutput) => void),
    cb?: (err: any, data?: StartWorkflowRunCommandOutput) => void
  ): Promise<StartWorkflowRunCommandOutput> | void {
    const command = new StartWorkflowRunCommand(args);
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
   * <p>If the specified crawler is running, stops the crawl.</p>
   */
  public stopCrawler(args: StopCrawlerCommandInput, options?: __HttpHandlerOptions): Promise<StopCrawlerCommandOutput>;
  public stopCrawler(args: StopCrawlerCommandInput, cb: (err: any, data?: StopCrawlerCommandOutput) => void): void;
  public stopCrawler(
    args: StopCrawlerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopCrawlerCommandOutput) => void
  ): void;
  public stopCrawler(
    args: StopCrawlerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopCrawlerCommandOutput) => void),
    cb?: (err: any, data?: StopCrawlerCommandOutput) => void
  ): Promise<StopCrawlerCommandOutput> | void {
    const command = new StopCrawlerCommand(args);
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
   * <p>Sets the schedule state of the specified crawler to
   *       <code>NOT_SCHEDULED</code>, but does not stop the crawler if it is
   *       already running.</p>
   */
  public stopCrawlerSchedule(
    args: StopCrawlerScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopCrawlerScheduleCommandOutput>;
  public stopCrawlerSchedule(
    args: StopCrawlerScheduleCommandInput,
    cb: (err: any, data?: StopCrawlerScheduleCommandOutput) => void
  ): void;
  public stopCrawlerSchedule(
    args: StopCrawlerScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopCrawlerScheduleCommandOutput) => void
  ): void;
  public stopCrawlerSchedule(
    args: StopCrawlerScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopCrawlerScheduleCommandOutput) => void),
    cb?: (err: any, data?: StopCrawlerScheduleCommandOutput) => void
  ): Promise<StopCrawlerScheduleCommandOutput> | void {
    const command = new StopCrawlerScheduleCommand(args);
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
   * <p>Stops the session.</p>
   */
  public stopSession(args: StopSessionCommandInput, options?: __HttpHandlerOptions): Promise<StopSessionCommandOutput>;
  public stopSession(args: StopSessionCommandInput, cb: (err: any, data?: StopSessionCommandOutput) => void): void;
  public stopSession(
    args: StopSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopSessionCommandOutput) => void
  ): void;
  public stopSession(
    args: StopSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopSessionCommandOutput) => void),
    cb?: (err: any, data?: StopSessionCommandOutput) => void
  ): Promise<StopSessionCommandOutput> | void {
    const command = new StopSessionCommand(args);
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
   * <p>Stops a specified trigger.</p>
   */
  public stopTrigger(args: StopTriggerCommandInput, options?: __HttpHandlerOptions): Promise<StopTriggerCommandOutput>;
  public stopTrigger(args: StopTriggerCommandInput, cb: (err: any, data?: StopTriggerCommandOutput) => void): void;
  public stopTrigger(
    args: StopTriggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopTriggerCommandOutput) => void
  ): void;
  public stopTrigger(
    args: StopTriggerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopTriggerCommandOutput) => void),
    cb?: (err: any, data?: StopTriggerCommandOutput) => void
  ): Promise<StopTriggerCommandOutput> | void {
    const command = new StopTriggerCommand(args);
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
   * <p>Stops the execution of the specified workflow run.</p>
   */
  public stopWorkflowRun(
    args: StopWorkflowRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopWorkflowRunCommandOutput>;
  public stopWorkflowRun(
    args: StopWorkflowRunCommandInput,
    cb: (err: any, data?: StopWorkflowRunCommandOutput) => void
  ): void;
  public stopWorkflowRun(
    args: StopWorkflowRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopWorkflowRunCommandOutput) => void
  ): void;
  public stopWorkflowRun(
    args: StopWorkflowRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopWorkflowRunCommandOutput) => void),
    cb?: (err: any, data?: StopWorkflowRunCommandOutput) => void
  ): Promise<StopWorkflowRunCommandOutput> | void {
    const command = new StopWorkflowRunCommand(args);
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
   * <p>Adds tags to a resource. A tag is a label you can assign to an Amazon Web Services resource.
   *       In Glue, you can tag only certain resources. For information about what
   *       resources you can tag, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a>.</p>
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
   * <p>Removes tags from a resource.</p>
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
   * <p>Updates a registered blueprint.</p>
   */
  public updateBlueprint(
    args: UpdateBlueprintCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBlueprintCommandOutput>;
  public updateBlueprint(
    args: UpdateBlueprintCommandInput,
    cb: (err: any, data?: UpdateBlueprintCommandOutput) => void
  ): void;
  public updateBlueprint(
    args: UpdateBlueprintCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBlueprintCommandOutput) => void
  ): void;
  public updateBlueprint(
    args: UpdateBlueprintCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBlueprintCommandOutput) => void),
    cb?: (err: any, data?: UpdateBlueprintCommandOutput) => void
  ): Promise<UpdateBlueprintCommandOutput> | void {
    const command = new UpdateBlueprintCommand(args);
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
   * <p>Modifies an existing classifier (a <code>GrokClassifier</code>,
   *       an <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>, depending on
   *       which field is present).</p>
   */
  public updateClassifier(
    args: UpdateClassifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClassifierCommandOutput>;
  public updateClassifier(
    args: UpdateClassifierCommandInput,
    cb: (err: any, data?: UpdateClassifierCommandOutput) => void
  ): void;
  public updateClassifier(
    args: UpdateClassifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClassifierCommandOutput) => void
  ): void;
  public updateClassifier(
    args: UpdateClassifierCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateClassifierCommandOutput) => void),
    cb?: (err: any, data?: UpdateClassifierCommandOutput) => void
  ): Promise<UpdateClassifierCommandOutput> | void {
    const command = new UpdateClassifierCommand(args);
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
   * <p>Creates or updates partition statistics of columns.</p>
   *          <p>The Identity and Access Management (IAM) permission required for this operation is <code>UpdatePartition</code>.</p>
   */
  public updateColumnStatisticsForPartition(
    args: UpdateColumnStatisticsForPartitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateColumnStatisticsForPartitionCommandOutput>;
  public updateColumnStatisticsForPartition(
    args: UpdateColumnStatisticsForPartitionCommandInput,
    cb: (err: any, data?: UpdateColumnStatisticsForPartitionCommandOutput) => void
  ): void;
  public updateColumnStatisticsForPartition(
    args: UpdateColumnStatisticsForPartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateColumnStatisticsForPartitionCommandOutput) => void
  ): void;
  public updateColumnStatisticsForPartition(
    args: UpdateColumnStatisticsForPartitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateColumnStatisticsForPartitionCommandOutput) => void),
    cb?: (err: any, data?: UpdateColumnStatisticsForPartitionCommandOutput) => void
  ): Promise<UpdateColumnStatisticsForPartitionCommandOutput> | void {
    const command = new UpdateColumnStatisticsForPartitionCommand(args);
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
   * <p>Creates or updates table statistics of columns.</p>
   *          <p>The Identity and Access Management (IAM) permission required for this operation is <code>UpdateTable</code>.</p>
   */
  public updateColumnStatisticsForTable(
    args: UpdateColumnStatisticsForTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateColumnStatisticsForTableCommandOutput>;
  public updateColumnStatisticsForTable(
    args: UpdateColumnStatisticsForTableCommandInput,
    cb: (err: any, data?: UpdateColumnStatisticsForTableCommandOutput) => void
  ): void;
  public updateColumnStatisticsForTable(
    args: UpdateColumnStatisticsForTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateColumnStatisticsForTableCommandOutput) => void
  ): void;
  public updateColumnStatisticsForTable(
    args: UpdateColumnStatisticsForTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateColumnStatisticsForTableCommandOutput) => void),
    cb?: (err: any, data?: UpdateColumnStatisticsForTableCommandOutput) => void
  ): Promise<UpdateColumnStatisticsForTableCommandOutput> | void {
    const command = new UpdateColumnStatisticsForTableCommand(args);
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
   * <p>Updates a connection definition in the Data Catalog.</p>
   */
  public updateConnection(
    args: UpdateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectionCommandOutput>;
  public updateConnection(
    args: UpdateConnectionCommandInput,
    cb: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): void;
  public updateConnection(
    args: UpdateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): void;
  public updateConnection(
    args: UpdateConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateConnectionCommandOutput) => void),
    cb?: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): Promise<UpdateConnectionCommandOutput> | void {
    const command = new UpdateConnectionCommand(args);
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
   * <p>Updates a crawler. If a crawler is
   *       running, you must stop it using <code>StopCrawler</code> before updating
   *       it.</p>
   */
  public updateCrawler(
    args: UpdateCrawlerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCrawlerCommandOutput>;
  public updateCrawler(
    args: UpdateCrawlerCommandInput,
    cb: (err: any, data?: UpdateCrawlerCommandOutput) => void
  ): void;
  public updateCrawler(
    args: UpdateCrawlerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCrawlerCommandOutput) => void
  ): void;
  public updateCrawler(
    args: UpdateCrawlerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCrawlerCommandOutput) => void),
    cb?: (err: any, data?: UpdateCrawlerCommandOutput) => void
  ): Promise<UpdateCrawlerCommandOutput> | void {
    const command = new UpdateCrawlerCommand(args);
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
   * <p>Updates the schedule of a crawler using a <code>cron</code> expression. </p>
   */
  public updateCrawlerSchedule(
    args: UpdateCrawlerScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCrawlerScheduleCommandOutput>;
  public updateCrawlerSchedule(
    args: UpdateCrawlerScheduleCommandInput,
    cb: (err: any, data?: UpdateCrawlerScheduleCommandOutput) => void
  ): void;
  public updateCrawlerSchedule(
    args: UpdateCrawlerScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCrawlerScheduleCommandOutput) => void
  ): void;
  public updateCrawlerSchedule(
    args: UpdateCrawlerScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCrawlerScheduleCommandOutput) => void),
    cb?: (err: any, data?: UpdateCrawlerScheduleCommandOutput) => void
  ): Promise<UpdateCrawlerScheduleCommandOutput> | void {
    const command = new UpdateCrawlerScheduleCommand(args);
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
   * <p>Updates an existing database definition in a Data Catalog.</p>
   */
  public updateDatabase(
    args: UpdateDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDatabaseCommandOutput>;
  public updateDatabase(
    args: UpdateDatabaseCommandInput,
    cb: (err: any, data?: UpdateDatabaseCommandOutput) => void
  ): void;
  public updateDatabase(
    args: UpdateDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDatabaseCommandOutput) => void
  ): void;
  public updateDatabase(
    args: UpdateDatabaseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDatabaseCommandOutput) => void),
    cb?: (err: any, data?: UpdateDatabaseCommandOutput) => void
  ): Promise<UpdateDatabaseCommandOutput> | void {
    const command = new UpdateDatabaseCommand(args);
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
   * <p>Updates the specified data quality ruleset.</p>
   */
  public updateDataQualityRuleset(
    args: UpdateDataQualityRulesetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataQualityRulesetCommandOutput>;
  public updateDataQualityRuleset(
    args: UpdateDataQualityRulesetCommandInput,
    cb: (err: any, data?: UpdateDataQualityRulesetCommandOutput) => void
  ): void;
  public updateDataQualityRuleset(
    args: UpdateDataQualityRulesetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataQualityRulesetCommandOutput) => void
  ): void;
  public updateDataQualityRuleset(
    args: UpdateDataQualityRulesetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDataQualityRulesetCommandOutput) => void),
    cb?: (err: any, data?: UpdateDataQualityRulesetCommandOutput) => void
  ): Promise<UpdateDataQualityRulesetCommandOutput> | void {
    const command = new UpdateDataQualityRulesetCommand(args);
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
   * <p>Updates a specified development endpoint.</p>
   */
  public updateDevEndpoint(
    args: UpdateDevEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDevEndpointCommandOutput>;
  public updateDevEndpoint(
    args: UpdateDevEndpointCommandInput,
    cb: (err: any, data?: UpdateDevEndpointCommandOutput) => void
  ): void;
  public updateDevEndpoint(
    args: UpdateDevEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDevEndpointCommandOutput) => void
  ): void;
  public updateDevEndpoint(
    args: UpdateDevEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDevEndpointCommandOutput) => void),
    cb?: (err: any, data?: UpdateDevEndpointCommandOutput) => void
  ): Promise<UpdateDevEndpointCommandOutput> | void {
    const command = new UpdateDevEndpointCommand(args);
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
   * <p>Updates an existing job definition. The previous job definition is completely overwritten by this information.</p>
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
   * <p>Synchronizes a job from the source control repository. This operation takes the job artifacts that are located in the remote repository and updates the Glue internal stores with these artifacts.</p>
   *          <p>This API supports optional parameters which take in the repository information.</p>
   */
  public updateJobFromSourceControl(
    args: UpdateJobFromSourceControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateJobFromSourceControlCommandOutput>;
  public updateJobFromSourceControl(
    args: UpdateJobFromSourceControlCommandInput,
    cb: (err: any, data?: UpdateJobFromSourceControlCommandOutput) => void
  ): void;
  public updateJobFromSourceControl(
    args: UpdateJobFromSourceControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateJobFromSourceControlCommandOutput) => void
  ): void;
  public updateJobFromSourceControl(
    args: UpdateJobFromSourceControlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateJobFromSourceControlCommandOutput) => void),
    cb?: (err: any, data?: UpdateJobFromSourceControlCommandOutput) => void
  ): Promise<UpdateJobFromSourceControlCommandOutput> | void {
    const command = new UpdateJobFromSourceControlCommand(args);
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
   * <p>Updates an existing machine learning transform. Call this operation to tune the algorithm parameters to achieve better results.</p>
   *          <p>After calling this operation, you can call the <code>StartMLEvaluationTaskRun</code>
   *       operation to assess how well your new parameters achieved your goals (such as improving the
   *       quality of your machine learning transform, or making it more cost-effective).</p>
   */
  public updateMLTransform(
    args: UpdateMLTransformCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMLTransformCommandOutput>;
  public updateMLTransform(
    args: UpdateMLTransformCommandInput,
    cb: (err: any, data?: UpdateMLTransformCommandOutput) => void
  ): void;
  public updateMLTransform(
    args: UpdateMLTransformCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMLTransformCommandOutput) => void
  ): void;
  public updateMLTransform(
    args: UpdateMLTransformCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMLTransformCommandOutput) => void),
    cb?: (err: any, data?: UpdateMLTransformCommandOutput) => void
  ): Promise<UpdateMLTransformCommandOutput> | void {
    const command = new UpdateMLTransformCommand(args);
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
   * <p>Updates a partition.</p>
   */
  public updatePartition(
    args: UpdatePartitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePartitionCommandOutput>;
  public updatePartition(
    args: UpdatePartitionCommandInput,
    cb: (err: any, data?: UpdatePartitionCommandOutput) => void
  ): void;
  public updatePartition(
    args: UpdatePartitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePartitionCommandOutput) => void
  ): void;
  public updatePartition(
    args: UpdatePartitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePartitionCommandOutput) => void),
    cb?: (err: any, data?: UpdatePartitionCommandOutput) => void
  ): Promise<UpdatePartitionCommandOutput> | void {
    const command = new UpdatePartitionCommand(args);
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
   * <p>Updates an existing registry which is used to hold a collection of schemas. The updated properties relate to the registry, and do not modify any of the schemas within the registry. </p>
   */
  public updateRegistry(
    args: UpdateRegistryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRegistryCommandOutput>;
  public updateRegistry(
    args: UpdateRegistryCommandInput,
    cb: (err: any, data?: UpdateRegistryCommandOutput) => void
  ): void;
  public updateRegistry(
    args: UpdateRegistryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRegistryCommandOutput) => void
  ): void;
  public updateRegistry(
    args: UpdateRegistryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRegistryCommandOutput) => void),
    cb?: (err: any, data?: UpdateRegistryCommandOutput) => void
  ): Promise<UpdateRegistryCommandOutput> | void {
    const command = new UpdateRegistryCommand(args);
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
   * <p>Updates the description, compatibility setting, or version checkpoint for a schema set.</p>
   *          <p>For updating the compatibility setting, the call will not validate compatibility for the entire set of schema versions with the new compatibility setting. If the value for <code>Compatibility</code> is provided, the <code>VersionNumber</code> (a checkpoint) is also required. The API will validate the checkpoint version number for consistency.</p>
   *          <p>If the value for the <code>VersionNumber</code> (checkpoint) is provided, <code>Compatibility</code> is optional and this can be used to set/reset a checkpoint for the schema.</p>
   *          <p>This update will happen only if the schema is in the AVAILABLE state.</p>
   */
  public updateSchema(
    args: UpdateSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSchemaCommandOutput>;
  public updateSchema(args: UpdateSchemaCommandInput, cb: (err: any, data?: UpdateSchemaCommandOutput) => void): void;
  public updateSchema(
    args: UpdateSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSchemaCommandOutput) => void
  ): void;
  public updateSchema(
    args: UpdateSchemaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSchemaCommandOutput) => void),
    cb?: (err: any, data?: UpdateSchemaCommandOutput) => void
  ): Promise<UpdateSchemaCommandOutput> | void {
    const command = new UpdateSchemaCommand(args);
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
   * <p>Synchronizes a job to the source control repository. This operation takes the job artifacts from the Glue internal stores and makes a commit to the remote repository that is configured on the job.</p>
   *          <p>This API supports optional parameters which take in the repository information.</p>
   */
  public updateSourceControlFromJob(
    args: UpdateSourceControlFromJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSourceControlFromJobCommandOutput>;
  public updateSourceControlFromJob(
    args: UpdateSourceControlFromJobCommandInput,
    cb: (err: any, data?: UpdateSourceControlFromJobCommandOutput) => void
  ): void;
  public updateSourceControlFromJob(
    args: UpdateSourceControlFromJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSourceControlFromJobCommandOutput) => void
  ): void;
  public updateSourceControlFromJob(
    args: UpdateSourceControlFromJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSourceControlFromJobCommandOutput) => void),
    cb?: (err: any, data?: UpdateSourceControlFromJobCommandOutput) => void
  ): Promise<UpdateSourceControlFromJobCommandOutput> | void {
    const command = new UpdateSourceControlFromJobCommand(args);
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
   * <p>Updates a metadata table in the Data Catalog.</p>
   */
  public updateTable(args: UpdateTableCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTableCommandOutput>;
  public updateTable(args: UpdateTableCommandInput, cb: (err: any, data?: UpdateTableCommandOutput) => void): void;
  public updateTable(
    args: UpdateTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTableCommandOutput) => void
  ): void;
  public updateTable(
    args: UpdateTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTableCommandOutput) => void),
    cb?: (err: any, data?: UpdateTableCommandOutput) => void
  ): Promise<UpdateTableCommandOutput> | void {
    const command = new UpdateTableCommand(args);
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
   * <p>Updates a trigger definition.</p>
   */
  public updateTrigger(
    args: UpdateTriggerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTriggerCommandOutput>;
  public updateTrigger(
    args: UpdateTriggerCommandInput,
    cb: (err: any, data?: UpdateTriggerCommandOutput) => void
  ): void;
  public updateTrigger(
    args: UpdateTriggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTriggerCommandOutput) => void
  ): void;
  public updateTrigger(
    args: UpdateTriggerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTriggerCommandOutput) => void),
    cb?: (err: any, data?: UpdateTriggerCommandOutput) => void
  ): Promise<UpdateTriggerCommandOutput> | void {
    const command = new UpdateTriggerCommand(args);
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
   * <p>Updates an existing function definition in the Data Catalog.</p>
   */
  public updateUserDefinedFunction(
    args: UpdateUserDefinedFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserDefinedFunctionCommandOutput>;
  public updateUserDefinedFunction(
    args: UpdateUserDefinedFunctionCommandInput,
    cb: (err: any, data?: UpdateUserDefinedFunctionCommandOutput) => void
  ): void;
  public updateUserDefinedFunction(
    args: UpdateUserDefinedFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserDefinedFunctionCommandOutput) => void
  ): void;
  public updateUserDefinedFunction(
    args: UpdateUserDefinedFunctionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUserDefinedFunctionCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserDefinedFunctionCommandOutput) => void
  ): Promise<UpdateUserDefinedFunctionCommandOutput> | void {
    const command = new UpdateUserDefinedFunctionCommand(args);
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
   * <p>Updates an existing workflow.</p>
   */
  public updateWorkflow(
    args: UpdateWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkflowCommandOutput>;
  public updateWorkflow(
    args: UpdateWorkflowCommandInput,
    cb: (err: any, data?: UpdateWorkflowCommandOutput) => void
  ): void;
  public updateWorkflow(
    args: UpdateWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkflowCommandOutput) => void
  ): void;
  public updateWorkflow(
    args: UpdateWorkflowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWorkflowCommandOutput) => void),
    cb?: (err: any, data?: UpdateWorkflowCommandOutput) => void
  ): Promise<UpdateWorkflowCommandOutput> | void {
    const command = new UpdateWorkflowCommand(args);
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
