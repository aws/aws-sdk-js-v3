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
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
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
import { v4 as generateIdempotencyToken } from "@smithy/uuid";

import { BatchUpdateRuleCommandInput, BatchUpdateRuleCommandOutput } from "../commands/BatchUpdateRuleCommand";
import {
  CreateAccessLogSubscriptionCommandInput,
  CreateAccessLogSubscriptionCommandOutput,
} from "../commands/CreateAccessLogSubscriptionCommand";
import { CreateListenerCommandInput, CreateListenerCommandOutput } from "../commands/CreateListenerCommand";
import {
  CreateResourceConfigurationCommandInput,
  CreateResourceConfigurationCommandOutput,
} from "../commands/CreateResourceConfigurationCommand";
import {
  CreateResourceGatewayCommandInput,
  CreateResourceGatewayCommandOutput,
} from "../commands/CreateResourceGatewayCommand";
import { CreateRuleCommandInput, CreateRuleCommandOutput } from "../commands/CreateRuleCommand";
import { CreateServiceCommandInput, CreateServiceCommandOutput } from "../commands/CreateServiceCommand";
import {
  CreateServiceNetworkCommandInput,
  CreateServiceNetworkCommandOutput,
} from "../commands/CreateServiceNetworkCommand";
import {
  CreateServiceNetworkResourceAssociationCommandInput,
  CreateServiceNetworkResourceAssociationCommandOutput,
} from "../commands/CreateServiceNetworkResourceAssociationCommand";
import {
  CreateServiceNetworkServiceAssociationCommandInput,
  CreateServiceNetworkServiceAssociationCommandOutput,
} from "../commands/CreateServiceNetworkServiceAssociationCommand";
import {
  CreateServiceNetworkVpcAssociationCommandInput,
  CreateServiceNetworkVpcAssociationCommandOutput,
} from "../commands/CreateServiceNetworkVpcAssociationCommand";
import { CreateTargetGroupCommandInput, CreateTargetGroupCommandOutput } from "../commands/CreateTargetGroupCommand";
import {
  DeleteAccessLogSubscriptionCommandInput,
  DeleteAccessLogSubscriptionCommandOutput,
} from "../commands/DeleteAccessLogSubscriptionCommand";
import { DeleteAuthPolicyCommandInput, DeleteAuthPolicyCommandOutput } from "../commands/DeleteAuthPolicyCommand";
import { DeleteListenerCommandInput, DeleteListenerCommandOutput } from "../commands/DeleteListenerCommand";
import {
  DeleteResourceConfigurationCommandInput,
  DeleteResourceConfigurationCommandOutput,
} from "../commands/DeleteResourceConfigurationCommand";
import {
  DeleteResourceEndpointAssociationCommandInput,
  DeleteResourceEndpointAssociationCommandOutput,
} from "../commands/DeleteResourceEndpointAssociationCommand";
import {
  DeleteResourceGatewayCommandInput,
  DeleteResourceGatewayCommandOutput,
} from "../commands/DeleteResourceGatewayCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "../commands/DeleteResourcePolicyCommand";
import { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "../commands/DeleteRuleCommand";
import { DeleteServiceCommandInput, DeleteServiceCommandOutput } from "../commands/DeleteServiceCommand";
import {
  DeleteServiceNetworkCommandInput,
  DeleteServiceNetworkCommandOutput,
} from "../commands/DeleteServiceNetworkCommand";
import {
  DeleteServiceNetworkResourceAssociationCommandInput,
  DeleteServiceNetworkResourceAssociationCommandOutput,
} from "../commands/DeleteServiceNetworkResourceAssociationCommand";
import {
  DeleteServiceNetworkServiceAssociationCommandInput,
  DeleteServiceNetworkServiceAssociationCommandOutput,
} from "../commands/DeleteServiceNetworkServiceAssociationCommand";
import {
  DeleteServiceNetworkVpcAssociationCommandInput,
  DeleteServiceNetworkVpcAssociationCommandOutput,
} from "../commands/DeleteServiceNetworkVpcAssociationCommand";
import { DeleteTargetGroupCommandInput, DeleteTargetGroupCommandOutput } from "../commands/DeleteTargetGroupCommand";
import { DeregisterTargetsCommandInput, DeregisterTargetsCommandOutput } from "../commands/DeregisterTargetsCommand";
import {
  GetAccessLogSubscriptionCommandInput,
  GetAccessLogSubscriptionCommandOutput,
} from "../commands/GetAccessLogSubscriptionCommand";
import { GetAuthPolicyCommandInput, GetAuthPolicyCommandOutput } from "../commands/GetAuthPolicyCommand";
import { GetListenerCommandInput, GetListenerCommandOutput } from "../commands/GetListenerCommand";
import {
  GetResourceConfigurationCommandInput,
  GetResourceConfigurationCommandOutput,
} from "../commands/GetResourceConfigurationCommand";
import { GetResourceGatewayCommandInput, GetResourceGatewayCommandOutput } from "../commands/GetResourceGatewayCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "../commands/GetResourcePolicyCommand";
import { GetRuleCommandInput, GetRuleCommandOutput } from "../commands/GetRuleCommand";
import { GetServiceCommandInput, GetServiceCommandOutput } from "../commands/GetServiceCommand";
import { GetServiceNetworkCommandInput, GetServiceNetworkCommandOutput } from "../commands/GetServiceNetworkCommand";
import {
  GetServiceNetworkResourceAssociationCommandInput,
  GetServiceNetworkResourceAssociationCommandOutput,
} from "../commands/GetServiceNetworkResourceAssociationCommand";
import {
  GetServiceNetworkServiceAssociationCommandInput,
  GetServiceNetworkServiceAssociationCommandOutput,
} from "../commands/GetServiceNetworkServiceAssociationCommand";
import {
  GetServiceNetworkVpcAssociationCommandInput,
  GetServiceNetworkVpcAssociationCommandOutput,
} from "../commands/GetServiceNetworkVpcAssociationCommand";
import { GetTargetGroupCommandInput, GetTargetGroupCommandOutput } from "../commands/GetTargetGroupCommand";
import {
  ListAccessLogSubscriptionsCommandInput,
  ListAccessLogSubscriptionsCommandOutput,
} from "../commands/ListAccessLogSubscriptionsCommand";
import { ListListenersCommandInput, ListListenersCommandOutput } from "../commands/ListListenersCommand";
import {
  ListResourceConfigurationsCommandInput,
  ListResourceConfigurationsCommandOutput,
} from "../commands/ListResourceConfigurationsCommand";
import {
  ListResourceEndpointAssociationsCommandInput,
  ListResourceEndpointAssociationsCommandOutput,
} from "../commands/ListResourceEndpointAssociationsCommand";
import {
  ListResourceGatewaysCommandInput,
  ListResourceGatewaysCommandOutput,
} from "../commands/ListResourceGatewaysCommand";
import { ListRulesCommandInput, ListRulesCommandOutput } from "../commands/ListRulesCommand";
import {
  ListServiceNetworkResourceAssociationsCommandInput,
  ListServiceNetworkResourceAssociationsCommandOutput,
} from "../commands/ListServiceNetworkResourceAssociationsCommand";
import {
  ListServiceNetworksCommandInput,
  ListServiceNetworksCommandOutput,
} from "../commands/ListServiceNetworksCommand";
import {
  ListServiceNetworkServiceAssociationsCommandInput,
  ListServiceNetworkServiceAssociationsCommandOutput,
} from "../commands/ListServiceNetworkServiceAssociationsCommand";
import {
  ListServiceNetworkVpcAssociationsCommandInput,
  ListServiceNetworkVpcAssociationsCommandOutput,
} from "../commands/ListServiceNetworkVpcAssociationsCommand";
import {
  ListServiceNetworkVpcEndpointAssociationsCommandInput,
  ListServiceNetworkVpcEndpointAssociationsCommandOutput,
} from "../commands/ListServiceNetworkVpcEndpointAssociationsCommand";
import { ListServicesCommandInput, ListServicesCommandOutput } from "../commands/ListServicesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTargetGroupsCommandInput, ListTargetGroupsCommandOutput } from "../commands/ListTargetGroupsCommand";
import { ListTargetsCommandInput, ListTargetsCommandOutput } from "../commands/ListTargetsCommand";
import { PutAuthPolicyCommandInput, PutAuthPolicyCommandOutput } from "../commands/PutAuthPolicyCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "../commands/PutResourcePolicyCommand";
import { RegisterTargetsCommandInput, RegisterTargetsCommandOutput } from "../commands/RegisterTargetsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateAccessLogSubscriptionCommandInput,
  UpdateAccessLogSubscriptionCommandOutput,
} from "../commands/UpdateAccessLogSubscriptionCommand";
import { UpdateListenerCommandInput, UpdateListenerCommandOutput } from "../commands/UpdateListenerCommand";
import {
  UpdateResourceConfigurationCommandInput,
  UpdateResourceConfigurationCommandOutput,
} from "../commands/UpdateResourceConfigurationCommand";
import {
  UpdateResourceGatewayCommandInput,
  UpdateResourceGatewayCommandOutput,
} from "../commands/UpdateResourceGatewayCommand";
import { UpdateRuleCommandInput, UpdateRuleCommandOutput } from "../commands/UpdateRuleCommand";
import { UpdateServiceCommandInput, UpdateServiceCommandOutput } from "../commands/UpdateServiceCommand";
import {
  UpdateServiceNetworkCommandInput,
  UpdateServiceNetworkCommandOutput,
} from "../commands/UpdateServiceNetworkCommand";
import {
  UpdateServiceNetworkVpcAssociationCommandInput,
  UpdateServiceNetworkVpcAssociationCommandOutput,
} from "../commands/UpdateServiceNetworkVpcAssociationCommand";
import { UpdateTargetGroupCommandInput, UpdateTargetGroupCommandOutput } from "../commands/UpdateTargetGroupCommand";
import {
  AccessDeniedException,
  AccessLogSubscriptionSummary,
  ArnResource,
  ConflictException,
  DnsResource,
  FixedResponseAction,
  ForwardAction,
  HeaderMatch,
  HeaderMatchType,
  HealthCheckConfig,
  HttpMatch,
  InternalServerException,
  IpResource,
  ListenerSummary,
  Matcher,
  PathMatch,
  PathMatchType,
  ResourceConfigurationDefinition,
  ResourceConfigurationSummary,
  ResourceEndpointAssociationSummary,
  ResourceGatewaySummary,
  ResourceNotFoundException,
  RuleAction,
  RuleMatch,
  RuleSummary,
  RuleUpdate,
  ServiceNetworkEndpointAssociation,
  ServiceNetworkResourceAssociationSummary,
  ServiceNetworkServiceAssociationSummary,
  ServiceNetworkSummary,
  ServiceNetworkVpcAssociationSummary,
  ServiceQuotaExceededException,
  ServiceSummary,
  SharingConfig,
  Target,
  TargetGroupConfig,
  TargetGroupSummary,
  ThrottlingException,
  ValidationException,
  WeightedTargetGroup,
} from "../models/models_0";
import { VPCLatticeServiceException as __BaseException } from "../models/VPCLatticeServiceException";

/**
 * serializeAws_restJson1BatchUpdateRuleCommand
 */
export const se_BatchUpdateRuleCommand = async (
  input: BatchUpdateRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules");
  b.p("serviceIdentifier", () => input.serviceIdentifier!, "{serviceIdentifier}", false);
  b.p("listenerIdentifier", () => input.listenerIdentifier!, "{listenerIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      rules: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAccessLogSubscriptionCommand
 */
export const se_CreateAccessLogSubscriptionCommand = async (
  input: CreateAccessLogSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accesslogsubscriptions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      destinationArn: [],
      resourceIdentifier: [],
      serviceNetworkLogType: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateListenerCommand
 */
export const se_CreateListenerCommand = async (
  input: CreateListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/services/{serviceIdentifier}/listeners");
  b.p("serviceIdentifier", () => input.serviceIdentifier!, "{serviceIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      defaultAction: (_) => _json(_),
      name: [],
      port: [],
      protocol: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateResourceConfigurationCommand
 */
export const se_CreateResourceConfigurationCommand = async (
  input: CreateResourceConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/resourceconfigurations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      allowAssociationToShareableServiceNetwork: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      name: [],
      portRanges: (_) => _json(_),
      protocol: [],
      resourceConfigurationDefinition: (_) => _json(_),
      resourceConfigurationGroupIdentifier: [],
      resourceGatewayIdentifier: [],
      tags: (_) => _json(_),
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateResourceGatewayCommand
 */
export const se_CreateResourceGatewayCommand = async (
  input: CreateResourceGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/resourcegateways");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ipAddressType: [],
      ipv4AddressesPerEni: [],
      name: [],
      securityGroupIds: (_) => _json(_),
      subnetIds: (_) => _json(_),
      tags: (_) => _json(_),
      vpcIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRuleCommand
 */
export const se_CreateRuleCommand = async (
  input: CreateRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules");
  b.p("serviceIdentifier", () => input.serviceIdentifier!, "{serviceIdentifier}", false);
  b.p("listenerIdentifier", () => input.listenerIdentifier!, "{listenerIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      action: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      match: (_) => _json(_),
      name: [],
      priority: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateServiceCommand
 */
export const se_CreateServiceCommand = async (
  input: CreateServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/services");
  let body: any;
  body = JSON.stringify(
    take(input, {
      authType: [],
      certificateArn: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      customDomainName: [],
      name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateServiceNetworkCommand
 */
export const se_CreateServiceNetworkCommand = async (
  input: CreateServiceNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/servicenetworks");
  let body: any;
  body = JSON.stringify(
    take(input, {
      authType: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      name: [],
      sharingConfig: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateServiceNetworkResourceAssociationCommand
 */
export const se_CreateServiceNetworkResourceAssociationCommand = async (
  input: CreateServiceNetworkResourceAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/servicenetworkresourceassociations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      resourceConfigurationIdentifier: [],
      serviceNetworkIdentifier: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateServiceNetworkServiceAssociationCommand
 */
export const se_CreateServiceNetworkServiceAssociationCommand = async (
  input: CreateServiceNetworkServiceAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/servicenetworkserviceassociations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      serviceIdentifier: [],
      serviceNetworkIdentifier: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateServiceNetworkVpcAssociationCommand
 */
export const se_CreateServiceNetworkVpcAssociationCommand = async (
  input: CreateServiceNetworkVpcAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/servicenetworkvpcassociations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      securityGroupIds: (_) => _json(_),
      serviceNetworkIdentifier: [],
      tags: (_) => _json(_),
      vpcIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTargetGroupCommand
 */
export const se_CreateTargetGroupCommand = async (
  input: CreateTargetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/targetgroups");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      config: (_) => _json(_),
      name: [],
      tags: (_) => _json(_),
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAccessLogSubscriptionCommand
 */
export const se_DeleteAccessLogSubscriptionCommand = async (
  input: DeleteAccessLogSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accesslogsubscriptions/{accessLogSubscriptionIdentifier}");
  b.p(
    "accessLogSubscriptionIdentifier",
    () => input.accessLogSubscriptionIdentifier!,
    "{accessLogSubscriptionIdentifier}",
    false
  );
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAuthPolicyCommand
 */
export const se_DeleteAuthPolicyCommand = async (
  input: DeleteAuthPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/authpolicy/{resourceIdentifier}");
  b.p("resourceIdentifier", () => input.resourceIdentifier!, "{resourceIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteListenerCommand
 */
export const se_DeleteListenerCommand = async (
  input: DeleteListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/services/{serviceIdentifier}/listeners/{listenerIdentifier}");
  b.p("serviceIdentifier", () => input.serviceIdentifier!, "{serviceIdentifier}", false);
  b.p("listenerIdentifier", () => input.listenerIdentifier!, "{listenerIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteResourceConfigurationCommand
 */
export const se_DeleteResourceConfigurationCommand = async (
  input: DeleteResourceConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/resourceconfigurations/{resourceConfigurationIdentifier}");
  b.p(
    "resourceConfigurationIdentifier",
    () => input.resourceConfigurationIdentifier!,
    "{resourceConfigurationIdentifier}",
    false
  );
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteResourceEndpointAssociationCommand
 */
export const se_DeleteResourceEndpointAssociationCommand = async (
  input: DeleteResourceEndpointAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/resourceendpointassociations/{resourceEndpointAssociationIdentifier}");
  b.p(
    "resourceEndpointAssociationIdentifier",
    () => input.resourceEndpointAssociationIdentifier!,
    "{resourceEndpointAssociationIdentifier}",
    false
  );
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteResourceGatewayCommand
 */
export const se_DeleteResourceGatewayCommand = async (
  input: DeleteResourceGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/resourcegateways/{resourceGatewayIdentifier}");
  b.p("resourceGatewayIdentifier", () => input.resourceGatewayIdentifier!, "{resourceGatewayIdentifier}", false);
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
  b.bp("/resourcepolicy/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRuleCommand
 */
export const se_DeleteRuleCommand = async (
  input: DeleteRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules/{ruleIdentifier}");
  b.p("serviceIdentifier", () => input.serviceIdentifier!, "{serviceIdentifier}", false);
  b.p("listenerIdentifier", () => input.listenerIdentifier!, "{listenerIdentifier}", false);
  b.p("ruleIdentifier", () => input.ruleIdentifier!, "{ruleIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteServiceCommand
 */
export const se_DeleteServiceCommand = async (
  input: DeleteServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/services/{serviceIdentifier}");
  b.p("serviceIdentifier", () => input.serviceIdentifier!, "{serviceIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteServiceNetworkCommand
 */
export const se_DeleteServiceNetworkCommand = async (
  input: DeleteServiceNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/servicenetworks/{serviceNetworkIdentifier}");
  b.p("serviceNetworkIdentifier", () => input.serviceNetworkIdentifier!, "{serviceNetworkIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteServiceNetworkResourceAssociationCommand
 */
export const se_DeleteServiceNetworkResourceAssociationCommand = async (
  input: DeleteServiceNetworkResourceAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/servicenetworkresourceassociations/{serviceNetworkResourceAssociationIdentifier}");
  b.p(
    "serviceNetworkResourceAssociationIdentifier",
    () => input.serviceNetworkResourceAssociationIdentifier!,
    "{serviceNetworkResourceAssociationIdentifier}",
    false
  );
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteServiceNetworkServiceAssociationCommand
 */
export const se_DeleteServiceNetworkServiceAssociationCommand = async (
  input: DeleteServiceNetworkServiceAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/servicenetworkserviceassociations/{serviceNetworkServiceAssociationIdentifier}");
  b.p(
    "serviceNetworkServiceAssociationIdentifier",
    () => input.serviceNetworkServiceAssociationIdentifier!,
    "{serviceNetworkServiceAssociationIdentifier}",
    false
  );
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteServiceNetworkVpcAssociationCommand
 */
export const se_DeleteServiceNetworkVpcAssociationCommand = async (
  input: DeleteServiceNetworkVpcAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/servicenetworkvpcassociations/{serviceNetworkVpcAssociationIdentifier}");
  b.p(
    "serviceNetworkVpcAssociationIdentifier",
    () => input.serviceNetworkVpcAssociationIdentifier!,
    "{serviceNetworkVpcAssociationIdentifier}",
    false
  );
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTargetGroupCommand
 */
export const se_DeleteTargetGroupCommand = async (
  input: DeleteTargetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/targetgroups/{targetGroupIdentifier}");
  b.p("targetGroupIdentifier", () => input.targetGroupIdentifier!, "{targetGroupIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeregisterTargetsCommand
 */
export const se_DeregisterTargetsCommand = async (
  input: DeregisterTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/targetgroups/{targetGroupIdentifier}/deregistertargets");
  b.p("targetGroupIdentifier", () => input.targetGroupIdentifier!, "{targetGroupIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      targets: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAccessLogSubscriptionCommand
 */
export const se_GetAccessLogSubscriptionCommand = async (
  input: GetAccessLogSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accesslogsubscriptions/{accessLogSubscriptionIdentifier}");
  b.p(
    "accessLogSubscriptionIdentifier",
    () => input.accessLogSubscriptionIdentifier!,
    "{accessLogSubscriptionIdentifier}",
    false
  );
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAuthPolicyCommand
 */
export const se_GetAuthPolicyCommand = async (
  input: GetAuthPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/authpolicy/{resourceIdentifier}");
  b.p("resourceIdentifier", () => input.resourceIdentifier!, "{resourceIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetListenerCommand
 */
export const se_GetListenerCommand = async (
  input: GetListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/services/{serviceIdentifier}/listeners/{listenerIdentifier}");
  b.p("serviceIdentifier", () => input.serviceIdentifier!, "{serviceIdentifier}", false);
  b.p("listenerIdentifier", () => input.listenerIdentifier!, "{listenerIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetResourceConfigurationCommand
 */
export const se_GetResourceConfigurationCommand = async (
  input: GetResourceConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/resourceconfigurations/{resourceConfigurationIdentifier}");
  b.p(
    "resourceConfigurationIdentifier",
    () => input.resourceConfigurationIdentifier!,
    "{resourceConfigurationIdentifier}",
    false
  );
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetResourceGatewayCommand
 */
export const se_GetResourceGatewayCommand = async (
  input: GetResourceGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/resourcegateways/{resourceGatewayIdentifier}");
  b.p("resourceGatewayIdentifier", () => input.resourceGatewayIdentifier!, "{resourceGatewayIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
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
  b.bp("/resourcepolicy/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRuleCommand
 */
export const se_GetRuleCommand = async (
  input: GetRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules/{ruleIdentifier}");
  b.p("serviceIdentifier", () => input.serviceIdentifier!, "{serviceIdentifier}", false);
  b.p("listenerIdentifier", () => input.listenerIdentifier!, "{listenerIdentifier}", false);
  b.p("ruleIdentifier", () => input.ruleIdentifier!, "{ruleIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetServiceCommand
 */
export const se_GetServiceCommand = async (
  input: GetServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/services/{serviceIdentifier}");
  b.p("serviceIdentifier", () => input.serviceIdentifier!, "{serviceIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetServiceNetworkCommand
 */
export const se_GetServiceNetworkCommand = async (
  input: GetServiceNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/servicenetworks/{serviceNetworkIdentifier}");
  b.p("serviceNetworkIdentifier", () => input.serviceNetworkIdentifier!, "{serviceNetworkIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetServiceNetworkResourceAssociationCommand
 */
export const se_GetServiceNetworkResourceAssociationCommand = async (
  input: GetServiceNetworkResourceAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/servicenetworkresourceassociations/{serviceNetworkResourceAssociationIdentifier}");
  b.p(
    "serviceNetworkResourceAssociationIdentifier",
    () => input.serviceNetworkResourceAssociationIdentifier!,
    "{serviceNetworkResourceAssociationIdentifier}",
    false
  );
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetServiceNetworkServiceAssociationCommand
 */
export const se_GetServiceNetworkServiceAssociationCommand = async (
  input: GetServiceNetworkServiceAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/servicenetworkserviceassociations/{serviceNetworkServiceAssociationIdentifier}");
  b.p(
    "serviceNetworkServiceAssociationIdentifier",
    () => input.serviceNetworkServiceAssociationIdentifier!,
    "{serviceNetworkServiceAssociationIdentifier}",
    false
  );
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetServiceNetworkVpcAssociationCommand
 */
export const se_GetServiceNetworkVpcAssociationCommand = async (
  input: GetServiceNetworkVpcAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/servicenetworkvpcassociations/{serviceNetworkVpcAssociationIdentifier}");
  b.p(
    "serviceNetworkVpcAssociationIdentifier",
    () => input.serviceNetworkVpcAssociationIdentifier!,
    "{serviceNetworkVpcAssociationIdentifier}",
    false
  );
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTargetGroupCommand
 */
export const se_GetTargetGroupCommand = async (
  input: GetTargetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/targetgroups/{targetGroupIdentifier}");
  b.p("targetGroupIdentifier", () => input.targetGroupIdentifier!, "{targetGroupIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAccessLogSubscriptionsCommand
 */
export const se_ListAccessLogSubscriptionsCommand = async (
  input: ListAccessLogSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accesslogsubscriptions");
  const query: any = map({
    [_rI]: [, __expectNonNull(input[_rI]!, `resourceIdentifier`)],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListListenersCommand
 */
export const se_ListListenersCommand = async (
  input: ListListenersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/services/{serviceIdentifier}/listeners");
  b.p("serviceIdentifier", () => input.serviceIdentifier!, "{serviceIdentifier}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListResourceConfigurationsCommand
 */
export const se_ListResourceConfigurationsCommand = async (
  input: ListResourceConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/resourceconfigurations");
  const query: any = map({
    [_rGI]: [, input[_rGI]!],
    [_rCGI]: [, input[_rCGI]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListResourceEndpointAssociationsCommand
 */
export const se_ListResourceEndpointAssociationsCommand = async (
  input: ListResourceEndpointAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/resourceendpointassociations");
  const query: any = map({
    [_rCI]: [, __expectNonNull(input[_rCI]!, `resourceConfigurationIdentifier`)],
    [_rEAI]: [, input[_rEAI]!],
    [_vEI]: [, input[_vEI]!],
    [_vEO]: [, input[_vEO]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListResourceGatewaysCommand
 */
export const se_ListResourceGatewaysCommand = async (
  input: ListResourceGatewaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/resourcegateways");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRulesCommand
 */
export const se_ListRulesCommand = async (
  input: ListRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules");
  b.p("serviceIdentifier", () => input.serviceIdentifier!, "{serviceIdentifier}", false);
  b.p("listenerIdentifier", () => input.listenerIdentifier!, "{listenerIdentifier}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListServiceNetworkResourceAssociationsCommand
 */
export const se_ListServiceNetworkResourceAssociationsCommand = async (
  input: ListServiceNetworkResourceAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/servicenetworkresourceassociations");
  const query: any = map({
    [_sNI]: [, input[_sNI]!],
    [_rCI]: [, input[_rCI]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_iC]: [() => input.includeChildren !== void 0, () => input[_iC]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListServiceNetworksCommand
 */
export const se_ListServiceNetworksCommand = async (
  input: ListServiceNetworksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/servicenetworks");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListServiceNetworkServiceAssociationsCommand
 */
export const se_ListServiceNetworkServiceAssociationsCommand = async (
  input: ListServiceNetworkServiceAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/servicenetworkserviceassociations");
  const query: any = map({
    [_sNI]: [, input[_sNI]!],
    [_sI]: [, input[_sI]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListServiceNetworkVpcAssociationsCommand
 */
export const se_ListServiceNetworkVpcAssociationsCommand = async (
  input: ListServiceNetworkVpcAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/servicenetworkvpcassociations");
  const query: any = map({
    [_sNI]: [, input[_sNI]!],
    [_vI]: [, input[_vI]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListServiceNetworkVpcEndpointAssociationsCommand
 */
export const se_ListServiceNetworkVpcEndpointAssociationsCommand = async (
  input: ListServiceNetworkVpcEndpointAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/servicenetworkvpcendpointassociations");
  const query: any = map({
    [_sNI]: [, __expectNonNull(input[_sNI]!, `serviceNetworkIdentifier`)],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListServicesCommand
 */
export const se_ListServicesCommand = async (
  input: ListServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/services");
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
 * serializeAws_restJson1ListTargetGroupsCommand
 */
export const se_ListTargetGroupsCommand = async (
  input: ListTargetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/targetgroups");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_vI]: [, input[_vI]!],
    [_tGT]: [, input[_tGT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTargetsCommand
 */
export const se_ListTargetsCommand = async (
  input: ListTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/targetgroups/{targetGroupIdentifier}/listtargets");
  b.p("targetGroupIdentifier", () => input.targetGroupIdentifier!, "{targetGroupIdentifier}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      targets: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutAuthPolicyCommand
 */
export const se_PutAuthPolicyCommand = async (
  input: PutAuthPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/authpolicy/{resourceIdentifier}");
  b.p("resourceIdentifier", () => input.resourceIdentifier!, "{resourceIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      policy: [],
    })
  );
  b.m("PUT").h(headers).b(body);
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
  b.bp("/resourcepolicy/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      policy: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RegisterTargetsCommand
 */
export const se_RegisterTargetsCommand = async (
  input: RegisterTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/targetgroups/{targetGroupIdentifier}/registertargets");
  b.p("targetGroupIdentifier", () => input.targetGroupIdentifier!, "{targetGroupIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      targets: (_) => _json(_),
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
 * serializeAws_restJson1UpdateAccessLogSubscriptionCommand
 */
export const se_UpdateAccessLogSubscriptionCommand = async (
  input: UpdateAccessLogSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accesslogsubscriptions/{accessLogSubscriptionIdentifier}");
  b.p(
    "accessLogSubscriptionIdentifier",
    () => input.accessLogSubscriptionIdentifier!,
    "{accessLogSubscriptionIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      destinationArn: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateListenerCommand
 */
export const se_UpdateListenerCommand = async (
  input: UpdateListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/services/{serviceIdentifier}/listeners/{listenerIdentifier}");
  b.p("serviceIdentifier", () => input.serviceIdentifier!, "{serviceIdentifier}", false);
  b.p("listenerIdentifier", () => input.listenerIdentifier!, "{listenerIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      defaultAction: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateResourceConfigurationCommand
 */
export const se_UpdateResourceConfigurationCommand = async (
  input: UpdateResourceConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/resourceconfigurations/{resourceConfigurationIdentifier}");
  b.p(
    "resourceConfigurationIdentifier",
    () => input.resourceConfigurationIdentifier!,
    "{resourceConfigurationIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      allowAssociationToShareableServiceNetwork: [],
      portRanges: (_) => _json(_),
      resourceConfigurationDefinition: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateResourceGatewayCommand
 */
export const se_UpdateResourceGatewayCommand = async (
  input: UpdateResourceGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/resourcegateways/{resourceGatewayIdentifier}");
  b.p("resourceGatewayIdentifier", () => input.resourceGatewayIdentifier!, "{resourceGatewayIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      securityGroupIds: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRuleCommand
 */
export const se_UpdateRuleCommand = async (
  input: UpdateRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules/{ruleIdentifier}");
  b.p("serviceIdentifier", () => input.serviceIdentifier!, "{serviceIdentifier}", false);
  b.p("listenerIdentifier", () => input.listenerIdentifier!, "{listenerIdentifier}", false);
  b.p("ruleIdentifier", () => input.ruleIdentifier!, "{ruleIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      action: (_) => _json(_),
      match: (_) => _json(_),
      priority: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateServiceCommand
 */
export const se_UpdateServiceCommand = async (
  input: UpdateServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/services/{serviceIdentifier}");
  b.p("serviceIdentifier", () => input.serviceIdentifier!, "{serviceIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      authType: [],
      certificateArn: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateServiceNetworkCommand
 */
export const se_UpdateServiceNetworkCommand = async (
  input: UpdateServiceNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/servicenetworks/{serviceNetworkIdentifier}");
  b.p("serviceNetworkIdentifier", () => input.serviceNetworkIdentifier!, "{serviceNetworkIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      authType: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateServiceNetworkVpcAssociationCommand
 */
export const se_UpdateServiceNetworkVpcAssociationCommand = async (
  input: UpdateServiceNetworkVpcAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/servicenetworkvpcassociations/{serviceNetworkVpcAssociationIdentifier}");
  b.p(
    "serviceNetworkVpcAssociationIdentifier",
    () => input.serviceNetworkVpcAssociationIdentifier!,
    "{serviceNetworkVpcAssociationIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      securityGroupIds: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateTargetGroupCommand
 */
export const se_UpdateTargetGroupCommand = async (
  input: UpdateTargetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/targetgroups/{targetGroupIdentifier}");
  b.p("targetGroupIdentifier", () => input.targetGroupIdentifier!, "{targetGroupIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      healthCheck: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1BatchUpdateRuleCommand
 */
export const de_BatchUpdateRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    successful: _json,
    unsuccessful: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAccessLogSubscriptionCommand
 */
export const de_CreateAccessLogSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessLogSubscriptionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    destinationArn: __expectString,
    id: __expectString,
    resourceArn: __expectString,
    resourceId: __expectString,
    serviceNetworkLogType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateListenerCommand
 */
export const de_CreateListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateListenerCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    defaultAction: (_) => _json(__expectUnion(_)),
    id: __expectString,
    name: __expectString,
    port: __expectInt32,
    protocol: __expectString,
    serviceArn: __expectString,
    serviceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateResourceConfigurationCommand
 */
export const de_CreateResourceConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceConfigurationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    allowAssociationToShareableServiceNetwork: __expectBoolean,
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    failureReason: __expectString,
    id: __expectString,
    name: __expectString,
    portRanges: _json,
    protocol: __expectString,
    resourceConfigurationDefinition: (_) => _json(__expectUnion(_)),
    resourceConfigurationGroupId: __expectString,
    resourceGatewayId: __expectString,
    status: __expectString,
    type: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateResourceGatewayCommand
 */
export const de_CreateResourceGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceGatewayCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    ipAddressType: __expectString,
    ipv4AddressesPerEni: __expectInt32,
    name: __expectString,
    securityGroupIds: _json,
    status: __expectString,
    subnetIds: _json,
    vpcIdentifier: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRuleCommand
 */
export const de_CreateRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    action: (_) => _json(__expectUnion(_)),
    arn: __expectString,
    id: __expectString,
    match: (_) => _json(__expectUnion(_)),
    name: __expectString,
    priority: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateServiceCommand
 */
export const de_CreateServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    authType: __expectString,
    certificateArn: __expectString,
    customDomainName: __expectString,
    dnsEntry: _json,
    id: __expectString,
    name: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateServiceNetworkCommand
 */
export const de_CreateServiceNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceNetworkCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    authType: __expectString,
    id: __expectString,
    name: __expectString,
    sharingConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateServiceNetworkResourceAssociationCommand
 */
export const de_CreateServiceNetworkResourceAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceNetworkResourceAssociationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createdBy: __expectString,
    id: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateServiceNetworkServiceAssociationCommand
 */
export const de_CreateServiceNetworkServiceAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceNetworkServiceAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createdBy: __expectString,
    customDomainName: __expectString,
    dnsEntry: _json,
    id: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateServiceNetworkVpcAssociationCommand
 */
export const de_CreateServiceNetworkVpcAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceNetworkVpcAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createdBy: __expectString,
    id: __expectString,
    securityGroupIds: _json,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTargetGroupCommand
 */
export const de_CreateTargetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTargetGroupCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    config: _json,
    id: __expectString,
    name: __expectString,
    status: __expectString,
    type: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAccessLogSubscriptionCommand
 */
export const de_DeleteAccessLogSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessLogSubscriptionCommandOutput> => {
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
 * deserializeAws_restJson1DeleteAuthPolicyCommand
 */
export const de_DeleteAuthPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAuthPolicyCommandOutput> => {
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
 * deserializeAws_restJson1DeleteListenerCommand
 */
export const de_DeleteListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteListenerCommandOutput> => {
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
 * deserializeAws_restJson1DeleteResourceConfigurationCommand
 */
export const de_DeleteResourceConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceConfigurationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteResourceEndpointAssociationCommand
 */
export const de_DeleteResourceEndpointAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceEndpointAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    resourceConfigurationArn: __expectString,
    resourceConfigurationId: __expectString,
    vpcEndpointId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteResourceGatewayCommand
 */
export const de_DeleteResourceGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
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
 * deserializeAws_restJson1DeleteRuleCommand
 */
export const de_DeleteRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
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
 * deserializeAws_restJson1DeleteServiceCommand
 */
export const de_DeleteServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteServiceNetworkCommand
 */
export const de_DeleteServiceNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceNetworkCommandOutput> => {
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
 * deserializeAws_restJson1DeleteServiceNetworkResourceAssociationCommand
 */
export const de_DeleteServiceNetworkResourceAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceNetworkResourceAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteServiceNetworkServiceAssociationCommand
 */
export const de_DeleteServiceNetworkServiceAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceNetworkServiceAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteServiceNetworkVpcAssociationCommand
 */
export const de_DeleteServiceNetworkVpcAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceNetworkVpcAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTargetGroupCommand
 */
export const de_DeleteTargetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTargetGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeregisterTargetsCommand
 */
export const de_DeregisterTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTargetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    successful: _json,
    unsuccessful: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAccessLogSubscriptionCommand
 */
export const de_GetAccessLogSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessLogSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    destinationArn: __expectString,
    id: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    resourceArn: __expectString,
    resourceId: __expectString,
    serviceNetworkLogType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAuthPolicyCommand
 */
export const de_GetAuthPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policy: __expectString,
    state: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetListenerCommand
 */
export const de_GetListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetListenerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    defaultAction: (_) => _json(__expectUnion(_)),
    id: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    port: __expectInt32,
    protocol: __expectString,
    serviceArn: __expectString,
    serviceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetResourceConfigurationCommand
 */
export const de_GetResourceConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    allowAssociationToShareableServiceNetwork: __expectBoolean,
    amazonManaged: __expectBoolean,
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customDomainName: __expectString,
    failureReason: __expectString,
    id: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    portRanges: _json,
    protocol: __expectString,
    resourceConfigurationDefinition: (_) => _json(__expectUnion(_)),
    resourceConfigurationGroupId: __expectString,
    resourceGatewayId: __expectString,
    status: __expectString,
    type: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetResourceGatewayCommand
 */
export const de_GetResourceGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    ipAddressType: __expectString,
    ipv4AddressesPerEni: __expectInt32,
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    securityGroupIds: _json,
    status: __expectString,
    subnetIds: _json,
    vpcId: __expectString,
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
    policy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRuleCommand
 */
export const de_GetRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    action: (_) => _json(__expectUnion(_)),
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    isDefault: __expectBoolean,
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    match: (_) => _json(__expectUnion(_)),
    name: __expectString,
    priority: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetServiceCommand
 */
export const de_GetServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    authType: __expectString,
    certificateArn: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customDomainName: __expectString,
    dnsEntry: _json,
    failureCode: __expectString,
    failureMessage: __expectString,
    id: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetServiceNetworkCommand
 */
export const de_GetServiceNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    authType: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    numberOfAssociatedServices: __expectLong,
    numberOfAssociatedVPCs: __expectLong,
    sharingConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetServiceNetworkResourceAssociationCommand
 */
export const de_GetServiceNetworkResourceAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceNetworkResourceAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    dnsEntry: _json,
    failureCode: __expectString,
    failureReason: __expectString,
    id: __expectString,
    isManagedAssociation: __expectBoolean,
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    privateDnsEntry: _json,
    resourceConfigurationArn: __expectString,
    resourceConfigurationId: __expectString,
    resourceConfigurationName: __expectString,
    serviceNetworkArn: __expectString,
    serviceNetworkId: __expectString,
    serviceNetworkName: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetServiceNetworkServiceAssociationCommand
 */
export const de_GetServiceNetworkServiceAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceNetworkServiceAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    customDomainName: __expectString,
    dnsEntry: _json,
    failureCode: __expectString,
    failureMessage: __expectString,
    id: __expectString,
    serviceArn: __expectString,
    serviceId: __expectString,
    serviceName: __expectString,
    serviceNetworkArn: __expectString,
    serviceNetworkId: __expectString,
    serviceNetworkName: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetServiceNetworkVpcAssociationCommand
 */
export const de_GetServiceNetworkVpcAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceNetworkVpcAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    failureCode: __expectString,
    failureMessage: __expectString,
    id: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    securityGroupIds: _json,
    serviceNetworkArn: __expectString,
    serviceNetworkId: __expectString,
    serviceNetworkName: __expectString,
    status: __expectString,
    vpcId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTargetGroupCommand
 */
export const de_GetTargetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTargetGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    config: _json,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    failureCode: __expectString,
    failureMessage: __expectString,
    id: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    serviceArns: _json,
    status: __expectString,
    type: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAccessLogSubscriptionsCommand
 */
export const de_ListAccessLogSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessLogSubscriptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_AccessLogSubscriptionList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListListenersCommand
 */
export const de_ListListenersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListListenersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_ListenerSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListResourceConfigurationsCommand
 */
export const de_ListResourceConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_ResourceConfigurationSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListResourceEndpointAssociationsCommand
 */
export const de_ListResourceEndpointAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceEndpointAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_ResourceEndpointAssociationList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListResourceGatewaysCommand
 */
export const de_ListResourceGatewaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceGatewaysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_ResourceGatewayList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRulesCommand
 */
export const de_ListRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_RuleSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListServiceNetworkResourceAssociationsCommand
 */
export const de_ListServiceNetworkResourceAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceNetworkResourceAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_ServiceNetworkResourceAssociationList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListServiceNetworksCommand
 */
export const de_ListServiceNetworksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceNetworksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_ServiceNetworkList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListServiceNetworkServiceAssociationsCommand
 */
export const de_ListServiceNetworkServiceAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceNetworkServiceAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_ServiceNetworkServiceAssociationList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListServiceNetworkVpcAssociationsCommand
 */
export const de_ListServiceNetworkVpcAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceNetworkVpcAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_ServiceNetworkVpcAssociationList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListServiceNetworkVpcEndpointAssociationsCommand
 */
export const de_ListServiceNetworkVpcEndpointAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceNetworkVpcEndpointAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_ServiceNetworkVpcEndpointAssociationList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListServicesCommand
 */
export const de_ListServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_ServiceList(_, context),
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
 * deserializeAws_restJson1ListTargetGroupsCommand
 */
export const de_ListTargetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_TargetGroupList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTargetsCommand
 */
export const de_ListTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutAuthPolicyCommand
 */
export const de_PutAuthPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAuthPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policy: __expectString,
    state: __expectString,
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
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RegisterTargetsCommand
 */
export const de_RegisterTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTargetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    successful: _json,
    unsuccessful: _json,
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
 * deserializeAws_restJson1UpdateAccessLogSubscriptionCommand
 */
export const de_UpdateAccessLogSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccessLogSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    destinationArn: __expectString,
    id: __expectString,
    resourceArn: __expectString,
    resourceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateListenerCommand
 */
export const de_UpdateListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateListenerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    defaultAction: (_) => _json(__expectUnion(_)),
    id: __expectString,
    name: __expectString,
    port: __expectInt32,
    protocol: __expectString,
    serviceArn: __expectString,
    serviceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateResourceConfigurationCommand
 */
export const de_UpdateResourceConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    allowAssociationToShareableServiceNetwork: __expectBoolean,
    arn: __expectString,
    id: __expectString,
    name: __expectString,
    portRanges: _json,
    protocol: __expectString,
    resourceConfigurationDefinition: (_) => _json(__expectUnion(_)),
    resourceConfigurationGroupId: __expectString,
    resourceGatewayId: __expectString,
    status: __expectString,
    type: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateResourceGatewayCommand
 */
export const de_UpdateResourceGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    ipAddressType: __expectString,
    name: __expectString,
    securityGroupIds: _json,
    status: __expectString,
    subnetIds: _json,
    vpcId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRuleCommand
 */
export const de_UpdateRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    action: (_) => _json(__expectUnion(_)),
    arn: __expectString,
    id: __expectString,
    isDefault: __expectBoolean,
    match: (_) => _json(__expectUnion(_)),
    name: __expectString,
    priority: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateServiceCommand
 */
export const de_UpdateServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    authType: __expectString,
    certificateArn: __expectString,
    customDomainName: __expectString,
    id: __expectString,
    name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateServiceNetworkCommand
 */
export const de_UpdateServiceNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    authType: __expectString,
    id: __expectString,
    name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateServiceNetworkVpcAssociationCommand
 */
export const de_UpdateServiceNetworkVpcAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceNetworkVpcAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createdBy: __expectString,
    id: __expectString,
    securityGroupIds: _json,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTargetGroupCommand
 */
export const de_UpdateTargetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTargetGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    config: _json,
    id: __expectString,
    name: __expectString,
    status: __expectString,
    type: __expectString,
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
    case "com.amazonaws.vpclattice#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.vpclattice#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.vpclattice#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.vpclattice#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.vpclattice#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.vpclattice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.vpclattice#ServiceQuotaExceededException":
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

// se_ArnResource omitted.

// se_DnsResource omitted.

// se_FixedResponseAction omitted.

// se_ForwardAction omitted.

// se_HeaderMatch omitted.

// se_HeaderMatchList omitted.

// se_HeaderMatchType omitted.

// se_HealthCheckConfig omitted.

// se_HttpMatch omitted.

// se_IpResource omitted.

// se_Matcher omitted.

// se_PathMatch omitted.

// se_PathMatchType omitted.

// se_PortRangeList omitted.

// se_ResourceConfigurationDefinition omitted.

// se_RuleAction omitted.

// se_RuleMatch omitted.

// se_RuleUpdate omitted.

// se_RuleUpdateList omitted.

// se_SecurityGroupList omitted.

// se_SharingConfig omitted.

// se_SubnetList omitted.

// se_TagMap omitted.

// se_Target omitted.

// se_TargetGroupConfig omitted.

// se_TargetList omitted.

// se_WeightedTargetGroup omitted.

// se_WeightedTargetGroupList omitted.

/**
 * deserializeAws_restJson1AccessLogSubscriptionList
 */
const de_AccessLogSubscriptionList = (output: any, context: __SerdeContext): AccessLogSubscriptionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AccessLogSubscriptionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AccessLogSubscriptionSummary
 */
const de_AccessLogSubscriptionSummary = (output: any, context: __SerdeContext): AccessLogSubscriptionSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    destinationArn: __expectString,
    id: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    resourceArn: __expectString,
    resourceId: __expectString,
    serviceNetworkLogType: __expectString,
  }) as any;
};

// de_ArnResource omitted.

// de_DnsEntry omitted.

// de_DnsResource omitted.

// de_FixedResponseAction omitted.

// de_ForwardAction omitted.

// de_HeaderMatch omitted.

// de_HeaderMatchList omitted.

// de_HeaderMatchType omitted.

// de_HealthCheckConfig omitted.

// de_HttpMatch omitted.

// de_IpResource omitted.

/**
 * deserializeAws_restJson1ListenerSummary
 */
const de_ListenerSummary = (output: any, context: __SerdeContext): ListenerSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    port: __expectInt32,
    protocol: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ListenerSummaryList
 */
const de_ListenerSummaryList = (output: any, context: __SerdeContext): ListenerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListenerSummary(entry, context);
    });
  return retVal;
};

// de_Matcher omitted.

// de_PathMatch omitted.

// de_PathMatchType omitted.

// de_PortRangeList omitted.

// de_ResourceConfigurationDefinition omitted.

/**
 * deserializeAws_restJson1ResourceConfigurationSummary
 */
const de_ResourceConfigurationSummary = (output: any, context: __SerdeContext): ResourceConfigurationSummary => {
  return take(output, {
    amazonManaged: __expectBoolean,
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    resourceConfigurationGroupId: __expectString,
    resourceGatewayId: __expectString,
    status: __expectString,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ResourceConfigurationSummaryList
 */
const de_ResourceConfigurationSummaryList = (output: any, context: __SerdeContext): ResourceConfigurationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResourceConfigurationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResourceEndpointAssociationList
 */
const de_ResourceEndpointAssociationList = (
  output: any,
  context: __SerdeContext
): ResourceEndpointAssociationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResourceEndpointAssociationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResourceEndpointAssociationSummary
 */
const de_ResourceEndpointAssociationSummary = (
  output: any,
  context: __SerdeContext
): ResourceEndpointAssociationSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    id: __expectString,
    resourceConfigurationArn: __expectString,
    resourceConfigurationId: __expectString,
    resourceConfigurationName: __expectString,
    vpcEndpointId: __expectString,
    vpcEndpointOwner: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ResourceGatewayList
 */
const de_ResourceGatewayList = (output: any, context: __SerdeContext): ResourceGatewaySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResourceGatewaySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResourceGatewaySummary
 */
const de_ResourceGatewaySummary = (output: any, context: __SerdeContext): ResourceGatewaySummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    ipAddressType: __expectString,
    ipv4AddressesPerEni: __expectInt32,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    securityGroupIds: _json,
    status: __expectString,
    subnetIds: _json,
    vpcIdentifier: __expectString,
  }) as any;
};

// de_RuleAction omitted.

// de_RuleMatch omitted.

/**
 * deserializeAws_restJson1RuleSummary
 */
const de_RuleSummary = (output: any, context: __SerdeContext): RuleSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    isDefault: __expectBoolean,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    priority: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1RuleSummaryList
 */
const de_RuleSummaryList = (output: any, context: __SerdeContext): RuleSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RuleSummary(entry, context);
    });
  return retVal;
};

// de_RuleUpdateFailure omitted.

// de_RuleUpdateFailureList omitted.

// de_RuleUpdateSuccess omitted.

// de_RuleUpdateSuccessList omitted.

// de_SecurityGroupList omitted.

// de_ServiceArnList omitted.

/**
 * deserializeAws_restJson1ServiceList
 */
const de_ServiceList = (output: any, context: __SerdeContext): ServiceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServiceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ServiceNetworkEndpointAssociation
 */
const de_ServiceNetworkEndpointAssociation = (
  output: any,
  context: __SerdeContext
): ServiceNetworkEndpointAssociation => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    serviceNetworkArn: __expectString,
    state: __expectString,
    vpcEndpointId: __expectString,
    vpcEndpointOwnerId: __expectString,
    vpcId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ServiceNetworkList
 */
const de_ServiceNetworkList = (output: any, context: __SerdeContext): ServiceNetworkSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServiceNetworkSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ServiceNetworkResourceAssociationList
 */
const de_ServiceNetworkResourceAssociationList = (
  output: any,
  context: __SerdeContext
): ServiceNetworkResourceAssociationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServiceNetworkResourceAssociationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ServiceNetworkResourceAssociationSummary
 */
const de_ServiceNetworkResourceAssociationSummary = (
  output: any,
  context: __SerdeContext
): ServiceNetworkResourceAssociationSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    dnsEntry: _json,
    failureCode: __expectString,
    id: __expectString,
    isManagedAssociation: __expectBoolean,
    privateDnsEntry: _json,
    resourceConfigurationArn: __expectString,
    resourceConfigurationId: __expectString,
    resourceConfigurationName: __expectString,
    serviceNetworkArn: __expectString,
    serviceNetworkId: __expectString,
    serviceNetworkName: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ServiceNetworkServiceAssociationList
 */
const de_ServiceNetworkServiceAssociationList = (
  output: any,
  context: __SerdeContext
): ServiceNetworkServiceAssociationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServiceNetworkServiceAssociationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ServiceNetworkServiceAssociationSummary
 */
const de_ServiceNetworkServiceAssociationSummary = (
  output: any,
  context: __SerdeContext
): ServiceNetworkServiceAssociationSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    customDomainName: __expectString,
    dnsEntry: _json,
    id: __expectString,
    serviceArn: __expectString,
    serviceId: __expectString,
    serviceName: __expectString,
    serviceNetworkArn: __expectString,
    serviceNetworkId: __expectString,
    serviceNetworkName: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ServiceNetworkSummary
 */
const de_ServiceNetworkSummary = (output: any, context: __SerdeContext): ServiceNetworkSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    numberOfAssociatedResourceConfigurations: __expectLong,
    numberOfAssociatedServices: __expectLong,
    numberOfAssociatedVPCs: __expectLong,
  }) as any;
};

/**
 * deserializeAws_restJson1ServiceNetworkVpcAssociationList
 */
const de_ServiceNetworkVpcAssociationList = (
  output: any,
  context: __SerdeContext
): ServiceNetworkVpcAssociationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServiceNetworkVpcAssociationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ServiceNetworkVpcAssociationSummary
 */
const de_ServiceNetworkVpcAssociationSummary = (
  output: any,
  context: __SerdeContext
): ServiceNetworkVpcAssociationSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    id: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    serviceNetworkArn: __expectString,
    serviceNetworkId: __expectString,
    serviceNetworkName: __expectString,
    status: __expectString,
    vpcId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ServiceNetworkVpcEndpointAssociationList
 */
const de_ServiceNetworkVpcEndpointAssociationList = (
  output: any,
  context: __SerdeContext
): ServiceNetworkEndpointAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServiceNetworkEndpointAssociation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ServiceSummary
 */
const de_ServiceSummary = (output: any, context: __SerdeContext): ServiceSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customDomainName: __expectString,
    dnsEntry: _json,
    id: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    status: __expectString,
  }) as any;
};

// de_SharingConfig omitted.

// de_SubnetList omitted.

// de_TagMap omitted.

// de_Target omitted.

// de_TargetFailure omitted.

// de_TargetFailureList omitted.

// de_TargetGroupConfig omitted.

/**
 * deserializeAws_restJson1TargetGroupList
 */
const de_TargetGroupList = (output: any, context: __SerdeContext): TargetGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TargetGroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TargetGroupSummary
 */
const de_TargetGroupSummary = (output: any, context: __SerdeContext): TargetGroupSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    ipAddressType: __expectString,
    lambdaEventStructureVersion: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    port: __expectInt32,
    protocol: __expectString,
    serviceArns: _json,
    status: __expectString,
    type: __expectString,
    vpcIdentifier: __expectString,
  }) as any;
};

// de_TargetList omitted.

// de_TargetSummary omitted.

// de_TargetSummaryList omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

// de_WeightedTargetGroup omitted.

// de_WeightedTargetGroupList omitted.

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

const _iC = "includeChildren";
const _mR = "maxResults";
const _nT = "nextToken";
const _rAS = "retryAfterSeconds";
const _rCGI = "resourceConfigurationGroupIdentifier";
const _rCI = "resourceConfigurationIdentifier";
const _rEAI = "resourceEndpointAssociationIdentifier";
const _rGI = "resourceGatewayIdentifier";
const _rI = "resourceIdentifier";
const _ra = "retry-after";
const _sI = "serviceIdentifier";
const _sNI = "serviceNetworkIdentifier";
const _tGT = "targetGroupType";
const _tK = "tagKeys";
const _vEI = "vpcEndpointId";
const _vEO = "vpcEndpointOwner";
const _vI = "vpcIdentifier";
