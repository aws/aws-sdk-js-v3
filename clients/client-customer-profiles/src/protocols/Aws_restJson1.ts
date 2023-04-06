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

import { AddProfileKeyCommandInput, AddProfileKeyCommandOutput } from "../commands/AddProfileKeyCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "../commands/CreateDomainCommand";
import {
  CreateIntegrationWorkflowCommandInput,
  CreateIntegrationWorkflowCommandOutput,
} from "../commands/CreateIntegrationWorkflowCommand";
import { CreateProfileCommandInput, CreateProfileCommandOutput } from "../commands/CreateProfileCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "../commands/DeleteDomainCommand";
import { DeleteIntegrationCommandInput, DeleteIntegrationCommandOutput } from "../commands/DeleteIntegrationCommand";
import { DeleteProfileCommandInput, DeleteProfileCommandOutput } from "../commands/DeleteProfileCommand";
import { DeleteProfileKeyCommandInput, DeleteProfileKeyCommandOutput } from "../commands/DeleteProfileKeyCommand";
import {
  DeleteProfileObjectCommandInput,
  DeleteProfileObjectCommandOutput,
} from "../commands/DeleteProfileObjectCommand";
import {
  DeleteProfileObjectTypeCommandInput,
  DeleteProfileObjectTypeCommandOutput,
} from "../commands/DeleteProfileObjectTypeCommand";
import { DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput } from "../commands/DeleteWorkflowCommand";
import {
  GetAutoMergingPreviewCommandInput,
  GetAutoMergingPreviewCommandOutput,
} from "../commands/GetAutoMergingPreviewCommand";
import { GetDomainCommandInput, GetDomainCommandOutput } from "../commands/GetDomainCommand";
import {
  GetIdentityResolutionJobCommandInput,
  GetIdentityResolutionJobCommandOutput,
} from "../commands/GetIdentityResolutionJobCommand";
import { GetIntegrationCommandInput, GetIntegrationCommandOutput } from "../commands/GetIntegrationCommand";
import { GetMatchesCommandInput, GetMatchesCommandOutput } from "../commands/GetMatchesCommand";
import {
  GetProfileObjectTypeCommandInput,
  GetProfileObjectTypeCommandOutput,
} from "../commands/GetProfileObjectTypeCommand";
import {
  GetProfileObjectTypeTemplateCommandInput,
  GetProfileObjectTypeTemplateCommandOutput,
} from "../commands/GetProfileObjectTypeTemplateCommand";
import { GetWorkflowCommandInput, GetWorkflowCommandOutput } from "../commands/GetWorkflowCommand";
import { GetWorkflowStepsCommandInput, GetWorkflowStepsCommandOutput } from "../commands/GetWorkflowStepsCommand";
import {
  ListAccountIntegrationsCommandInput,
  ListAccountIntegrationsCommandOutput,
} from "../commands/ListAccountIntegrationsCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import {
  ListIdentityResolutionJobsCommandInput,
  ListIdentityResolutionJobsCommandOutput,
} from "../commands/ListIdentityResolutionJobsCommand";
import { ListIntegrationsCommandInput, ListIntegrationsCommandOutput } from "../commands/ListIntegrationsCommand";
import { ListProfileObjectsCommandInput, ListProfileObjectsCommandOutput } from "../commands/ListProfileObjectsCommand";
import {
  ListProfileObjectTypesCommandInput,
  ListProfileObjectTypesCommandOutput,
} from "../commands/ListProfileObjectTypesCommand";
import {
  ListProfileObjectTypeTemplatesCommandInput,
  ListProfileObjectTypeTemplatesCommandOutput,
} from "../commands/ListProfileObjectTypeTemplatesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "../commands/ListWorkflowsCommand";
import { MergeProfilesCommandInput, MergeProfilesCommandOutput } from "../commands/MergeProfilesCommand";
import { PutIntegrationCommandInput, PutIntegrationCommandOutput } from "../commands/PutIntegrationCommand";
import { PutProfileObjectCommandInput, PutProfileObjectCommandOutput } from "../commands/PutProfileObjectCommand";
import {
  PutProfileObjectTypeCommandInput,
  PutProfileObjectTypeCommandOutput,
} from "../commands/PutProfileObjectTypeCommand";
import { SearchProfilesCommandInput, SearchProfilesCommandOutput } from "../commands/SearchProfilesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateDomainCommandInput, UpdateDomainCommandOutput } from "../commands/UpdateDomainCommand";
import { UpdateProfileCommandInput, UpdateProfileCommandOutput } from "../commands/UpdateProfileCommand";
import { CustomerProfilesServiceException as __BaseException } from "../models/CustomerProfilesServiceException";
import {
  AccessDeniedException,
  AdditionalSearchKey,
  Address,
  AppflowIntegration,
  AppflowIntegrationWorkflowAttributes,
  AppflowIntegrationWorkflowMetrics,
  AppflowIntegrationWorkflowStep,
  AutoMerging,
  BadRequestException,
  Batch,
  ConflictResolution,
  ConnectorOperator,
  Consolidation,
  DomainStats,
  ExportingConfig,
  ExportingLocation,
  FieldSourceProfileIds,
  FlowDefinition,
  FoundByKeyValue,
  IdentityResolutionJob,
  IncrementalPullConfig,
  IntegrationConfig,
  InternalServerException,
  JobSchedule,
  JobStats,
  ListDomainItem,
  ListIntegrationItem,
  ListProfileObjectsItem,
  ListProfileObjectTypeItem,
  ListProfileObjectTypeTemplateItem,
  ListWorkflowsItem,
  MarketoSourceProperties,
  MatchingRequest,
  MatchingResponse,
  MatchItem,
  ObjectFilter,
  ObjectTypeField,
  ObjectTypeKey,
  OperatorPropertiesKeys,
  Profile,
  ResourceNotFoundException,
  S3ExportingConfig,
  S3ExportingLocation,
  S3SourceProperties,
  SalesforceSourceProperties,
  ScheduledTriggerProperties,
  ServiceNowSourceProperties,
  SourceConnectorProperties,
  SourceFlowConfig,
  StandardIdentifier,
  Task,
  ThrottlingException,
  TriggerConfig,
  TriggerProperties,
  UpdateAddress,
  WorkflowAttributes,
  WorkflowMetrics,
  WorkflowStepItem,
  ZendeskSourceProperties,
} from "../models/models_0";

/**
 * serializeAws_restJson1AddProfileKeyCommand
 */
export const se_AddProfileKeyCommand = async (
  input: AddProfileKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}/profiles/keys";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.KeyName != null && { KeyName: input.KeyName }),
    ...(input.ProfileId != null && { ProfileId: input.ProfileId }),
    ...(input.Values != null && { Values: se_requestValueList(input.Values, context) }),
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

/**
 * serializeAws_restJson1CreateDomainCommand
 */
export const se_CreateDomainCommand = async (
  input: CreateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.DeadLetterQueueUrl != null && { DeadLetterQueueUrl: input.DeadLetterQueueUrl }),
    ...(input.DefaultEncryptionKey != null && { DefaultEncryptionKey: input.DefaultEncryptionKey }),
    ...(input.DefaultExpirationDays != null && { DefaultExpirationDays: input.DefaultExpirationDays }),
    ...(input.Matching != null && { Matching: se_MatchingRequest(input.Matching, context) }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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

/**
 * serializeAws_restJson1CreateIntegrationWorkflowCommand
 */
export const se_CreateIntegrationWorkflowCommand = async (
  input: CreateIntegrationWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{DomainName}/workflows/integrations";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.IntegrationConfig != null && {
      IntegrationConfig: se_IntegrationConfig(input.IntegrationConfig, context),
    }),
    ...(input.ObjectTypeName != null && { ObjectTypeName: input.ObjectTypeName }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
    ...(input.WorkflowType != null && { WorkflowType: input.WorkflowType }),
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

/**
 * serializeAws_restJson1CreateProfileCommand
 */
export const se_CreateProfileCommand = async (
  input: CreateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}/profiles";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AccountNumber != null && { AccountNumber: input.AccountNumber }),
    ...(input.AdditionalInformation != null && { AdditionalInformation: input.AdditionalInformation }),
    ...(input.Address != null && { Address: se_Address(input.Address, context) }),
    ...(input.Attributes != null && { Attributes: se_Attributes(input.Attributes, context) }),
    ...(input.BillingAddress != null && { BillingAddress: se_Address(input.BillingAddress, context) }),
    ...(input.BirthDate != null && { BirthDate: input.BirthDate }),
    ...(input.BusinessEmailAddress != null && { BusinessEmailAddress: input.BusinessEmailAddress }),
    ...(input.BusinessName != null && { BusinessName: input.BusinessName }),
    ...(input.BusinessPhoneNumber != null && { BusinessPhoneNumber: input.BusinessPhoneNumber }),
    ...(input.EmailAddress != null && { EmailAddress: input.EmailAddress }),
    ...(input.FirstName != null && { FirstName: input.FirstName }),
    ...(input.Gender != null && { Gender: input.Gender }),
    ...(input.GenderString != null && { GenderString: input.GenderString }),
    ...(input.HomePhoneNumber != null && { HomePhoneNumber: input.HomePhoneNumber }),
    ...(input.LastName != null && { LastName: input.LastName }),
    ...(input.MailingAddress != null && { MailingAddress: se_Address(input.MailingAddress, context) }),
    ...(input.MiddleName != null && { MiddleName: input.MiddleName }),
    ...(input.MobilePhoneNumber != null && { MobilePhoneNumber: input.MobilePhoneNumber }),
    ...(input.PartyType != null && { PartyType: input.PartyType }),
    ...(input.PartyTypeString != null && { PartyTypeString: input.PartyTypeString }),
    ...(input.PersonalEmailAddress != null && { PersonalEmailAddress: input.PersonalEmailAddress }),
    ...(input.PhoneNumber != null && { PhoneNumber: input.PhoneNumber }),
    ...(input.ShippingAddress != null && { ShippingAddress: se_Address(input.ShippingAddress, context) }),
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

/**
 * serializeAws_restJson1DeleteDomainCommand
 */
export const se_DeleteDomainCommand = async (
  input: DeleteDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
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

/**
 * serializeAws_restJson1DeleteIntegrationCommand
 */
export const se_DeleteIntegrationCommand = async (
  input: DeleteIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}/integrations/delete";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Uri != null && { Uri: input.Uri }),
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

/**
 * serializeAws_restJson1DeleteProfileCommand
 */
export const se_DeleteProfileCommand = async (
  input: DeleteProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}/profiles/delete";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ProfileId != null && { ProfileId: input.ProfileId }),
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

/**
 * serializeAws_restJson1DeleteProfileKeyCommand
 */
export const se_DeleteProfileKeyCommand = async (
  input: DeleteProfileKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{DomainName}/profiles/keys/delete";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.KeyName != null && { KeyName: input.KeyName }),
    ...(input.ProfileId != null && { ProfileId: input.ProfileId }),
    ...(input.Values != null && { Values: se_requestValueList(input.Values, context) }),
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

/**
 * serializeAws_restJson1DeleteProfileObjectCommand
 */
export const se_DeleteProfileObjectCommand = async (
  input: DeleteProfileObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{DomainName}/profiles/objects/delete";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ObjectTypeName != null && { ObjectTypeName: input.ObjectTypeName }),
    ...(input.ProfileId != null && { ProfileId: input.ProfileId }),
    ...(input.ProfileObjectUniqueKey != null && { ProfileObjectUniqueKey: input.ProfileObjectUniqueKey }),
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

/**
 * serializeAws_restJson1DeleteProfileObjectTypeCommand
 */
export const se_DeleteProfileObjectTypeCommand = async (
  input: DeleteProfileObjectTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{DomainName}/object-types/{ObjectTypeName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ObjectTypeName",
    () => input.ObjectTypeName!,
    "{ObjectTypeName}",
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

/**
 * serializeAws_restJson1DeleteWorkflowCommand
 */
export const se_DeleteWorkflowCommand = async (
  input: DeleteWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{DomainName}/workflows/{WorkflowId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkflowId", () => input.WorkflowId!, "{WorkflowId}", false);
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

/**
 * serializeAws_restJson1GetAutoMergingPreviewCommand
 */
export const se_GetAutoMergingPreviewCommand = async (
  input: GetAutoMergingPreviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{DomainName}/identity-resolution-jobs/auto-merging-preview";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ConflictResolution != null && {
      ConflictResolution: se_ConflictResolution(input.ConflictResolution, context),
    }),
    ...(input.Consolidation != null && { Consolidation: se_Consolidation(input.Consolidation, context) }),
    ...(input.MinAllowedConfidenceScoreForMerging != null && {
      MinAllowedConfidenceScoreForMerging: __serializeFloat(input.MinAllowedConfidenceScoreForMerging),
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

/**
 * serializeAws_restJson1GetDomainCommand
 */
export const se_GetDomainCommand = async (
  input: GetDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
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
 * serializeAws_restJson1GetIdentityResolutionJobCommand
 */
export const se_GetIdentityResolutionJobCommand = async (
  input: GetIdentityResolutionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{DomainName}/identity-resolution-jobs/{JobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "JobId", () => input.JobId!, "{JobId}", false);
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
 * serializeAws_restJson1GetIntegrationCommand
 */
export const se_GetIntegrationCommand = async (
  input: GetIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}/integrations";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Uri != null && { Uri: input.Uri }),
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

/**
 * serializeAws_restJson1GetMatchesCommand
 */
export const se_GetMatchesCommand = async (
  input: GetMatchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}/matches";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1GetProfileObjectTypeCommand
 */
export const se_GetProfileObjectTypeCommand = async (
  input: GetProfileObjectTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{DomainName}/object-types/{ObjectTypeName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ObjectTypeName",
    () => input.ObjectTypeName!,
    "{ObjectTypeName}",
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
 * serializeAws_restJson1GetProfileObjectTypeTemplateCommand
 */
export const se_GetProfileObjectTypeTemplateCommand = async (
  input: GetProfileObjectTypeTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/templates/{TemplateId}";
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

/**
 * serializeAws_restJson1GetWorkflowCommand
 */
export const se_GetWorkflowCommand = async (
  input: GetWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{DomainName}/workflows/{WorkflowId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkflowId", () => input.WorkflowId!, "{WorkflowId}", false);
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
 * serializeAws_restJson1GetWorkflowStepsCommand
 */
export const se_GetWorkflowStepsCommand = async (
  input: GetWorkflowStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{DomainName}/workflows/{WorkflowId}/steps";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkflowId", () => input.WorkflowId!, "{WorkflowId}", false);
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1ListAccountIntegrationsCommand
 */
export const se_ListAccountIntegrationsCommand = async (
  input: ListAccountIntegrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/integrations";
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "include-hidden": [() => input.IncludeHidden !== void 0, () => input.IncludeHidden!.toString()],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.Uri != null && { Uri: input.Uri }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListDomainsCommand
 */
export const se_ListDomainsCommand = async (
  input: ListDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains";
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1ListIdentityResolutionJobsCommand
 */
export const se_ListIdentityResolutionJobsCommand = async (
  input: ListIdentityResolutionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{DomainName}/identity-resolution-jobs";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1ListIntegrationsCommand
 */
export const se_ListIntegrationsCommand = async (
  input: ListIntegrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}/integrations";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "include-hidden": [() => input.IncludeHidden !== void 0, () => input.IncludeHidden!.toString()],
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
 * serializeAws_restJson1ListProfileObjectsCommand
 */
export const se_ListProfileObjectsCommand = async (
  input: ListProfileObjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}/profiles/objects";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.ObjectFilter != null && { ObjectFilter: se_ObjectFilter(input.ObjectFilter, context) }),
    ...(input.ObjectTypeName != null && { ObjectTypeName: input.ObjectTypeName }),
    ...(input.ProfileId != null && { ProfileId: input.ProfileId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListProfileObjectTypesCommand
 */
export const se_ListProfileObjectTypesCommand = async (
  input: ListProfileObjectTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}/object-types";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1ListProfileObjectTypeTemplatesCommand
 */
export const se_ListProfileObjectTypeTemplatesCommand = async (
  input: ListProfileObjectTypeTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/templates";
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
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
 * serializeAws_restJson1ListWorkflowsCommand
 */
export const se_ListWorkflowsCommand = async (
  input: ListWorkflowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}/workflows";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.QueryEndDate != null && { QueryEndDate: Math.round(input.QueryEndDate.getTime() / 1000) }),
    ...(input.QueryStartDate != null && { QueryStartDate: Math.round(input.QueryStartDate.getTime() / 1000) }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.WorkflowType != null && { WorkflowType: input.WorkflowType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1MergeProfilesCommand
 */
export const se_MergeProfilesCommand = async (
  input: MergeProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{DomainName}/profiles/objects/merge";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.FieldSourceProfileIds != null && {
      FieldSourceProfileIds: se_FieldSourceProfileIds(input.FieldSourceProfileIds, context),
    }),
    ...(input.MainProfileId != null && { MainProfileId: input.MainProfileId }),
    ...(input.ProfileIdsToBeMerged != null && {
      ProfileIdsToBeMerged: se_ProfileIdToBeMergedList(input.ProfileIdsToBeMerged, context),
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

/**
 * serializeAws_restJson1PutIntegrationCommand
 */
export const se_PutIntegrationCommand = async (
  input: PutIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}/integrations";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.FlowDefinition != null && { FlowDefinition: se_FlowDefinition(input.FlowDefinition, context) }),
    ...(input.ObjectTypeName != null && { ObjectTypeName: input.ObjectTypeName }),
    ...(input.ObjectTypeNames != null && { ObjectTypeNames: se_ObjectTypeNames(input.ObjectTypeNames, context) }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
    ...(input.Uri != null && { Uri: input.Uri }),
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

/**
 * serializeAws_restJson1PutProfileObjectCommand
 */
export const se_PutProfileObjectCommand = async (
  input: PutProfileObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}/profiles/objects";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Object != null && { Object: input.Object }),
    ...(input.ObjectTypeName != null && { ObjectTypeName: input.ObjectTypeName }),
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

/**
 * serializeAws_restJson1PutProfileObjectTypeCommand
 */
export const se_PutProfileObjectTypeCommand = async (
  input: PutProfileObjectTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{DomainName}/object-types/{ObjectTypeName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ObjectTypeName",
    () => input.ObjectTypeName!,
    "{ObjectTypeName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.AllowProfileCreation != null && { AllowProfileCreation: input.AllowProfileCreation }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EncryptionKey != null && { EncryptionKey: input.EncryptionKey }),
    ...(input.ExpirationDays != null && { ExpirationDays: input.ExpirationDays }),
    ...(input.Fields != null && { Fields: se_FieldMap(input.Fields, context) }),
    ...(input.Keys != null && { Keys: se_KeyMap(input.Keys, context) }),
    ...(input.SourceLastUpdatedTimestampFormat != null && {
      SourceLastUpdatedTimestampFormat: input.SourceLastUpdatedTimestampFormat,
    }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
    ...(input.TemplateId != null && { TemplateId: input.TemplateId }),
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

/**
 * serializeAws_restJson1SearchProfilesCommand
 */
export const se_SearchProfilesCommand = async (
  input: SearchProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}/profiles/search";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.AdditionalSearchKeys != null && {
      AdditionalSearchKeys: se_additionalSearchKeysList(input.AdditionalSearchKeys, context),
    }),
    ...(input.KeyName != null && { KeyName: input.KeyName }),
    ...(input.LogicalOperator != null && { LogicalOperator: input.LogicalOperator }),
    ...(input.Values != null && { Values: se_requestValueList(input.Values, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
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

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
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

/**
 * serializeAws_restJson1UpdateDomainCommand
 */
export const se_UpdateDomainCommand = async (
  input: UpdateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.DeadLetterQueueUrl != null && { DeadLetterQueueUrl: input.DeadLetterQueueUrl }),
    ...(input.DefaultEncryptionKey != null && { DefaultEncryptionKey: input.DefaultEncryptionKey }),
    ...(input.DefaultExpirationDays != null && { DefaultExpirationDays: input.DefaultExpirationDays }),
    ...(input.Matching != null && { Matching: se_MatchingRequest(input.Matching, context) }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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

/**
 * serializeAws_restJson1UpdateProfileCommand
 */
export const se_UpdateProfileCommand = async (
  input: UpdateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{DomainName}/profiles";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AccountNumber != null && { AccountNumber: input.AccountNumber }),
    ...(input.AdditionalInformation != null && { AdditionalInformation: input.AdditionalInformation }),
    ...(input.Address != null && { Address: se_UpdateAddress(input.Address, context) }),
    ...(input.Attributes != null && { Attributes: se_UpdateAttributes(input.Attributes, context) }),
    ...(input.BillingAddress != null && { BillingAddress: se_UpdateAddress(input.BillingAddress, context) }),
    ...(input.BirthDate != null && { BirthDate: input.BirthDate }),
    ...(input.BusinessEmailAddress != null && { BusinessEmailAddress: input.BusinessEmailAddress }),
    ...(input.BusinessName != null && { BusinessName: input.BusinessName }),
    ...(input.BusinessPhoneNumber != null && { BusinessPhoneNumber: input.BusinessPhoneNumber }),
    ...(input.EmailAddress != null && { EmailAddress: input.EmailAddress }),
    ...(input.FirstName != null && { FirstName: input.FirstName }),
    ...(input.Gender != null && { Gender: input.Gender }),
    ...(input.GenderString != null && { GenderString: input.GenderString }),
    ...(input.HomePhoneNumber != null && { HomePhoneNumber: input.HomePhoneNumber }),
    ...(input.LastName != null && { LastName: input.LastName }),
    ...(input.MailingAddress != null && { MailingAddress: se_UpdateAddress(input.MailingAddress, context) }),
    ...(input.MiddleName != null && { MiddleName: input.MiddleName }),
    ...(input.MobilePhoneNumber != null && { MobilePhoneNumber: input.MobilePhoneNumber }),
    ...(input.PartyType != null && { PartyType: input.PartyType }),
    ...(input.PartyTypeString != null && { PartyTypeString: input.PartyTypeString }),
    ...(input.PersonalEmailAddress != null && { PersonalEmailAddress: input.PersonalEmailAddress }),
    ...(input.PhoneNumber != null && { PhoneNumber: input.PhoneNumber }),
    ...(input.ProfileId != null && { ProfileId: input.ProfileId }),
    ...(input.ShippingAddress != null && { ShippingAddress: se_UpdateAddress(input.ShippingAddress, context) }),
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

/**
 * deserializeAws_restJson1AddProfileKeyCommand
 */
export const de_AddProfileKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddProfileKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AddProfileKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.KeyName != null) {
    contents.KeyName = __expectString(data.KeyName);
  }
  if (data.Values != null) {
    contents.Values = de_requestValueList(data.Values, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AddProfileKeyCommandError
 */
const de_AddProfileKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddProfileKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateDomainCommand
 */
export const de_CreateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDomainCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreatedAt != null) {
    contents.CreatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedAt)));
  }
  if (data.DeadLetterQueueUrl != null) {
    contents.DeadLetterQueueUrl = __expectString(data.DeadLetterQueueUrl);
  }
  if (data.DefaultEncryptionKey != null) {
    contents.DefaultEncryptionKey = __expectString(data.DefaultEncryptionKey);
  }
  if (data.DefaultExpirationDays != null) {
    contents.DefaultExpirationDays = __expectInt32(data.DefaultExpirationDays);
  }
  if (data.DomainName != null) {
    contents.DomainName = __expectString(data.DomainName);
  }
  if (data.LastUpdatedAt != null) {
    contents.LastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedAt)));
  }
  if (data.Matching != null) {
    contents.Matching = de_MatchingResponse(data.Matching, context);
  }
  if (data.Tags != null) {
    contents.Tags = de_TagMap(data.Tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateDomainCommandError
 */
const de_CreateDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateIntegrationWorkflowCommand
 */
export const de_CreateIntegrationWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntegrationWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateIntegrationWorkflowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.WorkflowId != null) {
    contents.WorkflowId = __expectString(data.WorkflowId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateIntegrationWorkflowCommandError
 */
const de_CreateIntegrationWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntegrationWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1CreateProfileCommand
 */
export const de_CreateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ProfileId != null) {
    contents.ProfileId = __expectString(data.ProfileId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateProfileCommandError
 */
const de_CreateProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteDomainCommand
 */
export const de_DeleteDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteDomainCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDomainCommandError
 */
const de_DeleteDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteIntegrationCommand
 */
export const de_DeleteIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteIntegrationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteIntegrationCommandError
 */
const de_DeleteIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteProfileCommand
 */
export const de_DeleteProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteProfileCommandError
 */
const de_DeleteProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteProfileKeyCommand
 */
export const de_DeleteProfileKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteProfileKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteProfileKeyCommandError
 */
const de_DeleteProfileKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteProfileObjectCommand
 */
export const de_DeleteProfileObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteProfileObjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteProfileObjectCommandError
 */
const de_DeleteProfileObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteProfileObjectTypeCommand
 */
export const de_DeleteProfileObjectTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileObjectTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteProfileObjectTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteProfileObjectTypeCommandError
 */
const de_DeleteProfileObjectTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileObjectTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1DeleteWorkflowCommand
 */
export const de_DeleteWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteWorkflowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWorkflowCommandError
 */
const de_DeleteWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetAutoMergingPreviewCommand
 */
export const de_GetAutoMergingPreviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutoMergingPreviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAutoMergingPreviewCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainName != null) {
    contents.DomainName = __expectString(data.DomainName);
  }
  if (data.NumberOfMatchesInSample != null) {
    contents.NumberOfMatchesInSample = __expectLong(data.NumberOfMatchesInSample);
  }
  if (data.NumberOfProfilesInSample != null) {
    contents.NumberOfProfilesInSample = __expectLong(data.NumberOfProfilesInSample);
  }
  if (data.NumberOfProfilesWillBeMerged != null) {
    contents.NumberOfProfilesWillBeMerged = __expectLong(data.NumberOfProfilesWillBeMerged);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAutoMergingPreviewCommandError
 */
const de_GetAutoMergingPreviewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutoMergingPreviewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetDomainCommand
 */
export const de_GetDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDomainCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreatedAt != null) {
    contents.CreatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedAt)));
  }
  if (data.DeadLetterQueueUrl != null) {
    contents.DeadLetterQueueUrl = __expectString(data.DeadLetterQueueUrl);
  }
  if (data.DefaultEncryptionKey != null) {
    contents.DefaultEncryptionKey = __expectString(data.DefaultEncryptionKey);
  }
  if (data.DefaultExpirationDays != null) {
    contents.DefaultExpirationDays = __expectInt32(data.DefaultExpirationDays);
  }
  if (data.DomainName != null) {
    contents.DomainName = __expectString(data.DomainName);
  }
  if (data.LastUpdatedAt != null) {
    contents.LastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedAt)));
  }
  if (data.Matching != null) {
    contents.Matching = de_MatchingResponse(data.Matching, context);
  }
  if (data.Stats != null) {
    contents.Stats = de_DomainStats(data.Stats, context);
  }
  if (data.Tags != null) {
    contents.Tags = de_TagMap(data.Tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDomainCommandError
 */
const de_GetDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetIdentityResolutionJobCommand
 */
export const de_GetIdentityResolutionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityResolutionJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetIdentityResolutionJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AutoMerging != null) {
    contents.AutoMerging = de_AutoMerging(data.AutoMerging, context);
  }
  if (data.DomainName != null) {
    contents.DomainName = __expectString(data.DomainName);
  }
  if (data.ExportingLocation != null) {
    contents.ExportingLocation = de_ExportingLocation(data.ExportingLocation, context);
  }
  if (data.JobEndTime != null) {
    contents.JobEndTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.JobEndTime)));
  }
  if (data.JobExpirationTime != null) {
    contents.JobExpirationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.JobExpirationTime)));
  }
  if (data.JobId != null) {
    contents.JobId = __expectString(data.JobId);
  }
  if (data.JobStartTime != null) {
    contents.JobStartTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.JobStartTime)));
  }
  if (data.JobStats != null) {
    contents.JobStats = de_JobStats(data.JobStats, context);
  }
  if (data.LastUpdatedAt != null) {
    contents.LastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedAt)));
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetIdentityResolutionJobCommandError
 */
const de_GetIdentityResolutionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityResolutionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetIntegrationCommand
 */
export const de_GetIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetIntegrationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreatedAt != null) {
    contents.CreatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedAt)));
  }
  if (data.DomainName != null) {
    contents.DomainName = __expectString(data.DomainName);
  }
  if (data.IsUnstructured != null) {
    contents.IsUnstructured = __expectBoolean(data.IsUnstructured);
  }
  if (data.LastUpdatedAt != null) {
    contents.LastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedAt)));
  }
  if (data.ObjectTypeName != null) {
    contents.ObjectTypeName = __expectString(data.ObjectTypeName);
  }
  if (data.ObjectTypeNames != null) {
    contents.ObjectTypeNames = de_ObjectTypeNames(data.ObjectTypeNames, context);
  }
  if (data.Tags != null) {
    contents.Tags = de_TagMap(data.Tags, context);
  }
  if (data.Uri != null) {
    contents.Uri = __expectString(data.Uri);
  }
  if (data.WorkflowId != null) {
    contents.WorkflowId = __expectString(data.WorkflowId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetIntegrationCommandError
 */
const de_GetIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetMatchesCommand
 */
export const de_GetMatchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMatchesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMatchesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MatchGenerationDate != null) {
    contents.MatchGenerationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.MatchGenerationDate)));
  }
  if (data.Matches != null) {
    contents.Matches = de_MatchesList(data.Matches, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PotentialMatches != null) {
    contents.PotentialMatches = __expectInt32(data.PotentialMatches);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetMatchesCommandError
 */
const de_GetMatchesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMatchesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetProfileObjectTypeCommand
 */
export const de_GetProfileObjectTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileObjectTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetProfileObjectTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AllowProfileCreation != null) {
    contents.AllowProfileCreation = __expectBoolean(data.AllowProfileCreation);
  }
  if (data.CreatedAt != null) {
    contents.CreatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedAt)));
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.EncryptionKey != null) {
    contents.EncryptionKey = __expectString(data.EncryptionKey);
  }
  if (data.ExpirationDays != null) {
    contents.ExpirationDays = __expectInt32(data.ExpirationDays);
  }
  if (data.Fields != null) {
    contents.Fields = de_FieldMap(data.Fields, context);
  }
  if (data.Keys != null) {
    contents.Keys = de_KeyMap(data.Keys, context);
  }
  if (data.LastUpdatedAt != null) {
    contents.LastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedAt)));
  }
  if (data.ObjectTypeName != null) {
    contents.ObjectTypeName = __expectString(data.ObjectTypeName);
  }
  if (data.SourceLastUpdatedTimestampFormat != null) {
    contents.SourceLastUpdatedTimestampFormat = __expectString(data.SourceLastUpdatedTimestampFormat);
  }
  if (data.Tags != null) {
    contents.Tags = de_TagMap(data.Tags, context);
  }
  if (data.TemplateId != null) {
    contents.TemplateId = __expectString(data.TemplateId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetProfileObjectTypeCommandError
 */
const de_GetProfileObjectTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileObjectTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetProfileObjectTypeTemplateCommand
 */
export const de_GetProfileObjectTypeTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileObjectTypeTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetProfileObjectTypeTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AllowProfileCreation != null) {
    contents.AllowProfileCreation = __expectBoolean(data.AllowProfileCreation);
  }
  if (data.Fields != null) {
    contents.Fields = de_FieldMap(data.Fields, context);
  }
  if (data.Keys != null) {
    contents.Keys = de_KeyMap(data.Keys, context);
  }
  if (data.SourceLastUpdatedTimestampFormat != null) {
    contents.SourceLastUpdatedTimestampFormat = __expectString(data.SourceLastUpdatedTimestampFormat);
  }
  if (data.SourceName != null) {
    contents.SourceName = __expectString(data.SourceName);
  }
  if (data.SourceObject != null) {
    contents.SourceObject = __expectString(data.SourceObject);
  }
  if (data.TemplateId != null) {
    contents.TemplateId = __expectString(data.TemplateId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetProfileObjectTypeTemplateCommandError
 */
const de_GetProfileObjectTypeTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileObjectTypeTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetWorkflowCommand
 */
export const de_GetWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetWorkflowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attributes != null) {
    contents.Attributes = de_WorkflowAttributes(data.Attributes, context);
  }
  if (data.ErrorDescription != null) {
    contents.ErrorDescription = __expectString(data.ErrorDescription);
  }
  if (data.LastUpdatedAt != null) {
    contents.LastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedAt)));
  }
  if (data.Metrics != null) {
    contents.Metrics = de_WorkflowMetrics(data.Metrics, context);
  }
  if (data.StartDate != null) {
    contents.StartDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.StartDate)));
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.WorkflowId != null) {
    contents.WorkflowId = __expectString(data.WorkflowId);
  }
  if (data.WorkflowType != null) {
    contents.WorkflowType = __expectString(data.WorkflowType);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkflowCommandError
 */
const de_GetWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1GetWorkflowStepsCommand
 */
export const de_GetWorkflowStepsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowStepsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetWorkflowStepsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = de_WorkflowStepsList(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.WorkflowId != null) {
    contents.WorkflowId = __expectString(data.WorkflowId);
  }
  if (data.WorkflowType != null) {
    contents.WorkflowType = __expectString(data.WorkflowType);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkflowStepsCommandError
 */
const de_GetWorkflowStepsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowStepsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListAccountIntegrationsCommand
 */
export const de_ListAccountIntegrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountIntegrationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAccountIntegrationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = de_IntegrationList(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAccountIntegrationsCommandError
 */
const de_ListAccountIntegrationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountIntegrationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListDomainsCommand
 */
export const de_ListDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDomainsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = de_DomainList(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDomainsCommandError
 */
const de_ListDomainsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListIdentityResolutionJobsCommand
 */
export const de_ListIdentityResolutionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityResolutionJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListIdentityResolutionJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.IdentityResolutionJobsList != null) {
    contents.IdentityResolutionJobsList = de_IdentityResolutionJobsList(data.IdentityResolutionJobsList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListIdentityResolutionJobsCommandError
 */
const de_ListIdentityResolutionJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityResolutionJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListIntegrationsCommand
 */
export const de_ListIntegrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIntegrationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListIntegrationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = de_IntegrationList(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListIntegrationsCommandError
 */
const de_ListIntegrationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIntegrationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListProfileObjectsCommand
 */
export const de_ListProfileObjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfileObjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListProfileObjectsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = de_ProfileObjectList(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListProfileObjectsCommandError
 */
const de_ListProfileObjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfileObjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListProfileObjectTypesCommand
 */
export const de_ListProfileObjectTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfileObjectTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListProfileObjectTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = de_ProfileObjectTypeList(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListProfileObjectTypesCommandError
 */
const de_ListProfileObjectTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfileObjectTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListProfileObjectTypeTemplatesCommand
 */
export const de_ListProfileObjectTypeTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfileObjectTypeTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListProfileObjectTypeTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = de_ProfileObjectTypeTemplateList(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListProfileObjectTypeTemplatesCommandError
 */
const de_ListProfileObjectTypeTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfileObjectTypeTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1ListWorkflowsCommand
 */
export const de_ListWorkflowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListWorkflowsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = de_WorkflowList(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkflowsCommandError
 */
const de_ListWorkflowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1MergeProfilesCommand
 */
export const de_MergeProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergeProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_MergeProfilesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

/**
 * deserializeAws_restJson1MergeProfilesCommandError
 */
const de_MergeProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergeProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1PutIntegrationCommand
 */
export const de_PutIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutIntegrationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreatedAt != null) {
    contents.CreatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedAt)));
  }
  if (data.DomainName != null) {
    contents.DomainName = __expectString(data.DomainName);
  }
  if (data.IsUnstructured != null) {
    contents.IsUnstructured = __expectBoolean(data.IsUnstructured);
  }
  if (data.LastUpdatedAt != null) {
    contents.LastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedAt)));
  }
  if (data.ObjectTypeName != null) {
    contents.ObjectTypeName = __expectString(data.ObjectTypeName);
  }
  if (data.ObjectTypeNames != null) {
    contents.ObjectTypeNames = de_ObjectTypeNames(data.ObjectTypeNames, context);
  }
  if (data.Tags != null) {
    contents.Tags = de_TagMap(data.Tags, context);
  }
  if (data.Uri != null) {
    contents.Uri = __expectString(data.Uri);
  }
  if (data.WorkflowId != null) {
    contents.WorkflowId = __expectString(data.WorkflowId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutIntegrationCommandError
 */
const de_PutIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1PutProfileObjectCommand
 */
export const de_PutProfileObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProfileObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutProfileObjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ProfileObjectUniqueKey != null) {
    contents.ProfileObjectUniqueKey = __expectString(data.ProfileObjectUniqueKey);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutProfileObjectCommandError
 */
const de_PutProfileObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProfileObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1PutProfileObjectTypeCommand
 */
export const de_PutProfileObjectTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProfileObjectTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutProfileObjectTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AllowProfileCreation != null) {
    contents.AllowProfileCreation = __expectBoolean(data.AllowProfileCreation);
  }
  if (data.CreatedAt != null) {
    contents.CreatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedAt)));
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.EncryptionKey != null) {
    contents.EncryptionKey = __expectString(data.EncryptionKey);
  }
  if (data.ExpirationDays != null) {
    contents.ExpirationDays = __expectInt32(data.ExpirationDays);
  }
  if (data.Fields != null) {
    contents.Fields = de_FieldMap(data.Fields, context);
  }
  if (data.Keys != null) {
    contents.Keys = de_KeyMap(data.Keys, context);
  }
  if (data.LastUpdatedAt != null) {
    contents.LastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedAt)));
  }
  if (data.ObjectTypeName != null) {
    contents.ObjectTypeName = __expectString(data.ObjectTypeName);
  }
  if (data.SourceLastUpdatedTimestampFormat != null) {
    contents.SourceLastUpdatedTimestampFormat = __expectString(data.SourceLastUpdatedTimestampFormat);
  }
  if (data.Tags != null) {
    contents.Tags = de_TagMap(data.Tags, context);
  }
  if (data.TemplateId != null) {
    contents.TemplateId = __expectString(data.TemplateId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutProfileObjectTypeCommandError
 */
const de_PutProfileObjectTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProfileObjectTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1SearchProfilesCommand
 */
export const de_SearchProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SearchProfilesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = de_ProfileList(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SearchProfilesCommandError
 */
const de_SearchProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateDomainCommand
 */
export const de_UpdateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDomainCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreatedAt != null) {
    contents.CreatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedAt)));
  }
  if (data.DeadLetterQueueUrl != null) {
    contents.DeadLetterQueueUrl = __expectString(data.DeadLetterQueueUrl);
  }
  if (data.DefaultEncryptionKey != null) {
    contents.DefaultEncryptionKey = __expectString(data.DefaultEncryptionKey);
  }
  if (data.DefaultExpirationDays != null) {
    contents.DefaultExpirationDays = __expectInt32(data.DefaultExpirationDays);
  }
  if (data.DomainName != null) {
    contents.DomainName = __expectString(data.DomainName);
  }
  if (data.LastUpdatedAt != null) {
    contents.LastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedAt)));
  }
  if (data.Matching != null) {
    contents.Matching = de_MatchingResponse(data.Matching, context);
  }
  if (data.Tags != null) {
    contents.Tags = de_TagMap(data.Tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDomainCommandError
 */
const de_UpdateDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_restJson1UpdateProfileCommand
 */
export const de_UpdateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ProfileId != null) {
    contents.ProfileId = __expectString(data.ProfileId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateProfileCommandError
 */
const de_UpdateProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
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

/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new BadRequestException({
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceNotFoundException({
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AdditionalSearchKey
 */
const se_AdditionalSearchKey = (input: AdditionalSearchKey, context: __SerdeContext): any => {
  return {
    ...(input.KeyName != null && { KeyName: input.KeyName }),
    ...(input.Values != null && { Values: se_requestValueList(input.Values, context) }),
  };
};

/**
 * serializeAws_restJson1additionalSearchKeysList
 */
const se_additionalSearchKeysList = (input: AdditionalSearchKey[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AdditionalSearchKey(entry, context);
    });
};

/**
 * serializeAws_restJson1Address
 */
const se_Address = (input: Address, context: __SerdeContext): any => {
  return {
    ...(input.Address1 != null && { Address1: input.Address1 }),
    ...(input.Address2 != null && { Address2: input.Address2 }),
    ...(input.Address3 != null && { Address3: input.Address3 }),
    ...(input.Address4 != null && { Address4: input.Address4 }),
    ...(input.City != null && { City: input.City }),
    ...(input.Country != null && { Country: input.Country }),
    ...(input.County != null && { County: input.County }),
    ...(input.PostalCode != null && { PostalCode: input.PostalCode }),
    ...(input.Province != null && { Province: input.Province }),
    ...(input.State != null && { State: input.State }),
  };
};

/**
 * serializeAws_restJson1AppflowIntegration
 */
const se_AppflowIntegration = (input: AppflowIntegration, context: __SerdeContext): any => {
  return {
    ...(input.Batches != null && { Batches: se_Batches(input.Batches, context) }),
    ...(input.FlowDefinition != null && { FlowDefinition: se_FlowDefinition(input.FlowDefinition, context) }),
  };
};

/**
 * serializeAws_restJson1Attributes
 */
const se_Attributes = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1AttributeSourceIdMap
 */
const se_AttributeSourceIdMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1AutoMerging
 */
const se_AutoMerging = (input: AutoMerging, context: __SerdeContext): any => {
  return {
    ...(input.ConflictResolution != null && {
      ConflictResolution: se_ConflictResolution(input.ConflictResolution, context),
    }),
    ...(input.Consolidation != null && { Consolidation: se_Consolidation(input.Consolidation, context) }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.MinAllowedConfidenceScoreForMerging != null && {
      MinAllowedConfidenceScoreForMerging: __serializeFloat(input.MinAllowedConfidenceScoreForMerging),
    }),
  };
};

/**
 * serializeAws_restJson1Batch
 */
const se_Batch = (input: Batch, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_restJson1Batches
 */
const se_Batches = (input: Batch[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Batch(entry, context);
    });
};

/**
 * serializeAws_restJson1ConflictResolution
 */
const se_ConflictResolution = (input: ConflictResolution, context: __SerdeContext): any => {
  return {
    ...(input.ConflictResolvingModel != null && { ConflictResolvingModel: input.ConflictResolvingModel }),
    ...(input.SourceName != null && { SourceName: input.SourceName }),
  };
};

/**
 * serializeAws_restJson1ConnectorOperator
 */
const se_ConnectorOperator = (input: ConnectorOperator, context: __SerdeContext): any => {
  return {
    ...(input.Marketo != null && { Marketo: input.Marketo }),
    ...(input.S3 != null && { S3: input.S3 }),
    ...(input.Salesforce != null && { Salesforce: input.Salesforce }),
    ...(input.ServiceNow != null && { ServiceNow: input.ServiceNow }),
    ...(input.Zendesk != null && { Zendesk: input.Zendesk }),
  };
};

/**
 * serializeAws_restJson1Consolidation
 */
const se_Consolidation = (input: Consolidation, context: __SerdeContext): any => {
  return {
    ...(input.MatchingAttributesList != null && {
      MatchingAttributesList: se_MatchingAttributesList(input.MatchingAttributesList, context),
    }),
  };
};

/**
 * serializeAws_restJson1ExportingConfig
 */
const se_ExportingConfig = (input: ExportingConfig, context: __SerdeContext): any => {
  return {
    ...(input.S3Exporting != null && { S3Exporting: se_S3ExportingConfig(input.S3Exporting, context) }),
  };
};

/**
 * serializeAws_restJson1FieldMap
 */
const se_FieldMap = (input: Record<string, ObjectTypeField>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ObjectTypeField(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1FieldNameList
 */
const se_FieldNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1FieldSourceProfileIds
 */
const se_FieldSourceProfileIds = (input: FieldSourceProfileIds, context: __SerdeContext): any => {
  return {
    ...(input.AccountNumber != null && { AccountNumber: input.AccountNumber }),
    ...(input.AdditionalInformation != null && { AdditionalInformation: input.AdditionalInformation }),
    ...(input.Address != null && { Address: input.Address }),
    ...(input.Attributes != null && { Attributes: se_AttributeSourceIdMap(input.Attributes, context) }),
    ...(input.BillingAddress != null && { BillingAddress: input.BillingAddress }),
    ...(input.BirthDate != null && { BirthDate: input.BirthDate }),
    ...(input.BusinessEmailAddress != null && { BusinessEmailAddress: input.BusinessEmailAddress }),
    ...(input.BusinessName != null && { BusinessName: input.BusinessName }),
    ...(input.BusinessPhoneNumber != null && { BusinessPhoneNumber: input.BusinessPhoneNumber }),
    ...(input.EmailAddress != null && { EmailAddress: input.EmailAddress }),
    ...(input.FirstName != null && { FirstName: input.FirstName }),
    ...(input.Gender != null && { Gender: input.Gender }),
    ...(input.HomePhoneNumber != null && { HomePhoneNumber: input.HomePhoneNumber }),
    ...(input.LastName != null && { LastName: input.LastName }),
    ...(input.MailingAddress != null && { MailingAddress: input.MailingAddress }),
    ...(input.MiddleName != null && { MiddleName: input.MiddleName }),
    ...(input.MobilePhoneNumber != null && { MobilePhoneNumber: input.MobilePhoneNumber }),
    ...(input.PartyType != null && { PartyType: input.PartyType }),
    ...(input.PersonalEmailAddress != null && { PersonalEmailAddress: input.PersonalEmailAddress }),
    ...(input.PhoneNumber != null && { PhoneNumber: input.PhoneNumber }),
    ...(input.ShippingAddress != null && { ShippingAddress: input.ShippingAddress }),
  };
};

/**
 * serializeAws_restJson1FlowDefinition
 */
const se_FlowDefinition = (input: FlowDefinition, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.FlowName != null && { FlowName: input.FlowName }),
    ...(input.KmsArn != null && { KmsArn: input.KmsArn }),
    ...(input.SourceFlowConfig != null && { SourceFlowConfig: se_SourceFlowConfig(input.SourceFlowConfig, context) }),
    ...(input.Tasks != null && { Tasks: se_Tasks(input.Tasks, context) }),
    ...(input.TriggerConfig != null && { TriggerConfig: se_TriggerConfig(input.TriggerConfig, context) }),
  };
};

/**
 * serializeAws_restJson1IncrementalPullConfig
 */
const se_IncrementalPullConfig = (input: IncrementalPullConfig, context: __SerdeContext): any => {
  return {
    ...(input.DatetimeTypeFieldName != null && { DatetimeTypeFieldName: input.DatetimeTypeFieldName }),
  };
};

/**
 * serializeAws_restJson1IntegrationConfig
 */
const se_IntegrationConfig = (input: IntegrationConfig, context: __SerdeContext): any => {
  return {
    ...(input.AppflowIntegration != null && {
      AppflowIntegration: se_AppflowIntegration(input.AppflowIntegration, context),
    }),
  };
};

/**
 * serializeAws_restJson1JobSchedule
 */
const se_JobSchedule = (input: JobSchedule, context: __SerdeContext): any => {
  return {
    ...(input.DayOfTheWeek != null && { DayOfTheWeek: input.DayOfTheWeek }),
    ...(input.Time != null && { Time: input.Time }),
  };
};

/**
 * serializeAws_restJson1KeyMap
 */
const se_KeyMap = (input: Record<string, ObjectTypeKey[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ObjectTypeKeyList(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1MarketoSourceProperties
 */
const se_MarketoSourceProperties = (input: MarketoSourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.Object != null && { Object: input.Object }),
  };
};

/**
 * serializeAws_restJson1MatchingAttributes
 */
const se_MatchingAttributes = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1MatchingAttributesList
 */
const se_MatchingAttributesList = (input: string[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MatchingAttributes(entry, context);
    });
};

/**
 * serializeAws_restJson1MatchingRequest
 */
const se_MatchingRequest = (input: MatchingRequest, context: __SerdeContext): any => {
  return {
    ...(input.AutoMerging != null && { AutoMerging: se_AutoMerging(input.AutoMerging, context) }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.ExportingConfig != null && { ExportingConfig: se_ExportingConfig(input.ExportingConfig, context) }),
    ...(input.JobSchedule != null && { JobSchedule: se_JobSchedule(input.JobSchedule, context) }),
  };
};

/**
 * serializeAws_restJson1ObjectFilter
 */
const se_ObjectFilter = (input: ObjectFilter, context: __SerdeContext): any => {
  return {
    ...(input.KeyName != null && { KeyName: input.KeyName }),
    ...(input.Values != null && { Values: se_requestValueList(input.Values, context) }),
  };
};

/**
 * serializeAws_restJson1ObjectTypeField
 */
const se_ObjectTypeField = (input: ObjectTypeField, context: __SerdeContext): any => {
  return {
    ...(input.ContentType != null && { ContentType: input.ContentType }),
    ...(input.Source != null && { Source: input.Source }),
    ...(input.Target != null && { Target: input.Target }),
  };
};

/**
 * serializeAws_restJson1ObjectTypeKey
 */
const se_ObjectTypeKey = (input: ObjectTypeKey, context: __SerdeContext): any => {
  return {
    ...(input.FieldNames != null && { FieldNames: se_FieldNameList(input.FieldNames, context) }),
    ...(input.StandardIdentifiers != null && {
      StandardIdentifiers: se_StandardIdentifierList(input.StandardIdentifiers, context),
    }),
  };
};

/**
 * serializeAws_restJson1ObjectTypeKeyList
 */
const se_ObjectTypeKeyList = (input: ObjectTypeKey[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ObjectTypeKey(entry, context);
    });
};

/**
 * serializeAws_restJson1ObjectTypeNames
 */
const se_ObjectTypeNames = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ProfileIdToBeMergedList
 */
const se_ProfileIdToBeMergedList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1requestValueList
 */
const se_requestValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1S3ExportingConfig
 */
const se_S3ExportingConfig = (input: S3ExportingConfig, context: __SerdeContext): any => {
  return {
    ...(input.S3BucketName != null && { S3BucketName: input.S3BucketName }),
    ...(input.S3KeyName != null && { S3KeyName: input.S3KeyName }),
  };
};

/**
 * serializeAws_restJson1S3SourceProperties
 */
const se_S3SourceProperties = (input: S3SourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.BucketName != null && { BucketName: input.BucketName }),
    ...(input.BucketPrefix != null && { BucketPrefix: input.BucketPrefix }),
  };
};

/**
 * serializeAws_restJson1SalesforceSourceProperties
 */
const se_SalesforceSourceProperties = (input: SalesforceSourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.EnableDynamicFieldUpdate != null && { EnableDynamicFieldUpdate: input.EnableDynamicFieldUpdate }),
    ...(input.IncludeDeletedRecords != null && { IncludeDeletedRecords: input.IncludeDeletedRecords }),
    ...(input.Object != null && { Object: input.Object }),
  };
};

/**
 * serializeAws_restJson1ScheduledTriggerProperties
 */
const se_ScheduledTriggerProperties = (input: ScheduledTriggerProperties, context: __SerdeContext): any => {
  return {
    ...(input.DataPullMode != null && { DataPullMode: input.DataPullMode }),
    ...(input.FirstExecutionFrom != null && {
      FirstExecutionFrom: Math.round(input.FirstExecutionFrom.getTime() / 1000),
    }),
    ...(input.ScheduleEndTime != null && { ScheduleEndTime: Math.round(input.ScheduleEndTime.getTime() / 1000) }),
    ...(input.ScheduleExpression != null && { ScheduleExpression: input.ScheduleExpression }),
    ...(input.ScheduleOffset != null && { ScheduleOffset: input.ScheduleOffset }),
    ...(input.ScheduleStartTime != null && { ScheduleStartTime: Math.round(input.ScheduleStartTime.getTime() / 1000) }),
    ...(input.Timezone != null && { Timezone: input.Timezone }),
  };
};

/**
 * serializeAws_restJson1ServiceNowSourceProperties
 */
const se_ServiceNowSourceProperties = (input: ServiceNowSourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.Object != null && { Object: input.Object }),
  };
};

/**
 * serializeAws_restJson1SourceConnectorProperties
 */
const se_SourceConnectorProperties = (input: SourceConnectorProperties, context: __SerdeContext): any => {
  return {
    ...(input.Marketo != null && { Marketo: se_MarketoSourceProperties(input.Marketo, context) }),
    ...(input.S3 != null && { S3: se_S3SourceProperties(input.S3, context) }),
    ...(input.Salesforce != null && { Salesforce: se_SalesforceSourceProperties(input.Salesforce, context) }),
    ...(input.ServiceNow != null && { ServiceNow: se_ServiceNowSourceProperties(input.ServiceNow, context) }),
    ...(input.Zendesk != null && { Zendesk: se_ZendeskSourceProperties(input.Zendesk, context) }),
  };
};

/**
 * serializeAws_restJson1SourceFields
 */
const se_SourceFields = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SourceFlowConfig
 */
const se_SourceFlowConfig = (input: SourceFlowConfig, context: __SerdeContext): any => {
  return {
    ...(input.ConnectorProfileName != null && { ConnectorProfileName: input.ConnectorProfileName }),
    ...(input.ConnectorType != null && { ConnectorType: input.ConnectorType }),
    ...(input.IncrementalPullConfig != null && {
      IncrementalPullConfig: se_IncrementalPullConfig(input.IncrementalPullConfig, context),
    }),
    ...(input.SourceConnectorProperties != null && {
      SourceConnectorProperties: se_SourceConnectorProperties(input.SourceConnectorProperties, context),
    }),
  };
};

/**
 * serializeAws_restJson1StandardIdentifierList
 */
const se_StandardIdentifierList = (input: (StandardIdentifier | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1Task
 */
const se_Task = (input: Task, context: __SerdeContext): any => {
  return {
    ...(input.ConnectorOperator != null && {
      ConnectorOperator: se_ConnectorOperator(input.ConnectorOperator, context),
    }),
    ...(input.DestinationField != null && { DestinationField: input.DestinationField }),
    ...(input.SourceFields != null && { SourceFields: se_SourceFields(input.SourceFields, context) }),
    ...(input.TaskProperties != null && { TaskProperties: se_TaskPropertiesMap(input.TaskProperties, context) }),
    ...(input.TaskType != null && { TaskType: input.TaskType }),
  };
};

/**
 * serializeAws_restJson1TaskPropertiesMap
 */
const se_TaskPropertiesMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: Record<string, any>, [key, value]: [OperatorPropertiesKeys | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = value;
      return acc;
    },
    {}
  );
};

/**
 * serializeAws_restJson1Tasks
 */
const se_Tasks = (input: Task[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Task(entry, context);
    });
};

/**
 * serializeAws_restJson1TriggerConfig
 */
const se_TriggerConfig = (input: TriggerConfig, context: __SerdeContext): any => {
  return {
    ...(input.TriggerProperties != null && {
      TriggerProperties: se_TriggerProperties(input.TriggerProperties, context),
    }),
    ...(input.TriggerType != null && { TriggerType: input.TriggerType }),
  };
};

/**
 * serializeAws_restJson1TriggerProperties
 */
const se_TriggerProperties = (input: TriggerProperties, context: __SerdeContext): any => {
  return {
    ...(input.Scheduled != null && { Scheduled: se_ScheduledTriggerProperties(input.Scheduled, context) }),
  };
};

/**
 * serializeAws_restJson1UpdateAddress
 */
const se_UpdateAddress = (input: UpdateAddress, context: __SerdeContext): any => {
  return {
    ...(input.Address1 != null && { Address1: input.Address1 }),
    ...(input.Address2 != null && { Address2: input.Address2 }),
    ...(input.Address3 != null && { Address3: input.Address3 }),
    ...(input.Address4 != null && { Address4: input.Address4 }),
    ...(input.City != null && { City: input.City }),
    ...(input.Country != null && { Country: input.Country }),
    ...(input.County != null && { County: input.County }),
    ...(input.PostalCode != null && { PostalCode: input.PostalCode }),
    ...(input.Province != null && { Province: input.Province }),
    ...(input.State != null && { State: input.State }),
  };
};

/**
 * serializeAws_restJson1UpdateAttributes
 */
const se_UpdateAttributes = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ZendeskSourceProperties
 */
const se_ZendeskSourceProperties = (input: ZendeskSourceProperties, context: __SerdeContext): any => {
  return {
    ...(input.Object != null && { Object: input.Object }),
  };
};

/**
 * deserializeAws_restJson1Address
 */
const de_Address = (output: any, context: __SerdeContext): Address => {
  return {
    Address1: __expectString(output.Address1),
    Address2: __expectString(output.Address2),
    Address3: __expectString(output.Address3),
    Address4: __expectString(output.Address4),
    City: __expectString(output.City),
    Country: __expectString(output.Country),
    County: __expectString(output.County),
    PostalCode: __expectString(output.PostalCode),
    Province: __expectString(output.Province),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_restJson1AppflowIntegrationWorkflowAttributes
 */
const de_AppflowIntegrationWorkflowAttributes = (
  output: any,
  context: __SerdeContext
): AppflowIntegrationWorkflowAttributes => {
  return {
    ConnectorProfileName: __expectString(output.ConnectorProfileName),
    RoleArn: __expectString(output.RoleArn),
    SourceConnectorType: __expectString(output.SourceConnectorType),
  } as any;
};

/**
 * deserializeAws_restJson1AppflowIntegrationWorkflowMetrics
 */
const de_AppflowIntegrationWorkflowMetrics = (
  output: any,
  context: __SerdeContext
): AppflowIntegrationWorkflowMetrics => {
  return {
    RecordsProcessed: __expectLong(output.RecordsProcessed),
    StepsCompleted: __expectLong(output.StepsCompleted),
    TotalSteps: __expectLong(output.TotalSteps),
  } as any;
};

/**
 * deserializeAws_restJson1AppflowIntegrationWorkflowStep
 */
const de_AppflowIntegrationWorkflowStep = (output: any, context: __SerdeContext): AppflowIntegrationWorkflowStep => {
  return {
    BatchRecordsEndTime: __expectString(output.BatchRecordsEndTime),
    BatchRecordsStartTime: __expectString(output.BatchRecordsStartTime),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    ExecutionMessage: __expectString(output.ExecutionMessage),
    FlowName: __expectString(output.FlowName),
    LastUpdatedAt:
      output.LastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedAt)))
        : undefined,
    RecordsProcessed: __expectLong(output.RecordsProcessed),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1Attributes
 */
const de_Attributes = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1AutoMerging
 */
const de_AutoMerging = (output: any, context: __SerdeContext): AutoMerging => {
  return {
    ConflictResolution:
      output.ConflictResolution != null ? de_ConflictResolution(output.ConflictResolution, context) : undefined,
    Consolidation: output.Consolidation != null ? de_Consolidation(output.Consolidation, context) : undefined,
    Enabled: __expectBoolean(output.Enabled),
    MinAllowedConfidenceScoreForMerging: __limitedParseDouble(output.MinAllowedConfidenceScoreForMerging),
  } as any;
};

/**
 * deserializeAws_restJson1ConflictResolution
 */
const de_ConflictResolution = (output: any, context: __SerdeContext): ConflictResolution => {
  return {
    ConflictResolvingModel: __expectString(output.ConflictResolvingModel),
    SourceName: __expectString(output.SourceName),
  } as any;
};

/**
 * deserializeAws_restJson1Consolidation
 */
const de_Consolidation = (output: any, context: __SerdeContext): Consolidation => {
  return {
    MatchingAttributesList:
      output.MatchingAttributesList != null
        ? de_MatchingAttributesList(output.MatchingAttributesList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DomainList
 */
const de_DomainList = (output: any, context: __SerdeContext): ListDomainItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListDomainItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DomainStats
 */
const de_DomainStats = (output: any, context: __SerdeContext): DomainStats => {
  return {
    MeteringProfileCount: __expectLong(output.MeteringProfileCount),
    ObjectCount: __expectLong(output.ObjectCount),
    ProfileCount: __expectLong(output.ProfileCount),
    TotalSize: __expectLong(output.TotalSize),
  } as any;
};

/**
 * deserializeAws_restJson1ExportingConfig
 */
const de_ExportingConfig = (output: any, context: __SerdeContext): ExportingConfig => {
  return {
    S3Exporting: output.S3Exporting != null ? de_S3ExportingConfig(output.S3Exporting, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ExportingLocation
 */
const de_ExportingLocation = (output: any, context: __SerdeContext): ExportingLocation => {
  return {
    S3Exporting: output.S3Exporting != null ? de_S3ExportingLocation(output.S3Exporting, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FieldMap
 */
const de_FieldMap = (output: any, context: __SerdeContext): Record<string, ObjectTypeField> => {
  return Object.entries(output).reduce((acc: Record<string, ObjectTypeField>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ObjectTypeField(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1FieldNameList
 */
const de_FieldNameList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_restJson1FoundByKeyValue
 */
const de_FoundByKeyValue = (output: any, context: __SerdeContext): FoundByKeyValue => {
  return {
    KeyName: __expectString(output.KeyName),
    Values: output.Values != null ? de_requestValueList(output.Values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1foundByList
 */
const de_foundByList = (output: any, context: __SerdeContext): FoundByKeyValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FoundByKeyValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IdentityResolutionJob
 */
const de_IdentityResolutionJob = (output: any, context: __SerdeContext): IdentityResolutionJob => {
  return {
    DomainName: __expectString(output.DomainName),
    ExportingLocation:
      output.ExportingLocation != null ? de_ExportingLocation(output.ExportingLocation, context) : undefined,
    JobEndTime:
      output.JobEndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.JobEndTime))) : undefined,
    JobId: __expectString(output.JobId),
    JobStartTime:
      output.JobStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.JobStartTime)))
        : undefined,
    JobStats: output.JobStats != null ? de_JobStats(output.JobStats, context) : undefined,
    Message: __expectString(output.Message),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1IdentityResolutionJobsList
 */
const de_IdentityResolutionJobsList = (output: any, context: __SerdeContext): IdentityResolutionJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IdentityResolutionJob(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IntegrationList
 */
const de_IntegrationList = (output: any, context: __SerdeContext): ListIntegrationItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListIntegrationItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1JobSchedule
 */
const de_JobSchedule = (output: any, context: __SerdeContext): JobSchedule => {
  return {
    DayOfTheWeek: __expectString(output.DayOfTheWeek),
    Time: __expectString(output.Time),
  } as any;
};

/**
 * deserializeAws_restJson1JobStats
 */
const de_JobStats = (output: any, context: __SerdeContext): JobStats => {
  return {
    NumberOfMatchesFound: __expectLong(output.NumberOfMatchesFound),
    NumberOfMergesDone: __expectLong(output.NumberOfMergesDone),
    NumberOfProfilesReviewed: __expectLong(output.NumberOfProfilesReviewed),
  } as any;
};

/**
 * deserializeAws_restJson1KeyMap
 */
const de_KeyMap = (output: any, context: __SerdeContext): Record<string, ObjectTypeKey[]> => {
  return Object.entries(output).reduce((acc: Record<string, ObjectTypeKey[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ObjectTypeKeyList(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ListDomainItem
 */
const de_ListDomainItem = (output: any, context: __SerdeContext): ListDomainItem => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DomainName: __expectString(output.DomainName),
    LastUpdatedAt:
      output.LastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedAt)))
        : undefined,
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ListIntegrationItem
 */
const de_ListIntegrationItem = (output: any, context: __SerdeContext): ListIntegrationItem => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DomainName: __expectString(output.DomainName),
    IsUnstructured: __expectBoolean(output.IsUnstructured),
    LastUpdatedAt:
      output.LastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedAt)))
        : undefined,
    ObjectTypeName: __expectString(output.ObjectTypeName),
    ObjectTypeNames: output.ObjectTypeNames != null ? de_ObjectTypeNames(output.ObjectTypeNames, context) : undefined,
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
    Uri: __expectString(output.Uri),
    WorkflowId: __expectString(output.WorkflowId),
  } as any;
};

/**
 * deserializeAws_restJson1ListProfileObjectsItem
 */
const de_ListProfileObjectsItem = (output: any, context: __SerdeContext): ListProfileObjectsItem => {
  return {
    Object: __expectString(output.Object),
    ObjectTypeName: __expectString(output.ObjectTypeName),
    ProfileObjectUniqueKey: __expectString(output.ProfileObjectUniqueKey),
  } as any;
};

/**
 * deserializeAws_restJson1ListProfileObjectTypeItem
 */
const de_ListProfileObjectTypeItem = (output: any, context: __SerdeContext): ListProfileObjectTypeItem => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    LastUpdatedAt:
      output.LastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedAt)))
        : undefined,
    ObjectTypeName: __expectString(output.ObjectTypeName),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ListProfileObjectTypeTemplateItem
 */
const de_ListProfileObjectTypeTemplateItem = (
  output: any,
  context: __SerdeContext
): ListProfileObjectTypeTemplateItem => {
  return {
    SourceName: __expectString(output.SourceName),
    SourceObject: __expectString(output.SourceObject),
    TemplateId: __expectString(output.TemplateId),
  } as any;
};

/**
 * deserializeAws_restJson1ListWorkflowsItem
 */
const de_ListWorkflowsItem = (output: any, context: __SerdeContext): ListWorkflowsItem => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    LastUpdatedAt:
      output.LastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedAt)))
        : undefined,
    Status: __expectString(output.Status),
    StatusDescription: __expectString(output.StatusDescription),
    WorkflowId: __expectString(output.WorkflowId),
    WorkflowType: __expectString(output.WorkflowType),
  } as any;
};

/**
 * deserializeAws_restJson1MatchesList
 */
const de_MatchesList = (output: any, context: __SerdeContext): MatchItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MatchItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MatchingAttributes
 */
const de_MatchingAttributes = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_restJson1MatchingAttributesList
 */
const de_MatchingAttributesList = (output: any, context: __SerdeContext): string[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MatchingAttributes(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MatchingResponse
 */
const de_MatchingResponse = (output: any, context: __SerdeContext): MatchingResponse => {
  return {
    AutoMerging: output.AutoMerging != null ? de_AutoMerging(output.AutoMerging, context) : undefined,
    Enabled: __expectBoolean(output.Enabled),
    ExportingConfig: output.ExportingConfig != null ? de_ExportingConfig(output.ExportingConfig, context) : undefined,
    JobSchedule: output.JobSchedule != null ? de_JobSchedule(output.JobSchedule, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MatchItem
 */
const de_MatchItem = (output: any, context: __SerdeContext): MatchItem => {
  return {
    ConfidenceScore: __limitedParseDouble(output.ConfidenceScore),
    MatchId: __expectString(output.MatchId),
    ProfileIds: output.ProfileIds != null ? de_ProfileIdList(output.ProfileIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ObjectTypeField
 */
const de_ObjectTypeField = (output: any, context: __SerdeContext): ObjectTypeField => {
  return {
    ContentType: __expectString(output.ContentType),
    Source: __expectString(output.Source),
    Target: __expectString(output.Target),
  } as any;
};

/**
 * deserializeAws_restJson1ObjectTypeKey
 */
const de_ObjectTypeKey = (output: any, context: __SerdeContext): ObjectTypeKey => {
  return {
    FieldNames: output.FieldNames != null ? de_FieldNameList(output.FieldNames, context) : undefined,
    StandardIdentifiers:
      output.StandardIdentifiers != null ? de_StandardIdentifierList(output.StandardIdentifiers, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ObjectTypeKeyList
 */
const de_ObjectTypeKeyList = (output: any, context: __SerdeContext): ObjectTypeKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ObjectTypeKey(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ObjectTypeNames
 */
const de_ObjectTypeNames = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Profile
 */
const de_Profile = (output: any, context: __SerdeContext): Profile => {
  return {
    AccountNumber: __expectString(output.AccountNumber),
    AdditionalInformation: __expectString(output.AdditionalInformation),
    Address: output.Address != null ? de_Address(output.Address, context) : undefined,
    Attributes: output.Attributes != null ? de_Attributes(output.Attributes, context) : undefined,
    BillingAddress: output.BillingAddress != null ? de_Address(output.BillingAddress, context) : undefined,
    BirthDate: __expectString(output.BirthDate),
    BusinessEmailAddress: __expectString(output.BusinessEmailAddress),
    BusinessName: __expectString(output.BusinessName),
    BusinessPhoneNumber: __expectString(output.BusinessPhoneNumber),
    EmailAddress: __expectString(output.EmailAddress),
    FirstName: __expectString(output.FirstName),
    FoundByItems: output.FoundByItems != null ? de_foundByList(output.FoundByItems, context) : undefined,
    Gender: __expectString(output.Gender),
    GenderString: __expectString(output.GenderString),
    HomePhoneNumber: __expectString(output.HomePhoneNumber),
    LastName: __expectString(output.LastName),
    MailingAddress: output.MailingAddress != null ? de_Address(output.MailingAddress, context) : undefined,
    MiddleName: __expectString(output.MiddleName),
    MobilePhoneNumber: __expectString(output.MobilePhoneNumber),
    PartyType: __expectString(output.PartyType),
    PartyTypeString: __expectString(output.PartyTypeString),
    PersonalEmailAddress: __expectString(output.PersonalEmailAddress),
    PhoneNumber: __expectString(output.PhoneNumber),
    ProfileId: __expectString(output.ProfileId),
    ShippingAddress: output.ShippingAddress != null ? de_Address(output.ShippingAddress, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ProfileIdList
 */
const de_ProfileIdList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_restJson1ProfileList
 */
const de_ProfileList = (output: any, context: __SerdeContext): Profile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Profile(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProfileObjectList
 */
const de_ProfileObjectList = (output: any, context: __SerdeContext): ListProfileObjectsItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListProfileObjectsItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProfileObjectTypeList
 */
const de_ProfileObjectTypeList = (output: any, context: __SerdeContext): ListProfileObjectTypeItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListProfileObjectTypeItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProfileObjectTypeTemplateList
 */
const de_ProfileObjectTypeTemplateList = (
  output: any,
  context: __SerdeContext
): ListProfileObjectTypeTemplateItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListProfileObjectTypeTemplateItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1requestValueList
 */
const de_requestValueList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_restJson1S3ExportingConfig
 */
const de_S3ExportingConfig = (output: any, context: __SerdeContext): S3ExportingConfig => {
  return {
    S3BucketName: __expectString(output.S3BucketName),
    S3KeyName: __expectString(output.S3KeyName),
  } as any;
};

/**
 * deserializeAws_restJson1S3ExportingLocation
 */
const de_S3ExportingLocation = (output: any, context: __SerdeContext): S3ExportingLocation => {
  return {
    S3BucketName: __expectString(output.S3BucketName),
    S3KeyName: __expectString(output.S3KeyName),
  } as any;
};

/**
 * deserializeAws_restJson1StandardIdentifierList
 */
const de_StandardIdentifierList = (output: any, context: __SerdeContext): (StandardIdentifier | string)[] => {
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

/**
 * deserializeAws_restJson1TagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1WorkflowAttributes
 */
const de_WorkflowAttributes = (output: any, context: __SerdeContext): WorkflowAttributes => {
  return {
    AppflowIntegration:
      output.AppflowIntegration != null
        ? de_AppflowIntegrationWorkflowAttributes(output.AppflowIntegration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1WorkflowList
 */
const de_WorkflowList = (output: any, context: __SerdeContext): ListWorkflowsItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListWorkflowsItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorkflowMetrics
 */
const de_WorkflowMetrics = (output: any, context: __SerdeContext): WorkflowMetrics => {
  return {
    AppflowIntegration:
      output.AppflowIntegration != null
        ? de_AppflowIntegrationWorkflowMetrics(output.AppflowIntegration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1WorkflowStepItem
 */
const de_WorkflowStepItem = (output: any, context: __SerdeContext): WorkflowStepItem => {
  return {
    AppflowIntegration:
      output.AppflowIntegration != null
        ? de_AppflowIntegrationWorkflowStep(output.AppflowIntegration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1WorkflowStepsList
 */
const de_WorkflowStepsList = (output: any, context: __SerdeContext): WorkflowStepItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorkflowStepItem(entry, context);
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
