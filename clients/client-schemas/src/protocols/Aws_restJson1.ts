// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  LazyJsonString as __LazyJsonString,
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
import { v4 as generateIdempotencyToken } from "@smithy/uuid";

import { CreateDiscovererCommandInput, CreateDiscovererCommandOutput } from "../commands/CreateDiscovererCommand";
import { CreateRegistryCommandInput, CreateRegistryCommandOutput } from "../commands/CreateRegistryCommand";
import { CreateSchemaCommandInput, CreateSchemaCommandOutput } from "../commands/CreateSchemaCommand";
import { DeleteDiscovererCommandInput, DeleteDiscovererCommandOutput } from "../commands/DeleteDiscovererCommand";
import { DeleteRegistryCommandInput, DeleteRegistryCommandOutput } from "../commands/DeleteRegistryCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "../commands/DeleteResourcePolicyCommand";
import { DeleteSchemaCommandInput, DeleteSchemaCommandOutput } from "../commands/DeleteSchemaCommand";
import {
  DeleteSchemaVersionCommandInput,
  DeleteSchemaVersionCommandOutput,
} from "../commands/DeleteSchemaVersionCommand";
import {
  DescribeCodeBindingCommandInput,
  DescribeCodeBindingCommandOutput,
} from "../commands/DescribeCodeBindingCommand";
import { DescribeDiscovererCommandInput, DescribeDiscovererCommandOutput } from "../commands/DescribeDiscovererCommand";
import { DescribeRegistryCommandInput, DescribeRegistryCommandOutput } from "../commands/DescribeRegistryCommand";
import { DescribeSchemaCommandInput, DescribeSchemaCommandOutput } from "../commands/DescribeSchemaCommand";
import { ExportSchemaCommandInput, ExportSchemaCommandOutput } from "../commands/ExportSchemaCommand";
import {
  GetCodeBindingSourceCommandInput,
  GetCodeBindingSourceCommandOutput,
} from "../commands/GetCodeBindingSourceCommand";
import {
  GetDiscoveredSchemaCommandInput,
  GetDiscoveredSchemaCommandOutput,
} from "../commands/GetDiscoveredSchemaCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "../commands/GetResourcePolicyCommand";
import { ListDiscoverersCommandInput, ListDiscoverersCommandOutput } from "../commands/ListDiscoverersCommand";
import { ListRegistriesCommandInput, ListRegistriesCommandOutput } from "../commands/ListRegistriesCommand";
import { ListSchemasCommandInput, ListSchemasCommandOutput } from "../commands/ListSchemasCommand";
import { ListSchemaVersionsCommandInput, ListSchemaVersionsCommandOutput } from "../commands/ListSchemaVersionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutCodeBindingCommandInput, PutCodeBindingCommandOutput } from "../commands/PutCodeBindingCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "../commands/PutResourcePolicyCommand";
import { SearchSchemasCommandInput, SearchSchemasCommandOutput } from "../commands/SearchSchemasCommand";
import { StartDiscovererCommandInput, StartDiscovererCommandOutput } from "../commands/StartDiscovererCommand";
import { StopDiscovererCommandInput, StopDiscovererCommandOutput } from "../commands/StopDiscovererCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateDiscovererCommandInput, UpdateDiscovererCommandOutput } from "../commands/UpdateDiscovererCommand";
import { UpdateRegistryCommandInput, UpdateRegistryCommandOutput } from "../commands/UpdateRegistryCommand";
import { UpdateSchemaCommandInput, UpdateSchemaCommandOutput } from "../commands/UpdateSchemaCommand";
import {
  BadRequestException,
  ConflictException,
  DiscovererSummary,
  ForbiddenException,
  GoneException,
  InternalServerErrorException,
  NotFoundException,
  PreconditionFailedException,
  RegistrySummary,
  SchemaSummary,
  SearchSchemaSummary,
  SearchSchemaVersionSummary,
  ServiceUnavailableException,
  TooManyRequestsException,
  UnauthorizedException,
} from "../models/models_0";
import { SchemasServiceException as __BaseException } from "../models/SchemasServiceException";

/**
 * serializeAws_restJson1CreateDiscovererCommand
 */
export const se_CreateDiscovererCommand = async (
  input: CreateDiscovererCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/discoverers");
  let body: any;
  body = JSON.stringify(
    take(input, {
      CrossAccount: [],
      Description: [],
      SourceArn: [],
      tags: [, (_) => _json(_), `Tags`],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRegistryCommand
 */
export const se_CreateRegistryCommand = async (
  input: CreateRegistryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/registries/name/{RegistryName}");
  b.p("RegistryName", () => input.RegistryName!, "{RegistryName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      tags: [, (_) => _json(_), `Tags`],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSchemaCommand
 */
export const se_CreateSchemaCommand = async (
  input: CreateSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}");
  b.p("RegistryName", () => input.RegistryName!, "{RegistryName}", false);
  b.p("SchemaName", () => input.SchemaName!, "{SchemaName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Content: [],
      Description: [],
      tags: [, (_) => _json(_), `Tags`],
      Type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDiscovererCommand
 */
export const se_DeleteDiscovererCommand = async (
  input: DeleteDiscovererCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/discoverers/id/{DiscovererId}");
  b.p("DiscovererId", () => input.DiscovererId!, "{DiscovererId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRegistryCommand
 */
export const se_DeleteRegistryCommand = async (
  input: DeleteRegistryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/registries/name/{RegistryName}");
  b.p("RegistryName", () => input.RegistryName!, "{RegistryName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteResourcePolicyCommand
 */
export const se_DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/policy");
  const query: any = map({
    [_rN]: [, input[_RN]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSchemaCommand
 */
export const se_DeleteSchemaCommand = async (
  input: DeleteSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}");
  b.p("RegistryName", () => input.RegistryName!, "{RegistryName}", false);
  b.p("SchemaName", () => input.SchemaName!, "{SchemaName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSchemaVersionCommand
 */
export const se_DeleteSchemaVersionCommand = async (
  input: DeleteSchemaVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/version/{SchemaVersion}");
  b.p("RegistryName", () => input.RegistryName!, "{RegistryName}", false);
  b.p("SchemaName", () => input.SchemaName!, "{SchemaName}", false);
  b.p("SchemaVersion", () => input.SchemaVersion!, "{SchemaVersion}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeCodeBindingCommand
 */
export const se_DescribeCodeBindingCommand = async (
  input: DescribeCodeBindingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/language/{Language}");
  b.p("Language", () => input.Language!, "{Language}", false);
  b.p("RegistryName", () => input.RegistryName!, "{RegistryName}", false);
  b.p("SchemaName", () => input.SchemaName!, "{SchemaName}", false);
  const query: any = map({
    [_sV]: [, input[_SV]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDiscovererCommand
 */
export const se_DescribeDiscovererCommand = async (
  input: DescribeDiscovererCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/discoverers/id/{DiscovererId}");
  b.p("DiscovererId", () => input.DiscovererId!, "{DiscovererId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeRegistryCommand
 */
export const se_DescribeRegistryCommand = async (
  input: DescribeRegistryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/registries/name/{RegistryName}");
  b.p("RegistryName", () => input.RegistryName!, "{RegistryName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeSchemaCommand
 */
export const se_DescribeSchemaCommand = async (
  input: DescribeSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}");
  b.p("RegistryName", () => input.RegistryName!, "{RegistryName}", false);
  b.p("SchemaName", () => input.SchemaName!, "{SchemaName}", false);
  const query: any = map({
    [_sV]: [, input[_SV]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ExportSchemaCommand
 */
export const se_ExportSchemaCommand = async (
  input: ExportSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/export");
  b.p("RegistryName", () => input.RegistryName!, "{RegistryName}", false);
  b.p("SchemaName", () => input.SchemaName!, "{SchemaName}", false);
  const query: any = map({
    [_sV]: [, input[_SV]!],
    [_t]: [, __expectNonNull(input[_T]!, `Type`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCodeBindingSourceCommand
 */
export const se_GetCodeBindingSourceCommand = async (
  input: GetCodeBindingSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/language/{Language}/source");
  b.p("Language", () => input.Language!, "{Language}", false);
  b.p("RegistryName", () => input.RegistryName!, "{RegistryName}", false);
  b.p("SchemaName", () => input.SchemaName!, "{SchemaName}", false);
  const query: any = map({
    [_sV]: [, input[_SV]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDiscoveredSchemaCommand
 */
export const se_GetDiscoveredSchemaCommand = async (
  input: GetDiscoveredSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/discover");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Events: (_) => _json(_),
      Type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetResourcePolicyCommand
 */
export const se_GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/policy");
  const query: any = map({
    [_rN]: [, input[_RN]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDiscoverersCommand
 */
export const se_ListDiscoverersCommand = async (
  input: ListDiscoverersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/discoverers");
  const query: any = map({
    [_dIP]: [, input[_DIP]!],
    [_l]: [() => input.Limit !== void 0, () => input[_L]!.toString()],
    [_nT]: [, input[_NT]!],
    [_sAP]: [, input[_SAP]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRegistriesCommand
 */
export const se_ListRegistriesCommand = async (
  input: ListRegistriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/registries");
  const query: any = map({
    [_l]: [() => input.Limit !== void 0, () => input[_L]!.toString()],
    [_nT]: [, input[_NT]!],
    [_rNP]: [, input[_RNP]!],
    [_s]: [, input[_S]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSchemasCommand
 */
export const se_ListSchemasCommand = async (
  input: ListSchemasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/registries/name/{RegistryName}/schemas");
  b.p("RegistryName", () => input.RegistryName!, "{RegistryName}", false);
  const query: any = map({
    [_l]: [() => input.Limit !== void 0, () => input[_L]!.toString()],
    [_nT]: [, input[_NT]!],
    [_sNP]: [, input[_SNP]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSchemaVersionsCommand
 */
export const se_ListSchemaVersionsCommand = async (
  input: ListSchemaVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/versions");
  b.p("RegistryName", () => input.RegistryName!, "{RegistryName}", false);
  b.p("SchemaName", () => input.SchemaName!, "{SchemaName}", false);
  const query: any = map({
    [_l]: [() => input.Limit !== void 0, () => input[_L]!.toString()],
    [_nT]: [, input[_NT]!],
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
 * serializeAws_restJson1PutCodeBindingCommand
 */
export const se_PutCodeBindingCommand = async (
  input: PutCodeBindingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/language/{Language}");
  b.p("Language", () => input.Language!, "{Language}", false);
  b.p("RegistryName", () => input.RegistryName!, "{RegistryName}", false);
  b.p("SchemaName", () => input.SchemaName!, "{SchemaName}", false);
  const query: any = map({
    [_sV]: [, input[_SV]!],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutResourcePolicyCommand
 */
export const se_PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/policy");
  const query: any = map({
    [_rN]: [, input[_RN]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Policy: (_) => __LazyJsonString.from(_),
      RevisionId: [],
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchSchemasCommand
 */
export const se_SearchSchemasCommand = async (
  input: SearchSchemasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/registries/name/{RegistryName}/schemas/search");
  b.p("RegistryName", () => input.RegistryName!, "{RegistryName}", false);
  const query: any = map({
    [_k]: [, __expectNonNull(input[_K]!, `Keywords`)],
    [_l]: [() => input.Limit !== void 0, () => input[_L]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartDiscovererCommand
 */
export const se_StartDiscovererCommand = async (
  input: StartDiscovererCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/discoverers/id/{DiscovererId}/start");
  b.p("DiscovererId", () => input.DiscovererId!, "{DiscovererId}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopDiscovererCommand
 */
export const se_StopDiscovererCommand = async (
  input: StopDiscovererCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/discoverers/id/{DiscovererId}/stop");
  b.p("DiscovererId", () => input.DiscovererId!, "{DiscovererId}", false);
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
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: [, (_) => _json(_), `Tags`],
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
 * serializeAws_restJson1UpdateDiscovererCommand
 */
export const se_UpdateDiscovererCommand = async (
  input: UpdateDiscovererCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/discoverers/id/{DiscovererId}");
  b.p("DiscovererId", () => input.DiscovererId!, "{DiscovererId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      CrossAccount: [],
      Description: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRegistryCommand
 */
export const se_UpdateRegistryCommand = async (
  input: UpdateRegistryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/registries/name/{RegistryName}");
  b.p("RegistryName", () => input.RegistryName!, "{RegistryName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSchemaCommand
 */
export const se_UpdateSchemaCommand = async (
  input: UpdateSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}");
  b.p("RegistryName", () => input.RegistryName!, "{RegistryName}", false);
  b.p("SchemaName", () => input.SchemaName!, "{SchemaName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientTokenId: [true, (_) => _ ?? generateIdempotencyToken()],
      Content: [],
      Description: [],
      Type: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateDiscovererCommand
 */
export const de_CreateDiscovererCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDiscovererCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CrossAccount: __expectBoolean,
    Description: __expectString,
    DiscovererArn: __expectString,
    DiscovererId: __expectString,
    SourceArn: __expectString,
    State: __expectString,
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRegistryCommand
 */
export const de_CreateRegistryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRegistryCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Description: __expectString,
    RegistryArn: __expectString,
    RegistryName: __expectString,
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSchemaCommand
 */
export const de_CreateSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchemaCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Description: __expectString,
    LastModified: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    SchemaArn: __expectString,
    SchemaName: __expectString,
    SchemaVersion: __expectString,
    Tags: [, _json, `tags`],
    Type: __expectString,
    VersionCreatedDate: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDiscovererCommand
 */
export const de_DeleteDiscovererCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDiscovererCommandOutput> => {
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
 * deserializeAws_restJson1DeleteRegistryCommand
 */
export const de_DeleteRegistryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRegistryCommandOutput> => {
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
 * deserializeAws_restJson1DeleteResourcePolicyCommand
 */
export const de_DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
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
 * deserializeAws_restJson1DeleteSchemaCommand
 */
export const de_DeleteSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaCommandOutput> => {
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
 * deserializeAws_restJson1DeleteSchemaVersionCommand
 */
export const de_DeleteSchemaVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaVersionCommandOutput> => {
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
 * deserializeAws_restJson1DescribeCodeBindingCommand
 */
export const de_DescribeCodeBindingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCodeBindingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreationDate: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    LastModified: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    SchemaVersion: __expectString,
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDiscovererCommand
 */
export const de_DescribeDiscovererCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDiscovererCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CrossAccount: __expectBoolean,
    Description: __expectString,
    DiscovererArn: __expectString,
    DiscovererId: __expectString,
    SourceArn: __expectString,
    State: __expectString,
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeRegistryCommand
 */
export const de_DescribeRegistryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRegistryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Description: __expectString,
    RegistryArn: __expectString,
    RegistryName: __expectString,
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSchemaCommand
 */
export const de_DescribeSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Content: __expectString,
    Description: __expectString,
    LastModified: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    SchemaArn: __expectString,
    SchemaName: __expectString,
    SchemaVersion: __expectString,
    Tags: [, _json, `tags`],
    Type: __expectString,
    VersionCreatedDate: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ExportSchemaCommand
 */
export const de_ExportSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Content: __expectString,
    SchemaArn: __expectString,
    SchemaName: __expectString,
    SchemaVersion: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCodeBindingSourceCommand
 */
export const de_GetCodeBindingSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCodeBindingSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBody(output.body, context);
  contents.Body = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetDiscoveredSchemaCommand
 */
export const de_GetDiscoveredSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiscoveredSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Content: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetResourcePolicyCommand
 */
export const de_GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Policy: __LazyJsonString.from,
    RevisionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDiscoverersCommand
 */
export const de_ListDiscoverersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDiscoverersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Discoverers: (_) => de___listOfDiscovererSummary(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRegistriesCommand
 */
export const de_ListRegistriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegistriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Registries: (_) => de___listOfRegistrySummary(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSchemasCommand
 */
export const de_ListSchemasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Schemas: (_) => de___listOfSchemaSummary(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSchemaVersionsCommand
 */
export const de_ListSchemaVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemaVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    SchemaVersions: _json,
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
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutCodeBindingCommand
 */
export const de_PutCodeBindingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCodeBindingCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreationDate: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    LastModified: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    SchemaVersion: __expectString,
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutResourcePolicyCommand
 */
export const de_PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Policy: __LazyJsonString.from,
    RevisionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchSchemasCommand
 */
export const de_SearchSchemasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchSchemasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Schemas: (_) => de___listOfSearchSchemaSummary(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartDiscovererCommand
 */
export const de_StartDiscovererCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDiscovererCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DiscovererId: __expectString,
    State: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopDiscovererCommand
 */
export const de_StopDiscovererCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDiscovererCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DiscovererId: __expectString,
    State: __expectString,
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
 * deserializeAws_restJson1UpdateDiscovererCommand
 */
export const de_UpdateDiscovererCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDiscovererCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CrossAccount: __expectBoolean,
    Description: __expectString,
    DiscovererArn: __expectString,
    DiscovererId: __expectString,
    SourceArn: __expectString,
    State: __expectString,
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRegistryCommand
 */
export const de_UpdateRegistryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRegistryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Description: __expectString,
    RegistryArn: __expectString,
    RegistryName: __expectString,
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSchemaCommand
 */
export const de_UpdateSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Description: __expectString,
    LastModified: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    SchemaArn: __expectString,
    SchemaName: __expectString,
    SchemaVersion: __expectString,
    Tags: [, _json, `tags`],
    Type: __expectString,
    VersionCreatedDate: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
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
    case "com.amazonaws.schemas#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.schemas#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.schemas#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.schemas#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.schemas#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.schemas#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "GoneException":
    case "com.amazonaws.schemas#GoneException":
      throw await de_GoneExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.schemas#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
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
    Code: __expectString,
    Message: __expectString,
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
    Code: __expectString,
    Message: __expectString,
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
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1GoneExceptionRes
 */
const de_GoneExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<GoneException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new GoneException({
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
    Code: __expectString,
    Message: __expectString,
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
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1PreconditionFailedExceptionRes
 */
const de_PreconditionFailedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PreconditionFailedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new PreconditionFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceUnavailableException({
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
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnauthorizedExceptionRes
 */
const de_UnauthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se___listOfGetDiscoveredSchemaVersionItemInput omitted.

// se_Tags omitted.

/**
 * deserializeAws_restJson1__listOfDiscovererSummary
 */
const de___listOfDiscovererSummary = (output: any, context: __SerdeContext): DiscovererSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DiscovererSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfRegistrySummary
 */
const de___listOfRegistrySummary = (output: any, context: __SerdeContext): RegistrySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RegistrySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfSchemaSummary
 */
const de___listOfSchemaSummary = (output: any, context: __SerdeContext): SchemaSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SchemaSummary(entry, context);
    });
  return retVal;
};

// de___listOfSchemaVersionSummary omitted.

/**
 * deserializeAws_restJson1__listOfSearchSchemaSummary
 */
const de___listOfSearchSchemaSummary = (output: any, context: __SerdeContext): SearchSchemaSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SearchSchemaSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfSearchSchemaVersionSummary
 */
const de___listOfSearchSchemaVersionSummary = (output: any, context: __SerdeContext): SearchSchemaVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SearchSchemaVersionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DiscovererSummary
 */
const de_DiscovererSummary = (output: any, context: __SerdeContext): DiscovererSummary => {
  return take(output, {
    CrossAccount: __expectBoolean,
    DiscovererArn: __expectString,
    DiscovererId: __expectString,
    SourceArn: __expectString,
    State: __expectString,
    Tags: [, _json, `tags`],
  }) as any;
};

/**
 * deserializeAws_restJson1RegistrySummary
 */
const de_RegistrySummary = (output: any, context: __SerdeContext): RegistrySummary => {
  return take(output, {
    RegistryArn: __expectString,
    RegistryName: __expectString,
    Tags: [, _json, `tags`],
  }) as any;
};

/**
 * deserializeAws_restJson1SchemaSummary
 */
const de_SchemaSummary = (output: any, context: __SerdeContext): SchemaSummary => {
  return take(output, {
    LastModified: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    SchemaArn: __expectString,
    SchemaName: __expectString,
    Tags: [, _json, `tags`],
    VersionCount: __expectLong,
  }) as any;
};

// de_SchemaVersionSummary omitted.

/**
 * deserializeAws_restJson1SearchSchemaSummary
 */
const de_SearchSchemaSummary = (output: any, context: __SerdeContext): SearchSchemaSummary => {
  return take(output, {
    RegistryName: __expectString,
    SchemaArn: __expectString,
    SchemaName: __expectString,
    SchemaVersions: (_: any) => de___listOfSearchSchemaVersionSummary(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1SearchSchemaVersionSummary
 */
const de_SearchSchemaVersionSummary = (output: any, context: __SerdeContext): SearchSchemaVersionSummary => {
  return take(output, {
    CreatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    SchemaVersion: __expectString,
    Type: __expectString,
  }) as any;
};

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

const _DIP = "DiscovererIdPrefix";
const _K = "Keywords";
const _L = "Limit";
const _NT = "NextToken";
const _RN = "RegistryName";
const _RNP = "RegistryNamePrefix";
const _S = "Scope";
const _SAP = "SourceArnPrefix";
const _SNP = "SchemaNamePrefix";
const _SV = "SchemaVersion";
const _T = "Type";
const _TK = "TagKeys";
const _dIP = "discovererIdPrefix";
const _k = "keywords";
const _l = "limit";
const _nT = "nextToken";
const _rN = "registryName";
const _rNP = "registryNamePrefix";
const _s = "scope";
const _sAP = "sourceArnPrefix";
const _sNP = "schemaNamePrefix";
const _sV = "schemaVersion";
const _t = "type";
const _tK = "tagKeys";
