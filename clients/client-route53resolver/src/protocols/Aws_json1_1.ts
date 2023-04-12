// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectString as __expectString,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AssociateFirewallRuleGroupCommandInput,
  AssociateFirewallRuleGroupCommandOutput,
} from "../commands/AssociateFirewallRuleGroupCommand";
import {
  AssociateResolverEndpointIpAddressCommandInput,
  AssociateResolverEndpointIpAddressCommandOutput,
} from "../commands/AssociateResolverEndpointIpAddressCommand";
import {
  AssociateResolverQueryLogConfigCommandInput,
  AssociateResolverQueryLogConfigCommandOutput,
} from "../commands/AssociateResolverQueryLogConfigCommand";
import {
  AssociateResolverRuleCommandInput,
  AssociateResolverRuleCommandOutput,
} from "../commands/AssociateResolverRuleCommand";
import {
  CreateFirewallDomainListCommandInput,
  CreateFirewallDomainListCommandOutput,
} from "../commands/CreateFirewallDomainListCommand";
import { CreateFirewallRuleCommandInput, CreateFirewallRuleCommandOutput } from "../commands/CreateFirewallRuleCommand";
import {
  CreateFirewallRuleGroupCommandInput,
  CreateFirewallRuleGroupCommandOutput,
} from "../commands/CreateFirewallRuleGroupCommand";
import {
  CreateResolverEndpointCommandInput,
  CreateResolverEndpointCommandOutput,
} from "../commands/CreateResolverEndpointCommand";
import {
  CreateResolverQueryLogConfigCommandInput,
  CreateResolverQueryLogConfigCommandOutput,
} from "../commands/CreateResolverQueryLogConfigCommand";
import { CreateResolverRuleCommandInput, CreateResolverRuleCommandOutput } from "../commands/CreateResolverRuleCommand";
import {
  DeleteFirewallDomainListCommandInput,
  DeleteFirewallDomainListCommandOutput,
} from "../commands/DeleteFirewallDomainListCommand";
import { DeleteFirewallRuleCommandInput, DeleteFirewallRuleCommandOutput } from "../commands/DeleteFirewallRuleCommand";
import {
  DeleteFirewallRuleGroupCommandInput,
  DeleteFirewallRuleGroupCommandOutput,
} from "../commands/DeleteFirewallRuleGroupCommand";
import {
  DeleteResolverEndpointCommandInput,
  DeleteResolverEndpointCommandOutput,
} from "../commands/DeleteResolverEndpointCommand";
import {
  DeleteResolverQueryLogConfigCommandInput,
  DeleteResolverQueryLogConfigCommandOutput,
} from "../commands/DeleteResolverQueryLogConfigCommand";
import { DeleteResolverRuleCommandInput, DeleteResolverRuleCommandOutput } from "../commands/DeleteResolverRuleCommand";
import {
  DisassociateFirewallRuleGroupCommandInput,
  DisassociateFirewallRuleGroupCommandOutput,
} from "../commands/DisassociateFirewallRuleGroupCommand";
import {
  DisassociateResolverEndpointIpAddressCommandInput,
  DisassociateResolverEndpointIpAddressCommandOutput,
} from "../commands/DisassociateResolverEndpointIpAddressCommand";
import {
  DisassociateResolverQueryLogConfigCommandInput,
  DisassociateResolverQueryLogConfigCommandOutput,
} from "../commands/DisassociateResolverQueryLogConfigCommand";
import {
  DisassociateResolverRuleCommandInput,
  DisassociateResolverRuleCommandOutput,
} from "../commands/DisassociateResolverRuleCommand";
import { GetFirewallConfigCommandInput, GetFirewallConfigCommandOutput } from "../commands/GetFirewallConfigCommand";
import {
  GetFirewallDomainListCommandInput,
  GetFirewallDomainListCommandOutput,
} from "../commands/GetFirewallDomainListCommand";
import {
  GetFirewallRuleGroupAssociationCommandInput,
  GetFirewallRuleGroupAssociationCommandOutput,
} from "../commands/GetFirewallRuleGroupAssociationCommand";
import {
  GetFirewallRuleGroupCommandInput,
  GetFirewallRuleGroupCommandOutput,
} from "../commands/GetFirewallRuleGroupCommand";
import {
  GetFirewallRuleGroupPolicyCommandInput,
  GetFirewallRuleGroupPolicyCommandOutput,
} from "../commands/GetFirewallRuleGroupPolicyCommand";
import { GetResolverConfigCommandInput, GetResolverConfigCommandOutput } from "../commands/GetResolverConfigCommand";
import {
  GetResolverDnssecConfigCommandInput,
  GetResolverDnssecConfigCommandOutput,
} from "../commands/GetResolverDnssecConfigCommand";
import {
  GetResolverEndpointCommandInput,
  GetResolverEndpointCommandOutput,
} from "../commands/GetResolverEndpointCommand";
import {
  GetResolverQueryLogConfigAssociationCommandInput,
  GetResolverQueryLogConfigAssociationCommandOutput,
} from "../commands/GetResolverQueryLogConfigAssociationCommand";
import {
  GetResolverQueryLogConfigCommandInput,
  GetResolverQueryLogConfigCommandOutput,
} from "../commands/GetResolverQueryLogConfigCommand";
import {
  GetResolverQueryLogConfigPolicyCommandInput,
  GetResolverQueryLogConfigPolicyCommandOutput,
} from "../commands/GetResolverQueryLogConfigPolicyCommand";
import {
  GetResolverRuleAssociationCommandInput,
  GetResolverRuleAssociationCommandOutput,
} from "../commands/GetResolverRuleAssociationCommand";
import { GetResolverRuleCommandInput, GetResolverRuleCommandOutput } from "../commands/GetResolverRuleCommand";
import {
  GetResolverRulePolicyCommandInput,
  GetResolverRulePolicyCommandOutput,
} from "../commands/GetResolverRulePolicyCommand";
import {
  ImportFirewallDomainsCommandInput,
  ImportFirewallDomainsCommandOutput,
} from "../commands/ImportFirewallDomainsCommand";
import {
  ListFirewallConfigsCommandInput,
  ListFirewallConfigsCommandOutput,
} from "../commands/ListFirewallConfigsCommand";
import {
  ListFirewallDomainListsCommandInput,
  ListFirewallDomainListsCommandOutput,
} from "../commands/ListFirewallDomainListsCommand";
import {
  ListFirewallDomainsCommandInput,
  ListFirewallDomainsCommandOutput,
} from "../commands/ListFirewallDomainsCommand";
import {
  ListFirewallRuleGroupAssociationsCommandInput,
  ListFirewallRuleGroupAssociationsCommandOutput,
} from "../commands/ListFirewallRuleGroupAssociationsCommand";
import {
  ListFirewallRuleGroupsCommandInput,
  ListFirewallRuleGroupsCommandOutput,
} from "../commands/ListFirewallRuleGroupsCommand";
import { ListFirewallRulesCommandInput, ListFirewallRulesCommandOutput } from "../commands/ListFirewallRulesCommand";
import {
  ListResolverConfigsCommandInput,
  ListResolverConfigsCommandOutput,
} from "../commands/ListResolverConfigsCommand";
import {
  ListResolverDnssecConfigsCommandInput,
  ListResolverDnssecConfigsCommandOutput,
} from "../commands/ListResolverDnssecConfigsCommand";
import {
  ListResolverEndpointIpAddressesCommandInput,
  ListResolverEndpointIpAddressesCommandOutput,
} from "../commands/ListResolverEndpointIpAddressesCommand";
import {
  ListResolverEndpointsCommandInput,
  ListResolverEndpointsCommandOutput,
} from "../commands/ListResolverEndpointsCommand";
import {
  ListResolverQueryLogConfigAssociationsCommandInput,
  ListResolverQueryLogConfigAssociationsCommandOutput,
} from "../commands/ListResolverQueryLogConfigAssociationsCommand";
import {
  ListResolverQueryLogConfigsCommandInput,
  ListResolverQueryLogConfigsCommandOutput,
} from "../commands/ListResolverQueryLogConfigsCommand";
import {
  ListResolverRuleAssociationsCommandInput,
  ListResolverRuleAssociationsCommandOutput,
} from "../commands/ListResolverRuleAssociationsCommand";
import { ListResolverRulesCommandInput, ListResolverRulesCommandOutput } from "../commands/ListResolverRulesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  PutFirewallRuleGroupPolicyCommandInput,
  PutFirewallRuleGroupPolicyCommandOutput,
} from "../commands/PutFirewallRuleGroupPolicyCommand";
import {
  PutResolverQueryLogConfigPolicyCommandInput,
  PutResolverQueryLogConfigPolicyCommandOutput,
} from "../commands/PutResolverQueryLogConfigPolicyCommand";
import {
  PutResolverRulePolicyCommandInput,
  PutResolverRulePolicyCommandOutput,
} from "../commands/PutResolverRulePolicyCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateFirewallConfigCommandInput,
  UpdateFirewallConfigCommandOutput,
} from "../commands/UpdateFirewallConfigCommand";
import {
  UpdateFirewallDomainsCommandInput,
  UpdateFirewallDomainsCommandOutput,
} from "../commands/UpdateFirewallDomainsCommand";
import { UpdateFirewallRuleCommandInput, UpdateFirewallRuleCommandOutput } from "../commands/UpdateFirewallRuleCommand";
import {
  UpdateFirewallRuleGroupAssociationCommandInput,
  UpdateFirewallRuleGroupAssociationCommandOutput,
} from "../commands/UpdateFirewallRuleGroupAssociationCommand";
import {
  UpdateResolverConfigCommandInput,
  UpdateResolverConfigCommandOutput,
} from "../commands/UpdateResolverConfigCommand";
import {
  UpdateResolverDnssecConfigCommandInput,
  UpdateResolverDnssecConfigCommandOutput,
} from "../commands/UpdateResolverDnssecConfigCommand";
import {
  UpdateResolverEndpointCommandInput,
  UpdateResolverEndpointCommandOutput,
} from "../commands/UpdateResolverEndpointCommand";
import { UpdateResolverRuleCommandInput, UpdateResolverRuleCommandOutput } from "../commands/UpdateResolverRuleCommand";
import {
  AccessDeniedException,
  AssociateFirewallRuleGroupRequest,
  AssociateFirewallRuleGroupResponse,
  AssociateResolverEndpointIpAddressRequest,
  AssociateResolverEndpointIpAddressResponse,
  AssociateResolverQueryLogConfigRequest,
  AssociateResolverQueryLogConfigResponse,
  AssociateResolverRuleRequest,
  AssociateResolverRuleResponse,
  ConflictException,
  CreateFirewallDomainListRequest,
  CreateFirewallDomainListResponse,
  CreateFirewallRuleGroupRequest,
  CreateFirewallRuleGroupResponse,
  CreateFirewallRuleRequest,
  CreateFirewallRuleResponse,
  CreateResolverEndpointRequest,
  CreateResolverEndpointResponse,
  CreateResolverQueryLogConfigRequest,
  CreateResolverQueryLogConfigResponse,
  CreateResolverRuleRequest,
  CreateResolverRuleResponse,
  DeleteFirewallDomainListRequest,
  DeleteFirewallDomainListResponse,
  DeleteFirewallRuleGroupRequest,
  DeleteFirewallRuleGroupResponse,
  DeleteFirewallRuleRequest,
  DeleteFirewallRuleResponse,
  DeleteResolverEndpointRequest,
  DeleteResolverEndpointResponse,
  DeleteResolverQueryLogConfigRequest,
  DeleteResolverQueryLogConfigResponse,
  DeleteResolverRuleRequest,
  DeleteResolverRuleResponse,
  DisassociateFirewallRuleGroupRequest,
  DisassociateFirewallRuleGroupResponse,
  DisassociateResolverEndpointIpAddressRequest,
  DisassociateResolverEndpointIpAddressResponse,
  DisassociateResolverQueryLogConfigRequest,
  DisassociateResolverQueryLogConfigResponse,
  DisassociateResolverRuleRequest,
  DisassociateResolverRuleResponse,
  Filter,
  FirewallConfig,
  FirewallDomainList,
  FirewallDomainListMetadata,
  FirewallRule,
  FirewallRuleGroup,
  FirewallRuleGroupAssociation,
  FirewallRuleGroupMetadata,
  GetFirewallConfigRequest,
  GetFirewallConfigResponse,
  GetFirewallDomainListRequest,
  GetFirewallDomainListResponse,
  GetFirewallRuleGroupAssociationRequest,
  GetFirewallRuleGroupAssociationResponse,
  GetFirewallRuleGroupPolicyRequest,
  GetFirewallRuleGroupPolicyResponse,
  GetFirewallRuleGroupRequest,
  GetFirewallRuleGroupResponse,
  GetResolverConfigRequest,
  GetResolverConfigResponse,
  GetResolverDnssecConfigRequest,
  GetResolverDnssecConfigResponse,
  GetResolverEndpointRequest,
  GetResolverEndpointResponse,
  GetResolverQueryLogConfigAssociationRequest,
  GetResolverQueryLogConfigAssociationResponse,
  GetResolverQueryLogConfigPolicyRequest,
  GetResolverQueryLogConfigPolicyResponse,
  GetResolverQueryLogConfigRequest,
  GetResolverQueryLogConfigResponse,
  GetResolverRuleAssociationRequest,
  GetResolverRuleAssociationResponse,
  GetResolverRulePolicyRequest,
  GetResolverRulePolicyResponse,
  GetResolverRuleRequest,
  GetResolverRuleResponse,
  ImportFirewallDomainsRequest,
  ImportFirewallDomainsResponse,
  InternalServiceErrorException,
  InvalidNextTokenException,
  InvalidParameterException,
  InvalidPolicyDocument,
  InvalidRequestException,
  InvalidTagException,
  IpAddressRequest,
  IpAddressResponse,
  IpAddressUpdate,
  LimitExceededException,
  ListFirewallConfigsRequest,
  ListFirewallConfigsResponse,
  ListFirewallDomainListsRequest,
  ListFirewallDomainListsResponse,
  ListFirewallDomainsRequest,
  ListFirewallDomainsResponse,
  ListFirewallRuleGroupAssociationsRequest,
  ListFirewallRuleGroupAssociationsResponse,
  ListFirewallRuleGroupsRequest,
  ListFirewallRuleGroupsResponse,
  ListFirewallRulesRequest,
  ListFirewallRulesResponse,
  ListResolverConfigsRequest,
  ListResolverConfigsResponse,
  ListResolverDnssecConfigsRequest,
  ListResolverDnssecConfigsResponse,
  ListResolverEndpointIpAddressesRequest,
  ListResolverEndpointIpAddressesResponse,
  ListResolverEndpointsRequest,
  ListResolverEndpointsResponse,
  ListResolverQueryLogConfigAssociationsRequest,
  ListResolverQueryLogConfigAssociationsResponse,
  ListResolverQueryLogConfigsRequest,
  ListResolverQueryLogConfigsResponse,
  ListResolverRuleAssociationsRequest,
  ListResolverRuleAssociationsResponse,
  ListResolverRulesRequest,
  ListResolverRulesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  PutFirewallRuleGroupPolicyRequest,
  PutFirewallRuleGroupPolicyResponse,
  PutResolverQueryLogConfigPolicyRequest,
  PutResolverQueryLogConfigPolicyResponse,
  PutResolverRulePolicyRequest,
  PutResolverRulePolicyResponse,
  ResolverConfig,
  ResolverDnssecConfig,
  ResolverEndpoint,
  ResolverQueryLogConfig,
  ResolverQueryLogConfigAssociation,
  ResolverRule,
  ResolverRuleAssociation,
  ResolverRuleConfig,
  ResourceExistsException,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceUnavailableException,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TargetAddress,
  ThrottlingException,
  UnknownResourceException,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateFirewallConfigRequest,
  UpdateFirewallConfigResponse,
  UpdateFirewallDomainsRequest,
  UpdateFirewallDomainsResponse,
  UpdateFirewallRuleGroupAssociationRequest,
  UpdateFirewallRuleGroupAssociationResponse,
  UpdateFirewallRuleRequest,
  UpdateFirewallRuleResponse,
  UpdateIpAddress,
  UpdateResolverConfigRequest,
  UpdateResolverConfigResponse,
  UpdateResolverDnssecConfigRequest,
  UpdateResolverDnssecConfigResponse,
  UpdateResolverEndpointRequest,
  UpdateResolverEndpointResponse,
  UpdateResolverRuleRequest,
  UpdateResolverRuleResponse,
  ValidationException,
} from "../models/models_0";
import { Route53ResolverServiceException as __BaseException } from "../models/Route53ResolverServiceException";

/**
 * serializeAws_json1_1AssociateFirewallRuleGroupCommand
 */
export const se_AssociateFirewallRuleGroupCommand = async (
  input: AssociateFirewallRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateFirewallRuleGroup");
  let body: any;
  body = JSON.stringify(se_AssociateFirewallRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateResolverEndpointIpAddressCommand
 */
export const se_AssociateResolverEndpointIpAddressCommand = async (
  input: AssociateResolverEndpointIpAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateResolverEndpointIpAddress");
  let body: any;
  body = JSON.stringify(se_AssociateResolverEndpointIpAddressRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateResolverQueryLogConfigCommand
 */
export const se_AssociateResolverQueryLogConfigCommand = async (
  input: AssociateResolverQueryLogConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateResolverQueryLogConfig");
  let body: any;
  body = JSON.stringify(se_AssociateResolverQueryLogConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateResolverRuleCommand
 */
export const se_AssociateResolverRuleCommand = async (
  input: AssociateResolverRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateResolverRule");
  let body: any;
  body = JSON.stringify(se_AssociateResolverRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateFirewallDomainListCommand
 */
export const se_CreateFirewallDomainListCommand = async (
  input: CreateFirewallDomainListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateFirewallDomainList");
  let body: any;
  body = JSON.stringify(se_CreateFirewallDomainListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateFirewallRuleCommand
 */
export const se_CreateFirewallRuleCommand = async (
  input: CreateFirewallRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateFirewallRule");
  let body: any;
  body = JSON.stringify(se_CreateFirewallRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateFirewallRuleGroupCommand
 */
export const se_CreateFirewallRuleGroupCommand = async (
  input: CreateFirewallRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateFirewallRuleGroup");
  let body: any;
  body = JSON.stringify(se_CreateFirewallRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateResolverEndpointCommand
 */
export const se_CreateResolverEndpointCommand = async (
  input: CreateResolverEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateResolverEndpoint");
  let body: any;
  body = JSON.stringify(se_CreateResolverEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateResolverQueryLogConfigCommand
 */
export const se_CreateResolverQueryLogConfigCommand = async (
  input: CreateResolverQueryLogConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateResolverQueryLogConfig");
  let body: any;
  body = JSON.stringify(se_CreateResolverQueryLogConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateResolverRuleCommand
 */
export const se_CreateResolverRuleCommand = async (
  input: CreateResolverRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateResolverRule");
  let body: any;
  body = JSON.stringify(se_CreateResolverRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteFirewallDomainListCommand
 */
export const se_DeleteFirewallDomainListCommand = async (
  input: DeleteFirewallDomainListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteFirewallDomainList");
  let body: any;
  body = JSON.stringify(se_DeleteFirewallDomainListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteFirewallRuleCommand
 */
export const se_DeleteFirewallRuleCommand = async (
  input: DeleteFirewallRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteFirewallRule");
  let body: any;
  body = JSON.stringify(se_DeleteFirewallRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteFirewallRuleGroupCommand
 */
export const se_DeleteFirewallRuleGroupCommand = async (
  input: DeleteFirewallRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteFirewallRuleGroup");
  let body: any;
  body = JSON.stringify(se_DeleteFirewallRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteResolverEndpointCommand
 */
export const se_DeleteResolverEndpointCommand = async (
  input: DeleteResolverEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteResolverEndpoint");
  let body: any;
  body = JSON.stringify(se_DeleteResolverEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteResolverQueryLogConfigCommand
 */
export const se_DeleteResolverQueryLogConfigCommand = async (
  input: DeleteResolverQueryLogConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteResolverQueryLogConfig");
  let body: any;
  body = JSON.stringify(se_DeleteResolverQueryLogConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteResolverRuleCommand
 */
export const se_DeleteResolverRuleCommand = async (
  input: DeleteResolverRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteResolverRule");
  let body: any;
  body = JSON.stringify(se_DeleteResolverRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateFirewallRuleGroupCommand
 */
export const se_DisassociateFirewallRuleGroupCommand = async (
  input: DisassociateFirewallRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateFirewallRuleGroup");
  let body: any;
  body = JSON.stringify(se_DisassociateFirewallRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateResolverEndpointIpAddressCommand
 */
export const se_DisassociateResolverEndpointIpAddressCommand = async (
  input: DisassociateResolverEndpointIpAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateResolverEndpointIpAddress");
  let body: any;
  body = JSON.stringify(se_DisassociateResolverEndpointIpAddressRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateResolverQueryLogConfigCommand
 */
export const se_DisassociateResolverQueryLogConfigCommand = async (
  input: DisassociateResolverQueryLogConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateResolverQueryLogConfig");
  let body: any;
  body = JSON.stringify(se_DisassociateResolverQueryLogConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateResolverRuleCommand
 */
export const se_DisassociateResolverRuleCommand = async (
  input: DisassociateResolverRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateResolverRule");
  let body: any;
  body = JSON.stringify(se_DisassociateResolverRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetFirewallConfigCommand
 */
export const se_GetFirewallConfigCommand = async (
  input: GetFirewallConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetFirewallConfig");
  let body: any;
  body = JSON.stringify(se_GetFirewallConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetFirewallDomainListCommand
 */
export const se_GetFirewallDomainListCommand = async (
  input: GetFirewallDomainListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetFirewallDomainList");
  let body: any;
  body = JSON.stringify(se_GetFirewallDomainListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetFirewallRuleGroupCommand
 */
export const se_GetFirewallRuleGroupCommand = async (
  input: GetFirewallRuleGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetFirewallRuleGroup");
  let body: any;
  body = JSON.stringify(se_GetFirewallRuleGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetFirewallRuleGroupAssociationCommand
 */
export const se_GetFirewallRuleGroupAssociationCommand = async (
  input: GetFirewallRuleGroupAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetFirewallRuleGroupAssociation");
  let body: any;
  body = JSON.stringify(se_GetFirewallRuleGroupAssociationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetFirewallRuleGroupPolicyCommand
 */
export const se_GetFirewallRuleGroupPolicyCommand = async (
  input: GetFirewallRuleGroupPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetFirewallRuleGroupPolicy");
  let body: any;
  body = JSON.stringify(se_GetFirewallRuleGroupPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetResolverConfigCommand
 */
export const se_GetResolverConfigCommand = async (
  input: GetResolverConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResolverConfig");
  let body: any;
  body = JSON.stringify(se_GetResolverConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetResolverDnssecConfigCommand
 */
export const se_GetResolverDnssecConfigCommand = async (
  input: GetResolverDnssecConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResolverDnssecConfig");
  let body: any;
  body = JSON.stringify(se_GetResolverDnssecConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetResolverEndpointCommand
 */
export const se_GetResolverEndpointCommand = async (
  input: GetResolverEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResolverEndpoint");
  let body: any;
  body = JSON.stringify(se_GetResolverEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetResolverQueryLogConfigCommand
 */
export const se_GetResolverQueryLogConfigCommand = async (
  input: GetResolverQueryLogConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResolverQueryLogConfig");
  let body: any;
  body = JSON.stringify(se_GetResolverQueryLogConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetResolverQueryLogConfigAssociationCommand
 */
export const se_GetResolverQueryLogConfigAssociationCommand = async (
  input: GetResolverQueryLogConfigAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResolverQueryLogConfigAssociation");
  let body: any;
  body = JSON.stringify(se_GetResolverQueryLogConfigAssociationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetResolverQueryLogConfigPolicyCommand
 */
export const se_GetResolverQueryLogConfigPolicyCommand = async (
  input: GetResolverQueryLogConfigPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResolverQueryLogConfigPolicy");
  let body: any;
  body = JSON.stringify(se_GetResolverQueryLogConfigPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetResolverRuleCommand
 */
export const se_GetResolverRuleCommand = async (
  input: GetResolverRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResolverRule");
  let body: any;
  body = JSON.stringify(se_GetResolverRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetResolverRuleAssociationCommand
 */
export const se_GetResolverRuleAssociationCommand = async (
  input: GetResolverRuleAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResolverRuleAssociation");
  let body: any;
  body = JSON.stringify(se_GetResolverRuleAssociationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetResolverRulePolicyCommand
 */
export const se_GetResolverRulePolicyCommand = async (
  input: GetResolverRulePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResolverRulePolicy");
  let body: any;
  body = JSON.stringify(se_GetResolverRulePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportFirewallDomainsCommand
 */
export const se_ImportFirewallDomainsCommand = async (
  input: ImportFirewallDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ImportFirewallDomains");
  let body: any;
  body = JSON.stringify(se_ImportFirewallDomainsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListFirewallConfigsCommand
 */
export const se_ListFirewallConfigsCommand = async (
  input: ListFirewallConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFirewallConfigs");
  let body: any;
  body = JSON.stringify(se_ListFirewallConfigsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListFirewallDomainListsCommand
 */
export const se_ListFirewallDomainListsCommand = async (
  input: ListFirewallDomainListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFirewallDomainLists");
  let body: any;
  body = JSON.stringify(se_ListFirewallDomainListsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListFirewallDomainsCommand
 */
export const se_ListFirewallDomainsCommand = async (
  input: ListFirewallDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFirewallDomains");
  let body: any;
  body = JSON.stringify(se_ListFirewallDomainsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListFirewallRuleGroupAssociationsCommand
 */
export const se_ListFirewallRuleGroupAssociationsCommand = async (
  input: ListFirewallRuleGroupAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFirewallRuleGroupAssociations");
  let body: any;
  body = JSON.stringify(se_ListFirewallRuleGroupAssociationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListFirewallRuleGroupsCommand
 */
export const se_ListFirewallRuleGroupsCommand = async (
  input: ListFirewallRuleGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFirewallRuleGroups");
  let body: any;
  body = JSON.stringify(se_ListFirewallRuleGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListFirewallRulesCommand
 */
export const se_ListFirewallRulesCommand = async (
  input: ListFirewallRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFirewallRules");
  let body: any;
  body = JSON.stringify(se_ListFirewallRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResolverConfigsCommand
 */
export const se_ListResolverConfigsCommand = async (
  input: ListResolverConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListResolverConfigs");
  let body: any;
  body = JSON.stringify(se_ListResolverConfigsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResolverDnssecConfigsCommand
 */
export const se_ListResolverDnssecConfigsCommand = async (
  input: ListResolverDnssecConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListResolverDnssecConfigs");
  let body: any;
  body = JSON.stringify(se_ListResolverDnssecConfigsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResolverEndpointIpAddressesCommand
 */
export const se_ListResolverEndpointIpAddressesCommand = async (
  input: ListResolverEndpointIpAddressesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListResolverEndpointIpAddresses");
  let body: any;
  body = JSON.stringify(se_ListResolverEndpointIpAddressesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResolverEndpointsCommand
 */
export const se_ListResolverEndpointsCommand = async (
  input: ListResolverEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListResolverEndpoints");
  let body: any;
  body = JSON.stringify(se_ListResolverEndpointsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResolverQueryLogConfigAssociationsCommand
 */
export const se_ListResolverQueryLogConfigAssociationsCommand = async (
  input: ListResolverQueryLogConfigAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListResolverQueryLogConfigAssociations");
  let body: any;
  body = JSON.stringify(se_ListResolverQueryLogConfigAssociationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResolverQueryLogConfigsCommand
 */
export const se_ListResolverQueryLogConfigsCommand = async (
  input: ListResolverQueryLogConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListResolverQueryLogConfigs");
  let body: any;
  body = JSON.stringify(se_ListResolverQueryLogConfigsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResolverRuleAssociationsCommand
 */
export const se_ListResolverRuleAssociationsCommand = async (
  input: ListResolverRuleAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListResolverRuleAssociations");
  let body: any;
  body = JSON.stringify(se_ListResolverRuleAssociationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResolverRulesCommand
 */
export const se_ListResolverRulesCommand = async (
  input: ListResolverRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListResolverRules");
  let body: any;
  body = JSON.stringify(se_ListResolverRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutFirewallRuleGroupPolicyCommand
 */
export const se_PutFirewallRuleGroupPolicyCommand = async (
  input: PutFirewallRuleGroupPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutFirewallRuleGroupPolicy");
  let body: any;
  body = JSON.stringify(se_PutFirewallRuleGroupPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutResolverQueryLogConfigPolicyCommand
 */
export const se_PutResolverQueryLogConfigPolicyCommand = async (
  input: PutResolverQueryLogConfigPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutResolverQueryLogConfigPolicy");
  let body: any;
  body = JSON.stringify(se_PutResolverQueryLogConfigPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutResolverRulePolicyCommand
 */
export const se_PutResolverRulePolicyCommand = async (
  input: PutResolverRulePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutResolverRulePolicy");
  let body: any;
  body = JSON.stringify(se_PutResolverRulePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateFirewallConfigCommand
 */
export const se_UpdateFirewallConfigCommand = async (
  input: UpdateFirewallConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateFirewallConfig");
  let body: any;
  body = JSON.stringify(se_UpdateFirewallConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateFirewallDomainsCommand
 */
export const se_UpdateFirewallDomainsCommand = async (
  input: UpdateFirewallDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateFirewallDomains");
  let body: any;
  body = JSON.stringify(se_UpdateFirewallDomainsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateFirewallRuleCommand
 */
export const se_UpdateFirewallRuleCommand = async (
  input: UpdateFirewallRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateFirewallRule");
  let body: any;
  body = JSON.stringify(se_UpdateFirewallRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateFirewallRuleGroupAssociationCommand
 */
export const se_UpdateFirewallRuleGroupAssociationCommand = async (
  input: UpdateFirewallRuleGroupAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateFirewallRuleGroupAssociation");
  let body: any;
  body = JSON.stringify(se_UpdateFirewallRuleGroupAssociationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateResolverConfigCommand
 */
export const se_UpdateResolverConfigCommand = async (
  input: UpdateResolverConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateResolverConfig");
  let body: any;
  body = JSON.stringify(se_UpdateResolverConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateResolverDnssecConfigCommand
 */
export const se_UpdateResolverDnssecConfigCommand = async (
  input: UpdateResolverDnssecConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateResolverDnssecConfig");
  let body: any;
  body = JSON.stringify(se_UpdateResolverDnssecConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateResolverEndpointCommand
 */
export const se_UpdateResolverEndpointCommand = async (
  input: UpdateResolverEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateResolverEndpoint");
  let body: any;
  body = JSON.stringify(se_UpdateResolverEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateResolverRuleCommand
 */
export const se_UpdateResolverRuleCommand = async (
  input: UpdateResolverRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateResolverRule");
  let body: any;
  body = JSON.stringify(se_UpdateResolverRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AssociateFirewallRuleGroupCommand
 */
export const de_AssociateFirewallRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateFirewallRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateFirewallRuleGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateFirewallRuleGroupResponse(data, context);
  const response: AssociateFirewallRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateFirewallRuleGroupCommandError
 */
const de_AssociateFirewallRuleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateFirewallRuleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.route53resolver#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.route53resolver#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53resolver#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1AssociateResolverEndpointIpAddressCommand
 */
export const de_AssociateResolverEndpointIpAddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResolverEndpointIpAddressCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateResolverEndpointIpAddressCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateResolverEndpointIpAddressResponse(data, context);
  const response: AssociateResolverEndpointIpAddressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateResolverEndpointIpAddressCommandError
 */
const de_AssociateResolverEndpointIpAddressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResolverEndpointIpAddressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.route53resolver#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.route53resolver#ResourceExistsException":
      throw await de_ResourceExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1AssociateResolverQueryLogConfigCommand
 */
export const de_AssociateResolverQueryLogConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResolverQueryLogConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateResolverQueryLogConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateResolverQueryLogConfigResponse(data, context);
  const response: AssociateResolverQueryLogConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateResolverQueryLogConfigCommandError
 */
const de_AssociateResolverQueryLogConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResolverQueryLogConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.route53resolver#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.route53resolver#ResourceExistsException":
      throw await de_ResourceExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1AssociateResolverRuleCommand
 */
export const de_AssociateResolverRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResolverRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateResolverRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateResolverRuleResponse(data, context);
  const response: AssociateResolverRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateResolverRuleCommandError
 */
const de_AssociateResolverRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResolverRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.route53resolver#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.route53resolver#ResourceExistsException":
      throw await de_ResourceExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.route53resolver#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1CreateFirewallDomainListCommand
 */
export const de_CreateFirewallDomainListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFirewallDomainListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateFirewallDomainListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateFirewallDomainListResponse(data, context);
  const response: CreateFirewallDomainListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateFirewallDomainListCommandError
 */
const de_CreateFirewallDomainListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFirewallDomainListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.route53resolver#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53resolver#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateFirewallRuleCommand
 */
export const de_CreateFirewallRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFirewallRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateFirewallRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateFirewallRuleResponse(data, context);
  const response: CreateFirewallRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateFirewallRuleCommandError
 */
const de_CreateFirewallRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFirewallRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.route53resolver#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53resolver#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateFirewallRuleGroupCommand
 */
export const de_CreateFirewallRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFirewallRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateFirewallRuleGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateFirewallRuleGroupResponse(data, context);
  const response: CreateFirewallRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateFirewallRuleGroupCommandError
 */
const de_CreateFirewallRuleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFirewallRuleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.route53resolver#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53resolver#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateResolverEndpointCommand
 */
export const de_CreateResolverEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResolverEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateResolverEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateResolverEndpointResponse(data, context);
  const response: CreateResolverEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateResolverEndpointCommandError
 */
const de_CreateResolverEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResolverEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.route53resolver#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.route53resolver#ResourceExistsException":
      throw await de_ResourceExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1CreateResolverQueryLogConfigCommand
 */
export const de_CreateResolverQueryLogConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResolverQueryLogConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateResolverQueryLogConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateResolverQueryLogConfigResponse(data, context);
  const response: CreateResolverQueryLogConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateResolverQueryLogConfigCommandError
 */
const de_CreateResolverQueryLogConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResolverQueryLogConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.route53resolver#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.route53resolver#ResourceExistsException":
      throw await de_ResourceExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1CreateResolverRuleCommand
 */
export const de_CreateResolverRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResolverRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateResolverRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateResolverRuleResponse(data, context);
  const response: CreateResolverRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateResolverRuleCommandError
 */
const de_CreateResolverRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResolverRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.route53resolver#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.route53resolver#ResourceExistsException":
      throw await de_ResourceExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.route53resolver#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1DeleteFirewallDomainListCommand
 */
export const de_DeleteFirewallDomainListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFirewallDomainListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteFirewallDomainListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteFirewallDomainListResponse(data, context);
  const response: DeleteFirewallDomainListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteFirewallDomainListCommandError
 */
const de_DeleteFirewallDomainListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFirewallDomainListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.route53resolver#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1DeleteFirewallRuleCommand
 */
export const de_DeleteFirewallRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFirewallRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteFirewallRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteFirewallRuleResponse(data, context);
  const response: DeleteFirewallRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteFirewallRuleCommandError
 */
const de_DeleteFirewallRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFirewallRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1DeleteFirewallRuleGroupCommand
 */
export const de_DeleteFirewallRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFirewallRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteFirewallRuleGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteFirewallRuleGroupResponse(data, context);
  const response: DeleteFirewallRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteFirewallRuleGroupCommandError
 */
const de_DeleteFirewallRuleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFirewallRuleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.route53resolver#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53resolver#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteResolverEndpointCommand
 */
export const de_DeleteResolverEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResolverEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteResolverEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteResolverEndpointResponse(data, context);
  const response: DeleteResolverEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteResolverEndpointCommandError
 */
const de_DeleteResolverEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResolverEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1DeleteResolverQueryLogConfigCommand
 */
export const de_DeleteResolverQueryLogConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResolverQueryLogConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteResolverQueryLogConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteResolverQueryLogConfigResponse(data, context);
  const response: DeleteResolverQueryLogConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteResolverQueryLogConfigCommandError
 */
const de_DeleteResolverQueryLogConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResolverQueryLogConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1DeleteResolverRuleCommand
 */
export const de_DeleteResolverRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResolverRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteResolverRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteResolverRuleResponse(data, context);
  const response: DeleteResolverRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteResolverRuleCommandError
 */
const de_DeleteResolverRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResolverRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.route53resolver#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1DisassociateFirewallRuleGroupCommand
 */
export const de_DisassociateFirewallRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFirewallRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateFirewallRuleGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateFirewallRuleGroupResponse(data, context);
  const response: DisassociateFirewallRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateFirewallRuleGroupCommandError
 */
const de_DisassociateFirewallRuleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFirewallRuleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.route53resolver#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53resolver#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DisassociateResolverEndpointIpAddressCommand
 */
export const de_DisassociateResolverEndpointIpAddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResolverEndpointIpAddressCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateResolverEndpointIpAddressCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateResolverEndpointIpAddressResponse(data, context);
  const response: DisassociateResolverEndpointIpAddressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateResolverEndpointIpAddressCommandError
 */
const de_DisassociateResolverEndpointIpAddressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResolverEndpointIpAddressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.route53resolver#ResourceExistsException":
      throw await de_ResourceExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1DisassociateResolverQueryLogConfigCommand
 */
export const de_DisassociateResolverQueryLogConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResolverQueryLogConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateResolverQueryLogConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateResolverQueryLogConfigResponse(data, context);
  const response: DisassociateResolverQueryLogConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateResolverQueryLogConfigCommandError
 */
const de_DisassociateResolverQueryLogConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResolverQueryLogConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1DisassociateResolverRuleCommand
 */
export const de_DisassociateResolverRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResolverRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateResolverRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateResolverRuleResponse(data, context);
  const response: DisassociateResolverRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateResolverRuleCommandError
 */
const de_DisassociateResolverRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResolverRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1GetFirewallConfigCommand
 */
export const de_GetFirewallConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFirewallConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetFirewallConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetFirewallConfigResponse(data, context);
  const response: GetFirewallConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetFirewallConfigCommandError
 */
const de_GetFirewallConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFirewallConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53resolver#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetFirewallDomainListCommand
 */
export const de_GetFirewallDomainListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFirewallDomainListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetFirewallDomainListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetFirewallDomainListResponse(data, context);
  const response: GetFirewallDomainListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetFirewallDomainListCommandError
 */
const de_GetFirewallDomainListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFirewallDomainListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1GetFirewallRuleGroupCommand
 */
export const de_GetFirewallRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFirewallRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetFirewallRuleGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetFirewallRuleGroupResponse(data, context);
  const response: GetFirewallRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetFirewallRuleGroupCommandError
 */
const de_GetFirewallRuleGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFirewallRuleGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1GetFirewallRuleGroupAssociationCommand
 */
export const de_GetFirewallRuleGroupAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFirewallRuleGroupAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetFirewallRuleGroupAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetFirewallRuleGroupAssociationResponse(data, context);
  const response: GetFirewallRuleGroupAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetFirewallRuleGroupAssociationCommandError
 */
const de_GetFirewallRuleGroupAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFirewallRuleGroupAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1GetFirewallRuleGroupPolicyCommand
 */
export const de_GetFirewallRuleGroupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFirewallRuleGroupPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetFirewallRuleGroupPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetFirewallRuleGroupPolicyResponse(data, context);
  const response: GetFirewallRuleGroupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetFirewallRuleGroupPolicyCommandError
 */
const de_GetFirewallRuleGroupPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFirewallRuleGroupPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53resolver#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetResolverConfigCommand
 */
export const de_GetResolverConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetResolverConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResolverConfigResponse(data, context);
  const response: GetResolverConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetResolverConfigCommandError
 */
const de_GetResolverConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53resolver#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetResolverDnssecConfigCommand
 */
export const de_GetResolverDnssecConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverDnssecConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetResolverDnssecConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResolverDnssecConfigResponse(data, context);
  const response: GetResolverDnssecConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetResolverDnssecConfigCommandError
 */
const de_GetResolverDnssecConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverDnssecConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1GetResolverEndpointCommand
 */
export const de_GetResolverEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetResolverEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResolverEndpointResponse(data, context);
  const response: GetResolverEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetResolverEndpointCommandError
 */
const de_GetResolverEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1GetResolverQueryLogConfigCommand
 */
export const de_GetResolverQueryLogConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverQueryLogConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetResolverQueryLogConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResolverQueryLogConfigResponse(data, context);
  const response: GetResolverQueryLogConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetResolverQueryLogConfigCommandError
 */
const de_GetResolverQueryLogConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverQueryLogConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1GetResolverQueryLogConfigAssociationCommand
 */
export const de_GetResolverQueryLogConfigAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverQueryLogConfigAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetResolverQueryLogConfigAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResolverQueryLogConfigAssociationResponse(data, context);
  const response: GetResolverQueryLogConfigAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetResolverQueryLogConfigAssociationCommandError
 */
const de_GetResolverQueryLogConfigAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverQueryLogConfigAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1GetResolverQueryLogConfigPolicyCommand
 */
export const de_GetResolverQueryLogConfigPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverQueryLogConfigPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetResolverQueryLogConfigPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResolverQueryLogConfigPolicyResponse(data, context);
  const response: GetResolverQueryLogConfigPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetResolverQueryLogConfigPolicyCommandError
 */
const de_GetResolverQueryLogConfigPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverQueryLogConfigPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.route53resolver#UnknownResourceException":
      throw await de_UnknownResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetResolverRuleCommand
 */
export const de_GetResolverRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetResolverRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResolverRuleResponse(data, context);
  const response: GetResolverRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetResolverRuleCommandError
 */
const de_GetResolverRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1GetResolverRuleAssociationCommand
 */
export const de_GetResolverRuleAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverRuleAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetResolverRuleAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResolverRuleAssociationResponse(data, context);
  const response: GetResolverRuleAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetResolverRuleAssociationCommandError
 */
const de_GetResolverRuleAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverRuleAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1GetResolverRulePolicyCommand
 */
export const de_GetResolverRulePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverRulePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetResolverRulePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResolverRulePolicyResponse(data, context);
  const response: GetResolverRulePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetResolverRulePolicyCommandError
 */
const de_GetResolverRulePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverRulePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.route53resolver#UnknownResourceException":
      throw await de_UnknownResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ImportFirewallDomainsCommand
 */
export const de_ImportFirewallDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportFirewallDomainsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ImportFirewallDomainsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ImportFirewallDomainsResponse(data, context);
  const response: ImportFirewallDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ImportFirewallDomainsCommandError
 */
const de_ImportFirewallDomainsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportFirewallDomainsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.route53resolver#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.route53resolver#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53resolver#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListFirewallConfigsCommand
 */
export const de_ListFirewallConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFirewallConfigsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFirewallConfigsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListFirewallConfigsResponse(data, context);
  const response: ListFirewallConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListFirewallConfigsCommandError
 */
const de_ListFirewallConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFirewallConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53resolver#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListFirewallDomainListsCommand
 */
export const de_ListFirewallDomainListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFirewallDomainListsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFirewallDomainListsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListFirewallDomainListsResponse(data, context);
  const response: ListFirewallDomainListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListFirewallDomainListsCommandError
 */
const de_ListFirewallDomainListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFirewallDomainListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53resolver#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListFirewallDomainsCommand
 */
export const de_ListFirewallDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFirewallDomainsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFirewallDomainsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListFirewallDomainsResponse(data, context);
  const response: ListFirewallDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListFirewallDomainsCommandError
 */
const de_ListFirewallDomainsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFirewallDomainsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53resolver#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListFirewallRuleGroupAssociationsCommand
 */
export const de_ListFirewallRuleGroupAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFirewallRuleGroupAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFirewallRuleGroupAssociationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListFirewallRuleGroupAssociationsResponse(data, context);
  const response: ListFirewallRuleGroupAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListFirewallRuleGroupAssociationsCommandError
 */
const de_ListFirewallRuleGroupAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFirewallRuleGroupAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53resolver#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListFirewallRuleGroupsCommand
 */
export const de_ListFirewallRuleGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFirewallRuleGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFirewallRuleGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListFirewallRuleGroupsResponse(data, context);
  const response: ListFirewallRuleGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListFirewallRuleGroupsCommandError
 */
const de_ListFirewallRuleGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFirewallRuleGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53resolver#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListFirewallRulesCommand
 */
export const de_ListFirewallRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFirewallRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFirewallRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListFirewallRulesResponse(data, context);
  const response: ListFirewallRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListFirewallRulesCommandError
 */
const de_ListFirewallRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFirewallRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53resolver#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListResolverConfigsCommand
 */
export const de_ListResolverConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverConfigsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListResolverConfigsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListResolverConfigsResponse(data, context);
  const response: ListResolverConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListResolverConfigsCommandError
 */
const de_ListResolverConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.route53resolver#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53resolver#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListResolverDnssecConfigsCommand
 */
export const de_ListResolverDnssecConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverDnssecConfigsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListResolverDnssecConfigsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListResolverDnssecConfigsResponse(data, context);
  const response: ListResolverDnssecConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListResolverDnssecConfigsCommandError
 */
const de_ListResolverDnssecConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverDnssecConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.route53resolver#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1ListResolverEndpointIpAddressesCommand
 */
export const de_ListResolverEndpointIpAddressesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverEndpointIpAddressesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListResolverEndpointIpAddressesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListResolverEndpointIpAddressesResponse(data, context);
  const response: ListResolverEndpointIpAddressesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListResolverEndpointIpAddressesCommandError
 */
const de_ListResolverEndpointIpAddressesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverEndpointIpAddressesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.route53resolver#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1ListResolverEndpointsCommand
 */
export const de_ListResolverEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListResolverEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListResolverEndpointsResponse(data, context);
  const response: ListResolverEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListResolverEndpointsCommandError
 */
const de_ListResolverEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.route53resolver#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1ListResolverQueryLogConfigAssociationsCommand
 */
export const de_ListResolverQueryLogConfigAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverQueryLogConfigAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListResolverQueryLogConfigAssociationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListResolverQueryLogConfigAssociationsResponse(data, context);
  const response: ListResolverQueryLogConfigAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListResolverQueryLogConfigAssociationsCommandError
 */
const de_ListResolverQueryLogConfigAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverQueryLogConfigAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.route53resolver#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1ListResolverQueryLogConfigsCommand
 */
export const de_ListResolverQueryLogConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverQueryLogConfigsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListResolverQueryLogConfigsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListResolverQueryLogConfigsResponse(data, context);
  const response: ListResolverQueryLogConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListResolverQueryLogConfigsCommandError
 */
const de_ListResolverQueryLogConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverQueryLogConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.route53resolver#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1ListResolverRuleAssociationsCommand
 */
export const de_ListResolverRuleAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverRuleAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListResolverRuleAssociationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListResolverRuleAssociationsResponse(data, context);
  const response: ListResolverRuleAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListResolverRuleAssociationsCommandError
 */
const de_ListResolverRuleAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverRuleAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.route53resolver#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1ListResolverRulesCommand
 */
export const de_ListResolverRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListResolverRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListResolverRulesResponse(data, context);
  const response: ListResolverRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListResolverRulesCommandError
 */
const de_ListResolverRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.route53resolver#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
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
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.route53resolver#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1PutFirewallRuleGroupPolicyCommand
 */
export const de_PutFirewallRuleGroupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFirewallRuleGroupPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutFirewallRuleGroupPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutFirewallRuleGroupPolicyResponse(data, context);
  const response: PutFirewallRuleGroupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutFirewallRuleGroupPolicyCommandError
 */
const de_PutFirewallRuleGroupPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFirewallRuleGroupPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53resolver#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutResolverQueryLogConfigPolicyCommand
 */
export const de_PutResolverQueryLogConfigPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResolverQueryLogConfigPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutResolverQueryLogConfigPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutResolverQueryLogConfigPolicyResponse(data, context);
  const response: PutResolverQueryLogConfigPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutResolverQueryLogConfigPolicyCommandError
 */
const de_PutResolverQueryLogConfigPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResolverQueryLogConfigPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidPolicyDocument":
    case "com.amazonaws.route53resolver#InvalidPolicyDocument":
      throw await de_InvalidPolicyDocumentRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.route53resolver#UnknownResourceException":
      throw await de_UnknownResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutResolverRulePolicyCommand
 */
export const de_PutResolverRulePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResolverRulePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutResolverRulePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutResolverRulePolicyResponse(data, context);
  const response: PutResolverRulePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutResolverRulePolicyCommandError
 */
const de_PutResolverRulePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResolverRulePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidPolicyDocument":
    case "com.amazonaws.route53resolver#InvalidPolicyDocument":
      throw await de_InvalidPolicyDocumentRes(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.route53resolver#UnknownResourceException":
      throw await de_UnknownResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
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
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidTagException":
    case "com.amazonaws.route53resolver#InvalidTagException":
      throw await de_InvalidTagExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.route53resolver#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
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
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1UpdateFirewallConfigCommand
 */
export const de_UpdateFirewallConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateFirewallConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateFirewallConfigResponse(data, context);
  const response: UpdateFirewallConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateFirewallConfigCommandError
 */
const de_UpdateFirewallConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53resolver#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateFirewallDomainsCommand
 */
export const de_UpdateFirewallDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallDomainsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateFirewallDomainsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateFirewallDomainsResponse(data, context);
  const response: UpdateFirewallDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateFirewallDomainsCommandError
 */
const de_UpdateFirewallDomainsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallDomainsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.route53resolver#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.route53resolver#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53resolver#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateFirewallRuleCommand
 */
export const de_UpdateFirewallRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateFirewallRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateFirewallRuleResponse(data, context);
  const response: UpdateFirewallRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateFirewallRuleCommandError
 */
const de_UpdateFirewallRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.route53resolver#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53resolver#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateFirewallRuleGroupAssociationCommand
 */
export const de_UpdateFirewallRuleGroupAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallRuleGroupAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateFirewallRuleGroupAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateFirewallRuleGroupAssociationResponse(data, context);
  const response: UpdateFirewallRuleGroupAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateFirewallRuleGroupAssociationCommandError
 */
const de_UpdateFirewallRuleGroupAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallRuleGroupAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.route53resolver#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53resolver#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateResolverConfigCommand
 */
export const de_UpdateResolverConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateResolverConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateResolverConfigResponse(data, context);
  const response: UpdateResolverConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateResolverConfigCommandError
 */
const de_UpdateResolverConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.route53resolver#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.route53resolver#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53resolver#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateResolverDnssecConfigCommand
 */
export const de_UpdateResolverDnssecConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverDnssecConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateResolverDnssecConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateResolverDnssecConfigResponse(data, context);
  const response: UpdateResolverDnssecConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateResolverDnssecConfigCommandError
 */
const de_UpdateResolverDnssecConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverDnssecConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53resolver#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1UpdateResolverEndpointCommand
 */
export const de_UpdateResolverEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateResolverEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateResolverEndpointResponse(data, context);
  const response: UpdateResolverEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateResolverEndpointCommandError
 */
const de_UpdateResolverEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1UpdateResolverRuleCommand
 */
export const de_UpdateResolverRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateResolverRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateResolverRuleResponse(data, context);
  const response: UpdateResolverRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateResolverRuleCommandError
 */
const de_UpdateResolverRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.route53resolver#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.route53resolver#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
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
 * deserializeAws_json1_1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServiceErrorExceptionRes
 */
const de_InternalServiceErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServiceErrorException(body, context);
  const exception = new InternalServiceErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidNextTokenExceptionRes
 */
const de_InvalidNextTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidNextTokenException(body, context);
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterException(body, context);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidPolicyDocumentRes
 */
const de_InvalidPolicyDocumentRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPolicyDocument> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidPolicyDocument(body, context);
  const exception = new InvalidPolicyDocument({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidRequestException(body, context);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTagExceptionRes
 */
const de_InvalidTagExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidTagException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTagException(body, context);
  const exception = new InvalidTagException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceExistsExceptionRes
 */
const de_ResourceExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceExistsException(body, context);
  const exception = new ResourceExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceInUseException(body, context);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceUnavailableExceptionRes
 */
const de_ResourceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceUnavailableException(body, context);
  const exception = new ResourceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnknownResourceExceptionRes
 */
const de_UnknownResourceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnknownResourceException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnknownResourceException(body, context);
  const exception = new UnknownResourceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AssociateFirewallRuleGroupRequest
 */
const se_AssociateFirewallRuleGroupRequest = (
  input: AssociateFirewallRuleGroupRequest,
  context: __SerdeContext
): any => {
  return {
    CreatorRequestId: input.CreatorRequestId ?? generateIdempotencyToken(),
    ...(input.FirewallRuleGroupId != null && { FirewallRuleGroupId: input.FirewallRuleGroupId }),
    ...(input.MutationProtection != null && { MutationProtection: input.MutationProtection }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

/**
 * serializeAws_json1_1AssociateResolverEndpointIpAddressRequest
 */
const se_AssociateResolverEndpointIpAddressRequest = (
  input: AssociateResolverEndpointIpAddressRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IpAddress != null && { IpAddress: se_IpAddressUpdate(input.IpAddress, context) }),
    ...(input.ResolverEndpointId != null && { ResolverEndpointId: input.ResolverEndpointId }),
  };
};

/**
 * serializeAws_json1_1AssociateResolverQueryLogConfigRequest
 */
const se_AssociateResolverQueryLogConfigRequest = (
  input: AssociateResolverQueryLogConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResolverQueryLogConfigId != null && { ResolverQueryLogConfigId: input.ResolverQueryLogConfigId }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1AssociateResolverRuleRequest
 */
const se_AssociateResolverRuleRequest = (input: AssociateResolverRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ResolverRuleId != null && { ResolverRuleId: input.ResolverRuleId }),
    ...(input.VPCId != null && { VPCId: input.VPCId }),
  };
};

/**
 * serializeAws_json1_1CreateFirewallDomainListRequest
 */
const se_CreateFirewallDomainListRequest = (input: CreateFirewallDomainListRequest, context: __SerdeContext): any => {
  return {
    CreatorRequestId: input.CreatorRequestId ?? generateIdempotencyToken(),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateFirewallRuleGroupRequest
 */
const se_CreateFirewallRuleGroupRequest = (input: CreateFirewallRuleGroupRequest, context: __SerdeContext): any => {
  return {
    CreatorRequestId: input.CreatorRequestId ?? generateIdempotencyToken(),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateFirewallRuleRequest
 */
const se_CreateFirewallRuleRequest = (input: CreateFirewallRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.BlockOverrideDnsType != null && { BlockOverrideDnsType: input.BlockOverrideDnsType }),
    ...(input.BlockOverrideDomain != null && { BlockOverrideDomain: input.BlockOverrideDomain }),
    ...(input.BlockOverrideTtl != null && { BlockOverrideTtl: input.BlockOverrideTtl }),
    ...(input.BlockResponse != null && { BlockResponse: input.BlockResponse }),
    CreatorRequestId: input.CreatorRequestId ?? generateIdempotencyToken(),
    ...(input.FirewallDomainListId != null && { FirewallDomainListId: input.FirewallDomainListId }),
    ...(input.FirewallRuleGroupId != null && { FirewallRuleGroupId: input.FirewallRuleGroupId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Priority != null && { Priority: input.Priority }),
  };
};

/**
 * serializeAws_json1_1CreateResolverEndpointRequest
 */
const se_CreateResolverEndpointRequest = (input: CreateResolverEndpointRequest, context: __SerdeContext): any => {
  return {
    ...(input.CreatorRequestId != null && { CreatorRequestId: input.CreatorRequestId }),
    ...(input.Direction != null && { Direction: input.Direction }),
    ...(input.IpAddresses != null && { IpAddresses: se_IpAddressesRequest(input.IpAddresses, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ResolverEndpointType != null && { ResolverEndpointType: input.ResolverEndpointType }),
    ...(input.SecurityGroupIds != null && { SecurityGroupIds: se_SecurityGroupIds(input.SecurityGroupIds, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateResolverQueryLogConfigRequest
 */
const se_CreateResolverQueryLogConfigRequest = (
  input: CreateResolverQueryLogConfigRequest,
  context: __SerdeContext
): any => {
  return {
    CreatorRequestId: input.CreatorRequestId ?? generateIdempotencyToken(),
    ...(input.DestinationArn != null && { DestinationArn: input.DestinationArn }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateResolverRuleRequest
 */
const se_CreateResolverRuleRequest = (input: CreateResolverRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.CreatorRequestId != null && { CreatorRequestId: input.CreatorRequestId }),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ResolverEndpointId != null && { ResolverEndpointId: input.ResolverEndpointId }),
    ...(input.RuleType != null && { RuleType: input.RuleType }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.TargetIps != null && { TargetIps: se_TargetList(input.TargetIps, context) }),
  };
};

/**
 * serializeAws_json1_1DeleteFirewallDomainListRequest
 */
const se_DeleteFirewallDomainListRequest = (input: DeleteFirewallDomainListRequest, context: __SerdeContext): any => {
  return {
    ...(input.FirewallDomainListId != null && { FirewallDomainListId: input.FirewallDomainListId }),
  };
};

/**
 * serializeAws_json1_1DeleteFirewallRuleGroupRequest
 */
const se_DeleteFirewallRuleGroupRequest = (input: DeleteFirewallRuleGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.FirewallRuleGroupId != null && { FirewallRuleGroupId: input.FirewallRuleGroupId }),
  };
};

/**
 * serializeAws_json1_1DeleteFirewallRuleRequest
 */
const se_DeleteFirewallRuleRequest = (input: DeleteFirewallRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.FirewallDomainListId != null && { FirewallDomainListId: input.FirewallDomainListId }),
    ...(input.FirewallRuleGroupId != null && { FirewallRuleGroupId: input.FirewallRuleGroupId }),
  };
};

/**
 * serializeAws_json1_1DeleteResolverEndpointRequest
 */
const se_DeleteResolverEndpointRequest = (input: DeleteResolverEndpointRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResolverEndpointId != null && { ResolverEndpointId: input.ResolverEndpointId }),
  };
};

/**
 * serializeAws_json1_1DeleteResolverQueryLogConfigRequest
 */
const se_DeleteResolverQueryLogConfigRequest = (
  input: DeleteResolverQueryLogConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResolverQueryLogConfigId != null && { ResolverQueryLogConfigId: input.ResolverQueryLogConfigId }),
  };
};

/**
 * serializeAws_json1_1DeleteResolverRuleRequest
 */
const se_DeleteResolverRuleRequest = (input: DeleteResolverRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResolverRuleId != null && { ResolverRuleId: input.ResolverRuleId }),
  };
};

/**
 * serializeAws_json1_1DisassociateFirewallRuleGroupRequest
 */
const se_DisassociateFirewallRuleGroupRequest = (
  input: DisassociateFirewallRuleGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FirewallRuleGroupAssociationId != null && {
      FirewallRuleGroupAssociationId: input.FirewallRuleGroupAssociationId,
    }),
  };
};

/**
 * serializeAws_json1_1DisassociateResolverEndpointIpAddressRequest
 */
const se_DisassociateResolverEndpointIpAddressRequest = (
  input: DisassociateResolverEndpointIpAddressRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IpAddress != null && { IpAddress: se_IpAddressUpdate(input.IpAddress, context) }),
    ...(input.ResolverEndpointId != null && { ResolverEndpointId: input.ResolverEndpointId }),
  };
};

/**
 * serializeAws_json1_1DisassociateResolverQueryLogConfigRequest
 */
const se_DisassociateResolverQueryLogConfigRequest = (
  input: DisassociateResolverQueryLogConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResolverQueryLogConfigId != null && { ResolverQueryLogConfigId: input.ResolverQueryLogConfigId }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1DisassociateResolverRuleRequest
 */
const se_DisassociateResolverRuleRequest = (input: DisassociateResolverRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResolverRuleId != null && { ResolverRuleId: input.ResolverRuleId }),
    ...(input.VPCId != null && { VPCId: input.VPCId }),
  };
};

/**
 * serializeAws_json1_1Filter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: se_FilterValues(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1Filters
 */
const se_Filters = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Filter(entry, context);
    });
};

/**
 * serializeAws_json1_1FilterValues
 */
const se_FilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1FirewallDomains
 */
const se_FirewallDomains = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1GetFirewallConfigRequest
 */
const se_GetFirewallConfigRequest = (input: GetFirewallConfigRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1GetFirewallDomainListRequest
 */
const se_GetFirewallDomainListRequest = (input: GetFirewallDomainListRequest, context: __SerdeContext): any => {
  return {
    ...(input.FirewallDomainListId != null && { FirewallDomainListId: input.FirewallDomainListId }),
  };
};

/**
 * serializeAws_json1_1GetFirewallRuleGroupAssociationRequest
 */
const se_GetFirewallRuleGroupAssociationRequest = (
  input: GetFirewallRuleGroupAssociationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FirewallRuleGroupAssociationId != null && {
      FirewallRuleGroupAssociationId: input.FirewallRuleGroupAssociationId,
    }),
  };
};

/**
 * serializeAws_json1_1GetFirewallRuleGroupPolicyRequest
 */
const se_GetFirewallRuleGroupPolicyRequest = (
  input: GetFirewallRuleGroupPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
  };
};

/**
 * serializeAws_json1_1GetFirewallRuleGroupRequest
 */
const se_GetFirewallRuleGroupRequest = (input: GetFirewallRuleGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.FirewallRuleGroupId != null && { FirewallRuleGroupId: input.FirewallRuleGroupId }),
  };
};

/**
 * serializeAws_json1_1GetResolverConfigRequest
 */
const se_GetResolverConfigRequest = (input: GetResolverConfigRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1GetResolverDnssecConfigRequest
 */
const se_GetResolverDnssecConfigRequest = (input: GetResolverDnssecConfigRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1GetResolverEndpointRequest
 */
const se_GetResolverEndpointRequest = (input: GetResolverEndpointRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResolverEndpointId != null && { ResolverEndpointId: input.ResolverEndpointId }),
  };
};

/**
 * serializeAws_json1_1GetResolverQueryLogConfigAssociationRequest
 */
const se_GetResolverQueryLogConfigAssociationRequest = (
  input: GetResolverQueryLogConfigAssociationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResolverQueryLogConfigAssociationId != null && {
      ResolverQueryLogConfigAssociationId: input.ResolverQueryLogConfigAssociationId,
    }),
  };
};

/**
 * serializeAws_json1_1GetResolverQueryLogConfigPolicyRequest
 */
const se_GetResolverQueryLogConfigPolicyRequest = (
  input: GetResolverQueryLogConfigPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
  };
};

/**
 * serializeAws_json1_1GetResolverQueryLogConfigRequest
 */
const se_GetResolverQueryLogConfigRequest = (input: GetResolverQueryLogConfigRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResolverQueryLogConfigId != null && { ResolverQueryLogConfigId: input.ResolverQueryLogConfigId }),
  };
};

/**
 * serializeAws_json1_1GetResolverRuleAssociationRequest
 */
const se_GetResolverRuleAssociationRequest = (
  input: GetResolverRuleAssociationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResolverRuleAssociationId != null && { ResolverRuleAssociationId: input.ResolverRuleAssociationId }),
  };
};

/**
 * serializeAws_json1_1GetResolverRulePolicyRequest
 */
const se_GetResolverRulePolicyRequest = (input: GetResolverRulePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
  };
};

/**
 * serializeAws_json1_1GetResolverRuleRequest
 */
const se_GetResolverRuleRequest = (input: GetResolverRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResolverRuleId != null && { ResolverRuleId: input.ResolverRuleId }),
  };
};

/**
 * serializeAws_json1_1ImportFirewallDomainsRequest
 */
const se_ImportFirewallDomainsRequest = (input: ImportFirewallDomainsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainFileUrl != null && { DomainFileUrl: input.DomainFileUrl }),
    ...(input.FirewallDomainListId != null && { FirewallDomainListId: input.FirewallDomainListId }),
    ...(input.Operation != null && { Operation: input.Operation }),
  };
};

/**
 * serializeAws_json1_1IpAddressesRequest
 */
const se_IpAddressesRequest = (input: IpAddressRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_IpAddressRequest(entry, context);
    });
};

/**
 * serializeAws_json1_1IpAddressRequest
 */
const se_IpAddressRequest = (input: IpAddressRequest, context: __SerdeContext): any => {
  return {
    ...(input.Ip != null && { Ip: input.Ip }),
    ...(input.Ipv6 != null && { Ipv6: input.Ipv6 }),
    ...(input.SubnetId != null && { SubnetId: input.SubnetId }),
  };
};

/**
 * serializeAws_json1_1IpAddressUpdate
 */
const se_IpAddressUpdate = (input: IpAddressUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Ip != null && { Ip: input.Ip }),
    ...(input.IpId != null && { IpId: input.IpId }),
    ...(input.Ipv6 != null && { Ipv6: input.Ipv6 }),
    ...(input.SubnetId != null && { SubnetId: input.SubnetId }),
  };
};

/**
 * serializeAws_json1_1ListFirewallConfigsRequest
 */
const se_ListFirewallConfigsRequest = (input: ListFirewallConfigsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListFirewallDomainListsRequest
 */
const se_ListFirewallDomainListsRequest = (input: ListFirewallDomainListsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListFirewallDomainsRequest
 */
const se_ListFirewallDomainsRequest = (input: ListFirewallDomainsRequest, context: __SerdeContext): any => {
  return {
    ...(input.FirewallDomainListId != null && { FirewallDomainListId: input.FirewallDomainListId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListFirewallRuleGroupAssociationsRequest
 */
const se_ListFirewallRuleGroupAssociationsRequest = (
  input: ListFirewallRuleGroupAssociationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FirewallRuleGroupId != null && { FirewallRuleGroupId: input.FirewallRuleGroupId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

/**
 * serializeAws_json1_1ListFirewallRuleGroupsRequest
 */
const se_ListFirewallRuleGroupsRequest = (input: ListFirewallRuleGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListFirewallRulesRequest
 */
const se_ListFirewallRulesRequest = (input: ListFirewallRulesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.FirewallRuleGroupId != null && { FirewallRuleGroupId: input.FirewallRuleGroupId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Priority != null && { Priority: input.Priority }),
  };
};

/**
 * serializeAws_json1_1ListResolverConfigsRequest
 */
const se_ListResolverConfigsRequest = (input: ListResolverConfigsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListResolverDnssecConfigsRequest
 */
const se_ListResolverDnssecConfigsRequest = (input: ListResolverDnssecConfigsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListResolverEndpointIpAddressesRequest
 */
const se_ListResolverEndpointIpAddressesRequest = (
  input: ListResolverEndpointIpAddressesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResolverEndpointId != null && { ResolverEndpointId: input.ResolverEndpointId }),
  };
};

/**
 * serializeAws_json1_1ListResolverEndpointsRequest
 */
const se_ListResolverEndpointsRequest = (input: ListResolverEndpointsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListResolverQueryLogConfigAssociationsRequest
 */
const se_ListResolverQueryLogConfigAssociationsRequest = (
  input: ListResolverQueryLogConfigAssociationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortBy != null && { SortBy: input.SortBy }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

/**
 * serializeAws_json1_1ListResolverQueryLogConfigsRequest
 */
const se_ListResolverQueryLogConfigsRequest = (
  input: ListResolverQueryLogConfigsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortBy != null && { SortBy: input.SortBy }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

/**
 * serializeAws_json1_1ListResolverRuleAssociationsRequest
 */
const se_ListResolverRuleAssociationsRequest = (
  input: ListResolverRuleAssociationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListResolverRulesRequest
 */
const se_ListResolverRulesRequest = (input: ListResolverRulesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1PutFirewallRuleGroupPolicyRequest
 */
const se_PutFirewallRuleGroupPolicyRequest = (
  input: PutFirewallRuleGroupPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.FirewallRuleGroupPolicy != null && { FirewallRuleGroupPolicy: input.FirewallRuleGroupPolicy }),
  };
};

/**
 * serializeAws_json1_1PutResolverQueryLogConfigPolicyRequest
 */
const se_PutResolverQueryLogConfigPolicyRequest = (
  input: PutResolverQueryLogConfigPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.ResolverQueryLogConfigPolicy != null && {
      ResolverQueryLogConfigPolicy: input.ResolverQueryLogConfigPolicy,
    }),
  };
};

/**
 * serializeAws_json1_1PutResolverRulePolicyRequest
 */
const se_PutResolverRulePolicyRequest = (input: PutResolverRulePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.ResolverRulePolicy != null && { ResolverRulePolicy: input.ResolverRulePolicy }),
  };
};

/**
 * serializeAws_json1_1ResolverRuleConfig
 */
const se_ResolverRuleConfig = (input: ResolverRuleConfig, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ResolverEndpointId != null && { ResolverEndpointId: input.ResolverEndpointId }),
    ...(input.TargetIps != null && { TargetIps: se_TargetList(input.TargetIps, context) }),
  };
};

/**
 * serializeAws_json1_1SecurityGroupIds
 */
const se_SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1TargetAddress
 */
const se_TargetAddress = (input: TargetAddress, context: __SerdeContext): any => {
  return {
    ...(input.Ip != null && { Ip: input.Ip }),
    ...(input.Ipv6 != null && { Ipv6: input.Ipv6 }),
    ...(input.Port != null && { Port: input.Port }),
  };
};

/**
 * serializeAws_json1_1TargetList
 */
const se_TargetList = (input: TargetAddress[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TargetAddress(entry, context);
    });
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateFirewallConfigRequest
 */
const se_UpdateFirewallConfigRequest = (input: UpdateFirewallConfigRequest, context: __SerdeContext): any => {
  return {
    ...(input.FirewallFailOpen != null && { FirewallFailOpen: input.FirewallFailOpen }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1UpdateFirewallDomainsRequest
 */
const se_UpdateFirewallDomainsRequest = (input: UpdateFirewallDomainsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Domains != null && { Domains: se_FirewallDomains(input.Domains, context) }),
    ...(input.FirewallDomainListId != null && { FirewallDomainListId: input.FirewallDomainListId }),
    ...(input.Operation != null && { Operation: input.Operation }),
  };
};

/**
 * serializeAws_json1_1UpdateFirewallRuleGroupAssociationRequest
 */
const se_UpdateFirewallRuleGroupAssociationRequest = (
  input: UpdateFirewallRuleGroupAssociationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FirewallRuleGroupAssociationId != null && {
      FirewallRuleGroupAssociationId: input.FirewallRuleGroupAssociationId,
    }),
    ...(input.MutationProtection != null && { MutationProtection: input.MutationProtection }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Priority != null && { Priority: input.Priority }),
  };
};

/**
 * serializeAws_json1_1UpdateFirewallRuleRequest
 */
const se_UpdateFirewallRuleRequest = (input: UpdateFirewallRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.BlockOverrideDnsType != null && { BlockOverrideDnsType: input.BlockOverrideDnsType }),
    ...(input.BlockOverrideDomain != null && { BlockOverrideDomain: input.BlockOverrideDomain }),
    ...(input.BlockOverrideTtl != null && { BlockOverrideTtl: input.BlockOverrideTtl }),
    ...(input.BlockResponse != null && { BlockResponse: input.BlockResponse }),
    ...(input.FirewallDomainListId != null && { FirewallDomainListId: input.FirewallDomainListId }),
    ...(input.FirewallRuleGroupId != null && { FirewallRuleGroupId: input.FirewallRuleGroupId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Priority != null && { Priority: input.Priority }),
  };
};

/**
 * serializeAws_json1_1UpdateIpAddress
 */
const se_UpdateIpAddress = (input: UpdateIpAddress, context: __SerdeContext): any => {
  return {
    ...(input.IpId != null && { IpId: input.IpId }),
    ...(input.Ipv6 != null && { Ipv6: input.Ipv6 }),
  };
};

/**
 * serializeAws_json1_1UpdateIpAddresses
 */
const se_UpdateIpAddresses = (input: UpdateIpAddress[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_UpdateIpAddress(entry, context);
    });
};

/**
 * serializeAws_json1_1UpdateResolverConfigRequest
 */
const se_UpdateResolverConfigRequest = (input: UpdateResolverConfigRequest, context: __SerdeContext): any => {
  return {
    ...(input.AutodefinedReverseFlag != null && { AutodefinedReverseFlag: input.AutodefinedReverseFlag }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1UpdateResolverDnssecConfigRequest
 */
const se_UpdateResolverDnssecConfigRequest = (
  input: UpdateResolverDnssecConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.Validation != null && { Validation: input.Validation }),
  };
};

/**
 * serializeAws_json1_1UpdateResolverEndpointRequest
 */
const se_UpdateResolverEndpointRequest = (input: UpdateResolverEndpointRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ResolverEndpointId != null && { ResolverEndpointId: input.ResolverEndpointId }),
    ...(input.ResolverEndpointType != null && { ResolverEndpointType: input.ResolverEndpointType }),
    ...(input.UpdateIpAddresses != null && {
      UpdateIpAddresses: se_UpdateIpAddresses(input.UpdateIpAddresses, context),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateResolverRuleRequest
 */
const se_UpdateResolverRuleRequest = (input: UpdateResolverRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.Config != null && { Config: se_ResolverRuleConfig(input.Config, context) }),
    ...(input.ResolverRuleId != null && { ResolverRuleId: input.ResolverRuleId }),
  };
};

/**
 * deserializeAws_json1_1AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AssociateFirewallRuleGroupResponse
 */
const de_AssociateFirewallRuleGroupResponse = (
  output: any,
  context: __SerdeContext
): AssociateFirewallRuleGroupResponse => {
  return {
    FirewallRuleGroupAssociation:
      output.FirewallRuleGroupAssociation != null
        ? de_FirewallRuleGroupAssociation(output.FirewallRuleGroupAssociation, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AssociateResolverEndpointIpAddressResponse
 */
const de_AssociateResolverEndpointIpAddressResponse = (
  output: any,
  context: __SerdeContext
): AssociateResolverEndpointIpAddressResponse => {
  return {
    ResolverEndpoint:
      output.ResolverEndpoint != null ? de_ResolverEndpoint(output.ResolverEndpoint, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AssociateResolverQueryLogConfigResponse
 */
const de_AssociateResolverQueryLogConfigResponse = (
  output: any,
  context: __SerdeContext
): AssociateResolverQueryLogConfigResponse => {
  return {
    ResolverQueryLogConfigAssociation:
      output.ResolverQueryLogConfigAssociation != null
        ? de_ResolverQueryLogConfigAssociation(output.ResolverQueryLogConfigAssociation, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AssociateResolverRuleResponse
 */
const de_AssociateResolverRuleResponse = (output: any, context: __SerdeContext): AssociateResolverRuleResponse => {
  return {
    ResolverRuleAssociation:
      output.ResolverRuleAssociation != null
        ? de_ResolverRuleAssociation(output.ResolverRuleAssociation, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1CreateFirewallDomainListResponse
 */
const de_CreateFirewallDomainListResponse = (
  output: any,
  context: __SerdeContext
): CreateFirewallDomainListResponse => {
  return {
    FirewallDomainList:
      output.FirewallDomainList != null ? de_FirewallDomainList(output.FirewallDomainList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateFirewallRuleGroupResponse
 */
const de_CreateFirewallRuleGroupResponse = (output: any, context: __SerdeContext): CreateFirewallRuleGroupResponse => {
  return {
    FirewallRuleGroup:
      output.FirewallRuleGroup != null ? de_FirewallRuleGroup(output.FirewallRuleGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateFirewallRuleResponse
 */
const de_CreateFirewallRuleResponse = (output: any, context: __SerdeContext): CreateFirewallRuleResponse => {
  return {
    FirewallRule: output.FirewallRule != null ? de_FirewallRule(output.FirewallRule, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateResolverEndpointResponse
 */
const de_CreateResolverEndpointResponse = (output: any, context: __SerdeContext): CreateResolverEndpointResponse => {
  return {
    ResolverEndpoint:
      output.ResolverEndpoint != null ? de_ResolverEndpoint(output.ResolverEndpoint, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateResolverQueryLogConfigResponse
 */
const de_CreateResolverQueryLogConfigResponse = (
  output: any,
  context: __SerdeContext
): CreateResolverQueryLogConfigResponse => {
  return {
    ResolverQueryLogConfig:
      output.ResolverQueryLogConfig != null
        ? de_ResolverQueryLogConfig(output.ResolverQueryLogConfig, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateResolverRuleResponse
 */
const de_CreateResolverRuleResponse = (output: any, context: __SerdeContext): CreateResolverRuleResponse => {
  return {
    ResolverRule: output.ResolverRule != null ? de_ResolverRule(output.ResolverRule, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteFirewallDomainListResponse
 */
const de_DeleteFirewallDomainListResponse = (
  output: any,
  context: __SerdeContext
): DeleteFirewallDomainListResponse => {
  return {
    FirewallDomainList:
      output.FirewallDomainList != null ? de_FirewallDomainList(output.FirewallDomainList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteFirewallRuleGroupResponse
 */
const de_DeleteFirewallRuleGroupResponse = (output: any, context: __SerdeContext): DeleteFirewallRuleGroupResponse => {
  return {
    FirewallRuleGroup:
      output.FirewallRuleGroup != null ? de_FirewallRuleGroup(output.FirewallRuleGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteFirewallRuleResponse
 */
const de_DeleteFirewallRuleResponse = (output: any, context: __SerdeContext): DeleteFirewallRuleResponse => {
  return {
    FirewallRule: output.FirewallRule != null ? de_FirewallRule(output.FirewallRule, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteResolverEndpointResponse
 */
const de_DeleteResolverEndpointResponse = (output: any, context: __SerdeContext): DeleteResolverEndpointResponse => {
  return {
    ResolverEndpoint:
      output.ResolverEndpoint != null ? de_ResolverEndpoint(output.ResolverEndpoint, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteResolverQueryLogConfigResponse
 */
const de_DeleteResolverQueryLogConfigResponse = (
  output: any,
  context: __SerdeContext
): DeleteResolverQueryLogConfigResponse => {
  return {
    ResolverQueryLogConfig:
      output.ResolverQueryLogConfig != null
        ? de_ResolverQueryLogConfig(output.ResolverQueryLogConfig, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteResolverRuleResponse
 */
const de_DeleteResolverRuleResponse = (output: any, context: __SerdeContext): DeleteResolverRuleResponse => {
  return {
    ResolverRule: output.ResolverRule != null ? de_ResolverRule(output.ResolverRule, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DisassociateFirewallRuleGroupResponse
 */
const de_DisassociateFirewallRuleGroupResponse = (
  output: any,
  context: __SerdeContext
): DisassociateFirewallRuleGroupResponse => {
  return {
    FirewallRuleGroupAssociation:
      output.FirewallRuleGroupAssociation != null
        ? de_FirewallRuleGroupAssociation(output.FirewallRuleGroupAssociation, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DisassociateResolverEndpointIpAddressResponse
 */
const de_DisassociateResolverEndpointIpAddressResponse = (
  output: any,
  context: __SerdeContext
): DisassociateResolverEndpointIpAddressResponse => {
  return {
    ResolverEndpoint:
      output.ResolverEndpoint != null ? de_ResolverEndpoint(output.ResolverEndpoint, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DisassociateResolverQueryLogConfigResponse
 */
const de_DisassociateResolverQueryLogConfigResponse = (
  output: any,
  context: __SerdeContext
): DisassociateResolverQueryLogConfigResponse => {
  return {
    ResolverQueryLogConfigAssociation:
      output.ResolverQueryLogConfigAssociation != null
        ? de_ResolverQueryLogConfigAssociation(output.ResolverQueryLogConfigAssociation, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DisassociateResolverRuleResponse
 */
const de_DisassociateResolverRuleResponse = (
  output: any,
  context: __SerdeContext
): DisassociateResolverRuleResponse => {
  return {
    ResolverRuleAssociation:
      output.ResolverRuleAssociation != null
        ? de_ResolverRuleAssociation(output.ResolverRuleAssociation, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FirewallConfig
 */
const de_FirewallConfig = (output: any, context: __SerdeContext): FirewallConfig => {
  return {
    FirewallFailOpen: __expectString(output.FirewallFailOpen),
    Id: __expectString(output.Id),
    OwnerId: __expectString(output.OwnerId),
    ResourceId: __expectString(output.ResourceId),
  } as any;
};

/**
 * deserializeAws_json1_1FirewallConfigList
 */
const de_FirewallConfigList = (output: any, context: __SerdeContext): FirewallConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FirewallConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FirewallDomainList
 */
const de_FirewallDomainList = (output: any, context: __SerdeContext): FirewallDomainList => {
  return {
    Arn: __expectString(output.Arn),
    CreationTime: __expectString(output.CreationTime),
    CreatorRequestId: __expectString(output.CreatorRequestId),
    DomainCount: __expectInt32(output.DomainCount),
    Id: __expectString(output.Id),
    ManagedOwnerName: __expectString(output.ManagedOwnerName),
    ModificationTime: __expectString(output.ModificationTime),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

/**
 * deserializeAws_json1_1FirewallDomainListMetadata
 */
const de_FirewallDomainListMetadata = (output: any, context: __SerdeContext): FirewallDomainListMetadata => {
  return {
    Arn: __expectString(output.Arn),
    CreatorRequestId: __expectString(output.CreatorRequestId),
    Id: __expectString(output.Id),
    ManagedOwnerName: __expectString(output.ManagedOwnerName),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1FirewallDomainListMetadataList
 */
const de_FirewallDomainListMetadataList = (output: any, context: __SerdeContext): FirewallDomainListMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FirewallDomainListMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FirewallDomains
 */
const de_FirewallDomains = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1FirewallRule
 */
const de_FirewallRule = (output: any, context: __SerdeContext): FirewallRule => {
  return {
    Action: __expectString(output.Action),
    BlockOverrideDnsType: __expectString(output.BlockOverrideDnsType),
    BlockOverrideDomain: __expectString(output.BlockOverrideDomain),
    BlockOverrideTtl: __expectInt32(output.BlockOverrideTtl),
    BlockResponse: __expectString(output.BlockResponse),
    CreationTime: __expectString(output.CreationTime),
    CreatorRequestId: __expectString(output.CreatorRequestId),
    FirewallDomainListId: __expectString(output.FirewallDomainListId),
    FirewallRuleGroupId: __expectString(output.FirewallRuleGroupId),
    ModificationTime: __expectString(output.ModificationTime),
    Name: __expectString(output.Name),
    Priority: __expectInt32(output.Priority),
  } as any;
};

/**
 * deserializeAws_json1_1FirewallRuleGroup
 */
const de_FirewallRuleGroup = (output: any, context: __SerdeContext): FirewallRuleGroup => {
  return {
    Arn: __expectString(output.Arn),
    CreationTime: __expectString(output.CreationTime),
    CreatorRequestId: __expectString(output.CreatorRequestId),
    Id: __expectString(output.Id),
    ModificationTime: __expectString(output.ModificationTime),
    Name: __expectString(output.Name),
    OwnerId: __expectString(output.OwnerId),
    RuleCount: __expectInt32(output.RuleCount),
    ShareStatus: __expectString(output.ShareStatus),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

/**
 * deserializeAws_json1_1FirewallRuleGroupAssociation
 */
const de_FirewallRuleGroupAssociation = (output: any, context: __SerdeContext): FirewallRuleGroupAssociation => {
  return {
    Arn: __expectString(output.Arn),
    CreationTime: __expectString(output.CreationTime),
    CreatorRequestId: __expectString(output.CreatorRequestId),
    FirewallRuleGroupId: __expectString(output.FirewallRuleGroupId),
    Id: __expectString(output.Id),
    ManagedOwnerName: __expectString(output.ManagedOwnerName),
    ModificationTime: __expectString(output.ModificationTime),
    MutationProtection: __expectString(output.MutationProtection),
    Name: __expectString(output.Name),
    Priority: __expectInt32(output.Priority),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_json1_1FirewallRuleGroupAssociations
 */
const de_FirewallRuleGroupAssociations = (output: any, context: __SerdeContext): FirewallRuleGroupAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FirewallRuleGroupAssociation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FirewallRuleGroupMetadata
 */
const de_FirewallRuleGroupMetadata = (output: any, context: __SerdeContext): FirewallRuleGroupMetadata => {
  return {
    Arn: __expectString(output.Arn),
    CreatorRequestId: __expectString(output.CreatorRequestId),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    OwnerId: __expectString(output.OwnerId),
    ShareStatus: __expectString(output.ShareStatus),
  } as any;
};

/**
 * deserializeAws_json1_1FirewallRuleGroupMetadataList
 */
const de_FirewallRuleGroupMetadataList = (output: any, context: __SerdeContext): FirewallRuleGroupMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FirewallRuleGroupMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FirewallRules
 */
const de_FirewallRules = (output: any, context: __SerdeContext): FirewallRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FirewallRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetFirewallConfigResponse
 */
const de_GetFirewallConfigResponse = (output: any, context: __SerdeContext): GetFirewallConfigResponse => {
  return {
    FirewallConfig: output.FirewallConfig != null ? de_FirewallConfig(output.FirewallConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetFirewallDomainListResponse
 */
const de_GetFirewallDomainListResponse = (output: any, context: __SerdeContext): GetFirewallDomainListResponse => {
  return {
    FirewallDomainList:
      output.FirewallDomainList != null ? de_FirewallDomainList(output.FirewallDomainList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetFirewallRuleGroupAssociationResponse
 */
const de_GetFirewallRuleGroupAssociationResponse = (
  output: any,
  context: __SerdeContext
): GetFirewallRuleGroupAssociationResponse => {
  return {
    FirewallRuleGroupAssociation:
      output.FirewallRuleGroupAssociation != null
        ? de_FirewallRuleGroupAssociation(output.FirewallRuleGroupAssociation, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetFirewallRuleGroupPolicyResponse
 */
const de_GetFirewallRuleGroupPolicyResponse = (
  output: any,
  context: __SerdeContext
): GetFirewallRuleGroupPolicyResponse => {
  return {
    FirewallRuleGroupPolicy: __expectString(output.FirewallRuleGroupPolicy),
  } as any;
};

/**
 * deserializeAws_json1_1GetFirewallRuleGroupResponse
 */
const de_GetFirewallRuleGroupResponse = (output: any, context: __SerdeContext): GetFirewallRuleGroupResponse => {
  return {
    FirewallRuleGroup:
      output.FirewallRuleGroup != null ? de_FirewallRuleGroup(output.FirewallRuleGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetResolverConfigResponse
 */
const de_GetResolverConfigResponse = (output: any, context: __SerdeContext): GetResolverConfigResponse => {
  return {
    ResolverConfig: output.ResolverConfig != null ? de_ResolverConfig(output.ResolverConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetResolverDnssecConfigResponse
 */
const de_GetResolverDnssecConfigResponse = (output: any, context: __SerdeContext): GetResolverDnssecConfigResponse => {
  return {
    ResolverDNSSECConfig:
      output.ResolverDNSSECConfig != null ? de_ResolverDnssecConfig(output.ResolverDNSSECConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetResolverEndpointResponse
 */
const de_GetResolverEndpointResponse = (output: any, context: __SerdeContext): GetResolverEndpointResponse => {
  return {
    ResolverEndpoint:
      output.ResolverEndpoint != null ? de_ResolverEndpoint(output.ResolverEndpoint, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetResolverQueryLogConfigAssociationResponse
 */
const de_GetResolverQueryLogConfigAssociationResponse = (
  output: any,
  context: __SerdeContext
): GetResolverQueryLogConfigAssociationResponse => {
  return {
    ResolverQueryLogConfigAssociation:
      output.ResolverQueryLogConfigAssociation != null
        ? de_ResolverQueryLogConfigAssociation(output.ResolverQueryLogConfigAssociation, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetResolverQueryLogConfigPolicyResponse
 */
const de_GetResolverQueryLogConfigPolicyResponse = (
  output: any,
  context: __SerdeContext
): GetResolverQueryLogConfigPolicyResponse => {
  return {
    ResolverQueryLogConfigPolicy: __expectString(output.ResolverQueryLogConfigPolicy),
  } as any;
};

/**
 * deserializeAws_json1_1GetResolverQueryLogConfigResponse
 */
const de_GetResolverQueryLogConfigResponse = (
  output: any,
  context: __SerdeContext
): GetResolverQueryLogConfigResponse => {
  return {
    ResolverQueryLogConfig:
      output.ResolverQueryLogConfig != null
        ? de_ResolverQueryLogConfig(output.ResolverQueryLogConfig, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetResolverRuleAssociationResponse
 */
const de_GetResolverRuleAssociationResponse = (
  output: any,
  context: __SerdeContext
): GetResolverRuleAssociationResponse => {
  return {
    ResolverRuleAssociation:
      output.ResolverRuleAssociation != null
        ? de_ResolverRuleAssociation(output.ResolverRuleAssociation, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetResolverRulePolicyResponse
 */
const de_GetResolverRulePolicyResponse = (output: any, context: __SerdeContext): GetResolverRulePolicyResponse => {
  return {
    ResolverRulePolicy: __expectString(output.ResolverRulePolicy),
  } as any;
};

/**
 * deserializeAws_json1_1GetResolverRuleResponse
 */
const de_GetResolverRuleResponse = (output: any, context: __SerdeContext): GetResolverRuleResponse => {
  return {
    ResolverRule: output.ResolverRule != null ? de_ResolverRule(output.ResolverRule, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ImportFirewallDomainsResponse
 */
const de_ImportFirewallDomainsResponse = (output: any, context: __SerdeContext): ImportFirewallDomainsResponse => {
  return {
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

/**
 * deserializeAws_json1_1InternalServiceErrorException
 */
const de_InternalServiceErrorException = (output: any, context: __SerdeContext): InternalServiceErrorException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidNextTokenException
 */
const de_InvalidNextTokenException = (output: any, context: __SerdeContext): InvalidNextTokenException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParameterException
 */
const de_InvalidParameterException = (output: any, context: __SerdeContext): InvalidParameterException => {
  return {
    FieldName: __expectString(output.FieldName),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidPolicyDocument
 */
const de_InvalidPolicyDocument = (output: any, context: __SerdeContext): InvalidPolicyDocument => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRequestException
 */
const de_InvalidRequestException = (output: any, context: __SerdeContext): InvalidRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTagException
 */
const de_InvalidTagException = (output: any, context: __SerdeContext): InvalidTagException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1IpAddressesResponse
 */
const de_IpAddressesResponse = (output: any, context: __SerdeContext): IpAddressResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IpAddressResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1IpAddressResponse
 */
const de_IpAddressResponse = (output: any, context: __SerdeContext): IpAddressResponse => {
  return {
    CreationTime: __expectString(output.CreationTime),
    Ip: __expectString(output.Ip),
    IpId: __expectString(output.IpId),
    Ipv6: __expectString(output.Ipv6),
    ModificationTime: __expectString(output.ModificationTime),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
    SubnetId: __expectString(output.SubnetId),
  } as any;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_1ListFirewallConfigsResponse
 */
const de_ListFirewallConfigsResponse = (output: any, context: __SerdeContext): ListFirewallConfigsResponse => {
  return {
    FirewallConfigs:
      output.FirewallConfigs != null ? de_FirewallConfigList(output.FirewallConfigs, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListFirewallDomainListsResponse
 */
const de_ListFirewallDomainListsResponse = (output: any, context: __SerdeContext): ListFirewallDomainListsResponse => {
  return {
    FirewallDomainLists:
      output.FirewallDomainLists != null
        ? de_FirewallDomainListMetadataList(output.FirewallDomainLists, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListFirewallDomainsResponse
 */
const de_ListFirewallDomainsResponse = (output: any, context: __SerdeContext): ListFirewallDomainsResponse => {
  return {
    Domains: output.Domains != null ? de_FirewallDomains(output.Domains, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListFirewallRuleGroupAssociationsResponse
 */
const de_ListFirewallRuleGroupAssociationsResponse = (
  output: any,
  context: __SerdeContext
): ListFirewallRuleGroupAssociationsResponse => {
  return {
    FirewallRuleGroupAssociations:
      output.FirewallRuleGroupAssociations != null
        ? de_FirewallRuleGroupAssociations(output.FirewallRuleGroupAssociations, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListFirewallRuleGroupsResponse
 */
const de_ListFirewallRuleGroupsResponse = (output: any, context: __SerdeContext): ListFirewallRuleGroupsResponse => {
  return {
    FirewallRuleGroups:
      output.FirewallRuleGroups != null
        ? de_FirewallRuleGroupMetadataList(output.FirewallRuleGroups, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListFirewallRulesResponse
 */
const de_ListFirewallRulesResponse = (output: any, context: __SerdeContext): ListFirewallRulesResponse => {
  return {
    FirewallRules: output.FirewallRules != null ? de_FirewallRules(output.FirewallRules, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListResolverConfigsResponse
 */
const de_ListResolverConfigsResponse = (output: any, context: __SerdeContext): ListResolverConfigsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ResolverConfigs:
      output.ResolverConfigs != null ? de_ResolverConfigList(output.ResolverConfigs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListResolverDnssecConfigsResponse
 */
const de_ListResolverDnssecConfigsResponse = (
  output: any,
  context: __SerdeContext
): ListResolverDnssecConfigsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ResolverDnssecConfigs:
      output.ResolverDnssecConfigs != null
        ? de_ResolverDnssecConfigList(output.ResolverDnssecConfigs, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListResolverEndpointIpAddressesResponse
 */
const de_ListResolverEndpointIpAddressesResponse = (
  output: any,
  context: __SerdeContext
): ListResolverEndpointIpAddressesResponse => {
  return {
    IpAddresses: output.IpAddresses != null ? de_IpAddressesResponse(output.IpAddresses, context) : undefined,
    MaxResults: __expectInt32(output.MaxResults),
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListResolverEndpointsResponse
 */
const de_ListResolverEndpointsResponse = (output: any, context: __SerdeContext): ListResolverEndpointsResponse => {
  return {
    MaxResults: __expectInt32(output.MaxResults),
    NextToken: __expectString(output.NextToken),
    ResolverEndpoints:
      output.ResolverEndpoints != null ? de_ResolverEndpoints(output.ResolverEndpoints, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListResolverQueryLogConfigAssociationsResponse
 */
const de_ListResolverQueryLogConfigAssociationsResponse = (
  output: any,
  context: __SerdeContext
): ListResolverQueryLogConfigAssociationsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ResolverQueryLogConfigAssociations:
      output.ResolverQueryLogConfigAssociations != null
        ? de_ResolverQueryLogConfigAssociationList(output.ResolverQueryLogConfigAssociations, context)
        : undefined,
    TotalCount: __expectInt32(output.TotalCount),
    TotalFilteredCount: __expectInt32(output.TotalFilteredCount),
  } as any;
};

/**
 * deserializeAws_json1_1ListResolverQueryLogConfigsResponse
 */
const de_ListResolverQueryLogConfigsResponse = (
  output: any,
  context: __SerdeContext
): ListResolverQueryLogConfigsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ResolverQueryLogConfigs:
      output.ResolverQueryLogConfigs != null
        ? de_ResolverQueryLogConfigList(output.ResolverQueryLogConfigs, context)
        : undefined,
    TotalCount: __expectInt32(output.TotalCount),
    TotalFilteredCount: __expectInt32(output.TotalFilteredCount),
  } as any;
};

/**
 * deserializeAws_json1_1ListResolverRuleAssociationsResponse
 */
const de_ListResolverRuleAssociationsResponse = (
  output: any,
  context: __SerdeContext
): ListResolverRuleAssociationsResponse => {
  return {
    MaxResults: __expectInt32(output.MaxResults),
    NextToken: __expectString(output.NextToken),
    ResolverRuleAssociations:
      output.ResolverRuleAssociations != null
        ? de_ResolverRuleAssociations(output.ResolverRuleAssociations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListResolverRulesResponse
 */
const de_ListResolverRulesResponse = (output: any, context: __SerdeContext): ListResolverRulesResponse => {
  return {
    MaxResults: __expectInt32(output.MaxResults),
    NextToken: __expectString(output.NextToken),
    ResolverRules: output.ResolverRules != null ? de_ResolverRules(output.ResolverRules, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PutFirewallRuleGroupPolicyResponse
 */
const de_PutFirewallRuleGroupPolicyResponse = (
  output: any,
  context: __SerdeContext
): PutFirewallRuleGroupPolicyResponse => {
  return {
    ReturnValue: __expectBoolean(output.ReturnValue),
  } as any;
};

/**
 * deserializeAws_json1_1PutResolverQueryLogConfigPolicyResponse
 */
const de_PutResolverQueryLogConfigPolicyResponse = (
  output: any,
  context: __SerdeContext
): PutResolverQueryLogConfigPolicyResponse => {
  return {
    ReturnValue: __expectBoolean(output.ReturnValue),
  } as any;
};

/**
 * deserializeAws_json1_1PutResolverRulePolicyResponse
 */
const de_PutResolverRulePolicyResponse = (output: any, context: __SerdeContext): PutResolverRulePolicyResponse => {
  return {
    ReturnValue: __expectBoolean(output.ReturnValue),
  } as any;
};

/**
 * deserializeAws_json1_1ResolverConfig
 */
const de_ResolverConfig = (output: any, context: __SerdeContext): ResolverConfig => {
  return {
    AutodefinedReverse: __expectString(output.AutodefinedReverse),
    Id: __expectString(output.Id),
    OwnerId: __expectString(output.OwnerId),
    ResourceId: __expectString(output.ResourceId),
  } as any;
};

/**
 * deserializeAws_json1_1ResolverConfigList
 */
const de_ResolverConfigList = (output: any, context: __SerdeContext): ResolverConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResolverConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResolverDnssecConfig
 */
const de_ResolverDnssecConfig = (output: any, context: __SerdeContext): ResolverDnssecConfig => {
  return {
    Id: __expectString(output.Id),
    OwnerId: __expectString(output.OwnerId),
    ResourceId: __expectString(output.ResourceId),
    ValidationStatus: __expectString(output.ValidationStatus),
  } as any;
};

/**
 * deserializeAws_json1_1ResolverDnssecConfigList
 */
const de_ResolverDnssecConfigList = (output: any, context: __SerdeContext): ResolverDnssecConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResolverDnssecConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResolverEndpoint
 */
const de_ResolverEndpoint = (output: any, context: __SerdeContext): ResolverEndpoint => {
  return {
    Arn: __expectString(output.Arn),
    CreationTime: __expectString(output.CreationTime),
    CreatorRequestId: __expectString(output.CreatorRequestId),
    Direction: __expectString(output.Direction),
    HostVPCId: __expectString(output.HostVPCId),
    Id: __expectString(output.Id),
    IpAddressCount: __expectInt32(output.IpAddressCount),
    ModificationTime: __expectString(output.ModificationTime),
    Name: __expectString(output.Name),
    ResolverEndpointType: __expectString(output.ResolverEndpointType),
    SecurityGroupIds:
      output.SecurityGroupIds != null ? de_SecurityGroupIds(output.SecurityGroupIds, context) : undefined,
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

/**
 * deserializeAws_json1_1ResolverEndpoints
 */
const de_ResolverEndpoints = (output: any, context: __SerdeContext): ResolverEndpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResolverEndpoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResolverQueryLogConfig
 */
const de_ResolverQueryLogConfig = (output: any, context: __SerdeContext): ResolverQueryLogConfig => {
  return {
    Arn: __expectString(output.Arn),
    AssociationCount: __expectInt32(output.AssociationCount),
    CreationTime: __expectString(output.CreationTime),
    CreatorRequestId: __expectString(output.CreatorRequestId),
    DestinationArn: __expectString(output.DestinationArn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    OwnerId: __expectString(output.OwnerId),
    ShareStatus: __expectString(output.ShareStatus),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1ResolverQueryLogConfigAssociation
 */
const de_ResolverQueryLogConfigAssociation = (
  output: any,
  context: __SerdeContext
): ResolverQueryLogConfigAssociation => {
  return {
    CreationTime: __expectString(output.CreationTime),
    Error: __expectString(output.Error),
    ErrorMessage: __expectString(output.ErrorMessage),
    Id: __expectString(output.Id),
    ResolverQueryLogConfigId: __expectString(output.ResolverQueryLogConfigId),
    ResourceId: __expectString(output.ResourceId),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1ResolverQueryLogConfigAssociationList
 */
const de_ResolverQueryLogConfigAssociationList = (
  output: any,
  context: __SerdeContext
): ResolverQueryLogConfigAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResolverQueryLogConfigAssociation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResolverQueryLogConfigList
 */
const de_ResolverQueryLogConfigList = (output: any, context: __SerdeContext): ResolverQueryLogConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResolverQueryLogConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResolverRule
 */
const de_ResolverRule = (output: any, context: __SerdeContext): ResolverRule => {
  return {
    Arn: __expectString(output.Arn),
    CreationTime: __expectString(output.CreationTime),
    CreatorRequestId: __expectString(output.CreatorRequestId),
    DomainName: __expectString(output.DomainName),
    Id: __expectString(output.Id),
    ModificationTime: __expectString(output.ModificationTime),
    Name: __expectString(output.Name),
    OwnerId: __expectString(output.OwnerId),
    ResolverEndpointId: __expectString(output.ResolverEndpointId),
    RuleType: __expectString(output.RuleType),
    ShareStatus: __expectString(output.ShareStatus),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
    TargetIps: output.TargetIps != null ? de_TargetList(output.TargetIps, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResolverRuleAssociation
 */
const de_ResolverRuleAssociation = (output: any, context: __SerdeContext): ResolverRuleAssociation => {
  return {
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    ResolverRuleId: __expectString(output.ResolverRuleId),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
    VPCId: __expectString(output.VPCId),
  } as any;
};

/**
 * deserializeAws_json1_1ResolverRuleAssociations
 */
const de_ResolverRuleAssociations = (output: any, context: __SerdeContext): ResolverRuleAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResolverRuleAssociation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResolverRules
 */
const de_ResolverRules = (output: any, context: __SerdeContext): ResolverRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResolverRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceExistsException
 */
const de_ResourceExistsException = (output: any, context: __SerdeContext): ResourceExistsException => {
  return {
    Message: __expectString(output.Message),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceInUseException
 */
const de_ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    Message: __expectString(output.Message),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceUnavailableException
 */
const de_ResourceUnavailableException = (output: any, context: __SerdeContext): ResourceUnavailableException => {
  return {
    Message: __expectString(output.Message),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_1SecurityGroupIds
 */
const de_SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1TargetAddress
 */
const de_TargetAddress = (output: any, context: __SerdeContext): TargetAddress => {
  return {
    Ip: __expectString(output.Ip),
    Ipv6: __expectString(output.Ipv6),
    Port: __expectInt32(output.Port),
  } as any;
};

/**
 * deserializeAws_json1_1TargetList
 */
const de_TargetList = (output: any, context: __SerdeContext): TargetAddress[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TargetAddress(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ThrottlingException
 */
const de_ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UnknownResourceException
 */
const de_UnknownResourceException = (output: any, context: __SerdeContext): UnknownResourceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateFirewallConfigResponse
 */
const de_UpdateFirewallConfigResponse = (output: any, context: __SerdeContext): UpdateFirewallConfigResponse => {
  return {
    FirewallConfig: output.FirewallConfig != null ? de_FirewallConfig(output.FirewallConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateFirewallDomainsResponse
 */
const de_UpdateFirewallDomainsResponse = (output: any, context: __SerdeContext): UpdateFirewallDomainsResponse => {
  return {
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateFirewallRuleGroupAssociationResponse
 */
const de_UpdateFirewallRuleGroupAssociationResponse = (
  output: any,
  context: __SerdeContext
): UpdateFirewallRuleGroupAssociationResponse => {
  return {
    FirewallRuleGroupAssociation:
      output.FirewallRuleGroupAssociation != null
        ? de_FirewallRuleGroupAssociation(output.FirewallRuleGroupAssociation, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateFirewallRuleResponse
 */
const de_UpdateFirewallRuleResponse = (output: any, context: __SerdeContext): UpdateFirewallRuleResponse => {
  return {
    FirewallRule: output.FirewallRule != null ? de_FirewallRule(output.FirewallRule, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateResolverConfigResponse
 */
const de_UpdateResolverConfigResponse = (output: any, context: __SerdeContext): UpdateResolverConfigResponse => {
  return {
    ResolverConfig: output.ResolverConfig != null ? de_ResolverConfig(output.ResolverConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateResolverDnssecConfigResponse
 */
const de_UpdateResolverDnssecConfigResponse = (
  output: any,
  context: __SerdeContext
): UpdateResolverDnssecConfigResponse => {
  return {
    ResolverDNSSECConfig:
      output.ResolverDNSSECConfig != null ? de_ResolverDnssecConfig(output.ResolverDNSSECConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateResolverEndpointResponse
 */
const de_UpdateResolverEndpointResponse = (output: any, context: __SerdeContext): UpdateResolverEndpointResponse => {
  return {
    ResolverEndpoint:
      output.ResolverEndpoint != null ? de_ResolverEndpoint(output.ResolverEndpoint, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateResolverRuleResponse
 */
const de_UpdateResolverRuleResponse = (output: any, context: __SerdeContext): UpdateResolverRuleResponse => {
  return {
    ResolverRule: output.ResolverRule != null ? de_ResolverRule(output.ResolverRule, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
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

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `Route53Resolver.${operation}`,
  };
}

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
