// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  isSerializableHeaderValue,
  LazyJsonString as __LazyJsonString,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { AssociateLicenseCommandInput, AssociateLicenseCommandOutput } from "../commands/AssociateLicenseCommand";
import {
  CreateWorkspaceApiKeyCommandInput,
  CreateWorkspaceApiKeyCommandOutput,
} from "../commands/CreateWorkspaceApiKeyCommand";
import { CreateWorkspaceCommandInput, CreateWorkspaceCommandOutput } from "../commands/CreateWorkspaceCommand";
import {
  CreateWorkspaceServiceAccountCommandInput,
  CreateWorkspaceServiceAccountCommandOutput,
} from "../commands/CreateWorkspaceServiceAccountCommand";
import {
  CreateWorkspaceServiceAccountTokenCommandInput,
  CreateWorkspaceServiceAccountTokenCommandOutput,
} from "../commands/CreateWorkspaceServiceAccountTokenCommand";
import {
  DeleteWorkspaceApiKeyCommandInput,
  DeleteWorkspaceApiKeyCommandOutput,
} from "../commands/DeleteWorkspaceApiKeyCommand";
import { DeleteWorkspaceCommandInput, DeleteWorkspaceCommandOutput } from "../commands/DeleteWorkspaceCommand";
import {
  DeleteWorkspaceServiceAccountCommandInput,
  DeleteWorkspaceServiceAccountCommandOutput,
} from "../commands/DeleteWorkspaceServiceAccountCommand";
import {
  DeleteWorkspaceServiceAccountTokenCommandInput,
  DeleteWorkspaceServiceAccountTokenCommandOutput,
} from "../commands/DeleteWorkspaceServiceAccountTokenCommand";
import {
  DescribeWorkspaceAuthenticationCommandInput,
  DescribeWorkspaceAuthenticationCommandOutput,
} from "../commands/DescribeWorkspaceAuthenticationCommand";
import { DescribeWorkspaceCommandInput, DescribeWorkspaceCommandOutput } from "../commands/DescribeWorkspaceCommand";
import {
  DescribeWorkspaceConfigurationCommandInput,
  DescribeWorkspaceConfigurationCommandOutput,
} from "../commands/DescribeWorkspaceConfigurationCommand";
import {
  DisassociateLicenseCommandInput,
  DisassociateLicenseCommandOutput,
} from "../commands/DisassociateLicenseCommand";
import { ListPermissionsCommandInput, ListPermissionsCommandOutput } from "../commands/ListPermissionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListVersionsCommandInput, ListVersionsCommandOutput } from "../commands/ListVersionsCommand";
import { ListWorkspacesCommandInput, ListWorkspacesCommandOutput } from "../commands/ListWorkspacesCommand";
import {
  ListWorkspaceServiceAccountsCommandInput,
  ListWorkspaceServiceAccountsCommandOutput,
} from "../commands/ListWorkspaceServiceAccountsCommand";
import {
  ListWorkspaceServiceAccountTokensCommandInput,
  ListWorkspaceServiceAccountTokensCommandOutput,
} from "../commands/ListWorkspaceServiceAccountTokensCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdatePermissionsCommandInput, UpdatePermissionsCommandOutput } from "../commands/UpdatePermissionsCommand";
import {
  UpdateWorkspaceAuthenticationCommandInput,
  UpdateWorkspaceAuthenticationCommandOutput,
} from "../commands/UpdateWorkspaceAuthenticationCommand";
import { UpdateWorkspaceCommandInput, UpdateWorkspaceCommandOutput } from "../commands/UpdateWorkspaceCommand";
import {
  UpdateWorkspaceConfigurationCommandInput,
  UpdateWorkspaceConfigurationCommandOutput,
} from "../commands/UpdateWorkspaceConfigurationCommand";
import { GrafanaServiceException as __BaseException } from "../models/GrafanaServiceException";
import {
  AccessDeniedException,
  AssertionAttributes,
  AuthenticationProviderTypes,
  ConflictException,
  DataSourceType,
  IdpMetadata,
  InternalServerException,
  NetworkAccessConfiguration,
  NotificationDestinationType,
  ResourceNotFoundException,
  RoleValues,
  SamlConfiguration,
  ServiceAccountTokenSummary,
  ServiceQuotaExceededException,
  ThrottlingException,
  UpdateInstruction,
  User,
  ValidationException,
  VpcConfiguration,
  WorkspaceDescription,
  WorkspaceSummary,
} from "../models/models_0";

/**
 * serializeAws_restJson1AssociateLicenseCommand
 */
export const se_AssociateLicenseCommand = async (
  input: AssociateLicenseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_gt]: input[_gT]!,
  });
  b.bp("/workspaces/{workspaceId}/licenses/{licenseType}");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  b.p("licenseType", () => input.licenseType!, "{licenseType}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateWorkspaceCommand
 */
export const se_CreateWorkspaceCommand = async (
  input: CreateWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workspaces");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountAccessType: [],
      authenticationProviders: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      configuration: (_) => __LazyJsonString.from(_),
      grafanaVersion: [],
      networkAccessControl: (_) => _json(_),
      organizationRoleName: [],
      permissionType: [],
      stackSetName: [],
      tags: (_) => _json(_),
      vpcConfiguration: (_) => _json(_),
      workspaceDataSources: (_) => _json(_),
      workspaceDescription: [],
      workspaceName: [],
      workspaceNotificationDestinations: (_) => _json(_),
      workspaceOrganizationalUnits: (_) => _json(_),
      workspaceRoleArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateWorkspaceApiKeyCommand
 */
export const se_CreateWorkspaceApiKeyCommand = async (
  input: CreateWorkspaceApiKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workspaces/{workspaceId}/apikeys");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      keyName: [],
      keyRole: [],
      secondsToLive: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateWorkspaceServiceAccountCommand
 */
export const se_CreateWorkspaceServiceAccountCommand = async (
  input: CreateWorkspaceServiceAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workspaces/{workspaceId}/serviceaccounts");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      grafanaRole: [],
      name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateWorkspaceServiceAccountTokenCommand
 */
export const se_CreateWorkspaceServiceAccountTokenCommand = async (
  input: CreateWorkspaceServiceAccountTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workspaces/{workspaceId}/serviceaccounts/{serviceAccountId}/tokens");
  b.p("serviceAccountId", () => input.serviceAccountId!, "{serviceAccountId}", false);
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      name: [],
      secondsToLive: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteWorkspaceCommand
 */
export const se_DeleteWorkspaceCommand = async (
  input: DeleteWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workspaces/{workspaceId}");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteWorkspaceApiKeyCommand
 */
export const se_DeleteWorkspaceApiKeyCommand = async (
  input: DeleteWorkspaceApiKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workspaces/{workspaceId}/apikeys/{keyName}");
  b.p("keyName", () => input.keyName!, "{keyName}", false);
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteWorkspaceServiceAccountCommand
 */
export const se_DeleteWorkspaceServiceAccountCommand = async (
  input: DeleteWorkspaceServiceAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workspaces/{workspaceId}/serviceaccounts/{serviceAccountId}");
  b.p("serviceAccountId", () => input.serviceAccountId!, "{serviceAccountId}", false);
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteWorkspaceServiceAccountTokenCommand
 */
export const se_DeleteWorkspaceServiceAccountTokenCommand = async (
  input: DeleteWorkspaceServiceAccountTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workspaces/{workspaceId}/serviceaccounts/{serviceAccountId}/tokens/{tokenId}");
  b.p("tokenId", () => input.tokenId!, "{tokenId}", false);
  b.p("serviceAccountId", () => input.serviceAccountId!, "{serviceAccountId}", false);
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeWorkspaceCommand
 */
export const se_DescribeWorkspaceCommand = async (
  input: DescribeWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workspaces/{workspaceId}");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeWorkspaceAuthenticationCommand
 */
export const se_DescribeWorkspaceAuthenticationCommand = async (
  input: DescribeWorkspaceAuthenticationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workspaces/{workspaceId}/authentication");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeWorkspaceConfigurationCommand
 */
export const se_DescribeWorkspaceConfigurationCommand = async (
  input: DescribeWorkspaceConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workspaces/{workspaceId}/configuration");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateLicenseCommand
 */
export const se_DisassociateLicenseCommand = async (
  input: DisassociateLicenseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workspaces/{workspaceId}/licenses/{licenseType}");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  b.p("licenseType", () => input.licenseType!, "{licenseType}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPermissionsCommand
 */
export const se_ListPermissionsCommand = async (
  input: ListPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workspaces/{workspaceId}/permissions");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_uT]: [, input[_uT]!],
    [_uI]: [, input[_uI]!],
    [_gI]: [, input[_gI]!],
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
 * serializeAws_restJson1ListVersionsCommand
 */
export const se_ListVersionsCommand = async (
  input: ListVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/versions");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_wi]: [, input[_wI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWorkspacesCommand
 */
export const se_ListWorkspacesCommand = async (
  input: ListWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workspaces");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWorkspaceServiceAccountsCommand
 */
export const se_ListWorkspaceServiceAccountsCommand = async (
  input: ListWorkspaceServiceAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workspaces/{workspaceId}/serviceaccounts");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWorkspaceServiceAccountTokensCommand
 */
export const se_ListWorkspaceServiceAccountTokensCommand = async (
  input: ListWorkspaceServiceAccountTokensCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workspaces/{workspaceId}/serviceaccounts/{serviceAccountId}/tokens");
  b.p("serviceAccountId", () => input.serviceAccountId!, "{serviceAccountId}", false);
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
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
 * serializeAws_restJson1UpdatePermissionsCommand
 */
export const se_UpdatePermissionsCommand = async (
  input: UpdatePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workspaces/{workspaceId}/permissions");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      updateInstructionBatch: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateWorkspaceCommand
 */
export const se_UpdateWorkspaceCommand = async (
  input: UpdateWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workspaces/{workspaceId}");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountAccessType: [],
      networkAccessControl: (_) => _json(_),
      organizationRoleName: [],
      permissionType: [],
      removeNetworkAccessConfiguration: [],
      removeVpcConfiguration: [],
      stackSetName: [],
      vpcConfiguration: (_) => _json(_),
      workspaceDataSources: (_) => _json(_),
      workspaceDescription: [],
      workspaceName: [],
      workspaceNotificationDestinations: (_) => _json(_),
      workspaceOrganizationalUnits: (_) => _json(_),
      workspaceRoleArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateWorkspaceAuthenticationCommand
 */
export const se_UpdateWorkspaceAuthenticationCommand = async (
  input: UpdateWorkspaceAuthenticationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workspaces/{workspaceId}/authentication");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      authenticationProviders: (_) => _json(_),
      samlConfiguration: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateWorkspaceConfigurationCommand
 */
export const se_UpdateWorkspaceConfigurationCommand = async (
  input: UpdateWorkspaceConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workspaces/{workspaceId}/configuration");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      configuration: (_) => __LazyJsonString.from(_),
      grafanaVersion: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociateLicenseCommand
 */
export const de_AssociateLicenseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateLicenseCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    workspace: (_) => de_WorkspaceDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateWorkspaceCommand
 */
export const de_CreateWorkspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspaceCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    workspace: (_) => de_WorkspaceDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateWorkspaceApiKeyCommand
 */
export const de_CreateWorkspaceApiKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspaceApiKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    key: __expectString,
    keyName: __expectString,
    workspaceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateWorkspaceServiceAccountCommand
 */
export const de_CreateWorkspaceServiceAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspaceServiceAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    grafanaRole: __expectString,
    id: __expectString,
    name: __expectString,
    workspaceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateWorkspaceServiceAccountTokenCommand
 */
export const de_CreateWorkspaceServiceAccountTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspaceServiceAccountTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    serviceAccountId: __expectString,
    serviceAccountToken: _json,
    workspaceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWorkspaceCommand
 */
export const de_DeleteWorkspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkspaceCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    workspace: (_) => de_WorkspaceDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWorkspaceApiKeyCommand
 */
export const de_DeleteWorkspaceApiKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkspaceApiKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    keyName: __expectString,
    workspaceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWorkspaceServiceAccountCommand
 */
export const de_DeleteWorkspaceServiceAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkspaceServiceAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    serviceAccountId: __expectString,
    workspaceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWorkspaceServiceAccountTokenCommand
 */
export const de_DeleteWorkspaceServiceAccountTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkspaceServiceAccountTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    serviceAccountId: __expectString,
    tokenId: __expectString,
    workspaceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeWorkspaceCommand
 */
export const de_DescribeWorkspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    workspace: (_) => de_WorkspaceDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeWorkspaceAuthenticationCommand
 */
export const de_DescribeWorkspaceAuthenticationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceAuthenticationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    authentication: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeWorkspaceConfigurationCommand
 */
export const de_DescribeWorkspaceConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkspaceConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuration: __LazyJsonString.from,
    grafanaVersion: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateLicenseCommand
 */
export const de_DisassociateLicenseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateLicenseCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    workspace: (_) => de_WorkspaceDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPermissionsCommand
 */
export const de_ListPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    permissions: _json,
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
 * deserializeAws_restJson1ListVersionsCommand
 */
export const de_ListVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    grafanaVersions: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkspacesCommand
 */
export const de_ListWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkspacesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    workspaces: (_) => de_WorkspaceList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkspaceServiceAccountsCommand
 */
export const de_ListWorkspaceServiceAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkspaceServiceAccountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    serviceAccounts: _json,
    workspaceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkspaceServiceAccountTokensCommand
 */
export const de_ListWorkspaceServiceAccountTokensCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkspaceServiceAccountTokensCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    serviceAccountId: __expectString,
    serviceAccountTokens: (_) => de_ServiceAccountTokenList(_, context),
    workspaceId: __expectString,
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
 * deserializeAws_restJson1UpdatePermissionsCommand
 */
export const de_UpdatePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWorkspaceCommand
 */
export const de_UpdateWorkspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkspaceCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    workspace: (_) => de_WorkspaceDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWorkspaceAuthenticationCommand
 */
export const de_UpdateWorkspaceAuthenticationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkspaceAuthenticationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    authentication: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWorkspaceConfigurationCommand
 */
export const de_UpdateWorkspaceConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkspaceConfigurationCommandOutput> => {
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
    case "com.amazonaws.grafana#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.grafana#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.grafana#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.grafana#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.grafana#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.grafana#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.grafana#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
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
    message: __expectString,
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
    message: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
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
  const contents: any = map({
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
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
    resourceId: __expectString,
    resourceType: __expectString,
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
    quotaCode: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
    serviceCode: __expectString,
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
  const contents: any = map({
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    quotaCode: __expectString,
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
    fieldList: _json,
    message: __expectString,
    reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AllowedOrganizations omitted.

// se_AssertionAttributes omitted.

// se_AuthenticationProviders omitted.

// se_DataSourceTypesList omitted.

// se_IdpMetadata omitted.

// se_NetworkAccessConfiguration omitted.

// se_NotificationDestinationsList omitted.

// se_OrganizationalUnitList omitted.

// se_PrefixListIds omitted.

// se_RoleValueList omitted.

// se_RoleValues omitted.

// se_SamlConfiguration omitted.

// se_SecurityGroupIds omitted.

// se_SubnetIds omitted.

// se_TagMap omitted.

// se_UpdateInstruction omitted.

// se_UpdateInstructionBatch omitted.

// se_User omitted.

// se_UserList omitted.

// se_VpcConfiguration omitted.

// se_VpceIds omitted.

// de_AllowedOrganizations omitted.

// de_AssertionAttributes omitted.

// de_AuthenticationDescription omitted.

// de_AuthenticationProviders omitted.

// de_AuthenticationSummary omitted.

// de_AwsSsoAuthentication omitted.

// de_DataSourceTypesList omitted.

// de_GrafanaVersionList omitted.

// de_IdpMetadata omitted.

// de_NetworkAccessConfiguration omitted.

// de_NotificationDestinationsList omitted.

// de_OrganizationalUnitList omitted.

// de_PermissionEntry omitted.

// de_PermissionEntryList omitted.

// de_PrefixListIds omitted.

// de_RoleValueList omitted.

// de_RoleValues omitted.

// de_SamlAuthentication omitted.

// de_SamlConfiguration omitted.

// de_SecurityGroupIds omitted.

// de_ServiceAccountList omitted.

// de_ServiceAccountSummary omitted.

/**
 * deserializeAws_restJson1ServiceAccountTokenList
 */
const de_ServiceAccountTokenList = (output: any, context: __SerdeContext): ServiceAccountTokenSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServiceAccountTokenSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ServiceAccountTokenSummary
 */
const de_ServiceAccountTokenSummary = (output: any, context: __SerdeContext): ServiceAccountTokenSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    expiresAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    lastUsedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
  }) as any;
};

// de_ServiceAccountTokenSummaryWithKey omitted.

// de_SubnetIds omitted.

// de_TagMap omitted.

// de_UpdateError omitted.

// de_UpdateErrorList omitted.

// de_UpdateInstruction omitted.

// de_User omitted.

// de_UserList omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

// de_VpcConfiguration omitted.

// de_VpceIds omitted.

/**
 * deserializeAws_restJson1WorkspaceDescription
 */
const de_WorkspaceDescription = (output: any, context: __SerdeContext): WorkspaceDescription => {
  return take(output, {
    accountAccessType: __expectString,
    authentication: _json,
    created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dataSources: _json,
    description: __expectString,
    endpoint: __expectString,
    freeTrialConsumed: __expectBoolean,
    freeTrialExpiration: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    grafanaToken: __expectString,
    grafanaVersion: __expectString,
    id: __expectString,
    licenseExpiration: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    licenseType: __expectString,
    modified: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    networkAccessControl: _json,
    notificationDestinations: _json,
    organizationRoleName: __expectString,
    organizationalUnits: _json,
    permissionType: __expectString,
    stackSetName: __expectString,
    status: __expectString,
    tags: _json,
    vpcConfiguration: _json,
    workspaceRoleArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1WorkspaceList
 */
const de_WorkspaceList = (output: any, context: __SerdeContext): WorkspaceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WorkspaceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorkspaceSummary
 */
const de_WorkspaceSummary = (output: any, context: __SerdeContext): WorkspaceSummary => {
  return take(output, {
    authentication: _json,
    created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    endpoint: __expectString,
    grafanaToken: __expectString,
    grafanaVersion: __expectString,
    id: __expectString,
    licenseType: __expectString,
    modified: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    notificationDestinations: _json,
    status: __expectString,
    tags: _json,
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

const _gI = "groupId";
const _gT = "grafanaToken";
const _gt = "grafana-token";
const _mR = "maxResults";
const _nT = "nextToken";
const _rAS = "retryAfterSeconds";
const _ra = "retry-after";
const _tK = "tagKeys";
const _uI = "userId";
const _uT = "userType";
const _wI = "workspaceId";
const _wi = "workspace-id";
