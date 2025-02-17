// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
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
  CreateAddonInstanceCommandInput,
  CreateAddonInstanceCommandOutput,
} from "../commands/CreateAddonInstanceCommand";
import {
  CreateAddonSubscriptionCommandInput,
  CreateAddonSubscriptionCommandOutput,
} from "../commands/CreateAddonSubscriptionCommand";
import { CreateAddressListCommandInput, CreateAddressListCommandOutput } from "../commands/CreateAddressListCommand";
import {
  CreateAddressListImportJobCommandInput,
  CreateAddressListImportJobCommandOutput,
} from "../commands/CreateAddressListImportJobCommand";
import { CreateArchiveCommandInput, CreateArchiveCommandOutput } from "../commands/CreateArchiveCommand";
import { CreateIngressPointCommandInput, CreateIngressPointCommandOutput } from "../commands/CreateIngressPointCommand";
import { CreateRelayCommandInput, CreateRelayCommandOutput } from "../commands/CreateRelayCommand";
import { CreateRuleSetCommandInput, CreateRuleSetCommandOutput } from "../commands/CreateRuleSetCommand";
import {
  CreateTrafficPolicyCommandInput,
  CreateTrafficPolicyCommandOutput,
} from "../commands/CreateTrafficPolicyCommand";
import {
  DeleteAddonInstanceCommandInput,
  DeleteAddonInstanceCommandOutput,
} from "../commands/DeleteAddonInstanceCommand";
import {
  DeleteAddonSubscriptionCommandInput,
  DeleteAddonSubscriptionCommandOutput,
} from "../commands/DeleteAddonSubscriptionCommand";
import { DeleteAddressListCommandInput, DeleteAddressListCommandOutput } from "../commands/DeleteAddressListCommand";
import { DeleteArchiveCommandInput, DeleteArchiveCommandOutput } from "../commands/DeleteArchiveCommand";
import { DeleteIngressPointCommandInput, DeleteIngressPointCommandOutput } from "../commands/DeleteIngressPointCommand";
import { DeleteRelayCommandInput, DeleteRelayCommandOutput } from "../commands/DeleteRelayCommand";
import { DeleteRuleSetCommandInput, DeleteRuleSetCommandOutput } from "../commands/DeleteRuleSetCommand";
import {
  DeleteTrafficPolicyCommandInput,
  DeleteTrafficPolicyCommandOutput,
} from "../commands/DeleteTrafficPolicyCommand";
import {
  DeregisterMemberFromAddressListCommandInput,
  DeregisterMemberFromAddressListCommandOutput,
} from "../commands/DeregisterMemberFromAddressListCommand";
import { GetAddonInstanceCommandInput, GetAddonInstanceCommandOutput } from "../commands/GetAddonInstanceCommand";
import {
  GetAddonSubscriptionCommandInput,
  GetAddonSubscriptionCommandOutput,
} from "../commands/GetAddonSubscriptionCommand";
import { GetAddressListCommandInput, GetAddressListCommandOutput } from "../commands/GetAddressListCommand";
import {
  GetAddressListImportJobCommandInput,
  GetAddressListImportJobCommandOutput,
} from "../commands/GetAddressListImportJobCommand";
import { GetArchiveCommandInput, GetArchiveCommandOutput } from "../commands/GetArchiveCommand";
import { GetArchiveExportCommandInput, GetArchiveExportCommandOutput } from "../commands/GetArchiveExportCommand";
import { GetArchiveMessageCommandInput, GetArchiveMessageCommandOutput } from "../commands/GetArchiveMessageCommand";
import {
  GetArchiveMessageContentCommandInput,
  GetArchiveMessageContentCommandOutput,
} from "../commands/GetArchiveMessageContentCommand";
import { GetArchiveSearchCommandInput, GetArchiveSearchCommandOutput } from "../commands/GetArchiveSearchCommand";
import {
  GetArchiveSearchResultsCommandInput,
  GetArchiveSearchResultsCommandOutput,
} from "../commands/GetArchiveSearchResultsCommand";
import { GetIngressPointCommandInput, GetIngressPointCommandOutput } from "../commands/GetIngressPointCommand";
import {
  GetMemberOfAddressListCommandInput,
  GetMemberOfAddressListCommandOutput,
} from "../commands/GetMemberOfAddressListCommand";
import { GetRelayCommandInput, GetRelayCommandOutput } from "../commands/GetRelayCommand";
import { GetRuleSetCommandInput, GetRuleSetCommandOutput } from "../commands/GetRuleSetCommand";
import { GetTrafficPolicyCommandInput, GetTrafficPolicyCommandOutput } from "../commands/GetTrafficPolicyCommand";
import { ListAddonInstancesCommandInput, ListAddonInstancesCommandOutput } from "../commands/ListAddonInstancesCommand";
import {
  ListAddonSubscriptionsCommandInput,
  ListAddonSubscriptionsCommandOutput,
} from "../commands/ListAddonSubscriptionsCommand";
import {
  ListAddressListImportJobsCommandInput,
  ListAddressListImportJobsCommandOutput,
} from "../commands/ListAddressListImportJobsCommand";
import { ListAddressListsCommandInput, ListAddressListsCommandOutput } from "../commands/ListAddressListsCommand";
import { ListArchiveExportsCommandInput, ListArchiveExportsCommandOutput } from "../commands/ListArchiveExportsCommand";
import { ListArchivesCommandInput, ListArchivesCommandOutput } from "../commands/ListArchivesCommand";
import {
  ListArchiveSearchesCommandInput,
  ListArchiveSearchesCommandOutput,
} from "../commands/ListArchiveSearchesCommand";
import { ListIngressPointsCommandInput, ListIngressPointsCommandOutput } from "../commands/ListIngressPointsCommand";
import {
  ListMembersOfAddressListCommandInput,
  ListMembersOfAddressListCommandOutput,
} from "../commands/ListMembersOfAddressListCommand";
import { ListRelaysCommandInput, ListRelaysCommandOutput } from "../commands/ListRelaysCommand";
import { ListRuleSetsCommandInput, ListRuleSetsCommandOutput } from "../commands/ListRuleSetsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTrafficPoliciesCommandInput,
  ListTrafficPoliciesCommandOutput,
} from "../commands/ListTrafficPoliciesCommand";
import {
  RegisterMemberToAddressListCommandInput,
  RegisterMemberToAddressListCommandOutput,
} from "../commands/RegisterMemberToAddressListCommand";
import {
  StartAddressListImportJobCommandInput,
  StartAddressListImportJobCommandOutput,
} from "../commands/StartAddressListImportJobCommand";
import { StartArchiveExportCommandInput, StartArchiveExportCommandOutput } from "../commands/StartArchiveExportCommand";
import { StartArchiveSearchCommandInput, StartArchiveSearchCommandOutput } from "../commands/StartArchiveSearchCommand";
import {
  StopAddressListImportJobCommandInput,
  StopAddressListImportJobCommandOutput,
} from "../commands/StopAddressListImportJobCommand";
import { StopArchiveExportCommandInput, StopArchiveExportCommandOutput } from "../commands/StopArchiveExportCommand";
import { StopArchiveSearchCommandInput, StopArchiveSearchCommandOutput } from "../commands/StopArchiveSearchCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateArchiveCommandInput, UpdateArchiveCommandOutput } from "../commands/UpdateArchiveCommand";
import { UpdateIngressPointCommandInput, UpdateIngressPointCommandOutput } from "../commands/UpdateIngressPointCommand";
import { UpdateRelayCommandInput, UpdateRelayCommandOutput } from "../commands/UpdateRelayCommand";
import { UpdateRuleSetCommandInput, UpdateRuleSetCommandOutput } from "../commands/UpdateRuleSetCommand";
import {
  UpdateTrafficPolicyCommandInput,
  UpdateTrafficPolicyCommandOutput,
} from "../commands/UpdateTrafficPolicyCommand";
import { MailManagerServiceException as __BaseException } from "../models/MailManagerServiceException";
import {
  AccessDeniedException,
  AddHeaderAction,
  AddonInstance,
  AddonSubscription,
  AddressFilter,
  AddressList,
  Analysis,
  Archive,
  ArchiveAction,
  ArchiveBooleanExpression,
  ArchiveBooleanToEvaluate,
  ArchiveFilterCondition,
  ArchiveFilters,
  ArchiveRetention,
  ArchiveStringExpression,
  ArchiveStringToEvaluate,
  ConflictException,
  CreateAddonInstanceRequest,
  CreateAddonSubscriptionRequest,
  CreateAddressListImportJobRequest,
  CreateAddressListRequest,
  CreateArchiveRequest,
  CreateIngressPointRequest,
  CreateRelayRequest,
  CreateRuleSetRequest,
  CreateTrafficPolicyRequest,
  DeleteAddonInstanceRequest,
  DeleteAddonSubscriptionRequest,
  DeleteAddressListRequest,
  DeleteArchiveRequest,
  DeleteIngressPointRequest,
  DeleteRelayRequest,
  DeleteRuleSetRequest,
  DeleteTrafficPolicyRequest,
  DeliverToMailboxAction,
  DeliverToQBusinessAction,
  DeregisterMemberFromAddressListRequest,
  DropAction,
  ExportDestinationConfiguration,
  ExportStatus,
  ExportSummary,
  GetAddonInstanceRequest,
  GetAddonInstanceResponse,
  GetAddonSubscriptionRequest,
  GetAddonSubscriptionResponse,
  GetAddressListImportJobRequest,
  GetAddressListImportJobResponse,
  GetAddressListRequest,
  GetAddressListResponse,
  GetArchiveExportRequest,
  GetArchiveExportResponse,
  GetArchiveMessageContentRequest,
  GetArchiveMessageRequest,
  GetArchiveMessageResponse,
  GetArchiveRequest,
  GetArchiveResponse,
  GetArchiveSearchRequest,
  GetArchiveSearchResponse,
  GetArchiveSearchResultsRequest,
  GetArchiveSearchResultsResponse,
  GetIngressPointRequest,
  GetIngressPointResponse,
  GetMemberOfAddressListRequest,
  GetMemberOfAddressListResponse,
  GetRelayRequest,
  GetRelayResponse,
  GetRuleSetRequest,
  GetRuleSetResponse,
  GetTrafficPolicyRequest,
  GetTrafficPolicyResponse,
  ImportDataFormat,
  ImportJob,
  IngressAnalysis,
  IngressBooleanExpression,
  IngressBooleanToEvaluate,
  IngressIpToEvaluate,
  IngressIpv4Expression,
  IngressIsInAddressList,
  IngressPointAuthConfiguration,
  IngressPointConfiguration,
  IngressPointPasswordConfiguration,
  IngressStringExpression,
  IngressStringToEvaluate,
  IngressTlsProtocolExpression,
  IngressTlsProtocolToEvaluate,
  ListAddonInstancesRequest,
  ListAddonInstancesResponse,
  ListAddonSubscriptionsRequest,
  ListAddonSubscriptionsResponse,
  ListAddressListImportJobsRequest,
  ListAddressListImportJobsResponse,
  ListAddressListsRequest,
  ListAddressListsResponse,
  ListArchiveExportsRequest,
  ListArchiveExportsResponse,
  ListArchiveSearchesRequest,
  ListArchiveSearchesResponse,
  ListArchivesRequest,
  ListArchivesResponse,
  ListIngressPointsRequest,
  ListMembersOfAddressListRequest,
  ListMembersOfAddressListResponse,
  ListRelaysRequest,
  ListRelaysResponse,
  ListRuleSetsRequest,
  ListRuleSetsResponse,
  ListTagsForResourceRequest,
  ListTrafficPoliciesRequest,
  Metadata,
  NoAuthentication,
  PolicyCondition,
  PolicyStatement,
  RegisterMemberToAddressListRequest,
  Relay,
  RelayAction,
  RelayAuthentication,
  ReplaceRecipientAction,
  ResourceNotFoundException,
  Row,
  Rule,
  RuleAction,
  RuleBooleanExpression,
  RuleBooleanToEvaluate,
  RuleCondition,
  RuleDmarcExpression,
  RuleDmarcPolicy,
  RuleIpExpression,
  RuleIpToEvaluate,
  RuleIsInAddressList,
  RuleNumberExpression,
  RuleNumberToEvaluate,
  RuleSet,
  RuleStringExpression,
  RuleStringToEvaluate,
  RuleVerdict,
  RuleVerdictExpression,
  RuleVerdictToEvaluate,
  S3Action,
  S3ExportDestinationConfiguration,
  SavedAddress,
  SearchStatus,
  SearchSummary,
  SendAction,
  ServiceQuotaExceededException,
  StartAddressListImportJobRequest,
  StartArchiveExportRequest,
  StartArchiveSearchRequest,
  StopAddressListImportJobRequest,
  StopArchiveExportRequest,
  StopArchiveSearchRequest,
  Tag,
  TagResourceRequest,
  ThrottlingException,
  UntagResourceRequest,
  UpdateArchiveRequest,
  UpdateIngressPointRequest,
  UpdateRelayRequest,
  UpdateRuleSetRequest,
  UpdateTrafficPolicyRequest,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_json1_0CreateAddonInstanceCommand
 */
export const se_CreateAddonInstanceCommand = async (
  input: CreateAddonInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAddonInstance");
  let body: any;
  body = JSON.stringify(se_CreateAddonInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateAddonSubscriptionCommand
 */
export const se_CreateAddonSubscriptionCommand = async (
  input: CreateAddonSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAddonSubscription");
  let body: any;
  body = JSON.stringify(se_CreateAddonSubscriptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateAddressListCommand
 */
export const se_CreateAddressListCommand = async (
  input: CreateAddressListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAddressList");
  let body: any;
  body = JSON.stringify(se_CreateAddressListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateAddressListImportJobCommand
 */
export const se_CreateAddressListImportJobCommand = async (
  input: CreateAddressListImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAddressListImportJob");
  let body: any;
  body = JSON.stringify(se_CreateAddressListImportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateArchiveCommand
 */
export const se_CreateArchiveCommand = async (
  input: CreateArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateArchive");
  let body: any;
  body = JSON.stringify(se_CreateArchiveRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateIngressPointCommand
 */
export const se_CreateIngressPointCommand = async (
  input: CreateIngressPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateIngressPoint");
  let body: any;
  body = JSON.stringify(se_CreateIngressPointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateRelayCommand
 */
export const se_CreateRelayCommand = async (
  input: CreateRelayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateRelay");
  let body: any;
  body = JSON.stringify(se_CreateRelayRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateRuleSetCommand
 */
export const se_CreateRuleSetCommand = async (
  input: CreateRuleSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateRuleSet");
  let body: any;
  body = JSON.stringify(se_CreateRuleSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateTrafficPolicyCommand
 */
export const se_CreateTrafficPolicyCommand = async (
  input: CreateTrafficPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTrafficPolicy");
  let body: any;
  body = JSON.stringify(se_CreateTrafficPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteAddonInstanceCommand
 */
export const se_DeleteAddonInstanceCommand = async (
  input: DeleteAddonInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAddonInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteAddonSubscriptionCommand
 */
export const se_DeleteAddonSubscriptionCommand = async (
  input: DeleteAddonSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAddonSubscription");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteAddressListCommand
 */
export const se_DeleteAddressListCommand = async (
  input: DeleteAddressListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAddressList");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteArchiveCommand
 */
export const se_DeleteArchiveCommand = async (
  input: DeleteArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteArchive");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteIngressPointCommand
 */
export const se_DeleteIngressPointCommand = async (
  input: DeleteIngressPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteIngressPoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteRelayCommand
 */
export const se_DeleteRelayCommand = async (
  input: DeleteRelayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRelay");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteRuleSetCommand
 */
export const se_DeleteRuleSetCommand = async (
  input: DeleteRuleSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRuleSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteTrafficPolicyCommand
 */
export const se_DeleteTrafficPolicyCommand = async (
  input: DeleteTrafficPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTrafficPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeregisterMemberFromAddressListCommand
 */
export const se_DeregisterMemberFromAddressListCommand = async (
  input: DeregisterMemberFromAddressListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterMemberFromAddressList");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetAddonInstanceCommand
 */
export const se_GetAddonInstanceCommand = async (
  input: GetAddonInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAddonInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetAddonSubscriptionCommand
 */
export const se_GetAddonSubscriptionCommand = async (
  input: GetAddonSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAddonSubscription");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetAddressListCommand
 */
export const se_GetAddressListCommand = async (
  input: GetAddressListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAddressList");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetAddressListImportJobCommand
 */
export const se_GetAddressListImportJobCommand = async (
  input: GetAddressListImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAddressListImportJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetArchiveCommand
 */
export const se_GetArchiveCommand = async (
  input: GetArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetArchive");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetArchiveExportCommand
 */
export const se_GetArchiveExportCommand = async (
  input: GetArchiveExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetArchiveExport");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetArchiveMessageCommand
 */
export const se_GetArchiveMessageCommand = async (
  input: GetArchiveMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetArchiveMessage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetArchiveMessageContentCommand
 */
export const se_GetArchiveMessageContentCommand = async (
  input: GetArchiveMessageContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetArchiveMessageContent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetArchiveSearchCommand
 */
export const se_GetArchiveSearchCommand = async (
  input: GetArchiveSearchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetArchiveSearch");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetArchiveSearchResultsCommand
 */
export const se_GetArchiveSearchResultsCommand = async (
  input: GetArchiveSearchResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetArchiveSearchResults");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetIngressPointCommand
 */
export const se_GetIngressPointCommand = async (
  input: GetIngressPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetIngressPoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetMemberOfAddressListCommand
 */
export const se_GetMemberOfAddressListCommand = async (
  input: GetMemberOfAddressListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetMemberOfAddressList");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetRelayCommand
 */
export const se_GetRelayCommand = async (
  input: GetRelayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRelay");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetRuleSetCommand
 */
export const se_GetRuleSetCommand = async (
  input: GetRuleSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRuleSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetTrafficPolicyCommand
 */
export const se_GetTrafficPolicyCommand = async (
  input: GetTrafficPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTrafficPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListAddonInstancesCommand
 */
export const se_ListAddonInstancesCommand = async (
  input: ListAddonInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAddonInstances");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListAddonSubscriptionsCommand
 */
export const se_ListAddonSubscriptionsCommand = async (
  input: ListAddonSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAddonSubscriptions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListAddressListImportJobsCommand
 */
export const se_ListAddressListImportJobsCommand = async (
  input: ListAddressListImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAddressListImportJobs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListAddressListsCommand
 */
export const se_ListAddressListsCommand = async (
  input: ListAddressListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAddressLists");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListArchiveExportsCommand
 */
export const se_ListArchiveExportsCommand = async (
  input: ListArchiveExportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListArchiveExports");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListArchivesCommand
 */
export const se_ListArchivesCommand = async (
  input: ListArchivesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListArchives");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListArchiveSearchesCommand
 */
export const se_ListArchiveSearchesCommand = async (
  input: ListArchiveSearchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListArchiveSearches");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListIngressPointsCommand
 */
export const se_ListIngressPointsCommand = async (
  input: ListIngressPointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListIngressPoints");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListMembersOfAddressListCommand
 */
export const se_ListMembersOfAddressListCommand = async (
  input: ListMembersOfAddressListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMembersOfAddressList");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListRelaysCommand
 */
export const se_ListRelaysCommand = async (
  input: ListRelaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRelays");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListRuleSetsCommand
 */
export const se_ListRuleSetsCommand = async (
  input: ListRuleSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRuleSets");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTagsForResourceCommand
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
 * serializeAws_json1_0ListTrafficPoliciesCommand
 */
export const se_ListTrafficPoliciesCommand = async (
  input: ListTrafficPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTrafficPolicies");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RegisterMemberToAddressListCommand
 */
export const se_RegisterMemberToAddressListCommand = async (
  input: RegisterMemberToAddressListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterMemberToAddressList");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StartAddressListImportJobCommand
 */
export const se_StartAddressListImportJobCommand = async (
  input: StartAddressListImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartAddressListImportJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StartArchiveExportCommand
 */
export const se_StartArchiveExportCommand = async (
  input: StartArchiveExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartArchiveExport");
  let body: any;
  body = JSON.stringify(se_StartArchiveExportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StartArchiveSearchCommand
 */
export const se_StartArchiveSearchCommand = async (
  input: StartArchiveSearchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartArchiveSearch");
  let body: any;
  body = JSON.stringify(se_StartArchiveSearchRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StopAddressListImportJobCommand
 */
export const se_StopAddressListImportJobCommand = async (
  input: StopAddressListImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopAddressListImportJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StopArchiveExportCommand
 */
export const se_StopArchiveExportCommand = async (
  input: StopArchiveExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopArchiveExport");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StopArchiveSearchCommand
 */
export const se_StopArchiveSearchCommand = async (
  input: StopArchiveSearchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopArchiveSearch");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagResourceCommand
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
 * serializeAws_json1_0UntagResourceCommand
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
 * serializeAws_json1_0UpdateArchiveCommand
 */
export const se_UpdateArchiveCommand = async (
  input: UpdateArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateArchive");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateIngressPointCommand
 */
export const se_UpdateIngressPointCommand = async (
  input: UpdateIngressPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateIngressPoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateRelayCommand
 */
export const se_UpdateRelayCommand = async (
  input: UpdateRelayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateRelay");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateRuleSetCommand
 */
export const se_UpdateRuleSetCommand = async (
  input: UpdateRuleSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateRuleSet");
  let body: any;
  body = JSON.stringify(se_UpdateRuleSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateTrafficPolicyCommand
 */
export const se_UpdateTrafficPolicyCommand = async (
  input: UpdateTrafficPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateTrafficPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0CreateAddonInstanceCommand
 */
export const de_CreateAddonInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAddonInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateAddonInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateAddonSubscriptionCommand
 */
export const de_CreateAddonSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAddonSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateAddonSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateAddressListCommand
 */
export const de_CreateAddressListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAddressListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateAddressListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateAddressListImportJobCommand
 */
export const de_CreateAddressListImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAddressListImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateAddressListImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateArchiveCommand
 */
export const de_CreateArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateArchiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateIngressPointCommand
 */
export const de_CreateIngressPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIngressPointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateIngressPointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateRelayCommand
 */
export const de_CreateRelayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRelayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateRelayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateRuleSetCommand
 */
export const de_CreateRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateTrafficPolicyCommand
 */
export const de_CreateTrafficPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrafficPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateTrafficPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteAddonInstanceCommand
 */
export const de_DeleteAddonInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAddonInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteAddonInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteAddonSubscriptionCommand
 */
export const de_DeleteAddonSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAddonSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteAddonSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteAddressListCommand
 */
export const de_DeleteAddressListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAddressListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteAddressListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteArchiveCommand
 */
export const de_DeleteArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArchiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteIngressPointCommand
 */
export const de_DeleteIngressPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIngressPointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteIngressPointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteRelayCommand
 */
export const de_DeleteRelayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRelayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteRelayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteRuleSetCommand
 */
export const de_DeleteRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteTrafficPolicyCommand
 */
export const de_DeleteTrafficPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrafficPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteTrafficPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeregisterMemberFromAddressListCommand
 */
export const de_DeregisterMemberFromAddressListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterMemberFromAddressListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeregisterMemberFromAddressListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetAddonInstanceCommand
 */
export const de_GetAddonInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAddonInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAddonInstanceResponse(data, context);
  const response: GetAddonInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetAddonSubscriptionCommand
 */
export const de_GetAddonSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAddonSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAddonSubscriptionResponse(data, context);
  const response: GetAddonSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetAddressListCommand
 */
export const de_GetAddressListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAddressListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAddressListResponse(data, context);
  const response: GetAddressListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetAddressListImportJobCommand
 */
export const de_GetAddressListImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAddressListImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAddressListImportJobResponse(data, context);
  const response: GetAddressListImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetArchiveCommand
 */
export const de_GetArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetArchiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetArchiveResponse(data, context);
  const response: GetArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetArchiveExportCommand
 */
export const de_GetArchiveExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetArchiveExportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetArchiveExportResponse(data, context);
  const response: GetArchiveExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetArchiveMessageCommand
 */
export const de_GetArchiveMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetArchiveMessageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetArchiveMessageResponse(data, context);
  const response: GetArchiveMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetArchiveMessageContentCommand
 */
export const de_GetArchiveMessageContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetArchiveMessageContentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetArchiveMessageContentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetArchiveSearchCommand
 */
export const de_GetArchiveSearchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetArchiveSearchCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetArchiveSearchResponse(data, context);
  const response: GetArchiveSearchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetArchiveSearchResultsCommand
 */
export const de_GetArchiveSearchResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetArchiveSearchResultsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetArchiveSearchResultsResponse(data, context);
  const response: GetArchiveSearchResultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetIngressPointCommand
 */
export const de_GetIngressPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIngressPointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetIngressPointResponse(data, context);
  const response: GetIngressPointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetMemberOfAddressListCommand
 */
export const de_GetMemberOfAddressListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMemberOfAddressListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetMemberOfAddressListResponse(data, context);
  const response: GetMemberOfAddressListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetRelayCommand
 */
export const de_GetRelayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRelayResponse(data, context);
  const response: GetRelayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetRuleSetCommand
 */
export const de_GetRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRuleSetResponse(data, context);
  const response: GetRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetTrafficPolicyCommand
 */
export const de_GetTrafficPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrafficPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTrafficPolicyResponse(data, context);
  const response: GetTrafficPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListAddonInstancesCommand
 */
export const de_ListAddonInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAddonInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAddonInstancesResponse(data, context);
  const response: ListAddonInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListAddonSubscriptionsCommand
 */
export const de_ListAddonSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAddonSubscriptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAddonSubscriptionsResponse(data, context);
  const response: ListAddonSubscriptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListAddressListImportJobsCommand
 */
export const de_ListAddressListImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAddressListImportJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAddressListImportJobsResponse(data, context);
  const response: ListAddressListImportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListAddressListsCommand
 */
export const de_ListAddressListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAddressListsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAddressListsResponse(data, context);
  const response: ListAddressListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListArchiveExportsCommand
 */
export const de_ListArchiveExportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArchiveExportsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListArchiveExportsResponse(data, context);
  const response: ListArchiveExportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListArchivesCommand
 */
export const de_ListArchivesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArchivesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListArchivesResponse(data, context);
  const response: ListArchivesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListArchiveSearchesCommand
 */
export const de_ListArchiveSearchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArchiveSearchesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListArchiveSearchesResponse(data, context);
  const response: ListArchiveSearchesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListIngressPointsCommand
 */
export const de_ListIngressPointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIngressPointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListIngressPointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListMembersOfAddressListCommand
 */
export const de_ListMembersOfAddressListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersOfAddressListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMembersOfAddressListResponse(data, context);
  const response: ListMembersOfAddressListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListRelaysCommand
 */
export const de_ListRelaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRelaysCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRelaysResponse(data, context);
  const response: ListRelaysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListRuleSetsCommand
 */
export const de_ListRuleSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRuleSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRuleSetsResponse(data, context);
  const response: ListRuleSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListTagsForResourceCommand
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
 * deserializeAws_json1_0ListTrafficPoliciesCommand
 */
export const de_ListTrafficPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrafficPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTrafficPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0RegisterMemberToAddressListCommand
 */
export const de_RegisterMemberToAddressListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterMemberToAddressListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RegisterMemberToAddressListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0StartAddressListImportJobCommand
 */
export const de_StartAddressListImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAddressListImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartAddressListImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0StartArchiveExportCommand
 */
export const de_StartArchiveExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartArchiveExportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartArchiveExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0StartArchiveSearchCommand
 */
export const de_StartArchiveSearchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartArchiveSearchCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartArchiveSearchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0StopAddressListImportJobCommand
 */
export const de_StopAddressListImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAddressListImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopAddressListImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0StopArchiveExportCommand
 */
export const de_StopArchiveExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopArchiveExportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopArchiveExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0StopArchiveSearchCommand
 */
export const de_StopArchiveSearchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopArchiveSearchCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopArchiveSearchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0TagResourceCommand
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
 * deserializeAws_json1_0UntagResourceCommand
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
 * deserializeAws_json1_0UpdateArchiveCommand
 */
export const de_UpdateArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateArchiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateIngressPointCommand
 */
export const de_UpdateIngressPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIngressPointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateIngressPointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateRelayCommand
 */
export const de_UpdateRelayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRelayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateRelayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateRuleSetCommand
 */
export const de_UpdateRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateTrafficPolicyCommand
 */
export const de_UpdateTrafficPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrafficPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateTrafficPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_json1_0CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.mailmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mailmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.mailmanager#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mailmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.mailmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.mailmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0AccessDeniedExceptionRes
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
 * deserializeAws_json1_0ConflictExceptionRes
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
 * deserializeAws_json1_0ResourceNotFoundExceptionRes
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
 * deserializeAws_json1_0ServiceQuotaExceededExceptionRes
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
 * deserializeAws_json1_0ThrottlingExceptionRes
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
 * deserializeAws_json1_0ValidationExceptionRes
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

// se_AddHeaderAction omitted.

// se_AddressFilter omitted.

// se_Analysis omitted.

// se_ArchiveAction omitted.

// se_ArchiveBooleanExpression omitted.

// se_ArchiveBooleanToEvaluate omitted.

// se_ArchiveFilterCondition omitted.

// se_ArchiveFilterConditions omitted.

// se_ArchiveFilters omitted.

// se_ArchiveRetention omitted.

// se_ArchiveStringExpression omitted.

// se_ArchiveStringToEvaluate omitted.

/**
 * serializeAws_json1_0CreateAddonInstanceRequest
 */
const se_CreateAddonInstanceRequest = (input: CreateAddonInstanceRequest, context: __SerdeContext): any => {
  return take(input, {
    AddonSubscriptionId: [],
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Tags: _json,
  });
};

/**
 * serializeAws_json1_0CreateAddonSubscriptionRequest
 */
const se_CreateAddonSubscriptionRequest = (input: CreateAddonSubscriptionRequest, context: __SerdeContext): any => {
  return take(input, {
    AddonName: [],
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Tags: _json,
  });
};

/**
 * serializeAws_json1_0CreateAddressListImportJobRequest
 */
const se_CreateAddressListImportJobRequest = (
  input: CreateAddressListImportJobRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AddressListId: [],
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    ImportDataFormat: _json,
    Name: [],
  });
};

/**
 * serializeAws_json1_0CreateAddressListRequest
 */
const se_CreateAddressListRequest = (input: CreateAddressListRequest, context: __SerdeContext): any => {
  return take(input, {
    AddressListName: [],
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Tags: _json,
  });
};

/**
 * serializeAws_json1_0CreateArchiveRequest
 */
const se_CreateArchiveRequest = (input: CreateArchiveRequest, context: __SerdeContext): any => {
  return take(input, {
    ArchiveName: [],
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    KmsKeyArn: [],
    Retention: _json,
    Tags: _json,
  });
};

/**
 * serializeAws_json1_0CreateIngressPointRequest
 */
const se_CreateIngressPointRequest = (input: CreateIngressPointRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    IngressPointConfiguration: _json,
    IngressPointName: [],
    RuleSetId: [],
    Tags: _json,
    TrafficPolicyId: [],
    Type: [],
  });
};

/**
 * serializeAws_json1_0CreateRelayRequest
 */
const se_CreateRelayRequest = (input: CreateRelayRequest, context: __SerdeContext): any => {
  return take(input, {
    Authentication: _json,
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    RelayName: [],
    ServerName: [],
    ServerPort: [],
    Tags: _json,
  });
};

/**
 * serializeAws_json1_0CreateRuleSetRequest
 */
const se_CreateRuleSetRequest = (input: CreateRuleSetRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    RuleSetName: [],
    Rules: (_) => se_Rules(_, context),
    Tags: _json,
  });
};

/**
 * serializeAws_json1_0CreateTrafficPolicyRequest
 */
const se_CreateTrafficPolicyRequest = (input: CreateTrafficPolicyRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DefaultAction: [],
    MaxMessageSizeBytes: [],
    PolicyStatements: _json,
    Tags: _json,
    TrafficPolicyName: [],
  });
};

// se_DeleteAddonInstanceRequest omitted.

// se_DeleteAddonSubscriptionRequest omitted.

// se_DeleteAddressListRequest omitted.

// se_DeleteArchiveRequest omitted.

// se_DeleteIngressPointRequest omitted.

// se_DeleteRelayRequest omitted.

// se_DeleteRuleSetRequest omitted.

// se_DeleteTrafficPolicyRequest omitted.

// se_DeliverToMailboxAction omitted.

// se_DeliverToQBusinessAction omitted.

// se_DeregisterMemberFromAddressListRequest omitted.

// se_DropAction omitted.

// se_ExportDestinationConfiguration omitted.

// se_GetAddonInstanceRequest omitted.

// se_GetAddonSubscriptionRequest omitted.

// se_GetAddressListImportJobRequest omitted.

// se_GetAddressListRequest omitted.

// se_GetArchiveExportRequest omitted.

// se_GetArchiveMessageContentRequest omitted.

// se_GetArchiveMessageRequest omitted.

// se_GetArchiveRequest omitted.

// se_GetArchiveSearchRequest omitted.

// se_GetArchiveSearchResultsRequest omitted.

// se_GetIngressPointRequest omitted.

// se_GetMemberOfAddressListRequest omitted.

// se_GetRelayRequest omitted.

// se_GetRuleSetRequest omitted.

// se_GetTrafficPolicyRequest omitted.

// se_ImportDataFormat omitted.

// se_IngressAddressListArnList omitted.

// se_IngressAnalysis omitted.

// se_IngressBooleanExpression omitted.

// se_IngressBooleanToEvaluate omitted.

// se_IngressIpToEvaluate omitted.

// se_IngressIpv4Expression omitted.

// se_IngressIsInAddressList omitted.

// se_IngressPointConfiguration omitted.

// se_IngressStringExpression omitted.

// se_IngressStringToEvaluate omitted.

// se_IngressTlsProtocolExpression omitted.

// se_IngressTlsProtocolToEvaluate omitted.

// se_Ipv4Cidrs omitted.

// se_ListAddonInstancesRequest omitted.

// se_ListAddonSubscriptionsRequest omitted.

// se_ListAddressListImportJobsRequest omitted.

// se_ListAddressListsRequest omitted.

// se_ListArchiveExportsRequest omitted.

// se_ListArchiveSearchesRequest omitted.

// se_ListArchivesRequest omitted.

// se_ListIngressPointsRequest omitted.

// se_ListMembersOfAddressListRequest omitted.

// se_ListRelaysRequest omitted.

// se_ListRuleSetsRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListTrafficPoliciesRequest omitted.

// se_NoAuthentication omitted.

// se_PolicyCondition omitted.

// se_PolicyConditions omitted.

// se_PolicyStatement omitted.

// se_PolicyStatementList omitted.

// se_Recipients omitted.

// se_RegisterMemberToAddressListRequest omitted.

// se_RelayAction omitted.

// se_RelayAuthentication omitted.

// se_ReplaceRecipientAction omitted.

/**
 * serializeAws_json1_0Rule
 */
const se_Rule = (input: Rule, context: __SerdeContext): any => {
  return take(input, {
    Actions: _json,
    Conditions: (_) => se_RuleConditions(_, context),
    Name: [],
    Unless: (_) => se_RuleConditions(_, context),
  });
};

// se_RuleAction omitted.

// se_RuleActions omitted.

// se_RuleAddressListArnList omitted.

// se_RuleBooleanExpression omitted.

// se_RuleBooleanToEvaluate omitted.

/**
 * serializeAws_json1_0RuleCondition
 */
const se_RuleCondition = (input: RuleCondition, context: __SerdeContext): any => {
  return RuleCondition.visit(input, {
    BooleanExpression: (value) => ({ BooleanExpression: _json(value) }),
    DmarcExpression: (value) => ({ DmarcExpression: _json(value) }),
    IpExpression: (value) => ({ IpExpression: _json(value) }),
    NumberExpression: (value) => ({ NumberExpression: se_RuleNumberExpression(value, context) }),
    StringExpression: (value) => ({ StringExpression: _json(value) }),
    VerdictExpression: (value) => ({ VerdictExpression: _json(value) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_json1_0RuleConditions
 */
const se_RuleConditions = (input: RuleCondition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RuleCondition(entry, context);
    });
};

// se_RuleDmarcExpression omitted.

// se_RuleDmarcValueList omitted.

// se_RuleIpExpression omitted.

// se_RuleIpToEvaluate omitted.

// se_RuleIpValueList omitted.

// se_RuleIsInAddressList omitted.

/**
 * serializeAws_json1_0RuleNumberExpression
 */
const se_RuleNumberExpression = (input: RuleNumberExpression, context: __SerdeContext): any => {
  return take(input, {
    Evaluate: _json,
    Operator: [],
    Value: __serializeFloat,
  });
};

// se_RuleNumberToEvaluate omitted.

/**
 * serializeAws_json1_0Rules
 */
const se_Rules = (input: Rule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Rule(entry, context);
    });
};

// se_RuleStringExpression omitted.

// se_RuleStringList omitted.

// se_RuleStringToEvaluate omitted.

// se_RuleVerdictExpression omitted.

// se_RuleVerdictToEvaluate omitted.

// se_RuleVerdictValueList omitted.

// se_S3Action omitted.

// se_S3ExportDestinationConfiguration omitted.

// se_SendAction omitted.

// se_StartAddressListImportJobRequest omitted.

/**
 * serializeAws_json1_0StartArchiveExportRequest
 */
const se_StartArchiveExportRequest = (input: StartArchiveExportRequest, context: __SerdeContext): any => {
  return take(input, {
    ArchiveId: [],
    ExportDestinationConfiguration: _json,
    Filters: _json,
    FromTimestamp: (_) => _.getTime() / 1_000,
    IncludeMetadata: [],
    MaxResults: [],
    ToTimestamp: (_) => _.getTime() / 1_000,
  });
};

/**
 * serializeAws_json1_0StartArchiveSearchRequest
 */
const se_StartArchiveSearchRequest = (input: StartArchiveSearchRequest, context: __SerdeContext): any => {
  return take(input, {
    ArchiveId: [],
    Filters: _json,
    FromTimestamp: (_) => _.getTime() / 1_000,
    MaxResults: [],
    ToTimestamp: (_) => _.getTime() / 1_000,
  });
};

// se_StopAddressListImportJobRequest omitted.

// se_StopArchiveExportRequest omitted.

// se_StopArchiveSearchRequest omitted.

// se_StringList omitted.

// se_StringValueList omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_UntagResourceRequest omitted.

// se_UpdateArchiveRequest omitted.

// se_UpdateIngressPointRequest omitted.

// se_UpdateRelayRequest omitted.

/**
 * serializeAws_json1_0UpdateRuleSetRequest
 */
const se_UpdateRuleSetRequest = (input: UpdateRuleSetRequest, context: __SerdeContext): any => {
  return take(input, {
    RuleSetId: [],
    RuleSetName: [],
    Rules: (_) => se_Rules(_, context),
  });
};

// se_UpdateTrafficPolicyRequest omitted.

// de_AccessDeniedException omitted.

// de_AddHeaderAction omitted.

/**
 * deserializeAws_json1_0AddonInstance
 */
const de_AddonInstance = (output: any, context: __SerdeContext): AddonInstance => {
  return take(output, {
    AddonInstanceArn: __expectString,
    AddonInstanceId: __expectString,
    AddonName: __expectString,
    AddonSubscriptionId: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0AddonInstances
 */
const de_AddonInstances = (output: any, context: __SerdeContext): AddonInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AddonInstance(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0AddonSubscription
 */
const de_AddonSubscription = (output: any, context: __SerdeContext): AddonSubscription => {
  return take(output, {
    AddonName: __expectString,
    AddonSubscriptionArn: __expectString,
    AddonSubscriptionId: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0AddonSubscriptions
 */
const de_AddonSubscriptions = (output: any, context: __SerdeContext): AddonSubscription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AddonSubscription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0AddressList
 */
const de_AddressList = (output: any, context: __SerdeContext): AddressList => {
  return take(output, {
    AddressListArn: __expectString,
    AddressListId: __expectString,
    AddressListName: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0AddressLists
 */
const de_AddressLists = (output: any, context: __SerdeContext): AddressList[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AddressList(entry, context);
    });
  return retVal;
};

// de_Analysis omitted.

/**
 * deserializeAws_json1_0Archive
 */
const de_Archive = (output: any, context: __SerdeContext): Archive => {
  return take(output, {
    ArchiveId: __expectString,
    ArchiveName: __expectString,
    ArchiveState: __expectString,
    LastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ArchiveAction omitted.

// de_ArchiveBooleanExpression omitted.

// de_ArchiveBooleanToEvaluate omitted.

// de_ArchiveFilterCondition omitted.

// de_ArchiveFilterConditions omitted.

// de_ArchiveFilters omitted.

// de_ArchiveRetention omitted.

/**
 * deserializeAws_json1_0ArchivesList
 */
const de_ArchivesList = (output: any, context: __SerdeContext): Archive[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Archive(entry, context);
    });
  return retVal;
};

// de_ArchiveStringExpression omitted.

// de_ArchiveStringToEvaluate omitted.

// de_ConflictException omitted.

// de_CreateAddonInstanceResponse omitted.

// de_CreateAddonSubscriptionResponse omitted.

// de_CreateAddressListImportJobResponse omitted.

// de_CreateAddressListResponse omitted.

// de_CreateArchiveResponse omitted.

// de_CreateIngressPointResponse omitted.

// de_CreateRelayResponse omitted.

// de_CreateRuleSetResponse omitted.

// de_CreateTrafficPolicyResponse omitted.

// de_DeleteAddonInstanceResponse omitted.

// de_DeleteAddonSubscriptionResponse omitted.

// de_DeleteAddressListResponse omitted.

// de_DeleteArchiveResponse omitted.

// de_DeleteIngressPointResponse omitted.

// de_DeleteRelayResponse omitted.

// de_DeleteRuleSetResponse omitted.

// de_DeleteTrafficPolicyResponse omitted.

// de_DeliverToMailboxAction omitted.

// de_DeliverToQBusinessAction omitted.

// de_DeregisterMemberFromAddressListResponse omitted.

// de_DropAction omitted.

// de_EmailReceivedHeadersList omitted.

// de_Envelope omitted.

// de_ExportDestinationConfiguration omitted.

/**
 * deserializeAws_json1_0ExportStatus
 */
const de_ExportStatus = (output: any, context: __SerdeContext): ExportStatus => {
  return take(output, {
    CompletionTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ErrorMessage: __expectString,
    State: __expectString,
    SubmissionTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0ExportSummary
 */
const de_ExportSummary = (output: any, context: __SerdeContext): ExportSummary => {
  return take(output, {
    ExportId: __expectString,
    Status: (_: any) => de_ExportStatus(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ExportSummaryList
 */
const de_ExportSummaryList = (output: any, context: __SerdeContext): ExportSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ExportSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0GetAddonInstanceResponse
 */
const de_GetAddonInstanceResponse = (output: any, context: __SerdeContext): GetAddonInstanceResponse => {
  return take(output, {
    AddonInstanceArn: __expectString,
    AddonName: __expectString,
    AddonSubscriptionId: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0GetAddonSubscriptionResponse
 */
const de_GetAddonSubscriptionResponse = (output: any, context: __SerdeContext): GetAddonSubscriptionResponse => {
  return take(output, {
    AddonName: __expectString,
    AddonSubscriptionArn: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0GetAddressListImportJobResponse
 */
const de_GetAddressListImportJobResponse = (output: any, context: __SerdeContext): GetAddressListImportJobResponse => {
  return take(output, {
    AddressListId: __expectString,
    CompletedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Error: __expectString,
    FailedItemsCount: __expectInt32,
    ImportDataFormat: _json,
    ImportedItemsCount: __expectInt32,
    JobId: __expectString,
    Name: __expectString,
    PreSignedUrl: __expectString,
    StartTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0GetAddressListResponse
 */
const de_GetAddressListResponse = (output: any, context: __SerdeContext): GetAddressListResponse => {
  return take(output, {
    AddressListArn: __expectString,
    AddressListId: __expectString,
    AddressListName: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0GetArchiveExportResponse
 */
const de_GetArchiveExportResponse = (output: any, context: __SerdeContext): GetArchiveExportResponse => {
  return take(output, {
    ArchiveId: __expectString,
    ExportDestinationConfiguration: (_: any) => _json(__expectUnion(_)),
    Filters: _json,
    FromTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MaxResults: __expectInt32,
    Status: (_: any) => de_ExportStatus(_, context),
    ToTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_GetArchiveMessageContentResponse omitted.

/**
 * deserializeAws_json1_0GetArchiveMessageResponse
 */
const de_GetArchiveMessageResponse = (output: any, context: __SerdeContext): GetArchiveMessageResponse => {
  return take(output, {
    Envelope: _json,
    MessageDownloadLink: __expectString,
    Metadata: (_: any) => de_Metadata(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0GetArchiveResponse
 */
const de_GetArchiveResponse = (output: any, context: __SerdeContext): GetArchiveResponse => {
  return take(output, {
    ArchiveArn: __expectString,
    ArchiveId: __expectString,
    ArchiveName: __expectString,
    ArchiveState: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    KmsKeyArn: __expectString,
    LastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Retention: (_: any) => _json(__expectUnion(_)),
  }) as any;
};

/**
 * deserializeAws_json1_0GetArchiveSearchResponse
 */
const de_GetArchiveSearchResponse = (output: any, context: __SerdeContext): GetArchiveSearchResponse => {
  return take(output, {
    ArchiveId: __expectString,
    Filters: _json,
    FromTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MaxResults: __expectInt32,
    Status: (_: any) => de_SearchStatus(_, context),
    ToTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0GetArchiveSearchResultsResponse
 */
const de_GetArchiveSearchResultsResponse = (output: any, context: __SerdeContext): GetArchiveSearchResultsResponse => {
  return take(output, {
    Rows: (_: any) => de_RowsList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0GetIngressPointResponse
 */
const de_GetIngressPointResponse = (output: any, context: __SerdeContext): GetIngressPointResponse => {
  return take(output, {
    ARecord: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IngressPointArn: __expectString,
    IngressPointAuthConfiguration: (_: any) => de_IngressPointAuthConfiguration(_, context),
    IngressPointId: __expectString,
    IngressPointName: __expectString,
    LastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RuleSetId: __expectString,
    Status: __expectString,
    TrafficPolicyId: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0GetMemberOfAddressListResponse
 */
const de_GetMemberOfAddressListResponse = (output: any, context: __SerdeContext): GetMemberOfAddressListResponse => {
  return take(output, {
    Address: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0GetRelayResponse
 */
const de_GetRelayResponse = (output: any, context: __SerdeContext): GetRelayResponse => {
  return take(output, {
    Authentication: (_: any) => _json(__expectUnion(_)),
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RelayArn: __expectString,
    RelayId: __expectString,
    RelayName: __expectString,
    ServerName: __expectString,
    ServerPort: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_0GetRuleSetResponse
 */
const de_GetRuleSetResponse = (output: any, context: __SerdeContext): GetRuleSetResponse => {
  return take(output, {
    CreatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModificationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RuleSetArn: __expectString,
    RuleSetId: __expectString,
    RuleSetName: __expectString,
    Rules: (_: any) => de_Rules(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0GetTrafficPolicyResponse
 */
const de_GetTrafficPolicyResponse = (output: any, context: __SerdeContext): GetTrafficPolicyResponse => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultAction: __expectString,
    LastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MaxMessageSizeBytes: __expectInt32,
    PolicyStatements: _json,
    TrafficPolicyArn: __expectString,
    TrafficPolicyId: __expectString,
    TrafficPolicyName: __expectString,
  }) as any;
};

// de_ImportDataFormat omitted.

/**
 * deserializeAws_json1_0ImportJob
 */
const de_ImportJob = (output: any, context: __SerdeContext): ImportJob => {
  return take(output, {
    AddressListId: __expectString,
    CompletedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Error: __expectString,
    FailedItemsCount: __expectInt32,
    ImportDataFormat: _json,
    ImportedItemsCount: __expectInt32,
    JobId: __expectString,
    Name: __expectString,
    PreSignedUrl: __expectString,
    StartTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ImportJobs
 */
const de_ImportJobs = (output: any, context: __SerdeContext): ImportJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImportJob(entry, context);
    });
  return retVal;
};

// de_IngressAddressListArnList omitted.

// de_IngressAnalysis omitted.

// de_IngressBooleanExpression omitted.

// de_IngressBooleanToEvaluate omitted.

// de_IngressIpToEvaluate omitted.

// de_IngressIpv4Expression omitted.

// de_IngressIsInAddressList omitted.

// de_IngressPoint omitted.

/**
 * deserializeAws_json1_0IngressPointAuthConfiguration
 */
const de_IngressPointAuthConfiguration = (output: any, context: __SerdeContext): IngressPointAuthConfiguration => {
  return take(output, {
    IngressPointPasswordConfiguration: (_: any) => de_IngressPointPasswordConfiguration(_, context),
    SecretArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0IngressPointPasswordConfiguration
 */
const de_IngressPointPasswordConfiguration = (
  output: any,
  context: __SerdeContext
): IngressPointPasswordConfiguration => {
  return take(output, {
    PreviousSmtpPasswordExpiryTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PreviousSmtpPasswordVersion: __expectString,
    SmtpPasswordVersion: __expectString,
  }) as any;
};

// de_IngressPointsList omitted.

// de_IngressStringExpression omitted.

// de_IngressStringToEvaluate omitted.

// de_IngressTlsProtocolExpression omitted.

// de_IngressTlsProtocolToEvaluate omitted.

// de_Ipv4Cidrs omitted.

/**
 * deserializeAws_json1_0ListAddonInstancesResponse
 */
const de_ListAddonInstancesResponse = (output: any, context: __SerdeContext): ListAddonInstancesResponse => {
  return take(output, {
    AddonInstances: (_: any) => de_AddonInstances(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListAddonSubscriptionsResponse
 */
const de_ListAddonSubscriptionsResponse = (output: any, context: __SerdeContext): ListAddonSubscriptionsResponse => {
  return take(output, {
    AddonSubscriptions: (_: any) => de_AddonSubscriptions(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListAddressListImportJobsResponse
 */
const de_ListAddressListImportJobsResponse = (
  output: any,
  context: __SerdeContext
): ListAddressListImportJobsResponse => {
  return take(output, {
    ImportJobs: (_: any) => de_ImportJobs(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListAddressListsResponse
 */
const de_ListAddressListsResponse = (output: any, context: __SerdeContext): ListAddressListsResponse => {
  return take(output, {
    AddressLists: (_: any) => de_AddressLists(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListArchiveExportsResponse
 */
const de_ListArchiveExportsResponse = (output: any, context: __SerdeContext): ListArchiveExportsResponse => {
  return take(output, {
    Exports: (_: any) => de_ExportSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListArchiveSearchesResponse
 */
const de_ListArchiveSearchesResponse = (output: any, context: __SerdeContext): ListArchiveSearchesResponse => {
  return take(output, {
    NextToken: __expectString,
    Searches: (_: any) => de_SearchSummaryList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ListArchivesResponse
 */
const de_ListArchivesResponse = (output: any, context: __SerdeContext): ListArchivesResponse => {
  return take(output, {
    Archives: (_: any) => de_ArchivesList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListIngressPointsResponse omitted.

/**
 * deserializeAws_json1_0ListMembersOfAddressListResponse
 */
const de_ListMembersOfAddressListResponse = (
  output: any,
  context: __SerdeContext
): ListMembersOfAddressListResponse => {
  return take(output, {
    Addresses: (_: any) => de_SavedAddresses(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListRelaysResponse
 */
const de_ListRelaysResponse = (output: any, context: __SerdeContext): ListRelaysResponse => {
  return take(output, {
    NextToken: __expectString,
    Relays: (_: any) => de_Relays(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ListRuleSetsResponse
 */
const de_ListRuleSetsResponse = (output: any, context: __SerdeContext): ListRuleSetsResponse => {
  return take(output, {
    NextToken: __expectString,
    RuleSets: (_: any) => de_RuleSets(_, context),
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

// de_ListTrafficPoliciesResponse omitted.

// de_MessageBody omitted.

/**
 * deserializeAws_json1_0Metadata
 */
const de_Metadata = (output: any, context: __SerdeContext): Metadata => {
  return take(output, {
    IngressPointId: __expectString,
    RuleSetId: __expectString,
    SenderHostname: __expectString,
    SenderIpAddress: __expectString,
    Timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TlsCipherSuite: __expectString,
    TlsProtocol: __expectString,
    TrafficPolicyId: __expectString,
  }) as any;
};

// de_NoAuthentication omitted.

// de_PolicyCondition omitted.

// de_PolicyConditions omitted.

// de_PolicyStatement omitted.

// de_PolicyStatementList omitted.

// de_Recipients omitted.

// de_RegisterMemberToAddressListResponse omitted.

/**
 * deserializeAws_json1_0Relay
 */
const de_Relay = (output: any, context: __SerdeContext): Relay => {
  return take(output, {
    LastModifiedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RelayId: __expectString,
    RelayName: __expectString,
  }) as any;
};

// de_RelayAction omitted.

// de_RelayAuthentication omitted.

/**
 * deserializeAws_json1_0Relays
 */
const de_Relays = (output: any, context: __SerdeContext): Relay[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Relay(entry, context);
    });
  return retVal;
};

// de_ReplaceRecipientAction omitted.

// de_ResourceNotFoundException omitted.

/**
 * deserializeAws_json1_0Row
 */
const de_Row = (output: any, context: __SerdeContext): Row => {
  return take(output, {
    ArchivedMessageId: __expectString,
    Cc: __expectString,
    Date: __expectString,
    Envelope: _json,
    From: __expectString,
    HasAttachments: __expectBoolean,
    InReplyTo: __expectString,
    IngressPointId: __expectString,
    MessageId: __expectString,
    ReceivedHeaders: _json,
    ReceivedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SenderHostname: __expectString,
    SenderIpAddress: __expectString,
    Subject: __expectString,
    To: __expectString,
    XMailer: __expectString,
    XOriginalMailer: __expectString,
    XPriority: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0RowsList
 */
const de_RowsList = (output: any, context: __SerdeContext): Row[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Row(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0Rule
 */
const de_Rule = (output: any, context: __SerdeContext): Rule => {
  return take(output, {
    Actions: _json,
    Conditions: (_: any) => de_RuleConditions(_, context),
    Name: __expectString,
    Unless: (_: any) => de_RuleConditions(_, context),
  }) as any;
};

// de_RuleAction omitted.

// de_RuleActions omitted.

// de_RuleAddressListArnList omitted.

// de_RuleBooleanExpression omitted.

// de_RuleBooleanToEvaluate omitted.

/**
 * deserializeAws_json1_0RuleCondition
 */
const de_RuleCondition = (output: any, context: __SerdeContext): RuleCondition => {
  if (output.BooleanExpression != null) {
    return {
      BooleanExpression: _json(output.BooleanExpression),
    };
  }
  if (output.DmarcExpression != null) {
    return {
      DmarcExpression: _json(output.DmarcExpression),
    };
  }
  if (output.IpExpression != null) {
    return {
      IpExpression: _json(output.IpExpression),
    };
  }
  if (output.NumberExpression != null) {
    return {
      NumberExpression: de_RuleNumberExpression(output.NumberExpression, context),
    };
  }
  if (output.StringExpression != null) {
    return {
      StringExpression: _json(output.StringExpression),
    };
  }
  if (output.VerdictExpression != null) {
    return {
      VerdictExpression: _json(output.VerdictExpression),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_0RuleConditions
 */
const de_RuleConditions = (output: any, context: __SerdeContext): RuleCondition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RuleCondition(__expectUnion(entry), context);
    });
  return retVal;
};

// de_RuleDmarcExpression omitted.

// de_RuleDmarcValueList omitted.

// de_RuleIpExpression omitted.

// de_RuleIpToEvaluate omitted.

// de_RuleIpValueList omitted.

// de_RuleIsInAddressList omitted.

/**
 * deserializeAws_json1_0RuleNumberExpression
 */
const de_RuleNumberExpression = (output: any, context: __SerdeContext): RuleNumberExpression => {
  return take(output, {
    Evaluate: (_: any) => _json(__expectUnion(_)),
    Operator: __expectString,
    Value: __limitedParseDouble,
  }) as any;
};

// de_RuleNumberToEvaluate omitted.

/**
 * deserializeAws_json1_0Rules
 */
const de_Rules = (output: any, context: __SerdeContext): Rule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Rule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0RuleSet
 */
const de_RuleSet = (output: any, context: __SerdeContext): RuleSet => {
  return take(output, {
    LastModificationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RuleSetId: __expectString,
    RuleSetName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0RuleSets
 */
const de_RuleSets = (output: any, context: __SerdeContext): RuleSet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RuleSet(entry, context);
    });
  return retVal;
};

// de_RuleStringExpression omitted.

// de_RuleStringList omitted.

// de_RuleStringToEvaluate omitted.

// de_RuleVerdictExpression omitted.

// de_RuleVerdictToEvaluate omitted.

// de_RuleVerdictValueList omitted.

// de_S3Action omitted.

// de_S3ExportDestinationConfiguration omitted.

/**
 * deserializeAws_json1_0SavedAddress
 */
const de_SavedAddress = (output: any, context: __SerdeContext): SavedAddress => {
  return take(output, {
    Address: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0SavedAddresses
 */
const de_SavedAddresses = (output: any, context: __SerdeContext): SavedAddress[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SavedAddress(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0SearchStatus
 */
const de_SearchStatus = (output: any, context: __SerdeContext): SearchStatus => {
  return take(output, {
    CompletionTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ErrorMessage: __expectString,
    State: __expectString,
    SubmissionTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0SearchSummary
 */
const de_SearchSummary = (output: any, context: __SerdeContext): SearchSummary => {
  return take(output, {
    SearchId: __expectString,
    Status: (_: any) => de_SearchStatus(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0SearchSummaryList
 */
const de_SearchSummaryList = (output: any, context: __SerdeContext): SearchSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SearchSummary(entry, context);
    });
  return retVal;
};

// de_SendAction omitted.

// de_ServiceQuotaExceededException omitted.

// de_StartAddressListImportJobResponse omitted.

// de_StartArchiveExportResponse omitted.

// de_StartArchiveSearchResponse omitted.

// de_StopAddressListImportJobResponse omitted.

// de_StopArchiveExportResponse omitted.

// de_StopArchiveSearchResponse omitted.

// de_StringList omitted.

// de_StringValueList omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_ThrottlingException omitted.

// de_TrafficPolicy omitted.

// de_TrafficPolicyList omitted.

// de_UntagResourceResponse omitted.

// de_UpdateArchiveResponse omitted.

// de_UpdateIngressPointResponse omitted.

// de_UpdateRelayResponse omitted.

// de_UpdateRuleSetResponse omitted.

// de_UpdateTrafficPolicyResponse omitted.

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
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `MailManagerSvc.${operation}`,
  };
}
