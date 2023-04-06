// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  GetApplicationComponentDetailsCommandInput,
  GetApplicationComponentDetailsCommandOutput,
} from "../commands/GetApplicationComponentDetailsCommand";
import {
  GetApplicationComponentStrategiesCommandInput,
  GetApplicationComponentStrategiesCommandOutput,
} from "../commands/GetApplicationComponentStrategiesCommand";
import { GetAssessmentCommandInput, GetAssessmentCommandOutput } from "../commands/GetAssessmentCommand";
import { GetImportFileTaskCommandInput, GetImportFileTaskCommandOutput } from "../commands/GetImportFileTaskCommand";
import {
  GetLatestAssessmentIdCommandInput,
  GetLatestAssessmentIdCommandOutput,
} from "../commands/GetLatestAssessmentIdCommand";
import {
  GetPortfolioPreferencesCommandInput,
  GetPortfolioPreferencesCommandOutput,
} from "../commands/GetPortfolioPreferencesCommand";
import {
  GetPortfolioSummaryCommandInput,
  GetPortfolioSummaryCommandOutput,
} from "../commands/GetPortfolioSummaryCommand";
import {
  GetRecommendationReportDetailsCommandInput,
  GetRecommendationReportDetailsCommandOutput,
} from "../commands/GetRecommendationReportDetailsCommand";
import { GetServerDetailsCommandInput, GetServerDetailsCommandOutput } from "../commands/GetServerDetailsCommand";
import {
  GetServerStrategiesCommandInput,
  GetServerStrategiesCommandOutput,
} from "../commands/GetServerStrategiesCommand";
import {
  ListApplicationComponentsCommandInput,
  ListApplicationComponentsCommandOutput,
} from "../commands/ListApplicationComponentsCommand";
import { ListCollectorsCommandInput, ListCollectorsCommandOutput } from "../commands/ListCollectorsCommand";
import { ListImportFileTaskCommandInput, ListImportFileTaskCommandOutput } from "../commands/ListImportFileTaskCommand";
import { ListServersCommandInput, ListServersCommandOutput } from "../commands/ListServersCommand";
import {
  PutPortfolioPreferencesCommandInput,
  PutPortfolioPreferencesCommandOutput,
} from "../commands/PutPortfolioPreferencesCommand";
import { StartAssessmentCommandInput, StartAssessmentCommandOutput } from "../commands/StartAssessmentCommand";
import {
  StartImportFileTaskCommandInput,
  StartImportFileTaskCommandOutput,
} from "../commands/StartImportFileTaskCommand";
import {
  StartRecommendationReportGenerationCommandInput,
  StartRecommendationReportGenerationCommandOutput,
} from "../commands/StartRecommendationReportGenerationCommand";
import { StopAssessmentCommandInput, StopAssessmentCommandOutput } from "../commands/StopAssessmentCommand";
import {
  UpdateApplicationComponentConfigCommandInput,
  UpdateApplicationComponentConfigCommandOutput,
} from "../commands/UpdateApplicationComponentConfigCommand";
import { UpdateServerConfigCommandInput, UpdateServerConfigCommandOutput } from "../commands/UpdateServerConfigCommand";
import { MigrationHubStrategyServiceException as __BaseException } from "../models/MigrationHubStrategyServiceException";
import {
  AccessDeniedException,
  AnalysisStatusUnion,
  AnalyzerNameUnion,
  AntipatternReportResult,
  AntipatternSeveritySummary,
  ApplicationComponentDetail,
  ApplicationComponentStatusSummary,
  ApplicationComponentStrategy,
  ApplicationComponentSummary,
  ApplicationPreferences,
  AppUnitError,
  AssessmentSummary,
  AssessmentTarget,
  AssociatedApplication,
  AwsManagedResources,
  AwsManagedTargetDestination,
  BusinessGoals,
  Collector,
  ConfigurationSummary,
  ConflictException,
  DatabaseConfigDetail,
  DatabaseMigrationPreference,
  DatabasePreferences,
  DataCollectionDetails,
  DependencyException,
  Group,
  Heterogeneous,
  HeterogeneousTargetDatabaseEngine,
  Homogeneous,
  HomogeneousTargetDatabaseEngine,
  ImportFileTaskInformation,
  InternalServerException,
  IPAddressBasedRemoteInfo,
  ManagementPreference,
  NetworkInfo,
  NoDatabaseMigrationPreference,
  NoManagementPreference,
  NoPreferenceTargetDestination,
  OSInfo,
  PipelineInfo,
  PrioritizeBusinessGoals,
  RecommendationReportDetails,
  RecommendationSet,
  RemoteSourceCodeAnalysisServerInfo,
  ResourceNotFoundException,
  Result,
  S3Object,
  SelfManageResources,
  SelfManageTargetDestination,
  ServerDetail,
  ServerError,
  ServerStatusSummary,
  ServerStrategy,
  ServerSummary,
  ServiceLinkedRoleLockClientException,
  ServiceQuotaExceededException,
  SourceCode,
  SourceCodeRepository,
  StrategyOption,
  StrategySummary,
  SystemInfo,
  TargetDatabaseEngine,
  ThrottlingException,
  TransformationTool,
  ValidationException,
  VcenterBasedRemoteInfo,
  VersionControlInfo,
} from "../models/models_0";

/**
 * serializeAws_restJson1GetApplicationComponentDetailsCommand
 */
export const se_GetApplicationComponentDetailsCommand = async (
  input: GetApplicationComponentDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/get-applicationcomponent-details/{applicationComponentId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "applicationComponentId",
    () => input.applicationComponentId!,
    "{applicationComponentId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetApplicationComponentStrategiesCommand
 */
export const se_GetApplicationComponentStrategiesCommand = async (
  input: GetApplicationComponentStrategiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/get-applicationcomponent-strategies/{applicationComponentId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "applicationComponentId",
    () => input.applicationComponentId!,
    "{applicationComponentId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetAssessmentCommand
 */
export const se_GetAssessmentCommand = async (
  input: GetAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/get-assessment/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetImportFileTaskCommand
 */
export const se_GetImportFileTaskCommand = async (
  input: GetImportFileTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/get-import-file-task/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetLatestAssessmentIdCommand
 */
export const se_GetLatestAssessmentIdCommand = async (
  input: GetLatestAssessmentIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/get-latest-assessment-id";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetPortfolioPreferencesCommand
 */
export const se_GetPortfolioPreferencesCommand = async (
  input: GetPortfolioPreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/get-portfolio-preferences";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetPortfolioSummaryCommand
 */
export const se_GetPortfolioSummaryCommand = async (
  input: GetPortfolioSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/get-portfolio-summary";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetRecommendationReportDetailsCommand
 */
export const se_GetRecommendationReportDetailsCommand = async (
  input: GetRecommendationReportDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/get-recommendation-report-details/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetServerDetailsCommand
 */
export const se_GetServerDetailsCommand = async (
  input: GetServerDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/get-server-details/{serverId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "serverId", () => input.serverId!, "{serverId}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetServerStrategiesCommand
 */
export const se_GetServerStrategiesCommand = async (
  input: GetServerStrategiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/get-server-strategies/{serverId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "serverId", () => input.serverId!, "{serverId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListApplicationComponentsCommand
 */
export const se_ListApplicationComponentsCommand = async (
  input: ListApplicationComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-applicationcomponents";
  let body: any;
  body = JSON.stringify({
    ...(input.applicationComponentCriteria != null && {
      applicationComponentCriteria: input.applicationComponentCriteria,
    }),
    ...(input.filterValue != null && { filterValue: input.filterValue }),
    ...(input.groupIdFilter != null && { groupIdFilter: se_GroupIds(input.groupIdFilter, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sort != null && { sort: input.sort }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListCollectorsCommand
 */
export const se_ListCollectorsCommand = async (
  input: ListCollectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-collectors";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListImportFileTaskCommand
 */
export const se_ListImportFileTaskCommand = async (
  input: ListImportFileTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-import-file-task";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListServersCommand
 */
export const se_ListServersCommand = async (
  input: ListServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-servers";
  let body: any;
  body = JSON.stringify({
    ...(input.filterValue != null && { filterValue: input.filterValue }),
    ...(input.groupIdFilter != null && { groupIdFilter: se_GroupIds(input.groupIdFilter, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.serverCriteria != null && { serverCriteria: input.serverCriteria }),
    ...(input.sort != null && { sort: input.sort }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1PutPortfolioPreferencesCommand
 */
export const se_PutPortfolioPreferencesCommand = async (
  input: PutPortfolioPreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/put-portfolio-preferences";
  let body: any;
  body = JSON.stringify({
    ...(input.applicationMode != null && { applicationMode: input.applicationMode }),
    ...(input.applicationPreferences != null && {
      applicationPreferences: se_ApplicationPreferences(input.applicationPreferences, context),
    }),
    ...(input.databasePreferences != null && {
      databasePreferences: se_DatabasePreferences(input.databasePreferences, context),
    }),
    ...(input.prioritizeBusinessGoals != null && {
      prioritizeBusinessGoals: se_PrioritizeBusinessGoals(input.prioritizeBusinessGoals, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartAssessmentCommand
 */
export const se_StartAssessmentCommand = async (
  input: StartAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/start-assessment";
  let body: any;
  body = JSON.stringify({
    ...(input.assessmentTargets != null && {
      assessmentTargets: se_AssessmentTargets(input.assessmentTargets, context),
    }),
    ...(input.s3bucketForAnalysisData != null && { s3bucketForAnalysisData: input.s3bucketForAnalysisData }),
    ...(input.s3bucketForReportData != null && { s3bucketForReportData: input.s3bucketForReportData }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartImportFileTaskCommand
 */
export const se_StartImportFileTaskCommand = async (
  input: StartImportFileTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/start-import-file-task";
  let body: any;
  body = JSON.stringify({
    ...(input.S3Bucket != null && { S3Bucket: input.S3Bucket }),
    ...(input.dataSourceType != null && { dataSourceType: input.dataSourceType }),
    ...(input.groupId != null && { groupId: se_GroupIds(input.groupId, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.s3bucketForReportData != null && { s3bucketForReportData: input.s3bucketForReportData }),
    ...(input.s3key != null && { s3key: input.s3key }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartRecommendationReportGenerationCommand
 */
export const se_StartRecommendationReportGenerationCommand = async (
  input: StartRecommendationReportGenerationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/start-recommendation-report-generation";
  let body: any;
  body = JSON.stringify({
    ...(input.groupIdFilter != null && { groupIdFilter: se_GroupIds(input.groupIdFilter, context) }),
    ...(input.outputFormat != null && { outputFormat: input.outputFormat }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StopAssessmentCommand
 */
export const se_StopAssessmentCommand = async (
  input: StopAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/stop-assessment";
  let body: any;
  body = JSON.stringify({
    ...(input.assessmentId != null && { assessmentId: input.assessmentId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateApplicationComponentConfigCommand
 */
export const se_UpdateApplicationComponentConfigCommand = async (
  input: UpdateApplicationComponentConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/update-applicationcomponent-config";
  let body: any;
  body = JSON.stringify({
    ...(input.appType != null && { appType: input.appType }),
    ...(input.applicationComponentId != null && { applicationComponentId: input.applicationComponentId }),
    ...(input.configureOnly != null && { configureOnly: input.configureOnly }),
    ...(input.inclusionStatus != null && { inclusionStatus: input.inclusionStatus }),
    ...(input.secretsManagerKey != null && { secretsManagerKey: input.secretsManagerKey }),
    ...(input.sourceCodeList != null && { sourceCodeList: se_SourceCodeList(input.sourceCodeList, context) }),
    ...(input.strategyOption != null && { strategyOption: se_StrategyOption(input.strategyOption, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateServerConfigCommand
 */
export const se_UpdateServerConfigCommand = async (
  input: UpdateServerConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/update-server-config";
  let body: any;
  body = JSON.stringify({
    ...(input.serverId != null && { serverId: input.serverId }),
    ...(input.strategyOption != null && { strategyOption: se_StrategyOption(input.strategyOption, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1GetApplicationComponentDetailsCommand
 */
export const de_GetApplicationComponentDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationComponentDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetApplicationComponentDetailsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationComponentDetail != null) {
    contents.applicationComponentDetail = de_ApplicationComponentDetail(data.applicationComponentDetail, context);
  }
  if (data.associatedApplications != null) {
    contents.associatedApplications = de_AssociatedApplications(data.associatedApplications, context);
  }
  if (data.associatedServerIds != null) {
    contents.associatedServerIds = de_AssociatedServerIDs(data.associatedServerIds, context);
  }
  if (data.moreApplicationResource != null) {
    contents.moreApplicationResource = __expectBoolean(data.moreApplicationResource);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetApplicationComponentDetailsCommandError
 */
const de_GetApplicationComponentDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationComponentDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubstrategy#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetApplicationComponentStrategiesCommand
 */
export const de_GetApplicationComponentStrategiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationComponentStrategiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetApplicationComponentStrategiesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationComponentStrategies != null) {
    contents.applicationComponentStrategies = de_ApplicationComponentStrategies(
      data.applicationComponentStrategies,
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetApplicationComponentStrategiesCommandError
 */
const de_GetApplicationComponentStrategiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationComponentStrategiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubstrategy#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetAssessmentCommand
 */
export const de_GetAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAssessmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessmentTargets != null) {
    contents.assessmentTargets = de_AssessmentTargets(data.assessmentTargets, context);
  }
  if (data.dataCollectionDetails != null) {
    contents.dataCollectionDetails = de_DataCollectionDetails(data.dataCollectionDetails, context);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAssessmentCommandError
 */
const de_GetAssessmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssessmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubstrategy#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubstrategy#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetImportFileTaskCommand
 */
export const de_GetImportFileTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportFileTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetImportFileTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.completionTime != null) {
    contents.completionTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.completionTime)));
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.importName != null) {
    contents.importName = __expectString(data.importName);
  }
  if (data.inputS3Bucket != null) {
    contents.inputS3Bucket = __expectString(data.inputS3Bucket);
  }
  if (data.inputS3Key != null) {
    contents.inputS3Key = __expectString(data.inputS3Key);
  }
  if (data.numberOfRecordsFailed != null) {
    contents.numberOfRecordsFailed = __expectInt32(data.numberOfRecordsFailed);
  }
  if (data.numberOfRecordsSuccess != null) {
    contents.numberOfRecordsSuccess = __expectInt32(data.numberOfRecordsSuccess);
  }
  if (data.startTime != null) {
    contents.startTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.startTime)));
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusReportS3Bucket != null) {
    contents.statusReportS3Bucket = __expectString(data.statusReportS3Bucket);
  }
  if (data.statusReportS3Key != null) {
    contents.statusReportS3Key = __expectString(data.statusReportS3Key);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetImportFileTaskCommandError
 */
const de_GetImportFileTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportFileTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubstrategy#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubstrategy#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetLatestAssessmentIdCommand
 */
export const de_GetLatestAssessmentIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLatestAssessmentIdCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetLatestAssessmentIdCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetLatestAssessmentIdCommandError
 */
const de_GetLatestAssessmentIdCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLatestAssessmentIdCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubstrategy#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DependencyException":
    case "com.amazonaws.migrationhubstrategy#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetPortfolioPreferencesCommand
 */
export const de_GetPortfolioPreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPortfolioPreferencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPortfolioPreferencesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationMode != null) {
    contents.applicationMode = __expectString(data.applicationMode);
  }
  if (data.applicationPreferences != null) {
    contents.applicationPreferences = de_ApplicationPreferences(data.applicationPreferences, context);
  }
  if (data.databasePreferences != null) {
    contents.databasePreferences = de_DatabasePreferences(data.databasePreferences, context);
  }
  if (data.prioritizeBusinessGoals != null) {
    contents.prioritizeBusinessGoals = de_PrioritizeBusinessGoals(data.prioritizeBusinessGoals, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetPortfolioPreferencesCommandError
 */
const de_GetPortfolioPreferencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPortfolioPreferencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubstrategy#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubstrategy#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetPortfolioSummaryCommand
 */
export const de_GetPortfolioSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPortfolioSummaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPortfolioSummaryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessmentSummary != null) {
    contents.assessmentSummary = de_AssessmentSummary(data.assessmentSummary, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetPortfolioSummaryCommandError
 */
const de_GetPortfolioSummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPortfolioSummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubstrategy#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetRecommendationReportDetailsCommand
 */
export const de_GetRecommendationReportDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationReportDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRecommendationReportDetailsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.recommendationReportDetails != null) {
    contents.recommendationReportDetails = de_RecommendationReportDetails(data.recommendationReportDetails, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetRecommendationReportDetailsCommandError
 */
const de_GetRecommendationReportDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationReportDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubstrategy#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubstrategy#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetServerDetailsCommand
 */
export const de_GetServerDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServerDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetServerDetailsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.associatedApplications != null) {
    contents.associatedApplications = de_AssociatedApplications(data.associatedApplications, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.serverDetail != null) {
    contents.serverDetail = de_ServerDetail(data.serverDetail, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetServerDetailsCommandError
 */
const de_GetServerDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServerDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubstrategy#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubstrategy#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetServerStrategiesCommand
 */
export const de_GetServerStrategiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServerStrategiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetServerStrategiesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.serverStrategies != null) {
    contents.serverStrategies = de_ServerStrategies(data.serverStrategies, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetServerStrategiesCommandError
 */
const de_GetServerStrategiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServerStrategiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubstrategy#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubstrategy#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListApplicationComponentsCommand
 */
export const de_ListApplicationComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationComponentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListApplicationComponentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationComponentInfos != null) {
    contents.applicationComponentInfos = de_ApplicationComponentDetails(data.applicationComponentInfos, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListApplicationComponentsCommandError
 */
const de_ListApplicationComponentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationComponentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubstrategy#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceLinkedRoleLockClientException":
    case "com.amazonaws.migrationhubstrategy#ServiceLinkedRoleLockClientException":
      throw await de_ServiceLinkedRoleLockClientExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListCollectorsCommand
 */
export const de_ListCollectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCollectorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Collectors != null) {
    contents.Collectors = de_Collectors(data.Collectors, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListCollectorsCommandError
 */
const de_ListCollectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubstrategy#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListImportFileTaskCommand
 */
export const de_ListImportFileTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportFileTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListImportFileTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.taskInfos != null) {
    contents.taskInfos = de_ListImportFileTaskInformation(data.taskInfos, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListImportFileTaskCommandError
 */
const de_ListImportFileTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportFileTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubstrategy#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListServersCommand
 */
export const de_ListServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListServersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.serverInfos != null) {
    contents.serverInfos = de_ServerDetails(data.serverInfos, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListServersCommandError
 */
const de_ListServersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubstrategy#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1PutPortfolioPreferencesCommand
 */
export const de_PutPortfolioPreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPortfolioPreferencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutPortfolioPreferencesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutPortfolioPreferencesCommandError
 */
const de_PutPortfolioPreferencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPortfolioPreferencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubstrategy#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.migrationhubstrategy#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartAssessmentCommand
 */
export const de_StartAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartAssessmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessmentId != null) {
    contents.assessmentId = __expectString(data.assessmentId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartAssessmentCommandError
 */
const de_StartAssessmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAssessmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubstrategy#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.migrationhubstrategy#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartImportFileTaskCommand
 */
export const de_StartImportFileTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportFileTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartImportFileTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartImportFileTaskCommandError
 */
const de_StartImportFileTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportFileTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubstrategy#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.migrationhubstrategy#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartRecommendationReportGenerationCommand
 */
export const de_StartRecommendationReportGenerationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRecommendationReportGenerationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartRecommendationReportGenerationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartRecommendationReportGenerationCommandError
 */
const de_StartRecommendationReportGenerationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRecommendationReportGenerationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubstrategy#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.migrationhubstrategy#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StopAssessmentCommand
 */
export const de_StopAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopAssessmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StopAssessmentCommandError
 */
const de_StopAssessmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAssessmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubstrategy#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateApplicationComponentConfigCommand
 */
export const de_UpdateApplicationComponentConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationComponentConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateApplicationComponentConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateApplicationComponentConfigCommandError
 */
const de_UpdateApplicationComponentConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationComponentConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubstrategy#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateServerConfigCommand
 */
export const de_UpdateServerConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateServerConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateServerConfigCommandError
 */
const de_UpdateServerConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubstrategy#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AccessDeniedException({
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DependencyExceptionRes
 */
const de_DependencyExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<DependencyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new DependencyException({
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServerException({
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceLinkedRoleLockClientExceptionRes
 */
const de_ServiceLinkedRoleLockClientExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLinkedRoleLockClientException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceLinkedRoleLockClientException({
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceQuotaExceededException({
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ThrottlingException({
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1ApplicationPreferences
 */
const se_ApplicationPreferences = (input: ApplicationPreferences, context: __SerdeContext): any => {
  return {
    ...(input.managementPreference != null && {
      managementPreference: se_ManagementPreference(input.managementPreference, context),
    }),
  };
};

/**
 * serializeAws_restJson1AssessmentTarget
 */
const se_AssessmentTarget = (input: AssessmentTarget, context: __SerdeContext): any => {
  return {
    ...(input.condition != null && { condition: input.condition }),
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: se_AssessmentTargetValues(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1AssessmentTargets
 */
const se_AssessmentTargets = (input: AssessmentTarget[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AssessmentTarget(entry, context);
    });
};

/**
 * serializeAws_restJson1AssessmentTargetValues
 */
const se_AssessmentTargetValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1AwsManagedResources
 */
const se_AwsManagedResources = (input: AwsManagedResources, context: __SerdeContext): any => {
  return {
    ...(input.targetDestination != null && {
      targetDestination: se_AwsManagedTargetDestinations(input.targetDestination, context),
    }),
  };
};

/**
 * serializeAws_restJson1AwsManagedTargetDestinations
 */
const se_AwsManagedTargetDestinations = (
  input: (AwsManagedTargetDestination | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1BusinessGoals
 */
const se_BusinessGoals = (input: BusinessGoals, context: __SerdeContext): any => {
  return {
    ...(input.licenseCostReduction != null && { licenseCostReduction: input.licenseCostReduction }),
    ...(input.modernizeInfrastructureWithCloudNativeTechnologies != null && {
      modernizeInfrastructureWithCloudNativeTechnologies: input.modernizeInfrastructureWithCloudNativeTechnologies,
    }),
    ...(input.reduceOperationalOverheadWithManagedServices != null && {
      reduceOperationalOverheadWithManagedServices: input.reduceOperationalOverheadWithManagedServices,
    }),
    ...(input.speedOfMigration != null && { speedOfMigration: input.speedOfMigration }),
  };
};

/**
 * serializeAws_restJson1DatabaseMigrationPreference
 */
const se_DatabaseMigrationPreference = (input: DatabaseMigrationPreference, context: __SerdeContext): any => {
  return DatabaseMigrationPreference.visit(input, {
    heterogeneous: (value) => ({ heterogeneous: se_Heterogeneous(value, context) }),
    homogeneous: (value) => ({ homogeneous: se_Homogeneous(value, context) }),
    noPreference: (value) => ({ noPreference: se_NoDatabaseMigrationPreference(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1DatabasePreferences
 */
const se_DatabasePreferences = (input: DatabasePreferences, context: __SerdeContext): any => {
  return {
    ...(input.databaseManagementPreference != null && {
      databaseManagementPreference: input.databaseManagementPreference,
    }),
    ...(input.databaseMigrationPreference != null && {
      databaseMigrationPreference: se_DatabaseMigrationPreference(input.databaseMigrationPreference, context),
    }),
  };
};

/**
 * serializeAws_restJson1Group
 */
const se_Group = (input: Group, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1GroupIds
 */
const se_GroupIds = (input: Group[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Group(entry, context);
    });
};

/**
 * serializeAws_restJson1Heterogeneous
 */
const se_Heterogeneous = (input: Heterogeneous, context: __SerdeContext): any => {
  return {
    ...(input.targetDatabaseEngine != null && {
      targetDatabaseEngine: se_HeterogeneousTargetDatabaseEngines(input.targetDatabaseEngine, context),
    }),
  };
};

/**
 * serializeAws_restJson1HeterogeneousTargetDatabaseEngines
 */
const se_HeterogeneousTargetDatabaseEngines = (
  input: (HeterogeneousTargetDatabaseEngine | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Homogeneous
 */
const se_Homogeneous = (input: Homogeneous, context: __SerdeContext): any => {
  return {
    ...(input.targetDatabaseEngine != null && {
      targetDatabaseEngine: se_HomogeneousTargetDatabaseEngines(input.targetDatabaseEngine, context),
    }),
  };
};

/**
 * serializeAws_restJson1HomogeneousTargetDatabaseEngines
 */
const se_HomogeneousTargetDatabaseEngines = (
  input: (HomogeneousTargetDatabaseEngine | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ManagementPreference
 */
const se_ManagementPreference = (input: ManagementPreference, context: __SerdeContext): any => {
  return ManagementPreference.visit(input, {
    awsManagedResources: (value) => ({ awsManagedResources: se_AwsManagedResources(value, context) }),
    noPreference: (value) => ({ noPreference: se_NoManagementPreference(value, context) }),
    selfManageResources: (value) => ({ selfManageResources: se_SelfManageResources(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1NoDatabaseMigrationPreference
 */
const se_NoDatabaseMigrationPreference = (input: NoDatabaseMigrationPreference, context: __SerdeContext): any => {
  return {
    ...(input.targetDatabaseEngine != null && {
      targetDatabaseEngine: se_TargetDatabaseEngines(input.targetDatabaseEngine, context),
    }),
  };
};

/**
 * serializeAws_restJson1NoManagementPreference
 */
const se_NoManagementPreference = (input: NoManagementPreference, context: __SerdeContext): any => {
  return {
    ...(input.targetDestination != null && {
      targetDestination: se_NoPreferenceTargetDestinations(input.targetDestination, context),
    }),
  };
};

/**
 * serializeAws_restJson1NoPreferenceTargetDestinations
 */
const se_NoPreferenceTargetDestinations = (
  input: (NoPreferenceTargetDestination | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1PrioritizeBusinessGoals
 */
const se_PrioritizeBusinessGoals = (input: PrioritizeBusinessGoals, context: __SerdeContext): any => {
  return {
    ...(input.businessGoals != null && { businessGoals: se_BusinessGoals(input.businessGoals, context) }),
  };
};

/**
 * serializeAws_restJson1SelfManageResources
 */
const se_SelfManageResources = (input: SelfManageResources, context: __SerdeContext): any => {
  return {
    ...(input.targetDestination != null && {
      targetDestination: se_SelfManageTargetDestinations(input.targetDestination, context),
    }),
  };
};

/**
 * serializeAws_restJson1SelfManageTargetDestinations
 */
const se_SelfManageTargetDestinations = (
  input: (SelfManageTargetDestination | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SourceCode
 */
const se_SourceCode = (input: SourceCode, context: __SerdeContext): any => {
  return {
    ...(input.location != null && { location: input.location }),
    ...(input.projectName != null && { projectName: input.projectName }),
    ...(input.sourceVersion != null && { sourceVersion: input.sourceVersion }),
    ...(input.versionControl != null && { versionControl: input.versionControl }),
  };
};

/**
 * serializeAws_restJson1SourceCodeList
 */
const se_SourceCodeList = (input: SourceCode[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SourceCode(entry, context);
    });
};

/**
 * serializeAws_restJson1StrategyOption
 */
const se_StrategyOption = (input: StrategyOption, context: __SerdeContext): any => {
  return {
    ...(input.isPreferred != null && { isPreferred: input.isPreferred }),
    ...(input.strategy != null && { strategy: input.strategy }),
    ...(input.targetDestination != null && { targetDestination: input.targetDestination }),
    ...(input.toolName != null && { toolName: input.toolName }),
  };
};

/**
 * serializeAws_restJson1TargetDatabaseEngines
 */
const se_TargetDatabaseEngines = (input: (TargetDatabaseEngine | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_restJson1AnalysisStatusUnion
 */
const de_AnalysisStatusUnion = (output: any, context: __SerdeContext): AnalysisStatusUnion => {
  if (__expectString(output.runtimeAnalysisStatus) !== undefined) {
    return { runtimeAnalysisStatus: __expectString(output.runtimeAnalysisStatus) as any };
  }
  if (__expectString(output.srcCodeOrDbAnalysisStatus) !== undefined) {
    return { srcCodeOrDbAnalysisStatus: __expectString(output.srcCodeOrDbAnalysisStatus) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1AnalyzerNameUnion
 */
const de_AnalyzerNameUnion = (output: any, context: __SerdeContext): AnalyzerNameUnion => {
  if (__expectString(output.binaryAnalyzerName) !== undefined) {
    return { binaryAnalyzerName: __expectString(output.binaryAnalyzerName) as any };
  }
  if (__expectString(output.runTimeAnalyzerName) !== undefined) {
    return { runTimeAnalyzerName: __expectString(output.runTimeAnalyzerName) as any };
  }
  if (__expectString(output.sourceCodeAnalyzerName) !== undefined) {
    return { sourceCodeAnalyzerName: __expectString(output.sourceCodeAnalyzerName) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1AntipatternReportResult
 */
const de_AntipatternReportResult = (output: any, context: __SerdeContext): AntipatternReportResult => {
  return {
    analyzerName:
      output.analyzerName != null ? de_AnalyzerNameUnion(__expectUnion(output.analyzerName), context) : undefined,
    antiPatternReportS3Object:
      output.antiPatternReportS3Object != null ? de_S3Object(output.antiPatternReportS3Object, context) : undefined,
    antipatternReportStatus: __expectString(output.antipatternReportStatus),
    antipatternReportStatusMessage: __expectString(output.antipatternReportStatusMessage),
  } as any;
};

/**
 * deserializeAws_restJson1AntipatternReportResultList
 */
const de_AntipatternReportResultList = (output: any, context: __SerdeContext): AntipatternReportResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AntipatternReportResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AntipatternSeveritySummary
 */
const de_AntipatternSeveritySummary = (output: any, context: __SerdeContext): AntipatternSeveritySummary => {
  return {
    count: __expectInt32(output.count),
    severity: __expectString(output.severity),
  } as any;
};

/**
 * deserializeAws_restJson1ApplicationComponentDetail
 */
const de_ApplicationComponentDetail = (output: any, context: __SerdeContext): ApplicationComponentDetail => {
  return {
    analysisStatus: __expectString(output.analysisStatus),
    antipatternReportS3Object:
      output.antipatternReportS3Object != null ? de_S3Object(output.antipatternReportS3Object, context) : undefined,
    antipatternReportStatus: __expectString(output.antipatternReportStatus),
    antipatternReportStatusMessage: __expectString(output.antipatternReportStatusMessage),
    appType: __expectString(output.appType),
    appUnitError: output.appUnitError != null ? de_AppUnitError(output.appUnitError, context) : undefined,
    associatedServerId: __expectString(output.associatedServerId),
    databaseConfigDetail:
      output.databaseConfigDetail != null ? de_DatabaseConfigDetail(output.databaseConfigDetail, context) : undefined,
    id: __expectString(output.id),
    inclusionStatus: __expectString(output.inclusionStatus),
    lastAnalyzedTimestamp:
      output.lastAnalyzedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastAnalyzedTimestamp)))
        : undefined,
    listAntipatternSeveritySummary:
      output.listAntipatternSeveritySummary != null
        ? de_ListAntipatternSeveritySummary(output.listAntipatternSeveritySummary, context)
        : undefined,
    moreServerAssociationExists: __expectBoolean(output.moreServerAssociationExists),
    name: __expectString(output.name),
    osDriver: __expectString(output.osDriver),
    osVersion: __expectString(output.osVersion),
    recommendationSet:
      output.recommendationSet != null ? de_RecommendationSet(output.recommendationSet, context) : undefined,
    resourceSubType: __expectString(output.resourceSubType),
    resultList: output.resultList != null ? de_ResultList(output.resultList, context) : undefined,
    runtimeStatus: __expectString(output.runtimeStatus),
    runtimeStatusMessage: __expectString(output.runtimeStatusMessage),
    sourceCodeRepositories:
      output.sourceCodeRepositories != null
        ? de_SourceCodeRepositories(output.sourceCodeRepositories, context)
        : undefined,
    statusMessage: __expectString(output.statusMessage),
  } as any;
};

/**
 * deserializeAws_restJson1ApplicationComponentDetails
 */
const de_ApplicationComponentDetails = (output: any, context: __SerdeContext): ApplicationComponentDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ApplicationComponentDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ApplicationComponentStatusSummary
 */
const de_ApplicationComponentStatusSummary = (
  output: any,
  context: __SerdeContext
): ApplicationComponentStatusSummary => {
  return {
    count: __expectInt32(output.count),
    srcCodeOrDbAnalysisStatus: __expectString(output.srcCodeOrDbAnalysisStatus),
  } as any;
};

/**
 * deserializeAws_restJson1ApplicationComponentStrategies
 */
const de_ApplicationComponentStrategies = (output: any, context: __SerdeContext): ApplicationComponentStrategy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ApplicationComponentStrategy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ApplicationComponentStrategy
 */
const de_ApplicationComponentStrategy = (output: any, context: __SerdeContext): ApplicationComponentStrategy => {
  return {
    isPreferred: __expectBoolean(output.isPreferred),
    recommendation: output.recommendation != null ? de_RecommendationSet(output.recommendation, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1ApplicationComponentSummary
 */
const de_ApplicationComponentSummary = (output: any, context: __SerdeContext): ApplicationComponentSummary => {
  return {
    appType: __expectString(output.appType),
    count: __expectInt32(output.count),
  } as any;
};

/**
 * deserializeAws_restJson1ApplicationPreferences
 */
const de_ApplicationPreferences = (output: any, context: __SerdeContext): ApplicationPreferences => {
  return {
    managementPreference:
      output.managementPreference != null
        ? de_ManagementPreference(__expectUnion(output.managementPreference), context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AppUnitError
 */
const de_AppUnitError = (output: any, context: __SerdeContext): AppUnitError => {
  return {
    appUnitErrorCategory: __expectString(output.appUnitErrorCategory),
  } as any;
};

/**
 * deserializeAws_restJson1AssessmentSummary
 */
const de_AssessmentSummary = (output: any, context: __SerdeContext): AssessmentSummary => {
  return {
    antipatternReportS3Object:
      output.antipatternReportS3Object != null ? de_S3Object(output.antipatternReportS3Object, context) : undefined,
    antipatternReportStatus: __expectString(output.antipatternReportStatus),
    antipatternReportStatusMessage: __expectString(output.antipatternReportStatusMessage),
    lastAnalyzedTimestamp:
      output.lastAnalyzedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastAnalyzedTimestamp)))
        : undefined,
    listAntipatternSeveritySummary:
      output.listAntipatternSeveritySummary != null
        ? de_ListAntipatternSeveritySummary(output.listAntipatternSeveritySummary, context)
        : undefined,
    listApplicationComponentStatusSummary:
      output.listApplicationComponentStatusSummary != null
        ? de_ListApplicationComponentStatusSummary(output.listApplicationComponentStatusSummary, context)
        : undefined,
    listApplicationComponentStrategySummary:
      output.listApplicationComponentStrategySummary != null
        ? de_ListStrategySummary(output.listApplicationComponentStrategySummary, context)
        : undefined,
    listApplicationComponentSummary:
      output.listApplicationComponentSummary != null
        ? de_ListApplicationComponentSummary(output.listApplicationComponentSummary, context)
        : undefined,
    listServerStatusSummary:
      output.listServerStatusSummary != null
        ? de_ListServerStatusSummary(output.listServerStatusSummary, context)
        : undefined,
    listServerStrategySummary:
      output.listServerStrategySummary != null
        ? de_ListStrategySummary(output.listServerStrategySummary, context)
        : undefined,
    listServerSummary:
      output.listServerSummary != null ? de_ListServerSummary(output.listServerSummary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AssessmentTarget
 */
const de_AssessmentTarget = (output: any, context: __SerdeContext): AssessmentTarget => {
  return {
    condition: __expectString(output.condition),
    name: __expectString(output.name),
    values: output.values != null ? de_AssessmentTargetValues(output.values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AssessmentTargets
 */
const de_AssessmentTargets = (output: any, context: __SerdeContext): AssessmentTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssessmentTarget(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssessmentTargetValues
 */
const de_AssessmentTargetValues = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssociatedApplication
 */
const de_AssociatedApplication = (output: any, context: __SerdeContext): AssociatedApplication => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1AssociatedApplications
 */
const de_AssociatedApplications = (output: any, context: __SerdeContext): AssociatedApplication[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssociatedApplication(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssociatedServerIDs
 */
const de_AssociatedServerIDs = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AwsManagedResources
 */
const de_AwsManagedResources = (output: any, context: __SerdeContext): AwsManagedResources => {
  return {
    targetDestination:
      output.targetDestination != null ? de_AwsManagedTargetDestinations(output.targetDestination, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AwsManagedTargetDestinations
 */
const de_AwsManagedTargetDestinations = (
  output: any,
  context: __SerdeContext
): (AwsManagedTargetDestination | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BusinessGoals
 */
const de_BusinessGoals = (output: any, context: __SerdeContext): BusinessGoals => {
  return {
    licenseCostReduction: __expectInt32(output.licenseCostReduction),
    modernizeInfrastructureWithCloudNativeTechnologies: __expectInt32(
      output.modernizeInfrastructureWithCloudNativeTechnologies
    ),
    reduceOperationalOverheadWithManagedServices: __expectInt32(output.reduceOperationalOverheadWithManagedServices),
    speedOfMigration: __expectInt32(output.speedOfMigration),
  } as any;
};

/**
 * deserializeAws_restJson1Collector
 */
const de_Collector = (output: any, context: __SerdeContext): Collector => {
  return {
    collectorHealth: __expectString(output.collectorHealth),
    collectorId: __expectString(output.collectorId),
    collectorVersion: __expectString(output.collectorVersion),
    configurationSummary:
      output.configurationSummary != null ? de_ConfigurationSummary(output.configurationSummary, context) : undefined,
    hostName: __expectString(output.hostName),
    ipAddress: __expectString(output.ipAddress),
    lastActivityTimeStamp: __expectString(output.lastActivityTimeStamp),
    registeredTimeStamp: __expectString(output.registeredTimeStamp),
  } as any;
};

/**
 * deserializeAws_restJson1Collectors
 */
const de_Collectors = (output: any, context: __SerdeContext): Collector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Collector(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConfigurationSummary
 */
const de_ConfigurationSummary = (output: any, context: __SerdeContext): ConfigurationSummary => {
  return {
    ipAddressBasedRemoteInfoList:
      output.ipAddressBasedRemoteInfoList != null
        ? de_IPAddressBasedRemoteInfoList(output.ipAddressBasedRemoteInfoList, context)
        : undefined,
    pipelineInfoList:
      output.pipelineInfoList != null ? de_PipelineInfoList(output.pipelineInfoList, context) : undefined,
    remoteSourceCodeAnalysisServerInfo:
      output.remoteSourceCodeAnalysisServerInfo != null
        ? de_RemoteSourceCodeAnalysisServerInfo(output.remoteSourceCodeAnalysisServerInfo, context)
        : undefined,
    vcenterBasedRemoteInfoList:
      output.vcenterBasedRemoteInfoList != null
        ? de_VcenterBasedRemoteInfoList(output.vcenterBasedRemoteInfoList, context)
        : undefined,
    versionControlInfoList:
      output.versionControlInfoList != null
        ? de_VersionControlInfoList(output.versionControlInfoList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DatabaseConfigDetail
 */
const de_DatabaseConfigDetail = (output: any, context: __SerdeContext): DatabaseConfigDetail => {
  return {
    secretName: __expectString(output.secretName),
  } as any;
};

/**
 * deserializeAws_restJson1DatabaseMigrationPreference
 */
const de_DatabaseMigrationPreference = (output: any, context: __SerdeContext): DatabaseMigrationPreference => {
  if (output.heterogeneous != null) {
    return {
      heterogeneous: de_Heterogeneous(output.heterogeneous, context),
    };
  }
  if (output.homogeneous != null) {
    return {
      homogeneous: de_Homogeneous(output.homogeneous, context),
    };
  }
  if (output.noPreference != null) {
    return {
      noPreference: de_NoDatabaseMigrationPreference(output.noPreference, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1DatabasePreferences
 */
const de_DatabasePreferences = (output: any, context: __SerdeContext): DatabasePreferences => {
  return {
    databaseManagementPreference: __expectString(output.databaseManagementPreference),
    databaseMigrationPreference:
      output.databaseMigrationPreference != null
        ? de_DatabaseMigrationPreference(__expectUnion(output.databaseMigrationPreference), context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DataCollectionDetails
 */
const de_DataCollectionDetails = (output: any, context: __SerdeContext): DataCollectionDetails => {
  return {
    completionTime:
      output.completionTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.completionTime)))
        : undefined,
    failed: __expectInt32(output.failed),
    inProgress: __expectInt32(output.inProgress),
    servers: __expectInt32(output.servers),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
    success: __expectInt32(output.success),
  } as any;
};

/**
 * deserializeAws_restJson1Heterogeneous
 */
const de_Heterogeneous = (output: any, context: __SerdeContext): Heterogeneous => {
  return {
    targetDatabaseEngine:
      output.targetDatabaseEngine != null
        ? de_HeterogeneousTargetDatabaseEngines(output.targetDatabaseEngine, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1HeterogeneousTargetDatabaseEngines
 */
const de_HeterogeneousTargetDatabaseEngines = (
  output: any,
  context: __SerdeContext
): (HeterogeneousTargetDatabaseEngine | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Homogeneous
 */
const de_Homogeneous = (output: any, context: __SerdeContext): Homogeneous => {
  return {
    targetDatabaseEngine:
      output.targetDatabaseEngine != null
        ? de_HomogeneousTargetDatabaseEngines(output.targetDatabaseEngine, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1HomogeneousTargetDatabaseEngines
 */
const de_HomogeneousTargetDatabaseEngines = (
  output: any,
  context: __SerdeContext
): (HomogeneousTargetDatabaseEngine | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ImportFileTaskInformation
 */
const de_ImportFileTaskInformation = (output: any, context: __SerdeContext): ImportFileTaskInformation => {
  return {
    completionTime:
      output.completionTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.completionTime)))
        : undefined,
    id: __expectString(output.id),
    importName: __expectString(output.importName),
    inputS3Bucket: __expectString(output.inputS3Bucket),
    inputS3Key: __expectString(output.inputS3Key),
    numberOfRecordsFailed: __expectInt32(output.numberOfRecordsFailed),
    numberOfRecordsSuccess: __expectInt32(output.numberOfRecordsSuccess),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    status: __expectString(output.status),
    statusReportS3Bucket: __expectString(output.statusReportS3Bucket),
    statusReportS3Key: __expectString(output.statusReportS3Key),
  } as any;
};

/**
 * deserializeAws_restJson1IPAddressBasedRemoteInfo
 */
const de_IPAddressBasedRemoteInfo = (output: any, context: __SerdeContext): IPAddressBasedRemoteInfo => {
  return {
    authType: __expectString(output.authType),
    ipAddressConfigurationTimeStamp: __expectString(output.ipAddressConfigurationTimeStamp),
    osType: __expectString(output.osType),
  } as any;
};

/**
 * deserializeAws_restJson1IPAddressBasedRemoteInfoList
 */
const de_IPAddressBasedRemoteInfoList = (output: any, context: __SerdeContext): IPAddressBasedRemoteInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IPAddressBasedRemoteInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListAntipatternSeveritySummary
 */
const de_ListAntipatternSeveritySummary = (output: any, context: __SerdeContext): AntipatternSeveritySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AntipatternSeveritySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListApplicationComponentStatusSummary
 */
const de_ListApplicationComponentStatusSummary = (
  output: any,
  context: __SerdeContext
): ApplicationComponentStatusSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ApplicationComponentStatusSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListApplicationComponentSummary
 */
const de_ListApplicationComponentSummary = (output: any, context: __SerdeContext): ApplicationComponentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ApplicationComponentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListImportFileTaskInformation
 */
const de_ListImportFileTaskInformation = (output: any, context: __SerdeContext): ImportFileTaskInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImportFileTaskInformation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListServerStatusSummary
 */
const de_ListServerStatusSummary = (output: any, context: __SerdeContext): ServerStatusSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServerStatusSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListServerSummary
 */
const de_ListServerSummary = (output: any, context: __SerdeContext): ServerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServerSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListStrategySummary
 */
const de_ListStrategySummary = (output: any, context: __SerdeContext): StrategySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StrategySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ManagementPreference
 */
const de_ManagementPreference = (output: any, context: __SerdeContext): ManagementPreference => {
  if (output.awsManagedResources != null) {
    return {
      awsManagedResources: de_AwsManagedResources(output.awsManagedResources, context),
    };
  }
  if (output.noPreference != null) {
    return {
      noPreference: de_NoManagementPreference(output.noPreference, context),
    };
  }
  if (output.selfManageResources != null) {
    return {
      selfManageResources: de_SelfManageResources(output.selfManageResources, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1NetworkInfo
 */
const de_NetworkInfo = (output: any, context: __SerdeContext): NetworkInfo => {
  return {
    interfaceName: __expectString(output.interfaceName),
    ipAddress: __expectString(output.ipAddress),
    macAddress: __expectString(output.macAddress),
    netMask: __expectString(output.netMask),
  } as any;
};

/**
 * deserializeAws_restJson1NetworkInfoList
 */
const de_NetworkInfoList = (output: any, context: __SerdeContext): NetworkInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NetworkInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1NoDatabaseMigrationPreference
 */
const de_NoDatabaseMigrationPreference = (output: any, context: __SerdeContext): NoDatabaseMigrationPreference => {
  return {
    targetDatabaseEngine:
      output.targetDatabaseEngine != null ? de_TargetDatabaseEngines(output.targetDatabaseEngine, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1NoManagementPreference
 */
const de_NoManagementPreference = (output: any, context: __SerdeContext): NoManagementPreference => {
  return {
    targetDestination:
      output.targetDestination != null
        ? de_NoPreferenceTargetDestinations(output.targetDestination, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1NoPreferenceTargetDestinations
 */
const de_NoPreferenceTargetDestinations = (
  output: any,
  context: __SerdeContext
): (NoPreferenceTargetDestination | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1OSInfo
 */
const de_OSInfo = (output: any, context: __SerdeContext): OSInfo => {
  return {
    type: __expectString(output.type),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1PipelineInfo
 */
const de_PipelineInfo = (output: any, context: __SerdeContext): PipelineInfo => {
  return {
    pipelineConfigurationTimeStamp: __expectString(output.pipelineConfigurationTimeStamp),
    pipelineType: __expectString(output.pipelineType),
  } as any;
};

/**
 * deserializeAws_restJson1PipelineInfoList
 */
const de_PipelineInfoList = (output: any, context: __SerdeContext): PipelineInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PipelineInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PrioritizeBusinessGoals
 */
const de_PrioritizeBusinessGoals = (output: any, context: __SerdeContext): PrioritizeBusinessGoals => {
  return {
    businessGoals: output.businessGoals != null ? de_BusinessGoals(output.businessGoals, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RecommendationReportDetails
 */
const de_RecommendationReportDetails = (output: any, context: __SerdeContext): RecommendationReportDetails => {
  return {
    completionTime:
      output.completionTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.completionTime)))
        : undefined,
    s3Bucket: __expectString(output.s3Bucket),
    s3Keys: output.s3Keys != null ? de_S3Keys(output.s3Keys, context) : undefined,
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
  } as any;
};

/**
 * deserializeAws_restJson1RecommendationSet
 */
const de_RecommendationSet = (output: any, context: __SerdeContext): RecommendationSet => {
  return {
    strategy: __expectString(output.strategy),
    targetDestination: __expectString(output.targetDestination),
    transformationTool:
      output.transformationTool != null ? de_TransformationTool(output.transformationTool, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RemoteSourceCodeAnalysisServerInfo
 */
const de_RemoteSourceCodeAnalysisServerInfo = (
  output: any,
  context: __SerdeContext
): RemoteSourceCodeAnalysisServerInfo => {
  return {
    remoteSourceCodeAnalysisServerConfigurationTimestamp: __expectString(
      output.remoteSourceCodeAnalysisServerConfigurationTimestamp
    ),
  } as any;
};

/**
 * deserializeAws_restJson1Result
 */
const de_Result = (output: any, context: __SerdeContext): Result => {
  return {
    analysisStatus:
      output.analysisStatus != null ? de_AnalysisStatusUnion(__expectUnion(output.analysisStatus), context) : undefined,
    analysisType: __expectString(output.analysisType),
    antipatternReportResultList:
      output.antipatternReportResultList != null
        ? de_AntipatternReportResultList(output.antipatternReportResultList, context)
        : undefined,
    statusMessage: __expectString(output.statusMessage),
  } as any;
};

/**
 * deserializeAws_restJson1ResultList
 */
const de_ResultList = (output: any, context: __SerdeContext): Result[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Result(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1S3Keys
 */
const de_S3Keys = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1S3Object
 */
const de_S3Object = (output: any, context: __SerdeContext): S3Object => {
  return {
    s3Bucket: __expectString(output.s3Bucket),
    s3key: __expectString(output.s3key),
  } as any;
};

/**
 * deserializeAws_restJson1SelfManageResources
 */
const de_SelfManageResources = (output: any, context: __SerdeContext): SelfManageResources => {
  return {
    targetDestination:
      output.targetDestination != null ? de_SelfManageTargetDestinations(output.targetDestination, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SelfManageTargetDestinations
 */
const de_SelfManageTargetDestinations = (
  output: any,
  context: __SerdeContext
): (SelfManageTargetDestination | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ServerDetail
 */
const de_ServerDetail = (output: any, context: __SerdeContext): ServerDetail => {
  return {
    antipatternReportS3Object:
      output.antipatternReportS3Object != null ? de_S3Object(output.antipatternReportS3Object, context) : undefined,
    antipatternReportStatus: __expectString(output.antipatternReportStatus),
    antipatternReportStatusMessage: __expectString(output.antipatternReportStatusMessage),
    applicationComponentStrategySummary:
      output.applicationComponentStrategySummary != null
        ? de_ListStrategySummary(output.applicationComponentStrategySummary, context)
        : undefined,
    dataCollectionStatus: __expectString(output.dataCollectionStatus),
    id: __expectString(output.id),
    lastAnalyzedTimestamp:
      output.lastAnalyzedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastAnalyzedTimestamp)))
        : undefined,
    listAntipatternSeveritySummary:
      output.listAntipatternSeveritySummary != null
        ? de_ListAntipatternSeveritySummary(output.listAntipatternSeveritySummary, context)
        : undefined,
    name: __expectString(output.name),
    recommendationSet:
      output.recommendationSet != null ? de_RecommendationSet(output.recommendationSet, context) : undefined,
    serverError: output.serverError != null ? de_ServerError(output.serverError, context) : undefined,
    serverType: __expectString(output.serverType),
    statusMessage: __expectString(output.statusMessage),
    systemInfo: output.systemInfo != null ? de_SystemInfo(output.systemInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ServerDetails
 */
const de_ServerDetails = (output: any, context: __SerdeContext): ServerDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServerDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ServerError
 */
const de_ServerError = (output: any, context: __SerdeContext): ServerError => {
  return {
    serverErrorCategory: __expectString(output.serverErrorCategory),
  } as any;
};

/**
 * deserializeAws_restJson1ServerStatusSummary
 */
const de_ServerStatusSummary = (output: any, context: __SerdeContext): ServerStatusSummary => {
  return {
    count: __expectInt32(output.count),
    runTimeAssessmentStatus: __expectString(output.runTimeAssessmentStatus),
  } as any;
};

/**
 * deserializeAws_restJson1ServerStrategies
 */
const de_ServerStrategies = (output: any, context: __SerdeContext): ServerStrategy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServerStrategy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ServerStrategy
 */
const de_ServerStrategy = (output: any, context: __SerdeContext): ServerStrategy => {
  return {
    isPreferred: __expectBoolean(output.isPreferred),
    numberOfApplicationComponents: __expectInt32(output.numberOfApplicationComponents),
    recommendation: output.recommendation != null ? de_RecommendationSet(output.recommendation, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1ServerSummary
 */
const de_ServerSummary = (output: any, context: __SerdeContext): ServerSummary => {
  return {
    ServerOsType: __expectString(output.ServerOsType),
    count: __expectInt32(output.count),
  } as any;
};

/**
 * deserializeAws_restJson1SourceCodeRepositories
 */
const de_SourceCodeRepositories = (output: any, context: __SerdeContext): SourceCodeRepository[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SourceCodeRepository(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SourceCodeRepository
 */
const de_SourceCodeRepository = (output: any, context: __SerdeContext): SourceCodeRepository => {
  return {
    branch: __expectString(output.branch),
    projectName: __expectString(output.projectName),
    repository: __expectString(output.repository),
    versionControlType: __expectString(output.versionControlType),
  } as any;
};

/**
 * deserializeAws_restJson1StrategySummary
 */
const de_StrategySummary = (output: any, context: __SerdeContext): StrategySummary => {
  return {
    count: __expectInt32(output.count),
    strategy: __expectString(output.strategy),
  } as any;
};

/**
 * deserializeAws_restJson1SystemInfo
 */
const de_SystemInfo = (output: any, context: __SerdeContext): SystemInfo => {
  return {
    cpuArchitecture: __expectString(output.cpuArchitecture),
    fileSystemType: __expectString(output.fileSystemType),
    networkInfoList: output.networkInfoList != null ? de_NetworkInfoList(output.networkInfoList, context) : undefined,
    osInfo: output.osInfo != null ? de_OSInfo(output.osInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TargetDatabaseEngines
 */
const de_TargetDatabaseEngines = (output: any, context: __SerdeContext): (TargetDatabaseEngine | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TransformationTool
 */
const de_TransformationTool = (output: any, context: __SerdeContext): TransformationTool => {
  return {
    description: __expectString(output.description),
    name: __expectString(output.name),
    tranformationToolInstallationLink: __expectString(output.tranformationToolInstallationLink),
  } as any;
};

/**
 * deserializeAws_restJson1VcenterBasedRemoteInfo
 */
const de_VcenterBasedRemoteInfo = (output: any, context: __SerdeContext): VcenterBasedRemoteInfo => {
  return {
    osType: __expectString(output.osType),
    vcenterConfigurationTimeStamp: __expectString(output.vcenterConfigurationTimeStamp),
  } as any;
};

/**
 * deserializeAws_restJson1VcenterBasedRemoteInfoList
 */
const de_VcenterBasedRemoteInfoList = (output: any, context: __SerdeContext): VcenterBasedRemoteInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VcenterBasedRemoteInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VersionControlInfo
 */
const de_VersionControlInfo = (output: any, context: __SerdeContext): VersionControlInfo => {
  return {
    versionControlConfigurationTimeStamp: __expectString(output.versionControlConfigurationTimeStamp),
    versionControlType: __expectString(output.versionControlType),
  } as any;
};

/**
 * deserializeAws_restJson1VersionControlInfoList
 */
const de_VersionControlInfoList = (output: any, context: __SerdeContext): VersionControlInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VersionControlInfo(entry, context);
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
