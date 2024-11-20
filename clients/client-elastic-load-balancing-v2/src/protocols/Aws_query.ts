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
  strictParseFloat as __strictParseFloat,
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

import {
  AddListenerCertificatesCommandInput,
  AddListenerCertificatesCommandOutput,
} from "../commands/AddListenerCertificatesCommand";
import { AddTagsCommandInput, AddTagsCommandOutput } from "../commands/AddTagsCommand";
import {
  AddTrustStoreRevocationsCommandInput,
  AddTrustStoreRevocationsCommandOutput,
} from "../commands/AddTrustStoreRevocationsCommand";
import { CreateListenerCommandInput, CreateListenerCommandOutput } from "../commands/CreateListenerCommand";
import { CreateLoadBalancerCommandInput, CreateLoadBalancerCommandOutput } from "../commands/CreateLoadBalancerCommand";
import { CreateRuleCommandInput, CreateRuleCommandOutput } from "../commands/CreateRuleCommand";
import { CreateTargetGroupCommandInput, CreateTargetGroupCommandOutput } from "../commands/CreateTargetGroupCommand";
import { CreateTrustStoreCommandInput, CreateTrustStoreCommandOutput } from "../commands/CreateTrustStoreCommand";
import { DeleteListenerCommandInput, DeleteListenerCommandOutput } from "../commands/DeleteListenerCommand";
import { DeleteLoadBalancerCommandInput, DeleteLoadBalancerCommandOutput } from "../commands/DeleteLoadBalancerCommand";
import { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "../commands/DeleteRuleCommand";
import {
  DeleteSharedTrustStoreAssociationCommandInput,
  DeleteSharedTrustStoreAssociationCommandOutput,
} from "../commands/DeleteSharedTrustStoreAssociationCommand";
import { DeleteTargetGroupCommandInput, DeleteTargetGroupCommandOutput } from "../commands/DeleteTargetGroupCommand";
import { DeleteTrustStoreCommandInput, DeleteTrustStoreCommandOutput } from "../commands/DeleteTrustStoreCommand";
import { DeregisterTargetsCommandInput, DeregisterTargetsCommandOutput } from "../commands/DeregisterTargetsCommand";
import {
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
} from "../commands/DescribeAccountLimitsCommand";
import {
  DescribeCapacityReservationCommandInput,
  DescribeCapacityReservationCommandOutput,
} from "../commands/DescribeCapacityReservationCommand";
import {
  DescribeListenerAttributesCommandInput,
  DescribeListenerAttributesCommandOutput,
} from "../commands/DescribeListenerAttributesCommand";
import {
  DescribeListenerCertificatesCommandInput,
  DescribeListenerCertificatesCommandOutput,
} from "../commands/DescribeListenerCertificatesCommand";
import { DescribeListenersCommandInput, DescribeListenersCommandOutput } from "../commands/DescribeListenersCommand";
import {
  DescribeLoadBalancerAttributesCommandInput,
  DescribeLoadBalancerAttributesCommandOutput,
} from "../commands/DescribeLoadBalancerAttributesCommand";
import {
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput,
} from "../commands/DescribeLoadBalancersCommand";
import { DescribeRulesCommandInput, DescribeRulesCommandOutput } from "../commands/DescribeRulesCommand";
import {
  DescribeSSLPoliciesCommandInput,
  DescribeSSLPoliciesCommandOutput,
} from "../commands/DescribeSSLPoliciesCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "../commands/DescribeTagsCommand";
import {
  DescribeTargetGroupAttributesCommandInput,
  DescribeTargetGroupAttributesCommandOutput,
} from "../commands/DescribeTargetGroupAttributesCommand";
import {
  DescribeTargetGroupsCommandInput,
  DescribeTargetGroupsCommandOutput,
} from "../commands/DescribeTargetGroupsCommand";
import {
  DescribeTargetHealthCommandInput,
  DescribeTargetHealthCommandOutput,
} from "../commands/DescribeTargetHealthCommand";
import {
  DescribeTrustStoreAssociationsCommandInput,
  DescribeTrustStoreAssociationsCommandOutput,
} from "../commands/DescribeTrustStoreAssociationsCommand";
import {
  DescribeTrustStoreRevocationsCommandInput,
  DescribeTrustStoreRevocationsCommandOutput,
} from "../commands/DescribeTrustStoreRevocationsCommand";
import {
  DescribeTrustStoresCommandInput,
  DescribeTrustStoresCommandOutput,
} from "../commands/DescribeTrustStoresCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "../commands/GetResourcePolicyCommand";
import {
  GetTrustStoreCaCertificatesBundleCommandInput,
  GetTrustStoreCaCertificatesBundleCommandOutput,
} from "../commands/GetTrustStoreCaCertificatesBundleCommand";
import {
  GetTrustStoreRevocationContentCommandInput,
  GetTrustStoreRevocationContentCommandOutput,
} from "../commands/GetTrustStoreRevocationContentCommand";
import {
  ModifyCapacityReservationCommandInput,
  ModifyCapacityReservationCommandOutput,
} from "../commands/ModifyCapacityReservationCommand";
import {
  ModifyListenerAttributesCommandInput,
  ModifyListenerAttributesCommandOutput,
} from "../commands/ModifyListenerAttributesCommand";
import { ModifyListenerCommandInput, ModifyListenerCommandOutput } from "../commands/ModifyListenerCommand";
import {
  ModifyLoadBalancerAttributesCommandInput,
  ModifyLoadBalancerAttributesCommandOutput,
} from "../commands/ModifyLoadBalancerAttributesCommand";
import { ModifyRuleCommandInput, ModifyRuleCommandOutput } from "../commands/ModifyRuleCommand";
import {
  ModifyTargetGroupAttributesCommandInput,
  ModifyTargetGroupAttributesCommandOutput,
} from "../commands/ModifyTargetGroupAttributesCommand";
import { ModifyTargetGroupCommandInput, ModifyTargetGroupCommandOutput } from "../commands/ModifyTargetGroupCommand";
import { ModifyTrustStoreCommandInput, ModifyTrustStoreCommandOutput } from "../commands/ModifyTrustStoreCommand";
import { RegisterTargetsCommandInput, RegisterTargetsCommandOutput } from "../commands/RegisterTargetsCommand";
import {
  RemoveListenerCertificatesCommandInput,
  RemoveListenerCertificatesCommandOutput,
} from "../commands/RemoveListenerCertificatesCommand";
import { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "../commands/RemoveTagsCommand";
import {
  RemoveTrustStoreRevocationsCommandInput,
  RemoveTrustStoreRevocationsCommandOutput,
} from "../commands/RemoveTrustStoreRevocationsCommand";
import { SetIpAddressTypeCommandInput, SetIpAddressTypeCommandOutput } from "../commands/SetIpAddressTypeCommand";
import { SetRulePrioritiesCommandInput, SetRulePrioritiesCommandOutput } from "../commands/SetRulePrioritiesCommand";
import { SetSecurityGroupsCommandInput, SetSecurityGroupsCommandOutput } from "../commands/SetSecurityGroupsCommand";
import { SetSubnetsCommandInput, SetSubnetsCommandOutput } from "../commands/SetSubnetsCommand";
import { ElasticLoadBalancingV2ServiceException as __BaseException } from "../models/ElasticLoadBalancingV2ServiceException";
import {
  Action,
  AddListenerCertificatesInput,
  AddListenerCertificatesOutput,
  AddTagsInput,
  AddTagsOutput,
  AddTrustStoreRevocationsInput,
  AddTrustStoreRevocationsOutput,
  AdministrativeOverride,
  AllocationIdNotFoundException,
  ALPNPolicyNotSupportedException,
  AnomalyDetection,
  AuthenticateCognitoActionConfig,
  AuthenticateOidcActionConfig,
  AvailabilityZone,
  AvailabilityZoneNotSupportedException,
  CaCertificatesBundleNotFoundException,
  CapacityDecreaseRequestsLimitExceededException,
  CapacityReservationPendingException,
  CapacityReservationStatus,
  CapacityUnitsLimitExceededException,
  Certificate,
  CertificateNotFoundException,
  Cipher,
  CreateListenerInput,
  CreateListenerOutput,
  CreateLoadBalancerInput,
  CreateLoadBalancerOutput,
  CreateRuleInput,
  CreateRuleOutput,
  CreateTargetGroupInput,
  CreateTargetGroupOutput,
  CreateTrustStoreInput,
  CreateTrustStoreOutput,
  DeleteAssociationSameAccountException,
  DeleteListenerInput,
  DeleteListenerOutput,
  DeleteLoadBalancerInput,
  DeleteLoadBalancerOutput,
  DeleteRuleInput,
  DeleteRuleOutput,
  DeleteSharedTrustStoreAssociationInput,
  DeleteSharedTrustStoreAssociationOutput,
  DeleteTargetGroupInput,
  DeleteTargetGroupOutput,
  DeleteTrustStoreInput,
  DeleteTrustStoreOutput,
  DeregisterTargetsInput,
  DeregisterTargetsOutput,
  DescribeAccountLimitsInput,
  DescribeAccountLimitsOutput,
  DescribeCapacityReservationInput,
  DescribeCapacityReservationOutput,
  DescribeListenerAttributesInput,
  DescribeListenerAttributesOutput,
  DescribeListenerCertificatesInput,
  DescribeListenerCertificatesOutput,
  DescribeListenersInput,
  DescribeListenersOutput,
  DescribeLoadBalancerAttributesInput,
  DescribeLoadBalancerAttributesOutput,
  DescribeLoadBalancersInput,
  DescribeLoadBalancersOutput,
  DescribeRulesInput,
  DescribeRulesOutput,
  DescribeSSLPoliciesInput,
  DescribeSSLPoliciesOutput,
  DescribeTagsInput,
  DescribeTagsOutput,
  DescribeTargetGroupAttributesInput,
  DescribeTargetGroupAttributesOutput,
  DescribeTargetGroupsInput,
  DescribeTargetGroupsOutput,
  DescribeTargetHealthInput,
  DescribeTargetHealthInputIncludeEnum,
  DescribeTargetHealthOutput,
  DescribeTrustStoreAssociationsInput,
  DescribeTrustStoreAssociationsOutput,
  DescribeTrustStoreRevocation,
  DescribeTrustStoreRevocationsInput,
  DescribeTrustStoreRevocationsOutput,
  DescribeTrustStoresInput,
  DescribeTrustStoresOutput,
  DuplicateListenerException,
  DuplicateLoadBalancerNameException,
  DuplicateTagKeysException,
  DuplicateTargetGroupNameException,
  DuplicateTrustStoreNameException,
  FixedResponseActionConfig,
  ForwardActionConfig,
  GetResourcePolicyInput,
  GetResourcePolicyOutput,
  GetTrustStoreCaCertificatesBundleInput,
  GetTrustStoreCaCertificatesBundleOutput,
  GetTrustStoreRevocationContentInput,
  GetTrustStoreRevocationContentOutput,
  HealthUnavailableException,
  HostHeaderConditionConfig,
  HttpHeaderConditionConfig,
  HttpRequestMethodConditionConfig,
  IncompatibleProtocolsException,
  InsufficientCapacityException,
  InvalidCaCertificatesBundleException,
  InvalidConfigurationRequestException,
  InvalidLoadBalancerActionException,
  InvalidRevocationContentException,
  InvalidSchemeException,
  InvalidSecurityGroupException,
  InvalidSubnetException,
  InvalidTargetException,
  Limit,
  Listener,
  ListenerAttribute,
  ListenerNotFoundException,
  LoadBalancer,
  LoadBalancerAddress,
  LoadBalancerAttribute,
  LoadBalancerNotFoundException,
  LoadBalancerState,
  Matcher,
  MinimumLoadBalancerCapacity,
  ModifyCapacityReservationInput,
  ModifyCapacityReservationOutput,
  ModifyListenerAttributesInput,
  ModifyListenerAttributesOutput,
  ModifyListenerInput,
  ModifyListenerOutput,
  ModifyLoadBalancerAttributesInput,
  ModifyLoadBalancerAttributesOutput,
  ModifyRuleInput,
  ModifyRuleOutput,
  ModifyTargetGroupAttributesInput,
  ModifyTargetGroupAttributesOutput,
  ModifyTargetGroupInput,
  ModifyTargetGroupOutput,
  ModifyTrustStoreInput,
  ModifyTrustStoreOutput,
  MutualAuthenticationAttributes,
  OperationNotPermittedException,
  PathPatternConditionConfig,
  PriorityInUseException,
  PriorRequestNotCompleteException,
  QueryStringConditionConfig,
  QueryStringKeyValuePair,
  RedirectActionConfig,
  RegisterTargetsInput,
  RegisterTargetsOutput,
  RemoveListenerCertificatesInput,
  RemoveListenerCertificatesOutput,
  RemoveTagsInput,
  RemoveTagsOutput,
  RemoveTrustStoreRevocationsInput,
  RemoveTrustStoreRevocationsOutput,
  ResourceInUseException,
  ResourceNotFoundException,
  RevocationContent,
  RevocationContentNotFoundException,
  RevocationIdNotFoundException,
  Rule,
  RuleCondition,
  RuleNotFoundException,
  RulePriorityPair,
  SetIpAddressTypeInput,
  SetIpAddressTypeOutput,
  SetRulePrioritiesInput,
  SetRulePrioritiesOutput,
  SetSecurityGroupsInput,
  SetSecurityGroupsOutput,
  SetSubnetsInput,
  SetSubnetsOutput,
  SourceIpConditionConfig,
  SslPolicy,
  SSLPolicyNotFoundException,
  SubnetMapping,
  SubnetNotFoundException,
  Tag,
  TagDescription,
  TargetDescription,
  TargetGroup,
  TargetGroupAssociationLimitException,
  TargetGroupAttribute,
  TargetGroupNotFoundException,
  TargetGroupStickinessConfig,
  TargetGroupTuple,
  TargetHealth,
  TargetHealthDescription,
  TooManyActionsException,
  TooManyCertificatesException,
  TooManyListenersException,
  TooManyLoadBalancersException,
  TooManyRegistrationsForTargetIdException,
  TooManyRulesException,
  TooManyTagsException,
  TooManyTargetGroupsException,
  TooManyTargetsException,
  TooManyTrustStoreRevocationEntriesException,
  TooManyTrustStoresException,
  TooManyUniqueTargetGroupsPerLoadBalancerException,
  TrustStore,
  TrustStoreAssociation,
  TrustStoreAssociationNotFoundException,
  TrustStoreInUseException,
  TrustStoreNotFoundException,
  TrustStoreNotReadyException,
  TrustStoreRevocation,
  UnsupportedProtocolException,
  ZonalCapacityReservationState,
} from "../models/models_0";

/**
 * serializeAws_queryAddListenerCertificatesCommand
 */
export const se_AddListenerCertificatesCommand = async (
  input: AddListenerCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AddListenerCertificatesInput(input, context),
    [_A]: _ALC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

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
 * serializeAws_queryAddTrustStoreRevocationsCommand
 */
export const se_AddTrustStoreRevocationsCommand = async (
  input: AddTrustStoreRevocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AddTrustStoreRevocationsInput(input, context),
    [_A]: _ATSR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateListenerCommand
 */
export const se_CreateListenerCommand = async (
  input: CreateListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateListenerInput(input, context),
    [_A]: _CL,
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
    ...se_CreateLoadBalancerInput(input, context),
    [_A]: _CLB,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateRuleCommand
 */
export const se_CreateRuleCommand = async (
  input: CreateRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateRuleInput(input, context),
    [_A]: _CR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateTargetGroupCommand
 */
export const se_CreateTargetGroupCommand = async (
  input: CreateTargetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateTargetGroupInput(input, context),
    [_A]: _CTG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateTrustStoreCommand
 */
export const se_CreateTrustStoreCommand = async (
  input: CreateTrustStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateTrustStoreInput(input, context),
    [_A]: _CTS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteListenerCommand
 */
export const se_DeleteListenerCommand = async (
  input: DeleteListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteListenerInput(input, context),
    [_A]: _DL,
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
    ...se_DeleteLoadBalancerInput(input, context),
    [_A]: _DLB,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteRuleCommand
 */
export const se_DeleteRuleCommand = async (
  input: DeleteRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteRuleInput(input, context),
    [_A]: _DR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteSharedTrustStoreAssociationCommand
 */
export const se_DeleteSharedTrustStoreAssociationCommand = async (
  input: DeleteSharedTrustStoreAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteSharedTrustStoreAssociationInput(input, context),
    [_A]: _DSTSA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteTargetGroupCommand
 */
export const se_DeleteTargetGroupCommand = async (
  input: DeleteTargetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteTargetGroupInput(input, context),
    [_A]: _DTG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteTrustStoreCommand
 */
export const se_DeleteTrustStoreCommand = async (
  input: DeleteTrustStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteTrustStoreInput(input, context),
    [_A]: _DTS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeregisterTargetsCommand
 */
export const se_DeregisterTargetsCommand = async (
  input: DeregisterTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeregisterTargetsInput(input, context),
    [_A]: _DT,
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
 * serializeAws_queryDescribeCapacityReservationCommand
 */
export const se_DescribeCapacityReservationCommand = async (
  input: DescribeCapacityReservationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeCapacityReservationInput(input, context),
    [_A]: _DCR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeListenerAttributesCommand
 */
export const se_DescribeListenerAttributesCommand = async (
  input: DescribeListenerAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeListenerAttributesInput(input, context),
    [_A]: _DLA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeListenerCertificatesCommand
 */
export const se_DescribeListenerCertificatesCommand = async (
  input: DescribeListenerCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeListenerCertificatesInput(input, context),
    [_A]: _DLC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeListenersCommand
 */
export const se_DescribeListenersCommand = async (
  input: DescribeListenersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeListenersInput(input, context),
    [_A]: _DLe,
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
 * serializeAws_queryDescribeLoadBalancersCommand
 */
export const se_DescribeLoadBalancersCommand = async (
  input: DescribeLoadBalancersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeLoadBalancersInput(input, context),
    [_A]: _DLBe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeRulesCommand
 */
export const se_DescribeRulesCommand = async (
  input: DescribeRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeRulesInput(input, context),
    [_A]: _DRe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeSSLPoliciesCommand
 */
export const se_DescribeSSLPoliciesCommand = async (
  input: DescribeSSLPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeSSLPoliciesInput(input, context),
    [_A]: _DSSLP,
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
    [_A]: _DTe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeTargetGroupAttributesCommand
 */
export const se_DescribeTargetGroupAttributesCommand = async (
  input: DescribeTargetGroupAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeTargetGroupAttributesInput(input, context),
    [_A]: _DTGA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeTargetGroupsCommand
 */
export const se_DescribeTargetGroupsCommand = async (
  input: DescribeTargetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeTargetGroupsInput(input, context),
    [_A]: _DTGe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeTargetHealthCommand
 */
export const se_DescribeTargetHealthCommand = async (
  input: DescribeTargetHealthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeTargetHealthInput(input, context),
    [_A]: _DTH,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeTrustStoreAssociationsCommand
 */
export const se_DescribeTrustStoreAssociationsCommand = async (
  input: DescribeTrustStoreAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeTrustStoreAssociationsInput(input, context),
    [_A]: _DTSA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeTrustStoreRevocationsCommand
 */
export const se_DescribeTrustStoreRevocationsCommand = async (
  input: DescribeTrustStoreRevocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeTrustStoreRevocationsInput(input, context),
    [_A]: _DTSR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeTrustStoresCommand
 */
export const se_DescribeTrustStoresCommand = async (
  input: DescribeTrustStoresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeTrustStoresInput(input, context),
    [_A]: _DTSe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetResourcePolicyCommand
 */
export const se_GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetResourcePolicyInput(input, context),
    [_A]: _GRP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetTrustStoreCaCertificatesBundleCommand
 */
export const se_GetTrustStoreCaCertificatesBundleCommand = async (
  input: GetTrustStoreCaCertificatesBundleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetTrustStoreCaCertificatesBundleInput(input, context),
    [_A]: _GTSCCB,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetTrustStoreRevocationContentCommand
 */
export const se_GetTrustStoreRevocationContentCommand = async (
  input: GetTrustStoreRevocationContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetTrustStoreRevocationContentInput(input, context),
    [_A]: _GTSRC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyCapacityReservationCommand
 */
export const se_ModifyCapacityReservationCommand = async (
  input: ModifyCapacityReservationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyCapacityReservationInput(input, context),
    [_A]: _MCR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyListenerCommand
 */
export const se_ModifyListenerCommand = async (
  input: ModifyListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyListenerInput(input, context),
    [_A]: _ML,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyListenerAttributesCommand
 */
export const se_ModifyListenerAttributesCommand = async (
  input: ModifyListenerAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyListenerAttributesInput(input, context),
    [_A]: _MLA,
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
 * serializeAws_queryModifyRuleCommand
 */
export const se_ModifyRuleCommand = async (
  input: ModifyRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyRuleInput(input, context),
    [_A]: _MR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyTargetGroupCommand
 */
export const se_ModifyTargetGroupCommand = async (
  input: ModifyTargetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyTargetGroupInput(input, context),
    [_A]: _MTG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyTargetGroupAttributesCommand
 */
export const se_ModifyTargetGroupAttributesCommand = async (
  input: ModifyTargetGroupAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyTargetGroupAttributesInput(input, context),
    [_A]: _MTGA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryModifyTrustStoreCommand
 */
export const se_ModifyTrustStoreCommand = async (
  input: ModifyTrustStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ModifyTrustStoreInput(input, context),
    [_A]: _MTS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRegisterTargetsCommand
 */
export const se_RegisterTargetsCommand = async (
  input: RegisterTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RegisterTargetsInput(input, context),
    [_A]: _RT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRemoveListenerCertificatesCommand
 */
export const se_RemoveListenerCertificatesCommand = async (
  input: RemoveListenerCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RemoveListenerCertificatesInput(input, context),
    [_A]: _RLC,
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
    [_A]: _RTe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRemoveTrustStoreRevocationsCommand
 */
export const se_RemoveTrustStoreRevocationsCommand = async (
  input: RemoveTrustStoreRevocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RemoveTrustStoreRevocationsInput(input, context),
    [_A]: _RTSR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetIpAddressTypeCommand
 */
export const se_SetIpAddressTypeCommand = async (
  input: SetIpAddressTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetIpAddressTypeInput(input, context),
    [_A]: _SIAT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetRulePrioritiesCommand
 */
export const se_SetRulePrioritiesCommand = async (
  input: SetRulePrioritiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetRulePrioritiesInput(input, context),
    [_A]: _SRP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetSecurityGroupsCommand
 */
export const se_SetSecurityGroupsCommand = async (
  input: SetSecurityGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetSecurityGroupsInput(input, context),
    [_A]: _SSG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetSubnetsCommand
 */
export const se_SetSubnetsCommand = async (
  input: SetSubnetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetSubnetsInput(input, context),
    [_A]: _SS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_queryAddListenerCertificatesCommand
 */
export const de_AddListenerCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddListenerCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AddListenerCertificatesOutput(data.AddListenerCertificatesResult, context);
  const response: AddListenerCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
 * deserializeAws_queryAddTrustStoreRevocationsCommand
 */
export const de_AddTrustStoreRevocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTrustStoreRevocationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AddTrustStoreRevocationsOutput(data.AddTrustStoreRevocationsResult, context);
  const response: AddTrustStoreRevocationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateListenerCommand
 */
export const de_CreateListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateListenerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateListenerOutput(data.CreateListenerResult, context);
  const response: CreateListenerCommandOutput = {
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
  contents = de_CreateLoadBalancerOutput(data.CreateLoadBalancerResult, context);
  const response: CreateLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateRuleCommand
 */
export const de_CreateRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateRuleOutput(data.CreateRuleResult, context);
  const response: CreateRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateTargetGroupCommand
 */
export const de_CreateTargetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTargetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTargetGroupOutput(data.CreateTargetGroupResult, context);
  const response: CreateTargetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateTrustStoreCommand
 */
export const de_CreateTrustStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrustStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTrustStoreOutput(data.CreateTrustStoreResult, context);
  const response: CreateTrustStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteListenerCommand
 */
export const de_DeleteListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteListenerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteListenerOutput(data.DeleteListenerResult, context);
  const response: DeleteListenerCommandOutput = {
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
  contents = de_DeleteLoadBalancerOutput(data.DeleteLoadBalancerResult, context);
  const response: DeleteLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteRuleCommand
 */
export const de_DeleteRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteRuleOutput(data.DeleteRuleResult, context);
  const response: DeleteRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteSharedTrustStoreAssociationCommand
 */
export const de_DeleteSharedTrustStoreAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSharedTrustStoreAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteSharedTrustStoreAssociationOutput(data.DeleteSharedTrustStoreAssociationResult, context);
  const response: DeleteSharedTrustStoreAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteTargetGroupCommand
 */
export const de_DeleteTargetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTargetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTargetGroupOutput(data.DeleteTargetGroupResult, context);
  const response: DeleteTargetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteTrustStoreCommand
 */
export const de_DeleteTrustStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrustStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTrustStoreOutput(data.DeleteTrustStoreResult, context);
  const response: DeleteTrustStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeregisterTargetsCommand
 */
export const de_DeregisterTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeregisterTargetsOutput(data.DeregisterTargetsResult, context);
  const response: DeregisterTargetsCommandOutput = {
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
 * deserializeAws_queryDescribeCapacityReservationCommand
 */
export const de_DescribeCapacityReservationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCapacityReservationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCapacityReservationOutput(data.DescribeCapacityReservationResult, context);
  const response: DescribeCapacityReservationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeListenerAttributesCommand
 */
export const de_DescribeListenerAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeListenerAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeListenerAttributesOutput(data.DescribeListenerAttributesResult, context);
  const response: DescribeListenerAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeListenerCertificatesCommand
 */
export const de_DescribeListenerCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeListenerCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeListenerCertificatesOutput(data.DescribeListenerCertificatesResult, context);
  const response: DescribeListenerCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeListenersCommand
 */
export const de_DescribeListenersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeListenersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeListenersOutput(data.DescribeListenersResult, context);
  const response: DescribeListenersCommandOutput = {
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
  contents = de_DescribeLoadBalancersOutput(data.DescribeLoadBalancersResult, context);
  const response: DescribeLoadBalancersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeRulesCommand
 */
export const de_DescribeRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRulesOutput(data.DescribeRulesResult, context);
  const response: DescribeRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeSSLPoliciesCommand
 */
export const de_DescribeSSLPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSSLPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSSLPoliciesOutput(data.DescribeSSLPoliciesResult, context);
  const response: DescribeSSLPoliciesCommandOutput = {
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
 * deserializeAws_queryDescribeTargetGroupAttributesCommand
 */
export const de_DescribeTargetGroupAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTargetGroupAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTargetGroupAttributesOutput(data.DescribeTargetGroupAttributesResult, context);
  const response: DescribeTargetGroupAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeTargetGroupsCommand
 */
export const de_DescribeTargetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTargetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTargetGroupsOutput(data.DescribeTargetGroupsResult, context);
  const response: DescribeTargetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeTargetHealthCommand
 */
export const de_DescribeTargetHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTargetHealthCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTargetHealthOutput(data.DescribeTargetHealthResult, context);
  const response: DescribeTargetHealthCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeTrustStoreAssociationsCommand
 */
export const de_DescribeTrustStoreAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustStoreAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTrustStoreAssociationsOutput(data.DescribeTrustStoreAssociationsResult, context);
  const response: DescribeTrustStoreAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeTrustStoreRevocationsCommand
 */
export const de_DescribeTrustStoreRevocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustStoreRevocationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTrustStoreRevocationsOutput(data.DescribeTrustStoreRevocationsResult, context);
  const response: DescribeTrustStoreRevocationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeTrustStoresCommand
 */
export const de_DescribeTrustStoresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustStoresCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTrustStoresOutput(data.DescribeTrustStoresResult, context);
  const response: DescribeTrustStoresCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetResourcePolicyCommand
 */
export const de_GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResourcePolicyOutput(data.GetResourcePolicyResult, context);
  const response: GetResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetTrustStoreCaCertificatesBundleCommand
 */
export const de_GetTrustStoreCaCertificatesBundleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrustStoreCaCertificatesBundleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTrustStoreCaCertificatesBundleOutput(data.GetTrustStoreCaCertificatesBundleResult, context);
  const response: GetTrustStoreCaCertificatesBundleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetTrustStoreRevocationContentCommand
 */
export const de_GetTrustStoreRevocationContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrustStoreRevocationContentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTrustStoreRevocationContentOutput(data.GetTrustStoreRevocationContentResult, context);
  const response: GetTrustStoreRevocationContentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyCapacityReservationCommand
 */
export const de_ModifyCapacityReservationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyCapacityReservationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyCapacityReservationOutput(data.ModifyCapacityReservationResult, context);
  const response: ModifyCapacityReservationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyListenerCommand
 */
export const de_ModifyListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyListenerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyListenerOutput(data.ModifyListenerResult, context);
  const response: ModifyListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyListenerAttributesCommand
 */
export const de_ModifyListenerAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyListenerAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyListenerAttributesOutput(data.ModifyListenerAttributesResult, context);
  const response: ModifyListenerAttributesCommandOutput = {
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
 * deserializeAws_queryModifyRuleCommand
 */
export const de_ModifyRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyRuleOutput(data.ModifyRuleResult, context);
  const response: ModifyRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyTargetGroupCommand
 */
export const de_ModifyTargetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyTargetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyTargetGroupOutput(data.ModifyTargetGroupResult, context);
  const response: ModifyTargetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyTargetGroupAttributesCommand
 */
export const de_ModifyTargetGroupAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyTargetGroupAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyTargetGroupAttributesOutput(data.ModifyTargetGroupAttributesResult, context);
  const response: ModifyTargetGroupAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryModifyTrustStoreCommand
 */
export const de_ModifyTrustStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyTrustStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyTrustStoreOutput(data.ModifyTrustStoreResult, context);
  const response: ModifyTrustStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRegisterTargetsCommand
 */
export const de_RegisterTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterTargetsOutput(data.RegisterTargetsResult, context);
  const response: RegisterTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRemoveListenerCertificatesCommand
 */
export const de_RemoveListenerCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveListenerCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RemoveListenerCertificatesOutput(data.RemoveListenerCertificatesResult, context);
  const response: RemoveListenerCertificatesCommandOutput = {
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
 * deserializeAws_queryRemoveTrustStoreRevocationsCommand
 */
export const de_RemoveTrustStoreRevocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTrustStoreRevocationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RemoveTrustStoreRevocationsOutput(data.RemoveTrustStoreRevocationsResult, context);
  const response: RemoveTrustStoreRevocationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySetIpAddressTypeCommand
 */
export const de_SetIpAddressTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIpAddressTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetIpAddressTypeOutput(data.SetIpAddressTypeResult, context);
  const response: SetIpAddressTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySetRulePrioritiesCommand
 */
export const de_SetRulePrioritiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetRulePrioritiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetRulePrioritiesOutput(data.SetRulePrioritiesResult, context);
  const response: SetRulePrioritiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySetSecurityGroupsCommand
 */
export const de_SetSecurityGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSecurityGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetSecurityGroupsOutput(data.SetSecurityGroupsResult, context);
  const response: SetSecurityGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySetSubnetsCommand
 */
export const de_SetSubnetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSubnetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetSubnetsOutput(data.SetSubnetsResult, context);
  const response: SetSubnetsCommandOutput = {
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
    case "CertificateNotFound":
    case "com.amazonaws.elasticloadbalancingv2#CertificateNotFoundException":
      throw await de_CertificateNotFoundExceptionRes(parsedOutput, context);
    case "ListenerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
      throw await de_ListenerNotFoundExceptionRes(parsedOutput, context);
    case "TooManyCertificates":
    case "com.amazonaws.elasticloadbalancingv2#TooManyCertificatesException":
      throw await de_TooManyCertificatesExceptionRes(parsedOutput, context);
    case "DuplicateTagKeys":
    case "com.amazonaws.elasticloadbalancingv2#DuplicateTagKeysException":
      throw await de_DuplicateTagKeysExceptionRes(parsedOutput, context);
    case "LoadBalancerNotFound":
    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
      throw await de_LoadBalancerNotFoundExceptionRes(parsedOutput, context);
    case "RuleNotFound":
    case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException":
      throw await de_RuleNotFoundExceptionRes(parsedOutput, context);
    case "TargetGroupNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
      throw await de_TargetGroupNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTags":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "TrustStoreNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TrustStoreNotFoundException":
      throw await de_TrustStoreNotFoundExceptionRes(parsedOutput, context);
    case "InvalidRevocationContent":
    case "com.amazonaws.elasticloadbalancingv2#InvalidRevocationContentException":
      throw await de_InvalidRevocationContentExceptionRes(parsedOutput, context);
    case "RevocationContentNotFound":
    case "com.amazonaws.elasticloadbalancingv2#RevocationContentNotFoundException":
      throw await de_RevocationContentNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTrustStoreRevocationEntries":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTrustStoreRevocationEntriesException":
      throw await de_TooManyTrustStoreRevocationEntriesExceptionRes(parsedOutput, context);
    case "ALPNPolicyNotFound":
    case "com.amazonaws.elasticloadbalancingv2#ALPNPolicyNotSupportedException":
      throw await de_ALPNPolicyNotSupportedExceptionRes(parsedOutput, context);
    case "DuplicateListener":
    case "com.amazonaws.elasticloadbalancingv2#DuplicateListenerException":
      throw await de_DuplicateListenerExceptionRes(parsedOutput, context);
    case "IncompatibleProtocols":
    case "com.amazonaws.elasticloadbalancingv2#IncompatibleProtocolsException":
      throw await de_IncompatibleProtocolsExceptionRes(parsedOutput, context);
    case "InvalidConfigurationRequest":
    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
      throw await de_InvalidConfigurationRequestExceptionRes(parsedOutput, context);
    case "InvalidLoadBalancerAction":
    case "com.amazonaws.elasticloadbalancingv2#InvalidLoadBalancerActionException":
      throw await de_InvalidLoadBalancerActionExceptionRes(parsedOutput, context);
    case "SSLPolicyNotFound":
    case "com.amazonaws.elasticloadbalancingv2#SSLPolicyNotFoundException":
      throw await de_SSLPolicyNotFoundExceptionRes(parsedOutput, context);
    case "TargetGroupAssociationLimit":
    case "com.amazonaws.elasticloadbalancingv2#TargetGroupAssociationLimitException":
      throw await de_TargetGroupAssociationLimitExceptionRes(parsedOutput, context);
    case "TooManyActions":
    case "com.amazonaws.elasticloadbalancingv2#TooManyActionsException":
      throw await de_TooManyActionsExceptionRes(parsedOutput, context);
    case "TooManyListeners":
    case "com.amazonaws.elasticloadbalancingv2#TooManyListenersException":
      throw await de_TooManyListenersExceptionRes(parsedOutput, context);
    case "TooManyRegistrationsForTargetId":
    case "com.amazonaws.elasticloadbalancingv2#TooManyRegistrationsForTargetIdException":
      throw await de_TooManyRegistrationsForTargetIdExceptionRes(parsedOutput, context);
    case "TooManyTargets":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetsException":
      throw await de_TooManyTargetsExceptionRes(parsedOutput, context);
    case "TooManyUniqueTargetGroupsPerLoadBalancer":
    case "com.amazonaws.elasticloadbalancingv2#TooManyUniqueTargetGroupsPerLoadBalancerException":
      throw await de_TooManyUniqueTargetGroupsPerLoadBalancerExceptionRes(parsedOutput, context);
    case "TrustStoreNotReady":
    case "com.amazonaws.elasticloadbalancingv2#TrustStoreNotReadyException":
      throw await de_TrustStoreNotReadyExceptionRes(parsedOutput, context);
    case "UnsupportedProtocol":
    case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException":
      throw await de_UnsupportedProtocolExceptionRes(parsedOutput, context);
    case "AllocationIdNotFound":
    case "com.amazonaws.elasticloadbalancingv2#AllocationIdNotFoundException":
      throw await de_AllocationIdNotFoundExceptionRes(parsedOutput, context);
    case "AvailabilityZoneNotSupported":
    case "com.amazonaws.elasticloadbalancingv2#AvailabilityZoneNotSupportedException":
      throw await de_AvailabilityZoneNotSupportedExceptionRes(parsedOutput, context);
    case "DuplicateLoadBalancerName":
    case "com.amazonaws.elasticloadbalancingv2#DuplicateLoadBalancerNameException":
      throw await de_DuplicateLoadBalancerNameExceptionRes(parsedOutput, context);
    case "InvalidScheme":
    case "com.amazonaws.elasticloadbalancingv2#InvalidSchemeException":
      throw await de_InvalidSchemeExceptionRes(parsedOutput, context);
    case "InvalidSecurityGroup":
    case "com.amazonaws.elasticloadbalancingv2#InvalidSecurityGroupException":
      throw await de_InvalidSecurityGroupExceptionRes(parsedOutput, context);
    case "InvalidSubnet":
    case "com.amazonaws.elasticloadbalancingv2#InvalidSubnetException":
      throw await de_InvalidSubnetExceptionRes(parsedOutput, context);
    case "OperationNotPermitted":
    case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.elasticloadbalancingv2#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "SubnetNotFound":
    case "com.amazonaws.elasticloadbalancingv2#SubnetNotFoundException":
      throw await de_SubnetNotFoundExceptionRes(parsedOutput, context);
    case "TooManyLoadBalancers":
    case "com.amazonaws.elasticloadbalancingv2#TooManyLoadBalancersException":
      throw await de_TooManyLoadBalancersExceptionRes(parsedOutput, context);
    case "PriorityInUse":
    case "com.amazonaws.elasticloadbalancingv2#PriorityInUseException":
      throw await de_PriorityInUseExceptionRes(parsedOutput, context);
    case "TooManyRules":
    case "com.amazonaws.elasticloadbalancingv2#TooManyRulesException":
      throw await de_TooManyRulesExceptionRes(parsedOutput, context);
    case "TooManyTargetGroups":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetGroupsException":
      throw await de_TooManyTargetGroupsExceptionRes(parsedOutput, context);
    case "DuplicateTargetGroupName":
    case "com.amazonaws.elasticloadbalancingv2#DuplicateTargetGroupNameException":
      throw await de_DuplicateTargetGroupNameExceptionRes(parsedOutput, context);
    case "CaCertificatesBundleNotFound":
    case "com.amazonaws.elasticloadbalancingv2#CaCertificatesBundleNotFoundException":
      throw await de_CaCertificatesBundleNotFoundExceptionRes(parsedOutput, context);
    case "DuplicateTrustStoreName":
    case "com.amazonaws.elasticloadbalancingv2#DuplicateTrustStoreNameException":
      throw await de_DuplicateTrustStoreNameExceptionRes(parsedOutput, context);
    case "InvalidCaCertificatesBundle":
    case "com.amazonaws.elasticloadbalancingv2#InvalidCaCertificatesBundleException":
      throw await de_InvalidCaCertificatesBundleExceptionRes(parsedOutput, context);
    case "TooManyTrustStores":
    case "com.amazonaws.elasticloadbalancingv2#TooManyTrustStoresException":
      throw await de_TooManyTrustStoresExceptionRes(parsedOutput, context);
    case "AssociationNotFound":
    case "com.amazonaws.elasticloadbalancingv2#TrustStoreAssociationNotFoundException":
      throw await de_TrustStoreAssociationNotFoundExceptionRes(parsedOutput, context);
    case "DeleteAssociationSameAccount":
    case "com.amazonaws.elasticloadbalancingv2#DeleteAssociationSameAccountException":
      throw await de_DeleteAssociationSameAccountExceptionRes(parsedOutput, context);
    case "TrustStoreInUse":
    case "com.amazonaws.elasticloadbalancingv2#TrustStoreInUseException":
      throw await de_TrustStoreInUseExceptionRes(parsedOutput, context);
    case "InvalidTarget":
    case "com.amazonaws.elasticloadbalancingv2#InvalidTargetException":
      throw await de_InvalidTargetExceptionRes(parsedOutput, context);
    case "HealthUnavailable":
    case "com.amazonaws.elasticloadbalancingv2#HealthUnavailableException":
      throw await de_HealthUnavailableExceptionRes(parsedOutput, context);
    case "RevocationIdNotFound":
    case "com.amazonaws.elasticloadbalancingv2#RevocationIdNotFoundException":
      throw await de_RevocationIdNotFoundExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.elasticloadbalancingv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "CapacityDecreaseRequestLimitExceeded":
    case "com.amazonaws.elasticloadbalancingv2#CapacityDecreaseRequestsLimitExceededException":
      throw await de_CapacityDecreaseRequestsLimitExceededExceptionRes(parsedOutput, context);
    case "CapacityReservationPending":
    case "com.amazonaws.elasticloadbalancingv2#CapacityReservationPendingException":
      throw await de_CapacityReservationPendingExceptionRes(parsedOutput, context);
    case "CapacityUnitsLimitExceeded":
    case "com.amazonaws.elasticloadbalancingv2#CapacityUnitsLimitExceededException":
      throw await de_CapacityUnitsLimitExceededExceptionRes(parsedOutput, context);
    case "InsufficientCapacity":
    case "com.amazonaws.elasticloadbalancingv2#InsufficientCapacityException":
      throw await de_InsufficientCapacityExceptionRes(parsedOutput, context);
    case "PriorRequestNotComplete":
    case "com.amazonaws.elasticloadbalancingv2#PriorRequestNotCompleteException":
      throw await de_PriorRequestNotCompleteExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryAllocationIdNotFoundExceptionRes
 */
const de_AllocationIdNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AllocationIdNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AllocationIdNotFoundException(body.Error, context);
  const exception = new AllocationIdNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryALPNPolicyNotSupportedExceptionRes
 */
const de_ALPNPolicyNotSupportedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ALPNPolicyNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ALPNPolicyNotSupportedException(body.Error, context);
  const exception = new ALPNPolicyNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryAvailabilityZoneNotSupportedExceptionRes
 */
const de_AvailabilityZoneNotSupportedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AvailabilityZoneNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AvailabilityZoneNotSupportedException(body.Error, context);
  const exception = new AvailabilityZoneNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCaCertificatesBundleNotFoundExceptionRes
 */
const de_CaCertificatesBundleNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CaCertificatesBundleNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CaCertificatesBundleNotFoundException(body.Error, context);
  const exception = new CaCertificatesBundleNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCapacityDecreaseRequestsLimitExceededExceptionRes
 */
const de_CapacityDecreaseRequestsLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CapacityDecreaseRequestsLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CapacityDecreaseRequestsLimitExceededException(body.Error, context);
  const exception = new CapacityDecreaseRequestsLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCapacityReservationPendingExceptionRes
 */
const de_CapacityReservationPendingExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CapacityReservationPendingException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CapacityReservationPendingException(body.Error, context);
  const exception = new CapacityReservationPendingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCapacityUnitsLimitExceededExceptionRes
 */
const de_CapacityUnitsLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CapacityUnitsLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CapacityUnitsLimitExceededException(body.Error, context);
  const exception = new CapacityUnitsLimitExceededException({
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
 * deserializeAws_queryDeleteAssociationSameAccountExceptionRes
 */
const de_DeleteAssociationSameAccountExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeleteAssociationSameAccountException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DeleteAssociationSameAccountException(body.Error, context);
  const exception = new DeleteAssociationSameAccountException({
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
 * deserializeAws_queryDuplicateLoadBalancerNameExceptionRes
 */
const de_DuplicateLoadBalancerNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateLoadBalancerNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicateLoadBalancerNameException(body.Error, context);
  const exception = new DuplicateLoadBalancerNameException({
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
 * deserializeAws_queryDuplicateTargetGroupNameExceptionRes
 */
const de_DuplicateTargetGroupNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateTargetGroupNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicateTargetGroupNameException(body.Error, context);
  const exception = new DuplicateTargetGroupNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDuplicateTrustStoreNameExceptionRes
 */
const de_DuplicateTrustStoreNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateTrustStoreNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicateTrustStoreNameException(body.Error, context);
  const exception = new DuplicateTrustStoreNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryHealthUnavailableExceptionRes
 */
const de_HealthUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HealthUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_HealthUnavailableException(body.Error, context);
  const exception = new HealthUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryIncompatibleProtocolsExceptionRes
 */
const de_IncompatibleProtocolsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncompatibleProtocolsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IncompatibleProtocolsException(body.Error, context);
  const exception = new IncompatibleProtocolsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInsufficientCapacityExceptionRes
 */
const de_InsufficientCapacityExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientCapacityException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InsufficientCapacityException(body.Error, context);
  const exception = new InsufficientCapacityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidCaCertificatesBundleExceptionRes
 */
const de_InvalidCaCertificatesBundleExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCaCertificatesBundleException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidCaCertificatesBundleException(body.Error, context);
  const exception = new InvalidCaCertificatesBundleException({
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
 * deserializeAws_queryInvalidLoadBalancerActionExceptionRes
 */
const de_InvalidLoadBalancerActionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLoadBalancerActionException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidLoadBalancerActionException(body.Error, context);
  const exception = new InvalidLoadBalancerActionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidRevocationContentExceptionRes
 */
const de_InvalidRevocationContentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRevocationContentException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidRevocationContentException(body.Error, context);
  const exception = new InvalidRevocationContentException({
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
 * deserializeAws_queryInvalidTargetExceptionRes
 */
const de_InvalidTargetExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTargetException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTargetException(body.Error, context);
  const exception = new InvalidTargetException({
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
 * deserializeAws_queryLoadBalancerNotFoundExceptionRes
 */
const de_LoadBalancerNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LoadBalancerNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LoadBalancerNotFoundException(body.Error, context);
  const exception = new LoadBalancerNotFoundException({
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
 * deserializeAws_queryPriorityInUseExceptionRes
 */
const de_PriorityInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PriorityInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PriorityInUseException(body.Error, context);
  const exception = new PriorityInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryPriorRequestNotCompleteExceptionRes
 */
const de_PriorRequestNotCompleteExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PriorRequestNotCompleteException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PriorRequestNotCompleteException(body.Error, context);
  const exception = new PriorRequestNotCompleteException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceInUseException(body.Error, context);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body.Error, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryRevocationContentNotFoundExceptionRes
 */
const de_RevocationContentNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RevocationContentNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RevocationContentNotFoundException(body.Error, context);
  const exception = new RevocationContentNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryRevocationIdNotFoundExceptionRes
 */
const de_RevocationIdNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RevocationIdNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RevocationIdNotFoundException(body.Error, context);
  const exception = new RevocationIdNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryRuleNotFoundExceptionRes
 */
const de_RuleNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RuleNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RuleNotFoundException(body.Error, context);
  const exception = new RuleNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySSLPolicyNotFoundExceptionRes
 */
const de_SSLPolicyNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SSLPolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SSLPolicyNotFoundException(body.Error, context);
  const exception = new SSLPolicyNotFoundException({
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
 * deserializeAws_queryTargetGroupAssociationLimitExceptionRes
 */
const de_TargetGroupAssociationLimitExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TargetGroupAssociationLimitException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TargetGroupAssociationLimitException(body.Error, context);
  const exception = new TargetGroupAssociationLimitException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTargetGroupNotFoundExceptionRes
 */
const de_TargetGroupNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TargetGroupNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TargetGroupNotFoundException(body.Error, context);
  const exception = new TargetGroupNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyActionsExceptionRes
 */
const de_TooManyActionsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyActionsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyActionsException(body.Error, context);
  const exception = new TooManyActionsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyCertificatesExceptionRes
 */
const de_TooManyCertificatesExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyCertificatesException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyCertificatesException(body.Error, context);
  const exception = new TooManyCertificatesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyListenersExceptionRes
 */
const de_TooManyListenersExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyListenersException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyListenersException(body.Error, context);
  const exception = new TooManyListenersException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyLoadBalancersExceptionRes
 */
const de_TooManyLoadBalancersExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyLoadBalancersException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyLoadBalancersException(body.Error, context);
  const exception = new TooManyLoadBalancersException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyRegistrationsForTargetIdExceptionRes
 */
const de_TooManyRegistrationsForTargetIdExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRegistrationsForTargetIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyRegistrationsForTargetIdException(body.Error, context);
  const exception = new TooManyRegistrationsForTargetIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyRulesExceptionRes
 */
const de_TooManyRulesExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRulesException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyRulesException(body.Error, context);
  const exception = new TooManyRulesException({
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
 * deserializeAws_queryTooManyTargetGroupsExceptionRes
 */
const de_TooManyTargetGroupsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTargetGroupsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyTargetGroupsException(body.Error, context);
  const exception = new TooManyTargetGroupsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyTargetsExceptionRes
 */
const de_TooManyTargetsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTargetsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyTargetsException(body.Error, context);
  const exception = new TooManyTargetsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyTrustStoreRevocationEntriesExceptionRes
 */
const de_TooManyTrustStoreRevocationEntriesExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTrustStoreRevocationEntriesException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyTrustStoreRevocationEntriesException(body.Error, context);
  const exception = new TooManyTrustStoreRevocationEntriesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyTrustStoresExceptionRes
 */
const de_TooManyTrustStoresExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTrustStoresException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyTrustStoresException(body.Error, context);
  const exception = new TooManyTrustStoresException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionRes
 */
const de_TooManyUniqueTargetGroupsPerLoadBalancerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyUniqueTargetGroupsPerLoadBalancerException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyUniqueTargetGroupsPerLoadBalancerException(body.Error, context);
  const exception = new TooManyUniqueTargetGroupsPerLoadBalancerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTrustStoreAssociationNotFoundExceptionRes
 */
const de_TrustStoreAssociationNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrustStoreAssociationNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TrustStoreAssociationNotFoundException(body.Error, context);
  const exception = new TrustStoreAssociationNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTrustStoreInUseExceptionRes
 */
const de_TrustStoreInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrustStoreInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TrustStoreInUseException(body.Error, context);
  const exception = new TrustStoreInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTrustStoreNotFoundExceptionRes
 */
const de_TrustStoreNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrustStoreNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TrustStoreNotFoundException(body.Error, context);
  const exception = new TrustStoreNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTrustStoreNotReadyExceptionRes
 */
const de_TrustStoreNotReadyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrustStoreNotReadyException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TrustStoreNotReadyException(body.Error, context);
  const exception = new TrustStoreNotReadyException({
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
 * serializeAws_queryAction
 */
const se_Action = (input: Action, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_T] != null) {
    entries[_T] = input[_T];
  }
  if (input[_TGA] != null) {
    entries[_TGA] = input[_TGA];
  }
  if (input[_AOC] != null) {
    const memberEntries = se_AuthenticateOidcActionConfig(input[_AOC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AuthenticateOidcConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ACC] != null) {
    const memberEntries = se_AuthenticateCognitoActionConfig(input[_ACC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AuthenticateCognitoConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_O] != null) {
    entries[_O] = input[_O];
  }
  if (input[_RC] != null) {
    const memberEntries = se_RedirectActionConfig(input[_RC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RedirectConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_FRC] != null) {
    const memberEntries = se_FixedResponseActionConfig(input[_FRC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `FixedResponseConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_FC] != null) {
    const memberEntries = se_ForwardActionConfig(input[_FC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ForwardConfig.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryActions
 */
const se_Actions = (input: Action[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_Action(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryAddListenerCertificatesInput
 */
const se_AddListenerCertificatesInput = (input: AddListenerCertificatesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LA] != null) {
    entries[_LA] = input[_LA];
  }
  if (input[_C] != null) {
    const memberEntries = se_CertificateList(input[_C], context);
    if (input[_C]?.length === 0) {
      entries.Certificates = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Certificates.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryAddTagsInput
 */
const se_AddTagsInput = (input: AddTagsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RA] != null) {
    const memberEntries = se_ResourceArns(input[_RA], context);
    if (input[_RA]?.length === 0) {
      entries.ResourceArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Ta] != null) {
    const memberEntries = se_TagList(input[_Ta], context);
    if (input[_Ta]?.length === 0) {
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
 * serializeAws_queryAddTrustStoreRevocationsInput
 */
const se_AddTrustStoreRevocationsInput = (input: AddTrustStoreRevocationsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TSA] != null) {
    entries[_TSA] = input[_TSA];
  }
  if (input[_RCe] != null) {
    const memberEntries = se_RevocationContents(input[_RCe], context);
    if (input[_RCe]?.length === 0) {
      entries.RevocationContents = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RevocationContents.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryAlpnPolicyName
 */
const se_AlpnPolicyName = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryAuthenticateCognitoActionAuthenticationRequestExtraParams
 */
const se_AuthenticateCognitoActionAuthenticationRequestExtraParams = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key as keyof typeof input] != null)
    .forEach((key) => {
      entries[`entry.${counter}.key`] = key;
      entries[`entry.${counter}.value`] = input[key as keyof typeof input]!;
      counter++;
    });
  return entries;
};

/**
 * serializeAws_queryAuthenticateCognitoActionConfig
 */
const se_AuthenticateCognitoActionConfig = (input: AuthenticateCognitoActionConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UPA] != null) {
    entries[_UPA] = input[_UPA];
  }
  if (input[_UPCI] != null) {
    entries[_UPCI] = input[_UPCI];
  }
  if (input[_UPD] != null) {
    entries[_UPD] = input[_UPD];
  }
  if (input[_SCN] != null) {
    entries[_SCN] = input[_SCN];
  }
  if (input[_S] != null) {
    entries[_S] = input[_S];
  }
  if (input[_ST] != null) {
    entries[_ST] = input[_ST];
  }
  if (input[_AREP] != null) {
    const memberEntries = se_AuthenticateCognitoActionAuthenticationRequestExtraParams(input[_AREP], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AuthenticationRequestExtraParams.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_OUR] != null) {
    entries[_OUR] = input[_OUR];
  }
  return entries;
};

/**
 * serializeAws_queryAuthenticateOidcActionAuthenticationRequestExtraParams
 */
const se_AuthenticateOidcActionAuthenticationRequestExtraParams = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key as keyof typeof input] != null)
    .forEach((key) => {
      entries[`entry.${counter}.key`] = key;
      entries[`entry.${counter}.value`] = input[key as keyof typeof input]!;
      counter++;
    });
  return entries;
};

/**
 * serializeAws_queryAuthenticateOidcActionConfig
 */
const se_AuthenticateOidcActionConfig = (input: AuthenticateOidcActionConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_AE] != null) {
    entries[_AE] = input[_AE];
  }
  if (input[_TE] != null) {
    entries[_TE] = input[_TE];
  }
  if (input[_UIE] != null) {
    entries[_UIE] = input[_UIE];
  }
  if (input[_CI] != null) {
    entries[_CI] = input[_CI];
  }
  if (input[_CS] != null) {
    entries[_CS] = input[_CS];
  }
  if (input[_SCN] != null) {
    entries[_SCN] = input[_SCN];
  }
  if (input[_S] != null) {
    entries[_S] = input[_S];
  }
  if (input[_ST] != null) {
    entries[_ST] = input[_ST];
  }
  if (input[_AREP] != null) {
    const memberEntries = se_AuthenticateOidcActionAuthenticationRequestExtraParams(input[_AREP], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AuthenticationRequestExtraParams.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_OUR] != null) {
    entries[_OUR] = input[_OUR];
  }
  if (input[_UECS] != null) {
    entries[_UECS] = input[_UECS];
  }
  return entries;
};

/**
 * serializeAws_queryCertificate
 */
const se_Certificate = (input: Certificate, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CA] != null) {
    entries[_CA] = input[_CA];
  }
  if (input[_ID] != null) {
    entries[_ID] = input[_ID];
  }
  return entries;
};

/**
 * serializeAws_queryCertificateList
 */
const se_CertificateList = (input: Certificate[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_Certificate(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryCreateListenerInput
 */
const se_CreateListenerInput = (input: CreateListenerInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LBA] != null) {
    entries[_LBA] = input[_LBA];
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_Po] != null) {
    entries[_Po] = input[_Po];
  }
  if (input[_SP] != null) {
    entries[_SP] = input[_SP];
  }
  if (input[_C] != null) {
    const memberEntries = se_CertificateList(input[_C], context);
    if (input[_C]?.length === 0) {
      entries.Certificates = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Certificates.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DA] != null) {
    const memberEntries = se_Actions(input[_DA], context);
    if (input[_DA]?.length === 0) {
      entries.DefaultActions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DefaultActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AP] != null) {
    const memberEntries = se_AlpnPolicyName(input[_AP], context);
    if (input[_AP]?.length === 0) {
      entries.AlpnPolicy = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlpnPolicy.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Ta] != null) {
    const memberEntries = se_TagList(input[_Ta], context);
    if (input[_Ta]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MA] != null) {
    const memberEntries = se_MutualAuthenticationAttributes(input[_MA], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MutualAuthentication.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreateLoadBalancerInput
 */
const se_CreateLoadBalancerInput = (input: CreateLoadBalancerInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_Su] != null) {
    const memberEntries = se_Subnets(input[_Su], context);
    if (input[_Su]?.length === 0) {
      entries.Subnets = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Subnets.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SM] != null) {
    const memberEntries = se_SubnetMappings(input[_SM], context);
    if (input[_SM]?.length === 0) {
      entries.SubnetMappings = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SubnetMappings.${key}`;
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
  if (input[_Ta] != null) {
    const memberEntries = se_TagList(input[_Ta], context);
    if (input[_Ta]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_T] != null) {
    entries[_T] = input[_T];
  }
  if (input[_IAT] != null) {
    entries[_IAT] = input[_IAT];
  }
  if (input[_COIP] != null) {
    entries[_COIP] = input[_COIP];
  }
  if (input[_EPFISN] != null) {
    entries[_EPFISN] = input[_EPFISN];
  }
  return entries;
};

/**
 * serializeAws_queryCreateRuleInput
 */
const se_CreateRuleInput = (input: CreateRuleInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LA] != null) {
    entries[_LA] = input[_LA];
  }
  if (input[_Co] != null) {
    const memberEntries = se_RuleConditionList(input[_Co], context);
    if (input[_Co]?.length === 0) {
      entries.Conditions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Conditions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Pr] != null) {
    entries[_Pr] = input[_Pr];
  }
  if (input[_Ac] != null) {
    const memberEntries = se_Actions(input[_Ac], context);
    if (input[_Ac]?.length === 0) {
      entries.Actions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Actions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Ta] != null) {
    const memberEntries = se_TagList(input[_Ta], context);
    if (input[_Ta]?.length === 0) {
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
 * serializeAws_queryCreateTargetGroupInput
 */
const se_CreateTargetGroupInput = (input: CreateTargetGroupInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_PV] != null) {
    entries[_PV] = input[_PV];
  }
  if (input[_Po] != null) {
    entries[_Po] = input[_Po];
  }
  if (input[_VI] != null) {
    entries[_VI] = input[_VI];
  }
  if (input[_HCP] != null) {
    entries[_HCP] = input[_HCP];
  }
  if (input[_HCPe] != null) {
    entries[_HCPe] = input[_HCPe];
  }
  if (input[_HCE] != null) {
    entries[_HCE] = input[_HCE];
  }
  if (input[_HCPea] != null) {
    entries[_HCPea] = input[_HCPea];
  }
  if (input[_HCIS] != null) {
    entries[_HCIS] = input[_HCIS];
  }
  if (input[_HCTS] != null) {
    entries[_HCTS] = input[_HCTS];
  }
  if (input[_HTC] != null) {
    entries[_HTC] = input[_HTC];
  }
  if (input[_UTC] != null) {
    entries[_UTC] = input[_UTC];
  }
  if (input[_M] != null) {
    const memberEntries = se_Matcher(input[_M], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Matcher.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_TT] != null) {
    entries[_TT] = input[_TT];
  }
  if (input[_Ta] != null) {
    const memberEntries = se_TagList(input[_Ta], context);
    if (input[_Ta]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_IAT] != null) {
    entries[_IAT] = input[_IAT];
  }
  return entries;
};

/**
 * serializeAws_queryCreateTrustStoreInput
 */
const se_CreateTrustStoreInput = (input: CreateTrustStoreInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_CCBSB] != null) {
    entries[_CCBSB] = input[_CCBSB];
  }
  if (input[_CCBSK] != null) {
    entries[_CCBSK] = input[_CCBSK];
  }
  if (input[_CCBSOV] != null) {
    entries[_CCBSOV] = input[_CCBSOV];
  }
  if (input[_Ta] != null) {
    const memberEntries = se_TagList(input[_Ta], context);
    if (input[_Ta]?.length === 0) {
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
 * serializeAws_queryDeleteListenerInput
 */
const se_DeleteListenerInput = (input: DeleteListenerInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LA] != null) {
    entries[_LA] = input[_LA];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteLoadBalancerInput
 */
const se_DeleteLoadBalancerInput = (input: DeleteLoadBalancerInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LBA] != null) {
    entries[_LBA] = input[_LBA];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteRuleInput
 */
const se_DeleteRuleInput = (input: DeleteRuleInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RAu] != null) {
    entries[_RAu] = input[_RAu];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteSharedTrustStoreAssociationInput
 */
const se_DeleteSharedTrustStoreAssociationInput = (
  input: DeleteSharedTrustStoreAssociationInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_TSA] != null) {
    entries[_TSA] = input[_TSA];
  }
  if (input[_RAe] != null) {
    entries[_RAe] = input[_RAe];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteTargetGroupInput
 */
const se_DeleteTargetGroupInput = (input: DeleteTargetGroupInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TGA] != null) {
    entries[_TGA] = input[_TGA];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteTrustStoreInput
 */
const se_DeleteTrustStoreInput = (input: DeleteTrustStoreInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TSA] != null) {
    entries[_TSA] = input[_TSA];
  }
  return entries;
};

/**
 * serializeAws_queryDeregisterTargetsInput
 */
const se_DeregisterTargetsInput = (input: DeregisterTargetsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TGA] != null) {
    entries[_TGA] = input[_TGA];
  }
  if (input[_Tar] != null) {
    const memberEntries = se_TargetDescriptions(input[_Tar], context);
    if (input[_Tar]?.length === 0) {
      entries.Targets = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Targets.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDescribeAccountLimitsInput
 */
const se_DescribeAccountLimitsInput = (input: DescribeAccountLimitsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  if (input[_PS] != null) {
    entries[_PS] = input[_PS];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeCapacityReservationInput
 */
const se_DescribeCapacityReservationInput = (input: DescribeCapacityReservationInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LBA] != null) {
    entries[_LBA] = input[_LBA];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeListenerAttributesInput
 */
const se_DescribeListenerAttributesInput = (input: DescribeListenerAttributesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LA] != null) {
    entries[_LA] = input[_LA];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeListenerCertificatesInput
 */
const se_DescribeListenerCertificatesInput = (
  input: DescribeListenerCertificatesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_LA] != null) {
    entries[_LA] = input[_LA];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  if (input[_PS] != null) {
    entries[_PS] = input[_PS];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeListenersInput
 */
const se_DescribeListenersInput = (input: DescribeListenersInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LBA] != null) {
    entries[_LBA] = input[_LBA];
  }
  if (input[_LAi] != null) {
    const memberEntries = se_ListenerArns(input[_LAi], context);
    if (input[_LAi]?.length === 0) {
      entries.ListenerArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ListenerArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  if (input[_PS] != null) {
    entries[_PS] = input[_PS];
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
  if (input[_LBA] != null) {
    entries[_LBA] = input[_LBA];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeLoadBalancersInput
 */
const se_DescribeLoadBalancersInput = (input: DescribeLoadBalancersInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LBAo] != null) {
    const memberEntries = se_LoadBalancerArns(input[_LBAo], context);
    if (input[_LBAo]?.length === 0) {
      entries.LoadBalancerArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoadBalancerArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Na] != null) {
    const memberEntries = se_LoadBalancerNames(input[_Na], context);
    if (input[_Na]?.length === 0) {
      entries.Names = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Names.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  if (input[_PS] != null) {
    entries[_PS] = input[_PS];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeRulesInput
 */
const se_DescribeRulesInput = (input: DescribeRulesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LA] != null) {
    entries[_LA] = input[_LA];
  }
  if (input[_RAul] != null) {
    const memberEntries = se_RuleArns(input[_RAul], context);
    if (input[_RAul]?.length === 0) {
      entries.RuleArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RuleArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  if (input[_PS] != null) {
    entries[_PS] = input[_PS];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeSSLPoliciesInput
 */
const se_DescribeSSLPoliciesInput = (input: DescribeSSLPoliciesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Na] != null) {
    const memberEntries = se_SslPolicyNames(input[_Na], context);
    if (input[_Na]?.length === 0) {
      entries.Names = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Names.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  if (input[_PS] != null) {
    entries[_PS] = input[_PS];
  }
  if (input[_LBT] != null) {
    entries[_LBT] = input[_LBT];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeTagsInput
 */
const se_DescribeTagsInput = (input: DescribeTagsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RA] != null) {
    const memberEntries = se_ResourceArns(input[_RA], context);
    if (input[_RA]?.length === 0) {
      entries.ResourceArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceArns.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDescribeTargetGroupAttributesInput
 */
const se_DescribeTargetGroupAttributesInput = (
  input: DescribeTargetGroupAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_TGA] != null) {
    entries[_TGA] = input[_TGA];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeTargetGroupsInput
 */
const se_DescribeTargetGroupsInput = (input: DescribeTargetGroupsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LBA] != null) {
    entries[_LBA] = input[_LBA];
  }
  if (input[_TGAa] != null) {
    const memberEntries = se_TargetGroupArns(input[_TGAa], context);
    if (input[_TGAa]?.length === 0) {
      entries.TargetGroupArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetGroupArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Na] != null) {
    const memberEntries = se_TargetGroupNames(input[_Na], context);
    if (input[_Na]?.length === 0) {
      entries.Names = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Names.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  if (input[_PS] != null) {
    entries[_PS] = input[_PS];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeTargetHealthInput
 */
const se_DescribeTargetHealthInput = (input: DescribeTargetHealthInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TGA] != null) {
    entries[_TGA] = input[_TGA];
  }
  if (input[_Tar] != null) {
    const memberEntries = se_TargetDescriptions(input[_Tar], context);
    if (input[_Tar]?.length === 0) {
      entries.Targets = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Targets.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_In] != null) {
    const memberEntries = se_ListOfDescribeTargetHealthIncludeOptions(input[_In], context);
    if (input[_In]?.length === 0) {
      entries.Include = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Include.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDescribeTrustStoreAssociationsInput
 */
const se_DescribeTrustStoreAssociationsInput = (
  input: DescribeTrustStoreAssociationsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_TSA] != null) {
    entries[_TSA] = input[_TSA];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  if (input[_PS] != null) {
    entries[_PS] = input[_PS];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeTrustStoreRevocationsInput
 */
const se_DescribeTrustStoreRevocationsInput = (
  input: DescribeTrustStoreRevocationsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_TSA] != null) {
    entries[_TSA] = input[_TSA];
  }
  if (input[_RI] != null) {
    const memberEntries = se_RevocationIds(input[_RI], context);
    if (input[_RI]?.length === 0) {
      entries.RevocationIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RevocationIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  if (input[_PS] != null) {
    entries[_PS] = input[_PS];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeTrustStoresInput
 */
const se_DescribeTrustStoresInput = (input: DescribeTrustStoresInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TSAr] != null) {
    const memberEntries = se_TrustStoreArns(input[_TSAr], context);
    if (input[_TSAr]?.length === 0) {
      entries.TrustStoreArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TrustStoreArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Na] != null) {
    const memberEntries = se_TrustStoreNames(input[_Na], context);
    if (input[_Na]?.length === 0) {
      entries.Names = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Names.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  if (input[_PS] != null) {
    entries[_PS] = input[_PS];
  }
  return entries;
};

/**
 * serializeAws_queryFixedResponseActionConfig
 */
const se_FixedResponseActionConfig = (input: FixedResponseActionConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_MB] != null) {
    entries[_MB] = input[_MB];
  }
  if (input[_SC] != null) {
    entries[_SC] = input[_SC];
  }
  if (input[_CT] != null) {
    entries[_CT] = input[_CT];
  }
  return entries;
};

/**
 * serializeAws_queryForwardActionConfig
 */
const se_ForwardActionConfig = (input: ForwardActionConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TG] != null) {
    const memberEntries = se_TargetGroupList(input[_TG], context);
    if (input[_TG]?.length === 0) {
      entries.TargetGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_TGSC] != null) {
    const memberEntries = se_TargetGroupStickinessConfig(input[_TGSC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetGroupStickinessConfig.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryGetResourcePolicyInput
 */
const se_GetResourcePolicyInput = (input: GetResourcePolicyInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RAe] != null) {
    entries[_RAe] = input[_RAe];
  }
  return entries;
};

/**
 * serializeAws_queryGetTrustStoreCaCertificatesBundleInput
 */
const se_GetTrustStoreCaCertificatesBundleInput = (
  input: GetTrustStoreCaCertificatesBundleInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_TSA] != null) {
    entries[_TSA] = input[_TSA];
  }
  return entries;
};

/**
 * serializeAws_queryGetTrustStoreRevocationContentInput
 */
const se_GetTrustStoreRevocationContentInput = (
  input: GetTrustStoreRevocationContentInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_TSA] != null) {
    entries[_TSA] = input[_TSA];
  }
  if (input[_RIe] != null) {
    entries[_RIe] = input[_RIe];
  }
  return entries;
};

/**
 * serializeAws_queryHostHeaderConditionConfig
 */
const se_HostHeaderConditionConfig = (input: HostHeaderConditionConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Va] != null) {
    const memberEntries = se_ListOfString(input[_Va], context);
    if (input[_Va]?.length === 0) {
      entries.Values = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryHttpHeaderConditionConfig
 */
const se_HttpHeaderConditionConfig = (input: HttpHeaderConditionConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_HHN] != null) {
    entries[_HHN] = input[_HHN];
  }
  if (input[_Va] != null) {
    const memberEntries = se_ListOfString(input[_Va], context);
    if (input[_Va]?.length === 0) {
      entries.Values = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryHttpRequestMethodConditionConfig
 */
const se_HttpRequestMethodConditionConfig = (input: HttpRequestMethodConditionConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Va] != null) {
    const memberEntries = se_ListOfString(input[_Va], context);
    if (input[_Va]?.length === 0) {
      entries.Values = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryListenerArns
 */
const se_ListenerArns = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryListenerAttribute
 */
const se_ListenerAttribute = (input: ListenerAttribute, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_K] != null) {
    entries[_K] = input[_K];
  }
  if (input[_Val] != null) {
    entries[_Val] = input[_Val];
  }
  return entries;
};

/**
 * serializeAws_queryListenerAttributes
 */
const se_ListenerAttributes = (input: ListenerAttribute[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_ListenerAttribute(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryListOfDescribeTargetHealthIncludeOptions
 */
const se_ListOfDescribeTargetHealthIncludeOptions = (
  input: DescribeTargetHealthInputIncludeEnum[],
  context: __SerdeContext
): any => {
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
 * serializeAws_queryListOfString
 */
const se_ListOfString = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryLoadBalancerArns
 */
const se_LoadBalancerArns = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryLoadBalancerAttribute
 */
const se_LoadBalancerAttribute = (input: LoadBalancerAttribute, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_K] != null) {
    entries[_K] = input[_K];
  }
  if (input[_Val] != null) {
    entries[_Val] = input[_Val];
  }
  return entries;
};

/**
 * serializeAws_queryLoadBalancerAttributes
 */
const se_LoadBalancerAttributes = (input: LoadBalancerAttribute[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_LoadBalancerAttribute(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
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
 * serializeAws_queryMatcher
 */
const se_Matcher = (input: Matcher, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_HC] != null) {
    entries[_HC] = input[_HC];
  }
  if (input[_GC] != null) {
    entries[_GC] = input[_GC];
  }
  return entries;
};

/**
 * serializeAws_queryMinimumLoadBalancerCapacity
 */
const se_MinimumLoadBalancerCapacity = (input: MinimumLoadBalancerCapacity, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CU] != null) {
    entries[_CU] = input[_CU];
  }
  return entries;
};

/**
 * serializeAws_queryModifyCapacityReservationInput
 */
const se_ModifyCapacityReservationInput = (input: ModifyCapacityReservationInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LBA] != null) {
    entries[_LBA] = input[_LBA];
  }
  if (input[_MLBC] != null) {
    const memberEntries = se_MinimumLoadBalancerCapacity(input[_MLBC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MinimumLoadBalancerCapacity.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RCR] != null) {
    entries[_RCR] = input[_RCR];
  }
  return entries;
};

/**
 * serializeAws_queryModifyListenerAttributesInput
 */
const se_ModifyListenerAttributesInput = (input: ModifyListenerAttributesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LA] != null) {
    entries[_LA] = input[_LA];
  }
  if (input[_At] != null) {
    const memberEntries = se_ListenerAttributes(input[_At], context);
    if (input[_At]?.length === 0) {
      entries.Attributes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attributes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryModifyListenerInput
 */
const se_ModifyListenerInput = (input: ModifyListenerInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LA] != null) {
    entries[_LA] = input[_LA];
  }
  if (input[_Po] != null) {
    entries[_Po] = input[_Po];
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_SP] != null) {
    entries[_SP] = input[_SP];
  }
  if (input[_C] != null) {
    const memberEntries = se_CertificateList(input[_C], context);
    if (input[_C]?.length === 0) {
      entries.Certificates = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Certificates.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DA] != null) {
    const memberEntries = se_Actions(input[_DA], context);
    if (input[_DA]?.length === 0) {
      entries.DefaultActions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DefaultActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AP] != null) {
    const memberEntries = se_AlpnPolicyName(input[_AP], context);
    if (input[_AP]?.length === 0) {
      entries.AlpnPolicy = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlpnPolicy.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MA] != null) {
    const memberEntries = se_MutualAuthenticationAttributes(input[_MA], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MutualAuthentication.${key}`;
      entries[loc] = value;
    });
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
  if (input[_LBA] != null) {
    entries[_LBA] = input[_LBA];
  }
  if (input[_At] != null) {
    const memberEntries = se_LoadBalancerAttributes(input[_At], context);
    if (input[_At]?.length === 0) {
      entries.Attributes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attributes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryModifyRuleInput
 */
const se_ModifyRuleInput = (input: ModifyRuleInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RAu] != null) {
    entries[_RAu] = input[_RAu];
  }
  if (input[_Co] != null) {
    const memberEntries = se_RuleConditionList(input[_Co], context);
    if (input[_Co]?.length === 0) {
      entries.Conditions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Conditions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Ac] != null) {
    const memberEntries = se_Actions(input[_Ac], context);
    if (input[_Ac]?.length === 0) {
      entries.Actions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Actions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryModifyTargetGroupAttributesInput
 */
const se_ModifyTargetGroupAttributesInput = (input: ModifyTargetGroupAttributesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TGA] != null) {
    entries[_TGA] = input[_TGA];
  }
  if (input[_At] != null) {
    const memberEntries = se_TargetGroupAttributes(input[_At], context);
    if (input[_At]?.length === 0) {
      entries.Attributes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attributes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryModifyTargetGroupInput
 */
const se_ModifyTargetGroupInput = (input: ModifyTargetGroupInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TGA] != null) {
    entries[_TGA] = input[_TGA];
  }
  if (input[_HCP] != null) {
    entries[_HCP] = input[_HCP];
  }
  if (input[_HCPe] != null) {
    entries[_HCPe] = input[_HCPe];
  }
  if (input[_HCPea] != null) {
    entries[_HCPea] = input[_HCPea];
  }
  if (input[_HCE] != null) {
    entries[_HCE] = input[_HCE];
  }
  if (input[_HCIS] != null) {
    entries[_HCIS] = input[_HCIS];
  }
  if (input[_HCTS] != null) {
    entries[_HCTS] = input[_HCTS];
  }
  if (input[_HTC] != null) {
    entries[_HTC] = input[_HTC];
  }
  if (input[_UTC] != null) {
    entries[_UTC] = input[_UTC];
  }
  if (input[_M] != null) {
    const memberEntries = se_Matcher(input[_M], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Matcher.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryModifyTrustStoreInput
 */
const se_ModifyTrustStoreInput = (input: ModifyTrustStoreInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TSA] != null) {
    entries[_TSA] = input[_TSA];
  }
  if (input[_CCBSB] != null) {
    entries[_CCBSB] = input[_CCBSB];
  }
  if (input[_CCBSK] != null) {
    entries[_CCBSK] = input[_CCBSK];
  }
  if (input[_CCBSOV] != null) {
    entries[_CCBSOV] = input[_CCBSOV];
  }
  return entries;
};

/**
 * serializeAws_queryMutualAuthenticationAttributes
 */
const se_MutualAuthenticationAttributes = (input: MutualAuthenticationAttributes, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Mo] != null) {
    entries[_Mo] = input[_Mo];
  }
  if (input[_TSA] != null) {
    entries[_TSA] = input[_TSA];
  }
  if (input[_ICCE] != null) {
    entries[_ICCE] = input[_ICCE];
  }
  if (input[_TSAS] != null) {
    entries[_TSAS] = input[_TSAS];
  }
  return entries;
};

/**
 * serializeAws_queryPathPatternConditionConfig
 */
const se_PathPatternConditionConfig = (input: PathPatternConditionConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Va] != null) {
    const memberEntries = se_ListOfString(input[_Va], context);
    if (input[_Va]?.length === 0) {
      entries.Values = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryQueryStringConditionConfig
 */
const se_QueryStringConditionConfig = (input: QueryStringConditionConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Va] != null) {
    const memberEntries = se_QueryStringKeyValuePairList(input[_Va], context);
    if (input[_Va]?.length === 0) {
      entries.Values = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryQueryStringKeyValuePair
 */
const se_QueryStringKeyValuePair = (input: QueryStringKeyValuePair, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_K] != null) {
    entries[_K] = input[_K];
  }
  if (input[_Val] != null) {
    entries[_Val] = input[_Val];
  }
  return entries;
};

/**
 * serializeAws_queryQueryStringKeyValuePairList
 */
const se_QueryStringKeyValuePairList = (input: QueryStringKeyValuePair[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_QueryStringKeyValuePair(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryRedirectActionConfig
 */
const se_RedirectActionConfig = (input: RedirectActionConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_Po] != null) {
    entries[_Po] = input[_Po];
  }
  if (input[_H] != null) {
    entries[_H] = input[_H];
  }
  if (input[_Pa] != null) {
    entries[_Pa] = input[_Pa];
  }
  if (input[_Q] != null) {
    entries[_Q] = input[_Q];
  }
  if (input[_SC] != null) {
    entries[_SC] = input[_SC];
  }
  return entries;
};

/**
 * serializeAws_queryRegisterTargetsInput
 */
const se_RegisterTargetsInput = (input: RegisterTargetsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TGA] != null) {
    entries[_TGA] = input[_TGA];
  }
  if (input[_Tar] != null) {
    const memberEntries = se_TargetDescriptions(input[_Tar], context);
    if (input[_Tar]?.length === 0) {
      entries.Targets = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Targets.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryRemoveListenerCertificatesInput
 */
const se_RemoveListenerCertificatesInput = (input: RemoveListenerCertificatesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LA] != null) {
    entries[_LA] = input[_LA];
  }
  if (input[_C] != null) {
    const memberEntries = se_CertificateList(input[_C], context);
    if (input[_C]?.length === 0) {
      entries.Certificates = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Certificates.${key}`;
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
  if (input[_RA] != null) {
    const memberEntries = se_ResourceArns(input[_RA], context);
    if (input[_RA]?.length === 0) {
      entries.ResourceArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_TK] != null) {
    const memberEntries = se_TagKeys(input[_TK], context);
    if (input[_TK]?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryRemoveTrustStoreRevocationsInput
 */
const se_RemoveTrustStoreRevocationsInput = (input: RemoveTrustStoreRevocationsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TSA] != null) {
    entries[_TSA] = input[_TSA];
  }
  if (input[_RI] != null) {
    const memberEntries = se_RevocationIds(input[_RI], context);
    if (input[_RI]?.length === 0) {
      entries.RevocationIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RevocationIds.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryResourceArns
 */
const se_ResourceArns = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryRevocationContent
 */
const se_RevocationContent = (input: RevocationContent, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SB] != null) {
    entries[_SB] = input[_SB];
  }
  if (input[_SK] != null) {
    entries[_SK] = input[_SK];
  }
  if (input[_SOV] != null) {
    entries[_SOV] = input[_SOV];
  }
  if (input[_RTev] != null) {
    entries[_RTev] = input[_RTev];
  }
  return entries;
};

/**
 * serializeAws_queryRevocationContents
 */
const se_RevocationContents = (input: RevocationContent[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_RevocationContent(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryRevocationIds
 */
const se_RevocationIds = (input: number[], context: __SerdeContext): any => {
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
 * serializeAws_queryRuleArns
 */
const se_RuleArns = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryRuleCondition
 */
const se_RuleCondition = (input: RuleCondition, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_F] != null) {
    entries[_F] = input[_F];
  }
  if (input[_Va] != null) {
    const memberEntries = se_ListOfString(input[_Va], context);
    if (input[_Va]?.length === 0) {
      entries.Values = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_HHC] != null) {
    const memberEntries = se_HostHeaderConditionConfig(input[_HHC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `HostHeaderConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_PPC] != null) {
    const memberEntries = se_PathPatternConditionConfig(input[_PPC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PathPatternConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_HHCt] != null) {
    const memberEntries = se_HttpHeaderConditionConfig(input[_HHCt], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `HttpHeaderConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_QSC] != null) {
    const memberEntries = se_QueryStringConditionConfig(input[_QSC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `QueryStringConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_HRMC] != null) {
    const memberEntries = se_HttpRequestMethodConditionConfig(input[_HRMC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `HttpRequestMethodConfig.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SIC] != null) {
    const memberEntries = se_SourceIpConditionConfig(input[_SIC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SourceIpConfig.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryRuleConditionList
 */
const se_RuleConditionList = (input: RuleCondition[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_RuleCondition(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryRulePriorityList
 */
const se_RulePriorityList = (input: RulePriorityPair[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_RulePriorityPair(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryRulePriorityPair
 */
const se_RulePriorityPair = (input: RulePriorityPair, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RAu] != null) {
    entries[_RAu] = input[_RAu];
  }
  if (input[_Pr] != null) {
    entries[_Pr] = input[_Pr];
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
 * serializeAws_querySetIpAddressTypeInput
 */
const se_SetIpAddressTypeInput = (input: SetIpAddressTypeInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LBA] != null) {
    entries[_LBA] = input[_LBA];
  }
  if (input[_IAT] != null) {
    entries[_IAT] = input[_IAT];
  }
  return entries;
};

/**
 * serializeAws_querySetRulePrioritiesInput
 */
const se_SetRulePrioritiesInput = (input: SetRulePrioritiesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RP] != null) {
    const memberEntries = se_RulePriorityList(input[_RP], context);
    if (input[_RP]?.length === 0) {
      entries.RulePriorities = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RulePriorities.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_querySetSecurityGroupsInput
 */
const se_SetSecurityGroupsInput = (input: SetSecurityGroupsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LBA] != null) {
    entries[_LBA] = input[_LBA];
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
  if (input[_ESGIROPLT] != null) {
    entries[_ESGIROPLT] = input[_ESGIROPLT];
  }
  return entries;
};

/**
 * serializeAws_querySetSubnetsInput
 */
const se_SetSubnetsInput = (input: SetSubnetsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LBA] != null) {
    entries[_LBA] = input[_LBA];
  }
  if (input[_Su] != null) {
    const memberEntries = se_Subnets(input[_Su], context);
    if (input[_Su]?.length === 0) {
      entries.Subnets = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Subnets.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SM] != null) {
    const memberEntries = se_SubnetMappings(input[_SM], context);
    if (input[_SM]?.length === 0) {
      entries.SubnetMappings = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SubnetMappings.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_IAT] != null) {
    entries[_IAT] = input[_IAT];
  }
  if (input[_EPFISN] != null) {
    entries[_EPFISN] = input[_EPFISN];
  }
  return entries;
};

/**
 * serializeAws_querySourceIpConditionConfig
 */
const se_SourceIpConditionConfig = (input: SourceIpConditionConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Va] != null) {
    const memberEntries = se_ListOfString(input[_Va], context);
    if (input[_Va]?.length === 0) {
      entries.Values = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_querySslPolicyNames
 */
const se_SslPolicyNames = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_querySubnetMapping
 */
const se_SubnetMapping = (input: SubnetMapping, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SI] != null) {
    entries[_SI] = input[_SI];
  }
  if (input[_AI] != null) {
    entries[_AI] = input[_AI];
  }
  if (input[_PIPA] != null) {
    entries[_PIPA] = input[_PIPA];
  }
  if (input[_IPA] != null) {
    entries[_IPA] = input[_IPA];
  }
  if (input[_SNIP] != null) {
    entries[_SNIP] = input[_SNIP];
  }
  return entries;
};

/**
 * serializeAws_querySubnetMappings
 */
const se_SubnetMappings = (input: SubnetMapping[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_SubnetMapping(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
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
  if (input[_Val] != null) {
    entries[_Val] = input[_Val];
  }
  return entries;
};

/**
 * serializeAws_queryTagKeys
 */
const se_TagKeys = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryTargetDescription
 */
const se_TargetDescription = (input: TargetDescription, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Id] != null) {
    entries[_Id] = input[_Id];
  }
  if (input[_Po] != null) {
    entries[_Po] = input[_Po];
  }
  if (input[_AZ] != null) {
    entries[_AZ] = input[_AZ];
  }
  return entries;
};

/**
 * serializeAws_queryTargetDescriptions
 */
const se_TargetDescriptions = (input: TargetDescription[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_TargetDescription(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTargetGroupArns
 */
const se_TargetGroupArns = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryTargetGroupAttribute
 */
const se_TargetGroupAttribute = (input: TargetGroupAttribute, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_K] != null) {
    entries[_K] = input[_K];
  }
  if (input[_Val] != null) {
    entries[_Val] = input[_Val];
  }
  return entries;
};

/**
 * serializeAws_queryTargetGroupAttributes
 */
const se_TargetGroupAttributes = (input: TargetGroupAttribute[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_TargetGroupAttribute(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTargetGroupList
 */
const se_TargetGroupList = (input: TargetGroupTuple[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_TargetGroupTuple(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTargetGroupNames
 */
const se_TargetGroupNames = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryTargetGroupStickinessConfig
 */
const se_TargetGroupStickinessConfig = (input: TargetGroupStickinessConfig, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_DS] != null) {
    entries[_DS] = input[_DS];
  }
  return entries;
};

/**
 * serializeAws_queryTargetGroupTuple
 */
const se_TargetGroupTuple = (input: TargetGroupTuple, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TGA] != null) {
    entries[_TGA] = input[_TGA];
  }
  if (input[_W] != null) {
    entries[_W] = input[_W];
  }
  return entries;
};

/**
 * serializeAws_queryTrustStoreArns
 */
const se_TrustStoreArns = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryTrustStoreNames
 */
const se_TrustStoreNames = (input: string[], context: __SerdeContext): any => {
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
 * deserializeAws_queryAction
 */
const de_Action = (output: any, context: __SerdeContext): Action => {
  const contents: any = {};
  if (output[_T] != null) {
    contents[_T] = __expectString(output[_T]);
  }
  if (output[_TGA] != null) {
    contents[_TGA] = __expectString(output[_TGA]);
  }
  if (output[_AOC] != null) {
    contents[_AOC] = de_AuthenticateOidcActionConfig(output[_AOC], context);
  }
  if (output[_ACC] != null) {
    contents[_ACC] = de_AuthenticateCognitoActionConfig(output[_ACC], context);
  }
  if (output[_O] != null) {
    contents[_O] = __strictParseInt32(output[_O]) as number;
  }
  if (output[_RC] != null) {
    contents[_RC] = de_RedirectActionConfig(output[_RC], context);
  }
  if (output[_FRC] != null) {
    contents[_FRC] = de_FixedResponseActionConfig(output[_FRC], context);
  }
  if (output[_FC] != null) {
    contents[_FC] = de_ForwardActionConfig(output[_FC], context);
  }
  return contents;
};

/**
 * deserializeAws_queryActions
 */
const de_Actions = (output: any, context: __SerdeContext): Action[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Action(entry, context);
    });
};

/**
 * deserializeAws_queryAddListenerCertificatesOutput
 */
const de_AddListenerCertificatesOutput = (output: any, context: __SerdeContext): AddListenerCertificatesOutput => {
  const contents: any = {};
  if (output.Certificates === "") {
    contents[_C] = [];
  } else if (output[_C] != null && output[_C][_m] != null) {
    contents[_C] = de_CertificateList(__getArrayIfSingleItem(output[_C][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryAddTagsOutput
 */
const de_AddTagsOutput = (output: any, context: __SerdeContext): AddTagsOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryAddTrustStoreRevocationsOutput
 */
const de_AddTrustStoreRevocationsOutput = (output: any, context: __SerdeContext): AddTrustStoreRevocationsOutput => {
  const contents: any = {};
  if (output.TrustStoreRevocations === "") {
    contents[_TSR] = [];
  } else if (output[_TSR] != null && output[_TSR][_m] != null) {
    contents[_TSR] = de_TrustStoreRevocations(__getArrayIfSingleItem(output[_TSR][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryAdministrativeOverride
 */
const de_AdministrativeOverride = (output: any, context: __SerdeContext): AdministrativeOverride => {
  const contents: any = {};
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_R] != null) {
    contents[_R] = __expectString(output[_R]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  return contents;
};

/**
 * deserializeAws_queryAllocationIdNotFoundException
 */
const de_AllocationIdNotFoundException = (output: any, context: __SerdeContext): AllocationIdNotFoundException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryAlpnPolicyName
 */
const de_AlpnPolicyName = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryALPNPolicyNotSupportedException
 */
const de_ALPNPolicyNotSupportedException = (output: any, context: __SerdeContext): ALPNPolicyNotSupportedException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryAnomalyDetection
 */
const de_AnomalyDetection = (output: any, context: __SerdeContext): AnomalyDetection => {
  const contents: any = {};
  if (output[_Re] != null) {
    contents[_Re] = __expectString(output[_Re]);
  }
  if (output[_MIE] != null) {
    contents[_MIE] = __expectString(output[_MIE]);
  }
  return contents;
};

/**
 * deserializeAws_queryAuthenticateCognitoActionAuthenticationRequestExtraParams
 */
const de_AuthenticateCognitoActionAuthenticationRequestExtraParams = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_queryAuthenticateCognitoActionConfig
 */
const de_AuthenticateCognitoActionConfig = (output: any, context: __SerdeContext): AuthenticateCognitoActionConfig => {
  const contents: any = {};
  if (output[_UPA] != null) {
    contents[_UPA] = __expectString(output[_UPA]);
  }
  if (output[_UPCI] != null) {
    contents[_UPCI] = __expectString(output[_UPCI]);
  }
  if (output[_UPD] != null) {
    contents[_UPD] = __expectString(output[_UPD]);
  }
  if (output[_SCN] != null) {
    contents[_SCN] = __expectString(output[_SCN]);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_ST] != null) {
    contents[_ST] = __strictParseLong(output[_ST]) as number;
  }
  if (output.AuthenticationRequestExtraParams === "") {
    contents[_AREP] = {};
  } else if (output[_AREP] != null && output[_AREP][_e] != null) {
    contents[_AREP] = de_AuthenticateCognitoActionAuthenticationRequestExtraParams(
      __getArrayIfSingleItem(output[_AREP][_e]),
      context
    );
  }
  if (output[_OUR] != null) {
    contents[_OUR] = __expectString(output[_OUR]);
  }
  return contents;
};

/**
 * deserializeAws_queryAuthenticateOidcActionAuthenticationRequestExtraParams
 */
const de_AuthenticateOidcActionAuthenticationRequestExtraParams = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_queryAuthenticateOidcActionConfig
 */
const de_AuthenticateOidcActionConfig = (output: any, context: __SerdeContext): AuthenticateOidcActionConfig => {
  const contents: any = {};
  if (output[_I] != null) {
    contents[_I] = __expectString(output[_I]);
  }
  if (output[_AE] != null) {
    contents[_AE] = __expectString(output[_AE]);
  }
  if (output[_TE] != null) {
    contents[_TE] = __expectString(output[_TE]);
  }
  if (output[_UIE] != null) {
    contents[_UIE] = __expectString(output[_UIE]);
  }
  if (output[_CI] != null) {
    contents[_CI] = __expectString(output[_CI]);
  }
  if (output[_CS] != null) {
    contents[_CS] = __expectString(output[_CS]);
  }
  if (output[_SCN] != null) {
    contents[_SCN] = __expectString(output[_SCN]);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_ST] != null) {
    contents[_ST] = __strictParseLong(output[_ST]) as number;
  }
  if (output.AuthenticationRequestExtraParams === "") {
    contents[_AREP] = {};
  } else if (output[_AREP] != null && output[_AREP][_e] != null) {
    contents[_AREP] = de_AuthenticateOidcActionAuthenticationRequestExtraParams(
      __getArrayIfSingleItem(output[_AREP][_e]),
      context
    );
  }
  if (output[_OUR] != null) {
    contents[_OUR] = __expectString(output[_OUR]);
  }
  if (output[_UECS] != null) {
    contents[_UECS] = __parseBoolean(output[_UECS]);
  }
  return contents;
};

/**
 * deserializeAws_queryAvailabilityZone
 */
const de_AvailabilityZone = (output: any, context: __SerdeContext): AvailabilityZone => {
  const contents: any = {};
  if (output[_ZN] != null) {
    contents[_ZN] = __expectString(output[_ZN]);
  }
  if (output[_SI] != null) {
    contents[_SI] = __expectString(output[_SI]);
  }
  if (output[_OI] != null) {
    contents[_OI] = __expectString(output[_OI]);
  }
  if (output.LoadBalancerAddresses === "") {
    contents[_LBAoa] = [];
  } else if (output[_LBAoa] != null && output[_LBAoa][_m] != null) {
    contents[_LBAoa] = de_LoadBalancerAddresses(__getArrayIfSingleItem(output[_LBAoa][_m]), context);
  }
  if (output.SourceNatIpv6Prefixes === "") {
    contents[_SNIPo] = [];
  } else if (output[_SNIPo] != null && output[_SNIPo][_m] != null) {
    contents[_SNIPo] = de_SourceNatIpv6Prefixes(__getArrayIfSingleItem(output[_SNIPo][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryAvailabilityZoneNotSupportedException
 */
const de_AvailabilityZoneNotSupportedException = (
  output: any,
  context: __SerdeContext
): AvailabilityZoneNotSupportedException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryAvailabilityZones
 */
const de_AvailabilityZones = (output: any, context: __SerdeContext): AvailabilityZone[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AvailabilityZone(entry, context);
    });
};

/**
 * deserializeAws_queryCaCertificatesBundleNotFoundException
 */
const de_CaCertificatesBundleNotFoundException = (
  output: any,
  context: __SerdeContext
): CaCertificatesBundleNotFoundException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryCapacityDecreaseRequestsLimitExceededException
 */
const de_CapacityDecreaseRequestsLimitExceededException = (
  output: any,
  context: __SerdeContext
): CapacityDecreaseRequestsLimitExceededException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryCapacityReservationPendingException
 */
const de_CapacityReservationPendingException = (
  output: any,
  context: __SerdeContext
): CapacityReservationPendingException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryCapacityReservationStatus
 */
const de_CapacityReservationStatus = (output: any, context: __SerdeContext): CapacityReservationStatus => {
  const contents: any = {};
  if (output[_Cod] != null) {
    contents[_Cod] = __expectString(output[_Cod]);
  }
  if (output[_R] != null) {
    contents[_R] = __expectString(output[_R]);
  }
  return contents;
};

/**
 * deserializeAws_queryCapacityUnitsLimitExceededException
 */
const de_CapacityUnitsLimitExceededException = (
  output: any,
  context: __SerdeContext
): CapacityUnitsLimitExceededException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryCertificate
 */
const de_Certificate = (output: any, context: __SerdeContext): Certificate => {
  const contents: any = {};
  if (output[_CA] != null) {
    contents[_CA] = __expectString(output[_CA]);
  }
  if (output[_ID] != null) {
    contents[_ID] = __parseBoolean(output[_ID]);
  }
  return contents;
};

/**
 * deserializeAws_queryCertificateList
 */
const de_CertificateList = (output: any, context: __SerdeContext): Certificate[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Certificate(entry, context);
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
 * deserializeAws_queryCipher
 */
const de_Cipher = (output: any, context: __SerdeContext): Cipher => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_Pr] != null) {
    contents[_Pr] = __strictParseInt32(output[_Pr]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryCiphers
 */
const de_Ciphers = (output: any, context: __SerdeContext): Cipher[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Cipher(entry, context);
    });
};

/**
 * deserializeAws_queryCreateListenerOutput
 */
const de_CreateListenerOutput = (output: any, context: __SerdeContext): CreateListenerOutput => {
  const contents: any = {};
  if (output.Listeners === "") {
    contents[_L] = [];
  } else if (output[_L] != null && output[_L][_m] != null) {
    contents[_L] = de_Listeners(__getArrayIfSingleItem(output[_L][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateLoadBalancerOutput
 */
const de_CreateLoadBalancerOutput = (output: any, context: __SerdeContext): CreateLoadBalancerOutput => {
  const contents: any = {};
  if (output.LoadBalancers === "") {
    contents[_LB] = [];
  } else if (output[_LB] != null && output[_LB][_m] != null) {
    contents[_LB] = de_LoadBalancers(__getArrayIfSingleItem(output[_LB][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateRuleOutput
 */
const de_CreateRuleOutput = (output: any, context: __SerdeContext): CreateRuleOutput => {
  const contents: any = {};
  if (output.Rules === "") {
    contents[_Ru] = [];
  } else if (output[_Ru] != null && output[_Ru][_m] != null) {
    contents[_Ru] = de_Rules(__getArrayIfSingleItem(output[_Ru][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateTargetGroupOutput
 */
const de_CreateTargetGroupOutput = (output: any, context: __SerdeContext): CreateTargetGroupOutput => {
  const contents: any = {};
  if (output.TargetGroups === "") {
    contents[_TG] = [];
  } else if (output[_TG] != null && output[_TG][_m] != null) {
    contents[_TG] = de_TargetGroups(__getArrayIfSingleItem(output[_TG][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateTrustStoreOutput
 */
const de_CreateTrustStoreOutput = (output: any, context: __SerdeContext): CreateTrustStoreOutput => {
  const contents: any = {};
  if (output.TrustStores === "") {
    contents[_TS] = [];
  } else if (output[_TS] != null && output[_TS][_m] != null) {
    contents[_TS] = de_TrustStores(__getArrayIfSingleItem(output[_TS][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteAssociationSameAccountException
 */
const de_DeleteAssociationSameAccountException = (
  output: any,
  context: __SerdeContext
): DeleteAssociationSameAccountException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteListenerOutput
 */
const de_DeleteListenerOutput = (output: any, context: __SerdeContext): DeleteListenerOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDeleteLoadBalancerOutput
 */
const de_DeleteLoadBalancerOutput = (output: any, context: __SerdeContext): DeleteLoadBalancerOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDeleteRuleOutput
 */
const de_DeleteRuleOutput = (output: any, context: __SerdeContext): DeleteRuleOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDeleteSharedTrustStoreAssociationOutput
 */
const de_DeleteSharedTrustStoreAssociationOutput = (
  output: any,
  context: __SerdeContext
): DeleteSharedTrustStoreAssociationOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDeleteTargetGroupOutput
 */
const de_DeleteTargetGroupOutput = (output: any, context: __SerdeContext): DeleteTargetGroupOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDeleteTrustStoreOutput
 */
const de_DeleteTrustStoreOutput = (output: any, context: __SerdeContext): DeleteTrustStoreOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDeregisterTargetsOutput
 */
const de_DeregisterTargetsOutput = (output: any, context: __SerdeContext): DeregisterTargetsOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDescribeAccountLimitsOutput
 */
const de_DescribeAccountLimitsOutput = (output: any, context: __SerdeContext): DescribeAccountLimitsOutput => {
  const contents: any = {};
  if (output.Limits === "") {
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
 * deserializeAws_queryDescribeCapacityReservationOutput
 */
const de_DescribeCapacityReservationOutput = (
  output: any,
  context: __SerdeContext
): DescribeCapacityReservationOutput => {
  const contents: any = {};
  if (output[_LMT] != null) {
    contents[_LMT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LMT]));
  }
  if (output[_DRR] != null) {
    contents[_DRR] = __strictParseInt32(output[_DRR]) as number;
  }
  if (output[_MLBC] != null) {
    contents[_MLBC] = de_MinimumLoadBalancerCapacity(output[_MLBC], context);
  }
  if (output.CapacityReservationState === "") {
    contents[_CRS] = [];
  } else if (output[_CRS] != null && output[_CRS][_m] != null) {
    contents[_CRS] = de_ZonalCapacityReservationStates(__getArrayIfSingleItem(output[_CRS][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeListenerAttributesOutput
 */
const de_DescribeListenerAttributesOutput = (
  output: any,
  context: __SerdeContext
): DescribeListenerAttributesOutput => {
  const contents: any = {};
  if (output.Attributes === "") {
    contents[_At] = [];
  } else if (output[_At] != null && output[_At][_m] != null) {
    contents[_At] = de_ListenerAttributes(__getArrayIfSingleItem(output[_At][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeListenerCertificatesOutput
 */
const de_DescribeListenerCertificatesOutput = (
  output: any,
  context: __SerdeContext
): DescribeListenerCertificatesOutput => {
  const contents: any = {};
  if (output.Certificates === "") {
    contents[_C] = [];
  } else if (output[_C] != null && output[_C][_m] != null) {
    contents[_C] = de_CertificateList(__getArrayIfSingleItem(output[_C][_m]), context);
  }
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeListenersOutput
 */
const de_DescribeListenersOutput = (output: any, context: __SerdeContext): DescribeListenersOutput => {
  const contents: any = {};
  if (output.Listeners === "") {
    contents[_L] = [];
  } else if (output[_L] != null && output[_L][_m] != null) {
    contents[_L] = de_Listeners(__getArrayIfSingleItem(output[_L][_m]), context);
  }
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
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
  if (output.Attributes === "") {
    contents[_At] = [];
  } else if (output[_At] != null && output[_At][_m] != null) {
    contents[_At] = de_LoadBalancerAttributes(__getArrayIfSingleItem(output[_At][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeLoadBalancersOutput
 */
const de_DescribeLoadBalancersOutput = (output: any, context: __SerdeContext): DescribeLoadBalancersOutput => {
  const contents: any = {};
  if (output.LoadBalancers === "") {
    contents[_LB] = [];
  } else if (output[_LB] != null && output[_LB][_m] != null) {
    contents[_LB] = de_LoadBalancers(__getArrayIfSingleItem(output[_LB][_m]), context);
  }
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeRulesOutput
 */
const de_DescribeRulesOutput = (output: any, context: __SerdeContext): DescribeRulesOutput => {
  const contents: any = {};
  if (output.Rules === "") {
    contents[_Ru] = [];
  } else if (output[_Ru] != null && output[_Ru][_m] != null) {
    contents[_Ru] = de_Rules(__getArrayIfSingleItem(output[_Ru][_m]), context);
  }
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeSSLPoliciesOutput
 */
const de_DescribeSSLPoliciesOutput = (output: any, context: __SerdeContext): DescribeSSLPoliciesOutput => {
  const contents: any = {};
  if (output.SslPolicies === "") {
    contents[_SPs] = [];
  } else if (output[_SPs] != null && output[_SPs][_m] != null) {
    contents[_SPs] = de_SslPolicies(__getArrayIfSingleItem(output[_SPs][_m]), context);
  }
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeTagsOutput
 */
const de_DescribeTagsOutput = (output: any, context: __SerdeContext): DescribeTagsOutput => {
  const contents: any = {};
  if (output.TagDescriptions === "") {
    contents[_TD] = [];
  } else if (output[_TD] != null && output[_TD][_m] != null) {
    contents[_TD] = de_TagDescriptions(__getArrayIfSingleItem(output[_TD][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeTargetGroupAttributesOutput
 */
const de_DescribeTargetGroupAttributesOutput = (
  output: any,
  context: __SerdeContext
): DescribeTargetGroupAttributesOutput => {
  const contents: any = {};
  if (output.Attributes === "") {
    contents[_At] = [];
  } else if (output[_At] != null && output[_At][_m] != null) {
    contents[_At] = de_TargetGroupAttributes(__getArrayIfSingleItem(output[_At][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeTargetGroupsOutput
 */
const de_DescribeTargetGroupsOutput = (output: any, context: __SerdeContext): DescribeTargetGroupsOutput => {
  const contents: any = {};
  if (output.TargetGroups === "") {
    contents[_TG] = [];
  } else if (output[_TG] != null && output[_TG][_m] != null) {
    contents[_TG] = de_TargetGroups(__getArrayIfSingleItem(output[_TG][_m]), context);
  }
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeTargetHealthOutput
 */
const de_DescribeTargetHealthOutput = (output: any, context: __SerdeContext): DescribeTargetHealthOutput => {
  const contents: any = {};
  if (output.TargetHealthDescriptions === "") {
    contents[_THD] = [];
  } else if (output[_THD] != null && output[_THD][_m] != null) {
    contents[_THD] = de_TargetHealthDescriptions(__getArrayIfSingleItem(output[_THD][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeTrustStoreAssociationsOutput
 */
const de_DescribeTrustStoreAssociationsOutput = (
  output: any,
  context: __SerdeContext
): DescribeTrustStoreAssociationsOutput => {
  const contents: any = {};
  if (output.TrustStoreAssociations === "") {
    contents[_TSAru] = [];
  } else if (output[_TSAru] != null && output[_TSAru][_m] != null) {
    contents[_TSAru] = de_TrustStoreAssociations(__getArrayIfSingleItem(output[_TSAru][_m]), context);
  }
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeTrustStoreRevocation
 */
const de_DescribeTrustStoreRevocation = (output: any, context: __SerdeContext): DescribeTrustStoreRevocation => {
  const contents: any = {};
  if (output[_TSA] != null) {
    contents[_TSA] = __expectString(output[_TSA]);
  }
  if (output[_RIe] != null) {
    contents[_RIe] = __strictParseLong(output[_RIe]) as number;
  }
  if (output[_RTev] != null) {
    contents[_RTev] = __expectString(output[_RTev]);
  }
  if (output[_NORE] != null) {
    contents[_NORE] = __strictParseLong(output[_NORE]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeTrustStoreRevocationResponse
 */
const de_DescribeTrustStoreRevocationResponse = (
  output: any,
  context: __SerdeContext
): DescribeTrustStoreRevocation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DescribeTrustStoreRevocation(entry, context);
    });
};

/**
 * deserializeAws_queryDescribeTrustStoreRevocationsOutput
 */
const de_DescribeTrustStoreRevocationsOutput = (
  output: any,
  context: __SerdeContext
): DescribeTrustStoreRevocationsOutput => {
  const contents: any = {};
  if (output.TrustStoreRevocations === "") {
    contents[_TSR] = [];
  } else if (output[_TSR] != null && output[_TSR][_m] != null) {
    contents[_TSR] = de_DescribeTrustStoreRevocationResponse(__getArrayIfSingleItem(output[_TSR][_m]), context);
  }
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeTrustStoresOutput
 */
const de_DescribeTrustStoresOutput = (output: any, context: __SerdeContext): DescribeTrustStoresOutput => {
  const contents: any = {};
  if (output.TrustStores === "") {
    contents[_TS] = [];
  } else if (output[_TS] != null && output[_TS][_m] != null) {
    contents[_TS] = de_TrustStores(__getArrayIfSingleItem(output[_TS][_m]), context);
  }
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
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
 * deserializeAws_queryDuplicateLoadBalancerNameException
 */
const de_DuplicateLoadBalancerNameException = (
  output: any,
  context: __SerdeContext
): DuplicateLoadBalancerNameException => {
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
 * deserializeAws_queryDuplicateTargetGroupNameException
 */
const de_DuplicateTargetGroupNameException = (
  output: any,
  context: __SerdeContext
): DuplicateTargetGroupNameException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryDuplicateTrustStoreNameException
 */
const de_DuplicateTrustStoreNameException = (
  output: any,
  context: __SerdeContext
): DuplicateTrustStoreNameException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryFixedResponseActionConfig
 */
const de_FixedResponseActionConfig = (output: any, context: __SerdeContext): FixedResponseActionConfig => {
  const contents: any = {};
  if (output[_MB] != null) {
    contents[_MB] = __expectString(output[_MB]);
  }
  if (output[_SC] != null) {
    contents[_SC] = __expectString(output[_SC]);
  }
  if (output[_CT] != null) {
    contents[_CT] = __expectString(output[_CT]);
  }
  return contents;
};

/**
 * deserializeAws_queryForwardActionConfig
 */
const de_ForwardActionConfig = (output: any, context: __SerdeContext): ForwardActionConfig => {
  const contents: any = {};
  if (output.TargetGroups === "") {
    contents[_TG] = [];
  } else if (output[_TG] != null && output[_TG][_m] != null) {
    contents[_TG] = de_TargetGroupList(__getArrayIfSingleItem(output[_TG][_m]), context);
  }
  if (output[_TGSC] != null) {
    contents[_TGSC] = de_TargetGroupStickinessConfig(output[_TGSC], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetResourcePolicyOutput
 */
const de_GetResourcePolicyOutput = (output: any, context: __SerdeContext): GetResourcePolicyOutput => {
  const contents: any = {};
  if (output[_Pol] != null) {
    contents[_Pol] = __expectString(output[_Pol]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetTrustStoreCaCertificatesBundleOutput
 */
const de_GetTrustStoreCaCertificatesBundleOutput = (
  output: any,
  context: __SerdeContext
): GetTrustStoreCaCertificatesBundleOutput => {
  const contents: any = {};
  if (output[_Lo] != null) {
    contents[_Lo] = __expectString(output[_Lo]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetTrustStoreRevocationContentOutput
 */
const de_GetTrustStoreRevocationContentOutput = (
  output: any,
  context: __SerdeContext
): GetTrustStoreRevocationContentOutput => {
  const contents: any = {};
  if (output[_Lo] != null) {
    contents[_Lo] = __expectString(output[_Lo]);
  }
  return contents;
};

/**
 * deserializeAws_queryHealthUnavailableException
 */
const de_HealthUnavailableException = (output: any, context: __SerdeContext): HealthUnavailableException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryHostHeaderConditionConfig
 */
const de_HostHeaderConditionConfig = (output: any, context: __SerdeContext): HostHeaderConditionConfig => {
  const contents: any = {};
  if (output.Values === "") {
    contents[_Va] = [];
  } else if (output[_Va] != null && output[_Va][_m] != null) {
    contents[_Va] = de_ListOfString(__getArrayIfSingleItem(output[_Va][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryHttpHeaderConditionConfig
 */
const de_HttpHeaderConditionConfig = (output: any, context: __SerdeContext): HttpHeaderConditionConfig => {
  const contents: any = {};
  if (output[_HHN] != null) {
    contents[_HHN] = __expectString(output[_HHN]);
  }
  if (output.Values === "") {
    contents[_Va] = [];
  } else if (output[_Va] != null && output[_Va][_m] != null) {
    contents[_Va] = de_ListOfString(__getArrayIfSingleItem(output[_Va][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryHttpRequestMethodConditionConfig
 */
const de_HttpRequestMethodConditionConfig = (
  output: any,
  context: __SerdeContext
): HttpRequestMethodConditionConfig => {
  const contents: any = {};
  if (output.Values === "") {
    contents[_Va] = [];
  } else if (output[_Va] != null && output[_Va][_m] != null) {
    contents[_Va] = de_ListOfString(__getArrayIfSingleItem(output[_Va][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryIncompatibleProtocolsException
 */
const de_IncompatibleProtocolsException = (output: any, context: __SerdeContext): IncompatibleProtocolsException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryInsufficientCapacityException
 */
const de_InsufficientCapacityException = (output: any, context: __SerdeContext): InsufficientCapacityException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidCaCertificatesBundleException
 */
const de_InvalidCaCertificatesBundleException = (
  output: any,
  context: __SerdeContext
): InvalidCaCertificatesBundleException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
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
 * deserializeAws_queryInvalidLoadBalancerActionException
 */
const de_InvalidLoadBalancerActionException = (
  output: any,
  context: __SerdeContext
): InvalidLoadBalancerActionException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidRevocationContentException
 */
const de_InvalidRevocationContentException = (
  output: any,
  context: __SerdeContext
): InvalidRevocationContentException => {
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
 * deserializeAws_queryInvalidTargetException
 */
const de_InvalidTargetException = (output: any, context: __SerdeContext): InvalidTargetException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
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
  if (output[_Max] != null) {
    contents[_Max] = __expectString(output[_Max]);
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
  if (output[_LA] != null) {
    contents[_LA] = __expectString(output[_LA]);
  }
  if (output[_LBA] != null) {
    contents[_LBA] = __expectString(output[_LBA]);
  }
  if (output[_Po] != null) {
    contents[_Po] = __strictParseInt32(output[_Po]) as number;
  }
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  if (output.Certificates === "") {
    contents[_C] = [];
  } else if (output[_C] != null && output[_C][_m] != null) {
    contents[_C] = de_CertificateList(__getArrayIfSingleItem(output[_C][_m]), context);
  }
  if (output[_SP] != null) {
    contents[_SP] = __expectString(output[_SP]);
  }
  if (output.DefaultActions === "") {
    contents[_DA] = [];
  } else if (output[_DA] != null && output[_DA][_m] != null) {
    contents[_DA] = de_Actions(__getArrayIfSingleItem(output[_DA][_m]), context);
  }
  if (output.AlpnPolicy === "") {
    contents[_AP] = [];
  } else if (output[_AP] != null && output[_AP][_m] != null) {
    contents[_AP] = de_AlpnPolicyName(__getArrayIfSingleItem(output[_AP][_m]), context);
  }
  if (output[_MA] != null) {
    contents[_MA] = de_MutualAuthenticationAttributes(output[_MA], context);
  }
  return contents;
};

/**
 * deserializeAws_queryListenerAttribute
 */
const de_ListenerAttribute = (output: any, context: __SerdeContext): ListenerAttribute => {
  const contents: any = {};
  if (output[_K] != null) {
    contents[_K] = __expectString(output[_K]);
  }
  if (output[_Val] != null) {
    contents[_Val] = __expectString(output[_Val]);
  }
  return contents;
};

/**
 * deserializeAws_queryListenerAttributes
 */
const de_ListenerAttributes = (output: any, context: __SerdeContext): ListenerAttribute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListenerAttribute(entry, context);
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
 * deserializeAws_queryListeners
 */
const de_Listeners = (output: any, context: __SerdeContext): Listener[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Listener(entry, context);
    });
};

/**
 * deserializeAws_queryListOfString
 */
const de_ListOfString = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryLoadBalancer
 */
const de_LoadBalancer = (output: any, context: __SerdeContext): LoadBalancer => {
  const contents: any = {};
  if (output[_LBA] != null) {
    contents[_LBA] = __expectString(output[_LBA]);
  }
  if (output[_DNSN] != null) {
    contents[_DNSN] = __expectString(output[_DNSN]);
  }
  if (output[_CHZI] != null) {
    contents[_CHZI] = __expectString(output[_CHZI]);
  }
  if (output[_CTr] != null) {
    contents[_CTr] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CTr]));
  }
  if (output[_LBN] != null) {
    contents[_LBN] = __expectString(output[_LBN]);
  }
  if (output[_Sc] != null) {
    contents[_Sc] = __expectString(output[_Sc]);
  }
  if (output[_VI] != null) {
    contents[_VI] = __expectString(output[_VI]);
  }
  if (output[_St] != null) {
    contents[_St] = de_LoadBalancerState(output[_St], context);
  }
  if (output[_T] != null) {
    contents[_T] = __expectString(output[_T]);
  }
  if (output.AvailabilityZones === "") {
    contents[_AZv] = [];
  } else if (output[_AZv] != null && output[_AZv][_m] != null) {
    contents[_AZv] = de_AvailabilityZones(__getArrayIfSingleItem(output[_AZv][_m]), context);
  }
  if (output.SecurityGroups === "") {
    contents[_SG] = [];
  } else if (output[_SG] != null && output[_SG][_m] != null) {
    contents[_SG] = de_SecurityGroups(__getArrayIfSingleItem(output[_SG][_m]), context);
  }
  if (output[_IAT] != null) {
    contents[_IAT] = __expectString(output[_IAT]);
  }
  if (output[_COIP] != null) {
    contents[_COIP] = __expectString(output[_COIP]);
  }
  if (output[_ESGIROPLT] != null) {
    contents[_ESGIROPLT] = __expectString(output[_ESGIROPLT]);
  }
  if (output[_EPFISN] != null) {
    contents[_EPFISN] = __expectString(output[_EPFISN]);
  }
  return contents;
};

/**
 * deserializeAws_queryLoadBalancerAddress
 */
const de_LoadBalancerAddress = (output: any, context: __SerdeContext): LoadBalancerAddress => {
  const contents: any = {};
  if (output[_IA] != null) {
    contents[_IA] = __expectString(output[_IA]);
  }
  if (output[_AI] != null) {
    contents[_AI] = __expectString(output[_AI]);
  }
  if (output[_PIPA] != null) {
    contents[_PIPA] = __expectString(output[_PIPA]);
  }
  if (output[_IPA] != null) {
    contents[_IPA] = __expectString(output[_IPA]);
  }
  return contents;
};

/**
 * deserializeAws_queryLoadBalancerAddresses
 */
const de_LoadBalancerAddresses = (output: any, context: __SerdeContext): LoadBalancerAddress[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LoadBalancerAddress(entry, context);
    });
};

/**
 * deserializeAws_queryLoadBalancerArns
 */
const de_LoadBalancerArns = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryLoadBalancerAttribute
 */
const de_LoadBalancerAttribute = (output: any, context: __SerdeContext): LoadBalancerAttribute => {
  const contents: any = {};
  if (output[_K] != null) {
    contents[_K] = __expectString(output[_K]);
  }
  if (output[_Val] != null) {
    contents[_Val] = __expectString(output[_Val]);
  }
  return contents;
};

/**
 * deserializeAws_queryLoadBalancerAttributes
 */
const de_LoadBalancerAttributes = (output: any, context: __SerdeContext): LoadBalancerAttribute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LoadBalancerAttribute(entry, context);
    });
};

/**
 * deserializeAws_queryLoadBalancerNotFoundException
 */
const de_LoadBalancerNotFoundException = (output: any, context: __SerdeContext): LoadBalancerNotFoundException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryLoadBalancers
 */
const de_LoadBalancers = (output: any, context: __SerdeContext): LoadBalancer[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LoadBalancer(entry, context);
    });
};

/**
 * deserializeAws_queryLoadBalancerState
 */
const de_LoadBalancerState = (output: any, context: __SerdeContext): LoadBalancerState => {
  const contents: any = {};
  if (output[_Cod] != null) {
    contents[_Cod] = __expectString(output[_Cod]);
  }
  if (output[_R] != null) {
    contents[_R] = __expectString(output[_R]);
  }
  return contents;
};

/**
 * deserializeAws_queryMatcher
 */
const de_Matcher = (output: any, context: __SerdeContext): Matcher => {
  const contents: any = {};
  if (output[_HC] != null) {
    contents[_HC] = __expectString(output[_HC]);
  }
  if (output[_GC] != null) {
    contents[_GC] = __expectString(output[_GC]);
  }
  return contents;
};

/**
 * deserializeAws_queryMinimumLoadBalancerCapacity
 */
const de_MinimumLoadBalancerCapacity = (output: any, context: __SerdeContext): MinimumLoadBalancerCapacity => {
  const contents: any = {};
  if (output[_CU] != null) {
    contents[_CU] = __strictParseInt32(output[_CU]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryModifyCapacityReservationOutput
 */
const de_ModifyCapacityReservationOutput = (output: any, context: __SerdeContext): ModifyCapacityReservationOutput => {
  const contents: any = {};
  if (output[_LMT] != null) {
    contents[_LMT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LMT]));
  }
  if (output[_DRR] != null) {
    contents[_DRR] = __strictParseInt32(output[_DRR]) as number;
  }
  if (output[_MLBC] != null) {
    contents[_MLBC] = de_MinimumLoadBalancerCapacity(output[_MLBC], context);
  }
  if (output.CapacityReservationState === "") {
    contents[_CRS] = [];
  } else if (output[_CRS] != null && output[_CRS][_m] != null) {
    contents[_CRS] = de_ZonalCapacityReservationStates(__getArrayIfSingleItem(output[_CRS][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyListenerAttributesOutput
 */
const de_ModifyListenerAttributesOutput = (output: any, context: __SerdeContext): ModifyListenerAttributesOutput => {
  const contents: any = {};
  if (output.Attributes === "") {
    contents[_At] = [];
  } else if (output[_At] != null && output[_At][_m] != null) {
    contents[_At] = de_ListenerAttributes(__getArrayIfSingleItem(output[_At][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyListenerOutput
 */
const de_ModifyListenerOutput = (output: any, context: __SerdeContext): ModifyListenerOutput => {
  const contents: any = {};
  if (output.Listeners === "") {
    contents[_L] = [];
  } else if (output[_L] != null && output[_L][_m] != null) {
    contents[_L] = de_Listeners(__getArrayIfSingleItem(output[_L][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyLoadBalancerAttributesOutput
 */
const de_ModifyLoadBalancerAttributesOutput = (
  output: any,
  context: __SerdeContext
): ModifyLoadBalancerAttributesOutput => {
  const contents: any = {};
  if (output.Attributes === "") {
    contents[_At] = [];
  } else if (output[_At] != null && output[_At][_m] != null) {
    contents[_At] = de_LoadBalancerAttributes(__getArrayIfSingleItem(output[_At][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyRuleOutput
 */
const de_ModifyRuleOutput = (output: any, context: __SerdeContext): ModifyRuleOutput => {
  const contents: any = {};
  if (output.Rules === "") {
    contents[_Ru] = [];
  } else if (output[_Ru] != null && output[_Ru][_m] != null) {
    contents[_Ru] = de_Rules(__getArrayIfSingleItem(output[_Ru][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyTargetGroupAttributesOutput
 */
const de_ModifyTargetGroupAttributesOutput = (
  output: any,
  context: __SerdeContext
): ModifyTargetGroupAttributesOutput => {
  const contents: any = {};
  if (output.Attributes === "") {
    contents[_At] = [];
  } else if (output[_At] != null && output[_At][_m] != null) {
    contents[_At] = de_TargetGroupAttributes(__getArrayIfSingleItem(output[_At][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyTargetGroupOutput
 */
const de_ModifyTargetGroupOutput = (output: any, context: __SerdeContext): ModifyTargetGroupOutput => {
  const contents: any = {};
  if (output.TargetGroups === "") {
    contents[_TG] = [];
  } else if (output[_TG] != null && output[_TG][_m] != null) {
    contents[_TG] = de_TargetGroups(__getArrayIfSingleItem(output[_TG][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryModifyTrustStoreOutput
 */
const de_ModifyTrustStoreOutput = (output: any, context: __SerdeContext): ModifyTrustStoreOutput => {
  const contents: any = {};
  if (output.TrustStores === "") {
    contents[_TS] = [];
  } else if (output[_TS] != null && output[_TS][_m] != null) {
    contents[_TS] = de_TrustStores(__getArrayIfSingleItem(output[_TS][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryMutualAuthenticationAttributes
 */
const de_MutualAuthenticationAttributes = (output: any, context: __SerdeContext): MutualAuthenticationAttributes => {
  const contents: any = {};
  if (output[_Mo] != null) {
    contents[_Mo] = __expectString(output[_Mo]);
  }
  if (output[_TSA] != null) {
    contents[_TSA] = __expectString(output[_TSA]);
  }
  if (output[_ICCE] != null) {
    contents[_ICCE] = __parseBoolean(output[_ICCE]);
  }
  if (output[_TSAS] != null) {
    contents[_TSAS] = __expectString(output[_TSAS]);
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
 * deserializeAws_queryPathPatternConditionConfig
 */
const de_PathPatternConditionConfig = (output: any, context: __SerdeContext): PathPatternConditionConfig => {
  const contents: any = {};
  if (output.Values === "") {
    contents[_Va] = [];
  } else if (output[_Va] != null && output[_Va][_m] != null) {
    contents[_Va] = de_ListOfString(__getArrayIfSingleItem(output[_Va][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryPriorityInUseException
 */
const de_PriorityInUseException = (output: any, context: __SerdeContext): PriorityInUseException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryPriorRequestNotCompleteException
 */
const de_PriorRequestNotCompleteException = (
  output: any,
  context: __SerdeContext
): PriorRequestNotCompleteException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryQueryStringConditionConfig
 */
const de_QueryStringConditionConfig = (output: any, context: __SerdeContext): QueryStringConditionConfig => {
  const contents: any = {};
  if (output.Values === "") {
    contents[_Va] = [];
  } else if (output[_Va] != null && output[_Va][_m] != null) {
    contents[_Va] = de_QueryStringKeyValuePairList(__getArrayIfSingleItem(output[_Va][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryQueryStringKeyValuePair
 */
const de_QueryStringKeyValuePair = (output: any, context: __SerdeContext): QueryStringKeyValuePair => {
  const contents: any = {};
  if (output[_K] != null) {
    contents[_K] = __expectString(output[_K]);
  }
  if (output[_Val] != null) {
    contents[_Val] = __expectString(output[_Val]);
  }
  return contents;
};

/**
 * deserializeAws_queryQueryStringKeyValuePairList
 */
const de_QueryStringKeyValuePairList = (output: any, context: __SerdeContext): QueryStringKeyValuePair[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_QueryStringKeyValuePair(entry, context);
    });
};

/**
 * deserializeAws_queryRedirectActionConfig
 */
const de_RedirectActionConfig = (output: any, context: __SerdeContext): RedirectActionConfig => {
  const contents: any = {};
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  if (output[_Po] != null) {
    contents[_Po] = __expectString(output[_Po]);
  }
  if (output[_H] != null) {
    contents[_H] = __expectString(output[_H]);
  }
  if (output[_Pa] != null) {
    contents[_Pa] = __expectString(output[_Pa]);
  }
  if (output[_Q] != null) {
    contents[_Q] = __expectString(output[_Q]);
  }
  if (output[_SC] != null) {
    contents[_SC] = __expectString(output[_SC]);
  }
  return contents;
};

/**
 * deserializeAws_queryRegisterTargetsOutput
 */
const de_RegisterTargetsOutput = (output: any, context: __SerdeContext): RegisterTargetsOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryRemoveListenerCertificatesOutput
 */
const de_RemoveListenerCertificatesOutput = (
  output: any,
  context: __SerdeContext
): RemoveListenerCertificatesOutput => {
  const contents: any = {};
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
 * deserializeAws_queryRemoveTrustStoreRevocationsOutput
 */
const de_RemoveTrustStoreRevocationsOutput = (
  output: any,
  context: __SerdeContext
): RemoveTrustStoreRevocationsOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryResourceInUseException
 */
const de_ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryRevocationContentNotFoundException
 */
const de_RevocationContentNotFoundException = (
  output: any,
  context: __SerdeContext
): RevocationContentNotFoundException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryRevocationIdNotFoundException
 */
const de_RevocationIdNotFoundException = (output: any, context: __SerdeContext): RevocationIdNotFoundException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryRule
 */
const de_Rule = (output: any, context: __SerdeContext): Rule => {
  const contents: any = {};
  if (output[_RAu] != null) {
    contents[_RAu] = __expectString(output[_RAu]);
  }
  if (output[_Pr] != null) {
    contents[_Pr] = __expectString(output[_Pr]);
  }
  if (output.Conditions === "") {
    contents[_Co] = [];
  } else if (output[_Co] != null && output[_Co][_m] != null) {
    contents[_Co] = de_RuleConditionList(__getArrayIfSingleItem(output[_Co][_m]), context);
  }
  if (output.Actions === "") {
    contents[_Ac] = [];
  } else if (output[_Ac] != null && output[_Ac][_m] != null) {
    contents[_Ac] = de_Actions(__getArrayIfSingleItem(output[_Ac][_m]), context);
  }
  if (output[_ID] != null) {
    contents[_ID] = __parseBoolean(output[_ID]);
  }
  return contents;
};

/**
 * deserializeAws_queryRuleCondition
 */
const de_RuleCondition = (output: any, context: __SerdeContext): RuleCondition => {
  const contents: any = {};
  if (output[_F] != null) {
    contents[_F] = __expectString(output[_F]);
  }
  if (output.Values === "") {
    contents[_Va] = [];
  } else if (output[_Va] != null && output[_Va][_m] != null) {
    contents[_Va] = de_ListOfString(__getArrayIfSingleItem(output[_Va][_m]), context);
  }
  if (output[_HHC] != null) {
    contents[_HHC] = de_HostHeaderConditionConfig(output[_HHC], context);
  }
  if (output[_PPC] != null) {
    contents[_PPC] = de_PathPatternConditionConfig(output[_PPC], context);
  }
  if (output[_HHCt] != null) {
    contents[_HHCt] = de_HttpHeaderConditionConfig(output[_HHCt], context);
  }
  if (output[_QSC] != null) {
    contents[_QSC] = de_QueryStringConditionConfig(output[_QSC], context);
  }
  if (output[_HRMC] != null) {
    contents[_HRMC] = de_HttpRequestMethodConditionConfig(output[_HRMC], context);
  }
  if (output[_SIC] != null) {
    contents[_SIC] = de_SourceIpConditionConfig(output[_SIC], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRuleConditionList
 */
const de_RuleConditionList = (output: any, context: __SerdeContext): RuleCondition[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RuleCondition(entry, context);
    });
};

/**
 * deserializeAws_queryRuleNotFoundException
 */
const de_RuleNotFoundException = (output: any, context: __SerdeContext): RuleNotFoundException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryRules
 */
const de_Rules = (output: any, context: __SerdeContext): Rule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Rule(entry, context);
    });
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
 * deserializeAws_querySetIpAddressTypeOutput
 */
const de_SetIpAddressTypeOutput = (output: any, context: __SerdeContext): SetIpAddressTypeOutput => {
  const contents: any = {};
  if (output[_IAT] != null) {
    contents[_IAT] = __expectString(output[_IAT]);
  }
  return contents;
};

/**
 * deserializeAws_querySetRulePrioritiesOutput
 */
const de_SetRulePrioritiesOutput = (output: any, context: __SerdeContext): SetRulePrioritiesOutput => {
  const contents: any = {};
  if (output.Rules === "") {
    contents[_Ru] = [];
  } else if (output[_Ru] != null && output[_Ru][_m] != null) {
    contents[_Ru] = de_Rules(__getArrayIfSingleItem(output[_Ru][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_querySetSecurityGroupsOutput
 */
const de_SetSecurityGroupsOutput = (output: any, context: __SerdeContext): SetSecurityGroupsOutput => {
  const contents: any = {};
  if (output.SecurityGroupIds === "") {
    contents[_SGI] = [];
  } else if (output[_SGI] != null && output[_SGI][_m] != null) {
    contents[_SGI] = de_SecurityGroups(__getArrayIfSingleItem(output[_SGI][_m]), context);
  }
  if (output[_ESGIROPLT] != null) {
    contents[_ESGIROPLT] = __expectString(output[_ESGIROPLT]);
  }
  return contents;
};

/**
 * deserializeAws_querySetSubnetsOutput
 */
const de_SetSubnetsOutput = (output: any, context: __SerdeContext): SetSubnetsOutput => {
  const contents: any = {};
  if (output.AvailabilityZones === "") {
    contents[_AZv] = [];
  } else if (output[_AZv] != null && output[_AZv][_m] != null) {
    contents[_AZv] = de_AvailabilityZones(__getArrayIfSingleItem(output[_AZv][_m]), context);
  }
  if (output[_IAT] != null) {
    contents[_IAT] = __expectString(output[_IAT]);
  }
  if (output[_EPFISN] != null) {
    contents[_EPFISN] = __expectString(output[_EPFISN]);
  }
  return contents;
};

/**
 * deserializeAws_querySourceIpConditionConfig
 */
const de_SourceIpConditionConfig = (output: any, context: __SerdeContext): SourceIpConditionConfig => {
  const contents: any = {};
  if (output.Values === "") {
    contents[_Va] = [];
  } else if (output[_Va] != null && output[_Va][_m] != null) {
    contents[_Va] = de_ListOfString(__getArrayIfSingleItem(output[_Va][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_querySourceNatIpv6Prefixes
 */
const de_SourceNatIpv6Prefixes = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_querySslPolicies
 */
const de_SslPolicies = (output: any, context: __SerdeContext): SslPolicy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SslPolicy(entry, context);
    });
};

/**
 * deserializeAws_querySslPolicy
 */
const de_SslPolicy = (output: any, context: __SerdeContext): SslPolicy => {
  const contents: any = {};
  if (output.SslProtocols === "") {
    contents[_SPsl] = [];
  } else if (output[_SPsl] != null && output[_SPsl][_m] != null) {
    contents[_SPsl] = de_SslProtocols(__getArrayIfSingleItem(output[_SPsl][_m]), context);
  }
  if (output.Ciphers === "") {
    contents[_Ci] = [];
  } else if (output[_Ci] != null && output[_Ci][_m] != null) {
    contents[_Ci] = de_Ciphers(__getArrayIfSingleItem(output[_Ci][_m]), context);
  }
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output.SupportedLoadBalancerTypes === "") {
    contents[_SLBT] = [];
  } else if (output[_SLBT] != null && output[_SLBT][_m] != null) {
    contents[_SLBT] = de_ListOfString(__getArrayIfSingleItem(output[_SLBT][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_querySSLPolicyNotFoundException
 */
const de_SSLPolicyNotFoundException = (output: any, context: __SerdeContext): SSLPolicyNotFoundException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_querySslProtocols
 */
const de_SslProtocols = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
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
 * deserializeAws_queryTag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  const contents: any = {};
  if (output[_K] != null) {
    contents[_K] = __expectString(output[_K]);
  }
  if (output[_Val] != null) {
    contents[_Val] = __expectString(output[_Val]);
  }
  return contents;
};

/**
 * deserializeAws_queryTagDescription
 */
const de_TagDescription = (output: any, context: __SerdeContext): TagDescription => {
  const contents: any = {};
  if (output[_RAe] != null) {
    contents[_RAe] = __expectString(output[_RAe]);
  }
  if (output.Tags === "") {
    contents[_Ta] = [];
  } else if (output[_Ta] != null && output[_Ta][_m] != null) {
    contents[_Ta] = de_TagList(__getArrayIfSingleItem(output[_Ta][_m]), context);
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
 * deserializeAws_queryTargetDescription
 */
const de_TargetDescription = (output: any, context: __SerdeContext): TargetDescription => {
  const contents: any = {};
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_Po] != null) {
    contents[_Po] = __strictParseInt32(output[_Po]) as number;
  }
  if (output[_AZ] != null) {
    contents[_AZ] = __expectString(output[_AZ]);
  }
  return contents;
};

/**
 * deserializeAws_queryTargetGroup
 */
const de_TargetGroup = (output: any, context: __SerdeContext): TargetGroup => {
  const contents: any = {};
  if (output[_TGA] != null) {
    contents[_TGA] = __expectString(output[_TGA]);
  }
  if (output[_TGN] != null) {
    contents[_TGN] = __expectString(output[_TGN]);
  }
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  if (output[_Po] != null) {
    contents[_Po] = __strictParseInt32(output[_Po]) as number;
  }
  if (output[_VI] != null) {
    contents[_VI] = __expectString(output[_VI]);
  }
  if (output[_HCP] != null) {
    contents[_HCP] = __expectString(output[_HCP]);
  }
  if (output[_HCPe] != null) {
    contents[_HCPe] = __expectString(output[_HCPe]);
  }
  if (output[_HCE] != null) {
    contents[_HCE] = __parseBoolean(output[_HCE]);
  }
  if (output[_HCIS] != null) {
    contents[_HCIS] = __strictParseInt32(output[_HCIS]) as number;
  }
  if (output[_HCTS] != null) {
    contents[_HCTS] = __strictParseInt32(output[_HCTS]) as number;
  }
  if (output[_HTC] != null) {
    contents[_HTC] = __strictParseInt32(output[_HTC]) as number;
  }
  if (output[_UTC] != null) {
    contents[_UTC] = __strictParseInt32(output[_UTC]) as number;
  }
  if (output[_HCPea] != null) {
    contents[_HCPea] = __expectString(output[_HCPea]);
  }
  if (output[_M] != null) {
    contents[_M] = de_Matcher(output[_M], context);
  }
  if (output.LoadBalancerArns === "") {
    contents[_LBAo] = [];
  } else if (output[_LBAo] != null && output[_LBAo][_m] != null) {
    contents[_LBAo] = de_LoadBalancerArns(__getArrayIfSingleItem(output[_LBAo][_m]), context);
  }
  if (output[_TT] != null) {
    contents[_TT] = __expectString(output[_TT]);
  }
  if (output[_PV] != null) {
    contents[_PV] = __expectString(output[_PV]);
  }
  if (output[_IAT] != null) {
    contents[_IAT] = __expectString(output[_IAT]);
  }
  return contents;
};

/**
 * deserializeAws_queryTargetGroupAssociationLimitException
 */
const de_TargetGroupAssociationLimitException = (
  output: any,
  context: __SerdeContext
): TargetGroupAssociationLimitException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryTargetGroupAttribute
 */
const de_TargetGroupAttribute = (output: any, context: __SerdeContext): TargetGroupAttribute => {
  const contents: any = {};
  if (output[_K] != null) {
    contents[_K] = __expectString(output[_K]);
  }
  if (output[_Val] != null) {
    contents[_Val] = __expectString(output[_Val]);
  }
  return contents;
};

/**
 * deserializeAws_queryTargetGroupAttributes
 */
const de_TargetGroupAttributes = (output: any, context: __SerdeContext): TargetGroupAttribute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TargetGroupAttribute(entry, context);
    });
};

/**
 * deserializeAws_queryTargetGroupList
 */
const de_TargetGroupList = (output: any, context: __SerdeContext): TargetGroupTuple[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TargetGroupTuple(entry, context);
    });
};

/**
 * deserializeAws_queryTargetGroupNotFoundException
 */
const de_TargetGroupNotFoundException = (output: any, context: __SerdeContext): TargetGroupNotFoundException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryTargetGroups
 */
const de_TargetGroups = (output: any, context: __SerdeContext): TargetGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TargetGroup(entry, context);
    });
};

/**
 * deserializeAws_queryTargetGroupStickinessConfig
 */
const de_TargetGroupStickinessConfig = (output: any, context: __SerdeContext): TargetGroupStickinessConfig => {
  const contents: any = {};
  if (output[_E] != null) {
    contents[_E] = __parseBoolean(output[_E]);
  }
  if (output[_DS] != null) {
    contents[_DS] = __strictParseInt32(output[_DS]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryTargetGroupTuple
 */
const de_TargetGroupTuple = (output: any, context: __SerdeContext): TargetGroupTuple => {
  const contents: any = {};
  if (output[_TGA] != null) {
    contents[_TGA] = __expectString(output[_TGA]);
  }
  if (output[_W] != null) {
    contents[_W] = __strictParseInt32(output[_W]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryTargetHealth
 */
const de_TargetHealth = (output: any, context: __SerdeContext): TargetHealth => {
  const contents: any = {};
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_R] != null) {
    contents[_R] = __expectString(output[_R]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  return contents;
};

/**
 * deserializeAws_queryTargetHealthDescription
 */
const de_TargetHealthDescription = (output: any, context: __SerdeContext): TargetHealthDescription => {
  const contents: any = {};
  if (output[_Targ] != null) {
    contents[_Targ] = de_TargetDescription(output[_Targ], context);
  }
  if (output[_HCPe] != null) {
    contents[_HCPe] = __expectString(output[_HCPe]);
  }
  if (output[_TH] != null) {
    contents[_TH] = de_TargetHealth(output[_TH], context);
  }
  if (output[_AD] != null) {
    contents[_AD] = de_AnomalyDetection(output[_AD], context);
  }
  if (output[_AO] != null) {
    contents[_AO] = de_AdministrativeOverride(output[_AO], context);
  }
  return contents;
};

/**
 * deserializeAws_queryTargetHealthDescriptions
 */
const de_TargetHealthDescriptions = (output: any, context: __SerdeContext): TargetHealthDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TargetHealthDescription(entry, context);
    });
};

/**
 * deserializeAws_queryTooManyActionsException
 */
const de_TooManyActionsException = (output: any, context: __SerdeContext): TooManyActionsException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyCertificatesException
 */
const de_TooManyCertificatesException = (output: any, context: __SerdeContext): TooManyCertificatesException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyListenersException
 */
const de_TooManyListenersException = (output: any, context: __SerdeContext): TooManyListenersException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyLoadBalancersException
 */
const de_TooManyLoadBalancersException = (output: any, context: __SerdeContext): TooManyLoadBalancersException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyRegistrationsForTargetIdException
 */
const de_TooManyRegistrationsForTargetIdException = (
  output: any,
  context: __SerdeContext
): TooManyRegistrationsForTargetIdException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyRulesException
 */
const de_TooManyRulesException = (output: any, context: __SerdeContext): TooManyRulesException => {
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
 * deserializeAws_queryTooManyTargetGroupsException
 */
const de_TooManyTargetGroupsException = (output: any, context: __SerdeContext): TooManyTargetGroupsException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyTargetsException
 */
const de_TooManyTargetsException = (output: any, context: __SerdeContext): TooManyTargetsException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyTrustStoreRevocationEntriesException
 */
const de_TooManyTrustStoreRevocationEntriesException = (
  output: any,
  context: __SerdeContext
): TooManyTrustStoreRevocationEntriesException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyTrustStoresException
 */
const de_TooManyTrustStoresException = (output: any, context: __SerdeContext): TooManyTrustStoresException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerException
 */
const de_TooManyUniqueTargetGroupsPerLoadBalancerException = (
  output: any,
  context: __SerdeContext
): TooManyUniqueTargetGroupsPerLoadBalancerException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryTrustStore
 */
const de_TrustStore = (output: any, context: __SerdeContext): TrustStore => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_TSA] != null) {
    contents[_TSA] = __expectString(output[_TSA]);
  }
  if (output[_Sta] != null) {
    contents[_Sta] = __expectString(output[_Sta]);
  }
  if (output[_NOCC] != null) {
    contents[_NOCC] = __strictParseInt32(output[_NOCC]) as number;
  }
  if (output[_TRE] != null) {
    contents[_TRE] = __strictParseLong(output[_TRE]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryTrustStoreAssociation
 */
const de_TrustStoreAssociation = (output: any, context: __SerdeContext): TrustStoreAssociation => {
  const contents: any = {};
  if (output[_RAe] != null) {
    contents[_RAe] = __expectString(output[_RAe]);
  }
  return contents;
};

/**
 * deserializeAws_queryTrustStoreAssociationNotFoundException
 */
const de_TrustStoreAssociationNotFoundException = (
  output: any,
  context: __SerdeContext
): TrustStoreAssociationNotFoundException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryTrustStoreAssociations
 */
const de_TrustStoreAssociations = (output: any, context: __SerdeContext): TrustStoreAssociation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrustStoreAssociation(entry, context);
    });
};

/**
 * deserializeAws_queryTrustStoreInUseException
 */
const de_TrustStoreInUseException = (output: any, context: __SerdeContext): TrustStoreInUseException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryTrustStoreNotFoundException
 */
const de_TrustStoreNotFoundException = (output: any, context: __SerdeContext): TrustStoreNotFoundException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryTrustStoreNotReadyException
 */
const de_TrustStoreNotReadyException = (output: any, context: __SerdeContext): TrustStoreNotReadyException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryTrustStoreRevocation
 */
const de_TrustStoreRevocation = (output: any, context: __SerdeContext): TrustStoreRevocation => {
  const contents: any = {};
  if (output[_TSA] != null) {
    contents[_TSA] = __expectString(output[_TSA]);
  }
  if (output[_RIe] != null) {
    contents[_RIe] = __strictParseLong(output[_RIe]) as number;
  }
  if (output[_RTev] != null) {
    contents[_RTev] = __expectString(output[_RTev]);
  }
  if (output[_NORE] != null) {
    contents[_NORE] = __strictParseLong(output[_NORE]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryTrustStoreRevocations
 */
const de_TrustStoreRevocations = (output: any, context: __SerdeContext): TrustStoreRevocation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrustStoreRevocation(entry, context);
    });
};

/**
 * deserializeAws_queryTrustStores
 */
const de_TrustStores = (output: any, context: __SerdeContext): TrustStore[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrustStore(entry, context);
    });
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

/**
 * deserializeAws_queryZonalCapacityReservationState
 */
const de_ZonalCapacityReservationState = (output: any, context: __SerdeContext): ZonalCapacityReservationState => {
  const contents: any = {};
  if (output[_St] != null) {
    contents[_St] = de_CapacityReservationStatus(output[_St], context);
  }
  if (output[_AZ] != null) {
    contents[_AZ] = __expectString(output[_AZ]);
  }
  if (output[_ECU] != null) {
    contents[_ECU] = __strictParseFloat(output[_ECU]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryZonalCapacityReservationStates
 */
const de_ZonalCapacityReservationStates = (output: any, context: __SerdeContext): ZonalCapacityReservationState[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ZonalCapacityReservationState(entry, context);
    });
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

const _ = "2015-12-01";
const _A = "Action";
const _ACC = "AuthenticateCognitoConfig";
const _AD = "AnomalyDetection";
const _AE = "AuthorizationEndpoint";
const _AI = "AllocationId";
const _ALC = "AddListenerCertificates";
const _AO = "AdministrativeOverride";
const _AOC = "AuthenticateOidcConfig";
const _AP = "AlpnPolicy";
const _AREP = "AuthenticationRequestExtraParams";
const _AT = "AddTags";
const _ATSR = "AddTrustStoreRevocations";
const _AZ = "AvailabilityZone";
const _AZv = "AvailabilityZones";
const _Ac = "Actions";
const _At = "Attributes";
const _C = "Certificates";
const _CA = "CertificateArn";
const _CCBSB = "CaCertificatesBundleS3Bucket";
const _CCBSK = "CaCertificatesBundleS3Key";
const _CCBSOV = "CaCertificatesBundleS3ObjectVersion";
const _CHZI = "CanonicalHostedZoneId";
const _CI = "ClientId";
const _CL = "CreateListener";
const _CLB = "CreateLoadBalancer";
const _COIP = "CustomerOwnedIpv4Pool";
const _CR = "CreateRule";
const _CRS = "CapacityReservationState";
const _CS = "ClientSecret";
const _CT = "ContentType";
const _CTG = "CreateTargetGroup";
const _CTS = "CreateTrustStore";
const _CTr = "CreatedTime";
const _CU = "CapacityUnits";
const _Ci = "Ciphers";
const _Co = "Conditions";
const _Cod = "Code";
const _D = "Description";
const _DA = "DefaultActions";
const _DAL = "DescribeAccountLimits";
const _DCR = "DescribeCapacityReservation";
const _DL = "DeleteListener";
const _DLA = "DescribeListenerAttributes";
const _DLB = "DeleteLoadBalancer";
const _DLBA = "DescribeLoadBalancerAttributes";
const _DLBe = "DescribeLoadBalancers";
const _DLC = "DescribeListenerCertificates";
const _DLe = "DescribeListeners";
const _DNSN = "DNSName";
const _DR = "DeleteRule";
const _DRR = "DecreaseRequestsRemaining";
const _DRe = "DescribeRules";
const _DS = "DurationSeconds";
const _DSSLP = "DescribeSSLPolicies";
const _DSTSA = "DeleteSharedTrustStoreAssociation";
const _DT = "DeregisterTargets";
const _DTG = "DeleteTargetGroup";
const _DTGA = "DescribeTargetGroupAttributes";
const _DTGe = "DescribeTargetGroups";
const _DTH = "DescribeTargetHealth";
const _DTS = "DeleteTrustStore";
const _DTSA = "DescribeTrustStoreAssociations";
const _DTSR = "DescribeTrustStoreRevocations";
const _DTSe = "DescribeTrustStores";
const _DTe = "DescribeTags";
const _E = "Enabled";
const _ECU = "EffectiveCapacityUnits";
const _EPFISN = "EnablePrefixForIpv6SourceNat";
const _ESGIROPLT = "EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic";
const _F = "Field";
const _FC = "ForwardConfig";
const _FRC = "FixedResponseConfig";
const _GC = "GrpcCode";
const _GRP = "GetResourcePolicy";
const _GTSCCB = "GetTrustStoreCaCertificatesBundle";
const _GTSRC = "GetTrustStoreRevocationContent";
const _H = "Host";
const _HC = "HttpCode";
const _HCE = "HealthCheckEnabled";
const _HCIS = "HealthCheckIntervalSeconds";
const _HCP = "HealthCheckProtocol";
const _HCPe = "HealthCheckPort";
const _HCPea = "HealthCheckPath";
const _HCTS = "HealthCheckTimeoutSeconds";
const _HHC = "HostHeaderConfig";
const _HHCt = "HttpHeaderConfig";
const _HHN = "HttpHeaderName";
const _HRMC = "HttpRequestMethodConfig";
const _HTC = "HealthyThresholdCount";
const _I = "Issuer";
const _IA = "IpAddress";
const _IAT = "IpAddressType";
const _ICCE = "IgnoreClientCertificateExpiry";
const _ID = "IsDefault";
const _IPA = "IPv6Address";
const _Id = "Id";
const _In = "Include";
const _K = "Key";
const _L = "Listeners";
const _LA = "ListenerArn";
const _LAi = "ListenerArns";
const _LB = "LoadBalancers";
const _LBA = "LoadBalancerArn";
const _LBAo = "LoadBalancerArns";
const _LBAoa = "LoadBalancerAddresses";
const _LBN = "LoadBalancerName";
const _LBT = "LoadBalancerType";
const _LMT = "LastModifiedTime";
const _Li = "Limits";
const _Lo = "Location";
const _M = "Matcher";
const _MA = "MutualAuthentication";
const _MB = "MessageBody";
const _MCR = "ModifyCapacityReservation";
const _MIE = "MitigationInEffect";
const _ML = "ModifyListener";
const _MLA = "ModifyListenerAttributes";
const _MLBA = "ModifyLoadBalancerAttributes";
const _MLBC = "MinimumLoadBalancerCapacity";
const _MR = "ModifyRule";
const _MTG = "ModifyTargetGroup";
const _MTGA = "ModifyTargetGroupAttributes";
const _MTS = "ModifyTrustStore";
const _Ma = "Marker";
const _Max = "Max";
const _Me = "Message";
const _Mo = "Mode";
const _N = "Name";
const _NM = "NextMarker";
const _NOCC = "NumberOfCaCertificates";
const _NORE = "NumberOfRevokedEntries";
const _Na = "Names";
const _O = "Order";
const _OI = "OutpostId";
const _OUR = "OnUnauthenticatedRequest";
const _P = "Protocol";
const _PIPA = "PrivateIPv4Address";
const _PPC = "PathPatternConfig";
const _PS = "PageSize";
const _PV = "ProtocolVersion";
const _Pa = "Path";
const _Po = "Port";
const _Pol = "Policy";
const _Pr = "Priority";
const _Q = "Query";
const _QSC = "QueryStringConfig";
const _R = "Reason";
const _RA = "ResourceArns";
const _RAe = "ResourceArn";
const _RAu = "RuleArn";
const _RAul = "RuleArns";
const _RC = "RedirectConfig";
const _RCR = "ResetCapacityReservation";
const _RCe = "RevocationContents";
const _RI = "RevocationIds";
const _RIe = "RevocationId";
const _RLC = "RemoveListenerCertificates";
const _RP = "RulePriorities";
const _RT = "RegisterTargets";
const _RTSR = "RemoveTrustStoreRevocations";
const _RTe = "RemoveTags";
const _RTev = "RevocationType";
const _Re = "Result";
const _Ru = "Rules";
const _S = "Scope";
const _SB = "S3Bucket";
const _SC = "StatusCode";
const _SCN = "SessionCookieName";
const _SG = "SecurityGroups";
const _SGI = "SecurityGroupIds";
const _SI = "SubnetId";
const _SIAT = "SetIpAddressType";
const _SIC = "SourceIpConfig";
const _SK = "S3Key";
const _SLBT = "SupportedLoadBalancerTypes";
const _SM = "SubnetMappings";
const _SNIP = "SourceNatIpv6Prefix";
const _SNIPo = "SourceNatIpv6Prefixes";
const _SOV = "S3ObjectVersion";
const _SP = "SslPolicy";
const _SPs = "SslPolicies";
const _SPsl = "SslProtocols";
const _SRP = "SetRulePriorities";
const _SS = "SetSubnets";
const _SSG = "SetSecurityGroups";
const _ST = "SessionTimeout";
const _Sc = "Scheme";
const _St = "State";
const _Sta = "Status";
const _Su = "Subnets";
const _T = "Type";
const _TD = "TagDescriptions";
const _TE = "TokenEndpoint";
const _TG = "TargetGroups";
const _TGA = "TargetGroupArn";
const _TGAa = "TargetGroupArns";
const _TGN = "TargetGroupName";
const _TGSC = "TargetGroupStickinessConfig";
const _TH = "TargetHealth";
const _THD = "TargetHealthDescriptions";
const _TK = "TagKeys";
const _TRE = "TotalRevokedEntries";
const _TS = "TrustStores";
const _TSA = "TrustStoreArn";
const _TSAS = "TrustStoreAssociationStatus";
const _TSAr = "TrustStoreArns";
const _TSAru = "TrustStoreAssociations";
const _TSR = "TrustStoreRevocations";
const _TT = "TargetType";
const _Ta = "Tags";
const _Tar = "Targets";
const _Targ = "Target";
const _UECS = "UseExistingClientSecret";
const _UIE = "UserInfoEndpoint";
const _UPA = "UserPoolArn";
const _UPCI = "UserPoolClientId";
const _UPD = "UserPoolDomain";
const _UTC = "UnhealthyThresholdCount";
const _V = "Version";
const _VI = "VpcId";
const _Va = "Values";
const _Val = "Value";
const _W = "Weight";
const _ZN = "ZoneName";
const _e = "entry";
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
