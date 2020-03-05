import {
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput
} from "../commands/CreateApplicationCommand";
import {
  CreateApplicationVersionCommandInput,
  CreateApplicationVersionCommandOutput
} from "../commands/CreateApplicationVersionCommand";
import {
  CreateCloudFormationChangeSetCommandInput,
  CreateCloudFormationChangeSetCommandOutput
} from "../commands/CreateCloudFormationChangeSetCommand";
import {
  CreateCloudFormationTemplateCommandInput,
  CreateCloudFormationTemplateCommandOutput
} from "../commands/CreateCloudFormationTemplateCommand";
import {
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput
} from "../commands/DeleteApplicationCommand";
import {
  GetApplicationCommandInput,
  GetApplicationCommandOutput
} from "../commands/GetApplicationCommand";
import {
  GetApplicationPolicyCommandInput,
  GetApplicationPolicyCommandOutput
} from "../commands/GetApplicationPolicyCommand";
import {
  GetCloudFormationTemplateCommandInput,
  GetCloudFormationTemplateCommandOutput
} from "../commands/GetCloudFormationTemplateCommand";
import {
  ListApplicationDependenciesCommandInput,
  ListApplicationDependenciesCommandOutput
} from "../commands/ListApplicationDependenciesCommand";
import {
  ListApplicationVersionsCommandInput,
  ListApplicationVersionsCommandOutput
} from "../commands/ListApplicationVersionsCommand";
import {
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput
} from "../commands/ListApplicationsCommand";
import {
  PutApplicationPolicyCommandInput,
  PutApplicationPolicyCommandOutput
} from "../commands/PutApplicationPolicyCommand";
import {
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput
} from "../commands/UpdateApplicationCommand";
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
  VersionSummary
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1CreateApplicationCommand(
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/applications";
  let body: any;
  const bodyParams: any = {};
  if (input.Author !== undefined) {
    bodyParams["author"] = input.Author;
  }
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.HomePageUrl !== undefined) {
    bodyParams["homePageUrl"] = input.HomePageUrl;
  }
  if (input.Labels !== undefined) {
    bodyParams["labels"] = serializeAws_restJson1_1__listOf__string(
      input.Labels,
      context
    );
  }
  if (input.LicenseBody !== undefined) {
    bodyParams["licenseBody"] = input.LicenseBody;
  }
  if (input.LicenseUrl !== undefined) {
    bodyParams["licenseUrl"] = input.LicenseUrl;
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  if (input.ReadmeBody !== undefined) {
    bodyParams["readmeBody"] = input.ReadmeBody;
  }
  if (input.ReadmeUrl !== undefined) {
    bodyParams["readmeUrl"] = input.ReadmeUrl;
  }
  if (input.SemanticVersion !== undefined) {
    bodyParams["semanticVersion"] = input.SemanticVersion;
  }
  if (input.SourceCodeArchiveUrl !== undefined) {
    bodyParams["sourceCodeArchiveUrl"] = input.SourceCodeArchiveUrl;
  }
  if (input.SourceCodeUrl !== undefined) {
    bodyParams["sourceCodeUrl"] = input.SourceCodeUrl;
  }
  if (input.SpdxLicenseId !== undefined) {
    bodyParams["spdxLicenseId"] = input.SpdxLicenseId;
  }
  if (input.TemplateBody !== undefined) {
    bodyParams["templateBody"] = input.TemplateBody;
  }
  if (input.TemplateUrl !== undefined) {
    bodyParams["templateUrl"] = input.TemplateUrl;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateApplicationVersionCommand(
  input: CreateApplicationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/applications/{ApplicationId}/versions/{SemanticVersion}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.SemanticVersion !== undefined) {
    const labelValue: string = input.SemanticVersion;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: SemanticVersion."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{SemanticVersion}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: SemanticVersion.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.SourceCodeArchiveUrl !== undefined) {
    bodyParams["sourceCodeArchiveUrl"] = input.SourceCodeArchiveUrl;
  }
  if (input.SourceCodeUrl !== undefined) {
    bodyParams["sourceCodeUrl"] = input.SourceCodeUrl;
  }
  if (input.TemplateBody !== undefined) {
    bodyParams["templateBody"] = input.TemplateBody;
  }
  if (input.TemplateUrl !== undefined) {
    bodyParams["templateUrl"] = input.TemplateUrl;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateCloudFormationChangeSetCommand(
  input: CreateCloudFormationChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/applications/{ApplicationId}/changesets";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Capabilities !== undefined) {
    bodyParams["capabilities"] = serializeAws_restJson1_1__listOf__string(
      input.Capabilities,
      context
    );
  }
  if (input.ChangeSetName !== undefined) {
    bodyParams["changeSetName"] = input.ChangeSetName;
  }
  if (input.ClientToken !== undefined) {
    bodyParams["clientToken"] = input.ClientToken;
  }
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.NotificationArns !== undefined) {
    bodyParams["notificationArns"] = serializeAws_restJson1_1__listOf__string(
      input.NotificationArns,
      context
    );
  }
  if (input.ParameterOverrides !== undefined) {
    bodyParams[
      "parameterOverrides"
    ] = serializeAws_restJson1_1__listOfParameterValue(
      input.ParameterOverrides,
      context
    );
  }
  if (input.ResourceTypes !== undefined) {
    bodyParams["resourceTypes"] = serializeAws_restJson1_1__listOf__string(
      input.ResourceTypes,
      context
    );
  }
  if (input.RollbackConfiguration !== undefined) {
    bodyParams[
      "rollbackConfiguration"
    ] = serializeAws_restJson1_1RollbackConfiguration(
      input.RollbackConfiguration,
      context
    );
  }
  if (input.SemanticVersion !== undefined) {
    bodyParams["semanticVersion"] = input.SemanticVersion;
  }
  if (input.StackName !== undefined) {
    bodyParams["stackName"] = input.StackName;
  }
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1__listOfTag(
      input.Tags,
      context
    );
  }
  if (input.TemplateId !== undefined) {
    bodyParams["templateId"] = input.TemplateId;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateCloudFormationTemplateCommand(
  input: CreateCloudFormationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/applications/{ApplicationId}/templates";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.SemanticVersion !== undefined) {
    bodyParams["semanticVersion"] = input.SemanticVersion;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteApplicationCommand(
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/applications/{ApplicationId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetApplicationCommand(
  input: GetApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/applications/{ApplicationId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  const query: any = {};
  if (input.SemanticVersion !== undefined) {
    query["semanticVersion"] = input.SemanticVersion;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetApplicationPolicyCommand(
  input: GetApplicationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/applications/{ApplicationId}/policy";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetCloudFormationTemplateCommand(
  input: GetCloudFormationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/applications/{ApplicationId}/templates/{TemplateId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.TemplateId !== undefined) {
    const labelValue: string = input.TemplateId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateId.");
    }
    resolvedPath = resolvedPath.replace(
      "{TemplateId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: TemplateId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListApplicationDependenciesCommand(
  input: ListApplicationDependenciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/applications/{ApplicationId}/dependencies";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  const query: any = {};
  if (input.MaxItems !== undefined) {
    query["maxItems"] = input.MaxItems.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  if (input.SemanticVersion !== undefined) {
    query["semanticVersion"] = input.SemanticVersion;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListApplicationVersionsCommand(
  input: ListApplicationVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/applications/{ApplicationId}/versions";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  const query: any = {};
  if (input.MaxItems !== undefined) {
    query["maxItems"] = input.MaxItems.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListApplicationsCommand(
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/applications";
  const query: any = {};
  if (input.MaxItems !== undefined) {
    query["maxItems"] = input.MaxItems.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1PutApplicationPolicyCommand(
  input: PutApplicationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/applications/{ApplicationId}/policy";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Statements !== undefined) {
    bodyParams[
      "statements"
    ] = serializeAws_restJson1_1__listOfApplicationPolicyStatement(
      input.Statements,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateApplicationCommand(
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/applications/{ApplicationId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Author !== undefined) {
    bodyParams["author"] = input.Author;
  }
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.HomePageUrl !== undefined) {
    bodyParams["homePageUrl"] = input.HomePageUrl;
  }
  if (input.Labels !== undefined) {
    bodyParams["labels"] = serializeAws_restJson1_1__listOf__string(
      input.Labels,
      context
    );
  }
  if (input.ReadmeBody !== undefined) {
    bodyParams["readmeBody"] = input.ReadmeBody;
  }
  if (input.ReadmeUrl !== undefined) {
    bodyParams["readmeUrl"] = input.ReadmeUrl;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1CreateApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateApplicationCommandError(
      output,
      context
    );
  }
  const contents: CreateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateApplicationResponse",
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
    Version: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.applicationId !== undefined && data.applicationId !== null) {
    contents.ApplicationId = data.applicationId;
  }
  if (data.author !== undefined && data.author !== null) {
    contents.Author = data.author;
  }
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.CreationTime = data.creationTime;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.homePageUrl !== undefined && data.homePageUrl !== null) {
    contents.HomePageUrl = data.homePageUrl;
  }
  if (data.isVerifiedAuthor !== undefined && data.isVerifiedAuthor !== null) {
    contents.IsVerifiedAuthor = data.isVerifiedAuthor;
  }
  if (data.labels !== undefined && data.labels !== null) {
    contents.Labels = deserializeAws_restJson1_1__listOf__string(
      data.labels,
      context
    );
  }
  if (data.licenseUrl !== undefined && data.licenseUrl !== null) {
    contents.LicenseUrl = data.licenseUrl;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.readmeUrl !== undefined && data.readmeUrl !== null) {
    contents.ReadmeUrl = data.readmeUrl;
  }
  if (data.spdxLicenseId !== undefined && data.spdxLicenseId !== null) {
    contents.SpdxLicenseId = data.spdxLicenseId;
  }
  if (data.verifiedAuthorUrl !== undefined && data.verifiedAuthorUrl !== null) {
    contents.VerifiedAuthorUrl = data.verifiedAuthorUrl;
  }
  if (data.version !== undefined && data.version !== null) {
    contents.Version = deserializeAws_restJson1_1Version(data.version, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.serverlessapplicationrepository#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1CreateApplicationVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationVersionCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateApplicationVersionCommandError(
      output,
      context
    );
  }
  const contents: CreateApplicationVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateApplicationVersionResponse",
    ApplicationId: undefined,
    CreationTime: undefined,
    ParameterDefinitions: undefined,
    RequiredCapabilities: undefined,
    ResourcesSupported: undefined,
    SemanticVersion: undefined,
    SourceCodeArchiveUrl: undefined,
    SourceCodeUrl: undefined,
    TemplateUrl: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.applicationId !== undefined && data.applicationId !== null) {
    contents.ApplicationId = data.applicationId;
  }
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.CreationTime = data.creationTime;
  }
  if (
    data.parameterDefinitions !== undefined &&
    data.parameterDefinitions !== null
  ) {
    contents.ParameterDefinitions = deserializeAws_restJson1_1__listOfParameterDefinition(
      data.parameterDefinitions,
      context
    );
  }
  if (
    data.requiredCapabilities !== undefined &&
    data.requiredCapabilities !== null
  ) {
    contents.RequiredCapabilities = deserializeAws_restJson1_1__listOfCapability(
      data.requiredCapabilities,
      context
    );
  }
  if (
    data.resourcesSupported !== undefined &&
    data.resourcesSupported !== null
  ) {
    contents.ResourcesSupported = data.resourcesSupported;
  }
  if (data.semanticVersion !== undefined && data.semanticVersion !== null) {
    contents.SemanticVersion = data.semanticVersion;
  }
  if (
    data.sourceCodeArchiveUrl !== undefined &&
    data.sourceCodeArchiveUrl !== null
  ) {
    contents.SourceCodeArchiveUrl = data.sourceCodeArchiveUrl;
  }
  if (data.sourceCodeUrl !== undefined && data.sourceCodeUrl !== null) {
    contents.SourceCodeUrl = data.sourceCodeUrl;
  }
  if (data.templateUrl !== undefined && data.templateUrl !== null) {
    contents.TemplateUrl = data.templateUrl;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateApplicationVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationVersionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.serverlessapplicationrepository#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1CreateCloudFormationChangeSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudFormationChangeSetCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateCloudFormationChangeSetCommandError(
      output,
      context
    );
  }
  const contents: CreateCloudFormationChangeSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCloudFormationChangeSetResponse",
    ApplicationId: undefined,
    ChangeSetId: undefined,
    SemanticVersion: undefined,
    StackId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.applicationId !== undefined && data.applicationId !== null) {
    contents.ApplicationId = data.applicationId;
  }
  if (data.changeSetId !== undefined && data.changeSetId !== null) {
    contents.ChangeSetId = data.changeSetId;
  }
  if (data.semanticVersion !== undefined && data.semanticVersion !== null) {
    contents.SemanticVersion = data.semanticVersion;
  }
  if (data.stackId !== undefined && data.stackId !== null) {
    contents.StackId = data.stackId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateCloudFormationChangeSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudFormationChangeSetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1CreateCloudFormationTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudFormationTemplateCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateCloudFormationTemplateCommandError(
      output,
      context
    );
  }
  const contents: CreateCloudFormationTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCloudFormationTemplateResponse",
    ApplicationId: undefined,
    CreationTime: undefined,
    ExpirationTime: undefined,
    SemanticVersion: undefined,
    Status: undefined,
    TemplateId: undefined,
    TemplateUrl: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.applicationId !== undefined && data.applicationId !== null) {
    contents.ApplicationId = data.applicationId;
  }
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.CreationTime = data.creationTime;
  }
  if (data.expirationTime !== undefined && data.expirationTime !== null) {
    contents.ExpirationTime = data.expirationTime;
  }
  if (data.semanticVersion !== undefined && data.semanticVersion !== null) {
    contents.SemanticVersion = data.semanticVersion;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = data.status;
  }
  if (data.templateId !== undefined && data.templateId !== null) {
    contents.TemplateId = data.templateId;
  }
  if (data.templateUrl !== undefined && data.templateUrl !== null) {
    contents.TemplateUrl = data.templateUrl;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateCloudFormationTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudFormationTemplateCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DeleteApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteApplicationCommandError(
      output,
      context
    );
  }
  const contents: DeleteApplicationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.serverlessapplicationrepository#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetApplicationCommandError(
      output,
      context
    );
  }
  const contents: GetApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetApplicationResponse",
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
    Version: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.applicationId !== undefined && data.applicationId !== null) {
    contents.ApplicationId = data.applicationId;
  }
  if (data.author !== undefined && data.author !== null) {
    contents.Author = data.author;
  }
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.CreationTime = data.creationTime;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.homePageUrl !== undefined && data.homePageUrl !== null) {
    contents.HomePageUrl = data.homePageUrl;
  }
  if (data.isVerifiedAuthor !== undefined && data.isVerifiedAuthor !== null) {
    contents.IsVerifiedAuthor = data.isVerifiedAuthor;
  }
  if (data.labels !== undefined && data.labels !== null) {
    contents.Labels = deserializeAws_restJson1_1__listOf__string(
      data.labels,
      context
    );
  }
  if (data.licenseUrl !== undefined && data.licenseUrl !== null) {
    contents.LicenseUrl = data.licenseUrl;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.readmeUrl !== undefined && data.readmeUrl !== null) {
    contents.ReadmeUrl = data.readmeUrl;
  }
  if (data.spdxLicenseId !== undefined && data.spdxLicenseId !== null) {
    contents.SpdxLicenseId = data.spdxLicenseId;
  }
  if (data.verifiedAuthorUrl !== undefined && data.verifiedAuthorUrl !== null) {
    contents.VerifiedAuthorUrl = data.verifiedAuthorUrl;
  }
  if (data.version !== undefined && data.version !== null) {
    contents.Version = deserializeAws_restJson1_1Version(data.version, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetApplicationPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationPolicyCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetApplicationPolicyCommandError(
      output,
      context
    );
  }
  const contents: GetApplicationPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetApplicationPolicyResponse",
    Statements: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.statements !== undefined && data.statements !== null) {
    contents.Statements = deserializeAws_restJson1_1__listOfApplicationPolicyStatement(
      data.statements,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetApplicationPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationPolicyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetCloudFormationTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudFormationTemplateCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetCloudFormationTemplateCommandError(
      output,
      context
    );
  }
  const contents: GetCloudFormationTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCloudFormationTemplateResponse",
    ApplicationId: undefined,
    CreationTime: undefined,
    ExpirationTime: undefined,
    SemanticVersion: undefined,
    Status: undefined,
    TemplateId: undefined,
    TemplateUrl: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.applicationId !== undefined && data.applicationId !== null) {
    contents.ApplicationId = data.applicationId;
  }
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.CreationTime = data.creationTime;
  }
  if (data.expirationTime !== undefined && data.expirationTime !== null) {
    contents.ExpirationTime = data.expirationTime;
  }
  if (data.semanticVersion !== undefined && data.semanticVersion !== null) {
    contents.SemanticVersion = data.semanticVersion;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = data.status;
  }
  if (data.templateId !== undefined && data.templateId !== null) {
    contents.TemplateId = data.templateId;
  }
  if (data.templateUrl !== undefined && data.templateUrl !== null) {
    contents.TemplateUrl = data.templateUrl;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetCloudFormationTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudFormationTemplateCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListApplicationDependenciesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationDependenciesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListApplicationDependenciesCommandError(
      output,
      context
    );
  }
  const contents: ListApplicationDependenciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListApplicationDependenciesResponse",
    Dependencies: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.dependencies !== undefined && data.dependencies !== null) {
    contents.Dependencies = deserializeAws_restJson1_1__listOfApplicationDependencySummary(
      data.dependencies,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListApplicationDependenciesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationDependenciesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListApplicationVersionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationVersionsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListApplicationVersionsCommandError(
      output,
      context
    );
  }
  const contents: ListApplicationVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListApplicationVersionsResponse",
    NextToken: undefined,
    Versions: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  if (data.versions !== undefined && data.versions !== null) {
    contents.Versions = deserializeAws_restJson1_1__listOfVersionSummary(
      data.versions,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListApplicationVersionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationVersionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListApplicationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListApplicationsCommandError(
      output,
      context
    );
  }
  const contents: ListApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListApplicationsResponse",
    Applications: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.applications !== undefined && data.applications !== null) {
    contents.Applications = deserializeAws_restJson1_1__listOfApplicationSummary(
      data.applications,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListApplicationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1PutApplicationPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutApplicationPolicyCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutApplicationPolicyCommandError(
      output,
      context
    );
  }
  const contents: PutApplicationPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutApplicationPolicyResponse",
    Statements: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.statements !== undefined && data.statements !== null) {
    contents.Statements = deserializeAws_restJson1_1__listOfApplicationPolicyStatement(
      data.statements,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PutApplicationPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutApplicationPolicyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1UpdateApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateApplicationCommandError(
      output,
      context
    );
  }
  const contents: UpdateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateApplicationResponse",
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
    Version: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.applicationId !== undefined && data.applicationId !== null) {
    contents.ApplicationId = data.applicationId;
  }
  if (data.author !== undefined && data.author !== null) {
    contents.Author = data.author;
  }
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.CreationTime = data.creationTime;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.homePageUrl !== undefined && data.homePageUrl !== null) {
    contents.HomePageUrl = data.homePageUrl;
  }
  if (data.isVerifiedAuthor !== undefined && data.isVerifiedAuthor !== null) {
    contents.IsVerifiedAuthor = data.isVerifiedAuthor;
  }
  if (data.labels !== undefined && data.labels !== null) {
    contents.Labels = deserializeAws_restJson1_1__listOf__string(
      data.labels,
      context
    );
  }
  if (data.licenseUrl !== undefined && data.licenseUrl !== null) {
    contents.LicenseUrl = data.licenseUrl;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.readmeUrl !== undefined && data.readmeUrl !== null) {
    contents.ReadmeUrl = data.readmeUrl;
  }
  if (data.spdxLicenseId !== undefined && data.spdxLicenseId !== null) {
    contents.SpdxLicenseId = data.spdxLicenseId;
  }
  if (data.verifiedAuthorUrl !== undefined && data.verifiedAuthorUrl !== null) {
    contents.VerifiedAuthorUrl = data.verifiedAuthorUrl;
  }
  if (data.version !== undefined && data.version !== null) {
    contents.Version = deserializeAws_restJson1_1Version(data.version, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.serverlessapplicationrepository#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.errorCode !== undefined && data.errorCode !== null) {
    contents.ErrorCode = data.errorCode;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ConflictExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.errorCode !== undefined && data.errorCode !== null) {
    contents.ErrorCode = data.errorCode;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ForbiddenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.errorCode !== undefined && data.errorCode !== null) {
    contents.ErrorCode = data.errorCode;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerErrorExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.errorCode !== undefined && data.errorCode !== null) {
    contents.ErrorCode = data.errorCode;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.errorCode !== undefined && data.errorCode !== null) {
    contents.ErrorCode = data.errorCode;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManyRequestsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.errorCode !== undefined && data.errorCode !== null) {
    contents.ErrorCode = data.errorCode;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1ApplicationPolicyStatement = (
  input: ApplicationPolicyStatement,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Actions !== undefined) {
    bodyParams["actions"] = serializeAws_restJson1_1__listOf__string(
      input.Actions,
      context
    );
  }
  if (input.Principals !== undefined) {
    bodyParams["principals"] = serializeAws_restJson1_1__listOf__string(
      input.Principals,
      context
    );
  }
  if (input.StatementId !== undefined) {
    bodyParams["statementId"] = input.StatementId;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ParameterValue = (
  input: ParameterValue,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  if (input.Value !== undefined) {
    bodyParams["value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1RollbackConfiguration = (
  input: RollbackConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MonitoringTimeInMinutes !== undefined) {
    bodyParams["monitoringTimeInMinutes"] = input.MonitoringTimeInMinutes;
  }
  if (input.RollbackTriggers !== undefined) {
    bodyParams[
      "rollbackTriggers"
    ] = serializeAws_restJson1_1__listOfRollbackTrigger(
      input.RollbackTriggers,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1RollbackTrigger = (
  input: RollbackTrigger,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Arn !== undefined) {
    bodyParams["arn"] = input.Arn;
  }
  if (input.Type !== undefined) {
    bodyParams["type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Tag = (
  input: Tag,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1__listOfApplicationPolicyStatement = (
  input: Array<ApplicationPolicyStatement>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1ApplicationPolicyStatement(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1__listOfParameterValue = (
  input: Array<ParameterValue>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1ParameterValue(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1__listOfRollbackTrigger = (
  input: Array<RollbackTrigger>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1RollbackTrigger(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1__listOfTag = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Tag(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1__listOf__string = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const deserializeAws_restJson1_1ApplicationDependencySummary = (
  output: any,
  context: __SerdeContext
): ApplicationDependencySummary => {
  let contents: any = {
    __type: "ApplicationDependencySummary",
    ApplicationId: undefined,
    SemanticVersion: undefined
  };
  if (output.applicationId !== undefined && output.applicationId !== null) {
    contents.ApplicationId = output.applicationId;
  }
  if (output.semanticVersion !== undefined && output.semanticVersion !== null) {
    contents.SemanticVersion = output.semanticVersion;
  }
  return contents;
};

const deserializeAws_restJson1_1ApplicationPolicyStatement = (
  output: any,
  context: __SerdeContext
): ApplicationPolicyStatement => {
  let contents: any = {
    __type: "ApplicationPolicyStatement",
    Actions: undefined,
    Principals: undefined,
    StatementId: undefined
  };
  if (output.actions !== undefined && output.actions !== null) {
    contents.Actions = deserializeAws_restJson1_1__listOf__string(
      output.actions,
      context
    );
  }
  if (output.principals !== undefined && output.principals !== null) {
    contents.Principals = deserializeAws_restJson1_1__listOf__string(
      output.principals,
      context
    );
  }
  if (output.statementId !== undefined && output.statementId !== null) {
    contents.StatementId = output.statementId;
  }
  return contents;
};

const deserializeAws_restJson1_1ApplicationSummary = (
  output: any,
  context: __SerdeContext
): ApplicationSummary => {
  let contents: any = {
    __type: "ApplicationSummary",
    ApplicationId: undefined,
    Author: undefined,
    CreationTime: undefined,
    Description: undefined,
    HomePageUrl: undefined,
    Labels: undefined,
    Name: undefined,
    SpdxLicenseId: undefined
  };
  if (output.applicationId !== undefined && output.applicationId !== null) {
    contents.ApplicationId = output.applicationId;
  }
  if (output.author !== undefined && output.author !== null) {
    contents.Author = output.author;
  }
  if (output.creationTime !== undefined && output.creationTime !== null) {
    contents.CreationTime = output.creationTime;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.Description = output.description;
  }
  if (output.homePageUrl !== undefined && output.homePageUrl !== null) {
    contents.HomePageUrl = output.homePageUrl;
  }
  if (output.labels !== undefined && output.labels !== null) {
    contents.Labels = deserializeAws_restJson1_1__listOf__string(
      output.labels,
      context
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.Name = output.name;
  }
  if (output.spdxLicenseId !== undefined && output.spdxLicenseId !== null) {
    contents.SpdxLicenseId = output.spdxLicenseId;
  }
  return contents;
};

const deserializeAws_restJson1_1ParameterDefinition = (
  output: any,
  context: __SerdeContext
): ParameterDefinition => {
  let contents: any = {
    __type: "ParameterDefinition",
    AllowedPattern: undefined,
    AllowedValues: undefined,
    ConstraintDescription: undefined,
    DefaultValue: undefined,
    Description: undefined,
    MaxLength: undefined,
    MaxValue: undefined,
    MinLength: undefined,
    MinValue: undefined,
    Name: undefined,
    NoEcho: undefined,
    ReferencedByResources: undefined,
    Type: undefined
  };
  if (output.allowedPattern !== undefined && output.allowedPattern !== null) {
    contents.AllowedPattern = output.allowedPattern;
  }
  if (output.allowedValues !== undefined && output.allowedValues !== null) {
    contents.AllowedValues = deserializeAws_restJson1_1__listOf__string(
      output.allowedValues,
      context
    );
  }
  if (
    output.constraintDescription !== undefined &&
    output.constraintDescription !== null
  ) {
    contents.ConstraintDescription = output.constraintDescription;
  }
  if (output.defaultValue !== undefined && output.defaultValue !== null) {
    contents.DefaultValue = output.defaultValue;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.Description = output.description;
  }
  if (output.maxLength !== undefined && output.maxLength !== null) {
    contents.MaxLength = output.maxLength;
  }
  if (output.maxValue !== undefined && output.maxValue !== null) {
    contents.MaxValue = output.maxValue;
  }
  if (output.minLength !== undefined && output.minLength !== null) {
    contents.MinLength = output.minLength;
  }
  if (output.minValue !== undefined && output.minValue !== null) {
    contents.MinValue = output.minValue;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.Name = output.name;
  }
  if (output.noEcho !== undefined && output.noEcho !== null) {
    contents.NoEcho = output.noEcho;
  }
  if (
    output.referencedByResources !== undefined &&
    output.referencedByResources !== null
  ) {
    contents.ReferencedByResources = deserializeAws_restJson1_1__listOf__string(
      output.referencedByResources,
      context
    );
  }
  if (output.type !== undefined && output.type !== null) {
    contents.Type = output.type;
  }
  return contents;
};

const deserializeAws_restJson1_1Version = (
  output: any,
  context: __SerdeContext
): Version => {
  let contents: any = {
    __type: "Version",
    ApplicationId: undefined,
    CreationTime: undefined,
    ParameterDefinitions: undefined,
    RequiredCapabilities: undefined,
    ResourcesSupported: undefined,
    SemanticVersion: undefined,
    SourceCodeArchiveUrl: undefined,
    SourceCodeUrl: undefined,
    TemplateUrl: undefined
  };
  if (output.applicationId !== undefined && output.applicationId !== null) {
    contents.ApplicationId = output.applicationId;
  }
  if (output.creationTime !== undefined && output.creationTime !== null) {
    contents.CreationTime = output.creationTime;
  }
  if (
    output.parameterDefinitions !== undefined &&
    output.parameterDefinitions !== null
  ) {
    contents.ParameterDefinitions = deserializeAws_restJson1_1__listOfParameterDefinition(
      output.parameterDefinitions,
      context
    );
  }
  if (
    output.requiredCapabilities !== undefined &&
    output.requiredCapabilities !== null
  ) {
    contents.RequiredCapabilities = deserializeAws_restJson1_1__listOfCapability(
      output.requiredCapabilities,
      context
    );
  }
  if (
    output.resourcesSupported !== undefined &&
    output.resourcesSupported !== null
  ) {
    contents.ResourcesSupported = output.resourcesSupported;
  }
  if (output.semanticVersion !== undefined && output.semanticVersion !== null) {
    contents.SemanticVersion = output.semanticVersion;
  }
  if (
    output.sourceCodeArchiveUrl !== undefined &&
    output.sourceCodeArchiveUrl !== null
  ) {
    contents.SourceCodeArchiveUrl = output.sourceCodeArchiveUrl;
  }
  if (output.sourceCodeUrl !== undefined && output.sourceCodeUrl !== null) {
    contents.SourceCodeUrl = output.sourceCodeUrl;
  }
  if (output.templateUrl !== undefined && output.templateUrl !== null) {
    contents.TemplateUrl = output.templateUrl;
  }
  return contents;
};

const deserializeAws_restJson1_1VersionSummary = (
  output: any,
  context: __SerdeContext
): VersionSummary => {
  let contents: any = {
    __type: "VersionSummary",
    ApplicationId: undefined,
    CreationTime: undefined,
    SemanticVersion: undefined,
    SourceCodeUrl: undefined
  };
  if (output.applicationId !== undefined && output.applicationId !== null) {
    contents.ApplicationId = output.applicationId;
  }
  if (output.creationTime !== undefined && output.creationTime !== null) {
    contents.CreationTime = output.creationTime;
  }
  if (output.semanticVersion !== undefined && output.semanticVersion !== null) {
    contents.SemanticVersion = output.semanticVersion;
  }
  if (output.sourceCodeUrl !== undefined && output.sourceCodeUrl !== null) {
    contents.SourceCodeUrl = output.sourceCodeUrl;
  }
  return contents;
};

const deserializeAws_restJson1_1__listOfApplicationDependencySummary = (
  output: any,
  context: __SerdeContext
): Array<ApplicationDependencySummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ApplicationDependencySummary(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfApplicationPolicyStatement = (
  output: any,
  context: __SerdeContext
): Array<ApplicationPolicyStatement> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ApplicationPolicyStatement(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfApplicationSummary = (
  output: any,
  context: __SerdeContext
): Array<ApplicationSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ApplicationSummary(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfCapability = (
  output: any,
  context: __SerdeContext
): Array<Capability | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__listOfParameterDefinition = (
  output: any,
  context: __SerdeContext
): Array<ParameterDefinition> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ParameterDefinition(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfVersionSummary = (
  output: any,
  context: __SerdeContext
): Array<VersionSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1VersionSummary(entry, context)
  );
};

const deserializeAws_restJson1_1__listOf__string = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
