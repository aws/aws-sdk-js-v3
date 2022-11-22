// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  BatchDeleteRecipeVersionCommandInput,
  BatchDeleteRecipeVersionCommandOutput,
} from "../commands/BatchDeleteRecipeVersionCommand";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "../commands/CreateDatasetCommand";
import { CreateProfileJobCommandInput, CreateProfileJobCommandOutput } from "../commands/CreateProfileJobCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "../commands/CreateProjectCommand";
import { CreateRecipeCommandInput, CreateRecipeCommandOutput } from "../commands/CreateRecipeCommand";
import { CreateRecipeJobCommandInput, CreateRecipeJobCommandOutput } from "../commands/CreateRecipeJobCommand";
import { CreateRulesetCommandInput, CreateRulesetCommandOutput } from "../commands/CreateRulesetCommand";
import { CreateScheduleCommandInput, CreateScheduleCommandOutput } from "../commands/CreateScheduleCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "../commands/DeleteDatasetCommand";
import { DeleteJobCommandInput, DeleteJobCommandOutput } from "../commands/DeleteJobCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "../commands/DeleteProjectCommand";
import {
  DeleteRecipeVersionCommandInput,
  DeleteRecipeVersionCommandOutput,
} from "../commands/DeleteRecipeVersionCommand";
import { DeleteRulesetCommandInput, DeleteRulesetCommandOutput } from "../commands/DeleteRulesetCommand";
import { DeleteScheduleCommandInput, DeleteScheduleCommandOutput } from "../commands/DeleteScheduleCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "../commands/DescribeDatasetCommand";
import { DescribeJobCommandInput, DescribeJobCommandOutput } from "../commands/DescribeJobCommand";
import { DescribeJobRunCommandInput, DescribeJobRunCommandOutput } from "../commands/DescribeJobRunCommand";
import { DescribeProjectCommandInput, DescribeProjectCommandOutput } from "../commands/DescribeProjectCommand";
import { DescribeRecipeCommandInput, DescribeRecipeCommandOutput } from "../commands/DescribeRecipeCommand";
import { DescribeRulesetCommandInput, DescribeRulesetCommandOutput } from "../commands/DescribeRulesetCommand";
import { DescribeScheduleCommandInput, DescribeScheduleCommandOutput } from "../commands/DescribeScheduleCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "../commands/ListDatasetsCommand";
import { ListJobRunsCommandInput, ListJobRunsCommandOutput } from "../commands/ListJobRunsCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "../commands/ListProjectsCommand";
import { ListRecipesCommandInput, ListRecipesCommandOutput } from "../commands/ListRecipesCommand";
import { ListRecipeVersionsCommandInput, ListRecipeVersionsCommandOutput } from "../commands/ListRecipeVersionsCommand";
import { ListRulesetsCommandInput, ListRulesetsCommandOutput } from "../commands/ListRulesetsCommand";
import { ListSchedulesCommandInput, ListSchedulesCommandOutput } from "../commands/ListSchedulesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PublishRecipeCommandInput, PublishRecipeCommandOutput } from "../commands/PublishRecipeCommand";
import {
  SendProjectSessionActionCommandInput,
  SendProjectSessionActionCommandOutput,
} from "../commands/SendProjectSessionActionCommand";
import { StartJobRunCommandInput, StartJobRunCommandOutput } from "../commands/StartJobRunCommand";
import {
  StartProjectSessionCommandInput,
  StartProjectSessionCommandOutput,
} from "../commands/StartProjectSessionCommand";
import { StopJobRunCommandInput, StopJobRunCommandOutput } from "../commands/StopJobRunCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateDatasetCommandInput, UpdateDatasetCommandOutput } from "../commands/UpdateDatasetCommand";
import { UpdateProfileJobCommandInput, UpdateProfileJobCommandOutput } from "../commands/UpdateProfileJobCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "../commands/UpdateProjectCommand";
import { UpdateRecipeCommandInput, UpdateRecipeCommandOutput } from "../commands/UpdateRecipeCommand";
import { UpdateRecipeJobCommandInput, UpdateRecipeJobCommandOutput } from "../commands/UpdateRecipeJobCommand";
import { UpdateRulesetCommandInput, UpdateRulesetCommandOutput } from "../commands/UpdateRulesetCommand";
import { UpdateScheduleCommandInput, UpdateScheduleCommandOutput } from "../commands/UpdateScheduleCommand";
import { DataBrewServiceException as __BaseException } from "../models/DataBrewServiceException";
import {
  AccessDeniedException,
  AllowedStatistics,
  ColumnSelector,
  ColumnStatisticsConfiguration,
  ConditionExpression,
  ConflictException,
  CsvOptions,
  CsvOutputOptions,
  DatabaseInputDefinition,
  DatabaseOutput,
  DatabaseTableOutputOptions,
  DataCatalogInputDefinition,
  DataCatalogOutput,
  Dataset,
  DatasetParameter,
  DatetimeOptions,
  EntityDetectorConfiguration,
  ExcelOptions,
  FilesLimit,
  FilterExpression,
  FormatOptions,
  Input,
  InternalServerException,
  Job,
  JobRun,
  JobSample,
  JsonOptions,
  Metadata,
  Output,
  OutputFormatOptions,
  PathOptions,
  ProfileConfiguration,
  Project,
  Recipe,
  RecipeAction,
  RecipeReference,
  RecipeStep,
  RecipeVersionErrorDetail,
  ResourceNotFoundException,
  Rule,
  RulesetItem,
  S3Location,
  S3TableOutputOptions,
  Sample,
  Schedule,
  ServiceQuotaExceededException,
  StatisticOverride,
  StatisticsConfiguration,
  Threshold,
  ValidationConfiguration,
  ValidationException,
  ViewFrame,
} from "../models/models_0";

export const serializeAws_restJson1BatchDeleteRecipeVersionCommand = async (
  input: BatchDeleteRecipeVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/recipes/{Name}/batchDeleteRecipeVersion";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.RecipeVersions != null && {
      RecipeVersions: serializeAws_restJson1RecipeVersionList(input.RecipeVersions, context),
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

export const serializeAws_restJson1CreateDatasetCommand = async (
  input: CreateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasets";
  let body: any;
  body = JSON.stringify({
    ...(input.Format != null && { Format: input.Format }),
    ...(input.FormatOptions != null && {
      FormatOptions: serializeAws_restJson1FormatOptions(input.FormatOptions, context),
    }),
    ...(input.Input != null && { Input: serializeAws_restJson1Input(input.Input, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PathOptions != null && { PathOptions: serializeAws_restJson1PathOptions(input.PathOptions, context) }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1CreateProfileJobCommand = async (
  input: CreateProfileJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/profileJobs";
  let body: any;
  body = JSON.stringify({
    ...(input.Configuration != null && {
      Configuration: serializeAws_restJson1ProfileConfiguration(input.Configuration, context),
    }),
    ...(input.DatasetName != null && { DatasetName: input.DatasetName }),
    ...(input.EncryptionKeyArn != null && { EncryptionKeyArn: input.EncryptionKeyArn }),
    ...(input.EncryptionMode != null && { EncryptionMode: input.EncryptionMode }),
    ...(input.JobSample != null && { JobSample: serializeAws_restJson1JobSample(input.JobSample, context) }),
    ...(input.LogSubscription != null && { LogSubscription: input.LogSubscription }),
    ...(input.MaxCapacity != null && { MaxCapacity: input.MaxCapacity }),
    ...(input.MaxRetries != null && { MaxRetries: input.MaxRetries }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OutputLocation != null && {
      OutputLocation: serializeAws_restJson1S3Location(input.OutputLocation, context),
    }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    ...(input.Timeout != null && { Timeout: input.Timeout }),
    ...(input.ValidationConfigurations != null && {
      ValidationConfigurations: serializeAws_restJson1ValidationConfigurationList(
        input.ValidationConfigurations,
        context
      ),
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

export const serializeAws_restJson1CreateProjectCommand = async (
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects";
  let body: any;
  body = JSON.stringify({
    ...(input.DatasetName != null && { DatasetName: input.DatasetName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RecipeName != null && { RecipeName: input.RecipeName }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.Sample != null && { Sample: serializeAws_restJson1Sample(input.Sample, context) }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1CreateRecipeCommand = async (
  input: CreateRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/recipes";
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Steps != null && { Steps: serializeAws_restJson1RecipeStepList(input.Steps, context) }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1CreateRecipeJobCommand = async (
  input: CreateRecipeJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/recipeJobs";
  let body: any;
  body = JSON.stringify({
    ...(input.DataCatalogOutputs != null && {
      DataCatalogOutputs: serializeAws_restJson1DataCatalogOutputList(input.DataCatalogOutputs, context),
    }),
    ...(input.DatabaseOutputs != null && {
      DatabaseOutputs: serializeAws_restJson1DatabaseOutputList(input.DatabaseOutputs, context),
    }),
    ...(input.DatasetName != null && { DatasetName: input.DatasetName }),
    ...(input.EncryptionKeyArn != null && { EncryptionKeyArn: input.EncryptionKeyArn }),
    ...(input.EncryptionMode != null && { EncryptionMode: input.EncryptionMode }),
    ...(input.LogSubscription != null && { LogSubscription: input.LogSubscription }),
    ...(input.MaxCapacity != null && { MaxCapacity: input.MaxCapacity }),
    ...(input.MaxRetries != null && { MaxRetries: input.MaxRetries }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Outputs != null && { Outputs: serializeAws_restJson1OutputList(input.Outputs, context) }),
    ...(input.ProjectName != null && { ProjectName: input.ProjectName }),
    ...(input.RecipeReference != null && {
      RecipeReference: serializeAws_restJson1RecipeReference(input.RecipeReference, context),
    }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    ...(input.Timeout != null && { Timeout: input.Timeout }),
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

export const serializeAws_restJson1CreateRulesetCommand = async (
  input: CreateRulesetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/rulesets";
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Rules != null && { Rules: serializeAws_restJson1RuleList(input.Rules, context) }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    ...(input.TargetArn != null && { TargetArn: input.TargetArn }),
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

export const serializeAws_restJson1CreateScheduleCommand = async (
  input: CreateScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/schedules";
  let body: any;
  body = JSON.stringify({
    ...(input.CronExpression != null && { CronExpression: input.CronExpression }),
    ...(input.JobNames != null && { JobNames: serializeAws_restJson1JobNameList(input.JobNames, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1DeleteDatasetCommand = async (
  input: DeleteDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasets/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteJobCommand = async (
  input: DeleteJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobs/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteProjectCommand = async (
  input: DeleteProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteRecipeVersionCommand = async (
  input: DeleteRecipeVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/recipes/{Name}/recipeVersion/{RecipeVersion}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RecipeVersion",
    () => input.RecipeVersion!,
    "{RecipeVersion}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteRulesetCommand = async (
  input: DeleteRulesetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/rulesets/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteScheduleCommand = async (
  input: DeleteScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/schedules/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeDatasetCommand = async (
  input: DescribeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasets/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
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

export const serializeAws_restJson1DescribeJobCommand = async (
  input: DescribeJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobs/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
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

export const serializeAws_restJson1DescribeJobRunCommand = async (
  input: DescribeJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobs/{Name}/jobRun/{RunId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RunId", () => input.RunId!, "{RunId}", false);
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

export const serializeAws_restJson1DescribeProjectCommand = async (
  input: DescribeProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
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

export const serializeAws_restJson1DescribeRecipeCommand = async (
  input: DescribeRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/recipes/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  const query: any = map({
    recipeVersion: [, input.RecipeVersion!],
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

export const serializeAws_restJson1DescribeRulesetCommand = async (
  input: DescribeRulesetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/rulesets/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
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

export const serializeAws_restJson1DescribeScheduleCommand = async (
  input: DescribeScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/schedules/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
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

export const serializeAws_restJson1ListDatasetsCommand = async (
  input: ListDatasetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasets";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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

export const serializeAws_restJson1ListJobRunsCommand = async (
  input: ListJobRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobs/{Name}/jobRuns";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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

export const serializeAws_restJson1ListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobs";
  const query: any = map({
    datasetName: [, input.DatasetName!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
    projectName: [, input.ProjectName!],
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

export const serializeAws_restJson1ListProjectsCommand = async (
  input: ListProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects";
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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

export const serializeAws_restJson1ListRecipesCommand = async (
  input: ListRecipesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/recipes";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
    recipeVersion: [, input.RecipeVersion!],
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

export const serializeAws_restJson1ListRecipeVersionsCommand = async (
  input: ListRecipeVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/recipeVersions";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
    name: [, __expectNonNull(input.Name!, `Name`)],
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

export const serializeAws_restJson1ListRulesetsCommand = async (
  input: ListRulesetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/rulesets";
  const query: any = map({
    targetArn: [, input.TargetArn!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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

export const serializeAws_restJson1ListSchedulesCommand = async (
  input: ListSchedulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/schedules";
  const query: any = map({
    jobName: [, input.JobName!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
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

export const serializeAws_restJson1PublishRecipeCommand = async (
  input: PublishRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/recipes/{Name}/publishRecipe";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
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

export const serializeAws_restJson1SendProjectSessionActionCommand = async (
  input: SendProjectSessionActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{Name}/sendProjectSessionAction";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ClientSessionId != null && { ClientSessionId: input.ClientSessionId }),
    ...(input.Preview != null && { Preview: input.Preview }),
    ...(input.RecipeStep != null && { RecipeStep: serializeAws_restJson1RecipeStep(input.RecipeStep, context) }),
    ...(input.StepIndex != null && { StepIndex: input.StepIndex }),
    ...(input.ViewFrame != null && { ViewFrame: serializeAws_restJson1ViewFrame(input.ViewFrame, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1StartJobRunCommand = async (
  input: StartJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobs/{Name}/startJobRun";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
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

export const serializeAws_restJson1StartProjectSessionCommand = async (
  input: StartProjectSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{Name}/startProjectSession";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AssumeControl != null && { AssumeControl: input.AssumeControl }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1StopJobRunCommand = async (
  input: StopJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobs/{Name}/jobRun/{RunId}/stopJobRun";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RunId", () => input.RunId!, "{RunId}", false);
  let body: any;
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.TagKeys, `TagKeys`) != null,
      () => (input.TagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateDatasetCommand = async (
  input: UpdateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasets/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Format != null && { Format: input.Format }),
    ...(input.FormatOptions != null && {
      FormatOptions: serializeAws_restJson1FormatOptions(input.FormatOptions, context),
    }),
    ...(input.Input != null && { Input: serializeAws_restJson1Input(input.Input, context) }),
    ...(input.PathOptions != null && { PathOptions: serializeAws_restJson1PathOptions(input.PathOptions, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateProfileJobCommand = async (
  input: UpdateProfileJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/profileJobs/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Configuration != null && {
      Configuration: serializeAws_restJson1ProfileConfiguration(input.Configuration, context),
    }),
    ...(input.EncryptionKeyArn != null && { EncryptionKeyArn: input.EncryptionKeyArn }),
    ...(input.EncryptionMode != null && { EncryptionMode: input.EncryptionMode }),
    ...(input.JobSample != null && { JobSample: serializeAws_restJson1JobSample(input.JobSample, context) }),
    ...(input.LogSubscription != null && { LogSubscription: input.LogSubscription }),
    ...(input.MaxCapacity != null && { MaxCapacity: input.MaxCapacity }),
    ...(input.MaxRetries != null && { MaxRetries: input.MaxRetries }),
    ...(input.OutputLocation != null && {
      OutputLocation: serializeAws_restJson1S3Location(input.OutputLocation, context),
    }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.Timeout != null && { Timeout: input.Timeout }),
    ...(input.ValidationConfigurations != null && {
      ValidationConfigurations: serializeAws_restJson1ValidationConfigurationList(
        input.ValidationConfigurations,
        context
      ),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateProjectCommand = async (
  input: UpdateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.Sample != null && { Sample: serializeAws_restJson1Sample(input.Sample, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateRecipeCommand = async (
  input: UpdateRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/recipes/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Steps != null && { Steps: serializeAws_restJson1RecipeStepList(input.Steps, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateRecipeJobCommand = async (
  input: UpdateRecipeJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/recipeJobs/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.DataCatalogOutputs != null && {
      DataCatalogOutputs: serializeAws_restJson1DataCatalogOutputList(input.DataCatalogOutputs, context),
    }),
    ...(input.DatabaseOutputs != null && {
      DatabaseOutputs: serializeAws_restJson1DatabaseOutputList(input.DatabaseOutputs, context),
    }),
    ...(input.EncryptionKeyArn != null && { EncryptionKeyArn: input.EncryptionKeyArn }),
    ...(input.EncryptionMode != null && { EncryptionMode: input.EncryptionMode }),
    ...(input.LogSubscription != null && { LogSubscription: input.LogSubscription }),
    ...(input.MaxCapacity != null && { MaxCapacity: input.MaxCapacity }),
    ...(input.MaxRetries != null && { MaxRetries: input.MaxRetries }),
    ...(input.Outputs != null && { Outputs: serializeAws_restJson1OutputList(input.Outputs, context) }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.Timeout != null && { Timeout: input.Timeout }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateRulesetCommand = async (
  input: UpdateRulesetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/rulesets/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Rules != null && { Rules: serializeAws_restJson1RuleList(input.Rules, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateScheduleCommand = async (
  input: UpdateScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/schedules/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.CronExpression != null && { CronExpression: input.CronExpression }),
    ...(input.JobNames != null && { JobNames: serializeAws_restJson1JobNameList(input.JobNames, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1BatchDeleteRecipeVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteRecipeVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchDeleteRecipeVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Errors != null) {
    contents.Errors = deserializeAws_restJson1RecipeErrorList(data.Errors, context);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

const deserializeAws_restJson1BatchDeleteRecipeVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteRecipeVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1CreateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDatasetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

const deserializeAws_restJson1CreateDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.databrew#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.databrew#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1CreateProfileJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfileJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateProfileJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

const deserializeAws_restJson1CreateProfileJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfileJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.databrew#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.databrew#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1CreateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateProjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

const deserializeAws_restJson1CreateProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.databrew#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.databrew#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1CreateRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRecipeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

const deserializeAws_restJson1CreateRecipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRecipeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.databrew#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1CreateRecipeJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRecipeJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRecipeJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

const deserializeAws_restJson1CreateRecipeJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRecipeJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.databrew#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.databrew#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1CreateRulesetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRulesetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRulesetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

const deserializeAws_restJson1CreateRulesetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRulesetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.databrew#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1CreateScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateScheduleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

const deserializeAws_restJson1CreateScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.databrew#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1DeleteDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDatasetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

const deserializeAws_restJson1DeleteDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1DeleteJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

const deserializeAws_restJson1DeleteJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1DeleteProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteProjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

const deserializeAws_restJson1DeleteProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1DeleteRecipeVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecipeVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRecipeVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.RecipeVersion != null) {
    contents.RecipeVersion = __expectString(data.RecipeVersion);
  }
  return contents;
};

const deserializeAws_restJson1DeleteRecipeVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecipeVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1DeleteRulesetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRulesetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRulesetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

const deserializeAws_restJson1DeleteRulesetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRulesetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1DeleteScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteScheduleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

const deserializeAws_restJson1DeleteScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1DescribeDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDatasetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreateDate != null) {
    contents.CreateDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreateDate)));
  }
  if (data.CreatedBy != null) {
    contents.CreatedBy = __expectString(data.CreatedBy);
  }
  if (data.Format != null) {
    contents.Format = __expectString(data.Format);
  }
  if (data.FormatOptions != null) {
    contents.FormatOptions = deserializeAws_restJson1FormatOptions(data.FormatOptions, context);
  }
  if (data.Input != null) {
    contents.Input = deserializeAws_restJson1Input(data.Input, context);
  }
  if (data.LastModifiedBy != null) {
    contents.LastModifiedBy = __expectString(data.LastModifiedBy);
  }
  if (data.LastModifiedDate != null) {
    contents.LastModifiedDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedDate)));
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.PathOptions != null) {
    contents.PathOptions = deserializeAws_restJson1PathOptions(data.PathOptions, context);
  }
  if (data.ResourceArn != null) {
    contents.ResourceArn = __expectString(data.ResourceArn);
  }
  if (data.Source != null) {
    contents.Source = __expectString(data.Source);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1DescribeJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreateDate != null) {
    contents.CreateDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreateDate)));
  }
  if (data.CreatedBy != null) {
    contents.CreatedBy = __expectString(data.CreatedBy);
  }
  if (data.DataCatalogOutputs != null) {
    contents.DataCatalogOutputs = deserializeAws_restJson1DataCatalogOutputList(data.DataCatalogOutputs, context);
  }
  if (data.DatabaseOutputs != null) {
    contents.DatabaseOutputs = deserializeAws_restJson1DatabaseOutputList(data.DatabaseOutputs, context);
  }
  if (data.DatasetName != null) {
    contents.DatasetName = __expectString(data.DatasetName);
  }
  if (data.EncryptionKeyArn != null) {
    contents.EncryptionKeyArn = __expectString(data.EncryptionKeyArn);
  }
  if (data.EncryptionMode != null) {
    contents.EncryptionMode = __expectString(data.EncryptionMode);
  }
  if (data.JobSample != null) {
    contents.JobSample = deserializeAws_restJson1JobSample(data.JobSample, context);
  }
  if (data.LastModifiedBy != null) {
    contents.LastModifiedBy = __expectString(data.LastModifiedBy);
  }
  if (data.LastModifiedDate != null) {
    contents.LastModifiedDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedDate)));
  }
  if (data.LogSubscription != null) {
    contents.LogSubscription = __expectString(data.LogSubscription);
  }
  if (data.MaxCapacity != null) {
    contents.MaxCapacity = __expectInt32(data.MaxCapacity);
  }
  if (data.MaxRetries != null) {
    contents.MaxRetries = __expectInt32(data.MaxRetries);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Outputs != null) {
    contents.Outputs = deserializeAws_restJson1OutputList(data.Outputs, context);
  }
  if (data.ProfileConfiguration != null) {
    contents.ProfileConfiguration = deserializeAws_restJson1ProfileConfiguration(data.ProfileConfiguration, context);
  }
  if (data.ProjectName != null) {
    contents.ProjectName = __expectString(data.ProjectName);
  }
  if (data.RecipeReference != null) {
    contents.RecipeReference = deserializeAws_restJson1RecipeReference(data.RecipeReference, context);
  }
  if (data.ResourceArn != null) {
    contents.ResourceArn = __expectString(data.ResourceArn);
  }
  if (data.RoleArn != null) {
    contents.RoleArn = __expectString(data.RoleArn);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  if (data.Timeout != null) {
    contents.Timeout = __expectInt32(data.Timeout);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.ValidationConfigurations != null) {
    contents.ValidationConfigurations = deserializeAws_restJson1ValidationConfigurationList(
      data.ValidationConfigurations,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DescribeJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1DescribeJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeJobRunCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attempt != null) {
    contents.Attempt = __expectInt32(data.Attempt);
  }
  if (data.CompletedOn != null) {
    contents.CompletedOn = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CompletedOn)));
  }
  if (data.DataCatalogOutputs != null) {
    contents.DataCatalogOutputs = deserializeAws_restJson1DataCatalogOutputList(data.DataCatalogOutputs, context);
  }
  if (data.DatabaseOutputs != null) {
    contents.DatabaseOutputs = deserializeAws_restJson1DatabaseOutputList(data.DatabaseOutputs, context);
  }
  if (data.DatasetName != null) {
    contents.DatasetName = __expectString(data.DatasetName);
  }
  if (data.ErrorMessage != null) {
    contents.ErrorMessage = __expectString(data.ErrorMessage);
  }
  if (data.ExecutionTime != null) {
    contents.ExecutionTime = __expectInt32(data.ExecutionTime);
  }
  if (data.JobName != null) {
    contents.JobName = __expectString(data.JobName);
  }
  if (data.JobSample != null) {
    contents.JobSample = deserializeAws_restJson1JobSample(data.JobSample, context);
  }
  if (data.LogGroupName != null) {
    contents.LogGroupName = __expectString(data.LogGroupName);
  }
  if (data.LogSubscription != null) {
    contents.LogSubscription = __expectString(data.LogSubscription);
  }
  if (data.Outputs != null) {
    contents.Outputs = deserializeAws_restJson1OutputList(data.Outputs, context);
  }
  if (data.ProfileConfiguration != null) {
    contents.ProfileConfiguration = deserializeAws_restJson1ProfileConfiguration(data.ProfileConfiguration, context);
  }
  if (data.RecipeReference != null) {
    contents.RecipeReference = deserializeAws_restJson1RecipeReference(data.RecipeReference, context);
  }
  if (data.RunId != null) {
    contents.RunId = __expectString(data.RunId);
  }
  if (data.StartedBy != null) {
    contents.StartedBy = __expectString(data.StartedBy);
  }
  if (data.StartedOn != null) {
    contents.StartedOn = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.StartedOn)));
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  if (data.ValidationConfigurations != null) {
    contents.ValidationConfigurations = deserializeAws_restJson1ValidationConfigurationList(
      data.ValidationConfigurations,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DescribeJobRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1DescribeProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeProjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreateDate != null) {
    contents.CreateDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreateDate)));
  }
  if (data.CreatedBy != null) {
    contents.CreatedBy = __expectString(data.CreatedBy);
  }
  if (data.DatasetName != null) {
    contents.DatasetName = __expectString(data.DatasetName);
  }
  if (data.LastModifiedBy != null) {
    contents.LastModifiedBy = __expectString(data.LastModifiedBy);
  }
  if (data.LastModifiedDate != null) {
    contents.LastModifiedDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedDate)));
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.OpenDate != null) {
    contents.OpenDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.OpenDate)));
  }
  if (data.OpenedBy != null) {
    contents.OpenedBy = __expectString(data.OpenedBy);
  }
  if (data.RecipeName != null) {
    contents.RecipeName = __expectString(data.RecipeName);
  }
  if (data.ResourceArn != null) {
    contents.ResourceArn = __expectString(data.ResourceArn);
  }
  if (data.RoleArn != null) {
    contents.RoleArn = __expectString(data.RoleArn);
  }
  if (data.Sample != null) {
    contents.Sample = deserializeAws_restJson1Sample(data.Sample, context);
  }
  if (data.SessionStatus != null) {
    contents.SessionStatus = __expectString(data.SessionStatus);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1DescribeRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRecipeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreateDate != null) {
    contents.CreateDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreateDate)));
  }
  if (data.CreatedBy != null) {
    contents.CreatedBy = __expectString(data.CreatedBy);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.LastModifiedBy != null) {
    contents.LastModifiedBy = __expectString(data.LastModifiedBy);
  }
  if (data.LastModifiedDate != null) {
    contents.LastModifiedDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedDate)));
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.ProjectName != null) {
    contents.ProjectName = __expectString(data.ProjectName);
  }
  if (data.PublishedBy != null) {
    contents.PublishedBy = __expectString(data.PublishedBy);
  }
  if (data.PublishedDate != null) {
    contents.PublishedDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.PublishedDate)));
  }
  if (data.RecipeVersion != null) {
    contents.RecipeVersion = __expectString(data.RecipeVersion);
  }
  if (data.ResourceArn != null) {
    contents.ResourceArn = __expectString(data.ResourceArn);
  }
  if (data.Steps != null) {
    contents.Steps = deserializeAws_restJson1RecipeStepList(data.Steps, context);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeRecipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecipeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1DescribeRulesetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRulesetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRulesetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreateDate != null) {
    contents.CreateDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreateDate)));
  }
  if (data.CreatedBy != null) {
    contents.CreatedBy = __expectString(data.CreatedBy);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.LastModifiedBy != null) {
    contents.LastModifiedBy = __expectString(data.LastModifiedBy);
  }
  if (data.LastModifiedDate != null) {
    contents.LastModifiedDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedDate)));
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.ResourceArn != null) {
    contents.ResourceArn = __expectString(data.ResourceArn);
  }
  if (data.Rules != null) {
    contents.Rules = deserializeAws_restJson1RuleList(data.Rules, context);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  if (data.TargetArn != null) {
    contents.TargetArn = __expectString(data.TargetArn);
  }
  return contents;
};

const deserializeAws_restJson1DescribeRulesetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRulesetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1DescribeScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeScheduleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreateDate != null) {
    contents.CreateDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreateDate)));
  }
  if (data.CreatedBy != null) {
    contents.CreatedBy = __expectString(data.CreatedBy);
  }
  if (data.CronExpression != null) {
    contents.CronExpression = __expectString(data.CronExpression);
  }
  if (data.JobNames != null) {
    contents.JobNames = deserializeAws_restJson1JobNameList(data.JobNames, context);
  }
  if (data.LastModifiedBy != null) {
    contents.LastModifiedBy = __expectString(data.LastModifiedBy);
  }
  if (data.LastModifiedDate != null) {
    contents.LastModifiedDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedDate)));
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.ResourceArn != null) {
    contents.ResourceArn = __expectString(data.ResourceArn);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1ListDatasetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDatasetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Datasets != null) {
    contents.Datasets = deserializeAws_restJson1DatasetList(data.Datasets, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDatasetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1ListJobRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobRunsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListJobRunsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.JobRuns != null) {
    contents.JobRuns = deserializeAws_restJson1JobRunList(data.JobRuns, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListJobRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Jobs != null) {
    contents.Jobs = deserializeAws_restJson1JobList(data.Jobs, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1ListProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListProjectsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Projects != null) {
    contents.Projects = deserializeAws_restJson1ProjectList(data.Projects, context);
  }
  return contents;
};

const deserializeAws_restJson1ListProjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1ListRecipesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecipesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRecipesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Recipes != null) {
    contents.Recipes = deserializeAws_restJson1RecipeList(data.Recipes, context);
  }
  return contents;
};

const deserializeAws_restJson1ListRecipesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecipesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1ListRecipeVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecipeVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRecipeVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Recipes != null) {
    contents.Recipes = deserializeAws_restJson1RecipeList(data.Recipes, context);
  }
  return contents;
};

const deserializeAws_restJson1ListRecipeVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecipeVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1ListRulesetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRulesetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Rulesets != null) {
    contents.Rulesets = deserializeAws_restJson1RulesetItemList(data.Rulesets, context);
  }
  return contents;
};

const deserializeAws_restJson1ListRulesetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1ListSchedulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchedulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSchedulesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Schedules != null) {
    contents.Schedules = deserializeAws_restJson1ScheduleList(data.Schedules, context);
  }
  return contents;
};

const deserializeAws_restJson1ListSchedulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchedulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.databrew#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1PublishRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PublishRecipeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

const deserializeAws_restJson1PublishRecipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishRecipeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.databrew#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1SendProjectSessionActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendProjectSessionActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SendProjectSessionActionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ActionId != null) {
    contents.ActionId = __expectInt32(data.ActionId);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Result != null) {
    contents.Result = __expectString(data.Result);
  }
  return contents;
};

const deserializeAws_restJson1SendProjectSessionActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendProjectSessionActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1StartJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartJobRunCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RunId != null) {
    contents.RunId = __expectString(data.RunId);
  }
  return contents;
};

const deserializeAws_restJson1StartJobRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.databrew#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1StartProjectSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartProjectSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartProjectSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ClientSessionId != null) {
    contents.ClientSessionId = __expectString(data.ClientSessionId);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

const deserializeAws_restJson1StartProjectSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartProjectSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.databrew#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1StopJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopJobRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopJobRunCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RunId != null) {
    contents.RunId = __expectString(data.RunId);
  }
  return contents;
};

const deserializeAws_restJson1StopJobRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopJobRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.databrew#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.databrew#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1UpdateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDatasetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

const deserializeAws_restJson1UpdateDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.databrew#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1UpdateProfileJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfileJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateProfileJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

const deserializeAws_restJson1UpdateProfileJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfileJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.databrew#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1UpdateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateProjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LastModifiedDate != null) {
    contents.LastModifiedDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedDate)));
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

const deserializeAws_restJson1UpdateProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1UpdateRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRecipeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

const deserializeAws_restJson1UpdateRecipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecipeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1UpdateRecipeJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecipeJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRecipeJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

const deserializeAws_restJson1UpdateRecipeJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecipeJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.databrew#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1UpdateRulesetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRulesetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRulesetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

const deserializeAws_restJson1UpdateRulesetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRulesetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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

export const deserializeAws_restJson1UpdateScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateScheduleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

const deserializeAws_restJson1UpdateScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.databrew#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
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
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceNotFoundException({
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ServiceQuotaExceededException({
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1AllowedStatisticList = (input: AllowedStatistics[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AllowedStatistics(entry, context);
    });
};

const serializeAws_restJson1AllowedStatistics = (input: AllowedStatistics, context: __SerdeContext): any => {
  return {
    ...(input.Statistics != null && { Statistics: serializeAws_restJson1StatisticList(input.Statistics, context) }),
  };
};

const serializeAws_restJson1ColumnNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ColumnSelector = (input: ColumnSelector, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Regex != null && { Regex: input.Regex }),
  };
};

const serializeAws_restJson1ColumnSelectorList = (input: ColumnSelector[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ColumnSelector(entry, context);
    });
};

const serializeAws_restJson1ColumnStatisticsConfiguration = (
  input: ColumnStatisticsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Selectors != null && { Selectors: serializeAws_restJson1ColumnSelectorList(input.Selectors, context) }),
    ...(input.Statistics != null && {
      Statistics: serializeAws_restJson1StatisticsConfiguration(input.Statistics, context),
    }),
  };
};

const serializeAws_restJson1ColumnStatisticsConfigurationList = (
  input: ColumnStatisticsConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ColumnStatisticsConfiguration(entry, context);
    });
};

const serializeAws_restJson1ConditionExpression = (input: ConditionExpression, context: __SerdeContext): any => {
  return {
    ...(input.Condition != null && { Condition: input.Condition }),
    ...(input.TargetColumn != null && { TargetColumn: input.TargetColumn }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1ConditionExpressionList = (input: ConditionExpression[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ConditionExpression(entry, context);
    });
};

const serializeAws_restJson1CsvOptions = (input: CsvOptions, context: __SerdeContext): any => {
  return {
    ...(input.Delimiter != null && { Delimiter: input.Delimiter }),
    ...(input.HeaderRow != null && { HeaderRow: input.HeaderRow }),
  };
};

const serializeAws_restJson1CsvOutputOptions = (input: CsvOutputOptions, context: __SerdeContext): any => {
  return {
    ...(input.Delimiter != null && { Delimiter: input.Delimiter }),
  };
};

const serializeAws_restJson1DatabaseInputDefinition = (
  input: DatabaseInputDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatabaseTableName != null && { DatabaseTableName: input.DatabaseTableName }),
    ...(input.GlueConnectionName != null && { GlueConnectionName: input.GlueConnectionName }),
    ...(input.QueryString != null && { QueryString: input.QueryString }),
    ...(input.TempDirectory != null && {
      TempDirectory: serializeAws_restJson1S3Location(input.TempDirectory, context),
    }),
  };
};

const serializeAws_restJson1DatabaseOutput = (input: DatabaseOutput, context: __SerdeContext): any => {
  return {
    ...(input.DatabaseOptions != null && {
      DatabaseOptions: serializeAws_restJson1DatabaseTableOutputOptions(input.DatabaseOptions, context),
    }),
    ...(input.DatabaseOutputMode != null && { DatabaseOutputMode: input.DatabaseOutputMode }),
    ...(input.GlueConnectionName != null && { GlueConnectionName: input.GlueConnectionName }),
  };
};

const serializeAws_restJson1DatabaseOutputList = (input: DatabaseOutput[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DatabaseOutput(entry, context);
    });
};

const serializeAws_restJson1DatabaseTableOutputOptions = (
  input: DatabaseTableOutputOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.TempDirectory != null && {
      TempDirectory: serializeAws_restJson1S3Location(input.TempDirectory, context),
    }),
  };
};

const serializeAws_restJson1DataCatalogInputDefinition = (
  input: DataCatalogInputDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.TempDirectory != null && {
      TempDirectory: serializeAws_restJson1S3Location(input.TempDirectory, context),
    }),
  };
};

const serializeAws_restJson1DataCatalogOutput = (input: DataCatalogOutput, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.DatabaseOptions != null && {
      DatabaseOptions: serializeAws_restJson1DatabaseTableOutputOptions(input.DatabaseOptions, context),
    }),
    ...(input.Overwrite != null && { Overwrite: input.Overwrite }),
    ...(input.S3Options != null && { S3Options: serializeAws_restJson1S3TableOutputOptions(input.S3Options, context) }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_restJson1DataCatalogOutputList = (input: DataCatalogOutput[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DataCatalogOutput(entry, context);
    });
};

const serializeAws_restJson1DatasetParameter = (input: DatasetParameter, context: __SerdeContext): any => {
  return {
    ...(input.CreateColumn != null && { CreateColumn: input.CreateColumn }),
    ...(input.DatetimeOptions != null && {
      DatetimeOptions: serializeAws_restJson1DatetimeOptions(input.DatetimeOptions, context),
    }),
    ...(input.Filter != null && { Filter: serializeAws_restJson1FilterExpression(input.Filter, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1DatetimeOptions = (input: DatetimeOptions, context: __SerdeContext): any => {
  return {
    ...(input.Format != null && { Format: input.Format }),
    ...(input.LocaleCode != null && { LocaleCode: input.LocaleCode }),
    ...(input.TimezoneOffset != null && { TimezoneOffset: input.TimezoneOffset }),
  };
};

const serializeAws_restJson1EntityDetectorConfiguration = (
  input: EntityDetectorConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllowedStatistics != null && {
      AllowedStatistics: serializeAws_restJson1AllowedStatisticList(input.AllowedStatistics, context),
    }),
    ...(input.EntityTypes != null && { EntityTypes: serializeAws_restJson1EntityTypeList(input.EntityTypes, context) }),
  };
};

const serializeAws_restJson1EntityTypeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ExcelOptions = (input: ExcelOptions, context: __SerdeContext): any => {
  return {
    ...(input.HeaderRow != null && { HeaderRow: input.HeaderRow }),
    ...(input.SheetIndexes != null && {
      SheetIndexes: serializeAws_restJson1SheetIndexList(input.SheetIndexes, context),
    }),
    ...(input.SheetNames != null && { SheetNames: serializeAws_restJson1SheetNameList(input.SheetNames, context) }),
  };
};

const serializeAws_restJson1FilesLimit = (input: FilesLimit, context: __SerdeContext): any => {
  return {
    ...(input.MaxFiles != null && { MaxFiles: input.MaxFiles }),
    ...(input.Order != null && { Order: input.Order }),
    ...(input.OrderedBy != null && { OrderedBy: input.OrderedBy }),
  };
};

const serializeAws_restJson1FilterExpression = (input: FilterExpression, context: __SerdeContext): any => {
  return {
    ...(input.Expression != null && { Expression: input.Expression }),
    ...(input.ValuesMap != null && { ValuesMap: serializeAws_restJson1ValuesMap(input.ValuesMap, context) }),
  };
};

const serializeAws_restJson1FormatOptions = (input: FormatOptions, context: __SerdeContext): any => {
  return {
    ...(input.Csv != null && { Csv: serializeAws_restJson1CsvOptions(input.Csv, context) }),
    ...(input.Excel != null && { Excel: serializeAws_restJson1ExcelOptions(input.Excel, context) }),
    ...(input.Json != null && { Json: serializeAws_restJson1JsonOptions(input.Json, context) }),
  };
};

const serializeAws_restJson1HiddenColumnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Input = (input: Input, context: __SerdeContext): any => {
  return {
    ...(input.DataCatalogInputDefinition != null && {
      DataCatalogInputDefinition: serializeAws_restJson1DataCatalogInputDefinition(
        input.DataCatalogInputDefinition,
        context
      ),
    }),
    ...(input.DatabaseInputDefinition != null && {
      DatabaseInputDefinition: serializeAws_restJson1DatabaseInputDefinition(input.DatabaseInputDefinition, context),
    }),
    ...(input.Metadata != null && { Metadata: serializeAws_restJson1Metadata(input.Metadata, context) }),
    ...(input.S3InputDefinition != null && {
      S3InputDefinition: serializeAws_restJson1S3Location(input.S3InputDefinition, context),
    }),
  };
};

const serializeAws_restJson1JobNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1JobSample = (input: JobSample, context: __SerdeContext): any => {
  return {
    ...(input.Mode != null && { Mode: input.Mode }),
    ...(input.Size != null && { Size: input.Size }),
  };
};

const serializeAws_restJson1JsonOptions = (input: JsonOptions, context: __SerdeContext): any => {
  return {
    ...(input.MultiLine != null && { MultiLine: input.MultiLine }),
  };
};

const serializeAws_restJson1Metadata = (input: Metadata, context: __SerdeContext): any => {
  return {
    ...(input.SourceArn != null && { SourceArn: input.SourceArn }),
  };
};

const serializeAws_restJson1Output = (input: Output, context: __SerdeContext): any => {
  return {
    ...(input.CompressionFormat != null && { CompressionFormat: input.CompressionFormat }),
    ...(input.Format != null && { Format: input.Format }),
    ...(input.FormatOptions != null && {
      FormatOptions: serializeAws_restJson1OutputFormatOptions(input.FormatOptions, context),
    }),
    ...(input.Location != null && { Location: serializeAws_restJson1S3Location(input.Location, context) }),
    ...(input.MaxOutputFiles != null && { MaxOutputFiles: input.MaxOutputFiles }),
    ...(input.Overwrite != null && { Overwrite: input.Overwrite }),
    ...(input.PartitionColumns != null && {
      PartitionColumns: serializeAws_restJson1ColumnNameList(input.PartitionColumns, context),
    }),
  };
};

const serializeAws_restJson1OutputFormatOptions = (input: OutputFormatOptions, context: __SerdeContext): any => {
  return {
    ...(input.Csv != null && { Csv: serializeAws_restJson1CsvOutputOptions(input.Csv, context) }),
  };
};

const serializeAws_restJson1OutputList = (input: Output[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Output(entry, context);
    });
};

const serializeAws_restJson1ParameterMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1PathOptions = (input: PathOptions, context: __SerdeContext): any => {
  return {
    ...(input.FilesLimit != null && { FilesLimit: serializeAws_restJson1FilesLimit(input.FilesLimit, context) }),
    ...(input.LastModifiedDateCondition != null && {
      LastModifiedDateCondition: serializeAws_restJson1FilterExpression(input.LastModifiedDateCondition, context),
    }),
    ...(input.Parameters != null && { Parameters: serializeAws_restJson1PathParametersMap(input.Parameters, context) }),
  };
};

const serializeAws_restJson1PathParametersMap = (
  input: Record<string, DatasetParameter>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1DatasetParameter(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1ProfileConfiguration = (input: ProfileConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ColumnStatisticsConfigurations != null && {
      ColumnStatisticsConfigurations: serializeAws_restJson1ColumnStatisticsConfigurationList(
        input.ColumnStatisticsConfigurations,
        context
      ),
    }),
    ...(input.DatasetStatisticsConfiguration != null && {
      DatasetStatisticsConfiguration: serializeAws_restJson1StatisticsConfiguration(
        input.DatasetStatisticsConfiguration,
        context
      ),
    }),
    ...(input.EntityDetectorConfiguration != null && {
      EntityDetectorConfiguration: serializeAws_restJson1EntityDetectorConfiguration(
        input.EntityDetectorConfiguration,
        context
      ),
    }),
    ...(input.ProfileColumns != null && {
      ProfileColumns: serializeAws_restJson1ColumnSelectorList(input.ProfileColumns, context),
    }),
  };
};

const serializeAws_restJson1RecipeAction = (input: RecipeAction, context: __SerdeContext): any => {
  return {
    ...(input.Operation != null && { Operation: input.Operation }),
    ...(input.Parameters != null && { Parameters: serializeAws_restJson1ParameterMap(input.Parameters, context) }),
  };
};

const serializeAws_restJson1RecipeReference = (input: RecipeReference, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RecipeVersion != null && { RecipeVersion: input.RecipeVersion }),
  };
};

const serializeAws_restJson1RecipeStep = (input: RecipeStep, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: serializeAws_restJson1RecipeAction(input.Action, context) }),
    ...(input.ConditionExpressions != null && {
      ConditionExpressions: serializeAws_restJson1ConditionExpressionList(input.ConditionExpressions, context),
    }),
  };
};

const serializeAws_restJson1RecipeStepList = (input: RecipeStep[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RecipeStep(entry, context);
    });
};

const serializeAws_restJson1RecipeVersionList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Rule = (input: Rule, context: __SerdeContext): any => {
  return {
    ...(input.CheckExpression != null && { CheckExpression: input.CheckExpression }),
    ...(input.ColumnSelectors != null && {
      ColumnSelectors: serializeAws_restJson1ColumnSelectorList(input.ColumnSelectors, context),
    }),
    ...(input.Disabled != null && { Disabled: input.Disabled }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SubstitutionMap != null && {
      SubstitutionMap: serializeAws_restJson1ValuesMap(input.SubstitutionMap, context),
    }),
    ...(input.Threshold != null && { Threshold: serializeAws_restJson1Threshold(input.Threshold, context) }),
  };
};

const serializeAws_restJson1RuleList = (input: Rule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Rule(entry, context);
    });
};

const serializeAws_restJson1S3Location = (input: S3Location, context: __SerdeContext): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.BucketOwner != null && { BucketOwner: input.BucketOwner }),
    ...(input.Key != null && { Key: input.Key }),
  };
};

const serializeAws_restJson1S3TableOutputOptions = (input: S3TableOutputOptions, context: __SerdeContext): any => {
  return {
    ...(input.Location != null && { Location: serializeAws_restJson1S3Location(input.Location, context) }),
  };
};

const serializeAws_restJson1Sample = (input: Sample, context: __SerdeContext): any => {
  return {
    ...(input.Size != null && { Size: input.Size }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1SheetIndexList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1SheetNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1StatisticList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1StatisticOverride = (input: StatisticOverride, context: __SerdeContext): any => {
  return {
    ...(input.Parameters != null && { Parameters: serializeAws_restJson1ParameterMap(input.Parameters, context) }),
    ...(input.Statistic != null && { Statistic: input.Statistic }),
  };
};

const serializeAws_restJson1StatisticOverrideList = (input: StatisticOverride[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1StatisticOverride(entry, context);
    });
};

const serializeAws_restJson1StatisticsConfiguration = (
  input: StatisticsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.IncludedStatistics != null && {
      IncludedStatistics: serializeAws_restJson1StatisticList(input.IncludedStatistics, context),
    }),
    ...(input.Overrides != null && {
      Overrides: serializeAws_restJson1StatisticOverrideList(input.Overrides, context),
    }),
  };
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1Threshold = (input: Threshold, context: __SerdeContext): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Unit != null && { Unit: input.Unit }),
    ...(input.Value != null && { Value: __serializeFloat(input.Value) }),
  };
};

const serializeAws_restJson1ValidationConfiguration = (
  input: ValidationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.RulesetArn != null && { RulesetArn: input.RulesetArn }),
    ...(input.ValidationMode != null && { ValidationMode: input.ValidationMode }),
  };
};

const serializeAws_restJson1ValidationConfigurationList = (
  input: ValidationConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ValidationConfiguration(entry, context);
    });
};

const serializeAws_restJson1ValuesMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1ViewFrame = (input: ViewFrame, context: __SerdeContext): any => {
  return {
    ...(input.Analytics != null && { Analytics: input.Analytics }),
    ...(input.ColumnRange != null && { ColumnRange: input.ColumnRange }),
    ...(input.HiddenColumns != null && {
      HiddenColumns: serializeAws_restJson1HiddenColumnList(input.HiddenColumns, context),
    }),
    ...(input.RowRange != null && { RowRange: input.RowRange }),
    ...(input.StartColumnIndex != null && { StartColumnIndex: input.StartColumnIndex }),
    ...(input.StartRowIndex != null && { StartRowIndex: input.StartRowIndex }),
  };
};

const deserializeAws_restJson1AllowedStatisticList = (output: any, context: __SerdeContext): AllowedStatistics[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AllowedStatistics(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AllowedStatistics = (output: any, context: __SerdeContext): AllowedStatistics => {
  return {
    Statistics:
      output.Statistics != null ? deserializeAws_restJson1StatisticList(output.Statistics, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ColumnNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ColumnSelector = (output: any, context: __SerdeContext): ColumnSelector => {
  return {
    Name: __expectString(output.Name),
    Regex: __expectString(output.Regex),
  } as any;
};

const deserializeAws_restJson1ColumnSelectorList = (output: any, context: __SerdeContext): ColumnSelector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ColumnSelector(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ColumnStatisticsConfiguration = (
  output: any,
  context: __SerdeContext
): ColumnStatisticsConfiguration => {
  return {
    Selectors:
      output.Selectors != null ? deserializeAws_restJson1ColumnSelectorList(output.Selectors, context) : undefined,
    Statistics:
      output.Statistics != null
        ? deserializeAws_restJson1StatisticsConfiguration(output.Statistics, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ColumnStatisticsConfigurationList = (
  output: any,
  context: __SerdeContext
): ColumnStatisticsConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ColumnStatisticsConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ConditionExpression = (output: any, context: __SerdeContext): ConditionExpression => {
  return {
    Condition: __expectString(output.Condition),
    TargetColumn: __expectString(output.TargetColumn),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1ConditionExpressionList = (
  output: any,
  context: __SerdeContext
): ConditionExpression[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConditionExpression(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CsvOptions = (output: any, context: __SerdeContext): CsvOptions => {
  return {
    Delimiter: __expectString(output.Delimiter),
    HeaderRow: __expectBoolean(output.HeaderRow),
  } as any;
};

const deserializeAws_restJson1CsvOutputOptions = (output: any, context: __SerdeContext): CsvOutputOptions => {
  return {
    Delimiter: __expectString(output.Delimiter),
  } as any;
};

const deserializeAws_restJson1DatabaseInputDefinition = (
  output: any,
  context: __SerdeContext
): DatabaseInputDefinition => {
  return {
    DatabaseTableName: __expectString(output.DatabaseTableName),
    GlueConnectionName: __expectString(output.GlueConnectionName),
    QueryString: __expectString(output.QueryString),
    TempDirectory:
      output.TempDirectory != null ? deserializeAws_restJson1S3Location(output.TempDirectory, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DatabaseOutput = (output: any, context: __SerdeContext): DatabaseOutput => {
  return {
    DatabaseOptions:
      output.DatabaseOptions != null
        ? deserializeAws_restJson1DatabaseTableOutputOptions(output.DatabaseOptions, context)
        : undefined,
    DatabaseOutputMode: __expectString(output.DatabaseOutputMode),
    GlueConnectionName: __expectString(output.GlueConnectionName),
  } as any;
};

const deserializeAws_restJson1DatabaseOutputList = (output: any, context: __SerdeContext): DatabaseOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DatabaseOutput(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DatabaseTableOutputOptions = (
  output: any,
  context: __SerdeContext
): DatabaseTableOutputOptions => {
  return {
    TableName: __expectString(output.TableName),
    TempDirectory:
      output.TempDirectory != null ? deserializeAws_restJson1S3Location(output.TempDirectory, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DataCatalogInputDefinition = (
  output: any,
  context: __SerdeContext
): DataCatalogInputDefinition => {
  return {
    CatalogId: __expectString(output.CatalogId),
    DatabaseName: __expectString(output.DatabaseName),
    TableName: __expectString(output.TableName),
    TempDirectory:
      output.TempDirectory != null ? deserializeAws_restJson1S3Location(output.TempDirectory, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DataCatalogOutput = (output: any, context: __SerdeContext): DataCatalogOutput => {
  return {
    CatalogId: __expectString(output.CatalogId),
    DatabaseName: __expectString(output.DatabaseName),
    DatabaseOptions:
      output.DatabaseOptions != null
        ? deserializeAws_restJson1DatabaseTableOutputOptions(output.DatabaseOptions, context)
        : undefined,
    Overwrite: __expectBoolean(output.Overwrite),
    S3Options:
      output.S3Options != null ? deserializeAws_restJson1S3TableOutputOptions(output.S3Options, context) : undefined,
    TableName: __expectString(output.TableName),
  } as any;
};

const deserializeAws_restJson1DataCatalogOutputList = (output: any, context: __SerdeContext): DataCatalogOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataCatalogOutput(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Dataset = (output: any, context: __SerdeContext): Dataset => {
  return {
    AccountId: __expectString(output.AccountId),
    CreateDate:
      output.CreateDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateDate))) : undefined,
    CreatedBy: __expectString(output.CreatedBy),
    Format: __expectString(output.Format),
    FormatOptions:
      output.FormatOptions != null ? deserializeAws_restJson1FormatOptions(output.FormatOptions, context) : undefined,
    Input: output.Input != null ? deserializeAws_restJson1Input(output.Input, context) : undefined,
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate:
      output.LastModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedDate)))
        : undefined,
    Name: __expectString(output.Name),
    PathOptions:
      output.PathOptions != null ? deserializeAws_restJson1PathOptions(output.PathOptions, context) : undefined,
    ResourceArn: __expectString(output.ResourceArn),
    Source: __expectString(output.Source),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DatasetList = (output: any, context: __SerdeContext): Dataset[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Dataset(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DatasetParameter = (output: any, context: __SerdeContext): DatasetParameter => {
  return {
    CreateColumn: __expectBoolean(output.CreateColumn),
    DatetimeOptions:
      output.DatetimeOptions != null
        ? deserializeAws_restJson1DatetimeOptions(output.DatetimeOptions, context)
        : undefined,
    Filter: output.Filter != null ? deserializeAws_restJson1FilterExpression(output.Filter, context) : undefined,
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1DatetimeOptions = (output: any, context: __SerdeContext): DatetimeOptions => {
  return {
    Format: __expectString(output.Format),
    LocaleCode: __expectString(output.LocaleCode),
    TimezoneOffset: __expectString(output.TimezoneOffset),
  } as any;
};

const deserializeAws_restJson1EntityDetectorConfiguration = (
  output: any,
  context: __SerdeContext
): EntityDetectorConfiguration => {
  return {
    AllowedStatistics:
      output.AllowedStatistics != null
        ? deserializeAws_restJson1AllowedStatisticList(output.AllowedStatistics, context)
        : undefined,
    EntityTypes:
      output.EntityTypes != null ? deserializeAws_restJson1EntityTypeList(output.EntityTypes, context) : undefined,
  } as any;
};

const deserializeAws_restJson1EntityTypeList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ExcelOptions = (output: any, context: __SerdeContext): ExcelOptions => {
  return {
    HeaderRow: __expectBoolean(output.HeaderRow),
    SheetIndexes:
      output.SheetIndexes != null ? deserializeAws_restJson1SheetIndexList(output.SheetIndexes, context) : undefined,
    SheetNames:
      output.SheetNames != null ? deserializeAws_restJson1SheetNameList(output.SheetNames, context) : undefined,
  } as any;
};

const deserializeAws_restJson1FilesLimit = (output: any, context: __SerdeContext): FilesLimit => {
  return {
    MaxFiles: __expectInt32(output.MaxFiles),
    Order: __expectString(output.Order),
    OrderedBy: __expectString(output.OrderedBy),
  } as any;
};

const deserializeAws_restJson1FilterExpression = (output: any, context: __SerdeContext): FilterExpression => {
  return {
    Expression: __expectString(output.Expression),
    ValuesMap: output.ValuesMap != null ? deserializeAws_restJson1ValuesMap(output.ValuesMap, context) : undefined,
  } as any;
};

const deserializeAws_restJson1FormatOptions = (output: any, context: __SerdeContext): FormatOptions => {
  return {
    Csv: output.Csv != null ? deserializeAws_restJson1CsvOptions(output.Csv, context) : undefined,
    Excel: output.Excel != null ? deserializeAws_restJson1ExcelOptions(output.Excel, context) : undefined,
    Json: output.Json != null ? deserializeAws_restJson1JsonOptions(output.Json, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Input = (output: any, context: __SerdeContext): Input => {
  return {
    DataCatalogInputDefinition:
      output.DataCatalogInputDefinition != null
        ? deserializeAws_restJson1DataCatalogInputDefinition(output.DataCatalogInputDefinition, context)
        : undefined,
    DatabaseInputDefinition:
      output.DatabaseInputDefinition != null
        ? deserializeAws_restJson1DatabaseInputDefinition(output.DatabaseInputDefinition, context)
        : undefined,
    Metadata: output.Metadata != null ? deserializeAws_restJson1Metadata(output.Metadata, context) : undefined,
    S3InputDefinition:
      output.S3InputDefinition != null
        ? deserializeAws_restJson1S3Location(output.S3InputDefinition, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Job = (output: any, context: __SerdeContext): Job => {
  return {
    AccountId: __expectString(output.AccountId),
    CreateDate:
      output.CreateDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateDate))) : undefined,
    CreatedBy: __expectString(output.CreatedBy),
    DataCatalogOutputs:
      output.DataCatalogOutputs != null
        ? deserializeAws_restJson1DataCatalogOutputList(output.DataCatalogOutputs, context)
        : undefined,
    DatabaseOutputs:
      output.DatabaseOutputs != null
        ? deserializeAws_restJson1DatabaseOutputList(output.DatabaseOutputs, context)
        : undefined,
    DatasetName: __expectString(output.DatasetName),
    EncryptionKeyArn: __expectString(output.EncryptionKeyArn),
    EncryptionMode: __expectString(output.EncryptionMode),
    JobSample: output.JobSample != null ? deserializeAws_restJson1JobSample(output.JobSample, context) : undefined,
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate:
      output.LastModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedDate)))
        : undefined,
    LogSubscription: __expectString(output.LogSubscription),
    MaxCapacity: __expectInt32(output.MaxCapacity),
    MaxRetries: __expectInt32(output.MaxRetries),
    Name: __expectString(output.Name),
    Outputs: output.Outputs != null ? deserializeAws_restJson1OutputList(output.Outputs, context) : undefined,
    ProjectName: __expectString(output.ProjectName),
    RecipeReference:
      output.RecipeReference != null
        ? deserializeAws_restJson1RecipeReference(output.RecipeReference, context)
        : undefined,
    ResourceArn: __expectString(output.ResourceArn),
    RoleArn: __expectString(output.RoleArn),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
    Timeout: __expectInt32(output.Timeout),
    Type: __expectString(output.Type),
    ValidationConfigurations:
      output.ValidationConfigurations != null
        ? deserializeAws_restJson1ValidationConfigurationList(output.ValidationConfigurations, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1JobList = (output: any, context: __SerdeContext): Job[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Job(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1JobNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1JobRun = (output: any, context: __SerdeContext): JobRun => {
  return {
    Attempt: __expectInt32(output.Attempt),
    CompletedOn:
      output.CompletedOn != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletedOn)))
        : undefined,
    DataCatalogOutputs:
      output.DataCatalogOutputs != null
        ? deserializeAws_restJson1DataCatalogOutputList(output.DataCatalogOutputs, context)
        : undefined,
    DatabaseOutputs:
      output.DatabaseOutputs != null
        ? deserializeAws_restJson1DatabaseOutputList(output.DatabaseOutputs, context)
        : undefined,
    DatasetName: __expectString(output.DatasetName),
    ErrorMessage: __expectString(output.ErrorMessage),
    ExecutionTime: __expectInt32(output.ExecutionTime),
    JobName: __expectString(output.JobName),
    JobSample: output.JobSample != null ? deserializeAws_restJson1JobSample(output.JobSample, context) : undefined,
    LogGroupName: __expectString(output.LogGroupName),
    LogSubscription: __expectString(output.LogSubscription),
    Outputs: output.Outputs != null ? deserializeAws_restJson1OutputList(output.Outputs, context) : undefined,
    RecipeReference:
      output.RecipeReference != null
        ? deserializeAws_restJson1RecipeReference(output.RecipeReference, context)
        : undefined,
    RunId: __expectString(output.RunId),
    StartedBy: __expectString(output.StartedBy),
    StartedOn:
      output.StartedOn != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartedOn))) : undefined,
    State: __expectString(output.State),
    ValidationConfigurations:
      output.ValidationConfigurations != null
        ? deserializeAws_restJson1ValidationConfigurationList(output.ValidationConfigurations, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1JobRunList = (output: any, context: __SerdeContext): JobRun[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobRun(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1JobSample = (output: any, context: __SerdeContext): JobSample => {
  return {
    Mode: __expectString(output.Mode),
    Size: __expectLong(output.Size),
  } as any;
};

const deserializeAws_restJson1JsonOptions = (output: any, context: __SerdeContext): JsonOptions => {
  return {
    MultiLine: __expectBoolean(output.MultiLine),
  } as any;
};

const deserializeAws_restJson1Metadata = (output: any, context: __SerdeContext): Metadata => {
  return {
    SourceArn: __expectString(output.SourceArn),
  } as any;
};

const deserializeAws_restJson1Output = (output: any, context: __SerdeContext): Output => {
  return {
    CompressionFormat: __expectString(output.CompressionFormat),
    Format: __expectString(output.Format),
    FormatOptions:
      output.FormatOptions != null
        ? deserializeAws_restJson1OutputFormatOptions(output.FormatOptions, context)
        : undefined,
    Location: output.Location != null ? deserializeAws_restJson1S3Location(output.Location, context) : undefined,
    MaxOutputFiles: __expectInt32(output.MaxOutputFiles),
    Overwrite: __expectBoolean(output.Overwrite),
    PartitionColumns:
      output.PartitionColumns != null
        ? deserializeAws_restJson1ColumnNameList(output.PartitionColumns, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1OutputFormatOptions = (output: any, context: __SerdeContext): OutputFormatOptions => {
  return {
    Csv: output.Csv != null ? deserializeAws_restJson1CsvOutputOptions(output.Csv, context) : undefined,
  } as any;
};

const deserializeAws_restJson1OutputList = (output: any, context: __SerdeContext): Output[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Output(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ParameterMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1PathOptions = (output: any, context: __SerdeContext): PathOptions => {
  return {
    FilesLimit: output.FilesLimit != null ? deserializeAws_restJson1FilesLimit(output.FilesLimit, context) : undefined,
    LastModifiedDateCondition:
      output.LastModifiedDateCondition != null
        ? deserializeAws_restJson1FilterExpression(output.LastModifiedDateCondition, context)
        : undefined,
    Parameters:
      output.Parameters != null ? deserializeAws_restJson1PathParametersMap(output.Parameters, context) : undefined,
  } as any;
};

const deserializeAws_restJson1PathParametersMap = (
  output: any,
  context: __SerdeContext
): Record<string, DatasetParameter> => {
  return Object.entries(output).reduce((acc: Record<string, DatasetParameter>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1DatasetParameter(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1ProfileConfiguration = (output: any, context: __SerdeContext): ProfileConfiguration => {
  return {
    ColumnStatisticsConfigurations:
      output.ColumnStatisticsConfigurations != null
        ? deserializeAws_restJson1ColumnStatisticsConfigurationList(output.ColumnStatisticsConfigurations, context)
        : undefined,
    DatasetStatisticsConfiguration:
      output.DatasetStatisticsConfiguration != null
        ? deserializeAws_restJson1StatisticsConfiguration(output.DatasetStatisticsConfiguration, context)
        : undefined,
    EntityDetectorConfiguration:
      output.EntityDetectorConfiguration != null
        ? deserializeAws_restJson1EntityDetectorConfiguration(output.EntityDetectorConfiguration, context)
        : undefined,
    ProfileColumns:
      output.ProfileColumns != null
        ? deserializeAws_restJson1ColumnSelectorList(output.ProfileColumns, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Project = (output: any, context: __SerdeContext): Project => {
  return {
    AccountId: __expectString(output.AccountId),
    CreateDate:
      output.CreateDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateDate))) : undefined,
    CreatedBy: __expectString(output.CreatedBy),
    DatasetName: __expectString(output.DatasetName),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate:
      output.LastModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedDate)))
        : undefined,
    Name: __expectString(output.Name),
    OpenDate:
      output.OpenDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.OpenDate))) : undefined,
    OpenedBy: __expectString(output.OpenedBy),
    RecipeName: __expectString(output.RecipeName),
    ResourceArn: __expectString(output.ResourceArn),
    RoleArn: __expectString(output.RoleArn),
    Sample: output.Sample != null ? deserializeAws_restJson1Sample(output.Sample, context) : undefined,
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ProjectList = (output: any, context: __SerdeContext): Project[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Project(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Recipe = (output: any, context: __SerdeContext): Recipe => {
  return {
    CreateDate:
      output.CreateDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateDate))) : undefined,
    CreatedBy: __expectString(output.CreatedBy),
    Description: __expectString(output.Description),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate:
      output.LastModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedDate)))
        : undefined,
    Name: __expectString(output.Name),
    ProjectName: __expectString(output.ProjectName),
    PublishedBy: __expectString(output.PublishedBy),
    PublishedDate:
      output.PublishedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.PublishedDate)))
        : undefined,
    RecipeVersion: __expectString(output.RecipeVersion),
    ResourceArn: __expectString(output.ResourceArn),
    Steps: output.Steps != null ? deserializeAws_restJson1RecipeStepList(output.Steps, context) : undefined,
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1RecipeAction = (output: any, context: __SerdeContext): RecipeAction => {
  return {
    Operation: __expectString(output.Operation),
    Parameters:
      output.Parameters != null ? deserializeAws_restJson1ParameterMap(output.Parameters, context) : undefined,
  } as any;
};

const deserializeAws_restJson1RecipeErrorList = (output: any, context: __SerdeContext): RecipeVersionErrorDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecipeVersionErrorDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RecipeList = (output: any, context: __SerdeContext): Recipe[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Recipe(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RecipeReference = (output: any, context: __SerdeContext): RecipeReference => {
  return {
    Name: __expectString(output.Name),
    RecipeVersion: __expectString(output.RecipeVersion),
  } as any;
};

const deserializeAws_restJson1RecipeStep = (output: any, context: __SerdeContext): RecipeStep => {
  return {
    Action: output.Action != null ? deserializeAws_restJson1RecipeAction(output.Action, context) : undefined,
    ConditionExpressions:
      output.ConditionExpressions != null
        ? deserializeAws_restJson1ConditionExpressionList(output.ConditionExpressions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RecipeStepList = (output: any, context: __SerdeContext): RecipeStep[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecipeStep(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RecipeVersionErrorDetail = (
  output: any,
  context: __SerdeContext
): RecipeVersionErrorDetail => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    RecipeVersion: __expectString(output.RecipeVersion),
  } as any;
};

const deserializeAws_restJson1Rule = (output: any, context: __SerdeContext): Rule => {
  return {
    CheckExpression: __expectString(output.CheckExpression),
    ColumnSelectors:
      output.ColumnSelectors != null
        ? deserializeAws_restJson1ColumnSelectorList(output.ColumnSelectors, context)
        : undefined,
    Disabled: __expectBoolean(output.Disabled),
    Name: __expectString(output.Name),
    SubstitutionMap:
      output.SubstitutionMap != null ? deserializeAws_restJson1ValuesMap(output.SubstitutionMap, context) : undefined,
    Threshold: output.Threshold != null ? deserializeAws_restJson1Threshold(output.Threshold, context) : undefined,
  } as any;
};

const deserializeAws_restJson1RuleList = (output: any, context: __SerdeContext): Rule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Rule(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RulesetItem = (output: any, context: __SerdeContext): RulesetItem => {
  return {
    AccountId: __expectString(output.AccountId),
    CreateDate:
      output.CreateDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateDate))) : undefined,
    CreatedBy: __expectString(output.CreatedBy),
    Description: __expectString(output.Description),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate:
      output.LastModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedDate)))
        : undefined,
    Name: __expectString(output.Name),
    ResourceArn: __expectString(output.ResourceArn),
    RuleCount: __expectInt32(output.RuleCount),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
    TargetArn: __expectString(output.TargetArn),
  } as any;
};

const deserializeAws_restJson1RulesetItemList = (output: any, context: __SerdeContext): RulesetItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RulesetItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1S3Location = (output: any, context: __SerdeContext): S3Location => {
  return {
    Bucket: __expectString(output.Bucket),
    BucketOwner: __expectString(output.BucketOwner),
    Key: __expectString(output.Key),
  } as any;
};

const deserializeAws_restJson1S3TableOutputOptions = (output: any, context: __SerdeContext): S3TableOutputOptions => {
  return {
    Location: output.Location != null ? deserializeAws_restJson1S3Location(output.Location, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Sample = (output: any, context: __SerdeContext): Sample => {
  return {
    Size: __expectInt32(output.Size),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1Schedule = (output: any, context: __SerdeContext): Schedule => {
  return {
    AccountId: __expectString(output.AccountId),
    CreateDate:
      output.CreateDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateDate))) : undefined,
    CreatedBy: __expectString(output.CreatedBy),
    CronExpression: __expectString(output.CronExpression),
    JobNames: output.JobNames != null ? deserializeAws_restJson1JobNameList(output.JobNames, context) : undefined,
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate:
      output.LastModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedDate)))
        : undefined,
    Name: __expectString(output.Name),
    ResourceArn: __expectString(output.ResourceArn),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ScheduleList = (output: any, context: __SerdeContext): Schedule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Schedule(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SheetIndexList = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1SheetNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1StatisticList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1StatisticOverride = (output: any, context: __SerdeContext): StatisticOverride => {
  return {
    Parameters:
      output.Parameters != null ? deserializeAws_restJson1ParameterMap(output.Parameters, context) : undefined,
    Statistic: __expectString(output.Statistic),
  } as any;
};

const deserializeAws_restJson1StatisticOverrideList = (output: any, context: __SerdeContext): StatisticOverride[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StatisticOverride(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StatisticsConfiguration = (
  output: any,
  context: __SerdeContext
): StatisticsConfiguration => {
  return {
    IncludedStatistics:
      output.IncludedStatistics != null
        ? deserializeAws_restJson1StatisticList(output.IncludedStatistics, context)
        : undefined,
    Overrides:
      output.Overrides != null ? deserializeAws_restJson1StatisticOverrideList(output.Overrides, context) : undefined,
  } as any;
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1Threshold = (output: any, context: __SerdeContext): Threshold => {
  return {
    Type: __expectString(output.Type),
    Unit: __expectString(output.Unit),
    Value: __limitedParseDouble(output.Value),
  } as any;
};

const deserializeAws_restJson1ValidationConfiguration = (
  output: any,
  context: __SerdeContext
): ValidationConfiguration => {
  return {
    RulesetArn: __expectString(output.RulesetArn),
    ValidationMode: __expectString(output.ValidationMode),
  } as any;
};

const deserializeAws_restJson1ValidationConfigurationList = (
  output: any,
  context: __SerdeContext
): ValidationConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidationConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ValuesMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
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
