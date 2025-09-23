// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  AssociateAttributeGroupCommandInput,
  AssociateAttributeGroupCommandOutput,
} from "../commands/AssociateAttributeGroupCommand";
import { AssociateResourceCommandInput, AssociateResourceCommandOutput } from "../commands/AssociateResourceCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "../commands/CreateApplicationCommand";
import {
  CreateAttributeGroupCommandInput,
  CreateAttributeGroupCommandOutput,
} from "../commands/CreateAttributeGroupCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "../commands/DeleteApplicationCommand";
import {
  DeleteAttributeGroupCommandInput,
  DeleteAttributeGroupCommandOutput,
} from "../commands/DeleteAttributeGroupCommand";
import {
  DisassociateAttributeGroupCommandInput,
  DisassociateAttributeGroupCommandOutput,
} from "../commands/DisassociateAttributeGroupCommand";
import {
  DisassociateResourceCommandInput,
  DisassociateResourceCommandOutput,
} from "../commands/DisassociateResourceCommand";
import { GetApplicationCommandInput, GetApplicationCommandOutput } from "../commands/GetApplicationCommand";
import {
  GetAssociatedResourceCommandInput,
  GetAssociatedResourceCommandOutput,
} from "../commands/GetAssociatedResourceCommand";
import { GetAttributeGroupCommandInput, GetAttributeGroupCommandOutput } from "../commands/GetAttributeGroupCommand";
import { GetConfigurationCommandInput, GetConfigurationCommandOutput } from "../commands/GetConfigurationCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "../commands/ListApplicationsCommand";
import {
  ListAssociatedAttributeGroupsCommandInput,
  ListAssociatedAttributeGroupsCommandOutput,
} from "../commands/ListAssociatedAttributeGroupsCommand";
import {
  ListAssociatedResourcesCommandInput,
  ListAssociatedResourcesCommandOutput,
} from "../commands/ListAssociatedResourcesCommand";
import {
  ListAttributeGroupsCommandInput,
  ListAttributeGroupsCommandOutput,
} from "../commands/ListAttributeGroupsCommand";
import {
  ListAttributeGroupsForApplicationCommandInput,
  ListAttributeGroupsForApplicationCommandOutput,
} from "../commands/ListAttributeGroupsForApplicationCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutConfigurationCommandInput, PutConfigurationCommandOutput } from "../commands/PutConfigurationCommand";
import { SyncResourceCommandInput, SyncResourceCommandOutput } from "../commands/SyncResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "../commands/UpdateApplicationCommand";
import {
  UpdateAttributeGroupCommandInput,
  UpdateAttributeGroupCommandOutput,
} from "../commands/UpdateAttributeGroupCommand";
import {
  Application,
  ApplicationSummary,
  AppRegistryConfiguration,
  AssociationOption,
  AttributeGroup,
  AttributeGroupSummary,
  ConflictException,
  InternalServerException,
  Resource,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  TagQueryConfiguration,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";
import { ServiceCatalogAppRegistryServiceException as __BaseException } from "../models/ServiceCatalogAppRegistryServiceException";

/**
 * serializeAws_restJson1AssociateAttributeGroupCommand
 */
export const se_AssociateAttributeGroupCommand = async (
  input: AssociateAttributeGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{application}/attribute-groups/{attributeGroup}");
  b.p("application", () => input.application!, "{application}", false);
  b.p("attributeGroup", () => input.attributeGroup!, "{attributeGroup}", false);
  let body: any;
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateResourceCommand
 */
export const se_AssociateResourceCommand = async (
  input: AssociateResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{application}/resources/{resourceType}/{resource}");
  b.p("application", () => input.application!, "{application}", false);
  b.p("resourceType", () => input.resourceType!, "{resourceType}", false);
  b.p("resource", () => input.resource!, "{resource}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      options: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

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
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAttributeGroupCommand
 */
export const se_CreateAttributeGroupCommand = async (
  input: CreateAttributeGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/attribute-groups");
  let body: any;
  body = JSON.stringify(
    take(input, {
      attributes: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      name: [],
      tags: (_) => _json(_),
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
  b.bp("/applications/{application}");
  b.p("application", () => input.application!, "{application}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAttributeGroupCommand
 */
export const se_DeleteAttributeGroupCommand = async (
  input: DeleteAttributeGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/attribute-groups/{attributeGroup}");
  b.p("attributeGroup", () => input.attributeGroup!, "{attributeGroup}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateAttributeGroupCommand
 */
export const se_DisassociateAttributeGroupCommand = async (
  input: DisassociateAttributeGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{application}/attribute-groups/{attributeGroup}");
  b.p("application", () => input.application!, "{application}", false);
  b.p("attributeGroup", () => input.attributeGroup!, "{attributeGroup}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateResourceCommand
 */
export const se_DisassociateResourceCommand = async (
  input: DisassociateResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{application}/resources/{resourceType}/{resource}");
  b.p("application", () => input.application!, "{application}", false);
  b.p("resourceType", () => input.resourceType!, "{resourceType}", false);
  b.p("resource", () => input.resource!, "{resource}", false);
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
  b.bp("/applications/{application}");
  b.p("application", () => input.application!, "{application}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAssociatedResourceCommand
 */
export const se_GetAssociatedResourceCommand = async (
  input: GetAssociatedResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{application}/resources/{resourceType}/{resource}");
  b.p("application", () => input.application!, "{application}", false);
  b.p("resourceType", () => input.resourceType!, "{resourceType}", false);
  b.p("resource", () => input.resource!, "{resource}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_rTS]: [() => input.resourceTagStatus !== void 0, () => input[_rTS]! || []],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAttributeGroupCommand
 */
export const se_GetAttributeGroupCommand = async (
  input: GetAttributeGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/attribute-groups/{attributeGroup}");
  b.p("attributeGroup", () => input.attributeGroup!, "{attributeGroup}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConfigurationCommand
 */
export const se_GetConfigurationCommand = async (
  input: GetConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/configuration");
  let body: any;
  b.m("GET").h(headers).b(body);
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
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAssociatedAttributeGroupsCommand
 */
export const se_ListAssociatedAttributeGroupsCommand = async (
  input: ListAssociatedAttributeGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{application}/attribute-groups");
  b.p("application", () => input.application!, "{application}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAssociatedResourcesCommand
 */
export const se_ListAssociatedResourcesCommand = async (
  input: ListAssociatedResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{application}/resources");
  b.p("application", () => input.application!, "{application}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAttributeGroupsCommand
 */
export const se_ListAttributeGroupsCommand = async (
  input: ListAttributeGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/attribute-groups");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAttributeGroupsForApplicationCommand
 */
export const se_ListAttributeGroupsForApplicationCommand = async (
  input: ListAttributeGroupsForApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{application}/attribute-group-details");
  b.p("application", () => input.application!, "{application}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutConfigurationCommand
 */
export const se_PutConfigurationCommand = async (
  input: PutConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/configuration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      configuration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SyncResourceCommand
 */
export const se_SyncResourceCommand = async (
  input: SyncResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sync/{resourceType}/{resource}");
  b.p("resourceType", () => input.resourceType!, "{resourceType}", false);
  b.p("resource", () => input.resource!, "{resource}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
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
  b.bp("/applications/{application}");
  b.p("application", () => input.application!, "{application}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      name: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAttributeGroupCommand
 */
export const se_UpdateAttributeGroupCommand = async (
  input: UpdateAttributeGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/attribute-groups/{attributeGroup}");
  b.p("attributeGroup", () => input.attributeGroup!, "{attributeGroup}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      attributes: [],
      description: [],
      name: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociateAttributeGroupCommand
 */
export const de_AssociateAttributeGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAttributeGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationArn: __expectString,
    attributeGroupArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateResourceCommand
 */
export const de_AssociateResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationArn: __expectString,
    options: _json,
    resourceArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
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
    application: (_) => de_Application(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAttributeGroupCommand
 */
export const de_CreateAttributeGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAttributeGroupCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    attributeGroup: (_) => de_AttributeGroup(_, context),
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
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    application: (_) => de_ApplicationSummary(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAttributeGroupCommand
 */
export const de_DeleteAttributeGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAttributeGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    attributeGroup: (_) => de_AttributeGroupSummary(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateAttributeGroupCommand
 */
export const de_DisassociateAttributeGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateAttributeGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationArn: __expectString,
    attributeGroupArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateResourceCommand
 */
export const de_DisassociateResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationArn: __expectString,
    resourceArn: __expectString,
  });
  Object.assign(contents, doc);
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
    applicationTag: _json,
    arn: __expectString,
    associatedResourceCount: __expectInt32,
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    id: __expectString,
    integrations: _json,
    lastUpdateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAssociatedResourceCommand
 */
export const de_GetAssociatedResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssociatedResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationTagResult: _json,
    options: _json,
    resource: (_) => de_Resource(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAttributeGroupCommand
 */
export const de_GetAttributeGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAttributeGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    attributes: __expectString,
    createdBy: __expectString,
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    id: __expectString,
    lastUpdateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConfigurationCommand
 */
export const de_GetConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuration: _json,
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
    applications: (_) => de_ApplicationSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAssociatedAttributeGroupsCommand
 */
export const de_ListAssociatedAttributeGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedAttributeGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    attributeGroups: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAssociatedResourcesCommand
 */
export const de_ListAssociatedResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    resources: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAttributeGroupsCommand
 */
export const de_ListAttributeGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttributeGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    attributeGroups: (_) => de_AttributeGroupSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAttributeGroupsForApplicationCommand
 */
export const de_ListAttributeGroupsForApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttributeGroupsForApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    attributeGroupsDetails: _json,
    nextToken: __expectString,
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
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutConfigurationCommand
 */
export const de_PutConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationCommandOutput> => {
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
 * deserializeAws_restJson1SyncResourceCommand
 */
export const de_SyncResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SyncResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    actionTaken: __expectString,
    applicationArn: __expectString,
    resourceArn: __expectString,
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
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
    application: (_) => de_Application(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAttributeGroupCommand
 */
export const de_UpdateAttributeGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAttributeGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    attributeGroup: (_) => de_AttributeGroup(_, context),
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
    case "ConflictException":
    case "com.amazonaws.servicecatalogappregistry#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.servicecatalogappregistry#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalogappregistry#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.servicecatalogappregistry#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.servicecatalogappregistry#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.servicecatalogappregistry#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
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
    message: __expectString,
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
    message: __expectString,
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
    message: __expectString,
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
    message: __expectString,
    serviceCode: __expectString,
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
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AppRegistryConfiguration omitted.

// se_Options omitted.

// se_TagQueryConfiguration omitted.

// se_Tags omitted.

/**
 * deserializeAws_restJson1Application
 */
const de_Application = (output: any, context: __SerdeContext): Application => {
  return take(output, {
    applicationTag: _json,
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    id: __expectString,
    lastUpdateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ApplicationSummaries
 */
const de_ApplicationSummaries = (output: any, context: __SerdeContext): ApplicationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ApplicationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ApplicationSummary
 */
const de_ApplicationSummary = (output: any, context: __SerdeContext): ApplicationSummary => {
  return take(output, {
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    id: __expectString,
    lastUpdateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
  }) as any;
};

// de_ApplicationTagDefinition omitted.

// de_ApplicationTagResult omitted.

// de_AppRegistryConfiguration omitted.

/**
 * deserializeAws_restJson1AttributeGroup
 */
const de_AttributeGroup = (output: any, context: __SerdeContext): AttributeGroup => {
  return take(output, {
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    id: __expectString,
    lastUpdateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    tags: _json,
  }) as any;
};

// de_AttributeGroupDetails omitted.

// de_AttributeGroupDetailsList omitted.

// de_AttributeGroupIds omitted.

/**
 * deserializeAws_restJson1AttributeGroupSummaries
 */
const de_AttributeGroupSummaries = (output: any, context: __SerdeContext): AttributeGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AttributeGroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AttributeGroupSummary
 */
const de_AttributeGroupSummary = (output: any, context: __SerdeContext): AttributeGroupSummary => {
  return take(output, {
    arn: __expectString,
    createdBy: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    id: __expectString,
    lastUpdateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
  }) as any;
};

// de_Integrations omitted.

// de_Options omitted.

/**
 * deserializeAws_restJson1Resource
 */
const de_Resource = (output: any, context: __SerdeContext): Resource => {
  return take(output, {
    arn: __expectString,
    associationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    integrations: _json,
    name: __expectString,
  }) as any;
};

// de_ResourceDetails omitted.

// de_ResourceGroup omitted.

// de_ResourceInfo omitted.

// de_ResourceIntegrations omitted.

// de_Resources omitted.

// de_ResourcesList omitted.

// de_ResourcesListItem omitted.

// de_TagQueryConfiguration omitted.

// de_Tags omitted.

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

const _mR = "maxResults";
const _nT = "nextToken";
const _rTS = "resourceTagStatus";
const _tK = "tagKeys";
