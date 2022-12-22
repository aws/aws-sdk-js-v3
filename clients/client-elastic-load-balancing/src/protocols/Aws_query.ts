// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTime as __parseRfc3339DateTime,
  strictParseInt32 as __strictParseInt32,
  strictParseLong as __strictParseLong,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
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

export const serializeAws_queryAddTagsCommand = async (
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAddTagsInput(input, context),
    Action: "AddTags",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryApplySecurityGroupsToLoadBalancerCommand = async (
  input: ApplySecurityGroupsToLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryApplySecurityGroupsToLoadBalancerInput(input, context),
    Action: "ApplySecurityGroupsToLoadBalancer",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryAttachLoadBalancerToSubnetsCommand = async (
  input: AttachLoadBalancerToSubnetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAttachLoadBalancerToSubnetsInput(input, context),
    Action: "AttachLoadBalancerToSubnets",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryConfigureHealthCheckCommand = async (
  input: ConfigureHealthCheckCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryConfigureHealthCheckInput(input, context),
    Action: "ConfigureHealthCheck",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateAppCookieStickinessPolicyCommand = async (
  input: CreateAppCookieStickinessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateAppCookieStickinessPolicyInput(input, context),
    Action: "CreateAppCookieStickinessPolicy",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateLBCookieStickinessPolicyCommand = async (
  input: CreateLBCookieStickinessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateLBCookieStickinessPolicyInput(input, context),
    Action: "CreateLBCookieStickinessPolicy",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateLoadBalancerCommand = async (
  input: CreateLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateAccessPointInput(input, context),
    Action: "CreateLoadBalancer",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateLoadBalancerListenersCommand = async (
  input: CreateLoadBalancerListenersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateLoadBalancerListenerInput(input, context),
    Action: "CreateLoadBalancerListeners",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateLoadBalancerPolicyCommand = async (
  input: CreateLoadBalancerPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateLoadBalancerPolicyInput(input, context),
    Action: "CreateLoadBalancerPolicy",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteLoadBalancerCommand = async (
  input: DeleteLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteAccessPointInput(input, context),
    Action: "DeleteLoadBalancer",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteLoadBalancerListenersCommand = async (
  input: DeleteLoadBalancerListenersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteLoadBalancerListenerInput(input, context),
    Action: "DeleteLoadBalancerListeners",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteLoadBalancerPolicyCommand = async (
  input: DeleteLoadBalancerPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteLoadBalancerPolicyInput(input, context),
    Action: "DeleteLoadBalancerPolicy",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeregisterInstancesFromLoadBalancerCommand = async (
  input: DeregisterInstancesFromLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeregisterEndPointsInput(input, context),
    Action: "DeregisterInstancesFromLoadBalancer",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAccountLimitsCommand = async (
  input: DescribeAccountLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeAccountLimitsInput(input, context),
    Action: "DescribeAccountLimits",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeInstanceHealthCommand = async (
  input: DescribeInstanceHealthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeEndPointStateInput(input, context),
    Action: "DescribeInstanceHealth",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeLoadBalancerAttributesCommand = async (
  input: DescribeLoadBalancerAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeLoadBalancerAttributesInput(input, context),
    Action: "DescribeLoadBalancerAttributes",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeLoadBalancerPoliciesCommand = async (
  input: DescribeLoadBalancerPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeLoadBalancerPoliciesInput(input, context),
    Action: "DescribeLoadBalancerPolicies",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeLoadBalancerPolicyTypesCommand = async (
  input: DescribeLoadBalancerPolicyTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeLoadBalancerPolicyTypesInput(input, context),
    Action: "DescribeLoadBalancerPolicyTypes",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeLoadBalancersCommand = async (
  input: DescribeLoadBalancersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeAccessPointsInput(input, context),
    Action: "DescribeLoadBalancers",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeTagsCommand = async (
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeTagsInput(input, context),
    Action: "DescribeTags",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDetachLoadBalancerFromSubnetsCommand = async (
  input: DetachLoadBalancerFromSubnetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDetachLoadBalancerFromSubnetsInput(input, context),
    Action: "DetachLoadBalancerFromSubnets",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand = async (
  input: DisableAvailabilityZonesForLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRemoveAvailabilityZonesInput(input, context),
    Action: "DisableAvailabilityZonesForLoadBalancer",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand = async (
  input: EnableAvailabilityZonesForLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAddAvailabilityZonesInput(input, context),
    Action: "EnableAvailabilityZonesForLoadBalancer",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryModifyLoadBalancerAttributesCommand = async (
  input: ModifyLoadBalancerAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryModifyLoadBalancerAttributesInput(input, context),
    Action: "ModifyLoadBalancerAttributes",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRegisterInstancesWithLoadBalancerCommand = async (
  input: RegisterInstancesWithLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRegisterEndPointsInput(input, context),
    Action: "RegisterInstancesWithLoadBalancer",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRemoveTagsCommand = async (
  input: RemoveTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRemoveTagsInput(input, context),
    Action: "RemoveTags",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetLoadBalancerListenerSSLCertificateCommand = async (
  input: SetLoadBalancerListenerSSLCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetLoadBalancerListenerSSLCertificateInput(input, context),
    Action: "SetLoadBalancerListenerSSLCertificate",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetLoadBalancerPoliciesForBackendServerCommand = async (
  input: SetLoadBalancerPoliciesForBackendServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetLoadBalancerPoliciesForBackendServerInput(input, context),
    Action: "SetLoadBalancerPoliciesForBackendServer",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetLoadBalancerPoliciesOfListenerCommand = async (
  input: SetLoadBalancerPoliciesOfListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetLoadBalancerPoliciesOfListenerInput(input, context),
    Action: "SetLoadBalancerPoliciesOfListener",
    Version: "2012-06-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_queryAddTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAddTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAddTagsOutput(data.AddTagsResult, context);
  const response: AddTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAddTagsCommandError = async (
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
      throw await deserializeAws_queryDuplicateTagKeysExceptionResponse(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTags":
    case "com.amazonaws.elasticloadbalancing#TooManyTagsException":
      throw await deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryApplySecurityGroupsToLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplySecurityGroupsToLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryApplySecurityGroupsToLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryApplySecurityGroupsToLoadBalancerOutput(
    data.ApplySecurityGroupsToLoadBalancerResult,
    context
  );
  const response: ApplySecurityGroupsToLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryApplySecurityGroupsToLoadBalancerCommandError = async (
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
      throw await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context);
    case "InvalidSecurityGroup":
    case "com.amazonaws.elasticloadbalancing#InvalidSecurityGroupException":
      throw await deserializeAws_queryInvalidSecurityGroupExceptionResponse(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryAttachLoadBalancerToSubnetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachLoadBalancerToSubnetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAttachLoadBalancerToSubnetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAttachLoadBalancerToSubnetsOutput(data.AttachLoadBalancerToSubnetsResult, context);
  const response: AttachLoadBalancerToSubnetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAttachLoadBalancerToSubnetsCommandError = async (
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
      throw await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.elasticloadbalancing#InvalidSubnetException":
      throw await deserializeAws_queryInvalidSubnetExceptionResponse(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context);
    case "SubnetNotFound":
    case "com.amazonaws.elasticloadbalancing#SubnetNotFoundException":
      throw await deserializeAws_querySubnetNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryConfigureHealthCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureHealthCheckCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryConfigureHealthCheckCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryConfigureHealthCheckOutput(data.ConfigureHealthCheckResult, context);
  const response: ConfigureHealthCheckCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryConfigureHealthCheckCommandError = async (
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
      throw await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateAppCookieStickinessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCookieStickinessPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateAppCookieStickinessPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateAppCookieStickinessPolicyOutput(
    data.CreateAppCookieStickinessPolicyResult,
    context
  );
  const response: CreateAppCookieStickinessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateAppCookieStickinessPolicyCommandError = async (
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
      throw await deserializeAws_queryDuplicatePolicyNameExceptionResponse(parsedOutput, context);
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
      throw await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyPolicies":
    case "com.amazonaws.elasticloadbalancing#TooManyPoliciesException":
      throw await deserializeAws_queryTooManyPoliciesExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateLBCookieStickinessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLBCookieStickinessPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateLBCookieStickinessPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateLBCookieStickinessPolicyOutput(
    data.CreateLBCookieStickinessPolicyResult,
    context
  );
  const response: CreateLBCookieStickinessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateLBCookieStickinessPolicyCommandError = async (
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
      throw await deserializeAws_queryDuplicatePolicyNameExceptionResponse(parsedOutput, context);
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
      throw await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyPolicies":
    case "com.amazonaws.elasticloadbalancing#TooManyPoliciesException":
      throw await deserializeAws_queryTooManyPoliciesExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateAccessPointOutput(data.CreateLoadBalancerResult, context);
  const response: CreateLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateLoadBalancerCommandError = async (
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
      throw await deserializeAws_queryCertificateNotFoundExceptionResponse(parsedOutput, context);
    case "DuplicateLoadBalancerName":
    case "com.amazonaws.elasticloadbalancing#DuplicateAccessPointNameException":
      throw await deserializeAws_queryDuplicateAccessPointNameExceptionResponse(parsedOutput, context);
    case "DuplicateTagKeys":
    case "com.amazonaws.elasticloadbalancing#DuplicateTagKeysException":
      throw await deserializeAws_queryDuplicateTagKeysExceptionResponse(parsedOutput, context);
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
      throw await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context);
    case "InvalidScheme":
    case "com.amazonaws.elasticloadbalancing#InvalidSchemeException":
      throw await deserializeAws_queryInvalidSchemeExceptionResponse(parsedOutput, context);
    case "InvalidSecurityGroup":
    case "com.amazonaws.elasticloadbalancing#InvalidSecurityGroupException":
      throw await deserializeAws_queryInvalidSecurityGroupExceptionResponse(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.elasticloadbalancing#InvalidSubnetException":
      throw await deserializeAws_queryInvalidSubnetExceptionResponse(parsedOutput, context);
    case "OperationNotPermitted":
    case "com.amazonaws.elasticloadbalancing#OperationNotPermittedException":
      throw await deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context);
    case "SubnetNotFound":
    case "com.amazonaws.elasticloadbalancing#SubnetNotFoundException":
      throw await deserializeAws_querySubnetNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyLoadBalancers":
    case "com.amazonaws.elasticloadbalancing#TooManyAccessPointsException":
      throw await deserializeAws_queryTooManyAccessPointsExceptionResponse(parsedOutput, context);
    case "TooManyTags":
    case "com.amazonaws.elasticloadbalancing#TooManyTagsException":
      throw await deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context);
    case "UnsupportedProtocol":
    case "com.amazonaws.elasticloadbalancing#UnsupportedProtocolException":
      throw await deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateLoadBalancerListenersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerListenersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateLoadBalancerListenersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateLoadBalancerListenerOutput(data.CreateLoadBalancerListenersResult, context);
  const response: CreateLoadBalancerListenersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateLoadBalancerListenersCommandError = async (
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
      throw await deserializeAws_queryCertificateNotFoundExceptionResponse(parsedOutput, context);
    case "DuplicateListener":
    case "com.amazonaws.elasticloadbalancing#DuplicateListenerException":
      throw await deserializeAws_queryDuplicateListenerExceptionResponse(parsedOutput, context);
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
      throw await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedProtocol":
    case "com.amazonaws.elasticloadbalancing#UnsupportedProtocolException":
      throw await deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateLoadBalancerPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateLoadBalancerPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateLoadBalancerPolicyOutput(data.CreateLoadBalancerPolicyResult, context);
  const response: CreateLoadBalancerPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateLoadBalancerPolicyCommandError = async (
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
      throw await deserializeAws_queryDuplicatePolicyNameExceptionResponse(parsedOutput, context);
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
      throw await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context);
    case "PolicyTypeNotFound":
    case "com.amazonaws.elasticloadbalancing#PolicyTypeNotFoundException":
      throw await deserializeAws_queryPolicyTypeNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyPolicies":
    case "com.amazonaws.elasticloadbalancing#TooManyPoliciesException":
      throw await deserializeAws_queryTooManyPoliciesExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteAccessPointOutput(data.DeleteLoadBalancerResult, context);
  const response: DeleteLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteLoadBalancerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryDeleteLoadBalancerListenersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerListenersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteLoadBalancerListenersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteLoadBalancerListenerOutput(data.DeleteLoadBalancerListenersResult, context);
  const response: DeleteLoadBalancerListenersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteLoadBalancerListenersCommandError = async (
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
      throw await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteLoadBalancerPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteLoadBalancerPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteLoadBalancerPolicyOutput(data.DeleteLoadBalancerPolicyResult, context);
  const response: DeleteLoadBalancerPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteLoadBalancerPolicyCommandError = async (
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
      throw await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeregisterInstancesFromLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterInstancesFromLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeregisterInstancesFromLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeregisterEndPointsOutput(data.DeregisterInstancesFromLoadBalancerResult, context);
  const response: DeregisterInstancesFromLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeregisterInstancesFromLoadBalancerCommandError = async (
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
      throw await deserializeAws_queryInvalidEndPointExceptionResponse(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeAccountLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeAccountLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAccountLimitsOutput(data.DescribeAccountLimitsResult, context);
  const response: DescribeAccountLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAccountLimitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryDescribeInstanceHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceHealthCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeInstanceHealthCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeEndPointStateOutput(data.DescribeInstanceHealthResult, context);
  const response: DescribeInstanceHealthCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeInstanceHealthCommandError = async (
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
      throw await deserializeAws_queryInvalidEndPointExceptionResponse(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeLoadBalancerAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeLoadBalancerAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeLoadBalancerAttributesOutput(
    data.DescribeLoadBalancerAttributesResult,
    context
  );
  const response: DescribeLoadBalancerAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeLoadBalancerAttributesCommandError = async (
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
      throw await deserializeAws_queryLoadBalancerAttributeNotFoundExceptionResponse(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeLoadBalancerPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeLoadBalancerPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeLoadBalancerPoliciesOutput(data.DescribeLoadBalancerPoliciesResult, context);
  const response: DescribeLoadBalancerPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeLoadBalancerPoliciesCommandError = async (
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
      throw await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context);
    case "PolicyNotFound":
    case "com.amazonaws.elasticloadbalancing#PolicyNotFoundException":
      throw await deserializeAws_queryPolicyNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeLoadBalancerPolicyTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerPolicyTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeLoadBalancerPolicyTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeLoadBalancerPolicyTypesOutput(
    data.DescribeLoadBalancerPolicyTypesResult,
    context
  );
  const response: DescribeLoadBalancerPolicyTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeLoadBalancerPolicyTypesCommandError = async (
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
      throw await deserializeAws_queryPolicyTypeNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeLoadBalancersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeLoadBalancersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAccessPointsOutput(data.DescribeLoadBalancersResult, context);
  const response: DescribeLoadBalancersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeLoadBalancersCommandError = async (
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
      throw await deserializeAws_queryDependencyThrottleExceptionResponse(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeTagsOutput(data.DescribeTagsResult, context);
  const response: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeTagsCommandError = async (
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
      throw await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDetachLoadBalancerFromSubnetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachLoadBalancerFromSubnetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDetachLoadBalancerFromSubnetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDetachLoadBalancerFromSubnetsOutput(data.DetachLoadBalancerFromSubnetsResult, context);
  const response: DetachLoadBalancerFromSubnetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDetachLoadBalancerFromSubnetsCommandError = async (
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
      throw await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableAvailabilityZonesForLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDisableAvailabilityZonesForLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRemoveAvailabilityZonesOutput(
    data.DisableAvailabilityZonesForLoadBalancerResult,
    context
  );
  const response: DisableAvailabilityZonesForLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDisableAvailabilityZonesForLoadBalancerCommandError = async (
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
      throw await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAvailabilityZonesForLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryEnableAvailabilityZonesForLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAddAvailabilityZonesOutput(data.EnableAvailabilityZonesForLoadBalancerResult, context);
  const response: EnableAvailabilityZonesForLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryEnableAvailabilityZonesForLoadBalancerCommandError = async (
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
      throw await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryModifyLoadBalancerAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyLoadBalancerAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryModifyLoadBalancerAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryModifyLoadBalancerAttributesOutput(data.ModifyLoadBalancerAttributesResult, context);
  const response: ModifyLoadBalancerAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryModifyLoadBalancerAttributesCommandError = async (
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
      throw await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context);
    case "LoadBalancerAttributeNotFound":
    case "com.amazonaws.elasticloadbalancing#LoadBalancerAttributeNotFoundException":
      throw await deserializeAws_queryLoadBalancerAttributeNotFoundExceptionResponse(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryRegisterInstancesWithLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterInstancesWithLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRegisterInstancesWithLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRegisterEndPointsOutput(data.RegisterInstancesWithLoadBalancerResult, context);
  const response: RegisterInstancesWithLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRegisterInstancesWithLoadBalancerCommandError = async (
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
      throw await deserializeAws_queryInvalidEndPointExceptionResponse(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryRemoveTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRemoveTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRemoveTagsOutput(data.RemoveTagsResult, context);
  const response: RemoveTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRemoveTagsCommandError = async (
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
      throw await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_querySetLoadBalancerListenerSSLCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLoadBalancerListenerSSLCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetLoadBalancerListenerSSLCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySetLoadBalancerListenerSSLCertificateOutput(
    data.SetLoadBalancerListenerSSLCertificateResult,
    context
  );
  const response: SetLoadBalancerListenerSSLCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetLoadBalancerListenerSSLCertificateCommandError = async (
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
      throw await deserializeAws_queryCertificateNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
      throw await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context);
    case "ListenerNotFound":
    case "com.amazonaws.elasticloadbalancing#ListenerNotFoundException":
      throw await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedProtocol":
    case "com.amazonaws.elasticloadbalancing#UnsupportedProtocolException":
      throw await deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_querySetLoadBalancerPoliciesForBackendServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLoadBalancerPoliciesForBackendServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetLoadBalancerPoliciesForBackendServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySetLoadBalancerPoliciesForBackendServerOutput(
    data.SetLoadBalancerPoliciesForBackendServerResult,
    context
  );
  const response: SetLoadBalancerPoliciesForBackendServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetLoadBalancerPoliciesForBackendServerCommandError = async (
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
      throw await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context);
    case "PolicyNotFound":
    case "com.amazonaws.elasticloadbalancing#PolicyNotFoundException":
      throw await deserializeAws_queryPolicyNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_querySetLoadBalancerPoliciesOfListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLoadBalancerPoliciesOfListenerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetLoadBalancerPoliciesOfListenerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySetLoadBalancerPoliciesOfListenerOutput(
    data.SetLoadBalancerPoliciesOfListenerResult,
    context
  );
  const response: SetLoadBalancerPoliciesOfListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetLoadBalancerPoliciesOfListenerCommandError = async (
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
      throw await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context);
    case "ListenerNotFound":
    case "com.amazonaws.elasticloadbalancing#ListenerNotFoundException":
      throw await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
      throw await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context);
    case "PolicyNotFound":
    case "com.amazonaws.elasticloadbalancing#PolicyNotFoundException":
      throw await deserializeAws_queryPolicyNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const deserializeAws_queryAccessPointNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessPointNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAccessPointNotFoundException(body.Error, context);
  const exception = new AccessPointNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryCertificateNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CertificateNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCertificateNotFoundException(body.Error, context);
  const exception = new CertificateNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDependencyThrottleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependencyThrottleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDependencyThrottleException(body.Error, context);
  const exception = new DependencyThrottleException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDuplicateAccessPointNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateAccessPointNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDuplicateAccessPointNameException(body.Error, context);
  const exception = new DuplicateAccessPointNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDuplicateListenerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateListenerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDuplicateListenerException(body.Error, context);
  const exception = new DuplicateListenerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDuplicatePolicyNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicatePolicyNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDuplicatePolicyNameException(body.Error, context);
  const exception = new DuplicatePolicyNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryDuplicateTagKeysExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateTagKeysException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDuplicateTagKeysException(body.Error, context);
  const exception = new DuplicateTagKeysException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidConfigurationRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidConfigurationRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidConfigurationRequestException(body.Error, context);
  const exception = new InvalidConfigurationRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidEndPointExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEndPointException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidEndPointException(body.Error, context);
  const exception = new InvalidEndPointException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidSchemeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSchemeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidSchemeException(body.Error, context);
  const exception = new InvalidSchemeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidSecurityGroupExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSecurityGroupException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidSecurityGroupException(body.Error, context);
  const exception = new InvalidSecurityGroupException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidSubnetExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSubnetException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidSubnetException(body.Error, context);
  const exception = new InvalidSubnetException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryListenerNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ListenerNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryListenerNotFoundException(body.Error, context);
  const exception = new ListenerNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryLoadBalancerAttributeNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LoadBalancerAttributeNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryLoadBalancerAttributeNotFoundException(body.Error, context);
  const exception = new LoadBalancerAttributeNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryOperationNotPermittedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotPermittedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryOperationNotPermittedException(body.Error, context);
  const exception = new OperationNotPermittedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryPolicyNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryPolicyNotFoundException(body.Error, context);
  const exception = new PolicyNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryPolicyTypeNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyTypeNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryPolicyTypeNotFoundException(body.Error, context);
  const exception = new PolicyTypeNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySubnetNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySubnetNotFoundException(body.Error, context);
  const exception = new SubnetNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTooManyAccessPointsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyAccessPointsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyAccessPointsException(body.Error, context);
  const exception = new TooManyAccessPointsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTooManyPoliciesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyPoliciesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyPoliciesException(body.Error, context);
  const exception = new TooManyPoliciesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyTagsException(body.Error, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryUnsupportedProtocolExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedProtocolException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryUnsupportedProtocolException(body.Error, context);
  const exception = new UnsupportedProtocolException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_queryAccessLog = (input: AccessLog, context: __SerdeContext): any => {
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

const serializeAws_queryAddAvailabilityZonesInput = (
  input: AddAvailabilityZonesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.AvailabilityZones != null) {
    const memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
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

const serializeAws_queryAdditionalAttribute = (input: AdditionalAttribute, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key != null) {
    entries["Key"] = input.Key;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryAdditionalAttributes = (input: AdditionalAttribute[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryAdditionalAttribute(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryAddTagsInput = (input: AddTagsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerNames != null) {
    const memberEntries = serializeAws_queryLoadBalancerNames(input.LoadBalancerNames, context);
    if (input.LoadBalancerNames?.length === 0) {
      entries.LoadBalancerNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoadBalancerNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
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

const serializeAws_queryApplySecurityGroupsToLoadBalancerInput = (
  input: ApplySecurityGroupsToLoadBalancerInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.SecurityGroups != null) {
    const memberEntries = serializeAws_querySecurityGroups(input.SecurityGroups, context);
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

const serializeAws_queryAttachLoadBalancerToSubnetsInput = (
  input: AttachLoadBalancerToSubnetsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.Subnets != null) {
    const memberEntries = serializeAws_querySubnets(input.Subnets, context);
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

const serializeAws_queryAvailabilityZones = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryConfigureHealthCheckInput = (
  input: ConfigureHealthCheckInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.HealthCheck != null) {
    const memberEntries = serializeAws_queryHealthCheck(input.HealthCheck, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `HealthCheck.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryConnectionDraining = (input: ConnectionDraining, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Enabled != null) {
    entries["Enabled"] = input.Enabled;
  }
  if (input.Timeout != null) {
    entries["Timeout"] = input.Timeout;
  }
  return entries;
};

const serializeAws_queryConnectionSettings = (input: ConnectionSettings, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.IdleTimeout != null) {
    entries["IdleTimeout"] = input.IdleTimeout;
  }
  return entries;
};

const serializeAws_queryCreateAccessPointInput = (input: CreateAccessPointInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.Listeners != null) {
    const memberEntries = serializeAws_queryListeners(input.Listeners, context);
    if (input.Listeners?.length === 0) {
      entries.Listeners = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Listeners.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AvailabilityZones != null) {
    const memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
    if (input.AvailabilityZones?.length === 0) {
      entries.AvailabilityZones = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Subnets != null) {
    const memberEntries = serializeAws_querySubnets(input.Subnets, context);
    if (input.Subnets?.length === 0) {
      entries.Subnets = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Subnets.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SecurityGroups != null) {
    const memberEntries = serializeAws_querySecurityGroups(input.SecurityGroups, context);
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
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
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

const serializeAws_queryCreateAppCookieStickinessPolicyInput = (
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

const serializeAws_queryCreateLBCookieStickinessPolicyInput = (
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

const serializeAws_queryCreateLoadBalancerListenerInput = (
  input: CreateLoadBalancerListenerInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.Listeners != null) {
    const memberEntries = serializeAws_queryListeners(input.Listeners, context);
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

const serializeAws_queryCreateLoadBalancerPolicyInput = (
  input: CreateLoadBalancerPolicyInput,
  context: __SerdeContext
): any => {
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
    const memberEntries = serializeAws_queryPolicyAttributes(input.PolicyAttributes, context);
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

const serializeAws_queryCrossZoneLoadBalancing = (input: CrossZoneLoadBalancing, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Enabled != null) {
    entries["Enabled"] = input.Enabled;
  }
  return entries;
};

const serializeAws_queryDeleteAccessPointInput = (input: DeleteAccessPointInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  return entries;
};

const serializeAws_queryDeleteLoadBalancerListenerInput = (
  input: DeleteLoadBalancerListenerInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.LoadBalancerPorts != null) {
    const memberEntries = serializeAws_queryPorts(input.LoadBalancerPorts, context);
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

const serializeAws_queryDeleteLoadBalancerPolicyInput = (
  input: DeleteLoadBalancerPolicyInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.PolicyName != null) {
    entries["PolicyName"] = input.PolicyName;
  }
  return entries;
};

const serializeAws_queryDeregisterEndPointsInput = (input: DeregisterEndPointsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.Instances != null) {
    const memberEntries = serializeAws_queryInstances(input.Instances, context);
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

const serializeAws_queryDescribeAccessPointsInput = (
  input: DescribeAccessPointsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerNames != null) {
    const memberEntries = serializeAws_queryLoadBalancerNames(input.LoadBalancerNames, context);
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

const serializeAws_queryDescribeAccountLimitsInput = (
  input: DescribeAccountLimitsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.PageSize != null) {
    entries["PageSize"] = input.PageSize;
  }
  return entries;
};

const serializeAws_queryDescribeEndPointStateInput = (
  input: DescribeEndPointStateInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.Instances != null) {
    const memberEntries = serializeAws_queryInstances(input.Instances, context);
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

const serializeAws_queryDescribeLoadBalancerAttributesInput = (
  input: DescribeLoadBalancerAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  return entries;
};

const serializeAws_queryDescribeLoadBalancerPoliciesInput = (
  input: DescribeLoadBalancerPoliciesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.PolicyNames != null) {
    const memberEntries = serializeAws_queryPolicyNames(input.PolicyNames, context);
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

const serializeAws_queryDescribeLoadBalancerPolicyTypesInput = (
  input: DescribeLoadBalancerPolicyTypesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.PolicyTypeNames != null) {
    const memberEntries = serializeAws_queryPolicyTypeNames(input.PolicyTypeNames, context);
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

const serializeAws_queryDescribeTagsInput = (input: DescribeTagsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerNames != null) {
    const memberEntries = serializeAws_queryLoadBalancerNamesMax20(input.LoadBalancerNames, context);
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

const serializeAws_queryDetachLoadBalancerFromSubnetsInput = (
  input: DetachLoadBalancerFromSubnetsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.Subnets != null) {
    const memberEntries = serializeAws_querySubnets(input.Subnets, context);
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

const serializeAws_queryHealthCheck = (input: HealthCheck, context: __SerdeContext): any => {
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

const serializeAws_queryInstance = (input: Instance, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.InstanceId != null) {
    entries["InstanceId"] = input.InstanceId;
  }
  return entries;
};

const serializeAws_queryInstances = (input: Instance[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryInstance(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryListener = (input: Listener, context: __SerdeContext): any => {
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

const serializeAws_queryListeners = (input: Listener[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryListener(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryLoadBalancerAttributes = (input: LoadBalancerAttributes, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.CrossZoneLoadBalancing != null) {
    const memberEntries = serializeAws_queryCrossZoneLoadBalancing(input.CrossZoneLoadBalancing, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CrossZoneLoadBalancing.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AccessLog != null) {
    const memberEntries = serializeAws_queryAccessLog(input.AccessLog, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AccessLog.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ConnectionDraining != null) {
    const memberEntries = serializeAws_queryConnectionDraining(input.ConnectionDraining, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ConnectionDraining.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ConnectionSettings != null) {
    const memberEntries = serializeAws_queryConnectionSettings(input.ConnectionSettings, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ConnectionSettings.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AdditionalAttributes != null) {
    const memberEntries = serializeAws_queryAdditionalAttributes(input.AdditionalAttributes, context);
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

const serializeAws_queryLoadBalancerNames = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryLoadBalancerNamesMax20 = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryModifyLoadBalancerAttributesInput = (
  input: ModifyLoadBalancerAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.LoadBalancerAttributes != null) {
    const memberEntries = serializeAws_queryLoadBalancerAttributes(input.LoadBalancerAttributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoadBalancerAttributes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryPolicyAttribute = (input: PolicyAttribute, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AttributeName != null) {
    entries["AttributeName"] = input.AttributeName;
  }
  if (input.AttributeValue != null) {
    entries["AttributeValue"] = input.AttributeValue;
  }
  return entries;
};

const serializeAws_queryPolicyAttributes = (input: PolicyAttribute[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryPolicyAttribute(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryPolicyNames = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryPolicyTypeNames = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryPorts = (input: number[], context: __SerdeContext): any => {
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

const serializeAws_queryRegisterEndPointsInput = (input: RegisterEndPointsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.Instances != null) {
    const memberEntries = serializeAws_queryInstances(input.Instances, context);
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

const serializeAws_queryRemoveAvailabilityZonesInput = (
  input: RemoveAvailabilityZonesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LoadBalancerName != null) {
    entries["LoadBalancerName"] = input.LoadBalancerName;
  }
  if (input.AvailabilityZones != null) {
    const memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
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

const serializeAws_queryRemoveTagsInput = (input: RemoveTagsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LoadBalancerNames != null) {
    const memberEntries = serializeAws_queryLoadBalancerNames(input.LoadBalancerNames, context);
    if (input.LoadBalancerNames?.length === 0) {
      entries.LoadBalancerNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoadBalancerNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTagKeyList(input.Tags, context);
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

const serializeAws_querySecurityGroups = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_querySetLoadBalancerListenerSSLCertificateInput = (
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

const serializeAws_querySetLoadBalancerPoliciesForBackendServerInput = (
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
    const memberEntries = serializeAws_queryPolicyNames(input.PolicyNames, context);
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

const serializeAws_querySetLoadBalancerPoliciesOfListenerInput = (
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
    const memberEntries = serializeAws_queryPolicyNames(input.PolicyNames, context);
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

const serializeAws_querySubnets = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryTag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key != null) {
    entries["Key"] = input.Key;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryTagKeyList = (input: TagKeyOnly[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryTagKeyOnly(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryTagKeyOnly = (input: TagKeyOnly, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key != null) {
    entries["Key"] = input.Key;
  }
  return entries;
};

const serializeAws_queryTagList = (input: Tag[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryTag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const deserializeAws_queryAccessLog = (output: any, context: __SerdeContext): AccessLog => {
  const contents: any = {
    Enabled: undefined,
    S3BucketName: undefined,
    EmitInterval: undefined,
    S3BucketPrefix: undefined,
  };
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

const deserializeAws_queryAccessPointNotFoundException = (
  output: any,
  context: __SerdeContext
): AccessPointNotFoundException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryAddAvailabilityZonesOutput = (
  output: any,
  context: __SerdeContext
): AddAvailabilityZonesOutput => {
  const contents: any = {
    AvailabilityZones: undefined,
  };
  if (output.AvailabilityZones === "") {
    contents.AvailabilityZones = [];
  } else if (output["AvailabilityZones"] !== undefined && output["AvailabilityZones"]["member"] !== undefined) {
    contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(
      __getArrayIfSingleItem(output["AvailabilityZones"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryAdditionalAttribute = (output: any, context: __SerdeContext): AdditionalAttribute => {
  const contents: any = {
    Key: undefined,
    Value: undefined,
  };
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

const deserializeAws_queryAdditionalAttributes = (output: any, context: __SerdeContext): AdditionalAttribute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryAdditionalAttribute(entry, context);
    });
};

const deserializeAws_queryAddTagsOutput = (output: any, context: __SerdeContext): AddTagsOutput => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryAppCookieStickinessPolicies = (
  output: any,
  context: __SerdeContext
): AppCookieStickinessPolicy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryAppCookieStickinessPolicy(entry, context);
    });
};

const deserializeAws_queryAppCookieStickinessPolicy = (
  output: any,
  context: __SerdeContext
): AppCookieStickinessPolicy => {
  const contents: any = {
    PolicyName: undefined,
    CookieName: undefined,
  };
  if (output["PolicyName"] !== undefined) {
    contents.PolicyName = __expectString(output["PolicyName"]);
  }
  if (output["CookieName"] !== undefined) {
    contents.CookieName = __expectString(output["CookieName"]);
  }
  return contents;
};

const deserializeAws_queryApplySecurityGroupsToLoadBalancerOutput = (
  output: any,
  context: __SerdeContext
): ApplySecurityGroupsToLoadBalancerOutput => {
  const contents: any = {
    SecurityGroups: undefined,
  };
  if (output.SecurityGroups === "") {
    contents.SecurityGroups = [];
  } else if (output["SecurityGroups"] !== undefined && output["SecurityGroups"]["member"] !== undefined) {
    contents.SecurityGroups = deserializeAws_querySecurityGroups(
      __getArrayIfSingleItem(output["SecurityGroups"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryAttachLoadBalancerToSubnetsOutput = (
  output: any,
  context: __SerdeContext
): AttachLoadBalancerToSubnetsOutput => {
  const contents: any = {
    Subnets: undefined,
  };
  if (output.Subnets === "") {
    contents.Subnets = [];
  } else if (output["Subnets"] !== undefined && output["Subnets"]["member"] !== undefined) {
    contents.Subnets = deserializeAws_querySubnets(__getArrayIfSingleItem(output["Subnets"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryAvailabilityZones = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryBackendServerDescription = (
  output: any,
  context: __SerdeContext
): BackendServerDescription => {
  const contents: any = {
    InstancePort: undefined,
    PolicyNames: undefined,
  };
  if (output["InstancePort"] !== undefined) {
    contents.InstancePort = __strictParseInt32(output["InstancePort"]) as number;
  }
  if (output.PolicyNames === "") {
    contents.PolicyNames = [];
  } else if (output["PolicyNames"] !== undefined && output["PolicyNames"]["member"] !== undefined) {
    contents.PolicyNames = deserializeAws_queryPolicyNames(
      __getArrayIfSingleItem(output["PolicyNames"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryBackendServerDescriptions = (
  output: any,
  context: __SerdeContext
): BackendServerDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryBackendServerDescription(entry, context);
    });
};

const deserializeAws_queryCertificateNotFoundException = (
  output: any,
  context: __SerdeContext
): CertificateNotFoundException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryConfigureHealthCheckOutput = (
  output: any,
  context: __SerdeContext
): ConfigureHealthCheckOutput => {
  const contents: any = {
    HealthCheck: undefined,
  };
  if (output["HealthCheck"] !== undefined) {
    contents.HealthCheck = deserializeAws_queryHealthCheck(output["HealthCheck"], context);
  }
  return contents;
};

const deserializeAws_queryConnectionDraining = (output: any, context: __SerdeContext): ConnectionDraining => {
  const contents: any = {
    Enabled: undefined,
    Timeout: undefined,
  };
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["Timeout"] !== undefined) {
    contents.Timeout = __strictParseInt32(output["Timeout"]) as number;
  }
  return contents;
};

const deserializeAws_queryConnectionSettings = (output: any, context: __SerdeContext): ConnectionSettings => {
  const contents: any = {
    IdleTimeout: undefined,
  };
  if (output["IdleTimeout"] !== undefined) {
    contents.IdleTimeout = __strictParseInt32(output["IdleTimeout"]) as number;
  }
  return contents;
};

const deserializeAws_queryCreateAccessPointOutput = (output: any, context: __SerdeContext): CreateAccessPointOutput => {
  const contents: any = {
    DNSName: undefined,
  };
  if (output["DNSName"] !== undefined) {
    contents.DNSName = __expectString(output["DNSName"]);
  }
  return contents;
};

const deserializeAws_queryCreateAppCookieStickinessPolicyOutput = (
  output: any,
  context: __SerdeContext
): CreateAppCookieStickinessPolicyOutput => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryCreateLBCookieStickinessPolicyOutput = (
  output: any,
  context: __SerdeContext
): CreateLBCookieStickinessPolicyOutput => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryCreateLoadBalancerListenerOutput = (
  output: any,
  context: __SerdeContext
): CreateLoadBalancerListenerOutput => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryCreateLoadBalancerPolicyOutput = (
  output: any,
  context: __SerdeContext
): CreateLoadBalancerPolicyOutput => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryCrossZoneLoadBalancing = (output: any, context: __SerdeContext): CrossZoneLoadBalancing => {
  const contents: any = {
    Enabled: undefined,
  };
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  return contents;
};

const deserializeAws_queryDeleteAccessPointOutput = (output: any, context: __SerdeContext): DeleteAccessPointOutput => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryDeleteLoadBalancerListenerOutput = (
  output: any,
  context: __SerdeContext
): DeleteLoadBalancerListenerOutput => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryDeleteLoadBalancerPolicyOutput = (
  output: any,
  context: __SerdeContext
): DeleteLoadBalancerPolicyOutput => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryDependencyThrottleException = (
  output: any,
  context: __SerdeContext
): DependencyThrottleException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryDeregisterEndPointsOutput = (
  output: any,
  context: __SerdeContext
): DeregisterEndPointsOutput => {
  const contents: any = {
    Instances: undefined,
  };
  if (output.Instances === "") {
    contents.Instances = [];
  } else if (output["Instances"] !== undefined && output["Instances"]["member"] !== undefined) {
    contents.Instances = deserializeAws_queryInstances(__getArrayIfSingleItem(output["Instances"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryDescribeAccessPointsOutput = (
  output: any,
  context: __SerdeContext
): DescribeAccessPointsOutput => {
  const contents: any = {
    LoadBalancerDescriptions: undefined,
    NextMarker: undefined,
  };
  if (output.LoadBalancerDescriptions === "") {
    contents.LoadBalancerDescriptions = [];
  } else if (
    output["LoadBalancerDescriptions"] !== undefined &&
    output["LoadBalancerDescriptions"]["member"] !== undefined
  ) {
    contents.LoadBalancerDescriptions = deserializeAws_queryLoadBalancerDescriptions(
      __getArrayIfSingleItem(output["LoadBalancerDescriptions"]["member"]),
      context
    );
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  return contents;
};

const deserializeAws_queryDescribeAccountLimitsOutput = (
  output: any,
  context: __SerdeContext
): DescribeAccountLimitsOutput => {
  const contents: any = {
    Limits: undefined,
    NextMarker: undefined,
  };
  if (output.Limits === "") {
    contents.Limits = [];
  } else if (output["Limits"] !== undefined && output["Limits"]["member"] !== undefined) {
    contents.Limits = deserializeAws_queryLimits(__getArrayIfSingleItem(output["Limits"]["member"]), context);
  }
  if (output["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(output["NextMarker"]);
  }
  return contents;
};

const deserializeAws_queryDescribeEndPointStateOutput = (
  output: any,
  context: __SerdeContext
): DescribeEndPointStateOutput => {
  const contents: any = {
    InstanceStates: undefined,
  };
  if (output.InstanceStates === "") {
    contents.InstanceStates = [];
  } else if (output["InstanceStates"] !== undefined && output["InstanceStates"]["member"] !== undefined) {
    contents.InstanceStates = deserializeAws_queryInstanceStates(
      __getArrayIfSingleItem(output["InstanceStates"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeLoadBalancerAttributesOutput = (
  output: any,
  context: __SerdeContext
): DescribeLoadBalancerAttributesOutput => {
  const contents: any = {
    LoadBalancerAttributes: undefined,
  };
  if (output["LoadBalancerAttributes"] !== undefined) {
    contents.LoadBalancerAttributes = deserializeAws_queryLoadBalancerAttributes(
      output["LoadBalancerAttributes"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeLoadBalancerPoliciesOutput = (
  output: any,
  context: __SerdeContext
): DescribeLoadBalancerPoliciesOutput => {
  const contents: any = {
    PolicyDescriptions: undefined,
  };
  if (output.PolicyDescriptions === "") {
    contents.PolicyDescriptions = [];
  } else if (output["PolicyDescriptions"] !== undefined && output["PolicyDescriptions"]["member"] !== undefined) {
    contents.PolicyDescriptions = deserializeAws_queryPolicyDescriptions(
      __getArrayIfSingleItem(output["PolicyDescriptions"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeLoadBalancerPolicyTypesOutput = (
  output: any,
  context: __SerdeContext
): DescribeLoadBalancerPolicyTypesOutput => {
  const contents: any = {
    PolicyTypeDescriptions: undefined,
  };
  if (output.PolicyTypeDescriptions === "") {
    contents.PolicyTypeDescriptions = [];
  } else if (
    output["PolicyTypeDescriptions"] !== undefined &&
    output["PolicyTypeDescriptions"]["member"] !== undefined
  ) {
    contents.PolicyTypeDescriptions = deserializeAws_queryPolicyTypeDescriptions(
      __getArrayIfSingleItem(output["PolicyTypeDescriptions"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeTagsOutput = (output: any, context: __SerdeContext): DescribeTagsOutput => {
  const contents: any = {
    TagDescriptions: undefined,
  };
  if (output.TagDescriptions === "") {
    contents.TagDescriptions = [];
  } else if (output["TagDescriptions"] !== undefined && output["TagDescriptions"]["member"] !== undefined) {
    contents.TagDescriptions = deserializeAws_queryTagDescriptions(
      __getArrayIfSingleItem(output["TagDescriptions"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDetachLoadBalancerFromSubnetsOutput = (
  output: any,
  context: __SerdeContext
): DetachLoadBalancerFromSubnetsOutput => {
  const contents: any = {
    Subnets: undefined,
  };
  if (output.Subnets === "") {
    contents.Subnets = [];
  } else if (output["Subnets"] !== undefined && output["Subnets"]["member"] !== undefined) {
    contents.Subnets = deserializeAws_querySubnets(__getArrayIfSingleItem(output["Subnets"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryDuplicateAccessPointNameException = (
  output: any,
  context: __SerdeContext
): DuplicateAccessPointNameException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryDuplicateListenerException = (
  output: any,
  context: __SerdeContext
): DuplicateListenerException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryDuplicatePolicyNameException = (
  output: any,
  context: __SerdeContext
): DuplicatePolicyNameException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryDuplicateTagKeysException = (
  output: any,
  context: __SerdeContext
): DuplicateTagKeysException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryHealthCheck = (output: any, context: __SerdeContext): HealthCheck => {
  const contents: any = {
    Target: undefined,
    Interval: undefined,
    Timeout: undefined,
    UnhealthyThreshold: undefined,
    HealthyThreshold: undefined,
  };
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

const deserializeAws_queryInstance = (output: any, context: __SerdeContext): Instance => {
  const contents: any = {
    InstanceId: undefined,
  };
  if (output["InstanceId"] !== undefined) {
    contents.InstanceId = __expectString(output["InstanceId"]);
  }
  return contents;
};

const deserializeAws_queryInstances = (output: any, context: __SerdeContext): Instance[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryInstance(entry, context);
    });
};

const deserializeAws_queryInstanceState = (output: any, context: __SerdeContext): InstanceState => {
  const contents: any = {
    InstanceId: undefined,
    State: undefined,
    ReasonCode: undefined,
    Description: undefined,
  };
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

const deserializeAws_queryInstanceStates = (output: any, context: __SerdeContext): InstanceState[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryInstanceState(entry, context);
    });
};

const deserializeAws_queryInvalidConfigurationRequestException = (
  output: any,
  context: __SerdeContext
): InvalidConfigurationRequestException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidEndPointException = (
  output: any,
  context: __SerdeContext
): InvalidEndPointException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidSchemeException = (output: any, context: __SerdeContext): InvalidSchemeException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidSecurityGroupException = (
  output: any,
  context: __SerdeContext
): InvalidSecurityGroupException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidSubnetException = (output: any, context: __SerdeContext): InvalidSubnetException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryLBCookieStickinessPolicies = (
  output: any,
  context: __SerdeContext
): LBCookieStickinessPolicy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryLBCookieStickinessPolicy(entry, context);
    });
};

const deserializeAws_queryLBCookieStickinessPolicy = (
  output: any,
  context: __SerdeContext
): LBCookieStickinessPolicy => {
  const contents: any = {
    PolicyName: undefined,
    CookieExpirationPeriod: undefined,
  };
  if (output["PolicyName"] !== undefined) {
    contents.PolicyName = __expectString(output["PolicyName"]);
  }
  if (output["CookieExpirationPeriod"] !== undefined) {
    contents.CookieExpirationPeriod = __strictParseLong(output["CookieExpirationPeriod"]) as number;
  }
  return contents;
};

const deserializeAws_queryLimit = (output: any, context: __SerdeContext): Limit => {
  const contents: any = {
    Name: undefined,
    Max: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Max"] !== undefined) {
    contents.Max = __expectString(output["Max"]);
  }
  return contents;
};

const deserializeAws_queryLimits = (output: any, context: __SerdeContext): Limit[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryLimit(entry, context);
    });
};

const deserializeAws_queryListener = (output: any, context: __SerdeContext): Listener => {
  const contents: any = {
    Protocol: undefined,
    LoadBalancerPort: undefined,
    InstanceProtocol: undefined,
    InstancePort: undefined,
    SSLCertificateId: undefined,
  };
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

const deserializeAws_queryListenerDescription = (output: any, context: __SerdeContext): ListenerDescription => {
  const contents: any = {
    Listener: undefined,
    PolicyNames: undefined,
  };
  if (output["Listener"] !== undefined) {
    contents.Listener = deserializeAws_queryListener(output["Listener"], context);
  }
  if (output.PolicyNames === "") {
    contents.PolicyNames = [];
  } else if (output["PolicyNames"] !== undefined && output["PolicyNames"]["member"] !== undefined) {
    contents.PolicyNames = deserializeAws_queryPolicyNames(
      __getArrayIfSingleItem(output["PolicyNames"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryListenerDescriptions = (output: any, context: __SerdeContext): ListenerDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryListenerDescription(entry, context);
    });
};

const deserializeAws_queryListenerNotFoundException = (
  output: any,
  context: __SerdeContext
): ListenerNotFoundException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryLoadBalancerAttributeNotFoundException = (
  output: any,
  context: __SerdeContext
): LoadBalancerAttributeNotFoundException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryLoadBalancerAttributes = (output: any, context: __SerdeContext): LoadBalancerAttributes => {
  const contents: any = {
    CrossZoneLoadBalancing: undefined,
    AccessLog: undefined,
    ConnectionDraining: undefined,
    ConnectionSettings: undefined,
    AdditionalAttributes: undefined,
  };
  if (output["CrossZoneLoadBalancing"] !== undefined) {
    contents.CrossZoneLoadBalancing = deserializeAws_queryCrossZoneLoadBalancing(
      output["CrossZoneLoadBalancing"],
      context
    );
  }
  if (output["AccessLog"] !== undefined) {
    contents.AccessLog = deserializeAws_queryAccessLog(output["AccessLog"], context);
  }
  if (output["ConnectionDraining"] !== undefined) {
    contents.ConnectionDraining = deserializeAws_queryConnectionDraining(output["ConnectionDraining"], context);
  }
  if (output["ConnectionSettings"] !== undefined) {
    contents.ConnectionSettings = deserializeAws_queryConnectionSettings(output["ConnectionSettings"], context);
  }
  if (output.AdditionalAttributes === "") {
    contents.AdditionalAttributes = [];
  } else if (output["AdditionalAttributes"] !== undefined && output["AdditionalAttributes"]["member"] !== undefined) {
    contents.AdditionalAttributes = deserializeAws_queryAdditionalAttributes(
      __getArrayIfSingleItem(output["AdditionalAttributes"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryLoadBalancerDescription = (output: any, context: __SerdeContext): LoadBalancerDescription => {
  const contents: any = {
    LoadBalancerName: undefined,
    DNSName: undefined,
    CanonicalHostedZoneName: undefined,
    CanonicalHostedZoneNameID: undefined,
    ListenerDescriptions: undefined,
    Policies: undefined,
    BackendServerDescriptions: undefined,
    AvailabilityZones: undefined,
    Subnets: undefined,
    VPCId: undefined,
    Instances: undefined,
    HealthCheck: undefined,
    SourceSecurityGroup: undefined,
    SecurityGroups: undefined,
    CreatedTime: undefined,
    Scheme: undefined,
  };
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
    contents.ListenerDescriptions = deserializeAws_queryListenerDescriptions(
      __getArrayIfSingleItem(output["ListenerDescriptions"]["member"]),
      context
    );
  }
  if (output["Policies"] !== undefined) {
    contents.Policies = deserializeAws_queryPolicies(output["Policies"], context);
  }
  if (output.BackendServerDescriptions === "") {
    contents.BackendServerDescriptions = [];
  } else if (
    output["BackendServerDescriptions"] !== undefined &&
    output["BackendServerDescriptions"]["member"] !== undefined
  ) {
    contents.BackendServerDescriptions = deserializeAws_queryBackendServerDescriptions(
      __getArrayIfSingleItem(output["BackendServerDescriptions"]["member"]),
      context
    );
  }
  if (output.AvailabilityZones === "") {
    contents.AvailabilityZones = [];
  } else if (output["AvailabilityZones"] !== undefined && output["AvailabilityZones"]["member"] !== undefined) {
    contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(
      __getArrayIfSingleItem(output["AvailabilityZones"]["member"]),
      context
    );
  }
  if (output.Subnets === "") {
    contents.Subnets = [];
  } else if (output["Subnets"] !== undefined && output["Subnets"]["member"] !== undefined) {
    contents.Subnets = deserializeAws_querySubnets(__getArrayIfSingleItem(output["Subnets"]["member"]), context);
  }
  if (output["VPCId"] !== undefined) {
    contents.VPCId = __expectString(output["VPCId"]);
  }
  if (output.Instances === "") {
    contents.Instances = [];
  } else if (output["Instances"] !== undefined && output["Instances"]["member"] !== undefined) {
    contents.Instances = deserializeAws_queryInstances(__getArrayIfSingleItem(output["Instances"]["member"]), context);
  }
  if (output["HealthCheck"] !== undefined) {
    contents.HealthCheck = deserializeAws_queryHealthCheck(output["HealthCheck"], context);
  }
  if (output["SourceSecurityGroup"] !== undefined) {
    contents.SourceSecurityGroup = deserializeAws_querySourceSecurityGroup(output["SourceSecurityGroup"], context);
  }
  if (output.SecurityGroups === "") {
    contents.SecurityGroups = [];
  } else if (output["SecurityGroups"] !== undefined && output["SecurityGroups"]["member"] !== undefined) {
    contents.SecurityGroups = deserializeAws_querySecurityGroups(
      __getArrayIfSingleItem(output["SecurityGroups"]["member"]),
      context
    );
  }
  if (output["CreatedTime"] !== undefined) {
    contents.CreatedTime = __expectNonNull(__parseRfc3339DateTime(output["CreatedTime"]));
  }
  if (output["Scheme"] !== undefined) {
    contents.Scheme = __expectString(output["Scheme"]);
  }
  return contents;
};

const deserializeAws_queryLoadBalancerDescriptions = (
  output: any,
  context: __SerdeContext
): LoadBalancerDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryLoadBalancerDescription(entry, context);
    });
};

const deserializeAws_queryModifyLoadBalancerAttributesOutput = (
  output: any,
  context: __SerdeContext
): ModifyLoadBalancerAttributesOutput => {
  const contents: any = {
    LoadBalancerName: undefined,
    LoadBalancerAttributes: undefined,
  };
  if (output["LoadBalancerName"] !== undefined) {
    contents.LoadBalancerName = __expectString(output["LoadBalancerName"]);
  }
  if (output["LoadBalancerAttributes"] !== undefined) {
    contents.LoadBalancerAttributes = deserializeAws_queryLoadBalancerAttributes(
      output["LoadBalancerAttributes"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryOperationNotPermittedException = (
  output: any,
  context: __SerdeContext
): OperationNotPermittedException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryPolicies = (output: any, context: __SerdeContext): Policies => {
  const contents: any = {
    AppCookieStickinessPolicies: undefined,
    LBCookieStickinessPolicies: undefined,
    OtherPolicies: undefined,
  };
  if (output.AppCookieStickinessPolicies === "") {
    contents.AppCookieStickinessPolicies = [];
  } else if (
    output["AppCookieStickinessPolicies"] !== undefined &&
    output["AppCookieStickinessPolicies"]["member"] !== undefined
  ) {
    contents.AppCookieStickinessPolicies = deserializeAws_queryAppCookieStickinessPolicies(
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
    contents.LBCookieStickinessPolicies = deserializeAws_queryLBCookieStickinessPolicies(
      __getArrayIfSingleItem(output["LBCookieStickinessPolicies"]["member"]),
      context
    );
  }
  if (output.OtherPolicies === "") {
    contents.OtherPolicies = [];
  } else if (output["OtherPolicies"] !== undefined && output["OtherPolicies"]["member"] !== undefined) {
    contents.OtherPolicies = deserializeAws_queryPolicyNames(
      __getArrayIfSingleItem(output["OtherPolicies"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryPolicyAttributeDescription = (
  output: any,
  context: __SerdeContext
): PolicyAttributeDescription => {
  const contents: any = {
    AttributeName: undefined,
    AttributeValue: undefined,
  };
  if (output["AttributeName"] !== undefined) {
    contents.AttributeName = __expectString(output["AttributeName"]);
  }
  if (output["AttributeValue"] !== undefined) {
    contents.AttributeValue = __expectString(output["AttributeValue"]);
  }
  return contents;
};

const deserializeAws_queryPolicyAttributeDescriptions = (
  output: any,
  context: __SerdeContext
): PolicyAttributeDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryPolicyAttributeDescription(entry, context);
    });
};

const deserializeAws_queryPolicyAttributeTypeDescription = (
  output: any,
  context: __SerdeContext
): PolicyAttributeTypeDescription => {
  const contents: any = {
    AttributeName: undefined,
    AttributeType: undefined,
    Description: undefined,
    DefaultValue: undefined,
    Cardinality: undefined,
  };
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

const deserializeAws_queryPolicyAttributeTypeDescriptions = (
  output: any,
  context: __SerdeContext
): PolicyAttributeTypeDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryPolicyAttributeTypeDescription(entry, context);
    });
};

const deserializeAws_queryPolicyDescription = (output: any, context: __SerdeContext): PolicyDescription => {
  const contents: any = {
    PolicyName: undefined,
    PolicyTypeName: undefined,
    PolicyAttributeDescriptions: undefined,
  };
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
    contents.PolicyAttributeDescriptions = deserializeAws_queryPolicyAttributeDescriptions(
      __getArrayIfSingleItem(output["PolicyAttributeDescriptions"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryPolicyDescriptions = (output: any, context: __SerdeContext): PolicyDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryPolicyDescription(entry, context);
    });
};

const deserializeAws_queryPolicyNames = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryPolicyNotFoundException = (output: any, context: __SerdeContext): PolicyNotFoundException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryPolicyTypeDescription = (output: any, context: __SerdeContext): PolicyTypeDescription => {
  const contents: any = {
    PolicyTypeName: undefined,
    Description: undefined,
    PolicyAttributeTypeDescriptions: undefined,
  };
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
    contents.PolicyAttributeTypeDescriptions = deserializeAws_queryPolicyAttributeTypeDescriptions(
      __getArrayIfSingleItem(output["PolicyAttributeTypeDescriptions"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryPolicyTypeDescriptions = (output: any, context: __SerdeContext): PolicyTypeDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryPolicyTypeDescription(entry, context);
    });
};

const deserializeAws_queryPolicyTypeNotFoundException = (
  output: any,
  context: __SerdeContext
): PolicyTypeNotFoundException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryRegisterEndPointsOutput = (output: any, context: __SerdeContext): RegisterEndPointsOutput => {
  const contents: any = {
    Instances: undefined,
  };
  if (output.Instances === "") {
    contents.Instances = [];
  } else if (output["Instances"] !== undefined && output["Instances"]["member"] !== undefined) {
    contents.Instances = deserializeAws_queryInstances(__getArrayIfSingleItem(output["Instances"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryRemoveAvailabilityZonesOutput = (
  output: any,
  context: __SerdeContext
): RemoveAvailabilityZonesOutput => {
  const contents: any = {
    AvailabilityZones: undefined,
  };
  if (output.AvailabilityZones === "") {
    contents.AvailabilityZones = [];
  } else if (output["AvailabilityZones"] !== undefined && output["AvailabilityZones"]["member"] !== undefined) {
    contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(
      __getArrayIfSingleItem(output["AvailabilityZones"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryRemoveTagsOutput = (output: any, context: __SerdeContext): RemoveTagsOutput => {
  const contents: any = {};
  return contents;
};

const deserializeAws_querySecurityGroups = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_querySetLoadBalancerListenerSSLCertificateOutput = (
  output: any,
  context: __SerdeContext
): SetLoadBalancerListenerSSLCertificateOutput => {
  const contents: any = {};
  return contents;
};

const deserializeAws_querySetLoadBalancerPoliciesForBackendServerOutput = (
  output: any,
  context: __SerdeContext
): SetLoadBalancerPoliciesForBackendServerOutput => {
  const contents: any = {};
  return contents;
};

const deserializeAws_querySetLoadBalancerPoliciesOfListenerOutput = (
  output: any,
  context: __SerdeContext
): SetLoadBalancerPoliciesOfListenerOutput => {
  const contents: any = {};
  return contents;
};

const deserializeAws_querySourceSecurityGroup = (output: any, context: __SerdeContext): SourceSecurityGroup => {
  const contents: any = {
    OwnerAlias: undefined,
    GroupName: undefined,
  };
  if (output["OwnerAlias"] !== undefined) {
    contents.OwnerAlias = __expectString(output["OwnerAlias"]);
  }
  if (output["GroupName"] !== undefined) {
    contents.GroupName = __expectString(output["GroupName"]);
  }
  return contents;
};

const deserializeAws_querySubnetNotFoundException = (output: any, context: __SerdeContext): SubnetNotFoundException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_querySubnets = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryTag = (output: any, context: __SerdeContext): Tag => {
  const contents: any = {
    Key: undefined,
    Value: undefined,
  };
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

const deserializeAws_queryTagDescription = (output: any, context: __SerdeContext): TagDescription => {
  const contents: any = {
    LoadBalancerName: undefined,
    Tags: undefined,
  };
  if (output["LoadBalancerName"] !== undefined) {
    contents.LoadBalancerName = __expectString(output["LoadBalancerName"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryTagDescriptions = (output: any, context: __SerdeContext): TagDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryTagDescription(entry, context);
    });
};

const deserializeAws_queryTagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryTag(entry, context);
    });
};

const deserializeAws_queryTooManyAccessPointsException = (
  output: any,
  context: __SerdeContext
): TooManyAccessPointsException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryTooManyPoliciesException = (
  output: any,
  context: __SerdeContext
): TooManyPoliciesException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryTooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryUnsupportedProtocolException = (
  output: any,
  context: __SerdeContext
): UnsupportedProtocolException => {
  const contents: any = {
    Message: undefined,
  };
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
        tagValueProcessor: (_, val) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
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
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
