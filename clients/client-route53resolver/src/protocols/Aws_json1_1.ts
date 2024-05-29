// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
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
  CreateOutpostResolverCommandInput,
  CreateOutpostResolverCommandOutput,
} from "../commands/CreateOutpostResolverCommand";
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
  DeleteOutpostResolverCommandInput,
  DeleteOutpostResolverCommandOutput,
} from "../commands/DeleteOutpostResolverCommand";
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
import { GetOutpostResolverCommandInput, GetOutpostResolverCommandOutput } from "../commands/GetOutpostResolverCommand";
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
  ListOutpostResolversCommandInput,
  ListOutpostResolversCommandOutput,
} from "../commands/ListOutpostResolversCommand";
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
  UpdateOutpostResolverCommandInput,
  UpdateOutpostResolverCommandOutput,
} from "../commands/UpdateOutpostResolverCommand";
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
  AssociateResolverEndpointIpAddressRequest,
  AssociateResolverQueryLogConfigRequest,
  AssociateResolverRuleRequest,
  ConflictException,
  CreateFirewallDomainListRequest,
  CreateFirewallRuleGroupRequest,
  CreateFirewallRuleRequest,
  CreateOutpostResolverRequest,
  CreateResolverEndpointRequest,
  CreateResolverQueryLogConfigRequest,
  CreateResolverRuleRequest,
  DeleteFirewallDomainListRequest,
  DeleteFirewallRuleGroupRequest,
  DeleteFirewallRuleRequest,
  DeleteOutpostResolverRequest,
  DeleteResolverEndpointRequest,
  DeleteResolverQueryLogConfigRequest,
  DeleteResolverRuleRequest,
  DisassociateFirewallRuleGroupRequest,
  DisassociateResolverEndpointIpAddressRequest,
  DisassociateResolverQueryLogConfigRequest,
  DisassociateResolverRuleRequest,
  Filter,
  GetFirewallConfigRequest,
  GetFirewallDomainListRequest,
  GetFirewallRuleGroupAssociationRequest,
  GetFirewallRuleGroupPolicyRequest,
  GetFirewallRuleGroupRequest,
  GetOutpostResolverRequest,
  GetResolverConfigRequest,
  GetResolverDnssecConfigRequest,
  GetResolverEndpointRequest,
  GetResolverQueryLogConfigAssociationRequest,
  GetResolverQueryLogConfigPolicyRequest,
  GetResolverQueryLogConfigRequest,
  GetResolverRuleAssociationRequest,
  GetResolverRulePolicyRequest,
  GetResolverRuleRequest,
  ImportFirewallDomainsRequest,
  InternalServiceErrorException,
  InvalidNextTokenException,
  InvalidParameterException,
  InvalidPolicyDocument,
  InvalidRequestException,
  InvalidTagException,
  IpAddressRequest,
  IpAddressUpdate,
  LimitExceededException,
  ListFirewallConfigsRequest,
  ListFirewallDomainListsRequest,
  ListFirewallDomainsRequest,
  ListFirewallRuleGroupAssociationsRequest,
  ListFirewallRuleGroupsRequest,
  ListFirewallRulesRequest,
  ListOutpostResolversRequest,
  ListResolverConfigsRequest,
  ListResolverDnssecConfigsRequest,
  ListResolverEndpointIpAddressesRequest,
  ListResolverEndpointsRequest,
  ListResolverQueryLogConfigAssociationsRequest,
  ListResolverQueryLogConfigsRequest,
  ListResolverRuleAssociationsRequest,
  ListResolverRulesRequest,
  ListTagsForResourceRequest,
  Protocol,
  PutFirewallRuleGroupPolicyRequest,
  PutResolverQueryLogConfigPolicyRequest,
  PutResolverRulePolicyRequest,
  ResolverRuleConfig,
  ResourceExistsException,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceUnavailableException,
  ServiceQuotaExceededException,
  Tag,
  TagResourceRequest,
  TargetAddress,
  ThrottlingException,
  UnknownResourceException,
  UntagResourceRequest,
  UpdateFirewallConfigRequest,
  UpdateFirewallDomainsRequest,
  UpdateFirewallRuleGroupAssociationRequest,
  UpdateFirewallRuleRequest,
  UpdateIpAddress,
  UpdateOutpostResolverRequest,
  UpdateResolverConfigRequest,
  UpdateResolverDnssecConfigRequest,
  UpdateResolverEndpointRequest,
  UpdateResolverRuleRequest,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_1CreateOutpostResolverCommand
 */
export const se_CreateOutpostResolverCommand = async (
  input: CreateOutpostResolverCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateOutpostResolver");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteOutpostResolverCommand
 */
export const se_DeleteOutpostResolverCommand = async (
  input: DeleteOutpostResolverCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteOutpostResolver");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetOutpostResolverCommand
 */
export const se_GetOutpostResolverCommand = async (
  input: GetOutpostResolverCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetOutpostResolver");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListOutpostResolversCommand
 */
export const se_ListOutpostResolversCommand = async (
  input: ListOutpostResolversCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListOutpostResolvers");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateOutpostResolverCommand
 */
export const se_UpdateOutpostResolverCommand = async (
  input: UpdateOutpostResolverCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateOutpostResolver");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AssociateFirewallRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AssociateResolverEndpointIpAddressCommand
 */
export const de_AssociateResolverEndpointIpAddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResolverEndpointIpAddressCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AssociateResolverEndpointIpAddressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AssociateResolverQueryLogConfigCommand
 */
export const de_AssociateResolverQueryLogConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResolverQueryLogConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AssociateResolverQueryLogConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AssociateResolverRuleCommand
 */
export const de_AssociateResolverRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResolverRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AssociateResolverRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateFirewallDomainListCommand
 */
export const de_CreateFirewallDomainListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFirewallDomainListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateFirewallDomainListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateFirewallRuleCommand
 */
export const de_CreateFirewallRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFirewallRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateFirewallRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateFirewallRuleGroupCommand
 */
export const de_CreateFirewallRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFirewallRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateFirewallRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateOutpostResolverCommand
 */
export const de_CreateOutpostResolverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOutpostResolverCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateOutpostResolverCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateResolverEndpointCommand
 */
export const de_CreateResolverEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResolverEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateResolverEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateResolverQueryLogConfigCommand
 */
export const de_CreateResolverQueryLogConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResolverQueryLogConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateResolverQueryLogConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateResolverRuleCommand
 */
export const de_CreateResolverRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResolverRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateResolverRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteFirewallDomainListCommand
 */
export const de_DeleteFirewallDomainListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFirewallDomainListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteFirewallDomainListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteFirewallRuleCommand
 */
export const de_DeleteFirewallRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFirewallRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteFirewallRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteFirewallRuleGroupCommand
 */
export const de_DeleteFirewallRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFirewallRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteFirewallRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteOutpostResolverCommand
 */
export const de_DeleteOutpostResolverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOutpostResolverCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteOutpostResolverCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteResolverEndpointCommand
 */
export const de_DeleteResolverEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResolverEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteResolverEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteResolverQueryLogConfigCommand
 */
export const de_DeleteResolverQueryLogConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResolverQueryLogConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteResolverQueryLogConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteResolverRuleCommand
 */
export const de_DeleteResolverRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResolverRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteResolverRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisassociateFirewallRuleGroupCommand
 */
export const de_DisassociateFirewallRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFirewallRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisassociateFirewallRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisassociateResolverEndpointIpAddressCommand
 */
export const de_DisassociateResolverEndpointIpAddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResolverEndpointIpAddressCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisassociateResolverEndpointIpAddressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisassociateResolverQueryLogConfigCommand
 */
export const de_DisassociateResolverQueryLogConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResolverQueryLogConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisassociateResolverQueryLogConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisassociateResolverRuleCommand
 */
export const de_DisassociateResolverRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResolverRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisassociateResolverRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetFirewallConfigCommand
 */
export const de_GetFirewallConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFirewallConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetFirewallConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetFirewallDomainListCommand
 */
export const de_GetFirewallDomainListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFirewallDomainListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetFirewallDomainListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetFirewallRuleGroupCommand
 */
export const de_GetFirewallRuleGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFirewallRuleGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetFirewallRuleGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetFirewallRuleGroupAssociationCommand
 */
export const de_GetFirewallRuleGroupAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFirewallRuleGroupAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetFirewallRuleGroupAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetFirewallRuleGroupPolicyCommand
 */
export const de_GetFirewallRuleGroupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFirewallRuleGroupPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetFirewallRuleGroupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetOutpostResolverCommand
 */
export const de_GetOutpostResolverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutpostResolverCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetOutpostResolverCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetResolverConfigCommand
 */
export const de_GetResolverConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetResolverConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetResolverDnssecConfigCommand
 */
export const de_GetResolverDnssecConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverDnssecConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetResolverDnssecConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetResolverEndpointCommand
 */
export const de_GetResolverEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetResolverEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetResolverQueryLogConfigCommand
 */
export const de_GetResolverQueryLogConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverQueryLogConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetResolverQueryLogConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetResolverQueryLogConfigAssociationCommand
 */
export const de_GetResolverQueryLogConfigAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverQueryLogConfigAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetResolverQueryLogConfigAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetResolverQueryLogConfigPolicyCommand
 */
export const de_GetResolverQueryLogConfigPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverQueryLogConfigPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetResolverQueryLogConfigPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetResolverRuleCommand
 */
export const de_GetResolverRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetResolverRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetResolverRuleAssociationCommand
 */
export const de_GetResolverRuleAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverRuleAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetResolverRuleAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetResolverRulePolicyCommand
 */
export const de_GetResolverRulePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverRulePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetResolverRulePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ImportFirewallDomainsCommand
 */
export const de_ImportFirewallDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportFirewallDomainsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ImportFirewallDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListFirewallConfigsCommand
 */
export const de_ListFirewallConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFirewallConfigsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListFirewallConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListFirewallDomainListsCommand
 */
export const de_ListFirewallDomainListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFirewallDomainListsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListFirewallDomainListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListFirewallDomainsCommand
 */
export const de_ListFirewallDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFirewallDomainsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListFirewallDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListFirewallRuleGroupAssociationsCommand
 */
export const de_ListFirewallRuleGroupAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFirewallRuleGroupAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListFirewallRuleGroupAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListFirewallRuleGroupsCommand
 */
export const de_ListFirewallRuleGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFirewallRuleGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListFirewallRuleGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListFirewallRulesCommand
 */
export const de_ListFirewallRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFirewallRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListFirewallRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListOutpostResolversCommand
 */
export const de_ListOutpostResolversCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOutpostResolversCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListOutpostResolversCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListResolverConfigsCommand
 */
export const de_ListResolverConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverConfigsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListResolverConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListResolverDnssecConfigsCommand
 */
export const de_ListResolverDnssecConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverDnssecConfigsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListResolverDnssecConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListResolverEndpointIpAddressesCommand
 */
export const de_ListResolverEndpointIpAddressesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverEndpointIpAddressesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListResolverEndpointIpAddressesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListResolverEndpointsCommand
 */
export const de_ListResolverEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListResolverEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListResolverQueryLogConfigAssociationsCommand
 */
export const de_ListResolverQueryLogConfigAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverQueryLogConfigAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListResolverQueryLogConfigAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListResolverQueryLogConfigsCommand
 */
export const de_ListResolverQueryLogConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverQueryLogConfigsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListResolverQueryLogConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListResolverRuleAssociationsCommand
 */
export const de_ListResolverRuleAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverRuleAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListResolverRuleAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListResolverRulesCommand
 */
export const de_ListResolverRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListResolverRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutFirewallRuleGroupPolicyCommand
 */
export const de_PutFirewallRuleGroupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFirewallRuleGroupPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutFirewallRuleGroupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutResolverQueryLogConfigPolicyCommand
 */
export const de_PutResolverQueryLogConfigPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResolverQueryLogConfigPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutResolverQueryLogConfigPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutResolverRulePolicyCommand
 */
export const de_PutResolverRulePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResolverRulePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutResolverRulePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateFirewallConfigCommand
 */
export const de_UpdateFirewallConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateFirewallConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateFirewallDomainsCommand
 */
export const de_UpdateFirewallDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallDomainsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateFirewallDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateFirewallRuleCommand
 */
export const de_UpdateFirewallRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateFirewallRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateFirewallRuleGroupAssociationCommand
 */
export const de_UpdateFirewallRuleGroupAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFirewallRuleGroupAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateFirewallRuleGroupAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateOutpostResolverCommand
 */
export const de_UpdateOutpostResolverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOutpostResolverCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateOutpostResolverCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateResolverConfigCommand
 */
export const de_UpdateResolverConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateResolverConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateResolverDnssecConfigCommand
 */
export const de_UpdateResolverDnssecConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverDnssecConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateResolverDnssecConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateResolverEndpointCommand
 */
export const de_UpdateResolverEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateResolverEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateResolverRuleCommand
 */
export const de_UpdateResolverRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateResolverRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_json1_1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.route53resolver#ResourceExistsException":
      throw await de_ResourceExistsExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.route53resolver#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.route53resolver#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.route53resolver#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.route53resolver#UnknownResourceException":
      throw await de_UnknownResourceExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.route53resolver#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidPolicyDocument":
    case "com.amazonaws.route53resolver#InvalidPolicyDocument":
      throw await de_InvalidPolicyDocumentRes(parsedOutput, context);
    case "InvalidTagException":
    case "com.amazonaws.route53resolver#InvalidTagException":
      throw await de_InvalidTagExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new ResourceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ServiceQuotaExceededException({
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  return take(input, {
    CreatorRequestId: [true, (_) => _ ?? generateIdempotencyToken()],
    FirewallRuleGroupId: [],
    MutationProtection: [],
    Name: [],
    Priority: [],
    Tags: _json,
    VpcId: [],
  });
};

// se_AssociateResolverEndpointIpAddressRequest omitted.

// se_AssociateResolverQueryLogConfigRequest omitted.

// se_AssociateResolverRuleRequest omitted.

/**
 * serializeAws_json1_1CreateFirewallDomainListRequest
 */
const se_CreateFirewallDomainListRequest = (input: CreateFirewallDomainListRequest, context: __SerdeContext): any => {
  return take(input, {
    CreatorRequestId: [true, (_) => _ ?? generateIdempotencyToken()],
    Name: [],
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1CreateFirewallRuleGroupRequest
 */
const se_CreateFirewallRuleGroupRequest = (input: CreateFirewallRuleGroupRequest, context: __SerdeContext): any => {
  return take(input, {
    CreatorRequestId: [true, (_) => _ ?? generateIdempotencyToken()],
    Name: [],
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1CreateFirewallRuleRequest
 */
const se_CreateFirewallRuleRequest = (input: CreateFirewallRuleRequest, context: __SerdeContext): any => {
  return take(input, {
    Action: [],
    BlockOverrideDnsType: [],
    BlockOverrideDomain: [],
    BlockOverrideTtl: [],
    BlockResponse: [],
    CreatorRequestId: [true, (_) => _ ?? generateIdempotencyToken()],
    FirewallDomainListId: [],
    FirewallDomainRedirectionAction: [],
    FirewallRuleGroupId: [],
    Name: [],
    Priority: [],
    Qtype: [],
  });
};

// se_CreateOutpostResolverRequest omitted.

// se_CreateResolverEndpointRequest omitted.

/**
 * serializeAws_json1_1CreateResolverQueryLogConfigRequest
 */
const se_CreateResolverQueryLogConfigRequest = (
  input: CreateResolverQueryLogConfigRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CreatorRequestId: [true, (_) => _ ?? generateIdempotencyToken()],
    DestinationArn: [],
    Name: [],
    Tags: _json,
  });
};

// se_CreateResolverRuleRequest omitted.

// se_DeleteFirewallDomainListRequest omitted.

// se_DeleteFirewallRuleGroupRequest omitted.

// se_DeleteFirewallRuleRequest omitted.

// se_DeleteOutpostResolverRequest omitted.

// se_DeleteResolverEndpointRequest omitted.

// se_DeleteResolverQueryLogConfigRequest omitted.

// se_DeleteResolverRuleRequest omitted.

// se_DisassociateFirewallRuleGroupRequest omitted.

// se_DisassociateResolverEndpointIpAddressRequest omitted.

// se_DisassociateResolverQueryLogConfigRequest omitted.

// se_DisassociateResolverRuleRequest omitted.

// se_Filter omitted.

// se_Filters omitted.

// se_FilterValues omitted.

// se_FirewallDomains omitted.

// se_GetFirewallConfigRequest omitted.

// se_GetFirewallDomainListRequest omitted.

// se_GetFirewallRuleGroupAssociationRequest omitted.

// se_GetFirewallRuleGroupPolicyRequest omitted.

// se_GetFirewallRuleGroupRequest omitted.

// se_GetOutpostResolverRequest omitted.

// se_GetResolverConfigRequest omitted.

// se_GetResolverDnssecConfigRequest omitted.

// se_GetResolverEndpointRequest omitted.

// se_GetResolverQueryLogConfigAssociationRequest omitted.

// se_GetResolverQueryLogConfigPolicyRequest omitted.

// se_GetResolverQueryLogConfigRequest omitted.

// se_GetResolverRuleAssociationRequest omitted.

// se_GetResolverRulePolicyRequest omitted.

// se_GetResolverRuleRequest omitted.

// se_ImportFirewallDomainsRequest omitted.

// se_IpAddressesRequest omitted.

// se_IpAddressRequest omitted.

// se_IpAddressUpdate omitted.

// se_ListFirewallConfigsRequest omitted.

// se_ListFirewallDomainListsRequest omitted.

// se_ListFirewallDomainsRequest omitted.

// se_ListFirewallRuleGroupAssociationsRequest omitted.

// se_ListFirewallRuleGroupsRequest omitted.

// se_ListFirewallRulesRequest omitted.

// se_ListOutpostResolversRequest omitted.

// se_ListResolverConfigsRequest omitted.

// se_ListResolverDnssecConfigsRequest omitted.

// se_ListResolverEndpointIpAddressesRequest omitted.

// se_ListResolverEndpointsRequest omitted.

// se_ListResolverQueryLogConfigAssociationsRequest omitted.

// se_ListResolverQueryLogConfigsRequest omitted.

// se_ListResolverRuleAssociationsRequest omitted.

// se_ListResolverRulesRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ProtocolList omitted.

// se_PutFirewallRuleGroupPolicyRequest omitted.

// se_PutResolverQueryLogConfigPolicyRequest omitted.

// se_PutResolverRulePolicyRequest omitted.

// se_ResolverRuleConfig omitted.

// se_SecurityGroupIds omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_TargetAddress omitted.

// se_TargetList omitted.

// se_UntagResourceRequest omitted.

// se_UpdateFirewallConfigRequest omitted.

// se_UpdateFirewallDomainsRequest omitted.

// se_UpdateFirewallRuleGroupAssociationRequest omitted.

// se_UpdateFirewallRuleRequest omitted.

// se_UpdateIpAddress omitted.

// se_UpdateIpAddresses omitted.

// se_UpdateOutpostResolverRequest omitted.

// se_UpdateResolverConfigRequest omitted.

// se_UpdateResolverDnssecConfigRequest omitted.

// se_UpdateResolverEndpointRequest omitted.

// se_UpdateResolverRuleRequest omitted.

// de_AccessDeniedException omitted.

// de_AssociateFirewallRuleGroupResponse omitted.

// de_AssociateResolverEndpointIpAddressResponse omitted.

// de_AssociateResolverQueryLogConfigResponse omitted.

// de_AssociateResolverRuleResponse omitted.

// de_ConflictException omitted.

// de_CreateFirewallDomainListResponse omitted.

// de_CreateFirewallRuleGroupResponse omitted.

// de_CreateFirewallRuleResponse omitted.

// de_CreateOutpostResolverResponse omitted.

// de_CreateResolverEndpointResponse omitted.

// de_CreateResolverQueryLogConfigResponse omitted.

// de_CreateResolverRuleResponse omitted.

// de_DeleteFirewallDomainListResponse omitted.

// de_DeleteFirewallRuleGroupResponse omitted.

// de_DeleteFirewallRuleResponse omitted.

// de_DeleteOutpostResolverResponse omitted.

// de_DeleteResolverEndpointResponse omitted.

// de_DeleteResolverQueryLogConfigResponse omitted.

// de_DeleteResolverRuleResponse omitted.

// de_DisassociateFirewallRuleGroupResponse omitted.

// de_DisassociateResolverEndpointIpAddressResponse omitted.

// de_DisassociateResolverQueryLogConfigResponse omitted.

// de_DisassociateResolverRuleResponse omitted.

// de_FirewallConfig omitted.

// de_FirewallConfigList omitted.

// de_FirewallDomainList omitted.

// de_FirewallDomainListMetadata omitted.

// de_FirewallDomainListMetadataList omitted.

// de_FirewallDomains omitted.

// de_FirewallRule omitted.

// de_FirewallRuleGroup omitted.

// de_FirewallRuleGroupAssociation omitted.

// de_FirewallRuleGroupAssociations omitted.

// de_FirewallRuleGroupMetadata omitted.

// de_FirewallRuleGroupMetadataList omitted.

// de_FirewallRules omitted.

// de_GetFirewallConfigResponse omitted.

// de_GetFirewallDomainListResponse omitted.

// de_GetFirewallRuleGroupAssociationResponse omitted.

// de_GetFirewallRuleGroupPolicyResponse omitted.

// de_GetFirewallRuleGroupResponse omitted.

// de_GetOutpostResolverResponse omitted.

// de_GetResolverConfigResponse omitted.

// de_GetResolverDnssecConfigResponse omitted.

// de_GetResolverEndpointResponse omitted.

// de_GetResolverQueryLogConfigAssociationResponse omitted.

// de_GetResolverQueryLogConfigPolicyResponse omitted.

// de_GetResolverQueryLogConfigResponse omitted.

// de_GetResolverRuleAssociationResponse omitted.

// de_GetResolverRulePolicyResponse omitted.

// de_GetResolverRuleResponse omitted.

// de_ImportFirewallDomainsResponse omitted.

// de_InternalServiceErrorException omitted.

// de_InvalidNextTokenException omitted.

// de_InvalidParameterException omitted.

// de_InvalidPolicyDocument omitted.

// de_InvalidRequestException omitted.

// de_InvalidTagException omitted.

// de_IpAddressesResponse omitted.

// de_IpAddressResponse omitted.

// de_LimitExceededException omitted.

// de_ListFirewallConfigsResponse omitted.

// de_ListFirewallDomainListsResponse omitted.

// de_ListFirewallDomainsResponse omitted.

// de_ListFirewallRuleGroupAssociationsResponse omitted.

// de_ListFirewallRuleGroupsResponse omitted.

// de_ListFirewallRulesResponse omitted.

// de_ListOutpostResolversResponse omitted.

// de_ListResolverConfigsResponse omitted.

// de_ListResolverDnssecConfigsResponse omitted.

// de_ListResolverEndpointIpAddressesResponse omitted.

// de_ListResolverEndpointsResponse omitted.

// de_ListResolverQueryLogConfigAssociationsResponse omitted.

// de_ListResolverQueryLogConfigsResponse omitted.

// de_ListResolverRuleAssociationsResponse omitted.

// de_ListResolverRulesResponse omitted.

// de_ListTagsForResourceResponse omitted.

// de_OutpostResolver omitted.

// de_OutpostResolverList omitted.

// de_ProtocolList omitted.

// de_PutFirewallRuleGroupPolicyResponse omitted.

// de_PutResolverQueryLogConfigPolicyResponse omitted.

// de_PutResolverRulePolicyResponse omitted.

// de_ResolverConfig omitted.

// de_ResolverConfigList omitted.

// de_ResolverDnssecConfig omitted.

// de_ResolverDnssecConfigList omitted.

// de_ResolverEndpoint omitted.

// de_ResolverEndpoints omitted.

// de_ResolverQueryLogConfig omitted.

// de_ResolverQueryLogConfigAssociation omitted.

// de_ResolverQueryLogConfigAssociationList omitted.

// de_ResolverQueryLogConfigList omitted.

// de_ResolverRule omitted.

// de_ResolverRuleAssociation omitted.

// de_ResolverRuleAssociations omitted.

// de_ResolverRules omitted.

// de_ResourceExistsException omitted.

// de_ResourceInUseException omitted.

// de_ResourceNotFoundException omitted.

// de_ResourceUnavailableException omitted.

// de_SecurityGroupIds omitted.

// de_ServiceQuotaExceededException omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_TargetAddress omitted.

// de_TargetList omitted.

// de_ThrottlingException omitted.

// de_UnknownResourceException omitted.

// de_UntagResourceResponse omitted.

// de_UpdateFirewallConfigResponse omitted.

// de_UpdateFirewallDomainsResponse omitted.

// de_UpdateFirewallRuleGroupAssociationResponse omitted.

// de_UpdateFirewallRuleResponse omitted.

// de_UpdateOutpostResolverResponse omitted.

// de_UpdateResolverConfigResponse omitted.

// de_UpdateResolverDnssecConfigResponse omitted.

// de_UpdateResolverEndpointResponse omitted.

// de_UpdateResolverRuleResponse omitted.

// de_ValidationException omitted.

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

const throwDefaultError = withBaseException(__BaseException);
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
