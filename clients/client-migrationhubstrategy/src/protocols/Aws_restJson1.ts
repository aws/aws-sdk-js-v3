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

export const serializeAws_restJson1GetApplicationComponentDetailsCommand = async (
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

export const serializeAws_restJson1GetApplicationComponentStrategiesCommand = async (
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

export const serializeAws_restJson1GetAssessmentCommand = async (
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

export const serializeAws_restJson1GetImportFileTaskCommand = async (
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

export const serializeAws_restJson1GetLatestAssessmentIdCommand = async (
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

export const serializeAws_restJson1GetPortfolioPreferencesCommand = async (
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

export const serializeAws_restJson1GetPortfolioSummaryCommand = async (
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

export const serializeAws_restJson1GetRecommendationReportDetailsCommand = async (
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

export const serializeAws_restJson1GetServerDetailsCommand = async (
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

export const serializeAws_restJson1GetServerStrategiesCommand = async (
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

export const serializeAws_restJson1ListApplicationComponentsCommand = async (
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
    ...(input.groupIdFilter != null && { groupIdFilter: serializeAws_restJson1GroupIds(input.groupIdFilter, context) }),
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

export const serializeAws_restJson1ListCollectorsCommand = async (
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

export const serializeAws_restJson1ListImportFileTaskCommand = async (
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

export const serializeAws_restJson1ListServersCommand = async (
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
    ...(input.groupIdFilter != null && { groupIdFilter: serializeAws_restJson1GroupIds(input.groupIdFilter, context) }),
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

export const serializeAws_restJson1PutPortfolioPreferencesCommand = async (
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
      applicationPreferences: serializeAws_restJson1ApplicationPreferences(input.applicationPreferences, context),
    }),
    ...(input.databasePreferences != null && {
      databasePreferences: serializeAws_restJson1DatabasePreferences(input.databasePreferences, context),
    }),
    ...(input.prioritizeBusinessGoals != null && {
      prioritizeBusinessGoals: serializeAws_restJson1PrioritizeBusinessGoals(input.prioritizeBusinessGoals, context),
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

export const serializeAws_restJson1StartAssessmentCommand = async (
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
      assessmentTargets: serializeAws_restJson1AssessmentTargets(input.assessmentTargets, context),
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

export const serializeAws_restJson1StartImportFileTaskCommand = async (
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
    ...(input.groupId != null && { groupId: serializeAws_restJson1GroupIds(input.groupId, context) }),
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

export const serializeAws_restJson1StartRecommendationReportGenerationCommand = async (
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
    ...(input.groupIdFilter != null && { groupIdFilter: serializeAws_restJson1GroupIds(input.groupIdFilter, context) }),
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

export const serializeAws_restJson1StopAssessmentCommand = async (
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

export const serializeAws_restJson1UpdateApplicationComponentConfigCommand = async (
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
    ...(input.sourceCodeList != null && {
      sourceCodeList: serializeAws_restJson1SourceCodeList(input.sourceCodeList, context),
    }),
    ...(input.strategyOption != null && {
      strategyOption: serializeAws_restJson1StrategyOption(input.strategyOption, context),
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

export const serializeAws_restJson1UpdateServerConfigCommand = async (
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
    ...(input.strategyOption != null && {
      strategyOption: serializeAws_restJson1StrategyOption(input.strategyOption, context),
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

export const deserializeAws_restJson1GetApplicationComponentDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationComponentDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApplicationComponentDetailsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationComponentDetail != null) {
    contents.applicationComponentDetail = deserializeAws_restJson1ApplicationComponentDetail(
      data.applicationComponentDetail,
      context
    );
  }
  if (data.associatedApplications != null) {
    contents.associatedApplications = deserializeAws_restJson1AssociatedApplications(
      data.associatedApplications,
      context
    );
  }
  if (data.associatedServerIds != null) {
    contents.associatedServerIds = deserializeAws_restJson1AssociatedServerIDs(data.associatedServerIds, context);
  }
  if (data.moreApplicationResource != null) {
    contents.moreApplicationResource = __expectBoolean(data.moreApplicationResource);
  }
  return contents;
};

const deserializeAws_restJson1GetApplicationComponentDetailsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubstrategy#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetApplicationComponentStrategiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationComponentStrategiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApplicationComponentStrategiesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationComponentStrategies != null) {
    contents.applicationComponentStrategies = deserializeAws_restJson1ApplicationComponentStrategies(
      data.applicationComponentStrategies,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetApplicationComponentStrategiesCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubstrategy#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAssessmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessmentTargets != null) {
    contents.assessmentTargets = deserializeAws_restJson1AssessmentTargets(data.assessmentTargets, context);
  }
  if (data.dataCollectionDetails != null) {
    contents.dataCollectionDetails = deserializeAws_restJson1DataCollectionDetails(data.dataCollectionDetails, context);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  return contents;
};

const deserializeAws_restJson1GetAssessmentCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubstrategy#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetImportFileTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportFileTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetImportFileTaskCommandError(output, context);
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

const deserializeAws_restJson1GetImportFileTaskCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubstrategy#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetLatestAssessmentIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLatestAssessmentIdCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLatestAssessmentIdCommandError(output, context);
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

const deserializeAws_restJson1GetLatestAssessmentIdCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DependencyException":
    case "com.amazonaws.migrationhubstrategy#DependencyException":
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetPortfolioPreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPortfolioPreferencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPortfolioPreferencesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationMode != null) {
    contents.applicationMode = __expectString(data.applicationMode);
  }
  if (data.applicationPreferences != null) {
    contents.applicationPreferences = deserializeAws_restJson1ApplicationPreferences(
      data.applicationPreferences,
      context
    );
  }
  if (data.databasePreferences != null) {
    contents.databasePreferences = deserializeAws_restJson1DatabasePreferences(data.databasePreferences, context);
  }
  if (data.prioritizeBusinessGoals != null) {
    contents.prioritizeBusinessGoals = deserializeAws_restJson1PrioritizeBusinessGoals(
      data.prioritizeBusinessGoals,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetPortfolioPreferencesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubstrategy#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetPortfolioSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPortfolioSummaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPortfolioSummaryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessmentSummary != null) {
    contents.assessmentSummary = deserializeAws_restJson1AssessmentSummary(data.assessmentSummary, context);
  }
  return contents;
};

const deserializeAws_restJson1GetPortfolioSummaryCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetRecommendationReportDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationReportDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRecommendationReportDetailsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.recommendationReportDetails != null) {
    contents.recommendationReportDetails = deserializeAws_restJson1RecommendationReportDetails(
      data.recommendationReportDetails,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetRecommendationReportDetailsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubstrategy#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetServerDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServerDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetServerDetailsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.associatedApplications != null) {
    contents.associatedApplications = deserializeAws_restJson1AssociatedApplications(
      data.associatedApplications,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.serverDetail != null) {
    contents.serverDetail = deserializeAws_restJson1ServerDetail(data.serverDetail, context);
  }
  return contents;
};

const deserializeAws_restJson1GetServerDetailsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubstrategy#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetServerStrategiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServerStrategiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetServerStrategiesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.serverStrategies != null) {
    contents.serverStrategies = deserializeAws_restJson1ServerStrategies(data.serverStrategies, context);
  }
  return contents;
};

const deserializeAws_restJson1GetServerStrategiesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubstrategy#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListApplicationComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationComponentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListApplicationComponentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationComponentInfos != null) {
    contents.applicationComponentInfos = deserializeAws_restJson1ApplicationComponentDetails(
      data.applicationComponentInfos,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListApplicationComponentsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceLinkedRoleLockClientException":
    case "com.amazonaws.migrationhubstrategy#ServiceLinkedRoleLockClientException":
      throw await deserializeAws_restJson1ServiceLinkedRoleLockClientExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListCollectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCollectorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Collectors != null) {
    contents.Collectors = deserializeAws_restJson1Collectors(data.Collectors, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListCollectorsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListImportFileTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportFileTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListImportFileTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.taskInfos != null) {
    contents.taskInfos = deserializeAws_restJson1ListImportFileTaskInformation(data.taskInfos, context);
  }
  return contents;
};

const deserializeAws_restJson1ListImportFileTaskCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListServersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.serverInfos != null) {
    contents.serverInfos = deserializeAws_restJson1ServerDetails(data.serverInfos, context);
  }
  return contents;
};

const deserializeAws_restJson1ListServersCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutPortfolioPreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPortfolioPreferencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutPortfolioPreferencesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutPortfolioPreferencesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.migrationhubstrategy#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartAssessmentCommandError(output, context);
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

const deserializeAws_restJson1StartAssessmentCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.migrationhubstrategy#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartImportFileTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportFileTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartImportFileTaskCommandError(output, context);
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

const deserializeAws_restJson1StartImportFileTaskCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.migrationhubstrategy#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartRecommendationReportGenerationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRecommendationReportGenerationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartRecommendationReportGenerationCommandError(output, context);
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

const deserializeAws_restJson1StartRecommendationReportGenerationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.migrationhubstrategy#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StopAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopAssessmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1StopAssessmentCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubstrategy#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateApplicationComponentConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationComponentConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApplicationComponentConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateApplicationComponentConfigCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubstrategy#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateServerConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateServerConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateServerConfigCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubstrategy#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubstrategy#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubstrategy#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
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

const deserializeAws_restJson1DependencyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependencyException> => {
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

const deserializeAws_restJson1InternalServerExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1ServiceLinkedRoleLockClientExceptionResponse = async (
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

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
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

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
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

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
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

const serializeAws_restJson1ApplicationPreferences = (input: ApplicationPreferences, context: __SerdeContext): any => {
  return {
    ...(input.managementPreference != null && {
      managementPreference: serializeAws_restJson1ManagementPreference(input.managementPreference, context),
    }),
  };
};

const serializeAws_restJson1AssessmentTarget = (input: AssessmentTarget, context: __SerdeContext): any => {
  return {
    ...(input.condition != null && { condition: input.condition }),
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: serializeAws_restJson1AssessmentTargetValues(input.values, context) }),
  };
};

const serializeAws_restJson1AssessmentTargets = (input: AssessmentTarget[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AssessmentTarget(entry, context);
    });
};

const serializeAws_restJson1AssessmentTargetValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1AwsManagedResources = (input: AwsManagedResources, context: __SerdeContext): any => {
  return {
    ...(input.targetDestination != null && {
      targetDestination: serializeAws_restJson1AwsManagedTargetDestinations(input.targetDestination, context),
    }),
  };
};

const serializeAws_restJson1AwsManagedTargetDestinations = (
  input: (AwsManagedTargetDestination | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1BusinessGoals = (input: BusinessGoals, context: __SerdeContext): any => {
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

const serializeAws_restJson1DatabaseMigrationPreference = (
  input: DatabaseMigrationPreference,
  context: __SerdeContext
): any => {
  return DatabaseMigrationPreference.visit(input, {
    heterogeneous: (value) => ({ heterogeneous: serializeAws_restJson1Heterogeneous(value, context) }),
    homogeneous: (value) => ({ homogeneous: serializeAws_restJson1Homogeneous(value, context) }),
    noPreference: (value) => ({ noPreference: serializeAws_restJson1NoDatabaseMigrationPreference(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1DatabasePreferences = (input: DatabasePreferences, context: __SerdeContext): any => {
  return {
    ...(input.databaseManagementPreference != null && {
      databaseManagementPreference: input.databaseManagementPreference,
    }),
    ...(input.databaseMigrationPreference != null && {
      databaseMigrationPreference: serializeAws_restJson1DatabaseMigrationPreference(
        input.databaseMigrationPreference,
        context
      ),
    }),
  };
};

const serializeAws_restJson1Group = (input: Group, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1GroupIds = (input: Group[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Group(entry, context);
    });
};

const serializeAws_restJson1Heterogeneous = (input: Heterogeneous, context: __SerdeContext): any => {
  return {
    ...(input.targetDatabaseEngine != null && {
      targetDatabaseEngine: serializeAws_restJson1HeterogeneousTargetDatabaseEngines(
        input.targetDatabaseEngine,
        context
      ),
    }),
  };
};

const serializeAws_restJson1HeterogeneousTargetDatabaseEngines = (
  input: (HeterogeneousTargetDatabaseEngine | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Homogeneous = (input: Homogeneous, context: __SerdeContext): any => {
  return {
    ...(input.targetDatabaseEngine != null && {
      targetDatabaseEngine: serializeAws_restJson1HomogeneousTargetDatabaseEngines(input.targetDatabaseEngine, context),
    }),
  };
};

const serializeAws_restJson1HomogeneousTargetDatabaseEngines = (
  input: (HomogeneousTargetDatabaseEngine | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ManagementPreference = (input: ManagementPreference, context: __SerdeContext): any => {
  return ManagementPreference.visit(input, {
    awsManagedResources: (value) => ({
      awsManagedResources: serializeAws_restJson1AwsManagedResources(value, context),
    }),
    noPreference: (value) => ({ noPreference: serializeAws_restJson1NoManagementPreference(value, context) }),
    selfManageResources: (value) => ({
      selfManageResources: serializeAws_restJson1SelfManageResources(value, context),
    }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1NoDatabaseMigrationPreference = (
  input: NoDatabaseMigrationPreference,
  context: __SerdeContext
): any => {
  return {
    ...(input.targetDatabaseEngine != null && {
      targetDatabaseEngine: serializeAws_restJson1TargetDatabaseEngines(input.targetDatabaseEngine, context),
    }),
  };
};

const serializeAws_restJson1NoManagementPreference = (input: NoManagementPreference, context: __SerdeContext): any => {
  return {
    ...(input.targetDestination != null && {
      targetDestination: serializeAws_restJson1NoPreferenceTargetDestinations(input.targetDestination, context),
    }),
  };
};

const serializeAws_restJson1NoPreferenceTargetDestinations = (
  input: (NoPreferenceTargetDestination | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1PrioritizeBusinessGoals = (
  input: PrioritizeBusinessGoals,
  context: __SerdeContext
): any => {
  return {
    ...(input.businessGoals != null && {
      businessGoals: serializeAws_restJson1BusinessGoals(input.businessGoals, context),
    }),
  };
};

const serializeAws_restJson1SelfManageResources = (input: SelfManageResources, context: __SerdeContext): any => {
  return {
    ...(input.targetDestination != null && {
      targetDestination: serializeAws_restJson1SelfManageTargetDestinations(input.targetDestination, context),
    }),
  };
};

const serializeAws_restJson1SelfManageTargetDestinations = (
  input: (SelfManageTargetDestination | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1SourceCode = (input: SourceCode, context: __SerdeContext): any => {
  return {
    ...(input.location != null && { location: input.location }),
    ...(input.projectName != null && { projectName: input.projectName }),
    ...(input.sourceVersion != null && { sourceVersion: input.sourceVersion }),
    ...(input.versionControl != null && { versionControl: input.versionControl }),
  };
};

const serializeAws_restJson1SourceCodeList = (input: SourceCode[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SourceCode(entry, context);
    });
};

const serializeAws_restJson1StrategyOption = (input: StrategyOption, context: __SerdeContext): any => {
  return {
    ...(input.isPreferred != null && { isPreferred: input.isPreferred }),
    ...(input.strategy != null && { strategy: input.strategy }),
    ...(input.targetDestination != null && { targetDestination: input.targetDestination }),
    ...(input.toolName != null && { toolName: input.toolName }),
  };
};

const serializeAws_restJson1TargetDatabaseEngines = (
  input: (TargetDatabaseEngine | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const deserializeAws_restJson1AntipatternSeveritySummary = (
  output: any,
  context: __SerdeContext
): AntipatternSeveritySummary => {
  return {
    count: __expectInt32(output.count),
    severity: __expectString(output.severity),
  } as any;
};

const deserializeAws_restJson1ApplicationComponentDetail = (
  output: any,
  context: __SerdeContext
): ApplicationComponentDetail => {
  return {
    analysisStatus: __expectString(output.analysisStatus),
    antipatternReportS3Object:
      output.antipatternReportS3Object != null
        ? deserializeAws_restJson1S3Object(output.antipatternReportS3Object, context)
        : undefined,
    antipatternReportStatus: __expectString(output.antipatternReportStatus),
    antipatternReportStatusMessage: __expectString(output.antipatternReportStatusMessage),
    appType: __expectString(output.appType),
    appUnitError:
      output.appUnitError != null ? deserializeAws_restJson1AppUnitError(output.appUnitError, context) : undefined,
    associatedServerId: __expectString(output.associatedServerId),
    databaseConfigDetail:
      output.databaseConfigDetail != null
        ? deserializeAws_restJson1DatabaseConfigDetail(output.databaseConfigDetail, context)
        : undefined,
    id: __expectString(output.id),
    inclusionStatus: __expectString(output.inclusionStatus),
    lastAnalyzedTimestamp:
      output.lastAnalyzedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastAnalyzedTimestamp)))
        : undefined,
    listAntipatternSeveritySummary:
      output.listAntipatternSeveritySummary != null
        ? deserializeAws_restJson1ListAntipatternSeveritySummary(output.listAntipatternSeveritySummary, context)
        : undefined,
    moreServerAssociationExists: __expectBoolean(output.moreServerAssociationExists),
    name: __expectString(output.name),
    osDriver: __expectString(output.osDriver),
    osVersion: __expectString(output.osVersion),
    recommendationSet:
      output.recommendationSet != null
        ? deserializeAws_restJson1RecommendationSet(output.recommendationSet, context)
        : undefined,
    resourceSubType: __expectString(output.resourceSubType),
    runtimeStatus: __expectString(output.runtimeStatus),
    runtimeStatusMessage: __expectString(output.runtimeStatusMessage),
    sourceCodeRepositories:
      output.sourceCodeRepositories != null
        ? deserializeAws_restJson1SourceCodeRepositories(output.sourceCodeRepositories, context)
        : undefined,
    statusMessage: __expectString(output.statusMessage),
  } as any;
};

const deserializeAws_restJson1ApplicationComponentDetails = (
  output: any,
  context: __SerdeContext
): ApplicationComponentDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ApplicationComponentDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ApplicationComponentStatusSummary = (
  output: any,
  context: __SerdeContext
): ApplicationComponentStatusSummary => {
  return {
    count: __expectInt32(output.count),
    srcCodeOrDbAnalysisStatus: __expectString(output.srcCodeOrDbAnalysisStatus),
  } as any;
};

const deserializeAws_restJson1ApplicationComponentStrategies = (
  output: any,
  context: __SerdeContext
): ApplicationComponentStrategy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ApplicationComponentStrategy(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ApplicationComponentStrategy = (
  output: any,
  context: __SerdeContext
): ApplicationComponentStrategy => {
  return {
    isPreferred: __expectBoolean(output.isPreferred),
    recommendation:
      output.recommendation != null
        ? deserializeAws_restJson1RecommendationSet(output.recommendation, context)
        : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1ApplicationComponentSummary = (
  output: any,
  context: __SerdeContext
): ApplicationComponentSummary => {
  return {
    appType: __expectString(output.appType),
    count: __expectInt32(output.count),
  } as any;
};

const deserializeAws_restJson1ApplicationPreferences = (
  output: any,
  context: __SerdeContext
): ApplicationPreferences => {
  return {
    managementPreference:
      output.managementPreference != null
        ? deserializeAws_restJson1ManagementPreference(__expectUnion(output.managementPreference), context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AppUnitError = (output: any, context: __SerdeContext): AppUnitError => {
  return {
    appUnitErrorCategory: __expectString(output.appUnitErrorCategory),
  } as any;
};

const deserializeAws_restJson1AssessmentSummary = (output: any, context: __SerdeContext): AssessmentSummary => {
  return {
    antipatternReportS3Object:
      output.antipatternReportS3Object != null
        ? deserializeAws_restJson1S3Object(output.antipatternReportS3Object, context)
        : undefined,
    antipatternReportStatus: __expectString(output.antipatternReportStatus),
    antipatternReportStatusMessage: __expectString(output.antipatternReportStatusMessage),
    lastAnalyzedTimestamp:
      output.lastAnalyzedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastAnalyzedTimestamp)))
        : undefined,
    listAntipatternSeveritySummary:
      output.listAntipatternSeveritySummary != null
        ? deserializeAws_restJson1ListAntipatternSeveritySummary(output.listAntipatternSeveritySummary, context)
        : undefined,
    listApplicationComponentStatusSummary:
      output.listApplicationComponentStatusSummary != null
        ? deserializeAws_restJson1ListApplicationComponentStatusSummary(
            output.listApplicationComponentStatusSummary,
            context
          )
        : undefined,
    listApplicationComponentStrategySummary:
      output.listApplicationComponentStrategySummary != null
        ? deserializeAws_restJson1ListStrategySummary(output.listApplicationComponentStrategySummary, context)
        : undefined,
    listApplicationComponentSummary:
      output.listApplicationComponentSummary != null
        ? deserializeAws_restJson1ListApplicationComponentSummary(output.listApplicationComponentSummary, context)
        : undefined,
    listServerStatusSummary:
      output.listServerStatusSummary != null
        ? deserializeAws_restJson1ListServerStatusSummary(output.listServerStatusSummary, context)
        : undefined,
    listServerStrategySummary:
      output.listServerStrategySummary != null
        ? deserializeAws_restJson1ListStrategySummary(output.listServerStrategySummary, context)
        : undefined,
    listServerSummary:
      output.listServerSummary != null
        ? deserializeAws_restJson1ListServerSummary(output.listServerSummary, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AssessmentTarget = (output: any, context: __SerdeContext): AssessmentTarget => {
  return {
    condition: __expectString(output.condition),
    name: __expectString(output.name),
    values: output.values != null ? deserializeAws_restJson1AssessmentTargetValues(output.values, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AssessmentTargets = (output: any, context: __SerdeContext): AssessmentTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssessmentTarget(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AssessmentTargetValues = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1AssociatedApplication = (output: any, context: __SerdeContext): AssociatedApplication => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1AssociatedApplications = (
  output: any,
  context: __SerdeContext
): AssociatedApplication[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssociatedApplication(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AssociatedServerIDs = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1AwsManagedResources = (output: any, context: __SerdeContext): AwsManagedResources => {
  return {
    targetDestination:
      output.targetDestination != null
        ? deserializeAws_restJson1AwsManagedTargetDestinations(output.targetDestination, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsManagedTargetDestinations = (
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

const deserializeAws_restJson1BusinessGoals = (output: any, context: __SerdeContext): BusinessGoals => {
  return {
    licenseCostReduction: __expectInt32(output.licenseCostReduction),
    modernizeInfrastructureWithCloudNativeTechnologies: __expectInt32(
      output.modernizeInfrastructureWithCloudNativeTechnologies
    ),
    reduceOperationalOverheadWithManagedServices: __expectInt32(output.reduceOperationalOverheadWithManagedServices),
    speedOfMigration: __expectInt32(output.speedOfMigration),
  } as any;
};

const deserializeAws_restJson1Collector = (output: any, context: __SerdeContext): Collector => {
  return {
    collectorHealth: __expectString(output.collectorHealth),
    collectorId: __expectString(output.collectorId),
    collectorVersion: __expectString(output.collectorVersion),
    configurationSummary:
      output.configurationSummary != null
        ? deserializeAws_restJson1ConfigurationSummary(output.configurationSummary, context)
        : undefined,
    hostName: __expectString(output.hostName),
    ipAddress: __expectString(output.ipAddress),
    lastActivityTimeStamp: __expectString(output.lastActivityTimeStamp),
    registeredTimeStamp: __expectString(output.registeredTimeStamp),
  } as any;
};

const deserializeAws_restJson1Collectors = (output: any, context: __SerdeContext): Collector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Collector(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ConfigurationSummary = (output: any, context: __SerdeContext): ConfigurationSummary => {
  return {
    ipAddressBasedRemoteInfoList:
      output.ipAddressBasedRemoteInfoList != null
        ? deserializeAws_restJson1IPAddressBasedRemoteInfoList(output.ipAddressBasedRemoteInfoList, context)
        : undefined,
    pipelineInfoList:
      output.pipelineInfoList != null
        ? deserializeAws_restJson1PipelineInfoList(output.pipelineInfoList, context)
        : undefined,
    remoteSourceCodeAnalysisServerInfo:
      output.remoteSourceCodeAnalysisServerInfo != null
        ? deserializeAws_restJson1RemoteSourceCodeAnalysisServerInfo(output.remoteSourceCodeAnalysisServerInfo, context)
        : undefined,
    vcenterBasedRemoteInfoList:
      output.vcenterBasedRemoteInfoList != null
        ? deserializeAws_restJson1VcenterBasedRemoteInfoList(output.vcenterBasedRemoteInfoList, context)
        : undefined,
    versionControlInfoList:
      output.versionControlInfoList != null
        ? deserializeAws_restJson1VersionControlInfoList(output.versionControlInfoList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DatabaseConfigDetail = (output: any, context: __SerdeContext): DatabaseConfigDetail => {
  return {
    secretName: __expectString(output.secretName),
  } as any;
};

const deserializeAws_restJson1DatabaseMigrationPreference = (
  output: any,
  context: __SerdeContext
): DatabaseMigrationPreference => {
  if (output.heterogeneous != null) {
    return {
      heterogeneous: deserializeAws_restJson1Heterogeneous(output.heterogeneous, context),
    };
  }
  if (output.homogeneous != null) {
    return {
      homogeneous: deserializeAws_restJson1Homogeneous(output.homogeneous, context),
    };
  }
  if (output.noPreference != null) {
    return {
      noPreference: deserializeAws_restJson1NoDatabaseMigrationPreference(output.noPreference, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1DatabasePreferences = (output: any, context: __SerdeContext): DatabasePreferences => {
  return {
    databaseManagementPreference: __expectString(output.databaseManagementPreference),
    databaseMigrationPreference:
      output.databaseMigrationPreference != null
        ? deserializeAws_restJson1DatabaseMigrationPreference(
            __expectUnion(output.databaseMigrationPreference),
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1DataCollectionDetails = (output: any, context: __SerdeContext): DataCollectionDetails => {
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

const deserializeAws_restJson1Heterogeneous = (output: any, context: __SerdeContext): Heterogeneous => {
  return {
    targetDatabaseEngine:
      output.targetDatabaseEngine != null
        ? deserializeAws_restJson1HeterogeneousTargetDatabaseEngines(output.targetDatabaseEngine, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1HeterogeneousTargetDatabaseEngines = (
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

const deserializeAws_restJson1Homogeneous = (output: any, context: __SerdeContext): Homogeneous => {
  return {
    targetDatabaseEngine:
      output.targetDatabaseEngine != null
        ? deserializeAws_restJson1HomogeneousTargetDatabaseEngines(output.targetDatabaseEngine, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1HomogeneousTargetDatabaseEngines = (
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

const deserializeAws_restJson1ImportFileTaskInformation = (
  output: any,
  context: __SerdeContext
): ImportFileTaskInformation => {
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

const deserializeAws_restJson1IPAddressBasedRemoteInfo = (
  output: any,
  context: __SerdeContext
): IPAddressBasedRemoteInfo => {
  return {
    authType: __expectString(output.authType),
    ipAddressConfigurationTimeStamp: __expectString(output.ipAddressConfigurationTimeStamp),
    osType: __expectString(output.osType),
  } as any;
};

const deserializeAws_restJson1IPAddressBasedRemoteInfoList = (
  output: any,
  context: __SerdeContext
): IPAddressBasedRemoteInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IPAddressBasedRemoteInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListAntipatternSeveritySummary = (
  output: any,
  context: __SerdeContext
): AntipatternSeveritySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AntipatternSeveritySummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListApplicationComponentStatusSummary = (
  output: any,
  context: __SerdeContext
): ApplicationComponentStatusSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ApplicationComponentStatusSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListApplicationComponentSummary = (
  output: any,
  context: __SerdeContext
): ApplicationComponentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ApplicationComponentSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListImportFileTaskInformation = (
  output: any,
  context: __SerdeContext
): ImportFileTaskInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ImportFileTaskInformation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListServerStatusSummary = (
  output: any,
  context: __SerdeContext
): ServerStatusSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ServerStatusSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListServerSummary = (output: any, context: __SerdeContext): ServerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ServerSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListStrategySummary = (output: any, context: __SerdeContext): StrategySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StrategySummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ManagementPreference = (output: any, context: __SerdeContext): ManagementPreference => {
  if (output.awsManagedResources != null) {
    return {
      awsManagedResources: deserializeAws_restJson1AwsManagedResources(output.awsManagedResources, context),
    };
  }
  if (output.noPreference != null) {
    return {
      noPreference: deserializeAws_restJson1NoManagementPreference(output.noPreference, context),
    };
  }
  if (output.selfManageResources != null) {
    return {
      selfManageResources: deserializeAws_restJson1SelfManageResources(output.selfManageResources, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1NetworkInfo = (output: any, context: __SerdeContext): NetworkInfo => {
  return {
    interfaceName: __expectString(output.interfaceName),
    ipAddress: __expectString(output.ipAddress),
    macAddress: __expectString(output.macAddress),
    netMask: __expectString(output.netMask),
  } as any;
};

const deserializeAws_restJson1NetworkInfoList = (output: any, context: __SerdeContext): NetworkInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NetworkInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1NoDatabaseMigrationPreference = (
  output: any,
  context: __SerdeContext
): NoDatabaseMigrationPreference => {
  return {
    targetDatabaseEngine:
      output.targetDatabaseEngine != null
        ? deserializeAws_restJson1TargetDatabaseEngines(output.targetDatabaseEngine, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NoManagementPreference = (
  output: any,
  context: __SerdeContext
): NoManagementPreference => {
  return {
    targetDestination:
      output.targetDestination != null
        ? deserializeAws_restJson1NoPreferenceTargetDestinations(output.targetDestination, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NoPreferenceTargetDestinations = (
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

const deserializeAws_restJson1OSInfo = (output: any, context: __SerdeContext): OSInfo => {
  return {
    type: __expectString(output.type),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1PipelineInfo = (output: any, context: __SerdeContext): PipelineInfo => {
  return {
    pipelineConfigurationTimeStamp: __expectString(output.pipelineConfigurationTimeStamp),
    pipelineType: __expectString(output.pipelineType),
  } as any;
};

const deserializeAws_restJson1PipelineInfoList = (output: any, context: __SerdeContext): PipelineInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PipelineInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PrioritizeBusinessGoals = (
  output: any,
  context: __SerdeContext
): PrioritizeBusinessGoals => {
  return {
    businessGoals:
      output.businessGoals != null ? deserializeAws_restJson1BusinessGoals(output.businessGoals, context) : undefined,
  } as any;
};

const deserializeAws_restJson1RecommendationReportDetails = (
  output: any,
  context: __SerdeContext
): RecommendationReportDetails => {
  return {
    completionTime:
      output.completionTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.completionTime)))
        : undefined,
    s3Bucket: __expectString(output.s3Bucket),
    s3Keys: output.s3Keys != null ? deserializeAws_restJson1S3Keys(output.s3Keys, context) : undefined,
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
  } as any;
};

const deserializeAws_restJson1RecommendationSet = (output: any, context: __SerdeContext): RecommendationSet => {
  return {
    strategy: __expectString(output.strategy),
    targetDestination: __expectString(output.targetDestination),
    transformationTool:
      output.transformationTool != null
        ? deserializeAws_restJson1TransformationTool(output.transformationTool, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RemoteSourceCodeAnalysisServerInfo = (
  output: any,
  context: __SerdeContext
): RemoteSourceCodeAnalysisServerInfo => {
  return {
    remoteSourceCodeAnalysisServerConfigurationTimestamp: __expectString(
      output.remoteSourceCodeAnalysisServerConfigurationTimestamp
    ),
  } as any;
};

const deserializeAws_restJson1S3Keys = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1S3Object = (output: any, context: __SerdeContext): S3Object => {
  return {
    s3Bucket: __expectString(output.s3Bucket),
    s3key: __expectString(output.s3key),
  } as any;
};

const deserializeAws_restJson1SelfManageResources = (output: any, context: __SerdeContext): SelfManageResources => {
  return {
    targetDestination:
      output.targetDestination != null
        ? deserializeAws_restJson1SelfManageTargetDestinations(output.targetDestination, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SelfManageTargetDestinations = (
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

const deserializeAws_restJson1ServerDetail = (output: any, context: __SerdeContext): ServerDetail => {
  return {
    antipatternReportS3Object:
      output.antipatternReportS3Object != null
        ? deserializeAws_restJson1S3Object(output.antipatternReportS3Object, context)
        : undefined,
    antipatternReportStatus: __expectString(output.antipatternReportStatus),
    antipatternReportStatusMessage: __expectString(output.antipatternReportStatusMessage),
    applicationComponentStrategySummary:
      output.applicationComponentStrategySummary != null
        ? deserializeAws_restJson1ListStrategySummary(output.applicationComponentStrategySummary, context)
        : undefined,
    dataCollectionStatus: __expectString(output.dataCollectionStatus),
    id: __expectString(output.id),
    lastAnalyzedTimestamp:
      output.lastAnalyzedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastAnalyzedTimestamp)))
        : undefined,
    listAntipatternSeveritySummary:
      output.listAntipatternSeveritySummary != null
        ? deserializeAws_restJson1ListAntipatternSeveritySummary(output.listAntipatternSeveritySummary, context)
        : undefined,
    name: __expectString(output.name),
    recommendationSet:
      output.recommendationSet != null
        ? deserializeAws_restJson1RecommendationSet(output.recommendationSet, context)
        : undefined,
    serverError:
      output.serverError != null ? deserializeAws_restJson1ServerError(output.serverError, context) : undefined,
    serverType: __expectString(output.serverType),
    statusMessage: __expectString(output.statusMessage),
    systemInfo: output.systemInfo != null ? deserializeAws_restJson1SystemInfo(output.systemInfo, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ServerDetails = (output: any, context: __SerdeContext): ServerDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ServerDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ServerError = (output: any, context: __SerdeContext): ServerError => {
  return {
    serverErrorCategory: __expectString(output.serverErrorCategory),
  } as any;
};

const deserializeAws_restJson1ServerStatusSummary = (output: any, context: __SerdeContext): ServerStatusSummary => {
  return {
    count: __expectInt32(output.count),
    runTimeAssessmentStatus: __expectString(output.runTimeAssessmentStatus),
  } as any;
};

const deserializeAws_restJson1ServerStrategies = (output: any, context: __SerdeContext): ServerStrategy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ServerStrategy(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ServerStrategy = (output: any, context: __SerdeContext): ServerStrategy => {
  return {
    isPreferred: __expectBoolean(output.isPreferred),
    numberOfApplicationComponents: __expectInt32(output.numberOfApplicationComponents),
    recommendation:
      output.recommendation != null
        ? deserializeAws_restJson1RecommendationSet(output.recommendation, context)
        : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1ServerSummary = (output: any, context: __SerdeContext): ServerSummary => {
  return {
    ServerOsType: __expectString(output.ServerOsType),
    count: __expectInt32(output.count),
  } as any;
};

const deserializeAws_restJson1SourceCodeRepositories = (
  output: any,
  context: __SerdeContext
): SourceCodeRepository[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SourceCodeRepository(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SourceCodeRepository = (output: any, context: __SerdeContext): SourceCodeRepository => {
  return {
    branch: __expectString(output.branch),
    projectName: __expectString(output.projectName),
    repository: __expectString(output.repository),
    versionControlType: __expectString(output.versionControlType),
  } as any;
};

const deserializeAws_restJson1StrategySummary = (output: any, context: __SerdeContext): StrategySummary => {
  return {
    count: __expectInt32(output.count),
    strategy: __expectString(output.strategy),
  } as any;
};

const deserializeAws_restJson1SystemInfo = (output: any, context: __SerdeContext): SystemInfo => {
  return {
    cpuArchitecture: __expectString(output.cpuArchitecture),
    fileSystemType: __expectString(output.fileSystemType),
    networkInfoList:
      output.networkInfoList != null
        ? deserializeAws_restJson1NetworkInfoList(output.networkInfoList, context)
        : undefined,
    osInfo: output.osInfo != null ? deserializeAws_restJson1OSInfo(output.osInfo, context) : undefined,
  } as any;
};

const deserializeAws_restJson1TargetDatabaseEngines = (
  output: any,
  context: __SerdeContext
): (TargetDatabaseEngine | string)[] => {
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

const deserializeAws_restJson1TransformationTool = (output: any, context: __SerdeContext): TransformationTool => {
  return {
    description: __expectString(output.description),
    name: __expectString(output.name),
    tranformationToolInstallationLink: __expectString(output.tranformationToolInstallationLink),
  } as any;
};

const deserializeAws_restJson1VcenterBasedRemoteInfo = (
  output: any,
  context: __SerdeContext
): VcenterBasedRemoteInfo => {
  return {
    osType: __expectString(output.osType),
    vcenterConfigurationTimeStamp: __expectString(output.vcenterConfigurationTimeStamp),
  } as any;
};

const deserializeAws_restJson1VcenterBasedRemoteInfoList = (
  output: any,
  context: __SerdeContext
): VcenterBasedRemoteInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VcenterBasedRemoteInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VersionControlInfo = (output: any, context: __SerdeContext): VersionControlInfo => {
  return {
    versionControlConfigurationTimeStamp: __expectString(output.versionControlConfigurationTimeStamp),
    versionControlType: __expectString(output.versionControlType),
  } as any;
};

const deserializeAws_restJson1VersionControlInfoList = (output: any, context: __SerdeContext): VersionControlInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VersionControlInfo(entry, context);
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
