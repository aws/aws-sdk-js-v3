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

export const serializeAws_restJson1CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/applications";
  let body: any;
  body = JSON.stringify({
    ...(input.Author !== undefined && { author: input.Author }),
    ...(input.Description !== undefined && { description: input.Description }),
    ...(input.HomePageUrl !== undefined && { homePageUrl: input.HomePageUrl }),
    ...(input.Labels !== undefined && {
      labels: serializeAws_restJson1__listOf__string(input.Labels, context)
    }),
    ...(input.LicenseBody !== undefined && { licenseBody: input.LicenseBody }),
    ...(input.LicenseUrl !== undefined && { licenseUrl: input.LicenseUrl }),
    ...(input.Name !== undefined && { name: input.Name }),
    ...(input.ReadmeBody !== undefined && { readmeBody: input.ReadmeBody }),
    ...(input.ReadmeUrl !== undefined && { readmeUrl: input.ReadmeUrl }),
    ...(input.SemanticVersion !== undefined && {
      semanticVersion: input.SemanticVersion
    }),
    ...(input.SourceCodeArchiveUrl !== undefined && {
      sourceCodeArchiveUrl: input.SourceCodeArchiveUrl
    }),
    ...(input.SourceCodeUrl !== undefined && {
      sourceCodeUrl: input.SourceCodeUrl
    }),
    ...(input.SpdxLicenseId !== undefined && {
      spdxLicenseId: input.SpdxLicenseId
    }),
    ...(input.TemplateBody !== undefined && {
      templateBody: input.TemplateBody
    }),
    ...(input.TemplateUrl !== undefined && { templateUrl: input.TemplateUrl })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateApplicationVersionCommand = async (
  input: CreateApplicationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  body = JSON.stringify({
    ...(input.SourceCodeArchiveUrl !== undefined && {
      sourceCodeArchiveUrl: input.SourceCodeArchiveUrl
    }),
    ...(input.SourceCodeUrl !== undefined && {
      sourceCodeUrl: input.SourceCodeUrl
    }),
    ...(input.TemplateBody !== undefined && {
      templateBody: input.TemplateBody
    }),
    ...(input.TemplateUrl !== undefined && { templateUrl: input.TemplateUrl })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateCloudFormationChangeSetCommand = async (
  input: CreateCloudFormationChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  body = JSON.stringify({
    ...(input.Capabilities !== undefined && {
      capabilities: serializeAws_restJson1__listOf__string(
        input.Capabilities,
        context
      )
    }),
    ...(input.ChangeSetName !== undefined && {
      changeSetName: input.ChangeSetName
    }),
    ...(input.ClientToken !== undefined && { clientToken: input.ClientToken }),
    ...(input.Description !== undefined && { description: input.Description }),
    ...(input.NotificationArns !== undefined && {
      notificationArns: serializeAws_restJson1__listOf__string(
        input.NotificationArns,
        context
      )
    }),
    ...(input.ParameterOverrides !== undefined && {
      parameterOverrides: serializeAws_restJson1__listOfParameterValue(
        input.ParameterOverrides,
        context
      )
    }),
    ...(input.ResourceTypes !== undefined && {
      resourceTypes: serializeAws_restJson1__listOf__string(
        input.ResourceTypes,
        context
      )
    }),
    ...(input.RollbackConfiguration !== undefined && {
      rollbackConfiguration: serializeAws_restJson1RollbackConfiguration(
        input.RollbackConfiguration,
        context
      )
    }),
    ...(input.SemanticVersion !== undefined && {
      semanticVersion: input.SemanticVersion
    }),
    ...(input.StackName !== undefined && { stackName: input.StackName }),
    ...(input.Tags !== undefined && {
      tags: serializeAws_restJson1__listOfTag(input.Tags, context)
    }),
    ...(input.TemplateId !== undefined && { templateId: input.TemplateId })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateCloudFormationTemplateCommand = async (
  input: CreateCloudFormationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  body = JSON.stringify({
    ...(input.SemanticVersion !== undefined && {
      semanticVersion: input.SemanticVersion
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetApplicationCommand = async (
  input: GetApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.SemanticVersion !== undefined && {
      semanticVersion: input.SemanticVersion
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1GetApplicationPolicyCommand = async (
  input: GetApplicationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetCloudFormationTemplateCommand = async (
  input: GetCloudFormationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListApplicationDependenciesCommand = async (
  input: ListApplicationDependenciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.MaxItems !== undefined && {
      maxItems: input.MaxItems.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.SemanticVersion !== undefined && {
      semanticVersion: input.SemanticVersion
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1ListApplicationsCommand = async (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/applications";
  const query: any = {
    ...(input.MaxItems !== undefined && {
      maxItems: input.MaxItems.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1ListApplicationVersionsCommand = async (
  input: ListApplicationVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.MaxItems !== undefined && {
      maxItems: input.MaxItems.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1PutApplicationPolicyCommand = async (
  input: PutApplicationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  body = JSON.stringify({
    ...(input.Statements !== undefined && {
      statements: serializeAws_restJson1__listOfApplicationPolicyStatement(
        input.Statements,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  body = JSON.stringify({
    ...(input.Author !== undefined && { author: input.Author }),
    ...(input.Description !== undefined && { description: input.Description }),
    ...(input.HomePageUrl !== undefined && { homePageUrl: input.HomePageUrl }),
    ...(input.Labels !== undefined && {
      labels: serializeAws_restJson1__listOf__string(input.Labels, context)
    }),
    ...(input.ReadmeBody !== undefined && { readmeBody: input.ReadmeBody }),
    ...(input.ReadmeUrl !== undefined && { readmeUrl: input.ReadmeUrl })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body
  });
};

export const deserializeAws_restJson1CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateApplicationCommandError(
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
    contents.Labels = deserializeAws_restJson1__listOf__string(
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.serverlessapplicationrepository#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateApplicationVersionCommandError(
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
    contents.ParameterDefinitions = deserializeAws_restJson1__listOfParameterDefinition(
      data.parameterDefinitions,
      context
    );
  }
  if (
    data.requiredCapabilities !== undefined &&
    data.requiredCapabilities !== null
  ) {
    contents.RequiredCapabilities = deserializeAws_restJson1__listOfCapability(
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
};

const deserializeAws_restJson1CreateApplicationVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.serverlessapplicationrepository#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateCloudFormationChangeSetCommandError(
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
};

const deserializeAws_restJson1CreateCloudFormationChangeSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudFormationChangeSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateCloudFormationTemplateCommandError(
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
};

const deserializeAws_restJson1CreateCloudFormationTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudFormationTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteApplicationCommandError(
      output,
      context
    );
  }
  const contents: DeleteApplicationCommandOutput = {
    $metadata: deserializeMetadata(output)
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.serverlessapplicationrepository#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetApplicationCommandError(output, context);
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
    contents.Labels = deserializeAws_restJson1__listOf__string(
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetApplicationPolicyCommandError(
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
    contents.Statements = deserializeAws_restJson1__listOfApplicationPolicyStatement(
      data.statements,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetApplicationPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetCloudFormationTemplateCommandError(
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
};

const deserializeAws_restJson1GetCloudFormationTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudFormationTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListApplicationDependenciesCommandError(
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
    contents.Dependencies = deserializeAws_restJson1__listOfApplicationDependencySummary(
      data.dependencies,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListApplicationDependenciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationDependenciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListApplicationsCommandError(
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
    contents.Applications = deserializeAws_restJson1__listOfApplicationSummary(
      data.applications,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListApplicationVersionsCommandError(
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
    contents.Versions = deserializeAws_restJson1__listOfVersionSummary(
      data.versions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListApplicationVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1PutApplicationPolicyCommandError(
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
    contents.Statements = deserializeAws_restJson1__listOfApplicationPolicyStatement(
      data.statements,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutApplicationPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutApplicationPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateApplicationCommandError(
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
    contents.Labels = deserializeAws_restJson1__listOf__string(
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.serverlessapplicationrepository#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.errorCode !== undefined && data.errorCode !== null) {
    contents.ErrorCode = data.errorCode;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
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
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.errorCode !== undefined && data.errorCode !== null) {
    contents.ErrorCode = data.errorCode;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
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
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.errorCode !== undefined && data.errorCode !== null) {
    contents.ErrorCode = data.errorCode;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
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
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.errorCode !== undefined && data.errorCode !== null) {
    contents.ErrorCode = data.errorCode;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
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
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.errorCode !== undefined && data.errorCode !== null) {
    contents.ErrorCode = data.errorCode;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
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
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.errorCode !== undefined && data.errorCode !== null) {
    contents.ErrorCode = data.errorCode;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const serializeAws_restJson1__listOf__string = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1__listOfApplicationPolicyStatement = (
  input: ApplicationPolicyStatement[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1ApplicationPolicyStatement(entry, context)
  );
};

const serializeAws_restJson1__listOfParameterValue = (
  input: ParameterValue[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1ParameterValue(entry, context)
  );
};

const serializeAws_restJson1__listOfRollbackTrigger = (
  input: RollbackTrigger[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1RollbackTrigger(entry, context)
  );
};

const serializeAws_restJson1__listOfTag = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1Tag(entry, context));
};

const serializeAws_restJson1ApplicationPolicyStatement = (
  input: ApplicationPolicyStatement,
  context: __SerdeContext
): any => {
  return {
    ...(input.Actions !== undefined && {
      actions: serializeAws_restJson1__listOf__string(input.Actions, context)
    }),
    ...(input.Principals !== undefined && {
      principals: serializeAws_restJson1__listOf__string(
        input.Principals,
        context
      )
    }),
    ...(input.StatementId !== undefined && { statementId: input.StatementId })
  };
};

const serializeAws_restJson1ParameterValue = (
  input: ParameterValue,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { name: input.Name }),
    ...(input.Value !== undefined && { value: input.Value })
  };
};

const serializeAws_restJson1RollbackConfiguration = (
  input: RollbackConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.MonitoringTimeInMinutes !== undefined && {
      monitoringTimeInMinutes: input.MonitoringTimeInMinutes
    }),
    ...(input.RollbackTriggers !== undefined && {
      rollbackTriggers: serializeAws_restJson1__listOfRollbackTrigger(
        input.RollbackTriggers,
        context
      )
    })
  };
};

const serializeAws_restJson1RollbackTrigger = (
  input: RollbackTrigger,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arn !== undefined && { arn: input.Arn }),
    ...(input.Type !== undefined && { type: input.Type })
  };
};

const serializeAws_restJson1Tag = (
  input: Tag,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key !== undefined && { key: input.Key }),
    ...(input.Value !== undefined && { value: input.Value })
  };
};

const deserializeAws_restJson1__listOf__string = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1__listOfApplicationDependencySummary = (
  output: any,
  context: __SerdeContext
): ApplicationDependencySummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ApplicationDependencySummary(entry, context)
  );
};

const deserializeAws_restJson1__listOfApplicationPolicyStatement = (
  output: any,
  context: __SerdeContext
): ApplicationPolicyStatement[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ApplicationPolicyStatement(entry, context)
  );
};

const deserializeAws_restJson1__listOfApplicationSummary = (
  output: any,
  context: __SerdeContext
): ApplicationSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ApplicationSummary(entry, context)
  );
};

const deserializeAws_restJson1__listOfCapability = (
  output: any,
  context: __SerdeContext
): (Capability | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1__listOfParameterDefinition = (
  output: any,
  context: __SerdeContext
): ParameterDefinition[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ParameterDefinition(entry, context)
  );
};

const deserializeAws_restJson1__listOfVersionSummary = (
  output: any,
  context: __SerdeContext
): VersionSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1VersionSummary(entry, context)
  );
};

const deserializeAws_restJson1ApplicationDependencySummary = (
  output: any,
  context: __SerdeContext
): ApplicationDependencySummary => {
  return {
    __type: "ApplicationDependencySummary",
    ApplicationId:
      output.applicationId !== undefined && output.applicationId !== null
        ? output.applicationId
        : undefined,
    SemanticVersion:
      output.semanticVersion !== undefined && output.semanticVersion !== null
        ? output.semanticVersion
        : undefined
  } as any;
};

const deserializeAws_restJson1ApplicationPolicyStatement = (
  output: any,
  context: __SerdeContext
): ApplicationPolicyStatement => {
  return {
    __type: "ApplicationPolicyStatement",
    Actions:
      output.actions !== undefined && output.actions !== null
        ? deserializeAws_restJson1__listOf__string(output.actions, context)
        : undefined,
    Principals:
      output.principals !== undefined && output.principals !== null
        ? deserializeAws_restJson1__listOf__string(output.principals, context)
        : undefined,
    StatementId:
      output.statementId !== undefined && output.statementId !== null
        ? output.statementId
        : undefined
  } as any;
};

const deserializeAws_restJson1ApplicationSummary = (
  output: any,
  context: __SerdeContext
): ApplicationSummary => {
  return {
    __type: "ApplicationSummary",
    ApplicationId:
      output.applicationId !== undefined && output.applicationId !== null
        ? output.applicationId
        : undefined,
    Author:
      output.author !== undefined && output.author !== null
        ? output.author
        : undefined,
    CreationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? output.creationTime
        : undefined,
    Description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    HomePageUrl:
      output.homePageUrl !== undefined && output.homePageUrl !== null
        ? output.homePageUrl
        : undefined,
    Labels:
      output.labels !== undefined && output.labels !== null
        ? deserializeAws_restJson1__listOf__string(output.labels, context)
        : undefined,
    Name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    SpdxLicenseId:
      output.spdxLicenseId !== undefined && output.spdxLicenseId !== null
        ? output.spdxLicenseId
        : undefined
  } as any;
};

const deserializeAws_restJson1ParameterDefinition = (
  output: any,
  context: __SerdeContext
): ParameterDefinition => {
  return {
    __type: "ParameterDefinition",
    AllowedPattern:
      output.allowedPattern !== undefined && output.allowedPattern !== null
        ? output.allowedPattern
        : undefined,
    AllowedValues:
      output.allowedValues !== undefined && output.allowedValues !== null
        ? deserializeAws_restJson1__listOf__string(
            output.allowedValues,
            context
          )
        : undefined,
    ConstraintDescription:
      output.constraintDescription !== undefined &&
      output.constraintDescription !== null
        ? output.constraintDescription
        : undefined,
    DefaultValue:
      output.defaultValue !== undefined && output.defaultValue !== null
        ? output.defaultValue
        : undefined,
    Description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    MaxLength:
      output.maxLength !== undefined && output.maxLength !== null
        ? output.maxLength
        : undefined,
    MaxValue:
      output.maxValue !== undefined && output.maxValue !== null
        ? output.maxValue
        : undefined,
    MinLength:
      output.minLength !== undefined && output.minLength !== null
        ? output.minLength
        : undefined,
    MinValue:
      output.minValue !== undefined && output.minValue !== null
        ? output.minValue
        : undefined,
    Name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    NoEcho:
      output.noEcho !== undefined && output.noEcho !== null
        ? output.noEcho
        : undefined,
    ReferencedByResources:
      output.referencedByResources !== undefined &&
      output.referencedByResources !== null
        ? deserializeAws_restJson1__listOf__string(
            output.referencedByResources,
            context
          )
        : undefined,
    Type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_restJson1Version = (
  output: any,
  context: __SerdeContext
): Version => {
  return {
    __type: "Version",
    ApplicationId:
      output.applicationId !== undefined && output.applicationId !== null
        ? output.applicationId
        : undefined,
    CreationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? output.creationTime
        : undefined,
    ParameterDefinitions:
      output.parameterDefinitions !== undefined &&
      output.parameterDefinitions !== null
        ? deserializeAws_restJson1__listOfParameterDefinition(
            output.parameterDefinitions,
            context
          )
        : undefined,
    RequiredCapabilities:
      output.requiredCapabilities !== undefined &&
      output.requiredCapabilities !== null
        ? deserializeAws_restJson1__listOfCapability(
            output.requiredCapabilities,
            context
          )
        : undefined,
    ResourcesSupported:
      output.resourcesSupported !== undefined &&
      output.resourcesSupported !== null
        ? output.resourcesSupported
        : undefined,
    SemanticVersion:
      output.semanticVersion !== undefined && output.semanticVersion !== null
        ? output.semanticVersion
        : undefined,
    SourceCodeArchiveUrl:
      output.sourceCodeArchiveUrl !== undefined &&
      output.sourceCodeArchiveUrl !== null
        ? output.sourceCodeArchiveUrl
        : undefined,
    SourceCodeUrl:
      output.sourceCodeUrl !== undefined && output.sourceCodeUrl !== null
        ? output.sourceCodeUrl
        : undefined,
    TemplateUrl:
      output.templateUrl !== undefined && output.templateUrl !== null
        ? output.templateUrl
        : undefined
  } as any;
};

const deserializeAws_restJson1VersionSummary = (
  output: any,
  context: __SerdeContext
): VersionSummary => {
  return {
    __type: "VersionSummary",
    ApplicationId:
      output.applicationId !== undefined && output.applicationId !== null
        ? output.applicationId
        : undefined,
    CreationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? output.creationTime
        : undefined,
    SemanticVersion:
      output.semanticVersion !== undefined && output.semanticVersion !== null
        ? output.semanticVersion
        : undefined,
    SourceCodeUrl:
      output.sourceCodeUrl !== undefined && output.sourceCodeUrl !== null
        ? output.sourceCodeUrl
        : undefined
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
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
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) =>
    Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

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
