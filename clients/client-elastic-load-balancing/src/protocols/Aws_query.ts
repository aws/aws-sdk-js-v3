// smithy-typescript generated code
import { parseXmlBody as parseBody, parseXmlErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
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
    [_A]: _AT,
    [_V]: _,
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
    [_A]: _ASGTLB,
    [_V]: _,
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
    [_A]: _ALBTS,
    [_V]: _,
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
    [_A]: _CHC,
    [_V]: _,
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
    [_A]: _CACSP,
    [_V]: _,
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
    [_A]: _CLBCSP,
    [_V]: _,
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
    [_A]: _CLB,
    [_V]: _,
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
    [_A]: _CLBL,
    [_V]: _,
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
    [_A]: _CLBP,
    [_V]: _,
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
    [_A]: _DLB,
    [_V]: _,
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
    [_A]: _DLBL,
    [_V]: _,
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
    [_A]: _DLBP,
    [_V]: _,
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
    [_A]: _DIFLB,
    [_V]: _,
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
    [_A]: _DAL,
    [_V]: _,
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
    [_A]: _DIH,
    [_V]: _,
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
    [_A]: _DLBA,
    [_V]: _,
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
    [_A]: _DLBPe,
    [_V]: _,
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
    [_A]: _DLBPT,
    [_V]: _,
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
    [_A]: _DLBe,
    [_V]: _,
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
    [_A]: _DT,
    [_V]: _,
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
    [_A]: _DLBFS,
    [_V]: _,
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
    [_A]: _DAZFLB,
    [_V]: _,
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
    [_A]: _EAZFLB,
    [_V]: _,
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
    [_A]: _MLBA,
    [_V]: _,
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
    [_A]: _RIWLB,
    [_V]: _,
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
    [_A]: _RT,
    [_V]: _,
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
    [_A]: _SLBLSSLC,
    [_V]: _,
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
    [_A]: _SLBPFBS,
    [_V]: _,
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
    [_A]: _SLBPOL,
    [_V]: _,
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
    return de_CommandError(output, context);
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
 * deserializeAws_queryApplySecurityGroupsToLoadBalancerCommand
 */
export const de_ApplySecurityGroupsToLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplySecurityGroupsToLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryAttachLoadBalancerToSubnetsCommand
 */
export const de_AttachLoadBalancerToSubnetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachLoadBalancerToSubnetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryConfigureHealthCheckCommand
 */
export const de_ConfigureHealthCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureHealthCheckCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateAppCookieStickinessPolicyCommand
 */
export const de_CreateAppCookieStickinessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCookieStickinessPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateLBCookieStickinessPolicyCommand
 */
export const de_CreateLBCookieStickinessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLBCookieStickinessPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateLoadBalancerCommand
 */
export const de_CreateLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateLoadBalancerListenersCommand
 */
export const de_CreateLoadBalancerListenersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerListenersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateLoadBalancerPolicyCommand
 */
export const de_CreateLoadBalancerPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDeleteLoadBalancerCommand
 */
export const de_DeleteLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDeleteLoadBalancerListenersCommand
 */
export const de_DeleteLoadBalancerListenersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerListenersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDeleteLoadBalancerPolicyCommand
 */
export const de_DeleteLoadBalancerPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDeregisterInstancesFromLoadBalancerCommand
 */
export const de_DeregisterInstancesFromLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterInstancesFromLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeAccountLimitsCommand
 */
export const de_DescribeAccountLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeInstanceHealthCommand
 */
export const de_DescribeInstanceHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceHealthCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeLoadBalancerAttributesCommand
 */
export const de_DescribeLoadBalancerAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeLoadBalancerPoliciesCommand
 */
export const de_DescribeLoadBalancerPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeLoadBalancerPolicyTypesCommand
 */
export const de_DescribeLoadBalancerPolicyTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerPolicyTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeLoadBalancersCommand
 */
export const de_DescribeLoadBalancersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeTagsCommand
 */
export const de_DescribeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDetachLoadBalancerFromSubnetsCommand
 */
export const de_DetachLoadBalancerFromSubnetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachLoadBalancerFromSubnetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand
 */
export const de_DisableAvailabilityZonesForLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableAvailabilityZonesForLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand
 */
export const de_EnableAvailabilityZonesForLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAvailabilityZonesForLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryModifyLoadBalancerAttributesCommand
 */
export const de_ModifyLoadBalancerAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyLoadBalancerAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryRegisterInstancesWithLoadBalancerCommand
 */
export const de_RegisterInstancesWithLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterInstancesWithLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryRemoveTagsCommand
 */
export const de_RemoveTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_querySetLoadBalancerListenerSSLCertificateCommand
 */
export const de_SetLoadBalancerListenerSSLCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLoadBalancerListenerSSLCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_querySetLoadBalancerPoliciesForBackendServerCommand
 */
export const de_SetLoadBalancerPoliciesForBackendServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLoadBalancerPoliciesForBackendServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_querySetLoadBalancerPoliciesOfListenerCommand
 */
export const de_SetLoadBalancerPoliciesOfListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLoadBalancerPoliciesOfListenerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserialize_Aws_queryCommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
      throw await de_InvalidConfigurationRequestExceptionRes(parsedOutput, context);
    case "InvalidSecurityGroup":
    case "com.amazonaws.elasticloadbalancing#InvalidSecurityGroupException":
      throw await de_InvalidSecurityGroupExceptionRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.elasticloadbalancing#InvalidSubnetException":
      throw await de_InvalidSubnetExceptionRes(parsedOutput, context);
    case "SubnetNotFound":
    case "com.amazonaws.elasticloadbalancing#SubnetNotFoundException":
      throw await de_SubnetNotFoundExceptionRes(parsedOutput, context);
    case "DuplicatePolicyName":
    case "com.amazonaws.elasticloadbalancing#DuplicatePolicyNameException":
      throw await de_DuplicatePolicyNameExceptionRes(parsedOutput, context);
    case "TooManyPolicies":
    case "com.amazonaws.elasticloadbalancing#TooManyPoliciesException":
      throw await de_TooManyPoliciesExceptionRes(parsedOutput, context);
    case "CertificateNotFound":
    case "com.amazonaws.elasticloadbalancing#CertificateNotFoundException":
      throw await de_CertificateNotFoundExceptionRes(parsedOutput, context);
    case "DuplicateLoadBalancerName":
    case "com.amazonaws.elasticloadbalancing#DuplicateAccessPointNameException":
      throw await de_DuplicateAccessPointNameExceptionRes(parsedOutput, context);
    case "InvalidScheme":
    case "com.amazonaws.elasticloadbalancing#InvalidSchemeException":
      throw await de_InvalidSchemeExceptionRes(parsedOutput, context);
    case "OperationNotPermitted":
    case "com.amazonaws.elasticloadbalancing#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "TooManyLoadBalancers":
    case "com.amazonaws.elasticloadbalancing#TooManyAccessPointsException":
      throw await de_TooManyAccessPointsExceptionRes(parsedOutput, context);
    case "UnsupportedProtocol":
    case "com.amazonaws.elasticloadbalancing#UnsupportedProtocolException":
      throw await de_UnsupportedProtocolExceptionRes(parsedOutput, context);
    case "DuplicateListener":
    case "com.amazonaws.elasticloadbalancing#DuplicateListenerException":
      throw await de_DuplicateListenerExceptionRes(parsedOutput, context);
    case "PolicyTypeNotFound":
    case "com.amazonaws.elasticloadbalancing#PolicyTypeNotFoundException":
      throw await de_PolicyTypeNotFoundExceptionRes(parsedOutput, context);
    case "InvalidInstance":
    case "com.amazonaws.elasticloadbalancing#InvalidEndPointException":
      throw await de_InvalidEndPointExceptionRes(parsedOutput, context);
    case "LoadBalancerAttributeNotFound":
    case "com.amazonaws.elasticloadbalancing#LoadBalancerAttributeNotFoundException":
      throw await de_LoadBalancerAttributeNotFoundExceptionRes(parsedOutput, context);
    case "PolicyNotFound":
    case "com.amazonaws.elasticloadbalancing#PolicyNotFoundException":
      throw await de_PolicyNotFoundExceptionRes(parsedOutput, context);
    case "DependencyThrottle":
    case "com.amazonaws.elasticloadbalancing#DependencyThrottleException":
      throw await de_DependencyThrottleExceptionRes(parsedOutput, context);
    case "ListenerNotFound":
    case "com.amazonaws.elasticloadbalancing#ListenerNotFoundException":
      throw await de_ListenerNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      }) as never;
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
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_SBN] != null) {
    entries[_SBN] = input[_SBN];
  }
  if (input[_EI] != null) {
    entries[_EI] = input[_EI];
  }
  if (input[_SBP] != null) {
    entries[_SBP] = input[_SBP];
  }
  return entries;
};

/**
 * serializeAws_queryAddAvailabilityZonesInput
 */
const se_AddAvailabilityZonesInput = (input: AddAvailabilityZonesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LBN] != null) {
    entries[_LBN] = input[_LBN];
  }
  if (input[_AZ] != null) {
    const memberEntries = se_AvailabilityZones(input[_AZ], context);
    if (input[_AZ]?.length === 0) {
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
  if (input[_K] != null) {
    entries[_K] = input[_K];
  }
  if (input[_Va] != null) {
    entries[_Va] = input[_Va];
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
  if (input[_LBNo] != null) {
    const memberEntries = se_LoadBalancerNames(input[_LBNo], context);
    if (input[_LBNo]?.length === 0) {
      entries.LoadBalancerNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoadBalancerNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_T] != null) {
    const memberEntries = se_TagList(input[_T], context);
    if (input[_T]?.length === 0) {
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
  if (input[_LBN] != null) {
    entries[_LBN] = input[_LBN];
  }
  if (input[_SG] != null) {
    const memberEntries = se_SecurityGroups(input[_SG], context);
    if (input[_SG]?.length === 0) {
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
  if (input[_LBN] != null) {
    entries[_LBN] = input[_LBN];
  }
  if (input[_S] != null) {
    const memberEntries = se_Subnets(input[_S], context);
    if (input[_S]?.length === 0) {
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
  if (input[_LBN] != null) {
    entries[_LBN] = input[_LBN];
  }
  if (input[_HC] != null) {
    const memberEntries = se_HealthCheck(input[_HC], context);
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
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_Ti] != null) {
    entries[_Ti] = input[_Ti];
  }
  return entries;
};

/**
 * serializeAws_queryConnectionSettings
 */
const se_ConnectionSettings = (input: ConnectionSettings, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_IT] != null) {
    entries[_IT] = input[_IT];
  }
  return entries;
};

/**
 * serializeAws_queryCreateAccessPointInput
 */
const se_CreateAccessPointInput = (input: CreateAccessPointInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LBN] != null) {
    entries[_LBN] = input[_LBN];
  }
  if (input[_L] != null) {
    const memberEntries = se_Listeners(input[_L], context);
    if (input[_L]?.length === 0) {
      entries.Listeners = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Listeners.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AZ] != null) {
    const memberEntries = se_AvailabilityZones(input[_AZ], context);
    if (input[_AZ]?.length === 0) {
      entries.AvailabilityZones = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_S] != null) {
    const memberEntries = se_Subnets(input[_S], context);
    if (input[_S]?.length === 0) {
      entries.Subnets = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Subnets.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SG] != null) {
    const memberEntries = se_SecurityGroups(input[_SG], context);
    if (input[_SG]?.length === 0) {
      entries.SecurityGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Sc] != null) {
    entries[_Sc] = input[_Sc];
  }
  if (input[_T] != null) {
    const memberEntries = se_TagList(input[_T], context);
    if (input[_T]?.length === 0) {
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
  if (input[_LBN] != null) {
    entries[_LBN] = input[_LBN];
  }
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  if (input[_CN] != null) {
    entries[_CN] = input[_CN];
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
  if (input[_LBN] != null) {
    entries[_LBN] = input[_LBN];
  }
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  if (input[_CEP] != null) {
    entries[_CEP] = input[_CEP];
  }
  return entries;
};

/**
 * serializeAws_queryCreateLoadBalancerListenerInput
 */
const se_CreateLoadBalancerListenerInput = (input: CreateLoadBalancerListenerInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LBN] != null) {
    entries[_LBN] = input[_LBN];
  }
  if (input[_L] != null) {
    const memberEntries = se_Listeners(input[_L], context);
    if (input[_L]?.length === 0) {
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
  if (input[_LBN] != null) {
    entries[_LBN] = input[_LBN];
  }
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  if (input[_PTN] != null) {
    entries[_PTN] = input[_PTN];
  }
  if (input[_PA] != null) {
    const memberEntries = se_PolicyAttributes(input[_PA], context);
    if (input[_PA]?.length === 0) {
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
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteAccessPointInput
 */
const se_DeleteAccessPointInput = (input: DeleteAccessPointInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LBN] != null) {
    entries[_LBN] = input[_LBN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteLoadBalancerListenerInput
 */
const se_DeleteLoadBalancerListenerInput = (input: DeleteLoadBalancerListenerInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LBN] != null) {
    entries[_LBN] = input[_LBN];
  }
  if (input[_LBP] != null) {
    const memberEntries = se_Ports(input[_LBP], context);
    if (input[_LBP]?.length === 0) {
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
  if (input[_LBN] != null) {
    entries[_LBN] = input[_LBN];
  }
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  return entries;
};

/**
 * serializeAws_queryDeregisterEndPointsInput
 */
const se_DeregisterEndPointsInput = (input: DeregisterEndPointsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LBN] != null) {
    entries[_LBN] = input[_LBN];
  }
  if (input[_I] != null) {
    const memberEntries = se_Instances(input[_I], context);
    if (input[_I]?.length === 0) {
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
  if (input[_LBNo] != null) {
    const memberEntries = se_LoadBalancerNames(input[_LBNo], context);
    if (input[_LBNo]?.length === 0) {
      entries.LoadBalancerNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoadBalancerNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_PS] != null) {
    entries[_PS] = input[_PS];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeAccountLimitsInput
 */
const se_DescribeAccountLimitsInput = (input: DescribeAccountLimitsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_PS] != null) {
    entries[_PS] = input[_PS];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeEndPointStateInput
 */
const se_DescribeEndPointStateInput = (input: DescribeEndPointStateInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LBN] != null) {
    entries[_LBN] = input[_LBN];
  }
  if (input[_I] != null) {
    const memberEntries = se_Instances(input[_I], context);
    if (input[_I]?.length === 0) {
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
  if (input[_LBN] != null) {
    entries[_LBN] = input[_LBN];
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
  if (input[_LBN] != null) {
    entries[_LBN] = input[_LBN];
  }
  if (input[_PNo] != null) {
    const memberEntries = se_PolicyNames(input[_PNo], context);
    if (input[_PNo]?.length === 0) {
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
  if (input[_PTNo] != null) {
    const memberEntries = se_PolicyTypeNames(input[_PTNo], context);
    if (input[_PTNo]?.length === 0) {
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
  if (input[_LBNo] != null) {
    const memberEntries = se_LoadBalancerNamesMax20(input[_LBNo], context);
    if (input[_LBNo]?.length === 0) {
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
  if (input[_LBN] != null) {
    entries[_LBN] = input[_LBN];
  }
  if (input[_S] != null) {
    const memberEntries = se_Subnets(input[_S], context);
    if (input[_S]?.length === 0) {
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
  if (input[_Ta] != null) {
    entries[_Ta] = input[_Ta];
  }
  if (input[_In] != null) {
    entries[_In] = input[_In];
  }
  if (input[_Ti] != null) {
    entries[_Ti] = input[_Ti];
  }
  if (input[_UT] != null) {
    entries[_UT] = input[_UT];
  }
  if (input[_HT] != null) {
    entries[_HT] = input[_HT];
  }
  return entries;
};

/**
 * serializeAws_queryInstance
 */
const se_Instance = (input: Instance, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_II] != null) {
    entries[_II] = input[_II];
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
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_LBPo] != null) {
    entries[_LBPo] = input[_LBPo];
  }
  if (input[_IP] != null) {
    entries[_IP] = input[_IP];
  }
  if (input[_IPn] != null) {
    entries[_IPn] = input[_IPn];
  }
  if (input[_SSLCI] != null) {
    entries[_SSLCI] = input[_SSLCI];
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
  if (input[_CZLB] != null) {
    const memberEntries = se_CrossZoneLoadBalancing(input[_CZLB], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CrossZoneLoadBalancing.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AL] != null) {
    const memberEntries = se_AccessLog(input[_AL], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AccessLog.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CD] != null) {
    const memberEntries = se_ConnectionDraining(input[_CD], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ConnectionDraining.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CS] != null) {
    const memberEntries = se_ConnectionSettings(input[_CS], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ConnectionSettings.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AA] != null) {
    const memberEntries = se_AdditionalAttributes(input[_AA], context);
    if (input[_AA]?.length === 0) {
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
  if (input[_LBN] != null) {
    entries[_LBN] = input[_LBN];
  }
  if (input[_LBA] != null) {
    const memberEntries = se_LoadBalancerAttributes(input[_LBA], context);
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
  if (input[_AN] != null) {
    entries[_AN] = input[_AN];
  }
  if (input[_AV] != null) {
    entries[_AV] = input[_AV];
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
  if (input[_LBN] != null) {
    entries[_LBN] = input[_LBN];
  }
  if (input[_I] != null) {
    const memberEntries = se_Instances(input[_I], context);
    if (input[_I]?.length === 0) {
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
  if (input[_LBN] != null) {
    entries[_LBN] = input[_LBN];
  }
  if (input[_AZ] != null) {
    const memberEntries = se_AvailabilityZones(input[_AZ], context);
    if (input[_AZ]?.length === 0) {
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
  if (input[_LBNo] != null) {
    const memberEntries = se_LoadBalancerNames(input[_LBNo], context);
    if (input[_LBNo]?.length === 0) {
      entries.LoadBalancerNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoadBalancerNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_T] != null) {
    const memberEntries = se_TagKeyList(input[_T], context);
    if (input[_T]?.length === 0) {
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
  if (input[_LBN] != null) {
    entries[_LBN] = input[_LBN];
  }
  if (input[_LBPo] != null) {
    entries[_LBPo] = input[_LBPo];
  }
  if (input[_SSLCI] != null) {
    entries[_SSLCI] = input[_SSLCI];
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
  if (input[_LBN] != null) {
    entries[_LBN] = input[_LBN];
  }
  if (input[_IPn] != null) {
    entries[_IPn] = input[_IPn];
  }
  if (input[_PNo] != null) {
    const memberEntries = se_PolicyNames(input[_PNo], context);
    if (input[_PNo]?.length === 0) {
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
  if (input[_LBN] != null) {
    entries[_LBN] = input[_LBN];
  }
  if (input[_LBPo] != null) {
    entries[_LBPo] = input[_LBPo];
  }
  if (input[_PNo] != null) {
    const memberEntries = se_PolicyNames(input[_PNo], context);
    if (input[_PNo]?.length === 0) {
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
  if (input[_K] != null) {
    entries[_K] = input[_K];
  }
  if (input[_Va] != null) {
    entries[_Va] = input[_Va];
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
  if (input[_K] != null) {
    entries[_K] = input[_K];
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
  if (output[_E] != null) {
    contents[_E] = __parseBoolean(output[_E]);
  }
  if (output[_SBN] != null) {
    contents[_SBN] = __expectString(output[_SBN]);
  }
  if (output[_EI] != null) {
    contents[_EI] = __strictParseInt32(output[_EI]) as number;
  }
  if (output[_SBP] != null) {
    contents[_SBP] = __expectString(output[_SBP]);
  }
  return contents;
};

/**
 * deserializeAws_queryAccessPointNotFoundException
 */
const de_AccessPointNotFoundException = (output: any, context: __SerdeContext): AccessPointNotFoundException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryAddAvailabilityZonesOutput
 */
const de_AddAvailabilityZonesOutput = (output: any, context: __SerdeContext): AddAvailabilityZonesOutput => {
  const contents: any = {};
  if (String(output.AvailabilityZones).trim() === "") {
    contents[_AZ] = [];
  } else if (output[_AZ] != null && output[_AZ][_m] != null) {
    contents[_AZ] = de_AvailabilityZones(__getArrayIfSingleItem(output[_AZ][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryAdditionalAttribute
 */
const de_AdditionalAttribute = (output: any, context: __SerdeContext): AdditionalAttribute => {
  const contents: any = {};
  if (output[_K] != null) {
    contents[_K] = __expectString(output[_K]);
  }
  if (output[_Va] != null) {
    contents[_Va] = __expectString(output[_Va]);
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
  if (output[_PN] != null) {
    contents[_PN] = __expectString(output[_PN]);
  }
  if (output[_CN] != null) {
    contents[_CN] = __expectString(output[_CN]);
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
  if (String(output.SecurityGroups).trim() === "") {
    contents[_SG] = [];
  } else if (output[_SG] != null && output[_SG][_m] != null) {
    contents[_SG] = de_SecurityGroups(__getArrayIfSingleItem(output[_SG][_m]), context);
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
  if (String(output.Subnets).trim() === "") {
    contents[_S] = [];
  } else if (output[_S] != null && output[_S][_m] != null) {
    contents[_S] = de_Subnets(__getArrayIfSingleItem(output[_S][_m]), context);
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
  if (output[_IPn] != null) {
    contents[_IPn] = __strictParseInt32(output[_IPn]) as number;
  }
  if (String(output.PolicyNames).trim() === "") {
    contents[_PNo] = [];
  } else if (output[_PNo] != null && output[_PNo][_m] != null) {
    contents[_PNo] = de_PolicyNames(__getArrayIfSingleItem(output[_PNo][_m]), context);
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
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryConfigureHealthCheckOutput
 */
const de_ConfigureHealthCheckOutput = (output: any, context: __SerdeContext): ConfigureHealthCheckOutput => {
  const contents: any = {};
  if (output[_HC] != null) {
    contents[_HC] = de_HealthCheck(output[_HC], context);
  }
  return contents;
};

/**
 * deserializeAws_queryConnectionDraining
 */
const de_ConnectionDraining = (output: any, context: __SerdeContext): ConnectionDraining => {
  const contents: any = {};
  if (output[_E] != null) {
    contents[_E] = __parseBoolean(output[_E]);
  }
  if (output[_Ti] != null) {
    contents[_Ti] = __strictParseInt32(output[_Ti]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryConnectionSettings
 */
const de_ConnectionSettings = (output: any, context: __SerdeContext): ConnectionSettings => {
  const contents: any = {};
  if (output[_IT] != null) {
    contents[_IT] = __strictParseInt32(output[_IT]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryCreateAccessPointOutput
 */
const de_CreateAccessPointOutput = (output: any, context: __SerdeContext): CreateAccessPointOutput => {
  const contents: any = {};
  if (output[_DNSN] != null) {
    contents[_DNSN] = __expectString(output[_DNSN]);
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
  if (output[_E] != null) {
    contents[_E] = __parseBoolean(output[_E]);
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
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryDeregisterEndPointsOutput
 */
const de_DeregisterEndPointsOutput = (output: any, context: __SerdeContext): DeregisterEndPointsOutput => {
  const contents: any = {};
  if (String(output.Instances).trim() === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_m] != null) {
    contents[_I] = de_Instances(__getArrayIfSingleItem(output[_I][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeAccessPointsOutput
 */
const de_DescribeAccessPointsOutput = (output: any, context: __SerdeContext): DescribeAccessPointsOutput => {
  const contents: any = {};
  if (String(output.LoadBalancerDescriptions).trim() === "") {
    contents[_LBD] = [];
  } else if (output[_LBD] != null && output[_LBD][_m] != null) {
    contents[_LBD] = de_LoadBalancerDescriptions(__getArrayIfSingleItem(output[_LBD][_m]), context);
  }
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeAccountLimitsOutput
 */
const de_DescribeAccountLimitsOutput = (output: any, context: __SerdeContext): DescribeAccountLimitsOutput => {
  const contents: any = {};
  if (String(output.Limits).trim() === "") {
    contents[_Li] = [];
  } else if (output[_Li] != null && output[_Li][_m] != null) {
    contents[_Li] = de_Limits(__getArrayIfSingleItem(output[_Li][_m]), context);
  }
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeEndPointStateOutput
 */
const de_DescribeEndPointStateOutput = (output: any, context: __SerdeContext): DescribeEndPointStateOutput => {
  const contents: any = {};
  if (String(output.InstanceStates).trim() === "") {
    contents[_IS] = [];
  } else if (output[_IS] != null && output[_IS][_m] != null) {
    contents[_IS] = de_InstanceStates(__getArrayIfSingleItem(output[_IS][_m]), context);
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
  if (output[_LBA] != null) {
    contents[_LBA] = de_LoadBalancerAttributes(output[_LBA], context);
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
  if (String(output.PolicyDescriptions).trim() === "") {
    contents[_PD] = [];
  } else if (output[_PD] != null && output[_PD][_m] != null) {
    contents[_PD] = de_PolicyDescriptions(__getArrayIfSingleItem(output[_PD][_m]), context);
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
  if (String(output.PolicyTypeDescriptions).trim() === "") {
    contents[_PTD] = [];
  } else if (output[_PTD] != null && output[_PTD][_m] != null) {
    contents[_PTD] = de_PolicyTypeDescriptions(__getArrayIfSingleItem(output[_PTD][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeTagsOutput
 */
const de_DescribeTagsOutput = (output: any, context: __SerdeContext): DescribeTagsOutput => {
  const contents: any = {};
  if (String(output.TagDescriptions).trim() === "") {
    contents[_TD] = [];
  } else if (output[_TD] != null && output[_TD][_m] != null) {
    contents[_TD] = de_TagDescriptions(__getArrayIfSingleItem(output[_TD][_m]), context);
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
  if (String(output.Subnets).trim() === "") {
    contents[_S] = [];
  } else if (output[_S] != null && output[_S][_m] != null) {
    contents[_S] = de_Subnets(__getArrayIfSingleItem(output[_S][_m]), context);
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
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryDuplicateListenerException
 */
const de_DuplicateListenerException = (output: any, context: __SerdeContext): DuplicateListenerException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryDuplicatePolicyNameException
 */
const de_DuplicatePolicyNameException = (output: any, context: __SerdeContext): DuplicatePolicyNameException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryDuplicateTagKeysException
 */
const de_DuplicateTagKeysException = (output: any, context: __SerdeContext): DuplicateTagKeysException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryHealthCheck
 */
const de_HealthCheck = (output: any, context: __SerdeContext): HealthCheck => {
  const contents: any = {};
  if (output[_Ta] != null) {
    contents[_Ta] = __expectString(output[_Ta]);
  }
  if (output[_In] != null) {
    contents[_In] = __strictParseInt32(output[_In]) as number;
  }
  if (output[_Ti] != null) {
    contents[_Ti] = __strictParseInt32(output[_Ti]) as number;
  }
  if (output[_UT] != null) {
    contents[_UT] = __strictParseInt32(output[_UT]) as number;
  }
  if (output[_HT] != null) {
    contents[_HT] = __strictParseInt32(output[_HT]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryInstance
 */
const de_Instance = (output: any, context: __SerdeContext): Instance => {
  const contents: any = {};
  if (output[_II] != null) {
    contents[_II] = __expectString(output[_II]);
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
  if (output[_II] != null) {
    contents[_II] = __expectString(output[_II]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_RC] != null) {
    contents[_RC] = __expectString(output[_RC]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
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
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidEndPointException
 */
const de_InvalidEndPointException = (output: any, context: __SerdeContext): InvalidEndPointException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidSchemeException
 */
const de_InvalidSchemeException = (output: any, context: __SerdeContext): InvalidSchemeException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidSecurityGroupException
 */
const de_InvalidSecurityGroupException = (output: any, context: __SerdeContext): InvalidSecurityGroupException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidSubnetException
 */
const de_InvalidSubnetException = (output: any, context: __SerdeContext): InvalidSubnetException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
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
  if (output[_PN] != null) {
    contents[_PN] = __expectString(output[_PN]);
  }
  if (output[_CEP] != null) {
    contents[_CEP] = __strictParseLong(output[_CEP]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryLimit
 */
const de_Limit = (output: any, context: __SerdeContext): Limit => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __expectString(output[_Ma]);
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
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  if (output[_LBPo] != null) {
    contents[_LBPo] = __strictParseInt32(output[_LBPo]) as number;
  }
  if (output[_IP] != null) {
    contents[_IP] = __expectString(output[_IP]);
  }
  if (output[_IPn] != null) {
    contents[_IPn] = __strictParseInt32(output[_IPn]) as number;
  }
  if (output[_SSLCI] != null) {
    contents[_SSLCI] = __expectString(output[_SSLCI]);
  }
  return contents;
};

/**
 * deserializeAws_queryListenerDescription
 */
const de_ListenerDescription = (output: any, context: __SerdeContext): ListenerDescription => {
  const contents: any = {};
  if (output[_Lis] != null) {
    contents[_Lis] = de_Listener(output[_Lis], context);
  }
  if (String(output.PolicyNames).trim() === "") {
    contents[_PNo] = [];
  } else if (output[_PNo] != null && output[_PNo][_m] != null) {
    contents[_PNo] = de_PolicyNames(__getArrayIfSingleItem(output[_PNo][_m]), context);
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
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
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
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryLoadBalancerAttributes
 */
const de_LoadBalancerAttributes = (output: any, context: __SerdeContext): LoadBalancerAttributes => {
  const contents: any = {};
  if (output[_CZLB] != null) {
    contents[_CZLB] = de_CrossZoneLoadBalancing(output[_CZLB], context);
  }
  if (output[_AL] != null) {
    contents[_AL] = de_AccessLog(output[_AL], context);
  }
  if (output[_CD] != null) {
    contents[_CD] = de_ConnectionDraining(output[_CD], context);
  }
  if (output[_CS] != null) {
    contents[_CS] = de_ConnectionSettings(output[_CS], context);
  }
  if (String(output.AdditionalAttributes).trim() === "") {
    contents[_AA] = [];
  } else if (output[_AA] != null && output[_AA][_m] != null) {
    contents[_AA] = de_AdditionalAttributes(__getArrayIfSingleItem(output[_AA][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryLoadBalancerDescription
 */
const de_LoadBalancerDescription = (output: any, context: __SerdeContext): LoadBalancerDescription => {
  const contents: any = {};
  if (output[_LBN] != null) {
    contents[_LBN] = __expectString(output[_LBN]);
  }
  if (output[_DNSN] != null) {
    contents[_DNSN] = __expectString(output[_DNSN]);
  }
  if (output[_CHZN] != null) {
    contents[_CHZN] = __expectString(output[_CHZN]);
  }
  if (output[_CHZNID] != null) {
    contents[_CHZNID] = __expectString(output[_CHZNID]);
  }
  if (String(output.ListenerDescriptions).trim() === "") {
    contents[_LD] = [];
  } else if (output[_LD] != null && output[_LD][_m] != null) {
    contents[_LD] = de_ListenerDescriptions(__getArrayIfSingleItem(output[_LD][_m]), context);
  }
  if (output[_Po] != null) {
    contents[_Po] = de_Policies(output[_Po], context);
  }
  if (String(output.BackendServerDescriptions).trim() === "") {
    contents[_BSD] = [];
  } else if (output[_BSD] != null && output[_BSD][_m] != null) {
    contents[_BSD] = de_BackendServerDescriptions(__getArrayIfSingleItem(output[_BSD][_m]), context);
  }
  if (String(output.AvailabilityZones).trim() === "") {
    contents[_AZ] = [];
  } else if (output[_AZ] != null && output[_AZ][_m] != null) {
    contents[_AZ] = de_AvailabilityZones(__getArrayIfSingleItem(output[_AZ][_m]), context);
  }
  if (String(output.Subnets).trim() === "") {
    contents[_S] = [];
  } else if (output[_S] != null && output[_S][_m] != null) {
    contents[_S] = de_Subnets(__getArrayIfSingleItem(output[_S][_m]), context);
  }
  if (output[_VPCI] != null) {
    contents[_VPCI] = __expectString(output[_VPCI]);
  }
  if (String(output.Instances).trim() === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_m] != null) {
    contents[_I] = de_Instances(__getArrayIfSingleItem(output[_I][_m]), context);
  }
  if (output[_HC] != null) {
    contents[_HC] = de_HealthCheck(output[_HC], context);
  }
  if (output[_SSG] != null) {
    contents[_SSG] = de_SourceSecurityGroup(output[_SSG], context);
  }
  if (String(output.SecurityGroups).trim() === "") {
    contents[_SG] = [];
  } else if (output[_SG] != null && output[_SG][_m] != null) {
    contents[_SG] = de_SecurityGroups(__getArrayIfSingleItem(output[_SG][_m]), context);
  }
  if (output[_CT] != null) {
    contents[_CT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CT]));
  }
  if (output[_Sc] != null) {
    contents[_Sc] = __expectString(output[_Sc]);
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
  if (output[_LBN] != null) {
    contents[_LBN] = __expectString(output[_LBN]);
  }
  if (output[_LBA] != null) {
    contents[_LBA] = de_LoadBalancerAttributes(output[_LBA], context);
  }
  return contents;
};

/**
 * deserializeAws_queryOperationNotPermittedException
 */
const de_OperationNotPermittedException = (output: any, context: __SerdeContext): OperationNotPermittedException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryPolicies
 */
const de_Policies = (output: any, context: __SerdeContext): Policies => {
  const contents: any = {};
  if (String(output.AppCookieStickinessPolicies).trim() === "") {
    contents[_ACSP] = [];
  } else if (output[_ACSP] != null && output[_ACSP][_m] != null) {
    contents[_ACSP] = de_AppCookieStickinessPolicies(__getArrayIfSingleItem(output[_ACSP][_m]), context);
  }
  if (String(output.LBCookieStickinessPolicies).trim() === "") {
    contents[_LBCSP] = [];
  } else if (output[_LBCSP] != null && output[_LBCSP][_m] != null) {
    contents[_LBCSP] = de_LBCookieStickinessPolicies(__getArrayIfSingleItem(output[_LBCSP][_m]), context);
  }
  if (String(output.OtherPolicies).trim() === "") {
    contents[_OP] = [];
  } else if (output[_OP] != null && output[_OP][_m] != null) {
    contents[_OP] = de_PolicyNames(__getArrayIfSingleItem(output[_OP][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryPolicyAttributeDescription
 */
const de_PolicyAttributeDescription = (output: any, context: __SerdeContext): PolicyAttributeDescription => {
  const contents: any = {};
  if (output[_AN] != null) {
    contents[_AN] = __expectString(output[_AN]);
  }
  if (output[_AV] != null) {
    contents[_AV] = __expectString(output[_AV]);
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
  if (output[_AN] != null) {
    contents[_AN] = __expectString(output[_AN]);
  }
  if (output[_ATt] != null) {
    contents[_ATt] = __expectString(output[_ATt]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_DV] != null) {
    contents[_DV] = __expectString(output[_DV]);
  }
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
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
  if (output[_PN] != null) {
    contents[_PN] = __expectString(output[_PN]);
  }
  if (output[_PTN] != null) {
    contents[_PTN] = __expectString(output[_PTN]);
  }
  if (String(output.PolicyAttributeDescriptions).trim() === "") {
    contents[_PAD] = [];
  } else if (output[_PAD] != null && output[_PAD][_m] != null) {
    contents[_PAD] = de_PolicyAttributeDescriptions(__getArrayIfSingleItem(output[_PAD][_m]), context);
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
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryPolicyTypeDescription
 */
const de_PolicyTypeDescription = (output: any, context: __SerdeContext): PolicyTypeDescription => {
  const contents: any = {};
  if (output[_PTN] != null) {
    contents[_PTN] = __expectString(output[_PTN]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (String(output.PolicyAttributeTypeDescriptions).trim() === "") {
    contents[_PATD] = [];
  } else if (output[_PATD] != null && output[_PATD][_m] != null) {
    contents[_PATD] = de_PolicyAttributeTypeDescriptions(__getArrayIfSingleItem(output[_PATD][_m]), context);
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
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryRegisterEndPointsOutput
 */
const de_RegisterEndPointsOutput = (output: any, context: __SerdeContext): RegisterEndPointsOutput => {
  const contents: any = {};
  if (String(output.Instances).trim() === "") {
    contents[_I] = [];
  } else if (output[_I] != null && output[_I][_m] != null) {
    contents[_I] = de_Instances(__getArrayIfSingleItem(output[_I][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryRemoveAvailabilityZonesOutput
 */
const de_RemoveAvailabilityZonesOutput = (output: any, context: __SerdeContext): RemoveAvailabilityZonesOutput => {
  const contents: any = {};
  if (String(output.AvailabilityZones).trim() === "") {
    contents[_AZ] = [];
  } else if (output[_AZ] != null && output[_AZ][_m] != null) {
    contents[_AZ] = de_AvailabilityZones(__getArrayIfSingleItem(output[_AZ][_m]), context);
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
  if (output[_OA] != null) {
    contents[_OA] = __expectString(output[_OA]);
  }
  if (output[_GN] != null) {
    contents[_GN] = __expectString(output[_GN]);
  }
  return contents;
};

/**
 * deserializeAws_querySubnetNotFoundException
 */
const de_SubnetNotFoundException = (output: any, context: __SerdeContext): SubnetNotFoundException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
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
  if (output[_K] != null) {
    contents[_K] = __expectString(output[_K]);
  }
  if (output[_Va] != null) {
    contents[_Va] = __expectString(output[_Va]);
  }
  return contents;
};

/**
 * deserializeAws_queryTagDescription
 */
const de_TagDescription = (output: any, context: __SerdeContext): TagDescription => {
  const contents: any = {};
  if (output[_LBN] != null) {
    contents[_LBN] = __expectString(output[_LBN]);
  }
  if (String(output.Tags).trim() === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_m] != null) {
    contents[_T] = de_TagList(__getArrayIfSingleItem(output[_T][_m]), context);
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
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyPoliciesException
 */
const de_TooManyPoliciesException = (output: any, context: __SerdeContext): TooManyPoliciesException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyTagsException
 */
const de_TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryUnsupportedProtocolException
 */
const de_UnsupportedProtocolException = (output: any, context: __SerdeContext): UnsupportedProtocolException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
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

const _ = "2012-06-01";
const _A = "Action";
const _AA = "AdditionalAttributes";
const _ACSP = "AppCookieStickinessPolicies";
const _AL = "AccessLog";
const _ALBTS = "AttachLoadBalancerToSubnets";
const _AN = "AttributeName";
const _ASGTLB = "ApplySecurityGroupsToLoadBalancer";
const _AT = "AddTags";
const _ATt = "AttributeType";
const _AV = "AttributeValue";
const _AZ = "AvailabilityZones";
const _BSD = "BackendServerDescriptions";
const _C = "Cardinality";
const _CACSP = "CreateAppCookieStickinessPolicy";
const _CD = "ConnectionDraining";
const _CEP = "CookieExpirationPeriod";
const _CHC = "ConfigureHealthCheck";
const _CHZN = "CanonicalHostedZoneName";
const _CHZNID = "CanonicalHostedZoneNameID";
const _CLB = "CreateLoadBalancer";
const _CLBCSP = "CreateLBCookieStickinessPolicy";
const _CLBL = "CreateLoadBalancerListeners";
const _CLBP = "CreateLoadBalancerPolicy";
const _CN = "CookieName";
const _CS = "ConnectionSettings";
const _CT = "CreatedTime";
const _CZLB = "CrossZoneLoadBalancing";
const _D = "Description";
const _DAL = "DescribeAccountLimits";
const _DAZFLB = "DisableAvailabilityZonesForLoadBalancer";
const _DIFLB = "DeregisterInstancesFromLoadBalancer";
const _DIH = "DescribeInstanceHealth";
const _DLB = "DeleteLoadBalancer";
const _DLBA = "DescribeLoadBalancerAttributes";
const _DLBFS = "DetachLoadBalancerFromSubnets";
const _DLBL = "DeleteLoadBalancerListeners";
const _DLBP = "DeleteLoadBalancerPolicy";
const _DLBPT = "DescribeLoadBalancerPolicyTypes";
const _DLBPe = "DescribeLoadBalancerPolicies";
const _DLBe = "DescribeLoadBalancers";
const _DNSN = "DNSName";
const _DT = "DescribeTags";
const _DV = "DefaultValue";
const _E = "Enabled";
const _EAZFLB = "EnableAvailabilityZonesForLoadBalancer";
const _EI = "EmitInterval";
const _GN = "GroupName";
const _HC = "HealthCheck";
const _HT = "HealthyThreshold";
const _I = "Instances";
const _II = "InstanceId";
const _IP = "InstanceProtocol";
const _IPn = "InstancePort";
const _IS = "InstanceStates";
const _IT = "IdleTimeout";
const _In = "Interval";
const _K = "Key";
const _L = "Listeners";
const _LBA = "LoadBalancerAttributes";
const _LBCSP = "LBCookieStickinessPolicies";
const _LBD = "LoadBalancerDescriptions";
const _LBN = "LoadBalancerName";
const _LBNo = "LoadBalancerNames";
const _LBP = "LoadBalancerPorts";
const _LBPo = "LoadBalancerPort";
const _LD = "ListenerDescriptions";
const _Li = "Limits";
const _Lis = "Listener";
const _M = "Marker";
const _MLBA = "ModifyLoadBalancerAttributes";
const _Ma = "Max";
const _Me = "Message";
const _N = "Name";
const _NM = "NextMarker";
const _OA = "OwnerAlias";
const _OP = "OtherPolicies";
const _P = "Protocol";
const _PA = "PolicyAttributes";
const _PAD = "PolicyAttributeDescriptions";
const _PATD = "PolicyAttributeTypeDescriptions";
const _PD = "PolicyDescriptions";
const _PN = "PolicyName";
const _PNo = "PolicyNames";
const _PS = "PageSize";
const _PTD = "PolicyTypeDescriptions";
const _PTN = "PolicyTypeName";
const _PTNo = "PolicyTypeNames";
const _Po = "Policies";
const _RC = "ReasonCode";
const _RIWLB = "RegisterInstancesWithLoadBalancer";
const _RT = "RemoveTags";
const _S = "Subnets";
const _SBN = "S3BucketName";
const _SBP = "S3BucketPrefix";
const _SG = "SecurityGroups";
const _SLBLSSLC = "SetLoadBalancerListenerSSLCertificate";
const _SLBPFBS = "SetLoadBalancerPoliciesForBackendServer";
const _SLBPOL = "SetLoadBalancerPoliciesOfListener";
const _SSG = "SourceSecurityGroup";
const _SSLCI = "SSLCertificateId";
const _Sc = "Scheme";
const _St = "State";
const _T = "Tags";
const _TD = "TagDescriptions";
const _Ta = "Target";
const _Ti = "Timeout";
const _UT = "UnhealthyThreshold";
const _V = "Version";
const _VPCI = "VPCId";
const _Va = "Value";
const _m = "member";

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
