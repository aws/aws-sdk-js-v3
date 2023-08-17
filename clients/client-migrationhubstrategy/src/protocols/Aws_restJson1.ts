// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  ApplicationComponentDetail,
  ApplicationPreferences,
  AssessmentSummary,
  AssessmentTarget,
  AwsManagedResources,
  AwsManagedTargetDestination,
  BusinessGoals,
  ConflictException,
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
  ManagementPreference,
  NoDatabaseMigrationPreference,
  NoManagementPreference,
  NoPreferenceTargetDestination,
  PrioritizeBusinessGoals,
  RecommendationReportDetails,
  ResourceNotFoundException,
  SelfManageResources,
  SelfManageTargetDestination,
  ServerDetail,
  ServiceLinkedRoleLockClientException,
  ServiceQuotaExceededException,
  SourceCode,
  StrategyOption,
  TargetDatabaseEngine,
  ThrottlingException,
  ValidationException,
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
  body = JSON.stringify(
    take(input, {
      applicationComponentCriteria: [],
      filterValue: [],
      groupIdFilter: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      sort: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      filterValue: [],
      groupIdFilter: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      serverCriteria: [],
      sort: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      applicationMode: [],
      applicationPreferences: (_) => _json(_),
      databasePreferences: (_) => _json(_),
      prioritizeBusinessGoals: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      assessmentTargets: (_) => _json(_),
      s3bucketForAnalysisData: [],
      s3bucketForReportData: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      S3Bucket: [],
      dataSourceType: [],
      groupId: (_) => _json(_),
      name: [],
      s3bucketForReportData: [],
      s3key: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      groupIdFilter: (_) => _json(_),
      outputFormat: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      assessmentId: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      appType: [],
      applicationComponentId: [],
      configureOnly: [],
      inclusionStatus: [],
      secretsManagerKey: [],
      sourceCodeList: (_) => _json(_),
      strategyOption: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      serverId: [],
      strategyOption: (_) => _json(_),
    })
  );
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
  const doc = take(data, {
    applicationComponentDetail: (_) => de_ApplicationComponentDetail(_, context),
    associatedApplications: _json,
    associatedServerIds: _json,
    moreApplicationResource: __expectBoolean,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    applicationComponentStrategies: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    assessmentTargets: _json,
    dataCollectionDetails: (_) => de_DataCollectionDetails(_, context),
    id: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    completionTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    importName: __expectString,
    inputS3Bucket: __expectString,
    inputS3Key: __expectString,
    numberOfRecordsFailed: __expectInt32,
    numberOfRecordsSuccess: __expectInt32,
    startTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    statusReportS3Bucket: __expectString,
    statusReportS3Key: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    id: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    applicationMode: __expectString,
    applicationPreferences: _json,
    databasePreferences: _json,
    prioritizeBusinessGoals: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    assessmentSummary: (_) => de_AssessmentSummary(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    id: __expectString,
    recommendationReportDetails: (_) => de_RecommendationReportDetails(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    associatedApplications: _json,
    nextToken: __expectString,
    serverDetail: (_) => de_ServerDetail(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    serverStrategies: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    applicationComponentInfos: (_) => de_ApplicationComponentDetails(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Collectors: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    taskInfos: (_) => de_ListImportFileTaskInformation(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    serverInfos: (_) => de_ServerDetails(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    assessmentId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    id: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    id: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
 * deserializeAws_restJson1ServiceLinkedRoleLockClientExceptionRes
 */
const de_ServiceLinkedRoleLockClientExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLinkedRoleLockClientException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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

// se_ApplicationPreferences omitted.

// se_AssessmentTarget omitted.

// se_AssessmentTargets omitted.

// se_AssessmentTargetValues omitted.

// se_AwsManagedResources omitted.

// se_AwsManagedTargetDestinations omitted.

// se_BusinessGoals omitted.

// se_DatabaseMigrationPreference omitted.

// se_DatabasePreferences omitted.

// se_Group omitted.

// se_GroupIds omitted.

// se_Heterogeneous omitted.

// se_HeterogeneousTargetDatabaseEngines omitted.

// se_Homogeneous omitted.

// se_HomogeneousTargetDatabaseEngines omitted.

// se_ManagementPreference omitted.

// se_NoDatabaseMigrationPreference omitted.

// se_NoManagementPreference omitted.

// se_NoPreferenceTargetDestinations omitted.

// se_PrioritizeBusinessGoals omitted.

// se_SelfManageResources omitted.

// se_SelfManageTargetDestinations omitted.

// se_SourceCode omitted.

// se_SourceCodeList omitted.

// se_StrategyOption omitted.

// se_TargetDatabaseEngines omitted.

// de_AnalysisStatusUnion omitted.

// de_AnalyzerNameUnion omitted.

// de_AntipatternReportResult omitted.

// de_AntipatternReportResultList omitted.

// de_AntipatternSeveritySummary omitted.

/**
 * deserializeAws_restJson1ApplicationComponentDetail
 */
const de_ApplicationComponentDetail = (output: any, context: __SerdeContext): ApplicationComponentDetail => {
  return take(output, {
    analysisStatus: __expectString,
    antipatternReportS3Object: _json,
    antipatternReportStatus: __expectString,
    antipatternReportStatusMessage: __expectString,
    appType: __expectString,
    appUnitError: _json,
    associatedServerId: __expectString,
    databaseConfigDetail: _json,
    id: __expectString,
    inclusionStatus: __expectString,
    lastAnalyzedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    listAntipatternSeveritySummary: _json,
    moreServerAssociationExists: __expectBoolean,
    name: __expectString,
    osDriver: __expectString,
    osVersion: __expectString,
    recommendationSet: _json,
    resourceSubType: __expectString,
    resultList: _json,
    runtimeStatus: __expectString,
    runtimeStatusMessage: __expectString,
    sourceCodeRepositories: _json,
    statusMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ApplicationComponentDetails
 */
const de_ApplicationComponentDetails = (output: any, context: __SerdeContext): ApplicationComponentDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ApplicationComponentDetail(entry, context);
    });
  return retVal;
};

// de_ApplicationComponentStatusSummary omitted.

// de_ApplicationComponentStrategies omitted.

// de_ApplicationComponentStrategy omitted.

// de_ApplicationComponentSummary omitted.

// de_ApplicationPreferences omitted.

// de_AppUnitError omitted.

/**
 * deserializeAws_restJson1AssessmentSummary
 */
const de_AssessmentSummary = (output: any, context: __SerdeContext): AssessmentSummary => {
  return take(output, {
    antipatternReportS3Object: _json,
    antipatternReportStatus: __expectString,
    antipatternReportStatusMessage: __expectString,
    lastAnalyzedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    listAntipatternSeveritySummary: _json,
    listApplicationComponentStatusSummary: _json,
    listApplicationComponentStrategySummary: _json,
    listApplicationComponentSummary: _json,
    listServerStatusSummary: _json,
    listServerStrategySummary: _json,
    listServerSummary: _json,
  }) as any;
};

// de_AssessmentTarget omitted.

// de_AssessmentTargets omitted.

// de_AssessmentTargetValues omitted.

// de_AssociatedApplication omitted.

// de_AssociatedApplications omitted.

// de_AssociatedServerIDs omitted.

// de_AwsManagedResources omitted.

// de_AwsManagedTargetDestinations omitted.

// de_BusinessGoals omitted.

// de_Collector omitted.

// de_Collectors omitted.

// de_ConfigurationSummary omitted.

// de_DatabaseConfigDetail omitted.

// de_DatabaseMigrationPreference omitted.

// de_DatabasePreferences omitted.

/**
 * deserializeAws_restJson1DataCollectionDetails
 */
const de_DataCollectionDetails = (output: any, context: __SerdeContext): DataCollectionDetails => {
  return take(output, {
    completionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failed: __expectInt32,
    inProgress: __expectInt32,
    servers: __expectInt32,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    statusMessage: __expectString,
    success: __expectInt32,
  }) as any;
};

// de_Heterogeneous omitted.

// de_HeterogeneousTargetDatabaseEngines omitted.

// de_Homogeneous omitted.

// de_HomogeneousTargetDatabaseEngines omitted.

/**
 * deserializeAws_restJson1ImportFileTaskInformation
 */
const de_ImportFileTaskInformation = (output: any, context: __SerdeContext): ImportFileTaskInformation => {
  return take(output, {
    completionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    importName: __expectString,
    inputS3Bucket: __expectString,
    inputS3Key: __expectString,
    numberOfRecordsFailed: __expectInt32,
    numberOfRecordsSuccess: __expectInt32,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    statusReportS3Bucket: __expectString,
    statusReportS3Key: __expectString,
  }) as any;
};

// de_IPAddressBasedRemoteInfo omitted.

// de_IPAddressBasedRemoteInfoList omitted.

// de_ListAntipatternSeveritySummary omitted.

// de_ListApplicationComponentStatusSummary omitted.

// de_ListApplicationComponentSummary omitted.

/**
 * deserializeAws_restJson1ListImportFileTaskInformation
 */
const de_ListImportFileTaskInformation = (output: any, context: __SerdeContext): ImportFileTaskInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImportFileTaskInformation(entry, context);
    });
  return retVal;
};

// de_ListServerStatusSummary omitted.

// de_ListServerSummary omitted.

// de_ListStrategySummary omitted.

// de_ManagementPreference omitted.

// de_NetworkInfo omitted.

// de_NetworkInfoList omitted.

// de_NoDatabaseMigrationPreference omitted.

// de_NoManagementPreference omitted.

// de_NoPreferenceTargetDestinations omitted.

// de_OSInfo omitted.

// de_PipelineInfo omitted.

// de_PipelineInfoList omitted.

// de_PrioritizeBusinessGoals omitted.

/**
 * deserializeAws_restJson1RecommendationReportDetails
 */
const de_RecommendationReportDetails = (output: any, context: __SerdeContext): RecommendationReportDetails => {
  return take(output, {
    completionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    s3Bucket: __expectString,
    s3Keys: _json,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    statusMessage: __expectString,
  }) as any;
};

// de_RecommendationSet omitted.

// de_RemoteSourceCodeAnalysisServerInfo omitted.

// de_Result omitted.

// de_ResultList omitted.

// de_S3Keys omitted.

// de_S3Object omitted.

// de_SelfManageResources omitted.

// de_SelfManageTargetDestinations omitted.

/**
 * deserializeAws_restJson1ServerDetail
 */
const de_ServerDetail = (output: any, context: __SerdeContext): ServerDetail => {
  return take(output, {
    antipatternReportS3Object: _json,
    antipatternReportStatus: __expectString,
    antipatternReportStatusMessage: __expectString,
    applicationComponentStrategySummary: _json,
    dataCollectionStatus: __expectString,
    id: __expectString,
    lastAnalyzedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    listAntipatternSeveritySummary: _json,
    name: __expectString,
    recommendationSet: _json,
    serverError: _json,
    serverType: __expectString,
    statusMessage: __expectString,
    systemInfo: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ServerDetails
 */
const de_ServerDetails = (output: any, context: __SerdeContext): ServerDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServerDetail(entry, context);
    });
  return retVal;
};

// de_ServerError omitted.

// de_ServerStatusSummary omitted.

// de_ServerStrategies omitted.

// de_ServerStrategy omitted.

// de_ServerSummary omitted.

// de_SourceCodeRepositories omitted.

// de_SourceCodeRepository omitted.

// de_StrategySummary omitted.

// de_SystemInfo omitted.

// de_TargetDatabaseEngines omitted.

// de_TransformationTool omitted.

// de_VcenterBasedRemoteInfo omitted.

// de_VcenterBasedRemoteInfoList omitted.

// de_VersionControlInfo omitted.

// de_VersionControlInfoList omitted.

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
