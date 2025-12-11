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
  defaultGlueHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  BatchCreatePartitionCommandInput,
  BatchCreatePartitionCommandOutput,
} from "./commands/BatchCreatePartitionCommand";
import {
  BatchDeleteConnectionCommandInput,
  BatchDeleteConnectionCommandOutput,
} from "./commands/BatchDeleteConnectionCommand";
import {
  BatchDeletePartitionCommandInput,
  BatchDeletePartitionCommandOutput,
} from "./commands/BatchDeletePartitionCommand";
import { BatchDeleteTableCommandInput, BatchDeleteTableCommandOutput } from "./commands/BatchDeleteTableCommand";
import {
  BatchDeleteTableVersionCommandInput,
  BatchDeleteTableVersionCommandOutput,
} from "./commands/BatchDeleteTableVersionCommand";
import { BatchGetBlueprintsCommandInput, BatchGetBlueprintsCommandOutput } from "./commands/BatchGetBlueprintsCommand";
import { BatchGetCrawlersCommandInput, BatchGetCrawlersCommandOutput } from "./commands/BatchGetCrawlersCommand";
import {
  BatchGetCustomEntityTypesCommandInput,
  BatchGetCustomEntityTypesCommandOutput,
} from "./commands/BatchGetCustomEntityTypesCommand";
import {
  BatchGetDataQualityResultCommandInput,
  BatchGetDataQualityResultCommandOutput,
} from "./commands/BatchGetDataQualityResultCommand";
import {
  BatchGetDevEndpointsCommandInput,
  BatchGetDevEndpointsCommandOutput,
} from "./commands/BatchGetDevEndpointsCommand";
import { BatchGetJobsCommandInput, BatchGetJobsCommandOutput } from "./commands/BatchGetJobsCommand";
import { BatchGetPartitionCommandInput, BatchGetPartitionCommandOutput } from "./commands/BatchGetPartitionCommand";
import {
  BatchGetTableOptimizerCommandInput,
  BatchGetTableOptimizerCommandOutput,
} from "./commands/BatchGetTableOptimizerCommand";
import { BatchGetTriggersCommandInput, BatchGetTriggersCommandOutput } from "./commands/BatchGetTriggersCommand";
import { BatchGetWorkflowsCommandInput, BatchGetWorkflowsCommandOutput } from "./commands/BatchGetWorkflowsCommand";
import {
  BatchPutDataQualityStatisticAnnotationCommandInput,
  BatchPutDataQualityStatisticAnnotationCommandOutput,
} from "./commands/BatchPutDataQualityStatisticAnnotationCommand";
import { BatchStopJobRunCommandInput, BatchStopJobRunCommandOutput } from "./commands/BatchStopJobRunCommand";
import {
  BatchUpdatePartitionCommandInput,
  BatchUpdatePartitionCommandOutput,
} from "./commands/BatchUpdatePartitionCommand";
import {
  CancelDataQualityRuleRecommendationRunCommandInput,
  CancelDataQualityRuleRecommendationRunCommandOutput,
} from "./commands/CancelDataQualityRuleRecommendationRunCommand";
import {
  CancelDataQualityRulesetEvaluationRunCommandInput,
  CancelDataQualityRulesetEvaluationRunCommandOutput,
} from "./commands/CancelDataQualityRulesetEvaluationRunCommand";
import { CancelMLTaskRunCommandInput, CancelMLTaskRunCommandOutput } from "./commands/CancelMLTaskRunCommand";
import { CancelStatementCommandInput, CancelStatementCommandOutput } from "./commands/CancelStatementCommand";
import {
  CheckSchemaVersionValidityCommandInput,
  CheckSchemaVersionValidityCommandOutput,
} from "./commands/CheckSchemaVersionValidityCommand";
import { CreateBlueprintCommandInput, CreateBlueprintCommandOutput } from "./commands/CreateBlueprintCommand";
import { CreateCatalogCommandInput, CreateCatalogCommandOutput } from "./commands/CreateCatalogCommand";
import { CreateClassifierCommandInput, CreateClassifierCommandOutput } from "./commands/CreateClassifierCommand";
import {
  CreateColumnStatisticsTaskSettingsCommandInput,
  CreateColumnStatisticsTaskSettingsCommandOutput,
} from "./commands/CreateColumnStatisticsTaskSettingsCommand";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "./commands/CreateConnectionCommand";
import { CreateCrawlerCommandInput, CreateCrawlerCommandOutput } from "./commands/CreateCrawlerCommand";
import {
  CreateCustomEntityTypeCommandInput,
  CreateCustomEntityTypeCommandOutput,
} from "./commands/CreateCustomEntityTypeCommand";
import { CreateDatabaseCommandInput, CreateDatabaseCommandOutput } from "./commands/CreateDatabaseCommand";
import {
  CreateDataQualityRulesetCommandInput,
  CreateDataQualityRulesetCommandOutput,
} from "./commands/CreateDataQualityRulesetCommand";
import { CreateDevEndpointCommandInput, CreateDevEndpointCommandOutput } from "./commands/CreateDevEndpointCommand";
import {
  CreateGlueIdentityCenterConfigurationCommandInput,
  CreateGlueIdentityCenterConfigurationCommandOutput,
} from "./commands/CreateGlueIdentityCenterConfigurationCommand";
import { CreateIntegrationCommandInput, CreateIntegrationCommandOutput } from "./commands/CreateIntegrationCommand";
import {
  CreateIntegrationResourcePropertyCommandInput,
  CreateIntegrationResourcePropertyCommandOutput,
} from "./commands/CreateIntegrationResourcePropertyCommand";
import {
  CreateIntegrationTablePropertiesCommandInput,
  CreateIntegrationTablePropertiesCommandOutput,
} from "./commands/CreateIntegrationTablePropertiesCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import { CreateMLTransformCommandInput, CreateMLTransformCommandOutput } from "./commands/CreateMLTransformCommand";
import { CreatePartitionCommandInput, CreatePartitionCommandOutput } from "./commands/CreatePartitionCommand";
import {
  CreatePartitionIndexCommandInput,
  CreatePartitionIndexCommandOutput,
} from "./commands/CreatePartitionIndexCommand";
import { CreateRegistryCommandInput, CreateRegistryCommandOutput } from "./commands/CreateRegistryCommand";
import { CreateSchemaCommandInput, CreateSchemaCommandOutput } from "./commands/CreateSchemaCommand";
import { CreateScriptCommandInput, CreateScriptCommandOutput } from "./commands/CreateScriptCommand";
import {
  CreateSecurityConfigurationCommandInput,
  CreateSecurityConfigurationCommandOutput,
} from "./commands/CreateSecurityConfigurationCommand";
import { CreateSessionCommandInput, CreateSessionCommandOutput } from "./commands/CreateSessionCommand";
import { CreateTableCommandInput, CreateTableCommandOutput } from "./commands/CreateTableCommand";
import {
  CreateTableOptimizerCommandInput,
  CreateTableOptimizerCommandOutput,
} from "./commands/CreateTableOptimizerCommand";
import { CreateTriggerCommandInput, CreateTriggerCommandOutput } from "./commands/CreateTriggerCommand";
import { CreateUsageProfileCommandInput, CreateUsageProfileCommandOutput } from "./commands/CreateUsageProfileCommand";
import {
  CreateUserDefinedFunctionCommandInput,
  CreateUserDefinedFunctionCommandOutput,
} from "./commands/CreateUserDefinedFunctionCommand";
import { CreateWorkflowCommandInput, CreateWorkflowCommandOutput } from "./commands/CreateWorkflowCommand";
import { DeleteBlueprintCommandInput, DeleteBlueprintCommandOutput } from "./commands/DeleteBlueprintCommand";
import { DeleteCatalogCommandInput, DeleteCatalogCommandOutput } from "./commands/DeleteCatalogCommand";
import { DeleteClassifierCommandInput, DeleteClassifierCommandOutput } from "./commands/DeleteClassifierCommand";
import {
  DeleteColumnStatisticsForPartitionCommandInput,
  DeleteColumnStatisticsForPartitionCommandOutput,
} from "./commands/DeleteColumnStatisticsForPartitionCommand";
import {
  DeleteColumnStatisticsForTableCommandInput,
  DeleteColumnStatisticsForTableCommandOutput,
} from "./commands/DeleteColumnStatisticsForTableCommand";
import {
  DeleteColumnStatisticsTaskSettingsCommandInput,
  DeleteColumnStatisticsTaskSettingsCommandOutput,
} from "./commands/DeleteColumnStatisticsTaskSettingsCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "./commands/DeleteConnectionCommand";
import { DeleteCrawlerCommandInput, DeleteCrawlerCommandOutput } from "./commands/DeleteCrawlerCommand";
import {
  DeleteCustomEntityTypeCommandInput,
  DeleteCustomEntityTypeCommandOutput,
} from "./commands/DeleteCustomEntityTypeCommand";
import { DeleteDatabaseCommandInput, DeleteDatabaseCommandOutput } from "./commands/DeleteDatabaseCommand";
import {
  DeleteDataQualityRulesetCommandInput,
  DeleteDataQualityRulesetCommandOutput,
} from "./commands/DeleteDataQualityRulesetCommand";
import { DeleteDevEndpointCommandInput, DeleteDevEndpointCommandOutput } from "./commands/DeleteDevEndpointCommand";
import {
  DeleteGlueIdentityCenterConfigurationCommandInput,
  DeleteGlueIdentityCenterConfigurationCommandOutput,
} from "./commands/DeleteGlueIdentityCenterConfigurationCommand";
import { DeleteIntegrationCommandInput, DeleteIntegrationCommandOutput } from "./commands/DeleteIntegrationCommand";
import {
  DeleteIntegrationResourcePropertyCommandInput,
  DeleteIntegrationResourcePropertyCommandOutput,
} from "./commands/DeleteIntegrationResourcePropertyCommand";
import {
  DeleteIntegrationTablePropertiesCommandInput,
  DeleteIntegrationTablePropertiesCommandOutput,
} from "./commands/DeleteIntegrationTablePropertiesCommand";
import { DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand";
import { DeleteMLTransformCommandInput, DeleteMLTransformCommandOutput } from "./commands/DeleteMLTransformCommand";
import { DeletePartitionCommandInput, DeletePartitionCommandOutput } from "./commands/DeletePartitionCommand";
import {
  DeletePartitionIndexCommandInput,
  DeletePartitionIndexCommandOutput,
} from "./commands/DeletePartitionIndexCommand";
import { DeleteRegistryCommandInput, DeleteRegistryCommandOutput } from "./commands/DeleteRegistryCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import { DeleteSchemaCommandInput, DeleteSchemaCommandOutput } from "./commands/DeleteSchemaCommand";
import {
  DeleteSchemaVersionsCommandInput,
  DeleteSchemaVersionsCommandOutput,
} from "./commands/DeleteSchemaVersionsCommand";
import {
  DeleteSecurityConfigurationCommandInput,
  DeleteSecurityConfigurationCommandOutput,
} from "./commands/DeleteSecurityConfigurationCommand";
import { DeleteSessionCommandInput, DeleteSessionCommandOutput } from "./commands/DeleteSessionCommand";
import { DeleteTableCommandInput, DeleteTableCommandOutput } from "./commands/DeleteTableCommand";
import {
  DeleteTableOptimizerCommandInput,
  DeleteTableOptimizerCommandOutput,
} from "./commands/DeleteTableOptimizerCommand";
import { DeleteTableVersionCommandInput, DeleteTableVersionCommandOutput } from "./commands/DeleteTableVersionCommand";
import { DeleteTriggerCommandInput, DeleteTriggerCommandOutput } from "./commands/DeleteTriggerCommand";
import { DeleteUsageProfileCommandInput, DeleteUsageProfileCommandOutput } from "./commands/DeleteUsageProfileCommand";
import {
  DeleteUserDefinedFunctionCommandInput,
  DeleteUserDefinedFunctionCommandOutput,
} from "./commands/DeleteUserDefinedFunctionCommand";
import { DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput } from "./commands/DeleteWorkflowCommand";
import {
  DescribeConnectionTypeCommandInput,
  DescribeConnectionTypeCommandOutput,
} from "./commands/DescribeConnectionTypeCommand";
import { DescribeEntityCommandInput, DescribeEntityCommandOutput } from "./commands/DescribeEntityCommand";
import {
  DescribeInboundIntegrationsCommandInput,
  DescribeInboundIntegrationsCommandOutput,
} from "./commands/DescribeInboundIntegrationsCommand";
import {
  DescribeIntegrationsCommandInput,
  DescribeIntegrationsCommandOutput,
} from "./commands/DescribeIntegrationsCommand";
import { GetBlueprintCommandInput, GetBlueprintCommandOutput } from "./commands/GetBlueprintCommand";
import { GetBlueprintRunCommandInput, GetBlueprintRunCommandOutput } from "./commands/GetBlueprintRunCommand";
import { GetBlueprintRunsCommandInput, GetBlueprintRunsCommandOutput } from "./commands/GetBlueprintRunsCommand";
import { GetCatalogCommandInput, GetCatalogCommandOutput } from "./commands/GetCatalogCommand";
import {
  GetCatalogImportStatusCommandInput,
  GetCatalogImportStatusCommandOutput,
} from "./commands/GetCatalogImportStatusCommand";
import { GetCatalogsCommandInput, GetCatalogsCommandOutput } from "./commands/GetCatalogsCommand";
import { GetClassifierCommandInput, GetClassifierCommandOutput } from "./commands/GetClassifierCommand";
import { GetClassifiersCommandInput, GetClassifiersCommandOutput } from "./commands/GetClassifiersCommand";
import {
  GetColumnStatisticsForPartitionCommandInput,
  GetColumnStatisticsForPartitionCommandOutput,
} from "./commands/GetColumnStatisticsForPartitionCommand";
import {
  GetColumnStatisticsForTableCommandInput,
  GetColumnStatisticsForTableCommandOutput,
} from "./commands/GetColumnStatisticsForTableCommand";
import {
  GetColumnStatisticsTaskRunCommandInput,
  GetColumnStatisticsTaskRunCommandOutput,
} from "./commands/GetColumnStatisticsTaskRunCommand";
import {
  GetColumnStatisticsTaskRunsCommandInput,
  GetColumnStatisticsTaskRunsCommandOutput,
} from "./commands/GetColumnStatisticsTaskRunsCommand";
import {
  GetColumnStatisticsTaskSettingsCommandInput,
  GetColumnStatisticsTaskSettingsCommandOutput,
} from "./commands/GetColumnStatisticsTaskSettingsCommand";
import { GetConnectionCommandInput, GetConnectionCommandOutput } from "./commands/GetConnectionCommand";
import { GetConnectionsCommandInput, GetConnectionsCommandOutput } from "./commands/GetConnectionsCommand";
import { GetCrawlerCommandInput, GetCrawlerCommandOutput } from "./commands/GetCrawlerCommand";
import { GetCrawlerMetricsCommandInput, GetCrawlerMetricsCommandOutput } from "./commands/GetCrawlerMetricsCommand";
import { GetCrawlersCommandInput, GetCrawlersCommandOutput } from "./commands/GetCrawlersCommand";
import {
  GetCustomEntityTypeCommandInput,
  GetCustomEntityTypeCommandOutput,
} from "./commands/GetCustomEntityTypeCommand";
import { GetDatabaseCommandInput, GetDatabaseCommandOutput } from "./commands/GetDatabaseCommand";
import { GetDatabasesCommandInput, GetDatabasesCommandOutput } from "./commands/GetDatabasesCommand";
import {
  GetDataCatalogEncryptionSettingsCommandInput,
  GetDataCatalogEncryptionSettingsCommandOutput,
} from "./commands/GetDataCatalogEncryptionSettingsCommand";
import { GetDataflowGraphCommandInput, GetDataflowGraphCommandOutput } from "./commands/GetDataflowGraphCommand";
import {
  GetDataQualityModelCommandInput,
  GetDataQualityModelCommandOutput,
} from "./commands/GetDataQualityModelCommand";
import {
  GetDataQualityModelResultCommandInput,
  GetDataQualityModelResultCommandOutput,
} from "./commands/GetDataQualityModelResultCommand";
import {
  GetDataQualityResultCommandInput,
  GetDataQualityResultCommandOutput,
} from "./commands/GetDataQualityResultCommand";
import {
  GetDataQualityRuleRecommendationRunCommandInput,
  GetDataQualityRuleRecommendationRunCommandOutput,
} from "./commands/GetDataQualityRuleRecommendationRunCommand";
import {
  GetDataQualityRulesetCommandInput,
  GetDataQualityRulesetCommandOutput,
} from "./commands/GetDataQualityRulesetCommand";
import {
  GetDataQualityRulesetEvaluationRunCommandInput,
  GetDataQualityRulesetEvaluationRunCommandOutput,
} from "./commands/GetDataQualityRulesetEvaluationRunCommand";
import { GetDevEndpointCommandInput, GetDevEndpointCommandOutput } from "./commands/GetDevEndpointCommand";
import { GetDevEndpointsCommandInput, GetDevEndpointsCommandOutput } from "./commands/GetDevEndpointsCommand";
import { GetEntityRecordsCommandInput, GetEntityRecordsCommandOutput } from "./commands/GetEntityRecordsCommand";
import {
  GetGlueIdentityCenterConfigurationCommandInput,
  GetGlueIdentityCenterConfigurationCommandOutput,
} from "./commands/GetGlueIdentityCenterConfigurationCommand";
import {
  GetIntegrationResourcePropertyCommandInput,
  GetIntegrationResourcePropertyCommandOutput,
} from "./commands/GetIntegrationResourcePropertyCommand";
import {
  GetIntegrationTablePropertiesCommandInput,
  GetIntegrationTablePropertiesCommandOutput,
} from "./commands/GetIntegrationTablePropertiesCommand";
import { GetJobBookmarkCommandInput, GetJobBookmarkCommandOutput } from "./commands/GetJobBookmarkCommand";
import { GetJobCommandInput, GetJobCommandOutput } from "./commands/GetJobCommand";
import { GetJobRunCommandInput, GetJobRunCommandOutput } from "./commands/GetJobRunCommand";
import { GetJobRunsCommandInput, GetJobRunsCommandOutput } from "./commands/GetJobRunsCommand";
import { GetJobsCommandInput, GetJobsCommandOutput } from "./commands/GetJobsCommand";
import { GetMappingCommandInput, GetMappingCommandOutput } from "./commands/GetMappingCommand";
import { GetMLTaskRunCommandInput, GetMLTaskRunCommandOutput } from "./commands/GetMLTaskRunCommand";
import { GetMLTaskRunsCommandInput, GetMLTaskRunsCommandOutput } from "./commands/GetMLTaskRunsCommand";
import { GetMLTransformCommandInput, GetMLTransformCommandOutput } from "./commands/GetMLTransformCommand";
import { GetMLTransformsCommandInput, GetMLTransformsCommandOutput } from "./commands/GetMLTransformsCommand";
import { GetPartitionCommandInput, GetPartitionCommandOutput } from "./commands/GetPartitionCommand";
import {
  GetPartitionIndexesCommandInput,
  GetPartitionIndexesCommandOutput,
} from "./commands/GetPartitionIndexesCommand";
import { GetPartitionsCommandInput, GetPartitionsCommandOutput } from "./commands/GetPartitionsCommand";
import { GetPlanCommandInput, GetPlanCommandOutput } from "./commands/GetPlanCommand";
import { GetRegistryCommandInput, GetRegistryCommandOutput } from "./commands/GetRegistryCommand";
import {
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput,
} from "./commands/GetResourcePoliciesCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "./commands/GetResourcePolicyCommand";
import {
  GetSchemaByDefinitionCommandInput,
  GetSchemaByDefinitionCommandOutput,
} from "./commands/GetSchemaByDefinitionCommand";
import { GetSchemaCommandInput, GetSchemaCommandOutput } from "./commands/GetSchemaCommand";
import { GetSchemaVersionCommandInput, GetSchemaVersionCommandOutput } from "./commands/GetSchemaVersionCommand";
import {
  GetSchemaVersionsDiffCommandInput,
  GetSchemaVersionsDiffCommandOutput,
} from "./commands/GetSchemaVersionsDiffCommand";
import {
  GetSecurityConfigurationCommandInput,
  GetSecurityConfigurationCommandOutput,
} from "./commands/GetSecurityConfigurationCommand";
import {
  GetSecurityConfigurationsCommandInput,
  GetSecurityConfigurationsCommandOutput,
} from "./commands/GetSecurityConfigurationsCommand";
import { GetSessionCommandInput, GetSessionCommandOutput } from "./commands/GetSessionCommand";
import { GetStatementCommandInput, GetStatementCommandOutput } from "./commands/GetStatementCommand";
import { GetTableCommandInput, GetTableCommandOutput } from "./commands/GetTableCommand";
import { GetTableOptimizerCommandInput, GetTableOptimizerCommandOutput } from "./commands/GetTableOptimizerCommand";
import { GetTablesCommandInput, GetTablesCommandOutput } from "./commands/GetTablesCommand";
import { GetTableVersionCommandInput, GetTableVersionCommandOutput } from "./commands/GetTableVersionCommand";
import { GetTableVersionsCommandInput, GetTableVersionsCommandOutput } from "./commands/GetTableVersionsCommand";
import { GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand";
import { GetTriggerCommandInput, GetTriggerCommandOutput } from "./commands/GetTriggerCommand";
import { GetTriggersCommandInput, GetTriggersCommandOutput } from "./commands/GetTriggersCommand";
import {
  GetUnfilteredPartitionMetadataCommandInput,
  GetUnfilteredPartitionMetadataCommandOutput,
} from "./commands/GetUnfilteredPartitionMetadataCommand";
import {
  GetUnfilteredPartitionsMetadataCommandInput,
  GetUnfilteredPartitionsMetadataCommandOutput,
} from "./commands/GetUnfilteredPartitionsMetadataCommand";
import {
  GetUnfilteredTableMetadataCommandInput,
  GetUnfilteredTableMetadataCommandOutput,
} from "./commands/GetUnfilteredTableMetadataCommand";
import { GetUsageProfileCommandInput, GetUsageProfileCommandOutput } from "./commands/GetUsageProfileCommand";
import {
  GetUserDefinedFunctionCommandInput,
  GetUserDefinedFunctionCommandOutput,
} from "./commands/GetUserDefinedFunctionCommand";
import {
  GetUserDefinedFunctionsCommandInput,
  GetUserDefinedFunctionsCommandOutput,
} from "./commands/GetUserDefinedFunctionsCommand";
import { GetWorkflowCommandInput, GetWorkflowCommandOutput } from "./commands/GetWorkflowCommand";
import { GetWorkflowRunCommandInput, GetWorkflowRunCommandOutput } from "./commands/GetWorkflowRunCommand";
import {
  GetWorkflowRunPropertiesCommandInput,
  GetWorkflowRunPropertiesCommandOutput,
} from "./commands/GetWorkflowRunPropertiesCommand";
import { GetWorkflowRunsCommandInput, GetWorkflowRunsCommandOutput } from "./commands/GetWorkflowRunsCommand";
import {
  ImportCatalogToGlueCommandInput,
  ImportCatalogToGlueCommandOutput,
} from "./commands/ImportCatalogToGlueCommand";
import { ListBlueprintsCommandInput, ListBlueprintsCommandOutput } from "./commands/ListBlueprintsCommand";
import {
  ListColumnStatisticsTaskRunsCommandInput,
  ListColumnStatisticsTaskRunsCommandOutput,
} from "./commands/ListColumnStatisticsTaskRunsCommand";
import {
  ListConnectionTypesCommandInput,
  ListConnectionTypesCommandOutput,
} from "./commands/ListConnectionTypesCommand";
import { ListCrawlersCommandInput, ListCrawlersCommandOutput } from "./commands/ListCrawlersCommand";
import { ListCrawlsCommandInput, ListCrawlsCommandOutput } from "./commands/ListCrawlsCommand";
import {
  ListCustomEntityTypesCommandInput,
  ListCustomEntityTypesCommandOutput,
} from "./commands/ListCustomEntityTypesCommand";
import {
  ListDataQualityResultsCommandInput,
  ListDataQualityResultsCommandOutput,
} from "./commands/ListDataQualityResultsCommand";
import {
  ListDataQualityRuleRecommendationRunsCommandInput,
  ListDataQualityRuleRecommendationRunsCommandOutput,
} from "./commands/ListDataQualityRuleRecommendationRunsCommand";
import {
  ListDataQualityRulesetEvaluationRunsCommandInput,
  ListDataQualityRulesetEvaluationRunsCommandOutput,
} from "./commands/ListDataQualityRulesetEvaluationRunsCommand";
import {
  ListDataQualityRulesetsCommandInput,
  ListDataQualityRulesetsCommandOutput,
} from "./commands/ListDataQualityRulesetsCommand";
import {
  ListDataQualityStatisticAnnotationsCommandInput,
  ListDataQualityStatisticAnnotationsCommandOutput,
} from "./commands/ListDataQualityStatisticAnnotationsCommand";
import {
  ListDataQualityStatisticsCommandInput,
  ListDataQualityStatisticsCommandOutput,
} from "./commands/ListDataQualityStatisticsCommand";
import { ListDevEndpointsCommandInput, ListDevEndpointsCommandOutput } from "./commands/ListDevEndpointsCommand";
import { ListEntitiesCommandInput, ListEntitiesCommandOutput } from "./commands/ListEntitiesCommand";
import {
  ListIntegrationResourcePropertiesCommandInput,
  ListIntegrationResourcePropertiesCommandOutput,
} from "./commands/ListIntegrationResourcePropertiesCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import { ListMLTransformsCommandInput, ListMLTransformsCommandOutput } from "./commands/ListMLTransformsCommand";
import { ListRegistriesCommandInput, ListRegistriesCommandOutput } from "./commands/ListRegistriesCommand";
import { ListSchemasCommandInput, ListSchemasCommandOutput } from "./commands/ListSchemasCommand";
import { ListSchemaVersionsCommandInput, ListSchemaVersionsCommandOutput } from "./commands/ListSchemaVersionsCommand";
import { ListSessionsCommandInput, ListSessionsCommandOutput } from "./commands/ListSessionsCommand";
import { ListStatementsCommandInput, ListStatementsCommandOutput } from "./commands/ListStatementsCommand";
import {
  ListTableOptimizerRunsCommandInput,
  ListTableOptimizerRunsCommandOutput,
} from "./commands/ListTableOptimizerRunsCommand";
import { ListTriggersCommandInput, ListTriggersCommandOutput } from "./commands/ListTriggersCommand";
import { ListUsageProfilesCommandInput, ListUsageProfilesCommandOutput } from "./commands/ListUsageProfilesCommand";
import { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "./commands/ListWorkflowsCommand";
import { ModifyIntegrationCommandInput, ModifyIntegrationCommandOutput } from "./commands/ModifyIntegrationCommand";
import {
  PutDataCatalogEncryptionSettingsCommandInput,
  PutDataCatalogEncryptionSettingsCommandOutput,
} from "./commands/PutDataCatalogEncryptionSettingsCommand";
import {
  PutDataQualityProfileAnnotationCommandInput,
  PutDataQualityProfileAnnotationCommandOutput,
} from "./commands/PutDataQualityProfileAnnotationCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "./commands/PutResourcePolicyCommand";
import {
  PutSchemaVersionMetadataCommandInput,
  PutSchemaVersionMetadataCommandOutput,
} from "./commands/PutSchemaVersionMetadataCommand";
import {
  PutWorkflowRunPropertiesCommandInput,
  PutWorkflowRunPropertiesCommandOutput,
} from "./commands/PutWorkflowRunPropertiesCommand";
import {
  QuerySchemaVersionMetadataCommandInput,
  QuerySchemaVersionMetadataCommandOutput,
} from "./commands/QuerySchemaVersionMetadataCommand";
import {
  RegisterSchemaVersionCommandInput,
  RegisterSchemaVersionCommandOutput,
} from "./commands/RegisterSchemaVersionCommand";
import {
  RemoveSchemaVersionMetadataCommandInput,
  RemoveSchemaVersionMetadataCommandOutput,
} from "./commands/RemoveSchemaVersionMetadataCommand";
import { ResetJobBookmarkCommandInput, ResetJobBookmarkCommandOutput } from "./commands/ResetJobBookmarkCommand";
import { ResumeWorkflowRunCommandInput, ResumeWorkflowRunCommandOutput } from "./commands/ResumeWorkflowRunCommand";
import { RunStatementCommandInput, RunStatementCommandOutput } from "./commands/RunStatementCommand";
import { SearchTablesCommandInput, SearchTablesCommandOutput } from "./commands/SearchTablesCommand";
import { StartBlueprintRunCommandInput, StartBlueprintRunCommandOutput } from "./commands/StartBlueprintRunCommand";
import {
  StartColumnStatisticsTaskRunCommandInput,
  StartColumnStatisticsTaskRunCommandOutput,
} from "./commands/StartColumnStatisticsTaskRunCommand";
import {
  StartColumnStatisticsTaskRunScheduleCommandInput,
  StartColumnStatisticsTaskRunScheduleCommandOutput,
} from "./commands/StartColumnStatisticsTaskRunScheduleCommand";
import { StartCrawlerCommandInput, StartCrawlerCommandOutput } from "./commands/StartCrawlerCommand";
import {
  StartCrawlerScheduleCommandInput,
  StartCrawlerScheduleCommandOutput,
} from "./commands/StartCrawlerScheduleCommand";
import {
  StartDataQualityRuleRecommendationRunCommandInput,
  StartDataQualityRuleRecommendationRunCommandOutput,
} from "./commands/StartDataQualityRuleRecommendationRunCommand";
import {
  StartDataQualityRulesetEvaluationRunCommandInput,
  StartDataQualityRulesetEvaluationRunCommandOutput,
} from "./commands/StartDataQualityRulesetEvaluationRunCommand";
import {
  StartExportLabelsTaskRunCommandInput,
  StartExportLabelsTaskRunCommandOutput,
} from "./commands/StartExportLabelsTaskRunCommand";
import {
  StartImportLabelsTaskRunCommandInput,
  StartImportLabelsTaskRunCommandOutput,
} from "./commands/StartImportLabelsTaskRunCommand";
import { StartJobRunCommandInput, StartJobRunCommandOutput } from "./commands/StartJobRunCommand";
import {
  StartMLEvaluationTaskRunCommandInput,
  StartMLEvaluationTaskRunCommandOutput,
} from "./commands/StartMLEvaluationTaskRunCommand";
import {
  StartMLLabelingSetGenerationTaskRunCommandInput,
  StartMLLabelingSetGenerationTaskRunCommandOutput,
} from "./commands/StartMLLabelingSetGenerationTaskRunCommand";
import { StartTriggerCommandInput, StartTriggerCommandOutput } from "./commands/StartTriggerCommand";
import { StartWorkflowRunCommandInput, StartWorkflowRunCommandOutput } from "./commands/StartWorkflowRunCommand";
import {
  StopColumnStatisticsTaskRunCommandInput,
  StopColumnStatisticsTaskRunCommandOutput,
} from "./commands/StopColumnStatisticsTaskRunCommand";
import {
  StopColumnStatisticsTaskRunScheduleCommandInput,
  StopColumnStatisticsTaskRunScheduleCommandOutput,
} from "./commands/StopColumnStatisticsTaskRunScheduleCommand";
import { StopCrawlerCommandInput, StopCrawlerCommandOutput } from "./commands/StopCrawlerCommand";
import {
  StopCrawlerScheduleCommandInput,
  StopCrawlerScheduleCommandOutput,
} from "./commands/StopCrawlerScheduleCommand";
import { StopSessionCommandInput, StopSessionCommandOutput } from "./commands/StopSessionCommand";
import { StopTriggerCommandInput, StopTriggerCommandOutput } from "./commands/StopTriggerCommand";
import { StopWorkflowRunCommandInput, StopWorkflowRunCommandOutput } from "./commands/StopWorkflowRunCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TestConnectionCommandInput, TestConnectionCommandOutput } from "./commands/TestConnectionCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateBlueprintCommandInput, UpdateBlueprintCommandOutput } from "./commands/UpdateBlueprintCommand";
import { UpdateCatalogCommandInput, UpdateCatalogCommandOutput } from "./commands/UpdateCatalogCommand";
import { UpdateClassifierCommandInput, UpdateClassifierCommandOutput } from "./commands/UpdateClassifierCommand";
import {
  UpdateColumnStatisticsForPartitionCommandInput,
  UpdateColumnStatisticsForPartitionCommandOutput,
} from "./commands/UpdateColumnStatisticsForPartitionCommand";
import {
  UpdateColumnStatisticsForTableCommandInput,
  UpdateColumnStatisticsForTableCommandOutput,
} from "./commands/UpdateColumnStatisticsForTableCommand";
import {
  UpdateColumnStatisticsTaskSettingsCommandInput,
  UpdateColumnStatisticsTaskSettingsCommandOutput,
} from "./commands/UpdateColumnStatisticsTaskSettingsCommand";
import { UpdateConnectionCommandInput, UpdateConnectionCommandOutput } from "./commands/UpdateConnectionCommand";
import { UpdateCrawlerCommandInput, UpdateCrawlerCommandOutput } from "./commands/UpdateCrawlerCommand";
import {
  UpdateCrawlerScheduleCommandInput,
  UpdateCrawlerScheduleCommandOutput,
} from "./commands/UpdateCrawlerScheduleCommand";
import { UpdateDatabaseCommandInput, UpdateDatabaseCommandOutput } from "./commands/UpdateDatabaseCommand";
import {
  UpdateDataQualityRulesetCommandInput,
  UpdateDataQualityRulesetCommandOutput,
} from "./commands/UpdateDataQualityRulesetCommand";
import { UpdateDevEndpointCommandInput, UpdateDevEndpointCommandOutput } from "./commands/UpdateDevEndpointCommand";
import {
  UpdateGlueIdentityCenterConfigurationCommandInput,
  UpdateGlueIdentityCenterConfigurationCommandOutput,
} from "./commands/UpdateGlueIdentityCenterConfigurationCommand";
import {
  UpdateIntegrationResourcePropertyCommandInput,
  UpdateIntegrationResourcePropertyCommandOutput,
} from "./commands/UpdateIntegrationResourcePropertyCommand";
import {
  UpdateIntegrationTablePropertiesCommandInput,
  UpdateIntegrationTablePropertiesCommandOutput,
} from "./commands/UpdateIntegrationTablePropertiesCommand";
import { UpdateJobCommandInput, UpdateJobCommandOutput } from "./commands/UpdateJobCommand";
import {
  UpdateJobFromSourceControlCommandInput,
  UpdateJobFromSourceControlCommandOutput,
} from "./commands/UpdateJobFromSourceControlCommand";
import { UpdateMLTransformCommandInput, UpdateMLTransformCommandOutput } from "./commands/UpdateMLTransformCommand";
import { UpdatePartitionCommandInput, UpdatePartitionCommandOutput } from "./commands/UpdatePartitionCommand";
import { UpdateRegistryCommandInput, UpdateRegistryCommandOutput } from "./commands/UpdateRegistryCommand";
import { UpdateSchemaCommandInput, UpdateSchemaCommandOutput } from "./commands/UpdateSchemaCommand";
import {
  UpdateSourceControlFromJobCommandInput,
  UpdateSourceControlFromJobCommandOutput,
} from "./commands/UpdateSourceControlFromJobCommand";
import { UpdateTableCommandInput, UpdateTableCommandOutput } from "./commands/UpdateTableCommand";
import {
  UpdateTableOptimizerCommandInput,
  UpdateTableOptimizerCommandOutput,
} from "./commands/UpdateTableOptimizerCommand";
import { UpdateTriggerCommandInput, UpdateTriggerCommandOutput } from "./commands/UpdateTriggerCommand";
import { UpdateUsageProfileCommandInput, UpdateUsageProfileCommandOutput } from "./commands/UpdateUsageProfileCommand";
import {
  UpdateUserDefinedFunctionCommandInput,
  UpdateUserDefinedFunctionCommandOutput,
} from "./commands/UpdateUserDefinedFunctionCommand";
import { UpdateWorkflowCommandInput, UpdateWorkflowCommandOutput } from "./commands/UpdateWorkflowCommand";
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
  | BatchCreatePartitionCommandInput
  | BatchDeleteConnectionCommandInput
  | BatchDeletePartitionCommandInput
  | BatchDeleteTableCommandInput
  | BatchDeleteTableVersionCommandInput
  | BatchGetBlueprintsCommandInput
  | BatchGetCrawlersCommandInput
  | BatchGetCustomEntityTypesCommandInput
  | BatchGetDataQualityResultCommandInput
  | BatchGetDevEndpointsCommandInput
  | BatchGetJobsCommandInput
  | BatchGetPartitionCommandInput
  | BatchGetTableOptimizerCommandInput
  | BatchGetTriggersCommandInput
  | BatchGetWorkflowsCommandInput
  | BatchPutDataQualityStatisticAnnotationCommandInput
  | BatchStopJobRunCommandInput
  | BatchUpdatePartitionCommandInput
  | CancelDataQualityRuleRecommendationRunCommandInput
  | CancelDataQualityRulesetEvaluationRunCommandInput
  | CancelMLTaskRunCommandInput
  | CancelStatementCommandInput
  | CheckSchemaVersionValidityCommandInput
  | CreateBlueprintCommandInput
  | CreateCatalogCommandInput
  | CreateClassifierCommandInput
  | CreateColumnStatisticsTaskSettingsCommandInput
  | CreateConnectionCommandInput
  | CreateCrawlerCommandInput
  | CreateCustomEntityTypeCommandInput
  | CreateDataQualityRulesetCommandInput
  | CreateDatabaseCommandInput
  | CreateDevEndpointCommandInput
  | CreateGlueIdentityCenterConfigurationCommandInput
  | CreateIntegrationCommandInput
  | CreateIntegrationResourcePropertyCommandInput
  | CreateIntegrationTablePropertiesCommandInput
  | CreateJobCommandInput
  | CreateMLTransformCommandInput
  | CreatePartitionCommandInput
  | CreatePartitionIndexCommandInput
  | CreateRegistryCommandInput
  | CreateSchemaCommandInput
  | CreateScriptCommandInput
  | CreateSecurityConfigurationCommandInput
  | CreateSessionCommandInput
  | CreateTableCommandInput
  | CreateTableOptimizerCommandInput
  | CreateTriggerCommandInput
  | CreateUsageProfileCommandInput
  | CreateUserDefinedFunctionCommandInput
  | CreateWorkflowCommandInput
  | DeleteBlueprintCommandInput
  | DeleteCatalogCommandInput
  | DeleteClassifierCommandInput
  | DeleteColumnStatisticsForPartitionCommandInput
  | DeleteColumnStatisticsForTableCommandInput
  | DeleteColumnStatisticsTaskSettingsCommandInput
  | DeleteConnectionCommandInput
  | DeleteCrawlerCommandInput
  | DeleteCustomEntityTypeCommandInput
  | DeleteDataQualityRulesetCommandInput
  | DeleteDatabaseCommandInput
  | DeleteDevEndpointCommandInput
  | DeleteGlueIdentityCenterConfigurationCommandInput
  | DeleteIntegrationCommandInput
  | DeleteIntegrationResourcePropertyCommandInput
  | DeleteIntegrationTablePropertiesCommandInput
  | DeleteJobCommandInput
  | DeleteMLTransformCommandInput
  | DeletePartitionCommandInput
  | DeletePartitionIndexCommandInput
  | DeleteRegistryCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteSchemaCommandInput
  | DeleteSchemaVersionsCommandInput
  | DeleteSecurityConfigurationCommandInput
  | DeleteSessionCommandInput
  | DeleteTableCommandInput
  | DeleteTableOptimizerCommandInput
  | DeleteTableVersionCommandInput
  | DeleteTriggerCommandInput
  | DeleteUsageProfileCommandInput
  | DeleteUserDefinedFunctionCommandInput
  | DeleteWorkflowCommandInput
  | DescribeConnectionTypeCommandInput
  | DescribeEntityCommandInput
  | DescribeInboundIntegrationsCommandInput
  | DescribeIntegrationsCommandInput
  | GetBlueprintCommandInput
  | GetBlueprintRunCommandInput
  | GetBlueprintRunsCommandInput
  | GetCatalogCommandInput
  | GetCatalogImportStatusCommandInput
  | GetCatalogsCommandInput
  | GetClassifierCommandInput
  | GetClassifiersCommandInput
  | GetColumnStatisticsForPartitionCommandInput
  | GetColumnStatisticsForTableCommandInput
  | GetColumnStatisticsTaskRunCommandInput
  | GetColumnStatisticsTaskRunsCommandInput
  | GetColumnStatisticsTaskSettingsCommandInput
  | GetConnectionCommandInput
  | GetConnectionsCommandInput
  | GetCrawlerCommandInput
  | GetCrawlerMetricsCommandInput
  | GetCrawlersCommandInput
  | GetCustomEntityTypeCommandInput
  | GetDataCatalogEncryptionSettingsCommandInput
  | GetDataQualityModelCommandInput
  | GetDataQualityModelResultCommandInput
  | GetDataQualityResultCommandInput
  | GetDataQualityRuleRecommendationRunCommandInput
  | GetDataQualityRulesetCommandInput
  | GetDataQualityRulesetEvaluationRunCommandInput
  | GetDatabaseCommandInput
  | GetDatabasesCommandInput
  | GetDataflowGraphCommandInput
  | GetDevEndpointCommandInput
  | GetDevEndpointsCommandInput
  | GetEntityRecordsCommandInput
  | GetGlueIdentityCenterConfigurationCommandInput
  | GetIntegrationResourcePropertyCommandInput
  | GetIntegrationTablePropertiesCommandInput
  | GetJobBookmarkCommandInput
  | GetJobCommandInput
  | GetJobRunCommandInput
  | GetJobRunsCommandInput
  | GetJobsCommandInput
  | GetMLTaskRunCommandInput
  | GetMLTaskRunsCommandInput
  | GetMLTransformCommandInput
  | GetMLTransformsCommandInput
  | GetMappingCommandInput
  | GetPartitionCommandInput
  | GetPartitionIndexesCommandInput
  | GetPartitionsCommandInput
  | GetPlanCommandInput
  | GetRegistryCommandInput
  | GetResourcePoliciesCommandInput
  | GetResourcePolicyCommandInput
  | GetSchemaByDefinitionCommandInput
  | GetSchemaCommandInput
  | GetSchemaVersionCommandInput
  | GetSchemaVersionsDiffCommandInput
  | GetSecurityConfigurationCommandInput
  | GetSecurityConfigurationsCommandInput
  | GetSessionCommandInput
  | GetStatementCommandInput
  | GetTableCommandInput
  | GetTableOptimizerCommandInput
  | GetTableVersionCommandInput
  | GetTableVersionsCommandInput
  | GetTablesCommandInput
  | GetTagsCommandInput
  | GetTriggerCommandInput
  | GetTriggersCommandInput
  | GetUnfilteredPartitionMetadataCommandInput
  | GetUnfilteredPartitionsMetadataCommandInput
  | GetUnfilteredTableMetadataCommandInput
  | GetUsageProfileCommandInput
  | GetUserDefinedFunctionCommandInput
  | GetUserDefinedFunctionsCommandInput
  | GetWorkflowCommandInput
  | GetWorkflowRunCommandInput
  | GetWorkflowRunPropertiesCommandInput
  | GetWorkflowRunsCommandInput
  | ImportCatalogToGlueCommandInput
  | ListBlueprintsCommandInput
  | ListColumnStatisticsTaskRunsCommandInput
  | ListConnectionTypesCommandInput
  | ListCrawlersCommandInput
  | ListCrawlsCommandInput
  | ListCustomEntityTypesCommandInput
  | ListDataQualityResultsCommandInput
  | ListDataQualityRuleRecommendationRunsCommandInput
  | ListDataQualityRulesetEvaluationRunsCommandInput
  | ListDataQualityRulesetsCommandInput
  | ListDataQualityStatisticAnnotationsCommandInput
  | ListDataQualityStatisticsCommandInput
  | ListDevEndpointsCommandInput
  | ListEntitiesCommandInput
  | ListIntegrationResourcePropertiesCommandInput
  | ListJobsCommandInput
  | ListMLTransformsCommandInput
  | ListRegistriesCommandInput
  | ListSchemaVersionsCommandInput
  | ListSchemasCommandInput
  | ListSessionsCommandInput
  | ListStatementsCommandInput
  | ListTableOptimizerRunsCommandInput
  | ListTriggersCommandInput
  | ListUsageProfilesCommandInput
  | ListWorkflowsCommandInput
  | ModifyIntegrationCommandInput
  | PutDataCatalogEncryptionSettingsCommandInput
  | PutDataQualityProfileAnnotationCommandInput
  | PutResourcePolicyCommandInput
  | PutSchemaVersionMetadataCommandInput
  | PutWorkflowRunPropertiesCommandInput
  | QuerySchemaVersionMetadataCommandInput
  | RegisterSchemaVersionCommandInput
  | RemoveSchemaVersionMetadataCommandInput
  | ResetJobBookmarkCommandInput
  | ResumeWorkflowRunCommandInput
  | RunStatementCommandInput
  | SearchTablesCommandInput
  | StartBlueprintRunCommandInput
  | StartColumnStatisticsTaskRunCommandInput
  | StartColumnStatisticsTaskRunScheduleCommandInput
  | StartCrawlerCommandInput
  | StartCrawlerScheduleCommandInput
  | StartDataQualityRuleRecommendationRunCommandInput
  | StartDataQualityRulesetEvaluationRunCommandInput
  | StartExportLabelsTaskRunCommandInput
  | StartImportLabelsTaskRunCommandInput
  | StartJobRunCommandInput
  | StartMLEvaluationTaskRunCommandInput
  | StartMLLabelingSetGenerationTaskRunCommandInput
  | StartTriggerCommandInput
  | StartWorkflowRunCommandInput
  | StopColumnStatisticsTaskRunCommandInput
  | StopColumnStatisticsTaskRunScheduleCommandInput
  | StopCrawlerCommandInput
  | StopCrawlerScheduleCommandInput
  | StopSessionCommandInput
  | StopTriggerCommandInput
  | StopWorkflowRunCommandInput
  | TagResourceCommandInput
  | TestConnectionCommandInput
  | UntagResourceCommandInput
  | UpdateBlueprintCommandInput
  | UpdateCatalogCommandInput
  | UpdateClassifierCommandInput
  | UpdateColumnStatisticsForPartitionCommandInput
  | UpdateColumnStatisticsForTableCommandInput
  | UpdateColumnStatisticsTaskSettingsCommandInput
  | UpdateConnectionCommandInput
  | UpdateCrawlerCommandInput
  | UpdateCrawlerScheduleCommandInput
  | UpdateDataQualityRulesetCommandInput
  | UpdateDatabaseCommandInput
  | UpdateDevEndpointCommandInput
  | UpdateGlueIdentityCenterConfigurationCommandInput
  | UpdateIntegrationResourcePropertyCommandInput
  | UpdateIntegrationTablePropertiesCommandInput
  | UpdateJobCommandInput
  | UpdateJobFromSourceControlCommandInput
  | UpdateMLTransformCommandInput
  | UpdatePartitionCommandInput
  | UpdateRegistryCommandInput
  | UpdateSchemaCommandInput
  | UpdateSourceControlFromJobCommandInput
  | UpdateTableCommandInput
  | UpdateTableOptimizerCommandInput
  | UpdateTriggerCommandInput
  | UpdateUsageProfileCommandInput
  | UpdateUserDefinedFunctionCommandInput
  | UpdateWorkflowCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchCreatePartitionCommandOutput
  | BatchDeleteConnectionCommandOutput
  | BatchDeletePartitionCommandOutput
  | BatchDeleteTableCommandOutput
  | BatchDeleteTableVersionCommandOutput
  | BatchGetBlueprintsCommandOutput
  | BatchGetCrawlersCommandOutput
  | BatchGetCustomEntityTypesCommandOutput
  | BatchGetDataQualityResultCommandOutput
  | BatchGetDevEndpointsCommandOutput
  | BatchGetJobsCommandOutput
  | BatchGetPartitionCommandOutput
  | BatchGetTableOptimizerCommandOutput
  | BatchGetTriggersCommandOutput
  | BatchGetWorkflowsCommandOutput
  | BatchPutDataQualityStatisticAnnotationCommandOutput
  | BatchStopJobRunCommandOutput
  | BatchUpdatePartitionCommandOutput
  | CancelDataQualityRuleRecommendationRunCommandOutput
  | CancelDataQualityRulesetEvaluationRunCommandOutput
  | CancelMLTaskRunCommandOutput
  | CancelStatementCommandOutput
  | CheckSchemaVersionValidityCommandOutput
  | CreateBlueprintCommandOutput
  | CreateCatalogCommandOutput
  | CreateClassifierCommandOutput
  | CreateColumnStatisticsTaskSettingsCommandOutput
  | CreateConnectionCommandOutput
  | CreateCrawlerCommandOutput
  | CreateCustomEntityTypeCommandOutput
  | CreateDataQualityRulesetCommandOutput
  | CreateDatabaseCommandOutput
  | CreateDevEndpointCommandOutput
  | CreateGlueIdentityCenterConfigurationCommandOutput
  | CreateIntegrationCommandOutput
  | CreateIntegrationResourcePropertyCommandOutput
  | CreateIntegrationTablePropertiesCommandOutput
  | CreateJobCommandOutput
  | CreateMLTransformCommandOutput
  | CreatePartitionCommandOutput
  | CreatePartitionIndexCommandOutput
  | CreateRegistryCommandOutput
  | CreateSchemaCommandOutput
  | CreateScriptCommandOutput
  | CreateSecurityConfigurationCommandOutput
  | CreateSessionCommandOutput
  | CreateTableCommandOutput
  | CreateTableOptimizerCommandOutput
  | CreateTriggerCommandOutput
  | CreateUsageProfileCommandOutput
  | CreateUserDefinedFunctionCommandOutput
  | CreateWorkflowCommandOutput
  | DeleteBlueprintCommandOutput
  | DeleteCatalogCommandOutput
  | DeleteClassifierCommandOutput
  | DeleteColumnStatisticsForPartitionCommandOutput
  | DeleteColumnStatisticsForTableCommandOutput
  | DeleteColumnStatisticsTaskSettingsCommandOutput
  | DeleteConnectionCommandOutput
  | DeleteCrawlerCommandOutput
  | DeleteCustomEntityTypeCommandOutput
  | DeleteDataQualityRulesetCommandOutput
  | DeleteDatabaseCommandOutput
  | DeleteDevEndpointCommandOutput
  | DeleteGlueIdentityCenterConfigurationCommandOutput
  | DeleteIntegrationCommandOutput
  | DeleteIntegrationResourcePropertyCommandOutput
  | DeleteIntegrationTablePropertiesCommandOutput
  | DeleteJobCommandOutput
  | DeleteMLTransformCommandOutput
  | DeletePartitionCommandOutput
  | DeletePartitionIndexCommandOutput
  | DeleteRegistryCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteSchemaCommandOutput
  | DeleteSchemaVersionsCommandOutput
  | DeleteSecurityConfigurationCommandOutput
  | DeleteSessionCommandOutput
  | DeleteTableCommandOutput
  | DeleteTableOptimizerCommandOutput
  | DeleteTableVersionCommandOutput
  | DeleteTriggerCommandOutput
  | DeleteUsageProfileCommandOutput
  | DeleteUserDefinedFunctionCommandOutput
  | DeleteWorkflowCommandOutput
  | DescribeConnectionTypeCommandOutput
  | DescribeEntityCommandOutput
  | DescribeInboundIntegrationsCommandOutput
  | DescribeIntegrationsCommandOutput
  | GetBlueprintCommandOutput
  | GetBlueprintRunCommandOutput
  | GetBlueprintRunsCommandOutput
  | GetCatalogCommandOutput
  | GetCatalogImportStatusCommandOutput
  | GetCatalogsCommandOutput
  | GetClassifierCommandOutput
  | GetClassifiersCommandOutput
  | GetColumnStatisticsForPartitionCommandOutput
  | GetColumnStatisticsForTableCommandOutput
  | GetColumnStatisticsTaskRunCommandOutput
  | GetColumnStatisticsTaskRunsCommandOutput
  | GetColumnStatisticsTaskSettingsCommandOutput
  | GetConnectionCommandOutput
  | GetConnectionsCommandOutput
  | GetCrawlerCommandOutput
  | GetCrawlerMetricsCommandOutput
  | GetCrawlersCommandOutput
  | GetCustomEntityTypeCommandOutput
  | GetDataCatalogEncryptionSettingsCommandOutput
  | GetDataQualityModelCommandOutput
  | GetDataQualityModelResultCommandOutput
  | GetDataQualityResultCommandOutput
  | GetDataQualityRuleRecommendationRunCommandOutput
  | GetDataQualityRulesetCommandOutput
  | GetDataQualityRulesetEvaluationRunCommandOutput
  | GetDatabaseCommandOutput
  | GetDatabasesCommandOutput
  | GetDataflowGraphCommandOutput
  | GetDevEndpointCommandOutput
  | GetDevEndpointsCommandOutput
  | GetEntityRecordsCommandOutput
  | GetGlueIdentityCenterConfigurationCommandOutput
  | GetIntegrationResourcePropertyCommandOutput
  | GetIntegrationTablePropertiesCommandOutput
  | GetJobBookmarkCommandOutput
  | GetJobCommandOutput
  | GetJobRunCommandOutput
  | GetJobRunsCommandOutput
  | GetJobsCommandOutput
  | GetMLTaskRunCommandOutput
  | GetMLTaskRunsCommandOutput
  | GetMLTransformCommandOutput
  | GetMLTransformsCommandOutput
  | GetMappingCommandOutput
  | GetPartitionCommandOutput
  | GetPartitionIndexesCommandOutput
  | GetPartitionsCommandOutput
  | GetPlanCommandOutput
  | GetRegistryCommandOutput
  | GetResourcePoliciesCommandOutput
  | GetResourcePolicyCommandOutput
  | GetSchemaByDefinitionCommandOutput
  | GetSchemaCommandOutput
  | GetSchemaVersionCommandOutput
  | GetSchemaVersionsDiffCommandOutput
  | GetSecurityConfigurationCommandOutput
  | GetSecurityConfigurationsCommandOutput
  | GetSessionCommandOutput
  | GetStatementCommandOutput
  | GetTableCommandOutput
  | GetTableOptimizerCommandOutput
  | GetTableVersionCommandOutput
  | GetTableVersionsCommandOutput
  | GetTablesCommandOutput
  | GetTagsCommandOutput
  | GetTriggerCommandOutput
  | GetTriggersCommandOutput
  | GetUnfilteredPartitionMetadataCommandOutput
  | GetUnfilteredPartitionsMetadataCommandOutput
  | GetUnfilteredTableMetadataCommandOutput
  | GetUsageProfileCommandOutput
  | GetUserDefinedFunctionCommandOutput
  | GetUserDefinedFunctionsCommandOutput
  | GetWorkflowCommandOutput
  | GetWorkflowRunCommandOutput
  | GetWorkflowRunPropertiesCommandOutput
  | GetWorkflowRunsCommandOutput
  | ImportCatalogToGlueCommandOutput
  | ListBlueprintsCommandOutput
  | ListColumnStatisticsTaskRunsCommandOutput
  | ListConnectionTypesCommandOutput
  | ListCrawlersCommandOutput
  | ListCrawlsCommandOutput
  | ListCustomEntityTypesCommandOutput
  | ListDataQualityResultsCommandOutput
  | ListDataQualityRuleRecommendationRunsCommandOutput
  | ListDataQualityRulesetEvaluationRunsCommandOutput
  | ListDataQualityRulesetsCommandOutput
  | ListDataQualityStatisticAnnotationsCommandOutput
  | ListDataQualityStatisticsCommandOutput
  | ListDevEndpointsCommandOutput
  | ListEntitiesCommandOutput
  | ListIntegrationResourcePropertiesCommandOutput
  | ListJobsCommandOutput
  | ListMLTransformsCommandOutput
  | ListRegistriesCommandOutput
  | ListSchemaVersionsCommandOutput
  | ListSchemasCommandOutput
  | ListSessionsCommandOutput
  | ListStatementsCommandOutput
  | ListTableOptimizerRunsCommandOutput
  | ListTriggersCommandOutput
  | ListUsageProfilesCommandOutput
  | ListWorkflowsCommandOutput
  | ModifyIntegrationCommandOutput
  | PutDataCatalogEncryptionSettingsCommandOutput
  | PutDataQualityProfileAnnotationCommandOutput
  | PutResourcePolicyCommandOutput
  | PutSchemaVersionMetadataCommandOutput
  | PutWorkflowRunPropertiesCommandOutput
  | QuerySchemaVersionMetadataCommandOutput
  | RegisterSchemaVersionCommandOutput
  | RemoveSchemaVersionMetadataCommandOutput
  | ResetJobBookmarkCommandOutput
  | ResumeWorkflowRunCommandOutput
  | RunStatementCommandOutput
  | SearchTablesCommandOutput
  | StartBlueprintRunCommandOutput
  | StartColumnStatisticsTaskRunCommandOutput
  | StartColumnStatisticsTaskRunScheduleCommandOutput
  | StartCrawlerCommandOutput
  | StartCrawlerScheduleCommandOutput
  | StartDataQualityRuleRecommendationRunCommandOutput
  | StartDataQualityRulesetEvaluationRunCommandOutput
  | StartExportLabelsTaskRunCommandOutput
  | StartImportLabelsTaskRunCommandOutput
  | StartJobRunCommandOutput
  | StartMLEvaluationTaskRunCommandOutput
  | StartMLLabelingSetGenerationTaskRunCommandOutput
  | StartTriggerCommandOutput
  | StartWorkflowRunCommandOutput
  | StopColumnStatisticsTaskRunCommandOutput
  | StopColumnStatisticsTaskRunScheduleCommandOutput
  | StopCrawlerCommandOutput
  | StopCrawlerScheduleCommandOutput
  | StopSessionCommandOutput
  | StopTriggerCommandOutput
  | StopWorkflowRunCommandOutput
  | TagResourceCommandOutput
  | TestConnectionCommandOutput
  | UntagResourceCommandOutput
  | UpdateBlueprintCommandOutput
  | UpdateCatalogCommandOutput
  | UpdateClassifierCommandOutput
  | UpdateColumnStatisticsForPartitionCommandOutput
  | UpdateColumnStatisticsForTableCommandOutput
  | UpdateColumnStatisticsTaskSettingsCommandOutput
  | UpdateConnectionCommandOutput
  | UpdateCrawlerCommandOutput
  | UpdateCrawlerScheduleCommandOutput
  | UpdateDataQualityRulesetCommandOutput
  | UpdateDatabaseCommandOutput
  | UpdateDevEndpointCommandOutput
  | UpdateGlueIdentityCenterConfigurationCommandOutput
  | UpdateIntegrationResourcePropertyCommandOutput
  | UpdateIntegrationTablePropertiesCommandOutput
  | UpdateJobCommandOutput
  | UpdateJobFromSourceControlCommandOutput
  | UpdateMLTransformCommandOutput
  | UpdatePartitionCommandOutput
  | UpdateRegistryCommandOutput
  | UpdateSchemaCommandOutput
  | UpdateSourceControlFromJobCommandOutput
  | UpdateTableCommandOutput
  | UpdateTableOptimizerCommandOutput
  | UpdateTriggerCommandOutput
  | UpdateUsageProfileCommandOutput
  | UpdateUserDefinedFunctionCommandOutput
  | UpdateWorkflowCommandOutput;

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
export type GlueClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of GlueClient class constructor that set the region, credentials and other options.
 */
export interface GlueClientConfig extends GlueClientConfigType {}

/**
 * @public
 */
export type GlueClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of GlueClient class. This is resolved and normalized from the {@link GlueClientConfig | constructor configuration interface}.
 */
export interface GlueClientResolvedConfig extends GlueClientResolvedConfigType {}

/**
 * <fullname>Glue</fullname>
 *          <p>Defines the public endpoint for the Glue service.</p>
 * @public
 */
export class GlueClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  GlueClientResolvedConfig
> {
  /**
   * The resolved configuration of GlueClient class. This is resolved and normalized from the {@link GlueClientConfig | constructor configuration interface}.
   */
  readonly config: GlueClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<GlueClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultGlueHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: GlueClientResolvedConfig) =>
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
