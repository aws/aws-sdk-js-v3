// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  strictParseInt32 as __strictParseInt32,
  strictParseLong as __strictParseLong,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { XMLParser } from "fast-xml-parser";

import { AddTagsCommandInput, AddTagsCommandOutput } from "../commands/AddTagsCommand";
import {
  ApplySecurityGroupsToLoadBalancerCommandInput,
  ApplySecurityGroupsToLoadBalancerCommandOutput,
} from "../commands/ApplySecurityGroupsToLoadBalancerCommand";
import {
  AttachLoadBalancerToSubnetsCommandInput,
  AttachLoadBalancerToSubnetsCommandOutput,
} from "../commands/AttachLoadBalancerToSubnetsCommand";
import {
  ConfigureHealthCheckCommandInput,
  ConfigureHealthCheckCommandOutput,
} from "../commands/ConfigureHealthCheckCommand";
import {
  CreateAppCookieStickinessPolicyCommandInput,
  CreateAppCookieStickinessPolicyCommandOutput,
} from "../commands/CreateAppCookieStickinessPolicyCommand";
import {
  CreateLBCookieStickinessPolicyCommandInput,
  CreateLBCookieStickinessPolicyCommandOutput,
} from "../commands/CreateLBCookieStickinessPolicyCommand";
import { CreateLoadBalancerCommandInput, CreateLoadBalancerCommandOutput } from "../commands/CreateLoadBalancerCommand";
import {
  CreateLoadBalancerListenersCommandInput,
  CreateLoadBalancerListenersCommandOutput,
} from "../commands/CreateLoadBalancerListenersCommand";
import {
  CreateLoadBalancerPolicyCommandInput,
  CreateLoadBalancerPolicyCommandOutput,
} from "../commands/CreateLoadBalancerPolicyCommand";
import { DeleteLoadBalancerCommandInput, DeleteLoadBalancerCommandOutput } from "../commands/DeleteLoadBalancerCommand";
import {
  DeleteLoadBalancerListenersCommandInput,
  DeleteLoadBalancerListenersCommandOutput,
} from "../commands/DeleteLoadBalancerListenersCommand";
import {
  DeleteLoadBalancerPolicyCommandInput,
  DeleteLoadBalancerPolicyCommandOutput,
} from "../commands/DeleteLoadBalancerPolicyCommand";
import {
  DeregisterInstancesFromLoadBalancerCommandInput,
  DeregisterInstancesFromLoadBalancerCommandOutput,
} from "../commands/DeregisterInstancesFromLoadBalancerCommand";
import {
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
} from "../commands/DescribeAccountLimitsCommand";
import {
  DescribeInstanceHealthCommandInput,
  DescribeInstanceHealthCommandOutput,
} from "../commands/DescribeInstanceHealthCommand";
import {
  DescribeLoadBalancerAttributesCommandInput,
  DescribeLoadBalancerAttributesCommandOutput,
} from "../commands/DescribeLoadBalancerAttributesCommand";
import {
  DescribeLoadBalancerPoliciesCommandInput,
  DescribeLoadBalancerPoliciesCommandOutput,
} from "../commands/DescribeLoadBalancerPoliciesCommand";
import {
  DescribeLoadBalancerPolicyTypesCommandInput,
  DescribeLoadBalancerPolicyTypesCommandOutput,
} from "../commands/DescribeLoadBalancerPolicyTypesCommand";
import {
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput,
} from "../commands/DescribeLoadBalancersCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "../commands/DescribeTagsCommand";
import {
  DetachLoadBalancerFromSubnetsCommandInput,
  DetachLoadBalancerFromSubnetsCommandOutput,
} from "../commands/DetachLoadBalancerFromSubnetsCommand";
import {
  DisableAvailabilityZonesForLoadBalancerCommandInput,
  DisableAvailabilityZonesForLoadBalancerCommandOutput,
} from "../commands/DisableAvailabilityZonesForLoadBalancerCommand";
import {
  EnableAvailabilityZonesForLoadBalancerCommandInput,
  EnableAvailabilityZonesForLoadBalancerCommandOutput,
} from "../commands/EnableAvailabilityZonesForLoadBalancerCommand";
import {
  ModifyLoadBalancerAttributesCommandInput,
  ModifyLoadBalancerAttributesCommandOutput,
} from "../commands/ModifyLoadBalancerAttributesCommand";
import {
  RegisterInstancesWithLoadBalancerCommandInput,
  RegisterInstancesWithLoadBalancerCommandOutput,
} from "../commands/RegisterInstancesWithLoadBalancerCommand";
import { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "../commands/RemoveTagsCommand";
import {
  SetLoadBalancerListenerSSLCertificateCommandInput,
  SetLoadBalancerListenerSSLCertificateCommandOutput,
} from "../commands/SetLoadBalancerListenerSSLCertificateCommand";
import {
  SetLoadBalancerPoliciesForBackendServerCommandInput,
  SetLoadBalancerPoliciesForBackendServerCommandOutput,
} from "../commands/SetLoadBalancerPoliciesForBackendServerCommand";
import {
  SetLoadBalancerPoliciesOfListenerCommandInput,
  SetLoadBalancerPoliciesOfListenerCommandOutput,
} from "../commands/SetLoadBalancerPoliciesOfListenerCommand";
import { ElasticLoadBalancingServiceException as __BaseException } from "../models/ElasticLoadBalancingServiceException";
import {
  AccessLog,
  AccessPointNotFoundException,
  AddAvailabilityZonesInput,
  AddAvailabilityZonesOutput,
  AdditionalAttribute,
  AddTagsInput,
  AddTagsOutput,
  AppCookieStickinessPolicy,
  ApplySecurityGroupsToLoadBalancerInput,
  ApplySecurityGroupsToLoadBalancerOutput,
  AttachLoadBalancerToSubnetsInput,
  AttachLoadBalancerToSubnetsOutput,
  BackendServerDescription,
  CertificateNotFoundException,
  ConfigureHealthCheckInput,
  ConfigureHealthCheckOutput,
  ConnectionDraining,
  ConnectionSettings,
  CreateAccessPointInput,
  CreateAccessPointOutput,
  CreateAppCookieStickinessPolicyInput,
  CreateAppCookieStickinessPolicyOutput,
  CreateLBCookieStickinessPolicyInput,
  CreateLBCookieStickinessPolicyOutput,
  CreateLoadBalancerListenerInput,
  CreateLoadBalancerListenerOutput,
  CreateLoadBalancerPolicyInput,
  CreateLoadBalancerPolicyOutput,
  CrossZoneLoadBalancing,
  DeleteAccessPointInput,
  DeleteAccessPointOutput,
  DeleteLoadBalancerListenerInput,
  DeleteLoadBalancerListenerOutput,
  DeleteLoadBalancerPolicyInput,
  DeleteLoadBalancerPolicyOutput,
  DependencyThrottleException,
  DeregisterEndPointsInput,
  DeregisterEndPointsOutput,
  DescribeAccessPointsInput,
  DescribeAccessPointsOutput,
  DescribeAccountLimitsInput,
  DescribeAccountLimitsOutput,
  DescribeEndPointStateInput,
  DescribeEndPointStateOutput,
  DescribeLoadBalancerAttributesInput,
  DescribeLoadBalancerAttributesOutput,
  DescribeLoadBalancerPoliciesInput,
  DescribeLoadBalancerPoliciesOutput,
  DescribeLoadBalancerPolicyTypesInput,
  DescribeLoadBalancerPolicyTypesOutput,
  DescribeTagsInput,
  DescribeTagsOutput,
  DetachLoadBalancerFromSubnetsInput,
  DetachLoadBalancerFromSubnetsOutput,
  DuplicateAccessPointNameException,
  DuplicateListenerException,
  DuplicatePolicyNameException,
  DuplicateTagKeysException,
  HealthCheck,
  Instance,
  InstanceState,
  InvalidConfigurationRequestException,
  InvalidEndPointException,
  InvalidSchemeException,
  InvalidSecurityGroupException,
  InvalidSubnetException,
  LBCookieStickinessPolicy,
  Limit,
  Listener,
  ListenerDescription,
  ListenerNotFoundException,
  LoadBalancerAttributeNotFoundException,
  LoadBalancerAttributes,
  LoadBalancerDescription,
  ModifyLoadBalancerAttributesInput,
  ModifyLoadBalancerAttributesOutput,
  OperationNotPermittedException,
  Policies,
  PolicyAttribute,
  PolicyAttributeDescription,
  PolicyAttributeTypeDescription,
  PolicyDescription,
  PolicyNotFoundException,
  PolicyTypeDescription,
  PolicyTypeNotFoundException,
  RegisterEndPointsInput,
  RegisterEndPointsOutput,
  RemoveAvailabilityZonesInput,
  RemoveAvailabilityZonesOutput,
  RemoveTagsInput,
  RemoveTagsOutput,
  SetLoadBalancerListenerSSLCertificateInput,
  SetLoadBalancerListenerSSLCertificateOutput,
  SetLoadBalancerPoliciesForBackendServerInput,
  SetLoadBalancerPoliciesForBackendServerOutput,
  SetLoadBalancerPoliciesOfListenerInput,
  SetLoadBalancerPoliciesOfListenerOutput,
  SourceSecurityGroup,
  SubnetNotFoundException,
  Tag,
  TagDescription,
  TagKeyOnly,
  TooManyAccessPointsException,
  TooManyPoliciesException,
  TooManyTagsException,
  UnsupportedProtocolException,
} from "../models/models_0";

/**
 * serializeAws_queryAddTagsCommand
 */
export const se_AddTagsCommand = async (
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AddTagsInput(input, context),
    Action: "AddTags",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryApplySecurityGroupsToLoadBalancerCommand
 */
export const se_ApplySecurityGroupsToLoadBalancerCommand = async (
  input: ApplySecurityGroupsToLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ApplySecurityGroupsToLoadBalancerInput(input, context),
    Action: "ApplySecurityGroupsToLoadBalancer",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryAttachLoadBalancerToSubnetsCommand
 */
export const se_AttachLoadBalancerToSubnetsCommand = async (
  input: AttachLoadBalancerToSubnetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AttachLoadBalancerToSubnetsInput(input, context),
    Action: "AttachLoadBalancerToSubnets",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryConfigureHealthCheckCommand
 */
export const se_ConfigureHealthCheckCommand = async (
  input: ConfigureHealthCheckCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ConfigureHealthCheckInput(input, context),
    Action: "ConfigureHealthCheck",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateAppCookieStickinessPolicyCommand
 */
export const se_CreateAppCookieStickinessPolicyCommand = async (
  input: CreateAppCookieStickinessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateAppCookieStickinessPolicyInput(input, context),
    Action: "CreateAppCookieStickinessPolicy",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateLBCookieStickinessPolicyCommand
 */
export const se_CreateLBCookieStickinessPolicyCommand = async (
  input: CreateLBCookieStickinessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateLBCookieStickinessPolicyInput(input, context),
    Action: "CreateLBCookieStickinessPolicy",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateLoadBalancerCommand
 */
export const se_CreateLoadBalancerCommand = async (
  input: CreateLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateAccessPointInput(input, context),
    Action: "CreateLoadBalancer",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateLoadBalancerListenersCommand
 */
export const se_CreateLoadBalancerListenersCommand = async (
  input: CreateLoadBalancerListenersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateLoadBalancerListenerInput(input, context),
    Action: "CreateLoadBalancerListeners",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateLoadBalancerPolicyCommand
 */
export const se_CreateLoadBalancerPolicyCommand = async (
  input: CreateLoadBalancerPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateLoadBalancerPolicyInput(input, context),
    Action: "CreateLoadBalancerPolicy",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteLoadBalancerCommand
 */
export const se_DeleteLoadBalancerCommand = async (
  input: DeleteLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteAccessPointInput(input, context),
    Action: "DeleteLoadBalancer",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteLoadBalancerListenersCommand
 */
export const se_DeleteLoadBalancerListenersCommand = async (
  input: DeleteLoadBalancerListenersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteLoadBalancerListenerInput(input, context),
    Action: "DeleteLoadBalancerListeners",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteLoadBalancerPolicyCommand
 */
export const se_DeleteLoadBalancerPolicyCommand = async (
  input: DeleteLoadBalancerPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteLoadBalancerPolicyInput(input, context),
    Action: "DeleteLoadBalancerPolicy",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeregisterInstancesFromLoadBalancerCommand
 */
export const se_DeregisterInstancesFromLoadBalancerCommand = async (
  input: DeregisterInstancesFromLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeregisterEndPointsInput(input, context),
    Action: "DeregisterInstancesFromLoadBalancer",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeAccountLimitsCommand
 */
export const se_DescribeAccountLimitsCommand = async (
  input: DescribeAccountLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeAccountLimitsInput(input, context),
    Action: "DescribeAccountLimits",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeInstanceHealthCommand
 */
export const se_DescribeInstanceHealthCommand = async (
  input: DescribeInstanceHealthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeEndPointStateInput(input, context),
    Action: "DescribeInstanceHealth",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeLoadBalancerAttributesCommand
 */
export const se_DescribeLoadBalancerAttributesCommand = async (
  input: DescribeLoadBalancerAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeLoadBalancerAttributesInput(input, context),
    Action: "DescribeLoadBalancerAttributes",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeLoadBalancerPoliciesCommand
 */
export const se_DescribeLoadBalancerPoliciesCommand = async (
  input: DescribeLoadBalancerPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeLoadBalancerPoliciesInput(input, context),
    Action: "DescribeLoadBalancerPolicies",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeLoadBalancerPolicyTypesCommand
 */
export const se_DescribeLoadBalancerPolicyTypesCommand = async (
  input: DescribeLoadBalancerPolicyTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeLoadBalancerPolicyTypesInput(input, context),
    Action: "DescribeLoadBalancerPolicyTypes",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeLoadBalancersCommand
 */
export const se_DescribeLoadBalancersCommand = async (
  input: DescribeLoadBalancersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeAccessPointsInput(input, context),
    Action: "DescribeLoadBalancers",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeTagsCommand
 */
export const se_DescribeTagsCommand = async (
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeTagsInput(input, context),
    Action: "DescribeTags",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDetachLoadBalancerFromSubnetsCommand
 */
export const se_DetachLoadBalancerFromSubnetsCommand = async (
  input: DetachLoadBalancerFromSubnetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DetachLoadBalancerFromSubnetsInput(input, context),
    Action: "DetachLoadBalancerFromSubnets",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand
 */
export const se_DisableAvailabilityZonesForLoadBalancerCommand = async (
  input: DisableAvailabilityZonesForLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RemoveAvailabilityZonesInput(input, context),
    Action: "DisableAvailabilityZonesForLoadBalancer",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand
 */
export const se_EnableAvailabilityZonesForLoadBalancerCommand = async (
  input: EnableAvailabilityZonesForLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AddAvailabilityZonesInput(input, context),
    Action: "EnableAvailabilityZonesForLoadBalancer",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyLoadBalancerAttributesCommand
 */
export const se_ModifyLoadBalancerAttributesCommand = async (
  input: ModifyLoadBalancerAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyLoadBalancerAttributesInput(input, context),
    Action: "ModifyLoadBalancerAttributes",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRegisterInstancesWithLoadBalancerCommand
 */
export const se_RegisterInstancesWithLoadBalancerCommand = async (
  input: RegisterInstancesWithLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RegisterEndPointsInput(input, context),
    Action: "RegisterInstancesWithLoadBalancer",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRemoveTagsCommand
 */
export const se_RemoveTagsCommand = async (
  input: RemoveTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RemoveTagsInput(input, context),
    Action: "RemoveTags",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetLoadBalancerListenerSSLCertificateCommand
 */
export const se_SetLoadBalancerListenerSSLCertificateCommand = async (
  input: SetLoadBalancerListenerSSLCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetLoadBalancerListenerSSLCertificateInput(input, context),
    Action: "SetLoadBalancerListenerSSLCertificate",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetLoadBalancerPoliciesForBackendServerCommand
 */
export const se_SetLoadBalancerPoliciesForBackendServerCommand = async (
  input: SetLoadBalancerPoliciesForBackendServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetLoadBalancerPoliciesForBackendServerInput(input, context),
    Action: "SetLoadBalancerPoliciesForBackendServer",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetLoadBalancerPoliciesOfListenerCommand
 */
export const se_SetLoadBalancerPoliciesOfListenerCommand = async (
  input: SetLoadBalancerPoliciesOfListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetLoadBalancerPoliciesOfListenerInput(input, context),
    Action: "SetLoadBalancerPoliciesOfListener",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_queryAddTagsCommand
 */
export const de_AddTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AddTagsOutput(data.AddTagsResult, context);
  const response: AddTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryAddTagsCommandError
 */
const de_AddTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateTagKeys":
    case "com.amazonaws.elasticloadbalancing#DuplicateTagKeysException":
      throw await de_DuplicateTagKeysExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await de_AccessPointNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTags":
    case "com.amazonaws.elasticloadbalancing#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryApplySecurityGroupsToLoadBalancerCommand
 */
export const de_ApplySecurityGroupsToLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplySecurityGroupsToLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ApplySecurityGroupsToLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ApplySecurityGroupsToLoadBalancerOutput(data.ApplySecurityGroupsToLoadBalancerResult, context);
  const response: ApplySecurityGroupsToLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryApplySecurityGroupsToLoadBalancerCommandError
 */
const de_ApplySecurityGroupsToLoadBalancerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplySecurityGroupsToLoadBalancerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
      throw await de_InvalidConfigurationRequestExceptionRes(parsedOutput, context);
    case "InvalidSecurityGroup":
    case "com.amazonaws.elasticloadbalancing#InvalidSecurityGroupException":
      throw await de_InvalidSecurityGroupExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await de_AccessPointNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryAttachLoadBalancerToSubnetsCommand
 */
export const de_AttachLoadBalancerToSubnetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachLoadBalancerToSubnetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AttachLoadBalancerToSubnetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AttachLoadBalancerToSubnetsOutput(data.AttachLoadBalancerToSubnetsResult, context);
  const response: AttachLoadBalancerToSubnetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryAttachLoadBalancerToSubnetsCommandError
 */
const de_AttachLoadBalancerToSubnetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachLoadBalancerToSubnetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
      throw await de_InvalidConfigurationRequestExceptionRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.elasticloadbalancing#InvalidSubnetException":
      throw await de_InvalidSubnetExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await de_AccessPointNotFoundExceptionRes(parsedOutput, context);
    case "SubnetNotFound":
    case "com.amazonaws.elasticloadbalancing#SubnetNotFoundException":
      throw await de_SubnetNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryConfigureHealthCheckCommand
 */
export const de_ConfigureHealthCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureHealthCheckCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ConfigureHealthCheckCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ConfigureHealthCheckOutput(data.ConfigureHealthCheckResult, context);
  const response: ConfigureHealthCheckCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryConfigureHealthCheckCommandError
 */
const de_ConfigureHealthCheckCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureHealthCheckCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await de_AccessPointNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateAppCookieStickinessPolicyCommand
 */
export const de_CreateAppCookieStickinessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCookieStickinessPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAppCookieStickinessPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAppCookieStickinessPolicyOutput(data.CreateAppCookieStickinessPolicyResult, context);
  const response: CreateAppCookieStickinessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateAppCookieStickinessPolicyCommandError
 */
const de_CreateAppCookieStickinessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCookieStickinessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicatePolicyName":
    case "com.amazonaws.elasticloadbalancing#DuplicatePolicyNameException":
      throw await de_DuplicatePolicyNameExceptionRes(parsedOutput, context);
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
      throw await de_InvalidConfigurationRequestExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await de_AccessPointNotFoundExceptionRes(parsedOutput, context);
    case "TooManyPolicies":
    case "com.amazonaws.elasticloadbalancing#TooManyPoliciesException":
      throw await de_TooManyPoliciesExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateLBCookieStickinessPolicyCommand
 */
export const de_CreateLBCookieStickinessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLBCookieStickinessPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLBCookieStickinessPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLBCookieStickinessPolicyOutput(data.CreateLBCookieStickinessPolicyResult, context);
  const response: CreateLBCookieStickinessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateLBCookieStickinessPolicyCommandError
 */
const de_CreateLBCookieStickinessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLBCookieStickinessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicatePolicyName":
    case "com.amazonaws.elasticloadbalancing#DuplicatePolicyNameException":
      throw await de_DuplicatePolicyNameExceptionRes(parsedOutput, context);
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
      throw await de_InvalidConfigurationRequestExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await de_AccessPointNotFoundExceptionRes(parsedOutput, context);
    case "TooManyPolicies":
    case "com.amazonaws.elasticloadbalancing#TooManyPoliciesException":
      throw await de_TooManyPoliciesExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateLoadBalancerCommand
 */
export const de_CreateLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAccessPointOutput(data.CreateLoadBalancerResult, context);
  const response: CreateLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateLoadBalancerCommandError
 */
const de_CreateLoadBalancerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CertificateNotFound":
    case "com.amazonaws.elasticloadbalancing#CertificateNotFoundException":
      throw await de_CertificateNotFoundExceptionRes(parsedOutput, context);
    case "DuplicateLoadBalancerName":
    case "com.amazonaws.elasticloadbalancing#DuplicateAccessPointNameException":
      throw await de_DuplicateAccessPointNameExceptionRes(parsedOutput, context);
    case "DuplicateTagKeys":
    case "com.amazonaws.elasticloadbalancing#DuplicateTagKeysException":
      throw await de_DuplicateTagKeysExceptionRes(parsedOutput, context);
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
      throw await de_InvalidConfigurationRequestExceptionRes(parsedOutput, context);
    case "InvalidScheme":
    case "com.amazonaws.elasticloadbalancing#InvalidSchemeException":
      throw await de_InvalidSchemeExceptionRes(parsedOutput, context);
    case "InvalidSecurityGroup":
    case "com.amazonaws.elasticloadbalancing#InvalidSecurityGroupException":
      throw await de_InvalidSecurityGroupExceptionRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.elasticloadbalancing#InvalidSubnetException":
      throw await de_InvalidSubnetExceptionRes(parsedOutput, context);
    case "OperationNotPermitted":
    case "com.amazonaws.elasticloadbalancing#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "SubnetNotFound":
    case "com.amazonaws.elasticloadbalancing#SubnetNotFoundException":
      throw await de_SubnetNotFoundExceptionRes(parsedOutput, context);
    case "TooManyLoadBalancers":
    case "com.amazonaws.elasticloadbalancing#TooManyAccessPointsException":
      throw await de_TooManyAccessPointsExceptionRes(parsedOutput, context);
    case "TooManyTags":
    case "com.amazonaws.elasticloadbalancing#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "UnsupportedProtocol":
    case "com.amazonaws.elasticloadbalancing#UnsupportedProtocolException":
      throw await de_UnsupportedProtocolExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateLoadBalancerListenersCommand
 */
export const de_CreateLoadBalancerListenersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerListenersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLoadBalancerListenersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLoadBalancerListenerOutput(data.CreateLoadBalancerListenersResult, context);
  const response: CreateLoadBalancerListenersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateLoadBalancerListenersCommandError
 */
const de_CreateLoadBalancerListenersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerListenersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CertificateNotFound":
    case "com.amazonaws.elasticloadbalancing#CertificateNotFoundException":
      throw await de_CertificateNotFoundExceptionRes(parsedOutput, context);
    case "DuplicateListener":
    case "com.amazonaws.elasticloadbalancing#DuplicateListenerException":
      throw await de_DuplicateListenerExceptionRes(parsedOutput, context);
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
      throw await de_InvalidConfigurationRequestExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await de_AccessPointNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedProtocol":
    case "com.amazonaws.elasticloadbalancing#UnsupportedProtocolException":
      throw await de_UnsupportedProtocolExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateLoadBalancerPolicyCommand
 */
export const de_CreateLoadBalancerPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLoadBalancerPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLoadBalancerPolicyOutput(data.CreateLoadBalancerPolicyResult, context);
  const response: CreateLoadBalancerPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateLoadBalancerPolicyCommandError
 */
const de_CreateLoadBalancerPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicatePolicyName":
    case "com.amazonaws.elasticloadbalancing#DuplicatePolicyNameException":
      throw await de_DuplicatePolicyNameExceptionRes(parsedOutput, context);
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
      throw await de_InvalidConfigurationRequestExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await de_AccessPointNotFoundExceptionRes(parsedOutput, context);
    case "PolicyTypeNotFound":
    case "com.amazonaws.elasticloadbalancing#PolicyTypeNotFoundException":
      throw await de_PolicyTypeNotFoundExceptionRes(parsedOutput, context);
    case "TooManyPolicies":
    case "com.amazonaws.elasticloadbalancing#TooManyPoliciesException":
      throw await de_TooManyPoliciesExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteLoadBalancerCommand
 */
export const de_DeleteLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteAccessPointOutput(data.DeleteLoadBalancerResult, context);
  const response: DeleteLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteLoadBalancerCommandError
 */
const de_DeleteLoadBalancerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryDeleteLoadBalancerListenersCommand
 */
export const de_DeleteLoadBalancerListenersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerListenersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLoadBalancerListenersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteLoadBalancerListenerOutput(data.DeleteLoadBalancerListenersResult, context);
  const response: DeleteLoadBalancerListenersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteLoadBalancerListenersCommandError
 */
const de_DeleteLoadBalancerListenersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerListenersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await de_AccessPointNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteLoadBalancerPolicyCommand
 */
export const de_DeleteLoadBalancerPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLoadBalancerPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteLoadBalancerPolicyOutput(data.DeleteLoadBalancerPolicyResult, context);
  const response: DeleteLoadBalancerPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteLoadBalancerPolicyCommandError
 */
const de_DeleteLoadBalancerPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
      throw await de_InvalidConfigurationRequestExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await de_AccessPointNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeregisterInstancesFromLoadBalancerCommand
 */
export const de_DeregisterInstancesFromLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterInstancesFromLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterInstancesFromLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeregisterEndPointsOutput(data.DeregisterInstancesFromLoadBalancerResult, context);
  const response: DeregisterInstancesFromLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeregisterInstancesFromLoadBalancerCommandError
 */
const de_DeregisterInstancesFromLoadBalancerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterInstancesFromLoadBalancerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInstance":
    case "com.amazonaws.elasticloadbalancing#InvalidEndPointException":
      throw await de_InvalidEndPointExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await de_AccessPointNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeAccountLimitsCommand
 */
export const de_DescribeAccountLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAccountLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAccountLimitsOutput(data.DescribeAccountLimitsResult, context);
  const response: DescribeAccountLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeAccountLimitsCommandError
 */
const de_DescribeAccountLimitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryDescribeInstanceHealthCommand
 */
export const de_DescribeInstanceHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceHealthCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeInstanceHealthCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEndPointStateOutput(data.DescribeInstanceHealthResult, context);
  const response: DescribeInstanceHealthCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeInstanceHealthCommandError
 */
const de_DescribeInstanceHealthCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceHealthCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInstance":
    case "com.amazonaws.elasticloadbalancing#InvalidEndPointException":
      throw await de_InvalidEndPointExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await de_AccessPointNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeLoadBalancerAttributesCommand
 */
export const de_DescribeLoadBalancerAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLoadBalancerAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLoadBalancerAttributesOutput(data.DescribeLoadBalancerAttributesResult, context);
  const response: DescribeLoadBalancerAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeLoadBalancerAttributesCommandError
 */
const de_DescribeLoadBalancerAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LoadBalancerAttributeNotFound":
    case "com.amazonaws.elasticloadbalancing#LoadBalancerAttributeNotFoundException":
      throw await de_LoadBalancerAttributeNotFoundExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await de_AccessPointNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeLoadBalancerPoliciesCommand
 */
export const de_DescribeLoadBalancerPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLoadBalancerPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLoadBalancerPoliciesOutput(data.DescribeLoadBalancerPoliciesResult, context);
  const response: DescribeLoadBalancerPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeLoadBalancerPoliciesCommandError
 */
const de_DescribeLoadBalancerPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await de_AccessPointNotFoundExceptionRes(parsedOutput, context);
    case "PolicyNotFound":
    case "com.amazonaws.elasticloadbalancing#PolicyNotFoundException":
      throw await de_PolicyNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeLoadBalancerPolicyTypesCommand
 */
export const de_DescribeLoadBalancerPolicyTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerPolicyTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLoadBalancerPolicyTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLoadBalancerPolicyTypesOutput(data.DescribeLoadBalancerPolicyTypesResult, context);
  const response: DescribeLoadBalancerPolicyTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeLoadBalancerPolicyTypesCommandError
 */
const de_DescribeLoadBalancerPolicyTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerPolicyTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "PolicyTypeNotFound":
    case "com.amazonaws.elasticloadbalancing#PolicyTypeNotFoundException":
      throw await de_PolicyTypeNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeLoadBalancersCommand
 */
export const de_DescribeLoadBalancersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLoadBalancersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAccessPointsOutput(data.DescribeLoadBalancersResult, context);
  const response: DescribeLoadBalancersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeLoadBalancersCommandError
 */
const de_DescribeLoadBalancersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyThrottle":
    case "com.amazonaws.elasticloadbalancing#DependencyThrottleException":
      throw await de_DependencyThrottleExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await de_AccessPointNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeTagsCommand
 */
export const de_DescribeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTagsOutput(data.DescribeTagsResult, context);
  const response: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeTagsCommandError
 */
const de_DescribeTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await de_AccessPointNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDetachLoadBalancerFromSubnetsCommand
 */
export const de_DetachLoadBalancerFromSubnetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachLoadBalancerFromSubnetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetachLoadBalancerFromSubnetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetachLoadBalancerFromSubnetsOutput(data.DetachLoadBalancerFromSubnetsResult, context);
  const response: DetachLoadBalancerFromSubnetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDetachLoadBalancerFromSubnetsCommandError
 */
const de_DetachLoadBalancerFromSubnetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachLoadBalancerFromSubnetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
      throw await de_InvalidConfigurationRequestExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await de_AccessPointNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand
 */
export const de_DisableAvailabilityZonesForLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableAvailabilityZonesForLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisableAvailabilityZonesForLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RemoveAvailabilityZonesOutput(data.DisableAvailabilityZonesForLoadBalancerResult, context);
  const response: DisableAvailabilityZonesForLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDisableAvailabilityZonesForLoadBalancerCommandError
 */
const de_DisableAvailabilityZonesForLoadBalancerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableAvailabilityZonesForLoadBalancerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
      throw await de_InvalidConfigurationRequestExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await de_AccessPointNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand
 */
export const de_EnableAvailabilityZonesForLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAvailabilityZonesForLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnableAvailabilityZonesForLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AddAvailabilityZonesOutput(data.EnableAvailabilityZonesForLoadBalancerResult, context);
  const response: EnableAvailabilityZonesForLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryEnableAvailabilityZonesForLoadBalancerCommandError
 */
const de_EnableAvailabilityZonesForLoadBalancerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAvailabilityZonesForLoadBalancerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await de_AccessPointNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryModifyLoadBalancerAttributesCommand
 */
export const de_ModifyLoadBalancerAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyLoadBalancerAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyLoadBalancerAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyLoadBalancerAttributesOutput(data.ModifyLoadBalancerAttributesResult, context);
  const response: ModifyLoadBalancerAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyLoadBalancerAttributesCommandError
 */
const de_ModifyLoadBalancerAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyLoadBalancerAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
      throw await de_InvalidConfigurationRequestExceptionRes(parsedOutput, context);
    case "LoadBalancerAttributeNotFound":
    case "com.amazonaws.elasticloadbalancing#LoadBalancerAttributeNotFoundException":
      throw await de_LoadBalancerAttributeNotFoundExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await de_AccessPointNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryRegisterInstancesWithLoadBalancerCommand
 */
export const de_RegisterInstancesWithLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterInstancesWithLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterInstancesWithLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterEndPointsOutput(data.RegisterInstancesWithLoadBalancerResult, context);
  const response: RegisterInstancesWithLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRegisterInstancesWithLoadBalancerCommandError
 */
const de_RegisterInstancesWithLoadBalancerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterInstancesWithLoadBalancerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInstance":
    case "com.amazonaws.elasticloadbalancing#InvalidEndPointException":
      throw await de_InvalidEndPointExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await de_AccessPointNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryRemoveTagsCommand
 */
export const de_RemoveTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RemoveTagsOutput(data.RemoveTagsResult, context);
  const response: RemoveTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRemoveTagsCommandError
 */
const de_RemoveTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await de_AccessPointNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_querySetLoadBalancerListenerSSLCertificateCommand
 */
export const de_SetLoadBalancerListenerSSLCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLoadBalancerListenerSSLCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetLoadBalancerListenerSSLCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetLoadBalancerListenerSSLCertificateOutput(data.SetLoadBalancerListenerSSLCertificateResult, context);
  const response: SetLoadBalancerListenerSSLCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySetLoadBalancerListenerSSLCertificateCommandError
 */
const de_SetLoadBalancerListenerSSLCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLoadBalancerListenerSSLCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CertificateNotFound":
    case "com.amazonaws.elasticloadbalancing#CertificateNotFoundException":
      throw await de_CertificateNotFoundExceptionRes(parsedOutput, context);
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
      throw await de_InvalidConfigurationRequestExceptionRes(parsedOutput, context);
    case "ListenerNotFound":
    case "com.amazonaws.elasticloadbalancing#ListenerNotFoundException":
      throw await de_ListenerNotFoundExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await de_AccessPointNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedProtocol":
    case "com.amazonaws.elasticloadbalancing#UnsupportedProtocolException":
      throw await de_UnsupportedProtocolExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_querySetLoadBalancerPoliciesForBackendServerCommand
 */
export const de_SetLoadBalancerPoliciesForBackendServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLoadBalancerPoliciesForBackendServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetLoadBalancerPoliciesForBackendServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetLoadBalancerPoliciesForBackendServerOutput(
    data.SetLoadBalancerPoliciesForBackendServerResult,
    context
  );
  const response: SetLoadBalancerPoliciesForBackendServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySetLoadBalancerPoliciesForBackendServerCommandError
 */
const de_SetLoadBalancerPoliciesForBackendServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLoadBalancerPoliciesForBackendServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
      throw await de_InvalidConfigurationRequestExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await de_AccessPointNotFoundExceptionRes(parsedOutput, context);
    case "PolicyNotFound":
    case "com.amazonaws.elasticloadbalancing#PolicyNotFoundException":
      throw await de_PolicyNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_querySetLoadBalancerPoliciesOfListenerCommand
 */
export const de_SetLoadBalancerPoliciesOfListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLoadBalancerPoliciesOfListenerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetLoadBalancerPoliciesOfListenerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetLoadBalancerPoliciesOfListenerOutput(data.SetLoadBalancerPoliciesOfListenerResult, context);
  const response: SetLoadBalancerPoliciesOfListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySetLoadBalancerPoliciesOfListenerCommandError
 */
const de_SetLoadBalancerPoliciesOfListenerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLoadBalancerPoliciesOfListenerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
      throw await de_InvalidConfigurationRequestExceptionRes(parsedOutput, context);
    case "ListenerNotFound":
    case "com.amazonaws.elasticloadbalancing#ListenerNotFoundException":
      throw await de_ListenerNotFoundExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await de_AccessPointNotFoundExceptionRes(parsedOutput, context);
    case "PolicyNotFound":
    case "com.amazonaws.elasticloadbalancing#PolicyNotFoundException":
      throw await de_PolicyNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryAccessPointNotFoundExceptionRes
 */
const de_AccessPointNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessPointNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccessPointNotFoundException(body.Error, context);
  const exception = new AccessPointNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCertificateNotFoundExceptionRes
 */
const de_CertificateNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CertificateNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CertificateNotFoundException(body.Error, context);
  const exception = new CertificateNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDependencyThrottleExceptionRes
 */
const de_DependencyThrottleExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependencyThrottleException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DependencyThrottleException(body.Error, context);
  const exception = new DependencyThrottleException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDuplicateAccessPointNameExceptionRes
 */
const de_DuplicateAccessPointNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateAccessPointNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicateAccessPointNameException(body.Error, context);
  const exception = new DuplicateAccessPointNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDuplicateListenerExceptionRes
 */
const de_DuplicateListenerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateListenerException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicateListenerException(body.Error, context);
  const exception = new DuplicateListenerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDuplicatePolicyNameExceptionRes
 */
const de_DuplicatePolicyNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicatePolicyNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicatePolicyNameException(body.Error, context);
  const exception = new DuplicatePolicyNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDuplicateTagKeysExceptionRes
 */
const de_DuplicateTagKeysExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateTagKeysException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicateTagKeysException(body.Error, context);
  const exception = new DuplicateTagKeysException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidConfigurationRequestExceptionRes
 */
const de_InvalidConfigurationRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidConfigurationRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidConfigurationRequestException(body.Error, context);
  const exception = new InvalidConfigurationRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidEndPointExceptionRes
 */
const de_InvalidEndPointExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEndPointException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidEndPointException(body.Error, context);
  const exception = new InvalidEndPointException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidSchemeExceptionRes
 */
const de_InvalidSchemeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSchemeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidSchemeException(body.Error, context);
  const exception = new InvalidSchemeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidSecurityGroupExceptionRes
 */
const de_InvalidSecurityGroupExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSecurityGroupException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidSecurityGroupException(body.Error, context);
  const exception = new InvalidSecurityGroupException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidSubnetExceptionRes
 */
const de_InvalidSubnetExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSubnetException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidSubnetException(body.Error, context);
  const exception = new InvalidSubnetException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryListenerNotFoundExceptionRes
 */
const de_ListenerNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ListenerNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ListenerNotFoundException(body.Error, context);
  const exception = new ListenerNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryLoadBalancerAttributeNotFoundExceptionRes
 */
const de_LoadBalancerAttributeNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LoadBalancerAttributeNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LoadBalancerAttributeNotFoundException(body.Error, context);
  const exception = new LoadBalancerAttributeNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryOperationNotPermittedExceptionRes
 */
const de_OperationNotPermittedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotPermittedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OperationNotPermittedException(body.Error, context);
  const exception = new OperationNotPermittedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryPolicyNotFoundExceptionRes
 */
const de_PolicyNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PolicyNotFoundException(body.Error, context);
  const exception = new PolicyNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryPolicyTypeNotFoundExceptionRes
 */
const de_PolicyTypeNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyTypeNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PolicyTypeNotFoundException(body.Error, context);
  const exception = new PolicyTypeNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySubnetNotFoundExceptionRes
 */
const de_SubnetNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubnetNotFoundException(body.Error, context);
  const exception = new SubnetNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyAccessPointsExceptionRes
 */
const de_TooManyAccessPointsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyAccessPointsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyAccessPointsException(body.Error, context);
  const exception = new TooManyAccessPointsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyPoliciesExceptionRes
 */
const de_TooManyPoliciesExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyPoliciesException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyPoliciesException(body.Error, context);
  const exception = new TooManyPoliciesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyTagsException(body.Error, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryUnsupportedProtocolExceptionRes
 */
const de_UnsupportedProtocolExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedProtocolException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedProtocolException(body.Error, context);
  const exception = new UnsupportedProtocolException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_queryAccessLog
 */
const se_AccessLog = (input: AccessLog, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Enabled != null) {
    entries["Enabled"] = input.Enabled;
  }
  if (input.S3BucketName != null) {
    entries["S3BucketName"] = input.S3BucketName;
  }
  if (input.EmitInterval != null) {
    entries["EmitInterval"] = input.EmitInterval;
  }
  if (input.S3BucketPrefix != null) {
    entries["S3BucketPrefix"] = input.S3BucketPrefix;
  }
  return entries;
};

/**
 * serializeAws_queryAddAvailabilityZonesInput
 */
const se_AddAvailabilityZonesInput = (input: AddAvailabilityZonesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.AvailabilityZones != null) {
    const memberEntries = se_AvailabilityZones(input.AvailabilityZones, context);
    if (input.AvailabilityZones?.length === 0) {
      entries.AvailabilityZones = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryAdditionalAttribute
 */
const se_AdditionalAttribute = (input: AdditionalAttribute, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key != null) {
    entries["Key"] = input.Key;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

/**
 * serializeAws_queryAdditionalAttributes
 */
const se_AdditionalAttributes = (input: AdditionalAttribute[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_AdditionalAttribute(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryAddTagsInput
 */
const se_AddTagsInput = (input: AddTagsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerNames != null) {
    const memberEntries = se_LoadBalancerNames(input.LoadBalancerNames, context);
    if (input.LoadBalancerNames?.length === 0) {
      entries.LoadBalancerNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoadBalancerNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryApplySecurityGroupsToLoadBalancerInput
 */
const se_ApplySecurityGroupsToLoadBalancerInput = (
  input: ApplySecurityGroupsToLoadBalancerInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.SecurityGroups != null) {
    const memberEntries = se_SecurityGroups(input.SecurityGroups, context);
    if (input.SecurityGroups?.length === 0) {
      entries.SecurityGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryAttachLoadBalancerToSubnetsInput
 */
const se_AttachLoadBalancerToSubnetsInput = (input: AttachLoadBalancerToSubnetsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.Subnets != null) {
    const memberEntries = se_Subnets(input.Subnets, context);
    if (input.Subnets?.length === 0) {
      entries.Subnets = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Subnets.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryAvailabilityZones
 */
const se_AvailabilityZones = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryConfigureHealthCheckInput
 */
const se_ConfigureHealthCheckInput = (input: ConfigureHealthCheckInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.HealthCheck != null) {
    const memberEntries = se_HealthCheck(input.HealthCheck, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `HealthCheck.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryConnectionDraining
 */
const se_ConnectionDraining = (input: ConnectionDraining, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Enabled != null) {
    entries["Enabled"] = input.Enabled;
  }
  if (input.Timeout != null) {
    entries["Timeout"] = input.Timeout;
  }
  return entries;
};

/**
 * serializeAws_queryConnectionSettings
 */
const se_ConnectionSettings = (input: ConnectionSettings, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.IdleTimeout != null) {
    entries["IdleTimeout"] = input.IdleTimeout;
  }
  return entries;
};

/**
 * serializeAws_queryCreateAccessPointInput
 */
const se_CreateAccessPointInput = (input: CreateAccessPointInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.Listeners != null) {
    const memberEntries = se_Listeners(input.Listeners, context);
    if (input.Listeners?.length === 0) {
      entries.Listeners = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Listeners.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AvailabilityZones != null) {
    const memberEntries = se_AvailabilityZones(input.AvailabilityZones, context);
    if (input.AvailabilityZones?.length === 0) {
      entries.AvailabilityZones = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Subnets != null) {
    const memberEntries = se_Subnets(input.Subnets, context);
    if (input.Subnets?.length === 0) {
      entries.Subnets = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Subnets.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SecurityGroups != null) {
    const memberEntries = se_SecurityGroups(input.SecurityGroups, context);
    if (input.SecurityGroups?.length === 0) {
      entries.SecurityGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Scheme != null) {
    entries["Scheme"] = input.Scheme;
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreateAppCookieStickinessPolicyInput
 */
const se_CreateAppCookieStickinessPolicyInput = (
  input: CreateAppCookieStickinessPolicyInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.PolicyName != null) {
    entries["PolicyName"] = input.PolicyName;
  }
  if (input.CookieName != null) {
    entries["CookieName"] = input.CookieName;
  }
  return entries;
};

/**
 * serializeAws_queryCreateLBCookieStickinessPolicyInput
 */
const se_CreateLBCookieStickinessPolicyInput = (
  input: CreateLBCookieStickinessPolicyInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.PolicyName != null) {
    entries["PolicyName"] = input.PolicyName;
  }
  if (input.CookieExpirationPeriod != null) {
    entries["CookieExpirationPeriod"] = input.CookieExpirationPeriod;
  }
  return entries;
};

/**
 * serializeAws_queryCreateLoadBalancerListenerInput
 */
const se_CreateLoadBalancerListenerInput = (input: CreateLoadBalancerListenerInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.Listeners != null) {
    const memberEntries = se_Listeners(input.Listeners, context);
    if (input.Listeners?.length === 0) {
      entries.Listeners = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Listeners.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreateLoadBalancerPolicyInput
 */
const se_CreateLoadBalancerPolicyInput = (input: CreateLoadBalancerPolicyInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.PolicyName != null) {
    entries["PolicyName"] = input.PolicyName;
  }
  if (input.PolicyTypeName != null) {
    entries["PolicyTypeName"] = input.PolicyTypeName;
  }
  if (input.PolicyAttributes != null) {
    const memberEntries = se_PolicyAttributes(input.PolicyAttributes, context);
    if (input.PolicyAttributes?.length === 0) {
      entries.PolicyAttributes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyAttributes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCrossZoneLoadBalancing
 */
const se_CrossZoneLoadBalancing = (input: CrossZoneLoadBalancing, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Enabled != null) {
    entries["Enabled"] = input.Enabled;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteAccessPointInput
 */
const se_DeleteAccessPointInput = (input: DeleteAccessPointInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteLoadBalancerListenerInput
 */
const se_DeleteLoadBalancerListenerInput = (input: DeleteLoadBalancerListenerInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.LoadBalancerPorts != null) {
    const memberEntries = se_Ports(input.LoadBalancerPorts, context);
    if (input.LoadBalancerPorts?.length === 0) {
      entries.LoadBalancerPorts = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoadBalancerPorts.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDeleteLoadBalancerPolicyInput
 */
const se_DeleteLoadBalancerPolicyInput = (input: DeleteLoadBalancerPolicyInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.PolicyName != null) {
    entries["PolicyName"] = input.PolicyName;
  }
  return entries;
};

/**
 * serializeAws_queryDeregisterEndPointsInput
 */
const se_DeregisterEndPointsInput = (input: DeregisterEndPointsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.Instances != null) {
    const memberEntries = se_Instances(input.Instances, context);
    if (input.Instances?.length === 0) {
      entries.Instances = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Instances.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDescribeAccessPointsInput
 */
const se_DescribeAccessPointsInput = (input: DescribeAccessPointsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerNames != null) {
    const memberEntries = se_LoadBalancerNames(input.LoadBalancerNames, context);
    if (input.LoadBalancerNames?.length === 0) {
      entries.LoadBalancerNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoadBalancerNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.PageSize != null) {
    entries["PageSize"] = input.PageSize;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeAccountLimitsInput
 */
const se_DescribeAccountLimitsInput = (input: DescribeAccountLimitsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.PageSize != null) {
    entries["PageSize"] = input.PageSize;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeEndPointStateInput
 */
const se_DescribeEndPointStateInput = (input: DescribeEndPointStateInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.Instances != null) {
    const memberEntries = se_Instances(input.Instances, context);
    if (input.Instances?.length === 0) {
      entries.Instances = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Instances.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDescribeLoadBalancerAttributesInput
 */
const se_DescribeLoadBalancerAttributesInput = (
  input: DescribeLoadBalancerAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeLoadBalancerPoliciesInput
 */
const se_DescribeLoadBalancerPoliciesInput = (
  input: DescribeLoadBalancerPoliciesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.PolicyNames != null) {
    const memberEntries = se_PolicyNames(input.PolicyNames, context);
    if (input.PolicyNames?.length === 0) {
      entries.PolicyNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDescribeLoadBalancerPolicyTypesInput
 */
const se_DescribeLoadBalancerPolicyTypesInput = (
  input: DescribeLoadBalancerPolicyTypesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.PolicyTypeNames != null) {
    const memberEntries = se_PolicyTypeNames(input.PolicyTypeNames, context);
    if (input.PolicyTypeNames?.length === 0) {
      entries.PolicyTypeNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyTypeNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDescribeTagsInput
 */
const se_DescribeTagsInput = (input: DescribeTagsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerNames != null) {
    const memberEntries = se_LoadBalancerNamesMax20(input.LoadBalancerNames, context);
    if (input.LoadBalancerNames?.length === 0) {
      entries.LoadBalancerNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoadBalancerNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDetachLoadBalancerFromSubnetsInput
 */
const se_DetachLoadBalancerFromSubnetsInput = (
  input: DetachLoadBalancerFromSubnetsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.Subnets != null) {
    const memberEntries = se_Subnets(input.Subnets, context);
    if (input.Subnets?.length === 0) {
      entries.Subnets = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Subnets.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryHealthCheck
 */
const se_HealthCheck = (input: HealthCheck, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Target != null) {
    entries["Target"] = input.Target;
  }
  if (input.Interval != null) {
    entries["Interval"] = input.Interval;
  }
  if (input.Timeout != null) {
    entries["Timeout"] = input.Timeout;
  }
  if (input.UnhealthyThreshold != null) {
    entries["UnhealthyThreshold"] = input.UnhealthyThreshold;
  }
  if (input.HealthyThreshold != null) {
    entries["HealthyThreshold"] = input.HealthyThreshold;
  }
  return entries;
};

/**
 * serializeAws_queryInstance
 */
const se_Instance = (input: Instance, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.InstanceId != null) {
    entries["InstanceId"] = input.InstanceId;
  }
  return entries;
};

/**
 * serializeAws_queryInstances
 */
const se_Instances = (input: Instance[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_Instance(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryListener
 */
const se_Listener = (input: Listener, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Protocol != null) {
    entries["Protocol"] = input.Protocol;
  }
  if (input.LoadBalancerPort != null) {
    entries["LoadBalancerPort"] = input.LoadBalancerPort;
  }
  if (input.InstanceProtocol != null) {
    entries["InstanceProtocol"] = input.InstanceProtocol;
  }
  if (input.InstancePort != null) {
    entries["InstancePort"] = input.InstancePort;
  }
  if (input.SSLCertificateId != null) {
    entries["SSLCertificateId"] = input.SSLCertificateId;
  }
  return entries;
};

/**
 * serializeAws_queryListeners
 */
const se_Listeners = (input: Listener[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_Listener(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryLoadBalancerAttributes
 */
const se_LoadBalancerAttributes = (input: LoadBalancerAttributes, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.CrossZoneLoadBalancing != null) {
    const memberEntries = se_CrossZoneLoadBalancing(input.CrossZoneLoadBalancing, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CrossZoneLoadBalancing.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AccessLog != null) {
    const memberEntries = se_AccessLog(input.AccessLog, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AccessLog.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ConnectionDraining != null) {
    const memberEntries = se_ConnectionDraining(input.ConnectionDraining, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ConnectionDraining.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ConnectionSettings != null) {
    const memberEntries = se_ConnectionSettings(input.ConnectionSettings, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ConnectionSettings.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AdditionalAttributes != null) {
    const memberEntries = se_AdditionalAttributes(input.AdditionalAttributes, context);
    if (input.AdditionalAttributes?.length === 0) {
      entries.AdditionalAttributes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AdditionalAttributes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryLoadBalancerNames
 */
const se_LoadBalancerNames = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryLoadBalancerNamesMax20
 */
const se_LoadBalancerNamesMax20 = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryModifyLoadBalancerAttributesInput
 */
const se_ModifyLoadBalancerAttributesInput = (
  input: ModifyLoadBalancerAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.LoadBalancerAttributes != null) {
    const memberEntries = se_LoadBalancerAttributes(input.LoadBalancerAttributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoadBalancerAttributes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryPolicyAttribute
 */
const se_PolicyAttribute = (input: PolicyAttribute, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AttributeName != null) {
    entries["AttributeName"] = input.AttributeName;
  }
  if (input.AttributeValue != null) {
    entries["AttributeValue"] = input.AttributeValue;
  }
  return entries;
};

/**
 * serializeAws_queryPolicyAttributes
 */
const se_PolicyAttributes = (input: PolicyAttribute[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_PolicyAttribute(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryPolicyNames
 */
const se_PolicyNames = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryPolicyTypeNames
 */
const se_PolicyTypeNames = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryPorts
 */
const se_Ports = (input: number[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryRegisterEndPointsInput
 */
const se_RegisterEndPointsInput = (input: RegisterEndPointsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.Instances != null) {
    const memberEntries = se_Instances(input.Instances, context);
    if (input.Instances?.length === 0) {
      entries.Instances = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Instances.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryRemoveAvailabilityZonesInput
 */
const se_RemoveAvailabilityZonesInput = (input: RemoveAvailabilityZonesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.AvailabilityZones != null) {
    const memberEntries = se_AvailabilityZones(input.AvailabilityZones, context);
    if (input.AvailabilityZones?.length === 0) {
      entries.AvailabilityZones = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryRemoveTagsInput
 */
const se_RemoveTagsInput = (input: RemoveTagsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerNames != null) {
    const memberEntries = se_LoadBalancerNames(input.LoadBalancerNames, context);
    if (input.LoadBalancerNames?.length === 0) {
      entries.LoadBalancerNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoadBalancerNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = se_TagKeyList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_querySecurityGroups
 */
const se_SecurityGroups = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_querySetLoadBalancerListenerSSLCertificateInput
 */
const se_SetLoadBalancerListenerSSLCertificateInput = (
  input: SetLoadBalancerListenerSSLCertificateInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.LoadBalancerPort != null) {
    entries["LoadBalancerPort"] = input.LoadBalancerPort;
  }
  if (input.SSLCertificateId != null) {
    entries["SSLCertificateId"] = input.SSLCertificateId;
  }
  return entries;
};

/**
 * serializeAws_querySetLoadBalancerPoliciesForBackendServerInput
 */
const se_SetLoadBalancerPoliciesForBackendServerInput = (
  input: SetLoadBalancerPoliciesForBackendServerInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.InstancePort != null) {
    entries["InstancePort"] = input.InstancePort;
  }
  if (input.PolicyNames != null) {
    const memberEntries = se_PolicyNames(input.PolicyNames, context);
    if (input.PolicyNames?.length === 0) {
      entries.PolicyNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_querySetLoadBalancerPoliciesOfListenerInput
 */
const se_SetLoadBalancerPoliciesOfListenerInput = (
  input: SetLoadBalancerPoliciesOfListenerInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.LoadBalancerPort != null) {
    entries["LoadBalancerPort"] = input.LoadBalancerPort;
  }
  if (input.PolicyNames != null) {
    const memberEntries = se_PolicyNames(input.PolicyNames, context);
    if (input.PolicyNames?.length === 0) {
      entries.PolicyNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_querySubnets
 */
const se_Subnets = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key != null) {
    entries["Key"] = input.Key;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

/**
 * serializeAws_queryTagKeyList
 */
const se_TagKeyList = (input: TagKeyOnly[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_TagKeyOnly(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTagKeyOnly
 */
const se_TagKeyOnly = (input: TagKeyOnly, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key != null) {
    entries["Key"] = input.Key;
  }
  return entries;
};

/**
 * serializeAws_queryTagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_Tag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * deserializeAws_queryAccessLog
 */
const de_AccessLog = (output: any, context: __SerdeContext): AccessLog => {
  const contents: any = {};
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["S3BucketName"] !== undefined) {
    contents.S3BucketName = __expectString(output["S3BucketName"]);
  }
  if (output["EmitInterval"] !== undefined) {
    contents.EmitInterval = __strictParseInt32(output["EmitInterval"]) as number;
  }
  if (output["S3BucketPrefix"] !== undefined) {
    contents.S3BucketPrefix = __expectString(output["S3BucketPrefix"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAccessPointNotFoundException
 */
const de_AccessPointNotFoundException = (output: any, context: __SerdeContext): AccessPointNotFoundException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAddAvailabilityZonesOutput
 */
const de_AddAvailabilityZonesOutput = (output: any, context: __SerdeContext): AddAvailabilityZonesOutput => {
  const contents: any = {};
  if (output.AvailabilityZones === "") {
    contents.AvailabilityZones = [];
  } else if (output["AvailabilityZones"] !== undefined && output["AvailabilityZones"]["member"] !== undefined) {
    contents.AvailabilityZones = de_AvailabilityZones(
      __getArrayIfSingleItem(output["AvailabilityZones"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryAdditionalAttribute
 */
const de_AdditionalAttribute = (output: any, context: __SerdeContext): AdditionalAttribute => {
  const contents: any = {};
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAdditionalAttributes
 */
const de_AdditionalAttributes = (output: any, context: __SerdeContext): AdditionalAttribute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AdditionalAttribute(entry, context);
    });
};

/**
 * deserializeAws_queryAddTagsOutput
 */
const de_AddTagsOutput = (output: any, context: __SerdeContext): AddTagsOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryAppCookieStickinessPolicies
 */
const de_AppCookieStickinessPolicies = (output: any, context: __SerdeContext): AppCookieStickinessPolicy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AppCookieStickinessPolicy(entry, context);
    });
};

/**
 * deserializeAws_queryAppCookieStickinessPolicy
 */
const de_AppCookieStickinessPolicy = (output: any, context: __SerdeContext): AppCookieStickinessPolicy => {
  const contents: any = {};
  if (output["PolicyName"] !== undefined) {
    contents.PolicyName = __expectString(output["PolicyName"]);
  }
  if (output["CookieName"] !== undefined) {
    contents.CookieName = __expectString(output["CookieName"]);
  }
  return contents;
};

/**
 * deserializeAws_queryApplySecurityGroupsToLoadBalancerOutput
 */
const de_ApplySecurityGroupsToLoadBalancerOutput = (
  output: any,
  context: __SerdeContext
): ApplySecurityGroupsToLoadBalancerOutput => {
  const contents: any = {};
  if (output.SecurityGroups === "") {
    contents.SecurityGroups = [];
  } else if (output["SecurityGroups"] !== undefined && output["SecurityGroups"]["member"] !== undefined) {
    contents.SecurityGroups = de_SecurityGroups(__getArrayIfSingleItem(output["SecurityGroups"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryAttachLoadBalancerToSubnetsOutput
 */
const de_AttachLoadBalancerToSubnetsOutput = (
  output: any,
  context: __SerdeContext
): AttachLoadBalancerToSubnetsOutput => {
  const contents: any = {};
  if (output.Subnets === "") {
    contents.Subnets = [];
  } else if (output["Subnets"] !== undefined && output["Subnets"]["member"] !== undefined) {
    contents.Subnets = de_Subnets(__getArrayIfSingleItem(output["Subnets"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryAvailabilityZones
 */
const de_AvailabilityZones = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryBackendServerDescription
 */
const de_BackendServerDescription = (output: any, context: __SerdeContext): BackendServerDescription => {
  const contents: any = {};
  if (output["InstancePort"] !== undefined) {
    contents.InstancePort = __strictParseInt32(output["InstancePort"]) as number;
  }
  if (output.PolicyNames === "") {
    contents.PolicyNames = [];
  } else if (output["PolicyNames"] !== undefined && output["PolicyNames"]["member"] !== undefined) {
    contents.PolicyNames = de_PolicyNames(__getArrayIfSingleItem(output["PolicyNames"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryBackendServerDescriptions
 */
const de_BackendServerDescriptions = (output: any, context: __SerdeContext): BackendServerDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BackendServerDescription(entry, context);
    });
};

/**
 * deserializeAws_queryCertificateNotFoundException
 */
const de_CertificateNotFoundException = (output: any, context: __SerdeContext): CertificateNotFoundException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryConfigureHealthCheckOutput
 */
const de_ConfigureHealthCheckOutput = (output: any, context: __SerdeContext): ConfigureHealthCheckOutput => {
  const contents: any = {};
  if (output["HealthCheck"] !== undefined) {
    contents.HealthCheck = de_HealthCheck(output["HealthCheck"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryConnectionDraining
 */
const de_ConnectionDraining = (output: any, context: __SerdeContext): ConnectionDraining => {
  const contents: any = {};
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["Timeout"] !== undefined) {
    contents.Timeout = __strictParseInt32(output["Timeout"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryConnectionSettings
 */
const de_ConnectionSettings = (output: any, context: __SerdeContext): ConnectionSettings => {
  const contents: any = {};
  if (output["IdleTimeout"] !== undefined) {
    contents.IdleTimeout = __strictParseInt32(output["IdleTimeout"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryCreateAccessPointOutput
 */
const de_CreateAccessPointOutput = (output: any, context: __SerdeContext): CreateAccessPointOutput => {
  const contents: any = {};
  if (output["DNSName"] !== undefined) {
    contents.DNSName = __expectString(output["DNSName"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateAppCookieStickinessPolicyOutput
 */
const de_CreateAppCookieStickinessPolicyOutput = (
  output: any,
  context: __SerdeContext
): CreateAppCookieStickinessPolicyOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryCreateLBCookieStickinessPolicyOutput
 */
const de_CreateLBCookieStickinessPolicyOutput = (
  output: any,
  context: __SerdeContext
): CreateLBCookieStickinessPolicyOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryCreateLoadBalancerListenerOutput
 */
const de_CreateLoadBalancerListenerOutput = (
  output: any,
  context: __SerdeContext
): CreateLoadBalancerListenerOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryCreateLoadBalancerPolicyOutput
 */
const de_CreateLoadBalancerPolicyOutput = (output: any, context: __SerdeContext): CreateLoadBalancerPolicyOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryCrossZoneLoadBalancing
 */
const de_CrossZoneLoadBalancing = (output: any, context: __SerdeContext): CrossZoneLoadBalancing => {
  const contents: any = {};
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteAccessPointOutput
 */
const de_DeleteAccessPointOutput = (output: any, context: __SerdeContext): DeleteAccessPointOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDeleteLoadBalancerListenerOutput
 */
const de_DeleteLoadBalancerListenerOutput = (
  output: any,
  context: __SerdeContext
): DeleteLoadBalancerListenerOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDeleteLoadBalancerPolicyOutput
 */
const de_DeleteLoadBalancerPolicyOutput = (output: any, context: __SerdeContext): DeleteLoadBalancerPolicyOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDependencyThrottleException
 */
const de_DependencyThrottleException = (output: any, context: __SerdeContext): DependencyThrottleException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDeregisterEndPointsOutput
 */
const de_DeregisterEndPointsOutput = (output: any, context: __SerdeContext): DeregisterEndPointsOutput => {
  const contents: any = {};
  if (output.Instances === "") {
    contents.Instances = [];
  } else if (output["Instances"] !== undefined && output["Instances"]["member"] !== undefined) {
    contents.Instances = de_Instances(__getArrayIfSingleItem(output["Instances"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeAccessPointsOutput
 */
const de_DescribeAccessPointsOutput = (output: any, context: __SerdeContext): DescribeAccessPointsOutput => {
  const contents: any = {};
  if (output.LoadBalancerDescriptions === "") {
    contents.LoadBalancerDescriptions = [];
  } else if (
    output["LoadBalancerDescriptions"] !== undefined &&
    output["LoadBalancerDescriptions"]["member"] !== undefined
  ) {
    contents.LoadBalancerDescriptions = de_LoadBalancerDescriptions(
      __getArrayIfSingleItem(output["LoadBalancerDescriptions"]["member"]),
      context
    );
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeAccountLimitsOutput
 */
const de_DescribeAccountLimitsOutput = (output: any, context: __SerdeContext): DescribeAccountLimitsOutput => {
  const contents: any = {};
  if (output.Limits === "") {
    contents.Limits = [];
  } else if (output["Limits"] !== undefined && output["Limits"]["member"] !== undefined) {
    contents.Limits = de_Limits(__getArrayIfSingleItem(output["Limits"]["member"]), context);
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeEndPointStateOutput
 */
const de_DescribeEndPointStateOutput = (output: any, context: __SerdeContext): DescribeEndPointStateOutput => {
  const contents: any = {};
  if (output.InstanceStates === "") {
    contents.InstanceStates = [];
  } else if (output["InstanceStates"] !== undefined && output["InstanceStates"]["member"] !== undefined) {
    contents.InstanceStates = de_InstanceStates(__getArrayIfSingleItem(output["InstanceStates"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeLoadBalancerAttributesOutput
 */
const de_DescribeLoadBalancerAttributesOutput = (
  output: any,
  context: __SerdeContext
): DescribeLoadBalancerAttributesOutput => {
  const contents: any = {};
  if (output["LoadBalancerAttributes"] !== undefined) {
    contents.LoadBalancerAttributes = de_LoadBalancerAttributes(output["LoadBalancerAttributes"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeLoadBalancerPoliciesOutput
 */
const de_DescribeLoadBalancerPoliciesOutput = (
  output: any,
  context: __SerdeContext
): DescribeLoadBalancerPoliciesOutput => {
  const contents: any = {};
  if (output.PolicyDescriptions === "") {
    contents.PolicyDescriptions = [];
  } else if (output["PolicyDescriptions"] !== undefined && output["PolicyDescriptions"]["member"] !== undefined) {
    contents.PolicyDescriptions = de_PolicyDescriptions(
      __getArrayIfSingleItem(output["PolicyDescriptions"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeLoadBalancerPolicyTypesOutput
 */
const de_DescribeLoadBalancerPolicyTypesOutput = (
  output: any,
  context: __SerdeContext
): DescribeLoadBalancerPolicyTypesOutput => {
  const contents: any = {};
  if (output.PolicyTypeDescriptions === "") {
    contents.PolicyTypeDescriptions = [];
  } else if (
    output["PolicyTypeDescriptions"] !== undefined &&
    output["PolicyTypeDescriptions"]["member"] !== undefined
  ) {
    contents.PolicyTypeDescriptions = de_PolicyTypeDescriptions(
      __getArrayIfSingleItem(output["PolicyTypeDescriptions"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeTagsOutput
 */
const de_DescribeTagsOutput = (output: any, context: __SerdeContext): DescribeTagsOutput => {
  const contents: any = {};
  if (output.TagDescriptions === "") {
    contents.TagDescriptions = [];
  } else if (output["TagDescriptions"] !== undefined && output["TagDescriptions"]["member"] !== undefined) {
    contents.TagDescriptions = de_TagDescriptions(__getArrayIfSingleItem(output["TagDescriptions"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDetachLoadBalancerFromSubnetsOutput
 */
const de_DetachLoadBalancerFromSubnetsOutput = (
  output: any,
  context: __SerdeContext
): DetachLoadBalancerFromSubnetsOutput => {
  const contents: any = {};
  if (output.Subnets === "") {
    contents.Subnets = [];
  } else if (output["Subnets"] !== undefined && output["Subnets"]["member"] !== undefined) {
    contents.Subnets = de_Subnets(__getArrayIfSingleItem(output["Subnets"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDuplicateAccessPointNameException
 */
const de_DuplicateAccessPointNameException = (
  output: any,
  context: __SerdeContext
): DuplicateAccessPointNameException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDuplicateListenerException
 */
const de_DuplicateListenerException = (output: any, context: __SerdeContext): DuplicateListenerException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDuplicatePolicyNameException
 */
const de_DuplicatePolicyNameException = (output: any, context: __SerdeContext): DuplicatePolicyNameException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDuplicateTagKeysException
 */
const de_DuplicateTagKeysException = (output: any, context: __SerdeContext): DuplicateTagKeysException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryHealthCheck
 */
const de_HealthCheck = (output: any, context: __SerdeContext): HealthCheck => {
  const contents: any = {};
  if (output["Target"] !== undefined) {
    contents.Target = __expectString(output["Target"]);
  }
  if (output["Interval"] !== undefined) {
    contents.Interval = __strictParseInt32(output["Interval"]) as number;
  }
  if (output["Timeout"] !== undefined) {
    contents.Timeout = __strictParseInt32(output["Timeout"]) as number;
  }
  if (output["UnhealthyThreshold"] !== undefined) {
    contents.UnhealthyThreshold = __strictParseInt32(output["UnhealthyThreshold"]) as number;
  }
  if (output["HealthyThreshold"] !== undefined) {
    contents.HealthyThreshold = __strictParseInt32(output["HealthyThreshold"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryInstance
 */
const de_Instance = (output: any, context: __SerdeContext): Instance => {
  const contents: any = {};
  if (output["InstanceId"] !== undefined) {
    contents.InstanceId = __expectString(output["InstanceId"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInstances
 */
const de_Instances = (output: any, context: __SerdeContext): Instance[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Instance(entry, context);
    });
};

/**
 * deserializeAws_queryInstanceState
 */
const de_InstanceState = (output: any, context: __SerdeContext): InstanceState => {
  const contents: any = {};
  if (output["InstanceId"] !== undefined) {
    contents.InstanceId = __expectString(output["InstanceId"]);
  }
  if (output["State"] !== undefined) {
    contents.State = __expectString(output["State"]);
  }
  if (output["ReasonCode"] !== undefined) {
    contents.ReasonCode = __expectString(output["ReasonCode"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInstanceStates
 */
const de_InstanceStates = (output: any, context: __SerdeContext): InstanceState[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InstanceState(entry, context);
    });
};

/**
 * deserializeAws_queryInvalidConfigurationRequestException
 */
const de_InvalidConfigurationRequestException = (
  output: any,
  context: __SerdeContext
): InvalidConfigurationRequestException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidEndPointException
 */
const de_InvalidEndPointException = (output: any, context: __SerdeContext): InvalidEndPointException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidSchemeException
 */
const de_InvalidSchemeException = (output: any, context: __SerdeContext): InvalidSchemeException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidSecurityGroupException
 */
const de_InvalidSecurityGroupException = (output: any, context: __SerdeContext): InvalidSecurityGroupException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidSubnetException
 */
const de_InvalidSubnetException = (output: any, context: __SerdeContext): InvalidSubnetException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLBCookieStickinessPolicies
 */
const de_LBCookieStickinessPolicies = (output: any, context: __SerdeContext): LBCookieStickinessPolicy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LBCookieStickinessPolicy(entry, context);
    });
};

/**
 * deserializeAws_queryLBCookieStickinessPolicy
 */
const de_LBCookieStickinessPolicy = (output: any, context: __SerdeContext): LBCookieStickinessPolicy => {
  const contents: any = {};
  if (output["PolicyName"] !== undefined) {
    contents.PolicyName = __expectString(output["PolicyName"]);
  }
  if (output["CookieExpirationPeriod"] !== undefined) {
    contents.CookieExpirationPeriod = __strictParseLong(output["CookieExpirationPeriod"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryLimit
 */
const de_Limit = (output: any, context: __SerdeContext): Limit => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Max"] !== undefined) {
    contents.Max = __expectString(output["Max"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLimits
 */
const de_Limits = (output: any, context: __SerdeContext): Limit[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Limit(entry, context);
    });
};

/**
 * deserializeAws_queryListener
 */
const de_Listener = (output: any, context: __SerdeContext): Listener => {
  const contents: any = {};
  if (output["Protocol"] !== undefined) {
    contents.Protocol = __expectString(output["Protocol"]);
  }
  if (output["LoadBalancerPort"] !== undefined) {
    contents.LoadBalancerPort = __strictParseInt32(output["LoadBalancerPort"]) as number;
  }
  if (output["InstanceProtocol"] !== undefined) {
    contents.InstanceProtocol = __expectString(output["InstanceProtocol"]);
  }
  if (output["InstancePort"] !== undefined) {
    contents.InstancePort = __strictParseInt32(output["InstancePort"]) as number;
  }
  if (output["SSLCertificateId"] !== undefined) {
    contents.SSLCertificateId = __expectString(output["SSLCertificateId"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListenerDescription
 */
const de_ListenerDescription = (output: any, context: __SerdeContext): ListenerDescription => {
  const contents: any = {};
  if (output["Listener"] !== undefined) {
    contents.Listener = de_Listener(output["Listener"], context);
  }
  if (output.PolicyNames === "") {
    contents.PolicyNames = [];
  } else if (output["PolicyNames"] !== undefined && output["PolicyNames"]["member"] !== undefined) {
    contents.PolicyNames = de_PolicyNames(__getArrayIfSingleItem(output["PolicyNames"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryListenerDescriptions
 */
const de_ListenerDescriptions = (output: any, context: __SerdeContext): ListenerDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListenerDescription(entry, context);
    });
};

/**
 * deserializeAws_queryListenerNotFoundException
 */
const de_ListenerNotFoundException = (output: any, context: __SerdeContext): ListenerNotFoundException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLoadBalancerAttributeNotFoundException
 */
const de_LoadBalancerAttributeNotFoundException = (
  output: any,
  context: __SerdeContext
): LoadBalancerAttributeNotFoundException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLoadBalancerAttributes
 */
const de_LoadBalancerAttributes = (output: any, context: __SerdeContext): LoadBalancerAttributes => {
  const contents: any = {};
  if (output["CrossZoneLoadBalancing"] !== undefined) {
    contents.CrossZoneLoadBalancing = de_CrossZoneLoadBalancing(output["CrossZoneLoadBalancing"], context);
  }
  if (output["AccessLog"] !== undefined) {
    contents.AccessLog = de_AccessLog(output["AccessLog"], context);
  }
  if (output["ConnectionDraining"] !== undefined) {
    contents.ConnectionDraining = de_ConnectionDraining(output["ConnectionDraining"], context);
  }
  if (output["ConnectionSettings"] !== undefined) {
    contents.ConnectionSettings = de_ConnectionSettings(output["ConnectionSettings"], context);
  }
  if (output.AdditionalAttributes === "") {
    contents.AdditionalAttributes = [];
  } else if (output["AdditionalAttributes"] !== undefined && output["AdditionalAttributes"]["member"] !== undefined) {
    contents.AdditionalAttributes = de_AdditionalAttributes(
      __getArrayIfSingleItem(output["AdditionalAttributes"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryLoadBalancerDescription
 */
const de_LoadBalancerDescription = (output: any, context: __SerdeContext): LoadBalancerDescription => {
  const contents: any = {};
  if (output["LoadBalancerName"] !== undefined) {
    contents.LoadBalancerName = __expectString(output["LoadBalancerName"]);
  }
  if (output["DNSName"] !== undefined) {
    contents.DNSName = __expectString(output["DNSName"]);
  }
  if (output["CanonicalHostedZoneName"] !== undefined) {
    contents.CanonicalHostedZoneName = __expectString(output["CanonicalHostedZoneName"]);
  }
  if (output["CanonicalHostedZoneNameID"] !== undefined) {
    contents.CanonicalHostedZoneNameID = __expectString(output["CanonicalHostedZoneNameID"]);
  }
  if (output.ListenerDescriptions === "") {
    contents.ListenerDescriptions = [];
  } else if (output["ListenerDescriptions"] !== undefined && output["ListenerDescriptions"]["member"] !== undefined) {
    contents.ListenerDescriptions = de_ListenerDescriptions(
      __getArrayIfSingleItem(output["ListenerDescriptions"]["member"]),
      context
    );
  }
  if (output["Policies"] !== undefined) {
    contents.Policies = de_Policies(output["Policies"], context);
  }
  if (output.BackendServerDescriptions === "") {
    contents.BackendServerDescriptions = [];
  } else if (
    output["BackendServerDescriptions"] !== undefined &&
    output["BackendServerDescriptions"]["member"] !== undefined
  ) {
    contents.BackendServerDescriptions = de_BackendServerDescriptions(
      __getArrayIfSingleItem(output["BackendServerDescriptions"]["member"]),
      context
    );
  }
  if (output.AvailabilityZones === "") {
    contents.AvailabilityZones = [];
  } else if (output["AvailabilityZones"] !== undefined && output["AvailabilityZones"]["member"] !== undefined) {
    contents.AvailabilityZones = de_AvailabilityZones(
      __getArrayIfSingleItem(output["AvailabilityZones"]["member"]),
      context
    );
  }
  if (output.Subnets === "") {
    contents.Subnets = [];
  } else if (output["Subnets"] !== undefined && output["Subnets"]["member"] !== undefined) {
    contents.Subnets = de_Subnets(__getArrayIfSingleItem(output["Subnets"]["member"]), context);
  }
  if (output["VPCId"] !== undefined) {
    contents.VPCId = __expectString(output["VPCId"]);
  }
  if (output.Instances === "") {
    contents.Instances = [];
  } else if (output["Instances"] !== undefined && output["Instances"]["member"] !== undefined) {
    contents.Instances = de_Instances(__getArrayIfSingleItem(output["Instances"]["member"]), context);
  }
  if (output["HealthCheck"] !== undefined) {
    contents.HealthCheck = de_HealthCheck(output["HealthCheck"], context);
  }
  if (output["SourceSecurityGroup"] !== undefined) {
    contents.SourceSecurityGroup = de_SourceSecurityGroup(output["SourceSecurityGroup"], context);
  }
  if (output.SecurityGroups === "") {
    contents.SecurityGroups = [];
  } else if (output["SecurityGroups"] !== undefined && output["SecurityGroups"]["member"] !== undefined) {
    contents.SecurityGroups = de_SecurityGroups(__getArrayIfSingleItem(output["SecurityGroups"]["member"]), context);
  }
  if (output["CreatedTime"] !== undefined) {
    contents.CreatedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreatedTime"]));
  }
  if (output["Scheme"] !== undefined) {
    contents.Scheme = __expectString(output["Scheme"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLoadBalancerDescriptions
 */
const de_LoadBalancerDescriptions = (output: any, context: __SerdeContext): LoadBalancerDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LoadBalancerDescription(entry, context);
    });
};

/**
 * deserializeAws_queryModifyLoadBalancerAttributesOutput
 */
const de_ModifyLoadBalancerAttributesOutput = (
  output: any,
  context: __SerdeContext
): ModifyLoadBalancerAttributesOutput => {
  const contents: any = {};
  if (output["LoadBalancerName"] !== undefined) {
    contents.LoadBalancerName = __expectString(output["LoadBalancerName"]);
  }
  if (output["LoadBalancerAttributes"] !== undefined) {
    contents.LoadBalancerAttributes = de_LoadBalancerAttributes(output["LoadBalancerAttributes"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryOperationNotPermittedException
 */
const de_OperationNotPermittedException = (output: any, context: __SerdeContext): OperationNotPermittedException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryPolicies
 */
const de_Policies = (output: any, context: __SerdeContext): Policies => {
  const contents: any = {};
  if (output.AppCookieStickinessPolicies === "") {
    contents.AppCookieStickinessPolicies = [];
  } else if (
    output["AppCookieStickinessPolicies"] !== undefined &&
    output["AppCookieStickinessPolicies"]["member"] !== undefined
  ) {
    contents.AppCookieStickinessPolicies = de_AppCookieStickinessPolicies(
      __getArrayIfSingleItem(output["AppCookieStickinessPolicies"]["member"]),
      context
    );
  }
  if (output.LBCookieStickinessPolicies === "") {
    contents.LBCookieStickinessPolicies = [];
  } else if (
    output["LBCookieStickinessPolicies"] !== undefined &&
    output["LBCookieStickinessPolicies"]["member"] !== undefined
  ) {
    contents.LBCookieStickinessPolicies = de_LBCookieStickinessPolicies(
      __getArrayIfSingleItem(output["LBCookieStickinessPolicies"]["member"]),
      context
    );
  }
  if (output.OtherPolicies === "") {
    contents.OtherPolicies = [];
  } else if (output["OtherPolicies"] !== undefined && output["OtherPolicies"]["member"] !== undefined) {
    contents.OtherPolicies = de_PolicyNames(__getArrayIfSingleItem(output["OtherPolicies"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryPolicyAttributeDescription
 */
const de_PolicyAttributeDescription = (output: any, context: __SerdeContext): PolicyAttributeDescription => {
  const contents: any = {};
  if (output["AttributeName"] !== undefined) {
    contents.AttributeName = __expectString(output["AttributeName"]);
  }
  if (output["AttributeValue"] !== undefined) {
    contents.AttributeValue = __expectString(output["AttributeValue"]);
  }
  return contents;
};

/**
 * deserializeAws_queryPolicyAttributeDescriptions
 */
const de_PolicyAttributeDescriptions = (output: any, context: __SerdeContext): PolicyAttributeDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PolicyAttributeDescription(entry, context);
    });
};

/**
 * deserializeAws_queryPolicyAttributeTypeDescription
 */
const de_PolicyAttributeTypeDescription = (output: any, context: __SerdeContext): PolicyAttributeTypeDescription => {
  const contents: any = {};
  if (output["AttributeName"] !== undefined) {
    contents.AttributeName = __expectString(output["AttributeName"]);
  }
  if (output["AttributeType"] !== undefined) {
    contents.AttributeType = __expectString(output["AttributeType"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = __expectString(output["DefaultValue"]);
  }
  if (output["Cardinality"] !== undefined) {
    contents.Cardinality = __expectString(output["Cardinality"]);
  }
  return contents;
};

/**
 * deserializeAws_queryPolicyAttributeTypeDescriptions
 */
const de_PolicyAttributeTypeDescriptions = (output: any, context: __SerdeContext): PolicyAttributeTypeDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PolicyAttributeTypeDescription(entry, context);
    });
};

/**
 * deserializeAws_queryPolicyDescription
 */
const de_PolicyDescription = (output: any, context: __SerdeContext): PolicyDescription => {
  const contents: any = {};
  if (output["PolicyName"] !== undefined) {
    contents.PolicyName = __expectString(output["PolicyName"]);
  }
  if (output["PolicyTypeName"] !== undefined) {
    contents.PolicyTypeName = __expectString(output["PolicyTypeName"]);
  }
  if (output.PolicyAttributeDescriptions === "") {
    contents.PolicyAttributeDescriptions = [];
  } else if (
    output["PolicyAttributeDescriptions"] !== undefined &&
    output["PolicyAttributeDescriptions"]["member"] !== undefined
  ) {
    contents.PolicyAttributeDescriptions = de_PolicyAttributeDescriptions(
      __getArrayIfSingleItem(output["PolicyAttributeDescriptions"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryPolicyDescriptions
 */
const de_PolicyDescriptions = (output: any, context: __SerdeContext): PolicyDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PolicyDescription(entry, context);
    });
};

/**
 * deserializeAws_queryPolicyNames
 */
const de_PolicyNames = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryPolicyNotFoundException
 */
const de_PolicyNotFoundException = (output: any, context: __SerdeContext): PolicyNotFoundException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryPolicyTypeDescription
 */
const de_PolicyTypeDescription = (output: any, context: __SerdeContext): PolicyTypeDescription => {
  const contents: any = {};
  if (output["PolicyTypeName"] !== undefined) {
    contents.PolicyTypeName = __expectString(output["PolicyTypeName"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output.PolicyAttributeTypeDescriptions === "") {
    contents.PolicyAttributeTypeDescriptions = [];
  } else if (
    output["PolicyAttributeTypeDescriptions"] !== undefined &&
    output["PolicyAttributeTypeDescriptions"]["member"] !== undefined
  ) {
    contents.PolicyAttributeTypeDescriptions = de_PolicyAttributeTypeDescriptions(
      __getArrayIfSingleItem(output["PolicyAttributeTypeDescriptions"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryPolicyTypeDescriptions
 */
const de_PolicyTypeDescriptions = (output: any, context: __SerdeContext): PolicyTypeDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PolicyTypeDescription(entry, context);
    });
};

/**
 * deserializeAws_queryPolicyTypeNotFoundException
 */
const de_PolicyTypeNotFoundException = (output: any, context: __SerdeContext): PolicyTypeNotFoundException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryRegisterEndPointsOutput
 */
const de_RegisterEndPointsOutput = (output: any, context: __SerdeContext): RegisterEndPointsOutput => {
  const contents: any = {};
  if (output.Instances === "") {
    contents.Instances = [];
  } else if (output["Instances"] !== undefined && output["Instances"]["member"] !== undefined) {
    contents.Instances = de_Instances(__getArrayIfSingleItem(output["Instances"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryRemoveAvailabilityZonesOutput
 */
const de_RemoveAvailabilityZonesOutput = (output: any, context: __SerdeContext): RemoveAvailabilityZonesOutput => {
  const contents: any = {};
  if (output.AvailabilityZones === "") {
    contents.AvailabilityZones = [];
  } else if (output["AvailabilityZones"] !== undefined && output["AvailabilityZones"]["member"] !== undefined) {
    contents.AvailabilityZones = de_AvailabilityZones(
      __getArrayIfSingleItem(output["AvailabilityZones"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryRemoveTagsOutput
 */
const de_RemoveTagsOutput = (output: any, context: __SerdeContext): RemoveTagsOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_querySecurityGroups
 */
const de_SecurityGroups = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_querySetLoadBalancerListenerSSLCertificateOutput
 */
const de_SetLoadBalancerListenerSSLCertificateOutput = (
  output: any,
  context: __SerdeContext
): SetLoadBalancerListenerSSLCertificateOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_querySetLoadBalancerPoliciesForBackendServerOutput
 */
const de_SetLoadBalancerPoliciesForBackendServerOutput = (
  output: any,
  context: __SerdeContext
): SetLoadBalancerPoliciesForBackendServerOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_querySetLoadBalancerPoliciesOfListenerOutput
 */
const de_SetLoadBalancerPoliciesOfListenerOutput = (
  output: any,
  context: __SerdeContext
): SetLoadBalancerPoliciesOfListenerOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_querySourceSecurityGroup
 */
const de_SourceSecurityGroup = (output: any, context: __SerdeContext): SourceSecurityGroup => {
  const contents: any = {};
  if (output["OwnerAlias"] !== undefined) {
    contents.OwnerAlias = __expectString(output["OwnerAlias"]);
  }
  if (output["GroupName"] !== undefined) {
    contents.GroupName = __expectString(output["GroupName"]);
  }
  return contents;
};

/**
 * deserializeAws_querySubnetNotFoundException
 */
const de_SubnetNotFoundException = (output: any, context: __SerdeContext): SubnetNotFoundException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySubnets
 */
const de_Subnets = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryTag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  const contents: any = {};
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTagDescription
 */
const de_TagDescription = (output: any, context: __SerdeContext): TagDescription => {
  const contents: any = {};
  if (output["LoadBalancerName"] !== undefined) {
    contents.LoadBalancerName = __expectString(output["LoadBalancerName"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_TagList(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryTagDescriptions
 */
const de_TagDescriptions = (output: any, context: __SerdeContext): TagDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TagDescription(entry, context);
    });
};

/**
 * deserializeAws_queryTagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Tag(entry, context);
    });
};

/**
 * deserializeAws_queryTooManyAccessPointsException
 */
const de_TooManyAccessPointsException = (output: any, context: __SerdeContext): TooManyAccessPointsException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyPoliciesException
 */
const de_TooManyPoliciesException = (output: any, context: __SerdeContext): TooManyPoliciesException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyTagsException
 */
const de_TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryUnsupportedProtocolException
 */
const de_UnsupportedProtocolException = (output: any, context: __SerdeContext): UnsupportedProtocolException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
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
const SHARED_HEADERS: __HeaderBag = {
  "content-type": "application/x-www-form-urlencoded",
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      const parser = new XMLParser({
        attributeNamePrefix: "",
        htmlEntities: true,
        ignoreAttributes: false,
        ignoreDeclaration: true,
        parseTagValue: false,
        trimValues: false,
        tagValueProcessor: (_: any, val: any) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
      });
      parser.addEntity("#xD", "\r");
      parser.addEntity("#10", "\n");
      const parsedObj = parser.parse(encoded);
      const textNodeName = "#text";
      const key = Object.keys(parsedObj)[0];
      const parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return __getValueFromTextNode(parsedObjToReturn);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  if (value.Error) {
    value.Error.message = value.Error.message ?? value.Error.Message;
  }
  return value;
};

const buildFormUrlencodedString = (formEntries: Record<string, string>): string =>
  Object.entries(formEntries)
    .map(([key, value]) => __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value))
    .join("&");

const loadQueryErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  if (data.Error?.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
