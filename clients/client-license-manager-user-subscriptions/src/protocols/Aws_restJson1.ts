// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
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

import { AssociateUserCommandInput, AssociateUserCommandOutput } from "../commands/AssociateUserCommand";
import {
  CreateLicenseServerEndpointCommandInput,
  CreateLicenseServerEndpointCommandOutput,
} from "../commands/CreateLicenseServerEndpointCommand";
import {
  DeleteLicenseServerEndpointCommandInput,
  DeleteLicenseServerEndpointCommandOutput,
} from "../commands/DeleteLicenseServerEndpointCommand";
import {
  DeregisterIdentityProviderCommandInput,
  DeregisterIdentityProviderCommandOutput,
} from "../commands/DeregisterIdentityProviderCommand";
import { DisassociateUserCommandInput, DisassociateUserCommandOutput } from "../commands/DisassociateUserCommand";
import {
  ListIdentityProvidersCommandInput,
  ListIdentityProvidersCommandOutput,
} from "../commands/ListIdentityProvidersCommand";
import { ListInstancesCommandInput, ListInstancesCommandOutput } from "../commands/ListInstancesCommand";
import {
  ListLicenseServerEndpointsCommandInput,
  ListLicenseServerEndpointsCommandOutput,
} from "../commands/ListLicenseServerEndpointsCommand";
import {
  ListProductSubscriptionsCommandInput,
  ListProductSubscriptionsCommandOutput,
} from "../commands/ListProductSubscriptionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListUserAssociationsCommandInput,
  ListUserAssociationsCommandOutput,
} from "../commands/ListUserAssociationsCommand";
import {
  RegisterIdentityProviderCommandInput,
  RegisterIdentityProviderCommandOutput,
} from "../commands/RegisterIdentityProviderCommand";
import {
  StartProductSubscriptionCommandInput,
  StartProductSubscriptionCommandOutput,
} from "../commands/StartProductSubscriptionCommand";
import {
  StopProductSubscriptionCommandInput,
  StopProductSubscriptionCommandOutput,
} from "../commands/StopProductSubscriptionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateIdentityProviderSettingsCommandInput,
  UpdateIdentityProviderSettingsCommandOutput,
} from "../commands/UpdateIdentityProviderSettingsCommand";
import { LicenseManagerUserSubscriptionsServiceException as __BaseException } from "../models/LicenseManagerUserSubscriptionsServiceException";
import {
  AccessDeniedException,
  ActiveDirectoryIdentityProvider,
  ActiveDirectorySettings,
  ConflictException,
  CredentialsProvider,
  DomainNetworkSettings,
  Filter,
  IdentityProvider,
  InternalServerException,
  LicenseServerEndpoint,
  LicenseServerSettings,
  RdsSalSettings,
  ResourceNotFoundException,
  SecretsManagerCredentialsProvider,
  ServerSettings,
  ServiceQuotaExceededException,
  Settings,
  ThrottlingException,
  UpdateSettings,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1AssociateUserCommand
 */
export const se_AssociateUserCommand = async (
  input: AssociateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/user/AssociateUser");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Domain: [],
      IdentityProvider: (_) => _json(_),
      InstanceId: [],
      Tags: (_) => _json(_),
      Username: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateLicenseServerEndpointCommand
 */
export const se_CreateLicenseServerEndpointCommand = async (
  input: CreateLicenseServerEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/license-server/CreateLicenseServerEndpoint");
  let body: any;
  body = JSON.stringify(
    take(input, {
      IdentityProviderArn: [],
      LicenseServerSettings: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteLicenseServerEndpointCommand
 */
export const se_DeleteLicenseServerEndpointCommand = async (
  input: DeleteLicenseServerEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/license-server/DeleteLicenseServerEndpoint");
  let body: any;
  body = JSON.stringify(
    take(input, {
      LicenseServerEndpointArn: [],
      ServerType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeregisterIdentityProviderCommand
 */
export const se_DeregisterIdentityProviderCommand = async (
  input: DeregisterIdentityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identity-provider/DeregisterIdentityProvider");
  let body: any;
  body = JSON.stringify(
    take(input, {
      IdentityProvider: (_) => _json(_),
      IdentityProviderArn: [],
      Product: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateUserCommand
 */
export const se_DisassociateUserCommand = async (
  input: DisassociateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/user/DisassociateUser");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Domain: [],
      IdentityProvider: (_) => _json(_),
      InstanceId: [],
      InstanceUserArn: [],
      Username: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListIdentityProvidersCommand
 */
export const se_ListIdentityProvidersCommand = async (
  input: ListIdentityProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identity-provider/ListIdentityProviders");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Filters: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListInstancesCommand
 */
export const se_ListInstancesCommand = async (
  input: ListInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/instance/ListInstances");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Filters: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLicenseServerEndpointsCommand
 */
export const se_ListLicenseServerEndpointsCommand = async (
  input: ListLicenseServerEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/license-server/ListLicenseServerEndpoints");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Filters: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProductSubscriptionsCommand
 */
export const se_ListProductSubscriptionsCommand = async (
  input: ListProductSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/user/ListProductSubscriptions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Filters: (_) => _json(_),
      IdentityProvider: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
      Product: [],
    })
  );
  b.m("POST").h(headers).b(body);
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
 * serializeAws_restJson1ListUserAssociationsCommand
 */
export const se_ListUserAssociationsCommand = async (
  input: ListUserAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/user/ListUserAssociations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Filters: (_) => _json(_),
      IdentityProvider: (_) => _json(_),
      InstanceId: [],
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RegisterIdentityProviderCommand
 */
export const se_RegisterIdentityProviderCommand = async (
  input: RegisterIdentityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identity-provider/RegisterIdentityProvider");
  let body: any;
  body = JSON.stringify(
    take(input, {
      IdentityProvider: (_) => _json(_),
      Product: [],
      Settings: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartProductSubscriptionCommand
 */
export const se_StartProductSubscriptionCommand = async (
  input: StartProductSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/user/StartProductSubscription");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Domain: [],
      IdentityProvider: (_) => _json(_),
      Product: [],
      Tags: (_) => _json(_),
      Username: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopProductSubscriptionCommand
 */
export const se_StopProductSubscriptionCommand = async (
  input: StopProductSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/user/StopProductSubscription");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Domain: [],
      IdentityProvider: (_) => _json(_),
      Product: [],
      ProductUserArn: [],
      Username: [],
    })
  );
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
      Tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
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
 * serializeAws_restJson1UpdateIdentityProviderSettingsCommand
 */
export const se_UpdateIdentityProviderSettingsCommand = async (
  input: UpdateIdentityProviderSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identity-provider/UpdateIdentityProviderSettings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      IdentityProvider: (_) => _json(_),
      IdentityProviderArn: [],
      Product: [],
      UpdateSettings: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociateUserCommand
 */
export const de_AssociateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    InstanceUserSummary: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateLicenseServerEndpointCommand
 */
export const de_CreateLicenseServerEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLicenseServerEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    IdentityProviderArn: __expectString,
    LicenseServerEndpointArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteLicenseServerEndpointCommand
 */
export const de_DeleteLicenseServerEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLicenseServerEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LicenseServerEndpoint: (_) => de_LicenseServerEndpoint(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeregisterIdentityProviderCommand
 */
export const de_DeregisterIdentityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterIdentityProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    IdentityProviderSummary: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateUserCommand
 */
export const de_DisassociateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    InstanceUserSummary: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIdentityProvidersCommand
 */
export const de_ListIdentityProvidersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityProvidersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    IdentityProviderSummaries: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListInstancesCommand
 */
export const de_ListInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    InstanceSummaries: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLicenseServerEndpointsCommand
 */
export const de_ListLicenseServerEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLicenseServerEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LicenseServerEndpoints: (_) => de_LicenseServerEndpointList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProductSubscriptionsCommand
 */
export const de_ListProductSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProductSubscriptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ProductUserSummaries: _json,
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
 * deserializeAws_restJson1ListUserAssociationsCommand
 */
export const de_ListUserAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    InstanceUserSummaries: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RegisterIdentityProviderCommand
 */
export const de_RegisterIdentityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterIdentityProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    IdentityProviderSummary: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartProductSubscriptionCommand
 */
export const de_StartProductSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartProductSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ProductUserSummary: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopProductSubscriptionCommand
 */
export const de_StopProductSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopProductSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ProductUserSummary: _json,
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
 * deserializeAws_restJson1UpdateIdentityProviderSettingsCommand
 */
export const de_UpdateIdentityProviderSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIdentityProviderSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    IdentityProviderSummary: _json,
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
    case "AccessDeniedException":
    case "com.amazonaws.licensemanagerusersubscriptions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.licensemanagerusersubscriptions#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.licensemanagerusersubscriptions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanagerusersubscriptions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.licensemanagerusersubscriptions#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.licensemanagerusersubscriptions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanagerusersubscriptions#ValidationException":
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

// se_ActiveDirectoryIdentityProvider omitted.

// se_ActiveDirectorySettings omitted.

// se_CredentialsProvider omitted.

// se_DomainNetworkSettings omitted.

// se_Filter omitted.

// se_FilterList omitted.

// se_IdentityProvider omitted.

// se_IpV4List omitted.

// se_IpV6List omitted.

// se_LicenseServerSettings omitted.

// se_RdsSalSettings omitted.

// se_SecretsManagerCredentialsProvider omitted.

// se_ServerSettings omitted.

// se_Settings omitted.

// se_Subnets omitted.

// se_Tags omitted.

// se_UpdateSettings omitted.

// de_ActiveDirectoryIdentityProvider omitted.

// de_ActiveDirectorySettings omitted.

// de_CredentialsProvider omitted.

// de_DomainNetworkSettings omitted.

// de_IdentityProvider omitted.

// de_IdentityProviderSummary omitted.

// de_IdentityProviderSummaryList omitted.

// de_InstanceSummary omitted.

// de_InstanceSummaryList omitted.

// de_InstanceUserSummary omitted.

// de_InstanceUserSummaryList omitted.

// de_IpV4List omitted.

// de_IpV6List omitted.

// de_LicenseServer omitted.

/**
 * deserializeAws_restJson1LicenseServerEndpoint
 */
const de_LicenseServerEndpoint = (output: any, context: __SerdeContext): LicenseServerEndpoint => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IdentityProviderArn: __expectString,
    LicenseServerEndpointArn: __expectString,
    LicenseServerEndpointId: __expectString,
    LicenseServerEndpointProvisioningStatus: __expectString,
    LicenseServers: _json,
    ServerEndpoint: _json,
    ServerType: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1LicenseServerEndpointList
 */
const de_LicenseServerEndpointList = (output: any, context: __SerdeContext): LicenseServerEndpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LicenseServerEndpoint(entry, context);
    });
  return retVal;
};

// de_LicenseServerList omitted.

// de_ProductUserSummary omitted.

// de_ProductUserSummaryList omitted.

// de_SecretsManagerCredentialsProvider omitted.

// de_ServerEndpoint omitted.

// de_Settings omitted.

// de_StringList omitted.

// de_Subnets omitted.

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

const _TK = "TagKeys";
const _tK = "tagKeys";
