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
  serializeDateTime as __serializeDateTime,
  strictParseFloat as __strictParseFloat,
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
  CloneReceiptRuleSetCommandInput,
  CloneReceiptRuleSetCommandOutput,
} from "../commands/CloneReceiptRuleSetCommand";
import {
  CreateConfigurationSetCommandInput,
  CreateConfigurationSetCommandOutput,
} from "../commands/CreateConfigurationSetCommand";
import {
  CreateConfigurationSetEventDestinationCommandInput,
  CreateConfigurationSetEventDestinationCommandOutput,
} from "../commands/CreateConfigurationSetEventDestinationCommand";
import {
  CreateConfigurationSetTrackingOptionsCommandInput,
  CreateConfigurationSetTrackingOptionsCommandOutput,
} from "../commands/CreateConfigurationSetTrackingOptionsCommand";
import {
  CreateCustomVerificationEmailTemplateCommandInput,
  CreateCustomVerificationEmailTemplateCommandOutput,
} from "../commands/CreateCustomVerificationEmailTemplateCommand";
import {
  CreateReceiptFilterCommandInput,
  CreateReceiptFilterCommandOutput,
} from "../commands/CreateReceiptFilterCommand";
import { CreateReceiptRuleCommandInput, CreateReceiptRuleCommandOutput } from "../commands/CreateReceiptRuleCommand";
import {
  CreateReceiptRuleSetCommandInput,
  CreateReceiptRuleSetCommandOutput,
} from "../commands/CreateReceiptRuleSetCommand";
import { CreateTemplateCommandInput, CreateTemplateCommandOutput } from "../commands/CreateTemplateCommand";
import {
  DeleteConfigurationSetCommandInput,
  DeleteConfigurationSetCommandOutput,
} from "../commands/DeleteConfigurationSetCommand";
import {
  DeleteConfigurationSetEventDestinationCommandInput,
  DeleteConfigurationSetEventDestinationCommandOutput,
} from "../commands/DeleteConfigurationSetEventDestinationCommand";
import {
  DeleteConfigurationSetTrackingOptionsCommandInput,
  DeleteConfigurationSetTrackingOptionsCommandOutput,
} from "../commands/DeleteConfigurationSetTrackingOptionsCommand";
import {
  DeleteCustomVerificationEmailTemplateCommandInput,
  DeleteCustomVerificationEmailTemplateCommandOutput,
} from "../commands/DeleteCustomVerificationEmailTemplateCommand";
import { DeleteIdentityCommandInput, DeleteIdentityCommandOutput } from "../commands/DeleteIdentityCommand";
import {
  DeleteIdentityPolicyCommandInput,
  DeleteIdentityPolicyCommandOutput,
} from "../commands/DeleteIdentityPolicyCommand";
import {
  DeleteReceiptFilterCommandInput,
  DeleteReceiptFilterCommandOutput,
} from "../commands/DeleteReceiptFilterCommand";
import { DeleteReceiptRuleCommandInput, DeleteReceiptRuleCommandOutput } from "../commands/DeleteReceiptRuleCommand";
import {
  DeleteReceiptRuleSetCommandInput,
  DeleteReceiptRuleSetCommandOutput,
} from "../commands/DeleteReceiptRuleSetCommand";
import { DeleteTemplateCommandInput, DeleteTemplateCommandOutput } from "../commands/DeleteTemplateCommand";
import {
  DeleteVerifiedEmailAddressCommandInput,
  DeleteVerifiedEmailAddressCommandOutput,
} from "../commands/DeleteVerifiedEmailAddressCommand";
import {
  DescribeActiveReceiptRuleSetCommandInput,
  DescribeActiveReceiptRuleSetCommandOutput,
} from "../commands/DescribeActiveReceiptRuleSetCommand";
import {
  DescribeConfigurationSetCommandInput,
  DescribeConfigurationSetCommandOutput,
} from "../commands/DescribeConfigurationSetCommand";
import {
  DescribeReceiptRuleCommandInput,
  DescribeReceiptRuleCommandOutput,
} from "../commands/DescribeReceiptRuleCommand";
import {
  DescribeReceiptRuleSetCommandInput,
  DescribeReceiptRuleSetCommandOutput,
} from "../commands/DescribeReceiptRuleSetCommand";
import {
  GetAccountSendingEnabledCommandInput,
  GetAccountSendingEnabledCommandOutput,
} from "../commands/GetAccountSendingEnabledCommand";
import {
  GetCustomVerificationEmailTemplateCommandInput,
  GetCustomVerificationEmailTemplateCommandOutput,
} from "../commands/GetCustomVerificationEmailTemplateCommand";
import {
  GetIdentityDkimAttributesCommandInput,
  GetIdentityDkimAttributesCommandOutput,
} from "../commands/GetIdentityDkimAttributesCommand";
import {
  GetIdentityMailFromDomainAttributesCommandInput,
  GetIdentityMailFromDomainAttributesCommandOutput,
} from "../commands/GetIdentityMailFromDomainAttributesCommand";
import {
  GetIdentityNotificationAttributesCommandInput,
  GetIdentityNotificationAttributesCommandOutput,
} from "../commands/GetIdentityNotificationAttributesCommand";
import {
  GetIdentityPoliciesCommandInput,
  GetIdentityPoliciesCommandOutput,
} from "../commands/GetIdentityPoliciesCommand";
import {
  GetIdentityVerificationAttributesCommandInput,
  GetIdentityVerificationAttributesCommandOutput,
} from "../commands/GetIdentityVerificationAttributesCommand";
import { GetSendQuotaCommandInput, GetSendQuotaCommandOutput } from "../commands/GetSendQuotaCommand";
import { GetSendStatisticsCommandInput, GetSendStatisticsCommandOutput } from "../commands/GetSendStatisticsCommand";
import { GetTemplateCommandInput, GetTemplateCommandOutput } from "../commands/GetTemplateCommand";
import {
  ListConfigurationSetsCommandInput,
  ListConfigurationSetsCommandOutput,
} from "../commands/ListConfigurationSetsCommand";
import {
  ListCustomVerificationEmailTemplatesCommandInput,
  ListCustomVerificationEmailTemplatesCommandOutput,
} from "../commands/ListCustomVerificationEmailTemplatesCommand";
import { ListIdentitiesCommandInput, ListIdentitiesCommandOutput } from "../commands/ListIdentitiesCommand";
import {
  ListIdentityPoliciesCommandInput,
  ListIdentityPoliciesCommandOutput,
} from "../commands/ListIdentityPoliciesCommand";
import { ListReceiptFiltersCommandInput, ListReceiptFiltersCommandOutput } from "../commands/ListReceiptFiltersCommand";
import {
  ListReceiptRuleSetsCommandInput,
  ListReceiptRuleSetsCommandOutput,
} from "../commands/ListReceiptRuleSetsCommand";
import { ListTemplatesCommandInput, ListTemplatesCommandOutput } from "../commands/ListTemplatesCommand";
import {
  ListVerifiedEmailAddressesCommandInput,
  ListVerifiedEmailAddressesCommandOutput,
} from "../commands/ListVerifiedEmailAddressesCommand";
import {
  PutConfigurationSetDeliveryOptionsCommandInput,
  PutConfigurationSetDeliveryOptionsCommandOutput,
} from "../commands/PutConfigurationSetDeliveryOptionsCommand";
import { PutIdentityPolicyCommandInput, PutIdentityPolicyCommandOutput } from "../commands/PutIdentityPolicyCommand";
import {
  ReorderReceiptRuleSetCommandInput,
  ReorderReceiptRuleSetCommandOutput,
} from "../commands/ReorderReceiptRuleSetCommand";
import { SendBounceCommandInput, SendBounceCommandOutput } from "../commands/SendBounceCommand";
import {
  SendBulkTemplatedEmailCommandInput,
  SendBulkTemplatedEmailCommandOutput,
} from "../commands/SendBulkTemplatedEmailCommand";
import {
  SendCustomVerificationEmailCommandInput,
  SendCustomVerificationEmailCommandOutput,
} from "../commands/SendCustomVerificationEmailCommand";
import { SendEmailCommandInput, SendEmailCommandOutput } from "../commands/SendEmailCommand";
import { SendRawEmailCommandInput, SendRawEmailCommandOutput } from "../commands/SendRawEmailCommand";
import { SendTemplatedEmailCommandInput, SendTemplatedEmailCommandOutput } from "../commands/SendTemplatedEmailCommand";
import {
  SetActiveReceiptRuleSetCommandInput,
  SetActiveReceiptRuleSetCommandOutput,
} from "../commands/SetActiveReceiptRuleSetCommand";
import {
  SetIdentityDkimEnabledCommandInput,
  SetIdentityDkimEnabledCommandOutput,
} from "../commands/SetIdentityDkimEnabledCommand";
import {
  SetIdentityFeedbackForwardingEnabledCommandInput,
  SetIdentityFeedbackForwardingEnabledCommandOutput,
} from "../commands/SetIdentityFeedbackForwardingEnabledCommand";
import {
  SetIdentityHeadersInNotificationsEnabledCommandInput,
  SetIdentityHeadersInNotificationsEnabledCommandOutput,
} from "../commands/SetIdentityHeadersInNotificationsEnabledCommand";
import {
  SetIdentityMailFromDomainCommandInput,
  SetIdentityMailFromDomainCommandOutput,
} from "../commands/SetIdentityMailFromDomainCommand";
import {
  SetIdentityNotificationTopicCommandInput,
  SetIdentityNotificationTopicCommandOutput,
} from "../commands/SetIdentityNotificationTopicCommand";
import {
  SetReceiptRulePositionCommandInput,
  SetReceiptRulePositionCommandOutput,
} from "../commands/SetReceiptRulePositionCommand";
import { TestRenderTemplateCommandInput, TestRenderTemplateCommandOutput } from "../commands/TestRenderTemplateCommand";
import {
  UpdateAccountSendingEnabledCommandInput,
  UpdateAccountSendingEnabledCommandOutput,
} from "../commands/UpdateAccountSendingEnabledCommand";
import {
  UpdateConfigurationSetEventDestinationCommandInput,
  UpdateConfigurationSetEventDestinationCommandOutput,
} from "../commands/UpdateConfigurationSetEventDestinationCommand";
import {
  UpdateConfigurationSetReputationMetricsEnabledCommandInput,
  UpdateConfigurationSetReputationMetricsEnabledCommandOutput,
} from "../commands/UpdateConfigurationSetReputationMetricsEnabledCommand";
import {
  UpdateConfigurationSetSendingEnabledCommandInput,
  UpdateConfigurationSetSendingEnabledCommandOutput,
} from "../commands/UpdateConfigurationSetSendingEnabledCommand";
import {
  UpdateConfigurationSetTrackingOptionsCommandInput,
  UpdateConfigurationSetTrackingOptionsCommandOutput,
} from "../commands/UpdateConfigurationSetTrackingOptionsCommand";
import {
  UpdateCustomVerificationEmailTemplateCommandInput,
  UpdateCustomVerificationEmailTemplateCommandOutput,
} from "../commands/UpdateCustomVerificationEmailTemplateCommand";
import { UpdateReceiptRuleCommandInput, UpdateReceiptRuleCommandOutput } from "../commands/UpdateReceiptRuleCommand";
import { UpdateTemplateCommandInput, UpdateTemplateCommandOutput } from "../commands/UpdateTemplateCommand";
import { VerifyDomainDkimCommandInput, VerifyDomainDkimCommandOutput } from "../commands/VerifyDomainDkimCommand";
import {
  VerifyDomainIdentityCommandInput,
  VerifyDomainIdentityCommandOutput,
} from "../commands/VerifyDomainIdentityCommand";
import { VerifyEmailAddressCommandInput, VerifyEmailAddressCommandOutput } from "../commands/VerifyEmailAddressCommand";
import {
  VerifyEmailIdentityCommandInput,
  VerifyEmailIdentityCommandOutput,
} from "../commands/VerifyEmailIdentityCommand";
import {
  AccountSendingPausedException,
  AddHeaderAction,
  AlreadyExistsException,
  Body,
  BounceAction,
  BouncedRecipientInfo,
  BulkEmailDestination,
  BulkEmailDestinationStatus,
  CannotDeleteException,
  CloneReceiptRuleSetRequest,
  CloneReceiptRuleSetResponse,
  CloudWatchDestination,
  CloudWatchDimensionConfiguration,
  ConfigurationSet,
  ConfigurationSetAlreadyExistsException,
  ConfigurationSetAttribute,
  ConfigurationSetDoesNotExistException,
  ConfigurationSetSendingPausedException,
  ConnectAction,
  Content,
  CreateConfigurationSetEventDestinationRequest,
  CreateConfigurationSetEventDestinationResponse,
  CreateConfigurationSetRequest,
  CreateConfigurationSetResponse,
  CreateConfigurationSetTrackingOptionsRequest,
  CreateConfigurationSetTrackingOptionsResponse,
  CreateCustomVerificationEmailTemplateRequest,
  CreateReceiptFilterRequest,
  CreateReceiptFilterResponse,
  CreateReceiptRuleRequest,
  CreateReceiptRuleResponse,
  CreateReceiptRuleSetRequest,
  CreateReceiptRuleSetResponse,
  CreateTemplateRequest,
  CreateTemplateResponse,
  CustomVerificationEmailInvalidContentException,
  CustomVerificationEmailTemplate,
  CustomVerificationEmailTemplateAlreadyExistsException,
  CustomVerificationEmailTemplateDoesNotExistException,
  DeleteConfigurationSetEventDestinationRequest,
  DeleteConfigurationSetEventDestinationResponse,
  DeleteConfigurationSetRequest,
  DeleteConfigurationSetResponse,
  DeleteConfigurationSetTrackingOptionsRequest,
  DeleteConfigurationSetTrackingOptionsResponse,
  DeleteCustomVerificationEmailTemplateRequest,
  DeleteIdentityPolicyRequest,
  DeleteIdentityPolicyResponse,
  DeleteIdentityRequest,
  DeleteIdentityResponse,
  DeleteReceiptFilterRequest,
  DeleteReceiptFilterResponse,
  DeleteReceiptRuleRequest,
  DeleteReceiptRuleResponse,
  DeleteReceiptRuleSetRequest,
  DeleteReceiptRuleSetResponse,
  DeleteTemplateRequest,
  DeleteTemplateResponse,
  DeleteVerifiedEmailAddressRequest,
  DeliveryOptions,
  DescribeActiveReceiptRuleSetRequest,
  DescribeActiveReceiptRuleSetResponse,
  DescribeConfigurationSetRequest,
  DescribeConfigurationSetResponse,
  DescribeReceiptRuleRequest,
  DescribeReceiptRuleResponse,
  DescribeReceiptRuleSetRequest,
  DescribeReceiptRuleSetResponse,
  Destination,
  EventDestination,
  EventDestinationAlreadyExistsException,
  EventDestinationDoesNotExistException,
  EventType,
  ExtensionField,
  FromEmailAddressNotVerifiedException,
  GetAccountSendingEnabledResponse,
  GetCustomVerificationEmailTemplateRequest,
  GetCustomVerificationEmailTemplateResponse,
  GetIdentityDkimAttributesRequest,
  GetIdentityDkimAttributesResponse,
  GetIdentityMailFromDomainAttributesRequest,
  GetIdentityMailFromDomainAttributesResponse,
  GetIdentityNotificationAttributesRequest,
  GetIdentityNotificationAttributesResponse,
  GetIdentityPoliciesRequest,
  GetIdentityPoliciesResponse,
  GetIdentityVerificationAttributesRequest,
  GetIdentityVerificationAttributesResponse,
  GetSendQuotaResponse,
  GetSendStatisticsResponse,
  GetTemplateRequest,
  GetTemplateResponse,
  IdentityDkimAttributes,
  IdentityMailFromDomainAttributes,
  IdentityNotificationAttributes,
  IdentityVerificationAttributes,
  InvalidCloudWatchDestinationException,
  InvalidConfigurationSetException,
  InvalidDeliveryOptionsException,
  InvalidFirehoseDestinationException,
  InvalidLambdaFunctionException,
  InvalidPolicyException,
  InvalidRenderingParameterException,
  InvalidS3ConfigurationException,
  InvalidSNSDestinationException,
  InvalidSnsTopicException,
  InvalidTemplateException,
  InvalidTrackingOptionsException,
  KinesisFirehoseDestination,
  LambdaAction,
  LimitExceededException,
  ListConfigurationSetsRequest,
  ListConfigurationSetsResponse,
  ListCustomVerificationEmailTemplatesRequest,
  ListCustomVerificationEmailTemplatesResponse,
  ListIdentitiesRequest,
  ListIdentitiesResponse,
  ListIdentityPoliciesRequest,
  ListIdentityPoliciesResponse,
  ListReceiptFiltersRequest,
  ListReceiptFiltersResponse,
  ListReceiptRuleSetsRequest,
  ListReceiptRuleSetsResponse,
  ListTemplatesRequest,
  ListTemplatesResponse,
  ListVerifiedEmailAddressesResponse,
  MailFromDomainNotVerifiedException,
  Message,
  MessageDsn,
  MessageRejected,
  MessageTag,
  MissingRenderingAttributeException,
  ProductionAccessNotGrantedException,
  PutConfigurationSetDeliveryOptionsRequest,
  PutConfigurationSetDeliveryOptionsResponse,
  PutIdentityPolicyRequest,
  PutIdentityPolicyResponse,
  RawMessage,
  ReceiptAction,
  ReceiptFilter,
  ReceiptIpFilter,
  ReceiptRule,
  ReceiptRuleSetMetadata,
  RecipientDsnFields,
  ReorderReceiptRuleSetRequest,
  ReorderReceiptRuleSetResponse,
  ReputationOptions,
  RuleDoesNotExistException,
  RuleSetDoesNotExistException,
  S3Action,
  SendBounceRequest,
  SendBounceResponse,
  SendBulkTemplatedEmailRequest,
  SendBulkTemplatedEmailResponse,
  SendCustomVerificationEmailRequest,
  SendCustomVerificationEmailResponse,
  SendDataPoint,
  SendEmailRequest,
  SendEmailResponse,
  SendRawEmailRequest,
  SendRawEmailResponse,
  SendTemplatedEmailRequest,
  SendTemplatedEmailResponse,
  SetActiveReceiptRuleSetRequest,
  SetActiveReceiptRuleSetResponse,
  SetIdentityDkimEnabledRequest,
  SetIdentityDkimEnabledResponse,
  SetIdentityFeedbackForwardingEnabledRequest,
  SetIdentityFeedbackForwardingEnabledResponse,
  SetIdentityHeadersInNotificationsEnabledRequest,
  SetIdentityHeadersInNotificationsEnabledResponse,
  SetIdentityMailFromDomainRequest,
  SetIdentityMailFromDomainResponse,
  SetIdentityNotificationTopicRequest,
  SetIdentityNotificationTopicResponse,
  SetReceiptRulePositionRequest,
  SetReceiptRulePositionResponse,
  SNSAction,
  SNSDestination,
  StopAction,
  Template,
  TemplateDoesNotExistException,
  TemplateMetadata,
  TestRenderTemplateRequest,
  TestRenderTemplateResponse,
  TrackingOptions,
  TrackingOptionsAlreadyExistsException,
  TrackingOptionsDoesNotExistException,
  UpdateAccountSendingEnabledRequest,
  UpdateConfigurationSetEventDestinationRequest,
  UpdateConfigurationSetEventDestinationResponse,
  UpdateConfigurationSetReputationMetricsEnabledRequest,
  UpdateConfigurationSetSendingEnabledRequest,
  UpdateConfigurationSetTrackingOptionsRequest,
  UpdateConfigurationSetTrackingOptionsResponse,
  UpdateCustomVerificationEmailTemplateRequest,
  UpdateReceiptRuleRequest,
  UpdateReceiptRuleResponse,
  UpdateTemplateRequest,
  UpdateTemplateResponse,
  VerifyDomainDkimRequest,
  VerifyDomainDkimResponse,
  VerifyDomainIdentityRequest,
  VerifyDomainIdentityResponse,
  VerifyEmailAddressRequest,
  VerifyEmailIdentityRequest,
  VerifyEmailIdentityResponse,
  WorkmailAction,
} from "../models/models_0";
import { SESServiceException as __BaseException } from "../models/SESServiceException";

/**
 * serializeAws_queryCloneReceiptRuleSetCommand
 */
export const se_CloneReceiptRuleSetCommand = async (
  input: CloneReceiptRuleSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CloneReceiptRuleSetRequest(input, context),
    [_A]: _CRRS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateConfigurationSetCommand
 */
export const se_CreateConfigurationSetCommand = async (
  input: CreateConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateConfigurationSetRequest(input, context),
    [_A]: _CCS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateConfigurationSetEventDestinationCommand
 */
export const se_CreateConfigurationSetEventDestinationCommand = async (
  input: CreateConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateConfigurationSetEventDestinationRequest(input, context),
    [_A]: _CCSED,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateConfigurationSetTrackingOptionsCommand
 */
export const se_CreateConfigurationSetTrackingOptionsCommand = async (
  input: CreateConfigurationSetTrackingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateConfigurationSetTrackingOptionsRequest(input, context),
    [_A]: _CCSTO,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateCustomVerificationEmailTemplateCommand
 */
export const se_CreateCustomVerificationEmailTemplateCommand = async (
  input: CreateCustomVerificationEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateCustomVerificationEmailTemplateRequest(input, context),
    [_A]: _CCVET,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateReceiptFilterCommand
 */
export const se_CreateReceiptFilterCommand = async (
  input: CreateReceiptFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateReceiptFilterRequest(input, context),
    [_A]: _CRF,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateReceiptRuleCommand
 */
export const se_CreateReceiptRuleCommand = async (
  input: CreateReceiptRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateReceiptRuleRequest(input, context),
    [_A]: _CRR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateReceiptRuleSetCommand
 */
export const se_CreateReceiptRuleSetCommand = async (
  input: CreateReceiptRuleSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateReceiptRuleSetRequest(input, context),
    [_A]: _CRRSr,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateTemplateCommand
 */
export const se_CreateTemplateCommand = async (
  input: CreateTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateTemplateRequest(input, context),
    [_A]: _CT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteConfigurationSetCommand
 */
export const se_DeleteConfigurationSetCommand = async (
  input: DeleteConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteConfigurationSetRequest(input, context),
    [_A]: _DCS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteConfigurationSetEventDestinationCommand
 */
export const se_DeleteConfigurationSetEventDestinationCommand = async (
  input: DeleteConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteConfigurationSetEventDestinationRequest(input, context),
    [_A]: _DCSED,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteConfigurationSetTrackingOptionsCommand
 */
export const se_DeleteConfigurationSetTrackingOptionsCommand = async (
  input: DeleteConfigurationSetTrackingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteConfigurationSetTrackingOptionsRequest(input, context),
    [_A]: _DCSTO,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteCustomVerificationEmailTemplateCommand
 */
export const se_DeleteCustomVerificationEmailTemplateCommand = async (
  input: DeleteCustomVerificationEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteCustomVerificationEmailTemplateRequest(input, context),
    [_A]: _DCVET,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteIdentityCommand
 */
export const se_DeleteIdentityCommand = async (
  input: DeleteIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteIdentityRequest(input, context),
    [_A]: _DI,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteIdentityPolicyCommand
 */
export const se_DeleteIdentityPolicyCommand = async (
  input: DeleteIdentityPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteIdentityPolicyRequest(input, context),
    [_A]: _DIP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteReceiptFilterCommand
 */
export const se_DeleteReceiptFilterCommand = async (
  input: DeleteReceiptFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteReceiptFilterRequest(input, context),
    [_A]: _DRF,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteReceiptRuleCommand
 */
export const se_DeleteReceiptRuleCommand = async (
  input: DeleteReceiptRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteReceiptRuleRequest(input, context),
    [_A]: _DRR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteReceiptRuleSetCommand
 */
export const se_DeleteReceiptRuleSetCommand = async (
  input: DeleteReceiptRuleSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteReceiptRuleSetRequest(input, context),
    [_A]: _DRRS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteTemplateCommand
 */
export const se_DeleteTemplateCommand = async (
  input: DeleteTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteTemplateRequest(input, context),
    [_A]: _DT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteVerifiedEmailAddressCommand
 */
export const se_DeleteVerifiedEmailAddressCommand = async (
  input: DeleteVerifiedEmailAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteVerifiedEmailAddressRequest(input, context),
    [_A]: _DVEA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeActiveReceiptRuleSetCommand
 */
export const se_DescribeActiveReceiptRuleSetCommand = async (
  input: DescribeActiveReceiptRuleSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeActiveReceiptRuleSetRequest(input, context),
    [_A]: _DARRS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeConfigurationSetCommand
 */
export const se_DescribeConfigurationSetCommand = async (
  input: DescribeConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeConfigurationSetRequest(input, context),
    [_A]: _DCSe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeReceiptRuleCommand
 */
export const se_DescribeReceiptRuleCommand = async (
  input: DescribeReceiptRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeReceiptRuleRequest(input, context),
    [_A]: _DRRe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeReceiptRuleSetCommand
 */
export const se_DescribeReceiptRuleSetCommand = async (
  input: DescribeReceiptRuleSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeReceiptRuleSetRequest(input, context),
    [_A]: _DRRSe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetAccountSendingEnabledCommand
 */
export const se_GetAccountSendingEnabledCommand = async (
  input: GetAccountSendingEnabledCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _GASE,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetCustomVerificationEmailTemplateCommand
 */
export const se_GetCustomVerificationEmailTemplateCommand = async (
  input: GetCustomVerificationEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetCustomVerificationEmailTemplateRequest(input, context),
    [_A]: _GCVET,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetIdentityDkimAttributesCommand
 */
export const se_GetIdentityDkimAttributesCommand = async (
  input: GetIdentityDkimAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetIdentityDkimAttributesRequest(input, context),
    [_A]: _GIDA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetIdentityMailFromDomainAttributesCommand
 */
export const se_GetIdentityMailFromDomainAttributesCommand = async (
  input: GetIdentityMailFromDomainAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetIdentityMailFromDomainAttributesRequest(input, context),
    [_A]: _GIMFDA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetIdentityNotificationAttributesCommand
 */
export const se_GetIdentityNotificationAttributesCommand = async (
  input: GetIdentityNotificationAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetIdentityNotificationAttributesRequest(input, context),
    [_A]: _GINA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetIdentityPoliciesCommand
 */
export const se_GetIdentityPoliciesCommand = async (
  input: GetIdentityPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetIdentityPoliciesRequest(input, context),
    [_A]: _GIP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetIdentityVerificationAttributesCommand
 */
export const se_GetIdentityVerificationAttributesCommand = async (
  input: GetIdentityVerificationAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetIdentityVerificationAttributesRequest(input, context),
    [_A]: _GIVA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetSendQuotaCommand
 */
export const se_GetSendQuotaCommand = async (
  input: GetSendQuotaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _GSQ,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetSendStatisticsCommand
 */
export const se_GetSendStatisticsCommand = async (
  input: GetSendStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _GSS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetTemplateCommand
 */
export const se_GetTemplateCommand = async (
  input: GetTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetTemplateRequest(input, context),
    [_A]: _GT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListConfigurationSetsCommand
 */
export const se_ListConfigurationSetsCommand = async (
  input: ListConfigurationSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListConfigurationSetsRequest(input, context),
    [_A]: _LCS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListCustomVerificationEmailTemplatesCommand
 */
export const se_ListCustomVerificationEmailTemplatesCommand = async (
  input: ListCustomVerificationEmailTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListCustomVerificationEmailTemplatesRequest(input, context),
    [_A]: _LCVET,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListIdentitiesCommand
 */
export const se_ListIdentitiesCommand = async (
  input: ListIdentitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListIdentitiesRequest(input, context),
    [_A]: _LI,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListIdentityPoliciesCommand
 */
export const se_ListIdentityPoliciesCommand = async (
  input: ListIdentityPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListIdentityPoliciesRequest(input, context),
    [_A]: _LIP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListReceiptFiltersCommand
 */
export const se_ListReceiptFiltersCommand = async (
  input: ListReceiptFiltersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListReceiptFiltersRequest(input, context),
    [_A]: _LRF,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListReceiptRuleSetsCommand
 */
export const se_ListReceiptRuleSetsCommand = async (
  input: ListReceiptRuleSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListReceiptRuleSetsRequest(input, context),
    [_A]: _LRRS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListTemplatesCommand
 */
export const se_ListTemplatesCommand = async (
  input: ListTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListTemplatesRequest(input, context),
    [_A]: _LT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListVerifiedEmailAddressesCommand
 */
export const se_ListVerifiedEmailAddressesCommand = async (
  input: ListVerifiedEmailAddressesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _LVEA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPutConfigurationSetDeliveryOptionsCommand
 */
export const se_PutConfigurationSetDeliveryOptionsCommand = async (
  input: PutConfigurationSetDeliveryOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PutConfigurationSetDeliveryOptionsRequest(input, context),
    [_A]: _PCSDO,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPutIdentityPolicyCommand
 */
export const se_PutIdentityPolicyCommand = async (
  input: PutIdentityPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PutIdentityPolicyRequest(input, context),
    [_A]: _PIP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryReorderReceiptRuleSetCommand
 */
export const se_ReorderReceiptRuleSetCommand = async (
  input: ReorderReceiptRuleSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ReorderReceiptRuleSetRequest(input, context),
    [_A]: _RRRS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySendBounceCommand
 */
export const se_SendBounceCommand = async (
  input: SendBounceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SendBounceRequest(input, context),
    [_A]: _SB,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySendBulkTemplatedEmailCommand
 */
export const se_SendBulkTemplatedEmailCommand = async (
  input: SendBulkTemplatedEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SendBulkTemplatedEmailRequest(input, context),
    [_A]: _SBTE,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySendCustomVerificationEmailCommand
 */
export const se_SendCustomVerificationEmailCommand = async (
  input: SendCustomVerificationEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SendCustomVerificationEmailRequest(input, context),
    [_A]: _SCVE,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySendEmailCommand
 */
export const se_SendEmailCommand = async (
  input: SendEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SendEmailRequest(input, context),
    [_A]: _SE,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySendRawEmailCommand
 */
export const se_SendRawEmailCommand = async (
  input: SendRawEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SendRawEmailRequest(input, context),
    [_A]: _SRE,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySendTemplatedEmailCommand
 */
export const se_SendTemplatedEmailCommand = async (
  input: SendTemplatedEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SendTemplatedEmailRequest(input, context),
    [_A]: _STE,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetActiveReceiptRuleSetCommand
 */
export const se_SetActiveReceiptRuleSetCommand = async (
  input: SetActiveReceiptRuleSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetActiveReceiptRuleSetRequest(input, context),
    [_A]: _SARRS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetIdentityDkimEnabledCommand
 */
export const se_SetIdentityDkimEnabledCommand = async (
  input: SetIdentityDkimEnabledCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetIdentityDkimEnabledRequest(input, context),
    [_A]: _SIDE,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetIdentityFeedbackForwardingEnabledCommand
 */
export const se_SetIdentityFeedbackForwardingEnabledCommand = async (
  input: SetIdentityFeedbackForwardingEnabledCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetIdentityFeedbackForwardingEnabledRequest(input, context),
    [_A]: _SIFFE,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetIdentityHeadersInNotificationsEnabledCommand
 */
export const se_SetIdentityHeadersInNotificationsEnabledCommand = async (
  input: SetIdentityHeadersInNotificationsEnabledCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetIdentityHeadersInNotificationsEnabledRequest(input, context),
    [_A]: _SIHINE,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetIdentityMailFromDomainCommand
 */
export const se_SetIdentityMailFromDomainCommand = async (
  input: SetIdentityMailFromDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetIdentityMailFromDomainRequest(input, context),
    [_A]: _SIMFD,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetIdentityNotificationTopicCommand
 */
export const se_SetIdentityNotificationTopicCommand = async (
  input: SetIdentityNotificationTopicCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetIdentityNotificationTopicRequest(input, context),
    [_A]: _SINT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetReceiptRulePositionCommand
 */
export const se_SetReceiptRulePositionCommand = async (
  input: SetReceiptRulePositionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetReceiptRulePositionRequest(input, context),
    [_A]: _SRRP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryTestRenderTemplateCommand
 */
export const se_TestRenderTemplateCommand = async (
  input: TestRenderTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_TestRenderTemplateRequest(input, context),
    [_A]: _TRT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateAccountSendingEnabledCommand
 */
export const se_UpdateAccountSendingEnabledCommand = async (
  input: UpdateAccountSendingEnabledCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateAccountSendingEnabledRequest(input, context),
    [_A]: _UASE,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateConfigurationSetEventDestinationCommand
 */
export const se_UpdateConfigurationSetEventDestinationCommand = async (
  input: UpdateConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateConfigurationSetEventDestinationRequest(input, context),
    [_A]: _UCSED,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand
 */
export const se_UpdateConfigurationSetReputationMetricsEnabledCommand = async (
  input: UpdateConfigurationSetReputationMetricsEnabledCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateConfigurationSetReputationMetricsEnabledRequest(input, context),
    [_A]: _UCSRME,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateConfigurationSetSendingEnabledCommand
 */
export const se_UpdateConfigurationSetSendingEnabledCommand = async (
  input: UpdateConfigurationSetSendingEnabledCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateConfigurationSetSendingEnabledRequest(input, context),
    [_A]: _UCSSE,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateConfigurationSetTrackingOptionsCommand
 */
export const se_UpdateConfigurationSetTrackingOptionsCommand = async (
  input: UpdateConfigurationSetTrackingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateConfigurationSetTrackingOptionsRequest(input, context),
    [_A]: _UCSTO,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateCustomVerificationEmailTemplateCommand
 */
export const se_UpdateCustomVerificationEmailTemplateCommand = async (
  input: UpdateCustomVerificationEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateCustomVerificationEmailTemplateRequest(input, context),
    [_A]: _UCVET,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateReceiptRuleCommand
 */
export const se_UpdateReceiptRuleCommand = async (
  input: UpdateReceiptRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateReceiptRuleRequest(input, context),
    [_A]: _URR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateTemplateCommand
 */
export const se_UpdateTemplateCommand = async (
  input: UpdateTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateTemplateRequest(input, context),
    [_A]: _UT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryVerifyDomainDkimCommand
 */
export const se_VerifyDomainDkimCommand = async (
  input: VerifyDomainDkimCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_VerifyDomainDkimRequest(input, context),
    [_A]: _VDD,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryVerifyDomainIdentityCommand
 */
export const se_VerifyDomainIdentityCommand = async (
  input: VerifyDomainIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_VerifyDomainIdentityRequest(input, context),
    [_A]: _VDI,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryVerifyEmailAddressCommand
 */
export const se_VerifyEmailAddressCommand = async (
  input: VerifyEmailAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_VerifyEmailAddressRequest(input, context),
    [_A]: _VEA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryVerifyEmailIdentityCommand
 */
export const se_VerifyEmailIdentityCommand = async (
  input: VerifyEmailIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_VerifyEmailIdentityRequest(input, context),
    [_A]: _VEI,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_queryCloneReceiptRuleSetCommand
 */
export const de_CloneReceiptRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloneReceiptRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CloneReceiptRuleSetResponse(data.CloneReceiptRuleSetResult, context);
  const response: CloneReceiptRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateConfigurationSetCommand
 */
export const de_CreateConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateConfigurationSetResponse(data.CreateConfigurationSetResult, context);
  const response: CreateConfigurationSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateConfigurationSetEventDestinationCommand
 */
export const de_CreateConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateConfigurationSetEventDestinationResponse(
    data.CreateConfigurationSetEventDestinationResult,
    context
  );
  const response: CreateConfigurationSetEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateConfigurationSetTrackingOptionsCommand
 */
export const de_CreateConfigurationSetTrackingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetTrackingOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateConfigurationSetTrackingOptionsResponse(
    data.CreateConfigurationSetTrackingOptionsResult,
    context
  );
  const response: CreateConfigurationSetTrackingOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateCustomVerificationEmailTemplateCommand
 */
export const de_CreateCustomVerificationEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomVerificationEmailTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateCustomVerificationEmailTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryCreateReceiptFilterCommand
 */
export const de_CreateReceiptFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReceiptFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateReceiptFilterResponse(data.CreateReceiptFilterResult, context);
  const response: CreateReceiptFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateReceiptRuleCommand
 */
export const de_CreateReceiptRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReceiptRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateReceiptRuleResponse(data.CreateReceiptRuleResult, context);
  const response: CreateReceiptRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateReceiptRuleSetCommand
 */
export const de_CreateReceiptRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReceiptRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateReceiptRuleSetResponse(data.CreateReceiptRuleSetResult, context);
  const response: CreateReceiptRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateTemplateCommand
 */
export const de_CreateTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTemplateResponse(data.CreateTemplateResult, context);
  const response: CreateTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteConfigurationSetCommand
 */
export const de_DeleteConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteConfigurationSetResponse(data.DeleteConfigurationSetResult, context);
  const response: DeleteConfigurationSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteConfigurationSetEventDestinationCommand
 */
export const de_DeleteConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteConfigurationSetEventDestinationResponse(
    data.DeleteConfigurationSetEventDestinationResult,
    context
  );
  const response: DeleteConfigurationSetEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteConfigurationSetTrackingOptionsCommand
 */
export const de_DeleteConfigurationSetTrackingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetTrackingOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteConfigurationSetTrackingOptionsResponse(
    data.DeleteConfigurationSetTrackingOptionsResult,
    context
  );
  const response: DeleteConfigurationSetTrackingOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteCustomVerificationEmailTemplateCommand
 */
export const de_DeleteCustomVerificationEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomVerificationEmailTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCustomVerificationEmailTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteIdentityCommand
 */
export const de_DeleteIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteIdentityResponse(data.DeleteIdentityResult, context);
  const response: DeleteIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteIdentityPolicyCommand
 */
export const de_DeleteIdentityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentityPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteIdentityPolicyResponse(data.DeleteIdentityPolicyResult, context);
  const response: DeleteIdentityPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteReceiptFilterCommand
 */
export const de_DeleteReceiptFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReceiptFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteReceiptFilterResponse(data.DeleteReceiptFilterResult, context);
  const response: DeleteReceiptFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteReceiptRuleCommand
 */
export const de_DeleteReceiptRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReceiptRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteReceiptRuleResponse(data.DeleteReceiptRuleResult, context);
  const response: DeleteReceiptRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteReceiptRuleSetCommand
 */
export const de_DeleteReceiptRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReceiptRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteReceiptRuleSetResponse(data.DeleteReceiptRuleSetResult, context);
  const response: DeleteReceiptRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteTemplateCommand
 */
export const de_DeleteTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTemplateResponse(data.DeleteTemplateResult, context);
  const response: DeleteTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteVerifiedEmailAddressCommand
 */
export const de_DeleteVerifiedEmailAddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVerifiedEmailAddressCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteVerifiedEmailAddressCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDescribeActiveReceiptRuleSetCommand
 */
export const de_DescribeActiveReceiptRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActiveReceiptRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeActiveReceiptRuleSetResponse(data.DescribeActiveReceiptRuleSetResult, context);
  const response: DescribeActiveReceiptRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeConfigurationSetCommand
 */
export const de_DescribeConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeConfigurationSetResponse(data.DescribeConfigurationSetResult, context);
  const response: DescribeConfigurationSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeReceiptRuleCommand
 */
export const de_DescribeReceiptRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReceiptRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeReceiptRuleResponse(data.DescribeReceiptRuleResult, context);
  const response: DescribeReceiptRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeReceiptRuleSetCommand
 */
export const de_DescribeReceiptRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReceiptRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeReceiptRuleSetResponse(data.DescribeReceiptRuleSetResult, context);
  const response: DescribeReceiptRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetAccountSendingEnabledCommand
 */
export const de_GetAccountSendingEnabledCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSendingEnabledCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAccountSendingEnabledResponse(data.GetAccountSendingEnabledResult, context);
  const response: GetAccountSendingEnabledCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetCustomVerificationEmailTemplateCommand
 */
export const de_GetCustomVerificationEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomVerificationEmailTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCustomVerificationEmailTemplateResponse(data.GetCustomVerificationEmailTemplateResult, context);
  const response: GetCustomVerificationEmailTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetIdentityDkimAttributesCommand
 */
export const de_GetIdentityDkimAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityDkimAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetIdentityDkimAttributesResponse(data.GetIdentityDkimAttributesResult, context);
  const response: GetIdentityDkimAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetIdentityMailFromDomainAttributesCommand
 */
export const de_GetIdentityMailFromDomainAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityMailFromDomainAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetIdentityMailFromDomainAttributesResponse(data.GetIdentityMailFromDomainAttributesResult, context);
  const response: GetIdentityMailFromDomainAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetIdentityNotificationAttributesCommand
 */
export const de_GetIdentityNotificationAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityNotificationAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetIdentityNotificationAttributesResponse(data.GetIdentityNotificationAttributesResult, context);
  const response: GetIdentityNotificationAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetIdentityPoliciesCommand
 */
export const de_GetIdentityPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetIdentityPoliciesResponse(data.GetIdentityPoliciesResult, context);
  const response: GetIdentityPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetIdentityVerificationAttributesCommand
 */
export const de_GetIdentityVerificationAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityVerificationAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetIdentityVerificationAttributesResponse(data.GetIdentityVerificationAttributesResult, context);
  const response: GetIdentityVerificationAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetSendQuotaCommand
 */
export const de_GetSendQuotaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSendQuotaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSendQuotaResponse(data.GetSendQuotaResult, context);
  const response: GetSendQuotaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetSendStatisticsCommand
 */
export const de_GetSendStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSendStatisticsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSendStatisticsResponse(data.GetSendStatisticsResult, context);
  const response: GetSendStatisticsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetTemplateCommand
 */
export const de_GetTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTemplateResponse(data.GetTemplateResult, context);
  const response: GetTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListConfigurationSetsCommand
 */
export const de_ListConfigurationSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListConfigurationSetsResponse(data.ListConfigurationSetsResult, context);
  const response: ListConfigurationSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListCustomVerificationEmailTemplatesCommand
 */
export const de_ListCustomVerificationEmailTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomVerificationEmailTemplatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCustomVerificationEmailTemplatesResponse(data.ListCustomVerificationEmailTemplatesResult, context);
  const response: ListCustomVerificationEmailTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListIdentitiesCommand
 */
export const de_ListIdentitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListIdentitiesResponse(data.ListIdentitiesResult, context);
  const response: ListIdentitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListIdentityPoliciesCommand
 */
export const de_ListIdentityPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListIdentityPoliciesResponse(data.ListIdentityPoliciesResult, context);
  const response: ListIdentityPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListReceiptFiltersCommand
 */
export const de_ListReceiptFiltersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReceiptFiltersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListReceiptFiltersResponse(data.ListReceiptFiltersResult, context);
  const response: ListReceiptFiltersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListReceiptRuleSetsCommand
 */
export const de_ListReceiptRuleSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReceiptRuleSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListReceiptRuleSetsResponse(data.ListReceiptRuleSetsResult, context);
  const response: ListReceiptRuleSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListTemplatesCommand
 */
export const de_ListTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTemplatesResponse(data.ListTemplatesResult, context);
  const response: ListTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListVerifiedEmailAddressesCommand
 */
export const de_ListVerifiedEmailAddressesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVerifiedEmailAddressesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListVerifiedEmailAddressesResponse(data.ListVerifiedEmailAddressesResult, context);
  const response: ListVerifiedEmailAddressesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryPutConfigurationSetDeliveryOptionsCommand
 */
export const de_PutConfigurationSetDeliveryOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetDeliveryOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutConfigurationSetDeliveryOptionsResponse(data.PutConfigurationSetDeliveryOptionsResult, context);
  const response: PutConfigurationSetDeliveryOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryPutIdentityPolicyCommand
 */
export const de_PutIdentityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutIdentityPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutIdentityPolicyResponse(data.PutIdentityPolicyResult, context);
  const response: PutIdentityPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryReorderReceiptRuleSetCommand
 */
export const de_ReorderReceiptRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReorderReceiptRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ReorderReceiptRuleSetResponse(data.ReorderReceiptRuleSetResult, context);
  const response: ReorderReceiptRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySendBounceCommand
 */
export const de_SendBounceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendBounceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SendBounceResponse(data.SendBounceResult, context);
  const response: SendBounceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySendBulkTemplatedEmailCommand
 */
export const de_SendBulkTemplatedEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendBulkTemplatedEmailCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SendBulkTemplatedEmailResponse(data.SendBulkTemplatedEmailResult, context);
  const response: SendBulkTemplatedEmailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySendCustomVerificationEmailCommand
 */
export const de_SendCustomVerificationEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendCustomVerificationEmailCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SendCustomVerificationEmailResponse(data.SendCustomVerificationEmailResult, context);
  const response: SendCustomVerificationEmailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySendEmailCommand
 */
export const de_SendEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendEmailCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SendEmailResponse(data.SendEmailResult, context);
  const response: SendEmailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySendRawEmailCommand
 */
export const de_SendRawEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendRawEmailCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SendRawEmailResponse(data.SendRawEmailResult, context);
  const response: SendRawEmailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySendTemplatedEmailCommand
 */
export const de_SendTemplatedEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTemplatedEmailCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SendTemplatedEmailResponse(data.SendTemplatedEmailResult, context);
  const response: SendTemplatedEmailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySetActiveReceiptRuleSetCommand
 */
export const de_SetActiveReceiptRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetActiveReceiptRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetActiveReceiptRuleSetResponse(data.SetActiveReceiptRuleSetResult, context);
  const response: SetActiveReceiptRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySetIdentityDkimEnabledCommand
 */
export const de_SetIdentityDkimEnabledCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityDkimEnabledCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetIdentityDkimEnabledResponse(data.SetIdentityDkimEnabledResult, context);
  const response: SetIdentityDkimEnabledCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySetIdentityFeedbackForwardingEnabledCommand
 */
export const de_SetIdentityFeedbackForwardingEnabledCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityFeedbackForwardingEnabledCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetIdentityFeedbackForwardingEnabledResponse(data.SetIdentityFeedbackForwardingEnabledResult, context);
  const response: SetIdentityFeedbackForwardingEnabledCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySetIdentityHeadersInNotificationsEnabledCommand
 */
export const de_SetIdentityHeadersInNotificationsEnabledCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityHeadersInNotificationsEnabledCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetIdentityHeadersInNotificationsEnabledResponse(
    data.SetIdentityHeadersInNotificationsEnabledResult,
    context
  );
  const response: SetIdentityHeadersInNotificationsEnabledCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySetIdentityMailFromDomainCommand
 */
export const de_SetIdentityMailFromDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityMailFromDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetIdentityMailFromDomainResponse(data.SetIdentityMailFromDomainResult, context);
  const response: SetIdentityMailFromDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySetIdentityNotificationTopicCommand
 */
export const de_SetIdentityNotificationTopicCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityNotificationTopicCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetIdentityNotificationTopicResponse(data.SetIdentityNotificationTopicResult, context);
  const response: SetIdentityNotificationTopicCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySetReceiptRulePositionCommand
 */
export const de_SetReceiptRulePositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetReceiptRulePositionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetReceiptRulePositionResponse(data.SetReceiptRulePositionResult, context);
  const response: SetReceiptRulePositionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryTestRenderTemplateCommand
 */
export const de_TestRenderTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestRenderTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TestRenderTemplateResponse(data.TestRenderTemplateResult, context);
  const response: TestRenderTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryUpdateAccountSendingEnabledCommand
 */
export const de_UpdateAccountSendingEnabledCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountSendingEnabledCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateAccountSendingEnabledCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateConfigurationSetEventDestinationCommand
 */
export const de_UpdateConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateConfigurationSetEventDestinationResponse(
    data.UpdateConfigurationSetEventDestinationResult,
    context
  );
  const response: UpdateConfigurationSetEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand
 */
export const de_UpdateConfigurationSetReputationMetricsEnabledCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetReputationMetricsEnabledCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateConfigurationSetReputationMetricsEnabledCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateConfigurationSetSendingEnabledCommand
 */
export const de_UpdateConfigurationSetSendingEnabledCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetSendingEnabledCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateConfigurationSetSendingEnabledCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateConfigurationSetTrackingOptionsCommand
 */
export const de_UpdateConfigurationSetTrackingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetTrackingOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateConfigurationSetTrackingOptionsResponse(
    data.UpdateConfigurationSetTrackingOptionsResult,
    context
  );
  const response: UpdateConfigurationSetTrackingOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryUpdateCustomVerificationEmailTemplateCommand
 */
export const de_UpdateCustomVerificationEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomVerificationEmailTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateCustomVerificationEmailTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateReceiptRuleCommand
 */
export const de_UpdateReceiptRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReceiptRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateReceiptRuleResponse(data.UpdateReceiptRuleResult, context);
  const response: UpdateReceiptRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryUpdateTemplateCommand
 */
export const de_UpdateTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateTemplateResponse(data.UpdateTemplateResult, context);
  const response: UpdateTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryVerifyDomainDkimCommand
 */
export const de_VerifyDomainDkimCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyDomainDkimCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_VerifyDomainDkimResponse(data.VerifyDomainDkimResult, context);
  const response: VerifyDomainDkimCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryVerifyDomainIdentityCommand
 */
export const de_VerifyDomainIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyDomainIdentityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_VerifyDomainIdentityResponse(data.VerifyDomainIdentityResult, context);
  const response: VerifyDomainIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryVerifyEmailAddressCommand
 */
export const de_VerifyEmailAddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyEmailAddressCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: VerifyEmailAddressCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryVerifyEmailIdentityCommand
 */
export const de_VerifyEmailIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyEmailIdentityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_VerifyEmailIdentityResponse(data.VerifyEmailIdentityResult, context);
  const response: VerifyEmailIdentityCommandOutput = {
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
    case "AlreadyExists":
    case "com.amazonaws.ses#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.ses#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "RuleSetDoesNotExist":
    case "com.amazonaws.ses#RuleSetDoesNotExistException":
      throw await de_RuleSetDoesNotExistExceptionRes(parsedOutput, context);
    case "ConfigurationSetAlreadyExists":
    case "com.amazonaws.ses#ConfigurationSetAlreadyExistsException":
      throw await de_ConfigurationSetAlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidConfigurationSet":
    case "com.amazonaws.ses#InvalidConfigurationSetException":
      throw await de_InvalidConfigurationSetExceptionRes(parsedOutput, context);
    case "ConfigurationSetDoesNotExist":
    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
      throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
    case "EventDestinationAlreadyExists":
    case "com.amazonaws.ses#EventDestinationAlreadyExistsException":
      throw await de_EventDestinationAlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidCloudWatchDestination":
    case "com.amazonaws.ses#InvalidCloudWatchDestinationException":
      throw await de_InvalidCloudWatchDestinationExceptionRes(parsedOutput, context);
    case "InvalidFirehoseDestination":
    case "com.amazonaws.ses#InvalidFirehoseDestinationException":
      throw await de_InvalidFirehoseDestinationExceptionRes(parsedOutput, context);
    case "InvalidSNSDestination":
    case "com.amazonaws.ses#InvalidSNSDestinationException":
      throw await de_InvalidSNSDestinationExceptionRes(parsedOutput, context);
    case "InvalidTrackingOptions":
    case "com.amazonaws.ses#InvalidTrackingOptionsException":
      throw await de_InvalidTrackingOptionsExceptionRes(parsedOutput, context);
    case "TrackingOptionsAlreadyExistsException":
    case "com.amazonaws.ses#TrackingOptionsAlreadyExistsException":
      throw await de_TrackingOptionsAlreadyExistsExceptionRes(parsedOutput, context);
    case "CustomVerificationEmailInvalidContent":
    case "com.amazonaws.ses#CustomVerificationEmailInvalidContentException":
      throw await de_CustomVerificationEmailInvalidContentExceptionRes(parsedOutput, context);
    case "CustomVerificationEmailTemplateAlreadyExists":
    case "com.amazonaws.ses#CustomVerificationEmailTemplateAlreadyExistsException":
      throw await de_CustomVerificationEmailTemplateAlreadyExistsExceptionRes(parsedOutput, context);
    case "FromEmailAddressNotVerified":
    case "com.amazonaws.ses#FromEmailAddressNotVerifiedException":
      throw await de_FromEmailAddressNotVerifiedExceptionRes(parsedOutput, context);
    case "InvalidLambdaFunction":
    case "com.amazonaws.ses#InvalidLambdaFunctionException":
      throw await de_InvalidLambdaFunctionExceptionRes(parsedOutput, context);
    case "InvalidS3Configuration":
    case "com.amazonaws.ses#InvalidS3ConfigurationException":
      throw await de_InvalidS3ConfigurationExceptionRes(parsedOutput, context);
    case "InvalidSnsTopic":
    case "com.amazonaws.ses#InvalidSnsTopicException":
      throw await de_InvalidSnsTopicExceptionRes(parsedOutput, context);
    case "RuleDoesNotExist":
    case "com.amazonaws.ses#RuleDoesNotExistException":
      throw await de_RuleDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidTemplate":
    case "com.amazonaws.ses#InvalidTemplateException":
      throw await de_InvalidTemplateExceptionRes(parsedOutput, context);
    case "EventDestinationDoesNotExist":
    case "com.amazonaws.ses#EventDestinationDoesNotExistException":
      throw await de_EventDestinationDoesNotExistExceptionRes(parsedOutput, context);
    case "TrackingOptionsDoesNotExistException":
    case "com.amazonaws.ses#TrackingOptionsDoesNotExistException":
      throw await de_TrackingOptionsDoesNotExistExceptionRes(parsedOutput, context);
    case "CannotDelete":
    case "com.amazonaws.ses#CannotDeleteException":
      throw await de_CannotDeleteExceptionRes(parsedOutput, context);
    case "CustomVerificationEmailTemplateDoesNotExist":
    case "com.amazonaws.ses#CustomVerificationEmailTemplateDoesNotExistException":
      throw await de_CustomVerificationEmailTemplateDoesNotExistExceptionRes(parsedOutput, context);
    case "TemplateDoesNotExist":
    case "com.amazonaws.ses#TemplateDoesNotExistException":
      throw await de_TemplateDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidDeliveryOptions":
    case "com.amazonaws.ses#InvalidDeliveryOptionsException":
      throw await de_InvalidDeliveryOptionsExceptionRes(parsedOutput, context);
    case "InvalidPolicy":
    case "com.amazonaws.ses#InvalidPolicyException":
      throw await de_InvalidPolicyExceptionRes(parsedOutput, context);
    case "MessageRejected":
    case "com.amazonaws.ses#MessageRejected":
      throw await de_MessageRejectedRes(parsedOutput, context);
    case "AccountSendingPausedException":
    case "com.amazonaws.ses#AccountSendingPausedException":
      throw await de_AccountSendingPausedExceptionRes(parsedOutput, context);
    case "ConfigurationSetSendingPausedException":
    case "com.amazonaws.ses#ConfigurationSetSendingPausedException":
      throw await de_ConfigurationSetSendingPausedExceptionRes(parsedOutput, context);
    case "MailFromDomainNotVerifiedException":
    case "com.amazonaws.ses#MailFromDomainNotVerifiedException":
      throw await de_MailFromDomainNotVerifiedExceptionRes(parsedOutput, context);
    case "ProductionAccessNotGranted":
    case "com.amazonaws.ses#ProductionAccessNotGrantedException":
      throw await de_ProductionAccessNotGrantedExceptionRes(parsedOutput, context);
    case "InvalidRenderingParameter":
    case "com.amazonaws.ses#InvalidRenderingParameterException":
      throw await de_InvalidRenderingParameterExceptionRes(parsedOutput, context);
    case "MissingRenderingAttribute":
    case "com.amazonaws.ses#MissingRenderingAttributeException":
      throw await de_MissingRenderingAttributeExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryAccountSendingPausedExceptionRes
 */
const de_AccountSendingPausedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountSendingPausedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccountSendingPausedException(body.Error, context);
  const exception = new AccountSendingPausedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryAlreadyExistsExceptionRes
 */
const de_AlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AlreadyExistsException(body.Error, context);
  const exception = new AlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCannotDeleteExceptionRes
 */
const de_CannotDeleteExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CannotDeleteException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CannotDeleteException(body.Error, context);
  const exception = new CannotDeleteException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryConfigurationSetAlreadyExistsExceptionRes
 */
const de_ConfigurationSetAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConfigurationSetAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConfigurationSetAlreadyExistsException(body.Error, context);
  const exception = new ConfigurationSetAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryConfigurationSetDoesNotExistExceptionRes
 */
const de_ConfigurationSetDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConfigurationSetDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConfigurationSetDoesNotExistException(body.Error, context);
  const exception = new ConfigurationSetDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryConfigurationSetSendingPausedExceptionRes
 */
const de_ConfigurationSetSendingPausedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConfigurationSetSendingPausedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConfigurationSetSendingPausedException(body.Error, context);
  const exception = new ConfigurationSetSendingPausedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCustomVerificationEmailInvalidContentExceptionRes
 */
const de_CustomVerificationEmailInvalidContentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomVerificationEmailInvalidContentException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CustomVerificationEmailInvalidContentException(body.Error, context);
  const exception = new CustomVerificationEmailInvalidContentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCustomVerificationEmailTemplateAlreadyExistsExceptionRes
 */
const de_CustomVerificationEmailTemplateAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomVerificationEmailTemplateAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CustomVerificationEmailTemplateAlreadyExistsException(body.Error, context);
  const exception = new CustomVerificationEmailTemplateAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCustomVerificationEmailTemplateDoesNotExistExceptionRes
 */
const de_CustomVerificationEmailTemplateDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomVerificationEmailTemplateDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CustomVerificationEmailTemplateDoesNotExistException(body.Error, context);
  const exception = new CustomVerificationEmailTemplateDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryEventDestinationAlreadyExistsExceptionRes
 */
const de_EventDestinationAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EventDestinationAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EventDestinationAlreadyExistsException(body.Error, context);
  const exception = new EventDestinationAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryEventDestinationDoesNotExistExceptionRes
 */
const de_EventDestinationDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EventDestinationDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EventDestinationDoesNotExistException(body.Error, context);
  const exception = new EventDestinationDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryFromEmailAddressNotVerifiedExceptionRes
 */
const de_FromEmailAddressNotVerifiedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FromEmailAddressNotVerifiedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_FromEmailAddressNotVerifiedException(body.Error, context);
  const exception = new FromEmailAddressNotVerifiedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidCloudWatchDestinationExceptionRes
 */
const de_InvalidCloudWatchDestinationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCloudWatchDestinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidCloudWatchDestinationException(body.Error, context);
  const exception = new InvalidCloudWatchDestinationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidConfigurationSetExceptionRes
 */
const de_InvalidConfigurationSetExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidConfigurationSetException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidConfigurationSetException(body.Error, context);
  const exception = new InvalidConfigurationSetException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidDeliveryOptionsExceptionRes
 */
const de_InvalidDeliveryOptionsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeliveryOptionsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDeliveryOptionsException(body.Error, context);
  const exception = new InvalidDeliveryOptionsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidFirehoseDestinationExceptionRes
 */
const de_InvalidFirehoseDestinationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFirehoseDestinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidFirehoseDestinationException(body.Error, context);
  const exception = new InvalidFirehoseDestinationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidLambdaFunctionExceptionRes
 */
const de_InvalidLambdaFunctionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLambdaFunctionException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidLambdaFunctionException(body.Error, context);
  const exception = new InvalidLambdaFunctionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidPolicyExceptionRes
 */
const de_InvalidPolicyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidPolicyException(body.Error, context);
  const exception = new InvalidPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidRenderingParameterExceptionRes
 */
const de_InvalidRenderingParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRenderingParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidRenderingParameterException(body.Error, context);
  const exception = new InvalidRenderingParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidS3ConfigurationExceptionRes
 */
const de_InvalidS3ConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3ConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidS3ConfigurationException(body.Error, context);
  const exception = new InvalidS3ConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidSNSDestinationExceptionRes
 */
const de_InvalidSNSDestinationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSNSDestinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidSNSDestinationException(body.Error, context);
  const exception = new InvalidSNSDestinationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidSnsTopicExceptionRes
 */
const de_InvalidSnsTopicExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSnsTopicException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidSnsTopicException(body.Error, context);
  const exception = new InvalidSnsTopicException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidTemplateExceptionRes
 */
const de_InvalidTemplateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTemplateException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTemplateException(body.Error, context);
  const exception = new InvalidTemplateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidTrackingOptionsExceptionRes
 */
const de_InvalidTrackingOptionsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTrackingOptionsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTrackingOptionsException(body.Error, context);
  const exception = new InvalidTrackingOptionsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryLimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body.Error, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryMailFromDomainNotVerifiedExceptionRes
 */
const de_MailFromDomainNotVerifiedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MailFromDomainNotVerifiedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MailFromDomainNotVerifiedException(body.Error, context);
  const exception = new MailFromDomainNotVerifiedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryMessageRejectedRes
 */
const de_MessageRejectedRes = async (parsedOutput: any, context: __SerdeContext): Promise<MessageRejected> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MessageRejected(body.Error, context);
  const exception = new MessageRejected({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryMissingRenderingAttributeExceptionRes
 */
const de_MissingRenderingAttributeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingRenderingAttributeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MissingRenderingAttributeException(body.Error, context);
  const exception = new MissingRenderingAttributeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryProductionAccessNotGrantedExceptionRes
 */
const de_ProductionAccessNotGrantedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProductionAccessNotGrantedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ProductionAccessNotGrantedException(body.Error, context);
  const exception = new ProductionAccessNotGrantedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryRuleDoesNotExistExceptionRes
 */
const de_RuleDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RuleDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RuleDoesNotExistException(body.Error, context);
  const exception = new RuleDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryRuleSetDoesNotExistExceptionRes
 */
const de_RuleSetDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RuleSetDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RuleSetDoesNotExistException(body.Error, context);
  const exception = new RuleSetDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTemplateDoesNotExistExceptionRes
 */
const de_TemplateDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TemplateDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TemplateDoesNotExistException(body.Error, context);
  const exception = new TemplateDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTrackingOptionsAlreadyExistsExceptionRes
 */
const de_TrackingOptionsAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrackingOptionsAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TrackingOptionsAlreadyExistsException(body.Error, context);
  const exception = new TrackingOptionsAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTrackingOptionsDoesNotExistExceptionRes
 */
const de_TrackingOptionsDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrackingOptionsDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TrackingOptionsDoesNotExistException(body.Error, context);
  const exception = new TrackingOptionsDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_queryAddHeaderAction
 */
const se_AddHeaderAction = (input: AddHeaderAction, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_HN] != null) {
    entries[_HN] = input[_HN];
  }
  if (input[_HV] != null) {
    entries[_HV] = input[_HV];
  }
  return entries;
};

/**
 * serializeAws_queryAddressList
 */
const se_AddressList = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryBody
 */
const se_Body = (input: Body, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_T] != null) {
    const memberEntries = se_Content(input[_T], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Text.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_H] != null) {
    const memberEntries = se_Content(input[_H], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Html.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryBounceAction
 */
const se_BounceAction = (input: BounceAction, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TA] != null) {
    entries[_TA] = input[_TA];
  }
  if (input[_SRC] != null) {
    entries[_SRC] = input[_SRC];
  }
  if (input[_SC] != null) {
    entries[_SC] = input[_SC];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_S] != null) {
    entries[_S] = input[_S];
  }
  return entries;
};

/**
 * serializeAws_queryBouncedRecipientInfo
 */
const se_BouncedRecipientInfo = (input: BouncedRecipientInfo, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_R] != null) {
    entries[_R] = input[_R];
  }
  if (input[_RA] != null) {
    entries[_RA] = input[_RA];
  }
  if (input[_BT] != null) {
    entries[_BT] = input[_BT];
  }
  if (input[_RDF] != null) {
    const memberEntries = se_RecipientDsnFields(input[_RDF], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RecipientDsnFields.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryBouncedRecipientInfoList
 */
const se_BouncedRecipientInfoList = (input: BouncedRecipientInfo[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_BouncedRecipientInfo(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryBulkEmailDestination
 */
const se_BulkEmailDestination = (input: BulkEmailDestination, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_D] != null) {
    const memberEntries = se_Destination(input[_D], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Destination.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RT] != null) {
    const memberEntries = se_MessageTagList(input[_RT], context);
    if (input[_RT]?.length === 0) {
      entries.ReplacementTags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplacementTags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RTD] != null) {
    entries[_RTD] = input[_RTD];
  }
  return entries;
};

/**
 * serializeAws_queryBulkEmailDestinationList
 */
const se_BulkEmailDestinationList = (input: BulkEmailDestination[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_BulkEmailDestination(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryCloneReceiptRuleSetRequest
 */
const se_CloneReceiptRuleSetRequest = (input: CloneReceiptRuleSetRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RSN] != null) {
    entries[_RSN] = input[_RSN];
  }
  if (input[_ORSN] != null) {
    entries[_ORSN] = input[_ORSN];
  }
  return entries;
};

/**
 * serializeAws_queryCloudWatchDestination
 */
const se_CloudWatchDestination = (input: CloudWatchDestination, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DC] != null) {
    const memberEntries = se_CloudWatchDimensionConfigurations(input[_DC], context);
    if (input[_DC]?.length === 0) {
      entries.DimensionConfigurations = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DimensionConfigurations.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCloudWatchDimensionConfiguration
 */
const se_CloudWatchDimensionConfiguration = (input: CloudWatchDimensionConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
  }
  if (input[_DVS] != null) {
    entries[_DVS] = input[_DVS];
  }
  if (input[_DDV] != null) {
    entries[_DDV] = input[_DDV];
  }
  return entries;
};

/**
 * serializeAws_queryCloudWatchDimensionConfigurations
 */
const se_CloudWatchDimensionConfigurations = (
  input: CloudWatchDimensionConfiguration[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_CloudWatchDimensionConfiguration(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryConfigurationSet
 */
const se_ConfigurationSet = (input: ConfigurationSet, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  return entries;
};

/**
 * serializeAws_queryConfigurationSetAttributeList
 */
const se_ConfigurationSetAttributeList = (input: ConfigurationSetAttribute[], context: __SerdeContext): any => {
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
 * serializeAws_queryConnectAction
 */
const se_ConnectAction = (input: ConnectAction, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_IARN] != null) {
    entries[_IARN] = input[_IARN];
  }
  if (input[_IAMRARN] != null) {
    entries[_IAMRARN] = input[_IAMRARN];
  }
  return entries;
};

/**
 * serializeAws_queryContent
 */
const se_Content = (input: Content, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Da] != null) {
    entries[_Da] = input[_Da];
  }
  if (input[_C] != null) {
    entries[_C] = input[_C];
  }
  return entries;
};

/**
 * serializeAws_queryCreateConfigurationSetEventDestinationRequest
 */
const se_CreateConfigurationSetEventDestinationRequest = (
  input: CreateConfigurationSetEventDestinationRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_ED] != null) {
    const memberEntries = se_EventDestination(input[_ED], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EventDestination.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreateConfigurationSetRequest
 */
const se_CreateConfigurationSetRequest = (input: CreateConfigurationSetRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CS] != null) {
    const memberEntries = se_ConfigurationSet(input[_CS], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ConfigurationSet.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreateConfigurationSetTrackingOptionsRequest
 */
const se_CreateConfigurationSetTrackingOptionsRequest = (
  input: CreateConfigurationSetTrackingOptionsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_TO] != null) {
    const memberEntries = se_TrackingOptions(input[_TO], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TrackingOptions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreateCustomVerificationEmailTemplateRequest
 */
const se_CreateCustomVerificationEmailTemplateRequest = (
  input: CreateCustomVerificationEmailTemplateRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_FEA] != null) {
    entries[_FEA] = input[_FEA];
  }
  if (input[_TS] != null) {
    entries[_TS] = input[_TS];
  }
  if (input[_TC] != null) {
    entries[_TC] = input[_TC];
  }
  if (input[_SRURL] != null) {
    entries[_SRURL] = input[_SRURL];
  }
  if (input[_FRURL] != null) {
    entries[_FRURL] = input[_FRURL];
  }
  return entries;
};

/**
 * serializeAws_queryCreateReceiptFilterRequest
 */
const se_CreateReceiptFilterRequest = (input: CreateReceiptFilterRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_F] != null) {
    const memberEntries = se_ReceiptFilter(input[_F], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filter.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreateReceiptRuleRequest
 */
const se_CreateReceiptRuleRequest = (input: CreateReceiptRuleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RSN] != null) {
    entries[_RSN] = input[_RSN];
  }
  if (input[_Af] != null) {
    entries[_Af] = input[_Af];
  }
  if (input[_Ru] != null) {
    const memberEntries = se_ReceiptRule(input[_Ru], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Rule.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreateReceiptRuleSetRequest
 */
const se_CreateReceiptRuleSetRequest = (input: CreateReceiptRuleSetRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RSN] != null) {
    entries[_RSN] = input[_RSN];
  }
  return entries;
};

/**
 * serializeAws_queryCreateTemplateRequest
 */
const se_CreateTemplateRequest = (input: CreateTemplateRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Te] != null) {
    const memberEntries = se_Template(input[_Te], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Template.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDeleteConfigurationSetEventDestinationRequest
 */
const se_DeleteConfigurationSetEventDestinationRequest = (
  input: DeleteConfigurationSetEventDestinationRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_EDN] != null) {
    entries[_EDN] = input[_EDN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteConfigurationSetRequest
 */
const se_DeleteConfigurationSetRequest = (input: DeleteConfigurationSetRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteConfigurationSetTrackingOptionsRequest
 */
const se_DeleteConfigurationSetTrackingOptionsRequest = (
  input: DeleteConfigurationSetTrackingOptionsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteCustomVerificationEmailTemplateRequest
 */
const se_DeleteCustomVerificationEmailTemplateRequest = (
  input: DeleteCustomVerificationEmailTemplateRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteIdentityPolicyRequest
 */
const se_DeleteIdentityPolicyRequest = (input: DeleteIdentityPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteIdentityRequest
 */
const se_DeleteIdentityRequest = (input: DeleteIdentityRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteReceiptFilterRequest
 */
const se_DeleteReceiptFilterRequest = (input: DeleteReceiptFilterRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_FN] != null) {
    entries[_FN] = input[_FN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteReceiptRuleRequest
 */
const se_DeleteReceiptRuleRequest = (input: DeleteReceiptRuleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RSN] != null) {
    entries[_RSN] = input[_RSN];
  }
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteReceiptRuleSetRequest
 */
const se_DeleteReceiptRuleSetRequest = (input: DeleteReceiptRuleSetRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RSN] != null) {
    entries[_RSN] = input[_RSN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteTemplateRequest
 */
const se_DeleteTemplateRequest = (input: DeleteTemplateRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteVerifiedEmailAddressRequest
 */
const se_DeleteVerifiedEmailAddressRequest = (
  input: DeleteVerifiedEmailAddressRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_EA] != null) {
    entries[_EA] = input[_EA];
  }
  return entries;
};

/**
 * serializeAws_queryDeliveryOptions
 */
const se_DeliveryOptions = (input: DeliveryOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TP] != null) {
    entries[_TP] = input[_TP];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeActiveReceiptRuleSetRequest
 */
const se_DescribeActiveReceiptRuleSetRequest = (
  input: DescribeActiveReceiptRuleSetRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  return entries;
};

/**
 * serializeAws_queryDescribeConfigurationSetRequest
 */
const se_DescribeConfigurationSetRequest = (input: DescribeConfigurationSetRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_CSAN] != null) {
    const memberEntries = se_ConfigurationSetAttributeList(input[_CSAN], context);
    if (input[_CSAN]?.length === 0) {
      entries.ConfigurationSetAttributeNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ConfigurationSetAttributeNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDescribeReceiptRuleRequest
 */
const se_DescribeReceiptRuleRequest = (input: DescribeReceiptRuleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RSN] != null) {
    entries[_RSN] = input[_RSN];
  }
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeReceiptRuleSetRequest
 */
const se_DescribeReceiptRuleSetRequest = (input: DescribeReceiptRuleSetRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RSN] != null) {
    entries[_RSN] = input[_RSN];
  }
  return entries;
};

/**
 * serializeAws_queryDestination
 */
const se_Destination = (input: Destination, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TAo] != null) {
    const memberEntries = se_AddressList(input[_TAo], context);
    if (input[_TAo]?.length === 0) {
      entries.ToAddresses = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ToAddresses.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CA] != null) {
    const memberEntries = se_AddressList(input[_CA], context);
    if (input[_CA]?.length === 0) {
      entries.CcAddresses = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CcAddresses.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_BA] != null) {
    const memberEntries = se_AddressList(input[_BA], context);
    if (input[_BA]?.length === 0) {
      entries.BccAddresses = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `BccAddresses.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryEventDestination
 */
const se_EventDestination = (input: EventDestination, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_MET] != null) {
    const memberEntries = se_EventTypes(input[_MET], context);
    if (input[_MET]?.length === 0) {
      entries.MatchingEventTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MatchingEventTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_KFD] != null) {
    const memberEntries = se_KinesisFirehoseDestination(input[_KFD], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `KinesisFirehoseDestination.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CWD] != null) {
    const memberEntries = se_CloudWatchDestination(input[_CWD], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CloudWatchDestination.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SNSD] != null) {
    const memberEntries = se_SNSDestination(input[_SNSD], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SNSDestination.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryEventTypes
 */
const se_EventTypes = (input: EventType[], context: __SerdeContext): any => {
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
 * serializeAws_queryExtensionField
 */
const se_ExtensionField = (input: ExtensionField, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_Va] != null) {
    entries[_Va] = input[_Va];
  }
  return entries;
};

/**
 * serializeAws_queryExtensionFieldList
 */
const se_ExtensionFieldList = (input: ExtensionField[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_ExtensionField(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryGetCustomVerificationEmailTemplateRequest
 */
const se_GetCustomVerificationEmailTemplateRequest = (
  input: GetCustomVerificationEmailTemplateRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  return entries;
};

/**
 * serializeAws_queryGetIdentityDkimAttributesRequest
 */
const se_GetIdentityDkimAttributesRequest = (input: GetIdentityDkimAttributesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Id] != null) {
    const memberEntries = se_IdentityList(input[_Id], context);
    if (input[_Id]?.length === 0) {
      entries.Identities = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Identities.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryGetIdentityMailFromDomainAttributesRequest
 */
const se_GetIdentityMailFromDomainAttributesRequest = (
  input: GetIdentityMailFromDomainAttributesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_Id] != null) {
    const memberEntries = se_IdentityList(input[_Id], context);
    if (input[_Id]?.length === 0) {
      entries.Identities = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Identities.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryGetIdentityNotificationAttributesRequest
 */
const se_GetIdentityNotificationAttributesRequest = (
  input: GetIdentityNotificationAttributesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_Id] != null) {
    const memberEntries = se_IdentityList(input[_Id], context);
    if (input[_Id]?.length === 0) {
      entries.Identities = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Identities.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryGetIdentityPoliciesRequest
 */
const se_GetIdentityPoliciesRequest = (input: GetIdentityPoliciesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_PNo] != null) {
    const memberEntries = se_PolicyNameList(input[_PNo], context);
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
 * serializeAws_queryGetIdentityVerificationAttributesRequest
 */
const se_GetIdentityVerificationAttributesRequest = (
  input: GetIdentityVerificationAttributesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_Id] != null) {
    const memberEntries = se_IdentityList(input[_Id], context);
    if (input[_Id]?.length === 0) {
      entries.Identities = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Identities.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryGetTemplateRequest
 */
const se_GetTemplateRequest = (input: GetTemplateRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  return entries;
};

/**
 * serializeAws_queryIdentityList
 */
const se_IdentityList = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryKinesisFirehoseDestination
 */
const se_KinesisFirehoseDestination = (input: KinesisFirehoseDestination, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_IAMRARN] != null) {
    entries[_IAMRARN] = input[_IAMRARN];
  }
  if (input[_DSARN] != null) {
    entries[_DSARN] = input[_DSARN];
  }
  return entries;
};

/**
 * serializeAws_queryLambdaAction
 */
const se_LambdaAction = (input: LambdaAction, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TA] != null) {
    entries[_TA] = input[_TA];
  }
  if (input[_FA] != null) {
    entries[_FA] = input[_FA];
  }
  if (input[_IT] != null) {
    entries[_IT] = input[_IT];
  }
  return entries;
};

/**
 * serializeAws_queryListConfigurationSetsRequest
 */
const se_ListConfigurationSetsRequest = (input: ListConfigurationSetsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListCustomVerificationEmailTemplatesRequest
 */
const se_ListCustomVerificationEmailTemplatesRequest = (
  input: ListCustomVerificationEmailTemplatesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  return entries;
};

/**
 * serializeAws_queryListIdentitiesRequest
 */
const se_ListIdentitiesRequest = (input: ListIdentitiesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ITd] != null) {
    entries[_ITd] = input[_ITd];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListIdentityPoliciesRequest
 */
const se_ListIdentityPoliciesRequest = (input: ListIdentityPoliciesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  return entries;
};

/**
 * serializeAws_queryListReceiptFiltersRequest
 */
const se_ListReceiptFiltersRequest = (input: ListReceiptFiltersRequest, context: __SerdeContext): any => {
  const entries: any = {};
  return entries;
};

/**
 * serializeAws_queryListReceiptRuleSetsRequest
 */
const se_ListReceiptRuleSetsRequest = (input: ListReceiptRuleSetsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  return entries;
};

/**
 * serializeAws_queryListTemplatesRequest
 */
const se_ListTemplatesRequest = (input: ListTemplatesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryMessage
 */
const se_Message = (input: Message, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Su] != null) {
    const memberEntries = se_Content(input[_Su], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Subject.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_B] != null) {
    const memberEntries = se_Body(input[_B], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Body.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryMessageDsn
 */
const se_MessageDsn = (input: MessageDsn, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RM] != null) {
    entries[_RM] = input[_RM];
  }
  if (input[_AD] != null) {
    entries[_AD] = __serializeDateTime(input[_AD]);
  }
  if (input[_EF] != null) {
    const memberEntries = se_ExtensionFieldList(input[_EF], context);
    if (input[_EF]?.length === 0) {
      entries.ExtensionFields = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExtensionFields.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryMessageTag
 */
const se_MessageTag = (input: MessageTag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_Va] != null) {
    entries[_Va] = input[_Va];
  }
  return entries;
};

/**
 * serializeAws_queryMessageTagList
 */
const se_MessageTagList = (input: MessageTag[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_MessageTag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryPolicyNameList
 */
const se_PolicyNameList = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryPutConfigurationSetDeliveryOptionsRequest
 */
const se_PutConfigurationSetDeliveryOptionsRequest = (
  input: PutConfigurationSetDeliveryOptionsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_DO] != null) {
    const memberEntries = se_DeliveryOptions(input[_DO], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DeliveryOptions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryPutIdentityPolicyRequest
 */
const se_PutIdentityPolicyRequest = (input: PutIdentityPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  return entries;
};

/**
 * serializeAws_queryRawMessage
 */
const se_RawMessage = (input: RawMessage, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Da] != null) {
    entries[_Da] = context.base64Encoder(input[_Da]);
  }
  return entries;
};

/**
 * serializeAws_queryReceiptAction
 */
const se_ReceiptAction = (input: ReceiptAction, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SA] != null) {
    const memberEntries = se_S3Action(input[_SA], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `S3Action.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_BAo] != null) {
    const memberEntries = se_BounceAction(input[_BAo], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `BounceAction.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_WA] != null) {
    const memberEntries = se_WorkmailAction(input[_WA], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `WorkmailAction.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_LA] != null) {
    const memberEntries = se_LambdaAction(input[_LA], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LambdaAction.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SAt] != null) {
    const memberEntries = se_StopAction(input[_SAt], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StopAction.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AHA] != null) {
    const memberEntries = se_AddHeaderAction(input[_AHA], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AddHeaderAction.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SNSA] != null) {
    const memberEntries = se_SNSAction(input[_SNSA], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SNSAction.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CAo] != null) {
    const memberEntries = se_ConnectAction(input[_CAo], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ConnectAction.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryReceiptActionsList
 */
const se_ReceiptActionsList = (input: ReceiptAction[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_ReceiptAction(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryReceiptFilter
 */
const se_ReceiptFilter = (input: ReceiptFilter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_IF] != null) {
    const memberEntries = se_ReceiptIpFilter(input[_IF], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `IpFilter.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryReceiptIpFilter
 */
const se_ReceiptIpFilter = (input: ReceiptIpFilter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_Ci] != null) {
    entries[_Ci] = input[_Ci];
  }
  return entries;
};

/**
 * serializeAws_queryReceiptRule
 */
const se_ReceiptRule = (input: ReceiptRule, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_TP] != null) {
    entries[_TP] = input[_TP];
  }
  if (input[_Re] != null) {
    const memberEntries = se_RecipientsList(input[_Re], context);
    if (input[_Re]?.length === 0) {
      entries.Recipients = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Recipients.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Ac] != null) {
    const memberEntries = se_ReceiptActionsList(input[_Ac], context);
    if (input[_Ac]?.length === 0) {
      entries.Actions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Actions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SEc] != null) {
    entries[_SEc] = input[_SEc];
  }
  return entries;
};

/**
 * serializeAws_queryReceiptRuleNamesList
 */
const se_ReceiptRuleNamesList = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryRecipientDsnFields
 */
const se_RecipientDsnFields = (input: RecipientDsnFields, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_FR] != null) {
    entries[_FR] = input[_FR];
  }
  if (input[_A] != null) {
    entries[_A] = input[_A];
  }
  if (input[_RMe] != null) {
    entries[_RMe] = input[_RMe];
  }
  if (input[_St] != null) {
    entries[_St] = input[_St];
  }
  if (input[_DCi] != null) {
    entries[_DCi] = input[_DCi];
  }
  if (input[_LAD] != null) {
    entries[_LAD] = __serializeDateTime(input[_LAD]);
  }
  if (input[_EF] != null) {
    const memberEntries = se_ExtensionFieldList(input[_EF], context);
    if (input[_EF]?.length === 0) {
      entries.ExtensionFields = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExtensionFields.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryRecipientsList
 */
const se_RecipientsList = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryReorderReceiptRuleSetRequest
 */
const se_ReorderReceiptRuleSetRequest = (input: ReorderReceiptRuleSetRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RSN] != null) {
    entries[_RSN] = input[_RSN];
  }
  if (input[_RNu] != null) {
    const memberEntries = se_ReceiptRuleNamesList(input[_RNu], context);
    if (input[_RNu]?.length === 0) {
      entries.RuleNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RuleNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryS3Action
 */
const se_S3Action = (input: S3Action, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TA] != null) {
    entries[_TA] = input[_TA];
  }
  if (input[_BN] != null) {
    entries[_BN] = input[_BN];
  }
  if (input[_OKP] != null) {
    entries[_OKP] = input[_OKP];
  }
  if (input[_KKA] != null) {
    entries[_KKA] = input[_KKA];
  }
  if (input[_IRA] != null) {
    entries[_IRA] = input[_IRA];
  }
  return entries;
};

/**
 * serializeAws_querySendBounceRequest
 */
const se_SendBounceRequest = (input: SendBounceRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_OMI] != null) {
    entries[_OMI] = input[_OMI];
  }
  if (input[_BS] != null) {
    entries[_BS] = input[_BS];
  }
  if (input[_Ex] != null) {
    entries[_Ex] = input[_Ex];
  }
  if (input[_MD] != null) {
    const memberEntries = se_MessageDsn(input[_MD], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MessageDsn.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_BRIL] != null) {
    const memberEntries = se_BouncedRecipientInfoList(input[_BRIL], context);
    if (input[_BRIL]?.length === 0) {
      entries.BouncedRecipientInfoList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `BouncedRecipientInfoList.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_BSA] != null) {
    entries[_BSA] = input[_BSA];
  }
  return entries;
};

/**
 * serializeAws_querySendBulkTemplatedEmailRequest
 */
const se_SendBulkTemplatedEmailRequest = (input: SendBulkTemplatedEmailRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_So] != null) {
    entries[_So] = input[_So];
  }
  if (input[_SAo] != null) {
    entries[_SAo] = input[_SAo];
  }
  if (input[_RTA] != null) {
    const memberEntries = se_AddressList(input[_RTA], context);
    if (input[_RTA]?.length === 0) {
      entries.ReplyToAddresses = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplyToAddresses.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RP] != null) {
    entries[_RP] = input[_RP];
  }
  if (input[_RPA] != null) {
    entries[_RPA] = input[_RPA];
  }
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_DTe] != null) {
    const memberEntries = se_MessageTagList(input[_DTe], context);
    if (input[_DTe]?.length === 0) {
      entries.DefaultTags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DefaultTags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Te] != null) {
    entries[_Te] = input[_Te];
  }
  if (input[_TAe] != null) {
    entries[_TAe] = input[_TAe];
  }
  if (input[_DTD] != null) {
    entries[_DTD] = input[_DTD];
  }
  if (input[_De] != null) {
    const memberEntries = se_BulkEmailDestinationList(input[_De], context);
    if (input[_De]?.length === 0) {
      entries.Destinations = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Destinations.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_querySendCustomVerificationEmailRequest
 */
const se_SendCustomVerificationEmailRequest = (
  input: SendCustomVerificationEmailRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_EA] != null) {
    entries[_EA] = input[_EA];
  }
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  return entries;
};

/**
 * serializeAws_querySendEmailRequest
 */
const se_SendEmailRequest = (input: SendEmailRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_So] != null) {
    entries[_So] = input[_So];
  }
  if (input[_D] != null) {
    const memberEntries = se_Destination(input[_D], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Destination.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_M] != null) {
    const memberEntries = se_Message(input[_M], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Message.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RTA] != null) {
    const memberEntries = se_AddressList(input[_RTA], context);
    if (input[_RTA]?.length === 0) {
      entries.ReplyToAddresses = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplyToAddresses.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RP] != null) {
    entries[_RP] = input[_RP];
  }
  if (input[_SAo] != null) {
    entries[_SAo] = input[_SAo];
  }
  if (input[_RPA] != null) {
    entries[_RPA] = input[_RPA];
  }
  if (input[_Ta] != null) {
    const memberEntries = se_MessageTagList(input[_Ta], context);
    if (input[_Ta]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  return entries;
};

/**
 * serializeAws_querySendRawEmailRequest
 */
const se_SendRawEmailRequest = (input: SendRawEmailRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_So] != null) {
    entries[_So] = input[_So];
  }
  if (input[_De] != null) {
    const memberEntries = se_AddressList(input[_De], context);
    if (input[_De]?.length === 0) {
      entries.Destinations = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Destinations.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RMa] != null) {
    const memberEntries = se_RawMessage(input[_RMa], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RawMessage.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_FAr] != null) {
    entries[_FAr] = input[_FAr];
  }
  if (input[_SAo] != null) {
    entries[_SAo] = input[_SAo];
  }
  if (input[_RPA] != null) {
    entries[_RPA] = input[_RPA];
  }
  if (input[_Ta] != null) {
    const memberEntries = se_MessageTagList(input[_Ta], context);
    if (input[_Ta]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  return entries;
};

/**
 * serializeAws_querySendTemplatedEmailRequest
 */
const se_SendTemplatedEmailRequest = (input: SendTemplatedEmailRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_So] != null) {
    entries[_So] = input[_So];
  }
  if (input[_D] != null) {
    const memberEntries = se_Destination(input[_D], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Destination.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RTA] != null) {
    const memberEntries = se_AddressList(input[_RTA], context);
    if (input[_RTA]?.length === 0) {
      entries.ReplyToAddresses = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ReplyToAddresses.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RP] != null) {
    entries[_RP] = input[_RP];
  }
  if (input[_SAo] != null) {
    entries[_SAo] = input[_SAo];
  }
  if (input[_RPA] != null) {
    entries[_RPA] = input[_RPA];
  }
  if (input[_Ta] != null) {
    const memberEntries = se_MessageTagList(input[_Ta], context);
    if (input[_Ta]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_Te] != null) {
    entries[_Te] = input[_Te];
  }
  if (input[_TAe] != null) {
    entries[_TAe] = input[_TAe];
  }
  if (input[_TD] != null) {
    entries[_TD] = input[_TD];
  }
  return entries;
};

/**
 * serializeAws_querySetActiveReceiptRuleSetRequest
 */
const se_SetActiveReceiptRuleSetRequest = (input: SetActiveReceiptRuleSetRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RSN] != null) {
    entries[_RSN] = input[_RSN];
  }
  return entries;
};

/**
 * serializeAws_querySetIdentityDkimEnabledRequest
 */
const se_SetIdentityDkimEnabledRequest = (input: SetIdentityDkimEnabledRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_DE] != null) {
    entries[_DE] = input[_DE];
  }
  return entries;
};

/**
 * serializeAws_querySetIdentityFeedbackForwardingEnabledRequest
 */
const se_SetIdentityFeedbackForwardingEnabledRequest = (
  input: SetIdentityFeedbackForwardingEnabledRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_FE] != null) {
    entries[_FE] = input[_FE];
  }
  return entries;
};

/**
 * serializeAws_querySetIdentityHeadersInNotificationsEnabledRequest
 */
const se_SetIdentityHeadersInNotificationsEnabledRequest = (
  input: SetIdentityHeadersInNotificationsEnabledRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_NTo] != null) {
    entries[_NTo] = input[_NTo];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  return entries;
};

/**
 * serializeAws_querySetIdentityMailFromDomainRequest
 */
const se_SetIdentityMailFromDomainRequest = (input: SetIdentityMailFromDomainRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_MFD] != null) {
    entries[_MFD] = input[_MFD];
  }
  if (input[_BOMXF] != null) {
    entries[_BOMXF] = input[_BOMXF];
  }
  return entries;
};

/**
 * serializeAws_querySetIdentityNotificationTopicRequest
 */
const se_SetIdentityNotificationTopicRequest = (
  input: SetIdentityNotificationTopicRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_NTo] != null) {
    entries[_NTo] = input[_NTo];
  }
  if (input[_ST] != null) {
    entries[_ST] = input[_ST];
  }
  return entries;
};

/**
 * serializeAws_querySetReceiptRulePositionRequest
 */
const se_SetReceiptRulePositionRequest = (input: SetReceiptRulePositionRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RSN] != null) {
    entries[_RSN] = input[_RSN];
  }
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  if (input[_Af] != null) {
    entries[_Af] = input[_Af];
  }
  return entries;
};

/**
 * serializeAws_querySNSAction
 */
const se_SNSAction = (input: SNSAction, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TA] != null) {
    entries[_TA] = input[_TA];
  }
  if (input[_En] != null) {
    entries[_En] = input[_En];
  }
  return entries;
};

/**
 * serializeAws_querySNSDestination
 */
const se_SNSDestination = (input: SNSDestination, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TARN] != null) {
    entries[_TARN] = input[_TARN];
  }
  return entries;
};

/**
 * serializeAws_queryStopAction
 */
const se_StopAction = (input: StopAction, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Sc] != null) {
    entries[_Sc] = input[_Sc];
  }
  if (input[_TA] != null) {
    entries[_TA] = input[_TA];
  }
  return entries;
};

/**
 * serializeAws_queryTemplate
 */
const se_Template = (input: Template, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_SP] != null) {
    entries[_SP] = input[_SP];
  }
  if (input[_TPe] != null) {
    entries[_TPe] = input[_TPe];
  }
  if (input[_HP] != null) {
    entries[_HP] = input[_HP];
  }
  return entries;
};

/**
 * serializeAws_queryTestRenderTemplateRequest
 */
const se_TestRenderTemplateRequest = (input: TestRenderTemplateRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_TD] != null) {
    entries[_TD] = input[_TD];
  }
  return entries;
};

/**
 * serializeAws_queryTrackingOptions
 */
const se_TrackingOptions = (input: TrackingOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CRD] != null) {
    entries[_CRD] = input[_CRD];
  }
  return entries;
};

/**
 * serializeAws_queryUpdateAccountSendingEnabledRequest
 */
const se_UpdateAccountSendingEnabledRequest = (
  input: UpdateAccountSendingEnabledRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  return entries;
};

/**
 * serializeAws_queryUpdateConfigurationSetEventDestinationRequest
 */
const se_UpdateConfigurationSetEventDestinationRequest = (
  input: UpdateConfigurationSetEventDestinationRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_ED] != null) {
    const memberEntries = se_EventDestination(input[_ED], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EventDestination.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryUpdateConfigurationSetReputationMetricsEnabledRequest
 */
const se_UpdateConfigurationSetReputationMetricsEnabledRequest = (
  input: UpdateConfigurationSetReputationMetricsEnabledRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  return entries;
};

/**
 * serializeAws_queryUpdateConfigurationSetSendingEnabledRequest
 */
const se_UpdateConfigurationSetSendingEnabledRequest = (
  input: UpdateConfigurationSetSendingEnabledRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  return entries;
};

/**
 * serializeAws_queryUpdateConfigurationSetTrackingOptionsRequest
 */
const se_UpdateConfigurationSetTrackingOptionsRequest = (
  input: UpdateConfigurationSetTrackingOptionsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_CSN] != null) {
    entries[_CSN] = input[_CSN];
  }
  if (input[_TO] != null) {
    const memberEntries = se_TrackingOptions(input[_TO], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TrackingOptions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryUpdateCustomVerificationEmailTemplateRequest
 */
const se_UpdateCustomVerificationEmailTemplateRequest = (
  input: UpdateCustomVerificationEmailTemplateRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_FEA] != null) {
    entries[_FEA] = input[_FEA];
  }
  if (input[_TS] != null) {
    entries[_TS] = input[_TS];
  }
  if (input[_TC] != null) {
    entries[_TC] = input[_TC];
  }
  if (input[_SRURL] != null) {
    entries[_SRURL] = input[_SRURL];
  }
  if (input[_FRURL] != null) {
    entries[_FRURL] = input[_FRURL];
  }
  return entries;
};

/**
 * serializeAws_queryUpdateReceiptRuleRequest
 */
const se_UpdateReceiptRuleRequest = (input: UpdateReceiptRuleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RSN] != null) {
    entries[_RSN] = input[_RSN];
  }
  if (input[_Ru] != null) {
    const memberEntries = se_ReceiptRule(input[_Ru], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Rule.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryUpdateTemplateRequest
 */
const se_UpdateTemplateRequest = (input: UpdateTemplateRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Te] != null) {
    const memberEntries = se_Template(input[_Te], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Template.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryVerifyDomainDkimRequest
 */
const se_VerifyDomainDkimRequest = (input: VerifyDomainDkimRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Do] != null) {
    entries[_Do] = input[_Do];
  }
  return entries;
};

/**
 * serializeAws_queryVerifyDomainIdentityRequest
 */
const se_VerifyDomainIdentityRequest = (input: VerifyDomainIdentityRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Do] != null) {
    entries[_Do] = input[_Do];
  }
  return entries;
};

/**
 * serializeAws_queryVerifyEmailAddressRequest
 */
const se_VerifyEmailAddressRequest = (input: VerifyEmailAddressRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_EA] != null) {
    entries[_EA] = input[_EA];
  }
  return entries;
};

/**
 * serializeAws_queryVerifyEmailIdentityRequest
 */
const se_VerifyEmailIdentityRequest = (input: VerifyEmailIdentityRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_EA] != null) {
    entries[_EA] = input[_EA];
  }
  return entries;
};

/**
 * serializeAws_queryWorkmailAction
 */
const se_WorkmailAction = (input: WorkmailAction, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TA] != null) {
    entries[_TA] = input[_TA];
  }
  if (input[_OA] != null) {
    entries[_OA] = input[_OA];
  }
  return entries;
};

/**
 * deserializeAws_queryAccountSendingPausedException
 */
const de_AccountSendingPausedException = (output: any, context: __SerdeContext): AccountSendingPausedException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryAddHeaderAction
 */
const de_AddHeaderAction = (output: any, context: __SerdeContext): AddHeaderAction => {
  const contents: any = {};
  if (output[_HN] != null) {
    contents[_HN] = __expectString(output[_HN]);
  }
  if (output[_HV] != null) {
    contents[_HV] = __expectString(output[_HV]);
  }
  return contents;
};

/**
 * deserializeAws_queryAddressList
 */
const de_AddressList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryAlreadyExistsException
 */
const de_AlreadyExistsException = (output: any, context: __SerdeContext): AlreadyExistsException => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryBounceAction
 */
const de_BounceAction = (output: any, context: __SerdeContext): BounceAction => {
  const contents: any = {};
  if (output[_TA] != null) {
    contents[_TA] = __expectString(output[_TA]);
  }
  if (output[_SRC] != null) {
    contents[_SRC] = __expectString(output[_SRC]);
  }
  if (output[_SC] != null) {
    contents[_SC] = __expectString(output[_SC]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  return contents;
};

/**
 * deserializeAws_queryBulkEmailDestinationStatus
 */
const de_BulkEmailDestinationStatus = (output: any, context: __SerdeContext): BulkEmailDestinationStatus => {
  const contents: any = {};
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_Er] != null) {
    contents[_Er] = __expectString(output[_Er]);
  }
  if (output[_MIe] != null) {
    contents[_MIe] = __expectString(output[_MIe]);
  }
  return contents;
};

/**
 * deserializeAws_queryBulkEmailDestinationStatusList
 */
const de_BulkEmailDestinationStatusList = (output: any, context: __SerdeContext): BulkEmailDestinationStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BulkEmailDestinationStatus(entry, context);
    });
};

/**
 * deserializeAws_queryCannotDeleteException
 */
const de_CannotDeleteException = (output: any, context: __SerdeContext): CannotDeleteException => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryCloneReceiptRuleSetResponse
 */
const de_CloneReceiptRuleSetResponse = (output: any, context: __SerdeContext): CloneReceiptRuleSetResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryCloudWatchDestination
 */
const de_CloudWatchDestination = (output: any, context: __SerdeContext): CloudWatchDestination => {
  const contents: any = {};
  if (output.DimensionConfigurations === "") {
    contents[_DC] = [];
  } else if (output[_DC] != null && output[_DC][_me] != null) {
    contents[_DC] = de_CloudWatchDimensionConfigurations(__getArrayIfSingleItem(output[_DC][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryCloudWatchDimensionConfiguration
 */
const de_CloudWatchDimensionConfiguration = (
  output: any,
  context: __SerdeContext
): CloudWatchDimensionConfiguration => {
  const contents: any = {};
  if (output[_DN] != null) {
    contents[_DN] = __expectString(output[_DN]);
  }
  if (output[_DVS] != null) {
    contents[_DVS] = __expectString(output[_DVS]);
  }
  if (output[_DDV] != null) {
    contents[_DDV] = __expectString(output[_DDV]);
  }
  return contents;
};

/**
 * deserializeAws_queryCloudWatchDimensionConfigurations
 */
const de_CloudWatchDimensionConfigurations = (
  output: any,
  context: __SerdeContext
): CloudWatchDimensionConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CloudWatchDimensionConfiguration(entry, context);
    });
};

/**
 * deserializeAws_queryConfigurationSet
 */
const de_ConfigurationSet = (output: any, context: __SerdeContext): ConfigurationSet => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  return contents;
};

/**
 * deserializeAws_queryConfigurationSetAlreadyExistsException
 */
const de_ConfigurationSetAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ConfigurationSetAlreadyExistsException => {
  const contents: any = {};
  if (output[_CSN] != null) {
    contents[_CSN] = __expectString(output[_CSN]);
  }
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryConfigurationSetDoesNotExistException
 */
const de_ConfigurationSetDoesNotExistException = (
  output: any,
  context: __SerdeContext
): ConfigurationSetDoesNotExistException => {
  const contents: any = {};
  if (output[_CSN] != null) {
    contents[_CSN] = __expectString(output[_CSN]);
  }
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryConfigurationSets
 */
const de_ConfigurationSets = (output: any, context: __SerdeContext): ConfigurationSet[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConfigurationSet(entry, context);
    });
};

/**
 * deserializeAws_queryConfigurationSetSendingPausedException
 */
const de_ConfigurationSetSendingPausedException = (
  output: any,
  context: __SerdeContext
): ConfigurationSetSendingPausedException => {
  const contents: any = {};
  if (output[_CSN] != null) {
    contents[_CSN] = __expectString(output[_CSN]);
  }
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryConnectAction
 */
const de_ConnectAction = (output: any, context: __SerdeContext): ConnectAction => {
  const contents: any = {};
  if (output[_IARN] != null) {
    contents[_IARN] = __expectString(output[_IARN]);
  }
  if (output[_IAMRARN] != null) {
    contents[_IAMRARN] = __expectString(output[_IAMRARN]);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateConfigurationSetEventDestinationResponse
 */
const de_CreateConfigurationSetEventDestinationResponse = (
  output: any,
  context: __SerdeContext
): CreateConfigurationSetEventDestinationResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryCreateConfigurationSetResponse
 */
const de_CreateConfigurationSetResponse = (output: any, context: __SerdeContext): CreateConfigurationSetResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryCreateConfigurationSetTrackingOptionsResponse
 */
const de_CreateConfigurationSetTrackingOptionsResponse = (
  output: any,
  context: __SerdeContext
): CreateConfigurationSetTrackingOptionsResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryCreateReceiptFilterResponse
 */
const de_CreateReceiptFilterResponse = (output: any, context: __SerdeContext): CreateReceiptFilterResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryCreateReceiptRuleResponse
 */
const de_CreateReceiptRuleResponse = (output: any, context: __SerdeContext): CreateReceiptRuleResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryCreateReceiptRuleSetResponse
 */
const de_CreateReceiptRuleSetResponse = (output: any, context: __SerdeContext): CreateReceiptRuleSetResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryCreateTemplateResponse
 */
const de_CreateTemplateResponse = (output: any, context: __SerdeContext): CreateTemplateResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryCustomVerificationEmailInvalidContentException
 */
const de_CustomVerificationEmailInvalidContentException = (
  output: any,
  context: __SerdeContext
): CustomVerificationEmailInvalidContentException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryCustomVerificationEmailTemplate
 */
const de_CustomVerificationEmailTemplate = (output: any, context: __SerdeContext): CustomVerificationEmailTemplate => {
  const contents: any = {};
  if (output[_TN] != null) {
    contents[_TN] = __expectString(output[_TN]);
  }
  if (output[_FEA] != null) {
    contents[_FEA] = __expectString(output[_FEA]);
  }
  if (output[_TS] != null) {
    contents[_TS] = __expectString(output[_TS]);
  }
  if (output[_SRURL] != null) {
    contents[_SRURL] = __expectString(output[_SRURL]);
  }
  if (output[_FRURL] != null) {
    contents[_FRURL] = __expectString(output[_FRURL]);
  }
  return contents;
};

/**
 * deserializeAws_queryCustomVerificationEmailTemplateAlreadyExistsException
 */
const de_CustomVerificationEmailTemplateAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): CustomVerificationEmailTemplateAlreadyExistsException => {
  const contents: any = {};
  if (output[_CVETN] != null) {
    contents[_CVETN] = __expectString(output[_CVETN]);
  }
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryCustomVerificationEmailTemplateDoesNotExistException
 */
const de_CustomVerificationEmailTemplateDoesNotExistException = (
  output: any,
  context: __SerdeContext
): CustomVerificationEmailTemplateDoesNotExistException => {
  const contents: any = {};
  if (output[_CVETN] != null) {
    contents[_CVETN] = __expectString(output[_CVETN]);
  }
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryCustomVerificationEmailTemplates
 */
const de_CustomVerificationEmailTemplates = (
  output: any,
  context: __SerdeContext
): CustomVerificationEmailTemplate[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CustomVerificationEmailTemplate(entry, context);
    });
};

/**
 * deserializeAws_queryDeleteConfigurationSetEventDestinationResponse
 */
const de_DeleteConfigurationSetEventDestinationResponse = (
  output: any,
  context: __SerdeContext
): DeleteConfigurationSetEventDestinationResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDeleteConfigurationSetResponse
 */
const de_DeleteConfigurationSetResponse = (output: any, context: __SerdeContext): DeleteConfigurationSetResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDeleteConfigurationSetTrackingOptionsResponse
 */
const de_DeleteConfigurationSetTrackingOptionsResponse = (
  output: any,
  context: __SerdeContext
): DeleteConfigurationSetTrackingOptionsResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDeleteIdentityPolicyResponse
 */
const de_DeleteIdentityPolicyResponse = (output: any, context: __SerdeContext): DeleteIdentityPolicyResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDeleteIdentityResponse
 */
const de_DeleteIdentityResponse = (output: any, context: __SerdeContext): DeleteIdentityResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDeleteReceiptFilterResponse
 */
const de_DeleteReceiptFilterResponse = (output: any, context: __SerdeContext): DeleteReceiptFilterResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDeleteReceiptRuleResponse
 */
const de_DeleteReceiptRuleResponse = (output: any, context: __SerdeContext): DeleteReceiptRuleResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDeleteReceiptRuleSetResponse
 */
const de_DeleteReceiptRuleSetResponse = (output: any, context: __SerdeContext): DeleteReceiptRuleSetResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDeleteTemplateResponse
 */
const de_DeleteTemplateResponse = (output: any, context: __SerdeContext): DeleteTemplateResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDeliveryOptions
 */
const de_DeliveryOptions = (output: any, context: __SerdeContext): DeliveryOptions => {
  const contents: any = {};
  if (output[_TP] != null) {
    contents[_TP] = __expectString(output[_TP]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeActiveReceiptRuleSetResponse
 */
const de_DescribeActiveReceiptRuleSetResponse = (
  output: any,
  context: __SerdeContext
): DescribeActiveReceiptRuleSetResponse => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = de_ReceiptRuleSetMetadata(output[_Me], context);
  }
  if (output.Rules === "") {
    contents[_Rul] = [];
  } else if (output[_Rul] != null && output[_Rul][_me] != null) {
    contents[_Rul] = de_ReceiptRulesList(__getArrayIfSingleItem(output[_Rul][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeConfigurationSetResponse
 */
const de_DescribeConfigurationSetResponse = (
  output: any,
  context: __SerdeContext
): DescribeConfigurationSetResponse => {
  const contents: any = {};
  if (output[_CS] != null) {
    contents[_CS] = de_ConfigurationSet(output[_CS], context);
  }
  if (output.EventDestinations === "") {
    contents[_EDv] = [];
  } else if (output[_EDv] != null && output[_EDv][_me] != null) {
    contents[_EDv] = de_EventDestinations(__getArrayIfSingleItem(output[_EDv][_me]), context);
  }
  if (output[_TO] != null) {
    contents[_TO] = de_TrackingOptions(output[_TO], context);
  }
  if (output[_DO] != null) {
    contents[_DO] = de_DeliveryOptions(output[_DO], context);
  }
  if (output[_RO] != null) {
    contents[_RO] = de_ReputationOptions(output[_RO], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeReceiptRuleResponse
 */
const de_DescribeReceiptRuleResponse = (output: any, context: __SerdeContext): DescribeReceiptRuleResponse => {
  const contents: any = {};
  if (output[_Ru] != null) {
    contents[_Ru] = de_ReceiptRule(output[_Ru], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeReceiptRuleSetResponse
 */
const de_DescribeReceiptRuleSetResponse = (output: any, context: __SerdeContext): DescribeReceiptRuleSetResponse => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = de_ReceiptRuleSetMetadata(output[_Me], context);
  }
  if (output.Rules === "") {
    contents[_Rul] = [];
  } else if (output[_Rul] != null && output[_Rul][_me] != null) {
    contents[_Rul] = de_ReceiptRulesList(__getArrayIfSingleItem(output[_Rul][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDkimAttributes
 */
const de_DkimAttributes = (output: any, context: __SerdeContext): Record<string, IdentityDkimAttributes> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = de_IdentityDkimAttributes(pair["value"], context);
    return acc;
  }, {});
};

/**
 * deserializeAws_queryEventDestination
 */
const de_EventDestination = (output: any, context: __SerdeContext): EventDestination => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_E] != null) {
    contents[_E] = __parseBoolean(output[_E]);
  }
  if (output.MatchingEventTypes === "") {
    contents[_MET] = [];
  } else if (output[_MET] != null && output[_MET][_me] != null) {
    contents[_MET] = de_EventTypes(__getArrayIfSingleItem(output[_MET][_me]), context);
  }
  if (output[_KFD] != null) {
    contents[_KFD] = de_KinesisFirehoseDestination(output[_KFD], context);
  }
  if (output[_CWD] != null) {
    contents[_CWD] = de_CloudWatchDestination(output[_CWD], context);
  }
  if (output[_SNSD] != null) {
    contents[_SNSD] = de_SNSDestination(output[_SNSD], context);
  }
  return contents;
};

/**
 * deserializeAws_queryEventDestinationAlreadyExistsException
 */
const de_EventDestinationAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): EventDestinationAlreadyExistsException => {
  const contents: any = {};
  if (output[_CSN] != null) {
    contents[_CSN] = __expectString(output[_CSN]);
  }
  if (output[_EDN] != null) {
    contents[_EDN] = __expectString(output[_EDN]);
  }
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryEventDestinationDoesNotExistException
 */
const de_EventDestinationDoesNotExistException = (
  output: any,
  context: __SerdeContext
): EventDestinationDoesNotExistException => {
  const contents: any = {};
  if (output[_CSN] != null) {
    contents[_CSN] = __expectString(output[_CSN]);
  }
  if (output[_EDN] != null) {
    contents[_EDN] = __expectString(output[_EDN]);
  }
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryEventDestinations
 */
const de_EventDestinations = (output: any, context: __SerdeContext): EventDestination[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EventDestination(entry, context);
    });
};

/**
 * deserializeAws_queryEventTypes
 */
const de_EventTypes = (output: any, context: __SerdeContext): EventType[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryFromEmailAddressNotVerifiedException
 */
const de_FromEmailAddressNotVerifiedException = (
  output: any,
  context: __SerdeContext
): FromEmailAddressNotVerifiedException => {
  const contents: any = {};
  if (output[_FEA] != null) {
    contents[_FEA] = __expectString(output[_FEA]);
  }
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetAccountSendingEnabledResponse
 */
const de_GetAccountSendingEnabledResponse = (
  output: any,
  context: __SerdeContext
): GetAccountSendingEnabledResponse => {
  const contents: any = {};
  if (output[_E] != null) {
    contents[_E] = __parseBoolean(output[_E]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetCustomVerificationEmailTemplateResponse
 */
const de_GetCustomVerificationEmailTemplateResponse = (
  output: any,
  context: __SerdeContext
): GetCustomVerificationEmailTemplateResponse => {
  const contents: any = {};
  if (output[_TN] != null) {
    contents[_TN] = __expectString(output[_TN]);
  }
  if (output[_FEA] != null) {
    contents[_FEA] = __expectString(output[_FEA]);
  }
  if (output[_TS] != null) {
    contents[_TS] = __expectString(output[_TS]);
  }
  if (output[_TC] != null) {
    contents[_TC] = __expectString(output[_TC]);
  }
  if (output[_SRURL] != null) {
    contents[_SRURL] = __expectString(output[_SRURL]);
  }
  if (output[_FRURL] != null) {
    contents[_FRURL] = __expectString(output[_FRURL]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetIdentityDkimAttributesResponse
 */
const de_GetIdentityDkimAttributesResponse = (
  output: any,
  context: __SerdeContext
): GetIdentityDkimAttributesResponse => {
  const contents: any = {};
  if (output.DkimAttributes === "") {
    contents[_DA] = {};
  } else if (output[_DA] != null && output[_DA][_e] != null) {
    contents[_DA] = de_DkimAttributes(__getArrayIfSingleItem(output[_DA][_e]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetIdentityMailFromDomainAttributesResponse
 */
const de_GetIdentityMailFromDomainAttributesResponse = (
  output: any,
  context: __SerdeContext
): GetIdentityMailFromDomainAttributesResponse => {
  const contents: any = {};
  if (output.MailFromDomainAttributes === "") {
    contents[_MFDA] = {};
  } else if (output[_MFDA] != null && output[_MFDA][_e] != null) {
    contents[_MFDA] = de_MailFromDomainAttributes(__getArrayIfSingleItem(output[_MFDA][_e]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetIdentityNotificationAttributesResponse
 */
const de_GetIdentityNotificationAttributesResponse = (
  output: any,
  context: __SerdeContext
): GetIdentityNotificationAttributesResponse => {
  const contents: any = {};
  if (output.NotificationAttributes === "") {
    contents[_NA] = {};
  } else if (output[_NA] != null && output[_NA][_e] != null) {
    contents[_NA] = de_NotificationAttributes(__getArrayIfSingleItem(output[_NA][_e]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetIdentityPoliciesResponse
 */
const de_GetIdentityPoliciesResponse = (output: any, context: __SerdeContext): GetIdentityPoliciesResponse => {
  const contents: any = {};
  if (output.Policies === "") {
    contents[_Po] = {};
  } else if (output[_Po] != null && output[_Po][_e] != null) {
    contents[_Po] = de_PolicyMap(__getArrayIfSingleItem(output[_Po][_e]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetIdentityVerificationAttributesResponse
 */
const de_GetIdentityVerificationAttributesResponse = (
  output: any,
  context: __SerdeContext
): GetIdentityVerificationAttributesResponse => {
  const contents: any = {};
  if (output.VerificationAttributes === "") {
    contents[_VA] = {};
  } else if (output[_VA] != null && output[_VA][_e] != null) {
    contents[_VA] = de_VerificationAttributes(__getArrayIfSingleItem(output[_VA][_e]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetSendQuotaResponse
 */
const de_GetSendQuotaResponse = (output: any, context: __SerdeContext): GetSendQuotaResponse => {
  const contents: any = {};
  if (output[_MHS] != null) {
    contents[_MHS] = __strictParseFloat(output[_MHS]) as number;
  }
  if (output[_MSR] != null) {
    contents[_MSR] = __strictParseFloat(output[_MSR]) as number;
  }
  if (output[_SLH] != null) {
    contents[_SLH] = __strictParseFloat(output[_SLH]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryGetSendStatisticsResponse
 */
const de_GetSendStatisticsResponse = (output: any, context: __SerdeContext): GetSendStatisticsResponse => {
  const contents: any = {};
  if (output.SendDataPoints === "") {
    contents[_SDP] = [];
  } else if (output[_SDP] != null && output[_SDP][_me] != null) {
    contents[_SDP] = de_SendDataPointList(__getArrayIfSingleItem(output[_SDP][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetTemplateResponse
 */
const de_GetTemplateResponse = (output: any, context: __SerdeContext): GetTemplateResponse => {
  const contents: any = {};
  if (output[_Te] != null) {
    contents[_Te] = de_Template(output[_Te], context);
  }
  return contents;
};

/**
 * deserializeAws_queryIdentityDkimAttributes
 */
const de_IdentityDkimAttributes = (output: any, context: __SerdeContext): IdentityDkimAttributes => {
  const contents: any = {};
  if (output[_DE] != null) {
    contents[_DE] = __parseBoolean(output[_DE]);
  }
  if (output[_DVSk] != null) {
    contents[_DVSk] = __expectString(output[_DVSk]);
  }
  if (output.DkimTokens === "") {
    contents[_DTk] = [];
  } else if (output[_DTk] != null && output[_DTk][_me] != null) {
    contents[_DTk] = de_VerificationTokenList(__getArrayIfSingleItem(output[_DTk][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryIdentityList
 */
const de_IdentityList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryIdentityMailFromDomainAttributes
 */
const de_IdentityMailFromDomainAttributes = (
  output: any,
  context: __SerdeContext
): IdentityMailFromDomainAttributes => {
  const contents: any = {};
  if (output[_MFD] != null) {
    contents[_MFD] = __expectString(output[_MFD]);
  }
  if (output[_MFDS] != null) {
    contents[_MFDS] = __expectString(output[_MFDS]);
  }
  if (output[_BOMXF] != null) {
    contents[_BOMXF] = __expectString(output[_BOMXF]);
  }
  return contents;
};

/**
 * deserializeAws_queryIdentityNotificationAttributes
 */
const de_IdentityNotificationAttributes = (output: any, context: __SerdeContext): IdentityNotificationAttributes => {
  const contents: any = {};
  if (output[_BTo] != null) {
    contents[_BTo] = __expectString(output[_BTo]);
  }
  if (output[_CTo] != null) {
    contents[_CTo] = __expectString(output[_CTo]);
  }
  if (output[_DTel] != null) {
    contents[_DTel] = __expectString(output[_DTel]);
  }
  if (output[_FE] != null) {
    contents[_FE] = __parseBoolean(output[_FE]);
  }
  if (output[_HIBNE] != null) {
    contents[_HIBNE] = __parseBoolean(output[_HIBNE]);
  }
  if (output[_HICNE] != null) {
    contents[_HICNE] = __parseBoolean(output[_HICNE]);
  }
  if (output[_HIDNE] != null) {
    contents[_HIDNE] = __parseBoolean(output[_HIDNE]);
  }
  return contents;
};

/**
 * deserializeAws_queryIdentityVerificationAttributes
 */
const de_IdentityVerificationAttributes = (output: any, context: __SerdeContext): IdentityVerificationAttributes => {
  const contents: any = {};
  if (output[_VS] != null) {
    contents[_VS] = __expectString(output[_VS]);
  }
  if (output[_VT] != null) {
    contents[_VT] = __expectString(output[_VT]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidCloudWatchDestinationException
 */
const de_InvalidCloudWatchDestinationException = (
  output: any,
  context: __SerdeContext
): InvalidCloudWatchDestinationException => {
  const contents: any = {};
  if (output[_CSN] != null) {
    contents[_CSN] = __expectString(output[_CSN]);
  }
  if (output[_EDN] != null) {
    contents[_EDN] = __expectString(output[_EDN]);
  }
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidConfigurationSetException
 */
const de_InvalidConfigurationSetException = (
  output: any,
  context: __SerdeContext
): InvalidConfigurationSetException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidDeliveryOptionsException
 */
const de_InvalidDeliveryOptionsException = (output: any, context: __SerdeContext): InvalidDeliveryOptionsException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidFirehoseDestinationException
 */
const de_InvalidFirehoseDestinationException = (
  output: any,
  context: __SerdeContext
): InvalidFirehoseDestinationException => {
  const contents: any = {};
  if (output[_CSN] != null) {
    contents[_CSN] = __expectString(output[_CSN]);
  }
  if (output[_EDN] != null) {
    contents[_EDN] = __expectString(output[_EDN]);
  }
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidLambdaFunctionException
 */
const de_InvalidLambdaFunctionException = (output: any, context: __SerdeContext): InvalidLambdaFunctionException => {
  const contents: any = {};
  if (output[_FA] != null) {
    contents[_FA] = __expectString(output[_FA]);
  }
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidPolicyException
 */
const de_InvalidPolicyException = (output: any, context: __SerdeContext): InvalidPolicyException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidRenderingParameterException
 */
const de_InvalidRenderingParameterException = (
  output: any,
  context: __SerdeContext
): InvalidRenderingParameterException => {
  const contents: any = {};
  if (output[_TN] != null) {
    contents[_TN] = __expectString(output[_TN]);
  }
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidS3ConfigurationException
 */
const de_InvalidS3ConfigurationException = (output: any, context: __SerdeContext): InvalidS3ConfigurationException => {
  const contents: any = {};
  if (output[_Bu] != null) {
    contents[_Bu] = __expectString(output[_Bu]);
  }
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidSNSDestinationException
 */
const de_InvalidSNSDestinationException = (output: any, context: __SerdeContext): InvalidSNSDestinationException => {
  const contents: any = {};
  if (output[_CSN] != null) {
    contents[_CSN] = __expectString(output[_CSN]);
  }
  if (output[_EDN] != null) {
    contents[_EDN] = __expectString(output[_EDN]);
  }
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidSnsTopicException
 */
const de_InvalidSnsTopicException = (output: any, context: __SerdeContext): InvalidSnsTopicException => {
  const contents: any = {};
  if (output[_To] != null) {
    contents[_To] = __expectString(output[_To]);
  }
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidTemplateException
 */
const de_InvalidTemplateException = (output: any, context: __SerdeContext): InvalidTemplateException => {
  const contents: any = {};
  if (output[_TN] != null) {
    contents[_TN] = __expectString(output[_TN]);
  }
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidTrackingOptionsException
 */
const de_InvalidTrackingOptionsException = (output: any, context: __SerdeContext): InvalidTrackingOptionsException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryKinesisFirehoseDestination
 */
const de_KinesisFirehoseDestination = (output: any, context: __SerdeContext): KinesisFirehoseDestination => {
  const contents: any = {};
  if (output[_IAMRARN] != null) {
    contents[_IAMRARN] = __expectString(output[_IAMRARN]);
  }
  if (output[_DSARN] != null) {
    contents[_DSARN] = __expectString(output[_DSARN]);
  }
  return contents;
};

/**
 * deserializeAws_queryLambdaAction
 */
const de_LambdaAction = (output: any, context: __SerdeContext): LambdaAction => {
  const contents: any = {};
  if (output[_TA] != null) {
    contents[_TA] = __expectString(output[_TA]);
  }
  if (output[_FA] != null) {
    contents[_FA] = __expectString(output[_FA]);
  }
  if (output[_IT] != null) {
    contents[_IT] = __expectString(output[_IT]);
  }
  return contents;
};

/**
 * deserializeAws_queryLimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryListConfigurationSetsResponse
 */
const de_ListConfigurationSetsResponse = (output: any, context: __SerdeContext): ListConfigurationSetsResponse => {
  const contents: any = {};
  if (output.ConfigurationSets === "") {
    contents[_CSo] = [];
  } else if (output[_CSo] != null && output[_CSo][_me] != null) {
    contents[_CSo] = de_ConfigurationSets(__getArrayIfSingleItem(output[_CSo][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryListCustomVerificationEmailTemplatesResponse
 */
const de_ListCustomVerificationEmailTemplatesResponse = (
  output: any,
  context: __SerdeContext
): ListCustomVerificationEmailTemplatesResponse => {
  const contents: any = {};
  if (output.CustomVerificationEmailTemplates === "") {
    contents[_CVET] = [];
  } else if (output[_CVET] != null && output[_CVET][_me] != null) {
    contents[_CVET] = de_CustomVerificationEmailTemplates(__getArrayIfSingleItem(output[_CVET][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryListIdentitiesResponse
 */
const de_ListIdentitiesResponse = (output: any, context: __SerdeContext): ListIdentitiesResponse => {
  const contents: any = {};
  if (output.Identities === "") {
    contents[_Id] = [];
  } else if (output[_Id] != null && output[_Id][_me] != null) {
    contents[_Id] = de_IdentityList(__getArrayIfSingleItem(output[_Id][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryListIdentityPoliciesResponse
 */
const de_ListIdentityPoliciesResponse = (output: any, context: __SerdeContext): ListIdentityPoliciesResponse => {
  const contents: any = {};
  if (output.PolicyNames === "") {
    contents[_PNo] = [];
  } else if (output[_PNo] != null && output[_PNo][_me] != null) {
    contents[_PNo] = de_PolicyNameList(__getArrayIfSingleItem(output[_PNo][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryListReceiptFiltersResponse
 */
const de_ListReceiptFiltersResponse = (output: any, context: __SerdeContext): ListReceiptFiltersResponse => {
  const contents: any = {};
  if (output.Filters === "") {
    contents[_Fi] = [];
  } else if (output[_Fi] != null && output[_Fi][_me] != null) {
    contents[_Fi] = de_ReceiptFilterList(__getArrayIfSingleItem(output[_Fi][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryListReceiptRuleSetsResponse
 */
const de_ListReceiptRuleSetsResponse = (output: any, context: __SerdeContext): ListReceiptRuleSetsResponse => {
  const contents: any = {};
  if (output.RuleSets === "") {
    contents[_RS] = [];
  } else if (output[_RS] != null && output[_RS][_me] != null) {
    contents[_RS] = de_ReceiptRuleSetsLists(__getArrayIfSingleItem(output[_RS][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryListTemplatesResponse
 */
const de_ListTemplatesResponse = (output: any, context: __SerdeContext): ListTemplatesResponse => {
  const contents: any = {};
  if (output.TemplatesMetadata === "") {
    contents[_TM] = [];
  } else if (output[_TM] != null && output[_TM][_me] != null) {
    contents[_TM] = de_TemplateMetadataList(__getArrayIfSingleItem(output[_TM][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryListVerifiedEmailAddressesResponse
 */
const de_ListVerifiedEmailAddressesResponse = (
  output: any,
  context: __SerdeContext
): ListVerifiedEmailAddressesResponse => {
  const contents: any = {};
  if (output.VerifiedEmailAddresses === "") {
    contents[_VEAe] = [];
  } else if (output[_VEAe] != null && output[_VEAe][_me] != null) {
    contents[_VEAe] = de_AddressList(__getArrayIfSingleItem(output[_VEAe][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryMailFromDomainAttributes
 */
const de_MailFromDomainAttributes = (
  output: any,
  context: __SerdeContext
): Record<string, IdentityMailFromDomainAttributes> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = de_IdentityMailFromDomainAttributes(pair["value"], context);
    return acc;
  }, {});
};

/**
 * deserializeAws_queryMailFromDomainNotVerifiedException
 */
const de_MailFromDomainNotVerifiedException = (
  output: any,
  context: __SerdeContext
): MailFromDomainNotVerifiedException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryMessageRejected
 */
const de_MessageRejected = (output: any, context: __SerdeContext): MessageRejected => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryMissingRenderingAttributeException
 */
const de_MissingRenderingAttributeException = (
  output: any,
  context: __SerdeContext
): MissingRenderingAttributeException => {
  const contents: any = {};
  if (output[_TN] != null) {
    contents[_TN] = __expectString(output[_TN]);
  }
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryNotificationAttributes
 */
const de_NotificationAttributes = (
  output: any,
  context: __SerdeContext
): Record<string, IdentityNotificationAttributes> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = de_IdentityNotificationAttributes(pair["value"], context);
    return acc;
  }, {});
};

/**
 * deserializeAws_queryPolicyMap
 */
const de_PolicyMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_queryPolicyNameList
 */
const de_PolicyNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryProductionAccessNotGrantedException
 */
const de_ProductionAccessNotGrantedException = (
  output: any,
  context: __SerdeContext
): ProductionAccessNotGrantedException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryPutConfigurationSetDeliveryOptionsResponse
 */
const de_PutConfigurationSetDeliveryOptionsResponse = (
  output: any,
  context: __SerdeContext
): PutConfigurationSetDeliveryOptionsResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryPutIdentityPolicyResponse
 */
const de_PutIdentityPolicyResponse = (output: any, context: __SerdeContext): PutIdentityPolicyResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryReceiptAction
 */
const de_ReceiptAction = (output: any, context: __SerdeContext): ReceiptAction => {
  const contents: any = {};
  if (output[_SA] != null) {
    contents[_SA] = de_S3Action(output[_SA], context);
  }
  if (output[_BAo] != null) {
    contents[_BAo] = de_BounceAction(output[_BAo], context);
  }
  if (output[_WA] != null) {
    contents[_WA] = de_WorkmailAction(output[_WA], context);
  }
  if (output[_LA] != null) {
    contents[_LA] = de_LambdaAction(output[_LA], context);
  }
  if (output[_SAt] != null) {
    contents[_SAt] = de_StopAction(output[_SAt], context);
  }
  if (output[_AHA] != null) {
    contents[_AHA] = de_AddHeaderAction(output[_AHA], context);
  }
  if (output[_SNSA] != null) {
    contents[_SNSA] = de_SNSAction(output[_SNSA], context);
  }
  if (output[_CAo] != null) {
    contents[_CAo] = de_ConnectAction(output[_CAo], context);
  }
  return contents;
};

/**
 * deserializeAws_queryReceiptActionsList
 */
const de_ReceiptActionsList = (output: any, context: __SerdeContext): ReceiptAction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReceiptAction(entry, context);
    });
};

/**
 * deserializeAws_queryReceiptFilter
 */
const de_ReceiptFilter = (output: any, context: __SerdeContext): ReceiptFilter => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_IF] != null) {
    contents[_IF] = de_ReceiptIpFilter(output[_IF], context);
  }
  return contents;
};

/**
 * deserializeAws_queryReceiptFilterList
 */
const de_ReceiptFilterList = (output: any, context: __SerdeContext): ReceiptFilter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReceiptFilter(entry, context);
    });
};

/**
 * deserializeAws_queryReceiptIpFilter
 */
const de_ReceiptIpFilter = (output: any, context: __SerdeContext): ReceiptIpFilter => {
  const contents: any = {};
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  if (output[_Ci] != null) {
    contents[_Ci] = __expectString(output[_Ci]);
  }
  return contents;
};

/**
 * deserializeAws_queryReceiptRule
 */
const de_ReceiptRule = (output: any, context: __SerdeContext): ReceiptRule => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_E] != null) {
    contents[_E] = __parseBoolean(output[_E]);
  }
  if (output[_TP] != null) {
    contents[_TP] = __expectString(output[_TP]);
  }
  if (output.Recipients === "") {
    contents[_Re] = [];
  } else if (output[_Re] != null && output[_Re][_me] != null) {
    contents[_Re] = de_RecipientsList(__getArrayIfSingleItem(output[_Re][_me]), context);
  }
  if (output.Actions === "") {
    contents[_Ac] = [];
  } else if (output[_Ac] != null && output[_Ac][_me] != null) {
    contents[_Ac] = de_ReceiptActionsList(__getArrayIfSingleItem(output[_Ac][_me]), context);
  }
  if (output[_SEc] != null) {
    contents[_SEc] = __parseBoolean(output[_SEc]);
  }
  return contents;
};

/**
 * deserializeAws_queryReceiptRuleSetMetadata
 */
const de_ReceiptRuleSetMetadata = (output: any, context: __SerdeContext): ReceiptRuleSetMetadata => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_CTr] != null) {
    contents[_CTr] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CTr]));
  }
  return contents;
};

/**
 * deserializeAws_queryReceiptRuleSetsLists
 */
const de_ReceiptRuleSetsLists = (output: any, context: __SerdeContext): ReceiptRuleSetMetadata[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReceiptRuleSetMetadata(entry, context);
    });
};

/**
 * deserializeAws_queryReceiptRulesList
 */
const de_ReceiptRulesList = (output: any, context: __SerdeContext): ReceiptRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReceiptRule(entry, context);
    });
};

/**
 * deserializeAws_queryRecipientsList
 */
const de_RecipientsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryReorderReceiptRuleSetResponse
 */
const de_ReorderReceiptRuleSetResponse = (output: any, context: __SerdeContext): ReorderReceiptRuleSetResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryReputationOptions
 */
const de_ReputationOptions = (output: any, context: __SerdeContext): ReputationOptions => {
  const contents: any = {};
  if (output[_SEe] != null) {
    contents[_SEe] = __parseBoolean(output[_SEe]);
  }
  if (output[_RME] != null) {
    contents[_RME] = __parseBoolean(output[_RME]);
  }
  if (output[_LFS] != null) {
    contents[_LFS] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LFS]));
  }
  return contents;
};

/**
 * deserializeAws_queryRuleDoesNotExistException
 */
const de_RuleDoesNotExistException = (output: any, context: __SerdeContext): RuleDoesNotExistException => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryRuleSetDoesNotExistException
 */
const de_RuleSetDoesNotExistException = (output: any, context: __SerdeContext): RuleSetDoesNotExistException => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryS3Action
 */
const de_S3Action = (output: any, context: __SerdeContext): S3Action => {
  const contents: any = {};
  if (output[_TA] != null) {
    contents[_TA] = __expectString(output[_TA]);
  }
  if (output[_BN] != null) {
    contents[_BN] = __expectString(output[_BN]);
  }
  if (output[_OKP] != null) {
    contents[_OKP] = __expectString(output[_OKP]);
  }
  if (output[_KKA] != null) {
    contents[_KKA] = __expectString(output[_KKA]);
  }
  if (output[_IRA] != null) {
    contents[_IRA] = __expectString(output[_IRA]);
  }
  return contents;
};

/**
 * deserializeAws_querySendBounceResponse
 */
const de_SendBounceResponse = (output: any, context: __SerdeContext): SendBounceResponse => {
  const contents: any = {};
  if (output[_MIe] != null) {
    contents[_MIe] = __expectString(output[_MIe]);
  }
  return contents;
};

/**
 * deserializeAws_querySendBulkTemplatedEmailResponse
 */
const de_SendBulkTemplatedEmailResponse = (output: any, context: __SerdeContext): SendBulkTemplatedEmailResponse => {
  const contents: any = {};
  if (output.Status === "") {
    contents[_St] = [];
  } else if (output[_St] != null && output[_St][_me] != null) {
    contents[_St] = de_BulkEmailDestinationStatusList(__getArrayIfSingleItem(output[_St][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_querySendCustomVerificationEmailResponse
 */
const de_SendCustomVerificationEmailResponse = (
  output: any,
  context: __SerdeContext
): SendCustomVerificationEmailResponse => {
  const contents: any = {};
  if (output[_MIe] != null) {
    contents[_MIe] = __expectString(output[_MIe]);
  }
  return contents;
};

/**
 * deserializeAws_querySendDataPoint
 */
const de_SendDataPoint = (output: any, context: __SerdeContext): SendDataPoint => {
  const contents: any = {};
  if (output[_Ti] != null) {
    contents[_Ti] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_Ti]));
  }
  if (output[_DAe] != null) {
    contents[_DAe] = __strictParseLong(output[_DAe]) as number;
  }
  if (output[_Bo] != null) {
    contents[_Bo] = __strictParseLong(output[_Bo]) as number;
  }
  if (output[_Co] != null) {
    contents[_Co] = __strictParseLong(output[_Co]) as number;
  }
  if (output[_Rej] != null) {
    contents[_Rej] = __strictParseLong(output[_Rej]) as number;
  }
  return contents;
};

/**
 * deserializeAws_querySendDataPointList
 */
const de_SendDataPointList = (output: any, context: __SerdeContext): SendDataPoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SendDataPoint(entry, context);
    });
};

/**
 * deserializeAws_querySendEmailResponse
 */
const de_SendEmailResponse = (output: any, context: __SerdeContext): SendEmailResponse => {
  const contents: any = {};
  if (output[_MIe] != null) {
    contents[_MIe] = __expectString(output[_MIe]);
  }
  return contents;
};

/**
 * deserializeAws_querySendRawEmailResponse
 */
const de_SendRawEmailResponse = (output: any, context: __SerdeContext): SendRawEmailResponse => {
  const contents: any = {};
  if (output[_MIe] != null) {
    contents[_MIe] = __expectString(output[_MIe]);
  }
  return contents;
};

/**
 * deserializeAws_querySendTemplatedEmailResponse
 */
const de_SendTemplatedEmailResponse = (output: any, context: __SerdeContext): SendTemplatedEmailResponse => {
  const contents: any = {};
  if (output[_MIe] != null) {
    contents[_MIe] = __expectString(output[_MIe]);
  }
  return contents;
};

/**
 * deserializeAws_querySetActiveReceiptRuleSetResponse
 */
const de_SetActiveReceiptRuleSetResponse = (output: any, context: __SerdeContext): SetActiveReceiptRuleSetResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_querySetIdentityDkimEnabledResponse
 */
const de_SetIdentityDkimEnabledResponse = (output: any, context: __SerdeContext): SetIdentityDkimEnabledResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_querySetIdentityFeedbackForwardingEnabledResponse
 */
const de_SetIdentityFeedbackForwardingEnabledResponse = (
  output: any,
  context: __SerdeContext
): SetIdentityFeedbackForwardingEnabledResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_querySetIdentityHeadersInNotificationsEnabledResponse
 */
const de_SetIdentityHeadersInNotificationsEnabledResponse = (
  output: any,
  context: __SerdeContext
): SetIdentityHeadersInNotificationsEnabledResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_querySetIdentityMailFromDomainResponse
 */
const de_SetIdentityMailFromDomainResponse = (
  output: any,
  context: __SerdeContext
): SetIdentityMailFromDomainResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_querySetIdentityNotificationTopicResponse
 */
const de_SetIdentityNotificationTopicResponse = (
  output: any,
  context: __SerdeContext
): SetIdentityNotificationTopicResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_querySetReceiptRulePositionResponse
 */
const de_SetReceiptRulePositionResponse = (output: any, context: __SerdeContext): SetReceiptRulePositionResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_querySNSAction
 */
const de_SNSAction = (output: any, context: __SerdeContext): SNSAction => {
  const contents: any = {};
  if (output[_TA] != null) {
    contents[_TA] = __expectString(output[_TA]);
  }
  if (output[_En] != null) {
    contents[_En] = __expectString(output[_En]);
  }
  return contents;
};

/**
 * deserializeAws_querySNSDestination
 */
const de_SNSDestination = (output: any, context: __SerdeContext): SNSDestination => {
  const contents: any = {};
  if (output[_TARN] != null) {
    contents[_TARN] = __expectString(output[_TARN]);
  }
  return contents;
};

/**
 * deserializeAws_queryStopAction
 */
const de_StopAction = (output: any, context: __SerdeContext): StopAction => {
  const contents: any = {};
  if (output[_Sc] != null) {
    contents[_Sc] = __expectString(output[_Sc]);
  }
  if (output[_TA] != null) {
    contents[_TA] = __expectString(output[_TA]);
  }
  return contents;
};

/**
 * deserializeAws_queryTemplate
 */
const de_Template = (output: any, context: __SerdeContext): Template => {
  const contents: any = {};
  if (output[_TN] != null) {
    contents[_TN] = __expectString(output[_TN]);
  }
  if (output[_SP] != null) {
    contents[_SP] = __expectString(output[_SP]);
  }
  if (output[_TPe] != null) {
    contents[_TPe] = __expectString(output[_TPe]);
  }
  if (output[_HP] != null) {
    contents[_HP] = __expectString(output[_HP]);
  }
  return contents;
};

/**
 * deserializeAws_queryTemplateDoesNotExistException
 */
const de_TemplateDoesNotExistException = (output: any, context: __SerdeContext): TemplateDoesNotExistException => {
  const contents: any = {};
  if (output[_TN] != null) {
    contents[_TN] = __expectString(output[_TN]);
  }
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryTemplateMetadata
 */
const de_TemplateMetadata = (output: any, context: __SerdeContext): TemplateMetadata => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_CTr] != null) {
    contents[_CTr] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CTr]));
  }
  return contents;
};

/**
 * deserializeAws_queryTemplateMetadataList
 */
const de_TemplateMetadataList = (output: any, context: __SerdeContext): TemplateMetadata[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TemplateMetadata(entry, context);
    });
};

/**
 * deserializeAws_queryTestRenderTemplateResponse
 */
const de_TestRenderTemplateResponse = (output: any, context: __SerdeContext): TestRenderTemplateResponse => {
  const contents: any = {};
  if (output[_RTe] != null) {
    contents[_RTe] = __expectString(output[_RTe]);
  }
  return contents;
};

/**
 * deserializeAws_queryTrackingOptions
 */
const de_TrackingOptions = (output: any, context: __SerdeContext): TrackingOptions => {
  const contents: any = {};
  if (output[_CRD] != null) {
    contents[_CRD] = __expectString(output[_CRD]);
  }
  return contents;
};

/**
 * deserializeAws_queryTrackingOptionsAlreadyExistsException
 */
const de_TrackingOptionsAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): TrackingOptionsAlreadyExistsException => {
  const contents: any = {};
  if (output[_CSN] != null) {
    contents[_CSN] = __expectString(output[_CSN]);
  }
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryTrackingOptionsDoesNotExistException
 */
const de_TrackingOptionsDoesNotExistException = (
  output: any,
  context: __SerdeContext
): TrackingOptionsDoesNotExistException => {
  const contents: any = {};
  if (output[_CSN] != null) {
    contents[_CSN] = __expectString(output[_CSN]);
  }
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryUpdateConfigurationSetEventDestinationResponse
 */
const de_UpdateConfigurationSetEventDestinationResponse = (
  output: any,
  context: __SerdeContext
): UpdateConfigurationSetEventDestinationResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryUpdateConfigurationSetTrackingOptionsResponse
 */
const de_UpdateConfigurationSetTrackingOptionsResponse = (
  output: any,
  context: __SerdeContext
): UpdateConfigurationSetTrackingOptionsResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryUpdateReceiptRuleResponse
 */
const de_UpdateReceiptRuleResponse = (output: any, context: __SerdeContext): UpdateReceiptRuleResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryUpdateTemplateResponse
 */
const de_UpdateTemplateResponse = (output: any, context: __SerdeContext): UpdateTemplateResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryVerificationAttributes
 */
const de_VerificationAttributes = (
  output: any,
  context: __SerdeContext
): Record<string, IdentityVerificationAttributes> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = de_IdentityVerificationAttributes(pair["value"], context);
    return acc;
  }, {});
};

/**
 * deserializeAws_queryVerificationTokenList
 */
const de_VerificationTokenList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryVerifyDomainDkimResponse
 */
const de_VerifyDomainDkimResponse = (output: any, context: __SerdeContext): VerifyDomainDkimResponse => {
  const contents: any = {};
  if (output.DkimTokens === "") {
    contents[_DTk] = [];
  } else if (output[_DTk] != null && output[_DTk][_me] != null) {
    contents[_DTk] = de_VerificationTokenList(__getArrayIfSingleItem(output[_DTk][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryVerifyDomainIdentityResponse
 */
const de_VerifyDomainIdentityResponse = (output: any, context: __SerdeContext): VerifyDomainIdentityResponse => {
  const contents: any = {};
  if (output[_VT] != null) {
    contents[_VT] = __expectString(output[_VT]);
  }
  return contents;
};

/**
 * deserializeAws_queryVerifyEmailIdentityResponse
 */
const de_VerifyEmailIdentityResponse = (output: any, context: __SerdeContext): VerifyEmailIdentityResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryWorkmailAction
 */
const de_WorkmailAction = (output: any, context: __SerdeContext): WorkmailAction => {
  const contents: any = {};
  if (output[_TA] != null) {
    contents[_TA] = __expectString(output[_TA]);
  }
  if (output[_OA] != null) {
    contents[_OA] = __expectString(output[_OA]);
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

const _ = "2010-12-01";
const _A = "Action";
const _AD = "ArrivalDate";
const _AHA = "AddHeaderAction";
const _Ac = "Actions";
const _Af = "After";
const _B = "Body";
const _BA = "BccAddresses";
const _BAo = "BounceAction";
const _BN = "BucketName";
const _BOMXF = "BehaviorOnMXFailure";
const _BRIL = "BouncedRecipientInfoList";
const _BS = "BounceSender";
const _BSA = "BounceSenderArn";
const _BT = "BounceType";
const _BTo = "BounceTopic";
const _Bo = "Bounces";
const _Bu = "Bucket";
const _C = "Charset";
const _CA = "CcAddresses";
const _CAo = "ConnectAction";
const _CCS = "CreateConfigurationSet";
const _CCSED = "CreateConfigurationSetEventDestination";
const _CCSTO = "CreateConfigurationSetTrackingOptions";
const _CCVET = "CreateCustomVerificationEmailTemplate";
const _CRD = "CustomRedirectDomain";
const _CRF = "CreateReceiptFilter";
const _CRR = "CreateReceiptRule";
const _CRRS = "CloneReceiptRuleSet";
const _CRRSr = "CreateReceiptRuleSet";
const _CS = "ConfigurationSet";
const _CSAN = "ConfigurationSetAttributeNames";
const _CSN = "ConfigurationSetName";
const _CSo = "ConfigurationSets";
const _CT = "CreateTemplate";
const _CTo = "ComplaintTopic";
const _CTr = "CreatedTimestamp";
const _CVET = "CustomVerificationEmailTemplates";
const _CVETN = "CustomVerificationEmailTemplateName";
const _CWD = "CloudWatchDestination";
const _Ci = "Cidr";
const _Co = "Complaints";
const _D = "Destination";
const _DA = "DkimAttributes";
const _DARRS = "DescribeActiveReceiptRuleSet";
const _DAe = "DeliveryAttempts";
const _DC = "DimensionConfigurations";
const _DCS = "DeleteConfigurationSet";
const _DCSED = "DeleteConfigurationSetEventDestination";
const _DCSTO = "DeleteConfigurationSetTrackingOptions";
const _DCSe = "DescribeConfigurationSet";
const _DCVET = "DeleteCustomVerificationEmailTemplate";
const _DCi = "DiagnosticCode";
const _DDV = "DefaultDimensionValue";
const _DE = "DkimEnabled";
const _DI = "DeleteIdentity";
const _DIP = "DeleteIdentityPolicy";
const _DN = "DimensionName";
const _DO = "DeliveryOptions";
const _DRF = "DeleteReceiptFilter";
const _DRR = "DeleteReceiptRule";
const _DRRS = "DeleteReceiptRuleSet";
const _DRRSe = "DescribeReceiptRuleSet";
const _DRRe = "DescribeReceiptRule";
const _DSARN = "DeliveryStreamARN";
const _DT = "DeleteTemplate";
const _DTD = "DefaultTemplateData";
const _DTe = "DefaultTags";
const _DTel = "DeliveryTopic";
const _DTk = "DkimTokens";
const _DVEA = "DeleteVerifiedEmailAddress";
const _DVS = "DimensionValueSource";
const _DVSk = "DkimVerificationStatus";
const _Da = "Data";
const _De = "Destinations";
const _Do = "Domain";
const _E = "Enabled";
const _EA = "EmailAddress";
const _ED = "EventDestination";
const _EDN = "EventDestinationName";
const _EDv = "EventDestinations";
const _EF = "ExtensionFields";
const _En = "Encoding";
const _Er = "Error";
const _Ex = "Explanation";
const _F = "Filter";
const _FA = "FunctionArn";
const _FAr = "FromArn";
const _FE = "ForwardingEnabled";
const _FEA = "FromEmailAddress";
const _FN = "FilterName";
const _FR = "FinalRecipient";
const _FRURL = "FailureRedirectionURL";
const _Fi = "Filters";
const _GASE = "GetAccountSendingEnabled";
const _GCVET = "GetCustomVerificationEmailTemplate";
const _GIDA = "GetIdentityDkimAttributes";
const _GIMFDA = "GetIdentityMailFromDomainAttributes";
const _GINA = "GetIdentityNotificationAttributes";
const _GIP = "GetIdentityPolicies";
const _GIVA = "GetIdentityVerificationAttributes";
const _GSQ = "GetSendQuota";
const _GSS = "GetSendStatistics";
const _GT = "GetTemplate";
const _H = "Html";
const _HIBNE = "HeadersInBounceNotificationsEnabled";
const _HICNE = "HeadersInComplaintNotificationsEnabled";
const _HIDNE = "HeadersInDeliveryNotificationsEnabled";
const _HN = "HeaderName";
const _HP = "HtmlPart";
const _HV = "HeaderValue";
const _I = "Identity";
const _IAMRARN = "IAMRoleARN";
const _IARN = "InstanceARN";
const _IF = "IpFilter";
const _IRA = "IamRoleArn";
const _IT = "InvocationType";
const _ITd = "IdentityType";
const _Id = "Identities";
const _KFD = "KinesisFirehoseDestination";
const _KKA = "KmsKeyArn";
const _LA = "LambdaAction";
const _LAD = "LastAttemptDate";
const _LCS = "ListConfigurationSets";
const _LCVET = "ListCustomVerificationEmailTemplates";
const _LFS = "LastFreshStart";
const _LI = "ListIdentities";
const _LIP = "ListIdentityPolicies";
const _LRF = "ListReceiptFilters";
const _LRRS = "ListReceiptRuleSets";
const _LT = "ListTemplates";
const _LVEA = "ListVerifiedEmailAddresses";
const _M = "Message";
const _MD = "MessageDsn";
const _MET = "MatchingEventTypes";
const _MFD = "MailFromDomain";
const _MFDA = "MailFromDomainAttributes";
const _MFDS = "MailFromDomainStatus";
const _MHS = "Max24HourSend";
const _MI = "MaxItems";
const _MIe = "MessageId";
const _MR = "MaxResults";
const _MSR = "MaxSendRate";
const _Me = "Metadata";
const _N = "Name";
const _NA = "NotificationAttributes";
const _NT = "NextToken";
const _NTo = "NotificationType";
const _OA = "OrganizationArn";
const _OKP = "ObjectKeyPrefix";
const _OMI = "OriginalMessageId";
const _ORSN = "OriginalRuleSetName";
const _P = "Policy";
const _PCSDO = "PutConfigurationSetDeliveryOptions";
const _PIP = "PutIdentityPolicy";
const _PN = "PolicyName";
const _PNo = "PolicyNames";
const _Po = "Policies";
const _R = "Recipient";
const _RA = "RecipientArn";
const _RDF = "RecipientDsnFields";
const _RM = "ReportingMta";
const _RME = "ReputationMetricsEnabled";
const _RMa = "RawMessage";
const _RMe = "RemoteMta";
const _RN = "RuleName";
const _RNu = "RuleNames";
const _RO = "ReputationOptions";
const _RP = "ReturnPath";
const _RPA = "ReturnPathArn";
const _RRRS = "ReorderReceiptRuleSet";
const _RS = "RuleSets";
const _RSN = "RuleSetName";
const _RT = "ReplacementTags";
const _RTA = "ReplyToAddresses";
const _RTD = "ReplacementTemplateData";
const _RTe = "RenderedTemplate";
const _Re = "Recipients";
const _Rej = "Rejects";
const _Ru = "Rule";
const _Rul = "Rules";
const _S = "Sender";
const _SA = "S3Action";
const _SARRS = "SetActiveReceiptRuleSet";
const _SAo = "SourceArn";
const _SAt = "StopAction";
const _SB = "SendBounce";
const _SBTE = "SendBulkTemplatedEmail";
const _SC = "StatusCode";
const _SCVE = "SendCustomVerificationEmail";
const _SDP = "SendDataPoints";
const _SE = "SendEmail";
const _SEc = "ScanEnabled";
const _SEe = "SendingEnabled";
const _SIDE = "SetIdentityDkimEnabled";
const _SIFFE = "SetIdentityFeedbackForwardingEnabled";
const _SIHINE = "SetIdentityHeadersInNotificationsEnabled";
const _SIMFD = "SetIdentityMailFromDomain";
const _SINT = "SetIdentityNotificationTopic";
const _SLH = "SentLast24Hours";
const _SNSA = "SNSAction";
const _SNSD = "SNSDestination";
const _SP = "SubjectPart";
const _SRC = "SmtpReplyCode";
const _SRE = "SendRawEmail";
const _SRRP = "SetReceiptRulePosition";
const _SRURL = "SuccessRedirectionURL";
const _ST = "SnsTopic";
const _STE = "SendTemplatedEmail";
const _Sc = "Scope";
const _So = "Source";
const _St = "Status";
const _Su = "Subject";
const _T = "Text";
const _TA = "TopicArn";
const _TARN = "TopicARN";
const _TAe = "TemplateArn";
const _TAo = "ToAddresses";
const _TC = "TemplateContent";
const _TD = "TemplateData";
const _TM = "TemplatesMetadata";
const _TN = "TemplateName";
const _TO = "TrackingOptions";
const _TP = "TlsPolicy";
const _TPe = "TextPart";
const _TRT = "TestRenderTemplate";
const _TS = "TemplateSubject";
const _Ta = "Tags";
const _Te = "Template";
const _Ti = "Timestamp";
const _To = "Topic";
const _UASE = "UpdateAccountSendingEnabled";
const _UCSED = "UpdateConfigurationSetEventDestination";
const _UCSRME = "UpdateConfigurationSetReputationMetricsEnabled";
const _UCSSE = "UpdateConfigurationSetSendingEnabled";
const _UCSTO = "UpdateConfigurationSetTrackingOptions";
const _UCVET = "UpdateCustomVerificationEmailTemplate";
const _URR = "UpdateReceiptRule";
const _UT = "UpdateTemplate";
const _V = "Version";
const _VA = "VerificationAttributes";
const _VDD = "VerifyDomainDkim";
const _VDI = "VerifyDomainIdentity";
const _VEA = "VerifyEmailAddress";
const _VEAe = "VerifiedEmailAddresses";
const _VEI = "VerifyEmailIdentity";
const _VS = "VerificationStatus";
const _VT = "VerificationToken";
const _Va = "Value";
const _WA = "WorkmailAction";
const _e = "entry";
const _m = "message";
const _me = "member";

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
