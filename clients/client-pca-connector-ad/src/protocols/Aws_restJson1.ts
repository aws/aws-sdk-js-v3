// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
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
import { v4 as generateIdempotencyToken } from "uuid";

import { CreateConnectorCommandInput, CreateConnectorCommandOutput } from "../commands/CreateConnectorCommand";
import {
  CreateDirectoryRegistrationCommandInput,
  CreateDirectoryRegistrationCommandOutput,
} from "../commands/CreateDirectoryRegistrationCommand";
import {
  CreateServicePrincipalNameCommandInput,
  CreateServicePrincipalNameCommandOutput,
} from "../commands/CreateServicePrincipalNameCommand";
import { CreateTemplateCommandInput, CreateTemplateCommandOutput } from "../commands/CreateTemplateCommand";
import {
  CreateTemplateGroupAccessControlEntryCommandInput,
  CreateTemplateGroupAccessControlEntryCommandOutput,
} from "../commands/CreateTemplateGroupAccessControlEntryCommand";
import { DeleteConnectorCommandInput, DeleteConnectorCommandOutput } from "../commands/DeleteConnectorCommand";
import {
  DeleteDirectoryRegistrationCommandInput,
  DeleteDirectoryRegistrationCommandOutput,
} from "../commands/DeleteDirectoryRegistrationCommand";
import {
  DeleteServicePrincipalNameCommandInput,
  DeleteServicePrincipalNameCommandOutput,
} from "../commands/DeleteServicePrincipalNameCommand";
import { DeleteTemplateCommandInput, DeleteTemplateCommandOutput } from "../commands/DeleteTemplateCommand";
import {
  DeleteTemplateGroupAccessControlEntryCommandInput,
  DeleteTemplateGroupAccessControlEntryCommandOutput,
} from "../commands/DeleteTemplateGroupAccessControlEntryCommand";
import { GetConnectorCommandInput, GetConnectorCommandOutput } from "../commands/GetConnectorCommand";
import {
  GetDirectoryRegistrationCommandInput,
  GetDirectoryRegistrationCommandOutput,
} from "../commands/GetDirectoryRegistrationCommand";
import {
  GetServicePrincipalNameCommandInput,
  GetServicePrincipalNameCommandOutput,
} from "../commands/GetServicePrincipalNameCommand";
import { GetTemplateCommandInput, GetTemplateCommandOutput } from "../commands/GetTemplateCommand";
import {
  GetTemplateGroupAccessControlEntryCommandInput,
  GetTemplateGroupAccessControlEntryCommandOutput,
} from "../commands/GetTemplateGroupAccessControlEntryCommand";
import { ListConnectorsCommandInput, ListConnectorsCommandOutput } from "../commands/ListConnectorsCommand";
import {
  ListDirectoryRegistrationsCommandInput,
  ListDirectoryRegistrationsCommandOutput,
} from "../commands/ListDirectoryRegistrationsCommand";
import {
  ListServicePrincipalNamesCommandInput,
  ListServicePrincipalNamesCommandOutput,
} from "../commands/ListServicePrincipalNamesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTemplateGroupAccessControlEntriesCommandInput,
  ListTemplateGroupAccessControlEntriesCommandOutput,
} from "../commands/ListTemplateGroupAccessControlEntriesCommand";
import { ListTemplatesCommandInput, ListTemplatesCommandOutput } from "../commands/ListTemplatesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateTemplateCommandInput, UpdateTemplateCommandOutput } from "../commands/UpdateTemplateCommand";
import {
  UpdateTemplateGroupAccessControlEntryCommandInput,
  UpdateTemplateGroupAccessControlEntryCommandOutput,
} from "../commands/UpdateTemplateGroupAccessControlEntryCommand";
import {
  AccessControlEntry,
  AccessControlEntrySummary,
  AccessDeniedException,
  AccessRights,
  ApplicationPolicies,
  ApplicationPolicy,
  CertificateValidity,
  ConflictException,
  Connector,
  ConnectorSummary,
  DirectoryRegistration,
  DirectoryRegistrationSummary,
  EnrollmentFlagsV2,
  EnrollmentFlagsV3,
  EnrollmentFlagsV4,
  ExtensionsV2,
  ExtensionsV3,
  ExtensionsV4,
  GeneralFlagsV2,
  GeneralFlagsV3,
  GeneralFlagsV4,
  InternalServerException,
  KeyUsage,
  KeyUsageFlags,
  KeyUsageProperty,
  KeyUsagePropertyFlags,
  PrivateKeyAttributesV2,
  PrivateKeyAttributesV3,
  PrivateKeyAttributesV4,
  PrivateKeyFlagsV2,
  PrivateKeyFlagsV3,
  PrivateKeyFlagsV4,
  ResourceNotFoundException,
  ServicePrincipalName,
  ServicePrincipalNameSummary,
  ServiceQuotaExceededException,
  SubjectNameFlagsV2,
  SubjectNameFlagsV3,
  SubjectNameFlagsV4,
  Template,
  TemplateDefinition,
  TemplateSummary,
  TemplateV2,
  TemplateV3,
  TemplateV4,
  ThrottlingException,
  ValidationException,
  ValidityPeriod,
  VpcInformation,
} from "../models/models_0";
import { PcaConnectorAdServiceException as __BaseException } from "../models/PcaConnectorAdServiceException";

/**
 * serializeAws_restJson1CreateConnectorCommand
 */
export const se_CreateConnectorCommand = async (
  input: CreateConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/connectors");
  let body: any;
  body = JSON.stringify(
    take(input, {
      CertificateAuthorityArn: [],
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      DirectoryId: [],
      Tags: (_) => _json(_),
      VpcInformation: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDirectoryRegistrationCommand
 */
export const se_CreateDirectoryRegistrationCommand = async (
  input: CreateDirectoryRegistrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/directoryRegistrations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      DirectoryId: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateServicePrincipalNameCommand
 */
export const se_CreateServicePrincipalNameCommand = async (
  input: CreateServicePrincipalNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/directoryRegistrations/{DirectoryRegistrationArn}/servicePrincipalNames/{ConnectorArn}");
  b.p("DirectoryRegistrationArn", () => input.DirectoryRegistrationArn!, "{DirectoryRegistrationArn}", false);
  b.p("ConnectorArn", () => input.ConnectorArn!, "{ConnectorArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTemplateCommand
 */
export const se_CreateTemplateCommand = async (
  input: CreateTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/templates");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ConnectorArn: [],
      Definition: (_) => _json(_),
      Name: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTemplateGroupAccessControlEntryCommand
 */
export const se_CreateTemplateGroupAccessControlEntryCommand = async (
  input: CreateTemplateGroupAccessControlEntryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/templates/{TemplateArn}/accessControlEntries");
  b.p("TemplateArn", () => input.TemplateArn!, "{TemplateArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccessRights: (_) => _json(_),
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      GroupDisplayName: [],
      GroupSecurityIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteConnectorCommand
 */
export const se_DeleteConnectorCommand = async (
  input: DeleteConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/connectors/{ConnectorArn}");
  b.p("ConnectorArn", () => input.ConnectorArn!, "{ConnectorArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDirectoryRegistrationCommand
 */
export const se_DeleteDirectoryRegistrationCommand = async (
  input: DeleteDirectoryRegistrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/directoryRegistrations/{DirectoryRegistrationArn}");
  b.p("DirectoryRegistrationArn", () => input.DirectoryRegistrationArn!, "{DirectoryRegistrationArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteServicePrincipalNameCommand
 */
export const se_DeleteServicePrincipalNameCommand = async (
  input: DeleteServicePrincipalNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/directoryRegistrations/{DirectoryRegistrationArn}/servicePrincipalNames/{ConnectorArn}");
  b.p("DirectoryRegistrationArn", () => input.DirectoryRegistrationArn!, "{DirectoryRegistrationArn}", false);
  b.p("ConnectorArn", () => input.ConnectorArn!, "{ConnectorArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTemplateCommand
 */
export const se_DeleteTemplateCommand = async (
  input: DeleteTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/templates/{TemplateArn}");
  b.p("TemplateArn", () => input.TemplateArn!, "{TemplateArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTemplateGroupAccessControlEntryCommand
 */
export const se_DeleteTemplateGroupAccessControlEntryCommand = async (
  input: DeleteTemplateGroupAccessControlEntryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/templates/{TemplateArn}/accessControlEntries/{GroupSecurityIdentifier}");
  b.p("TemplateArn", () => input.TemplateArn!, "{TemplateArn}", false);
  b.p("GroupSecurityIdentifier", () => input.GroupSecurityIdentifier!, "{GroupSecurityIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConnectorCommand
 */
export const se_GetConnectorCommand = async (
  input: GetConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/connectors/{ConnectorArn}");
  b.p("ConnectorArn", () => input.ConnectorArn!, "{ConnectorArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDirectoryRegistrationCommand
 */
export const se_GetDirectoryRegistrationCommand = async (
  input: GetDirectoryRegistrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/directoryRegistrations/{DirectoryRegistrationArn}");
  b.p("DirectoryRegistrationArn", () => input.DirectoryRegistrationArn!, "{DirectoryRegistrationArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetServicePrincipalNameCommand
 */
export const se_GetServicePrincipalNameCommand = async (
  input: GetServicePrincipalNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/directoryRegistrations/{DirectoryRegistrationArn}/servicePrincipalNames/{ConnectorArn}");
  b.p("DirectoryRegistrationArn", () => input.DirectoryRegistrationArn!, "{DirectoryRegistrationArn}", false);
  b.p("ConnectorArn", () => input.ConnectorArn!, "{ConnectorArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTemplateCommand
 */
export const se_GetTemplateCommand = async (
  input: GetTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/templates/{TemplateArn}");
  b.p("TemplateArn", () => input.TemplateArn!, "{TemplateArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTemplateGroupAccessControlEntryCommand
 */
export const se_GetTemplateGroupAccessControlEntryCommand = async (
  input: GetTemplateGroupAccessControlEntryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/templates/{TemplateArn}/accessControlEntries/{GroupSecurityIdentifier}");
  b.p("TemplateArn", () => input.TemplateArn!, "{TemplateArn}", false);
  b.p("GroupSecurityIdentifier", () => input.GroupSecurityIdentifier!, "{GroupSecurityIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListConnectorsCommand
 */
export const se_ListConnectorsCommand = async (
  input: ListConnectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/connectors");
  const query: any = map({
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDirectoryRegistrationsCommand
 */
export const se_ListDirectoryRegistrationsCommand = async (
  input: ListDirectoryRegistrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/directoryRegistrations");
  const query: any = map({
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListServicePrincipalNamesCommand
 */
export const se_ListServicePrincipalNamesCommand = async (
  input: ListServicePrincipalNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/directoryRegistrations/{DirectoryRegistrationArn}/servicePrincipalNames");
  b.p("DirectoryRegistrationArn", () => input.DirectoryRegistrationArn!, "{DirectoryRegistrationArn}", false);
  const query: any = map({
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTemplateGroupAccessControlEntriesCommand
 */
export const se_ListTemplateGroupAccessControlEntriesCommand = async (
  input: ListTemplateGroupAccessControlEntriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/templates/{TemplateArn}/accessControlEntries");
  b.p("TemplateArn", () => input.TemplateArn!, "{TemplateArn}", false);
  const query: any = map({
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTemplatesCommand
 */
export const se_ListTemplatesCommand = async (
  input: ListTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/templates");
  const query: any = map({
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
    [_CA]: [, __expectNonNull(input[_CA]!, `ConnectorArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.TagKeys, `TagKeys`) != null, () => input[_TK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateTemplateCommand
 */
export const se_UpdateTemplateCommand = async (
  input: UpdateTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/templates/{TemplateArn}");
  b.p("TemplateArn", () => input.TemplateArn!, "{TemplateArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Definition: (_) => _json(_),
      ReenrollAllCertificateHolders: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateTemplateGroupAccessControlEntryCommand
 */
export const se_UpdateTemplateGroupAccessControlEntryCommand = async (
  input: UpdateTemplateGroupAccessControlEntryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/templates/{TemplateArn}/accessControlEntries/{GroupSecurityIdentifier}");
  b.p("TemplateArn", () => input.TemplateArn!, "{TemplateArn}", false);
  b.p("GroupSecurityIdentifier", () => input.GroupSecurityIdentifier!, "{GroupSecurityIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccessRights: (_) => _json(_),
      GroupDisplayName: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateConnectorCommand
 */
export const de_CreateConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectorCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConnectorArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDirectoryRegistrationCommand
 */
export const de_CreateDirectoryRegistrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectoryRegistrationCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DirectoryRegistrationArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateServicePrincipalNameCommand
 */
export const de_CreateServicePrincipalNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServicePrincipalNameCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTemplateCommand
 */
export const de_CreateTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    TemplateArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTemplateGroupAccessControlEntryCommand
 */
export const de_CreateTemplateGroupAccessControlEntryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTemplateGroupAccessControlEntryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConnectorCommand
 */
export const de_DeleteConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectorCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDirectoryRegistrationCommand
 */
export const de_DeleteDirectoryRegistrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectoryRegistrationCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteServicePrincipalNameCommand
 */
export const de_DeleteServicePrincipalNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServicePrincipalNameCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTemplateCommand
 */
export const de_DeleteTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTemplateGroupAccessControlEntryCommand
 */
export const de_DeleteTemplateGroupAccessControlEntryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTemplateGroupAccessControlEntryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetConnectorCommand
 */
export const de_GetConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Connector: (_) => de_Connector(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDirectoryRegistrationCommand
 */
export const de_GetDirectoryRegistrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDirectoryRegistrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DirectoryRegistration: (_) => de_DirectoryRegistration(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetServicePrincipalNameCommand
 */
export const de_GetServicePrincipalNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServicePrincipalNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ServicePrincipalName: (_) => de_ServicePrincipalName(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTemplateCommand
 */
export const de_GetTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Template: (_) => de_Template(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTemplateGroupAccessControlEntryCommand
 */
export const de_GetTemplateGroupAccessControlEntryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateGroupAccessControlEntryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccessControlEntry: (_) => de_AccessControlEntry(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListConnectorsCommand
 */
export const de_ListConnectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Connectors: (_) => de_ConnectorList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDirectoryRegistrationsCommand
 */
export const de_ListDirectoryRegistrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDirectoryRegistrationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DirectoryRegistrations: (_) => de_DirectoryRegistrationList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListServicePrincipalNamesCommand
 */
export const de_ListServicePrincipalNamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicePrincipalNamesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ServicePrincipalNames: (_) => de_ServicePrincipalNameList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTemplateGroupAccessControlEntriesCommand
 */
export const de_ListTemplateGroupAccessControlEntriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateGroupAccessControlEntriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccessControlEntries: (_) => de_AccessControlEntryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTemplatesCommand
 */
export const de_ListTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Templates: (_) => de_TemplateList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
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
 * deserializeAws_restJson1UpdateTemplateCommand
 */
export const de_UpdateTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTemplateGroupAccessControlEntryCommand
 */
export const de_UpdateTemplateGroupAccessControlEntryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateGroupAccessControlEntryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.pcaconnectorad#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pcaconnectorad#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pcaconnectorad#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pcaconnectorad#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.pcaconnectorad#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pcaconnectorad#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pcaconnectorad#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
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
    Message: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
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
    Message: __expectString,
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
    Message: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
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
    Message: __expectString,
    QuotaCode: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
    ServiceCode: __expectString,
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
    Message: __expectString,
    QuotaCode: __expectString,
    ServiceCode: __expectString,
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
    Message: __expectString,
    Reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AccessRights omitted.

// se_ApplicationPolicies omitted.

// se_ApplicationPolicy omitted.

// se_ApplicationPolicyList omitted.

// se_CertificateValidity omitted.

// se_CryptoProvidersList omitted.

// se_EnrollmentFlagsV2 omitted.

// se_EnrollmentFlagsV3 omitted.

// se_EnrollmentFlagsV4 omitted.

// se_ExtensionsV2 omitted.

// se_ExtensionsV3 omitted.

// se_ExtensionsV4 omitted.

// se_GeneralFlagsV2 omitted.

// se_GeneralFlagsV3 omitted.

// se_GeneralFlagsV4 omitted.

// se_KeyUsage omitted.

// se_KeyUsageFlags omitted.

// se_KeyUsageProperty omitted.

// se_KeyUsagePropertyFlags omitted.

// se_PrivateKeyAttributesV2 omitted.

// se_PrivateKeyAttributesV3 omitted.

// se_PrivateKeyAttributesV4 omitted.

// se_PrivateKeyFlagsV2 omitted.

// se_PrivateKeyFlagsV3 omitted.

// se_PrivateKeyFlagsV4 omitted.

// se_SecurityGroupIdList omitted.

// se_SubjectNameFlagsV2 omitted.

// se_SubjectNameFlagsV3 omitted.

// se_SubjectNameFlagsV4 omitted.

// se_Tags omitted.

// se_TemplateDefinition omitted.

// se_TemplateNameList omitted.

// se_TemplateV2 omitted.

// se_TemplateV3 omitted.

// se_TemplateV4 omitted.

// se_ValidityPeriod omitted.

// se_VpcInformation omitted.

/**
 * deserializeAws_restJson1AccessControlEntry
 */
const de_AccessControlEntry = (output: any, context: __SerdeContext): AccessControlEntry => {
  return take(output, {
    AccessRights: _json,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    GroupDisplayName: __expectString,
    GroupSecurityIdentifier: __expectString,
    TemplateArn: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1AccessControlEntryList
 */
const de_AccessControlEntryList = (output: any, context: __SerdeContext): AccessControlEntrySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AccessControlEntrySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AccessControlEntrySummary
 */
const de_AccessControlEntrySummary = (output: any, context: __SerdeContext): AccessControlEntrySummary => {
  return take(output, {
    AccessRights: _json,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    GroupDisplayName: __expectString,
    GroupSecurityIdentifier: __expectString,
    TemplateArn: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_AccessRights omitted.

// de_ApplicationPolicies omitted.

// de_ApplicationPolicy omitted.

// de_ApplicationPolicyList omitted.

// de_CertificateValidity omitted.

/**
 * deserializeAws_restJson1Connector
 */
const de_Connector = (output: any, context: __SerdeContext): Connector => {
  return take(output, {
    Arn: __expectString,
    CertificateAuthorityArn: __expectString,
    CertificateEnrollmentPolicyServerEndpoint: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DirectoryId: __expectString,
    Status: __expectString,
    StatusReason: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VpcInformation: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ConnectorList
 */
const de_ConnectorList = (output: any, context: __SerdeContext): ConnectorSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConnectorSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConnectorSummary
 */
const de_ConnectorSummary = (output: any, context: __SerdeContext): ConnectorSummary => {
  return take(output, {
    Arn: __expectString,
    CertificateAuthorityArn: __expectString,
    CertificateEnrollmentPolicyServerEndpoint: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DirectoryId: __expectString,
    Status: __expectString,
    StatusReason: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VpcInformation: _json,
  }) as any;
};

// de_CryptoProvidersList omitted.

/**
 * deserializeAws_restJson1DirectoryRegistration
 */
const de_DirectoryRegistration = (output: any, context: __SerdeContext): DirectoryRegistration => {
  return take(output, {
    Arn: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DirectoryId: __expectString,
    Status: __expectString,
    StatusReason: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1DirectoryRegistrationList
 */
const de_DirectoryRegistrationList = (output: any, context: __SerdeContext): DirectoryRegistrationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DirectoryRegistrationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DirectoryRegistrationSummary
 */
const de_DirectoryRegistrationSummary = (output: any, context: __SerdeContext): DirectoryRegistrationSummary => {
  return take(output, {
    Arn: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DirectoryId: __expectString,
    Status: __expectString,
    StatusReason: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_EnrollmentFlagsV2 omitted.

// de_EnrollmentFlagsV3 omitted.

// de_EnrollmentFlagsV4 omitted.

// de_ExtensionsV2 omitted.

// de_ExtensionsV3 omitted.

// de_ExtensionsV4 omitted.

// de_GeneralFlagsV2 omitted.

// de_GeneralFlagsV3 omitted.

// de_GeneralFlagsV4 omitted.

// de_KeyUsage omitted.

// de_KeyUsageFlags omitted.

// de_KeyUsageProperty omitted.

// de_KeyUsagePropertyFlags omitted.

// de_PrivateKeyAttributesV2 omitted.

// de_PrivateKeyAttributesV3 omitted.

// de_PrivateKeyAttributesV4 omitted.

// de_PrivateKeyFlagsV2 omitted.

// de_PrivateKeyFlagsV3 omitted.

// de_PrivateKeyFlagsV4 omitted.

// de_SecurityGroupIdList omitted.

/**
 * deserializeAws_restJson1ServicePrincipalName
 */
const de_ServicePrincipalName = (output: any, context: __SerdeContext): ServicePrincipalName => {
  return take(output, {
    ConnectorArn: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DirectoryRegistrationArn: __expectString,
    Status: __expectString,
    StatusReason: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1ServicePrincipalNameList
 */
const de_ServicePrincipalNameList = (output: any, context: __SerdeContext): ServicePrincipalNameSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServicePrincipalNameSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ServicePrincipalNameSummary
 */
const de_ServicePrincipalNameSummary = (output: any, context: __SerdeContext): ServicePrincipalNameSummary => {
  return take(output, {
    ConnectorArn: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DirectoryRegistrationArn: __expectString,
    Status: __expectString,
    StatusReason: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_SubjectNameFlagsV2 omitted.

// de_SubjectNameFlagsV3 omitted.

// de_SubjectNameFlagsV4 omitted.

// de_Tags omitted.

/**
 * deserializeAws_restJson1Template
 */
const de_Template = (output: any, context: __SerdeContext): Template => {
  return take(output, {
    Arn: __expectString,
    ConnectorArn: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Definition: (_: any) => _json(__expectUnion(_)),
    Name: __expectString,
    ObjectIdentifier: __expectString,
    PolicySchema: __expectInt32,
    Revision: _json,
    Status: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_TemplateDefinition omitted.

/**
 * deserializeAws_restJson1TemplateList
 */
const de_TemplateList = (output: any, context: __SerdeContext): TemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TemplateSummary(entry, context);
    });
  return retVal;
};

// de_TemplateNameList omitted.

// de_TemplateRevision omitted.

/**
 * deserializeAws_restJson1TemplateSummary
 */
const de_TemplateSummary = (output: any, context: __SerdeContext): TemplateSummary => {
  return take(output, {
    Arn: __expectString,
    ConnectorArn: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Definition: (_: any) => _json(__expectUnion(_)),
    Name: __expectString,
    ObjectIdentifier: __expectString,
    PolicySchema: __expectInt32,
    Revision: _json,
    Status: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_TemplateV2 omitted.

// de_TemplateV3 omitted.

// de_TemplateV4 omitted.

// de_ValidityPeriod omitted.

// de_VpcInformation omitted.

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

const _CA = "ConnectorArn";
const _MR = "MaxResults";
const _NT = "NextToken";
const _TK = "TagKeys";
const _tK = "tagKeys";
