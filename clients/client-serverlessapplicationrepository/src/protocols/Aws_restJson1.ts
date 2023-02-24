// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "../commands/CreateApplicationCommand";
import {
  CreateApplicationVersionCommandInput,
  CreateApplicationVersionCommandOutput,
} from "../commands/CreateApplicationVersionCommand";
import {
  CreateCloudFormationChangeSetCommandInput,
  CreateCloudFormationChangeSetCommandOutput,
} from "../commands/CreateCloudFormationChangeSetCommand";
import {
  CreateCloudFormationTemplateCommandInput,
  CreateCloudFormationTemplateCommandOutput,
} from "../commands/CreateCloudFormationTemplateCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "../commands/DeleteApplicationCommand";
import { GetApplicationCommandInput, GetApplicationCommandOutput } from "../commands/GetApplicationCommand";
import {
  GetApplicationPolicyCommandInput,
  GetApplicationPolicyCommandOutput,
} from "../commands/GetApplicationPolicyCommand";
import {
  GetCloudFormationTemplateCommandInput,
  GetCloudFormationTemplateCommandOutput,
} from "../commands/GetCloudFormationTemplateCommand";
import {
  ListApplicationDependenciesCommandInput,
  ListApplicationDependenciesCommandOutput,
} from "../commands/ListApplicationDependenciesCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "../commands/ListApplicationsCommand";
import {
  ListApplicationVersionsCommandInput,
  ListApplicationVersionsCommandOutput,
} from "../commands/ListApplicationVersionsCommand";
import {
  PutApplicationPolicyCommandInput,
  PutApplicationPolicyCommandOutput,
} from "../commands/PutApplicationPolicyCommand";
import { UnshareApplicationCommandInput, UnshareApplicationCommandOutput } from "../commands/UnshareApplicationCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "../commands/UpdateApplicationCommand";
import {
  ApplicationDependencySummary,
  ApplicationPolicyStatement,
  ApplicationSummary,
  BadRequestException,
  Capability,
  ConflictException,
  ForbiddenException,
  InternalServerErrorException,
  NotFoundException,
  ParameterDefinition,
  ParameterValue,
  RollbackConfiguration,
  RollbackTrigger,
  Tag,
  TooManyRequestsException,
  Version,
  VersionSummary,
} from "../models/models_0";
import { ServerlessApplicationRepositoryServiceException as __BaseException } from "../models/ServerlessApplicationRepositoryServiceException";

export const serializeAws_restJson1CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications";
  let body: any;
  body = JSON.stringify({
    ...(input.Author != null && { author: input.Author }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.HomePageUrl != null && { homePageUrl: input.HomePageUrl }),
    ...(input.Labels != null && { labels: serializeAws_restJson1__listOf__string(input.Labels, context) }),
    ...(input.LicenseBody != null && { licenseBody: input.LicenseBody }),
    ...(input.LicenseUrl != null && { licenseUrl: input.LicenseUrl }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.ReadmeBody != null && { readmeBody: input.ReadmeBody }),
    ...(input.ReadmeUrl != null && { readmeUrl: input.ReadmeUrl }),
    ...(input.SemanticVersion != null && { semanticVersion: input.SemanticVersion }),
    ...(input.SourceCodeArchiveUrl != null && { sourceCodeArchiveUrl: input.SourceCodeArchiveUrl }),
    ...(input.SourceCodeUrl != null && { sourceCodeUrl: input.SourceCodeUrl }),
    ...(input.SpdxLicenseId != null && { spdxLicenseId: input.SpdxLicenseId }),
    ...(input.TemplateBody != null && { templateBody: input.TemplateBody }),
    ...(input.TemplateUrl != null && { templateUrl: input.TemplateUrl }),
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

export const serializeAws_restJson1CreateApplicationVersionCommand = async (
  input: CreateApplicationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/versions/{SemanticVersion}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SemanticVersion",
    () => input.SemanticVersion!,
    "{SemanticVersion}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.SourceCodeArchiveUrl != null && { sourceCodeArchiveUrl: input.SourceCodeArchiveUrl }),
    ...(input.SourceCodeUrl != null && { sourceCodeUrl: input.SourceCodeUrl }),
    ...(input.TemplateBody != null && { templateBody: input.TemplateBody }),
    ...(input.TemplateUrl != null && { templateUrl: input.TemplateUrl }),
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

export const serializeAws_restJson1CreateCloudFormationChangeSetCommand = async (
  input: CreateCloudFormationChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{ApplicationId}/changesets";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Capabilities != null && {
      capabilities: serializeAws_restJson1__listOf__string(input.Capabilities, context),
    }),
    ...(input.ChangeSetName != null && { changeSetName: input.ChangeSetName }),
    ...(input.ClientToken != null && { clientToken: input.ClientToken }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.NotificationArns != null && {
      notificationArns: serializeAws_restJson1__listOf__string(input.NotificationArns, context),
    }),
    ...(input.ParameterOverrides != null && {
      parameterOverrides: serializeAws_restJson1__listOfParameterValue(input.ParameterOverrides, context),
    }),
    ...(input.ResourceTypes != null && {
      resourceTypes: serializeAws_restJson1__listOf__string(input.ResourceTypes, context),
    }),
    ...(input.RollbackConfiguration != null && {
      rollbackConfiguration: serializeAws_restJson1RollbackConfiguration(input.RollbackConfiguration, context),
    }),
    ...(input.SemanticVersion != null && { semanticVersion: input.SemanticVersion }),
    ...(input.StackName != null && { stackName: input.StackName }),
    ...(input.Tags != null && { tags: serializeAws_restJson1__listOfTag(input.Tags, context) }),
    ...(input.TemplateId != null && { templateId: input.TemplateId }),
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

export const serializeAws_restJson1CreateCloudFormationTemplateCommand = async (
  input: CreateCloudFormationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{ApplicationId}/templates";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.SemanticVersion != null && { semanticVersion: input.SemanticVersion }),
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

export const serializeAws_restJson1DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{ApplicationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
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

export const serializeAws_restJson1GetApplicationCommand = async (
  input: GetApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{ApplicationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  const query: any = map({
    semanticVersion: [, input.SemanticVersion!],
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

export const serializeAws_restJson1GetApplicationPolicyCommand = async (
  input: GetApplicationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{ApplicationId}/policy";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
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

export const serializeAws_restJson1GetCloudFormationTemplateCommand = async (
  input: GetCloudFormationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/templates/{TemplateId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "TemplateId", () => input.TemplateId!, "{TemplateId}", false);
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

export const serializeAws_restJson1ListApplicationDependenciesCommand = async (
  input: ListApplicationDependenciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/dependencies";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  const query: any = map({
    maxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
    nextToken: [, input.NextToken!],
    semanticVersion: [, input.SemanticVersion!],
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

export const serializeAws_restJson1ListApplicationsCommand = async (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications";
  const query: any = map({
    maxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
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

export const serializeAws_restJson1ListApplicationVersionsCommand = async (
  input: ListApplicationVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{ApplicationId}/versions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  const query: any = map({
    maxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
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

export const serializeAws_restJson1PutApplicationPolicyCommand = async (
  input: PutApplicationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{ApplicationId}/policy";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Statements != null && {
      statements: serializeAws_restJson1__listOfApplicationPolicyStatement(input.Statements, context),
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

export const serializeAws_restJson1UnshareApplicationCommand = async (
  input: UnshareApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{ApplicationId}/unshare";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.OrganizationId != null && { organizationId: input.OrganizationId }),
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

export const serializeAws_restJson1UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{ApplicationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Author != null && { author: input.Author }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.HomePageUrl != null && { homePageUrl: input.HomePageUrl }),
    ...(input.Labels != null && { labels: serializeAws_restJson1__listOf__string(input.Labels, context) }),
    ...(input.ReadmeBody != null && { readmeBody: input.ReadmeBody }),
    ...(input.ReadmeUrl != null && { readmeUrl: input.ReadmeUrl }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationId != null) {
    contents.ApplicationId = __expectString(data.applicationId);
  }
  if (data.author != null) {
    contents.Author = __expectString(data.author);
  }
  if (data.creationTime != null) {
    contents.CreationTime = __expectString(data.creationTime);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.homePageUrl != null) {
    contents.HomePageUrl = __expectString(data.homePageUrl);
  }
  if (data.isVerifiedAuthor != null) {
    contents.IsVerifiedAuthor = __expectBoolean(data.isVerifiedAuthor);
  }
  if (data.labels != null) {
    contents.Labels = deserializeAws_restJson1__listOf__string(data.labels, context);
  }
  if (data.licenseUrl != null) {
    contents.LicenseUrl = __expectString(data.licenseUrl);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.readmeUrl != null) {
    contents.ReadmeUrl = __expectString(data.readmeUrl);
  }
  if (data.spdxLicenseId != null) {
    contents.SpdxLicenseId = __expectString(data.spdxLicenseId);
  }
  if (data.verifiedAuthorUrl != null) {
    contents.VerifiedAuthorUrl = __expectString(data.verifiedAuthorUrl);
  }
  if (data.version != null) {
    contents.Version = deserializeAws_restJson1Version(data.version, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.serverlessapplicationrepository#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateApplicationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateApplicationVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationId != null) {
    contents.ApplicationId = __expectString(data.applicationId);
  }
  if (data.creationTime != null) {
    contents.CreationTime = __expectString(data.creationTime);
  }
  if (data.parameterDefinitions != null) {
    contents.ParameterDefinitions = deserializeAws_restJson1__listOfParameterDefinition(
      data.parameterDefinitions,
      context
    );
  }
  if (data.requiredCapabilities != null) {
    contents.RequiredCapabilities = deserializeAws_restJson1__listOfCapability(data.requiredCapabilities, context);
  }
  if (data.resourcesSupported != null) {
    contents.ResourcesSupported = __expectBoolean(data.resourcesSupported);
  }
  if (data.semanticVersion != null) {
    contents.SemanticVersion = __expectString(data.semanticVersion);
  }
  if (data.sourceCodeArchiveUrl != null) {
    contents.SourceCodeArchiveUrl = __expectString(data.sourceCodeArchiveUrl);
  }
  if (data.sourceCodeUrl != null) {
    contents.SourceCodeUrl = __expectString(data.sourceCodeUrl);
  }
  if (data.templateUrl != null) {
    contents.TemplateUrl = __expectString(data.templateUrl);
  }
  return contents;
};

const deserializeAws_restJson1CreateApplicationVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.serverlessapplicationrepository#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateCloudFormationChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudFormationChangeSetCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCloudFormationChangeSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationId != null) {
    contents.ApplicationId = __expectString(data.applicationId);
  }
  if (data.changeSetId != null) {
    contents.ChangeSetId = __expectString(data.changeSetId);
  }
  if (data.semanticVersion != null) {
    contents.SemanticVersion = __expectString(data.semanticVersion);
  }
  if (data.stackId != null) {
    contents.StackId = __expectString(data.stackId);
  }
  return contents;
};

const deserializeAws_restJson1CreateCloudFormationChangeSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudFormationChangeSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateCloudFormationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudFormationTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCloudFormationTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationId != null) {
    contents.ApplicationId = __expectString(data.applicationId);
  }
  if (data.creationTime != null) {
    contents.CreationTime = __expectString(data.creationTime);
  }
  if (data.expirationTime != null) {
    contents.ExpirationTime = __expectString(data.expirationTime);
  }
  if (data.semanticVersion != null) {
    contents.SemanticVersion = __expectString(data.semanticVersion);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  if (data.templateId != null) {
    contents.TemplateId = __expectString(data.templateId);
  }
  if (data.templateUrl != null) {
    contents.TemplateUrl = __expectString(data.templateUrl);
  }
  return contents;
};

const deserializeAws_restJson1CreateCloudFormationTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudFormationTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.serverlessapplicationrepository#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationId != null) {
    contents.ApplicationId = __expectString(data.applicationId);
  }
  if (data.author != null) {
    contents.Author = __expectString(data.author);
  }
  if (data.creationTime != null) {
    contents.CreationTime = __expectString(data.creationTime);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.homePageUrl != null) {
    contents.HomePageUrl = __expectString(data.homePageUrl);
  }
  if (data.isVerifiedAuthor != null) {
    contents.IsVerifiedAuthor = __expectBoolean(data.isVerifiedAuthor);
  }
  if (data.labels != null) {
    contents.Labels = deserializeAws_restJson1__listOf__string(data.labels, context);
  }
  if (data.licenseUrl != null) {
    contents.LicenseUrl = __expectString(data.licenseUrl);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.readmeUrl != null) {
    contents.ReadmeUrl = __expectString(data.readmeUrl);
  }
  if (data.spdxLicenseId != null) {
    contents.SpdxLicenseId = __expectString(data.spdxLicenseId);
  }
  if (data.verifiedAuthorUrl != null) {
    contents.VerifiedAuthorUrl = __expectString(data.verifiedAuthorUrl);
  }
  if (data.version != null) {
    contents.Version = deserializeAws_restJson1Version(data.version, context);
  }
  return contents;
};

const deserializeAws_restJson1GetApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetApplicationPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApplicationPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.statements != null) {
    contents.Statements = deserializeAws_restJson1__listOfApplicationPolicyStatement(data.statements, context);
  }
  return contents;
};

const deserializeAws_restJson1GetApplicationPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetCloudFormationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudFormationTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCloudFormationTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationId != null) {
    contents.ApplicationId = __expectString(data.applicationId);
  }
  if (data.creationTime != null) {
    contents.CreationTime = __expectString(data.creationTime);
  }
  if (data.expirationTime != null) {
    contents.ExpirationTime = __expectString(data.expirationTime);
  }
  if (data.semanticVersion != null) {
    contents.SemanticVersion = __expectString(data.semanticVersion);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  if (data.templateId != null) {
    contents.TemplateId = __expectString(data.templateId);
  }
  if (data.templateUrl != null) {
    contents.TemplateUrl = __expectString(data.templateUrl);
  }
  return contents;
};

const deserializeAws_restJson1GetCloudFormationTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudFormationTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListApplicationDependenciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationDependenciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListApplicationDependenciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.dependencies != null) {
    contents.Dependencies = deserializeAws_restJson1__listOfApplicationDependencySummary(data.dependencies, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListApplicationDependenciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationDependenciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListApplicationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applications != null) {
    contents.Applications = deserializeAws_restJson1__listOfApplicationSummary(data.applications, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListApplicationVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListApplicationVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.versions != null) {
    contents.Versions = deserializeAws_restJson1__listOfVersionSummary(data.versions, context);
  }
  return contents;
};

const deserializeAws_restJson1ListApplicationVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutApplicationPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutApplicationPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutApplicationPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.statements != null) {
    contents.Statements = deserializeAws_restJson1__listOfApplicationPolicyStatement(data.statements, context);
  }
  return contents;
};

const deserializeAws_restJson1PutApplicationPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutApplicationPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UnshareApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnshareApplicationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UnshareApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UnshareApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnshareApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationId != null) {
    contents.ApplicationId = __expectString(data.applicationId);
  }
  if (data.author != null) {
    contents.Author = __expectString(data.author);
  }
  if (data.creationTime != null) {
    contents.CreationTime = __expectString(data.creationTime);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.homePageUrl != null) {
    contents.HomePageUrl = __expectString(data.homePageUrl);
  }
  if (data.isVerifiedAuthor != null) {
    contents.IsVerifiedAuthor = __expectBoolean(data.isVerifiedAuthor);
  }
  if (data.labels != null) {
    contents.Labels = deserializeAws_restJson1__listOf__string(data.labels, context);
  }
  if (data.licenseUrl != null) {
    contents.LicenseUrl = __expectString(data.licenseUrl);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.readmeUrl != null) {
    contents.ReadmeUrl = __expectString(data.readmeUrl);
  }
  if (data.spdxLicenseId != null) {
    contents.SpdxLicenseId = __expectString(data.spdxLicenseId);
  }
  if (data.verifiedAuthorUrl != null) {
    contents.VerifiedAuthorUrl = __expectString(data.verifiedAuthorUrl);
  }
  if (data.version != null) {
    contents.Version = deserializeAws_restJson1Version(data.version, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.serverlessapplicationrepository#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.errorCode != null) {
    contents.ErrorCode = __expectString(data.errorCode);
  }
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new BadRequestException({
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
  if (data.errorCode != null) {
    contents.ErrorCode = __expectString(data.errorCode);
  }
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.errorCode != null) {
    contents.ErrorCode = __expectString(data.errorCode);
  }
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.errorCode != null) {
    contents.ErrorCode = __expectString(data.errorCode);
  }
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new InternalServerErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.errorCode != null) {
    contents.ErrorCode = __expectString(data.errorCode);
  }
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.errorCode != null) {
    contents.ErrorCode = __expectString(data.errorCode);
  }
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1__listOf__string = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1__listOfApplicationPolicyStatement = (
  input: ApplicationPolicyStatement[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ApplicationPolicyStatement(entry, context);
    });
};

const serializeAws_restJson1__listOfParameterValue = (input: ParameterValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ParameterValue(entry, context);
    });
};

const serializeAws_restJson1__listOfRollbackTrigger = (input: RollbackTrigger[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RollbackTrigger(entry, context);
    });
};

const serializeAws_restJson1__listOfTag = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1ApplicationPolicyStatement = (
  input: ApplicationPolicyStatement,
  context: __SerdeContext
): any => {
  return {
    ...(input.Actions != null && { actions: serializeAws_restJson1__listOf__string(input.Actions, context) }),
    ...(input.PrincipalOrgIDs != null && {
      principalOrgIDs: serializeAws_restJson1__listOf__string(input.PrincipalOrgIDs, context),
    }),
    ...(input.Principals != null && { principals: serializeAws_restJson1__listOf__string(input.Principals, context) }),
    ...(input.StatementId != null && { statementId: input.StatementId }),
  };
};

const serializeAws_restJson1ParameterValue = (input: ParameterValue, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { name: input.Name }),
    ...(input.Value != null && { value: input.Value }),
  };
};

const serializeAws_restJson1RollbackConfiguration = (input: RollbackConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.MonitoringTimeInMinutes != null && { monitoringTimeInMinutes: input.MonitoringTimeInMinutes }),
    ...(input.RollbackTriggers != null && {
      rollbackTriggers: serializeAws_restJson1__listOfRollbackTrigger(input.RollbackTriggers, context),
    }),
  };
};

const serializeAws_restJson1RollbackTrigger = (input: RollbackTrigger, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { arn: input.Arn }),
    ...(input.Type != null && { type: input.Type }),
  };
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { key: input.Key }),
    ...(input.Value != null && { value: input.Value }),
  };
};

const deserializeAws_restJson1__listOf__string = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1__listOfApplicationDependencySummary = (
  output: any,
  context: __SerdeContext
): ApplicationDependencySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ApplicationDependencySummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfApplicationPolicyStatement = (
  output: any,
  context: __SerdeContext
): ApplicationPolicyStatement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ApplicationPolicyStatement(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfApplicationSummary = (
  output: any,
  context: __SerdeContext
): ApplicationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ApplicationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfCapability = (output: any, context: __SerdeContext): (Capability | string)[] => {
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

const deserializeAws_restJson1__listOfParameterDefinition = (
  output: any,
  context: __SerdeContext
): ParameterDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ParameterDefinition(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfVersionSummary = (output: any, context: __SerdeContext): VersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VersionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ApplicationDependencySummary = (
  output: any,
  context: __SerdeContext
): ApplicationDependencySummary => {
  return {
    ApplicationId: __expectString(output.applicationId),
    SemanticVersion: __expectString(output.semanticVersion),
  } as any;
};

const deserializeAws_restJson1ApplicationPolicyStatement = (
  output: any,
  context: __SerdeContext
): ApplicationPolicyStatement => {
  return {
    Actions: output.actions != null ? deserializeAws_restJson1__listOf__string(output.actions, context) : undefined,
    PrincipalOrgIDs:
      output.principalOrgIDs != null
        ? deserializeAws_restJson1__listOf__string(output.principalOrgIDs, context)
        : undefined,
    Principals:
      output.principals != null ? deserializeAws_restJson1__listOf__string(output.principals, context) : undefined,
    StatementId: __expectString(output.statementId),
  } as any;
};

const deserializeAws_restJson1ApplicationSummary = (output: any, context: __SerdeContext): ApplicationSummary => {
  return {
    ApplicationId: __expectString(output.applicationId),
    Author: __expectString(output.author),
    CreationTime: __expectString(output.creationTime),
    Description: __expectString(output.description),
    HomePageUrl: __expectString(output.homePageUrl),
    Labels: output.labels != null ? deserializeAws_restJson1__listOf__string(output.labels, context) : undefined,
    Name: __expectString(output.name),
    SpdxLicenseId: __expectString(output.spdxLicenseId),
  } as any;
};

const deserializeAws_restJson1ParameterDefinition = (output: any, context: __SerdeContext): ParameterDefinition => {
  return {
    AllowedPattern: __expectString(output.allowedPattern),
    AllowedValues:
      output.allowedValues != null
        ? deserializeAws_restJson1__listOf__string(output.allowedValues, context)
        : undefined,
    ConstraintDescription: __expectString(output.constraintDescription),
    DefaultValue: __expectString(output.defaultValue),
    Description: __expectString(output.description),
    MaxLength: __expectInt32(output.maxLength),
    MaxValue: __expectInt32(output.maxValue),
    MinLength: __expectInt32(output.minLength),
    MinValue: __expectInt32(output.minValue),
    Name: __expectString(output.name),
    NoEcho: __expectBoolean(output.noEcho),
    ReferencedByResources:
      output.referencedByResources != null
        ? deserializeAws_restJson1__listOf__string(output.referencedByResources, context)
        : undefined,
    Type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1Version = (output: any, context: __SerdeContext): Version => {
  return {
    ApplicationId: __expectString(output.applicationId),
    CreationTime: __expectString(output.creationTime),
    ParameterDefinitions:
      output.parameterDefinitions != null
        ? deserializeAws_restJson1__listOfParameterDefinition(output.parameterDefinitions, context)
        : undefined,
    RequiredCapabilities:
      output.requiredCapabilities != null
        ? deserializeAws_restJson1__listOfCapability(output.requiredCapabilities, context)
        : undefined,
    ResourcesSupported: __expectBoolean(output.resourcesSupported),
    SemanticVersion: __expectString(output.semanticVersion),
    SourceCodeArchiveUrl: __expectString(output.sourceCodeArchiveUrl),
    SourceCodeUrl: __expectString(output.sourceCodeUrl),
    TemplateUrl: __expectString(output.templateUrl),
  } as any;
};

const deserializeAws_restJson1VersionSummary = (output: any, context: __SerdeContext): VersionSummary => {
  return {
    ApplicationId: __expectString(output.applicationId),
    CreationTime: __expectString(output.creationTime),
    SemanticVersion: __expectString(output.semanticVersion),
    SourceCodeUrl: __expectString(output.sourceCodeUrl),
  } as any;
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
