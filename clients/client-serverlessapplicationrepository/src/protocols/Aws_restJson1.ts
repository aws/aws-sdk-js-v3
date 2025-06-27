// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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

/**
 * serializeAws_restJson1CreateApplicationCommand
 */
export const se_CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications");
  let body: any;
  body = JSON.stringify(
    take(input, {
      author: [, , `Author`],
      description: [, , `Description`],
      homePageUrl: [, , `HomePageUrl`],
      labels: [, (_) => _json(_), `Labels`],
      licenseBody: [, , `LicenseBody`],
      licenseUrl: [, , `LicenseUrl`],
      name: [, , `Name`],
      readmeBody: [, , `ReadmeBody`],
      readmeUrl: [, , `ReadmeUrl`],
      semanticVersion: [, , `SemanticVersion`],
      sourceCodeArchiveUrl: [, , `SourceCodeArchiveUrl`],
      sourceCodeUrl: [, , `SourceCodeUrl`],
      spdxLicenseId: [, , `SpdxLicenseId`],
      templateBody: [, , `TemplateBody`],
      templateUrl: [, , `TemplateUrl`],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateApplicationVersionCommand
 */
export const se_CreateApplicationVersionCommand = async (
  input: CreateApplicationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{ApplicationId}/versions/{SemanticVersion}");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  b.p("SemanticVersion", () => input.SemanticVersion!, "{SemanticVersion}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      sourceCodeArchiveUrl: [, , `SourceCodeArchiveUrl`],
      sourceCodeUrl: [, , `SourceCodeUrl`],
      templateBody: [, , `TemplateBody`],
      templateUrl: [, , `TemplateUrl`],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateCloudFormationChangeSetCommand
 */
export const se_CreateCloudFormationChangeSetCommand = async (
  input: CreateCloudFormationChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{ApplicationId}/changesets");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      capabilities: [, (_) => _json(_), `Capabilities`],
      changeSetName: [, , `ChangeSetName`],
      clientToken: [, , `ClientToken`],
      description: [, , `Description`],
      notificationArns: [, (_) => _json(_), `NotificationArns`],
      parameterOverrides: [, (_) => se___listOfParameterValue(_, context), `ParameterOverrides`],
      resourceTypes: [, (_) => _json(_), `ResourceTypes`],
      rollbackConfiguration: [, (_) => se_RollbackConfiguration(_, context), `RollbackConfiguration`],
      semanticVersion: [, , `SemanticVersion`],
      stackName: [, , `StackName`],
      tags: [, (_) => se___listOfTag(_, context), `Tags`],
      templateId: [, , `TemplateId`],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateCloudFormationTemplateCommand
 */
export const se_CreateCloudFormationTemplateCommand = async (
  input: CreateCloudFormationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{ApplicationId}/templates");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      semanticVersion: [, , `SemanticVersion`],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteApplicationCommand
 */
export const se_DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{ApplicationId}");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetApplicationCommand
 */
export const se_GetApplicationCommand = async (
  input: GetApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{ApplicationId}");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  const query: any = map({
    [_sV]: [, input[_SV]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetApplicationPolicyCommand
 */
export const se_GetApplicationPolicyCommand = async (
  input: GetApplicationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{ApplicationId}/policy");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCloudFormationTemplateCommand
 */
export const se_GetCloudFormationTemplateCommand = async (
  input: GetCloudFormationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{ApplicationId}/templates/{TemplateId}");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  b.p("TemplateId", () => input.TemplateId!, "{TemplateId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListApplicationDependenciesCommand
 */
export const se_ListApplicationDependenciesCommand = async (
  input: ListApplicationDependenciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{ApplicationId}/dependencies");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  const query: any = map({
    [_mI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
    [_nT]: [, input[_NT]!],
    [_sV]: [, input[_SV]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListApplicationsCommand
 */
export const se_ListApplicationsCommand = async (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications");
  const query: any = map({
    [_mI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListApplicationVersionsCommand
 */
export const se_ListApplicationVersionsCommand = async (
  input: ListApplicationVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{ApplicationId}/versions");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  const query: any = map({
    [_mI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutApplicationPolicyCommand
 */
export const se_PutApplicationPolicyCommand = async (
  input: PutApplicationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{ApplicationId}/policy");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      statements: [, (_) => se___listOfApplicationPolicyStatement(_, context), `Statements`],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UnshareApplicationCommand
 */
export const se_UnshareApplicationCommand = async (
  input: UnshareApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{ApplicationId}/unshare");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      organizationId: [, , `OrganizationId`],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateApplicationCommand
 */
export const se_UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{ApplicationId}");
  b.p("ApplicationId", () => input.ApplicationId!, "{ApplicationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      author: [, , `Author`],
      description: [, , `Description`],
      homePageUrl: [, , `HomePageUrl`],
      labels: [, (_) => _json(_), `Labels`],
      readmeBody: [, , `ReadmeBody`],
      readmeUrl: [, , `ReadmeUrl`],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateApplicationCommand
 */
export const de_CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationId: [, __expectString, `applicationId`],
    Author: [, __expectString, `author`],
    CreationTime: [, __expectString, `creationTime`],
    Description: [, __expectString, `description`],
    HomePageUrl: [, __expectString, `homePageUrl`],
    IsVerifiedAuthor: [, __expectBoolean, `isVerifiedAuthor`],
    Labels: [, _json, `labels`],
    LicenseUrl: [, __expectString, `licenseUrl`],
    Name: [, __expectString, `name`],
    ReadmeUrl: [, __expectString, `readmeUrl`],
    SpdxLicenseId: [, __expectString, `spdxLicenseId`],
    VerifiedAuthorUrl: [, __expectString, `verifiedAuthorUrl`],
    Version: [, (_) => de_Version(_, context), `version`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateApplicationVersionCommand
 */
export const de_CreateApplicationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationId: [, __expectString, `applicationId`],
    CreationTime: [, __expectString, `creationTime`],
    ParameterDefinitions: [, (_) => de___listOfParameterDefinition(_, context), `parameterDefinitions`],
    RequiredCapabilities: [, _json, `requiredCapabilities`],
    ResourcesSupported: [, __expectBoolean, `resourcesSupported`],
    SemanticVersion: [, __expectString, `semanticVersion`],
    SourceCodeArchiveUrl: [, __expectString, `sourceCodeArchiveUrl`],
    SourceCodeUrl: [, __expectString, `sourceCodeUrl`],
    TemplateUrl: [, __expectString, `templateUrl`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCloudFormationChangeSetCommand
 */
export const de_CreateCloudFormationChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudFormationChangeSetCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationId: [, __expectString, `applicationId`],
    ChangeSetId: [, __expectString, `changeSetId`],
    SemanticVersion: [, __expectString, `semanticVersion`],
    StackId: [, __expectString, `stackId`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCloudFormationTemplateCommand
 */
export const de_CreateCloudFormationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudFormationTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationId: [, __expectString, `applicationId`],
    CreationTime: [, __expectString, `creationTime`],
    ExpirationTime: [, __expectString, `expirationTime`],
    SemanticVersion: [, __expectString, `semanticVersion`],
    Status: [, __expectString, `status`],
    TemplateId: [, __expectString, `templateId`],
    TemplateUrl: [, __expectString, `templateUrl`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteApplicationCommand
 */
export const de_DeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetApplicationCommand
 */
export const de_GetApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationId: [, __expectString, `applicationId`],
    Author: [, __expectString, `author`],
    CreationTime: [, __expectString, `creationTime`],
    Description: [, __expectString, `description`],
    HomePageUrl: [, __expectString, `homePageUrl`],
    IsVerifiedAuthor: [, __expectBoolean, `isVerifiedAuthor`],
    Labels: [, _json, `labels`],
    LicenseUrl: [, __expectString, `licenseUrl`],
    Name: [, __expectString, `name`],
    ReadmeUrl: [, __expectString, `readmeUrl`],
    SpdxLicenseId: [, __expectString, `spdxLicenseId`],
    VerifiedAuthorUrl: [, __expectString, `verifiedAuthorUrl`],
    Version: [, (_) => de_Version(_, context), `version`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetApplicationPolicyCommand
 */
export const de_GetApplicationPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Statements: [, (_) => de___listOfApplicationPolicyStatement(_, context), `statements`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCloudFormationTemplateCommand
 */
export const de_GetCloudFormationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudFormationTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationId: [, __expectString, `applicationId`],
    CreationTime: [, __expectString, `creationTime`],
    ExpirationTime: [, __expectString, `expirationTime`],
    SemanticVersion: [, __expectString, `semanticVersion`],
    Status: [, __expectString, `status`],
    TemplateId: [, __expectString, `templateId`],
    TemplateUrl: [, __expectString, `templateUrl`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListApplicationDependenciesCommand
 */
export const de_ListApplicationDependenciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationDependenciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Dependencies: [, (_) => de___listOfApplicationDependencySummary(_, context), `dependencies`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListApplicationsCommand
 */
export const de_ListApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Applications: [, (_) => de___listOfApplicationSummary(_, context), `applications`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListApplicationVersionsCommand
 */
export const de_ListApplicationVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: [, __expectString, `nextToken`],
    Versions: [, (_) => de___listOfVersionSummary(_, context), `versions`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutApplicationPolicyCommand
 */
export const de_PutApplicationPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutApplicationPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Statements: [, (_) => de___listOfApplicationPolicyStatement(_, context), `statements`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UnshareApplicationCommand
 */
export const de_UnshareApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnshareApplicationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateApplicationCommand
 */
export const de_UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationId: [, __expectString, `applicationId`],
    Author: [, __expectString, `author`],
    CreationTime: [, __expectString, `creationTime`],
    Description: [, __expectString, `description`],
    HomePageUrl: [, __expectString, `homePageUrl`],
    IsVerifiedAuthor: [, __expectBoolean, `isVerifiedAuthor`],
    Labels: [, _json, `labels`],
    LicenseUrl: [, __expectString, `licenseUrl`],
    Name: [, __expectString, `name`],
    ReadmeUrl: [, __expectString, `readmeUrl`],
    SpdxLicenseId: [, __expectString, `spdxLicenseId`],
    VerifiedAuthorUrl: [, __expectString, `verifiedAuthorUrl`],
    Version: [, (_) => de_Version(_, context), `version`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.serverlessapplicationrepository#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.serverlessapplicationrepository#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.serverlessapplicationrepository#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    ErrorCode: [, __expectString, `errorCode`],
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new BadRequestException({
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
    ErrorCode: [, __expectString, `errorCode`],
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ForbiddenExceptionRes
 */
const de_ForbiddenExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ForbiddenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    ErrorCode: [, __expectString, `errorCode`],
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerErrorExceptionRes
 */
const de_InternalServerErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    ErrorCode: [, __expectString, `errorCode`],
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new InternalServerErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    ErrorCode: [, __expectString, `errorCode`],
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    ErrorCode: [, __expectString, `errorCode`],
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se___listOf__string omitted.

/**
 * serializeAws_restJson1__listOfApplicationPolicyStatement
 */
const se___listOfApplicationPolicyStatement = (input: ApplicationPolicyStatement[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ApplicationPolicyStatement(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfParameterValue
 */
const se___listOfParameterValue = (input: ParameterValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ParameterValue(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfRollbackTrigger
 */
const se___listOfRollbackTrigger = (input: RollbackTrigger[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RollbackTrigger(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfTag
 */
const se___listOfTag = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_restJson1ApplicationPolicyStatement
 */
const se_ApplicationPolicyStatement = (input: ApplicationPolicyStatement, context: __SerdeContext): any => {
  return take(input, {
    actions: [, _json, `Actions`],
    principalOrgIDs: [, _json, `PrincipalOrgIDs`],
    principals: [, _json, `Principals`],
    statementId: [, , `StatementId`],
  });
};

/**
 * serializeAws_restJson1ParameterValue
 */
const se_ParameterValue = (input: ParameterValue, context: __SerdeContext): any => {
  return take(input, {
    name: [, , `Name`],
    value: [, , `Value`],
  });
};

/**
 * serializeAws_restJson1RollbackConfiguration
 */
const se_RollbackConfiguration = (input: RollbackConfiguration, context: __SerdeContext): any => {
  return take(input, {
    monitoringTimeInMinutes: [, , `MonitoringTimeInMinutes`],
    rollbackTriggers: [, (_) => se___listOfRollbackTrigger(_, context), `RollbackTriggers`],
  });
};

/**
 * serializeAws_restJson1RollbackTrigger
 */
const se_RollbackTrigger = (input: RollbackTrigger, context: __SerdeContext): any => {
  return take(input, {
    arn: [, , `Arn`],
    type: [, , `Type`],
  });
};

/**
 * serializeAws_restJson1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return take(input, {
    key: [, , `Key`],
    value: [, , `Value`],
  });
};

// de___listOf__string omitted.

/**
 * deserializeAws_restJson1__listOfApplicationDependencySummary
 */
const de___listOfApplicationDependencySummary = (
  output: any,
  context: __SerdeContext
): ApplicationDependencySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ApplicationDependencySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfApplicationPolicyStatement
 */
const de___listOfApplicationPolicyStatement = (output: any, context: __SerdeContext): ApplicationPolicyStatement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ApplicationPolicyStatement(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfApplicationSummary
 */
const de___listOfApplicationSummary = (output: any, context: __SerdeContext): ApplicationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ApplicationSummary(entry, context);
    });
  return retVal;
};

// de___listOfCapability omitted.

/**
 * deserializeAws_restJson1__listOfParameterDefinition
 */
const de___listOfParameterDefinition = (output: any, context: __SerdeContext): ParameterDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ParameterDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfVersionSummary
 */
const de___listOfVersionSummary = (output: any, context: __SerdeContext): VersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VersionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ApplicationDependencySummary
 */
const de_ApplicationDependencySummary = (output: any, context: __SerdeContext): ApplicationDependencySummary => {
  return take(output, {
    ApplicationId: [, __expectString, `applicationId`],
    SemanticVersion: [, __expectString, `semanticVersion`],
  }) as any;
};

/**
 * deserializeAws_restJson1ApplicationPolicyStatement
 */
const de_ApplicationPolicyStatement = (output: any, context: __SerdeContext): ApplicationPolicyStatement => {
  return take(output, {
    Actions: [, _json, `actions`],
    PrincipalOrgIDs: [, _json, `principalOrgIDs`],
    Principals: [, _json, `principals`],
    StatementId: [, __expectString, `statementId`],
  }) as any;
};

/**
 * deserializeAws_restJson1ApplicationSummary
 */
const de_ApplicationSummary = (output: any, context: __SerdeContext): ApplicationSummary => {
  return take(output, {
    ApplicationId: [, __expectString, `applicationId`],
    Author: [, __expectString, `author`],
    CreationTime: [, __expectString, `creationTime`],
    Description: [, __expectString, `description`],
    HomePageUrl: [, __expectString, `homePageUrl`],
    Labels: [, _json, `labels`],
    Name: [, __expectString, `name`],
    SpdxLicenseId: [, __expectString, `spdxLicenseId`],
  }) as any;
};

/**
 * deserializeAws_restJson1ParameterDefinition
 */
const de_ParameterDefinition = (output: any, context: __SerdeContext): ParameterDefinition => {
  return take(output, {
    AllowedPattern: [, __expectString, `allowedPattern`],
    AllowedValues: [, _json, `allowedValues`],
    ConstraintDescription: [, __expectString, `constraintDescription`],
    DefaultValue: [, __expectString, `defaultValue`],
    Description: [, __expectString, `description`],
    MaxLength: [, __expectInt32, `maxLength`],
    MaxValue: [, __expectInt32, `maxValue`],
    MinLength: [, __expectInt32, `minLength`],
    MinValue: [, __expectInt32, `minValue`],
    Name: [, __expectString, `name`],
    NoEcho: [, __expectBoolean, `noEcho`],
    ReferencedByResources: [, _json, `referencedByResources`],
    Type: [, __expectString, `type`],
  }) as any;
};

/**
 * deserializeAws_restJson1Version
 */
const de_Version = (output: any, context: __SerdeContext): Version => {
  return take(output, {
    ApplicationId: [, __expectString, `applicationId`],
    CreationTime: [, __expectString, `creationTime`],
    ParameterDefinitions: [, (_: any) => de___listOfParameterDefinition(_, context), `parameterDefinitions`],
    RequiredCapabilities: [, _json, `requiredCapabilities`],
    ResourcesSupported: [, __expectBoolean, `resourcesSupported`],
    SemanticVersion: [, __expectString, `semanticVersion`],
    SourceCodeArchiveUrl: [, __expectString, `sourceCodeArchiveUrl`],
    SourceCodeUrl: [, __expectString, `sourceCodeUrl`],
    TemplateUrl: [, __expectString, `templateUrl`],
  }) as any;
};

/**
 * deserializeAws_restJson1VersionSummary
 */
const de_VersionSummary = (output: any, context: __SerdeContext): VersionSummary => {
  return take(output, {
    ApplicationId: [, __expectString, `applicationId`],
    CreationTime: [, __expectString, `creationTime`],
    SemanticVersion: [, __expectString, `semanticVersion`],
    SourceCodeUrl: [, __expectString, `sourceCodeUrl`],
  }) as any;
};

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

const _MI = "MaxItems";
const _NT = "NextToken";
const _SV = "SemanticVersion";
const _mI = "maxItems";
const _nT = "nextToken";
const _sV = "semanticVersion";
