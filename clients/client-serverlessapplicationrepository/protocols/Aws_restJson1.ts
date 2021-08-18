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
import {
  ListApplicationVersionsCommandInput,
  ListApplicationVersionsCommandOutput,
} from "../commands/ListApplicationVersionsCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "../commands/ListApplicationsCommand";
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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt as __expectInt,
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

export const serializeAws_restJson1CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications";
  let body: any;
  body = JSON.stringify({
    ...(input.Author !== undefined && input.Author !== null && { author: input.Author }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.HomePageUrl !== undefined && input.HomePageUrl !== null && { homePageUrl: input.HomePageUrl }),
    ...(input.Labels !== undefined &&
      input.Labels !== null && { labels: serializeAws_restJson1__listOf__string(input.Labels, context) }),
    ...(input.LicenseBody !== undefined && input.LicenseBody !== null && { licenseBody: input.LicenseBody }),
    ...(input.LicenseUrl !== undefined && input.LicenseUrl !== null && { licenseUrl: input.LicenseUrl }),
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    ...(input.ReadmeBody !== undefined && input.ReadmeBody !== null && { readmeBody: input.ReadmeBody }),
    ...(input.ReadmeUrl !== undefined && input.ReadmeUrl !== null && { readmeUrl: input.ReadmeUrl }),
    ...(input.SemanticVersion !== undefined &&
      input.SemanticVersion !== null && { semanticVersion: input.SemanticVersion }),
    ...(input.SourceCodeArchiveUrl !== undefined &&
      input.SourceCodeArchiveUrl !== null && { sourceCodeArchiveUrl: input.SourceCodeArchiveUrl }),
    ...(input.SourceCodeUrl !== undefined && input.SourceCodeUrl !== null && { sourceCodeUrl: input.SourceCodeUrl }),
    ...(input.SpdxLicenseId !== undefined && input.SpdxLicenseId !== null && { spdxLicenseId: input.SpdxLicenseId }),
    ...(input.TemplateBody !== undefined && input.TemplateBody !== null && { templateBody: input.TemplateBody }),
    ...(input.TemplateUrl !== undefined && input.TemplateUrl !== null && { templateUrl: input.TemplateUrl }),
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
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.SemanticVersion !== undefined) {
    const labelValue: string = input.SemanticVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SemanticVersion.");
    }
    resolvedPath = resolvedPath.replace("{SemanticVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SemanticVersion.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.SourceCodeArchiveUrl !== undefined &&
      input.SourceCodeArchiveUrl !== null && { sourceCodeArchiveUrl: input.SourceCodeArchiveUrl }),
    ...(input.SourceCodeUrl !== undefined && input.SourceCodeUrl !== null && { sourceCodeUrl: input.SourceCodeUrl }),
    ...(input.TemplateBody !== undefined && input.TemplateBody !== null && { templateBody: input.TemplateBody }),
    ...(input.TemplateUrl !== undefined && input.TemplateUrl !== null && { templateUrl: input.TemplateUrl }),
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
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Capabilities !== undefined &&
      input.Capabilities !== null && {
        capabilities: serializeAws_restJson1__listOf__string(input.Capabilities, context),
      }),
    ...(input.ChangeSetName !== undefined && input.ChangeSetName !== null && { changeSetName: input.ChangeSetName }),
    ...(input.ClientToken !== undefined && input.ClientToken !== null && { clientToken: input.ClientToken }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.NotificationArns !== undefined &&
      input.NotificationArns !== null && {
        notificationArns: serializeAws_restJson1__listOf__string(input.NotificationArns, context),
      }),
    ...(input.ParameterOverrides !== undefined &&
      input.ParameterOverrides !== null && {
        parameterOverrides: serializeAws_restJson1__listOfParameterValue(input.ParameterOverrides, context),
      }),
    ...(input.ResourceTypes !== undefined &&
      input.ResourceTypes !== null && {
        resourceTypes: serializeAws_restJson1__listOf__string(input.ResourceTypes, context),
      }),
    ...(input.RollbackConfiguration !== undefined &&
      input.RollbackConfiguration !== null && {
        rollbackConfiguration: serializeAws_restJson1RollbackConfiguration(input.RollbackConfiguration, context),
      }),
    ...(input.SemanticVersion !== undefined &&
      input.SemanticVersion !== null && { semanticVersion: input.SemanticVersion }),
    ...(input.StackName !== undefined && input.StackName !== null && { stackName: input.StackName }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { tags: serializeAws_restJson1__listOfTag(input.Tags, context) }),
    ...(input.TemplateId !== undefined && input.TemplateId !== null && { templateId: input.TemplateId }),
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
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.SemanticVersion !== undefined &&
      input.SemanticVersion !== null && { semanticVersion: input.SemanticVersion }),
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
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
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

export const serializeAws_restJson1GetApplicationCommand = async (
  input: GetApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{ApplicationId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  const query: any = {
    ...(input.SemanticVersion !== undefined && { semanticVersion: input.SemanticVersion }),
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

export const serializeAws_restJson1GetApplicationPolicyCommand = async (
  input: GetApplicationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{ApplicationId}/policy";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
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

export const serializeAws_restJson1GetCloudFormationTemplateCommand = async (
  input: GetCloudFormationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/templates/{TemplateId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.TemplateId !== undefined) {
    const labelValue: string = input.TemplateId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateId.");
    }
    resolvedPath = resolvedPath.replace("{TemplateId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateId.");
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

export const serializeAws_restJson1ListApplicationDependenciesCommand = async (
  input: ListApplicationDependenciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/applications/{ApplicationId}/dependencies";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  const query: any = {
    ...(input.MaxItems !== undefined && { maxItems: input.MaxItems.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.SemanticVersion !== undefined && { semanticVersion: input.SemanticVersion }),
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

export const serializeAws_restJson1ListApplicationsCommand = async (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications";
  const query: any = {
    ...(input.MaxItems !== undefined && { maxItems: input.MaxItems.toString() }),
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

export const serializeAws_restJson1ListApplicationVersionsCommand = async (
  input: ListApplicationVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{ApplicationId}/versions";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  const query: any = {
    ...(input.MaxItems !== undefined && { maxItems: input.MaxItems.toString() }),
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
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Statements !== undefined &&
      input.Statements !== null && {
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
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.OrganizationId !== undefined &&
      input.OrganizationId !== null && { organizationId: input.OrganizationId }),
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
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Author !== undefined && input.Author !== null && { author: input.Author }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.HomePageUrl !== undefined && input.HomePageUrl !== null && { homePageUrl: input.HomePageUrl }),
    ...(input.Labels !== undefined &&
      input.Labels !== null && { labels: serializeAws_restJson1__listOf__string(input.Labels, context) }),
    ...(input.ReadmeBody !== undefined && input.ReadmeBody !== null && { readmeBody: input.ReadmeBody }),
    ...(input.ReadmeUrl !== undefined && input.ReadmeUrl !== null && { readmeUrl: input.ReadmeUrl }),
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
  const contents: CreateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationId: undefined,
    Author: undefined,
    CreationTime: undefined,
    Description: undefined,
    HomePageUrl: undefined,
    IsVerifiedAuthor: undefined,
    Labels: undefined,
    LicenseUrl: undefined,
    Name: undefined,
    ReadmeUrl: undefined,
    SpdxLicenseId: undefined,
    VerifiedAuthorUrl: undefined,
    Version: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.applicationId !== undefined && data.applicationId !== null) {
    contents.ApplicationId = __expectString(data.applicationId);
  }
  if (data.author !== undefined && data.author !== null) {
    contents.Author = __expectString(data.author);
  }
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.CreationTime = __expectString(data.creationTime);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = __expectString(data.description);
  }
  if (data.homePageUrl !== undefined && data.homePageUrl !== null) {
    contents.HomePageUrl = __expectString(data.homePageUrl);
  }
  if (data.isVerifiedAuthor !== undefined && data.isVerifiedAuthor !== null) {
    contents.IsVerifiedAuthor = __expectBoolean(data.isVerifiedAuthor);
  }
  if (data.labels !== undefined && data.labels !== null) {
    contents.Labels = deserializeAws_restJson1__listOf__string(data.labels, context);
  }
  if (data.licenseUrl !== undefined && data.licenseUrl !== null) {
    contents.LicenseUrl = __expectString(data.licenseUrl);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = __expectString(data.name);
  }
  if (data.readmeUrl !== undefined && data.readmeUrl !== null) {
    contents.ReadmeUrl = __expectString(data.readmeUrl);
  }
  if (data.spdxLicenseId !== undefined && data.spdxLicenseId !== null) {
    contents.SpdxLicenseId = __expectString(data.spdxLicenseId);
  }
  if (data.verifiedAuthorUrl !== undefined && data.verifiedAuthorUrl !== null) {
    contents.VerifiedAuthorUrl = __expectString(data.verifiedAuthorUrl);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.Version = deserializeAws_restJson1Version(data.version, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.serverlessapplicationrepository#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateApplicationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateApplicationVersionCommandError(output, context);
  }
  const contents: CreateApplicationVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationId: undefined,
    CreationTime: undefined,
    ParameterDefinitions: undefined,
    RequiredCapabilities: undefined,
    ResourcesSupported: undefined,
    SemanticVersion: undefined,
    SourceCodeArchiveUrl: undefined,
    SourceCodeUrl: undefined,
    TemplateUrl: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.applicationId !== undefined && data.applicationId !== null) {
    contents.ApplicationId = __expectString(data.applicationId);
  }
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.CreationTime = __expectString(data.creationTime);
  }
  if (data.parameterDefinitions !== undefined && data.parameterDefinitions !== null) {
    contents.ParameterDefinitions = deserializeAws_restJson1__listOfParameterDefinition(
      data.parameterDefinitions,
      context
    );
  }
  if (data.requiredCapabilities !== undefined && data.requiredCapabilities !== null) {
    contents.RequiredCapabilities = deserializeAws_restJson1__listOfCapability(data.requiredCapabilities, context);
  }
  if (data.resourcesSupported !== undefined && data.resourcesSupported !== null) {
    contents.ResourcesSupported = __expectBoolean(data.resourcesSupported);
  }
  if (data.semanticVersion !== undefined && data.semanticVersion !== null) {
    contents.SemanticVersion = __expectString(data.semanticVersion);
  }
  if (data.sourceCodeArchiveUrl !== undefined && data.sourceCodeArchiveUrl !== null) {
    contents.SourceCodeArchiveUrl = __expectString(data.sourceCodeArchiveUrl);
  }
  if (data.sourceCodeUrl !== undefined && data.sourceCodeUrl !== null) {
    contents.SourceCodeUrl = __expectString(data.sourceCodeUrl);
  }
  if (data.templateUrl !== undefined && data.templateUrl !== null) {
    contents.TemplateUrl = __expectString(data.templateUrl);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateApplicationVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.serverlessapplicationrepository#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateCloudFormationChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudFormationChangeSetCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCloudFormationChangeSetCommandError(output, context);
  }
  const contents: CreateCloudFormationChangeSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationId: undefined,
    ChangeSetId: undefined,
    SemanticVersion: undefined,
    StackId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.applicationId !== undefined && data.applicationId !== null) {
    contents.ApplicationId = __expectString(data.applicationId);
  }
  if (data.changeSetId !== undefined && data.changeSetId !== null) {
    contents.ChangeSetId = __expectString(data.changeSetId);
  }
  if (data.semanticVersion !== undefined && data.semanticVersion !== null) {
    contents.SemanticVersion = __expectString(data.semanticVersion);
  }
  if (data.stackId !== undefined && data.stackId !== null) {
    contents.StackId = __expectString(data.stackId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateCloudFormationChangeSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudFormationChangeSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateCloudFormationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudFormationTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCloudFormationTemplateCommandError(output, context);
  }
  const contents: CreateCloudFormationTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationId: undefined,
    CreationTime: undefined,
    ExpirationTime: undefined,
    SemanticVersion: undefined,
    Status: undefined,
    TemplateId: undefined,
    TemplateUrl: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.applicationId !== undefined && data.applicationId !== null) {
    contents.ApplicationId = __expectString(data.applicationId);
  }
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.CreationTime = __expectString(data.creationTime);
  }
  if (data.expirationTime !== undefined && data.expirationTime !== null) {
    contents.ExpirationTime = __expectString(data.expirationTime);
  }
  if (data.semanticVersion !== undefined && data.semanticVersion !== null) {
    contents.SemanticVersion = __expectString(data.semanticVersion);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = __expectString(data.status);
  }
  if (data.templateId !== undefined && data.templateId !== null) {
    contents.TemplateId = __expectString(data.templateId);
  }
  if (data.templateUrl !== undefined && data.templateUrl !== null) {
    contents.TemplateUrl = __expectString(data.templateUrl);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateCloudFormationTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudFormationTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApplicationCommandError(output, context);
  }
  const contents: DeleteApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.serverlessapplicationrepository#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApplicationCommandError(output, context);
  }
  const contents: GetApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationId: undefined,
    Author: undefined,
    CreationTime: undefined,
    Description: undefined,
    HomePageUrl: undefined,
    IsVerifiedAuthor: undefined,
    Labels: undefined,
    LicenseUrl: undefined,
    Name: undefined,
    ReadmeUrl: undefined,
    SpdxLicenseId: undefined,
    VerifiedAuthorUrl: undefined,
    Version: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.applicationId !== undefined && data.applicationId !== null) {
    contents.ApplicationId = __expectString(data.applicationId);
  }
  if (data.author !== undefined && data.author !== null) {
    contents.Author = __expectString(data.author);
  }
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.CreationTime = __expectString(data.creationTime);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = __expectString(data.description);
  }
  if (data.homePageUrl !== undefined && data.homePageUrl !== null) {
    contents.HomePageUrl = __expectString(data.homePageUrl);
  }
  if (data.isVerifiedAuthor !== undefined && data.isVerifiedAuthor !== null) {
    contents.IsVerifiedAuthor = __expectBoolean(data.isVerifiedAuthor);
  }
  if (data.labels !== undefined && data.labels !== null) {
    contents.Labels = deserializeAws_restJson1__listOf__string(data.labels, context);
  }
  if (data.licenseUrl !== undefined && data.licenseUrl !== null) {
    contents.LicenseUrl = __expectString(data.licenseUrl);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = __expectString(data.name);
  }
  if (data.readmeUrl !== undefined && data.readmeUrl !== null) {
    contents.ReadmeUrl = __expectString(data.readmeUrl);
  }
  if (data.spdxLicenseId !== undefined && data.spdxLicenseId !== null) {
    contents.SpdxLicenseId = __expectString(data.spdxLicenseId);
  }
  if (data.verifiedAuthorUrl !== undefined && data.verifiedAuthorUrl !== null) {
    contents.VerifiedAuthorUrl = __expectString(data.verifiedAuthorUrl);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.Version = deserializeAws_restJson1Version(data.version, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetApplicationPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApplicationPolicyCommandError(output, context);
  }
  const contents: GetApplicationPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    Statements: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.statements !== undefined && data.statements !== null) {
    contents.Statements = deserializeAws_restJson1__listOfApplicationPolicyStatement(data.statements, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetApplicationPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetCloudFormationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudFormationTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCloudFormationTemplateCommandError(output, context);
  }
  const contents: GetCloudFormationTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationId: undefined,
    CreationTime: undefined,
    ExpirationTime: undefined,
    SemanticVersion: undefined,
    Status: undefined,
    TemplateId: undefined,
    TemplateUrl: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.applicationId !== undefined && data.applicationId !== null) {
    contents.ApplicationId = __expectString(data.applicationId);
  }
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.CreationTime = __expectString(data.creationTime);
  }
  if (data.expirationTime !== undefined && data.expirationTime !== null) {
    contents.ExpirationTime = __expectString(data.expirationTime);
  }
  if (data.semanticVersion !== undefined && data.semanticVersion !== null) {
    contents.SemanticVersion = __expectString(data.semanticVersion);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = __expectString(data.status);
  }
  if (data.templateId !== undefined && data.templateId !== null) {
    contents.TemplateId = __expectString(data.templateId);
  }
  if (data.templateUrl !== undefined && data.templateUrl !== null) {
    contents.TemplateUrl = __expectString(data.templateUrl);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCloudFormationTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudFormationTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListApplicationDependenciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationDependenciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListApplicationDependenciesCommandError(output, context);
  }
  const contents: ListApplicationDependenciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Dependencies: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.dependencies !== undefined && data.dependencies !== null) {
    contents.Dependencies = deserializeAws_restJson1__listOfApplicationDependencySummary(data.dependencies, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListApplicationDependenciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationDependenciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListApplicationsCommandError(output, context);
  }
  const contents: ListApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Applications: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.applications !== undefined && data.applications !== null) {
    contents.Applications = deserializeAws_restJson1__listOfApplicationSummary(data.applications, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListApplicationVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListApplicationVersionsCommandError(output, context);
  }
  const contents: ListApplicationVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Versions: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.versions !== undefined && data.versions !== null) {
    contents.Versions = deserializeAws_restJson1__listOfVersionSummary(data.versions, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListApplicationVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1PutApplicationPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutApplicationPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutApplicationPolicyCommandError(output, context);
  }
  const contents: PutApplicationPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    Statements: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.statements !== undefined && data.statements !== null) {
    contents.Statements = deserializeAws_restJson1__listOfApplicationPolicyStatement(data.statements, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutApplicationPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutApplicationPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UnshareApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnshareApplicationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UnshareApplicationCommandError(output, context);
  }
  const contents: UnshareApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UnshareApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnshareApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApplicationCommandError(output, context);
  }
  const contents: UpdateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationId: undefined,
    Author: undefined,
    CreationTime: undefined,
    Description: undefined,
    HomePageUrl: undefined,
    IsVerifiedAuthor: undefined,
    Labels: undefined,
    LicenseUrl: undefined,
    Name: undefined,
    ReadmeUrl: undefined,
    SpdxLicenseId: undefined,
    VerifiedAuthorUrl: undefined,
    Version: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.applicationId !== undefined && data.applicationId !== null) {
    contents.ApplicationId = __expectString(data.applicationId);
  }
  if (data.author !== undefined && data.author !== null) {
    contents.Author = __expectString(data.author);
  }
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.CreationTime = __expectString(data.creationTime);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = __expectString(data.description);
  }
  if (data.homePageUrl !== undefined && data.homePageUrl !== null) {
    contents.HomePageUrl = __expectString(data.homePageUrl);
  }
  if (data.isVerifiedAuthor !== undefined && data.isVerifiedAuthor !== null) {
    contents.IsVerifiedAuthor = __expectBoolean(data.isVerifiedAuthor);
  }
  if (data.labels !== undefined && data.labels !== null) {
    contents.Labels = deserializeAws_restJson1__listOf__string(data.labels, context);
  }
  if (data.licenseUrl !== undefined && data.licenseUrl !== null) {
    contents.LicenseUrl = __expectString(data.licenseUrl);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = __expectString(data.name);
  }
  if (data.readmeUrl !== undefined && data.readmeUrl !== null) {
    contents.ReadmeUrl = __expectString(data.readmeUrl);
  }
  if (data.spdxLicenseId !== undefined && data.spdxLicenseId !== null) {
    contents.SpdxLicenseId = __expectString(data.spdxLicenseId);
  }
  if (data.verifiedAuthorUrl !== undefined && data.verifiedAuthorUrl !== null) {
    contents.VerifiedAuthorUrl = __expectString(data.verifiedAuthorUrl);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.Version = deserializeAws_restJson1Version(data.version, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.serverlessapplicationrepository#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.errorCode !== undefined && data.errorCode !== null) {
    contents.ErrorCode = __expectString(data.errorCode);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
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
    ErrorCode: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.errorCode !== undefined && data.errorCode !== null) {
    contents.ErrorCode = __expectString(data.errorCode);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.errorCode !== undefined && data.errorCode !== null) {
    contents.ErrorCode = __expectString(data.errorCode);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.errorCode !== undefined && data.errorCode !== null) {
    contents.ErrorCode = __expectString(data.errorCode);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.errorCode !== undefined && data.errorCode !== null) {
    contents.ErrorCode = __expectString(data.errorCode);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.errorCode !== undefined && data.errorCode !== null) {
    contents.ErrorCode = __expectString(data.errorCode);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const serializeAws_restJson1__listOf__string = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ApplicationPolicyStatement(entry, context);
    });
};

const serializeAws_restJson1__listOfParameterValue = (input: ParameterValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ParameterValue(entry, context);
    });
};

const serializeAws_restJson1__listOfRollbackTrigger = (input: RollbackTrigger[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1RollbackTrigger(entry, context);
    });
};

const serializeAws_restJson1__listOfTag = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1ApplicationPolicyStatement = (
  input: ApplicationPolicyStatement,
  context: __SerdeContext
): any => {
  return {
    ...(input.Actions !== undefined &&
      input.Actions !== null && { actions: serializeAws_restJson1__listOf__string(input.Actions, context) }),
    ...(input.PrincipalOrgIDs !== undefined &&
      input.PrincipalOrgIDs !== null && {
        principalOrgIDs: serializeAws_restJson1__listOf__string(input.PrincipalOrgIDs, context),
      }),
    ...(input.Principals !== undefined &&
      input.Principals !== null && { principals: serializeAws_restJson1__listOf__string(input.Principals, context) }),
    ...(input.StatementId !== undefined && input.StatementId !== null && { statementId: input.StatementId }),
  };
};

const serializeAws_restJson1ParameterValue = (input: ParameterValue, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    ...(input.Value !== undefined && input.Value !== null && { value: input.Value }),
  };
};

const serializeAws_restJson1RollbackConfiguration = (input: RollbackConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.MonitoringTimeInMinutes !== undefined &&
      input.MonitoringTimeInMinutes !== null && { monitoringTimeInMinutes: input.MonitoringTimeInMinutes }),
    ...(input.RollbackTriggers !== undefined &&
      input.RollbackTriggers !== null && {
        rollbackTriggers: serializeAws_restJson1__listOfRollbackTrigger(input.RollbackTriggers, context),
      }),
  };
};

const serializeAws_restJson1RollbackTrigger = (input: RollbackTrigger, context: __SerdeContext): any => {
  return {
    ...(input.Arn !== undefined && input.Arn !== null && { arn: input.Arn }),
    ...(input.Type !== undefined && input.Type !== null && { type: input.Type }),
  };
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { value: input.Value }),
  };
};

const deserializeAws_restJson1__listOf__string = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1__listOfApplicationDependencySummary = (
  output: any,
  context: __SerdeContext
): ApplicationDependencySummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ApplicationDependencySummary(entry, context);
    });
};

const deserializeAws_restJson1__listOfApplicationPolicyStatement = (
  output: any,
  context: __SerdeContext
): ApplicationPolicyStatement[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ApplicationPolicyStatement(entry, context);
    });
};

const deserializeAws_restJson1__listOfApplicationSummary = (
  output: any,
  context: __SerdeContext
): ApplicationSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ApplicationSummary(entry, context);
    });
};

const deserializeAws_restJson1__listOfCapability = (output: any, context: __SerdeContext): (Capability | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1__listOfParameterDefinition = (
  output: any,
  context: __SerdeContext
): ParameterDefinition[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ParameterDefinition(entry, context);
    });
};

const deserializeAws_restJson1__listOfVersionSummary = (output: any, context: __SerdeContext): VersionSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VersionSummary(entry, context);
    });
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
    Actions:
      output.actions !== undefined && output.actions !== null
        ? deserializeAws_restJson1__listOf__string(output.actions, context)
        : undefined,
    PrincipalOrgIDs:
      output.principalOrgIDs !== undefined && output.principalOrgIDs !== null
        ? deserializeAws_restJson1__listOf__string(output.principalOrgIDs, context)
        : undefined,
    Principals:
      output.principals !== undefined && output.principals !== null
        ? deserializeAws_restJson1__listOf__string(output.principals, context)
        : undefined,
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
    Labels:
      output.labels !== undefined && output.labels !== null
        ? deserializeAws_restJson1__listOf__string(output.labels, context)
        : undefined,
    Name: __expectString(output.name),
    SpdxLicenseId: __expectString(output.spdxLicenseId),
  } as any;
};

const deserializeAws_restJson1ParameterDefinition = (output: any, context: __SerdeContext): ParameterDefinition => {
  return {
    AllowedPattern: __expectString(output.allowedPattern),
    AllowedValues:
      output.allowedValues !== undefined && output.allowedValues !== null
        ? deserializeAws_restJson1__listOf__string(output.allowedValues, context)
        : undefined,
    ConstraintDescription: __expectString(output.constraintDescription),
    DefaultValue: __expectString(output.defaultValue),
    Description: __expectString(output.description),
    MaxLength: __expectInt(output.maxLength),
    MaxValue: __expectInt(output.maxValue),
    MinLength: __expectInt(output.minLength),
    MinValue: __expectInt(output.minValue),
    Name: __expectString(output.name),
    NoEcho: __expectBoolean(output.noEcho),
    ReferencedByResources:
      output.referencedByResources !== undefined && output.referencedByResources !== null
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
      output.parameterDefinitions !== undefined && output.parameterDefinitions !== null
        ? deserializeAws_restJson1__listOfParameterDefinition(output.parameterDefinitions, context)
        : undefined,
    RequiredCapabilities:
      output.requiredCapabilities !== undefined && output.requiredCapabilities !== null
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
