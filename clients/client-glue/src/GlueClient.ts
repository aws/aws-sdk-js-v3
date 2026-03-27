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
  defaultGlueHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  BatchCreatePartitionCommandInput,
  BatchCreatePartitionCommandOutput,
} from "./commands/BatchCreatePartitionCommand";
import type {
  BatchDeleteConnectionCommandInput,
  BatchDeleteConnectionCommandOutput,
} from "./commands/BatchDeleteConnectionCommand";
import type {
  BatchDeletePartitionCommandInput,
  BatchDeletePartitionCommandOutput,
} from "./commands/BatchDeletePartitionCommand";
import type { BatchDeleteTableCommandInput, BatchDeleteTableCommandOutput } from "./commands/BatchDeleteTableCommand";
import type {
  BatchDeleteTableVersionCommandInput,
  BatchDeleteTableVersionCommandOutput,
} from "./commands/BatchDeleteTableVersionCommand";
import type {
  BatchGetBlueprintsCommandInput,
  BatchGetBlueprintsCommandOutput,
} from "./commands/BatchGetBlueprintsCommand";
import type { BatchGetCrawlersCommandInput, BatchGetCrawlersCommandOutput } from "./commands/BatchGetCrawlersCommand";
import type {
  BatchGetCustomEntityTypesCommandInput,
  BatchGetCustomEntityTypesCommandOutput,
} from "./commands/BatchGetCustomEntityTypesCommand";
import type {
  BatchGetDataQualityResultCommandInput,
  BatchGetDataQualityResultCommandOutput,
} from "./commands/BatchGetDataQualityResultCommand";
import type {
  BatchGetDevEndpointsCommandInput,
  BatchGetDevEndpointsCommandOutput,
} from "./commands/BatchGetDevEndpointsCommand";
import type { BatchGetJobsCommandInput, BatchGetJobsCommandOutput } from "./commands/BatchGetJobsCommand";
import type {
  BatchGetPartitionCommandInput,
  BatchGetPartitionCommandOutput,
} from "./commands/BatchGetPartitionCommand";
import type {
  BatchGetTableOptimizerCommandInput,
  BatchGetTableOptimizerCommandOutput,
} from "./commands/BatchGetTableOptimizerCommand";
import type { BatchGetTriggersCommandInput, BatchGetTriggersCommandOutput } from "./commands/BatchGetTriggersCommand";
import type {
  BatchGetWorkflowsCommandInput,
  BatchGetWorkflowsCommandOutput,
} from "./commands/BatchGetWorkflowsCommand";
import type {
  BatchPutDataQualityStatisticAnnotationCommandInput,
  BatchPutDataQualityStatisticAnnotationCommandOutput,
} from "./commands/BatchPutDataQualityStatisticAnnotationCommand";
import type { BatchStopJobRunCommandInput, BatchStopJobRunCommandOutput } from "./commands/BatchStopJobRunCommand";
import type {
  BatchUpdatePartitionCommandInput,
  BatchUpdatePartitionCommandOutput,
} from "./commands/BatchUpdatePartitionCommand";
import type {
  CancelDataQualityRuleRecommendationRunCommandInput,
  CancelDataQualityRuleRecommendationRunCommandOutput,
} from "./commands/CancelDataQualityRuleRecommendationRunCommand";
import type {
  CancelDataQualityRulesetEvaluationRunCommandInput,
  CancelDataQualityRulesetEvaluationRunCommandOutput,
} from "./commands/CancelDataQualityRulesetEvaluationRunCommand";
import type { CancelMLTaskRunCommandInput, CancelMLTaskRunCommandOutput } from "./commands/CancelMLTaskRunCommand";
import type { CancelStatementCommandInput, CancelStatementCommandOutput } from "./commands/CancelStatementCommand";
import type {
  CheckSchemaVersionValidityCommandInput,
  CheckSchemaVersionValidityCommandOutput,
} from "./commands/CheckSchemaVersionValidityCommand";
import type { CreateBlueprintCommandInput, CreateBlueprintCommandOutput } from "./commands/CreateBlueprintCommand";
import type { CreateCatalogCommandInput, CreateCatalogCommandOutput } from "./commands/CreateCatalogCommand";
import type { CreateClassifierCommandInput, CreateClassifierCommandOutput } from "./commands/CreateClassifierCommand";
import type {
  CreateColumnStatisticsTaskSettingsCommandInput,
  CreateColumnStatisticsTaskSettingsCommandOutput,
} from "./commands/CreateColumnStatisticsTaskSettingsCommand";
import type { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "./commands/CreateConnectionCommand";
import type { CreateCrawlerCommandInput, CreateCrawlerCommandOutput } from "./commands/CreateCrawlerCommand";
import type {
  CreateCustomEntityTypeCommandInput,
  CreateCustomEntityTypeCommandOutput,
} from "./commands/CreateCustomEntityTypeCommand";
import type { CreateDatabaseCommandInput, CreateDatabaseCommandOutput } from "./commands/CreateDatabaseCommand";
import type {
  CreateDataQualityRulesetCommandInput,
  CreateDataQualityRulesetCommandOutput,
} from "./commands/CreateDataQualityRulesetCommand";
import type {
  CreateDevEndpointCommandInput,
  CreateDevEndpointCommandOutput,
} from "./commands/CreateDevEndpointCommand";
import type {
  CreateGlueIdentityCenterConfigurationCommandInput,
  CreateGlueIdentityCenterConfigurationCommandOutput,
} from "./commands/CreateGlueIdentityCenterConfigurationCommand";
import type {
  CreateIntegrationCommandInput,
  CreateIntegrationCommandOutput,
} from "./commands/CreateIntegrationCommand";
import type {
  CreateIntegrationResourcePropertyCommandInput,
  CreateIntegrationResourcePropertyCommandOutput,
} from "./commands/CreateIntegrationResourcePropertyCommand";
import type {
  CreateIntegrationTablePropertiesCommandInput,
  CreateIntegrationTablePropertiesCommandOutput,
} from "./commands/CreateIntegrationTablePropertiesCommand";
import type { CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import type {
  CreateMLTransformCommandInput,
  CreateMLTransformCommandOutput,
} from "./commands/CreateMLTransformCommand";
import type { CreatePartitionCommandInput, CreatePartitionCommandOutput } from "./commands/CreatePartitionCommand";
import type {
  CreatePartitionIndexCommandInput,
  CreatePartitionIndexCommandOutput,
} from "./commands/CreatePartitionIndexCommand";
import type { CreateRegistryCommandInput, CreateRegistryCommandOutput } from "./commands/CreateRegistryCommand";
import type { CreateSchemaCommandInput, CreateSchemaCommandOutput } from "./commands/CreateSchemaCommand";
import type { CreateScriptCommandInput, CreateScriptCommandOutput } from "./commands/CreateScriptCommand";
import type {
  CreateSecurityConfigurationCommandInput,
  CreateSecurityConfigurationCommandOutput,
} from "./commands/CreateSecurityConfigurationCommand";
import type { CreateSessionCommandInput, CreateSessionCommandOutput } from "./commands/CreateSessionCommand";
import type { CreateTableCommandInput, CreateTableCommandOutput } from "./commands/CreateTableCommand";
import type {
  CreateTableOptimizerCommandInput,
  CreateTableOptimizerCommandOutput,
} from "./commands/CreateTableOptimizerCommand";
import type { CreateTriggerCommandInput, CreateTriggerCommandOutput } from "./commands/CreateTriggerCommand";
import type {
  CreateUsageProfileCommandInput,
  CreateUsageProfileCommandOutput,
} from "./commands/CreateUsageProfileCommand";
import type {
  CreateUserDefinedFunctionCommandInput,
  CreateUserDefinedFunctionCommandOutput,
} from "./commands/CreateUserDefinedFunctionCommand";
import type { CreateWorkflowCommandInput, CreateWorkflowCommandOutput } from "./commands/CreateWorkflowCommand";
import type { DeleteBlueprintCommandInput, DeleteBlueprintCommandOutput } from "./commands/DeleteBlueprintCommand";
import type { DeleteCatalogCommandInput, DeleteCatalogCommandOutput } from "./commands/DeleteCatalogCommand";
import type { DeleteClassifierCommandInput, DeleteClassifierCommandOutput } from "./commands/DeleteClassifierCommand";
import type {
  DeleteColumnStatisticsForPartitionCommandInput,
  DeleteColumnStatisticsForPartitionCommandOutput,
} from "./commands/DeleteColumnStatisticsForPartitionCommand";
import type {
  DeleteColumnStatisticsForTableCommandInput,
  DeleteColumnStatisticsForTableCommandOutput,
} from "./commands/DeleteColumnStatisticsForTableCommand";
import type {
  DeleteColumnStatisticsTaskSettingsCommandInput,
  DeleteColumnStatisticsTaskSettingsCommandOutput,
} from "./commands/DeleteColumnStatisticsTaskSettingsCommand";
import type { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "./commands/DeleteConnectionCommand";
import type {
  DeleteConnectionTypeCommandInput,
  DeleteConnectionTypeCommandOutput,
} from "./commands/DeleteConnectionTypeCommand";
import type { DeleteCrawlerCommandInput, DeleteCrawlerCommandOutput } from "./commands/DeleteCrawlerCommand";
import type {
  DeleteCustomEntityTypeCommandInput,
  DeleteCustomEntityTypeCommandOutput,
} from "./commands/DeleteCustomEntityTypeCommand";
import type { DeleteDatabaseCommandInput, DeleteDatabaseCommandOutput } from "./commands/DeleteDatabaseCommand";
import type {
  DeleteDataQualityRulesetCommandInput,
  DeleteDataQualityRulesetCommandOutput,
} from "./commands/DeleteDataQualityRulesetCommand";
import type {
  DeleteDevEndpointCommandInput,
  DeleteDevEndpointCommandOutput,
} from "./commands/DeleteDevEndpointCommand";
import type {
  DeleteGlueIdentityCenterConfigurationCommandInput,
  DeleteGlueIdentityCenterConfigurationCommandOutput,
} from "./commands/DeleteGlueIdentityCenterConfigurationCommand";
import type {
  DeleteIntegrationCommandInput,
  DeleteIntegrationCommandOutput,
} from "./commands/DeleteIntegrationCommand";
import type {
  DeleteIntegrationResourcePropertyCommandInput,
  DeleteIntegrationResourcePropertyCommandOutput,
} from "./commands/DeleteIntegrationResourcePropertyCommand";
import type {
  DeleteIntegrationTablePropertiesCommandInput,
  DeleteIntegrationTablePropertiesCommandOutput,
} from "./commands/DeleteIntegrationTablePropertiesCommand";
import type { DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand";
import type {
  DeleteMLTransformCommandInput,
  DeleteMLTransformCommandOutput,
} from "./commands/DeleteMLTransformCommand";
import type { DeletePartitionCommandInput, DeletePartitionCommandOutput } from "./commands/DeletePartitionCommand";
import type {
  DeletePartitionIndexCommandInput,
  DeletePartitionIndexCommandOutput,
} from "./commands/DeletePartitionIndexCommand";
import type { DeleteRegistryCommandInput, DeleteRegistryCommandOutput } from "./commands/DeleteRegistryCommand";
import type {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import type { DeleteSchemaCommandInput, DeleteSchemaCommandOutput } from "./commands/DeleteSchemaCommand";
import type {
  DeleteSchemaVersionsCommandInput,
  DeleteSchemaVersionsCommandOutput,
} from "./commands/DeleteSchemaVersionsCommand";
import type {
  DeleteSecurityConfigurationCommandInput,
  DeleteSecurityConfigurationCommandOutput,
} from "./commands/DeleteSecurityConfigurationCommand";
import type { DeleteSessionCommandInput, DeleteSessionCommandOutput } from "./commands/DeleteSessionCommand";
import type { DeleteTableCommandInput, DeleteTableCommandOutput } from "./commands/DeleteTableCommand";
import type {
  DeleteTableOptimizerCommandInput,
  DeleteTableOptimizerCommandOutput,
} from "./commands/DeleteTableOptimizerCommand";
import type {
  DeleteTableVersionCommandInput,
  DeleteTableVersionCommandOutput,
} from "./commands/DeleteTableVersionCommand";
import type { DeleteTriggerCommandInput, DeleteTriggerCommandOutput } from "./commands/DeleteTriggerCommand";
import type {
  DeleteUsageProfileCommandInput,
  DeleteUsageProfileCommandOutput,
} from "./commands/DeleteUsageProfileCommand";
import type {
  DeleteUserDefinedFunctionCommandInput,
  DeleteUserDefinedFunctionCommandOutput,
} from "./commands/DeleteUserDefinedFunctionCommand";
import type { DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput } from "./commands/DeleteWorkflowCommand";
import type {
  DescribeConnectionTypeCommandInput,
  DescribeConnectionTypeCommandOutput,
} from "./commands/DescribeConnectionTypeCommand";
import type { DescribeEntityCommandInput, DescribeEntityCommandOutput } from "./commands/DescribeEntityCommand";
import type {
  DescribeInboundIntegrationsCommandInput,
  DescribeInboundIntegrationsCommandOutput,
} from "./commands/DescribeInboundIntegrationsCommand";
import type {
  DescribeIntegrationsCommandInput,
  DescribeIntegrationsCommandOutput,
} from "./commands/DescribeIntegrationsCommand";
import type { GetBlueprintCommandInput, GetBlueprintCommandOutput } from "./commands/GetBlueprintCommand";
import type { GetBlueprintRunCommandInput, GetBlueprintRunCommandOutput } from "./commands/GetBlueprintRunCommand";
import type { GetBlueprintRunsCommandInput, GetBlueprintRunsCommandOutput } from "./commands/GetBlueprintRunsCommand";
import type { GetCatalogCommandInput, GetCatalogCommandOutput } from "./commands/GetCatalogCommand";
import type {
  GetCatalogImportStatusCommandInput,
  GetCatalogImportStatusCommandOutput,
} from "./commands/GetCatalogImportStatusCommand";
import type { GetCatalogsCommandInput, GetCatalogsCommandOutput } from "./commands/GetCatalogsCommand";
import type { GetClassifierCommandInput, GetClassifierCommandOutput } from "./commands/GetClassifierCommand";
import type { GetClassifiersCommandInput, GetClassifiersCommandOutput } from "./commands/GetClassifiersCommand";
import type {
  GetColumnStatisticsForPartitionCommandInput,
  GetColumnStatisticsForPartitionCommandOutput,
} from "./commands/GetColumnStatisticsForPartitionCommand";
import type {
  GetColumnStatisticsForTableCommandInput,
  GetColumnStatisticsForTableCommandOutput,
} from "./commands/GetColumnStatisticsForTableCommand";
import type {
  GetColumnStatisticsTaskRunCommandInput,
  GetColumnStatisticsTaskRunCommandOutput,
} from "./commands/GetColumnStatisticsTaskRunCommand";
import type {
  GetColumnStatisticsTaskRunsCommandInput,
  GetColumnStatisticsTaskRunsCommandOutput,
} from "./commands/GetColumnStatisticsTaskRunsCommand";
import type {
  GetColumnStatisticsTaskSettingsCommandInput,
  GetColumnStatisticsTaskSettingsCommandOutput,
} from "./commands/GetColumnStatisticsTaskSettingsCommand";
import type { GetConnectionCommandInput, GetConnectionCommandOutput } from "./commands/GetConnectionCommand";
import type { GetConnectionsCommandInput, GetConnectionsCommandOutput } from "./commands/GetConnectionsCommand";
import type { GetCrawlerCommandInput, GetCrawlerCommandOutput } from "./commands/GetCrawlerCommand";
import type {
  GetCrawlerMetricsCommandInput,
  GetCrawlerMetricsCommandOutput,
} from "./commands/GetCrawlerMetricsCommand";
import type { GetCrawlersCommandInput, GetCrawlersCommandOutput } from "./commands/GetCrawlersCommand";
import type {
  GetCustomEntityTypeCommandInput,
  GetCustomEntityTypeCommandOutput,
} from "./commands/GetCustomEntityTypeCommand";
import type { GetDatabaseCommandInput, GetDatabaseCommandOutput } from "./commands/GetDatabaseCommand";
import type { GetDatabasesCommandInput, GetDatabasesCommandOutput } from "./commands/GetDatabasesCommand";
import type {
  GetDataCatalogEncryptionSettingsCommandInput,
  GetDataCatalogEncryptionSettingsCommandOutput,
} from "./commands/GetDataCatalogEncryptionSettingsCommand";
import type { GetDataflowGraphCommandInput, GetDataflowGraphCommandOutput } from "./commands/GetDataflowGraphCommand";
import type {
  GetDataQualityModelCommandInput,
  GetDataQualityModelCommandOutput,
} from "./commands/GetDataQualityModelCommand";
import type {
  GetDataQualityModelResultCommandInput,
  GetDataQualityModelResultCommandOutput,
} from "./commands/GetDataQualityModelResultCommand";
import type {
  GetDataQualityResultCommandInput,
  GetDataQualityResultCommandOutput,
} from "./commands/GetDataQualityResultCommand";
import type {
  GetDataQualityRuleRecommendationRunCommandInput,
  GetDataQualityRuleRecommendationRunCommandOutput,
} from "./commands/GetDataQualityRuleRecommendationRunCommand";
import type {
  GetDataQualityRulesetCommandInput,
  GetDataQualityRulesetCommandOutput,
} from "./commands/GetDataQualityRulesetCommand";
import type {
  GetDataQualityRulesetEvaluationRunCommandInput,
  GetDataQualityRulesetEvaluationRunCommandOutput,
} from "./commands/GetDataQualityRulesetEvaluationRunCommand";
import type { GetDevEndpointCommandInput, GetDevEndpointCommandOutput } from "./commands/GetDevEndpointCommand";
import type { GetDevEndpointsCommandInput, GetDevEndpointsCommandOutput } from "./commands/GetDevEndpointsCommand";
import type { GetEntityRecordsCommandInput, GetEntityRecordsCommandOutput } from "./commands/GetEntityRecordsCommand";
import type {
  GetGlueIdentityCenterConfigurationCommandInput,
  GetGlueIdentityCenterConfigurationCommandOutput,
} from "./commands/GetGlueIdentityCenterConfigurationCommand";
import type {
  GetIntegrationResourcePropertyCommandInput,
  GetIntegrationResourcePropertyCommandOutput,
} from "./commands/GetIntegrationResourcePropertyCommand";
import type {
  GetIntegrationTablePropertiesCommandInput,
  GetIntegrationTablePropertiesCommandOutput,
} from "./commands/GetIntegrationTablePropertiesCommand";
import type { GetJobBookmarkCommandInput, GetJobBookmarkCommandOutput } from "./commands/GetJobBookmarkCommand";
import type { GetJobCommandInput, GetJobCommandOutput } from "./commands/GetJobCommand";
import type { GetJobRunCommandInput, GetJobRunCommandOutput } from "./commands/GetJobRunCommand";
import type { GetJobRunsCommandInput, GetJobRunsCommandOutput } from "./commands/GetJobRunsCommand";
import type { GetJobsCommandInput, GetJobsCommandOutput } from "./commands/GetJobsCommand";
import type { GetMappingCommandInput, GetMappingCommandOutput } from "./commands/GetMappingCommand";
import type {
  GetMaterializedViewRefreshTaskRunCommandInput,
  GetMaterializedViewRefreshTaskRunCommandOutput,
} from "./commands/GetMaterializedViewRefreshTaskRunCommand";
import type { GetMLTaskRunCommandInput, GetMLTaskRunCommandOutput } from "./commands/GetMLTaskRunCommand";
import type { GetMLTaskRunsCommandInput, GetMLTaskRunsCommandOutput } from "./commands/GetMLTaskRunsCommand";
import type { GetMLTransformCommandInput, GetMLTransformCommandOutput } from "./commands/GetMLTransformCommand";
import type { GetMLTransformsCommandInput, GetMLTransformsCommandOutput } from "./commands/GetMLTransformsCommand";
import type { GetPartitionCommandInput, GetPartitionCommandOutput } from "./commands/GetPartitionCommand";
import type {
  GetPartitionIndexesCommandInput,
  GetPartitionIndexesCommandOutput,
} from "./commands/GetPartitionIndexesCommand";
import type { GetPartitionsCommandInput, GetPartitionsCommandOutput } from "./commands/GetPartitionsCommand";
import type { GetPlanCommandInput, GetPlanCommandOutput } from "./commands/GetPlanCommand";
import type { GetRegistryCommandInput, GetRegistryCommandOutput } from "./commands/GetRegistryCommand";
import type {
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput,
} from "./commands/GetResourcePoliciesCommand";
import type {
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import type {
  GetSchemaByDefinitionCommandInput,
  GetSchemaByDefinitionCommandOutput,
} from "./commands/GetSchemaByDefinitionCommand";
import type { GetSchemaCommandInput, GetSchemaCommandOutput } from "./commands/GetSchemaCommand";
import type { GetSchemaVersionCommandInput, GetSchemaVersionCommandOutput } from "./commands/GetSchemaVersionCommand";
import type {
  GetSchemaVersionsDiffCommandInput,
  GetSchemaVersionsDiffCommandOutput,
} from "./commands/GetSchemaVersionsDiffCommand";
import type {
  GetSecurityConfigurationCommandInput,
  GetSecurityConfigurationCommandOutput,
} from "./commands/GetSecurityConfigurationCommand";
import type {
  GetSecurityConfigurationsCommandInput,
  GetSecurityConfigurationsCommandOutput,
} from "./commands/GetSecurityConfigurationsCommand";
import type { GetSessionCommandInput, GetSessionCommandOutput } from "./commands/GetSessionCommand";
import type { GetStatementCommandInput, GetStatementCommandOutput } from "./commands/GetStatementCommand";
import type { GetTableCommandInput, GetTableCommandOutput } from "./commands/GetTableCommand";
import type {
  GetTableOptimizerCommandInput,
  GetTableOptimizerCommandOutput,
} from "./commands/GetTableOptimizerCommand";
import type { GetTablesCommandInput, GetTablesCommandOutput } from "./commands/GetTablesCommand";
import type { GetTableVersionCommandInput, GetTableVersionCommandOutput } from "./commands/GetTableVersionCommand";
import type { GetTableVersionsCommandInput, GetTableVersionsCommandOutput } from "./commands/GetTableVersionsCommand";
import type { GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand";
import type { GetTriggerCommandInput, GetTriggerCommandOutput } from "./commands/GetTriggerCommand";
import type { GetTriggersCommandInput, GetTriggersCommandOutput } from "./commands/GetTriggersCommand";
import type {
  GetUnfilteredPartitionMetadataCommandInput,
  GetUnfilteredPartitionMetadataCommandOutput,
} from "./commands/GetUnfilteredPartitionMetadataCommand";
import type {
  GetUnfilteredPartitionsMetadataCommandInput,
  GetUnfilteredPartitionsMetadataCommandOutput,
} from "./commands/GetUnfilteredPartitionsMetadataCommand";
import type {
  GetUnfilteredTableMetadataCommandInput,
  GetUnfilteredTableMetadataCommandOutput,
} from "./commands/GetUnfilteredTableMetadataCommand";
import type { GetUsageProfileCommandInput, GetUsageProfileCommandOutput } from "./commands/GetUsageProfileCommand";
import type {
  GetUserDefinedFunctionCommandInput,
  GetUserDefinedFunctionCommandOutput,
} from "./commands/GetUserDefinedFunctionCommand";
import type {
  GetUserDefinedFunctionsCommandInput,
  GetUserDefinedFunctionsCommandOutput,
} from "./commands/GetUserDefinedFunctionsCommand";
import type { GetWorkflowCommandInput, GetWorkflowCommandOutput } from "./commands/GetWorkflowCommand";
import type { GetWorkflowRunCommandInput, GetWorkflowRunCommandOutput } from "./commands/GetWorkflowRunCommand";
import type {
  GetWorkflowRunPropertiesCommandInput,
  GetWorkflowRunPropertiesCommandOutput,
} from "./commands/GetWorkflowRunPropertiesCommand";
import type { GetWorkflowRunsCommandInput, GetWorkflowRunsCommandOutput } from "./commands/GetWorkflowRunsCommand";
import type {
  ImportCatalogToGlueCommandInput,
  ImportCatalogToGlueCommandOutput,
} from "./commands/ImportCatalogToGlueCommand";
import type { ListBlueprintsCommandInput, ListBlueprintsCommandOutput } from "./commands/ListBlueprintsCommand";
import type {
  ListColumnStatisticsTaskRunsCommandInput,
  ListColumnStatisticsTaskRunsCommandOutput,
} from "./commands/ListColumnStatisticsTaskRunsCommand";
import type {
  ListConnectionTypesCommandInput,
  ListConnectionTypesCommandOutput,
} from "./commands/ListConnectionTypesCommand";
import type { ListCrawlersCommandInput, ListCrawlersCommandOutput } from "./commands/ListCrawlersCommand";
import type { ListCrawlsCommandInput, ListCrawlsCommandOutput } from "./commands/ListCrawlsCommand";
import type {
  ListCustomEntityTypesCommandInput,
  ListCustomEntityTypesCommandOutput,
} from "./commands/ListCustomEntityTypesCommand";
import type {
  ListDataQualityResultsCommandInput,
  ListDataQualityResultsCommandOutput,
} from "./commands/ListDataQualityResultsCommand";
import type {
  ListDataQualityRuleRecommendationRunsCommandInput,
  ListDataQualityRuleRecommendationRunsCommandOutput,
} from "./commands/ListDataQualityRuleRecommendationRunsCommand";
import type {
  ListDataQualityRulesetEvaluationRunsCommandInput,
  ListDataQualityRulesetEvaluationRunsCommandOutput,
} from "./commands/ListDataQualityRulesetEvaluationRunsCommand";
import type {
  ListDataQualityRulesetsCommandInput,
  ListDataQualityRulesetsCommandOutput,
} from "./commands/ListDataQualityRulesetsCommand";
import type {
  ListDataQualityStatisticAnnotationsCommandInput,
  ListDataQualityStatisticAnnotationsCommandOutput,
} from "./commands/ListDataQualityStatisticAnnotationsCommand";
import type {
  ListDataQualityStatisticsCommandInput,
  ListDataQualityStatisticsCommandOutput,
} from "./commands/ListDataQualityStatisticsCommand";
import type { ListDevEndpointsCommandInput, ListDevEndpointsCommandOutput } from "./commands/ListDevEndpointsCommand";
import type { ListEntitiesCommandInput, ListEntitiesCommandOutput } from "./commands/ListEntitiesCommand";
import type {
  ListIntegrationResourcePropertiesCommandInput,
  ListIntegrationResourcePropertiesCommandOutput,
} from "./commands/ListIntegrationResourcePropertiesCommand";
import type { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import type {
  ListMaterializedViewRefreshTaskRunsCommandInput,
  ListMaterializedViewRefreshTaskRunsCommandOutput,
} from "./commands/ListMaterializedViewRefreshTaskRunsCommand";
import type { ListMLTransformsCommandInput, ListMLTransformsCommandOutput } from "./commands/ListMLTransformsCommand";
import type { ListRegistriesCommandInput, ListRegistriesCommandOutput } from "./commands/ListRegistriesCommand";
import type { ListSchemasCommandInput, ListSchemasCommandOutput } from "./commands/ListSchemasCommand";
import type {
  ListSchemaVersionsCommandInput,
  ListSchemaVersionsCommandOutput,
} from "./commands/ListSchemaVersionsCommand";
import type { ListSessionsCommandInput, ListSessionsCommandOutput } from "./commands/ListSessionsCommand";
import type { ListStatementsCommandInput, ListStatementsCommandOutput } from "./commands/ListStatementsCommand";
import type {
  ListTableOptimizerRunsCommandInput,
  ListTableOptimizerRunsCommandOutput,
} from "./commands/ListTableOptimizerRunsCommand";
import type { ListTriggersCommandInput, ListTriggersCommandOutput } from "./commands/ListTriggersCommand";
import type {
  ListUsageProfilesCommandInput,
  ListUsageProfilesCommandOutput,
} from "./commands/ListUsageProfilesCommand";
import type { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "./commands/ListWorkflowsCommand";
import type {
  ModifyIntegrationCommandInput,
  ModifyIntegrationCommandOutput,
} from "./commands/ModifyIntegrationCommand";
import type {
  PutDataCatalogEncryptionSettingsCommandInput,
  PutDataCatalogEncryptionSettingsCommandOutput,
} from "./commands/PutDataCatalogEncryptionSettingsCommand";
import type {
  PutDataQualityProfileAnnotationCommandInput,
  PutDataQualityProfileAnnotationCommandOutput,
} from "./commands/PutDataQualityProfileAnnotationCommand";
import type {
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import type {
  PutSchemaVersionMetadataCommandInput,
  PutSchemaVersionMetadataCommandOutput,
} from "./commands/PutSchemaVersionMetadataCommand";
import type {
  PutWorkflowRunPropertiesCommandInput,
  PutWorkflowRunPropertiesCommandOutput,
} from "./commands/PutWorkflowRunPropertiesCommand";
import type {
  QuerySchemaVersionMetadataCommandInput,
  QuerySchemaVersionMetadataCommandOutput,
} from "./commands/QuerySchemaVersionMetadataCommand";
import type {
  RegisterConnectionTypeCommandInput,
  RegisterConnectionTypeCommandOutput,
} from "./commands/RegisterConnectionTypeCommand";
import type {
  RegisterSchemaVersionCommandInput,
  RegisterSchemaVersionCommandOutput,
} from "./commands/RegisterSchemaVersionCommand";
import type {
  RemoveSchemaVersionMetadataCommandInput,
  RemoveSchemaVersionMetadataCommandOutput,
} from "./commands/RemoveSchemaVersionMetadataCommand";
import type { ResetJobBookmarkCommandInput, ResetJobBookmarkCommandOutput } from "./commands/ResetJobBookmarkCommand";
import type {
  ResumeWorkflowRunCommandInput,
  ResumeWorkflowRunCommandOutput,
} from "./commands/ResumeWorkflowRunCommand";
import type { RunStatementCommandInput, RunStatementCommandOutput } from "./commands/RunStatementCommand";
import type { SearchTablesCommandInput, SearchTablesCommandOutput } from "./commands/SearchTablesCommand";
import type {
  StartBlueprintRunCommandInput,
  StartBlueprintRunCommandOutput,
} from "./commands/StartBlueprintRunCommand";
import type {
  StartColumnStatisticsTaskRunCommandInput,
  StartColumnStatisticsTaskRunCommandOutput,
} from "./commands/StartColumnStatisticsTaskRunCommand";
import type {
  StartColumnStatisticsTaskRunScheduleCommandInput,
  StartColumnStatisticsTaskRunScheduleCommandOutput,
} from "./commands/StartColumnStatisticsTaskRunScheduleCommand";
import type { StartCrawlerCommandInput, StartCrawlerCommandOutput } from "./commands/StartCrawlerCommand";
import type {
  StartCrawlerScheduleCommandInput,
  StartCrawlerScheduleCommandOutput,
} from "./commands/StartCrawlerScheduleCommand";
import type {
  StartDataQualityRuleRecommendationRunCommandInput,
  StartDataQualityRuleRecommendationRunCommandOutput,
} from "./commands/StartDataQualityRuleRecommendationRunCommand";
import type {
  StartDataQualityRulesetEvaluationRunCommandInput,
  StartDataQualityRulesetEvaluationRunCommandOutput,
} from "./commands/StartDataQualityRulesetEvaluationRunCommand";
import type {
  StartExportLabelsTaskRunCommandInput,
  StartExportLabelsTaskRunCommandOutput,
} from "./commands/StartExportLabelsTaskRunCommand";
import type {
  StartImportLabelsTaskRunCommandInput,
  StartImportLabelsTaskRunCommandOutput,
} from "./commands/StartImportLabelsTaskRunCommand";
import type { StartJobRunCommandInput, StartJobRunCommandOutput } from "./commands/StartJobRunCommand";
import type {
  StartMaterializedViewRefreshTaskRunCommandInput,
  StartMaterializedViewRefreshTaskRunCommandOutput,
} from "./commands/StartMaterializedViewRefreshTaskRunCommand";
import type {
  StartMLEvaluationTaskRunCommandInput,
  StartMLEvaluationTaskRunCommandOutput,
} from "./commands/StartMLEvaluationTaskRunCommand";
import type {
  StartMLLabelingSetGenerationTaskRunCommandInput,
  StartMLLabelingSetGenerationTaskRunCommandOutput,
} from "./commands/StartMLLabelingSetGenerationTaskRunCommand";
import type { StartTriggerCommandInput, StartTriggerCommandOutput } from "./commands/StartTriggerCommand";
import type { StartWorkflowRunCommandInput, StartWorkflowRunCommandOutput } from "./commands/StartWorkflowRunCommand";
import type {
  StopColumnStatisticsTaskRunCommandInput,
  StopColumnStatisticsTaskRunCommandOutput,
} from "./commands/StopColumnStatisticsTaskRunCommand";
import type {
  StopColumnStatisticsTaskRunScheduleCommandInput,
  StopColumnStatisticsTaskRunScheduleCommandOutput,
} from "./commands/StopColumnStatisticsTaskRunScheduleCommand";
import type { StopCrawlerCommandInput, StopCrawlerCommandOutput } from "./commands/StopCrawlerCommand";
import type {
  StopCrawlerScheduleCommandInput,
  StopCrawlerScheduleCommandOutput,
} from "./commands/StopCrawlerScheduleCommand";
import type {
  StopMaterializedViewRefreshTaskRunCommandInput,
  StopMaterializedViewRefreshTaskRunCommandOutput,
} from "./commands/StopMaterializedViewRefreshTaskRunCommand";
import type { StopSessionCommandInput, StopSessionCommandOutput } from "./commands/StopSessionCommand";
import type { StopTriggerCommandInput, StopTriggerCommandOutput } from "./commands/StopTriggerCommand";
import type { StopWorkflowRunCommandInput, StopWorkflowRunCommandOutput } from "./commands/StopWorkflowRunCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { TestConnectionCommandInput, TestConnectionCommandOutput } from "./commands/TestConnectionCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateBlueprintCommandInput, UpdateBlueprintCommandOutput } from "./commands/UpdateBlueprintCommand";
import type { UpdateCatalogCommandInput, UpdateCatalogCommandOutput } from "./commands/UpdateCatalogCommand";
import type { UpdateClassifierCommandInput, UpdateClassifierCommandOutput } from "./commands/UpdateClassifierCommand";
import type {
  UpdateColumnStatisticsForPartitionCommandInput,
  UpdateColumnStatisticsForPartitionCommandOutput,
} from "./commands/UpdateColumnStatisticsForPartitionCommand";
import type {
  UpdateColumnStatisticsForTableCommandInput,
  UpdateColumnStatisticsForTableCommandOutput,
} from "./commands/UpdateColumnStatisticsForTableCommand";
import type {
  UpdateColumnStatisticsTaskSettingsCommandInput,
  UpdateColumnStatisticsTaskSettingsCommandOutput,
} from "./commands/UpdateColumnStatisticsTaskSettingsCommand";
import type { UpdateConnectionCommandInput, UpdateConnectionCommandOutput } from "./commands/UpdateConnectionCommand";
import type { UpdateCrawlerCommandInput, UpdateCrawlerCommandOutput } from "./commands/UpdateCrawlerCommand";
import type {
  UpdateCrawlerScheduleCommandInput,
  UpdateCrawlerScheduleCommandOutput,
} from "./commands/UpdateCrawlerScheduleCommand";
import type { UpdateDatabaseCommandInput, UpdateDatabaseCommandOutput } from "./commands/UpdateDatabaseCommand";
import type {
  UpdateDataQualityRulesetCommandInput,
  UpdateDataQualityRulesetCommandOutput,
} from "./commands/UpdateDataQualityRulesetCommand";
import type {
  UpdateDevEndpointCommandInput,
  UpdateDevEndpointCommandOutput,
} from "./commands/UpdateDevEndpointCommand";
import type {
  UpdateGlueIdentityCenterConfigurationCommandInput,
  UpdateGlueIdentityCenterConfigurationCommandOutput,
} from "./commands/UpdateGlueIdentityCenterConfigurationCommand";
import type {
  UpdateIntegrationResourcePropertyCommandInput,
  UpdateIntegrationResourcePropertyCommandOutput,
} from "./commands/UpdateIntegrationResourcePropertyCommand";
import type {
  UpdateIntegrationTablePropertiesCommandInput,
  UpdateIntegrationTablePropertiesCommandOutput,
} from "./commands/UpdateIntegrationTablePropertiesCommand";
import type { UpdateJobCommandInput, UpdateJobCommandOutput } from "./commands/UpdateJobCommand";
import type {
  UpdateJobFromSourceControlCommandInput,
  UpdateJobFromSourceControlCommandOutput,
} from "./commands/UpdateJobFromSourceControlCommand";
import type {
  UpdateMLTransformCommandInput,
  UpdateMLTransformCommandOutput,
} from "./commands/UpdateMLTransformCommand";
import type { UpdatePartitionCommandInput, UpdatePartitionCommandOutput } from "./commands/UpdatePartitionCommand";
import type { UpdateRegistryCommandInput, UpdateRegistryCommandOutput } from "./commands/UpdateRegistryCommand";
import type { UpdateSchemaCommandInput, UpdateSchemaCommandOutput } from "./commands/UpdateSchemaCommand";
import type {
  UpdateSourceControlFromJobCommandInput,
  UpdateSourceControlFromJobCommandOutput,
} from "./commands/UpdateSourceControlFromJobCommand";
import type { UpdateTableCommandInput, UpdateTableCommandOutput } from "./commands/UpdateTableCommand";
import type {
  UpdateTableOptimizerCommandInput,
  UpdateTableOptimizerCommandOutput,
} from "./commands/UpdateTableOptimizerCommand";
import type { UpdateTriggerCommandInput, UpdateTriggerCommandOutput } from "./commands/UpdateTriggerCommand";
import type {
  UpdateUsageProfileCommandInput,
  UpdateUsageProfileCommandOutput,
} from "./commands/UpdateUsageProfileCommand";
import type {
  UpdateUserDefinedFunctionCommandInput,
  UpdateUserDefinedFunctionCommandOutput,
} from "./commands/UpdateUserDefinedFunctionCommand";
import type { UpdateWorkflowCommandInput, UpdateWorkflowCommandOutput } from "./commands/UpdateWorkflowCommand";
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
  | DeleteConnectionTypeCommandInput
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
  | GetMaterializedViewRefreshTaskRunCommandInput
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
  | ListMaterializedViewRefreshTaskRunsCommandInput
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
  | RegisterConnectionTypeCommandInput
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
  | StartMaterializedViewRefreshTaskRunCommandInput
  | StartTriggerCommandInput
  | StartWorkflowRunCommandInput
  | StopColumnStatisticsTaskRunCommandInput
  | StopColumnStatisticsTaskRunScheduleCommandInput
  | StopCrawlerCommandInput
  | StopCrawlerScheduleCommandInput
  | StopMaterializedViewRefreshTaskRunCommandInput
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
  | DeleteConnectionTypeCommandOutput
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
  | GetMaterializedViewRefreshTaskRunCommandOutput
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
  | ListMaterializedViewRefreshTaskRunsCommandOutput
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
  | RegisterConnectionTypeCommandOutput
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
  | StartMaterializedViewRefreshTaskRunCommandOutput
  | StartTriggerCommandOutput
  | StartWorkflowRunCommandOutput
  | StopColumnStatisticsTaskRunCommandOutput
  | StopColumnStatisticsTaskRunScheduleCommandOutput
  | StopCrawlerCommandOutput
  | StopCrawlerScheduleCommandOutput
  | StopMaterializedViewRefreshTaskRunCommandOutput
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
