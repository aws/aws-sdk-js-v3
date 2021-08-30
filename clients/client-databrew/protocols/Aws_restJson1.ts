import {
  BatchDeleteRecipeVersionCommandInput,
  BatchDeleteRecipeVersionCommandOutput,
} from "../commands/BatchDeleteRecipeVersionCommand";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "../commands/CreateDatasetCommand";
import { CreateProfileJobCommandInput, CreateProfileJobCommandOutput } from "../commands/CreateProfileJobCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "../commands/CreateProjectCommand";
import { CreateRecipeCommandInput, CreateRecipeCommandOutput } from "../commands/CreateRecipeCommand";
import { CreateRecipeJobCommandInput, CreateRecipeJobCommandOutput } from "../commands/CreateRecipeJobCommand";
import { CreateScheduleCommandInput, CreateScheduleCommandOutput } from "../commands/CreateScheduleCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "../commands/DeleteDatasetCommand";
import { DeleteJobCommandInput, DeleteJobCommandOutput } from "../commands/DeleteJobCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "../commands/DeleteProjectCommand";
import {
  DeleteRecipeVersionCommandInput,
  DeleteRecipeVersionCommandOutput,
} from "../commands/DeleteRecipeVersionCommand";
import { DeleteScheduleCommandInput, DeleteScheduleCommandOutput } from "../commands/DeleteScheduleCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "../commands/DescribeDatasetCommand";
import { DescribeJobCommandInput, DescribeJobCommandOutput } from "../commands/DescribeJobCommand";
import { DescribeJobRunCommandInput, DescribeJobRunCommandOutput } from "../commands/DescribeJobRunCommand";
import { DescribeProjectCommandInput, DescribeProjectCommandOutput } from "../commands/DescribeProjectCommand";
import { DescribeRecipeCommandInput, DescribeRecipeCommandOutput } from "../commands/DescribeRecipeCommand";
import { DescribeScheduleCommandInput, DescribeScheduleCommandOutput } from "../commands/DescribeScheduleCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "../commands/ListDatasetsCommand";
import { ListJobRunsCommandInput, ListJobRunsCommandOutput } from "../commands/ListJobRunsCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "../commands/ListProjectsCommand";
import { ListRecipeVersionsCommandInput, ListRecipeVersionsCommandOutput } from "../commands/ListRecipeVersionsCommand";
import { ListRecipesCommandInput, ListRecipesCommandOutput } from "../commands/ListRecipesCommand";
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
import { UpdateScheduleCommandInput, UpdateScheduleCommandOutput } from "../commands/UpdateScheduleCommand";
import {
  AccessDeniedException,
  ColumnSelector,
  ColumnStatisticsConfiguration,
  ConditionExpression,
  ConflictException,
  CsvOptions,
  CsvOutputOptions,
  DataCatalogInputDefinition,
  DataCatalogOutput,
  DatabaseInputDefinition,
  DatabaseOutput,
  DatabaseTableOutputOptions,
  Dataset,
  DatasetParameter,
  DatetimeOptions,
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
  S3Location,
  S3TableOutputOptions,
  Sample,
  Schedule,
  ServiceQuotaExceededException,
  StatisticOverride,
  StatisticsConfiguration,
  ValidationException,
  ViewFrame,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

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
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.RecipeVersions !== undefined &&
      input.RecipeVersions !== null && {
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasets";
  let body: any;
  body = JSON.stringify({
    ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
    ...(input.FormatOptions !== undefined &&
      input.FormatOptions !== null && {
        FormatOptions: serializeAws_restJson1FormatOptions(input.FormatOptions, context),
      }),
    ...(input.Input !== undefined &&
      input.Input !== null && { Input: serializeAws_restJson1Input(input.Input, context) }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.PathOptions !== undefined &&
      input.PathOptions !== null && { PathOptions: serializeAws_restJson1PathOptions(input.PathOptions, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/profileJobs";
  let body: any;
  body = JSON.stringify({
    ...(input.Configuration !== undefined &&
      input.Configuration !== null && {
        Configuration: serializeAws_restJson1ProfileConfiguration(input.Configuration, context),
      }),
    ...(input.DatasetName !== undefined && input.DatasetName !== null && { DatasetName: input.DatasetName }),
    ...(input.EncryptionKeyArn !== undefined &&
      input.EncryptionKeyArn !== null && { EncryptionKeyArn: input.EncryptionKeyArn }),
    ...(input.EncryptionMode !== undefined &&
      input.EncryptionMode !== null && { EncryptionMode: input.EncryptionMode }),
    ...(input.JobSample !== undefined &&
      input.JobSample !== null && { JobSample: serializeAws_restJson1JobSample(input.JobSample, context) }),
    ...(input.LogSubscription !== undefined &&
      input.LogSubscription !== null && { LogSubscription: input.LogSubscription }),
    ...(input.MaxCapacity !== undefined && input.MaxCapacity !== null && { MaxCapacity: input.MaxCapacity }),
    ...(input.MaxRetries !== undefined && input.MaxRetries !== null && { MaxRetries: input.MaxRetries }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.OutputLocation !== undefined &&
      input.OutputLocation !== null && {
        OutputLocation: serializeAws_restJson1S3Location(input.OutputLocation, context),
      }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects";
  let body: any;
  body = JSON.stringify({
    ...(input.DatasetName !== undefined && input.DatasetName !== null && { DatasetName: input.DatasetName }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RecipeName !== undefined && input.RecipeName !== null && { RecipeName: input.RecipeName }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.Sample !== undefined &&
      input.Sample !== null && { Sample: serializeAws_restJson1Sample(input.Sample, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/recipes";
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Steps !== undefined &&
      input.Steps !== null && { Steps: serializeAws_restJson1RecipeStepList(input.Steps, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/recipeJobs";
  let body: any;
  body = JSON.stringify({
    ...(input.DataCatalogOutputs !== undefined &&
      input.DataCatalogOutputs !== null && {
        DataCatalogOutputs: serializeAws_restJson1DataCatalogOutputList(input.DataCatalogOutputs, context),
      }),
    ...(input.DatabaseOutputs !== undefined &&
      input.DatabaseOutputs !== null && {
        DatabaseOutputs: serializeAws_restJson1DatabaseOutputList(input.DatabaseOutputs, context),
      }),
    ...(input.DatasetName !== undefined && input.DatasetName !== null && { DatasetName: input.DatasetName }),
    ...(input.EncryptionKeyArn !== undefined &&
      input.EncryptionKeyArn !== null && { EncryptionKeyArn: input.EncryptionKeyArn }),
    ...(input.EncryptionMode !== undefined &&
      input.EncryptionMode !== null && { EncryptionMode: input.EncryptionMode }),
    ...(input.LogSubscription !== undefined &&
      input.LogSubscription !== null && { LogSubscription: input.LogSubscription }),
    ...(input.MaxCapacity !== undefined && input.MaxCapacity !== null && { MaxCapacity: input.MaxCapacity }),
    ...(input.MaxRetries !== undefined && input.MaxRetries !== null && { MaxRetries: input.MaxRetries }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Outputs !== undefined &&
      input.Outputs !== null && { Outputs: serializeAws_restJson1OutputList(input.Outputs, context) }),
    ...(input.ProjectName !== undefined && input.ProjectName !== null && { ProjectName: input.ProjectName }),
    ...(input.RecipeReference !== undefined &&
      input.RecipeReference !== null && {
        RecipeReference: serializeAws_restJson1RecipeReference(input.RecipeReference, context),
      }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/schedules";
  let body: any;
  body = JSON.stringify({
    ...(input.CronExpression !== undefined &&
      input.CronExpression !== null && { CronExpression: input.CronExpression }),
    ...(input.JobNames !== undefined &&
      input.JobNames !== null && { JobNames: serializeAws_restJson1JobNameList(input.JobNames, context) }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
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
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
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
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
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
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  if (input.RecipeVersion !== undefined) {
    const labelValue: string = input.RecipeVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RecipeVersion.");
    }
    resolvedPath = resolvedPath.replace("{RecipeVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RecipeVersion.");
  }
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
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
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
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
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

export const serializeAws_restJson1DescribeJobCommand = async (
  input: DescribeJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobs/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
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

export const serializeAws_restJson1DescribeJobRunCommand = async (
  input: DescribeJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobs/{Name}/jobRun/{RunId}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  if (input.RunId !== undefined) {
    const labelValue: string = input.RunId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RunId.");
    }
    resolvedPath = resolvedPath.replace("{RunId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RunId.");
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

export const serializeAws_restJson1DescribeProjectCommand = async (
  input: DescribeProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
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

export const serializeAws_restJson1DescribeRecipeCommand = async (
  input: DescribeRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/recipes/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  const query: any = {
    ...(input.RecipeVersion !== undefined && { recipeVersion: input.RecipeVersion }),
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

export const serializeAws_restJson1DescribeScheduleCommand = async (
  input: DescribeScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/schedules/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
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

export const serializeAws_restJson1ListDatasetsCommand = async (
  input: ListDatasetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasets";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1ListJobRunsCommand = async (
  input: ListJobRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobs/{Name}/jobRuns";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1ListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobs";
  const query: any = {
    ...(input.DatasetName !== undefined && { datasetName: input.DatasetName }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.ProjectName !== undefined && { projectName: input.ProjectName }),
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

export const serializeAws_restJson1ListProjectsCommand = async (
  input: ListProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects";
  const query: any = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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

export const serializeAws_restJson1ListRecipesCommand = async (
  input: ListRecipesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/recipes";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.RecipeVersion !== undefined && { recipeVersion: input.RecipeVersion }),
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

export const serializeAws_restJson1ListRecipeVersionsCommand = async (
  input: ListRecipeVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/recipeVersions";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.Name !== undefined && { name: input.Name }),
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

export const serializeAws_restJson1ListSchedulesCommand = async (
  input: ListSchedulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/schedules";
  const query: any = {
    ...(input.JobName !== undefined && { jobName: input.JobName }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
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
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
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
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ClientSessionId !== undefined &&
      input.ClientSessionId !== null && { ClientSessionId: input.ClientSessionId }),
    ...(input.Preview !== undefined && input.Preview !== null && { Preview: input.Preview }),
    ...(input.RecipeStep !== undefined &&
      input.RecipeStep !== null && { RecipeStep: serializeAws_restJson1RecipeStep(input.RecipeStep, context) }),
    ...(input.StepIndex !== undefined && input.StepIndex !== null && { StepIndex: input.StepIndex }),
    ...(input.ViewFrame !== undefined &&
      input.ViewFrame !== null && { ViewFrame: serializeAws_restJson1ViewFrame(input.ViewFrame, context) }),
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
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
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
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AssumeControl !== undefined && input.AssumeControl !== null && { AssumeControl: input.AssumeControl }),
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
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  if (input.RunId !== undefined) {
    const labelValue: string = input.RunId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RunId.");
    }
    resolvedPath = resolvedPath.replace("{RunId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RunId.");
  }
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
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry as any) }),
  };
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
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
    ...(input.FormatOptions !== undefined &&
      input.FormatOptions !== null && {
        FormatOptions: serializeAws_restJson1FormatOptions(input.FormatOptions, context),
      }),
    ...(input.Input !== undefined &&
      input.Input !== null && { Input: serializeAws_restJson1Input(input.Input, context) }),
    ...(input.PathOptions !== undefined &&
      input.PathOptions !== null && { PathOptions: serializeAws_restJson1PathOptions(input.PathOptions, context) }),
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
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Configuration !== undefined &&
      input.Configuration !== null && {
        Configuration: serializeAws_restJson1ProfileConfiguration(input.Configuration, context),
      }),
    ...(input.EncryptionKeyArn !== undefined &&
      input.EncryptionKeyArn !== null && { EncryptionKeyArn: input.EncryptionKeyArn }),
    ...(input.EncryptionMode !== undefined &&
      input.EncryptionMode !== null && { EncryptionMode: input.EncryptionMode }),
    ...(input.JobSample !== undefined &&
      input.JobSample !== null && { JobSample: serializeAws_restJson1JobSample(input.JobSample, context) }),
    ...(input.LogSubscription !== undefined &&
      input.LogSubscription !== null && { LogSubscription: input.LogSubscription }),
    ...(input.MaxCapacity !== undefined && input.MaxCapacity !== null && { MaxCapacity: input.MaxCapacity }),
    ...(input.MaxRetries !== undefined && input.MaxRetries !== null && { MaxRetries: input.MaxRetries }),
    ...(input.OutputLocation !== undefined &&
      input.OutputLocation !== null && {
        OutputLocation: serializeAws_restJson1S3Location(input.OutputLocation, context),
      }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
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
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.Sample !== undefined &&
      input.Sample !== null && { Sample: serializeAws_restJson1Sample(input.Sample, context) }),
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
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Steps !== undefined &&
      input.Steps !== null && { Steps: serializeAws_restJson1RecipeStepList(input.Steps, context) }),
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
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.DataCatalogOutputs !== undefined &&
      input.DataCatalogOutputs !== null && {
        DataCatalogOutputs: serializeAws_restJson1DataCatalogOutputList(input.DataCatalogOutputs, context),
      }),
    ...(input.DatabaseOutputs !== undefined &&
      input.DatabaseOutputs !== null && {
        DatabaseOutputs: serializeAws_restJson1DatabaseOutputList(input.DatabaseOutputs, context),
      }),
    ...(input.EncryptionKeyArn !== undefined &&
      input.EncryptionKeyArn !== null && { EncryptionKeyArn: input.EncryptionKeyArn }),
    ...(input.EncryptionMode !== undefined &&
      input.EncryptionMode !== null && { EncryptionMode: input.EncryptionMode }),
    ...(input.LogSubscription !== undefined &&
      input.LogSubscription !== null && { LogSubscription: input.LogSubscription }),
    ...(input.MaxCapacity !== undefined && input.MaxCapacity !== null && { MaxCapacity: input.MaxCapacity }),
    ...(input.MaxRetries !== undefined && input.MaxRetries !== null && { MaxRetries: input.MaxRetries }),
    ...(input.Outputs !== undefined &&
      input.Outputs !== null && { Outputs: serializeAws_restJson1OutputList(input.Outputs, context) }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
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
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.CronExpression !== undefined &&
      input.CronExpression !== null && { CronExpression: input.CronExpression }),
    ...(input.JobNames !== undefined &&
      input.JobNames !== null && { JobNames: serializeAws_restJson1JobNameList(input.JobNames, context) }),
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
  const contents: BatchDeleteRecipeVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Errors: undefined,
    Name: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Errors !== undefined && data.Errors !== null) {
    contents.Errors = deserializeAws_restJson1RecipeErrorList(data.Errors, context);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchDeleteRecipeVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteRecipeVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDatasetCommandError(output, context);
  }
  const contents: CreateDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    Name: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.databrew#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.databrew#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateProfileJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfileJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateProfileJobCommandError(output, context);
  }
  const contents: CreateProfileJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    Name: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateProfileJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfileJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.databrew#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.databrew#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateProjectCommandError(output, context);
  }
  const contents: CreateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    Name: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.databrew#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.databrew#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRecipeCommandError(output, context);
  }
  const contents: CreateRecipeCommandOutput = {
    $metadata: deserializeMetadata(output),
    Name: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateRecipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRecipeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.databrew#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateRecipeJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRecipeJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRecipeJobCommandError(output, context);
  }
  const contents: CreateRecipeJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    Name: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateRecipeJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRecipeJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.databrew#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.databrew#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateScheduleCommandError(output, context);
  }
  const contents: CreateScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    Name: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.databrew#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDatasetCommandError(output, context);
  }
  const contents: DeleteDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    Name: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteJobCommandError(output, context);
  }
  const contents: DeleteJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    Name: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteProjectCommandError(output, context);
  }
  const contents: DeleteProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    Name: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteRecipeVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecipeVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRecipeVersionCommandError(output, context);
  }
  const contents: DeleteRecipeVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Name: undefined,
    RecipeVersion: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.RecipeVersion !== undefined && data.RecipeVersion !== null) {
    contents.RecipeVersion = __expectString(data.RecipeVersion);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteRecipeVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecipeVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteScheduleCommandError(output, context);
  }
  const contents: DeleteScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    Name: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDatasetCommandError(output, context);
  }
  const contents: DescribeDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreateDate: undefined,
    CreatedBy: undefined,
    Format: undefined,
    FormatOptions: undefined,
    Input: undefined,
    LastModifiedBy: undefined,
    LastModifiedDate: undefined,
    Name: undefined,
    PathOptions: undefined,
    ResourceArn: undefined,
    Source: undefined,
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreateDate !== undefined && data.CreateDate !== null) {
    contents.CreateDate = new Date(Math.round(data.CreateDate * 1000));
  }
  if (data.CreatedBy !== undefined && data.CreatedBy !== null) {
    contents.CreatedBy = __expectString(data.CreatedBy);
  }
  if (data.Format !== undefined && data.Format !== null) {
    contents.Format = __expectString(data.Format);
  }
  if (data.FormatOptions !== undefined && data.FormatOptions !== null) {
    contents.FormatOptions = deserializeAws_restJson1FormatOptions(data.FormatOptions, context);
  }
  if (data.Input !== undefined && data.Input !== null) {
    contents.Input = deserializeAws_restJson1Input(data.Input, context);
  }
  if (data.LastModifiedBy !== undefined && data.LastModifiedBy !== null) {
    contents.LastModifiedBy = __expectString(data.LastModifiedBy);
  }
  if (data.LastModifiedDate !== undefined && data.LastModifiedDate !== null) {
    contents.LastModifiedDate = new Date(Math.round(data.LastModifiedDate * 1000));
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.PathOptions !== undefined && data.PathOptions !== null) {
    contents.PathOptions = deserializeAws_restJson1PathOptions(data.PathOptions, context);
  }
  if (data.ResourceArn !== undefined && data.ResourceArn !== null) {
    contents.ResourceArn = __expectString(data.ResourceArn);
  }
  if (data.Source !== undefined && data.Source !== null) {
    contents.Source = __expectString(data.Source);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeJobCommandError(output, context);
  }
  const contents: DescribeJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreateDate: undefined,
    CreatedBy: undefined,
    DataCatalogOutputs: undefined,
    DatabaseOutputs: undefined,
    DatasetName: undefined,
    EncryptionKeyArn: undefined,
    EncryptionMode: undefined,
    JobSample: undefined,
    LastModifiedBy: undefined,
    LastModifiedDate: undefined,
    LogSubscription: undefined,
    MaxCapacity: undefined,
    MaxRetries: undefined,
    Name: undefined,
    Outputs: undefined,
    ProfileConfiguration: undefined,
    ProjectName: undefined,
    RecipeReference: undefined,
    ResourceArn: undefined,
    RoleArn: undefined,
    Tags: undefined,
    Timeout: undefined,
    Type: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreateDate !== undefined && data.CreateDate !== null) {
    contents.CreateDate = new Date(Math.round(data.CreateDate * 1000));
  }
  if (data.CreatedBy !== undefined && data.CreatedBy !== null) {
    contents.CreatedBy = __expectString(data.CreatedBy);
  }
  if (data.DataCatalogOutputs !== undefined && data.DataCatalogOutputs !== null) {
    contents.DataCatalogOutputs = deserializeAws_restJson1DataCatalogOutputList(data.DataCatalogOutputs, context);
  }
  if (data.DatabaseOutputs !== undefined && data.DatabaseOutputs !== null) {
    contents.DatabaseOutputs = deserializeAws_restJson1DatabaseOutputList(data.DatabaseOutputs, context);
  }
  if (data.DatasetName !== undefined && data.DatasetName !== null) {
    contents.DatasetName = __expectString(data.DatasetName);
  }
  if (data.EncryptionKeyArn !== undefined && data.EncryptionKeyArn !== null) {
    contents.EncryptionKeyArn = __expectString(data.EncryptionKeyArn);
  }
  if (data.EncryptionMode !== undefined && data.EncryptionMode !== null) {
    contents.EncryptionMode = __expectString(data.EncryptionMode);
  }
  if (data.JobSample !== undefined && data.JobSample !== null) {
    contents.JobSample = deserializeAws_restJson1JobSample(data.JobSample, context);
  }
  if (data.LastModifiedBy !== undefined && data.LastModifiedBy !== null) {
    contents.LastModifiedBy = __expectString(data.LastModifiedBy);
  }
  if (data.LastModifiedDate !== undefined && data.LastModifiedDate !== null) {
    contents.LastModifiedDate = new Date(Math.round(data.LastModifiedDate * 1000));
  }
  if (data.LogSubscription !== undefined && data.LogSubscription !== null) {
    contents.LogSubscription = __expectString(data.LogSubscription);
  }
  if (data.MaxCapacity !== undefined && data.MaxCapacity !== null) {
    contents.MaxCapacity = __expectInt32(data.MaxCapacity);
  }
  if (data.MaxRetries !== undefined && data.MaxRetries !== null) {
    contents.MaxRetries = __expectInt32(data.MaxRetries);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Outputs !== undefined && data.Outputs !== null) {
    contents.Outputs = deserializeAws_restJson1OutputList(data.Outputs, context);
  }
  if (data.ProfileConfiguration !== undefined && data.ProfileConfiguration !== null) {
    contents.ProfileConfiguration = deserializeAws_restJson1ProfileConfiguration(data.ProfileConfiguration, context);
  }
  if (data.ProjectName !== undefined && data.ProjectName !== null) {
    contents.ProjectName = __expectString(data.ProjectName);
  }
  if (data.RecipeReference !== undefined && data.RecipeReference !== null) {
    contents.RecipeReference = deserializeAws_restJson1RecipeReference(data.RecipeReference, context);
  }
  if (data.ResourceArn !== undefined && data.ResourceArn !== null) {
    contents.ResourceArn = __expectString(data.ResourceArn);
  }
  if (data.RoleArn !== undefined && data.RoleArn !== null) {
    contents.RoleArn = __expectString(data.RoleArn);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  if (data.Timeout !== undefined && data.Timeout !== null) {
    contents.Timeout = __expectInt32(data.Timeout);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeJobRunCommandError(output, context);
  }
  const contents: DescribeJobRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    Attempt: undefined,
    CompletedOn: undefined,
    DataCatalogOutputs: undefined,
    DatabaseOutputs: undefined,
    DatasetName: undefined,
    ErrorMessage: undefined,
    ExecutionTime: undefined,
    JobName: undefined,
    JobSample: undefined,
    LogGroupName: undefined,
    LogSubscription: undefined,
    Outputs: undefined,
    ProfileConfiguration: undefined,
    RecipeReference: undefined,
    RunId: undefined,
    StartedBy: undefined,
    StartedOn: undefined,
    State: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attempt !== undefined && data.Attempt !== null) {
    contents.Attempt = __expectInt32(data.Attempt);
  }
  if (data.CompletedOn !== undefined && data.CompletedOn !== null) {
    contents.CompletedOn = new Date(Math.round(data.CompletedOn * 1000));
  }
  if (data.DataCatalogOutputs !== undefined && data.DataCatalogOutputs !== null) {
    contents.DataCatalogOutputs = deserializeAws_restJson1DataCatalogOutputList(data.DataCatalogOutputs, context);
  }
  if (data.DatabaseOutputs !== undefined && data.DatabaseOutputs !== null) {
    contents.DatabaseOutputs = deserializeAws_restJson1DatabaseOutputList(data.DatabaseOutputs, context);
  }
  if (data.DatasetName !== undefined && data.DatasetName !== null) {
    contents.DatasetName = __expectString(data.DatasetName);
  }
  if (data.ErrorMessage !== undefined && data.ErrorMessage !== null) {
    contents.ErrorMessage = __expectString(data.ErrorMessage);
  }
  if (data.ExecutionTime !== undefined && data.ExecutionTime !== null) {
    contents.ExecutionTime = __expectInt32(data.ExecutionTime);
  }
  if (data.JobName !== undefined && data.JobName !== null) {
    contents.JobName = __expectString(data.JobName);
  }
  if (data.JobSample !== undefined && data.JobSample !== null) {
    contents.JobSample = deserializeAws_restJson1JobSample(data.JobSample, context);
  }
  if (data.LogGroupName !== undefined && data.LogGroupName !== null) {
    contents.LogGroupName = __expectString(data.LogGroupName);
  }
  if (data.LogSubscription !== undefined && data.LogSubscription !== null) {
    contents.LogSubscription = __expectString(data.LogSubscription);
  }
  if (data.Outputs !== undefined && data.Outputs !== null) {
    contents.Outputs = deserializeAws_restJson1OutputList(data.Outputs, context);
  }
  if (data.ProfileConfiguration !== undefined && data.ProfileConfiguration !== null) {
    contents.ProfileConfiguration = deserializeAws_restJson1ProfileConfiguration(data.ProfileConfiguration, context);
  }
  if (data.RecipeReference !== undefined && data.RecipeReference !== null) {
    contents.RecipeReference = deserializeAws_restJson1RecipeReference(data.RecipeReference, context);
  }
  if (data.RunId !== undefined && data.RunId !== null) {
    contents.RunId = __expectString(data.RunId);
  }
  if (data.StartedBy !== undefined && data.StartedBy !== null) {
    contents.StartedBy = __expectString(data.StartedBy);
  }
  if (data.StartedOn !== undefined && data.StartedOn !== null) {
    contents.StartedOn = new Date(Math.round(data.StartedOn * 1000));
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = __expectString(data.State);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeJobRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeProjectCommandError(output, context);
  }
  const contents: DescribeProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreateDate: undefined,
    CreatedBy: undefined,
    DatasetName: undefined,
    LastModifiedBy: undefined,
    LastModifiedDate: undefined,
    Name: undefined,
    OpenDate: undefined,
    OpenedBy: undefined,
    RecipeName: undefined,
    ResourceArn: undefined,
    RoleArn: undefined,
    Sample: undefined,
    SessionStatus: undefined,
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreateDate !== undefined && data.CreateDate !== null) {
    contents.CreateDate = new Date(Math.round(data.CreateDate * 1000));
  }
  if (data.CreatedBy !== undefined && data.CreatedBy !== null) {
    contents.CreatedBy = __expectString(data.CreatedBy);
  }
  if (data.DatasetName !== undefined && data.DatasetName !== null) {
    contents.DatasetName = __expectString(data.DatasetName);
  }
  if (data.LastModifiedBy !== undefined && data.LastModifiedBy !== null) {
    contents.LastModifiedBy = __expectString(data.LastModifiedBy);
  }
  if (data.LastModifiedDate !== undefined && data.LastModifiedDate !== null) {
    contents.LastModifiedDate = new Date(Math.round(data.LastModifiedDate * 1000));
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.OpenDate !== undefined && data.OpenDate !== null) {
    contents.OpenDate = new Date(Math.round(data.OpenDate * 1000));
  }
  if (data.OpenedBy !== undefined && data.OpenedBy !== null) {
    contents.OpenedBy = __expectString(data.OpenedBy);
  }
  if (data.RecipeName !== undefined && data.RecipeName !== null) {
    contents.RecipeName = __expectString(data.RecipeName);
  }
  if (data.ResourceArn !== undefined && data.ResourceArn !== null) {
    contents.ResourceArn = __expectString(data.ResourceArn);
  }
  if (data.RoleArn !== undefined && data.RoleArn !== null) {
    contents.RoleArn = __expectString(data.RoleArn);
  }
  if (data.Sample !== undefined && data.Sample !== null) {
    contents.Sample = deserializeAws_restJson1Sample(data.Sample, context);
  }
  if (data.SessionStatus !== undefined && data.SessionStatus !== null) {
    contents.SessionStatus = __expectString(data.SessionStatus);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRecipeCommandError(output, context);
  }
  const contents: DescribeRecipeCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreateDate: undefined,
    CreatedBy: undefined,
    Description: undefined,
    LastModifiedBy: undefined,
    LastModifiedDate: undefined,
    Name: undefined,
    ProjectName: undefined,
    PublishedBy: undefined,
    PublishedDate: undefined,
    RecipeVersion: undefined,
    ResourceArn: undefined,
    Steps: undefined,
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreateDate !== undefined && data.CreateDate !== null) {
    contents.CreateDate = new Date(Math.round(data.CreateDate * 1000));
  }
  if (data.CreatedBy !== undefined && data.CreatedBy !== null) {
    contents.CreatedBy = __expectString(data.CreatedBy);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.LastModifiedBy !== undefined && data.LastModifiedBy !== null) {
    contents.LastModifiedBy = __expectString(data.LastModifiedBy);
  }
  if (data.LastModifiedDate !== undefined && data.LastModifiedDate !== null) {
    contents.LastModifiedDate = new Date(Math.round(data.LastModifiedDate * 1000));
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.ProjectName !== undefined && data.ProjectName !== null) {
    contents.ProjectName = __expectString(data.ProjectName);
  }
  if (data.PublishedBy !== undefined && data.PublishedBy !== null) {
    contents.PublishedBy = __expectString(data.PublishedBy);
  }
  if (data.PublishedDate !== undefined && data.PublishedDate !== null) {
    contents.PublishedDate = new Date(Math.round(data.PublishedDate * 1000));
  }
  if (data.RecipeVersion !== undefined && data.RecipeVersion !== null) {
    contents.RecipeVersion = __expectString(data.RecipeVersion);
  }
  if (data.ResourceArn !== undefined && data.ResourceArn !== null) {
    contents.ResourceArn = __expectString(data.ResourceArn);
  }
  if (data.Steps !== undefined && data.Steps !== null) {
    contents.Steps = deserializeAws_restJson1RecipeStepList(data.Steps, context);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeRecipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecipeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeScheduleCommandError(output, context);
  }
  const contents: DescribeScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreateDate: undefined,
    CreatedBy: undefined,
    CronExpression: undefined,
    JobNames: undefined,
    LastModifiedBy: undefined,
    LastModifiedDate: undefined,
    Name: undefined,
    ResourceArn: undefined,
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreateDate !== undefined && data.CreateDate !== null) {
    contents.CreateDate = new Date(Math.round(data.CreateDate * 1000));
  }
  if (data.CreatedBy !== undefined && data.CreatedBy !== null) {
    contents.CreatedBy = __expectString(data.CreatedBy);
  }
  if (data.CronExpression !== undefined && data.CronExpression !== null) {
    contents.CronExpression = __expectString(data.CronExpression);
  }
  if (data.JobNames !== undefined && data.JobNames !== null) {
    contents.JobNames = deserializeAws_restJson1JobNameList(data.JobNames, context);
  }
  if (data.LastModifiedBy !== undefined && data.LastModifiedBy !== null) {
    contents.LastModifiedBy = __expectString(data.LastModifiedBy);
  }
  if (data.LastModifiedDate !== undefined && data.LastModifiedDate !== null) {
    contents.LastModifiedDate = new Date(Math.round(data.LastModifiedDate * 1000));
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.ResourceArn !== undefined && data.ResourceArn !== null) {
    contents.ResourceArn = __expectString(data.ResourceArn);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListDatasetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDatasetsCommandError(output, context);
  }
  const contents: ListDatasetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Datasets: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Datasets !== undefined && data.Datasets !== null) {
    contents.Datasets = deserializeAws_restJson1DatasetList(data.Datasets, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDatasetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListJobRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobRunsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListJobRunsCommandError(output, context);
  }
  const contents: ListJobRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    JobRuns: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.JobRuns !== undefined && data.JobRuns !== null) {
    contents.JobRuns = deserializeAws_restJson1JobRunList(data.JobRuns, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListJobRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListJobsCommandError(output, context);
  }
  const contents: ListJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Jobs: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Jobs !== undefined && data.Jobs !== null) {
    contents.Jobs = deserializeAws_restJson1JobList(data.Jobs, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListProjectsCommandError(output, context);
  }
  const contents: ListProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Projects: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Projects !== undefined && data.Projects !== null) {
    contents.Projects = deserializeAws_restJson1ProjectList(data.Projects, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListProjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListRecipesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecipesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRecipesCommandError(output, context);
  }
  const contents: ListRecipesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Recipes: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Recipes !== undefined && data.Recipes !== null) {
    contents.Recipes = deserializeAws_restJson1RecipeList(data.Recipes, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListRecipesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecipesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListRecipeVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecipeVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRecipeVersionsCommandError(output, context);
  }
  const contents: ListRecipeVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Recipes: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Recipes !== undefined && data.Recipes !== null) {
    contents.Recipes = deserializeAws_restJson1RecipeList(data.Recipes, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListRecipeVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecipeVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListSchedulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchedulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSchedulesCommandError(output, context);
  }
  const contents: ListSchedulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Schedules: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Schedules !== undefined && data.Schedules !== null) {
    contents.Schedules = deserializeAws_restJson1ScheduleList(data.Schedules, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListSchedulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchedulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.databrew#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1PublishRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PublishRecipeCommandError(output, context);
  }
  const contents: PublishRecipeCommandOutput = {
    $metadata: deserializeMetadata(output),
    Name: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PublishRecipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishRecipeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.databrew#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1SendProjectSessionActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendProjectSessionActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SendProjectSessionActionCommandError(output, context);
  }
  const contents: SendProjectSessionActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ActionId: undefined,
    Name: undefined,
    Result: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ActionId !== undefined && data.ActionId !== null) {
    contents.ActionId = __expectInt32(data.ActionId);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Result !== undefined && data.Result !== null) {
    contents.Result = __expectString(data.Result);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SendProjectSessionActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendProjectSessionActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1StartJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartJobRunCommandError(output, context);
  }
  const contents: StartJobRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    RunId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RunId !== undefined && data.RunId !== null) {
    contents.RunId = __expectString(data.RunId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartJobRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.databrew#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1StartProjectSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartProjectSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartProjectSessionCommandError(output, context);
  }
  const contents: StartProjectSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ClientSessionId: undefined,
    Name: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ClientSessionId !== undefined && data.ClientSessionId !== null) {
    contents.ClientSessionId = __expectString(data.ClientSessionId);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartProjectSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartProjectSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.databrew#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.databrew#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1StopJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopJobRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopJobRunCommandError(output, context);
  }
  const contents: StopJobRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    RunId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RunId !== undefined && data.RunId !== null) {
    contents.RunId = __expectString(data.RunId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StopJobRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopJobRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.databrew#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.databrew#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDatasetCommandError(output, context);
  }
  const contents: UpdateDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    Name: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.databrew#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateProfileJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfileJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateProfileJobCommandError(output, context);
  }
  const contents: UpdateProfileJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    Name: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateProfileJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfileJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.databrew#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateProjectCommandError(output, context);
  }
  const contents: UpdateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    LastModifiedDate: undefined,
    Name: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LastModifiedDate !== undefined && data.LastModifiedDate !== null) {
    contents.LastModifiedDate = new Date(Math.round(data.LastModifiedDate * 1000));
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRecipeCommandError(output, context);
  }
  const contents: UpdateRecipeCommandOutput = {
    $metadata: deserializeMetadata(output),
    Name: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateRecipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecipeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateRecipeJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecipeJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRecipeJobCommandError(output, context);
  }
  const contents: UpdateRecipeJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    Name: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateRecipeJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecipeJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.databrew#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateScheduleCommandError(output, context);
  }
  const contents: UpdateScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    Name: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.databrew#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.databrew#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.databrew#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: ServiceQuotaExceededException = {
    name: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const serializeAws_restJson1ColumnNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ColumnSelector = (input: ColumnSelector, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Regex !== undefined && input.Regex !== null && { Regex: input.Regex }),
  };
};

const serializeAws_restJson1ColumnSelectorList = (input: ColumnSelector[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ColumnSelector(entry, context);
    });
};

const serializeAws_restJson1ColumnStatisticsConfiguration = (
  input: ColumnStatisticsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Selectors !== undefined &&
      input.Selectors !== null && { Selectors: serializeAws_restJson1ColumnSelectorList(input.Selectors, context) }),
    ...(input.Statistics !== undefined &&
      input.Statistics !== null && {
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
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ColumnStatisticsConfiguration(entry, context);
    });
};

const serializeAws_restJson1ConditionExpression = (input: ConditionExpression, context: __SerdeContext): any => {
  return {
    ...(input.Condition !== undefined && input.Condition !== null && { Condition: input.Condition }),
    ...(input.TargetColumn !== undefined && input.TargetColumn !== null && { TargetColumn: input.TargetColumn }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1ConditionExpressionList = (input: ConditionExpression[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ConditionExpression(entry, context);
    });
};

const serializeAws_restJson1CsvOptions = (input: CsvOptions, context: __SerdeContext): any => {
  return {
    ...(input.Delimiter !== undefined && input.Delimiter !== null && { Delimiter: input.Delimiter }),
    ...(input.HeaderRow !== undefined && input.HeaderRow !== null && { HeaderRow: input.HeaderRow }),
  };
};

const serializeAws_restJson1CsvOutputOptions = (input: CsvOutputOptions, context: __SerdeContext): any => {
  return {
    ...(input.Delimiter !== undefined && input.Delimiter !== null && { Delimiter: input.Delimiter }),
  };
};

const serializeAws_restJson1DatabaseInputDefinition = (
  input: DatabaseInputDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatabaseTableName !== undefined &&
      input.DatabaseTableName !== null && { DatabaseTableName: input.DatabaseTableName }),
    ...(input.GlueConnectionName !== undefined &&
      input.GlueConnectionName !== null && { GlueConnectionName: input.GlueConnectionName }),
    ...(input.TempDirectory !== undefined &&
      input.TempDirectory !== null && {
        TempDirectory: serializeAws_restJson1S3Location(input.TempDirectory, context),
      }),
  };
};

const serializeAws_restJson1DatabaseOutput = (input: DatabaseOutput, context: __SerdeContext): any => {
  return {
    ...(input.DatabaseOptions !== undefined &&
      input.DatabaseOptions !== null && {
        DatabaseOptions: serializeAws_restJson1DatabaseTableOutputOptions(input.DatabaseOptions, context),
      }),
    ...(input.DatabaseOutputMode !== undefined &&
      input.DatabaseOutputMode !== null && { DatabaseOutputMode: input.DatabaseOutputMode }),
    ...(input.GlueConnectionName !== undefined &&
      input.GlueConnectionName !== null && { GlueConnectionName: input.GlueConnectionName }),
  };
};

const serializeAws_restJson1DatabaseOutputList = (input: DatabaseOutput[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1DatabaseOutput(entry, context);
    });
};

const serializeAws_restJson1DatabaseTableOutputOptions = (
  input: DatabaseTableOutputOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    ...(input.TempDirectory !== undefined &&
      input.TempDirectory !== null && {
        TempDirectory: serializeAws_restJson1S3Location(input.TempDirectory, context),
      }),
  };
};

const serializeAws_restJson1DataCatalogInputDefinition = (
  input: DataCatalogInputDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    ...(input.TempDirectory !== undefined &&
      input.TempDirectory !== null && {
        TempDirectory: serializeAws_restJson1S3Location(input.TempDirectory, context),
      }),
  };
};

const serializeAws_restJson1DataCatalogOutput = (input: DataCatalogOutput, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.DatabaseOptions !== undefined &&
      input.DatabaseOptions !== null && {
        DatabaseOptions: serializeAws_restJson1DatabaseTableOutputOptions(input.DatabaseOptions, context),
      }),
    ...(input.Overwrite !== undefined && input.Overwrite !== null && { Overwrite: input.Overwrite }),
    ...(input.S3Options !== undefined &&
      input.S3Options !== null && { S3Options: serializeAws_restJson1S3TableOutputOptions(input.S3Options, context) }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
  };
};

const serializeAws_restJson1DataCatalogOutputList = (input: DataCatalogOutput[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1DataCatalogOutput(entry, context);
    });
};

const serializeAws_restJson1DatasetParameter = (input: DatasetParameter, context: __SerdeContext): any => {
  return {
    ...(input.CreateColumn !== undefined && input.CreateColumn !== null && { CreateColumn: input.CreateColumn }),
    ...(input.DatetimeOptions !== undefined &&
      input.DatetimeOptions !== null && {
        DatetimeOptions: serializeAws_restJson1DatetimeOptions(input.DatetimeOptions, context),
      }),
    ...(input.Filter !== undefined &&
      input.Filter !== null && { Filter: serializeAws_restJson1FilterExpression(input.Filter, context) }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1DatetimeOptions = (input: DatetimeOptions, context: __SerdeContext): any => {
  return {
    ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
    ...(input.LocaleCode !== undefined && input.LocaleCode !== null && { LocaleCode: input.LocaleCode }),
    ...(input.TimezoneOffset !== undefined &&
      input.TimezoneOffset !== null && { TimezoneOffset: input.TimezoneOffset }),
  };
};

const serializeAws_restJson1ExcelOptions = (input: ExcelOptions, context: __SerdeContext): any => {
  return {
    ...(input.HeaderRow !== undefined && input.HeaderRow !== null && { HeaderRow: input.HeaderRow }),
    ...(input.SheetIndexes !== undefined &&
      input.SheetIndexes !== null && {
        SheetIndexes: serializeAws_restJson1SheetIndexList(input.SheetIndexes, context),
      }),
    ...(input.SheetNames !== undefined &&
      input.SheetNames !== null && { SheetNames: serializeAws_restJson1SheetNameList(input.SheetNames, context) }),
  };
};

const serializeAws_restJson1FilesLimit = (input: FilesLimit, context: __SerdeContext): any => {
  return {
    ...(input.MaxFiles !== undefined && input.MaxFiles !== null && { MaxFiles: input.MaxFiles }),
    ...(input.Order !== undefined && input.Order !== null && { Order: input.Order }),
    ...(input.OrderedBy !== undefined && input.OrderedBy !== null && { OrderedBy: input.OrderedBy }),
  };
};

const serializeAws_restJson1FilterExpression = (input: FilterExpression, context: __SerdeContext): any => {
  return {
    ...(input.Expression !== undefined && input.Expression !== null && { Expression: input.Expression }),
    ...(input.ValuesMap !== undefined &&
      input.ValuesMap !== null && { ValuesMap: serializeAws_restJson1ValuesMap(input.ValuesMap, context) }),
  };
};

const serializeAws_restJson1FormatOptions = (input: FormatOptions, context: __SerdeContext): any => {
  return {
    ...(input.Csv !== undefined && input.Csv !== null && { Csv: serializeAws_restJson1CsvOptions(input.Csv, context) }),
    ...(input.Excel !== undefined &&
      input.Excel !== null && { Excel: serializeAws_restJson1ExcelOptions(input.Excel, context) }),
    ...(input.Json !== undefined &&
      input.Json !== null && { Json: serializeAws_restJson1JsonOptions(input.Json, context) }),
  };
};

const serializeAws_restJson1HiddenColumnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Input = (input: Input, context: __SerdeContext): any => {
  return {
    ...(input.DataCatalogInputDefinition !== undefined &&
      input.DataCatalogInputDefinition !== null && {
        DataCatalogInputDefinition: serializeAws_restJson1DataCatalogInputDefinition(
          input.DataCatalogInputDefinition,
          context
        ),
      }),
    ...(input.DatabaseInputDefinition !== undefined &&
      input.DatabaseInputDefinition !== null && {
        DatabaseInputDefinition: serializeAws_restJson1DatabaseInputDefinition(input.DatabaseInputDefinition, context),
      }),
    ...(input.S3InputDefinition !== undefined &&
      input.S3InputDefinition !== null && {
        S3InputDefinition: serializeAws_restJson1S3Location(input.S3InputDefinition, context),
      }),
  };
};

const serializeAws_restJson1JobNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1JobSample = (input: JobSample, context: __SerdeContext): any => {
  return {
    ...(input.Mode !== undefined && input.Mode !== null && { Mode: input.Mode }),
    ...(input.Size !== undefined && input.Size !== null && { Size: input.Size }),
  };
};

const serializeAws_restJson1JsonOptions = (input: JsonOptions, context: __SerdeContext): any => {
  return {
    ...(input.MultiLine !== undefined && input.MultiLine !== null && { MultiLine: input.MultiLine }),
  };
};

const serializeAws_restJson1Output = (input: Output, context: __SerdeContext): any => {
  return {
    ...(input.CompressionFormat !== undefined &&
      input.CompressionFormat !== null && { CompressionFormat: input.CompressionFormat }),
    ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
    ...(input.FormatOptions !== undefined &&
      input.FormatOptions !== null && {
        FormatOptions: serializeAws_restJson1OutputFormatOptions(input.FormatOptions, context),
      }),
    ...(input.Location !== undefined &&
      input.Location !== null && { Location: serializeAws_restJson1S3Location(input.Location, context) }),
    ...(input.Overwrite !== undefined && input.Overwrite !== null && { Overwrite: input.Overwrite }),
    ...(input.PartitionColumns !== undefined &&
      input.PartitionColumns !== null && {
        PartitionColumns: serializeAws_restJson1ColumnNameList(input.PartitionColumns, context),
      }),
  };
};

const serializeAws_restJson1OutputFormatOptions = (input: OutputFormatOptions, context: __SerdeContext): any => {
  return {
    ...(input.Csv !== undefined &&
      input.Csv !== null && { Csv: serializeAws_restJson1CsvOutputOptions(input.Csv, context) }),
  };
};

const serializeAws_restJson1OutputList = (input: Output[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Output(entry, context);
    });
};

const serializeAws_restJson1ParameterMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1PathOptions = (input: PathOptions, context: __SerdeContext): any => {
  return {
    ...(input.FilesLimit !== undefined &&
      input.FilesLimit !== null && { FilesLimit: serializeAws_restJson1FilesLimit(input.FilesLimit, context) }),
    ...(input.LastModifiedDateCondition !== undefined &&
      input.LastModifiedDateCondition !== null && {
        LastModifiedDateCondition: serializeAws_restJson1FilterExpression(input.LastModifiedDateCondition, context),
      }),
    ...(input.Parameters !== undefined &&
      input.Parameters !== null && { Parameters: serializeAws_restJson1PathParametersMap(input.Parameters, context) }),
  };
};

const serializeAws_restJson1PathParametersMap = (
  input: { [key: string]: DatasetParameter },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1DatasetParameter(value, context),
    };
  }, {});
};

const serializeAws_restJson1ProfileConfiguration = (input: ProfileConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ColumnStatisticsConfigurations !== undefined &&
      input.ColumnStatisticsConfigurations !== null && {
        ColumnStatisticsConfigurations: serializeAws_restJson1ColumnStatisticsConfigurationList(
          input.ColumnStatisticsConfigurations,
          context
        ),
      }),
    ...(input.DatasetStatisticsConfiguration !== undefined &&
      input.DatasetStatisticsConfiguration !== null && {
        DatasetStatisticsConfiguration: serializeAws_restJson1StatisticsConfiguration(
          input.DatasetStatisticsConfiguration,
          context
        ),
      }),
    ...(input.ProfileColumns !== undefined &&
      input.ProfileColumns !== null && {
        ProfileColumns: serializeAws_restJson1ColumnSelectorList(input.ProfileColumns, context),
      }),
  };
};

const serializeAws_restJson1RecipeAction = (input: RecipeAction, context: __SerdeContext): any => {
  return {
    ...(input.Operation !== undefined && input.Operation !== null && { Operation: input.Operation }),
    ...(input.Parameters !== undefined &&
      input.Parameters !== null && { Parameters: serializeAws_restJson1ParameterMap(input.Parameters, context) }),
  };
};

const serializeAws_restJson1RecipeReference = (input: RecipeReference, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RecipeVersion !== undefined && input.RecipeVersion !== null && { RecipeVersion: input.RecipeVersion }),
  };
};

const serializeAws_restJson1RecipeStep = (input: RecipeStep, context: __SerdeContext): any => {
  return {
    ...(input.Action !== undefined &&
      input.Action !== null && { Action: serializeAws_restJson1RecipeAction(input.Action, context) }),
    ...(input.ConditionExpressions !== undefined &&
      input.ConditionExpressions !== null && {
        ConditionExpressions: serializeAws_restJson1ConditionExpressionList(input.ConditionExpressions, context),
      }),
  };
};

const serializeAws_restJson1RecipeStepList = (input: RecipeStep[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1RecipeStep(entry, context);
    });
};

const serializeAws_restJson1RecipeVersionList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1S3Location = (input: S3Location, context: __SerdeContext): any => {
  return {
    ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
  };
};

const serializeAws_restJson1S3TableOutputOptions = (input: S3TableOutputOptions, context: __SerdeContext): any => {
  return {
    ...(input.Location !== undefined &&
      input.Location !== null && { Location: serializeAws_restJson1S3Location(input.Location, context) }),
  };
};

const serializeAws_restJson1Sample = (input: Sample, context: __SerdeContext): any => {
  return {
    ...(input.Size !== undefined && input.Size !== null && { Size: input.Size }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1SheetIndexList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1SheetNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1StatisticList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1StatisticOverride = (input: StatisticOverride, context: __SerdeContext): any => {
  return {
    ...(input.Parameters !== undefined &&
      input.Parameters !== null && { Parameters: serializeAws_restJson1ParameterMap(input.Parameters, context) }),
    ...(input.Statistic !== undefined && input.Statistic !== null && { Statistic: input.Statistic }),
  };
};

const serializeAws_restJson1StatisticOverrideList = (input: StatisticOverride[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1StatisticOverride(entry, context);
    });
};

const serializeAws_restJson1StatisticsConfiguration = (
  input: StatisticsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.IncludedStatistics !== undefined &&
      input.IncludedStatistics !== null && {
        IncludedStatistics: serializeAws_restJson1StatisticList(input.IncludedStatistics, context),
      }),
    ...(input.Overrides !== undefined &&
      input.Overrides !== null && { Overrides: serializeAws_restJson1StatisticOverrideList(input.Overrides, context) }),
  };
};

const serializeAws_restJson1TagMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1ValuesMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1ViewFrame = (input: ViewFrame, context: __SerdeContext): any => {
  return {
    ...(input.ColumnRange !== undefined && input.ColumnRange !== null && { ColumnRange: input.ColumnRange }),
    ...(input.HiddenColumns !== undefined &&
      input.HiddenColumns !== null && {
        HiddenColumns: serializeAws_restJson1HiddenColumnList(input.HiddenColumns, context),
      }),
    ...(input.StartColumnIndex !== undefined &&
      input.StartColumnIndex !== null && { StartColumnIndex: input.StartColumnIndex }),
  };
};

const deserializeAws_restJson1ColumnNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1ColumnSelector = (output: any, context: __SerdeContext): ColumnSelector => {
  return {
    Name: __expectString(output.Name),
    Regex: __expectString(output.Regex),
  } as any;
};

const deserializeAws_restJson1ColumnSelectorList = (output: any, context: __SerdeContext): ColumnSelector[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ColumnSelector(entry, context);
    });
};

const deserializeAws_restJson1ColumnStatisticsConfiguration = (
  output: any,
  context: __SerdeContext
): ColumnStatisticsConfiguration => {
  return {
    Selectors:
      output.Selectors !== undefined && output.Selectors !== null
        ? deserializeAws_restJson1ColumnSelectorList(output.Selectors, context)
        : undefined,
    Statistics:
      output.Statistics !== undefined && output.Statistics !== null
        ? deserializeAws_restJson1StatisticsConfiguration(output.Statistics, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ColumnStatisticsConfigurationList = (
  output: any,
  context: __SerdeContext
): ColumnStatisticsConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ColumnStatisticsConfiguration(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConditionExpression(entry, context);
    });
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
    TempDirectory:
      output.TempDirectory !== undefined && output.TempDirectory !== null
        ? deserializeAws_restJson1S3Location(output.TempDirectory, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DatabaseOutput = (output: any, context: __SerdeContext): DatabaseOutput => {
  return {
    DatabaseOptions:
      output.DatabaseOptions !== undefined && output.DatabaseOptions !== null
        ? deserializeAws_restJson1DatabaseTableOutputOptions(output.DatabaseOptions, context)
        : undefined,
    DatabaseOutputMode: __expectString(output.DatabaseOutputMode),
    GlueConnectionName: __expectString(output.GlueConnectionName),
  } as any;
};

const deserializeAws_restJson1DatabaseOutputList = (output: any, context: __SerdeContext): DatabaseOutput[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DatabaseOutput(entry, context);
    });
};

const deserializeAws_restJson1DatabaseTableOutputOptions = (
  output: any,
  context: __SerdeContext
): DatabaseTableOutputOptions => {
  return {
    TableName: __expectString(output.TableName),
    TempDirectory:
      output.TempDirectory !== undefined && output.TempDirectory !== null
        ? deserializeAws_restJson1S3Location(output.TempDirectory, context)
        : undefined,
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
      output.TempDirectory !== undefined && output.TempDirectory !== null
        ? deserializeAws_restJson1S3Location(output.TempDirectory, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DataCatalogOutput = (output: any, context: __SerdeContext): DataCatalogOutput => {
  return {
    CatalogId: __expectString(output.CatalogId),
    DatabaseName: __expectString(output.DatabaseName),
    DatabaseOptions:
      output.DatabaseOptions !== undefined && output.DatabaseOptions !== null
        ? deserializeAws_restJson1DatabaseTableOutputOptions(output.DatabaseOptions, context)
        : undefined,
    Overwrite: __expectBoolean(output.Overwrite),
    S3Options:
      output.S3Options !== undefined && output.S3Options !== null
        ? deserializeAws_restJson1S3TableOutputOptions(output.S3Options, context)
        : undefined,
    TableName: __expectString(output.TableName),
  } as any;
};

const deserializeAws_restJson1DataCatalogOutputList = (output: any, context: __SerdeContext): DataCatalogOutput[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataCatalogOutput(entry, context);
    });
};

const deserializeAws_restJson1Dataset = (output: any, context: __SerdeContext): Dataset => {
  return {
    AccountId: __expectString(output.AccountId),
    CreateDate:
      output.CreateDate !== undefined && output.CreateDate !== null
        ? new Date(Math.round(output.CreateDate * 1000))
        : undefined,
    CreatedBy: __expectString(output.CreatedBy),
    Format: __expectString(output.Format),
    FormatOptions:
      output.FormatOptions !== undefined && output.FormatOptions !== null
        ? deserializeAws_restJson1FormatOptions(output.FormatOptions, context)
        : undefined,
    Input:
      output.Input !== undefined && output.Input !== null
        ? deserializeAws_restJson1Input(output.Input, context)
        : undefined,
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
        ? new Date(Math.round(output.LastModifiedDate * 1000))
        : undefined,
    Name: __expectString(output.Name),
    PathOptions:
      output.PathOptions !== undefined && output.PathOptions !== null
        ? deserializeAws_restJson1PathOptions(output.PathOptions, context)
        : undefined,
    ResourceArn: __expectString(output.ResourceArn),
    Source: __expectString(output.Source),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagMap(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DatasetList = (output: any, context: __SerdeContext): Dataset[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Dataset(entry, context);
    });
};

const deserializeAws_restJson1DatasetParameter = (output: any, context: __SerdeContext): DatasetParameter => {
  return {
    CreateColumn: __expectBoolean(output.CreateColumn),
    DatetimeOptions:
      output.DatetimeOptions !== undefined && output.DatetimeOptions !== null
        ? deserializeAws_restJson1DatetimeOptions(output.DatetimeOptions, context)
        : undefined,
    Filter:
      output.Filter !== undefined && output.Filter !== null
        ? deserializeAws_restJson1FilterExpression(output.Filter, context)
        : undefined,
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

const deserializeAws_restJson1ExcelOptions = (output: any, context: __SerdeContext): ExcelOptions => {
  return {
    HeaderRow: __expectBoolean(output.HeaderRow),
    SheetIndexes:
      output.SheetIndexes !== undefined && output.SheetIndexes !== null
        ? deserializeAws_restJson1SheetIndexList(output.SheetIndexes, context)
        : undefined,
    SheetNames:
      output.SheetNames !== undefined && output.SheetNames !== null
        ? deserializeAws_restJson1SheetNameList(output.SheetNames, context)
        : undefined,
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
    ValuesMap:
      output.ValuesMap !== undefined && output.ValuesMap !== null
        ? deserializeAws_restJson1ValuesMap(output.ValuesMap, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FormatOptions = (output: any, context: __SerdeContext): FormatOptions => {
  return {
    Csv:
      output.Csv !== undefined && output.Csv !== null
        ? deserializeAws_restJson1CsvOptions(output.Csv, context)
        : undefined,
    Excel:
      output.Excel !== undefined && output.Excel !== null
        ? deserializeAws_restJson1ExcelOptions(output.Excel, context)
        : undefined,
    Json:
      output.Json !== undefined && output.Json !== null
        ? deserializeAws_restJson1JsonOptions(output.Json, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Input = (output: any, context: __SerdeContext): Input => {
  return {
    DataCatalogInputDefinition:
      output.DataCatalogInputDefinition !== undefined && output.DataCatalogInputDefinition !== null
        ? deserializeAws_restJson1DataCatalogInputDefinition(output.DataCatalogInputDefinition, context)
        : undefined,
    DatabaseInputDefinition:
      output.DatabaseInputDefinition !== undefined && output.DatabaseInputDefinition !== null
        ? deserializeAws_restJson1DatabaseInputDefinition(output.DatabaseInputDefinition, context)
        : undefined,
    S3InputDefinition:
      output.S3InputDefinition !== undefined && output.S3InputDefinition !== null
        ? deserializeAws_restJson1S3Location(output.S3InputDefinition, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Job = (output: any, context: __SerdeContext): Job => {
  return {
    AccountId: __expectString(output.AccountId),
    CreateDate:
      output.CreateDate !== undefined && output.CreateDate !== null
        ? new Date(Math.round(output.CreateDate * 1000))
        : undefined,
    CreatedBy: __expectString(output.CreatedBy),
    DataCatalogOutputs:
      output.DataCatalogOutputs !== undefined && output.DataCatalogOutputs !== null
        ? deserializeAws_restJson1DataCatalogOutputList(output.DataCatalogOutputs, context)
        : undefined,
    DatabaseOutputs:
      output.DatabaseOutputs !== undefined && output.DatabaseOutputs !== null
        ? deserializeAws_restJson1DatabaseOutputList(output.DatabaseOutputs, context)
        : undefined,
    DatasetName: __expectString(output.DatasetName),
    EncryptionKeyArn: __expectString(output.EncryptionKeyArn),
    EncryptionMode: __expectString(output.EncryptionMode),
    JobSample:
      output.JobSample !== undefined && output.JobSample !== null
        ? deserializeAws_restJson1JobSample(output.JobSample, context)
        : undefined,
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
        ? new Date(Math.round(output.LastModifiedDate * 1000))
        : undefined,
    LogSubscription: __expectString(output.LogSubscription),
    MaxCapacity: __expectInt32(output.MaxCapacity),
    MaxRetries: __expectInt32(output.MaxRetries),
    Name: __expectString(output.Name),
    Outputs:
      output.Outputs !== undefined && output.Outputs !== null
        ? deserializeAws_restJson1OutputList(output.Outputs, context)
        : undefined,
    ProjectName: __expectString(output.ProjectName),
    RecipeReference:
      output.RecipeReference !== undefined && output.RecipeReference !== null
        ? deserializeAws_restJson1RecipeReference(output.RecipeReference, context)
        : undefined,
    ResourceArn: __expectString(output.ResourceArn),
    RoleArn: __expectString(output.RoleArn),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagMap(output.Tags, context)
        : undefined,
    Timeout: __expectInt32(output.Timeout),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1JobList = (output: any, context: __SerdeContext): Job[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Job(entry, context);
    });
};

const deserializeAws_restJson1JobNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1JobRun = (output: any, context: __SerdeContext): JobRun => {
  return {
    Attempt: __expectInt32(output.Attempt),
    CompletedOn:
      output.CompletedOn !== undefined && output.CompletedOn !== null
        ? new Date(Math.round(output.CompletedOn * 1000))
        : undefined,
    DataCatalogOutputs:
      output.DataCatalogOutputs !== undefined && output.DataCatalogOutputs !== null
        ? deserializeAws_restJson1DataCatalogOutputList(output.DataCatalogOutputs, context)
        : undefined,
    DatabaseOutputs:
      output.DatabaseOutputs !== undefined && output.DatabaseOutputs !== null
        ? deserializeAws_restJson1DatabaseOutputList(output.DatabaseOutputs, context)
        : undefined,
    DatasetName: __expectString(output.DatasetName),
    ErrorMessage: __expectString(output.ErrorMessage),
    ExecutionTime: __expectInt32(output.ExecutionTime),
    JobName: __expectString(output.JobName),
    JobSample:
      output.JobSample !== undefined && output.JobSample !== null
        ? deserializeAws_restJson1JobSample(output.JobSample, context)
        : undefined,
    LogGroupName: __expectString(output.LogGroupName),
    LogSubscription: __expectString(output.LogSubscription),
    Outputs:
      output.Outputs !== undefined && output.Outputs !== null
        ? deserializeAws_restJson1OutputList(output.Outputs, context)
        : undefined,
    RecipeReference:
      output.RecipeReference !== undefined && output.RecipeReference !== null
        ? deserializeAws_restJson1RecipeReference(output.RecipeReference, context)
        : undefined,
    RunId: __expectString(output.RunId),
    StartedBy: __expectString(output.StartedBy),
    StartedOn:
      output.StartedOn !== undefined && output.StartedOn !== null
        ? new Date(Math.round(output.StartedOn * 1000))
        : undefined,
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1JobRunList = (output: any, context: __SerdeContext): JobRun[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobRun(entry, context);
    });
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

const deserializeAws_restJson1Output = (output: any, context: __SerdeContext): Output => {
  return {
    CompressionFormat: __expectString(output.CompressionFormat),
    Format: __expectString(output.Format),
    FormatOptions:
      output.FormatOptions !== undefined && output.FormatOptions !== null
        ? deserializeAws_restJson1OutputFormatOptions(output.FormatOptions, context)
        : undefined,
    Location:
      output.Location !== undefined && output.Location !== null
        ? deserializeAws_restJson1S3Location(output.Location, context)
        : undefined,
    Overwrite: __expectBoolean(output.Overwrite),
    PartitionColumns:
      output.PartitionColumns !== undefined && output.PartitionColumns !== null
        ? deserializeAws_restJson1ColumnNameList(output.PartitionColumns, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1OutputFormatOptions = (output: any, context: __SerdeContext): OutputFormatOptions => {
  return {
    Csv:
      output.Csv !== undefined && output.Csv !== null
        ? deserializeAws_restJson1CsvOutputOptions(output.Csv, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1OutputList = (output: any, context: __SerdeContext): Output[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Output(entry, context);
    });
};

const deserializeAws_restJson1ParameterMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1PathOptions = (output: any, context: __SerdeContext): PathOptions => {
  return {
    FilesLimit:
      output.FilesLimit !== undefined && output.FilesLimit !== null
        ? deserializeAws_restJson1FilesLimit(output.FilesLimit, context)
        : undefined,
    LastModifiedDateCondition:
      output.LastModifiedDateCondition !== undefined && output.LastModifiedDateCondition !== null
        ? deserializeAws_restJson1FilterExpression(output.LastModifiedDateCondition, context)
        : undefined,
    Parameters:
      output.Parameters !== undefined && output.Parameters !== null
        ? deserializeAws_restJson1PathParametersMap(output.Parameters, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PathParametersMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: DatasetParameter } => {
  return Object.entries(output).reduce((acc: { [key: string]: DatasetParameter }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1DatasetParameter(value, context),
    };
  }, {});
};

const deserializeAws_restJson1ProfileConfiguration = (output: any, context: __SerdeContext): ProfileConfiguration => {
  return {
    ColumnStatisticsConfigurations:
      output.ColumnStatisticsConfigurations !== undefined && output.ColumnStatisticsConfigurations !== null
        ? deserializeAws_restJson1ColumnStatisticsConfigurationList(output.ColumnStatisticsConfigurations, context)
        : undefined,
    DatasetStatisticsConfiguration:
      output.DatasetStatisticsConfiguration !== undefined && output.DatasetStatisticsConfiguration !== null
        ? deserializeAws_restJson1StatisticsConfiguration(output.DatasetStatisticsConfiguration, context)
        : undefined,
    ProfileColumns:
      output.ProfileColumns !== undefined && output.ProfileColumns !== null
        ? deserializeAws_restJson1ColumnSelectorList(output.ProfileColumns, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Project = (output: any, context: __SerdeContext): Project => {
  return {
    AccountId: __expectString(output.AccountId),
    CreateDate:
      output.CreateDate !== undefined && output.CreateDate !== null
        ? new Date(Math.round(output.CreateDate * 1000))
        : undefined,
    CreatedBy: __expectString(output.CreatedBy),
    DatasetName: __expectString(output.DatasetName),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
        ? new Date(Math.round(output.LastModifiedDate * 1000))
        : undefined,
    Name: __expectString(output.Name),
    OpenDate:
      output.OpenDate !== undefined && output.OpenDate !== null
        ? new Date(Math.round(output.OpenDate * 1000))
        : undefined,
    OpenedBy: __expectString(output.OpenedBy),
    RecipeName: __expectString(output.RecipeName),
    ResourceArn: __expectString(output.ResourceArn),
    RoleArn: __expectString(output.RoleArn),
    Sample:
      output.Sample !== undefined && output.Sample !== null
        ? deserializeAws_restJson1Sample(output.Sample, context)
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagMap(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ProjectList = (output: any, context: __SerdeContext): Project[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Project(entry, context);
    });
};

const deserializeAws_restJson1Recipe = (output: any, context: __SerdeContext): Recipe => {
  return {
    CreateDate:
      output.CreateDate !== undefined && output.CreateDate !== null
        ? new Date(Math.round(output.CreateDate * 1000))
        : undefined,
    CreatedBy: __expectString(output.CreatedBy),
    Description: __expectString(output.Description),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
        ? new Date(Math.round(output.LastModifiedDate * 1000))
        : undefined,
    Name: __expectString(output.Name),
    ProjectName: __expectString(output.ProjectName),
    PublishedBy: __expectString(output.PublishedBy),
    PublishedDate:
      output.PublishedDate !== undefined && output.PublishedDate !== null
        ? new Date(Math.round(output.PublishedDate * 1000))
        : undefined,
    RecipeVersion: __expectString(output.RecipeVersion),
    ResourceArn: __expectString(output.ResourceArn),
    Steps:
      output.Steps !== undefined && output.Steps !== null
        ? deserializeAws_restJson1RecipeStepList(output.Steps, context)
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagMap(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RecipeAction = (output: any, context: __SerdeContext): RecipeAction => {
  return {
    Operation: __expectString(output.Operation),
    Parameters:
      output.Parameters !== undefined && output.Parameters !== null
        ? deserializeAws_restJson1ParameterMap(output.Parameters, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RecipeErrorList = (output: any, context: __SerdeContext): RecipeVersionErrorDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecipeVersionErrorDetail(entry, context);
    });
};

const deserializeAws_restJson1RecipeList = (output: any, context: __SerdeContext): Recipe[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Recipe(entry, context);
    });
};

const deserializeAws_restJson1RecipeReference = (output: any, context: __SerdeContext): RecipeReference => {
  return {
    Name: __expectString(output.Name),
    RecipeVersion: __expectString(output.RecipeVersion),
  } as any;
};

const deserializeAws_restJson1RecipeStep = (output: any, context: __SerdeContext): RecipeStep => {
  return {
    Action:
      output.Action !== undefined && output.Action !== null
        ? deserializeAws_restJson1RecipeAction(output.Action, context)
        : undefined,
    ConditionExpressions:
      output.ConditionExpressions !== undefined && output.ConditionExpressions !== null
        ? deserializeAws_restJson1ConditionExpressionList(output.ConditionExpressions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RecipeStepList = (output: any, context: __SerdeContext): RecipeStep[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecipeStep(entry, context);
    });
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

const deserializeAws_restJson1S3Location = (output: any, context: __SerdeContext): S3Location => {
  return {
    Bucket: __expectString(output.Bucket),
    Key: __expectString(output.Key),
  } as any;
};

const deserializeAws_restJson1S3TableOutputOptions = (output: any, context: __SerdeContext): S3TableOutputOptions => {
  return {
    Location:
      output.Location !== undefined && output.Location !== null
        ? deserializeAws_restJson1S3Location(output.Location, context)
        : undefined,
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
      output.CreateDate !== undefined && output.CreateDate !== null
        ? new Date(Math.round(output.CreateDate * 1000))
        : undefined,
    CreatedBy: __expectString(output.CreatedBy),
    CronExpression: __expectString(output.CronExpression),
    JobNames:
      output.JobNames !== undefined && output.JobNames !== null
        ? deserializeAws_restJson1JobNameList(output.JobNames, context)
        : undefined,
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
        ? new Date(Math.round(output.LastModifiedDate * 1000))
        : undefined,
    Name: __expectString(output.Name),
    ResourceArn: __expectString(output.ResourceArn),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagMap(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ScheduleList = (output: any, context: __SerdeContext): Schedule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Schedule(entry, context);
    });
};

const deserializeAws_restJson1SheetIndexList = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
};

const deserializeAws_restJson1SheetNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1StatisticList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1StatisticOverride = (output: any, context: __SerdeContext): StatisticOverride => {
  return {
    Parameters:
      output.Parameters !== undefined && output.Parameters !== null
        ? deserializeAws_restJson1ParameterMap(output.Parameters, context)
        : undefined,
    Statistic: __expectString(output.Statistic),
  } as any;
};

const deserializeAws_restJson1StatisticOverrideList = (output: any, context: __SerdeContext): StatisticOverride[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StatisticOverride(entry, context);
    });
};

const deserializeAws_restJson1StatisticsConfiguration = (
  output: any,
  context: __SerdeContext
): StatisticsConfiguration => {
  return {
    IncludedStatistics:
      output.IncludedStatistics !== undefined && output.IncludedStatistics !== null
        ? deserializeAws_restJson1StatisticList(output.IncludedStatistics, context)
        : undefined,
    Overrides:
      output.Overrides !== undefined && output.Overrides !== null
        ? deserializeAws_restJson1StatisticOverrideList(output.Overrides, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1ValuesMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
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
