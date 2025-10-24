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
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "@smithy/uuid";

import { AcceptLinkCommandInput, AcceptLinkCommandOutput } from "../commands/AcceptLinkCommand";
import {
  CreateInboundExternalLinkCommandInput,
  CreateInboundExternalLinkCommandOutput,
} from "../commands/CreateInboundExternalLinkCommand";
import { CreateLinkCommandInput, CreateLinkCommandOutput } from "../commands/CreateLinkCommand";
import {
  CreateOutboundExternalLinkCommandInput,
  CreateOutboundExternalLinkCommandOutput,
} from "../commands/CreateOutboundExternalLinkCommand";
import {
  CreateRequesterGatewayCommandInput,
  CreateRequesterGatewayCommandOutput,
} from "../commands/CreateRequesterGatewayCommand";
import {
  CreateResponderGatewayCommandInput,
  CreateResponderGatewayCommandOutput,
} from "../commands/CreateResponderGatewayCommand";
import {
  DeleteInboundExternalLinkCommandInput,
  DeleteInboundExternalLinkCommandOutput,
} from "../commands/DeleteInboundExternalLinkCommand";
import { DeleteLinkCommandInput, DeleteLinkCommandOutput } from "../commands/DeleteLinkCommand";
import {
  DeleteOutboundExternalLinkCommandInput,
  DeleteOutboundExternalLinkCommandOutput,
} from "../commands/DeleteOutboundExternalLinkCommand";
import {
  DeleteRequesterGatewayCommandInput,
  DeleteRequesterGatewayCommandOutput,
} from "../commands/DeleteRequesterGatewayCommand";
import {
  DeleteResponderGatewayCommandInput,
  DeleteResponderGatewayCommandOutput,
} from "../commands/DeleteResponderGatewayCommand";
import {
  GetInboundExternalLinkCommandInput,
  GetInboundExternalLinkCommandOutput,
} from "../commands/GetInboundExternalLinkCommand";
import { GetLinkCommandInput, GetLinkCommandOutput } from "../commands/GetLinkCommand";
import {
  GetOutboundExternalLinkCommandInput,
  GetOutboundExternalLinkCommandOutput,
} from "../commands/GetOutboundExternalLinkCommand";
import {
  GetRequesterGatewayCommandInput,
  GetRequesterGatewayCommandOutput,
} from "../commands/GetRequesterGatewayCommand";
import {
  GetResponderGatewayCommandInput,
  GetResponderGatewayCommandOutput,
} from "../commands/GetResponderGatewayCommand";
import { ListLinksCommandInput, ListLinksCommandOutput } from "../commands/ListLinksCommand";
import {
  ListRequesterGatewaysCommandInput,
  ListRequesterGatewaysCommandOutput,
} from "../commands/ListRequesterGatewaysCommand";
import {
  ListResponderGatewaysCommandInput,
  ListResponderGatewaysCommandOutput,
} from "../commands/ListResponderGatewaysCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { RejectLinkCommandInput, RejectLinkCommandOutput } from "../commands/RejectLinkCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateLinkCommandInput, UpdateLinkCommandOutput } from "../commands/UpdateLinkCommand";
import {
  UpdateLinkModuleFlowCommandInput,
  UpdateLinkModuleFlowCommandOutput,
} from "../commands/UpdateLinkModuleFlowCommand";
import {
  UpdateRequesterGatewayCommandInput,
  UpdateRequesterGatewayCommandOutput,
} from "../commands/UpdateRequesterGatewayCommand";
import {
  UpdateResponderGatewayCommandInput,
  UpdateResponderGatewayCommandOutput,
} from "../commands/UpdateResponderGatewayCommand";
import {
  AccessDeniedException,
  Action,
  AutoScalingGroupsConfiguration,
  ConflictException,
  EksEndpointsConfiguration,
  Filter,
  FilterCriterion,
  HeaderTagAction,
  InternalServerException,
  LinkApplicationLogConfiguration,
  LinkApplicationLogSampling,
  LinkAttributes,
  LinkLogSettings,
  ListLinksResponseStructure,
  ManagedEndpointConfiguration,
  ModuleConfiguration,
  ModuleParameters,
  NoBidAction,
  NoBidModuleParameters,
  OpenRtbAttributeModuleParameters,
  RateLimiterModuleParameters,
  ResourceNotFoundException,
  ResponderErrorMaskingForHttpCode,
  ResponderErrorMaskingLoggingType,
  ServiceQuotaExceededException,
  ThrottlingException,
  TrustStoreConfiguration,
  ValidationException,
} from "../models/models_0";
import { RTBFabricServiceException as __BaseException } from "../models/RTBFabricServiceException";

/**
 * serializeAws_restJson1AcceptLinkCommand
 */
export const se_AcceptLinkCommand = async (
  input: AcceptLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/gateway/{gatewayId}/link/{linkId}/accept");
  b.p("gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  b.p("linkId", () => input.linkId!, "{linkId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      attributes: (_) => se_LinkAttributes(_, context),
      logSettings: (_) => se_LinkLogSettings(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateInboundExternalLinkCommand
 */
export const se_CreateInboundExternalLinkCommand = async (
  input: CreateInboundExternalLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/responder-gateway/{gatewayId}/inbound-external-link");
  b.p("gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      attributes: (_) => se_LinkAttributes(_, context),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateLinkCommand
 */
export const se_CreateLinkCommand = async (
  input: CreateLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/gateway/{gatewayId}/create-link");
  b.p("gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      attributes: (_) => se_LinkAttributes(_, context),
      httpResponderAllowed: [],
      logSettings: (_) => se_LinkLogSettings(_, context),
      peerGatewayId: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateOutboundExternalLinkCommand
 */
export const se_CreateOutboundExternalLinkCommand = async (
  input: CreateOutboundExternalLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/requester-gateway/{gatewayId}/outbound-external-link");
  b.p("gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      publicEndpoint: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRequesterGatewayCommand
 */
export const se_CreateRequesterGatewayCommand = async (
  input: CreateRequesterGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/requester-gateway");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      securityGroupIds: (_) => _json(_),
      subnetIds: (_) => _json(_),
      tags: (_) => _json(_),
      vpcId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateResponderGatewayCommand
 */
export const se_CreateResponderGatewayCommand = async (
  input: CreateResponderGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/responder-gateway");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      domainName: [],
      managedEndpointConfiguration: (_) => _json(_),
      port: [],
      protocol: [],
      securityGroupIds: (_) => _json(_),
      subnetIds: (_) => _json(_),
      tags: (_) => _json(_),
      trustStoreConfiguration: (_) => _json(_),
      vpcId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteInboundExternalLinkCommand
 */
export const se_DeleteInboundExternalLinkCommand = async (
  input: DeleteInboundExternalLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/responder-gateway/{gatewayId}/inbound-external-link/{linkId}");
  b.p("gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  b.p("linkId", () => input.linkId!, "{linkId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteLinkCommand
 */
export const se_DeleteLinkCommand = async (
  input: DeleteLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/gateway/{gatewayId}/link/{linkId}");
  b.p("gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  b.p("linkId", () => input.linkId!, "{linkId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteOutboundExternalLinkCommand
 */
export const se_DeleteOutboundExternalLinkCommand = async (
  input: DeleteOutboundExternalLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/requester-gateway/{gatewayId}/outbound-external-link/{linkId}");
  b.p("gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  b.p("linkId", () => input.linkId!, "{linkId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRequesterGatewayCommand
 */
export const se_DeleteRequesterGatewayCommand = async (
  input: DeleteRequesterGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/requester-gateway/{gatewayId}");
  b.p("gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteResponderGatewayCommand
 */
export const se_DeleteResponderGatewayCommand = async (
  input: DeleteResponderGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/responder-gateway/{gatewayId}");
  b.p("gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetInboundExternalLinkCommand
 */
export const se_GetInboundExternalLinkCommand = async (
  input: GetInboundExternalLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/responder-gateway/{gatewayId}/inbound-external-link/{linkId}");
  b.p("gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  b.p("linkId", () => input.linkId!, "{linkId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLinkCommand
 */
export const se_GetLinkCommand = async (
  input: GetLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/gateway/{gatewayId}/link/{linkId}");
  b.p("gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  b.p("linkId", () => input.linkId!, "{linkId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetOutboundExternalLinkCommand
 */
export const se_GetOutboundExternalLinkCommand = async (
  input: GetOutboundExternalLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/requester-gateway/{gatewayId}/outbound-external-link/{linkId}");
  b.p("gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  b.p("linkId", () => input.linkId!, "{linkId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRequesterGatewayCommand
 */
export const se_GetRequesterGatewayCommand = async (
  input: GetRequesterGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/requester-gateway/{gatewayId}");
  b.p("gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetResponderGatewayCommand
 */
export const se_GetResponderGatewayCommand = async (
  input: GetResponderGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/responder-gateway/{gatewayId}");
  b.p("gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLinksCommand
 */
export const se_ListLinksCommand = async (
  input: ListLinksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/gateway/{gatewayId}/links");
  b.p("gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRequesterGatewaysCommand
 */
export const se_ListRequesterGatewaysCommand = async (
  input: ListRequesterGatewaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/requester-gateways");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListResponderGatewaysCommand
 */
export const se_ListResponderGatewaysCommand = async (
  input: ListResponderGatewaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/responder-gateways");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
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
 * serializeAws_restJson1RejectLinkCommand
 */
export const se_RejectLinkCommand = async (
  input: RejectLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/gateway/{gatewayId}/link/{linkId}/reject");
  b.p("gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  b.p("linkId", () => input.linkId!, "{linkId}", false);
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
 * serializeAws_restJson1UpdateLinkCommand
 */
export const se_UpdateLinkCommand = async (
  input: UpdateLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/gateway/{gatewayId}/link/{linkId}");
  b.p("gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  b.p("linkId", () => input.linkId!, "{linkId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      logSettings: (_) => se_LinkLogSettings(_, context),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateLinkModuleFlowCommand
 */
export const se_UpdateLinkModuleFlowCommand = async (
  input: UpdateLinkModuleFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/gateway/{gatewayId}/link/{linkId}/module-flow");
  b.p("gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  b.p("linkId", () => input.linkId!, "{linkId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      modules: (_) => se_ModuleConfigurationList(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRequesterGatewayCommand
 */
export const se_UpdateRequesterGatewayCommand = async (
  input: UpdateRequesterGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/requester-gateway/{gatewayId}/update");
  b.p("gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateResponderGatewayCommand
 */
export const se_UpdateResponderGatewayCommand = async (
  input: UpdateResponderGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/responder-gateway/{gatewayId}/update");
  b.p("gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      domainName: [],
      managedEndpointConfiguration: (_) => _json(_),
      port: [],
      protocol: [],
      trustStoreConfiguration: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AcceptLinkCommand
 */
export const de_AcceptLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    attributes: (_) => de_LinkAttributes(_, context),
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    direction: __expectString,
    flowModules: (_) => de_ModuleConfigurationList(_, context),
    gatewayId: __expectString,
    linkId: __expectString,
    peerGatewayId: __expectString,
    pendingFlowModules: (_) => de_ModuleConfigurationList(_, context),
    status: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateInboundExternalLinkCommand
 */
export const de_CreateInboundExternalLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInboundExternalLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    domainName: __expectString,
    gatewayId: __expectString,
    linkId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateLinkCommand
 */
export const de_CreateLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    attributes: (_) => de_LinkAttributes(_, context),
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    customerProvidedId: __expectString,
    direction: __expectString,
    flowModules: (_) => de_ModuleConfigurationList(_, context),
    gatewayId: __expectString,
    linkId: __expectString,
    peerGatewayId: __expectString,
    pendingFlowModules: (_) => de_ModuleConfigurationList(_, context),
    status: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateOutboundExternalLinkCommand
 */
export const de_CreateOutboundExternalLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOutboundExternalLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    gatewayId: __expectString,
    linkId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRequesterGatewayCommand
 */
export const de_CreateRequesterGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRequesterGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    domainName: __expectString,
    gatewayId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateResponderGatewayCommand
 */
export const de_CreateResponderGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResponderGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    gatewayId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteInboundExternalLinkCommand
 */
export const de_DeleteInboundExternalLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInboundExternalLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    linkId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteLinkCommand
 */
export const de_DeleteLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    linkId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteOutboundExternalLinkCommand
 */
export const de_DeleteOutboundExternalLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOutboundExternalLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    linkId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRequesterGatewayCommand
 */
export const de_DeleteRequesterGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRequesterGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    gatewayId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteResponderGatewayCommand
 */
export const de_DeleteResponderGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResponderGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    gatewayId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetInboundExternalLinkCommand
 */
export const de_GetInboundExternalLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInboundExternalLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    attributes: (_) => de_LinkAttributes(_, context),
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    domainName: __expectString,
    flowModules: (_) => de_ModuleConfigurationList(_, context),
    gatewayId: __expectString,
    linkId: __expectString,
    pendingFlowModules: (_) => de_ModuleConfigurationList(_, context),
    status: __expectString,
    tags: _json,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLinkCommand
 */
export const de_GetLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    attributes: (_) => de_LinkAttributes(_, context),
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    direction: __expectString,
    flowModules: (_) => de_ModuleConfigurationList(_, context),
    gatewayId: __expectString,
    linkId: __expectString,
    logSettings: (_) => de_LinkLogSettings(_, context),
    peerGatewayId: __expectString,
    pendingFlowModules: (_) => de_ModuleConfigurationList(_, context),
    status: __expectString,
    tags: _json,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetOutboundExternalLinkCommand
 */
export const de_GetOutboundExternalLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutboundExternalLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    gatewayId: __expectString,
    linkId: __expectString,
    publicEndpoint: __expectString,
    status: __expectString,
    tags: _json,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRequesterGatewayCommand
 */
export const de_GetRequesterGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRequesterGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    activeLinksCount: __expectInt32,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    domainName: __expectString,
    gatewayId: __expectString,
    securityGroupIds: _json,
    status: __expectString,
    subnetIds: _json,
    tags: _json,
    totalLinksCount: __expectInt32,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    vpcId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetResponderGatewayCommand
 */
export const de_GetResponderGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResponderGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    activeLinksCount: __expectInt32,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    domainName: __expectString,
    gatewayId: __expectString,
    inboundLinksCount: __expectInt32,
    managedEndpointConfiguration: (_) => _json(__expectUnion(_)),
    port: __expectInt32,
    protocol: __expectString,
    securityGroupIds: _json,
    status: __expectString,
    subnetIds: _json,
    tags: _json,
    totalLinksCount: __expectInt32,
    trustStoreConfiguration: _json,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    vpcId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLinksCommand
 */
export const de_ListLinksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLinksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    links: (_) => de_LinkList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRequesterGatewaysCommand
 */
export const de_ListRequesterGatewaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRequesterGatewaysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    gatewayIds: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListResponderGatewaysCommand
 */
export const de_ListResponderGatewaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResponderGatewaysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    gatewayIds: _json,
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
 * deserializeAws_restJson1RejectLinkCommand
 */
export const de_RejectLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    attributes: (_) => de_LinkAttributes(_, context),
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    direction: __expectString,
    flowModules: (_) => de_ModuleConfigurationList(_, context),
    gatewayId: __expectString,
    linkId: __expectString,
    peerGatewayId: __expectString,
    pendingFlowModules: (_) => de_ModuleConfigurationList(_, context),
    status: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
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
 * deserializeAws_restJson1UpdateLinkCommand
 */
export const de_UpdateLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    linkId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateLinkModuleFlowCommand
 */
export const de_UpdateLinkModuleFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLinkModuleFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    gatewayId: __expectString,
    linkId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRequesterGatewayCommand
 */
export const de_UpdateRequesterGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRequesterGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    gatewayId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateResponderGatewayCommand
 */
export const de_UpdateResponderGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResponderGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    gatewayId: __expectString,
    status: __expectString,
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
    case "com.amazonaws.rtbfabric#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.rtbfabric#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rtbfabric#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rtbfabric#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rtbfabric#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rtbfabric#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.rtbfabric#ServiceQuotaExceededException":
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

// se_Action omitted.

// se_AutoScalingGroupNameList omitted.

// se_AutoScalingGroupsConfiguration omitted.

// se_CertificateAuthorityCertificates omitted.

// se_EksEndpointsConfiguration omitted.

// se_Filter omitted.

// se_FilterConfiguration omitted.

// se_FilterCriteria omitted.

// se_FilterCriterion omitted.

// se_FlowModuleNameList omitted.

// se_HeaderTagAction omitted.

/**
 * serializeAws_restJson1LinkApplicationLogConfiguration
 */
const se_LinkApplicationLogConfiguration = (input: LinkApplicationLogConfiguration, context: __SerdeContext): any => {
  return take(input, {
    sampling: (_) => se_LinkApplicationLogSampling(_, context),
  });
};

/**
 * serializeAws_restJson1LinkApplicationLogSampling
 */
const se_LinkApplicationLogSampling = (input: LinkApplicationLogSampling, context: __SerdeContext): any => {
  return take(input, {
    errorLog: __serializeFloat,
    filterLog: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1LinkAttributes
 */
const se_LinkAttributes = (input: LinkAttributes, context: __SerdeContext): any => {
  return take(input, {
    customerProvidedId: [],
    responderErrorMasking: (_) => se_ResponderErrorMasking(_, context),
  });
};

/**
 * serializeAws_restJson1LinkLogSettings
 */
const se_LinkLogSettings = (input: LinkLogSettings, context: __SerdeContext): any => {
  return take(input, {
    applicationLogs: (_) => se_LinkApplicationLogConfiguration(_, context),
  });
};

// se_ManagedEndpointConfiguration omitted.

/**
 * serializeAws_restJson1ModuleConfiguration
 */
const se_ModuleConfiguration = (input: ModuleConfiguration, context: __SerdeContext): any => {
  return take(input, {
    dependsOn: _json,
    moduleParameters: (_) => se_ModuleParameters(_, context),
    name: [],
    version: [],
  });
};

/**
 * serializeAws_restJson1ModuleConfigurationList
 */
const se_ModuleConfigurationList = (input: ModuleConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ModuleConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1ModuleParameters
 */
const se_ModuleParameters = (input: ModuleParameters, context: __SerdeContext): any => {
  return ModuleParameters.visit(input, {
    noBid: (value) => ({ noBid: se_NoBidModuleParameters(value, context) }),
    openRtbAttribute: (value) => ({ openRtbAttribute: se_OpenRtbAttributeModuleParameters(value, context) }),
    rateLimiter: (value) => ({ rateLimiter: se_RateLimiterModuleParameters(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

// se_NoBidAction omitted.

/**
 * serializeAws_restJson1NoBidModuleParameters
 */
const se_NoBidModuleParameters = (input: NoBidModuleParameters, context: __SerdeContext): any => {
  return take(input, {
    passThroughPercentage: __serializeFloat,
    reason: [],
    reasonCode: [],
  });
};

/**
 * serializeAws_restJson1OpenRtbAttributeModuleParameters
 */
const se_OpenRtbAttributeModuleParameters = (input: OpenRtbAttributeModuleParameters, context: __SerdeContext): any => {
  return take(input, {
    action: _json,
    filterConfiguration: _json,
    filterType: [],
    holdbackPercentage: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1RateLimiterModuleParameters
 */
const se_RateLimiterModuleParameters = (input: RateLimiterModuleParameters, context: __SerdeContext): any => {
  return take(input, {
    tps: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1ResponderErrorMasking
 */
const se_ResponderErrorMasking = (input: ResponderErrorMaskingForHttpCode[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ResponderErrorMaskingForHttpCode(entry, context);
    });
};

/**
 * serializeAws_restJson1ResponderErrorMaskingForHttpCode
 */
const se_ResponderErrorMaskingForHttpCode = (input: ResponderErrorMaskingForHttpCode, context: __SerdeContext): any => {
  return take(input, {
    action: [],
    httpCode: [],
    loggingTypes: _json,
    responseLoggingPercentage: __serializeFloat,
  });
};

// se_ResponderErrorMaskingLoggingTypes omitted.

// se_SecurityGroupIdList omitted.

// se_SubnetIdList omitted.

// se_TagsMap omitted.

// se_TrustStoreConfiguration omitted.

// se_ValueList omitted.

// de_Action omitted.

// de_AutoScalingGroupNameList omitted.

// de_AutoScalingGroupsConfiguration omitted.

// de_CertificateAuthorityCertificates omitted.

// de_EksEndpointsConfiguration omitted.

// de_Filter omitted.

// de_FilterConfiguration omitted.

// de_FilterCriteria omitted.

// de_FilterCriterion omitted.

// de_FlowModuleNameList omitted.

// de_GatewayIdList omitted.

// de_HeaderTagAction omitted.

/**
 * deserializeAws_restJson1LinkApplicationLogConfiguration
 */
const de_LinkApplicationLogConfiguration = (output: any, context: __SerdeContext): LinkApplicationLogConfiguration => {
  return take(output, {
    sampling: (_: any) => de_LinkApplicationLogSampling(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1LinkApplicationLogSampling
 */
const de_LinkApplicationLogSampling = (output: any, context: __SerdeContext): LinkApplicationLogSampling => {
  return take(output, {
    errorLog: __limitedParseDouble,
    filterLog: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1LinkAttributes
 */
const de_LinkAttributes = (output: any, context: __SerdeContext): LinkAttributes => {
  return take(output, {
    customerProvidedId: __expectString,
    responderErrorMasking: (_: any) => de_ResponderErrorMasking(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1LinkList
 */
const de_LinkList = (output: any, context: __SerdeContext): ListLinksResponseStructure[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListLinksResponseStructure(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LinkLogSettings
 */
const de_LinkLogSettings = (output: any, context: __SerdeContext): LinkLogSettings => {
  return take(output, {
    applicationLogs: (_: any) => de_LinkApplicationLogConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ListLinksResponseStructure
 */
const de_ListLinksResponseStructure = (output: any, context: __SerdeContext): ListLinksResponseStructure => {
  return take(output, {
    attributes: (_: any) => de_LinkAttributes(_, context),
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    direction: __expectString,
    flowModules: (_: any) => de_ModuleConfigurationList(_, context),
    gatewayId: __expectString,
    linkId: __expectString,
    peerGatewayId: __expectString,
    pendingFlowModules: (_: any) => de_ModuleConfigurationList(_, context),
    status: __expectString,
    tags: _json,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ManagedEndpointConfiguration omitted.

/**
 * deserializeAws_restJson1ModuleConfiguration
 */
const de_ModuleConfiguration = (output: any, context: __SerdeContext): ModuleConfiguration => {
  return take(output, {
    dependsOn: _json,
    moduleParameters: (_: any) => de_ModuleParameters(__expectUnion(_), context),
    name: __expectString,
    version: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ModuleConfigurationList
 */
const de_ModuleConfigurationList = (output: any, context: __SerdeContext): ModuleConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModuleConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ModuleParameters
 */
const de_ModuleParameters = (output: any, context: __SerdeContext): ModuleParameters => {
  if (output.noBid != null) {
    return {
      noBid: de_NoBidModuleParameters(output.noBid, context),
    };
  }
  if (output.openRtbAttribute != null) {
    return {
      openRtbAttribute: de_OpenRtbAttributeModuleParameters(output.openRtbAttribute, context),
    };
  }
  if (output.rateLimiter != null) {
    return {
      rateLimiter: de_RateLimiterModuleParameters(output.rateLimiter, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_NoBidAction omitted.

/**
 * deserializeAws_restJson1NoBidModuleParameters
 */
const de_NoBidModuleParameters = (output: any, context: __SerdeContext): NoBidModuleParameters => {
  return take(output, {
    passThroughPercentage: __limitedParseFloat32,
    reason: __expectString,
    reasonCode: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1OpenRtbAttributeModuleParameters
 */
const de_OpenRtbAttributeModuleParameters = (
  output: any,
  context: __SerdeContext
): OpenRtbAttributeModuleParameters => {
  return take(output, {
    action: (_: any) => _json(__expectUnion(_)),
    filterConfiguration: _json,
    filterType: __expectString,
    holdbackPercentage: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_restJson1RateLimiterModuleParameters
 */
const de_RateLimiterModuleParameters = (output: any, context: __SerdeContext): RateLimiterModuleParameters => {
  return take(output, {
    tps: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_restJson1ResponderErrorMasking
 */
const de_ResponderErrorMasking = (output: any, context: __SerdeContext): ResponderErrorMaskingForHttpCode[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResponderErrorMaskingForHttpCode(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResponderErrorMaskingForHttpCode
 */
const de_ResponderErrorMaskingForHttpCode = (
  output: any,
  context: __SerdeContext
): ResponderErrorMaskingForHttpCode => {
  return take(output, {
    action: __expectString,
    httpCode: __expectString,
    loggingTypes: _json,
    responseLoggingPercentage: __limitedParseFloat32,
  }) as any;
};

// de_ResponderErrorMaskingLoggingTypes omitted.

// de_SecurityGroupIdList omitted.

// de_SubnetIdList omitted.

// de_TagsMap omitted.

// de_TrustStoreConfiguration omitted.

// de_ValueList omitted.

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
const _tK = "tagKeys";
