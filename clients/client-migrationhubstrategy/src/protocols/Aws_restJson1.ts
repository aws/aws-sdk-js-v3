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
  parseEpochTimestamp as __parseEpochTimestamp,
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
  ApplicationComponentStrategy,
  ApplicationComponentSummary,
  ApplicationPreferences,
  AssessmentSummary,
  AssociatedApplication,
  AwsManagedResources,
  AwsManagedTargetDestination,
  BusinessGoals,
  Collector,
  ConflictException,
  DatabaseConfigDetail,
  DatabaseMigrationPreference,
  DatabasePreferences,
  DataCollectionDetails,
  Group,
  Heterogeneous,
  HeterogeneousTargetDatabaseEngine,
  Homogeneous,
  HomogeneousTargetDatabaseEngine,
  ImportFileTaskInformation,
  InternalServerException,
  ManagementPreference,
  NetworkInfo,
  NoDatabaseMigrationPreference,
  NoManagementPreference,
  NoPreferenceTargetDestination,
  OSInfo,
  PrioritizeBusinessGoals,
  RecommendationReportDetails,
  RecommendationSet,
  ResourceNotFoundException,
  S3Object,
  SelfManageResources,
  SelfManageTargetDestination,
  ServerDetail,
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
  if (input.applicationComponentId !== undefined) {
    const labelValue: string = input.applicationComponentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: applicationComponentId.");
    }
    resolvedPath = resolvedPath.replace("{applicationComponentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: applicationComponentId.");
  }
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
  if (input.applicationComponentId !== undefined) {
    const labelValue: string = input.applicationComponentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: applicationComponentId.");
    }
    resolvedPath = resolvedPath.replace("{applicationComponentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: applicationComponentId.");
  }
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
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
  }
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
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
  }
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
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
  }
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
  if (input.serverId !== undefined) {
    const labelValue: string = input.serverId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: serverId.");
    }
    resolvedPath = resolvedPath.replace("{serverId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: serverId.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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
  if (input.serverId !== undefined) {
    const labelValue: string = input.serverId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: serverId.");
    }
    resolvedPath = resolvedPath.replace("{serverId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: serverId.");
  }
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
    ...(input.applicationComponentCriteria !== undefined &&
      input.applicationComponentCriteria !== null && {
        applicationComponentCriteria: input.applicationComponentCriteria,
      }),
    ...(input.filterValue !== undefined && input.filterValue !== null && { filterValue: input.filterValue }),
    ...(input.groupIdFilter !== undefined &&
      input.groupIdFilter !== null && { groupIdFilter: serializeAws_restJson1GroupIds(input.groupIdFilter, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.sort !== undefined && input.sort !== null && { sort: input.sort }),
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
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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
    ...(input.filterValue !== undefined && input.filterValue !== null && { filterValue: input.filterValue }),
    ...(input.groupIdFilter !== undefined &&
      input.groupIdFilter !== null && { groupIdFilter: serializeAws_restJson1GroupIds(input.groupIdFilter, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.serverCriteria !== undefined &&
      input.serverCriteria !== null && { serverCriteria: input.serverCriteria }),
    ...(input.sort !== undefined && input.sort !== null && { sort: input.sort }),
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
    ...(input.applicationPreferences !== undefined &&
      input.applicationPreferences !== null && {
        applicationPreferences: serializeAws_restJson1ApplicationPreferences(input.applicationPreferences, context),
      }),
    ...(input.databasePreferences !== undefined &&
      input.databasePreferences !== null && {
        databasePreferences: serializeAws_restJson1DatabasePreferences(input.databasePreferences, context),
      }),
    ...(input.prioritizeBusinessGoals !== undefined &&
      input.prioritizeBusinessGoals !== null && {
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
    ...(input.s3bucketForAnalysisData !== undefined &&
      input.s3bucketForAnalysisData !== null && { s3bucketForAnalysisData: input.s3bucketForAnalysisData }),
    ...(input.s3bucketForReportData !== undefined &&
      input.s3bucketForReportData !== null && { s3bucketForReportData: input.s3bucketForReportData }),
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
    ...(input.S3Bucket !== undefined && input.S3Bucket !== null && { S3Bucket: input.S3Bucket }),
    ...(input.dataSourceType !== undefined &&
      input.dataSourceType !== null && { dataSourceType: input.dataSourceType }),
    ...(input.groupId !== undefined &&
      input.groupId !== null && { groupId: serializeAws_restJson1GroupIds(input.groupId, context) }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.s3bucketForReportData !== undefined &&
      input.s3bucketForReportData !== null && { s3bucketForReportData: input.s3bucketForReportData }),
    ...(input.s3key !== undefined && input.s3key !== null && { s3key: input.s3key }),
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
    ...(input.groupIdFilter !== undefined &&
      input.groupIdFilter !== null && { groupIdFilter: serializeAws_restJson1GroupIds(input.groupIdFilter, context) }),
    ...(input.outputFormat !== undefined && input.outputFormat !== null && { outputFormat: input.outputFormat }),
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
    ...(input.assessmentId !== undefined && input.assessmentId !== null && { assessmentId: input.assessmentId }),
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
    ...(input.applicationComponentId !== undefined &&
      input.applicationComponentId !== null && { applicationComponentId: input.applicationComponentId }),
    ...(input.inclusionStatus !== undefined &&
      input.inclusionStatus !== null && { inclusionStatus: input.inclusionStatus }),
    ...(input.secretsManagerKey !== undefined &&
      input.secretsManagerKey !== null && { secretsManagerKey: input.secretsManagerKey }),
    ...(input.sourceCodeList !== undefined &&
      input.sourceCodeList !== null && {
        sourceCodeList: serializeAws_restJson1SourceCodeList(input.sourceCodeList, context),
      }),
    ...(input.strategyOption !== undefined &&
      input.strategyOption !== null && {
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
    ...(input.serverId !== undefined && input.serverId !== null && { serverId: input.serverId }),
    ...(input.strategyOption !== undefined &&
      input.strategyOption !== null && {
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
  const contents: GetApplicationComponentDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    applicationComponentDetail: undefined,
    associatedApplications: undefined,
    associatedServerIds: undefined,
    moreApplicationResource: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationComponentDetail !== undefined && data.applicationComponentDetail !== null) {
    contents.applicationComponentDetail = deserializeAws_restJson1ApplicationComponentDetail(
      data.applicationComponentDetail,
      context
    );
  }
  if (data.associatedApplications !== undefined && data.associatedApplications !== null) {
    contents.associatedApplications = deserializeAws_restJson1AssociatedApplications(
      data.associatedApplications,
      context
    );
  }
  if (data.associatedServerIds !== undefined && data.associatedServerIds !== null) {
    contents.associatedServerIds = deserializeAws_restJson1AssociatedServerIDs(data.associatedServerIds, context);
  }
  if (data.moreApplicationResource !== undefined && data.moreApplicationResource !== null) {
    contents.moreApplicationResource = __expectBoolean(data.moreApplicationResource);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetApplicationComponentDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationComponentDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetApplicationComponentStrategiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationComponentStrategiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApplicationComponentStrategiesCommandError(output, context);
  }
  const contents: GetApplicationComponentStrategiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    applicationComponentStrategies: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationComponentStrategies !== undefined && data.applicationComponentStrategies !== null) {
    contents.applicationComponentStrategies = deserializeAws_restJson1ApplicationComponentStrategies(
      data.applicationComponentStrategies,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetApplicationComponentStrategiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationComponentStrategiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAssessmentCommandError(output, context);
  }
  const contents: GetAssessmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    dataCollectionDetails: undefined,
    id: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.dataCollectionDetails !== undefined && data.dataCollectionDetails !== null) {
    contents.dataCollectionDetails = deserializeAws_restJson1DataCollectionDetails(data.dataCollectionDetails, context);
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = __expectString(data.id);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAssessmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssessmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetImportFileTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportFileTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetImportFileTaskCommandError(output, context);
  }
  const contents: GetImportFileTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    completionTime: undefined,
    id: undefined,
    importName: undefined,
    inputS3Bucket: undefined,
    inputS3Key: undefined,
    numberOfRecordsFailed: undefined,
    numberOfRecordsSuccess: undefined,
    startTime: undefined,
    status: undefined,
    statusReportS3Bucket: undefined,
    statusReportS3Key: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.completionTime !== undefined && data.completionTime !== null) {
    contents.completionTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.completionTime)));
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = __expectString(data.id);
  }
  if (data.importName !== undefined && data.importName !== null) {
    contents.importName = __expectString(data.importName);
  }
  if (data.inputS3Bucket !== undefined && data.inputS3Bucket !== null) {
    contents.inputS3Bucket = __expectString(data.inputS3Bucket);
  }
  if (data.inputS3Key !== undefined && data.inputS3Key !== null) {
    contents.inputS3Key = __expectString(data.inputS3Key);
  }
  if (data.numberOfRecordsFailed !== undefined && data.numberOfRecordsFailed !== null) {
    contents.numberOfRecordsFailed = __expectInt32(data.numberOfRecordsFailed);
  }
  if (data.numberOfRecordsSuccess !== undefined && data.numberOfRecordsSuccess !== null) {
    contents.numberOfRecordsSuccess = __expectInt32(data.numberOfRecordsSuccess);
  }
  if (data.startTime !== undefined && data.startTime !== null) {
    contents.startTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.startTime)));
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusReportS3Bucket !== undefined && data.statusReportS3Bucket !== null) {
    contents.statusReportS3Bucket = __expectString(data.statusReportS3Bucket);
  }
  if (data.statusReportS3Key !== undefined && data.statusReportS3Key !== null) {
    contents.statusReportS3Key = __expectString(data.statusReportS3Key);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetImportFileTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportFileTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetPortfolioPreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPortfolioPreferencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPortfolioPreferencesCommandError(output, context);
  }
  const contents: GetPortfolioPreferencesCommandOutput = {
    $metadata: deserializeMetadata(output),
    applicationPreferences: undefined,
    databasePreferences: undefined,
    prioritizeBusinessGoals: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationPreferences !== undefined && data.applicationPreferences !== null) {
    contents.applicationPreferences = deserializeAws_restJson1ApplicationPreferences(
      data.applicationPreferences,
      context
    );
  }
  if (data.databasePreferences !== undefined && data.databasePreferences !== null) {
    contents.databasePreferences = deserializeAws_restJson1DatabasePreferences(data.databasePreferences, context);
  }
  if (data.prioritizeBusinessGoals !== undefined && data.prioritizeBusinessGoals !== null) {
    contents.prioritizeBusinessGoals = deserializeAws_restJson1PrioritizeBusinessGoals(
      data.prioritizeBusinessGoals,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetPortfolioPreferencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPortfolioPreferencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetPortfolioSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPortfolioSummaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPortfolioSummaryCommandError(output, context);
  }
  const contents: GetPortfolioSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    assessmentSummary: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessmentSummary !== undefined && data.assessmentSummary !== null) {
    contents.assessmentSummary = deserializeAws_restJson1AssessmentSummary(data.assessmentSummary, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetPortfolioSummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPortfolioSummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetRecommendationReportDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationReportDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRecommendationReportDetailsCommandError(output, context);
  }
  const contents: GetRecommendationReportDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    id: undefined,
    recommendationReportDetails: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id !== undefined && data.id !== null) {
    contents.id = __expectString(data.id);
  }
  if (data.recommendationReportDetails !== undefined && data.recommendationReportDetails !== null) {
    contents.recommendationReportDetails = deserializeAws_restJson1RecommendationReportDetails(
      data.recommendationReportDetails,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetRecommendationReportDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationReportDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetServerDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServerDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetServerDetailsCommandError(output, context);
  }
  const contents: GetServerDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    associatedApplications: undefined,
    nextToken: undefined,
    serverDetail: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.associatedApplications !== undefined && data.associatedApplications !== null) {
    contents.associatedApplications = deserializeAws_restJson1AssociatedApplications(
      data.associatedApplications,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.serverDetail !== undefined && data.serverDetail !== null) {
    contents.serverDetail = deserializeAws_restJson1ServerDetail(data.serverDetail, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetServerDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServerDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetServerStrategiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServerStrategiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetServerStrategiesCommandError(output, context);
  }
  const contents: GetServerStrategiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    serverStrategies: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.serverStrategies !== undefined && data.serverStrategies !== null) {
    contents.serverStrategies = deserializeAws_restJson1ServerStrategies(data.serverStrategies, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetServerStrategiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServerStrategiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListApplicationComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationComponentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListApplicationComponentsCommandError(output, context);
  }
  const contents: ListApplicationComponentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    applicationComponentInfos: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationComponentInfos !== undefined && data.applicationComponentInfos !== null) {
    contents.applicationComponentInfos = deserializeAws_restJson1ApplicationComponentDetails(
      data.applicationComponentInfos,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListApplicationComponentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationComponentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListCollectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCollectorsCommandError(output, context);
  }
  const contents: ListCollectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Collectors: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Collectors !== undefined && data.Collectors !== null) {
    contents.Collectors = deserializeAws_restJson1Collectors(data.Collectors, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListCollectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListImportFileTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportFileTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListImportFileTaskCommandError(output, context);
  }
  const contents: ListImportFileTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    taskInfos: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.taskInfos !== undefined && data.taskInfos !== null) {
    contents.taskInfos = deserializeAws_restJson1ListImportFileTaskInformation(data.taskInfos, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListImportFileTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportFileTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListServersCommandError(output, context);
  }
  const contents: ListServersCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    serverInfos: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.serverInfos !== undefined && data.serverInfos !== null) {
    contents.serverInfos = deserializeAws_restJson1ServerDetails(data.serverInfos, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListServersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1PutPortfolioPreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPortfolioPreferencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutPortfolioPreferencesCommandError(output, context);
  }
  const contents: PutPortfolioPreferencesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutPortfolioPreferencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPortfolioPreferencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1StartAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartAssessmentCommandError(output, context);
  }
  const contents: StartAssessmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    assessmentId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessmentId !== undefined && data.assessmentId !== null) {
    contents.assessmentId = __expectString(data.assessmentId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartAssessmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAssessmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1StartImportFileTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportFileTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartImportFileTaskCommandError(output, context);
  }
  const contents: StartImportFileTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    id: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id !== undefined && data.id !== null) {
    contents.id = __expectString(data.id);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartImportFileTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportFileTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1StartRecommendationReportGenerationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRecommendationReportGenerationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartRecommendationReportGenerationCommandError(output, context);
  }
  const contents: StartRecommendationReportGenerationCommandOutput = {
    $metadata: deserializeMetadata(output),
    id: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id !== undefined && data.id !== null) {
    contents.id = __expectString(data.id);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartRecommendationReportGenerationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRecommendationReportGenerationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1StopAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopAssessmentCommandError(output, context);
  }
  const contents: StopAssessmentCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StopAssessmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAssessmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateApplicationComponentConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationComponentConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApplicationComponentConfigCommandError(output, context);
  }
  const contents: UpdateApplicationComponentConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateApplicationComponentConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationComponentConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateServerConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateServerConfigCommandError(output, context);
  }
  const contents: UpdateServerConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateServerConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
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
    ...(input.managementPreference !== undefined &&
      input.managementPreference !== null && {
        managementPreference: serializeAws_restJson1ManagementPreference(input.managementPreference, context),
      }),
  };
};

const serializeAws_restJson1AwsManagedResources = (input: AwsManagedResources, context: __SerdeContext): any => {
  return {
    ...(input.targetDestination !== undefined &&
      input.targetDestination !== null && {
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
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1BusinessGoals = (input: BusinessGoals, context: __SerdeContext): any => {
  return {
    ...(input.licenseCostReduction !== undefined &&
      input.licenseCostReduction !== null && { licenseCostReduction: input.licenseCostReduction }),
    ...(input.modernizeInfrastructureWithCloudNativeTechnologies !== undefined &&
      input.modernizeInfrastructureWithCloudNativeTechnologies !== null && {
        modernizeInfrastructureWithCloudNativeTechnologies: input.modernizeInfrastructureWithCloudNativeTechnologies,
      }),
    ...(input.reduceOperationalOverheadWithManagedServices !== undefined &&
      input.reduceOperationalOverheadWithManagedServices !== null && {
        reduceOperationalOverheadWithManagedServices: input.reduceOperationalOverheadWithManagedServices,
      }),
    ...(input.speedOfMigration !== undefined &&
      input.speedOfMigration !== null && { speedOfMigration: input.speedOfMigration }),
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
    ...(input.databaseManagementPreference !== undefined &&
      input.databaseManagementPreference !== null && {
        databaseManagementPreference: input.databaseManagementPreference,
      }),
    ...(input.databaseMigrationPreference !== undefined &&
      input.databaseMigrationPreference !== null && {
        databaseMigrationPreference: serializeAws_restJson1DatabaseMigrationPreference(
          input.databaseMigrationPreference,
          context
        ),
      }),
  };
};

const serializeAws_restJson1Group = (input: Group, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_restJson1GroupIds = (input: Group[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Group(entry, context);
    });
};

const serializeAws_restJson1Heterogeneous = (input: Heterogeneous, context: __SerdeContext): any => {
  return {
    ...(input.targetDatabaseEngine !== undefined &&
      input.targetDatabaseEngine !== null && {
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
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Homogeneous = (input: Homogeneous, context: __SerdeContext): any => {
  return {
    ...(input.targetDatabaseEngine !== undefined &&
      input.targetDatabaseEngine !== null && {
        targetDatabaseEngine: serializeAws_restJson1HomogeneousTargetDatabaseEngines(
          input.targetDatabaseEngine,
          context
        ),
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
      if (entry === null) {
        return null as any;
      }
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
    ...(input.targetDatabaseEngine !== undefined &&
      input.targetDatabaseEngine !== null && {
        targetDatabaseEngine: serializeAws_restJson1TargetDatabaseEngines(input.targetDatabaseEngine, context),
      }),
  };
};

const serializeAws_restJson1NoManagementPreference = (input: NoManagementPreference, context: __SerdeContext): any => {
  return {
    ...(input.targetDestination !== undefined &&
      input.targetDestination !== null && {
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
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1PrioritizeBusinessGoals = (
  input: PrioritizeBusinessGoals,
  context: __SerdeContext
): any => {
  return {
    ...(input.businessGoals !== undefined &&
      input.businessGoals !== null && {
        businessGoals: serializeAws_restJson1BusinessGoals(input.businessGoals, context),
      }),
  };
};

const serializeAws_restJson1SelfManageResources = (input: SelfManageResources, context: __SerdeContext): any => {
  return {
    ...(input.targetDestination !== undefined &&
      input.targetDestination !== null && {
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
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1SourceCode = (input: SourceCode, context: __SerdeContext): any => {
  return {
    ...(input.location !== undefined && input.location !== null && { location: input.location }),
    ...(input.sourceVersion !== undefined && input.sourceVersion !== null && { sourceVersion: input.sourceVersion }),
    ...(input.versionControl !== undefined &&
      input.versionControl !== null && { versionControl: input.versionControl }),
  };
};

const serializeAws_restJson1SourceCodeList = (input: SourceCode[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SourceCode(entry, context);
    });
};

const serializeAws_restJson1StrategyOption = (input: StrategyOption, context: __SerdeContext): any => {
  return {
    ...(input.isPreferred !== undefined && input.isPreferred !== null && { isPreferred: input.isPreferred }),
    ...(input.strategy !== undefined && input.strategy !== null && { strategy: input.strategy }),
    ...(input.targetDestination !== undefined &&
      input.targetDestination !== null && { targetDestination: input.targetDestination }),
    ...(input.toolName !== undefined && input.toolName !== null && { toolName: input.toolName }),
  };
};

const serializeAws_restJson1TargetDatabaseEngines = (
  input: (TargetDatabaseEngine | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
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
      output.antipatternReportS3Object !== undefined && output.antipatternReportS3Object !== null
        ? deserializeAws_restJson1S3Object(output.antipatternReportS3Object, context)
        : undefined,
    antipatternReportStatus: __expectString(output.antipatternReportStatus),
    antipatternReportStatusMessage: __expectString(output.antipatternReportStatusMessage),
    appType: __expectString(output.appType),
    associatedServerId: __expectString(output.associatedServerId),
    databaseConfigDetail:
      output.databaseConfigDetail !== undefined && output.databaseConfigDetail !== null
        ? deserializeAws_restJson1DatabaseConfigDetail(output.databaseConfigDetail, context)
        : undefined,
    id: __expectString(output.id),
    inclusionStatus: __expectString(output.inclusionStatus),
    lastAnalyzedTimestamp:
      output.lastAnalyzedTimestamp !== undefined && output.lastAnalyzedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastAnalyzedTimestamp)))
        : undefined,
    listAntipatternSeveritySummary:
      output.listAntipatternSeveritySummary !== undefined && output.listAntipatternSeveritySummary !== null
        ? deserializeAws_restJson1ListAntipatternSeveritySummary(output.listAntipatternSeveritySummary, context)
        : undefined,
    moreServerAssociationExists: __expectBoolean(output.moreServerAssociationExists),
    name: __expectString(output.name),
    osDriver: __expectString(output.osDriver),
    osVersion: __expectString(output.osVersion),
    recommendationSet:
      output.recommendationSet !== undefined && output.recommendationSet !== null
        ? deserializeAws_restJson1RecommendationSet(output.recommendationSet, context)
        : undefined,
    resourceSubType: __expectString(output.resourceSubType),
    sourceCodeRepositories:
      output.sourceCodeRepositories !== undefined && output.sourceCodeRepositories !== null
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
      output.recommendation !== undefined && output.recommendation !== null
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
      output.managementPreference !== undefined && output.managementPreference !== null
        ? deserializeAws_restJson1ManagementPreference(__expectUnion(output.managementPreference), context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AssessmentSummary = (output: any, context: __SerdeContext): AssessmentSummary => {
  return {
    antipatternReportS3Object:
      output.antipatternReportS3Object !== undefined && output.antipatternReportS3Object !== null
        ? deserializeAws_restJson1S3Object(output.antipatternReportS3Object, context)
        : undefined,
    antipatternReportStatus: __expectString(output.antipatternReportStatus),
    antipatternReportStatusMessage: __expectString(output.antipatternReportStatusMessage),
    lastAnalyzedTimestamp:
      output.lastAnalyzedTimestamp !== undefined && output.lastAnalyzedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastAnalyzedTimestamp)))
        : undefined,
    listAntipatternSeveritySummary:
      output.listAntipatternSeveritySummary !== undefined && output.listAntipatternSeveritySummary !== null
        ? deserializeAws_restJson1ListAntipatternSeveritySummary(output.listAntipatternSeveritySummary, context)
        : undefined,
    listApplicationComponentStrategySummary:
      output.listApplicationComponentStrategySummary !== undefined &&
      output.listApplicationComponentStrategySummary !== null
        ? deserializeAws_restJson1ListStrategySummary(output.listApplicationComponentStrategySummary, context)
        : undefined,
    listApplicationComponentSummary:
      output.listApplicationComponentSummary !== undefined && output.listApplicationComponentSummary !== null
        ? deserializeAws_restJson1ListApplicationComponentSummary(output.listApplicationComponentSummary, context)
        : undefined,
    listServerStrategySummary:
      output.listServerStrategySummary !== undefined && output.listServerStrategySummary !== null
        ? deserializeAws_restJson1ListStrategySummary(output.listServerStrategySummary, context)
        : undefined,
    listServerSummary:
      output.listServerSummary !== undefined && output.listServerSummary !== null
        ? deserializeAws_restJson1ListServerSummary(output.listServerSummary, context)
        : undefined,
  } as any;
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
      output.targetDestination !== undefined && output.targetDestination !== null
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

const deserializeAws_restJson1DatabaseConfigDetail = (output: any, context: __SerdeContext): DatabaseConfigDetail => {
  return {
    secretName: __expectString(output.secretName),
  } as any;
};

const deserializeAws_restJson1DatabaseMigrationPreference = (
  output: any,
  context: __SerdeContext
): DatabaseMigrationPreference => {
  if (output.heterogeneous !== undefined && output.heterogeneous !== null) {
    return {
      heterogeneous: deserializeAws_restJson1Heterogeneous(output.heterogeneous, context),
    };
  }
  if (output.homogeneous !== undefined && output.homogeneous !== null) {
    return {
      homogeneous: deserializeAws_restJson1Homogeneous(output.homogeneous, context),
    };
  }
  if (output.noPreference !== undefined && output.noPreference !== null) {
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
      output.databaseMigrationPreference !== undefined && output.databaseMigrationPreference !== null
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
      output.completionTime !== undefined && output.completionTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.completionTime)))
        : undefined,
    failed: __expectInt32(output.failed),
    inProgress: __expectInt32(output.inProgress),
    servers: __expectInt32(output.servers),
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime)))
        : undefined,
    status: __expectString(output.status),
    success: __expectInt32(output.success),
  } as any;
};

const deserializeAws_restJson1Heterogeneous = (output: any, context: __SerdeContext): Heterogeneous => {
  return {
    targetDatabaseEngine:
      output.targetDatabaseEngine !== undefined && output.targetDatabaseEngine !== null
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
      output.targetDatabaseEngine !== undefined && output.targetDatabaseEngine !== null
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
      output.completionTime !== undefined && output.completionTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.completionTime)))
        : undefined,
    id: __expectString(output.id),
    importName: __expectString(output.importName),
    inputS3Bucket: __expectString(output.inputS3Bucket),
    inputS3Key: __expectString(output.inputS3Key),
    numberOfRecordsFailed: __expectInt32(output.numberOfRecordsFailed),
    numberOfRecordsSuccess: __expectInt32(output.numberOfRecordsSuccess),
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime)))
        : undefined,
    status: __expectString(output.status),
    statusReportS3Bucket: __expectString(output.statusReportS3Bucket),
    statusReportS3Key: __expectString(output.statusReportS3Key),
  } as any;
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
  if (output.awsManagedResources !== undefined && output.awsManagedResources !== null) {
    return {
      awsManagedResources: deserializeAws_restJson1AwsManagedResources(output.awsManagedResources, context),
    };
  }
  if (output.noPreference !== undefined && output.noPreference !== null) {
    return {
      noPreference: deserializeAws_restJson1NoManagementPreference(output.noPreference, context),
    };
  }
  if (output.selfManageResources !== undefined && output.selfManageResources !== null) {
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
      output.targetDatabaseEngine !== undefined && output.targetDatabaseEngine !== null
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
      output.targetDestination !== undefined && output.targetDestination !== null
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

const deserializeAws_restJson1PrioritizeBusinessGoals = (
  output: any,
  context: __SerdeContext
): PrioritizeBusinessGoals => {
  return {
    businessGoals:
      output.businessGoals !== undefined && output.businessGoals !== null
        ? deserializeAws_restJson1BusinessGoals(output.businessGoals, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RecommendationReportDetails = (
  output: any,
  context: __SerdeContext
): RecommendationReportDetails => {
  return {
    completionTime:
      output.completionTime !== undefined && output.completionTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.completionTime)))
        : undefined,
    s3Bucket: __expectString(output.s3Bucket),
    s3Keys:
      output.s3Keys !== undefined && output.s3Keys !== null
        ? deserializeAws_restJson1S3Keys(output.s3Keys, context)
        : undefined,
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime)))
        : undefined,
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
  } as any;
};

const deserializeAws_restJson1RecommendationSet = (output: any, context: __SerdeContext): RecommendationSet => {
  return {
    strategy: __expectString(output.strategy),
    targetDestination: __expectString(output.targetDestination),
    transformationTool:
      output.transformationTool !== undefined && output.transformationTool !== null
        ? deserializeAws_restJson1TransformationTool(output.transformationTool, context)
        : undefined,
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
      output.targetDestination !== undefined && output.targetDestination !== null
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
      output.antipatternReportS3Object !== undefined && output.antipatternReportS3Object !== null
        ? deserializeAws_restJson1S3Object(output.antipatternReportS3Object, context)
        : undefined,
    antipatternReportStatus: __expectString(output.antipatternReportStatus),
    antipatternReportStatusMessage: __expectString(output.antipatternReportStatusMessage),
    applicationComponentStrategySummary:
      output.applicationComponentStrategySummary !== undefined && output.applicationComponentStrategySummary !== null
        ? deserializeAws_restJson1ListStrategySummary(output.applicationComponentStrategySummary, context)
        : undefined,
    dataCollectionStatus: __expectString(output.dataCollectionStatus),
    id: __expectString(output.id),
    lastAnalyzedTimestamp:
      output.lastAnalyzedTimestamp !== undefined && output.lastAnalyzedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastAnalyzedTimestamp)))
        : undefined,
    listAntipatternSeveritySummary:
      output.listAntipatternSeveritySummary !== undefined && output.listAntipatternSeveritySummary !== null
        ? deserializeAws_restJson1ListAntipatternSeveritySummary(output.listAntipatternSeveritySummary, context)
        : undefined,
    name: __expectString(output.name),
    recommendationSet:
      output.recommendationSet !== undefined && output.recommendationSet !== null
        ? deserializeAws_restJson1RecommendationSet(output.recommendationSet, context)
        : undefined,
    serverType: __expectString(output.serverType),
    statusMessage: __expectString(output.statusMessage),
    systemInfo:
      output.systemInfo !== undefined && output.systemInfo !== null
        ? deserializeAws_restJson1SystemInfo(output.systemInfo, context)
        : undefined,
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
      output.recommendation !== undefined && output.recommendation !== null
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
      output.networkInfoList !== undefined && output.networkInfoList !== null
        ? deserializeAws_restJson1NetworkInfoList(output.networkInfoList, context)
        : undefined,
    osInfo:
      output.osInfo !== undefined && output.osInfo !== null
        ? deserializeAws_restJson1OSInfo(output.osInfo, context)
        : undefined,
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

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
